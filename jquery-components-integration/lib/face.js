var gr = Object.defineProperty;
var Cg = (o) => {
  throw TypeError(o);
};
var ar = (o, i, t) => i in o ? gr(o, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[i] = t;
var b = (o, i, t) => ar(o, typeof i != "symbol" ? i + "" : i, t), cg = (o, i, t) => i.has(o) || Cg("Cannot " + t);
var w = (o, i, t) => (cg(o, i, "read from private field"), t ? t.call(o) : i.get(o)), P = (o, i, t) => i.has(o) ? Cg("Cannot add the same private member more than once") : i instanceof WeakSet ? i.add(o) : i.set(o, t), H = (o, i, t, e) => (cg(o, i, "write to private field"), e ? e.call(o, t) : i.set(o, t), t);
var w0, J, La, Ja, Te, Bg, Ua, ki, Sn, Gi, Si, Ya, o0 = {}, Oa = [], xr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, qo = Array.isArray;
function De(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function Ha(o) {
  var i = o.parentNode;
  i && i.removeChild(o);
}
function vA(o, i, t) {
  var e, A, n, g = {};
  for (n in i) n == "key" ? e = i[n] : n == "ref" ? A = i[n] : g[n] = i[n];
  if (arguments.length > 1351 * -3 + 221 + 3834 && (g.children = arguments.length > -4303 * 1 + 1 * -3221 + 13 * 579 ? w0.call(arguments, 649 * 5 + 1524 * 5 + 3621 * -3) : t), typeof o == "function" && o.defaultProps != null)
    for (n in o.defaultProps) void (-4 * -1670 + -3184 + -3496) === g[n] && (g[n] = o.defaultProps[n]);
  return Xt(o, g, e, A, null);
}
function Xt(o, i, t, e, A) {
  var n = {};
  n.type = o, n.props = i, n.key = t, n.ref = e, n.__k = null, n.__ = null, n.__b = 0, n.__e = null, n.__d = void 0, n.__c = null, n.constructor = void (2 * 1193 + 1492 + -3878), n.__v = A ?? ++La, n.__i = -(1 * -2253 + 87 * -89 + 9997), n.__u = 0;
  var g = n;
  return A == null && J.vnode != null && J.vnode(g), g;
}
function Ir() {
  var o = {};
  return o.current = null, o;
}
function ie(o) {
  return o.children;
}
function te(o, i) {
  this.props = o, this.context = i;
}
function ot(o, i) {
  if (i == null) return o.__ ? ot(o.__, o.__i + (-3746 + -1 * 423 + -695 * -6)) : null;
  for (var t; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? ot(o) : null;
}
function Ka(o) {
  var i, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, i = -1385 * 3 + 18 * -413 + 11589; i < o.__k.length; i++) if ((t = o.__k[i]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return Ka(o);
  }
}
function Ni(o) {
  (!o.__d && (o.__d = !(-379 + -10 * 365 + 4029)) && Te.push(o) && !xo.__r++ || Bg !== J.debounceRendering) && ((Bg = J.debounceRendering) || Ua)(xo);
}
function xo() {
  var o, i, t, e, A, n, g, a;
  for (Te.sort(ki); o = Te.shift(); ) o.__d && (i = Te.length, e = void 0, n = (A = (t = o).__v).__e, g = [], a = [], t.__P && ((e = De({}, A)).__v = A.__v + (1 * -5163 + 2 * 3442 + 40 * -43), J.vnode && J.vnode(e), Nn(t.__P, e, A, t.__n, t.__P.namespaceURI, 4350 + -4827 * -2 + -13972 & A.__u ? [n] : null, g, n ?? ot(A), !!(-2556 * 1 + 4 * -1565 + 8848 & A.__u), a), e.__v = A.__v, e.__.__k[e.__i] = e, qa(g, e, a), e.__e != n && Ka(e)), Te.length > i && Te.sort(ki));
  xo.__r = -2663 + 418 * -23 + 12277 * 1;
}
function Pa(o, i, t, e, A, n, g, a, x, I, C) {
  var r, Q, c, E, d, l = e && e.__k || Oa, B = i.length;
  for (t.__d = x, rr(t, i, l), x = t.__d, r = -1 * 2083 + -2354 + 4437; r < B; r++) (c = t.__k[r]) != null && typeof c != "boolean" && typeof c != "function" && (Q = -(-147 * 17 + 3674 + -1174) === c.__i ? o0 : l[c.__i] || o0, c.__i = r, Nn(o, c, Q, A, n, g, a, x, I, C), E = c.__e, c.ref && Q.ref != c.ref && (Q.ref && Fn(Q.ref, null, c), C.push(c.ref, c.__c || E, c)), d == null && E != null && (d = E), -4077 * -1 + -64450 + 125909 & c.__u || Q.__k === c.__k ? (x && typeof c.type == "string" && !o.contains(x) && (x = ot(Q)), x = Ta(c, x, o)) : typeof c.type == "function" && void (-1 * 4679 + -6850 + 11529) !== c.__d ? x = c.__d : E && (x = E.nextSibling), c.__d = void (-113 * -83 + 348 * 21 + -16687), c.__u &= -(6 * 50293 + -1 * 299929 + 1 * 194780));
  t.__d = x, t.__e = d;
}
function rr(o, i, t) {
  var e, A, n, g, a, x = i.length, I = t.length, C = I, r = 998 * 2 + 9864 + -20 * 593;
  for (o.__k = [], e = 1 * -2927 + -3032 + -1 * -5959; e < x; e++) g = e + r, (A = o.__k[e] = (A = i[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? Xt(null, A, null, null, null) : qo(A) ? Xt(ie, { children: A }, null, null, null) : void (337 * 27 + -9423 + -54 * -6) === A.constructor && A.__b > 20 * -466 + 4914 + -4406 * -1 ? Xt(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + (-3385 * -1 + -37 * 208 + 4312), a = Cr(A, t, g, C), A.__i = a, n = null, -(9153 + -132 * -2 + -9416) !== a && (C--, (n = t[a]) && (n.__u |= 210296 + 4 * 35477 + 59 * -3748)), n == null || n.__v === null ? (-(655 * -1 + 1385 * 3 + 3499 * -1) == a && r--, typeof A.type != "function" && (A.__u |= 20820 + 1795 * -46 + -4106 * -31)) : a !== g && (a == g - (-5 * 433 + -2309 * -1 + -143) ? r = a - g : a == g + (9512 + -4 * 2215 + 7 * -93) ? r++ : a > g ? C > x - g ? r += a - g : r-- : a < g && r++, a !== e + r && (A.__u |= -46526 + -1 * -53479 + -1 * -58583))) : (n = t[g]) && n.key == null && n.__e && -1 * 9049 + 2 * -2963 + -5 * -2995 == (2 * 27883 + -219905 + 233 * 1267 & n.__u) && (n.__e == o.__d && (o.__d = ot(n)), Fi(n, n, !1), t[g] = null, C--);
  if (C)
    for (e = -3921 + -1282 * -2 + 23 * 59; e < I; e++) (n = t[e]) != null && 15 * 24 + 7119 + -27 * 277 == (131072 & n.__u) && (n.__e == o.__d && (o.__d = ot(n)), Fi(n, n));
}
function Ta(o, i, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = -1 * -9 + 4 * -14 + 47; e && A < e.length; A++) e[A] && (e[A].__ = o, i = Ta(e[A], i, t));
    return i;
  }
  o.__e != i && (t.insertBefore(o.__e, i || null), i = o.__e);
  do
    i = i && i.nextSibling;
  while (i != null && 3467 * 2 + 298 * 29 + -15568 === i.nodeType);
  return i;
}
function we(o, i) {
  return i = i || [], o == null || typeof o == "boolean" || (qo(o) ? o.some(function(t) {
    we(t, i);
  }) : i.push(o)), i;
}
function Cr(o, i, t, e) {
  var A = o.key, n = o.type, g = t - (-5589 + 1441 * -1 + -1 * -7031), a = t + (-9670 + 509 * 19), x = i[t];
  if (x === null || x && A == x.key && n === x.type && -41 * 165 + -1748 + 8513 == (69 * -361 + 26429 + -16 * -8097 & x.__u)) return t;
  if (e > (x != null && !(-82734 + 1217 * -1 + 215023 & x.__u) ? -23 * 13 + -6285 + 6585 : 0)) for (; g >= 2 * -292 + 285 * 13 + 3121 * -1 || a < i.length; ) {
    if (g >= -5776 + -54 * -1 + 5722) {
      if ((x = i[g]) && -10 * -146 + -1 * -8273 + 1 * -9733 == (380940 + -1 * 249868 & x.__u) && A == x.key && n === x.type) return g;
      g--;
    }
    if (a < i.length) {
      if ((x = i[a]) && -1865 * 1 + -3821 + 5686 == (14 * -5879 + -59820 + 273198 & x.__u) && A == x.key && n === x.type) return a;
      a++;
    }
  }
  return -(1 * -9641 + 53 * 173 + 473);
}
function sg(o, i, t) {
  i[-6607 + 339 * 12 + -1 * -2539] === "-" ? o.setProperty(i, t ?? "") : o[i] = t == null ? "" : typeof t != "number" || xr.test(i) ? t : t + "px";
}
function R0(o, i, t, e, A) {
  var n;
  A: if (i === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (i in e) t && i in t || sg(o.style, i, "");
      if (t)
        for (i in t) e && t[i] === e[i] || sg(o.style, i, t[i]);
    }
  else if (i[0] === "o" && i[1 * -8872 + -6903 + 15776 * 1] === "n") n = i !== (i = i.replace(/(PointerCapture)$|Capture$/i, "$1")), i = i.toLowerCase() in o || i === "onFocusOut" || i === "onFocusIn" ? i.toLowerCase().slice(-1889 * 5 + 2836 * 3 + 939 * 1) : i.slice(-35 * 67 + -363 * -17 + -3824), o.l || (o.l = {}), o.l[i + n] = t, t ? e ? t.u = e.u : (t.u = Sn, o.addEventListener(i, n ? Si : Gi, n)) : o.removeEventListener(i, n ? Si : Gi, n);
  else {
    if (A == "http://www.w3.org/2000/svg") i = i.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (i != "width" && i != "height" && i != "href" && i != "list" && i != "form" && i != "tabIndex" && i != "download" && i != "rowSpan" && i != "colSpan" && i != "role" && i != "popover" && i in o) try {
      o[i] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(-2993 * 3 + 2040 + 6940) === t && i[-4009 + -2 * 4316 + 12645] !== "-" ? o.removeAttribute(i) : o.setAttribute(i, i == "popover" && t == 1 ? "" : t));
  }
}
function Qg(o) {
  return function(i) {
    if (this.l) {
      var t = this.l[i.type + o];
      if (i.t == null) i.t = Sn++;
      else if (i.t < t.u) return;
      return t(J.event ? J.event(i) : i);
    }
  };
}
function Nn(o, i, t, e, A, n, g, a, x, I) {
  var C, r, Q, c, E, d, l, B, h, p, G, R, M, N, z, JA, nA = i.type;
  if (void (1391 * 3 + 2 * 248 + -4669) !== i.constructor) return null;
  1195 * 1 + 4108 + -5175 & t.__u && (x = !!(-142 * -2 + 1139 * 2 + -2530 & t.__u), n = [a = i.__e = t.__e]), (C = J.__b) && C(i);
  A: if (typeof nA == "function") try {
    if (B = i.props, h = "prototype" in nA && nA.prototype.render, p = (C = nA.contextType) && e[C.__c], G = C ? p ? p.props.value : C.__ : e, t.__c ? l = (r = i.__c = t.__c).__ = r.__E : (h ? i.__c = r = new nA(B, G) : (i.__c = r = new te(B, G), r.constructor = nA, r.render = Br), p && p.sub(r), r.props = B, r.state || (r.state = {}), r.context = G, r.__n = e, Q = r.__d = !(-14 * 594 + -6554 + 14870), r.__h = [], r._sb = []), h && r.__s == null && (r.__s = r.state), h && nA.getDerivedStateFromProps != null && (r.__s == r.state && (r.__s = De({}, r.__s)), De(r.__s, nA.getDerivedStateFromProps(B, r.__s))), c = r.props, E = r.state, r.__v = i, Q) h && nA.getDerivedStateFromProps == null && r.componentWillMount != null && r.componentWillMount(), h && r.componentDidMount != null && r.__h.push(r.componentDidMount);
    else {
      if (h && nA.getDerivedStateFromProps == null && B !== c && r.componentWillReceiveProps != null && r.componentWillReceiveProps(B, G), !r.__e && (r.shouldComponentUpdate != null && r.shouldComponentUpdate(B, r.__s, G) === !1 || i.__v === t.__v)) {
        for (i.__v !== t.__v && (r.props = B, r.state = r.__s, r.__d = !1), i.__e = t.__e, i.__k = t.__k, i.__k.forEach(function(VA) {
          VA && (VA.__ = i);
        }), R = 1 * 6436 + 3852 + -10288; R < r._sb.length; R++) r.__h.push(r._sb[R]);
        r._sb = [], r.__h.length && g.push(r);
        break A;
      }
      r.componentWillUpdate != null && r.componentWillUpdate(B, r.__s, G), h && r.componentDidUpdate != null && r.__h.push(function() {
        r.componentDidUpdate(c, E, d);
      });
    }
    if (r.context = G, r.props = B, r.__P = o, r.__e = !1, M = J.__r, N = 0, h) {
      for (r.state = r.__s, r.__d = !(1 * 262 + 2326 + -2587), M && M(i), C = r.render(r.props, r.state, r.context), z = 1 * 8419 + 1 * -2841 + 5578 * -1; z < r._sb.length; z++) r.__h.push(r._sb[z]);
      r._sb = [];
    } else do
      r.__d = !(-6 * -1626 + 1257 * 3 + -13526), M && M(i), C = r.render(r.props, r.state, r.context), r.state = r.__s;
    while (r.__d && ++N < 7021 + -1 * -6819 + -3 * 4605);
    r.state = r.__s, r.getChildContext != null && (e = De(De({}, e), r.getChildContext())), h && !Q && r.getSnapshotBeforeUpdate != null && (d = r.getSnapshotBeforeUpdate(c, E)), Pa(o, qo(JA = C != null && C.type === ie && C.key == null ? C.props.children : C) ? JA : [JA], i, t, e, A, n, g, a, x, I), r.base = i.__e, i.__u &= -(9954 + 2 * 2434 + -14661), r.__h.length && g.push(r), l && (r.__E = r.__ = null);
  } catch (VA) {
    i.__v = null, x || n != null ? (i.__e = a, i.__u |= x ? 160 : 461 * 16 + 6437 + -13781, n[n.indexOf(a)] = null) : (i.__e = t.__e, i.__k = t.__k), J.__e(VA, i, t);
  }
  else n == null && i.__v === t.__v ? (i.__k = t.__k, i.__e = t.__e) : i.__e = cr(t.__e, i, t, e, A, n, g, x, I);
  (C = J.diffed) && C(i);
}
function qa(o, i, t) {
  i.__d = void (1179 + -3046 * 1 + 1867);
  for (var e = -1 * -2095 + 1 * -2517 + -211 * -2; e < t.length; e++) Fn(t[e], t[++e], t[++e]);
  J.__c && J.__c(i, o), o.some(function(A) {
    try {
      o = A.__h, A.__h = [], o.some(function(n) {
        n.call(A);
      });
    } catch (n) {
      J.__e(n, A.__v);
    }
  });
}
function cr(o, i, t, e, A, n, g, a, x) {
  var I, C, r, Q, c, E, d, l = t.props, B = i.props, h = i.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), n != null) {
    for (I = -1 * 9883 + -199 * 22 + 14261; I < n.length; I++) if ((c = n[I]) && "setAttribute" in c == !!h && (h ? c.localName === h : 2065 * 2 + -8253 + 4126 === c.nodeType)) {
      o = c, n[I] = null;
      break;
    }
  }
  if (o == null) {
    if (h === null) return document.createTextNode(B);
    o = document.createElementNS(A, h, B.is && B), n = null, a = !(7 * -677 + 4523 * -1 + 59 * 157);
  }
  if (h === null) l === B || a && o.data === B || (o.data = B);
  else {
    if (n = n && w0.call(o.childNodes), l = t.props || o0, !a && n != null)
      for (l = {}, I = 0; I < o.attributes.length; I++) l[(c = o.attributes[I]).name] = c.value;
    for (I in l) if (c = l[I], I != "children") {
      if (I == "dangerouslySetInnerHTML") r = c;
      else if (I !== "key" && !(I in B)) {
        if (I == "value" && "defaultValue" in B || I == "checked" && "defaultChecked" in B) continue;
        R0(o, I, null, c, A);
      }
    }
    for (I in B) c = B[I], I == "children" ? Q = c : I == "dangerouslySetInnerHTML" ? C = c : I == "value" ? E = c : I == "checked" ? d = c : I === "key" || a && typeof c != "function" || l[I] === c || R0(o, I, c, l[I], A);
    if (C) a || r && (C.__html === r.__html || C.__html === o.innerHTML) || (o.innerHTML = C.__html), i.__k = [];
    else if (r && (o.innerHTML = ""), Pa(o, qo(Q) ? Q : [Q], i, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, n, g, n ? n[11 * -902 + -387 + -793 * -13] : t.__k && ot(t, 0), a, x), n != null)
      for (I = n.length; I--; ) n[I] != null && Ha(n[I]);
    a || (I = "value", void (3 * 33 + -2759 + 2660) !== E && (E !== o[I] || h === "progress" && !E || h === "option" && E !== l[I]) && R0(o, I, E, l[I], A), I = "checked", void (-11461 + 73 * 157) !== d && d !== o[I] && R0(o, I, d, l[I], A));
  }
  return o;
}
function Fn(o, i, t) {
  try {
    typeof o == "function" ? o(i) : o.current = i;
  } catch (e) {
    J.__e(e, t);
  }
}
function Fi(o, i, t) {
  var e, A;
  if (J.unmount && J.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || Fn(e, null, i)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (n) {
      J.__e(n, i);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = 1 * -1982 + 211 + 1771; A < e.length; A++) e[A] && Fi(e[A], i, t || typeof o.type != "function");
  t || o.__e == null || Ha(o.__e), o.__c = o.__ = o.__e = o.__d = void (2125 + 5 * -425);
}
function Br(o, i, t) {
  return this.constructor(o, t);
}
function Je(o, i, t) {
  var e, A, n, g;
  J.__ && J.__(o, i), A = (e = typeof t == "function") ? null : t && t.__k || i.__k, n = [], g = [], Nn(i, o = (!e && t || i).__k = vA(ie, null, [o]), A || o0, o0, i.namespaceURI, !e && t ? [t] : A ? null : i.firstChild ? w0.call(i.childNodes) : null, n, !e && t ? t : A ? A.__e : i.firstChild, e, g), qa(n, o, g);
}
function Rn(o, i) {
  Je(o, i, Rn);
}
function Wn(o, i, t) {
  var e, A, n, g, a = De({}, o.props);
  for (n in o.type && o.type.defaultProps && (g = o.type.defaultProps), i) n == "key" ? e = i[n] : n == "ref" ? A = i[n] : a[n] = void (-7 * -509 + 5755 + -9318 * 1) === i[n] && void (-4412 + -2298 * 4 + 13604) !== g ? g[n] : i[n];
  return arguments.length > 1986 + 248 * -8 && (a.children = arguments.length > -7189 + -62 * -116 ? w0.call(arguments, 3984 + -1 * 3982) : t), Xt(o.type, a, e || o.key, A || o.ref, null);
}
function at(o, i) {
  var t = { __c: i = "__cC" + Ya++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, n;
    return this.getChildContext || (A = [], (n = {})[i] = this, this.getChildContext = function() {
      return n;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(g) {
      this.props.value !== g.value && A.some(function(a) {
        a.__e = !0, Ni(a);
      });
    }, this.sub = function(g) {
      A.push(g);
      var a = g.componentWillUnmount;
      g.componentWillUnmount = function() {
        A && A.splice(A.indexOf(g), 1), a && a.call(g);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
w0 = Oa.slice, J = { __e: function(o, i, t, e) {
  for (var A, n, g; i = i.__; ) if ((A = i.__c) && !A.__) try {
    if ((n = A.constructor) && n.getDerivedStateFromError != null && (A.setState(n.getDerivedStateFromError(o)), g = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), g = A.__d), g) return A.__E = A;
  } catch (a) {
    o = a;
  }
  throw o;
} }, La = 361 * -7 + -3 * 1877 + 2 * 4079, Ja = function(o) {
  return o != null && o.constructor == null;
}, te.prototype.setState = function(o, i) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = De({}, this.state), typeof o == "function" && (o = o(De({}, t), this.props)), o && De(t, o), o != null && this.__v && (i && this._sb.push(i), Ni(this));
}, te.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(1614 + -1597 * 1 + -17), o && this.__h.push(o), Ni(this));
}, te.prototype.render = ie, Te = [], Ua = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ki = function(o, i) {
  return o.__v.__b - i.__v.__b;
}, xo.__r = -1 * 8861 + -4827 + 13688, Sn = 7408 + -590 * 8 + -112 * 24, Gi = Qg(!(-3 * -1513 + 2 * -4505 + -13 * -344)), Si = Qg(!(-7887 + -33 * -239)), Ya = -4085 + 5 * 817;
function Mn() {
  return (Mn = Object.assign ? Object.assign.bind() : function(o) {
    for (var i = 1 * -2443 + 92 * -62 + 8148; i < arguments.length; i++) {
      var t = arguments[i];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }).apply(this, arguments);
}
var sr = ["context", "children"];
function Qr(o) {
  this.getChildContext = function() {
    return o.context;
  };
  var i = o.children, t = function(e, A) {
    if (e == null) return {};
    var n, g, a = {}, x = Object.keys(e);
    for (g = 14 * -7 + 7043 + -6945; g < x.length; g++) A.indexOf(n = x[g]) >= 4088 + -1 * 4088 || (a[n] = e[n]);
    return a;
  }(o, sr);
  return Wn(i, t);
}
function Er() {
  var o = {};
  o.detail = {}, o.bubbles = !(815 * -1 + 7754 * 1 + -6939), o.cancelable = !(2 * 4223 + 5707 + -14153);
  var i = new CustomEvent("_preact", o);
  this.dispatchEvent(i), this._vdom = vA(Qr, Mn({}, this._props, { context: i.detail.context }), function t(e, A) {
    if (-7508 + 7511 * 1 === e.nodeType) return e.data;
    if (e.nodeType !== 1) return null;
    var n = [], g = {}, a = 0, x = e.attributes, I = e.childNodes;
    for (a = x.length; a--; ) x[a].name !== "slot" && (g[x[a].name] = x[a].value, g[ja(x[a].name)] = x[a].value);
    for (a = I.length; a--; ) {
      var C = t(I[a], null), r = I[a].slot;
      r ? g[r] = vA(Eg, { name: r }, C) : n[a] = C;
    }
    var Q = A ? vA(Eg, null, n) : n;
    return vA(A || e.nodeName.toLowerCase(), g, Q);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Rn : Je)(this._vdom, this._root);
}
function ja(o) {
  return o.replace(/-(\w)/g, function(i, t) {
    return t ? t.toUpperCase() : "";
  });
}
function dr(o, i, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void (565 + 5 * -113), e[ja(o)] = t, this._vdom = Wn(this._vdom, e), Je(this._vdom, this._root);
  }
}
function lr() {
  Je(this._vdom = null, this._root);
}
function Eg(o, i) {
  var t = this;
  return vA("slot", Mn({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = i;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function ur(o, i, t, e) {
  function A() {
    var n = Reflect.construct(HTMLElement, [], A);
    return n._vdomComponent = o, n._root = n, n;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Er, A.prototype.attributeChangedCallback = dr, A.prototype.disconnectedCallback = lr, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(n) {
    Object.defineProperty(A.prototype, n, { get: function() {
      return this._vdom.props[n];
    }, set: function(g) {
      this._vdom ? this.attributeChangedCallback(n, null, g) : (this._props || (this._props = {}), this._props[n] = g, this.connectedCallback());
      var a = typeof g;
      g != null && a !== "string" && a !== "boolean" && a !== "number" || this.setAttribute(n, g);
    } });
  }), customElements.define(i, A);
}
var hr = 2 * 4637 + -8 * -57 + 2 * -4865;
function y(o, i, t, e, A, n) {
  i || (i = {});
  var g, a, x = i;
  if ("ref" in x)
    for (a in x = {}, i) a == "ref" ? g = i[a] : x[a] = i[a];
  var I = {};
  I.type = o, I.props = x, I.key = t, I.ref = g, I.__k = null, I.__ = null, I.__b = 0, I.__e = null, I.__d = void (-707 * -9 + 1 * -4759 + -1604), I.__c = null, I.constructor = void (1 * -1058 + 19 * -161 + 4117), I.__v = --hr, I.__i = -(-1 * 2026 + -69 * 23 + 3614), I.__u = 0, I.__source = A, I.__self = n;
  var C = I;
  if (typeof o == "function" && (g = o.defaultProps))
    for (a in g) void (-2767 * -1 + 106 * 78 + -11035) === x[a] && (x[a] = g[a]);
  return J.vnode && J.vnode(C), C;
}
var PA = function() {
  return PA = Object.assign || function(i) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n]);
    }
    return i;
  }, PA.apply(this, arguments);
};
function yt(o, i, t) {
  if (t || arguments.length === 2) for (var e = 0, A = i.length, n; e < A; e++)
    (n || !(e in i)) && (n || (n = Array.prototype.slice.call(i, 0, e)), n[e] = i[e]);
  return o.concat(n || Array.prototype.slice.call(i));
}
function fr(o) {
  var i = Object.create(null);
  return function(t) {
    return i[t] === void 0 && (i[t] = o(t)), i[t];
  };
}
var pr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yr = fr(function(o) {
  return pr.test(o) || o.charCodeAt(-2106 * -1 + 7641 + 3 * -3249) === -2 * 1132 + 6997 + -4622 && o.charCodeAt(577 * -1 + 1 * 6054 + -5476) === -7609 + -249 * -31 && o.charCodeAt(-586 * -4 + -34 * -109 + -6048) < 1 * 8573 + 8266 + 1 * -16748;
}), Ue, _, Ii, dg, Dt = 1393 * 1 + 54 * -149 + 6653, Za = [], $ = J, lg = $.__b, ug = $.__r, hg = $.diffed, fg = $.__c, pg = $.unmount, yg = $.__;
function Nt(o, i) {
  $.__h && $.__h(_, o, Dt || i), Dt = -8227 * -1 + -5 * 412 + -6167 * 1;
  var t = {};
  t.__ = [], t.__h = [];
  var e = _.__H || (_.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function NA(o) {
  return Dt = 950 * 1 + -1847 * -4 + -8337, vn(Xa, o);
}
function vn(o, i, t) {
  var e = Nt(Ue++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(i) : Xa(void (8192 + -9983 * -1 + -727 * 25), i), function(a) {
    var x = e.__N ? e.__N[0] : e.__[0], I = e.t(x, a);
    x !== I && (e.__N = [I, e.__[4937 + 4 * -1234]], e.__c.setState({}));
  }], e.__c = _, !_.u)) {
    var A = function(a, x, I) {
      if (!e.__c.__H) return !0;
      var C = e.__c.__H.__.filter(function(Q) {
        return !!Q.__c;
      });
      if (C.every(function(Q) {
        return !Q.__N;
      })) return !n || n.call(this, a, x, I);
      var r = !(-31 * 113 + 950 + 1277 * 2);
      return C.forEach(function(Q) {
        if (Q.__N) {
          var c = Q.__[0];
          Q.__ = Q.__N, Q.__N = void 0, c !== Q.__[0] && (r = !0);
        }
      }), !(!r && e.__c.props === a) && (!n || n.call(this, a, x, I));
    };
    _.u = !(3099 + 1 * -3099);
    var n = _.shouldComponentUpdate, g = _.componentWillUpdate;
    _.componentWillUpdate = function(a, x, I) {
      if (this.__e) {
        var C = n;
        n = void (14 * -347 + -1 * -268 + -3 * -1530), A(a, x, I), n = C;
      }
      g && g.call(this, a, x, I);
    }, _.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function X(o, i) {
  var t = Nt(Ue++, 3);
  !$.__s && Ln(t.__H, i) && (t.__ = o, t.i = i, _.__H.__h.push(t));
}
function Ft(o, i) {
  var t = Nt(Ue++, 4);
  !$.__s && Ln(t.__H, i) && (t.__ = o, t.i = i, _.__h.push(t));
}
function jA(o) {
  return Dt = 5, LA(function() {
    var i = {};
    return i.current = o, i;
  }, []);
}
function Va(o, i, t) {
  Dt = 8173 + 8167 * -1, Ft(function() {
    return typeof o == "function" ? (o(i()), function() {
      return o(null);
    }) : o ? (o.current = i(), function() {
      return o.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(o));
}
function LA(o, i) {
  var t = Nt(Ue++, 7);
  return Ln(t.__H, i) && (t.__ = o(), t.__H = i, t.__h = o), t.__;
}
function be(o, i) {
  return Dt = -1069 + 25 * -131 + 4352, LA(function() {
    return o;
  }, i);
}
function Ge(o) {
  var i = _.context[o.__c], t = Nt(Ue++, 6251 + -9721 * -1 + -15963 * 1);
  return t.c = o, i ? (t.__ == null && (t.__ = !(-1 * -587 + -377 * 6 + 1675), i.sub(_)), i.props.value) : o.__;
}
function Io(o, i) {
  $.useDebugValue && $.useDebugValue(i ? i(o) : o);
}
function _a() {
  var o = Nt(Ue++, 11);
  if (!o.__) {
    for (var i = _.__v; i !== null && !i.__m && i.__ !== null; ) i = i.__;
    var t = i.__m || (i.__m = [13 * -67 + -2557 + 3428 * 1, -17554 + 134 * 131]);
    o.__ = "P" + t[-2073 + -2 * -3595 + -7 * 731] + "-" + t[-6155 + -55 * 107 + 12041]++;
  }
  return o.__;
}
function Dr() {
  for (var o; o = Za.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(H0), o.__H.__h.forEach(Ri), o.__H.__h = [];
  } catch (i) {
    o.__H.__h = [], $.__e(i, o.__v);
  }
}
$.__b = function(o) {
  _ = null, lg && lg(o);
}, $.__ = function(o, i) {
  o && i.__k && i.__k.__m && (o.__m = i.__k.__m), yg && yg(o, i);
}, $.__r = function(o) {
  ug && ug(o), Ue = 8062 + -6217 * -1 + -109 * 131;
  var i = (_ = o.__c).__H;
  i && (Ii === _ ? (i.__h = [], _.__h = [], i.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-1 * 505 + 9398 + -8893);
  })) : (i.__h.forEach(H0), i.__h.forEach(Ri), i.__h = [], Ue = -3156 + -289 * -2 + 2578)), Ii = _;
}, $.diffed = function(o) {
  hg && hg(o);
  var i = o.__c;
  i && i.__H && (i.__H.__h.length && (-4008 + -4023 * -1 + -14 !== Za.push(i) && dg === $.requestAnimationFrame || ((dg = $.requestAnimationFrame) || mr)(Dr)), i.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-5850 + 50 * 117);
  })), Ii = _ = null;
}, $.__c = function(o, i) {
  i.some(function(t) {
    try {
      t.__h.forEach(H0), t.__h = t.__h.filter(function(e) {
        return !e.__ || Ri(e);
      });
    } catch (e) {
      i.some(function(A) {
        A.__h && (A.__h = []);
      }), i = [], $.__e(e, t.__v);
    }
  }), fg && fg(o, i);
}, $.unmount = function(o) {
  pg && pg(o);
  var i, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      H0(e);
    } catch (A) {
      i = A;
    }
  }), t.__H = void (-5010 + -1 * -5640 + 3 * -210), i && $.__e(i, t.__v));
};
var Dg = typeof requestAnimationFrame == "function";
function mr(o) {
  var i, t = function() {
    clearTimeout(e), Dg && cancelAnimationFrame(i), setTimeout(o);
  }, e = setTimeout(t, 100);
  Dg && (i = requestAnimationFrame(t));
}
function H0(o) {
  var i = _, t = o.__c;
  typeof t == "function" && (o.__c = void (-2717 + -209 * -13), t()), _ = i;
}
function Ri(o) {
  var i = _;
  o.__c = o.__(), _ = i;
}
function Ln(o, i) {
  return !o || o.length !== i.length || i.some(function(t, e) {
    return t !== o[e];
  });
}
function Xa(o, i) {
  return typeof i == "function" ? i(o) : i;
}
function za(o, i) {
  for (var t in i) o[t] = i[t];
  return o;
}
function Wi(o, i) {
  for (var t in o) if (t !== "__source" && !(t in i)) return !(-1175 * 2 + -2 * 441 + 3232);
  for (var e in i) if (e !== "__source" && o[e] !== i[e]) return !(-1 * -3302 + 514 * -19 + -64 * -101);
  return !(-449 * -5 + -8 * 100 + -1444);
}
function Mi(o, i) {
  this.props = o, this.context = i;
}
function wr(o, i) {
  function t(A) {
    var n = this.props.ref, g = n == A.ref;
    return !g && n && (n.call ? n(null) : n.current = null), i ? !i(this.props, A) || !g : Wi(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, vA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(4082 * -2 + 1776 + 3194 * 2), e.__f = !(-5485 * 1 + 7961 + 619 * -4), e;
}
(Mi.prototype = new te()).isPureReactComponent = !(16177 + -2311 * 7), Mi.prototype.shouldComponentUpdate = function(o, i) {
  return Wi(this.props, o) || Wi(this.state, i);
};
var mg = J.__b;
J.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), mg && mg(o);
};
var br = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 12777 + -8866 * 1;
function $a(o) {
  function i(t) {
    var e = za({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return i.$$typeof = br, i.render = i, i.prototype.isReactComponent = i.__f = !0, i.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", i;
}
var wg = function(o, i) {
  return o == null ? null : we(we(o).map(i));
}, kr = { map: wg, forEach: wg, count: function(o) {
  return o ? we(o).length : 9028 + -827 * 3 + -6547 * 1;
}, only: function(o) {
  var i = we(o);
  if (17 + 2 * -8 !== i.length) throw "Children.only";
  return i[-93 * 69 + 9718 + 1 * -3301];
}, toArray: we }, Gr = J.__e;
J.__e = function(o, i, t, e) {
  if (o.then) {
    for (var A, n = i; n = n.__; ) if ((A = n.__c) && A.__c) return i.__e == null && (i.__e = t.__e, i.__k = t.__k), A.__c(o, i);
  }
  Gr(o, i, t, e);
};
var bg = J.unmount;
function Ax(o, i, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = za({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = i), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return Ax(e, i, t);
  })), o;
}
function ex(o, i, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return ex(e, i, t);
  }), o.__c && o.__c.__P === i && (o.__e && t.appendChild(o.__e), o.__c.__e = !(4527 + 4 * 402 + -409 * 15), o.__c.__P = t)), o;
}
function K0() {
  this.__u = 6383 + -1655 * 1 + -3 * 1576, this.t = null, this.__b = null;
}
function tx(o) {
  var i = o.__.__c;
  return i && i.__a && i.__a(o);
}
function Sr(o) {
  var i, t, e;
  function A(n) {
    if (i || (i = o()).then(function(g) {
      t = g.default || g;
    }, function(g) {
      e = g;
    }), e) throw e;
    if (!t) throw i;
    return vA(t, n);
  }
  return A.displayName = "Lazy", A.__f = !(-17 * -138 + 1 * 2441 + -1 * 4787), A;
}
function Ht() {
  this.u = null, this.o = null;
}
J.unmount = function(o) {
  var i = o.__c;
  i && i.__R && i.__R(), i && -2 * 4229 + -5 * 1606 + -2 * -8260 & o.__u && (o.type = null), bg && bg(o);
}, (K0.prototype = new te()).__c = function(o, i) {
  var t = i.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = tx(e.__v), n = !(-8088 + -1 * -8089), g = function() {
    n || (n = !(1711 * -2 + 34 * -86 + -334 * -19), t.__R = null, A ? A(a) : a());
  };
  t.__R = g;
  var a = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var x = e.state.__a;
        e.__v.__k[-1 * 6505 + -3902 * 2 + 14309] = ex(x, x.__c.__P, x.__c.__O);
      }
      var I;
      for (e.setState({ __a: e.__b = null }); I = e.t.pop(); ) I.forceUpdate();
    }
  };
  e.__u++ || 2271 + -614 * 2 + 1011 * -1 & i.__u || e.setState({ __a: e.__b = e.__v.__k[4955 + -224 * -20 + 111 * -85] }), o.then(g, g);
}, K0.prototype.componentWillUnmount = function() {
  this.t = [];
}, K0.prototype.render = function(o, i) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-8315 + -2 * 1791 + 11897].__c;
      this.__v.__k[-4327 + 4723 * 2 + -5119] = Ax(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = i.__a && vA(ie, null, o.fallback);
  return A && (A.__u &= -(-19 * -516 + -7 * -761 + -15098)), [vA(ie, null, i.__a ? null : o.children), A];
};
var kg = function(o, i, t) {
  if (++t[-7829 * -1 + 81 * -38 + 950 * -5] === t[-17 * -381 + -11 * -424 + -1 * 11141] && o.o.delete(i), o.props.revealOrder && (o.props.revealOrder[-5739 + 671 * 2 + 4397] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > -1 * 8583 + 2554 * 1 + 6032; ) t.pop()();
    if (t[-41 * -10 + 9682 * 1 + 1 * -10091] < t[1673 * -5 + -179 * 17 + 11408]) break;
    o.u = t = t[1424 * -2 + -676 + 3526];
  }
};
function Nr(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function Fr(o) {
  var i = this, t = o.i;
  i.componentWillUnmount = function() {
    Je(null, i.l), i.l = null, i.i = null;
  }, i.i && i.i !== t && i.componentWillUnmount(), i.l || (i.i = t, i.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(2123 * -2 + -8718 + 12964);
  }, appendChild: function(e) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), i.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 2154 * 1 + 1216 + -3369, 236 * 8 + -2 * -2045 + -43 * 139), i.i.removeChild(e);
  } }), Je(vA(Nr, { context: i.context }, o.__v), i.l);
}
function Rr(o, i) {
  var t = {};
  t.__v = o, t.i = i;
  var e = vA(Fr, t);
  return e.containerInfo = i, e;
}
(Ht.prototype = new te()).__a = function(o) {
  var i = this, t = tx(i.__v), e = i.o.get(o);
  return e[-3 * 1933 + -199 * -21 + 1620]++, function(A) {
    var n = function() {
      i.props.revealOrder ? (e.push(A), kg(i, o, e)) : A();
    };
    t ? t(n) : n();
  };
}, Ht.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var i = we(o.children);
  o.revealOrder && o.revealOrder[-1 * 2609 + 3788 + 9 * -131] === "b" && i.reverse();
  for (var t = i.length; t--; ) this.o.set(i[t], this.u = [-1 * 7387 + -380 + 7768, -7886 + -1 * -7886, this.u]);
  return o.children;
}, Ht.prototype.componentDidUpdate = Ht.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(i, t) {
    kg(o, t, i);
  });
};
var ox = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 83952 + -74714 * 1 + 50865, Wr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Mr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, vr = /[A-Z0-9]/g, Lr = typeof document < "u", Jr = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function Ur(o, i, t) {
  return i.__k == null && (i.textContent = ""), Je(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
function Yr(o, i, t) {
  return Rn(o, i), typeof t == "function" && t(), o ? o.__c : null;
}
te.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(te.prototype, o, { configurable: !0, get: function() {
    return this["UNSAFE_" + o];
  }, set: function(i) {
    var t = {};
    t.configurable = !(-7 * 93 + 337 * 2 + -23), t.writable = !(-1 * 4078 + -4 * 263 + -2565 * -2), t.value = i, Object.defineProperty(this, o, t);
  } });
});
var Gg = J.event;
function Or() {
}
function Hr() {
  return this.cancelBubble;
}
function Kr() {
  return this.defaultPrevented;
}
J.event = function(o) {
  return Gg && (o = Gg(o)), o.persist = Or, o.isPropagationStopped = Hr, o.isDefaultPrevented = Kr, o.nativeEvent = o;
};
var P0 = {};
P0.enumerable = !(1 * -748 + -5437 + 6186), P0.configurable = !0, P0.get = function() {
  return this.class;
};
var Jn, Pr = P0, Sg = J.vnode;
J.vnode = function(o) {
  typeof o.type == "string" && function(i) {
    var t = i.props, e = i.type, A = {};
    for (var n in t) {
      var g = t[n];
      if (!(n === "value" && "defaultValue" in t && g == null || Lr && n === "children" && e === "noscript" || n === "class" || n === "className")) {
        var a = n.toLowerCase();
        n === "defaultValue" && "value" in t && t.value == null ? n = "value" : n === "download" && !(721 * -9 + 3 * 1504 + 1977) === g ? g = "" : a === "translate" && g === "no" ? g = !(247 * 17 + -6 * -918 + -9706) : a === "ondoubleclick" ? n = "ondblclick" : a !== "onchange" || e !== "input" && e !== "textarea" || Jr(t.type) ? a === "onfocus" ? n = "onfocusin" : a === "onblur" ? n = "onfocusout" : Mr.test(n) ? n = a : -(-79 * 28 + -1 * -4900 + -2687) === e.indexOf("-") && Wr.test(n) ? n = n.replace(vr, "-$&").toLowerCase() : g === null && (g = void (12242 + 1 * -12242)) : a = n = "oninput", a === "oninput" && A[n = a] && (n = "oninputCapture"), A[n] = g;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = we(t.children).forEach(function(x) {
      x.props.selected = -(-9565 + -9566 * -1) != A.value.indexOf(x.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = we(t.children).forEach(function(x) {
      x.props.selected = A.multiple ? -(-60 * -78 + 3603 + -202 * 41) != A.defaultValue.indexOf(x.props.value) : A.defaultValue == x.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", Pr)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), i.props = A;
  }(o), o.$$typeof = ox, Sg && Sg(o);
};
var Ng = J.__r;
J.__r = function(o) {
  Ng && Ng(o), Jn = o.__c;
};
var Fg = J.diffed;
J.diffed = function(o) {
  Fg && Fg(o);
  var i = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in i && i.value !== t.value && (t.value = i.value == null ? "" : i.value), Jn = null;
};
var uA = {};
uA.readContext = function(o) {
  return Jn.__n[o.__c].props.value;
}, uA.useCallback = be, uA.useContext = Ge, uA.useDebugValue = Io, uA.useDeferredValue = ax, uA.useEffect = X, uA.useId = _a, uA.useImperativeHandle = Va, uA.useInsertionEffect = Ix, uA.useLayoutEffect = Ft, uA.useMemo = LA, uA.useReducer = vn, uA.useRef = jA, uA.useState = NA, uA.useSyncExternalStore = rx, uA.useTransition = xx;
var ix = {};
ix.current = uA;
var nx = {};
nx.ReactCurrentDispatcher = ix;
var Tr = nx;
function qr(o) {
  return vA.bind(null, o);
}
function jo(o) {
  return !!o && o.$$typeof === ox;
}
function jr(o) {
  return jo(o) && o.type === ie;
}
function Zr(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function Vr(o) {
  return jo(o) ? Wn.apply(null, arguments) : o;
}
function _r(o) {
  return !!o.__k && (Je(null, o), !(2302 + 1 * 4175 + -6477));
}
function Xr(o) {
  return o && (o.base || -2229 * 2 + -8336 + -15 * -853 === o.nodeType && o) || null;
}
var zr = function(o, i) {
  return o(i);
}, $r = function(o, i) {
  return o(i);
}, AC = ie;
function gx(o) {
  o();
}
function ax(o) {
  return o;
}
function xx() {
  return [!(1 * -8226 + 1477 * 1 + 6750), gx];
}
var Ix = Ft, eC = jo;
function rx(o, i) {
  var t = i(), e = NA({ h: { __: t, v: i } }), A = e[-55 * -45 + -472 + -1 * 2003].h, n = e[3 * -363 + 59 * -95 + 6695];
  return Ft(function() {
    A.__ = t, A.v = i, ri(A) && n({ h: A });
  }, [o, t, i]), X(function() {
    return ri(A) && n({ h: A }), o(function() {
      ri(A) && n({ h: A });
    });
  }, [o]), t;
}
function ri(o) {
  var i, t, e = o.v, A = o.__;
  try {
    var n = e();
    return !((i = A) === (t = n) && (-5898 + -18 * 442 + -2309 * -6 !== i || (-1244 + 166 * 38 + -1 * 5063) / i == (-8507 + -12 * -709) / t) || i != i && t != t);
  } catch {
    return !(3166 * 3 + 2208 + -5853 * 2);
  }
}
var v = {};
v.useState = NA, v.useId = _a, v.useReducer = vn, v.useEffect = X, v.useLayoutEffect = Ft, v.useInsertionEffect = Ix, v.useTransition = xx, v.useDeferredValue = ax, v.useSyncExternalStore = rx, v.startTransition = gx, v.useRef = jA, v.useImperativeHandle = Va, v.useMemo = LA, v.useCallback = be, v.useContext = Ge, v.useDebugValue = Io, v.version = "17.0.2", v.Children = kr, v.render = Ur, v.hydrate = Yr, v.unmountComponentAtNode = _r, v.createPortal = Rr, v.createElement = vA, v.createContext = at, v.createFactory = qr, v.cloneElement = Vr, v.createRef = Ir, v.Fragment = ie, v.isValidElement = jo, v.isElement = eC, v.isFragment = jr, v.isMemo = Zr, v.findDOMNode = Xr, v.Component = te, v.PureComponent = Mi, v.memo = wr, v.forwardRef = $a, v.flushSync = $r, v.unstable_batchedUpdates = zr, v.StrictMode = AC, v.Suspense = K0, v.SuspenseList = Ht, v.lazy = Sr, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tr;
var it = v, tC = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oC(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function iC(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function nC(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") && Object.keys(o).length === 1 ? o.default : o;
}
function gC(o) {
  if (o.__esModule) return o;
  var i = o.default;
  if (typeof i == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    t.prototype = i.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(o).forEach(function(e) {
    var A = Object.getOwnPropertyDescriptor(o, e);
    Object.defineProperty(t, e, A.get ? A : {
      enumerable: !0,
      get: function() {
        return o[e];
      }
    });
  }), t;
}
const aC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: tC,
  getAugmentedNamespace: gC,
  getDefaultExportFromCjs: oC,
  getDefaultExportFromNamespaceIfNotNamed: nC,
  getDefaultExportFromNamespaceIfPresent: iC
}, Symbol.toStringTag, { value: "Module" }));
var xC = function(i, t, e, A) {
  var n = e ? e.call(A, i, t) : void 0;
  if (n !== void (-6773 * -1 + 5799 + 28 * -449)) return !!n;
  if (i === t) return !0;
  if (typeof i != "object" || !i || typeof t != "object" || !t) return !1;
  var g = Object.keys(i), a = Object.keys(t);
  if (g.length !== a.length) return !1;
  for (var x = Object.prototype.hasOwnProperty.bind(t), I = 346 * -13 + -1 * 5564 + -1118 * -9; I < g.length; I++) {
    var C = g[I];
    if (!x(C)) return !1;
    var r = i[C], Q = t[C];
    if (n = e ? e.call(A, r, Q, C) : void 0, n === !1 || n === void (-59 * -118 + 5772 + -12734) && r !== Q) return !1;
  }
  return !0;
};
const IC = aC.getDefaultExportFromCjs(xC);
var V = "-ms-", zt = "-moz-", j = "-webkit-", Cx = "comm", Zo = "rule", Un = "decl", rC = "@import", cx = "@keyframes", CC = "@layer", Bx = Math.abs, Yn = String.fromCharCode, vi = Object.assign;
function cC(o, i) {
  return CA(o, 7 * -547 + 5454 + 13 * -125) ^ 135 * -27 + 1284 + 2 * 1203 ? (((i << -4261 + -1 * -4701 + -438 ^ CA(o, 9833 * 1 + 3 * 3155 + 2 * -9649)) << 1021 + -13 * 499 + -1 * -5468 ^ CA(o, -4798 * -1 + -248 * 37 + 4379 * 1)) << -3634 + -3 * -475 + 201 * 11 ^ CA(o, 2)) << -3293 + -3269 * -1 + 1 * 26 ^ CA(o, -445 * 13 + 8092 + -2304) : 0;
}
function sx(o) {
  return o.trim();
}
function he(o, i) {
  return (o = i.exec(o)) ? o[1 * 802 + -5837 + 5035] : o;
}
function U(o, i, t) {
  return o.replace(i, t);
}
function T0(o, i, t) {
  return o.indexOf(i, t);
}
function CA(o, i) {
  return o.charCodeAt(i) | 38 * 246 + 5050 * 1 + -14398;
}
function mt(o, i, t) {
  return o.slice(i, t);
}
function se(o) {
  return o.length;
}
function Qx(o) {
  return o.length;
}
function Kt(o, i) {
  return i.push(o), o;
}
function BC(o, i) {
  return o.map(i).join("");
}
function Rg(o, i) {
  return o.filter(function(t) {
    return !he(t, i);
  });
}
var Vo = 1, wt = -1047 * -3 + -2645 + -495, Ex = -3521 + -3931 * -1 + -410, ne = 1 * 7177 + 7790 + 14967 * -1, gA = -9762 + 8957 * 1 + 805, Rt = "";
function _o(o, i, t, e, A, n, g, a) {
  var x = {};
  return x.value = o, x.root = i, x.parent = t, x.type = e, x.props = A, x.children = n, x.line = Vo, x.column = wt, x.length = g, x.return = "", x.siblings = a, x;
}
function Re(o, i) {
  return vi(_o("", null, null, "", null, null, 1156 + -58 * -13 + -955 * 2, o.siblings), o, { length: -o.length }, i);
}
function rt(o) {
  for (; o.root; ) o = Re(o.root, { children: [o] });
  Kt(o, o.siblings);
}
function sC() {
  return gA;
}
function QC() {
  return gA = ne > 1 * 329 + -7944 * -1 + -8273 ? CA(Rt, --ne) : 1 * -595 + -7017 + 2 * 3806, wt--, gA === 6 * 359 + -7205 * -1 + 1 * -9349 && (wt = 1 * -8996 + -9414 + 18411, Vo--), gA;
}
function Ie() {
  return gA = ne < Ex ? CA(Rt, ne++) : -1 * -397 + -6194 * 1 + 5797, wt++, gA === 97 * 33 + -4142 * 2 + 1 * 5093 && (wt = 7417 * -1 + 2 * 1009 + -6 * -900, Vo++), gA;
}
function et() {
  return CA(Rt, ne);
}
function q0() {
  return ne;
}
function Xo(o, i) {
  return mt(Rt, o, i);
}
function Li(o) {
  switch (o) {
    case -7868 + 1 * 8171 + -303:
    case 4620 + -17 * 7 + -4492:
    case 67 * 2 + -1507 * 5 + 7411 * 1:
    case 1 * -8785 + 5108 + 1230 * 3:
    case -1 * 4693 + -5744 + 10469:
      return -19 * -152 + 5040 + -7923;
    case -71 * -41 + 7 * -883 + 3303 * 1:
    case 9176 + 2285 * -1 + 3424 * -2:
    case -968 * 1 + -9805 + 10817:
    case 9992 + 4 * -2087 + 1597 * -1:
    case 24 * -239 + -1 * -3989 + 1809:
    case 64:
    case 7147 + 1097 * -2 + -4827:
    case 8720 + 9227 * -1 + -1 * -566:
    case -763 + -333 * -2 + 5 * 44:
    case 4935 + 37 * -130:
      return -43 * -107 + -298 * -26 + -3 * 4115;
    case 58:
      return -3826 * 1 + 4857 + -1028;
    case -7338 + -101 * 33 + -10705 * -1:
    case -3635 * -2 + -85 * 79 + -516:
    case 131 * 29 + 2445 + -6204:
    case 9129 + -8986 * 1 + -26 * 2:
      return 1 * 6911 + -7440 + 531;
    case -9995 + -1 * 7233 + 17269:
    case -5376 + 6735 * 1 + 2 * -633:
      return -1489 * 1 + 1 * -8590 + -35 * -288;
  }
  return 1 * 269 + 9400 + 293 * -33;
}
function EC(o) {
  return Vo = wt = 1, Ex = se(Rt = o), ne = -1 * 3338 + -720 + 4058, [];
}
function dC(o) {
  return Rt = "", o;
}
function Ci(o) {
  return sx(Xo(ne - (13 * -46 + -1098 + 1697), Ji(o === 7452 + 433 * -17 ? o + (-3830 * -1 + 3730 + -7558) : o === 6617 + -1 * 2879 + -3698 ? o + 1 : o)));
}
function lC(o) {
  for (; (gA = et()) && gA < 2659 + -13 * 202; ) Ie();
  return Li(o) > -12133 + -809 * -15 || Li(gA) > -5697 + -2 * -2313 + -1074 * -1 ? "" : " ";
}
function uC(o, i) {
  for (; --i && Ie() && !(gA < 48 || gA > 102 || gA > 971 * 9 + -4937 + -107 * 35 && gA < -9223 + -2 * 1283 + 11854 || gA > 122 * 13 + -2666 + 1150 && gA < -8832 + -494 * -1 + 8435 * 1); ) ;
  return Xo(o, q0() + (i < 6 && et() == -2850 + 1 * -6459 + 9341 && Ie() == 1 * 9872 + -3128 + -6712));
}
function Ji(o) {
  for (; Ie(); ) switch (gA) {
    case o:
      return ne;
    case 7 * 382 + 327 + -2967:
    case -15 * -81 + 9952 + 2 * -5564:
      o !== -9130 + 1 * -7528 + -1391 * -12 && o !== 39 && Ji(gA);
      break;
    case -8374 + 1838 * 5 + -776:
      o === 5685 + 1 * 3343 + 817 * -11 && Ji(o);
      break;
    case 92:
      Ie();
      break;
  }
  return ne;
}
function hC(o, i) {
  for (; Ie() && o + gA !== 1 * -8347 + 2375 * -2 + 13144 + (-11731 + -199 * -59); ) if (o + gA === -95 * -9 + 1 * 3314 + 4127 * -1 + (-143 * 14 + 7686 + 2821 * -2) && et() === 25 * 181 + 2859 * -1 + -1619) break;
  return "/*" + Xo(i, ne - (269 * -1 + 4 * -812 + 1 * 3518)) + "*" + Yn(o === -5828 + -1 * -5875 ? o : Ie());
}
function fC(o) {
  for (; !Li(et()); ) Ie();
  return Xo(o, ne);
}
function pC(o) {
  return dC(j0("", null, null, null, [""], o = EC(o), -15960 + 42 * 380, [2248 * -3 + -1825 + 8569], o));
}
function j0(o, i, t, e, A, n, g, a, x) {
  for (var I = 0, C = 8326 + -8183 * 1 + -143, r = g, Q = 14 * -64 + -5166 + 6062, c = 9 * -269 + 65 * 41 + 2 * -122, E = 0, d = 5877 + -1 * 1901 + -1325 * 3, l = 1, B = -8075 + 673 * 12, h = 5303 + 267 * -21 + 19 * 16, p = "", G = A, R = n, M = e, N = p; l; ) switch (E = h, h = Ie()) {
    case -67 * -15 + 3905 + 2 * -2435:
      if (E != -3107 + 6199 * -1 + 9414 && CA(N, r - (1 * -1013 + -420 * -7 + -1926)) == -1 * 8765 + -9422 + 1 * 18245) {
        T0(N += U(Ci(h), "&", "&\f"), "&\f", Bx(I ? a[I - (-89 * -41 + 47 * 88 + -7 * 1112)] : -1 * -4705 + 7021 + 22 * -533)) != -(1 * 8835 + 1 * 6788 + -214 * 73) && (B = -(771 + -154 * 5));
        break;
      }
    case 7173 + -1 * -3301 + -10440:
    case 13 * 454 + 1009 * 1 + -6872:
    case 1 * -5195 + 6611 + -53 * 25:
      N += Ci(h);
      break;
    case 2089 + -4 * 520:
    case -3 * 1041 + 2467 + 666 * 1:
    case 13:
    case 32:
      N += lC(E);
      break;
    case -2257 + -1 * -4358 + -2009:
      N += uC(q0() - (1 * -2523 + 2013 + 511), 7);
      continue;
    case 47:
      switch (et()) {
        case -1323 * -1 + -931 + -350:
        case 7092 + 1 * -7045:
          Kt(yC(hC(Ie(), q0()), i, t, x), x);
          break;
        default:
          N += "/";
      }
      break;
    case (523 * -4 + -4145 + 106 * 60) * d:
      a[I++] = se(N) * B;
    case (7465 + -235 * -20 + -12040) * d:
    case 233 * -17 + -43 * -131 + -1613:
    case 5227 * 1 + 488 * -5 + 929 * -3:
      switch (h) {
        case 5 * -1271 + -7529 + 13884:
        case 125:
          l = -5877 * 1 + -819 + 1674 * 4;
        case 3609 * -1 + 2829 + 839 + C:
          B == -(3 * 877 + -6151 + -3521 * -1) && (N = U(N, /\f/g, "")), c > 5772 + -4871 * 2 + -10 * -397 && se(N) - r && Kt(c > -44 * -167 + -4509 + 2807 * -1 ? Mg(N + ";", e, t, r - (4424 + 1 * -4423), x) : Mg(U(N, " ", "") + ";", e, t, r - (-9596 + 349 * -17 + 31 * 501), x), x);
          break;
        case -18771 + -269 * -70:
          N += ";";
        default:
          if (Kt(M = Wg(N, i, t, I, C, A, a, p, G = [], R = [], r, n), n), h === 123)
            if (C === 3345 + -418 * -4 + -5017) j0(N, i, M, M, G, n, r, a, R);
            else switch (Q === -991 + -15 * -556 + -50 * 145 && CA(N, 3) === 2481 * -2 + 4 * -219 + -2 * -2974 ? -8085 + -5 * -1637 : Q) {
              case 1 * 8564 + -737 + -7727:
              case -8 * -231 + 4297 + -6037:
              case -2052 + 789 * 6 + -2573:
              case -2099 + 369 * 6:
                j0(o, M, M, e && Kt(Wg(o, M, M, 2366 + 113 * 75 + -10841, 2196 + 263 * -1 + 1 * -1933, A, a, p, A, G = [], r, R), R), A, R, r, a, e ? G : R);
                break;
              default:
                j0(N, M, M, M, [""], R, -2316 + 6962 * -1 + 9278, a, R);
            }
      }
      I = C = c = 3 * 94 + -9 * -67 + -885, d = B = 1, p = N = "", r = g;
      break;
    case 8007 + -2435 * 1 + -5514:
      r = -452 * -16 + -260 * -28 + 7 * -2073 + se(N), c = E;
    default:
      if (d < -13727 + 429 * 32) {
        if (h == 123) --d;
        else if (h == 125 && d++ == -16328 + 26 * 628 && QC() == -1 * 51 + 1710 + -13 * 118) continue;
      }
      switch (N += Yn(h), h * d) {
        case -1361 * -4 + 982 + -6388:
          B = C > -2427 * -2 + 8677 * -1 + 3823 ? 9966 + 1993 * -5 : (N += "\f", -(-17239 + 4310 * 4));
          break;
        case 44:
          a[I++] = (se(N) - (-42 * -226 + -7761 + -173 * 10)) * B, B = -7 * -435 + 2 * 2531 + -8106;
          break;
        case -163 * -37 + -1 * -7768 + -13735:
          et() === 45 && (N += Ci(Ie())), Q = et(), C = r = se(p = N += fC(q0())), h++;
          break;
        case -5169 + 3841 * 1 + 1373:
          E === -1 * -1923 + 1 * -717 + -387 * 3 && se(N) == 69 * 25 + 1 * 4265 + 998 * -6 && (d = -58 * 95 + -8623 + 14133);
      }
  }
  return n;
}
function Wg(o, i, t, e, A, n, g, a, x, I, C, r) {
  for (var Q = A - 1, c = A === -421 * 1 + -1 * -1061 + 32 * -20 ? n : [""], E = Qx(c), d = 13 * -451 + -3002 + 8865, l = 526 + 526 * -1, B = 64 * -151 + 9942 + -278; d < e; ++d) for (var h = -673 + -6 * -1263 + -1381 * 5, p = mt(o, Q + (8213 + -2 * 4106), Q = Bx(l = g[d])), G = o; h < E; ++h) (G = sx(l > -1280 + 1 * 1280 ? c[h] + " " + p : U(p, /&\f/g, c[h]))) && (x[B++] = G);
  return _o(o, i, t, A === 0 ? Zo : a, x, I, C, r);
}
function yC(o, i, t, e) {
  return _o(o, i, t, Cx, Yn(sC()), mt(o, -5 * -331 + 2 * 2129 + 257 * -23, -(5427 + 147 * 67 + -14 * 1091)), 5406 + -17 * -258 + -9792, e);
}
function Mg(o, i, t, e, A) {
  return _o(o, i, t, Un, mt(o, 5530 + 74 * -46 + -2126, e), mt(o, e + (-4 * -271 + 55 * 94 + -6253), -(-1881 + 941 * 2)), e, A);
}
function dx(o, i, t) {
  switch (cC(o, i)) {
    case 6 * -876 + 3345 + 7014:
      return j + "print-" + o + o;
    case 11286 + -1 * -4421 + -10 * 997:
    case 40 + 1 * 8430 + -4269:
    case 1346 + 1 * 1831:
    case -2 * -448 + -9859 + 12396:
    case 3 * 371 + -9276 + 9804 * 1:
    case -2 * 890 + -74 * -119 + -2569:
    case 2574 + -74 * -89 + -6239:
    case 2511 + -3061 * -1:
    case 8468 + -46 * -113 + -7310:
    case 5844:
    case -7 * 433 + 93 * -59 + 11709:
    case -5563 + -1 * -10964 + 1244:
    case -1 * -1163 + -7311 + 9 * 1017:
    case -3098 * -2 + -1140 + 1335:
    case -1286 * 3 + -10862 + 1 * 20599:
    case 5623:
    case -113 * -95 + 10182 + -14782:
    case -311 * 8 + -9021 + -1 * -16108:
    case -5876 + 149 * -1 + 340 * 32:
    case 4215:
    case -4 * -1348 + 12338 + -11341:
    case 3187 * -3 + 3487 * 1 + -211 * -53:
    case -25 * 325 + -7680 + 21170:
    case 4718 + -9341 * -1 + -8438:
    case 56 * -71 + 2734 + 5071:
      return j + o + o;
    case -7041 + -6285 * 1 + 18115:
      return zt + o + o;
    case -649 * 13 + -3 * 907 + 16507:
    case 8200 * -1 + -76 * 4 + -15 * -850:
    case -4052 * 2 + 2569 + 10345:
    case -3 * 4259 + 5403 * -2 + -137 * -223:
    case 2623 * 2 + -6037 + 3547:
      return j + o + zt + o + V + o + o;
    case -977 * 11 + -1385 + 18068:
      switch (CA(o, i + (-14 * -257 + 8702 + 1 * -12289))) {
        case -8483 * -1 + -4361 + -167 * 24:
          return j + o + V + U(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case -535 * 1 + 8315 + -1 * 7672:
          return j + o + V + U(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 5566 + 29 * -218 + 801:
          return j + o + V + U(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case 33 * -190 + -3027 * -4 + 45 * 22:
    case 326 * 5 + -747 + -1 * -3385:
    case -1014 + 1561 * -1 + -913 * -6:
      return j + o + V + o + o;
    case 32 * 70 + 2 * 379 + 3167:
      return j + o + V + "flex-" + o + o;
    case -29 * 277 + -2490 * -3 + 5750:
      return j + o + U(o, /(\w+).+(:[^]+)/, j + "box-$1$2" + V + "flex-$1$2") + o;
    case 309 * 9 + 1 * -10582 + 1892 * 7:
      return j + o + V + "flex-item-" + U(o, /flex-|-self/g, "") + (he(o, /flex-|baseline/) ? "" : V + "grid-row-" + U(o, /flex-|-self/g, "")) + o;
    case 4379 + 2154 * 1 + -1 * 1858:
      return j + o + V + "flex-line-pack" + U(o, /align-content|flex-|-self/g, "") + o;
    case 1 * 9463 + 2012 * -3 + -3 * -707:
      return j + o + V + U(o, "shrink", "negative") + o;
    case -1896 + -12 * -599:
      return j + o + V + U(o, "basis", "preferred-size") + o;
    case 6343 + -82 * -147 + 73 * -169:
      return j + "box-" + U(o, "-grow", "") + j + o + V + U(o, "grow", "positive") + o;
    case 261 * -13 + 3 * -2299 + 14844:
      return j + U(o, /([^-])(transform)/g, "$1" + j + "$2") + o;
    case 3663 + -9257 * 1 + 1309 * 9:
      return U(U(U(o, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), o, "") + o;
    case -12 * 632 + -4243 + 17322:
    case 63 * -41 + -221 * -25 + 1017:
      return U(o, /(image-set\([^]*)/, j + "$1$`$1");
    case 2 * -1527 + -2665 + 10687 * 1:
      return U(U(o, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + V + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + o + o;
    case 3961 + -2539 * -3 + 14 * -527:
      if (!he(o, /flex-|baseline/)) return V + "grid-column-align" + mt(o, i) + o;
      break;
    case 3451 + -2747 * 2 + 103 * 45:
    case 3360:
      return V + U(o, "template-", "") + o;
    case -6701 + -34 * -161 + -5611 * -1:
    case -4508 + -42 * -130 + 2664:
      return t && t.some(function(e, A) {
        return i = A, he(e.props, /grid-\w+-end/);
      }) ? ~T0(o + (t = t[i].value), "span", 43 * 83 + 8838 + 1 * -12407) ? o : V + U(o, "-start", "") + o + V + "grid-row-span:" + (~T0(t, "span", -6257 + -1 * -6257) ? he(t, /\d+/) : +he(t, /\d+/) - +he(o, /\d+/)) + ";" : V + U(o, "-start", "") + o;
    case -53 * 33 + 1059 * -5 + 11940:
    case 6863 + -279 * -30 + -11105:
      return t && t.some(function(e) {
        return he(e.props, /grid-\w+-start/);
      }) ? o : V + U(U(o, "-end", "-span"), "span ", "") + o;
    case -13 * 166 + 1 * 1112 + 5141:
    case -2501 * -2 + -2 * -3436 + 1 * -8291:
    case 5071 * -1 + 9768 + -17 * 37:
    case -6689 + 69 * -5 + -1 * -9566:
      return U(o, /(.+)-inline(.+)/, j + "$1$2") + o;
    case -5393 + -15628 * 1 + 29137:
    case 7059:
    case 3893 * -2 + -3712 + 17251:
    case -5027 * 1 + -2231 + 12793:
    case 6591 + 2 * -1215 + -321 * -4:
    case 241 * -5 + -1772 * -1 + 5134:
    case 11 * 457 + -3428 * -1 + -3522:
    case 2 * -1927 + 5030 * -1 + 71 * 191:
    case 2 * 4492 + 5 * -786 + 479 * 1:
    case 326 * -15 + -1 * 1321 + -1e3 * -12:
    case 5021:
    case -383 * 25 + -8668 + 4 * 5752:
      if (se(o) - (-9785 + 4 * 1567 + 2 * 1759) - i > -5848 + -1 * -9093 + 41 * -79) switch (CA(o, i + (-3665 * 1 + -6696 + 10362))) {
        case -1 * -8797 + 6223 + -14911:
          if (CA(o, i + (-194 + 7 * 361 + 137 * -17)) !== 15 * 523 + 4291 * -2 + 2 * 391) break;
        case -3158 + -1 * -6419 + -3159:
          return U(o, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + zt + (CA(o, i + (-379 * 3 + 3305 + 2165 * -1)) == -9 * -413 + -5418 + -1 * -1809 ? "$3" : "$2-$3")) + o;
        case -49 * 9 + -1 * -5781 + -25 * 209:
          return ~T0(o, "stretch", -3222 * 3 + 4340 + 5326) ? dx(U(o, "stretch", "fill-available"), i, t) + o : o;
      }
      break;
    case -16912 + 7 * 3152:
    case 5068 + 2237 * -2 + 5326:
      return U(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, n, g, a, x, I) {
        return V + A + ":" + n + I + (g ? V + A + "-span:" + (a ? x : +x - +n) + I : "") + o;
      });
    case 116 * -52 + 2463 + 8518:
      if (CA(o, i + 6) === 1036 + 915 * -1) return U(o, ":", ":" + j) + o;
      break;
    case -8325 + -629 * 20 + 27349:
      switch (CA(o, CA(o, -2165 + -2179 * -1) === 45 ? -40 * -98 + -1595 + -2307 : -1 * 4479 + 37 * 233 + 81 * -51)) {
        case 121 * -78 + 466 * 11 + 1 * 4432:
          return U(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + j + (CA(o, 14) === -1570 + 201 * 9 + 194 * -1 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + V + "$2box$3") + o;
        case 1317 * 3 + -1 * -437 + -1072 * 4:
          return U(o, ":", ":" + V) + o;
      }
      break;
    case 5615 * -1 + -1 * 7153 + 18487:
    case -1 * 1871 + 11 * 13 + 4375:
    case -1 * 5140 + -3482 * -2 + 1 * 311:
    case -9467 + 102 * -95 + 23084:
    case 7 * -765 + -8730 + 16476:
      return U(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function ro(o, i) {
  for (var t = "", e = -1773 + -1937 * 5 + 11458; e < o.length; e++) t += i(o[e], e, o, i) || "";
  return t;
}
function DC(o, i, t, e) {
  switch (o.type) {
    case CC:
      if (o.children.length) break;
    case rC:
    case Un:
      return o.return = o.return || o.value;
    case Cx:
      return "";
    case cx:
      return o.return = o.value + "{" + ro(o.children, e) + "}";
    case Zo:
      if (!se(o.value = o.props.join(","))) return "";
  }
  return se(t = ro(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function mC(o) {
  var i = Qx(o);
  return function(t, e, A, n) {
    for (var g = "", a = 47 * 124 + -1516 * -4 + -1982 * 6; a < i; a++) g += o[a](t, e, A, n) || "";
    return g;
  };
}
function wC(o) {
  return function(i) {
    i.root || (i = i.return) && o(i);
  };
}
function bC(o, i, t, e) {
  if (o.length > -1 && !o.return)
    switch (o.type) {
      case Un:
        o.return = dx(o.value, o.length, t);
        return;
      case cx:
        return ro([Re(o, { value: U(o.value, "@", "@" + j) })], e);
      case Zo:
        if (o.length) return BC(t = o.props, function(A) {
          switch (he(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              rt(Re(o, { props: [U(A, /:(read-\w+)/, ":" + zt + "$1")] }));
              var n = {};
              n.props = [A], rt(Re(o, n)), vi(o, { props: Rg(t, e) });
              break;
            case "::placeholder":
              rt(Re(o, { props: [U(A, /:(plac\w+)/, ":" + j + "input-$1")] })), rt(Re(o, { props: [U(A, /:(plac\w+)/, ":" + zt + "$1")] })), rt(Re(o, { props: [U(A, /:(plac\w+)/, V + "input-$1")] }));
              var g = {};
              g.props = [A], rt(Re(o, g)), vi(o, { props: Rg(t, e) });
              break;
          }
          return "";
        });
    }
}
var W = {};
W.animationIterationCount = 1, W.aspectRatio = 1, W.borderImageOutset = 1, W.borderImageSlice = 1, W.borderImageWidth = 1, W.boxFlex = 1, W.boxFlexGroup = 1, W.boxOrdinalGroup = 1, W.columnCount = 1, W.columns = 1, W.flex = 1, W.flexGrow = 1, W.flexPositive = 1, W.flexShrink = 1, W.flexNegative = 1, W.flexOrder = 1, W.gridRow = 1, W.gridRowEnd = 1, W.gridRowSpan = 1, W.gridRowStart = 1, W.gridColumn = 1, W.gridColumnEnd = 1, W.gridColumnSpan = 1, W.gridColumnStart = 1, W.msGridRow = 1, W.msGridRowSpan = 1, W.msGridColumn = 1, W.msGridColumnSpan = 1, W.fontWeight = 1, W.lineHeight = 1, W.opacity = 1, W.order = 1, W.orphans = 1, W.tabSize = 1, W.widows = 1, W.zIndex = 1, W.zoom = 1, W.WebkitLineClamp = 1, W.fillOpacity = 1, W.floodOpacity = 1, W.stopOpacity = 1, W.strokeDasharray = 1, W.strokeDashoffset = 1, W.strokeMiterlimit = 1, W.strokeOpacity = 1, W.strokeWidth = 1;
var kC = W, q = {}, nt = typeof process < "u" && void (1954 + -2 * 423 + -554 * 2) !== q && (q.REACT_APP_SC_ATTR || q.SC_ATTR) || "data-styled", lx = "active", ux = "data-styled-version", zo = "6.1.11", On = `/*!sc*/
`, Hn = typeof window < "u" && "HTMLElement" in window, GC = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (-137 * 9 + -891 + -3 * -708) !== q && void (-5772 + -1261 * 1 + 13 * 541) !== q.REACT_APP_SC_DISABLE_SPEEDY && q.REACT_APP_SC_DISABLE_SPEEDY !== "" ? q.REACT_APP_SC_DISABLE_SPEEDY !== "false" && q.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (3087 + 1 * -4997 + 1910) !== q && void (1374 + 3 * -458) !== q.SC_DISABLE_SPEEDY && q.SC_DISABLE_SPEEDY !== "" ? q.SC_DISABLE_SPEEDY !== "false" && q.SC_DISABLE_SPEEDY : q.NODE_ENV !== "production"), vg = /invalid hook call/i, W0 = /* @__PURE__ */ new Set(), SC = function(o, i) {
  if (q.NODE_ENV !== "production") {
    var t = i ? ' with the id of "'.concat(i, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var n = !0;
      console.error = function(g) {
        for (var a = [], x = 6532 + -7 * 933; x < arguments.length; x++) a[x - (-1121 * 1 + 8891 + -7769)] = arguments[x];
        vg.test(g) ? (n = !1, W0.delete(e)) : A.apply(void (-2579 * -1 + -719 * 1 + -155 * 12), yt([g], a, !1));
      }, jA(), n && !W0.has(e) && (console.warn(e), W0.add(e));
    } catch (g) {
      vg.test(g.message) && W0.delete(e);
    } finally {
      console.error = A;
    }
  }
}, $o = Object.freeze([]), bt = Object.freeze({});
function NC(o, i, t) {
  return void (-3973 + -3203 * 3 + 13582) === t && (t = bt), o.theme !== t.theme && o.theme || i || t.theme;
}
var Ui = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), FC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, RC = /(^-|-$)/g;
function Lg(o) {
  return o.replace(FC, "-").replace(RC, "");
}
var WC = /(a)(d)/gi, M0 = 1 * -1349 + 9211 + 55 * -142, Jg = function(o) {
  return String.fromCharCode(o + (o > 25 ? 3674 + 9521 * -1 + 1 * 5886 : -275 * 6 + -163 * 6 + 2725));
};
function Yi(o) {
  var i, t = "";
  for (i = Math.abs(o); i > M0; i = i / M0 | 0) t = Jg(i % M0) + t;
  return (Jg(i % M0) + t).replace(WC, "$1-$2");
}
var ci, hx = -8116 + -8 * -629 + 8465, qe = function(o, i) {
  for (var t = i.length; t; ) o = (3593 + 23 * -215 + -1385 * -1) * o ^ i.charCodeAt(--t);
  return o;
}, fx = function(o) {
  return qe(hx, o);
};
function MC(o) {
  return Yi(fx(o) >>> 0);
}
function px(o) {
  return q.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function Bi(o) {
  return typeof o == "string" && (q.NODE_ENV === "production" || o.charAt(0) === o.charAt(-7018 + -679 * -13 + 9 * -201).toLowerCase());
}
var zA = {};
zA.childContextTypes = !0, zA.contextType = !0, zA.contextTypes = !0, zA.defaultProps = !0, zA.displayName = !0, zA.getDefaultProps = !0, zA.getDerivedStateFromError = !0, zA.getDerivedStateFromProps = !0, zA.mixins = !0, zA.propTypes = !0, zA.type = !0;
var We = {};
We.name = !0, We.length = !0, We.prototype = !0, We.caller = !0, We.callee = !0, We.arguments = !0, We.arity = !0;
var Pe = {};
Pe.$$typeof = !0, Pe.compare = !0, Pe.defaultProps = !0, Pe.displayName = !0, Pe.propTypes = !0, Pe.type = !0;
var Bt = {};
Bt.$$typeof = !0, Bt.render = !0, Bt.defaultProps = !0, Bt.displayName = !0, Bt.propTypes = !0;
var yx = typeof Symbol == "function" && Symbol.for, Dx = yx ? Symbol.for("react.memo") : -13 * 8328 + 18106 * 5 + 77849 * 1, vC = yx ? Symbol.for("react.forward_ref") : 60112, LC = zA, JC = We, mx = Pe, UC = ((ci = {})[vC] = Bt, ci[Dx] = mx, ci);
function Ug(o) {
  return ("type" in (i = o) && i.type.$$typeof) === Dx ? mx : "$$typeof" in o ? UC[o.$$typeof] : LC;
  var i;
}
var YC = Object.defineProperty, OC = Object.getOwnPropertyNames, Yg = Object.getOwnPropertySymbols, HC = Object.getOwnPropertyDescriptor, KC = Object.getPrototypeOf, Og = Object.prototype;
function wx(o, i, t) {
  if (typeof i != "string") {
    if (Og) {
      var e = KC(i);
      e && e !== Og && wx(o, e, t);
    }
    var A = OC(i);
    Yg && (A = A.concat(Yg(i)));
    for (var n = Ug(o), g = Ug(i), a = 5213 * -1 + -25 * 330 + -13463 * -1; a < A.length; ++a) {
      var x = A[a];
      if (!(x in JC || t && t[x] || g && x in g || n && x in n)) {
        var I = HC(i, x);
        try {
          YC(o, x, I);
        } catch {
        }
      }
    }
  }
  return o;
}
function kt(o) {
  return typeof o == "function";
}
function Kn(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function Ze(o, i) {
  return o && i ? "".concat(o, " ").concat(i) : o || i || "";
}
function Hg(o, i) {
  if (1999 * 5 + -2 * 4138 + -1 * 1719 === o.length) return "";
  for (var t = o[-9893 * 1 + -298 * 3 + 161 * 67], e = 1 * -853 + -2 * 641 + 4 * 534; e < o.length; e++) t += o[e];
  return t;
}
function Gt(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function Oi(o, i, t) {
  if (void (-10881 + -403 * -27) === t && (t = !1), !t && !Gt(o) && !Array.isArray(o)) return i;
  if (Array.isArray(i))
    for (var e = -333 * 19 + 8953 + -2626; e < i.length; e++) o[e] = Oi(o[e], i[e]);
  else if (Gt(i))
    for (var e in i) o[e] = Oi(o[e], i[e]);
  return o;
}
function Pn(o, i) {
  var t = {};
  t.value = i, Object.defineProperty(o, "toString", t);
}
var xA = {};
xA[1] = `Cannot create styled-component for component: %s.

`, xA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, xA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, xA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, xA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, xA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, xA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', xA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, xA[9] = "Missing document `<head>`\n\n", xA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, xA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, xA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", xA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, xA[14] = `ThemeProvider: "theme" prop is required.

`, xA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", xA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, xA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, xA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var PC = q.NODE_ENV !== "production" ? xA : {};
function TC() {
  for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
  for (var t = o[4 * -1525 + 1 * 5418 + 682], e = [], A = 1, n = o.length; A < n; A += 2077 + -1 * -6203 + 8279 * -1) e.push(o[A]);
  return e.forEach(function(g) {
    t = t.replace(/%[a-z]/, g);
  }), t;
}
function Wt(o) {
  for (var i = [], t = -9551 + 3184 * 3; t < arguments.length; t++) i[t - (-8680 + -118 * 51 + 14699)] = arguments[t];
  return q.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(i.length > 1837 + 3170 * 1 + -3 * 1669 ? " Args: ".concat(i.join(", ")) : "")) : new Error(TC.apply(void (-311 * -13 + 193 * 1 + -1059 * 4), yt([PC[o]], i, !1)).trim());
}
var qC = function() {
  function o(i) {
    this.groupSizes = new Uint32Array(512), this.length = -1687 * 2 + 6 * -452 + 6598, this.tag = i;
  }
  return o.prototype.indexOfGroup = function(i) {
    for (var t = -8388 + -5 * 1747 + 17123 * 1, e = -7 * 219 + 6517 + 7 * -712; e < i; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(i, t) {
    if (i >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, n = A; i >= n; ) if ((n <<= 2 * 1201 + -5206 + 2805) < 3118 * 2 + 6959 * -1 + 723) throw Wt(-18 * 543 + -1 * -9689 + 101, "".concat(i));
      this.groupSizes = new Uint32Array(n), this.groupSizes.set(e), this.length = n;
      for (var g = A; g < n; g++) this.groupSizes[g] = -105 + 1 * -1835 + 1940;
    }
    for (var a = this.indexOfGroup(i + (1 * 4434 + -2366 + 39 * -53)), x = (g = 61 * -1 + -5 * -372 + -1799, t.length); g < x; g++) this.tag.insertRule(a, t[g]) && (this.groupSizes[i]++, a++);
  }, o.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var t = this.groupSizes[i], e = this.indexOfGroup(i), A = e + t;
      this.groupSizes[i] = 3361 + 8 * 1115 + -12281;
      for (var n = e; n < A; n++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(i) {
    var t = "";
    if (i >= this.length || -5034 + 5507 * -1 + 10541 === this.groupSizes[i]) return t;
    for (var e = this.groupSizes[i], A = this.indexOfGroup(i), n = A + e, g = A; g < n; g++) t += "".concat(this.tag.getRule(g)).concat(On);
    return t;
  }, o;
}(), jC = -461 + -2 * -231 << -2523 + -2087 * 4 + -11 * -991, Z0 = /* @__PURE__ */ new Map(), Co = /* @__PURE__ */ new Map(), V0 = -2 * 2682 + -1921 * 5 + 14970, v0 = function(o) {
  if (Z0.has(o)) return Z0.get(o);
  for (; Co.has(V0); ) V0++;
  var i = V0++;
  if (q.NODE_ENV !== "production" && ((-1 * 1156 + -9774 + 10930 | i) < 1407 + -21 * 67 || i > jC)) throw Wt(1 * -9059 + -7 * 79 + 116 * 83, "".concat(i));
  return Z0.set(o, i), Co.set(i, o), i;
}, ZC = function(o, i) {
  V0 = i + 1, Z0.set(o, i), Co.set(i, o);
}, VC = "style[".concat(nt, "][").concat(ux, '="').concat(zo, '"]'), _C = new RegExp("^".concat(nt, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), XC = function(o, i, t) {
  for (var e, A = t.split(","), n = 1006 + 503 * -2, g = A.length; n < g; n++) (e = A[n]) && o.registerName(i, e);
}, zC = function(o, i) {
  for (var t, e = ((t = i.textContent) !== null && void (5285 + -3 * 319 + 8 * -541) !== t ? t : "").split(On), A = [], n = 5 * 1637 + -59 * 70 + -4055, g = e.length; n < g; n++) {
    var a = e[n].trim();
    if (a) {
      var x = a.match(_C);
      if (x) {
        var I = 0 | parseInt(x[1], 10), C = x[-1 * 4951 + -4687 + 5 * 1928];
        -16 * 92 + -1 * -8409 + -6937 !== I && (ZC(C, I), XC(o, C, x[49 * -23 + 925 * -2 + 2980]), o.getTag().insertRules(I, A)), A.length = -954 + 14 * -485 + 44 * 176;
      } else A.push(a);
    }
  }
};
function $C() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var bx = function(o) {
  var i = document.head, t = o || i, e = document.createElement("style"), A = function(a) {
    var x = Array.from(a.querySelectorAll("style[".concat(nt, "]")));
    return x[x.length - (37 * 71 + -3051 + 425)];
  }(t), n = void (13368 + 4456 * -3) !== A ? A.nextSibling : null;
  e.setAttribute(nt, lx), e.setAttribute(ux, zo);
  var g = $C();
  return g && e.setAttribute("nonce", g), t.insertBefore(e, n), e;
}, Ac = function() {
  function o(i) {
    this.element = bx(i), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = -218 + -1 * -218, n = e.length; A < n; A++) {
        var g = e[A];
        if (g.ownerNode === t) return g;
      }
      throw Wt(17);
    }(this.element), this.length = -8481 + -1 * -8481;
  }
  return o.prototype.insertRule = function(i, t) {
    try {
      return this.sheet.insertRule(t, i), this.length++, !0;
    } catch {
      return !1;
    }
  }, o.prototype.deleteRule = function(i) {
    this.sheet.deleteRule(i), this.length--;
  }, o.prototype.getRule = function(i) {
    var t = this.sheet.cssRules[i];
    return t && t.cssText ? t.cssText : "";
  }, o;
}(), ec = function() {
  function o(i) {
    this.element = bx(i), this.nodes = this.element.childNodes, this.length = -49 + -49 * -1;
  }
  return o.prototype.insertRule = function(i, t) {
    if (i <= this.length && i >= -11 * 271 + -1 * 8363 + 11344) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, o;
}(), tc = function() {
  function o(i) {
    this.rules = [], this.length = 0;
  }
  return o.prototype.insertRule = function(i, t) {
    return i <= this.length && (this.rules.splice(i, 2 * -2336 + -8166 + -6419 * -2, t), this.length++, !0);
  }, o.prototype.deleteRule = function(i) {
    this.rules.splice(i, 3131 + 5 * -626), this.length--;
  }, o.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, o;
}(), Kg = Hn, oc = { isServer: !Hn, useCSSOMInjection: !GC }, kx = function() {
  function o(i, t, e) {
    i === void 0 && (i = bt), void (-2 * 2515 + -1109 * 8 + 13902) === t && (t = {});
    var A = this;
    this.options = PA(PA({}, oc), i), this.gs = t, this.names = new Map(e), this.server = !!i.isServer, !this.server && Hn && Kg && (Kg = !1, function(n) {
      for (var g = document.querySelectorAll(VC), a = 9448 + 9448 * -1, x = g.length; a < x; a++) {
        var I = g[a];
        I && I.getAttribute(nt) !== lx && (zC(n, I), I.parentNode && I.parentNode.removeChild(I));
      }
    }(this)), Pn(this, function() {
      return function(n) {
        for (var g = n.getTag(), a = g.length, x = "", I = function(r) {
          var Q = function(B) {
            return Co.get(B);
          }(r);
          if (void (1262 + 1 * -5649 + -107 * -41) === Q) return "continue";
          var c = n.names.get(Q), E = g.getGroup(r);
          if (void (173 * 27 + 1839 * -1 + -2832) === c || 4027 * 1 + 344 * -4 + -2651 === E.length) return "continue";
          var d = "".concat(nt, ".g").concat(r, '[id="').concat(Q, '"]'), l = "";
          void (5101 + -1 * 5101) !== c && c.forEach(function(B) {
            B.length > -19 * -388 + 3 * 2843 + 15901 * -1 && (l += "".concat(B, ","));
          }), x += "".concat(E).concat(d, '{content:"').concat(l, '"}').concat(On);
        }, C = -719 * -13 + -2579 * -3 + -4271 * 4; C < a; C++) I(C);
        return x;
      }(A);
    });
  }
  return o.registerId = function(i) {
    return v0(i);
  }, o.prototype.reconstructWithOptions = function(i, t) {
    return void (-9425 + 8 * -1217 + 19161) === t && (t = !0), new o(PA(PA({}, this.options), i), this.gs, t && this.names || void (-1109 * 2 + 9973 + -235 * 33));
  }, o.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 5479 + 14 * -399 + 107) + (1 * -2472 + -2194 + 4667);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (i = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new tc(A) : e ? new Ac(A) : new ec(A);
    }(this.options), new qC(i)));
    var i;
  }, o.prototype.hasNameForId = function(i, t) {
    return this.names.has(i) && this.names.get(i).has(t);
  }, o.prototype.registerName = function(i, t) {
    if (v0(i), this.names.has(i)) this.names.get(i).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(i, e);
    }
  }, o.prototype.insertRules = function(i, t, e) {
    this.registerName(i, t), this.getTag().insertRules(v0(i), e);
  }, o.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, o.prototype.clearRules = function(i) {
    this.getTag().clearGroup(v0(i)), this.clearNames(i);
  }, o.prototype.clearTag = function() {
    this.tag = void (-3253 + -1 * -3214 + 13 * 3);
  }, o;
}(), ic = /&/g, nc = /^\s*\/\/.*$/gm;
function Gx(o, i) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(i, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(i, " ")), t.props = t.props.map(function(e) {
      return "".concat(i, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Gx(t.children, i)), t;
  });
}
function Sx(o) {
  var i, t, e, A = o === void 0 ? bt : o, n = A.options, g = void (110 * -12 + 8632 + -7312) === n ? bt : n, a = A.plugins, x = void (1713 + -9527 * 1 + -1 * -7814) === a ? $o : a, I = function(Q, c, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > -1 * 5207 + 6244 + -1037 ? ".".concat(i) : Q;
  }, C = x.slice();
  C.push(function(Q) {
    Q.type === Zo && Q.value.includes("&") && (Q.props[1157 * -1 + -1 * -691 + -466 * -1] = Q.props[7812 + -1787 * -1 + -331 * 29].replace(ic, t).replace(e, I));
  }), g.prefix && C.push(bC), C.push(DC);
  var r = function(Q, c, E, d) {
    void (-5633 + 4335 * -1 + 9968) === c && (c = ""), void (7 * 309 + -1 * 6639 + 4476) === E && (E = ""), void (-234 * -19 + -789 + -3657) === d && (d = "&"), i = d, t = c, e = new RegExp("\\".concat(t, "\\b"), "g");
    var l = Q.replace(nc, ""), B = pC(E || c ? "".concat(E, " ").concat(c, " { ").concat(l, " }") : l);
    g.namespace && (B = Gx(B, g.namespace));
    var h = [];
    return ro(B, mC(C.concat(wC(function(p) {
      return h.push(p);
    })))), h;
  };
  return r.hash = x.length ? x.reduce(function(Q, c) {
    return c.name || Wt(15), qe(Q, c.name);
  }, hx).toString() : "", r;
}
var gc = new kx(), Hi = Sx(), Tn = it.createContext({ shouldForwardProp: void 0, styleSheet: gc, stylis: Hi });
Tn.Consumer;
var ac = it.createContext(void (-166 * -32 + -7605 + 2293));
function Ki() {
  return Ge(Tn);
}
function xc(o) {
  var i = NA(o.stylisPlugins), t = i[670 + 839 * 6 + 31 * -184], e = i[5563 + -1 * 6301 + -739 * -1], A = Ki().styleSheet, n = LA(function() {
    var C = A, r = {};
    return r.useCSSOMInjection = !1, o.sheet ? C = o.sheet : o.target && (C = C.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (C = C.reconstructWithOptions(r)), C;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), g = LA(function() {
    var C = {};
    C.namespace = o.namespace, C.prefix = o.enableVendorPrefixes;
    var r = {};
    return r.options = C, r.plugins = t, Sx(r);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  X(function() {
    IC(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var a = LA(function() {
    var C = {};
    return C.shouldForwardProp = o.shouldForwardProp, C.styleSheet = n, C.stylis = g, C;
  }, [o.shouldForwardProp, n, g]), x = {};
  x.value = a;
  var I = {};
  return I.value = g, it.createElement(Tn.Provider, x, it.createElement(ac.Provider, I, o.children));
}
var Pg = function() {
  function o(i, t) {
    var e = this;
    this.inject = function(A, n) {
      void (2690 + -2 * -3629 + 12 * -829) === n && (n = Hi);
      var g = e.name + n.hash;
      A.hasNameForId(e.id, g) || A.insertRules(e.id, g, n(e.rules, g, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = t, Pn(this, function() {
      throw Wt(7302 + 9419 * 1 + -16709, String(e.name));
    });
  }
  return o.prototype.getName = function(i) {
    return void (12834 + -4278 * 3) === i && (i = Hi), this.name + i.hash;
  }, o;
}(), Ic = function(o) {
  return o >= "A" && o <= "Z";
};
function Tg(o) {
  for (var i = "", t = -5392 + -157 * -61 + -465 * 9; t < o.length; t++) {
    var e = o[t];
    if (t === 1 && e === "-" && o[1453 * 6 + -3 * -2105 + -5011 * 3] === "-") return o;
    Ic(e) ? i += "-" + e.toLowerCase() : i += e;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var Nx = function(o) {
  return o == null || o === !1 || o === "";
}, Fx = function(o) {
  var i, t, e = [];
  for (var A in o) {
    var n = o[A];
    o.hasOwnProperty(A) && !Nx(n) && (Array.isArray(n) && n.isCss || kt(n) ? e.push("".concat(Tg(A), ":"), n, ";") : Gt(n) ? e.push.apply(e, yt(yt(["".concat(A, " {")], Fx(n), !1), ["}"], !1)) : e.push("".concat(Tg(A), ": ").concat((i = A, (t = n) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 9002 + -39 * -76 + -2 * 5983 === t || i in kC || i.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function tt(o, i, t, e) {
  if (Nx(o)) return [];
  if (Kn(o)) return [".".concat(o.styledComponentId)];
  if (kt(o)) {
    if (!kt(n = o) || n.prototype && n.prototype.isReactComponent || !i) return [o];
    var A = o(i);
    return q.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Pg || Gt(A) || A === null || console.error("".concat(px(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), tt(A, i, t, e);
  }
  var n;
  return o instanceof Pg ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : Gt(o) ? Fx(o) : Array.isArray(o) ? Array.prototype.concat.apply($o, o.map(function(g) {
    return tt(g, i, t, e);
  })) : [o.toString()];
}
function rc(o) {
  for (var i = -2 * 3813 + 1132 + -34 * -191; i < o.length; i += 1) {
    var t = o[i];
    if (kt(t) && !Kn(t)) return !1;
  }
  return !0;
}
var Cc = fx(zo), cc = function() {
  function o(i, t, e) {
    this.rules = i, this.staticRulesId = "", this.isStatic = q.NODE_ENV === "production" && (void (2 * -1156 + 2300 + -2 * -6) === e || e.isStatic) && rc(i), this.componentId = t, this.baseHash = qe(Cc, t), this.baseStyle = e, kx.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(i, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = Ze(A, this.staticRulesId);
      else {
        var n = Hg(tt(this.rules, i, t, e)), g = Yi(qe(this.baseHash, n) >>> 284 * 22 + 6451 + -153 * 83);
        if (!t.hasNameForId(this.componentId, g)) {
          var a = e(n, ".".concat(g), void 0, this.componentId);
          t.insertRules(this.componentId, g, a);
        }
        A = Ze(A, g), this.staticRulesId = g;
      }
    else {
      for (var x = qe(this.baseHash, e.hash), I = "", C = -5478 + 692 * -10 + 12398; C < this.rules.length; C++) {
        var r = this.rules[C];
        if (typeof r == "string") I += r, q.NODE_ENV !== "production" && (x = qe(x, r));
        else if (r) {
          var Q = Hg(tt(r, i, t, e));
          x = qe(x, Q + C), I += Q;
        }
      }
      if (I) {
        var c = Yi(x >>> 0);
        t.hasNameForId(this.componentId, c) || t.insertRules(this.componentId, c, e(I, ".".concat(c), void (-6271 * -1 + 9424 + -15695), this.componentId)), A = Ze(A, c);
      }
    }
    return A;
  }, o;
}(), Rx = it.createContext(void (86 * 113 + 2 * 302 + -10322));
Rx.Consumer;
var si = {}, qg = /* @__PURE__ */ new Set();
function Bc(o, i, t) {
  var e = Kn(o), A = o, n = !Bi(o), g = i.attrs, a = g === void 0 ? $o : g, x = i.componentId, I = void (-4832 + -2881 * 1 + 7713) === x ? function(R, M) {
    var N = typeof R != "string" ? "sc" : Lg(R);
    si[N] = (si[N] || -3 * 3046 + 123 * -64 + 17010) + (7295 + -191 * -31 + 881 * -15);
    var z = "".concat(N, "-").concat(MC(zo + N + si[N]));
    return M ? "".concat(M, "-").concat(z) : z;
  }(i.displayName, i.parentComponentId) : x, C = i.displayName, r = void (2017 * -1 + 5 * 636 + 1163 * -1) === C ? function(R) {
    return Bi(R) ? "styled.".concat(R) : "Styled(".concat(px(R), ")");
  }(o) : C, Q = i.displayName && i.componentId ? "".concat(Lg(i.displayName), "-").concat(i.componentId) : i.componentId || I, c = e && A.attrs ? A.attrs.concat(a).filter(Boolean) : a, E = i.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var d = A.shouldForwardProp;
    if (i.shouldForwardProp) {
      var l = i.shouldForwardProp;
      E = function(R, M) {
        return d(R, M) && l(R, M);
      };
    } else E = d;
  }
  var B = new cc(t, Q, e ? A.componentStyle : void (-1 * -3169 + 1 * 11 + 1 * -3180));
  function h(R, M) {
    return function(N, z, JA) {
      var nA = N.attrs, VA = N.componentStyle, AA = N.defaultProps, vt = N.foldedComponentIds, Ig = N.styledComponentId, or = N.target, ir = it.useContext(Rx), nr = Ki(), ii = N.shouldForwardProp || nr.shouldForwardProp;
      q.NODE_ENV !== "production" && Io(Ig);
      var rg = NC(z, ir, AA) || bt, ue = function(S0, Ut, N0) {
        var It = {};
        It.className = void (-11 * -669 + -5661 + -1698), It.theme = N0;
        for (var ai, Oe = PA(PA({}, Ut), It), xi = 8008 + -58 * -149 + 75 * -222; xi < S0.length; xi += 1 * 3889 + 8022 + -11910) {
          var F0 = kt(ai = S0[xi]) ? ai(Oe) : ai;
          for (var Se in F0) Oe[Se] = Se === "className" ? Ze(Oe[Se], F0[Se]) : Se === "style" ? PA(PA({}, Oe[Se]), F0[Se]) : F0[Se];
        }
        return Ut.className && (Oe.className = Ze(Oe.className, Ut.className)), Oe;
      }(nA, z, rg), Lt = ue.as || or, Jt = {};
      for (var _A in ue) void (8926 + -2 * 4463) === ue[_A] || _A[5994 + 11 * -558 + -9 * -16] === "$" || _A === "as" || _A === "theme" && ue.theme === rg || (_A === "forwardedAs" ? Jt.as = ue.forwardedAs : ii && !ii(_A, Lt) || (Jt[_A] = ue[_A], ii || q.NODE_ENV !== "development" || yr(_A) || qg.has(_A) || !Ui.has(Lt) || (qg.add(_A), console.warn('styled-components: it looks like an unknown prop "'.concat(_A, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ni = function(S0, Ut) {
        var N0 = Ki(), It = S0.generateAndInjectStyles(Ut, N0.styleSheet, N0.stylis);
        return q.NODE_ENV !== "production" && Io(It), It;
      }(VA, ue);
      q.NODE_ENV !== "production" && N.warnTooManyClasses && N.warnTooManyClasses(ni);
      var gi = Ze(vt, Ig);
      return ni && (gi += " " + ni), ue.className && (gi += " " + ue.className), Jt[Bi(Lt) && !Ui.has(Lt) ? "class" : "className"] = gi, Jt.ref = JA, vA(Lt, Jt);
    }(p, R, M);
  }
  h.displayName = r;
  var p = it.forwardRef(h), G = {};
  return G.attrs = !0, G.componentStyle = !0, G.displayName = !0, G.foldedComponentIds = !0, G.shouldForwardProp = !0, G.styledComponentId = !0, G.target = !0, p.attrs = c, p.componentStyle = B, p.displayName = r, p.shouldForwardProp = E, p.foldedComponentIds = e ? Ze(A.foldedComponentIds, A.styledComponentId) : "", p.styledComponentId = Q, p.target = e ? A.target : o, Object.defineProperty(p, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(R) {
    this._foldedDefaultProps = e ? function(M) {
      for (var N = [], z = 1; z < arguments.length; z++) N[z - (-107 * 19 + -492 * -2 + 1050)] = arguments[z];
      for (var JA = -1187 * 7 + -86 * 74 + 14673, nA = N; JA < nA.length; JA++) Oi(M, nA[JA], !0);
      return M;
    }({}, A.defaultProps, R) : R;
  } }), q.NODE_ENV !== "production" && (SC(r, Q), p.warnTooManyClasses = /* @__PURE__ */ function(R, M) {
    var N = {}, z = !1;
    return function(JA) {
      if (!z && (N[JA] = !0, Object.keys(N).length >= -3049 + -3 * 222 + 3915)) {
        var nA = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(R).concat(nA, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), z = !0, N = {};
      }
    };
  }(r, Q)), Pn(p, function() {
    return ".".concat(p.styledComponentId);
  }), n && wx(p, o, G), p;
}
function jg(o, i) {
  for (var t = [o[-3712 + 1846 * -2 + 1234 * 6]], e = -4608 + 1229 * 4 + 28 * -11, A = i.length; e < A; e += -2843 + 236 * 11 + 248) t.push(i[e], o[e + (-623 * 2 + -1 * 1838 + 3085)]);
  return t;
}
var Zg = function(o) {
  var i = {};
  return i.isCss = !0, Object.assign(o, i);
};
function sc(o) {
  for (var i = [], t = 875 * 9 + -9563 + -3 * -563; t < arguments.length; t++) i[t - (15685 + 1307 * -12)] = arguments[t];
  if (kt(o) || Gt(o)) return Zg(tt(jg($o, yt([o], i, !0))));
  var e = o;
  return i.length === 0 && -7817 * 1 + -4818 + 12636 === e.length && typeof e[-1019 * -3 + -3260 + 203] == "string" ? tt(e) : Zg(tt(jg(e, i)));
}
function Pi(o, i, t) {
  if (void (9958 + 3769 * 1 + -371 * 37) === t && (t = bt), !i) throw Wt(3137 + -3595 * -1 + 127 * -53, i);
  var e = function(A) {
    for (var n = [], g = 601 * 6 + 1 * 3951 + -7556; g < arguments.length; g++) n[g - (-5 * -571 + 2709 * 3 + -10981)] = arguments[g];
    return o(i, t, sc.apply(void (-1 * 7379 + -4513 * -1 + 2866), yt([A], n, !1)));
  };
  return e.attrs = function(A) {
    return Pi(o, i, PA(PA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Pi(o, i, PA(PA({}, t), A));
  }, e;
}
var Wx = function(o) {
  return Pi(Bc, o);
}, b0 = Wx;
Ui.forEach(function(o) {
  b0[o] = Wx(o);
});
q.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var L0 = "__sc-".concat(nt, "__");
q.NODE_ENV !== "production" && q.NODE_ENV !== "test" && typeof window < "u" && (window[L0] || (window[L0] = 14607 + 1623 * -9), 141 * 2 + 4401 * 2 + 31 * -293 === window[L0] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[L0] += -68 * -77 + 2943 * -3 + 3594);
const Qc = b0.div`
  position: relative;
`, Ec = b0.video`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(o) => o.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class L extends Error {
  constructor(t, e) {
    super(t);
    b(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof L) return t;
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
    return new L(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof L) return t;
    const e = "An unexpected error has occurred";
    return new L(e);
  }
}
const _0 = {};
_0.CONTINUE_DETECTION = "continue-detection", _0.SWITCH_CAMERA = "switch-camera", _0.TOGGLE_MIRROR = "toggle-mirror";
const Qi = _0, Ti = {};
Ti.FIRST_FRAME = "first-frame", Ti.FIRST_VALID_FRAME = "first-valid-frame";
const Ei = Ti, Mx = {};
Mx.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Vg = Mx;
var vx = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(vx || {}), me = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(me || {}), dc = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.CONTROL = "magnifeye-auto-capture:control", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(dc || {}), lc = ((o) => (o.CONTROL = "smile-auto-capture:control", o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(lc || {}), uc = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(uc || {}), hc = ((o) => (o.CONTROL = "eye-gaze-auto-capture:control", o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))(hc || {});
const Lx = {};
Lx.EYE_NOT_PRESENT = "eye_not_present";
const _g = Lx, WA = {};
WA.CANDIDATE_SELECTION = "candidate_selection", WA.FACE_TOO_CLOSE = "face_too_close", WA.FACE_TOO_FAR = "face_too_far", WA.FACE_CENTERING = "face_centering", WA.FACE_NOT_PRESENT = "face_not_present", WA.SHARPNESS_TOO_LOW = "sharpness_too_low", WA.BRIGHTNESS_TOO_LOW = "brightness_too_low", WA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", WA.DEVICE_PITCHED = "device_pitched", WA.LEFT_EYE_NOT_PRESENT = "left_" + _g.EYE_NOT_PRESENT, WA.RIGHT_EYE_NOT_PRESENT = "right_" + _g.EYE_NOT_PRESENT, WA.MOUTH_NOT_PRESENT = "mouth_not_present", WA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", WA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const rA = WA, HA = {};
HA.isPresent = rA.FACE_NOT_PRESENT, HA.isNotPitched = rA.DEVICE_PITCHED, HA.isNotSmall = rA.FACE_TOO_FAR, HA.isNotLarge = rA.FACE_TOO_CLOSE, HA.isNotOutOfBounds = rA.FACE_CENTERING, HA.isNotDim = rA.BRIGHTNESS_TOO_LOW, HA.isNotBright = rA.BRIGHTNESS_TOO_HIGH, HA.isSharp = rA.SHARPNESS_TOO_LOW, HA.isLeftEyePresent = rA.LEFT_EYE_NOT_PRESENT, HA.isRightEyePresent = rA.RIGHT_EYE_NOT_PRESENT, HA.isMouthPresent = rA.MOUTH_NOT_PRESENT, HA.isMouthScoreNotTooHigh = rA.MOUTH_SCORE_TOO_HIGH, HA.isMouthScoreNotTooLow = rA.MOUTH_SCORE_TOO_LOW;
const fc = HA, qi = {};
qi.FRONT = "user", qi.REAR = "environment";
const qn = qi, ji = {};
ji.AUTO_CAPTURE = "AUTO_CAPTURE", ji.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const Zi = ji, Pt = {};
Pt.LOADING = "LOADING", Pt.ERROR = "ERROR", Pt.WAITING = "WAITING", Pt.RUNNING = "RUNNING";
const lA = Pt, Jx = { ...lA };
Jx.DONE = "DONE";
const Xg = Jx;
({ ...rA });
var pc = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(pc || {});
({ ...rA });
({ ...rA });
const Ai = at(void 0);
Ai.displayName = "AppStateContext";
function Ye() {
  const o = Ge(Ai);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const yc = Ai.Provider;
class Ux extends te {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const i = new L("An unknown error has occurred");
    (t = this.context) == null || t.handleError(i);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var i;
    return ((i = this.context) == null ? void 0 : i.appState) === lA.ERROR ? null : this.props.children;
  }
}
b(Ux, "contextType", Ai);
const Dc = b0.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, mc = b0.div`
  background-color: #00000060;
  color: #fff;
  font-size: 13px;
  width: auto;
  padding: 10px;
  z-index: 2;
  word-break: break-word;
  position: absolute;
  top: 0;
`;
function wc() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const bc = $a(
  ({ detectionDetails: o, isImageMirror: i }, t) => wc() ? (console.log(o), /* @__PURE__ */ y(ie, { children: [
    /* @__PURE__ */ y(Dc, { ref: t, $isImageMirror: i }),
    /* @__PURE__ */ y(mc, { children: /* @__PURE__ */ y("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), co = at(void 0);
co.displayName = "AnalyticsContext";
function kc() {
  const o = Ge(co);
  if (o === void 0)
    throw new Error(`${co.displayName} must be used within a AnalyticsProvider`);
  return o;
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return SA(C - -861, r);
  }
  const e = o();
  function A(a, x, I, C, r) {
    return SA(a - -583, I);
  }
  function n(a, x, I, C, r) {
    return SA(x - -924, a);
  }
  function g(a, x, I, C, r) {
    return SA(C - -140, x);
  }
  for (; ; )
    try {
      if (parseInt(n("JjVm", -396, -409, -412, -385)) / 1 * (parseInt(g(347, "&gii", 357, 357, 350)) / 2) + parseInt(g(359, "EP8O", 371, 359, 362)) / 3 + parseInt(n("UIbu", -413, -431, -401, -418)) / 4 + -parseInt(n("lN&t", -404, -405, -407, -402)) / 5 * (-parseInt(n("s717", -400, -395, -398, -408)) / 6) + parseInt(A(-57, -42, "VrZ@", -43, -71)) / 7 * (parseInt(n("NW@i", -416, -411, -425, -425)) / 8) + parseInt(t(-361, -346, -376, -361, "W$4X")) / 9 * (-parseInt(t(-354, -350, -360, -363, "q7DD")) / 10) + -parseInt(t(-372, -370, -355, -356, "2!LL")) / 11 * (parseInt(A(-51, -34, "lN&t", -45, -43)) / 12) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(so, 109538 + 4 * -143206 + 4 * 207913);
function zg(o, i, t, e, A) {
  return SA(t - 142, i);
}
function Vi(o, i, t, e, A) {
  return SA(t - -619, i);
}
const Bo = at(void (20 * -19 + 7276 + -6896));
function _i(o, i, t, e, A) {
  return SA(t - 994, e);
}
Bo[_i(1496, 1517, 1503, "EP8O") + _i(1533, 1523, 1524, "lN&t") + "e"] = Vi(-82, "T3B!", -90) + zg(663, "iO%l", 656) + zg(647, "Y$tU", 664);
function so() {
  const o = ["wexdH8kLDq", "iHaTWOyqdv5p", "caNcVCo2lmkWDCovgh/dGGVcIe0", "W5WRWQVcICkGWO1/sG", "WPVcRXpcV8kf", "W5j7WQVcUSk+W6a1sa", "WPhcJGDJWQ17W4Ow", "W4xdL8oufKVdGSk2CKj1gHRcJG", "uJZdQq/cKmkHaCkUvSkKd8oDW4y", "W5q1iMVcMcVdJXnxe8oejmkqlG", "j8oPFSkqWQK", "y8oUAq", "hbldKSkmCSohmCodhHjQv8kV", "ySkqWP1CW4dcGvS8", "W7RdRwG4WPW", "qaRdSSorW5a", "jCokW4VcJI0+WO3cQbC", "WPdcJ8kvuHy", "W5VdNqlcTmkIW6apW6H6", "W4ddHmojqmkPfGqEeSoYW5ldKmoa", "m0WqWQ8P", "iHeaWO82axrs", "AwtcOCoNWRa", "W6a0o8oQWQ8", "WR/cLL89W7v4tSofWQRdNtu", "jrjqWQqSb0D7wa", "W63dSmozWPGc", "CSoeWQ8DFhddIeFdMeaCW7Sp", "dW/cVmk8ACoObmkaea", "wCkQhCkHwa", "W57dUN86", "W5v+W7NcQCkoW5iLB1a", "W5mXlIVdINhcP0jb", "W4RcHemNaW", "hbddLmkkCmkFFmoqntXW", "lSolW4FdUKPLW73cJthdPW7dO8kQ", "WPOoW6aZt0JcOe4QwJq", "W6pcSHFcVCoq"];
  return so = function() {
    return o;
  }, so();
}
function Gc(o, i, t, e, A) {
  return SA(i - 833, A);
}
function SA(o, i) {
  const t = so();
  return SA = function(e, A) {
    e = e - (83 * -11 + -7740 + -2 * -4574);
    let n = t[e];
    if (SA.obKGWy === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      SA.zyGtFD = C, o = arguments, SA.obKGWy = !0;
    }
    const a = t[0], x = e + a, I = o[x];
    return I ? n = I : (SA.HZvvvZ === void 0 && (SA.HZvvvZ = !0), n = SA.zyGtFD(n, A), o[x] = n), n;
  }, SA(o, i);
}
function k0() {
  function o(n, g, a, x, I) {
    return Vi(n - 376, g, a - 618);
  }
  function i(n, g, a, x, I) {
    return Gc(n - 495, I - -1760, a - 446, x - 205, a);
  }
  function t(n, g, a, x, I) {
    return _i(n - 385, g - 3, x - -71, a);
  }
  const e = Ge(Bo);
  if (e === void (129 * 72 + -7074 + -738 * 3)) throw new Error(Bo[i(-430, -425, "ii5m", -406, -420) + i(-445, -424, "4g[G", -426, -431) + "e"] + (i(-420, -410, "YG%M", -428, -415) + o(512, "hQ1@", 501) + o(531, "b%#1", 524) + t(1439, 1440, "*jjr", 1438) + t(1433, 1433, "Z58k", 1441) + t(1443, 1438, "NaB$", 1444) + A(-113, "Y$tU") + A(-116, "hQ1@")));
  function A(n, g, a, x, I) {
    return Vi(n - 168, g, n - 0);
  }
  return e;
}
const i0 = (o) => o.length < -9668 + -793 * -2 + -59 * -137 ? 1 * 7163 + 13 * -283 + -1742 * 2 : o.reduce((t, e) => t + e, 0) / o.length, ke = (o) => Number.parseFloat(o.toFixed(-90 + -2579 * 3 + 7830)), Sc = (o) => {
  const i = o.getContext("2d");
  i && i.clearRect(5881 * 1 + 1487 + 7368 * -1, 3 * -337 + -8240 + 29 * 319, i.canvas.width, i.canvas.height);
}, Yx = -9588 + -5 * 937 + -1 * -14273 + 0.75, Nc = -7530 + 28 * 269, Fc = 6242 + -331 * -7 + -7959, Rc = 0, Wc = "dot-auto-capture-video", ei = (o, i) => Math.min(o, i), Ox = ({ height: o, width: i }, t) => {
  const e = ei(i, o) * t, A = (i - e) / (1480 + -136 * 47 + -182 * -27), n = (o - e) / (179 * -5 + 2 * -1609 + 823 * 5), g = {};
  return g.shiftX = A, g.shiftY = n, g.width = e, g.height = e, g;
}, Mc = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = Ox(o, i), g = {};
  return g.shiftX = e / o.width, g.shiftY = A / o.height, g.width = n / o.width, g.height = t / o.height, g;
}, vc = ({ height: o, width: i }) => {
  const t = ei(i, o), e = t / (-1 * 1308 + 110 * -1 + 1421) * (-9966 + -2 * -4985);
  if (i > o) {
    const n = {};
    return n.width = e, n.height = t, n;
  }
  const A = {};
  return A.width = t, A.height = e, A;
}, Lc = (o, i) => {
  const t = ei(i.width, i.height);
  return ke(o * t);
}, Jc = ({ height: o, width: i }) => {
  const t = {};
  return t.height = o, t.width = i, Ox(t, Yx);
}, Uc = (o) => Mc(o, Yx), Yc = (o, i) => Lc(o, i) * Nc, Oc = "@innovatrics/dot-common-auto-capture", Hc = "7.3.2", Kc = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, Pc = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, Tc = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, qc = {
  name: Oc,
  private: !0,
  version: Hc,
  scripts: Kc,
  dependencies: Pc,
  devDependencies: Tc
}, jc = 4127 * 1 + -4051 + 1 * -67 + 0.8100000000000005, X0 = {};
X0.minDuration = 1e3, X0.maxDuration = 2500, X0.minFrames = 10;
const di = X0, Xi = {};
Xi.max = 100, Xi.min = 10;
const $g = Xi, Zc = -2603 + 695 * -13 + 12358, Vc = -59 * -139 + 1 * 2866 + 10867 * -1, _c = -5861 + -115 * -51, Tt = {};
Tt.width = 200, Tt.height = 200, Tt.top = 50, Tt.left = 50;
const Xc = Tt, Qo = "AES-CBC", Hx = "RSA-OAEP", zc = "SHA-256", $c = "image/jpeg", AB = 4104 + 1 * -8626 + 4530, eB = -2138 + 61 * -89 + 7607 * 1, Kx = "/dot-assets", Aa = "dot_embedded_bg.wasm", jn = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent);
function ea() {
  return /Android/i.test(navigator.userAgent);
}
function n0() {
  return /Firefox/i.test(navigator.userAgent);
}
const tB = () => {
  const o = navigator.userAgent.includes("Chrome"), i = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && i ? !1 : i;
}, zi = (o) => new Promise((i) => {
  setTimeout(i, o);
}), Px = (o) => JSON.parse(JSON.stringify(o, (i, t) => typeof t == "number" ? ke(t) : t)), Tx = () => qc.version, qx = (o) => new URL(o).hostname.replace("www.", ""), oB = () => qx(window.location.href) === "localhost", J0 = (o) => Object.entries(o).map(([i, t]) => encodeURIComponent(i) + "=" + encodeURIComponent(t)).join("&"), iB = (o, i) => JSON.stringify(o) === JSON.stringify(i) ? i : o;
function nB(o, i) {
  let t;
  return (...e) => {
    t === void 0 && (t = setTimeout(() => {
      clearTimeout(t), t = void 0, o(...e);
    }, i));
  };
}
function gB(o) {
  return o.at(-(-4469 + 9487 * -1 + 13957)) === "/" ? o.slice(-1437 + 1 * 2069 + -4 * 158, -(7563 * -1 + -2598 + 10162)) : o;
}
function jx(o) {
  return "" + gB(o ?? "") + Kx;
}
function $t() {
  return !1;
}
const aB = () => "prod".toLowerCase() === "dev";
var Me;
class Zn extends Array {
  constructor(t) {
    super();
    P(this, Me);
    H(this, Me, t);
  }
  get size() {
    return w(this, Me);
  }
  pushFixed(...t) {
    if (t.length > w(this, Me)) {
      const e = t.slice(-w(this, Me));
      this.push(...e);
      return;
    }
    this.length === w(this, Me) && this.splice(-6 * -20 + 1427 + -1547, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(6918 + 2306 * -3);
  }
}
Me = new WeakMap();
const Zx = (o, i, t = $c) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, i);
}), xB = async (o) => Zx(o, 8145 + -1611 * 5), IB = async (o) => Zx(o, -1729 + 3795 * 1 + -1966 * 1, "image/png"), Vx = (o, i) => {
  const t = document.createElement("canvas");
  t.width = i.width, t.height = i.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, i.shiftX, i.shiftY, i.width, i.height, 0, -2697 + 899 * 3, t.width, t.height), t;
}, rB = (o) => {
  const i = o.getContext("2d");
  if (!i) throw new Error("getImageDataForSam ctx error");
  const { data: t } = i.getImageData(0, 1 * -2113 + 1747 * -2 + 5607, o.width, o.height);
  return t;
};
function ta(o, i, t) {
  return t - i / (-2035 + -5 * -1766 + -6793) < 6902 + -1 * 8917 + 2015 ? -1946 + -1 * -1946 : t + i / (8216 + -4673 * -1 + -12887) > o ? o - i : t - i / (-14 * 163 + 4887 + -2603 * 1);
}
function CB(o, i) {
  const t = o.width, e = o.height, A = t * (i.left / (5295 + 3671 * -1 + -508 * 3)), n = e * (i.top / (-1 * -2427 + 4 * -1346 + 1019 * 3));
  return { width: i.width, height: i.height, shiftX: ta(t, i.width, A), shiftY: ta(e, i.height, n) };
}
async function cB(o, i) {
  const t = CB(o, i), e = Vx(o, t);
  return IB(e);
}
const _x = (o, i, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), e ? (A.fillStyle = t, A.fillRect(i.topLeft.x, i.topLeft.y, i.width, i.height)) : (A.strokeStyle = t, A.rect(i.topLeft.x, i.topLeft.y, i.width, i.height)), A.stroke());
}, li = (o, i, t) => {
  const { height: e, shiftX: A, shiftY: n, width: g } = i, a = {};
  a.x = A, a.y = n;
  const x = {};
  x.topLeft = a, x.width = g, x.height = e, x.color = t, _x(o, x, t);
}, A0 = (o, i, t, e = 34 * 58 + -1792 * -1 + 941 * -4) => {
  const A = o.getContext("2d");
  A && (A.fillStyle = t, A.fillRect(i.x + e, i.y + e, -1550 * 2 + 501 * 14 + -3907, -8466 + 1 * 2217 + -17 * -368), A.beginPath());
}, BB = (o, i) => {
  const { height: t, shiftX: e, shiftY: A, width: n } = i;
  return !(o.x < e || o.x > e + n || o.y < A || o.y > A + t);
}, sB = (o, i) => Object.values(o).every((t) => BB(t, i));
function Eo(o) {
  const { height: i, width: t } = vc(o), e = (o.width - t) / (9 * -213 + -2 * 4289 + 1 * 10497), A = (o.height - i) / (-5886 + 1 * -5318 + 11206), n = {};
  return n.shiftX = e, n.shiftY = A, n.width = t, n.height = i, n;
}
function Xx(o, i, t) {
  const { height: e, width: A } = t, n = ei(o.width, o.height), g = A - n * i * (-961 * 5 + 2756 * 3 + -3461), a = e - n * i * (-8752 + -1 * -8754), x = (o.width - g) / (-17 * -17 + -34 * -181 + -57 * 113), I = (o.height - a) / 2, C = {};
  return C.shiftX = x, C.shiftY = I, C.width = g, C.height = a, C;
}
function Ct(o, i) {
  const { shiftX: t, shiftY: e } = i, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
(function(o, i) {
  function t(x, I, C, r, Q) {
    return fA(r - -560, x);
  }
  function e(x, I, C, r, Q) {
    return fA(r - -126, Q);
  }
  function A(x, I, C, r, Q) {
    return fA(r - 17, x);
  }
  const n = o();
  function g(x, I, C, r, Q) {
    return fA(C - 540, I);
  }
  function a(x, I, C, r, Q) {
    return fA(C - -645, Q);
  }
  for (; ; )
    try {
      if (parseInt(t("ybT$", -316, -339, -328, -316)) / 1 * (-parseInt(a(-420, -421, -423, -432, "YWi!")) / 2) + parseInt(t("Dupn", -350, -344, -353, -347)) / 3 + parseInt(a(-452, -441, -440, -430, "baAu")) / 4 * (parseInt(A("1#5t", 259, 246, 251, 247)) / 5) + parseInt(A("PQ[C", 234, 226, 226, 232)) / 6 + parseInt(g(759, "X)Ef", 765, 767, 776)) / 7 * (parseInt(a(-406, -423, -415, -402, "cWfF")) / 8) + -parseInt(A("GzV[", 238, 243, 248, 251)) / 9 * (parseInt(A("z!@e", 220, 249, 236, 242)) / 10) + -parseInt(A("qSp]", 247, 237, 232, 224)) / 11 * (parseInt(e(70, 89, 93, 84, "QD11")) / 12) === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(lo, 1487 * -701 + -999029 + 2736424);
function fA(o, i) {
  const t = lo();
  return fA = function(e, A) {
    e = e - (-8697 * -1 + 5410 + -13902);
    let n = t[e];
    if (fA.jIqTVs === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      fA.lSJOfA = C, o = arguments, fA.jIqTVs = !0;
    }
    const a = t[8792 + -1256 * 7], x = e + a, I = o[x];
    return I ? n = I : (fA.cUCnaB === void 0 && (fA.cUCnaB = !0), n = fA.lSJOfA(n, A), o[x] = n), n;
  }, fA(o, i);
}
function lo() {
  const o = ["kCkIb8kRWRa", "WPKSW7tdHSo/n8kuW6e", "oLNcQrZcTCogWOFcP1NdT8oAWOldMa", "ySo9W6hdVq7cOWVcUvRdSKKDW4K", "aSorW6j7WO8", "wmkutCkJj8kJe8kLfuehC8o7", "EmoYwCoOW603m8kXbJFdLCo2", "W6tcOSk7WPiSsbKfeG", "emoNqHfrWQPqaWFdHq", "W6xdOCk5W45WFSoVeCoh", "FbOUW4NdS2KCWQ4iiSkVl0u", "W6a/EmkjW7/dHH4RWPy", "W6dcOSk1WRCm", "W4RdRSo/WPPMW4fbW5i", "vmkUW5KgW7u", "aCk0W7vwW74CWRSq", "md9AjW0", "A0WAumoScmkwwSkG", "e8kDv8odW5pcSutcTSkB", "CCknamoIca", "yCkeW7zEWPvouSoP", "waWLESo6iaFcI23cOW", "mrfaqa", "W5bTeSkzWRldLmo0xmott8o3", "FmoXuCoHW6qYf8k0bcRdUCo4", "eCoKsHezW4WZbt7dKXxdISkD", "WRhcPuJcGCk2WOuBWObtW5NdSq", "sw9Kqmo6z2n8jmkCa8k3WOC", "WPNcQZnsjHNcNxtdNW", "xGKSF8kZrqhcGgFcImoqW6e", "CmonbIHFE8o7WOVdIG/cU8kV"];
  return lo = function() {
    return o;
  }, lo();
}
function QB({ assetsDirectoryPath: o, bramble: i }) {
  const [t, e] = NA(), A = t !== void (10 * -672 + -6 * -266 + 244 * 21);
  function n(x, I, C, r, Q) {
    return fA(Q - 424, I);
  }
  X(() => {
    async function x() {
      function I(r, Q, c, E, d) {
        return fA(Q - 407, d);
      }
      function C(r, Q, c, E, d) {
        return fA(c - 581, E);
      }
      await i[I(636, 633, 648, 643, "qOZT")](jx(o)), e(i[I(633, 623, 633, 612, "yltd") + C(814, 818, 816, "QD11") + C(800, 783, 789, "C(&o") + "t"]());
    }
    x();
  }, [i, o, e]);
  const g = {};
  g[a("]rbj", -212, -198) + a("6UAe", -187, -201)] = t, g[n(633, "azx]", 631, 653, 642) + "sh"] = A;
  function a(x, I, C, r, Q) {
    return fA(C - -421, x);
  }
  return g;
}
var zx = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(zx || {});
const $i = {};
$i.SIMD = "simd", $i.NO_SIMD = "no-simd";
const oa = $i, An = {};
An.Lower = "Lower", An.Higher = "Higher";
const en = An, z0 = {};
z0.VISIBLE = "VISIBLE", z0.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", z0.HIDDEN = "HIDDEN";
const uo = z0, tn = {};
tn.MOBILE = "MOBILE", tn.DESKTOP = "DESKTOP";
const ia = tn;
(function(o, i) {
  function t(x, I, C, r, Q) {
    return MA(I - 655, r);
  }
  var e = o();
  function A(x, I, C, r, Q) {
    return MA(r - -622, x);
  }
  function n(x, I, C, r, Q) {
    return MA(r - -396, Q);
  }
  function g(x, I, C, r, Q) {
    return MA(r - -399, C);
  }
  for (; ; )
    try {
      var a = parseInt(g(-162, -154, "j$D4", -152, -155)) / 1 + parseInt(n(-144, -140, -146, -141, "$lGk")) / 2 * (-parseInt(t(909, 900, 901, "a]oB", 891)) / 3) + -parseInt(A("EijF", -385, -371, -374, -383)) / 4 + -parseInt(A("FS2F", -379, -369, -379, -387)) / 5 + parseInt(A("a]oB", -358, -365, -363, -372)) / 6 + parseInt(t(920, 913, 916, "dDx[", 903)) / 7 + -parseInt(t(912, 905, 903, "^g&S", 916)) / 8 * (-parseInt(n(-141, -132, -144, -134, "aXHm")) / 9);
      if (a === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ho, 162235);
function MA(o, i) {
  var t = ho();
  return MA = function(e, A) {
    e = e - (2465 + 82 * 83 + -1 * 9029);
    var n = t[e];
    if (MA.UfhZpm === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (var p = 0, G = c.length; p < G; p++)
          E += "%" + ("00" + c.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var c = [], E = 0, d, l = "";
        r = g(r);
        var B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      MA.aLGVMI = a, o = arguments, MA.UfhZpm = !0;
    }
    var x = t[14 * 66 + -74 * 70 + 4256], I = e + x, C = o[I];
    return C ? n = C : (MA.PyanEx === void 0 && (MA.PyanEx = !0), n = MA.aLGVMI(n, A), o[I] = n), n;
  }, MA(o, i);
}
function ho() {
  var o = ["W50MA8oBW4NcI8kg", "qgBdICodWPe", "WRZcUtC2DutdLaddRdNcHNa", "W6LLatpdLSkyEdvEFaZcTq", "WRe/W7qqWOihWR9sW7OyEXK", "hSkIW4hdLeFdKmkJhG", "zJpdSSoFAG", "B1XcWPtcQmkzfmoW", "oSoZbmkmyuJcP8oOmSoaWQ8", "FteXWQFdJwpcGeRcQYZdM0O", "dhn6p0FdI8kIWOxcSCk4AG", "WOfUdSk5WOy", "A8oofgK9afe", "fSouW6DYuavSW5FdNCkpWQTP", "W59ggmk5WRFdS8oCW6BcQZ7cM8kvW5O", "Cc7cMHnrgSoYW6Saw8oHja", "qcxcOu1HFmoFW4a0fHS", "WOFdJSktv8kbW6Sus3LZnq", "gLTUsfpcNqlcP8oNyh10WR4", "jfeKpCkkkXGLkmoQW53dOqS", "WO1QW69lamojWOldISokW5xcTXCJ"];
  return ho = function() {
    return o;
  }, ho();
}
function EB({ crosshatch: o }) {
  function i(A, n, g, a, x) {
    return MA(g - 822, n);
  }
  function t(A, n, g, a, x) {
    return MA(x - 25, A);
  }
  function e(A, n, g, a, x) {
    return MA(A - -267, g);
  }
  return o != null && o[e(-21, -13, "7229") + "id"] ? en[t("4cqd", 282, 278, 271, 276) + "r"] : en[i(1078, "$uOM", 1078)];
}
(function(o, i) {
  const t = o();
  function e(a, x, I, C, r) {
    return pA(x - -724, I);
  }
  function A(a, x, I, C, r) {
    return pA(I - 668, C);
  }
  function n(a, x, I, C, r) {
    return pA(a - 398, I);
  }
  function g(a, x, I, C, r) {
    return pA(x - 677, C);
  }
  for (; ; )
    try {
      if (-parseInt(n(534, 535, "k)Us", 548, 519)) / 1 + parseInt(n(513, 522, "6pyk", 515, 514)) / 2 * (-parseInt(A(801, 783, 787, "etC5", 790)) / 3) + parseInt(n(530, 527, "Xn%R", 519, 524)) / 4 * (-parseInt(g(775, 789, 785, "HZ*B", 781)) / 5) + parseInt(g(809, 803, 818, "jvlK", 793)) / 6 + parseInt(e(-591, -603, "vmA6", -605, -618)) / 7 + -parseInt(e(-605, -604, "VUlB", -607, -597)) / 8 + -parseInt(e(-613, -606, "M*t1", -601, -615)) / 9 * (-parseInt(e(-589, -585, "RQ5G", -592, -598)) / 10) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(fo, 825649 + -9923 * -68 + -590 * 865);
function pA(o, i) {
  const t = fo();
  return pA = function(e, A) {
    e = e - (128 * -4 + -3779 + -71 * -62);
    let n = t[e];
    if (pA.WoPnJi === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      pA.xFQfFh = C, o = arguments, pA.WoPnJi = !0;
    }
    const a = t[3789 + 1 * -8468 + 4679 * 1], x = e + a, I = o[x];
    return I ? n = I : (pA.uOeRsf === void 0 && (pA.uOeRsf = !0), n = pA.xFQfFh(n, A), o[x] = n), n;
  }, pA(o, i);
}
function fo() {
  const o = ["WROxWR/dRcRdRSkzWOjXW7b0dmkP", "WOOWWPOQWRLoW5rsWPn+amkl", "WQieCmo9WQS2tHHVtmkIjr0", "uMldSmoz", "fNBdHmoIWPO", "wrrcW73dS2pdMqtcUstcKd0wDW", "WO03WPeRW40tW4noWQfw", "h1BdOG", "tdnAlqboW4pcOmoLWPS", "bNmcsXu", "WQ4BbmkIWOeter3cGCoWWOD0", "xe7cNeVdNX7cG8kmW6GdgY8", "z8knl8ktbG", "WQ4NrJVdVCoDWQbJWR5i", "W4xcHmovc8kA", "c2ebAbW", "AMldSmosW7K", "xK3cNKVdKNxcMCkmW70cnG", "uvNdJu/cIa", "W4lcHwhdTSoqC8oRWOfvqMaD", "WQGuFmo6WPxdKSoUW4i", "W69dW7K", "WPNdL8oko2y", "W6ZdTCkUWOybkcOcdSkYrxq", "xZO9W4NdOmoCsCkOW7dcTaxdPG", "WO9kW6tcKmklWQ14WPv6wHdcHSkhFq", "lM3dV1FcHaBdJ8okcXxcN8k4WO/dRG", "hMGeCr0", "W5CId8kcDSkjBmkL", "W53dUaCVzNCTdCk5W4G", "n8okB8oar8kdxCkaWOm1uW"];
  return fo = function() {
    return o;
  }, fo();
}
function dB({ assetsDirectoryPath: o, children: i, bramble: t }) {
  const e = {};
  function A(E, d, l, B, h) {
    return pA(h - -555, E);
  }
  e[Q(-432, -446, -449, -439, "mAo%") + "le"] = t, e[Q(-405, -420, -406, -414, "E*hX") + Q(-415, -437, -412, -422, "b%%&") + a(507, 509, "6wPP") + a(519, 514, "kzv%")] = o;
  const { sunfish: n, crosshatch: g } = QB(e);
  function a(E, d, l, B, h) {
    return pA(E - 390, l);
  }
  const x = {};
  x[c(117, 95, 108, "4rLO") + I(814, 812, 842, "kzv%", 828)] = g;
  function I(E, d, l, B, h) {
    return pA(h - 717, B);
  }
  const C = LA(() => ({ redfin: EB(x), sunfish: n, crosshatch: g, bramble: t }), [n, g, t]), r = {};
  r[Q(-422, -413, -396, -411, "eic%")] = C, r[Q(-417, -442, -418, -430, "eic%") + I(844, 863, 842, "f#JX", 850)] = i;
  function Q(E, d, l, B, h) {
    return pA(B - -552, h);
  }
  function c(E, d, l, B, h) {
    return pA(l - -27, B);
  }
  return y(Bo[c(124, 111, 113, "nm1K") + A("jvlK", -449, -454, -437, -439)], r);
}
(function(o, i) {
  function t(x, I, C, r, Q) {
    return ee(x - -801, Q);
  }
  function e(x, I, C, r, Q) {
    return ee(I - 383, C);
  }
  function A(x, I, C, r, Q) {
    return ee(x - 401, r);
  }
  var n = o();
  function g(x, I, C, r, Q) {
    return ee(C - 949, Q);
  }
  for (; ; )
    try {
      var a = parseInt(A(716, 709, 708, "gr1%", 717)) / 1 * (-parseInt(A(727, 735, 718, "ZSZa", 723)) / 2) + -parseInt(g(1270, 1273, 1267, 1261, "2%A*")) / 3 + parseInt(A(731, 724, 740, "n[yU", 733)) / 4 + -parseInt(A(717, 708, 712, "Ycq#", 722)) / 5 + -parseInt(g(1260, 1265, 1261, 1254, "EcZF")) / 6 * (-parseInt(A(726, 730, 734, "Kd^w", 717)) / 7) + -parseInt(e(715, 706, "qxiD", 716, 708)) / 8 * (parseInt(t(-481, -471, -474, -486, "YRLz")) / 9) + parseInt(g(1284, 1275, 1278, 1277, "Rdn&")) / 10;
      if (a === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(po, -998409 * 1 + 1083285 + 548050);
function ee(o, i) {
  var t = po();
  return ee = function(e, A) {
    e = e - 311;
    var n = t[e];
    if (ee.HflOHz === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (var p = 0, G = c.length; p < G; p++)
          E += "%" + ("00" + c.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var c = [], E = 0, d, l = "";
        r = g(r);
        var B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      ee.NMUgtf = a, o = arguments, ee.HflOHz = !0;
    }
    var x = t[0], I = e + x, C = o[I];
    return C ? n = C : (ee.bAdPcP === void 0 && (ee.bAdPcP = !0), n = ee.NMUgtf(n, A), o[I] = n), n;
  }, ee(o, i);
}
function po() {
  var o = ["cmkljLxcSeJcRGiF", "WRJdGmkEWOTyv1RcSSos", "WP/dJmkfW7VdOqOeWRlcO8kSt8o5fa", "rbhdUCkorYLEW7NdQCoyCgfy", "WPVcK2hdGCkMrCoejSkCWRO1sG", "FSk8dCkEbwFcNYhdSCo0vq4", "ymkFeCo+W4RcUSonW67cLmoqwq", "obOqW7RdLSkWufT/uq", "W6TzpSoOWOj7aSk8WRSW", "W65ssmkxWPyTi8kvW4aAWQm", "WQb1tKNdObTUyx3dR3LNWPZdIa", "qCoMvbPaWONdG8ooWP49WQ02ha", "WOSPWPe3BSodWPiqCxfHjCkiWQm", "p3lcHCoeWRfSFG", "ab4dW7iFb8kXWQa7WP3cH8kR", "c8oGxSojWRxdO8kL", "W6tdUaDZW5lcPCosBa", "CatdG8ozntnbxMhdTCoDW47cVa", "Fmk9tCoSFZlcLXW", "bSogW6X6bCoqEmoRW5xcL2K3"];
  return po = function() {
    return o;
  }, po();
}
function lB({ analytics: o, crosshatch: i }) {
  return i !== void (3688 * 2 + -26 + -7350) && !i.isAnalyticsDisabled ? o : void (-5810 + 14 * 415);
}
function uB({ analytics: o, appKey: i, redfin: t, crosshatch: e, bramble: A }) {
  const n = {};
  n.analytics = o, n.crosshatch = e;
  const g = lB(n);
  return X(() => {
    g && g.init(i);
  }, [g, i]), X(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), g && g.walleye(t, A.getCustomerName()));
  }, [g, A, e, t]), X(() => {
    if (g)
      return window.addEventListener("beforeunload", g.endSession), () => {
        g.endSession(), window.removeEventListener("beforeunload", g.endSession);
      };
  }, [g]), g;
}
function hB({
  analytics: o,
  appKey: i,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: n } = k0(), g = uB({ analytics: o, redfin: e, appKey: i, crosshatch: A, bramble: n }), a = LA(
    () => ({
      analytics: g
    }),
    [g]
  );
  return /* @__PURE__ */ y(co.Provider, { value: a, children: t });
}
const Vn = at(void 0);
Vn.displayName = "CameraOptionsContext";
function $x() {
  const o = Ge(Vn);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}
function fB({
  assetsDirectoryPath: o,
  captureMode: i,
  onPhotoTaken: t,
  sessionToken: e
}) {
  return {
    onPhotoTaken: t,
    captureMode: i ?? Zi.AUTO_CAPTURE,
    assetsDirectoryPath: jx(o),
    sessionToken: e
  };
}
function pB({
  cameraOptions: o,
  children: i
}) {
  const t = LA(() => fB(o), [o]);
  return /* @__PURE__ */ y(Vn.Provider, { value: t, children: i });
}
const yB = (o, i) => {
  const t = {};
  t.detail = i, document.dispatchEvent(new CustomEvent(o, t));
}, Ko = class Ko {
  constructor() {
    b(this, "lastDetails", {});
    b(this, "delayedTime", 2363 * 1 + 3584 + -1 * 5947);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ko()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 1 * 523 + 401 + -42 * 22;
  }
  isDetailChanged(i, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[i]) ? (this.lastDetails[i] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(i, t) {
    this.isDetailChanged(i, t) && yB(i, t);
  }
  dispatchDelayedCustomEventOnChange(i, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(i, t), this.delayedTime = A);
  }
};
b(Ko, "_instance");
let g0 = Ko;
const Mt = g0.getInstance(), AI = (o, i, t = Fc) => {
  const e = {};
  e.instructionCode = i.code, e.isEscalated = i.isEscalated ?? !1;
  const A = e;
  Mt.dispatchDelayedCustomEventOnChange(o, A, t);
}, na = (o, i) => {
  Mt.dispatchCustomEventOnChange(o, i);
}, DB = (o, i) => {
  Mt.dispatchCustomEventOnChange(o, i);
}, mB = (o, i) => {
  const t = {};
  t.size = i;
  const e = t;
  Mt.dispatchCustomEventOnChange(o, e);
}, wB = (o, i, t) => {
  const e = i.confidence < t ? void 0 : i, A = {};
  A.detectedObject = e;
  const n = A;
  Mt.dispatchCustomEventOnChange(o, n);
}, bB = (o, { detection: i, fps: t, image: e, invalidValidators: A, isInCandidateSelection: n }) => {
  const g = {};
  g.image = e, g.data = {}, g.data.detection = i, g.data.fps = t, g.data.isInCandidateSelection = n, g.data.invalidValidators = A, g.data.imageResolution = {}, g.data.imageResolution.width = e.width, g.data.imageResolution.height = e.height;
  const a = g;
  Mt.dispatchCustomEventOnChange(o, a);
}, kB = (o, i) => {
  const { cameraResolution: t, shouldCameraMirror: e } = i;
  X(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, DB(o, A);
  }, [t, e, o]);
};
function GB(o, i) {
  X(() => {
    const t = (e) => {
      i(e);
    };
    return document.addEventListener(o, t), () => {
      document.removeEventListener(o, t);
    };
  }, [i, o]);
}
const SB = (o) => o === vx.CONTROL ? !jn() : !0;
function NB(o, i) {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: n } = Ye(), [g, a] = NA(), x = LA(() => {
    const E = n && i && i.isStreaming && i.getCameraSettings().facingMode;
    return E ? g ?? E === "user" : g ?? SB(o);
  }, [i, g, o, n]);
  function I() {
    t !== lA.LOADING && e(lA.RUNNING);
  }
  function C() {
    g === void (-7323 + -235 * 11 + -2477 * -4) ? a(!x) : a(!g);
  }
  async function r() {
    if (i) {
      e(lA.LOADING);
      try {
        await i.switchCamera(), e(lA.RUNNING);
      } catch (E) {
        if (E instanceof Error) {
          A(L.fromCameraError(E));
          return;
        }
      }
      a(void 0);
    }
  }
  function Q(E) {
    var d;
    switch ((d = E.detail) == null ? void 0 : d["instruction"]) {
      case Qi.CONTINUE_DETECTION:
        I();
        break;
      case Qi.TOGGLE_MIRROR:
        C();
        break;
      case Qi.SWITCH_CAMERA:
        r();
        break;
      default:
        return;
    }
  }
  GB(o, Q);
  const c = {};
  return c.shouldCameraMirror = x, c;
}
function FB(o, i) {
  X(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      mB(i, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, i]);
}
function RB(o) {
  return ke(Math.abs(o));
}
const WB = () => {
  const [o, i] = NA(null), t = jA(new Zn(8458 * -1 + 9812 + 1349 * -1));
  function e(n) {
    const { z: g } = n.accelerationIncludingGravity || {};
    if (!g) return;
    t.current.pushFixed(RB(g));
    const a = ke(i0(t.current)), x = {};
    x.z = a, i(x);
  }
  X(() => (window.addEventListener("devicemotion", nB(e, eB), !0), () => {
    window.removeEventListener("devicemotion", e, !0);
  }), []);
  const A = {};
  return A.acceleration = o, A;
};
var MB = Symbol.for("preact-signals");
function _n() {
  if (ut > -5521 + -1 * -929 + 1 * 4593)
    ut--;
  else {
    for (var o, i = !1; void (-3957 + 3957 * 1) !== e0; ) {
      var t = e0;
      for (e0 = void (-1 * 339 + 155 * 11 + -1366), on++; t !== void 0; ) {
        var e = t.o;
        if (t.o = void (4 * -2204 + 6339 * 1 + -2477 * -1), t.f &= -(4399 * -1 + 2130 + 1136 * 2), !(8 * 747 + -1168 + -4800 & t.f) && oI(t)) try {
          t.c();
        } catch (A) {
          !i && (o = A, i = !(-8 * 439 + 1 * 6539 + -3027));
        }
        t = e;
      }
    }
    if (on = 0, ut--, i) throw o;
  }
}
var Z = void (-8367 * -1 + 5 * 109 + -8912), e0 = void (-1 * -7391 + 4 * -923 + -9 * 411), ut = -6739 + -6 * 574 + 10183, on = 0, yo = 0;
function eI(o) {
  if (void (1278 + 881 * -3 + 1365) !== Z) {
    var i = o.n;
    if (void (-47 * -102 + 6227 + -11021) === i || i.t !== Z)
      return i = { i: 0, S: o, p: Z.s, n: void (-95 * 57 + -5 * -1624 + -1 * 2705), t: Z, e: void (-1 * 5372 + 671 * 1 + 3 * 1567), x: void (-7345 + 130 * 34 + 225 * 13), r: i }, void (1 * -9398 + -95 * -103 + -1 * 387) !== Z.s && (Z.s.n = i), Z.s = i, o.n = i, -1078 + -185 * -6 & Z.f && o.S(i), i;
    if (-(183 * 29 + -8 + -1 * 5298) === i.i)
      return i.i = 649 * -8 + -6123 * 1 + 11315, void (5688 + -1 * 5688) !== i.n && (i.n.p = i.p, void (1 * 3769 + 15 * 7 + -3874) !== i.p && (i.p.n = i.n), i.p = Z.s, i.n = void (-2 * 2785 + -1061 + 6631 * 1), Z.s.n = i, Z.s = i), i;
  }
}
function hA(o) {
  this.v = o, this.i = -9547 * 1 + -7376 + -5641 * -3, this.n = void (-8775 * 1 + 2935 * -1 + -11710 * -1), this.t = void 0;
}
hA.prototype.brand = MB, hA.prototype.h = function() {
  return !(-5227 * -1 + -5610 + -383 * -1);
}, hA.prototype.S = function(o) {
  this.t !== o && void (-4470 + -1 * -2938 + 1532) === o.e && (o.x = this.t, void (2 * -3083 + 5096 * -1 + 6 * 1877) !== this.t && (this.t.e = o), this.t = o);
}, hA.prototype.U = function(o) {
  if (this.t !== void 0) {
    var i = o.e, t = o.x;
    void (1 * 794 + -17 * -11 + 1 * -981) !== i && (i.x = t, o.e = void (1262 + -328 * -9 + -2107 * 2)), void (1155 + -1 * -8095 + -9250) !== t && (t.e = i, o.x = void (4 * -1766 + -13 * -657 + -1477)), o === this.t && (this.t = t);
  }
}, hA.prototype.subscribe = function(o) {
  var i = this;
  return zn(function() {
    var t = i.value, e = Z;
    Z = void 0;
    try {
      o(t);
    } finally {
      Z = e;
    }
  });
}, hA.prototype.valueOf = function() {
  return this.value;
}, hA.prototype.toString = function() {
  return this.value + "";
}, hA.prototype.toJSON = function() {
  return this.value;
}, hA.prototype.peek = function() {
  var o = Z;
  Z = void (-6149 + -143 * -43);
  try {
    return this.value;
  } finally {
    Z = o;
  }
}, Object.defineProperty(hA.prototype, "value", { get: function() {
  var o = eI(this);
  return void (1 * 6005 + 623 * -11 + 848) !== o && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (on > 509 * 1 + 303 + -178 * 4) throw new Error("Cycle detected");
    this.v = o, this.i++, yo++, ut++;
    try {
      for (var i = this.t; void (-12458 + 6229 * 2) !== i; i = i.x) i.t.N();
    } finally {
      _n();
    }
  }
} });
function tI(o) {
  return new hA(o);
}
function oI(o) {
  for (var i = o.s; void (5150 + -5150 * 1) !== i; i = i.n) if (i.S.i !== i.i || !i.S.h() || i.S.i !== i.i) return !(7379 * -1 + -6811 + 14190);
  return !(2 * -31 + -5007 + 5070);
}
function iI(o) {
  for (var i = o.s; void (1693 + -1693 * 1) !== i; i = i.n) {
    var t = i.S.n;
    if (void (-1 * -6982 + 7535 + 1 * -14517) !== t && (i.r = t), i.S.n = i, i.i = -(4995 + 1 * -4211 + -783), void (1920 + 192 * -10) === i.n) {
      o.s = i;
      break;
    }
  }
}
function nI(o) {
  for (var i = o.s, t = void 0; void (3241 * -1 + -5179 * -1 + -1938) !== i; ) {
    var e = i.p;
    i.i === -1 ? (i.S.U(i), void (-1635 * 1 + 4 * 1059 + -2601) !== e && (e.n = i.n), void (-5075 + 1 * -8177 + 13252) !== i.n && (i.n.p = e)) : t = i, i.S.n = i.r, i.r !== void 0 && (i.r = void (1607 * 1 + 4425 + -6032)), i = e;
  }
  o.s = t;
}
function st(o) {
  hA.call(this, void (2428 * 1 + 7938 + 146 * -71)), this.x = o, this.s = void (-1811 * -1 + -6231 + 1 * 4420), this.g = yo - (-14680 + 277 * 53), this.f = 4;
}
(st.prototype = new hA()).h = function() {
  if (this.f &= -(391 * -2 + 5 * -1441 + 7990), -7708 + -1 * -2207 + 2751 * 2 & this.f) return !(-213 * 16 + -8285 + 11694);
  if (2 * -1977 + 4377 + -391 == (-231 * -13 + 9750 + -12717 & this.f)) return !(7966 + -347 * -3 + 9007 * -1);
  if (this.f &= -(9 * 276 + -317 * -1 + -233 * 12), this.g === yo) return !(1391 + 47 * 144 + -1 * 8159);
  if (this.g = yo, this.f |= 1, this.i > 761 * 13 + 4059 + 436 * -32 && !oI(this)) return this.f &= -(3069 + -2025 * 1 + 2 * -521), !(5 * 33 + 785 * -3 + 2190);
  var o = Z;
  try {
    iI(this), Z = this;
    var i = this.x();
    (267 * -1 + 11 * 548 + -5745 & this.f || this.v !== i || 9953 + 5 * -1536 + -2273 * 1 === this.i) && (this.v = i, this.f &= -(-1 * -4418 + -1320 + -3081), this.i++);
  } catch (t) {
    this.v = t, this.f |= -5927 * 1 + -398 * -17 + -823, this.i++;
  }
  return Z = o, nI(this), this.f &= -(-1190 * -1 + -1083 + 3 * -35), !(-1141 + 81 * -57 + -2879 * -2);
}, st.prototype.S = function(o) {
  if (void (29 * -317 + -755 * 7 + -127 * -114) === this.t) {
    this.f |= -1 * -5721 + -1594 * -3 + -3 * 3489;
    for (var i = this.s; void (-4481 + 1933 * -1 + 3 * 2138) !== i; i = i.n) i.S.S(i);
  }
  hA.prototype.S.call(this, o);
}, st.prototype.U = function(o) {
  if (void (-1 * -1876 + -5227 + -1117 * -3) !== this.t && (hA.prototype.U.call(this, o), void (9592 + 109 * -88) === this.t)) {
    this.f &= -(5949 + -55 * 170 + 3434);
    for (var i = this.s; void (13 + 1 * -13) !== i; i = i.n) i.S.U(i);
  }
}, st.prototype.N = function() {
  if (!(2 * -4513 + 1735 + -39 * -187 & this.f)) {
    this.f |= 11 * -139 + 9 * 239 + -616;
    for (var o = this.t; o !== void 0; o = o.x) o.t.N();
  }
}, Object.defineProperty(st.prototype, "value", { get: function() {
  if (-62 * -74 + -1235 + -3352 & this.f) throw new Error("Cycle detected");
  var o = eI(this);
  if (this.h(), o !== void 0 && (o.i = this.i), 16 & this.f) throw this.v;
  return this.v;
} });
function vB(o) {
  return new st(o);
}
function gI(o) {
  var i = o.u;
  if (o.u = void (-3521 + -2 * 717 + -1 * -4955), typeof i == "function") {
    ut++;
    var t = Z;
    Z = void (1 * -1133 + 5681 + 4548 * -1);
    try {
      i();
    } catch (e) {
      throw o.f &= -(-159 * -44 + -8375 + 1381), o.f |= -16 * 193 + -528 + 1 * 3624, Xn(o), e;
    } finally {
      Z = t, _n();
    }
  }
}
function Xn(o) {
  for (var i = o.s; void (-521 * 9 + -278 * 27 + 45 * 271) !== i; i = i.n) i.S.U(i);
  o.x = void 0, o.s = void 0, gI(o);
}
function LB(o) {
  if (Z !== this) throw new Error("Out-of-order effect");
  nI(this), Z = o, this.f &= -(1 * 7078 + 21 * 148 + 536 * -19), 661 * 2 + -37 * 34 + -56 & this.f && Xn(this), _n();
}
function qt(o) {
  this.x = o, this.u = void (-2 * -2528 + -7030 + 329 * 6), this.s = void (3582 + 3 * -1194), this.o = void 0, this.f = 32;
}
qt.prototype.c = function() {
  var o = this.S();
  try {
    if (19 * -58 + 4217 * -1 + 5327 & this.f || this.x === void 0) return;
    var i = this.x();
    typeof i == "function" && (this.u = i);
  } finally {
    o();
  }
}, qt.prototype.S = function() {
  if (9 * -587 + 877 * 1 + 3 * 1469 & this.f) throw new Error("Cycle detected");
  this.f |= 1, this.f &= -(901 * -1 + -1315 * 2 + -59 * -60), gI(this), iI(this), ut++;
  var o = Z;
  return Z = this, LB.bind(this, o);
}, qt.prototype.N = function() {
  !(2 & this.f) && (this.f |= -37 * 169 + 1 * 178 + 103 * 59, this.o = e0, e0 = this);
}, qt.prototype.d = function() {
  this.f |= -359 + 367 * 1, 4881 + 1957 * 1 + -3 * 2279 & this.f || Xn(this);
};
function zn(o) {
  var i = new qt(o);
  try {
    i.c();
  } catch (t) {
    throw i.d(), t;
  }
  return i.d.bind(i);
}
var ui;
function lt(o, i) {
  J[o] = i.bind(null, J[o] || function() {
  });
}
function U0(o) {
  ui && ui(), ui = o && o.S();
}
function aI(o) {
  var i = this, t = o.data, e = xI(t);
  e.value = t;
  var A = LA(function() {
    for (var n = i.__v; n = n.__; ) if (n.__c) {
      n.__c.__$f |= -12 * 736 + -3608 + 12444;
      break;
    }
    return i.__$u.c = function() {
      var g;
      !Ja(A.peek()) && ((g = i.base) == null ? void (129 * 43 + 631 + -6178) : g.nodeType) === 3 ? i.base.data = A.peek() : (i.__$f |= -5957 + -3 * -1986, i.setState({}));
    }, vB(function() {
      var g = e.value.value;
      return 1 * 5186 + 606 * 2 + 1 * -6398 === g ? 0 : !(1 * 562 + -1 * 8023 + 7461) === g ? "" : g || "";
    });
  }, []);
  return A.value;
}
aI.displayName = "_st";
var nn = {};
nn.configurable = !(-1023 + 2 * -49 + 1121), nn.value = void (-9664 + 8 * 569 + 5112);
var gn = {};
gn.configurable = !(4965 + -512 * -1 + -5477 * 1), gn.value = aI;
var an = {};
an.configurable = !(-1568 + -640 * -1 + 928), an.get = function() {
  var o = {};
  return o.data = this, o;
};
var xn = {};
xn.configurable = !(6050 + 331 * 2 + -6712), xn.value = 1;
var Yt = {};
Yt.constructor = nn, Yt.type = gn, Yt.props = an, Yt.__b = xn, Object.defineProperties(hA.prototype, Yt), lt("__b", function(o, i) {
  if (typeof i.type == "string") {
    var t, e = i.props;
    for (var A in e) if (A !== "children") {
      var n = e[A];
      n instanceof hA && (t || (i.__np = t = {}), t[A] = n, e[A] = n.peek());
    }
  }
  o(i);
}), lt("__r", function(o, i) {
  U0();
  var t, e = i.__c;
  e && (e.__$f &= -(-533 * 13 + 4384 + 9 * 283), (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var n;
    return zn(function() {
      n = this;
    }), n.c = function() {
      e.__$f |= 1, e.setState({});
    }, n;
  }())), U0(t), o(i);
}), lt("__e", function(o, i, t, e) {
  U0(), o(i, t, e);
}), lt("diffed", function(o, i) {
  U0();
  var t;
  if (typeof i.type == "string" && (t = i.__e)) {
    var e = i.__np, A = i.props;
    if (e) {
      var n = t.U;
      if (n) for (var g in n) {
        var a = n[g];
        void (-2600 + -277 * -26 + -4602) !== a && !(g in e) && (a.d(), n[g] = void (3457 * -1 + -2243 * -3 + -3272));
      }
      else t.U = n = {};
      for (var x in e) {
        var I = n[x], C = e[x];
        void (1 * -585 + -3738 + 4323) === I ? (I = JB(t, x, C, A), n[x] = I) : I.o(C, A);
      }
    }
  }
  o(i);
});
function JB(o, i, t, e) {
  var A = i in o && o.ownerSVGElement === void 0, n = tI(t);
  return { o: function(g, a) {
    n.value = g, e = a;
  }, d: zn(function() {
    var g = n.value.value;
    e[i] !== g && (e[i] = g, A ? o[i] = g : g ? o.setAttribute(i, g) : o.removeAttribute(i));
  }) };
}
lt("unmount", function(o, i) {
  if (typeof i.type == "string") {
    var t = i.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-5843 + -8 * -551 + 5 * 287);
        for (var A in e) {
          var n = e[A];
          n && n.d();
        }
      }
    }
  } else {
    var g = i.__c;
    if (g) {
      var a = g.__$u;
      a && (g.__$u = void (-1300 + 17 * -61 + 2337), a.d());
    }
  }
  o(i);
}), lt("__h", function(o, i, t, e) {
  (e < 6701 + -2 * 3349 || 8135 + -429 * 3 + 6839 * -1 === e) && (i.__$f |= 5077 * 1 + 352 + -5427), o(i, t, e);
}), te.prototype.shouldComponentUpdate = function(o, i) {
  var t = this.__$u;
  if (!(t && void (50 * -50 + -1365 * 3 + 6595) !== t.s || 14565 + 14561 * -1 & this.__$f)) return !(-7712 + -4 * -587 + -298 * -18);
  if (6402 + -629 * 1 + 1154 * -5 & this.__$f) return !(-1648 * 1 + 9814 + -1361 * 6);
  for (var e in i) return !(8338 + 1 * 7405 + 91 * -173);
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !(-1140 * -2 + 6634 + -8914);
  for (var n in this.props) if (!(n in o)) return !(377 * -11 + -5754 + -1 * -9901);
  return !(3041 + -2 * 1520);
};
function xI(o) {
  return LA(function() {
    return tI(o);
  }, []);
}
const Do = at(void 0);
Do.displayName = "CameraServiceContext";
function UB() {
  const o = Ge(Do);
  if (o === void 0)
    throw new Error(`${Do.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function II() {
  return navigator.mediaDevices.enumerateDevices();
}
async function hi() {
  return (await II()).filter((i) => i.kind === "videoinput");
}
function $0(o) {
  o.getTracks().forEach((t) => t.stop());
}
function In(o) {
  return o.getVideoTracks()[-4664 * 2 + 9308 + 4 * 5];
}
(function(o, i) {
  const t = o();
  function e(a, x, I, C, r) {
    return yA(x - -37, I);
  }
  function A(a, x, I, C, r) {
    return yA(r - 706, x);
  }
  function n(a, x, I, C, r) {
    return yA(r - 741, a);
  }
  function g(a, x, I, C, r) {
    return yA(r - 451, a);
  }
  for (; ; )
    try {
      if (-parseInt(g("%qb7", 672, 663, 653, 659)) / 1 * (-parseInt(e(179, 184, "jU#y", 170, 191)) / 2) + parseInt(A(918, "SzIS", 928, 921, 917)) / 3 * (-parseInt(e(169, 170, "$RtN", 163, 170)) / 4) + -parseInt(n("KaPk", 930, 956, 955, 941)) / 5 * (-parseInt(g("nOIO", 680, 685, 665, 679)) / 6) + parseInt(g("f!06", 659, 664, 668, 652)) / 7 + parseInt(n("C&X)", 955, 968, 979, 966)) / 8 + -parseInt(A(946, "Ljxk", 936, 921, 933)) / 9 * (parseInt(e(197, 182, "!GWq", 173, 172)) / 10) + -parseInt(g("T4nS", 651, 648, 662, 663)) / 11 * (parseInt(A(930, "ogEA", 917, 936, 930)) / 12) === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(mo, 1442314 + 94382 * -9);
function mo() {
  const o = ["W4XDW5/dNXhcTCkFjG", "zCkydvzQ", "aLxcHevYySoMggO", "WQHQpSkCW5P+mmoLW6RcHq", "W7ddM8oxuulcIZHphW", "EGVcI8kW", "o3pdN8kmeJtdHIddQCov", "emorbbXfq8o8WRu", "WQTMmSkCWOSeAmo2W6JcQcpdUKy", "oSoNFSk3W7O6mCorWOtdV8kjWQ59", "W50WW4acs8odwe0NWPnGDW", "WOxcMrGbW5ygprS", "fmowuh03amk7WOxcRmkPWOjMWQW", "W7BcSCoOfLa", "j8k1r8ohqqdcTXaEoxBdNa", "p3BdLSkiywZcKbxdSCorlfdcTG", "AHRcGmkKCW", "WQ1XbxNdGa", "WPekW5tdNqm", "WOxcJ1ZdHmo+WPvJWO7dJG", "W7pdKSoDpcZdH2Ojd2n/W5hcHCot", "DXzIimoOAu82d8k3", "zHH4nCkcr8kkW5GcWRK", "W67dSSoUWQvdvXTAfq", "EwC6fKLTW5ddT0RdK8knnG", "WQOZWOqkcYHJWPdcJCoS", "WQ/dOmkOBaKtW6JcOd1EASoSWQa7", "W4dcTGFcQHFcOmo2WR0", "kcvGtd8", "W7tcG1G7WQC", "ASktWOjrW5L1WQ9MWQhcHuJcHW"];
  return mo = function() {
    return o;
  }, mo();
}
function yA(o, i) {
  const t = mo();
  return yA = function(e, A) {
    e = e - (-3624 + -2621 * -1 + 1203);
    let n = t[e];
    if (yA.IqFhAF === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      yA.jKkjGd = C, o = arguments, yA.IqFhAF = !0;
    }
    const a = t[-3 * 71 + -454 * -7 + -2965], x = e + a, I = o[x];
    return I ? n = I : (yA.WmhjPO === void 0 && (yA.WmhjPO = !0), n = yA.jKkjGd(n, A), o[x] = n), n;
  }, yA(o, i);
}
function YB(o) {
  const i = new Uint8Array(o);
  function t(A, n, g, a, x) {
    return yA(a - -689, A);
  }
  function e(A, n, g, a, x) {
    return yA(x - 311, g);
  }
  return window[t("8MHZ", -479, -472, -467)](i[t("8MHZ", -489, -486, -487) + "e"](function(A, n) {
    function g(x, I, C, r, Q) {
      return e(x - 69, I - 200, r, r - 28, C - 316);
    }
    function a(x, I, C, r, Q) {
      return e(x - 438, I - 495, r, r - 346, x - -220);
    }
    return A + String[a(305, 289, 298, "H5w3") + g(857, 851, 857, "T4nS") + "de"](n);
  }, ""));
}
function rn(o) {
  function i(g, a, x, I, C) {
    return yA(I - 125, g);
  }
  function t(g, a, x, I, C) {
    return yA(C - -705, I);
  }
  function e(g, a, x, I, C) {
    return yA(C - 190, a);
  }
  const A = new ArrayBuffer(o[i("c7mG", 319, 344, 329) + "h"]), n = new Uint8Array(A);
  for (let g = 0, a = o[t(-479, -490, -494, "W2qW", -490) + "h"]; g < a; g++)
    n[g] = o[e(403, "pVOU", 380, 396, 393) + i("qBd5", 338, 350, 343)](g);
  return A;
}
(function(o, i) {
  function t(x, I, C, r, Q) {
    return cA(r - -43, I);
  }
  function e(x, I, C, r, Q) {
    return cA(I - -892, Q);
  }
  function A(x, I, C, r, Q) {
    return cA(C - 607, r);
  }
  function n(x, I, C, r, Q) {
    return cA(x - 589, Q);
  }
  const g = o();
  function a(x, I, C, r, Q) {
    return cA(r - -725, I);
  }
  for (; ; )
    try {
      if (parseInt(A(1361, 1439, 1332, "yX!D", 1165)) / 1 + parseInt(A(1182, 1257, 1312, "a7@F", 1204)) / 2 + parseInt(e(-223, -346, -340, -234, "d0Qy")) / 3 + -parseInt(a(-267, "SU62", -300, -168, -311)) / 4 + parseInt(n(1284, 1382, 1236, 1243, "xjW@")) / 5 * (parseInt(t(420, "xjW@", 462, 436, 295)) / 6) + parseInt(n(1320, 1436, 1145, 1267, "kmm^")) / 7 + -parseInt(a(219, "s&#U", -76, 61, -74)) / 8 === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(wo, -5 * -166277 + -287363 + 174547);
const GA = {};
GA[F("y6Ca", 62, 267, 204) + k(1601, 1507, "6jO*") + m("Il#U", -87, 138, 35) + F("c5VB", 272, 371, 394) + S(502, 739, "*q)r", 649)] = D(1386, "c5VB", 1518, 1305, 1376) + m("d^jm", 234, 46, 162) + m("32y(", 173, -28, 28) + k(1363, 1334, "Il#U") + D(1184, "*kAT", 987, 1155, 1153) + m("a40#", 212, 157, 285) + F("2pxH", 393, 499, 372) + D(1296, "6jO*", 1147, 1014, 1183);
function D(o, i, t, e, A) {
  return cA(A - 631, i);
}
GA[F("kmm^", 498, 408, 359) + k(1594, 1671, "@TFW") + k(1308, 1358, "jzqC") + S(501, 465, "bcWC", 586) + D(1125, "9qnK", 1051, 1062, 1202) + S(606, 664, "nRs^", 537)] = k(1592, 1511, "h#Z]") + D(937, "]%v3", 1008, 1077, 1100) + S(555, 565, "J0L%", 566) + S(620, 551, "bcWC", 704) + m("Xemb", 184, 127, 189) + k(1264, 1257, "v37M") + S(976, 944, "v37M", 802) + F("YD%i", 265, 185, 125), GA[k(1457, 1588, "NFXS") + F("6jO*", 32, 145, 209) + F("@TFW", -39, 23, 93) + m("fI5v", 317, 200, 226) + m("a7@F", -11, 95, 97)] = k(1320, 1383, "b1WU");
function m(o, i, t, e, A) {
  return cA(e - -442, o);
}
function S(o, i, t, e, A) {
  return cA(e - 46, t);
}
GA[S(633, 651, "a40#", 642) + S(802, 849, "a7@F", 804) + D(1441, "$PTf", 1437, 1292, 1398) + S(722, 452, "xjW@", 608) + D(1195, "Xemb", 1146, 1181, 1175) + F("Il#U", 457, 356, 288)] = F("jzqC", 282, 315, 355) + F("2pxH", 375, 197, 274) + k(1297, 1346, "c7bj") + k(1523, 1506, "yX!D") + k(1305, 1283, "9ELI") + D(1143, "1!)b", 1336, 1325, 1220) + k(1432, 1349, "ibOs") + k(1543, 1497, "*kAT"), GA[S(487, 679, "$PTf", 558) + S(819, 673, "SU62", 842) + k(1542, 1382, "Xemb") + "L"] = m("h#Z]", 47, -50, 96) + m("$PTf", 64, 57, 87) + m("32y(", 69, 26, 69) + S(606, 604, "h#Z]", 710) + m("y6Ca", 30, 68, 92) + F("c7bj", 209, 242, 137), GA[k(1429, 1426, "a7@F") + S(732, 863, "s0Nu", 746) + F("v##D", 397, 354, 380) + k(1585, 1608, "bcWC") + m("s&#U", 381, 237, 309)] = m("YD%i", 11, 215, 40) + k(1572, 1660, "b1WU") + m("h#Z]", 289, 388, 332) + F("y6Ca", 368, 482, 397) + D(1542, "(mdd", 1504, 1391, 1385) + D(1251, "9ELI", 1250, 1297, 1314) + D(1473, "3BVl", 1252, 1550, 1430) + k(1463, 1469, "c5VB"), GA[S(890, 685, "d0Qy", 847) + k(1449, 1319, "@TFW") + F("9qnK", 332, 200, 245) + D(1053, "bcWC", 1210, 1163, 1179) + S(511, 641, "kmm^", 653) + "Y"] = F("i#kz", 349, 173, 347) + D(1067, "TsE*", 1216, 1059, 1117) + k(1298, 1382, "nRs^") + k(1557, 1709, "c7bj") + m("1!)b", 138, 156, 150) + m("TsE*", 374, 415, 271) + m("c5VB", 83, 13, 191) + m("s0Nu", 102, 213, 231), GA[m("d0Qy", 288, 275, 359) + k(1566, 1447, "c7bj") + "NV"] = F("2pxH", 200, 171, 316), GA[m("kmm^", 139, 155, 280) + m("c5VB", 54, 325, 204) + F("@TFW", 73, 101, 169) + S(886, 588, "ibOs", 763)] = S(707, 799, "xjW@", 688) + D(977, "b1WU", 1102, 1252, 1116) + m("h#Z]", 83, -103, 22) + D(1092, "yX!D", 1111, 1306, 1271) + k(1271, 1428, "d^jm") + k(1608, 1672, "b1WU") + m("Il#U", 137, 359, 190) + S(667, 537, "y6Ca", 648) + k(1581, 1759, "@TFW") + F("Il#U", 193, 111, 88) + m("iua5", 112, 16, 133) + m("@TFW", -60, -56, 33) + k(1364, 1446, "6jO*") + D(1336, "]%v3", 1107, 1297, 1182) + D(1174, "*kAT", 953, 1265, 1127) + D(1268, "3BVl", 1217, 1216, 1229) + D(1344, "c5VB", 1221, 1188, 1335) + m("yX!D", 10, 124, 23) + F("SU62", 216, 262, 336) + S(873, 602, "a7@F", 762) + D(1355, "1!)b", 1296, 1229, 1261) + D(1363, "kmm^", 1248, 1200, 1279) + D(1097, "i#kz", 1223, 1071, 1205) + F("J0L%", 172, 134, 298) + F("*Kdc", 348, 203, 317) + S(787, 588, "c5VB", 639) + S(502, 551, "v37M", 657) + k(1362, 1508, "kmm^") + m("jzqC", 216, 189, 128) + D(1115, "9ELI", 1268, 1344, 1237) + D(1355, "SU62", 1331, 1262, 1418) + m("@TFW", 125, 284, 172) + S(736, 617, "y6Ca", 735) + k(1353, 1412, "Xemb") + F("3BVl", 417, 404, 383) + k(1288, 1432, "b1WU") + D(1067, "6jO*", 1038, 1250, 1204) + m("iua5", 364, 296, 353) + D(1043, "jzqC", 1096, 1345, 1187) + D(1238, "$PTf", 1336, 1324, 1368) + S(596, 403, "kmm^", 560) + k(1282, 1181, "2pxH") + F("Il#U", 233, 189, 291) + S(615, 856, "1!)b", 766) + k(1461, 1485, "Il#U") + D(1322, "h#Z]", 1069, 1222, 1154) + S(779, 850, "3BVl", 805) + D(1240, "*Kdc", 1218, 1180, 1342) + k(1475, 1441, "8MeO") + k(1512, 1483, "ltX)") + S(990, 679, "NFXS", 817) + D(1329, "*Kdc", 1362, 1423, 1309) + F("d^jm", 110, -62, 96) + m("v##D", 333, 129, 213) + k(1438, 1403, "d^jm") + F("]%v3", 29, 87, 145) + m("6jO*", 70, -13, 149) + k(1329, 1268, "suPj") + D(1250, "fI5v", 984, 1251, 1105) + S(547, 643, "iua5", 656) + m("suPj", 242, 74, 225) + S(920, 826, "YD%i", 743) + m("xjW@", 411, 217, 249) + k(1466, 1370, "xjW@") + k(1293, 1427, "xjW@") + S(732, 445, "2pxH", 577) + D(1248, "@TFW", 1039, 1334, 1176) + S(562, 554, "nRs^", 723) + k(1328, 1233, "jzqC") + F("kmm^", 175, 272, 94) + S(684, 909, "nRs^", 758) + k(1384, 1319, "YD%i") + m("TKvW", 290, 49, 184) + D(1283, "6jO*", 1249, 1343, 1246) + k(1505, 1327, "s&#U") + D(1306, "v37M", 1475, 1470, 1395) + S(526, 617, "(yFG", 684) + S(701, 647, "32y(", 731) + F("s0Nu", 170, 111, 223) + k(1567, 1432, "kmm^") + m("v##D", -56, -15, 73) + S(430, 607, "9ELI", 576) + D(1290, "suPj", 1094, 1251, 1181) + m("v##D", 358, 208, 272) + m("a7@F", 495, 261, 328) + m("iua5", 349, 179, 330) + S(711, 453, "s0Nu", 553) + m("Xemb", 47, 125, 185) + m("a40#", 160, 334, 208) + D(1277, "ibOs", 1496, 1338, 1410) + k(1507, 1470, "32y(") + F("iua5", 58, 131, 191) + m("jzqC", 324, 50, 171) + m("*kAT", 150, 117, 159) + m("iua5", 253, 111, 170) + S(712, 704, "Il#U", 734) + m("suPj", 251, 64, 180) + S(910, 876, "TsE*", 848) + m("nRs^", -12, 127, 121) + D(1496, "TKvW", 1278, 1273, 1400) + F("v37M", 393, 486, 369) + k(1357, 1535, "nRs^") + D(1160, "*kAT", 1302, 1184, 1266) + S(498, 661, "J9gQ", 611) + S(352, 590, "s0Nu", 514) + D(1283, "J9gQ", 1324, 1399, 1375) + m("*Kdc", -28, 9, 135) + m("kmm^", 128, 437, 273) + D(1226, "yX!D", 1112, 1072, 1128) + D(1299, "iua5", 1461, 1167, 1291) + S(382, 401, "YD%i", 529) + k(1570, 1587, "YD%i") + D(1101, "SU62", 1082, 1256, 1225) + D(980, "(mdd", 1071, 1027, 1089) + k(1528, 1432, "$PTf") + F("ltX)", 456, 240, 280) + m("s&#U", 401, 207, 239) + k(1511, 1408, "Xemb") + F("a40#", 226, 168, 100) + k(1554, 1732, "TKvW") + F("(yFG", 258, 318, 266) + m("J0L%", 187, -127, 19) + k(1527, 1490, "s0Nu") + D(1548, "v##D", 1586, 1290, 1429) + k(1445, 1488, "y6Ca") + D(1199, "1!)b", 1206, 1476, 1360) + D(1222, "jzqC", 1306, 1250, 1250) + m("J9gQ", 359, 467, 313) + F("TKvW", 320, 80, 154) + F("h#Z]", 324, 434, 426) + m("s&#U", 159, 405, 264) + F("v37M", 593, 367, 430) + D(1271, "xjW@", 1087, 1028, 1167) + m("TsE*", 388, 304, 352) + F("v##D", 307, 30, 142) + D(1090, "yX!D", 1195, 1063, 1157) + m("nRs^", 343, 214, 210) + k(1502, 1522, "9qnK") + S(790, 993, "J0L%", 824) + F("3BVl", 69, 169, 140) + m("suPj", 477, 165, 334) + D(1237, "1!)b", 1271, 1127, 1197) + k(1545, 1671, "c5VB") + k(1373, 1544, "v##D") + D(1305, "*Kdc", 1417, 1183, 1300) + F("v##D", 171, -44, 91) + m("d0Qy", 328, 407, 230) + m("d0Qy", 41, 96, 176) + m("v37M", 226, 444, 364) + S(575, 830, "SU62", 669) + S(578, 457, "1!)b", 625) + D(964, "Il#U", 973, 1034, 1111) + D(1079, "$PTf", 1207, 1278, 1144) + k(1546, 1420, "NFXS") + D(1497, "xjW@", 1531, 1254, 1371) + S(545, 807, "SU62", 634) + F("SU62", 387, 372, 363) + S(676, 726, "s&#U", 774) + k(1480, 1317, "v##D") + k(1270, 1252, "kmm^") + D(1395, "@TFW", 1383, 1612, 1438) + D(1469, "xjW@", 1606, 1449, 1431) + m("a40#", 204, -43, 67) + D(1277, "Xemb", 1036, 1274, 1168) + S(673, 826, "*kAT", 831) + k(1347, 1201, "b1WU") + m("@TFW", 344, 229, 250) + F("(mdd", 431, 582, 442) + S(583, 532, "jzqC", 581) + F("Il#U", 542, 432, 410) + k(1490, 1608, "a7@F") + F("bcWC", 511, 418, 339) + F("d0Qy", 275, 54, 222) + k(1310, 1147, "9qnK") + F("i#kz", 407, 252, 273) + D(1587, "Il#U", 1528, 1507, 1413) + D(1039, "jzqC", 1343, 1168, 1172) + m("(yFG", 257, 142, 240) + S(679, 388, "9qnK", 517) + F("h#Z]", 503, 250, 429) + D(1357, "J9gQ", 1331, 1144, 1297) + D(1560, "TKvW", 1431, 1491, 1422) + F("NFXS", 316, 28, 155) + F("d0Qy", 221, 418, 330) + m("8MeO", 158, 441, 279) + S(631, 642, "d0Qy", 711) + F("*Kdc", 291, 329, 386) + m("a7@F", -25, 57, 77) + m("(mdd", 82, 220, 126) + D(1287, "b1WU", 1376, 1305, 1231) + F("$PTf", 390, 90, 236) + F("32y(", 196, 156, 110) + m("2pxH", 185, 128, 228) + F("y6Ca", 349, 224, 246) + S(495, 388, "s&#U", 501) + S(454, 532, "v37M", 522) + k(1346, 1301, "d0Qy") + D(1180, "a7@F", 1264, 1336, 1213) + F("8MeO", 235, 177, 158) + S(625, 556, "d^jm", 643), GA[D(1240, "kmm^", 1121, 991, 1129) + S(455, 580, "SU62", 627)] = "/", GA[k(1552, 1468, "@TFW")] = m("(mdd", -94, 200, 57) + k(1569, 1733, "2pxH"), GA[D(1422, "h#Z]", 1542, 1413, 1411)] = !1, GA[m("b1WU", 316, 176, 291)] = !0, GA[S(680, 585, "SU62", 690)] = !1, GA[D(1217, "fI5v", 1446, 1254, 1280) + m("yX!D", 521, 458, 361) + D(1370, "8MeO", 1448, 1257, 1321) + m("$PTf", 150, 44, 45)] = D(1245, "s0Nu", 953, 1031, 1093);
var ga = GA;
function cA(o, i) {
  const t = wo();
  return cA = function(e, A) {
    e = e - (-2249 + 350 * -4 + -50 * -82);
    let n = t[e];
    if (cA.JNMuFX === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      cA.pYWCHc = C, o = arguments, cA.JNMuFX = !0;
    }
    const a = t[9842 + 8 * 796 + -16210], x = e + a, I = o[x];
    return I ? n = I : (cA.nOumPL === void 0 && (cA.nOumPL = !0), n = cA.pYWCHc(n, A), o[x] = n), n;
  }, cA(o, i);
}
function k(o, i, t, e, A) {
  return cA(o - 804, t);
}
function F(o, i, t, e, A) {
  return cA(e - -363, o);
}
async function OB() {
  const o = {};
  o[i("yX!D", 1134, 1095)] = Qo;
  function i(I, C, r, Q, c) {
    return m(I, C - 292, r - 339, r - 1010);
  }
  o[i("1!)b", 846, 1020) + "h"] = 256;
  function t(I, C, r, Q, c) {
    return S(I - 422, C - 491, r, C - -419);
  }
  const e = await window[t(309, 274, "6jO*") + "o"][t(429, 363, "9ELI") + "e"][A("d^jm", 1400, 1354, 1218, 1226) + t(347, 410, "bcWC") + "y"](o, !0, [i("d^jm", 1118, 1144) + "pt", i("8MeO", 1270, 1184) + "pt"]);
  function A(I, C, r, Q, c) {
    return m(I, C - 462, r - 302, c - 1073);
  }
  const n = Uint8Array[i("y6Ca", 1142, 1152)](Array(-1 * 8271 + 3 * -1278 + 12121)[x(397, "J9gQ", 367, 610, 460)](375 * -23 + -1074 + -1 * -9699)), g = window[x(572, "(yFG", 806, 684, 640) + "o"][x(397, "SU62", 633, 519, 526) + x(559, "d^jm", 349, 396, 457) + x(704, "s&#U", 373, 432, 529)](n), a = {};
  function x(I, C, r, Q, c) {
    return D(I - 54, C, r - 191, Q - 371, c - -666);
  }
  return a[t(384, 374, "s0Nu")] = e, a.iv = g, a;
}
function wo() {
  const o = ["uu18omki", "W4eTW7KpWOC", "W7D9WP/dHSkv", "AHTlWQldJsn/xCorW7fv", "W65tWONdJa", "kmo+WPr8WRq", "WPdcHCoNWOji", "fSkSnJRdUa", "WRVdOqrpW4e", "uxzOrCkX", "WPmfFHVdMq", "AW5oW4H2", "s8kqwmoYfG", "W6ZdQCkaASkNW4a6o8k6aq0peW", "EenOhmos", "z2jlWQtdPW", "WQvJWPZdTLi", "W79QWPxdVe4", "WQbPWQNdH8o1", "W78AbfJcMW", "af7dLvhcSq", "CxZdSmoRgq", "WPxdOdddIMS", "p8kgW7JdRfq", "WRlcVSoyfCoW", "qbzLW7m", "W5pdOSk+e8oT", "dqWSW6Tn", "WPtcT23dLWq", "W5VdUSkiDay", "a8kTW7/cKeW", "WQNdUavAW4q", "WR/cKCogW6xdJa", "baT5WRDobCkzrmoOW7jjW7/dPa", "bmoikMxdVG", "W4JcGGm5wG", "CN5XlCoy", "W7/cKdBdUsy", "WQ0PW5JcJmoaW6xdQmoDWQSwWOHF", "ymosWPRdOYatW6FcMeLcWPlcOCk/", "W4iZW4JcSsa", "oLDHpG", "x8kveJ9tbctdS8kVmSoCWPhcPwG", "WPGCWPHKWRO", "W4CjW6LEyG", "W6tdHmk/WPRdGG", "qfDbWPddJW", "W5z1jX3cJW", "k3aFW7JcRG", "ACk4vSkbkG", "mCoWWOpdSra", "WO7dJHZdSeW", "WO5+WPZdHmks", "kmkBc8o0jW", "wLaBdmoz", "WOddHte", "CgTInq", "W4v5h1FdOG", "WPSZd8oUzW", "t2rcmSkY", "W57cLNK0WQ3dJq1kA0VcVmoiWPK", "W4NcOmosWQf4", "W4RcVSoFoCkO", "W49mWRVdTmkR", "WQ1VW7VdUfW", "uCkKBmkgeG", "WPNcK8oWcSoC", "laSol8ke", "W5WGWRJdVmoS", "k2JdRgxcQW", "WRRcLCoHWP1B", "jCkWW7/cHYm", "WQ0sW4ZcKJe", "W49CW4y4W6y", "l8oMW7vfWR8", "WPhdQ8ozWOVdLq", "wtuFh8oP", "WPedaCoCfq", "WR/cICkcg8ol", "dmoYWRNdIwy", "cHVcJmkybW", "aCoVvfPq", "WRNdLCoNWOtdHG", "W60JmvpcSG", "W6pcVc9Kqq", "CMfGpSkr", "WRVcUfq1wW", "zILPW4NdSW", "WPJcP8kc", "WRmfeGddGW", "x8oOsuOy", "WP4OkaRdTG", "dmostg0", "WRqrDXVcVG", "lqG4r8oAW5BcMHhdL29efqZdIq", "jmkkdWxdSa", "WRJdL8k3W5FdHW", "WRdcTmoGW6ZcTq", "CgvHpSkl", "WPTVjCoCoG", "WOVcUmk+W7ZcPG", "W6OeW7hcIvG", "qNddNCoPea", "gcxcU8kaaq", "jCk0or7dIa", "bCoqW4tcTSk0", "WQBdMdpdRgK", "j1HVumoB", "nLWQW47cGG", "W7WRW7OpWQi", "u0ldHSoFeG", "zxGmW4q9", "l09Sl8kk", "W4tcUmk/Bmky", "W4iWW5/dSYu", "CeLjqSkH", "omokz15q", "WQdcMthdKWO", "W5VcIIzZ", "WOVdHh3dQYO", "Da9CmmkT", "EhTWoCks", "bmkuW73cHh4", "W7FcNmk5Bmo7", "cSoxWQLkW5G", "WQbKWQldSfK", "WQJdPM0ouq", "W5ZcJNSSWQW", "WRZdPMfCvW", "W6NcOCkoWOtcHG", "zeKEW5yK", "eSkWW6/cJ3O", "cSogWOS8W7a", "WO/cKa54W4W", "iWiAnCog", "zcDLWQfW", "WPtdNSosWPL0", "WRhcUCoDomoL", "nbzSW7Hx", "yKFdVmomua", "u3zZnSk1", "WQ4jW7FdTr4", "lSoPDKe2", "WP5+W58bW7i", "ArXjWQBcUWfTBCoIW6m", "xmoOA1KU", "W55jW5G", "t8oAWPiqW4a", "l8koW7ftWQC", "hgeEcSkh", "wMLFk8kk", "lsNcOmkZqG", "WOBdTSoeWPVdMa", "r8oyW4eDW4u", "dwWrW4lcTa", "W7y8W7FcPq", "hLNdHflcIW", "nSoyWOHIW6S", "WP3cPSkeWQCP", "ldBdQNldOG", "W5H/WOldVa", "WOegr0pcTW", "y2e/W6yQ", "f8kLW7JcKeW", "W5/cQmkgBmk/", "W5xcQCoi", "WOmzW65iAa", "W67dNmk/zrm", "ygSmiSoy", "WQxcKCosnCou", "W7ZdJIVdKf4", "WPVcNSotWRf1", "W5pcKaTVW6O", "iZW/eSos", "WQVdHw9Bka", "FM9P", "As12W7fL", "WOldRmozWPhdIq", "WOddSmk8W6tdMW", "mCkkW4pcONi", "WPtdRtNdLKi", "dgrccCk6", "WO9KBSonba", "xCoLWR/dP24", "WQxcHSkbm8ob", "WOVcUhzRDG", "W4VdRmktqvC", "WOCIlbJcIa", "WPtcPmk9W7JcMq", "WRFcK8ozomoP", "W73cHXTBxa", "yLSAW5KV", "w1GIW6O", "WOtdNNGJorjaDCofW5VcVL07", "W67cISkIWR3dUa", "W5GuW4v7Da", "WPXCW5SYW6m", "AgzQoCkb", "mmkkW4JcP2O", "W5T7W7ZcO8kV", "WOlcV8o7mSos", "ow1mWQdcQW", "q1PjWQNdSW", "WRtcLSkGW4BcGq", "WOtcJ8o6da", "WRWtga/dHW", "WRddP8o7pCoC", "W74NWPP+WQW", "w0CAn8k1", "vvfFWPxdJq", "twzTqCka", "WP1tWPPZW4LLWPRcJH/dMh7cKG", "WPNcGmo8WPfB", "WQSqfb7dKG", "ywvSWORdLq", "W5hcKGuNAW", "qLycgCo4", "ESkOWRhdHmoE", "F0ZdUNBcHq", "FsBdUCoKlG", "W7SVW6pcSb8", "WPpcLSoDnCoG", "vmoix2hcRqtdRhKYW43cHSo/AG", "hSk+WPJcVMS", "d8kqrJOa", "fmo7W6/cNmk6", "aCkEgaldVq", "fh0ZW4dcTa", "hhldNctcLa", "FLD8eSky", "W6rfWPtdKCkb", "WQxdHrhdUIS", "W65DW53cImke", "W7JcJmkoomkq", "WRJdL3JdJMO", "WRBcGSoVqmoF", "WRdcT8oaWQjY", "bSoFW4BcSCkN", "fSoxW6pcISk+", "WRakW7ZcSSkk", "ksFcMmoLeG", "pCosWOr9W4q", "W4u3hhNcJa", "pSkbW5i", "WOBcTJZdSHK", "dmoTWPayWQK", "m8kPia", "W63cMSkadCoe", "F1/dVCoNfYBdS8khyLm", "W55MW6BcOa", "W483W7W/WQO", "WPVdSs1SW4G", "WPTrWPH8W4GEWRJcLIldO20", "vCkVnb3dLW", "WQ7cMJ3dLHO", "F3T8WRhdSq", "dCo6W5ldGmkj", "WQ3cNMVcHuy", "wmkObSkqfa", "aSoloHxdHG", "p8ozWOLQW48", "WQZdUMjkmq", "yCo/WOaYWOa", "EvTOfmoF", "WOldKCooWRJdVq", "afDRnCkz", "WRaWFhJcHW", "W6HfWRNcI8k1", "rZewb8oT", "ymkpWOjQWOK", "W4RdT8khW7OSzseNa15GWO/dNa", "WOyYW4joza", "bCk0W7tcNLy", "WQpcRCoqWRzS", "WOPAW7pcMSk3", "nZ3cJmk+lG", "W7XTW4pcMa8", "jL/cQmoMfG", "WRldPSk6p8oA", "D35mnSkl", "bmoLW6BcKSkf", "W6NdI8kLzX4", "Fgf1l8kj", "W7KVW4aqWOO", "WO/cUmoUkmor", "WQ7cQCork8o9", "WRlcG8k5W5m", "W6tdMq1dBa", "mmkIgZhdIG", "WRKUj8oPiW", "WOVcLCoNgSoo", "WO49gCosmW", "z1rzWPFdSG", "lwWsW4VcLa", "W4nnWQBdR8kH", "WOlcLZVdOsG", "nt59W7ZdVG", "o8oHCLOK", "k8opcSkMEW", "k8ooWRy/W5u", "WR80qNJcVW", "WRq0W4VcNSkS", "WPPnWP1JWRO", "W75mWOJdO8kL", "D0SHf8ky", "tvGiW7Sm", "W5LUW4/cGSkx", "d30rW57cQq", "W5rDWRldP34", "nCkOpG", "BMLVpmkh", "t8kUCSkyeG", "imoJW77cG8kF", "a8kTWPRcNIm", "qeNdUCoEzW", "WQddPvjgoG", "mSoTzLy", "aupcULpcGq", "mSo/WRZdP38", "o8o3EJ4k", "WPNdJW3dN08", "iCkVW47cRa", "nmopv3ug", "W4HUkxBcOW", "lmoibSoWjG", "iY3cSCkboq", "WOhdGIuPEa", "h0K6W6dcOa", "tmkpWPmyW4ddISoRbrtcS8kyAKu", "WQ7cI8k3W4xdNa", "WPOsW4ahWQO", "W7iKWORcOSkq", "W6dcVbLowa", "suhdO8oADa", "W6W3h0RcGW", "W7TdW7KqW5K", "W5FdQCkYqYK", "W6DtW78KWR8", "W5ZdHh5GWQG", "D3tdGSo5", "W7LQWPxdHCka", "WOFdRqBdQwa", "ff/dOxpcUq", "W4eBkhhcNq", "W5XAW4aZ", "W5eGaW/cMq", "sg9Lr8k5", "W7fsWQFdKCog", "WOzlWRnloG", "WO/cM8o9WPDo", "nbq2W4r9", "WQNcPmoxg8ot", "W79tWR3dJ8kd", "pSoPDgmQ", "W6fbWRdcPCki", "W4RdQ8kzqYi", "hr4VW5pcOG"];
  return wo = function() {
    return o;
  }, wo();
}
async function HB(o) {
  const { iv: i, key: t } = await OB(), e = {};
  e[x(71, "v37M", 68, 29)] = Qo;
  function A(r, Q, c, E, d) {
    return D(r - 24, r, c - 57, E - 197, c - 202);
  }
  e.iv = i;
  const n = await window[I(1266, 1348, 1518, 1455, "8MeO") + "o"][A("9ELI", 1707, 1569, 1724) + "e"][C("kmm^", 307, 459) + "pt"](e, t, o), g = await window[I(1401, 1485, 1662, 1325, "3BVl") + "o"][A("9qnK", 1507, 1517, 1596) + "e"][C("TKvW", 708, 550) + I(1433, 1502, 1430, 1584, "kmm^")](I(1497, 1356, 1503, 1227, "Xemb"), t), a = {};
  a[A("(yFG", 1688, 1527, 1511) + "ge"] = n;
  function x(r, Q, c, E, d) {
    return D(r - 344, Q, c - 278, E - 438, r - -1050);
  }
  function I(r, Q, c, E, d) {
    return S(r - 54, Q - 441, d, Q - 800);
  }
  a[I(1258, 1424, 1333, 1523, "kmm^")] = g, a.iv = i;
  function C(r, Q, c, E, d) {
    return S(r - 129, Q - 106, r, c - -120);
  }
  return a;
}
async function KB(o) {
  const i = ga[Q(792, 632, 800, "y6Ca", 699) + t(349, 518, 373, 476, "@TFW") + "EY"];
  function t(h, p, G, R, M) {
    return F(M, p - 228, G - 415, h - 95);
  }
  const e = ga[t(381, 475, 435, 236, "fI5v") + c(211, "J9gQ", 278, 65) + "V"];
  if (!o || !i || !e) return void (4569 + -24 * 59 + -3153);
  function A(h, p, G, R, M) {
    return k(h - -213, p - 342, G);
  }
  const n = new TextEncoder(), g = n[c(299, "*Kdc", 471, 307) + "e"](o), a = window[t(516, 681, 694, 483, "Il#U")](i), x = window[A(1265, 1346, "fI5v")](e), I = rn(a), C = rn(x), r = {};
  function Q(h, p, G, R, M) {
    return F(R, p - 252, G - 80, M - 495);
  }
  r[c(145, "h#Z]", 156, 116)] = Qo, r[E(-103, -264, "a7@F", -116) + "h"] = 128;
  function c(h, p, G, R, M) {
    return D(h - 398, p, G - 70, R - 21, h - -1107);
  }
  function E(h, p, G, R, M) {
    return m(G, p - 16, G - 449, R - -146);
  }
  const d = await window[t(287, 377, 308, 305, "v37M") + "o"][Q(662, 779, 810, "Xemb", 722) + "e"][t(441, 300, 492, 547, "ltX)") + Q(781, 993, 745, "(yFG", 828)](A(1072, 1223, "2pxH"), I, r, !1, [E(136, -202, "9qnK", -41) + "pt"]), l = {};
  l[t(185, 100, 230, 284, "suPj")] = Qo, l.iv = C;
  const B = await window[Q(819, 636, 693, "6jO*", 779) + "o"][t(352, 515, 196, 237, "a7@F") + "e"][c(285, "nRs^", 392, 419) + "pt"](l, d, g);
  return YB(B);
}
(function(o, i) {
  function t(x, I, C, r, Q) {
    return BA(r - -285, C);
  }
  const e = o();
  function A(x, I, C, r, Q) {
    return BA(C - -502, r);
  }
  function n(x, I, C, r, Q) {
    return BA(C - -221, Q);
  }
  function g(x, I, C, r, Q) {
    return BA(x - 527, r);
  }
  function a(x, I, C, r, Q) {
    return BA(r - -833, Q);
  }
  for (; ; )
    try {
      if (parseInt(n(174, 190, 152, 182, "Yl$w")) / 1 + -parseInt(n(145, 71, 116, 70, "8Pc[")) / 2 * (-parseInt(t(167, 78, "7[Ba", 117, 117)) / 3) + -parseInt(g(926, 898, 904, "3H(5", 887)) / 4 + -parseInt(A(-174, -166, -151, "8Pc[", -198)) / 5 * (-parseInt(t(72, 37, "m0ed", 71, 78)) / 6) + -parseInt(g(910, 925, 906, "5fNm", 926)) / 7 * (parseInt(t(26, 51, "uJXP", 39, 56)) / 8) + -parseInt(a(-488, -493, -497, -473, "LOSo")) / 9 * (-parseInt(t(9, 68, "n]8b", 31, -19)) / 10) + parseInt(a(-531, -460, -502, -507, "K08#")) / 11 * (parseInt(n(184, 170, 161, 157, "K08#")) / 12) === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(ko, 432512);
const PB = -265 * 19 + 8291 + -256, TB = -6833 * 1 + 5865 + 24 * 332, rI = -7453 + -1 * 3506 + 1827 * 6, CI = 10275 + 2055 * -5 + 0.5, cI = {};
cI[qA(129, 145, "3H(5")] = 1280;
const BI = {};
BI[Qe("gspv", 861, 863, 794, 833)] = 720;
const sI = {};
sI[wA(-371, -366, -365, -344, "HsNf")] = 60;
const Ao = {};
Ao[wA(-322, -320, -389, -355, "Xu^(")] = cI, Ao[qA(104, 93, "%J9P") + "t"] = BI, Ao[wA(-323, -332, -353, -309, "u&Xu") + dA(76, 91, 37, "9P4O")] = sI;
const QI = {};
QI[IA(-513, "gspv")] = 1920;
const EI = {};
function IA(o, i, t, e, A) {
  return BA(o - -854, i);
}
EI[IA(-537, "u&Xu")] = 1080;
const eo = {};
eo[wA(-297, -321, -334, -290, "al6E")] = QI, eo[dA(96, 121, 67, "UtgR") + "t"] = EI, eo[IA(-543, "RJX&") + dA(85, 49, 111, "Xu^(")] = 30;
const dI = {};
dI[wA(-334, -303, -313, -331, "Xu^(")] = 1;
const lI = {};
lI[wA(-267, -320, -282, -315, "$dfY")] = 1;
function BA(o, i) {
  const t = ko();
  return BA = function(e, A) {
    e = e - (66 * -85 + -3447 * 1 + -15 * -624);
    let n = t[e];
    if (BA.JOHsvq === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      BA.ydBPCj = C, o = arguments, BA.JOHsvq = !0;
    }
    const a = t[-4476 * 1 + -4851 + 3 * 3109], x = e + a, I = o[x];
    return I ? n = I : (BA.haBWfr === void 0 && (BA.haBWfr = !0), n = BA.ydBPCj(n, A), o[x] = n), n;
  }, BA(o, i);
}
const uI = {};
uI[dA(49, 8, 26, "f]VB")] = 1;
const to = {};
function dA(o, i, t, e, A) {
  return BA(o - -269, e);
}
to[IA(-475, "f]VB")] = dI, to[wA(-324, -258, -318, -281, "Yl$w") + "t"] = lI, to[Qe("LIX$", 755, 830, 788, 782) + wA(-295, -277, -366, -324, "hmsc")] = uI;
const hI = {};
hI[qA(104, 87, "XO$v")] = 1;
const fI = {};
fI[wA(-296, -367, -354, -336, "e@kr")] = 1;
const pI = {};
pI[wA(-224, -277, -280, -266, "al6E")] = 1;
const oo = {};
oo[IA(-483, "7[Ba")] = hI, oo[dA(95, 46, 96, "RJX&") + "t"] = fI, oo[IA(-506, "NGOG") + dA(76, 94, 34, "9P4O")] = pI;
const jt = {};
jt[IA(-463, "8bwm")] = Ao, jt[IA(-518, "RJX&") + dA(37, 70, 32, "n^A&")] = eo, jt[Qe("$8Vs", 840, 814, 803, 829)] = to, jt[wA(-242, -302, -222, -270, "tEam") + dA(123, 144, 161, "Su#Q")] = oo;
const bo = jt, Qt = {};
Qt[wA(-272, -279, -307, -316, "zsp7") + dA(45, 13, 75, "843O") + IA(-529, "5fNm")] = PB, Qt[qA(122, 137, "f]VB") + IA(-496, "QamN") + qA(131, 160, "#Hf^") + IA(-544, "n^A&")] = bo[IA(-491, "843O")], Qt[dA(116, 130, 117, "u&Xu") + IA(-467, "i#3r") + qA(198, 151, "L(ZL") + Qe("$8Vs", 833, 795, 826, 796)] = bo[Qe("UtgR", 826, 851, 812, 842) + Qe("RJX&", 800, 788, 764, 805)], Qt[wA(-281, -278, -264, -284, "al6E") + dA(73, 93, 116, "QamN")] = rI, Qt[IA(-484, "Y$^5") + qA(63, 103, "HsNf") + qA(146, 180, "bG1n") + qA(184, 168, "n]8b") + dA(121, 135, 159, "5fNm")] = CI;
const Et = {};
function qA(o, i, t, e, A) {
  return BA(i - -216, t);
}
Et[dA(51, 95, 5, "noDQ") + Qe("RJX&", 844, 871, 864, 874) + dA(97, 106, 89, "vKh2")] = TB, Et[wA(-307, -338, -348, -346, "hmsc") + IA(-468, "2yfI") + wA(-301, -289, -306, -310, "Xu^(") + Qe("2yfI", 828, 798, 855, 814)] = bo[IA(-502, "uAi4")], Et[dA(132, 100, 144, "Y$^5") + dA(108, 132, 121, "vKh2") + IA(-507, "e(ED") + dA(128, 154, 86, "n]8b")] = bo[Qe("XO$v", 817, 846, 860, 848) + qA(220, 172, "uAi4")], Et[IA(-482, "n^A&") + qA(178, 179, "$dfY")] = rI, Et[wA(-297, -254, -301, -265, "HsNf") + Qe("L(ZL", 798, 796, 789, 813) + qA(108, 130, "Y$^5") + IA(-524, "8bwm") + dA(52, 3, 23, "UtgR")] = CI;
function wA(o, i, t, e, A) {
  return BA(e - -659, A);
}
function ko() {
  const o = ["eCkvyKK", "WOfrWPpdJ8k1", "W4NcHYNdUCoe", "WRhdUX3dIa", "W6FcV8krt8kC", "A2iube0", "yuyLW6xdTG", "iYDkWQJcSq", "WQjhASoqsG", "ugXhhCk0pSoqjCkrW5VcQW", "gCoqrmoH", "W6tdLdhdRx4", "aJjmWQW", "W5lcKCoYwG", "l8obdqVcJcZcQ8opWPK", "mYjwtH1JW6dcI8k6CgvWcq", "dmkzt1jv", "DCk9jNRdKa", "W4RcMCoxWRD3EtG", "uCklghDl", "w8kkgCkHWRldSmkEcmo+pCkHWRS", "WRbyW457", "WR7dImotsCoE", "lGZdUqdcNa", "Ds1+W5xcLW", "j8o7w2NdRW", "nqJdTGlcSG", "ySk6WQNcHCkU", "W7VcICkkF8kg", "W5CjW4OGwq", "b8kGW6zXjq", "WQRcUsfPW5pdQmoLofxcS2JcUW", "dCkuuCkdWQ4", "z8kMWQpcSmkR", "WOGqW7PBW58", "DtP8W7NcLG", "W7pdQNO5WOO", "W6pdJZZdThC", "v2GDwCoIb8oSlq", "W4NcTSojWPK5WRRcQ8kUmtZcUSkw", "pJpdH8oeW7FdVmkvjZhcKujOsW", "fSkrW7mcW4hdOL3cKuddMWu", "W6DEr2TX", "WQjuz8ortq", "cIFcI8k2uG", "W7VcGtqrW6G", "bSotxa", "WOVdP8kBW41s", "v8opWRG", "WRGpWP7cPq", "lNWo", "Fmk3WQJcKmkQ", "W5BcLCkkbCol", "W4pcIIBdRG", "W7/cJSojWRFcRq", "W6HwDxK", "W6unWO42WQdcMNZcMbWGW79Axq", "b8ohsI0oW4BdLSo0wXldVCoYnG", "WQxdMCo+w8oe", "W6/cNCkiv8kr", "WPfqWPPLcw0DWRuyW7XAwW", "f8kruSkhWPe", "jZPCWR3cSa", "wCkmhCkLWRBcLSkDlSoum8ka", "fmkMW7W", "vmoOW63cLmkFwSo9W5X0W78u", "WORdQsddGG8", "tmk5W4VdLsm", "g8kHW7S", "WRddN8oBq8ot", "u8ofxSotW6BcKSkj", "DvRcLMtdHq", "WQvnW7L6W6m", "W4hcMmkfiSok", "WRClnZiJcLezD17cSSkZW5K", "WQ1rBSoCqW", "W7hdNJNdO2S", "W5BcGCkqkmor", "W7yYzmoAWQe", "mGBdOG", "W4JcK8oPxG", "pSktWQTavG", "btS9A1JdHSowcSoc", "qSouWQnCWPy", "oZhcNSkeWQZcQCotlW", "WOGiW6Dn", "nsTzWQRcRa", "CYvmcCoyWPxdUwHDpCkKWQZcUa", "WRGiWQVcSgS", "WRFdNSoo", "W45xWRXWW7hdUZpdLSoV", "eSkqWQfNWQRdQxJcKq", "rSobb8kLWQVcGmoiWRnt", "v0NcI2W", "WQxdJmoCs8oW", "uMWAESota8oAnq", "mCkwWR1v", "o8oPw3ldOq", "fIRcUW", "ECkHiNJdIa"];
  return ko = function() {
    return o;
  }, ko();
}
const Cn = {};
Cn[qA(130, 122, "e@kr")] = Qt, Cn[wA(-318, -328, -368, -332, "#Hf^")] = Et;
function Qe(o, i, t, e, A) {
  return BA(A - 474, o);
}
const qB = Cn;
function Go() {
  const o = ["W6lcS8orWQpcRq", "W7hcJuBdO8oq", "WOjDsSkAbW", "W6lcR1BcIHS", "qX7dJbxdTa", "W4RdM1K", "W4nhW49g", "CZBdRtWv", "k8kuWR8fWOi", "zhVdICorW7u", "W7ZdOXVdQv0", "emkBWROcWPG", "WR/cQeHkEq", "WO9dW6GtAG", "uCo2W5TVWQW", "l8k5W53dR8oG", "zSoOjWuh", "bCk0WPOXW6FdOSk9qNOEWPjNoG", "kSkIW7NdLre", "WPvouCkBaq", "WP9mv8kWfG", "cGpdRbFcSq", "W5roW5zyW7G", "W67dHq/dQvW", "A8kvW77cSNa", "WQ0FW5/cP0e", "qbFcNSkPW70", "F8oAW44tWOm", "W4ldRmoGfCkf", "W6HCae/cVa", "W6JcJvhdLa", "WQDEC2LQ", "xdGgFSkL", "sColaI05", "pgddNNKh", "pCkkW67dMH4", "W4fVFwLCvmkF", "eWzEt8oa", "rSotoWWA", "t8o7nW8z", "W5ddMmou", "WRHGWOVcPH8", "pwxdMhKT", "tZH+odK", "WOvFW4KwEW", "WONcMmkemK0", "AZdcIIP7WRLnDCoOWQVcNbe", "bGldKq7cPG", "nmk9W4ddHCoI", "W49leG", "FYzkW7JcTW", "WOmWW6W", "WOjFW7isFW", "W51oW4ryW7O", "WP4+W6VdJCoX", "C1/cOSkWWPe", "W4ZdVvnOW4u", "WR4PWOqBW7O", "WQBcV1TcuG", "CSkefgdcOG", "WOLAW4StW4G", "u8oSW53cImo6W6bwcCkNWRhcGaS7", "WPvZu8kagG", "bLNdKmo/dG", "nCkQW6RdNbC", "WRSpW6pcUvy", "fXxdKqdcOa", "W7ddGWu", "u1uff8keWQNcVCo+W5LGFmkN", "Ar5+lsi", "WOWoW7NcV3O", "WO3cR8ofW7q", "hKZdHSo/", "FhddH8oaW74", "W7jre13cSq", "W6VcH1W", "WPNcLSkrWORdJq", "oIumjSk7", "WOpdLSk3c8kB", "WPiOWOidW6W", "WQKpW7/cLLi", "WRpdMWFcLSkhW53dRCk2sSktfCo3", "WQ5zavTD", "vIBcICk6W6u", "EtBdQWGv", "FYnPjYG", "WR5Xeq", "WR4KWOlcG8oK", "EYhdRtqc", "BmosW4KyWPm", "W4ldRmo1bmkq", "qSoSmbGu", "n8kuWRSo", "W7BdS2PyW78", "WQC6W6BdImoJ", "m8k9W5ddH8oG", "WO8RWPazW70", "W4vAf2hcPG", "zM5/squ", "ECkpex3cSW", "dCkSWPRdVCkM", "u8o/jWWA", "lCkuWR8hWOu", "WPjyW4C0W5i", "rY8QwSkR", "WOC5WRFcKCo1", "WOHmb1Dt", "W7FcU1BcKa", "BxDJlJK", "W4VcKSoYda", "lHfsu8ox", "W6hcH1ZdK8ol", "W5hdOSo+zMi", "bmk7W7tdMfu", "lmkcW6e6WPldOSohW4C", "WRvFgvD7", "WO8wW6y", "WQldM8kQmmkC", "WPPHW4eyza", "WQ/cVSko", "v8oZoW0g", "WQ89WOpcGSoZ", "WQrlEuHY", "WQhcVmktl28", "W5NdU1L+W54", "WQLBgLXb", "WPedWOq9W78", "WO41WPxcPSot", "Ac5iW7pcLW", "W4ldKCoTe8kC", "W5fEW5rEW6S", "WQ9zhf5b", "WRrtiLvE", "gKFdGmoT", "W5vnaghcQW", "p3GxWQFdKXqFWRKGWR3cQZhdKq", "WOpcGCknWQ/dHG", "qSkYWOhdJCoJ", "WO9jW485W48", "A1RcPCoZW5S", "W7ZdIc7dR0y", "caLEvCku", "ySk9W7G", "iCoPW5RdJSoX", "odGblCkZ", "WQSpW57cSeu", "meBdGCoYhG", "WPFcUSowhhhcMfO", "W44PfIy9", "AdjMiI4", "WOmSW43dL8oN", "WRDeWOVcPWS", "W5XUW5fwW5m", "W6lcUum", "bGjdCSor", "W5NdS1fUW5a", "WOfjqxj6", "W5xdTCoOgmkf", "WRPoeebt", "WQVdL8kzje0", "Es5mW7JcKq", "nSkRWPBdU8kz", "WPKJWOCEW70", "WR5Xg1rD", "CCkDW7JcSNm", "A07cTq", "l8kMW7ZdJXO", "W5Dwbw3cQG", "WP1jqW", "W4zcW4ruW7q", "zM5K", "WQJcRmk8WOldHa", "uuxcKLFdOv1GWQNcQmkBW4ia", "o2NdM2HU", "yYPmW7hcJq", "WRBcQeXcxW", "WQKWW6ZdKSo2", "W5pcMSo7dfW", "zIPxW7hcGa", "CSkvW6JcVNm", "WPW1WQhcK8o/", "W7ZdNHNdSKy", "WQrtWOFcUX4", "W7ZdLaRdVKa", "xCoQW4b0W74", "WRBdNWdcKCkjW5/cS8kstCkxpSo3Fa", "WOvkW5S2W5i", "W5nCdMBcTG", "WOfjW7qhEW", "W7FdVG7dRKe", "W4JdPmo1mSku", "vmkaW67cSN0", "WR5kofDw", "A8ofW6nFW4xdLCkiswhdI8kOq1W", "W5FdU8oXEwm", "fWldGGJcUG", "wKFcM1FdOvXGWQtcRSkgW6SY", "W5ddSCoPy3q", "WOjdW7e", "ACkvW7hcSG", "qwXqEX4", "BZH+odK", "W4tdSCoTBhG", "WOftwKH7", "FtZdSsGe", "Eg3dMSoyW7m", "aGzArmog", "WO7cQmovW5ne", "F1JcO8k4WPG", "WR/cG8krWRhdGa", "W5VdS1r3W4i", "pgBdN3K", "bGJdLXpcTq", "ydxcGcP+WRXeASoPWO3cLYi", "W5dcM8kBWRFcGW", "bJNdJqFcUW", "W7BcJuddGCol", "W6hdImk9", "F3ddJCotW6u", "pmk8WRi", "WOrjW68hDG", "aSkZW7pdKvi", "vWBcICkYW6O", "WPi2WOuZW7S", "W6RdOe90W4m", "b8kvWOddN8kS", "A0RcTmk2WOa", "DCkvW7xcUwG", "iCkZWOddISk3", "Ax14tr0", "xvxcPCk7WPa", "W6NcRCo0WQxcTq", "W6VdJqldS0a", "W5HQWRpcL8k3oZ9lc8oEW5dcKG", "Eg50qH0", "dmkZWOddNa", "W4ONdcm6", "eSkPyfXnW7vlDraDW7an", "W74TcsmT", "pCkgW7W", "WR/cUe5owa", "BmoDW6fbWRK", "W4jqd3VcSq", "bH7dLXpcVq", "W7JdH8oFDqPzW5jTWPZdR1/dIHW", "EtBdQXGr", "WRNdM8kknCkc", "WRjxWPJcVaK", "WOjjtCkNgG", "o8k7W5ZdNGq", "u0HFwXG", "WOrCW5GZW4u", "WR7dMCkOoW", "W5neW45cW68", "ymo1oXKb", "WRVcOLq", "aa5zrmoq", "W6pcOKxcIbS", "lsmakCkO", "kSk6W7BdRXC", "W4hdS1b+", "ihldNe8N", "WPjmW4aoW4m", "FejAvbm", "WOBcPCoErMlcIaam", "rmoOW4H5WQ0", "brhdKbu", "WRLCWP0", "WRZcRfDo", "WO45WRpcN8oZ", "CuRcPmktWPe", "bq5NCCo3", "AhJdJSorW6q", "WP7cQmotW71s", "W59fW5m", "uCo2W6X2WRS", "W5BcH8o+g0C", "W4ZdRmooW4XJW79QBW", "pKZdKmo3gW", "W5ZdSCo2Bx8", "AJHIdIW", "WRtdNCkZn8km", "W4W2WOK", "BcPrW4pcLG", "l2xdPWS1W6RcUvq", "WO3cTCoFW7js"];
  return Go = function() {
    return o;
  }, Go();
}
function UA(o, i, t, e, A) {
  return DA(t - 327, i);
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return DA(r - 52, x);
  }
  function e(a, x, I, C, r) {
    return DA(r - -916, a);
  }
  function A(a, x, I, C, r) {
    return DA(I - -136, a);
  }
  const n = o();
  function g(a, x, I, C, r) {
    return DA(x - -86, I);
  }
  for (; ; )
    try {
      if (-parseInt(t(660, "6vOP", 672, 646, 620)) / 1 * (parseInt(A("9$Ii", 307, 366, 254, 485)) / 2) + parseInt(t(542, "e#!s", 467, 568, 488)) / 3 * (parseInt(e("Q7^0", -417, -340, -409, -277)) / 4) + -parseInt(g(414, 441, "LW5i", 307, 539)) / 5 + parseInt(A("LW5i", 527, 415, 447, 321)) / 6 * (-parseInt(t(423, "EQXA", 593, 625, 521)) / 7) + parseInt(e("fV2$", -332, -252, -465, -368)) / 8 + parseInt(t(371, "K61e", 462, 452, 468)) / 9 + parseInt(t(622, "e#!s", 683, 474, 592)) / 10 === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Go, -409807 + 120326 * -1 + 792406);
function DA(o, i) {
  const t = Go();
  return DA = function(e, A) {
    e = e - (-5225 + 2801 * 2);
    let n = t[e];
    if (DA.hNooVt === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      DA.LsZxWc = C, o = arguments, DA.hNooVt = !0;
    }
    const a = t[8989 * -1 + -4079 * -1 + -491 * -10], x = e + a, I = o[x];
    return I ? n = I : (DA.pAflrg === void 0 && (DA.pAflrg = !0), n = DA.LsZxWc(n, A), o[x] = n), n;
  }, DA(o, i);
}
function aA(o, i, t, e, A) {
  return DA(A - -689, e);
}
function tA(o, i, t, e, A) {
  return DA(e - 383, i);
}
function YA(o, i, t, e, A) {
  return DA(A - 345, t);
}
function bA(o, i, t, e, A) {
  return DA(o - 319, i);
}
var ka, Ga, fe;
class jB {
  constructor(i = {}) {
    P(this, fe);
    b(this, Ga, []);
    b(this, ka, {});
    function t(n, g, a, x, I) {
      return bA(x - -555, n);
    }
    function e(n, g, a, x, I) {
      return YA(n - 360, g - 199, n, x - 259, I - -756);
    }
    function A(n, g, a, x, I) {
      return aA(n - 170, g - 442, a - 17, a, x - 482);
    }
    H(this, fe, qB), this[e("6zBC", 208, 53, 186, 170) + A(525, 381, "0K*7", 444) + t("b)kF", 520, 304, 386)](i);
  }
  [(Ga = YA(885, 1045, "&FaP", 1063, 1006) + YA(819, 660, "nrG%", 640, 754), ka = bA(878, "Q7^0") + bA(763, "EQXA") + "s", UA(974, "LW5i", 894) + tA(957, "cDsY", 860, 883) + UA(662, "Mno)", 758) + "fo")](i) {
    function t(I, C, r, Q, c) {
      return bA(Q - 471, r);
    }
    const e = In(i);
    function A(I, C, r, Q, c) {
      return tA(I - 87, c, r - 203, C - 425);
    }
    function n(I, C, r, Q, c) {
      return tA(I - 362, c, r - 29, Q - -246);
    }
    const g = e == null ? void 0 : e[n(631, 705, 784, 646, "Dt2k") + A(1277, 1240, 1192, 1142, "1v5C") + "s"]();
    if (!(g != null && g[a(-71, "Lse%", -127) + "t"]) || !(g != null && g[a(-277, "XBE&", -193)]) || !(g != null && g[a(-69, "mgO&", -160) + A(1465, 1382, 1296, 1375, "fV2$")])) {
      if (a(-189, "K61e", -128) !== A(1474, 1363, 1477, 1410, "EaVi")) throw new L(x(747, 768, "N7ah", 563, 676) + a(-136, "Mno)", -40) + A(1424, 1347, 1232, 1215, "5S[e") + n(723, 850, 811, 764, "XBE&") + A(1296, 1306, 1374, 1219, "VHO[") + x(725, 843, "96HD", 731, 739));
      return _0x4c26e8 instanceof _0x23d3b3 && _0x248f11[A(1213, 1272, 1251, 1328, "9$Ii")] === a(-240, "Dt2k", -217) + x(641, 816, "[Ko9", 679, 678) + x(941, 941, "Dt2k", 992, 875) + t(1421, 1256, "MYe5", 1369);
    }
    if (e)
      if (a(-276, "ZKwG", -233) !== n(647, 429, 590, 570, "mgO&")) {
        const I = { ..._0xe43934 }, C = I, r = { ...typeof C[t(1384, 1266, "9$Ii", 1322)] == x(999, 1038, "XBE&", 908, 914) + "t" ? C[t(1255, 1278, "ZYX7", 1314)] : {}, ..._0x110d99 }, Q = r;
        if (_0x22a188) {
          const c = {};
          c[x(879, 849, "0K*7", 920, 802)] = _0x555618, Q[x(678, 650, "ZYX7", 557, 641) + t(1310, 1150, "8^(s", 1264)] = c;
        }
        return C[t(1219, 1255, "MYe5", 1269)] = Q, C;
      } else {
        const I = {};
        return I[n(660, 583, 602, 584, "fV2$")] = e[t(1155, 1079, "QmZT", 1169)], I.id = g[n(846, 706, 582, 714, "M^oR") + A(1414, 1305, 1388, 1170, "QmZT")], I;
      }
    function a(I, C, r, Q, c) {
      return tA(I - 373, C, r - 137, I - -1088);
    }
    function x(I, C, r, Q, c) {
      return UA(I - 58, r, c - -63);
    }
  }
  async [YA(592, 848, "M^oR", 653, 726) + aA(-236, -222, -147, "nrG%", -240) + bA(865, "QmZT") + "m"](i) {
    function t(I, C, r, Q, c) {
      return YA(I - 471, C - 444, C, Q - 429, I - -338);
    }
    const e = document[A(1513, "1v5C", 1494, 1460) + t(491, "#J4W", 420, 392) + x("tC$L", 1106, 988)](n(0, 137, 54, 71, "QmZT"));
    e[g(9, -131, "ZYX7") + g(-99, -91, "EaVi")] = !0, e[g(-9, -21, "GSHJ")] = !0, e[t(627, "5S[e", 745, 697) + A(1457, "fV2$", 1462, 1499) + "e"] = !0, e[g(-296, -176, "nL4(")][t(598, "]Y4h", 565, 544) + A(1397, "GSHJ", 1432, 1457)] = g(-31, -53, "6zBC") + A(1324, "6zBC", 1394, 1367), e[x("VHO[", 978, 930)][n(15, 87, 28, -51, "G@6E") + "ty"] = "0";
    function A(I, C, r, Q, c) {
      return aA(I - 332, C - 3, r - 492, C, Q - 1536);
    }
    e[t(567, "XBE&", 530, 438)][t(647, "oPSW", 577, 508) + t(637, "5S[e", 645, 665) + t(411, "ZKwG", 320, 497)] = t(597, "K61e", 548, 661);
    function n(I, C, r, Q, c) {
      return UA(I - 244, c, r - -792);
    }
    function g(I, C, r, Q, c) {
      return aA(I - 454, C - 26, r - 379, r, C - 73);
    }
    e[t(427, "cDsY", 507, 410)][t(528, "Snm7", 476, 550)] = t(579, "mgO&", 645, 460), e[t(498, "Mno)", 559, 573)][g(-79, -41, "oonw") + "t"] = x("N7ah", 1177, 1117);
    const a = await navigator[n(-138, -133, -57, 43, "ZYX7") + A(1382, "]Y4h", 1451, 1440) + "es"][n(253, 264, 173, 261, "aYIo") + A(1374, "Sa5L", 1363, 1394) + "ia"](i);
    e[t(569, "oPSW", 575, 687) + g(-351, -231, "e#!s")] = a, await e[x("tC$L", 904, 942)]();
    function x(I, C, r, Q, c) {
      return tA(I - 32, I, r - 138, r - 97);
    }
    return a;
  }
  async [tA(854, "Lse%", 780, 850) + aA(-376, -320, -361, "cDsY", -254) + tA(795, "t*JV", 669, 810)]() {
    var C, r;
    if (!$t()) {
      if (x(10, 25, 64, "EaVi") === n(778, 681, 708, 605, "oonw")) return;
      {
        const Q = {};
        return Q[x(66, 30, 12, "6vOP")] = _0xb0ac94[n(734, 602, 647, 608, "96HD")], Q.id = _0x39cfaf[a(152, 189, 54, 128, "b)kF") + i(328, 238, "nrG%", 269)], Q;
      }
    }
    function i(Q, c, E, d, l) {
      return aA(Q - 73, c - 134, E - 228, E, d - 487);
    }
    const t = await this[x(-55, -81, 60, "Snm7") + "st"](w(this, fe)[i(443, 546, "LW5i", 419)]), e = await this[n(905, 766, 634, 728, "C1C$") + "st"](w(this, fe)[x(6, 122, 93, "ZYX7")]), A = ((C = t[I(362, 442, 421, 425, "Lse%") + n(850, 778, 742, 715, "LW5i")]) == null ? void 0 : C[n(927, 831, 904, 831, "GSHJ")]) + i(266, 302, "Mno)", 193) + ((r = e[n(535, 585, 665, 650, "ZYX7") + n(662, 726, 733, 826, "Sa5L")]) == null ? void 0 : r[n(666, 762, 749, 621, "QmZT")]);
    function n(Q, c, E, d, l) {
      return bA(c - -111, l);
    }
    const g = await this[I(603, 474, 530, 394, "EaVi") + n(706, 598, 504, 495, "Snm7") + a(67, 121, 18, -1, "QmZT") + n(529, 604, 530, 672, "b)kF") + "lt"](A, t[x(87, -87, -41, "Sa5L") + "ge"], e[I(331, 396, 290, 499, "b)kF") + "ge"]);
    function a(Q, c, E, d, l) {
      return tA(Q - 284, l, E - 179, c - -796);
    }
    function x(Q, c, E, d, l) {
      return YA(Q - 97, c - 385, d, d - 466, E - -899);
    }
    function I(Q, c, E, d, l) {
      return aA(Q - 451, c - 55, E - 258, l, c - 579);
    }
    this[x(-51, -127, -9, "#J4W") + I(502, 376, 471, 368, "Sa5L")][x(-118, -229, -128, "oPSW")](g);
  }
  async [UA(868, "G@6E", 944) + "st"](i) {
    const { fallbackConstraints: t, maxTestDuration: e, primaryConstraints: A, runAmount: n, runDurationCutoffFactor: g } = i;
    let a = 2 * 1755 + -5922 + 2412, x = n, I;
    function C(h, p, G, R, M) {
      return tA(h - 456, p, G - 457, R - -836);
    }
    function r(h, p, G, R, M) {
      return YA(h - 415, p - 301, M, R - 286, R - 133);
    }
    let Q = this[l(978, 1013, 918, 950, "oonw") + E("nL4(", 355, 476) + c(932, 1075, "0K*7", 948) + "s"](this[r(1021, 910, 973, 889, "MYe5") + l(1057, 1008, 936, 1056, "fV2$") + "s"], A);
    function c(h, p, G, R, M) {
      return UA(h - 448, G, R - 34);
    }
    for (let h = -67 * 33 + -6064 + 8275; h < n; h++)
      if (l(654, 664, 708, 795, "96HD") !== C(-61, "(]wp", -95, 23)) {
        if (a > e * g)
          if (E("ZKwG", 418, 462) === l(992, 1002, 1077, 1008, "mgO&")) ({ deviceInfo: _0x2df228 } = _0x4761b7);
          else {
            x = h;
            break;
          }
        const p = await this[l(894, 1026, 1066, 1023, "6vOP") + l(716, 913, 798, 796, "6vOP") + C(101, "e#!s", 231, 118) + c(662, 653, "0K*7", 783)](Q);
        if (p[l(955, 926, 919, 943, "0K*7")])
          if (C(-105, "Sa5L", 46, 34) === l(1066, 999, 873, 993, "fjD%")) this[l(819, 902, 885, 912, "nrG%") + E("ZKwG", 710, 620) + E("ZKwG", 646, 567) + r(884, 925, 973, 972, "Z1zj") + "or"](p[C(-44, "LW5i", -151, -51)]) && (r(1120, 1112, 949, 985, "ZYX7") === l(898, 1024, 784, 888, "N7ah") ? (_0x70b222 = this[l(778, 774, 957, 826, "Snm7") + E("K61e", 748, 661) + E("EaVi", 673, 667) + "s"](this[l(902, 976, 1049, 963, "nL4(") + c(1039, 971, "fV2$", 1010) + "s"], _0x2c8c0d), _0x5b64d2--) : (Q = this[l(916, 1040, 854, 940, "aYIo") + r(999, 942, 797, 878, "8^(s") + C(192, "b)kF", 52, 84) + "s"](this[E("ZYX7", 649, 686) + c(941, 818, "#J4W", 873) + "s"], t), h--));
          else {
            const G = {};
            return G[C(230, "VHO[", 203, 203) + E("]Y4h", 663, 581)] = this[C(117, "N7ah", 45, 125) + C(63, "fV2$", -63, 4)], G[C(-48, "96HD", 96, 3) + E("N7ah", 445, 529) + "e"] = !1, G;
          }
        p[c(819, 954, "ZKwG", 813) + E("nL4(", 561, 502)] && (E("(]wp", 558, 520) === r(742, 882, 918, 864, "C1C$") ? { deviceInfo: I } = p : this[l(989, 1156, 1183, 1069, "LW5i") + c(883, 761, "Sa5L", 841) + C(213, "LW5i", 230, 97) + E("cDsY", 402, 458) + "or"](_0x6eb51[c(892, 937, "5S[e", 1016)]) && (_0x3c5825 = this[c(930, 1147, "Q7^0", 1009) + C(181, "nrG%", 70, 78) + C(-7, "G@6E", -71, 5) + "s"](this[E("e#!s", 647, 544) + c(946, 925, "QmZT", 943) + "s"], _0x3394ae), _0x253d5c--)), a += p[E("fjD%", 616, 719) + l(890, 777, 900, 813, "nrG%")] || -167 + 15 * -143 + 2312;
      } else {
        const p = {};
        p[C(-212, "#J4W", 41, -70)] = _0x75a970, _0x4338d5[r(919, 949, 1041, 932, "[Ko9") + C(330, "MYe5", 241, 193)] = p;
      }
    function E(h, p, G, R, M) {
      return tA(h - 344, h, G - 476, G - -305);
    }
    const d = Math[c(862, 772, "C1C$", 872)](a / (x || -11 * -261 + -1039 * 3 + -13 * -19));
    this[l(1027, 945, 1123, 1061, "oonw") + C(-7, "fq(o", -200, -66) + "s"] = this[r(821, 748, 827, 888, "6zBC") + r(1039, 1202, 1043, 1087, "96HD") + c(1037, 984, "&FaP", 1004) + "s"](this[l(1126, 861, 905, 1004, "ZKwG") + C(146, "0K*7", 96, 134) + "s"], {}, I == null ? void 0 : I.id);
    function l(h, p, G, R, M) {
      return bA(R - 88, M);
    }
    const B = {};
    return B[E("96HD", 389, 524) + "ge"] = d, B[C(165, "(]wp", 81, 171) + E("96HD", 556, 471)] = I, B;
  }
  async [aA(-194, -217, 44, "&FaP", -86) + bA(789, "Sa5L") + tA(797, "LW5i", 681, 804) + UA(868, "e#!s", 757)](i) {
    function t(x, I, C, r, Q) {
      return tA(x - 303, I, C - 287, Q - -361);
    }
    function e(x, I, C, r, Q) {
      return aA(x - 208, I - 311, C - 107, Q, x - 342);
    }
    function A(x, I, C, r, Q) {
      return tA(x - 17, Q, C - 72, r - 135);
    }
    function n(x, I, C, r, Q) {
      return YA(x - 117, I - 98, I, r - 405, r - -191);
    }
    const g = Date[A(1088, 1122, 1057, 1041, "C1C$")]();
    function a(x, I, C, r, Q) {
      return aA(x - 66, I - 152, C - 360, r, Q - 1494);
    }
    try {
      if (A(880, 1114, 979, 995, "C1C$") === n(510, "cDsY", 624, 579, 549)) this[e(202, 289, 220, 299, "Lse%") + A(1009, 1044, 1014, 910, "Dt2k") + "s"] = _0x365ddd;
      else {
        const x = await this[t(710, "9$Ii", 604, 754, 653) + a(1473, 1490, 1438, "t*JV", 1438) + a(1170, 1404, 1232, "Sa5L", 1266) + "m"](i), I = Date[e(206, 289, 345, 229, "oonw")]() - g, C = this[t(325, "#J4W", 590, 528, 467) + n(695, "Snm7", 864, 758, 737) + t(521, "G@6E", 430, 422, 437) + "fo"](x);
        $0(x);
        const r = {};
        return r[t(740, "tC$L", 699, 538, 634) + t(572, "e#!s", 389, 593, 452)] = I, r[a(1238, 1384, 1185, "nL4(", 1309) + A(989, 1133, 1091, 1098, "K61e")] = C, r;
      }
    } catch (x) {
      if (n(699, "MYe5", 604, 602) !== a(1314, 1396, 1297, "fq(o", 1264)) {
        const I = {};
        return I[n(675, "&FaP", 849, 814)] = x, I;
      } else throw new _0x1e375b(n(813, "6zBC", 745, 739) + t(644, "LW5i", 778, 605, 667) + a(1261, 1451, 1193, "6vOP", 1333) + A(1141, 1072, 1074, 1001, "aYIo") + e(116, 38, 118, -10, "nL4(") + a(1231, 1334, 1186, "kbRu", 1273));
    }
  }
  [YA(695, 646, "oonw", 887, 744) + aA(-190, -185, -119, "mgO&", -217) + tA(758, "GSHJ", 757, 796) + YA(867, 753, "0K*7", 892, 840) + "or"](i) {
    function t(n, g, a, x, I) {
      return YA(n - 59, g - 216, n, x - 384, I - -253);
    }
    function e(n, g, a, x, I) {
      return bA(g - -1146, I);
    }
    function A(n, g, a, x, I) {
      return YA(n - 139, g - 45, I, x - 135, x - 171);
    }
    return i instanceof DOMException && i[t("mgO&", 778, 614, 605, 699)] === A(986, 987, 1175, 1080, "Mno)") + A(1025, 837, 938, 950, "N7ah") + e(-571, -445, -581, -369, "EQXA") + t("96HD", 815, 746, 867, 749);
  }
  async [tA(1069, "oPSW", 874, 1011) + tA(713, "M^oR", 831, 821) + bA(756, "Sa5L") + aA(-238, -207, -151, "0K*7", -145) + "lt"](i, t, e) {
    return { optSetting: await KB(i), afterOpt: t, beforeOpt: e };
  }
  [UA(858, "t*JV", 745) + bA(736, "&FaP") + UA(971, "ZYX7", 956)](i) {
    function t(A, n, g, a, x) {
      return bA(a - 468, g);
    }
    function e(A, n, g, a, x) {
      return UA(A - 294, x, a - -541);
    }
    Object[e(241, 401, 313, 384, "LW5i") + "es"](i)[t(1458, 1473, "nL4(", 1422) + "ch"](([A, n]) => {
      function g(I, C, r, Q, c) {
        return t(I - 419, C - 23, Q, r - 15);
      }
      function a(I, C, r, Q, c) {
        return t(I - 1, C - 316, I, r - -1303);
      }
      function x(I, C, r, Q, c) {
        return t(I - 423, C - 374, C, Q - -857);
      }
      if (g(1371, 1539, 1398, "5S[e") === g(1316, 1335, 1328, "Mno)")) {
        const I = A;
        if (w(this, fe)[I])
          if (g(1490, 1330, 1428, "Dt2k") === a("(]wp", -173, -34)) w(this, fe)[I] = { ...w(this, fe)[I], ...n };
          else {
            const C = {};
            return C[x(419, "Q7^0", 436, 373)] = _0xc3f689, C;
          }
      }
    });
  }
  [aA(-368, -141, -359, "(]wp", -229) + tA(727, "8^(s", 758, 783) + aA(-35, -180, -249, "aYIo", -174) + "s"](i = {}, t = {}, e) {
    function A(c, E, d, l, B) {
      return bA(d - -47, c);
    }
    function n(c, E, d, l, B) {
      return UA(c - 434, c, B - -1321);
    }
    const g = { ...i }, a = g, x = { ...typeof a[n("1v5C", -507, -513, -475, -495)] == Q(289, 228, "6vOP") + "t" ? a[I(876, "ZKwG", 1120, 1052, 1018)] : {}, ...t };
    function I(c, E, d, l, B) {
      return tA(c - 259, E, d - 286, B - 113);
    }
    function C(c, E, d, l, B) {
      return bA(l - -299, B);
    }
    const r = x;
    if (e)
      if (Q(497, 553, "EaVi") !== A("8^(s", 834, 750)) {
        const c = {};
        c[n("tC$L", -301, -227, -233, -350)] = e, r[n("GSHJ", -527, -347, -400, -464) + Q(333, 427, "Sa5L")] = c;
      } else {
        const c = _0x33de28(_0x440b06), E = c == null ? void 0 : c[C(547, 399, 520, 459, "Q7^0") + Q(295, 324, "VHO[") + "s"]();
        if (!(E != null && E[n("aYIo", -399, -494, -495, -465) + "t"]) || !(E != null && E[Q(270, 309, "0K*7")]) || !(E != null && E[C(517, 673, 472, 537, "N7ah") + A("fV2$", 850, 846)])) throw new _0x2d08eb(Q(393, 530, "t*JV") + n("K61e", -629, -621, -487, -502) + Q(388, 506, "Dt2k") + C(556, 685, 490, 581, "Dt2k") + n("8^(s", -340, -552, -582, -480) + n("XBE&", -430, -422, -295, -421));
        if (c) {
          const d = {};
          return d[A("MYe5", 963, 887)] = c[A("EaVi", 606, 725)], d.id = E[C(679, 632, 730, 626, "G@6E") + n("Snm7", -284, -270, -357, -400)], d;
        }
        return void (2065 + 5 * -413);
      }
    a[I(986, "(]wp", 1102, 1150, 1031)] = r;
    function Q(c, E, d, l, B) {
      return tA(c - 475, d, d - 333, c - -491);
    }
    return a;
  }
  [tA(1071, "e#!s", 930, 1025) + aA(-192, -401, -314, "oonw", -282) + UA(903, "t*JV", 815)](i) {
    function t(A, n, g, a, x) {
      return bA(n - 389, g);
    }
    function e(A, n, g, a, x) {
      return aA(A - 449, n - 163, g - 27, x, n - 432);
    }
    this[t(1359, 1264, "nL4(") + e(390, 319, 198, 432, "kbRu") + "s"] = i;
  }
  [bA(919, "Q7^0") + aA(98, -79, -6, "GSHJ", -36) + UA(897, "MYe5", 837) + tA(716, "aYIo", 673, 788) + aA(-176, -19, -132, "G@6E", -148)]() {
    const i = {};
    function t(g, a, x, I, C) {
      return YA(g - 78, a - 251, x, I - 444, I - -1008);
    }
    function e(g, a, x, I, C) {
      return UA(g - 1, a, x - -296);
    }
    function A(g, a, x, I, C) {
      return YA(g - 220, a - 49, I, I - 112, x - -114);
    }
    function n(g, a, x, I, C) {
      return aA(g - 87, a - 350, x - 164, C, x - 1088);
    }
    return i[t(7, -2, "6zBC", -38) + t(-245, -261, "Sa5L", -177)] = this[n(715, 789, 854, 761, "K61e") + n(1056, 958, 964, 865, "MYe5")], i[e(723, "Lse%", 588) + A(831, 1023, 890, "Snm7") + "e"] = !1, i;
  }
}
fe = new WeakMap();
const io = {};
io.width = 1920, io.height = 1080, io.facingMode = qn.FRONT;
const ZB = io;
var Ve, ht, xe;
class yI {
  constructor({ defaultVideoConstrains: i = ZB, minCameraShorterSide: t = Zc } = {}) {
    P(this, Ve);
    P(this, ht, []);
    P(this, xe, null);
    const e = {};
    e.defaultVideoConstrains = i, e.minCameraShorterSide = t, H(this, Ve, e);
  }
  get availableCameraProperties() {
    return w(this, ht);
  }
  get mediaStream() {
    return w(this, xe);
  }
  get videoTrack() {
    return w(this, xe) ? In(w(this, xe)) : void (-978 * -6 + 34 * -1 + -5834);
  }
  get isCameraActive() {
    var i;
    return !!((i = w(this, xe)) != null && i.active);
  }
  static async requestPermission() {
    const i = {};
    i.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(i);
    $0(t);
  }
  async open(i = {}) {
    ea() && n0() && await zi(-1 * 9448 + 35 * 131 + 11 * 483), H(this, xe, await navigator.mediaDevices.getUserMedia(i)), this.checkVideoTrackSettings();
  }
  async getNextCameraDeviceId() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get next device");
    const i = await hi(), t = this.videoTrack.getSettings(), e = i.findIndex((n) => n.deviceId === t.deviceId);
    return (i[e + (327 * 23 + 2239 + -9759)] ?? i[-1 * -5223 + 2679 + 7902 * -1]).deviceId;
  }
  getCurrentConstraintsWithSpecifiedDeviceId(i) {
    if (!this.videoTrack) throw Error("Video track must be initialized to get constraints");
    const t = this.videoTrack.getConstraints();
    return this.getConstraints(t, i);
  }
  close() {
    w(this, xe) && ($0(w(this, xe)), H(this, xe, null));
  }
  async getProperties() {
    const i = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = i;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = w(this, ht), A;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const i = this.getSettings();
    if (!i.width) throw new L("Video width is undefined");
    if (!i.height) throw new L("Video height is undefined");
    const t = {};
    return t.width = i.width, t.height = i.height, t;
  }
  async getDeviceName() {
    const i = this.getSettings(), t = await II(), e = t.find((A) => A.deviceId === i.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(i) {
    return i === qn.FRONT ? void (1601 + 14 * 629 + -10407) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return jn() ? (await hi()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (3328 * 3 + 9907 * 1 + -19891 * 1);
  }
  async collectAvailableCamerasInfo() {
    const i = await hi();
    for (const t of i) {
      ea() && n0() && await zi(450);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const n = await navigator.mediaDevices.getUserMedia(A), g = In(n);
        if (!g) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const a = g.getSettings(), x = { ...a };
        x.deviceName = g.label;
        const I = {};
        I.cameraProperties = x;
        const C = I;
        w(this, ht).push(C), $0(n);
      } catch (e) {
        e instanceof Error && L.logError(e);
      }
    }
  }
  getConstraints(i, t) {
    const e = { ...w(this, Ve).defaultVideoConstrains, ...i };
    e.deviceId = t ? { exact: t } : void (9885 * -1 + -3014 + -1 * -12899);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const i = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(i != null && i.height) || !(i != null && i.width))
      throw this.close(), new L("Could not init camera settings");
    if (typeof w(this, Ve).minCameraShorterSide != "number") return;
    if (Math.min(i == null ? void 0 : i.width, i == null ? void 0 : i.height) < w(this, Ve).minCameraShorterSide)
      throw this.close(), new L("Could not init video because of low camera resolution: " + i.width + "x" + i.height + ".");
  }
}
Ve = new WeakMap(), ht = new WeakMap(), xe = new WeakMap();
var I0;
class VB {
  constructor({ cameraEvaluator: i, cameraHandler: t, performanceCheckup: e, videoHandler: A }) {
    P(this, I0, !1);
    b(this, "videoHandler");
    b(this, "cameraHandler");
    b(this, "performanceCheckup");
    b(this, "cameraEvaluator");
    this.videoHandler = A, this.cameraHandler = t, this.performanceCheckup = e, this.cameraEvaluator = i;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    w(this, I0) || (H(this, I0, !0), await yI.requestPermission());
  }
  async startFirstVideoStream(i = {}) {
    await this.requestCameraPermission(), this.performanceCheckup.initPerformanceCheckup(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(i.facingMode), e = this.cameraHandler.getConstraints(i, t == null ? void 0 : t.deviceId);
    !n0() && (this.cameraEvaluator.setConstraints(e), await this.cameraEvaluator.evaluateCamera()), await this.startStream(e);
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const i = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(i != null && i.width)) throw new L("Cant take photo - video width is undefined");
    if (!(i != null && i.height)) throw new L("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = i.width, t.height = i.height;
    const e = t.getContext("2d");
    if (!e) throw new L("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 3309 + -32 * 199 + 3059, -7397 * 1 + -1697 + 9094 * 1), { image: t, timestamp: Date.now() };
  }
  stopStreaming() {
    this.cameraHandler.close(), this.videoHandler.stop(), this.performanceCheckup.stopPerformanceCheckup();
  }
  pauseStream() {
    this.cameraHandler.close(), this.videoHandler.stop();
  }
  async startStream(i) {
    await this.cameraHandler.open(i), tB() && (this.cameraHandler.close(), await this.cameraHandler.open(i)), await this.mountVideoStream();
  }
  async switchCamera() {
    const i = await this.cameraHandler.getNextCameraDeviceId(), t = this.cameraHandler.getCurrentConstraintsWithSpecifiedDeviceId(i);
    this.pauseStream(), !n0() && (this.cameraEvaluator.setConstraints(t), await this.cameraEvaluator.evaluateCamera()), await this.startStream(t);
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
I0 = new WeakMap();
var pe;
class _B {
  constructor(i) {
    P(this, pe);
    H(this, pe, i);
  }
  get videoElement() {
    return w(this, pe);
  }
  async play(i) {
    w(this, pe).srcObject = i, await w(this, pe).play();
  }
  stop() {
    w(this, pe).srcObject = null;
  }
  hasSrcObject() {
    return !!w(this, pe).srcObject;
  }
}
pe = new WeakMap();
function XA(o, i, t, e, A) {
  return sA(o - 417, e);
}
function So() {
  var o = ["xLWiFSkV", "oNn3FSoW", "WRRdICo+WRbi", "WRJcV8kxhLG", "W70scW", "W41dW4y", "nHVdN33cSq", "oSkeuSkAWRfaumk2W7L9W4Hrja", "W59iW4BdH8kr", "W6fHWOtcTmkv", "C0pcIYVdOCo0W5S/n8kDyfm", "l8kVW7pdI3K", "WPZcSSkgnLy", "ydyd", "WO3dJKy", "y0NdTCkDbG", "W6/cJ1hcRx8", "WOpdLuhdT8kR", "h2CpqmkqoSkw", "W6hcK1JcU3u", "WRtdGCoIWQDq", "WRJcOf7cUG4", "Fdus", "WQK+W60", "W71UoCoGjujhWOhdHSoznmoTWRm", "WQmHW601WR4", "WPq2C8oyaW", "W6pcGCkmnSkruCkWkXb0W5WJW44", "WPndW7q", "WQ5eW6mUpG", "y0NdTCkjgW", "WPq7vg1HWQVcVh7cUg0bWPO", "WQK/ESkACa", "ASkuWQ3cKCos", "eMNdV1uA", "W69hWOeGsq", "lCkUWPddKmkk", "W6bCWOaNDG", "oHNcVSoFqCoPWQpcRriHWP/cVa", "W7hcOCo4W4PkWOK1W7VdQ8kIWQK", "W4zBW6/cTgG", "AmoafmoTW68", "W5azWRv8CSknpeBdS1zW", "WR0zyCkKEW", "W4PBW7RcR1e", "vmo6nSk0", "W5SgWRBdRW", "WRhdMCosFCoa", "WRRcN8kvmfm", "W5WKWR3dSL0", "WRJcI3FcJsa", "BwFdQCkuma", "WPqpCmoonq", "W55XlSkhuq", "pSoiW63cJSowFCondeu", "BvxdVmkFeq", "BSkLWQVdGCkw", "W7f9oCkWtq", "DCknWQ3cH8ov", "cSkJW4tdH0O", "W5CaWQ8", "W7SxfSoisG", "at3dGSoHWOC", "mb/dKx3cHG", "WQbqv8konmo6W6xdGaRdMtCv", "W7n2oCkOtq", "W5VdSCkf", "evWPtSk+hHhcKmojCmk6uSkN", "sWPYgCoQ", "WPGQFmodga", "W4BdO8kgWRSk", "W4CkCSobgmoTWPq", "t8kvWRRcGCon", "rNOEE8kZ", "WOndW6u/", "ggddR18j", "WRSAW4SHsM7cRxlcMW", "sCkHWP7dVa0", "W5bmW5ZdT8ku", "WPWLE8oufa", "W7NcPeG", "qexdR8koaq", "jCoGW6VdImkvWR5de1O", "yCkyWOVcJCoG", "WO/cUmk1BZa", "W5abWRhdV3a", "lmo0W5HwCa", "BdKYcmkUimkvDmkKW5vx", "WQmRF8oxeSoXWQTVW5ddKZqPWQC", "WOzAW6dcUgm", "WOtdKfRdVSk+", "WOlcSSoEW6vfWPavcf5bBq", "nezDD8oD", "WQRcTmkx", "W7HgWPBcGSkP", "WQbwkSkstCkYW70", "vNdcISoHWPxdQ0ysAq", "W51EW4hdKmkx", "WRVcHmkXAsy", "WPFdL1W", "W4zAW7RcMhu", "BaKdpZW", "WR7cVSkheeS", "lv7dONqp", "tq5LcSo9", "aSkKqH3dTa", "xMSiE8kr", "WPJdNmoyzmou", "B0NdUmkMeq", "iCkZWORdP8km", "W6dcRf9Qvq", "WPfVW6GDzW", "iMz4h1m", "dsRdM8oNWRi", "aYhdHSohWOS", "F8kjWRRcJmod", "FSo6o8kZWRC", "WQS2W7eKWRG", "vmkeWRZdOry", "W71cWQZcICkd", "jSkYWPq", "q8o9la", "W4ddR8keWROO", "WPbYW5KXtW", "W59nj8kZyq", "s3tdRM45W6y+", "WPyAWRVdQcZdJmkkW49vWPldRfic", "j8oPW4TDya"];
  return So = function() {
    return o;
  }, So();
}
function TA(o, i, t, e, A) {
  return sA(o - -124, i);
}
function Ne(o, i, t, e, A) {
  return sA(t - -209, o);
}
function ge(o, i, t, e, A) {
  return sA(i - -342, e);
}
function Ce(o, i, t, e, A) {
  return sA(i - -836, t);
}
(function(o, i) {
  function t(I, C, r, Q, c) {
    return sA(r - 17, I);
  }
  function e(I, C, r, Q, c) {
    return sA(r - -495, c);
  }
  function A(I, C, r, Q, c) {
    return sA(r - 388, Q);
  }
  function n(I, C, r, Q, c) {
    return sA(r - 342, Q);
  }
  function g(I, C, r, Q, c) {
    return sA(Q - 202, c);
  }
  for (var a = o(); ; )
    try {
      var x = parseInt(g(620, 523, 526, 560, "@cNp")) / 1 * (parseInt(g(551, 488, 488, 514, "2%0L")) / 2) + parseInt(A(685, 685, 721, "BpGU", 664)) / 3 * (parseInt(t("eeal", 320, 365, 387, 353)) / 4) + -parseInt(n(722, 640, 660, "TqpU", 598)) / 5 * (parseInt(n(595, 588, 603, "dcS4", 547)) / 6) + -parseInt(A(680, 605, 645, "%Pdo", 633)) / 7 * (-parseInt(g(510, 475, 420, 464, "zss#")) / 8) + parseInt(e(-305, -266, -241, -214, "dcS4")) / 9 + -parseInt(t("jsog", 372, 342, 284, 382)) / 10 + -parseInt(n(681, 678, 703, "Ww@n", 745)) / 11;
      if (x === i) break;
      a.push(a.shift());
    } catch {
      a.push(a.shift());
    }
})(So, -152909 * -5 + -173 * 4159 + 442417);
function sA(o, i) {
  var t = So();
  return sA = function(e, A) {
    e = e - (11039 + -1 * 10799);
    var n = t[e];
    if (sA.TerXmE === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (var p = 0, G = c.length; p < G; p++)
          E += "%" + ("00" + c.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var c = [], E = 0, d, l = "";
        r = g(r);
        var B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      sA.yiPceX = a, o = arguments, sA.TerXmE = !0;
    }
    var x = t[0], I = e + x, C = o[I];
    return C ? n = C : (sA.qKtGoB === void 0 && (sA.qKtGoB = !0), n = sA.yiPceX(n, A), o[I] = n), n;
  }, sA(o, i);
}
var Sa, Na, Fa;
class XB {
  constructor() {
    b(this, Fa, -2965 + -3 * -1591 + -904 * 2);
    b(this, Na);
    b(this, Sa, void (584 * -13 + -4053 + 11645));
    function i(A, n, g, a, x) {
      return XA(a - -996, n - 455, g - 49, n);
    }
    function t(A, n, g, a, x) {
      return Ce(A - 374, a - 1519, n);
    }
    function e(A, n, g, a, x) {
      return ge(A - 433, g - -24, g - 82, n);
    }
    this[t(923, "2GH@", 928, 958) + e(-156, "nv9z", -125) + e(-71, "LuTf", -22) + i(-353, "glur", -342, -333)] = Date[t(928, "2GH@", 936, 969)]();
  }
  [(Fa = TA(146, "Ww@n") + TA(139, "K!e8") + Ne("GtB@", 85, 50), Na = TA(127, "S^)a") + TA(187, "AOWM") + ge(41, 15, 63, "Md80") + XA(724, 668, 730, "vu6A"), Sa = Ne("AOWM", 13, 47) + XA(740, 705, 758, "9KKl") + "p", ge(-61, -98, -124, "K!e8") + Ce(-433, -493, "S^)a") + ge(6, 18, 49, "%Pdo"))]() {
    function i(n, g, a, x, I) {
      return ge(n - 36, n - -20, a - 37, a);
    }
    this[i(5, 64, "2%0L") + A(-268, "&tH%", -243) + A(-241, "vu6A", -195)]++;
    function t(n, g, a, x, I) {
      return ge(n - 76, n - 802, a - 315, I);
    }
    function e(n, g, a, x, I) {
      return TA(g - 1106, x);
    }
    function A(n, g, a, x, I) {
      return XA(n - -974, g - 208, a - 10, g);
    }
    if (this[t(788, 725, 787, 851, "nv9z") + A(-227, "2GH@", -221) + i(-63, -93, "K!e8")] === 1 * -4166 + -4678 * -1 + -511 * 1)
      if (i(-78, -139, "#c9T") !== t(750, 811, 691, 812, "dcS4")) this[t(787, 791, 738, 756, "eeal") + e(1295, 1329, 1307, "dcS4") + "p"] = Date[A(-203, "S^)a", -205)]() - this[i(1, 22, "lx&r") + A(-216, "HKl3", -200) + t(748, 785, 712, 768, "%Pdo") + i(-45, -21, "r#LI")];
      else return;
  }
  [Ce(-569, -564, "2%0L") + TA(210, "7EX#") + TA(238, "Ww@n") + XA(723, 660, 743, "GtB@") + "up"]() {
    if (!$t())
      return t(-136, "LuTf", -119) === t(-74, "0[PR", -131), void 0;
    this[i(-308, -362, -361, "r#LI") + i(-371, -331, -378, "7EX#") + e("AOWM", 756, 820)] = -8 * 100 + 1411 + -611;
    function i(g, a, x, I, C) {
      return ge(g - 285, x - -302, x - 313, I);
    }
    function t(g, a, x, I, C) {
      return ge(g - 416, x - -92, x - 341, a);
    }
    this[e(")Nd4", 826, 884) + A(815, 759, 753, 779, "on4!") + "p"] = void (4 * 1391 + -573 * -9 + -10721);
    function e(g, a, x, I, C) {
      return Ne(g, a - 361, x - 764);
    }
    function A(g, a, x, I, C) {
      return Ne(C, a - 206, g - 742);
    }
    function n(g, a, x, I, C) {
      return Ce(g - 128, x - -94, I);
    }
    window[n(-564, -590, -566, "%Pdo") + e("GtB@", 960, 897) + e("@sjg", 795, 833) + e("9KKl", 779, 795)](t(-149, "f5Lt", -121) + "wn", this[A(818, 868, 881, 843, "0[PR") + t(-108, "cdtH", -89) + e("@cNp", 862, 853)][t(-132, "S^)a", -94)](this));
  }
  [Ce(-609, -557, "zss#") + XA(737, 682, 698, "lx&r") + Ne("lx&r", 99, 36) + Ce(-502, -470, "eeal") + "up"]() {
    function i(a, x, I, C, r) {
      return TA(C - -42, r);
    }
    function t(a, x, I, C, r) {
      return Ce(a - 496, x - 519, a);
    }
    function e(a, x, I, C, r) {
      return Ne(C, x - 281, r - 1192);
    }
    if (!$t()) {
      if (n("nv9z", 1252, 1194, 1190) !== n("&w6q", 1119, 1148, 1171)) return;
      if (!_0x52de69() || !this[n(")Nd4", 1238, 1285, 1250) + e(1313, 1348, 1251, "Ahxu", 1288) + "p"]) {
        var A = {};
        return A[n("glur", 1174, 1235, 1197) + i(166, 159, 137, 127, "Z3qN") + "e"] = !1, A;
      }
      return { performance: !0, hiccupAmount: this[n("TqpU", 1270, 1185, 1247) + e(1234, 1270, 1174, "Z3qN", 1235) + n("#c9T", 1109, 1201, 1164) + "t"](), firstHiccup: this[i(193, 114, 184, 136, "K!e8") + i(145, 104, 65, 94, "0[PR") + n(")Nd4", 1270, 1239, 1252) + n("zss#", 1293, 1325, 1277) + "ss"]() };
    }
    function n(a, x, I, C, r) {
      return XA(C - 504, x - 168, I - 492, a);
    }
    function g(a, x, I, C, r) {
      return Ne(x, x - 447, r - -577);
    }
    window[i(102, 94, 117, 102, "GtB@") + i(192, 161, 129, 193, "dcS4") + e(1325, 1210, 1303, "eeal", 1264) + "r"](t("cdtH", 7) + "wn", this[t("^%Ww", -21) + e(1373, 1375, 1317, "lx&r", 1329) + e(1335, 1266, 1227, "AOWM", 1291)][g(-415, "on4!", -499, -437, -447)](this));
  }
  [XA(736, 778, 792, "r#LI") + TA(143, "vu6A") + "lt"]() {
    function i(a, x, I, C, r) {
      return TA(r - 806, a);
    }
    function t(a, x, I, C, r) {
      return ge(a - 95, r - -495, I - 361, I);
    }
    function e(a, x, I, C, r) {
      return XA(a - -656, x - 367, I - 189, x);
    }
    if (!$t() || !this[t(-588, -570, "&w6q", -637, -573) + t(-577, -604, "cdtH", -561, -590) + "p"]) {
      if (t(-544, -565, "H5&P", -598, -579) === e(38, "&tH%", -11)) return this[i("cdtH", 952, 962, 950, 991) + n(391, "MCSZ", 349, 345) + t(-588, -507, "on4!", -570, -550)];
      var A = {};
      return A[t(-576, -629, "GH(w", -610, -566) + i("Md80", 973, 991, 1022, 982) + "e"] = !1, A;
    }
    function n(a, x, I, C, r) {
      return TA(C - 134, x);
    }
    function g(a, x, I, C, r) {
      return TA(x - 1040, r);
    }
    return { performance: !0, hiccupAmount: this[e(58, "GtB@", 31) + g(1230, 1268, 1263, 1256, "eeal") + n(326, "2%0L", 254, 304) + "t"](), firstHiccup: this[e(112, "dcS4", 171) + g(1222, 1269, 1333, 1245, "Ahxu") + i("@cNp", 991, 1040, 992, 1037) + i("f5Lt", 1033, 977, 996, 992) + "ss"]() };
  }
  [ge(-123, -68, -31, "cdtH") + TA(226, "zy^!") + Ne("TqpU", 70, 128) + "t"]() {
    function i(e, A, n, g, a) {
      return ge(e - 129, A - 312, n - 16, g);
    }
    function t(e, A, n, g, a) {
      return XA(e - -576, A - 311, n - 264, g);
    }
    return this[t(96, 59, 160, "nd%e") + i(309, 265, 222, "H5&P") + i(295, 292, 316, "9KKl")];
  }
  [Ce(-572, -556, "zss#") + Ce(-597, -587, "eeal") + XA(755, 719, 736, "7EX#") + Ce(-487, -487, "cdtH") + "ss"]() {
    function i(t, e, A, n, g) {
      return XA(n - -1036, e - 19, A - 94, e);
    }
    return this[i(-265, "^%Ww", -282, -305) + i(-337, "HKl3", -354, -346) + "p"];
  }
}
function zB(o) {
  const i = jA(null), [t, e] = NA(), [A, n] = NA(), { handleError: g, setIsCameraReady: a } = Ye(), x = be((C) => {
    n((r) => iB(C, r));
  }, []);
  X(() => {
    if (!i.current) {
      g(new L("Something went wrong during video initialization"));
      return;
    }
    const C = new _B(i.current), r = new jB(), Q = new yI(), c = new XB(), E = {};
    E.videoHandler = C, E.cameraHandler = Q, E.performanceCheckup = c, E.cameraEvaluator = r;
    const d = new VB(E);
    return (async () => {
      try {
        const B = {};
        B.facingMode = o, await d.startFirstVideoStream(B);
      } catch (B) {
        if (B instanceof Error) {
          g(L.fromCameraError(B));
          return;
        }
      }
      e(d), a(!0), x(d.getCameraResolution());
    })(), () => {
      d == null || d.stopStreaming(), a(!1), e(void (2999 + 2337 * 1 + -5336));
    };
  }, [o, g, a, i, x]);
  const I = {};
  return I.cameraService = t, I.cameraResolution = A, I.onCameraResolutionChange = x, I.videoRef = i, I;
}
function $B({ cameraFacing: o, children: i }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: n } = zB(o), g = LA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: n
    }),
    [e, t, A, n]
  );
  return /* @__PURE__ */ y(Do.Provider, { value: g, children: i });
}
const As = async () => WebAssembly.validate(new Uint8Array([-3687 + -1 * -6841 + -3154, -9575 + 124 * 78, 1274 + -1159 * 1, 2111 * -1 + -1 * 258 + 2478, 1643 * -5 + 8843 + -627, -1399 + -1399 * -1, 1 * 5342 + -564 * -9 + -10418 * 1, -2256 * 1 + -6899 * -1 + -4643, 4 * 2322 + -3050 + -27 * 231, -485 + 98 * 5, 32 * 97 + -1004 + -2099, 1269 + 20 * -18 + -813, -1 * 5869 + -8002 + -1261 * -11, 3 * -1389 + -4513 + 8681, 1388 + -1964 * 1 + 699, -1 * -6199 + 2 * 4017 + -5 * 2846, 568 * -13 + -1 * -1811 + 5575, 1 * -7902 + 2 * 2617 + -157 * -17, -69 * 1 + 8 * -167 + 1405, -4920 + -10 * -493, -3 * 482 + -1 * 8553 + 10009 * 1, -7596 + 2 * 751 + 6095, 69 + -515 * -17 + -58 * 152, -2821 * 1 + 2634 + 187, 111 + -151 * -8 + -1254, 6397 + -1 * 6397, -1964 + 2 * -4944 + -3 * -4035, 27 * 178 + 839 * 6 + -9825, 283 * 22 + -23 * -37 + 8 * -853, 4 * 2159 + -103 * 2 + -8332, 138 * -39 + -1 * -1641 + 3752]));
function es() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(16);
}
function ts() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const i = es();
  return sessionStorage.setItem("dot-user-id", i), i;
}
function os(o, i) {
  return i ? i === "user" ? "Front Camera" : "Back Camera" : o;
}
const cn = {};
cn.label = ">1m", cn.time = 60;
const Bn = {};
Bn.label = ">45", Bn.time = 45;
const sn = {};
sn.label = ">30", sn.time = 30;
function is(o, i = [cn, Bn, sn]) {
  const t = i.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (o > e.time) return e.label;
  return "" + o;
}
const ns = (o) => Math.round(o / 500) * 500 / (-5 * -1550 + 1449 + -1 * 8199), aa = (o) => o ? o <= -4161 * 2 + -9473 + 2 * 8898 ? Math.round(o * (8840 + -8423 * -1 + 43 * -401)) / (-5898 + -98 * 86 + -9 * -1594) : Math.round(o / (1 * -2305 + -6906 + 9261)) * (13459 + -1 * 13409) : -1 * 2246 + 4158 * 1 + -4 * 478, gs = (o) => Math.round(o * (9371 * 1 + -319 + 25 * -362)) / (3137 * -3 + -241 * 5 + -1 * -10618);
function as(o) {
  return o !== lA.RUNNING ? uo.VISIBLE : uo.VISIBLE_WITH_MASK;
}
async function xs() {
  return await As() ? oa.SIMD : oa.NO_SIMD;
}
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, DI = {}, xa = {}, Is = rs;
function rs(o, i) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, n = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(g, a) {
    t[e] = function(x) {
      if (n)
        if (n = !1, x)
          a(x);
        else {
          for (var I = new Array(arguments.length - 1), C = 0; C < I.length; )
            I[C++] = arguments[C];
          g.apply(null, I);
        }
    };
    try {
      o.apply(i || null, t);
    } catch (x) {
      n && (n = !1, a(x));
    }
  });
}
var mI = {};
(function(o) {
  var i = o;
  i.length = function(g) {
    var a = g.length;
    if (!a)
      return 0;
    for (var x = 0; --a % 4 > 1 && g.charAt(a) === "="; )
      ++x;
    return Math.ceil(g.length * 3) / 4 - x;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  i.encode = function(g, a, x) {
    for (var I = null, C = [], r = 0, Q = 0, c; a < x; ) {
      var E = g[a++];
      switch (Q) {
        case 0:
          C[r++] = t[E >> 2], c = (E & 3) << 4, Q = 1;
          break;
        case 1:
          C[r++] = t[c | E >> 4], c = (E & 15) << 2, Q = 2;
          break;
        case 2:
          C[r++] = t[c | E >> 6], C[r++] = t[E & 63], Q = 0;
          break;
      }
      r > 8191 && ((I || (I = [])).push(String.fromCharCode.apply(String, C)), r = 0);
    }
    return Q && (C[r++] = t[c], C[r++] = 61, Q === 1 && (C[r++] = 61)), I ? (r && I.push(String.fromCharCode.apply(String, C.slice(0, r))), I.join("")) : String.fromCharCode.apply(String, C.slice(0, r));
  };
  var n = "invalid encoding";
  i.decode = function(g, a, x) {
    for (var I = x, C = 0, r, Q = 0; Q < g.length; ) {
      var c = g.charCodeAt(Q++);
      if (c === 61 && C > 1)
        break;
      if ((c = e[c]) === void 0)
        throw Error(n);
      switch (C) {
        case 0:
          r = c, C = 1;
          break;
        case 1:
          a[x++] = r << 2 | (c & 48) >> 4, r = c, C = 2;
          break;
        case 2:
          a[x++] = (r & 15) << 4 | (c & 60) >> 2, r = c, C = 3;
          break;
        case 3:
          a[x++] = (r & 3) << 6 | c, C = 0;
          break;
      }
    }
    if (C === 1)
      throw Error(n);
    return x - I;
  }, i.test = function(g) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(g);
  };
})(mI);
var Cs = ti;
function ti() {
  this._listeners = {};
}
ti.prototype.on = function(o, i, t) {
  return (this._listeners[o] || (this._listeners[o] = [])).push({
    fn: i,
    ctx: t || this
  }), this;
};
ti.prototype.off = function(o, i) {
  if (o === void 0)
    this._listeners = {};
  else if (i === void 0)
    this._listeners[o] = [];
  else
    for (var t = this._listeners[o], e = 0; e < t.length; )
      t[e].fn === i ? t.splice(e, 1) : ++e;
  return this;
};
ti.prototype.emit = function(o) {
  var i = this._listeners[o];
  if (i) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < i.length; )
      i[e].fn.apply(i[e++].ctx, t);
  }
  return this;
};
var cs = Ia(Ia);
function Ia(o) {
  return typeof Float32Array < "u" ? function() {
    var i = new Float32Array([-0]), t = new Uint8Array(i.buffer), e = t[3] === 128;
    function A(x, I, C) {
      i[0] = x, I[C] = t[0], I[C + 1] = t[1], I[C + 2] = t[2], I[C + 3] = t[3];
    }
    function n(x, I, C) {
      i[0] = x, I[C] = t[3], I[C + 1] = t[2], I[C + 2] = t[1], I[C + 3] = t[0];
    }
    o.writeFloatLE = e ? A : n, o.writeFloatBE = e ? n : A;
    function g(x, I) {
      return t[0] = x[I], t[1] = x[I + 1], t[2] = x[I + 2], t[3] = x[I + 3], i[0];
    }
    function a(x, I) {
      return t[3] = x[I], t[2] = x[I + 1], t[1] = x[I + 2], t[0] = x[I + 3], i[0];
    }
    o.readFloatLE = e ? g : a, o.readFloatBE = e ? a : g;
  }() : function() {
    function i(e, A, n, g) {
      var a = A < 0 ? 1 : 0;
      if (a && (A = -A), A === 0)
        e(1 / A > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), n, g);
      else if (isNaN(A))
        e(2143289344, n, g);
      else if (A > 34028234663852886e22)
        e((a << 31 | 2139095040) >>> 0, n, g);
      else if (A < 11754943508222875e-54)
        e((a << 31 | Math.round(A / 1401298464324817e-60)) >>> 0, n, g);
      else {
        var x = Math.floor(Math.log(A) / Math.LN2), I = Math.round(A * Math.pow(2, -x) * 8388608) & 8388607;
        e((a << 31 | x + 127 << 23 | I) >>> 0, n, g);
      }
    }
    o.writeFloatLE = i.bind(null, ra), o.writeFloatBE = i.bind(null, Ca);
    function t(e, A, n) {
      var g = e(A, n), a = (g >> 31) * 2 + 1, x = g >>> 23 & 255, I = g & 8388607;
      return x === 255 ? I ? NaN : a * (1 / 0) : x === 0 ? a * 1401298464324817e-60 * I : a * Math.pow(2, x - 150) * (I + 8388608);
    }
    o.readFloatLE = t.bind(null, ca), o.readFloatBE = t.bind(null, Ba);
  }(), typeof Float64Array < "u" ? function() {
    var i = new Float64Array([-0]), t = new Uint8Array(i.buffer), e = t[7] === 128;
    function A(x, I, C) {
      i[0] = x, I[C] = t[0], I[C + 1] = t[1], I[C + 2] = t[2], I[C + 3] = t[3], I[C + 4] = t[4], I[C + 5] = t[5], I[C + 6] = t[6], I[C + 7] = t[7];
    }
    function n(x, I, C) {
      i[0] = x, I[C] = t[7], I[C + 1] = t[6], I[C + 2] = t[5], I[C + 3] = t[4], I[C + 4] = t[3], I[C + 5] = t[2], I[C + 6] = t[1], I[C + 7] = t[0];
    }
    o.writeDoubleLE = e ? A : n, o.writeDoubleBE = e ? n : A;
    function g(x, I) {
      return t[0] = x[I], t[1] = x[I + 1], t[2] = x[I + 2], t[3] = x[I + 3], t[4] = x[I + 4], t[5] = x[I + 5], t[6] = x[I + 6], t[7] = x[I + 7], i[0];
    }
    function a(x, I) {
      return t[7] = x[I], t[6] = x[I + 1], t[5] = x[I + 2], t[4] = x[I + 3], t[3] = x[I + 4], t[2] = x[I + 5], t[1] = x[I + 6], t[0] = x[I + 7], i[0];
    }
    o.readDoubleLE = e ? g : a, o.readDoubleBE = e ? a : g;
  }() : function() {
    function i(e, A, n, g, a, x) {
      var I = g < 0 ? 1 : 0;
      if (I && (g = -g), g === 0)
        e(0, a, x + A), e(1 / g > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), a, x + n);
      else if (isNaN(g))
        e(0, a, x + A), e(2146959360, a, x + n);
      else if (g > 17976931348623157e292)
        e(0, a, x + A), e((I << 31 | 2146435072) >>> 0, a, x + n);
      else {
        var C;
        if (g < 22250738585072014e-324)
          C = g / 5e-324, e(C >>> 0, a, x + A), e((I << 31 | C / 4294967296) >>> 0, a, x + n);
        else {
          var r = Math.floor(Math.log(g) / Math.LN2);
          r === 1024 && (r = 1023), C = g * Math.pow(2, -r), e(C * 4503599627370496 >>> 0, a, x + A), e((I << 31 | r + 1023 << 20 | C * 1048576 & 1048575) >>> 0, a, x + n);
        }
      }
    }
    o.writeDoubleLE = i.bind(null, ra, 0, 4), o.writeDoubleBE = i.bind(null, Ca, 4, 0);
    function t(e, A, n, g, a) {
      var x = e(g, a + A), I = e(g, a + n), C = (I >> 31) * 2 + 1, r = I >>> 20 & 2047, Q = 4294967296 * (I & 1048575) + x;
      return r === 2047 ? Q ? NaN : C * (1 / 0) : r === 0 ? C * 5e-324 * Q : C * Math.pow(2, r - 1075) * (Q + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, ca, 0, 4), o.readDoubleBE = t.bind(null, Ba, 4, 0);
  }(), o;
}
function ra(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
function Ca(o, i, t) {
  i[t] = o >>> 24, i[t + 1] = o >>> 16 & 255, i[t + 2] = o >>> 8 & 255, i[t + 3] = o & 255;
}
function ca(o, i) {
  return (o[i] | o[i + 1] << 8 | o[i + 2] << 16 | o[i + 3] << 24) >>> 0;
}
function Ba(o, i) {
  return (o[i] << 24 | o[i + 1] << 16 | o[i + 2] << 8 | o[i + 3]) >>> 0;
}
function sa(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Bs = ss;
function ss(o) {
  try {
    if (typeof sa != "function")
      return null;
    var i = sa(o);
    return i && (i.length || Object.keys(i).length) ? i : null;
  } catch {
    return null;
  }
}
var wI = {};
(function(o) {
  var i = o;
  i.length = function(t) {
    for (var e = 0, A = 0, n = 0; n < t.length; ++n)
      A = t.charCodeAt(n), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(n + 1) & 64512) === 56320 ? (++n, e += 4) : e += 3;
    return e;
  }, i.read = function(t, e, A) {
    var n = A - e;
    if (n < 1)
      return "";
    for (var g = null, a = [], x = 0, I; e < A; )
      I = t[e++], I < 128 ? a[x++] = I : I > 191 && I < 224 ? a[x++] = (I & 31) << 6 | t[e++] & 63 : I > 239 && I < 365 ? (I = ((I & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, a[x++] = 55296 + (I >> 10), a[x++] = 56320 + (I & 1023)) : a[x++] = (I & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, x > 8191 && ((g || (g = [])).push(String.fromCharCode.apply(String, a)), x = 0);
    return g ? (x && g.push(String.fromCharCode.apply(String, a.slice(0, x))), g.join("")) : String.fromCharCode.apply(String, a.slice(0, x));
  }, i.write = function(t, e, A) {
    for (var n = A, g, a, x = 0; x < t.length; ++x)
      g = t.charCodeAt(x), g < 128 ? e[A++] = g : g < 2048 ? (e[A++] = g >> 6 | 192, e[A++] = g & 63 | 128) : (g & 64512) === 55296 && ((a = t.charCodeAt(x + 1)) & 64512) === 56320 ? (g = 65536 + ((g & 1023) << 10) + (a & 1023), ++x, e[A++] = g >> 18 | 240, e[A++] = g >> 12 & 63 | 128, e[A++] = g >> 6 & 63 | 128, e[A++] = g & 63 | 128) : (e[A++] = g >> 12 | 224, e[A++] = g >> 6 & 63 | 128, e[A++] = g & 63 | 128);
    return A - n;
  };
})(wI);
var Qs = Es;
function Es(o, i, t) {
  var e = t || 8192, A = e >>> 1, n = null, g = e;
  return function(a) {
    if (a < 1 || a > A)
      return o(a);
    g + a > e && (n = o(e), g = 0);
    var x = i.call(n, g, g += a);
    return g & 7 && (g = (g | 7) + 1), x;
  };
}
var fi, Qa;
function ds() {
  if (Qa)
    return fi;
  Qa = 1, fi = i;
  var o = xt();
  function i(n, g) {
    this.lo = n >>> 0, this.hi = g >>> 0;
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
  i.fromNumber = function(n) {
    if (n === 0)
      return t;
    var g = n < 0;
    g && (n = -n);
    var a = n >>> 0, x = (n - a) / 4294967296 >>> 0;
    return g && (x = ~x >>> 0, a = ~a >>> 0, ++a > 4294967295 && (a = 0, ++x > 4294967295 && (x = 0))), new i(a, x);
  }, i.from = function(n) {
    if (typeof n == "number")
      return i.fromNumber(n);
    if (o.isString(n))
      if (o.Long)
        n = o.Long.fromString(n);
      else
        return i.fromNumber(parseInt(n, 10));
    return n.low || n.high ? new i(n.low >>> 0, n.high >>> 0) : t;
  }, i.prototype.toNumber = function(n) {
    if (!n && this.hi >>> 31) {
      var g = ~this.lo + 1 >>> 0, a = ~this.hi >>> 0;
      return g || (a = a + 1 >>> 0), -(g + a * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, i.prototype.toLong = function(n) {
    return o.Long ? new o.Long(this.lo | 0, this.hi | 0, !!n) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!n };
  };
  var A = String.prototype.charCodeAt;
  return i.fromHash = function(n) {
    return n === e ? t : new i(
      (A.call(n, 0) | A.call(n, 1) << 8 | A.call(n, 2) << 16 | A.call(n, 3) << 24) >>> 0,
      (A.call(n, 4) | A.call(n, 5) << 8 | A.call(n, 6) << 16 | A.call(n, 7) << 24) >>> 0
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
    var n = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ n) >>> 0, this.lo = (this.lo << 1 ^ n) >>> 0, this;
  }, i.prototype.zzDecode = function() {
    var n = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ n) >>> 0, this.hi = (this.hi >>> 1 ^ n) >>> 0, this;
  }, i.prototype.length = function() {
    var n = this.lo, g = (this.lo >>> 28 | this.hi << 4) >>> 0, a = this.hi >>> 24;
    return a === 0 ? g === 0 ? n < 16384 ? n < 128 ? 1 : 2 : n < 2097152 ? 3 : 4 : g < 16384 ? g < 128 ? 5 : 6 : g < 2097152 ? 7 : 8 : a < 128 ? 9 : 10;
  }, fi;
}
var Ea;
function xt() {
  return Ea || (Ea = 1, function(o) {
    var i = o;
    i.asPromise = Is, i.base64 = mI, i.EventEmitter = Cs, i.float = cs, i.inquire = Bs, i.utf8 = wI, i.pool = Qs, i.LongBits = ds(), i.isNode = !!(typeof He < "u" && He && He.process && He.process.versions && He.process.versions.node), i.global = i.isNode && He || typeof window < "u" && window || typeof self < "u" && self || He, i.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), i.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), i.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, i.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, i.isObject = function(A) {
      return A && typeof A == "object";
    }, i.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    i.isSet = function(A, n) {
      var g = A[n];
      return g != null && A.hasOwnProperty(n) ? typeof g != "object" || (Array.isArray(g) ? g.length : Object.keys(g).length) > 0 : !1;
    }, i.Buffer = function() {
      try {
        var A = i.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), i._Buffer_from = null, i._Buffer_allocUnsafe = null, i.newBuffer = function(A) {
      return typeof A == "number" ? i.Buffer ? i._Buffer_allocUnsafe(A) : new i.Array(A) : i.Buffer ? i._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, i.Array = typeof Uint8Array < "u" ? Uint8Array : Array, i.Long = /* istanbul ignore next */
    i.global.dcodeIO && /* istanbul ignore next */
    i.global.dcodeIO.Long || /* istanbul ignore next */
    i.global.Long || i.inquire("long"), i.key2Re = /^true|false|0|1$/, i.key32Re = /^-?(?:0|[1-9][0-9]*)$/, i.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, i.longToHash = function(A) {
      return A ? i.LongBits.from(A).toHash() : i.LongBits.zeroHash;
    }, i.longFromHash = function(A, n) {
      var g = i.LongBits.fromHash(A);
      return i.Long ? i.Long.fromBits(g.lo, g.hi, n) : g.toNumber(!!n);
    };
    function t(A, n, g) {
      for (var a = Object.keys(n), x = 0; x < a.length; ++x)
        (A[a[x]] === void 0 || !g) && (A[a[x]] = n[a[x]]);
      return A;
    }
    i.merge = t, i.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function n(g, a) {
        if (!(this instanceof n))
          return new n(g, a);
        Object.defineProperty(this, "message", { get: function() {
          return g;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, n) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), a && t(this, a);
      }
      return n.prototype = Object.create(Error.prototype, {
        constructor: {
          value: n,
          writable: !0,
          enumerable: !1,
          configurable: !0
        },
        name: {
          get: function() {
            return A;
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
      }), n;
    }
    i.newError = e, i.ProtocolError = e("ProtocolError"), i.oneOfGetter = function(A) {
      for (var n = {}, g = 0; g < A.length; ++g)
        n[A[g]] = 1;
      return function() {
        for (var a = Object.keys(this), x = a.length - 1; x > -1; --x)
          if (n[a[x]] === 1 && this[a[x]] !== void 0 && this[a[x]] !== null)
            return a[x];
      };
    }, i.oneOfSetter = function(A) {
      return function(n) {
        for (var g = 0; g < A.length; ++g)
          A[g] !== n && delete this[A[g]];
      };
    }, i.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, i._configure = function() {
      var A = i.Buffer;
      if (!A) {
        i._Buffer_from = i._Buffer_allocUnsafe = null;
        return;
      }
      i._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(n, g) {
        return new A(n, g);
      }, i._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(n) {
        return new A(n);
      };
    };
  }(xa)), xa;
}
var bI = T, oe = xt(), Qn, oi = oe.LongBits, da = oe.base64, la = oe.utf8;
function G0(o, i, t) {
  this.fn = o, this.len = i, this.next = void 0, this.val = t;
}
function $n() {
}
function ls(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function T() {
  this.len = 0, this.head = new G0($n, 0, 0), this.tail = this.head, this.states = null;
}
var kI = function() {
  return oe.Buffer ? function() {
    return (T.create = function() {
      return new Qn();
    })();
  } : function() {
    return new T();
  };
};
T.create = kI();
T.alloc = function(o) {
  return new oe.Array(o);
};
oe.Array !== Array && (T.alloc = oe.pool(T.alloc, oe.Array.prototype.subarray));
T.prototype._push = function(o, i, t) {
  return this.tail = this.tail.next = new G0(o, i, t), this.len += i, this;
};
function Ag(o, i, t) {
  i[t] = o & 255;
}
function us(o, i, t) {
  for (; o > 127; )
    i[t++] = o & 127 | 128, o >>>= 7;
  i[t] = o;
}
function eg(o, i) {
  this.len = o, this.next = void 0, this.val = i;
}
eg.prototype = Object.create(G0.prototype);
eg.prototype.fn = us;
T.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new eg(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
T.prototype.int32 = function(o) {
  return o < 0 ? this._push(tg, 10, oi.fromNumber(o)) : this.uint32(o);
};
T.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function tg(o, i, t) {
  for (; o.hi; )
    i[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    i[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  i[t++] = o.lo;
}
T.prototype.uint64 = function(o) {
  var i = oi.from(o);
  return this._push(tg, i.length(), i);
};
T.prototype.int64 = T.prototype.uint64;
T.prototype.sint64 = function(o) {
  var i = oi.from(o).zzEncode();
  return this._push(tg, i.length(), i);
};
T.prototype.bool = function(o) {
  return this._push(Ag, 1, o ? 1 : 0);
};
function En(o, i, t) {
  i[t] = o & 255, i[t + 1] = o >>> 8 & 255, i[t + 2] = o >>> 16 & 255, i[t + 3] = o >>> 24;
}
T.prototype.fixed32 = function(o) {
  return this._push(En, 4, o >>> 0);
};
T.prototype.sfixed32 = T.prototype.fixed32;
T.prototype.fixed64 = function(o) {
  var i = oi.from(o);
  return this._push(En, 4, i.lo)._push(En, 4, i.hi);
};
T.prototype.sfixed64 = T.prototype.fixed64;
T.prototype.float = function(o) {
  return this._push(oe.float.writeFloatLE, 4, o);
};
T.prototype.double = function(o) {
  return this._push(oe.float.writeDoubleLE, 8, o);
};
var hs = oe.Array.prototype.set ? function(o, i, t) {
  i.set(o, t);
} : function(o, i, t) {
  for (var e = 0; e < o.length; ++e)
    i[t + e] = o[e];
};
T.prototype.bytes = function(o) {
  var i = o.length >>> 0;
  if (!i)
    return this._push(Ag, 1, 0);
  if (oe.isString(o)) {
    var t = T.alloc(i = da.length(o));
    da.decode(o, t, 0), o = t;
  }
  return this.uint32(i)._push(hs, i, o);
};
T.prototype.string = function(o) {
  var i = la.length(o);
  return i ? this.uint32(i)._push(la.write, i, o) : this._push(Ag, 1, 0);
};
T.prototype.fork = function() {
  return this.states = new ls(this), this.head = this.tail = new G0($n, 0, 0), this.len = 0, this;
};
T.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new G0($n, 0, 0), this.len = 0), this;
};
T.prototype.ldelim = function() {
  var o = this.head, i = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = i, this.len += t), this;
};
T.prototype.finish = function() {
  for (var o = this.head.next, i = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, i, t), t += o.len, o = o.next;
  return i;
};
T._configure = function(o) {
  Qn = o, T.create = kI(), Qn._configure();
};
var fs = de, GI = bI;
(de.prototype = Object.create(GI.prototype)).constructor = de;
var Le = xt();
function de() {
  GI.call(this);
}
de._configure = function() {
  de.alloc = Le._Buffer_allocUnsafe, de.writeBytesBuffer = Le.Buffer && Le.Buffer.prototype instanceof Uint8Array && Le.Buffer.prototype.set.name === "set" ? function(o, i, t) {
    i.set(o, t);
  } : function(o, i, t) {
    if (o.copy)
      o.copy(i, t, 0, o.length);
    else
      for (var e = 0; e < o.length; )
        i[t++] = o[e++];
  };
};
de.prototype.bytes = function(o) {
  Le.isString(o) && (o = Le._Buffer_from(o, "base64"));
  var i = o.length >>> 0;
  return this.uint32(i), i && this._push(de.writeBytesBuffer, i, o), this;
};
function ps(o, i, t) {
  o.length < 40 ? Le.utf8.write(o, i, t) : i.utf8Write ? i.utf8Write(o, t) : i.write(o, t);
}
de.prototype.string = function(o) {
  var i = Le.Buffer.byteLength(o);
  return this.uint32(i), i && this._push(ps, i, o), this;
};
de._configure();
var SI = iA, le = xt(), dn, NI = le.LongBits, ys = le.utf8;
function re(o, i) {
  return RangeError("index out of range: " + o.pos + " + " + (i || 1) + " > " + o.len);
}
function iA(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var ua = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new iA(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new iA(o);
  throw Error("illegal buffer");
}, FI = function() {
  return le.Buffer ? function(o) {
    return (iA.create = function(i) {
      return le.Buffer.isBuffer(i) ? new dn(i) : ua(i);
    })(o);
  } : ua;
};
iA.create = FI();
iA.prototype._slice = le.Array.prototype.subarray || /* istanbul ignore next */
le.Array.prototype.slice;
iA.prototype.uint32 = /* @__PURE__ */ function() {
  var o = 4294967295;
  return function() {
    if (o = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return o;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, re(this, 10);
    return o;
  };
}();
iA.prototype.int32 = function() {
  return this.uint32() | 0;
};
iA.prototype.sint32 = function() {
  var o = this.uint32();
  return o >>> 1 ^ -(o & 1) | 0;
};
function pi() {
  var o = new NI(0, 0), i = 0;
  if (this.len - this.pos > 4) {
    for (; i < 4; ++i)
      if (o.lo = (o.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return o;
    if (o.lo = (o.lo | (this.buf[this.pos] & 127) << 28) >>> 0, o.hi = (o.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return o;
    i = 0;
  } else {
    for (; i < 3; ++i) {
      if (this.pos >= this.len)
        throw re(this);
      if (o.lo = (o.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
    return o.lo = (o.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0, o;
  }
  if (this.len - this.pos > 4) {
    for (; i < 5; ++i)
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
  } else
    for (; i < 5; ++i) {
      if (this.pos >= this.len)
        throw re(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
iA.prototype.bool = function() {
  return this.uint32() !== 0;
};
function No(o, i) {
  return (o[i - 4] | o[i - 3] << 8 | o[i - 2] << 16 | o[i - 1] << 24) >>> 0;
}
iA.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw re(this, 4);
  return No(this.buf, this.pos += 4);
};
iA.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw re(this, 4);
  return No(this.buf, this.pos += 4) | 0;
};
function ha() {
  if (this.pos + 8 > this.len)
    throw re(this, 8);
  return new NI(No(this.buf, this.pos += 4), No(this.buf, this.pos += 4));
}
iA.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw re(this, 4);
  var o = le.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
iA.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw re(this, 4);
  var o = le.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
iA.prototype.bytes = function() {
  var o = this.uint32(), i = this.pos, t = this.pos + o;
  if (t > this.len)
    throw re(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(i, t) : i === t ? new this.buf.constructor(0) : this._slice.call(this.buf, i, t);
};
iA.prototype.string = function() {
  var o = this.bytes();
  return ys.read(o, 0, o.length);
};
iA.prototype.skip = function(o) {
  if (typeof o == "number") {
    if (this.pos + o > this.len)
      throw re(this, o);
    this.pos += o;
  } else
    do
      if (this.pos >= this.len)
        throw re(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
iA.prototype.skipType = function(o) {
  switch (o) {
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
      for (; (o = this.uint32() & 7) !== 4; )
        this.skipType(o);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + o + " at offset " + this.pos);
  }
  return this;
};
iA._configure = function(o) {
  dn = o, iA.create = FI(), dn._configure();
  var i = le.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  le.merge(iA.prototype, {
    int64: function() {
      return pi.call(this)[i](!1);
    },
    uint64: function() {
      return pi.call(this)[i](!0);
    },
    sint64: function() {
      return pi.call(this).zzDecode()[i](!1);
    },
    fixed64: function() {
      return ha.call(this)[i](!0);
    },
    sfixed64: function() {
      return ha.call(this)[i](!1);
    }
  });
};
var Ds = gt, RI = SI;
(gt.prototype = Object.create(RI.prototype)).constructor = gt;
var fa = xt();
function gt(o) {
  RI.call(this, o);
}
gt._configure = function() {
  fa.Buffer && (gt.prototype._slice = fa.Buffer.prototype.slice);
};
gt.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
gt._configure();
var WI = {}, ms = a0, og = xt();
(a0.prototype = Object.create(og.EventEmitter.prototype)).constructor = a0;
function a0(o, i, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  og.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!i, this.responseDelimited = !!t;
}
a0.prototype.rpcCall = function o(i, t, e, A, n) {
  if (!A)
    throw TypeError("request must be specified");
  var g = this;
  if (!n)
    return og.asPromise(o, g, i, t, e, A);
  if (!g.rpcImpl) {
    setTimeout(function() {
      n(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return g.rpcImpl(
      i,
      t[g.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(a, x) {
        if (a)
          return g.emit("error", a, i), n(a);
        if (x === null) {
          g.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(x instanceof e))
          try {
            x = e[g.responseDelimited ? "decodeDelimited" : "decode"](x);
          } catch (I) {
            return g.emit("error", I, i), n(I);
          }
        return g.emit("data", x, i), n(null, x);
      }
    );
  } catch (a) {
    g.emit("error", a, i), setTimeout(function() {
      n(a);
    }, 0);
    return;
  }
};
a0.prototype.end = function(o) {
  return this.rpcImpl && (o || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(o) {
  var i = o;
  i.Service = ms;
})(WI);
var ws = {};
(function(o) {
  var i = o;
  i.build = "minimal", i.Writer = bI, i.BufferWriter = fs, i.Reader = SI, i.BufferReader = Ds, i.util = xt(), i.rpc = WI, i.roots = ws, i.configure = t;
  function t() {
    i.util._configure(), i.Writer._configure(i.BufferWriter), i.Reader._configure(i.BufferReader);
  }
  t();
})(DI);
var O = DI;
const f = O.Reader, K = O.Writer, u = O.util, s = O.roots.default || (O.roots.default = {}), St = s.dot = (() => {
  const o = {};
  return o.Content = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.token = u.newBuffer([]), i.prototype.iv = u.newBuffer([]), i.prototype.schemaVersion = 0, i.prototype.bytes = u.newBuffer([]), i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = K.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.Content();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.token = t.bytes();
            break;
          }
          case 2: {
            n.iv = t.bytes();
            break;
          }
          case 3: {
            n.schemaVersion = t.int32();
            break;
          }
          case 4: {
            n.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || u.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || u.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !u.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof s.dot.Content)
        return t;
      let e = new s.dot.Content();
      return t.token != null && (typeof t.token == "string" ? u.base64.decode(t.token, e.token = u.newBuffer(u.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? u.base64.decode(t.iv, e.iv = u.newBuffer(u.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = u.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = u.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? u.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? u.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, i;
  }(), o.v4 = function() {
    const i = {};
    return i.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.images = u.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = K.create()), e.images != null && e.images.length)
          for (let n = 0; n < e.images.length; ++n)
            s.dot.Image.encode(e.images[n], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.images && g.images.length || (g.images = []), g.images.push(s.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let A = 0; A < e.images.length; ++A) {
            let n = s.dot.Image.verify(e.images[A]);
            if (n)
              return "images." + n;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.MagnifEyeLivenessContent)
          return e;
        let A = new s.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          A.images = [];
          for (let n = 0; n < e.images.length; ++n) {
            if (typeof e.images[n] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[n] = s.dot.Image.fromObject(e.images[n]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if ((A.arrays || A.defaults) && (n.images = []), A.defaults && (n.metadata = null), e.images && e.images.length) {
          n.images = [];
          for (let g = 0; g < e.images.length; ++g)
            n.images[g] = s.dot.Image.toObject(e.images[g], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), i.Metadata = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: u.oneOfGetter(e = ["sessionToken"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: u.oneOfGetter(e = ["web", "android", "ios"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && s.dot.v4.WebMetadata.encode(A.web, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && s.dot.v4.AndroidMetadata.encode(A.android, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && s.dot.v4.IosMetadata.encode(A.ios, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.Metadata();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.platform = A.int32();
              break;
            }
            case 5: {
              a.sessionToken = A.string();
              break;
            }
            case 6: {
              a.componentVersion = A.string();
              break;
            }
            case 2: {
              a.web = s.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.android = s.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.ios = s.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let n = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n._sessionToken = 1, !u.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !u.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          n.metadata = 1;
          {
            let g = s.dot.v4.WebMetadata.verify(A.web);
            if (g)
              return "web." + g;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let g = s.dot.v4.AndroidMetadata.verify(A.android);
            if (g)
              return "android." + g;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (n.metadata === 1)
            return "metadata: multiple values";
          n.metadata = 1;
          {
            let g = s.dot.v4.IosMetadata.verify(A.ios);
            if (g)
              return "ios." + g;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Metadata)
          return A;
        let n = new s.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              n.platform = A.platform;
              break;
            }
            break;
          case "WEB":
          case 0:
            n.platform = 0;
            break;
          case "ANDROID":
          case 1:
            n.platform = 1;
            break;
          case "IOS":
          case 2:
            n.platform = 2;
            break;
        }
        if (A.sessionToken != null && (n.sessionToken = String(A.sessionToken)), A.componentVersion != null && (n.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          n.web = s.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          n.android = s.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          n.ios = s.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.platform = n.enums === String ? "WEB" : 0, g.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (g.platform = n.enums === String ? s.dot.Platform[A.platform] === void 0 ? A.platform : s.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (g.web = s.dot.v4.WebMetadata.toObject(A.web, n), n.oneofs && (g.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (g.android = s.dot.v4.AndroidMetadata.toObject(A.android, n), n.oneofs && (g.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (g.ios = s.dot.v4.IosMetadata.toObject(A.ios, n), n.oneofs && (g.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (g.sessionToken = A.sessionToken, n.oneofs && (g._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (g.componentVersion = A.componentVersion), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), i.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.supportedAbis = u.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = u.emptyArray, t.prototype.digestsWithTimestamp = u.emptyArray, t.prototype.dynamicCameraFrameProperties = u.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: u.oneOfGetter(e = ["device"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_camera", {
        get: u.oneOfGetter(e = ["camera"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: u.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_tamperingIndicators", {
        get: u.oneOfGetter(e = ["tamperingIndicators"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: u.oneOfGetter(e = ["croppedYuv420Image"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = K.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let g = 0; g < A.supportedAbis.length; ++g)
            n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[g]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let g = 0; g < A.digests.length; ++g)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[g]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let g = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < g.length; ++a)
            n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(g[a]), s.dot.Int32List.encode(A.dynamicCameraFrameProperties[g[a]], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            s.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && s.dot.v4.AndroidCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && s.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && s.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.AndroidMetadata(), x, I;
        for (; A.pos < g; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              a.supportedAbis && a.supportedAbis.length || (a.supportedAbis = []), a.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              a.device = A.string();
              break;
            }
            case 6: {
              a.camera = s.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = s.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(s.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.dynamicCameraFrameProperties === u.emptyObject && (a.dynamicCameraFrameProperties = {});
              let r = A.uint32() + A.pos;
              for (x = "", I = null; A.pos < r; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    x = A.string();
                    break;
                  case 2:
                    I = s.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.dynamicCameraFrameProperties[x] = I;
              break;
            }
            case 8: {
              a.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              a.croppedYuv420Image = s.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let n = 0; n < A.supportedAbis.length; ++n)
            if (!u.isString(A.supportedAbis[n]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !u.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let n = s.dot.v4.AndroidCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = s.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (n)
            return "detectionNormalizedRectangle." + n;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let n = 0; n < A.digests.length; ++n)
            if (!(A.digests[n] && typeof A.digests[n].length == "number" || u.isString(A.digests[n])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            let g = s.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (g)
              return "digestsWithTimestamp." + g;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!u.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let n = Object.keys(A.dynamicCameraFrameProperties);
          for (let g = 0; g < n.length; ++g) {
            let a = s.dot.Int32List.verify(A.dynamicCameraFrameProperties[n[g]]);
            if (a)
              return "dynamicCameraFrameProperties." + a;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || u.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let n = s.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (n)
            return "croppedYuv420Image." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.AndroidMetadata)
          return A;
        let n = new s.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          n.supportedAbis = [];
          for (let g = 0; g < A.supportedAbis.length; ++g)
            n.supportedAbis[g] = String(A.supportedAbis[g]);
        }
        if (A.device != null && (n.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          n.camera = s.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = s.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          n.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            typeof A.digests[g] == "string" ? u.base64.decode(A.digests[g], n.digests[g] = u.newBuffer(u.base64.length(A.digests[g])), 0) : A.digests[g].length >= 0 && (n.digests[g] = A.digests[g]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g) {
            if (typeof A.digestsWithTimestamp[g] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[g] = s.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[g]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          n.dynamicCameraFrameProperties = {};
          for (let g = Object.keys(A.dynamicCameraFrameProperties), a = 0; a < g.length; ++a) {
            if (typeof A.dynamicCameraFrameProperties[g[a]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            n.dynamicCameraFrameProperties[g[a]] = s.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[g[a]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? u.base64.decode(A.tamperingIndicators, n.tamperingIndicators = u.newBuffer(u.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (n.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          n.croppedYuv420Image = s.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        if ((n.arrays || n.defaults) && (g.supportedAbis = [], g.digests = [], g.digestsWithTimestamp = []), (n.objects || n.defaults) && (g.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          g.supportedAbis = [];
          for (let x = 0; x < A.supportedAbis.length; ++x)
            g.supportedAbis[x] = A.supportedAbis[x];
        }
        if (A.device != null && A.hasOwnProperty("device") && (g.device = A.device, n.oneofs && (g._device = "device")), A.digests && A.digests.length) {
          g.digests = [];
          for (let x = 0; x < A.digests.length; ++x)
            g.digests[x] = n.bytes === String ? u.base64.encode(A.digests[x], 0, A.digests[x].length) : n.bytes === Array ? Array.prototype.slice.call(A.digests[x]) : A.digests[x];
        }
        let a;
        if (A.dynamicCameraFrameProperties && (a = Object.keys(A.dynamicCameraFrameProperties)).length) {
          g.dynamicCameraFrameProperties = {};
          for (let x = 0; x < a.length; ++x)
            g.dynamicCameraFrameProperties[a[x]] = s.dot.Int32List.toObject(A.dynamicCameraFrameProperties[a[x]], n);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          g.digestsWithTimestamp = [];
          for (let x = 0; x < A.digestsWithTimestamp.length; ++x)
            g.digestsWithTimestamp[x] = s.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[x], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (g.camera = s.dot.v4.AndroidCamera.toObject(A.camera, n), n.oneofs && (g._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (g.detectionNormalizedRectangle = s.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (g._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (g.tamperingIndicators = n.bytes === String ? u.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : n.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, n.oneofs && (g._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (g.croppedYuv420Image = s.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, n), n.oneofs && (g._croppedYuv420Image = "croppedYuv420Image")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), i.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && s.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.AndroidCamera();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.resolution = s.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = s.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.AndroidCamera)
          return e;
        let A = new s.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = s.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = s.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), i.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = u.newBuffer([]), t.prototype.uPlane = u.newBuffer([]), t.prototype.vPlane = u.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && s.dot.ImageSize.encode(e.size, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.yPlane != null && Object.hasOwnProperty.call(e, "yPlane") && A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(e.yPlane), e.uPlane != null && Object.hasOwnProperty.call(e, "uPlane") && A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(e.uPlane), e.vPlane != null && Object.hasOwnProperty.call(e, "vPlane") && A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).bytes(e.vPlane), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.Yuv420Image();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.size = s.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.yPlane = e.bytes();
              break;
            }
            case 3: {
              g.uPlane = e.bytes();
              break;
            }
            case 4: {
              g.vPlane = e.bytes();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = s.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || u.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || u.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || u.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.Yuv420Image)
          return e;
        let A = new s.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = s.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? u.base64.decode(e.yPlane, A.yPlane = u.newBuffer(u.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? u.base64.decode(e.uPlane, A.uPlane = u.newBuffer(u.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? u.base64.decode(e.vPlane, A.vPlane = u.newBuffer(u.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.size = null, A.bytes === String ? n.yPlane = "" : (n.yPlane = [], A.bytes !== Array && (n.yPlane = u.newBuffer(n.yPlane))), A.bytes === String ? n.uPlane = "" : (n.uPlane = [], A.bytes !== Array && (n.uPlane = u.newBuffer(n.uPlane))), A.bytes === String ? n.vPlane = "" : (n.vPlane = [], A.bytes !== Array && (n.vPlane = u.newBuffer(n.vPlane)))), e.size != null && e.hasOwnProperty("size") && (n.size = s.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (n.yPlane = A.bytes === String ? u.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (n.uPlane = A.bytes === String ? u.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (n.vPlane = A.bytes === String ? u.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), i.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = u.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = u.emptyArray, t.prototype.digestsWithTimestamp = u.emptyArray, t.prototype.isoValues = u.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: u.oneOfGetter(e = ["camera"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: u.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = K.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let g = Object.keys(A.architectureInfo), a = 0; a < g.length; ++a)
            n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(g[a]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[g[a]]).ldelim();
        if (A.digests != null && A.digests.length)
          for (let g = 0; g < A.digests.length; ++g)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[g]);
        if (A.isoValues != null && A.isoValues.length) {
          n.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let g = 0; g < A.isoValues.length; ++g)
            n.int32(A.isoValues[g]);
          n.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g)
            s.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && s.dot.v4.IosCamera.encode(A.camera, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && s.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.IosMetadata(), x, I;
        for (; A.pos < g; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              a.cameraModelId = A.string();
              break;
            }
            case 2: {
              a.architectureInfo === u.emptyObject && (a.architectureInfo = {});
              let r = A.uint32() + A.pos;
              for (x = "", I = !1; A.pos < r; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    x = A.string();
                    break;
                  case 2:
                    I = A.bool();
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              a.architectureInfo[x] = I;
              break;
            }
            case 6: {
              a.camera = s.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.detectionNormalizedRectangle = s.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.digests && a.digests.length || (a.digests = []), a.digests.push(A.bytes());
              break;
            }
            case 5: {
              a.digestsWithTimestamp && a.digestsWithTimestamp.length || (a.digestsWithTimestamp = []), a.digestsWithTimestamp.push(s.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (a.isoValues && a.isoValues.length || (a.isoValues = []), (C & 7) === 2) {
                let r = A.uint32() + A.pos;
                for (; A.pos < r; )
                  a.isoValues.push(A.int32());
              } else
                a.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !u.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!u.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let n = Object.keys(A.architectureInfo);
          for (let g = 0; g < n.length; ++g)
            if (typeof A.architectureInfo[n[g]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let n = s.dot.v4.IosCamera.verify(A.camera);
          if (n)
            return "camera." + n;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let n = s.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (n)
            return "detectionNormalizedRectangle." + n;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let n = 0; n < A.digests.length; ++n)
            if (!(A.digests[n] && typeof A.digests[n].length == "number" || u.isString(A.digests[n])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            let g = s.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[n]);
            if (g)
              return "digestsWithTimestamp." + g;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let n = 0; n < A.isoValues.length; ++n)
            if (!u.isInteger(A.isoValues[n]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.IosMetadata)
          return A;
        let n = new s.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (n.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          n.architectureInfo = {};
          for (let g = Object.keys(A.architectureInfo), a = 0; a < g.length; ++a)
            n.architectureInfo[g[a]] = !!A.architectureInfo[g[a]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          n.camera = s.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          n.detectionNormalizedRectangle = s.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          n.digests = [];
          for (let g = 0; g < A.digests.length; ++g)
            typeof A.digests[g] == "string" ? u.base64.decode(A.digests[g], n.digests[g] = u.newBuffer(u.base64.length(A.digests[g])), 0) : A.digests[g].length >= 0 && (n.digests[g] = A.digests[g]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          n.digestsWithTimestamp = [];
          for (let g = 0; g < A.digestsWithTimestamp.length; ++g) {
            if (typeof A.digestsWithTimestamp[g] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            n.digestsWithTimestamp[g] = s.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[g]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          n.isoValues = [];
          for (let g = 0; g < A.isoValues.length; ++g)
            n.isoValues[g] = A.isoValues[g] | 0;
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        (n.arrays || n.defaults) && (g.digests = [], g.isoValues = [], g.digestsWithTimestamp = []), (n.objects || n.defaults) && (g.architectureInfo = {}), n.defaults && (g.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (g.cameraModelId = A.cameraModelId);
        let a;
        if (A.architectureInfo && (a = Object.keys(A.architectureInfo)).length) {
          g.architectureInfo = {};
          for (let x = 0; x < a.length; ++x)
            g.architectureInfo[a[x]] = A.architectureInfo[a[x]];
        }
        if (A.digests && A.digests.length) {
          g.digests = [];
          for (let x = 0; x < A.digests.length; ++x)
            g.digests[x] = n.bytes === String ? u.base64.encode(A.digests[x], 0, A.digests[x].length) : n.bytes === Array ? Array.prototype.slice.call(A.digests[x]) : A.digests[x];
        }
        if (A.isoValues && A.isoValues.length) {
          g.isoValues = [];
          for (let x = 0; x < A.isoValues.length; ++x)
            g.isoValues[x] = A.isoValues[x];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          g.digestsWithTimestamp = [];
          for (let x = 0; x < A.digestsWithTimestamp.length; ++x)
            g.digestsWithTimestamp[x] = s.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[x], n);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (g.camera = s.dot.v4.IosCamera.toObject(A.camera, n), n.oneofs && (g._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (g.detectionNormalizedRectangle = s.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, n), n.oneofs && (g._detectionNormalizedRectangle = "detectionNormalizedRectangle")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), i.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && s.dot.ImageSize.encode(e.resolution, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.rotationDegrees != null && Object.hasOwnProperty.call(e, "rotationDegrees") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.rotationDegrees), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.IosCamera();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.resolution = s.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = s.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !u.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.IosCamera)
          return e;
        let A = new s.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = s.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.resolution = null, n.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (n.resolution = s.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (n.rotationDegrees = e.rotationDegrees), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), i.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = u.emptyArray, t.prototype.hashedDetectedImages = u.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = u.emptyArray, t.prototype.detectionRecord = u.emptyArray, t.prototype.croppedImage = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: u.oneOfGetter(e = ["croppedImage"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = K.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && s.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let g = 0; g < A.availableCameraProperties.length; ++g)
            s.dot.v4.CameraProperties.encode(A.availableCameraProperties[g], n.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            n.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[g]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let g = 0; g < A.detectionRecord.length; ++g)
            s.dot.v4.DetectedObject.encode(A.detectionRecord[g], n.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g)
            s.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[g], n.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && s.dot.Image.encode(A.croppedImage, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.WebMetadata();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.currentCameraProperties = s.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.availableCameraProperties && a.availableCameraProperties.length || (a.availableCameraProperties = []), a.availableCameraProperties.push(s.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              a.hashedDetectedImages && a.hashedDetectedImages.length || (a.hashedDetectedImages = []), a.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              a.hashedDetectedImagesWithTimestamp && a.hashedDetectedImagesWithTimestamp.length || (a.hashedDetectedImagesWithTimestamp = []), a.hashedDetectedImagesWithTimestamp.push(s.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              a.detectionRecord && a.detectionRecord.length || (a.detectionRecord = []), a.detectionRecord.push(s.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              a.croppedImage = s.dot.Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let n = s.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (n)
            return "currentCameraProperties." + n;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            let g = s.dot.v4.CameraProperties.verify(A.availableCameraProperties[n]);
            if (g)
              return "availableCameraProperties." + g;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            if (!u.isString(A.hashedDetectedImages[n]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n) {
            let g = s.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[n]);
            if (g)
              return "hashedDetectedImagesWithTimestamp." + g;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            let g = s.dot.v4.DetectedObject.verify(A.detectionRecord[n]);
            if (g)
              return "detectionRecord." + g;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let n = s.dot.Image.verify(A.croppedImage);
          if (n)
            return "croppedImage." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.WebMetadata)
          return A;
        let n = new s.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          n.currentCameraProperties = s.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          n.availableCameraProperties = [];
          for (let g = 0; g < A.availableCameraProperties.length; ++g) {
            if (typeof A.availableCameraProperties[g] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            n.availableCameraProperties[g] = s.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[g]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          n.hashedDetectedImages = [];
          for (let g = 0; g < A.hashedDetectedImages.length; ++g)
            n.hashedDetectedImages[g] = String(A.hashedDetectedImages[g]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          n.hashedDetectedImagesWithTimestamp = [];
          for (let g = 0; g < A.hashedDetectedImagesWithTimestamp.length; ++g) {
            if (typeof A.hashedDetectedImagesWithTimestamp[g] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            n.hashedDetectedImagesWithTimestamp[g] = s.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[g]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          n.detectionRecord = [];
          for (let g = 0; g < A.detectionRecord.length; ++g) {
            if (typeof A.detectionRecord[g] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            n.detectionRecord[g] = s.dot.v4.DetectedObject.fromObject(A.detectionRecord[g]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          n.croppedImage = s.dot.Image.fromObject(A.croppedImage);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        if ((n.arrays || n.defaults) && (g.availableCameraProperties = [], g.hashedDetectedImages = [], g.detectionRecord = [], g.hashedDetectedImagesWithTimestamp = []), n.defaults && (g.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (g.currentCameraProperties = s.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, n)), A.availableCameraProperties && A.availableCameraProperties.length) {
          g.availableCameraProperties = [];
          for (let a = 0; a < A.availableCameraProperties.length; ++a)
            g.availableCameraProperties[a] = s.dot.v4.CameraProperties.toObject(A.availableCameraProperties[a], n);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          g.hashedDetectedImages = [];
          for (let a = 0; a < A.hashedDetectedImages.length; ++a)
            g.hashedDetectedImages[a] = A.hashedDetectedImages[a];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          g.detectionRecord = [];
          for (let a = 0; a < A.detectionRecord.length; ++a)
            g.detectionRecord[a] = s.dot.v4.DetectedObject.toObject(A.detectionRecord[a], n);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          g.hashedDetectedImagesWithTimestamp = [];
          for (let a = 0; a < A.hashedDetectedImagesWithTimestamp.length; ++a)
            g.hashedDetectedImagesWithTimestamp[a] = s.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[a], n);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (g.croppedImage = s.dot.Image.toObject(A.croppedImage, n), n.oneofs && (g._croppedImage = "croppedImage")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), i.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(e.imageHash), e.timestampMillis != null && Object.hasOwnProperty.call(e, "timestampMillis") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(e.timestampMillis), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.imageHash = e.string();
              break;
            }
            case 2: {
              g.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !u.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !u.isInteger(e.timestampMillis) && !(e.timestampMillis && u.isInteger(e.timestampMillis.low) && u.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new s.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (u.Long ? (A.timestampMillis = u.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        if (A.defaults)
          if (n.imageHash = "", u.Long) {
            let g = new u.Long(0, 0, !0);
            n.timestampMillis = A.longs === String ? g.toString() : A.longs === Number ? g.toNumber() : g;
          } else
            n.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (n.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? n.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : n.timestampMillis = A.longs === String ? u.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new u.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), i.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: u.oneOfGetter(e = ["aspectRatio"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: u.oneOfGetter(e = ["autoGainControl"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: u.oneOfGetter(e = ["channelCount"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: u.oneOfGetter(e = ["deviceId"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: u.oneOfGetter(e = ["displaySurface"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: u.oneOfGetter(e = ["echoCancellation"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: u.oneOfGetter(e = ["facingMode"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: u.oneOfGetter(e = ["frameRate"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: u.oneOfGetter(e = ["groupId"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: u.oneOfGetter(e = ["height"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: u.oneOfGetter(e = ["noiseSuppression"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: u.oneOfGetter(e = ["sampleRate"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: u.oneOfGetter(e = ["sampleSize"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: u.oneOfGetter(e = ["width"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: u.oneOfGetter(e = ["deviceName"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && n.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && n.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && n.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && n.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && n.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && n.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && n.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && n.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && n.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && n.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.MediaTrackSettings();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.aspectRatio = A.double();
              break;
            }
            case 2: {
              a.autoGainControl = A.bool();
              break;
            }
            case 3: {
              a.channelCount = A.int32();
              break;
            }
            case 4: {
              a.deviceId = A.string();
              break;
            }
            case 5: {
              a.displaySurface = A.string();
              break;
            }
            case 6: {
              a.echoCancellation = A.bool();
              break;
            }
            case 7: {
              a.facingMode = A.string();
              break;
            }
            case 8: {
              a.frameRate = A.double();
              break;
            }
            case 9: {
              a.groupId = A.string();
              break;
            }
            case 10: {
              a.height = A.int32();
              break;
            }
            case 11: {
              a.noiseSuppression = A.bool();
              break;
            }
            case 12: {
              a.sampleRate = A.int32();
              break;
            }
            case 13: {
              a.sampleSize = A.int32();
              break;
            }
            case 14: {
              a.width = A.int32();
              break;
            }
            case 15: {
              a.deviceName = A.string();
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !u.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !u.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !u.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !u.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !u.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !u.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !u.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !u.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !u.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !u.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.MediaTrackSettings)
          return A;
        let n = new s.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (n.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (n.autoGainControl = !!A.autoGainControl), A.channelCount != null && (n.channelCount = A.channelCount | 0), A.deviceId != null && (n.deviceId = String(A.deviceId)), A.displaySurface != null && (n.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (n.echoCancellation = !!A.echoCancellation), A.facingMode != null && (n.facingMode = String(A.facingMode)), A.frameRate != null && (n.frameRate = Number(A.frameRate)), A.groupId != null && (n.groupId = String(A.groupId)), A.height != null && (n.height = A.height | 0), A.noiseSuppression != null && (n.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (n.sampleRate = A.sampleRate | 0), A.sampleSize != null && (n.sampleSize = A.sampleSize | 0), A.width != null && (n.width = A.width | 0), A.deviceName != null && (n.deviceName = String(A.deviceName)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (g.aspectRatio = n.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, n.oneofs && (g._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (g.autoGainControl = A.autoGainControl, n.oneofs && (g._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (g.channelCount = A.channelCount, n.oneofs && (g._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (g.deviceId = A.deviceId, n.oneofs && (g._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (g.displaySurface = A.displaySurface, n.oneofs && (g._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (g.echoCancellation = A.echoCancellation, n.oneofs && (g._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (g.facingMode = A.facingMode, n.oneofs && (g._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (g.frameRate = n.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, n.oneofs && (g._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (g.groupId = A.groupId, n.oneofs && (g._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (g.height = A.height, n.oneofs && (g._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (g.noiseSuppression = A.noiseSuppression, n.oneofs && (g._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (g.sampleRate = A.sampleRate, n.oneofs && (g._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (g.sampleSize = A.sampleSize, n.oneofs && (g._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (g.width = A.width, n.oneofs && (g._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (g.deviceName = A.deviceName, n.oneofs && (g._deviceName = "deviceName")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), i.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.width), e.height != null && Object.hasOwnProperty.call(e, "height") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.height), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.ImageBitmap();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.width = e.int32();
              break;
            }
            case 2: {
              g.height = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !u.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !u.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.ImageBitmap)
          return e;
        let A = new s.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.width = 0, n.height = 0), e.width != null && e.hasOwnProperty("width") && (n.width = e.width), e.height != null && e.hasOwnProperty("height") && (n.height = e.height), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), i.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: u.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && s.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && s.dot.v4.MediaTrackSettings.encode(A.cameraProperties, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.CameraProperties();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.cameraInitFrameResolution = s.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.cameraProperties = s.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let n = s.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (n)
            return "cameraInitFrameResolution." + n;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let n = s.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (n)
            return "cameraProperties." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.CameraProperties)
          return A;
        let n = new s.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          n.cameraInitFrameResolution = s.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          n.cameraProperties = s.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (g.cameraInitFrameResolution = s.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, n), n.oneofs && (g._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (g.cameraProperties = s.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, n)), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), i.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.brightness), e.sharpness != null && Object.hasOwnProperty.call(e, "sharpness") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.sharpness), e.hotspots != null && Object.hasOwnProperty.call(e, "hotspots") && A.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(e.hotspots), e.confidence != null && Object.hasOwnProperty.call(e, "confidence") && A.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(e.confidence), e.faceSize != null && Object.hasOwnProperty.call(e, "faceSize") && A.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && s.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && s.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && s.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && s.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && s.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.DetectedObject();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.brightness = e.float();
              break;
            }
            case 2: {
              g.sharpness = e.float();
              break;
            }
            case 3: {
              g.hotspots = e.float();
              break;
            }
            case 4: {
              g.confidence = e.float();
              break;
            }
            case 5: {
              g.faceSize = e.float();
              break;
            }
            case 6: {
              g.faceCenter = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              g.smallestEdge = e.float();
              break;
            }
            case 8: {
              g.bottomLeft = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              g.bottomRight = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              g.topLeft = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              g.topRight = s.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
          let A = s.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = s.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = s.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = s.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = s.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.DetectedObject)
          return e;
        let A = new s.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = s.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = s.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = s.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = s.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = s.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.brightness = 0, n.sharpness = 0, n.hotspots = 0, n.confidence = 0, n.faceSize = 0, n.faceCenter = null, n.smallestEdge = 0, n.bottomLeft = null, n.bottomRight = null, n.topLeft = null, n.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (n.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (n.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (n.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (n.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (n.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (n.faceCenter = s.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (n.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (n.bottomLeft = s.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (n.bottomRight = s.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (n.topLeft = s.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (n.topRight = s.dot.v4.Point.toObject(e.topRight, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), i.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(e.x), e.y != null && Object.hasOwnProperty.call(e, "y") && A.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(e.y), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.Point();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.x = e.float();
              break;
            }
            case 2: {
              g.y = e.float();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.Point)
          return e;
        let A = new s.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.x = 0, n.y = 0), e.x != null && e.hasOwnProperty("x") && (n.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (n.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), i.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.FaceContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.FaceContent)
          return e;
        let A = new s.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), i.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.DocumentContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.DocumentContent)
          return e;
        let A = new s.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), i.Blob = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: u.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && s.dot.v4.DocumentContent.encode(A.documentContent, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && s.dot.v4.FaceContent.encode(A.faceContent, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && s.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && s.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && s.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && s.dot.v4.PalmContent.encode(A.palmContent, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && s.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.Blob();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.documentContent = s.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.faceContent = s.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.smileLivenessContent = s.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.palmContent = s.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.travelDocumentContent = s.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let n = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          n.blob = 1;
          {
            let g = s.dot.v4.DocumentContent.verify(A.documentContent);
            if (g)
              return "documentContent." + g;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (g)
              return "eyeGazeLivenessContent." + g;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.FaceContent.verify(A.faceContent);
            if (g)
              return "faceContent." + g;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (g)
              return "magnifeyeLivenessContent." + g;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (g)
              return "smileLivenessContent." + g;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.PalmContent.verify(A.palmContent);
            if (g)
              return "palmContent." + g;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (n.blob === 1)
            return "blob: multiple values";
          n.blob = 1;
          {
            let g = s.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (g)
              return "travelDocumentContent." + g;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Blob)
          return A;
        let n = new s.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          n.documentContent = s.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          n.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          n.faceContent = s.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          n.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          n.smileLivenessContent = s.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          n.palmContent = s.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          n.travelDocumentContent = s.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (g.documentContent = s.dot.v4.DocumentContent.toObject(A.documentContent, n), n.oneofs && (g.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (g.faceContent = s.dot.v4.FaceContent.toObject(A.faceContent, n), n.oneofs && (g.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (g.magnifeyeLivenessContent = s.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, n), n.oneofs && (g.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (g.smileLivenessContent = s.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, n), n.oneofs && (g.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (g.eyeGazeLivenessContent = s.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, n), n.oneofs && (g.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (g.palmContent = s.dot.v4.PalmContent.toObject(A.palmContent, n), n.oneofs && (g.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (g.travelDocumentContent = s.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, n), n.oneofs && (g.blob = "travelDocumentContent")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), i.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && s.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && s.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.TravelDocumentContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.ldsMasterFile = s.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              g.authenticationStatus = s.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile")) {
          let A = s.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
          if (A)
            return "ldsMasterFile." + A;
        }
        if (e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed"))
          switch (e.accessControlProtocolUsed) {
            default:
              return "accessControlProtocolUsed: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus")) {
          let A = s.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.TravelDocumentContent)
          return e;
        let A = new s.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = s.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
        }
        switch (e.accessControlProtocolUsed) {
          default:
            if (typeof e.accessControlProtocolUsed == "number") {
              A.accessControlProtocolUsed = e.accessControlProtocolUsed;
              break;
            }
            break;
          case "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED":
          case 0:
            A.accessControlProtocolUsed = 0;
            break;
          case "ACCESS_CONTROL_PROTOCOL_BAC":
          case 1:
            A.accessControlProtocolUsed = 1;
            break;
          case "ACCESS_CONTROL_PROTOCOL_PACE":
          case 2:
            A.accessControlProtocolUsed = 2;
            break;
        }
        if (e.authenticationStatus != null) {
          if (typeof e.authenticationStatus != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.authenticationStatus: object expected");
          A.authenticationStatus = s.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.ldsMasterFile = null, n.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, n.authenticationStatus = null, n.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (n.ldsMasterFile = s.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (n.accessControlProtocolUsed = A.enums === String ? s.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : s.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (n.authenticationStatus = s.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), i.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && s.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.LdsMasterFile();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = s.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.LdsMasterFile)
          return e;
        let A = new s.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (n.lds1eMrtdApplication = s.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), i.Lds1eMrtdApplication = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.comHeaderAndDataGroupPresenceInformation = null, t.prototype.sodDocumentSecurityObject = null, t.prototype.dg1MachineReadableZoneInformation = null, t.prototype.dg2EncodedIdentificationFeaturesFace = null, t.prototype.dg3AdditionalIdentificationFeatureFingers = null, t.prototype.dg4AdditionalIdentificationFeatureIrises = null, t.prototype.dg5DisplayedPortrait = null, t.prototype.dg7DisplayedSignatureOrUsualMark = null, t.prototype.dg8DataFeatures = null, t.prototype.dg9StructureFeatures = null, t.prototype.dg10SubstanceFeatures = null, t.prototype.dg11AdditionalPersonalDetails = null, t.prototype.dg12AdditionalDocumentDetails = null, t.prototype.dg13OptionalDetails = null, t.prototype.dg14SecurityOptions = null, t.prototype.dg15ActiveAuthenticationPublicKeyInfo = null, t.prototype.dg16PersonsToNotify = null;
      let e;
      return Object.defineProperty(t.prototype, "_dg3AdditionalIdentificationFeatureFingers", {
        get: u.oneOfGetter(e = ["dg3AdditionalIdentificationFeatureFingers"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg4AdditionalIdentificationFeatureIrises", {
        get: u.oneOfGetter(e = ["dg4AdditionalIdentificationFeatureIrises"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg5DisplayedPortrait", {
        get: u.oneOfGetter(e = ["dg5DisplayedPortrait"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg7DisplayedSignatureOrUsualMark", {
        get: u.oneOfGetter(e = ["dg7DisplayedSignatureOrUsualMark"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg8DataFeatures", {
        get: u.oneOfGetter(e = ["dg8DataFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg9StructureFeatures", {
        get: u.oneOfGetter(e = ["dg9StructureFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg10SubstanceFeatures", {
        get: u.oneOfGetter(e = ["dg10SubstanceFeatures"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg11AdditionalPersonalDetails", {
        get: u.oneOfGetter(e = ["dg11AdditionalPersonalDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg12AdditionalDocumentDetails", {
        get: u.oneOfGetter(e = ["dg12AdditionalDocumentDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg13OptionalDetails", {
        get: u.oneOfGetter(e = ["dg13OptionalDetails"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg14SecurityOptions", {
        get: u.oneOfGetter(e = ["dg14SecurityOptions"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg15ActiveAuthenticationPublicKeyInfo", {
        get: u.oneOfGetter(e = ["dg15ActiveAuthenticationPublicKeyInfo"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg16PersonsToNotify", {
        get: u.oneOfGetter(e = ["dg16PersonsToNotify"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && s.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, n.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && s.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && s.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && s.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, n.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && s.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, n.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && s.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, n.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && s.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, n.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && s.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, n.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, n.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, n.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && s.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, n.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, n.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, n.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && s.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, n.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && s.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, n.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && s.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, n.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && s.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, n.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              a.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              a.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              a.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              a.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              a.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              a.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              a.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              a.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              a.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              a.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              a.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              a.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              a.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              a.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              a.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              a.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (n)
            return "comHeaderAndDataGroupPresenceInformation." + n;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (n)
            return "sodDocumentSecurityObject." + n;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (n)
            return "dg1MachineReadableZoneInformation." + n;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (n)
            return "dg2EncodedIdentificationFeaturesFace." + n;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (n)
            return "dg3AdditionalIdentificationFeatureFingers." + n;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (n)
            return "dg4AdditionalIdentificationFeatureIrises." + n;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (n)
            return "dg5DisplayedPortrait." + n;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (n)
            return "dg7DisplayedSignatureOrUsualMark." + n;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (n)
            return "dg8DataFeatures." + n;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (n)
            return "dg9StructureFeatures." + n;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (n)
            return "dg10SubstanceFeatures." + n;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (n)
            return "dg11AdditionalPersonalDetails." + n;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (n)
            return "dg12AdditionalDocumentDetails." + n;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (n)
            return "dg13OptionalDetails." + n;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (n)
            return "dg14SecurityOptions." + n;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (n)
            return "dg15ActiveAuthenticationPublicKeyInfo." + n;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let n = s.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (n)
            return "dg16PersonsToNotify." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Lds1eMrtdApplication)
          return A;
        let n = new s.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          n.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          n.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          n.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          n.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          n.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          n.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          n.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          n.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          n.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          n.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          n.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          n.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          n.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          n.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          n.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          n.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          n.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.comHeaderAndDataGroupPresenceInformation = null, g.sodDocumentSecurityObject = null, g.dg1MachineReadableZoneInformation = null, g.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (g.comHeaderAndDataGroupPresenceInformation = s.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, n)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (g.sodDocumentSecurityObject = s.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, n)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (g.dg1MachineReadableZoneInformation = s.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, n)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (g.dg2EncodedIdentificationFeaturesFace = s.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, n)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (g.dg3AdditionalIdentificationFeatureFingers = s.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, n), n.oneofs && (g._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (g.dg4AdditionalIdentificationFeatureIrises = s.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, n), n.oneofs && (g._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (g.dg5DisplayedPortrait = s.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, n), n.oneofs && (g._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (g.dg7DisplayedSignatureOrUsualMark = s.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, n), n.oneofs && (g._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (g.dg8DataFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, n), n.oneofs && (g._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (g.dg9StructureFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, n), n.oneofs && (g._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (g.dg10SubstanceFeatures = s.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, n), n.oneofs && (g._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (g.dg11AdditionalPersonalDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, n), n.oneofs && (g._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (g.dg12AdditionalDocumentDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, n), n.oneofs && (g._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (g.dg13OptionalDetails = s.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, n), n.oneofs && (g._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (g.dg14SecurityOptions = s.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, n), n.oneofs && (g._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (g.dg15ActiveAuthenticationPublicKeyInfo = s.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, n), n.oneofs && (g._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (g.dg16PersonsToNotify = s.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, n), n.oneofs && (g._dg16PersonsToNotify = "dg16PersonsToNotify")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    }(), i.Lds1ElementaryFile = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: u.oneOfGetter(e = ["bytes"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.Lds1ElementaryFile();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.id = A.int32();
              break;
            }
            case 2: {
              a.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.id != null && A.hasOwnProperty("id"))
          switch (A.id) {
            default:
              return "id: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
              break;
          }
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || u.isString(A.bytes)) ? "bytes: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.Lds1ElementaryFile)
          return A;
        let n = new s.dot.v4.Lds1ElementaryFile();
        switch (A.id) {
          default:
            if (typeof A.id == "number") {
              n.id = A.id;
              break;
            }
            break;
          case "ID_UNSPECIFIED":
          case 0:
            n.id = 0;
            break;
          case "ID_COM":
          case 1:
            n.id = 1;
            break;
          case "ID_SOD":
          case 2:
            n.id = 2;
            break;
          case "ID_DG1":
          case 3:
            n.id = 3;
            break;
          case "ID_DG2":
          case 4:
            n.id = 4;
            break;
          case "ID_DG3":
          case 5:
            n.id = 5;
            break;
          case "ID_DG4":
          case 6:
            n.id = 6;
            break;
          case "ID_DG5":
          case 7:
            n.id = 7;
            break;
          case "ID_DG7":
          case 8:
            n.id = 8;
            break;
          case "ID_DG8":
          case 9:
            n.id = 9;
            break;
          case "ID_DG9":
          case 10:
            n.id = 10;
            break;
          case "ID_DG10":
          case 11:
            n.id = 11;
            break;
          case "ID_DG11":
          case 12:
            n.id = 12;
            break;
          case "ID_DG12":
          case 13:
            n.id = 13;
            break;
          case "ID_DG13":
          case 14:
            n.id = 14;
            break;
          case "ID_DG14":
          case 15:
            n.id = 15;
            break;
          case "ID_DG15":
          case 16:
            n.id = 16;
            break;
          case "ID_DG16":
          case 17:
            n.id = 17;
            break;
        }
        return A.bytes != null && (typeof A.bytes == "string" ? u.base64.decode(A.bytes, n.bytes = u.newBuffer(u.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (n.bytes = A.bytes)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.id = n.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (g.id = n.enums === String ? s.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : s.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (g.bytes = n.bytes === String ? u.base64.encode(A.bytes, 0, A.bytes.length) : n.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, n.oneofs && (g._bytes = "bytes")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "ID_UNSPECIFIED"] = 0, n[A[1] = "ID_COM"] = 1, n[A[2] = "ID_SOD"] = 2, n[A[3] = "ID_DG1"] = 3, n[A[4] = "ID_DG2"] = 4, n[A[5] = "ID_DG3"] = 5, n[A[6] = "ID_DG4"] = 6, n[A[7] = "ID_DG5"] = 7, n[A[8] = "ID_DG7"] = 8, n[A[9] = "ID_DG8"] = 9, n[A[10] = "ID_DG9"] = 10, n[A[11] = "ID_DG10"] = 11, n[A[12] = "ID_DG11"] = 12, n[A[13] = "ID_DG12"] = 13, n[A[14] = "ID_DG13"] = 14, n[A[15] = "ID_DG14"] = 15, n[A[16] = "ID_DG15"] = 16, n[A[17] = "ID_DG16"] = 17, n;
      }(), t;
    }(), i.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), i.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && s.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && s.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.AuthenticationStatus();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.data = s.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.chip = s.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.data != null && e.hasOwnProperty("data")) {
          let A = s.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = s.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.AuthenticationStatus)
          return e;
        let A = new s.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = s.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = s.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.data = null, n.chip = null), e.data != null && e.hasOwnProperty("data") && (n.data = s.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (n.chip = s.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), i.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.status), e.protocol != null && Object.hasOwnProperty.call(e, "protocol") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.protocol), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.DataAuthenticationStatus();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.status = e.int32();
              break;
            }
            case 2: {
              g.protocol = e.int32();
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.status != null && e.hasOwnProperty("status"))
          switch (e.status) {
            default:
              return "status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (e.protocol != null && e.hasOwnProperty("protocol"))
          switch (e.protocol) {
            default:
              return "protocol: enum value expected";
            case 0:
            case 1:
              break;
          }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new s.dot.v4.DataAuthenticationStatus();
        switch (e.status) {
          default:
            if (typeof e.status == "number") {
              A.status = e.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            A.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            A.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            A.status = 2;
            break;
          case "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED":
          case 3:
            A.status = 3;
            break;
        }
        switch (e.protocol) {
          default:
            if (typeof e.protocol == "number") {
              A.protocol = e.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            A.protocol = 0;
            break;
          case "PROTOCOL_PASSIVE_AUTHENTICATION":
          case 1:
            A.protocol = 1;
            break;
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, n.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (n.status = A.enums === String ? s.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : s.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (n.protocol = A.enums === String ? s.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : s.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DataAuthenticationStatus";
      }, t.Status = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "STATUS_UNSPECIFIED"] = 0, A[e[1] = "STATUS_AUTHENTICATED"] = 1, A[e[2] = "STATUS_DENIED"] = 2, A[e[3] = "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED"] = 3, A;
      }(), t.Protocol = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "PROTOCOL_UNSPECIFIED"] = 0, A[e[1] = "PROTOCOL_PASSIVE_AUTHENTICATION"] = 1, A;
      }(), t;
    }(), i.ChipAuthenticationStatus = function() {
      function t(A) {
        if (A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.status = 0, t.prototype.protocol = null, t.prototype.activeAuthenticationResponse = null;
      let e;
      return Object.defineProperty(t.prototype, "_protocol", {
        get: u.oneOfGetter(e = ["protocol"]),
        set: u.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: u.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        return n || (n = K.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && n.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.status), A.protocol != null && Object.hasOwnProperty.call(A, "protocol") && n.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.protocol), A.activeAuthenticationResponse != null && Object.hasOwnProperty.call(A, "activeAuthenticationResponse") && n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(A.activeAuthenticationResponse), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 1: {
              a.status = A.int32();
              break;
            }
            case 2: {
              a.protocol = A.int32();
              break;
            }
            case 3: {
              a.activeAuthenticationResponse = A.bytes();
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.status != null && A.hasOwnProperty("status"))
          switch (A.status) {
            default:
              return "status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (A.protocol != null && A.hasOwnProperty("protocol"))
          switch (A.protocol) {
            default:
              return "protocol: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || u.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.ChipAuthenticationStatus)
          return A;
        let n = new s.dot.v4.ChipAuthenticationStatus();
        switch (A.status) {
          default:
            if (typeof A.status == "number") {
              n.status = A.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            n.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            n.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            n.status = 2;
            break;
          case "STATUS_NOT_SUPPORTED":
          case 3:
            n.status = 3;
            break;
        }
        switch (A.protocol) {
          default:
            if (typeof A.protocol == "number") {
              n.protocol = A.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            n.protocol = 0;
            break;
          case "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING":
          case 1:
            n.protocol = 1;
            break;
          case "PROTOCOL_CHIP_AUTHENTICATION":
          case 2:
            n.protocol = 2;
            break;
          case "PROTOCOL_ACTIVE_AUTHENTICATION":
          case 3:
            n.protocol = 3;
            break;
        }
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? u.base64.decode(A.activeAuthenticationResponse, n.activeAuthenticationResponse = u.newBuffer(u.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (n.activeAuthenticationResponse = A.activeAuthenticationResponse)), n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        return n.defaults && (g.status = n.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (g.status = n.enums === String ? s.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : s.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (g.protocol = n.enums === String ? s.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : s.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, n.oneofs && (g._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (g.activeAuthenticationResponse = n.bytes === String ? u.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : n.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, n.oneofs && (g._activeAuthenticationResponse = "activeAuthenticationResponse")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "STATUS_UNSPECIFIED"] = 0, n[A[1] = "STATUS_AUTHENTICATED"] = 1, n[A[2] = "STATUS_DENIED"] = 2, n[A[3] = "STATUS_NOT_SUPPORTED"] = 3, n;
      }(), t.Protocol = function() {
        const A = {}, n = Object.create(A);
        return n[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, n[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, n[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, n[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, n;
      }(), t;
    }(), i.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let n = Object.keys(A), g = 0; g < n.length; ++g)
            A[n[g]] != null && (this[n[g]] = A[n[g]]);
      }
      t.prototype.image = null, t.prototype.segments = u.emptyArray, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: u.oneOfGetter(e = ["image"]),
        set: u.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, n) {
        if (n || (n = K.create()), A.segments != null && A.segments.length)
          for (let g = 0; g < A.segments.length; ++g)
            s.dot.v4.EyeGazeLivenessSegment.encode(A.segments[g], n.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && s.dot.v4.Metadata.encode(A.metadata, n.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && s.dot.Image.encode(A.image, n.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), n;
      }, t.encodeDelimited = function(A, n) {
        return this.encode(A, n).ldelim();
      }, t.decode = function(A, n) {
        A instanceof f || (A = f.create(A));
        let g = n === void 0 ? A.len : A.pos + n, a = new s.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < g; ) {
          let x = A.uint32();
          switch (x >>> 3) {
            case 3: {
              a.image = s.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              a.segments && a.segments.length || (a.segments = []), a.segments.push(s.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              a.metadata = s.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(x & 7);
              break;
          }
        }
        return a;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let n = s.dot.Image.verify(A.image);
          if (n)
            return "image." + n;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let n = 0; n < A.segments.length; ++n) {
            let g = s.dot.v4.EyeGazeLivenessSegment.verify(A.segments[n]);
            if (g)
              return "segments." + g;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let n = s.dot.v4.Metadata.verify(A.metadata);
          if (n)
            return "metadata." + n;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof s.dot.v4.EyeGazeLivenessContent)
          return A;
        let n = new s.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          n.image = s.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          n.segments = [];
          for (let g = 0; g < A.segments.length; ++g) {
            if (typeof A.segments[g] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            n.segments[g] = s.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[g]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          n.metadata = s.dot.v4.Metadata.fromObject(A.metadata);
        }
        return n;
      }, t.toObject = function(A, n) {
        n || (n = {});
        let g = {};
        if ((n.arrays || n.defaults) && (g.segments = []), n.defaults && (g.metadata = null), A.segments && A.segments.length) {
          g.segments = [];
          for (let a = 0; a < A.segments.length; ++a)
            g.segments[a] = s.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[a], n);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (g.metadata = s.dot.v4.Metadata.toObject(A.metadata, n)), A.image != null && A.hasOwnProperty("image") && (g.image = s.dot.Image.toObject(A.image, n), n.oneofs && (g._image = "image")), g;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), i.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.corner = e.int32();
              break;
            }
            case 2: {
              g.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
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
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new s.dot.v4.EyeGazeLivenessSegment();
        switch (e.corner) {
          default:
            if (typeof e.corner == "number") {
              A.corner = e.corner;
              break;
            }
            break;
          case "TOP_LEFT":
          case 0:
            A.corner = 0;
            break;
          case "TOP_RIGHT":
          case 1:
            A.corner = 1;
            break;
          case "BOTTOM_RIGHT":
          case 2:
            A.corner = 2;
            break;
          case "BOTTOM_LEFT":
          case 3:
            A.corner = 3;
            break;
        }
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessSegment.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.corner = A.enums === String ? "TOP_LEFT" : 0, n.image = null), e.corner != null && e.hasOwnProperty("corner") && (n.corner = A.enums === String ? s.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : s.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(e.image, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), i.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), i.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && s.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && s.dot.Image.encode(e.smileExpressionFaceImage, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.SmileLivenessContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.neutralExpressionFaceImage = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.smileExpressionFaceImage = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let A = s.dot.Image.verify(e.neutralExpressionFaceImage);
          if (A)
            return "neutralExpressionFaceImage." + A;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let A = s.dot.Image.verify(e.smileExpressionFaceImage);
          if (A)
            return "smileExpressionFaceImage." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.SmileLivenessContent)
          return e;
        let A = new s.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          A.neutralExpressionFaceImage = s.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          A.smileExpressionFaceImage = s.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.neutralExpressionFaceImage = null, n.smileExpressionFaceImage = null, n.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (n.neutralExpressionFaceImage = s.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (n.smileExpressionFaceImage = s.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), i.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), n = 0; n < A.length; ++n)
            e[A[n]] != null && (this[A[n]] = e[A[n]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = K.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && s.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && s.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let n = A === void 0 ? e.len : e.pos + A, g = new s.dot.v4.PalmContent();
        for (; e.pos < n; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              g.image = s.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              g.metadata = s.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return g;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = s.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = s.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof s.dot.v4.PalmContent)
          return e;
        let A = new s.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          A.image = s.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          A.metadata = s.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let n = {};
        return A.defaults && (n.image = null, n.metadata = null), e.image != null && e.hasOwnProperty("image") && (n.image = s.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (n.metadata = s.dot.v4.Metadata.toObject(e.metadata, A)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, O.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), i;
  }(), o.Image = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.bytes = u.newBuffer([]), i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = K.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.Image();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || u.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof s.dot.Image)
        return t;
      let e = new s.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? u.base64.decode(t.bytes, e.bytes = u.newBuffer(u.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = u.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? u.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, i;
  }(), o.ImageSize = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.width = 0, i.prototype.height = 0, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = K.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.ImageSize();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.width = t.int32();
            break;
          }
          case 2: {
            n.height = t.int32();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !u.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !u.isInteger(t.height) ? "height: integer expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof s.dot.ImageSize)
        return t;
      let e = new s.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, i;
  }(), o.Int32List = function() {
    function i(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.items = u.emptyArray, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      if (e || (e = K.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let A = 0; A < t.items.length; ++A)
          e.int32(t.items[A]);
        e.ldelim();
      }
      return e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.Int32List();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            if (n.items && n.items.length || (n.items = []), (g & 7) === 2) {
              let a = t.uint32() + t.pos;
              for (; t.pos < a; )
                n.items.push(t.int32());
            } else
              n.items.push(t.int32());
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!u.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, i.fromObject = function(t) {
      if (t instanceof s.dot.Int32List)
        return t;
      let e = new s.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let A = 0; A < t.items.length; ++A)
          e.items[A] = t.items[A] | 0;
      }
      return e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let n = 0; n < t.items.length; ++n)
          A.items[n] = t.items[n];
      }
      return A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, i;
  }(), o.Platform = function() {
    const i = {}, t = Object.create(i);
    return t[i[0] = "WEB"] = 0, t[i[1] = "ANDROID"] = 1, t[i[2] = "IOS"] = 2, t;
  }(), o.RectangleDouble = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.left = 0, i.prototype.top = 0, i.prototype.right = 0, i.prototype.bottom = 0, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = K.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
        /* id 1, wireType 1 =*/
        9
      ).double(t.left), t.top != null && Object.hasOwnProperty.call(t, "top") && e.uint32(
        /* id 2, wireType 1 =*/
        17
      ).double(t.top), t.right != null && Object.hasOwnProperty.call(t, "right") && e.uint32(
        /* id 3, wireType 1 =*/
        25
      ).double(t.right), t.bottom != null && Object.hasOwnProperty.call(t, "bottom") && e.uint32(
        /* id 4, wireType 1 =*/
        33
      ).double(t.bottom), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.RectangleDouble();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.left = t.double();
            break;
          }
          case 2: {
            n.top = t.double();
            break;
          }
          case 3: {
            n.right = t.double();
            break;
          }
          case 4: {
            n.bottom = t.double();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof s.dot.RectangleDouble)
        return t;
      let e = new s.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, i;
  }(), o.DigestWithTimestamp = function() {
    function i(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return i.prototype.digest = u.newBuffer([]), i.prototype.timestampMillis = u.Long ? u.Long.fromBits(0, 0, !0) : 0, i.create = function(t) {
      return new i(t);
    }, i.encode = function(t, e) {
      return e || (e = K.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, i.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, i.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, n = new s.dot.DigestWithTimestamp();
      for (; t.pos < A; ) {
        let g = t.uint32();
        switch (g >>> 3) {
          case 1: {
            n.digest = t.bytes();
            break;
          }
          case 2: {
            n.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(g & 7);
            break;
        }
      }
      return n;
    }, i.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, i.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || u.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !u.isInteger(t.timestampMillis) && !(t.timestampMillis && u.isInteger(t.timestampMillis.low) && u.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, i.fromObject = function(t) {
      if (t instanceof s.dot.DigestWithTimestamp)
        return t;
      let e = new s.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? u.base64.decode(t.digest, e.digest = u.newBuffer(u.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (u.Long ? (e.timestampMillis = u.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, i.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = u.newBuffer(A.digest))), u.Long) {
          let n = new u.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? n.toString() : e.longs === Number ? n.toNumber() : n;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? u.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? u.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new u.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, i.prototype.toJSON = function() {
      return this.constructor.toObject(this, O.util.toJSONOptions);
    }, i.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, i;
  }(), o;
})();
(function(o, i) {
  function t(x, I, C, r, Q) {
    return oA(x - -997, Q);
  }
  function e(x, I, C, r, Q) {
    return oA(r - 322, I);
  }
  function A(x, I, C, r, Q) {
    return oA(r - 344, x);
  }
  function n(x, I, C, r, Q) {
    return oA(C - -891, I);
  }
  const g = o();
  function a(x, I, C, r, Q) {
    return oA(r - 931, C);
  }
  for (; ; )
    try {
      if (-parseInt(e(625, "jGg5", 830, 721, 702)) / 1 + -parseInt(t(-691, -788, -619, -713, "01E%")) / 2 + -parseInt(t(-637, -687, -577, -728, "esBQ")) / 3 + -parseInt(n(-573, "UQCy", -532, -443, -583)) / 4 * (-parseInt(n(-724, "Zp0j", -610, -552, -614)) / 5) + -parseInt(A("pJew", 829, 837, 814, 811)) / 6 + parseInt(a(1319, 1343, "V6(h", 1282, 1259)) / 7 + parseInt(n(-472, "19k8", -570, -561, -684)) / 8 === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Fo, -18372 * -17 + 92074 + -5098 * 14);
function Fo() {
  const o = ["darFtx4", "d8kxpCkiWQ0", "h8kPWOVcLLG", "yCowcgJcGG", "i8oUAYtcKq", "h8kZnw7cHG", "WRuQdaSl", "CmoXDmkPWQ0", "W7X6naK", "WOtdI8kyWQWB", "ete1vcK", "sXChx8oZ", "W7BdVK5LW60", "xmktncmL", "W4DDisP/", "W7RdOmoNlLy", "W4tdNIS8W5C", "DutdMCkDja", "W4FdLZhdHCoE", "W5nLdLHw", "uSk1WOaHrhRcUh3cHSoYW4Ce", "zmoCiZK2", "wKO2rbS", "xvxdHH7cUW", "W7VdK3/dMai", "WQhdVmooWO0Y", "W4u9mZddUa", "ESkJnvdcJa", "zmk3igD2", "smoxh3ZcKG", "uw8djXO", "xMGXWOlcGG", "WOjpFCoYCG", "qg/dRNNcMq", "WQPaCSoYfq", "lMzav8op", "WOVdOmoyWOm6", "WQFcQLhcMSkUaCkMW6NcHvlcHCowla", "jSopvrpcHa", "ASoUzLJcQG", "p09YE8ok", "W6qatXhcVW", "xmoxkYia", "pSowvSk5WQS", "W4BcVCkeW6b/", "wSkAfadcTW", "W6vuAqDK", "Ex7dTCkqja", "WQtdRbldJmo9", "hSkAW7yaW6e", "W6tcO8k/cSoB", "WOhcUSoCWRqj", "W4ddHhCBmq", "jCoIA8kjWQS", "WQ0KkHG7", "WOvnpdfy", "W6ldN0OfWPi", "W6VdOJpcJL8", "W5ddOglcIxe", "tdi3Au4", "EMJdT0tcIq", "hSouyd7dSCoTWOrTiSkqFSoIuq", "W6RcP8kUjmkv", "zSkbWO0hwq", "W5GcWPdcSmoG", "W54oi8oSlW", "W4xcNCkVhSoD", "WRBdP8oeWO4/", "WR7dPCojWQee", "W7POedjc", "W4BdQSoscey", "zSokoGK", "WPjQD8o5WQO", "zmoalW3cKW", "W6tdNCobW4WR", "W5ZcMaNdTCkr", "W6PxC8o+xa", "WP3dMuOtW6u", "amoch8kFWPu", "W4xcKmoKW5CN", "W5RdL8o1D8kl", "WORdVSkXEmk4", "vmosWOvhga", "W7zuhdLB", "h3i1ASoe", "WQBdGSojWOa", "W4tdIvBdR8o4", "WQ3dKmo1B8ot", "W6WtWPWpnG", "W5BcLd/dHmos", "BmkGzCkyWOC", "tSk9iSozW4alW6RdLgb0WRNdLM8", "fCosWPpcLSkb", "WO/cHmo9WRjr", "WPz8WPu3WPG", "W685vCoObq", "W7JdKrhdVmkK", "ASkqWRKhxq", "W6lcOtddTCkC", "m8kdcCkbWRW", "mJhdT2BcIq", "W4RdMLpdNga", "tCoJW4VdLb9fWRCybfWaWP57", "WO41sCkXWP8", "rCk4kCorW4ueWQ/dU3f1WRddQW", "WP/dNmoUiM4", "WQFdJd7dPmoD", "oCoArSk8WOO", "WOhcGc/dVSk+", "fmkFWQpcJwO", "WPxdHx84W60", "yKRdQuuS", "ASk2Dt93", "tMC1eIJdISkNWQ0+WRXzhSo7", "r2SNbdG", "WRqTDLhcSG", "W7FcQmo5W5S", "fCovWOmIla", "W53cHbddVSkr", "bSosF2uupMaXB8oSlHO", "iSorWOzeiG", "F8oKfI7cOW", "zexdMxRcJa", "WO5TwSoxtq", "xSkSWPSXra", "kHO0BcO", "W7lcPmoAc8k1", "WRZdGJGSW4O", "W6SqWP45sW", "W4ZcOf43nG", "W5W5W7Dvza", "lbiIvhOJESo2W7f8ev4d", "tv0ajxG", "W7tcPHZdUSk+", "W4xdHhFcNrK", "w3NdMZ4L", "amo2CHdcMa", "W7lcJmoYW6L/", "W4pdSG7dHSoh", "W53cUMRdTCkS", "WO50CSkoCG", "W5xcLrdcNSkp", "W64OnCophW", "whPbmNa", "W7NdHGSUnG", "W4pcLMWfnq", "uYxdMSkajG", "BKxdGCkMaq", "W5OHmIxcGq", "a8kqqu7cRa", "zmo5ACkvWPC", "Es/dVr9W", "WQGHhSopgW", "r2VdMX0", "WRXvsmklya", "W6uzuwBcUq", "W6VcV8kEW4LQueGOqSkgiCk2", "W7ldGMZdLMO", "W6LeBv3dVq", "lSkWWRZcSK4", "i8olnmkDWPO", "aK9/smoT", "W5ddN3WqW6u", "BmoUWRVcTSou", "xmofx8kxWOW", "vmo4WQJcV8k3", "hMbdeNG", "v8kIgseT", "FCkkdZWr", "W59UWPDKW7m", "W6BdN3OkW50", "W6bZlrtdV8kVjmoIs3/dIxFdVCkH", "wCkWxeCU", "h8klmeVcMa", "W7CDW7KXmq", "WPddM3CgW51XvG", "W7mWvmoxWQq", "WP3cU2WZpq", "WRaTrmo3WPa", "W6iLW5GbaG", "W7LmcazU", "x8ojaJRcQG", "DKhdPWag", "W6RdUCk0W41Z", "m8ollSkLWQi", "sxDXfqW", "W4ZdPsSVW5W", "yhmaedi", "W4VdRaBcMGy", "WOyzF2NcNW", "WRpdK8krxSoq", "W7JcUCogW6eB", "W6FdRetcV04", "W4RdQ3aZ", "WPuWACoGW4W", "wCoGySkeWOu", "WR8KiY8/", "uCkoW5FcU8o2", "x0e0iXG", "lsntDNC", "W63dNgCBW6a", "oSkFz1NdI13dLCkUWOZcPZZcNCkR", "pSoPW6iGoW", "dYfuf3i", "xmkLeJFcGG", "srGSwSol", "W5tdVCkSWRbP", "mmoVW6vujq", "W6jBW5HuAG", "o2moWR7cUSk3ha", "WR/cRhfiWOpdPwtdPdldJCoXCCon", "ECkGcdel", "WRBcPaSxW4q", "W4xcV8kzgSk6", "W5eQWQNdQSkm", "W5yYeYZdPa", "W4FdUgqMW58", "z8kKhH9g", "iZCCsSos", "A3FdJKW", "xKGhkr8", "cCkuDZVcRa", "W7tcHSoDW7y2", "wCkRkry0", "gt1Mvwm", "p8oGCZNcNq", "y8kIh0JcKW", "hCojAZNcKW", "rSoiACkBWR4"];
  return Fo = function() {
    return o;
  }, Fo();
}
function oA(o, i) {
  const t = Fo();
  return oA = function(e, A) {
    e = e - (-40 * 127 + -3692 * -2 + 21 * -97);
    let n = t[e];
    if (oA.YjbCTs === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      oA.DWNXcs = C, o = arguments, oA.YjbCTs = !0;
    }
    const a = t[-3601 * 1 + 6992 + 3391 * -1], x = e + a, I = o[x];
    return I ? n = I : (oA.VgvSRZ === void 0 && (oA.VgvSRZ = !0), n = oA.DWNXcs(n, A), o[x] = n), n;
  }, oA(o, i);
}
function bs() {
  const o = a(934, "wQu9") + t(150, 2, "c%nX", 108) + a(1040, "19k8") + e(-359, -344, -405, -333, "wQu9") + n(88, 54, 123, "uDsV") + n(64, 134, 168, "c%nX") + I(649, 633, "QPW[") + t(26, 85, "L9Dn", 86) + t(-85, -118, "x*zH", -3) + a(1065, "FKoW") + t(-63, -77, "lAk%", -75) + a(967, "*63Z") + a(908, "L9Dn") + n(114, 38, 88, "%zGG") + t(55, -81, "gC%^", -49) + n(170, 228, 201, "QWHO") + I(679, 615, "lAk%") + e(-394, -281, -349, -374, "wQu9") + I(715, 704, "QWHO") + n(66, 165, -15, "GgF)") + e(-377, -355, -213, -271, "&8L^") + I(639, 600, "QWHO") + I(642, 637, "l@9M") + t(-137, -22, "esBQ", -59) + a(972, "jGg5") + n(51, 121, -25, "jGg5") + a(930, "0]wd") + t(29, 150, "uDsV", 57) + a(900, "b^8K") + I(800, 693, "1^9r") + a(956, "esBQ") + a(1025, "!Dpf") + n(272, 285, 324, "*1sU") + a(1062, "F3$g") + I(713, 643, "*1sU") + t(85, 18, "@hqt", 84) + n(55, 93, 68, "F3$g") + t(86, 40, "FKoW", -16) + t(-46, -40, "d!K#", -4) + I(653, 763, "QWHO") + n(227, 205, 289, "01E%") + t(-24, -134, "esBQ", -102) + I(926, 815, "GgF)") + e(-145, -310, -123, -226, "Zp0j") + e(-333, -324, -245, -304, "01E%") + a(968, "5v4R") + a(1099, "LX0C") + e(-220, -293, -163, -252, "W%Pp") + a(937, "k5By") + t(42, 3, "7akX", 105) + I(876, 813, "sI([") + e(-267, -459, -454, -369, "l@9M") + e(-238, -427, -272, -342, "d!K#") + a(993, "k5By") + I(667, 678, "QWHO") + I(607, 630, "19k8") + n(179, 131, 97, "gC%^") + a(1e3, "0]wd") + a(912, "nhVV") + I(796, 766, "FKoW") + I(585, 695, "P$IC") + n(169, 68, 68, "01E%") + e(-315, -425, -398, -348, "d!K#") + t(84, 52, "nhVV", 65) + I(637, 731, "x*zH") + n(208, 310, 286, "L9Dn") + a(974, "x*zH") + t(183, 89, "NyR8", 79) + n(148, 107, 65, "*1sU") + n(130, 156, 175, "QWHO") + a(998, "wQu9") + n(48, 137, 23, "jGg5") + t(-53, -94, "sI([", -70) + t(-146, -55, "UP&F", -33) + n(224, 200, 335, "dnbR") + t(6, 24, "&*9y", -52) + e(-398, -431, -358, -440, "&*9y") + t(70, 102, "jGg5", 82) + t(17, -100, "lYdU", -60) + a(898, "W%Pp") + a(1052, "pJew") + e(-515, -365, -411, -451, "c%nX") + a(911, "c%nX") + n(136, 155, 175, "1^9r") + e(-387, -531, -440, -443, "FKoW") + n(195, 105, 222, "@hqt") + n(143, 105, 193, "esBQ") + I(824, 787, "gC%^") + t(66, 123, "lAk%", 32) + n(204, 293, 154, "%zGG") + t(-3, -65, "d!K#", 4) + t(61, 191, "%zGG", 93) + a(914, "&*9y") + I(735, 758, "UP&F") + t(-4, -116, "%zGG", -23) + e(-299, -410, -426, -322, "L9Dn") + a(1041, "k5By") + t(-38, -165, "Zp0j", -86) + e(-222, -283, -398, -328, "l@9M") + I(832, 721, "*mQ4") + t(-42, -70, "1^9r", 11) + e(-342, -316, -201, -233, "wQu9") + a(1029, "P$IC") + t(-13, -49, "gC%^", 14) + I(761, 733, "x*zH") + I(581, 651, "pY4J") + e(-402, -431, -349, -334, "UP&F") + a(1100, "uDsV") + I(828, 719, "7akX") + e(-431, -339, -382, -447, "LX0C") + t(3, 155, "pY4J", 72) + n(191, 253, 116, "UQCy") + n(250, 263, 237, "wQu9") + t(-66, -34, "u#hO", -39) + I(757, 683, "b^8K") + n(113, 62, 14, "GgF)") + t(-58, 11, "*1sU", 28) + a(957, "P$IC") + t(33, 115, "l@9M", 56) + e(-469, -444, -427, -355, "dnbR") + a(985, "!Dpf") + I(757, 751, "*mQ4") + e(-304, -370, -308, -297, "pJew") + e(-364, -299, -340, -408, "@hqt") + e(-193, -210, -195, -243, "F3$g") + n(104, 11, 22, "x*zH") + I(696, 772, "01E%") + a(1091, "]&UA") + t(-89, -176, "*63Z", -66) + I(616, 614, "c%nX") + e(-310, -359, -220, -251, "c%nX") + t(144, -45, "lAk%", 34) + t(113, 118, "V6(h", 39) + n(125, 106, 35, "pY4J") + n(270, 285, 375, "l@9M") + n(112, 186, 143, "V6(h") + a(954, "pJew") + e(-298, -308, -171, -267, "V6(h") + n(205, 146, 252, "V6(h") + n(210, 137, 108, "FKoW") + e(-328, -448, -458, -384, "Zp0j") + a(1020, "k5By") + a(981, "k5By") + t(46, 204, "nhVV", 95) + t(123, 60, "w#Tt", 24) + I(742, 791, "u#hO") + I(720, 707, "x*zH") + I(689, 802, "c%nX") + t(-125, -168, "w#Tt", -95) + a(1039, "@hqt") + t(16, 71, "esBQ", 16) + t(153, 130, "&8L^", 55) + I(738, 647, "k5By") + a(918, "!Dpf") + a(1057, "uDsV") + e(-148, -164, -217, -234, "L9Dn") + e(-408, -446, -506, -403, "QWHO") + a(907, "NyR8") + I(801, 737, "LX0C") + I(602, 667, "uDsV") + a(1102, "pY4J") + e(-240, -308, -372, -265, "c%nX") + I(641, 717, "k5By") + I(591, 611, "d!K#") + a(1021, "P$IC") + t(190, 93, "u#hO", 80) + e(-418, -498, -329, -419, "wQu9") + a(915, "&*9y") + n(241, 134, 239, "u#hO") + t(99, 124, "L9Dn", 96) + I(737, 803, "0]wd") + a(944, "W%Pp") + e(-232, -316, -190, -291, "iF]*") + t(48, -94, "NyR8", -38) + a(1059, "LX0C") + t(-1, 32, "lAk%", 76) + t(148, 8, "01E%", 51) + e(-443, -352, -478, -390, "b^8K") + I(857, 756, "&*9y") + t(-56, 50, "19k8", -40) + I(657, 624, "d!K#") + I(700, 782, "0]wd") + n(237, 330, 152, "l@9M") + t(-16, 88, "NyR8", -7) + a(917, "*mQ4") + I(655, 640, "]&UA") + t(-71, -181, "GgF)", -78) + e(-212, -372, -273, -294, "gC%^") + t(-7, 97, "LX0C", 23) + a(1069, "7akX") + t(-137, -89, "lAk%", -106) + n(165, 52, 142, "x*zH") + t(22, -93, "jGg5", -22) + I(660, 627, "nhVV") + e(-383, -478, -415, -423, "*mQ4") + e(-338, -218, -298, -266, "01E%") + e(-315, -449, -383, -381, "w#Tt") + a(891, "d!K#") + t(-112, -49, "P$IC", -97) + n(254, 313, 146, "lYdU"), i = window[e(-287, -267, -291, -332, "gC%^")](o);
  function t(C, r, Q, c, E) {
    return oA(c - -379, Q);
  }
  function e(C, r, Q, c, E) {
    return oA(c - -719, E);
  }
  const A = window[e(-463, -258, -346, -350, "LX0C")](i);
  function n(C, r, Q, c, E) {
    return oA(C - -219, c);
  }
  const g = rn(A);
  function a(C, r, Q, c, E) {
    return oA(C - 620, r);
  }
  const x = {};
  x[n(124, 117, 136, "l@9M")] = Hx;
  function I(C, r, Q, c, E) {
    return oA(r - 325, Q);
  }
  return x[e(-146, -241, -269, -224, "NyR8")] = zc, window[I(650, 691, "l@9M") + "o"][e(-417, -344, -403, -315, "01E%") + "e"][t(45, 142, "d!K#", 38) + e(-295, -205, -248, -255, "01E%")](e(-464, -340, -315, -416, "GgF)"), g, x, !0, [n(155, 159, 108, "QWHO") + "pt"]);
}
async function ks(o) {
  const i = await bs();
  function t(g, a, x, I, C) {
    return oA(g - 465, x);
  }
  const e = {};
  function A(g, a, x, I, C) {
    return oA(C - -565, x);
  }
  e[n(120, 37, 147, 206, "V6(h")] = Hx;
  function n(g, a, x, I, C) {
    return oA(g - -330, C);
  }
  return window[A(-92, -77, "sI([", -149, -184) + "o"][t(793, 893, "pY4J") + "e"][n(164, 82, 97, 265, "19k8") + "pt"](e, i, o);
}
(function(o, i) {
  const t = o();
  function e(x, I, C, r, Q) {
    return KA(C - 440, I);
  }
  function A(x, I, C, r, Q) {
    return KA(r - -612, x);
  }
  function n(x, I, C, r, Q) {
    return KA(C - -237, I);
  }
  function g(x, I, C, r, Q) {
    return KA(I - 528, C);
  }
  function a(x, I, C, r, Q) {
    return KA(x - 308, C);
  }
  for (; ; )
    try {
      if (parseInt(g(705, 705, "Aoy0", 712, 706)) / 1 + -parseInt(a(472, 467, "eded", 471, 476)) / 2 + -parseInt(a(468, 477, "!3QI", 468, 462)) / 3 * (-parseInt(g(693, 698, "KiTy", 707, 705)) / 4) + -parseInt(g(692, 691, "waN5", 693, 686)) / 5 + parseInt(A("fI)v", -432, -435, -439, -444)) / 6 + parseInt(e(600, "LcxR", 602, 610, 609)) / 7 + -parseInt(n(-66, "fI)v", -69, -72, -65)) / 8 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Ro, 350996);
function KA(o, i) {
  const t = Ro();
  return KA = function(e, A) {
    e = e - (-7 * 1271 + -10 * 172 + -13 * -829);
    let n = t[e];
    if (KA.PNOmXS === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      KA.WgsfVv = C, o = arguments, KA.PNOmXS = !0;
    }
    const a = t[-4678 * -1 + 1418 + -6096], x = e + a, I = o[x];
    return I ? n = I : (KA.RSqInf === void 0 && (KA.RSqInf = !0), n = KA.WgsfVv(n, A), o[x] = n), n;
  }, KA(o, i);
}
function Ro() {
  const o = ["pgBdHuddSCkowbzf", "WQPHW6vjW5C4WOpdMmkN", "W7j8WO7dTeP/WRBdRYpdK8kNWPvB", "F8k3W5OpdcVcRhOrW5FdQvC", "WPzRkSkVn8kPESoKW7jGW6DY", "qYpcKCoMW7hdQZRcMGBcNmkBpq", "Bsn9W4Cc", "sSkEW5nWFmoTWOldNCkLyY0", "FMhcGrrkk8ooqmo8WRxcMv8C", "W4ZcPSo5qc0uW4DbWOxcKSo9W4a", "WObwWRtdPhffWOjzfW/cIq", "W43cQSkuW7y+hCkSlCojW58LAxK", "WOb0afRdPxPywY7cVcJcQCkx", "Ew7cGX5bl8oaz8oLWQRcTgql", "WOLvWRNdPNPMWQrjkXdcVq", "W4NdR8kQ", "W4RcPCkwW7W1gCkIcSoqW4aiuM4", "WP7cLSo3WQNdUxpdOKa0uM8"];
  return Ro = function() {
    return o;
  }, Ro();
}
async function Gs(o) {
  const { iv: i, key: t, message: e } = await HB(o), A = await ks(t), n = {};
  n[g(-383, -386, "kc7H", -392)] = A, n.iv = i, n[g(-401, -394, "AkU#", -401) + "ge"] = e;
  function g(a, x, I, C, r) {
    return KA(C - -567, I);
  }
  return n;
}
function Wo() {
  const o = ["W4CwDdldPxJdTSkfW6ddNmoucSk2", "WONdOZeOzq", "bSkIW7eI", "kWOF", "W6m1Fa3dMvRdUtFdQIyzW5jS", "t8kuEJVdJSo5W7O", "duHS", "tgNdGCkh", "bmkXvCoCBuGA", "W4CFDdhdPxZdVmkHW7RdUmoNiCkL", "pMpdLhih", "C8ovWOFdNh7cTCoxzSkyWQiqjmkT", "x8oSWO3cGgXPxa", "eSkRWRjyW5RdPmk/WRRdJfpcJ8kxaG", "WOrtWPq", "WQ83W4GHwmogW7PkW5hdOCkLW7K+", "xYFcMdldLfzFra", "kCkflCocaa", "amkDW7ldGSkh", "WQLKiKBdU8kRW4tcP8oIW5qTzCoM", "W7JdGghdN8oz", "F8oJcwlcGmk5kwi", "WQ7dHcnXjG", "uHGLWRpcMJmVW6BcV8k3WRGHW5G", "W7HglWJcVSkQWPVdRbZdLCorW5y", "s8oYfLRcSmkZWRRcT8kxkgXxuG", "W45Yn1RcTs3cLG", "uHKRWRlcMZjsW7dcVmkXWOKU", "WRedWODFbCk/hCoUWPJcVmkXA8k4bW", "smo0f1NcTSk1WRVcVmkOf3PRya", "C1rjpKxcKSofWPddSSkhDmkDDG4"];
  return Wo = function() {
    return o;
  }, Wo();
}
function QA(o, i) {
  const t = Wo();
  return QA = function(e, A) {
    e = e - (-1 * 3202 + 4856 + -1483);
    let n = t[e];
    if (QA.YVpoSQ === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      QA.JWmjYa = C, o = arguments, QA.YVpoSQ = !0;
    }
    const a = t[2178 + -1 * 9776 + 2 * 3799], x = e + a, I = o[x];
    return I ? n = I : (QA.TkqbWQ === void 0 && (QA.TkqbWQ = !0), n = QA.JWmjYa(n, A), o[x] = n), n;
  }, QA(o, i);
}
(function(o, i) {
  const t = o();
  function e(x, I, C, r, Q) {
    return QA(C - -884, r);
  }
  function A(x, I, C, r, Q) {
    return QA(C - 674, x);
  }
  function n(x, I, C, r, Q) {
    return QA(x - -987, C);
  }
  function g(x, I, C, r, Q) {
    return QA(I - 312, x);
  }
  function a(x, I, C, r, Q) {
    return QA(C - -623, I);
  }
  for (; ; )
    try {
      if (-parseInt(A("Dl*q", 850, 845, 858, 850)) / 1 + -parseInt(A("ODpD", 840, 850, 852, 858)) / 2 + parseInt(e(-726, -715, -712, "ODpD", -701)) / 3 + -parseInt(e(-708, -687, -702, "J&s0", -690)) / 4 * (-parseInt(a(-431, "ODpD", -440, -424, -428)) / 5) + -parseInt(a(-426, "lh6N", -434, -448, -427)) / 6 * (parseInt(g("4rR&", 511, 517, 513, 526)) / 7) + parseInt(a(-422, "mE@W", -433, -436, -422)) / 8 * (parseInt(n(-796, -805, "xxHF", -782, -810)) / 9) + parseInt(g("0QTs", 487, 473, 485, 496)) / 10 === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Wo, 577815);
async function Ss(o) {
  function i(a, x, I, C, r) {
    return QA(a - -148, C);
  }
  function t(a, x, I, C, r) {
    return QA(r - 559, a);
  }
  const e = await window[A(-506, -500, -506, "7*zo") + "o"][A(-498, -507, -487, "JWA1") + "e"][A(-499, -493, -491, "Z]VQ") + "t"](n(742, 730, 744, 743, "s37r"), o);
  function A(a, x, I, C, r) {
    return QA(a - -694, C);
  }
  function n(a, x, I, C, r) {
    return QA(x - 551, r);
  }
  function g(a, x, I, C, r) {
    return QA(a - 305, x);
  }
  return Array[n(738, 731, 739, 729, "qNlO")](new Uint8Array(e))[t("Y#H(", 742, 742, 746, 743)]((a) => a[A(-494, -481, -487, "s37r") + g(486, "1F58")](-18 * -404 + -518 * -5 + -9846 * 1)[A(-496, -494, -488, "@NaW") + i(44, 31, 59, "MuPg")](-11 * 79 + 9801 + -8930, "0"))[i(37, 38, 45, "XWML")]("");
}
function ae(o, i) {
  var t = Mo();
  return ae = function(e, A) {
    e = e - (10 * 523 + 2582 * -1 + -345 * 7);
    var n = t[e];
    if (ae.Kijpyg === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (var p = 0, G = c.length; p < G; p++)
          E += "%" + ("00" + c.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var c = [], E = 0, d, l = "";
        r = g(r);
        var B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      ae.CIhyYO = a, o = arguments, ae.Kijpyg = !0;
    }
    var x = t[-5354 + -1 * -9727 + -4373], I = e + x, C = o[I];
    return C ? n = C : (ae.zKxjXd === void 0 && (ae.zKxjXd = !0), n = ae.CIhyYO(n, A), o[I] = n), n;
  }, ae(o, i);
}
function Mo() {
  var o = ["D8o3WPBdQcxcNSo/mJ/dIuRcMmkM", "DCoYWPZdQcJcLSo6qctdLKpcISkLuW", "W5VcNtXfdg3dVG/dGCk3Auq", "h8kPWPVcQCkiW4aFqCozbt8TW6bx", "W5qHW4esW5SuWPGym1PDWRm", "W5pdGmkmc8o6cmozWQaoW7S", "ctX8FCo5W4BcReHyomkIW7O", "WPX2xx5SoSotWQtdTvS", "ownSpSkAW6ZdGCoPWPqnW7i3", "evFcUYD+lhCib8kTFmkO", "W6RdPSoav8o/cmklW64pgSkoW4pcIW", "WQGtW4VcVCoRvCoBWPJdMgi", "h8kUW6BdICo3WPXeeG", "xqBdVmoOEmkbB0C", "smotumo+WQyBpgrQWPa", "WRqSWPT9W7VcPmobWQhdI8oSbCk9", "fvRcUIr9k2GIiSkVwCkp", "W5ldJ8orW6m6lcSVh8kGr8oK"];
  return Mo = function() {
    return o;
  }, Mo();
}
(function(o, i) {
  function t(a, x, I, C, r) {
    return ae(I - -210, r);
  }
  function e(a, x, I, C, r) {
    return ae(a - -766, I);
  }
  function A(a, x, I, C, r) {
    return ae(I - -395, x);
  }
  for (var n = o(); ; )
    try {
      var g = -parseInt(e(-530, -521, "K9pE", -523, -523)) / 1 + -parseInt(e(-519, -523, "K9pE", -515, -515)) / 2 + parseInt(e(-522, -523, "QCXM", -516, -516)) / 3 + -parseInt(A(-141, "VhKx", -149, -144, -153)) / 4 * (-parseInt(A(-169, "&o5A", -162, -154, -160)) / 5) + -parseInt(e(-528, -528, "Jb2Z", -527, -531)) / 6 + -parseInt(A(-150, "knUy", -152, -149, -150)) / 7 * (parseInt(A(-163, "CHZl", -161, -161, -154)) / 8) + parseInt(t(29, 21, 29, 38, "Jb2Z")) / 9;
      if (g === i) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Mo, -1 * -124119 + 103845 + 205979);
async function MI(o) {
  const { Image: i } = St, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const n = i.verify(A);
  if (n) throw Error(n);
  const g = {};
  return g.bytes = e, i.create(g);
}
async function Ns(o) {
  const { v4: { Metadata: i } } = St, t = { ...o };
  t.platform = St.Platform.WEB;
  const e = t, A = i.verify(e);
  if (A) throw Error(A);
  return i.create(e);
}
async function Fs(o) {
  const { Content: i } = St, { iv: t, key: e, message: A } = await Gs(o), n = { token: new Uint8Array(e), iv: t, schemaVersion: _c, bytes: new Uint8Array(A) }, g = i.verify(n);
  if (g) throw Error(g);
  const a = i.create(n);
  return i.encode(a).finish();
}
function Rs(o) {
  const { Blob: i } = St.v4, t = i.verify(o);
  if (t) throw Error(t);
  const e = i.create(o);
  return i.encode(e).finish();
}
var r0, Po;
class vI {
  constructor(i, t, e, A, n, g, a, x, I, C, r, Q) {
    P(this, r0, !0);
    P(this, Po, Date.now());
    b(this, "fpsOfAllImages", new Zn(5302 + 6427 * 1 + -11699));
    this.cameraService = i, this.imageCropSettings = t, this.imageProcessor = e, this.createProtoMessage = A, this.onCaptureCallback = n, this.onDetectionCallback = g, this.checkToInstructionCodeMap = a, this.fallbackInstruction = x, this.samVersion = I, this.instructionEscalation = C, this.sessionToken = r, this.analytics = Q;
  }
  async run() {
    for (; w(this, r0); )
      await this.iterate();
    return this;
  }
  stop() {
    H(this, r0, !1);
  }
  async trackCaptureProcess(i, t) {
    var a;
    const e = Date.now(), A = i0(this.fpsOfAllImages), n = {};
    n.width = t.width, n.height = t.height;
    const g = { detection: i, imageResolution: n, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - w(this, Po), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await xs() };
    $t() && Object.assign(g, { performanceCheckup: this.cameraService.performanceCheckup.createResult(), optCheck: this.cameraService.cameraEvaluator.getCameraEvaluationResult(), isSystemStable: !n0() }), (a = this.analytics) == null || a.trackCaptureProcess(g);
  }
  onDetection(i, t) {
    this.onDetectionCallback({ ...i, avgFps: ke(i0(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: i, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const n = A, g = await xB(t), a = await cB(t, this.imageCropSettings), x = await this.cameraService.getCameraProperties(), I = { ...x, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await MI(a) }, C = {};
    C.sessionToken = this.sessionToken, C.web = I;
    const r = C, Q = await this.createProtoMessage(g, r), c = {};
    c.detection = e, c.imageResolution = n;
    const E = {};
    E.image = g, E.data = c;
    const d = E;
    this.stop();
    const l = {};
    l.imageData = d, l.protoMessage = Q, l.webMetadata = I, l.candidateSelectionImages = i, this.onCaptureCallback(l);
  }
  collectAndEscalate(i) {
    if (!this.instructionEscalation) return !1;
    const t = i;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
  }
  getDetectionEndTime(i) {
    return Date.now() - i;
  }
  getInvalidInstructions(i, t) {
    const e = [];
    return Array.from(i).forEach(([A, n]) => {
      !n && e.push(t[A]);
    }), e;
  }
  async sleep(i) {
    await zi(Math.max($g.max - i, $g.min));
  }
}
r0 = new WeakMap(), Po = new WeakMap();
class Ws extends vI {
  constructor(t, ...e) {
    super(...e);
    b(this, "candidateSelectionTime", 53 * -59 + -3768 + -197 * -35);
    b(this, "candidatesSelectionFramesCount", 0);
    b(this, "isInCandidateSelection", !1);
    b(this, "lastImage", null);
    b(this, "bestImage", null);
    b(this, "candidateSelectionImages", []);
    this.instructionCodeMap = t;
  }
  async iterate() {
    if (this.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t);
    this.isInCandidateSelection ? this.saveBetterImage(t, e) : this.tryInitCandidatePhase(t, e);
    const A = {};
    A.takenPhoto = t, A.imageProcessorResult = e;
    const n = this.getDetectionDetails(A);
    this.onDetection(n, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const g = {};
    g.instructionCode = n.processedImage.instructionCode, g.isValid = e.isValid, g.image = t.image, g.detection = e.detection, this.lastImage = g, await this.sleep(n.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? L.fromCameraError(e) : L.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const n = {};
    n.image = t.image, n.detection = e.detection;
    const g = n;
    this.bestImage = g, this.candidateSelectionImages.push(g);
  }
  tryInitCandidatePhase(t, e) {
    var a;
    if (!(((a = this.lastImage) == null ? void 0 : a.isValid) && e.isValid)) return;
    const n = {};
    n.image = t.image, n.detection = e.detection;
    const g = n;
    this.isNewImageBetter(this.lastImage.detection, g.detection) ? this.bestImage = g : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, g), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === -55 * 121 + -980 + -2545 * -3 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= di.minFrames ? t > di.minDuration : t > di.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new L("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), n = ke(1e3 / A);
    this.fpsOfAllImages.pushFixed(n);
    const g = {};
    g.width = e.image.width, g.height = e.image.height;
    const a = g, x = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), I = {};
    I.isNewDetectionValid = t.isValid, I.newInvalidInstruction = x[5414 + 2707 * -2];
    const C = this.getInstructionCode(I), r = this.collectAndEscalate(C), Q = {};
    return Q.detection = t.detection, Q.instructionCode = C, Q.isEscalated = r, Q.invalidValidators = x, Q.isInCandidateSelection = this.isInCandidateSelection, { processedImage: Q, detectionTime: A, fps: n, avgFps: ke(i0(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
class LI {
  constructor() {
    b(this, "cameraService");
    b(this, "imageCropSettings");
    b(this, "imageProcessor");
    b(this, "instructionEscalation");
    b(this, "createProtoMessage");
    b(this, "onCaptureCallback");
    b(this, "onDetectionCallback");
    b(this, "checkToInstructionCodeMap");
    b(this, "fallbackInstruction");
    b(this, "samVersion");
    b(this, "sessionToken");
    b(this, "analytics");
  }
  setCameraService(i) {
    return this.cameraService = i, this;
  }
  setImageCropSettings(i) {
    return this.imageCropSettings = i, this;
  }
  setImageProcessor(i) {
    return this.imageProcessor = i, this;
  }
  setInstructionEscalation(i) {
    return this.instructionEscalation = i, this;
  }
  setCreateProtoMessage(i) {
    return this.createProtoMessage = i, this;
  }
  setOnCaptureCallback(i) {
    return this.onCaptureCallback = i, this;
  }
  setOnDetectionCallback(i) {
    return this.onDetectionCallback = i, this;
  }
  setCheckToInstructionCodeMap(i) {
    return this.checkToInstructionCodeMap = i, this;
  }
  setFallbackInstruction(i) {
    return this.fallbackInstruction = i, this;
  }
  setSamVersion(i) {
    return this.samVersion = i, this;
  }
  setSessionToken(i) {
    return this.sessionToken = i, this;
  }
  setAnalytics(i) {
    return this.analytics = i, this;
  }
  reset() {
    return this.cameraService = void (-11403 + -3 * -3801), this.imageCropSettings = void (226 * 43 + 3155 + -12873), this.imageProcessor = void (-9647 + -3178 * 1 + 12825), this.instructionEscalation = void (3302 + -2 * 1651), this.createProtoMessage = void (5658 + 1 * 5899 + 1 * -11557), this.onCaptureCallback = void (6 * 533 + 249 * 20 + -8178), this.onDetectionCallback = void (31 * 302 + 9565 + 6309 * -3), this.checkToInstructionCodeMap = void (-8 * -843 + -8866 + 2 * 1061), this.fallbackInstruction = void (1336 + 2 * -668), this.samVersion = void (-10 * 879 + 5360 + 14 * 245), this.sessionToken = void (-8078 + 157 * 13 + 1 * 6037), this.analytics = void (-2109 + 1 * -9897 + 12006), this;
  }
  validateDependencies() {
    if (!this.cameraService) throw new L("CameraService is required");
    if (!this.imageCropSettings) throw new L("ImageCropSettings is required");
    if (!this.imageProcessor) throw new L("ImageProcessor is required");
    if (!this.createProtoMessage) throw new L("CreateProtoMessage is required");
    if (!this.onCaptureCallback) throw new L("OnCaptureCallback is required");
    if (!this.onDetectionCallback) throw new L("OnDetectionCallback is required");
    if (!this.checkToInstructionCodeMap) throw new L("CheckToInstructionCodeMap is required");
    if (!this.fallbackInstruction) throw new L("FallbackInstruction is required");
    if (!this.samVersion) throw new L("SamVersion is required");
  }
}
class Ms extends LI {
  constructor() {
    super(...arguments);
    b(this, "instructionCodeMap");
  }
  setInstructionCodeMap(t) {
    return this.instructionCodeMap = t, this;
  }
  reset() {
    return super.reset(), this.instructionCodeMap = void (-7 * 381 + 211 * -9 + 4566), this;
  }
  validateDependencies() {
    if (super.validateDependencies(), !this.instructionCodeMap) throw new L("instructionCodeMap is required");
  }
  build() {
    return this.validateDependencies(), new Ws(this.instructionCodeMap, this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
var ve, _e;
class vs extends vI {
  constructor(...t) {
    super(...t);
    P(this, ve);
    P(this, _e);
    this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Ei).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    H(this, _e, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && H(this, ve, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Vg.REQUEST_CAPTURE, w(this, _e));
  }
  async iterate() {
    const t = this.cameraService.takePhoto(), e = await this.processTakenPhoto(t), A = this.getDetectionDetails(t, e);
    if (this.onDetection(A, t.image), this.isCaptureDone(e)) {
      await this.onCaptureDone(t.image, e.detection);
      return;
    }
    await this.sleep(A.detectionTime);
  }
  isCaptureDone(t) {
    return w(this, ve) ? w(this, ve) === Ei.FIRST_FRAME ? !0 : w(this, ve) === Ei.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? L.fromCameraError(e) : L.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), H(this, ve, void (7131 * 1 + 9303 + -1 * 16434));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), n = ke((8567 * 1 + -2061 + -5506) / A);
    this.fpsOfAllImages.pushFixed(n);
    const g = {};
    g.width = t.image.width, g.height = t.image.height;
    const a = g, x = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), I = this.getInstructionCode(x[0]), C = this.collectAndEscalate(I), r = {};
    return r.detection = e.detection, r.instructionCode = I, r.invalidValidators = x, r.isInCandidateSelection = !1, r.isEscalated = C, { processedImage: r, detectionTime: A, fps: n, avgFps: ke(i0(this.fpsOfAllImages)), resolution: a };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), w(this, _e) && document.removeEventListener(Vg.REQUEST_CAPTURE, w(this, _e));
  }
}
ve = new WeakMap(), _e = new WeakMap();
class Ls extends LI {
  build() {
    return this.validateDependencies(), new vs(this.cameraService, this.imageCropSettings, this.imageProcessor, this.createProtoMessage, this.onCaptureCallback, this.onDetectionCallback, this.checkToInstructionCodeMap, this.fallbackInstruction, this.samVersion ?? null, this.instructionEscalation, this.sessionToken, this.analytics);
  }
}
class Js {
  static create(i, t) {
    const { analytics: e, cameraService: A, checkToInstructionCodeMap: n, createProtoMessage: g, fallbackInstruction: a, imageCropSettings: x, imageProcessor: I, instructionCodeMap: C, instructionEscalation: r, onCaptureCallback: Q, onDetectionCallback: c, samVersion: E, sessionToken: d } = t;
    switch (i) {
      case Zi.AUTO_CAPTURE:
        return new Ms().setCheckToInstructionCodeMap(n).setFallbackInstruction(a).setInstructionCodeMap(C).setCameraService(A).setImageCropSettings(x).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(Q).setOnDetectionCallback(c).setSamVersion(E).setInstructionEscalation(r).setSessionToken(d).setAnalytics(e).build();
      case Zi.WAIT_FOR_REQUEST:
        return new Ls().setCheckToInstructionCodeMap(n).setFallbackInstruction(a).setCameraService(A).setImageCropSettings(x).setImageProcessor(I).setCreateProtoMessage(g).setOnCaptureCallback(Q).setOnDetectionCallback(c).setSamVersion(E).setInstructionEscalation(r).setSessionToken(d).setAnalytics(e).build();
      default:
        throw new L("Invalid detection type: " + i);
    }
  }
}
function Us({ cameraResolution: o, cameraService: i, customEvent: t }) {
  const { shouldCameraMirror: e } = NB(t.CONTROL, i), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, kB(t.CAMERA_PROPS_CHANGED, A), X(() => () => {
    g0.getInstance().restart();
  }, []);
  const n = {};
  return n.shouldCameraMirror = e, n;
}
function Ys(o) {
  X(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function Os({ captureMode: o, checkToInstructionCodeMap: i, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: n, imageCropSettings: g, instructionCodeMap: a, onCapture: x, onDetection: I, sessionToken: C }) {
  Ys(() => {
    t && t.destroy();
  });
  const r = jA(!1), { appState: Q, handleAppStateChange: c, isCameraReady: E } = Ye(), { sunfish: d } = k0(), { analytics: l } = kc(), { cameraResolution: B, cameraService: h, onCameraResolutionChange: p, videoRef: G } = UB(), R = {};
  R.cameraResolution = B, R.cameraService = h, R.customEvent = A;
  const { shouldCameraMirror: M } = Us(R), N = xI(void (7644 + 3 * -2548)), z = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && d && E, JA = be((AA) => {
    c(lA.WAITING), x(AA);
  }, [x, c]), nA = be((AA, vt) => {
    p(AA.resolution), N.value = AA, I(AA, vt);
  }, [I, N, p]);
  X(() => {
    !r.current && z && (r.current = !0, c(lA.RUNNING));
  }, [z, c]), X(() => {
    if (Q !== lA.RUNNING || !z) return;
    if (!h || !t) throw new L("Cannot start detection");
    t.imageProcessor.reset();
    const AA = {};
    AA.analytics = l, AA.cameraService = h, AA.imageProcessor = t.imageProcessor, AA.fallbackInstruction = n, AA.instructionCodeMap = a, AA.checkToInstructionCodeMap = i, AA.sessionToken = C, AA.samVersion = t.samVersion, AA.createProtoMessage = e, AA.onCaptureCallback = JA, AA.onDetectionCallback = nA, AA.instructionEscalation = t.instructionEscalation, AA.imageCropSettings = g;
    const vt = Js.create(o, AA);
    return t.runDetectionLoop(vt), () => {
      t.stopDetectionLoop();
    };
  }, [Q, z, t, h, JA, nA, C, N, l, e, a, i, n, o, g]);
  const VA = {};
  return VA.videoRef = G, VA.cameraResolution = B, VA.detectionDetails = N, VA.shouldCameraMirror = M, VA;
}
const Hs = () => typeof document < "u" && document.hasFocus();
function Ks(o = {}) {
  const i = jA(o), t = jA(Hs()), [e, A] = NA(t.current);
  X(() => {
    i.current = o;
  }), X(() => {
    function g(C) {
      t.current = C, A(C);
    }
    function a() {
      Promise.resolve().then(() => {
        var C, r, Q, c;
        !t.current && ((r = (C = i.current).onFocus) == null || r.call(C), (c = (Q = i.current).onChange) == null || c.call(Q, !0)), g(!0);
      });
    }
    function x() {
      Promise.resolve().then(() => {
        var C, r, Q, c;
        t.current && ((r = (C = i.current).onBlur) == null || r.call(C), (c = (Q = i.current).onChange) == null || c.call(Q, !1)), g(!1);
      });
    }
    function I() {
      document.visibilityState === "hidden" && x();
    }
    return window.addEventListener("focus", a), window.addEventListener("blur", x), window.document.addEventListener("visibilitychange", I), () => {
      window.removeEventListener("focus", a), window.removeEventListener("blur", x), window.document.removeEventListener("visibilitychange", I);
    };
  }, []);
  const n = {};
  return n.isWindowFocused = e, n;
}
function Ps(o = {}) {
  const { appState: i } = Ye();
  Ks({ onBlur: () => {
    var t;
    i === lA.WAITING || i === Xg.DONE || (t = o.onBlur) == null || t.call(o);
  }, onFocus: () => {
    var t;
    i === lA.WAITING || i === Xg.DONE || (t = o.onFocus) == null || t.call(o);
  } });
}
const ig = at(void 0);
ig.displayName = "CommonThresholdsContext";
function Ts() {
  const o = Ge(ig);
  if (!o)
    throw new Error("Missing provider for ThresholdsContext");
  return o;
}
function qs() {
  return jn() ? ia.MOBILE : ia.DESKTOP;
}
function js({
  cameraOptionsThresholds: o,
  children: i,
  thresholdsPresetMapper: t,
  thresholdsPresets: e
}) {
  const [A, n] = NA(qs()), g = LA(() => ({ thresholds: t(o, e[A]), thresholdsPreset: A, setThresholdsPreset: n }), [o, A, n, e, t]);
  return /* @__PURE__ */ y(ig.Provider, { value: g, children: i });
}
const ln = {};
ln.min = -(1 * -7517 + 2388 + 5130), ln.max = 1;
const un = {};
un.confidence = 0, un.status = ln;
const JI = {};
JI.confidence = 0;
const UI = {};
UI.confidence = 0;
const $A = {};
$A.faceConfidence = 0.4, $A.minFaceSizeRatio = 0.16, $A.maxFaceSizeRatio = 0.2, $A.sharpnessThreshold = 0.25, $A.brightnessLowThreshold = 0.2, $A.brightnessHighThreshold = 0.85, $A.outOfBoundsThreshold = 0.05, $A.devicePitchAngleThreshold = 30, $A.mouth = un, $A.leftEye = JI, $A.rightEye = UI;
const hn = {};
hn.min = -(5930 + 2 * -1795 + -2339), hn.max = 1;
const fn = {};
fn.confidence = 0, fn.status = hn;
const YI = {};
YI.confidence = 0;
const OI = {};
OI.confidence = 0;
const Ae = {};
Ae.faceConfidence = 0.4, Ae.minFaceSizeRatio = 0.16, Ae.maxFaceSizeRatio = 0.2, Ae.sharpnessThreshold = 0.25, Ae.brightnessLowThreshold = 0.2, Ae.brightnessHighThreshold = 0.85, Ae.outOfBoundsThreshold = 0.05, Ae.devicePitchAngleThreshold = 30, Ae.mouth = fn, Ae.leftEye = YI, Ae.rightEye = OI;
const pn = {};
pn.MOBILE = $A, pn.DESKTOP = Ae;
const Zs = pn;
function Vs(o, i) {
  var t, e, A;
  return {
    faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? i.faceConfidence,
    minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? i.minFaceSizeRatio,
    maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? i.maxFaceSizeRatio,
    sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? i.sharpnessThreshold,
    brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? i.brightnessLowThreshold,
    brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? i.brightnessHighThreshold,
    outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? i.outOfBoundsThreshold,
    devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? i.devicePitchAngleThreshold,
    mouth: {
      confidence: ((t = o == null ? void 0 : o.mouth) == null ? void 0 : t.confidence) ?? i.mouth.confidence,
      status: {
        min: ((e = o == null ? void 0 : o.mouth) == null ? void 0 : e.status.min) ?? i.mouth.status.min,
        max: ((A = o == null ? void 0 : o.mouth) == null ? void 0 : A.status.max) ?? i.mouth.status.max
      }
    },
    leftEye: (o == null ? void 0 : o.leftEye) ?? {
      confidence: i.leftEye.confidence
    },
    rightEye: (o == null ? void 0 : o.rightEye) ?? {
      confidence: i.rightEye.confidence
    }
  };
}
function _s({
  cameraOptionsThresholds: o,
  children: i
}) {
  return /* @__PURE__ */ y(
    js,
    {
      cameraOptionsThresholds: o,
      thresholdsPresetMapper: Vs,
      thresholdsPresets: Zs,
      children: i
    }
  );
}
function HI() {
  return Ts();
}
const Xs = (o, i) => ({ ...o, leftEye: { ...o.leftEye, center: Ct(o.leftEye.center, i) }, rightEye: { ...o.rightEye, center: Ct(o.rightEye.center, i) }, mouth: { ...o.mouth, center: Ct(o.mouth.center, i) }, topLeft: Ct(o.topLeft, i), bottomRight: Ct(o.bottomRight, i), faceCenter: Ct(o.faceCenter, i) }), KI = (o, i) => {
  const { faceCenter: t, faceSize: e } = o, A = Yc(e, i), n = {};
  n.x = t.x, n.y = t.y - A;
  const g = {};
  g.x = t.x + A, g.y = t.y;
  const a = {};
  a.x = t.x, a.y = t.y + A;
  const x = {};
  x.x = t.x - A, x.y = t.y;
  const I = {};
  return I.top = n, I.right = g, I.bottom = a, I.left = x, Px(I);
}, zs = (o, i) => {
  const { bottomRight: t, faceCenter: e, topLeft: A } = i, n = {
    topLeft: A,
    width: t.x - A.x,
    height: t.y - A.y
  };
  _x(o, n, "rgba(255, 0, 0, 0.3)", !0), A0(o, e, "lime");
}, $s = (o, i, t) => {
  const e = KI(i, t);
  Object.values(e).map((A) => A0(o, A, "orange"));
};
function AQ({ cameraResolution: o, detectionDetails: i, isImageMirror: t }) {
  const { thresholds: e, thresholdsPreset: A } = HI(), { redfin: n } = k0(), g = jA(null);
  if (X(() => {
    if (!g.current)
      return;
    g.current.width = o.width, g.current.height = o.height, Sc(g.current);
    const B = Eo(o), h = Xx(
      o,
      e.outOfBoundsThreshold,
      B
    ), p = Jc(o);
    i.value && (zs(g.current, i.value.processedImage.detection), $s(
      g.current,
      i.value.processedImage.detection,
      o
    ), li(g.current, B, "lime"), li(g.current, h, "yellow"), li(g.current, p, "blue"), A0(g.current, i.value.processedImage.detection.leftEye.center, "cyan"), A0(g.current, i.value.processedImage.detection.rightEye.center, "cyan"), A0(g.current, i.value.processedImage.detection.mouth.center, "cyan"));
  }, [o, e, i.value]), !i.value)
    return null;
  const {
    avgFps: a,
    detectionTime: x,
    fps: I,
    processedImage: { detection: C, instructionCode: r, invalidValidators: Q, isEscalated: c },
    resolution: E,
    samVersion: d
  } = i.value, l = {
    Confidence: C.confidence,
    Brightness: C.brightness,
    Sharpness: C.sharpness,
    "Face size": C.faceSize,
    "Left eye confidence": C.leftEye.confidence,
    "Left eye status": C.leftEye.status,
    "Right eye confidence": C.rightEye.confidence,
    "Right eye status": C.rightEye.status,
    "Mouth confidence": C.mouth.confidence,
    "Mouth status": C.mouth.status,
    "Detection time": x,
    FPS: I,
    "Avg FPS": a,
    Tier: n,
    Instruction: r,
    Resolution: E,
    "Escalated instruction": c,
    "Component version": "7.3.2",
    "Thresholds preset": A
  };
  return d && (l["SAM version"] = d), Q.length > 0 && (l["Invalid validators"] = Q), /* @__PURE__ */ y(
    bc,
    {
      ref: g,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: t
    }
  );
}
function eQ({ isRounded: o, isSquare: i, ...t }) {
  return o ? /* @__PURE__ */ y("rect", { fill: "#000", ...t, rx: "2%" }) : /* @__PURE__ */ y("rect", { fill: "#000", ...t, rx: i ? "0" : "50%" });
}
function tQ(o, i) {
  const [t, e] = NA(!1), A = () => e((a) => !a), n = "" + t;
  Ft(() => {
    function a() {
      if (!o.current) return;
      const r = new MutationObserver(() => {
        A();
      }), Q = {};
      return Q.childList = !0, Q.subtree = !0, Q.attributes = !0, r.observe(o.current, Q), r;
    }
    function x() {
      var c;
      if (!((c = o.current) != null && c["parentElement"])) return;
      const r = new MutationObserver((E) => {
        E.find((l) => {
          for (const B of l.removedNodes)
            if (B !== (i == null ? void 0 : i.current) && B === o.current)
              return !0;
        }) && A(), E.forEach((l) => {
          l.addedNodes.forEach((B) => {
            var h;
            B !== (i == null ? void 0 : i.current) && ((h = B.parentElement) == null || h.removeChild(B));
          });
        });
      }), Q = {};
      return Q.childList = !0, r.observe(o.current.parentElement, Q), r;
    }
    const I = a(), C = x();
    return () => {
      C == null || C.disconnect(), I == null || I.disconnect();
    };
  });
  const g = {};
  return g.key = n, g;
}
const oQ = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function iQ({ cutOut: o, height: i, ignoreElement: t, width: e }) {
  const A = jA(null), { key: n } = tQ(A, t);
  return /* @__PURE__ */ y("div", { ref: A, style: oQ, children: /* @__PURE__ */ y("svg", { viewBox: `0 0 ${e} ${i}`, children: [
    /* @__PURE__ */ y("defs", { children: [
      /* @__PURE__ */ y("mask", { id: "placeholder", children: [
        /* @__PURE__ */ y("rect", { fill: "#fff", height: "100%", width: "100%" }),
        o
      ] }),
      /* @__PURE__ */ y(
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
            /* @__PURE__ */ y("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ y("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ y(
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
    /* @__PURE__ */ y("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, n);
}
function nQ({ fullOverlay: o, ignoreElement: i, resolution: t }) {
  const e = Uc(t), A = `${e.height * 100}%`, n = `${e.width * 100}%`, g = `${e.shiftX * 100}%`, a = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ y(
    iQ,
    {
      cutOut: o || /* @__PURE__ */ y(eQ, { height: A, width: n, x: g, y: a }),
      height: t.height,
      ignoreElement: i,
      width: t.width
    }
  );
}
function gQ({ cameraResolution: o, children: i, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = k0(), { appState: n, freemiumOverlayState: g } = Ye(), a = jA(null), x = g !== uo.HIDDEN && A !== en.Higher && o, I = g === uo.VISIBLE, C = o && n === lA.RUNNING;
  return /* @__PURE__ */ y(ie, { children: [
    x && /* @__PURE__ */ y(
      nQ,
      {
        fullOverlay: I,
        ignoreElement: a,
        resolution: o
      }
    ),
    i,
    C && /* @__PURE__ */ y("div", { ref: a, children: /* @__PURE__ */ y(
      AQ,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const aQ = (o, i) => {
  if (aB()) {
    const t = {};
    t.candidateSelectionImages = i;
    const e = t;
    g0.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function xQ(o, i) {
  const { FaceContent: t } = St.v4, e = await MI(o), A = await Ns(i), n = {};
  n.image = e, n.metadata = A;
  const g = n, a = t.verify(g);
  if (a) throw Error(a);
  const x = t.create(g), I = {};
  return I.faceContent = x, Rs(I);
}
async function IQ(o, i) {
  const t = await xQ(o, i);
  return Fs(t);
}
function rQ({ controller: o, onPhotoTakenInternal: i }) {
  const { captureMode: t, onPhotoTaken: e, sessionToken: A } = $x(), n = be(({ candidateSelectionImages: x, imageData: I, protoMessage: C, webMetadata: r }) => {
    aQ(zx.FACE, x), e(I, C);
    const Q = {};
    Q.cameraProperties = r, i == null || i(Q);
  }, [i, e]), g = be(({ fps: x, processedImage: I }, C) => {
    const r = {};
    r.code = I.instructionCode, r.isEscalated = I.isEscalated, AI(me.INSTRUCTION_CHANGED, r), o && wB(me.DETECTED_FACE_CHANGED, I.detection, o.imageProcessor.validationService.getThresholds().faceConfidence);
    const Q = {};
    Q.detection = I.detection, Q.fps = x, Q.image = C, Q.isInCandidateSelection = I.isInCandidateSelection, Q.invalidValidators = I.invalidValidators, bB(me.FACE_DETECTION, Q);
  }, [o]), a = {};
  return a.captureMode = t, a.controller = o, a.createProtoMessage = IQ, a.onCapture = n, a.onDetection = g, a.sessionToken = A, a.customEvent = me, a.fallbackInstruction = rA.FACE_NOT_PRESENT, a.instructionCodeMap = rA, a.checkToInstructionCodeMap = fc, a.imageCropSettings = Xc, Os(a);
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PI = Symbol("Comlink.proxy"), CQ = Symbol("Comlink.endpoint"), cQ = Symbol("Comlink.releaseProxy"), yi = Symbol("Comlink.finalizer"), no = Symbol("Comlink.thrown"), TI = (o) => typeof o == "object" && o !== null || typeof o == "function", BQ = {
  canHandle: (o) => TI(o) && o[PI],
  serialize(o) {
    const { port1: i, port2: t } = new MessageChannel();
    return jI(o, i), [t, [t]];
  },
  deserialize(o) {
    return o.start(), VI(o);
  }
}, sQ = {
  canHandle: (o) => TI(o) && no in o,
  serialize({ value: o }) {
    let i;
    return o instanceof Error ? i = {
      isError: !0,
      value: {
        message: o.message,
        name: o.name,
        stack: o.stack
      }
    } : i = { isError: !1, value: o }, [i, []];
  },
  deserialize(o) {
    throw o.isError ? Object.assign(new Error(o.value.message), o.value) : o.value;
  }
}, qI = /* @__PURE__ */ new Map([
  ["proxy", BQ],
  ["throw", sQ]
]);
function QQ(o, i) {
  for (const t of o)
    if (i === t || t === "*" || t instanceof RegExp && t.test(i))
      return !0;
  return !1;
}
function jI(o, i = globalThis, t = ["*"]) {
  i.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!QQ(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: n, type: g, path: a } = Object.assign({ path: [] }, A.data), x = (A.data.argumentList || []).map(je);
    let I;
    try {
      const C = a.slice(0, -1).reduce((Q, c) => Q[c], o), r = a.reduce((Q, c) => Q[c], o);
      switch (g) {
        case "GET":
          I = r;
          break;
        case "SET":
          C[a.slice(-1)[0]] = je(A.data.value), I = !0;
          break;
        case "APPLY":
          I = r.apply(C, x);
          break;
        case "CONSTRUCT":
          {
            const Q = new r(...x);
            I = fQ(Q);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: Q, port2: c } = new MessageChannel();
            jI(o, c), I = hQ(Q, [Q]);
          }
          break;
        case "RELEASE":
          I = void 0;
          break;
        default:
          return;
      }
    } catch (C) {
      I = { value: C, [no]: 0 };
    }
    Promise.resolve(I).catch((C) => ({ value: C, [no]: 0 })).then((C) => {
      const [r, Q] = Jo(C);
      i.postMessage(Object.assign(Object.assign({}, r), { id: n }), Q), g === "RELEASE" && (i.removeEventListener("message", e), ZI(i), yi in o && typeof o[yi] == "function" && o[yi]());
    }).catch((C) => {
      const [r, Q] = Jo({
        value: new TypeError("Unserializable return value"),
        [no]: 0
      });
      i.postMessage(Object.assign(Object.assign({}, r), { id: n }), Q);
    });
  }), i.start && i.start();
}
function EQ(o) {
  return o.constructor.name === "MessagePort";
}
function ZI(o) {
  EQ(o) && o.close();
}
function VI(o, i) {
  return yn(o, [], i);
}
function Y0(o) {
  if (o)
    throw new Error("Proxy has been released and is not useable");
}
function _I(o) {
  return dt(o, {
    type: "RELEASE"
  }).then(() => {
    ZI(o);
  });
}
const vo = /* @__PURE__ */ new WeakMap(), Lo = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const i = (vo.get(o) || 0) - 1;
  vo.set(o, i), i === 0 && _I(o);
});
function dQ(o, i) {
  const t = (vo.get(i) || 0) + 1;
  vo.set(i, t), Lo && Lo.register(o, i, o);
}
function lQ(o) {
  Lo && Lo.unregister(o);
}
function yn(o, i = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(n, g) {
      if (Y0(e), g === cQ)
        return () => {
          lQ(A), _I(o), e = !0;
        };
      if (g === "then") {
        if (i.length === 0)
          return { then: () => A };
        const a = dt(o, {
          type: "GET",
          path: i.map((x) => x.toString())
        }).then(je);
        return a.then.bind(a);
      }
      return yn(o, [...i, g]);
    },
    set(n, g, a) {
      Y0(e);
      const [x, I] = Jo(a);
      return dt(o, {
        type: "SET",
        path: [...i, g].map((C) => C.toString()),
        value: x
      }, I).then(je);
    },
    apply(n, g, a) {
      Y0(e);
      const x = i[i.length - 1];
      if (x === CQ)
        return dt(o, {
          type: "ENDPOINT"
        }).then(je);
      if (x === "bind")
        return yn(o, i.slice(0, -1));
      const [I, C] = pa(a);
      return dt(o, {
        type: "APPLY",
        path: i.map((r) => r.toString()),
        argumentList: I
      }, C).then(je);
    },
    construct(n, g) {
      Y0(e);
      const [a, x] = pa(g);
      return dt(o, {
        type: "CONSTRUCT",
        path: i.map((I) => I.toString()),
        argumentList: a
      }, x).then(je);
    }
  });
  return dQ(A, o), A;
}
function uQ(o) {
  return Array.prototype.concat.apply([], o);
}
function pa(o) {
  const i = o.map(Jo);
  return [i.map((t) => t[0]), uQ(i.map((t) => t[1]))];
}
const XI = /* @__PURE__ */ new WeakMap();
function hQ(o, i) {
  return XI.set(o, i), o;
}
function fQ(o) {
  return Object.assign(o, { [PI]: !0 });
}
function Jo(o) {
  for (const [i, t] of qI)
    if (t.canHandle(o)) {
      const [e, A] = t.serialize(o);
      return [
        {
          type: "HANDLER",
          name: i,
          value: e
        },
        A
      ];
    }
  return [
    {
      type: "RAW",
      value: o
    },
    XI.get(o) || []
  ];
}
function je(o) {
  switch (o.type) {
    case "HANDLER":
      return qI.get(o.name).deserialize(o.value);
    case "RAW":
      return o.value;
  }
}
function dt(o, i, t) {
  return new Promise((e) => {
    const A = pQ();
    o.addEventListener("message", function n(g) {
      !g.data || !g.data.id || g.data.id !== A || (o.removeEventListener("message", n), e(g.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, i), t);
  });
}
function pQ() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const yQ = "SAM v1.44.6 for idcards";
class DQ {
  constructor(i, t, e, A, n) {
    b(this, "isDetectorInitialized", !1);
    b(this, "samVersion", null);
    b(this, "detection");
    this.imageProcessor = i, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.validationService = A, this.instructionEscalation = n;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(i) {
    await this.detector.initSamModule(location.href, i);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(i) {
    if (!i || !this.areVersionsCompatible(i))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new L("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = i;
  }
  runDetectionLoop(i) {
    this.detection && this.detection.stop(), this.detection = i, this.detection.run();
  }
  stopDetectionLoop() {
    var i, t;
    (i = this.detection) == null || i.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset();
  }
  setThresholds(i) {
    this.imageProcessor.validationService.thresholds = i;
  }
  areVersionsCompatible(i) {
    return i === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(i, t) {
    return "" + t.replace(Kx, "") + i;
  }
}
class mQ {
  constructor() {
    b(this, "imageProcessor");
    b(this, "assetsDirectoryPath");
    b(this, "instructionEscalation");
    b(this, "compatibleSamVersion");
    b(this, "validationService");
    b(this, "detector");
  }
  setImageProcessor(i) {
    return this.imageProcessor = i, this;
  }
  setAssetsDirectoryPath(i) {
    return this.assetsDirectoryPath = i, this;
  }
  setCompatibleSamVersion(i) {
    return this.compatibleSamVersion = i, this;
  }
  setInstructionEscalation(i) {
    return this.instructionEscalation = i, this;
  }
  setValidationService(i) {
    return this.validationService = i, this;
  }
  setDetector(i) {
    return this.detector = i, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new L("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new L("AssetsDirectoryPath is required");
    if (!this.detector) throw new L("Detector is required");
    if (!this.compatibleSamVersion) throw new L("CompatibleSamVersion is required");
    if (!this.validationService) throw new L("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void (-1 * 677 + 1 * 1222 + 545 * -1), this.assetsDirectoryPath = void (9063 + 4 * -1779 + 1947 * -1), this.instructionEscalation = void (128 + -16 * 8), this.compatibleSamVersion = void (771 * 1 + 423 + 2 * -597), this.detector = void (3 * -1379 + 4438 + 43 * -7), this.validationService = void (-9589 * 1 + 3020 + 6569), this;
  }
}
class wQ {
  constructor() {
    b(this, "detectionRecord", []);
    b(this, "imagesWithTimestampForDuplicateDetection", new Zn(Vc));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: i, timestamp: t }) {
    const e = i.length / AB, A = e / (-541 * 10 + -9484 + -133 * -112), n = i.length / (-5 * -1123 + 27 * -313 + 2838), g = await Ss(i.slice(n - A, n + A)), a = {};
    a.imageHash = g, a.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(a);
  }
  optimizeImageBeforeDetection(i) {
    return { data: rB(i), resolution: { width: i.width, height: i.height } };
  }
  async processDetectedObject({ detectedObject: i, image: t, imageData: e, timestamp: A }) {
    const n = Px(i), g = this.validationService.validateDetectedObject(n, t);
    if (g.result.get("isPresent")) {
      const a = {};
      a.image = e, a.timestamp = A, this.collectImagesForDuplicateDetection(a);
    }
    return this.detectionRecord.push(i), { detection: n, validationResult: g.result, isValid: g.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class bQ {
  constructor() {
    b(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new L("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class ng extends DQ {
  constructor(t, e, A, n, g, a) {
    super(A, n, g, e, a);
    b(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], AI(me.INSTRUCTION_CHANGED, t, Rc);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
}
b(ng, "_instance");
class kQ extends mQ {
  build() {
    return this.validateDependencies(), new ng(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
const GQ = "/dot-assets/face/dot-CJjgvBNx.js";
class SQ extends wQ {
  constructor(t, e) {
    super();
    b(this, "className", "FaceImageProcessor");
    b(this, "detector");
    b(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Eo(t), A = Vx(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t), n = {};
    n.height = t.height, n.width = t.width;
    let g = await this.detector.detect(A.data, A.resolution, n);
    g = Xs(g, Eo(t));
    const a = {};
    return a.detectedObject = g, a.image = t, a.imageData = A.data, a.timestamp = e, this.processDetectedObject(a);
  }
}
var ft, Xe, ze;
class NQ {
  constructor(i) {
    P(this, ft);
    P(this, Xe);
    P(this, ze);
    H(this, ft, i), H(this, Xe, /* @__PURE__ */ new Map());
  }
  validate() {
    w(this, ft).forEach((i) => {
      w(this, Xe).set(i.name, i.evaluate());
    }), H(this, ze, void (-8264 + 98 * 83 + -2 * -65));
  }
  isValid() {
    return w(this, ze) === void 0 && H(this, ze, Array.from(w(this, Xe).values()).every((i) => i)), w(this, ze);
  }
  get result() {
    return w(this, Xe);
  }
  get validators() {
    return w(this, ft);
  }
}
ft = new WeakMap(), Xe = new WeakMap(), ze = new WeakMap();
var C0, $e;
class ZA {
  constructor(i, t) {
    P(this, C0);
    P(this, $e);
    H(this, C0, i), H(this, $e, t);
  }
  get threshold() {
    return w(this, $e);
  }
  get name() {
    return w(this, C0);
  }
  isValueBelowThreshold(i) {
    return i < w(this, $e);
  }
  isValueAboveThreshold(i) {
    return i > w(this, $e);
  }
}
C0 = new WeakMap(), $e = new WeakMap();
const FQ = "isNotDim";
var c0;
class RQ extends ZA {
  constructor(t, e) {
    super(FQ, t);
    P(this, c0);
    H(this, c0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, c0));
  }
}
c0 = new WeakMap();
const WQ = "isNotSmall";
var B0;
class MQ extends ZA {
  constructor(t, e) {
    super(WQ, t);
    P(this, B0);
    H(this, B0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, B0));
  }
}
B0 = new WeakMap();
const vQ = "isNotBright";
var s0;
class LQ extends ZA {
  constructor(t, e) {
    super(vQ, t);
    P(this, s0);
    H(this, s0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, s0));
  }
}
s0 = new WeakMap();
const JQ = "isPresent";
var Q0;
class UQ extends ZA {
  constructor(t, e) {
    super(JQ, t);
    P(this, Q0);
    H(this, Q0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, Q0));
  }
}
Q0 = new WeakMap();
const YQ = "isSharp";
var E0;
class OQ extends ZA {
  constructor(t, e) {
    super(YQ, t);
    P(this, E0);
    H(this, E0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, E0));
  }
}
E0 = new WeakMap();
const HQ = "isLeftEyePresent";
var d0;
class KQ extends ZA {
  constructor(t, e) {
    super(HQ, t);
    P(this, d0);
    H(this, d0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, d0));
  }
}
d0 = new WeakMap();
const PQ = "isMouthPresent";
var l0;
class TQ extends ZA {
  constructor(t, e) {
    super(PQ, t);
    P(this, l0);
    H(this, l0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, l0));
  }
}
l0 = new WeakMap();
const qQ = "isMouthScoreNotTooLow";
var u0;
class jQ extends ZA {
  constructor(t, e) {
    super(qQ, t);
    P(this, u0);
    H(this, u0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, u0));
  }
}
u0 = new WeakMap();
const ZQ = "isMouthScoreNotTooHigh";
var h0;
class VQ extends ZA {
  constructor(t, e) {
    super(ZQ, t);
    P(this, h0);
    H(this, h0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, h0));
  }
}
h0 = new WeakMap();
const _Q = "isNotLarge";
var f0;
class XQ extends ZA {
  constructor(t, e) {
    super(_Q, t);
    P(this, f0);
    H(this, f0, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(w(this, f0));
  }
}
f0 = new WeakMap();
const zQ = "isNotPitched";
var p0;
const xg = class xg extends ZA {
  constructor(t, e) {
    super(zQ, xg.calculatePitchAngleAccelerationThreshold(t));
    P(this, p0);
    H(this, p0, e);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return jc * Math.sin(t * (Math.PI / 180));
  }
  evaluate() {
    const { z: t } = w(this, p0) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
p0 = new WeakMap();
let Dn = xg;
const $Q = "isRightEyePresent";
var y0;
class AE extends ZA {
  constructor(t, e) {
    super($Q, t);
    P(this, y0);
    H(this, y0, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(w(this, y0));
  }
}
y0 = new WeakMap();
const eE = "isNotOutOfBounds";
var D0, At;
class tE extends ZA {
  constructor(t, e, A) {
    super(eE, t);
    P(this, D0);
    P(this, At);
    H(this, D0, e), H(this, At, A);
  }
  evaluate() {
    const t = Xx(w(this, At), this.threshold, Eo(w(this, At))), e = KI(w(this, D0), w(this, At));
    return sB(e, t);
  }
}
D0 = new WeakMap(), At = new WeakMap();
class oE {
  static getFaceValidationInstance(i, t, e, A) {
    return new NQ([new UQ(i.faceConfidence, t.confidence), new KQ(i.leftEye.confidence, t.leftEye.confidence), new AE(i.rightEye.confidence, t.rightEye.confidence), new MQ(i.minFaceSizeRatio, t.faceSize), new XQ(i.maxFaceSizeRatio, t.faceSize), new OQ(i.sharpnessThreshold, t.sharpness), new RQ(i.brightnessLowThreshold, t.brightness), new LQ(i.brightnessHighThreshold, t.brightness), new tE(i.outOfBoundsThreshold, t, e), new Dn(i.devicePitchAngleThreshold, A), new TQ(i.mouth.confidence, t.mouth.confidence), new VQ(i.mouth.status.max, t.mouth.status), new jQ(i.mouth.status.min, t.mouth.status)]);
  }
}
class iE extends bQ {
  constructor() {
    super(...arguments);
    b(this, "className", "FaceValidationService");
    b(this, "acceleration", null);
  }
  validateDetectedObject(t, e) {
    const A = oE.getFaceValidationInstance(this.getThresholds(), t, e, this.acceleration);
    return A.validate(), A;
  }
}
function nE() {
  const { handleError: o } = Ye(), { acceleration: i } = WB(), { assetsDirectoryPath: t } = $x(), { thresholds: e } = HI(), [A, n] = NA();
  X(() => {
    (async () => {
      const x = ng.getWorkerPath(GQ, t), I = {};
      I.type = "module";
      const C = new Worker(new URL(x, import.meta.url), I), r = VI(C), Q = await new r(), c = new iE(), E = new SQ(Q, c), d = new kQ().setDetector(Q).setValidationService(c).setImageProcessor(E).setCompatibleSamVersion(yQ).setAssetsDirectoryPath(t).build();
      try {
        await d.init(), n(d);
      } catch (l) {
        if (l instanceof Error) {
          o(L.fromError(l));
          return;
        }
      }
    })();
  }, [o, t]), X(() => {
    A && A.setThresholds(e);
  }, [A, e]), X(() => {
    A && A.setAcceleration(i);
  }, [i, A]);
  const g = {};
  return g.controller = A, g;
}
function gE() {
  const { isCameraReady: o } = Ye(), { sunfish: i } = k0(), { controller: t } = nE(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: n, videoRef: g } = rQ({
    controller: t
  });
  return /* @__PURE__ */ y(ie, { children: /* @__PURE__ */ y(
    gQ,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: n,
      children: /* @__PURE__ */ y(
        Ec,
        {
          ref: g,
          $isImageMirror: n,
          $isVisible: i && o,
          autoPlay: !0,
          id: Wc,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
function aE({ ...o }) {
  const { handleAppStateChange: i, setIsCameraReady: t } = Ye();
  return Ps({
    onBlur: () => {
      t(!1), i(lA.LOADING);
    },
    onFocus: () => {
      t(!0), i(lA.RUNNING);
    }
  }), /* @__PURE__ */ y(pB, { cameraOptions: o, children: /* @__PURE__ */ y(_s, { cameraOptionsThresholds: o.thresholds, children: /* @__PURE__ */ y(gE, {}) }) });
}
function xE({ children: o, ...i }) {
  const t = i.cameraFacing ?? qn.FRONT;
  return /* @__PURE__ */ y($B, { cameraFacing: t, children: o });
}
function IE({ initAppState: o, onError: i }) {
  const [t, e] = NA(o), [A, n] = NA(), [g, a] = NA(!1), x = jA(i);
  X(() => {
    x.current = i;
  }, [i]);
  const I = {};
  return I.appState = t, I.setAppState = e, I.error = A, I.setError = n, I.isCameraReady = g, I.setIsCameraReady = a, I.onErrorRef = x, I;
}
function rE({
  onError: o
}) {
  const { appState: i, error: t, isCameraReady: e, onErrorRef: A, setAppState: n, setError: g, setIsCameraReady: a } = IE({
    initAppState: lA.LOADING,
    onError: o
  }), x = as(i), I = be(
    (r) => {
      na(me.STATE_CHANGED, { appState: lA.ERROR, error: r }), a(!1), A.current(r), g(r), n(lA.ERROR);
    },
    [a, A, g, n]
  ), C = be(
    (r) => {
      na(me.STATE_CHANGED, { appState: r }), n(r);
    },
    [n]
  );
  return {
    appState: i,
    freemiumOverlayState: x,
    isCameraReady: e,
    setIsCameraReady: a,
    handleAppStateChange: C,
    handleError: I,
    error: t
  };
}
var gg = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))(gg || {});
class CE {
  constructor() {
    b(this, "appKey", "");
    b(this, "deviceId", "");
  }
  async countlyFetch(i) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, n = "https://innovatrics.count.ly/i?", g = {};
    g.app_key = this.appKey, g.device_id = this.deviceId;
    const a = J0(g);
    try {
      await fetch("" + n + a + "&" + i, A);
    } catch (x) {
      console.error("Countly Error", x);
    }
  }
  async init(i, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = i;
    const e = { _app_version: Tx() }, A = { organization: qx(window.location.href) }, n = J0({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(n);
  }
  async endSession() {
    const i = {};
    i.end_session = "1";
    const t = J0(i);
    await this.countlyFetch(t);
  }
  async sendEvent(i, t, e) {
    const A = {};
    A.key = i, A.count = 1, A.dur = e, A.segmentation = t;
    const n = [A], g = J0({ events: JSON.stringify(n) });
    await this.countlyFetch(g);
  }
  async sendAutoCaptureEvent(i, t) {
    await this.sendEvent(gg.AUTO_CAPTURE, i, t);
  }
}
const Ot = new CE();
class cE {
  constructor() {
    b(this, "countly", Ot);
  }
  createSegmentation(i) {
    return { appVersion: Tx(), ...i };
  }
  init(i) {
    if (oB()) return;
    const t = ts();
    Ot.init(t, i);
  }
  endSession() {
    Ot.endSession();
  }
  walleye(i, t) {
    const e = {};
    e.nocturne = i, e.customer = t;
    const A = this.createSegmentation(e);
    Ot.sendAutoCaptureEvent(A);
  }
  trackEscalated(i) {
    const t = {};
    t.instructionCode = i;
    const e = this.createSegmentation(t);
    Ot.sendEvent(gg.ESCALATION_TRIGGER, e);
  }
}
class BE extends cE {
  trackCaptureProcess({ averageFps: i, optCheck: t, captureProcessDurationInMs: e, detection: A, deviceName: n, facingMode: g, imageResolution: a, instructionSet: x, isSystemStable: I, performanceCheckup: C }) {
    if (!A) return;
    const r = ns(e), Q = this.createSegmentation({ faceSize: aa(A.faceSize), confidence: aa(A.confidence), camera: os(n, g), imageResolution: a.width + "x" + a.height, averageFps: gs(i), captureTime: is(r), instructionSet: x, optCheck: t, isSystemStable: I, performanceCheckup: C });
    this.countly.sendAutoCaptureEvent(Q, r);
  }
}
const sE = new BE();
let Y;
const ye = new Array(7 * -760 + -136 * -19 + 2864).fill(void 0);
ye.push(void 0, null, !0, !1);
function mn(o) {
  return ye[o];
}
let Ee = -7607 * -1 + -2922 + -4685, Zt = null;
function go() {
  return (Zt === null || Zt.byteLength === -1693 + -1693 * -1) && (Zt = new Uint8Array(Y.memory.buffer)), Zt;
}
const ao = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, QE = typeof ao.encodeInto == "function" ? function(o, i) {
  return ao.encodeInto(o, i);
} : function(o, i) {
  const t = ao.encode(o);
  i.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function x0(o, i, t) {
  if (t === void 0) {
    const a = ao.encode(o), x = i(a.length, 1057 + 1 * 1395 + -57 * 43) >>> 5574 * -1 + -3487 + 9061;
    return go().subarray(x, x + a.length).set(a), Ee = a.length, x;
  }
  let e = o.length, A = i(e, 4 * -907 + -6229 + 159 * 62) >>> 1 * -443 + -4 * 519 + 2519;
  const n = go();
  let g = -65 * 12 + -5336 + 4 * 1529;
  for (; g < e; g++) {
    const a = o.charCodeAt(g);
    if (a > -3407 + 2 * 4104 + -4674) break;
    n[A + g] = a;
  }
  if (g !== e) {
    g !== 0 && (o = o.slice(g)), A = t(A, e, e = g + o.length * 3, 1530 * -6 + -5116 + 14297) >>> 1 * 6543 + 1876 * 4 + -14047 * 1;
    const a = go().subarray(A + g, A + e), x = QE(o, a);
    g += x.written, A = t(A, e, g, -1953 + -2343 * -1 + -389) >>> -134 * 24 + -8549 + 1 * 11765;
  }
  return Ee = g, A;
}
function zI(o) {
  return o == null;
}
let Vt = null;
function Be() {
  return (Vt === null || Vt.byteLength === -2766 + -1 * -9753 + -3 * 2329) && (Vt = new Int32Array(Y.memory.buffer)), Vt;
}
let t0 = ye.length;
function EE(o) {
  o < 132 || (ye[o] = t0, t0 = o);
}
function $I(o) {
  const i = mn(o);
  return EE(o), i;
}
const wn = {};
wn.ignoreBOM = !0, wn.fatal = !0;
const Ar = typeof TextDecoder < "u" ? new TextDecoder("utf-8", wn) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && Ar.decode();
function Uo(o, i) {
  return o = o >>> -1 * -2309 + -9349 + 352 * 20, Ar.decode(go().subarray(o, o + i));
}
function bn(o) {
  t0 === ye.length && ye.push(ye.length + (5568 + 32 * -16 + -5055));
  const i = t0;
  return t0 = ye[i], ye[i] = o, i;
}
let _t = null;
function er() {
  return (_t === null || _t.byteLength === 0) && (_t = new Uint32Array(Y.memory.buffer)), _t;
}
function ya(o, i) {
  const t = i(o.length * 4, 4) >>> 0, e = er();
  for (let A = 6967 * 1 + 2099 * -3 + 134 * -5; A < o.length; A++)
    e[t / (-11 * -694 + -2 * -4831 + -17292) + A] = bn(o[A]);
  return Ee = o.length, t;
}
function Da(o, i) {
  o = o >>> 3903 * -1 + -3077 + 1 * 6980;
  const t = er(), e = t.subarray(o / (-5 * -1061 + -561 * 1 + -4740), o / (-461 * 14 + -2174 + 8632) + i), A = [];
  for (let n = 4550 + 130 * -35; n < e.length; n++)
    A.push($I(e[n]));
  return A;
}
function dE(o, i) {
  const t = x0(o, Y.__wbindgen_malloc, Y.__wbindgen_realloc), e = Ee, A = x0(i, Y.__wbindgen_malloc, Y.__wbindgen_realloc), n = Ee, g = Y.is_mobile_supported(t, e, A, n);
  return ag.__wrap(g);
}
const kn = {};
kn.register = () => {
}, kn.unregister = () => {
};
const ma = typeof FinalizationRegistry > "u" ? kn : new FinalizationRegistry((o) => Y.__wbg_licensevalidationresult_free(o >>> -361 * 7 + -4243 + 10 * 677));
class ag {
  static __wrap(i) {
    i = i >>> -1 * 4090 + -7496 + -1931 * -6;
    const t = Object.create(ag.prototype);
    return t.__wbg_ptr = i, ma.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const i = this.__wbg_ptr;
    return this.__wbg_ptr = -1528 + 4 * 382, ma.unregister(this), i;
  }
  free() {
    const i = this.__destroy_into_raw();
    Y.__wbg_licensevalidationresult_free(i);
  }
  constructor(i, t, e, A, n) {
    var g = zI(t) ? 0 : x0(t, Y.__wbindgen_malloc, Y.__wbindgen_realloc), a = Ee;
    const x = ya(e, Y.__wbindgen_malloc), I = Ee, C = ya(A, Y.__wbindgen_malloc), r = Ee, Q = x0(n, Y.__wbindgen_malloc, Y.__wbindgen_realloc), c = Ee, E = Y.licensevalidationresult_new(i, g, a, x, I, C, r, Q, c);
    return this.__wbg_ptr = E >>> 0, this;
  }
  get is_valid() {
    return Y.licensevalidationresult_is_valid(this.__wbg_ptr) !== 7 * -540 + -4877 + 8657;
  }
  get features_json() {
    try {
      const e = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var i = Be()[e / (-4766 * 1 + -81 * -20 + 30 * 105) + (-11621 + -1 * -11621)], t = Be()[e / (3005 + 50 * 83 + -7151) + 1];
      let A;
      return i !== 10621 + 559 * -19 && (A = Uo(i, t).slice(), Y.__wbindgen_free(i, t * (-5 * 643 + 389 * -11 + 5 * 1499), -6275 + -1 * 9931 + 16207)), A;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(-2 * -1990 + -392 + -3572);
    }
  }
  get errors() {
    try {
      const A = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_errors(A, this.__wbg_ptr);
      var i = Be()[A / (-3817 * 2 + 9749 * 1 + -2111) + (6929 + -8 * -1126 + -15937)], t = Be()[A / (1465 + 412 * -8 + 5 * 367) + (8277 + -4 * 2069)], e = Da(i, t).slice();
      return Y.__wbindgen_free(i, t * (2997 + -5003 * -1 + -7996), 9732 + 175 * 2 + -10078), e;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get warnings() {
    try {
      const A = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var i = Be()[A / (95 + -1 * 91) + (-1 * 378 + -324 + -78 * -9)], t = Be()[A / (1735 + 1 * -634 + -1097) + (-2684 + -2 * -1448 + -211 * 1)], e = Da(i, t).slice();
      return Y.__wbindgen_free(i, t * (21 * 80 + 364 + -2040), -9954 + 431 * -17 + 3457 * 5), e;
    } finally {
      Y.__wbindgen_add_to_stack_pointer(880 * -11 + 712 + -1123 * -8);
    }
  }
  get customer() {
    let i, t;
    try {
      const n = Y.__wbindgen_add_to_stack_pointer(-16);
      Y.licensevalidationresult_customer(n, this.__wbg_ptr);
      var e = Be()[n / (-1 * -6013 + -1047 + -4962) + (-1 * -9501 + -4466 * -2 + -1 * 18433)], A = Be()[n / 4 + (3355 * -2 + -117 * -83 + -3e3)];
      return i = e, t = A, Uo(e, A);
    } finally {
      Y.__wbindgen_add_to_stack_pointer(16), Y.__wbindgen_free(i, t, -378 * 15 + -873 * -11 + -3932);
    }
  }
}
async function lE(o, i) {
  if (typeof Response == "function" && o instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(o, i);
    } catch (e) {
      if (o.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await o.arrayBuffer();
    return await WebAssembly.instantiate(t, i);
  } else {
    const t = await WebAssembly.instantiate(o, i);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = o, e;
    } else return t;
  }
}
function uE() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(i, t) {
    const e = mn(t), A = typeof e == "string" ? e : void 0;
    var n = zI(A) ? -588 * -1 + 798 + -14 * 99 : x0(A, Y.__wbindgen_malloc, Y.__wbindgen_realloc), g = Ee;
    Be()[i / 4 + (-13 * -637 + 4403 + -12683)] = g, Be()[i / (-8891 + -1006 * -5 + 3865 * 1) + (5805 + -2 * 2318 + -1169)] = n;
  }, o.wbg.__wbindgen_object_drop_ref = function(i) {
    $I(i);
  }, o.wbg.__wbindgen_string_new = function(i, t) {
    const e = Uo(i, t);
    return bn(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return bn(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(i) {
    return mn(i).getTime();
  }, o.wbg.__wbindgen_throw = function(i, t) {
    throw new Error(Uo(i, t));
  }, o;
}
function hE(o, i) {
  return Y = o.exports, tr.__wbindgen_wasm_module = i, Vt = null, _t = null, Zt = null, Y;
}
async function tr(o) {
  if (Y !== void 0) return Y;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEoAhQgACACQRhqEC8MBAsgAkEkakIANwIAIAJBATYCHCACQaiOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAwsgAkEkakIANwIAIAJBATYCHCACQcCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAgsgAkEkakIANwIAIAJBATYCHCACQeCOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8MAQsgAkEkakIANwIAIAJBATYCHCACQfyOwQA2AhggAkGMrMIANgIgIAEoAhQgAUEYaigCACACQRhqEC8LIAJBMGokAAu2CQEQfyMAQeAAayIDJAACQAJAAkACQAJAIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0DIAJBADsBkgMgAkEANgKIAiACQYwCaiEKIANB0ABqIQggA0HIAGpBBHIhBQNAIAEvAZIDIAZLBEAgA0E8aiABIAdqIgRBjAJqKAIAIARBlAJqKAIAENYBAkACQAJAAkACQAJAAkAgASAJaiIELQAAQQFrDgUBAgMEBQALIANBADoASAwFCyADQQE6AEggAyAEQQFqLQAAOgBJDAQLIAhBCGogBEEQaikDADcDACAIIARBCGopAwA3AwAgA0ECOgBIDAMLIAUgBEEEaigCACAEQQxqKAIAENYBIANBAzoASAwCCyAFIARBBGoQOCADQQQ6AEgMAQsgA0EgaiAEQQRqEOcBIAVBCGogA0EoaigCADYCACAFIAMpAyA3AgAgA0EFOgBICyACLwGSAyIEQQtPDQMgAiAEQQFqOwGSAyAKIARBDGxqIgsgAykCPDcCACALQQhqIANBxABqKAIANgIAIAIgBEEYbGoiBCADKQNINwMAIARBCGogCCkDADcDACAEQRBqIANB2ABqKQMANwMAIAZBAWohBiAHQQxqIQcgCUEYaiEJDAELCyAAIAY2AgggAEEANgIEIAAgAjYCAAwFCyADQQhqIAEoApgDIAJBAWsiDxAXIAMoAggiAkUNA0G4scIALQAAGiADKAIMIQdByAMQCiIERQ0CIAQgAjYCmAMgBEEAOwGSAyAEQQA2AogCIAJBADsBkAMgAiAENgKIAiADIAQ2AgggAyAHQQFqIhA2AgwgA0HIAGpBAnIhCCADQSZqIQ4gA0EiaiEFQZwDIQcgAygCECEKA0AgDCABLwGSA08NAiADQRRqIAEgC2oiAkGMAmooAgAgAkGUAmooAgAQ1gFBACEGAkACQAJAAkACQAJAIAEgCWoiAi0AAEEBaw4FAAECAwQFC0EBIQYgAkEBai0AACERDAQLIA5BCGogAkEQaikBADcBACAOIAJBCGopAQA3AQBBAiEGDAMLIANByABqIAJBBGooAgAgAkEMaigCABDWASAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAEEDIQYMAgtBBCEGIANByABqIAJBBGoQOCAFQQhqIANB0ABqKAIANgEAIAUgAykCSDcBAAwBCyADQcgAaiACQQRqEOcBIAVBCGogA0HQAGooAgA2AQAgBSADKQNINwEAQQUhBgsgA0E8aiABIAdqKAIAIA8QFyADKAJEIRIgAygCQCENIAMoAjwhAiAIIAMpASA3AQAgCEEIaiADQShqKQEANwEAIAhBDmogA0EuaikBADcBACADIBE6AEkgAyAGOgBIIAJFBEBBuLHCAC0AABpBmAMQCiICRQ0EIAJBADsBkgMgAkEANgKIAkEAIQ0LIAQgECADQRRqIANByABqIAIgDRCLASAMQQFqIQwgCUEYaiEJIAtBDGohCyAHQQRqIQcgCiASakEBaiEKDAALAAtB0OfBAEEgQczowQAQ3gEACyAAIAMpAgg3AgAgAEEIaiAKNgIADAILAAtBgJfCAEErQfiDwAAQ3gEACyADQeAAaiQAC4wIAgl/A34jAEHwAWsiBiQAIAZBAjYCaCAGQgQ3AmAgBkEANgKQASAGQQA2ArgBIAZBkAFqIgQgBkHgAGoQMyAGQcABaiIFIARBMBC+AhogBUEEciEIIAZByAFqIQkgBkHoAWohCiAGKALIASEDA0AgCSEEIAYoAugBIgchBSAHQQVJIgtFBEAgBigCxAEhBSADIQQLAkAgBUUNACAFQQN0IARqQQhrKQMAQgBSDQAgCiEFIAtFBEAgBigCxAEhByAIIQULIAdFDQEgBSAHQQFrNgIADAELCyAGQZABaiAGQcABakEwEL4CGiABIAYgAUEwEL4CIgNBkAFqQTAQvgIhBiADQTBqIANBMBC+AhogAkEGdiEFAkAgAkE/TQRAIANB4ABqIAMQrAEMAQsgA0EwaiEBIAMoAjBBAkYEQCADKAI0IQELIAEoAigiBEEFTwRAIAEoAgQhBAsgA0EANgLAASADQQA2AugBIANBwAFqIgEgBCAFakEBahCtASADQZABaiIEIAFBMBC+AhogBCAFEEkgA0EwaiEBIANBkAFqIgkCfyADKAIwQQJGBEAgAygCNCEBCyABKAIoIgRBBE0EQCABQQhqDAELIAEoAgQhBCABKAIICyIBIAEgBEEDdGoQQyADQeAAaiAJQTAQvgIaCwJAIAJBP3EiCUUNACADKAKIASIBQQRNBH8gA0HoAGoFIAMoAmQhASADKAJoCyEEIAEgBU8EQCABIAVGDQEgA0GIAWohCCABQQN0IAVBA3QiBWshASAEIAVqIQdBACACa0E/ca0hDSAJrSEOA0AgByAMIAcpAwAiDCAOhoQ3AwAgB0EIaiEHIAwgDYghDCABQQhrIgENAAsgDFANAUEEIQECfyADKAKIASIFQQRNBEAgBSEHIANB6ABqDAELIANB4ABqQQRyIQggAygCZCEHIAUhASADKAJoCyEEIAEgB0YEQCADQeAAaiIBEKABIAFBBHIhCCADKAJkIQcgAygCaCEECyAEIAdBA3RqIAw3AwAgCCAIKAIAQQFqNgIADAELIAUgAUGQ/cAAELkBAAsgA0HAAWoiASADQeAAakEwEL4CGiABQQRyIQUgA0HIAWohCCADQegBaiEJIAMoAsgBIQoDQCAIIQQgAygC6AEiByEBIAdBBUkiC0UEQCAKIQQgAygCxAEhAQsCQCABRQ0AIAFBA3QgBGpBCGspAwBCAFINACAJIQEgC0UEQCADKALEASEHIAUhAQsgB0UNASABIAdBAWs2AgAMAQsLIANBkAFqIANBwAFqQTAQvgIaAkAgAkHAAEkNACADKAIwQQJGDQAgA0EwahCPAgsgBhCPAiAAIAYgA0GQAWpBMBC+AkE4EL4CGiADQfABaiQAC5UIAgp/AX4jAEHAAWsiBCQAIARBAjYCOCAEQgQ3AjAgBEEANgJgIARBADYCiAEgBEHgAGoiAiAEQTBqEDMgBEGQAWoiAyACQTAQvgIaIANBBHIhBiAEQZgBaiEHIARBuAFqIQggBCgCmAEhCQNAIAchAyAEKAK4ASIFIQIgBUEFSSIBRQRAIAQoApQBIQIgCSEDCwJAIAJFDQAgAkEDdCADakEIaykDAEIAUg0AIAghAiABRQRAIAQoApQBIQUgBiECCyAFRQ0BIAIgBUEBazYCAAwBCwsgBEHgAGogBEGQAWpBMBC+AhogACAEIABBMBC+AiIBQeAAakEwEL4CIQogASECAkACQAJAAn8gASgCACIEQQJGBEAgASgCBCECCwJAIAIoAigiAEEFTwR/IAIoAgQFIAALBEAgBEECRw0DIAEoAgQiAygCKCIAQQRLDQEgA0EIagwCCyABQQI2AjggAUIENwIwIAFBADYCYCABQQA2AogBIAFB4ABqIgMgAUEwahAzIAFBkAFqIgAgA0EwEL4CGiAAQQRyIQYgAUGYAWohByABQbgBaiEIIAEoApgBIQkDQCAHIQMgASgCuAEiAiEAIAJBBUkiBUUEQCAJIQMgASgClAEhAAsCQCAARQ0AIABBA3QgA2pBCGspAwBCAFINACAIIQAgBUUEQCABKAKUASECIAYhAAsgAkUNASAAIAJBAWs2AgAMAQsLIAFB4ABqIAFBkAFqQTAQvgIaIARBAkYNBCABEI8CDAQLIAMoAgQhACADKAIICyECIAFBADYCkAEgAUEANgK4ASABQZABaiIDIAIgAiAAQQN0ahBDIAFBMGogA0EwEL4CGgwBCyABQeAAaiABQTAQvgIaIAEoAogBIgBBBE0EfyABQegAagUgASgCZCEAIAEoAmgLIQIgAUEANgKQASABQQA2ArgBIAFBkAFqIgMgAiACIABBA3RqEEMgAUEwaiADQTAQvgIaIAFB4ABqEI8CCyABKAJYIgJBBE0EfyABQThqBSABKAI0IQIgASgCOAshACACBEAgAEEIayEDIAJBA3QhAgNAIAIgA2oiACALIAApAwAiC0IBiIQ3AwAgC0I/hiELIAJBCGsiAg0ACwsgAUGQAWoiACABQTBqQTAQvgIaIABBBHIhBiABQZgBaiEHIAFBuAFqIQggASgCmAEhCQNAIAchAyABKAK4ASICIQAgAkEFSSIFRQRAIAkhAyABKAKUASEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAghACAFRQRAIAEoApQBIQIgBiEACyACRQ0BIAAgAkEBazYCAAwBCwsgAUHgAGogAUGQAWpBMBC+AhoLIAoQjwIgCiABQeAAakEwEL4CGiABQcABaiQAC+0HAgh/BX4jAEHQAGsiBCQAIAIoAigiBSEJIAVBBU8EQCACKAIEIQkLAkACQAJAAn8CQAJAAn8gASgCKCIIQQVPBEAgCSABKAIESQ0DIAEoAgQhCCABKAIIDAELIAggCUsNASABQQhqCyEDIAVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshAQJAIAggBSAFIAhLGyIJBEAgASEGIAkhBwNAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgBSAISQ0BIAtCAFINBgwFCyAFIAhPDQQLQfT/wABBIUGYgMEAEN4BAAsgAUEIagwBCyABKAIEIQggASgCCAshAwJAAkAgCCAJTwRAIAJBKGohCCAJAn8gBUEETQRAIAJBCGohBiAFDAELIAIoAgghBiACKAIECyIHIAcgCUsbIgcEQANAIAYgCyADKQMAIgsgBikDACINfSIOfCIPNwMAIA4gD1atIAwgCyANVK19fCILQj+HIQwgA0EIaiEDIAZBCGohBiAHQQFrIgcNAAsgCCgCACEFCyAEQRhqIAEgCUGo7sAAENMBIAQoAhwhASAFQQVPBEAgAigCBCEFCyAEKAIYIQYgBEEQaiACIAEQkwEgBCgCECIHQYGAgIB4RwRAIAdFDQIACwJ/IAgoAgAiA0EFTwRAIAIoAgQiAyAFSQ0EIAIoAggMAQsgAyAFSQ0DIAJBCGoLIAVBA3RqIgcgAUEDdCIKaiAHIAMgBWtBA3QQvQIgByAGIAoQvgIaIAJBBGogCCAIKAIAQQVPGyABIANqNgIAIAtQDQUgBEEIaiACIAlBuO7AABDTASAEKAIIIAQoAgxB4O3AAEEBEEwMBQsgCSAIQZjuwAAQuAEAC0Hs8MAAQRFBgPHAABDeAQALQavtwABBHkHM7cAAEN4BAAsgASAJQQN0IgdqIQMgBUEDdCAHayEGA0AgBkUNAiAGQQhrIQYgAykDACADQQhqIQNQDQALCyAEQSxqQgA3AgAgBEEBNgIkIARB3P/AADYCICAEQYyswgA2AiggBEEgakGogMEAEOsBAAsgBEEgaiIBIAJBMBC+AhogAUEEciEBIARBKGohAiAEQcgAaiEFIAQoAighCQNAIAIhByAEKAJIIgYhAyAGQQVJIghFBEAgBCgCJCEDIAkhBwsCQCADRQ0AIANBA3QgB2pBCGspAwBCAFINACAFIQMgCEUEQCAEKAIkIQYgASEDCyAGRQ0BIAMgBkEBazYCAAwBCwsgACAEQSBqQTAQvgIaIARB0ABqJAALtwcBBX8jAEHwAGsiBSQAIAJBA3QhByACIQgCQAJAAkADQCAIIQYgB0UEQEEAIQYMAgsgBkEBayEIIAdBCGsiByABaikDAFANAAsgAiAGSQ0BCyAEQQN0IQcgBCECAkADQCACIQggB0UEQEEAIQgMAgsgCEEBayECIAdBCGsiByADaikDAFANAAsgBCAISQ0CCwJAIAEgBiADIAgQqAFB/wFxIgJBAUcEQCACQf8BRwRAIAVBAjYCDCAFQgQ3AgQgBUEANgIQIAVBADYCOCAFQRBqIgEgBUEEahAzIAVBQGsiAiABQTAQvgIaIAJBBHIhASAFQcgAaiECIAVB6ABqIQMgBSgCSCEEA0AgAiEIIAUoAmgiByEGIAdBBUkiCUUEQCAFKAJEIQYgBCEICwJAIAZFDQAgBkEDdCAIakEIaykDAEIAUg0AIAMhBiAJRQRAIAUoAkQhByABIQYLIAdFDQEgBiAHQQFrNgIADAELCyAAQQhqIAVBQGtBMBC+AhogAEEBOgAADAILIAVBADYCQCAFQQA2AmggBUFAayICIAMgAyAIQQN0ahBDIAVBEGogAkEwEL4CGiAFKAI4IgdBBE0EfyAFQRhqBSAFKAIUIQcgBSgCGAsgByABIAYQTCAFQUBrIgEgBUEQakEwEL4CGiABQQRyIQEgBUHIAGohAiAFQegAaiEDIAUoAkghBANAIAIhCCAFKAJoIgchBiAHQQVJIglFBEAgBSgCRCEGIAQhCAsCQCAGRQ0AIAZBA3QgCGpBCGspAwBCAFINACADIQYgCUUEQCAFKAJEIQcgASEGCyAHRQ0BIAYgB0EBazYCAAwBCwsgAEEIaiAFQUBrQTAQvgIaIABBADoAAAwBCyAFQQA2AkAgBUEANgJoIAVBQGsiAiABIAEgBkEDdGoQQyAFQRBqIAJBMBC+AhogBSgCOCIHQQRNBH8gBUEYagUgBSgCFCEHIAUoAhgLIAcgAyAIEEwgBUFAayIBIAVBEGpBMBC+AhogAUEEciEBIAVByABqIQIgBUHoAGohAyAFKAJIIQQDQCACIQggBSgCaCIHIQYgB0EFSSIJRQRAIAUoAkQhBiAEIQgLAkAgBkUNACAGQQN0IAhqQQhrKQMAQgBSDQAgAyEGIAlFBEAgBSgCRCEHIAEhBgsgB0UNASAGIAdBAWs2AgAMAQsLIABBCGogBUFAa0EwEL4CGiAAQQI6AAALIAVB8ABqJAAPCyAGIAJBuIDBABC4AQALIAggBEHIgMEAELgBAAvTCAMDfwF+AXwjAEFAaiICJAACfwJAAkACQCAALQAAIgNBA2sOBQEAAAACAAsCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIANBAWsOEQIDAAQFBgAHCAkKCwwNDg8QAQsACyACIAAtAAE6ACAgAkE0akIBNwIAIAJBAjYCLCACQZzlwQA2AiggAkE0NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MEQsgAiAAKQMINwMgIAJBNGpCATcCACACQQI2AiwgAkG45cEANgIoIAJBNTYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDBALIAIgACkDCDcDICACQTRqQgE3AgAgAkECNgIsIAJBuOXBADYCKCACQTY2AgQgAUEYaigCACEAIAIgAjYCMCACIAJBIGo2AgAgASgCFCAAIAJBKGoQLwwPCyACIAAoAgQ2AiAgAkE0akIBNwIAIAJBAjYCLCACQdTlwQA2AiggAkE3NgIEIAFBGGooAgAhACACIAI2AjAgAiACQSBqNgIAIAEoAhQgACACQShqEC8MDgsgAiAAKQIENwIgIAJBNGpCATcCACACQQE2AiwgAkHs5cEANgIoIAJBODYCBCABQRhqKAIAIQAgAiACNgIwIAIgAkEgajYCACABKAIUIAAgAkEoahAvDA0LIAEoAhRB9OXBAEEKIAFBGGooAgAoAgwRAAAMDAsgASgCFEH+5cEAQQwgAUEYaigCACgCDBEAAAwLCyABKAIUQYrmwQBBDiABQRhqKAIAKAIMEQAADAoLIAEoAhRBmObBAEEIIAFBGGooAgAoAgwRAAAMCQsgASgCFEGg5sEAQQMgAUEYaigCACgCDBEAAAwICyABKAIUQaPmwQBBBCABQRhqKAIAKAIMEQAADAcLIAEoAhRBp+bBAEEMIAFBGGooAgAoAgwRAAAMBgsgASgCFEGz5sEAQQ8gAUEYaigCACgCDBEAAAwFCyABKAIUQcLmwQBBDSABQRhqKAIAKAIMEQAADAQLIAEoAhRBz+bBAEEOIAFBGGooAgAoAgwRAAAMAwsgASgCFCAAKAIEIABBCGooAgAgAUEYaigCACgCDBEAAAwCCwJ/IAArAwgiBr0iBUKAgICAgICA+P8Ag0KAgICAgICA+P8AUgRAIAJBKGohACAGIAAQDwwBC0G5kcEAQbyRwQAgBUIAWSIDG0HAkcEAIAVC/////////weDUCIEGyEAQQNBBCADG0EDIAQbCyEDIAJBDGpCATcCACACIAM2AiQgAiAANgIgIAJBAzYCHCACQQI2AgQgAkHo8sEANgIAIAFBGGooAgAhACACIAJBIGo2AhggAiACQRhqNgIIIAEoAhQgACACEC8MAQsgASgCFEH48sEAQQQgAUEYaigCACgCDBEAAAsgAkFAayQAC7EHAgd/A34jAEHgAmsiAiQAIAJCADcDCCACQShqQQBBwQAQuwIhBSACQfDDy558NgIgIAJC/rnrxemOlZkQNwMYIAJCgcaUupbx6uZvNwMQIAEoAgAhBCACIAEoAggiAxDgASACKAIEIAIoAgAgBCADEL4CIQcEQCAHECILAkAgA0E/TQRAIAUgBCADEL4CGgwBCyACIANBBnYiBq03AwggAkEQaiAEIAYQCyAFIAQgA0FAcWogA0E/cSIDEL4CGgsgAiADOgBoIAEoAgQEQCAEECILIAJB8ABqIAJBCGpB6AAQvgIaIAJB6AFqQQA2AgAgAkHgAWpCADcDACACQgA3A9gBIAJB0AFqLQAAIQEgAikDcCEJIAJBgAJqIAJBiAFqKAIANgIAIAJB+AFqIAJBgAFqKQMANwMAIAEgAkGQAWoiA2oiBEGAAToAACACIAIpA3g3A/ABIAlCAYZCgICA+A+DIAlCD4hCgID8B4OEIAlCH4hCgP4DgyAJQgmGIglCOIiEhCEKIAGtIgtCO4YgCSALQgOGhCIJQoD+A4NCKIaEIAlCgID8B4NCGIYgCUKAgID4D4NCCIaEhCABQT9zIgUEQCAEQQFqQQAgBRC7AhoLIAqEIQkCQCABQThxQThHBEAgAkHIAWogCTcDACACQfABaiADQQEQCwwBCyACQfABaiIBIANBARALIAJBoAJqIgNBAEE4ELsCGiACIAk3ANgCIAEgA0EBEAsLIAJBADoA0AEgAkGUAmpClICAgMAANwIAIAJBADYCjAIgAiACQewBajYCiAIgAiACQdgBajYCkAIgAkGgAmogAkGIAmogAkHwAWogAkGEAmoQqQECQAJAAkAgAigCwAIiAyACKAK8AiIBTQ0AIAMgAWshBiACKAK0AiABQQJ0aiEDIAIoAqgCIgcgASACKAKwAiIEbGohASAEQQRGIQgDQCAHRQ0BIAhFDQIgASADKAIAIgVBGHQgBUGA/gNxQQh0ciAFQQh2QYD+A3EgBUEYdnJyNgAAIANBBGohAyABIARqIQEgBkEBayIGDQALCyACQZACaiIDIAJB4AFqKQMANwMAIAJBmAJqIgQgAkHoAWooAgA2AgAgAiACKQPYATcDiAJBuLHCAC0AABpBFBAKIgFFDQEgASACKQOIAjcAACAAQpSAgIDAAjcCBCAAIAE2AgAgAUEQaiAEKAIANgAAIAFBCGogAykDADcAACACQeACaiQADwsgBEEEQbDVwAAQuwEACwALoQgBAn8jAEEwayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAgACgCACIALQAAQQFrDhYBAgMEBQYHCAkKCwwNDg8QERITFBUWAAsgASgCFEHYxsAAQQcgAUEYaigCACgCDBEAAAwWCyABKAIUQd/GwABBByABQRhqKAIAKAIMEQAADBULIAEoAhRB5sbAAEEKIAFBGGooAgAoAgwRAAAMFAsgASgCFEHwxsAAQQwgAUEYaigCACgCDBEAAAwTCyABKAIUQfzGwABBBCABQRhqKAIAKAIMEQAADBILIAEoAhRBgMfAAEERIAFBGGooAgAoAgwRAAAMEQsgASgCFEGRx8AAQQQgAUEYaigCACgCDBEAAAwQCyABKAIUQZXHwABBCiABQRhqKAIAKAIMEQAADA8LIAEoAhRBn8fAAEEKIAFBGGooAgAoAgwRAAAMDgsgASgCFEGpx8AAQQggAUEYaigCACgCDBEAAAwNCyABKAIUQbHHwABBAyABQRhqKAIAKAIMEQAADAwLIAEoAhRBtMfAAEENIAFBGGooAgAoAgwRAAAMCwsgASgCFEHBx8AAQQ8gAUEYaigCACgCDBEAAAwKCyABKAIUQdDHwABBDSABQRhqKAIAKAIMEQAADAkLIAEoAhRB3cfAAEEOIAFBGGooAgAoAgwRAAAMCAsgASgCFEHrx8AAQQkgAUEYaigCACgCDBEAAAwHCyABKAIUQfTHwABBByABQRhqKAIAKAIMEQAADAYLIAEoAhRB+8fAAEEPIAFBGGooAgAoAgwRAAAMBQsgASgCFEGKyMAAQQ0gAUEYaigCACgCDBEAAAwECyABKAIUQZfIwABBCSABQRhqKAIAKAIMEQAADAMLIAAtAAIhAyACIAAtAAE6AAcgAkEUakICNwIAIAJBLGpBAzYCACACQbDIwAA2AgggAkESNgIkIAJBAzYCDCACIANBA3RB3MjAAGo2AiggAUEYaigCACEAIAIgAkEgajYCECACIAJBB2o2AiAgASgCFCAAIAJBCGoQLwwCCyAALQACIQMgAiAALQABOgAHIAJBFGpCAjcCACACQSxqQQM2AgAgAkGAycAANgIIIAJBEjYCJCACQQM2AgwgAiADQQN0QdzIwABqNgIoIAFBGGooAgAhACACIAJBIGo2AhAgAiACQQdqNgIgIAEoAhQgACACQQhqEC8MAQsgAC0AAiEDIAIgAC0AAToAByACQRRqQgI3AgAgAkEsakEDNgIAIAJBpMnAADYCCCACQRI2AiQgAkEDNgIMIAIgA0EDdEHcyMAAajYCKCABQRhqKAIAIQAgAiACQSBqNgIQIAIgAkEHajYCICABKAIUIAAgAkEIahAvCyACQTBqJAAL2wYBCH8jAEHwAGsiAyQAAkAgAi0AMCIEQQFGBEAgAS0AMCEFIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIEIAEgASACQQN0ahBDIAAgBEEwEL4CIAU6ADAMAQsCQAJAAkACQAJAAkACQAJAIAEtADAiCUEBaw4CBwEACyAERQ0BDAILIARFDQELAn8gASgCKCIFQQRNBEAgAUEIaiEHIAUMAQsgASgCCCEHIAEoAgQLIQoCfyACKAIoIgZBBE0EQCACQQhqIQggBgwBCyACKAIIIQggAigCBAshBCAHIAogCCAEEKgBQf8BcQ4CAgMBCyADQUBrIgUgASACEHIgACAJIAUQQgwEC0ECIAlrIQUgBkEETQR/IAJBCGoFIAIoAgQhBiACKAIICyECIANBADYCQCADQQA2AmggA0FAayIEIAIgAiAGQQN0ahBDIANBEGoiAiAEQTAQvgIaIAIgARB1IAQgAkEwEL4CGiAAIAUgBBBCDAMLIANBAjYCDCADQgQ3AgQgA0EANgIQIANBADYCOCADQRBqIgEgA0EEahAzIANBQGsiAiABQTAQvgIaIAJBBHIhCCADQcgAaiEGIANB6ABqIQogAygCSCEEA0AgBiEFIAMoAmgiASECIAFBBUkiB0UEQCAEIQUgAygCRCECCwJAIAJFDQAgAkEDdCAFakEIaykDAEIAUg0AIAohAiAHRQRAIAghAiADKAJEIQELIAFFDQEgAiABQQFrNgIADAELCyADQRBqIgEgA0FAa0EwEL4CGiAAQQEgARBCDAILIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AkAgA0EANgJoIANBQGsiBCABIAEgBUEDdGoQQyADQRBqIgEgBEEwEL4CGiABIAIQdSAEIAFBMBC+AhogACAJIAQQQgwBCyACKAIoIgVBBE0EfyACQQhqBSACKAIEIQUgAigCCAshASADQQA2AkAgA0EANgJoIANBQGsiAiABIAEgBUEDdGoQQyADQRBqIgEgAkEwEL4CGiAAIAFBMBC+AiIAQQIgBGs6ADAgACADKABANgAxIABBNGogA0HDAGooAAA2AAALIANB8ABqJAAL2AYCDX8BfiMAQSBrIgUkAEEBIQ4CQAJAIAJBIiADKAIQIg8RAQANAAJAIAFFBEBBACEBDAELIAAgAWohECAAIQYCQAJAA0ACQCAGIgssAAAiDEEATgRAIAZBAWohBiAMQf8BcSEKDAELIAstAAFBP3EhBiAMQR9xIQggDEFfTQRAIAhBBnQgBnIhCiALQQJqIQYMAQsgCy0AAkE/cSAGQQZ0ciEJIAtBA2ohBiAMQXBJBEAgCSAIQQx0ciEKDAELIAhBEnRBgIDwAHEgBi0AAEE/cSAJQQZ0cnIiCkGAgMQARg0DIAtBBGohBgsgBUEEaiAKQYGABBATAkACQCAFLQAEQYABRg0AIAUtAA8gBS0ADmtB/wFxQQFGDQAgBCAHSw0DAkAgBEUNACABIARNBEAgASAERg0BDAULIAAgBGosAABBQEgNBAsCQCAHRQ0AIAEgB00EQCABIAdGDQEMBQsgACAHaiwAAEG/f0wNBAsCQAJAIAIgACAEaiAHIARrIAMoAgwRAAANACAFQRhqIgkgBUEMaigCADYCACAFIAUpAgQiETcDECARp0H/AXFBgAFGBEBBgAEhCANAAkAgCEGAAUcEQCAFLQAaIg0gBS0AG08NBSAFIA1BAWo6ABogDUEKTw0HIAVBEGogDWotAAAhBAwBC0EAIQggCUEANgIAIAUoAhQhBCAFQgA3AxALIAIgBCAPEQEARQ0ACwwBC0EKIAUtABoiBCAEQQpNGyENIAUtABsiCSAEIAQgCUkbIQwDQCAEIAxGDQIgBSAEQQFqIgk6ABogBCANRg0EIAVBEGogBGohCCAJIQQgAiAILQAAIA8RAQBFDQALCwwHCwJ/QQEgCkGAAUkNABpBAiAKQYAQSQ0AGkEDQQQgCkGAgARJGwsgB2ohBAsgByALayAGaiEHIAYgEEcNAQwDCwsgDUEKQdS+wAAQtwEACyAAIAEgBCAHQYypwAAQmQIACyAERQRAQQAhBAwBCyABIARNBEAgASAERw0DIAEgBGsgASEEIQEMAQsgACAEaiwAAEG/f0wNAiABIARrIQELIAIgACAEaiABIAMoAgwRAAANACACQSIgDxEBACEOCyAFQSBqJAAgDg8LIAAgASAEIAFB/KjAABCZAgALpQYBCX8jAEHwAGsiAyQAAkAgAi0AMCIFQQFGBEAgAS0AMCEEIAEoAigiAkEETQR/IAFBCGoFIAEoAgQhAiABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASACQQN0ahBDIAAgBUEwEL4CIAQ6ADAMAQsCQAJAAkACQAJAIAEtADAiB0EBaw4CBAEACyAFRQ0BDAILIAVFDQELIANBQGsiBCABIAIQciAAIAcgBBBCDAILAn8gASgCKCIEQQRNBEAgAUEIaiEKIAQMAQsgASgCCCEKIAEoAgQLIQgCfyACKAIoIgZBBE0EQCACQQhqIQsgBgwBCyACKAIIIQsgAigCBAshCQJAAkACQCAKIAggCyAJEKgBQf8BcQ4CAQIACyAGQQRNBH8gAkEIagUgAigCBCEGIAIoAggLIQIgA0EANgJAIANBADYCaCADQUBrIgQgAiACIAZBA3RqEEMgA0EQaiICIARBMBC+AhogAiABEHUgBCACQTAQvgIaIAAgBSAEEEIMAwsgA0ECNgIMIANCBDcCBCADQQA2AhAgA0EANgI4IANBEGoiASADQQRqEDMgA0FAayICIAFBMBC+AhogAkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2AiAgA0EIaiACEOsBAAttAQR/AkAgASgCBCICIAEoAggiA0sEQCABKAIAIQQCQCADRQRAIAQQIkEEIQIMAQsgAyEFIAQgAkECdEEEIANBAnQQIyICRQ0CCyABIAU2AgQgASACNgIACyAAIAM2AgQgACABKAIANgIADwsAC20BBH8CQCABKAIEIgIgASgCCCIDSwRAIAEoAgAhBAJAIANFBEAgBBAiQQQhAgwBCyADIQUgBCACQQxsQQQgA0EMbBAjIgJFDQILIAEgBTYCBCABIAI2AgALIAAgAzYCBCAAIAEoAgA2AgAPCwALggEAAkACQAJ/AkACQAJAAkAgAkEDaw4DAQACAwsgASgAAEH5yoWTB0YNBAwCCyAAQQFqIgIgAUGx4sAAQQMQvAINAhogAkECOgAADAQLIAFBrOLAAEEFELwCDQAgAEEBOgABDAMLIABBAWoLQQM6AAAMAQsgAEEAOgABCyAAQQA6AAALdwEDfyMAQRBrIgIkACACQQhqIAAoAgAgACgCBCAAKAIIELYBQbixwgAtAAAaIAIoAgwhAyACKAIIIQRBFBAKIgBFBEAACyAAIAQ2AgwgACABKQIANwIAIAAgAzYCECAAQQhqIAFBCGooAgA2AgAgAkEQaiQAIAALYwEBfyABKAIoIgVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshAQJAIAIgA00EQCADIAVLDQEgACADIAJrNgIEIAAgASACQQN0ajYCAA8LIAIgAyAEELoBAAsgAyAFIAQQuAEAC2wBAX8jAEEwayICJAAgAiAAKAIANgIMIAJBHGpCATcCACACQQI2AhQgAkHEpMAANgIQIAJBFTYCLCABQRhqKAIAIQAgAiACQShqNgIYIAIgAkEMajYCKCABKAIUIAAgAkEQahAvIAJBMGokAAtoAQJ/IAEoAggiBEUgASgCBCIFIARrIANPckUEQCABQQA2AgggAUEAOgAMQQAhBAsgAyAFSQRAIAEoAgAgBGogAiADEL4CGiAAQQQ6AAAgASADIARqNgIIDwsgAEIENwIAIAFBADoADAtpAQF/IwBBIGsiAiQAAn9BASAAIAEQXA0AGiACQRRqQgA3AgAgAkEBNgIMIAJB9KXAADYCCCACQYyswgA2AhBBASABKAIUIAFBGGooAgAgAkEIahAvDQAaIABBBGogARBcCyACQSBqJAALZwEEfwJAIAEoAgQiAiABKAIIIgNLBEAgASgCACEEAkAgA0UEQCAEECJBASECDAELIAMhBSAEIAJBASADECMiAkUNAgsgASAFNgIEIAEgAjYCAAsgACADNgIEIAAgASgCADYCAA8LAAtmAQN/IAEoAgAhAgJAIAEoAgQiBCABKAIIIgNLBEACQCADRQRAIAIQIkEEIQIMAQsgAiAEQQR0QQQgA0EEdBAjIgJFDQILIAEgAzYCBCABIAI2AgALIAAgAzYCBCAAIAI2AgAPCwALXwECfyABBEADQCAAKAIAIgIgAEEEaigCACIDKAIAEQQAIAMoAgQEQCACECILIABBCGooAgAiAiAAQQxqKAIAIgMQxgEgAwRAIAIQIgsgAEEQaiEAIAFBAWsiAQ0ACwsLbQEDfwJAAkACQAJAIAAoAgAiACgCAA4CAAEDCyAAQQhqKAIARQ0CIAAoAgQhAQwBCyAALQAEQQNHDQEgAEEIaigCACIBKAIAIgIgASgCBCIDKAIAEQQAIAMoAgRFDQAgAhAiCyABECILIAAQIgtWAQF+AkAgA0HAAHFFBEAgA0UNASACQQAgA2tBP3GthiABIANBP3GtIgSIhCEBIAIgBIghAgwBCyACIANBP3GtiCEBQgAhAgsgACABNwMAIAAgAjcDCAtgAQF/IwBBMGsiAiQAIAIgATYCDCACIAA2AgggAkEcakIBNwIAIAJBAjYCFCACQcSBwAA2AhAgAkEDNgIsIAIgAkEoajYCGCACIAJBCGo2AiggAkEQahCZASACQTBqJAALYAEBfyMAQTBrIgIkACACIAE2AgwgAiAANgIIIAJBHGpCATcCACACQQI2AhQgAkGIgsAANgIQIAJBAzYCLCACIAJBKGo2AhggAiACQQhqNgIoIAJBEGoQmQEgAkEwaiQAC1kBAn8gAigCACEEIAEgAigCCCIDIAEgA0kbIgMEQCAEIQEDQCAAIAAtAAAgAS0AAHM6AAAgAEEBaiEAIAFBAWohASADQQFrIgMNAAsLIAIoAgQEQCAEECILC1wBAX8CQAJAAkAgAUUEQEEBIQIMAQsgAUEASA0BIAEQCiICRQ0CIAJBBGstAABBA3FFDQAgAkEAIAEQuwIaCyAAIAE2AgggACABNgIEIAAgAjYCAA8LEOoBAAsAC2gBA38CQAJAAkACQCAAKAIADgIAAQMLIABBCGooAgBFDQIgACgCBCEBDAELIAAtAARBA0cNASAAQQhqKAIAIgEoAgAiAiABKAIEIgMoAgARBAAgAygCBEUNACACECILIAEQIgsgABAiC2ABAX8jAEEQayICJAACfyAAKAIAIgAoAgBFBEAgASgCFEGwxsAAQQQgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG0xsAAQQQgAkEMakHIxsAAEH0LIAJBEGokAAtcAQF/IwBBIGsiAiQAIAJBDGpCATcCACACQQE2AgQgAkHUl8IANgIAIAJBCTYCHCACIAA2AhggAUEYaigCACEAIAIgAkEYajYCCCABKAIUIAAgAhAvIAJBIGokAAtPAQF/AkACQAJ/IAAoAigiAkEFTwRAIAAoAgQiAiABSQ0CIABBBGoMAQsgASACSw0BIABBKGoLIAEgAk8NASABNgIADwsgACABIAJrEEkLC1wBAX8jAEEwayIDJAAgAyABNgIMIAMgADYCCCADQRxqQgE3AgAgA0EBNgIUIANB1JfCADYCECADQQc2AiwgAyADQShqNgIYIAMgA0EIajYCKCADQRBqIAIQ6wEAC1oBAX8jAEEQayICJAACfyAALQAAQRdGBEAgASgCFEGwxsAAQQQgAUEYaigCACgCDBEAAAwBCyACIAA2AgwgAUG0xsAAQQQgAkEMakG4xsAAEH0LIAJBEGokAAtOAQF/IAEoAigiBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIAIgBEsEQCACIAQgAxC5AQALIAAgBCACazYCBCAAIAEgAkEDdGo2AgALYAEBfyMAQRBrIgIkAAJ/IAAoAgBFBEAgASgCFEHolMIAQRAgAUEYaigCACgCDBEAAAwBCyACIAA2AgwgAUH4lMIAQQhBgJXCAEEGIAJBDGpBiJXCABCNAQsgAkEQaiQAC1gBAn9BBCECAkACQAJAIAFFDQAgAUGq1arVAEsNASABQQxsIgNBAEgNASADRQ0AQbixwgAtAAAaIAMQCiICRQ0CCyAAIAE2AgQgACACNgIADwsQ6gEACwALWAEBfwJAAkACQCACRQRAQQEhAwwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIAMgASACEL4CIQEgACACNgIIIAAgAjYCBCAAIAE2AgAPCxDqAQALAAtIAAJAIAFpQQFHQYCAgIB4IAFrIABJcg0AIAAEQEG4scIALQAAGgJ/IAFBCU8EQCABIAAQQAwBCyAAEAoLIgFFDQELIAEPCwALTwEEfyABIAAoAggiAigCBCAAKAIQIgQgACgCDCIDaiIFa0sEQCACIAUgARCIAQsgAigCACICIAEgA2oiAWogAiADaiAEEL0CIAAgATYCDAtQAQJ/IwBBIGsiBiQAIAFFBEBB+ezAAEEyELQCAAsgBkEUaiIHIAEgAyAEIAUgAigCEBEGACAGQQhqIAcQvAEgACAGKQMINwMAIAZBIGokAAtGAQJ/IAAoAgQhASAALQAAIgBBBE0gAEEDR3FFBEAgASgCACIAIAFBBGooAgAiAigCABEEACACKAIEBEAgABAiCyABECILC08BAn8gACgCBCECIAAoAgAhAwJAIAAoAggiAC0AAEUNACADQaiowABBBCACKAIMEQAARQ0AQQEPCyAAIAFBCkY6AAAgAyABIAIoAhARAQALUgEBfyAAKAIAIQMgAC0ABEEBRwRAIAMoAgBB6OzAAEEBEOQBCyAAQQI6AAQgAygCACABKAIAIAEoAggQOSADKAIAQffswABBARDkASACIAMQFQtOAQF/IwBBEGsiAiQAIAIgACgCACIANgIMIAFB3NDAAEEFQeHQwABBBCAAQQhqQejQwABB+NDAAEEIIAJBDGpBgNHAABCHASACQRBqJAALSAEBfyMAQSBrIgMkACADQQxqQgA3AgAgA0EBNgIEIANBjKzCADYCCCADIAE2AhwgAyAANgIYIAMgA0EYajYCACADIAIQ6wEAC0MBAX8gAiAAKAIEIAAoAggiA2tLBEAgACADIAIQhgEgACgCCCEDCyAAKAIAIANqIAEgAhC+AhogACACIANqNgIIQQALRgEBfwJAAkACQCABRQRAQQEhAgwBCyABQQBIDQFBuLHCAC0AABogARAKIgJFDQILIAAgATYCBCAAIAI2AgAPCxDqAQALAAtBAQF/IwBBEGsiAiQAIAJBCGogACABQQEQhAECQCACKAIIIgBBgYCAgHhHBEAgAEUNAQALIAJBEGokAA8LEOoBAAtJAQF/IwBBEGsiAiQAIAIgAEEMajYCDCABQdSIwABBDUG4iMAAQQUgAEHkiMAAQb2IwABBBSACQQxqQcSIwAAQhwEgAkEQaiQAC0MBAX8gACgCACEAIAEoAhwiAkEQcUUEQCACQSBxRQRAIAA1AgBBASABEFYPCyAAKAIAIAEQpgEPCyAAKAIAIAEQpwELQQEBfyACIAAoAgQgACgCCCIDa0sEQCAAIAMgAhCIASAAKAIIIQMLIAAoAgAgA2ogASACEL4CGiAAIAIgA2o2AggLeQECfyACIAAoAgQgACgCCCIDa0sEQCMAQRBrIgQkACAEQQhqIAAgAyACEIQBAkACQCAEKAIIIgNBgYCAgHhHBEAgA0UNAQALIARBEGokAAwBCxDqAQALIAAoAgghAwsgACgCACADaiABIAIQvgIaIAAgAiADajYCCAu4AQEFfyAAKAIAIQIgASgCHCIAQRBxRQRAIABBIHFFBEAgAjEAAEEBIAEQVg8LIAItAAAhAyMAQYABayIFJABB/wAhAgNAIAUgAiIEaiIGQTBBNyADQQ9xIgBBCkkbIABqOgAAIAJBAWshAiADIgBBBHYhAyAAQRBPDQALIARBgAFLBEAgBEGAAUHoqMAAELkBAAsgAUEBQfiowABBAiAGQYABIARrEDAgBUGAAWokAA8LIAIgARCiAQtCAQF/IAEoAghFBEAgAEEANgIIIABBADYCAA8LIAEoAgAiAgRAIAAgAiABKAIEEBcPC0GAl8IAQStBiITAABDeAQALPAEBfyABKAIcIgJBEHFFBEAgAkEgcUUEQCAANQIAQQEgARBWDwsgACgCACABEKYBDwsgACgCACABEKcBCzkAAkACfyACQYCAxABHBEBBASAAIAIgASgCEBEBAA0BGgsgAw0BQQALDwsgACADIAQgASgCDBEAAAtAAQF/IwBBIGsiACQAIABBFGpCADcCACAAQQE2AgwgAEG43MAANgIIIABBjKzCADYCECAAQQhqQbyHwAAQ6wEAC+gBAQF/IwBBIGsiAiQAIAJBATsBHCACIAE2AhggAiAANgIUIAJBpKbAADYCECACQYyswgA2AgwgAkEMaiIAKAIIIgFFBEBBgJfCAEErQfihwgAQ3gEACyABQQxqKAIAIQICQAJAIAEoAgQOAgAAAQsgAg0ACyAALQAQIQEgAC0AERpB0K3CAEHQrcIAKAIAIgBBAWo2AgACQCAAQQBIDQBBnLHCAC0AAEEBcQ0AQZyxwgBBAToAAEGYscIAQZixwgAoAgBBAWo2AgBBzK3CACgCAEEASA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const i = uE();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await lE(await o, i);
  return hE(t, e);
}
(function(o, i) {
  function t(x, I, C, r, Q) {
    return mA(r - -852, I);
  }
  function e(x, I, C, r, Q) {
    return mA(C - -816, I);
  }
  function A(x, I, C, r, Q) {
    return mA(x - 523, I);
  }
  function n(x, I, C, r, Q) {
    return mA(C - -775, I);
  }
  const g = o();
  function a(x, I, C, r, Q) {
    return mA(x - 577, Q);
  }
  for (; ; )
    try {
      if (-parseInt(a(831, 813, 850, 807, "$(^c")) / 1 + parseInt(a(813, 806, 816, 826, "t3K@")) / 2 * (parseInt(A(734, "lIO3", 716, 762, 729)) / 3) + parseInt(a(830, 841, 816, 803, "$(^c")) / 4 * (parseInt(t(-665, "pnDw", -623, -645, -634)) / 5) + -parseInt(a(782, 761, 800, 755, "lIO3")) / 6 + parseInt(a(815, 801, 823, 807, "En7b")) / 7 * (parseInt(A(768, "En7b", 787, 796, 796)) / 8) + parseInt(e(-566, "VP!0", -575, -585, -592)) / 9 * (parseInt(n(-542, "WAV)", -538, -566, -516)) / 10) + parseInt(A(735, "^v$I", 708, 734, 734)) / 11 * (-parseInt(n(-516, "UEg9", -528, -541, -552)) / 12) === i) break;
      g.push(g.shift());
    } catch {
      g.push(g.shift());
    }
})(Yo, -1 * 378338 + 237036 + 523765 * 1);
function Yo() {
  const o = ["W7BcPCo1uG0", "iSobywjW", "WPRdOSkLW5tdUG", "W43cJCkuhxZdKSoSoCkmWOddG2a", "WPizWO4bW6S", "oCkME8o+r8o6c8ocFbm", "WRbPnCoCuG", "zmoXtCoOaa", "gajMWPfF", "W4/cISkAexNcGSoqn8kVWQBdUq", "h1hdPrTDWO4nra", "WPuyW5pdLCoGtmosWQq", "q0NcMmoFWOC", "iCoXWRH+W5K", "WOqSv8oDk8oIiCo6W54ZWORdPa", "W79UlvlcRW", "WPVcNmk4W5ri", "WQldPH/dRue", "W4xdRCkVwHm", "h1hcKhmjW65IxSkTr2PKpW", "W6FdT8kVeb7cSd3dRgJdOrRcIW", "WRRdTb/dL27dLsm", "WPXpACoLf8o/gcBcKMO", "W4/cICkuetdcL8oidmkqWOC", "we3cICoyWPi", "lSoSWQv4W5y", "W4qbWQtdHW", "FW1oWRHf", "W6BcR8omW6mp", "gHaMu3iffmoX", "gb0qut8", "W4OoW51xWR3dT3/cOSk7W7CFlW", "aWNdQYuvdJNdQcNcOqy3W4W", "W6VdRHJdQ18", "WOZdI8keW7nZW4iMiq", "omkQcSk9e8oUb8kuWO9VWPbB", "W4GiW5LCWRJdTaZcVCkaW7yllSke", "W6VcPKxcLCoWW5nxvSoYzxa", "WQ3dTW/dJCkj", "lmkBWQ0oW6VcH8k8WR49", "WRLTWRhdOcBdUCoaW69h", "W74wF30Y", "n23cVdCY", "W4fnWOS9W4VcH2m", "W77dRSk+WQy", "W69AuSoqAtKrh8oeW5RcQxC3", "W4qoWQhdMIC", "k8omoIDe", "WPbkWR0pW7S", "WRjPo8oqvW", "duNcGSoFWPi", "WOxcOMJcISoVDSoQvSkioG", "WONcPg3cGSkufSo7rSkkiwGv", "WR/cOSo2svC", "W7D6WRqIWPG", "W5RcI8k5W55f"];
  return Yo = function() {
    return o;
  }, Yo();
}
function ct(o, i, t, e, A) {
  return mA(i - 114, A);
}
function O0(o, i, t, e, A) {
  return mA(A - -55, e);
}
function Di(o, i, t, e, A) {
  return mA(t - 952, o);
}
function mA(o, i) {
  const t = Yo();
  return mA = function(e, A) {
    e = e - 203;
    let n = t[e];
    if (mA.NPObJg === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      mA.uaizQN = C, o = arguments, mA.NPObJg = !0;
    }
    const a = t[-5585 + 5 * -604 + 1721 * 5], x = e + a, I = o[x];
    return I ? n = I : (mA.hkWjOm === void 0 && (mA.hkWjOm = !0), n = mA.uaizQN(n, A), o[x] = n), n;
  }, mA(o, i);
}
function fE(o, i, t, e, A) {
  return mA(A - 883, i);
}
var Ra;
class pE {
  constructor() {
    b(this, Ra, !1);
  }
  async [(Ra = O0(168, 147, 172, "2mK4", 162) + ct(313, 322, 310, 302, "v91Q") + ct(366, 363, 372, 355, "5c&*"), ct(356, 342, 324, 355, "sT*5"))](i) {
    function t(a, x, I, C, r) {
      return ct(a - 85, a - -354, I - 230, C - 103, x);
    }
    function e(a, x, I, C, r) {
      return O0(a - 147, x - 336, I - 50, r, I - -78);
    }
    function A(a, x, I, C, r) {
      return O0(a - 430, x - 430, I - 455, r, C - -937);
    }
    function n(a, x, I, C, r) {
      return ct(a - 31, r - 854, I - 30, C - 358, C);
    }
    function g(a, x, I, C, r) {
      return ct(a - 196, a - -198, I - 50, C - 67, I);
    }
    try {
      const a = i + (e(113, 65, 87, 105, "cFz@") + "/") + Aa;
      await tr(a), this[e(78, 100, 97, 102, "BW1J") + n(1234, 1226, 1234, "KfZk", 1211) + A(-727, -741, -729, -741, "v91Q")] = !0;
    } catch {
      this[g(145, 168, "OTG1", 167) + e(84, 81, 94, 78, "l[AT") + e(103, 150, 123, 127, "8[mM")] = !1, console[e(133, 117, 113, 98, "Y7Xm")](Aa + (g(168, 143, "4]HC", 186) + A(-760, -756, -737, -744, "sT*5") + A(-787, -757, -802, -777, "l[AT") + e(108, 69, 86, 73, "gma&") + A(-779, -804, -761, -789, "5c&*") + e(139, 127, 111, 94, "&bdZ") + g(134, 107, "t3K@", 114) + n(1201, 1167, 1199, "En7b", 1174) + e(111, 70, 93, 107, "4]HC") + t(17, "t3K@", 16, 32) + A(-731, -733, -738, -734, "Ncp5") + e(77, 49, 76, 67, "WAV)") + A(-771, -748, -758, -757, "gma&") + t(-30, "8Z5Y", -45, -42) + "n."));
    }
  }
  [Di("En7b", 1194, 1202) + O0(157, 158, 200, "Mp0t", 177) + fE(1116, "Ncp5", 1134, 1116, 1138) + "ed"]() {
    function i(e, A, n, g, a) {
      return Di(n, A - 228, g - -132);
    }
    function t(e, A, n, g, a) {
      return Di(A, A - 121, a - -1760);
    }
    return this[i(1080, 1081, "HwN&", 1060) + t(-602, "4]HC", -587, -600, -594) + i(1039, 1009, "!*WH", 1024)];
  }
}
class mi extends Error {
  constructor() {
    super(...arguments);
    b(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function Oo() {
  var o = ["caycW4rec8kaW4T4yW", "uSo/WOy", "gG7cJCk0mJ7cJSktW5Pz", "W61XW6xdNSop", "tmoZWPebW6a", "imoKWQRcTJy", "z0GCW7CLW4NcKM4", "v8oLWQmWW6S", "WONcV3JcOIG", "n0tcV8oiua", "WO5yWPe+W6ldN8o6zIxcKaC", "qaXdgmoi", "W6jZjhlcRSoarmoKW6jgWRaiW7VdJa", "WRK1WQpcHCoEyCkwCLJcGq", "CfBdU8kVW6y", "AKH+jSog", "DCkiDXLXnxxcSmkGpGaIgG", "W7tcPYDAW67cR8o+ps8P", "gCk3WOC", "WRK3rIBdTW", "pr0sW7aF", "WQtdRmoVvIq", "WRCMW5WjaZVdKmo4", "ESo+WPXMWQvZzdaDW6i", "W6n2jN7cRSoiq8klW6vJWPaKW7a", "W40xW6aYia", "ECo+W5KlWQj/uXG", "q8kxW4JdUSoudJtcNM88WR5DWOG", "W59IjtLC", "WP7dJCkyvSon", "W6vwWQldU8o3", "g8o+asia", "A0DTaCoh", "WP4sWO3dQWO", "WQ99rtldNa", "W4ZdQ17cUqG", "wmkOqK1yWO5wyCklW7JdH8kXxa", "WP8nW4u", "iWD3mL0AwGTNW5rD", "DmkGWPC8dq", "W7ZcSCk7nXlcRmobvSkUW6q", "gSobWO3cQ8kf", "WPJcPNJcVG4", "WQ3dU2W", "FSk8WP4G", "WPSBW6Hixa", "pCohWRa", "s8kyW4JdV8oDve3cSKyyWR8", "W7/cQ8op", "WQJdS8o4Bsq", "aLLld8o/WPxcNmkM", "WPOsWP3dQqy", "qGHc", "WQ/dRCoVzG", "tCo5WOW", "z0TsWQzcWOpdRc7cOmosW6W/AmoF", "EILzW57cQmoxp8k8r8okodiH", "tSoOW4xcVeScd37cQSkCW6i", "kNaBWO3dSG", "DfeKCHO", "vqqSWR8Y", "kmk7W54NWO4", "dxf+WRv1lCkV", "aJClWOKtsNW", "WP7cQGhdUKKbW7VdS8kKW4lcQCkDnW", "WQpdJ08Xeq", "W4SMW59VW4i"];
  return Oo = function() {
    return o;
  }, Oo();
}
function Ke(o, i, t, e, A) {
  return eA(i - 461, o);
}
function wa(o, i, t, e, A) {
  return eA(o - 537, t);
}
function Fe(o, i, t, e, A) {
  return eA(o - -989, t);
}
(function(o, i) {
  var t = o();
  function e(x, I, C, r, Q) {
    return eA(r - 871, x);
  }
  function A(x, I, C, r, Q) {
    return eA(C - 429, Q);
  }
  function n(x, I, C, r, Q) {
    return eA(r - -248, Q);
  }
  function g(x, I, C, r, Q) {
    return eA(r - -106, I);
  }
  for (; ; )
    try {
      var a = -parseInt(A(719, 721, 745, 743, "SLyc")) / 1 * (parseInt(A(757, 745, 750, 768, "KZc6")) / 2) + -parseInt(A(772, 748, 744, 758, "MRI$")) / 3 + parseInt(g(265, "I&(v", 203, 233, 238)) / 4 * (-parseInt(n(98, 120, 116, 95, "kRDW")) / 5) + parseInt(n(143, 135, 99, 116, "6Loe")) / 6 * (parseInt(e("bD]A", 1228, 1187, 1220, 1228)) / 7) + parseInt(A(830, 813, 805, 837, "O)B[")) / 8 * (-parseInt(A(739, 771, 752, 762, "0aBu")) / 9) + -parseInt(g(253, "1jTE", 213, 242, 222)) / 10 * (parseInt(e("sl&%", 1192, 1234, 1221, 1255)) / 11) + parseInt(g(240, "zs%2", 226, 208, 235)) / 12;
      if (a === i) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Oo, 446693 + 2 * -154981 + 265820);
function wi(o, i, t, e, A) {
  return eA(t - 633, i);
}
function bi(o, i, t, e, A) {
  return eA(t - -354, e);
}
function eA(o, i) {
  var t = Oo();
  return eA = function(e, A) {
    e = e - (-515 + -3 * -275);
    var n = t[e];
    if (eA.TAbFUQ === void 0) {
      var g = function(r) {
        for (var Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (var p = 0, G = c.length; p < G; p++)
          E += "%" + ("00" + c.charCodeAt(p).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, a = function(r, Q) {
        var c = [], E = 0, d, l = "";
        r = g(r);
        var B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (var h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      eA.QbEuEN = a, o = arguments, eA.TAbFUQ = !0;
    }
    var x = t[1 * 8071 + 5064 + 5 * -2627], I = e + x, C = o[I];
    return C ? n = C : (eA.fhECWW === void 0 && (eA.fhECWW = !0), n = eA.QbEuEN(n, A), o[I] = n), n;
  }, eA(o, i);
}
var pt, m0;
class ba {
  constructor(i) {
    P(this, pt);
    P(this, m0);
    this[e(867, "a*GR", 814, 821, 843) + t("zs%2", -139)] = i;
    function t(a, x, I, C, r) {
      return eA(x - -485, a);
    }
    function e(a, x, I, C, r) {
      return eA(r - 524, x);
    }
    function A(a, x, I, C, r) {
      return eA(a - -650, I);
    }
    function n(a, x, I, C, r) {
      return eA(r - 857, C);
    }
    function g(a, x, I, C, r) {
      return eA(a - -742, I);
    }
    try {
      H(this, pt, i[e(861, "!8i]", 872, 848, 875) + e(889, "lr0H", 851, 856, 881) + A(-276, -285, "n6GX", -291, -274)] && JSON[n(1179, 1183, 1225, "O)B[", 1194)](i[n(1188, 1161, 1206, "6Loe", 1175) + A(-320, -342, "vz[Z", -343, -341) + A(-337, -340, "vz[Z", -346, -311)])), H(this, m0, i[A(-315, -345, "TtCE", -344, -337) + g(-373, -406, "kRDW", -404, -402)]);
    } catch (a) {
      console[t("IHQZ", -115)](a);
    }
  }
  get [Fe(-644, -616, "sl&%") + "id"]() {
    function i(e, A, n, g, a) {
      return Fe(n - 407, A - 83, A);
    }
    function t(e, A, n, g, a) {
      return Fe(a - 1548, A - 286, A);
    }
    return this[i(-195, "0aBu", -221) + i(-226, "hcrd", -215)][i(-218, "qKBG", -211) + t(876, "vz[Z", 917, 917, 886)];
  }
  get [Ke("2hZv", 836) + "s"]() {
    function i(e, A, n, g, a) {
      return Ke(g, A - -30);
    }
    function t(e, A, n, g, a) {
      return Fe(a - 1377, A - 435, g);
    }
    return this[t(777, 784, 769, "IHQZ", 753) + t(749, 724, 731, "]$TK", 728)][i(793, 760, 775, "I&(v") + "s"];
  }
  get [Ke("bLtg", 815) + Fe(-617, -628, "rDaH")]() {
    function i(A, n, g, a, x) {
      return Ke(x, n - -698);
    }
    function t(A, n, g, a, x) {
      return Fe(x - 1846, n - 234, n);
    }
    function e(A, n, g, a, x) {
      return Ke(n, g - -1448);
    }
    return this[t(1212, "c(Ia", 1219, 1185, 1212) + e(-636, "*aWV", -646)][e(-657, "3@Em", -677) + i(76, 107, 120, 112, "SLyc")];
  }
  get [Ke("7#eC", 817) + "b"]() {
    return w(this, pt);
  }
  get [bi(-39, -46, -34, "bD]A") + wi(971, "qKBG", 996)]() {
    return w(this, m0);
  }
  get [bi(-40, -5, -21, "vz[Z") + Ke("$WYy", 785) + wi(957, "rDaH", 964) + wi(955, "2hZv", 945)]() {
    var g, a;
    function i(x, I, C, r, Q) {
      return Fe(x - 1483, I - 237, C);
    }
    function t(x, I, C, r, Q) {
      return Fe(x - 1783, I - 143, I);
    }
    function e(x, I, C, r, Q) {
      return wa(C - 206, I - 210, Q);
    }
    function A(x, I, C, r, Q) {
      return wa(x - -911, I - 480, I);
    }
    function n(x, I, C, r, Q) {
      return bi(x - 458, I - 467, C - 1283, r);
    }
    return !!((a = (g = w(this, pt)) == null ? void 0 : g[t(1154, "opjU") + t(1105, "O)B[")]) != null && a[t(1119, "V8ih") + t(1141, "2hZv") + A(-57, "MRI$") + e(1095, 1073, 1077, 1060, "D(IK") + e(1145, 1108, 1111, 1112, "D(IK") + i(852, 843, "*aWV") + n(1309, 1274, 1288, "3@Em") + "d"]);
  }
}
pt = new WeakMap(), m0 = new WeakMap();
(function(o, i) {
  function t(a, x, I, C, r) {
    return EA(a - 460, C);
  }
  const e = o();
  function A(a, x, I, C, r) {
    return EA(I - -647, C);
  }
  function n(a, x, I, C, r) {
    return EA(C - -379, a);
  }
  function g(a, x, I, C, r) {
    return EA(a - -517, I);
  }
  for (; ; )
    try {
      if (-parseInt(t(860, 989, 743, "yIw3", 944)) / 1 * (-parseInt(n("N6V(", 120, 28, 44, 92)) / 2) + -parseInt(A(-205, -143, -221, "n^j3", -350)) / 3 * (parseInt(g(-206, -275, "N6V(", -235, -230)) / 4) + -parseInt(n("YnNP", -77, -50, -176, -303)) / 5 * (-parseInt(A(-145, -181, -254, "trnt", -261)) / 6) + -parseInt(g(-98, -41, "Z8Ng", -33, -221)) / 7 + -parseInt(A(-549, -333, -422, "Z8Ng", -480)) / 8 * (-parseInt(n("oHol", 3, -98, -132, -33)) / 9) + parseInt(g(-224, -318, "gZN%", -315, -106)) / 10 * (parseInt(g(-322, -423, "h0[]", -338, -309)) / 11) + -parseInt(n("q@1F", -57, 120, 49, 53)) / 12 === i) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Ho, 772486 + -2 * -141709 + 211994 * -3);
function FA(o, i, t, e, A) {
  return EA(e - 56, t);
}
function kA(o, i, t, e, A) {
  return EA(o - 431, t);
}
function RA(o, i, t, e, A) {
  return EA(e - -112, A);
}
function ce(o, i, t, e, A) {
  return EA(A - -862, o);
}
function OA(o, i, t, e, A) {
  return EA(t - -431, A);
}
function Ho() {
  const o = ["C8oKWPzgkG", "rCkHWP5lla", "vXRdMhCK", "ASkjqgBdGq", "WQrOWOub", "WPpcHsldKSkh", "iSo5pCkrqW", "rHRdHvSR", "mSoIWPC", "g8o/pq", "WOPuWODS", "lSokW6hcMIO", "grLxEmkB", "fmkTWONdLHq", "sSkeWRBdOmk4", "WPNcHslcT8kd", "WQhcJCoAWQWh", "BCoIWQpdVmoK", "W7vylwJdLG", "WOreWOm", "W48zwKtcSW", "z8oNWPXG", "W7jdn14", "xSkzW40", "B8kdqq", "jrujxmknfmk2W6pdPc86kIu", "W57dOCkzESkx", "ymoUWOK", "f8oeWRpcSaW", "nbS9C8kQ", "W4jFW6TfbW", "hCo5oSkFcW", "jXS7BSkT", "fSo/WPXNAq", "WPVcHCoCCSoV", "r8oIxYO7", "W7/cUJ8", "WPxcGCoCCSoV", "tCk7zuSz", "jSo/WOddMG", "W7tcMmopWOC", "W5pdPa8SvSkfWQbF", "WQZdNb0", "WOLgWOSSW7G", "W51WEq", "jmoIWPhdUHO", "E1HyW4Wh", "dISYuCk7", "EmodWOLzpG", "gCoXlCkzdq", "rNFcH8kOWOO", "xrZdK2OY", "W6BdPHJcRq", "W7lcQeq", "W4VdHYxdUCkj", "fmovWRXXcW", "WPxcJZldS8kp", "W5xdP3Dsl8kTWR1edmoBBa", "tSkvEa", "rmkQaCkDnrqWuq", "ESkbWOhdRSkt", "hSoZWPLJCG", "WPVcHthdKSky", "ChqylW8", "WOBcHeddLGa", "nX07Cmk7", "WRBcGeBdTaa", "W5fTzCkAha", "WQ3cICoiWQ4A", "W6tcUYVdVa", "mmoiW7BcMJa", "W5JdRL3cNCo/", "W7/dUHJcT8kX", "WO5BWOSSW7G", "W4bRE8kqcG", "jSoSWRj3BW", "W7JcNmoFW4RcMG", "W59EpeJdMq", "iMXJWR7dVa", "hMBcJmoOWRK", "cSoLWQ3dLGa", "jqKzWObv", "WOfAWPTSW7a", "WORcTtChCG", "W7xcK8oyW4ZdKG", "EbBdLweV", "fMdcJCoVWRW", "WQpcIKa", "FmohWPTIdq", "W4LmW7bvha", "pmozW6hcMZe", "WQLOWQeBW5u", "W5OygCoSka", "kaa3EmkW", "ruurW6y8", "WPdcI8ogzCo1", "WOzzWOjrW7e", "W7pcJ8oeW5RcGq", "eCo8WRFdVtu", "jc/cLmoOWRS", "j27cI8oSW7G", "bCoQj8ksfW", "W7hcKmoo", "vCoxAhDW", "tmkDgCkBkW", "b8kElCo5WOu", "WQXVWROtW4u", "p8kXW4W4xCojW5qDWPhdPHBcVmox", "ECk4AadcTq", "C0WgjcW", "W7efs8ohfq", "ErNdJ1i1", "ACoSWO5lbW", "iSkViG", "Amo7WP9Q", "lIFcRmoHWPW", "gXBdK2OM", "W5JdSe3cLmoq", "xCkxl8kumq", "rCo4ELvt", "y0TfW4eB", "W7rsk27dGG", "n8o0cSkAla", "bCo7WOHODq", "W5evsN7cTW", "BKrcW4Dt", "sCkCBu0", "pmoajCkLnG", "W4NcMHNcSZm", "B8kSWOpdGmkX", "W6ldISkCDSkx", "W6pdOrlcVmkR", "W5Spd8kT", "sCkzgCkdzW", "BSo/WQq", "WOtcStChCG", "ovXdzq", "WPRcH8onF8o0", "f8o9kSkybG", "W7/cVvG7W40", "kCoLl3ldP2iguHWUjsZcKq", "W7lcGu1SaNpdLCoWtSoVxYhcLa", "hCkZsGSGWRnLDq", "W7bVrCkEjG", "W5mtxtVcSa", "v8kcW5VdVsm", "pr/cJ8oxWPO", "W49qW6XdpW", "WRRdPNNcPuPeW4ldQsVdQCoO", "W5VdI1BcSmok", "uHddHeeG", "D1K+lIC", "W7LAlLNdRG", "BKrcW4CJ", "WPZcSZZdV8kH", "qmoVDfjv", "C8k+EsdcUG", "W5mfcSoNfG", "q8kazfeE", "W51FW61i", "D8klnCkyjG", "W41nANWG", "C0zvcSoz", "jCoOWQFdG8oeWRNcIq", "n8omW6a", "imkVmSojWRe", "WQBcJCosWR4x", "W50xW4NdOmkjaXlcT2ZdGmkpheG", "i8oOWOVdJbi", "W6zqBdm7", "tSkBF0Sm", "r8kOl8k+eba3sG", "vCkvW53dLJ4", "f8oOWOHPBG", "kSkNW7NcPmkNW4JcQJZcHSkHhW0", "yb0eWPPj", "e8ogoXjyW7hcQSoOumoJkJy", "WQpcHCoCEq", "A8oNWOLQsa", "kMzIWPRdUW", "zSoqW4xdUZi", "xSoOWO5N", "wSkLAcRcPG", "fmo5WQa", "mmoSWPFdJbi", "yCoScW0C", "hw7cKCoV", "qCkrFW", "WQLAW45gW5S", "D8kzbSkhpq", "rCkaEu0F", "oSoEW6dcGcW", "wMPhdmo2", "WP5nWRDuW5i", "DuOb", "v8kEW5RdTWe", "W6ldRqm", "WOpcTZC", "FmkqWPddRSkt", "CKXFgSoo", "DCoXWR7dSCo4", "WOrhWOfXW6C", "kmkPnmoLWRe", "nWy6", "x8oXrd86", "ASoXwsyH", "W6ZdUH7cQSk2", "W6ddLx7dScxcHSkMAa", "CfDzhq", "nCocW7dcKs0", "W4nFW7npfq", "BmknFZ3cJG", "W4DtWOf3W7O", "u8kEe8k4mW", "W6RdUGpcTSk3", "EfGbmYS", "fcRdHSoAW5tcS2NdO8k/ufhdK0i", "W5H2BCkqcG", "sSoXWRJdVmo5", "vWRdHxaU", "WPBcNJpdM8kd", "qCkUW4O2kxSZz0hcGCk1W6S", "W6hcUIO", "W4BdMbNdTSk8u8kwWRS", "WRRdHdZcT8kWWQ7dTG", "WQX/WOGCW4u", "ecRdHmovW5/cV2JdHCkpyuhdQhG", "WP7cMqhdTSkz", "xCo2WPnLEq", "kZ3cQSo7WPC", "W5WybmoWkq", "WPVcGZxdSSke", "nNTSWRhdVq", "itVcPCoWWPC", "FuGtmZe", "EmoIWRJdVCoI", "ECoXDCkwW6FcR8oHWODLFMRdUa", "W5aDqhu", "WO5BWOHT", "WQBcHeddLGa", "C8kuWPddGCks", "k8oMkmopWQq", "WQFcHf7dKq0", "W79EpeJdMq", "WRj9WP8CW58", "WPLaWOpcOCoD", "W5fzWPZcG8oSD2m", "BSk1oSkSlG", "emo2pCkzqW", "lSk5WQNdJmkpwtG", "pCkCi8oyWOO", "WRj9WP8C", "CCo/WQNdS8oK", "W5HUzSkydq", "CCkWAq", "ySoGWPLQbG", "W4LBW7fvcG", "W5qpDM3cUa", "CCoKWOBdU8oZ", "W5pdPeJcTCoA", "W7FdMCkFBmka", "lbirWOPd", "W4zxW7Xdaq", "W6VdPWxcNmkO", "FG0Ckda", "W6rqF1yG", "WRxcTtekCW", "WPtcGCoCvCoO", "v8kSaXNdGCoMut8ZnKJdR0a", "W6RdPGlcVmoL", "W67cScpdObO", "W4tdS1pcJ8oA", "WQXYWOqg"];
  return Ho = function() {
    return o;
  }, Ho();
}
function EA(o, i) {
  const t = Ho();
  return EA = function(e, A) {
    e = e - (-45 * -28 + 2 * -3676 + 6276);
    let n = t[e];
    if (EA.nISWIc === void 0) {
      var g = function(r) {
        const Q = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let d = 0, l, B, h = 0; B = r.charAt(h++); ~B && (l = d % 4 ? l * 64 + B : B, d++ % 4) ? c += String.fromCharCode(255 & l >> (-2 * d & 6)) : 0)
          B = Q.indexOf(B);
        for (let d = 0, l = c.length; d < l; d++)
          E += "%" + ("00" + c.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const C = function(r, Q) {
        let c = [], E = 0, d, l = "";
        r = g(r);
        let B;
        for (B = 0; B < 256; B++)
          c[B] = B;
        for (B = 0; B < 256; B++)
          E = (E + c[B] + Q.charCodeAt(B % Q.length)) % 256, d = c[B], c[B] = c[E], c[E] = d;
        B = 0, E = 0;
        for (let h = 0; h < r.length; h++)
          B = (B + 1) % 256, E = (E + c[B]) % 256, d = c[B], c[B] = c[E], c[E] = d, l += String.fromCharCode(r.charCodeAt(h) ^ c[(c[B] + c[E]) % 256]);
        return l;
      };
      EA.gaNIKH = C, o = arguments, EA.nISWIc = !0;
    }
    const a = t[-4302 + -1 * -4302], x = e + a, I = o[x];
    return I ? n = I : (EA.CAEFuz === void 0 && (EA.CAEFuz = !0), n = EA.gaNIKH(n, A), o[x] = n), n;
  }, EA(o, i);
}
var Wa, Ma, va;
class yE {
  constructor(i) {
    b(this, va);
    b(this, Ma, [kA(799, 830, "W#A[") + FA(282, 443, "JHU0", 381) + "ic", ce("C^)4", -602, -603, -565, -655) + ce("JHU0", -654, -448, -513, -567) + "ic"]);
    b(this, Wa);
    function t(e, A, n, g, a) {
      return EA(g - 93, A);
    }
    this[t(456, "@Nku", 266, 390) + t(605, "FV[V", 461, 507) + "d"] = i;
  }
  async [(va = FA(561, 363, "oHYY", 432) + "se", Ma = RA(212, 258, 107, 173, "C^)4") + FA(402, 391, "8ob&", 459) + RA(294, 259, 181, 287, "U)]R") + FA(274, 146, "FV[V", 243), Wa = OA(-166, -277, -246, -292, "YnNP") + FA(424, 328, "U)]R", 338), kA(682, 720, "8A!]"))](i) {
    function t(x, I, C, r, Q) {
      return OA(x - 244, I - 492, C - 1351, r - 78, r);
    }
    function e(x, I, C, r, Q) {
      return kA(C - -1381, I - 95, I);
    }
    function A(x, I, C, r, Q) {
      return kA(C - -408, I - 338, Q);
    }
    function n(x, I, C, r, Q) {
      return OA(x - 477, I - 261, I - 1285, r - 499, r);
    }
    const g = await this[a(188, "V*oL", -43, 139, 55) + a(129, "@Nku", 252, 238, 237) + a(326, "Nbcc", 184, 373, 250)](i);
    await Promise[e(-718, "JHU0", -602) + a(128, "MG2#", 248, 170, 143)]([this[a(-60, "YnNP", 37, 189, 59) + n(1062, 1162, 1248, "Fyz6") + "d"][t(1356, 1215, 1224, "YnNP")](i), this[a(149, "mOXs", 212, 179, 226) + n(976, 1058, 973, "8A!]") + "e"](g)]);
    function a(x, I, C, r, Q) {
      return RA(x - 22, I - 234, C - 252, Q - -71, I);
    }
    this[t(1239, 1406, 1302, "Aoq9") + A(270, 292, 222, 153, "Fyz6") + a(154, "2DTi", 198, 264, 235)]();
  }
  async [OA(-23, -79, -142, -207, "^ZF*") + FA(479, 403, "W#A[", 393) + "se"](i) {
    function t(a, x, I, C, r) {
      return RA(a - 117, x - 19, I - 479, a - 459, r);
    }
    function e(a, x, I, C, r) {
      return OA(a - 489, x - 176, C - 169, C - 314, x);
    }
    function A(a, x, I, C, r) {
      return ce(I, x - 120, I - 246, C - 151, x - 911);
    }
    function n(a, x, I, C, r) {
      return RA(a - 161, x - 41, I - 453, r - 81, x);
    }
    function g(a, x, I, C, r) {
      return kA(x - -1175, x - 175, a);
    }
    try {
      if (e(-208, "A7G(", -103, -72, -12) !== e(2, "nyJC", -139, -33, -70)) {
        _0xcf9ea instanceof _0x4230d0 && _0x4cffb6[e(287, "GK%x", 166, 169, 227) + n(327, "@Nku", 186, 153, 229)](_0x518916);
        return;
      } else {
        const a = await fetch(i);
        if (!a.ok)
          throw n(447, "JHU0", 362, 373, 414) !== A(459, 423, "N6V(", 307, 333) ? new Error(n(391, "YnNP", 306, 265, 275) + t(669, 630, 566, 797, "DSHB") + g("nyJC", -524, -527, -595, -509) + n(110, "JHU0", 63, 254, 160) + "d.") : new _0x261264(n(282, "yIw3", 467, 218, 349) + A(261, 352, "W#A[", 335, 235) + A(347, 292, "8ob&", 185, 246) + n(278, "kzWY", 260, 451, 396) + "d.");
        this[n(282, "A7G(", 352, 429, 377) + "se"] = await a[n(388, "@XCy", 407, 461, 357)]();
      }
    } catch (a) {
      if (e(124, "4Wb[", 226, 108) === e(45, "V*oL", 96, 139)) {
        if (!this[e(-14, "DSHB", 20, -74) + "se"]) throw new _0x3bdae3(t(627, 710, 691, 612, "DSHB") + t(599, 728, 637, 681, "CVGK") + A(272, 297, "YnNP", 372) + t(685, 622, 613, 587, "v$NK") + ".");
        if (!this[g("h0[]", -442) + n(372, "N6V(", 431, 232, 359) + "d"][g("8A!]", -386) + e(-74, "q@1F", 149, 28) + g("U)]R", -555) + "ed"]()) throw new _0xb0c3dc(g("N6V(", -486) + t(614, 639, 539, 496, "Fyz6") + t(764, 851, 796, 875, "nyJC") + n(97, "kzWY", 312, 197, 209) + ".");
        this[n(433, "q@1F", 431, 453, 379) + A(463, 501, "n^j3", 545)] = new _0x5b4119(_0x1abc3a(this[A(322, 350, "N6V(", 323) + "se"], this[t(593, 456, 703, 707, "^ZF*") + A(361, 265, "oHYY", 209)]())), this[e(166, "N6V(", 176, 91) + A(557, 483, "A7G(", 456) + "s"](this[n(240, "U)]R", 352, 356, 310) + n(304, "gZN%", 399, 395, 304)][n(497, "q@1F", 409, 351, 411) + "s"]), this[A(225, 318, "n^j3", 282) + e(-148, "gZN%", -24, -17) + A(366, 495, "8ob&", 459)](this[A(533, 440, "zcM8", 427) + A(364, 331, "U)]R", 464)][A(219, 267, "kWT&", 375) + t(657, 791, 616, 672, "q@1F")]);
      } else this[g("AlXf", -522) + "se"] = void (-3339 + -1113 * -3), console[n(137, "YnNP", 197, 135, 162)](a);
    }
  }
  async [OA(-232, -140, -108, -91, "V*oL") + kA(820, 945, "^ZF*") + "e"](i) {
    function t(a, x, I, C, r) {
      return RA(a - 62, x - 154, I - 378, x - 1054, C);
    }
    function e(a, x, I, C, r) {
      return FA(a - 290, x - 202, C, a - 510);
    }
    function A(a, x, I, C, r) {
      return FA(a - 358, x - 68, I, C - -179);
    }
    function n(a, x, I, C, r) {
      return ce(C, x - 369, I - 324, C - 87, x - 1074);
    }
    if (this[e(805, 798, 806, "Aoq9") + e(927, 878, 1038, "8ob&")] = void (-7486 * 1 + -10 * -328 + 4206), !i)
      if (t(1171, 1299, 1334, "nyJC") === t(1411, 1321, 1352, "N6V(")) {
        console[g(68, 137, 133, "Nbcc")](t(1327, 1382, 1374, "JHU0") + t(1176, 1206, 1238, "@XCy") + A(287, 278, "((mZ", 213) + e(816, 707, 880, "V*oL") + A(92, 286, "((mZ", 169)), this[t(1200, 1287, 1398, "DGuE") + "se"] = void (4367 * -2 + -9811 + 18545);
        return;
      } else throw new _0x4eefe3(t(1336, 1294, 1228, "v$NK") + g(212, 386, 281, "]2g&") + n(709, 634, 582, "q@1F") + g(124, 142, 72, "KVZj") + ".");
    function g(a, x, I, C, r) {
      return RA(a - 294, x - 306, I - 296, I - -28, C);
    }
    await this[e(953, 1071, 936, "gZN%") + n(407, 541, 423, "AlXf") + "se"](i);
  }
  async [kA(749, 664, "kWT&") + OA(-274, -310, -182, -199, "yIw3") + kA(860, 855, "^ZF*")](i) {
    function t(x, I, C, r, Q) {
      return ce(Q, I - 313, C - 109, r - 217, r - 1514);
    }
    const e = await fetch("" + i + this[n(1073, "GK%x", 1298, 1197) + A(917, "8A!]") + A(979, "P[&e") + n(1176, "8A!]", 1142, 1123)][-9 * -935 + 3505 + 1490 * -8]);
    function A(x, I, C, r, Q) {
      return FA(x - 243, I - 474, I, x - 518);
    }
    function n(x, I, C, r, Q) {
      return FA(x - 144, I - 332, I, r - 811);
    }
    const g = e.ok ? 1822 + -779 * 5 + 2073 : -351 + -11 * 623 + -55 * -131;
    function a(x, I, C, r, Q) {
      return RA(x - 94, I - 69, C - 273, r - -171, x);
    }
    return "" + i + this[A(842, "2DTi") + t(894, 905, 873, 889, "n^j3") + n(1311, "KNAu", 1360, 1314) + a("AlXf", 25, -119, -9)][g];
  }
  [FA(460, 310, "DGuE", 337) + RA(-30, -9, 109, 72, "PYu1") + "s"](i) {
    function t(e, A, n, g, a) {
      return FA(e - 27, A - 419, n, g - -203);
    }
    i[t(290, 314, "A7G(", 213) + "ch"]((e) => console[t(184, 157, "8A!]", 83)](e));
  }
  [OA(-29, -46, -133, -142, "P[&e") + RA(64, 209, 58, 85, "n^j3") + ce("A7G(", -507, -534, -744, -629)](i) {
    function t(e, A, n, g, a) {
      return FA(e - 117, A - 444, A, a - 235);
    }
    i[t(817, "W#A[", 647, 664, 693) + "ch"]((e) => console[t(555, "yIw3", 586, 484, 612)](e));
  }
  [kA(795, 858, "Nbcc") + OA(-152, -143, -169, -33, "JHU0")]() {
    function i(A, n, g, a, x) {
      return kA(n - -833, n - 372, x);
    }
    function t(A, n, g, a, x) {
      return RA(A - 444, n - 11, g - 355, a - 1061, n);
    }
    function e(A, n, g, a, x) {
      return ce(x, n - 80, g - 161, a - 329, g - 1663);
    }
    return window[e(1005, 958, 1032, 1055, "n^j3") + e(1214, 970, 1097, 1135, "MG2#")][i(-151, -147, -151, -153, "ihXQ") + t(1183, "((mZ", 1318, 1303)];
  }
  [OA(-288, -162, -210, -79, "kWT&") + kA(743, 864, "AKH#") + kA(685, 638, "W#A[")]() {
    var g;
    function i(a, x, I, C, r) {
      return FA(a - 296, x - 434, C, r - -358);
    }
    function t(a, x, I, C, r) {
      return OA(a - 449, x - 125, C - 1373, C - 115, a);
    }
    function e(a, x, I, C, r) {
      return OA(a - 212, x - 436, I - -409, C - 170, x);
    }
    function A(a, x, I, C, r) {
      return ce(x, x - 435, I - 475, C - 41, I - 1849);
    }
    function n(a, x, I, C, r) {
      return RA(a - 268, x - 5, I - 466, r - 506, a);
    }
    try {
      if (e(-334, "AKH#", -459, -402, -533) !== e(-446, "@Nku", -508, -457, -581)) {
        if (!this[e(-499, "C^)4", -527, -610, -482) + "se"]) {
          if (e(-660, "AKH#", -574, -610, -604) === A(1330, "@Nku", 1337, 1456, 1243)) throw new mi(n("P[&e", 656, 651, 837, 740) + A(1178, "@Nku", 1252, 1176, 1128) + e(-521, "N6V(", -613, -511, -739) + n("KVZj", 577, 654, 473, 602) + ".");
          {
            const a = _0x1a4626[A(1403, "@Nku", 1423, 1289, 1529)](this[i(-177, 40, -32, "Nbcc", -68) + "se"]);
            return (g = a == null ? void 0 : a[i(-83, 109, -39, "^ZF*", 45) + e(-369, "gZN%", -391, -444, -454)]) == null ? void 0 : g[t("KVZj", 1286, 1222, 1309, 1422) + n("mBsw", 887, 753, 850, 829)];
          }
        }
        if (!this[A(1304, "Fyz6", 1244, 1128, 1289) + e(-498, "CVGK", -587, -571, -644) + "d"][n("Fyz6", 645, 468, 542, 600) + A(1304, "mBsw", 1294, 1250, 1168) + e(-403, "4Wb[", -399, -458, -342) + "ed"]())
          if (i(-14, 67, -51, "M1lr", 53) !== t("Nbcc", 1107, 1204, 1242, 1265)) _0x56d7e8[n("AlXf", 667, 595, 800, 664) + "ch"]((a) => _0x2d19a9[e(-579, "q@1F", -462, -433, -471)](a));
          else throw new mi(i(95, 120, 9, "4Wb[", 83) + A(1435, "oHYY", 1383, 1372, 1344) + n("v$NK", 752, 706, 689, 725) + e(-563, "MG2#", -644, -707, -738) + ".");
        this[i(-30, 47, -8, "Aoq9", -63) + A(1208, "PYu1", 1274, 1201, 1147)] = new ba(dE(this[n("U)]R", 520, 754, 602, 635) + "se"], this[t("KNAu", 1452, 1464, 1366, 1353) + e(-517, "v$NK", -402, -448, -450)]())), this[n("YnNP", 691, 706, 791, 718) + i(50, -6, 200, "]2g&", 111) + "s"](this[t("DGuE", 1291, 1358, 1226, 1258) + A(1399, "((mZ", 1315, 1346, 1360)][n("mOXs", 707, 677, 671, 738) + "s"]), this[t("GK%x", 1259, 1101, 1153, 1268) + A(1425, "kWT&", 1303, 1429, 1349) + A(1276, "DSHB", 1403, 1303, 1441)](this[i(-45, -63, 76, "((mZ", 47) + i(38, 103, -52, "^ZF*", -16)][A(1216, "DSHB", 1250, 1149, 1166) + e(-420, "zcM8", -535, -476, -496)]);
      } else _0x523d37[i(69, 74, 122, "nyJC", 152) + "ch"]((a) => _0x4781e5[t("U)]R", 1460, 1283, 1353, 1421)](a));
    } catch (a) {
      if (A(1515, "AlXf", 1391, 1402) !== t("MG2#", 1467, 1351, 1337)) {
        if (a instanceof mi)
          if (i(12, -65, 110, "DGuE", -3) !== A(1146, "Aoq9", 1265, 1387)) a[A(1106, "yIw3", 1188, 1315)]();
          else {
            _0x3acb47 instanceof _0x5192e7 ? _0x575cab[A(1162, "trnt", 1281, 1170)]() : _0x18ef31 instanceof _0x3a037e && _0x9537ea[i(15, -72, 142, "DSHB", 40)](_0x343d52);
            const I = {};
            I[t("oHYY", 1226, 1227, 1178) + t("KNAu", 1246, 1187, 1217)] = !1, I[e(-557, "MG2#", -521, -658) + "s"] = [], I[i(-6, -98, 40, "8A!]", -79) + e(-650, "Nbcc", -561, -551)] = [], I[i(-93, -67, 39, "8ob&", -89) + i(37, -17, -28, "oHYY", -30) + i(109, 127, -35, "n^j3", 84)] = void (-757 * -13 + 70 * -13 + -8931), I[t("Nbcc", 1172, 1397, 1308)] = function() {
            }, I[n("8ob&", 657, 597, 626, 588) + i(30, -65, -59, "Z8Ng", -31)] = "", this[A(1331, "Aoq9", 1226, 1145) + e(-524, "AKH#", -621, -733)] = new _0x5151e2(I);
          }
        else if (a instanceof Error) {
          if (t("Fyz6", 1290, 1230, 1348) !== e(-397, "8ob&", -525, -474)) return this[n("mOXs", 627, 541, 581, 603) + i(96, -128, 35, "N6V(", -19)];
          console[n("kzWY", 614, 769, 706, 727)](a);
        }
        const x = {};
        x[e(-487, "4Wb[", -428, -383) + A(1379, "nyJC", 1352, 1351)] = !1, x[e(-432, "C^)4", -415, -435) + "s"] = [], x[n("C^)4", 644, 767, 723, 769) + i(3, -15, -138, "N6V(", -41)] = [], x[n("M1lr", 656, 785, 786, 765) + e(-708, "W#A[", -581, -572) + e(-253, "DGuE", -385, -471)] = void (-11 * 566 + 6649 * 1 + -423), x[t("@Nku", 1209, 1126, 1233)] = function() {
        }, x[n("DSHB", 906, 857, 764, 837) + A(1494, "YnNP", 1435, 1419)] = "", this[A(1333, "JHU0", 1440, 1316) + i(101, 162, -63, "P[&e", 70)] = new ba(x);
      } else _0x47d0ce[n("KNAu", 778, 868, 842, 791)](_0x4a7ff7);
    }
  }
  [FA(635, 537, "AKH#", 506) + RA(152, 24, 234, 123, "U)]R") + OA(-181, -88, -75, -176, "4Wb[") + "t"]() {
    function i(t, e, A, n, g) {
      return ce(e, e - 178, A - 135, n - 171, A - 1650);
    }
    return this[i(1101, "M1lr", 1195, 1201) + i(992, "2DTi", 1108, 974)];
  }
  [RA(130, 199, 250, 261, "AlXf") + OA(-140, -191, -114, -202, "DGuE") + kA(771, 676, "Nbcc")]() {
    var g;
    function i(a, x, I, C, r) {
      return kA(a - -581, x - 483, C);
    }
    function t(a, x, I, C, r) {
      return ce(C, x - 375, I - 115, C - 10, a - 1846);
    }
    function e(a, x, I, C, r) {
      return kA(C - 299, x - 363, x);
    }
    if (!this[t(1225, 1118, 1299, "U)]R") + "se"]) {
      if (t(1311, 1327, 1383, "C^)4") === t(1428, 1419, 1338, "FV[V")) throw new _0x35e94c(i(212, 276, 214, "mOXs") + i(201, 245, 116, "v$NK") + e(1071, "Nbcc", 1233, 1160) + e(1024, "JHU0", 1101, 1064) + ".");
      return;
    }
    function A(a, x, I, C, r) {
      return kA(C - -573, x - 194, I);
    }
    function n(a, x, I, C, r) {
      return RA(a - 189, x - 182, I - 188, I - 457, a);
    }
    try {
      if (i(248, 285, 153, "KVZj", 355) === A(-44, 13, "4Wb[", 84, -16)) {
        const a = JSON[i(74, 51, -22, "Z8Ng", -7)](this[t(1367, 1339, 1276, "YnNP", 1431) + "se"]);
        return (g = a == null ? void 0 : a[n("FV[V", 914, 796, 929, 660) + n("q@1F", 895, 784, 786, 708)]) == null ? void 0 : g[e(808, "W#A[", 1050, 928, 959) + A(23, 243, "ihXQ", 134, 80)];
      } else {
        _0x3a7772[A(204, 19, "JHU0", 75, 153)](e(1283, "PYu1", 1160, 1167, 1079) + A(390, 372, "KNAu", 290, 396) + t(1361, 1412, 1384, "P[&e", 1449) + t(1440, 1545, 1407, "PYu1", 1423) + i(234, 100, 170, "mOXs", 335)), this[t(1285, 1224, 1291, "N6V(", 1353) + "se"] = void (1 * 3839 + 7704 + -119 * 97);
        return;
      }
    } catch (a) {
      if (e(1166, "V*oL", 1038, 1099) !== t(1216, 1276, 1174, "MG2#")) this[t(1194, 1259, 1202, "Fyz6") + "se"] = void (-27 * 139 + -1 * -2094 + -553 * -3), _0x51cd40[t(1198, 1082, 1163, "n^j3")](_0x4af794);
      else {
        a instanceof Error && (i(213, 204, 94, "W#A[") !== n("4Wb[", 561, 537) ? _0x43d5f7[i(164, 94, 136, "Fyz6") + n("kWT&", 705, 684)](_0x4d734f) : L[n("]2g&", 498, 589) + n("yIw3", 615, 633)](a));
        return;
      }
    }
  }
}
const To = class To extends yE {
  static getInstance() {
    if (!this._instance) {
      const i = new pE();
      this._instance = new To(i);
    }
    return this._instance;
  }
};
b(To, "_instance");
let Gn = To;
const DE = ({ children: o }) => {
  const i = jA(null);
  return FB(i, me.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ y(Qc, { ref: i, children: o });
}, mE = ({ cameraOptions: o }) => o ? /* @__PURE__ */ y(xc, { target: o.styleTarget, children: /* @__PURE__ */ y(
  dB,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: Gn.getInstance(),
    children: /* @__PURE__ */ y(hB, { analytics: sE, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ y(
      yc,
      {
        value: rE({
          onError: o.onError
        }),
        children: /* @__PURE__ */ y(Ux, { children: /* @__PURE__ */ y(xE, { cameraFacing: o.cameraFacing, children: /* @__PURE__ */ y(DE, { children: /* @__PURE__ */ y(aE, { ...o }) }) }) })
      }
    ) })
  }
) }) : null;
ur(mE, "x-dot-face-auto-capture", ["cameraOptions"]);
