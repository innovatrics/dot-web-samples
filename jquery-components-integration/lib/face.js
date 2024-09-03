var ag = Object.defineProperty;
var ki = (x) => {
  throw TypeError(x);
};
var sg = (x, o, t) => o in x ? ag(x, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : x[o] = t;
var j = (x, o, t) => sg(x, typeof o != "symbol" ? o + "" : o, t), Hi = (x, o, t) => o.has(x) || ki("Cannot " + t);
var X = (x, o, t) => (Hi(x, o, "read from private field"), t ? t.call(x) : o.get(x)), de = (x, o, t) => o.has(x) ? ki("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(x) : o.set(x, t), ae = (x, o, t, e) => (Hi(x, o, "write to private field"), e ? e.call(x, t) : o.set(x, t), t);
var Kn, N, Qa, Ua, n0, Oi, za, Yo, kr, Xo, Mo, qa, fn = {}, $a = [], cg = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, qx = Array.isArray;
function Pt(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function es(x) {
  var o = x.parentNode;
  o && o.removeChild(x);
}
function Ye(x, o, t) {
  var e, n, r, i = {};
  for (r in o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : i[r] = o[r];
  if (arguments.length > 6 * -699 + -7397 * -1 + 3201 * -1 && (i.children = arguments.length > -69 * -87 + 1 * -310 + -5690 ? Kn.call(arguments, 2) : t), typeof x == "function" && x.defaultProps != null)
    for (r in x.defaultProps) void (2 * 413 + -5374 + 4548) === i[r] && (i[r] = x.defaultProps[r]);
  return gn(x, i, e, n, null);
}
function gn(x, o, t, e, n) {
  var r = {};
  r.type = x, r.props = o, r.key = t, r.ref = e, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (-7997 * 1 + -2840 + 10837), r.__c = null, r.constructor = void (4327 + -63 * 55 + -862), r.__v = n ?? ++Qa, r.__i = -(-37 * -79 + -3633 + 711), r.__u = 0;
  var i = r;
  return n == null && N.vnode != null && N.vnode(i), i;
}
function gg() {
  var x = {};
  return x.current = null, x;
}
function bt(x) {
  return x.children;
}
function dt(x, o) {
  this.props = x, this.context = o;
}
function g0(x, o) {
  if (o == null) return x.__ ? g0(x.__, x.__i + (509 * 1 + 1 * -9677 + 9169)) : null;
  for (var t; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) return t.__e;
  return typeof x.type == "function" ? g0(x) : null;
}
function ts(x) {
  var o, t;
  if ((x = x.__) != null && x.__c != null) {
    for (x.__e = x.__c.base = null, o = 1 * 3027 + -6839 + 3812; o < x.__k.length; o++) if ((t = x.__k[o]) != null && t.__e != null) {
      x.__e = x.__c.base = t.__e;
      break;
    }
    return ts(x);
  }
}
function jo(x) {
  (!x.__d && (x.__d = !(8422 + -3209 * -2 + -14840)) && n0.push(x) && !yx.__r++ || Oi !== N.debounceRendering) && ((Oi = N.debounceRendering) || za)(yx);
}
function yx() {
  var x, o, t, e, n, r, i, a;
  for (n0.sort(Yo); x = n0.shift(); ) x.__d && (o = n0.length, e = void 0, r = (n = (t = x).__v).__e, i = [], a = [], t.__P && ((e = Pt({}, n)).__v = n.__v + (1 * -454 + 67 * 65 + -3900), N.vnode && N.vnode(e), Hr(t.__P, e, n, t.__n, t.__P.namespaceURI, -1 * -3903 + 1118 + -4989 & n.__u ? [r] : null, i, r ?? g0(n), !!(1246 + -1 * 1214 & n.__u), a), e.__v = n.__v, e.__.__k[e.__i] = e, os(i, e, a), e.__e != r && ts(e)), n0.length > o && n0.sort(Yo));
  yx.__r = 17 * 26 + -311 * -13 + -4485;
}
function ns(x, o, t, e, n, r, i, a, s, c, d) {
  var g, C, l, h, p, A = e && e.__k || $a, u = o.length;
  for (t.__d = s, dg(t, o, A), s = t.__d, g = 1 * 3012 + 489 * -2 + -2 * 1017; g < u; g++) (l = t.__k[g]) != null && typeof l != "boolean" && typeof l != "function" && (C = -(-185 * 1 + -3419 + -1 * -3605) === l.__i ? fn : A[l.__i] || fn, l.__i = g, Hr(x, l, C, n, r, i, a, s, c, d), h = l.__e, l.ref && C.ref != l.ref && (C.ref && Or(C.ref, null, l), d.push(l.ref, l.__c || h, l)), p == null && h != null && (p = h), 50423 + -149 * 16 + 17497 & l.__u || C.__k === l.__k ? (s && typeof l.type == "string" && !x.contains(s) && (s = g0(C)), s = xs(l, s, x)) : typeof l.type == "function" && void (-3967 * 1 + 1917 + -82 * -25) !== l.__d ? s = l.__d : h && (s = h.nextSibling), l.__d = void (-1 * 6526 + 255 * -6 + 424 * 19), l.__u &= -(31451 * -1 + -1 * -350888 + -61414 * 2));
  t.__d = s, t.__e = p;
}
function dg(x, o, t) {
  var e, n, r, i, a, s = o.length, c = t.length, d = c, g = 1 * 4201 + -7712 + -1 * -3511;
  for (x.__k = [], e = 6931 + 2 * -3867 + 803; e < s; e++) i = e + g, (n = x.__k[e] = (n = o[e]) == null || typeof n == "boolean" || typeof n == "function" ? null : typeof n == "string" || typeof n == "number" || typeof n == "bigint" || n.constructor == String ? gn(null, n, null, null, null) : qx(n) ? gn(bt, { children: n }, null, null, null) : void (9124 * 1 + 5835 + -14959) === n.constructor && n.__b > -4615 + 1 * 4615 ? gn(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v) : n) != null ? (n.__ = x, n.__b = x.__b + (-182 * -37 + -7694 + 961), a = ug(n, t, i, d), n.__i = a, r = null, a !== -1 && (d--, (r = t[a]) && (r.__u |= 2 * -58769 + -63653 * 1 + -1 * -312263)), r == null || r.__v === null ? (-(24 * 257 + 1669 * -1 + -4498) == a && g--, typeof n.type != "function" && (n.__u |= -44 * 2096 + -66605 * -1 + 91155)) : a !== i && (a == i - (-6726 + -2 * -11 + 6705) ? g = a - i : a == i + (5 * 584 + 1208 + 4127 * -1) ? g++ : a > i ? d > s - i ? g += a - i : g-- : a < i && g++, a !== e + g && (n.__u |= 36 * -3539 + 48177 + 144763))) : (r = t[i]) && r.key == null && r.__e && -5248 * -1 + 7098 + -12346 == (-34722 + 2 * 82897 & r.__u) && (r.__e == x.__d && (x.__d = g0(r)), Jo(r, r, !(-1 * -6285 + 3602 + 1 * -9886)), t[i] = null, d--);
  if (d)
    for (e = -2245 + -13 * 422 + 859 * 9; e < c; e++) (r = t[e]) != null && -1566 * 5 + -1 * -1699 + 6131 * 1 == (131072 & r.__u) && (r.__e == x.__d && (x.__d = g0(r)), Jo(r, r));
}
function xs(x, o, t) {
  var e, n;
  if (typeof x.type == "function") {
    for (e = x.__k, n = 1286 + 9857 * -1 + 1 * 8571; e && n < e.length; n++) e[n] && (e[n].__ = x, o = xs(e[n], o, t));
    return o;
  }
  x.__e != o && (t.insertBefore(x.__e, o || null), o = x.__e);
  do
    o = o && o.nextSibling;
  while (o != null && -487 * 18 + 3158 * 2 + 2 * 1229 === o.nodeType);
  return o;
}
function Vt(x, o) {
  return o = o || [], x == null || typeof x == "boolean" || (qx(x) ? x.some(function(t) {
    Vt(t, o);
  }) : o.push(x)), o;
}
function ug(x, o, t, e) {
  var n = x.key, r = x.type, i = t - (-5703 + 1741 * -4 + 6334 * 2), a = t + (67 + 1491 * 1 + -1557), s = o[t];
  if (s === null || s && n == s.key && r === s.type && -9828 + -1 * 4363 + 14191 == (-5042 * 29 + 32687 * -7 + -331 * -1529 & s.__u)) return t;
  if (e > (s != null && 3 * 2537 + 1590 * 1 + 3 * -3067 == (-41 * -743 + 1 * 25957 + 6221 * 12 & s.__u) ? 2138 + -58 * -96 + 1 * -7705 : -2291 + 287 * 26 + -5171 * 1)) for (; i >= 4 * -1453 + -5940 + 2 * 5876 || a < o.length; ) {
    if (i >= -3614 * 2 + -1597 + -1 * -8825) {
      if ((s = o[i]) && !(1 * 218125 + 1 * -86708 + -23 * 15 & s.__u) && n == s.key && r === s.type) return i;
      i--;
    }
    if (a < o.length) {
      if ((s = o[a]) && -7485 + -3 * -515 + 5940 == (131072 & s.__u) && n == s.key && r === s.type) return a;
      a++;
    }
  }
  return -(4 * 119 + -37 * -17 + -1104);
}
function Ki(x, o, t) {
  o[4703 * 1 + -4225 * 1 + -478] === "-" ? x.setProperty(o, t ?? "") : x[o] = t == null ? "" : typeof t != "number" || cg.test(o) ? t : t + "px";
}
function Qn(x, o, t, e, n) {
  var r;
  e: if (o === "style")
    if (typeof t == "string") x.style.cssText = t;
    else {
      if (typeof e == "string" && (x.style.cssText = e = ""), e)
        for (o in e) t && o in t || Ki(x.style, o, "");
      if (t)
        for (o in t) e && t[o] === e[o] || Ki(x.style, o, t[o]);
    }
  else if (o[-5206 + -73 * 97 + 12287] === "o" && o[9261 + 355 * -13 + -5 * 929] === "n") r = o !== (o = o.replace(/(PointerCapture)$|Capture$/i, "$1")), o = o.toLowerCase() in x || o === "onFocusOut" || o === "onFocusIn" ? o.toLowerCase().slice(1 * 408 + 7603 + -8009) : o.slice(2), x.l || (x.l = {}), x.l[o + r] = t, t ? e ? t.u = e.u : (t.u = kr, x.addEventListener(o, r ? Mo : Xo, r)) : x.removeEventListener(o, r ? Mo : Xo, r);
  else {
    if (n == "http://www.w3.org/2000/svg") o = o.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (o != "width" && o != "height" && o != "href" && o != "list" && o != "form" && o != "tabIndex" && o != "download" && o != "rowSpan" && o != "colSpan" && o != "role" && o != "popover" && o in x) try {
      x[o] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || !(836 + -167 * 5) === t && o[-4958 + -4962 * -1] !== "-" ? x.removeAttribute(o) : x.setAttribute(o, o == "popover" && 1 * 5997 + -2281 * 1 + -3715 == t ? "" : t));
  }
}
function Zi(x) {
  return function(o) {
    if (this.l) {
      var t = this.l[o.type + x];
      if (o.t == null) o.t = kr++;
      else if (o.t < t.u) return;
      return t(N.event ? N.event(o) : o);
    }
  };
}
function Hr(x, o, t, e, n, r, i, a, s, c) {
  var d, g, C, l, h, p, A, u, v, H, F, J, Y, O, _, Ie, U = o.type;
  if (void (-9590 * 1 + -6233 + 15823) !== o.constructor) return null;
  -920 * 3 + -35 * 146 + -86 * -93 & t.__u && (s = !!(32 & t.__u), r = [a = o.__e = t.__e]), (d = N.__b) && d(o);
  e: if (typeof U == "function") try {
    if (u = o.props, v = "prototype" in U && U.prototype.render, H = (d = U.contextType) && e[d.__c], F = d ? H ? H.props.value : d.__ : e, t.__c ? A = (g = o.__c = t.__c).__ = g.__E : (v ? o.__c = g = new U(u, F) : (o.__c = g = new dt(u, F), g.constructor = U, g.render = Ig), H && H.sub(g), g.props = u, g.state || (g.state = {}), g.context = F, g.__n = e, C = g.__d = !(-74 * 22 + -2695 + 4323), g.__h = [], g._sb = []), v && g.__s == null && (g.__s = g.state), v && U.getDerivedStateFromProps != null && (g.__s == g.state && (g.__s = Pt({}, g.__s)), Pt(g.__s, U.getDerivedStateFromProps(u, g.__s))), l = g.props, h = g.state, g.__v = o, C) v && U.getDerivedStateFromProps == null && g.componentWillMount != null && g.componentWillMount(), v && g.componentDidMount != null && g.__h.push(g.componentDidMount);
    else {
      if (v && U.getDerivedStateFromProps == null && u !== l && g.componentWillReceiveProps != null && g.componentWillReceiveProps(u, F), !g.__e && (g.shouldComponentUpdate != null && !(9 * -707 + -4657 * 1 + 11021) === g.shouldComponentUpdate(u, g.__s, F) || o.__v === t.__v)) {
        for (o.__v !== t.__v && (g.props = u, g.state = g.__s, g.__d = !1), o.__e = t.__e, o.__k = t.__k, o.__k.forEach(function(fe) {
          fe && (fe.__ = o);
        }), J = 1 * -1005 + 2193 + -1188; J < g._sb.length; J++) g.__h.push(g._sb[J]);
        g._sb = [], g.__h.length && i.push(g);
        break e;
      }
      g.componentWillUpdate != null && g.componentWillUpdate(u, g.__s, F), v && g.componentDidUpdate != null && g.__h.push(function() {
        g.componentDidUpdate(l, h, p);
      });
    }
    if (g.context = F, g.props = u, g.__P = x, g.__e = !(-509 * -3 + 771 + 1 * -2297), Y = N.__r, O = 10 * 707 + -5 * 281 + -515 * 11, v) {
      for (g.state = g.__s, g.__d = !(1 * -8179 + -3486 + 11666), Y && Y(o), d = g.render(g.props, g.state, g.context), _ = 0; _ < g._sb.length; _++) g.__h.push(g._sb[_]);
      g._sb = [];
    } else do
      g.__d = !(-2217 + -2218 * -1), Y && Y(o), d = g.render(g.props, g.state, g.context), g.state = g.__s;
    while (g.__d && ++O < 1409 + 6 * -576 + -1 * -2072);
    g.state = g.__s, g.getChildContext != null && (e = Pt(Pt({}, e), g.getChildContext())), v && !C && g.getSnapshotBeforeUpdate != null && (p = g.getSnapshotBeforeUpdate(l, h)), ns(x, qx(Ie = d != null && d.type === bt && d.key == null ? d.props.children : d) ? Ie : [Ie], o, t, e, n, r, i, a, s, c), g.base = o.__e, o.__u &= -(-1 * 2631 + -121 * -13 + -23 * -53), g.__h.length && i.push(g), A && (g.__E = g.__ = null);
  } catch (fe) {
    o.__v = null, s || r != null ? (o.__e = a, o.__u |= s ? -4058 * -1 + -5173 + 1275 : 29 * -83 + 9294 * 1 + -1371 * 5, r[r.indexOf(a)] = null) : (o.__e = t.__e, o.__k = t.__k), N.__e(fe, o, t);
  }
  else r == null && o.__v === t.__v ? (o.__k = t.__k, o.__e = t.__e) : o.__e = lg(t.__e, o, t, e, n, r, i, s, c);
  (d = N.diffed) && d(o);
}
function os(x, o, t) {
  o.__d = void (-9342 + -1994 * 4 + 17318);
  for (var e = -1169 * 8 + -4882 + 14234; e < t.length; e++) Or(t[e], t[++e], t[++e]);
  N.__c && N.__c(o, x), x.some(function(n) {
    try {
      x = n.__h, n.__h = [], x.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      N.__e(r, n.__v);
    }
  });
}
function lg(x, o, t, e, n, r, i, a, s) {
  var c, d, g, C, l, h, p, A = t.props, u = o.props, v = o.type;
  if (v === "svg" ? n = "http://www.w3.org/2000/svg" : v === "math" ? n = "http://www.w3.org/1998/Math/MathML" : n || (n = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = -1 * 5939 + 28 * 16 + -323 * -17; c < r.length; c++) if ((l = r[c]) && "setAttribute" in l == !!v && (v ? l.localName === v : -2 * -989 + 9327 * 1 + -11302 === l.nodeType)) {
      x = l, r[c] = null;
      break;
    }
  }
  if (x == null) {
    if (v === null) return document.createTextNode(u);
    x = document.createElementNS(n, v, u.is && u), r = null, a = !(5675 + 10 * 889 + -14564);
  }
  if (v === null) A === u || a && x.data === u || (x.data = u);
  else {
    if (r = r && Kn.call(x.childNodes), A = t.props || fn, !a && r != null)
      for (A = {}, c = 12587 + -12587 * 1; c < x.attributes.length; c++) A[(l = x.attributes[c]).name] = l.value;
    for (c in A) if (l = A[c], c != "children") {
      if (c == "dangerouslySetInnerHTML") g = l;
      else if (c !== "key" && !(c in u)) {
        if (c == "value" && "defaultValue" in u || c == "checked" && "defaultChecked" in u) continue;
        Qn(x, c, null, l, n);
      }
    }
    for (c in u) l = u[c], c == "children" ? C = l : c == "dangerouslySetInnerHTML" ? d = l : c == "value" ? h = l : c == "checked" ? p = l : c === "key" || a && typeof l != "function" || A[c] === l || Qn(x, c, l, A[c], n);
    if (d) a || g && (d.__html === g.__html || d.__html === x.innerHTML) || (x.innerHTML = d.__html), o.__k = [];
    else if (g && (x.innerHTML = ""), ns(x, qx(C) ? C : [C], o, t, e, v === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n, r, i, r ? r[0] : t.__k && g0(t, 2 * -3256 + -44 + 6556), a, s), r != null)
      for (c = r.length; c--; ) r[c] != null && es(r[c]);
    a || (c = "value", void (3882 + -2 * -4643 + -13168) !== h && (h !== x[c] || v === "progress" && !h || v === "option" && h !== A[c]) && Qn(x, c, h, A[c], n), c = "checked", void (-1 * 3024 + -5428 + 8452) !== p && p !== x[c] && Qn(x, c, p, A[c], n));
  }
  return x;
}
function Or(x, o, t) {
  try {
    typeof x == "function" ? x(o) : x.current = o;
  } catch (e) {
    N.__e(e, t);
  }
}
function Jo(x, o, t) {
  var e, n;
  if (N.unmount && N.unmount(x), (e = x.ref) && (e.current && e.current !== x.__e || Or(e, null, o)), (e = x.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (r) {
      N.__e(r, o);
    }
    e.base = e.__P = null;
  }
  if (e = x.__k)
    for (n = 6461 + -6 * -499 + -31 * 305; n < e.length; n++) e[n] && Jo(e[n], o, t || typeof x.type != "function");
  t || x.__e == null || es(x.__e), x.__c = x.__ = x.__e = x.__d = void (-7488 + 2719 * 1 + 19 * 251);
}
function Ig(x, o, t) {
  return this.constructor(x, t);
}
function jt(x, o, t) {
  var e, n, r, i;
  N.__ && N.__(x, o), n = (e = typeof t == "function") ? null : t && t.__k || o.__k, r = [], i = [], Hr(o, x = (!e && t || o).__k = Ye(bt, null, [x]), n || fn, fn, o.namespaceURI, !e && t ? [t] : n ? null : o.firstChild ? Kn.call(o.childNodes) : null, r, !e && t ? t : n ? n.__e : o.firstChild, e, i), os(r, x, i);
}
function Kr(x, o) {
  jt(x, o, Kr);
}
function Zr(x, o, t) {
  var e, n, r, i, a = Pt({}, x.props);
  for (r in x.type && x.type.defaultProps && (i = x.type.defaultProps), o) r == "key" ? e = o[r] : r == "ref" ? n = o[r] : a[r] = void (-3 * 29 + 1739 * 1 + -1652) === o[r] && i !== void 0 ? i[r] : o[r];
  return arguments.length > -9240 + -1 * -6374 + 239 * 12 && (a.children = arguments.length > -5966 + 2 * -597 + 7163 ? Kn.call(arguments, 2377 * 2 + 1 * 6988 + -11740) : t), gn(x.type, a, e || x.key, n || x.ref, null);
}
function Zn(x, o) {
  var t = { __c: o = "__cC" + qa++, __: x, Consumer: function(e, n) {
    return e.children(n);
  }, Provider: function(e) {
    var n, r;
    return this.getChildContext || (n = [], (r = {})[o] = this, this.getChildContext = function() {
      return r;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && n.some(function(a) {
        a.__e = !0, jo(a);
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
Kn = $a.slice, N = { __e: function(x, o, t, e) {
  for (var n, r, i; o = o.__; ) if ((n = o.__c) && !n.__) try {
    if ((r = n.constructor) && r.getDerivedStateFromError != null && (n.setState(r.getDerivedStateFromError(x)), i = n.__d), n.componentDidCatch != null && (n.componentDidCatch(x, e || {}), i = n.__d), i) return n.__E = n;
  } catch (a) {
    x = a;
  }
  throw x;
} }, Qa = 1353 * -1 + 1 * 3670 + -2317, Ua = function(x) {
  return x != null && x.constructor == null;
}, dt.prototype.setState = function(x, o) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Pt({}, this.state), typeof x == "function" && (x = x(Pt({}, t), this.props)), x && Pt(t, x), x != null && this.__v && (o && this._sb.push(o), jo(this));
}, dt.prototype.forceUpdate = function(x) {
  this.__v && (this.__e = !(5889 + -1 * 9181 + 3292), x && this.__h.push(x), jo(this));
}, dt.prototype.render = bt, n0 = [], za = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Yo = function(x, o) {
  return x.__v.__b - o.__v.__b;
}, yx.__r = -3755 + -1 * 9599 + 13354, kr = -3591 + -1 * -3591, Xo = Zi(!(6541 + -3797 * -2 + -14134)), Mo = Zi(!(-1 * -3867 + 3564 + -7431)), qa = 11430 + -15 * 762;
function Rr() {
  return (Rr = Object.assign ? Object.assign.bind() : function(x) {
    for (var o = -3706 + 1 * 4249 + -542; o < arguments.length; o++) {
      var t = arguments[o];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (x[e] = t[e]);
    }
    return x;
  }).apply(this, arguments);
}
var fg = ["context", "children"];
function Cg(x) {
  this.getChildContext = function() {
    return x.context;
  };
  var o = x.children, t = function(e, n) {
    if (e == null) return {};
    var r, i, a = {}, s = Object.keys(e);
    for (i = 9239 * 1 + -7720 + 49 * -31; i < s.length; i++) n.indexOf(r = s[i]) >= 1494 + -18 * 83 || (a[r] = e[r]);
    return a;
  }(x, fg);
  return Zr(o, t);
}
function hg() {
  var x = {};
  x.detail = {}, x.bubbles = !(-11 * 249 + -5479 * 1 + -14 * -587), x.cancelable = !(3286 * -3 + 5747 + 4111);
  var o = new CustomEvent("_preact", x);
  this.dispatchEvent(o), this._vdom = Ye(Cg, Rr({}, this._props, { context: o.detail.context }), function t(e, n) {
    if (9 * -459 + -543 * 10 + 9564 === e.nodeType) return e.data;
    if (5176 + 1 * -5581 + 406 !== e.nodeType) return null;
    var r = [], i = {}, a = 4331 * -1 + 305 * 17 + -854 * 1, s = e.attributes, c = e.childNodes;
    for (a = s.length; a--; ) s[a].name !== "slot" && (i[s[a].name] = s[a].value, i[rs(s[a].name)] = s[a].value);
    for (a = c.length; a--; ) {
      var d = t(c[a], null), g = c[a].slot;
      g ? i[g] = Ye(Ri, { name: g }, d) : r[a] = d;
    }
    var C = n ? Ye(Ri, null, r) : r;
    return Ye(n || e.nodeName.toLowerCase(), i, C);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Kr : jt)(this._vdom, this._root);
}
function rs(x) {
  return x.replace(/-(\w)/g, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function pg(x, o, t) {
  if (this._vdom) {
    var e = {};
    e[x] = t = t ?? void (5307 + -1412 * 5 + 1753), e[rs(x)] = t, this._vdom = Zr(this._vdom, e), jt(this._vdom, this._root);
  }
}
function mg() {
  jt(this._vdom = null, this._root);
}
function Ri(x, o) {
  var t = this;
  return Ye("slot", Rr({}, x, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(n) {
      n.stopPropagation(), n.detail.context = o;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function bg(x, o, t, e) {
  function n() {
    var r = Reflect.construct(HTMLElement, [], n);
    return r._vdomComponent = x, r._root = r, r;
  }
  return (n.prototype = Object.create(HTMLElement.prototype)).constructor = n, n.prototype.connectedCallback = hg, n.prototype.attributeChangedCallback = pg, n.prototype.disconnectedCallback = mg, t = t || x.observedAttributes || Object.keys(x.propTypes || {}), n.observedAttributes = t, t.forEach(function(r) {
    Object.defineProperty(n.prototype, r, { get: function() {
      return this._vdom.props[r];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(r, null, i) : (this._props || (this._props = {}), this._props[r] = i, this.connectedCallback());
      var a = typeof i;
      i != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(r, i);
    } });
  }), customElements.define(o, n);
}
var Ag = 1 * 6967 + 6331 + 13298 * -1;
function K(x, o, t, e, n, r) {
  o || (o = {});
  var i, a, s = o;
  if ("ref" in s)
    for (a in s = {}, o) a == "ref" ? i = o[a] : s[a] = o[a];
  var c = {};
  c.type = x, c.props = s, c.key = t, c.ref = i, c.__k = null, c.__ = null, c.__b = 0, c.__e = null, c.__d = void (-103 * -60 + -9851 * -1 + -16031), c.__c = null, c.constructor = void (369 * -22 + 6278 + 1840), c.__v = --Ag, c.__i = -(-7729 * 1 + 8631 + -901 * 1), c.__u = 0, c.__source = n, c.__self = r;
  var d = c;
  if (typeof x == "function" && (i = x.defaultProps))
    for (a in i) void (-8594 * 1 + -7674 * 1 + 16268) === s[a] && (s[a] = i[a]);
  return N.vnode && N.vnode(d), d;
}
var qe = function() {
  return qe = Object.assign || function(o) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (o[r] = t[r]);
    }
    return o;
  }, qe.apply(this, arguments);
};
function V0(x, o, t) {
  if (t || arguments.length === 2) for (var e = 0, n = o.length, r; e < n; e++)
    (r || !(e in o)) && (r || (r = Array.prototype.slice.call(o, 0, e)), r[e] = o[e]);
  return x.concat(r || Array.prototype.slice.call(o));
}
function yg(x) {
  var o = Object.create(null);
  return function(t) {
    return o[t] === void 0 && (o[t] = x(t)), o[t];
  };
}
var Wg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vg = yg(function(x) {
  return Wg.test(x) || x.charCodeAt(1594 * 1 + -34 * -127 + 739 * -8) === -2 * 4717 + 920 + -3 * -2875 && x.charCodeAt(-7226 + -3 * -2409) === 110 && x.charCodeAt(326 * 2 + -1513 + 863 * 1) < 8310 + -571 * -9 + 1 * -13358;
}), Jt, oe, wo, Pi, T0 = -277 * 19 + -1304 * -3 + -1351 * -1, is = [], se = N, Vi = se.__b, Ti = se.__r, Ei = se.diffed, Li = se.__c, Ni = se.unmount, Di = se.__;
function M0(x, o) {
  se.__h && se.__h(oe, x, T0 || o), T0 = -83 * -64 + -8327 + 3015;
  var t = {};
  t.__ = [], t.__h = [];
  var e = oe.__H || (oe.__H = t);
  return x >= e.__.length && e.__.push({}), e.__[x];
}
function xt(x) {
  return T0 = 1, Pr(cs, x);
}
function Pr(x, o, t) {
  var e = M0(Jt++, 2);
  if (e.t = x, !e.__c && (e.__ = [t ? t(o) : cs(void (1539 + 9 * -171), o), function(a) {
    var s = e.__N ? e.__N[0] : e.__[0], c = e.t(s, a);
    s !== c && (e.__N = [c, e.__[-5180 + 3517 * -1 + -8698 * -1]], e.__c.setState({}));
  }], e.__c = oe, !oe.u)) {
    var n = function(a, s, c) {
      if (!e.__c.__H) return !0;
      var d = e.__c.__H.__.filter(function(C) {
        return !!C.__c;
      });
      if (d.every(function(C) {
        return !C.__N;
      })) return !r || r.call(this, a, s, c);
      var g = !(6235 + -152 * -13 + -8210);
      return d.forEach(function(C) {
        if (C.__N) {
          var l = C.__[0];
          C.__ = C.__N, C.__N = void 0, l !== C.__[0] && (g = !0);
        }
      }), !(!g && e.__c.props === a) && (!r || r.call(this, a, s, c));
    };
    oe.u = !(-9483 + 21 * -26 + 10029);
    var r = oe.shouldComponentUpdate, i = oe.componentWillUpdate;
    oe.componentWillUpdate = function(a, s, c) {
      if (this.__e) {
        var d = r;
        r = void 0, n(a, s, c), r = d;
      }
      i && i.call(this, a, s, c);
    }, oe.shouldComponentUpdate = n;
  }
  return e.__N || e.__;
}
function Be(x, o) {
  var t = M0(Jt++, 3);
  !se.__s && Vr(t.__H, o) && (t.__ = x, t.i = o, oe.__H.__h.push(t));
}
function j0(x, o) {
  var t = M0(Jt++, 4);
  !se.__s && Vr(t.__H, o) && (t.__ = x, t.i = o, oe.__h.push(t));
}
function Et(x) {
  return T0 = -5431 + 2 * 2023 + 1390, ot(function() {
    var o = {};
    return o.current = x, o;
  }, []);
}
function as(x, o, t) {
  T0 = 7164 + -2 * 3579, j0(function() {
    return typeof x == "function" ? (x(o()), function() {
      return x(null);
    }) : x ? (x.current = o(), function() {
      return x.current = null;
    }) : void (402 * -3 + 4 * -991 + 5170);
  }, t == null ? t : t.concat(x));
}
function ot(x, o) {
  var t = M0(Jt++, 7);
  return Vr(t.__H, o) && (t.__ = x(), t.__H = o, t.__h = x), t.__;
}
function E0(x, o) {
  return T0 = 51 * -151 + 6641 + -1 * -1068, ot(function() {
    return x;
  }, o);
}
function I0(x) {
  var o = oe.context[x.__c], t = M0(Jt++, 502 * 15 + 4 * 1 + -7525);
  return t.c = x, o ? (t.__ == null && (t.__ = !(-5 * -55 + 4837 + -5112), o.sub(oe)), o.props.value) : x.__;
}
function Wx(x, o) {
  se.useDebugValue && se.useDebugValue(o ? o(x) : x);
}
function ss() {
  var x = M0(Jt++, 11);
  if (!x.__) {
    for (var o = oe.__v; o !== null && !o.__m && o.__ !== null; ) o = o.__;
    var t = o.__m || (o.__m = [-601 * 4 + -1875 + 4279, 1 * -8675 + -6323 * 1 + -1 * -14998]);
    x.__ = "P" + t[-8166 + -21 * -197 + -1 * -4029] + "-" + t[-3 * 2488 + 592 * -14 + 5251 * 3]++;
  }
  return x.__;
}
function wg() {
  for (var x; x = is.shift(); ) if (x.__P && x.__H) try {
    x.__H.__h.forEach(ix), x.__H.__h.forEach(_o), x.__H.__h = [];
  } catch (o) {
    x.__H.__h = [], se.__e(o, x.__v);
  }
}
se.__b = function(x) {
  oe = null, Vi && Vi(x);
}, se.__ = function(x, o) {
  x && o.__k && o.__k.__m && (x.__m = o.__k.__m), Di && Di(x, o);
}, se.__r = function(x) {
  Ti && Ti(x), Jt = 0;
  var o = (oe = x.__c).__H;
  o && (wo === oe ? (o.__h = [], oe.__h = [], o.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void 0;
  })) : (o.__h.forEach(ix), o.__h.forEach(_o), o.__h = [], Jt = 5298 + -3 * 1766)), wo = oe;
}, se.diffed = function(x) {
  Ei && Ei(x);
  var o = x.__c;
  o && o.__H && (o.__H.__h.length && (-4471 + -19 * 52 + 5460 !== is.push(o) && Pi === se.requestAnimationFrame || ((Pi = se.requestAnimationFrame) || Sg)(wg)), o.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-14 * 126 + 194 * 17 + -26 * 59);
  })), wo = oe = null;
}, se.__c = function(x, o) {
  o.some(function(t) {
    try {
      t.__h.forEach(ix), t.__h = t.__h.filter(function(e) {
        return !e.__ || _o(e);
      });
    } catch (e) {
      o.some(function(n) {
        n.__h && (n.__h = []);
      }), o = [], se.__e(e, t.__v);
    }
  }), Li && Li(x, o);
}, se.unmount = function(x) {
  Ni && Ni(x);
  var o, t = x.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      ix(e);
    } catch (n) {
      o = n;
    }
  }), t.__H = void (9 * 677 + 521 * 8 + 31 * -331), o && se.__e(o, t.__v));
};
var Fi = typeof requestAnimationFrame == "function";
function Sg(x) {
  var o, t = function() {
    clearTimeout(e), Fi && cancelAnimationFrame(o), setTimeout(x);
  }, e = setTimeout(t, 100);
  Fi && (o = requestAnimationFrame(t));
}
function ix(x) {
  var o = oe, t = x.__c;
  typeof t == "function" && (x.__c = void (-175 * -37 + 58 * 116 + -81 * 163), t()), oe = o;
}
function _o(x) {
  var o = oe;
  x.__c = x.__(), oe = o;
}
function Vr(x, o) {
  return !x || x.length !== o.length || o.some(function(t, e) {
    return t !== x[e];
  });
}
function cs(x, o) {
  return typeof o == "function" ? o(x) : o;
}
function gs(x, o) {
  for (var t in o) x[t] = o[t];
  return x;
}
function Qo(x, o) {
  for (var t in x) if (t !== "__source" && !(t in o)) return !(-55 * 54 + 3389 * 1 + -419);
  for (var e in o) if (e !== "__source" && x[e] !== o[e]) return !(1497 * -5 + -9394 + 16879);
  return !(19 * 107 + -3323 + -1291 * -1);
}
function Uo(x, o) {
  this.props = x, this.context = o;
}
function Bg(x, o) {
  function t(n) {
    var r = this.props.ref, i = r == n.ref;
    return !i && r && (r.call ? r(null) : r.current = null), o ? !o(this.props, n) || !i : Qo(this.props, n);
  }
  function e(n) {
    return this.shouldComponentUpdate = t, Ye(x, n);
  }
  return e.displayName = "Memo(" + (x.displayName || x.name) + ")", e.prototype.isReactComponent = !0, e.__f = !(-5329 * 1 + -6382 + 7 * 1673), e;
}
(Uo.prototype = new dt()).isPureReactComponent = !(4628 + -1 * -9286 + -18 * 773), Uo.prototype.shouldComponentUpdate = function(x, o) {
  return Qo(this.props, x) || Qo(this.state, o);
};
var Yi = N.__b;
N.__b = function(x) {
  x.type && x.type.__f && x.ref && (x.props.ref = x.ref, x.ref = null), Yi && Yi(x);
};
var Gg = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 16 * 211 + -144 + -1 * -679;
function ds(x) {
  function o(t) {
    var e = gs({}, t);
    return delete e.ref, x(e, t.ref || null);
  }
  return o.$$typeof = Gg, o.render = o, o.prototype.isReactComponent = o.__f = !0, o.displayName = "ForwardRef(" + (x.displayName || x.name) + ")", o;
}
var Xi = function(x, o) {
  return x == null ? null : Vt(Vt(x).map(o));
}, kg = { map: Xi, forEach: Xi, count: function(x) {
  return x ? Vt(x).length : 0;
}, only: function(x) {
  var o = Vt(x);
  if (-3382 + 17 * 199 !== o.length) throw "Children.only";
  return o[41 * 145 + 9930 + -15875];
}, toArray: Vt }, Hg = N.__e;
N.__e = function(x, o, t, e) {
  if (x.then) {
    for (var n, r = o; r = r.__; ) if ((n = r.__c) && n.__c) return o.__e == null && (o.__e = t.__e, o.__k = t.__k), n.__c(x, o);
  }
  Hg(x, o, t, e);
};
var Mi = N.unmount;
function us(x, o, t) {
  return x && (x.__c && x.__c.__H && (x.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), x.__c.__H = null), (x = gs({}, x)).__c != null && (x.__c.__P === t && (x.__c.__P = o), x.__c = null), x.__k = x.__k && x.__k.map(function(e) {
    return us(e, o, t);
  })), x;
}
function ls(x, o, t) {
  return x && t && (x.__v = null, x.__k = x.__k && x.__k.map(function(e) {
    return ls(e, o, t);
  }), x.__c && x.__c.__P === o && (x.__e && t.appendChild(x.__e), x.__c.__e = !(205 + -205 * 1), x.__c.__P = t)), x;
}
function ax() {
  this.__u = -1964 + -982 * -2, this.t = null, this.__b = null;
}
function Is(x) {
  var o = x.__.__c;
  return o && o.__a && o.__a(x);
}
function Og(x) {
  var o, t, e;
  function n(r) {
    if (o || (o = x()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      e = i;
    }), e) throw e;
    if (!t) throw o;
    return Ye(t, r);
  }
  return n.displayName = "Lazy", n.__f = !(17 * 173 + -8076 + 13 * 395), n;
}
function nn() {
  this.u = null, this.o = null;
}
N.unmount = function(x) {
  var o = x.__c;
  o && o.__R && o.__R(), o && -8979 + -2 * 1381 + -11773 * -1 & x.__u && (x.type = null), Mi && Mi(x);
}, (ax.prototype = new dt()).__c = function(x, o) {
  var t = o.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var n = Is(e.__v), r = !(-8598 + -1 * -1423 + 7176), i = function() {
    r || (r = !(9338 + -5888 * -1 + 1 * -15226), t.__R = null, n ? n(a) : a());
  };
  t.__R = i;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var s = e.state.__a;
        e.__v.__k[1 * 4257 + 879 * 10 + -13047] = ls(s, s.__c.__P, s.__c.__O);
      }
      var c;
      for (e.setState({ __a: e.__b = null }); c = e.t.pop(); ) c.forceUpdate();
    }
  };
  e.__u++ || -3 * 2189 + -543 + 7142 & o.__u || e.setState({ __a: e.__b = e.__v.__k[2 * 1106 + 9118 + -11330] }), x.then(i, i);
}, ax.prototype.componentWillUnmount = function() {
  this.t = [];
}, ax.prototype.render = function(x, o) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-16048 + -16048 * -1].__c;
      this.__v.__k[-2283 * 2 + -127 * 58 + 11932] = us(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var n = o.__a && Ye(bt, null, x.fallback);
  return n && (n.__u &= -(-2380 * -2 + 4740 + -9467)), [Ye(bt, null, o.__a ? null : x.children), n];
};
var ji = function(x, o, t) {
  if (++t[-7860 + -188 * -1 + 7673 * 1] === t[0] && x.o.delete(o), x.props.revealOrder && (x.props.revealOrder[1627 * -1 + 1 * 9733 + 2 * -4053] !== "t" || !x.o.size)) for (t = x.u; t; ) {
    for (; t.length > -1 * 4809 + -561 + 5373; ) t.pop()();
    if (t[4354 + -1451 * 3] < t[240 + -1 * 6598 + 11 * 578]) break;
    x.u = t = t[729 + -4461 * -1 + 1 * -5188];
  }
};
function Kg(x) {
  return this.getChildContext = function() {
    return x.context;
  }, x.children;
}
function Zg(x) {
  var o = this, t = x.i;
  o.componentWillUnmount = function() {
    jt(null, o.l), o.l = null, o.i = null;
  }, o.i && o.i !== t && o.componentWillUnmount(), o.l || (o.i = t, o.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-2943 + 18 * -109 + 4905 * 1);
  }, appendChild: function(e) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, insertBefore: function(e, n) {
    this.childNodes.push(e), o.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> -7 * -333 + -2248 + -41 * 2, -6606 + -36 * -183 + 19), o.i.removeChild(e);
  } }), jt(Ye(Kg, { context: o.context }, x.__v), o.l);
}
function Rg(x, o) {
  var t = {};
  t.__v = x, t.i = o;
  var e = Ye(Zg, t);
  return e.containerInfo = o, e;
}
(nn.prototype = new dt()).__a = function(x) {
  var o = this, t = Is(o.__v), e = o.o.get(x);
  return e[-1 * -5477 + -5988 + -511 * -1]++, function(n) {
    var r = function() {
      o.props.revealOrder ? (e.push(n), ji(o, x, e)) : n();
    };
    t ? t(r) : r();
  };
}, nn.prototype.render = function(x) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var o = Vt(x.children);
  x.revealOrder && x.revealOrder[-69 * -67 + 4693 + -9316] === "b" && o.reverse();
  for (var t = o.length; t--; ) this.o.set(o[t], this.u = [3 * -349 + -7775 + 8823, 1569 * -1 + -7 * -1202 + -1 * 6845, this.u]);
  return x.children;
}, nn.prototype.componentDidUpdate = nn.prototype.componentDidMount = function() {
  var x = this;
  this.o.forEach(function(o, t) {
    ji(x, t, o);
  });
};
var fs = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 30653 * -2 + -74954 + 196363, Pg = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Vg = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Tg = /[A-Z0-9]/g, Eg = typeof document < "u", Lg = function(x) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(x);
};
function Ng(x, o, t) {
  return o.__k == null && (o.textContent = ""), jt(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
function Dg(x, o, t) {
  return Kr(x, o), typeof t == "function" && t(), x ? x.__c : null;
}
dt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(x) {
  Object.defineProperty(dt.prototype, x, { configurable: !(3442 + -2 * 1721), get: function() {
    return this["UNSAFE_" + x];
  }, set: function(o) {
    var t = {};
    t.configurable = !(2781 * -1 + -8834 + 11615), t.writable = !(-2180 + 2582 * -1 + 4762 * 1), t.value = o, Object.defineProperty(this, x, t);
  } });
});
var Ji = N.event;
function Fg() {
}
function Yg() {
  return this.cancelBubble;
}
function Xg() {
  return this.defaultPrevented;
}
N.event = function(x) {
  return Ji && (x = Ji(x)), x.persist = Fg, x.isPropagationStopped = Yg, x.isDefaultPrevented = Xg, x.nativeEvent = x;
};
var sx = {};
sx.enumerable = !(8205 * -1 + -6334 * -1 + 1872), sx.configurable = !(-4548 + 1 * 124 + 4424), sx.get = function() {
  return this.class;
};
var Tr, Mg = sx, _i = N.vnode;
N.vnode = function(x) {
  typeof x.type == "string" && function(o) {
    var t = o.props, e = o.type, n = {};
    for (var r in t) {
      var i = t[r];
      if (!(r === "value" && "defaultValue" in t && i == null || Eg && r === "children" && e === "noscript" || r === "class" || r === "className")) {
        var a = r.toLowerCase();
        r === "defaultValue" && "value" in t && t.value == null ? r = "value" : r === "download" && !(-9997 + 488 * 13 + 3653) === i ? i = "" : a === "translate" && i === "no" ? i = !(-4155 + -1039 * -4) : a === "ondoubleclick" ? r = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Lg(t.type) ? a === "onfocus" ? r = "onfocusin" : a === "onblur" ? r = "onfocusout" : Vg.test(r) ? r = a : -(-170 + 1 * 8939 + -8768) === e.indexOf("-") && Pg.test(r) ? r = r.replace(Tg, "-$&").toLowerCase() : i === null && (i = void (366 * -9 + 7841 + -4547)) : a = r = "oninput", a === "oninput" && n[r = a] && (r = "oninputCapture"), n[r] = i;
      }
    }
    e == "select" && n.multiple && Array.isArray(n.value) && (n.value = Vt(t.children).forEach(function(s) {
      s.props.selected = -(1 * 5743 + 1272 + -7014) != n.value.indexOf(s.props.value);
    })), e == "select" && n.defaultValue != null && (n.value = Vt(t.children).forEach(function(s) {
      s.props.selected = n.multiple ? -(-107 + 153 * 3 + -351) != n.defaultValue.indexOf(s.props.value) : n.defaultValue == s.props.value;
    })), t.class && !t.className ? (n.class = t.class, Object.defineProperty(n, "className", Mg)) : (t.className && !t.class || t.class && t.className) && (n.class = n.className = t.className), o.props = n;
  }(x), x.$$typeof = fs, _i && _i(x);
};
var Qi = N.__r;
N.__r = function(x) {
  Qi && Qi(x), Tr = x.__c;
};
var Ui = N.diffed;
N.diffed = function(x) {
  Ui && Ui(x);
  var o = x.props, t = x.__e;
  t != null && x.type === "textarea" && "value" in o && o.value !== t.value && (t.value = o.value == null ? "" : o.value), Tr = null;
};
var Ge = {};
Ge.readContext = function(x) {
  return Tr.__n[x.__c].props.value;
}, Ge.useCallback = E0, Ge.useContext = I0, Ge.useDebugValue = Wx, Ge.useDeferredValue = ms, Ge.useEffect = Be, Ge.useId = ss, Ge.useImperativeHandle = as, Ge.useInsertionEffect = As, Ge.useLayoutEffect = j0, Ge.useMemo = ot, Ge.useReducer = Pr, Ge.useRef = Et, Ge.useState = xt, Ge.useSyncExternalStore = ys, Ge.useTransition = bs;
var Cs = {};
Cs.current = Ge;
var hs = {};
hs.ReactCurrentDispatcher = Cs;
var jg = hs;
function Jg(x) {
  return Ye.bind(null, x);
}
function $x(x) {
  return !!x && x.$$typeof === fs;
}
function _g(x) {
  return $x(x) && x.type === bt;
}
function Qg(x) {
  return !!x && !!x.displayName && (typeof x.displayName == "string" || x.displayName instanceof String) && x.displayName.startsWith("Memo(");
}
function Ug(x) {
  return $x(x) ? Zr.apply(null, arguments) : x;
}
function zg(x) {
  return !!x.__k && (jt(null, x), !(-776 + 1 * 941 + -165));
}
function qg(x) {
  return x && (x.base || 1377 * -6 + -2305 + 5284 * 2 === x.nodeType && x) || null;
}
var $g = function(x, o) {
  return x(o);
}, ed = function(x, o) {
  return x(o);
}, td = bt;
function ps(x) {
  x();
}
function ms(x) {
  return x;
}
function bs() {
  return [!(1 * 9421 + 2425 + -103 * 115), ps];
}
var As = j0, nd = $x;
function ys(x, o) {
  var t = o(), e = xt({ h: { __: t, v: o } }), n = e[1 * 7078 + 1631 * 3 + -11971].h, r = e[-2101 * 3 + 761 + 5543 * 1];
  return j0(function() {
    n.__ = t, n.v = o, So(n) && r({ h: n });
  }, [x, t, o]), Be(function() {
    return So(n) && r({ h: n }), x(function() {
      So(n) && r({ h: n });
    });
  }, [x]), t;
}
function So(x) {
  var o, t, e = x.v, n = x.__;
  try {
    var r = e();
    return !((o = n) === (t = r) && (2374 + -1979 * -3 + -8311 * 1 !== o || (6023 + 9 * 500 + -10522) / o == 1 / t) || o != o && t != t);
  } catch {
    return !(7100 + 5 * -1420);
  }
}
var L = {};
L.useState = xt, L.useId = ss, L.useReducer = Pr, L.useEffect = Be, L.useLayoutEffect = j0, L.useInsertionEffect = As, L.useTransition = bs, L.useDeferredValue = ms, L.useSyncExternalStore = ys, L.startTransition = ps, L.useRef = Et, L.useImperativeHandle = as, L.useMemo = ot, L.useCallback = E0, L.useContext = I0, L.useDebugValue = Wx, L.version = "17.0.2", L.Children = kg, L.render = Ng, L.hydrate = Dg, L.unmountComponentAtNode = zg, L.createPortal = Rg, L.createElement = Ye, L.createContext = Zn, L.createFactory = Jg, L.cloneElement = Ug, L.createRef = gg, L.Fragment = bt, L.isValidElement = $x, L.isElement = nd, L.isFragment = _g, L.isMemo = Qg, L.findDOMNode = qg, L.Component = dt, L.PureComponent = Uo, L.memo = Bg, L.forwardRef = ds, L.flushSync = ed, L.unstable_batchedUpdates = $g, L.StrictMode = td, L.Suspense = ax, L.SuspenseList = nn, L.lazy = Og, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jg;
var d0 = L, xd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function od(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function rd(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function id(x) {
  return x && Object.prototype.hasOwnProperty.call(x, "default") && Object.keys(x).length === 1 ? x.default : x;
}
function ad(x) {
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
const sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: xd,
  getAugmentedNamespace: ad,
  getDefaultExportFromCjs: od,
  getDefaultExportFromNamespaceIfNotNamed: id,
  getDefaultExportFromNamespaceIfPresent: rd
}, Symbol.toStringTag, { value: "Module" }));
var cd = function(o, t, e, n) {
  var r = e ? e.call(n, o, t) : void 0;
  if (r !== void (-479 * -3 + -3571 + 2134)) return !!r;
  if (o === t) return !0;
  if (typeof o != "object" || !o || typeof t != "object" || !t) return !1;
  var i = Object.keys(o), a = Object.keys(t);
  if (i.length !== a.length) return !1;
  for (var s = Object.prototype.hasOwnProperty.bind(t), c = 6 * -1201 + -212 * -28 + -5 * -254; c < i.length; c++) {
    var d = i[c];
    if (!s(d)) return !1;
    var g = o[d], C = t[d];
    if (r = e ? e.call(n, g, C, d) : void (-7051 + -7051 * -1), r === !1 || r === void (1586 * 6 + 1214 + -10730) && g !== C) return !1;
  }
  return !0;
};
const gd = sd.getDefaultExportFromCjs(cd);
var xe = "-ms-", dn = "-moz-", ee = "-webkit-", Ws = "comm", eo = "rule", Er = "decl", dd = "@import", vs = "@keyframes", ud = "@layer", ws = Math.abs, Lr = String.fromCharCode, zo = Object.assign;
function ld(x, o) {
  return ve(x, 0) ^ 45 ? (((o << -8061 + 7225 * -1 + -98 * -156 ^ ve(x, -11947 + -11947 * -1)) << 25 * 251 + -8644 + 1 * 2371 ^ ve(x, 1)) << -13 * 64 + -292 + -2 * -563 ^ ve(x, 399 + -1 * -4909 + -5306)) << 1799 + -3 * 599 ^ ve(x, -5366 + 281 * -16 + 5 * 1973) : 40 * 62 + -9 * -437 + 53 * -121;
}
function Ss(x) {
  return x.trim();
}
function Kt(x, o) {
  return (x = o.exec(x)) ? x[-2806 + 3 * -1677 + 7837 * 1] : x;
}
function D(x, o, t) {
  return x.replace(o, t);
}
function cx(x, o, t) {
  return x.indexOf(o, t);
}
function ve(x, o) {
  return x.charCodeAt(o) | 7459 + -46 * 184 + 1005;
}
function L0(x, o, t) {
  return x.slice(o, t);
}
function wt(x) {
  return x.length;
}
function Bs(x) {
  return x.length;
}
function xn(x, o) {
  return o.push(x), x;
}
function Id(x, o) {
  return x.map(o).join("");
}
function zi(x, o) {
  return x.filter(function(t) {
    return !Kt(t, o);
  });
}
var to = -9636 + -1 * -4391 + 2623 * 2, N0 = 8146 + -9 * 905, Gs = -103 * -37 + 5825 + -9636, lt = 4012 + 1 * 6337 + -10349 * 1, pe = 9407 * -1 + -6899 + 16306, J0 = "";
function no(x, o, t, e, n, r, i, a) {
  var s = {};
  return s.value = x, s.root = o, s.parent = t, s.type = e, s.props = n, s.children = r, s.line = to, s.column = N0, s.length = i, s.return = "", s.siblings = a, s;
}
function Ft(x, o) {
  return zo(no("", null, null, "", null, null, -7838 + 3226 * -2 + 14290, x.siblings), x, { length: -x.length }, o);
}
function v0(x) {
  for (; x.root; ) x = Ft(x.root, { children: [x] });
  xn(x, x.siblings);
}
function fd() {
  return pe;
}
function Cd() {
  return pe = lt > 3946 + -1 * 8875 + -1 * -4929 ? ve(J0, --lt) : 1 * 5950 + -9424 * 1 + 3474, N0--, pe === 3903 + 1 * -3893 && (N0 = -4350 + 4 * 879 + 835, to--), pe;
}
function mt() {
  return pe = lt < Gs ? ve(J0, lt++) : -7 * -314 + -116 * 64 + 5226, N0++, pe === -1 * 8063 + 2131 + 5942 && (N0 = 5846 + -1482 * -3 + 1 * -10291, to++), pe;
}
function s0() {
  return ve(J0, lt);
}
function gx() {
  return lt;
}
function xo(x, o) {
  return L0(J0, x, o);
}
function qo(x) {
  switch (x) {
    case 9737 * -1 + -711 + 4 * 2612:
    case -1 * 3631 + -1 * -3563 + 77:
    case -8552 + 355 * 22 + -752 * -1:
    case -7752 + -1 * -7765:
    case 5106 + 59 * -86:
      return 5;
    case 1117 * -4 + -2 * -1229 + 2043:
    case 43:
    case 47 * -13 + 917 + -1 * 262:
    case -8383 * -1 + -1 * -2777 + 11113 * -1:
    case 1447 * -2 + 7811 + -4855:
    case 64:
    case 441 + -1 * 9059 + 8744:
    case -1 * -8263 + -5494 + 1355 * -2:
    case -1 * -4822 + 8597 * 1 + -3 * 4432:
    case 131 * -23 + -2957 + 6095:
      return -11473 + -499 * -23;
    case 58:
      return -6677 + -5 * -1396 + -300;
    case -966 + -100 * -10:
    case 39:
    case -6774 + 1 * 6814:
    case 9518 + 9427 * -1:
      return -4816 + -611 * 3 + 6651;
    case 41:
    case -2187 + 190 * 12:
      return -65 * 25 + 23 * 230 + -3664;
  }
  return -5689 * 1 + 1096 + 4593;
}
function hd(x) {
  return to = N0 = 6796 + 42 * -200 + 1605, Gs = wt(J0 = x), lt = 19 * 158 + 9194 + -12196, [];
}
function pd(x) {
  return J0 = "", x;
}
function Bo(x) {
  return Ss(xo(lt - (7846 + 7845 * -1), $o(x === 91 * 80 + 3709 + -10898 ? x + (-1654 + 4 * 414) : x === -4586 + 9 * -865 + 12411 ? x + (6 * 1057 + -19 * -362 + -13219 * 1) : x)));
}
function md(x) {
  for (; (pe = s0()) && pe < 12154 + 391 * -31; ) mt();
  return qo(x) > -802 * -2 + -1 * -6828 + -8430 || qo(pe) > 1 * 643 + -23 * 123 + 2189 ? "" : " ";
}
function bd(x, o) {
  for (; --o && mt() && !(pe < -5599 * 1 + -1315 * 5 + 6 * 2037 || pe > 28 * -39 + 5524 + -4330 || pe > -1 * 4009 + 3 * -1657 + 9037 && pe < -4 * 437 + -7349 + -3 * -3054 || pe > -8 * 1228 + -2 * -4321 + 1252 && pe < -2531 + 555 * 6 + -3 * 234); ) ;
  return xo(x, gx() + (o < 6 && s0() == -4853 + -8295 * 1 + 13180 && mt() == 8 * -177 + 7304 + -5856));
}
function $o(x) {
  for (; mt(); ) switch (pe) {
    case x:
      return lt;
    case -9880 + 2 * 4957:
    case -10727 + 769 * 14:
      x !== 8 * 628 + -1601 * -3 + -9793 && x !== 14154 + -941 * 15 && $o(pe);
      break;
    case 199 * -22 + -3005 + 7423:
      x === -1 * 9239 + 102 * 46 + 4588 && $o(x);
      break;
    case -1 * -1596 + -8396 + 6892:
      mt();
      break;
  }
  return lt;
}
function Ad(x, o) {
  for (; mt() && x + pe !== 57; ) if (x + pe === 6947 * 1 + 447 * 9 + -16 * 683 + (27 * -23 + 4374 + -1 * 3711) && s0() === -1271 * 2 + 2408 + 181) break;
  return "/*" + xo(o, lt - (6488 + -2 * 1074 + -4339)) + "*" + Lr(x === 2941 + -2 * 1447 ? x : mt());
}
function yd(x) {
  for (; !qo(s0()); ) mt();
  return xo(x, lt);
}
function Wd(x) {
  return pd(dx("", null, null, null, [""], x = hd(x), 1 * -8638 + 157 * -19 + 11621, [33 * 157 + 947 * -1 + -4234], x));
}
function dx(x, o, t, e, n, r, i, a, s) {
  for (var c = 0, d = -7361 + 6247 * 1 + 1114, g = i, C = 0, l = -1 * 3288 + -89 * -34 + 1 * 262, h = 3615 + 109 * -37 + 418, p = -11 * -354 + 1 * 4498 + -3 * 2797, A = 2 * -4534 + 7414 + 1655 * 1, u = 1, v = -1 * -5431 + -1 * -5809 + 1 * -11240, H = "", F = n, J = r, Y = e, O = H; A; ) switch (h = v, v = mt()) {
    case 40:
      if (h != 156 * -60 + 3027 + 6441 && ve(O, g - (155 + 14 * -11)) == -118 * -43 + -1 * -4679 + -9695) {
        cx(O += D(Bo(v), "&", "&\f"), "&\f", ws(c ? a[c - (-6917 + -279 * -12 + 3570)] : 0)) != -(-5 * -1375 + 3088 + -9962) && (u = -(-11 * 479 + -5 * 429 + 1483 * 5));
        break;
      }
    case -7965 + 2 * -811 + 9621:
    case 39:
    case -5688 + -7 * 391 + 8516:
      O += Bo(v);
      break;
    case 9:
    case 10:
    case 973 + 1 * -5666 + 4706:
    case -47 * 106 + -9057 * -1 + 311 * -13:
      O += md(h);
      break;
    case 4280 + 105 * 27 + -7023 * 1:
      O += bd(gx() - (1961 * -1 + 4888 + -2926), -2639 + 11 * 719 + 19 * -277);
      continue;
    case 61 * 26 + -1 * -6899 + -8438:
      switch (s0()) {
        case 139 * 14 + 9 * 243 + -4091:
        case -515 * -6 + 9436 + -12479 * 1:
          xn(vd(Ad(mt(), gx()), o, t, s), s);
          break;
        default:
          O += "/";
      }
      break;
    case (2 * -2505 + -4638 + 9771) * p:
      a[c++] = wt(O) * u;
    case (-1905 + 7972 * -1 + 10002) * p:
    case -4 * 155 + 2280 + 1601 * -1:
    case -4738 + -1 * -4773 + -35:
      switch (v) {
        case 2386 * -1 + -2848 + 5234:
        case 125:
          A = -2502 + -1171 * -2 + 32 * 5;
        case 6087 + -44 * 137 + d:
          u == -(2 * -4391 + 5695 + -4 * -772) && (O = D(O, /\f/g, "")), l > 0 && wt(O) - g && xn(l > -7341 + 1 * 6571 + -1 * -802 ? $i(O + ";", e, t, g - (-341 * -21 + 456 * -10 + -104 * 25), s) : $i(D(O, " ", "") + ";", e, t, g - (-7 * -1076 + 6011 * -1 + -1519), s), s);
          break;
        case 3 * 223 + 5582 * -1 + 4972:
          O += ";";
        default:
          if (xn(Y = qi(O, o, t, c, d, n, a, H, F = [], J = [], g, r), r), v === 1654 + 9516 * -1 + 7985)
            if (d === 0) dx(O, o, Y, Y, F, r, g, a, J);
            else switch (C === 3943 + 4 * -961 && ve(O, 3) === 8985 + -1790 * -1 + -10665 ? -5265 + 5365 * 1 : C) {
              case 41 * -185 + -7026 + -14711 * -1:
              case 3537 + 3 * -1143:
              case 1800 + -1691 * 1:
              case 239 * -35 + 7483 + -997 * -1:
                dx(x, Y, Y, e && xn(qi(x, Y, Y, 0, -181 * -47 + -1933 + -6574 * 1, n, a, H, n, F = [], g, J), J), n, J, g, a, e ? F : J);
                break;
              default:
                dx(O, Y, Y, Y, [""], J, -401 * 16 + -1661 + 8077, a, J);
            }
      }
      c = d = l = 59 * -93 + -1278 + 6765, p = u = 1949 + -487 * 4, H = O = "", g = i;
      break;
    case 3546 + -2 * 2697 + 1906:
      g = -1 * 6233 + -7341 + 2715 * 5 + wt(O), l = h;
    default:
      if (p < 1 * 9094 + 23 * 363 + 153 * -114) {
        if (v == 123) --p;
        else if (v == 3 * -941 + -5764 + 8712 && p++ == -13 * 284 + -2598 * 3 + 5743 * 2 && Cd() == -411 * -3 + -37 * -209 + -8841) continue;
      }
      switch (O += Lr(v), v * p) {
        case -1 * 9874 + -962 * -7 + 2 * 1589:
          u = d > -2532 * -1 + -2349 + -183 ? -8594 * -1 + 5583 + 1772 * -8 : (O += "\f", -(-19 * -309 + -5997 * 1 + 127 * 1));
          break;
        case 3 * -3239 + -2514 + -1 * -12275:
          a[c++] = (wt(O) - 1) * u, u = 1;
          break;
        case 713 * -5 + -1224 + 23 * 211:
          s0() === -3 * -2005 + -777 * -10 + 1 * -13740 && (O += Bo(mt())), C = s0(), d = g = wt(H = O += yd(gx())), v++;
          break;
        case 669 * -5 + 1 * 5601 + 2211 * -1:
          h === 1 * -6766 + 7 * -835 + 12656 && wt(O) == -3 * -2572 + -1 * 1774 + -5940 && (p = -424 * 14 + 953 + 151 * 33);
      }
  }
  return r;
}
function qi(x, o, t, e, n, r, i, a, s, c, d, g) {
  for (var C = n - 1, l = n === 0 ? r : [""], h = Bs(l), p = 3002 + 553 * 17 + -79 * 157, A = -311 * 2 + 68 * -115 + 8442, u = -618 + 6 * 103; p < e; ++p) for (var v = 189 + 41 * -241 + 9692, H = L0(x, C + (-1 * -9489 + -5930 + 593 * -6), C = ws(A = i[p])), F = x; v < h; ++v) (F = Ss(A > 4597 + -1 * -8663 + 20 * -663 ? l[v] + " " + H : D(H, /&\f/g, l[v]))) && (s[u++] = F);
  return no(x, o, t, n === -8655 + 1 * 8601 + 6 * 9 ? eo : a, s, c, d, g);
}
function vd(x, o, t, e) {
  return no(x, o, t, Ws, Lr(fd()), L0(x, -2505 + 107 * -79 + 10960, -(2442 + 61 * -40)), 2636 + -2242 * 2 + 1848, e);
}
function $i(x, o, t, e, n) {
  return no(x, o, t, Er, L0(x, 1543 + -80 * -10 + -2343, e), L0(x, e + (25 * 70 + 2887 * -1 + 1138), -(-1051 + -1 * 3121 + 4173)), e, n);
}
function ks(x, o, t) {
  switch (ld(x, o)) {
    case 193 * 41 + 57 + -2867:
      return ee + "print-" + x + x;
    case -1498 + -2 * -5464 + 3693 * -1:
    case 1263 + 1068 * -1 + 2 * 2003:
    case 6209 * -1 + -3810 + 13196:
    case 1839 + -17 * 239 + 5657 * 1:
    case 1641:
    case -1306 + -3 * -1921:
    case 6315 + 3701 * -2 + 4008:
    case 10234 + 21 * -222:
    case -4434 + -14 * 668 + 20142 * 1:
    case 7197 * -1 + 3 * 3304 + -3129 * -1:
    case 313 * -10 + -89 * -42 + 2583:
    case -2 * 4928 + 47 * 94 + 1 * 12083:
    case 13216 + 1 * -10211:
    case 8741 + 1175 * -2:
    case 8444 + -755 * -15 + 6 * -2315:
    case -1523 * -1 + 1150 + -25 * -118:
    case -15925 + -4 * -5515:
    case 3554 * -2 + 10 * -90 + 12607:
    case -351 + -158 * 61 + 14844:
    case -2357 * 4 + -8315 + 21958:
    case -5743 * -2 + 1 * -7538 + -2441 * -1:
    case -990 + 239 * 6 + 933 * 5:
    case 1 * -1537 + 8970 * -1 + 15872:
    case -38 * -137 + -3902 + 4317:
    case -7962 + -17 * 490 + -57 * -353:
      return ee + x + x;
    case 7 * -311 + 15 * 173 + 4371 * 1:
      return dn + x + x;
    case 1702 + -3647 * -1:
    case 15 * 105 + -701 + -6 * -562:
    case -2295 * 1 + 1 * 2447 + 4658:
    case -435 * 20 + 75 * 139 + 1 * 5243:
    case 5 * 1973 + 2497 + -9606:
      return ee + x + dn + x + xe + x + x;
    case -10034 + -1 * -15970:
      switch (ve(x, o + (13 * -361 + 565 * -10 + 10354))) {
        case -29 * 89 + 5613 + -2918:
          return ee + x + xe + D(x, /[svh]\w+-[tblr]{2}/, "tb") + x;
        case 108:
          return ee + x + xe + D(x, /[svh]\w+-[tblr]{2}/, "tb-rl") + x;
        case -4597 * -2 + 3011 * 1 + 2432 * -5:
          return ee + x + xe + D(x, /[svh]\w+-[tblr]{2}/, "lr") + x;
      }
    case 12353 * 1 + -9810 + 4285:
    case -1 * -2381 + -1 * 9351 + 11238:
    case 7873 + -594 * -14 + -13286:
      return ee + x + xe + x + x;
    case 2029 + 405 * -4 + -4 * -1439:
      return ee + x + xe + "flex-" + x + x;
    case 8442 + -3 * -3043 + -16 * 774:
      return ee + x + D(x, /(\w+).+(:[^]+)/, ee + "box-$1$2" + xe + "flex-$1$2") + x;
    case -812 * 4 + 726 * 13 + 249 * -3:
      return ee + x + xe + "flex-item-" + D(x, /flex-|-self/g, "") + (Kt(x, /flex-|baseline/) ? "" : xe + "grid-row-" + D(x, /flex-|-self/g, "")) + x;
    case -1 * -1006 + -7919 + -1 * -11588:
      return ee + x + xe + "flex-line-pack" + D(x, /align-content|flex-|-self/g, "") + x;
    case -6660 + -1 * -1185 + 11023:
      return ee + x + xe + D(x, "shrink", "negative") + x;
    case -1642 + 3467 * 2:
      return ee + x + xe + D(x, "basis", "preferred-size") + x;
    case -11221 + -9 * -881 + -9352 * -1:
      return ee + "box-" + D(x, "-grow", "") + ee + x + xe + D(x, "grow", "positive") + x;
    case 4554:
      return ee + D(x, /([^-])(transform)/g, "$1" + ee + "$2") + x;
    case -21892 + 28079 * 1:
      return D(D(D(x, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), x, "") + x;
    case 1919 + -2 * 1681 + 6938:
    case 1299 + 28 * 95:
      return D(x, /(image-set\([^]*)/, ee + "$1$`$1");
    case -43 * 67 + 5129 + 272 * 10:
      return D(D(x, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + x + x;
    case 970 * -1 + -65 * -49 + -1 * -1985:
      if (!Kt(x, /flex-|baseline/)) return xe + "grid-column-align" + L0(x, o) + x;
      break;
    case 9754 + -3 * 2957 + -1709 * -1:
    case -6169 + 2292 * -1 + -11821 * -1:
      return xe + D(x, "template-", "") + x;
    case 7620 + 21 * -11 + -3005:
    case -2 * 1986 + 47 * 14 + 6930:
      return t && t.some(function(e, n) {
        return o = n, Kt(e.props, /grid-\w+-end/);
      }) ? ~cx(x + (t = t[o].value), "span", 6 * 32 + 1 * -6314 + 2 * 3061) ? x : xe + D(x, "-start", "") + x + xe + "grid-row-span:" + (~cx(t, "span", 0) ? Kt(t, /\d+/) : +Kt(t, /\d+/) - +Kt(x, /\d+/)) + ";" : xe + D(x, "-start", "") + x;
    case 1 * 8650 + 6082 * 1 + -9836:
    case -4906 * 1 + -2318 + -86 * -132:
      return t && t.some(function(e) {
        return Kt(e.props, /grid-\w+-start/);
      }) ? x : xe + D(D(x, "-end", "-span"), "span ", "") + x;
    case 87 * -113 + -9278 * 1 + 23204:
    case 1 * 5647 + 6762 + -3 * 2942:
    case -2 * 1688 + 7640 * 1 + -196:
    case 13 * 421 + -2 * -2554 + 1 * -8049:
      return D(x, /(.+)-inline(.+)/, ee + "$1$2") + x;
    case 8116:
    case -8 * 256 + -5150 + 269 * 53:
    case -1303 * -1 + -4 * 2232 + 13378:
    case -1613 * -1 + 8754 + -4832 * 1:
    case 5445:
    case 8704 + -15 * -445 + 3 * -3226:
    case 6155 + 1 * -1222:
    case -22 * -173 + -9828 + -1 * -10699:
    case 15166 + 39 * -247:
    case 8179 + -7801 * -1 + -10191:
    case 2213 * -1 + 1621 + 5613:
    case 447 + 4279 * 1 + -3 * -13:
      if (wt(x) - (1 * 7699 + -2108 + -5590 * 1) - o > -8204 + 421 * 19 + 1 * 211) switch (ve(x, o + (1 * 1259 + 7830 + -2 * 4544))) {
        case -4 * -1521 + -287 * -21 + 12002 * -1:
          if (ve(x, o + (9804 + -3 * -2264 + -2074 * 8)) !== 45) break;
        case 102:
          return D(x, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + dn + (ve(x, o + (9784 + 9781 * -1)) == -89 * 16 + 82 * 8 + 876 ? "$3" : "$2-$3")) + x;
        case 115:
          return ~cx(x, "stretch", -6 * -1223 + 52 + -7390) ? ks(D(x, "stretch", "fill-available"), o, t) + x : x;
      }
      break;
    case -3521 + 1 * 4931 + 3742:
    case -95 * 79 + -3625 + 31 * 550:
      return D(x, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, n, r, i, a, s, c) {
        return xe + n + ":" + r + c + (i ? xe + n + "-span:" + (a ? s : +s - +r) + c : "") + x;
      });
    case -1 * -3929 + -50 * -35 + -730:
      if (ve(x, o + (11 * -47 + 1178 + 655 * -1)) === -3329 * 1 + -5855 + 9305) return D(x, ":", ":" + ee) + x;
      break;
    case -6077 + 12521 * 1:
      switch (ve(x, ve(x, 14) === 303 * 19 + -4 * -256 + -842 * 8 ? 2 * -3902 + -8372 + 16194 : 6255 + -1963 * -1 + 8207 * -1)) {
        case 29 * 247 + 158 * -5 + 6253 * -1:
          return D(x, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + ee + (ve(x, -2 * -3191 + 7223 + -13591) === -87 * -70 + 3592 + 9637 * -1 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + xe + "$2box$3") + x;
        case -3 * -718 + -137 * -11 + 3 * -1187:
          return D(x, ":", ":" + xe) + x;
      }
      break;
    case 12 * -699 + -23 * -184 + 9875:
    case 577 + -1 * -7993 + -5923:
    case -253 * 34 + 4101 * 1 + 6636:
    case 3 * 2953 + 161 * -31 + -1 * -59:
    case 2391:
      return D(x, "scroll-", "scroll-snap-") + x;
  }
  return x;
}
function vx(x, o) {
  for (var t = "", e = 5979 + 7941 * 1 + -13920; e < x.length; e++) t += o(x[e], e, x, o) || "";
  return t;
}
function wd(x, o, t, e) {
  switch (x.type) {
    case ud:
      if (x.children.length) break;
    case dd:
    case Er:
      return x.return = x.return || x.value;
    case Ws:
      return "";
    case vs:
      return x.return = x.value + "{" + vx(x.children, e) + "}";
    case eo:
      if (!wt(x.value = x.props.join(","))) return "";
  }
  return wt(t = vx(x.children, e)) ? x.return = x.value + "{" + t + "}" : "";
}
function Sd(x) {
  var o = Bs(x);
  return function(t, e, n, r) {
    for (var i = "", a = 0; a < o; a++) i += x[a](t, e, n, r) || "";
    return i;
  };
}
function Bd(x) {
  return function(o) {
    o.root || (o = o.return) && x(o);
  };
}
function Gd(x, o, t, e) {
  if (x.length > -1 && !x.return)
    switch (x.type) {
      case Er:
        x.return = ks(x.value, x.length, t);
        return;
      case vs:
        return vx([Ft(x, { value: D(x.value, "@", "@" + ee) })], e);
      case eo:
        if (x.length) return Id(t = x.props, function(n) {
          switch (Kt(n, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              v0(Ft(x, { props: [D(n, /:(read-\w+)/, ":" + dn + "$1")] }));
              var r = {};
              r.props = [n], v0(Ft(x, r)), zo(x, { props: zi(t, e) });
              break;
            case "::placeholder":
              v0(Ft(x, { props: [D(n, /:(plac\w+)/, ":" + ee + "input-$1")] })), v0(Ft(x, { props: [D(n, /:(plac\w+)/, ":" + dn + "$1")] })), v0(Ft(x, { props: [D(n, /:(plac\w+)/, xe + "input-$1")] }));
              var i = {};
              i.props = [n], v0(Ft(x, i)), zo(x, { props: zi(t, e) });
              break;
          }
          return "";
        });
    }
}
var E = {};
E.animationIterationCount = 1, E.aspectRatio = 1, E.borderImageOutset = 1, E.borderImageSlice = 1, E.borderImageWidth = 1, E.boxFlex = 1, E.boxFlexGroup = 1, E.boxOrdinalGroup = 1, E.columnCount = 1, E.columns = 1, E.flex = 1, E.flexGrow = 1, E.flexPositive = 1, E.flexShrink = 1, E.flexNegative = 1, E.flexOrder = 1, E.gridRow = 1, E.gridRowEnd = 1, E.gridRowSpan = 1, E.gridRowStart = 1, E.gridColumn = 1, E.gridColumnEnd = 1, E.gridColumnSpan = 1, E.gridColumnStart = 1, E.msGridRow = 1, E.msGridRowSpan = 1, E.msGridColumn = 1, E.msGridColumnSpan = 1, E.fontWeight = 1, E.lineHeight = 1, E.opacity = 1, E.order = 1, E.orphans = 1, E.tabSize = 1, E.widows = 1, E.zIndex = 1, E.zoom = 1, E.WebkitLineClamp = 1, E.fillOpacity = 1, E.floodOpacity = 1, E.stopOpacity = 1, E.strokeDasharray = 1, E.strokeDashoffset = 1, E.strokeMiterlimit = 1, E.strokeOpacity = 1, E.strokeWidth = 1;
var kd = E, q = {}, u0 = typeof process < "u" && void (-1 * -340 + 9403 * -1 + -3021 * -3) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", Hs = "active", Os = "data-styled-version", oo = "6.1.11", Nr = `/*!sc*/
`, Dr = typeof window < "u" && "HTMLElement" in window, Hd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-6 * -827 + 8104 + -13066) !== q && q.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (1 * -4923 + -1 * -3774 + 1149 * 1) !== q && void (2351 + -1 * -5572 + -7923) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), ea = /invalid hook call/i, Un = /* @__PURE__ */ new Set(), Od = function(x, o) {
  if (q.NODE_ENV !== "production") {
    var t = o ? ' with the id of "'.concat(o, '"') : "", e = "The component ".concat(x).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var r = !0;
      console.error = function(i) {
        for (var a = [], s = 139 * -41 + 9 * 397 + 1 * 2127; s < arguments.length; s++) a[s - (-3 * 2393 + 4025 + 3155)] = arguments[s];
        ea.test(i) ? (r = !1, Un.delete(e)) : n.apply(void (4051 * -1 + 8899 + -4848), V0([i], a, !1));
      }, Et(), r && !Un.has(e) && (console.warn(e), Un.add(e));
    } catch (i) {
      ea.test(i.message) && Un.delete(e);
    } finally {
      console.error = n;
    }
  }
}, ro = Object.freeze([]), D0 = Object.freeze({});
function Kd(x, o, t) {
  return void (237 + -21 * -459 + -9876) === t && (t = D0), x.theme !== t.theme && x.theme || o || t.theme;
}
var er = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Zd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Rd = /(^-|-$)/g;
function ta(x) {
  return x.replace(Zd, "-").replace(Rd, "");
}
var Pd = /(a)(d)/gi, zn = 52, na = function(x) {
  return String.fromCharCode(x + (x > 253 * 38 + 1319 * -6 + 1675 * -1 ? 1 * -3298 + -1 * -8459 + -5122 : -6184 * 1 + -710 * 7 + 11251));
};
function tr(x) {
  var o, t = "";
  for (o = Math.abs(x); o > zn; o = o / zn | -1 * 7429 + 1 * -312 + 7741) t = na(o % zn) + t;
  return (na(o % zn) + t).replace(Pd, "$1-$2");
}
var Go, Ks = 641 * -3 + -673 * -2 + 1986 * 3, x0 = function(x, o) {
  for (var t = o.length; t; ) x = (61 * -67 + 1665 + 2455) * x ^ o.charCodeAt(--t);
  return x;
}, Zs = function(x) {
  return x0(Ks, x);
};
function Vd(x) {
  return tr(Zs(x) >>> 0);
}
function Rs(x) {
  return q.NODE_ENV !== "production" && typeof x == "string" && x || x.displayName || x.name || "Component";
}
function ko(x) {
  return typeof x == "string" && (q.NODE_ENV === "production" || x.charAt(8156 + -9958 * -1 + -9057 * 2) === x.charAt(6218 + 1 * 1147 + -7365).toLowerCase());
}
var ct = {};
ct.childContextTypes = !0, ct.contextType = !0, ct.contextTypes = !0, ct.defaultProps = !0, ct.displayName = !0, ct.getDefaultProps = !0, ct.getDerivedStateFromError = !0, ct.getDerivedStateFromProps = !0, ct.mixins = !0, ct.propTypes = !0, ct.type = !0;
var Yt = {};
Yt.name = !0, Yt.length = !0, Yt.prototype = !0, Yt.caller = !0, Yt.callee = !0, Yt.arguments = !0, Yt.arity = !0;
var t0 = {};
t0.$$typeof = !0, t0.compare = !0, t0.defaultProps = !0, t0.displayName = !0, t0.propTypes = !0, t0.type = !0;
var B0 = {};
B0.$$typeof = !0, B0.render = !0, B0.defaultProps = !0, B0.displayName = !0, B0.propTypes = !0;
var Ps = typeof Symbol == "function" && Symbol.for, Vs = Ps ? Symbol.for("react.memo") : 3 * 22186 + -1 * -30666 + 43 * -863, Td = Ps ? Symbol.for("react.forward_ref") : 15450 * 3 + 7817 * 1 + -1189 * -5, Ed = ct, Ld = Yt, Ts = t0, Nd = ((Go = {})[Td] = B0, Go[Vs] = Ts, Go);
function xa(x) {
  return ("type" in (o = x) && o.type.$$typeof) === Vs ? Ts : "$$typeof" in x ? Nd[x.$$typeof] : Ed;
  var o;
}
var Dd = Object.defineProperty, Fd = Object.getOwnPropertyNames, oa = Object.getOwnPropertySymbols, Yd = Object.getOwnPropertyDescriptor, Xd = Object.getPrototypeOf, ra = Object.prototype;
function Es(x, o, t) {
  if (typeof o != "string") {
    if (ra) {
      var e = Xd(o);
      e && e !== ra && Es(x, e, t);
    }
    var n = Fd(o);
    oa && (n = n.concat(oa(o)));
    for (var r = xa(x), i = xa(o), a = 485 * 8 + -13 * 316 + 76 * 3; a < n.length; ++a) {
      var s = n[a];
      if (!(s in Ld || t && t[s] || i && s in i || r && s in r)) {
        var c = Yd(o, s);
        try {
          Dd(x, s, c);
        } catch {
        }
      }
    }
  }
  return x;
}
function F0(x) {
  return typeof x == "function";
}
function Fr(x) {
  return typeof x == "object" && "styledComponentId" in x;
}
function r0(x, o) {
  return x && o ? "".concat(x, " ").concat(o) : x || o || "";
}
function ia(x, o) {
  if (1323 * 5 + -743 + 1468 * -4 === x.length) return "";
  for (var t = x[0], e = -1829 * 2 + -6191 + -5 * -1970; e < x.length; e++) t += x[e];
  return t;
}
function Y0(x) {
  return x !== null && typeof x == "object" && x.constructor.name === Object.name && !("props" in x && x.$$typeof);
}
function nr(x, o, t) {
  if (void (-8585 + -1 * -8585) === t && (t = !1), !t && !Y0(x) && !Array.isArray(x)) return o;
  if (Array.isArray(o))
    for (var e = -193 + 38 * 152 + -5583; e < o.length; e++) x[e] = nr(x[e], o[e]);
  else if (Y0(o))
    for (var e in o) x[e] = nr(x[e], o[e]);
  return x;
}
function Yr(x, o) {
  var t = {};
  t.value = o, Object.defineProperty(x, "toString", t);
}
var ye = {};
ye[1] = `Cannot create styled-component for component: %s.

`, ye[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, ye[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, ye[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, ye[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, ye[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, ye[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', ye[8] = `ThemeProvider: Please make your "theme" prop an object.

`, ye[9] = "Missing document `<head>`\n\n", ye[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, ye[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, ye[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", ye[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, ye[14] = `ThemeProvider: "theme" prop is required.

`, ye[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", ye[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, ye[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, ye[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var Md = q.NODE_ENV !== "production" ? ye : {};
function jd() {
  for (var x = [], o = 37 * 131 + -13 * -563 + -12166; o < arguments.length; o++) x[o] = arguments[o];
  for (var t = x[6887 + -16 * 533 + 547 * 3], e = [], n = -929 * 1 + 1571 + 641 * -1, r = x.length; n < r; n += 1796 * -2 + -5979 + 9572) e.push(x[n]);
  return e.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function _0(x) {
  for (var o = [], t = -1369 * -5 + 1047 * 9 + 1 * -16267; t < arguments.length; t++) o[t - 1] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(x, " for more information.").concat(o.length > 0 ? " Args: ".concat(o.join(", ")) : "")) : new Error(jd.apply(void (955 * -9 + -5 * -659 + 5300), V0([Md[x]], o, !1)).trim());
}
var Jd = function() {
  function x(o) {
    this.groupSizes = new Uint32Array(-1 * -1009 + -9014 + 501 * 17), this.length = 3238 * 3 + 1 * 3789 + -12991, this.tag = o;
  }
  return x.prototype.indexOfGroup = function(o) {
    for (var t = -1003 * 3 + 6158 + -67 * 47, e = -1585 * -2 + -1 * 713 + -2457; e < o; e++) t += this.groupSizes[e];
    return t;
  }, x.prototype.insertRules = function(o, t) {
    if (o >= this.groupSizes.length) {
      for (var e = this.groupSizes, n = e.length, r = n; o >= r; ) if ((r <<= -8400 + 2 * -3873 + 1 * 16147) < 3782 + 2 * -1891) throw _0(3780 + -1 * 8132 + -84 * -52, "".concat(o));
      this.groupSizes = new Uint32Array(r), this.groupSizes.set(e), this.length = r;
      for (var i = n; i < r; i++) this.groupSizes[i] = 127 * -66 + 7574 + 808 * 1;
    }
    for (var a = this.indexOfGroup(o + (815 * -1 + -30 * 95 + 3666)), s = (i = 7462 + -15 * 7 + -7357, t.length); i < s; i++) this.tag.insertRule(a, t[i]) && (this.groupSizes[o]++, a++);
  }, x.prototype.clearGroup = function(o) {
    if (o < this.length) {
      var t = this.groupSizes[o], e = this.indexOfGroup(o), n = e + t;
      this.groupSizes[o] = -7148 * 1 + -1 * -2111 + 73 * 69;
      for (var r = e; r < n; r++) this.tag.deleteRule(e);
    }
  }, x.prototype.getGroup = function(o) {
    var t = "";
    if (o >= this.length || this.groupSizes[o] === 0) return t;
    for (var e = this.groupSizes[o], n = this.indexOfGroup(o), r = n + e, i = n; i < r; i++) t += "".concat(this.tag.getRule(i)).concat(Nr);
    return t;
  }, x;
}(), _d = 1 << -17 * -557 + -1 * -1009 + -10448 * 1, ux = /* @__PURE__ */ new Map(), wx = /* @__PURE__ */ new Map(), lx = -8 * 101 + 7814 + -5 * 1401, qn = function(x) {
  if (ux.has(x)) return ux.get(x);
  for (; wx.has(lx); ) lx++;
  var o = lx++;
  if (q.NODE_ENV !== "production" && ((-3828 + 348 * 11 | o) < -4539 + 19 * 2 + 4501 || o > _d)) throw _0(-423 + 61 * 125 + -2 * 3593, "".concat(o));
  return ux.set(x, o), wx.set(o, x), o;
}, Qd = function(x, o) {
  lx = o + (17 * 433 + -5745 * -1 + -5 * 2621), ux.set(x, o), wx.set(o, x);
}, Ud = "style[".concat(u0, "][").concat(Os, '="').concat(oo, '"]'), zd = new RegExp("^".concat(u0, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), qd = function(x, o, t) {
  for (var e, n = t.split(","), r = 3028 + 11 * -853 + -155 * -41, i = n.length; r < i; r++) (e = n[r]) && x.registerName(o, e);
}, $d = function(x, o) {
  for (var t, e = ((t = o.textContent) !== null && void (5090 + -1266 * 3 + -1292) !== t ? t : "").split(Nr), n = [], r = -1793 * -3 + -2432 + -2947, i = e.length; r < i; r++) {
    var a = e[r].trim();
    if (a) {
      var s = a.match(zd);
      if (s) {
        var c = 0 | parseInt(s[1], 10), d = s[1 * -509 + 8014 * -1 + -275 * -31];
        -3644 + 1 * 8871 + -5227 !== c && (Qd(d, c), qd(x, d, s[-9789 + -1 * -2739 + 7053]), x.getTag().insertRules(c, n)), n.length = 421 * -1 + 6240 + -5819;
      } else n.push(a);
    }
  }
};
function eu() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ls = function(x) {
  var o = document.head, t = x || o, e = document.createElement("style"), n = function(a) {
    var s = Array.from(a.querySelectorAll("style[".concat(u0, "]")));
    return s[s.length - (-5 * -1521 + 4 * 1433 + -4 * 3334)];
  }(t), r = void (411 + 3 * -137) !== n ? n.nextSibling : null;
  e.setAttribute(u0, Hs), e.setAttribute(Os, oo);
  var i = eu();
  return i && e.setAttribute("nonce", i), t.insertBefore(e, r), e;
}, tu = function() {
  function x(o) {
    this.element = Ls(o), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, n = 4435 * -2 + -59 * 29 + 10581, r = e.length; n < r; n++) {
        var i = e[n];
        if (i.ownerNode === t) return i;
      }
      throw _0(-9222 * 1 + -1657 * 6 + 1 * 19181);
    }(this.element), this.length = 47 * 44 + 7725 + 1 * -9793;
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
}(), nu = function() {
  function x(o) {
    this.element = Ls(o), this.nodes = this.element.childNodes, this.length = 9704 + -5 * 631 + 1 * -6549;
  }
  return x.prototype.insertRule = function(o, t) {
    if (o <= this.length && o >= 1 * 6619 + -1320 + -5299) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[o] || null), this.length++, !0;
    }
    return !1;
  }, x.prototype.deleteRule = function(o) {
    this.element.removeChild(this.nodes[o]), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.nodes[o].textContent : "";
  }, x;
}(), xu = function() {
  function x(o) {
    this.rules = [], this.length = 4775 + -9736 * -1 + -14511;
  }
  return x.prototype.insertRule = function(o, t) {
    return o <= this.length && (this.rules.splice(o, -1198 * 4 + -8422 * -1 + -3630, t), this.length++, !0);
  }, x.prototype.deleteRule = function(o) {
    this.rules.splice(o, 5717 + -5716 * 1), this.length--;
  }, x.prototype.getRule = function(o) {
    return o < this.length ? this.rules[o] : "";
  }, x;
}(), aa = Dr, ou = { isServer: !Dr, useCSSOMInjection: !Hd }, Ns = function() {
  function x(o, t, e) {
    void (-2778 + 1 * -787 + 3565) === o && (o = D0), void (5650 + -109 * -43 + -10337) === t && (t = {});
    var n = this;
    this.options = qe(qe({}, ou), o), this.gs = t, this.names = new Map(e), this.server = !!o.isServer, !this.server && Dr && aa && (aa = !1, function(r) {
      for (var i = document.querySelectorAll(Ud), a = 0, s = i.length; a < s; a++) {
        var c = i[a];
        c && c.getAttribute(u0) !== Hs && ($d(r, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), Yr(this, function() {
      return function(r) {
        for (var i = r.getTag(), a = i.length, s = "", c = function(g) {
          var C = function(u) {
            return wx.get(u);
          }(g);
          if (void (3744 + -36 * 104) === C) return "continue";
          var l = r.names.get(C), h = i.getGroup(g);
          if (l === void 0 || -3 * 1567 + 5584 + -883 === h.length) return "continue";
          var p = "".concat(u0, ".g").concat(g, '[id="').concat(C, '"]'), A = "";
          void (-10485 + -3495 * -3) !== l && l.forEach(function(u) {
            u.length > 0 && (A += "".concat(u, ","));
          }), s += "".concat(h).concat(p, '{content:"').concat(A, '"}').concat(Nr);
        }, d = 158 * 58 + -8054 + 185 * -6; d < a; d++) c(d);
        return s;
      }(n);
    });
  }
  return x.registerId = function(o) {
    return qn(o);
  }, x.prototype.reconstructWithOptions = function(o, t) {
    return void (9974 * -1 + -1 * 164 + 10138) === t && (t = !0), new x(qe(qe({}, this.options), o), this.gs, t && this.names || void (227 * -1 + 7060 * -1 + -1 * -7287));
  }, x.prototype.allocateGSInstance = function(o) {
    return this.gs[o] = (this.gs[o] || 876 * -4 + -6851 + 10355) + (5695 + 3 * -1898);
  }, x.prototype.getTag = function() {
    return this.tag || (this.tag = (o = function(t) {
      var e = t.useCSSOMInjection, n = t.target;
      return t.isServer ? new xu(n) : e ? new tu(n) : new nu(n);
    }(this.options), new Jd(o)));
    var o;
  }, x.prototype.hasNameForId = function(o, t) {
    return this.names.has(o) && this.names.get(o).has(t);
  }, x.prototype.registerName = function(o, t) {
    if (qn(o), this.names.has(o)) this.names.get(o).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(o, e);
    }
  }, x.prototype.insertRules = function(o, t, e) {
    this.registerName(o, t), this.getTag().insertRules(qn(o), e);
  }, x.prototype.clearNames = function(o) {
    this.names.has(o) && this.names.get(o).clear();
  }, x.prototype.clearRules = function(o) {
    this.getTag().clearGroup(qn(o)), this.clearNames(o);
  }, x.prototype.clearTag = function() {
    this.tag = void (108 * 5 + -54 * 41 + 1674);
  }, x;
}(), ru = /&/g, iu = /^\s*\/\/.*$/gm;
function Ds(x, o) {
  return x.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(o, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(o, " ")), t.props = t.props.map(function(e) {
      return "".concat(o, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Ds(t.children, o)), t;
  });
}
function Fs(x) {
  var o, t, e, n = x === void 0 ? D0 : x, r = n.options, i = void (37 * 226 + -5966 + -2396) === r ? D0 : r, a = n.plugins, s = void (1 * 5366 + 181 * 13 + -7719 * 1) === a ? ro : a, c = function(C, l, h) {
    return h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > -2660 + 5 * -103 + 3175 ? ".".concat(o) : C;
  }, d = s.slice();
  d.push(function(C) {
    C.type === eo && C.value.includes("&") && (C.props[-6 * 483 + 394 + -2504 * -1] = C.props[12574 + -2 * 6287].replace(ru, t).replace(e, c));
  }), i.prefix && d.push(Gd), d.push(wd);
  var g = function(C, l, h, p) {
    void (-1100 * 2 + -2347 + -1 * -4547) === l && (l = ""), void (-9 * -1017 + 1 * 6443 + -3899 * 4) === h && (h = ""), void (-6429 + -8462 * -1 + -19 * 107) === p && (p = "&"), o = p, t = l, e = new RegExp("\\".concat(t, "\\b"), "g");
    var A = C.replace(iu, ""), u = Wd(h || l ? "".concat(h, " ").concat(l, " { ").concat(A, " }") : A);
    i.namespace && (u = Ds(u, i.namespace));
    var v = [];
    return vx(u, Sd(d.concat(Bd(function(H) {
      return v.push(H);
    })))), v;
  };
  return g.hash = s.length ? s.reduce(function(C, l) {
    return l.name || _0(-9052 + -2055 * -4 + -11 * -77), x0(C, l.name);
  }, Ks).toString() : "", g;
}
var au = new Ns(), xr = Fs(), Xr = d0.createContext({ shouldForwardProp: void (-1882 * 4 + 4084 + -492 * -7), styleSheet: au, stylis: xr });
Xr.Consumer;
var su = d0.createContext(void (3237 + 5309 * 1 + 4273 * -2));
function or() {
  return I0(Xr);
}
function cu(x) {
  var o = xt(x.stylisPlugins), t = o[0], e = o[43 * -219 + 832 * 11 + 19 * 14], n = or().styleSheet, r = ot(function() {
    var d = n, g = {};
    return g.useCSSOMInjection = !1, x.sheet ? d = x.sheet : x.target && (d = d.reconstructWithOptions({ target: x.target }, !1)), x.disableCSSOMInjection && (d = d.reconstructWithOptions(g)), d;
  }, [x.disableCSSOMInjection, x.sheet, x.target, n]), i = ot(function() {
    var d = {};
    d.namespace = x.namespace, d.prefix = x.enableVendorPrefixes;
    var g = {};
    return g.options = d, g.plugins = t, Fs(g);
  }, [x.enableVendorPrefixes, x.namespace, t]);
  Be(function() {
    gd(t, x.stylisPlugins) || e(x.stylisPlugins);
  }, [x.stylisPlugins]);
  var a = ot(function() {
    var d = {};
    return d.shouldForwardProp = x.shouldForwardProp, d.styleSheet = r, d.stylis = i, d;
  }, [x.shouldForwardProp, r, i]), s = {};
  s.value = a;
  var c = {};
  return c.value = i, d0.createElement(Xr.Provider, s, d0.createElement(su.Provider, c, x.children));
}
var sa = function() {
  function x(o, t) {
    var e = this;
    this.inject = function(n, r) {
      void (-6051 + -1075 * 6 + 12501) === r && (r = xr);
      var i = e.name + r.hash;
      n.hasNameForId(e.id, i) || n.insertRules(e.id, i, r(e.rules, i, "@keyframes"));
    }, this.name = o, this.id = "sc-keyframes-".concat(o), this.rules = t, Yr(this, function() {
      throw _0(-25 * 41 + 9987 + 2 * -4475, String(e.name));
    });
  }
  return x.prototype.getName = function(o) {
    return void (1 * 1879 + -6349 + 1 * 4470) === o && (o = xr), this.name + o.hash;
  }, x;
}(), gu = function(x) {
  return x >= "A" && x <= "Z";
};
function ca(x) {
  for (var o = "", t = 4147 + 206 * -44 + 4917; t < x.length; t++) {
    var e = x[t];
    if (-41 * -219 + 8499 + -17477 === t && e === "-" && x[4163 * -2 + 3579 * -2 + -7742 * -2] === "-") return x;
    gu(e) ? o += "-" + e.toLowerCase() : o += e;
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
var Ys = function(x) {
  return x == null || x === !1 || x === "";
}, Xs = function(x) {
  var o, t, e = [];
  for (var n in x) {
    var r = x[n];
    x.hasOwnProperty(n) && !Ys(r) && (Array.isArray(r) && r.isCss || F0(r) ? e.push("".concat(ca(n), ":"), r, ";") : Y0(r) ? e.push.apply(e, V0(V0(["".concat(n, " {")], Xs(r), !1), ["}"], !1)) : e.push("".concat(ca(n), ": ").concat((o = n, (t = r) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -6608 + -7 * -785 + 21 * 53 === t || o in kd || o.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function c0(x, o, t, e) {
  if (Ys(x)) return [];
  if (Fr(x)) return [".".concat(x.styledComponentId)];
  if (F0(x)) {
    if (!F0(r = x) || r.prototype && r.prototype.isReactComponent || !o) return [x];
    var n = x(o);
    return q.NODE_ENV === "production" || typeof n != "object" || Array.isArray(n) || n instanceof sa || Y0(n) || n === null || console.error("".concat(Rs(x), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), c0(n, o, t, e);
  }
  var r;
  return x instanceof sa ? t ? (x.inject(t, e), [x.getName(e)]) : [x] : Y0(x) ? Xs(x) : Array.isArray(x) ? Array.prototype.concat.apply(ro, x.map(function(i) {
    return c0(i, o, t, e);
  })) : [x.toString()];
}
function du(x) {
  for (var o = -2 * 4009 + 17 + 8001; o < x.length; o += 1) {
    var t = x[o];
    if (F0(t) && !Fr(t)) return !1;
  }
  return !0;
}
var uu = Zs(oo), lu = function() {
  function x(o, t, e) {
    this.rules = o, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (void (-5263 + -101 * -61 + -2 * 449) === e || e.isStatic) && du(o), this.componentId = t, this.baseHash = x0(uu, t), this.baseStyle = e, Ns.registerId(t);
  }
  return x.prototype.generateAndInjectStyles = function(o, t, e) {
    var n = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) n = r0(n, this.staticRulesId);
      else {
        var r = ia(c0(this.rules, o, t, e)), i = tr(x0(this.baseHash, r) >>> 793 * 3 + 929 * 1 + -3308);
        if (!t.hasNameForId(this.componentId, i)) {
          var a = e(r, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, a);
        }
        n = r0(n, i), this.staticRulesId = i;
      }
    else {
      for (var s = x0(this.baseHash, e.hash), c = "", d = 16702 + -2 * 8351; d < this.rules.length; d++) {
        var g = this.rules[d];
        if (typeof g == "string") c += g, q.NODE_ENV !== "production" && (s = x0(s, g));
        else if (g) {
          var C = ia(c0(g, o, t, e));
          s = x0(s, C + d), c += C;
        }
      }
      if (c) {
        var l = tr(s >>> 0);
        t.hasNameForId(this.componentId, l) || t.insertRules(this.componentId, l, e(c, ".".concat(l), void (-1 * -2522 + -1 * -9421 + -11943), this.componentId)), n = r0(n, l);
      }
    }
    return n;
  }, x;
}(), Ms = d0.createContext(void (691 * 13 + 3760 + 12743 * -1));
Ms.Consumer;
var Ho = {}, ga = /* @__PURE__ */ new Set();
function Iu(x, o, t) {
  var e = Fr(x), n = x, r = !ko(x), i = o.attrs, a = void (8008 + 7 * 473 + -49 * 231) === i ? ro : i, s = o.componentId, c = void (768 + 8986 * -1 + 8218) === s ? function(J, Y) {
    var O = typeof J != "string" ? "sc" : ta(J);
    Ho[O] = (Ho[O] || 0) + (2290 * 4 + 5448 + -14607);
    var _ = "".concat(O, "-").concat(Vd(oo + O + Ho[O]));
    return Y ? "".concat(Y, "-").concat(_) : _;
  }(o.displayName, o.parentComponentId) : s, d = o.displayName, g = void (-2751 * -1 + -4616 + -1865 * -1) === d ? function(J) {
    return ko(J) ? "styled.".concat(J) : "Styled(".concat(Rs(J), ")");
  }(x) : d, C = o.displayName && o.componentId ? "".concat(ta(o.displayName), "-").concat(o.componentId) : o.componentId || c, l = e && n.attrs ? n.attrs.concat(a).filter(Boolean) : a, h = o.shouldForwardProp;
  if (e && n.shouldForwardProp) {
    var p = n.shouldForwardProp;
    if (o.shouldForwardProp) {
      var A = o.shouldForwardProp;
      h = function(J, Y) {
        return p(J, Y) && A(J, Y);
      };
    } else h = p;
  }
  var u = new lu(t, C, e ? n.componentStyle : void (-875 + -1 * -9309 + 2 * -4217));
  function v(J, Y) {
    return function(O, _, Ie) {
      var U = O.attrs, fe = O.componentStyle, Ce = O.defaultProps, Re = O.foldedComponentIds, It = O.styledComponentId, ie = O.target, Pe = d0.useContext(Ms), Xe = or(), it = O.shouldForwardProp || Xe.shouldForwardProp;
      q.NODE_ENV !== "production" && Wx(It);
      var Me = Kd(_, Pe, Ce) || D0, me = function(C0, $e, yt) {
        var at = {};
        at.className = void (-1 * -145 + 3 * 3322 + -10111), at.theme = yt;
        for (var _t, Wt = qe(qe({}, $e), at), ft = 8384 + 276 * 1 + 433 * -20; ft < C0.length; ft += 8573 + -2 * -4501 + -87 * 202) {
          var Qt = F0(_t = C0[ft]) ? _t(Wt) : _t;
          for (var Ct in Qt) Wt[Ct] = Ct === "className" ? r0(Wt[Ct], Qt[Ct]) : Ct === "style" ? qe(qe({}, Wt[Ct]), Qt[Ct]) : Qt[Ct];
        }
        return $e.className && (Wt.className = r0(Wt.className, $e.className)), Wt;
      }(U, _, Me), Te = me.as || ie, je = {};
      for (var be in me) void (-8558 + 13 * 37 + 8077) === me[be] || be[5 * 227 + 3 * 1989 + 7102 * -1] === "$" || be === "as" || be === "theme" && me.theme === Me || (be === "forwardedAs" ? je.as = me.forwardedAs : it && !it(be, Te) || (je[be] = me[be], it || q.NODE_ENV !== "development" || vg(be) || ga.has(be) || !er.has(Te) || (ga.add(be), console.warn('styled-components: it looks like an unknown prop "'.concat(be, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ee = function(C0, $e) {
        var yt = or(), at = C0.generateAndInjectStyles($e, yt.styleSheet, yt.stylis);
        return q.NODE_ENV !== "production" && Wx(at), at;
      }(fe, me);
      q.NODE_ENV !== "production" && O.warnTooManyClasses && O.warnTooManyClasses(Ee);
      var Je = r0(Re, It);
      return Ee && (Je += " " + Ee), me.className && (Je += " " + me.className), je[ko(Te) && !er.has(Te) ? "class" : "className"] = Je, je.ref = Ie, Ye(Te, je);
    }(H, J, Y);
  }
  v.displayName = g;
  var H = d0.forwardRef(v), F = {};
  return F.attrs = !0, F.componentStyle = !0, F.displayName = !0, F.foldedComponentIds = !0, F.shouldForwardProp = !0, F.styledComponentId = !0, F.target = !0, H.attrs = l, H.componentStyle = u, H.displayName = g, H.shouldForwardProp = h, H.foldedComponentIds = e ? r0(n.foldedComponentIds, n.styledComponentId) : "", H.styledComponentId = C, H.target = e ? n.target : x, Object.defineProperty(H, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(J) {
    this._foldedDefaultProps = e ? function(Y) {
      for (var O = [], _ = 26 * -43 + -874 * -4 + 1 * -2377; _ < arguments.length; _++) O[_ - (-4427 + 133 * 70 + 2 * -2441)] = arguments[_];
      for (var Ie = -7033 * 1 + 5 * 1531 + -1 * 622, U = O; Ie < U.length; Ie++) nr(Y, U[Ie], !0);
      return Y;
    }({}, n.defaultProps, J) : J;
  } }), q.NODE_ENV !== "production" && (Od(g, C), H.warnTooManyClasses = /* @__PURE__ */ function(J, Y) {
    var O = {}, _ = !1;
    return function(Ie) {
      if (!_ && (O[Ie] = !0, Object.keys(O).length >= 39 + -1 * -161)) {
        var U = Y ? ' with the id of "'.concat(Y, '"') : "";
        console.warn("Over ".concat(8654 * -1 + -3079 + -1 * -11933, " classes were generated for component ").concat(J).concat(U, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), _ = !0, O = {};
      }
    };
  }(g, C)), Yr(H, function() {
    return ".".concat(H.styledComponentId);
  }), r && Es(H, x, F), H;
}
function da(x, o) {
  for (var t = [x[-6249 + -9 * -994 + -899 * 3]], e = 0, n = o.length; e < n; e += -937 * -9 + 2224 + -10656) t.push(o[e], x[e + 1]);
  return t;
}
var ua = function(x) {
  var o = {};
  return o.isCss = !0, Object.assign(x, o);
};
function fu(x) {
  for (var o = [], t = 671 * 3 + 404 + -2416; t < arguments.length; t++) o[t - 1] = arguments[t];
  if (F0(x) || Y0(x)) return ua(c0(da(ro, V0([x], o, !0))));
  var e = x;
  return -3677 + -1 * -3677 === o.length && e.length === 1 && typeof e[7510 + 23 * 235 + -12915] == "string" ? c0(e) : ua(c0(da(e, o)));
}
function rr(x, o, t) {
  if (void (1 * -2531 + -2496 + 5027) === t && (t = D0), !o) throw _0(1, o);
  var e = function(n) {
    for (var r = [], i = 2335 + -23 * -49 + -3461; i < arguments.length; i++) r[i - (-1697 + 2 * 4852 + -8006)] = arguments[i];
    return x(o, t, fu.apply(void (1 * 6281 + 233 * 1 + 6514 * -1), V0([n], r, !1)));
  };
  return e.attrs = function(n) {
    return rr(x, o, qe(qe({}, t), { attrs: Array.prototype.concat(t.attrs, n).filter(Boolean) }));
  }, e.withConfig = function(n) {
    return rr(x, o, qe(qe({}, t), n));
  }, e;
}
var js = function(x) {
  return rr(Iu, x);
}, Rn = js;
er.forEach(function(x) {
  Rn[x] = js(x);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var $n = "__sc-".concat(u0, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[$n] || (window[$n] = 1 * 367 + 6945 + -7312), -4846 + 4847 * 1 === window[$n] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[$n] += 362 * -5 + 4468 * 1 + -2657);
const Cu = Rn.div`
  position: relative;
`, hu = Rn.video`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(x) => x.$isVisible ? "visible" : "hidden"};
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
var Ix = ((x) => (x.CONTINUE_DETECTION = "continue-detection", x.SWITCH_CAMERA = "switch-camera", x.TOGGLE_MIRROR = "toggle-mirror", x))(Ix || {}), Js = ((x) => (x.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", x.CONTROL = "document-auto-capture:control", x.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", x.DOCUMENT_DETECTION = "document-auto-capture:document-detection", x.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", x.STATE_CHANGED = "document-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", x))(Js || {}), St = ((x) => (x.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", x.CONTROL = "face-auto-capture:control", x.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", x.FACE_DETECTION = "face-auto-capture:face-detection", x.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", x.STATE_CHANGED = "face-auto-capture:state-changed", x.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", x))(St || {}), pu = ((x) => (x.ANIMATION_END = "magnifeye-auto-capture:animation-end", x.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", x))(pu || {}), mu = ((x) => (x.STATUS_CHANGED = "smile-auto-capture:status-changed", x))(mu || {});
const _s = {};
_s.EYE_NOT_PRESENT = "eye_not_present";
const la = _s, De = {};
De.CANDIDATE_SELECTION = "candidate_selection", De.FACE_TOO_CLOSE = "face_too_close", De.FACE_TOO_FAR = "face_too_far", De.FACE_CENTERING = "face_centering", De.FACE_NOT_PRESENT = "face_not_present", De.SHARPNESS_TOO_LOW = "sharpness_too_low", De.BRIGHTNESS_TOO_LOW = "brightness_too_low", De.BRIGHTNESS_TOO_HIGH = "brightness_too_high", De.DEVICE_PITCHED = "device_pitched", De.LEFT_EYE_NOT_PRESENT = "left_" + la.EYE_NOT_PRESENT, De.RIGHT_EYE_NOT_PRESENT = "right_" + la.EYE_NOT_PRESENT, De.MOUTH_NOT_PRESENT = "mouth_not_present", De.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", De.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const Ve = De, Qe = {};
Qe.isPresent = Ve.FACE_NOT_PRESENT, Qe.isNotPitched = Ve.DEVICE_PITCHED, Qe.isNotSmall = Ve.FACE_TOO_FAR, Qe.isNotLarge = Ve.FACE_TOO_CLOSE, Qe.isNotOutOfBounds = Ve.FACE_CENTERING, Qe.isNotDim = Ve.BRIGHTNESS_TOO_LOW, Qe.isNotBright = Ve.BRIGHTNESS_TOO_HIGH, Qe.isSharp = Ve.SHARPNESS_TOO_LOW, Qe.isLeftEyePresent = Ve.LEFT_EYE_NOT_PRESENT, Qe.isRightEyePresent = Ve.RIGHT_EYE_NOT_PRESENT, Qe.isMouthPresent = Ve.MOUTH_NOT_PRESENT, Qe.isMouthScoreNotTooHigh = Ve.MOUTH_SCORE_TOO_HIGH, Qe.isMouthScoreNotTooLow = Ve.MOUTH_SCORE_TOO_LOW;
const bu = Qe, ir = {};
ir.FRONT = "user", ir.REAR = "environment";
const Qs = ir, on = {};
on.LOADING = "LOADING", on.ERROR = "ERROR", on.WAITING = "WAITING", on.RUNNING = "RUNNING";
const nt = on;
var Au = ((x) => (x.CLOSEUP = "CLOSEUP", x.DISTANT = "DISTANT", x.MIDDLE = "MIDDLE", x))(Au || {});
const io = Zn(void 0);
io.displayName = "AppStateContext";
function Pn() {
  const x = I0(io);
  if (x === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return x;
}
const yu = io.Provider;
class Us extends dt {
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
    return ((o = this.context) == null ? void 0 : o.appState) === nt.ERROR ? null : this.props.children;
  }
}
j(Us, "contextType", io);
const Wu = Rn.canvas`
  transform: ${(x) => x.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, vu = Rn.div`
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
function wu() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const Su = ds(
  ({ detectionDetails: x, isImageMirror: o }, t) => wu() ? (console.log(x), /* @__PURE__ */ K(bt, { children: [
    /* @__PURE__ */ K(Wu, { ref: t, $isImageMirror: o }),
    /* @__PURE__ */ K(vu, { children: Object.entries(x).map(([e, n]) => /* @__PURE__ */ K("div", { children: [
      e,
      ": ",
      /* @__PURE__ */ K("strong", { children: n })
    ] }, e)) })
  ] })) : null
), Sx = Zn(void 0);
Sx.displayName = "AnalyticsContext";
function Bu() {
  const x = I0(Sx);
  if (x === void 0)
    throw new Error(`${Sx.displayName} must be used within a AnalyticsProvider`);
  return x;
}
function Gu(x, o, t, e, n) {
  return we(t - 578, e);
}
function fx(x, o, t, e, n) {
  return we(t - -646, x);
}
function Bx() {
  const x = ["gmomnqqsWQKsrvddRdW", "oeBdMbxcJW", "DSkJwLBdTW", "W7bCW58dnaRdVuiyWP0", "kCkHW6iUWRm", "C23cQcpdJmkSWR1gWOKpWRH4", "wqtcJLRdN8kDW79ke3y0WQvF", "eCkzW6akWPOdp2yvd2rvWPW", "dCkui31n", "W43cNbGbbCo3fmk7d8oN", "hSkDWRNcI0C", "oaWhCK7cTe4CW6eMW5q", "W6OPvCkzWOuKW75GW4iQW7NcO8k/", "hfRcQNTtWRJcNG", "WPz+BNrK", "WQKidCoUWOhcUGvbWQ9MW7VdGcG", "yhddNSomiq", "mHzFW4VcPG", "mCkCE8oEWQePuCoAWP5VW75ina", "Ew/cOcldHCkTW4vwWQ4GWRnoWRm", "W7jCW58jr1xcVwayWQbGmmoi", "tLZcNW", "yvWPWPRdVNJcGHGJW6yHoXu", "FwNcHZeB", "ebxdSvpcUq", "W7LCwSkRW50", "WRimWOSqca", "CI7cK8kpydlcSCk/W4a1WPtdHtO", "CxtdNmo8ifVdOW", "WRNcSxfAsq56", "W4NcMH0gDSkKvCk/dSo+WRzvWOa", "yqxcIHpcGq", "CspdSmob", "WR7cU0ftvtbe"];
  return Bx = function() {
    return x;
  }, Bx();
}
function Ia(x, o, t, e, n) {
  return we(o - -670, t);
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return we(C - 605, g);
  }
  function e(s, c, d, g, C) {
    return we(c - -327, C);
  }
  const n = x();
  function r(s, c, d, g, C) {
    return we(c - 689, d);
  }
  function i(s, c, d, g, C) {
    return we(c - 949, C);
  }
  function a(s, c, d, g, C) {
    return we(g - -624, c);
  }
  for (; ; )
    try {
      if (-parseInt(r(1008, 1009, "%LUM", 993, 992)) / 1 * (-parseInt(r(972, 986, "&zDI", 978, 974)) / 2) + -parseInt(a(-309, "&zDI", -301, -313, -301)) / 3 + -parseInt(e(-13, -8, -14, -12, "%LUM")) / 4 + parseInt(e(-40, -28, -45, -35, "mCa*")) / 5 * (parseInt(e(-30, -22, -13, -30, "s^8q")) / 6) + parseInt(t(916, 896, 918, ")0Cw", 909)) / 7 + -parseInt(r(995, 992, "jQA(", 1006, 977)) / 8 * (-parseInt(i(1227, 1244, 1229, 1246, "%vmb")) / 9) + -parseInt(t(923, 930, 927, "OvNm", 915)) / 10 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Bx, 1024234 + 655 * 243 + -89 * 6163);
const Gx = Zn(void (7701 + -1 * -8293 + -22 * 727));
function ku(x, o, t, e, n) {
  return we(o - 637, n);
}
function we(x, o) {
  const t = Bx();
  return we = function(e, n) {
    e = e - (10772 + 1 * -10477);
    let r = t[e];
    if (we.ykYUZW === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      we.iwVcuT = d, x = arguments, we.ykYUZW = !0;
    }
    const a = t[497 + 1 * 6119 + -6616], s = e + a, c = x[s];
    return c ? r = c : (we.kmZkCc === void 0 && (we.kmZkCc = !0), r = we.iwVcuT(r, n), x[s] = r), r;
  }, we(x, o);
}
function fa(x, o, t, e, n) {
  return we(n - -926, o);
}
Gx[fx("$e39", -344, -331) + Ia(-351, -368, "7JYW") + "e"] = fx("!Aot", -360, -350) + Ia(-360, -364, "o)pZ") + fx("nfjv", -338, -322);
function Mr() {
  function x(i, a, s, c, d) {
    return fx(a, a - 395, i - -117);
  }
  function o(i, a, s, c, d) {
    return Gu(i - 92, a - 72, c - -43, i);
  }
  const t = I0(Gx);
  function e(i, a, s, c, d) {
    return fa(i - 419, d, s - 474, c - 456, i - 252);
  }
  function n(i, a, s, c, d) {
    return ku(i - 416, d - -434, s - 206, c - 455, a);
  }
  if (t === void (-1 * -2586 + 2497 + 299 * -17)) throw new Error(Gx[e(-346, -340, -356, -332, "KV*o") + e(-365, -371, -378, -373, "b)au") + "e"] + (e(-366, -352, -368, -355, "%LUM") + r("2hXt", -282, -292, -281, -291) + n(522, "%vmb", 516, 525, 521) + o("%vvC", 851, 839, 851) + r("6fSz", -324, -316, -307, -314) + r("PX96", -290, -281, -287, -297) + x(-436, "u%Ef") + r("s^8q", -307, -296, -314, -301)));
  function r(i, a, s, c, d) {
    return fa(i - 159, i, s - 129, c - 398, d - 312);
  }
  return t;
}
(function(x, o) {
  const t = x();
  function e(a, s, c, d, g) {
    return He(s - -707, a);
  }
  function n(a, s, c, d, g) {
    return He(c - 235, g);
  }
  function r(a, s, c, d, g) {
    return He(g - 519, d);
  }
  function i(a, s, c, d, g) {
    return He(d - 474, g);
  }
  for (; ; )
    try {
      if (parseInt(n(527, 532, 537, 540, "d[9]")) / 1 + -parseInt(e("(qKA", -409, -405, -401, -420)) / 2 + -parseInt(n(551, 551, 553, 545, "*mn#")) / 3 * (-parseInt(n(538, 539, 548, 539, "P!zk")) / 4) + -parseInt(r(808, 810, 819, "VlfJ", 811)) / 5 + -parseInt(r(845, 840, 841, "edxN", 831)) / 6 * (-parseInt(e("1d$R", -407, -394, -403, -408)) / 7) + parseInt(i(783, 763, 768, 777, "WqT)")) / 8 * (-parseInt(r(820, 840, 838, "xh3k", 833)) / 9) + parseInt(n(536, 525, 532, 543, "NCi9")) / 10 === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(kx, -1 * -182719 + 2 * -86741 + 160405);
function He(x, o) {
  const t = kx();
  return He = function(e, n) {
    e = e - (-69 * 37 + -1938 + -4783 * -1);
    let r = t[e];
    if (He.ihebxP === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      He.TeyYHb = d, x = arguments, He.ihebxP = !0;
    }
    const a = t[3139 * 1 + -9569 * 1 + 6430], s = e + a, c = x[s];
    return c ? r = c : (He.eDFxks === void 0 && (He.eDFxks = !0), r = He.TeyYHb(r, n), x[s] = r), r;
  }, He(x, o);
}
function Hu({ licensePath: x, bramble: o, wasmDirectoryPath: t }) {
  function e(d, g, C, l, h) {
    return He(C - -939, g);
  }
  function n(d, g, C, l, h) {
    return He(C - 335, g);
  }
  const [r, i] = xt(), a = r !== void 0;
  Be(() => {
    async function d() {
      await o[C(-531, -522, -526, "e0fh")](t, x);
      function g(l, h, p, A, u) {
        return He(l - -874, A);
      }
      function C(l, h, p, A, u) {
        return He(p - -843, A);
      }
      i(o[C(-553, -529, -539, "d[*J") + C(-527, -516, -527, ")GoS") + g(-564, -556, -550, "64EV") + "t"]());
    }
    d();
  }, [o, t, x, i]);
  function s(d, g, C, l, h) {
    return He(C - -956, h);
  }
  const c = {};
  return c[n(629, "bVLq", 629) + s(-654, -674, -660, -662, "RCfc")] = r, c[e(-637, "Z*O7", -624) + "sh"] = a, c;
}
function kx() {
  const x = ["z01mdCokdgFcQG", "v1ldPmkiWOzUW5NcTW", "wJq/WRddSmknhmkFAe7cICkG", "W5e4CCoYW4ZdS8oBW4LpzmoSvq", "WRb/W6alnq", "W6aSWQzYAmoOqYy8WOhcRmo8", "dmorq8k6yCkrFZFcQCooi0m", "amoniGNdTwT7yfBcU3xdQq", "yK8hw8kovJ3cQKldP2q/W7y", "aSoDDY1trxZcUbxcPmknya", "W4ZdQfWuAa", "W7ZdKSosW5e6WO9NWRScdGzy", "dc9nbSkeW5pcTe7cVMm6WPa", "W5/cI20acxCi", "f8o7pKpdV8kmWRW+", "WQ/dRGBdTmkv", "W4j1WPnWWPy", "qgpdTmk9", "W77dL8otW5y9WOPtWPaFlY9y", "l8kcxIxcMmo0xCo0jmouW4JcTmk4", "W4hdSLqcuttdOG", "WOBdPCotcmoS", "WRignCo5WRifySkF", "WOVcRtNdIqK", "WRCpECkQW4DazSk1ACkhWQnU", "mmo5FcSImMSNk8kOW5xdKG", "WQ3cVXPwmraMq3y2WRlcKW"];
  return kx = function() {
    return x;
  }, kx();
}
var zs = ((x) => (x.DOCUMENT = "document-auto-capture:dev", x.FACE = "face-auto-capture:dev", x))(zs || {});
const ar = {};
ar.SIMD = "simd", ar.NO_SIMD = "no-simd";
const Ca = ar, sr = {};
sr.Lower = "Lower", sr.Higher = "Higher";
const cr = sr, Cx = {};
Cx.VISIBLE = "VISIBLE", Cx.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", Cx.HIDDEN = "HIDDEN";
const Hx = Cx;
function Ox() {
  var x = ["W4VcGL/dIaFcGW/cSSkRWPFdJCkJdq", "cGTunSkzWQefW4PgCvK2ua", "WOXkW5yyBx4GW5LpxZBcGmo2yG", "v0GrWQG0gYpcTCocBCks", "W7FdUSooWPOCW7tdM3KbbW", "W74QW61ZEuZdUZPIfSooWRhdRb4", "W6/cGSoYA8kXW6zoaW", "CCkrBaNcRSkwtdC", "W5nrW75MW5m+z8k9m8olnCoIWQSy", "qCkwcxWDde7dIG", "WOlcIJRdO8ogy33cQqBcGxCK", "aLFdKCkZW7hdI8oineHYia", "W5rvW7LLW5e7zmk9dmoihSovWRS6", "W63cLmoVhmk7WQRcLdy1wCkima", "sr0/qHZdGWpcN8oHWPe", "W77cIK7dHwarWQtdJW", "W6XEWObbWRBdRWypECkCWO0WWOrN", "xuSwW51KgtFcQmox", "bCkGWQWRWQnSW5PlfW", "W4r/WQ3dKmk9", "u2VcRmkAemoVvCooW5mRW7xdMLPe", "WRqDW64wW68", "ps3dVmo9Ba"];
  return Ox = function() {
    return x;
  }, Ox();
}
function Ue(x, o) {
  var t = Ox();
  return Ue = function(e, n) {
    e = e - (163 * 17 + -3579 + 1082);
    var r = t[e];
    if (Ue.YxiLGB === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (var H = 0, F = l.length; H < F; H++)
          h += "%" + ("00" + l.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (var v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Ue.GtxIQw = a, x = arguments, Ue.YxiLGB = !0;
    }
    var s = t[6 * 375 + 4725 + -6975], c = e + s, d = x[c];
    return d ? r = d : (Ue.QfSLQY === void 0 && (Ue.QfSLQY = !0), r = Ue.GtxIQw(r, n), x[c] = r), r;
  }, Ue(x, o);
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Ue(g - -456, d);
  }
  function e(s, c, d, g, C) {
    return Ue(d - -740, c);
  }
  var n = x();
  function r(s, c, d, g, C) {
    return Ue(C - -468, c);
  }
  function i(s, c, d, g, C) {
    return Ue(s - 787, g);
  }
  for (; ; )
    try {
      var a = parseInt(e(-441, "Bbes", -448, -451, -438)) / 1 * (-parseInt(t(-174, -185, "[wg4", -182, -183)) / 2) + -parseInt(e(-448, "fMY2", -457, -460, -455)) / 3 * (-parseInt(r(-171, "pp[c", -184, -178, -177)) / 4) + -parseInt(r(-191, "zdm3", -193, -201, -190)) / 5 * (-parseInt(t(-162, -171, "7v2b", -162, -173)) / 6) + parseInt(t(-176, -174, "NF@(", -167, -174)) / 7 + parseInt(e(-448, "Mju7", -459, -448, -469)) / 8 + parseInt(e(-437, "Sww5", -447, -450, -450)) / 9 + -parseInt(i(1083, 1092, 1079, "V3bf", 1093)) / 10;
      if (a === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ox, 2501210 + 12135 * -129);
function Ou({ crosshatch: x }) {
  function o(e, n, r, i, a) {
    return Ue(r - 36, n);
  }
  function t(e, n, r, i, a) {
    return Ue(r - 481, i);
  }
  return x != null && x[t(763, 777, 767, "Mju7") + "id"] ? cr[o(323, "FSlm", 323) + "r"] : cr[t(771, 762, 765, "ENRi")];
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return Oe(d - -500, g);
  }
  function e(a, s, c, d, g) {
    return Oe(s - -76, a);
  }
  function n(a, s, c, d, g) {
    return Oe(g - 816, d);
  }
  function r(a, s, c, d, g) {
    return Oe(d - 813, g);
  }
  const i = x();
  for (; ; )
    try {
      if (parseInt(r(1258, 1267, 1264, 1272, "w03o")) / 1 + -parseInt(r(1249, 1272, 1261, 1265, "PasD")) / 2 * (parseInt(n(1262, 1273, 1245, "t*@Q", 1256)) / 3) + -parseInt(t(-64, -50, -53, -57, "DHdl")) / 4 * (parseInt(t(-74, -75, -50, -59, "X]4E")) / 5) + -parseInt(n(1266, 1283, 1284, "tePm", 1272)) / 6 + parseInt(n(1274, 1274, 1295, "8pEN", 1279)) / 7 * (parseInt(e("6U$%", 362, 368, 359, 348)) / 8) + -parseInt(e("wd4a", 381, 368, 364, 384)) / 9 * (-parseInt(t(-64, -74, -80, -66, "8SE%")) / 10) + -parseInt(r(1261, 1243, 1257, 1252, "^id]")) / 11 === o) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Kx, 1492372 + -1634583 * 1 + 121409 * 8);
function Oe(x, o) {
  const t = Kx();
  return Oe = function(e, n) {
    e = e - (-7476 + -521 * -5 + -50 * -106);
    let r = t[e];
    if (Oe.RAzChJ === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Oe.JhuHTl = d, x = arguments, Oe.RAzChJ = !0;
    }
    const a = t[1 * 5430 + 3 * 2521 + -12993], s = e + a, c = x[s];
    return c ? r = c : (Oe.kryYgn === void 0 && (Oe.kryYgn = !0), r = Oe.JhuHTl(r, n), x[s] = r), r;
  }, Oe(x, o);
}
function Kx() {
  const x = ["m8oaWPbNWRJcKCktWPdcUsW", "lbFcN8kMW6KQra", "a8oJBG", "WOTvoIqlW5DvW4rQWRBdG8oTWR8", "W4FcUNm", "WPNcOSoEWPxcP8knvX1HkZa3WPK", "W7ldMfPJW4LIWOJdGKaF", "e8kDfSodFszvcSoLWOL8Cmkr", "C1zakW/cI8oaW70hW4hcOsq", "W5tcISoUWRv0", "t0q1c2W", "W5JcKmo+WOLX", "WOBdQsKuih8KzmkXWQ8", "nCoTWPFdTCkSW7JdVq1lW7pdSSoOWPFdSq", "ic/dUxJcVa", "fmkVW4ddTSknCKulWQxdK8kSW6pcPq", "hSkLzheNvKNcMqbhage", "dCoGdHmkW6hcNq", "aCoapZGTW7RcJG", "WQKdd8omWRJdMqb5oNrSDmkb", "W7zPDCo1DW", "W7ZdQCo8p0/dG8kHW6jIxq", "ASkfj8kgwW", "vCkZlCkij8o1feq", "W6DyWQpdUwq", "W7HFWRpcIgO", "W5DnxSo2WPe", "CmkseSkewW", "idBdPXhdQ8k6WRJcS8okESo3WOnt", "jg1Wk0NdK8kOW6zyr8k6W6qQW7S", "DCo2lKi5hZy", "WQBcUmkXA28", "dbCOi2xcNIpdRW", "WQqSlSk3pCkHW4PgWPxcKs/cHSkr", "WQ0dW6JdNtBdKSkJwSkRW6dcQLeT"];
  return Kx = function() {
    return x;
  }, Kx();
}
function Ku({ children: x, licensePath: o, bramble: t, wasmDirectoryPath: e }) {
  const n = {};
  n[h(909, 917, 914, 917, "zWig") + "le"] = t;
  function r(p, A, u, v, H) {
    return Oe(A - -73, u);
  }
  function i(p, A, u, v, H) {
    return Oe(A - 400, p);
  }
  n[h(901, 918, 925, 923, "^id]") + c(-557, -564, "*ey[") + "h"] = o, n[l("pTZw", 32, 45) + c(-527, -510, "*ey[") + l("lY9U", 39, 46) + "th"] = e;
  const { sunfish: a, crosshatch: s } = Hu(n);
  function c(p, A, u, v, H) {
    return Oe(p - -989, u);
  }
  const d = {};
  d[r(370, 387, "6U$%") + c(-553, -545, "rPB(")] = s;
  const g = ot(() => ({ redfin: Ou(d), sunfish: a, crosshatch: s, bramble: t }), [a, s, t]), C = {};
  C[r(382, 381, "Hpt2")] = g;
  function l(p, A, u, v, H) {
    return Oe(u - -405, p);
  }
  function h(p, A, u, v, H) {
    return Oe(A - 488, H);
  }
  return C[i("lY9U", 849) + l("PasD", 36, 39)] = x, K(Gx[l("9bB2", 9, 26) + c(-547, -563, "z1m9")], C);
}
(function(x, o) {
  var t = x();
  function e(c, d, g, C, l) {
    return tt(C - 725, l);
  }
  function n(c, d, g, C, l) {
    return tt(g - -186, c);
  }
  function r(c, d, g, C, l) {
    return tt(l - -361, C);
  }
  function i(c, d, g, C, l) {
    return tt(g - -607, c);
  }
  function a(c, d, g, C, l) {
    return tt(c - -228, C);
  }
  for (; ; )
    try {
      var s = parseInt(r(5, 7, -3, "M5$W", -2)) / 1 * (-parseInt(r(16, -1, 6, "bFQc", 7)) / 2) + parseInt(r(16, 15, 9, "rA#A", 8)) / 3 * (-parseInt(e(1086, 1096, 1085, 1087, "yg[2")) / 4) + -parseInt(n("g)6&", 181, 184, 182, 186)) / 5 + -parseInt(i("g)6&", -249, -246, -238, -243)) / 6 + parseInt(a(129, 131, 130, "Y!&b", 128)) / 7 + -parseInt(i("W8Eb", -256, -251, -249, -248)) / 8 + parseInt(r(-2, 4, 4, "Sg&A", 6)) / 9;
      if (s === o) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Zx, 610248);
function tt(x, o) {
  var t = Zx();
  return tt = function(e, n) {
    e = e - (8135 * 1 + 1 * -6242 + -2 * 769);
    var r = t[e];
    if (tt.YWFPtb === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (var H = 0, F = l.length; H < F; H++)
          h += "%" + ("00" + l.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (var v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      tt.LiAgau = a, x = arguments, tt.YWFPtb = !0;
    }
    var s = t[261 + -59 * 59 + 3220], c = e + s, d = x[c];
    return d ? r = d : (tt.QVTgyX === void 0 && (tt.QVTgyX = !0), r = tt.LiAgau(r, n), x[c] = r), r;
  }, tt(x, o);
}
function Zx() {
  var x = ["WPDexx8xcmkmWO3dMmkQWQW+WQm", "WPZdS8ktW4e1W4RcICkohmoVvg0", "jSkcbIBdPHpdVKNdKNS+mmkMW44", "WOlcRmoTF8ktprRcIq", "WQHWq8ogWR0yzSksW6T+rWS", "W4LkDJaAWOddLCkZxwtcUchdRW", "WR3dUCkHjdOjWQnDW7bcjupcQG", "g0zeWOBcLcJdVHG0WPtcUGe/", "m39oex/cKf/cKW", "tcVcO8k9jI9BW4NcR0dcUGNdTq", "WPbhvx4qaCkjWQFdHSkkWPOSWQi", "W5JcKmouWRPDWRtcQSoxW4VcMK4UWOe", "aCkaaCkBm0ddTSoqCvJcNNa", "DHNcQJBcHauNWR0", "W4LpCdOsWOJdMmk0tu7cOX/dUa", "h3KzW4SDW6uzWRK", "W6vLaSobAa7cKZxdLmkizmoZf2i", "g8onk8kjuCodo8oamJJcJmkB"];
  return Zx = function() {
    return x;
  }, Zx();
}
function Zu({ analytics: x, crosshatch: o }) {
  return o !== void (-2393 * -1 + -4752 + -7 * -337) && !o.isAnalyticsDisabled ? x : void (-11946 + -11946 * -1);
}
function Ru({ analytics: x, appKey: o, redfin: t, crosshatch: e, bramble: n }) {
  const r = {};
  r.analytics = x, r.crosshatch = e;
  const i = Zu(r);
  return Be(() => {
    i && i.init(o);
  }, [i, o]), Be(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, n.getCustomerName()));
  }, [i, n, e, t]), Be(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function Pu({
  analytics: x,
  appKey: o,
  children: t
}) {
  const { redfin: e, crosshatch: n, bramble: r } = Mr(), i = Ru({ analytics: x, redfin: e, appKey: o, crosshatch: n, bramble: r }), a = ot(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ K(Sx.Provider, { value: a, children: t });
}
const Vu = -593 * -1 + -497 * -18 + 1 * -9539 + 0.4, Tu = 0 + 0.16, Eu = -7074 + -258 * -12 + 3 * 1326 + 0.2, Lu = 177 * 3 + -488 * -13 + -275 * 25 + 0.05, Nu = 0, gr = {};
gr.min = -(-3411 + -1 * -9257 + 167 * -35), gr.max = 1;
const ha = gr, pa = 509 * 7 + 7372 + -3645 * 3, Du = -2123 + 1 * -4811 + -6934 * -1 + 0.3, Fu = -164 * -26 + 8620 * 1 + -12884 + 0.2, Yu = 2664 + -296 * 9 + 0.85, Xu = -5799 + -1 * -2789 + 152 * 20, Mu = 7401 + -24 * 308 + 0.8100000000000005, hx = {};
hx.minDuration = 1e3, hx.maxDuration = 2500, hx.minFrames = 10;
const Oo = hx, dr = {};
dr.max = 100, dr.min = 10;
const ma = dr, ju = 720, Ju = 217 * -5 + -2623 + 3908, _u = 3 * -3125 + -3436 + 5 * 2563, qs = "AES-CBC", $s = "RSA-OAEP", Qu = "SHA-256", Uu = "image/jpeg", zu = 8, qu = 459 * 1 + 1 * 3097 + -3516, $u = "SAM v1.39.3 for idcards", el = "dot_embedded_bg.wasm", ec = Zn(null), tc = () => {
  const x = I0(ec);
  if (!x)
    throw new Error("Missing provider for CameraOptionsContext");
  return x;
}, tl = (x) => {
  var s, c, d;
  const { cameraFacing: o, licensePath: t, onError: e, onPhotoTaken: n, sessionToken: r, thresholds: i, wasmDirectoryPath: a } = x;
  return {
    onPhotoTaken: n,
    onError: e,
    cameraFacing: o ?? "user",
    wasmDirectoryPath: a,
    licensePath: t,
    sessionToken: r,
    thresholds: {
      faceConfidence: (i == null ? void 0 : i.faceConfidence) ?? Vu,
      minFaceSizeRatio: (i == null ? void 0 : i.minFaceSizeRatio) ?? Tu,
      maxFaceSizeRatio: (i == null ? void 0 : i.maxFaceSizeRatio) ?? Eu,
      sharpnessThreshold: (i == null ? void 0 : i.sharpnessThreshold) ?? Du,
      brightnessLowThreshold: (i == null ? void 0 : i.brightnessLowThreshold) ?? Fu,
      brightnessHighThreshold: (i == null ? void 0 : i.brightnessHighThreshold) ?? Yu,
      outOfBoundsThreshold: (i == null ? void 0 : i.outOfBoundsThreshold) ?? Lu,
      devicePitchAngleThreshold: (i == null ? void 0 : i.devicePitchAngleThreshold) ?? Xu,
      mouth: {
        confidence: ((s = i == null ? void 0 : i.mouth) == null ? void 0 : s.confidence) ?? Nu,
        status: {
          min: ((c = i == null ? void 0 : i.mouth) == null ? void 0 : c.status.min) ?? ha.min,
          max: ((d = i == null ? void 0 : i.mouth) == null ? void 0 : d.status.max) ?? ha.max
        }
      },
      leftEye: (i == null ? void 0 : i.leftEye) ?? {
        confidence: pa
      },
      rightEye: (i == null ? void 0 : i.rightEye) ?? {
        confidence: pa
      }
    }
  };
}, nl = ({ cameraOptions: x, children: o }) => {
  const t = ot(() => ({
    faceCameraOptions: tl(x)
  }), [x]);
  return /* @__PURE__ */ K(ec.Provider, { value: t, children: o });
}, xl = -7961 + 123 * 48 + -2057 * -1 + 0.75, ol = 2111 + -34 * 21 + -1395, rl = -7873 * -1 + 2123 * 1 + -1044 * 9, il = 4408 * 1 + -6261 + -1853 * -1, al = (x, o) => {
  const t = {};
  t.detail = o, document.dispatchEvent(new CustomEvent(x, t));
}, Qx = class Qx {
  constructor() {
    j(this, "lastDetails", {});
    j(this, "delayedTime", -1 * 8108 + 2 * 3431 + -89 * -14);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Qx()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = -1 * 9335 + -9154 + 1 * 18489;
  }
  isDetailChanged(o, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[o]) ? (this.lastDetails[o] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(o, t) {
    this.isDetailChanged(o, t) && al(o, t);
  }
  dispatchDelayedCustomEventOnChange(o, t, e) {
    const n = performance.now();
    n - this.delayedTime > e && (this.dispatchCustomEventOnChange(o, t), this.delayedTime = n);
  }
};
j(Qx, "_instance");
let Cn = Qx;
const Q0 = Cn.getInstance(), ba = (x, o, t = rl) => {
  const e = {};
  e.instructionCode = o;
  const n = e;
  Q0.dispatchDelayedCustomEventOnChange(x, n, t);
}, Aa = (x, o) => {
  Q0.dispatchCustomEventOnChange(x, o);
}, sl = (x, o) => {
  Q0.dispatchCustomEventOnChange(x, o);
}, cl = (x, o) => {
  const t = {};
  t.size = o;
  const e = t;
  Q0.dispatchCustomEventOnChange(x, e);
}, gl = (x, o, t) => {
  const e = o.confidence < t ? void 0 : o, n = {};
  n.detectedObject = e;
  const r = n;
  Q0.dispatchCustomEventOnChange(x, r);
}, dl = (x, o, t) => {
  const e = {};
  e.image = t, e.data = {}, e.data.detection = o, e.data.imageResolution = {}, e.data.imageResolution.width = t.width, e.data.imageResolution.height = t.height;
  const n = e;
  Q0.dispatchCustomEventOnChange(x, n);
}, ul = () => "prod".toLowerCase() === "dev", ll = (x, o, t = Uu) => new Promise((e) => {
  x.toBlob((n) => {
    if (!n) throw new Error("Canvas to Blob failed");
    e(n);
  }, t, o);
}), Il = async (x) => ll(x, 1 * 4008 + 2 * 2998 + -9914 * 1), fl = (x, o) => {
  const t = document.createElement("canvas");
  t.width = o.width, t.height = o.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(x, o.shiftX, o.shiftY, o.width, o.height, 376 * -16 + 8822 + -2806, 0, t.width, t.height), t;
}, Cl = (x) => {
  const o = x.getContext("2d");
  if (!o) throw new Error("getImageDataForSam ctx error");
  const { data: t } = o.getImageData(9022 + 29 * 19 + -3191 * 3, -775 + 775 * 1, x.width, x.height);
  return t;
}, nc = (x, o, t, e) => {
  const n = x.getContext("2d");
  n && (n.beginPath(), e ? (n.fillStyle = t, n.fillRect(o.topLeft.x, o.topLeft.y, o.width, o.height)) : (n.strokeStyle = t, n.rect(o.topLeft.x, o.topLeft.y, o.width, o.height)), n.stroke());
}, Ko = (x, o, t) => {
  const { height: e, shiftX: n, shiftY: r, width: i } = o, a = {};
  a.x = n, a.y = r;
  const s = {};
  s.topLeft = a, s.width = i, s.height = e, s.color = t, nc(x, s, t);
}, un = (x, o, t, e = -6921 + -2 * 4323 + 1 * 15567) => {
  const n = x.getContext("2d");
  n && (n.fillStyle = t, n.fillRect(o.x + e, o.y + e, 6465 * -1 + -8604 + 15076 * 1, 213 * -38 + -3118 + -11219 * -1), n.beginPath());
}, hl = (x, o) => {
  const t = x.getContext("2d");
  t && t.drawImage(o, -1985 * 1 + 62 * 19 + 807, -1 * 7804 + -1 * 6295 + 14099);
}, pl = (x, o) => {
  if (ul()) {
    const t = {};
    t.candidateSelectionImages = o;
    const e = t;
    Cn.getInstance().dispatchCustomEventOnChange(x, e);
  }
}, ml = (x, o) => {
  const { cameraResolution: t, shouldMirror: e } = o;
  Be(() => {
    if (!t) return;
    const n = {};
    n.cameraResolution = t, n.isMirroring = e, sl(x, n);
  }, [t, e, x]);
}, xc = (x) => x.length < 5416 + 8501 * -1 + 3086 ? 63 * 41 + 2472 + -5055 : x.reduce((t, e) => t + e, 0) / x.length, Vn = (x) => Number.parseFloat(x.toFixed(-4342 + 9 * -198 + 6127)), bl = (x) => {
  const o = x.getContext("2d");
  o && o.clearRect(369 + 4 * 863 + -3821, 4734 + 167 * -34 + 944, o.canvas.width, o.canvas.height);
}, ao = (x, o) => Math.min(x, o), Al = (x, o) => {
  const t = ao(o.width, o.height);
  return Vn(x * t);
}, oc = ({ height: x, width: o }) => {
  const t = ao(o, x), e = t / (522 * 7 + -5087 * 1 + -4 * -359) * (605 * 7 + -5 * -1030 + -3127 * 3);
  if (o > x) {
    const r = {};
    return r.width = e, r.height = t, r;
  }
  const n = {};
  return n.width = t, n.height = e, n;
}, rc = ({ height: x, width: o }) => {
  const t = ao(o, x) * xl, e = (o - t) / (-6630 + 829 * 8), n = (x - t) / (-19 * 299 + 1886 + -3797 * -1), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = t, r;
}, yl = (x) => {
  const { height: o, shiftX: t, shiftY: e, width: n } = rc(x), r = {};
  return r.shiftX = t / x.width, r.shiftY = e / x.height, r.width = n / x.width, r.height = o / x.height, r;
}, Wl = (x, o) => Al(x, o) * ol, vl = "@innovatrics/dot-common-auto-capture", wl = "6.1.5", Sl = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Bl = {
  "@dot/proto-files": "2.0.4",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Gl = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.1"
}, kl = {
  name: vl,
  private: !0,
  version: wl,
  scripts: Sl,
  dependencies: Bl,
  devDependencies: Gl
}, ic = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), ya = () => {
  const x = /Android/i.test(navigator.userAgent), o = /Firefox/i.test(navigator.userAgent);
  return x && o;
}, Hl = () => {
  const x = navigator.userAgent.includes("Chrome"), o = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return x && o ? !1 : o;
}, ur = (x) => new Promise((o) => {
  setTimeout(o, x);
}), G0 = (x) => JSON.parse(JSON.stringify(x, (o, t) => typeof t == "number" ? Vn(t) : t)), ac = () => kl.version, sc = (x) => new URL(x).hostname.replace("www.", ""), Ol = () => sc(window.location.href) === "localhost", ex = (x) => Object.entries(x).map(([o, t]) => encodeURIComponent(o) + "=" + encodeURIComponent(t)).join("&"), Kl = (x, o) => {
  const t = x && performance.now() - x;
  return o >= Oo.minFrames ? t > Oo.minDuration : t > Oo.maxDuration;
}, Zl = (x, o) => JSON.stringify(x) === JSON.stringify(o) ? o : x;
function Rl(x, o) {
  let t;
  return (...e) => {
    const n = () => {
      clearTimeout(t), t = void 0, x(...e);
    };
    t === void (6348 + 79 * -71 + 1 * -739) && (t = setTimeout(n, o));
  };
}
const Pl = (x) => x === Js.CONTROL ? !ic() : !0, Vl = (x, o) => {
  const { appState: t, handleAppStateChange: e, handleError: n, isCameraReady: r } = Pn(), [i, a] = xt(), s = ot(() => {
    const d = r && o && o.isStreaming && o.getCameraSettings().facingMode;
    return d ? i ?? d === "user" : i ?? Pl(x);
  }, [o, i, x, r]);
  Be(() => {
    const d = () => {
      t !== nt.LOADING && e(nt.RUNNING);
    }, g = () => {
      a(i === void 0 ? !s : !i);
    }, C = async () => {
      if (o) {
        e(nt.LOADING);
        try {
          await o.switchCamera(), e(nt.RUNNING);
        } catch (h) {
          if (h instanceof Error) {
            n(re.fromCameraError(h));
            return;
          }
        }
        a(void 0);
      }
    }, l = (h) => {
      var p;
      switch ((p = h.detail) == null ? void 0 : p["instruction"]) {
        case Ix.CONTINUE_DETECTION:
          d();
          break;
        case Ix.TOGGLE_MIRROR:
          g();
          break;
        case Ix.SWITCH_CAMERA:
          C();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(x, l), () => {
      document.removeEventListener(x, l);
    };
  }, [t, o, n, i, e, s, x]);
  const c = {};
  return c.shouldMirror = s, c;
};
class Tl {
  constructor() {
    j(this, "canvasElement");
    j(this, "context");
    this.canvasElement = document.createElement("canvas"), this.context = this.canvasElement.getContext("2d");
  }
  cloneMutable(o) {
    this.canvasElement.width = o.width, this.canvasElement.height = o.height, hl(this.canvasElement, o);
  }
}
async function cc() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Zo() {
  return (await cc()).filter((o) => o.kind === "videoinput");
}
function Ro(x) {
  x.getTracks().forEach((t) => t.stop());
}
function Wa(x) {
  return x.getVideoTracks()[6002 * 1 + -9816 + 3814];
}
const px = {};
px.width = 1920, px.height = 1080, px.facingMode = Qs.FRONT;
const El = px;
var pt;
class gc {
  constructor({ defaultVideoConstrains: o = El, minCameraShorterSide: t = ju } = {}) {
    j(this, "options");
    j(this, "availableCameraProperties", []);
    de(this, pt, null);
    const e = {};
    e.defaultVideoConstrains = o, e.minCameraShorterSide = t, this.options = e;
  }
  get mediaStream() {
    return X(this, pt);
  }
  get videoTrack() {
    return X(this, pt) ? Wa(X(this, pt)) : void (-3655 * 1 + 7 * 476 + 19 * 17);
  }
  get isCameraActive() {
    var o;
    return !!((o = X(this, pt)) != null && o.active);
  }
  static async requestPermission() {
    const o = {};
    o.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(o);
    Ro(t);
  }
  async open(o = {}) {
    ya() && await ur(450), ae(this, pt, await navigator.mediaDevices.getUserMedia(o)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const o = await Zo();
    if (o.length <= 6 * 622 + -9147 * -1 + -12878) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), n = o.findIndex((a) => a.deviceId === e.deviceId), r = o[n + (2970 + 42 * 209 + -11747)] ?? o[-2 * -3923 + -361 + -7485], i = this.getConstraints(t, r);
    await this.open(i);
  }
  close() {
    X(this, pt) && (Ro(X(this, pt)), ae(this, pt, null));
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
    const o = this.getSettings(), t = await cc(), e = t.find((n) => n.deviceId === o.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(o) {
    return o === Qs.FRONT ? void (1 * -2899 + -10 * 425 + 2383 * 3) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (ic())
      return (await Zo()).find((e) => e.label.includes("back") && e.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const o = await Zo();
    for (const t of o) {
      ya() && await ur(450);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const n = {};
        n.video = e;
        const r = await navigator.mediaDevices.getUserMedia(n), i = Wa(r);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = i.getSettings(), s = { ...a };
        s.deviceName = i.label;
        const c = {};
        c.cameraProperties = s;
        const d = c;
        this.availableCameraProperties.push(d), Ro(r);
      } catch (e) {
        e instanceof Error && re.logError(e);
      }
    }
  }
  getConstraints(o, t) {
    const e = { ...this.options.defaultVideoConstrains, ...o };
    e.deviceId = t ? { exact: t.deviceId } : void (4637 * -2 + -1802 + -3692 * -3);
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
pt = new WeakMap();
class Ll {
  constructor(o, t) {
    j(this, "canvas");
    this.videoHandler = o, this.cameraHandler = t, this.canvas = new Tl();
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(o = {}) {
    await gc.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(o.facingMode), e = this.cameraHandler.getConstraints(o, t);
    await this.cameraHandler.open(e), Hl() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var t;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const o = (t = this.cameraHandler.videoTrack) == null ? void 0 : t.getSettings();
    if (!(o != null && o.width)) throw new re("Cant take photo - video width is undefined");
    if (!(o != null && o.height)) throw new re("Cant take photo - video height is undefined");
    if (!this.canvas.context) throw new re("Cant take photo - cant create context");
    return this.canvas.canvasElement.width = o.width, this.canvas.canvasElement.height = o.height, this.canvas.context.drawImage(this.videoHandler.videoElement, -5642 + 569 * -7 + -1 * -9625, -7151 + -2335 * -1 + 4816), { image: this.canvas.canvasElement, timestamp: Date.now() };
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
var Zt;
class Nl {
  constructor(o) {
    de(this, Zt);
    ae(this, Zt, o);
  }
  get videoElement() {
    return X(this, Zt);
  }
  async play(o) {
    X(this, Zt).srcObject = o, await X(this, Zt).play();
  }
  stop() {
    X(this, Zt).srcObject = null;
  }
  hasSrcObject() {
    return !!X(this, Zt).srcObject;
  }
}
Zt = new WeakMap();
function Dl(x, o) {
  const t = Et(), { handleError: e, setIsCameraReady: n } = Pn(), [r, i] = xt(), a = E0((c) => {
    i((d) => Zl(c, d));
  }, []);
  Be(() => ((async () => {
    if (!x.current) {
      e(new re("Something went wrong during video initialization"));
      return;
    }
    const d = new Nl(x.current), g = new gc(), C = new Ll(d, g);
    try {
      const l = {};
      l.facingMode = o, await C.startVideoStream(l);
    } catch (l) {
      if (l instanceof Error) {
        e(re.fromCameraError(l));
        return;
      }
    }
    n(!0), a(C.getCameraResolution()), t.current = C;
  })(), function() {
    t.current && t.current.stopStreaming(), n(!1);
  }), [o, e, n, x, a]);
  const s = {};
  return s.cameraService = t.current, s.cameraResolution = r, s.onCameraResolutionChange = a, s;
}
function Fl(x, o) {
  Be(() => {
    function t() {
      x.current && cl(o, x.current.getBoundingClientRect());
    }
    return t(), window.addEventListener("resize", t), () => {
      window.removeEventListener("resize", t);
    };
  }, [x, o]);
}
class jr extends Array {
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
    this.length === this.size && this.splice(163 * -35 + -27 * -165 + 1250, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(0);
  }
}
const Yl = (x, o) => {
  const { height: t, shiftX: e, shiftY: n, width: r } = o;
  return !(x.x < e || x.x > e + r || x.y < n || x.y > n + t);
}, Xl = (x, o) => Object.values(x).every((t) => Yl(t, o));
function Ml(x) {
  return Vn(Math.abs(x));
}
const jl = () => {
  const [x, o] = xt(null), t = Et(new jr(8467 + -25 * -215 + -137 * 101));
  function e(r) {
    const { z: i } = r.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(Ml(i));
    const a = Vn(xc(t.current)), s = {};
    s.z = a, o(s);
  }
  Be(() => (window.addEventListener("devicemotion", Rl(e, qu), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const n = {};
  return n.acceleration = x, n;
};
var Jl = Symbol.for("preact-signals");
function Jr() {
  if (K0 > 1 * -6431 + 6897 + -465)
    K0--;
  else {
    for (var x, o = !1; void (-9994 + 1 * -709 + 10703) !== ln; ) {
      var t = ln;
      for (ln = void (1 * -1005 + 32 * -106 + 4397 * 1), lr++; void (1684 + 4622 * -1 + 2938) !== t; ) {
        var e = t.o;
        if (t.o = void (1535 * 2 + 856 + -3926 * 1), t.f &= -(-1379 + 1382 * 1), !(5 * 1599 + 9843 + -17830 & t.f) && lc(t)) try {
          t.c();
        } catch (n) {
          !o && (x = n, o = !(1 * 1063 + 277 * 17 + -5772));
        }
        t = e;
      }
    }
    if (lr = 751 * 6 + -58 * 145 + 976 * 4, K0--, o) throw x;
  }
}
var te = void (9211 * -1 + -1 * -4821 + 10 * 439), ln = void (-1325 * -5 + -9286 + 2661), K0 = -5766 + 1 * 1743 + 447 * 9, lr = -5 * 326 + -6124 + 2 * 3877, Rx = 227 * 43 + 8626 + 2043 * -9;
function dc(x) {
  if (void (-3486 + -166 * -21) !== te) {
    var o = x.n;
    if (void (-241 * 26 + -8810 + 15076) === o || o.t !== te)
      return o = { i: 0, S: x, p: te.s, n: void (-1 * 865 + -1550 * -1 + 1 * -685), t: te, e: void (-9727 * 1 + 209 * -26 + 15161), x: void (-529 * 6 + 7298 + 2062 * -2), r: o }, void (-905 * 9 + -635 * 5 + 11320) !== te.s && (te.s.n = o), te.s = o, x.n = o, 2 * -1933 + 1 * -3898 + -2 * -3898 & te.f && x.S(o), o;
    if (-(263 + 7187 * 1 + -7449) === o.i)
      return o.i = 4221 + -603 * 7, void (4518 + 6 * -37 + -8 * 537) !== o.n && (o.n.p = o.p, void (1914 + 29 * -66) !== o.p && (o.p.n = o.n), o.p = te.s, o.n = void (-16 * 565 + 1 * 6898 + 2142), te.s.n = o, te.s = o), o;
  }
}
function ke(x) {
  this.v = x, this.i = -1 * 8936 + 7217 + 1719, this.n = void 0, this.t = void 0;
}
ke.prototype.brand = Jl, ke.prototype.h = function() {
  return !(4 * -412 + 8447 * 1 + 1 * -6799);
}, ke.prototype.S = function(x) {
  this.t !== x && x.e === void 0 && (x.x = this.t, void (10845 + -1205 * 9) !== this.t && (this.t.e = x), this.t = x);
}, ke.prototype.U = function(x) {
  if (void (10376 + 2 * -5188) !== this.t) {
    var o = x.e, t = x.x;
    void (4927 + 57 * 157 + 3469 * -4) !== o && (o.x = t, x.e = void (1 * 9427 + 2946 + -12373)), void (19 * -410 + -153 * -42 + 1364) !== t && (t.e = o, x.x = void (1600 + 29 * -331 + -19 * -421)), x === this.t && (this.t = t);
  }
}, ke.prototype.subscribe = function(x) {
  var o = this;
  return Qr(function() {
    var t = o.value, e = te;
    te = void (1191 * 7 + 3820 * -1 + -1 * 4517);
    try {
      x(t);
    } finally {
      te = e;
    }
  });
}, ke.prototype.valueOf = function() {
  return this.value;
}, ke.prototype.toString = function() {
  return this.value + "";
}, ke.prototype.toJSON = function() {
  return this.value;
}, ke.prototype.peek = function() {
  var x = te;
  te = void (5021 * -1 + 7 * -334 + 7359);
  try {
    return this.value;
  } finally {
    te = x;
  }
}, Object.defineProperty(ke.prototype, "value", { get: function() {
  var x = dc(this);
  return void (4554 + 66 * -69) !== x && (x.i = this.i), this.v;
}, set: function(x) {
  if (x !== this.v) {
    if (lr > 12 * 547 + 505 * 19 + -16059) throw new Error("Cycle detected");
    this.v = x, this.i++, Rx++, K0++;
    try {
      for (var o = this.t; void (-339 * 3 + 4 * -2011 + -533 * -17) !== o; o = o.x) o.t.N();
    } finally {
      Jr();
    }
  }
} });
function uc(x) {
  return new ke(x);
}
function lc(x) {
  for (var o = x.s; void (7646 * 1 + 5 * 497 + -10131) !== o; o = o.n) if (o.S.i !== o.i || !o.S.h() || o.S.i !== o.i) return !0;
  return !(1858 + 1 * 6833 + -8690);
}
function Ic(x) {
  for (var o = x.s; void (73 * -97 + -5099 * 1 + -203 * -60) !== o; o = o.n) {
    var t = o.S.n;
    if (void (5432 + 9029 * 1 + 1 * -14461) !== t && (o.r = t), o.S.n = o, o.i = -(844 + 3 * -281), void (1 * 7691 + 109 * -41 + 358 * -9) === o.n) {
      x.s = o;
      break;
    }
  }
}
function fc(x) {
  for (var o = x.s, t = void (-3787 * -1 + 1196 + -4983); void (4988 + 1 * 4545 + 9533 * -1) !== o; ) {
    var e = o.p;
    -(-4 * 522 + -677 * 1 + 2766) === o.i ? (o.S.U(o), void (2 * 53 + -66 * -138 + -9214) !== e && (e.n = o.n), void (-279 * -19 + 32 * 8 + -5557 * 1) !== o.n && (o.n.p = e)) : t = o, o.S.n = o.r, void (-1 * 4821 + -9484 + 1 * 14305) !== o.r && (o.r = void (4287 + -1429 * 3)), o = e;
  }
  x.s = t;
}
function k0(x) {
  ke.call(this, void (-766 + -671 * 7 + -3 * -1821)), this.x = x, this.s = void (9721 * -1 + 223 * 22 + 4815), this.g = Rx - (6526 + 613 * -11 + 218), this.f = -1 * -4939 + 1 * 8721 + 24 * -569;
}
(k0.prototype = new ke()).h = function() {
  if (this.f &= -(-8587 + 3 * -1794 + -3493 * -4), 3 * 1697 + 26 * -173 + -37 * 16 & this.f) return !(2966 + 197 * 22 + 1 * -7299);
  if (2359 + -13 * 179 == (1383 * 7 + -194 * 4 + -8869 & this.f)) return !(7366 * 1 + 2 * -3691 + 16);
  if (this.f &= -(17 * -33 + -8741 + 1 * 9307), this.g === Rx) return !(-457 + -107 * -23 + -2004);
  if (this.g = Rx, this.f |= 8884 + 15 * 151 + 2787 * -4, this.i > -5975 * -1 + -1079 * -2 + -8133 && !lc(this)) return this.f &= -(-9889 * 1 + 7253 + 2638), !(3203 + 1 * 712 + -3915);
  var x = te;
  try {
    Ic(this), te = this;
    var o = this.x();
    (3837 * 2 + 9309 * 1 + 361 * -47 & this.f || this.v !== o || 9 * 975 + 2822 + -11597 === this.i) && (this.v = o, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return te = x, fc(this), this.f &= -(673 + -671 * 1), !(144 + -317 * 22 + 6830);
}, k0.prototype.S = function(x) {
  if (void (61 * 90 + 2743 + -8233) === this.t) {
    this.f |= -1 * -3967 + 9616 + 589 * -23;
    for (var o = this.s; void (-5626 + 7 * 623 + 1265) !== o; o = o.n) o.S.S(o);
  }
  ke.prototype.S.call(this, x);
}, k0.prototype.U = function(x) {
  if (void (8 + 221 * -25 + -1 * -5517) !== this.t && (ke.prototype.U.call(this, x), void (1877 + 1877 * -1) === this.t)) {
    this.f &= -(1709 + -2116 * -3 + -8 * 1003);
    for (var o = this.s; void (1637 * -5 + 7902 + 283) !== o; o = o.n) o.S.U(o);
  }
}, k0.prototype.N = function() {
  if (!(2743 * -1 + -8028 + 171 * 63 & this.f)) {
    this.f |= -4542 * -1 + -1 * -3279 + -7815;
    for (var x = this.t; x !== void 0; x = x.x) x.t.N();
  }
}, Object.defineProperty(k0.prototype, "value", { get: function() {
  if (3253 * 3 + 2279 + -1 * 12037 & this.f) throw new Error("Cycle detected");
  var x = dc(this);
  if (this.h(), void (3525 + 1807 * -2 + 89) !== x && (x.i = this.i), 262 * -26 + 6398 + 430 & this.f) throw this.v;
  return this.v;
} });
function _l(x) {
  return new k0(x);
}
function Cc(x) {
  var o = x.u;
  if (x.u = void (983 * -1 + -4 * 643 + 3555), typeof o == "function") {
    K0++;
    var t = te;
    te = void (22 * -283 + -2678 + -1272 * -7);
    try {
      o();
    } catch (e) {
      throw x.f &= -(-5609 + -5115 * -1 + 496), x.f |= 1 * 5393 + 9660 + 3 * -5015, _r(x), e;
    } finally {
      te = t, Jr();
    }
  }
}
function _r(x) {
  for (var o = x.s; void (6217 * 1 + -5316 + 17 * -53) !== o; o = o.n) o.S.U(o);
  x.x = void 0, x.s = void 0, Cc(x);
}
function Ql(x) {
  if (te !== this) throw new Error("Out-of-order effect");
  fc(this), te = x, this.f &= -(-99 * 31 + 1 * -201 + -818 * -4), 5449 + 1 * -5441 & this.f && _r(this), Jr();
}
function rn(x) {
  this.x = x, this.u = void (-91 * 47 + 457 + 3820), this.s = void (3843 * 2 + -5355 + -7 * 333), this.o = void (5438 + -4 * -657 + -8066), this.f = 11 * -185 + 2253 + 1 * -186;
}
rn.prototype.c = function() {
  var x = this.S();
  try {
    if (-8743 + 3 * 2917 & this.f || void (2663 * -3 + 3677 + -22 * -196) === this.x) return;
    var o = this.x();
    typeof o == "function" && (this.u = o);
  } finally {
    x();
  }
}, rn.prototype.S = function() {
  if (5015 + 443 * 19 + -13431 & this.f) throw new Error("Cycle detected");
  this.f |= 4531 + -785 * -3 + -6885, this.f &= -(6976 * -1 + -9597 + 16582), Cc(this), Ic(this), K0++;
  var x = te;
  return te = this, Ql.bind(this, x);
}, rn.prototype.N = function() {
  !(-155 + -9 * -2 + 139 & this.f) && (this.f |= 2, this.o = ln, ln = this);
}, rn.prototype.d = function() {
  this.f |= 8, 10 * 419 + -9376 + -13 * -399 & this.f || _r(this);
};
function Qr(x) {
  var o = new rn(x);
  try {
    o.c();
  } catch (t) {
    throw o.d(), t;
  }
  return o.d.bind(o);
}
var Po;
function O0(x, o) {
  N[x] = o.bind(null, N[x] || function() {
  });
}
function tx(x) {
  Po && Po(), Po = x && x.S();
}
function hc(x) {
  var o = this, t = x.data, e = pc(t);
  e.value = t;
  var n = ot(function() {
    for (var r = o.__v; r = r.__; ) if (r.__c) {
      r.__c.__$f |= 4 * -1309 + 400 + 4840;
      break;
    }
    return o.__$u.c = function() {
      var i;
      !Ua(n.peek()) && 5 * 35 + -33 * -161 + -5485 === ((i = o.base) == null ? void (-901 * 6 + -8807 + 14213) : i.nodeType) ? o.base.data = n.peek() : (o.__$f |= -1227 + -5 * 1366 + 8058, o.setState({}));
    }, _l(function() {
      var i = e.value.value;
      return -1411 * 1 + -1 * -8989 + 842 * -9 === i ? -1 * 1439 + 2 * 2971 + 1 * -4503 : !(5 * -1709 + -8463 + -1 * -17008) === i ? "" : i || "";
    });
  }, []);
  return n.value;
}
hc.displayName = "_st";
var Ir = {};
Ir.configurable = !(-1652 + 9 * 421 + -2137 * 1), Ir.value = void (-1 * -6121 + 215 * -28 + -101 * 1);
var fr = {};
fr.configurable = !(-2503 * 1 + -136 * -52 + 3 * -1523), fr.value = hc;
var Cr = {};
Cr.configurable = !(7 * 1083 + -1 * -1189 + 4385 * -2), Cr.get = function() {
  var x = {};
  return x.data = this, x;
};
var hr = {};
hr.configurable = !0, hr.value = 1;
var tn = {};
tn.constructor = Ir, tn.type = fr, tn.props = Cr, tn.__b = hr, Object.defineProperties(ke.prototype, tn), O0("__b", function(x, o) {
  if (typeof o.type == "string") {
    var t, e = o.props;
    for (var n in e) if (n !== "children") {
      var r = e[n];
      r instanceof ke && (t || (o.__np = t = {}), t[n] = r, e[n] = r.peek());
    }
  }
  x(o);
}), O0("__r", function(x, o) {
  tx();
  var t, e = o.__c;
  e && (e.__$f &= -2, void (23 * 305 + 3698 + 3 * -3571) === (t = e.__$u) && (e.__$u = t = function(n) {
    var r;
    return Qr(function() {
      r = this;
    }), r.c = function() {
      e.__$f |= -7083 + -353 * -22 + -62 * 11, e.setState({});
    }, r;
  }())), tx(t), x(o);
}), O0("__e", function(x, o, t, e) {
  tx(), x(o, t, e);
}), O0("diffed", function(x, o) {
  tx();
  var t;
  if (typeof o.type == "string" && (t = o.__e)) {
    var e = o.__np, n = o.props;
    if (e) {
      var r = t.U;
      if (r) for (var i in r) {
        var a = r[i];
        void (-16 * -611 + 1 * 974 + -10750) !== a && !(i in e) && (a.d(), r[i] = void (-5435 + -1 * -5435));
      }
      else t.U = r = {};
      for (var s in e) {
        var c = r[s], d = e[s];
        void (-8551 + 4 * -162 + -1 * -9199) === c ? (c = Ul(t, s, d, n), r[s] = c) : c.o(d, n);
      }
    }
  }
  x(o);
});
function Ul(x, o, t, e) {
  var n = o in x && x.ownerSVGElement === void 0, r = uc(t);
  return { o: function(i, a) {
    r.value = i, e = a;
  }, d: Qr(function() {
    var i = r.value.value;
    e[o] !== i && (e[o] = i, n ? x[o] = i : i ? x.setAttribute(o, i) : x.removeAttribute(o));
  }) };
}
O0("unmount", function(x, o) {
  if (typeof o.type == "string") {
    var t = o.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (5 * 577 + -427 + 2458 * -1);
        for (var n in e) {
          var r = e[n];
          r && r.d();
        }
      }
    }
  } else {
    var i = o.__c;
    if (i) {
      var a = i.__$u;
      a && (i.__$u = void (-3 * 2273 + -2392 * -1 + 4427), a.d());
    }
  }
  x(o);
}), O0("__h", function(x, o, t, e) {
  (e < 5489 + 211 * -26 || 3788 + -1 * 8009 + 45 * 94 === e) && (o.__$f |= -8903 + -1 * -7153 + -73 * -24), x(o, t, e);
}), dt.prototype.shouldComponentUpdate = function(x, o) {
  var t = this.__$u;
  if (!(t && void (2690 + -269 * 10) !== t.s || -342 * 16 + 2 * 4832 + -4188 * 1 & this.__$f)) return !(-7801 + 7801 * 1);
  if (9722 + -9719 * 1 & this.__$f) return !(9652 * -1 + -8933 + 18585);
  for (var e in o) return !(-1 * -7369 + 3 * 1487 + -11830);
  for (var n in x) if (n !== "__source" && x[n] !== this.props[n]) return !(3 * -2399 + -524 * -19 + -1 * 2759);
  for (var r in this.props) if (!(r in x)) return !(-7995 * 1 + 106 * -89 + 17429);
  return !(-166 * -1 + -4704 + 89 * 51);
};
function pc(x) {
  return ot(function() {
    return uc(x);
  }, []);
}
function zl({ analytics: x, cameraFacing: o, controller: t, createProtoMessage: e, onPhotoTaken: n, sessionToken: r }) {
  const i = Et(null), { sunfish: a } = Mr(), { appState: s, handleAppStateChange: c, handleError: d } = Pn(), { cameraResolution: g, cameraService: C, onCameraResolutionChange: l } = Dl(i, o), h = pc(void (187 * -6 + -9784 + 287 * 38));
  Be(() => {
    C != null && C["isStreaming"] && (t != null && t["isDetectorInitialized"]) && a && c(nt.RUNNING);
  }, [C == null ? void 0 : C["isStreaming"], t == null ? void 0 : t["isDetectorInitialized"], c, a]), Be(() => {
    if (s !== nt.RUNNING) return;
    if (!C || !t) throw new re("Cannot start detection");
    let A = -6535 + -1 * -2551 + 3984, u = !1, v = -1354 + 8 * -55 + -2 * -897;
    const H = new jr(6741 + 1186 * 5 + -12641);
    t.clearImagesForDuplicateDetection();
    async function F({ cameraService: O, canvasImage: _, controller: Ie, detection: U, detectionRecord: fe, onPhotoTaken: Ce }) {
      const Re = {};
      Re.width = _.width, Re.height = _.height;
      const It = Re, ie = await Il(_), Pe = await O.getCameraProperties(), Xe = { ...Pe, detectionRecord: fe, hashedDetectedImagesWithTimestamp: Ie.getImagesForDuplicateDetection() }, it = {};
      it.sessionToken = r, it.web = Xe;
      const Me = it, me = await e(ie, Me), Te = {};
      Te.detection = U, Te.imageResolution = It;
      const je = {};
      je.image = ie, je.data = Te;
      const be = je, Ee = {};
      Ee.imageData = be, Ee.content = me, Ee.webMetadata = Xe, Ee.controller = Ie, Ce(Ee);
    }
    async function J({ cameraService: O, controller: _ }) {
      const Ie = Date.now();
      for (; O.isStreaming && !u; ) {
        if (Kl(A, v)) {
          const { detection: Me, image: me } = _.getBestImage() || {}, Te = _.getDetectionRecord();
          if (me && Me) {
            const je = Date.now(), be = xc(H), Ee = {};
            Ee.width = me.width, Ee.height = me.height, x == null || x.trackCaptureProcess({ detection: Me, imageResolution: Ee, deviceName: await O.getDeviceName(), averageFps: be, captureProcessDurationInMs: je - Ie, facingMode: O.getCameraSettings().facingMode, instructionSet: await _.getInstructionSet() }), c(nt.WAITING);
            const Je = {};
            Je.cameraService = O, Je.controller = _, Je.canvasImage = me, Je.detection = Me, Je.detectionRecord = Te, Je.onPhotoTaken = n, await F(Je), _.restart();
          } else d(new re("Something went wrong during capturing an image"));
          return;
        }
        const U = O.takePhoto(), fe = {};
        fe.width = U.image.width, fe.height = U.image.height;
        const Ce = fe;
        let Re;
        try {
          Re = await _.processImage(U);
        } catch (Me) {
          Me instanceof Error && d(re.fromCameraError(Me));
          return;
        }
        const It = Date.now(), ie = It - U.timestamp, Pe = Vn((-5342 + -3 * -2617 + -1509 * 1) / ie);
        H.pushFixed(Pe);
        const Xe = {};
        Xe.processedImage = Re, Xe.detectionTime = ie, Xe.fps = Pe, Xe.resolution = Ce, Xe.samVersion = _.samVersion;
        const it = Xe;
        h.value = it, Re.isInCandidateSelection && (A === 0 && (A = performance.now()), v++), l(Ce), await ur(Math.max(ma.max - ie, ma.min));
      }
    }
    const Y = {};
    return Y.controller = t, Y.cameraService = C, J(Y), () => {
      u = !0;
    };
  }, [x, e, s, C, t, c, d, n, l, h, r]);
  const p = {};
  return p.videoRef = i, p.cameraResolution = g, p.cameraService = C, p.detectionDetails = h, p;
}
const Ur = (x) => {
  const { height: o, width: t } = oc(x), e = (x.width - t) / (-941 + 19 * -477 + 10006), n = (x.height - o) / (-1 * 5197 + -5 * 1999 + 15194), r = {};
  return r.shiftX = e, r.shiftY = n, r.width = t, r.height = o, r;
}, mc = (x, o) => {
  const { height: t, width: e } = oc(x), n = ao(x.width, x.height), r = e - n * o * (1 * 7894 + -7 * -317 + -1 * 10111), i = t - n * o * (-6302 + -1576 * -4), a = (x.width - r) / (-197 + 1 * 199), s = (x.height - i) / (-18 * -47 + 4 * 2446 + -10628), c = {};
  return c.shiftX = a, c.shiftY = s, c.width = r, c.height = i, c;
}, w0 = (x, o) => {
  const { shiftX: t, shiftY: e } = Ur(x), n = {};
  return n.x = o.x + t, n.y = o.y + e, n;
}, ql = (x, o) => ({ ...o, leftEye: { ...o.leftEye, center: w0(x, o.leftEye.center) }, rightEye: { ...o.rightEye, center: w0(x, o.rightEye.center) }, mouth: { ...o.mouth, center: w0(x, o.mouth.center) }, topLeft: w0(x, o.topLeft), bottomRight: w0(x, o.bottomRight), faceCenter: w0(x, o.faceCenter) }), bc = (x, o) => {
  const { faceCenter: t, faceSize: e } = x, n = Wl(e, o), r = {};
  r.x = t.x, r.y = t.y - n;
  const i = {};
  i.x = t.x + n, i.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + n;
  const s = {};
  s.x = t.x - n, s.y = t.y;
  const c = {};
  return c.top = r, c.right = i, c.bottom = a, c.left = s, G0(c);
}, $l = (x, o) => {
  const { bottomRight: t, faceCenter: e, topLeft: n } = o, r = {
    topLeft: n,
    width: t.x - n.x,
    height: t.y - n.y
  };
  nc(x, r, "rgba(255, 0, 0, 0.3)", !0), un(x, e, "lime");
}, e1 = (x, o, t) => {
  const e = bc(o, t);
  Object.values(e).map((n) => un(x, n, "orange"));
}, t1 = ({ redfin: x, cameraResolution: o, detectionDetails: t, isImageMirror: e }) => {
  const {
    faceCameraOptions: { thresholds: n }
  } = tc(), r = Et(null);
  if (Be(() => {
    if (!r.current)
      return;
    r.current.width = o.width, r.current.height = o.height, bl(r.current);
    const h = Ur(o), p = mc(o, n.outOfBoundsThreshold), A = rc(o);
    t.value && ($l(r.current, t.value.processedImage.detectedFace), e1(
      r.current,
      t.value.processedImage.detectedFace,
      o
    ), Ko(r.current, h, "lime"), Ko(r.current, p, "yellow"), Ko(r.current, A, "blue"), un(r.current, t.value.processedImage.detectedFace.leftEye.center, "cyan"), un(r.current, t.value.processedImage.detectedFace.rightEye.center, "cyan"), un(r.current, t.value.processedImage.detectedFace.mouth.center, "cyan"));
  }, [o, n, t.value]), !t.value)
    return null;
  const {
    detectionTime: i,
    fps: a,
    processedImage: { detectedFace: s, instructionCode: c, invalidValidators: d },
    resolution: g,
    samVersion: C
  } = t.value, l = {
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
  return C && (l["SAM version"] = C), d.length > 0 && (l["Invalid validators"] = d.join(", ")), /* @__PURE__ */ K(
    Su,
    {
      ref: r,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: e
    }
  );
};
function n1(x) {
  return /* @__PURE__ */ K("rect", { fill: "#000", ...x, rx: "50%" });
}
function x1(x) {
  const [o, t] = xt(!1), e = () => t((i) => !i), n = "" + o;
  j0(() => {
    function i() {
      if (!x.current) return;
      const d = new MutationObserver(() => {
        e();
      }), g = {};
      return g.childList = !0, g.subtree = !0, g.attributes = !0, d.observe(x.current, g), d;
    }
    function a() {
      var C;
      if (!((C = x.current) != null && C["parentElement"])) return;
      const d = new MutationObserver((l) => {
        l.find((p) => {
          for (const A of p.removedNodes)
            if (A === x.current) return !0;
        }) && e(), l.forEach((p) => {
          p.addedNodes.forEach((A) => {
            var u;
            (u = A.parentElement) == null || u.removeChild(A);
          });
        });
      }), g = {};
      return g.childList = !0, d.observe(x.current.parentElement, g), d;
    }
    const s = i(), c = a();
    return () => {
      c == null || c.disconnect(), s == null || s.disconnect();
    };
  });
  const r = {};
  return r.key = n, r;
}
const o1 = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function r1({ cutOut: x, height: o, width: t }) {
  const e = Et(null), { key: n } = x1(e);
  return /* @__PURE__ */ K("div", { ref: e, style: o1, children: /* @__PURE__ */ K("svg", { viewBox: `0 0 ${t} ${o}`, children: [
    /* @__PURE__ */ K("defs", { children: [
      /* @__PURE__ */ K("mask", { id: "placeholder", children: [
        /* @__PURE__ */ K("rect", { fill: "#fff", height: "100%", width: "100%" }),
        x
      ] }),
      /* @__PURE__ */ K(
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
            /* @__PURE__ */ K("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ K("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ K(
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
    /* @__PURE__ */ K("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function i1({ fullOverlay: x, resolution: o }) {
  const t = yl(o), e = `${t.height * 100}%`, n = `${t.width * 100}%`, r = `${t.shiftX * 100}%`, i = `${t.shiftY * 100}%`;
  return /* @__PURE__ */ K(
    r1,
    {
      cutOut: x || /* @__PURE__ */ K(n1, { height: e, width: n, x: r, y: i }),
      height: o.height,
      width: o.width
    }
  );
}
const a1 = async () => WebAssembly.validate(new Uint8Array([-6957 + -39 * 152 + 12885, -58 + -1 * 6686 + 6841, -1 * -4895 + 1193 * 4 + -9552, 13372 + 13263 * -1, 7617 * -1 + -2543 * -2 + -844 * -3, 1199 + -758 * -11 + -9537, 122 * 17 + 1 * 1328 + -21 * 162, 25 * -387 + 578 + 9097, 9744 + -523 * 3 + -8174, -2 * -2146 + -29 * 202 + -1 * -1571, 1, 597 * -3 + 3020 + -1133, 24 * -257 + 13 * 437 + 487, 7761 + -5 * -821 + -35 * 339, 1623 + 229 * 41 + -10889 * 1, 8300 * -1 + 15 * -439 + -1861 * -8, 2, 4202 + 3711 * -2 + 3221 * 1, -373 * -26 + -5412 + -4286, 10, 4140 + -3 * 2089 + 1 * 2137, -6364 + -4507 * 2 + 13 * 1183, 8, 2 * 3019 + 4895 * 2 + -15828, 29 * 172 + 1 * -6368 + -1 * -1445, -3 * -3005 + -5588 + -3427, 2999 * 3 + -6484 + -2260, -1 * 8146 + 787 + 7374, 13313 + -3265 * 4, -139 * 47 + 2687 * -2 + 49 * 245, 11]));
(function(x, o) {
  function t(s, c, d, g, C) {
    return ce(d - -820, s);
  }
  const e = x();
  function n(s, c, d, g, C) {
    return ce(g - -316, d);
  }
  function r(s, c, d, g, C) {
    return ce(g - -73, C);
  }
  function i(s, c, d, g, C) {
    return ce(s - -173, d);
  }
  function a(s, c, d, g, C) {
    return ce(d - 421, s);
  }
  for (; ; )
    try {
      if (-parseInt(a("gVrf", 795, 790, 774, 779)) / 1 + parseInt(a("neJ%", 804, 783, 771, 762)) / 2 + parseInt(n(20, -7, "Ym!9", 13, 24)) / 3 * (-parseInt(i(168, 172, ")tsk", 162, 170)) / 4) + -parseInt(a("[#O[", 759, 751, 737, 757)) / 5 + parseInt(a("kPc@", 782, 784, 787, 791)) / 6 * (-parseInt(a("Eo9X", 782, 774, 776, 774)) / 7) + -parseInt(r(285, 250, 295, 272, "XsQ)")) / 8 + parseInt(n(35, 21, "Eo9X", 40, 38)) / 9 * (parseInt(t("h!9[", -473, -489, -511, -474)) / 10) === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Px, 430708 + 190 * -985);
async function s1() {
  const x = {};
  x[r("g2^e", -651, -612, -629)] = qs, x[s(-514, -530, "WC[C", -533) + "h"] = 256;
  function o(d, g, C, l, h) {
    return ce(h - 87, l);
  }
  const t = await window[r("divb", -617, -615, -620) + "o"][r("Sw6J", -621, -639, -618) + "e"][c(267, 262, 275, 270, "[#O[") + r("neJ%", -614, -617, -612) + "y"](x, !0, [s(-575, -567, "gVrf", -559) + "pt", e(-330, "[#O[", -319) + "pt"]);
  function e(d, g, C, l, h) {
    return ce(C - -659, g);
  }
  const n = Uint8Array[c(251, 254, 261, 268, "GVYJ")](Array(16)[s(-543, -558, "Sw6J", -537)](8887 * 1 + 744 * -2 + -7399));
  function r(d, g, C, l, h) {
    return ce(l - -972, d);
  }
  const i = window[s(-556, -543, "K3$k", -534) + "o"][e(-287, "v%wp", -300) + o(420, 425, 438, "H)1H", 437) + o(435, 447, 463, "H)1H", 442)](n), a = {};
  function s(d, g, C, l, h) {
    return ce(l - -898, C);
  }
  a[r("QAx7", -606, -632, -623)] = t;
  function c(d, g, C, l, h) {
    return ce(C - -76, h);
  }
  return a.iv = i, a;
}
function Px() {
  const x = ["bCokpZeJCmkvxq", "bIuDcSoLWP9MWQXvWQbiW7bY", "W71suqxcOSkhW5HGWRi", "WRWuaXdcLG", "AcVdPXOakg4", "emo0C8kvWOCVEmkKW5enW77cKhW", "WQ8thwG", "aCkToaZcLG", "mCornSoa", "WQxdOmkPWR7cOmkiw37cGSottt/dMW", "c8oAWRZdH0a", "u3bnqmkK", "W4vIWRlcM8o/WOJcRCo/eSktWQa", "W4bJWRhcNmo/W4tdLmoMbCkdWPeDya", "Ft/cPSkp", "W7pcVmo+W7RdQa", "rI4DrmopWPaSD8osWPHBWP/cIa", "u8kzyt0", "Fmo3mmoPcG", "WRffW5O", "WQddI8kw", "W7/dGW/cOSoq", "uhbav8kV", "WRGQawhcJq", "FmkZW47cJSoYFq4VFSkbm8ovWO4", "DmkOWP4Ola", "W7ddIXxcQSo1", "ESk6W4dcJmo5D3OGxmkOcmod", "W65GqcxdGmoKu8ocwvWYcq", "esOn", "WQztW5K+W5C", "zmkMvmo+W4e", "yCk0WPaW", "nmoLcCkbWPtcU8knuIHpWPbx", "l8oCeCoNlalcMW", "mmoVvYvI", "W6ycWRKlma", "tmkHm8oEW54", "WPhdQCkAW7vDW4ZdQCoItcdcHq", "FYBdRSoXWRG6WONdPmo3", "w8kcW6JcJqLJWObiW5FcTCo8", "WQ0GqtlcUCoaW6/cOKBdJvq", "nmorimoDW4y", "q2BcRmkfW67cN8o8mYlcGCk2tW", "DJ7dRmk5gatcKIK", "vgDxqSkP"];
  return Px = function() {
    return x;
  }, Px();
}
function ce(x, o) {
  const t = Px();
  return ce = function(e, n) {
    e = e - (-4931 + -72 * -73);
    let r = t[e];
    if (ce.MBdjVN === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      ce.rGdvWx = d, x = arguments, ce.MBdjVN = !0;
    }
    const a = t[296 * 17 + 2873 + -7905 * 1], s = e + a, c = x[s];
    return c ? r = c : (ce.gYYaLw === void 0 && (ce.gYYaLw = !0), r = ce.rGdvWx(r, n), x[s] = r), r;
  }, ce(x, o);
}
async function c1(x) {
  function o(C, l, h, p, A) {
    return ce(C - -257, l);
  }
  const { iv: t, key: e } = await s1(), n = {};
  function r(C, l, h, p, A) {
    return ce(C - 657, A);
  }
  n[c(-371, -368, -356, "2vtT")] = qs, n.iv = t;
  const i = await window[o(71, "[#O[") + "o"][g("7QmP", 347, 355, 348) + "e"][r(1001, 1016, 992, 986, "o#36") + "pt"](n, e, x), a = await window[g("GVYJ", 344, 316, 337) + "o"][g("h!9[", 342, 341, 344) + "e"][d(1202, 1196, 1190, "kPc@") + d(1190, 1169, 1175, "divb")](o(101, "Oo^j"), e), s = {};
  function c(C, l, h, p, A) {
    return ce(l - -714, p);
  }
  function d(C, l, h, p, A) {
    return ce(C - 855, p);
  }
  s[c(-353, -348, -332, "awnQ") + "ge"] = i, s[o(91, "gCvy")] = a, s.iv = t;
  function g(C, l, h, p, A) {
    return ce(p - 12, C);
  }
  return s;
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Fe(d - 371, s);
  }
  const e = x();
  function n(s, c, d, g, C) {
    return Fe(C - -806, c);
  }
  function r(s, c, d, g, C) {
    return Fe(c - -434, g);
  }
  function i(s, c, d, g, C) {
    return Fe(g - -774, s);
  }
  function a(s, c, d, g, C) {
    return Fe(g - 70, c);
  }
  for (; ; )
    try {
      if (-parseInt(a(428, "RZL5", 422, 435, 444)) / 1 + parseInt(a(448, "Z[f9", 451, 442, 452)) / 2 * (parseInt(a(447, "gxCN", 439, 439, 436)) / 3) + -parseInt(n(-426, "Dbu)", -414, -417, -425)) / 4 + parseInt(r(-53, -54, -66, "ZxtE", -52)) / 5 * (-parseInt(t("jw)(", 746, 750, 763, 740)) / 6) + parseInt(a(418, "LX(v", 415, 428, 434)) / 7 * (-parseInt(i("A58Y", -414, -403, -410, -410)) / 8) + parseInt(i("e3dQ", -403, -406, -414, -424)) / 9 + parseInt(i("EbGW", -415, -415, -411, -407)) / 10 === o) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Vx, -557082 + -2 * 356210 + 395214 * 5);
function g1(x) {
  const o = new ArrayBuffer(x[n(78, 78, "3iZv", 68) + "h"]), t = new Uint8Array(o);
  for (let r = -1 * -4337 + 2681 * 3 + 12380 * -1, i = x[n(58, 64, "LYBM", 66) + "h"]; r < i; r++)
    t[r] = x[e(443, "MIog", 441, 452, 454) + n(56, 75, "##F9", 63)](r);
  function e(r, i, a, s, c) {
    return Fe(c - 98, i);
  }
  function n(r, i, a, s, c) {
    return Fe(s - -307, a);
  }
  return o;
}
function Fe(x, o) {
  const t = Vx();
  return Fe = function(e, n) {
    e = e - (-32 * 238 + -15 * 217 + -1 * -11225);
    let r = t[e];
    if (Fe.bNcdSq === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Fe.qebnWg = d, x = arguments, Fe.bNcdSq = !0;
    }
    const a = t[8696 + 10 * -433 + 4366 * -1], s = e + a, c = x[s];
    return c ? r = c : (Fe.PLbIOw === void 0 && (Fe.PLbIOw = !0), r = Fe.qebnWg(r, n), x[s] = r), r;
  }, Fe(x, o);
}
function Vx() {
  const x = ["WPLIWPv9tYldHaLaW706WRrM", "WOStW7HE", "W5NdPuxcIs7dRbDGkmkmWR7dQmk/Ea", "WOLAoCkHW43cOmoH", "W7zpz8kTW6C", "xa0QyfCNuMbgW5VcVSkQx8kz", "jSkbWORcLXDYFG", "jfhcVHfCFJldU2H7eCoE", "WOiHtCoFWP/dOCkiW5LJESkRqMe", "AmkDFSocW6ldGgyjWQFdNdpcUKG", "DszRW6ZcPH3cSmkMkmo2a2NdTG", "WQhcRXFdSLytWRW5W5NdQKxcGSoV", "W5XMWR96CW", "wx5gjW9Cfq", "WOvrlCkzW43cMmom", "WQRcM8kqW7zy", "W7T6y0O3WQRdSb48W63dJCo5W7G", "EftdLeau", "W7hcNmktW6usESoHnCopWRJcQmkZ", "WQepCtFdGSkrW78Nx2K4W7S8Ea", "lv/cSmo9W7K", "W5jDW6tdVcSqcSkZfSo7uCklmq", "WQlcJmk6W5VdJdTN", "W7f5yu0+WQ/dUdq6W5/dVmoQW7q", "WQvflvFcPmoeWRW", "WOWBWR/cPLa", "EbZcKCoiWOG", "W5HtWQinW7irW5/dLCo/WObEbLdcPa"];
  return Vx = function() {
    return x;
  }, Vx();
}
(function(x, o) {
  function t(a, s, c, d, g) {
    return he(s - -691, d);
  }
  function e(a, s, c, d, g) {
    return he(a - -103, c);
  }
  const n = x();
  function r(a, s, c, d, g) {
    return he(a - 302, d);
  }
  function i(a, s, c, d, g) {
    return he(g - 853, d);
  }
  for (; ; )
    try {
      if (parseInt(r(690, 721, 644, "KF8u", 687)) / 1 + parseInt(e(398, 380, "#o$L", 494, 371)) / 2 * (-parseInt(r(745, 840, 812, "KF8u", 676)) / 3) + parseInt(r(824, 756, 741, "T$VO", 814)) / 4 * (parseInt(i(1142, 1112, 1243, "aG$O", 1225)) / 5) + parseInt(e(381, 317, "f)n9", 417, 494)) / 6 + -parseInt(t(-222, -230, -232, "Sa[^", -210)) / 7 * (parseInt(e(329, 331, "KF8u", 349, 368)) / 8) + -parseInt(i(1240, 1224, 1314, "AWgn", 1237)) / 9 + -parseInt(r(636, 585, 572, "$wsp", 740)) / 10 * (-parseInt(e(279, 228, "wHwJ", 308, 175)) / 11) === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Tx, 49812 * 14 + -1 * -674354 + -893402);
function Tx() {
  const x = ["W5PlqKXMWPyJW6xdV1ZdN1y", "vCoBWQxcNua", "W6ZcNCkmW4GE", "uSkPWQVcRtO", "W7eFB8oFxhFcG8oQwCojWQtdSCoD", "lWtdR8kOcG", "CaZdVM3cOa", "W7lcV8oxaSk0", "pmoFweRdSW", "wLqQEqu", "W7qYoCkhEW", "WQL7gmkPka", "W44/kCo6W6K", "W6RcKmogW6WE", "C8k5WQZcNde", "W5ZdLY9YWOi", "qrxdJwhcJG", "W5tdTmkSW6VdLa", "WQCFAKngW5JcSxNcRq", "ng/dGCkHWQi", "d8oDWQddLrq", "W4/dPXxdOgO", "BWJdJfe", "hColW4tdVe5IrCk/jsq3gG", "W4rkcx1H", "WQ8PW6lcJSkk", "FCkeW4GuW5a", "mcJcNZBdRa", "WQdcKs3dSCoI", "tSkEBCkcW5m", "Fmk4AmoAga", "xCkTW6pdRCog", "bWpdKSk9WOC", "W5ldT8oGiSon", "W6n8chKc", "qSoMFmoraq", "pmoIWRJdO0u", "WR8WW5VcGSkS", "pmksWPpcU8k5", "W7NcNxP5WPe", "CCoBWRXRWQG", "z8k5oJtcSxhcSvNcPSk6WRPyWQG", "ksFdTSooCq", "W7VcS8ojhSk+", "i8kjWPddMCk2", "AmkQW4u0W40", "Amo5WRJdGIS", "d8oGB8oSWRm", "tSokWQJcJJe", "W40/kmoiW48", "a8kzW5RdLr4", "DmkPWPHoW7C", "WQ3cKrNdRmkg", "dCkLWOrHW4S", "aCkNW5JdLZW", "WQmCdmkqxq", "WPeqdmoj", "z8kKWQRcVtu", "A8ogWQRdPIyBqG", "oGpdOehcGa", "W5bseSk2Dq", "EhJdMCk2sW", "bCk8WQzfW5i", "W7ryehLL", "mSoAWPhcMLO", "vCk8WRBdUdu", "WRbggSoCvG", "mSo5zmo9WQe", "r2mByHG", "bM7dVSk+sq", "W7RdP2ldMSoB", "kw3cSX7cKG", "WR0/WPGpW6K", "iSozWOm6W6G", "vCozW4VcHgC", "W7VcGSoqm8oO", "WPigo8kCya", "W43cISoulmkT", "W7rbWO0eW7a", "W7DUjmkPcI/dIa", "nH8rfvPcsW", "AgxdVdxdR8oABmofWO8", "gM3cSHNcUG", "FSoYwqJcPa", "W6FcPmohW4Gh", "W77dJCkHoSoL", "WRVcMIJcUSoT", "b8o6WOS7W6G", "jSkEjSk4W7q", "amkGWQ3dGCoO", "W7H4W7a9WPe", "W4ddQXPDWOy", "WPiMgruj", "FmkIW4xcSqC", "iM/cKCkJWRy", "W6aLW6ucW6e", "WROKvmo7W7m", "jCkVWQhcUmkb", "w2y6ygy", "ie3dISkPyG", "Cmk7uCkEbW", "a8k8W7vSW7y", "b8o4WPlcOmkY", "j1pcSqlcMG", "WQ5cl8kPjG", "p0BdPmk+jW", "av7dK8k9Da", "uCoyW44CW5K", "W6bbW6i2W6C", "W5ldMJBdTCkX", "oCotWOZcOmkI", "W5FdHwNdT8kR", "Dmovr1ddTW", "WP8vo8kqua", "bCo3W7hdQSo7", "WOWea8oyW4K", "Ag7dVmo4WQG", "jNBcGmkiia", "WRxdTSkWWQNcMG", "W77dUc9eWO4", "dmkUB8o9W58", "B8kGWQzSW5q", "W6pdMr/dQca", "zqdcTXRcTHNdGWFdVG", "W6S0rMddTq", "q8kdAmoEba", "W6ddVYldNKu", "sSopW7xcSCoRW5xdH8oBn3bC", "W6KosfldSG", "ghhcKSkeWPy", "WPD2W6NdKCog", "jCk/z8oJWQm", "WQhdVCoGW4P+", "oSk/WQ0SaSoBWQq6W6aqda", "f8o9WPdcMSka", "WR1QW57dIe8", "rCk/W4iZW6C", "W5aLF8k8nhWeDsX7WPJcMCoU", "C8k8W4NcNdi", "DKy5uaq", "WPSFcCoBW4q", "imkaW5ldUCoW", "oIddRSksnG", "WPTPdCkenG", "e8o2Bh3dUW", "W7P/W6iRW7i", "WOH0WODeW5S", "WPzZfmkMyG", "wmkJWQaWW5O", "W4VdLJldUSos", "W4ldJ8kYimog", "CmkGW5ddLca", "rMlcJIBcTW", "W6KaW6vSW5G", "BmoOW7nW", "k8ozCgtdOW", "mmoew8o+WO4", "k3JdHSovWOu", "c8oIWQddSra", "du7dK8o8WOu", "jrRdUSkrmq", "aKldISk2wa", "W55KW58f", "jZxdOmkSuG", "oCoAt8oLWRi", "W6H0W6CkWR4YD2xcQeu5WPj4", "W7xdLCkcyCo5", "a8ouWPxcNCkY", "WOrRdSoltq", "wgddU8kPea", "WQPjW4FdKmkY", "WOtdK8kLB8oRWPDcWPpdTeftsG", "WQODWQhcU8kY", "CGVcKmoFW5ZdNrTEW5D1WO8", "WOZdMmkTW4xdMILs", "u8k2W4NcIxlcLmofWOZcQW", "c8kdwGFdGW", "W5CNESk9m34fssPCWOBcR8oL", "W4Ddn8oKW40", "WOOPm8kFEG", "W57dQXFdMx8", "W5ngtu5PWPC1W5RdO0ldR3a", "W6lcGCo7n8km", "a8oqEuhdGq", "CSkCW7K4W60", "caNdOmoDWRK", "WPdcUsRdUSoo", "WQapgcWZ", "i8oLwMpdIa", "WQ8ihmkUhG", "WOxcH8oIcCki", "W6ZdKCkqW6VdQq", "x8kkW4TGW4q", "WPtdRmk9W45/", "WRjZcmkcdW", "y8kRWQRcMK4", "WPvWkSkhoa", "WQ0ldCkFW6G", "WRukWPHMW6O", "nmoLWPFcOSoO", "nwZcHrBdGa", "W77dTZTFWPy", "W5tcN8o8oG", "r30bud0", "DSomW4tcGIi", "b8oKWO3cKLi", "WOJdMCk3WOxcMG", "t08Hydq", "BmkfW4LQW4W", "g8oQWRfbW6e", "WOaVWQjeW6K", "FfaavG", "ewddTCklWQi", "WP7cUXZdQCon", "gZZdMKRdNM3dQw/dGmk1WO/cTrm", "W4xdOdxdPuy", "emo8v8oqWPu", "Amk6W4aWW5e", "mSoeWQ4Ksa", "W4tcMcVdPSoX", "mmohW7rqsa", "WO4La8k1wW", "zuVcRtdcVG", "v8o9W7zdwa", "WQ4KaSkzW7y", "W5bps0fVW4qXW7RdMgBdUG", "WRmHqw0", "ySkYW7itW5C", "WPLoW7aPW5e", "nSoFuCkuWQ0", "sSkadSoXfa", "kGhcNwxcSa", "zmkjW4hdKfq", "D8kWW5ubW5K", "vSkAW6ePW7C", "WOKxW6z4W6m"];
  return Tx = function() {
    return x;
  }, Tx();
}
function he(x, o) {
  const t = Tx();
  return he = function(e, n) {
    e = e - (1 * 797 + 5 * -61 + -178);
    let r = t[e];
    if (he.uMmpZD === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      he.uRFRep = d, x = arguments, he.uMmpZD = !0;
    }
    const a = t[151 * 6 + 1886 * -1 + 980], s = e + a, c = x[s];
    return c ? r = c : (he.qfOdSH === void 0 && (he.qfOdSH = !0), r = he.uRFRep(r, n), x[s] = r), r;
  }, he(x, o);
}
function d1() {
  function x(d, g, C, l, h) {
    return he(d - 605, h);
  }
  function o(d, g, C, l, h) {
    return he(h - 506, C);
  }
  const t = s(-203, "wHwJ", -278) + o(861, 937, "2@gq", 868, 903) + c(1367, 1391, 1293, 1182, "AWgn") + s(-251, "2@gq", -265) + c(1152, 1194, 1194, 1152, "wHCi") + c(1192, 1080, 1157, 1183, "gw!j") + x(1062, 1044, 993, 981, "L4Bn") + c(1342, 1161, 1232, 1135, "aG$O") + r(453, 366, "C@wK") + c(1356, 1233, 1323, 1253, "bc7i") + c(1139, 1081, 1145, 1169, "6&zk") + s(-378, "f)n9", -334) + r(268, 326, "2@gq") + s(-189, "13J1", -287) + s(-468, "][OO", -444) + o(795, 783, "a#Yj", 881, 830) + x(1148, 1153, 1224, 1245, "23^3") + x(1115, 1152, 1057, 1154, "YD&Q") + s(-365, "zlts", -442) + x(1021, 1102, 1016, 1072, "aAMw") + c(1124, 1294, 1176, 1164, "6@T[") + c(1154, 1195, 1146, 1227, "kgYB") + r(415, 399, "(1jz") + c(1244, 1259, 1235, 1214, "LoO]") + x(1020, 954, 1018, 1019, "zlts") + s(-247, "wHCi", -246) + c(1149, 1237, 1132, 1071, "@V^e") + r(494, 462, "[]JN") + o(1008, 930, "YD&Q", 935, 942) + o(973, 936, "wHCi", 1064, 998) + c(1166, 1132, 1184, 1105, "KF8u") + c(1134, 1190, 1108, 1085, "kgYB") + o(921, 944, "bc7i", 1014, 1027) + c(1287, 1449, 1337, 1261, "T$VO") + r(445, 455, "2@gq") + o(1050, 1117, "[]JN", 1044, 1052) + x(1076, 1025, 1177, 978, "1Ine") + r(178, 270, "6JK(") + x(969, 890, 1052, 1068, "CgYT") + r(356, 409, "nQ7C") + x(952, 836, 1e3, 1069, "wHCi") + s(-307, "aA[B", -292) + c(1258, 1252, 1306, 1222, "aAMw") + x(941, 986, 840, 1024, "(1jz") + s(-357, "aG$O", -368) + o(926, 1055, "6&zk", 945, 1e3) + o(932, 994, "wHCi", 938, 891) + o(921, 1021, "L4Bn", 1025, 952) + o(1118, 939, "5RKl", 1067, 1017) + o(721, 731, "!Fnm", 816, 825) + x(1139, 1154, 1162, 1196, "a%Ef") + c(1209, 1159, 1158, 1118, "a#Yj") + r(377, 400, "#o$L") + x(1003, 957, 905, 978, "[K*N") + x(1135, 1094, 1122, 1157, "aAMw") + o(896, 874, "bc7i", 1012, 941) + s(-283, "$wsp", -304) + c(1218, 1171, 1259, 1218, "zlts") + o(1046, 1139, "][OO", 1099, 1051) + o(1082, 1009, "6JK(", 1013, 970) + r(358, 446, "AWgn") + s(-508, "L4Bn", -440) + x(943, 915, 866, 1017, "YD&Q") + o(994, 1007, "!Fnm", 969, 896) + x(1124, 1038, 1032, 1034, "6@T[") + o(863, 785, "EOEo", 778, 837) + o(1034, 1064, "L4Bn", 960, 1014) + s(-309, "5RKl", -375) + o(949, 799, "!Fnm", 841, 857) + s(-361, "$wsp", -298) + o(1093, 1030, "2@gq", 1007, 992) + c(1185, 1104, 1117, 1038, "nQ7C") + s(-313, "5RKl", -371) + s(-470, "zlts", -394) + x(1134, 1182, 1198, 1137, "1Ine") + r(540, 426, "#o$L") + s(-301, "!Fnm", -390) + o(981, 921, "wHwJ", 917, 1023) + x(1027, 1032, 1119, 961, "6JK(") + c(1184, 1250, 1267, 1182, "Sa[^") + x(1133, 1228, 1206, 1169, "ea1H") + o(825, 949, "!Fnm", 791, 868) + c(1414, 1299, 1305, 1328, "aG$O") + c(1264, 1243, 1321, 1357, "nQ7C") + r(514, 474, "(1jz") + s(-240, "5RKl", -333) + c(1218, 1130, 1166, 1054, "gw!j") + o(828, 798, "6JK(", 816, 893) + r(352, 396, "J^DN") + x(1085, 1048, 1178, 978, "!kfK") + r(401, 342, "aG$O") + r(414, 362, ")E*)") + o(889, 1046, "a%Ef", 918, 988) + r(331, 367, ")E*)") + o(1117, 1123, "[]JN", 1093, 1008) + s(-493, "6&zk", -457) + r(222, 285, "T][n") + c(1078, 1083, 1196, 1136, "][OO") + o(765, 794, "ea1H", 967, 879) + r(180, 252, "bc7i") + s(-225, "23^3", -312) + r(414, 433, "6&zk") + x(954, 916, 859, 853, "gw!j") + c(1199, 1164, 1161, 1133, "YD&Q") + s(-364, "23^3", -307) + r(483, 434, "aA[B") + c(1221, 1375, 1302, 1277, "a#Yj") + c(1195, 1173, 1189, 1228, "zlts") + s(-293, "a%Ef", -377) + r(309, 393, "LoO]") + o(891, 881, "aG$O", 751, 859) + o(1021, 986, "(1jz", 824, 925) + o(898, 712, "zlts", 819, 820) + s(-256, "1Ine", -290) + r(481, 365, "AWgn") + o(1090, 968, "L4Bn", 889, 1006) + r(337, 337, "m%^)") + x(1025, 925, 1017, 966, "1Ine") + c(1118, 1132, 1192, 1260, "L4Bn") + r(339, 307, "gw!j") + c(1047, 1231, 1115, 1006, "MgTZ") + s(-524, "aA[B", -427) + s(-444, "zlts", -345) + x(1147, 1201, 1132, 1166, "a#Yj") + o(981, 774, "AWgn", 983, 881) + s(-272, "a#Yj", -281) + c(1043, 1043, 1149, 1084, "C@wK") + x(1006, 969, 993, 1069, "T$VO") + x(1016, 1070, 936, 1119, "L4Bn") + s(-426, "23^3", -348) + r(458, 450, "kgYB") + x(1137, 1252, 1224, 1226, "$wsp") + o(851, 942, "m%^)", 855, 845) + o(836, 950, "6JK(", 758, 835) + x(1031, 967, 1135, 1047, "1Ine") + c(1203, 1322, 1257, 1155, "Sa[^") + c(1123, 1074, 1106, 1201, "kgYB") + r(326, 397, "[K*N") + c(1252, 1247, 1144, 1043, "6@T[") + s(-337, "a#Yj", -237) + r(218, 263, "a%Ef") + x(925, 890, 814, 1025, "13J1") + o(838, 847, "T][n", 903, 827) + s(-222, "ea1H", -309) + c(1244, 1165, 1203, 1094, "MgTZ") + c(1268, 1243, 1264, 1176, "SIW3") + x(1143, 1143, 1261, 1134, "bc7i") + o(843, 865, "YD&Q", 975, 869) + c(1214, 1283, 1269, 1264, "wHwJ") + c(1133, 1271, 1193, 1190, "T$VO") + r(526, 486, "a#Yj") + c(1156, 1198, 1245, 1292, "wHCi") + s(-268, "6&zk", -361) + c(1113, 1162, 1229, 1150, "aA[B") + x(1140, 1071, 1047, 1077, "KF8u") + c(1222, 1343, 1234, 1224, "wHwJ") + c(1315, 1178, 1275, 1182, "a#Yj") + o(904, 853, "13J1", 949, 856) + o(892, 925, "][OO", 875, 823) + s(-349, "2@gq", -335) + c(1313, 1271, 1326, 1348, "aA[B") + x(1075, 1099, 1039, 1044, ")o2L") + c(1171, 1279, 1167, 1152, "L!k8") + x(1053, 1033, 983, 986, "gw!j") + r(323, 368, "wHCi") + o(1041, 872, "J^DN", 1008, 944) + s(-204, "YD&Q", -295) + o(950, 872, "5RKl", 782, 852) + r(338, 349, "wHwJ") + x(942, 848, 909, 829, "L!k8") + c(1207, 1180, 1248, 1339, "a%Ef") + s(-522, "!kfK", -406) + x(937, 1024, 1007, 1031, "23^3") + x(1111, 1042, 1073, 1029, "Sa[^") + c(1192, 1120, 1164, 1211, "][OO") + r(320, 364, ")E*)") + x(997, 885, 954, 891, "CgYT") + s(-412, "6@T[", -389) + r(399, 344, ")o2L") + s(-263, "zlts", -351) + x(988, 1053, 1079, 1092, "!Fnm") + c(1361, 1295, 1265, 1214, "(1jz") + r(512, 442, "6&zk") + c(1135, 1202, 1239, 1258, "J^DN") + r(234, 302, "#o$L") + x(1058, 1004, 1157, 1055, "6@T[") + x(1088, 1186, 1009, 1205, "6&zk") + x(1119, 1066, 1208, 1132, "[]JN") + c(1396, 1436, 1330, 1253, "$wsp") + s(-358, "T$VO", -331) + c(1127, 1149, 1156, 1249, "CgYT") + o(812, 861, "CgYT", 836, 829) + x(957, 978, 945, 977, "bc7i") + x(940, 1047, 1042, 1034, "EOEo") + x(1096, 1124, 1128, 1183, "L4Bn") + r(378, 481, "zlts") + r(526, 425, "6&zk") + c(1205, 1154, 1150, 1045, "aG$O") + r(410, 478, "5RKl") + c(1399, 1250, 1316, 1420, "!Fnm"), e = window[o(882, 829, "2@gq", 852, 915)](t), n = window[s(-292, "5RKl", -367)](e);
  function r(d, g, C, l, h) {
    return he(g - -63, C);
  }
  const i = g1(n), a = {};
  function s(d, g, C, l, h) {
    return he(C - -785, g);
  }
  a[c(1259, 1215, 1151, 1177, ")E*)")] = $s;
  function c(d, g, C, l, h) {
    return he(C - 790, h);
  }
  return a[c(1246, 1246, 1223, 1144, "EOEo")] = Qu, window[o(895, 1034, "zlts", 898, 947) + "o"][o(716, 772, "wHCi", 898, 828) + "e"][r(447, 405, "!kfK") + c(1209, 1257, 1255, 1299, "J^DN")](c(1114, 1164, 1159, 1168, "bc7i"), i, a, !0, [x(962, 964, 861, 995, "ea1H") + "pt"]);
}
async function u1(x) {
  function o(i, a, s, c, d) {
    return he(i - 333, s);
  }
  function t(i, a, s, c, d) {
    return he(c - 433, s);
  }
  const e = await d1(), n = {};
  function r(i, a, s, c, d) {
    return he(c - 831, d);
  }
  return n[r(1387, 1241, 1345, 1330, "wHCi")] = $s, window[o(860, 763, "LoO]") + "o"][t(878, 963, "YD&Q", 856) + "e"][t(830, 844, "1Ine", 826) + "pt"](n, e, x);
}
function Ex() {
  const x = ["W5DpcCkyEW4HaqtcR8kTqG", "W5yoW4OqW4G", "ggdcJIeEWRTYBmo8sCofWPBcLa", "W4SGqunIeb8Q", "WPX0W63cO8kavtK8vfGDW48", "W6foWOvQWRZcRSoloeuXWPP2", "pYqofHDXC8kxW6tdJ8kVWQVdHW", "DCkRW7L9W4pcUCk7", "W5umD1WcdSkOW7SHW4ddKSktWQO", "bLyisSkeWOhdUKelgSkPW6S", "WROTW6ajkXH1jCkGAZXLwq", "W4xdPSoSWPJdU8oKBSk5W41eW5m0", "WPHyleDAWQVdRSoIW6r5WQdcGGO", "iCo6W43dICobWOtcLq", "ySkaW47dIq/cOSo5WPa", "WPfrlevCWQZcVmo9W4TXWPVcPq", "CH/cUq", "oCkwk8kQW5hcJSkiW5OGfSowW6W", "lCkBWOFcRmkdW5pdISoLW6xcGSkZWQ5C", "omkqiCkNW5/cImknW5iTc8oXW54"];
  return Ex = function() {
    return x;
  }, Ex();
}
function ze(x, o) {
  const t = Ex();
  return ze = function(e, n) {
    e = e - (2 * 1874 + 3200 + -13 * 514);
    let r = t[e];
    if (ze.bIIFNF === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      ze.qHHxqh = d, x = arguments, ze.bIIFNF = !0;
    }
    const a = t[-1 * 1795 + -3 * -91 + 1522 * 1], s = e + a, c = x[s];
    return c ? r = c : (ze.MncHWe === void 0 && (ze.MncHWe = !0), r = ze.qHHxqh(r, n), x[s] = r), r;
  }, ze(x, o);
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return ze(s - 256, g);
  }
  function e(s, c, d, g, C) {
    return ze(s - 556, C);
  }
  const n = x();
  function r(s, c, d, g, C) {
    return ze(C - -826, s);
  }
  function i(s, c, d, g, C) {
    return ze(d - 62, g);
  }
  function a(s, c, d, g, C) {
    return ze(s - 869, d);
  }
  for (; ; )
    try {
      if (parseInt(i(337, 326, 333, "YOEj", 330)) / 1 + parseInt(i(340, 334, 342, "@253", 352)) / 2 + -parseInt(e(825, 827, 824, 816, "YOEj")) / 3 + parseInt(a(1136, 1126, "1jmY", 1143, 1143)) / 4 + parseInt(t(522, 532, 519, "B]ne", 524)) / 5 * (parseInt(a(1145, 1147, "*uu@", 1143, 1138)) / 6) + -parseInt(r("#4Tr", -561, -562, -556, -552)) / 7 * (parseInt(r("$EOf", -547, -552, -539, -547)) / 8) + -parseInt(e(834, 829, 827, 837, "7Tkk")) / 9 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Ex, -1 * -571413 + -62571 + 2 * -86896);
async function l1(x) {
  const { iv: o, key: t, message: e } = await c1(x), n = await u1(t), r = {};
  r[i(504, 515, 511, "u*jJ")] = n, r.iv = o;
  function i(a, s, c, d, g) {
    return ze(c - 243, d);
  }
  return r[i(525, 521, 516, "TAwM") + "ge"] = e, r;
}
function Ke(x, o) {
  const t = Lx();
  return Ke = function(e, n) {
    e = e - (13 * -41 + 2 * -4985 + 10779);
    let r = t[e];
    if (Ke.MazkvY === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Ke.WqoTfd = d, x = arguments, Ke.MazkvY = !0;
    }
    const a = t[3367 + -1 * 3367], s = e + a, c = x[s];
    return c ? r = c : (Ke.JYHTWM === void 0 && (Ke.JYHTWM = !0), r = Ke.WqoTfd(r, n), x[s] = r), r;
  }, Ke(x, o);
}
function Lx() {
  const x = ["l8keWPdcLSoCWOBcU8kPdCk0", "gSk9zCkatG", "omk7W4hcIWldJ8kkDSoPW7e", "jmoFCSkxW51RW5tcRrpdOmo0W7nlwG", "W7u4B8o5WOBcHmoZW7a", "WQpcJmoMW7T4W7hdPCkHW7ldTSoYsG", "W4RdL8oEWPu/", "WQrtWPT0W5NcH1WPBrW", "WOlcVSoL", "WQaeWRWzcNhcS1m", "pmk+W4BcJ0hcT8ogASofW7RdM8kVlW", "WQupW6D/BZJdSgtcNSk6W6i7lq", "mwpdRCkYWPKTlCkaWQ/cUmoKAmoE", "W5GWobaHWPpdJSkOW64", "WPHxvW", "tCkWWQ3dQ2BcGCknsW", "W6byt8oUWOTpfqlcRervx8kL", "WP/cJ8kjW4r5xM3cNJJdPvBcHezA", "CqKAW7ZcJmoGWQmKkq", "WOpcGSoNyG", "WQCjW6r9Aw3cK1hcHSkxW7y", "W6lcTmkgWORdLueYt8oLhSkX", "cNWfW4pdGq", "W5S8mgGFWPFdU8kKW4fA", "cmoVWO/dQLW", "lSoJWRH+z8onnxZcO8on", "nrqP", "qgDxWR7cSW", "WPpcPmodWR4M", "xSkQi8o3WP7cMxuAzcq", "z8k1veZdIe85za", "W57dQSkLWOb4W7xcImoec8kirW", "qdLuWO/cN05WW49YW5RdTSok", "WQaVW6NcRmksWRjsW7z2WPJcPG", "WOX2zZy"];
  return Lx = function() {
    return x;
  }, Lx();
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Ke(C - 918, g);
  }
  function e(s, c, d, g, C) {
    return Ke(c - -541, s);
  }
  function n(s, c, d, g, C) {
    return Ke(s - -161, c);
  }
  function r(s, c, d, g, C) {
    return Ke(s - 14, C);
  }
  function i(s, c, d, g, C) {
    return Ke(c - -293, C);
  }
  const a = x();
  for (; ; )
    try {
      if (parseInt(i(-3, -12, -18, -27, "jK^)")) / 1 * (parseInt(n(138, "6uwc", 143, 121, 150)) / 2) + parseInt(n(145, "EFA&", 161, 134, 146)) / 3 + parseInt(n(115, "8lGl", 126, 115, 124)) / 4 + parseInt(n(128, "weX[", 115, 142, 142)) / 5 * (parseInt(r(299, 304, 300, 284, "pmiT")) / 6) + -parseInt(r(316, 300, 323, 314, "tkfx")) / 7 * (-parseInt(i(-24, -13, -5, -28, "EFA&")) / 8) + parseInt(r(291, 275, 291, 284, "wk1i")) / 9 * (-parseInt(e("4qqh", -231, -216, -231, -238)) / 10) + parseInt(t(1229, 1215, 1213, "rxy%", 1218)) / 11 * (-parseInt(i(7, 15, 15, 15, "y#tx")) / 12) === o) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(Lx, 3 * -155069 + 727962 + -179656 * -2);
async function I1(x) {
  function o(i, a, s, c, d) {
    return Ke(c - 314, i);
  }
  function t(i, a, s, c, d) {
    return Ke(c - 625, i);
  }
  function e(i, a, s, c, d) {
    return Ke(a - -750, s);
  }
  const n = await window[o("^ztF", 615, 615, 602) + "o"][r(-438, -434, "ZqYJ") + "e"][r(-431, -415, "wk1i") + "t"](t("5^Bw", 919, 930, 912), x);
  function r(i, a, s, c, d) {
    return Ke(a - -716, s);
  }
  return Array[o("y#tx", 607, 612, 608)](new Uint8Array(n))[t("]g!m", 929, 919, 928)]((i) => i[r(-422, -432, "4qqh") + r(-426, -430, "yYL!")](1 * 6473 + -8022 + -5 * -313)[o("3$zI", 598, 624, 610) + t("3DCy", 936, 936, 934)](-2529 + 1 * 1991 + 27 * 20, "0"))[e(-472, -471, "dmwE")]("");
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return gt(d - 413, C);
  }
  function e(s, c, d, g, C) {
    return gt(g - -426, C);
  }
  function n(s, c, d, g, C) {
    return gt(c - -589, s);
  }
  var r = x();
  function i(s, c, d, g, C) {
    return gt(C - -384, d);
  }
  for (; ; )
    try {
      var a = -parseInt(e(-130, -127, -136, -130, "XK55")) / 1 * (-parseInt(e(-140, -140, -137, -131, "QzHd")) / 2) + -parseInt(n("YEw&", -296, -289, -289, -286)) / 3 + -parseInt(n("pmgY", -298, -291, -304, -294)) / 4 + -parseInt(i(-78, -83, "pmgY", -87, -82)) / 5 + parseInt(t(723, 714, 713, 705, "BHFe")) / 6 * (-parseInt(t(715, 718, 710, 704, "BHFe")) / 7) + parseInt(i(-103, -94, "Vk2)", -91, -94)) / 8 * (-parseInt(t(712, 704, 702, 702, "Et[@")) / 9) + parseInt(t(725, 717, 716, 709, "O0&z")) / 10;
      if (a === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(Nx, -218027 + -4 * 9001 + 432909);
function gt(x, o) {
  var t = Nx();
  return gt = function(e, n) {
    e = e - (-7 * 433 + -1 * 8651 + 3989 * 3);
    var r = t[e];
    if (gt.ewhfuN === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (var H = 0, F = l.length; H < F; H++)
          h += "%" + ("00" + l.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (var v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      gt.LJjpSI = a, x = arguments, gt.ewhfuN = !0;
    }
    var s = t[-4320 * 2 + -6491 * -1 + 2149], c = e + s, d = x[c];
    return d ? r = d : (gt.akGkgJ === void 0 && (gt.akGkgJ = !0), r = gt.LJjpSI(r, n), x[c] = r), r;
  }, gt(x, o);
}
function Nx() {
  var x = ["W7jUW5PpW644wdihtWpdScXE", "ESoRxJFdJcZcS8kgW43cMq", "W53cM8ojvqRcLmk2", "W4pcHJWXemkwgSkAoSogjdXM", "WRvDFSklWRDPpSkEDCkQDSoaWPK", "WOFcGCorEKzXD8k+WRtcVSodWPtcL8kc", "W4FdSSoUo8kMxJ3cLCkDWQ8", "WOfeW7/dM8k+WQxcOmoJequ", "nCo+rSk5WP7dSZ9cW7XSW7RcQmoc", "WOJdPx9nWRDinCk4", "WQBcR8kNcSozbMPVFflcLay", "WP1Nb2FcGY5hW7hdJdq", "hY/cQSknkSoSW5BcSLb4", "WO9GW7VdPxadzCo3", "WOhdOXWaW6jZl8kmW7Dzdq", "W4hdSSoRpCo1iHxcR8kNWRZcRZu", "vmkRp8kyD8k1W4KJnfi", "WO/cS3POWRTRpq", "W7rEAH/cJmobsCoPW4xdI1O", "nCo9rmk4WP7dTJXOW5fQW63cICoA"];
  return Nx = function() {
    return x;
  }, Nx();
}
class f1 {
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
    j(this, "imagesWithTimestampForDuplicateDetection", new jr(Ju));
  }
  async initDetector(o) {
    await this.detector.initSamModule(location.href, o);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  async getInstructionSet() {
    return await a1() ? Ca.SIMD : Ca.NO_SIMD;
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
    return o === $u;
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
    const e = o.length / zu, n = e / (-8695 + -6875 * 1 + 15572), r = o.length / (18 * -82 + 1163 * 1 + -5 * -63), i = await I1(o.slice(r - n, r + n)), a = {};
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
  return function(o) {
    o = o || {};
    var t;
    t || (t = typeof o < "u" ? o : {});
    var e, n;
    t.ready = new Promise(function(I, f) {
      e = I, n = f;
    });
    var r = {}, i;
    for (i in t) t.hasOwnProperty(i) && (r[i] = t[i]);
    var a = "./this.program", s = !1, c = !1;
    s = typeof window == "object", c = typeof importScripts == "function";
    var d = "", g;
    (s || c) && (c ? d = self.location.href : document.currentScript && (d = document.currentScript.src), x && (d = x), 6 * -298 + -5 * -1174 + -4082 !== d.indexOf("blob:") ? d = d.substr(-9544 + -1 * 8527 + 18071, d.lastIndexOf("/") + 1) : d = "", c && (g = function(I) {
      var f = new XMLHttpRequest();
      return f.open("GET", I, !(3 * -1254 + -2 * -1332 + 157 * 7)), f.responseType = "arraybuffer", f.send(null), new Uint8Array(f.response);
    }));
    var C = t.printErr || console.warn.bind(console);
    for (i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
    r = null, t.thisProgram && (a = t.thisProgram);
    var l;
    t.wasmBinary && (l = t.wasmBinary), t.noExitRuntime && t.noExitRuntime, typeof WebAssembly != "object" && at("no native wasm support detected");
    var h, p = !(-6 * -1379 + 464 + -8737);
    function A(I) {
      I || at("Assertion failed: undefined");
    }
    var u = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function v(I, f, m) {
      var y = Ce;
      if (1 * -414 + -51 * -127 + -6063 < m) {
        m = f + m - (-1 * 4331 + -65 * 111 + 3 * 3849);
        for (var w = -2972 + -1 * 5523 + -8495 * -1; w < I.length; ++w) {
          var S = I.charCodeAt(w);
          if (-2626 + -4793 * -19 + 1 * -33145 <= S && 64551 + 1866 * -36 + 1874 * 32 >= S) {
            var k = I.charCodeAt(++w);
            S = 65536 + ((S & -2 * -610 + -4413 + -248 * -17) << -8602 + -1 * 766 + -18 * -521) | k & -2 * 106 + -7359 + -4297 * -2;
          }
          if (3353 * 1 + -8 * 1127 + 1 * 5790 >= S) {
            if (f >= m) break;
            y[f++] = S;
          } else {
            if (34 * -111 + 22 * 433 + -57 * 65 >= S) {
              if (f + (-179 * 50 + 4 * -2462 + 18799) >= m) break;
              y[f++] = 7 * -285 + -8581 * 1 + 10768 * 1 | S >> 8875 + 43 * -113 + -4010;
            } else {
              if (-473 * -216 + 111 * 790 + -124323 >= S) {
                if (f + (-4665 * 2 + 3 * 752 + 7076) >= m) break;
                y[f++] = 16 * -585 + 67 * 149 + -399 | S >> -6273 + -857 * 9 + 13998;
              } else {
                if (f + (-9463 * 1 + 6338 + 3128) >= m) break;
                y[f++] = -10295 + 49 * 215 | S >> 17489 + 1 * -17471, y[f++] = -970 + 56 * 53 + -1870 | S >> -821 * -8 + 7792 + 34 * -422 & 5 * -1097 + -8761 + 14309;
              }
              y[f++] = -1 * 3637 + -1108 * -2 + -1549 * -1 | S >> -4023 * 1 + -1218 * -3 + 375 & 63;
            }
            y[f++] = 128 | S & -2 * -2503 + -1 * -8599 + 3 * -4514;
          }
        }
        y[f] = 0;
      }
    }
    var H = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void (-83 * 101 + -1 * 9993 + -2 * -9188);
    function F(I, f) {
      for (var m = I >> 1, y = m + f / (4 * -1585 + 3 * -2721 + 14505); !(m >= y) && It[m]; ) ++m;
      if (m <<= -2 * -4274 + -4 * -1619 + -181 * 83, 32 < m - I && H) return H.decode(Ce.subarray(I, m));
      for (m = 1879 * -1 + -3120 + 4999 * 1, y = ""; ; ) {
        var w = Re[I + 2 * m >> 1];
        if (-2111 + 207 * 45 + 7204 * -1 == w || m == f / 2) return y;
        ++m, y += String.fromCharCode(w);
      }
    }
    function J(I, f, m) {
      if (void (757 * 2 + 1459 * -3 + 2863) === m && (m = 946445030 + 2718438845 * 1 + -510222 * 2974), 5 * -1340 + 3146 + 3556 > m) return 0;
      m -= 2096 + 10 * 235 + 22 * -202;
      var y = f;
      m = m < (1212 + 515 * -2 + -180) * I.length ? m / (6 * -1261 + 23 * -277 + 53 * 263) : I.length;
      for (var w = 692 * -14 + 7124 + 1 * 2564; w < m; ++w) Re[f >> 2 * 2677 + -291 * 13 + -1570] = I.charCodeAt(w), f += -5658 + 2 * 3731 + -1802;
      return Re[f >> 15 * 285 + -257 * -26 + -10956] = 1279 + 1279 * -1, f - y;
    }
    function Y(I) {
      return (1 * -915 + 1 * -3727 + 4644) * I.length;
    }
    function O(I, f) {
      for (var m = -4 * -1114 + 1218 + 2 * -2837, y = ""; !(m >= f / 4); ) {
        var w = ie[I + 4 * m >> 2];
        if (6709 * -1 + -1378 + 8087 == w) break;
        ++m, 1 * 100796 + -67334 + 158 * 203 <= w ? (w -= -93545 + -6163 * 17 + 263852, y += String.fromCharCode(84593 * -1 + 76540 + 63349 | w >> -2 * -2169 + -5599 + 1271, 1 * 40321 + -51838 + 67837 | w & -1 * -8797 + 47 * 19 + -8667)) : y += String.fromCharCode(w);
      }
      return y;
    }
    function _(I, f, m) {
      if (void (-636 + -4518 * -2 + -8400) === m && (m = -4231573515 + -668 * -35012 + -6 * -1059278191), 9346 * -1 + -6052 + 453 * 34 > m) return 0;
      var y = f;
      m = y + m - (317 * 14 + 4493 + -8927);
      for (var w = 2307 + -2307 * 1; w < I.length; ++w) {
        var S = I.charCodeAt(w);
        if (45319 + 71 * 743 + -42776 <= S && 30021 * 1 + -32189 + 239 * 249 >= S) {
          var k = I.charCodeAt(++w);
          S = -2 * 33041 + -1 * -68147 + 63471 + ((S & -1 * 466 + 2468 + 979 * -1) << 10002 + 8 * -1249) | k & 6 * -1526 + 3688 * 2 + -2803 * -1;
        }
        if (ie[f >> 9805 * 1 + 8924 + -18727] = S, f += 5381 + 446 * 1 + -5823, f + (187 * 53 + -1311 + -8596) > m) break;
      }
      return ie[f >> -3575 + -5129 * 1 + -1 * -8706] = 2533 + 1 * -203 + 2330 * -1, f - y;
    }
    function Ie(I) {
      for (var f = 713 * 7 + 9359 + 1435 * -10, m = 9793 + -1 * 5077 + 131 * -36; m < I.length; ++m) {
        var y = I.charCodeAt(m);
        -80687 * -1 + 347 * 95 + 9 * -6484 <= y && 1 * -91521 + -15613 + 164477 >= y && ++m, f += 7749 + 7 * 71 + 1 * -8242;
      }
      return f;
    }
    var U, fe, Ce, Re, It, ie, Pe, Xe, it;
    function Me(I) {
      U = I, t.HEAP8 = fe = new Int8Array(I), t.HEAP16 = Re = new Int16Array(I), t.HEAP32 = ie = new Int32Array(I), t.HEAPU8 = Ce = new Uint8Array(I), t.HEAPU16 = It = new Uint16Array(I), t.HEAPU32 = Pe = new Uint32Array(I), t.HEAPF32 = Xe = new Float32Array(I), t.HEAPF64 = it = new Float64Array(I);
    }
    var me = t.INITIAL_MEMORY || 18723959 * 1 + -13685444 + 902977 * 13, Te = {};
    Te.initial = me / (-19 * 100 + 122422 * -1 + -2 * -94929), Te.maximum = 32768, t.wasmMemory ? h = t.wasmMemory : h = new WebAssembly.Memory(Te), h && (U = h.buffer), me = U.byteLength, Me(U);
    var je = [], be = [], Ee = [], Je = [];
    function C0() {
      var I = t.preRun.shift();
      je.unshift(I);
    }
    var $e = 599 + 1 * -9023 + -702 * -12, yt = null;
    t.preloadedImages = {}, t.preloadedAudios = {};
    function at(I) {
      throw t.onAbort && t.onAbort(I), C(I), p = !(5 * -1231 + 3028 + -59 * -53), I = new WebAssembly.RuntimeError("abort(" + I + "). Build with -s ASSERTIONS=1 for more info."), n(I), I;
    }
    function _t(I) {
      var f = ft;
      return String.prototype.startsWith ? f.startsWith(I) : 11517 + -1 * 11517 === f.indexOf(I);
    }
    function Wt() {
      return _t("data:application/octet-stream;base64,");
    }
    var ft = "sam.wasm";
    if (!Wt()) {
      var Qt = ft;
      ft = t.locateFile ? t.locateFile(Qt, d) : d + Qt;
    }
    function Ct() {
      try {
        if (l) return new Uint8Array(l);
        if (g) return g(ft);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        at(I);
      }
    }
    function Jc() {
      var I = {};
      return I.credentials = "same-origin", l || !s && !c || typeof fetch != "function" || _t("file://") ? Promise.resolve().then(Ct) : fetch(ft, I).then(function(f) {
        if (!f.ok) throw "failed to load wasm binary file at '" + ft + "'";
        return f.arrayBuffer();
      }).catch(function() {
        return Ct();
      });
    }
    function En(I) {
      for (; -121 * -23 + 1898 + -4681 < I.length; ) {
        var f = I.shift();
        if (typeof f == "function") f(t);
        else {
          var m = f.Ba;
          typeof m == "number" ? void (-7451 + 427 * 9 + -88 * -41) === f.ta ? go("v", m)() : go("vi", m)(f.ta) : m(void (-686 * 5 + -1 * -169 + -1 * -3261) === f.ta ? null : f.ta);
        }
      }
    }
    function go(I, f) {
      var m = [];
      return function() {
        m.length = arguments.length;
        for (var y = 1 * -1609 + 688 * -4 + -1 * -4361; y < arguments.length; y++) m[y] = arguments[y];
        return m && m.length ? t["dynCall_" + I].apply(null, [f].concat(m)) : t["dynCall_" + I].call(null, f);
      };
    }
    function _c(I) {
      this.da = I - (-2652 + -2 * -1334), this.Oa = function(f) {
        ie[this.da + (-8911 + 114 * 43 + 4017) >> 6714 + 4 * -1678] = f;
      }, this.La = function(f) {
        ie[this.da + 0 >> -7031 + -54 * -139 + 1 * -473] = f;
      }, this.Ma = function() {
        ie[this.da + (3642 * 1 + 29 * 246 + -10772) >> 6972 + 5 * -1394] = -7741 * -1 + 7284 + -15025;
      }, this.Ka = function() {
        fe[this.da + (-9298 * 1 + 7 * 97 + 8631) >> 829 + 829 * -1] = 1507 + 3787 * -2 + 6067;
      }, this.Na = function() {
        fe[this.da + 13 >> 4 * -1923 + 1 * -956 + 8648] = -2799 + 3 * -2785 + 39 * 286;
      }, this.Fa = function(f, m) {
        this.Oa(f), this.La(m), this.Ma(), this.Ka(), this.Na();
      };
    }
    function Ln() {
      return -2955 + -5 * -591 < Ln.xa;
    }
    function uo(I) {
      switch (I) {
        case -8399 + 168 * 50:
          return 0;
        case -17 * -153 + -1007 + -1592:
          return 1 * -4825 + 61 * 103 + -47 * 31;
        case -110 * 20 + 489 + 49 * 35:
          return -1 * -2909 + -1436 + -1471;
        case 4387 * -2 + -1 * 9824 + -21 * -886:
          return 7285 + 265 * -31 + 1 * 933;
        default:
          throw new TypeError("Unknown type size: " + I);
      }
    }
    var xi = void (-3760 + -3 * -3155 + 5 * -1141);
    function _e(I) {
      for (var f = ""; Ce[I]; ) f += xi[Ce[I++]];
      return f;
    }
    var h0 = {}, Ut = {}, Nn = {};
    function lo(I) {
      if (void (-11796 + -11796 * -1) === I) return "_unknown";
      I = I.replace(/[^a-zA-Z0-9_]/g, "$");
      var f = I.charCodeAt(0);
      return 1 * 7601 + 8376 + -15929 <= f && -4720 + -2 * 2974 + 325 * 33 >= f ? "_" + I : I;
    }
    function Io(I, f) {
      return I = lo(I), new Function("body", "return function " + I + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(f);
    }
    function fo(I) {
      var f = Error, m = Io(I, function(y) {
        this.name = I, this.message = y, y = Error(y).stack, void (-779 + -19 * -41) !== y && (this.stack = this.toString() + `
` + y.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return m.prototype = Object.create(f.prototype), m.prototype.constructor = m, m.prototype.toString = function() {
        return void (-2 * -4269 + -17 * -135 + -10833) === this.message ? this.name : this.name + ": " + this.message;
      }, m;
    }
    var p0 = void (2193 + -1 * 2193);
    function M(I) {
      throw new p0(I);
    }
    var oi = void 0;
    function Dn(I) {
      throw new oi(I);
    }
    function m0(I, f, m) {
      function y(G) {
        G = m(G), G.length !== I.length && Dn("Mismatched type converter count");
        for (var Z = -1 * 5722 + 1 * -5033 + 10755; Z < I.length; ++Z) kt(I[Z], G[Z]);
      }
      I.forEach(function(G) {
        Nn[G] = f;
      });
      var w = Array(f.length), S = [], k = 2 * -2467 + -788 + -5722 * -1;
      f.forEach(function(G, Z) {
        Ut.hasOwnProperty(G) ? w[Z] = Ut[G] : (S.push(G), h0.hasOwnProperty(G) || (h0[G] = []), h0[G].push(function() {
          w[Z] = Ut[G], ++k, k === S.length && y(w);
        }));
      }), S.length === 0 && y(w);
    }
    function kt(I, f, m) {
      if (m = m || {}, !("argPackAdvance" in f)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var y = f.name;
      if (I || M('type "' + y + '" must have a positive integer typeid pointer'), Ut.hasOwnProperty(I)) {
        if (m.Ea) return;
        M("Cannot register type '" + y + "' twice");
      }
      Ut[I] = f, delete Nn[I], h0.hasOwnProperty(I) && (f = h0[I], delete h0[I], f.forEach(function(w) {
        w();
      }));
    }
    function Qc(I) {
      var f = {};
      return f.count = I.count, f.oa = I.oa, f.pa = I.pa, f.da = I.da, f.fa = I.fa, f.ga = I.ga, f.ha = I.ha, f;
    }
    function Co(I) {
      M(I.A.fa.ea.name + " instance already deleted");
    }
    var ho = !(2 * 2235 + 9244 + 1 * -13713);
    function ri() {
    }
    function ii(I) {
      --I.count.value, 2 * 155 + -2525 + -5 * -443 === I.count.value && (I.ga ? I.ha.na(I.ga) : I.fa.ea.na(I.da));
    }
    function U0(I) {
      return typeof FinalizationGroup > "u" ? (U0 = function(f) {
        return f;
      }, I) : (ho = new FinalizationGroup(function(f) {
        for (var m = f.next(); !m.done; m = f.next()) m = m.value, m.da ? ii(m) : console.warn("object already deleted: " + m.da);
      }), U0 = function(f) {
        return ho.register(f, f.A, f.A), f;
      }, ri = function(f) {
        ho.unregister(f.A);
      }, U0(I));
    }
    var z0 = void (41 * -122 + 3 * -1282 + -158 * -56), q0 = [];
    function po() {
      for (; q0.length; ) {
        var I = q0.pop();
        I.A.oa = !1, I.delete();
      }
    }
    function Lt() {
    }
    var ai = {};
    function Uc(I, f) {
      var m = t;
      if (void (11 * -679 + 4360 + 3109) === m[I].ja) {
        var y = m[I];
        m[I] = function() {
          return m[I].ja.hasOwnProperty(arguments.length) || M("Function '" + f + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + m[I].ja + ")!"), m[I].ja[arguments.length].apply(this, arguments);
        }, m[I].ja = [], m[I].ja[y.ya] = y;
      }
    }
    function si(I, f, m) {
      t.hasOwnProperty(I) ? ((void (2 * 1633 + 6110 + -9376) === m || t[I].ja !== void 0 && void (-2449 + -33 * 199 + 9016) !== t[I].ja[m]) && M("Cannot register public name '" + I + "' twice"), Uc(I, I), t.hasOwnProperty(m) && M("Cannot register multiple overloads of a function with the same number of arguments (" + m + ")!"), t[I].ja[m] = f) : (t[I] = f, void (2 * 3977 + 2361 + -2063 * 5) !== m && (t[I].Ra = m));
    }
    function zc(I, f, m, y, w, S, k, G) {
      this.name = I, this.constructor = f, this.ma = m, this.na = y, this.ia = w, this.Ca = S, this.qa = k, this.Aa = G;
    }
    function Fn(I, f, m) {
      for (; f !== m; ) f.qa || M("Expected null or instance of " + m.name + ", got an instance of " + f.name), I = f.qa(I), f = f.ia;
      return I;
    }
    function qc(I, f) {
      return f === null ? (this.ua && M("null is not a valid " + this.name), 7 * -535 + 3829 + -84) : (f.A || M('Cannot pass "' + A0(f) + '" as a ' + this.name), f.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), Fn(f.A.da, f.A.fa.ea, this.ea));
    }
    function $c(I, f) {
      if (f === null) {
        if (this.ua && M("null is not a valid " + this.name), this.sa) {
          var m = this.Ha();
          return I !== null && I.push(this.na, m), m;
        }
        return -6244 + -1 * 7481 + -2745 * -5;
      }
      if (f.A || M('Cannot pass "' + A0(f) + '" as a ' + this.name), f.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), !this.ra && f.A.fa.ra && M("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name), m = Fn(f.A.da, f.A.fa.ea, this.ea), this.sa) switch (void (8095 + 5 * -1619) === f.A.ga && M("Passing raw pointer to smart pointer is illegal"), this.Pa) {
        case 1541 + 1 * -1541:
          f.A.ha === this ? m = f.A.ga : M("Cannot convert argument of type " + (f.A.ha ? f.A.ha.name : f.A.fa.name) + " to parameter type " + this.name);
          break;
        case -7103 * 1 + 3 * -1047 + 10245:
          m = f.A.ga;
          break;
        case -12378 + 20 * 619:
          if (f.A.ha === this) m = f.A.ga;
          else {
            var y = f.clone();
            m = this.Ia(m, b0(function() {
              y.delete();
            })), I !== null && I.push(this.na, m);
          }
          break;
        default:
          M("Unsupporting sharing policy");
      }
      return m;
    }
    function eg(I, f) {
      return f === null ? (this.ua && M("null is not a valid " + this.name), 753 * 2 + 1704 + -1605 * 2) : (f.A || M('Cannot pass "' + A0(f) + '" as a ' + this.name), f.A.da || M("Cannot pass deleted object as a pointer of type " + this.name), f.A.fa.ra && M("Cannot convert argument of type " + f.A.fa.name + " to parameter type " + this.name), Fn(f.A.da, f.A.fa.ea, this.ea));
    }
    function Yn(I) {
      return this.fromWireType(Pe[I >> 6817 + -29 * 235]);
    }
    function ci(I, f, m) {
      return f === m ? I : void (-1 * -582 + -19 * -373 + 1 * -7669) === m.ia ? null : (I = ci(I, f, m.ia), I === null ? null : m.Aa(I));
    }
    var $0 = {};
    function tg(I, f) {
      for (void (3586 + -1793 * 2) === f && M("ptr should not be undefined"); I.ia; ) f = I.qa(f), I = I.ia;
      return $0[f];
    }
    function Xn(I, f) {
      f.fa && f.da || Dn("makeClassHandle requires ptr and ptrType"), !!f.ha != !!f.ga && Dn("Both smartPtrType and smartPtr must be specified");
      var m = {};
      m.value = 1, f.count = m;
      var y = {};
      y.value = f;
      var w = {};
      return w.A = y, U0(Object.create(I, w));
    }
    function Ht(I, f, m, y) {
      this.name = I, this.ea = f, this.ua = m, this.ra = y, this.sa = !(-17 * -127 + -4093 + 1935), this.na = this.Ia = this.Ha = this.wa = this.Pa = this.Ga = void (-1605 * -1 + -2153 + -4 * -137), void (-3739 + 1 * 3739) !== f.ia ? this.toWireType = $c : (this.toWireType = y ? qc : eg, this.ka = null);
    }
    function gi(I, f, m) {
      t.hasOwnProperty(I) || Dn("Replacing nonexistant public symbol"), void (9819 + -2381 * 4 + 1 * -295) !== t[I].ja && void (1 * 7107 + 2 * 3139 + -13385) !== m ? t[I].ja[m] = f : (t[I] = f, t[I].ya = m);
    }
    function Nt(I, f) {
      I = _e(I);
      var m = go(I, f);
      return typeof m != "function" && M("unknown function pointer with signature " + I + ": " + f), m;
    }
    var di = void (-8953 + -1 * -3185 + 2884 * 2);
    function ui(I) {
      I = Si(I);
      var f = _e(I);
      return Ot(I), f;
    }
    function en(I, f) {
      function m(S) {
        w[S] || Ut[S] || (Nn[S] ? Nn[S].forEach(m) : (y.push(S), w[S] = !(6538 + 521 * 3 + -1 * 8101)));
      }
      var y = [], w = {};
      throw f.forEach(m), new di(I + ": " + y.map(ui).join([", "]));
    }
    function li(I, f) {
      for (var m = [], y = 1 * 4509 + 4171 + -2 * 4340; y < I; y++) m.push(ie[(f >> 7088 + -2309 * 3 + -53 * 3) + y]);
      return m;
    }
    function Mn(I) {
      for (; I.length; ) {
        var f = I.pop();
        I.pop()(f);
      }
    }
    function Ii(I, f, m) {
      return I instanceof Object || M(m + ' with invalid "this": ' + I), I instanceof f.ea.constructor || M(m + ' incompatible with "this" of type ' + I.constructor.name), I.A.da || M("cannot call emscripten binding method " + m + " on deleted object"), Fn(I.A.da, I.A.fa.ea, f.ea);
    }
    var fi = {};
    fi.value = void (43 * 171 + 1 * 3209 + -5281 * 2);
    var Ci = {};
    Ci.value = null;
    var hi = {};
    hi.value = !(-1 * 3706 + 121 * 67 + 489 * -9);
    var pi = {};
    pi.value = !(9163 + 196 * -46 + -146 * 1);
    var mo = [], st = [{}, fi, Ci, hi, pi];
    function bo(I) {
      -8341 + 1 * 9966 + 1 * -1621 < I && --st[I].Ja === 0 && (st[I] = void (-7757 * -1 + 5770 + -13527), mo.push(I));
    }
    function b0(I) {
      switch (I) {
        case void (7294 + -1 * -2053 + 9347 * -1):
          return -7 * -41 + 3902 + -4188;
        case null:
          return -4 * -1799 + -9580 + 2386;
        case !(-1 * -9535 + -9536 * 1 + -1 * -1):
          return 10 * -833 + 49 * -173 + 16810;
        case !1:
          return 380 * 17 + -3094 + -3362;
        default:
          var f = mo.length ? mo.pop() : st.length, m = {};
          return m.Ja = 1, m.value = I, st[f] = m, f;
      }
    }
    function A0(I) {
      if (I === null) return "null";
      var f = typeof I;
      return f === "object" || f === "array" || f === "function" ? I.toString() : "" + I;
    }
    function ng(I, f) {
      switch (f) {
        case 2:
          return function(m) {
            return this.fromWireType(Xe[m >> -1995 * -3 + -9 * 925 + 2342 * 1]);
          };
        case 2689 * -2 + 2158 + 3223:
          return function(m) {
            return this.fromWireType(it[m >> -7 * 483 + -2 * 3527 + 5219 * 2]);
          };
        default:
          throw new TypeError("Unknown float type: " + I);
      }
    }
    function xg(I) {
      var f = Function;
      if (!(f instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof f + " which is not a function");
      var m = Io(f.name || "unknownFunctionName", function() {
      });
      return m.prototype = f.prototype, m = new m(), I = f.apply(m, I), I instanceof Object ? I : m;
    }
    function og(I, f, m) {
      switch (f) {
        case 0:
          return m ? function(y) {
            return fe[y];
          } : function(y) {
            return Ce[y];
          };
        case 722 * 4 + -6 * -502 + -5899:
          return m ? function(y) {
            return Re[y >> 1];
          } : function(y) {
            return It[y >> 7252 + -1 * 7251];
          };
        case -2354 + 1361 * -4 + 52 * 150:
          return m ? function(y) {
            return ie[y >> 622 * 3 + 347 * -5 + -43 * 3];
          } : function(y) {
            return Pe[y >> -1598 + 80 * 20];
          };
        default:
          throw new TypeError("Unknown integer type: " + I);
      }
    }
    function Ao(I) {
      return I || M("Cannot use deleted val. handle = " + I), st[I].value;
    }
    function mi(I, f) {
      var m = Ut[I];
      return void (-1 * -4209 + 53 * 3 + -4368) === m && M(f + " has unknown type " + ui(I)), m;
    }
    var rg = {}, bi = {};
    function Ai() {
      if (!yo) {
        var I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: a || "./this.program" }, f;
        for (f in bi) I[f] = bi[f];
        var m = [];
        for (f in I) m.push(f + "=" + I[f]);
        yo = m;
      }
      return yo;
    }
    var yo, yi = [];
    function Wi(I) {
      var f = {}, m;
      for (m in I) (function(y) {
        var w = I[y];
        f[y] = typeof w == "function" ? function() {
          yi.push(y);
          try {
            return w.apply(null, arguments);
          } finally {
            if (p) return;
            var S = yi.pop();
            A(S === y);
          }
        } : w;
      })(m);
      return f;
    }
    for (var vi = Array(9639 + 9383 * -1), jn = 6423 + 6423 * -1; 4067 + -305 * 1 + -2 * 1753 > jn; ++jn) vi[jn] = String.fromCharCode(jn);
    xi = vi, p0 = t.BindingError = fo("BindingError"), oi = t.InternalError = fo("InternalError"), Lt.prototype.isAliasOf = function(I) {
      if (!(this instanceof Lt && I instanceof Lt)) return !1;
      var f = this.A.fa.ea, m = this.A.da, y = I.A.fa.ea;
      for (I = I.A.da; f.ia; ) m = f.qa(m), f = f.ia;
      for (; y.ia; ) I = y.qa(I), y = y.ia;
      return f === y && m === I;
    }, Lt.prototype.clone = function() {
      if (this.A.da || Co(this), this.A.pa) return this.A.count.value += 225 * 5 + 1 * -9100 + 7976, this;
      var I = U0(Object.create(Object.getPrototypeOf(this), { A: { value: Qc(this.A) } }));
      return I.A.count.value += 1, I.A.oa = !(-815 * -11 + 564 * -8 + -159 * 28), I;
    }, Lt.prototype.delete = function() {
      this.A.da || Co(this), this.A.oa && !this.A.pa && M("Object already scheduled for deletion"), ri(this), ii(this.A), this.A.pa || (this.A.ga = void (277 + -1 * 2389 + 1 * 2112), this.A.da = void (-1051 * 1 + -7391 + -134 * -63));
    }, Lt.prototype.isDeleted = function() {
      return !this.A.da;
    }, Lt.prototype.deleteLater = function() {
      return this.A.da || Co(this), this.A.oa && !this.A.pa && M("Object already scheduled for deletion"), q0.push(this), 1044 * -8 + -785 + 9138 === q0.length && z0 && z0(po), this.A.oa = !(5649 + 1 * -9721 + 4072), this;
    }, Ht.prototype.Da = function(I) {
      return this.wa && (I = this.wa(I)), I;
    }, Ht.prototype.va = function(I) {
      this.na && this.na(I);
    }, Ht.prototype.argPackAdvance = 8 * 644 + 2931 + 475 * -17, Ht.prototype.readValueFromPointer = Yn, Ht.prototype.deleteObject = function(I) {
      I !== null && I.delete();
    }, Ht.prototype.fromWireType = function(I) {
      function f() {
        return this.sa ? Xn(this.ea.ma, { fa: this.Ga, da: m, ha: this, ga: I }) : Xn(this.ea.ma, { fa: this, da: I });
      }
      var m = this.Da(I);
      if (!m) return this.va(I), null;
      var y = tg(this.ea, m);
      if (void (1273 * -1 + -351 + -28 * -58) !== y)
        return -4 * -821 + 1635 + -4919 === y.A.count.value ? (y.A.da = m, y.A.ga = I, y.clone()) : (y = y.clone(), this.va(I), y);
      if (y = this.ea.Ca(m), y = ai[y], !y) return f.call(this);
      y = this.ra ? y.za : y.pointerType;
      var w = ci(m, this.ea, y.ea);
      return w === null ? f.call(this) : this.sa ? Xn(y.ea.ma, { fa: y, da: w, ha: this, ga: I }) : Xn(y.ea.ma, { fa: y, da: w });
    }, t.getInheritedInstanceCount = function() {
      return Object.keys($0).length;
    }, t.getLiveInheritedInstances = function() {
      var I = [], f;
      for (f in $0) $0.hasOwnProperty(f) && I.push($0[f]);
      return I;
    }, t.flushPendingDeletes = po, t.setDelayFunction = function(I) {
      z0 = I, q0.length && z0 && z0(po);
    }, di = t.UnboundTypeError = fo("UnboundTypeError"), t.count_emval_handles = function() {
      for (var I = -7679 + -1 * -2099 + -5580 * -1, f = -57 * 58 + 328 + -19 * -157; f < st.length; ++f) void (-16127 + -16127 * -1) !== st[f] && ++I;
      return I;
    }, t.get_first_emval = function() {
      for (var I = 1 * -4954 + 7930 + 2971 * -1; I < st.length; ++I) if (void (8995 + -1 * 8689 + -153 * 2) !== st[I]) return st[I];
      return null;
    }, be.push({ Ba: function() {
      wi();
    } });
    var ig = { z: function(I) {
      return Jn(I + (-2963 * 1 + -3645 + 6624)) + (113 * -47 + -1 * -7097 + 59 * -30);
    }, u: function(I, f, m) {
      throw new _c(I).Fa(f, m), "uncaught_exception" in Ln ? Ln.xa++ : Ln.xa = -28 * -14 + -2453 * -1 + -2844, I;
    }, w: function(I, f, m, y, w) {
      var S = uo(m);
      f = _e(f), kt(I, { name: f, fromWireType: function(k) {
        return !!k;
      }, toWireType: function(k, G) {
        return G ? y : w;
      }, argPackAdvance: 8, readValueFromPointer: function(k) {
        if (-1209 * -1 + 1213 * 1 + -2421 === m) var G = fe;
        else if (-11819 + 11821 * 1 === m) G = Re;
        else if (7348 + 3 * 883 + -9993 === m) G = ie;
        else throw new TypeError("Unknown boolean type size: " + f);
        return this.fromWireType(G[k >> S]);
      }, ka: null });
    }, h: function(I, f, m, y, w, S, k, G, Z, R, P, V, $) {
      P = _e(P), S = Nt(w, S), G && (G = Nt(k, G)), R && (R = Nt(Z, R)), $ = Nt(V, $);
      var Ae = lo(P);
      si(Ae, function() {
        en("Cannot construct " + P + " due to unbound types", [y]);
      }), m0([I, f, m], y ? [y] : [], function(T) {
        if (T = T[-8739 + -1 * -8739], y) var vt = T.ea, Le = vt.ma;
        else Le = Lt.prototype;
        T = Io(Ae, function() {
          if (Object.getPrototypeOf(this) !== y0) throw new p0("Use 'new' to construct " + P);
          if (void (798 + 233 * 9 + -2895) === W0.la) throw new p0(P + " has no accessible constructor");
          var Gi = W0.la[arguments.length];
          if (void (-1 * -9941 + 2 * -239 + 1 * -9463) === Gi) throw new p0("Tried to invoke ctor of " + P + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(W0.la).toString() + ") parameters instead!");
          return Gi.apply(this, arguments);
        });
        var et = {};
        et.value = T;
        var zt = {};
        zt.constructor = et;
        var y0 = Object.create(Le, zt);
        T.prototype = y0;
        var W0 = new zc(P, T, y0, $, vt, S, G, R);
        vt = new Ht(P, W0, !(1 * -5753 + -9975 + 1966 * 8), !(-1 * -4373 + -448 * -2 + -1 * 5268)), Le = new Ht(P + "*", W0, !(5582 + -19 * 178 + -2199), !1);
        var Bi = new Ht(P + " const*", W0, !(8903 + -23 * -388 + -1 * 17826), !(-667 * 1 + -1772 + 2439)), vo = {};
        return vo.pointerType = Le, vo.za = Bi, ai[I] = vo, gi(Ae, T), [vt, Le, Bi];
      });
    }, g: function(I, f, m, y, w, S) {
      A(1 * 255 + 2 * -391 + 527 * 1 < f);
      var k = li(f, m);
      w = Nt(y, w);
      var G = [S], Z = [];
      m0([], [I], function(R) {
        R = R[-5419 + 2 * 1412 + 15 * 173];
        var P = "constructor " + R.name;
        if (void (1 * -6343 + -1350 + -7693 * -1) === R.ea.la && (R.ea.la = []), void (5015 + -8233 * 1 + 1609 * 2) !== R.ea.la[f - (14 * -137 + -8085 + 10004)]) throw new p0("Cannot register multiple constructors with identical number of parameters (" + (f - (4641 + -619 * 10 + 1550)) + ") for class '" + R.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return R.ea.la[f - (2210 + -400 * -24 + -11809)] = function() {
          en("Cannot construct " + R.name + " due to unbound types", k);
        }, m0([], k, function(V) {
          return R.ea.la[f - (-1 * -7703 + -8 * 1091 + 1 * 1026)] = function() {
            arguments.length !== f - (31 * 223 + -4496 + -2416) && M(P + " called with " + arguments.length + " arguments, expected " + (f - (-5 * -1150 + -17 * 401 + -12 * -89))), Z.length = 260 * -30 + 3515 + 4285, G.length = f;
            for (var $ = 4587 + 1 * -4586; $ < f; ++$) G[$] = V[$].toWireType(Z, arguments[$ - (3767 + -247 * -7 + -5495)]);
            return $ = w.apply(null, G), Mn(Z), V[2718 + -29 * 189 + 2763].fromWireType($);
          }, [];
        }), [];
      });
    }, b: function(I, f, m, y, w, S, k, G, Z, R) {
      f = _e(f), w = Nt(y, w), m0([], [I], function(P) {
        P = P[4881 * 2 + 5413 + -15175];
        var V = P.name + "." + f, $ = { get: function() {
          en("Cannot access " + V + " due to unbound types", [m, k]);
        }, enumerable: !(-1721 * 5 + -8634 + -1 * -17239), configurable: !(359 * -20 + 1 * -2774 + 9954) };
        return Z ? $.set = function() {
          en("Cannot access " + V + " due to unbound types", [m, k]);
        } : $.set = function() {
          M(V + " is a read-only property");
        }, Object.defineProperty(P.ea.ma, f, $), m0([], Z ? [m, k] : [m], function(Ae) {
          var T = Ae[0], vt = { get: function() {
            var et = Ii(this, P, V + " getter");
            return T.fromWireType(w(S, et));
          }, enumerable: !(-1 * 4988 + -2179 + -7167 * -1) };
          if (Z) {
            Z = Nt(G, Z);
            var Le = Ae[1];
            vt.set = function(et) {
              var zt = Ii(this, P, V + " setter"), y0 = [];
              Z(R, zt, Le.toWireType(y0, et)), Mn(y0);
            };
          }
          return Object.defineProperty(P.ea.ma, f, vt), [];
        }), [];
      });
    }, v: function(I, f) {
      f = _e(f), kt(I, { name: f, fromWireType: function(m) {
        var y = st[m].value;
        return bo(m), y;
      }, toWireType: function(m, y) {
        return b0(y);
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: null });
    }, m: function(I, f, m) {
      m = uo(m), f = _e(f), kt(I, { name: f, fromWireType: function(y) {
        return y;
      }, toWireType: function(y, w) {
        if (typeof w != "number" && typeof w != "boolean") throw new TypeError('Cannot convert "' + A0(w) + '" to ' + this.name);
        return w;
      }, argPackAdvance: 8, readValueFromPointer: ng(f, m), ka: null });
    }, c: function(I, f, m, y, w, S) {
      var k = li(f, m);
      I = _e(I), w = Nt(y, w), si(I, function() {
        en("Cannot call " + I + " due to unbound types", k);
      }, f - (3557 + -1778 * 2)), m0([], k, function(G) {
        var Z = I, R = I;
        G = [G[-8 * 958 + -1420 * 3 + -2 * -5962], null].concat(G.slice(-4364 + 15 * 291));
        var P = w, V = G.length;
        1705 * -1 + 6322 + -4615 > V && M("argTypes array size mismatch! Must at least get return value and 'this' types!");
        for (var $ = G[1] !== null && !(-9227 + -5419 * -1 + 3809), Ae = !1, T = -14862 + 167 * 89; T < G.length; ++T) if (G[T] !== null && G[T].ka === void 0) {
          Ae = !(-16047 + 5349 * 3);
          break;
        }
        var vt = G[0].name !== "void", Le = "", et = "";
        for (T = 0; T < V - (1562 * 5 + 1715 + -9523); ++T) Le += (1298 + -11 * 118 !== T ? ", " : "") + "arg" + T, et += (T !== 0 ? ", " : "") + "arg" + T + "Wired";
        R = "return function " + lo(R) + "(" + Le + `) {
if (arguments.length !== ` + (V - (1606 * -6 + 8869 * -1 + 597 * 31)) + `) {
throwBindingError('function ` + R + " called with ' + arguments.length + ' arguments, expected " + (V - (-1531 * -3 + -350 * 20 + -1 * -2409)) + ` args!');
}
`, Ae && (R += `var destructors = [];
`);
        var zt = Ae ? "destructors" : "null";
        for (Le = "throwBindingError invoker fn runDestructors retType classParam".split(" "), P = [M, P, S, Mn, G[-2462 * 1 + -3419 + 1 * 5881], G[1]], $ && (R += "var thisWired = classParam.toWireType(" + zt + `, this);
`), T = -479 * -2 + 9 * -791 + 1 * 6161; T < V - (3193 * 1 + -7208 + 4017); ++T) R += "var arg" + T + "Wired = argType" + T + ".toWireType(" + zt + ", arg" + T + "); // " + G[T + 2].name + `
`, Le.push("argType" + T), P.push(G[T + (-1943 * 2 + -4227 + 8115)]);
        if ($ && (et = "thisWired" + (-8191 * 1 + -5432 * -1 + 2759 * 1 < et.length ? ", " : "") + et), R += (vt ? "var rv = " : "") + "invoker(fn" + (-8703 * 1 + -1 * 4078 + 12781 < et.length ? ", " : "") + et + `);
`, Ae) R += `runDestructors(destructors);
`;
        else
          for (T = $ ? 1152 + -1151 * 1 : -2457 + -2165 * -4 + 6201 * -1; T < G.length; ++T) V = T === 1 ? "thisWired" : "arg" + (T - (2 * -2986 + 6587 + -613)) + "Wired", G[T].ka !== null && (R += V + "_dtor(" + V + "); // " + G[T].name + `
`, Le.push(V + "_dtor"), P.push(G[T].ka));
        return vt && (R += `var ret = retType.fromWireType(rv);
return ret;
`), Le.push(R + `}
`), G = xg(Le).apply(null, P), gi(Z, G, f - (7944 + 2 * 2383 + 71 * -179)), [];
      });
    }, e: function(I, f, m, y, w) {
      function S(R) {
        return R;
      }
      f = _e(f), -(5 * -951 + 4166 * 2 + -3576) === w && (w = -6054233767 + -8103418175 + 18452619237);
      var k = uo(m);
      if (-4 * 1889 + -3 * 2357 + 14627 === y) {
        var G = 32 - 8 * m;
        S = function(R) {
          return R << G >>> G;
        };
      }
      var Z = -(-7680 + 957 * 2 + 1 * 5767) != f.indexOf("unsigned");
      kt(I, { name: f, fromWireType: S, toWireType: function(R, P) {
        if (typeof P != "number" && typeof P != "boolean") throw new TypeError('Cannot convert "' + A0(P) + '" to ' + this.name);
        if (P < y || P > w) throw new TypeError('Passing a number "' + A0(P) + '" from JS side to C/C++ side to an argument of type "' + f + '", which is outside the valid range [' + y + ", " + w + "]!");
        return Z ? P >>> 7102 + -28 * 122 + -3686 : P | 6142 + -402 * 5 + -1033 * 4;
      }, argPackAdvance: 8, readValueFromPointer: og(f, k, -21 * 265 + 4441 * -1 + 10006 !== y), ka: null });
    }, d: function(I, f, m) {
      function y(G) {
        G >>= 2;
        var Z = Pe;
        return new w(U, Z[G + (421 * 23 + -2431 * -4 + 626 * -31)], Z[G]);
      }
      var w = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][f];
      m = _e(m);
      var S = {};
      S.name = m, S.fromWireType = y, S.argPackAdvance = 8, S.readValueFromPointer = y;
      var k = {};
      k.Ea = !(-8 * 155 + 3 * 1515 + -3305), kt(I, S, k);
    }, n: function(I, f) {
      f = _e(f);
      var m = f === "std::string";
      kt(I, { name: f, fromWireType: function(y) {
        var w = Pe[y >> 2];
        if (m) for (var S = y + (1 * 713 + -6218 + 5509), k = 1 * 5890 + 4582 + -2618 * 4; k <= w; ++k) {
          var G = y + 4 + k;
          if (k == w || 7 * -461 + -8544 + -11771 * -1 == Ce[G]) {
            if (S) {
              var Z = S, R = Ce, P = Z + (G - S);
              for (S = Z; R[S] && !(S >= P); ) ++S;
              if (16 < S - Z && R.subarray && u) Z = u.decode(R.subarray(Z, S));
              else {
                for (P = ""; Z < S; ) {
                  var V = R[Z++];
                  if (V & 1865 * 1 + -5806 + -313 * -13) {
                    var $ = R[Z++] & 63;
                    if (-755 * 3 + 1 * 1991 + 466 * 1 == (V & 9123 + -1412 * -6 + -17371)) P += String.fromCharCode((V & 9095 + -88 * 103) << 6 | $);
                    else {
                      var Ae = R[Z++] & 63;
                      V = -3691 * 1 + -2 * 1772 + -1 * -7459 == (V & -636 * 5 + 118 * -63 + -27 * -402) ? (V & 3 * 3233 + 1 * -4610 + -2537 * 2) << 5856 + 19 * -205 + -1949 | $ << 303 + 463 * -8 + -1 * -3407 | Ae : (V & 44 * -109 + -1 * -8231 + -3428) << 8603 + -3461 * -1 + -2 * 6023 | $ << -1307 * 2 + -1 * 3802 + 6428 | Ae << -9980 + -895 * 9 + -18041 * -1 | R[Z++] & -1 * 940 + 7938 + 19 * -365, -5857 * 7 + 52147 * -1 + -318 * -499 > V ? P += String.fromCharCode(V) : (V -= -34502 + 5095 * -13 + 1 * 166273, P += String.fromCharCode(-21823 * 2 + 34888 + 64054 | V >> 151 * 32 + 1 * -3343 + -29 * 51, 56320 | V & -415 * 5 + -115 * -39 + -19 * 73));
                    }
                  } else P += String.fromCharCode(V);
                }
                Z = P;
              }
            } else Z = "";
            if (void (5565 + -7 * 795) === T) var T = Z;
            else T += String.fromCharCode(571 * -7 + 3061 + 936), T += Z;
            S = G + (4348 + -4871 * 1 + 524);
          }
        }
        else {
          for (T = Array(w), k = 2459 + -1 * -1930 + -627 * 7; k < w; ++k) T[k] = String.fromCharCode(Ce[y + (1 * 9053 + 8504 + -17553 * 1) + k]);
          T = T.join("");
        }
        return Ot(y), T;
      }, toWireType: function(y, w) {
        w instanceof ArrayBuffer && (w = new Uint8Array(w));
        var S = typeof w == "string";
        S || w instanceof Uint8Array || w instanceof Uint8ClampedArray || w instanceof Int8Array || M("Cannot pass non-string to std::string");
        var k = (m && S ? function() {
          for (var R = 5 * -1132 + 8058 + -2398, P = 1373 * -3 + -1028 * 8 + 12343; P < w.length; ++P) {
            var V = w.charCodeAt(P);
            -1 * 24617 + 9625 * -7 + 147288 <= V && -1090 * -67 + 1970 * 20 + -55087 >= V && (V = -97630 * 1 + -29798 * -2 + 51785 * 2 + ((V & -188 + 4360 * -2 + 1 * 9931) << -167 * 3 + -919 + 1430) | w.charCodeAt(++P) & 1023), 127 >= V ? ++R : R = -1 * -8534 + -4595 + 43 * -44 >= V ? R + (-6846 + 697 * -2 + -2 * -4121) : -105409 + -1 * 124519 + 295463 >= V ? R + (-4 * -2398 + 6275 * 1 + -15864 * 1) : R + (-3274 * 1 + -49 * -25 + 2053 * 1);
          }
          return R;
        } : function() {
          return w.length;
        })(), G = Jn(8057 * 1 + 5896 + -1073 * 13 + k + (18 * 168 + 8790 + -11813));
        if (Pe[G >> 12004 + 353 * -34] = k, m && S) v(w, G + (1693 * -1 + -9319 + -24 * -459), k + (26 * -310 + 3830 + -1 * -4231));
        else if (S) for (S = 0; S < k; ++S) {
          var Z = w.charCodeAt(S);
          -138 * -42 + -7004 + -77 * -19 < Z && (Ot(G), M("String has UTF-16 code units that do not fit in 8 bits")), Ce[G + (801 + 797 * -1) + S] = Z;
        }
        else
          for (S = -3013 + 1 * 6128 + -3115; S < k; ++S) Ce[G + (-4 * 2006 + 4 * 2164 + -628) + S] = w[S];
        return y !== null && y.push(Ot, G), G;
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: function(y) {
        Ot(y);
      } });
    }, j: function(I, f, m) {
      if (m = _e(m), 22 * -18 + -9234 + 9632 === f) var y = F, w = J, S = Y, k = function() {
        return It;
      }, G = 31 * -113 + -2 * -4241 + -4978;
      else -1921 + -2 * -2383 + -947 * 3 === f && (y = O, w = _, S = Ie, k = function() {
        return Pe;
      }, G = 33 * 27 + -2839 + -13 * -150);
      kt(I, { name: m, fromWireType: function(Z) {
        for (var R = Pe[Z >> -9215 * 1 + -1 * 9353 + -9285 * -2], P = k(), V, $ = Z + (-5569 * 1 + 317 * 22 + 467 * -3), Ae = 0; Ae <= R; ++Ae) {
          var T = Z + 4 + Ae * f;
          (Ae == R || -17242 + -233 * -74 == P[T >> G]) && ($ = y($, T - $), void (3 * 1081 + 2856 + -6099) === V ? V = $ : (V += String.fromCharCode(191 * -39 + 3943 + 3506), V += $), $ = T + f);
        }
        return Ot(Z), V;
      }, toWireType: function(Z, R) {
        typeof R != "string" && M("Cannot pass non-string to C++ string type " + m);
        var P = S(R), V = Jn(-308 + 2 * -2843 + 1 * 5998 + P + f);
        return Pe[V >> -9504 + 769 * 7 + 4123] = P >> G, w(R, V + (-8488 + 1 * 4969 + 3523), P + f), Z !== null && Z.push(Ot, V), V;
      }, argPackAdvance: 8, readValueFromPointer: Yn, ka: function(Z) {
        Ot(Z);
      } });
    }, x: function(I, f) {
      f = _e(f);
      var m = {};
      m.Qa = !(-4 * -667 + 3984 + 2 * -3326), m.name = f, m.argPackAdvance = 0, m.fromWireType = function() {
      }, m.toWireType = function() {
      }, kt(I, m);
    }, k: function(I, f, m) {
      I = Ao(I), f = mi(f, "emval::as");
      var y = [], w = b0(y);
      return ie[m >> -1608 + -503 * 8 + 5634] = w, f.toWireType(y, I);
    }, i: bo, l: function(I, f) {
      return I = Ao(I), f = Ao(f), b0(I[f]);
    }, p: function(I) {
      var f = rg[I];
      return b0(void (125 * -60 + 1 * 4091 + 3409) === f ? _e(I) : f);
    }, o: function(I) {
      Mn(st[I].value), bo(I);
    }, y: function(I, f) {
      return I = mi(I, "_emval_take_value"), I = I.readValueFromPointer(f), b0(I);
    }, f: function() {
      at();
    }, q: function(I, f, m) {
      Ce.copyWithin(I, f, f + m);
    }, r: function(I) {
      I >>>= -6639 * -1 + 2181 * -3 + 48 * -2;
      var f = Ce.length;
      if (-16 * 59383489 + -2885289652 + -5982909124 * -1 < I) return !(-1099 + -2 * -550);
      for (var m = -2067 * -1 + 4097 + -6163 * 1; -8908 + 2228 * 4 >= m; m *= 8903 + -1801 * -4 + -16105) {
        var y = f * (1 + 0.2 / m);
        y = Math.min(y, I + 100663296), y = Math.max(15531552 + 23521 * -547 + 14111651, I, y), 1 * 1783 + -2039 * 1 + -256 * -1 < y % 65536 && (y += -252115 + -317651 * -1 - y % (-1121 * 111 + -47 * -559 + 2 * 81847));
        e: {
          try {
            h.grow(Math.min(-3635977352 + -1 * -2488874726 + 3294586274, y) - U.byteLength + (-101913 + -36613 * -2 + -47111 * -2) >>> -1891 + -1735 * -5 + -188 * 36), Me(h.buffer);
            var w = 4043 * 1 + -9668 + 29 * 194;
            break e;
          } catch {
          }
          w = void (9734 + -1 * 9734);
        }
        if (w) return !(5739 + 3 * -1913);
      }
      return !(-1 * -9915 + 3294 + -13208);
    }, s: function(I, f) {
      var m = 0;
      return Ai().forEach(function(y, w) {
        var S = f + m;
        for (w = ie[I + (-3413 * 1 + 7694 * 1 + -4277) * w >> 2] = S, S = -15 * -643 + 1 * 5153 + -14798; S < y.length; ++S) fe[w++ >> -10394 + 1 * 10394] = y.charCodeAt(S);
        fe[w >> -3273 + 1 * -731 + 4004] = 0, m += y.length + (-1039 * -8 + -1 * 4781 + 10 * -353);
      }), 0;
    }, t: function(I, f) {
      var m = Ai();
      ie[I >> 14 * 2 + 5498 * 1 + 2 * -2762] = m.length;
      var y = 1383 * 5 + 0 + 6915 * -1;
      return m.forEach(function(w) {
        y += w.length + 1;
      }), ie[f >> -1473 * -3 + -1747 * -1 + -2 * 3082] = y, -5 * -1497 + 1 * 5467 + 6476 * -2;
    }, a: h };
    (function() {
      function I(k) {
        k = k.exports, k = Wi(k), t.asm = k, $e--, t.monitorRunDependencies && t.monitorRunDependencies($e), 4288 + 8 * -536 == $e && yt && (k = yt, yt = null, k());
      }
      function f(k) {
        I(k.instance);
      }
      function m(k) {
        return Jc().then(function(G) {
          return WebAssembly.instantiate(G, w);
        }).then(k, function(G) {
          C("failed to asynchronously prepare wasm: " + G), at(G);
        });
      }
      var y = {};
      y.a = ig;
      var w = y;
      if ($e++, t.monitorRunDependencies && t.monitorRunDependencies($e), t.instantiateWasm) try {
        var S = t.instantiateWasm(w, I);
        return S = Wi(S);
      } catch (k) {
        return C("Module.instantiateWasm callback failed with error: " + k), !1;
      }
      return function() {
        if (l || typeof WebAssembly.instantiateStreaming != "function" || Wt() || _t("file://") || typeof fetch != "function") return m(f);
        var k = {};
        k.credentials = "same-origin", fetch(ft, k).then(function(G) {
          return WebAssembly.instantiateStreaming(G, w).then(f, function(Z) {
            return C("wasm streaming compile failed: " + Z), C("falling back to ArrayBuffer instantiation"), m(f);
          });
        });
      }(), {};
    })();
    var wi = t.___wasm_call_ctors = function() {
      return (wi = t.___wasm_call_ctors = t.asm.B).apply(null, arguments);
    }, Jn = t._malloc = function() {
      return (Jn = t._malloc = t.asm.C).apply(null, arguments);
    }, Ot = t._free = function() {
      return (Ot = t._free = t.asm.D).apply(null, arguments);
    }, Si = t.___getTypeName = function() {
      return (Si = t.___getTypeName = t.asm.E).apply(null, arguments);
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
    var _n;
    yt = function I() {
      _n || Wo(), _n || (yt = I);
    };
    function Wo() {
      function I() {
        if (!_n && (_n = !(-133 * -37 + -4395 * 1 + -1 * 526), t.calledRun = !(1 * -8299 + 7028 + 1271), !p)) {
          if (En(be), En(Ee), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) {
            var f = t.postRun.shift();
            Je.unshift(f);
          }
          En(Je);
        }
      }
      if (!(41 * -59 + 4517 + -2098 < $e)) {
        if (t.preRun)
          for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) C0();
        En(je), -1162 + -7 * -166 < $e || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
          setTimeout(function() {
            t.setStatus("");
          }, 1), I();
        }, 3687 * -1 + 1 * 5926 + -2238)) : I());
      }
    }
    if (t.run = Wo, t.preInit)
      for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); 0 < t.preInit.length; ) t.preInit.pop()();
    return Wo(), o.ready;
  };
})();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ac = Symbol("Comlink.proxy"), C1 = Symbol("Comlink.endpoint"), h1 = Symbol("Comlink.releaseProxy"), Vo = Symbol("Comlink.finalizer"), mx = Symbol("Comlink.thrown"), yc = (x) => typeof x == "object" && x !== null || typeof x == "function", p1 = {
  canHandle: (x) => yc(x) && x[Ac],
  serialize(x) {
    const { port1: o, port2: t } = new MessageChannel();
    return vc(x, o), [t, [t]];
  },
  deserialize(x) {
    return x.start(), Sc(x);
  }
}, m1 = {
  canHandle: (x) => yc(x) && mx in x,
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
}, Wc = /* @__PURE__ */ new Map([
  ["proxy", p1],
  ["throw", m1]
]);
function b1(x, o) {
  for (const t of x)
    if (o === t || t === "*" || t instanceof RegExp && t.test(o))
      return !0;
  return !1;
}
function vc(x, o = globalThis, t = ["*"]) {
  o.addEventListener("message", function e(n) {
    if (!n || !n.data)
      return;
    if (!b1(t, n.origin)) {
      console.warn(`Invalid origin '${n.origin}' for comlink proxy`);
      return;
    }
    const { id: r, type: i, path: a } = Object.assign({ path: [] }, n.data), s = (n.data.argumentList || []).map(o0);
    let c;
    try {
      const d = a.slice(0, -1).reduce((C, l) => C[l], x), g = a.reduce((C, l) => C[l], x);
      switch (i) {
        case "GET":
          c = g;
          break;
        case "SET":
          d[a.slice(-1)[0]] = o0(n.data.value), c = !0;
          break;
        case "APPLY":
          c = g.apply(d, s);
          break;
        case "CONSTRUCT":
          {
            const C = new g(...s);
            c = S1(C);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: C, port2: l } = new MessageChannel();
            vc(x, l), c = w1(C, [C]);
          }
          break;
        case "RELEASE":
          c = void 0;
          break;
        default:
          return;
      }
    } catch (d) {
      c = { value: d, [mx]: 0 };
    }
    Promise.resolve(c).catch((d) => ({ value: d, [mx]: 0 })).then((d) => {
      const [g, C] = Yx(d);
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), C), i === "RELEASE" && (o.removeEventListener("message", e), wc(o), Vo in x && typeof x[Vo] == "function" && x[Vo]());
    }).catch((d) => {
      const [g, C] = Yx({
        value: new TypeError("Unserializable return value"),
        [mx]: 0
      });
      o.postMessage(Object.assign(Object.assign({}, g), { id: r }), C);
    });
  }), o.start && o.start();
}
function A1(x) {
  return x.constructor.name === "MessagePort";
}
function wc(x) {
  A1(x) && x.close();
}
function Sc(x, o) {
  return pr(x, [], o);
}
function nx(x) {
  if (x)
    throw new Error("Proxy has been released and is not useable");
}
function Bc(x) {
  return H0(x, {
    type: "RELEASE"
  }).then(() => {
    wc(x);
  });
}
const Dx = /* @__PURE__ */ new WeakMap(), Fx = "FinalizationRegistry" in globalThis && new FinalizationRegistry((x) => {
  const o = (Dx.get(x) || 0) - 1;
  Dx.set(x, o), o === 0 && Bc(x);
});
function y1(x, o) {
  const t = (Dx.get(o) || 0) + 1;
  Dx.set(o, t), Fx && Fx.register(x, o, x);
}
function W1(x) {
  Fx && Fx.unregister(x);
}
function pr(x, o = [], t = function() {
}) {
  let e = !1;
  const n = new Proxy(t, {
    get(r, i) {
      if (nx(e), i === h1)
        return () => {
          W1(n), Bc(x), e = !0;
        };
      if (i === "then") {
        if (o.length === 0)
          return { then: () => n };
        const a = H0(x, {
          type: "GET",
          path: o.map((s) => s.toString())
        }).then(o0);
        return a.then.bind(a);
      }
      return pr(x, [...o, i]);
    },
    set(r, i, a) {
      nx(e);
      const [s, c] = Yx(a);
      return H0(x, {
        type: "SET",
        path: [...o, i].map((d) => d.toString()),
        value: s
      }, c).then(o0);
    },
    apply(r, i, a) {
      nx(e);
      const s = o[o.length - 1];
      if (s === C1)
        return H0(x, {
          type: "ENDPOINT"
        }).then(o0);
      if (s === "bind")
        return pr(x, o.slice(0, -1));
      const [c, d] = va(a);
      return H0(x, {
        type: "APPLY",
        path: o.map((g) => g.toString()),
        argumentList: c
      }, d).then(o0);
    },
    construct(r, i) {
      nx(e);
      const [a, s] = va(i);
      return H0(x, {
        type: "CONSTRUCT",
        path: o.map((c) => c.toString()),
        argumentList: a
      }, s).then(o0);
    }
  });
  return y1(n, x), n;
}
function v1(x) {
  return Array.prototype.concat.apply([], x);
}
function va(x) {
  const o = x.map(Yx);
  return [o.map((t) => t[0]), v1(o.map((t) => t[1]))];
}
const Gc = /* @__PURE__ */ new WeakMap();
function w1(x, o) {
  return Gc.set(x, o), x;
}
function S1(x) {
  return Object.assign(x, { [Ac]: !0 });
}
function Yx(x) {
  for (const [o, t] of Wc)
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
    Gc.get(x) || []
  ];
}
function o0(x) {
  switch (x.type) {
    case "HANDLER":
      return Wc.get(x.name).deserialize(x.value);
    case "RAW":
      return x.value;
  }
}
function H0(x, o, t) {
  return new Promise((e) => {
    const n = B1();
    x.addEventListener("message", function r(i) {
      !i.data || !i.data.id || i.data.id !== n || (x.removeEventListener("message", r), e(i.data));
    }), x.start && x.start(), x.postMessage(Object.assign({ id: n }, o), t);
  });
}
function B1() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const kc = "dmFyIGNlID0gT2JqZWN0LmRlZmluZVByb3BlcnR5Owp2YXIgbGUgPSAoYSwgdSwgZSkgPT4gdSBpbiBhID8gY2UoYSwgdSwgeyBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwLCB2YWx1ZTogZSB9KSA6IGFbdV0gPSBlOwp2YXIgWW4gPSAoYSwgdSwgZSkgPT4gbGUoYSwgdHlwZW9mIHUgIT0gInN5bWJvbCIgPyB1ICsgIiIgOiB1LCBlKTsKY29uc3Qga3QgPSB7CiAgc2ltZDogInNhbV9zaW1kLndhc20iLAogIHNhbTogInNhbS53YXNtIgp9LCBmZSA9IGFzeW5jICgpID0+IFdlYkFzc2VtYmx5LnZhbGlkYXRlKG5ldyBVaW50OEFycmF5KFswLCA5NywgMTE1LCAxMDksIDEsIDAsIDAsIDAsIDEsIDUsIDEsIDk2LCAwLCAxLCAxMjMsIDMsIDIsIDEsIDAsIDEwLCAxMCwgMSwgOCwgMCwgNjUsIDAsIDI1MywgMTUsIDI1MywgOTgsIDExXSkpOwpjbGFzcyBJIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKGUsIG0pIHsKICAgIHN1cGVyKGUpOwogICAgWW4odGhpcywgImNhdXNlIik7CiAgICB0aGlzLm5hbWUgPSAiQXV0b0NhcHR1cmVFcnJvciIsIHRoaXMuY2F1c2UgPSBtOwogIH0KICAvLyBDaGFuZ2UgdGhpcyB0byBEZWNvcmF0b3Igd2hlbiB0aGV5IHdpbGwgYmUgaW4gc3RhYmxlIHJlbGVhc2UKICBzdGF0aWMgbG9nRXJyb3IoZSkgewogIH0KICBzdGF0aWMgZnJvbUNhbWVyYUVycm9yKGUpIHsKICAgIGlmICh0aGlzLmxvZ0Vycm9yKGUpLCBlIGluc3RhbmNlb2YgSSkKICAgICAgcmV0dXJuIGU7CiAgICBsZXQgbTsKICAgIHN3aXRjaCAoZS5uYW1lKSB7CiAgICAgIGNhc2UgIk92ZXJjb25zdHJhaW5lZEVycm9yIjoKICAgICAgICBtID0gIk1pbmltdW0gcXVhbGl0eSByZXF1aXJlbWVudHMgYXJlIG5vdCBtZXQgYnkgeW91ciBjYW1lcmEiOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RSZWFkYWJsZUVycm9yIjoKICAgICAgY2FzZSAiQWJvcnRFcnJvciI6CiAgICAgICAgbSA9ICJUaGUgd2ViY2FtIGlzIGFscmVhZHkgaW4gdXNlIGJ5IGFub3RoZXIgYXBwbGljYXRpb24iOwogICAgICAgIGJyZWFrOwogICAgICBjYXNlICJOb3RBbGxvd2VkRXJyb3IiOgogICAgICAgIG0gPSAiVG8gdXNlIHlvdXIgY2FtZXJhLCB5b3UgbXVzdCBhbGxvdyBwZXJtaXNzaW9ucyI7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgIk5vdEZvdW5kRXJyb3IiOgogICAgICAgIG0gPSAiVGhlcmUgaXMgbm8gY2FtZXJhIGF2YWlsYWJsZSB0byB5b3UiOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIG0gPSAiQW4gdW5rbm93biBjYW1lcmEgZXJyb3IgaGFzIG9jY3VycmVkIjsKICAgICAgICBicmVhazsKICAgIH0KICAgIHJldHVybiBuZXcgSShtLCBlKTsKICB9CiAgc3RhdGljIGZyb21FcnJvcihlKSB7CiAgICBpZiAodGhpcy5sb2dFcnJvcihlKSwgZSBpbnN0YW5jZW9mIEkpCiAgICAgIHJldHVybiBlOwogICAgY29uc3QgbSA9ICJBbiB1bmV4cGVjdGVkIGVycm9yIGhhcyBvY2N1cnJlZCI7CiAgICByZXR1cm4gbmV3IEkobSk7CiAgfQp9CmNvbnN0IGRlID0gewogIFJHQjogIlJHQiIsCiAgUkdCQTogIlJHQkEiCn0sIGhlID0gKGEpID0+IE51bWJlci5wYXJzZUZsb2F0KGEudG9GaXhlZCgzKSksIHllID0gKGEsIHUpID0+IE1hdGgubWluKGEsIHUpOwp2YXIgcGUgPSBmdW5jdGlvbigpIHsKICB2YXIgYSA9IHR5cGVvZiBkb2N1bWVudCA8ICJ1IiAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ID8gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMgOiB2b2lkIDA7CiAgcmV0dXJuIGZ1bmN0aW9uKHUpIHsKICAgIHUgPSB1IHx8IHt9OwogICAgdmFyIGU7CiAgICBlIHx8IChlID0gdHlwZW9mIHUgPCAidSIgPyB1IDoge30pOwogICAgdmFyIG0sIGc7CiAgICBlLnJlYWR5ID0gbmV3IFByb21pc2UoZnVuY3Rpb24obiwgdCkgewogICAgICBtID0gbiwgZyA9IHQ7CiAgICB9KTsKICAgIHZhciBDID0ge30sIEE7CiAgICBmb3IgKEEgaW4gZSkgZS5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoQ1tBXSA9IGVbQV0pOwogICAgdmFyIE0gPSAiLi90aGlzLnByb2dyYW0iLCBPID0gITEsIFQgPSAhMTsKICAgIE8gPSB0eXBlb2Ygd2luZG93ID09ICJvYmplY3QiLCBUID0gdHlwZW9mIGltcG9ydFNjcmlwdHMgPT0gImZ1bmN0aW9uIjsKICAgIHZhciBfID0gIiIsIFM7CiAgICAoTyB8fCBUKSAmJiAoVCA/IF8gPSBzZWxmLmxvY2F0aW9uLmhyZWYgOiBkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIChfID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmMpLCBhICYmIChfID0gYSksIF8uaW5kZXhPZigiYmxvYjoiKSAhPT0gMCA/IF8gPSBfLnN1YnN0cigwLCBfLmxhc3RJbmRleE9mKCIvIikgKyAxKSA6IF8gPSAiIiwgVCAmJiAoUyA9IGZ1bmN0aW9uKG4pIHsKICAgICAgdmFyIHQgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTsKICAgICAgcmV0dXJuIHQub3BlbigiR0VUIiwgbiwgITEpLCB0LnJlc3BvbnNlVHlwZSA9ICJhcnJheWJ1ZmZlciIsIHQuc2VuZChudWxsKSwgbmV3IFVpbnQ4QXJyYXkodC5yZXNwb25zZSk7CiAgICB9KSk7CiAgICB2YXIgRSA9IGUucHJpbnRFcnIgfHwgY29uc29sZS53YXJuLmJpbmQoY29uc29sZSk7CiAgICBmb3IgKEEgaW4gQykgQy5oYXNPd25Qcm9wZXJ0eShBKSAmJiAoZVtBXSA9IENbQV0pOwogICAgQyA9IG51bGwsIGUudGhpc1Byb2dyYW0gJiYgKE0gPSBlLnRoaXNQcm9ncmFtKTsKICAgIHZhciBXOwogICAgZS53YXNtQmluYXJ5ICYmIChXID0gZS53YXNtQmluYXJ5KSwgZS5ub0V4aXRSdW50aW1lICYmIGUubm9FeGl0UnVudGltZSwgdHlwZW9mIFdlYkFzc2VtYmx5ICE9ICJvYmplY3QiICYmIHNuKCJubyBuYXRpdmUgd2FzbSBzdXBwb3J0IGRldGVjdGVkIik7CiAgICB2YXIgSCwga24gPSAhMTsKICAgIGZ1bmN0aW9uIEtuKG4pIHsKICAgICAgbiB8fCBzbigiQXNzZXJ0aW9uIGZhaWxlZDogdW5kZWZpbmVkIik7CiAgICB9CiAgICB2YXIgUW4gPSB0eXBlb2YgVGV4dERlY29kZXIgPCAidSIgPyBuZXcgVGV4dERlY29kZXIoInV0ZjgiKSA6IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFV0KG4sIHQsIHIpIHsKICAgICAgdmFyIGkgPSBGOwogICAgICBpZiAoMCA8IHIpIHsKICAgICAgICByID0gdCArIHIgLSAxOwogICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgbi5sZW5ndGg7ICsrbykgewogICAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgICBpZiAoNTUyOTYgPD0gcyAmJiA1NzM0MyA+PSBzKSB7CiAgICAgICAgICAgIHZhciBsID0gbi5jaGFyQ29kZUF0KCsrbyk7CiAgICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgICAgfQogICAgICAgICAgaWYgKDEyNyA+PSBzKSB7CiAgICAgICAgICAgIGlmICh0ID49IHIpIGJyZWFrOwogICAgICAgICAgICBpW3QrK10gPSBzOwogICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgaWYgKDIwNDcgPj0gcykgewogICAgICAgICAgICAgIGlmICh0ICsgMSA+PSByKSBicmVhazsKICAgICAgICAgICAgICBpW3QrK10gPSAxOTIgfCBzID4+IDY7CiAgICAgICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgICAgaWYgKDY1NTM1ID49IHMpIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMiA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDIyNCB8IHMgPj4gMTI7CiAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgIGlmICh0ICsgMyA+PSByKSBicmVhazsKICAgICAgICAgICAgICAgIGlbdCsrXSA9IDI0MCB8IHMgPj4gMTgsIGlbdCsrXSA9IDEyOCB8IHMgPj4gMTIgJiA2MzsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyA+PiA2ICYgNjM7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgaVt0KytdID0gMTI4IHwgcyAmIDYzOwogICAgICAgICAgfQogICAgICAgIH0KICAgICAgICBpW3RdID0gMDsKICAgICAgfQogICAgfQogICAgdmFyIHFuID0gdHlwZW9mIFRleHREZWNvZGVyIDwgInUiID8gbmV3IFRleHREZWNvZGVyKCJ1dGYtMTZsZSIpIDogdm9pZCAwOwogICAgZnVuY3Rpb24gRHQobiwgdCkgewogICAgICBmb3IgKHZhciByID0gbiA+PiAxLCBpID0gciArIHQgLyAyOyAhKHIgPj0gaSkgJiYgeW5bcl07ICkgKytyOwogICAgICBpZiAociA8PD0gMSwgMzIgPCByIC0gbiAmJiBxbikgcmV0dXJuIHFuLmRlY29kZShGLnN1YmFycmF5KG4sIHIpKTsKICAgICAgZm9yIChyID0gMCwgaSA9ICIiOyA7ICkgewogICAgICAgIHZhciBvID0gUVtuICsgMiAqIHIgPj4gMV07CiAgICAgICAgaWYgKG8gPT0gMCB8fCByID09IHQgLyAyKSByZXR1cm4gaTsKICAgICAgICArK3IsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gQnQobiwgdCwgcikgewogICAgICBpZiAociA9PT0gdm9pZCAwICYmIChyID0gMjE0NzQ4MzY0NyksIDIgPiByKSByZXR1cm4gMDsKICAgICAgciAtPSAyOwogICAgICB2YXIgaSA9IHQ7CiAgICAgIHIgPSByIDwgMiAqIG4ubGVuZ3RoID8gciAvIDIgOiBuLmxlbmd0aDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCByOyArK28pIFFbdCA+PiAxXSA9IG4uY2hhckNvZGVBdChvKSwgdCArPSAyOwogICAgICByZXR1cm4gUVt0ID4+IDFdID0gMCwgdCAtIGk7CiAgICB9CiAgICBmdW5jdGlvbiB6dChuKSB7CiAgICAgIHJldHVybiAyICogbi5sZW5ndGg7CiAgICB9CiAgICBmdW5jdGlvbiBWdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSAwLCBpID0gIiI7ICEociA+PSB0IC8gNCk7ICkgewogICAgICAgIHZhciBvID0ga1tuICsgNCAqIHIgPj4gMl07CiAgICAgICAgaWYgKG8gPT0gMCkgYnJlYWs7CiAgICAgICAgKytyLCA2NTUzNiA8PSBvID8gKG8gLT0gNjU1MzYsIGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiB8IG8gPj4gMTAsIDU2MzIwIHwgbyAmIDEwMjMpKSA6IGkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShvKTsKICAgICAgfQogICAgICByZXR1cm4gaTsKICAgIH0KICAgIGZ1bmN0aW9uIEd0KG4sIHQsIHIpIHsKICAgICAgaWYgKHIgPT09IHZvaWQgMCAmJiAociA9IDIxNDc0ODM2NDcpLCA0ID4gcikgcmV0dXJuIDA7CiAgICAgIHZhciBpID0gdDsKICAgICAgciA9IGkgKyByIC0gNDsKICAgICAgZm9yICh2YXIgbyA9IDA7IG8gPCBuLmxlbmd0aDsgKytvKSB7CiAgICAgICAgdmFyIHMgPSBuLmNoYXJDb2RlQXQobyk7CiAgICAgICAgaWYgKDU1Mjk2IDw9IHMgJiYgNTczNDMgPj0gcykgewogICAgICAgICAgdmFyIGwgPSBuLmNoYXJDb2RlQXQoKytvKTsKICAgICAgICAgIHMgPSA2NTUzNiArICgocyAmIDEwMjMpIDw8IDEwKSB8IGwgJiAxMDIzOwogICAgICAgIH0KICAgICAgICBpZiAoa1t0ID4+IDJdID0gcywgdCArPSA0LCB0ICsgNCA+IHIpIGJyZWFrOwogICAgICB9CiAgICAgIHJldHVybiBrW3QgPj4gMl0gPSAwLCB0IC0gaTsKICAgIH0KICAgIGZ1bmN0aW9uIFl0KG4pIHsKICAgICAgZm9yICh2YXIgdCA9IDAsIHIgPSAwOyByIDwgbi5sZW5ndGg7ICsrcikgewogICAgICAgIHZhciBpID0gbi5jaGFyQ29kZUF0KHIpOwogICAgICAgIDU1Mjk2IDw9IGkgJiYgNTczNDMgPj0gaSAmJiArK3IsIHQgKz0gNDsKICAgICAgfQogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBLLCBZLCBGLCBRLCB5biwgaywgVSwgbnQsIHR0OwogICAgZnVuY3Rpb24gZXQobikgewogICAgICBLID0gbiwgZS5IRUFQOCA9IFkgPSBuZXcgSW50OEFycmF5KG4pLCBlLkhFQVAxNiA9IFEgPSBuZXcgSW50MTZBcnJheShuKSwgZS5IRUFQMzIgPSBrID0gbmV3IEludDMyQXJyYXkobiksIGUuSEVBUFU4ID0gRiA9IG5ldyBVaW50OEFycmF5KG4pLCBlLkhFQVBVMTYgPSB5biA9IG5ldyBVaW50MTZBcnJheShuKSwgZS5IRUFQVTMyID0gVSA9IG5ldyBVaW50MzJBcnJheShuKSwgZS5IRUFQRjMyID0gbnQgPSBuZXcgRmxvYXQzMkFycmF5KG4pLCBlLkhFQVBGNjQgPSB0dCA9IG5ldyBGbG9hdDY0QXJyYXkobik7CiAgICB9CiAgICB2YXIgcnQgPSBlLklOSVRJQUxfTUVNT1JZIHx8IDE2Nzc3MjE2OwogICAgZS53YXNtTWVtb3J5ID8gSCA9IGUud2FzbU1lbW9yeSA6IEggPSBuZXcgV2ViQXNzZW1ibHkuTWVtb3J5KHsgaW5pdGlhbDogcnQgLyA2NTUzNiwgbWF4aW11bTogMzI3NjggfSksIEggJiYgKEsgPSBILmJ1ZmZlciksIHJ0ID0gSy5ieXRlTGVuZ3RoLCBldChLKTsKICAgIHZhciBpdCA9IFtdLCBhdCA9IFtdLCBadCA9IFtdLCBvdCA9IFtdOwogICAgZnVuY3Rpb24gJHQoKSB7CiAgICAgIHZhciBuID0gZS5wcmVSdW4uc2hpZnQoKTsKICAgICAgaXQudW5zaGlmdChuKTsKICAgIH0KICAgIHZhciBaID0gMCwgb24gPSBudWxsOwogICAgZS5wcmVsb2FkZWRJbWFnZXMgPSB7fSwgZS5wcmVsb2FkZWRBdWRpb3MgPSB7fTsKICAgIGZ1bmN0aW9uIHNuKG4pIHsKICAgICAgdGhyb3cgZS5vbkFib3J0ICYmIGUub25BYm9ydChuKSwgRShuKSwga24gPSAhMCwgbiA9IG5ldyBXZWJBc3NlbWJseS5SdW50aW1lRXJyb3IoImFib3J0KCIgKyBuICsgIikuIEJ1aWxkIHdpdGggLXMgQVNTRVJUSU9OUz0xIGZvciBtb3JlIGluZm8uIiksIGcobiksIG47CiAgICB9CiAgICBmdW5jdGlvbiBSbihuKSB7CiAgICAgIHZhciB0ID0gJDsKICAgICAgcmV0dXJuIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA/IHQuc3RhcnRzV2l0aChuKSA6IHQuaW5kZXhPZihuKSA9PT0gMDsKICAgIH0KICAgIGZ1bmN0aW9uIHN0KCkgewogICAgICByZXR1cm4gUm4oImRhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCwiKTsKICAgIH0KICAgIHZhciAkID0gInNhbS53YXNtIjsKICAgIGlmICghc3QoKSkgewogICAgICB2YXIgdXQgPSAkOwogICAgICAkID0gZS5sb2NhdGVGaWxlID8gZS5sb2NhdGVGaWxlKHV0LCBfKSA6IF8gKyB1dDsKICAgIH0KICAgIGZ1bmN0aW9uIGN0KCkgewogICAgICB0cnkgewogICAgICAgIGlmIChXKSByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoVyk7CiAgICAgICAgaWYgKFMpIHJldHVybiBTKCQpOwogICAgICAgIHRocm93ICJib3RoIGFzeW5jIGFuZCBzeW5jIGZldGNoaW5nIG9mIHRoZSB3YXNtIGZhaWxlZCI7CiAgICAgIH0gY2F0Y2ggKG4pIHsKICAgICAgICBzbihuKTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gWHQoKSB7CiAgICAgIHJldHVybiBXIHx8ICFPICYmICFUIHx8IHR5cGVvZiBmZXRjaCAhPSAiZnVuY3Rpb24iIHx8IFJuKCJmaWxlOi8vIikgPyBQcm9taXNlLnJlc29sdmUoKS50aGVuKGN0KSA6IGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihuKSB7CiAgICAgICAgaWYgKCFuLm9rKSB0aHJvdyAiZmFpbGVkIHRvIGxvYWQgd2FzbSBiaW5hcnkgZmlsZSBhdCAnIiArICQgKyAiJyI7CiAgICAgICAgcmV0dXJuIG4uYXJyYXlCdWZmZXIoKTsKICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oKSB7CiAgICAgICAgcmV0dXJuIGN0KCk7CiAgICAgIH0pOwogICAgfQogICAgZnVuY3Rpb24gcG4obikgewogICAgICBmb3IgKDsgMCA8IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4uc2hpZnQoKTsKICAgICAgICBpZiAodHlwZW9mIHQgPT0gImZ1bmN0aW9uIikgdChlKTsKICAgICAgICBlbHNlIHsKICAgICAgICAgIHZhciByID0gdC5CYTsKICAgICAgICAgIHR5cGVvZiByID09ICJudW1iZXIiID8gdC50YSA9PT0gdm9pZCAwID8geG4oInYiLCByKSgpIDogeG4oInZpIiwgcikodC50YSkgOiByKHQudGEgPT09IHZvaWQgMCA/IG51bGwgOiB0LnRhKTsKICAgICAgICB9CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHhuKG4sIHQpIHsKICAgICAgdmFyIHIgPSBbXTsKICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkgewogICAgICAgIHIubGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsKICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgcltpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICByZXR1cm4gciAmJiByLmxlbmd0aCA/IGVbImR5bkNhbGxfIiArIG5dLmFwcGx5KG51bGwsIFt0XS5jb25jYXQocikpIDogZVsiZHluQ2FsbF8iICsgbl0uY2FsbChudWxsLCB0KTsKICAgICAgfTsKICAgIH0KICAgIGZ1bmN0aW9uIEp0KG4pIHsKICAgICAgdGhpcy5kYSA9IG4gLSAxNiwgdGhpcy5PYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyA4ID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5MYSA9IGZ1bmN0aW9uKHQpIHsKICAgICAgICBrW3RoaXMuZGEgKyAwID4+IDJdID0gdDsKICAgICAgfSwgdGhpcy5NYSA9IGZ1bmN0aW9uKCkgewogICAgICAgIGtbdGhpcy5kYSArIDQgPj4gMl0gPSAwOwogICAgICB9LCB0aGlzLkthID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTIgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLk5hID0gZnVuY3Rpb24oKSB7CiAgICAgICAgWVt0aGlzLmRhICsgMTMgPj4gMF0gPSAwOwogICAgICB9LCB0aGlzLkZhID0gZnVuY3Rpb24odCwgcikgewogICAgICAgIHRoaXMuT2EodCksIHRoaXMuTGEociksIHRoaXMuTWEoKSwgdGhpcy5LYSgpLCB0aGlzLk5hKCk7CiAgICAgIH07CiAgICB9CiAgICBmdW5jdGlvbiBtbigpIHsKICAgICAgcmV0dXJuIDAgPCBtbi54YTsKICAgIH0KICAgIGZ1bmN0aW9uIEZuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgcmV0dXJuIDA7CiAgICAgICAgY2FzZSAyOgogICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgY2FzZSA0OgogICAgICAgICAgcmV0dXJuIDI7CiAgICAgICAgY2FzZSA4OgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gdHlwZSBzaXplOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIHZhciBsdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIFIobikgewogICAgICBmb3IgKHZhciB0ID0gIiI7IEZbbl07ICkgdCArPSBsdFtGW24rK11dOwogICAgICByZXR1cm4gdDsKICAgIH0KICAgIHZhciBxID0ge30sIFggPSB7fSwgdm4gPSB7fTsKICAgIGZ1bmN0aW9uIEluKG4pIHsKICAgICAgaWYgKG4gPT09IHZvaWQgMCkgcmV0dXJuICJfdW5rbm93biI7CiAgICAgIG4gPSBuLnJlcGxhY2UoL1teYS16QS1aMC05X10vZywgIiQiKTsKICAgICAgdmFyIHQgPSBuLmNoYXJDb2RlQXQoMCk7CiAgICAgIHJldHVybiA0OCA8PSB0ICYmIDU3ID49IHQgPyAiXyIgKyBuIDogbjsKICAgIH0KICAgIGZ1bmN0aW9uIGpuKG4sIHQpIHsKICAgICAgcmV0dXJuIG4gPSBJbihuKSwgbmV3IEZ1bmN0aW9uKCJib2R5IiwgInJldHVybiBmdW5jdGlvbiAiICsgbiArIGAoKSB7CiAgICAidXNlIHN0cmljdCI7ICAgIHJldHVybiBib2R5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7Cn07CmApKHQpOwogICAgfQogICAgZnVuY3Rpb24gTG4obikgewogICAgICB2YXIgdCA9IEVycm9yLCByID0gam4obiwgZnVuY3Rpb24oaSkgewogICAgICAgIHRoaXMubmFtZSA9IG4sIHRoaXMubWVzc2FnZSA9IGksIGkgPSBFcnJvcihpKS5zdGFjaywgaSAhPT0gdm9pZCAwICYmICh0aGlzLnN0YWNrID0gdGhpcy50b1N0cmluZygpICsgYApgICsgaS5yZXBsYWNlKC9eRXJyb3IoOlteXG5dKik/XG4vLCAiIikpOwogICAgICB9KTsKICAgICAgcmV0dXJuIHIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSksIHIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gciwgci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsKICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlID09PSB2b2lkIDAgPyB0aGlzLm5hbWUgOiB0aGlzLm5hbWUgKyAiOiAiICsgdGhpcy5tZXNzYWdlOwogICAgICB9LCByOwogICAgfQogICAgdmFyIG5uID0gdm9pZCAwOwogICAgZnVuY3Rpb24gdihuKSB7CiAgICAgIHRocm93IG5ldyBubihuKTsKICAgIH0KICAgIHZhciBmdCA9IHZvaWQgMDsKICAgIGZ1bmN0aW9uIGduKG4pIHsKICAgICAgdGhyb3cgbmV3IGZ0KG4pOwogICAgfQogICAgZnVuY3Rpb24gdG4obiwgdCwgcikgewogICAgICBmdW5jdGlvbiBpKGMpIHsKICAgICAgICBjID0gcihjKSwgYy5sZW5ndGggIT09IG4ubGVuZ3RoICYmIGduKCJNaXNtYXRjaGVkIHR5cGUgY29udmVydGVyIGNvdW50Iik7CiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBuLmxlbmd0aDsgKyt5KSBEKG5beV0sIGNbeV0pOwogICAgICB9CiAgICAgIG4uZm9yRWFjaChmdW5jdGlvbihjKSB7CiAgICAgICAgdm5bY10gPSB0OwogICAgICB9KTsKICAgICAgdmFyIG8gPSBBcnJheSh0Lmxlbmd0aCksIHMgPSBbXSwgbCA9IDA7CiAgICAgIHQuZm9yRWFjaChmdW5jdGlvbihjLCB5KSB7CiAgICAgICAgWC5oYXNPd25Qcm9wZXJ0eShjKSA/IG9beV0gPSBYW2NdIDogKHMucHVzaChjKSwgcS5oYXNPd25Qcm9wZXJ0eShjKSB8fCAocVtjXSA9IFtdKSwgcVtjXS5wdXNoKGZ1bmN0aW9uKCkgewogICAgICAgICAgb1t5XSA9IFhbY10sICsrbCwgbCA9PT0gcy5sZW5ndGggJiYgaShvKTsKICAgICAgICB9KSk7CiAgICAgIH0pLCBzLmxlbmd0aCA9PT0gMCAmJiBpKG8pOwogICAgfQogICAgZnVuY3Rpb24gRChuLCB0LCByKSB7CiAgICAgIGlmIChyID0gciB8fCB7fSwgISgiYXJnUGFja0FkdmFuY2UiIGluIHQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCJyZWdpc3RlclR5cGUgcmVnaXN0ZXJlZEluc3RhbmNlIHJlcXVpcmVzIGFyZ1BhY2tBZHZhbmNlIik7CiAgICAgIHZhciBpID0gdC5uYW1lOwogICAgICBpZiAobiB8fCB2KCd0eXBlICInICsgaSArICciIG11c3QgaGF2ZSBhIHBvc2l0aXZlIGludGVnZXIgdHlwZWlkIHBvaW50ZXInKSwgWC5oYXNPd25Qcm9wZXJ0eShuKSkgewogICAgICAgIGlmIChyLkVhKSByZXR1cm47CiAgICAgICAgdigiQ2Fubm90IHJlZ2lzdGVyIHR5cGUgJyIgKyBpICsgIicgdHdpY2UiKTsKICAgICAgfQogICAgICBYW25dID0gdCwgZGVsZXRlIHZuW25dLCBxLmhhc093blByb3BlcnR5KG4pICYmICh0ID0gcVtuXSwgZGVsZXRlIHFbbl0sIHQuZm9yRWFjaChmdW5jdGlvbihvKSB7CiAgICAgICAgbygpOwogICAgICB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBLdChuKSB7CiAgICAgIHJldHVybiB7IGNvdW50OiBuLmNvdW50LCBvYTogbi5vYSwgcGE6IG4ucGEsIGRhOiBuLmRhLCBmYTogbi5mYSwgZ2E6IG4uZ2EsIGhhOiBuLmhhIH07CiAgICB9CiAgICBmdW5jdGlvbiBObihuKSB7CiAgICAgIHYobi5BLmZhLmVhLm5hbWUgKyAiIGluc3RhbmNlIGFscmVhZHkgZGVsZXRlZCIpOwogICAgfQogICAgdmFyIEhuID0gITE7CiAgICBmdW5jdGlvbiBkdCgpIHsKICAgIH0KICAgIGZ1bmN0aW9uIGh0KG4pIHsKICAgICAgLS1uLmNvdW50LnZhbHVlLCBuLmNvdW50LnZhbHVlID09PSAwICYmIChuLmdhID8gbi5oYS5uYShuLmdhKSA6IG4uZmEuZWEubmEobi5kYSkpOwogICAgfQogICAgZnVuY3Rpb24gdW4obikgewogICAgICByZXR1cm4gdHlwZW9mIEZpbmFsaXphdGlvbkdyb3VwID4gInUiID8gKHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiB0OwogICAgICB9LCBuKSA6IChIbiA9IG5ldyBGaW5hbGl6YXRpb25Hcm91cChmdW5jdGlvbih0KSB7CiAgICAgICAgZm9yICh2YXIgciA9IHQubmV4dCgpOyAhci5kb25lOyByID0gdC5uZXh0KCkpIHIgPSByLnZhbHVlLCByLmRhID8gaHQocikgOiBjb25zb2xlLndhcm4oIm9iamVjdCBhbHJlYWR5IGRlbGV0ZWQ6ICIgKyByLmRhKTsKICAgICAgfSksIHVuID0gZnVuY3Rpb24odCkgewogICAgICAgIHJldHVybiBIbi5yZWdpc3Rlcih0LCB0LkEsIHQuQSksIHQ7CiAgICAgIH0sIGR0ID0gZnVuY3Rpb24odCkgewogICAgICAgIEhuLnVucmVnaXN0ZXIodC5BKTsKICAgICAgfSwgdW4obikpOwogICAgfQogICAgdmFyIGNuID0gdm9pZCAwLCBsbiA9IFtdOwogICAgZnVuY3Rpb24gVW4oKSB7CiAgICAgIGZvciAoOyBsbi5sZW5ndGg7ICkgewogICAgICAgIHZhciBuID0gbG4ucG9wKCk7CiAgICAgICAgbi5BLm9hID0gITEsIG4uZGVsZXRlKCk7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIFYoKSB7CiAgICB9CiAgICB2YXIgeXQgPSB7fTsKICAgIGZ1bmN0aW9uIFF0KG4sIHQpIHsKICAgICAgdmFyIHIgPSBlOwogICAgICBpZiAocltuXS5qYSA9PT0gdm9pZCAwKSB7CiAgICAgICAgdmFyIGkgPSByW25dOwogICAgICAgIHJbbl0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiByW25dLmphLmhhc093blByb3BlcnR5KGFyZ3VtZW50cy5sZW5ndGgpIHx8IHYoIkZ1bmN0aW9uICciICsgdCArICInIGNhbGxlZCB3aXRoIGFuIGludmFsaWQgbnVtYmVyIG9mIGFyZ3VtZW50cyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdHMgb25lIG9mICgiICsgcltuXS5qYSArICIpISIpLCByW25dLmphW2FyZ3VtZW50cy5sZW5ndGhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfSwgcltuXS5qYSA9IFtdLCByW25dLmphW2kueWFdID0gaTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gcHQobiwgdCwgcikgewogICAgICBlLmhhc093blByb3BlcnR5KG4pID8gKChyID09PSB2b2lkIDAgfHwgZVtuXS5qYSAhPT0gdm9pZCAwICYmIGVbbl0uamFbcl0gIT09IHZvaWQgMCkgJiYgdigiQ2Fubm90IHJlZ2lzdGVyIHB1YmxpYyBuYW1lICciICsgbiArICInIHR3aWNlIiksIFF0KG4sIG4pLCBlLmhhc093blByb3BlcnR5KHIpICYmIHYoIkNhbm5vdCByZWdpc3RlciBtdWx0aXBsZSBvdmVybG9hZHMgb2YgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgKCIgKyByICsgIikhIiksIGVbbl0uamFbcl0gPSB0KSA6IChlW25dID0gdCwgciAhPT0gdm9pZCAwICYmIChlW25dLlJhID0gcikpOwogICAgfQogICAgZnVuY3Rpb24gcXQobiwgdCwgciwgaSwgbywgcywgbCwgYykgewogICAgICB0aGlzLm5hbWUgPSBuLCB0aGlzLmNvbnN0cnVjdG9yID0gdCwgdGhpcy5tYSA9IHIsIHRoaXMubmEgPSBpLCB0aGlzLmlhID0gbywgdGhpcy5DYSA9IHMsIHRoaXMucWEgPSBsLCB0aGlzLkFhID0gYzsKICAgIH0KICAgIGZ1bmN0aW9uIHduKG4sIHQsIHIpIHsKICAgICAgZm9yICg7IHQgIT09IHI7ICkgdC5xYSB8fCB2KCJFeHBlY3RlZCBudWxsIG9yIGluc3RhbmNlIG9mICIgKyByLm5hbWUgKyAiLCBnb3QgYW4gaW5zdGFuY2Ugb2YgIiArIHQubmFtZSksIG4gPSB0LnFhKG4pLCB0ID0gdC5pYTsKICAgICAgcmV0dXJuIG47CiAgICB9CiAgICBmdW5jdGlvbiBuZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiB0ZShuLCB0KSB7CiAgICAgIGlmICh0ID09PSBudWxsKSB7CiAgICAgICAgaWYgKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgdGhpcy5zYSkgewogICAgICAgICAgdmFyIHIgPSB0aGlzLkhhKCk7CiAgICAgICAgICByZXR1cm4gbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgciksIHI7CiAgICAgICAgfQogICAgICAgIHJldHVybiAwOwogICAgICB9CiAgICAgIGlmICh0LkEgfHwgdignQ2Fubm90IHBhc3MgIicgKyBybih0KSArICciIGFzIGEgJyArIHRoaXMubmFtZSksIHQuQS5kYSB8fCB2KCJDYW5ub3QgcGFzcyBkZWxldGVkIG9iamVjdCBhcyBhIHBvaW50ZXIgb2YgdHlwZSAiICsgdGhpcy5uYW1lKSwgIXRoaXMucmEgJiYgdC5BLmZhLnJhICYmIHYoIkNhbm5vdCBjb252ZXJ0IGFyZ3VtZW50IG9mIHR5cGUgIiArICh0LkEuaGEgPyB0LkEuaGEubmFtZSA6IHQuQS5mYS5uYW1lKSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHIgPSB3bih0LkEuZGEsIHQuQS5mYS5lYSwgdGhpcy5lYSksIHRoaXMuc2EpIHN3aXRjaCAodC5BLmdhID09PSB2b2lkIDAgJiYgdigiUGFzc2luZyByYXcgcG9pbnRlciB0byBzbWFydCBwb2ludGVyIGlzIGlsbGVnYWwiKSwgdGhpcy5QYSkgewogICAgICAgIGNhc2UgMDoKICAgICAgICAgIHQuQS5oYSA9PT0gdGhpcyA/IHIgPSB0LkEuZ2EgOiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyAodC5BLmhhID8gdC5BLmhhLm5hbWUgOiB0LkEuZmEubmFtZSkgKyAiIHRvIHBhcmFtZXRlciB0eXBlICIgKyB0aGlzLm5hbWUpOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAxOgogICAgICAgICAgciA9IHQuQS5nYTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIGlmICh0LkEuaGEgPT09IHRoaXMpIHIgPSB0LkEuZ2E7CiAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgdmFyIGkgPSB0LmNsb25lKCk7CiAgICAgICAgICAgIHIgPSB0aGlzLklhKHIsIGVuKGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGkuZGVsZXRlKCk7CiAgICAgICAgICAgIH0pKSwgbiAhPT0gbnVsbCAmJiBuLnB1c2godGhpcy5uYSwgcik7CiAgICAgICAgICB9CiAgICAgICAgICBicmVhazsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdigiVW5zdXBwb3J0aW5nIHNoYXJpbmcgcG9saWN5Iik7CiAgICAgIH0KICAgICAgcmV0dXJuIHI7CiAgICB9CiAgICBmdW5jdGlvbiBlZShuLCB0KSB7CiAgICAgIHJldHVybiB0ID09PSBudWxsID8gKHRoaXMudWEgJiYgdigibnVsbCBpcyBub3QgYSB2YWxpZCAiICsgdGhpcy5uYW1lKSwgMCkgOiAodC5BIHx8IHYoJ0Nhbm5vdCBwYXNzICInICsgcm4odCkgKyAnIiBhcyBhICcgKyB0aGlzLm5hbWUpLCB0LkEuZGEgfHwgdigiQ2Fubm90IHBhc3MgZGVsZXRlZCBvYmplY3QgYXMgYSBwb2ludGVyIG9mIHR5cGUgIiArIHRoaXMubmFtZSksIHQuQS5mYS5yYSAmJiB2KCJDYW5ub3QgY29udmVydCBhcmd1bWVudCBvZiB0eXBlICIgKyB0LkEuZmEubmFtZSArICIgdG8gcGFyYW1ldGVyIHR5cGUgIiArIHRoaXMubmFtZSksIHduKHQuQS5kYSwgdC5BLmZhLmVhLCB0aGlzLmVhKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBbihuKSB7CiAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShVW24gPj4gMl0pOwogICAgfQogICAgZnVuY3Rpb24gbXQobiwgdCwgcikgewogICAgICByZXR1cm4gdCA9PT0gciA/IG4gOiByLmlhID09PSB2b2lkIDAgPyBudWxsIDogKG4gPSBtdChuLCB0LCByLmlhKSwgbiA9PT0gbnVsbCA/IG51bGwgOiByLkFhKG4pKTsKICAgIH0KICAgIHZhciBmbiA9IHt9OwogICAgZnVuY3Rpb24gcmUobiwgdCkgewogICAgICBmb3IgKHQgPT09IHZvaWQgMCAmJiB2KCJwdHIgc2hvdWxkIG5vdCBiZSB1bmRlZmluZWQiKTsgbi5pYTsgKSB0ID0gbi5xYSh0KSwgbiA9IG4uaWE7CiAgICAgIHJldHVybiBmblt0XTsKICAgIH0KICAgIGZ1bmN0aW9uIF9uKG4sIHQpIHsKICAgICAgcmV0dXJuIHQuZmEgJiYgdC5kYSB8fCBnbigibWFrZUNsYXNzSGFuZGxlIHJlcXVpcmVzIHB0ciBhbmQgcHRyVHlwZSIpLCAhIXQuaGEgIT0gISF0LmdhICYmIGduKCJCb3RoIHNtYXJ0UHRyVHlwZSBhbmQgc21hcnRQdHIgbXVzdCBiZSBzcGVjaWZpZWQiKSwgdC5jb3VudCA9IHsgdmFsdWU6IDEgfSwgdW4oT2JqZWN0LmNyZWF0ZShuLCB7IEE6IHsgdmFsdWU6IHQgfSB9KSk7CiAgICB9CiAgICBmdW5jdGlvbiBCKG4sIHQsIHIsIGkpIHsKICAgICAgdGhpcy5uYW1lID0gbiwgdGhpcy5lYSA9IHQsIHRoaXMudWEgPSByLCB0aGlzLnJhID0gaSwgdGhpcy5zYSA9ICExLCB0aGlzLm5hID0gdGhpcy5JYSA9IHRoaXMuSGEgPSB0aGlzLndhID0gdGhpcy5QYSA9IHRoaXMuR2EgPSB2b2lkIDAsIHQuaWEgIT09IHZvaWQgMCA/IHRoaXMudG9XaXJlVHlwZSA9IHRlIDogKHRoaXMudG9XaXJlVHlwZSA9IGkgPyBuZSA6IGVlLCB0aGlzLmthID0gbnVsbCk7CiAgICB9CiAgICBmdW5jdGlvbiB2dChuLCB0LCByKSB7CiAgICAgIGUuaGFzT3duUHJvcGVydHkobikgfHwgZ24oIlJlcGxhY2luZyBub25leGlzdGFudCBwdWJsaWMgc3ltYm9sIiksIGVbbl0uamEgIT09IHZvaWQgMCAmJiByICE9PSB2b2lkIDAgPyBlW25dLmphW3JdID0gdCA6IChlW25dID0gdCwgZVtuXS55YSA9IHIpOwogICAgfQogICAgZnVuY3Rpb24gRyhuLCB0KSB7CiAgICAgIG4gPSBSKG4pOwogICAgICB2YXIgciA9IHhuKG4sIHQpOwogICAgICByZXR1cm4gdHlwZW9mIHIgIT0gImZ1bmN0aW9uIiAmJiB2KCJ1bmtub3duIGZ1bmN0aW9uIHBvaW50ZXIgd2l0aCBzaWduYXR1cmUgIiArIG4gKyAiOiAiICsgdCksIHI7CiAgICB9CiAgICB2YXIgZ3QgPSB2b2lkIDA7CiAgICBmdW5jdGlvbiB3dChuKSB7CiAgICAgIG4gPSBXdChuKTsKICAgICAgdmFyIHQgPSBSKG4pOwogICAgICByZXR1cm4geihuKSwgdDsKICAgIH0KICAgIGZ1bmN0aW9uIGRuKG4sIHQpIHsKICAgICAgZnVuY3Rpb24gcihzKSB7CiAgICAgICAgb1tzXSB8fCBYW3NdIHx8ICh2bltzXSA/IHZuW3NdLmZvckVhY2gocikgOiAoaS5wdXNoKHMpLCBvW3NdID0gITApKTsKICAgICAgfQogICAgICB2YXIgaSA9IFtdLCBvID0ge307CiAgICAgIHRocm93IHQuZm9yRWFjaChyKSwgbmV3IGd0KG4gKyAiOiAiICsgaS5tYXAod3QpLmpvaW4oWyIsICJdKSk7CiAgICB9CiAgICBmdW5jdGlvbiBBdChuLCB0KSB7CiAgICAgIGZvciAodmFyIHIgPSBbXSwgaSA9IDA7IGkgPCBuOyBpKyspIHIucHVzaChrWyh0ID4+IDIpICsgaV0pOwogICAgICByZXR1cm4gcjsKICAgIH0KICAgIGZ1bmN0aW9uIENuKG4pIHsKICAgICAgZm9yICg7IG4ubGVuZ3RoOyApIHsKICAgICAgICB2YXIgdCA9IG4ucG9wKCk7CiAgICAgICAgbi5wb3AoKSh0KTsKICAgICAgfQogICAgfQogICAgZnVuY3Rpb24gX3QobiwgdCwgcikgewogICAgICByZXR1cm4gbiBpbnN0YW5jZW9mIE9iamVjdCB8fCB2KHIgKyAnIHdpdGggaW52YWxpZCAidGhpcyI6ICcgKyBuKSwgbiBpbnN0YW5jZW9mIHQuZWEuY29uc3RydWN0b3IgfHwgdihyICsgJyBpbmNvbXBhdGlibGUgd2l0aCAidGhpcyIgb2YgdHlwZSAnICsgbi5jb25zdHJ1Y3Rvci5uYW1lKSwgbi5BLmRhIHx8IHYoImNhbm5vdCBjYWxsIGVtc2NyaXB0ZW4gYmluZGluZyBtZXRob2QgIiArIHIgKyAiIG9uIGRlbGV0ZWQgb2JqZWN0IiksIHduKG4uQS5kYSwgbi5BLmZhLmVhLCB0LmVhKTsKICAgIH0KICAgIHZhciBEbiA9IFtdLCBqID0gW3t9LCB7IHZhbHVlOiB2b2lkIDAgfSwgeyB2YWx1ZTogbnVsbCB9LCB7IHZhbHVlOiAhMCB9LCB7IHZhbHVlOiAhMSB9XTsKICAgIGZ1bmN0aW9uIEJuKG4pIHsKICAgICAgNCA8IG4gJiYgLS1qW25dLkphID09PSAwICYmIChqW25dID0gdm9pZCAwLCBEbi5wdXNoKG4pKTsKICAgIH0KICAgIGZ1bmN0aW9uIGVuKG4pIHsKICAgICAgc3dpdGNoIChuKSB7CiAgICAgICAgY2FzZSB2b2lkIDA6CiAgICAgICAgICByZXR1cm4gMTsKICAgICAgICBjYXNlIG51bGw6CiAgICAgICAgICByZXR1cm4gMjsKICAgICAgICBjYXNlICEwOgogICAgICAgICAgcmV0dXJuIDM7CiAgICAgICAgY2FzZSAhMToKICAgICAgICAgIHJldHVybiA0OwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICB2YXIgdCA9IERuLmxlbmd0aCA/IERuLnBvcCgpIDogai5sZW5ndGg7CiAgICAgICAgICByZXR1cm4galt0XSA9IHsgSmE6IDEsIHZhbHVlOiBuIH0sIHQ7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHJuKG4pIHsKICAgICAgaWYgKG4gPT09IG51bGwpIHJldHVybiAibnVsbCI7CiAgICAgIHZhciB0ID0gdHlwZW9mIG47CiAgICAgIHJldHVybiB0ID09PSAib2JqZWN0IiB8fCB0ID09PSAiYXJyYXkiIHx8IHQgPT09ICJmdW5jdGlvbiIgPyBuLnRvU3RyaW5nKCkgOiAiIiArIG47CiAgICB9CiAgICBmdW5jdGlvbiBpZShuLCB0KSB7CiAgICAgIHN3aXRjaCAodCkgewogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiBmdW5jdGlvbihyKSB7CiAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21XaXJlVHlwZShudFtyID4+IDJdKTsKICAgICAgICAgIH07CiAgICAgICAgY2FzZSAzOgogICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHIpIHsKICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKHR0W3IgPj4gM10pOwogICAgICAgICAgfTsKICAgICAgICBkZWZhdWx0OgogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBmbG9hdCB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIGFlKG4pIHsKICAgICAgdmFyIHQgPSBGdW5jdGlvbjsKICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSkgdGhyb3cgbmV3IFR5cGVFcnJvcigibmV3XyBjYWxsZWQgd2l0aCBjb25zdHJ1Y3RvciB0eXBlICIgKyB0eXBlb2YgdCArICIgd2hpY2ggaXMgbm90IGEgZnVuY3Rpb24iKTsKICAgICAgdmFyIHIgPSBqbih0Lm5hbWUgfHwgInVua25vd25GdW5jdGlvbk5hbWUiLCBmdW5jdGlvbigpIHsKICAgICAgfSk7CiAgICAgIHJldHVybiByLnByb3RvdHlwZSA9IHQucHJvdG90eXBlLCByID0gbmV3IHIoKSwgbiA9IHQuYXBwbHkociwgbiksIG4gaW5zdGFuY2VvZiBPYmplY3QgPyBuIDogcjsKICAgIH0KICAgIGZ1bmN0aW9uIG9lKG4sIHQsIHIpIHsKICAgICAgc3dpdGNoICh0KSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgcmV0dXJuIHIgPyBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHJldHVybiBZW2ldOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIEZbaV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMToKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gUVtpID4+IDFdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIHluW2kgPj4gMV07CiAgICAgICAgICB9OwogICAgICAgIGNhc2UgMjoKICAgICAgICAgIHJldHVybiByID8gZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4ga1tpID4+IDJdOwogICAgICAgICAgfSA6IGZ1bmN0aW9uKGkpIHsKICAgICAgICAgICAgcmV0dXJuIFVbaSA+PiAyXTsKICAgICAgICAgIH07CiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIlVua25vd24gaW50ZWdlciB0eXBlOiAiICsgbik7CiAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHpuKG4pIHsKICAgICAgcmV0dXJuIG4gfHwgdigiQ2Fubm90IHVzZSBkZWxldGVkIHZhbC4gaGFuZGxlID0gIiArIG4pLCBqW25dLnZhbHVlOwogICAgfQogICAgZnVuY3Rpb24gQ3QobiwgdCkgewogICAgICB2YXIgciA9IFhbbl07CiAgICAgIHJldHVybiByID09PSB2b2lkIDAgJiYgdih0ICsgIiBoYXMgdW5rbm93biB0eXBlICIgKyB3dChuKSksIHI7CiAgICB9CiAgICB2YXIgc2UgPSB7fSwgVHQgPSB7fTsKICAgIGZ1bmN0aW9uIEV0KCkgewogICAgICBpZiAoIVZuKSB7CiAgICAgICAgdmFyIG4gPSB7IFVTRVI6ICJ3ZWJfdXNlciIsIExPR05BTUU6ICJ3ZWJfdXNlciIsIFBBVEg6ICIvIiwgUFdEOiAiLyIsIEhPTUU6ICIvaG9tZS93ZWJfdXNlciIsIExBTkc6ICh0eXBlb2YgbmF2aWdhdG9yID09ICJvYmplY3QiICYmIG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlc1swXSB8fCAiQyIpLnJlcGxhY2UoIi0iLCAiXyIpICsgIi5VVEYtOCIsIF86IE0gfHwgIi4vdGhpcy5wcm9ncmFtIiB9LCB0OwogICAgICAgIGZvciAodCBpbiBUdCkgblt0XSA9IFR0W3RdOwogICAgICAgIHZhciByID0gW107CiAgICAgICAgZm9yICh0IGluIG4pIHIucHVzaCh0ICsgIj0iICsgblt0XSk7CiAgICAgICAgVm4gPSByOwogICAgICB9CiAgICAgIHJldHVybiBWbjsKICAgIH0KICAgIHZhciBWbiwgUHQgPSBbXTsKICAgIGZ1bmN0aW9uIE10KG4pIHsKICAgICAgdmFyIHQgPSB7fSwgcjsKICAgICAgZm9yIChyIGluIG4pIChmdW5jdGlvbihpKSB7CiAgICAgICAgdmFyIG8gPSBuW2ldOwogICAgICAgIHRbaV0gPSB0eXBlb2YgbyA9PSAiZnVuY3Rpb24iID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICBQdC5wdXNoKGkpOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuIG8uYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgICAgICAgIH0gZmluYWxseSB7CiAgICAgICAgICAgIGlmIChrbikgcmV0dXJuOwogICAgICAgICAgICB2YXIgcyA9IFB0LnBvcCgpOwogICAgICAgICAgICBLbihzID09PSBpKTsKICAgICAgICAgIH0KICAgICAgICB9IDogbzsKICAgICAgfSkocik7CiAgICAgIHJldHVybiB0OwogICAgfQogICAgZm9yICh2YXIgT3QgPSBBcnJheSgyNTYpLCBUbiA9IDA7IDI1NiA+IFRuOyArK1RuKSBPdFtUbl0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKFRuKTsKICAgIGx0ID0gT3QsIG5uID0gZS5CaW5kaW5nRXJyb3IgPSBMbigiQmluZGluZ0Vycm9yIiksIGZ0ID0gZS5JbnRlcm5hbEVycm9yID0gTG4oIkludGVybmFsRXJyb3IiKSwgVi5wcm90b3R5cGUuaXNBbGlhc09mID0gZnVuY3Rpb24obikgewogICAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgViAmJiBuIGluc3RhbmNlb2YgVikpIHJldHVybiAhMTsKICAgICAgdmFyIHQgPSB0aGlzLkEuZmEuZWEsIHIgPSB0aGlzLkEuZGEsIGkgPSBuLkEuZmEuZWE7CiAgICAgIGZvciAobiA9IG4uQS5kYTsgdC5pYTsgKSByID0gdC5xYShyKSwgdCA9IHQuaWE7CiAgICAgIGZvciAoOyBpLmlhOyApIG4gPSBpLnFhKG4pLCBpID0gaS5pYTsKICAgICAgcmV0dXJuIHQgPT09IGkgJiYgciA9PT0gbjsKICAgIH0sIFYucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7CiAgICAgIGlmICh0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5wYSkgcmV0dXJuIHRoaXMuQS5jb3VudC52YWx1ZSArPSAxLCB0aGlzOwogICAgICB2YXIgbiA9IHVuKE9iamVjdC5jcmVhdGUoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLCB7IEE6IHsgdmFsdWU6IEt0KHRoaXMuQSkgfSB9KSk7CiAgICAgIHJldHVybiBuLkEuY291bnQudmFsdWUgKz0gMSwgbi5BLm9hID0gITEsIG47CiAgICB9LCBWLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbigpIHsKICAgICAgdGhpcy5BLmRhIHx8IE5uKHRoaXMpLCB0aGlzLkEub2EgJiYgIXRoaXMuQS5wYSAmJiB2KCJPYmplY3QgYWxyZWFkeSBzY2hlZHVsZWQgZm9yIGRlbGV0aW9uIiksIGR0KHRoaXMpLCBodCh0aGlzLkEpLCB0aGlzLkEucGEgfHwgKHRoaXMuQS5nYSA9IHZvaWQgMCwgdGhpcy5BLmRhID0gdm9pZCAwKTsKICAgIH0sIFYucHJvdG90eXBlLmlzRGVsZXRlZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gIXRoaXMuQS5kYTsKICAgIH0sIFYucHJvdG90eXBlLmRlbGV0ZUxhdGVyID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiB0aGlzLkEuZGEgfHwgTm4odGhpcyksIHRoaXMuQS5vYSAmJiAhdGhpcy5BLnBhICYmIHYoIk9iamVjdCBhbHJlYWR5IHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iKSwgbG4ucHVzaCh0aGlzKSwgbG4ubGVuZ3RoID09PSAxICYmIGNuICYmIGNuKFVuKSwgdGhpcy5BLm9hID0gITAsIHRoaXM7CiAgICB9LCBCLnByb3RvdHlwZS5EYSA9IGZ1bmN0aW9uKG4pIHsKICAgICAgcmV0dXJuIHRoaXMud2EgJiYgKG4gPSB0aGlzLndhKG4pKSwgbjsKICAgIH0sIEIucHJvdG90eXBlLnZhID0gZnVuY3Rpb24obikgewogICAgICB0aGlzLm5hICYmIHRoaXMubmEobik7CiAgICB9LCBCLnByb3RvdHlwZS5hcmdQYWNrQWR2YW5jZSA9IDgsIEIucHJvdG90eXBlLnJlYWRWYWx1ZUZyb21Qb2ludGVyID0gQW4sIEIucHJvdG90eXBlLmRlbGV0ZU9iamVjdCA9IGZ1bmN0aW9uKG4pIHsKICAgICAgbiAhPT0gbnVsbCAmJiBuLmRlbGV0ZSgpOwogICAgfSwgQi5wcm90b3R5cGUuZnJvbVdpcmVUeXBlID0gZnVuY3Rpb24obikgewogICAgICBmdW5jdGlvbiB0KCkgewogICAgICAgIHJldHVybiB0aGlzLnNhID8gX24odGhpcy5lYS5tYSwgeyBmYTogdGhpcy5HYSwgZGE6IHIsIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKHRoaXMuZWEubWEsIHsgZmE6IHRoaXMsIGRhOiBuIH0pOwogICAgICB9CiAgICAgIHZhciByID0gdGhpcy5EYShuKTsKICAgICAgaWYgKCFyKSByZXR1cm4gdGhpcy52YShuKSwgbnVsbDsKICAgICAgdmFyIGkgPSByZSh0aGlzLmVhLCByKTsKICAgICAgaWYgKGkgIT09IHZvaWQgMCkKICAgICAgICByZXR1cm4gaS5BLmNvdW50LnZhbHVlID09PSAwID8gKGkuQS5kYSA9IHIsIGkuQS5nYSA9IG4sIGkuY2xvbmUoKSkgOiAoaSA9IGkuY2xvbmUoKSwgdGhpcy52YShuKSwgaSk7CiAgICAgIGlmIChpID0gdGhpcy5lYS5DYShyKSwgaSA9IHl0W2ldLCAhaSkgcmV0dXJuIHQuY2FsbCh0aGlzKTsKICAgICAgaSA9IHRoaXMucmEgPyBpLnphIDogaS5wb2ludGVyVHlwZTsKICAgICAgdmFyIG8gPSBtdChyLCB0aGlzLmVhLCBpLmVhKTsKICAgICAgcmV0dXJuIG8gPT09IG51bGwgPyB0LmNhbGwodGhpcykgOiB0aGlzLnNhID8gX24oaS5lYS5tYSwgeyBmYTogaSwgZGE6IG8sIGhhOiB0aGlzLCBnYTogbiB9KSA6IF9uKAogICAgICAgIGkuZWEubWEsCiAgICAgICAgeyBmYTogaSwgZGE6IG8gfQogICAgICApOwogICAgfSwgZS5nZXRJbmhlcml0ZWRJbnN0YW5jZUNvdW50ID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmbikubGVuZ3RoOwogICAgfSwgZS5nZXRMaXZlSW5oZXJpdGVkSW5zdGFuY2VzID0gZnVuY3Rpb24oKSB7CiAgICAgIHZhciBuID0gW10sIHQ7CiAgICAgIGZvciAodCBpbiBmbikgZm4uaGFzT3duUHJvcGVydHkodCkgJiYgbi5wdXNoKGZuW3RdKTsKICAgICAgcmV0dXJuIG47CiAgICB9LCBlLmZsdXNoUGVuZGluZ0RlbGV0ZXMgPSBVbiwgZS5zZXREZWxheUZ1bmN0aW9uID0gZnVuY3Rpb24obikgewogICAgICBjbiA9IG4sIGxuLmxlbmd0aCAmJiBjbiAmJiBjbihVbik7CiAgICB9LCBndCA9IGUuVW5ib3VuZFR5cGVFcnJvciA9IExuKCJVbmJvdW5kVHlwZUVycm9yIiksIGUuY291bnRfZW12YWxfaGFuZGxlcyA9IGZ1bmN0aW9uKCkgewogICAgICBmb3IgKHZhciBuID0gMCwgdCA9IDU7IHQgPCBqLmxlbmd0aDsgKyt0KSBqW3RdICE9PSB2b2lkIDAgJiYgKytuOwogICAgICByZXR1cm4gbjsKICAgIH0sIGUuZ2V0X2ZpcnN0X2VtdmFsID0gZnVuY3Rpb24oKSB7CiAgICAgIGZvciAodmFyIG4gPSA1OyBuIDwgai5sZW5ndGg7ICsrbikgaWYgKGpbbl0gIT09IHZvaWQgMCkgcmV0dXJuIGpbbl07CiAgICAgIHJldHVybiBudWxsOwogICAgfSwgYXQucHVzaCh7IEJhOiBmdW5jdGlvbigpIHsKICAgICAgU3QoKTsKICAgIH0gfSk7CiAgICB2YXIgdWUgPSB7CiAgICAgIHo6IGZ1bmN0aW9uKG4pIHsKICAgICAgICByZXR1cm4gRW4obiArIDE2KSArIDE2OwogICAgICB9LAogICAgICB1OiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgdGhyb3cgbmV3IEp0KG4pLkZhKHQsIHIpLCAidW5jYXVnaHRfZXhjZXB0aW9uIiBpbiBtbiA/IG1uLnhhKysgOiBtbi54YSA9IDEsIG47CiAgICAgIH0sCiAgICAgIHc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8pIHsKICAgICAgICB2YXIgcyA9IEZuKHIpOwogICAgICAgIHQgPSBSKHQpLCBEKG4sIHsgbmFtZTogdCwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICByZXR1cm4gISFsOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGwsIGMpIHsKICAgICAgICAgIHJldHVybiBjID8gaSA6IG87CiAgICAgICAgfSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBmdW5jdGlvbihsKSB7CiAgICAgICAgICBpZiAociA9PT0gMSkgdmFyIGMgPSBZOwogICAgICAgICAgZWxzZSBpZiAociA9PT0gMikgYyA9IFE7CiAgICAgICAgICBlbHNlIGlmIChyID09PSA0KSBjID0gazsKICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IFR5cGVFcnJvcigiVW5rbm93biBib29sZWFuIHR5cGUgc2l6ZTogIiArIHQpOwogICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbVdpcmVUeXBlKGNbbCA+PiBzXSk7CiAgICAgICAgfSwga2E6IG51bGwgfSk7CiAgICAgIH0sCiAgICAgIGg6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYsIGQsIGgsIHcpIHsKICAgICAgICBkID0gUihkKSwgcyA9IEcobywgcyksIGMgJiYgKGMgPSBHKGwsIGMpKSwgZiAmJiAoZiA9IEcoeSwgZikpLCB3ID0gRyhoLCB3KTsKICAgICAgICB2YXIgUCA9IEluKGQpOwogICAgICAgIHB0KFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGQgKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW2ldKTsKICAgICAgICB9KSwgdG4oW24sIHQsIHJdLCBpID8gW2ldIDogW10sIGZ1bmN0aW9uKHApIHsKICAgICAgICAgIGlmIChwID0gcFswXSwgaSkKICAgICAgICAgICAgdmFyIE4gPSBwLmVhLCBiID0gTi5tYTsKICAgICAgICAgIGVsc2UgYiA9IFYucHJvdG90eXBlOwogICAgICAgICAgcCA9IGpuKFAsIGZ1bmN0aW9uKCkgewogICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSB4KSB0aHJvdyBuZXcgbm4oIlVzZSAnbmV3JyB0byBjb25zdHJ1Y3QgIiArIGQpOwogICAgICAgICAgICBpZiAoTC5sYSA9PT0gdm9pZCAwKSB0aHJvdyBuZXcgbm4oZCArICIgaGFzIG5vIGFjY2Vzc2libGUgY29uc3RydWN0b3IiKTsKICAgICAgICAgICAgdmFyIGJ0ID0gTC5sYVthcmd1bWVudHMubGVuZ3RoXTsKICAgICAgICAgICAgaWYgKGJ0ID09PSB2b2lkIDApIHRocm93IG5ldyBubigiVHJpZWQgdG8gaW52b2tlIGN0b3Igb2YgIiArIGQgKyAiIHdpdGggaW52YWxpZCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiKSAtIGV4cGVjdGVkICgiICsgT2JqZWN0LmtleXMoTC5sYSkudG9TdHJpbmcoKSArICIpIHBhcmFtZXRlcnMgaW5zdGVhZCEiKTsKICAgICAgICAgICAgcmV0dXJuIGJ0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9KTsKICAgICAgICAgIHZhciB4ID0gT2JqZWN0LmNyZWF0ZShiLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBwIH0gfSk7CiAgICAgICAgICBwLnByb3RvdHlwZSA9IHg7CiAgICAgICAgICB2YXIgTCA9IG5ldyBxdChkLCBwLCB4LCB3LCBOLCBzLCBjLCBmKTsKICAgICAgICAgIE4gPSBuZXcgQihkLCBMLCAhMCwgITEpLCBiID0gbmV3IEIoZCArICIqIiwgTCwgITEsICExKTsKICAgICAgICAgIHZhciBobiA9IG5ldyBCKGQgKyAiIGNvbnN0KiIsIEwsICExLCAhMCk7CiAgICAgICAgICByZXR1cm4geXRbbl0gPSB7IHBvaW50ZXJUeXBlOiBiLCB6YTogaG4gfSwgdnQoUCwgcCksIFtOLCBiLCBobl07CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGc6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMpIHsKICAgICAgICBLbigwIDwgdCk7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBvID0gRyhpLCBvKTsKICAgICAgICB2YXIgYyA9IFtzXSwgeSA9IFtdOwogICAgICAgIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGYpIHsKICAgICAgICAgIGYgPSBmWzBdOwogICAgICAgICAgdmFyIGQgPSAiY29uc3RydWN0b3IgIiArIGYubmFtZTsKICAgICAgICAgIGlmIChmLmVhLmxhID09PSB2b2lkIDAgJiYgKGYuZWEubGEgPSBbXSksIGYuZWEubGFbdCAtIDFdICE9PSB2b2lkIDApIHRocm93IG5ldyBubigiQ2Fubm90IHJlZ2lzdGVyIG11bHRpcGxlIGNvbnN0cnVjdG9ycyB3aXRoIGlkZW50aWNhbCBudW1iZXIgb2YgcGFyYW1ldGVycyAoIiArICh0IC0gMSkgKyAiKSBmb3IgY2xhc3MgJyIgKyBmLm5hbWUgKyAiJyEgT3ZlcmxvYWQgcmVzb2x1dGlvbiBpcyBjdXJyZW50bHkgb25seSBwZXJmb3JtZWQgdXNpbmcgdGhlIHBhcmFtZXRlciBjb3VudCwgbm90IGFjdHVhbCB0eXBlIGluZm8hIik7CiAgICAgICAgICByZXR1cm4gZi5lYS5sYVt0IC0gMV0gPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBjb25zdHJ1Y3QgIiArIGYubmFtZSArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBsKTsKICAgICAgICAgIH0sIHRuKFtdLCBsLCBmdW5jdGlvbihoKSB7CiAgICAgICAgICAgIHJldHVybiBmLmVhLmxhW3QgLSAxXSA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICAgIGFyZ3VtZW50cy5sZW5ndGggIT09IHQgLSAxICYmIHYoZCArICIgY2FsbGVkIHdpdGggIiArIGFyZ3VtZW50cy5sZW5ndGggKyAiIGFyZ3VtZW50cywgZXhwZWN0ZWQgIiArICh0IC0gMSkpLCB5Lmxlbmd0aCA9IDAsIGMubGVuZ3RoID0gdDsKICAgICAgICAgICAgICBmb3IgKHZhciB3ID0gMTsgdyA8IHQ7ICsrdykgY1t3XSA9IGhbd10udG9XaXJlVHlwZSgKICAgICAgICAgICAgICAgIHksCiAgICAgICAgICAgICAgICBhcmd1bWVudHNbdyAtIDFdCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICByZXR1cm4gdyA9IG8uYXBwbHkobnVsbCwgYyksIENuKHkpLCBoWzBdLmZyb21XaXJlVHlwZSh3KTsKICAgICAgICAgICAgfSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGI6IGZ1bmN0aW9uKG4sIHQsIHIsIGksIG8sIHMsIGwsIGMsIHksIGYpIHsKICAgICAgICB0ID0gUih0KSwgbyA9IEcoaSwgbyksIHRuKFtdLCBbbl0sIGZ1bmN0aW9uKGQpIHsKICAgICAgICAgIGQgPSBkWzBdOwogICAgICAgICAgdmFyIGggPSBkLm5hbWUgKyAiLiIgKyB0LCB3ID0geyBnZXQ6IGZ1bmN0aW9uKCkgewogICAgICAgICAgICBkbigiQ2Fubm90IGFjY2VzcyAiICsgaCArICIgZHVlIHRvIHVuYm91bmQgdHlwZXMiLCBbciwgbF0pOwogICAgICAgICAgfSwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfTsKICAgICAgICAgIHJldHVybiB5ID8gdy5zZXQgPSBmdW5jdGlvbigpIHsKICAgICAgICAgICAgZG4oIkNhbm5vdCBhY2Nlc3MgIiArIGggKyAiIGR1ZSB0byB1bmJvdW5kIHR5cGVzIiwgW3IsIGxdKTsKICAgICAgICAgIH0gOiB3LnNldCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICB2KGggKyAiIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5Iik7CiAgICAgICAgICB9LCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZC5lYS5tYSwgdCwgdyksIHRuKFtdLCB5ID8gW3IsIGxdIDogW3JdLCBmdW5jdGlvbihQKSB7CiAgICAgICAgICAgIHZhciBwID0gUFswXSwgTiA9IHsgZ2V0OiBmdW5jdGlvbigpIHsKICAgICAgICAgICAgICB2YXIgeCA9IF90KHRoaXMsIGQsIGggKyAiIGdldHRlciIpOwogICAgICAgICAgICAgIHJldHVybiBwLmZyb21XaXJlVHlwZShvKHMsIHgpKTsKICAgICAgICAgICAgfSwgZW51bWVyYWJsZTogITAgfTsKICAgICAgICAgICAgaWYgKHkpIHsKICAgICAgICAgICAgICB5ID0gRyhjLCB5KTsKICAgICAgICAgICAgICB2YXIgYiA9IFBbMV07CiAgICAgICAgICAgICAgTi5zZXQgPSBmdW5jdGlvbih4KSB7CiAgICAgICAgICAgICAgICB2YXIgTCA9IF90KHRoaXMsIGQsIGggKyAiIHNldHRlciIpLCBobiA9IFtdOwogICAgICAgICAgICAgICAgeShmLCBMLCBiLnRvV2lyZVR5cGUoaG4sIHgpKSwgQ24oaG4pOwogICAgICAgICAgICAgIH07CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkLmVhLm1hLCB0LCBOKSwgW107CiAgICAgICAgICB9KSwgW107CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIHY6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IG5hbWU6IHQsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24ocikgewogICAgICAgICAgdmFyIGkgPSBqW3JdLnZhbHVlOwogICAgICAgICAgcmV0dXJuIEJuKHIpLCBpOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHIsIGkpIHsKICAgICAgICAgIHJldHVybiBlbihpKTsKICAgICAgICB9LCBhcmdQYWNrQWR2YW5jZTogOCwgcmVhZFZhbHVlRnJvbVBvaW50ZXI6IEFuLCBrYTogbnVsbCB9KTsKICAgICAgfSwKICAgICAgbTogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIHIgPSBGbihyKSwgdCA9IFIodCksIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICByZXR1cm4gaTsKICAgICAgICAgIH0sCiAgICAgICAgICB0b1dpcmVUeXBlOiBmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICAgIGlmICh0eXBlb2YgbyAhPSAibnVtYmVyIiAmJiB0eXBlb2YgbyAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4obykgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgICAgcmV0dXJuIG87CiAgICAgICAgICB9LAogICAgICAgICAgYXJnUGFja0FkdmFuY2U6IDgsCiAgICAgICAgICByZWFkVmFsdWVGcm9tUG9pbnRlcjogaWUodCwgciksCiAgICAgICAgICBrYTogbnVsbAogICAgICAgIH0pOwogICAgICB9LAogICAgICBjOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvLCBzKSB7CiAgICAgICAgdmFyIGwgPSBBdCh0LCByKTsKICAgICAgICBuID0gUihuKSwgbyA9IEcoaSwgbyksIHB0KG4sIGZ1bmN0aW9uKCkgewogICAgICAgICAgZG4oIkNhbm5vdCBjYWxsICIgKyBuICsgIiBkdWUgdG8gdW5ib3VuZCB0eXBlcyIsIGwpOwogICAgICAgIH0sIHQgLSAxKSwgdG4oW10sIGwsIGZ1bmN0aW9uKGMpIHsKICAgICAgICAgIHZhciB5ID0gbiwgZiA9IG47CiAgICAgICAgICBjID0gW2NbMF0sIG51bGxdLmNvbmNhdChjLnNsaWNlKDEpKTsKICAgICAgICAgIHZhciBkID0gbywgaCA9IGMubGVuZ3RoOwogICAgICAgICAgMiA+IGggJiYgdigiYXJnVHlwZXMgYXJyYXkgc2l6ZSBtaXNtYXRjaCEgTXVzdCBhdCBsZWFzdCBnZXQgcmV0dXJuIHZhbHVlIGFuZCAndGhpcycgdHlwZXMhIik7CiAgICAgICAgICBmb3IgKHZhciB3ID0gY1sxXSAhPT0gbnVsbCAmJiAhMSwgUCA9ICExLCBwID0gMTsgcCA8IGMubGVuZ3RoOyArK3ApIGlmIChjW3BdICE9PSBudWxsICYmIGNbcF0ua2EgPT09IHZvaWQgMCkgewogICAgICAgICAgICBQID0gITA7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgdmFyIE4gPSBjWzBdLm5hbWUgIT09ICJ2b2lkIiwgYiA9ICIiLCB4ID0gIiI7CiAgICAgICAgICBmb3IgKHAgPSAwOyBwIDwgaCAtIDI7ICsrcCkgYiArPSAocCAhPT0gMCA/ICIsICIgOiAiIikgKyAiYXJnIiArIHAsIHggKz0gKHAgIT09IDAgPyAiLCAiIDogIiIpICsgImFyZyIgKyBwICsgIldpcmVkIjsKICAgICAgICAgIGYgPSAicmV0dXJuIGZ1bmN0aW9uICIgKyBJbihmKSArICIoIiArIGIgKyBgKSB7CmlmIChhcmd1bWVudHMubGVuZ3RoICE9PSBgICsgKGggLSAyKSArIGApIHsKdGhyb3dCaW5kaW5nRXJyb3IoJ2Z1bmN0aW9uIGAgKyBmICsgIiBjYWxsZWQgd2l0aCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLCBleHBlY3RlZCAiICsgKGggLSAyKSArIGAgYXJncyEnKTsKfQpgLCBQICYmIChmICs9IGB2YXIgZGVzdHJ1Y3RvcnMgPSBbXTsKYCk7CiAgICAgICAgICB2YXIgTCA9IFAgPyAiZGVzdHJ1Y3RvcnMiIDogIm51bGwiOwogICAgICAgICAgZm9yIChiID0gInRocm93QmluZGluZ0Vycm9yIGludm9rZXIgZm4gcnVuRGVzdHJ1Y3RvcnMgcmV0VHlwZSBjbGFzc1BhcmFtIi5zcGxpdCgiICIpLCBkID0gW3YsIGQsIHMsIENuLCBjWzBdLCBjWzFdXSwgdyAmJiAoZiArPSAidmFyIHRoaXNXaXJlZCA9IGNsYXNzUGFyYW0udG9XaXJlVHlwZSgiICsgTCArIGAsIHRoaXMpOwpgKSwgcCA9IDA7IHAgPCBoIC0gMjsgKytwKSBmICs9ICJ2YXIgYXJnIiArIHAgKyAiV2lyZWQgPSBhcmdUeXBlIiArIHAgKyAiLnRvV2lyZVR5cGUoIiArIEwgKyAiLCBhcmciICsgcCArICIpOyAvLyAiICsgY1twICsgMl0ubmFtZSArIGAKYCwgYi5wdXNoKCJhcmdUeXBlIiArIHApLCBkLnB1c2goY1twICsgMl0pOwogICAgICAgICAgaWYgKHcgJiYgKHggPSAidGhpc1dpcmVkIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCksIGYgKz0gKE4gPyAidmFyIHJ2ID0gIiA6ICIiKSArICJpbnZva2VyKGZuIiArICgwIDwgeC5sZW5ndGggPyAiLCAiIDogIiIpICsgeCArIGApOwpgLCBQKSBmICs9IGBydW5EZXN0cnVjdG9ycyhkZXN0cnVjdG9ycyk7CmA7CiAgICAgICAgICBlbHNlIGZvciAocCA9IHcgPyAxIDogMjsgcCA8IGMubGVuZ3RoOyArK3ApIGggPSBwID09PSAxID8gInRoaXNXaXJlZCIgOiAiYXJnIiArIChwIC0gMikgKyAiV2lyZWQiLCBjW3BdLmthICE9PSBudWxsICYmIChmICs9IGggKyAiX2R0b3IoIiArIGggKyAiKTsgLy8gIiArIGNbcF0ubmFtZSArIGAKYCwgYi5wdXNoKGggKyAiX2R0b3IiKSwgZC5wdXNoKGNbcF0ua2EpKTsKICAgICAgICAgIHJldHVybiBOICYmIChmICs9IGB2YXIgcmV0ID0gcmV0VHlwZS5mcm9tV2lyZVR5cGUocnYpOwpyZXR1cm4gcmV0OwpgKSwgYi5wdXNoKGYgKyBgfQpgKSwgYyA9IGFlKGIpLmFwcGx5KG51bGwsIGQpLCB2dCh5LCBjLCB0IC0gMSksIFtdOwogICAgICAgIH0pOwogICAgICB9LAogICAgICBlOiBmdW5jdGlvbihuLCB0LCByLCBpLCBvKSB7CiAgICAgICAgZnVuY3Rpb24gcyhmKSB7CiAgICAgICAgICByZXR1cm4gZjsKICAgICAgICB9CiAgICAgICAgdCA9IFIodCksIG8gPT09IC0xICYmIChvID0gNDI5NDk2NzI5NSk7CiAgICAgICAgdmFyIGwgPSBGbihyKTsKICAgICAgICBpZiAoaSA9PT0gMCkgewogICAgICAgICAgdmFyIGMgPSAzMiAtIDggKiByOwogICAgICAgICAgcyA9IGZ1bmN0aW9uKGYpIHsKICAgICAgICAgICAgcmV0dXJuIGYgPDwgYyA+Pj4gYzsKICAgICAgICAgIH07CiAgICAgICAgfQogICAgICAgIHZhciB5ID0gdC5pbmRleE9mKCJ1bnNpZ25lZCIpICE9IC0xOwogICAgICAgIEQobiwgeyBuYW1lOiB0LCBmcm9tV2lyZVR5cGU6IHMsIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGYsIGQpIHsKICAgICAgICAgIGlmICh0eXBlb2YgZCAhPSAibnVtYmVyIiAmJiB0eXBlb2YgZCAhPSAiYm9vbGVhbiIpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0ICInICsgcm4oZCkgKyAnIiB0byAnICsgdGhpcy5uYW1lKTsKICAgICAgICAgIGlmIChkIDwgaSB8fCBkID4gbykgdGhyb3cgbmV3IFR5cGVFcnJvcignUGFzc2luZyBhIG51bWJlciAiJyArIHJuKGQpICsgJyIgZnJvbSBKUyBzaWRlIHRvIEMvQysrIHNpZGUgdG8gYW4gYXJndW1lbnQgb2YgdHlwZSAiJyArIHQgKyAnIiwgd2hpY2ggaXMgb3V0c2lkZSB0aGUgdmFsaWQgcmFuZ2UgWycgKyBpICsgIiwgIiArIG8gKyAiXSEiKTsKICAgICAgICAgIHJldHVybiB5ID8gZCA+Pj4gMCA6IGQgfCAwOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogb2UodCwgbCwgaSAhPT0gMCksIGthOiBudWxsIH0pOwogICAgICB9LAogICAgICBkOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgZnVuY3Rpb24gaShzKSB7CiAgICAgICAgICBzID4+PSAyOwogICAgICAgICAgdmFyIGwgPSBVOwogICAgICAgICAgcmV0dXJuIG5ldyBvKEssIGxbcyArIDFdLCBsW3NdKTsKICAgICAgICB9CiAgICAgICAgdmFyIG8gPSBbSW50OEFycmF5LCBVaW50OEFycmF5LCBJbnQxNkFycmF5LCBVaW50MTZBcnJheSwgSW50MzJBcnJheSwgVWludDMyQXJyYXksIEZsb2F0MzJBcnJheSwgRmxvYXQ2NEFycmF5XVt0XTsKICAgICAgICByID0gUihyKSwgRChuLCB7IG5hbWU6IHIsIGZyb21XaXJlVHlwZTogaSwgYXJnUGFja0FkdmFuY2U6IDgsIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBpIH0sIHsgRWE6ICEwIH0pOwogICAgICB9LAogICAgICBuOiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgdCA9IFIodCk7CiAgICAgICAgdmFyIHIgPSB0ID09PSAic3RkOjpzdHJpbmciOwogICAgICAgIEQobiwgewogICAgICAgICAgbmFtZTogdCwKICAgICAgICAgIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oaSkgewogICAgICAgICAgICB2YXIgbyA9IFVbaSA+PiAyXTsKICAgICAgICAgICAgaWYgKHIpIGZvciAodmFyIHMgPSBpICsgNCwgbCA9IDA7IGwgPD0gbzsgKytsKSB7CiAgICAgICAgICAgICAgdmFyIGMgPSBpICsgNCArIGw7CiAgICAgICAgICAgICAgaWYgKGwgPT0gbyB8fCBGW2NdID09IDApIHsKICAgICAgICAgICAgICAgIGlmIChzKSB7CiAgICAgICAgICAgICAgICAgIHZhciB5ID0gcywgZiA9IEYsIGQgPSB5ICsgKGMgLSBzKTsKICAgICAgICAgICAgICAgICAgZm9yIChzID0geTsgZltzXSAmJiAhKHMgPj0gZCk7ICkgKytzOwogICAgICAgICAgICAgICAgICBpZiAoMTYgPCBzIC0geSAmJiBmLnN1YmFycmF5ICYmIFFuKSB5ID0gUW4uZGVjb2RlKGYuc3ViYXJyYXkoeSwgcykpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKGQgPSAiIjsgeSA8IHM7ICkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBmW3krK107CiAgICAgICAgICAgICAgICAgICAgICBpZiAoaCAmIDEyOCkgewogICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGZbeSsrXSAmIDYzOwogICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGggJiAyMjQpID09IDE5MikgZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChoICYgMzEpIDw8IDYgfCB3KTsKICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFAgPSBmW3krK10gJiA2MzsKICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gKGggJiAyNDApID09IDIyNCA/IChoICYgMTUpIDw8IDEyIHwgdyA8PCA2IHwgUCA6IChoICYgNykgPDwgMTggfCB3IDw8IDEyIHwgUCA8PCA2IHwgZlt5KytdICYgNjMsIDY1NTM2ID4gaCA/IGQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShoKSA6IChoIC09IDY1NTM2LCBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgfCBoID4+IDEwLCA1NjMyMCB8IGggJiAxMDIzKSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoaCk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIHkgPSBkOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9IGVsc2UgeSA9ICIiOwogICAgICAgICAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgdmFyIHAgPSB5OwogICAgICAgICAgICAgICAgZWxzZSBwICs9ICJcMCIsIHAgKz0geTsKICAgICAgICAgICAgICAgIHMgPSBjICsgMTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgICAgZWxzZSB7CiAgICAgICAgICAgICAgZm9yIChwID0gQXJyYXkobyksIGwgPSAwOyBsIDwgbzsgKytsKSBwW2xdID0gU3RyaW5nLmZyb21DaGFyQ29kZShGW2kgKyA0ICsgbF0pOwogICAgICAgICAgICAgIHAgPSBwLmpvaW4oIiIpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIHJldHVybiB6KGkpLCBwOwogICAgICAgICAgfSwKICAgICAgICAgIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKGksIG8pIHsKICAgICAgICAgICAgbyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyICYmIChvID0gbmV3IFVpbnQ4QXJyYXkobykpOwogICAgICAgICAgICB2YXIgcyA9IHR5cGVvZiBvID09ICJzdHJpbmciOwogICAgICAgICAgICBzIHx8IG8gaW5zdGFuY2VvZiBVaW50OEFycmF5IHx8IG8gaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSB8fCBvIGluc3RhbmNlb2YgSW50OEFycmF5IHx8IHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gc3RkOjpzdHJpbmciKTsKICAgICAgICAgICAgdmFyIGwgPSAociAmJiBzID8gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgZiA9IDAsIGQgPSAwOyBkIDwgby5sZW5ndGg7ICsrZCkgewogICAgICAgICAgICAgICAgdmFyIGggPSBvLmNoYXJDb2RlQXQoZCk7CiAgICAgICAgICAgICAgICA1NTI5NiA8PSBoICYmIDU3MzQzID49IGggJiYgKGggPSA2NTUzNiArICgoaCAmIDEwMjMpIDw8IDEwKSB8IG8uY2hhckNvZGVBdCgrK2QpICYgMTAyMyksIDEyNyA+PSBoID8gKytmIDogZiA9IDIwNDcgPj0gaCA/IGYgKyAyIDogNjU1MzUgPj0gaCA/IGYgKyAzIDogZiArIDQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiBmOwogICAgICAgICAgICB9IDogZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgcmV0dXJuIG8ubGVuZ3RoOwogICAgICAgICAgICB9KSgpLCBjID0gRW4oNCArIGwgKyAxKTsKICAgICAgICAgICAgaWYgKFVbYyA+PiAyXSA9IGwsIHIgJiYgcykgVXQobywgYyArIDQsIGwgKyAxKTsKICAgICAgICAgICAgZWxzZSBpZiAocykgZm9yIChzID0gMDsgcyA8IGw7ICsrcykgewogICAgICAgICAgICAgIHZhciB5ID0gby5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgICAgIDI1NSA8IHkgJiYgKHooYyksIHYoIlN0cmluZyBoYXMgVVRGLTE2IGNvZGUgdW5pdHMgdGhhdCBkbyBub3QgZml0IGluIDggYml0cyIpKSwgRltjICsgNCArIHNdID0geTsKICAgICAgICAgICAgfQogICAgICAgICAgICBlbHNlIGZvciAocyA9IDA7IHMgPCBsOyArK3MpIEZbYyArIDQgKyBzXSA9IG9bc107CiAgICAgICAgICAgIHJldHVybiBpICE9PSBudWxsICYmIGkucHVzaCh6LCBjKSwgYzsKICAgICAgICAgIH0sCiAgICAgICAgICBhcmdQYWNrQWR2YW5jZTogOCwKICAgICAgICAgIHJlYWRWYWx1ZUZyb21Qb2ludGVyOiBBbiwKICAgICAgICAgIGthOiBmdW5jdGlvbihpKSB7CiAgICAgICAgICAgIHooaSk7CiAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgIH0sCiAgICAgIGo6IGZ1bmN0aW9uKG4sIHQsIHIpIHsKICAgICAgICBpZiAociA9IFIociksIHQgPT09IDIpCiAgICAgICAgICB2YXIgaSA9IER0LCBvID0gQnQsIHMgPSB6dCwgbCA9IGZ1bmN0aW9uKCkgewogICAgICAgICAgICByZXR1cm4geW47CiAgICAgICAgICB9LCBjID0gMTsKICAgICAgICBlbHNlIHQgPT09IDQgJiYgKGkgPSBWdCwgbyA9IEd0LCBzID0gWXQsIGwgPSBmdW5jdGlvbigpIHsKICAgICAgICAgIHJldHVybiBVOwogICAgICAgIH0sIGMgPSAyKTsKICAgICAgICBEKG4sIHsgbmFtZTogciwgZnJvbVdpcmVUeXBlOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICBmb3IgKHZhciBmID0gVVt5ID4+IDJdLCBkID0gbCgpLCBoLCB3ID0geSArIDQsIFAgPSAwOyBQIDw9IGY7ICsrUCkgewogICAgICAgICAgICB2YXIgcCA9IHkgKyA0ICsgUCAqIHQ7CiAgICAgICAgICAgIChQID09IGYgfHwgZFtwID4+IGNdID09IDApICYmICh3ID0gaSh3LCBwIC0gdyksIGggPT09IHZvaWQgMCA/IGggPSB3IDogKGggKz0gIlwwIiwgaCArPSB3KSwgdyA9IHAgKyB0KTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB6KHkpLCBoOwogICAgICAgIH0sIHRvV2lyZVR5cGU6IGZ1bmN0aW9uKHksIGYpIHsKICAgICAgICAgIHR5cGVvZiBmICE9ICJzdHJpbmciICYmIHYoIkNhbm5vdCBwYXNzIG5vbi1zdHJpbmcgdG8gQysrIHN0cmluZyB0eXBlICIgKyByKTsKICAgICAgICAgIHZhciBkID0gcyhmKSwgaCA9IEVuKDQgKyBkICsgdCk7CiAgICAgICAgICByZXR1cm4gVVtoID4+IDJdID0gZCA+PiBjLCBvKGYsIGggKyA0LCBkICsgdCksIHkgIT09IG51bGwgJiYgeS5wdXNoKHosIGgpLCBoOwogICAgICAgIH0sIGFyZ1BhY2tBZHZhbmNlOiA4LCByZWFkVmFsdWVGcm9tUG9pbnRlcjogQW4sIGthOiBmdW5jdGlvbih5KSB7CiAgICAgICAgICB6KHkpOwogICAgICAgIH0gfSk7CiAgICAgIH0sCiAgICAgIHg6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB0ID0gUih0KSwgRChuLCB7IFFhOiAhMCwgbmFtZTogdCwgYXJnUGFja0FkdmFuY2U6IDAsIGZyb21XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSwgdG9XaXJlVHlwZTogZnVuY3Rpb24oKSB7CiAgICAgICAgfSB9KTsKICAgICAgfSwKICAgICAgazogZnVuY3Rpb24obiwgdCwgcikgewogICAgICAgIG4gPSB6bihuKSwgdCA9IEN0KHQsICJlbXZhbDo6YXMiKTsKICAgICAgICB2YXIgaSA9IFtdLCBvID0gZW4oaSk7CiAgICAgICAgcmV0dXJuIGtbciA+PiAyXSA9IG8sIHQudG9XaXJlVHlwZShpLCBuKTsKICAgICAgfSwKICAgICAgaTogQm4sCiAgICAgIGw6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICByZXR1cm4gbiA9IHpuKG4pLCB0ID0gem4odCksIGVuKG5bdF0pOwogICAgICB9LAogICAgICBwOiBmdW5jdGlvbihuKSB7CiAgICAgICAgdmFyIHQgPSBzZVtuXTsKICAgICAgICByZXR1cm4gZW4odCA9PT0gdm9pZCAwID8gUihuKSA6IHQpOwogICAgICB9LAogICAgICBvOiBmdW5jdGlvbihuKSB7CiAgICAgICAgQ24oaltuXS52YWx1ZSksIEJuKG4pOwogICAgICB9LAogICAgICB5OiBmdW5jdGlvbihuLCB0KSB7CiAgICAgICAgcmV0dXJuIG4gPSBDdChuLCAiX2VtdmFsX3Rha2VfdmFsdWUiKSwgbiA9IG4ucmVhZFZhbHVlRnJvbVBvaW50ZXIodCksIGVuKG4pOwogICAgICB9LAogICAgICBmOiBmdW5jdGlvbigpIHsKICAgICAgICBzbigpOwogICAgICB9LAogICAgICBxOiBmdW5jdGlvbihuLCB0LCByKSB7CiAgICAgICAgRi5jb3B5V2l0aGluKG4sIHQsIHQgKyByKTsKICAgICAgfSwKICAgICAgcjogZnVuY3Rpb24obikgewogICAgICAgIG4gPj4+PSAwOwogICAgICAgIHZhciB0ID0gRi5sZW5ndGg7CiAgICAgICAgaWYgKDIxNDc0ODM2NDggPCBuKSByZXR1cm4gITE7CiAgICAgICAgZm9yICh2YXIgciA9IDE7IDQgPj0gcjsgciAqPSAyKSB7CiAgICAgICAgICB2YXIgaSA9IHQgKiAoMSArIDAuMiAvIHIpOwogICAgICAgICAgaSA9IE1hdGgubWluKGksIG4gKyAxMDA2NjMyOTYpLCBpID0gTWF0aC5tYXgoMTY3NzcyMTYsIG4sIGkpLCAwIDwgaSAlIDY1NTM2ICYmIChpICs9IDY1NTM2IC0gaSAlIDY1NTM2KTsKICAgICAgICAgIG46IHsKICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICBILmdyb3coTWF0aC5taW4oMjE0NzQ4MzY0OCwgaSkgLSBLLmJ5dGVMZW5ndGggKyA2NTUzNSA+Pj4gMTYpLCBldChILmJ1ZmZlcik7CiAgICAgICAgICAgICAgdmFyIG8gPSAxOwogICAgICAgICAgICAgIGJyZWFrIG47CiAgICAgICAgICAgIH0gY2F0Y2ggewogICAgICAgICAgICB9CiAgICAgICAgICAgIG8gPSB2b2lkIDA7CiAgICAgICAgICB9CiAgICAgICAgICBpZiAobykgcmV0dXJuICEwOwogICAgICAgIH0KICAgICAgICByZXR1cm4gITE7CiAgICAgIH0sCiAgICAgIHM6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgcmV0dXJuIEV0KCkuZm9yRWFjaChmdW5jdGlvbihpLCBvKSB7CiAgICAgICAgICB2YXIgcyA9IHQgKyByOwogICAgICAgICAgZm9yIChvID0ga1tuICsgNCAqIG8gPj4gMl0gPSBzLCBzID0gMDsgcyA8IGkubGVuZ3RoOyArK3MpIFlbbysrID4+IDBdID0gaS5jaGFyQ29kZUF0KHMpOwogICAgICAgICAgWVtvID4+IDBdID0gMCwgciArPSBpLmxlbmd0aCArIDE7CiAgICAgICAgfSksIDA7CiAgICAgIH0sCiAgICAgIHQ6IGZ1bmN0aW9uKG4sIHQpIHsKICAgICAgICB2YXIgciA9IEV0KCk7CiAgICAgICAga1tuID4+IDJdID0gci5sZW5ndGg7CiAgICAgICAgdmFyIGkgPSAwOwogICAgICAgIHJldHVybiByLmZvckVhY2goZnVuY3Rpb24obykgewogICAgICAgICAgaSArPSBvLmxlbmd0aCArIDE7CiAgICAgICAgfSksIGtbdCA+PiAyXSA9IGksIDA7CiAgICAgIH0sCiAgICAgIGE6IEgKICAgIH07CiAgICAoZnVuY3Rpb24oKSB7CiAgICAgIGZ1bmN0aW9uIG4ocykgewogICAgICAgIHMgPSBzLmV4cG9ydHMsIHMgPSBNdChzKSwgZS5hc20gPSBzLCBaLS0sIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIFogPT0gMCAmJiBvbiAmJiAocyA9IG9uLCBvbiA9IG51bGwsIHMoKSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdChzKSB7CiAgICAgICAgbihzLmluc3RhbmNlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiByKHMpIHsKICAgICAgICByZXR1cm4gWHQoKS50aGVuKGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShsLCBpKTsKICAgICAgICB9KS50aGVuKHMsIGZ1bmN0aW9uKGwpIHsKICAgICAgICAgIEUoImZhaWxlZCB0byBhc3luY2hyb25vdXNseSBwcmVwYXJlIHdhc206ICIgKyBsKSwgc24obCk7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgdmFyIGkgPSB7IGE6IHVlIH07CiAgICAgIGlmIChaKyssIGUubW9uaXRvclJ1bkRlcGVuZGVuY2llcyAmJiBlLm1vbml0b3JSdW5EZXBlbmRlbmNpZXMoWiksIGUuaW5zdGFudGlhdGVXYXNtKSB0cnkgewogICAgICAgIHZhciBvID0gZS5pbnN0YW50aWF0ZVdhc20oaSwgbik7CiAgICAgICAgcmV0dXJuIG8gPSBNdChvKTsKICAgICAgfSBjYXRjaCAocykgewogICAgICAgIHJldHVybiBFKCJNb2R1bGUuaW5zdGFudGlhdGVXYXNtIGNhbGxiYWNrIGZhaWxlZCB3aXRoIGVycm9yOiAiICsgcyksICExOwogICAgICB9CiAgICAgIHJldHVybiBmdW5jdGlvbigpIHsKICAgICAgICBpZiAoVyB8fCB0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgIT0gImZ1bmN0aW9uIiB8fCBzdCgpIHx8IFJuKCJmaWxlOi8vIikgfHwgdHlwZW9mIGZldGNoICE9ICJmdW5jdGlvbiIpIHJldHVybiByKHQpOwogICAgICAgIGZldGNoKCQsIHsgY3JlZGVudGlhbHM6ICJzYW1lLW9yaWdpbiIgfSkudGhlbihmdW5jdGlvbihzKSB7CiAgICAgICAgICByZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocywgaSkudGhlbih0LCBmdW5jdGlvbihsKSB7CiAgICAgICAgICAgIHJldHVybiBFKCJ3YXNtIHN0cmVhbWluZyBjb21waWxlIGZhaWxlZDogIiArIGwpLCBFKCJmYWxsaW5nIGJhY2sgdG8gQXJyYXlCdWZmZXIgaW5zdGFudGlhdGlvbiIpLCByKHQpOwogICAgICAgICAgfSk7CiAgICAgICAgfSk7CiAgICAgIH0oKSwge307CiAgICB9KSgpOwogICAgdmFyIFN0ID0gZS5fX193YXNtX2NhbGxfY3RvcnMgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChTdCA9IGUuX19fd2FzbV9jYWxsX2N0b3JzID0gZS5hc20uQikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIEVuID0gZS5fbWFsbG9jID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoRW4gPSBlLl9tYWxsb2MgPSBlLmFzbS5DKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgeiA9IGUuX2ZyZWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuICh6ID0gZS5fZnJlZSA9IGUuYXNtLkQpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChXdCA9IGUuX19fZ2V0VHlwZU5hbWUgPSBlLmFzbS5FKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX19fZW1iaW5kX3JlZ2lzdGVyX25hdGl2ZV9hbmRfYnVpbHRpbl90eXBlcyA9IGUuYXNtLkYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWkgPSBlLmFzbS5HKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpID0gZS5hc20uSCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9pID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2kgPSBlLmFzbS5JKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWkgPSBlLmFzbS5KKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaSA9IGUuYXNtLkspLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfZmlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2ZpaSA9IGUuYXNtLkwpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpZiA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlmID0gZS5hc20uTSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaSA9IGUuYXNtLk4pLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpID0gZS5hc20uTykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfaWlpaWlpID0gZS5hc20uUCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpID0gZS5hc20uUSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF9paWlpaWlpaSA9IGUuYXNtLlIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWkgPSBlLmFzbS5TKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWlkaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpZGkgPSBlLmFzbS5UKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX3ZpaWlpaWlpaWRpID0gZS5hc20uVSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpaSA9IGUuYXNtLlYpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7CiAgICB9LCBlLmR5bkNhbGxfdmlpaWlpaWlpaSA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuZHluQ2FsbF92aWlpaWlpaWlpID0gZS5hc20uVykuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF92aWlpaWlpaWkgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLmR5bkNhbGxfdmlpaWlpaWlpID0gZS5hc20uWCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpaWkgPSBlLmFzbS5ZKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5keW5DYWxsX2lpaWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWlpID0gZS5hc20uWikuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuZHluQ2FsbF9paWlpID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5keW5DYWxsX2lpaWkgPSBlLmFzbS5fKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RhcnRfdW53aW5kID0gZS5hc20uJCkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0b3BfdW53aW5kID0gZnVuY3Rpb24oKSB7CiAgICAgIHJldHVybiAoZS5fYXN5bmNpZnlfc3RvcF91bndpbmQgPSBlLmFzbS5hYSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsKICAgIH0sIGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGZ1bmN0aW9uKCkgewogICAgICByZXR1cm4gKGUuX2FzeW5jaWZ5X3N0YXJ0X3Jld2luZCA9IGUuYXNtLmJhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfSwgZS5fYXN5bmNpZnlfc3RvcF9yZXdpbmQgPSBmdW5jdGlvbigpIHsKICAgICAgcmV0dXJuIChlLl9hc3luY2lmeV9zdG9wX3Jld2luZCA9IGUuYXNtLmNhKS5hcHBseShudWxsLCBhcmd1bWVudHMpOwogICAgfTsKICAgIHZhciBQbjsKICAgIG9uID0gZnVuY3Rpb24gbigpIHsKICAgICAgUG4gfHwgR24oKSwgUG4gfHwgKG9uID0gbik7CiAgICB9OwogICAgZnVuY3Rpb24gR24oKSB7CiAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgaWYgKCFQbiAmJiAoUG4gPSAhMCwgZS5jYWxsZWRSdW4gPSAhMCwgIWtuKSkgewogICAgICAgICAgaWYgKHBuKGF0KSwgcG4oWnQpLCBtKGUpLCBlLm9uUnVudGltZUluaXRpYWxpemVkICYmIGUub25SdW50aW1lSW5pdGlhbGl6ZWQoKSwgZS5wb3N0UnVuKSBmb3IgKHR5cGVvZiBlLnBvc3RSdW4gPT0gImZ1bmN0aW9uIiAmJiAoZS5wb3N0UnVuID0gW2UucG9zdFJ1bl0pOyBlLnBvc3RSdW4ubGVuZ3RoOyApIHsKICAgICAgICAgICAgdmFyIHQgPSBlLnBvc3RSdW4uc2hpZnQoKTsKICAgICAgICAgICAgb3QudW5zaGlmdCh0KTsKICAgICAgICAgIH0KICAgICAgICAgIHBuKG90KTsKICAgICAgICB9CiAgICAgIH0KICAgICAgaWYgKCEoMCA8IFopKSB7CiAgICAgICAgaWYgKGUucHJlUnVuKSBmb3IgKHR5cGVvZiBlLnByZVJ1biA9PSAiZnVuY3Rpb24iICYmIChlLnByZVJ1biA9IFtlLnByZVJ1bl0pOyBlLnByZVJ1bi5sZW5ndGg7ICkgJHQoKTsKICAgICAgICBwbihpdCksIDAgPCBaIHx8IChlLnNldFN0YXR1cyA/IChlLnNldFN0YXR1cygiUnVubmluZy4uLiIpLCBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgICAgICAgICAgZS5zZXRTdGF0dXMoIiIpOwogICAgICAgICAgfSwgMSksIG4oKTsKICAgICAgICB9LCAxKSkgOiBuKCkpOwogICAgICB9CiAgICB9CiAgICBpZiAoZS5ydW4gPSBHbiwgZS5wcmVJbml0KSBmb3IgKHR5cGVvZiBlLnByZUluaXQgPT0gImZ1bmN0aW9uIiAmJiAoZS5wcmVJbml0ID0gW2UucHJlSW5pdF0pOyAwIDwgZS5wcmVJbml0Lmxlbmd0aDsgKSBlLnByZUluaXQucG9wKCkoKTsKICAgIHJldHVybiBHbigpLCB1LnJlYWR5OwogIH07Cn0oKTsKY2xhc3MgbWUgewogIGNvbnN0cnVjdG9yKCkgewogICAgWW4odGhpcywgInNhbVdhc21Nb2R1bGUiKTsKICB9CiAgZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZSkgewogICAgcmV0dXJuIHsKICAgICAgbG9jYXRlRmlsZTogKG0pID0+IG5ldyBVUkwoZSB8fCBtLCB1KS5ocmVmCiAgICB9OwogIH0KICBhc3luYyBoYW5kbGVNaXNzaW5nT3JJbnZhbGlkU2FtTW9kdWxlKHUsIGUpIHsKICAgIHRyeSB7CiAgICAgIGNvbnN0IG0gPSBhd2FpdCBmZXRjaCh1KTsKICAgICAgaWYgKCFtLm9rKQogICAgICAgIHRocm93IG5ldyBJKAogICAgICAgICAgYFRoZSBwYXRoIHRvICR7ZX0gaXMgaW5jb3JyZWN0IG9yIHRoZSBtb2R1bGUgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgICAgY29uc3QgZyA9IGF3YWl0IG0uYXJyYXlCdWZmZXIoKTsKICAgICAgaWYgKCFXZWJBc3NlbWJseS52YWxpZGF0ZShnKSkKICAgICAgICB0aHJvdyBuZXcgSSgKICAgICAgICAgIGBUaGUgcHJvdmlkZWQgJHtlfSBpcyBub3QgYSB2YWxpZCBXQVNNIG1vZHVsZS4gUGxlYXNlIGNoZWNrIHByb3ZpZGVkIHBhdGggdG8gd2FzbSBmaWxlcy4gQ3VycmVudCBwYXRoIGlzICR7dX1gCiAgICAgICAgKTsKICAgIH0gY2F0Y2ggKG0pIHsKICAgICAgaWYgKG0gaW5zdGFuY2VvZiBJKQogICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoCiAgICAgICAgICAiWW91IGNhbiBmaW5kIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIGhvc3Qgd2FzbSBmaWxlcyBoZXJlOiBodHRwczovL2RldmVsb3BlcnMuaW5ub3ZhdHJpY3MuY29tL2RpZ2l0YWwtb25ib2FyZGluZy90ZWNobmljYWwvcmVtb3RlL2RvdC13ZWItZG9jdW1lbnQvbGF0ZXN0L2RvY3VtZW50YXRpb24vI19ob3N0aW5nX3NhbV93YXNtIgogICAgICAgICksIG07CiAgICB9CiAgfQogIGFzeW5jIGdldFdhc21GaWxlTmFtZSgpIHsKICAgIHJldHVybiBhd2FpdCBmZSgpID8ga3Quc2ltZCA6IGt0LnNhbTsKICB9CiAgYXN5bmMgaW5pdFNhbU1vZHVsZSh1LCBlID0gIi93YXNtIikgewogICAgaWYgKHRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgcmV0dXJuOwogICAgY29uc3QgbSA9IGF3YWl0IHRoaXMuZ2V0V2FzbUZpbGVOYW1lKCksIGcgPSBgJHtlfS8ke219YDsKICAgIHRyeSB7CiAgICAgIHRoaXMuc2FtV2FzbU1vZHVsZSA9IGF3YWl0IHBlKHRoaXMuZ2V0T3ZlcnJpZGRlbk1vZHVsZXModSwgZykpOwogICAgfSBjYXRjaCB7CiAgICAgIHRocm93IGF3YWl0IHRoaXMuaGFuZGxlTWlzc2luZ09ySW52YWxpZFNhbU1vZHVsZShnLCBtKSwgbmV3IEkoIkNvdWxkIG5vdCBpbml0IGRldGVjdG9yLiIpOwogICAgfQogIH0KICBhc3luYyBnZXRTYW1WZXJzaW9uKCkgewogICAgdmFyIGU7CiAgICBjb25zdCB1ID0gYXdhaXQgKChlID0gdGhpcy5zYW1XYXNtTW9kdWxlKSA9PSBudWxsID8gdm9pZCAwIDogZS5nZXRJbmZvU3RyaW5nKCkpOwogICAgcmV0dXJuIHUgPT0gbnVsbCA/IHZvaWQgMCA6IHUudHJpbSgpOwogIH0KICAvKgogICAqIEluIFRTIDUuMi4wIHdhcyBhZGRlZCBzcGVjaWFsIGtleXdvcmQgInVzaW5nIiB3aGljaCBjb3VsZCBiZSBwZXJmZWN0IGZvciB0aGlzIGNhc2UuCiAgICogVW5mb3J0dW5hdGVseSwgdml0ZSBwcmVhY3QgcGx1Z2luIGRvZXMgbm90IHN1cHBvcnQgdGhpcyB2ZXJzaW9uIG9mIFRTIHlldC4KICAgKiBDaGVjayBwb3NzaWJpbGl0eSBvZiB1c2luZyAidXNpbmciIGtleXdvcmQgd2hlbiB2aXRlIHByZWFjdCBwbHVnaW4gdXBkYXRlcwogICAqLwogIGFsbG9jYXRlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgcmV0dXJuIHRoaXMuc2FtV2FzbU1vZHVsZS5fbWFsbG9jKHUpOwogIH0KICByZWxlYXNlTWVtb3J5KHUpIHsKICAgIGlmICghdGhpcy5zYW1XYXNtTW9kdWxlKQogICAgICB0aHJvdyBuZXcgSSgiU0FNIFdBU00gbW9kdWxlIGlzIG5vdCBpbml0aWFsaXplZCIpOwogICAgdGhpcy5zYW1XYXNtTW9kdWxlLl9mcmVlKHUpOwogIH0KICB3cml0ZURhdGFUb01lbW9yeSh1LCBlKSB7CiAgICBpZiAoIXRoaXMuc2FtV2FzbU1vZHVsZSkKICAgICAgdGhyb3cgbmV3IEkoIlNBTSBXQVNNIG1vZHVsZSBpcyBub3QgaW5pdGlhbGl6ZWQiKTsKICAgIHRoaXMuc2FtV2FzbU1vZHVsZS5IRUFQVTguc2V0KHUsIGUpOwogIH0KfQovKioKICogQGxpY2Vuc2UKICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQwogKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMAogKi8KY29uc3QgeHQgPSBTeW1ib2woIkNvbWxpbmsucHJveHkiKSwgdmUgPSBTeW1ib2woIkNvbWxpbmsuZW5kcG9pbnQiKSwgZ2UgPSBTeW1ib2woIkNvbWxpbmsucmVsZWFzZVByb3h5IiksIFpuID0gU3ltYm9sKCJDb21saW5rLmZpbmFsaXplciIpLCBPbiA9IFN5bWJvbCgiQ29tbGluay50aHJvd24iKSwgRnQgPSAoYSkgPT4gdHlwZW9mIGEgPT0gIm9iamVjdCIgJiYgYSAhPT0gbnVsbCB8fCB0eXBlb2YgYSA9PSAiZnVuY3Rpb24iLCB3ZSA9IHsKICBjYW5IYW5kbGU6IChhKSA9PiBGdChhKSAmJiBhW3h0XSwKICBzZXJpYWxpemUoYSkgewogICAgY29uc3QgeyBwb3J0MTogdSwgcG9ydDI6IGUgfSA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpOwogICAgcmV0dXJuIEpuKGEsIHUpLCBbZSwgW2VdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHJldHVybiBhLnN0YXJ0KCksIFRlKGEpOwogIH0KfSwgQWUgPSB7CiAgY2FuSGFuZGxlOiAoYSkgPT4gRnQoYSkgJiYgT24gaW4gYSwKICBzZXJpYWxpemUoeyB2YWx1ZTogYSB9KSB7CiAgICBsZXQgdTsKICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyB1ID0gewogICAgICBpc0Vycm9yOiAhMCwKICAgICAgdmFsdWU6IHsKICAgICAgICBtZXNzYWdlOiBhLm1lc3NhZ2UsCiAgICAgICAgbmFtZTogYS5uYW1lLAogICAgICAgIHN0YWNrOiBhLnN0YWNrCiAgICAgIH0KICAgIH0gOiB1ID0geyBpc0Vycm9yOiAhMSwgdmFsdWU6IGEgfSwgW3UsIFtdXTsKICB9LAogIGRlc2VyaWFsaXplKGEpIHsKICAgIHRocm93IGEuaXNFcnJvciA/IE9iamVjdC5hc3NpZ24obmV3IEVycm9yKGEudmFsdWUubWVzc2FnZSksIGEudmFsdWUpIDogYS52YWx1ZTsKICB9Cn0sIEl0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoWwogIFsicHJveHkiLCB3ZV0sCiAgWyJ0aHJvdyIsIEFlXQpdKTsKZnVuY3Rpb24gX2UoYSwgdSkgewogIGZvciAoY29uc3QgZSBvZiBhKQogICAgaWYgKHUgPT09IGUgfHwgZSA9PT0gIioiIHx8IGUgaW5zdGFuY2VvZiBSZWdFeHAgJiYgZS50ZXN0KHUpKQogICAgICByZXR1cm4gITA7CiAgcmV0dXJuICExOwp9CmZ1bmN0aW9uIEpuKGEsIHUgPSBnbG9iYWxUaGlzLCBlID0gWyIqIl0pIHsKICB1LmFkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBmdW5jdGlvbiBtKGcpIHsKICAgIGlmICghZyB8fCAhZy5kYXRhKQogICAgICByZXR1cm47CiAgICBpZiAoIV9lKGUsIGcub3JpZ2luKSkgewogICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgb3JpZ2luICcke2cub3JpZ2lufScgZm9yIGNvbWxpbmsgcHJveHlgKTsKICAgICAgcmV0dXJuOwogICAgfQogICAgY29uc3QgeyBpZDogQywgdHlwZTogQSwgcGF0aDogTSB9ID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6IFtdIH0sIGcuZGF0YSksIE8gPSAoZy5kYXRhLmFyZ3VtZW50TGlzdCB8fCBbXSkubWFwKEopOwogICAgbGV0IFQ7CiAgICB0cnkgewogICAgICBjb25zdCBfID0gTS5zbGljZSgwLCAtMSkucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKSwgUyA9IE0ucmVkdWNlKChFLCBXKSA9PiBFW1ddLCBhKTsKICAgICAgc3dpdGNoIChBKSB7CiAgICAgICAgY2FzZSAiR0VUIjoKICAgICAgICAgIFQgPSBTOwogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiU0VUIjoKICAgICAgICAgIF9bTS5zbGljZSgtMSlbMF1dID0gSihnLmRhdGEudmFsdWUpLCBUID0gITA7CiAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICJBUFBMWSI6CiAgICAgICAgICBUID0gUy5hcHBseShfLCBPKTsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIkNPTlNUUlVDVCI6CiAgICAgICAgICB7CiAgICAgICAgICAgIGNvbnN0IEUgPSBuZXcgUyguLi5PKTsKICAgICAgICAgICAgVCA9IFNlKEUpOwogICAgICAgICAgfQogICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAiRU5EUE9JTlQiOgogICAgICAgICAgewogICAgICAgICAgICBjb25zdCB7IHBvcnQxOiBFLCBwb3J0MjogVyB9ID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7CiAgICAgICAgICAgIEpuKGEsIFcpLCBUID0gT2UoRSwgW0VdKTsKICAgICAgICAgIH0KICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIlJFTEVBU0UiOgogICAgICAgICAgVCA9IHZvaWQgMDsKICAgICAgICAgIGJyZWFrOwogICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICByZXR1cm47CiAgICAgIH0KICAgIH0gY2F0Y2ggKF8pIHsKICAgICAgVCA9IHsgdmFsdWU6IF8sIFtPbl06IDAgfTsKICAgIH0KICAgIFByb21pc2UucmVzb2x2ZShUKS5jYXRjaCgoXykgPT4gKHsgdmFsdWU6IF8sIFtPbl06IDAgfSkpLnRoZW4oKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oXyk7CiAgICAgIHUucG9zdE1lc3NhZ2UoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBTKSwgeyBpZDogQyB9KSwgRSksIEEgPT09ICJSRUxFQVNFIiAmJiAodS5yZW1vdmVFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgbSksIGp0KHUpLCBabiBpbiBhICYmIHR5cGVvZiBhW1puXSA9PSAiZnVuY3Rpb24iICYmIGFbWm5dKCkpOwogICAgfSkuY2F0Y2goKF8pID0+IHsKICAgICAgY29uc3QgW1MsIEVdID0gYm4oewogICAgICAgIHZhbHVlOiBuZXcgVHlwZUVycm9yKCJVbnNlcmlhbGl6YWJsZSByZXR1cm4gdmFsdWUiKSwKICAgICAgICBbT25dOiAwCiAgICAgIH0pOwogICAgICB1LnBvc3RNZXNzYWdlKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgUyksIHsgaWQ6IEMgfSksIEUpOwogICAgfSk7CiAgfSksIHUuc3RhcnQgJiYgdS5zdGFydCgpOwp9CmZ1bmN0aW9uIENlKGEpIHsKICByZXR1cm4gYS5jb25zdHJ1Y3Rvci5uYW1lID09PSAiTWVzc2FnZVBvcnQiOwp9CmZ1bmN0aW9uIGp0KGEpIHsKICBDZShhKSAmJiBhLmNsb3NlKCk7Cn0KZnVuY3Rpb24gVGUoYSwgdSkgewogIHJldHVybiBYbihhLCBbXSwgdSk7Cn0KZnVuY3Rpb24gTW4oYSkgewogIGlmIChhKQogICAgdGhyb3cgbmV3IEVycm9yKCJQcm94eSBoYXMgYmVlbiByZWxlYXNlZCBhbmQgaXMgbm90IHVzZWFibGUiKTsKfQpmdW5jdGlvbiBMdChhKSB7CiAgcmV0dXJuIGFuKGEsIHsKICAgIHR5cGU6ICJSRUxFQVNFIgogIH0pLnRoZW4oKCkgPT4gewogICAganQoYSk7CiAgfSk7Cn0KY29uc3QgU24gPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKSwgV24gPSAiRmluYWxpemF0aW9uUmVnaXN0cnkiIGluIGdsb2JhbFRoaXMgJiYgbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KChhKSA9PiB7CiAgY29uc3QgdSA9IChTbi5nZXQoYSkgfHwgMCkgLSAxOwogIFNuLnNldChhLCB1KSwgdSA9PT0gMCAmJiBMdChhKTsKfSk7CmZ1bmN0aW9uIEVlKGEsIHUpIHsKICBjb25zdCBlID0gKFNuLmdldCh1KSB8fCAwKSArIDE7CiAgU24uc2V0KHUsIGUpLCBXbiAmJiBXbi5yZWdpc3RlcihhLCB1LCBhKTsKfQpmdW5jdGlvbiBQZShhKSB7CiAgV24gJiYgV24udW5yZWdpc3RlcihhKTsKfQpmdW5jdGlvbiBYbihhLCB1ID0gW10sIGUgPSBmdW5jdGlvbigpIHsKfSkgewogIGxldCBtID0gITE7CiAgY29uc3QgZyA9IG5ldyBQcm94eShlLCB7CiAgICBnZXQoQywgQSkgewogICAgICBpZiAoTW4obSksIEEgPT09IGdlKQogICAgICAgIHJldHVybiAoKSA9PiB7CiAgICAgICAgICBQZShnKSwgTHQoYSksIG0gPSAhMDsKICAgICAgICB9OwogICAgICBpZiAoQSA9PT0gInRoZW4iKSB7CiAgICAgICAgaWYgKHUubGVuZ3RoID09PSAwKQogICAgICAgICAgcmV0dXJuIHsgdGhlbjogKCkgPT4gZyB9OwogICAgICAgIGNvbnN0IE0gPSBhbihhLCB7CiAgICAgICAgICB0eXBlOiAiR0VUIiwKICAgICAgICAgIHBhdGg6IHUubWFwKChPKSA9PiBPLnRvU3RyaW5nKCkpCiAgICAgICAgfSkudGhlbihKKTsKICAgICAgICByZXR1cm4gTS50aGVuLmJpbmQoTSk7CiAgICAgIH0KICAgICAgcmV0dXJuIFhuKGEsIFsuLi51LCBBXSk7CiAgICB9LAogICAgc2V0KEMsIEEsIE0pIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtPLCBUXSA9IGJuKE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJTRVQiLAogICAgICAgIHBhdGg6IFsuLi51LCBBXS5tYXAoKF8pID0+IF8udG9TdHJpbmcoKSksCiAgICAgICAgdmFsdWU6IE8KICAgICAgfSwgVCkudGhlbihKKTsKICAgIH0sCiAgICBhcHBseShDLCBBLCBNKSB7CiAgICAgIE1uKG0pOwogICAgICBjb25zdCBPID0gdVt1Lmxlbmd0aCAtIDFdOwogICAgICBpZiAoTyA9PT0gdmUpCiAgICAgICAgcmV0dXJuIGFuKGEsIHsKICAgICAgICAgIHR5cGU6ICJFTkRQT0lOVCIKICAgICAgICB9KS50aGVuKEopOwogICAgICBpZiAoTyA9PT0gImJpbmQiKQogICAgICAgIHJldHVybiBYbihhLCB1LnNsaWNlKDAsIC0xKSk7CiAgICAgIGNvbnN0IFtULCBfXSA9IFJ0KE0pOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJBUFBMWSIsCiAgICAgICAgcGF0aDogdS5tYXAoKFMpID0+IFMudG9TdHJpbmcoKSksCiAgICAgICAgYXJndW1lbnRMaXN0OiBUCiAgICAgIH0sIF8pLnRoZW4oSik7CiAgICB9LAogICAgY29uc3RydWN0KEMsIEEpIHsKICAgICAgTW4obSk7CiAgICAgIGNvbnN0IFtNLCBPXSA9IFJ0KEEpOwogICAgICByZXR1cm4gYW4oYSwgewogICAgICAgIHR5cGU6ICJDT05TVFJVQ1QiLAogICAgICAgIHBhdGg6IHUubWFwKChUKSA9PiBULnRvU3RyaW5nKCkpLAogICAgICAgIGFyZ3VtZW50TGlzdDogTQogICAgICB9LCBPKS50aGVuKEopOwogICAgfQogIH0pOwogIHJldHVybiBFZShnLCBhKSwgZzsKfQpmdW5jdGlvbiBNZShhKSB7CiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGEpOwp9CmZ1bmN0aW9uIFJ0KGEpIHsKICBjb25zdCB1ID0gYS5tYXAoYm4pOwogIHJldHVybiBbdS5tYXAoKGUpID0+IGVbMF0pLCBNZSh1Lm1hcCgoZSkgPT4gZVsxXSkpXTsKfQpjb25zdCBOdCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpOwpmdW5jdGlvbiBPZShhLCB1KSB7CiAgcmV0dXJuIE50LnNldChhLCB1KSwgYTsKfQpmdW5jdGlvbiBTZShhKSB7CiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYSwgeyBbeHRdOiAhMCB9KTsKfQpmdW5jdGlvbiBibihhKSB7CiAgZm9yIChjb25zdCBbdSwgZV0gb2YgSXQpCiAgICBpZiAoZS5jYW5IYW5kbGUoYSkpIHsKICAgICAgY29uc3QgW20sIGddID0gZS5zZXJpYWxpemUoYSk7CiAgICAgIHJldHVybiBbCiAgICAgICAgewogICAgICAgICAgdHlwZTogIkhBTkRMRVIiLAogICAgICAgICAgbmFtZTogdSwKICAgICAgICAgIHZhbHVlOiBtCiAgICAgICAgfSwKICAgICAgICBnCiAgICAgIF07CiAgICB9CiAgcmV0dXJuIFsKICAgIHsKICAgICAgdHlwZTogIlJBVyIsCiAgICAgIHZhbHVlOiBhCiAgICB9LAogICAgTnQuZ2V0KGEpIHx8IFtdCiAgXTsKfQpmdW5jdGlvbiBKKGEpIHsKICBzd2l0Y2ggKGEudHlwZSkgewogICAgY2FzZSAiSEFORExFUiI6CiAgICAgIHJldHVybiBJdC5nZXQoYS5uYW1lKS5kZXNlcmlhbGl6ZShhLnZhbHVlKTsKICAgIGNhc2UgIlJBVyI6CiAgICAgIHJldHVybiBhLnZhbHVlOwogIH0KfQpmdW5jdGlvbiBhbihhLCB1LCBlKSB7CiAgcmV0dXJuIG5ldyBQcm9taXNlKChtKSA9PiB7CiAgICBjb25zdCBnID0gV2UoKTsKICAgIGEuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsIGZ1bmN0aW9uIEMoQSkgewogICAgICAhQS5kYXRhIHx8ICFBLmRhdGEuaWQgfHwgQS5kYXRhLmlkICE9PSBnIHx8IChhLnJlbW92ZUV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLCBDKSwgbShBLmRhdGEpKTsKICAgIH0pLCBhLnN0YXJ0ICYmIGEuc3RhcnQoKSwgYS5wb3N0TWVzc2FnZShPYmplY3QuYXNzaWduKHsgaWQ6IGcgfSwgdSksIGUpOwogIH0pOwp9CmZ1bmN0aW9uIFdlKCkgewogIHJldHVybiBuZXcgQXJyYXkoNCkuZmlsbCgwKS5tYXAoKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpLnRvU3RyaW5nKDE2KSkuam9pbigiLSIpOwp9CmZ1bmN0aW9uIEh0KGEsIHUpIHsKICByZXR1cm4gTWF0aC5zcXJ0KChhLnggLSB1LngpICoqIDIgKyAoYS55IC0gdS55KSAqKiAyKTsKfQpmdW5jdGlvbiBiZShhLCB1KSB7CiAgcmV0dXJuIHsKICAgIHg6IChhLnggKyB1LngpIC8gMiwKICAgIHk6IChhLnkgKyB1LnkpIC8gMgogIH07Cn0KZnVuY3Rpb24ga2UoYSwgdSkgewogIGlmIChhLmNvbmZpZGVuY2UgPD0gMCB8fCB1LmNvbmZpZGVuY2UgPD0gMCkKICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTsKICBjb25zdCBlID0gSHQoYS5jZW50ZXIsIHUuY2VudGVyKSwgbSA9IGJlKGEuY2VudGVyLCB1LmNlbnRlcik7CiAgcmV0dXJuIHsKICAgIHg6IG0ueCwKICAgIHk6IG0ueSArIGUgLyA0CiAgICAvLyBjYWxjdWxhdGlvbiBpcyB0YWtlbiBmcm9tIG1vYmlsZSB0ZWFtCiAgfTsKfQpmdW5jdGlvbiBSZShhLCB1LCBlKSB7CiAgaWYgKGEuY29uZmlkZW5jZSA8PSAwIHx8IHUuY29uZmlkZW5jZSA8PSAwKQogICAgcmV0dXJuIDA7CiAgY29uc3QgbSA9IEh0KGEuY2VudGVyLCB1LmNlbnRlciksIGcgPSB5ZShlLndpZHRoLCBlLmhlaWdodCk7CiAgcmV0dXJuIGhlKG0gLyBnKTsKfQpmdW5jdGlvbiAkbihhKSB7CiAgY29uc3QgeyBjZW50ZXJYOiB1LCBjZW50ZXJZOiBlLCBjb25maWRlbmNlOiBtLCBzaXplOiBnLCBzdGF0dXM6IEMgfSA9IGE7CiAgcmV0dXJuIHsKICAgIGNlbnRlcjogewogICAgICB4OiB1LAogICAgICB5OiBlCiAgICB9LAogICAgY29uZmlkZW5jZTogbSAvIDFlMywKICAgIHN0YXR1czogQyAvIDFlMywKICAgIHNpemU6IGcKICB9Owp9CmNsYXNzIHhlIGV4dGVuZHMgbWUgewogIHBhcnNlUmF3RGF0YSh1LCBlKSB7CiAgICBjb25zdCB7IGJyaWdodG5lc3M6IG0sIHNoYXJwbmVzczogZyB9ID0gdS5wYXJhbXMsIHsgYm90dG9tUmlnaHRYOiBDLCBib3R0b21SaWdodFk6IEEsIGxlZnRFeWU6IE0sIG1vdXRoOiBPLCByaWdodEV5ZTogVCwgdG9wTGVmdFg6IF8sIHRvcExlZnRZOiBTIH0gPSB1LCBFID0gJG4oTSksIFcgPSAkbihUKSwgSCA9ICRuKE8pOwogICAgcmV0dXJuIHsKICAgICAgY29uZmlkZW5jZTogdS5jb25maWRlbmNlIC8gMWUzLAogICAgICB0b3BMZWZ0OiB7CiAgICAgICAgeDogXywKICAgICAgICB5OiBTCiAgICAgIH0sCiAgICAgIGJvdHRvbVJpZ2h0OiB7CiAgICAgICAgeDogQywKICAgICAgICB5OiBBCiAgICAgIH0sCiAgICAgIGZhY2VDZW50ZXI6IGtlKEUsIFcpLAogICAgICBmYWNlU2l6ZTogUmUoRSwgVywgZSksCiAgICAgIGxlZnRFeWU6IEUsCiAgICAgIHJpZ2h0RXllOiBXLAogICAgICBtb3V0aDogSCwKICAgICAgYnJpZ2h0bmVzczogbSAvIDFlMywKICAgICAgc2hhcnBuZXNzOiBnIC8gMWUzCiAgICB9OwogIH0KICBhc3luYyBkZXRlY3QodSwgZSwgbSkgewogICAgaWYgKCF0aGlzLnNhbVdhc21Nb2R1bGUpCiAgICAgIHRocm93IG5ldyBJKCJTQU0gV0FTTSBtb2R1bGUgaXMgbm90IGluaXRpYWxpemVkIik7CiAgICBjb25zdCBnID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpLCBDID0gdGhpcy5hbGxvY2F0ZU1lbW9yeSh1Lmxlbmd0aCAqIHUuQllURVNfUEVSX0VMRU1FTlQpOwogICAgdGhpcy53cml0ZURhdGFUb01lbW9yeSh1LCBnKSwgdGhpcy5zYW1XYXNtTW9kdWxlLmNvbnZlcnRUb1NhbUNvbG9ySW1hZ2UoCiAgICAgIGUud2lkdGgsCiAgICAgIGUuaGVpZ2h0LAogICAgICBnLAogICAgICBkZS5SR0JBLAogICAgICBDCiAgICApOwogICAgY29uc3QgQSA9IHRoaXMuc2FtV2FzbU1vZHVsZS5kZXRlY3RGYWNlUGFydHNXaXRoSW1hZ2VQYXJhbWV0ZXJzKAogICAgICBlLndpZHRoLAogICAgICBlLmhlaWdodCwKICAgICAgQywKICAgICAgMCwKICAgICAgMCwKICAgICAgLy8gcGFyYW1XaWR0aCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICAgMAogICAgICAvLyBwYXJhbUhlaWdodCBzaG91bGQgYmUgMCAoZGVmYXVsdCB2YWx1ZSkKICAgICk7CiAgICByZXR1cm4gdGhpcy5yZWxlYXNlTWVtb3J5KGcpLCB0aGlzLnJlbGVhc2VNZW1vcnkoQyksIHRoaXMucGFyc2VSYXdEYXRhKEEsIG0pOwogIH0KfQpKbih4ZSk7Cg==", G1 = (x) => Uint8Array.from(atob(x), (o) => o.charCodeAt(0)), wa = typeof window < "u" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", G1(kc)], { type: "text/javascript;charset=utf-8" });
function k1(x) {
  let o;
  try {
    if (o = wa && (window.URL || window.webkitURL).createObjectURL(wa), !o) throw "";
    const t = new Worker(o, {
      type: "module",
      name: x == null ? void 0 : x.name
    });
    return t.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(o);
    }), t;
  } catch {
    return new Worker(
      "data:text/javascript;base64," + kc,
      {
        type: "module",
        name: x == null ? void 0 : x.name
      }
    );
  }
}
var Z0, i0;
class H1 {
  constructor(o) {
    de(this, Z0);
    de(this, i0);
    ae(this, Z0, o), ae(this, i0, /* @__PURE__ */ new Map());
  }
  validate() {
    X(this, Z0).forEach((o) => {
      X(this, i0).set(o.name, o.evaluate());
    });
  }
  isValid() {
    return Array.from(X(this, i0).values()).every((o) => o);
  }
  get result() {
    return X(this, i0);
  }
  get validators() {
    return X(this, Z0);
  }
}
Z0 = new WeakMap(), i0 = new WeakMap();
var pn, a0;
class rt {
  constructor(o, t) {
    de(this, pn);
    de(this, a0);
    ae(this, pn, o), ae(this, a0, t);
  }
  get threshold() {
    return X(this, a0);
  }
  get name() {
    return X(this, pn);
  }
  isValueBelowThreshold(o) {
    return o < X(this, a0);
  }
  isValueAboveThreshold(o) {
    return o > X(this, a0);
  }
}
pn = new WeakMap(), a0 = new WeakMap();
var mn;
class O1 extends rt {
  constructor(t, e) {
    super("isNotDim", t);
    de(this, mn);
    ae(this, mn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, mn));
  }
}
mn = new WeakMap();
var bn;
class K1 extends rt {
  constructor(t, e) {
    super("isNotSmall", t);
    de(this, bn);
    ae(this, bn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, bn));
  }
}
bn = new WeakMap();
var An;
class Z1 extends rt {
  constructor(t, e) {
    super("isNotBright", t);
    de(this, An);
    ae(this, An, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, An));
  }
}
An = new WeakMap();
var yn;
class R1 extends rt {
  constructor(t, e) {
    super("isPresent", t);
    de(this, yn);
    ae(this, yn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, yn));
  }
}
yn = new WeakMap();
var Wn;
class P1 extends rt {
  constructor(t, e) {
    super("isSharp", t);
    de(this, Wn);
    ae(this, Wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, Wn));
  }
}
Wn = new WeakMap();
var vn;
class V1 extends rt {
  constructor(t, e) {
    super("isLeftEyePresent", t);
    de(this, vn);
    ae(this, vn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, vn));
  }
}
vn = new WeakMap();
var wn;
class T1 extends rt {
  constructor(t, e) {
    super("isMouthPresent", t);
    de(this, wn);
    ae(this, wn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, wn));
  }
}
wn = new WeakMap();
var Sn;
class E1 extends rt {
  constructor(t, e) {
    super("isMouthScoreNotTooLow", t);
    de(this, Sn);
    ae(this, Sn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, Sn));
  }
}
Sn = new WeakMap();
var Bn;
class L1 extends rt {
  constructor(t, e) {
    super("isMouthScoreNotTooHigh", t);
    de(this, Bn);
    ae(this, Bn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, Bn));
  }
}
Bn = new WeakMap();
var Gn;
class N1 extends rt {
  constructor(t, e) {
    super("isNotLarge", t);
    de(this, Gn);
    ae(this, Gn, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(X(this, Gn));
  }
}
Gn = new WeakMap();
var kn;
class D1 extends rt {
  constructor(t, e) {
    super("isNotPitched", t || -2300 + 5 * 95 + 1925);
    de(this, kn);
    ae(this, kn, e);
  }
  evaluate() {
    const { z: t } = X(this, kn) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
}
kn = new WeakMap();
var Hn;
class F1 extends rt {
  constructor(t, e) {
    super("isRightEyePresent", t);
    de(this, Hn);
    ae(this, Hn, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(X(this, Hn));
  }
}
Hn = new WeakMap();
var On, R0;
class Y1 extends rt {
  constructor(t, e, n) {
    super("isNotOutOfBounds", t);
    de(this, On);
    de(this, R0);
    ae(this, On, e), ae(this, R0, n);
  }
  evaluate() {
    const t = mc(X(this, R0), this.threshold), e = bc(X(this, On), X(this, R0));
    return Xl(e, t);
  }
}
On = new WeakMap(), R0 = new WeakMap();
class X1 {
  static getFaceValidationInstance(o, t, e, n) {
    return new H1([new R1(o.faceConfidence, t.confidence), new V1(o.leftEye.confidence, t.leftEye.confidence), new F1(o.rightEye.confidence, t.rightEye.confidence), new K1(o.minFaceSizeRatio, t.faceSize), new N1(o.maxFaceSizeRatio, t.faceSize), new P1(o.sharpnessThreshold, t.sharpness), new O1(o.brightnessLowThreshold, t.brightness), new Z1(o.brightnessHighThreshold, t.brightness), new Y1(o.outOfBoundsThreshold, t, e), new D1(o.pitchAngleAccelerationThreshold, n), new T1(o.mouth.confidence, t.mouth.confidence), new L1(o.mouth.status.max, t.mouth.status), new E1(o.mouth.status.min, t.mouth.status)]);
  }
}
const Ux = class Ux extends f1 {
  constructor() {
    super(...arguments);
    j(this, "detector");
    j(this, "className", "FaceController");
    j(this, "fallbackInstruction", Ve.FACE_NOT_PRESENT);
    j(this, "pitchAngleAccelerationThreshold", null);
    j(this, "getInstructionCode", (t, e) => {
      var r;
      if (this.isInCandidateSelection) return Ve.CANDIDATE_SELECTION;
      if ((r = this.lastImage) != null && r.isValid && e) return Ve.CANDIDATE_SELECTION;
      if (this.lastImage && e) return this.lastImage.instructionCode;
      const [n] = this.getInstructionCodesForValidators(t);
      return n ?? this.fallbackInstruction;
    });
    j(this, "getInstructionCodesForValidators", (t) => {
      const e = [];
      return Array.from(t).forEach(([n, r]) => {
        !r && e.push(bu[n]);
      }), e;
    });
  }
  static async init() {
    const t = new k1(), e = Sc(t), n = new Ux(), r = await new e();
    this._instance = n, this._instance.detector = r;
  }
  static async getInstance() {
    return !this._instance && await this.init(), this._instance;
  }
  setThresholds(t) {
    super.setThresholds(t);
    const { devicePitchAngleThreshold: e } = t;
    this.pitchAngleAccelerationThreshold = Mu * Math.sin(e * (Math.PI / (-8055 + -5 * -1647)));
  }
  restart() {
    super.restart(), ba(St.INSTRUCTION_CHANGED, void (5539 + -1 * -1283 + -6822), il);
  }
  validateDetectedObject(t, e) {
    const n = X1.getFaceValidationInstance({ ...this.getThresholds(), pitchAngleAccelerationThreshold: this.pitchAngleAccelerationThreshold }, t, e, this.acceleration);
    return n.validate(), n;
  }
  async processImage({ image: t, timestamp: e }) {
    var A;
    const n = {};
    n.width = t.width, n.height = t.height;
    const r = n, i = Ur(r), a = fl(t, i), s = Cl(a), c = {};
    c.width = a.width, c.height = a.height;
    const d = c;
    let g = await this.detector.detect(s, d, r);
    g = ql(r, g);
    const C = this.validateDetectedObject(g, r), { result: l } = C, h = this.getInstructionCode(l, C.isValid());
    if (l.get("isPresent")) {
      const u = {};
      u.image = s, u.timestamp = e, this.collectImagesForDuplicateDetection(u);
    }
    if (this.isInCandidateSelection) {
      if (this.bestImage && C.isValid() && this.isNewImageBetter(this.bestImage.detection, g)) {
        const u = { image: t, detection: G0(g) };
        this.bestImage = u, this.candidateSelectionImages.push(u);
      }
    } else if ((A = this.lastImage) != null && A.isValid && C.isValid()) {
      const u = { image: t, detection: G0(g) }, v = {};
      v.image = this.lastImage.image, v.detection = this.lastImage.detection;
      const H = v;
      this.isNewImageBetter(H.detection, u.detection) ? this.bestImage = u : this.bestImage = H, this.candidateSelectionImages.push(H, u), this.isInCandidateSelection = !0;
    } else C.isValid() ? this.lastImage = { instructionCode: h, isValid: !0, image: t, detection: G0(g) } : this.lastImage = { instructionCode: h, isValid: !1, image: t, detection: G0(g) };
    const p = { detectedFace: G0(g), instructionCode: h, invalidValidators: this.getInstructionCodesForValidators(l), isInCandidateSelection: this.isInCandidateSelection };
    return this.detectionRecord.push(p.detectedFace), ba(St.INSTRUCTION_CHANGED, h), gl(St.DETECTED_FACE_CHANGED, p.detectedFace, this.getThresholds().faceConfidence), dl(St.FACE_DETECTION, p.detectedFace, t), p;
  }
};
j(Ux, "_instance");
let mr = Ux;
const M1 = (x, o) => {
  const { handleError: t } = Pn(), [e, n] = xt(), { acceleration: r } = jl();
  e && e.setAcceleration(r), Be(() => {
    (async () => {
      const s = await mr.getInstance();
      try {
        const c = {};
        c.wasmDirectoryPath = o, c.thresholds = x, await s.init(c);
      } catch (c) {
        if (c instanceof Error) {
          t(re.fromError(c));
          return;
        }
      }
      n(s);
    })();
  }, [t, x, o]);
  const i = {};
  return i.controller = e, i;
};
var qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Hc = {}, Sa = {}, j1 = J1;
function J1(x, o) {
  for (var t = new Array(arguments.length - 1), e = 0, n = 2, r = !0; n < arguments.length; )
    t[e++] = arguments[n++];
  return new Promise(function(i, a) {
    t[e] = function(s) {
      if (r)
        if (r = !1, s)
          a(s);
        else {
          for (var c = new Array(arguments.length - 1), d = 0; d < c.length; )
            c[d++] = arguments[d];
          i.apply(null, c);
        }
    };
    try {
      x.apply(o || null, t);
    } catch (s) {
      r && (r = !1, a(s));
    }
  });
}
var Oc = {};
(function(x) {
  var o = x;
  o.length = function(i) {
    var a = i.length;
    if (!a)
      return 0;
    for (var s = 0; --a % 4 > 1 && i.charAt(a) === "="; )
      ++s;
    return Math.ceil(i.length * 3) / 4 - s;
  };
  for (var t = new Array(64), e = new Array(123), n = 0; n < 64; )
    e[t[n] = n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n - 59 | 43] = n++;
  o.encode = function(i, a, s) {
    for (var c = null, d = [], g = 0, C = 0, l; a < s; ) {
      var h = i[a++];
      switch (C) {
        case 0:
          d[g++] = t[h >> 2], l = (h & 3) << 4, C = 1;
          break;
        case 1:
          d[g++] = t[l | h >> 4], l = (h & 15) << 2, C = 2;
          break;
        case 2:
          d[g++] = t[l | h >> 6], d[g++] = t[h & 63], C = 0;
          break;
      }
      g > 8191 && ((c || (c = [])).push(String.fromCharCode.apply(String, d)), g = 0);
    }
    return C && (d[g++] = t[l], d[g++] = 61, C === 1 && (d[g++] = 61)), c ? (g && c.push(String.fromCharCode.apply(String, d.slice(0, g))), c.join("")) : String.fromCharCode.apply(String, d.slice(0, g));
  };
  var r = "invalid encoding";
  o.decode = function(i, a, s) {
    for (var c = s, d = 0, g, C = 0; C < i.length; ) {
      var l = i.charCodeAt(C++);
      if (l === 61 && d > 1)
        break;
      if ((l = e[l]) === void 0)
        throw Error(r);
      switch (d) {
        case 0:
          g = l, d = 1;
          break;
        case 1:
          a[s++] = g << 2 | (l & 48) >> 4, g = l, d = 2;
          break;
        case 2:
          a[s++] = (g & 15) << 4 | (l & 60) >> 2, g = l, d = 3;
          break;
        case 3:
          a[s++] = (g & 3) << 6 | l, d = 0;
          break;
      }
    }
    if (d === 1)
      throw Error(r);
    return s - c;
  }, o.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(Oc);
var _1 = so;
function so() {
  this._listeners = {};
}
so.prototype.on = function(x, o, t) {
  return (this._listeners[x] || (this._listeners[x] = [])).push({
    fn: o,
    ctx: t || this
  }), this;
};
so.prototype.off = function(x, o) {
  if (x === void 0)
    this._listeners = {};
  else if (o === void 0)
    this._listeners[x] = [];
  else
    for (var t = this._listeners[x], e = 0; e < t.length; )
      t[e].fn === o ? t.splice(e, 1) : ++e;
  return this;
};
so.prototype.emit = function(x) {
  var o = this._listeners[x];
  if (o) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < o.length; )
      o[e].fn.apply(o[e++].ctx, t);
  }
  return this;
};
var Q1 = Ba(Ba);
function Ba(x) {
  return typeof Float32Array < "u" ? function() {
    var o = new Float32Array([-0]), t = new Uint8Array(o.buffer), e = t[3] === 128;
    function n(s, c, d) {
      o[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3];
    }
    function r(s, c, d) {
      o[0] = s, c[d] = t[3], c[d + 1] = t[2], c[d + 2] = t[1], c[d + 3] = t[0];
    }
    x.writeFloatLE = e ? n : r, x.writeFloatBE = e ? r : n;
    function i(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], o[0];
    }
    function a(s, c) {
      return t[3] = s[c], t[2] = s[c + 1], t[1] = s[c + 2], t[0] = s[c + 3], o[0];
    }
    x.readFloatLE = e ? i : a, x.readFloatBE = e ? a : i;
  }() : function() {
    function o(e, n, r, i) {
      var a = n < 0 ? 1 : 0;
      if (a && (n = -n), n === 0)
        e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), r, i);
      else if (isNaN(n))
        e(2143289344, r, i);
      else if (n > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, r, i);
      else if (n < 11754943508222875e-54)
        e((a << 31 | Math.round(n / 1401298464324817e-60)) >>> 0, r, i);
      else {
        var s = Math.floor(Math.log(n) / Math.LN2), c = Math.round(n * Math.pow(2, -s) * 8388608) & 8388607;
        e((a << 31 | s + 127 << 23 | c) >>> 0, r, i);
      }
    }
    x.writeFloatLE = o.bind(null, Ga), x.writeFloatBE = o.bind(null, ka);
    function t(e, n, r) {
      var i = e(n, r), a = (i >> 31) * 2 + 1, s = i >>> 23 & 255, c = i & 8388607;
      return s === 255 ? c ? NaN : a * (1 / 0) : s === 0 ? a * 1401298464324817e-60 * c : a * Math.pow(2, s - 150) * (c + 8388608);
    }
    x.readFloatLE = t.bind(null, Ha), x.readFloatBE = t.bind(null, Oa);
  }(), typeof Float64Array < "u" ? function() {
    var o = new Float64Array([-0]), t = new Uint8Array(o.buffer), e = t[7] === 128;
    function n(s, c, d) {
      o[0] = s, c[d] = t[0], c[d + 1] = t[1], c[d + 2] = t[2], c[d + 3] = t[3], c[d + 4] = t[4], c[d + 5] = t[5], c[d + 6] = t[6], c[d + 7] = t[7];
    }
    function r(s, c, d) {
      o[0] = s, c[d] = t[7], c[d + 1] = t[6], c[d + 2] = t[5], c[d + 3] = t[4], c[d + 4] = t[3], c[d + 5] = t[2], c[d + 6] = t[1], c[d + 7] = t[0];
    }
    x.writeDoubleLE = e ? n : r, x.writeDoubleBE = e ? r : n;
    function i(s, c) {
      return t[0] = s[c], t[1] = s[c + 1], t[2] = s[c + 2], t[3] = s[c + 3], t[4] = s[c + 4], t[5] = s[c + 5], t[6] = s[c + 6], t[7] = s[c + 7], o[0];
    }
    function a(s, c) {
      return t[7] = s[c], t[6] = s[c + 1], t[5] = s[c + 2], t[4] = s[c + 3], t[3] = s[c + 4], t[2] = s[c + 5], t[1] = s[c + 6], t[0] = s[c + 7], o[0];
    }
    x.readDoubleLE = e ? i : a, x.readDoubleBE = e ? a : i;
  }() : function() {
    function o(e, n, r, i, a, s) {
      var c = i < 0 ? 1 : 0;
      if (c && (i = -i), i === 0)
        e(0, a, s + n), e(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, s + r);
      else if (isNaN(i))
        e(0, a, s + n), e(2146959360, a, s + r);
      else if (i > 17976931348623157e292)
        e(0, a, s + n), e((c << 31 | 2146435072) >>> 0, a, s + r);
      else {
        var d;
        if (i < 22250738585072014e-324)
          d = i / 5e-324, e(d >>> 0, a, s + n), e((c << 31 | d / 4294967296) >>> 0, a, s + r);
        else {
          var g = Math.floor(Math.log(i) / Math.LN2);
          g === 1024 && (g = 1023), d = i * Math.pow(2, -g), e(d * 4503599627370496 >>> 0, a, s + n), e((c << 31 | g + 1023 << 20 | d * 1048576 & 1048575) >>> 0, a, s + r);
        }
      }
    }
    x.writeDoubleLE = o.bind(null, Ga, 0, 4), x.writeDoubleBE = o.bind(null, ka, 4, 0);
    function t(e, n, r, i, a) {
      var s = e(i, a + n), c = e(i, a + r), d = (c >> 31) * 2 + 1, g = c >>> 20 & 2047, C = 4294967296 * (c & 1048575) + s;
      return g === 2047 ? C ? NaN : d * (1 / 0) : g === 0 ? d * 5e-324 * C : d * Math.pow(2, g - 1075) * (C + 4503599627370496);
    }
    x.readDoubleLE = t.bind(null, Ha, 0, 4), x.readDoubleBE = t.bind(null, Oa, 4, 0);
  }(), x;
}
function Ga(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
function ka(x, o, t) {
  o[t] = x >>> 24, o[t + 1] = x >>> 16 & 255, o[t + 2] = x >>> 8 & 255, o[t + 3] = x & 255;
}
function Ha(x, o) {
  return (x[o] | x[o + 1] << 8 | x[o + 2] << 16 | x[o + 3] << 24) >>> 0;
}
function Oa(x, o) {
  return (x[o] << 24 | x[o + 1] << 16 | x[o + 2] << 8 | x[o + 3]) >>> 0;
}
function Ka(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var U1 = z1;
function z1(x) {
  try {
    if (typeof Ka != "function")
      return null;
    var o = Ka(x);
    return o && (o.length || Object.keys(o).length) ? o : null;
  } catch {
    return null;
  }
}
var Kc = {};
(function(x) {
  var o = x;
  o.length = function(t) {
    for (var e = 0, n = 0, r = 0; r < t.length; ++r)
      n = t.charCodeAt(r), n < 128 ? e += 1 : n < 2048 ? e += 2 : (n & 64512) === 55296 && (t.charCodeAt(r + 1) & 64512) === 56320 ? (++r, e += 4) : e += 3;
    return e;
  }, o.read = function(t, e, n) {
    var r = n - e;
    if (r < 1)
      return "";
    for (var i = null, a = [], s = 0, c; e < n; )
      c = t[e++], c < 128 ? a[s++] = c : c > 191 && c < 224 ? a[s++] = (c & 31) << 6 | t[e++] & 63 : c > 239 && c < 365 ? (c = ((c & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[s++] = 55296 + (c >> 10), a[s++] = 56320 + (c & 1023)) : a[s++] = (c & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, s > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, a)), s = 0);
    return i ? (s && i.push(String.fromCharCode.apply(String, a.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, a.slice(0, s));
  }, o.write = function(t, e, n) {
    for (var r = n, i, a, s = 0; s < t.length; ++s)
      i = t.charCodeAt(s), i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = i >> 6 | 192, e[n++] = i & 63 | 128) : (i & 64512) === 55296 && ((a = t.charCodeAt(s + 1)) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (a & 1023), ++s, e[n++] = i >> 18 | 240, e[n++] = i >> 12 & 63 | 128, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128) : (e[n++] = i >> 12 | 224, e[n++] = i >> 6 & 63 | 128, e[n++] = i & 63 | 128);
    return n - r;
  };
})(Kc);
var q1 = $1;
function $1(x, o, t) {
  var e = t || 8192, n = e >>> 1, r = null, i = e;
  return function(a) {
    if (a < 1 || a > n)
      return x(a);
    i + a > e && (r = x(e), i = 0);
    var s = o.call(r, i, i += a);
    return i & 7 && (i = (i | 7) + 1), s;
  };
}
var To, Za;
function eI() {
  if (Za)
    return To;
  Za = 1, To = o;
  var x = f0();
  function o(r, i) {
    this.lo = r >>> 0, this.hi = i >>> 0;
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
    var i = r < 0;
    i && (r = -r);
    var a = r >>> 0, s = (r - a) / 4294967296 >>> 0;
    return i && (s = ~s >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++s > 4294967295 && (s = 0))), new o(a, s);
  }, o.from = function(r) {
    if (typeof r == "number")
      return o.fromNumber(r);
    if (x.isString(r))
      if (x.Long)
        r = x.Long.fromString(r);
      else
        return o.fromNumber(parseInt(r, 10));
    return r.low || r.high ? new o(r.low >>> 0, r.high >>> 0) : t;
  }, o.prototype.toNumber = function(r) {
    if (!r && this.hi >>> 31) {
      var i = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return i || (a = a + 1 >>> 0), -(i + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, o.prototype.toLong = function(r) {
    return x.Long ? new x.Long(this.lo | 0, this.hi | 0, !!r) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!r };
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
    var r = this.lo, i = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? i === 0 ? r < 16384 ? r < 128 ? 1 : 2 : r < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, To;
}
var Ra;
function f0() {
  return Ra || (Ra = 1, function(x) {
    var o = x;
    o.asPromise = j1, o.base64 = Oc, o.EventEmitter = _1, o.float = Q1, o.inquire = U1, o.utf8 = Kc, o.pool = q1, o.LongBits = eI(), o.isNode = !!(typeof qt < "u" && qt && qt.process && qt.process.versions && qt.process.versions.node), o.global = o.isNode && qt || typeof window < "u" && window || typeof self < "u" && self || qt, o.emptyArray = Object.freeze ? Object.freeze([]) : (
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
      var i = n[r];
      return i != null && n.hasOwnProperty(r) ? typeof i != "object" || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0 : !1;
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
      var i = o.LongBits.fromHash(n);
      return o.Long ? o.Long.fromBits(i.lo, i.hi, r) : i.toNumber(!!r);
    };
    function t(n, r, i) {
      for (var a = Object.keys(r), s = 0; s < a.length; ++s)
        (n[a[s]] === void 0 || !i) && (n[a[s]] = r[a[s]]);
      return n;
    }
    o.merge = t, o.lcFirst = function(n) {
      return n.charAt(0).toLowerCase() + n.substring(1);
    };
    function e(n) {
      function r(i, a) {
        if (!(this instanceof r))
          return new r(i, a);
        Object.defineProperty(this, "message", { get: function() {
          return i;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, r) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
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
      for (var r = {}, i = 0; i < n.length; ++i)
        r[n[i]] = 1;
      return function() {
        for (var a = Object.keys(this), s = a.length - 1; s > -1; --s)
          if (r[a[s]] === 1 && this[a[s]] !== void 0 && this[a[s]] !== null)
            return a[s];
      };
    }, o.oneOfSetter = function(n) {
      return function(r) {
        for (var i = 0; i < n.length; ++i)
          n[i] !== r && delete this[n[i]];
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
      function(r, i) {
        return new n(r, i);
      }, o._Buffer_allocUnsafe = n.allocUnsafe || /* istanbul ignore next */
      function(r) {
        return new n(r);
      };
    };
  }(Sa)), Sa;
}
var Zc = z, ut = f0(), br, co = ut.LongBits, Pa = ut.base64, Va = ut.utf8;
function Tn(x, o, t) {
  this.fn = x, this.len = o, this.next = void 0, this.val = t;
}
function zr() {
}
function tI(x) {
  this.head = x.head, this.tail = x.tail, this.len = x.len, this.next = x.states;
}
function z() {
  this.len = 0, this.head = new Tn(zr, 0, 0), this.tail = this.head, this.states = null;
}
var Rc = function() {
  return ut.Buffer ? function() {
    return (z.create = function() {
      return new br();
    })();
  } : function() {
    return new z();
  };
};
z.create = Rc();
z.alloc = function(x) {
  return new ut.Array(x);
};
ut.Array !== Array && (z.alloc = ut.pool(z.alloc, ut.Array.prototype.subarray));
z.prototype._push = function(x, o, t) {
  return this.tail = this.tail.next = new Tn(x, o, t), this.len += o, this;
};
function qr(x, o, t) {
  o[t] = x & 255;
}
function nI(x, o, t) {
  for (; x > 127; )
    o[t++] = x & 127 | 128, x >>>= 7;
  o[t] = x;
}
function $r(x, o) {
  this.len = x, this.next = void 0, this.val = o;
}
$r.prototype = Object.create(Tn.prototype);
$r.prototype.fn = nI;
z.prototype.uint32 = function(x) {
  return this.len += (this.tail = this.tail.next = new $r(
    (x = x >>> 0) < 128 ? 1 : x < 16384 ? 2 : x < 2097152 ? 3 : x < 268435456 ? 4 : 5,
    x
  )).len, this;
};
z.prototype.int32 = function(x) {
  return x < 0 ? this._push(ei, 10, co.fromNumber(x)) : this.uint32(x);
};
z.prototype.sint32 = function(x) {
  return this.uint32((x << 1 ^ x >> 31) >>> 0);
};
function ei(x, o, t) {
  for (; x.hi; )
    o[t++] = x.lo & 127 | 128, x.lo = (x.lo >>> 7 | x.hi << 25) >>> 0, x.hi >>>= 7;
  for (; x.lo > 127; )
    o[t++] = x.lo & 127 | 128, x.lo = x.lo >>> 7;
  o[t++] = x.lo;
}
z.prototype.uint64 = function(x) {
  var o = co.from(x);
  return this._push(ei, o.length(), o);
};
z.prototype.int64 = z.prototype.uint64;
z.prototype.sint64 = function(x) {
  var o = co.from(x).zzEncode();
  return this._push(ei, o.length(), o);
};
z.prototype.bool = function(x) {
  return this._push(qr, 1, x ? 1 : 0);
};
function Ar(x, o, t) {
  o[t] = x & 255, o[t + 1] = x >>> 8 & 255, o[t + 2] = x >>> 16 & 255, o[t + 3] = x >>> 24;
}
z.prototype.fixed32 = function(x) {
  return this._push(Ar, 4, x >>> 0);
};
z.prototype.sfixed32 = z.prototype.fixed32;
z.prototype.fixed64 = function(x) {
  var o = co.from(x);
  return this._push(Ar, 4, o.lo)._push(Ar, 4, o.hi);
};
z.prototype.sfixed64 = z.prototype.fixed64;
z.prototype.float = function(x) {
  return this._push(ut.float.writeFloatLE, 4, x);
};
z.prototype.double = function(x) {
  return this._push(ut.float.writeDoubleLE, 8, x);
};
var xI = ut.Array.prototype.set ? function(x, o, t) {
  o.set(x, t);
} : function(x, o, t) {
  for (var e = 0; e < x.length; ++e)
    o[t + e] = x[e];
};
z.prototype.bytes = function(x) {
  var o = x.length >>> 0;
  if (!o)
    return this._push(qr, 1, 0);
  if (ut.isString(x)) {
    var t = z.alloc(o = Pa.length(x));
    Pa.decode(x, t, 0), x = t;
  }
  return this.uint32(o)._push(xI, o, x);
};
z.prototype.string = function(x) {
  var o = Va.length(x);
  return o ? this.uint32(o)._push(Va.write, o, x) : this._push(qr, 1, 0);
};
z.prototype.fork = function() {
  return this.states = new tI(this), this.head = this.tail = new Tn(zr, 0, 0), this.len = 0, this;
};
z.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Tn(zr, 0, 0), this.len = 0), this;
};
z.prototype.ldelim = function() {
  var x = this.head, o = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = x.next, this.tail = o, this.len += t), this;
};
z.prototype.finish = function() {
  for (var x = this.head.next, o = this.constructor.alloc(this.len), t = 0; x; )
    x.fn(x.val, o, t), t += x.len, x = x.next;
  return o;
};
z._configure = function(x) {
  br = x, z.create = Rc(), br._configure();
};
var oI = Bt, Pc = Zc;
(Bt.prototype = Object.create(Pc.prototype)).constructor = Bt;
var Mt = f0();
function Bt() {
  Pc.call(this);
}
Bt._configure = function() {
  Bt.alloc = Mt._Buffer_allocUnsafe, Bt.writeBytesBuffer = Mt.Buffer && Mt.Buffer.prototype instanceof Uint8Array && Mt.Buffer.prototype.set.name === "set" ? function(x, o, t) {
    o.set(x, t);
  } : function(x, o, t) {
    if (x.copy)
      x.copy(o, t, 0, x.length);
    else
      for (var e = 0; e < x.length; )
        o[t++] = x[e++];
  };
};
Bt.prototype.bytes = function(x) {
  Mt.isString(x) && (x = Mt._Buffer_from(x, "base64"));
  var o = x.length >>> 0;
  return this.uint32(o), o && this._push(Bt.writeBytesBuffer, o, x), this;
};
function rI(x, o, t) {
  x.length < 40 ? Mt.utf8.write(x, o, t) : o.utf8Write ? o.utf8Write(x, t) : o.write(x, t);
}
Bt.prototype.string = function(x) {
  var o = Mt.Buffer.byteLength(x);
  return this.uint32(o), o && this._push(rI, o, x), this;
};
Bt._configure();
var Vc = le, Gt = f0(), yr, Tc = Gt.LongBits, iI = Gt.utf8;
function At(x, o) {
  return RangeError("index out of range: " + x.pos + " + " + (o || 1) + " > " + x.len);
}
function le(x) {
  this.buf = x, this.pos = 0, this.len = x.length;
}
var Ta = typeof Uint8Array < "u" ? function(x) {
  if (x instanceof Uint8Array || Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
} : function(x) {
  if (Array.isArray(x))
    return new le(x);
  throw Error("illegal buffer");
}, Ec = function() {
  return Gt.Buffer ? function(x) {
    return (le.create = function(o) {
      return Gt.Buffer.isBuffer(o) ? new yr(o) : Ta(o);
    })(x);
  } : Ta;
};
le.create = Ec();
le.prototype._slice = Gt.Array.prototype.subarray || /* istanbul ignore next */
Gt.Array.prototype.slice;
le.prototype.uint32 = /* @__PURE__ */ function() {
  var x = 4294967295;
  return function() {
    if (x = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (x = (x | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (x = (x | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return x;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, At(this, 10);
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
function Eo() {
  var x = new Tc(0, 0), o = 0;
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
        throw At(this);
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
        throw At(this);
      if (x.hi = (x.hi | (this.buf[this.pos] & 127) << o * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return x;
    }
  throw Error("invalid varint encoding");
}
le.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Xx(x, o) {
  return (x[o - 4] | x[o - 3] << 8 | x[o - 2] << 16 | x[o - 1] << 24) >>> 0;
}
le.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw At(this, 4);
  return Xx(this.buf, this.pos += 4);
};
le.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw At(this, 4);
  return Xx(this.buf, this.pos += 4) | 0;
};
function Ea() {
  if (this.pos + 8 > this.len)
    throw At(this, 8);
  return new Tc(Xx(this.buf, this.pos += 4), Xx(this.buf, this.pos += 4));
}
le.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw At(this, 4);
  var x = Gt.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, x;
};
le.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw At(this, 4);
  var x = Gt.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, x;
};
le.prototype.bytes = function() {
  var x = this.uint32(), o = this.pos, t = this.pos + x;
  if (t > this.len)
    throw At(this, x);
  return this.pos += x, Array.isArray(this.buf) ? this.buf.slice(o, t) : o === t ? new this.buf.constructor(0) : this._slice.call(this.buf, o, t);
};
le.prototype.string = function() {
  var x = this.bytes();
  return iI.read(x, 0, x.length);
};
le.prototype.skip = function(x) {
  if (typeof x == "number") {
    if (this.pos + x > this.len)
      throw At(this, x);
    this.pos += x;
  } else
    do
      if (this.pos >= this.len)
        throw At(this);
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
  yr = x, le.create = Ec(), yr._configure();
  var o = Gt.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  Gt.merge(le.prototype, {
    int64: function() {
      return Eo.call(this)[o](!1);
    },
    uint64: function() {
      return Eo.call(this)[o](!0);
    },
    sint64: function() {
      return Eo.call(this).zzDecode()[o](!1);
    },
    fixed64: function() {
      return Ea.call(this)[o](!0);
    },
    sfixed64: function() {
      return Ea.call(this)[o](!1);
    }
  });
};
var aI = l0, Lc = Vc;
(l0.prototype = Object.create(Lc.prototype)).constructor = l0;
var La = f0();
function l0(x) {
  Lc.call(this, x);
}
l0._configure = function() {
  La.Buffer && (l0.prototype._slice = La.Buffer.prototype.slice);
};
l0.prototype.string = function() {
  var x = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + x, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + x, this.len));
};
l0._configure();
var Nc = {}, sI = hn, ti = f0();
(hn.prototype = Object.create(ti.EventEmitter.prototype)).constructor = hn;
function hn(x, o, t) {
  if (typeof x != "function")
    throw TypeError("rpcImpl must be a function");
  ti.EventEmitter.call(this), this.rpcImpl = x, this.requestDelimited = !!o, this.responseDelimited = !!t;
}
hn.prototype.rpcCall = function x(o, t, e, n, r) {
  if (!n)
    throw TypeError("request must be specified");
  var i = this;
  if (!r)
    return ti.asPromise(x, i, o, t, e, n);
  if (!i.rpcImpl) {
    setTimeout(function() {
      r(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return i.rpcImpl(
      o,
      t[i.requestDelimited ? "encodeDelimited" : "encode"](n).finish(),
      function(a, s) {
        if (a)
          return i.emit("error", a, o), r(a);
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
            return i.emit("error", c, o), r(c);
          }
        return i.emit("data", s, o), r(null, s);
      }
    );
  } catch (a) {
    i.emit("error", a, o), setTimeout(function() {
      r(a);
    }, 0);
    return;
  }
};
hn.prototype.end = function(x) {
  return this.rpcImpl && (x || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(x) {
  var o = x;
  o.Service = sI;
})(Nc);
var cI = {};
(function(x) {
  var o = x;
  o.build = "minimal", o.Writer = Zc, o.BufferWriter = oI, o.Reader = Vc, o.BufferReader = aI, o.util = f0(), o.rpc = Nc, o.roots = cI, o.configure = t;
  function t() {
    o.util._configure(), o.Writer._configure(o.BufferWriter), o.Reader._configure(o.BufferReader);
  }
  t();
})(Hc);
var ne = Hc;
const B = ne.Reader, ue = ne.Writer, W = ne.util, b = ne.roots.default || (ne.roots.default = {}), X0 = b.dot = (() => {
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
      return e || (e = ue.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      let n = e === void 0 ? t.len : t.pos + e, r = new b.dot.Content();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
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
            t.skipType(i & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || W.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || W.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !W.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || W.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.Content)
        return t;
      let e = new b.dot.Content();
      return t.token != null && (typeof t.token == "string" ? W.base64.decode(t.token, e.token = W.newBuffer(W.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? W.base64.decode(t.iv, e.iv = W.newBuffer(W.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.token = "" : (n.token = [], e.bytes !== Array && (n.token = W.newBuffer(n.token))), e.bytes === String ? n.iv = "" : (n.iv = [], e.bytes !== Array && (n.iv = W.newBuffer(n.iv))), n.schemaVersion = 0, e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.token != null && t.hasOwnProperty("token") && (n.token = e.bytes === String ? W.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (n.iv = e.bytes === String ? W.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (n.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, o;
  }(), x.v4 = function() {
    const o = {};
    return o.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let n = Object.keys(e), r = 0; r < n.length; ++r)
            e[n[r]] != null && (this[n[r]] = e[n[r]]);
      }
      return t.prototype.images = W.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ue.create()), e.images != null && e.images.length)
          for (let r = 0; r < e.images.length; ++r)
            b.dot.Image.encode(e.images[r], n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < r; ) {
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
            let r = b.dot.Image.verify(e.images[n]);
            if (r)
              return "images." + r;
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
          for (let r = 0; r < e.images.length; ++r) {
            if (typeof e.images[r] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            n.images[r] = b.dot.Image.fromObject(e.images[r]);
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
        let r = {};
        if ((n.arrays || n.defaults) && (r.images = []), n.defaults && (r.metadata = null), e.images && e.images.length) {
          r.images = [];
          for (let i = 0; i < e.images.length; ++i)
            r.images[i] = b.dot.Image.toObject(e.images[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), o.Metadata = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
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
      }, t.encode = function(n, r) {
        return r || (r = ue.create()), n.platform != null && Object.hasOwnProperty.call(n, "platform") && r.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(n.platform), n.web != null && Object.hasOwnProperty.call(n, "web") && b.dot.v4.WebMetadata.encode(n.web, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.android != null && Object.hasOwnProperty.call(n, "android") && b.dot.v4.AndroidMetadata.encode(n.android, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.ios != null && Object.hasOwnProperty.call(n, "ios") && b.dot.v4.IosMetadata.encode(n.ios, r.uint32(
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
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.Metadata();
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
        if (n.sessionToken != null && n.hasOwnProperty("sessionToken") && (r._sessionToken = 1, !W.isString(n.sessionToken)))
          return "sessionToken: string expected";
        if (n.componentVersion != null && n.hasOwnProperty("componentVersion") && !W.isString(n.componentVersion))
          return "componentVersion: string expected";
        if (n.web != null && n.hasOwnProperty("web")) {
          r.metadata = 1;
          {
            let i = b.dot.v4.WebMetadata.verify(n.web);
            if (i)
              return "web." + i;
          }
        }
        if (n.android != null && n.hasOwnProperty("android")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
          {
            let i = b.dot.v4.AndroidMetadata.verify(n.android);
            if (i)
              return "android." + i;
          }
        }
        if (n.ios != null && n.hasOwnProperty("ios")) {
          if (r.metadata === 1)
            return "metadata: multiple values";
          r.metadata = 1;
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
        let r = new b.dot.v4.Metadata();
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
          r.web = b.dot.v4.WebMetadata.fromObject(n.web);
        }
        if (n.android != null) {
          if (typeof n.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          r.android = b.dot.v4.AndroidMetadata.fromObject(n.android);
        }
        if (n.ios != null) {
          if (typeof n.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          r.ios = b.dot.v4.IosMetadata.fromObject(n.ios);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.platform = r.enums === String ? "WEB" : 0, i.componentVersion = ""), n.platform != null && n.hasOwnProperty("platform") && (i.platform = r.enums === String ? b.dot.Platform[n.platform] === void 0 ? n.platform : b.dot.Platform[n.platform] : n.platform), n.web != null && n.hasOwnProperty("web") && (i.web = b.dot.v4.WebMetadata.toObject(n.web, r), r.oneofs && (i.metadata = "web")), n.android != null && n.hasOwnProperty("android") && (i.android = b.dot.v4.AndroidMetadata.toObject(n.android, r), r.oneofs && (i.metadata = "android")), n.ios != null && n.hasOwnProperty("ios") && (i.ios = b.dot.v4.IosMetadata.toObject(n.ios, r), r.oneofs && (i.metadata = "ios")), n.sessionToken != null && n.hasOwnProperty("sessionToken") && (i.sessionToken = n.sessionToken, r.oneofs && (i._sessionToken = "sessionToken")), n.componentVersion != null && n.hasOwnProperty("componentVersion") && (i.componentVersion = n.componentVersion), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(n) {
        return n === void 0 && (n = "type.googleapis.com"), n + "/dot.v4.Metadata";
      }, t;
    }(), o.AndroidMetadata = function() {
      function t(n) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.supportedAbis = W.emptyArray, t.prototype.device = null, t.prototype.digests = W.emptyArray, t.prototype.digestsWithTimestamp = W.emptyArray, t.prototype.dynamicCameraFrameProperties = W.emptyObject;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: W.oneOfGetter(e = ["device"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        if (r || (r = ue.create()), n.supportedAbis != null && n.supportedAbis.length)
          for (let i = 0; i < n.supportedAbis.length; ++i)
            r.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n.supportedAbis[i]);
        if (n.device != null && Object.hasOwnProperty.call(n, "device") && r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(n.device), n.digests != null && n.digests.length)
          for (let i = 0; i < n.digests.length; ++i)
            r.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(n.digests[i]);
        if (n.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(n, "dynamicCameraFrameProperties"))
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a)
            r.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i[a]), b.dot.Int32List.encode(n.dynamicCameraFrameProperties[i[a]], r.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (n.digestsWithTimestamp != null && n.digestsWithTimestamp.length)
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i)
            b.dot.DigestWithTimestamp.encode(n.digestsWithTimestamp[i], r.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.AndroidMetadata(), s, c;
        for (; n.pos < i; ) {
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
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(b.dot.DigestWithTimestamp.decode(n, n.uint32()));
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
                    c = b.dot.Int32List.decode(n, n.uint32());
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
          for (let r = 0; r < n.supportedAbis.length; ++r)
            if (!W.isString(n.supportedAbis[r]))
              return "supportedAbis: string[] expected";
        }
        if (n.device != null && n.hasOwnProperty("device") && !W.isString(n.device))
          return "device: string expected";
        if (n.digests != null && n.hasOwnProperty("digests")) {
          if (!Array.isArray(n.digests))
            return "digests: array expected";
          for (let r = 0; r < n.digests.length; ++r)
            if (!(n.digests[r] && typeof n.digests[r].length == "number" || W.isString(n.digests[r])))
              return "digests: buffer[] expected";
        }
        if (n.digestsWithTimestamp != null && n.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(n.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let r = 0; r < n.digestsWithTimestamp.length; ++r) {
            let i = b.dot.DigestWithTimestamp.verify(n.digestsWithTimestamp[r]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (n.dynamicCameraFrameProperties != null && n.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!W.isObject(n.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let r = Object.keys(n.dynamicCameraFrameProperties);
          for (let i = 0; i < r.length; ++i) {
            let a = b.dot.Int32List.verify(n.dynamicCameraFrameProperties[r[i]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.AndroidMetadata)
          return n;
        let r = new b.dot.v4.AndroidMetadata();
        if (n.supportedAbis) {
          if (!Array.isArray(n.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          r.supportedAbis = [];
          for (let i = 0; i < n.supportedAbis.length; ++i)
            r.supportedAbis[i] = String(n.supportedAbis[i]);
        }
        if (n.device != null && (r.device = String(n.device)), n.digests) {
          if (!Array.isArray(n.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          r.digests = [];
          for (let i = 0; i < n.digests.length; ++i)
            typeof n.digests[i] == "string" ? W.base64.decode(n.digests[i], r.digests[i] = W.newBuffer(W.base64.length(n.digests[i])), 0) : n.digests[i].length >= 0 && (r.digests[i] = n.digests[i]);
        }
        if (n.digestsWithTimestamp) {
          if (!Array.isArray(n.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          r.digestsWithTimestamp = [];
          for (let i = 0; i < n.digestsWithTimestamp.length; ++i) {
            if (typeof n.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            r.digestsWithTimestamp[i] = b.dot.DigestWithTimestamp.fromObject(n.digestsWithTimestamp[i]);
          }
        }
        if (n.dynamicCameraFrameProperties) {
          if (typeof n.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          r.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(n.dynamicCameraFrameProperties), a = 0; a < i.length; ++a) {
            if (typeof n.dynamicCameraFrameProperties[i[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            r.dynamicCameraFrameProperties[i[a]] = b.dot.Int32List.fromObject(n.dynamicCameraFrameProperties[i[a]]);
          }
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        if ((r.arrays || r.defaults) && (i.supportedAbis = [], i.digests = [], i.digestsWithTimestamp = []), (r.objects || r.defaults) && (i.dynamicCameraFrameProperties = {}), n.supportedAbis && n.supportedAbis.length) {
          i.supportedAbis = [];
          for (let s = 0; s < n.supportedAbis.length; ++s)
            i.supportedAbis[s] = n.supportedAbis[s];
        }
        if (n.device != null && n.hasOwnProperty("device") && (i.device = n.device, r.oneofs && (i._device = "device")), n.digests && n.digests.length) {
          i.digests = [];
          for (let s = 0; s < n.digests.length; ++s)
            i.digests[s] = r.bytes === String ? W.base64.encode(n.digests[s], 0, n.digests[s].length) : r.bytes === Array ? Array.prototype.slice.call(n.digests[s]) : n.digests[s];
        }
        let a;
        if (n.dynamicCameraFrameProperties && (a = Object.keys(n.dynamicCameraFrameProperties)).length) {
          i.dynamicCameraFrameProperties = {};
          for (let s = 0; s < a.length; ++s)
            i.dynamicCameraFrameProperties[a[s]] = b.dot.Int32List.toObject(n.dynamicCameraFrameProperties[a[s]], r);
        }
        if (n.digestsWithTimestamp && n.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let s = 0; s < n.digestsWithTimestamp.length; ++s)
            i.digestsWithTimestamp[s] = b.dot.DigestWithTimestamp.toObject(n.digestsWithTimestamp[s], r);
        }
        return i;
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
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = W.emptyObject, t.prototype.digests = W.emptyArray, t.prototype.digestsWithTimestamp = W.emptyArray, t.prototype.isoValues = W.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ue.create()), e.cameraModelId != null && Object.hasOwnProperty.call(e, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.cameraModelId), e.architectureInfo != null && Object.hasOwnProperty.call(e, "architectureInfo"))
          for (let r = Object.keys(e.architectureInfo), i = 0; i < r.length; ++i)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(r[i]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(e.architectureInfo[r[i]]).ldelim();
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
            b.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.IosMetadata(), a, s;
        for (; e.pos < r; ) {
          let c = e.uint32();
          switch (c >>> 3) {
            case 1: {
              i.cameraModelId = e.string();
              break;
            }
            case 2: {
              i.architectureInfo === W.emptyObject && (i.architectureInfo = {});
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
                let d = e.uint32() + e.pos;
                for (; e.pos < d; )
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
        if (e.cameraModelId != null && e.hasOwnProperty("cameraModelId") && !W.isString(e.cameraModelId))
          return "cameraModelId: string expected";
        if (e.architectureInfo != null && e.hasOwnProperty("architectureInfo")) {
          if (!W.isObject(e.architectureInfo))
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
            if (!(e.digests[n] && typeof e.digests[n].length == "number" || W.isString(e.digests[n])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < e.digestsWithTimestamp.length; ++n) {
            let r = b.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[n]);
            if (r)
              return "digestsWithTimestamp." + r;
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
        if (e instanceof b.dot.v4.IosMetadata)
          return e;
        let n = new b.dot.v4.IosMetadata();
        if (e.cameraModelId != null && (n.cameraModelId = String(e.cameraModelId)), e.architectureInfo) {
          if (typeof e.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let r = Object.keys(e.architectureInfo), i = 0; i < r.length; ++i)
            n.architectureInfo[r[i]] = !!e.architectureInfo[r[i]];
        }
        if (e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let r = 0; r < e.digests.length; ++r)
            typeof e.digests[r] == "string" ? W.base64.decode(e.digests[r], n.digests[r] = W.newBuffer(W.base64.length(e.digests[r])), 0) : e.digests[r].length >= 0 && (n.digests[r] = e.digests[r]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let r = 0; r < e.digestsWithTimestamp.length; ++r) {
            if (typeof e.digestsWithTimestamp[r] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[r] = b.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[r]);
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
        let i;
        if (e.architectureInfo && (i = Object.keys(e.architectureInfo)).length) {
          r.architectureInfo = {};
          for (let a = 0; a < i.length; ++a)
            r.architectureInfo[i[a]] = e.architectureInfo[i[a]];
        }
        if (e.digests && e.digests.length) {
          r.digests = [];
          for (let a = 0; a < e.digests.length; ++a)
            r.digests[a] = n.bytes === String ? W.base64.encode(e.digests[a], 0, e.digests[a].length) : n.bytes === Array ? Array.prototype.slice.call(e.digests[a]) : e.digests[a];
        }
        if (e.isoValues && e.isoValues.length) {
          r.isoValues = [];
          for (let a = 0; a < e.isoValues.length; ++a)
            r.isoValues[a] = e.isoValues[a];
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          r.digestsWithTimestamp = [];
          for (let a = 0; a < e.digestsWithTimestamp.length; ++a)
            r.digestsWithTimestamp[a] = b.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[a], n);
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
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = W.emptyArray, t.prototype.hashedDetectedImages = W.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = W.emptyArray, t.prototype.detectionRecord = W.emptyArray, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ue.create()), e.currentCameraProperties != null && Object.hasOwnProperty.call(e, "currentCameraProperties") && b.dot.v4.MediaTrackSettings.encode(e.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.availableCameraProperties != null && e.availableCameraProperties.length)
          for (let r = 0; r < e.availableCameraProperties.length; ++r)
            b.dot.v4.CameraProperties.encode(e.availableCameraProperties[r], n.uint32(
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
            b.dot.v4.DetectedObject.encode(e.detectionRecord[r], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (e.hashedDetectedImagesWithTimestamp != null && e.hashedDetectedImagesWithTimestamp.length)
          for (let r = 0; r < e.hashedDetectedImagesWithTimestamp.length; ++r)
            b.dot.v4.HashedDetectedImageWithTimestamp.encode(e.hashedDetectedImagesWithTimestamp[r], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return n;
      }, t.encodeDelimited = function(e, n) {
        return this.encode(e, n).ldelim();
      }, t.decode = function(e, n) {
        e instanceof B || (e = B.create(e));
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.WebMetadata();
        for (; e.pos < r; ) {
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
            let r = b.dot.v4.CameraProperties.verify(e.availableCameraProperties[n]);
            if (r)
              return "availableCameraProperties." + r;
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
            let r = b.dot.v4.HashedDetectedImageWithTimestamp.verify(e.hashedDetectedImagesWithTimestamp[n]);
            if (r)
              return "hashedDetectedImagesWithTimestamp." + r;
          }
        }
        if (e.detectionRecord != null && e.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(e.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < e.detectionRecord.length; ++n) {
            let r = b.dot.v4.DetectedObject.verify(e.detectionRecord[n]);
            if (r)
              return "detectionRecord." + r;
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
          for (let r = 0; r < e.availableCameraProperties.length; ++r) {
            if (typeof e.availableCameraProperties[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[r] = b.dot.v4.CameraProperties.fromObject(e.availableCameraProperties[r]);
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
            n.hashedDetectedImagesWithTimestamp[r] = b.dot.v4.HashedDetectedImageWithTimestamp.fromObject(e.hashedDetectedImagesWithTimestamp[r]);
          }
        }
        if (e.detectionRecord) {
          if (!Array.isArray(e.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let r = 0; r < e.detectionRecord.length; ++r) {
            if (typeof e.detectionRecord[r] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[r] = b.dot.v4.DetectedObject.fromObject(e.detectionRecord[r]);
          }
        }
        return n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if ((n.arrays || n.defaults) && (r.availableCameraProperties = [], r.hashedDetectedImages = [], r.detectionRecord = [], r.hashedDetectedImagesWithTimestamp = []), n.defaults && (r.currentCameraProperties = null), e.currentCameraProperties != null && e.hasOwnProperty("currentCameraProperties") && (r.currentCameraProperties = b.dot.v4.MediaTrackSettings.toObject(e.currentCameraProperties, n)), e.availableCameraProperties && e.availableCameraProperties.length) {
          r.availableCameraProperties = [];
          for (let i = 0; i < e.availableCameraProperties.length; ++i)
            r.availableCameraProperties[i] = b.dot.v4.CameraProperties.toObject(e.availableCameraProperties[i], n);
        }
        if (e.hashedDetectedImages && e.hashedDetectedImages.length) {
          r.hashedDetectedImages = [];
          for (let i = 0; i < e.hashedDetectedImages.length; ++i)
            r.hashedDetectedImages[i] = e.hashedDetectedImages[i];
        }
        if (e.detectionRecord && e.detectionRecord.length) {
          r.detectionRecord = [];
          for (let i = 0; i < e.detectionRecord.length; ++i)
            r.detectionRecord[i] = b.dot.v4.DetectedObject.toObject(e.detectionRecord[i], n);
        }
        if (e.hashedDetectedImagesWithTimestamp && e.hashedDetectedImagesWithTimestamp.length) {
          r.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < e.hashedDetectedImagesWithTimestamp.length; ++i)
            r.hashedDetectedImagesWithTimestamp[i] = b.dot.v4.HashedDetectedImageWithTimestamp.toObject(e.hashedDetectedImagesWithTimestamp[i], n);
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
      return t.prototype.imageHash = "", t.prototype.timestampMillis = W.Long ? W.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        return n || (n = ue.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < r; ) {
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
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !W.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !W.isInteger(e.timestampMillis) && !(e.timestampMillis && W.isInteger(e.timestampMillis.low) && W.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let n = new b.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (n.imageHash = String(e.imageHash)), e.timestampMillis != null && (W.Long ? (n.timestampMillis = W.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? n.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? n.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (n.timestampMillis = new W.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), n;
      }, t.toObject = function(e, n) {
        n || (n = {});
        let r = {};
        if (n.defaults)
          if (r.imageHash = "", W.Long) {
            let i = new W.Long(0, 0, !0);
            r.timestampMillis = n.longs === String ? i.toString() : n.longs === Number ? i.toNumber() : i;
          } else
            r.timestampMillis = n.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (r.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? r.timestampMillis = n.longs === String ? String(e.timestampMillis) : e.timestampMillis : r.timestampMillis = n.longs === String ? W.Long.prototype.toString.call(e.timestampMillis) : n.longs === Number ? new W.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), o.MediaTrackSettings = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
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
      }, t.encode = function(n, r) {
        return r || (r = ue.create()), n.aspectRatio != null && Object.hasOwnProperty.call(n, "aspectRatio") && r.uint32(
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
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.MediaTrackSettings();
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
        return typeof n != "object" || n === null ? "object expected" : n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && typeof n.aspectRatio != "number" ? "aspectRatio: number expected" : n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && typeof n.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : n.channelCount != null && n.hasOwnProperty("channelCount") && !W.isInteger(n.channelCount) ? "channelCount: integer expected" : n.deviceId != null && n.hasOwnProperty("deviceId") && !W.isString(n.deviceId) ? "deviceId: string expected" : n.displaySurface != null && n.hasOwnProperty("displaySurface") && !W.isString(n.displaySurface) ? "displaySurface: string expected" : n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && typeof n.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : n.facingMode != null && n.hasOwnProperty("facingMode") && !W.isString(n.facingMode) ? "facingMode: string expected" : n.frameRate != null && n.hasOwnProperty("frameRate") && typeof n.frameRate != "number" ? "frameRate: number expected" : n.groupId != null && n.hasOwnProperty("groupId") && !W.isString(n.groupId) ? "groupId: string expected" : n.height != null && n.hasOwnProperty("height") && !W.isInteger(n.height) ? "height: integer expected" : n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && typeof n.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : n.sampleRate != null && n.hasOwnProperty("sampleRate") && !W.isInteger(n.sampleRate) ? "sampleRate: integer expected" : n.sampleSize != null && n.hasOwnProperty("sampleSize") && !W.isInteger(n.sampleSize) ? "sampleSize: integer expected" : n.width != null && n.hasOwnProperty("width") && !W.isInteger(n.width) ? "width: integer expected" : n.deviceName != null && n.hasOwnProperty("deviceName") && !W.isString(n.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.MediaTrackSettings)
          return n;
        let r = new b.dot.v4.MediaTrackSettings();
        return n.aspectRatio != null && (r.aspectRatio = Number(n.aspectRatio)), n.autoGainControl != null && (r.autoGainControl = !!n.autoGainControl), n.channelCount != null && (r.channelCount = n.channelCount | 0), n.deviceId != null && (r.deviceId = String(n.deviceId)), n.displaySurface != null && (r.displaySurface = String(n.displaySurface)), n.echoCancellation != null && (r.echoCancellation = !!n.echoCancellation), n.facingMode != null && (r.facingMode = String(n.facingMode)), n.frameRate != null && (r.frameRate = Number(n.frameRate)), n.groupId != null && (r.groupId = String(n.groupId)), n.height != null && (r.height = n.height | 0), n.noiseSuppression != null && (r.noiseSuppression = !!n.noiseSuppression), n.sampleRate != null && (r.sampleRate = n.sampleRate | 0), n.sampleSize != null && (r.sampleSize = n.sampleSize | 0), n.width != null && (r.width = n.width | 0), n.deviceName != null && (r.deviceName = String(n.deviceName)), r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return n.aspectRatio != null && n.hasOwnProperty("aspectRatio") && (i.aspectRatio = r.json && !isFinite(n.aspectRatio) ? String(n.aspectRatio) : n.aspectRatio, r.oneofs && (i._aspectRatio = "aspectRatio")), n.autoGainControl != null && n.hasOwnProperty("autoGainControl") && (i.autoGainControl = n.autoGainControl, r.oneofs && (i._autoGainControl = "autoGainControl")), n.channelCount != null && n.hasOwnProperty("channelCount") && (i.channelCount = n.channelCount, r.oneofs && (i._channelCount = "channelCount")), n.deviceId != null && n.hasOwnProperty("deviceId") && (i.deviceId = n.deviceId, r.oneofs && (i._deviceId = "deviceId")), n.displaySurface != null && n.hasOwnProperty("displaySurface") && (i.displaySurface = n.displaySurface, r.oneofs && (i._displaySurface = "displaySurface")), n.echoCancellation != null && n.hasOwnProperty("echoCancellation") && (i.echoCancellation = n.echoCancellation, r.oneofs && (i._echoCancellation = "echoCancellation")), n.facingMode != null && n.hasOwnProperty("facingMode") && (i.facingMode = n.facingMode, r.oneofs && (i._facingMode = "facingMode")), n.frameRate != null && n.hasOwnProperty("frameRate") && (i.frameRate = r.json && !isFinite(n.frameRate) ? String(n.frameRate) : n.frameRate, r.oneofs && (i._frameRate = "frameRate")), n.groupId != null && n.hasOwnProperty("groupId") && (i.groupId = n.groupId, r.oneofs && (i._groupId = "groupId")), n.height != null && n.hasOwnProperty("height") && (i.height = n.height, r.oneofs && (i._height = "height")), n.noiseSuppression != null && n.hasOwnProperty("noiseSuppression") && (i.noiseSuppression = n.noiseSuppression, r.oneofs && (i._noiseSuppression = "noiseSuppression")), n.sampleRate != null && n.hasOwnProperty("sampleRate") && (i.sampleRate = n.sampleRate, r.oneofs && (i._sampleRate = "sampleRate")), n.sampleSize != null && n.hasOwnProperty("sampleSize") && (i.sampleSize = n.sampleSize, r.oneofs && (i._sampleSize = "sampleSize")), n.width != null && n.hasOwnProperty("width") && (i.width = n.width, r.oneofs && (i._width = "width")), n.deviceName != null && n.hasOwnProperty("deviceName") && (i.deviceName = n.deviceName, r.oneofs && (i._deviceName = "deviceName")), i;
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
        return n || (n = ue.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.ImageBitmap();
        for (; e.pos < r; ) {
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
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !W.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !W.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof b.dot.v4.ImageBitmap)
          return e;
        let n = new b.dot.v4.ImageBitmap();
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
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: W.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ue.create()), n.cameraInitFrameResolution != null && Object.hasOwnProperty.call(n, "cameraInitFrameResolution") && b.dot.v4.ImageBitmap.encode(n.cameraInitFrameResolution, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.cameraProperties != null && Object.hasOwnProperty.call(n, "cameraProperties") && b.dot.v4.MediaTrackSettings.encode(n.cameraProperties, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.CameraProperties();
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
          let r = b.dot.v4.ImageBitmap.verify(n.cameraInitFrameResolution);
          if (r)
            return "cameraInitFrameResolution." + r;
        }
        if (n.cameraProperties != null && n.hasOwnProperty("cameraProperties")) {
          let r = b.dot.v4.MediaTrackSettings.verify(n.cameraProperties);
          if (r)
            return "cameraProperties." + r;
        }
        return null;
      }, t.fromObject = function(n) {
        if (n instanceof b.dot.v4.CameraProperties)
          return n;
        let r = new b.dot.v4.CameraProperties();
        if (n.cameraInitFrameResolution != null) {
          if (typeof n.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          r.cameraInitFrameResolution = b.dot.v4.ImageBitmap.fromObject(n.cameraInitFrameResolution);
        }
        if (n.cameraProperties != null) {
          if (typeof n.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          r.cameraProperties = b.dot.v4.MediaTrackSettings.fromObject(n.cameraProperties);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return r.defaults && (i.cameraProperties = null), n.cameraInitFrameResolution != null && n.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = b.dot.v4.ImageBitmap.toObject(n.cameraInitFrameResolution, r), r.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), n.cameraProperties != null && n.hasOwnProperty("cameraProperties") && (i.cameraProperties = b.dot.v4.MediaTrackSettings.toObject(n.cameraProperties, r)), i;
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
        return n || (n = ue.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.DetectedObject();
        for (; e.pos < r; ) {
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
        let r = {};
        return n.defaults && (r.brightness = 0, r.sharpness = 0, r.hotspots = 0, r.confidence = 0, r.faceSize = 0, r.faceCenter = null, r.smallestEdge = 0, r.bottomLeft = null, r.bottomRight = null, r.topLeft = null, r.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (r.brightness = n.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (r.sharpness = n.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (r.hotspots = n.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (r.confidence = n.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (r.faceSize = n.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (r.faceCenter = b.dot.v4.Point.toObject(e.faceCenter, n)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (r.smallestEdge = n.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (r.bottomLeft = b.dot.v4.Point.toObject(e.bottomLeft, n)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (r.bottomRight = b.dot.v4.Point.toObject(e.bottomRight, n)), e.topLeft != null && e.hasOwnProperty("topLeft") && (r.topLeft = b.dot.v4.Point.toObject(e.topLeft, n)), e.topRight != null && e.hasOwnProperty("topRight") && (r.topRight = b.dot.v4.Point.toObject(e.topRight, n)), r;
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
        return n || (n = ue.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.Point();
        for (; e.pos < r; ) {
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
        return n || (n = ue.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.FaceContent();
        for (; e.pos < r; ) {
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
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = b.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = ue.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && b.dot.Image.encode(e.image, n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.DocumentContent();
        for (; e.pos < r; ) {
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
        let r = {};
        return n.defaults && (r.image = null, r.metadata = null), e.image != null && e.hasOwnProperty("image") && (r.image = b.dot.Image.toObject(e.image, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), o.Blob = function() {
      function t(n) {
        if (n)
          for (let r = Object.keys(n), i = 0; i < r.length; ++i)
            n[r[i]] != null && (this[r[i]] = n[r[i]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: W.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent"]),
        set: W.oneOfSetter(e)
      }), t.create = function(n) {
        return new t(n);
      }, t.encode = function(n, r) {
        return r || (r = ue.create()), n.documentContent != null && Object.hasOwnProperty.call(n, "documentContent") && b.dot.v4.DocumentContent.encode(n.documentContent, r.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), n.faceContent != null && Object.hasOwnProperty.call(n, "faceContent") && b.dot.v4.FaceContent.encode(n.faceContent, r.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(n, "magnifeyeLivenessContent") && b.dot.v4.MagnifEyeLivenessContent.encode(n.magnifeyeLivenessContent, r.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n.smileLivenessContent != null && Object.hasOwnProperty.call(n, "smileLivenessContent") && b.dot.v4.SmileLivenessContent.encode(n.smileLivenessContent, r.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), n.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(n, "eyeGazeLivenessContent") && b.dot.v4.EyeGazeLivenessContent.encode(n.eyeGazeLivenessContent, r.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), r;
      }, t.encodeDelimited = function(n, r) {
        return this.encode(n, r).ldelim();
      }, t.decode = function(n, r) {
        n instanceof B || (n = B.create(n));
        let i = r === void 0 ? n.len : n.pos + r, a = new b.dot.v4.Blob();
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
        let r = {};
        if (n.documentContent != null && n.hasOwnProperty("documentContent")) {
          r.blob = 1;
          {
            let i = b.dot.v4.DocumentContent.verify(n.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = b.dot.v4.EyeGazeLivenessContent.verify(n.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (n.faceContent != null && n.hasOwnProperty("faceContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = b.dot.v4.FaceContent.verify(n.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
          {
            let i = b.dot.v4.MagnifEyeLivenessContent.verify(n.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent")) {
          if (r.blob === 1)
            return "blob: multiple values";
          r.blob = 1;
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
        let r = new b.dot.v4.Blob();
        if (n.documentContent != null) {
          if (typeof n.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          r.documentContent = b.dot.v4.DocumentContent.fromObject(n.documentContent);
        }
        if (n.eyeGazeLivenessContent != null) {
          if (typeof n.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          r.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.fromObject(n.eyeGazeLivenessContent);
        }
        if (n.faceContent != null) {
          if (typeof n.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          r.faceContent = b.dot.v4.FaceContent.fromObject(n.faceContent);
        }
        if (n.magnifeyeLivenessContent != null) {
          if (typeof n.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          r.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.fromObject(n.magnifeyeLivenessContent);
        }
        if (n.smileLivenessContent != null) {
          if (typeof n.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          r.smileLivenessContent = b.dot.v4.SmileLivenessContent.fromObject(n.smileLivenessContent);
        }
        return r;
      }, t.toObject = function(n, r) {
        r || (r = {});
        let i = {};
        return n.documentContent != null && n.hasOwnProperty("documentContent") && (i.documentContent = b.dot.v4.DocumentContent.toObject(n.documentContent, r), r.oneofs && (i.blob = "documentContent")), n.faceContent != null && n.hasOwnProperty("faceContent") && (i.faceContent = b.dot.v4.FaceContent.toObject(n.faceContent, r), r.oneofs && (i.blob = "faceContent")), n.magnifeyeLivenessContent != null && n.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = b.dot.v4.MagnifEyeLivenessContent.toObject(n.magnifeyeLivenessContent, r), r.oneofs && (i.blob = "magnifeyeLivenessContent")), n.smileLivenessContent != null && n.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = b.dot.v4.SmileLivenessContent.toObject(n.smileLivenessContent, r), r.oneofs && (i.blob = "smileLivenessContent")), n.eyeGazeLivenessContent != null && n.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = b.dot.v4.EyeGazeLivenessContent.toObject(n.eyeGazeLivenessContent, r), r.oneofs && (i.blob = "eyeGazeLivenessContent")), i;
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
      return t.prototype.segments = W.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, n) {
        if (n || (n = ue.create()), e.segments != null && e.segments.length)
          for (let r = 0; r < e.segments.length; ++r)
            b.dot.v4.EyeGazeLivenessSegment.encode(e.segments[r], n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.EyeGazeLivenessContent();
        for (; e.pos < r; ) {
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
            let r = b.dot.v4.EyeGazeLivenessSegment.verify(e.segments[n]);
            if (r)
              return "segments." + r;
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
          for (let r = 0; r < e.segments.length; ++r) {
            if (typeof e.segments[r] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[r] = b.dot.v4.EyeGazeLivenessSegment.fromObject(e.segments[r]);
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
        let r = {};
        if ((n.arrays || n.defaults) && (r.segments = []), n.defaults && (r.metadata = null), e.segments && e.segments.length) {
          r.segments = [];
          for (let i = 0; i < e.segments.length; ++i)
            r.segments[i] = b.dot.v4.EyeGazeLivenessSegment.toObject(e.segments[i], n);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
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
        return n || (n = ue.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < r; ) {
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
        let r = {};
        return n.defaults && (r.corner = n.enums === String ? "TOP_LEFT" : 0, r.image = null), e.corner != null && e.hasOwnProperty("corner") && (r.corner = n.enums === String ? b.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : b.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (r.image = b.dot.Image.toObject(e.image, n)), r;
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
        return n || (n = ue.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && b.dot.Image.encode(e.neutralExpressionFaceImage, n.uint32(
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
        let r = n === void 0 ? e.len : e.pos + n, i = new b.dot.v4.SmileLivenessContent();
        for (; e.pos < r; ) {
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
        let r = {};
        return n.defaults && (r.neutralExpressionFaceImage = null, r.smileExpressionFaceImage = null, r.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (r.neutralExpressionFaceImage = b.dot.Image.toObject(e.neutralExpressionFaceImage, n)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (r.smileExpressionFaceImage = b.dot.Image.toObject(e.smileExpressionFaceImage, n)), e.metadata != null && e.hasOwnProperty("metadata") && (r.metadata = b.dot.v4.Metadata.toObject(e.metadata, n)), r;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, ne.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
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
      return e || (e = ue.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, o.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, o.decode = function(t, e) {
      t instanceof B || (t = B.create(t));
      let n = e === void 0 ? t.len : t.pos + e, r = new b.dot.Image();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            r.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || W.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.Image)
        return t;
      let e = new b.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? W.base64.decode(t.bytes, e.bytes = W.newBuffer(W.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      return e.defaults && (e.bytes === String ? n.bytes = "" : (n.bytes = [], e.bytes !== Array && (n.bytes = W.newBuffer(n.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (n.bytes = e.bytes === String ? W.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
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
      if (e || (e = ue.create()), t.items != null && t.items.length) {
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
      let n = e === void 0 ? t.len : t.pos + e, r = new b.dot.Int32List();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            if (r.items && r.items.length || (r.items = []), (i & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                r.items.push(t.int32());
            } else
              r.items.push(t.int32());
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return r;
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
      return e || (e = ue.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
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
      let n = e === void 0 ? t.len : t.pos + e, r = new b.dot.DigestWithTimestamp();
      for (; t.pos < n; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            r.digest = t.bytes();
            break;
          }
          case 2: {
            r.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(i & 7);
            break;
        }
      }
      return r;
    }, o.decodeDelimited = function(t) {
      return t instanceof B || (t = new B(t)), this.decode(t, t.uint32());
    }, o.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || W.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !W.isInteger(t.timestampMillis) && !(t.timestampMillis && W.isInteger(t.timestampMillis.low) && W.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, o.fromObject = function(t) {
      if (t instanceof b.dot.DigestWithTimestamp)
        return t;
      let e = new b.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? W.base64.decode(t.digest, e.digest = W.newBuffer(W.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (W.Long ? (e.timestampMillis = W.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new W.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, o.toObject = function(t, e) {
      e || (e = {});
      let n = {};
      if (e.defaults)
        if (e.bytes === String ? n.digest = "" : (n.digest = [], e.bytes !== Array && (n.digest = W.newBuffer(n.digest))), W.Long) {
          let r = new W.Long(0, 0, !0);
          n.timestampMillis = e.longs === String ? r.toString() : e.longs === Number ? r.toNumber() : r;
        } else
          n.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (n.digest = e.bytes === String ? W.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? n.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : n.timestampMillis = e.longs === String ? W.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new W.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), n;
    }, o.prototype.toJSON = function() {
      return this.constructor.toObject(this, ne.util.toJSONOptions);
    }, o.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, o;
  }(), x;
})();
async function gI(x) {
  const { Image: o } = X0, t = await x.arrayBuffer(), e = new Uint8Array(t), n = {};
  n.bytes = e;
  const r = o.verify(n);
  if (r) throw Error(r);
  const i = {};
  return i.bytes = e, o.create(i);
}
async function dI(x) {
  const { v4: { Metadata: o } } = X0, t = { ...x };
  t.platform = X0.Platform.WEB;
  const e = t, n = o.verify(e);
  if (n) throw Error(n);
  return o.create(e);
}
async function uI(x) {
  const { Content: o } = X0, { iv: t, key: e, message: n } = await l1(x), r = { token: new Uint8Array(e), iv: t, schemaVersion: _u, bytes: new Uint8Array(n) }, i = o.verify(r);
  if (i) throw Error(i);
  const a = o.create(r);
  return o.encode(a).finish();
}
function lI({ documentContent: x, faceContent: o, magnifeyeLivenessContent: t, smileLivenessContent: e }) {
  const { Blob: n } = X0.v4, r = {};
  r.documentContent = x, r.faceContent = o, r.magnifeyeLivenessContent = t, r.smileLivenessContent = e;
  const i = r, a = n.verify(i);
  if (a) throw Error(a);
  const s = n.create(i);
  return n.encode(s).finish();
}
async function II(x, o) {
  const { FaceContent: t } = X0.v4, e = await gI(x), n = await dI(o), r = {};
  r.image = e, r.metadata = n;
  const i = r, a = t.verify(i);
  if (a) throw Error(a);
  const s = t.create(i), c = {};
  return c.faceContent = s, lI(c);
}
async function fI(x, o) {
  const t = await II(x, o);
  return uI(t);
}
const CI = ({ onPhotoTakenInternal: x }) => {
  const { redfin: o, sunfish: t } = Mr(), { analytics: e } = Bu(), { appState: n, freemiumOverlayState: r } = Pn(), { faceCameraOptions: i } = tc(), { cameraFacing: a, onPhotoTaken: s, sessionToken: c, thresholds: d, wasmDirectoryPath: g } = i, { controller: C } = M1(d, g), l = E0(
    ({ content: O, controller: _, imageData: Ie, webMetadata: U }) => {
      pl(zs.FACE, _.getCandidateSelectionImages()), x == null || x({ cameraProperties: U }), s(Ie, O);
    },
    [x, s]
  ), { cameraResolution: h, cameraService: p, detectionDetails: A, videoRef: u } = zl({
    analytics: e,
    cameraFacing: a,
    controller: C,
    sessionToken: c,
    createProtoMessage: fI,
    onPhotoTaken: l
  }), { shouldMirror: v } = Vl(St.CONTROL, p);
  ml(St.CAMERA_PROPS_CHANGED, {
    cameraResolution: h,
    shouldMirror: v
  }), Be(() => () => {
    Cn.getInstance().restart();
  }, []);
  const H = r !== Hx.HIDDEN && o !== cr.Higher && h, F = r === Hx.VISIBLE, J = t, Y = h && t && n === nt.RUNNING;
  return /* @__PURE__ */ K(bt, { children: [
    H && /* @__PURE__ */ K(i1, { fullOverlay: F, resolution: h }),
    /* @__PURE__ */ K(hu, { ref: u, $isImageMirror: v, $isVisible: J, autoPlay: !0, muted: !0, playsInline: !0 }),
    Y && /* @__PURE__ */ K(
      t1,
      {
        redfin: o,
        cameraResolution: h,
        detectionDetails: A,
        isImageMirror: v
      }
    )
  ] });
}, hI = ({
  onPhotoTakenInternal: x,
  ...o
}) => /* @__PURE__ */ K(nl, { cameraOptions: o, children: /* @__PURE__ */ K(CI, { onPhotoTakenInternal: x }) });
function pI({ initAppState: x }) {
  const [o, t] = xt(x), [e, n] = xt(), [r, i] = xt(!1), a = {};
  return a.appState = o, a.setAppState = t, a.error = e, a.setError = n, a.isCameraReady = r, a.setIsCameraReady = i, a;
}
function mI() {
  const [x] = window.crypto.getRandomValues(new Uint32Array(1));
  return x.toString(3279 + -2329 * -1 + 466 * -12);
}
function bI() {
  const x = sessionStorage.getItem("dot-user-id");
  if (x) return x;
  const o = mI();
  return sessionStorage.setItem("dot-user-id", o), o;
}
function AI(x, o) {
  return o ? o === "user" ? "Front Camera" : "Back Camera" : x;
}
function yI(x) {
  return x > 2699 * 2 + 1 * -2666 + 334 * -8 ? ">1m" : x > -15511 + 2 * 7778 ? ">45" : x > -7 * 797 + 715 + 4894 * 1 ? ">30" : "" + x;
}
const WI = (x) => Math.round(x / 500) * 500 / (-8 * 515 + 1045 + 4075), Na = (x) => x ? x <= 295 + -1 * 2937 + 3 * 881 ? Math.round(x * (-563 + -536 * -15 + -7457)) / (-5389 + -6 * -534 + 2205) : Math.round(x / (2 * 4231 + -8373 + -39 * 1)) * (-9130 + -307 * -32 + -644) : 8108 * -1 + 8077 + 31, vI = (x) => Math.round(x * (9891 + 21 * -433 + -2 * 398)) / (9601 * -1 + -4542 + 14145);
function wI(x) {
  return x !== nt.RUNNING ? Hx.VISIBLE : Hx.VISIBLE_WITH_MASK;
}
function SI({ onError: x }) {
  const { appState: o, error: t, isCameraReady: e, setAppState: n, setError: r, setIsCameraReady: i } = pI({
    initAppState: nt.LOADING
  }), a = wI(o), s = E0(
    (d) => {
      Aa(St.STATE_CHANGED, { appState: nt.ERROR, error: d }), i(!1), x(d), r(d), n(nt.ERROR);
    },
    [x, i, r, n]
  ), c = E0(
    (d) => {
      Aa(St.STATE_CHANGED, { appState: d }), n(d);
    },
    [n]
  );
  return {
    appState: o,
    freemiumOverlayState: a,
    isCameraReady: e,
    setIsCameraReady: i,
    handleAppStateChange: c,
    handleError: s,
    error: t
  };
}
var Dc = ((x) => (x.AUTO_CAPTURE = "auto-capture", x))(Dc || {});
class BI {
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
    const n = e, r = "https://innovatrics.count.ly/i?", i = {};
    i.app_key = this.appKey, i.device_id = this.deviceId;
    const a = ex(i);
    await fetch("" + r + a + "&" + o, n);
  }
  async init(o, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = o;
    const e = { _app_version: ac() }, n = { organization: sc(window.location.href) }, r = ex({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
  async endSession() {
    const o = {};
    o.end_session = "1";
    const t = ex(o);
    await this.countlyFetch(t);
  }
  async sendAutoCaptureEvent(o, t) {
    const e = {};
    e.key = Dc.AUTO_CAPTURE, e.count = 1, e.dur = t, e.segmentation = o;
    const n = [e], r = ex({ events: JSON.stringify(n) });
    await this.countlyFetch(r);
  }
}
const xx = new BI();
class GI {
  constructor() {
    j(this, "countly", xx);
  }
  createSegmentation(o) {
    return { appVersion: ac(), ...o };
  }
  init(o) {
    if (Ol()) return;
    const t = bI();
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
class kI extends GI {
  trackCaptureProcess({ averageFps: o, captureProcessDurationInMs: t, detection: e, deviceName: n, facingMode: r, imageResolution: i, instructionSet: a }) {
    if (!e) return;
    const s = WI(t), c = this.createSegmentation({ faceSize: Na(e.faceSize), confidence: Na(e.confidence), camera: AI(n, r), imageResolution: i.width + "x" + i.height, averageFps: vI(o), captureTime: yI(s), instructionSet: a });
    this.countly.sendAutoCaptureEvent(c, s);
  }
}
const HI = new kI();
let Q;
const Rt = new Array(21 * 227 + 6882 + 11521 * -1).fill(void 0);
Rt.push(void 0, null, !0, !1);
function Wr(x) {
  return Rt[x];
}
let In = Rt.length;
function OI(x) {
  x < 14835 + 1131 * -13 || (Rt[x] = In, In = x);
}
function Fc(x) {
  const o = Wr(x);
  return OI(x), o;
}
let Tt = -3605 + -1537 * 2 + 6679, an = null;
function bx() {
  return (an === null || an.byteLength === -9125 + 1 * 4973 + 4152) && (an = new Uint8Array(Q.memory.buffer)), an;
}
const Ax = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, KI = typeof Ax.encodeInto == "function" ? function(x, o) {
  return Ax.encodeInto(x, o);
} : function(x, o) {
  const t = Ax.encode(x);
  o.set(t);
  const e = {};
  return e.read = x.length, e.written = t.length, e;
};
function Mx(x, o, t) {
  if (t === void 0) {
    const a = Ax.encode(x), s = o(a.length, -4 * -2124 + -19 * 413 + -648) >>> 1 * 8278 + -1955 * 1 + -6323;
    return bx().subarray(s, s + a.length).set(a), Tt = a.length, s;
  }
  let e = x.length, n = o(e, -5467 + 193 * 15 + 2573) >>> 7 * 567 + -880 + -3089;
  const r = bx();
  let i = 156 * -30 + 1 * -3209 + 7889;
  for (; i < e; i++) {
    const a = x.charCodeAt(i);
    if (a > 8692 + 571 * -15) break;
    r[n + i] = a;
  }
  if (i !== e) {
    i !== 9110 + -4447 * 2 + -36 * 6 && (x = x.slice(i)), n = t(n, e, e = i + x.length * (11273 + 11270 * -1), 6267 + 461 * -16 + 1110) >>> 23 * -42 + -3997 + 4963;
    const a = bx().subarray(n + i, n + e), s = KI(x, a);
    i += s.written, n = t(n, e, i, 1 * 2303 + -2 * -2147 + -97 * 68) >>> -1663 * 1 + 4 * 1891 + 843 * -7;
  }
  return Tt = i, n;
}
function Yc(x) {
  return x == null;
}
let sn = null;
function Xt() {
  return (sn === null || sn.byteLength === -1207 * -4 + 3917 * 1 + -8745) && (sn = new Int32Array(Q.memory.buffer)), sn;
}
const vr = {};
vr.ignoreBOM = !0, vr.fatal = !0;
const Xc = typeof TextDecoder < "u" ? new TextDecoder("utf-8", vr) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Xc.decode();
function wr(x, o) {
  return x = x >>> 1693 + -10 * 739 + -27 * -211, Xc.decode(bx().subarray(x, x + o));
}
function Sr(x) {
  In === Rt.length && Rt.push(Rt.length + (-3696 + 3697 * 1));
  const o = In;
  return In = Rt[o], Rt[o] = x, o;
}
let cn = null;
function Mc() {
  return (cn === null || cn.byteLength === -842 * 4 + -5548 + 4 * 2229) && (cn = new Uint32Array(Q.memory.buffer)), cn;
}
function Da(x, o) {
  const t = o(x.length * 4, 4) >>> 0, e = Mc();
  for (let n = 494 * -19 + -2686 + 12072; n < x.length; n++)
    e[t / (-1 * -5729 + -5441 + 1 * -284) + n] = Sr(x[n]);
  return Tt = x.length, t;
}
function Fa(x, o) {
  x = x >>> -3327 * 1 + -13 * 178 + -1 * -5641;
  const t = Mc(), e = t.subarray(x / (-4804 + 13 * 439 + -899 * 1), x / (6997 * 1 + -8230 + 1237) + o), n = [];
  for (let r = 5570 + 1114 * -5; r < e.length; r++)
    n.push(Fc(e[r]));
  return n;
}
function ZI(x, o) {
  const t = Mx(x, Q.__wbindgen_malloc, Q.__wbindgen_realloc), e = Tt, n = Mx(o, Q.__wbindgen_malloc, Q.__wbindgen_realloc), r = Tt, i = Q.is_mobile_supported(t, e, n, r);
  return ni.__wrap(i);
}
const Br = {};
Br.register = () => {
}, Br.unregister = () => {
};
const Ya = typeof FinalizationRegistry > "u" ? Br : new FinalizationRegistry((x) => Q.__wbg_licensevalidationresult_free(x >>> 3305 * -2 + -8414 + 15024));
class ni {
  static __wrap(o) {
    o = o >>> -446 * 3 + 1 * -834 + -12 * -181;
    const t = Object.create(ni.prototype);
    return t.__wbg_ptr = o, Ya.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const o = this.__wbg_ptr;
    return this.__wbg_ptr = -9664 + -9151 * -1 + 513, Ya.unregister(this), o;
  }
  free() {
    const o = this.__destroy_into_raw();
    Q.__wbg_licensevalidationresult_free(o);
  }
  constructor(o, t, e, n) {
    var r = Yc(t) ? 0 : Mx(t, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Tt;
    const a = Da(e, Q.__wbindgen_malloc), s = Tt, c = Da(n, Q.__wbindgen_malloc), d = Tt, g = Q.licensevalidationresult_new(o, r, i, a, s, c, d);
    return this.__wbg_ptr = g >>> 5351 * -1 + 4670 + 681, this;
  }
  get is_valid() {
    return Q.licensevalidationresult_is_valid(this.__wbg_ptr) !== -7750 + 1 * -2793 + 10543;
  }
  get features_json() {
    try {
      const e = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var o = Xt()[e / (3103 + -1 * 3099) + (-4 * 1013 + 8196 + -296 * 14)], t = Xt()[e / (2060 + 4787 * -2 + -7 * -1074) + (-2622 + 1 * 6167 + 8 * -443)];
      let n;
      return o !== -1489 * -2 + 762 * -9 + 3880 && (n = wr(o, t).slice(), Q.__wbindgen_free(o, t * 1, 7 * 5 + -3893 + 3859)), n;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get errors() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_errors(n, this.__wbg_ptr);
      var o = Xt()[n / 4 + (6556 + 4014 * -1 + 82 * -31)], t = Xt()[n / 4 + (67 * -3 + 1 * -823 + 1025)], e = Fa(o, t).slice();
      return Q.__wbindgen_free(o, t * (-3 * 1367 + 9106 * 1 + 3 * -1667), 2013 + 1 * -2009), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-6665 + -1 * -4202 + 2479);
    }
  }
  get warnings() {
    try {
      const n = Q.__wbindgen_add_to_stack_pointer(-16);
      Q.licensevalidationresult_warnings(n, this.__wbg_ptr);
      var o = Xt()[n / (-13 * -52 + -1 * 1871 + -11 * -109) + 0], t = Xt()[n / (325 * 19 + 3394 + -9565) + (39 + -1387 * -6 + -8360)], e = Fa(o, t).slice();
      return Q.__wbindgen_free(o, t * (-1 * -5065 + 3 * 3172 + -14577), 2 * 607 + -5011 + 3801), e;
    } finally {
      Q.__wbindgen_add_to_stack_pointer(-606 * 5 + 3445 * -2 + 276 * 36);
    }
  }
}
async function RI(x, o) {
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
function PI() {
  const x = {};
  return x.wbg = {}, x.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Sr(/* @__PURE__ */ new Date());
  }, x.wbg.__wbg_getTime_2bc4375165f02d15 = function(o) {
    return Wr(o).getTime();
  }, x.wbg.__wbindgen_object_drop_ref = function(o) {
    Fc(o);
  }, x.wbg.__wbindgen_string_get = function(o, t) {
    const e = Wr(t), n = typeof e == "string" ? e : void 0;
    var r = Yc(n) ? -153 * -62 + -9136 + -350 : Mx(n, Q.__wbindgen_malloc, Q.__wbindgen_realloc), i = Tt;
    Xt()[o / (-2309 * 2 + 6147 + 1 * -1525) + (-5765 * 1 + 1 * -9739 + 15505)] = i, Xt()[o / (177 * 23 + -2411 * 1 + -207 * 8) + (1 * -7342 + -4344 + 1 * 11686)] = r;
  }, x.wbg.__wbindgen_string_new = function(o, t) {
    const e = wr(o, t);
    return Sr(e);
  }, x.wbg.__wbindgen_throw = function(o, t) {
    throw new Error(wr(o, t));
  }, x;
}
function VI(x, o) {
  return Q = x.exports, jc.__wbindgen_wasm_module = o, sn = null, cn = null, an = null, Q;
}
async function jc(x) {
  if (Q !== void 0) return Q;
  typeof x > "u" && (x = new URL("dot_embedded_bg.wasm", import.meta.url));
  const o = PI();
  (typeof x == "string" || typeof Request == "function" && x instanceof Request || typeof URL == "function" && x instanceof URL) && (x = fetch(x));
  const { instance: t, module: e } = await RI(await x, o);
  return VI(t, e);
}
(function(x, o) {
  function t(s, c, d, g, C) {
    return Se(c - 873, g);
  }
  function e(s, c, d, g, C) {
    return Se(C - 575, g);
  }
  function n(s, c, d, g, C) {
    return Se(s - -856, C);
  }
  const r = x();
  function i(s, c, d, g, C) {
    return Se(d - -210, C);
  }
  function a(s, c, d, g, C) {
    return Se(g - -176, d);
  }
  for (; ; )
    try {
      if (parseInt(i(107, 123, 109, 102, "BAwN")) / 1 * (parseInt(i(94, 89, 114, 140, "@mXR")) / 2) + -parseInt(a(130, 143, "US0Z", 135, 146)) / 3 + parseInt(e(857, 862, 897, "woJ]", 885)) / 4 + parseInt(n(-580, -552, -585, -607, "wjCt")) / 5 + -parseInt(t(1206, 1181, 1167, "BAwN", 1195)) / 6 * (parseInt(a(140, 145, "@g5t", 128, 144)) / 7) + parseInt(i(60, 103, 75, 78, "Ov%U")) / 8 * (parseInt(a(137, 121, "L17w", 142, 159)) / 9) + parseInt(e(900, 904, 894, "&BER", 897)) / 10 * (-parseInt(e(860, 868, 856, "MOSF", 862)) / 11) === o) break;
      r.push(r.shift());
    } catch {
      r.push(r.shift());
    }
})(jx, -27920 + -6 * 77229 + 817066);
function TI(x, o, t, e, n) {
  return Se(x - -481, e);
}
function S0(x, o, t, e, n) {
  return Se(e - -521, o);
}
function EI(x, o, t, e, n) {
  return Se(x - -336, t);
}
function jx() {
  const x = ["W69rWOb/i8ogWPS", "i8o+W4pcUCkbWOmy", "W5DrgGddGG8cW4fgWOPi", "sMFcVtxdL8oaDSo/W7JdOcxcKSkc", "y8k+n8oHW7S", "WQaPWPv9WQxdRmkbbSoIWOzRW4u", "WP8nWRGOwW", "zSk6oSo7W6q", "WQ1lWR7dM04", "WO/cH1xcRmoF", "mduap8kl", "gmk1W5pcRSkE", "C2jfy8o0W6qNmGJdHrpcGW", "W4dcLcldR0a", "DMbdz8o7W6HriJtdKJFcTxy", "WPddPHddIIu", "mw7cLZrH", "jIaApCkS", "W740w8ohaa", "WQWaW5ZcSvO", "WRfTWQXPna", "kgRcId9X", "EcWicha", "W44cWPinFg/dSW", "hd/dV23cGq", "umknFCkWWPH5f0y", "fSktW6j5oG", "DM1czSo7W6ruiJVdIatcH1a", "WO0et17cJW", "W617W7VdL8ko", "wmkzW751oa", "kwZcGd81", "W47dNgNdTSk4", "ASoFFwbUxmolW5BcPSo2WQj1lW", "W6tdLCk4jCon", "W4qmtv7cGq", "pCoRgHldHG", "FmoegSoWWQm", "W7WoWRpcUmosW6nPWOO", "WQddNmkTe8oe", "W5DseGxdGvn+W6z8WRnVnYa", "W7f7W7WUW7q", "zmoojsRdGCkOmW", "WQ9fW7tdJCkx", "imkEWRZdLY8", "mSoUBCk5WRz8W5NdH1mkemofW4e", "W689W6y1ACkDW4jqwrxdSSo/nG", "W7vEWOJcOmoKW51P", "z2jytYtcVSk3vCkSgmoVCCo1", "s8ooWQ8NBbJcNmoKbmolWRm", "WPaXWOlcSa", "DLBcPcLMW4tdGq", "WQuRWPn5WQRdOmo3fSoEWPfpW7pcHq", "WQbuW7RdJmoA", "tMOTW4T9", "BCoMmxi", "rCkZumoZW5ddK0ldQCowW6SfsSkL"];
  return jx = function() {
    return x;
  }, jx();
}
function Se(x, o) {
  const t = jx();
  return Se = function(e, n) {
    e = e - (-1629 + 1 * 1897);
    let r = t[e];
    if (Se.SdZTue === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Se.STINtM = d, x = arguments, Se.SdZTue = !0;
    }
    const a = t[-429 + -7 * 1016 + 7541], s = e + a, c = x[s];
    return c ? r = c : (Se.mgbdoe === void 0 && (Se.mgbdoe = !0), r = Se.STINtM(r, n), x[s] = r), r;
  }, Se(x, o);
}
function Lo(x, o, t, e, n) {
  return Se(t - -746, e);
}
function No(x, o, t, e, n) {
  return Se(t - -101, x);
}
var ja;
class LI {
  constructor() {
    j(this, ja, !1);
  }
  async [(ja = No("rk8O", 211, 215) + No("@g5t", 206, 197) + Lo(-483, -445, -466, "1Xwm"), S0(-211, "#oFg", -218, -204))](o = S0(-226, "vpl9", -195, -216)) {
    function t(a, s, c, d, g) {
      return Lo(a - 186, s - 120, a - 750, g);
    }
    function e(a, s, c, d, g) {
      return TI(a - 1439, s - 375, c - 309, c);
    }
    function n(a, s, c, d, g) {
      return No(a, s - 154, s - 859);
    }
    function r(a, s, c, d, g) {
      return Lo(a - 283, s - 480, a - 865, c);
    }
    function i(a, s, c, d, g) {
      return S0(a - 352, c, c - 64, d - 732);
    }
    try {
      const a = o + "/" + el;
      await jc(a), this[e(1274, 1261, "rk8O", 1265, 1254) + e(1264, 1242, "xBPe", 1272, 1258) + i(480, 480, "BAwN", 493, 469)] = !0;
    } catch {
      this[e(1230, 1245, "wjCt") + i(505, 502, "US0Z", 499) + n("^$34", 1041)] = !1, console[t(316, 290, 308, 288, "Jb2M")](n("Kwc[", 1059) + i(470, 510, "!fKh", 482) + i(535, 537, "@mXR", 514) + n("woJ]", 1042) + i(479, 489, "4#Vh", 508) + i(540, 520, "cG*4", 534) + e(1228, 1225, "afEm") + n("Kwc[", 1054) + e(1231, 1230, "@An$") + r(388, 374, "cG*4") + r(411, 410, "US0Z") + n("oC@o", 1035) + r(397, 398, "^$34") + r(398, 426, "wjCt") + r(434, 456, "vpl9") + n("^$34", 1051) + i(502, 458, "Ov%U", 479) + r(418, 412, "r[8S") + "n.");
    }
  }
  [S0(-244, "ueS7", -229, -246) + EI(-45, -67, "vpl9") + S0(-212, "4#Vh", -244, -231) + "ed"]() {
    function o(t, e, n, r, i) {
      return S0(t - 172, t, n - 124, n - 1042);
    }
    return this[o("#R&2", 795, 815) + o("&BER", 808, 807) + o("wBIr", 826, 802)];
  }
}
class Do extends Error {
  constructor() {
    super(...arguments);
    j(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function ox(x, o, t, e, n) {
  return ge(x - 184, n);
}
function Dt(x, o, t, e, n) {
  return ge(e - 621, n);
}
function Jx() {
  var x = ["sh3cU8kcaq", "WRddTCoSu1q", "uM/cMmkabq", "zCoLWPdcRKS", "x8o9qCovWPy", "sJa0", "umoLW6LPW6BdVmkRaG", "W4BdHwu", "CSouW5ToaW", "qmk9WRLIa0pdGYf/WReM", "bCkSlSoeW5G", "zgRcHr3cSa", "W5flomoQyq", "fw9/vNhdGrpcPYiOkcSj", "vKG0vGG", "W7OUcmoVpa", "WO/cRSkZqd8", "v3xcVq", "mmk/C8oe", "W5PtW7r4DG", "tCoSxmojWOS", "salcT0ie", "nSkreLtdLG", "DmoYWOZcGLi", "rmohkCoZWQq", "WQHVdq", "gCkTaSkiW40oW7PXE8owjXVcLmkn", "W5VcIwtcMxdcJ8o9xSktWQPvWOzb", "u8oNWQztW5JdVSkydCoa", "AwxcJ8kuya", "uuG0sWq", "WRRcGLrKW7DfoG8", "usGflW1TdXyLW6BcRq/dVbK", "W4FcH8k2z8oc", "tmk3WR1MaZZcSJnpWPWUg8kP", "qmo9r8oyWPC", "WO0xBCkBmwBdVmkgCY7cUZRdUq", "FmoqW45zhG", "v1GDW5xcTa", "W5tcUSoiW5pdK8o5WO0MvCk/iJHg", "W7GbncdcUfJdHhXWW5ivW5lcNa", "WQ5lz8kdyG", "WRzXW6DnWOGAF8oaySoQB8oH", "vcBcUslcSa", "WQH+d8obhCkHeSk4", "WQjDW5a", "W5BcUmoiW5BdKmo/W58gsmk2cGe", "WOVdLdtdNZa", "DSoKtbtcHhFdLZaaW6dcTtVdTW", "W6pdGmoXCG", "eCkgA8kRW77cQcfOW5FcImoi", "B2pcIa", "C2KWx0jVhWeA", "W5xdVCkWqsBdRmoDWPm", "wrxcUv0J", "DKryeL/cQmkbWQ7cR1bigXq", "eSoLW5zAdq", "W4XmmmoawG"];
  return Jx = function() {
    return x;
  }, Jx();
}
function Fo(x, o, t, e, n) {
  return ge(x - 695, n);
}
function Xa(x, o, t, e, n) {
  return ge(e - -129, n);
}
(function(x, o) {
  function t(c, d, g, C, l) {
    return ge(c - 50, g);
  }
  function e(c, d, g, C, l) {
    return ge(l - -642, c);
  }
  var n = x();
  function r(c, d, g, C, l) {
    return ge(l - -718, c);
  }
  function i(c, d, g, C, l) {
    return ge(C - 367, d);
  }
  function a(c, d, g, C, l) {
    return ge(l - 956, C);
  }
  for (; ; )
    try {
      var s = -parseInt(r("5FSX", -303, -313, -273, -298)) / 1 * (-parseInt(r("vbAU", -338, -338, -359, -334)) / 2) + -parseInt(t(420, 431, "FEP5", 423, 413)) / 3 * (parseInt(i(761, "Oy!G", 749, 739, 740)) / 4) + parseInt(a(1357, 1406, 1380, "@DMQ", 1382)) / 5 + parseInt(r("br2^", -326, -284, -317, -306)) / 6 + parseInt(t(425, 412, "NP$&", 431, 428)) / 7 + -parseInt(t(454, 454, "Rqai", 478, 432)) / 8 + -parseInt(e("4QEx", -225, -261, -233, -233)) / 9 * (parseInt(r("5d5Y", -321, -341, -326, -327)) / 10);
      if (s === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Jx, -143513 + -4 * 177006 + 1622224);
function ge(x, o) {
  var t = Jx();
  return ge = function(e, n) {
    e = e - (43 * 219 + 6 * 1162 + -16020);
    var r = t[e];
    if (ge.dZqMFC === void 0) {
      var i = function(g) {
        for (var C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", l = "", h = "", p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (var H = 0, F = l.length; H < F; H++)
          h += "%" + ("00" + l.charCodeAt(H).toString(16)).slice(-2);
        return decodeURIComponent(h);
      }, a = function(g, C) {
        var l = [], h = 0, p, A = "";
        g = i(g);
        var u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (var v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      ge.LLBbAx = a, x = arguments, ge.dZqMFC = !0;
    }
    var s = t[-166 * -58 + 4188 + 314 * -44], c = e + s, d = x[c];
    return d ? r = d : (ge.ToKrVF === void 0 && (ge.ToKrVF = !0), r = ge.LLBbAx(r, n), x[c] = r), r;
  }, ge(x, o);
}
function rx(x, o, t, e, n) {
  return ge(o - 135, n);
}
var P0;
class Ma {
  constructor(o) {
    de(this, P0);
    function t(a, s, c, d, g) {
      return ge(s - -976, g);
    }
    function e(a, s, c, d, g) {
      return ge(c - 127, g);
    }
    function n(a, s, c, d, g) {
      return ge(d - -554, s);
    }
    this[n(-150, "CWc2", -126, -153) + n(-124, "rfBz", -155, -139)] = o;
    function r(a, s, c, d, g) {
      return ge(c - 654, s);
    }
    function i(a, s, c, d, g) {
      return ge(d - 694, c);
    }
    try {
      ae(this, P0, o[i(1120, 1125, "4o(Q", 1119, 1101) + e(504, 501, 503, 520, "6iVM") + e(550, 555, 530, 531, "o[*y")] && JSON[t(-567, -568, -555, -585, "vGdY")](o[t(-587, -583, -566, -610, "U6ai") + e(482, 507, 508, 517, "CWc2") + r(1058, "RJnX", 1077, 1103, 1074)]));
    } catch (a) {
      console[r(1001, "HL&l", 1023)](a);
    }
  }
  get [Dt(987, 1002, 992, 1e3, "zW4M") + "id"]() {
    function o(n, r, i, a, s) {
      return Dt(n - 162, r - 114, i - 204, a - -71, n);
    }
    function t(n, r, i, a, s) {
      return Dt(n - 447, r - 2, i - 200, a - -1500, i);
    }
    function e(n, r, i, a, s) {
      return Dt(n - 83, r - 425, i - 321, r - -362, i);
    }
    return this[e(685, 658, "v(lT") + t(-464, -484, "Rqai", -466)][e(621, 647, "1)*@") + o("OGZq", 966, 923, 945)];
  }
  get [Dt(1047, 1068, 1018, 1040, "Y%b2") + "s"]() {
    function o(e, n, r, i, a) {
      return Fo(a - -1281, n - 360, r - 220, i - 460, e);
    }
    function t(e, n, r, i, a) {
      return Fo(e - -497, n - 361, r - 78, i - 185, r);
    }
    return this[o("4[af", -198, -216, -200, -189) + o("o@%)", -189, -159, -186, -179)][t(587, 572, "Z]m#", 587) + "s"];
  }
  get [Dt(1013, 974, 1030, 1003, "Rqai") + ox(567, 595, 595, 556, "5d5Y")]() {
    function o(n, r, i, a, s) {
      return ox(a - -48, r - 392, i - 420, a - 30, n);
    }
    function t(n, r, i, a, s) {
      return rx(n - 312, a - 252, i - 487, a - 216, s);
    }
    function e(n, r, i, a, s) {
      return ox(i - -642, r - 494, i - 326, a - 6, s);
    }
    return this[o("4[af", 526, 509, 533) + o("kmx5", 558, 503, 530)][e(-37, -63, -66, -40, "vGdY") + t(774, 761, 785, 758, "o@%)")];
  }
  get [ox(600, 577, 591, 620, "Gd#2") + "b"]() {
    return X(this, P0);
  }
  get [Fo(1075, 1062, 1086, 1054, "OGZq") + rx(547, 537, 563, 513, "FEP5") + rx(525, 535, 534, 520, "@DMQ") + Xa(260, 288, 255, 267, "YPnF")]() {
    var r, i;
    function o(a, s, c, d, g) {
      return rx(a - 279, d - 593, c - 482, d - 106, g);
    }
    function t(a, s, c, d, g) {
      return Dt(a - 406, s - 295, c - 396, a - 207, d);
    }
    function e(a, s, c, d, g) {
      return Dt(a - 417, s - 428, c - 306, c - -1203, d);
    }
    function n(a, s, c, d, g) {
      return Xa(a - 9, s - 31, c - 176, d - -69, g);
    }
    return !!((i = (r = X(this, P0)) == null ? void 0 : r[e(-179, -224, -196, "rfBz") + o(1105, 1095, 1126, 1113, "z1Gt")]) != null && i[e(-195, -212, -208, "v(lT") + o(1141, 1145, 1127, 1149, "Cr0H") + t(1239, 1267, 1229, "TUP)") + e(-208, -222, -205, "J6JE") + t(1226, 1248, 1233, "Rqai") + n(196, 220, 206, 192, "J6JE") + e(-222, -192, -204, "OGZq") + "d"]);
  }
}
P0 = new WeakMap();
(function(x, o) {
  function t(i, a, s, c, d) {
    return Ze(i - -269, a);
  }
  function e(i, a, s, c, d) {
    return Ze(s - 806, a);
  }
  const n = x();
  function r(i, a, s, c, d) {
    return Ze(a - -85, s);
  }
  for (; ; )
    try {
      if (parseInt(r(155, 177, "ksbg", 252, 268)) / 1 + parseInt(e(1130, "@KNN", 1044, 1083, 962)) / 2 * (parseInt(r(16, 105, "[Fo^", 25, 45)) / 3) + parseInt(t(-33, "XAyh", -124, -16, -22)) / 4 + parseInt(e(919, "(nx2", 1007, 940, 933)) / 5 + -parseInt(e(1117, "Ij&v", 1041, 1018, 1046)) / 6 + parseInt(t(79, "O1X!", 155, 160, 2)) / 7 + -parseInt(r(60, 147, "lMFM", 197, 161)) / 8 === o) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(_x, 130321 + 389548 * -1 + 633681);
function $t(x, o, t, e, n) {
  return Ze(t - -282, e);
}
function _x() {
  const x = ["a8kIW55LWQ0", "W7pdJCoZW5e+", "WOPhW5FdJ8oa", "WQhcJbiGCG", "WQRcHri", "W6hcNYz8W4K", "W5BcTSkOBq", "W74IWRKqW5a", "W7joWQBdGgW", "W5ZcQSkHCCkq", "EgC6dYK", "lq7cU8ocda", "W53cGGPxW4u", "WORcJuebhq", "WORcHvldVmoa", "W4RcJJ1sWQK", "WP/dPCoybgq", "W64vWOm", "ANGvW4qe", "WRLjW5hdPmoe", "W4urWRtdNG", "W7zkwq", "WRBdISoEpvy", "qeau", "W4ldMCo1W4K4", "a0v9Bmko", "W5RcQSk8BCkr", "ybJdJSormG", "W5BcUComeCo0", "W7nmsCke", "awVdOmkmWO4", "WQ8hqxiP", "WOBdLgSSWPVcU1eoCWhcQuzx", "hItdKmo+W4e", "W602WPa", "ctS2W7Gf", "bwpdT8kkWOG", "bsJdHW", "W6mDWP4Iga", "WPBcMfRdTSo4", "W6yxWOq1aG", "WQJcJqiKjG", "W6jTWRG", "a8oosSkhW4S", "W58FWPFcUCkyWP1Lk3ddTeyb", "W7GiWR9OW4y", "jSotWO4Kpq", "r8okW5pdRmoI", "W53cUH/dHCk4", "WQRcJrvLoW", "cefNFmkd", "W5fIEuG", "WPvowxiR", "W5FcOrNdHq", "WO7dRCo4m8oBdf9MuSofFmktia", "W7vWWRJdG1u", "yZldM8oqW5G", "E8k1kH9l", "WPpcGXiOCG", "WQ5qW65lcq", "W7aaWP8GaW", "DSklwCkgW4efW4HJ", "W5rsWPW/cq", "W7iFrG", "W5NcGIe", "CJtdL8oYW4u", "WRpcVCk0WQHq", "rsK/eG", "jSojD8kfW7y", "Fmo0cqtcGq", "WRpdTmkVq8k8zaxdVCkmW4ugpa", "WOTJW7ztkG", "Bf0iW5iL", "ESk9ibq", "E34AWPxcRa", "wv0tW5mJ", "W4NcNJLi", "W4lcJbXQW7O", "W6tcHa4Wpa", "W7NdOfRdL8o+", "W5lcKCkGA8kx", "WP1iW6BcGI5QtYjBCfRcTW", "W6VcOCo2hCo3", "W5pdOSoNW5aY", "m8kLWQGYlW", "gSkiyYbR", "v8k7rY/cUG", "agNdSCkbWPu", "WRbvkCkaW6a", "csy3W78e", "rx/cHSkPWOyviWi4W6v9khu", "WOdcHuhdNCoT", "E8kljWT2", "WQ9vgCk/", "k8osBmkFW6q", "W5pcIGLFWRq", "W7iWWP1RW4C", "WRhcU8k+WPDk", "W4dcHcb0", "W43dH8oYW4RdVa", "WRNdT00wWPZdJCorlLeJWQLpqG", "WO1AW4ZdUCoE", "WRBdNCoFpua", "WQyAgmktbSoFWPPxuaZdOwVdNMu", "W7LXWPxdMKy", "AKCiW7FdIG", "mmoQWRqyoG", "BfrVW4pdPa", "WRXnW5ddV8ob", "W53cVCkQzSkg", "rCozcSoMWPm", "W4lcPXpdJCkZ", "FCoPWOqUW5ddIJlcKaRcSWFcNmoUWR8", "W7XRWRddIum", "aCoKWRuWEW", "WO/dIN0xW58PWOVcSSkRl0SciW", "W6FcL8kdDWDcefblDsz4CG", "WRddGCodkXm", "WQhcS3/dVCo5WOpdVgu", "ju3cKXa6", "W75AESolta", "W5tcOq7dJ8kK", "BINdMCozW4m", "gGxcGSoubG", "dJ3dKCo0W58", "AWZdICognq", "W64MWR86W5y", "WQiCwMG7", "z8kpWQzFna", "W7mrxmkNlG", "W7bAacX5aCkpWQbgqSkwwG", "W74IWRKxW4O", "WOL0W6XIna", "lgJcRa8", "C2ikW5xcPa", "W708WPb9W4W", "bmkiDG", "bYBdH8oJW5C", "W4LhoCkSWO0", "CCk7fb/cMW", "W7xdPKRdICos", "WPD+W7G", "W5GrWPpcVSkAWP9HhL3dJ0WD", "WO1WW7nuoG", "W67cR8o5fCo5", "q20U", "WObhW5FcQSoe", "qMeMWRldOG", "WRuAwx4S", "WRBcNSkAWR1m", "W4BcJfZdRCoI", "imkZW5jYWOC", "W4hcSG7dK8kZ", "W5lcLYb1W5G", "W6WDWPCtga", "Bv8ZWQ7dLq", "W5JcSszqW68", "W4PjWPFdI0G", "W780WPS", "l0BdHCkUWQi", "W4FdTSoMW4O0", "WPZcPSk4WR5n", "W4zlkCkSWPO", "i8oEECkcW7a", "WR91WQVdN0O", "W4HnomkoWOa", "W70FwSkbjW", "W7ZdPe0", "WQNcHXm", "W5/cKYD1WOi", "W4WrwSkQlW", "WRqCqCkNiW", "dIyTW44B", "kbpcPSo0hG", "W67cQCo+", "au12", "WQJcIWiGpa", "WRJcPmkLWOVcQmkSp2S6WOldVCog", "WR3dSCkUW6m", "nmoGWQi5pG", "gYJdKG", "sMCOWPldQW", "WQGSrw4a", "qu4oW54/", "W45loa", "smowdCoGW5S", "W5rLC1NcNa", "ccW9W68t", "wgKWWR7dOG", "W5jiWQtdGu4", "W7eOWR4GW5e", "W5SRWOXHW5S", "W6xdHCoNW67dQG", "WPtcGmkpW7TV", "WRBcQSkVWRHl", "dZSRW6qe"];
  return _x = function() {
    return x;
  }, _x();
}
function ht(x, o, t, e, n) {
  return Ze(x - -771, n);
}
function e0(x, o, t, e, n) {
  return Ze(e - -497, x);
}
function Ze(x, o) {
  const t = _x();
  return Ze = function(e, n) {
    e = e - (109 * 58 + -1 * -4493 + 463 * -23);
    let r = t[e];
    if (Ze.vrDcNv === void 0) {
      var i = function(g) {
        const C = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let l = "", h = "";
        for (let p = 0, A, u, v = 0; u = g.charAt(v++); ~u && (A = p % 4 ? A * 64 + u : u, p++ % 4) ? l += String.fromCharCode(255 & A >> (-2 * p & 6)) : 0)
          u = C.indexOf(u);
        for (let p = 0, A = l.length; p < A; p++)
          h += "%" + ("00" + l.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(h);
      };
      const d = function(g, C) {
        let l = [], h = 0, p, A = "";
        g = i(g);
        let u;
        for (u = 0; u < 256; u++)
          l[u] = u;
        for (u = 0; u < 256; u++)
          h = (h + l[u] + C.charCodeAt(u % C.length)) % 256, p = l[u], l[u] = l[h], l[h] = p;
        u = 0, h = 0;
        for (let v = 0; v < g.length; v++)
          u = (u + 1) % 256, h = (h + l[u]) % 256, p = l[u], l[u] = l[h], l[h] = p, A += String.fromCharCode(g.charCodeAt(v) ^ l[(l[u] + l[h]) % 256]);
        return A;
      };
      Ze.kazxjn = d, x = arguments, Ze.vrDcNv = !0;
    }
    const a = t[17 * -129 + -3920 + 6113], s = e + a, c = x[s];
    return c ? r = c : (Ze.GuPviF === void 0 && (Ze.GuPviF = !0), r = Ze.kazxjn(r, n), x[s] = r), r;
  }, Ze(x, o);
}
function Ne(x, o, t, e, n) {
  return Ze(n - 23, t);
}
function We(x, o, t, e, n) {
  return Ze(t - -937, x);
}
var Ja, _a;
class NI {
  constructor(o) {
    j(this, _a);
    j(this, Ja);
    function t(e, n, r, i, a) {
      return Ze(a - 439, n);
    }
    this[t(788, "X0nt", 816, 674, 731) + t(718, "T^fq", 591, 766, 687) + "d"] = o;
  }
  async [(_a = Ne(213, 224, "wW0v", 282, 200) + "se", Ja = Ne(320, 414, "nq[y", 307, 350) + $t(11, -110, -52, "()DX"), e0("HoWv", -398, -365, -310))](o = Ne(316, 317, "*DI]", 329, 307), t = ht(-480, -534, -429, -573, "(g(C") + We("q1d[", -703, -743) + "ic") {
    function e(a, s, c, d, g) {
      return Ne(a - 110, s - 95, a, d - 81, c - -588);
    }
    await Promise[n(818, "Ij&v", 789, 881) + i(-88, -94, -135, -161, "a@xT")]([this[r("EBp[", -289, -274) + r("1dMs", -222, -276) + "d"][n(760, "kPME", 764, 763)](o), this[r("s]Wd", -255, -251) + n(757, ")19Z", 819, 759) + "e"](t)]);
    function n(a, s, c, d, g) {
      return We(s, s - 367, d - 1529);
    }
    function r(a, s, c, d, g) {
      return We(a, s - 203, c - 362);
    }
    function i(a, s, c, d, g) {
      return We(g, s - 105, c - 534);
    }
    this[e("EBp[", -306, -257, -327) + e("4RFv", -453, -389, -467) + r("XAyh", -321, -237)]();
  }
  async [ht(-415, -384, -512, -481, "LAAB") + We("s]Wd", -660, -628) + "se"](o) {
    function t(a, s, c, d, g) {
      return Ne(a - 142, s - 85, d, d - 127, a - 870);
    }
    function e(a, s, c, d, g) {
      return Ne(a - 162, s - 345, s, d - 281, d - -299);
    }
    function n(a, s, c, d, g) {
      return We(d, s - 79, c - 1119);
    }
    function r(a, s, c, d, g) {
      return $t(a - 15, s - 171, g - 1035, c);
    }
    function i(a, s, c, d, g) {
      return Ne(a - 295, s - 188, d, d - 20, c - 173);
    }
    try {
      if (t(1227, 1289, 1223, "f#l%", 1134) !== e(-22, "EBp[", 95, -1, 56)) _0x1de0fc[i(369, 446, 457, "qAK#", 413)]();
      else {
        const a = await fetch(o);
        if (!a.ok)
          throw i(547, 536, 475, "*&xp", 394) !== e(134, "lMFM", 131, 40, -21) ? new Error(i(417, 592, 509, "EUe0", 548) + t(1242, 1192, 1274, "^tP$", 1303) + i(349, 462, 400, "1dMs", 322) + i(411, 474, 466, "ZpP^", 436) + "d.") : new _0x18cd5e(e(-27, "1dMs", -86, -42, 11) + n(516, 427, 448, "ksbg", 467) + i(484, 574, 543, "a@xT", 459) + i(469, 367, 463, "EBp[", 500) + ".");
        this[e(-197, "Vd5N", -202, -108, -162) + "se"] = await a[i(456, 381, 409, "6iwB", 487)]();
      }
    } catch (a) {
      if (i(574, 456, 540, "[Fo^") === i(478, 499, 439, "nq[y")) this[i(392, 419, 467, "lMFM") + "se"] = void (-4044 + -2 * -2022), console[i(409, 457, 371, "*DI]")](a);
      else throw new _0x15d324(r(991, 1062, "EBp[", 925, 978) + r(937, 993, "*&xp", 1005, 960) + t(1082, 1147, 999, "#h#G") + e(-60, "jF]!", -99, -78) + "d.");
    }
  }
  async [ht(-441, -369, -351, -490, "ZpP^") + Ne(339, 281, "WEwL", 251, 305) + "e"](o) {
    if (this[n(910, "XAyh", 933, 926) + i(820, 888, 919, 834, "$V5z")] = void (-2914 * 3 + -551 + 9293), !o)
      if (t(284, "3)Q0", 348) !== r(-340, -338, -334, ")rWy")) _0x57ff55[i(885, 819, 776, 837, "LAAB") + i(851, 898, 843, 939, "^tP$")](_0x5f15fd);
      else {
        console[i(750, 843, 810, 910, "kB(1")](n(1017, "!w5x", 1017, 931) + e(-356, -380, -449, "LAAB") + i(919, 864, 888, 791, "jF]!") + e(-318, -382, -479, "LAAB") + t(500, "W1NL", 474)), this[e(-343, -291, -355, "lMFM") + "se"] = void (-244 * 34 + 10 * 526 + 132 * 23);
        return;
      }
    function t(a, s, c, d, g) {
      return e0(s, s - 263, c - 271, c - 626);
    }
    function e(a, s, c, d, g) {
      return We(d, s - 268, s - 375);
    }
    function n(a, s, c, d, g) {
      return We(s, s - 423, d - 1641);
    }
    function r(a, s, c, d, g) {
      return $t(a - 341, s - 481, c - -369, d);
    }
    function i(a, s, c, d, g) {
      return e0(g, s - 307, c - 209, s - 1042);
    }
    await this[r(-290, -433, -337, "EUe0") + e(-244, -281, -356, "EUe0") + "se"](o);
  }
  [$t(157, 150, 73, "ZpP^") + $t(88, 23, 29, "1!!]") + "s"](o) {
    function t(n, r, i, a, s) {
      return ht(n - 850, r - 217, i - 444, a - 495, a);
    }
    function e(n, r, i, a, s) {
      return We(i, r - 328, s - 98);
    }
    o[e(-682, -689, "1dMs", -591, -613) + "ch"]((n) => console[t(297, 239, 375, "O1X!")](n));
  }
  [ht(-576, -655, -653, -598, "f#l%") + We("(g(C", -687, -647) + ht(-438, -398, -503, -385, "LAAB")](o) {
    function t(n, r, i, a, s) {
      return We(s, r - 382, n - 1532);
    }
    function e(n, r, i, a, s) {
      return $t(n - 242, r - 484, a - 903, s);
    }
    o[e(920, 827, 862, 907, "(g(C") + "ch"]((n) => console[t(931, 892, 893, 878, "(nx2")](n));
  }
  [e0("M98o", -261, -108, -174) + ht(-518, -484, -522, -528, "65oP")]() {
    function o(e, n, r, i, a) {
      return ht(e - -124, n - 151, r - 286, i - 114, a);
    }
    function t(e, n, r, i, a) {
      return We(a, n - 388, r - 989);
    }
    return window[t(373, 442, 409, 379, "jF]!") + t(187, 305, 235, 241, "(g(C")][o(-585, -590, -489, -633, "M98o") + t(395, 411, 347, 421, "mmn9")];
  }
  [We("qAK#", -579, -674) + ht(-554, -553, -622, -573, "EUe0") + Ne(335, 226, "1!!]", 321, 278)]() {
    var i;
    function o(a, s, c, d, g) {
      return Ne(a - 110, s - 217, c, d - 142, d - 408);
    }
    function t(a, s, c, d, g) {
      return ht(c - 1064, s - 490, c - 125, d - 50, d);
    }
    function e(a, s, c, d, g) {
      return We(d, s - 2, g - 746);
    }
    function n(a, s, c, d, g) {
      return Ne(a - 71, s - 231, g, d - 353, s - 824);
    }
    function r(a, s, c, d, g) {
      return e0(c, s - 192, c - 469, g - 935);
    }
    try {
      if (e(47, 45, 7, "1dMs", -25) !== o(758, 753, "3)Q0", 743, 746)) {
        if (!this[n(1068, 1063, 1153, 1037, "1!!]") + "se"]) {
          if (o(626, 605, "wW0v", 643, 695) !== e(66, -54, 33, "qAK#", -12)) throw new Do(r(841, 848, "jF]!", 800, 767) + o(695, 591, "a@xT", 603, 548) + t(514, 606, 598, "()DX", 683) + e(-33, -15, 8, "q1d[", 63) + ".");
          return;
        }
        if (!this[r(757, 765, "ksbg", 705, 756) + o(749, 697, "j[r&", 660, 708) + "d"][o(609, 722, "W1NL", 671, 592) + e(7, 59, -5, "j[r&", 9) + o(557, 693, "[Fo^", 633, 554) + "ed"]())
          if (r(625, 567, "@KNN", 602, 637) === n(1039, 1062, 1005, 1018, "Ij&v")) {
            const a = _0x33bd77[e(116, 9, 159, "Vd5N", 81)](this[t(544, 563, 589, "jF]!", 523) + "se"]);
            return (i = a == null ? void 0 : a[t(501, 478, 502, "X0nt", 426) + r(840, 774, "WEwL", 742, 742)]) == null ? void 0 : i[t(569, 474, 538, "$V5z", 479) + n(1031, 1112, 1108, 1188, "EBp[")];
          } else throw new Do(o(588, 616, "jF]!", 609, 565) + n(1061, 1016, 1017, 974, "jF]!") + e(33, -24, -74, "%73p", 23) + e(-6, 6, 122, "*DI]", 42) + ".");
        this[o(621, 579, "EUe0", 617, 606) + e(186, 192, 156, "f#l%", 112)] = new Ma(ZI(this[e(67, 100, 187, "kPME", 115) + "se"], this[o(695, 611, "@KNN", 691, 724) + n(1099, 1040, 1044, 955, "wW0v")]())), this[n(1029, 1032, 1062, 1015, "4RFv") + n(1072, 1039, 1034, 1046, "f#l%") + "s"](this[e(188, 257, 183, "X0nt", 160) + r(771, 692, "*&xp", 819, 784)][r(686, 671, "X0nt", 689, 753) + "s"]), this[e(-93, 91, 91, "qAK#", 0) + e(147, 178, 62, "ksbg", 144) + t(569, 626, 613, "jF]!", 606)](this[o(768, 852, "j[r&", 756, 846) + n(1263, 1193, 1180, 1270, "*&xp")][o(702, 624, ")rWy", 711, 784) + r(677, 701, "O1X!", 608, 622)]);
      } else _0x558d8e[o(722, 591, "ZpP^", 642, 629) + "ch"]((a) => _0x109c0f[t(459, 574, 489, "Ij&v", 515)](a));
    } catch (a) {
      if (t(577, 672, 621, "O1X!") === e(129, 16, -41, "65oP", 48)) _0xe8187a[o(808, 717, "nq[y", 724) + "ch"]((s) => _0x27f0ee[n(1082, 1169, 1151, 1180, "j[r&")](s));
      else {
        if (a instanceof Do) r(800, 807, "XAyh", 833, 770) !== r(717, 700, "#wR]", 651, 635) ? this[o(764, 791, "EBp[", 732) + o(789, 833, "X0nt", 738) + "d"] = _0x15e2a5 : a[t(564, 574, 593, "^tP$")]();
        else if (a instanceof Error)
          if (t(577, 698, 654, "1!!]") === r(751, 744, "EUe0", 760, 707)) console[r(679, 592, "Vd5N", 591, 679)](a);
          else {
            _0xe9c547 instanceof _0x3b4ae7 && _0x46dd3e[t(565, 524, 498, "*vz4") + o(725, 608, "*vz4", 687)](_0x2423bb);
            return;
          }
        const s = {};
        s[n(1154, 1071, 1160, 1089, "*DI]") + o(756, 685, "[Fo^", 725)] = !1, s[r(780, 736, "j[r&", 761, 780) + "s"] = [], s[o(746, 747, "M98o", 677) + t(489, 608, 580, "@KNN")] = [], s[r(650, 757, "%73p", 660, 721) + n(1195, 1099, 1090, 1050, "qAK#") + r(872, 883, "1!!]", 869, 788)] = void (1747 * 3 + 303 * -3 + 2 * -2166), s[e(50, 71, -107, "Vd5N", -18)] = function() {
        }, this[e(132, 137, -21, "a@xT", 56) + n(1143, 1096, 1084, 1182, "(g(C")] = new Ma(s);
      }
    }
  }
  [e0("WEwL", -218, -145, -212) + We("mmn9", -532, -596) + Ne(257, 346, "ksbg", 327, 251) + "t"]() {
    function o(t, e, n, r, i) {
      return e0(n, e - 353, n - 392, t - -293);
    }
    return this[o(-602, -697, "%73p") + o(-620, -700, "mmn9")];
  }
  [Ne(296, 176, "M98o", 222, 274) + $t(40, 31, -51, "Vd5N") + Ne(416, 351, ")rWy", 373, 363)]() {
    var i;
    function o(a, s, c, d, g) {
      return We(g, s - 162, a - 1752);
    }
    function t(a, s, c, d, g) {
      return We(g, s - 245, c - 389);
    }
    function e(a, s, c, d, g) {
      return We(d, s - 360, a - 889);
    }
    function n(a, s, c, d, g) {
      return Ne(a - 208, s - 431, d, d - 212, s - 698);
    }
    if (!this[t(-420, -383, -371, -348, "wW0v") + "se"]) {
      if (n(1008, 965, 871, "^tP$") === o(1023, 1085, 1036, 951, "6iwB")) throw new _0x5bb9e9(n(922, 927, 1009, "#h#G") + r(-647, -642, -602, -594, "HoWv") + o(1052, 1029, 1041, 1011, "XAyh") + n(1035, 979, 946, "WEwL") + ".");
      return;
    }
    function r(a, s, c, d, g) {
      return ht(d - -149, s - 60, c - 379, d - 257, g);
    }
    try {
      if (o(1117, 1182, 1187, 1052, "a@xT") === o(1146, 1238, 1142, 1061, "Ij&v")) return _0x46ed41[o(1079, 1010, 1150, 1050, "[Fo^") + o(1154, 1211, 1196, 1131, "f#l%")][o(1074, 1074, 1100, 1168, "#h#G") + n(1059, 999, 1040, "1!!]", 1073)];
      {
        const a = JSON[t(-294, -361, -291, -303, "^tP$")](this[n(1003, 1073, 1002, "*&xp", 1081) + "se"]);
        return (i = a == null ? void 0 : a[t(-229, -109, -194, -133, "LAAB") + e(289, 353, 369, "W1NL", 306)]) == null ? void 0 : i[t(-441, -390, -345, -338, ")rWy") + r(-577, -616, -701, -632, "jF]!")];
      }
    } catch (a) {
      if (e(273, 296, 269, "O1X!") !== o(1174, 1087, 1165, 1195, "%73p")) {
        a instanceof Error && (e(229, 165, 326, "s]Wd") === n(1079, 997, 910, "#wR]") ? (this[n(1083, 1073, 1020, "*&xp") + "se"] = void (-15 + 1 * 15), _0x3e8f7d[r(-575, -550, -680, -647, "O1X!")](_0xc8740c)) : re[n(958, 963, 957, "4RFv") + t(-98, -169, -190, -109, "*DI]")](a));
        return;
      } else return this[e(173, 100, 142, "ksbg") + o(1158, 1113, 1166, 1107, "$V5z")];
    }
  }
}
const zx = class zx extends NI {
  static getInstance() {
    if (!this._instance) {
      const o = new LI();
      this._instance = new zx(o);
    }
    return this._instance;
  }
};
j(zx, "_instance");
let Gr = zx;
const DI = ({ children: x }) => {
  const o = Et(null);
  return Fl(o, St.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ K(Cu, { ref: o, children: x });
}, FI = ({ cameraOptions: x }) => x ? /* @__PURE__ */ K(cu, { target: x.styleTarget, children: /* @__PURE__ */ K(
  Ku,
  {
    licensePath: x.licensePath,
    bramble: Gr.getInstance(),
    wasmDirectoryPath: x.wasmDirectoryPath,
    children: /* @__PURE__ */ K(Pu, { analytics: HI, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ K(
      yu,
      {
        value: SI({
          onError: x.onError
        }),
        children: /* @__PURE__ */ K(Us, { children: /* @__PURE__ */ K(DI, { children: /* @__PURE__ */ K(hI, { ...x }) }) })
      }
    ) })
  }
) }) : null;
bg(FI, "x-dot-face-auto-capture", ["cameraOptions"]);
