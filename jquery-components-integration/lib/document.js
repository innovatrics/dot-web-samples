var ka = Object.defineProperty;
var Cn = (o) => {
  throw TypeError(o);
};
var Na = (o, g, t) => g in o ? ka(o, g, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[g] = t;
var w = (o, g, t) => Na(o, typeof g != "symbol" ? g + "" : g, t), Bn = (o, g, t) => g.has(o) || Cn("Cannot " + t);
var y = (o, g, t) => (Bn(o, g, "read from private field"), t ? t.call(o) : g.get(o)), O = (o, g, t) => g.has(o) ? Cn("Cannot add the same private member more than once") : g instanceof WeakSet ? g.add(o) : g.set(o, t), W = (o, g, t, e) => (Bn(o, g, "write to private field"), e ? e.call(o, t) : g.set(o, t), t);
var Pt, k, mI, bI, Ee, Qn, GI, Pg, Ri, qg, jg, kI, kt = {}, NI = [], Sa = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Cg = Array.isArray;
function zA(o, g) {
  for (var t in g) o[t] = g[t];
  return o;
}
function SI(o) {
  var g = o.parentNode;
  g && g.removeChild(o);
}
function EA(o, g, t) {
  var e, A, i, n = {};
  for (i in g) i == "key" ? e = g[i] : i == "ref" ? A = g[i] : n[i] = g[i];
  if (arguments.length > -322 * 2 + -8527 * 1 + 9173 && (n.children = arguments.length > -395 * 7 + 2813 * -1 + 5581 * 1 ? Pt.call(arguments, -273 * -13 + -6258 + -2711 * -1) : t), typeof o == "function" && o.defaultProps != null)
    for (i in o.defaultProps) void (-3 * -1453 + -57 * 103 + -3 * -504) === n[i] && (n[i] = o.defaultProps[i]);
  return Dt(o, n, e, A, null);
}
function Dt(o, g, t, e, A) {
  var i = {};
  i.type = o, i.props = g, i.key = t, i.ref = e, i.__k = null, i.__ = null, i.__b = 0, i.__e = null, i.__d = void (3 * 2791 + -1409 * -2 + -11191), i.__c = null, i.constructor = void (7 * 663 + 4043 + 668 * -13), i.__v = A ?? ++mI, i.__i = -(-1 * -8939 + -724 * 10 + -6 * 283), i.__u = 0;
  var n = i;
  return A == null && k.vnode != null && k.vnode(n), n;
}
function Fa() {
  var o = {};
  return o.current = null, o;
}
function SA(o) {
  return o.children;
}
function kA(o, g) {
  this.props = o, this.context = g;
}
function be(o, g) {
  if (g == null) return o.__ ? be(o.__, o.__i + (-438 * 4 + 8005 + -12 * 521)) : null;
  for (var t; g < o.__k.length; g++) if ((t = o.__k[g]) != null && t.__e != null) return t.__e;
  return typeof o.type == "function" ? be(o) : null;
}
function FI(o) {
  var g, t;
  if ((o = o.__) != null && o.__c != null) {
    for (o.__e = o.__c.base = null, g = -1 * 709 + 383 * -25 + 10284; g < o.__k.length; g++) if ((t = o.__k[g]) != null && t.__e != null) {
      o.__e = o.__c.base = t.__e;
      break;
    }
    return FI(o);
  }
}
function Zg(o) {
  (!o.__d && (o.__d = !(-1028 + 257 * 4)) && Ee.push(o) && !ko.__r++ || Qn !== k.debounceRendering) && ((Qn = k.debounceRendering) || GI)(ko);
}
function ko() {
  var o, g, t, e, A, i, n, I;
  for (Ee.sort(Pg); o = Ee.shift(); ) o.__d && (g = Ee.length, e = void (-162 * 37 + -5420 + 11414), i = (A = (t = o).__v).__e, n = [], I = [], t.__P && ((e = zA({}, A)).__v = A.__v + (1107 * 5 + 8799 + -14333), k.vnode && k.vnode(e), Mi(t.__P, e, A, t.__n, t.__P.namespaceURI, -271 * -29 + 6830 + -14657 & A.__u ? [i] : null, n, i ?? be(A), !!(-7127 * -1 + -3258 + -3837 & A.__u), I), e.__v = A.__v, e.__.__k[e.__i] = e, vI(n, e, I), e.__e != i && FI(e)), Ee.length > g && Ee.sort(Pg));
  ko.__r = -154 * 47 + 12 * 77 + -154 * -41;
}
function RI(o, g, t, e, A, i, n, I, a, r, Q) {
  var C, x, c, E, l, u = e && e.__k || NI, s = g.length;
  for (t.__d = a, Ra(t, g, u), a = t.__d, C = -1007 * -5 + 4 * 2283 + -14167; C < s; C++) (c = t.__k[C]) != null && typeof c != "boolean" && typeof c != "function" && (x = -(-6256 + 1265 * 6 + -31 * 43) === c.__i ? kt : u[c.__i] || kt, c.__i = C, Mi(o, c, x, A, i, n, I, a, r, Q), E = c.__e, c.ref && x.ref != c.ref && (x.ref && vi(x.ref, null, c), Q.push(c.ref, c.__c || E, c)), l == null && E != null && (l = E), -3 * 3363 + -2 * -61117 + 367 * -127 & c.__u || x.__k === c.__k ? (a && typeof c.type == "string" && !o.contains(a) && (a = be(x)), a = MI(c, a, o)) : typeof c.type == "function" && c.__d !== void 0 ? a = c.__d : E && (a = E.nextSibling), c.__d = void (2351 + 1 * 9662 + -12013), c.__u &= -(-3 * 17887 + 247759 + 2511));
  t.__d = a, t.__e = l;
}
function Ra(o, g, t) {
  var e, A, i, n, I, a = g.length, r = t.length, Q = r, C = -251 * -22 + -1 * -6267 + -11789;
  for (o.__k = [], e = 0; e < a; e++) n = e + C, (A = o.__k[e] = (A = g[e]) == null || typeof A == "boolean" || typeof A == "function" ? null : typeof A == "string" || typeof A == "number" || typeof A == "bigint" || A.constructor == String ? Dt(null, A, null, null, null) : Cg(A) ? Dt(SA, { children: A }, null, null, null) : A.constructor === void 0 && A.__b > 1 * 8543 + 4185 + -2 * 6364 ? Dt(A.type, A.props, A.key, A.ref ? A.ref : null, A.__v) : A) != null ? (A.__ = o, A.__b = o.__b + (43 * 120 + -9397 * 1 + 13 * 326), I = Ma(A, t, n, Q), A.__i = I, i = null, I !== -1 && (Q--, (i = t[I]) && (i.__u |= 131072)), i == null || i.__v === null ? (-(417 * -11 + 3227 * 3 + 1 * -5093) == I && C--, typeof A.type != "function" && (A.__u |= -101325 + 5 * -203 + 167876)) : I !== n && (I == n - (-23 * 109 + 1 * 4703 + -1 * 2195) ? C = I - n : I == n + (2027 * -3 + -971 * -3 + 3169) ? C++ : I > n ? Q > a - n ? C += I - n : C-- : I < n && C++, I !== e + C && (A.__u |= 1 * -111943 + -103594 + 1 * 281073))) : (i = t[n]) && i.key == null && i.__e && !(2 * 34322 + 20871 * -1 + -1 * -83299 & i.__u) && (i.__e == o.__d && (o.__d = be(i)), Vg(i, i, !(-1 * -4926 + -1 * -2081 + -7006)), t[n] = null, Q--);
  if (Q)
    for (e = 0; e < r; e++) (i = t[e]) != null && 1201 * 6 + -2 * -3428 + -14062 == (-1 * -155167 + 215947 + 2 * -120021 & i.__u) && (i.__e == o.__d && (o.__d = be(i)), Vg(i, i));
}
function MI(o, g, t) {
  var e, A;
  if (typeof o.type == "function") {
    for (e = o.__k, A = -6301 + 2713 * -1 + 9014; e && A < e.length; A++) e[A] && (e[A].__ = o, g = MI(e[A], g, t));
    return g;
  }
  o.__e != g && (t.insertBefore(o.__e, g || null), g = o.__e);
  do
    g = g && g.nextSibling;
  while (g != null && -5 * -305 + 2335 + -3852 === g.nodeType);
  return g;
}
function $A(o, g) {
  return g = g || [], o == null || typeof o == "boolean" || (Cg(o) ? o.some(function(t) {
    $A(t, g);
  }) : g.push(o)), g;
}
function Ma(o, g, t, e) {
  var A = o.key, i = o.type, n = t - (1186 * -3 + -1 * -3183 + 376), I = t + (2032 + 3 * -677), a = g[t];
  if (a === null || a && A == a.key && i === a.type && 19 * -247 + 138 + 4555 == (-1 * 216679 + 69 + 6 * 57947 & a.__u)) return t;
  if (e > (a != null && 405 + 843 * -4 + 2967 == (-174026 + 5 * 30287 + 9039 * 17 & a.__u) ? -2374 * 1 + 6785 * -1 + 9160 : 640 * -2 + 11 * -627 + 629 * 13)) for (; n >= 4158 + 5368 * 1 + -2 * 4763 || I < g.length; ) {
    if (n >= 4799 + 388 * 7 + -7515) {
      if ((a = g[n]) && -2 * 1656 + -5683 + -5 * -1799 == (-205 * -895 + -1 * -189766 + 242169 * -1 & a.__u) && A == a.key && i === a.type) return n;
      n--;
    }
    if (I < g.length) {
      if ((a = g[I]) && 1110 + 173 * -1 + -937 == (-28993 * -3 + -242827 * -1 + 198734 * -1 & a.__u) && A == a.key && i === a.type) return I;
      I++;
    }
  }
  return -1;
}
function sn(o, g, t) {
  g[6693 + 2231 * -3] === "-" ? o.setProperty(g, t ?? "") : o[g] = t == null ? "" : typeof t != "number" || Sa.test(g) ? t : t + "px";
}
function zt(o, g, t, e, A) {
  var i;
  A: if (g === "style")
    if (typeof t == "string") o.style.cssText = t;
    else {
      if (typeof e == "string" && (o.style.cssText = e = ""), e)
        for (g in e) t && g in t || sn(o.style, g, "");
      if (t)
        for (g in t) e && t[g] === e[g] || sn(o.style, g, t[g]);
    }
  else if (g[-2 * -101 + -5070 + 2434 * 2] === "o" && g[-7403 * -1 + 1 * 3182 + -10584] === "n") i = g !== (g = g.replace(/(PointerCapture)$|Capture$/i, "$1")), g = g.toLowerCase() in o || g === "onFocusOut" || g === "onFocusIn" ? g.toLowerCase().slice(-6036 * -1 + -49 * 69 + -2653) : g.slice(-347 + -1282 * -5 + -6061), o.l || (o.l = {}), o.l[g + i] = t, t ? e ? t.u = e.u : (t.u = Ri, o.addEventListener(g, i ? jg : qg, i)) : o.removeEventListener(g, i ? jg : qg, i);
  else {
    if (A == "http://www.w3.org/2000/svg") g = g.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (g != "width" && g != "height" && g != "href" && g != "list" && g != "form" && g != "tabIndex" && g != "download" && g != "rowSpan" && g != "colSpan" && g != "role" && g != "popover" && g in o) try {
      o[g] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(47 * -191 + -145 * -4 + 8398) === t && g[1 * 4538 + -1 * -5110 + -9644] !== "-" ? o.removeAttribute(g) : o.setAttribute(g, g == "popover" && 3256 * -1 + -5011 + -53 * -156 == t ? "" : t));
  }
}
function cn(o) {
  return function(g) {
    if (this.l) {
      var t = this.l[g.type + o];
      if (g.t == null) g.t = Ri++;
      else if (g.t < t.u) return;
      return t(k.event ? k.event(g) : g);
    }
  };
}
function Mi(o, g, t, e, A, i, n, I, a, r) {
  var Q, C, x, c, E, l, u, s, h, m, R, M, J, D, j, lA, $ = g.type;
  if (void (-443 + -443 * -1) !== g.constructor) return null;
  58 * -36 + 4672 + -2456 & t.__u && (a = !!(9302 + -575 * 14 + 1 * -1220 & t.__u), i = [I = g.__e = t.__e]), (Q = k.__b) && Q(g);
  A: if (typeof $ == "function") try {
    if (s = g.props, h = "prototype" in $ && $.prototype.render, m = (Q = $.contextType) && e[Q.__c], R = Q ? m ? m.props.value : Q.__ : e, t.__c ? u = (C = g.__c = t.__c).__ = C.__E : (h ? g.__c = C = new $(s, R) : (g.__c = C = new kA(s, R), C.constructor = $, C.render = La), m && m.sub(C), C.props = s, C.state || (C.state = {}), C.context = R, C.__n = e, x = C.__d = !(-991 * -10 + -127 * -47 + -79 * 201), C.__h = [], C._sb = []), h && C.__s == null && (C.__s = C.state), h && $.getDerivedStateFromProps != null && (C.__s == C.state && (C.__s = zA({}, C.__s)), zA(C.__s, $.getDerivedStateFromProps(s, C.__s))), c = C.props, E = C.state, C.__v = g, x) h && $.getDerivedStateFromProps == null && C.componentWillMount != null && C.componentWillMount(), h && C.componentDidMount != null && C.__h.push(C.componentDidMount);
    else {
      if (h && $.getDerivedStateFromProps == null && s !== c && C.componentWillReceiveProps != null && C.componentWillReceiveProps(s, R), !C.__e && (C.shouldComponentUpdate != null && !(-9858 + 42 * 118 + -1 * -4903) === C.shouldComponentUpdate(s, C.__s, R) || g.__v === t.__v)) {
        for (g.__v !== t.__v && (C.props = s, C.state = C.__s, C.__d = !(7103 * -1 + 997 * 6 + 1122)), g.__e = t.__e, g.__k = t.__k, g.__k.forEach(function(DA) {
          DA && (DA.__ = g);
        }), M = 5688 + 36 * -158; M < C._sb.length; M++) C.__h.push(C._sb[M]);
        C._sb = [], C.__h.length && n.push(C);
        break A;
      }
      C.componentWillUpdate != null && C.componentWillUpdate(s, C.__s, R), h && C.componentDidUpdate != null && C.__h.push(function() {
        C.componentDidUpdate(c, E, l);
      });
    }
    if (C.context = R, C.props = s, C.__P = o, C.__e = !(693 + 1 * -919 + 1 * 227), J = k.__r, D = 2242 + -13 * -485 + 37 * -231, h) {
      for (C.state = C.__s, C.__d = !(-1 * 8065 + -1 * -8419 + -353), J && J(g), Q = C.render(C.props, C.state, C.context), j = 6139 + -877 * 7; j < C._sb.length; j++) C.__h.push(C._sb[j]);
      C._sb = [];
    } else do
      C.__d = !(4079 + 4234 * 1 + 1039 * -8), J && J(g), Q = C.render(C.props, C.state, C.context), C.state = C.__s;
    while (C.__d && ++D < 25);
    C.state = C.__s, C.getChildContext != null && (e = zA(zA({}, e), C.getChildContext())), h && !x && C.getSnapshotBeforeUpdate != null && (l = C.getSnapshotBeforeUpdate(c, E)), RI(o, Cg(lA = Q != null && Q.type === SA && Q.key == null ? Q.props.children : Q) ? lA : [lA], g, t, e, A, i, n, I, a, r), C.base = g.__e, g.__u &= -(2235 + 4083 * 2 + 10 * -1024), C.__h.length && n.push(C), u && (C.__E = C.__ = null);
  } catch (DA) {
    g.__v = null, a || i != null ? (g.__e = I, g.__u |= a ? 1679 + 1 * 8041 + -9560 : 9352 + -46 * -23 + 10378 * -1, i[i.indexOf(I)] = null) : (g.__e = t.__e, g.__k = t.__k), k.__e(DA, g, t);
  }
  else i == null && g.__v === t.__v ? (g.__k = t.__k, g.__e = t.__e) : g.__e = va(t.__e, g, t, e, A, i, n, a, r);
  (Q = k.diffed) && Q(g);
}
function vI(o, g, t) {
  g.__d = void 0;
  for (var e = -544 * -2 + 1 * 1215 + -1 * 2303; e < t.length; e++) vi(t[e], t[++e], t[++e]);
  k.__c && k.__c(g, o), o.some(function(A) {
    try {
      o = A.__h, A.__h = [], o.some(function(i) {
        i.call(A);
      });
    } catch (i) {
      k.__e(i, A.__v);
    }
  });
}
function va(o, g, t, e, A, i, n, I, a) {
  var r, Q, C, x, c, E, l, u = t.props, s = g.props, h = g.type;
  if (h === "svg" ? A = "http://www.w3.org/2000/svg" : h === "math" ? A = "http://www.w3.org/1998/Math/MathML" : A || (A = "http://www.w3.org/1999/xhtml"), i != null) {
    for (r = 620 * 8 + -8140 + -530 * -6; r < i.length; r++) if ((c = i[r]) && "setAttribute" in c == !!h && (h ? c.localName === h : c.nodeType === 3)) {
      o = c, i[r] = null;
      break;
    }
  }
  if (o == null) {
    if (h === null) return document.createTextNode(s);
    o = document.createElementNS(A, h, s.is && s), i = null, I = !(-6281 + 35 * 181 + 1 * -53);
  }
  if (h === null) u === s || I && o.data === s || (o.data = s);
  else {
    if (i = i && Pt.call(o.childNodes), u = t.props || kt, !I && i != null)
      for (u = {}, r = 6953 + -1 * 3547 + 13 * -262; r < o.attributes.length; r++) u[(c = o.attributes[r]).name] = c.value;
    for (r in u) if (c = u[r], r != "children") {
      if (r == "dangerouslySetInnerHTML") C = c;
      else if (r !== "key" && !(r in s)) {
        if (r == "value" && "defaultValue" in s || r == "checked" && "defaultChecked" in s) continue;
        zt(o, r, null, c, A);
      }
    }
    for (r in s) c = s[r], r == "children" ? x = c : r == "dangerouslySetInnerHTML" ? Q = c : r == "value" ? E = c : r == "checked" ? l = c : r === "key" || I && typeof c != "function" || u[r] === c || zt(o, r, c, u[r], A);
    if (Q) I || C && (Q.__html === C.__html || Q.__html === o.innerHTML) || (o.innerHTML = Q.__html), g.__k = [];
    else if (C && (o.innerHTML = ""), RI(o, Cg(x) ? x : [x], g, t, e, h === "foreignObject" ? "http://www.w3.org/1999/xhtml" : A, i, n, i ? i[29 * -307 + 353 * -2 + 9609] : t.__k && be(t, 0), I, a), i != null)
      for (r = i.length; r--; ) i[r] != null && SI(i[r]);
    I || (r = "value", void (-2 * 271 + -7714 + 8256) !== E && (E !== o[r] || h === "progress" && !E || h === "option" && E !== u[r]) && zt(o, r, E, u[r], A), r = "checked", void (-1 * 7333 + -3 * -1621 + 19 * 130) !== l && l !== o[r] && zt(o, r, l, u[r], A));
  }
  return o;
}
function vi(o, g, t) {
  try {
    typeof o == "function" ? o(g) : o.current = g;
  } catch (e) {
    k.__e(e, t);
  }
}
function Vg(o, g, t) {
  var e, A;
  if (k.unmount && k.unmount(o), (e = o.ref) && (e.current && e.current !== o.__e || vi(e, null, g)), (e = o.__c) != null) {
    if (e.componentWillUnmount) try {
      e.componentWillUnmount();
    } catch (i) {
      k.__e(i, g);
    }
    e.base = e.__P = null;
  }
  if (e = o.__k)
    for (A = -1 * -2197 + 19 * 17 + -2520; A < e.length; A++) e[A] && Vg(e[A], g, t || typeof o.type != "function");
  t || o.__e == null || SI(o.__e), o.__c = o.__ = o.__e = o.__d = void (-3963 + 1 * 7863 + 60 * -65);
}
function La(o, g, t) {
  return this.constructor(o, t);
}
function re(o, g, t) {
  var e, A, i, n;
  k.__ && k.__(o, g), A = (e = typeof t == "function") ? null : t && t.__k || g.__k, i = [], n = [], Mi(g, o = (!e && t || g).__k = EA(SA, null, [o]), A || kt, kt, g.namespaceURI, !e && t ? [t] : A ? null : g.firstChild ? Pt.call(g.childNodes) : null, i, !e && t ? t : A ? A.__e : g.firstChild, e, n), vI(i, o, n);
}
function Li(o, g) {
  re(o, g, Li);
}
function Ji(o, g, t) {
  var e, A, i, n, I = zA({}, o.props);
  for (i in o.type && o.type.defaultProps && (n = o.type.defaultProps), g) i == "key" ? e = g[i] : i == "ref" ? A = g[i] : I[i] = void (-2077 * 4 + -4496 + 12804) === g[i] && void (-3802 + 2029 * -1 + -7 * -833) !== n ? n[i] : g[i];
  return arguments.length > 149 * -43 + 4094 + 2315 && (I.children = arguments.length > -1 * 2897 + -5684 + -1073 * -8 ? Pt.call(arguments, 10 * -281 + 3 * -2683 + 10861) : t), Dt(o.type, I, e || o.key, A || o.ref, null);
}
function tt(o, g) {
  var t = { __c: g = "__cC" + kI++, __: o, Consumer: function(e, A) {
    return e.children(A);
  }, Provider: function(e) {
    var A, i;
    return this.getChildContext || (A = [], (i = {})[g] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      A = null;
    }, this.shouldComponentUpdate = function(n) {
      this.props.value !== n.value && A.some(function(I) {
        I.__e = !0, Zg(I);
      });
    }, this.sub = function(n) {
      A.push(n);
      var I = n.componentWillUnmount;
      n.componentWillUnmount = function() {
        A && A.splice(A.indexOf(n), 1), I && I.call(n);
      };
    }), e.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Pt = NI.slice, k = { __e: function(o, g, t, e) {
  for (var A, i, n; g = g.__; ) if ((A = g.__c) && !A.__) try {
    if ((i = A.constructor) && i.getDerivedStateFromError != null && (A.setState(i.getDerivedStateFromError(o)), n = A.__d), A.componentDidCatch != null && (A.componentDidCatch(o, e || {}), n = A.__d), n) return A.__E = A;
  } catch (I) {
    o = I;
  }
  throw o;
} }, mI = -1 * 382 + -2423 + -51 * -55, bI = function(o) {
  return o != null && o.constructor == null;
}, kA.prototype.setState = function(o, g) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = zA({}, this.state), typeof o == "function" && (o = o(zA({}, t), this.props)), o && zA(t, o), o != null && this.__v && (g && this._sb.push(g), Zg(this));
}, kA.prototype.forceUpdate = function(o) {
  this.__v && (this.__e = !(6238 * 1 + 2308 + 8546 * -1), o && this.__h.push(o), Zg(this));
}, kA.prototype.render = SA, Ee = [], GI = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Pg = function(o, g) {
  return o.__v.__b - g.__v.__b;
}, ko.__r = 2 * -3476 + -504 * -6 + -1 * -3928, Ri = 9 + -1 * -131 + -140, qg = cn(!(47 * 202 + -73 * 24 + -1 * 7741)), jg = cn(!(7869 + 2411 * 3 + -15102)), kI = -1 * 3257 + -4623 * -2 + -5989;
function Ui() {
  return (Ui = Object.assign ? Object.assign.bind() : function(o) {
    for (var g = -646 + -9336 * 1 + 9983; g < arguments.length; g++) {
      var t = arguments[g];
      for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (o[e] = t[e]);
    }
    return o;
  }).apply(this, arguments);
}
var Ja = ["context", "children"];
function Ua(o) {
  this.getChildContext = function() {
    return o.context;
  };
  var g = o.children, t = function(e, A) {
    if (e == null) return {};
    var i, n, I = {}, a = Object.keys(e);
    for (n = -25 * -189 + -248 + -4477; n < a.length; n++) A.indexOf(i = a[n]) >= -14 * 424 + 3821 * -2 + -219 * -62 || (I[i] = e[i]);
    return I;
  }(o, Ja);
  return Ji(g, t);
}
function Wa() {
  var o = {};
  o.detail = {}, o.bubbles = !(7547 * 1 + 2462 + 10009 * -1), o.cancelable = !(-21 * 59 + -8300 + 9539);
  var g = new CustomEvent("_preact", o);
  this.dispatchEvent(g), this._vdom = EA(Ua, Ui({}, this._props, { context: g.detail.context }), function t(e, A) {
    if (6451 + -25 * -4 + -6548 === e.nodeType) return e.data;
    if (-2246 * 1 + -2 * -466 + 1 * 1315 !== e.nodeType) return null;
    var i = [], n = {}, I = 594 * -7 + 214 * 40 + -4402, a = e.attributes, r = e.childNodes;
    for (I = a.length; I--; ) a[I].name !== "slot" && (n[a[I].name] = a[I].value, n[LI(a[I].name)] = a[I].value);
    for (I = r.length; I--; ) {
      var Q = t(r[I], null), C = r[I].slot;
      C ? n[C] = EA(xn, { name: C }, Q) : i[I] = Q;
    }
    var x = A ? EA(xn, null, i) : i;
    return EA(A || e.nodeName.toLowerCase(), n, x);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Li : re)(this._vdom, this._root);
}
function LI(o) {
  return o.replace(/-(\w)/g, function(g, t) {
    return t ? t.toUpperCase() : "";
  });
}
function Ya(o, g, t) {
  if (this._vdom) {
    var e = {};
    e[o] = t = t ?? void (3603 + -1 * -8139 + -618 * 19), e[LI(o)] = t, this._vdom = Ji(this._vdom, e), re(this._vdom, this._root);
  }
}
function Oa() {
  re(this._vdom = null, this._root);
}
function xn(o, g) {
  var t = this;
  return EA("slot", Ui({}, o, { ref: function(e) {
    e ? (t.ref = e, t._listener || (t._listener = function(A) {
      A.stopPropagation(), A.detail.context = g;
    }, e.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function Ha(o, g, t, e) {
  function A() {
    var i = Reflect.construct(HTMLElement, [], A);
    return i._vdomComponent = o, i._root = i, i;
  }
  return (A.prototype = Object.create(HTMLElement.prototype)).constructor = A, A.prototype.connectedCallback = Wa, A.prototype.attributeChangedCallback = Ya, A.prototype.disconnectedCallback = Oa, t = t || o.observedAttributes || Object.keys(o.propTypes || {}), A.observedAttributes = t, t.forEach(function(i) {
    Object.defineProperty(A.prototype, i, { get: function() {
      return this._vdom.props[i];
    }, set: function(n) {
      this._vdom ? this.attributeChangedCallback(i, null, n) : (this._props || (this._props = {}), this._props[i] = n, this.connectedCallback());
      var I = typeof n;
      n != null && I !== "string" && I !== "boolean" && I !== "number" || this.setAttribute(i, n);
    } });
  }), customElements.define(g, A);
}
var Ka = -1 * -6965 + 1183 + -2037 * 4;
function p(o, g, t, e, A, i) {
  g || (g = {});
  var n, I, a = g;
  if ("ref" in a)
    for (I in a = {}, g) I == "ref" ? n = g[I] : a[I] = g[I];
  var r = {};
  r.type = o, r.props = a, r.key = t, r.ref = n, r.__k = null, r.__ = null, r.__b = 0, r.__e = null, r.__d = void (154 + -1 * -8969 + -9123), r.__c = null, r.constructor = void (4074 + -329 * -21 + -10983), r.__v = --Ka, r.__i = -(-49 * -2 + -645 * 2 + -1193 * -1), r.__u = 0, r.__source = A, r.__self = i;
  var Q = r;
  if (typeof o == "function" && (n = o.defaultProps))
    for (I in n) void (-3993 * 1 + 9017 + -2512 * 2) === a[I] && (a[I] = n[I]);
  return k.vnode && k.vnode(Q), Q;
}
var hA = function() {
  return hA = Object.assign || function(g) {
    for (var t, e = 1, A = arguments.length; e < A; e++) {
      t = arguments[e];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (g[i] = t[i]);
    }
    return g;
  }, hA.apply(this, arguments);
};
function je(o, g, t) {
  if (t || arguments.length === 2) for (var e = 0, A = g.length, i; e < A; e++)
    (i || !(e in g)) && (i || (i = Array.prototype.slice.call(g, 0, e)), i[e] = g[e]);
  return o.concat(i || Array.prototype.slice.call(g));
}
function Ta(o) {
  var g = Object.create(null);
  return function(t) {
    return g[t] === void 0 && (g[t] = o(t)), g[t];
  };
}
var Pa = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, qa = Ta(function(o) {
  return Pa.test(o) || o.charCodeAt(-6120 + -1241 * 1 + 7361) === 9126 + 1 * -5375 + -4 * 910 && o.charCodeAt(-1 * -2677 + -71 * -25 + -4451) === 11 * -302 + 2939 + -1 * -493 && o.charCodeAt(6266 + 522 * -12) < 5901 + -349 * -28 + -15582;
}), Ce, q, mg, En, Ze = -5487 + -7558 * 1 + 13045, JI = [], V = k, dn = V.__b, ln = V.__r, un = V.diffed, hn = V.__c, fn = V.unmount, pn = V.__;
function ot(o, g) {
  V.__h && V.__h(q, o, Ze || g), Ze = 216 * -22 + -4779 + 9531;
  var t = {};
  t.__ = [], t.__h = [];
  var e = q.__H || (q.__H = t);
  return o >= e.__.length && e.__.push({}), e.__[o];
}
function fA(o) {
  return Ze = -5250 + 1 * -7687 + -1 * -12938, Wi(YI, o);
}
function Wi(o, g, t) {
  var e = ot(Ce++, 2);
  if (e.t = o, !e.__c && (e.__ = [t ? t(g) : YI(void (8 * -263 + -449 * -3 + -757 * -1), g), function(I) {
    var a = e.__N ? e.__N[0] : e.__[0], r = e.t(a, I);
    a !== r && (e.__N = [r, e.__[4950 + 2 * -314 + -4321]], e.__c.setState({}));
  }], e.__c = q, !q.u)) {
    var A = function(I, a, r) {
      if (!e.__c.__H) return !0;
      var Q = e.__c.__H.__.filter(function(x) {
        return !!x.__c;
      });
      if (Q.every(function(x) {
        return !x.__N;
      })) return !i || i.call(this, I, a, r);
      var C = !(3634 + -3633 * 1);
      return Q.forEach(function(x) {
        if (x.__N) {
          var c = x.__[0];
          x.__ = x.__N, x.__N = void 0, c !== x.__[0] && (C = !0);
        }
      }), !(!C && e.__c.props === I) && (!i || i.call(this, I, a, r));
    };
    q.u = !(-17843 + 7 * 2549);
    var i = q.shouldComponentUpdate, n = q.componentWillUpdate;
    q.componentWillUpdate = function(I, a, r) {
      if (this.__e) {
        var Q = i;
        i = void (1173 + 477 * 13 + -1229 * 6), A(I, a, r), i = Q;
      }
      n && n.call(this, I, a, r);
    }, q.shouldComponentUpdate = A;
  }
  return e.__N || e.__;
}
function X(o, g) {
  var t = ot(Ce++, 3);
  !V.__s && Yi(t.__H, g) && (t.__ = o, t.i = g, q.__H.__h.push(t));
}
function gt(o, g) {
  var t = ot(Ce++, 4);
  !V.__s && Yi(t.__H, g) && (t.__ = o, t.i = g, q.__h.push(t));
}
function FA(o) {
  return Ze = 653 * -5 + -5077 + 8347, pA(function() {
    var g = {};
    return g.current = o, g;
  }, []);
}
function UI(o, g, t) {
  Ze = 1 * -2901 + 6564 + 1219 * -3, gt(function() {
    return typeof o == "function" ? (o(g()), function() {
      return o(null);
    }) : o ? (o.current = g(), function() {
      return o.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(o));
}
function pA(o, g) {
  var t = ot(Ce++, 7);
  return Yi(t.__H, g) && (t.__ = o(), t.__H = g, t.__h = o), t.__;
}
function Ae(o, g) {
  return Ze = 5241 + 1 * 6317 + -11550, pA(function() {
    return o;
  }, g);
}
function Be(o) {
  var g = q.context[o.__c], t = ot(Ce++, -1451 * 2 + 1 * -6499 + -9410 * -1);
  return t.c = o, g ? (t.__ == null && (t.__ = !(816 + -17 * 48), g.sub(q)), g.props.value) : o.__;
}
function No(o, g) {
  V.useDebugValue && V.useDebugValue(g ? g(o) : o);
}
function WI() {
  var o = ot(Ce++, 11);
  if (!o.__) {
    for (var g = q.__v; g !== null && !g.__m && g.__ !== null; ) g = g.__;
    var t = g.__m || (g.__m = [23 * -274 + 3495 + -1 * -2807, 0]);
    o.__ = "P" + t[0] + "-" + t[-1 * 5522 + 3 * 3044 + 1 * -3609]++;
  }
  return o.__;
}
function ja() {
  for (var o; o = JI.shift(); ) if (o.__P && o.__H) try {
    o.__H.__h.forEach(Qo), o.__H.__h.forEach(_g), o.__H.__h = [];
  } catch (g) {
    o.__H.__h = [], V.__e(g, o.__v);
  }
}
V.__b = function(o) {
  q = null, dn && dn(o);
}, V.__ = function(o, g) {
  o && g.__k && g.__k.__m && (o.__m = g.__k.__m), pn && pn(o, g);
}, V.__r = function(o) {
  ln && ln(o), Ce = 6888 + -59 * 73 + 29 * -89;
  var g = (q = o.__c).__H;
  g && (mg === q ? (g.__h = [], q.__h = [], g.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-8384 + 41 * 167 + 1537);
  })) : (g.__h.forEach(Qo), g.__h.forEach(_g), g.__h = [], Ce = 0)), mg = q;
}, V.diffed = function(o) {
  un && un(o);
  var g = o.__c;
  g && g.__H && (g.__H.__h.length && (1 * 1867 + -29 * 229 + -191 * -25 !== JI.push(g) && En === V.requestAnimationFrame || ((En = V.requestAnimationFrame) || Za)(ja)), g.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-5169 * 1 + 115 * 19 + 8 * 373);
  })), mg = q = null;
}, V.__c = function(o, g) {
  g.some(function(t) {
    try {
      t.__h.forEach(Qo), t.__h = t.__h.filter(function(e) {
        return !e.__ || _g(e);
      });
    } catch (e) {
      g.some(function(A) {
        A.__h && (A.__h = []);
      }), g = [], V.__e(e, t.__v);
    }
  }), hn && hn(o, g);
}, V.unmount = function(o) {
  fn && fn(o);
  var g, t = o.__c;
  t && t.__H && (t.__H.__.forEach(function(e) {
    try {
      Qo(e);
    } catch (A) {
      g = A;
    }
  }), t.__H = void (-1 * 59 + -984 + 7 * 149), g && V.__e(g, t.__v));
};
var yn = typeof requestAnimationFrame == "function";
function Za(o) {
  var g, t = function() {
    clearTimeout(e), yn && cancelAnimationFrame(g), setTimeout(o);
  }, e = setTimeout(t, 100);
  yn && (g = requestAnimationFrame(t));
}
function Qo(o) {
  var g = q, t = o.__c;
  typeof t == "function" && (o.__c = void (1224 + -137 * -5 + -1909), t()), q = g;
}
function _g(o) {
  var g = q;
  o.__c = o.__(), q = g;
}
function Yi(o, g) {
  return !o || o.length !== g.length || g.some(function(t, e) {
    return t !== o[e];
  });
}
function YI(o, g) {
  return typeof g == "function" ? g(o) : g;
}
function OI(o, g) {
  for (var t in g) o[t] = g[t];
  return o;
}
function Xg(o, g) {
  for (var t in o) if (t !== "__source" && !(t in g)) return !0;
  for (var e in g) if (e !== "__source" && o[e] !== g[e]) return !(1174 * 1 + -6617 * 1 + 5443);
  return !(492 * -16 + 669 + 7204);
}
function zg(o, g) {
  this.props = o, this.context = g;
}
function Va(o, g) {
  function t(A) {
    var i = this.props.ref, n = i == A.ref;
    return !n && i && (i.call ? i(null) : i.current = null), g ? !g(this.props, A) || !n : Xg(this.props, A);
  }
  function e(A) {
    return this.shouldComponentUpdate = t, EA(o, A);
  }
  return e.displayName = "Memo(" + (o.displayName || o.name) + ")", e.prototype.isReactComponent = !(5900 + 100 * -59), e.__f = !(-7793 * 1 + 2 * -4781 + -89 * -195), e;
}
(zg.prototype = new kA()).isPureReactComponent = !(2 * 3643 + 6926 + 17 * -836), zg.prototype.shouldComponentUpdate = function(o, g) {
  return Xg(this.props, o) || Xg(this.state, g);
};
var Dn = k.__b;
k.__b = function(o) {
  o.type && o.type.__f && o.ref && (o.props.ref = o.ref, o.ref = null), Dn && Dn(o);
};
var _a = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 4 * 458 + 2773 + -694;
function HI(o) {
  function g(t) {
    var e = OI({}, t);
    return delete e.ref, o(e, t.ref || null);
  }
  return g.$$typeof = _a, g.render = g, g.prototype.isReactComponent = g.__f = !(-3919 + 55 * -99 + 2 * 4682), g.displayName = "ForwardRef(" + (o.displayName || o.name) + ")", g;
}
var wn = function(o, g) {
  return o == null ? null : $A($A(o).map(g));
}, Xa = { map: wn, forEach: wn, count: function(o) {
  return o ? $A(o).length : -1 * -9887 + -7291 * 1 + 2596 * -1;
}, only: function(o) {
  var g = $A(o);
  if (-1 * 4289 + 4300 + -10 !== g.length) throw "Children.only";
  return g[-101 * -54 + 1433 * -4 + 278];
}, toArray: $A }, za = k.__e;
k.__e = function(o, g, t, e) {
  if (o.then) {
    for (var A, i = g; i = i.__; ) if ((A = i.__c) && A.__c) return g.__e == null && (g.__e = t.__e, g.__k = t.__k), A.__c(o, g);
  }
  za(o, g, t, e);
};
var mn = k.unmount;
function KI(o, g, t) {
  return o && (o.__c && o.__c.__H && (o.__c.__H.__.forEach(function(e) {
    typeof e.__c == "function" && e.__c();
  }), o.__c.__H = null), (o = OI({}, o)).__c != null && (o.__c.__P === t && (o.__c.__P = g), o.__c = null), o.__k = o.__k && o.__k.map(function(e) {
    return KI(e, g, t);
  })), o;
}
function TI(o, g, t) {
  return o && t && (o.__v = null, o.__k = o.__k && o.__k.map(function(e) {
    return TI(e, g, t);
  }), o.__c && o.__c.__P === g && (o.__e && t.appendChild(o.__e), o.__c.__e = !(960 * 8 + 509 + 19 * -431), o.__c.__P = t)), o;
}
function so() {
  this.__u = 37 * 69 + 732 * -4 + 375, this.t = null, this.__b = null;
}
function PI(o) {
  var g = o.__.__c;
  return g && g.__a && g.__a(o);
}
function $a(o) {
  var g, t, e;
  function A(i) {
    if (g || (g = o()).then(function(n) {
      t = n.default || n;
    }, function(n) {
      e = n;
    }), e) throw e;
    if (!t) throw g;
    return EA(t, i);
  }
  return A.displayName = "Lazy", A.__f = !0, A;
}
function Et() {
  this.u = null, this.o = null;
}
k.unmount = function(o) {
  var g = o.__c;
  g && g.__R && g.__R(), g && 29 * -264 + -1 * -1327 + -6361 * -1 & o.__u && (o.type = null), mn && mn(o);
}, (so.prototype = new kA()).__c = function(o, g) {
  var t = g.__c, e = this;
  e.t == null && (e.t = []), e.t.push(t);
  var A = PI(e.__v), i = !(6306 + -5 * 1261), n = function() {
    i || (i = !(5756 + -1270 * 2 + -3216), t.__R = null, A ? A(I) : I());
  };
  t.__R = n;
  var I = function() {
    if (!--e.__u) {
      if (e.state.__a) {
        var a = e.state.__a;
        e.__v.__k[2 * 2765 + -2 * -1826 + -9182] = TI(a, a.__c.__P, a.__c.__O);
      }
      var r;
      for (e.setState({ __a: e.__b = null }); r = e.t.pop(); ) r.forceUpdate();
    }
  };
  e.__u++ || -3303 + 2157 * 3 + -3136 & g.__u || e.setState({ __a: e.__b = e.__v.__k[21 * -257 + -1 * -199 + 5198] }), o.then(n, n);
}, so.prototype.componentWillUnmount = function() {
  this.t = [];
}, so.prototype.render = function(o, g) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), e = this.__v.__k[-2170 * 2 + -5024 + 2 * 4682].__c;
      this.__v.__k[-8400 + -6833 * 1 + 15233] = KI(this.__b, t, e.__O = e.__P);
    }
    this.__b = null;
  }
  var A = g.__a && EA(SA, null, o.fallback);
  return A && (A.__u &= -(-5721 + -4182 * -2 + -18 * 145)), [EA(SA, null, g.__a ? null : o.children), A];
};
var bn = function(o, g, t) {
  if (++t[-7291 + 4991 * -2 + 1 * 17274] === t[-1991 + 7 * 1253 + -226 * 30] && o.o.delete(g), o.props.revealOrder && (o.props.revealOrder[8610 + -2 * -4024 + 1 * -16658] !== "t" || !o.o.size)) for (t = o.u; t; ) {
    for (; t.length > 3094 + -6423 * -1 + 2 * -4757; ) t.pop()();
    if (t[-79 * -38 + -4 * -727 + -5909] < t[-59 * 38 + -1 * 4457 + -7 * -957]) break;
    o.u = t = t[5729 + 158 * -51 + -63 * -37];
  }
};
function Ar(o) {
  return this.getChildContext = function() {
    return o.context;
  }, o.children;
}
function er(o) {
  var g = this, t = o.i;
  g.componentWillUnmount = function() {
    re(null, g.l), g.l = null, g.i = null;
  }, g.i && g.i !== t && g.componentWillUnmount(), g.l || (g.i = t, g.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-1802 + 313 * 20 + -4458);
  }, appendChild: function(e) {
    this.childNodes.push(e), g.i.appendChild(e);
  }, insertBefore: function(e, A) {
    this.childNodes.push(e), g.i.appendChild(e);
  }, removeChild: function(e) {
    this.childNodes.splice(this.childNodes.indexOf(e) >>> 60 * -41 + -227 + 2688, 1), g.i.removeChild(e);
  } }), re(EA(Ar, { context: g.context }, o.__v), g.l);
}
function tr(o, g) {
  var t = {};
  t.__v = o, t.i = g;
  var e = EA(er, t);
  return e.containerInfo = g, e;
}
(Et.prototype = new kA()).__a = function(o) {
  var g = this, t = PI(g.__v), e = g.o.get(o);
  return e[951 * -1 + 39 * -178 + -9 * -877]++, function(A) {
    var i = function() {
      g.props.revealOrder ? (e.push(A), bn(g, o, e)) : A();
    };
    t ? t(i) : i();
  };
}, Et.prototype.render = function(o) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var g = $A(o.children);
  o.revealOrder && o.revealOrder[0] === "b" && g.reverse();
  for (var t = g.length; t--; ) this.o.set(g[t], this.u = [1489 * 1 + 15 * -186 + 1302, 0, this.u]);
  return o.children;
}, Et.prototype.componentDidUpdate = Et.prototype.componentDidMount = function() {
  var o = this;
  this.o.forEach(function(g, t) {
    bn(o, t, g);
  });
};
var qI = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -116830 * 1 + 1361 * -83 + 289896, or = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, gr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ir = /[A-Z0-9]/g, nr = typeof document < "u", Ir = function(o) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(o);
};
function ar(o, g, t) {
  return g.__k == null && (g.textContent = ""), re(o, g), typeof t == "function" && t(), o ? o.__c : null;
}
function rr(o, g, t) {
  return Li(o, g), typeof t == "function" && t(), o ? o.__c : null;
}
kA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(o) {
  Object.defineProperty(kA.prototype, o, { configurable: !(-6098 * -1 + 21 * 401 + -1 * 14519), get: function() {
    return this["UNSAFE_" + o];
  }, set: function(g) {
    var t = {};
    t.configurable = !(6016 + -299 * -15 + -10501), t.writable = !0, t.value = g, Object.defineProperty(this, o, t);
  } });
});
var Gn = k.event;
function Cr() {
}
function Br() {
  return this.cancelBubble;
}
function Qr() {
  return this.defaultPrevented;
}
k.event = function(o) {
  return Gn && (o = Gn(o)), o.persist = Cr, o.isPropagationStopped = Br, o.isDefaultPrevented = Qr, o.nativeEvent = o;
};
var co = {};
co.enumerable = !(1 * -8597 + -2424 + 1837 * 6), co.configurable = !(-279 * -30 + 1833 * -5 + 795), co.get = function() {
  return this.class;
};
var Oi, sr = co, kn = k.vnode;
k.vnode = function(o) {
  typeof o.type == "string" && function(g) {
    var t = g.props, e = g.type, A = {};
    for (var i in t) {
      var n = t[i];
      if (!(i === "value" && "defaultValue" in t && n == null || nr && i === "children" && e === "noscript" || i === "class" || i === "className")) {
        var I = i.toLowerCase();
        i === "defaultValue" && "value" in t && t.value == null ? i = "value" : i === "download" && n === !0 ? n = "" : I === "translate" && n === "no" ? n = !(1373 * -2 + 1 * 5051 + -32 * 72) : I === "ondoubleclick" ? i = "ondblclick" : I !== "onchange" || e !== "input" && e !== "textarea" || Ir(t.type) ? I === "onfocus" ? i = "onfocusin" : I === "onblur" ? i = "onfocusout" : gr.test(i) ? i = I : -(-263 * -23 + -4535 + -1 * 1513) === e.indexOf("-") && or.test(i) ? i = i.replace(ir, "-$&").toLowerCase() : n === null && (n = void 0) : I = i = "oninput", I === "oninput" && A[i = I] && (i = "oninputCapture"), A[i] = n;
      }
    }
    e == "select" && A.multiple && Array.isArray(A.value) && (A.value = $A(t.children).forEach(function(a) {
      a.props.selected = -(1454 * 1 + -2539 * 2 + 3625 * 1) != A.value.indexOf(a.props.value);
    })), e == "select" && A.defaultValue != null && (A.value = $A(t.children).forEach(function(a) {
      a.props.selected = A.multiple ? -(4473 + 6841 * 1 + -1257 * 9) != A.defaultValue.indexOf(a.props.value) : A.defaultValue == a.props.value;
    })), t.class && !t.className ? (A.class = t.class, Object.defineProperty(A, "className", sr)) : (t.className && !t.class || t.class && t.className) && (A.class = A.className = t.className), g.props = A;
  }(o), o.$$typeof = qI, kn && kn(o);
};
var Nn = k.__r;
k.__r = function(o) {
  Nn && Nn(o), Oi = o.__c;
};
var Sn = k.diffed;
k.diffed = function(o) {
  Sn && Sn(o);
  var g = o.props, t = o.__e;
  t != null && o.type === "textarea" && "value" in g && g.value !== t.value && (t.value = g.value == null ? "" : g.value), Oi = null;
};
var nA = {};
nA.readContext = function(o) {
  return Oi.__n[o.__c].props.value;
}, nA.useCallback = Ae, nA.useContext = Be, nA.useDebugValue = No, nA.useDeferredValue = _I, nA.useEffect = X, nA.useId = WI, nA.useImperativeHandle = UI, nA.useInsertionEffect = zI, nA.useLayoutEffect = gt, nA.useMemo = pA, nA.useReducer = Wi, nA.useRef = FA, nA.useState = fA, nA.useSyncExternalStore = $I, nA.useTransition = XI;
var jI = {};
jI.current = nA;
var ZI = {};
ZI.ReactCurrentDispatcher = jI;
var cr = ZI;
function xr(o) {
  return EA.bind(null, o);
}
function Bg(o) {
  return !!o && o.$$typeof === qI;
}
function Er(o) {
  return Bg(o) && o.type === SA;
}
function dr(o) {
  return !!o && !!o.displayName && (typeof o.displayName == "string" || o.displayName instanceof String) && o.displayName.startsWith("Memo(");
}
function lr(o) {
  return Bg(o) ? Ji.apply(null, arguments) : o;
}
function ur(o) {
  return !!o.__k && (re(null, o), !(2e3 * 1 + -1 * -8713 + -3571 * 3));
}
function hr(o) {
  return o && (o.base || o.nodeType === 1 && o) || null;
}
var fr = function(o, g) {
  return o(g);
}, pr = function(o, g) {
  return o(g);
}, yr = SA;
function VI(o) {
  o();
}
function _I(o) {
  return o;
}
function XI() {
  return [!(-2651 + -9 * 169 + 4173), VI];
}
var zI = gt, Dr = Bg;
function $I(o, g) {
  var t = g(), e = fA({ h: { __: t, v: g } }), A = e[-5 * -1459 + 5561 + -12856].h, i = e[3279 * -1 + 6955 + -3675];
  return gt(function() {
    A.__ = t, A.v = g, bg(A) && i({ h: A });
  }, [o, t, g]), X(function() {
    return bg(A) && i({ h: A }), o(function() {
      bg(A) && i({ h: A });
    });
  }, [o]), t;
}
function bg(o) {
  var g, t, e = o.v, A = o.__;
  try {
    var i = e();
    return !((g = A) === (t = i) && (-1658 + -462 * -5 + 2 * -326 !== g || (-5413 + 26 * -350 + 14514 * 1) / g == (2760 + -2 * 206 + -2347) / t) || g != g && t != t);
  } catch {
    return !(2 * 1979 + 23 * 255 + 11 * -893);
  }
}
var G = {};
G.useState = fA, G.useId = WI, G.useReducer = Wi, G.useEffect = X, G.useLayoutEffect = gt, G.useInsertionEffect = zI, G.useTransition = XI, G.useDeferredValue = _I, G.useSyncExternalStore = $I, G.startTransition = VI, G.useRef = FA, G.useImperativeHandle = UI, G.useMemo = pA, G.useCallback = Ae, G.useContext = Be, G.useDebugValue = No, G.version = "17.0.2", G.Children = Xa, G.render = ar, G.hydrate = rr, G.unmountComponentAtNode = ur, G.createPortal = tr, G.createElement = EA, G.createContext = tt, G.createFactory = xr, G.cloneElement = lr, G.createRef = Fa, G.Fragment = SA, G.isValidElement = Bg, G.isElement = Dr, G.isFragment = Er, G.isMemo = dr, G.findDOMNode = hr, G.Component = kA, G.PureComponent = zg, G.memo = Va, G.forwardRef = HI, G.flushSync = pr, G.unstable_batchedUpdates = fr, G.StrictMode = yr, G.Suspense = so, G.SuspenseList = Et, G.lazy = $a, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cr;
var Ge = G, wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mr(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function br(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
function Gr(o) {
  return o && Object.prototype.hasOwnProperty.call(o, "default") && Object.keys(o).length === 1 ? o.default : o;
}
function kr(o) {
  if (o.__esModule) return o;
  var g = o.default;
  if (typeof g == "function") {
    var t = function e() {
      return this instanceof e ? Reflect.construct(g, arguments, this.constructor) : g.apply(this, arguments);
    };
    t.prototype = g.prototype;
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
const Nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: wr,
  getAugmentedNamespace: kr,
  getDefaultExportFromCjs: mr,
  getDefaultExportFromNamespaceIfNotNamed: Gr,
  getDefaultExportFromNamespaceIfPresent: br
}, Symbol.toStringTag, { value: "Module" }));
var Sr = function(g, t, e, A) {
  var i = e ? e.call(A, g, t) : void 0;
  if (i !== void (-8529 + 2 * -1283 + 11095)) return !!i;
  if (g === t) return !0;
  if (typeof g != "object" || !g || typeof t != "object" || !t) return !1;
  var n = Object.keys(g), I = Object.keys(t);
  if (n.length !== I.length) return !1;
  for (var a = Object.prototype.hasOwnProperty.bind(t), r = -3 * -421 + 6912 + 8175 * -1; r < n.length; r++) {
    var Q = n[r];
    if (!a(Q)) return !1;
    var C = g[Q], x = t[Q];
    if (i = e ? e.call(A, C, x, Q) : void (1 * 8951 + -1254 + -179 * 43), i === !1 || i === void (-3539 * 1 + -1244 + 4783) && C !== x) return !1;
  }
  return !0;
};
const Fr = Nr.getDefaultExportFromCjs(Sr);
var P = "-ms-", wt = "-moz-", H = "-webkit-", A0 = "comm", Qg = "rule", Hi = "decl", Rr = "@import", e0 = "@keyframes", Mr = "@layer", t0 = Math.abs, Ki = String.fromCharCode, $g = Object.assign;
function vr(o, g) {
  return iA(o, -21 * -410 + 92 * 2 + -4397 * 2) ^ -1 * 358 + 385 * -13 + -104 * -52 ? (((g << -1140 + 63 * -67 + 5363 ^ iA(o, 0)) << -9404 + -6347 * 1 + 15753 ^ iA(o, -5 * -157 + -175 * 24 + 14 * 244)) << -2559 + -110 * -19 + 471 ^ iA(o, -19 * -463 + -8495 + 5 * -60)) << 2 * 515 + -5026 + 3998 ^ iA(o, 3) : 481 * -17 + 3690 + -4487 * -1;
}
function o0(o) {
  return o.trim();
}
function ZA(o, g) {
  return (o = g.exec(o)) ? o[7 * -1343 + 6918 + 1 * 2483] : o;
}
function N(o, g, t) {
  return o.replace(g, t);
}
function xo(o, g, t) {
  return o.indexOf(g, t);
}
function iA(o, g) {
  return o.charCodeAt(g) | 2582 * -2 + -29 * 14 + 5570;
}
function Ve(o, g, t) {
  return o.slice(g, t);
}
function YA(o) {
  return o.length;
}
function g0(o) {
  return o.length;
}
function dt(o, g) {
  return g.push(o), o;
}
function Lr(o, g) {
  return o.map(g).join("");
}
function Fn(o, g) {
  return o.filter(function(t) {
    return !ZA(t, g);
  });
}
var sg = -1 * 1042 + -6002 + 7045, _e = -2286 + 710 * -1 + 111 * 27, i0 = 0, RA = 662 + 331 * -2, tA = -19 * 125 + -4 * 1394 + 7951, it = "";
function cg(o, g, t, e, A, i, n, I) {
  var a = {};
  return a.value = o, a.root = g, a.parent = t, a.type = e, a.props = A, a.children = i, a.line = sg, a.column = _e, a.length = n, a.return = "", a.siblings = I, a;
}
function te(o, g) {
  return $g(cg("", null, null, "", null, null, 2667 + 2 * -1725 + 783, o.siblings), o, { length: -o.length }, g);
}
function ve(o) {
  for (; o.root; ) o = te(o.root, { children: [o] });
  dt(o, o.siblings);
}
function Jr() {
  return tA;
}
function Ur() {
  return tA = RA > 0 ? iA(it, --RA) : 0, _e--, tA === -5 * -989 + 8 * 251 + -6943 && (_e = -1637 * 2 + -733 * 6 + 7673, sg--), tA;
}
function vA() {
  return tA = RA < i0 ? iA(it, RA++) : 0, _e++, tA === 134 * -4 + 5505 + -4959 && (_e = -7587 + 6145 * -1 + 13733, sg++), tA;
}
function we() {
  return iA(it, RA);
}
function Eo() {
  return RA;
}
function xg(o, g) {
  return Ve(it, o, g);
}
function Ai(o) {
  switch (o) {
    case -1046 + -413 * -18 + -6388 * 1:
    case -1 * -4787 + -19 * 27 + -4265:
    case 10:
    case 13:
    case -4796 * -1 + 1 * 7167 + -11931:
      return 1 * 8486 + 2 * -2274 + 9 * -437;
    case -944 * 4 + 9606 + -5797:
    case -256 * 22 + 6419 + -744:
    case 44:
    case 4756 + -89 * 81 + 2500:
    case -4 * 1908 + -3547 + -11241 * -1:
    case -18 * -272 + -4551 + -281 * 1:
    case 6723 + 8 * -78 + -181 * 33:
    case -878 * 1 + -4354 + -37 * -143:
    case 749 * -6 + -6170 + 10787:
    case -4860 + 404 * -12 + 9833:
      return -3365 + 6 * -843 + 3 * 2809;
    case -5480 * -1 + 7337 + -12759:
      return 7 * -908 + 58 * -94 + 31 * 381;
    case -7303 + -1 * -39 + 7298:
    case -1581 + -776 * -6 + 22 * -138:
    case -1 * -6533 + 2039 + -8532:
    case -12 * 370 + -8272 + -217 * -59:
      return -45 * 170 + 1069 * -9 + 1 * 17273;
    case -1 * 2360 + 9 * -158 + -1 * -3823:
    case -2217 + 719 * 10 + -4880:
      return -6307 + 403 * -23 + -1 * -15577;
  }
  return -9045 + -1 * 5571 + 14616;
}
function Wr(o) {
  return sg = _e = 17 * 157 + -2889 + 13 * 17, i0 = YA(it = o), RA = -7549 + -211 * -2 + 7127 * 1, [];
}
function Yr(o) {
  return it = "", o;
}
function Gg(o) {
  return o0(xg(RA - (2908 + -57 * 51), ei(o === 7 * -1021 + -548 * 8 + 11622 ? o + (-927 + -1 * -929) : o === -608 * -15 + -830 * 4 + -5760 ? o + (2930 + -1 * 2985 + 56) : o)));
}
function Or(o) {
  for (; (tA = we()) && tA < -272 * 17 + 2006 * -2 + 8669; ) vA();
  return Ai(o) > -576 + 1 * 578 || Ai(tA) > 2 * 4273 + -5499 + -3044 ? "" : " ";
}
function Hr(o, g) {
  for (; --g && vA() && !(tA < 1711 + -1 * 1663 || tA > 7551 + 139 * 10 + -8839 || tA > 57 && tA < 2810 + 961 * 6 + -2837 * 3 || tA > 1 * 5273 + -9483 + 4280 && tA < -761 + 1 * 858); ) ;
  return xg(o, Eo() + (g < 3 * -461 + -7963 * -1 + 346 * -19 && we() == -2249 + -6 * -1557 + 307 * -23 && vA() == -5 * 1654 + 4492 + 3810));
}
function ei(o) {
  for (; vA(); ) switch (tA) {
    case o:
      return RA;
    case 6343 * -1 + -8089 + 14466:
    case -9022 + 25 * -37 + 9986:
      o !== -3672 + -1161 * -8 + -2 * 2791 && o !== -3511 + 1 * 6593 + 3043 * -1 && ei(tA);
      break;
    case 1 * 5089 + -8314 + 3265:
      o === -119 * -6 + -326 * -16 + 1963 * -3 && ei(o);
      break;
    case -4545 + 1 * -1382 + 1 * 6019:
      vA();
      break;
  }
  return RA;
}
function Kr(o, g) {
  for (; vA() && o + tA !== 41 * -62 + 1491 + 1098 + (71 * -125 + -1838 * 1 + 10723); ) if (o + tA === -1 * 6953 + 2730 + 1 * 4265 + (-1682 * 2 + -3 * -1682 + -20 * 82) && we() === -5 * -209 + 478 * 13 + -7212) break;
  return "/*" + xg(g, RA - (1148 + -1147 * 1)) + "*" + Ki(o === -12865 + -4 * -3228 ? o : vA());
}
function Tr(o) {
  for (; !Ai(we()); ) vA();
  return xg(o, RA);
}
function Pr(o) {
  return Yr(lo("", null, null, null, [""], o = Wr(o), -6353 + 158 * 23 + -1 * -2719, [-1680 + 1687 * 5 + 965 * -7], o));
}
function lo(o, g, t, e, A, i, n, I, a) {
  for (var r = 0, Q = -769 * -5 + -178 * -2 + -1 * 4201, C = n, x = 4120 + -2 * -4996 + -63 * 224, c = 7892 + 3946 * -2, E = 63 * -158 + 2832 + 1 * 7122, l = -1 * 4999 + -20 * -208 + 840, u = 5100 + -335 * -5 + -6774, s = -10110 + 10111 * 1, h = 8661 + 2 * 1283 + 103 * -109, m = "", R = A, M = i, J = e, D = m; u; ) switch (E = h, h = vA()) {
    case -7577 * 1 + -7637 + 15254:
      if (E != -9466 + 17 * 491 + 3 * 409 && iA(D, C - (-1500 + -19 * -79)) == 1 * -2867 + -6773 + 9698) {
        xo(D += N(Gg(h), "&", "&\f"), "&\f", t0(r ? I[r - (1050 + -21 * 162 + 1 * 2353)] : -5 * 1811 + 57 * -110 + 15325)) != -1 && (s = -1);
        break;
      }
    case -21 * 209 + -7552 + 11975:
    case 641 * -3 + 1 * -7698 + -92 * -105:
    case -427 + -28 * 259 + 7770:
      D += Gg(h);
      break;
    case 2 * 1511 + 5085 + -8098:
    case 4609 * 2 + -73 * 127 + 9 * 7:
    case -40 * -57 + -7943 + 946 * 6:
    case -7061 + 2 * -4263 + 15619 * 1:
      D += Or(E);
      break;
    case -2 * 3695 + 9 * 952 + -1086:
      D += Hr(Eo() - (503 * -1 + 23 * 286 + -6074), 7);
      continue;
    case -1010 * -4 + -2 * -2732 + -9457:
      switch (we()) {
        case -33 + -75 * -1:
        case 9456 + -1 * -5765 + 54 * -281:
          dt(qr(Kr(vA(), Eo()), g, t, a), a);
          break;
        default:
          D += "/";
      }
      break;
    case (-1794 + 1 * 1917) * l:
      I[r++] = YA(D) * s;
    case (-3850 + 51 * 1 + 981 * 4) * l:
    case -18 * 50 + -1 * 4762 + 5721:
    case 2285 * 1 + -356 * -10 + -5845:
      switch (h) {
        case -2 * -892 + 4350 + 3067 * -2:
        case 1 * -6827 + 1332 + 5620:
          u = 311 * -27 + 4 * 379 + 6881 * 1;
        case 4727 * -2 + 2 * 230 + 11 * 823 + Q:
          s == -(27 * -51 + -7 * -634 + 51 * -60) && (D = N(D, /\f/g, "")), c > 10445 + 1 * -10445 && YA(D) - C && dt(c > -2984 * -1 + 3539 + 1 * -6491 ? Mn(D + ";", e, t, C - (-161 * 51 + 33 * -178 + -7043 * -2), a) : Mn(N(D, " ", "") + ";", e, t, C - (-3029 * 3 + -7812 + -1 * -16901), a), a);
          break;
        case -4877 * 1 + 216 * 3 + 4288:
          D += ";";
        default:
          if (dt(J = Rn(D, g, t, r, Q, A, I, m, R = [], M = [], C, i), i), h === 1 * 124 + 2919 + -2920)
            if (Q === 9 * -17 + 34 + -17 * -7) lo(D, g, J, J, R, i, C, I, M);
            else switch (x === 6869 + -6770 * 1 && iA(D, 7742 + -7739 * 1) === 17796 + 17686 * -1 ? 1 * 6188 + 1569 * 4 + 1124 * -11 : x) {
              case -7367 * 1 + 5901 * 1 + 1566:
              case -1 * -943 + 6 * -1389 + 7499 * 1:
              case -7701 + 121 * -49 + -1 * -13739:
              case 115:
                lo(o, J, J, e && dt(Rn(o, J, J, -6521 * 1 + 393 + 3064 * 2, 1667 + -1667 * 1, A, I, m, A, R = [], C, M), M), A, M, C, I, e ? R : M);
                break;
              default:
                lo(D, J, J, J, [""], M, -2476 * 1 + 5611 * 1 + 5 * -627, I, M);
            }
      }
      r = Q = c = -2 * 719 + 12 * -79 + -1 * -2386, l = s = 3 * 1949 + -7421 + 1575, m = D = "", C = n;
      break;
    case 9 * -499 + -7362 * -1 + -2813:
      C = 1 + YA(D), c = E;
    default:
      if (l < -8584 + 3 * 823 + 6116) {
        if (h == 13 * 641 + 6495 + -173 * 85) --l;
        else if (h == -8927 * 1 + -9 * -61 + 8503 && l++ == -2713 * -2 + -322 + 29 * -176 && Ur() == 1 * 9521 + 1140 + -10536) continue;
      }
      switch (D += Ki(h), h * l) {
        case 1871 + -572 * -8 + -6409:
          s = Q > 0 ? 1 : (D += "\f", -(-8351 + 7694 * 1 + 658));
          break;
        case 5227 + 499 * 4 + -7179:
          I[r++] = (YA(D) - (5803 + -6 * 967)) * s, s = 16498 + 13 * -1269;
          break;
        case -59 * -163 + 1191 * -4 + 4789 * -1:
          we() === -281 * 1 + -3 * 31 + 419 * 1 && (D += Gg(vA())), x = we(), Q = C = YA(m = D += Tr(Eo())), h++;
          break;
        case 3 * 2038 + -8588 + 2519:
          E === -1 * -7907 + -9 * -716 + -14306 && YA(D) == 3438 + 3406 * 2 + -10248 && (l = -678 * 3 + -3514 + 5548);
      }
  }
  return i;
}
function Rn(o, g, t, e, A, i, n, I, a, r, Q, C) {
  for (var x = A - 1, c = A === -46 + -34 * -2 + -22 ? i : [""], E = g0(c), l = -1753 + -5 * -1041 + -3452, u = -7862 * -1 + 6 * -101 + -7256, s = -3041 + 3041 * 1; l < e; ++l) for (var h = -592 + -32 * -307 + 8 * -1154, m = Ve(o, x + (4102 + 5 * 1165 + -9926), x = t0(u = n[l])), R = o; h < E; ++h) (R = o0(u > 6960 + 16 * -435 ? c[h] + " " + m : N(m, /&\f/g, c[h]))) && (a[s++] = R);
  return cg(o, g, t, A === 9 * 394 + 4601 + -8147 ? Qg : I, a, r, Q, C);
}
function qr(o, g, t, e) {
  return cg(o, g, t, A0, Ki(Jr()), Ve(o, 8207 + -1 * -1123 + 8 * -1166, -(-53 * -71 + 1975 + -5736)), -15 * 208 + -2791 * -2 + -2462, e);
}
function Mn(o, g, t, e, A) {
  return cg(o, g, t, Hi, Ve(o, 0, e), Ve(o, e + (-142 * 1 + -159 * 59 + 1 * 9524), -(335 + -1 * 334)), e, A);
}
function n0(o, g, t) {
  switch (vr(o, g)) {
    case 5103:
      return H + "print-" + o + o;
    case 186 * 24 + -7723 + 1 * 8996:
    case 6130 + 29 * -251 + 5350:
    case 6810 + 5662 * -1 + 1 * 2029:
    case -2 * 2345 + 7270 + 853:
    case 1258 * -3 + 2173 * -3 + -17 * -702:
    case 4457:
    case -4014 + 1153 * 1 + 1 * 5782:
    case -5091 + 65 * -47 + 19 * 722:
    case 3851 * -1 + -49 * -21 + 706 * 13:
    case 9772 + 491 * -8:
    case -1 * -2109 + -8 * 523 + -2633 * -2:
    case 19 * -479 + 1 * 754 + 937 * 16:
    case 3005:
    case -9464 * -1 + 1628 + 4701 * -1:
    case 67 + -9728 * 1 + 15540:
    case 4978 + 464 * 2 + 283 * -1:
    case -834 * 9 + -1 * -5111 + -1706 * -5:
    case 4599:
    case 3062 + 1 * 7932 + -6139:
    case 7846 + -192 * 8 + 5 * -419:
    case -4447 + -252 * -43:
    case -69 * -69 + -8350 + -4349 * -2:
    case -1 * 9745 + 309 + 14801:
    case 41 + 6737 * 1 + -1157:
    case -6384 + 1 * 4629 + 2792 * 2:
      return H + o + o;
    case -4721 + -1585 * -6:
      return wt + o + o;
    case 411 * 25 + 4971 + -9897:
    case -428 + -14 * 487 + 11492:
    case -1 * -5276 + 1 * -6809 + 1 * 6343:
    case -7929 + -11857 * -1 + 152 * 20:
    case 5083 + 17 * 59 + 185 * -18:
      return H + o + wt + o + P + o + o;
    case 1 * -6537 + 7072 * 1 + 5401:
      switch (iA(o, g + (-724 * -3 + 1 * 705 + -2866))) {
        case 114:
          return H + o + P + N(o, /[svh]\w+-[tblr]{2}/, "tb") + o;
        case -51 * 127 + -1186 * 1 + 19 * 409:
          return H + o + P + N(o, /[svh]\w+-[tblr]{2}/, "tb-rl") + o;
        case 9 * 1080 + -8812 + -863:
          return H + o + P + N(o, /[svh]\w+-[tblr]{2}/, "lr") + o;
      }
    case -1 * -7165 + 1 * -9754 + 9417:
    case 3223 + 381 * -1 + -62 * -23:
    case 2903:
      return H + o + P + o + o;
    case -9437 * -1 + -1 * -7762 + 1 * -11034:
      return H + o + P + "flex-" + o + o;
    case 635 * -6 + 11 * -276 + 63 * 191:
      return H + o + N(o, /(\w+).+(:[^]+)/, H + "box-$1$2" + P + "flex-$1$2") + o;
    case -343 * -4 + 7451 + 1690 * -2:
      return H + o + P + "flex-item-" + N(o, /flex-|-self/g, "") + (ZA(o, /flex-|baseline/) ? "" : P + "grid-row-" + N(o, /flex-|-self/g, "")) + o;
    case -2873 + 629 * 12:
      return H + o + P + "flex-line-pack" + N(o, /align-content|flex-|-self/g, "") + o;
    case 18 * 569 + -1 * -9929 + -14623:
      return H + o + P + N(o, "shrink", "negative") + o;
    case 9760 + -4468 * 1:
      return H + o + P + N(o, "basis", "preferred-size") + o;
    case -1 * 8879 + -145 + 15084:
      return H + "box-" + N(o, "-grow", "") + H + o + P + N(o, "grow", "positive") + o;
    case 2 * -4937 + -4489 + -1 * -18917:
      return H + N(o, /([^-])(transform)/g, "$1" + H + "$2") + o;
    case 2 * 2983 + -2587 + 2808:
      return N(N(N(o, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), o, "") + o;
    case 67 * -11 + -700 + -6932 * -1:
    case 401 * 23 + -19 * 164 + -2148:
      return N(o, /(image-set\([^]*)/, H + "$1$`$1");
    case 11251 + -61 * 103:
      return N(N(o, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + P + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + o + o;
    case -854 + 439 * 11 + 225:
      if (!ZA(o, /flex-|baseline/)) return P + "grid-column-align" + Ve(o, g) + o;
      break;
    case 1063 + -139 * -11:
    case 3360:
      return P + N(o, "template-", "") + o;
    case -1 * 9844 + -1 * -7934 + 3147 * 2:
    case 5412 + -603 * 2 + -590:
      return t && t.some(function(e, A) {
        return g = A, ZA(e.props, /grid-\w+-end/);
      }) ? ~xo(o + (t = t[g].value), "span", 9734 + 157 * -62) ? o : P + N(o, "-start", "") + o + P + "grid-row-span:" + (~xo(t, "span", 3465 + 31 * -26 + -2659) ? ZA(t, /\d+/) : +ZA(t, /\d+/) - +ZA(o, /\d+/)) + ";" : P + N(o, "-start", "") + o;
    case 4896:
    case -5 * -1459 + -2608 + -1 * 559:
      return t && t.some(function(e) {
        return ZA(e.props, /grid-\w+-start/);
      }) ? o : P + N(N(o, "-end", "-span"), "span ", "") + o;
    case 18 * 523 + 547 * 6 + -8601:
    case -793 * 2 + -97 * -98 + -4337:
    case 4576 + -9202 * 1 + 8694:
    case -8524 + -2 * -488 + -480 * -21:
      return N(o, /(.+)-inline(.+)/, H + "$1$2") + o;
    case 5627 + 12679 * 1 + -10190:
    case -1 * 10721 + 5722 + 12058:
    case -541 * 12 + 3 * 1291 + 28 * 299:
    case 6164 + -1 * -6829 + 22 * -339:
    case -210 * -18 + -1 * -10273 + -8608:
    case 5701:
    case -9415 + -6 * -805 + 9518:
    case 23 * -242 + 3 * -1229 + 13930:
    case -923 + -2 * -3228:
    case 59 * 47 + -245 + -3 * -1087:
    case 5021:
    case 3928 + -93 * -9:
      if (YA(o) - (-1471 * 4 + 481 + 5404) - g > 9958 + -1123 * 3 + -6583 * 1) switch (iA(o, g + (10290 + -10289 * 1))) {
        case -6701 * 1 + 5622 + 1188:
          if (iA(o, g + (8598 + -2 * -3299 + -15192)) !== 1 * -5297 + 1 * 7900 + -2 * 1279) break;
        case -1 * 9617 + 8119 * 1 + -20 * -80:
          return N(o, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + wt + (iA(o, g + (-1991 + 85 * -93 + 9899)) == -9257 + 1873 * 5 ? "$3" : "$2-$3")) + o;
        case 347 + -1 * 232:
          return ~xo(o, "stretch", 3010 + 301 * -10) ? n0(N(o, "stretch", "fill-available"), g, t) + o : o;
      }
      break;
    case 5152:
    case -1777 + -1 * -7829 + -132:
      return N(o, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(e, A, i, n, I, a, r) {
        return P + A + ":" + i + r + (n ? P + A + "-span:" + (I ? a : +a - +i) + r : "") + o;
      });
    case 853 * 10 + 1 * 1009 + -4590:
      if (iA(o, g + (8699 * 1 + 1908 + 10601 * -1)) === 121) return N(o, ":", ":" + H) + o;
      break;
    case 3056 + 1694 * 2:
      switch (iA(o, iA(o, -1 * -7555 + -7305 * -1 + -14846 * 1) === 45 ? -267 * 19 + -3489 + -44 * -195 : 11)) {
        case -1 * 1085 + 6568 + 1 * -5363:
          return N(o, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + H + (iA(o, 14) === -5 * 1979 + -2638 + -662 * -19 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + P + "$2box$3") + o;
        case -343 * 6 + -1 * -3943 + -5 * 357:
          return N(o, ":", ":" + P) + o;
      }
      break;
    case 5719:
    case -12780 + -1 * -15427:
    case 1048 + -1 * -1087:
    case -9832 + 104 * -64 + 20415:
    case -5097 * -1 + 7685 + -1 * 10391:
      return N(o, "scroll-", "scroll-snap-") + o;
  }
  return o;
}
function So(o, g) {
  for (var t = "", e = 122 * -19 + -845 + 3163; e < o.length; e++) t += g(o[e], e, o, g) || "";
  return t;
}
function jr(o, g, t, e) {
  switch (o.type) {
    case Mr:
      if (o.children.length) break;
    case Rr:
    case Hi:
      return o.return = o.return || o.value;
    case A0:
      return "";
    case e0:
      return o.return = o.value + "{" + So(o.children, e) + "}";
    case Qg:
      if (!YA(o.value = o.props.join(","))) return "";
  }
  return YA(t = So(o.children, e)) ? o.return = o.value + "{" + t + "}" : "";
}
function Zr(o) {
  var g = g0(o);
  return function(t, e, A, i) {
    for (var n = "", I = 3412 * 1 + 27 * -306 + 1 * 4850; I < g; I++) n += o[I](t, e, A, i) || "";
    return n;
  };
}
function Vr(o) {
  return function(g) {
    g.root || (g = g.return) && o(g);
  };
}
function _r(o, g, t, e) {
  if (o.length > -(-2 * 4933 + -7404 + -5757 * -3) && !o.return)
    switch (o.type) {
      case Hi:
        o.return = n0(o.value, o.length, t);
        return;
      case e0:
        return So([te(o, { value: N(o.value, "@", "@" + H) })], e);
      case Qg:
        if (o.length) return Lr(t = o.props, function(A) {
          switch (ZA(A, e = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              ve(te(o, { props: [N(A, /:(read-\w+)/, ":" + wt + "$1")] }));
              var i = {};
              i.props = [A], ve(te(o, i)), $g(o, { props: Fn(t, e) });
              break;
            case "::placeholder":
              ve(te(o, { props: [N(A, /:(plac\w+)/, ":" + H + "input-$1")] })), ve(te(o, { props: [N(A, /:(plac\w+)/, ":" + wt + "$1")] })), ve(te(o, { props: [N(A, /:(plac\w+)/, P + "input-$1")] }));
              var n = {};
              n.props = [A], ve(te(o, n)), $g(o, { props: Fn(t, e) });
              break;
          }
          return "";
        });
    }
}
var b = {};
b.animationIterationCount = 1, b.aspectRatio = 1, b.borderImageOutset = 1, b.borderImageSlice = 1, b.borderImageWidth = 1, b.boxFlex = 1, b.boxFlexGroup = 1, b.boxOrdinalGroup = 1, b.columnCount = 1, b.columns = 1, b.flex = 1, b.flexGrow = 1, b.flexPositive = 1, b.flexShrink = 1, b.flexNegative = 1, b.flexOrder = 1, b.gridRow = 1, b.gridRowEnd = 1, b.gridRowSpan = 1, b.gridRowStart = 1, b.gridColumn = 1, b.gridColumnEnd = 1, b.gridColumnSpan = 1, b.gridColumnStart = 1, b.msGridRow = 1, b.msGridRowSpan = 1, b.msGridColumn = 1, b.msGridColumnSpan = 1, b.fontWeight = 1, b.lineHeight = 1, b.opacity = 1, b.order = 1, b.orphans = 1, b.tabSize = 1, b.widows = 1, b.zIndex = 1, b.zoom = 1, b.WebkitLineClamp = 1, b.fillOpacity = 1, b.floodOpacity = 1, b.stopOpacity = 1, b.strokeDasharray = 1, b.strokeDashoffset = 1, b.strokeMiterlimit = 1, b.strokeOpacity = 1, b.strokeWidth = 1;
var Xr = b, Y = {}, ke = typeof process < "u" && void (-4008 + 668 * 6) !== Y && (Y.REACT_APP_SC_ATTR || Y.SC_ATTR) || "data-styled", I0 = "active", a0 = "data-styled-version", Eg = "6.1.11", Ti = `/*!sc*/
`, Pi = typeof window < "u" && "HTMLElement" in window, zr = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (5447 * 1 + 1205 + -6652) !== Y && void (1167 + 157 * 20 + -4307) !== Y.REACT_APP_SC_DISABLE_SPEEDY && Y.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Y.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Y.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-62 * 75 + -2840 + -535 * -14) !== Y && void (2726 + -8398 * 1 + 5672) !== Y.SC_DISABLE_SPEEDY && Y.SC_DISABLE_SPEEDY !== "" ? Y.SC_DISABLE_SPEEDY !== "false" && Y.SC_DISABLE_SPEEDY : Y.NODE_ENV !== "production"), vn = /invalid hook call/i, $t = /* @__PURE__ */ new Set(), $r = function(o, g) {
  if (Y.NODE_ENV !== "production") {
    var t = g ? ' with the id of "'.concat(g, '"') : "", e = "The component ".concat(o).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, A = console.error;
    try {
      var i = !0;
      console.error = function(n) {
        for (var I = [], a = 6450 + -22 * 289 + 7 * -13; a < arguments.length; a++) I[a - (-6733 + 14 * 481)] = arguments[a];
        vn.test(n) ? (i = !1, $t.delete(e)) : A.apply(void (9217 * 1 + 5561 + 1642 * -9), je([n], I, !1));
      }, FA(), i && !$t.has(e) && (console.warn(e), $t.add(e));
    } catch (n) {
      vn.test(n.message) && $t.delete(e);
    } finally {
      console.error = A;
    }
  }
}, dg = Object.freeze([]), Xe = Object.freeze({});
function AC(o, g, t) {
  return void (1488 * -2 + -5 * 183 + -3 * -1297) === t && (t = Xe), o.theme !== t.theme && o.theme || g || t.theme;
}
var ti = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), eC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, tC = /(^-|-$)/g;
function Ln(o) {
  return o.replace(eC, "-").replace(tC, "");
}
var oC = /(a)(d)/gi, Ao = -134 * -41 + 1 * 7495 + -12937, Jn = function(o) {
  return String.fromCharCode(o + (o > -1 * 8293 + -2276 * -4 + -6 * 131 ? 39 : -8836 + -625 * -2 + 7683));
};
function oi(o) {
  var g, t = "";
  for (g = Math.abs(o); g > Ao; g = g / Ao | -11 * -907 + -1555 * -5 + -17752) t = Jn(g % Ao) + t;
  return (Jn(g % Ao) + t).replace(oC, "$1-$2");
}
var kg, r0 = 43 * 173 + 6 * -412 + 207 * 2, de = function(o, g) {
  for (var t = g.length; t; ) o = (-8597 + 9187 * 1 + -557) * o ^ g.charCodeAt(--t);
  return o;
}, C0 = function(o) {
  return de(r0, o);
};
function gC(o) {
  return oi(C0(o) >>> 181 * 40 + -2 * -2904 + -14 * 932);
}
function B0(o) {
  return Y.NODE_ENV !== "production" && typeof o == "string" && o || o.displayName || o.name || "Component";
}
function Ng(o) {
  return typeof o == "string" && (Y.NODE_ENV === "production" || o.charAt(5880 + 179 * -43 + 23 * 79) === o.charAt(0).toLowerCase());
}
var bA = {};
bA.childContextTypes = !0, bA.contextType = !0, bA.contextTypes = !0, bA.defaultProps = !0, bA.displayName = !0, bA.getDefaultProps = !0, bA.getDerivedStateFromError = !0, bA.getDerivedStateFromProps = !0, bA.mixins = !0, bA.propTypes = !0, bA.type = !0;
var oe = {};
oe.name = !0, oe.length = !0, oe.prototype = !0, oe.caller = !0, oe.callee = !0, oe.arguments = !0, oe.arity = !0;
var xe = {};
xe.$$typeof = !0, xe.compare = !0, xe.defaultProps = !0, xe.displayName = !0, xe.propTypes = !0, xe.type = !0;
var Je = {};
Je.$$typeof = !0, Je.render = !0, Je.defaultProps = !0, Je.displayName = !0, Je.propTypes = !0;
var Q0 = typeof Symbol == "function" && Symbol.for, s0 = Q0 ? Symbol.for("react.memo") : -7537 + -1 * -107524 + -39872, iC = Q0 ? Symbol.for("react.forward_ref") : 104767 + -5 * 8931, nC = bA, IC = oe, c0 = xe, aC = ((kg = {})[iC] = Je, kg[s0] = c0, kg);
function Un(o) {
  return ("type" in (g = o) && g.type.$$typeof) === s0 ? c0 : "$$typeof" in o ? aC[o.$$typeof] : nC;
  var g;
}
var rC = Object.defineProperty, CC = Object.getOwnPropertyNames, Wn = Object.getOwnPropertySymbols, BC = Object.getOwnPropertyDescriptor, QC = Object.getPrototypeOf, Yn = Object.prototype;
function x0(o, g, t) {
  if (typeof g != "string") {
    if (Yn) {
      var e = QC(g);
      e && e !== Yn && x0(o, e, t);
    }
    var A = CC(g);
    Wn && (A = A.concat(Wn(g)));
    for (var i = Un(o), n = Un(g), I = 7726 * -1 + 1657 * 2 + -4412 * -1; I < A.length; ++I) {
      var a = A[I];
      if (!(a in IC || t && t[a] || n && a in n || i && a in i)) {
        var r = BC(g, a);
        try {
          rC(o, a, r);
        } catch {
        }
      }
    }
  }
  return o;
}
function ze(o) {
  return typeof o == "function";
}
function qi(o) {
  return typeof o == "object" && "styledComponentId" in o;
}
function ue(o, g) {
  return o && g ? "".concat(o, " ").concat(g) : o || g || "";
}
function On(o, g) {
  if (2563 * -2 + 2 * -668 + 359 * 18 === o.length) return "";
  for (var t = o[1742 + 26 * -67], e = -9376 + 4481 * -1 + 13858; e < o.length; e++) t += o[e];
  return t;
}
function $e(o) {
  return o !== null && typeof o == "object" && o.constructor.name === Object.name && !("props" in o && o.$$typeof);
}
function gi(o, g, t) {
  if (void (7258 + 7258 * -1) === t && (t = !1), !t && !$e(o) && !Array.isArray(o)) return g;
  if (Array.isArray(g))
    for (var e = -347 * 2 + 1267 * 1 + 3 * -191; e < g.length; e++) o[e] = gi(o[e], g[e]);
  else if ($e(g))
    for (var e in g) o[e] = gi(o[e], g[e]);
  return o;
}
function ji(o, g) {
  var t = {};
  t.value = g, Object.defineProperty(o, "toString", t);
}
var oA = {};
oA[1] = `Cannot create styled-component for component: %s.

`, oA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, oA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, oA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, oA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, oA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, oA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', oA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, oA[9] = "Missing document `<head>`\n\n", oA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, oA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, oA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", oA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, oA[14] = `ThemeProvider: "theme" prop is required.

`, oA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", oA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, oA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, oA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var sC = Y.NODE_ENV !== "production" ? oA : {};
function cC() {
  for (var o = [], g = 5259 + 1 * -5259; g < arguments.length; g++) o[g] = arguments[g];
  for (var t = o[-1 * 5981 + 3 * 3163 + 4 * -877], e = [], A = -6598 + 7 * -625 + -62 * -177, i = o.length; A < i; A += 8223 + 8222 * -1) e.push(o[A]);
  return e.forEach(function(n) {
    t = t.replace(/%[a-z]/, n);
  }), t;
}
function nt(o) {
  for (var g = [], t = -6979 + 131 * 19 + -3 * -1497; t < arguments.length; t++) g[t - (4497 + -16 * 281)] = arguments[t];
  return Y.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(o, " for more information.").concat(g.length > -3451 + 449 * 1 + 3002 ? " Args: ".concat(g.join(", ")) : "")) : new Error(cC.apply(void (-13326 + -13326 * -1), je([sC[o]], g, !1)).trim());
}
var xC = function() {
  function o(g) {
    this.groupSizes = new Uint32Array(512), this.length = -8 * 126 + 1 * 5179 + -3659 * 1, this.tag = g;
  }
  return o.prototype.indexOfGroup = function(g) {
    for (var t = -1 * -7837 + -6 * 859 + -2683 * 1, e = 7127 * -1 + 225 + 6902; e < g; e++) t += this.groupSizes[e];
    return t;
  }, o.prototype.insertRules = function(g, t) {
    if (g >= this.groupSizes.length) {
      for (var e = this.groupSizes, A = e.length, i = A; g >= i; ) if ((i <<= 5770 + 1 * 9662 + -15431) < -8574 + 71 * 137 + 1153 * -1) throw nt(16, "".concat(g));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(e), this.length = i;
      for (var n = A; n < i; n++) this.groupSizes[n] = -2812 + -19 * -148;
    }
    for (var I = this.indexOfGroup(g + 1), a = (n = -7080 + -1180 * -6, t.length); n < a; n++) this.tag.insertRule(I, t[n]) && (this.groupSizes[g]++, I++);
  }, o.prototype.clearGroup = function(g) {
    if (g < this.length) {
      var t = this.groupSizes[g], e = this.indexOfGroup(g), A = e + t;
      this.groupSizes[g] = 2669 * -3 + 5314 + -1 * -2693;
      for (var i = e; i < A; i++) this.tag.deleteRule(e);
    }
  }, o.prototype.getGroup = function(g) {
    var t = "";
    if (g >= this.length || -166 * 37 + 9141 + 1 * -2999 === this.groupSizes[g]) return t;
    for (var e = this.groupSizes[g], A = this.indexOfGroup(g), i = A + e, n = A; n < i; n++) t += "".concat(this.tag.getRule(n)).concat(Ti);
    return t;
  }, o;
}(), EC = -2 * 1161 + -83 * -22 + 497 << 47 * 17 + -525 + -244, uo = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), ho = -8861 + 9 * 833 + 1365, eo = function(o) {
  if (uo.has(o)) return uo.get(o);
  for (; Fo.has(ho); ) ho++;
  var g = ho++;
  if (Y.NODE_ENV !== "production" && ((1499 * -4 + 3900 + 2096 | g) < -1352 + -52 * -26 || g > EC)) throw nt(-7859 + 9 * -1046 + 113 * 153, "".concat(g));
  return uo.set(o, g), Fo.set(g, o), g;
}, dC = function(o, g) {
  ho = g + 1, uo.set(o, g), Fo.set(g, o);
}, lC = "style[".concat(ke, "][").concat(a0, '="').concat(Eg, '"]'), uC = new RegExp("^".concat(ke, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), hC = function(o, g, t) {
  for (var e, A = t.split(","), i = -848 + -212 * -4, n = A.length; i < n; i++) (e = A[i]) && o.registerName(g, e);
}, fC = function(o, g) {
  for (var t, e = ((t = g.textContent) !== null && t !== void 0 ? t : "").split(Ti), A = [], i = 0, n = e.length; i < n; i++) {
    var I = e[i].trim();
    if (I) {
      var a = I.match(uC);
      if (a) {
        var r = 0 | parseInt(a[1], 10), Q = a[-2 * -2956 + 9731 + -1 * 15641];
        -7049 + -136 * -22 + 4057 !== r && (dC(Q, r), hC(o, Q, a[-6725 + 58 * 116]), o.getTag().insertRules(r, A)), A.length = 1 * 4779 + 53 * 167 + 58 * -235;
      } else A.push(I);
    }
  }
};
function pC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var E0 = function(o) {
  var g = document.head, t = o || g, e = document.createElement("style"), A = function(I) {
    var a = Array.from(I.querySelectorAll("style[".concat(ke, "]")));
    return a[a.length - (3131 * -1 + -9239 * 1 + 12371)];
  }(t), i = void (-1 * -9745 + 2517 * -1 + -7228) !== A ? A.nextSibling : null;
  e.setAttribute(ke, I0), e.setAttribute(a0, Eg);
  var n = pC();
  return n && e.setAttribute("nonce", n), t.insertBefore(e, i), e;
}, yC = function() {
  function o(g) {
    this.element = E0(g), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var e = document.styleSheets, A = 4 * 5 + 1 * -2593 + 2573, i = e.length; A < i; A++) {
        var n = e[A];
        if (n.ownerNode === t) return n;
      }
      throw nt(-1209 + 613 * 2);
    }(this.element), this.length = -2911 + -1813 * 2 + -2179 * -3;
  }
  return o.prototype.insertRule = function(g, t) {
    try {
      return this.sheet.insertRule(t, g), this.length++, !0;
    } catch {
      return !1;
    }
  }, o.prototype.deleteRule = function(g) {
    this.sheet.deleteRule(g), this.length--;
  }, o.prototype.getRule = function(g) {
    var t = this.sheet.cssRules[g];
    return t && t.cssText ? t.cssText : "";
  }, o;
}(), DC = function() {
  function o(g) {
    this.element = E0(g), this.nodes = this.element.childNodes, this.length = -988 * 4 + -1 * 7113 + -2213 * -5;
  }
  return o.prototype.insertRule = function(g, t) {
    if (g <= this.length && g >= 101 * 54 + -93 * 1 + 1787 * -3) {
      var e = document.createTextNode(t);
      return this.element.insertBefore(e, this.nodes[g] || null), this.length++, !0;
    }
    return !1;
  }, o.prototype.deleteRule = function(g) {
    this.element.removeChild(this.nodes[g]), this.length--;
  }, o.prototype.getRule = function(g) {
    return g < this.length ? this.nodes[g].textContent : "";
  }, o;
}(), wC = function() {
  function o(g) {
    this.rules = [], this.length = -1 * 6367 + 5 * 1745 + -2358;
  }
  return o.prototype.insertRule = function(g, t) {
    return g <= this.length && (this.rules.splice(g, 1 * -9519 + -6630 + 16149, t), this.length++, !0);
  }, o.prototype.deleteRule = function(g) {
    this.rules.splice(g, -7927 + 1 * 613 + 7315), this.length--;
  }, o.prototype.getRule = function(g) {
    return g < this.length ? this.rules[g] : "";
  }, o;
}(), Hn = Pi, mC = { isServer: !Pi, useCSSOMInjection: !zr }, d0 = function() {
  function o(g, t, e) {
    void (-1060 + 22 * 425 + -8290) === g && (g = Xe), void (-4861 + -4861 * -1) === t && (t = {});
    var A = this;
    this.options = hA(hA({}, mC), g), this.gs = t, this.names = new Map(e), this.server = !!g.isServer, !this.server && Pi && Hn && (Hn = !1, function(i) {
      for (var n = document.querySelectorAll(lC), I = -3 * -3157 + -7093 + -2378, a = n.length; I < a; I++) {
        var r = n[I];
        r && r.getAttribute(ke) !== I0 && (fC(i, r), r.parentNode && r.parentNode.removeChild(r));
      }
    }(this)), ji(this, function() {
      return function(i) {
        for (var n = i.getTag(), I = n.length, a = "", r = function(C) {
          var x = function(s) {
            return Fo.get(s);
          }(C);
          if (void (1 * 6157 + 1 * 641 + -66 * 103) === x) return "continue";
          var c = i.names.get(x), E = n.getGroup(C);
          if (void (-2948 + -737 * -4) === c || -14117 + 743 * 19 === E.length) return "continue";
          var l = "".concat(ke, ".g").concat(C, '[id="').concat(x, '"]'), u = "";
          void (8319 + -1 * 9521 + 2 * 601) !== c && c.forEach(function(s) {
            s.length > 4564 + 4 * -1141 && (u += "".concat(s, ","));
          }), a += "".concat(E).concat(l, '{content:"').concat(u, '"}').concat(Ti);
        }, Q = -2 * 3779 + 2179 * 4 + 1158 * -1; Q < I; Q++) r(Q);
        return a;
      }(A);
    });
  }
  return o.registerId = function(g) {
    return eo(g);
  }, o.prototype.reconstructWithOptions = function(g, t) {
    return t === void 0 && (t = !0), new o(hA(hA({}, this.options), g), this.gs, t && this.names || void (-18069 + -3 * -6023));
  }, o.prototype.allocateGSInstance = function(g) {
    return this.gs[g] = (this.gs[g] || -192 * 28 + 2282 + -182 * -17) + (-76 * -129 + -36 * -124 + 1297 * -11);
  }, o.prototype.getTag = function() {
    return this.tag || (this.tag = (g = function(t) {
      var e = t.useCSSOMInjection, A = t.target;
      return t.isServer ? new wC(A) : e ? new yC(A) : new DC(A);
    }(this.options), new xC(g)));
    var g;
  }, o.prototype.hasNameForId = function(g, t) {
    return this.names.has(g) && this.names.get(g).has(t);
  }, o.prototype.registerName = function(g, t) {
    if (eo(g), this.names.has(g)) this.names.get(g).add(t);
    else {
      var e = /* @__PURE__ */ new Set();
      e.add(t), this.names.set(g, e);
    }
  }, o.prototype.insertRules = function(g, t, e) {
    this.registerName(g, t), this.getTag().insertRules(eo(g), e);
  }, o.prototype.clearNames = function(g) {
    this.names.has(g) && this.names.get(g).clear();
  }, o.prototype.clearRules = function(g) {
    this.getTag().clearGroup(eo(g)), this.clearNames(g);
  }, o.prototype.clearTag = function() {
    this.tag = void (12 * 767 + 1766 * -1 + -7438);
  }, o;
}(), bC = /&/g, GC = /^\s*\/\/.*$/gm;
function l0(o, g) {
  return o.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(g, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(g, " ")), t.props = t.props.map(function(e) {
      return "".concat(g, " ").concat(e);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = l0(t.children, g)), t;
  });
}
function u0(o) {
  var g, t, e, A = o === void 0 ? Xe : o, i = A.options, n = void (5 * 461 + -1697 * -2 + 41 * -139) === i ? Xe : i, I = A.plugins, a = void (-1 * 4322 + -69 * -142 + 1 * -5476) === I ? dg : I, r = function(x, c, E) {
    return E.startsWith(t) && E.endsWith(t) && E.replaceAll(t, "").length > 0 ? ".".concat(g) : x;
  }, Q = a.slice();
  Q.push(function(x) {
    x.type === Qg && x.value.includes("&") && (x.props[3 * 2171 + 4250 + -10763] = x.props[-1 * 8627 + -8126 + 1 * 16753].replace(bC, t).replace(e, r));
  }), n.prefix && Q.push(_r), Q.push(jr);
  var C = function(x, c, E, l) {
    void (-1 * 6929 + -9042 + 15971 * 1) === c && (c = ""), E === void 0 && (E = ""), void (2358 + 240 * -1 + 2118 * -1) === l && (l = "&"), g = l, t = c, e = new RegExp("\\".concat(t, "\\b"), "g");
    var u = x.replace(GC, ""), s = Pr(E || c ? "".concat(E, " ").concat(c, " { ").concat(u, " }") : u);
    n.namespace && (s = l0(s, n.namespace));
    var h = [];
    return So(s, Zr(Q.concat(Vr(function(m) {
      return h.push(m);
    })))), h;
  };
  return C.hash = a.length ? a.reduce(function(x, c) {
    return c.name || nt(-89 * 43 + -9069 + 12911), de(x, c.name);
  }, r0).toString() : "", C;
}
var kC = new d0(), ii = u0(), Zi = Ge.createContext({ shouldForwardProp: void (1 * -3789 + 8534 + 73 * -65), styleSheet: kC, stylis: ii });
Zi.Consumer;
var NC = Ge.createContext(void (631 * -3 + 1 * 7991 + -6098));
function ni() {
  return Be(Zi);
}
function SC(o) {
  var g = fA(o.stylisPlugins), t = g[13 * -715 + 7889 + 1406], e = g[2160 + -603 * -14 + 1 * -10601], A = ni().styleSheet, i = pA(function() {
    var Q = A, C = {};
    return C.useCSSOMInjection = !1, o.sheet ? Q = o.sheet : o.target && (Q = Q.reconstructWithOptions({ target: o.target }, !1)), o.disableCSSOMInjection && (Q = Q.reconstructWithOptions(C)), Q;
  }, [o.disableCSSOMInjection, o.sheet, o.target, A]), n = pA(function() {
    var Q = {};
    Q.namespace = o.namespace, Q.prefix = o.enableVendorPrefixes;
    var C = {};
    return C.options = Q, C.plugins = t, u0(C);
  }, [o.enableVendorPrefixes, o.namespace, t]);
  X(function() {
    Fr(t, o.stylisPlugins) || e(o.stylisPlugins);
  }, [o.stylisPlugins]);
  var I = pA(function() {
    var Q = {};
    return Q.shouldForwardProp = o.shouldForwardProp, Q.styleSheet = i, Q.stylis = n, Q;
  }, [o.shouldForwardProp, i, n]), a = {};
  a.value = I;
  var r = {};
  return r.value = n, Ge.createElement(Zi.Provider, a, Ge.createElement(NC.Provider, r, o.children));
}
var Kn = function() {
  function o(g, t) {
    var e = this;
    this.inject = function(A, i) {
      void (29 * -19 + 1814 * 4 + -1341 * 5) === i && (i = ii);
      var n = e.name + i.hash;
      A.hasNameForId(e.id, n) || A.insertRules(e.id, n, i(e.rules, n, "@keyframes"));
    }, this.name = g, this.id = "sc-keyframes-".concat(g), this.rules = t, ji(this, function() {
      throw nt(191 * 13 + -1 * -4943 + -7414, String(e.name));
    });
  }
  return o.prototype.getName = function(g) {
    return void (1 * 2770 + -807 + -1963) === g && (g = ii), this.name + g.hash;
  }, o;
}(), FC = function(o) {
  return o >= "A" && o <= "Z";
};
function Tn(o) {
  for (var g = "", t = -1 * 3777 + -1 * -8465 + -4688; t < o.length; t++) {
    var e = o[t];
    if (280 + -1714 * -1 + -1993 === t && e === "-" && o[-5122 + 2 * -503 + 6128] === "-") return o;
    FC(e) ? g += "-" + e.toLowerCase() : g += e;
  }
  return g.startsWith("ms-") ? "-" + g : g;
}
var h0 = function(o) {
  return o == null || o === !1 || o === "";
}, f0 = function(o) {
  var g, t, e = [];
  for (var A in o) {
    var i = o[A];
    o.hasOwnProperty(A) && !h0(i) && (Array.isArray(i) && i.isCss || ze(i) ? e.push("".concat(Tn(A), ":"), i, ";") : $e(i) ? e.push.apply(e, je(je(["".concat(A, " {")], f0(i), !1), ["}"], !1)) : e.push("".concat(Tn(A), ": ").concat((g = A, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || -3 * -1607 + -3 * 238 + -4107 === t || g in Xr || g.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return e;
};
function me(o, g, t, e) {
  if (h0(o)) return [];
  if (qi(o)) return [".".concat(o.styledComponentId)];
  if (ze(o)) {
    if (!ze(i = o) || i.prototype && i.prototype.isReactComponent || !g) return [o];
    var A = o(g);
    return Y.NODE_ENV === "production" || typeof A != "object" || Array.isArray(A) || A instanceof Kn || $e(A) || A === null || console.error("".concat(B0(o), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(A, g, t, e);
  }
  var i;
  return o instanceof Kn ? t ? (o.inject(t, e), [o.getName(e)]) : [o] : $e(o) ? f0(o) : Array.isArray(o) ? Array.prototype.concat.apply(dg, o.map(function(n) {
    return me(n, g, t, e);
  })) : [o.toString()];
}
function RC(o) {
  for (var g = -88 * -31 + -6213 + 3485; g < o.length; g += 1) {
    var t = o[g];
    if (ze(t) && !qi(t)) return !1;
  }
  return !0;
}
var MC = C0(Eg), vC = function() {
  function o(g, t, e) {
    this.rules = g, this.staticRulesId = "", this.isStatic = Y.NODE_ENV === "production" && (void (-465 * 3 + -57 * -173 + -8466) === e || e.isStatic) && RC(g), this.componentId = t, this.baseHash = de(MC, t), this.baseStyle = e, d0.registerId(t);
  }
  return o.prototype.generateAndInjectStyles = function(g, t, e) {
    var A = this.baseStyle ? this.baseStyle.generateAndInjectStyles(g, t, e) : "";
    if (this.isStatic && !e.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) A = ue(A, this.staticRulesId);
      else {
        var i = On(me(this.rules, g, t, e)), n = oi(de(this.baseHash, i) >>> -51 * 119 + -1336 + 7405);
        if (!t.hasNameForId(this.componentId, n)) {
          var I = e(i, ".".concat(n), void 0, this.componentId);
          t.insertRules(this.componentId, n, I);
        }
        A = ue(A, n), this.staticRulesId = n;
      }
    else {
      for (var a = de(this.baseHash, e.hash), r = "", Q = 93 + -93 * 1; Q < this.rules.length; Q++) {
        var C = this.rules[Q];
        if (typeof C == "string") r += C, Y.NODE_ENV !== "production" && (a = de(a, C));
        else if (C) {
          var x = On(me(C, g, t, e));
          a = de(a, x + Q), r += x;
        }
      }
      if (r) {
        var c = oi(a >>> 0);
        t.hasNameForId(this.componentId, c) || t.insertRules(this.componentId, c, e(r, ".".concat(c), void (1 * -1610 + 8140 + 10 * -653), this.componentId)), A = ue(A, c);
      }
    }
    return A;
  }, o;
}(), p0 = Ge.createContext(void (22 * -236 + 1174 + -4018 * -1));
p0.Consumer;
var Sg = {}, Pn = /* @__PURE__ */ new Set();
function LC(o, g, t) {
  var e = qi(o), A = o, i = !Ng(o), n = g.attrs, I = void (2 * -1795 + -78 + -1834 * -2) === n ? dg : n, a = g.componentId, r = a === void 0 ? function(M, J) {
    var D = typeof M != "string" ? "sc" : Ln(M);
    Sg[D] = (Sg[D] || -9856 + 3 * -2113 + -5 * -3239) + (1 * -5507 + 2477 + 7 * 433);
    var j = "".concat(D, "-").concat(gC(Eg + D + Sg[D]));
    return J ? "".concat(J, "-").concat(j) : j;
  }(g.displayName, g.parentComponentId) : a, Q = g.displayName, C = void (-62 * 77 + -1251 * -2 + -1136 * -2) === Q ? function(M) {
    return Ng(M) ? "styled.".concat(M) : "Styled(".concat(B0(M), ")");
  }(o) : Q, x = g.displayName && g.componentId ? "".concat(Ln(g.displayName), "-").concat(g.componentId) : g.componentId || r, c = e && A.attrs ? A.attrs.concat(I).filter(Boolean) : I, E = g.shouldForwardProp;
  if (e && A.shouldForwardProp) {
    var l = A.shouldForwardProp;
    if (g.shouldForwardProp) {
      var u = g.shouldForwardProp;
      E = function(M, J) {
        return l(M, J) && u(M, J);
      };
    } else E = l;
  }
  var s = new vC(t, x, e ? A.componentStyle : void (-6663 * 1 + 1 * -1721 + 32 * 262));
  function h(M, J) {
    return function(D, j, lA) {
      var $ = D.attrs, DA = D.componentStyle, Z = D.defaultProps, at = D.foldedComponentIds, an = D.styledComponentId, ma = D.target, ba = Ge.useContext(p0), Ga = ni(), fg = D.shouldForwardProp || Ga.shouldForwardProp;
      Y.NODE_ENV !== "production" && No(an);
      var rn = AC(j, ba, Z) || Xe, PA = function(Vt, Bt, _t) {
        var Me = {};
        Me.className = void (-11304 + -1413 * -8), Me.theme = _t;
        for (var Dg, Qe = hA(hA({}, Bt), Me), wg = -1 * 4904 + 15 * 347 + 1 * -301; wg < Vt.length; wg += -11045 + -1841 * -6) {
          var Xt = ze(Dg = Vt[wg]) ? Dg(Qe) : Dg;
          for (var ee in Xt) Qe[ee] = ee === "className" ? ue(Qe[ee], Xt[ee]) : ee === "style" ? hA(hA({}, Qe[ee]), Xt[ee]) : Xt[ee];
        }
        return Bt.className && (Qe.className = ue(Qe.className, Bt.className)), Qe;
      }($, j, rn), rt = PA.as || ma, Ct = {};
      for (var wA in PA) void (-2963 + -1 * -5107 + -2144) === PA[wA] || wA[1191 * -4 + 1 * 2362 + 2 * 1201] === "$" || wA === "as" || wA === "theme" && PA.theme === rn || (wA === "forwardedAs" ? Ct.as = PA.forwardedAs : fg && !fg(wA, rt) || (Ct[wA] = PA[wA], fg || Y.NODE_ENV !== "development" || qa(wA) || Pn.has(wA) || !ti.has(rt) || (Pn.add(wA), console.warn('styled-components: it looks like an unknown prop "'.concat(wA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var pg = function(Vt, Bt) {
        var _t = ni(), Me = Vt.generateAndInjectStyles(Bt, _t.styleSheet, _t.stylis);
        return Y.NODE_ENV !== "production" && No(Me), Me;
      }(DA, PA);
      Y.NODE_ENV !== "production" && D.warnTooManyClasses && D.warnTooManyClasses(pg);
      var yg = ue(at, an);
      return pg && (yg += " " + pg), PA.className && (yg += " " + PA.className), Ct[Ng(rt) && !ti.has(rt) ? "class" : "className"] = yg, Ct.ref = lA, EA(rt, Ct);
    }(m, M, J);
  }
  h.displayName = C;
  var m = Ge.forwardRef(h), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, m.attrs = c, m.componentStyle = s, m.displayName = C, m.shouldForwardProp = E, m.foldedComponentIds = e ? ue(A.foldedComponentIds, A.styledComponentId) : "", m.styledComponentId = x, m.target = e ? A.target : o, Object.defineProperty(m, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(M) {
    this._foldedDefaultProps = e ? function(J) {
      for (var D = [], j = -2692 + 131 * 18 + 335 * 1; j < arguments.length; j++) D[j - (2 * 2152 + 9025 + -13328)] = arguments[j];
      for (var lA = -1163 + 1163 * 1, $ = D; lA < $.length; lA++) gi(J, $[lA], !0);
      return J;
    }({}, A.defaultProps, M) : M;
  } }), Y.NODE_ENV !== "production" && ($r(C, x), m.warnTooManyClasses = /* @__PURE__ */ function(M, J) {
    var D = {}, j = !1;
    return function(lA) {
      if (!j && (D[lA] = !0, Object.keys(D).length >= -12 * -509 + -1373 * -2 + 1 * -8654)) {
        var $ = J ? ' with the id of "'.concat(J, '"') : "";
        console.warn("Over ".concat(-8170 + 7373 * 1 + 997, " classes were generated for component ").concat(M).concat($, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), j = !0, D = {};
      }
    };
  }(C, x)), ji(m, function() {
    return ".".concat(m.styledComponentId);
  }), i && x0(m, o, R), m;
}
function qn(o, g) {
  for (var t = [o[566 * -17 + -2982 + 12604]], e = -8479 + -1 * -8479, A = g.length; e < A; e += 53 * -158 + 1836 + 6539) t.push(g[e], o[e + (-1880 + -182 * -12 + -303)]);
  return t;
}
var jn = function(o) {
  var g = {};
  return g.isCss = !0, Object.assign(o, g);
};
function JC(o) {
  for (var g = [], t = 2830 + -1 * 8043 + 1738 * 3; t < arguments.length; t++) g[t - (-756 + 1011 * -5 + 5812 * 1)] = arguments[t];
  if (ze(o) || $e(o)) return jn(me(qn(dg, je([o], g, !0))));
  var e = o;
  return 8 * -601 + 127 * 29 + -25 * -45 === g.length && -7908 + -1 * -7909 === e.length && typeof e[0] == "string" ? me(e) : jn(me(qn(e, g)));
}
function Ii(o, g, t) {
  if (void (8627 * 1 + 4605 + -16 * 827) === t && (t = Xe), !g) throw nt(-67 * -143 + -7083 + -2497, g);
  var e = function(A) {
    for (var i = [], n = -281 + 1654 * -1 + 1936; n < arguments.length; n++) i[n - (2564 + -2563 * 1)] = arguments[n];
    return o(g, t, JC.apply(void (-1 * 3676 + -1 * -9757 + -6081 * 1), je([A], i, !1)));
  };
  return e.attrs = function(A) {
    return Ii(o, g, hA(hA({}, t), { attrs: Array.prototype.concat(t.attrs, A).filter(Boolean) }));
  }, e.withConfig = function(A) {
    return Ii(o, g, hA(hA({}, t), A));
  }, e;
}
var y0 = function(o) {
  return Ii(LC, o);
}, qt = y0;
ti.forEach(function(o) {
  qt[o] = y0(o);
});
Y.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var to = "__sc-".concat(ke, "__");
Y.NODE_ENV !== "production" && Y.NODE_ENV !== "test" && typeof window < "u" && (window[to] || (window[to] = -3663 + 14 * -583 + 11825), 136 * -44 + -4181 + 782 * 13 === window[to] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[to] += 1662 + 29 * -6 + -1487);
const UC = qt.div`
  position: relative;
`, WC = qt.video`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(o) => o.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class U extends Error {
  constructor(t, e) {
    super(t);
    w(this, "cause");
    this.name = "AutoCaptureError", this.cause = e;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof U) return t;
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
    return new U(e, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof U) return t;
    const e = "An unexpected error has occurred";
    return new U(e);
  }
}
const fo = {};
fo.CONTINUE_DETECTION = "continue-detection", fo.SWITCH_CAMERA = "switch-camera", fo.TOGGLE_MIRROR = "toggle-mirror";
const Fg = fo, ai = {};
ai.FIRST_FRAME = "first-frame", ai.FIRST_VALID_FRAME = "first-valid-frame";
const Rg = ai, D0 = {};
D0.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Zn = D0;
var HA = ((o) => (o.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", o.CONTROL = "document-auto-capture:control", o.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", o.DOCUMENT_DETECTION = "document-auto-capture:document-detection", o.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", o.INSTRUCTION_ESCALATED = "document-auto-capture:instruction-escalated", o.STATE_CHANGED = "document-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", o))(HA || {}), YC = ((o) => (o.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", o.CONTROL = "face-auto-capture:control", o.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", o.FACE_DETECTION = "face-auto-capture:face-detection", o.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", o.STATE_CHANGED = "face-auto-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", o))(YC || {}), OC = ((o) => (o.ANIMATION_END = "magnifeye-auto-capture:animation-end", o.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", o))(OC || {}), HC = ((o) => (o.INSTRUCTION_ESCALATED = "smile:instruction-escalated", o.STATUS_CHANGED = "smile-auto-capture:status-changed", o))(HC || {}), KC = ((o) => (o.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", o.CONTROL = "palm-capture:control", o.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", o.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", o.STATE_CHANGED = "palm-capture:state-changed", o.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", o))(KC || {}), TC = ((o) => (o.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", o))(TC || {});
const jA = {};
jA.CANDIDATE_SELECTION = "candidate_selection", jA.DOCUMENT_CENTERING = "document_centering", jA.DOCUMENT_NOT_PRESENT = "document_not_present", jA.DOCUMENT_TOO_FAR = "document_too_far", jA.SHARPNESS_TOO_LOW = "sharpness_too_low", jA.BRIGHTNESS_TOO_LOW = "brightness_too_low", jA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", jA.HOTSPOTS_PRESENT = "hotspots_present";
const VA = jA, ge = {};
ge.isPresent = VA.DOCUMENT_NOT_PRESENT, ge.isNotSmall = VA.DOCUMENT_TOO_FAR, ge.isNotOutOfBounds = VA.DOCUMENT_CENTERING, ge.isSharp = VA.SHARPNESS_TOO_LOW, ge.isNotDim = VA.BRIGHTNESS_TOO_LOW, ge.isNotBright = VA.BRIGHTNESS_TOO_HIGH, ge.noHotspots = VA.HOTSPOTS_PRESENT;
const PC = ge, ri = {};
ri.FRONT = "user", ri.REAR = "environment";
const Ro = ri, Ci = {};
Ci.AUTO_CAPTURE = "AUTO_CAPTURE", Ci.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const w0 = Ci, lt = {};
lt.LOADING = "LOADING", lt.ERROR = "ERROR", lt.WAITING = "WAITING", lt.RUNNING = "RUNNING";
const dA = lt;
var qC = ((o) => (o.CLOSEUP = "CLOSEUP", o.DISTANT = "DISTANT", o.MIDDLE = "MIDDLE", o))(qC || {});
const lg = tt(void 0);
lg.displayName = "AppStateContext";
function Se() {
  const o = Be(lg);
  if (o === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return o;
}
const jC = lg.Provider;
class m0 extends kA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const g = new U("An unknown error has occurred");
    (t = this.context) == null || t.handleError(g);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var g;
    return ((g = this.context) == null ? void 0 : g.appState) === dA.ERROR ? null : this.props.children;
  }
}
w(m0, "contextType", lg);
const ZC = qt.canvas`
  transform: ${(o) => o.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, VC = qt.div`
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
function _C() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const XC = HI(
  ({ detectionDetails: o, isImageMirror: g }, t) => _C() ? (console.log(o), /* @__PURE__ */ p(SA, { children: [
    /* @__PURE__ */ p(ZC, { ref: t, $isImageMirror: g }),
    /* @__PURE__ */ p(VC, { children: /* @__PURE__ */ p("pre", { children: JSON.stringify(o, null, 2) }) })
  ] })) : null
), Mo = tt(void 0);
Mo.displayName = "AnalyticsContext";
function b0() {
  const o = Be(Mo);
  if (o === void 0)
    throw new Error(`${Mo.displayName} must be used within a AnalyticsProvider`);
  return o;
}
(function(o, g) {
  const t = o();
  function e(a, r, Q, C, x) {
    return aA(x - -70, Q);
  }
  function A(a, r, Q, C, x) {
    return aA(C - 284, x);
  }
  function i(a, r, Q, C, x) {
    return aA(x - 89, r);
  }
  function n(a, r, Q, C, x) {
    return aA(r - -375, Q);
  }
  function I(a, r, Q, C, x) {
    return aA(x - 958, C);
  }
  for (; ; )
    try {
      if (-parseInt(I(1444, 1451, 1443, "fcm1", 1456)) / 1 * (parseInt(I(1448, 1448, 1452, "ayMh", 1442)) / 2) + -parseInt(I(1461, 1434, 1456, "o2v(", 1443)) / 3 * (parseInt(A(802, 798, 816, 800, "[8bP")) / 4) + -parseInt(i(579, "P(K*", 571, 585, 577)) / 5 + -parseInt(A(782, 793, 800, 785, "!ww3")) / 6 * (-parseInt(I(1441, 1439, 1453, "CYkv", 1453)) / 7) + parseInt(e(444, 434, "T^sG", 428, 437)) / 8 + parseInt(n(140, 138, "oQah", 152, 135)) / 9 + parseInt(i(602, "^U@E", 604, 578, 589)) / 10 === g) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Lo, -1 * -858149 + -379 * 83 + -20107 * 19);
function aA(o, g) {
  const t = Lo();
  return aA = function(e, A) {
    e = e - (-4862 + 17 * -366 + 11566);
    let i = t[e];
    if (aA.tSGIMs === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      aA.ZwJrqU = Q, o = arguments, aA.tSGIMs = !0;
    }
    const I = t[-6379 + -1 * 979 + 7358], a = e + I, r = o[a];
    return r ? i = r : (aA.bpNGiT === void 0 && (aA.bpNGiT = !0), i = aA.ZwJrqU(i, A), o[a] = i), i;
  }, aA(o, g);
}
function vo(o, g, t, e, A) {
  return aA(g - 621, A);
}
function zC(o, g, t, e, A) {
  return aA(A - -599, e);
}
function Lo() {
  const o = ["WRtcSJSYW6u", "AKjNWObA", "aJVdMrTt", "W7GXWRr5", "W75YWP9Og8osq8o1qW7cTeK", "WQnFvmoEW6RcK8keWPG", "bf3dT8oRW5hdS8kQW7y", "DItdGZGt", "WPhdR2hcNmo0yf3cQdPlW7BcTCo8", "WOHSW57dSe7dMmkIW70WCLxdTq", "gLjTW5zg", "o30eWPnYxG1YWQnJm8kom8k4", "W5L0s3FdUSoBr8kXtcLfWOy", "W4pcU8kJBg8", "DCk1BNfz", "Cxrfu8oup3y", "WOFcV8kLB3C", "vCkTxSkHgCkhWPVdJCkrW7n/WRbivq", "WR57W7xcIdhcPZtcMSo/t2T/WR8", "W6BdVeDGWR4JfCoxsCkDn3/dHG", "lKLXW5bd", "v8o1k8o5ySoUW5a", "mSoOoMyzeSofWOlcS8oZW5/cL2O", "jYBdKHDt", "W5RdRmk2W4mlx2RcIfZdNCkYduu", "WOJdHeG+W4VcJmksdMZdIdOO", "W5ZdO8k2W4alxgdcOfhdICkGmKC", "v8oxk8k6hSoipsNdQqnWzmoR", "CstdNW", "uthcMSoYW4a", "ECkzF0fLWQNdIG", "EuPoW4HMW5RdVG", "iYNdN8o5WPC", "WO7dUmoRWRj7", "W7T1WPTPg8ovmSo/tclcQeb6"];
  return Lo = function() {
    return o;
  }, Lo();
}
const Jo = tt(void 0);
function mt(o, g, t, e, A) {
  return aA(A - 130, t);
}
Jo[mt(630, 640, "o2v(", 649, 639) + mt(610, 605, "G^&F", 607, 613) + "e"] = vo(1129, 1133, 1120, 1124, "ZGw(") + vo(1123, 1108, 1091, 1102, "4PTH") + mt(629, 636, "#EEk", 627, 622);
function jt() {
  function o(n, I, a, r, Q) {
    return mt(n - 261, I - 413, n, r - 66, a - -605);
  }
  function g(n, I, a, r, Q) {
    return vo(n - 310, a - -1557, a - 489, r - 161, Q);
  }
  function t(n, I, a, r, Q) {
    return mt(n - 145, I - 144, n, r - 356, r - 84);
  }
  function e(n, I, a, r, Q) {
    return zC(n - 63, I - 104, a - 91, a, r - 0);
  }
  const A = Be(Jo);
  function i(n, I, a, r, Q) {
    return vo(n - 409, I - -1446, a - 41, r - 162, n);
  }
  if (A === void (2072 + -1 * 9851 + 1 * 7779)) throw new Error(Jo[e(-79, -92, "P))L", -94) + e(-118, -97, "nUf5", -110) + "e"] + (o("P))L", 35, 27, 21) + i("o2v(", -335, -332, -330) + o("2uaT", 16, 28, 38) + t("ZGw(", 719, 720, 705) + g(-456, -463, -450, -438, "Shfu") + i("j7T$", -329, -342, -312) + e(-96, -105, "o2v(", -100) + o("j7T$", 15, 7, 19)));
  return A;
}
const oo = (o, g) => Math.hypot(g.x - o.x, g.y - o.y), Uo = (o) => o.length < 6527 + 2 * -3602 + 678 ? 611 + 3 * -2629 + -1 * -7276 : o.reduce((t, e) => t + e, 8378 + 381 * -12 + -3806) / o.length, At = (o) => Number.parseFloat(o.toFixed(-1 * 9050 + 4647 + 4406)), $C = (o) => {
  const { bottomLeft: g, bottomRight: t, topLeft: e, topRight: A } = o, i = oo(e, A), n = oo(A, t), I = oo(g, t), a = oo(e, g);
  return Math.min(i, n, I, a);
}, AB = (o) => {
  const g = o.getContext("2d");
  g && g.clearRect(71 * -41 + 1551 + -20 * -68, -337 * -7 + -175 * -38 + -11 * 819, g.canvas.width, g.canvas.height);
}, eB = -9711 + -3 * -678 + 7678 + 0.5, tB = -69 * -115 + 3626 + -11561 + 0.85, Mg = -133 * 37 + -7026 + 12947, oB = 9673 + -10 * -433 + -13403, gB = -28 * -5 + 1932 + -2072, iB = "dot-auto-capture-video";
function nB(o, g) {
  return o < Mg && g >= Mg ? Mg : o;
}
function IB(o, g) {
  return o < g ? o : g;
}
function G0({ height: o, width: g }) {
  let t;
  return g > o ? t = nB(o, g) : t = g, { width: t, height: IB(o, t) };
}
const aB = (o, g) => Math.min(o, g), k0 = (o) => {
  const g = G0(o).width, t = g * tB, e = (o.width - t) / (-339 * 26 + -1533 * 3 + -13415 * -1), A = t / eB, i = (o.height - A) / 2, n = {};
  return n.shiftX = e, n.shiftY = i, n.width = t, n.height = A, n;
}, rB = (o) => {
  const { height: g, shiftX: t, shiftY: e, width: A } = k0(o), i = {};
  return i.shiftX = t / o.width, i.shiftY = e / o.height, i.width = A / o.width, i.height = g / o.height, i;
}, CB = "@innovatrics/dot-common-auto-capture", BB = "7.1.2", QB = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, sB = {
  "@dot/proto-files": "2.3.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, cB = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, xB = {
  name: CB,
  private: !0,
  version: BB,
  scripts: QB,
  dependencies: sB,
  devDependencies: cB
}, EB = 4745 + -509 * 14 + -1 * -2381 + 0.8, dB = 1 * 9575 + -1 * -9503 + -1 * 19078 + 0.43, lB = -47 * -177 + -1 * 3319 + -5e3 + 0.03, uB = -1 * -3611 + -1584 + -2027 + 0.5, hB = -5513 + 5513 * 1 + 0.25, fB = -1 * 6654 + 1 * -4582 + -53 * -212 + 0.9, pB = 3052 * -2 + -1 * -2227 + 3877 + 0.1, po = {};
po.minDuration = 1e3, po.maxDuration = 2500, po.minFrames = 10;
const vg = po, Bi = {};
Bi.max = 100, Bi.min = 10;
const Vn = Bi, yB = 720, DB = -6 * -3 + 8646 * -1 + 8828, wB = 151 * -62 + 3163 + 6203, ut = {};
ut.width = 200, ut.height = 200, ut.top = 50, ut.left = 50;
const mB = ut, N0 = "AES-CBC", S0 = "RSA-OAEP", bB = "SHA-256", GB = "image/jpeg", kB = 8054 + -487 * -16 + 1 * -15838, F0 = "/dot-assets", _n = "dot_embedded_bg.wasm", Vi = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Xn = () => {
  const o = /Android/i.test(navigator.userAgent), g = /Firefox/i.test(navigator.userAgent);
  return o && g;
}, NB = () => {
  const o = navigator.userAgent.includes("Chrome"), g = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return o && g ? !1 : g;
}, Qi = (o) => new Promise((g) => {
  setTimeout(g, o);
}), SB = (o) => JSON.parse(JSON.stringify(o, (g, t) => typeof t == "number" ? At(t) : t)), R0 = () => xB.version, M0 = (o) => new URL(o).hostname.replace("www.", ""), FB = () => M0(window.location.href) === "localhost", go = (o) => Object.entries(o).map(([g, t]) => encodeURIComponent(g) + "=" + encodeURIComponent(t)).join("&"), RB = (o, g) => JSON.stringify(o) === JSON.stringify(g) ? g : o;
function MB(o) {
  return o.at(-(1 * -9133 + 1351 * -6 + 17240)) === "/" ? o.slice(7943 + 31 * -53 + -6300, -1) : o;
}
function v0(o) {
  return "" + MB(o ?? "") + F0;
}
const vB = () => "prod".toLowerCase() === "dev";
var ie;
class L0 extends Array {
  constructor(t) {
    super();
    O(this, ie);
    W(this, ie, t);
  }
  get size() {
    return y(this, ie);
  }
  pushFixed(...t) {
    if (t.length > y(this, ie)) {
      const e = t.slice(-y(this, ie));
      this.push(...e);
      return;
    }
    this.length === y(this, ie) && this.splice(-1401 + -1401 * -1, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-4280 + -7156 * -1 + 719 * -4);
  }
}
ie = new WeakMap();
const J0 = (o, g, t = GB) => new Promise((e) => {
  o.toBlob((A) => {
    if (!A) throw new Error("Canvas to Blob failed");
    e(A);
  }, t, g);
}), LB = async (o) => J0(o, 7 * -521 + -6197 + -2 * -4967), JB = async (o) => J0(o, 9181 * 1 + 1 * 4273 + -13354, "image/png"), U0 = (o, g) => {
  const t = document.createElement("canvas");
  t.width = g.width, t.height = g.height;
  const e = t.getContext("2d");
  if (!e) throw new Error("cropImage ctx error");
  return e.drawImage(o, g.shiftX, g.shiftY, g.width, g.height, -9566 * 1 + -4336 + -1986 * -7, 0, t.width, t.height), t;
}, UB = (o) => {
  const g = o.getContext("2d");
  if (!g) throw new Error("getImageDataForSam ctx error");
  const { data: t } = g.getImageData(196 * 39 + -90 + -7554, 947 * -1 + 71 * -92 + 7479, o.width, o.height);
  return t;
};
function zn(o, g, t) {
  return t - g / (-538 * 2 + -4709 + 5787) < 8633 + -982 * 5 + 73 * -51 ? -16 * -122 + 1563 * 3 + -1 * 6641 : t + g / (8456 + -4227 * 2) > o ? o - g : t - g / (3781 * -1 + 5 * 671 + 428);
}
function WB(o, g) {
  const t = o.width, e = o.height, A = t * (g.left / (-9773 * 1 + -8 * -25 + 9673)), i = e * (g.top / (4 * 1919 + 2 * -383 + 5 * -1362));
  return { width: g.width, height: g.height, shiftX: zn(t, g.width, A), shiftY: zn(e, g.height, i) };
}
async function YB(o, g) {
  const t = WB(o, g), e = U0(o, t);
  return JB(e);
}
const OB = (o, g, t, e) => {
  const A = o.getContext("2d");
  A && (A.beginPath(), A.strokeStyle = t, A.rect(g.topLeft.x, g.topLeft.y, g.width, g.height), A.stroke());
}, Lg = (o, g, t) => {
  const { height: e, shiftX: A, shiftY: i, width: n } = g, I = {};
  I.x = A, I.y = i;
  const a = {};
  a.topLeft = I, a.width = n, a.height = e, a.color = t, OB(o, a, t);
};
function HB({ canvas: o, color: g, fill: t, offset: e = -28 * 197 + -6652 + 12168, polygon: A }) {
  const i = o.getContext("2d");
  if (!i) return;
  const { bottomLeft: n, bottomRight: I, topLeft: a, topRight: r } = A;
  t ? i.fillStyle = g : i.strokeStyle = g, i.beginPath(), i.moveTo(a.x + e, a.y + e), i.lineTo(r.x + e, r.y + e), i.lineTo(I.x + e, I.y + e), i.lineTo(n.x + e, n.y + e), i.closePath(), t ? i.fill() : i.stroke();
}
const KB = (o, g) => {
  const { height: t, shiftX: e, shiftY: A, width: i } = g;
  return !(o.x < e || o.x > e + i || o.y < A || o.y > A + t);
}, TB = (o, g) => Object.values(o).every((t) => KB(t, g));
function Wo(o) {
  const { height: g, width: t } = G0(o), e = (o.width - t) / (593 + -15 * -307 + -6 * 866), A = (o.height - g) / (-61 * -53 + 890 + -4121), i = {};
  return i.shiftX = e, i.shiftY = A, i.width = t, i.height = g, i;
}
function W0(o, g, t) {
  const { height: e, width: A } = t, i = aB(o.width, o.height), n = A - i * g * (332 * -19 + -8432 + 14742), I = e - i * g * (-1782 * 3 + -298 * 30 + -14288 * -1), a = (o.width - n) / (-383 * 9 + 7206 + 3757 * -1), r = (o.height - I) / (-6923 + 1 * 877 + 6048), Q = {};
  return Q.shiftX = a, Q.shiftY = r, Q.width = n, Q.height = I, Q;
}
function io(o, g) {
  const { shiftX: t, shiftY: e } = g, A = {};
  return A.x = o.x + t, A.y = o.y + e, A;
}
function PB(o, g) {
  return { ...o, topLeft: io(o.topLeft, g), topRight: io(o.topRight, g), bottomRight: io(o.bottomRight, g), bottomLeft: io(o.bottomLeft, g) };
}
function qB(o, g) {
  const t = $C(o), e = t / g.width, A = { ...o };
  return A.smallestEdge = e, A;
}
(function(o, g) {
  function t(I, a, r, Q, C) {
    return rA(C - -772, I);
  }
  const e = o();
  function A(I, a, r, Q, C) {
    return rA(C - -212, Q);
  }
  function i(I, a, r, Q, C) {
    return rA(a - 435, I);
  }
  function n(I, a, r, Q, C) {
    return rA(I - -286, Q);
  }
  for (; ; )
    try {
      if (-parseInt(i("B!)2", 878, 873, 879, 872)) / 1 + parseInt(i("Lpxa", 882, 890, 887, 870)) / 2 + -parseInt(A(229, 229, 223, "uJVV", 232)) / 3 + parseInt(i("uJVV", 874, 876, 865, 886)) / 4 * (parseInt(n(160, 162, 165, "cr5]", 153)) / 5) + parseInt(i("F&Ym", 871, 865, 875, 872)) / 6 * (-parseInt(A(223, 210, 212, "cr5]", 217)) / 7) + -parseInt(n(156, 156, 155, "Lpxa", 166)) / 8 + parseInt(t("(heg", -339, -323, -321, -331)) / 9 === g) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Yo, -47 * 21115 + 108467 * 1 + 1506421);
function rA(o, g) {
  const t = Yo();
  return rA = function(e, A) {
    e = e - (1987 * -2 + -3112 + 7513);
    let i = t[e];
    if (rA.wjXvcb === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      rA.WkiwfO = Q, o = arguments, rA.wjXvcb = !0;
    }
    const I = t[-727 * 1 + -2723 + -1150 * -3], a = e + I, r = o[a];
    return r ? i = r : (rA.QvSPUw === void 0 && (rA.QvSPUw = !0), i = rA.WkiwfO(i, A), o[a] = i), i;
  }, rA(o, g);
}
function Yo() {
  const o = ["W7mkWOfLmCosDNv1WPBcVa", "ufRdSZlcJ1ZdSCo/W6jCuCk4", "rmkkv8kVpcTWWQRdQqv+", "WPCYsSosWORcKHpcUGXBW7hdQxq", "qM98Bhi", "WO3cP8o4DCkiD0lcVmoaW4K", "W5hcVg/dPKpcUSoIWO1Njq", "W7JcJ8olWPRcOKy/ag/dRx7dUSk7", "WPe1tCoyWOVcKXFcVXPvW6ZdRuG", "kmkbWOyQW6FcMCk+fH3dKCoQ", "WOVcOCo4Emo0dwxcSCoUW40dW7W", "W4ZcH8o1W4LN", "W6C4AcDCW6r3nwFcRq", "WPS3tmoBWONcNKtcNaPvW6xdJG", "WOVdISk4oSo7", "Dha1WPtdLW", "BMHvvulcJSoFW4tcIW", "W7NdTudcVW", "W6W+BIu1W65fphBcVu8", "WPpdK8k0WRu8af3cM8oXW5xcMmkk", "W6e8B2r/W4fzoxS", "DmoyWPpdV8klAbhcSmkkW7pcSmozca", "WQa1WPCPW5y", "qmosW6FcH35jdW0KW6W", "yLBcVCovyq"];
  return Yo = function() {
    return o;
  }, Yo();
}
function jB({ assetsDirectoryPath: o, bramble: g }) {
  function t(a, r, Q, C, x) {
    return rA(r - 52, Q);
  }
  const [e, A] = fA(), i = e !== void (-1 * -6737 + 802 * -1 + -1 * 5935);
  X(() => {
    async function a() {
      await g[Q(-387, "]!od", -395)](v0(o));
      function r(C, x, c, E, l) {
        return rA(x - 982, c);
      }
      function Q(C, x, c, E, l) {
        return rA(c - -846, x);
      }
      A(g[r(1421, 1427, "LOic") + r(1409, 1413, "2!fM") + Q(-411, "n$Lb", -408) + "t"]());
    }
    a();
  }, [g, o, A]);
  const n = {};
  function I(a, r, Q, C, x) {
    return rA(C - 291, a);
  }
  return n[t(501, 501, "9)pj") + t(508, 500, "[L1m")] = e, n[I("(akL", 716, 712, 724) + "sh"] = i, n;
}
var Y0 = ((o) => (o.DOCUMENT = "document-auto-capture:dev", o.FACE = "face-auto-capture:dev", o.PALM = "palm-capture:dev", o))(Y0 || {});
const si = {};
si.SIMD = "simd", si.NO_SIMD = "no-simd";
const $n = si, ci = {};
ci.Lower = "Lower", ci.Higher = "Higher";
const xi = ci, yo = {};
yo.VISIBLE = "VISIBLE", yo.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", yo.HIDDEN = "HIDDEN";
const Oo = yo;
function sA(o, g) {
  var t = Ho();
  return sA = function(e, A) {
    e = e - 350;
    var i = t[e];
    if (sA.MCqvUh === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (var m = 0, R = c.length; m < R; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var c = [], E = 0, l, u = "";
        C = n(C);
        var s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      sA.dmAfJY = I, o = arguments, sA.MCqvUh = !0;
    }
    var a = t[8233 * -1 + 3 * 2373 + 1114], r = e + a, Q = o[r];
    return Q ? i = Q : (sA.cBjRTw === void 0 && (sA.cBjRTw = !0), i = sA.dmAfJY(i, A), o[r] = i), i;
  }, sA(o, g);
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return sA(a - -680, r);
  }
  function e(a, r, Q, C, x) {
    return sA(x - -457, a);
  }
  var A = o();
  function i(a, r, Q, C, x) {
    return sA(a - 123, C);
  }
  function n(a, r, Q, C, x) {
    return sA(Q - -68, x);
  }
  for (; ; )
    try {
      var I = parseInt(t(-319, "TCs^", -329, -322, -310)) / 1 + -parseInt(n(292, 281, 291, 292, "VB*b")) / 2 * (-parseInt(i(495, 503, 491, "[te7", 499)) / 3) + -parseInt(n(286, 279, 288, 284, "nupH")) / 4 * (-parseInt(i(476, 478, 487, "4AeV", 478)) / 5) + -parseInt(i(489, 484, 485, "l3ph", 489)) / 6 * (-parseInt(t(-328, "dfDc", -318, -317, -321)) / 7) + -parseInt(n(272, 274, 283, 276, "(So!")) / 8 + -parseInt(e("KB]1", -87, -88, -99, -88)) / 9 + parseInt(t(-326, ")oJA", -328, -319, -324)) / 10;
      if (I === g) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(Ho, -3 * -216091 + 269904 + -185541 * 2);
function ZB({ crosshatch: o }) {
  function g(A, i, n, I, a) {
    return sA(a - -677, n);
  }
  function t(A, i, n, I, a) {
    return sA(i - 240, I);
  }
  function e(A, i, n, I, a) {
    return sA(A - -858, i);
  }
  return o != null && o[g(-317, -333, "VB*b", -323, -322) + "id"] ? xi[t(598, 597, 607, "S$tJ") + "r"] : xi[e(-495, "l3ph")];
}
function Ho() {
  var o = ["wSkkWRZdLwhcIMVcMSorkSouWRO", "W7RdOIxdHZWOW4CxW6ldJ8o5W6i", "W4WHW615WOpcQmoao8ka", "WQOZW5WhDmkRWR3cSvGyWPVdSW", "WOnOgt/cVCkoW5hcSmophd9W", "W6voWQD+zW", "W7bkmSkah8kjzHldOZtcRmkvW7q", "ntykxmoBqSoo", "WPSyW6mJjSkjWRRcI8oFW4FcVu8", "hmkzW63dRq9UW4T3eSkwhmobWO4", "WReXW7xdJCodW5VcISkkESkSdW", "rfL8pdrbW60MW7n/W7lcSuu", "nmoHwCo9W4lcGL7dNCo6b8kMv8km", "bYOMW5BdQIvRWOztu1q7", "W4Kgq2Srmmop", "nCoGh8kdWQVdPb7dGG", "p8kYWR5wWRDBuSkDW4KZq8kvwq", "WQVdRmoWCmkQCSoDWOS", "WPD7WQZdPmo/WPNcOCoLWRHCW4S", "BbpcU3LEtCk/WRdcImkMW5hdN14", "WQlcQeFcK2C", "dI4MWOVcUx9lWRr5", "sXSJx8oM"];
  return Ho = function() {
    return o;
  }, Ho();
}
function Ko() {
  const o = ["WOmoW7NcOXC", "WOjuWRFcSSocCte", "WQ7cPvldO8oM", "W7H6zJec", "tmopWRCAeSoyWRhdJuxdLCoLWPFdVq", "iLPWWRxdKW", "WQpdGGHMW4CZlCoN", "W77cPqOgW6xcJCoVqv5bW58E", "W5atz8olecSvgfFcRmoucq", "WR7cSL0", "txBcUSk+qXKpsIeSsh0", "EKFcGvJcISoPWPjUW4S", "W7VdRWxcU8oncYe6zmkv", "W4DwoSkHW4O", "WPtcMspdO0RcPSkuWPxdL8okW5i", "oCkVW5jYWRtdMw9o", "W7dcQqKgW6dcJmoiugDHW5WZ", "gmoHW4/cJs0MW7BcJLWJvLC", "eCoMW4ldIwP9W5FcQhu", "W50+WOVdTmkLW7RdUwz2y8kybs4", "lSo5mr9m", "W5ipW48fW6Otlhu", "WQdcLr/cPva", "gSkxomo7iG", "W6rOh8kSW686mSol", "W5qYWOxcUmoNWQ3cHLnB", "rCodWRGAe8oqWR3dGgtdTSoyWONdIq", "cYpdKSkp", "WQNdN8oqW69F", "pYFdLa", "du0VW5KzDr9ZA8kkgqu", "WQRcTZfoW6m2hG", "jbNdRtrLl3uNhmoW", "s8oIW6ScWRnIfYpdIr9F", "WQhdGMTeW5qwp8o0zq", "WPa9mh5EWO3dISkQW6nRW7hcU8o0"];
  return Ko = function() {
    return o;
  }, Ko();
}
(function(o, g) {
  function t(I, a, r, Q, C) {
    return CA(r - -614, C);
  }
  function e(I, a, r, Q, C) {
    return CA(Q - -129, C);
  }
  function A(I, a, r, Q, C) {
    return CA(I - -616, Q);
  }
  const i = o();
  function n(I, a, r, Q, C) {
    return CA(C - -771, r);
  }
  for (; ; )
    try {
      if (parseInt(t(-157, -167, -167, -175, "PXze")) / 1 + -parseInt(n(-312, -314, "Gomd", -318, -303)) / 2 * (parseInt(t(-164, -137, -148, -166, "1K86")) / 3) + -parseInt(t(-142, -168, -156, -174, "]%g)")) / 4 + parseInt(e(342, 342, 341, 336, "JE5i")) / 5 * (parseInt(n(-289, -311, "aOg4", -280, -295)) / 6) + parseInt(A(-139, -150, -152, "nYjs", -134)) / 7 * (-parseInt(e(319, 320, 325, 317, "rl!W")) / 8) + -parseInt(t(-171, -164, -159, -169, "nYjs")) / 9 * (parseInt(t(-139, -148, -157, -146, "rl!W")) / 10) + parseInt(n(-330, -316, "]#7$", -307, -312)) / 11 * (parseInt(A(-154, -144, -140, "VZuz", -158)) / 12) === g) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Ko, 608863);
function CA(o, g) {
  const t = Ko();
  return CA = function(e, A) {
    e = e - (-4343 + -2 * 3785 + 12358);
    let i = t[e];
    if (CA.iuwRFE === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      CA.hVsAeo = Q, o = arguments, CA.iuwRFE = !0;
    }
    const I = t[133 * 37 + 2791 + -7712], a = e + I, r = o[a];
    return r ? i = r : (CA.DXkacL === void 0 && (CA.DXkacL = !0), i = CA.hVsAeo(i, A), o[a] = i), i;
  }, CA(o, g);
}
function VB({ assetsDirectoryPath: o, children: g, bramble: t }) {
  function e(c, E, l, u, s) {
    return CA(c - 852, u);
  }
  const A = {};
  function i(c, E, l, u, s) {
    return CA(c - -344, s);
  }
  A[e(1305, 1300, 1298, "hoXl") + "le"] = t, A[i(120, 122, 120, 138, "$Vts") + e(1308, 1318, 1325, "Jl1c") + r(177, 176, 183, 174, "Q26q") + r(181, 165, 197, 181, "C2$!")] = o;
  const { sunfish: n, crosshatch: I } = jB(A), a = {};
  function r(c, E, l, u, s) {
    return CA(u - -297, s);
  }
  a[i(129, 119, 111, 130, "WGKe") + e(1331, 1346, 1324, "17$)")] = I;
  const Q = pA(() => ({ redfin: ZB(a), sunfish: n, crosshatch: I, bramble: t }), [n, I, t]);
  function C(c, E, l, u, s) {
    return CA(l - 787, s);
  }
  const x = {};
  return x[i(130, 120, 127, 138, "C$mB")] = Q, x[C(1239, 1255, 1238, 1252, "Iy2y") + e(1312, 1322, 1318, "hoXl")] = g, p(Jo[e(1306, 1302, 1306, "AfM7") + e(1332, 1325, 1342, "C2$!")], x);
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return GA(C - -311, a);
  }
  function e(a, r, Q, C, x) {
    return GA(a - 516, r);
  }
  function A(a, r, Q, C, x) {
    return GA(a - -724, r);
  }
  var i = o();
  function n(a, r, Q, C, x) {
    return GA(a - -675, C);
  }
  for (; ; )
    try {
      var I = parseInt(e(965, "][wj", 974, 968, 974)) / 1 * (parseInt(A(-267, "InZX", -264, -270, -273)) / 2) + parseInt(e(963, "WKa[", 969, 959, 962)) / 3 + -parseInt(t("g4np", 134, 132, 132, 135)) / 4 + -parseInt(e(967, "udlM", 964, 968, 976)) / 5 * (-parseInt(n(-231, -232, -234, "cHde", -239)) / 6) + -parseInt(e(971, "InZX", 964, 967, 972)) / 7 + parseInt(A(-272, "2bqk", -276, -280, -276)) / 8 + parseInt(n(-229, -226, -222, "P@sN", -238)) / 9;
      if (I === g) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(To, 488141 + -87209 * 5 + 299385);
function To() {
  var o = ["ACkgW53cSGBdJ3eTW4BcPYeRhq", "WPhcGCo0ANhcQhddK8kNaMpdI0q", "EfOObqNcNbFdRZO", "WRVcUMTbiSksWQBdPgxcO246iG", "ACo2mSoeySk+BmkKW51kACod", "b8kDi8kaWOpcRXxcU8kDWQldKSo+EW", "oSohdY3cK8otBGO5", "xSoCW54IF1acWQrr", "WOBdRSkVW4NcShlcN0VdHSkkWOFcNq", "WP3cI8kOW44ElsiZW5yZka", "AXVcUSosbGqysCktACktWQGO", "b8kujCoiW4JdJehcSCk/", "W7mQkNhcMYZdJJDGoSk1", "wmokW5vJi8kJWRrKzr1HtSk9", "WPNdT8oddwu1W54uq8owWRmXna", "w8oiW5mCFmoWW7D/EG", "wSoCW59dlILJWR5DuCkMWQPN", "zmk0WOD6lCoPzmozW4S"];
  return To = function() {
    return o;
  }, To();
}
function GA(o, g) {
  var t = To();
  return GA = function(e, A) {
    e = e - (3108 + 29 * 179 + -7856);
    var i = t[e];
    if (GA.XTIXeq === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (var m = 0, R = c.length; m < R; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var c = [], E = 0, l, u = "";
        C = n(C);
        var s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      GA.QrpxZw = I, o = arguments, GA.XTIXeq = !0;
    }
    var a = t[-414 * -24 + -9457 + -479], r = e + a, Q = o[r];
    return Q ? i = Q : (GA.UmAlkA === void 0 && (GA.UmAlkA = !0), i = GA.QrpxZw(i, A), o[r] = i), i;
  }, GA(o, g);
}
function _B({ analytics: o, crosshatch: g }) {
  return g !== void (5095 + -5095 * 1) && !g.isAnalyticsDisabled ? o : void (-4144 + -399 * 6 + 1 * 6538);
}
function XB({ analytics: o, appKey: g, redfin: t, crosshatch: e, bramble: A }) {
  const i = {};
  i.analytics = o, i.crosshatch = e;
  const n = _B(i);
  return X(() => {
    n && n.init(g);
  }, [n, g]), X(() => {
    e && (console.info("Analytics is " + (e.isAnalyticsDisabled ? "disabled" : "enabled")), n && n.walleye(t, A.getCustomerName()));
  }, [n, A, e, t]), X(() => {
    if (n)
      return window.addEventListener("beforeunload", n.endSession), () => {
        n.endSession(), window.removeEventListener("beforeunload", n.endSession);
      };
  }, [n]), n;
}
function zB({
  analytics: o,
  appKey: g,
  children: t
}) {
  const { redfin: e, crosshatch: A, bramble: i } = jt(), n = XB({ analytics: o, redfin: e, appKey: g, crosshatch: A, bramble: i }), I = pA(
    () => ({
      analytics: n
    }),
    [n]
  );
  return /* @__PURE__ */ p(Mo.Provider, { value: I, children: t });
}
const $B = (o, g) => {
  const t = {};
  t.detail = g, document.dispatchEvent(new CustomEvent(o, t));
}, Ig = class Ig {
  constructor() {
    w(this, "lastDetails", {});
    w(this, "delayedTime", 1 * 3859 + -917 + -2 * 1471);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Ig()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 0;
  }
  isDetailChanged(g, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[g]) ? (this.lastDetails[g] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(g, t) {
    this.isDetailChanged(g, t) && $B(g, t);
  }
  dispatchDelayedCustomEventOnChange(g, t, e) {
    const A = performance.now();
    A - this.delayedTime > e && (this.dispatchCustomEventOnChange(g, t), this.delayedTime = A);
  }
};
w(Ig, "_instance");
let Nt = Ig;
const It = Nt.getInstance(), O0 = (o, g, t = oB) => {
  const e = {};
  e.instructionCode = g.code, e.isEscalated = g.isEscalated ?? !1;
  const A = e;
  It.dispatchDelayedCustomEventOnChange(o, A, t);
}, AI = (o, g) => {
  It.dispatchCustomEventOnChange(o, g);
}, AQ = (o, g) => {
  It.dispatchCustomEventOnChange(o, g);
}, eQ = (o, g) => {
  const t = {};
  t.size = g;
  const e = t;
  It.dispatchCustomEventOnChange(o, e);
}, tQ = (o, g, t) => {
  const e = g.confidence < t ? void 0 : g, A = {};
  A.detectedObject = e;
  const i = A;
  It.dispatchCustomEventOnChange(o, i);
};
function oQ(o, g) {
  const t = {};
  t.instructionCode = g;
  const e = t;
  It.dispatchCustomEventOnChange(o, e);
}
const gQ = (o, g) => {
  const { cameraResolution: t, shouldCameraMirror: e } = g;
  X(() => {
    if (!t) return;
    const A = {};
    A.cameraResolution = t, A.isMirroring = e, AQ(o, A);
  }, [t, e, o]);
}, iQ = (o) => o === HA.CONTROL ? !Vi() : !0, nQ = (o, g) => {
  const { appState: t, handleAppStateChange: e, handleError: A, isCameraReady: i } = Se(), [n, I] = fA(), a = pA(() => {
    const Q = i && g && g.isStreaming && g.getCameraSettings().facingMode;
    return Q ? n ?? Q === "user" : n ?? iQ(o);
  }, [g, n, o, i]);
  X(() => {
    const Q = () => {
      t !== dA.LOADING && e(dA.RUNNING);
    }, C = () => {
      I(n === void 0 ? !a : !n);
    }, x = async () => {
      if (g) {
        e(dA.LOADING);
        try {
          await g.switchCamera(), e(dA.RUNNING);
        } catch (E) {
          if (E instanceof Error) {
            A(U.fromCameraError(E));
            return;
          }
        }
        I(void 0);
      }
    }, c = (E) => {
      var l;
      switch ((l = E.detail) == null ? void 0 : l["instruction"]) {
        case Fg.CONTINUE_DETECTION:
          Q();
          break;
        case Fg.TOGGLE_MIRROR:
          C();
          break;
        case Fg.SWITCH_CAMERA:
          x();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(o, c), () => {
      document.removeEventListener(o, c);
    };
  }, [t, g, A, n, e, a, o]);
  const r = {};
  return r.shouldCameraMirror = a, r;
};
function IQ(o, g) {
  X(() => {
    if (!o.current) return;
    const t = new ResizeObserver((e) => {
      const [A] = e;
      eQ(g, A.contentRect);
    });
    return t.observe(o.current), () => {
      t.disconnect();
    };
  }, [o, g]);
}
var aQ = Symbol.for("preact-signals");
function _i() {
  if (Oe > 226 * 15 + 2744 + -6133)
    Oe--;
  else {
    for (var o, g = !1; void (-10977 + -1 * -10977) !== bt; ) {
      var t = bt;
      for (bt = void (-19 * -218 + -4381 + 239 * 1), Ei++; void (-5252 + 30 * -254 + -8 * -1609) !== t; ) {
        var e = t.o;
        if (t.o = void (-418 * 4 + -1579 * 2 + 4830), t.f &= -(153 * -17 + 98 * 18 + -5 * -168), !(2 * -505 + -3677 * -2 + 132 * -48 & t.f) && T0(t)) try {
          t.c();
        } catch (A) {
          !g && (o = A, g = !0);
        }
        t = e;
      }
    }
    if (Ei = 308 * 25 + -857 + -2281 * 3, Oe--, g) throw o;
  }
}
var K = void (-8204 + 2 * 4102), bt = void (-80 * 100 + 8353 + -353), Oe = 0, Ei = -12319 + 1 * 12319, Po = 6747 + 282 * 12 + -10131;
function H0(o) {
  if (void (-9593 + 87 * -25 + 11768) !== K) {
    var g = o.n;
    if (void (40 * -73 + 2244 + 676) === g || g.t !== K)
      return g = { i: 0, S: o, p: K.s, n: void 0, t: K, e: void (1750 + 250 * -7), x: void (-7803 + 8557 * 1 + -754), r: g }, void (1530 + 255 * -6) !== K.s && (K.s.n = g), K.s = g, o.n = g, -9967 + -1123 * -3 + 6630 & K.f && o.S(g), g;
    if (-(191 * 26 + -4278 + 3 * -229) === g.i)
      return g.i = -2 * 1507 + -77 + 281 * 11, g.n !== void 0 && (g.n.p = g.p, void (3885 + 2 * -329 + -3227 * 1) !== g.p && (g.p.n = g.n), g.p = K.s, g.n = void (1920 + -11 * -755 + -10225), K.s.n = g, K.s = g), g;
  }
}
function IA(o) {
  this.v = o, this.i = -341 * -4 + 37 * 24 + -2252, this.n = void (125 * 58 + -1893 * 1 + -11 * 487), this.t = void (-24 + 114 * 65 + -7386);
}
IA.prototype.brand = aQ, IA.prototype.h = function() {
  return !(-5042 + -2 * -2521);
}, IA.prototype.S = function(o) {
  this.t !== o && void (2912 * 1 + -5636 * -1 + -1 * 8548) === o.e && (o.x = this.t, void (5777 + -3883 * -1 + 966 * -10) !== this.t && (this.t.e = o), this.t = o);
}, IA.prototype.U = function(o) {
  if (void (-11 * 755 + 5130 + 3175) !== this.t) {
    var g = o.e, t = o.x;
    void (2311 + 1 * -2311) !== g && (g.x = t, o.e = void (7102 + 1 * 7359 + 14461 * -1)), void (-760 + 5 * -471 + 3115) !== t && (t.e = g, o.x = void (3130 + -1 * 3130)), o === this.t && (this.t = t);
  }
}, IA.prototype.subscribe = function(o) {
  var g = this;
  return zi(function() {
    var t = g.value, e = K;
    K = void (11540 + 1 * -11540);
    try {
      o(t);
    } finally {
      K = e;
    }
  });
}, IA.prototype.valueOf = function() {
  return this.value;
}, IA.prototype.toString = function() {
  return this.value + "";
}, IA.prototype.toJSON = function() {
  return this.value;
}, IA.prototype.peek = function() {
  var o = K;
  K = void (11 * -370 + -8518 * -1 + -4448);
  try {
    return this.value;
  } finally {
    K = o;
  }
}, Object.defineProperty(IA.prototype, "value", { get: function() {
  var o = H0(this);
  return void (1420 + 1 * 6553 + -67 * 119) !== o && (o.i = this.i), this.v;
}, set: function(o) {
  if (o !== this.v) {
    if (Ei > -2452 + -37 * 257 + 1723 * 7) throw new Error("Cycle detected");
    this.v = o, this.i++, Po++, Oe++;
    try {
      for (var g = this.t; void (-271 * -12 + -8119 + 4867) !== g; g = g.x) g.t.N();
    } finally {
      _i();
    }
  }
} });
function K0(o) {
  return new IA(o);
}
function T0(o) {
  for (var g = o.s; void (8354 + -4177 * 2) !== g; g = g.n) if (g.S.i !== g.i || !g.S.h() || g.S.i !== g.i) return !(5359 + -1 * 5745 + -193 * -2);
  return !(-7205 + -1337 * 2 + 9880);
}
function P0(o) {
  for (var g = o.s; g !== void 0; g = g.n) {
    var t = g.S.n;
    if (void (-5998 * -1 + -8949 * 1 + 2951) !== t && (g.r = t), g.S.n = g, g.i = -(1 * 2308 + -9583 + -214 * -34), void (-7 * -941 + -4643 + -1944) === g.n) {
      o.s = g;
      break;
    }
  }
}
function q0(o) {
  for (var g = o.s, t = void (4025 + -805 * 5); void (1743 * 5 + -7072 + -53 * 31) !== g; ) {
    var e = g.p;
    -(-2417 * 2 + -497 * 1 + 5332) === g.i ? (g.S.U(g), void (1256 * 1 + -3267 + 2011) !== e && (e.n = g.n), void (1 * 5227 + -1802 + 3425 * -1) !== g.n && (g.n.p = e)) : t = g, g.S.n = g.r, g.r !== void 0 && (g.r = void (6927 + -15 * 625 + 2448)), g = e;
  }
  o.s = t;
}
function Ue(o) {
  IA.call(this, void (-2 * -1074 + -2289 + 141)), this.x = o, this.s = void (-3 * -622 + 1 * 4763 + 6629 * -1), this.g = Po - (2688 + 2687 * -1), this.f = 6598 + -4291 * -1 + 7 * -1555;
}
(Ue.prototype = new IA()).h = function() {
  if (this.f &= -(1 * -577 + 3665 + 1 * -3085), -2557 * 3 + -1 * 2503 + 10175 & this.f) return !(453 * 18 + 1063 * 9 + 5 * -3544);
  if (-11 * -278 + -8468 + -2721 * -2 == (4573 * -1 + 4 * -1301 + -3271 * -3 & this.f)) return !(-311 * -16 + -6028 + -2 * -526);
  if (this.f &= -(1 * 8743 + 956 * -9 + -2 * 67), this.g === Po) return !(2248 + -562 * 4);
  if (this.g = Po, this.f |= -3839 + 3 * 1142 + 414, this.i > 0 && !T0(this)) return this.f &= -(-2797 + -1 * -2799), !(6825 + -442 * 7 + -3731);
  var o = K;
  try {
    P0(this), K = this;
    var g = this.x();
    (16 & this.f || this.v !== g || 4146 + -1 * -172 + -4318 === this.i) && (this.v = g, this.f &= -(-5998 + -1 * -631 + 5384), this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return K = o, q0(this), this.f &= -(-2317 * 2 + -8411 + 13047), !(2581 * 3 + -19 * -191 + 11372 * -1);
}, Ue.prototype.S = function(o) {
  if (void (64 * 33 + -2839 + -1 * -727) === this.t) {
    this.f |= 36;
    for (var g = this.s; g !== void 0; g = g.n) g.S.S(g);
  }
  IA.prototype.S.call(this, o);
}, Ue.prototype.U = function(o) {
  if (void (1 * -671 + 1809 * -4 + -7907 * -1) !== this.t && (IA.prototype.U.call(this, o), void (12703 + -1 * 12703) === this.t)) {
    this.f &= -(5 * 1489 + -1096 * 5 + -1932);
    for (var g = this.s; void (-2399 + -21 * -49 + 1370 * 1) !== g; g = g.n) g.S.U(g);
  }
}, Ue.prototype.N = function() {
  if (!(-254 * 9 + -3433 + 5721 & this.f)) {
    this.f |= 6138 + -6 * -1299 + -13926;
    for (var o = this.t; void (122 + -61 * 2) !== o; o = o.x) o.t.N();
  }
}, Object.defineProperty(Ue.prototype, "value", { get: function() {
  if (-6593 * 1 + -6603 + 13197 & this.f) throw new Error("Cycle detected");
  var o = H0(this);
  if (this.h(), void (2158 + 392 * -20 + -2 * -2841) !== o && (o.i = this.i), -3443 + 3 * 1153 & this.f) throw this.v;
  return this.v;
} });
function rQ(o) {
  return new Ue(o);
}
function j0(o) {
  var g = o.u;
  if (o.u = void (-5437 * -1 + 67 * 78 + -10663 * 1), typeof g == "function") {
    Oe++;
    var t = K;
    K = void (1 * 5303 + 1 * -9778 + 25 * 179);
    try {
      g();
    } catch (e) {
      throw o.f &= -(-10 * -917 + 10 * 586 + -1 * 15028), o.f |= 3733 + -2 * 83 + -3559, Xi(o), e;
    } finally {
      K = t, _i();
    }
  }
}
function Xi(o) {
  for (var g = o.s; void (100 * 86 + -6874 + -1 * 1726) !== g; g = g.n) g.S.U(g);
  o.x = void (154 * -46 + -1477 * 1 + 8561), o.s = void (-7734 + 1 * -6297 + 14031), j0(o);
}
function CQ(o) {
  if (K !== this) throw new Error("Out-of-order effect");
  q0(this), K = o, this.f &= -(5303 + 1187 * -5 + 634), -1 * -6174 + -6827 + 661 & this.f && Xi(this), _i();
}
function ht(o) {
  this.x = o, this.u = void (703 * -11 + 17 * -194 + 11031), this.s = void (1 * -2933 + -1 * -3693 + 20 * -38), this.o = void (-1 * 1489 + -23 * -347 + 1082 * -6), this.f = -1 * -176 + -3584 + 3440;
}
ht.prototype.c = function() {
  var o = this.S();
  try {
    if (5941 * 1 + 7849 + -13782 & this.f || void (-1638 + -39 * -42) === this.x) return;
    var g = this.x();
    typeof g == "function" && (this.u = g);
  } finally {
    o();
  }
}, ht.prototype.S = function() {
  if (-6357 + -31 * 42 + -1915 * -4 & this.f) throw new Error("Cycle detected");
  this.f |= 1 * 9772 + -8821 + -50 * 19, this.f &= -(238 + -1 * 6242 + -1 * -6013), j0(this), P0(this), Oe++;
  var o = K;
  return K = this, CQ.bind(this, o);
}, ht.prototype.N = function() {
  !(-981 + 983 * 1 & this.f) && (this.f |= 1375 + 1373 * -1, this.o = bt, bt = this);
}, ht.prototype.d = function() {
  this.f |= 8, -4576 + 1 * -8986 + 13563 & this.f || Xi(this);
};
function zi(o) {
  var g = new ht(o);
  try {
    g.c();
  } catch (t) {
    throw g.d(), t;
  }
  return g.d.bind(g);
}
var Jg;
function Ye(o, g) {
  k[o] = g.bind(null, k[o] || function() {
  });
}
function no(o) {
  Jg && Jg(), Jg = o && o.S();
}
function Z0(o) {
  var g = this, t = o.data, e = V0(t);
  e.value = t;
  var A = pA(function() {
    for (var i = g.__v; i = i.__; ) if (i.__c) {
      i.__c.__$f |= 2293 + 5 * -530 + 1 * 361;
      break;
    }
    return g.__$u.c = function() {
      var n;
      !bI(A.peek()) && -5084 + -1 * 3379 + 83 * 102 === ((n = g.base) == null ? void (-6508 * -1 + -6846 + -169 * -2) : n.nodeType) ? g.base.data = A.peek() : (g.__$f |= 1, g.setState({}));
    }, rQ(function() {
      var n = e.value.value;
      return 223 * 42 + 4400 + -13766 === n ? 9 * 834 + 598 * -15 + -8 * -183 : !(4031 + -57 * 62 + -71 * 7) === n ? "" : n || "";
    });
  }, []);
  return A.value;
}
Z0.displayName = "_st";
var di = {};
di.configurable = !(8727 + -1 * -9329 + -122 * 148), di.value = void (-5093 + 845 * -5 + -3 * -3106);
var li = {};
li.configurable = !(-1 * 9425 + 5 * 1697 + 940), li.value = Z0;
var ui = {};
ui.configurable = !(-8209 + -25 * 307 + 15884), ui.get = function() {
  var o = {};
  return o.data = this, o;
};
var hi = {};
hi.configurable = !(-20 * -401 + -6542 + -1478), hi.value = 1;
var Qt = {};
Qt.constructor = di, Qt.type = li, Qt.props = ui, Qt.__b = hi, Object.defineProperties(IA.prototype, Qt), Ye("__b", function(o, g) {
  if (typeof g.type == "string") {
    var t, e = g.props;
    for (var A in e) if (A !== "children") {
      var i = e[A];
      i instanceof IA && (t || (g.__np = t = {}), t[A] = i, e[A] = i.peek());
    }
  }
  o(g);
}), Ye("__r", function(o, g) {
  no();
  var t, e = g.__c;
  e && (e.__$f &= -2, (t = e.__$u) === void 0 && (e.__$u = t = function(A) {
    var i;
    return zi(function() {
      i = this;
    }), i.c = function() {
      e.__$f |= 723 * -3 + 1 * -5039 + 7209, e.setState({});
    }, i;
  }())), no(t), o(g);
}), Ye("__e", function(o, g, t, e) {
  no(), o(g, t, e);
}), Ye("diffed", function(o, g) {
  no();
  var t;
  if (typeof g.type == "string" && (t = g.__e)) {
    var e = g.__np, A = g.props;
    if (e) {
      var i = t.U;
      if (i) for (var n in i) {
        var I = i[n];
        I !== void 0 && !(n in e) && (I.d(), i[n] = void (-1435 * -1 + -1419 + -16));
      }
      else t.U = i = {};
      for (var a in e) {
        var r = i[a], Q = e[a];
        void (-2 * 683 + -8360 + 9726) === r ? (r = BQ(t, a, Q, A), i[a] = r) : r.o(Q, A);
      }
    }
  }
  o(g);
});
function BQ(o, g, t, e) {
  var A = g in o && o.ownerSVGElement === void 0, i = K0(t);
  return { o: function(n, I) {
    i.value = n, e = I;
  }, d: zi(function() {
    var n = i.value.value;
    e[g] !== n && (e[g] = n, A ? o[g] = n : n ? o.setAttribute(g, n) : o.removeAttribute(g));
  }) };
}
Ye("unmount", function(o, g) {
  if (typeof g.type == "string") {
    var t = g.__e;
    if (t) {
      var e = t.U;
      if (e) {
        t.U = void (-1 * 9660 + 5047 + -659 * -7);
        for (var A in e) {
          var i = e[A];
          i && i.d();
        }
      }
    }
  } else {
    var n = g.__c;
    if (n) {
      var I = n.__$u;
      I && (n.__$u = void 0, I.d());
    }
  }
  o(g);
}), Ye("__h", function(o, g, t, e) {
  (e < 1777 * 3 + -1 * -3347 + -8675 || 6378 + 3 * -2123 === e) && (g.__$f |= 1 * 590 + -540 + -48), o(g, t, e);
}), kA.prototype.shouldComponentUpdate = function(o, g) {
  var t = this.__$u;
  if (!(t && void (3683 + -6662 * -1 + -10345) !== t.s || -4489 * -1 + -1626 + -1 * 2859 & this.__$f)) return !(13553 + 13553 * -1);
  if (-164 * -20 + -4941 + 416 * 4 & this.__$f) return !(4159 + 5639 * -1 + 4 * 370);
  for (var e in g) return !0;
  for (var A in o) if (A !== "__source" && o[A] !== this.props[A]) return !(3371 * 2 + 5311 * -1 + -477 * 3);
  for (var i in this.props) if (!(i in o)) return !(-1 * -7493 + 3 * -2113 + -1154);
  return !(-1 * 6658 + 1 * -7585 + 3 * 4748);
};
function V0(o) {
  return pA(function() {
    return K0(o);
  }, []);
}
const qo = tt(void 0);
qo.displayName = "CameraServiceContext";
function QQ() {
  const o = Be(qo);
  if (o === void 0)
    throw new Error(`${qo.displayName} must be used within a CameraServiceProvider`);
  return o;
}
async function _0() {
  return navigator.mediaDevices.enumerateDevices();
}
async function Ug() {
  return (await _0()).filter((g) => g.kind === "videoinput");
}
function Wg(o) {
  o.getTracks().forEach((t) => t.stop());
}
function eI(o) {
  return o.getVideoTracks()[0];
}
const Do = {};
Do.width = 1920, Do.height = 1080, Do.facingMode = Ro.FRONT;
const sQ = Do;
var he, He, MA;
class X0 {
  constructor({ defaultVideoConstrains: g = sQ, minCameraShorterSide: t = yB } = {}) {
    O(this, he);
    O(this, He, []);
    O(this, MA, null);
    const e = {};
    e.defaultVideoConstrains = g, e.minCameraShorterSide = t, W(this, he, e);
  }
  get availableCameraProperties() {
    return y(this, He);
  }
  get mediaStream() {
    return y(this, MA);
  }
  get videoTrack() {
    return y(this, MA) ? eI(y(this, MA)) : void (-69 * 3 + -46 * -106 + -4669);
  }
  get isCameraActive() {
    var g;
    return !!((g = y(this, MA)) != null && g.active);
  }
  static async requestPermission() {
    const g = {};
    g.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(g);
    Wg(t);
  }
  async open(g = {}) {
    Xn() && await Qi(450), W(this, MA, await navigator.mediaDevices.getUserMedia(g)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const g = await Ug();
    if (g.length <= 455 * 5 + 299 * 9 + -4965) return;
    const t = this.videoTrack.getConstraints(), e = this.videoTrack.getSettings(), A = g.findIndex((I) => I.deviceId === e.deviceId), i = g[A + (-1 * 8562 + 6796 + 1767)] ?? g[4365 + -127 * 53 + 338 * 7], n = this.getConstraints(t, i);
    this.close(), await this.open(n);
  }
  close() {
    y(this, MA) && (Wg(y(this, MA)), W(this, MA, null));
  }
  async getProperties() {
    const g = await this.getDeviceName(), t = this.getSettings(), e = { ...t };
    e.deviceName = g;
    const A = {};
    return A.currentCameraProperties = e, A.availableCameraProperties = y(this, He), A;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const g = this.getSettings();
    if (!g.width) throw new U("Video width is undefined");
    if (!g.height) throw new U("Video height is undefined");
    const t = {};
    return t.width = g.width, t.height = g.height, t;
  }
  async getDeviceName() {
    const g = this.getSettings(), t = await _0(), e = t.find((A) => A.deviceId === g.deviceId);
    return e == null ? void 0 : e.label;
  }
  async getBestCameraInfo(g) {
    return g === Ro.FRONT ? void (-6828 + -4477 * -1 + 2351 * 1) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    return Vi() ? (await Ug()).find((e) => e.label.includes("back") && e.label.includes("0")) : void (7167 + -1 * 7167);
  }
  async collectAvailableCamerasInfo() {
    const g = await Ug();
    for (const t of g) {
      Xn() && await Qi(37 * 185 + 1 * 4362 + -31 * 347);
      try {
        const e = {};
        e.deviceId = t.deviceId, e.width = 480;
        const A = {};
        A.video = e;
        const i = await navigator.mediaDevices.getUserMedia(A), n = eI(i);
        if (!n) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const I = n.getSettings(), a = { ...I };
        a.deviceName = n.label;
        const r = {};
        r.cameraProperties = a;
        const Q = r;
        y(this, He).push(Q), Wg(i);
      } catch (e) {
        e instanceof Error && U.logError(e);
      }
    }
  }
  getConstraints(g, t) {
    const e = { ...y(this, he).defaultVideoConstrains, ...g };
    e.deviceId = t ? { exact: t.deviceId } : void (743 * -5 + 130 * 22 + 855);
    const A = {};
    return A.video = e, A.audio = !1, A;
  }
  checkVideoTrackSettings() {
    var e;
    const g = (e = this.videoTrack) == null ? void 0 : e.getSettings();
    if (!(g != null && g.height) || !(g != null && g.width))
      throw this.close(), new U("Could not init camera settings");
    if (typeof y(this, he).minCameraShorterSide != "number") return;
    if (Math.min(g == null ? void 0 : g.width, g == null ? void 0 : g.height) < y(this, he).minCameraShorterSide)
      throw this.close(), new U("Could not init video because of low camera resolution: " + g.width + "x" + g.height + ".");
  }
}
he = new WeakMap(), He = new WeakMap(), MA = new WeakMap();
var Rt;
class cQ {
  constructor(g, t) {
    O(this, Rt, !1);
    this.videoHandler = g, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async collectAvailableCamerasInfo() {
    !this.cameraHandler.availableCameraProperties.length && await this.cameraHandler.collectAvailableCamerasInfo();
  }
  async requestCameraPermission() {
    y(this, Rt) || (W(this, Rt, !0), await X0.requestPermission());
  }
  async startVideoStream(g = {}) {
    await this.requestCameraPermission(), await this.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(g.facingMode), e = this.cameraHandler.getConstraints(g, t);
    await this.cameraHandler.open(e), NB() && (this.cameraHandler.close(), await this.cameraHandler.open(e)), await this.mountVideoStream();
  }
  takePhoto() {
    var A;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const g = (A = this.cameraHandler.videoTrack) == null ? void 0 : A.getSettings();
    if (!(g != null && g.width)) throw new U("Cant take photo - video width is undefined");
    if (!(g != null && g.height)) throw new U("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = g.width, t.height = g.height;
    const e = t.getContext("2d");
    if (!e) throw new U("Cant take photo - cant create context");
    return e.drawImage(this.videoHandler.videoElement, 2406 + 6751 * -1 + 4345, -257 * -28 + -35 * 223 + 609), { image: t, timestamp: Date.now() };
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
Rt = new WeakMap();
var _A;
class xQ {
  constructor(g) {
    O(this, _A);
    W(this, _A, g);
  }
  get videoElement() {
    return y(this, _A);
  }
  async play(g) {
    y(this, _A).srcObject = g, await y(this, _A).play();
  }
  stop() {
    y(this, _A).srcObject = null;
  }
  hasSrcObject() {
    return !!y(this, _A).srcObject;
  }
}
_A = new WeakMap();
function EQ(o) {
  const g = FA(null), [t, e] = fA(), [A, i] = fA(), { handleError: n, setIsCameraReady: I } = Se(), a = Ae((Q) => {
    i((C) => RB(Q, C));
  }, []);
  X(() => {
    if (!g.current) {
      n(new U("Something went wrong during video initialization"));
      return;
    }
    const Q = new xQ(g.current), C = new X0(), x = new cQ(Q, C);
    return (async () => {
      try {
        const E = {};
        E.facingMode = o, await x.startVideoStream(E);
      } catch (E) {
        if (E instanceof Error) {
          n(U.fromCameraError(E));
          return;
        }
      }
      e(x), I(!0), a(x.getCameraResolution());
    })(), () => {
      x == null || x.stopStreaming(), I(!1), e(void (8011 * -1 + -1059 * 5 + -1 * -13306));
    };
  }, [o, n, I, g, a]);
  const r = {};
  return r.cameraService = t, r.cameraResolution = A, r.onCameraResolutionChange = a, r.videoRef = g, r;
}
function dQ({ cameraFacing: o, children: g }) {
  const { cameraResolution: t, cameraService: e, onCameraResolutionChange: A, videoRef: i } = EQ(o), n = pA(
    () => ({
      cameraService: e,
      cameraResolution: t,
      onCameraResolutionChange: A,
      videoRef: i
    }),
    [e, t, A, i]
  );
  return /* @__PURE__ */ p(qo.Provider, { value: n, children: g });
}
const lQ = async () => WebAssembly.validate(new Uint8Array([0, -593 * -12 + 7670 + -14689, 8064 + -158 * 35 + -2419, 152 * 1 + -5781 + -1 * -5738, -2 * -3781 + -5850 + -1711, 12283 + -12283 * 1, 0, 0, -273 + -1 * -274, 9677 + 1493 * -1 + 1 * -8179, -1723 * -3 + 5 * 763 + -8983, 1 * 3944 + 774 + -4622, -659 * -1 + -7 * 1229 + 7944, -894 + 19 * -256 + 5759, -535 + 1 * 4027 + 3 * -1123, 5400 + 1799 * -3, 7664 + -43 * -53 + 9941 * -1, 1, 0, 10, 1557 * 3 + 4417 * -1 + -244 * 1, 1, 9491 * -1 + -5246 + 983 * 15, 1 * 3021 + 4891 * 1 + -7912, -5 * 134 + 2 * -2379 + -1 * -5493, 28 * -7 + -674 + -1 * -870, 253, 8 * 762 + 2959 + 226 * -40, 253, 2975 + -8025 * 1 + 156 * 33, 155 * 17 + -6752 + 4128]));
function uQ() {
  const [o] = window.crypto.getRandomValues(new Uint32Array(1));
  return o.toString(9075 + -9059 * 1);
}
function hQ() {
  const o = sessionStorage.getItem("dot-user-id");
  if (o) return o;
  const g = uQ();
  return sessionStorage.setItem("dot-user-id", g), g;
}
function fQ(o, g) {
  return g ? g === "user" ? "Front Camera" : "Back Camera" : o;
}
const fi = {};
fi.label = ">1m", fi.time = 60;
const pi = {};
pi.label = ">45", pi.time = 45;
const yi = {};
yi.label = ">30", yi.time = 30;
function pQ(o, g = [fi, pi, yi]) {
  const t = g.sort((e, A) => A.time - e.time);
  for (const e of t)
    if (o > e.time) return e.label;
  return "" + o;
}
const yQ = (o) => Math.round(o / 500) * 500 / 1e3, st = (o) => o ? o <= 1 ? Math.round(o * 20) / (1 * -2851 + -1 * -4742 + -1871 * 1) : Math.round(o / 50) * (315 + 24 * -115 + -499 * -5) : 2 * -3833 + -3724 + 11390, DQ = (o) => Math.round(o * 2) / (-2244 + -1 * -2246);
function wQ(o) {
  return o !== dA.RUNNING ? Oo.VISIBLE : Oo.VISIBLE_WITH_MASK;
}
async function mQ() {
  return await lQ() ? $n.SIMD : $n.NO_SIMD;
}
var se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, z0 = {}, tI = {}, bQ = GQ;
function GQ(o, g) {
  for (var t = new Array(arguments.length - 1), e = 0, A = 2, i = !0; A < arguments.length; )
    t[e++] = arguments[A++];
  return new Promise(function(n, I) {
    t[e] = function(a) {
      if (i)
        if (i = !1, a)
          I(a);
        else {
          for (var r = new Array(arguments.length - 1), Q = 0; Q < r.length; )
            r[Q++] = arguments[Q];
          n.apply(null, r);
        }
    };
    try {
      o.apply(g || null, t);
    } catch (a) {
      i && (i = !1, I(a));
    }
  });
}
var $0 = {};
(function(o) {
  var g = o;
  g.length = function(n) {
    var I = n.length;
    if (!I)
      return 0;
    for (var a = 0; --I % 4 > 1 && n.charAt(I) === "="; )
      ++a;
    return Math.ceil(n.length * 3) / 4 - a;
  };
  for (var t = new Array(64), e = new Array(123), A = 0; A < 64; )
    e[t[A] = A < 26 ? A + 65 : A < 52 ? A + 71 : A < 62 ? A - 4 : A - 59 | 43] = A++;
  g.encode = function(n, I, a) {
    for (var r = null, Q = [], C = 0, x = 0, c; I < a; ) {
      var E = n[I++];
      switch (x) {
        case 0:
          Q[C++] = t[E >> 2], c = (E & 3) << 4, x = 1;
          break;
        case 1:
          Q[C++] = t[c | E >> 4], c = (E & 15) << 2, x = 2;
          break;
        case 2:
          Q[C++] = t[c | E >> 6], Q[C++] = t[E & 63], x = 0;
          break;
      }
      C > 8191 && ((r || (r = [])).push(String.fromCharCode.apply(String, Q)), C = 0);
    }
    return x && (Q[C++] = t[c], Q[C++] = 61, x === 1 && (Q[C++] = 61)), r ? (C && r.push(String.fromCharCode.apply(String, Q.slice(0, C))), r.join("")) : String.fromCharCode.apply(String, Q.slice(0, C));
  };
  var i = "invalid encoding";
  g.decode = function(n, I, a) {
    for (var r = a, Q = 0, C, x = 0; x < n.length; ) {
      var c = n.charCodeAt(x++);
      if (c === 61 && Q > 1)
        break;
      if ((c = e[c]) === void 0)
        throw Error(i);
      switch (Q) {
        case 0:
          C = c, Q = 1;
          break;
        case 1:
          I[a++] = C << 2 | (c & 48) >> 4, C = c, Q = 2;
          break;
        case 2:
          I[a++] = (C & 15) << 4 | (c & 60) >> 2, C = c, Q = 3;
          break;
        case 3:
          I[a++] = (C & 3) << 6 | c, Q = 0;
          break;
      }
    }
    if (Q === 1)
      throw Error(i);
    return a - r;
  }, g.test = function(n) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(n);
  };
})($0);
var kQ = ug;
function ug() {
  this._listeners = {};
}
ug.prototype.on = function(o, g, t) {
  return (this._listeners[o] || (this._listeners[o] = [])).push({
    fn: g,
    ctx: t || this
  }), this;
};
ug.prototype.off = function(o, g) {
  if (o === void 0)
    this._listeners = {};
  else if (g === void 0)
    this._listeners[o] = [];
  else
    for (var t = this._listeners[o], e = 0; e < t.length; )
      t[e].fn === g ? t.splice(e, 1) : ++e;
  return this;
};
ug.prototype.emit = function(o) {
  var g = this._listeners[o];
  if (g) {
    for (var t = [], e = 1; e < arguments.length; )
      t.push(arguments[e++]);
    for (e = 0; e < g.length; )
      g[e].fn.apply(g[e++].ctx, t);
  }
  return this;
};
var NQ = oI(oI);
function oI(o) {
  return typeof Float32Array < "u" ? function() {
    var g = new Float32Array([-0]), t = new Uint8Array(g.buffer), e = t[3] === 128;
    function A(a, r, Q) {
      g[0] = a, r[Q] = t[0], r[Q + 1] = t[1], r[Q + 2] = t[2], r[Q + 3] = t[3];
    }
    function i(a, r, Q) {
      g[0] = a, r[Q] = t[3], r[Q + 1] = t[2], r[Q + 2] = t[1], r[Q + 3] = t[0];
    }
    o.writeFloatLE = e ? A : i, o.writeFloatBE = e ? i : A;
    function n(a, r) {
      return t[0] = a[r], t[1] = a[r + 1], t[2] = a[r + 2], t[3] = a[r + 3], g[0];
    }
    function I(a, r) {
      return t[3] = a[r], t[2] = a[r + 1], t[1] = a[r + 2], t[0] = a[r + 3], g[0];
    }
    o.readFloatLE = e ? n : I, o.readFloatBE = e ? I : n;
  }() : function() {
    function g(e, A, i, n) {
      var I = A < 0 ? 1 : 0;
      if (I && (A = -A), A === 0)
        e(1 / A > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), i, n);
      else if (isNaN(A))
        e(2143289344, i, n);
      else if (A > 34028234663852886e22)
        e((I << 31 | 2139095040) >>> 0, i, n);
      else if (A < 11754943508222875e-54)
        e((I << 31 | Math.round(A / 1401298464324817e-60)) >>> 0, i, n);
      else {
        var a = Math.floor(Math.log(A) / Math.LN2), r = Math.round(A * Math.pow(2, -a) * 8388608) & 8388607;
        e((I << 31 | a + 127 << 23 | r) >>> 0, i, n);
      }
    }
    o.writeFloatLE = g.bind(null, gI), o.writeFloatBE = g.bind(null, iI);
    function t(e, A, i) {
      var n = e(A, i), I = (n >> 31) * 2 + 1, a = n >>> 23 & 255, r = n & 8388607;
      return a === 255 ? r ? NaN : I * (1 / 0) : a === 0 ? I * 1401298464324817e-60 * r : I * Math.pow(2, a - 150) * (r + 8388608);
    }
    o.readFloatLE = t.bind(null, nI), o.readFloatBE = t.bind(null, II);
  }(), typeof Float64Array < "u" ? function() {
    var g = new Float64Array([-0]), t = new Uint8Array(g.buffer), e = t[7] === 128;
    function A(a, r, Q) {
      g[0] = a, r[Q] = t[0], r[Q + 1] = t[1], r[Q + 2] = t[2], r[Q + 3] = t[3], r[Q + 4] = t[4], r[Q + 5] = t[5], r[Q + 6] = t[6], r[Q + 7] = t[7];
    }
    function i(a, r, Q) {
      g[0] = a, r[Q] = t[7], r[Q + 1] = t[6], r[Q + 2] = t[5], r[Q + 3] = t[4], r[Q + 4] = t[3], r[Q + 5] = t[2], r[Q + 6] = t[1], r[Q + 7] = t[0];
    }
    o.writeDoubleLE = e ? A : i, o.writeDoubleBE = e ? i : A;
    function n(a, r) {
      return t[0] = a[r], t[1] = a[r + 1], t[2] = a[r + 2], t[3] = a[r + 3], t[4] = a[r + 4], t[5] = a[r + 5], t[6] = a[r + 6], t[7] = a[r + 7], g[0];
    }
    function I(a, r) {
      return t[7] = a[r], t[6] = a[r + 1], t[5] = a[r + 2], t[4] = a[r + 3], t[3] = a[r + 4], t[2] = a[r + 5], t[1] = a[r + 6], t[0] = a[r + 7], g[0];
    }
    o.readDoubleLE = e ? n : I, o.readDoubleBE = e ? I : n;
  }() : function() {
    function g(e, A, i, n, I, a) {
      var r = n < 0 ? 1 : 0;
      if (r && (n = -n), n === 0)
        e(0, I, a + A), e(1 / n > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), I, a + i);
      else if (isNaN(n))
        e(0, I, a + A), e(2146959360, I, a + i);
      else if (n > 17976931348623157e292)
        e(0, I, a + A), e((r << 31 | 2146435072) >>> 0, I, a + i);
      else {
        var Q;
        if (n < 22250738585072014e-324)
          Q = n / 5e-324, e(Q >>> 0, I, a + A), e((r << 31 | Q / 4294967296) >>> 0, I, a + i);
        else {
          var C = Math.floor(Math.log(n) / Math.LN2);
          C === 1024 && (C = 1023), Q = n * Math.pow(2, -C), e(Q * 4503599627370496 >>> 0, I, a + A), e((r << 31 | C + 1023 << 20 | Q * 1048576 & 1048575) >>> 0, I, a + i);
        }
      }
    }
    o.writeDoubleLE = g.bind(null, gI, 0, 4), o.writeDoubleBE = g.bind(null, iI, 4, 0);
    function t(e, A, i, n, I) {
      var a = e(n, I + A), r = e(n, I + i), Q = (r >> 31) * 2 + 1, C = r >>> 20 & 2047, x = 4294967296 * (r & 1048575) + a;
      return C === 2047 ? x ? NaN : Q * (1 / 0) : C === 0 ? Q * 5e-324 * x : Q * Math.pow(2, C - 1075) * (x + 4503599627370496);
    }
    o.readDoubleLE = t.bind(null, nI, 0, 4), o.readDoubleBE = t.bind(null, II, 4, 0);
  }(), o;
}
function gI(o, g, t) {
  g[t] = o & 255, g[t + 1] = o >>> 8 & 255, g[t + 2] = o >>> 16 & 255, g[t + 3] = o >>> 24;
}
function iI(o, g, t) {
  g[t] = o >>> 24, g[t + 1] = o >>> 16 & 255, g[t + 2] = o >>> 8 & 255, g[t + 3] = o & 255;
}
function nI(o, g) {
  return (o[g] | o[g + 1] << 8 | o[g + 2] << 16 | o[g + 3] << 24) >>> 0;
}
function II(o, g) {
  return (o[g] << 24 | o[g + 1] << 16 | o[g + 2] << 8 | o[g + 3]) >>> 0;
}
function aI(o) {
  throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var SQ = FQ;
function FQ(o) {
  try {
    if (typeof aI != "function")
      return null;
    var g = aI(o);
    return g && (g.length || Object.keys(g).length) ? g : null;
  } catch {
    return null;
  }
}
var Aa = {};
(function(o) {
  var g = o;
  g.length = function(t) {
    for (var e = 0, A = 0, i = 0; i < t.length; ++i)
      A = t.charCodeAt(i), A < 128 ? e += 1 : A < 2048 ? e += 2 : (A & 64512) === 55296 && (t.charCodeAt(i + 1) & 64512) === 56320 ? (++i, e += 4) : e += 3;
    return e;
  }, g.read = function(t, e, A) {
    var i = A - e;
    if (i < 1)
      return "";
    for (var n = null, I = [], a = 0, r; e < A; )
      r = t[e++], r < 128 ? I[a++] = r : r > 191 && r < 224 ? I[a++] = (r & 31) << 6 | t[e++] & 63 : r > 239 && r < 365 ? (r = ((r & 7) << 18 | (t[e++] & 63) << 12 | (t[e++] & 63) << 6 | t[e++] & 63) - 65536, I[a++] = 55296 + (r >> 10), I[a++] = 56320 + (r & 1023)) : I[a++] = (r & 15) << 12 | (t[e++] & 63) << 6 | t[e++] & 63, a > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, I)), a = 0);
    return n ? (a && n.push(String.fromCharCode.apply(String, I.slice(0, a))), n.join("")) : String.fromCharCode.apply(String, I.slice(0, a));
  }, g.write = function(t, e, A) {
    for (var i = A, n, I, a = 0; a < t.length; ++a)
      n = t.charCodeAt(a), n < 128 ? e[A++] = n : n < 2048 ? (e[A++] = n >> 6 | 192, e[A++] = n & 63 | 128) : (n & 64512) === 55296 && ((I = t.charCodeAt(a + 1)) & 64512) === 56320 ? (n = 65536 + ((n & 1023) << 10) + (I & 1023), ++a, e[A++] = n >> 18 | 240, e[A++] = n >> 12 & 63 | 128, e[A++] = n >> 6 & 63 | 128, e[A++] = n & 63 | 128) : (e[A++] = n >> 12 | 224, e[A++] = n >> 6 & 63 | 128, e[A++] = n & 63 | 128);
    return A - i;
  };
})(Aa);
var RQ = MQ;
function MQ(o, g, t) {
  var e = t || 8192, A = e >>> 1, i = null, n = e;
  return function(I) {
    if (I < 1 || I > A)
      return o(I);
    n + I > e && (i = o(e), n = 0);
    var a = g.call(i, n, n += I);
    return n & 7 && (n = (n | 7) + 1), a;
  };
}
var Yg, rI;
function vQ() {
  if (rI)
    return Yg;
  rI = 1, Yg = g;
  var o = Fe();
  function g(i, n) {
    this.lo = i >>> 0, this.hi = n >>> 0;
  }
  var t = g.zero = new g(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var e = g.zeroHash = "\0\0\0\0\0\0\0\0";
  g.fromNumber = function(i) {
    if (i === 0)
      return t;
    var n = i < 0;
    n && (i = -i);
    var I = i >>> 0, a = (i - I) / 4294967296 >>> 0;
    return n && (a = ~a >>> 0, I = ~I >>> 0, ++I > 4294967295 && (I = 0, ++a > 4294967295 && (a = 0))), new g(I, a);
  }, g.from = function(i) {
    if (typeof i == "number")
      return g.fromNumber(i);
    if (o.isString(i))
      if (o.Long)
        i = o.Long.fromString(i);
      else
        return g.fromNumber(parseInt(i, 10));
    return i.low || i.high ? new g(i.low >>> 0, i.high >>> 0) : t;
  }, g.prototype.toNumber = function(i) {
    if (!i && this.hi >>> 31) {
      var n = ~this.lo + 1 >>> 0, I = ~this.hi >>> 0;
      return n || (I = I + 1 >>> 0), -(n + I * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, g.prototype.toLong = function(i) {
    return o.Long ? new o.Long(this.lo | 0, this.hi | 0, !!i) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!i };
  };
  var A = String.prototype.charCodeAt;
  return g.fromHash = function(i) {
    return i === e ? t : new g(
      (A.call(i, 0) | A.call(i, 1) << 8 | A.call(i, 2) << 16 | A.call(i, 3) << 24) >>> 0,
      (A.call(i, 4) | A.call(i, 5) << 8 | A.call(i, 6) << 16 | A.call(i, 7) << 24) >>> 0
    );
  }, g.prototype.toHash = function() {
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
  }, g.prototype.zzEncode = function() {
    var i = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ i) >>> 0, this.lo = (this.lo << 1 ^ i) >>> 0, this;
  }, g.prototype.zzDecode = function() {
    var i = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ i) >>> 0, this.hi = (this.hi >>> 1 ^ i) >>> 0, this;
  }, g.prototype.length = function() {
    var i = this.lo, n = (this.lo >>> 28 | this.hi << 4) >>> 0, I = this.hi >>> 24;
    return I === 0 ? n === 0 ? i < 16384 ? i < 128 ? 1 : 2 : i < 2097152 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 2097152 ? 7 : 8 : I < 128 ? 9 : 10;
  }, Yg;
}
var CI;
function Fe() {
  return CI || (CI = 1, function(o) {
    var g = o;
    g.asPromise = bQ, g.base64 = $0, g.EventEmitter = kQ, g.float = NQ, g.inquire = SQ, g.utf8 = Aa, g.pool = RQ, g.LongBits = vQ(), g.isNode = !!(typeof se < "u" && se && se.process && se.process.versions && se.process.versions.node), g.global = g.isNode && se || typeof window < "u" && window || typeof self < "u" && self || se, g.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), g.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), g.isInteger = Number.isInteger || /* istanbul ignore next */
    function(A) {
      return typeof A == "number" && isFinite(A) && Math.floor(A) === A;
    }, g.isString = function(A) {
      return typeof A == "string" || A instanceof String;
    }, g.isObject = function(A) {
      return A && typeof A == "object";
    }, g.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    g.isSet = function(A, i) {
      var n = A[i];
      return n != null && A.hasOwnProperty(i) ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0 : !1;
    }, g.Buffer = function() {
      try {
        var A = g.inquire("buffer").Buffer;
        return A.prototype.utf8Write ? A : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), g._Buffer_from = null, g._Buffer_allocUnsafe = null, g.newBuffer = function(A) {
      return typeof A == "number" ? g.Buffer ? g._Buffer_allocUnsafe(A) : new g.Array(A) : g.Buffer ? g._Buffer_from(A) : typeof Uint8Array > "u" ? A : new Uint8Array(A);
    }, g.Array = typeof Uint8Array < "u" ? Uint8Array : Array, g.Long = /* istanbul ignore next */
    g.global.dcodeIO && /* istanbul ignore next */
    g.global.dcodeIO.Long || /* istanbul ignore next */
    g.global.Long || g.inquire("long"), g.key2Re = /^true|false|0|1$/, g.key32Re = /^-?(?:0|[1-9][0-9]*)$/, g.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, g.longToHash = function(A) {
      return A ? g.LongBits.from(A).toHash() : g.LongBits.zeroHash;
    }, g.longFromHash = function(A, i) {
      var n = g.LongBits.fromHash(A);
      return g.Long ? g.Long.fromBits(n.lo, n.hi, i) : n.toNumber(!!i);
    };
    function t(A, i, n) {
      for (var I = Object.keys(i), a = 0; a < I.length; ++a)
        (A[I[a]] === void 0 || !n) && (A[I[a]] = i[I[a]]);
      return A;
    }
    g.merge = t, g.lcFirst = function(A) {
      return A.charAt(0).toLowerCase() + A.substring(1);
    };
    function e(A) {
      function i(n, I) {
        if (!(this instanceof i))
          return new i(n, I);
        Object.defineProperty(this, "message", { get: function() {
          return n;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, i) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), I && t(this, I);
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
      }), i;
    }
    g.newError = e, g.ProtocolError = e("ProtocolError"), g.oneOfGetter = function(A) {
      for (var i = {}, n = 0; n < A.length; ++n)
        i[A[n]] = 1;
      return function() {
        for (var I = Object.keys(this), a = I.length - 1; a > -1; --a)
          if (i[I[a]] === 1 && this[I[a]] !== void 0 && this[I[a]] !== null)
            return I[a];
      };
    }, g.oneOfSetter = function(A) {
      return function(i) {
        for (var n = 0; n < A.length; ++n)
          A[n] !== i && delete this[A[n]];
      };
    }, g.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, g._configure = function() {
      var A = g.Buffer;
      if (!A) {
        g._Buffer_from = g._Buffer_allocUnsafe = null;
        return;
      }
      g._Buffer_from = A.from !== Uint8Array.from && A.from || /* istanbul ignore next */
      function(i, n) {
        return new A(i, n);
      }, g._Buffer_allocUnsafe = A.allocUnsafe || /* istanbul ignore next */
      function(i) {
        return new A(i);
      };
    };
  }(tI)), tI;
}
var ea = L, NA = Fe(), Di, hg = NA.LongBits, BI = NA.base64, QI = NA.utf8;
function Zt(o, g, t) {
  this.fn = o, this.len = g, this.next = void 0, this.val = t;
}
function $i() {
}
function LQ(o) {
  this.head = o.head, this.tail = o.tail, this.len = o.len, this.next = o.states;
}
function L() {
  this.len = 0, this.head = new Zt($i, 0, 0), this.tail = this.head, this.states = null;
}
var ta = function() {
  return NA.Buffer ? function() {
    return (L.create = function() {
      return new Di();
    })();
  } : function() {
    return new L();
  };
};
L.create = ta();
L.alloc = function(o) {
  return new NA.Array(o);
};
NA.Array !== Array && (L.alloc = NA.pool(L.alloc, NA.Array.prototype.subarray));
L.prototype._push = function(o, g, t) {
  return this.tail = this.tail.next = new Zt(o, g, t), this.len += g, this;
};
function An(o, g, t) {
  g[t] = o & 255;
}
function JQ(o, g, t) {
  for (; o > 127; )
    g[t++] = o & 127 | 128, o >>>= 7;
  g[t] = o;
}
function en(o, g) {
  this.len = o, this.next = void 0, this.val = g;
}
en.prototype = Object.create(Zt.prototype);
en.prototype.fn = JQ;
L.prototype.uint32 = function(o) {
  return this.len += (this.tail = this.tail.next = new en(
    (o = o >>> 0) < 128 ? 1 : o < 16384 ? 2 : o < 2097152 ? 3 : o < 268435456 ? 4 : 5,
    o
  )).len, this;
};
L.prototype.int32 = function(o) {
  return o < 0 ? this._push(tn, 10, hg.fromNumber(o)) : this.uint32(o);
};
L.prototype.sint32 = function(o) {
  return this.uint32((o << 1 ^ o >> 31) >>> 0);
};
function tn(o, g, t) {
  for (; o.hi; )
    g[t++] = o.lo & 127 | 128, o.lo = (o.lo >>> 7 | o.hi << 25) >>> 0, o.hi >>>= 7;
  for (; o.lo > 127; )
    g[t++] = o.lo & 127 | 128, o.lo = o.lo >>> 7;
  g[t++] = o.lo;
}
L.prototype.uint64 = function(o) {
  var g = hg.from(o);
  return this._push(tn, g.length(), g);
};
L.prototype.int64 = L.prototype.uint64;
L.prototype.sint64 = function(o) {
  var g = hg.from(o).zzEncode();
  return this._push(tn, g.length(), g);
};
L.prototype.bool = function(o) {
  return this._push(An, 1, o ? 1 : 0);
};
function wi(o, g, t) {
  g[t] = o & 255, g[t + 1] = o >>> 8 & 255, g[t + 2] = o >>> 16 & 255, g[t + 3] = o >>> 24;
}
L.prototype.fixed32 = function(o) {
  return this._push(wi, 4, o >>> 0);
};
L.prototype.sfixed32 = L.prototype.fixed32;
L.prototype.fixed64 = function(o) {
  var g = hg.from(o);
  return this._push(wi, 4, g.lo)._push(wi, 4, g.hi);
};
L.prototype.sfixed64 = L.prototype.fixed64;
L.prototype.float = function(o) {
  return this._push(NA.float.writeFloatLE, 4, o);
};
L.prototype.double = function(o) {
  return this._push(NA.float.writeDoubleLE, 8, o);
};
var UQ = NA.Array.prototype.set ? function(o, g, t) {
  g.set(o, t);
} : function(o, g, t) {
  for (var e = 0; e < o.length; ++e)
    g[t + e] = o[e];
};
L.prototype.bytes = function(o) {
  var g = o.length >>> 0;
  if (!g)
    return this._push(An, 1, 0);
  if (NA.isString(o)) {
    var t = L.alloc(g = BI.length(o));
    BI.decode(o, t, 0), o = t;
  }
  return this.uint32(g)._push(UQ, g, o);
};
L.prototype.string = function(o) {
  var g = QI.length(o);
  return g ? this.uint32(g)._push(QI.write, g, o) : this._push(An, 1, 0);
};
L.prototype.fork = function() {
  return this.states = new LQ(this), this.head = this.tail = new Zt($i, 0, 0), this.len = 0, this;
};
L.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Zt($i, 0, 0), this.len = 0), this;
};
L.prototype.ldelim = function() {
  var o = this.head, g = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = o.next, this.tail = g, this.len += t), this;
};
L.prototype.finish = function() {
  for (var o = this.head.next, g = this.constructor.alloc(this.len), t = 0; o; )
    o.fn(o.val, g, t), t += o.len, o = o.next;
  return g;
};
L._configure = function(o) {
  Di = o, L.create = ta(), Di._configure();
};
var WQ = KA, oa = ea;
(KA.prototype = Object.create(oa.prototype)).constructor = KA;
var ae = Fe();
function KA() {
  oa.call(this);
}
KA._configure = function() {
  KA.alloc = ae._Buffer_allocUnsafe, KA.writeBytesBuffer = ae.Buffer && ae.Buffer.prototype instanceof Uint8Array && ae.Buffer.prototype.set.name === "set" ? function(o, g, t) {
    g.set(o, t);
  } : function(o, g, t) {
    if (o.copy)
      o.copy(g, t, 0, o.length);
    else
      for (var e = 0; e < o.length; )
        g[t++] = o[e++];
  };
};
KA.prototype.bytes = function(o) {
  ae.isString(o) && (o = ae._Buffer_from(o, "base64"));
  var g = o.length >>> 0;
  return this.uint32(g), g && this._push(KA.writeBytesBuffer, g, o), this;
};
function YQ(o, g, t) {
  o.length < 40 ? ae.utf8.write(o, g, t) : g.utf8Write ? g.utf8Write(o, t) : g.write(o, t);
}
KA.prototype.string = function(o) {
  var g = ae.Buffer.byteLength(o);
  return this.uint32(g), g && this._push(YQ, g, o), this;
};
KA._configure();
var ga = z, TA = Fe(), mi, ia = TA.LongBits, OQ = TA.utf8;
function LA(o, g) {
  return RangeError("index out of range: " + o.pos + " + " + (g || 1) + " > " + o.len);
}
function z(o) {
  this.buf = o, this.pos = 0, this.len = o.length;
}
var sI = typeof Uint8Array < "u" ? function(o) {
  if (o instanceof Uint8Array || Array.isArray(o))
    return new z(o);
  throw Error("illegal buffer");
} : function(o) {
  if (Array.isArray(o))
    return new z(o);
  throw Error("illegal buffer");
}, na = function() {
  return TA.Buffer ? function(o) {
    return (z.create = function(g) {
      return TA.Buffer.isBuffer(g) ? new mi(g) : sI(g);
    })(o);
  } : sI;
};
z.create = na();
z.prototype._slice = TA.Array.prototype.subarray || /* istanbul ignore next */
TA.Array.prototype.slice;
z.prototype.uint32 = /* @__PURE__ */ function() {
  var o = 4294967295;
  return function() {
    if (o = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return o;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, LA(this, 10);
    return o;
  };
}();
z.prototype.int32 = function() {
  return this.uint32() | 0;
};
z.prototype.sint32 = function() {
  var o = this.uint32();
  return o >>> 1 ^ -(o & 1) | 0;
};
function Og() {
  var o = new ia(0, 0), g = 0;
  if (this.len - this.pos > 4) {
    for (; g < 4; ++g)
      if (o.lo = (o.lo | (this.buf[this.pos] & 127) << g * 7) >>> 0, this.buf[this.pos++] < 128)
        return o;
    if (o.lo = (o.lo | (this.buf[this.pos] & 127) << 28) >>> 0, o.hi = (o.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return o;
    g = 0;
  } else {
    for (; g < 3; ++g) {
      if (this.pos >= this.len)
        throw LA(this);
      if (o.lo = (o.lo | (this.buf[this.pos] & 127) << g * 7) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
    return o.lo = (o.lo | (this.buf[this.pos++] & 127) << g * 7) >>> 0, o;
  }
  if (this.len - this.pos > 4) {
    for (; g < 5; ++g)
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << g * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
  } else
    for (; g < 5; ++g) {
      if (this.pos >= this.len)
        throw LA(this);
      if (o.hi = (o.hi | (this.buf[this.pos] & 127) << g * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return o;
    }
  throw Error("invalid varint encoding");
}
z.prototype.bool = function() {
  return this.uint32() !== 0;
};
function jo(o, g) {
  return (o[g - 4] | o[g - 3] << 8 | o[g - 2] << 16 | o[g - 1] << 24) >>> 0;
}
z.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw LA(this, 4);
  return jo(this.buf, this.pos += 4);
};
z.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw LA(this, 4);
  return jo(this.buf, this.pos += 4) | 0;
};
function cI() {
  if (this.pos + 8 > this.len)
    throw LA(this, 8);
  return new ia(jo(this.buf, this.pos += 4), jo(this.buf, this.pos += 4));
}
z.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw LA(this, 4);
  var o = TA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, o;
};
z.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw LA(this, 4);
  var o = TA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, o;
};
z.prototype.bytes = function() {
  var o = this.uint32(), g = this.pos, t = this.pos + o;
  if (t > this.len)
    throw LA(this, o);
  return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(g, t) : g === t ? new this.buf.constructor(0) : this._slice.call(this.buf, g, t);
};
z.prototype.string = function() {
  var o = this.bytes();
  return OQ.read(o, 0, o.length);
};
z.prototype.skip = function(o) {
  if (typeof o == "number") {
    if (this.pos + o > this.len)
      throw LA(this, o);
    this.pos += o;
  } else
    do
      if (this.pos >= this.len)
        throw LA(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
z.prototype.skipType = function(o) {
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
z._configure = function(o) {
  mi = o, z.create = na(), mi._configure();
  var g = TA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  TA.merge(z.prototype, {
    int64: function() {
      return Og.call(this)[g](!1);
    },
    uint64: function() {
      return Og.call(this)[g](!0);
    },
    sint64: function() {
      return Og.call(this).zzDecode()[g](!1);
    },
    fixed64: function() {
      return cI.call(this)[g](!0);
    },
    sfixed64: function() {
      return cI.call(this)[g](!1);
    }
  });
};
var HQ = Ne, Ia = ga;
(Ne.prototype = Object.create(Ia.prototype)).constructor = Ne;
var xI = Fe();
function Ne(o) {
  Ia.call(this, o);
}
Ne._configure = function() {
  xI.Buffer && (Ne.prototype._slice = xI.Buffer.prototype.slice);
};
Ne.prototype.string = function() {
  var o = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + o, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + o, this.len));
};
Ne._configure();
var aa = {}, KQ = St, on = Fe();
(St.prototype = Object.create(on.EventEmitter.prototype)).constructor = St;
function St(o, g, t) {
  if (typeof o != "function")
    throw TypeError("rpcImpl must be a function");
  on.EventEmitter.call(this), this.rpcImpl = o, this.requestDelimited = !!g, this.responseDelimited = !!t;
}
St.prototype.rpcCall = function o(g, t, e, A, i) {
  if (!A)
    throw TypeError("request must be specified");
  var n = this;
  if (!i)
    return on.asPromise(o, n, g, t, e, A);
  if (!n.rpcImpl) {
    setTimeout(function() {
      i(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return n.rpcImpl(
      g,
      t[n.requestDelimited ? "encodeDelimited" : "encode"](A).finish(),
      function(I, a) {
        if (I)
          return n.emit("error", I, g), i(I);
        if (a === null) {
          n.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(a instanceof e))
          try {
            a = e[n.responseDelimited ? "decodeDelimited" : "decode"](a);
          } catch (r) {
            return n.emit("error", r, g), i(r);
          }
        return n.emit("data", a, g), i(null, a);
      }
    );
  } catch (I) {
    n.emit("error", I, g), setTimeout(function() {
      i(I);
    }, 0);
    return;
  }
};
St.prototype.end = function(o) {
  return this.rpcImpl && (o || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(o) {
  var g = o;
  g.Service = KQ;
})(aa);
var TQ = {};
(function(o) {
  var g = o;
  g.build = "minimal", g.Writer = ea, g.BufferWriter = WQ, g.Reader = ga, g.BufferReader = HQ, g.util = Fe(), g.rpc = aa, g.roots = TQ, g.configure = t;
  function t() {
    g.util._configure(), g.Writer._configure(g.BufferWriter), g.Reader._configure(g.BufferReader);
  }
  t();
})(z0);
var F = z0;
const f = F.Reader, v = F.Writer, d = F.util, B = F.roots.default || (F.roots.default = {}), et = B.dot = (() => {
  const o = {};
  return o.Content = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.token = d.newBuffer([]), g.prototype.iv = d.newBuffer([]), g.prototype.schemaVersion = 0, g.prototype.bytes = d.newBuffer([]), g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && e.uint32(
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
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.Content();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
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
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || d.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || d.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !d.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.Content)
        return t;
      let e = new B.dot.Content();
      return t.token != null && (typeof t.token == "string" ? d.base64.decode(t.token, e.token = d.newBuffer(d.base64.length(t.token)), 0) : t.token.length >= 0 && (e.token = t.token)), t.iv != null && (typeof t.iv == "string" ? d.base64.decode(t.iv, e.iv = d.newBuffer(d.base64.length(t.iv)), 0) : t.iv.length >= 0 && (e.iv = t.iv)), t.schemaVersion != null && (e.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.token = "" : (A.token = [], e.bytes !== Array && (A.token = d.newBuffer(A.token))), e.bytes === String ? A.iv = "" : (A.iv = [], e.bytes !== Array && (A.iv = d.newBuffer(A.iv))), A.schemaVersion = 0, e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.token != null && t.hasOwnProperty("token") && (A.token = e.bytes === String ? d.base64.encode(t.token, 0, t.token.length) : e.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (A.iv = e.bytes === String ? d.base64.encode(t.iv, 0, t.iv.length) : e.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (A.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, F.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, g;
  }(), o.v4 = function() {
    const g = {};
    return g.MagnifEyeLivenessContent = function() {
      function t(e) {
        if (this.images = [], e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.images = d.emptyArray, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        if (A || (A = v.create()), e.images != null && e.images.length)
          for (let i = 0; i < e.images.length; ++i)
            B.dot.Image.encode(e.images[i], A.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.MagnifEyeLivenessContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.images && n.images.length || (n.images = []), n.images.push(B.dot.Image.decode(e, e.uint32()));
              break;
            }
            case 2: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.images != null && e.hasOwnProperty("images")) {
          if (!Array.isArray(e.images))
            return "images: array expected";
          for (let A = 0; A < e.images.length; ++A) {
            let i = B.dot.Image.verify(e.images[A]);
            if (i)
              return "images." + i;
          }
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.MagnifEyeLivenessContent)
          return e;
        let A = new B.dot.v4.MagnifEyeLivenessContent();
        if (e.images) {
          if (!Array.isArray(e.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          A.images = [];
          for (let i = 0; i < e.images.length; ++i) {
            if (typeof e.images[i] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            A.images[i] = B.dot.Image.fromObject(e.images[i]);
          }
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        if ((A.arrays || A.defaults) && (i.images = []), A.defaults && (i.metadata = null), e.images && e.images.length) {
          i.images = [];
          for (let n = 0; n < e.images.length; ++n)
            i.images[n] = B.dot.Image.toObject(e.images[n], A);
        }
        return e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), g.Metadata = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let e;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: d.oneOfGetter(e = ["sessionToken"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: d.oneOfGetter(e = ["web", "android", "ios"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.platform != null && Object.hasOwnProperty.call(A, "platform") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.platform), A.web != null && Object.hasOwnProperty.call(A, "web") && B.dot.v4.WebMetadata.encode(A.web, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.android != null && Object.hasOwnProperty.call(A, "android") && B.dot.v4.AndroidMetadata.encode(A.android, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.ios != null && Object.hasOwnProperty.call(A, "ios") && B.dot.v4.IosMetadata.encode(A.ios, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.sessionToken != null && Object.hasOwnProperty.call(A, "sessionToken") && i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.sessionToken), A.componentVersion != null && Object.hasOwnProperty.call(A, "componentVersion") && i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(A.componentVersion), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.Metadata();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.platform = A.int32();
              break;
            }
            case 5: {
              I.sessionToken = A.string();
              break;
            }
            case 6: {
              I.componentVersion = A.string();
              break;
            }
            case 2: {
              I.web = B.dot.v4.WebMetadata.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.android = B.dot.v4.AndroidMetadata.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.ios = B.dot.v4.IosMetadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let i = {};
        if (A.platform != null && A.hasOwnProperty("platform"))
          switch (A.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (A.sessionToken != null && A.hasOwnProperty("sessionToken") && (i._sessionToken = 1, !d.isString(A.sessionToken)))
          return "sessionToken: string expected";
        if (A.componentVersion != null && A.hasOwnProperty("componentVersion") && !d.isString(A.componentVersion))
          return "componentVersion: string expected";
        if (A.web != null && A.hasOwnProperty("web")) {
          i.metadata = 1;
          {
            let n = B.dot.v4.WebMetadata.verify(A.web);
            if (n)
              return "web." + n;
          }
        }
        if (A.android != null && A.hasOwnProperty("android")) {
          if (i.metadata === 1)
            return "metadata: multiple values";
          i.metadata = 1;
          {
            let n = B.dot.v4.AndroidMetadata.verify(A.android);
            if (n)
              return "android." + n;
          }
        }
        if (A.ios != null && A.hasOwnProperty("ios")) {
          if (i.metadata === 1)
            return "metadata: multiple values";
          i.metadata = 1;
          {
            let n = B.dot.v4.IosMetadata.verify(A.ios);
            if (n)
              return "ios." + n;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Metadata)
          return A;
        let i = new B.dot.v4.Metadata();
        switch (A.platform) {
          default:
            if (typeof A.platform == "number") {
              i.platform = A.platform;
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
        if (A.sessionToken != null && (i.sessionToken = String(A.sessionToken)), A.componentVersion != null && (i.componentVersion = String(A.componentVersion)), A.web != null) {
          if (typeof A.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          i.web = B.dot.v4.WebMetadata.fromObject(A.web);
        }
        if (A.android != null) {
          if (typeof A.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          i.android = B.dot.v4.AndroidMetadata.fromObject(A.android);
        }
        if (A.ios != null) {
          if (typeof A.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          i.ios = B.dot.v4.IosMetadata.fromObject(A.ios);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.platform = i.enums === String ? "WEB" : 0, n.componentVersion = ""), A.platform != null && A.hasOwnProperty("platform") && (n.platform = i.enums === String ? B.dot.Platform[A.platform] === void 0 ? A.platform : B.dot.Platform[A.platform] : A.platform), A.web != null && A.hasOwnProperty("web") && (n.web = B.dot.v4.WebMetadata.toObject(A.web, i), i.oneofs && (n.metadata = "web")), A.android != null && A.hasOwnProperty("android") && (n.android = B.dot.v4.AndroidMetadata.toObject(A.android, i), i.oneofs && (n.metadata = "android")), A.ios != null && A.hasOwnProperty("ios") && (n.ios = B.dot.v4.IosMetadata.toObject(A.ios, i), i.oneofs && (n.metadata = "ios")), A.sessionToken != null && A.hasOwnProperty("sessionToken") && (n.sessionToken = A.sessionToken, i.oneofs && (n._sessionToken = "sessionToken")), A.componentVersion != null && A.hasOwnProperty("componentVersion") && (n.componentVersion = A.componentVersion), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Metadata";
      }, t;
    }(), g.AndroidMetadata = function() {
      function t(A) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.supportedAbis = d.emptyArray, t.prototype.device = null, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.dynamicCameraFrameProperties = d.emptyObject, t.prototype.tamperingIndicators = null, t.prototype.croppedYuv420Image = null;
      let e;
      return Object.defineProperty(t.prototype, "_device", {
        get: d.oneOfGetter(e = ["device"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_camera", {
        get: d.oneOfGetter(e = ["camera"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: d.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_tamperingIndicators", {
        get: d.oneOfGetter(e = ["tamperingIndicators"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_croppedYuv420Image", {
        get: d.oneOfGetter(e = ["croppedYuv420Image"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        if (i || (i = v.create()), A.supportedAbis != null && A.supportedAbis.length)
          for (let n = 0; n < A.supportedAbis.length; ++n)
            i.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(A.supportedAbis[n]);
        if (A.device != null && Object.hasOwnProperty.call(A, "device") && i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(A.device), A.digests != null && A.digests.length)
          for (let n = 0; n < A.digests.length; ++n)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[n]);
        if (A.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(A, "dynamicCameraFrameProperties"))
          for (let n = Object.keys(A.dynamicCameraFrameProperties), I = 0; I < n.length; ++I)
            i.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n[I]), B.dot.Int32List.encode(A.dynamicCameraFrameProperties[n[I]], i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], i.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.AndroidCamera.encode(A.camera, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.tamperingIndicators != null && Object.hasOwnProperty.call(A, "tamperingIndicators") && i.uint32(
          /* id 8, wireType 2 =*/
          66
        ).bytes(A.tamperingIndicators), A.croppedYuv420Image != null && Object.hasOwnProperty.call(A, "croppedYuv420Image") && B.dot.v4.Yuv420Image.encode(A.croppedYuv420Image, i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.AndroidMetadata(), a, r;
        for (; A.pos < n; ) {
          let Q = A.uint32();
          switch (Q >>> 3) {
            case 1: {
              I.supportedAbis && I.supportedAbis.length || (I.supportedAbis = []), I.supportedAbis.push(A.string());
              break;
            }
            case 2: {
              I.device = A.string();
              break;
            }
            case 6: {
              I.camera = B.dot.v4.AndroidCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.digests && I.digests.length || (I.digests = []), I.digests.push(A.bytes());
              break;
            }
            case 5: {
              I.digestsWithTimestamp && I.digestsWithTimestamp.length || (I.digestsWithTimestamp = []), I.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              I.dynamicCameraFrameProperties === d.emptyObject && (I.dynamicCameraFrameProperties = {});
              let C = A.uint32() + A.pos;
              for (a = "", r = null; A.pos < C; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    a = A.string();
                    break;
                  case 2:
                    r = B.dot.Int32List.decode(A, A.uint32());
                    break;
                  default:
                    A.skipType(x & 7);
                    break;
                }
              }
              I.dynamicCameraFrameProperties[a] = r;
              break;
            }
            case 8: {
              I.tamperingIndicators = A.bytes();
              break;
            }
            case 9: {
              I.croppedYuv420Image = B.dot.v4.Yuv420Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(Q & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.supportedAbis != null && A.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(A.supportedAbis))
            return "supportedAbis: array expected";
          for (let i = 0; i < A.supportedAbis.length; ++i)
            if (!d.isString(A.supportedAbis[i]))
              return "supportedAbis: string[] expected";
        }
        if (A.device != null && A.hasOwnProperty("device") && !d.isString(A.device))
          return "device: string expected";
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let i = B.dot.v4.AndroidCamera.verify(A.camera);
          if (i)
            return "camera." + i;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let i = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (i)
            return "detectionNormalizedRectangle." + i;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let i = 0; i < A.digests.length; ++i)
            if (!(A.digests[i] && typeof A.digests[i].length == "number" || d.isString(A.digests[i])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let i = 0; i < A.digestsWithTimestamp.length; ++i) {
            let n = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[i]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.dynamicCameraFrameProperties != null && A.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!d.isObject(A.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let i = Object.keys(A.dynamicCameraFrameProperties);
          for (let n = 0; n < i.length; ++n) {
            let I = B.dot.Int32List.verify(A.dynamicCameraFrameProperties[i[n]]);
            if (I)
              return "dynamicCameraFrameProperties." + I;
          }
        }
        if (A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && !(A.tamperingIndicators && typeof A.tamperingIndicators.length == "number" || d.isString(A.tamperingIndicators)))
          return "tamperingIndicators: buffer expected";
        if (A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image")) {
          let i = B.dot.v4.Yuv420Image.verify(A.croppedYuv420Image);
          if (i)
            return "croppedYuv420Image." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.AndroidMetadata)
          return A;
        let i = new B.dot.v4.AndroidMetadata();
        if (A.supportedAbis) {
          if (!Array.isArray(A.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          i.supportedAbis = [];
          for (let n = 0; n < A.supportedAbis.length; ++n)
            i.supportedAbis[n] = String(A.supportedAbis[n]);
        }
        if (A.device != null && (i.device = String(A.device)), A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.AndroidMetadata.camera: object expected");
          i.camera = B.dot.v4.AndroidCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.AndroidMetadata.detectionNormalizedRectangle: object expected");
          i.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          i.digests = [];
          for (let n = 0; n < A.digests.length; ++n)
            typeof A.digests[n] == "string" ? d.base64.decode(A.digests[n], i.digests[n] = d.newBuffer(d.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (i.digests[n] = A.digests[n]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          i.digestsWithTimestamp = [];
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            if (typeof A.digestsWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            i.digestsWithTimestamp[n] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
          }
        }
        if (A.dynamicCameraFrameProperties) {
          if (typeof A.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          i.dynamicCameraFrameProperties = {};
          for (let n = Object.keys(A.dynamicCameraFrameProperties), I = 0; I < n.length; ++I) {
            if (typeof A.dynamicCameraFrameProperties[n[I]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            i.dynamicCameraFrameProperties[n[I]] = B.dot.Int32List.fromObject(A.dynamicCameraFrameProperties[n[I]]);
          }
        }
        if (A.tamperingIndicators != null && (typeof A.tamperingIndicators == "string" ? d.base64.decode(A.tamperingIndicators, i.tamperingIndicators = d.newBuffer(d.base64.length(A.tamperingIndicators)), 0) : A.tamperingIndicators.length >= 0 && (i.tamperingIndicators = A.tamperingIndicators)), A.croppedYuv420Image != null) {
          if (typeof A.croppedYuv420Image != "object")
            throw TypeError(".dot.v4.AndroidMetadata.croppedYuv420Image: object expected");
          i.croppedYuv420Image = B.dot.v4.Yuv420Image.fromObject(A.croppedYuv420Image);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        if ((i.arrays || i.defaults) && (n.supportedAbis = [], n.digests = [], n.digestsWithTimestamp = []), (i.objects || i.defaults) && (n.dynamicCameraFrameProperties = {}), A.supportedAbis && A.supportedAbis.length) {
          n.supportedAbis = [];
          for (let a = 0; a < A.supportedAbis.length; ++a)
            n.supportedAbis[a] = A.supportedAbis[a];
        }
        if (A.device != null && A.hasOwnProperty("device") && (n.device = A.device, i.oneofs && (n._device = "device")), A.digests && A.digests.length) {
          n.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            n.digests[a] = i.bytes === String ? d.base64.encode(A.digests[a], 0, A.digests[a].length) : i.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        let I;
        if (A.dynamicCameraFrameProperties && (I = Object.keys(A.dynamicCameraFrameProperties)).length) {
          n.dynamicCameraFrameProperties = {};
          for (let a = 0; a < I.length; ++a)
            n.dynamicCameraFrameProperties[I[a]] = B.dot.Int32List.toObject(A.dynamicCameraFrameProperties[I[a]], i);
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], i);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = B.dot.v4.AndroidCamera.toObject(A.camera, i), i.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, i), i.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), A.tamperingIndicators != null && A.hasOwnProperty("tamperingIndicators") && (n.tamperingIndicators = i.bytes === String ? d.base64.encode(A.tamperingIndicators, 0, A.tamperingIndicators.length) : i.bytes === Array ? Array.prototype.slice.call(A.tamperingIndicators) : A.tamperingIndicators, i.oneofs && (n._tamperingIndicators = "tamperingIndicators")), A.croppedYuv420Image != null && A.hasOwnProperty("croppedYuv420Image") && (n.croppedYuv420Image = B.dot.v4.Yuv420Image.toObject(A.croppedYuv420Image, i), i.oneofs && (n._croppedYuv420Image = "croppedYuv420Image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.AndroidMetadata";
      }, t;
    }(), g.AndroidCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.AndroidCamera();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.resolution = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.AndroidCamera)
          return e;
        let A = new B.dot.v4.AndroidCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.AndroidCamera.resolution: object expected");
          A.resolution = B.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.resolution = null, i.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (i.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (i.rotationDegrees = e.rotationDegrees), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidCamera";
      }, t;
    }(), g.Yuv420Image = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.size = null, t.prototype.yPlane = d.newBuffer([]), t.prototype.uPlane = d.newBuffer([]), t.prototype.vPlane = d.newBuffer([]), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.size != null && Object.hasOwnProperty.call(e, "size") && B.dot.ImageSize.encode(e.size, A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.Yuv420Image();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.size = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.yPlane = e.bytes();
              break;
            }
            case 3: {
              n.uPlane = e.bytes();
              break;
            }
            case 4: {
              n.vPlane = e.bytes();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.size != null && e.hasOwnProperty("size")) {
          let A = B.dot.ImageSize.verify(e.size);
          if (A)
            return "size." + A;
        }
        return e.yPlane != null && e.hasOwnProperty("yPlane") && !(e.yPlane && typeof e.yPlane.length == "number" || d.isString(e.yPlane)) ? "yPlane: buffer expected" : e.uPlane != null && e.hasOwnProperty("uPlane") && !(e.uPlane && typeof e.uPlane.length == "number" || d.isString(e.uPlane)) ? "uPlane: buffer expected" : e.vPlane != null && e.hasOwnProperty("vPlane") && !(e.vPlane && typeof e.vPlane.length == "number" || d.isString(e.vPlane)) ? "vPlane: buffer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Yuv420Image)
          return e;
        let A = new B.dot.v4.Yuv420Image();
        if (e.size != null) {
          if (typeof e.size != "object")
            throw TypeError(".dot.v4.Yuv420Image.size: object expected");
          A.size = B.dot.ImageSize.fromObject(e.size);
        }
        return e.yPlane != null && (typeof e.yPlane == "string" ? d.base64.decode(e.yPlane, A.yPlane = d.newBuffer(d.base64.length(e.yPlane)), 0) : e.yPlane.length >= 0 && (A.yPlane = e.yPlane)), e.uPlane != null && (typeof e.uPlane == "string" ? d.base64.decode(e.uPlane, A.uPlane = d.newBuffer(d.base64.length(e.uPlane)), 0) : e.uPlane.length >= 0 && (A.uPlane = e.uPlane)), e.vPlane != null && (typeof e.vPlane == "string" ? d.base64.decode(e.vPlane, A.vPlane = d.newBuffer(d.base64.length(e.vPlane)), 0) : e.vPlane.length >= 0 && (A.vPlane = e.vPlane)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.size = null, A.bytes === String ? i.yPlane = "" : (i.yPlane = [], A.bytes !== Array && (i.yPlane = d.newBuffer(i.yPlane))), A.bytes === String ? i.uPlane = "" : (i.uPlane = [], A.bytes !== Array && (i.uPlane = d.newBuffer(i.uPlane))), A.bytes === String ? i.vPlane = "" : (i.vPlane = [], A.bytes !== Array && (i.vPlane = d.newBuffer(i.vPlane)))), e.size != null && e.hasOwnProperty("size") && (i.size = B.dot.ImageSize.toObject(e.size, A)), e.yPlane != null && e.hasOwnProperty("yPlane") && (i.yPlane = A.bytes === String ? d.base64.encode(e.yPlane, 0, e.yPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.yPlane) : e.yPlane), e.uPlane != null && e.hasOwnProperty("uPlane") && (i.uPlane = A.bytes === String ? d.base64.encode(e.uPlane, 0, e.uPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.uPlane) : e.uPlane), e.vPlane != null && e.hasOwnProperty("vPlane") && (i.vPlane = A.bytes === String ? d.base64.encode(e.vPlane, 0, e.vPlane.length) : A.bytes === Array ? Array.prototype.slice.call(e.vPlane) : e.vPlane), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Yuv420Image";
      }, t;
    }(), g.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.cameraModelId = "", t.prototype.architectureInfo = d.emptyObject, t.prototype.camera = null, t.prototype.detectionNormalizedRectangle = null, t.prototype.digests = d.emptyArray, t.prototype.digestsWithTimestamp = d.emptyArray, t.prototype.isoValues = d.emptyArray;
      let e;
      return Object.defineProperty(t.prototype, "_camera", {
        get: d.oneOfGetter(e = ["camera"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_detectionNormalizedRectangle", {
        get: d.oneOfGetter(e = ["detectionNormalizedRectangle"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        if (i || (i = v.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let n = Object.keys(A.architectureInfo), I = 0; I < n.length; ++I)
            i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(n[I]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[n[I]]).ldelim();
        if (A.digests != null && A.digests.length)
          for (let n = 0; n < A.digests.length; ++n)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[n]);
        if (A.isoValues != null && A.isoValues.length) {
          i.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let n = 0; n < A.isoValues.length; ++n)
            i.int32(A.isoValues[n]);
          i.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n)
            B.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[n], i.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.camera != null && Object.hasOwnProperty.call(A, "camera") && B.dot.v4.IosCamera.encode(A.camera, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.detectionNormalizedRectangle != null && Object.hasOwnProperty.call(A, "detectionNormalizedRectangle") && B.dot.RectangleDouble.encode(A.detectionNormalizedRectangle, i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.IosMetadata(), a, r;
        for (; A.pos < n; ) {
          let Q = A.uint32();
          switch (Q >>> 3) {
            case 1: {
              I.cameraModelId = A.string();
              break;
            }
            case 2: {
              I.architectureInfo === d.emptyObject && (I.architectureInfo = {});
              let C = A.uint32() + A.pos;
              for (a = "", r = !1; A.pos < C; ) {
                let x = A.uint32();
                switch (x >>> 3) {
                  case 1:
                    a = A.string();
                    break;
                  case 2:
                    r = A.bool();
                    break;
                  default:
                    A.skipType(x & 7);
                    break;
                }
              }
              I.architectureInfo[a] = r;
              break;
            }
            case 6: {
              I.camera = B.dot.v4.IosCamera.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.detectionNormalizedRectangle = B.dot.RectangleDouble.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.digests && I.digests.length || (I.digests = []), I.digests.push(A.bytes());
              break;
            }
            case 5: {
              I.digestsWithTimestamp && I.digestsWithTimestamp.length || (I.digestsWithTimestamp = []), I.digestsWithTimestamp.push(B.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (I.isoValues && I.isoValues.length || (I.isoValues = []), (Q & 7) === 2) {
                let C = A.uint32() + A.pos;
                for (; A.pos < C; )
                  I.isoValues.push(A.int32());
              } else
                I.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(Q & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !d.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!d.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let i = Object.keys(A.architectureInfo);
          for (let n = 0; n < i.length; ++n)
            if (typeof A.architectureInfo[i[n]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.camera != null && A.hasOwnProperty("camera")) {
          let i = B.dot.v4.IosCamera.verify(A.camera);
          if (i)
            return "camera." + i;
        }
        if (A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle")) {
          let i = B.dot.RectangleDouble.verify(A.detectionNormalizedRectangle);
          if (i)
            return "detectionNormalizedRectangle." + i;
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let i = 0; i < A.digests.length; ++i)
            if (!(A.digests[i] && typeof A.digests[i].length == "number" || d.isString(A.digests[i])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let i = 0; i < A.digestsWithTimestamp.length; ++i) {
            let n = B.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[i]);
            if (n)
              return "digestsWithTimestamp." + n;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let i = 0; i < A.isoValues.length; ++i)
            if (!d.isInteger(A.isoValues[i]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.IosMetadata)
          return A;
        let i = new B.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (i.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          i.architectureInfo = {};
          for (let n = Object.keys(A.architectureInfo), I = 0; I < n.length; ++I)
            i.architectureInfo[n[I]] = !!A.architectureInfo[n[I]];
        }
        if (A.camera != null) {
          if (typeof A.camera != "object")
            throw TypeError(".dot.v4.IosMetadata.camera: object expected");
          i.camera = B.dot.v4.IosCamera.fromObject(A.camera);
        }
        if (A.detectionNormalizedRectangle != null) {
          if (typeof A.detectionNormalizedRectangle != "object")
            throw TypeError(".dot.v4.IosMetadata.detectionNormalizedRectangle: object expected");
          i.detectionNormalizedRectangle = B.dot.RectangleDouble.fromObject(A.detectionNormalizedRectangle);
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          i.digests = [];
          for (let n = 0; n < A.digests.length; ++n)
            typeof A.digests[n] == "string" ? d.base64.decode(A.digests[n], i.digests[n] = d.newBuffer(d.base64.length(A.digests[n])), 0) : A.digests[n].length >= 0 && (i.digests[n] = A.digests[n]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          i.digestsWithTimestamp = [];
          for (let n = 0; n < A.digestsWithTimestamp.length; ++n) {
            if (typeof A.digestsWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            i.digestsWithTimestamp[n] = B.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[n]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          i.isoValues = [];
          for (let n = 0; n < A.isoValues.length; ++n)
            i.isoValues[n] = A.isoValues[n] | 0;
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        (i.arrays || i.defaults) && (n.digests = [], n.isoValues = [], n.digestsWithTimestamp = []), (i.objects || i.defaults) && (n.architectureInfo = {}), i.defaults && (n.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (n.cameraModelId = A.cameraModelId);
        let I;
        if (A.architectureInfo && (I = Object.keys(A.architectureInfo)).length) {
          n.architectureInfo = {};
          for (let a = 0; a < I.length; ++a)
            n.architectureInfo[I[a]] = A.architectureInfo[I[a]];
        }
        if (A.digests && A.digests.length) {
          n.digests = [];
          for (let a = 0; a < A.digests.length; ++a)
            n.digests[a] = i.bytes === String ? d.base64.encode(A.digests[a], 0, A.digests[a].length) : i.bytes === Array ? Array.prototype.slice.call(A.digests[a]) : A.digests[a];
        }
        if (A.isoValues && A.isoValues.length) {
          n.isoValues = [];
          for (let a = 0; a < A.isoValues.length; ++a)
            n.isoValues[a] = A.isoValues[a];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          n.digestsWithTimestamp = [];
          for (let a = 0; a < A.digestsWithTimestamp.length; ++a)
            n.digestsWithTimestamp[a] = B.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[a], i);
        }
        return A.camera != null && A.hasOwnProperty("camera") && (n.camera = B.dot.v4.IosCamera.toObject(A.camera, i), i.oneofs && (n._camera = "camera")), A.detectionNormalizedRectangle != null && A.hasOwnProperty("detectionNormalizedRectangle") && (n.detectionNormalizedRectangle = B.dot.RectangleDouble.toObject(A.detectionNormalizedRectangle, i), i.oneofs && (n._detectionNormalizedRectangle = "detectionNormalizedRectangle")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), g.IosCamera = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.resolution = null, t.prototype.rotationDegrees = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.resolution != null && Object.hasOwnProperty.call(e, "resolution") && B.dot.ImageSize.encode(e.resolution, A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.IosCamera();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.resolution = B.dot.ImageSize.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.rotationDegrees = e.int32();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.resolution != null && e.hasOwnProperty("resolution")) {
          let A = B.dot.ImageSize.verify(e.resolution);
          if (A)
            return "resolution." + A;
        }
        return e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && !d.isInteger(e.rotationDegrees) ? "rotationDegrees: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.IosCamera)
          return e;
        let A = new B.dot.v4.IosCamera();
        if (e.resolution != null) {
          if (typeof e.resolution != "object")
            throw TypeError(".dot.v4.IosCamera.resolution: object expected");
          A.resolution = B.dot.ImageSize.fromObject(e.resolution);
        }
        return e.rotationDegrees != null && (A.rotationDegrees = e.rotationDegrees | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.resolution = null, i.rotationDegrees = 0), e.resolution != null && e.hasOwnProperty("resolution") && (i.resolution = B.dot.ImageSize.toObject(e.resolution, A)), e.rotationDegrees != null && e.hasOwnProperty("rotationDegrees") && (i.rotationDegrees = e.rotationDegrees), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.IosCamera";
      }, t;
    }(), g.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = d.emptyArray, t.prototype.hashedDetectedImages = d.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = d.emptyArray, t.prototype.detectionRecord = d.emptyArray, t.prototype.croppedImage = null;
      let e;
      return Object.defineProperty(t.prototype, "_croppedImage", {
        get: d.oneOfGetter(e = ["croppedImage"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        if (i || (i = v.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let n = 0; n < A.availableCameraProperties.length; ++n)
            B.dot.v4.CameraProperties.encode(A.availableCameraProperties[n], i.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            i.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[n]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let n = 0; n < A.detectionRecord.length; ++n)
            B.dot.v4.DetectedObject.encode(A.detectionRecord[n], i.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n)
            B.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[n], i.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return A.croppedImage != null && Object.hasOwnProperty.call(A, "croppedImage") && B.dot.Image.encode(A.croppedImage, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.WebMetadata();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.currentCameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.availableCameraProperties && I.availableCameraProperties.length || (I.availableCameraProperties = []), I.availableCameraProperties.push(B.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              I.hashedDetectedImages && I.hashedDetectedImages.length || (I.hashedDetectedImages = []), I.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              I.hashedDetectedImagesWithTimestamp && I.hashedDetectedImagesWithTimestamp.length || (I.hashedDetectedImagesWithTimestamp = []), I.hashedDetectedImagesWithTimestamp.push(B.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              I.detectionRecord && I.detectionRecord.length || (I.detectionRecord = []), I.detectionRecord.push(B.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            case 6: {
              I.croppedImage = B.dot.Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let i = B.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (i)
            return "currentCameraProperties." + i;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let i = 0; i < A.availableCameraProperties.length; ++i) {
            let n = B.dot.v4.CameraProperties.verify(A.availableCameraProperties[i]);
            if (n)
              return "availableCameraProperties." + n;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let i = 0; i < A.hashedDetectedImages.length; ++i)
            if (!d.isString(A.hashedDetectedImages[i]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let i = 0; i < A.hashedDetectedImagesWithTimestamp.length; ++i) {
            let n = B.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[i]);
            if (n)
              return "hashedDetectedImagesWithTimestamp." + n;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let i = 0; i < A.detectionRecord.length; ++i) {
            let n = B.dot.v4.DetectedObject.verify(A.detectionRecord[i]);
            if (n)
              return "detectionRecord." + n;
          }
        }
        if (A.croppedImage != null && A.hasOwnProperty("croppedImage")) {
          let i = B.dot.Image.verify(A.croppedImage);
          if (i)
            return "croppedImage." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.WebMetadata)
          return A;
        let i = new B.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          i.currentCameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          i.availableCameraProperties = [];
          for (let n = 0; n < A.availableCameraProperties.length; ++n) {
            if (typeof A.availableCameraProperties[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            i.availableCameraProperties[n] = B.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[n]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          i.hashedDetectedImages = [];
          for (let n = 0; n < A.hashedDetectedImages.length; ++n)
            i.hashedDetectedImages[n] = String(A.hashedDetectedImages[n]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          i.hashedDetectedImagesWithTimestamp = [];
          for (let n = 0; n < A.hashedDetectedImagesWithTimestamp.length; ++n) {
            if (typeof A.hashedDetectedImagesWithTimestamp[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            i.hashedDetectedImagesWithTimestamp[n] = B.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[n]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          i.detectionRecord = [];
          for (let n = 0; n < A.detectionRecord.length; ++n) {
            if (typeof A.detectionRecord[n] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            i.detectionRecord[n] = B.dot.v4.DetectedObject.fromObject(A.detectionRecord[n]);
          }
        }
        if (A.croppedImage != null) {
          if (typeof A.croppedImage != "object")
            throw TypeError(".dot.v4.WebMetadata.croppedImage: object expected");
          i.croppedImage = B.dot.Image.fromObject(A.croppedImage);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        if ((i.arrays || i.defaults) && (n.availableCameraProperties = [], n.hashedDetectedImages = [], n.detectionRecord = [], n.hashedDetectedImagesWithTimestamp = []), i.defaults && (n.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (n.currentCameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, i)), A.availableCameraProperties && A.availableCameraProperties.length) {
          n.availableCameraProperties = [];
          for (let I = 0; I < A.availableCameraProperties.length; ++I)
            n.availableCameraProperties[I] = B.dot.v4.CameraProperties.toObject(A.availableCameraProperties[I], i);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          n.hashedDetectedImages = [];
          for (let I = 0; I < A.hashedDetectedImages.length; ++I)
            n.hashedDetectedImages[I] = A.hashedDetectedImages[I];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          n.detectionRecord = [];
          for (let I = 0; I < A.detectionRecord.length; ++I)
            n.detectionRecord[I] = B.dot.v4.DetectedObject.toObject(A.detectionRecord[I], i);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          n.hashedDetectedImagesWithTimestamp = [];
          for (let I = 0; I < A.hashedDetectedImagesWithTimestamp.length; ++I)
            n.hashedDetectedImagesWithTimestamp[I] = B.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[I], i);
        }
        return A.croppedImage != null && A.hasOwnProperty("croppedImage") && (n.croppedImage = B.dot.Image.toObject(A.croppedImage, i), i.oneofs && (n._croppedImage = "croppedImage")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), g.HashedDetectedImageWithTimestamp = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.imageHash != null && Object.hasOwnProperty.call(e, "imageHash") && A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.HashedDetectedImageWithTimestamp();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.imageHash = e.string();
              break;
            }
            case 2: {
              n.timestampMillis = e.uint64();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.imageHash != null && e.hasOwnProperty("imageHash") && !d.isString(e.imageHash) ? "imageHash: string expected" : e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && !d.isInteger(e.timestampMillis) && !(e.timestampMillis && d.isInteger(e.timestampMillis.low) && d.isInteger(e.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.HashedDetectedImageWithTimestamp)
          return e;
        let A = new B.dot.v4.HashedDetectedImageWithTimestamp();
        return e.imageHash != null && (A.imageHash = String(e.imageHash)), e.timestampMillis != null && (d.Long ? (A.timestampMillis = d.Long.fromValue(e.timestampMillis)).unsigned = !0 : typeof e.timestampMillis == "string" ? A.timestampMillis = parseInt(e.timestampMillis, 10) : typeof e.timestampMillis == "number" ? A.timestampMillis = e.timestampMillis : typeof e.timestampMillis == "object" && (A.timestampMillis = new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0))), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        if (A.defaults)
          if (i.imageHash = "", d.Long) {
            let n = new d.Long(0, 0, !0);
            i.timestampMillis = A.longs === String ? n.toString() : A.longs === Number ? n.toNumber() : n;
          } else
            i.timestampMillis = A.longs === String ? "0" : 0;
        return e.imageHash != null && e.hasOwnProperty("imageHash") && (i.imageHash = e.imageHash), e.timestampMillis != null && e.hasOwnProperty("timestampMillis") && (typeof e.timestampMillis == "number" ? i.timestampMillis = A.longs === String ? String(e.timestampMillis) : e.timestampMillis : i.timestampMillis = A.longs === String ? d.Long.prototype.toString.call(e.timestampMillis) : A.longs === Number ? new d.LongBits(e.timestampMillis.low >>> 0, e.timestampMillis.high >>> 0).toNumber(!0) : e.timestampMillis), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), g.MediaTrackSettings = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let e;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: d.oneOfGetter(e = ["aspectRatio"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: d.oneOfGetter(e = ["autoGainControl"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: d.oneOfGetter(e = ["channelCount"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: d.oneOfGetter(e = ["deviceId"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: d.oneOfGetter(e = ["displaySurface"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: d.oneOfGetter(e = ["echoCancellation"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: d.oneOfGetter(e = ["facingMode"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: d.oneOfGetter(e = ["frameRate"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: d.oneOfGetter(e = ["groupId"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_height", {
        get: d.oneOfGetter(e = ["height"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: d.oneOfGetter(e = ["noiseSuppression"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: d.oneOfGetter(e = ["sampleRate"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: d.oneOfGetter(e = ["sampleSize"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_width", {
        get: d.oneOfGetter(e = ["width"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: d.oneOfGetter(e = ["deviceName"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.aspectRatio != null && Object.hasOwnProperty.call(A, "aspectRatio") && i.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(A.aspectRatio), A.autoGainControl != null && Object.hasOwnProperty.call(A, "autoGainControl") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(A.autoGainControl), A.channelCount != null && Object.hasOwnProperty.call(A, "channelCount") && i.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(A.channelCount), A.deviceId != null && Object.hasOwnProperty.call(A, "deviceId") && i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(A.deviceId), A.displaySurface != null && Object.hasOwnProperty.call(A, "displaySurface") && i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(A.displaySurface), A.echoCancellation != null && Object.hasOwnProperty.call(A, "echoCancellation") && i.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(A.echoCancellation), A.facingMode != null && Object.hasOwnProperty.call(A, "facingMode") && i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(A.facingMode), A.frameRate != null && Object.hasOwnProperty.call(A, "frameRate") && i.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(A.frameRate), A.groupId != null && Object.hasOwnProperty.call(A, "groupId") && i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(A.groupId), A.height != null && Object.hasOwnProperty.call(A, "height") && i.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(A.height), A.noiseSuppression != null && Object.hasOwnProperty.call(A, "noiseSuppression") && i.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(A.noiseSuppression), A.sampleRate != null && Object.hasOwnProperty.call(A, "sampleRate") && i.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(A.sampleRate), A.sampleSize != null && Object.hasOwnProperty.call(A, "sampleSize") && i.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(A.sampleSize), A.width != null && Object.hasOwnProperty.call(A, "width") && i.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(A.width), A.deviceName != null && Object.hasOwnProperty.call(A, "deviceName") && i.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(A.deviceName), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.MediaTrackSettings();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.aspectRatio = A.double();
              break;
            }
            case 2: {
              I.autoGainControl = A.bool();
              break;
            }
            case 3: {
              I.channelCount = A.int32();
              break;
            }
            case 4: {
              I.deviceId = A.string();
              break;
            }
            case 5: {
              I.displaySurface = A.string();
              break;
            }
            case 6: {
              I.echoCancellation = A.bool();
              break;
            }
            case 7: {
              I.facingMode = A.string();
              break;
            }
            case 8: {
              I.frameRate = A.double();
              break;
            }
            case 9: {
              I.groupId = A.string();
              break;
            }
            case 10: {
              I.height = A.int32();
              break;
            }
            case 11: {
              I.noiseSuppression = A.bool();
              break;
            }
            case 12: {
              I.sampleRate = A.int32();
              break;
            }
            case 13: {
              I.sampleSize = A.int32();
              break;
            }
            case 14: {
              I.width = A.int32();
              break;
            }
            case 15: {
              I.deviceName = A.string();
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && typeof A.aspectRatio != "number" ? "aspectRatio: number expected" : A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && typeof A.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : A.channelCount != null && A.hasOwnProperty("channelCount") && !d.isInteger(A.channelCount) ? "channelCount: integer expected" : A.deviceId != null && A.hasOwnProperty("deviceId") && !d.isString(A.deviceId) ? "deviceId: string expected" : A.displaySurface != null && A.hasOwnProperty("displaySurface") && !d.isString(A.displaySurface) ? "displaySurface: string expected" : A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && typeof A.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : A.facingMode != null && A.hasOwnProperty("facingMode") && !d.isString(A.facingMode) ? "facingMode: string expected" : A.frameRate != null && A.hasOwnProperty("frameRate") && typeof A.frameRate != "number" ? "frameRate: number expected" : A.groupId != null && A.hasOwnProperty("groupId") && !d.isString(A.groupId) ? "groupId: string expected" : A.height != null && A.hasOwnProperty("height") && !d.isInteger(A.height) ? "height: integer expected" : A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && typeof A.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : A.sampleRate != null && A.hasOwnProperty("sampleRate") && !d.isInteger(A.sampleRate) ? "sampleRate: integer expected" : A.sampleSize != null && A.hasOwnProperty("sampleSize") && !d.isInteger(A.sampleSize) ? "sampleSize: integer expected" : A.width != null && A.hasOwnProperty("width") && !d.isInteger(A.width) ? "width: integer expected" : A.deviceName != null && A.hasOwnProperty("deviceName") && !d.isString(A.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.MediaTrackSettings)
          return A;
        let i = new B.dot.v4.MediaTrackSettings();
        return A.aspectRatio != null && (i.aspectRatio = Number(A.aspectRatio)), A.autoGainControl != null && (i.autoGainControl = !!A.autoGainControl), A.channelCount != null && (i.channelCount = A.channelCount | 0), A.deviceId != null && (i.deviceId = String(A.deviceId)), A.displaySurface != null && (i.displaySurface = String(A.displaySurface)), A.echoCancellation != null && (i.echoCancellation = !!A.echoCancellation), A.facingMode != null && (i.facingMode = String(A.facingMode)), A.frameRate != null && (i.frameRate = Number(A.frameRate)), A.groupId != null && (i.groupId = String(A.groupId)), A.height != null && (i.height = A.height | 0), A.noiseSuppression != null && (i.noiseSuppression = !!A.noiseSuppression), A.sampleRate != null && (i.sampleRate = A.sampleRate | 0), A.sampleSize != null && (i.sampleSize = A.sampleSize | 0), A.width != null && (i.width = A.width | 0), A.deviceName != null && (i.deviceName = String(A.deviceName)), i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return A.aspectRatio != null && A.hasOwnProperty("aspectRatio") && (n.aspectRatio = i.json && !isFinite(A.aspectRatio) ? String(A.aspectRatio) : A.aspectRatio, i.oneofs && (n._aspectRatio = "aspectRatio")), A.autoGainControl != null && A.hasOwnProperty("autoGainControl") && (n.autoGainControl = A.autoGainControl, i.oneofs && (n._autoGainControl = "autoGainControl")), A.channelCount != null && A.hasOwnProperty("channelCount") && (n.channelCount = A.channelCount, i.oneofs && (n._channelCount = "channelCount")), A.deviceId != null && A.hasOwnProperty("deviceId") && (n.deviceId = A.deviceId, i.oneofs && (n._deviceId = "deviceId")), A.displaySurface != null && A.hasOwnProperty("displaySurface") && (n.displaySurface = A.displaySurface, i.oneofs && (n._displaySurface = "displaySurface")), A.echoCancellation != null && A.hasOwnProperty("echoCancellation") && (n.echoCancellation = A.echoCancellation, i.oneofs && (n._echoCancellation = "echoCancellation")), A.facingMode != null && A.hasOwnProperty("facingMode") && (n.facingMode = A.facingMode, i.oneofs && (n._facingMode = "facingMode")), A.frameRate != null && A.hasOwnProperty("frameRate") && (n.frameRate = i.json && !isFinite(A.frameRate) ? String(A.frameRate) : A.frameRate, i.oneofs && (n._frameRate = "frameRate")), A.groupId != null && A.hasOwnProperty("groupId") && (n.groupId = A.groupId, i.oneofs && (n._groupId = "groupId")), A.height != null && A.hasOwnProperty("height") && (n.height = A.height, i.oneofs && (n._height = "height")), A.noiseSuppression != null && A.hasOwnProperty("noiseSuppression") && (n.noiseSuppression = A.noiseSuppression, i.oneofs && (n._noiseSuppression = "noiseSuppression")), A.sampleRate != null && A.hasOwnProperty("sampleRate") && (n.sampleRate = A.sampleRate, i.oneofs && (n._sampleRate = "sampleRate")), A.sampleSize != null && A.hasOwnProperty("sampleSize") && (n.sampleSize = A.sampleSize, i.oneofs && (n._sampleSize = "sampleSize")), A.width != null && A.hasOwnProperty("width") && (n.width = A.width, i.oneofs && (n._width = "width")), A.deviceName != null && A.hasOwnProperty("deviceName") && (n.deviceName = A.deviceName, i.oneofs && (n._deviceName = "deviceName")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), g.ImageBitmap = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.width != null && Object.hasOwnProperty.call(e, "width") && A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.ImageBitmap();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.width = e.int32();
              break;
            }
            case 2: {
              n.height = e.int32();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.width != null && e.hasOwnProperty("width") && !d.isInteger(e.width) ? "width: integer expected" : e.height != null && e.hasOwnProperty("height") && !d.isInteger(e.height) ? "height: integer expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.ImageBitmap)
          return e;
        let A = new B.dot.v4.ImageBitmap();
        return e.width != null && (A.width = e.width | 0), e.height != null && (A.height = e.height | 0), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.width = 0, i.height = 0), e.width != null && e.hasOwnProperty("width") && (i.width = e.width), e.height != null && e.hasOwnProperty("height") && (i.height = e.height), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.ImageBitmap";
      }, t;
    }(), g.CameraProperties = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let e;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: d.oneOfGetter(e = ["cameraInitFrameResolution"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.cameraInitFrameResolution != null && Object.hasOwnProperty.call(A, "cameraInitFrameResolution") && B.dot.v4.ImageBitmap.encode(A.cameraInitFrameResolution, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.cameraProperties != null && Object.hasOwnProperty.call(A, "cameraProperties") && B.dot.v4.MediaTrackSettings.encode(A.cameraProperties, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.CameraProperties();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.cameraInitFrameResolution = B.dot.v4.ImageBitmap.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.cameraProperties = B.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution")) {
          let i = B.dot.v4.ImageBitmap.verify(A.cameraInitFrameResolution);
          if (i)
            return "cameraInitFrameResolution." + i;
        }
        if (A.cameraProperties != null && A.hasOwnProperty("cameraProperties")) {
          let i = B.dot.v4.MediaTrackSettings.verify(A.cameraProperties);
          if (i)
            return "cameraProperties." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.CameraProperties)
          return A;
        let i = new B.dot.v4.CameraProperties();
        if (A.cameraInitFrameResolution != null) {
          if (typeof A.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          i.cameraInitFrameResolution = B.dot.v4.ImageBitmap.fromObject(A.cameraInitFrameResolution);
        }
        if (A.cameraProperties != null) {
          if (typeof A.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          i.cameraProperties = B.dot.v4.MediaTrackSettings.fromObject(A.cameraProperties);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.cameraProperties = null), A.cameraInitFrameResolution != null && A.hasOwnProperty("cameraInitFrameResolution") && (n.cameraInitFrameResolution = B.dot.v4.ImageBitmap.toObject(A.cameraInitFrameResolution, i), i.oneofs && (n._cameraInitFrameResolution = "cameraInitFrameResolution")), A.cameraProperties != null && A.hasOwnProperty("cameraProperties") && (n.cameraProperties = B.dot.v4.MediaTrackSettings.toObject(A.cameraProperties, i)), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.CameraProperties";
      }, t;
    }(), g.DetectedObject = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.brightness != null && Object.hasOwnProperty.call(e, "brightness") && A.uint32(
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
        ).float(e.faceSize), e.faceCenter != null && Object.hasOwnProperty.call(e, "faceCenter") && B.dot.v4.Point.encode(e.faceCenter, A.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), e.smallestEdge != null && Object.hasOwnProperty.call(e, "smallestEdge") && A.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(e.smallestEdge), e.bottomLeft != null && Object.hasOwnProperty.call(e, "bottomLeft") && B.dot.v4.Point.encode(e.bottomLeft, A.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), e.bottomRight != null && Object.hasOwnProperty.call(e, "bottomRight") && B.dot.v4.Point.encode(e.bottomRight, A.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), e.topLeft != null && Object.hasOwnProperty.call(e, "topLeft") && B.dot.v4.Point.encode(e.topLeft, A.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), e.topRight != null && Object.hasOwnProperty.call(e, "topRight") && B.dot.v4.Point.encode(e.topRight, A.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DetectedObject();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.brightness = e.float();
              break;
            }
            case 2: {
              n.sharpness = e.float();
              break;
            }
            case 3: {
              n.hotspots = e.float();
              break;
            }
            case 4: {
              n.confidence = e.float();
              break;
            }
            case 5: {
              n.faceSize = e.float();
              break;
            }
            case 6: {
              n.faceCenter = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 7: {
              n.smallestEdge = e.float();
              break;
            }
            case 8: {
              n.bottomLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 9: {
              n.bottomRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 10: {
              n.topLeft = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            case 11: {
              n.topRight = B.dot.v4.Point.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
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
          let A = B.dot.v4.Point.verify(e.faceCenter);
          if (A)
            return "faceCenter." + A;
        }
        if (e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && typeof e.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (e.bottomLeft != null && e.hasOwnProperty("bottomLeft")) {
          let A = B.dot.v4.Point.verify(e.bottomLeft);
          if (A)
            return "bottomLeft." + A;
        }
        if (e.bottomRight != null && e.hasOwnProperty("bottomRight")) {
          let A = B.dot.v4.Point.verify(e.bottomRight);
          if (A)
            return "bottomRight." + A;
        }
        if (e.topLeft != null && e.hasOwnProperty("topLeft")) {
          let A = B.dot.v4.Point.verify(e.topLeft);
          if (A)
            return "topLeft." + A;
        }
        if (e.topRight != null && e.hasOwnProperty("topRight")) {
          let A = B.dot.v4.Point.verify(e.topRight);
          if (A)
            return "topRight." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.DetectedObject)
          return e;
        let A = new B.dot.v4.DetectedObject();
        if (e.brightness != null && (A.brightness = Number(e.brightness)), e.sharpness != null && (A.sharpness = Number(e.sharpness)), e.hotspots != null && (A.hotspots = Number(e.hotspots)), e.confidence != null && (A.confidence = Number(e.confidence)), e.faceSize != null && (A.faceSize = Number(e.faceSize)), e.faceCenter != null) {
          if (typeof e.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          A.faceCenter = B.dot.v4.Point.fromObject(e.faceCenter);
        }
        if (e.smallestEdge != null && (A.smallestEdge = Number(e.smallestEdge)), e.bottomLeft != null) {
          if (typeof e.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          A.bottomLeft = B.dot.v4.Point.fromObject(e.bottomLeft);
        }
        if (e.bottomRight != null) {
          if (typeof e.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          A.bottomRight = B.dot.v4.Point.fromObject(e.bottomRight);
        }
        if (e.topLeft != null) {
          if (typeof e.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          A.topLeft = B.dot.v4.Point.fromObject(e.topLeft);
        }
        if (e.topRight != null) {
          if (typeof e.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          A.topRight = B.dot.v4.Point.fromObject(e.topRight);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.brightness = 0, i.sharpness = 0, i.hotspots = 0, i.confidence = 0, i.faceSize = 0, i.faceCenter = null, i.smallestEdge = 0, i.bottomLeft = null, i.bottomRight = null, i.topLeft = null, i.topRight = null), e.brightness != null && e.hasOwnProperty("brightness") && (i.brightness = A.json && !isFinite(e.brightness) ? String(e.brightness) : e.brightness), e.sharpness != null && e.hasOwnProperty("sharpness") && (i.sharpness = A.json && !isFinite(e.sharpness) ? String(e.sharpness) : e.sharpness), e.hotspots != null && e.hasOwnProperty("hotspots") && (i.hotspots = A.json && !isFinite(e.hotspots) ? String(e.hotspots) : e.hotspots), e.confidence != null && e.hasOwnProperty("confidence") && (i.confidence = A.json && !isFinite(e.confidence) ? String(e.confidence) : e.confidence), e.faceSize != null && e.hasOwnProperty("faceSize") && (i.faceSize = A.json && !isFinite(e.faceSize) ? String(e.faceSize) : e.faceSize), e.faceCenter != null && e.hasOwnProperty("faceCenter") && (i.faceCenter = B.dot.v4.Point.toObject(e.faceCenter, A)), e.smallestEdge != null && e.hasOwnProperty("smallestEdge") && (i.smallestEdge = A.json && !isFinite(e.smallestEdge) ? String(e.smallestEdge) : e.smallestEdge), e.bottomLeft != null && e.hasOwnProperty("bottomLeft") && (i.bottomLeft = B.dot.v4.Point.toObject(e.bottomLeft, A)), e.bottomRight != null && e.hasOwnProperty("bottomRight") && (i.bottomRight = B.dot.v4.Point.toObject(e.bottomRight, A)), e.topLeft != null && e.hasOwnProperty("topLeft") && (i.topLeft = B.dot.v4.Point.toObject(e.topLeft, A)), e.topRight != null && e.hasOwnProperty("topRight") && (i.topRight = B.dot.v4.Point.toObject(e.topRight, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DetectedObject";
      }, t;
    }(), g.Point = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.x != null && Object.hasOwnProperty.call(e, "x") && A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.Point();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.x = e.float();
              break;
            }
            case 2: {
              n.y = e.float();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.x != null && e.hasOwnProperty("x") && typeof e.x != "number" ? "x: number expected" : e.y != null && e.hasOwnProperty("y") && typeof e.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.Point)
          return e;
        let A = new B.dot.v4.Point();
        return e.x != null && (A.x = Number(e.x)), e.y != null && (A.y = Number(e.y)), A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.x = 0, i.y = 0), e.x != null && e.hasOwnProperty("x") && (i.x = A.json && !isFinite(e.x) ? String(e.x) : e.x), e.y != null && e.hasOwnProperty("y") && (i.y = A.json && !isFinite(e.y) ? String(e.y) : e.y), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Point";
      }, t;
    }(), g.FaceContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.FaceContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.FaceContent)
          return e;
        let A = new B.dot.v4.FaceContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.FaceContent";
      }, t;
    }(), g.DocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DocumentContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.DocumentContent)
          return e;
        let A = new B.dot.v4.DocumentContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DocumentContent";
      }, t;
    }(), g.Blob = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null, t.prototype.travelDocumentContent = null;
      let e;
      return Object.defineProperty(t.prototype, "blob", {
        get: d.oneOfGetter(e = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent", "travelDocumentContent"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.documentContent != null && Object.hasOwnProperty.call(A, "documentContent") && B.dot.v4.DocumentContent.encode(A.documentContent, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.faceContent != null && Object.hasOwnProperty.call(A, "faceContent") && B.dot.v4.FaceContent.encode(A.faceContent, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(A, "magnifeyeLivenessContent") && B.dot.v4.MagnifEyeLivenessContent.encode(A.magnifeyeLivenessContent, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.smileLivenessContent != null && Object.hasOwnProperty.call(A, "smileLivenessContent") && B.dot.v4.SmileLivenessContent.encode(A.smileLivenessContent, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(A, "eyeGazeLivenessContent") && B.dot.v4.EyeGazeLivenessContent.encode(A.eyeGazeLivenessContent, i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.palmContent != null && Object.hasOwnProperty.call(A, "palmContent") && B.dot.v4.PalmContent.encode(A.palmContent, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.travelDocumentContent != null && Object.hasOwnProperty.call(A, "travelDocumentContent") && B.dot.v4.TravelDocumentContent.encode(A.travelDocumentContent, i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.Blob();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.documentContent = B.dot.v4.DocumentContent.decode(A, A.uint32());
              break;
            }
            case 5: {
              I.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.faceContent = B.dot.v4.FaceContent.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.smileLivenessContent = B.dot.v4.SmileLivenessContent.decode(A, A.uint32());
              break;
            }
            case 6: {
              I.palmContent = B.dot.v4.PalmContent.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.travelDocumentContent = B.dot.v4.TravelDocumentContent.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        let i = {};
        if (A.documentContent != null && A.hasOwnProperty("documentContent")) {
          i.blob = 1;
          {
            let n = B.dot.v4.DocumentContent.verify(A.documentContent);
            if (n)
              return "documentContent." + n;
          }
        }
        if (A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.EyeGazeLivenessContent.verify(A.eyeGazeLivenessContent);
            if (n)
              return "eyeGazeLivenessContent." + n;
          }
        }
        if (A.faceContent != null && A.hasOwnProperty("faceContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.FaceContent.verify(A.faceContent);
            if (n)
              return "faceContent." + n;
          }
        }
        if (A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.MagnifEyeLivenessContent.verify(A.magnifeyeLivenessContent);
            if (n)
              return "magnifeyeLivenessContent." + n;
          }
        }
        if (A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.SmileLivenessContent.verify(A.smileLivenessContent);
            if (n)
              return "smileLivenessContent." + n;
          }
        }
        if (A.palmContent != null && A.hasOwnProperty("palmContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.PalmContent.verify(A.palmContent);
            if (n)
              return "palmContent." + n;
          }
        }
        if (A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent")) {
          if (i.blob === 1)
            return "blob: multiple values";
          i.blob = 1;
          {
            let n = B.dot.v4.TravelDocumentContent.verify(A.travelDocumentContent);
            if (n)
              return "travelDocumentContent." + n;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Blob)
          return A;
        let i = new B.dot.v4.Blob();
        if (A.documentContent != null) {
          if (typeof A.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          i.documentContent = B.dot.v4.DocumentContent.fromObject(A.documentContent);
        }
        if (A.eyeGazeLivenessContent != null) {
          if (typeof A.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          i.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.fromObject(A.eyeGazeLivenessContent);
        }
        if (A.faceContent != null) {
          if (typeof A.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          i.faceContent = B.dot.v4.FaceContent.fromObject(A.faceContent);
        }
        if (A.magnifeyeLivenessContent != null) {
          if (typeof A.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          i.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.fromObject(A.magnifeyeLivenessContent);
        }
        if (A.smileLivenessContent != null) {
          if (typeof A.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          i.smileLivenessContent = B.dot.v4.SmileLivenessContent.fromObject(A.smileLivenessContent);
        }
        if (A.palmContent != null) {
          if (typeof A.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          i.palmContent = B.dot.v4.PalmContent.fromObject(A.palmContent);
        }
        if (A.travelDocumentContent != null) {
          if (typeof A.travelDocumentContent != "object")
            throw TypeError(".dot.v4.Blob.travelDocumentContent: object expected");
          i.travelDocumentContent = B.dot.v4.TravelDocumentContent.fromObject(A.travelDocumentContent);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return A.documentContent != null && A.hasOwnProperty("documentContent") && (n.documentContent = B.dot.v4.DocumentContent.toObject(A.documentContent, i), i.oneofs && (n.blob = "documentContent")), A.faceContent != null && A.hasOwnProperty("faceContent") && (n.faceContent = B.dot.v4.FaceContent.toObject(A.faceContent, i), i.oneofs && (n.blob = "faceContent")), A.magnifeyeLivenessContent != null && A.hasOwnProperty("magnifeyeLivenessContent") && (n.magnifeyeLivenessContent = B.dot.v4.MagnifEyeLivenessContent.toObject(A.magnifeyeLivenessContent, i), i.oneofs && (n.blob = "magnifeyeLivenessContent")), A.smileLivenessContent != null && A.hasOwnProperty("smileLivenessContent") && (n.smileLivenessContent = B.dot.v4.SmileLivenessContent.toObject(A.smileLivenessContent, i), i.oneofs && (n.blob = "smileLivenessContent")), A.eyeGazeLivenessContent != null && A.hasOwnProperty("eyeGazeLivenessContent") && (n.eyeGazeLivenessContent = B.dot.v4.EyeGazeLivenessContent.toObject(A.eyeGazeLivenessContent, i), i.oneofs && (n.blob = "eyeGazeLivenessContent")), A.palmContent != null && A.hasOwnProperty("palmContent") && (n.palmContent = B.dot.v4.PalmContent.toObject(A.palmContent, i), i.oneofs && (n.blob = "palmContent")), A.travelDocumentContent != null && A.hasOwnProperty("travelDocumentContent") && (n.travelDocumentContent = B.dot.v4.TravelDocumentContent.toObject(A.travelDocumentContent, i), i.oneofs && (n.blob = "travelDocumentContent")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Blob";
      }, t;
    }(), g.TravelDocumentContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.ldsMasterFile = null, t.prototype.accessControlProtocolUsed = 0, t.prototype.authenticationStatus = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.ldsMasterFile != null && Object.hasOwnProperty.call(e, "ldsMasterFile") && B.dot.v4.LdsMasterFile.encode(e.ldsMasterFile, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.accessControlProtocolUsed != null && Object.hasOwnProperty.call(e, "accessControlProtocolUsed") && A.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(e.accessControlProtocolUsed), e.authenticationStatus != null && Object.hasOwnProperty.call(e, "authenticationStatus") && B.dot.v4.AuthenticationStatus.encode(e.authenticationStatus, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.TravelDocumentContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.ldsMasterFile = B.dot.v4.LdsMasterFile.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.accessControlProtocolUsed = e.int32();
              break;
            }
            case 3: {
              n.authenticationStatus = B.dot.v4.AuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 4: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile")) {
          let A = B.dot.v4.LdsMasterFile.verify(e.ldsMasterFile);
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
          let A = B.dot.v4.AuthenticationStatus.verify(e.authenticationStatus);
          if (A)
            return "authenticationStatus." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.TravelDocumentContent)
          return e;
        let A = new B.dot.v4.TravelDocumentContent();
        if (e.ldsMasterFile != null) {
          if (typeof e.ldsMasterFile != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.ldsMasterFile: object expected");
          A.ldsMasterFile = B.dot.v4.LdsMasterFile.fromObject(e.ldsMasterFile);
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
          A.authenticationStatus = B.dot.v4.AuthenticationStatus.fromObject(e.authenticationStatus);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.TravelDocumentContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.ldsMasterFile = null, i.accessControlProtocolUsed = A.enums === String ? "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED" : 0, i.authenticationStatus = null, i.metadata = null), e.ldsMasterFile != null && e.hasOwnProperty("ldsMasterFile") && (i.ldsMasterFile = B.dot.v4.LdsMasterFile.toObject(e.ldsMasterFile, A)), e.accessControlProtocolUsed != null && e.hasOwnProperty("accessControlProtocolUsed") && (i.accessControlProtocolUsed = A.enums === String ? B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] === void 0 ? e.accessControlProtocolUsed : B.dot.v4.AccessControlProtocol[e.accessControlProtocolUsed] : e.accessControlProtocolUsed), e.authenticationStatus != null && e.hasOwnProperty("authenticationStatus") && (i.authenticationStatus = B.dot.v4.AuthenticationStatus.toObject(e.authenticationStatus, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.TravelDocumentContent";
      }, t;
    }(), g.LdsMasterFile = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.lds1eMrtdApplication = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.lds1eMrtdApplication != null && Object.hasOwnProperty.call(e, "lds1eMrtdApplication") && B.dot.v4.Lds1eMrtdApplication.encode(e.lds1eMrtdApplication, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.LdsMasterFile();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication")) {
          let A = B.dot.v4.Lds1eMrtdApplication.verify(e.lds1eMrtdApplication);
          if (A)
            return "lds1eMrtdApplication." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.LdsMasterFile)
          return e;
        let A = new B.dot.v4.LdsMasterFile();
        if (e.lds1eMrtdApplication != null) {
          if (typeof e.lds1eMrtdApplication != "object")
            throw TypeError(".dot.v4.LdsMasterFile.lds1eMrtdApplication: object expected");
          A.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.fromObject(e.lds1eMrtdApplication);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.lds1eMrtdApplication = null), e.lds1eMrtdApplication != null && e.hasOwnProperty("lds1eMrtdApplication") && (i.lds1eMrtdApplication = B.dot.v4.Lds1eMrtdApplication.toObject(e.lds1eMrtdApplication, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.LdsMasterFile";
      }, t;
    }(), g.Lds1eMrtdApplication = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.comHeaderAndDataGroupPresenceInformation = null, t.prototype.sodDocumentSecurityObject = null, t.prototype.dg1MachineReadableZoneInformation = null, t.prototype.dg2EncodedIdentificationFeaturesFace = null, t.prototype.dg3AdditionalIdentificationFeatureFingers = null, t.prototype.dg4AdditionalIdentificationFeatureIrises = null, t.prototype.dg5DisplayedPortrait = null, t.prototype.dg7DisplayedSignatureOrUsualMark = null, t.prototype.dg8DataFeatures = null, t.prototype.dg9StructureFeatures = null, t.prototype.dg10SubstanceFeatures = null, t.prototype.dg11AdditionalPersonalDetails = null, t.prototype.dg12AdditionalDocumentDetails = null, t.prototype.dg13OptionalDetails = null, t.prototype.dg14SecurityOptions = null, t.prototype.dg15ActiveAuthenticationPublicKeyInfo = null, t.prototype.dg16PersonsToNotify = null;
      let e;
      return Object.defineProperty(t.prototype, "_dg3AdditionalIdentificationFeatureFingers", {
        get: d.oneOfGetter(e = ["dg3AdditionalIdentificationFeatureFingers"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg4AdditionalIdentificationFeatureIrises", {
        get: d.oneOfGetter(e = ["dg4AdditionalIdentificationFeatureIrises"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg5DisplayedPortrait", {
        get: d.oneOfGetter(e = ["dg5DisplayedPortrait"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg7DisplayedSignatureOrUsualMark", {
        get: d.oneOfGetter(e = ["dg7DisplayedSignatureOrUsualMark"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg8DataFeatures", {
        get: d.oneOfGetter(e = ["dg8DataFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg9StructureFeatures", {
        get: d.oneOfGetter(e = ["dg9StructureFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg10SubstanceFeatures", {
        get: d.oneOfGetter(e = ["dg10SubstanceFeatures"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg11AdditionalPersonalDetails", {
        get: d.oneOfGetter(e = ["dg11AdditionalPersonalDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg12AdditionalDocumentDetails", {
        get: d.oneOfGetter(e = ["dg12AdditionalDocumentDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg13OptionalDetails", {
        get: d.oneOfGetter(e = ["dg13OptionalDetails"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg14SecurityOptions", {
        get: d.oneOfGetter(e = ["dg14SecurityOptions"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg15ActiveAuthenticationPublicKeyInfo", {
        get: d.oneOfGetter(e = ["dg15ActiveAuthenticationPublicKeyInfo"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_dg16PersonsToNotify", {
        get: d.oneOfGetter(e = ["dg16PersonsToNotify"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.comHeaderAndDataGroupPresenceInformation != null && Object.hasOwnProperty.call(A, "comHeaderAndDataGroupPresenceInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.comHeaderAndDataGroupPresenceInformation, i.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.sodDocumentSecurityObject != null && Object.hasOwnProperty.call(A, "sodDocumentSecurityObject") && B.dot.v4.Lds1ElementaryFile.encode(A.sodDocumentSecurityObject, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.dg1MachineReadableZoneInformation != null && Object.hasOwnProperty.call(A, "dg1MachineReadableZoneInformation") && B.dot.v4.Lds1ElementaryFile.encode(A.dg1MachineReadableZoneInformation, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A.dg2EncodedIdentificationFeaturesFace != null && Object.hasOwnProperty.call(A, "dg2EncodedIdentificationFeaturesFace") && B.dot.v4.Lds1ElementaryFile.encode(A.dg2EncodedIdentificationFeaturesFace, i.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), A.dg3AdditionalIdentificationFeatureFingers != null && Object.hasOwnProperty.call(A, "dg3AdditionalIdentificationFeatureFingers") && B.dot.v4.Lds1ElementaryFile.encode(A.dg3AdditionalIdentificationFeatureFingers, i.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), A.dg4AdditionalIdentificationFeatureIrises != null && Object.hasOwnProperty.call(A, "dg4AdditionalIdentificationFeatureIrises") && B.dot.v4.Lds1ElementaryFile.encode(A.dg4AdditionalIdentificationFeatureIrises, i.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.dg5DisplayedPortrait != null && Object.hasOwnProperty.call(A, "dg5DisplayedPortrait") && B.dot.v4.Lds1ElementaryFile.encode(A.dg5DisplayedPortrait, i.uint32(
          /* id 7, wireType 2 =*/
          58
        ).fork()).ldelim(), A.dg7DisplayedSignatureOrUsualMark != null && Object.hasOwnProperty.call(A, "dg7DisplayedSignatureOrUsualMark") && B.dot.v4.Lds1ElementaryFile.encode(A.dg7DisplayedSignatureOrUsualMark, i.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.dg8DataFeatures != null && Object.hasOwnProperty.call(A, "dg8DataFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg8DataFeatures, i.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.dg9StructureFeatures != null && Object.hasOwnProperty.call(A, "dg9StructureFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg9StructureFeatures, i.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.dg10SubstanceFeatures != null && Object.hasOwnProperty.call(A, "dg10SubstanceFeatures") && B.dot.v4.Lds1ElementaryFile.encode(A.dg10SubstanceFeatures, i.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), A.dg11AdditionalPersonalDetails != null && Object.hasOwnProperty.call(A, "dg11AdditionalPersonalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg11AdditionalPersonalDetails, i.uint32(
          /* id 12, wireType 2 =*/
          98
        ).fork()).ldelim(), A.dg12AdditionalDocumentDetails != null && Object.hasOwnProperty.call(A, "dg12AdditionalDocumentDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg12AdditionalDocumentDetails, i.uint32(
          /* id 13, wireType 2 =*/
          106
        ).fork()).ldelim(), A.dg13OptionalDetails != null && Object.hasOwnProperty.call(A, "dg13OptionalDetails") && B.dot.v4.Lds1ElementaryFile.encode(A.dg13OptionalDetails, i.uint32(
          /* id 14, wireType 2 =*/
          114
        ).fork()).ldelim(), A.dg14SecurityOptions != null && Object.hasOwnProperty.call(A, "dg14SecurityOptions") && B.dot.v4.Lds1ElementaryFile.encode(A.dg14SecurityOptions, i.uint32(
          /* id 15, wireType 2 =*/
          122
        ).fork()).ldelim(), A.dg15ActiveAuthenticationPublicKeyInfo != null && Object.hasOwnProperty.call(A, "dg15ActiveAuthenticationPublicKeyInfo") && B.dot.v4.Lds1ElementaryFile.encode(A.dg15ActiveAuthenticationPublicKeyInfo, i.uint32(
          /* id 16, wireType 2 =*/
          130
        ).fork()).ldelim(), A.dg16PersonsToNotify != null && Object.hasOwnProperty.call(A, "dg16PersonsToNotify") && B.dot.v4.Lds1ElementaryFile.encode(A.dg16PersonsToNotify, i.uint32(
          /* id 17, wireType 2 =*/
          138
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.Lds1eMrtdApplication();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 2: {
              I.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 3: {
              I.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 4: {
              I.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 5: {
              I.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 6: {
              I.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 7: {
              I.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 8: {
              I.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 9: {
              I.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 10: {
              I.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 11: {
              I.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 12: {
              I.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 13: {
              I.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 14: {
              I.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 15: {
              I.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 16: {
              I.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            case 17: {
              I.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.comHeaderAndDataGroupPresenceInformation);
          if (i)
            return "comHeaderAndDataGroupPresenceInformation." + i;
        }
        if (A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.sodDocumentSecurityObject);
          if (i)
            return "sodDocumentSecurityObject." + i;
        }
        if (A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg1MachineReadableZoneInformation);
          if (i)
            return "dg1MachineReadableZoneInformation." + i;
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg2EncodedIdentificationFeaturesFace);
          if (i)
            return "dg2EncodedIdentificationFeaturesFace." + i;
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg3AdditionalIdentificationFeatureFingers);
          if (i)
            return "dg3AdditionalIdentificationFeatureFingers." + i;
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg4AdditionalIdentificationFeatureIrises);
          if (i)
            return "dg4AdditionalIdentificationFeatureIrises." + i;
        }
        if (A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg5DisplayedPortrait);
          if (i)
            return "dg5DisplayedPortrait." + i;
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg7DisplayedSignatureOrUsualMark);
          if (i)
            return "dg7DisplayedSignatureOrUsualMark." + i;
        }
        if (A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg8DataFeatures);
          if (i)
            return "dg8DataFeatures." + i;
        }
        if (A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg9StructureFeatures);
          if (i)
            return "dg9StructureFeatures." + i;
        }
        if (A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg10SubstanceFeatures);
          if (i)
            return "dg10SubstanceFeatures." + i;
        }
        if (A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg11AdditionalPersonalDetails);
          if (i)
            return "dg11AdditionalPersonalDetails." + i;
        }
        if (A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg12AdditionalDocumentDetails);
          if (i)
            return "dg12AdditionalDocumentDetails." + i;
        }
        if (A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg13OptionalDetails);
          if (i)
            return "dg13OptionalDetails." + i;
        }
        if (A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg14SecurityOptions);
          if (i)
            return "dg14SecurityOptions." + i;
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg15ActiveAuthenticationPublicKeyInfo);
          if (i)
            return "dg15ActiveAuthenticationPublicKeyInfo." + i;
        }
        if (A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify")) {
          let i = B.dot.v4.Lds1ElementaryFile.verify(A.dg16PersonsToNotify);
          if (i)
            return "dg16PersonsToNotify." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1eMrtdApplication)
          return A;
        let i = new B.dot.v4.Lds1eMrtdApplication();
        if (A.comHeaderAndDataGroupPresenceInformation != null) {
          if (typeof A.comHeaderAndDataGroupPresenceInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.comHeaderAndDataGroupPresenceInformation: object expected");
          i.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.comHeaderAndDataGroupPresenceInformation);
        }
        if (A.sodDocumentSecurityObject != null) {
          if (typeof A.sodDocumentSecurityObject != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.sodDocumentSecurityObject: object expected");
          i.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.fromObject(A.sodDocumentSecurityObject);
        }
        if (A.dg1MachineReadableZoneInformation != null) {
          if (typeof A.dg1MachineReadableZoneInformation != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg1MachineReadableZoneInformation: object expected");
          i.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg1MachineReadableZoneInformation);
        }
        if (A.dg2EncodedIdentificationFeaturesFace != null) {
          if (typeof A.dg2EncodedIdentificationFeaturesFace != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg2EncodedIdentificationFeaturesFace: object expected");
          i.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg2EncodedIdentificationFeaturesFace);
        }
        if (A.dg3AdditionalIdentificationFeatureFingers != null) {
          if (typeof A.dg3AdditionalIdentificationFeatureFingers != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg3AdditionalIdentificationFeatureFingers: object expected");
          i.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg3AdditionalIdentificationFeatureFingers);
        }
        if (A.dg4AdditionalIdentificationFeatureIrises != null) {
          if (typeof A.dg4AdditionalIdentificationFeatureIrises != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg4AdditionalIdentificationFeatureIrises: object expected");
          i.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg4AdditionalIdentificationFeatureIrises);
        }
        if (A.dg5DisplayedPortrait != null) {
          if (typeof A.dg5DisplayedPortrait != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg5DisplayedPortrait: object expected");
          i.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg5DisplayedPortrait);
        }
        if (A.dg7DisplayedSignatureOrUsualMark != null) {
          if (typeof A.dg7DisplayedSignatureOrUsualMark != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg7DisplayedSignatureOrUsualMark: object expected");
          i.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg7DisplayedSignatureOrUsualMark);
        }
        if (A.dg8DataFeatures != null) {
          if (typeof A.dg8DataFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg8DataFeatures: object expected");
          i.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg8DataFeatures);
        }
        if (A.dg9StructureFeatures != null) {
          if (typeof A.dg9StructureFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg9StructureFeatures: object expected");
          i.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg9StructureFeatures);
        }
        if (A.dg10SubstanceFeatures != null) {
          if (typeof A.dg10SubstanceFeatures != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg10SubstanceFeatures: object expected");
          i.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg10SubstanceFeatures);
        }
        if (A.dg11AdditionalPersonalDetails != null) {
          if (typeof A.dg11AdditionalPersonalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg11AdditionalPersonalDetails: object expected");
          i.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg11AdditionalPersonalDetails);
        }
        if (A.dg12AdditionalDocumentDetails != null) {
          if (typeof A.dg12AdditionalDocumentDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg12AdditionalDocumentDetails: object expected");
          i.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg12AdditionalDocumentDetails);
        }
        if (A.dg13OptionalDetails != null) {
          if (typeof A.dg13OptionalDetails != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg13OptionalDetails: object expected");
          i.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg13OptionalDetails);
        }
        if (A.dg14SecurityOptions != null) {
          if (typeof A.dg14SecurityOptions != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg14SecurityOptions: object expected");
          i.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg14SecurityOptions);
        }
        if (A.dg15ActiveAuthenticationPublicKeyInfo != null) {
          if (typeof A.dg15ActiveAuthenticationPublicKeyInfo != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg15ActiveAuthenticationPublicKeyInfo: object expected");
          i.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg15ActiveAuthenticationPublicKeyInfo);
        }
        if (A.dg16PersonsToNotify != null) {
          if (typeof A.dg16PersonsToNotify != "object")
            throw TypeError(".dot.v4.Lds1eMrtdApplication.dg16PersonsToNotify: object expected");
          i.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.fromObject(A.dg16PersonsToNotify);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.comHeaderAndDataGroupPresenceInformation = null, n.sodDocumentSecurityObject = null, n.dg1MachineReadableZoneInformation = null, n.dg2EncodedIdentificationFeaturesFace = null), A.comHeaderAndDataGroupPresenceInformation != null && A.hasOwnProperty("comHeaderAndDataGroupPresenceInformation") && (n.comHeaderAndDataGroupPresenceInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.comHeaderAndDataGroupPresenceInformation, i)), A.sodDocumentSecurityObject != null && A.hasOwnProperty("sodDocumentSecurityObject") && (n.sodDocumentSecurityObject = B.dot.v4.Lds1ElementaryFile.toObject(A.sodDocumentSecurityObject, i)), A.dg1MachineReadableZoneInformation != null && A.hasOwnProperty("dg1MachineReadableZoneInformation") && (n.dg1MachineReadableZoneInformation = B.dot.v4.Lds1ElementaryFile.toObject(A.dg1MachineReadableZoneInformation, i)), A.dg2EncodedIdentificationFeaturesFace != null && A.hasOwnProperty("dg2EncodedIdentificationFeaturesFace") && (n.dg2EncodedIdentificationFeaturesFace = B.dot.v4.Lds1ElementaryFile.toObject(A.dg2EncodedIdentificationFeaturesFace, i)), A.dg3AdditionalIdentificationFeatureFingers != null && A.hasOwnProperty("dg3AdditionalIdentificationFeatureFingers") && (n.dg3AdditionalIdentificationFeatureFingers = B.dot.v4.Lds1ElementaryFile.toObject(A.dg3AdditionalIdentificationFeatureFingers, i), i.oneofs && (n._dg3AdditionalIdentificationFeatureFingers = "dg3AdditionalIdentificationFeatureFingers")), A.dg4AdditionalIdentificationFeatureIrises != null && A.hasOwnProperty("dg4AdditionalIdentificationFeatureIrises") && (n.dg4AdditionalIdentificationFeatureIrises = B.dot.v4.Lds1ElementaryFile.toObject(A.dg4AdditionalIdentificationFeatureIrises, i), i.oneofs && (n._dg4AdditionalIdentificationFeatureIrises = "dg4AdditionalIdentificationFeatureIrises")), A.dg5DisplayedPortrait != null && A.hasOwnProperty("dg5DisplayedPortrait") && (n.dg5DisplayedPortrait = B.dot.v4.Lds1ElementaryFile.toObject(A.dg5DisplayedPortrait, i), i.oneofs && (n._dg5DisplayedPortrait = "dg5DisplayedPortrait")), A.dg7DisplayedSignatureOrUsualMark != null && A.hasOwnProperty("dg7DisplayedSignatureOrUsualMark") && (n.dg7DisplayedSignatureOrUsualMark = B.dot.v4.Lds1ElementaryFile.toObject(A.dg7DisplayedSignatureOrUsualMark, i), i.oneofs && (n._dg7DisplayedSignatureOrUsualMark = "dg7DisplayedSignatureOrUsualMark")), A.dg8DataFeatures != null && A.hasOwnProperty("dg8DataFeatures") && (n.dg8DataFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg8DataFeatures, i), i.oneofs && (n._dg8DataFeatures = "dg8DataFeatures")), A.dg9StructureFeatures != null && A.hasOwnProperty("dg9StructureFeatures") && (n.dg9StructureFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg9StructureFeatures, i), i.oneofs && (n._dg9StructureFeatures = "dg9StructureFeatures")), A.dg10SubstanceFeatures != null && A.hasOwnProperty("dg10SubstanceFeatures") && (n.dg10SubstanceFeatures = B.dot.v4.Lds1ElementaryFile.toObject(A.dg10SubstanceFeatures, i), i.oneofs && (n._dg10SubstanceFeatures = "dg10SubstanceFeatures")), A.dg11AdditionalPersonalDetails != null && A.hasOwnProperty("dg11AdditionalPersonalDetails") && (n.dg11AdditionalPersonalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg11AdditionalPersonalDetails, i), i.oneofs && (n._dg11AdditionalPersonalDetails = "dg11AdditionalPersonalDetails")), A.dg12AdditionalDocumentDetails != null && A.hasOwnProperty("dg12AdditionalDocumentDetails") && (n.dg12AdditionalDocumentDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg12AdditionalDocumentDetails, i), i.oneofs && (n._dg12AdditionalDocumentDetails = "dg12AdditionalDocumentDetails")), A.dg13OptionalDetails != null && A.hasOwnProperty("dg13OptionalDetails") && (n.dg13OptionalDetails = B.dot.v4.Lds1ElementaryFile.toObject(A.dg13OptionalDetails, i), i.oneofs && (n._dg13OptionalDetails = "dg13OptionalDetails")), A.dg14SecurityOptions != null && A.hasOwnProperty("dg14SecurityOptions") && (n.dg14SecurityOptions = B.dot.v4.Lds1ElementaryFile.toObject(A.dg14SecurityOptions, i), i.oneofs && (n._dg14SecurityOptions = "dg14SecurityOptions")), A.dg15ActiveAuthenticationPublicKeyInfo != null && A.hasOwnProperty("dg15ActiveAuthenticationPublicKeyInfo") && (n.dg15ActiveAuthenticationPublicKeyInfo = B.dot.v4.Lds1ElementaryFile.toObject(A.dg15ActiveAuthenticationPublicKeyInfo, i), i.oneofs && (n._dg15ActiveAuthenticationPublicKeyInfo = "dg15ActiveAuthenticationPublicKeyInfo")), A.dg16PersonsToNotify != null && A.hasOwnProperty("dg16PersonsToNotify") && (n.dg16PersonsToNotify = B.dot.v4.Lds1ElementaryFile.toObject(A.dg16PersonsToNotify, i), i.oneofs && (n._dg16PersonsToNotify = "dg16PersonsToNotify")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1eMrtdApplication";
      }, t;
    }(), g.Lds1ElementaryFile = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.id = 0, t.prototype.bytes = null;
      let e;
      return Object.defineProperty(t.prototype, "_bytes", {
        get: d.oneOfGetter(e = ["bytes"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.id != null && Object.hasOwnProperty.call(A, "id") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.id), A.bytes != null && Object.hasOwnProperty.call(A, "bytes") && i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).bytes(A.bytes), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.Lds1ElementaryFile();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.id = A.int32();
              break;
            }
            case 2: {
              I.bytes = A.bytes();
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
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
        return A.bytes != null && A.hasOwnProperty("bytes") && !(A.bytes && typeof A.bytes.length == "number" || d.isString(A.bytes)) ? "bytes: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.Lds1ElementaryFile)
          return A;
        let i = new B.dot.v4.Lds1ElementaryFile();
        switch (A.id) {
          default:
            if (typeof A.id == "number") {
              i.id = A.id;
              break;
            }
            break;
          case "ID_UNSPECIFIED":
          case 0:
            i.id = 0;
            break;
          case "ID_COM":
          case 1:
            i.id = 1;
            break;
          case "ID_SOD":
          case 2:
            i.id = 2;
            break;
          case "ID_DG1":
          case 3:
            i.id = 3;
            break;
          case "ID_DG2":
          case 4:
            i.id = 4;
            break;
          case "ID_DG3":
          case 5:
            i.id = 5;
            break;
          case "ID_DG4":
          case 6:
            i.id = 6;
            break;
          case "ID_DG5":
          case 7:
            i.id = 7;
            break;
          case "ID_DG7":
          case 8:
            i.id = 8;
            break;
          case "ID_DG8":
          case 9:
            i.id = 9;
            break;
          case "ID_DG9":
          case 10:
            i.id = 10;
            break;
          case "ID_DG10":
          case 11:
            i.id = 11;
            break;
          case "ID_DG11":
          case 12:
            i.id = 12;
            break;
          case "ID_DG12":
          case 13:
            i.id = 13;
            break;
          case "ID_DG13":
          case 14:
            i.id = 14;
            break;
          case "ID_DG14":
          case 15:
            i.id = 15;
            break;
          case "ID_DG15":
          case 16:
            i.id = 16;
            break;
          case "ID_DG16":
          case 17:
            i.id = 17;
            break;
        }
        return A.bytes != null && (typeof A.bytes == "string" ? d.base64.decode(A.bytes, i.bytes = d.newBuffer(d.base64.length(A.bytes)), 0) : A.bytes.length >= 0 && (i.bytes = A.bytes)), i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.id = i.enums === String ? "ID_UNSPECIFIED" : 0), A.id != null && A.hasOwnProperty("id") && (n.id = i.enums === String ? B.dot.v4.Lds1ElementaryFile.Id[A.id] === void 0 ? A.id : B.dot.v4.Lds1ElementaryFile.Id[A.id] : A.id), A.bytes != null && A.hasOwnProperty("bytes") && (n.bytes = i.bytes === String ? d.base64.encode(A.bytes, 0, A.bytes.length) : i.bytes === Array ? Array.prototype.slice.call(A.bytes) : A.bytes, i.oneofs && (n._bytes = "bytes")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Lds1ElementaryFile";
      }, t.Id = function() {
        const A = {}, i = Object.create(A);
        return i[A[0] = "ID_UNSPECIFIED"] = 0, i[A[1] = "ID_COM"] = 1, i[A[2] = "ID_SOD"] = 2, i[A[3] = "ID_DG1"] = 3, i[A[4] = "ID_DG2"] = 4, i[A[5] = "ID_DG3"] = 5, i[A[6] = "ID_DG4"] = 6, i[A[7] = "ID_DG5"] = 7, i[A[8] = "ID_DG7"] = 8, i[A[9] = "ID_DG8"] = 9, i[A[10] = "ID_DG9"] = 10, i[A[11] = "ID_DG10"] = 11, i[A[12] = "ID_DG11"] = 12, i[A[13] = "ID_DG12"] = 13, i[A[14] = "ID_DG13"] = 14, i[A[15] = "ID_DG14"] = 15, i[A[16] = "ID_DG15"] = 16, i[A[17] = "ID_DG16"] = 17, i;
      }(), t;
    }(), g.AccessControlProtocol = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "ACCESS_CONTROL_PROTOCOL_UNSPECIFIED"] = 0, e[t[1] = "ACCESS_CONTROL_PROTOCOL_BAC"] = 1, e[t[2] = "ACCESS_CONTROL_PROTOCOL_PACE"] = 2, e;
    }(), g.AuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.data = null, t.prototype.chip = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.data != null && Object.hasOwnProperty.call(e, "data") && B.dot.v4.DataAuthenticationStatus.encode(e.data, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.chip != null && Object.hasOwnProperty.call(e, "chip") && B.dot.v4.ChipAuthenticationStatus.encode(e.chip, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.AuthenticationStatus();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.data = B.dot.v4.DataAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.chip = B.dot.v4.ChipAuthenticationStatus.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.data != null && e.hasOwnProperty("data")) {
          let A = B.dot.v4.DataAuthenticationStatus.verify(e.data);
          if (A)
            return "data." + A;
        }
        if (e.chip != null && e.hasOwnProperty("chip")) {
          let A = B.dot.v4.ChipAuthenticationStatus.verify(e.chip);
          if (A)
            return "chip." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.AuthenticationStatus)
          return e;
        let A = new B.dot.v4.AuthenticationStatus();
        if (e.data != null) {
          if (typeof e.data != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.data: object expected");
          A.data = B.dot.v4.DataAuthenticationStatus.fromObject(e.data);
        }
        if (e.chip != null) {
          if (typeof e.chip != "object")
            throw TypeError(".dot.v4.AuthenticationStatus.chip: object expected");
          A.chip = B.dot.v4.ChipAuthenticationStatus.fromObject(e.chip);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.data = null, i.chip = null), e.data != null && e.hasOwnProperty("data") && (i.data = B.dot.v4.DataAuthenticationStatus.toObject(e.data, A)), e.chip != null && e.hasOwnProperty("chip") && (i.chip = B.dot.v4.ChipAuthenticationStatus.toObject(e.chip, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AuthenticationStatus";
      }, t;
    }(), g.DataAuthenticationStatus = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.status = 0, t.prototype.protocol = 0, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.status != null && Object.hasOwnProperty.call(e, "status") && A.uint32(
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
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.DataAuthenticationStatus();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.status = e.int32();
              break;
            }
            case 2: {
              n.protocol = e.int32();
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
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
        if (e instanceof B.dot.v4.DataAuthenticationStatus)
          return e;
        let A = new B.dot.v4.DataAuthenticationStatus();
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
        let i = {};
        return A.defaults && (i.status = A.enums === String ? "STATUS_UNSPECIFIED" : 0, i.protocol = A.enums === String ? "PROTOCOL_UNSPECIFIED" : 0), e.status != null && e.hasOwnProperty("status") && (i.status = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Status[e.status] === void 0 ? e.status : B.dot.v4.DataAuthenticationStatus.Status[e.status] : e.status), e.protocol != null && e.hasOwnProperty("protocol") && (i.protocol = A.enums === String ? B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] === void 0 ? e.protocol : B.dot.v4.DataAuthenticationStatus.Protocol[e.protocol] : e.protocol), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.DataAuthenticationStatus";
      }, t.Status = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "STATUS_UNSPECIFIED"] = 0, A[e[1] = "STATUS_AUTHENTICATED"] = 1, A[e[2] = "STATUS_DENIED"] = 2, A[e[3] = "STATUS_AUTHORITY_CERTIFICATES_NOT_PROVIDED"] = 3, A;
      }(), t.Protocol = function() {
        const e = {}, A = Object.create(e);
        return A[e[0] = "PROTOCOL_UNSPECIFIED"] = 0, A[e[1] = "PROTOCOL_PASSIVE_AUTHENTICATION"] = 1, A;
      }(), t;
    }(), g.ChipAuthenticationStatus = function() {
      function t(A) {
        if (A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.status = 0, t.prototype.protocol = null, t.prototype.activeAuthenticationResponse = null;
      let e;
      return Object.defineProperty(t.prototype, "_protocol", {
        get: d.oneOfGetter(e = ["protocol"]),
        set: d.oneOfSetter(e)
      }), Object.defineProperty(t.prototype, "_activeAuthenticationResponse", {
        get: d.oneOfGetter(e = ["activeAuthenticationResponse"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        return i || (i = v.create()), A.status != null && Object.hasOwnProperty.call(A, "status") && i.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.status), A.protocol != null && Object.hasOwnProperty.call(A, "protocol") && i.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.protocol), A.activeAuthenticationResponse != null && Object.hasOwnProperty.call(A, "activeAuthenticationResponse") && i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).bytes(A.activeAuthenticationResponse), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.ChipAuthenticationStatus();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 1: {
              I.status = A.int32();
              break;
            }
            case 2: {
              I.protocol = A.int32();
              break;
            }
            case 3: {
              I.activeAuthenticationResponse = A.bytes();
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
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
        return A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && !(A.activeAuthenticationResponse && typeof A.activeAuthenticationResponse.length == "number" || d.isString(A.activeAuthenticationResponse)) ? "activeAuthenticationResponse: buffer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.ChipAuthenticationStatus)
          return A;
        let i = new B.dot.v4.ChipAuthenticationStatus();
        switch (A.status) {
          default:
            if (typeof A.status == "number") {
              i.status = A.status;
              break;
            }
            break;
          case "STATUS_UNSPECIFIED":
          case 0:
            i.status = 0;
            break;
          case "STATUS_AUTHENTICATED":
          case 1:
            i.status = 1;
            break;
          case "STATUS_DENIED":
          case 2:
            i.status = 2;
            break;
          case "STATUS_NOT_SUPPORTED":
          case 3:
            i.status = 3;
            break;
        }
        switch (A.protocol) {
          default:
            if (typeof A.protocol == "number") {
              i.protocol = A.protocol;
              break;
            }
            break;
          case "PROTOCOL_UNSPECIFIED":
          case 0:
            i.protocol = 0;
            break;
          case "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING":
          case 1:
            i.protocol = 1;
            break;
          case "PROTOCOL_CHIP_AUTHENTICATION":
          case 2:
            i.protocol = 2;
            break;
          case "PROTOCOL_ACTIVE_AUTHENTICATION":
          case 3:
            i.protocol = 3;
            break;
        }
        return A.activeAuthenticationResponse != null && (typeof A.activeAuthenticationResponse == "string" ? d.base64.decode(A.activeAuthenticationResponse, i.activeAuthenticationResponse = d.newBuffer(d.base64.length(A.activeAuthenticationResponse)), 0) : A.activeAuthenticationResponse.length >= 0 && (i.activeAuthenticationResponse = A.activeAuthenticationResponse)), i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        return i.defaults && (n.status = i.enums === String ? "STATUS_UNSPECIFIED" : 0), A.status != null && A.hasOwnProperty("status") && (n.status = i.enums === String ? B.dot.v4.ChipAuthenticationStatus.Status[A.status] === void 0 ? A.status : B.dot.v4.ChipAuthenticationStatus.Status[A.status] : A.status), A.protocol != null && A.hasOwnProperty("protocol") && (n.protocol = i.enums === String ? B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] === void 0 ? A.protocol : B.dot.v4.ChipAuthenticationStatus.Protocol[A.protocol] : A.protocol, i.oneofs && (n._protocol = "protocol")), A.activeAuthenticationResponse != null && A.hasOwnProperty("activeAuthenticationResponse") && (n.activeAuthenticationResponse = i.bytes === String ? d.base64.encode(A.activeAuthenticationResponse, 0, A.activeAuthenticationResponse.length) : i.bytes === Array ? Array.prototype.slice.call(A.activeAuthenticationResponse) : A.activeAuthenticationResponse, i.oneofs && (n._activeAuthenticationResponse = "activeAuthenticationResponse")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ChipAuthenticationStatus";
      }, t.Status = function() {
        const A = {}, i = Object.create(A);
        return i[A[0] = "STATUS_UNSPECIFIED"] = 0, i[A[1] = "STATUS_AUTHENTICATED"] = 1, i[A[2] = "STATUS_DENIED"] = 2, i[A[3] = "STATUS_NOT_SUPPORTED"] = 3, i;
      }(), t.Protocol = function() {
        const A = {}, i = Object.create(A);
        return i[A[0] = "PROTOCOL_UNSPECIFIED"] = 0, i[A[1] = "PROTOCOL_PACE_CHIP_AUTHENTICATION_MAPPING"] = 1, i[A[2] = "PROTOCOL_CHIP_AUTHENTICATION"] = 2, i[A[3] = "PROTOCOL_ACTIVE_AUTHENTICATION"] = 3, i;
      }(), t;
    }(), g.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let i = Object.keys(A), n = 0; n < i.length; ++n)
            A[i[n]] != null && (this[i[n]] = A[i[n]]);
      }
      t.prototype.image = null, t.prototype.segments = d.emptyArray, t.prototype.metadata = null;
      let e;
      return Object.defineProperty(t.prototype, "_image", {
        get: d.oneOfGetter(e = ["image"]),
        set: d.oneOfSetter(e)
      }), t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, i) {
        if (i || (i = v.create()), A.segments != null && A.segments.length)
          for (let n = 0; n < A.segments.length; ++n)
            B.dot.v4.EyeGazeLivenessSegment.encode(A.segments[n], i.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && B.dot.v4.Metadata.encode(A.metadata, i.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.image != null && Object.hasOwnProperty.call(A, "image") && B.dot.Image.encode(A.image, i.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), i;
      }, t.encodeDelimited = function(A, i) {
        return this.encode(A, i).ldelim();
      }, t.decode = function(A, i) {
        A instanceof f || (A = f.create(A));
        let n = i === void 0 ? A.len : A.pos + i, I = new B.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < n; ) {
          let a = A.uint32();
          switch (a >>> 3) {
            case 3: {
              I.image = B.dot.Image.decode(A, A.uint32());
              break;
            }
            case 1: {
              I.segments && I.segments.length || (I.segments = []), I.segments.push(B.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              I.metadata = B.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(a & 7);
              break;
          }
        }
        return I;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let i = B.dot.Image.verify(A.image);
          if (i)
            return "image." + i;
        }
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let i = 0; i < A.segments.length; ++i) {
            let n = B.dot.v4.EyeGazeLivenessSegment.verify(A.segments[i]);
            if (n)
              return "segments." + n;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let i = B.dot.v4.Metadata.verify(A.metadata);
          if (i)
            return "metadata." + i;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof B.dot.v4.EyeGazeLivenessContent)
          return A;
        let i = new B.dot.v4.EyeGazeLivenessContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.image: object expected");
          i.image = B.dot.Image.fromObject(A.image);
        }
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          i.segments = [];
          for (let n = 0; n < A.segments.length; ++n) {
            if (typeof A.segments[n] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            i.segments[n] = B.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[n]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          i.metadata = B.dot.v4.Metadata.fromObject(A.metadata);
        }
        return i;
      }, t.toObject = function(A, i) {
        i || (i = {});
        let n = {};
        if ((i.arrays || i.defaults) && (n.segments = []), i.defaults && (n.metadata = null), A.segments && A.segments.length) {
          n.segments = [];
          for (let I = 0; I < A.segments.length; ++I)
            n.segments[I] = B.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[I], i);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (n.metadata = B.dot.v4.Metadata.toObject(A.metadata, i)), A.image != null && A.hasOwnProperty("image") && (n.image = B.dot.Image.toObject(A.image, i), i.oneofs && (n._image = "image")), n;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), g.EyeGazeLivenessSegment = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.corner != null && Object.hasOwnProperty.call(e, "corner") && A.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.corner), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.EyeGazeLivenessSegment();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.corner = e.int32();
              break;
            }
            case 2: {
              n.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
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
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.EyeGazeLivenessSegment)
          return e;
        let A = new B.dot.v4.EyeGazeLivenessSegment();
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
          A.image = B.dot.Image.fromObject(e.image);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.corner = A.enums === String ? "TOP_LEFT" : 0, i.image = null), e.corner != null && e.hasOwnProperty("corner") && (i.corner = A.enums === String ? B.dot.v4.EyeGazeLivenessCorner[e.corner] === void 0 ? e.corner : B.dot.v4.EyeGazeLivenessCorner[e.corner] : e.corner), e.image != null && e.hasOwnProperty("image") && (i.image = B.dot.Image.toObject(e.image, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), g.EyeGazeLivenessCorner = function() {
      const t = {}, e = Object.create(t);
      return e[t[0] = "TOP_LEFT"] = 0, e[t[1] = "TOP_RIGHT"] = 1, e[t[2] = "BOTTOM_RIGHT"] = 2, e[t[3] = "BOTTOM_LEFT"] = 3, e;
    }(), g.SmileLivenessContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(e, "neutralExpressionFaceImage") && B.dot.Image.encode(e.neutralExpressionFaceImage, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.smileExpressionFaceImage != null && Object.hasOwnProperty.call(e, "smileExpressionFaceImage") && B.dot.Image.encode(e.smileExpressionFaceImage, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.SmileLivenessContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.neutralExpressionFaceImage = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.smileExpressionFaceImage = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 3: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage")) {
          let A = B.dot.Image.verify(e.neutralExpressionFaceImage);
          if (A)
            return "neutralExpressionFaceImage." + A;
        }
        if (e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage")) {
          let A = B.dot.Image.verify(e.smileExpressionFaceImage);
          if (A)
            return "smileExpressionFaceImage." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.SmileLivenessContent)
          return e;
        let A = new B.dot.v4.SmileLivenessContent();
        if (e.neutralExpressionFaceImage != null) {
          if (typeof e.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          A.neutralExpressionFaceImage = B.dot.Image.fromObject(e.neutralExpressionFaceImage);
        }
        if (e.smileExpressionFaceImage != null) {
          if (typeof e.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          A.smileExpressionFaceImage = B.dot.Image.fromObject(e.smileExpressionFaceImage);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.neutralExpressionFaceImage = null, i.smileExpressionFaceImage = null, i.metadata = null), e.neutralExpressionFaceImage != null && e.hasOwnProperty("neutralExpressionFaceImage") && (i.neutralExpressionFaceImage = B.dot.Image.toObject(e.neutralExpressionFaceImage, A)), e.smileExpressionFaceImage != null && e.hasOwnProperty("smileExpressionFaceImage") && (i.smileExpressionFaceImage = B.dot.Image.toObject(e.smileExpressionFaceImage, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), g.PalmContent = function() {
      function t(e) {
        if (e)
          for (let A = Object.keys(e), i = 0; i < A.length; ++i)
            e[A[i]] != null && (this[A[i]] = e[A[i]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, A) {
        return A || (A = v.create()), e.image != null && Object.hasOwnProperty.call(e, "image") && B.dot.Image.encode(e.image, A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.metadata != null && Object.hasOwnProperty.call(e, "metadata") && B.dot.v4.Metadata.encode(e.metadata, A.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A;
      }, t.encodeDelimited = function(e, A) {
        return this.encode(e, A).ldelim();
      }, t.decode = function(e, A) {
        e instanceof f || (e = f.create(e));
        let i = A === void 0 ? e.len : e.pos + A, n = new B.dot.v4.PalmContent();
        for (; e.pos < i; ) {
          let I = e.uint32();
          switch (I >>> 3) {
            case 1: {
              n.image = B.dot.Image.decode(e, e.uint32());
              break;
            }
            case 2: {
              n.metadata = B.dot.v4.Metadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(I & 7);
              break;
          }
        }
        return n;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.image != null && e.hasOwnProperty("image")) {
          let A = B.dot.Image.verify(e.image);
          if (A)
            return "image." + A;
        }
        if (e.metadata != null && e.hasOwnProperty("metadata")) {
          let A = B.dot.v4.Metadata.verify(e.metadata);
          if (A)
            return "metadata." + A;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof B.dot.v4.PalmContent)
          return e;
        let A = new B.dot.v4.PalmContent();
        if (e.image != null) {
          if (typeof e.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          A.image = B.dot.Image.fromObject(e.image);
        }
        if (e.metadata != null) {
          if (typeof e.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          A.metadata = B.dot.v4.Metadata.fromObject(e.metadata);
        }
        return A;
      }, t.toObject = function(e, A) {
        A || (A = {});
        let i = {};
        return A.defaults && (i.image = null, i.metadata = null), e.image != null && e.hasOwnProperty("image") && (i.image = B.dot.Image.toObject(e.image, A)), e.metadata != null && e.hasOwnProperty("metadata") && (i.metadata = B.dot.v4.Metadata.toObject(e.metadata, A)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, F.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.PalmContent";
      }, t;
    }(), g;
  }(), o.Image = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.bytes = d.newBuffer([]), g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), e;
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.Image();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.bytes = t.bytes();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || d.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.Image)
        return t;
      let e = new B.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? d.base64.decode(t.bytes, e.bytes = d.newBuffer(d.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (e.bytes = t.bytes)), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (e.bytes === String ? A.bytes = "" : (A.bytes = [], e.bytes !== Array && (A.bytes = d.newBuffer(A.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (A.bytes = e.bytes === String ? d.base64.encode(t.bytes, 0, t.bytes.length) : e.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, F.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, g;
  }(), o.ImageSize = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.width = 0, g.prototype.height = 0, g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.width != null && Object.hasOwnProperty.call(t, "width") && e.uint32(
        /* id 1, wireType 0 =*/
        8
      ).int32(t.width), t.height != null && Object.hasOwnProperty.call(t, "height") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).int32(t.height), e;
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.ImageSize();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.width = t.int32();
            break;
          }
          case 2: {
            i.height = t.int32();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.width != null && t.hasOwnProperty("width") && !d.isInteger(t.width) ? "width: integer expected" : t.height != null && t.hasOwnProperty("height") && !d.isInteger(t.height) ? "height: integer expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.ImageSize)
        return t;
      let e = new B.dot.ImageSize();
      return t.width != null && (e.width = t.width | 0), t.height != null && (e.height = t.height | 0), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.width = 0, A.height = 0), t.width != null && t.hasOwnProperty("width") && (A.width = t.width), t.height != null && t.hasOwnProperty("height") && (A.height = t.height), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, F.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.ImageSize";
    }, g;
  }(), o.Int32List = function() {
    function g(t) {
      if (this.items = [], t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.items = d.emptyArray, g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      if (e || (e = v.create()), t.items != null && t.items.length) {
        e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let A = 0; A < t.items.length; ++A)
          e.int32(t.items[A]);
        e.ldelim();
      }
      return e;
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.Int32List();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            if (i.items && i.items.length || (i.items = []), (n & 7) === 2) {
              let I = t.uint32() + t.pos;
              for (; t.pos < I; )
                i.items.push(t.int32());
            } else
              i.items.push(t.int32());
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let e = 0; e < t.items.length; ++e)
          if (!d.isInteger(t.items[e]))
            return "items: integer[] expected";
      }
      return null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.Int32List)
        return t;
      let e = new B.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        e.items = [];
        for (let A = 0; A < t.items.length; ++A)
          e.items[A] = t.items[A] | 0;
      }
      return e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if ((e.arrays || e.defaults) && (A.items = []), t.items && t.items.length) {
        A.items = [];
        for (let i = 0; i < t.items.length; ++i)
          A.items[i] = t.items[i];
      }
      return A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, F.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, g;
  }(), o.Platform = function() {
    const g = {}, t = Object.create(g);
    return t[g[0] = "WEB"] = 0, t[g[1] = "ANDROID"] = 1, t[g[2] = "IOS"] = 2, t;
  }(), o.RectangleDouble = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.left = 0, g.prototype.top = 0, g.prototype.right = 0, g.prototype.bottom = 0, g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.left != null && Object.hasOwnProperty.call(t, "left") && e.uint32(
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
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.RectangleDouble();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.left = t.double();
            break;
          }
          case 2: {
            i.top = t.double();
            break;
          }
          case 3: {
            i.right = t.double();
            break;
          }
          case 4: {
            i.bottom = t.double();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.left != null && t.hasOwnProperty("left") && typeof t.left != "number" ? "left: number expected" : t.top != null && t.hasOwnProperty("top") && typeof t.top != "number" ? "top: number expected" : t.right != null && t.hasOwnProperty("right") && typeof t.right != "number" ? "right: number expected" : t.bottom != null && t.hasOwnProperty("bottom") && typeof t.bottom != "number" ? "bottom: number expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.RectangleDouble)
        return t;
      let e = new B.dot.RectangleDouble();
      return t.left != null && (e.left = Number(t.left)), t.top != null && (e.top = Number(t.top)), t.right != null && (e.right = Number(t.right)), t.bottom != null && (e.bottom = Number(t.bottom)), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      return e.defaults && (A.left = 0, A.top = 0, A.right = 0, A.bottom = 0), t.left != null && t.hasOwnProperty("left") && (A.left = e.json && !isFinite(t.left) ? String(t.left) : t.left), t.top != null && t.hasOwnProperty("top") && (A.top = e.json && !isFinite(t.top) ? String(t.top) : t.top), t.right != null && t.hasOwnProperty("right") && (A.right = e.json && !isFinite(t.right) ? String(t.right) : t.right), t.bottom != null && t.hasOwnProperty("bottom") && (A.bottom = e.json && !isFinite(t.bottom) ? String(t.bottom) : t.bottom), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, F.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.RectangleDouble";
    }, g;
  }(), o.DigestWithTimestamp = function() {
    function g(t) {
      if (t)
        for (let e = Object.keys(t), A = 0; A < e.length; ++A)
          t[e[A]] != null && (this[e[A]] = t[e[A]]);
    }
    return g.prototype.digest = d.newBuffer([]), g.prototype.timestampMillis = d.Long ? d.Long.fromBits(0, 0, !0) : 0, g.create = function(t) {
      return new g(t);
    }, g.encode = function(t, e) {
      return e || (e = v.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && e.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && e.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), e;
    }, g.encodeDelimited = function(t, e) {
      return this.encode(t, e).ldelim();
    }, g.decode = function(t, e) {
      t instanceof f || (t = f.create(t));
      let A = e === void 0 ? t.len : t.pos + e, i = new B.dot.DigestWithTimestamp();
      for (; t.pos < A; ) {
        let n = t.uint32();
        switch (n >>> 3) {
          case 1: {
            i.digest = t.bytes();
            break;
          }
          case 2: {
            i.timestampMillis = t.uint64();
            break;
          }
          default:
            t.skipType(n & 7);
            break;
        }
      }
      return i;
    }, g.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, g.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || d.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !d.isInteger(t.timestampMillis) && !(t.timestampMillis && d.isInteger(t.timestampMillis.low) && d.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, g.fromObject = function(t) {
      if (t instanceof B.dot.DigestWithTimestamp)
        return t;
      let e = new B.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? d.base64.decode(t.digest, e.digest = d.newBuffer(d.base64.length(t.digest)), 0) : t.digest.length >= 0 && (e.digest = t.digest)), t.timestampMillis != null && (d.Long ? (e.timestampMillis = d.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? e.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? e.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (e.timestampMillis = new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), e;
    }, g.toObject = function(t, e) {
      e || (e = {});
      let A = {};
      if (e.defaults)
        if (e.bytes === String ? A.digest = "" : (A.digest = [], e.bytes !== Array && (A.digest = d.newBuffer(A.digest))), d.Long) {
          let i = new d.Long(0, 0, !0);
          A.timestampMillis = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i;
        } else
          A.timestampMillis = e.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (A.digest = e.bytes === String ? d.base64.encode(t.digest, 0, t.digest.length) : e.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? A.timestampMillis = e.longs === String ? String(t.timestampMillis) : t.timestampMillis : A.timestampMillis = e.longs === String ? d.Long.prototype.toString.call(t.timestampMillis) : e.longs === Number ? new d.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), A;
    }, g.prototype.toJSON = function() {
      return this.constructor.toObject(this, F.util.toJSONOptions);
    }, g.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, g;
  }(), o;
})();
function AA(o, g) {
  const t = Zo();
  return AA = function(e, A) {
    e = e - (-8021 + 2474 * -3 + 15912);
    let i = t[e];
    if (AA.FvFLVI === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      AA.uRKGah = Q, o = arguments, AA.FvFLVI = !0;
    }
    const I = t[117 * 1 + -2363 * -1 + 5 * -496], a = e + I, r = o[a];
    return r ? i = r : (AA.NmBDnH === void 0 && (AA.NmBDnH = !0), i = AA.uRKGah(i, A), o[a] = i), i;
  }, AA(o, g);
}
(function(o, g) {
  function t(n, I, a, r, Q) {
    return AA(n - -144, I);
  }
  function e(n, I, a, r, Q) {
    return AA(I - 769, Q);
  }
  function A(n, I, a, r, Q) {
    return AA(a - 496, r);
  }
  const i = o();
  for (; ; )
    try {
      if (-parseInt(A(981, 962, 968, "3WDO", 984)) / 1 * (parseInt(t(337, "iD8D", 331, 322, 348)) / 2) + -parseInt(t(369, "5Xn!", 349, 375, 378)) / 3 + parseInt(A(983, 978, 988, "5Xn!", 979)) / 4 * (-parseInt(A(954, 987, 966, "Tib^", 976)) / 5) + parseInt(e(1255, 1262, 1241, 1250, "eNCp")) / 6 + parseInt(t(339, "U^Bx", 344, 346, 324)) / 7 + -parseInt(e(1246, 1246, 1238, 1239, "n2nh")) / 8 + parseInt(e(1226, 1240, 1252, 1235, "APoe")) / 9 * (parseInt(t(366, "Tib^", 371, 358, 346)) / 10) === g) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Zo, 303999);
function Zo() {
  const o = ["ha0gExG", "iCoPW5/dQCk1WQxdRG", "WRldKc9ZW4i", "W6ddPJ5eW6nru2eH", "WQHzWQJdHW", "W5tdPhBdI8ka", "WPVcLCk0WP3dJ3foW5y6WR4auW", "jmoqarZdHG", "W6tcU1zCW4r7yW", "iSktBwz6qxP9W6FcK2hcHG", "W7D0WQNdJwClFa", "WRv2xCkvW4e", "W7G5WRtcG8kb", "D8oqW5zYW6FcKHKYjHldT8o/", "W5KrxXFdIW", "WOvhauZcRSkvBfKqeSoyFmks", "xK5uw2tdHJJdH1a", "WRrzWRi", "WQDHygWe", "WO3cVZBcNCogfSodFmk0zsZcIG", "CMNdQSoC", "W7hcLmoOW7NcSbeqW60pumoioCkr", "DepcNSoDBW", "W57dRxO", "W5jKW57dSCkYb8ooWRNcV8kkW4/cPCoT", "idizw30", "kmoqfG", "irhdGCkiiKxcLWbeW7hdKSkB", "W74Wcmk8", "WPvHmrtcJmkIWO/dHdtdQ8kfWP4/", "WPpcKSk3WPFdG30oW7mFWRa7Cv0", "xubvpYdcV0ldG2rQWOJdIxC", "WP0oWQb1W6K", "D8kcW5JcHIi", "kHddGCkoleJdLIvuW5JdHmkhiW", "e8ktss3dNCoNwmkgW6JcG8oJWOyv", "WQf9EM4j", "z8o3W6xdK8ko", "q8oxhL7cJq", "W6BdPdnZW6ivCW", "W78UWQ7cGCkm", "twzwW4O", "W6JcTCkKySoZ", "cHyhF20", "W74Rc8k9"];
  return Zo = function() {
    return o;
  }, Zo();
}
async function PQ() {
  const o = {};
  o[r("&DiQ", 1362, 1346, 1356)] = N0, o[r("wDfB", 1348, 1342, 1337) + "h"] = 256;
  function g(Q, C, x, c, E) {
    return AA(E - -342, x);
  }
  const t = await window[A(-470, -490, -477, "^i2R") + "o"][A(-439, -455, -448, "keoW") + "e"][a(500, 506, 495, "6qq3", 518) + r("k*hN", 1359, 1339, 1353) + "y"](o, !0, [r("XshE", 1352, 1329, 1351) + "pt", a(543, 552, 568, "RRlv", 551) + "pt"]), e = Uint8Array[A(-453, -475, -440, "bM^r")](Array(-967 * 5 + 91 * 71 + 115 * -14)[g(166, 185, "bM^r", 162, 164)](-1 * 4471 + 263 * -38 + -2893 * -5));
  function A(Q, C, x, c, E) {
    return AA(Q - -943, c);
  }
  const i = window[a(551, 548, 553, "0#wi", 544) + "o"][I("3!Pm", 1193, 1166, 1156, 1173) + r("n2nh", 1319, 1323, 1329) + g(159, 161, "iD8D", 191, 170)](e), n = {};
  function I(Q, C, x, c, E) {
    return AA(E - 686, Q);
  }
  function a(Q, C, x, c, E) {
    return AA(E - 49, c);
  }
  n[a(548, 548, 525, "iD8D", 534)] = t;
  function r(Q, C, x, c, E) {
    return AA(c - 853, Q);
  }
  return n.iv = i, n;
}
async function qQ(o) {
  function g(C, x, c, E, l) {
    return AA(x - 309, l);
  }
  function t(C, x, c, E, l) {
    return AA(x - -67, E);
  }
  const { iv: e, key: A } = await PQ(), i = {};
  i[t(440, 444, 463, "3WDO")] = N0, i.iv = e;
  function n(C, x, c, E, l) {
    return AA(c - 351, x);
  }
  const I = await window[t(415, 413, 425, "XshE") + "o"][t(418, 432, 454, "f&5c") + "e"][g(799, 814, 817, 830, "eNCp") + "pt"](i, A, o), a = await window[g(786, 783, 776, 793, "RRlv") + "o"][Q(810, 804, 815, "eNCp", 808) + "e"][t(442, 442, 436, "Tqk[") + t(406, 415, 421, "b&W2")](t(391, 412, 407, "3WDO"), A), r = {};
  r[n(867, "7#$[", 845) + "ge"] = I, r[n(844, "6qq3", 839)] = a, r.iv = e;
  function Q(C, x, c, E, l) {
    return AA(l - 301, E);
  }
  return r;
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return cA(C - -611, x);
  }
  const e = o();
  function A(a, r, Q, C, x) {
    return cA(r - -104, a);
  }
  function i(a, r, Q, C, x) {
    return cA(x - 203, C);
  }
  function n(a, r, Q, C, x) {
    return cA(x - -579, C);
  }
  function I(a, r, Q, C, x) {
    return cA(x - -428, a);
  }
  for (; ; )
    try {
      if (-parseInt(I("LnmU", -275, -274, -278, -280)) / 1 * (-parseInt(n(-422, -410, -426, "7xnS", -417)) / 2) + -parseInt(n(-431, -418, -437, "gao(", -429)) / 3 * (-parseInt(n(-423, -433, -439, "hdo1", -435)) / 4) + parseInt(i(363, 356, 343, "37X7", 354)) / 5 + -parseInt(t(-459, -439, -429, -444, "7xnS")) / 6 + parseInt(t(-473, -472, -464, -462, "20gT")) / 7 + -parseInt(A("nq5g", 62, 75, 69, 76)) / 8 * (parseInt(A("in*m", 51, 65, 64, 43)) / 9) + parseInt(I("FOIi", -265, -261, -256, -265)) / 10 * (-parseInt(n(-429, -412, -434, "Syny", -421)) / 11) === g) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Vo, -274821 + -3507 * -85 + 126891);
function Vo() {
  const o = ["W5pcMYafEa", "EvKxiCkfWQaOxCksvKumkG", "W78TzSohW4VcP21Vvu3cGCkw", "BmoRW65r", "wCkFn3u+", "W6/cRmoHqWNcH8oLocXDWQfp", "r8olW5tdRmk6p8oHWO/cLtZdNW", "WQZdStjgWRi", "zmoTWRRdQ8kmW4upW6W", "WOaRWQ19W4tcI8ktgW", "WQC5WQFdUCo8", "d8kcb1y5kCkX", "W4dcVmo6W49fW5BdJmkTr8kNW4ldIW", "W7xcNhlcV8kdW4JdKtfgbXu", "p8kQWRqhWOu8p3qFoxu", "W5xdOw4XD8kzsh3cVbFdVCkq", "rCofW5VdPCk6CmonWRxcPa/dPSoL", "WQxcRCkhx8oTsmoY", "WRX6nCkkWPe", "WRZdMvFcP8kBW7pdHq/dLmkDWOBcGJO", "cItdRbhcJcNdHW", "WQpdVd1tWOu", "z8oGW6tcJmoyW6q0W44Mpsq", "WQqwhCkQWR0jW5xcV8kHW63dRchcJG", "CSk2geBcPq", "WQygW4LTwmoPlSka", "o3HQDmoCW5hcUSoppmoKdxhcHW", "W7PTaSkXWQtdN3K", "W717BmoBW6qCwmo7", "W5KHpmoqW40GdCoCb3BdM8o6"];
  return Vo = function() {
    return o;
  }, Vo();
}
function cA(o, g) {
  const t = Vo();
  return cA = function(e, A) {
    e = e - (-3203 * -1 + -8434 + 25 * 215);
    let i = t[e];
    if (cA.uLUBzN === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      cA.KKliBP = Q, o = arguments, cA.uLUBzN = !0;
    }
    const I = t[-5876 + 100 * -85 + 14376], a = e + I, r = o[a];
    return r ? i = r : (cA.rlaMLn === void 0 && (cA.rlaMLn = !0), i = cA.KKliBP(i, A), o[a] = i), i;
  }, cA(o, g);
}
function jQ(o) {
  const g = new ArrayBuffer(o[e("w&ay", -550) + "h"]), t = new Uint8Array(g);
  function e(i, n, I, a, r) {
    return cA(n - -722, i);
  }
  function A(i, n, I, a, r) {
    return cA(a - 328, n);
  }
  for (let i = 8 * 1106 + -1671 + -7177, n = o[A(482, "JgJ8", 494, 487) + "h"]; i < n; i++)
    t[i] = o[A(493, "w&ay", 493, 484) + e("dzO[", -553)](i);
  return g;
}
function _o() {
  const o = ["WQBcJmoYDmks", "WQ9vW6mkxq", "zv/cISkUha", "hMpcGSoBaq", "ymonWO1XW74", "ubBcQmkPAW", "WPBcOIlcH3m", "ug7cG0Ss", "WQG9CSotkG", "W6NcGtVcGLe", "W6JcR8oGW7ff", "cwD+WPqg", "qmowW5dcKCkv", "BrtdQCozta", "W7/dItFdGwu", "W6e6y2bz", "W4JcUSkrWPmj", "W6FcQvRdVmoK", "yxFcO25TW4C7oW", "uCkwsaqQ", "jb3cJuDp", "WRHNW5So", "W4XjW7Stia", "W458WQz0EYpdHmkY", "q0NcNSk/WO8yW6KnE1xcN0L4DW", "WOVcPMqkWRC", "q0VcKSoMW6HfWRjTra", "WOfvWR5Uwa", "W48RnvpdNa", "wwNdO1TX", "W5zOWQbgWOe", "W43dVgZcNCku", "W5pdTCoopCor", "W6TuW7e0gq", "rbZdUSk1vY9AACocnmoIWRG", "tv/dPtWh", "dHHlW4BcJq", "W5fKW5jxWP8", "vuz5WROz", "W5ziWPeCiW", "sbVcJmoija", "t3ihWOKI", "W7fCcmk7W54", "WPtdVmoODCoV", "qrNcGSoBDq", "jXFdO8oEWOW", "WOySerxcVW", "W4FcS8kwf8oQ", "W6HNW4yHkW", "WPXnWORcNqW", "W7eXmmoYda", "btxcVNjb", "W7ZdNCkzW4Ck", "dHuDW6xcOq", "W5JdQmoThfa", "CKNcHNXY", "WQBcSmo9k8kz", "W6ZdNmkaW7vs", "dYnDW43cOa", "sCoQeSknW40", "W7HjW7WN", "W5zPW4qPja", "W4lcSSo2C8kf", "q8oJW5pcV8kK", "x8oeW4tcR8on", "WPVdL8oJo3m", "WQxdJSojWPiZ", "u8oogSkU", "ruPzWPr9", "WOG+WQ8HEq", "WPbIrmoPoW", "WQLVWQaprq", "W4pcSmkzW6G+", "WQBcT8kxB8klc8oJgdVdK3mkW6O", "vSo2dCkzW5q", "W4NcGmoSyW", "W58Eux1E", "WP7dV0ddSKq", "W45FW4ytgq", "zxxdMKjpW6y9asy", "W6jOEh5D", "WP9sWOrtvG", "WP/dRSoHfc8", "BxNcK1VdHa", "E1qsW4Ke", "lSoqW63dISof", "W7ddHSkJW5DQ", "A8ochmo+W7e", "W73dIG7cVmkx", "WPRdOL1mBW", "WO8Dy8koaG", "W5vyWPirmG", "W5jPWPOqmG", "WQNdQuldQtW", "WQ8cWRPWrG", "AI/cU8oVBW", "W79QfCk9W6m", "tCo+eSkLW7m", "WPfHWQG8zq", "W63dLg3cU8kb", "W6DMWO11ea", "tWn9W7RdUW", "drdcPxfm", "zq5hW4ZcOa", "WRjJW5rfWP0", "evlcPmkEW4m", "wCkFmCkXW7C", "W6xdQrpdJMS", "W5/dKmobWOXu", "WPyXxdVdOG", "W4pcGmobW4BcLq", "WPCuBSoQfa", "W7ddPmksWPuL", "Av0OWO4j", "WRnNWOC2WQa", "AcfUWOfq", "WPawWRLdFG", "WP4siHFdVq", "A8oPW6ZcQSkw", "W45YWQX2fW", "W5HsW6KsdG", "W5NdMCkHWOHb", "E00TW6T2", "uLGdW6hdRSkXoa", "W5FdNrRdTKy", "cfO4WOej", "W5bCoSkTW50", "WPe2W4hcSc4", "WQGsa1ldPq", "W6LGcmkCW4y", "W4pcGmobW5FcKG", "vthcJSolra", "aJNdSCokW5u", "W45XW6DpW64", "vdT8W4NcSq", "WPtdHmoEtCoW", "WP5zW4iYuG", "W7T/W4iZxW", "ehZdSCkQW7m", "jcRdVSk+W5y", "mf7cR8owcG", "lePLWPuL", "WQNdPSoIjvK", "W63dHCoNW51e", "W7pdPmkgWPuK", "WOWmxXhdSa", "WR5xduJcRq", "tSomAISQ", "wMldMCo0WO8Xq8o8FX3cS8k1WO/dRG", "xW/cUSkQ", "WPv2W67cRXS", "WRRcJSkehKO", "WP3cOZbTWR4", "W73dOSkbW6e6", "udW/W6H4WQWKW5NcJt0XWO0", "WOpdQCkfWRur", "WQ/cMfVcGe0", "jfCkW6lcRG", "W4Tcg8kCWQi", "W5ddT8knWPqW", "W5vGamoEASkpvSo8W7vSlMO", "W4JdQCoYW4H+", "E01WWPfQ", "WQOAsCoyAG", "WPHAW549Ca", "WOhdOCk6WOOP", "WRfrWQKbdG", "fLvNWPj9", "W7pdOmkJW5Wp", "W43dUCkBW7q8", "nZhdPCoAW6S", "WPRdJ8oKW7q+", "fe5hW6Om", "WOhdQCoUWPa", "WP5yostdSG", "WQWKvCoMiG", "WPyYxmkpW78iW5tcLmoq", "W5PkW7OSjW", "W67dMtNcVH0", "W6ZdOmoOkmop", "WOfXagZcRW", "W4hdH8oed8kp", "W4FcGXZcOKG", "WQddMCk5WQpdH8oPWRZcGqJdS1JcHq", "W7mEs8oymG", "W4KmfGtdHG", "WPSxDSoQfG", "WQeQpHBcVW", "daxcVmk4W60", "atRcPmo3jW", "WQddMCk2WQldHSoRW7ZdHZldGe/cMmkkvW", "WOpcRmotW5fM", "jmomCW4O", "W498W40Ij3RdP8k0WQRcNxRcHa", "W5nNW7KdaW", "WRTaW6OnyW", "lvSrW6hcRq", "W7LzW4OWAW", "WPVdVmoOdmoV", "dZHzWPWi", "W5vRWOaOhW", "hIeSWP1ufmopdrm", "AruDW73cJG", "WRaTW7bYtCoZW6JcJmkwWP1+xG", "WQdcVmopD8kn", "uwqIW5ZdOG", "qCoivsba", "W6tdU0ZcKSkE", "W5mJwmkLda", "W7JdQCoHdCof", "WQddLmolyCkv", "bJZdTSoyW5y", "WROvbtvX", "W6NcPXFcK04", "W7zFW7GpkW", "WOn5n0e", "W5hcQCokW7rvlSkxCN0TW7uW", "xSo2ya47", "E8omFXSQ", "W5eaW5C1W4RcRhddMrtcJutdLG", "dmoHp8kDW6K", "nHlcJ8oywa", "WOK3W6NcKdq", "W7W0W67cTH4", "hd3dN8oBW5m", "W6HqWPqbdG", "W5RdGeWzWPldGCk6wa", "nSoOW4xcOmkkWRre", "W58UyHFdKtOutCoJW7tdSCoEW7e", "n8onW5VdRCoa", "ECoFWOLJW5G", "rInGW4VcNW", "WRiLymoina", "i3XjWPyD", "WP98WQDjDq", "WRdcOgtcTCkTW7rcnq", "xuFdSSotWOW"];
  return _o = function() {
    return o;
  }, _o();
}
(function(o, g) {
  function t(I, a, r, Q, C) {
    return gA(C - 348, r);
  }
  const e = o();
  function A(I, a, r, Q, C) {
    return gA(I - 227, Q);
  }
  function i(I, a, r, Q, C) {
    return gA(Q - -95, I);
  }
  function n(I, a, r, Q, C) {
    return gA(C - -206, I);
  }
  for (; ; )
    try {
      if (-parseInt(i("j^&R", 70, 130, 184, 179)) / 1 * (-parseInt(i("[$yJ", 232, 24, 134, 28)) / 2) + -parseInt(n("kx!*", 133, 182, 54, 153)) / 3 * (-parseInt(t(750, 664, "&%bU", 722, 759)) / 4) + -parseInt(n("dB7(", 218, 314, 132, 210)) / 5 * (parseInt(n("S8ki", 189, 150, 128, 166)) / 6) + parseInt(i("f4vg", 244, 229, 324, 420)) / 7 * (parseInt(n("E(pB", 214, 129, 114, 104)) / 8) + -parseInt(i("IbAz", 369, 399, 332, 422)) / 9 * (-parseInt(t(697, 615, "FpO[", 759, 705)) / 10) + -parseInt(A(644, 529, 637, "f4vg", 569)) / 11 + -parseInt(A(531, 475, 427, "Bw36", 600)) / 12 === g) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(_o, 1 * -1154051 + -681927 + 2564656);
function ZQ() {
  const o = e(1222, "FpO[") + e(1219, "S8ki") + t(-399, -377, -480, -409, "KFIN") + t(-600, -463, -566, -664, "[$yJ") + a(1234, 1134, 1217, "KFIN") + n(476, 268, 378, "f4vg") + e(1151, "kx!*") + g(1098, 1072, "E)F*") + g(1079, 1116, "tgmA") + a(1321, 1288, 1369, "f4vg") + e(1168, "Nlk5") + a(1242, 1260, 1292, "tHx%") + g(1231, 1183, "Is1F") + e(1187, "Jncq") + n(486, 510, 446, "3rTu") + g(1286, 1216, "Y&Qu") + g(1081, 1008, "s[Wi") + t(-377, -441, -457, -534, "&%bU") + a(1158, 1201, 1114, "3rTu") + e(1274, "yW$R") + g(1123, 1107, "Q[Mz") + n(371, 305, 341, "K48w") + g(1083, 1043, "jP[v") + n(379, 533, 478, "kx!*") + n(413, 350, 352, "sY]P") + g(1060, 956, "S8ki") + a(1324, 1240, 1301, "dB7(") + n(254, 382, 294, "Nlk5") + a(1108, 1204, 1105, "1ntz") + g(1178, 1219, "xFwx") + t(-632, -612, -605, -605, "IbAz") + a(1269, 1200, 1123, "yW$R") + e(1237, "kx!*") + n(571, 522, 456, "E(pB") + g(1190, 1216, "j^&R") + e(1205, "KFIN") + t(-785, -654, -669, -634, "]Txx") + a(1041, 1142, 1119, "3rTu") + n(358, 289, 340, "f4vg") + g(1281, 1397, "xFwx") + a(1226, 1188, 1223, "oxr*") + e(1265, "j^&R") + a(1191, 1145, 1099, "f4vg") + g(1280, 1193, "Jncq") + n(347, 309, 376, "sY]P") + g(1135, 1252, "E(pB") + n(505, 395, 431, "Jncq") + g(1120, 1230, "Q[Mz") + n(439, 383, 394, "xFwx") + t(-522, -442, -560, -554, "KFIN") + t(-620, -649, -646, -679, ")n#l") + n(321, 472, 425, "Pt8S") + t(-499, -709, -615, -503, "@B7]") + n(382, 221, 302, "dB7(") + e(1129, "dB7(") + e(1327, "E)F*") + n(279, 340, 291, "H]dB") + a(1230, 1274, 1305, ")n#l") + t(-479, -442, -534, -488, "f4vg") + e(1158, "75(o") + t(-475, -525, -469, -439, "kx!*") + n(411, 509, 410, "SkQL") + t(-442, -412, -489, -595, "Pt8S") + e(1360, "M@y$") + t(-586, -623, -634, -731, "xFwx") + t(-395, -548, -450, -470, "SkQL") + n(371, 281, 380, "E(pB") + t(-720, -619, -642, -759, "SkQL") + n(470, 478, 438, "j62k") + n(389, 427, 358, "Jncq") + n(377, 541, 489, "Hu(F") + n(463, 244, 360, "7fg@") + n(269, 311, 318, "@B7]") + t(-557, -540, -476, -375, "[$yJ") + e(1150, "xFwx") + t(-389, -485, -502, -559, "oxr*") + n(491, 488, 470, "7fg@") + a(1194, 1280, 1292, "E)F*") + t(-733, -712, -648, -655, "s[Wi") + t(-695, -688, -644, -683, "SkQL") + e(1207, "Pt8S") + t(-546, -565, -536, -458, "[$yJ") + e(1160, "kx!*") + a(1127, 1102, 1134, "Q[Mz") + a(1193, 1256, 1310, "Hu(F") + n(498, 390, 441, "E(pB") + n(475, 310, 399, "Nlk5") + n(208, 209, 324, "dB7(") + n(374, 414, 488, "1ntz") + n(496, 428, 439, "SkQL") + n(485, 344, 448, "IbAz") + n(354, 450, 420, "]Txx") + a(1117, 1157, 1199, "G3g(") + a(1373, 1265, 1244, "yW$R") + n(318, 339, 364, "U%mo") + e(1206, "f@[3") + g(1064, 1055, "xFwx") + t(-407, -545, -468, -409, "Hu(F") + t(-362, -355, -473, -355, "Y&Qu") + t(-582, -514, -504, -497, "j62k") + t(-541, -676, -610, -501, "1ntz") + n(371, 372, 483, "E(pB") + e(1191, "Hu(F") + t(-661, -711, -668, -626, "U%mo") + g(1100, 1074, "s[Wi") + a(1051, 1143, 1084, "3rTu") + g(1245, 1287, "7$o]") + n(526, 401, 472, "75(o") + g(1223, 1205, "tgmA") + a(1227, 1230, 1290, "f4vg") + a(1220, 1216, 1259, "Is1F") + n(408, 372, 412, "Is1F") + n(369, 441, 382, "KFIN") + t(-542, -336, -444, -428, "M@y$") + e(1343, "f@[3") + t(-653, -495, -603, -639, "G3g(") + g(1078, 1058, "WEE&") + g(1128, 1011, "SkQL") + g(1288, 1278, "sY]P") + a(1235, 1163, 1079, "j^&R") + e(1162, "&%bU") + a(1113, 1126, 1200, "yW$R") + e(1131, "75(o") + a(992, 1080, 1155, "s[Wi") + n(284, 375, 373, "S8ki") + e(1252, "Pt8S") + t(-424, -561, -527, -414, "Pt8S") + t(-438, -387, -460, -411, "yW$R") + e(1344, "[$yJ") + n(251, 262, 333, "E(pB") + e(1302, "lO7*") + t(-610, -507, -578, -564, "E(pB") + a(1176, 1127, 1243, "Nlk5") + t(-626, -500, -539, -627, "Pt8S") + g(1267, 1358, "SkQL") + n(195, 244, 286, "yW$R") + e(1304, "Y&Qu") + n(294, 261, 326, "M@y$") + a(1254, 1245, 1277, "lO7*") + e(1142, "G3g(") + n(524, 564, 487, "Q[Mz") + n(273, 381, 280, "sY]P") + e(1356, "s[Wi") + a(1086, 1111, 1078, "t6RU") + a(1036, 1123, 1200, "KFIN") + a(1019, 1119, 1098, "FpO[") + g(1216, 1305, "Jncq") + n(455, 489, 372, "3rTu") + g(1106, 1036, "sY]P") + g(1137, 1098, "Nlk5") + n(445, 512, 421, "oxr*") + n(430, 494, 428, "s[Wi") + n(263, 398, 330, "FpO[") + g(1175, 1068, "[$yJ") + n(447, 428, 465, "&%bU") + a(1273, 1297, 1183, "G3g(") + e(1313, "sY]P") + n(242, 316, 301, "U%mo") + a(1301, 1252, 1278, "oxr*") + a(1278, 1255, 1212, "M@y$") + n(377, 290, 327, "kx!*") + e(1235, "xFwx") + a(1071, 1098, 993, "kx!*") + g(1292, 1372, "yW$R") + t(-550, -550, -631, -562, "E)F*") + t(-366, -398, -455, -337, "SkQL") + e(1240, "f@[3") + g(1246, 1166, "]Txx") + a(1326, 1213, 1294, ")n#l") + t(-510, -666, -587, -666, "Q[Mz") + a(1263, 1144, 1044, "t6RU") + n(331, 310, 317, "KFIN") + a(1245, 1194, 1246, "Bw36") + t(-608, -464, -576, -693, "sY]P") + g(1059, 966, "G3g(") + a(1281, 1172, 1140, "kx!*") + a(1160, 1253, 1343, "Nlk5") + a(1274, 1169, 1176, "xFwx") + n(338, 321, 288, "]Txx") + e(1167, "7$o]") + g(1181, 1146, "f@[3") + a(1119, 1121, 1010, "FpO[") + e(1281, "Hu(F") + n(434, 353, 433, "kx!*") + g(1283, 1345, "sY]P") + t(-459, -652, -537, -636, "K]02") + e(1238, "oxr*") + n(316, 400, 296, ")n#l") + n(400, 555, 501, "Is1F") + n(265, 163, 276, "FpO[") + a(1137, 1206, 1126, "kx!*") + a(1325, 1305, 1301, "Is1F") + t(-545, -650, -592, -612, "sY]P") + e(1257, "3rTu") + t(-450, -653, -546, -536, "E(pB") + e(1249, "lO7*") + a(1015, 1087, 1088, "3rTu") + g(1165, 1068, "sY]P") + g(1260, 1309, "Y&Qu") + n(410, 389, 444, "t6RU");
  function g(Q, C, x, c, E) {
    return gA(Q - 838, x);
  }
  function t(Q, C, x, c, E) {
    return gA(x - -901, E);
  }
  function e(Q, C, x, c, E) {
    return gA(Q - 904, C);
  }
  const A = window[e(1135, ")nbH")](o), i = window[a(1336, 1303, 1191, "yW$R")](A);
  function n(Q, C, x, c, E) {
    return gA(x - 52, c);
  }
  const I = jQ(i);
  function a(Q, C, x, c, E) {
    return gA(C - 850, c);
  }
  const r = {};
  return r[n(471, 467, 423, "f@[3")] = S0, r[g(1143, 1068, "lO7*")] = bB, window[e(1338, "WEE&") + "o"][e(1221, "Nlk5") + "e"][n(556, 536, 453, "xFwx") + g(1167, 1187, "fdko")](g(1252, 1265, "3rTu"), I, r, !0, [n(402, 327, 303, "Hu(F") + "pt"]);
}
function gA(o, g) {
  const t = _o();
  return gA = function(e, A) {
    e = e - (1368 + 10 * -96 + -11 * 17);
    let i = t[e];
    if (gA.wAslaU === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      gA.MxhSUP = Q, o = arguments, gA.wAslaU = !0;
    }
    const I = t[58 * -136 + -9940 + 4457 * 4], a = e + I, r = o[a];
    return r ? i = r : (gA.qdPmXa === void 0 && (gA.qdPmXa = !0), i = gA.MxhSUP(i, A), o[a] = i), i;
  }, gA(o, g);
}
async function VQ(o) {
  function g(i, n, I, a, r) {
    return gA(r - -198, a);
  }
  const t = await ZQ(), e = {};
  e[g(5, -21, 108, "s[Wi", 25)] = S0;
  function A(i, n, I, a, r) {
    return gA(I - -649, n);
  }
  return window[g(40, 89, 98, "S8ki", 113) + "o"][g(216, 179, 201, "xFwx", 190) + "e"][A(-251, "7$o]", -369) + "pt"](e, t, o);
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return xA(a - -140, r);
  }
  function e(a, r, Q, C, x) {
    return xA(a - -951, r);
  }
  function A(a, r, Q, C, x) {
    return xA(r - 614, a);
  }
  function i(a, r, Q, C, x) {
    return xA(x - 473, r);
  }
  const n = o();
  function I(a, r, Q, C, x) {
    return xA(r - -889, Q);
  }
  for (; ; )
    try {
      if (parseInt(I(-736, -730, "#z&z", -728, -720)) / 1 + parseInt(A("8tu%", 780, 777, 775, 771)) / 2 * (parseInt(i(650, "2%cz", 656, 656, 649)) / 3) + -parseInt(A("^C7)", 783, 778, 775, 791)) / 4 + -parseInt(e(-784, "54nu", -785, -775, -778)) / 5 + parseInt(A("^C7)", 772, 772, 780, 773)) / 6 * (parseInt(e(-777, "HPpg", -779, -785, -787)) / 7) + parseInt(A("^C7)", 775, 770, 776, 784)) / 8 + -parseInt(t(28, "eS&b", 21, 26, 26)) / 9 === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(Xo, -123613 + 334 * 311 + 161695);
function Xo() {
  const o = ["dmoXt8obB8kJisJcKZrMWOS", "WRnVut4PbmoOpd5EcmkEoq", "n0OUj1PyA8ogt27cNmocWRa", "WRCRWRtcNq8QW7bc", "twhcQs3cMMJcR8oupmo3rmkP", "zYGMWOBdI8oOEq", "s03dUG", "W6iLWOvgpSkmBw0EdmkSrq", "o8oUl8oKW6eaWPZdMSoXBW", "zKb7W5VcSCk9pK3cMCkNW4tdHKy", "m0ORlLrBa8oQufNcUmoN", "eHVcSvZdHeddNmoCxcWVWQy", "erJcUL/dHuJdUmo/qIqiWOC", "W43dHZeJhq", "vx7cUe3dKCksW4XeBbe", "W4XQufVcGSoJWQrPo1BcK1G", "W5yRW44KACoBkmoIW7RcH8k+Fa", "b8kgW5/cT8o8vM4", "WRldPmk3WP5dFwFcL8kEF2vfpq", "n0HqyJqHm8oo"];
  return Xo = function() {
    return o;
  }, Xo();
}
function xA(o, g) {
  const t = Xo();
  return xA = function(e, A) {
    e = e - (8139 + 359 * 17 + -14085);
    let i = t[e];
    if (xA.WfTlbs === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      xA.RsbOOO = Q, o = arguments, xA.WfTlbs = !0;
    }
    const I = t[4362 + 125 * -67 + 4013], a = e + I, r = o[a];
    return r ? i = r : (xA.RTUSTO === void 0 && (xA.RTUSTO = !0), i = xA.RsbOOO(i, A), o[a] = i), i;
  }, xA(o, g);
}
async function _Q(o) {
  const { iv: g, key: t, message: e } = await qQ(o);
  function A(a, r, Q, C, x) {
    return xA(Q - -195, C);
  }
  const i = await VQ(t), n = {};
  function I(a, r, Q, C, x) {
    return xA(Q - -942, C);
  }
  return n[A(-21, -37, -30, "ZLwy")] = i, n.iv = g, n[I(-765, -764, -770, "Nax3") + "ge"] = e, n;
}
(function(o, g) {
  function t(I, a, r, Q, C) {
    return BA(a - -282, Q);
  }
  function e(I, a, r, Q, C) {
    return BA(Q - 371, C);
  }
  function A(I, a, r, Q, C) {
    return BA(I - -336, a);
  }
  function i(I, a, r, Q, C) {
    return BA(Q - -617, C);
  }
  const n = o();
  for (; ; )
    try {
      if (parseInt(i(-150, -154, -150, -139, "d3m4")) / 1 * (-parseInt(i(-153, -152, -166, -165, ")gvI")) / 2) + parseInt(A(118, "X@MB", 128, 130, 121)) / 3 * (-parseInt(i(-149, -169, -157, -161, "H1UT")) / 4) + -parseInt(A(132, "c0lm", 141, 136, 145)) / 5 + -parseInt(t(196, 190, 186, "9xG9", 189)) / 6 * (parseInt(t(173, 185, 168, "6o@W", 171)) / 7) + -parseInt(e(821, 843, 818, 835, ")gvI")) / 8 + -parseInt(i(-137, -166, -168, -152, "PV6y")) / 9 * (parseInt(A(127, "X@MB", 140, 132, 116)) / 10) + parseInt(t(155, 171, 157, "HL[7", 186)) / 11 === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})(zo, 577167 + 76441 * -7 + -542 * -631);
function BA(o, g) {
  const t = zo();
  return BA = function(e, A) {
    e = e - (-2 * -4261 + 6817 + 1 * -14890);
    let i = t[e];
    if (BA.OKyCqd === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      BA.TbdAYM = Q, o = arguments, BA.OKyCqd = !0;
    }
    const I = t[-3578 * -1 + 4 * -858 + -146], a = e + I, r = o[a];
    return r ? i = r : (BA.BkuxIK === void 0 && (BA.BkuxIK = !0), i = BA.TbdAYM(i, A), o[a] = i), i;
  }, BA(o, g);
}
async function XQ(o) {
  const g = await window[i(997, 1002, 1006, "PCgq") + "o"][A(161, 172, 158, 170, "X@MB") + "e"][i(1009, 1002, 995, "d3m4") + "t"](A(152, 181, 167, 179, "LINw"), o);
  function t(n, I, a, r, Q) {
    return BA(I - -574, n);
  }
  function e(n, I, a, r, Q) {
    return BA(a - -128, r);
  }
  function A(n, I, a, r, Q) {
    return BA(a - -303, Q);
  }
  function i(n, I, a, r, Q) {
    return BA(a - 533, r);
  }
  return Array[i(1012, 1e3, 1002, "N0Ig")](new Uint8Array(g))[e(334, 336, 338, "PX(&")]((n) => n[t("dUhQ", -119) + A(158, 145, 146, 155, "hQ7v")](-691 * -6 + -7692 + 26 * 137)[A(146, 137, 147, 132, "]Z3&") + t("#xS%", -99)](2, "0"))[A(163, 185, 174, 173, "&8dI")]("");
}
function zo() {
  const o = ["fmo4W6zmW6W", "xqhcKfDKW6pcN8ofk1vIhW", "W6apW6e", "WQBdVSo9W6aMde7dSmolWPhcSHzu", "W4DfWO3dJa", "xutdKamKWP3cNa", "W7KeW5bxkSkue0/dJJaoW6C4qa", "kMBcOc0+W48v", "xHLyWRpdPSkQgdldS0ddGSkp", "W57cLmoX", "WQP3WPpdMmkP", "W6nZauiGW4pdGCoqWPtdM8kzW68", "ymoeyYpcQshcRhddJM/dUhi", "WQqSpYZcNZa5oSo9FWdcQWBcIa", "kIdcUWiaW6qJAG", "m3aog8k6", "W7hcSSkpECkwahrAsZOFjW", "xHSeW6VcGmoQdJy", "WOhcPdDdmCkfwYZdVSkpnLC", "D8oAh8kOFCoNzG", "gLjUjSo+WQdcJSoDW77cSCkMWOJdHa", "AgdcSdGM", "cf7dHqCJ", "iY3dOh1+WRCPCmkltSo9sG", "ymoeAcJcQsRdVeBdI3ldGw8S", "W5ddMCoWpSkOq1S", "F8kIWPa", "prjolI8AWRFdKW", "W4fqhCoIrvldNYJcJepcSmoeWOW", "W7DzW7VcSa", "v8oGoCkNoq", "gfe3umkcW7BdT8o9", "xbHDWRpdO8kUeGldVL7dKCkl"];
  return zo = function() {
    return o;
  }, zo();
}
function $o() {
  var o = ["W5ddHZTXW4hcSHK", "W69VW6VcKI1rWQ/dKfXjcv0", "W6VcUCklWP5uW7qHWRJcKCoo", "zSk+WONdNSokW7Xad3OeACokWOy", "qSo6usX+ldpdQsBdSq", "W5ZcS1SKWQddQs3dM3qlW7RdJq", "W7XmWQLgW4BcVJe", "WRddMHGHWQ3cHYi", "W5xcTf0HWQZdRHVdHxKsW7JdLq", "WQaAWPf6gmoAz8o3WOnWWQXHW4K", "W5eSW5/dJqvkw8ocfmkSDW", "b8ofvXbnWRuWW6hdShxdOmkGgq", "dapdMmkHE3tdKdzfWQBdQCoz", "W6GyyGLuWOnez08", "kCkUo8oRWPSxkgCXWPrF", "W70nWOf3W7BcTZvM", "rGddG8oPW7JcJCkPWRi", "W77cKmkyWRpcPSoAW5fQjmoa", "W5aJW5FdIqnlD8orm8k9DW", "W5ldGhOtWOxdIa4sW7a", "kSkRoSoOWP4uk1eqWRHu", "gCortSorb8k2aXRdQXq", "dapdK8kJCaBdUcfxWOddOq", "yIRdJeOSs8oyjSoZuGZcO3a", "WP8xrmolWQ/cRde", "W7nNudldTmk0WRuthSkJW7a"];
  return $o = function() {
    return o;
  }, $o();
}
(function(o, g) {
  function t(r, Q, C, x, c) {
    return yA(x - 696, Q);
  }
  function e(r, Q, C, x, c) {
    return yA(Q - -762, x);
  }
  function A(r, Q, C, x, c) {
    return yA(Q - -646, C);
  }
  function i(r, Q, C, x, c) {
    return yA(c - -655, x);
  }
  var n = o();
  function I(r, Q, C, x, c) {
    return yA(C - -357, r);
  }
  for (; ; )
    try {
      var a = -parseInt(A(-198, -186, "]z67", -175, -175)) / 1 + -parseInt(e(-309, -311, -324, "p0gk", -301)) / 2 * (parseInt(I("qaMR", 125, 115, 125, 109)) / 3) + -parseInt(i(-181, -180, -195, "riVR", -189)) / 4 * (-parseInt(i(-186, -200, -203, "lVA[", -193)) / 5) + parseInt(i(-192, -186, -191, "]f69", -199)) / 6 * (-parseInt(i(-210, -197, -202, "JFOA", -198)) / 7) + -parseInt(I("JHsV", 112, 106, 113, 104)) / 8 * (parseInt(I("4cQ$", 85, 96, 95, 83)) / 9) + -parseInt(t(1177, "p0gk", 1174, 1165, 1170)) / 10 * (parseInt(t(1149, "G%r&", 1132, 1145, 1151)) / 11) + parseInt(A(-185, -192, "29Ia", -179, -196)) / 12 * (parseInt(t(1163, "teap", 1165, 1167, 1176)) / 13);
      if (a === g) break;
      n.push(n.shift());
    } catch {
      n.push(n.shift());
    }
})($o, -803697 + -100061 * -15);
function yA(o, g) {
  var t = $o();
  return yA = function(e, A) {
    e = e - (-7024 + -1 * -2013 + -12 * -455);
    var i = t[e];
    if (yA.uKPEXq === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (var m = 0, R = c.length; m < R; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var c = [], E = 0, l, u = "";
        C = n(C);
        var s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      yA.SBYiIf = I, o = arguments, yA.uKPEXq = !0;
    }
    var a = t[0], r = e + a, Q = o[r];
    return Q ? i = Q : (yA.jSwfwy === void 0 && (yA.jSwfwy = !0), i = yA.SBYiIf(i, A), o[r] = i), i;
  }, yA(o, g);
}
async function ra(o) {
  const { Image: g } = et, t = await o.arrayBuffer(), e = new Uint8Array(t), A = {};
  A.bytes = e;
  const i = g.verify(A);
  if (i) throw Error(i);
  const n = {};
  return n.bytes = e, g.create(n);
}
async function zQ(o) {
  const { v4: { Metadata: g } } = et, t = { ...o };
  t.platform = et.Platform.WEB;
  const e = t, A = g.verify(e);
  if (A) throw Error(A);
  return g.create(e);
}
async function $Q(o) {
  const { Content: g } = et, { iv: t, key: e, message: A } = await _Q(o), i = { token: new Uint8Array(e), iv: t, schemaVersion: wB, bytes: new Uint8Array(A) }, n = g.verify(i);
  if (n) throw Error(n);
  const I = g.create(i);
  return g.encode(I).finish();
}
function As(o) {
  const { Blob: g } = et.v4, t = g.verify(o);
  if (t) throw Error(t);
  const e = g.create(o);
  return g.encode(e).finish();
}
var Mt, ag;
class Ca {
  constructor(g) {
    O(this, Mt, !0);
    O(this, ag, Date.now());
    w(this, "analytics");
    w(this, "samVersion");
    w(this, "sessionToken");
    w(this, "onDetectionCallback");
    w(this, "onCaptureCallback");
    w(this, "createProtoMessage");
    w(this, "fpsOfAllImages", new L0(-2039 * 2 + -4871 * -1 + -763));
    w(this, "cameraService");
    w(this, "imageProcessor");
    w(this, "instructionEscalation");
    w(this, "imageCropSettings");
    this.cameraService = g.cameraService, this.imageProcessor = g.imageProcessor, this.analytics = g.analytics, this.samVersion = g.samVersion, this.sessionToken = g.sessionToken, this.createProtoMessage = g.createProtoMessage, this.onDetectionCallback = g.onDetectionCallback, this.onCaptureCallback = g.onCaptureCallback, this.instructionEscalation = g.instructionEscalation, this.imageCropSettings = g.imageCropSettings;
  }
  async run() {
    for (; y(this, Mt); )
      await this.iterate();
    return this;
  }
  stop() {
    W(this, Mt, !1);
  }
  async trackCaptureProcess(g, t) {
    var n;
    const e = Date.now(), A = Uo(this.fpsOfAllImages), i = {};
    i.width = t.width, i.height = t.height, (n = this.analytics) == null || n.trackCaptureProcess({ detection: g, imageResolution: i, deviceName: await this.cameraService.getDeviceName(), averageFps: A, captureProcessDurationInMs: e - y(this, ag), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await mQ() });
  }
  onDetection(g, t) {
    this.onDetectionCallback({ ...g, avgFps: At(Uo(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: g, canvasImage: t, detection: e }) {
    const A = {};
    A.width = t.width, A.height = t.height;
    const i = A, n = await LB(t), I = await YB(t, this.imageCropSettings), a = await this.cameraService.getCameraProperties(), r = { ...a, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp(), croppedImage: await ra(I) }, Q = {};
    Q.sessionToken = this.sessionToken, Q.web = r;
    const C = Q, x = await this.createProtoMessage(n, C), c = {};
    c.detection = e, c.imageResolution = i;
    const E = {};
    E.image = n, E.data = c;
    const l = E;
    this.stop();
    const u = {};
    u.imageData = l, u.protoMessage = x, u.webMetadata = r, u.candidateSelectionImages = g, this.onCaptureCallback(u);
  }
  collectAndEscalate(g) {
    if (!this.instructionEscalation) return !1;
    const t = g;
    return this.instructionEscalation.collect(t), this.instructionEscalation.escalate(), this.instructionEscalation.isEscalated(t);
  }
  getDetectionEndTime(g) {
    return Date.now() - g;
  }
  getInvalidInstructions(g, t) {
    const e = [];
    return Array.from(g).forEach(([A, i]) => {
      !i && e.push(t[A]);
    }), e;
  }
  async sleep(g) {
    await Qi(Math.max(Vn.max - g, Vn.min));
  }
}
Mt = new WeakMap(), ag = new WeakMap();
class es extends Ca {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, instructionCodeMap: A, ...i }) {
    super(i);
    w(this, "candidateSelectionTime", 0);
    w(this, "candidatesSelectionFramesCount", 0);
    w(this, "isInCandidateSelection", !1);
    w(this, "lastImage", null);
    w(this, "bestImage", null);
    w(this, "candidateSelectionImages", []);
    w(this, "fallbackInstruction");
    w(this, "instructionCodeMap");
    w(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.instructionCodeMap = A, this.checkToInstructionCodeMap = t;
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
    const i = this.getDetectionDetails(A);
    this.onDetection(i, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const n = {};
    n.instructionCode = i.processedImage.instructionCode, n.isValid = e.isValid, n.image = t.image, n.detection = e.detection, this.lastImage = n, await this.sleep(i.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? U.fromCameraError(e) : U.fromError(e);
    }
  }
  saveBetterImage(t, e) {
    if (!(this.bestImage && e.isValid && this.isNewImageBetter(this.bestImage.detection, e.detection))) return;
    const i = {};
    i.image = t.image, i.detection = e.detection;
    const n = i;
    this.bestImage = n, this.candidateSelectionImages.push(n);
  }
  tryInitCandidatePhase(t, e) {
    var I;
    if (!(((I = this.lastImage) == null ? void 0 : I.isValid) && e.isValid)) return;
    const i = {};
    i.image = t.image, i.detection = e.detection;
    const n = i;
    this.isNewImageBetter(this.lastImage.detection, n.detection) ? this.bestImage = n : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, n), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === -4951 + -4 * -1633 + 17 * -93 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= vg.minFrames ? t > vg.minDuration : t > vg.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: e } = this.bestImage || {};
    if (e && t) this.trackCaptureProcess(t, e), await this.onCapture({ canvasImage: e, detection: t, candidateSelectionImages: this.candidateSelectionImages });
    else throw new U("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: e }) {
    const A = this.getDetectionEndTime(e.timestamp), i = At((-8278 * -1 + 8661 * -1 + 1383 * 1) / A);
    this.fpsOfAllImages.pushFixed(i);
    const n = {};
    n.width = e.image.width, n.height = e.image.height;
    const I = n, a = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), r = {};
    r.isNewDetectionValid = t.isValid, r.newInvalidInstruction = a[-2 * -3158 + -2 * 4834 + 3352];
    const Q = this.getInstructionCode(r), C = this.collectAndEscalate(Q), x = {};
    return x.detection = t.detection, x.instructionCode = Q, x.isEscalated = C, x.invalidValidators = a, x.isInCandidateSelection = this.isInCandidateSelection, { processedImage: x, detectionTime: A, fps: i, avgFps: At(Uo(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: e }) {
    var A;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (A = this.lastImage) != null && A.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : e ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, e) {
    return e.sharpness > t.sharpness;
  }
}
var ne, fe;
class ts extends Ca {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: e, ...A }) {
    super(A);
    O(this, ne);
    O(this, fe);
    w(this, "fallbackInstruction");
    w(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = e, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var e, A;
    return (e = t.detail) != null && e["instruction"] ? Object.values(Rg).includes((A = t.detail) == null ? void 0 : A["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    W(this, fe, (t) => {
      var e;
      this.isRequestCaptureEventValid(t) && W(this, ne, (e = t.detail) == null ? void 0 : e["instruction"]);
    }), document.addEventListener(Zn.REQUEST_CAPTURE, y(this, fe));
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
    return y(this, ne) ? y(this, ne) === Rg.FIRST_FRAME ? !0 : y(this, ne) === Rg.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (e) {
      throw e instanceof Error ? U.fromCameraError(e) : U.fromError(e);
    }
  }
  async onCaptureDone(t, e) {
    this.trackCaptureProcess(e, t);
    const A = {};
    A.canvasImage = t, A.detection = e, A.candidateSelectionImages = [], await this.onCapture(A), W(this, ne, void (3492 + -5659 * 1 + -11 * -197));
  }
  getDetectionDetails(t, e) {
    const A = this.getDetectionEndTime(t.timestamp), i = At((1 * 4542 + -3901 * 2 + 4260) / A);
    this.fpsOfAllImages.pushFixed(i);
    const n = {};
    n.width = t.image.width, n.height = t.image.height;
    const I = n, a = this.getInvalidInstructions(e.validationResult, this.checkToInstructionCodeMap), r = this.getInstructionCode(a[-472 + 208 * 47 + -9304]), Q = this.collectAndEscalate(r), C = {};
    return C.detection = e.detection, C.instructionCode = r, C.invalidValidators = a, C.isInCandidateSelection = !1, C.isEscalated = Q, { processedImage: C, detectionTime: A, fps: i, avgFps: At(Uo(this.fpsOfAllImages)), resolution: I };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), y(this, fe) && document.removeEventListener(Zn.REQUEST_CAPTURE, y(this, fe));
  }
}
ne = new WeakMap(), fe = new WeakMap();
function os({ captureMode: o, ...g }) {
  return o === w0.AUTO_CAPTURE ? new es(g) : new ts(g);
}
function gs({ cameraResolution: o, cameraService: g, customEvent: t }) {
  const { shouldCameraMirror: e } = nQ(t.CONTROL, g), A = {};
  A.cameraResolution = o, A.shouldCameraMirror = e, gQ(t.CAMERA_PROPS_CHANGED, A), X(() => () => {
    Nt.getInstance().restart();
  }, []);
  const i = {};
  return i.shouldCameraMirror = e, i;
}
function is(o) {
  X(() => (window.addEventListener("beforeunload", o), () => {
    window.removeEventListener("beforeunload", o);
  }), [o]);
}
function ns({ captureMode: o, checkToInstructionCodeMap: g, controller: t, createProtoMessage: e, customEvent: A, fallbackInstruction: i, imageCropSettings: n, instructionCodeMap: I, onCapture: a, onDetection: r, sessionToken: Q }) {
  is(() => {
    t && t.destroy();
  });
  const C = FA(!1), { appState: x, handleAppStateChange: c, isCameraReady: E } = Se(), { sunfish: l } = jt(), { analytics: u } = b0(), { cameraResolution: s, cameraService: h, onCameraResolutionChange: m, videoRef: R } = QQ(), M = {};
  M.cameraResolution = s, M.cameraService = h, M.customEvent = A;
  const { shouldCameraMirror: J } = gs(M), D = V0(void (-11818 + -311 * -38)), j = (h == null ? void 0 : h["isStreaming"]) && (t == null ? void 0 : t["isDetectorInitialized"]) && l && E, lA = Ae((Z) => {
    c(dA.WAITING), a(Z);
  }, [a, c]), $ = Ae((Z, at) => {
    m(Z.resolution), D.value = Z, r(Z, at);
  }, [r, D, m]);
  X(() => {
    !C.current && j && (C.current = !0, c(dA.RUNNING));
  }, [j, c]), X(() => {
    if (x !== dA.RUNNING || !j) return;
    if (!h || !t) throw new U("Cannot start detection");
    t.imageProcessor.reset();
    const Z = {};
    Z.captureMode = o, Z.analytics = u, Z.cameraService = h, Z.imageProcessor = t.imageProcessor, Z.fallbackInstruction = i, Z.instructionCodeMap = I, Z.checkToInstructionCodeMap = g, Z.sessionToken = Q, Z.samVersion = t.samVersion, Z.createProtoMessage = e, Z.onCaptureCallback = lA, Z.onDetectionCallback = $, Z.instructionEscalation = t.instructionEscalation, Z.imageCropSettings = n;
    const at = os(Z);
    return t.runDetectionLoop(at), () => {
      t.stopDetectionLoop();
    };
  }, [x, j, t, h, lA, $, Q, D, u, e, I, g, i, o, n]);
  const DA = {};
  return DA.videoRef = R, DA.cameraResolution = s, DA.detectionDetails = D, DA.shouldCameraMirror = J, DA;
}
const Is = () => typeof document < "u" && document.hasFocus();
function as(o = {}) {
  const g = FA(o), t = FA(Is()), [e, A] = fA(t.current);
  X(() => {
    g.current = o;
  }), X(() => {
    function n(Q) {
      t.current = Q, A(Q);
    }
    function I() {
      Promise.resolve().then(() => {
        var Q, C, x, c;
        !t.current && ((C = (Q = g.current).onFocus) == null || C.call(Q), (c = (x = g.current).onChange) == null || c.call(x, !0)), n(!0);
      });
    }
    function a() {
      Promise.resolve().then(() => {
        var Q, C, x, c;
        t.current && ((C = (Q = g.current).onBlur) == null || C.call(Q), (c = (x = g.current).onChange) == null || c.call(x, !1)), n(!1);
      });
    }
    function r() {
      document.visibilityState === "hidden" && a();
    }
    return window.addEventListener("focus", I), window.addEventListener("blur", a), window.document.addEventListener("visibilitychange", r), () => {
      window.removeEventListener("focus", I), window.removeEventListener("blur", a), window.document.removeEventListener("visibilitychange", r);
    };
  }, []);
  const i = {};
  return i.isWindowFocused = e, i;
}
const Ba = tt(null), gn = () => {
  const o = Be(Ba);
  if (!o)
    throw new Error("Missing provider for CameraOptionsContext");
  return o;
}, rs = ({
  assetsDirectoryPath: o,
  captureMode: g,
  onPhotoTaken: t,
  sessionToken: e,
  thresholds: A
}) => ({
  onPhotoTaken: t,
  captureMode: g ?? w0.AUTO_CAPTURE,
  assetsDirectoryPath: v0(o),
  sessionToken: e,
  thresholds: {
    confidenceThreshold: (A == null ? void 0 : A.confidenceThreshold) ?? EB,
    sharpnessThreshold: (A == null ? void 0 : A.sharpnessThreshold) ?? uB,
    brightnessLowThreshold: (A == null ? void 0 : A.brightnessLowThreshold) ?? hB,
    brightnessHighThreshold: (A == null ? void 0 : A.brightnessHighThreshold) ?? fB,
    hotspotsScoreThreshold: (A == null ? void 0 : A.hotspotsScoreThreshold) ?? pB,
    sizeSmallThreshold: (A == null ? void 0 : A.sizeSmallThreshold) ?? dB,
    outOfBoundsThreshold: (A == null ? void 0 : A.outOfBoundsThreshold) ?? lB
  }
}), Cs = ({
  cameraOptions: o,
  children: g
}) => {
  const t = pA(() => rs(o), [o]);
  return /* @__PURE__ */ p(Ba.Provider, { value: t, children: g });
};
function Bs({ cameraResolution: o, detectionDetails: g, isImageMirror: t }) {
  const { thresholds: e } = gn(), { redfin: A } = jt(), i = FA(null);
  if (X(() => {
    if (!(i != null && i.current))
      return;
    i.current.width = o.width, i.current.height = o.height, AB(i.current);
    const u = Wo(o), s = W0(
      o,
      e.outOfBoundsThreshold,
      u
    ), h = k0(o);
    g.value && (HB({
      canvas: i.current,
      polygon: g.value.processedImage.detection,
      color: "red"
    }), Lg(i.current, u, "lime"), Lg(i.current, s, "yellow"), Lg(i.current, h, "blue"));
  }, [o, g.value, e.outOfBoundsThreshold]), !g.value)
    return null;
  const {
    avgFps: n,
    detectionTime: I,
    fps: a,
    processedImage: { detection: r, instructionCode: Q, invalidValidators: C, isEscalated: x },
    resolution: c,
    samVersion: E
  } = g.value, l = {
    Confidence: r.confidence,
    "Smallest edge": r.smallestEdge,
    Brightness: r.brightness,
    Hotspots: r.hotspots,
    Sharpness: r.sharpness,
    "Detection time": I,
    FPS: a,
    "Avg FPS": n,
    Tier: A,
    Instruction: Q,
    Resolution: c,
    "Escalated instruction": x,
    "Component version": "7.1.2"
  };
  return E && (l["SAM version"] = E), C.length > 0 && (l["Invalid validators"] = C), /* @__PURE__ */ p(
    XC,
    {
      ref: i,
      cameraResolution: o,
      detectionDetails: l,
      isImageMirror: t
    }
  );
}
function Qs(o) {
  return /* @__PURE__ */ p("rect", { fill: "#000", ...o, rx: "2%" });
}
function ss(o, g) {
  const [t, e] = fA(!1), A = () => e((I) => !I), i = "" + t;
  gt(() => {
    function I() {
      if (!o.current) return;
      const C = new MutationObserver(() => {
        A();
      }), x = {};
      return x.childList = !0, x.subtree = !0, x.attributes = !0, C.observe(o.current, x), C;
    }
    function a() {
      var c;
      if (!((c = o.current) != null && c["parentElement"])) return;
      const C = new MutationObserver((E) => {
        E.find((u) => {
          for (const s of u.removedNodes)
            if (s !== (g == null ? void 0 : g.current) && s === o.current)
              return !0;
        }) && A(), E.forEach((u) => {
          u.addedNodes.forEach((s) => {
            var h;
            s !== (g == null ? void 0 : g.current) && ((h = s.parentElement) == null || h.removeChild(s));
          });
        });
      }), x = {};
      return x.childList = !0, C.observe(o.current.parentElement, x), C;
    }
    const r = I(), Q = a();
    return () => {
      Q == null || Q.disconnect(), r == null || r.disconnect();
    };
  });
  const n = {};
  return n.key = i, n;
}
const cs = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function xs({ cutOut: o, height: g, ignoreElement: t, width: e }) {
  const A = FA(null), { key: i } = ss(A, t);
  return /* @__PURE__ */ p("div", { ref: A, style: cs, children: /* @__PURE__ */ p("svg", { viewBox: `0 0 ${e} ${g}`, children: [
    /* @__PURE__ */ p("defs", { children: [
      /* @__PURE__ */ p("mask", { id: "placeholder", children: [
        /* @__PURE__ */ p("rect", { fill: "#fff", height: "100%", width: "100%" }),
        o
      ] }),
      /* @__PURE__ */ p(
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
            /* @__PURE__ */ p("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ p("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ p(
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
    /* @__PURE__ */ p("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, i);
}
function Es({ fullOverlay: o, ignoreElement: g, resolution: t }) {
  const e = rB(t), A = `${e.height * 100}%`, i = `${e.width * 100}%`, n = `${e.shiftX * 100}%`, I = `${e.shiftY * 100}%`;
  return /* @__PURE__ */ p(
    xs,
    {
      cutOut: o || /* @__PURE__ */ p(Qs, { height: A, width: i, x: n, y: I }),
      height: t.height,
      ignoreElement: g,
      width: t.width
    }
  );
}
function ds({ cameraResolution: o, children: g, detectionDetails: t, shouldMirror: e }) {
  const { redfin: A } = jt(), { appState: i, freemiumOverlayState: n } = Se(), I = FA(null), a = n !== Oo.HIDDEN && A !== xi.Higher && o, r = n === Oo.VISIBLE, Q = o && i === dA.RUNNING;
  return /* @__PURE__ */ p(SA, { children: [
    a && /* @__PURE__ */ p(
      Es,
      {
        fullOverlay: r,
        ignoreElement: I,
        resolution: o
      }
    ),
    g,
    Q && /* @__PURE__ */ p("div", { ref: I, children: /* @__PURE__ */ p(
      Bs,
      {
        cameraResolution: o,
        detectionDetails: t,
        isImageMirror: e
      }
    ) })
  ] });
}
const ls = (o, g) => {
  if (vB()) {
    const t = {};
    t.candidateSelectionImages = g;
    const e = t;
    Nt.getInstance().dispatchCustomEventOnChange(o, e);
  }
};
async function us(o, g) {
  const { DocumentContent: t } = et.v4, e = await ra(o), A = await zQ(g), i = {};
  i.image = e, i.metadata = A;
  const n = i, I = t.verify(n);
  if (I) throw Error(I);
  const a = t.create(n), r = {};
  return r.documentContent = a, As(r);
}
async function hs(o, g) {
  const t = await us(o, g);
  return $Q(t);
}
function fs({ controller: o }) {
  const { captureMode: g, onPhotoTaken: t, sessionToken: e } = gn(), A = Ae(({ candidateSelectionImages: I, imageData: a, protoMessage: r }) => {
    ls(Y0.DOCUMENT, I), t(a, r);
  }, [t]), i = Ae(({ processedImage: I }) => {
    const a = {};
    a.code = I.instructionCode, a.isEscalated = I.isEscalated, O0(HA.INSTRUCTION_CHANGED, a), o && tQ(HA.DETECTED_DOCUMENT_CHANGED, I.detection, o.imageProcessor.validationService.getThresholds().confidenceThreshold);
  }, [o]), n = {};
  return n.captureMode = g, n.controller = o, n.createProtoMessage = hs, n.onCapture = A, n.onDetection = i, n.sessionToken = e, n.customEvent = HA, n.fallbackInstruction = VA.DOCUMENT_NOT_PRESENT, n.instructionCodeMap = VA, n.checkToInstructionCodeMap = PC, n.imageCropSettings = mB, ns(n);
}
var WA;
class ps {
  constructor(g, t) {
    O(this, WA);
    this.instructionCodeCollector = g, this.config = t, W(this, WA, new Map(t.instructions.map((e) => [e, !1])));
  }
  get getInstructionCodes() {
    return y(this, WA);
  }
  canEscalate(g) {
    const t = this.instructionCodeCollector.get();
    return !this.instructionCodeCollector.hasMaxCapacity || !t.includes(g) ? !1 : t.filter((A) => A === g).length / t.length >= this.config.threshold;
  }
  collect(g) {
    this.instructionCodeCollector.pushWithTimestamp(g);
  }
  isEscalated(g) {
    return y(this, WA).get(g) ?? !1;
  }
  escalate() {
    for (const [g, t] of y(this, WA).entries())
      !t && this.canEscalate(g) && (this.config.onEscalate(g), y(this, WA).set(g, !0));
  }
  reset() {
    y(this, WA).forEach((g, t) => {
      y(this, WA).set(t, !1);
    }), this.instructionCodeCollector.clear();
  }
}
WA = new WeakMap();
var vt, Ie, Ke;
class ys extends Array {
  constructor(t) {
    super();
    O(this, vt, 81 + -56 * 132 + 7311);
    O(this, Ie, []);
    O(this, Ke, !1);
    W(this, vt, t);
  }
  clearAfterTimeout() {
    if (y(this, Ie).length === 8135 * 1 + -9064 + 929) return;
    const t = Date.now(), e = y(this, Ie).findLastIndex((A) => t - A > y(this, vt));
    e !== -1 && (W(this, Ke, !0), this.splice(1119 * 3 + -758 + -2599 * 1, e + (8425 + -4 * -1465 + 2 * -7142)), y(this, Ie).splice(-4550 + -910 * -5, e + (-8445 * -1 + -6073 * 1 + 1 * -2371)));
  }
  pushWithTimestamp(...t) {
    this.clearAfterTimeout();
    const e = Array(t.length).fill(Date.now());
    this.push(...t), y(this, Ie).push(...e);
  }
  get() {
    return this.clearAfterTimeout(), Array.from(this);
  }
  get hasMaxCapacity() {
    return y(this, Ke);
  }
  clear() {
    this.splice(-1 * 5641 + 5 * 188 + 4701), y(this, Ie).splice(2201 * -1 + 8203 + -6002), W(this, Ke, !1);
  }
}
vt = new WeakMap(), Ie = new WeakMap(), Ke = new WeakMap();
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Qa = Symbol("Comlink.proxy"), Ds = Symbol("Comlink.endpoint"), ws = Symbol("Comlink.releaseProxy"), Hg = Symbol("Comlink.finalizer"), wo = Symbol("Comlink.thrown"), sa = (o) => typeof o == "object" && o !== null || typeof o == "function", ms = {
  canHandle: (o) => sa(o) && o[Qa],
  serialize(o) {
    const { port1: g, port2: t } = new MessageChannel();
    return xa(o, g), [t, [t]];
  },
  deserialize(o) {
    return o.start(), da(o);
  }
}, bs = {
  canHandle: (o) => sa(o) && wo in o,
  serialize({ value: o }) {
    let g;
    return o instanceof Error ? g = {
      isError: !0,
      value: {
        message: o.message,
        name: o.name,
        stack: o.stack
      }
    } : g = { isError: !1, value: o }, [g, []];
  },
  deserialize(o) {
    throw o.isError ? Object.assign(new Error(o.value.message), o.value) : o.value;
  }
}, ca = /* @__PURE__ */ new Map([
  ["proxy", ms],
  ["throw", bs]
]);
function Gs(o, g) {
  for (const t of o)
    if (g === t || t === "*" || t instanceof RegExp && t.test(g))
      return !0;
  return !1;
}
function xa(o, g = globalThis, t = ["*"]) {
  g.addEventListener("message", function e(A) {
    if (!A || !A.data)
      return;
    if (!Gs(t, A.origin)) {
      console.warn(`Invalid origin '${A.origin}' for comlink proxy`);
      return;
    }
    const { id: i, type: n, path: I } = Object.assign({ path: [] }, A.data), a = (A.data.argumentList || []).map(le);
    let r;
    try {
      const Q = I.slice(0, -1).reduce((x, c) => x[c], o), C = I.reduce((x, c) => x[c], o);
      switch (n) {
        case "GET":
          r = C;
          break;
        case "SET":
          Q[I.slice(-1)[0]] = le(A.data.value), r = !0;
          break;
        case "APPLY":
          r = C.apply(Q, a);
          break;
        case "CONSTRUCT":
          {
            const x = new C(...a);
            r = Ms(x);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: x, port2: c } = new MessageChannel();
            xa(o, c), r = Rs(x, [x]);
          }
          break;
        case "RELEASE":
          r = void 0;
          break;
        default:
          return;
      }
    } catch (Q) {
      r = { value: Q, [wo]: 0 };
    }
    Promise.resolve(r).catch((Q) => ({ value: Q, [wo]: 0 })).then((Q) => {
      const [C, x] = tg(Q);
      g.postMessage(Object.assign(Object.assign({}, C), { id: i }), x), n === "RELEASE" && (g.removeEventListener("message", e), Ea(g), Hg in o && typeof o[Hg] == "function" && o[Hg]());
    }).catch((Q) => {
      const [C, x] = tg({
        value: new TypeError("Unserializable return value"),
        [wo]: 0
      });
      g.postMessage(Object.assign(Object.assign({}, C), { id: i }), x);
    });
  }), g.start && g.start();
}
function ks(o) {
  return o.constructor.name === "MessagePort";
}
function Ea(o) {
  ks(o) && o.close();
}
function da(o, g) {
  return bi(o, [], g);
}
function Io(o) {
  if (o)
    throw new Error("Proxy has been released and is not useable");
}
function la(o) {
  return We(o, {
    type: "RELEASE"
  }).then(() => {
    Ea(o);
  });
}
const Ag = /* @__PURE__ */ new WeakMap(), eg = "FinalizationRegistry" in globalThis && new FinalizationRegistry((o) => {
  const g = (Ag.get(o) || 0) - 1;
  Ag.set(o, g), g === 0 && la(o);
});
function Ns(o, g) {
  const t = (Ag.get(g) || 0) + 1;
  Ag.set(g, t), eg && eg.register(o, g, o);
}
function Ss(o) {
  eg && eg.unregister(o);
}
function bi(o, g = [], t = function() {
}) {
  let e = !1;
  const A = new Proxy(t, {
    get(i, n) {
      if (Io(e), n === ws)
        return () => {
          Ss(A), la(o), e = !0;
        };
      if (n === "then") {
        if (g.length === 0)
          return { then: () => A };
        const I = We(o, {
          type: "GET",
          path: g.map((a) => a.toString())
        }).then(le);
        return I.then.bind(I);
      }
      return bi(o, [...g, n]);
    },
    set(i, n, I) {
      Io(e);
      const [a, r] = tg(I);
      return We(o, {
        type: "SET",
        path: [...g, n].map((Q) => Q.toString()),
        value: a
      }, r).then(le);
    },
    apply(i, n, I) {
      Io(e);
      const a = g[g.length - 1];
      if (a === Ds)
        return We(o, {
          type: "ENDPOINT"
        }).then(le);
      if (a === "bind")
        return bi(o, g.slice(0, -1));
      const [r, Q] = EI(I);
      return We(o, {
        type: "APPLY",
        path: g.map((C) => C.toString()),
        argumentList: r
      }, Q).then(le);
    },
    construct(i, n) {
      Io(e);
      const [I, a] = EI(n);
      return We(o, {
        type: "CONSTRUCT",
        path: g.map((r) => r.toString()),
        argumentList: I
      }, a).then(le);
    }
  });
  return Ns(A, o), A;
}
function Fs(o) {
  return Array.prototype.concat.apply([], o);
}
function EI(o) {
  const g = o.map(tg);
  return [g.map((t) => t[0]), Fs(g.map((t) => t[1]))];
}
const ua = /* @__PURE__ */ new WeakMap();
function Rs(o, g) {
  return ua.set(o, g), o;
}
function Ms(o) {
  return Object.assign(o, { [Qa]: !0 });
}
function tg(o) {
  for (const [g, t] of ca)
    if (t.canHandle(o)) {
      const [e, A] = t.serialize(o);
      return [
        {
          type: "HANDLER",
          name: g,
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
    ua.get(o) || []
  ];
}
function le(o) {
  switch (o.type) {
    case "HANDLER":
      return ca.get(o.name).deserialize(o.value);
    case "RAW":
      return o.value;
  }
}
function We(o, g, t) {
  return new Promise((e) => {
    const A = vs();
    o.addEventListener("message", function i(n) {
      !n.data || !n.data.id || n.data.id !== A || (o.removeEventListener("message", i), e(n.data));
    }), o.start && o.start(), o.postMessage(Object.assign({ id: A }, g), t);
  });
}
function vs() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const mo = {};
mo.timeout = 4e3, mo.threshold = 0.7, mo.instructions = ["brightness_too_high", "brightness_too_low", "document_too_far", "sharpness_too_low"];
const Kg = mo, Ls = "SAM v1.44.6 for idcards";
class Js {
  constructor(g, t, e, A, i) {
    w(this, "isDetectorInitialized", !1);
    w(this, "samVersion", null);
    w(this, "detection");
    this.imageProcessor = g, this.assetsDirectoryPath = t, this.compatibleSamVersion = e, this.validationService = A, this.instructionEscalation = i;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(g) {
    await this.detector.initSamModule(location.href, g);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(g) {
    if (!g || !this.areVersionsCompatible(g))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new U("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = g;
  }
  runDetectionLoop(g) {
    this.detection && this.detection.stop(), this.detection = g, this.detection.run();
  }
  stopDetectionLoop() {
    var g, t;
    (g = this.detection) == null || g.stop(), (t = this.instructionEscalation) == null || t.reset(), this.imageProcessor.reset();
  }
  setThresholds(g) {
    this.imageProcessor.validationService.thresholds = g;
  }
  areVersionsCompatible(g) {
    return g === this.compatibleSamVersion;
  }
  destroy() {
    this.detector.terminateSamModule();
  }
  static getWorkerPath(g, t) {
    return "" + t.replace(F0, "") + g;
  }
}
class Us {
  constructor() {
    w(this, "imageProcessor");
    w(this, "assetsDirectoryPath");
    w(this, "instructionEscalation");
    w(this, "compatibleSamVersion");
    w(this, "validationService");
    w(this, "detector");
  }
  setImageProcessor(g) {
    return this.imageProcessor = g, this;
  }
  setAssetsDirectoryPath(g) {
    return this.assetsDirectoryPath = g, this;
  }
  setCompatibleSamVersion(g) {
    return this.compatibleSamVersion = g, this;
  }
  setInstructionEscalation(g) {
    return this.instructionEscalation = g, this;
  }
  setValidationService(g) {
    return this.validationService = g, this;
  }
  setDetector(g) {
    return this.detector = g, this;
  }
  validateDependencies() {
    if (!this.imageProcessor) throw new U("ImageProcessor is required");
    if (!this.assetsDirectoryPath) throw new U("AssetsDirectoryPath is required");
    if (!this.detector) throw new U("Detector is required");
    if (!this.compatibleSamVersion) throw new U("CompatibleSamVersion is required");
    if (!this.validationService) throw new U("ValidationService is required");
  }
  reset() {
    return this.imageProcessor = void (-7032 + -95 * -91 + -1613 * 1), this.assetsDirectoryPath = void (441 + 1 * -2551 + 422 * 5), this.instructionEscalation = void (-703 * -14 + 6547 + 9 * -1821), this.compatibleSamVersion = void (-1 * -7762 + -8458 + 6 * 116), this.detector = void (39 * 125 + -6700 + 1825), this.validationService = void (1829 * -2 + 81 * -67 + 9085), this;
  }
}
class Ws {
  constructor() {
    w(this, "detectionRecord", []);
    w(this, "imagesWithTimestampForDuplicateDetection", new L0(DB));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: g, timestamp: t }) {
    const e = g.length / kB, A = e / (17175 + -13 * 1321), i = g.length / (4169 + -4167 * 1), n = await XQ(g.slice(i - A, i + A)), I = {};
    I.imageHash = n, I.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(I);
  }
  optimizeImageBeforeDetection(g) {
    return { data: UB(g), resolution: { width: g.width, height: g.height } };
  }
  async processDetectedObject({ detectedObject: g, image: t, imageData: e, timestamp: A }) {
    const i = SB(g), n = this.validationService.validateDetectedObject(i, t);
    if (n.result.get("isPresent")) {
      const I = {};
      I.image = e, I.timestamp = A, this.collectImagesForDuplicateDetection(I);
    }
    return this.detectionRecord.push(g), { detection: i, validationResult: n.result, isValid: n.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class Ys {
  constructor() {
    w(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new U("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
class ha extends Js {
  constructor(t, e, A, i, n, I) {
    super(A, i, n, e, I);
    w(this, "detector");
    this.detector = t;
  }
  stopDetectionLoop() {
    var e;
    super.stopDetectionLoop();
    var t = {};
    t.code = (e = this.detection) == null ? void 0 : e["fallbackInstruction"], O0(HA.INSTRUCTION_CHANGED, t, gB);
  }
}
class Os extends Us {
  build() {
    return this.validateDependencies(), new ha(this.detector, this.validationService, this.imageProcessor, this.assetsDirectoryPath, this.compatibleSamVersion, this.instructionEscalation);
  }
}
const Hs = "/dot-assets/document/dot-BgYT9b0k.js";
class Ks extends Ws {
  constructor(t, e) {
    super();
    w(this, "className", "DocumentImageProcessor");
    w(this, "detector");
    w(this, "validationService");
    this.detector = t, this.validationService = e;
  }
  optimizeImageBeforeDetection(t) {
    const e = Wo(t), A = U0(t, e);
    return super.optimizeImageBeforeDetection(A);
  }
  async process({ image: t, timestamp: e }) {
    const A = this.optimizeImageBeforeDetection(t);
    let i = await this.detector.detect(A.data, A.resolution);
    i = PB(i, Wo(t)), i = qB(i, A.resolution);
    const n = {};
    return n.image = t, n.timestamp = e, n.imageData = A.data, n.detectedObject = i, this.processDetectedObject(n);
  }
}
var Te, pe, ye;
class Ts {
  constructor(g) {
    O(this, Te);
    O(this, pe);
    O(this, ye);
    W(this, Te, g), W(this, pe, /* @__PURE__ */ new Map());
  }
  validate() {
    y(this, Te).forEach((g) => {
      y(this, pe).set(g.name, g.evaluate());
    }), W(this, ye, void (-2847 + -219 * -13));
  }
  isValid() {
    return y(this, ye) === void (-3 * -2227 + -353 * -27 + -16212) && W(this, ye, Array.from(y(this, pe).values()).every((g) => g)), y(this, ye);
  }
  get result() {
    return y(this, pe);
  }
  get validators() {
    return y(this, Te);
  }
}
Te = new WeakMap(), pe = new WeakMap(), ye = new WeakMap();
var Lt, De;
class Re {
  constructor(g, t) {
    O(this, Lt);
    O(this, De);
    W(this, Lt, g), W(this, De, t);
  }
  get threshold() {
    return y(this, De);
  }
  get name() {
    return y(this, Lt);
  }
  isValueBelowThreshold(g) {
    return g < y(this, De);
  }
  isValueAboveThreshold(g) {
    return g > y(this, De);
  }
}
Lt = new WeakMap(), De = new WeakMap();
const Ps = "isNotDim";
var Jt;
class qs extends Re {
  constructor(t, e) {
    super(Ps, t);
    O(this, Jt);
    W(this, Jt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Jt));
  }
}
Jt = new WeakMap();
const js = "isNotSmall";
var Ut;
class Zs extends Re {
  constructor(t, e) {
    super(js, t);
    O(this, Ut);
    W(this, Ut, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Ut));
  }
}
Ut = new WeakMap();
const Vs = "isNotBright";
var Wt;
class _s extends Re {
  constructor(t, e) {
    super(Vs, t);
    O(this, Wt);
    W(this, Wt, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Wt));
  }
}
Wt = new WeakMap();
const Xs = "isPresent";
var Yt;
class zs extends Re {
  constructor(t, e) {
    super(Xs, t);
    O(this, Yt);
    W(this, Yt, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Yt));
  }
}
Yt = new WeakMap();
const $s = "isSharp";
var Ot;
class Ac extends Re {
  constructor(t, e) {
    super($s, t);
    O(this, Ot);
    W(this, Ot, e);
  }
  evaluate() {
    return this.isValueAboveThreshold(y(this, Ot));
  }
}
Ot = new WeakMap();
var Ht;
class ec extends Re {
  constructor(t, e) {
    super("noHotspots", t);
    O(this, Ht);
    W(this, Ht, e);
  }
  evaluate() {
    return this.isValueBelowThreshold(y(this, Ht));
  }
}
Ht = new WeakMap();
const tc = "isNotOutOfBounds";
var Kt, Pe;
class oc extends Re {
  constructor(t, e, A) {
    super(tc, t);
    O(this, Kt);
    O(this, Pe);
    W(this, Kt, e), W(this, Pe, A);
  }
  evaluate() {
    const t = W0(y(this, Pe), this.threshold, Wo(y(this, Pe))), { bottomLeft: e, bottomRight: A, topLeft: i, topRight: n } = y(this, Kt), I = {};
    return I.topLeft = i, I.topRight = n, I.bottomLeft = e, I.bottomRight = A, TB(I, t);
  }
}
Kt = new WeakMap(), Pe = new WeakMap();
class gc {
  static getDocumentValidationInstance(g, t, e) {
    return new Ts([new zs(g.confidenceThreshold, t.confidence), new Ac(g.sharpnessThreshold, t.sharpness), new qs(g.brightnessLowThreshold, t.brightness), new _s(g.brightnessHighThreshold, t.brightness), new ec(g.hotspotsScoreThreshold, t.hotspots), new oc(g.outOfBoundsThreshold, t, e), new Zs(g.sizeSmallThreshold, t.smallestEdge)]);
  }
}
class ic extends Ys {
  constructor() {
    super(...arguments);
    w(this, "className", "DocumentValidationService");
  }
  validateDetectedObject(t, e) {
    const A = gc.getDocumentValidationInstance(this.getThresholds(), t, e);
    return A.validate(), A;
  }
}
const nc = () => {
  const { handleError: o } = Se(), { assetsDirectoryPath: g, thresholds: t } = gn(), { analytics: e } = b0(), [A, i] = fA();
  X(() => {
    (async () => {
      const a = ha.getWorkerPath(Hs, g), r = {};
      r.type = "module";
      const Q = new Worker(new URL(a, import.meta.url), r), C = da(Q), x = await new C(), c = new ic(), E = new Ks(x, c), l = new ps(new ys(Kg.timeout), { threshold: Kg.threshold, instructions: Kg.instructions, onEscalate: (s) => {
        oQ(HA.INSTRUCTION_ESCALATED, s), e == null || e.trackEscalated(s);
      } }), u = new Os().setDetector(x).setValidationService(c).setImageProcessor(E).setAssetsDirectoryPath(g).setCompatibleSamVersion(Ls).setInstructionEscalation(l).build();
      try {
        await u.init(), i(u);
      } catch (s) {
        if (s instanceof Error) {
          o(U.fromError(s));
          return;
        }
      }
    })();
  }, [o, g, e]), X(() => {
    A && A.setThresholds(t);
  }, [A, t]);
  const n = {};
  return n.controller = A, n;
}, Ic = () => {
  const { isCameraReady: o } = Se(), { sunfish: g } = jt(), { controller: t } = nc(), { cameraResolution: e, detectionDetails: A, shouldCameraMirror: i, videoRef: n } = fs({ controller: t });
  return /* @__PURE__ */ p(SA, { children: /* @__PURE__ */ p(
    ds,
    {
      cameraResolution: e,
      detectionDetails: A,
      shouldMirror: i,
      children: /* @__PURE__ */ p(
        WC,
        {
          ref: n,
          $isImageMirror: i,
          $isVisible: g && o,
          autoPlay: !0,
          id: iB,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}, ac = (o) => {
  const { handleAppStateChange: g, setIsCameraReady: t } = Se();
  return as({
    onBlur: () => {
      t(!1), g(dA.LOADING);
    },
    onFocus: async () => {
      t(!0), g(dA.RUNNING);
    }
  }), /* @__PURE__ */ p(Cs, { cameraOptions: o, children: /* @__PURE__ */ p(Ic, {}) });
};
function rc({ children: o, ...g }) {
  const t = g.cameraFacing ?? Vi() ? Ro.REAR : Ro.FRONT;
  return /* @__PURE__ */ p(dQ, { cameraFacing: t, children: o });
}
function Cc({ initAppState: o, onError: g }) {
  const [t, e] = fA(o), [A, i] = fA(), [n, I] = fA(!1), a = FA(g);
  X(() => {
    a.current = g;
  }, [g]);
  const r = {};
  return r.appState = t, r.setAppState = e, r.error = A, r.setError = i, r.isCameraReady = n, r.setIsCameraReady = I, r.onErrorRef = a, r;
}
function Bc({ onError: o }) {
  const { appState: g, error: t, isCameraReady: e, onErrorRef: A, setAppState: i, setError: n, setIsCameraReady: I } = Cc({
    initAppState: dA.LOADING,
    onError: o
  }), a = wQ(g), r = Ae(
    (C) => {
      AI(HA.STATE_CHANGED, { appState: dA.ERROR, error: C }), I(!1), A.current(C), n(C), i(dA.ERROR);
    },
    [A, n, i, I]
  ), Q = Ae(
    (C) => {
      AI(HA.STATE_CHANGED, { appState: C }), i(C);
    },
    [i]
  );
  return {
    appState: g,
    freemiumOverlayState: a,
    isCameraReady: e,
    setIsCameraReady: I,
    handleAppStateChange: Q,
    handleError: r,
    error: t
  };
}
var nn = ((o) => (o.AUTO_CAPTURE = "auto-capture", o.ESCALATION_TRIGGER = "escalation-trigger", o.LONG_CAPTURE_SMILE = "long-capture-smile", o))(nn || {});
class Qc {
  constructor() {
    w(this, "appKey", "");
    w(this, "deviceId", "");
  }
  async countlyFetch(g) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const e = {};
    e.method = "GET", e.headers = t;
    const A = e, i = "https://innovatrics.count.ly/i?", n = {};
    n.app_key = this.appKey, n.device_id = this.deviceId;
    const I = go(n);
    try {
      await fetch("" + i + I + "&" + g, A);
    } catch (a) {
      console.error("Countly Error", a);
    }
  }
  async init(g, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = g;
    const e = { _app_version: R0() }, A = { organization: M0(window.location.href) }, i = go({ begin_session: "1", metrics: JSON.stringify(e), user_details: JSON.stringify(A) });
    await this.countlyFetch(i);
  }
  async endSession() {
    const g = {};
    g.end_session = "1";
    const t = go(g);
    await this.countlyFetch(t);
  }
  async sendEvent(g, t, e) {
    const A = {};
    A.key = g, A.count = 1, A.dur = e, A.segmentation = t;
    const i = [A], n = go({ events: JSON.stringify(i) });
    await this.countlyFetch(n);
  }
  async sendAutoCaptureEvent(g, t) {
    await this.sendEvent(nn.AUTO_CAPTURE, g, t);
  }
}
const ct = new Qc();
class sc {
  constructor() {
    w(this, "countly", ct);
  }
  createSegmentation(g) {
    return { appVersion: R0(), ...g };
  }
  init(g) {
    if (FB()) return;
    const t = hQ();
    ct.init(t, g);
  }
  endSession() {
    ct.endSession();
  }
  walleye(g, t) {
    const e = {};
    e.nocturne = g, e.customer = t;
    const A = this.createSegmentation(e);
    ct.sendAutoCaptureEvent(A);
  }
  trackEscalated(g) {
    const t = {};
    t.instructionCode = g;
    const e = this.createSegmentation(t);
    ct.sendEvent(nn.ESCALATION_TRIGGER, e);
  }
}
class cc extends sc {
  trackCaptureProcess({ averageFps: g, captureProcessDurationInMs: t, detection: e, deviceName: A, facingMode: i, imageResolution: n, instructionSet: I }) {
    if (!e) return;
    const a = yQ(t), r = this.createSegmentation({ hotspots: st(e.hotspots), brightness: st(e.brightness), confidence: st(e.confidence), sharpness: st(e.sharpness), smallestEdge: st(e.smallestEdge), camera: fQ(A, i), imageResolution: n.width + "x" + n.height, averageFps: DQ(g), captureTime: pQ(a), instructionSet: I });
    this.countly.sendAutoCaptureEvent(r, a);
  }
}
const xc = new cc();
let S;
const XA = new Array(-12499 + -183 * -69).fill(void 0);
XA.push(void 0, null, !0, !1);
function Gi(o) {
  return XA[o];
}
let OA = 1362 + -3191 * 3 + 8211, ft = null;
function bo() {
  return (ft === null || ft.byteLength === 7276 + -31 * -141 + -11647) && (ft = new Uint8Array(S.memory.buffer)), ft;
}
const Go = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, Ec = typeof Go.encodeInto == "function" ? function(o, g) {
  return Go.encodeInto(o, g);
} : function(o, g) {
  const t = Go.encode(o);
  g.set(t);
  const e = {};
  return e.read = o.length, e.written = t.length, e;
};
function Ft(o, g, t) {
  if (t === void 0) {
    const I = Go.encode(o), a = g(I.length, -2 * 4043 + -8085 + 13 * 1244) >>> -6472 + -9914 * 1 + 2731 * 6;
    return bo().subarray(a, a + I.length).set(I), OA = I.length, a;
  }
  let e = o.length, A = g(e, -401 + -6 * -67) >>> 13 * -558 + 109 * -41 + 11723;
  const i = bo();
  let n = 0;
  for (; n < e; n++) {
    const I = o.charCodeAt(n);
    if (I > -7 * -1075 + -3393 + -4005) break;
    i[A + n] = I;
  }
  if (n !== e) {
    n !== -1 * 2337 + -3289 + 5626 && (o = o.slice(n)), A = t(A, e, e = n + o.length * (1174 + -23 * -317 + -2 * 4231), 543 * 3 + 7822 * 1 + 105 * -90) >>> 6312 + -2410 * 1 + -1 * 3902;
    const I = bo().subarray(A + n, A + e), a = Ec(o, I);
    n += a.written, A = t(A, e, n, -17835 + 637 * 28) >>> -9227 * 1 + -727 + 9954;
  }
  return OA = n, A;
}
function fa(o) {
  return o == null;
}
let pt = null;
function UA() {
  return (pt === null || pt.byteLength === -14663 + 473 * 31) && (pt = new Int32Array(S.memory.buffer)), pt;
}
let Gt = XA.length;
function dc(o) {
  o < 3227 * 3 + -3667 * -1 + -13216 || (XA[o] = Gt, Gt = o);
}
function pa(o) {
  const g = Gi(o);
  return dc(o), g;
}
const ki = {};
ki.ignoreBOM = !0, ki.fatal = !0;
const ya = typeof TextDecoder < "u" ? new TextDecoder("utf-8", ki) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && ya.decode();
function og(o, g) {
  return o = o >>> 1166 * 2 + 2148 + -4480, ya.decode(bo().subarray(o, o + g));
}
function Ni(o) {
  Gt === XA.length && XA.push(XA.length + (1308 * 6 + 3454 + -11301));
  const g = Gt;
  return Gt = XA[g], XA[g] = o, g;
}
let yt = null;
function Da() {
  return (yt === null || yt.byteLength === -776 * -4 + -1 * -2531 + -5 * 1127) && (yt = new Uint32Array(S.memory.buffer)), yt;
}
function dI(o, g) {
  const t = g(o.length * 4, 4) >>> 0, e = Da();
  for (let A = 162 * -39 + 1 * -628 + -6946 * -1; A < o.length; A++)
    e[t / (1886 * -3 + -2929 * 1 + 8591) + A] = Ni(o[A]);
  return OA = o.length, t;
}
function lI(o, g) {
  o = o >>> 557 * -1 + -4682 + 169 * 31;
  const t = Da(), e = t.subarray(o / (5 * 1996 + -4899 + -5077 * 1), o / (18 * -509 + -1 * 9563 + 18729) + g), A = [];
  for (let i = -2033 + -2033 * -1; i < e.length; i++)
    A.push(pa(e[i]));
  return A;
}
function lc(o, g) {
  const t = Ft(o, S.__wbindgen_malloc, S.__wbindgen_realloc), e = OA, A = Ft(g, S.__wbindgen_malloc, S.__wbindgen_realloc), i = OA, n = S.is_mobile_supported(t, e, A, i);
  return In.__wrap(n);
}
const Si = {};
Si.register = () => {
}, Si.unregister = () => {
};
const uI = typeof FinalizationRegistry > "u" ? Si : new FinalizationRegistry((o) => S.__wbg_licensevalidationresult_free(o >>> -4237 + 1 * 4237));
class In {
  static __wrap(g) {
    g = g >>> -13431 + 1 * 13431;
    const t = Object.create(In.prototype);
    return t.__wbg_ptr = g, uI.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const g = this.__wbg_ptr;
    return this.__wbg_ptr = -4 * -1667 + -3419 + -3249, uI.unregister(this), g;
  }
  free() {
    const g = this.__destroy_into_raw();
    S.__wbg_licensevalidationresult_free(g);
  }
  constructor(g, t, e, A, i) {
    var n = fa(t) ? 0 : Ft(t, S.__wbindgen_malloc, S.__wbindgen_realloc), I = OA;
    const a = dI(e, S.__wbindgen_malloc), r = OA, Q = dI(A, S.__wbindgen_malloc), C = OA, x = Ft(i, S.__wbindgen_malloc, S.__wbindgen_realloc), c = OA, E = S.licensevalidationresult_new(g, n, I, a, r, Q, C, x, c);
    return this.__wbg_ptr = E >>> 6909 + -7949 * -1 + -14858 * 1, this;
  }
  get is_valid() {
    return S.licensevalidationresult_is_valid(this.__wbg_ptr) !== 0;
  }
  get features_json() {
    try {
      const e = S.__wbindgen_add_to_stack_pointer(-16);
      S.licensevalidationresult_features_json(e, this.__wbg_ptr);
      var g = UA()[e / (4432 + 1 * -2623 + -1805) + (2 * 2769 + 3395 + -8933)], t = UA()[e / (-8022 * 1 + 2900 + 5126) + (-5435 * -1 + -166 * 23 + -1616)];
      let A;
      return g !== -1 * 7285 + 1982 + 5303 && (A = og(g, t).slice(), S.__wbindgen_free(g, t * (4913 + 261 * -9 + -1 * 2563), -2306 * -2 + -1 * -3438 + -8049)), A;
    } finally {
      S.__wbindgen_add_to_stack_pointer(-3 * -2102 + -2121 + -379 * 11);
    }
  }
  get errors() {
    try {
      const A = S.__wbindgen_add_to_stack_pointer(-16);
      S.licensevalidationresult_errors(A, this.__wbg_ptr);
      var g = UA()[A / 4 + (7111 + -13 * 547)], t = UA()[A / (-3 * -1261 + -4367 + -147 * -4) + (4053 + 61 * 1 + -4113)], e = lI(g, t).slice();
      return S.__wbindgen_free(g, t * (-517 * -18 + 1 * -5761 + 1 * -3541), 7761 + 2 * -229 + -811 * 9), e;
    } finally {
      S.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get warnings() {
    try {
      const A = S.__wbindgen_add_to_stack_pointer(-16);
      S.licensevalidationresult_warnings(A, this.__wbg_ptr);
      var g = UA()[A / (1276 * 1 + -7140 + 5868) + (7003 + -1 * 6449 + -277 * 2)], t = UA()[A / (-5916 + -1 * 2197 + 8117) + (-4658 + -1 * 5321 + 9980)], e = lI(g, t).slice();
      return S.__wbindgen_free(g, t * (1167 + -16 * -63 + -2171), -3 * -1288 + 95 * 87 + 1 * -12125), e;
    } finally {
      S.__wbindgen_add_to_stack_pointer(1 * 3654 + -994 + -2644);
    }
  }
  get customer() {
    let g, t;
    try {
      const i = S.__wbindgen_add_to_stack_pointer(-16);
      S.licensevalidationresult_customer(i, this.__wbg_ptr);
      var e = UA()[i / (4718 + -4879 * 1 + -55 * -3) + (1 * 1099 + -1 * -5981 + -295 * 24)], A = UA()[i / (9 * -123 + 8663 + -7552) + (-5830 + -1388 * -1 + 1481 * 3)];
      return g = e, t = A, og(e, A);
    } finally {
      S.__wbindgen_add_to_stack_pointer(2 * -1359 + 709 * -1 + -3443 * -1), S.__wbindgen_free(g, t, 4433 + 3047 * -2 + -2 * -831);
    }
  }
}
async function uc(o, g) {
  if (typeof Response == "function" && o instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(o, g);
    } catch (e) {
      if (o.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
      else throw e;
    }
    const t = await o.arrayBuffer();
    return await WebAssembly.instantiate(t, g);
  } else {
    const t = await WebAssembly.instantiate(o, g);
    if (t instanceof WebAssembly.Instance) {
      const e = {};
      return e.instance = t, e.module = o, e;
    } else return t;
  }
}
function hc() {
  const o = {};
  return o.wbg = {}, o.wbg.__wbindgen_string_get = function(g, t) {
    const e = Gi(t), A = typeof e == "string" ? e : void 0;
    var i = fa(A) ? 0 : Ft(A, S.__wbindgen_malloc, S.__wbindgen_realloc), n = OA;
    UA()[g / 4 + (165 * -25 + 294 * 7 + 2068)] = n, UA()[g / (9 * -747 + 1181 * 7 + -1540) + (-3 * -2693 + -3 * -2359 + -15156)] = i;
  }, o.wbg.__wbindgen_object_drop_ref = function(g) {
    pa(g);
  }, o.wbg.__wbindgen_string_new = function(g, t) {
    const e = og(g, t);
    return Ni(e);
  }, o.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return Ni(/* @__PURE__ */ new Date());
  }, o.wbg.__wbg_getTime_2bc4375165f02d15 = function(g) {
    return Gi(g).getTime();
  }, o.wbg.__wbindgen_throw = function(g, t) {
    throw new Error(og(g, t));
  }, o;
}
function fc(o, g) {
  return S = o.exports, wa.__wbindgen_wasm_module = g, pt = null, yt = null, ft = null, S;
}
async function wa(o) {
  if (S !== void 0) return S;
  typeof o > "u" && (o = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhghAwJAAkAgACAAKAIMIgFGBEAgAEEUQRAgAEEUaiIBKAIAIgQbaigCACICDQFBACEBDAILIAAoAggiAiABNgIMIAEgAjYCCAwBCyABIABBEGogBBshBANAIAQhBSACIgFBFGoiAiABQRBqIAIoAgAiAhshBCABQRRBECACG2ooAgAiAg0ACyAFQQA2AgALAkAgA0UNAAJAIAAgACgCHEECdEHUrcIAaiICKAIARwRAIANBEEEUIAMoAhAgAEYbaiABNgIAIAENAQwCCyACIAE2AgAgAQ0AQfCwwgBB8LDCACgCAEF+IAAoAhx3cTYCAA8LIAEgAzYCGCAAKAIQIgIEQCABIAI2AhAgAiABNgIYCyAAQRRqKAIAIgBFDQAgAUEUaiAANgIAIAAgATYCGAsLrwIBBH9BHyECIABCADcCECABQf///wdNBEAgAUEGIAFBCHZnIgNrdkEBcSADQQF0a0E+aiECCyAAIAI2AhwgAkECdEHUrcIAaiEEAkBB8LDCACgCACIFQQEgAnQiA3FFBEBB8LDCACADIAVyNgIAIAQgADYCACAAIAQ2AhgMAQsCQAJAIAEgBCgCACIDKAIEQXhxRgRAIAMhAgwBCyABQRkgAkEBdmtBH3FBACACQR9HG3QhBANAIAMgBEEddkEEcWpBEGoiBSgCACICRQ0CIARBAXQhBCACIQMgAigCBEF4cSABRw0ACwsgAigCCCIBIAA2AgwgAiAANgIIIABBADYCGCAAIAI2AgwgACABNgIIDwsgBSAANgIAIAAgAzYCGAsgACAANgIMIAAgADYCCAvBAgIEfwF+IwBBQGoiAyQAQQEhBQJAIAAtAAQNACAALQAFIQUCQCAAKAIAIgQoAhwiBkEEcUUEQCAFRQ0BQQEhBSAEKAIUQYXPwABBAiAEQRhqKAIAKAIMEQAARQ0BDAILIAVFBEBBASEFIAQoAhRBuajAAEEBIARBGGooAgAoAgwRAAANAiAEKAIcIQYLQQEhBSADQQE6ABsgA0E0akGQqMAANgIAIAMgBCkCFDcCDCADIANBG2o2AhQgAyAEKQIINwIkIAQpAgAhByADIAY2AjggAyAEKAIQNgIsIAMgBC0AIDoAPCADIAc3AhwgAyADQQxqNgIwIAEgA0EcaiACEQEADQEgAygCMEGyqMAAQQIgAygCNCgCDBEAACEFDAELIAEgBCACEQEAIQULIABBAToABSAAIAU6AAQgA0FAayQAC8QCAgR/AX4jAEFAaiIDJAAgACgCACEFIAACf0EBIAAtAAgNABogACgCBCIEKAIcIgZBBHFFBEBBASAEKAIUQYXPwABBtqjAACAFG0ECQQEgBRsgBEEYaigCACgCDBEAAA0BGiABIAQgAigCDBEBAAwBCyAFRQRAQQEgBCgCFEG3qMAAQQIgBEEYaigCACgCDBEAAA0BGiAEKAIcIQYLIANBAToAGyADQTRqQZCowAA2AgAgAyAEKQIUNwIMIAMgA0EbajYCFCADIAQpAgg3AiQgBCkCACEHIAMgBjYCOCADIAQoAhA2AiwgAyAELQAgOgA8IAMgBzcCHCADIANBDGo2AjBBASABIANBHGogAigCDBEBAA0AGiADKAIwQbKowABBAiADKAI0KAIMEQAACzoACCAAIAVBAWo2AgAgA0FAayQAIAALkgIBAX8jAEEQayICJAAgACgCACEAAn8gASgCACABKAIIcgRAIAJBADYCDCABIAJBDGoCfwJAAkAgAEGAAU8EQCAAQYAQSQ0BIABBgIAETw0CIAIgAEE/cUGAAXI6AA4gAiAAQQx2QeABcjoADCACIABBBnZBP3FBgAFyOgANQQMMAwsgAiAAOgAMQQEMAgsgAiAAQT9xQYABcjoADSACIABBBnZBwAFyOgAMQQIMAQsgAiAAQT9xQYABcjoADyACIABBEnZB8AFyOgAMIAIgAEEGdkE/cUGAAXI6AA4gAiAAQQx2QT9xQYABcjoADUEECxARDAELIAEoAhQgACABQRhqKAIAKAIQEQEACyACQRBqJAALlgIBAn8jAEEQayICJAACQCAAIAJBDGoCfwJAIAFBgAFPBEAgAkEANgIMIAFBgBBJDQEgAUGAgARJBEAgAiABQT9xQYABcjoADiACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwwDCyACIAFBP3FBgAFyOgAPIAIgAUEGdkE/cUGAAXI6AA4gAiABQQx2QT9xQYABcjoADSACIAFBEnZBB3FB8AFyOgAMQQQMAgsgACgCCCIDIAAoAgRGBEAgACADEIoBIAAoAgghAwsgACADQQFqNgIIIAAoAgAgA2ogAToAAAwCCyACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAgsQ5AELIAJBEGokAEEAC5YCAQJ/IwBBEGsiAiQAAkAgACACQQxqAn8CQCABQYABTwRAIAJBADYCDCABQYAQSQ0BIAFBgIAESQRAIAIgAUE/cUGAAXI6AA4gAiABQQx2QeABcjoADCACIAFBBnZBP3FBgAFyOgANQQMMAwsgAiABQT9xQYABcjoADyACIAFBBnZBP3FBgAFyOgAOIAIgAUEMdkE/cUGAAXI6AA0gAiABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAyAAKAIERgRAIAAgAxDhASAAKAIIIQMLIAAgA0EBajYCCCAAKAIAIANqIAE6AAAMAgsgAiABQT9xQYABcjoADSACIAFBBnZBwAFyOgAMQQILEOUBCyACQRBqJABBAAuuAgEFfyMAQdAAayICJAAgACgCACEDIAJBADYCOCACIAM2AkBBfyEAA0AgAEEBaiEAIAJBEGogAkE4ahA2IAIoAhBBAUYNAAsgAkEANgIoIAIgAzYCJCACQQA2AhwgAUEYaigCACEDIAEoAhQhAQNAAkAgAkEIaiACQRxqEDYgAigCCCIFRQ0AIAIoAgwhBiACIAIoAihBAWoiBDYCKCACIAY2AiwgAkEBNgI8IAJB1JfCADYCOCACQgE3AkQgAkEENgI0IAIgAkEwajYCQCACIAJBLGo2AjAgASADIAJBOGoQLw0AIARFIAAgBE1yDQEgAkEBNgI8IAJB1KTAADYCOCACQgA3AkQgAkGMrMIANgJAIAEgAyACQThqEC9FDQELCyACQdAAaiQAIAVBAEcL/wECAn8BfgJAIAJFBEAgAEEAOgABDAELAkACQAJAAkACQCABLQAAQStrDgMAAgECCyACQQFrIgJFDQIgAUEBaiEBDAELIAJBAUYNAQsCQCACQQlPBEADQCACRQ0CIAEtAABBMGsiBEEJSw0DIAOtQgp+IgVCIIinDQQgAUEBaiEBIAJBAWshAiAEIAWnIgRqIgMgBE8NAAsgAEECOgABDAQLA0AgAS0AAEEwayIEQQlLDQIgAUEBaiEBIAQgA0EKbGohAyACQQFrIgINAAsLIAAgAzYCBCAAQQA6AAAPCyAAQQE6AAEMAQsgAEECOgABIABBAToAAA8LIABBAToAAAumAgEDfyMAQTBrIgkkACABBH8gCSACNgIsIAkgAjYCKCAJIAE2AiQgCUEYaiAJQSRqEMQBIAkoAhwhASAJKAIYBUEACyEKIAlBEGogAyAEEDsgCSgCFCEDIAkoAhAhCyAJQQhqIAUgBhA7IAkoAgwhBCAJKAIIIQYgCSAINgIsIAkgCDYCKCAJIAc2AiQgCSAJQSRqEMQBQbixwgAtAAAaIAkoAgQhBSAJKAIAIQdBOBAKIgJFBEAACyACIAE2AjAgAiABNgIsIAIgCjYCKCACIAc2AhwgAiAGNgIQIAIgCzYCBCACQQA2AgAgAiAAQQBHOgA0IAIgBTYCJCACIAU2AiAgAiAENgIYIAIgBDYCFCACIAM2AgwgAiADNgIIIAlBMGokACACC6oCAQJ/IwBBMGsiAiQAAn8CQAJAAkACQEEBIAAoAgAiACgCAEECayIDIANBBE8bQQFrDgMBAgMACyABKAIUQZiVwgBBJiABQRhqKAIAKAIMEQAADAMLIAIgADYCDCACQRxqQgE3AgAgAkEBNgIUIAJBzJXCADYCECACQSs2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwwCCyABKAIUQdSVwgBBJSABQRhqKAIAKAIMEQAADAELIAIgAEEEajYCDCACQRxqQgE3AgAgAkEBNgIUIAJBnJbCADYCECACQRU2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwsgAkEwaiQAC6oCAQJ/IwBBMGsiAiQAAn8CQAJAAkACQEECIAAoAgAiACgCAEEEayIDIANBBE8bQQFrDgMBAgMACyACIABBBGo2AgwgAkEcakIBNwIAIAJBATYCFCACQfiEwQA2AhAgAkErNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAwsgASgCFEGAhcEAQRogAUEYaigCACgCDBEAAAwCCyACIAA2AgwgAkEcakIBNwIAIAJBATYCFCACQdSXwgA2AhAgAkEvNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAQsgASgCFEGahcEAQRQgAUEYaigCACgCDBEAAAsgAkEwaiQAC7ECAgJ/AX4jAEEgayICJAACQCABLQAAQQJGBEAgAUEQaikDACEEAkACQAJAIAEoAghBAWsOAgECAAsgAAJ/IARCgICAgAhaBEAgAkEBOgAIIAIgBDcDECAAIAJBCGogAkEfakGAgMAAEJwBNgIEQQEMAQsgACAEPgIEQQALNgIADAMLIAACfyAEQoCAgIAIfEKAgICAEFoEQCACQQI6AAggAiAENwMQIAAgAkEIaiACQR9qQYCAwAAQnAE2AgRBAQwBCyAAIAQ+AgRBAAs2AgAMAgsgAkEDOgAIIAIgBDcDECACQQhqIAJBH2pBgIDAABCdASEBIABBATYCACAAIAE2AgQMAQsgASACQR9qQYCAwAAQ+AEhAyAAQQE2AgAgACADNgIEIAEQtAELIAJBIGokAAuqAgICfwF+IwBBIGsiAiQAAkAgAS0AAEECRgRAIAFBEGopAwAhBAJAAkACQCABKAIIQQFrDgIBAgALIAACfyAEQoCAgIAQWgRAIAJBAToACCACIAQ3AxAgACACQQhqIAJBH2pBkIDAABCcATYCBEEBDAELIAAgBD4CBEEACzYCAAwDCyAAAn8gBEKAgICAEFoEQCACQQI6AAggAiAENwMQIAAgAkEIaiACQR9qQZCAwAAQnAE2AgRBAQwBCyAAIAQ+AgRBAAs2AgAMAgsgAkEDOgAIIAIgBDcDECACQQhqIAJBH2pBkIDAABCdASEBIABBATYCACAAIAE2AgQMAQsgASACQR9qQZCAwAAQ+AEhAyAAQQE2AgAgACADNgIEIAEQtAELIAJBIGokAAugAgEBfyMAQTBrIgIkAAJ/AkACQAJAAkAgACgCACIAKAIAQQFrDgMBAgMACyACIABBBGo2AgwgAkEcakIBNwIAIAJBATYCFCACQfSFwQA2AhAgAkErNgIsIAFBGGooAgAhACACIAJBKGo2AhggAiACQQxqNgIoIAEoAhQgACACQRBqEC8MAwsgASgCFEH8hcEAQScgAUEYaigCACgCDBEAAAwCCyABKAIUQaOGwQBBJSABQRhqKAIAKAIMEQAADAELIAIgAEEEajYCDCACQRxqQgE3AgAgAkEBNgIUIAJB3IbBADYCECACQSw2AiwgAUEYaigCACEAIAIgAkEoajYCGCACIAJBDGo2AiggASgCFCAAIAJBEGoQLwsgAkEwaiQAC7kCAQF/IwBBEGsiAiQAAn8CQAJAAkACQAJAAkACQAJAIAAtAABBAWsOBwECAwQFBgcACyACIABBBGo2AgggAUHspMAAQQpB9qTAAEEDIAJBCGpB3KTAABCNAQwHCyABKAIUQfmkwABBCSABQRhqKAIAKAIMEQAADAYLIAEoAhRBgqXAAEEHIAFBGGooAgAoAgwRAAAMBQsgAiAAQQFqNgIMIAFBiaXAAEENQczTwABBBiACQQxqQfihwAAQjQEMBAsgASgCFEGWpcAAQQUgAUEYaigCACgCDBEAAAwDCyABKAIUQfqDwQBBBiABQRhqKAIAKAIMEQAADAILIAEoAhRBm6XAAEENIAFBGGooAgAoAgwRAAAMAQsgASgCFEGopcAAQQsgAUEYaigCACgCDBEAAAsgAkEQaiQAC40CAQJ/IwBBEGsiAiQAAkAgACgCACIDLQAARQRAIAEoAhRBsMbAAEEEIAFBGGooAgAoAgwRAAAhAAwBC0EBIQAgAiADQQFqNgIAIAIgASgCFEG0xsAAQQQgAUEYaigCACgCDBEAADoADCACIAE2AgggAkEAOgANIAJBADYCBCACQQRqIAJBvKjAABBiIAItAAwhASgCACIDRQRAIAFBAEchAAwBCyABDQAgAigCCCEBAkAgA0EBRw0AIAItAA1FDQAgAS0AHEEEcQ0AIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANAQsgASgCFEG0nsIAQQEgAUEYaigCACgCDBEAACEACyACQRBqJAAgAAvtAQEFfyMAQeAAayIFJAAgBSACIARqQQFqEHwgBSgCKCIGQQRNBH8gBUEIagUgBSgCBCEGIAUoAggLIAYgASACIAMgBBAGIAVBMGoiASAFQTAQvgIaIAFBBHIhByAFQThqIQggBUHYAGohAyAFKAI4IQEDQCAIIQYgBSgCWCIEIQIgBEEFSSIJRQRAIAEhBiAFKAI0IQILAkAgAkUNACACQQN0IAZqQQhrKQMAQgBSDQAgAyECIAlFBEAgBSgCNCEEIAchAgsgBEUNASACIARBAWs2AgAMAQsLIAAgBUEwakEwEL4CGiAFQeAAaiQAC4ECAQh/IwBBEGsiBCQAIAAoAggiAyAAKAIEIgUgAyAFSxshByAAKAIAIQYCQAJAAkACQANAIAJFBEBBACEDDAULIAMgB0YNASAAIANBAWoiCDYCCCACQQFrIQIgAyAGaiEJIAEtAAAgCCEDIAFBAWohASAJLQAARg0ACyAEQQhqIAYgBSADELYBQbixwgAtAAAaIAQoAgwhASAEKAIIIQJBFBAKIgNFDQEgA0EJNgIADAILIAQgBiAFIAcQtgFBuLHCAC0AABogBCgCBCEBIAQoAgAhAkEUEAoiA0UNACADQQU2AgAMAQsACyADIAI2AgwgAyABNgIQCyAEQRBqJAAgAwvoAQEEfyMAQeAAayIDJAAgASgCKCIFIQQgBUEFTwRAIAEoAgQhBAsCQAJAAn8gAigCKCIGQQVPBEAgBCACKAIETw0CIAIoAgQhBiACKAIIDAELIAQgBk8NASACQQhqCyECIANBADYCMCADQQA2AlggA0EwaiIEIAIgAiAGQQN0ahBDIAAgAyAEQTAQvgIgARAUDAELIAVBBE0EfyABQQhqBSABKAIEIQUgASgCCAshASADQQA2AjAgA0EANgJYIANBMGoiBCABIAEgBUEDdGoQQyAAIAMgBEEwEL4CIAIQFAsgA0HgAGokAAvgAQEHfwJAIAAtAABBBUcNACAAKAIEIgVFDQAgAEEIaigCACEGA0AgBUGMAmohACAFLwGSAyIJQQxsIQdBfyEDAkACQANAIAdFBEAgCSEDDAILIAAoAgghBCAAKAIAIQggA0EBaiEDIAdBDGshByAAQQxqIQBBfyABIAggAiAEIAIgBEkbELwCIgggAiAEayAIGyIEQQBHIARBAEgbIgRBAUYNAAsgBEH/AXFFDQELIAZFBEBBAA8LIAZBAWshBiAFIANBAnRqQZgDaigCACEFDAELCyAFIANBGGxqIQMLIAML9gECAn8CfiMAQRBrIgQkAAJAAkACQAJAAkACQCABKAIIIgUgASgCBEkEQCABKAIAIAVqLQAAIgVBLkYNASAFQcUARiAFQeUARnINAgtCASEGIAJFDQIgAyEHDAQLIAQgASACIANBABA9IAQoAgBFDQIgACAEKAIENgIIIABCAzcDAAwECyAEIAEgAiADQQAQNyAEKAIARQ0BIAAgBCgCBDYCCCAAQgM3AwAMAwtCACEGQgAgA30iB0IAUwRAQgIhBgwCCyADur1CgICAgICAgICAf4UhBwwBCyAEKQMIIQcLIAAgBzcDCCAAIAY3AwALIARBEGokAAvJAQEGfyAAQShqIQQgACgCKCICQQRNBH8gAEEIagUgACgCBCECIAAoAggLIAIgASgCKCIDQQRNBH8gAUEIagUgASgCBCEDIAEoAggLIAMQTCAAQQRqIQUgAEEIaiEDIAAoAgghBgNAIAMhAiAEKAIAIgAhASAAQQVJIgdFBEAgBiECIAUoAgAhAQsCQCABRQ0AIAFBA3QgAmpBCGspAwBCAFINACAEIQEgB0UEQCAFIgEoAgAhAAsgAEUNASABIABBAWs2AgAMAQsLC90BAQF/IwBBMGsiAiQAAn8gACgCACIALQAEBEAgAiAAQQVqLQAAOgAHIAJBJGpCAjcCACACQRRqQQQ2AgAgAkECNgIcIAJB6KzAADYCGCACIAA2AhAgAkEJNgIMIAFBGGooAgAhACACIAJBCGo2AiAgAiACQQdqNgIIIAEoAhQgACACQRhqEC8MAQsgAkEkakIBNwIAIAJBATYCHCACQaStwAA2AhggAkEENgIMIAIgADYCCCABQRhqKAIAIQAgAiACQQhqNgIgIAEoAhQgACACQRhqEC8LIAJBMGokAAvUAQEBfyAAAn8CQAJ/AkACQAJAIAEEQCACQQBIDQECQCADKAIEBEAgA0EIaigCACIERQRAIAJFDQZBuLHCAC0AABogAUEJSQ0CDAULIAMoAgAgBCABIAIQIwwGCyACRQ0EQbixwgAtAAAaIAFBCU8NAwsgAhAKDAQLIABBADYCBCAAQQhqIAI2AgAMBAsgAEEANgIEDAMLIAEgAhBADAELIAELIgMEQCAAIAM2AgQgAEEIaiACNgIAQQAMAgsgACABNgIEIABBCGogAjYCAAtBAQs2AgALvgECBH4CfyABIANPBEACQCADRQ0AIAAgA0EDdGohCCADIQkDQCAAIAQgACkDAHwiBSACKQMAfCIHNwMAIAQgBVatIAUgB1atfCEEIABBCGohACACQQhqIQIgCUEBayIJDQALIARQDQAgAUEDdCADQQN0ayEAA0AgAEUNASAIIAQgCCkDAHwiBTcDACAAQQhrIQAgCEEIaiEIIAYgBCAFVq18IQQgBEIAUg0ACwsPC0GJmMIAQSNB6PXAABDeAQAL2wEBAX8jAEEQayIFJAAgBSAAKAIUIAEgAiAAQRhqKAIAKAIMEQAAOgAMIAUgADYCCCAFQQA6AA0gBUEANgIEIAVBBGogA0GwjcAAEGIgBEH0iMAAEGIhACAFLQAMIQECfyABQQBHIAAoAgAiAkUNABpBASABDQAaIAUoAgghAQJAIAJBAUcNACAFLQANRQ0AIAEtABxBBHENAEEBIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANARoLIAEoAhRBtJ7CAEEBIAFBGGooAgAoAgwRAAALIAVBEGokAAvLAQEHfyABBEADQCAAIARBDGxqIgcoAgAhBSAHKAIIIggEQCAFQRRqIQJBACEGA0ACQCACQQxqKAIAIgNFDQAgAkEQaigCAEUNACADECILAkACQAJAAkAgAkEEaygCAA4DAAEDAQsgAkEEaigCAEUNAiAFIAZBLGxqQRRqIQMMAQsgAiEDIAJBBGooAgBFDQELIAMoAgAQIgsgBkEBaiEGIAJBLGohAiAIQQFrIggNAAsLIAcoAgQEQCAFECILIARBAWoiBCABRw0ACwsL2QEBA38jAEEQayICJAAgACgCACEDIAEoAhRB5uzAAEEBIAFBGGooAgAoAgwRAAAhACACQQA6AAkgAiAAOgAIIAIgATYCBCADKAIoIgRBBE0EfyADQQhqBSADKAIEIQQgAygCCAshASAEBEAgBEEDdCEAA0AgAiABNgIMIAJBBGogAkEMakEqEGEgAUEIaiEBIABBCGsiAA0ACyACLQAIIQALQQEhASAAQf8BcUUEQCACKAIEIgAoAhRB+OzAAEEBIABBGGooAgAoAgwRAAAhAQsgAkEQaiQAIAEL0wEBA38jAEEwayIEJAACQAJAIAFBBE0EQCAEQQA2AgAgAQRAIARBCGohAiABIQMDQCACQgA3AwAgAkEIaiECIANBAWsiAw0ACwsgBCABNgIoIAAgBEEwEL4CGgwBCwJAAkACQCABQf////8ASw0AIAFBA3QiAkEASA0AIAINAUEIIQMMAgsQ6gEACyACEAoiA0UNAiADQQRrLQAAQQNxRQ0AIANBACACELsCGgsgACABNgIoIAAgAzYCCCAAIAE2AgQgAEEBNgIACyAEQTBqJAAPCwALzwEBAX8jAEEQayIFJAAgBSAAKAIUIAEgAiAAQRhqKAIAKAIMEQAAOgAMIAUgADYCCCAFQQA6AA0gBUEANgIEIAVBBGogAyAEEGIhACAFLQAMIQECfyABQQBHIAAoAgAiAkUNABpBASABDQAaIAUoAgghAQJAIAJBAUcNACAFLQANRQ0AIAEtABxBBHENAEEBIAEoAhRB6OzAAEEBIAFBGGooAgAoAgwRAAANARoLIAEoAhRBtJ7CAEEBIAFBGGooAgAoAgwRAAALIAVBEGokAAvbAgEEfyACKAIEIQMgASgCCCEFAkACQAJAAkACQAJAAkACQCACKAIAQQFrDgIBAgALIAMoAgAhBAwBCyADKAIAQQFqIgRFDQELIAJBDGooAgAhBiAFIQMgAigCCEEBaw4CAQMCCyMAQSBrIgAkACAAQRRqQgA3AgAgAEEBNgIMIABBqKvAADYCCCAAQYyswgA2AhAgAEEIakHg5sAAEOsBAAsgBigCACEDDAELIAYoAgBBAWoiA0UNAQsCQCADIARPBEAgAyAFSw0BIAEgBDYCCCAAIAM2AgwgACABNgIIIAAgBSADazYCECAAIAEoAgAiASADajYCBCAAIAEgBGo2AgAPCyAEIANBjN3AABC6AQALIAMgBUGM3cAAELgBAAsjAEEgayIAJAAgAEEUakIANwIAIABBATYCDCAAQdyrwAA2AgggAEGMrMIANgIQIABBCGpB8ObAABDrAQAL3gEBAn8jAEEQayICJAAgAiAAKAIAIgA2AgQgASgCFEH/xcAAQQYgAUEYaigCACgCDBEAACEDIAJBADoADSACIAM6AAwgAiABNgIIIAJBCGpBhcbAAEEEIABBBGpB5L7AABBIQYnGwABBBSACQQRqQZDGwAAQSCEDIAItAAwhAAJ/IABBAEcgAi0ADUUNABpBASAADQAaIAMoAgAiAC0AHEEEcUUEQCAAKAIUQbSowABBAiAAKAIYKAIMEQAADAELIAAoAhRB3OzAAEEBIAAoAhgoAgwRAAALIAJBEGokAAvNAQEEfyMAQRBrIgMkAANAAkAgA0EEaiAAEDwgAygCBCIBRQ0AIAEgAygCDCICQQxsaiIEQZACaigCAARAIARBjAJqKAIAECILAkACQAJAIAEgAkEYbGoiAS0AAA4FBAQEAQIACyABQQRqELIBDAMLIAFBCGooAgBFDQIgASgCBBAiDAILIAFBDGooAgAiBARAIAEoAgQhAgNAIAIQtAEgAkEYaiECIARBAWsiBA0ACwsgAUEIaigCAEUNASABKAIEECIMAQsLIANBEGokAAvJAQEEfyMAQSBrIgIkAAJAAkAgAUEBaiIBRQ0AQQQgACgCBCIEQQF0IgMgASABIANJGyIBIAFBBE0bIgNBBHQhASADQYCAgMAASUECdCEFAkAgBEUEQCACQQA2AhgMAQsgAiAAKAIANgIUIAJBBDYCGCACIARBBHQ2AhwLIAJBCGogBSABIAJBFGoQdyACKAIMIQEgAigCCEUEQCAAIAM2AgQgACABNgIADAILIAFBgYCAgHhGDQEgAUUNAAALEOoBAAsgAkEgaiQAC8kBAQR/IwBBIGsiAiQAAkACQCABQQFqIgFFDQBBBCAAKAIEIgRBAXQiAyABIAEgA0kbIgEgAUEETRsiA0EMbCEBIANBq9Wq1QBJQQJ0IQUCQCAERQRAIAJBADYCGAwBCyACQQQ2AhggAiAEQQxsNgIcIAIgACgCADYCFAsgAkEIaiAFIAEgAkEUahB3IAIoAgwhASACKAIIRQRAIAAgAzYCBCAAIAE2AgAMAgsgAUGBgICAeEYNASABRQ0AAAsQ6gEACyACQSBqJAALyQECA38BfiMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAAJ/AkACQCABQShqKAIAIgRFBEAgASADNgIADAELIAJBEGogBCABQTBqKAIAENYBIAIpAhQhBSACKAIQIQMgASABKAIAQQFrNgIAIAMNAQtBACEDQQAMAQsgAiAFNwIUIAIgAzYCECACQQhqIAJBEGoQxAEgAigCCCEDIAIoAgwLNgIEIAAgAzYCACACQSBqJAAPCxC1AgALELYCAAvEAQECfyMAQSBrIgQkAAJAIAIgA2oiAyACSQ0AQQggASgCBCICQQF0IgUgAyADIAVJGyIDIANBCE0bIgNBf3NBH3YhBQJAIAJFBEAgBEEANgIYDAELIAQgAjYCHCAEQQE2AhggBCABKAIANgIUCyAEQQhqIAUgAyAEQRRqEHcgBCgCDCEFIAQoAggEQCAEQRBqKAIAIQMMAQsgASADNgIEIAEgBTYCAEGBgICAeCEFCyAAIAM2AgQgACAFNgIAIARBIGokAAvJAQECfyMAQTBrIgIkACAAKAIAIQAgAkEcakIBNwIAIAJBATYCFCACQdSXwgA2AhAgAkEtNgIsIAIgAEEIajYCKCABQRhqKAIAIQMgAiACQShqNgIYAn9BASABKAIUIgEgAyACQRBqEC8NABpBACAAKAIARQ0AGiACIAAoAgQ2AgwgAkEcakIBNwIAIAJBATYCFCACQezJwAA2AhAgAkEuNgIsIAIgAkEoajYCGCACIAJBDGo2AiggASADIAJBEGoQLwsgAkEwaiQAC74BAQJ/IwBBIGsiAyQAAkACQCABIAEgAmoiAUsNAEEIIAAoAgQiAkEBdCIEIAEgASAESRsiASABQQhNGyIEQX9zQR92IQECQCACRQRAIANBADYCGAwBCyADIAI2AhwgA0EBNgIYIAMgACgCADYCFAsgA0EIaiABIAQgA0EUahCMASADKAIMIQEgAygCCEUEQCAAIAQ2AgQgACABNgIADAILIAFBgYCAgHhGDQEgAUUNAAALEOoBAAsgA0EgaiQAC70BAQF/IwBBEGsiCyQAIAAoAhQgASACIABBGGooAgAoAgwRAAAhASALQQA6AA0gCyABOgAMIAsgADYCCCALQQhqIAMgBCAFIAYQSCAHIAggCSAKEEghAiALLQAMIQECfyABQQBHIAstAA1FDQAaQQEgAQ0AGiACKAIAIgAtABxBBHFFBEAgACgCFEG0qMAAQQIgACgCGCgCDBEAAAwBCyAAKAIUQdzswABBASAAKAIYKAIMEQAACyALQRBqJAAL0QIBA38jAEEgayIDJAACQAJAIAEgASACaiICSw0AQQggACgCBCIEQQF0IgEgAiABIAJLGyIBIAFBCE0bIgFBf3NBH3YhBQJAIARFBEAgA0EANgIYDAELIAMgBDYCHCADQQE2AhggAyAAKAIANgIUCyADQRRqIQQgA0EIaiICAn8CQCAFBEAgAUEASA0BAn8gBCgCBARAIARBCGooAgAiBQRAIAQoAgAgBUEBIAEQIwwCCwtBuLHCAC0AABogARAKCyIEBEAgAiAENgIEIAJBCGogATYCAEEADAMLIAJBATYCBCACQQhqIAE2AgBBAQwCCyACQQA2AgQgAkEIaiABNgIAQQEMAQsgAkEANgIEQQELNgIAIAMoAgwhAiADKAIIRQRAIAAgATYCBCAAIAI2AgAMAgsgAkGBgICAeEYNASACRQ0AAAsQ6gEACyADQSBqJAALuwEBBn8gACgCDCIBIAAoAggiBGtBGG4hBiABIARHBEADQAJAAkACQAJAIAQgAkEYbGoiAS0AAA4FAwMDAQIACyABQQRqELIBDAILIAFBCGooAgBFDQEgASgCBBAiDAELIAFBDGooAgAiBQRAIAEoAgQhAwNAIAMQtAEgA0EYaiEDIAVBAWsiBQ0ACwsgAUEIaigCAEUNACABKAIEECILIAJBAWoiAiAGRw0ACwsgACgCBARAIAAoAgAQIgsLuwEBA38jAEEgayICJAACQAJAIAFBAWoiAUUNAEEIIAAoAgQiBEEBdCIDIAEgASADSRsiASABQQhNGyIDQX9zQR92IQECQCAERQRAIAJBADYCGAwBCyACIAQ2AhwgAkEBNgIYIAIgACgCADYCFAsgAkEIaiABIAMgAkEUahB3IAIoAgwhASACKAIIRQRAIAAgAzYCBCAAIAE2AgAMAgsgAUGBgICAeEYNASABRQ0AAAsQ6gEACyACQSBqJAALxwEBAX8CQCAFIAFBAWtGBEAgAC8BkgMiAUELTw0BIAAgAUEBaiIFOwGSAyAAIAFBDGxqIgZBlAJqIAJBCGooAgA2AgAgBkGMAmogAikCADcCACAAIAFBGGxqIgEgAykDADcDACABQQhqIANBCGopAwA3AwAgAUEQaiADQRBqKQMANwMAIAAgBUECdGpBmANqIAQ2AgAgBCAFOwGQAyAEIAA2AogCDwtB3OjBAEEwQYzpwQAQ3gEAC0HQ58EAQSBBnOnBABDeAQALngEAAkACQCABBEAgAkEASA0BAn8gAygCBARAAkAgA0EIaigCACIBRQRADAELIAMoAgAgAUEBIAIQIwwCCwtBuLHCAC0AABogAhAKCyIBBEAgACABNgIEIABBCGogAjYCACAAQQA2AgAPCyAAQQE2AgQMAgsgAEEANgIEDAELIABBADYCBCAAQQE2AgAPCyAAQQhqIAI2AgAgAEEBNgIAC7MBAQF/IwBBEGsiByQAIAAoAhQgASACIABBGGooAgAoAgwRAAAhASAHQQA6AA0gByABOgAMIAcgADYCCCAHQQhqIAMgBCAFIAYQSCECIActAAwhAQJ/IAFBAEcgBy0ADUUNABpBASABDQAaIAIoAgAiAC0AHEEEcUUEQCAAKAIUQbSowABBAiAAKAIYKAIMEQAADAELIAAoAhRB3OzAAEEBIAAoAhgoAgwRAAALIAdBEGokAAvkAQACQAJAAkACQAJAAkACQCAALQAAQQFrDgYBAgMEBQYACyABKAIUQZiEwABBIiABQRhqKAIAKAIMEQAADwsgASgCFEG6hMAAQR0gAUEYaigCACgCDBEAAA8LIAEoAhRB14TAAEEgIAFBGGooAgAoAgwRAAAPCyABKAIUQfeEwABBHSABQRhqKAIAKAIMEQAADwsgASgCFEGUhcAAQRcgAUEYaigCACgCDBEAAA8LIAEoAhRBq4XAAEEqIAFBGGooAgAoAgwRAAAPCyABKAIUQdWFwABBICABQRhqKAIAKAIMEQAAC7cBAQR/IwBBEGsiAiQAIAAoAgghAyAAKAIAIQBBASEEIAEoAhRB5uzAAEEBIAFBGGooAgAoAgwRAAAhBSACQQA6AAkgAiAFOgAIIAIgATYCBCADBH8DQCACIAA2AgwgAkEEaiACQQxqQQgQYSAAQQFqIQAgA0EBayIDDQALIAItAAgFIAULQf8BcUUEQCACKAIEIgAoAhRB+OzAAEEBIABBGGooAgAoAgwRAAAhBAsgAkEQaiQAIAQLqwEBBn8jAEEgayIDJAAgA0EIaiACENUBIAMoAgghBgJAIAMoAgwiB0UNACACQQxsIQUgBiEEIAchCANAIAVFDQEgA0EQaiABKAIAIAFBCGooAgAQ1gEgBEEIaiADQRhqKAIANgIAIAQgAykDEDcCACAFQQxrIQUgBEEMaiEEIAFBDGohASAIQQFrIggNAAsLIAAgAjYCCCAAIAc2AgQgACAGNgIAIANBIGokAAuzAQEEfyAAKAIEIQEgAEGMrMIANgIEIAAoAgAhAyAAQYyswgA2AgAgACgCECECAkACQCABIANGBEAgAkUNAiAAKAIIIgFBCGohAyAAKAIMIgQgASgCCCIARg0BIAEoAgAiASAAaiABIARqIAIQvQIMAQsgAkUNASAAKAIIIgFBCGohAyAAKAIMIgQgASgCCCIARg0AIAEoAgAiASAAaiABIARqIAIQvQILIAMgACACajYCAAsLnQEBBX8gACACKAIAIAEoAgwiAyABKAIIIgQgASgCBCIFc3MgASgCACIBQQV3amoiBkEedyIHNgIMIAAgAigCBCADIAQgASAFQR53IgVzc2pqIAZBBXdqIgNBHnc2AgggACAEIAIoAghqIAUgAUEedyIBcyAGc2ogA0EFd2oiBDYCBCAAIAIoAgwgBWogASAHcyADc2ogBEEFd2o2AgALmwEBA38jAEEQayIFJAACQCABKAIoIgNBBUkEQCADIQRBBCEDDAELIAEoAgQhBAsCf0GBgICAeCACIAMgBGtNDQAaQQAgBCACIARqIgNLDQAaQQBBfyADQQFrZ3ZBACADQQJPG0EBaiIDRQ0AGiAFQQhqIAEgAxBBIAUoAgwhAyAFKAIICyEEIAAgAzYCBCAAIAQ2AgAgBUEQaiQAC6QBAQJ/AkAgAEGQA28iA0EfdUGQA3EgA2oiA0GQA0kEQAJAIAFBDEsgAkEfS3IgAEH//w9rQYKAYElyDQAgA0Gcl8AAai0AACACQQR0IAFBCXRyciIBQQN2IQIgAUGANE8NAiACQaibwABqLAAAIgJFDQAgASACQQN0ayAAQQ10ciEECyAEDwsgA0GQA0GYm8AAELcBAAsgAkHABkHoocAAELcBAAuhAQEKfwJAIAAEQCAAKAIADQEgAEEANgIAIAAoAgQhASAAKAIIIAAoAgwhBSAAKAIQIQIgACgCFCEGIAAoAhghByAAKAIcIQggACgCICEJIAAoAighAyAAKAIsIQogABAiIANFIApFckUEQCADECILIAEgBRDtAQRAIAEQIgsgAiAHEO0BIAYEQCACECILIAkEQCAIECILDwsQtQIACxC2AgALwAEBAn8jAEEQayICJAACfwJAAkACQAJAQQEgACgCACIAKAIAQQJrIgMgA0EETxtBAWsOAwECAwALIAEoAhRBpJbCAEEaIAFBGGooAgAoAgwRAAAMAwsgAiAANgIIIAFBvpbCAEEEIAJBCGpBxJbCABB9DAILIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAQsgAiAAQQRqNgIMIAFB4JbCAEEKQeqWwgBBAyACQQxqQfCWwgAQjQELIAJBEGokAAuUAQECfyAAQQBOBH8gAAUgAUEtOgAAIAFBAWohAUEAIABrCyICQeMATARAIAJBCUwEQCABIAJBMGo6AAAgAEEfdkEBag8LIAEgAkEBdEH6icIAai8AADsAACAAQR92QQJyDwsgASACQeQAbiIDQTBqOgAAIAEgAiADQeQAbGtBAXRB+onCAGovAAA7AAEgAEEfdkEDagu4AQECfyMAQRBrIgIkAAJ/AkACQAJAAkBBAiAAKAIAIgAoAgBBBGsiAyADQQRPG0EBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpBsIXBABB9DAMLIAEoAhRBwIXBAEEGIAFBGGooAgAoAgwRAAAMAgsgAiAANgIMIAFB8JDBAEEFIAJBDGpByIXBABB9DAELIAEoAhRB2IXBAEEHIAFBGGooAgAoAgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0hPWFzc2VydGlvbiBgbGVmdCAgcmlnaHRgIGZhaWxlZAogIGxlZnQ6IAogcmlnaHQ6IHwTEAAQAAAAjBMQABcAAACjExAACQAAACByaWdodGAgZmFpbGVkOiAKICBsZWZ0OiAAAAB8ExAAEAAAAMQTEAAQAAAA1BMQAAkAAACjExAACQAAAAyWEAAAAAAAj48QAAIAAABFAAAADAAAAAQAAABPAAAAUAAAAFEAAAAgICAgIHsgIHsKLAogfSgoCgoAAEUAAAAEAAAABAAAAFIAAABsaWJyYXJ5L2NvcmUvc3JjL2ZtdC9udW0ucnMATBQQABsAAABpAAAAFwAAADB4AADUEhAAGwAAAC8JAAAaAAAA1BIQABsAAAAoCQAAIgAAAGxpYnJhcnkvY29yZS9zcmMvc2xpY2UvbWVtY2hyLnJznBQQACAAAACtAAAACQAAAJwUEAAgAAAAkQAAAB4AAAByYW5nZSBzdGFydCBpbmRleCAgb3V0IG9mIHJhbmdlIGZvciBzbGljZSBvZiBsZW5ndGgg3BQQABIAAADuFBAAIgAAAHJhbmdlIGVuZCBpbmRleCAgFRAAEAAAAO4UEAAiAAAAc2xpY2UgaW5kZXggc3RhcnRzIGF0ICBidXQgZW5kcyBhdCAAQBUQABYAAABWFRAADQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSBmcm9tIGFmdGVyIG1heGltdW0gdXNpemUAAAB0FRAAMQAAAGF0dGVtcHRlZCB0byBpbmRleCBzbGljZSB1cCB0byBtYXhpbXVtIHVzaXplsBUQACwAAABzb3VyY2Ugc2xpY2UgbGVuZ3RoICgpIGRvZXMgbm90IG1hdGNoIGRlc3RpbmF0aW9uIHNsaWNlIGxlbmd0aCAo5BUQABUAAAD5FRAAKwAAADSPEAABAAAAaW52YWxpZCB1dGYtOCBzZXF1ZW5jZSBvZiAgYnl0ZXMgZnJvbSBpbmRleCA8FhAAGgAAAFYWEAASAAAAaW5jb21wbGV0ZSB1dGYtOCBieXRlIHNlcXVlbmNlIGZyb20gaW5kZXggAAB4FhAAKgAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAEHursAACzMCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAwMDAwMDAwMDAwMDAwMDBAQEBAQAQayvwAAL2UZsaWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAKwXEAAfAAAAQgUAABIAAACsFxAAHwAAAEIFAAAoAAAArBcQAB8AAAA1BgAAFQAAAKwXEAAfAAAAYwYAABUAAACsFxAAHwAAAGQGAAAVAAAAWy4uLl1iZWdpbiA8PSBlbmQgKCA8PSApIHdoZW4gc2xpY2luZyBgACEYEAAOAAAALxgQAAQAAAAzGBAAEAAAAGR5EAABAAAAYnl0ZSBpbmRleCAgaXMgbm90IGEgY2hhciBib3VuZGFyeTsgaXQgaXMgaW5zaWRlICAoYnl0ZXMgKSBvZiBgAGQYEAALAAAAbxgQACYAAACVGBAACAAAAJ0YEAAGAAAAZHkQAAEAAAAgaXMgb3V0IG9mIGJvdW5kcyBvZiBgAABkGBAACwAAAMwYEAAWAAAAZHkQAAEAAABsaWJyYXJ5L2NvcmUvc3JjL3N0ci9tb2QucnMA/BgQABsAAAADAQAALAAAAGxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS9wcmludGFibGUucnMAAAAoGRAAJQAAABoAAAA2AAAAKBkQACUAAAAKAAAAKwAAAAAGAQEDAQQCBQcHAggICQIKBQsCDgQQARECEgUTERQBFQIXAhkNHAUdCB8BJAFqBGsCrwOxArwCzwLRAtQM1QnWAtcC2gHgBeEC5wToAu4g8AT4AvoD+wEMJzs+Tk+Pnp6fe4uTlqKyuoaxBgcJNj0+VvPQ0QQUGDY3Vld/qq6vvTXgEoeJjp4EDQ4REikxNDpFRklKTk9kZVy2txscBwgKCxQXNjk6qKnY2Qk3kJGoBwo7PmZpj5IRb1+/7u9aYvT8/1NUmpsuLycoVZ2goaOkp6iturzEBgsMFR06P0VRpqfMzaAHGRoiJT4/5+zv/8XGBCAjJSYoMzg6SEpMUFNVVlhaXF5gY2Vma3N4fX+KpKqvsMDQrq9ub76TXiJ7BQMELQNmAwEvLoCCHQMxDxwEJAkeBSsFRAQOKoCqBiQEJAQoCDQLTkOBNwkWCggYO0U5A2MICTAWBSEDGwUBQDgESwUvBAoHCQdAICcEDAk2AzoFGgcEDAdQSTczDTMHLggKgSZSSysIKhYaJhwUFwlOBCQJRA0ZBwoGSAgnCXULQj4qBjsFCgZRBgEFEAMFgItiHkgICoCmXiJFCwoGDRM6Bgo2LAQXgLk8ZFMMSAkKRkUbSAhTDUkHCoD2RgodA0dJNwMOCAoGOQcKgTYZBzsDHFYBDzINg5tmdQuAxIpMYw2EMBAWj6qCR6G5gjkHKgRcBiYKRgooBROCsFtlSwQ5BxFABQsCDpf4CITWKgmi54EzDwEdBg4ECIGMiQRrBQ0DCQcQkmBHCXQ8gPYKcwhwFUZ6FAwUDFcJGYCHgUcDhUIPFYRQHwYGgNUrBT4hAXAtAxoEAoFAHxE6BQGB0CqC5oD3KUwECgQCgxFETD2AwjwGAQRVBRs0AoEOLARkDFYKgK44HQ0sBAkHAg4GgJqD2AQRAw0DdwRfBgwEAQ8MBDgICgYoCCJOgVQMHQMJBzYIDgQJBwkHgMslCoQGAAEDBQUGBgIHBggHCREKHAsZDBoNEA4MDwQQAxISEwkWARcEGAEZAxoHGwEcAh8WIAMrAy0LLgEwAzECMgGnAqkCqgSrCPoC+wX9Av4D/wmteHmLjaIwV1iLjJAc3Q4PS0z7/C4vP1xdX+KEjY6RkqmxurvFxsnK3uTl/wAEERIpMTQ3Ojs9SUpdhI6SqbG0urvGys7P5OUABA0OERIpMTQ6O0VGSUpeZGWEkZudyc7PDREpOjtFSVdbXF5fZGWNkam0urvFyd/k5fANEUVJZGWAhLK8vr/V1/Dxg4WLpKa+v8XHz9rbSJi9zcbOz0lOT1dZXl+Jjo+xtre/wcbH1xEWF1tc9vf+/4Btcd7fDh9ubxwdX31+rq9/u7wWFx4fRkdOT1haXF5+f7XF1NXc8PH1cnOPdHWWJi4vp6+3v8fP19+aQJeYMI8f0tTO/05PWlsHCA8QJy/u725vNz0/QkWQkVNndcjJ0NHY2ef+/wAgXyKC3wSCRAgbBAYRgawOgKsFHwmBGwMZCAEELwQ0BAcDAQcGBxEKUA8SB1UHAwQcCgkDCAMHAwIDAwMMBAUDCwYBDhUFTgcbB1cHAgYXDFAEQwMtAwEEEQYPDDoEHSVfIG0EaiWAyAWCsAMaBoL9A1kHFgkYCRQMFAxqBgoGGgZZBysFRgosBAwEAQMxCywEGgYLA4CsBgoGLzFNA4CkCDwDDwM8BzgIKwWC/xEYCC8RLQMhDyEPgIwEgpcZCxWIlAUvBTsHAg4YCYC+InQMgNYaDAWA/wWA3wzynQM3CYFcFIC4CIDLBQoYOwMKBjgIRggMBnQLHgNaBFkJgIMYHAoWCUwEgIoGq6QMFwQxoQSB2iYHDAUFgKYQgfUHASAqBkwEgI0EgL4DGwMPDWxpYnJhcnkvY29yZS9zcmMvdW5pY29kZS91bmljb2RlX2RhdGEucnPsHhAAKAAAAFAAAAAoAAAA7B4QACgAAABcAAAAFgAAAGxpYnJhcnkvY29yZS9zcmMvZXNjYXBlLnJzXHV7AAAANB8QABoAAABiAAAAIwAAAEUAAAAEAAAABAAAAA4AAABVdGY4RXJyb3J2YWxpZF91cF90b2Vycm9yX2xlbgAAAEUAAAAEAAAABAAAAFMAAAAAAwAAgwQgAJEFYABdE6AAEhcgHwwgYB/vLKArKjAgLG+m4CwCqGAtHvtgLgD+IDae/2A2/QHhNgEKITckDeE3qw5hOS8YoTkwHGFI8x6hTEA0YVDwaqFRT28hUp28oVIAz2FTZdGhUwDaIVQA4OFVruJhV+zkIVnQ6KFZIADuWfABf1oAcAAHAC0BAQECAQIBAUgLMBUQAWUHAgYCAgEEIwEeG1sLOgkJARgEAQkBAwEFKwM8CCoYASA3AQEBBAgEAQMHCgIdAToBAQECBAgBCQEKAhoBAgI5AQQCBAICAwMBHgIDAQsCOQEEBQECBAEUAhYGAQE6AQECAQQIAQcDCgIeATsBAQEMAQkBKAEDATcBAQMFAwEEBwILAh0BOgECAQIBAwEFAgcCCwIcAjkCAQECBAgBCQEKAh0BSAEEAQIDAQEIAVEBAgcMCGIBAgkLB0kCGwEBAQEBNw4BBQECBQsBJAkBZgQBBgECAgIZAgQDEAQNAQICBgEPAQADAAMdAh4CHgJAAgEHCAECCwkBLQMBAXUCIgF2AwQCCQEGA9sCAgE6AQEHAQEBAQIIBgoCATAfMQQwBwEBBQEoCQwCIAQCAgEDOAEBAgMBAQM6CAICmAMBDQEHBAEGAQMCxkAAAcMhAAONAWAgAAZpAgAEAQogAlACAAEDAQQBGQIFAZcCGhINASYIGQsuAzABAgQCAicBQwYCAgICDAEIAS8BMwEBAwICBQIBASoCCAHuAQIBBAEAAQAQEBAAAgAB4gGVBQADAQIFBCgDBAGlAgAEAAJQA0YLMQR7ATYPKQECAgoDMQQCAgcBPQMkBQEIPgEMAjQJCgQCAV8DAgEBAgYBAgGdAQMIFQI5AgEBAQEWAQ4HAwXDCAIDAQEXAVEBAgYBAQIBAQIBAusBAgQGAgECGwJVCAIBAQJqAQEBAgYBAWUDAgQBBQAJAQL1AQoCAQEEAZAEAgIEASAKKAYCBAgBCQYCAy4NAQIABwEGAQFSFgIHAQIBAnoGAwEBAgEHAQFIAgMBAQEAAgsCNAUFAQEBAAEGDwAFOwcAAT8EUQEAAgAuAhcAAQEDBAUICAIHHgSUAwA3BDIIAQ4BFgUBDwAHARECBwECAQVkAaAHAAE9BAAEAAdtBwBggPAATGF5b3V0c2l6ZWFsaWduAABFAAAABAAAAAQAAABUAAAASQAAAAQAAAAEAAAATQAAAE5vbmVTb21lSQAAAAQAAAAEAAAAVQAAAEkAAAAEAAAABAAAAFYAAABCT09MRUFOSU5URUdFUkJJVCBTVFJJTkdPQ1RFVCBTVFJJTkdOVUxMT0JKRUNUIElERU5USUZJRVJSRUFMRU5VTUVSQVRFRFVURjhTdHJpbmdTRVFVRU5DRVNFVE51bWVyaWNTdHJpbmdQcmludGFibGVTdHJpbmdUZWxldGV4U3RyaW5nVmlkZW90ZXhTdHJpbmdJQTVTdHJpbmdVVENUaW1lR2VuZXJhbGl6ZWRUaW1lVmlzaWJsZVN0cmluZ0JNUFN0cmluZ0FQUExJQ0FUSU9OIFtdICggJBAADQAAAC0kEAADAAAANI8QAAEAAABwcmltaXRpdmVjb25zdHJ1Y3RlZEgkEAAJAAAAUSQQAAsAAABDT05URVhULVNQRUNJRklDIFsAAGwkEAASAAAALSQQAAMAAAA0jxAAAQAAAFBSSVZBVEUgWwAAAJgkEAAJAAAALSQQAAMAAAA0jxAAAQAAAFRhZygweAAAvCQQAAYAAACPjxAAAgAAADSPEAABAAAAIGF0IERFUiBieXRlIAAAANwkEAANAAAAZGF0ZS90aW1lIGVycm9yAPQkEAAPAAAAb3BlcmF0aW9uIGZhaWxlZAwlEAAQAAAAZmlsZSBub3QgZm91bmQAACQlEAAOAAAAQVNOLjEgREVSIG1lc3NhZ2UgaXMgaW5jb21wbGV0ZTogZXhwZWN0ZWQgLCBhY3R1YWwgADwlEAAqAAAAZiUQAAkAAABJL08gZXJyb3I6IACAJRAACwAAAGluZGVmaW5pdGUgbGVuZ3RoIGRpc2FsbG93ZWSUJRAAHAAAAGluY29ycmVjdCBsZW5ndGggZm9yIAAAALglEAAVAAAAQVNOLjEgIG5vdCBjYW5vbmljYWxseSBlbmNvZGVkIGFzIERFUgAAANglEAAGAAAA3iUQAB8AAABtYWxmb3JtZWQgT0lEAAAAECYQAA0AAAB1bmtub3duL3Vuc3VwcG9ydGVkIE9JRDogAAAAKCYQABkAAABTRVQgT0YgY29udGFpbnMgZHVwbGljYXRlAAAATCYQABkAAABTRVQgT0Ygb3JkZXJpbmcgZXJyb3IAAABwJhAAFQAAAGludGVnZXIgb3ZlcmZsb3eQJhAAEAAAAEFTTi4xIERFUiBtZXNzYWdlIGlzIHRvbyBsb25nAAAAqCYQAB0AAABQRU0gZXJyb3I6IADQJhAACwAAAEyMEAARAAAAcmVhZGVyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHJlcXVlc3RlZCBvcGVyYXRpb24A7CYQAC8AAAB1bmtub3duIHRhZyBtb2RlJCcQABAAAABpbnZhbGlkIHRhZyBudW1iZXIAADwnEAASAAAAdW5leHBlY3RlZCBBU04uMSBERVIgdGFnOiAAAFgnEAAaAAAAZXhwZWN0ZWQgLCAAfCcQAAkAAACFJxAAAgAAAGdvdCCYJxAABAAAAHVua25vd24vdW5zdXBwb3J0ZWQgQVNOLjEgREVSIHRhZzogMHgAAACkJxAAJQAAAHRyYWlsaW5nIGRhdGEgYXQgZW5kIG9mIERFUiBtZXNzYWdlOiBkZWNvZGVkICBieXRlcywgIGJ5dGVzIHJlbWFpbmluZwAAANQnEAAtAAAAASgQAAgAAAAJKBAAEAAAAG1hbGZvcm1lZCBBU04uMSBERVIgdmFsdWUgZm9yIAAANCgQAB4AAABFcnJvcmtpbmQAAABJAAAALAAAAAQAAABXAAAAcG9zaXRpb25JAAAABAAAAAQAAABYAAAARGF0ZVRpbWVGYWlsZWRGaWxlTm90Rm91bmRJbmNvbXBsZXRlZXhwZWN0ZWRfbGVuSQAAAAQAAAAEAAAAWQAAAGFjdHVhbF9sZW4AAEkAAAAEAAAABAAAAFYAAABJbwAASQAAAAQAAAAEAAAAFAAAAEluZGVmaW5pdGVMZW5ndGh0YWcASQAAAAQAAAAEAAAAVQAAAE5vbmNhbm9uaWNhbE9pZE1hbGZvcm1lZEkAAAAEAAAABAAAAFoAAABTZXREdXBsaWNhdGVTZXRPcmRlcmluZ092ZXJmbG93T3Zlcmxlbmd0aFBlbUkAAAAEAAAABAAAAFsAAABSZWFkZXJUYWdNb2RlVW5rbm93blRhZ051bWJlckludmFsaWRUYWdVbmV4cGVjdGVkAAAAXAAAAAMAAAABAAAAXQAAAGFjdHVhbFRhZ1Vua25vd25ieXRlSQAAAAQAAAAEAAAASgAAAFRyYWlsaW5nRGF0YWRlY29kZWRyZW1haW5pbmdVdGY4SQAAAAQAAAAEAAAAXgAAAFZhbHVlAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAOQAAAAAAAAABAAAARAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NoYTEtMC4xMC42L3NyYy9saWIucnMAAFAqEABeAAAAcQAAABMAAABVbmtub3duIEpTT04gaXRlbQoAAMAqEAASAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL3NpZ25hdHVyZV92ZXJpZmllci5ycwAA3CoQAC4AAAA1AAAAMgAAAJ4QAgaoYc6J1fzqjbc9WtBLdEw+sUAA+h5nwPG/Mzo0/x5OvoFoy3GeoJm9up4/0o5sfajSWD31YbsLi2/nzZlMHINTsXGRoY2HHKpNaubySQUN0TPhdT3vjfnPeIhbTdBdZwRY+KXiNCguU5u2HXtanM1bL+iFANopq/wsoEKNAAEAAdwqEAAuAAAAUAAAAAoAAADcKhAALgAAAFEAAAAKAAAAY29udHJhY3Rfc2lnbmF0dXJlAADcKhAALgAAAFsAAAAKAAAA3CoQAC4AAABcAAAACgAAANwqEAAuAAAAZAAAAAoAAADcKhAALgAAAGUAAAAKAAAA3CoQAC4AAABeAAAAFAAAANwqEAAuAAAAUwAAABUAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAA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YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const g = hc();
  (typeof o == "string" || typeof Request == "function" && o instanceof Request || typeof URL == "function" && o instanceof URL) && (o = fetch(o));
  const { instance: t, module: e } = await uc(await o, g);
  return fc(t, e);
}
function xt(o, g, t, e, A) {
  return QA(t - -513, g);
}
function gg() {
  const o = ["tmkuW7hcTIi", "W5eJDmoYDW", "z8osu8kMW68blCoOW5VcSW/dNW", "zComnddcVq", "cCoGWPxcVbefW6e", "W5FdNrpcUNJcIGvrW53dQmoZ", "AmorjZRcTW", "DG7cRmopW5S9EepcOG", "l11xWRaKEajZWRTKCge", "i8kkfSo5", "W6RcKSozWO3dVMddOCo1bq", "hqlcJ8keoG", "yJzrW743", "hGRcJ8kena", "yH56W5rHnCkhiColBSopuG", "W48JA8o2ra", "WRpdG8ktWPJdKG", "sCoDW6hcSca", "gCk1WOC1", "eCkVWOCUkq", "n8kbAM7dQSk1dGOeASkGsq", "WRtcGSkiW77cP2JcJNa", "W5NcUmoLmXm9WOJdNCok", "WO3dNIiaWQC", "WPhdKIShWQK", "WPtdMJ0lWRC", "W5ZdQSkhocmnWRi", "xbZcMSkEnG", "qerhW5ZdV8oEW7ZcMJSt", "FSo2W59DmKpcQd3cLSoe", "lvxdSSosW7q", "v8oUWQFcLJe", "vSoKWRtcGhq", "W6JcHCoiW4G7", "b8k6WP0SdG", "CMBdJCkJWOC", "W50MoCk7xq", "k1bzWRyNEgPqWQXdy1aO", "W7NcPfXUrgiEWPvo", "e8oPW6npvfVdOdPyWRtcT8on", "W7/dJmkgWO/cLG", "Ab9YW5zGmSo5c8oKxSojqSoQ", "W6pdLhpcOSkIW4FcL3m", "WRNdTfFcGCoAy8ksW7rpyCorla", "nfFdR8osW5O", "W5/cJ8k+cgr4xqyTBSkv", "pH1nfCo5FXpdPmodfCkaE8k4", "W47dKmoUuJW", "hSkYWPOOjG", "zHfzW7GX", "W5eXt8o6FG", "W7/dICkbWPJdLq", "W47dN8oHuIq", "owegWQz3W74QW7SQcvBcS8kA"];
  return gg = function() {
    return o;
  }, gg();
}
(function(o, g) {
  function t(I, a, r, Q, C) {
    return QA(C - -264, I);
  }
  function e(I, a, r, Q, C) {
    return QA(a - -501, I);
  }
  const A = o();
  function i(I, a, r, Q, C) {
    return QA(I - -252, r);
  }
  function n(I, a, r, Q, C) {
    return QA(C - 110, a);
  }
  for (; ; )
    try {
      if (-parseInt(i(250, 230, "idpB", 235, 239)) / 1 * (-parseInt(i(246, 230, "n$yM", 224, 235)) / 2) + parseInt(e("Fob)", -5, -2, -32, 4)) / 3 + -parseInt(e("4XkO", 0, 23, -15, 13)) / 4 * (-parseInt(e("FwHl", -33, -47, -57, -20)) / 5) + -parseInt(n(587, "i(qq", 616, 636, 609)) / 6 * (-parseInt(i(226, 232, "Z*gI", 247, 213)) / 7) + -parseInt(t("E^N3", 197, 199, 199, 218)) / 8 * (-parseInt(n(601, "wC%2", 609, 564, 589)) / 9) + -parseInt(i(241, 227, "(s!Q", 223, 214)) / 10 + -parseInt(e(")Mbt", -15, 4, -21, -9)) / 11 === g) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(gg, -332320 + -923 * -607);
function hI(o, g, t, e, A) {
  return QA(g - -875, o);
}
function ao(o, g, t, e, A) {
  return QA(g - -988, o);
}
function QA(o, g) {
  const t = gg();
  return QA = function(e, A) {
    e = e - (-6148 + -25 * -318 + -667 * 2);
    let i = t[e];
    if (QA.hoeFZI === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      QA.VUOUwJ = Q, o = arguments, QA.hoeFZI = !0;
    }
    const I = t[-7290 + -243 * -30], a = e + I, r = o[a];
    return r ? i = r : (QA.Ndcrtf === void 0 && (QA.Ndcrtf = !0), i = QA.VUOUwJ(i, A), o[a] = i), i;
  }, QA(o, g);
}
function ro(o, g, t, e, A) {
  return QA(g - 829, o);
}
var pI;
class pc {
  constructor() {
    w(this, pI, !1);
  }
  async [(pI = ao(")^$[", -515) + ro("^^Qs", 1317) + hI("qIkX", -375), xt(-13, "^^Qs", -1))](g) {
    function t(I, a, r, Q, C) {
      return ro(r, I - -1454);
    }
    function e(I, a, r, Q, C) {
      return xt(I - 492, r, a - 1);
    }
    function A(I, a, r, Q, C) {
      return ao(r, Q - 270);
    }
    function i(I, a, r, Q, C) {
      return xt(I - 94, Q, I - 57);
    }
    function n(I, a, r, Q, C) {
      return xt(I - 16, r, C - 263);
    }
    try {
      const I = g + (n(292, 263, "xV#*", 287, 271) + "/") + _n;
      await wa(I), this[n(271, 259, "gzR(", 263, 259) + n(245, 277, "xV#*", 237, 255) + t(-155, -164, "KurR", -163, -157)] = !0;
    } catch {
      this[n(243, 227, "^^Qs", 214, 224) + e(-22, -37, "&ikt") + A(-198, -229, "pAUh", -208)] = !1, console[A(-198, -226, "Fob)", -215)](_n + (i(36, 39, 53, "1J4z") + n(251, 267, "BTI5", 282, 268) + A(-181, -187, "^^Qs", -205) + A(-252, -251, "1J4z", -231) + n(248, 215, "gzR(", 202, 226) + A(-264, -253, "n$yM", -247) + e(6, -21, "pAUh") + t(-131, -140, "1eU[") + A(-193, -199, "BTI5", -201) + t(-128, -150, "qIkX") + t(-145, -148, "pAUh") + t(-153, -148, "n$yM") + n(234, 232, "(s!Q", 238, 256) + t(-118, -99, "xV#*") + "n."));
    }
  }
  [ao("gzR(", -498) + ro("(s!Q", 1318) + hI("gzR(", -380) + "ed"]() {
    function g(A, i, n, I, a) {
      return xt(A - 86, I, n - 662);
    }
    function t(A, i, n, I, a) {
      return ao(a, A - 1011);
    }
    function e(A, i, n, I, a) {
      return ro(A, n - 140);
    }
    return this[e("4XkO", 1462, 1453) + g(661, 668, 660, "1eU[") + t(542, 541, 541, 520, "BTI5")];
  }
}
class Tg extends Error {
  constructor() {
    super(...arguments);
    w(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function yc(o, g, t, e, A) {
  return _(g - 116, A);
}
function Co(o, g, t, e, A) {
  return _(g - -334, e);
}
function Le(o, g, t, e, A) {
  return _(A - 451, t);
}
function ce(o, g, t, e, A) {
  return _(A - -602, o);
}
(function(o, g) {
  var t = o();
  function e(a, r, Q, C, x) {
    return _(a - 239, C);
  }
  function A(a, r, Q, C, x) {
    return _(a - -462, C);
  }
  function i(a, r, Q, C, x) {
    return _(r - 790, x);
  }
  function n(a, r, Q, C, x) {
    return _(a - 827, C);
  }
  for (; ; )
    try {
      var I = -parseInt(i(1041, 1030, 1060, 1029, "^&O4")) / 1 * (parseInt(i(1083, 1072, 1076, 1050, "5[$W")) / 2) + parseInt(e(498, 490, 524, "iw[1", 495)) / 3 * (parseInt(A(-188, -208, -218, "Zup3", -211)) / 4) + parseInt(n(1075, 1086, 1080, "oGyV", 1068)) / 5 + parseInt(n(1113, 1093, 1086, "yL!]", 1127)) / 6 + parseInt(n(1071, 1095, 1057, "MSQG", 1046)) / 7 * (parseInt(i(1022, 1032, 1058, 1027, "eEu9")) / 8) + -parseInt(i(1082, 1062, 1055, 1057, "*AK3")) / 9 + -parseInt(n(1082, 1082, 1093, "ECGt", 1075)) / 10;
      if (I === g) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(ig, -248282 * -2 + 4835 * -141 + -281 * -3193);
function Bo(o, g, t, e, A) {
  return _(A - -792, t);
}
var qe, Tt;
class fI {
  constructor(g) {
    O(this, qe);
    O(this, Tt);
    this[n(-375, -373, -374, -381, "HdvW") + n(-362, -378, -352, -340, "eEu9")] = g;
    function t(I, a, r, Q, C) {
      return _(C - -364, r);
    }
    function e(I, a, r, Q, C) {
      return _(r - 896, I);
    }
    function A(I, a, r, Q, C) {
      return _(I - -189, C);
    }
    function i(I, a, r, Q, C) {
      return _(I - -593, C);
    }
    function n(I, a, r, Q, C) {
      return _(I - -614, C);
    }
    try {
      W(this, qe, g[i(-337, -368, -331, -368, "bK@k") + n(-336, -327, -355, -352, "UPIJ") + t(-103, -98, "yL!]", -119, -97)] && JSON[n(-320, -320, -331, -312, "qLLY")](g[n(-350, -371, -326, -357, "qLLY") + i(-318, -347, -334, -301, "MSQG") + i(-332, -338, -310, -321, "6aCP")])), W(this, Tt, g[i(-327, -304, -299, -315, "5[$W") + e("BFB4", 1193, 1187, 1202, 1202)]);
    } catch (I) {
      console[A(99, 127, 101, 106, "CmI%")](I);
    }
  }
  get [ce("Zup3", -321, -320, -323, -326) + "id"]() {
    function g(e, A, i, n, I) {
      return ce(i, A - 98, i - 352, n - 385, I - 482);
    }
    function t(e, A, i, n, I) {
      return ce(n, A - 269, i - 225, n - 118, A - 780);
    }
    return this[t(419, 427, 449, "Y3[O") + t(456, 458, 480, "*0$i")][g(181, 168, "iw[1", 171, 164) + t(459, 429, 414, "lIzJ")];
  }
  get [Le(707, 735, "^&O4", 694, 713) + "s"]() {
    function g(A, i, n, I, a) {
      return ce(a, i - 453, n - 301, I - 241, I - 886);
    }
    function t(A, i, n, I, a) {
      return Le(A - 92, i - 66, A, I - 31, a - 243);
    }
    function e(A, i, n, I, a) {
      return Le(A - 169, i - 13, n, I - 71, i - -209);
    }
    return this[g(556, 526, 574, 554, "cTsp") + t("mej*", 959, 992, 972, 989)][e(500, 487, "ubO#", 491) + "s"];
  }
  get [Le(665, 658, "g7Gm", 684, 688) + ce("Zup3", -281, -335, -332, -305)]() {
    function g(e, A, i, n, I) {
      return Le(e - 231, A - 417, A, n - 452, e - -317);
    }
    function t(e, A, i, n, I) {
      return ce(i, A - 381, i - 394, n - 8, I - -20);
    }
    return this[t(-363, -362, "cTsp", -352, -352) + g(423, "oGyV", 452, 398)][g(371, "g7Gm", 382, 400) + g(380, "yL!]", 391, 397)];
  }
  get [ce("Zup3", -334, -364, -340, -352) + "b"]() {
    return y(this, qe);
  }
  get [Bo(-531, -508, ")M)3", -526, -515) + Bo(-525, -484, "(ild", -497, -511)]() {
    return y(this, Tt);
  }
  get [Co(-93, -91, -70, "CmI%") + Co(-45, -38, -61, "yL!]") + Le(712, 687, "rOX]", 688, 705) + Bo(-527, -499, "@Iu1", -504, -505)]() {
    var i, n;
    function g(I, a, r, Q, C) {
      return Co(I - 281, a - 128, r - 66, I);
    }
    function t(I, a, r, Q, C) {
      return Bo(I - 442, a - 416, r, Q - 42, I - 672);
    }
    function e(I, a, r, Q, C) {
      return yc(I - 106, r - 379, r - 334, Q - 437, C);
    }
    function A(I, a, r, Q, C) {
      return Co(I - 348, I - 263, r - 194, a);
    }
    return !!((n = (i = y(this, qe)) == null ? void 0 : i[A(200, "CmI%", 209) + A(221, "Zup3", 208)]) != null && n[e(755, 739, 768, 741, "@Iu1") + t(165, 182, "BFB4", 152) + A(197, "IlP^", 223) + e(813, 791, 785, 797, "iw[1") + e(717, 755, 733, 724, "iw[1") + t(137, 142, "BFB4", 114) + g("s0]F", 59, 66) + "d"]);
  }
}
qe = new WeakMap(), Tt = new WeakMap();
function _(o, g) {
  var t = ig();
  return _ = function(e, A) {
    e = e - (709 * -11 + 8101 + -65);
    var i = t[e];
    if (_.npVzEy === void 0) {
      var n = function(C) {
        for (var x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", c = "", E = "", l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (var m = 0, R = c.length; m < R; m++)
          E += "%" + ("00" + c.charCodeAt(m).toString(16)).slice(-2);
        return decodeURIComponent(E);
      }, I = function(C, x) {
        var c = [], E = 0, l, u = "";
        C = n(C);
        var s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (var h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      _.kfUMQN = I, o = arguments, _.npVzEy = !0;
    }
    var a = t[-6965 + 6965 * 1], r = e + a, Q = o[r];
    return Q ? i = Q : (_.EZsZla === void 0 && (_.EZsZla = !0), i = _.kfUMQN(i, A), o[r] = i), i;
  }, _(o, g);
}
function ig() {
  var o = ["W6KmWRzHWQi", "WOfWW5OUsq", "zJmbxSkm", "WQRdSmoiuGBdRKaDxmoM", "W53cP05jW6r8FWy", "W5C1WQ8NW50UW4Sk", "agb8WQFcPq", "WO5evXavgrHzW7lcVa52ca", "mWKMWRaK", "W7NdSmo3", "DmkEWQ0AC8kmWQldNmkrdq", "C8kEWQ0FdCoYWQZdR8keiI/dHW", "WO9JWPJcPCkB", "rCkobmkHWR8", "wmktqW", "WO5IWQWgW4W", "W6NdSCkMWQ3dMbWsWRpcSWudW71B", "WOuuoMJcGa", "WPxcIH4zt8oEWP3cJ8kle8kJWQZcKW", "dHWQW5ldMG", "mSoQWQ/cImkc", "WQtcO8k0WQfBAmoGWQSLzCkys8kJ", "W5i5W7CRCCk0kSog", "f8oymSkbWPyxW7WI", "W63cPe4", "W77cTSkidZO", "WPfwB2xdLmopy8kqWOvWW6BdJa", "WRShWQq+WOa", "W5VdQmkhCmov", "bczJySoM", "W6tdUmoQ", "WRhcHCktbYS", "ymkxzYtdO3v3W7pcNmk0W7NdMt0", "FmkQWOdcL8o6", "d3zCWR3cSq", "W7ipCmkBWRHxoCktW7lcHCk9WPObW5m", "W5P+W6ikW5q", "fSorr8ofW6WTW5qCydVcIq", "W4GvhxXl", "smksjSkxWRy", "CfddImkDWRS", "EXLKpJu", "W6ffrCkwgSkEWQBdMSoVWPBcPa", "WRJdLfWrdq", "EutdMq", "vgCOCSoNwqFdTr8", "W6hdM8oru3XNW78OW5dcH0D0sSk4", "WO1ZW6OQxa", "mSoPWQ3cMmkz", "WQtcOCkXWQnFBCoGWRaGwCkXtmkD", "W4P3W6yc", "ah1BWQy", "lColW6Tlvq", "WPbPW5OYBW", "nSoHWRO", "u8keaW", "W6pdN8oyaIypWOrTW4S", "WQ0dWRC5WPa", "WQe0W60dnW", "W7VdRSoWW7Kn", "t8kgaW"];
  return ig = function() {
    return o;
  }, ig();
}
function uA(o, g, t, e, A) {
  return eA(o - -334, A);
}
function JA(o, g, t, e, A) {
  return eA(A - 448, o);
}
function ng() {
  const o = ["WRtdLmk+W7Lw", "FSouW6zFW4i", "WQxdKSkYW5Tl", "cCoNqddcUa", "WQRdGCkK", "gaPgW4/cQq", "W5WqW6lcSKSiW5RcHapdOmo8AL8", "pmkVha", "AmosW7TDW5u", "DaPjW41w", "aWWcWO/dHW", "W7pcUWG", "Amo0ErbV", "W6/cVH3cJCko", "lSonEMpcKq", "WQXaWRRcJG", "W6WuWP4kW78", "wCoTWPNdJJq", "WOJdJ8k0W7jm", "iSksWOpcRSk5Fx9D", "ACodW6DVW5O", "W6FdKCk2", "W5L+W7JdRSoM", "D8ojW7m", "swhdL8oaeq", "W6q/W7JdRSo/", "W69BWOiGW6O", "WONcHwdcSG", "W4pcQNTuW6K", "x8oydmo5WRG", "W78vWRtdSmo2pwtcMa", "BSoOzqy8", "cmkfr8kiW6RdKxhdHx5moG", "EColWPpcM8kr", "W6CdDWBdLCoNWQlcRq", "aaeQWRddNq", "e8kJsgTY", "CLrYW5DS", "W4xcRSo9EHa", "WPCfgCkUyq", "ibjDW6VcNG", "E8olWP3cL8ku", "W4mXWRtdG8ok", "W47cOmoNBqO", "WPCfh8k2Fa", "WPpcGba", "WOizbCk9wa", "WQXaWRJdGCop", "WP1sjs0", "o0i7rmkd", "W7hcHColWR8S", "WRHFwIBdOq", "FxldI8oEqG", "eHfaW48", "WRDtEJVdSa", "lSoAE2pcHW", "FmobWOZcKmkg", "W7xcJCoCWRKQ", "rCkzWQKklW", "ntaDWOxdVW", "FmofdmotWQS", "W4/cHJRcMCkR", "umkdtdr9", "WQRcGmo/WP4LWOmvBeqPca4", "WQ04W7VdSSoR", "W7ldJCkVW5K", "WRBdJSk2W5Py", "x8khtbn6", "ASkLeqdcPG", "W6tdG1VcHCkb", "W63dK8kJWRpdKG", "ugDRW6Xb", "W4CBB8kuuG", "uciUmmoR", "W4OFeSoQWRa", "j8krW5VdH8oce1XjjSkMyZ0", "W6ioouxdGCoOWQpcPmkbuq", "tIuCqxxcH8oXdmkzW6W", "F8kBjINdG8kFWQeJgI8Rsa", "WPhcIbS/W6C", "mmkTaue", "W63dMCkXWPFdIG", "WPtcGGCjW6m", "sc4FqrxdKCoLmSkAW68ioG", "W6/dKedcLCkA", "BSowdCorW7K", "W6tcPGGjja", "W7RcLSoqWQ83", "mSosW47cSa", "W7BcIdZdL8kR", "WQhdLmkLW7Hq", "WPhcNXO/W7e", "W7ylv8k7zW", "WPpdH8kLW7Ll", "W74reSoh", "xYLpWOWM", "eq1wW4/cLW", "F8oNWPFdKce", "W7tcJJlcKSkM", "WOykW4WReG", "W7ZcLSonWRm2", "umoyea", "W6udzSkvqa", "vCoEhCozWRC", "ECoyWReaja", "W7xcI8oEWRGi", "WQifbmk3EG", "r8kuur5M", "WQbeWQRdG8os", "W6WWW4hdKSoP", "WOWJW5DrWQu", "WQrmWR3dHCou", "WO1jWQldGba", "W6tcSaaqda", "puGRzCkl", "WRddG8kVW6m", "D8oyxSo4WPy", "i8owW4JcVqi", "WQradJnp", "W4TVrX3dKq", "q33dKCoh", "WOSFW7CwlG", "E8kpwXv8", "WQflWRJdJW", "ECodW7buW5u", "W7VdNSkMW79O", "t8oweSovWR0", "hqbaW4tcTa", "W6tcTSozAtm", "EvHI", "kSonyfZcNq", "W6GwsSo1EG", "WOnZFZJcIq", "s8o6WPtdHcu", "WQr3WRtdKHu", "W77cGColWPGR", "WPewgSkXBa", "W54lW5LjWQ4", "W6ddLCkGWRZdLa", "WQvxErRdLa", "WRPrxbyW", "A8ohW6zdW5u", "B8o8W5L5W4a", "WR8YzZlcGG", "xIukC8ov", "WRHpg8oie3nHomoyD8koBJ9n", "W6xdN8kMWRFdIq", "WOqcbCkSzW", "muO8", "dmkbsSklW6/cLYldOKbnm8koFG", "WQ9aWQRdPmov", "sWHWWRyI", "WOtdNSkrFa", "WOxdKmkFv8kP", "W70AWP4HW7C", "xuRdRCojlG", "W6mvWOOG", "W6OqxCkWFq", "smkwWQ4mzW", "W5O/W6BdQCoS", "WPOzW6KCoa", "fhXFeeu", "W6S7W7xdS8oW", "frDaW6BcRG", "WOJcHhRcSSkl", "WPZcIGy", "W6xcSrWhiW", "scLiW5W8", "tSkkWRiAna", "W64RW6FdS8oQ", "p8oaDv3cJG", "W5zft8oSoW/dM8otzCoMWPe", "nmokW71tW5u", "k8oCW4JdVGm", "xHrQWR12", "W7zxvWWL", "gGPrW4pcPG", "WPCEW6fDWRm", "qa5vW5bO", "cW0JAmkn", "FSkLfG", "wr99WRWZ", "W6e3W7FdOSoR", "W48Em8o6WRe", "WPTnW5HtWRq", "W77cGJZcLmkQ", "W6xdMCkIWPFdLq", "s8kxWQGhiW", "DLrOW6HG", "W4izbCokWRm", "W7qJW45aW4a", "WP7dNSkkFa", "WOv1Ea", "W7znsGW4", "ASo5ev5XW6pdHIe", "vSkkvcn3", "WPmcW6ewlG", "WOZcGMRcO8kl", "pLKNCG", "W6RdKf3cMa", "WRPsiYTh", "gSojz33dLa", "WPiIW7uApG", "W5tcK8o2xcm", "W4axfq", "W68vWP8QWR4", "nYCBWQNdUa", "tSowdmosWRa", "WO7cGN3cR8ke", "o8kJhufz", "W6VdNLpcS8ka", "W4SJW48", "WPOiW5is", "WOPXFW", "W4ZcSxDcW7q", "WOSdoSkXAW", "WP0FW5LpWRm", "pmkQBZ0hrrGT", "WRxcQmkmewG", "W4m0W49AW54", "W7LrwH05", "W4n0FZhdNW", "W6RdK8kRWQhdGG", "D1rIW79G", "W5xcPqiNdW", "aKmHW6XVxrXfWPVdMwhdVG", "q33dNSoC", "uSkisXvc", "W4pdLur4WRldPNBcHdukW5S4W4H8", "W4zJvJBdJW", "hrbYW4VcTa", "W5zhe8kqqdNdQCoj", "W4NcUxHoW6a", "W6OwxCk0zW", "omkOeLLN", "WRpcGGddHmokWPBcGuNdRCo9WOid", "WO0eW6K", "lCkTgLXy", "W5NcK25VW4i", "WRhdH8kGW7PV", "W4NcTNejW7y", "mv4Ql8kc", "W4mvfa", "kCoAW5/cUWq", "F8kLcG", "iCkBW5hdISoceh9UkSkdsrW", "W6SpWOq8", "EwDxW5b/", "WO8waSk7ya", "iqG+WQ8YW4NdVd9qk094", "W6ZcSqG", "qsHAW51q", "WQbeyqhdSa"];
  return ng = function() {
    return o;
  }, ng();
}
function qA(o, g, t, e, A) {
  return eA(t - -255, A);
}
(function(o, g) {
  function t(a, r, Q, C, x) {
    return eA(a - 625, x);
  }
  function e(a, r, Q, C, x) {
    return eA(C - 289, a);
  }
  const A = o();
  function i(a, r, Q, C, x) {
    return eA(x - -694, Q);
  }
  function n(a, r, Q, C, x) {
    return eA(a - -805, Q);
  }
  function I(a, r, Q, C, x) {
    return eA(r - 913, C);
  }
  for (; ; )
    try {
      if (parseInt(I(1129, 1227, 1115, "Y7My", 1133)) / 1 + parseInt(I(917, 1041, 1031, "KW#!", 978)) / 2 + -parseInt(e("RmEa", 747, 728, 641, 634)) / 3 * (parseInt(e("7g4w", 531, 451, 432, 555)) / 4) + parseInt(n(-468, -515, "MyL8", -549, -529)) / 5 * (parseInt(i(-498, -538, "X3Xj", -526, -546)) / 6) + parseInt(i(-282, -430, "XSYy", -417, -344)) / 7 * (-parseInt(I(1112, 1055, 1017, "X3Xj", 1062)) / 8) + -parseInt(t(839, 901, 759, 737, "XSYy")) / 9 + parseInt(n(-523, -589, "2SMM", -617, -474)) / 10 * (parseInt(I(1210, 1123, 1146, "3Yo3", 1071)) / 11) === g) break;
      A.push(A.shift());
    } catch {
      A.push(A.shift());
    }
})(ng, 2693069 + 83 * -21449);
function T(o, g, t, e, A) {
  return eA(A - -709, o);
}
function eA(o, g) {
  const t = ng();
  return eA = function(e, A) {
    e = e - (-6957 + -4935 * -2 + -2785 * 1);
    let i = t[e];
    if (eA.bJKoZv === void 0) {
      var n = function(C) {
        const x = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let c = "", E = "";
        for (let l = 0, u, s, h = 0; s = C.charAt(h++); ~s && (u = l % 4 ? u * 64 + s : s, l++ % 4) ? c += String.fromCharCode(255 & u >> (-2 * l & 6)) : 0)
          s = x.indexOf(s);
        for (let l = 0, u = c.length; l < u; l++)
          E += "%" + ("00" + c.charCodeAt(l).toString(16)).slice(-2);
        return decodeURIComponent(E);
      };
      const Q = function(C, x) {
        let c = [], E = 0, l, u = "";
        C = n(C);
        let s;
        for (s = 0; s < 256; s++)
          c[s] = s;
        for (s = 0; s < 256; s++)
          E = (E + c[s] + x.charCodeAt(s % x.length)) % 256, l = c[s], c[s] = c[E], c[E] = l;
        s = 0, E = 0;
        for (let h = 0; h < C.length; h++)
          s = (s + 1) % 256, E = (E + c[s]) % 256, l = c[s], c[s] = c[E], c[E] = l, u += String.fromCharCode(C.charCodeAt(h) ^ c[(c[s] + c[E]) % 256]);
        return u;
      };
      eA.hKiQHD = Q, o = arguments, eA.bJKoZv = !0;
    }
    const I = t[8124 + 6 * -1354], a = e + I, r = o[a];
    return r ? i = r : (eA.YcSkMK === void 0 && (eA.YcSkMK = !0), i = eA.hKiQHD(i, A), o[a] = i), i;
  }, eA(o, g);
}
function mA(o, g, t, e, A) {
  return eA(g - -721, A);
}
var yI, DI, wI;
class Dc {
  constructor(g) {
    w(this, wI);
    w(this, DI, [uA(-129, -115, -109, -151, "vv^H") + T("L8Oc", -473, -337, -292, -404) + "ic", mA(-464, -484, -365, -441, "CnRQ") + qA(60, 154, 51, -7, "[BWA") + "ic"]);
    w(this, yI);
    function t(A, i, n, I, a) {
      return eA(a - -750, A);
    }
    function e(A, i, n, I, a) {
      return eA(A - 466, i);
    }
    this[e(650, "O97B") + t("MMJp", -422, -458, -540, -504) + "d"] = g;
  }
  async [(wI = T("V%Pc", -406, -298, -310, -386) + "se", DI = T("pJ1o", -308, -420, -247, -344) + mA(-320, -441, -380, -369, "XNqE") + T("XNqE", -419, -438, -393, -345) + mA(-531, -410, -445, -293, "eW6O"), yI = qA(-214, -202, -99, -26, "ItUx") + uA(-202, -98, -175, -152, "4GS]"), T("S%&p", -485, -385, -284, -364))](g) {
    function t(a, r, Q, C, x) {
      return JA(r, r - 138, Q - 312, C - 214, a - -1445);
    }
    function e(a, r, Q, C, x) {
      return uA(x - -293, r - 184, Q - 402, C - 406, C);
    }
    const A = await this[e(-494, -468, -505, "7g4w", -432) + t(-710, "Zf2K", -619, -750) + t(-838, "WJfZ", -889, -896)](g);
    await Promise[i(846, 967, 782, "4GS]") + t(-811, "MENe", -791, -743)]([this[e(-587, -471, -491, "WJfZ", -488) + i(765, 709, 702, "[BWA") + "d"][t(-812, "&GC&", -726, -806)](g), this[n(-564, "4UL%", -544, -574) + t(-794, "Zf2K", -764, -813) + "e"](A)]);
    function i(a, r, Q, C, x) {
      return qA(a - 322, r - 254, a - 841, C - 465, C);
    }
    function n(a, r, Q, C, x) {
      return mA(a - 208, Q - 7, Q - 62, C - 147, r);
    }
    function I(a, r, Q, C, x) {
      return uA(a - 1289, r - 81, Q - 377, C - 324, r);
    }
    this[n(-572, "XNqE", -513, -488) + e(-523, -275, -480, "V%Pc", -399) + I(1208, "Y7My", 1103, 1164)]();
  }
  async [T("kvM!", -470, -601, -638, -527) + mA(-386, -385, -383, -381, "#P%i") + "se"](g) {
    var n;
    function t(I, a, r, Q, C) {
      return JA(C, a - 233, r - 241, Q - 205, r - -961);
    }
    function e(I, a, r, Q, C) {
      return uA(a - -276, a - 121, r - 23, Q - 91, r);
    }
    function A(I, a, r, Q, C) {
      return T(r, a - 459, r - 108, Q - 91, I - -185);
    }
    function i(I, a, r, Q, C) {
      return mA(I - 221, r - 488, r - 264, Q - 298, I);
    }
    try {
      if (t(-246, -367, -353, -291, "MMJp") === t(-262, -201, -186, -65, "H@g@")) {
        const I = _0x198a88[i("P@O3", 143, 69, 80, -32)](this[A(-683, -737, "Zf2K", -750, -648) + "se"]);
        return (n = I == null ? void 0 : I[e(-405, -370, "vv^H", -470, -492) + t(-355, -202, -235, -121, "GjuS")]) == null ? void 0 : n[t(-177, -402, -279, -198, "*R*8") + t(-272, -337, -237, -258, "ciG7")];
      } else {
        const I = await fetch(g);
        if (!I.ok) {
          if (t(-151, -159, -245, -206, "xDG2") !== t(-238, -331, -306, -390, "CnRQ")) throw new Error(t(-98, -275, -192, -276, "7g4w") + i("V%Pc", 83, -41, 66, -165) + A(-550, -668, "eW6O", -474, -477) + A(-692, -747, "I%Sr", -570, -783) + "d.");
          this[t(-319, -450, -367, -407, "Zf2K") + e(-350, -421, "CnRQ", -308, -301) + "d"] = _0x5d7c58;
        }
        this[e(-190, -302, "kvM!", -246, -372) + "se"] = await I[t(-345, -455, -333, -281, "#P%i")]();
      }
    } catch (I) {
      if (e(-192, -241, "RmEa", -257) === A(-730, -755, "MENe", -805)) return this[A(-611, -619, "3tGS", -715) + t(-190, -100, -137, -169, "^byO")];
      this[t(-226, -325, -345, -324, "XSYy") + "se"] = void (-2798 + 2 * -1277 + 5352), console[t(-332, -467, -362, -421, "@vXS")](I);
    }
  }
  async [T("H@g@", -444, -323, -459, -393) + T("MyL8", -214, -306, -375, -335) + "e"](g) {
    function t(I, a, r, Q, C) {
      return mA(I - 90, Q - 928, r - 289, Q - 228, r);
    }
    function e(I, a, r, Q, C) {
      return qA(I - 461, a - 87, Q - 1016, Q - 135, r);
    }
    this[t(593, 580, "3tGS", 490) + e(1014, 1077, "XNqE", 1074)] = void (19 * -81 + 25 + 1514);
    function A(I, a, r, Q, C) {
      return JA(r, a - 123, r - 25, Q - 178, I - 287);
    }
    function i(I, a, r, Q, C) {
      return qA(I - 323, a - 458, I - -411, Q - 65, a);
    }
    function n(I, a, r, Q, C) {
      return T(r, a - 415, r - 386, Q - 340, I - 291);
    }
    if (!g)
      if (t(482, 464, "*R*8", 381) === t(378, 509, "WJfZ", 455)) {
        console[i(-375, "&GC&", -319, -258)](e(1037, 1152, "*R*8", 1121) + A(979, 944, "[BWA", 1016) + n(-195, -292, "^byO", -72) + t(447, 588, "XNqE", 564) + n(-85, -46, "pJ1o", -86)), this[e(1075, 1222, "4UL%", 1136) + "se"] = void (4897 + 2154 * -1 + 211 * -13);
        return;
      } else throw new _0x15d86e(A(1095, 1006, "*R*8", 1211) + e(1025, 1035, "*R*8", 1101) + e(977, 1040, "2SMM", 1091) + t(356, 220, "[y0Z", 340) + ".");
    await this[n(-168, -143, "*8Un", -130) + A(922, 1013, "4GS]", 917) + "se"](g);
  }
  async [JA("RmEa", 800, 940, 693, 820) + T("Zf2K", -469, -439, -456, -422) + JA("P7A9", 908, 785, 762, 814)](g) {
    const t = await fetch("" + g + this[I(-269, -302, -247, "@vXS") + n(638, "3Yo3", 481, 515, 532) + e(-560, -643, -669, -590, "4GS]") + i(1015, 1230, 1135, 1085, "[BWA")][0]);
    function e(a, r, Q, C, x) {
      return mA(a - 457, r - -214, Q - 24, C - 49, x);
    }
    const A = t.ok ? 9492 * -1 + -1103 * 2 + -1 * -11698 : -3691 * 1 + 255 + 3437;
    function i(a, r, Q, C, x) {
      return T(x, r - 246, Q - 130, C - 471, Q - 1581);
    }
    function n(a, r, Q, C, x) {
      return JA(r, r - 60, Q - 26, C - 36, x - -83);
    }
    function I(a, r, Q, C, x) {
      return uA(Q - -144, r - 108, Q - 370, C - 12, C);
    }
    return "" + g + this[i(1017, 1013, 1007, 1045, "Zf2K") + e(-731, -649, -638, -599, "O97B") + i(1019, 951, 1033, 1030, "V%Pc") + I(-310, -462, -348, "KW#!")][A];
  }
  [uA(-162, -62, -63, -97, "4GS]") + T("XSYy", -444, -341, -221, -331) + "s"](g) {
    function t(A, i, n, I, a) {
      return mA(A - 399, A - 693, n - 311, I - 37, I);
    }
    function e(A, i, n, I, a) {
      return qA(A - 366, i - 37, A - 630, I - 490, n);
    }
    g[e(709, 767, "eW6O", 778) + "ch"]((A) => console[t(228, 119, 206, "2&@b")](A));
  }
  [T("R*Sk", -522, -460, -541, -552) + T("#P%i", -553, -583, -457, -551) + mA(-568, -464, -531, -586, "GjuS")](g) {
    function t(A, i, n, I, a) {
      return T(n, i - 267, n - 410, I - 427, a - 1437);
    }
    function e(A, i, n, I, a) {
      return JA(n, i - 85, n - 193, I - 26, i - -1123);
    }
    g[e(-441, -328, "XSYy", -354) + "ch"]((A) => console[t(793, 1027, "pJ1o", 828, 916)](A));
  }
  [uA(-119, -119, -36, -113, "pJ1o") + uA(-189, -143, -256, -302, "P@O3")]() {
    function g(A, i, n, I, a) {
      return JA(I, i - 448, n - 17, I - 174, A - -1184);
    }
    function t(A, i, n, I, a) {
      return T(a, i - 407, n - 169, I - 145, i - 300);
    }
    function e(A, i, n, I, a) {
      return JA(a, i - 5, n - 490, I - 329, A - -199);
    }
    return window[e(547, 588, 656, 526, "R*Sk") + e(415, 479, 430, 369, "XSYy")][t(-304, -180, -252, -175, "S%&p") + g(-373, -412, -250, "ItUx")];
  }
  [T("XSYy", -409, -410, -443, -518) + T("#P%i", -463, -508, -345, -389) + qA(-113, -238, -111, -86, "ItUx")]() {
    function g(n, I, a, r, Q) {
      return mA(n - 139, a - 681, a - 304, r - 165, I);
    }
    function t(n, I, a, r, Q) {
      return qA(n - 216, I - 370, r - 339, r - 397, I);
    }
    function e(n, I, a, r, Q) {
      return uA(a - 1048, I - 319, a - 105, r - 447, I);
    }
    function A(n, I, a, r, Q) {
      return T(r, I - 39, a - 499, r - 461, Q - -12);
    }
    function i(n, I, a, r, Q) {
      return T(n, I - 89, a - 290, r - 492, Q - -280);
    }
    try {
      if (A(-450, -513, -455, "7g4w", -486) === i("#P%i", -888, -868, -890, -858)) {
        if (!this[t(242, "WJfZ", 388, 338, 343) + "se"]) {
          if (A(-488, -471, -679, "AG9m", -559) !== i("Y7My", -934, -761, -967, -853)) throw new Tg(e(969, "P@O3", 1068, 1020, 1116) + i("H@g@", -656, -654, -573, -677) + e(1012, "MMJp", 953, 894, 1028) + t(222, "^byO", 224, 336, 447) + ".");
          return;
        }
        if (!this[t(196, "zyS@", 202, 261, 343) + g(223, "Y7My", 248, 365, 265) + "d"][e(953, "V%Pc", 1009, 1120, 1065) + A(-469, -382, -580, "MENe", -454) + A(-320, -413, -324, "L8Oc", -424) + "ed"]())
          if (i("P@O3", -816, -585, -694, -690) !== e(980, "@vXS", 892, 921, 966)) _0xe093ab[t(377, "PVWG", 344, 461, 369)](_0x416ce1);
          else throw new Tg(t(108, "XSYy", 335, 234, 210) + i("R*Sk", -910, -803, -820, -793) + g(239, "MyL8", 319, 214, 397) + g(148, "*8Un", 123, 200, 240) + ".");
        this[A(-540, -566, -697, "$lLk", -587) + t(326, "pJ1o", 146, 257, 299)] = new fI(lc(this[A(-564, -547, -492, "L8Oc", -442) + "se"], this[t(377, "4UL%", 307, 284, 317) + t(243, "2&@b", 407, 301, 335)]())), this[A(-441, -490, -627, "AG9m", -523) + g(283, "XSYy", 338, 335, 367) + "s"](this[t(434, "L8Oc", 475, 430, 481) + A(-451, -220, -406, "^byO", -345)][A(-324, -486, -504, "CnRQ", -402) + "s"]), this[e(1014, "XNqE", 1076, 1108, 1142) + t(296, "*R*8", 416, 308, 277) + A(-357, -374, -356, "WJfZ", -452)](this[A(-465, -247, -468, "7g4w", -348) + A(-619, -569, -516, "$lLk", -572)][i("P7A9", -785, -825, -704, -724) + e(962, "[BWA", 927, 821, 960)]);
      } else this[t(326, "pJ1o", 259, 260, 304) + "se"] = void (8400 + -1888 * -2 + -12176), _0x4cfc7e[e(1034, "ciG7", 998, 892, 892)](_0x2b5ced);
    } catch (n) {
      if (i("PVWG", -585, -563, -783, -661) === t(368, "L8Oc", 475, 387)) {
        _0x5ce06f instanceof _0x342787 && _0x1ebae5[g(209, "$lLk", 235, 129) + e(915, "[y0Z", 959, 913)](_0x516392);
        return;
      } else {
        if (n instanceof Tg)
          if (i("#P%i", -662, -749, -616, -685) === A(-447, -425, -536, "RmEa", -517)) n[g(398, "CnRQ", 301, 242)]();
          else throw new _0x7a95a(t(253, "zAdC", 176, 293) + A(-538, -454, -382, "O97B", -427) + e(958, "I%Sr", 963, 1087) + A(-636, -663, -690, "*R*8", -592) + "d.");
        else n instanceof Error && (e(1060, "*8Un", 1045, 1023) !== e(854, "&GC&", 934, 1045) ? _0x2f13c2[t(215, "2&@b", 358, 302) + i("MENe", -771, -698, -746, -688)](_0x5a624f) : console[e(824, "MENe", 939, 963)](n));
        const I = {};
        I[i("P7A9", -759, -717, -717, -806) + i("Y7My", -915, -684, -687, -795)] = !1, I[A(-509, -455, -647, "#P%i", -566) + "s"] = [], I[t(236, "XSYy", 296, 356) + A(-435, -262, -338, "Zf2K", -382)] = [], I[e(909, "*R*8", 941, 907) + e(1159, "CnRQ", 1052, 1003) + g(337, "[y0Z", 269, 348)] = void (-2082 + -1 * 7181 + -157 * -59), I[e(971, "V%Pc", 1085, 1153)] = function() {
        }, I[i("vv^H", -831, -812, -663, -731) + i("@vXS", -729, -760, -582, -674)] = "", this[e(954, "2SMM", 1063, 1123) + g(133, "GjuS", 157, 39)] = new fI(I);
      }
    }
  }
  [T("Y7My", -456, -240, -280, -354) + uA(-2, -36, -30, 99, "7g4w") + mA(-562, -466, -513, -390, "ciG7") + "t"]() {
    function g(t, e, A, i, n) {
      return uA(i - -518, e - 476, A - 401, i - 83, e);
    }
    return this[g(-663, "^byO", -609, -619) + g(-542, "^byO", -395, -476)];
  }
  [T("PVWG", -431, -512, -493, -438) + qA(-25, 117, 71, 32, "CnRQ") + uA(-159, -97, -96, -166, "I%Sr")]() {
    var n;
    function g(I, a, r, Q, C) {
      return T(r, a - 218, r - 407, Q - 287, C - 1144);
    }
    function t(I, a, r, Q, C) {
      return JA(Q, a - 103, r - 373, Q - 59, r - 128);
    }
    function e(I, a, r, Q, C) {
      return T(r, a - 186, r - 272, Q - 28, Q - 1092);
    }
    function A(I, a, r, Q, C) {
      return uA(C - -445, a - 138, r - 320, Q - 87, Q);
    }
    if (!this[i(-107, -138, -158, -191, "S%&p") + "se"]) {
      if (A(-385, -547, -321, "PVWG", -426) !== A(-699, -528, -711, "zAdC", -641)) return;
      throw new _0x5737ad(e(855, 874, "&GC&", 753) + t(724, 824, 814, "kvM!") + i(-253, -172, -257, -180, "S%&p") + e(636, 606, "MENe", 644) + ".");
    }
    function i(I, a, r, Q, C) {
      return T(C, a - 150, r - 443, Q - 376, Q - 256);
    }
    try {
      if (A(-628, -584, -640, "KW#!", -589) !== A(-540, -594, -496, "xDG2", -586)) {
        const I = JSON[t(744, 757, 782, "CnRQ", 844)](this[g(623, 735, "*R*8", 645, 682) + "se"]);
        return (n = I == null ? void 0 : I[i(-205, -50, -141, -97, "xDG2") + i(-180, -168, -103, -128, "P@O3")]) == null ? void 0 : n[e(693, 487, "XNqE", 595, 688) + t(949, 1004, 883, "WJfZ", 765)];
      } else {
        if (!this[t(851, 722, 823, "*R*8", 830) + "se"]) throw new _0xde3496(t(658, 658, 757, "XSYy", 833) + t(798, 765, 784, "GjuS", 800) + i(-187, -289, -289, -221, "H@g@") + i(-178, -298, -97, -179, "P@O3") + ".");
        if (!this[t(982, 995, 943, "[BWA", 871) + i(-34, -103, -95, -118, "AG9m") + "d"][e(679, 508, "I%Sr", 625, 732) + t(779, 832, 819, "H@g@", 904) + g(828, 683, "*R*8", 901, 778) + "ed"]()) throw new _0x5b2b46(A(-562, -597, -452, "7g4w", -513) + g(528, 486, "*8Un", 497, 589) + A(-599, -619, -512, "V%Pc", -538) + A(-536, -379, -339, "MyL8", -428) + ".");
        this[A(-314, -351, -340, "&GC&", -437) + g(764, 858, "xDG2", 715, 796)] = new _0x406d44(_0xa175ec(this[e(764, 662, "vv^H", 668, 605) + "se"], this[g(777, 876, "4GS]", 756, 815) + t(761, 886, 840, "$lLk", 806)]())), this[A(-504, -544, -670, "MMJp", -563) + i(-319, -226, -331, -282, "XNqE") + "s"](this[e(723, 563, "I%Sr", 664, 579) + e(488, 633, "X3Xj", 609, 663)][A(-737, -550, -536, "4UL%", -614) + "s"]), this[i(-140, -187, -210, -135, "#P%i") + e(757, 880, "*8Un", 762, 667) + g(710, 792, "#P%i", 662, 757)](this[A(-521, -618, -653, "4UL%", -627) + A(-466, -321, -339, "4UL%", -411)][t(683, 704, 795, "eW6O", 736) + g(760, 604, "ItUx", 606, 665)]);
      }
    } catch (I) {
      if (t(948, 959, 865, "@vXS") !== t(1034, 978, 934, "V%Pc")) _0xeeb46e[e(524, 425, "ItUx", 530) + "ch"]((a) => _0x581395[A(-563, -518, -658, "kvM!", -626)](a));
      else {
        if (I instanceof Error)
          if (g(626, 736, "zyS@", 600, 634) !== t(772, 724, 713, "R*Sk")) U[t(917, 752, 827, "Zf2K") + A(-503, -488, -459, "@vXS", -450)](I);
          else {
            _0x29356f[A(-533, -598, -641, "eW6O", -558)](A(-376, -423, -306, "P@O3", -425) + t(817, 704, 745, "^byO") + g(829, 580, "eW6O", 800, 705) + i(-254, -162, -139, -136, "RmEa") + g(749, 789, "I%Sr", 695, 712)), this[t(882, 730, 798, "R*Sk") + "se"] = void (-3019 * -3 + 3532 + 12589 * -1);
            return;
          }
        return;
      }
    }
  }
}
const rg = class rg extends Dc {
  static getInstance() {
    if (!this._instance) {
      const g = new pc();
      this._instance = new rg(g);
    }
    return this._instance;
  }
};
w(rg, "_instance");
let Fi = rg;
const wc = ({ children: o }) => {
  const g = FA(null);
  return IQ(g, HA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ p(UC, { ref: g, children: o });
}, mc = ({ cameraOptions: o }) => o ? /* @__PURE__ */ p(SC, { target: o.styleTarget, children: /* @__PURE__ */ p(
  VB,
  {
    assetsDirectoryPath: o.assetsDirectoryPath,
    bramble: Fi.getInstance(),
    children: /* @__PURE__ */ p(zB, { analytics: xc, appKey: "065cf6e242fc5e785cd17eebfbfbbd212a33133b", children: /* @__PURE__ */ p(
      jC,
      {
        value: Bc({
          onError: o.onError
        }),
        children: /* @__PURE__ */ p(m0, { children: /* @__PURE__ */ p(rc, { cameraFacing: o.cameraFacing, children: /* @__PURE__ */ p(wc, { children: /* @__PURE__ */ p(ac, { ...o }) }) }) })
      }
    ) })
  }
) }) : null;
Ha(mc, "x-dot-document-auto-capture", ["cameraOptions"]);
