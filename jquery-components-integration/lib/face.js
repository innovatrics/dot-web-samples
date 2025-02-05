var bB = Object.defineProperty;
var eo = (g) => {
  throw TypeError(g);
};
var FB = (g, I, t) => I in g ? bB(g, I, { enumerable: !0, configurable: !0, writable: !0, value: t }) : g[I] = t;
var p = (g, I, t) => FB(g, typeof I != "symbol" ? I + "" : I, t), to = (g, I, t) => I.has(g) || eo("Cannot " + t);
var m = (g, I, t) => (to(g, I, "read from private field"), t ? t.call(g) : I.get(g)), W = (g, I, t) => I.has(g) ? eo("Cannot add the same private member more than once") : I instanceof WeakSet ? I.add(g) : I.set(g, t), v = (g, I, t, A) => (to(g, I, "write to private field"), A ? A.call(g, t) : I.set(g, t), t);
var Kt, N, fi, Di, ae, go, yi, S0, wI, M0, L0, wi, ft = {}, pi = [], RB = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, $g = Array.isArray;
function XA(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function mi(g) {
  var I = g.parentNode;
  I && I.removeChild(g);
}
function hA(g, I, t) {
  var A, e, o, i = {};
  for (o in I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : i[o] = I[o];
  if (arguments.length > -157 * -7 + 4815 + 5912 * -1 && (i.children = arguments.length > 3 ? Kt.call(arguments, 7 * 877 + -2048 + -4089) : t), typeof g == "function" && g.defaultProps != null)
    for (o in g.defaultProps) i[o] === void 0 && (i[o] = g.defaultProps[o]);
  return st(g, i, A, e, null);
}
function st(g, I, t, A, e) {
  var o = {};
  o.type = g, o.props = I, o.key = t, o.ref = A, o.__k = null, o.__ = null, o.__b = 0, o.__e = null, o.__d = void (-1825 * 2 + 636 * -9 + 9374), o.__c = null, o.constructor = void 0, o.__v = e ?? ++fi, o.__i = -(3889 * -1 + 7607 + -3717), o.__u = 0;
  var i = o;
  return e == null && N.vnode != null && N.vnode(i), i;
}
function SB() {
  var g = {};
  return g.current = null, g;
}
function MA(g) {
  return g.children;
}
function RA(g, I) {
  this.props = g, this.context = I;
}
function De(g, I) {
  if (I == null) return g.__ ? De(g.__, g.__i + (643 * -1 + -2 * 4112 + 8868)) : null;
  for (var t; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) return t.__e;
  return typeof g.type == "function" ? De(g) : null;
}
function Gi(g) {
  var I, t;
  if ((g = g.__) != null && g.__c != null) {
    for (g.__e = g.__c.base = null, I = 0; I < g.__k.length; I++) if ((t = g.__k[I]) != null && t.__e != null) {
      g.__e = g.__c.base = t.__e;
      break;
    }
    return Gi(g);
  }
}
function J0(g) {
  (!g.__d && (g.__d = !(1 * -5222 + -9983 + 5 * 3041)) && ae.push(g) && !Dg.__r++ || go !== N.debounceRendering) && ((go = N.debounceRendering) || yi)(Dg);
}
function Dg() {
  var g, I, t, A, e, o, i, C;
  for (ae.sort(S0); g = ae.shift(); ) g.__d && (I = ae.length, A = void (1 * -5361 + 3808 + -1553 * -1), o = (e = (t = g).__v).__e, i = [], C = [], t.__P && ((A = XA({}, e)).__v = e.__v + (6 * 1008 + -6851 + -6 * -134), N.vnode && N.vnode(A), pI(t.__P, A, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [o] : null, i, o ?? De(e), !!(-6202 + -80 * -10 + -418 * -13 & e.__u), C), A.__v = e.__v, A.__.__k[A.__i] = A, bi(i, A, C), A.__e != o && Gi(A)), ae.length > I && ae.sort(S0));
  Dg.__r = -13233 + 4411 * 3;
}
function ki(g, I, t, A, e, o, i, C, B, n, a) {
  var Q, E, r, s, d, h = A && A.__k || pi, x = I.length;
  for (t.__d = B, MB(t, I, h), B = t.__d, Q = 0; Q < x; Q++) (r = t.__k[Q]) != null && typeof r != "boolean" && typeof r != "function" && (E = -(8239 * 1 + -264 * -17 + -12726) === r.__i ? ft : h[r.__i] || ft, r.__i = Q, pI(g, r, E, e, o, i, C, B, n, a), s = r.__e, r.ref && E.ref != r.ref && (E.ref && mI(E.ref, null, r), a.push(r.ref, r.__c || s, r)), d == null && s != null && (d = s), 35646 + 10 * 2989 & r.__u || E.__k === r.__k ? (B && typeof r.type == "string" && !g.contains(B) && (B = De(E)), B = Ni(r, B, g)) : typeof r.type == "function" && void (-6699 + -14 * 509 + -35 * -395) !== r.__d ? B = r.__d : s && (B = s.nextSibling), r.__d = void 0, r.__u &= -196609);
  t.__d = B, t.__e = d;
}
function MB(g, I, t) {
  var A, e, o, i, C, B = I.length, n = t.length, a = n, Q = 3336 + -12 * 278;
  for (g.__k = [], A = 10 * 347 + 9416 + -12886; A < B; A++) i = A + Q, (e = g.__k[A] = (e = I[A]) == null || typeof e == "boolean" || typeof e == "function" ? null : typeof e == "string" || typeof e == "number" || typeof e == "bigint" || e.constructor == String ? st(null, e, null, null, null) : $g(e) ? st(MA, { children: e }, null, null, null) : void (2608 * 1 + 7926 + -10534) === e.constructor && e.__b > -50 * 85 + 1662 + -1294 * -2 ? st(e.type, e.props, e.key, e.ref ? e.ref : null, e.__v) : e) != null ? (e.__ = g, e.__b = g.__b + (1992 + 541 * 11 + 2 * -3971), C = LB(e, t, i, a), e.__i = C, o = null, -(-8 * 813 + -178 * 17 + 3177 * 3) !== C && (a--, (o = t[C]) && (o.__u |= 33972 + -4837 * 19 + 189003 * 1)), o == null || o.__v === null ? (C == -1 && Q--, typeof e.type != "function" && (e.__u |= -17945 * 7 + 12269 * -1 + 2 * 101710)) : C !== i && (C == i - (67 * -103 + 1 * -9779 + 7 * 2383) ? Q = C - i : C == i + (-5724 * -1 + -3382 * 2 + 1041) ? Q++ : C > i ? a > B - i ? Q += C - i : Q-- : C < i && Q++, C !== A + Q && (e.__u |= 65536))) : (o = t[i]) && o.key == null && o.__e && -181 * 18 + 3418 + -20 * 8 == (1 * -218866 + 93915 + 256023 & o.__u) && (o.__e == g.__d && (g.__d = De(o)), Y0(o, o, !(983 * 3 + 448 + -3396)), t[i] = null, a--);
  if (a)
    for (A = -2 * 3788 + 6382 + -1194 * -1; A < n; A++) (o = t[A]) != null && 627 + -57 * 11 == (168108 + 8313 * -3 + -12097 & o.__u) && (o.__e == g.__d && (g.__d = De(o)), Y0(o, o));
}
function Ni(g, I, t) {
  var A, e;
  if (typeof g.type == "function") {
    for (A = g.__k, e = -981 + 226 * 27 + -5121; A && e < A.length; e++) A[e] && (A[e].__ = g, I = Ni(A[e], I, t));
    return I;
  }
  g.__e != I && (t.insertBefore(g.__e, I || null), I = g.__e);
  do
    I = I && I.nextSibling;
  while (I != null && I.nodeType === 8);
  return I;
}
function _A(g, I) {
  return I = I || [], g == null || typeof g == "boolean" || ($g(g) ? g.some(function(t) {
    _A(t, I);
  }) : I.push(g)), I;
}
function LB(g, I, t, A) {
  var e = g.key, o = g.type, i = t - (-7261 + -3631 * -2), C = t + (1626 * -3 + -5467 + 10346), B = I[t];
  if (B === null || B && e == B.key && o === B.type && -16755 + -3351 * -5 == (131072 & B.__u)) return t;
  if (A > (B != null && -9721 * -1 + 33 * 95 + -12856 == (-1 * 205433 + -7 * 36071 + 589002 & B.__u) ? -2787 + -3358 * -2 + -8 * 491 : -1 * 2531 + -3896 + 6427)) for (; i >= -86 * -48 + -33 * -12 + 6 * -754 || C < I.length; ) {
    if (i >= -326 * -29 + 5555 + 5003 * -3) {
      if ((B = I[i]) && -1071 + 1 * -1919 + -23 * -130 == (-249373 + -1 * 140311 + 520756 & B.__u) && e == B.key && o === B.type) return i;
      i--;
    }
    if (C < I.length) {
      if ((B = I[C]) && 4488 + 3 * -1496 == (204204 + -389 * 188 & B.__u) && e == B.key && o === B.type) return C;
      C++;
    }
  }
  return -1;
}
function Io(g, I, t) {
  I[1 * -7445 + -2193 + 9638] === "-" ? g.setProperty(I, t ?? "") : g[I] = t == null ? "" : typeof t != "number" || RB.test(I) ? t : t + "px";
}
function zt(g, I, t, A, e) {
  var o;
  A: if (I === "style")
    if (typeof t == "string") g.style.cssText = t;
    else {
      if (typeof A == "string" && (g.style.cssText = A = ""), A)
        for (I in A) t && I in t || Io(g.style, I, "");
      if (t)
        for (I in t) A && t[I] === A[I] || Io(g.style, I, t[I]);
    }
  else if (I[235 + 5 * -47] === "o" && I[7022 + 4228 * -1 + 7 * -399] === "n") o = I !== (I = I.replace(/(PointerCapture)$|Capture$/i, "$1")), I = I.toLowerCase() in g || I === "onFocusOut" || I === "onFocusIn" ? I.toLowerCase().slice(2) : I.slice(-3 * -701 + 1839 + 1 * -3940), g.l || (g.l = {}), g.l[I + o] = t, t ? A ? t.u = A.u : (t.u = wI, g.addEventListener(I, o ? L0 : M0, o)) : g.removeEventListener(I, o ? L0 : M0, o);
  else {
    if (e == "http://www.w3.org/2000/svg") I = I.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (I != "width" && I != "height" && I != "href" && I != "list" && I != "form" && I != "tabIndex" && I != "download" && I != "rowSpan" && I != "colSpan" && I != "role" && I != "popover" && I in g) try {
      g[I] = t ?? "";
      break A;
    } catch {
    }
    typeof t == "function" || (t == null || !(4 * 988 + 979 * 10 + 13741 * -1) === t && I[-14 * 129 + -1 * 8986 + 10796] !== "-" ? g.removeAttribute(I) : g.setAttribute(I, I == "popover" && 14 * 302 + 405 * 4 + 5847 * -1 == t ? "" : t));
  }
}
function oo(g) {
  return function(I) {
    if (this.l) {
      var t = this.l[I.type + g];
      if (I.t == null) I.t = wI++;
      else if (I.t < t.u) return;
      return t(N.event ? N.event(I) : I);
    }
  };
}
function pI(g, I, t, A, e, o, i, C, B, n) {
  var a, Q, E, r, s, d, h, x, u, w, R, S, M, y, Z, J, z = I.type;
  if (void (7171 + -6 * -849 + -223 * 55) !== I.constructor) return null;
  128 & t.__u && (B = !!(-475 + 6382 * 1 + -25 * 235 & t.__u), o = [C = I.__e = t.__e]), (a = N.__b) && a(I);
  A: if (typeof z == "function") try {
    if (x = I.props, u = "prototype" in z && z.prototype.render, w = (a = z.contextType) && A[a.__c], R = a ? w ? w.props.value : a.__ : A, t.__c ? h = (Q = I.__c = t.__c).__ = Q.__E : (u ? I.__c = Q = new z(x, R) : (I.__c = Q = new RA(x, R), Q.constructor = z, Q.render = YB), w && w.sub(Q), Q.props = x, Q.state || (Q.state = {}), Q.context = R, Q.__n = A, E = Q.__d = !(-15726 + 2621 * 6), Q.__h = [], Q._sb = []), u && Q.__s == null && (Q.__s = Q.state), u && z.getDerivedStateFromProps != null && (Q.__s == Q.state && (Q.__s = XA({}, Q.__s)), XA(Q.__s, z.getDerivedStateFromProps(x, Q.__s))), r = Q.props, s = Q.state, Q.__v = I, E) u && z.getDerivedStateFromProps == null && Q.componentWillMount != null && Q.componentWillMount(), u && Q.componentDidMount != null && Q.__h.push(Q.componentDidMount);
    else {
      if (u && z.getDerivedStateFromProps == null && x !== r && Q.componentWillReceiveProps != null && Q.componentWillReceiveProps(x, R), !Q.__e && (Q.shouldComponentUpdate != null && !(3171 + 2 * 982 + -5134) === Q.shouldComponentUpdate(x, Q.__s, R) || I.__v === t.__v)) {
        for (I.__v !== t.__v && (Q.props = x, Q.state = Q.__s, Q.__d = !(-5726 * 1 + 4310 + -13 * -109)), I.__e = t.__e, I.__k = t.__k, I.__k.forEach(function(ke) {
          ke && (ke.__ = I);
        }), S = -2 * 334 + -31 * -166 + -1 * 4478; S < Q._sb.length; S++) Q.__h.push(Q._sb[S]);
        Q._sb = [], Q.__h.length && i.push(Q);
        break A;
      }
      Q.componentWillUpdate != null && Q.componentWillUpdate(x, Q.__s, R), u && Q.componentDidUpdate != null && Q.__h.push(function() {
        Q.componentDidUpdate(r, s, d);
      });
    }
    if (Q.context = R, Q.props = x, Q.__P = g, Q.__e = !(-36 * 37 + 6739 * -1 + 8072), M = N.__r, y = 1565 + -2105 * -2 + 175 * -33, u) {
      for (Q.state = Q.__s, Q.__d = !(-8807 + -1468 * -6), M && M(I), a = Q.render(Q.props, Q.state, Q.context), Z = 3259 * 1 + -1520 + -1739; Z < Q._sb.length; Z++) Q.__h.push(Q._sb[Z]);
      Q._sb = [];
    } else do
      Q.__d = !(-14 * -237 + 5961 + 1 * -9278), M && M(I), a = Q.render(Q.props, Q.state, Q.context), Q.state = Q.__s;
    while (Q.__d && ++y < -15 * 327 + 3 * -2597 + 12721);
    Q.state = Q.__s, Q.getChildContext != null && (A = XA(XA({}, A), Q.getChildContext())), u && !E && Q.getSnapshotBeforeUpdate != null && (d = Q.getSnapshotBeforeUpdate(r, s)), ki(g, $g(J = a != null && a.type === MA && a.key == null ? a.props.children : a) ? J : [J], I, t, A, e, o, i, C, B, n), Q.base = I.__e, I.__u &= -(-12 * 194 + 1 * -8135 + 32 * 332), Q.__h.length && i.push(Q), h && (Q.__E = Q.__ = null);
  } catch (ke) {
    I.__v = null, B || o != null ? (I.__e = C, I.__u |= B ? 1 * 9803 + 9647 * -1 + 4 * 1 : 63 * -60 + 6222 + -5 * 482, o[o.indexOf(C)] = null) : (I.__e = t.__e, I.__k = t.__k), N.__e(ke, I, t);
  }
  else o == null && I.__v === t.__v ? (I.__k = t.__k, I.__e = t.__e) : I.__e = JB(t.__e, I, t, A, e, o, i, B, n);
  (a = N.diffed) && a(I);
}
function bi(g, I, t) {
  I.__d = void (-519 * 15 + -252 + -1 * -8037);
  for (var A = -3197 + -5 * -505 + 672; A < t.length; A++) mI(t[A], t[++A], t[++A]);
  N.__c && N.__c(I, g), g.some(function(e) {
    try {
      g = e.__h, e.__h = [], g.some(function(o) {
        o.call(e);
      });
    } catch (o) {
      N.__e(o, e.__v);
    }
  });
}
function JB(g, I, t, A, e, o, i, C, B) {
  var n, a, Q, E, r, s, d, h = t.props, x = I.props, u = I.type;
  if (u === "svg" ? e = "http://www.w3.org/2000/svg" : u === "math" ? e = "http://www.w3.org/1998/Math/MathML" : e || (e = "http://www.w3.org/1999/xhtml"), o != null) {
    for (n = -2057 + -1 * -2057; n < o.length; n++) if ((r = o[n]) && "setAttribute" in r == !!u && (u ? r.localName === u : 1 * 3491 + -1 * 5386 + 1898 === r.nodeType)) {
      g = r, o[n] = null;
      break;
    }
  }
  if (g == null) {
    if (u === null) return document.createTextNode(x);
    g = document.createElementNS(e, u, x.is && x), o = null, C = !(1 * 1522 + -4777 + 3256);
  }
  if (u === null) h === x || C && g.data === x || (g.data = x);
  else {
    if (o = o && Kt.call(g.childNodes), h = t.props || ft, !C && o != null)
      for (h = {}, n = 747 * -11 + 1 * 7427 + 790; n < g.attributes.length; n++) h[(r = g.attributes[n]).name] = r.value;
    for (n in h) if (r = h[n], n != "children") {
      if (n == "dangerouslySetInnerHTML") Q = r;
      else if (n !== "key" && !(n in x)) {
        if (n == "value" && "defaultValue" in x || n == "checked" && "defaultChecked" in x) continue;
        zt(g, n, null, r, e);
      }
    }
    for (n in x) r = x[n], n == "children" ? E = r : n == "dangerouslySetInnerHTML" ? a = r : n == "value" ? s = r : n == "checked" ? d = r : n === "key" || C && typeof r != "function" || h[n] === r || zt(g, n, r, h[n], e);
    if (a) C || Q && (a.__html === Q.__html || a.__html === g.innerHTML) || (g.innerHTML = a.__html), I.__k = [];
    else if (Q && (g.innerHTML = ""), ki(g, $g(E) ? E : [E], I, t, A, u === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e, o, i, o ? o[-1 * 2621 + -1 * 313 + 2934] : t.__k && De(t, 0), C, B), o != null)
      for (n = o.length; n--; ) o[n] != null && mi(o[n]);
    C || (n = "value", void (-81 * 5 + -4419 + -536 * -9) !== s && (s !== g[n] || u === "progress" && !s || u === "option" && s !== h[n]) && zt(g, n, s, h[n], e), n = "checked", void (857 * -7 + 2 * -3446 + 3 * 4297) !== d && d !== g[n] && zt(g, n, d, h[n], e));
  }
  return g;
}
function mI(g, I, t) {
  try {
    typeof g == "function" ? g(I) : g.current = I;
  } catch (A) {
    N.__e(A, t);
  }
}
function Y0(g, I, t) {
  var A, e;
  if (N.unmount && N.unmount(g), (A = g.ref) && (A.current && A.current !== g.__e || mI(A, null, I)), (A = g.__c) != null) {
    if (A.componentWillUnmount) try {
      A.componentWillUnmount();
    } catch (o) {
      N.__e(o, I);
    }
    A.base = A.__P = null;
  }
  if (A = g.__k)
    for (e = 1472 + 4 * -2250 + 2 * 3764; e < A.length; e++) A[e] && Y0(A[e], I, t || typeof g.type != "function");
  t || g.__e == null || mi(g.__e), g.__c = g.__ = g.__e = g.__d = void (6591 + -1 * -2027 + -8618);
}
function YB(g, I, t) {
  return this.constructor(g, t);
}
function ie(g, I, t) {
  var A, e, o, i;
  N.__ && N.__(g, I), e = (A = typeof t == "function") ? null : t && t.__k || I.__k, o = [], i = [], pI(I, g = (!A && t || I).__k = hA(MA, null, [g]), e || ft, ft, I.namespaceURI, !A && t ? [t] : e ? null : I.firstChild ? Kt.call(I.childNodes) : null, o, !A && t ? t : e ? e.__e : I.firstChild, A, i), bi(o, g, i);
}
function GI(g, I) {
  ie(g, I, GI);
}
function kI(g, I, t) {
  var A, e, o, i, C = XA({}, g.props);
  for (o in g.type && g.type.defaultProps && (i = g.type.defaultProps), I) o == "key" ? A = I[o] : o == "ref" ? e = I[o] : C[o] = void (-26 * -302 + 6173 * 1 + -14025) === I[o] && void (-6375 + -40 * -83 + -3055 * -1) !== i ? i[o] : I[o];
  return arguments.length > -1520 + 47 * -134 + -17 * -460 && (C.children = arguments.length > -2461 + -1634 * -1 + 830 ? Kt.call(arguments, 75 * 6 + -557 + 109) : t), st(g.type, C, A || g.key, e || g.ref, null);
}
function Ot(g, I) {
  var t = { __c: I = "__cC" + wi++, __: g, Consumer: function(A, e) {
    return A.children(e);
  }, Provider: function(A) {
    var e, o;
    return this.getChildContext || (e = [], (o = {})[I] = this, this.getChildContext = function() {
      return o;
    }, this.componentWillUnmount = function() {
      e = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value !== i.value && e.some(function(C) {
        C.__e = !0, J0(C);
      });
    }, this.sub = function(i) {
      e.push(i);
      var C = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        e && e.splice(e.indexOf(i), 1), C && C.call(i);
      };
    }), A.children;
  } };
  return t.Provider.__ = t.Consumer.contextType = t;
}
Kt = pi.slice, N = { __e: function(g, I, t, A) {
  for (var e, o, i; I = I.__; ) if ((e = I.__c) && !e.__) try {
    if ((o = e.constructor) && o.getDerivedStateFromError != null && (e.setState(o.getDerivedStateFromError(g)), i = e.__d), e.componentDidCatch != null && (e.componentDidCatch(g, A || {}), i = e.__d), i) return e.__E = e;
  } catch (C) {
    g = C;
  }
  throw g;
} }, fi = 2180 * -4 + 247 * -1 + 3 * 2989, Di = function(g) {
  return g != null && g.constructor == null;
}, RA.prototype.setState = function(g, I) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = XA({}, this.state), typeof g == "function" && (g = g(XA({}, t), this.props)), g && XA(t, g), g != null && this.__v && (I && this._sb.push(I), J0(this));
}, RA.prototype.forceUpdate = function(g) {
  this.__v && (this.__e = !(4202 + 22 * -191), g && this.__h.push(g), J0(this));
}, RA.prototype.render = MA, ae = [], yi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, S0 = function(g, I) {
  return g.__v.__b - I.__v.__b;
}, Dg.__r = 8 * 127 + 2126 * 1 + -3142, wI = -4774 + 1 * 2638 + -24 * -89, M0 = oo(!(2 * -3221 + 1988 + 4455)), L0 = oo(!(5 * 1325 + 5250 + -625 * 19)), wi = 0;
function NI() {
  return (NI = Object.assign ? Object.assign.bind() : function(g) {
    for (var I = 7213 + 2404 * -3; I < arguments.length; I++) {
      var t = arguments[I];
      for (var A in t) Object.prototype.hasOwnProperty.call(t, A) && (g[A] = t[A]);
    }
    return g;
  }).apply(this, arguments);
}
var vB = ["context", "children"];
function UB(g) {
  this.getChildContext = function() {
    return g.context;
  };
  var I = g.children, t = function(A, e) {
    if (A == null) return {};
    var o, i, C = {}, B = Object.keys(A);
    for (i = -10 * 614 + -9401 + 1 * 15541; i < B.length; i++) e.indexOf(o = B[i]) >= 5 * -109 + 223 * -3 + 1214 || (C[o] = A[o]);
    return C;
  }(g, vB);
  return kI(I, t);
}
function WB() {
  var g = {};
  g.detail = {}, g.bubbles = !(-8912 + -1303 * -7 + -209), g.cancelable = !(8458 + -1 * 3537 + -4921);
  var I = new CustomEvent("_preact", g);
  this.dispatchEvent(I), this._vdom = hA(UB, NI({}, this._props, { context: I.detail.context }), function t(A, e) {
    if (-8612 + -10 * 173 + -10345 * -1 === A.nodeType) return A.data;
    if (377 * -5 + -376 * -1 + 1510 !== A.nodeType) return null;
    var o = [], i = {}, C = -1244 + 6961 * -1 + 8205, B = A.attributes, n = A.childNodes;
    for (C = B.length; C--; ) B[C].name !== "slot" && (i[B[C].name] = B[C].value, i[Fi(B[C].name)] = B[C].value);
    for (C = n.length; C--; ) {
      var a = t(n[C], null), Q = n[C].slot;
      Q ? i[Q] = hA(io, { name: Q }, a) : o[C] = a;
    }
    var E = e ? hA(io, null, o) : o;
    return hA(e || A.nodeName.toLowerCase(), i, E);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? GI : ie)(this._vdom, this._root);
}
function Fi(g) {
  return g.replace(/-(\w)/g, function(I, t) {
    return t ? t.toUpperCase() : "";
  });
}
function HB(g, I, t) {
  if (this._vdom) {
    var A = {};
    A[g] = t = t ?? void (2225 + -23 * 279 + 4192), A[Fi(g)] = t, this._vdom = kI(this._vdom, A), ie(this._vdom, this._root);
  }
}
function KB() {
  ie(this._vdom = null, this._root);
}
function io(g, I) {
  var t = this;
  return hA("slot", NI({}, g, { ref: function(A) {
    A ? (t.ref = A, t._listener || (t._listener = function(e) {
      e.stopPropagation(), e.detail.context = I;
    }, A.addEventListener("_preact", t._listener))) : t.ref.removeEventListener("_preact", t._listener);
  } }));
}
function OB(g, I, t, A) {
  function e() {
    var o = Reflect.construct(HTMLElement, [], e);
    return o._vdomComponent = g, o._root = o, o;
  }
  return (e.prototype = Object.create(HTMLElement.prototype)).constructor = e, e.prototype.connectedCallback = WB, e.prototype.attributeChangedCallback = HB, e.prototype.disconnectedCallback = KB, t = t || g.observedAttributes || Object.keys(g.propTypes || {}), e.observedAttributes = t, t.forEach(function(o) {
    Object.defineProperty(e.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var C = typeof i;
      i != null && C !== "string" && C !== "boolean" && C !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(I, e);
}
var qB = 487 * -2 + -2 * -2991 + -16 * 313;
function D(g, I, t, A, e, o) {
  I || (I = {});
  var i, C, B = I;
  if ("ref" in B)
    for (C in B = {}, I) C == "ref" ? i = I[C] : B[C] = I[C];
  var n = {};
  n.type = g, n.props = B, n.key = t, n.ref = i, n.__k = null, n.__ = null, n.__b = 0, n.__e = null, n.__d = void (310 * -11 + 7767 + -1 * 4357), n.__c = null, n.constructor = void (3167 + 348 * -26 + 1 * 5881), n.__v = --qB, n.__i = -(-134 * 54 + -4269 + 11506), n.__u = 0, n.__source = e, n.__self = o;
  var a = n;
  if (typeof g == "function" && (i = g.defaultProps))
    for (C in i) void (1 * 2761 + -9597 + 6836) === B[C] && (B[C] = i[C]);
  return N.vnode && N.vnode(a), a;
}
var fA = function() {
  return fA = Object.assign || function(I) {
    for (var t, A = 1, e = arguments.length; A < e; A++) {
      t = arguments[A];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (I[o] = t[o]);
    }
    return I;
  }, fA.apply(this, arguments);
};
function He(g, I, t) {
  if (t || arguments.length === 2) for (var A = 0, e = I.length, o; A < e; A++)
    (o || !(A in I)) && (o || (o = Array.prototype.slice.call(I, 0, A)), o[A] = I[A]);
  return g.concat(o || Array.prototype.slice.call(I));
}
function TB(g) {
  var I = Object.create(null);
  return function(t) {
    return I[t] === void 0 && (I[t] = g(t)), I[t];
  };
}
var ZB = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, jB = TB(function(g) {
  return ZB.test(g) || g.charCodeAt(0) === -1682 + -1 * -4796 + -39 * 77 && g.charCodeAt(13 * 27 + 5227 + 5577 * -1) === -3056 * 1 + 3316 + -75 * 2 && g.charCodeAt(-930 + -932 * -1) < -1 * -5213 + 4064 + -9186;
}), Ce, T, c0, Co, Ke = 163 * 41 + -5543 + -1140 * 1, Ri = [], j = N, Bo = j.__b, no = j.__r, Qo = j.diffed, ao = j.__c, xo = j.unmount, ro = j.__;
function Ve(g, I) {
  j.__h && j.__h(T, g, Ke || I), Ke = 0;
  var t = {};
  t.__ = [], t.__h = [];
  var A = T.__H || (T.__H = t);
  return g >= A.__.length && A.__.push({}), A.__[g];
}
function wA(g) {
  return Ke = 9704 + -1 * 2203 + 2500 * -3, bI(Li, g);
}
function bI(g, I, t) {
  var A = Ve(Ce++, 2);
  if (A.t = g, !A.__c && (A.__ = [t ? t(I) : Li(void (-10 * -952 + -2 * -4401 + -18322), I), function(C) {
    var B = A.__N ? A.__N[0] : A.__[0], n = A.t(B, C);
    B !== n && (A.__N = [n, A.__[-313 * -11 + -6 * -794 + -8206]], A.__c.setState({}));
  }], A.__c = T, !T.u)) {
    var e = function(C, B, n) {
      if (!A.__c.__H) return !0;
      var a = A.__c.__H.__.filter(function(E) {
        return !!E.__c;
      });
      if (a.every(function(E) {
        return !E.__N;
      })) return !o || o.call(this, C, B, n);
      var Q = !1;
      return a.forEach(function(E) {
        if (E.__N) {
          var r = E.__[0];
          E.__ = E.__N, E.__N = void 0, r !== E.__[0] && (Q = !0);
        }
      }), !(!Q && A.__c.props === C) && (!o || o.call(this, C, B, n));
    };
    T.u = !(1 * 7921 + 3212 * 2 + -1 * 14345);
    var o = T.shouldComponentUpdate, i = T.componentWillUpdate;
    T.componentWillUpdate = function(C, B, n) {
      if (this.__e) {
        var a = o;
        o = void (-6686 + -3 * 1440 + 5503 * 2), e(C, B, n), o = a;
      }
      i && i.call(this, C, B, n);
    }, T.shouldComponentUpdate = e;
  }
  return A.__N || A.__;
}
function _(g, I) {
  var t = Ve(Ce++, 3);
  !j.__s && FI(t.__H, I) && (t.__ = g, t.i = I, T.__H.__h.push(t));
}
function Xe(g, I) {
  var t = Ve(Ce++, 4);
  !j.__s && FI(t.__H, I) && (t.__ = g, t.i = I, T.__h.push(t));
}
function UA(g) {
  return Ke = 3991 + -4511 * -1 + 29 * -293, pA(function() {
    var I = {};
    return I.current = g, I;
  }, []);
}
function Si(g, I, t) {
  Ke = -3429 + -687 * -5, Xe(function() {
    return typeof g == "function" ? (g(I()), function() {
      return g(null);
    }) : g ? (g.current = I(), function() {
      return g.current = null;
    }) : void 0;
  }, t == null ? t : t.concat(g));
}
function pA(g, I) {
  var t = Ve(Ce++, 7);
  return FI(t.__H, I) && (t.__ = g(), t.__H = I, t.__h = g), t.__;
}
function $A(g, I) {
  return Ke = -8863 + 4 * 452 + 7063, pA(function() {
    return g;
  }, I);
}
function me(g) {
  var I = T.context[g.__c], t = Ve(Ce++, -3686 + 4 * 2467 + -1 * 6173);
  return t.c = g, I ? (t.__ == null && (t.__ = !(-173 * -47 + -8160 + 29), I.sub(T)), I.props.value) : g.__;
}
function yg(g, I) {
  j.useDebugValue && j.useDebugValue(I ? I(g) : g);
}
function Mi() {
  var g = Ve(Ce++, 11);
  if (!g.__) {
    for (var I = T.__v; I !== null && !I.__m && I.__ !== null; ) I = I.__;
    var t = I.__m || (I.__m = [35 * -191 + 1158 + -5527 * -1, 4728 + 4885 * 1 + -9613]);
    g.__ = "P" + t[9632 + -41 * -211 + -18283] + "-" + t[-3331 * -1 + -9 * 589 + -9 * -219]++;
  }
  return g.__;
}
function PB() {
  for (var g; g = Ri.shift(); ) if (g.__P && g.__H) try {
    g.__H.__h.forEach(ig), g.__H.__h.forEach(v0), g.__H.__h = [];
  } catch (I) {
    g.__H.__h = [], j.__e(I, g.__v);
  }
}
j.__b = function(g) {
  T = null, Bo && Bo(g);
}, j.__ = function(g, I) {
  g && I.__k && I.__k.__m && (g.__m = I.__k.__m), ro && ro(g, I);
}, j.__r = function(g) {
  no && no(g), Ce = 7279 + 7279 * -1;
  var I = (T = g.__c).__H;
  I && (c0 === T ? (I.__h = [], T.__h = [], I.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.i = t.__N = void (-5950 + -276 * -6 + 19 * 226);
  })) : (I.__h.forEach(ig), I.__h.forEach(v0), I.__h = [], Ce = -925 * 3 + 2 * 1759 + -743)), c0 = T;
}, j.diffed = function(g) {
  Qo && Qo(g);
  var I = g.__c;
  I && I.__H && (I.__H.__h.length && (18400 + 6133 * -3 !== Ri.push(I) && Co === j.requestAnimationFrame || ((Co = j.requestAnimationFrame) || VB)(PB)), I.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.i = void (-13 * -757 + -1082 * -7 + -1 * 17415);
  })), c0 = T = null;
}, j.__c = function(g, I) {
  I.some(function(t) {
    try {
      t.__h.forEach(ig), t.__h = t.__h.filter(function(A) {
        return !A.__ || v0(A);
      });
    } catch (A) {
      I.some(function(e) {
        e.__h && (e.__h = []);
      }), I = [], j.__e(A, t.__v);
    }
  }), ao && ao(g, I);
}, j.unmount = function(g) {
  xo && xo(g);
  var I, t = g.__c;
  t && t.__H && (t.__H.__.forEach(function(A) {
    try {
      ig(A);
    } catch (e) {
      I = e;
    }
  }), t.__H = void 0, I && j.__e(I, t.__v));
};
var Eo = typeof requestAnimationFrame == "function";
function VB(g) {
  var I, t = function() {
    clearTimeout(A), Eo && cancelAnimationFrame(I), setTimeout(g);
  }, A = setTimeout(t, 100);
  Eo && (I = requestAnimationFrame(t));
}
function ig(g) {
  var I = T, t = g.__c;
  typeof t == "function" && (g.__c = void (-2862 + 1153 * 3 + 199 * -3), t()), T = I;
}
function v0(g) {
  var I = T;
  g.__c = g.__(), T = I;
}
function FI(g, I) {
  return !g || g.length !== I.length || I.some(function(t, A) {
    return t !== g[A];
  });
}
function Li(g, I) {
  return typeof I == "function" ? I(g) : I;
}
function Ji(g, I) {
  for (var t in I) g[t] = I[t];
  return g;
}
function U0(g, I) {
  for (var t in g) if (t !== "__source" && !(t in I)) return !(-7871 + 17 * 463);
  for (var A in I) if (A !== "__source" && g[A] !== I[A]) return !(-1 * 293 + 6670 + -7 * 911);
  return !1;
}
function W0(g, I) {
  this.props = g, this.context = I;
}
function XB(g, I) {
  function t(e) {
    var o = this.props.ref, i = o == e.ref;
    return !i && o && (o.call ? o(null) : o.current = null), I ? !I(this.props, e) || !i : U0(this.props, e);
  }
  function A(e) {
    return this.shouldComponentUpdate = t, hA(g, e);
  }
  return A.displayName = "Memo(" + (g.displayName || g.name) + ")", A.prototype.isReactComponent = !(2 * 564 + 915 + -2043), A.__f = !(10482 + -10482 * 1), A;
}
(W0.prototype = new RA()).isPureReactComponent = !(-5552 + -347 * -16), W0.prototype.shouldComponentUpdate = function(g, I) {
  return U0(this.props, g) || U0(this.state, I);
};
var so = N.__b;
N.__b = function(g) {
  g.type && g.type.__f && g.ref && (g.props.ref = g.ref, g.ref = null), so && so(g);
};
var zB = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || -7348 * 1 + -11 * 825 + 20334;
function Yi(g) {
  function I(t) {
    var A = Ji({}, t);
    return delete A.ref, g(A, t.ref || null);
  }
  return I.$$typeof = zB, I.render = I, I.prototype.isReactComponent = I.__f = !(19 * -34 + 6122 * 1 + 2738 * -2), I.displayName = "ForwardRef(" + (g.displayName || g.name) + ")", I;
}
var co = function(g, I) {
  return g == null ? null : _A(_A(g).map(I));
}, _B = { map: co, forEach: co, count: function(g) {
  return g ? _A(g).length : -1 * -7919 + -6572 + 1347 * -1;
}, only: function(g) {
  var I = _A(g);
  if (9320 + -1 * -4978 + -493 * 29 !== I.length) throw "Children.only";
  return I[6907 * 1 + -5587 + -1320];
}, toArray: _A }, $B = N.__e;
N.__e = function(g, I, t, A) {
  if (g.then) {
    for (var e, o = I; o = o.__; ) if ((e = o.__c) && e.__c) return I.__e == null && (I.__e = t.__e, I.__k = t.__k), e.__c(g, I);
  }
  $B(g, I, t, A);
};
var ho = N.unmount;
function vi(g, I, t) {
  return g && (g.__c && g.__c.__H && (g.__c.__H.__.forEach(function(A) {
    typeof A.__c == "function" && A.__c();
  }), g.__c.__H = null), (g = Ji({}, g)).__c != null && (g.__c.__P === t && (g.__c.__P = I), g.__c = null), g.__k = g.__k && g.__k.map(function(A) {
    return vi(A, I, t);
  })), g;
}
function Ui(g, I, t) {
  return g && t && (g.__v = null, g.__k = g.__k && g.__k.map(function(A) {
    return Ui(A, I, t);
  }), g.__c && g.__c.__P === I && (g.__e && t.appendChild(g.__e), g.__c.__e = !(350 * 8 + 8844 + -11644), g.__c.__P = t)), g;
}
function Cg() {
  this.__u = -9755 * -1 + 67 * -26 + -8013, this.t = null, this.__b = null;
}
function Wi(g) {
  var I = g.__.__c;
  return I && I.__a && I.__a(g);
}
function An(g) {
  var I, t, A;
  function e(o) {
    if (I || (I = g()).then(function(i) {
      t = i.default || i;
    }, function(i) {
      A = i;
    }), A) throw A;
    if (!t) throw I;
    return hA(t, o);
  }
  return e.displayName = "Lazy", e.__f = !(-37 * 1 + -5 * -1509 + -1 * 7508), e;
}
function Bt() {
  this.u = null, this.o = null;
}
N.unmount = function(g) {
  var I = g.__c;
  I && I.__R && I.__R(), I && 41 * 230 + 4067 + -13465 & g.__u && (g.type = null), ho && ho(g);
}, (Cg.prototype = new RA()).__c = function(g, I) {
  var t = I.__c, A = this;
  A.t == null && (A.t = []), A.t.push(t);
  var e = Wi(A.__v), o = !(2 * 1861 + 3075 + -6796), i = function() {
    o || (o = !(5175 + -9 * 575), t.__R = null, e ? e(C) : C());
  };
  t.__R = i;
  var C = function() {
    if (!--A.__u) {
      if (A.state.__a) {
        var B = A.state.__a;
        A.__v.__k[-17107 + -1 * -17107] = Ui(B, B.__c.__P, B.__c.__O);
      }
      var n;
      for (A.setState({ __a: A.__b = null }); n = A.t.pop(); ) n.forceUpdate();
    }
  };
  A.__u++ || -9826 + 318 * 31 & I.__u || A.setState({ __a: A.__b = A.__v.__k[2 * 3605 + -167 * 8 + 2 * -2937] }), g.then(i, i);
}, Cg.prototype.componentWillUnmount = function() {
  this.t = [];
}, Cg.prototype.render = function(g, I) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), A = this.__v.__k[-25 * -151 + -6092 + -2317 * -1].__c;
      this.__v.__k[1 * 8711 + 139 * 13 + -10518] = vi(this.__b, t, A.__O = A.__P);
    }
    this.__b = null;
  }
  var e = I.__a && hA(MA, null, g.fallback);
  return e && (e.__u &= -(-3408 * 2 + -243 * -29 + -198)), [hA(MA, null, I.__a ? null : g.children), e];
};
var lo = function(g, I, t) {
  if (++t[1] === t[0] && g.o.delete(I), g.props.revealOrder && (g.props.revealOrder[0] !== "t" || !g.o.size)) for (t = g.u; t; ) {
    for (; t.length > 8685 + 1 * -1941 + -6741; ) t.pop()();
    if (t[-3 * 886 + -2378 + 73 * 69] < t[-139 * -53 + 2568 + -5 * 1987]) break;
    g.u = t = t[2087 * -1 + -9862 * 1 + 11951];
  }
};
function en(g) {
  return this.getChildContext = function() {
    return g.context;
  }, g.children;
}
function tn(g) {
  var I = this, t = g.i;
  I.componentWillUnmount = function() {
    ie(null, I.l), I.l = null, I.i = null;
  }, I.i && I.i !== t && I.componentWillUnmount(), I.l || (I.i = t, I.l = { nodeType: 1, parentNode: t, childNodes: [], contains: function() {
    return !(-67 * 1 + 55 * 99 + -5378);
  }, appendChild: function(A) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, insertBefore: function(A, e) {
    this.childNodes.push(A), I.i.appendChild(A);
  }, removeChild: function(A) {
    this.childNodes.splice(this.childNodes.indexOf(A) >>> 9085 + 19 * -361 + -445 * 5, 619 * -13 + -3646 + 11694 * 1), I.i.removeChild(A);
  } }), ie(hA(en, { context: I.context }, g.__v), I.l);
}
function gn(g, I) {
  var t = {};
  t.__v = g, t.i = I;
  var A = hA(tn, t);
  return A.containerInfo = I, A;
}
(Bt.prototype = new RA()).__a = function(g) {
  var I = this, t = Wi(I.__v), A = I.o.get(g);
  return A[2474 + 29 * -277 + -17 * -327]++, function(e) {
    var o = function() {
      I.props.revealOrder ? (A.push(e), lo(I, g, A)) : e();
    };
    t ? t(o) : o();
  };
}, Bt.prototype.render = function(g) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var I = _A(g.children);
  g.revealOrder && g.revealOrder[1731 + -9123 * -1 + -10854] === "b" && I.reverse();
  for (var t = I.length; t--; ) this.o.set(I[t], this.u = [71 * -43 + 988 * 7 + -1 * 3862, -20 * -425 + -2516 * -1 + -34 * 324, this.u]);
  return g.children;
}, Bt.prototype.componentDidUpdate = Bt.prototype.componentDidMount = function() {
  var g = this;
  this.o.forEach(function(I, t) {
    lo(g, t, I);
  });
};
var Hi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || -108589 + 1 * -62948 + -23164 * -10, In = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, on = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Cn = /[A-Z0-9]/g, Bn = typeof document < "u", nn = function(g) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(g);
};
function Qn(g, I, t) {
  return I.__k == null && (I.textContent = ""), ie(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
function an(g, I, t) {
  return GI(g, I), typeof t == "function" && t(), g ? g.__c : null;
}
RA.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(g) {
  Object.defineProperty(RA.prototype, g, { configurable: !(-848 * -5 + 1 * 6773 + -11013), get: function() {
    return this["UNSAFE_" + g];
  }, set: function(I) {
    var t = {};
    t.configurable = !(-2447 * -3 + -1 * 7991 + -50 * -13), t.writable = !(-1 * -6269 + -362 * -17 + -12423), t.value = I, Object.defineProperty(this, g, t);
  } });
});
var uo = N.event;
function xn() {
}
function rn() {
  return this.cancelBubble;
}
function En() {
  return this.defaultPrevented;
}
N.event = function(g) {
  return uo && (g = uo(g)), g.persist = xn, g.isPropagationStopped = rn, g.isDefaultPrevented = En, g.nativeEvent = g;
};
var Bg = {};
Bg.enumerable = !(838 * 5 + -3442 * -2 + -11073), Bg.configurable = !(-497 * 17 + -1 * 5659 + 14108), Bg.get = function() {
  return this.class;
};
var RI, sn = Bg, fo = N.vnode;
N.vnode = function(g) {
  typeof g.type == "string" && function(I) {
    var t = I.props, A = I.type, e = {};
    for (var o in t) {
      var i = t[o];
      if (!(o === "value" && "defaultValue" in t && i == null || Bn && o === "children" && A === "noscript" || o === "class" || o === "className")) {
        var C = o.toLowerCase();
        o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && !(-7435 + 10 * -890 + 16335) === i ? i = "" : C === "translate" && i === "no" ? i = !(3524 * -2 + 9615 + -1 * 2566) : C === "ondoubleclick" ? o = "ondblclick" : C !== "onchange" || A !== "input" && A !== "textarea" || nn(t.type) ? C === "onfocus" ? o = "onfocusin" : C === "onblur" ? o = "onfocusout" : on.test(o) ? o = C : -(-3130 + 1 * 3131) === A.indexOf("-") && In.test(o) ? o = o.replace(Cn, "-$&").toLowerCase() : i === null && (i = void (523 * 13 + -2 * 3333 + -133 * 1)) : C = o = "oninput", C === "oninput" && e[o = C] && (o = "oninputCapture"), e[o] = i;
      }
    }
    A == "select" && e.multiple && Array.isArray(e.value) && (e.value = _A(t.children).forEach(function(B) {
      B.props.selected = -(-773 * -11 + -9861 + -1359 * -1) != e.value.indexOf(B.props.value);
    })), A == "select" && e.defaultValue != null && (e.value = _A(t.children).forEach(function(B) {
      B.props.selected = e.multiple ? e.defaultValue.indexOf(B.props.value) != -1 : e.defaultValue == B.props.value;
    })), t.class && !t.className ? (e.class = t.class, Object.defineProperty(e, "className", sn)) : (t.className && !t.class || t.class && t.className) && (e.class = e.className = t.className), I.props = e;
  }(g), g.$$typeof = Hi, fo && fo(g);
};
var Do = N.__r;
N.__r = function(g) {
  Do && Do(g), RI = g.__c;
};
var yo = N.diffed;
N.diffed = function(g) {
  yo && yo(g);
  var I = g.props, t = g.__e;
  t != null && g.type === "textarea" && "value" in I && I.value !== t.value && (t.value = I.value == null ? "" : I.value), RI = null;
};
var BA = {};
BA.readContext = function(g) {
  return RI.__n[g.__c].props.value;
}, BA.useCallback = $A, BA.useContext = me, BA.useDebugValue = yg, BA.useDeferredValue = Ti, BA.useEffect = _, BA.useId = Mi, BA.useImperativeHandle = Si, BA.useInsertionEffect = ji, BA.useLayoutEffect = Xe, BA.useMemo = pA, BA.useReducer = bI, BA.useRef = UA, BA.useState = wA, BA.useSyncExternalStore = Pi, BA.useTransition = Zi;
var Ki = {};
Ki.current = BA;
var Oi = {};
Oi.ReactCurrentDispatcher = Ki;
var cn = Oi;
function dn(g) {
  return hA.bind(null, g);
}
function A0(g) {
  return !!g && g.$$typeof === Hi;
}
function hn(g) {
  return A0(g) && g.type === MA;
}
function ln(g) {
  return !!g && !!g.displayName && (typeof g.displayName == "string" || g.displayName instanceof String) && g.displayName.startsWith("Memo(");
}
function un(g) {
  return A0(g) ? kI.apply(null, arguments) : g;
}
function fn(g) {
  return !!g.__k && (ie(null, g), !(9234 * -1 + -9457 + 18691));
}
function Dn(g) {
  return g && (g.base || 6397 * 1 + 3827 + -10223 === g.nodeType && g) || null;
}
var yn = function(g, I) {
  return g(I);
}, wn = function(g, I) {
  return g(I);
}, pn = MA;
function qi(g) {
  g();
}
function Ti(g) {
  return g;
}
function Zi() {
  return [!1, qi];
}
var ji = Xe, mn = A0;
function Pi(g, I) {
  var t = I(), A = wA({ h: { __: t, v: I } }), e = A[-122 * -35 + 5 * 1708 + 105 * -122].h, o = A[46 * 137 + -1 * 1383 + -2 * 2459];
  return Xe(function() {
    e.__ = t, e.v = I, d0(e) && o({ h: e });
  }, [g, t, I]), _(function() {
    return d0(e) && o({ h: e }), g(function() {
      d0(e) && o({ h: e });
    });
  }, [g]), t;
}
function d0(g) {
  var I, t, A = g.v, e = g.__;
  try {
    var o = A();
    return !((I = e) === (t = o) && (-7144 + 2500 * -4 + 17144 !== I || (1874 + 1873 * -1) / I == (-9 * -865 + -1 * 3531 + -4253) / t) || I != I && t != t);
  } catch {
    return !0;
  }
}
var k = {};
k.useState = wA, k.useId = Mi, k.useReducer = bI, k.useEffect = _, k.useLayoutEffect = Xe, k.useInsertionEffect = ji, k.useTransition = Zi, k.useDeferredValue = Ti, k.useSyncExternalStore = Pi, k.startTransition = qi, k.useRef = UA, k.useImperativeHandle = Si, k.useMemo = pA, k.useCallback = $A, k.useContext = me, k.useDebugValue = yg, k.version = "17.0.2", k.Children = _B, k.render = Qn, k.hydrate = an, k.unmountComponentAtNode = fn, k.createPortal = gn, k.createElement = hA, k.createContext = Ot, k.createFactory = dn, k.cloneElement = un, k.createRef = SB, k.Fragment = MA, k.isValidElement = A0, k.isElement = mn, k.isFragment = hn, k.isMemo = ln, k.findDOMNode = Dn, k.Component = RA, k.PureComponent = W0, k.memo = XB, k.forwardRef = Yi, k.flushSync = wn, k.unstable_batchedUpdates = yn, k.StrictMode = pn, k.Suspense = Cg, k.SuspenseList = Bt, k.lazy = An, k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cn;
var ye = k, Gn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kn(g) {
  return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function Nn(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
}
function bn(g) {
  return g && Object.prototype.hasOwnProperty.call(g, "default") && Object.keys(g).length === 1 ? g.default : g;
}
function Fn(g) {
  if (g.__esModule) return g;
  var I = g.default;
  if (typeof I == "function") {
    var t = function A() {
      return this instanceof A ? Reflect.construct(I, arguments, this.constructor) : I.apply(this, arguments);
    };
    t.prototype = I.prototype;
  } else t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(g).forEach(function(A) {
    var e = Object.getOwnPropertyDescriptor(g, A);
    Object.defineProperty(t, A, e.get ? e : {
      enumerable: !0,
      get: function() {
        return g[A];
      }
    });
  }), t;
}
const Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonjsGlobal: Gn,
  getAugmentedNamespace: Fn,
  getDefaultExportFromCjs: kn,
  getDefaultExportFromNamespaceIfNotNamed: bn,
  getDefaultExportFromNamespaceIfPresent: Nn
}, Symbol.toStringTag, { value: "Module" }));
var Sn = function(I, t, A, e) {
  var o = A ? A.call(e, I, t) : void 0;
  if (o !== void (6625 + 1 * 8542 + -15167)) return !!o;
  if (I === t) return !0;
  if (typeof I != "object" || !I || typeof t != "object" || !t) return !1;
  var i = Object.keys(I), C = Object.keys(t);
  if (i.length !== C.length) return !1;
  for (var B = Object.prototype.hasOwnProperty.bind(t), n = -8797 + -8797 * -1; n < i.length; n++) {
    var a = i[n];
    if (!B(a)) return !1;
    var Q = I[a], E = t[a];
    if (o = A ? A.call(e, Q, E, a) : void (309 * -8 + 1 * -3386 + 5858), o === !1 || o === void (2108 + 17 * -124) && Q !== E) return !1;
  }
  return !0;
};
const Mn = Rn.getDefaultExportFromCjs(Sn);
var q = "-ms-", ct = "-moz-", U = "-webkit-", Vi = "comm", e0 = "rule", SI = "decl", Ln = "@import", Xi = "@keyframes", Jn = "@layer", zi = Math.abs, MI = String.fromCharCode, H0 = Object.assign;
function Yn(g, I) {
  return oA(g, 5492 * 1 + 1 * -4489 + -17 * 59) ^ 45 ? (((I << 2 ^ oA(g, -1 * 6938 + 9483 + -2545)) << -2 * -2023 + -7176 + -54 * -58 ^ oA(g, 1)) << -4376 + -1 * -3303 + 1075 ^ oA(g, 1 * 7286 + -286 + 1 * -6998)) << 4 * 829 + 1 + -3315 ^ oA(g, -4885 * -2 + 5555 + 7661 * -2) : 0;
}
function _i(g) {
  return g.trim();
}
function jA(g, I) {
  return (g = I.exec(g)) ? g[5127 + 7631 * -1 + -313 * -8] : g;
}
function b(g, I, t) {
  return g.replace(I, t);
}
function ng(g, I, t) {
  return g.indexOf(I, t);
}
function oA(g, I) {
  return g.charCodeAt(I) | 0;
}
function Oe(g, I, t) {
  return g.slice(I, t);
}
function KA(g) {
  return g.length;
}
function $i(g) {
  return g.length;
}
function nt(g, I) {
  return I.push(g), g;
}
function vn(g, I) {
  return g.map(I).join("");
}
function wo(g, I) {
  return g.filter(function(t) {
    return !jA(t, I);
  });
}
var t0 = 1, qe = -5606 * 1 + -359 * -21 + 84 * -23, AC = 0, LA = -10 * -344 + 50 * 55 + -6190, eA = 0, ze = "";
function g0(g, I, t, A, e, o, i, C) {
  var B = {};
  return B.value = g, B.root = I, B.parent = t, B.type = A, B.props = e, B.children = o, B.line = t0, B.column = qe, B.length = i, B.return = "", B.siblings = C, B;
}
function te(g, I) {
  return H0(g0("", null, null, "", null, null, -2422 + -346 * -7, g.siblings), g, { length: -g.length }, I);
}
function be(g) {
  for (; g.root; ) g = te(g.root, { children: [g] });
  nt(g, g.siblings);
}
function Un() {
  return eA;
}
function Wn() {
  return eA = LA > 25 * 127 + -9469 + 2 * 3147 ? oA(ze, --LA) : 74 * 113 + 4053 + -12415, qe--, eA === 1137 + -7 * 161 && (qe = -2634 + 5 * 527, t0--), eA;
}
function vA() {
  return eA = LA < AC ? oA(ze, LA++) : 0, qe++, eA === 1 * -2217 + -4 * 35 + 2367 && (qe = -4221 + 3 * -1698 + -548 * -17, t0++), eA;
}
function ue() {
  return oA(ze, LA);
}
function Qg() {
  return LA;
}
function I0(g, I) {
  return Oe(ze, g, I);
}
function K0(g) {
  switch (g) {
    case 6 * -919 + -9678 + 15192:
    case 167 * -1 + 1 * 7614 + -3719 * 2:
    case 3634 + -2 * 859 + -1 * 1906:
    case 13:
    case 32:
      return 1798 + -1793 * 1;
    case -2712 + -2012 * -1 + 733:
    case 36 * 193 + 146 + -7051:
    case 44:
    case 47:
    case -14285 + -1 * -14347:
    case 4 * -1578 + 4709 + 1667:
    case 3798 + -17 * 216:
    case -4140 + 174 * -40 + 11159:
    case -2 * -3121 + 2176 + -8295 * 1:
    case 7500 + -14 * -291 + 1 * -11449:
      return 4;
    case 58:
      return 1 * 36 + -9454 + 1 * 9421;
    case -3177 * 1 + 4575 + 2 * -682:
    case 7601 + 2 * -730 + -3051 * 2:
    case 40:
    case -4 * 1869 + -6250 + 13817:
      return 168 + -14 * -107 + -1664;
    case -5711 * -1 + 78 * 49 + -9492:
    case -1189 + -641 * -2:
      return 9809 + 1 * -5451 + -1 * 4357;
  }
  return -1551 * 5 + -419 * -21 + 174 * -6;
}
function Hn(g) {
  return t0 = qe = 8026 + 3 * -417 + 6 * -1129, AC = KA(ze = g), LA = -2583 + 6537 * 1 + -2 * 1977, [];
}
function Kn(g) {
  return ze = "", g;
}
function h0(g) {
  return _i(I0(LA - (-6393 + -593 * -3 + 4615), O0(g === -5 * 503 + 6600 + 1997 * -2 ? g + (-8770 + -41 * 127 + 1 * 13979) : g === -856 + -7 * -128 ? g + (1333 * 4 + -1259 + -4072) : g)));
}
function On(g) {
  for (; (eA = ue()) && eA < 8634 * 1 + 2222 + -79 * 137; ) vA();
  return K0(g) > 2 || K0(eA) > -1 * -5545 + 9689 + -15231 ? "" : " ";
}
function qn(g, I) {
  for (; --I && vA() && !(eA < 241 * -6 + 5421 + -231 * 17 || eA > -1 * -5 + 512 * -4 + -5 * -429 || eA > 4616 + -4559 * 1 && eA < 14087 + -1 * 14022 || eA > 1 * -2267 + 2041 + 296 && eA < 8241 + -509 * 16); ) ;
  return I0(g, Qg() + (I < -535 * 5 + -3854 + 6535 && ue() == 57 * -5 + 1114 * -5 + 5887 && vA() == -1 * -1137 + 7765 + -887 * 10));
}
function O0(g) {
  for (; vA(); ) switch (eA) {
    case g:
      return LA;
    case 407 * 20 + -1799 * -3 + -13503:
    case 10496 + 1 * -10457:
      g !== -9288 + 122 * -6 + -457 * -22 && g !== 2 * -2348 + 1 * -5852 + -10587 * -1 && O0(eA);
      break;
    case 40:
      g === -3 * -93 + -2545 + 2307 && O0(g);
      break;
    case 424 * 1 + -9819 * -1 + 1 * -10151:
      vA();
      break;
  }
  return LA;
}
function Tn(g, I) {
  for (; vA() && g + eA !== 6038 + -3307 * 1 + 22 * -122 + (1371 * 6 + 13 * -18 + 7982 * -1); ) if (g + eA === -37 * -31 + -6349 + 2622 * 2 + (-1271 + 1313 * 1) && ue() === 1 * -3690 + 2 * -2283 + 8303) break;
  return "/*" + I0(I, LA - (10971 + 2194 * -5)) + "*" + MI(g === 230 * 5 + -23 * -73 + -2782 ? g : vA());
}
function Zn(g) {
  for (; !K0(ue()); ) vA();
  return I0(g, LA);
}
function jn(g) {
  return Kn(ag("", null, null, null, [""], g = Hn(g), -7404 + 10 * -223 + 9634 * 1, [-3848 + -4586 * -2 + 22 * -242], g));
}
function ag(g, I, t, A, e, o, i, C, B) {
  for (var n = 0, a = 4 * 215 + -1299 * -4 + 3028 * -2, Q = i, E = 11 * -401 + 1 * -981 + 5392, r = 5832 + -7900 * 1 + 44 * 47, s = 2082 * 2 + -9969 + -3 * -1935, d = -445 * 4 + -1327 + 3108, h = -3419 + 855 * 4, x = 7993 + 12 * -666, u = -1 * -6889 + -2326 + -1 * 4563, w = "", R = e, S = o, M = A, y = w; h; ) switch (s = u, u = vA()) {
    case 1585 + 1 * -4879 + 3334 * 1:
      if (s != 12629 + 1 * -12521 && oA(y, Q - (-3034 + -68 * 83 + 8679)) == 2795 + 7 * -391) {
        ng(y += b(h0(u), "&", "&\f"), "&\f", zi(n ? C[n - 1] : 1 * 5594 + -2054 + 20 * -177)) != -(25 * -28 + 8532 + -7831) && (x = -(3 * 1542 + -1 * 6557 + 161 * 12));
        break;
      }
    case 34:
    case -47 * 145 + 4040 + 2814:
    case -3572 + -17 * -356 + 1 * -2389:
      y += h0(u);
      break;
    case -8248 * 1 + 6759 + 1498:
    case 12845 + 755 * -17:
    case 7533 + 15 * -407 + -5 * 283:
    case 205 + 485 * -11 + -89 * -58:
      y += On(s);
      break;
    case 3 * 2151 + 5884 + -12245:
      y += qn(Qg() - (-2792 + 109 * -17 + -23 * -202), 7);
      continue;
    case 47:
      switch (ue()) {
        case 177 * -2 + 9599 + -9203 * 1:
        case 3 * 794 + 3 * -1679 + 1351 * 2:
          nt(Pn(Tn(vA(), Qg()), I, t, B), B);
          break;
        default:
          y += "/";
      }
      break;
    case (-9 * 499 + -1 * 5233 + 9847) * d:
      C[n++] = KA(y) * x;
    case (4005 + 3113 * -3 + 53 * 103) * d:
    case 1949 + -14 * 135:
    case 0:
      switch (u) {
        case -9 * -759 + -5081 * -1 + -11912:
        case 370 * 5 + -1 * -2653 + -4378 * 1:
          h = 2 * 3892 + 8647 + -16431;
        case 7941 * 1 + -9259 * 1 + -9 * -153 + a:
          x == -(-89 * 89 + 3298 + 4624) && (y = b(y, /\f/g, "")), r > -5 * 1447 + -8203 + 15438 && KA(y) - Q && nt(r > 2899 + -2867 * 1 ? mo(y + ";", A, t, Q - (3290 + -1 * 1421 + -1868), B) : mo(b(y, " ", "") + ";", A, t, Q - (-7543 + 9 * -903 + -8 * -1959), B), B);
          break;
        case 59:
          y += ";";
        default:
          if (nt(M = po(y, I, t, n, a, e, C, w, R = [], S = [], Q, o), o), u === -1104 + -1 * 4641 + 5868 * 1)
            if (a === 1087 + 1087 * -1) ag(y, I, M, M, R, o, Q, C, S);
            else switch (E === 99 && oA(y, 129 * -71 + -9415 + 1 * 18577) === 67 * -98 + 7958 + 641 * -2 ? 1846 * -3 + -125 * -73 + -3487 : E) {
              case 1166 * 1 + 5540 + -6606:
              case -104 * 26 + 7843 + -5031:
              case 11138 + 11029 * -1:
              case -3233 + 1 * 274 + 53 * 58:
                ag(g, M, M, A && nt(po(g, M, M, 62 * 148 + 8857 * -1 + -319, 0, e, C, w, e, R = [], Q, S), S), e, S, Q, C, A ? R : S);
                break;
              default:
                ag(y, M, M, M, [""], S, 129 * 41 + -769 * 3 + -2982, C, S);
            }
      }
      n = a = r = 15455 + 11 * -1405, d = x = 8105 * 1 + 1183 + -9287, w = y = "", Q = i;
      break;
    case 7950 + 1 * 3259 + -11151:
      Q = 7 * -1049 + -540 * 2 + -216 * -39 + KA(y), r = s;
    default:
      if (d < -6 * 703 + 6010 + -597 * 3) {
        if (u == -221 * -45 + -7787 + -2035) --d;
        else if (u == 342 * 1 + -1 * -6718 + -95 * 73 && d++ == 0 && Wn() == -8690 + 9 * -555 + 13810) continue;
      }
      switch (y += MI(u), u * d) {
        case -286 * -1 + -12 + 59 * -4:
          x = a > 453 + -3603 * -2 + 207 * -37 ? 6691 + 7 * -67 + -1 * 6221 : (y += "\f", -(-29 * -272 + -164 * 34 + -2311));
          break;
        case 295 * 2 + -1 * -9686 + -10232:
          C[n++] = (KA(y) - (2278 * 1 + 6072 + -8349)) * x, x = 3399 + 1 * 3607 + -1 * 7005;
          break;
        case -4 * -373 + 7449 + 33 * -269:
          ue() === -78 * -31 + -8 * -1151 + -11581 && (y += h0(vA())), E = ue(), a = Q = KA(w = y += Zn(Qg())), u++;
          break;
        case -939 + -8660 * 1 + 2 * 4822:
          s === 1 * -3214 + -17 * 295 + -8274 * -1 && KA(y) == 1693 * -2 + 1 * 7133 + 35 * -107 && (d = 1 * 2589 + 1 * 1579 + -4168);
      }
  }
  return o;
}
function po(g, I, t, A, e, o, i, C, B, n, a, Q) {
  for (var E = e - 1, r = e === 1748 * -4 + -3078 + -190 * -53 ? o : [""], s = $i(r), d = -85 * -38 + -6703 + 23 * 151, h = 23 * 53 + -3 * 335 + -214, x = 1673 + -1941 * 3 + 166 * 25; d < A; ++d) for (var u = 0, w = Oe(g, E + (1529 + -211 * -43 + -10601), E = zi(h = i[d])), R = g; u < s; ++u) (R = _i(h > 8458 * -1 + 2795 + 5663 ? r[u] + " " + w : b(w, /&\f/g, r[u]))) && (B[x++] = R);
  return g0(g, I, t, e === 0 ? e0 : C, B, n, a, Q);
}
function Pn(g, I, t, A) {
  return g0(g, I, t, Vi, MI(Un()), Oe(g, 2, -(-5388 + 1 * -4231 + 9621)), -8597 + -66 * 104 + 15461, A);
}
function mo(g, I, t, A, e) {
  return g0(g, I, t, SI, Oe(g, 5 * -1847 + -6 * 169 + 10249, A), Oe(g, A + (-5246 + 1 * 2043 + 3204), -(447 * -13 + -3811 * -2 + -5 * 362)), A, e);
}
function eC(g, I, t) {
  switch (Yn(g, I)) {
    case -5730 + 5 * 757 + 4 * 1762:
      return U + "print-" + g + g;
    case -547 * -18 + -1 * -10629 + 1 * -14738:
    case 895 * 4 + 9060 + 87 * -97:
    case -48 * 40 + 9778 + 1 * -4681:
    case 3433:
    case 8860 + 895 * 9 + -2182 * 7:
    case -3775 + -28 * -294:
    case 4673 * -1 + -8911 * -1 + -1317:
    case 8920 + -1 * -9363 + -1 * 12711:
    case 6092 * -1 + -1 * 1063 + 59 * 229:
    case 3856 * -1 + 1297 * -1 + 10997:
    case 3191:
    case -10145 + 2339 * -1 + 19129:
    case -22 * -356 + 2 * -3259 + 1691:
    case -87 * -92 + 2 * -3299 + 4985:
    case 5009 + 1 * 870:
    case -26 * 49 + 1249 + 4 * 1412:
    case -2059 + 614 * 6 + 4510:
    case 26 * -122 + -5337 * -1 + 2434:
    case 4 * 1889 + -2 * 1298 + 7 * -15:
    case 1831 * -3 + -3615 + 4441 * 3:
    case -1 * -6037 + 7372 + 270 * -26:
    case 7 * 479 + -2024 + 3780:
    case 148 * -64 + 4450 + 10387:
    case 29 * 381 + -1 * 11013 + 5 * 1117:
    case 1777 * 5 + 1347 * -2 + -1 * 2362:
      return U + g + g;
    case -6 * -659 + 1082 * 7 + -6739:
      return ct + g + g;
    case -4365 * 1 + -94 * 17 + -112 * -101:
    case 2519 * -2 + -8292 + 169 * 104:
    case 19 * -11 + -4692 + 1 * 9711:
    case 4858 + -1055 * -2:
    case 674 * 2 + -4 * 2177 + 281 * 36:
      return U + g + ct + g + q + g + g;
    case 1099 + 9 * 320 + 103 * 19:
      switch (oA(g, I + (270 + 1245 * -1 + 986))) {
        case 8 * 221 + -3497 + -1 * -1843:
          return U + g + q + b(g, /[svh]\w+-[tblr]{2}/, "tb") + g;
        case 1 * 4209 + 4036 + -8137 * 1:
          return U + g + q + b(g, /[svh]\w+-[tblr]{2}/, "tb-rl") + g;
        case 7707 + 1 * -9047 + -5 * -277:
          return U + g + q + b(g, /[svh]\w+-[tblr]{2}/, "lr") + g;
      }
    case -1338 + -27 * 336 + 78 * 221:
    case 1 * 4887 + -435 * 14 + 5471:
    case -1348 + 485 * -9 + -8616 * -1:
      return U + g + q + g + g;
    case -1477 * -3 + 957 + 777 * 1:
      return U + g + q + "flex-" + g + g;
    case -9040 + 7561 * 1 + -101 * -66:
      return U + g + b(g, /(\w+).+(:[^]+)/, U + "box-$1$2" + q + "flex-$1$2") + g;
    case 2269 * -1 + 6260 * 1 + 1452:
      return U + g + q + "flex-item-" + b(g, /flex-|-self/g, "") + (jA(g, /flex-|baseline/) ? "" : q + "grid-row-" + b(g, /flex-|-self/g, "")) + g;
    case -6960 + -9647 * -1 + 14 * 142:
      return U + g + q + "flex-line-pack" + b(g, /align-content|flex-|-self/g, "") + g;
    case -607 * -14 + 1 * 399 + 3349 * -1:
      return U + g + q + b(g, "shrink", "negative") + g;
    case 5292:
      return U + g + q + b(g, "basis", "preferred-size") + g;
    case 6060:
      return U + "box-" + b(g, "-grow", "") + U + g + q + b(g, "grow", "positive") + g;
    case -18089 + -1 * -22643:
      return U + b(g, /([^-])(transform)/g, "$1" + U + "$2") + g;
    case -1473 + -2 * -2796 + -11 * -188:
      return b(b(b(g, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), g, "") + g;
    case 7104 + 437 * -19 + 6694:
    case -479 * 13 + 3141 + 5 * 1409:
      return b(g, /(image-set\([^]*)/, U + "$1$`$1");
    case 1 * 505 + -3022 * -1 + 1441:
      return b(b(g, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + q + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + g + g;
    case -9197 * 1 + -4724 * 2 + 22845:
      if (!jA(g, /flex-|baseline/)) return q + "grid-column-align" + Oe(g, I) + g;
      break;
    case 6234 + 6 * -607:
    case 13 * 199 + 2 * -2255 + 5283:
      return q + b(g, "template-", "") + g;
    case -458 * 6 + 4238 + 2894:
    case 6631 + -11 * 433 + 1748:
      return t && t.some(function(A, e) {
        return I = e, jA(A.props, /grid-\w+-end/);
      }) ? ~ng(g + (t = t[I].value), "span", 2906 * -1 + -1 * -4787 + -1881) ? g : q + b(g, "-start", "") + g + q + "grid-row-span:" + (~ng(t, "span", -5837 + 1 * -6837 + 12674) ? jA(t, /\d+/) : +jA(t, /\d+/) - +jA(g, /\d+/)) + ";" : q + b(g, "-start", "") + g;
    case -4 * -1493 + -56 * -178 + -11044:
    case 9 * -223 + 305 * -7 + -1654 * -5:
      return t && t.some(function(A) {
        return jA(A.props, /grid-\w+-start/);
      }) ? g : q + b(b(g, "-end", "-span"), "span ", "") + g;
    case -1 * -9737 + 7339 * 1 + 3 * -4327:
    case 17 * 39 + 795 + 425 * 5:
    case 34 * -101 + -5710 + -13212 * -1:
    case 5260 + -143 * -45 + 539 * -17:
      return b(g, /(.+)-inline(.+)/, U + "$1$2") + g;
    case -14141 + -2716 * 5 + 35837:
    case 2098 + -325 * 23 + 12436:
    case 8 * 898 + 2 * 1031 + -3493:
    case 1745 * -6 + 4948 + 11057:
    case 1 * 9359 + 2814 * 3 + -3089 * 4:
    case 5701:
    case 5 * 1487 + 6487 + 101 * -89:
    case -3187 * -1 + -2638 + -3 * -1376:
    case -2091 + 1087 * 1 + 2179 * 3:
    case 8890 + -3046 * -1 + 683 * -9:
    case 3409 + 4 * 403:
    case 2732 + -3 * 309 + 2960:
      if (KA(g) - (-109 * 25 + -9337 + 12063) - I > -2 * -4583 + 322 * 7 + -11414) switch (oA(g, I + (1621 * 2 + 966 + -4207))) {
        case -5854 + 77 * 113 + -2738:
          if (oA(g, I + (493 + -643 * 13 + 7870)) !== 98 * 88 + 179 * 47 + -48 * 354) break;
        case -10733 + 1 * 10835:
          return b(g, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + ct + (oA(g, I + (4631 + -2994 * 3 + 311 * 14)) == 18261 + 2017 * -9 ? "$3" : "$2-$3")) + g;
        case -6031 + -359 * 13 + 10813:
          return ~ng(g, "stretch", 1120 * 6 + -1 * -622 + -1 * 7342) ? eC(b(g, "stretch", "fill-available"), I, t) + g : g;
      }
      break;
    case -4 * -2514 + -4713 * 1 + -1 * 191:
    case -9277 * 1 + -1849 + 17046:
      return b(g, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(A, e, o, i, C, B, n) {
        return q + e + ":" + o + n + (i ? q + e + "-span:" + (C ? B : +B - +o) + n : "") + g;
      });
    case 9625 + -1418 * -7 + -14602:
      if (oA(g, I + (-17 * -83 + 6790 + -8195)) === -7487 + 1671 * -2 + 10950) return b(g, ":", ":" + U) + g;
      break;
    case -2253 + -508 * 1 + 9205:
      switch (oA(g, oA(g, -2975 + -149 * 7 + 4032) === -4681 * -1 + -9891 * -1 + 14527 * -1 ? 9769 + 1 * -4289 + -5462 : -5668 + 7 * 81 + 4 * 1278)) {
        case 1130 + -101 * 10:
          return b(g, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + U + (oA(g, 1 * -4818 + 8186 + -129 * 26) === 45 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + q + "$2box$3") + g;
        case -1 * -4376 + 4097 + -8373:
          return b(g, ":", ":" + q) + g;
      }
      break;
    case -14688 + 20407 * 1:
    case -5386 + -1751 * -4 + -21 * -49:
    case 2 * -4547 + -7837 + 2 * 9533:
    case 3927:
    case 5 * -1006 + 1 * 7795 + -374:
      return b(g, "scroll-", "scroll-snap-") + g;
  }
  return g;
}
function wg(g, I) {
  for (var t = "", A = 3045 + 45 * -137 + 48 * 65; A < g.length; A++) t += I(g[A], A, g, I) || "";
  return t;
}
function Vn(g, I, t, A) {
  switch (g.type) {
    case Jn:
      if (g.children.length) break;
    case Ln:
    case SI:
      return g.return = g.return || g.value;
    case Vi:
      return "";
    case Xi:
      return g.return = g.value + "{" + wg(g.children, A) + "}";
    case e0:
      if (!KA(g.value = g.props.join(","))) return "";
  }
  return KA(t = wg(g.children, A)) ? g.return = g.value + "{" + t + "}" : "";
}
function Xn(g) {
  var I = $i(g);
  return function(t, A, e, o) {
    for (var i = "", C = 9300 + -465 * 20; C < I; C++) i += g[C](t, A, e, o) || "";
    return i;
  };
}
function zn(g) {
  return function(I) {
    I.root || (I = I.return) && g(I);
  };
}
function _n(g, I, t, A) {
  if (g.length > -(1924 * -4 + -124 * 66 + 15881 * 1) && !g.return)
    switch (g.type) {
      case SI:
        g.return = eC(g.value, g.length, t);
        return;
      case Xi:
        return wg([te(g, { value: b(g.value, "@", "@" + U) })], A);
      case e0:
        if (g.length) return vn(t = g.props, function(e) {
          switch (jA(e, A = /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              be(te(g, { props: [b(e, /:(read-\w+)/, ":" + ct + "$1")] }));
              var o = {};
              o.props = [e], be(te(g, o)), H0(g, { props: wo(t, A) });
              break;
            case "::placeholder":
              be(te(g, { props: [b(e, /:(plac\w+)/, ":" + U + "input-$1")] })), be(te(g, { props: [b(e, /:(plac\w+)/, ":" + ct + "$1")] })), be(te(g, { props: [b(e, /:(plac\w+)/, q + "input-$1")] }));
              var i = {};
              i.props = [e], be(te(g, i)), H0(g, { props: wo(t, A) });
              break;
          }
          return "";
        });
    }
}
var G = {};
G.animationIterationCount = 1, G.aspectRatio = 1, G.borderImageOutset = 1, G.borderImageSlice = 1, G.borderImageWidth = 1, G.boxFlex = 1, G.boxFlexGroup = 1, G.boxOrdinalGroup = 1, G.columnCount = 1, G.columns = 1, G.flex = 1, G.flexGrow = 1, G.flexPositive = 1, G.flexShrink = 1, G.flexNegative = 1, G.flexOrder = 1, G.gridRow = 1, G.gridRowEnd = 1, G.gridRowSpan = 1, G.gridRowStart = 1, G.gridColumn = 1, G.gridColumnEnd = 1, G.gridColumnSpan = 1, G.gridColumnStart = 1, G.msGridRow = 1, G.msGridRowSpan = 1, G.msGridColumn = 1, G.msGridColumnSpan = 1, G.fontWeight = 1, G.lineHeight = 1, G.opacity = 1, G.order = 1, G.orphans = 1, G.tabSize = 1, G.widows = 1, G.zIndex = 1, G.zoom = 1, G.WebkitLineClamp = 1, G.fillOpacity = 1, G.floodOpacity = 1, G.stopOpacity = 1, G.strokeDasharray = 1, G.strokeDashoffset = 1, G.strokeMiterlimit = 1, G.strokeOpacity = 1, G.strokeWidth = 1;
var $n = G, Y = {}, we = typeof process < "u" && void (-99 * 83 + -4131 + 12348) !== Y && (Y.REACT_APP_SC_ATTR || Y.SC_ATTR) || "data-styled", tC = "active", gC = "data-styled-version", o0 = "6.1.11", LI = `/*!sc*/
`, JI = typeof window < "u" && "HTMLElement" in window, AQ = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && void (5153 + -5153 * 1) !== Y && void (7110 + -1 * -6778 + -13888) !== Y.REACT_APP_SC_DISABLE_SPEEDY && Y.REACT_APP_SC_DISABLE_SPEEDY !== "" ? Y.REACT_APP_SC_DISABLE_SPEEDY !== "false" && Y.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && void (-3 * -1782 + 9 * 359 + -1 * 8577) !== Y && Y.SC_DISABLE_SPEEDY !== void 0 && Y.SC_DISABLE_SPEEDY !== "" ? Y.SC_DISABLE_SPEEDY !== "false" && Y.SC_DISABLE_SPEEDY : Y.NODE_ENV !== "production"), Go = /invalid hook call/i, _t = /* @__PURE__ */ new Set(), eQ = function(g, I) {
  if (Y.NODE_ENV !== "production") {
    var t = I ? ' with the id of "'.concat(I, '"') : "", A = "The component ".concat(g).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, e = console.error;
    try {
      var o = !0;
      console.error = function(i) {
        for (var C = [], B = 4227 + 2 * -257 + 32 * -116; B < arguments.length; B++) C[B - (125 + 4 * -31)] = arguments[B];
        Go.test(i) ? (o = !1, _t.delete(A)) : e.apply(void (239 * -3 + 10 * -941 + 10127), He([i], C, !1));
      }, UA(), o && !_t.has(A) && (console.warn(A), _t.add(A));
    } catch (i) {
      Go.test(i.message) && _t.delete(A);
    } finally {
      console.error = e;
    }
  }
}, i0 = Object.freeze([]), Te = Object.freeze({});
function tQ(g, I, t) {
  return void (3820 + -955 * 4) === t && (t = Te), g.theme !== t.theme && g.theme || I || t.theme;
}
var q0 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), gQ = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, IQ = /(^-|-$)/g;
function ko(g) {
  return g.replace(gQ, "-").replace(IQ, "");
}
var oQ = /(a)(d)/gi, $t = -2155 * 4 + -8510 + 11 * 1562, No = function(g) {
  return String.fromCharCode(g + (g > -253 * -19 + -4 + -4778 ? 39 : 97));
};
function T0(g) {
  var I, t = "";
  for (I = Math.abs(g); I > $t; I = I / $t | 2 * 735 + 2 * 2789 + -7048) t = No(I % $t) + t;
  return (No(I % $t) + t).replace(oQ, "$1-$2");
}
var l0, IC = -9228 + -25 * -71 + 12834, xe = function(g, I) {
  for (var t = I.length; t; ) g = (2027 + -22 * -130 + 2 * -2427) * g ^ I.charCodeAt(--t);
  return g;
}, oC = function(g) {
  return xe(IC, g);
};
function iQ(g) {
  return T0(oC(g) >>> 0);
}
function iC(g) {
  return Y.NODE_ENV !== "production" && typeof g == "string" && g || g.displayName || g.name || "Component";
}
function u0(g) {
  return typeof g == "string" && (Y.NODE_ENV === "production" || g.charAt(1548 * 6 + 1 * 1317 + -10605) === g.charAt(-15 * -56 + 6463 + -7303).toLowerCase());
}
var NA = {};
NA.childContextTypes = !0, NA.contextType = !0, NA.contextTypes = !0, NA.defaultProps = !0, NA.displayName = !0, NA.getDefaultProps = !0, NA.getDerivedStateFromError = !0, NA.getDerivedStateFromProps = !0, NA.mixins = !0, NA.propTypes = !0, NA.type = !0;
var ge = {};
ge.name = !0, ge.length = !0, ge.prototype = !0, ge.caller = !0, ge.callee = !0, ge.arguments = !0, ge.arity = !0;
var Qe = {};
Qe.$$typeof = !0, Qe.compare = !0, Qe.defaultProps = !0, Qe.displayName = !0, Qe.propTypes = !0, Qe.type = !0;
var Me = {};
Me.$$typeof = !0, Me.render = !0, Me.defaultProps = !0, Me.displayName = !0, Me.propTypes = !0;
var CC = typeof Symbol == "function" && Symbol.for, BC = CC ? Symbol.for("react.memo") : -76641 + 68378 * 2, CQ = CC ? Symbol.for("react.forward_ref") : 15989 * 2 + 47142 + -19008, BQ = NA, nQ = ge, nC = Qe, QQ = ((l0 = {})[CQ] = Me, l0[BC] = nC, l0);
function bo(g) {
  return ("type" in (I = g) && I.type.$$typeof) === BC ? nC : "$$typeof" in g ? QQ[g.$$typeof] : BQ;
  var I;
}
var aQ = Object.defineProperty, xQ = Object.getOwnPropertyNames, Fo = Object.getOwnPropertySymbols, rQ = Object.getOwnPropertyDescriptor, EQ = Object.getPrototypeOf, Ro = Object.prototype;
function QC(g, I, t) {
  if (typeof I != "string") {
    if (Ro) {
      var A = EQ(I);
      A && A !== Ro && QC(g, A, t);
    }
    var e = xQ(I);
    Fo && (e = e.concat(Fo(I)));
    for (var o = bo(g), i = bo(I), C = 2955 + -1 * 2955; C < e.length; ++C) {
      var B = e[C];
      if (!(B in nQ || t && t[B] || i && B in i || o && B in o)) {
        var n = rQ(I, B);
        try {
          aQ(g, B, n);
        } catch {
        }
      }
    }
  }
  return g;
}
function Ze(g) {
  return typeof g == "function";
}
function YI(g) {
  return typeof g == "object" && "styledComponentId" in g;
}
function Ee(g, I) {
  return g && I ? "".concat(g, " ").concat(I) : g || I || "";
}
function So(g, I) {
  if (-5400 + 421 * 3 + -7 * -591 === g.length) return "";
  for (var t = g[-529 * 12 + -2294 * 2 + 10936], A = 1; A < g.length; A++) t += g[A];
  return t;
}
function je(g) {
  return g !== null && typeof g == "object" && g.constructor.name === Object.name && !("props" in g && g.$$typeof);
}
function Z0(g, I, t) {
  if (void (2578 + -1289 * 2) === t && (t = !1), !t && !je(g) && !Array.isArray(g)) return I;
  if (Array.isArray(I))
    for (var A = -3 * -1048 + 6283 + -9427 * 1; A < I.length; A++) g[A] = Z0(g[A], I[A]);
  else if (je(I))
    for (var A in I) g[A] = Z0(g[A], I[A]);
  return g;
}
function vI(g, I) {
  var t = {};
  t.value = I, Object.defineProperty(g, "toString", t);
}
var tA = {};
tA[1] = `Cannot create styled-component for component: %s.

`, tA[2] = `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, tA[3] = `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, tA[4] = `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, tA[5] = `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, tA[6] = `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, tA[7] = 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', tA[8] = `ThemeProvider: Please make your "theme" prop an object.

`, tA[9] = "Missing document `<head>`\n\n", tA[10] = `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, tA[11] = `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, tA[12] = "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", tA[13] = `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, tA[14] = `ThemeProvider: "theme" prop is required.

`, tA[15] = "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", tA[16] = `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, tA[17] = `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, tA[18] = "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`";
var sQ = Y.NODE_ENV !== "production" ? tA : {};
function cQ() {
  for (var g = [], I = -125 * 64 + -4087 + 1 * 12087; I < arguments.length; I++) g[I] = arguments[I];
  for (var t = g[-2884 + -4 * -721], A = [], e = -2353 + -2 * -1177, o = g.length; e < o; e += -6585 + -2 * -3293) A.push(g[e]);
  return A.forEach(function(i) {
    t = t.replace(/%[a-z]/, i);
  }), t;
}
function _e(g) {
  for (var I = [], t = 4 * 2226 + 394 * -2 + 8115 * -1; t < arguments.length; t++) I[t - (94 * 67 + 632 + -169 * 41)] = arguments[t];
  return Y.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(g, " for more information.").concat(I.length > 390 + 1321 * -1 + 931 ? " Args: ".concat(I.join(", ")) : "")) : new Error(cQ.apply(void (4408 + 1 * 1814 + -2074 * 3), He([sQ[g]], I, !1)).trim());
}
var dQ = function() {
  function g(I) {
    this.groupSizes = new Uint32Array(5309 * 1 + -5881 + 1084), this.length = 512, this.tag = I;
  }
  return g.prototype.indexOfGroup = function(I) {
    for (var t = -2 * 925 + -8809 * -1 + 1 * -6959, A = 10 * -463 + -1662 + 44 * 143; A < I; A++) t += this.groupSizes[A];
    return t;
  }, g.prototype.insertRules = function(I, t) {
    if (I >= this.groupSizes.length) {
      for (var A = this.groupSizes, e = A.length, o = e; I >= o; ) if ((o <<= 1687 + -7 * -1368 + -11262) < -1 * 267 + -447 * -11 + -6 * 775) throw _e(-6901 + 6469 * -1 + 4462 * 3, "".concat(I));
      this.groupSizes = new Uint32Array(o), this.groupSizes.set(A), this.length = o;
      for (var i = e; i < o; i++) this.groupSizes[i] = -1 * -8133 + -3071 * -3 + -98 * 177;
    }
    for (var C = this.indexOfGroup(I + (4620 + -2 * 4497 + 4375)), B = (i = -5519 * 1 + 8770 + -3251, t.length); i < B; i++) this.tag.insertRule(C, t[i]) && (this.groupSizes[I]++, C++);
  }, g.prototype.clearGroup = function(I) {
    if (I < this.length) {
      var t = this.groupSizes[I], A = this.indexOfGroup(I), e = A + t;
      this.groupSizes[I] = 9322 + -2 * 387 + -8548;
      for (var o = A; o < e; o++) this.tag.deleteRule(A);
    }
  }, g.prototype.getGroup = function(I) {
    var t = "";
    if (I >= this.length || -9239 + -1033 * 2 + 11305 === this.groupSizes[I]) return t;
    for (var A = this.groupSizes[I], e = this.indexOfGroup(I), o = e + A, i = e; i < o; i++) t += "".concat(this.tag.getRule(i)).concat(LI);
    return t;
  }, g;
}(), hQ = 13845 + 3461 * -4 << -3099 + -21 * -149, xg = /* @__PURE__ */ new Map(), pg = /* @__PURE__ */ new Map(), rg = 273 * 13 + 1 * -7745 + -1 * -4197, Ag = function(g) {
  if (xg.has(g)) return xg.get(g);
  for (; pg.has(rg); ) rg++;
  var I = rg++;
  if (Y.NODE_ENV !== "production" && ((0 | I) < 0 || I > hQ)) throw _e(-6259 * -1 + -9107 + -1432 * -2, "".concat(I));
  return xg.set(g, I), pg.set(I, g), I;
}, lQ = function(g, I) {
  rg = I + 1, xg.set(g, I), pg.set(I, g);
}, uQ = "style[".concat(we, "][").concat(gC, '="').concat(o0, '"]'), fQ = new RegExp("^".concat(we, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), DQ = function(g, I, t) {
  for (var A, e = t.split(","), o = 0, i = e.length; o < i; o++) (A = e[o]) && g.registerName(I, A);
}, yQ = function(g, I) {
  for (var t, A = ((t = I.textContent) !== null && void (1 * -67 + -5626 + 5693) !== t ? t : "").split(LI), e = [], o = 3656 * -1 + 2192 + -244 * -6, i = A.length; o < i; o++) {
    var C = A[o].trim();
    if (C) {
      var B = C.match(fQ);
      if (B) {
        var n = 0 | parseInt(B[1], 10), a = B[-2 * -2203 + -254 * 16 + 4 * -85];
        -2043 + 17 * -523 + -10934 * -1 !== n && (lQ(a, n), DQ(g, a, B[3]), g.getTag().insertRules(n, e)), e.length = -4046 * -1 + 1 * -3497 + -9 * 61;
      } else e.push(C);
    }
  }
};
function wQ() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var aC = function(g) {
  var I = document.head, t = g || I, A = document.createElement("style"), e = function(C) {
    var B = Array.from(C.querySelectorAll("style[".concat(we, "]")));
    return B[B.length - 1];
  }(t), o = void (-1 * 9363 + 6172 * -1 + 15535) !== e ? e.nextSibling : null;
  A.setAttribute(we, tC), A.setAttribute(gC, o0);
  var i = wQ();
  return i && A.setAttribute("nonce", i), t.insertBefore(A, o), A;
}, pQ = function() {
  function g(I) {
    this.element = aC(I), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet) return t.sheet;
      for (var A = document.styleSheets, e = 9496 + -6922 * 1 + -234 * 11, o = A.length; e < o; e++) {
        var i = A[e];
        if (i.ownerNode === t) return i;
      }
      throw _e(17);
    }(this.element), this.length = -1 * 6331 + -7898 + 14229;
  }
  return g.prototype.insertRule = function(I, t) {
    try {
      return this.sheet.insertRule(t, I), this.length++, !0;
    } catch {
      return !1;
    }
  }, g.prototype.deleteRule = function(I) {
    this.sheet.deleteRule(I), this.length--;
  }, g.prototype.getRule = function(I) {
    var t = this.sheet.cssRules[I];
    return t && t.cssText ? t.cssText : "";
  }, g;
}(), mQ = function() {
  function g(I) {
    this.element = aC(I), this.nodes = this.element.childNodes, this.length = 1918 + -959 * 2;
  }
  return g.prototype.insertRule = function(I, t) {
    if (I <= this.length && I >= 5197 + 5197 * -1) {
      var A = document.createTextNode(t);
      return this.element.insertBefore(A, this.nodes[I] || null), this.length++, !0;
    }
    return !1;
  }, g.prototype.deleteRule = function(I) {
    this.element.removeChild(this.nodes[I]), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.nodes[I].textContent : "";
  }, g;
}(), GQ = function() {
  function g(I) {
    this.rules = [], this.length = -3170 + -1349 * 1 + 4519;
  }
  return g.prototype.insertRule = function(I, t) {
    return I <= this.length && (this.rules.splice(I, 5 * 1493 + -9817 + 2352, t), this.length++, !0);
  }, g.prototype.deleteRule = function(I) {
    this.rules.splice(I, 2188 + -27 * 81), this.length--;
  }, g.prototype.getRule = function(I) {
    return I < this.length ? this.rules[I] : "";
  }, g;
}(), Mo = JI, kQ = { isServer: !JI, useCSSOMInjection: !AQ }, xC = function() {
  function g(I, t, A) {
    void (15084 + 1 * -15084) === I && (I = Te), void (3 * -1115 + 3205 * -2 + 9755) === t && (t = {});
    var e = this;
    this.options = fA(fA({}, kQ), I), this.gs = t, this.names = new Map(A), this.server = !!I.isServer, !this.server && JI && Mo && (Mo = !1, function(o) {
      for (var i = document.querySelectorAll(uQ), C = -10 * -9 + 114 + -204, B = i.length; C < B; C++) {
        var n = i[C];
        n && n.getAttribute(we) !== tC && (yQ(o, n), n.parentNode && n.parentNode.removeChild(n));
      }
    }(this)), vI(this, function() {
      return function(o) {
        for (var i = o.getTag(), C = i.length, B = "", n = function(Q) {
          var E = function(x) {
            return pg.get(x);
          }(Q);
          if (void (-1468 * 2 + 9108 + -6172) === E) return "continue";
          var r = o.names.get(E), s = i.getGroup(Q);
          if (void (13 * 615 + -3870 + -5 * 825) === r || 5 * -772 + -38 * 238 + 8 * 1613 === s.length) return "continue";
          var d = "".concat(we, ".g").concat(Q, '[id="').concat(E, '"]'), h = "";
          r !== void 0 && r.forEach(function(x) {
            x.length > 0 && (h += "".concat(x, ","));
          }), B += "".concat(s).concat(d, '{content:"').concat(h, '"}').concat(LI);
        }, a = 355 + 355 * -1; a < C; a++) n(a);
        return B;
      }(e);
    });
  }
  return g.registerId = function(I) {
    return Ag(I);
  }, g.prototype.reconstructWithOptions = function(I, t) {
    return t === void 0 && (t = !0), new g(fA(fA({}, this.options), I), this.gs, t && this.names || void 0);
  }, g.prototype.allocateGSInstance = function(I) {
    return this.gs[I] = (this.gs[I] || -1 * 3725 + -9117 + 12842) + (10909 + 303 * -36);
  }, g.prototype.getTag = function() {
    return this.tag || (this.tag = (I = function(t) {
      var A = t.useCSSOMInjection, e = t.target;
      return t.isServer ? new GQ(e) : A ? new pQ(e) : new mQ(e);
    }(this.options), new dQ(I)));
    var I;
  }, g.prototype.hasNameForId = function(I, t) {
    return this.names.has(I) && this.names.get(I).has(t);
  }, g.prototype.registerName = function(I, t) {
    if (Ag(I), this.names.has(I)) this.names.get(I).add(t);
    else {
      var A = /* @__PURE__ */ new Set();
      A.add(t), this.names.set(I, A);
    }
  }, g.prototype.insertRules = function(I, t, A) {
    this.registerName(I, t), this.getTag().insertRules(Ag(I), A);
  }, g.prototype.clearNames = function(I) {
    this.names.has(I) && this.names.get(I).clear();
  }, g.prototype.clearRules = function(I) {
    this.getTag().clearGroup(Ag(I)), this.clearNames(I);
  }, g.prototype.clearTag = function() {
    this.tag = void (9143 * -1 + 4429 + 4714);
  }, g;
}(), NQ = /&/g, bQ = /^\s*\/\/.*$/gm;
function rC(g, I) {
  return g.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(I, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(I, " ")), t.props = t.props.map(function(A) {
      return "".concat(I, " ").concat(A);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = rC(t.children, I)), t;
  });
}
function EC(g) {
  var I, t, A, e = g === void 0 ? Te : g, o = e.options, i = o === void 0 ? Te : o, C = e.plugins, B = void (5729 * -1 + -16 * -344 + 225) === C ? i0 : C, n = function(E, r, s) {
    return s.startsWith(t) && s.endsWith(t) && s.replaceAll(t, "").length > 303 * -19 + 3746 + 2011 ? ".".concat(I) : E;
  }, a = B.slice();
  a.push(function(E) {
    E.type === e0 && E.value.includes("&") && (E.props[-9452 + -4 * -2363] = E.props[-621 * 5 + 2282 + 1 * 823].replace(NQ, t).replace(A, n));
  }), i.prefix && a.push(_n), a.push(Vn);
  var Q = function(E, r, s, d) {
    void (-1 * -3647 + 1217 * 2 + 1 * -6081) === r && (r = ""), void (-6482 * -1 + 5501 * -1 + 327 * -3) === s && (s = ""), void (-1 * -6571 + 6562 + -13133) === d && (d = "&"), I = d, t = r, A = new RegExp("\\".concat(t, "\\b"), "g");
    var h = E.replace(bQ, ""), x = jn(s || r ? "".concat(s, " ").concat(r, " { ").concat(h, " }") : h);
    i.namespace && (x = rC(x, i.namespace));
    var u = [];
    return wg(x, Xn(a.concat(zn(function(w) {
      return u.push(w);
    })))), u;
  };
  return Q.hash = B.length ? B.reduce(function(E, r) {
    return r.name || _e(4358 + -392 * 7 + -1599), xe(E, r.name);
  }, IC).toString() : "", Q;
}
var FQ = new xC(), j0 = EC(), UI = ye.createContext({ shouldForwardProp: void (4984 + 1246 * -4), styleSheet: FQ, stylis: j0 });
UI.Consumer;
var RQ = ye.createContext(void (-2381 + 1 * 2381));
function P0() {
  return me(UI);
}
function SQ(g) {
  var I = wA(g.stylisPlugins), t = I[347 * 14 + -2198 + -2660], A = I[6 * 1163 + -114 * -2 + -7205], e = P0().styleSheet, o = pA(function() {
    var a = e, Q = {};
    return Q.useCSSOMInjection = !1, g.sheet ? a = g.sheet : g.target && (a = a.reconstructWithOptions({ target: g.target }, !1)), g.disableCSSOMInjection && (a = a.reconstructWithOptions(Q)), a;
  }, [g.disableCSSOMInjection, g.sheet, g.target, e]), i = pA(function() {
    var a = {};
    a.namespace = g.namespace, a.prefix = g.enableVendorPrefixes;
    var Q = {};
    return Q.options = a, Q.plugins = t, EC(Q);
  }, [g.enableVendorPrefixes, g.namespace, t]);
  _(function() {
    Mn(t, g.stylisPlugins) || A(g.stylisPlugins);
  }, [g.stylisPlugins]);
  var C = pA(function() {
    var a = {};
    return a.shouldForwardProp = g.shouldForwardProp, a.styleSheet = o, a.stylis = i, a;
  }, [g.shouldForwardProp, o, i]), B = {};
  B.value = C;
  var n = {};
  return n.value = i, ye.createElement(UI.Provider, B, ye.createElement(RQ.Provider, n, g.children));
}
var Lo = function() {
  function g(I, t) {
    var A = this;
    this.inject = function(e, o) {
      void (3 * -641 + 7732 + 37 * -157) === o && (o = j0);
      var i = A.name + o.hash;
      e.hasNameForId(A.id, i) || e.insertRules(A.id, i, o(A.rules, i, "@keyframes"));
    }, this.name = I, this.id = "sc-keyframes-".concat(I), this.rules = t, vI(this, function() {
      throw _e(-2126 + -8557 * -1 + 917 * -7, String(A.name));
    });
  }
  return g.prototype.getName = function(I) {
    return void (2008 * -1 + -2 * -4075 + -83 * 74) === I && (I = j0), this.name + I.hash;
  }, g;
}(), MQ = function(g) {
  return g >= "A" && g <= "Z";
};
function Jo(g) {
  for (var I = "", t = 2339 + -4934 * -1 + -7273; t < g.length; t++) {
    var A = g[t];
    if (-1 * -95 + 7 * -1363 + 3 * 3149 === t && A === "-" && g[11736 + -163 * 72] === "-") return g;
    MQ(A) ? I += "-" + A.toLowerCase() : I += A;
  }
  return I.startsWith("ms-") ? "-" + I : I;
}
var sC = function(g) {
  return g == null || g === !1 || g === "";
}, cC = function(g) {
  var I, t, A = [];
  for (var e in g) {
    var o = g[e];
    g.hasOwnProperty(e) && !sC(o) && (Array.isArray(o) && o.isCss || Ze(o) ? A.push("".concat(Jo(e), ":"), o, ";") : je(o) ? A.push.apply(A, He(He(["".concat(e, " {")], cC(o), !1), ["}"], !1)) : A.push("".concat(Jo(e), ": ").concat((I = e, (t = o) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || 4265 * 1 + 1 * -8837 + 762 * 6 === t || I in $n || I.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return A;
};
function fe(g, I, t, A) {
  if (sC(g)) return [];
  if (YI(g)) return [".".concat(g.styledComponentId)];
  if (Ze(g)) {
    if (!Ze(o = g) || o.prototype && o.prototype.isReactComponent || !I) return [g];
    var e = g(I);
    return Y.NODE_ENV === "production" || typeof e != "object" || Array.isArray(e) || e instanceof Lo || je(e) || e === null || console.error("".concat(iC(g), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), fe(e, I, t, A);
  }
  var o;
  return g instanceof Lo ? t ? (g.inject(t, A), [g.getName(A)]) : [g] : je(g) ? cC(g) : Array.isArray(g) ? Array.prototype.concat.apply(i0, g.map(function(i) {
    return fe(i, I, t, A);
  })) : [g.toString()];
}
function LQ(g) {
  for (var I = 4400 + -3104 * -1 + -7504 * 1; I < g.length; I += 1 * 7012 + -88 * -2 + -7187) {
    var t = g[I];
    if (Ze(t) && !YI(t)) return !1;
  }
  return !0;
}
var JQ = oC(o0), YQ = function() {
  function g(I, t, A) {
    this.rules = I, this.staticRulesId = "", this.isStatic = Y.NODE_ENV === "production" && (void (-3273 + -28 * -226 + -65 * 47) === A || A.isStatic) && LQ(I), this.componentId = t, this.baseHash = xe(JQ, t), this.baseStyle = A, xC.registerId(t);
  }
  return g.prototype.generateAndInjectStyles = function(I, t, A) {
    var e = this.baseStyle ? this.baseStyle.generateAndInjectStyles(I, t, A) : "";
    if (this.isStatic && !A.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId)) e = Ee(e, this.staticRulesId);
      else {
        var o = So(fe(this.rules, I, t, A)), i = T0(xe(this.baseHash, o) >>> 5664 + 9 * 359 + -5 * 1779);
        if (!t.hasNameForId(this.componentId, i)) {
          var C = A(o, ".".concat(i), void 0, this.componentId);
          t.insertRules(this.componentId, i, C);
        }
        e = Ee(e, i), this.staticRulesId = i;
      }
    else {
      for (var B = xe(this.baseHash, A.hash), n = "", a = 1 * -655 + -3 * -134 + 253; a < this.rules.length; a++) {
        var Q = this.rules[a];
        if (typeof Q == "string") n += Q, Y.NODE_ENV !== "production" && (B = xe(B, Q));
        else if (Q) {
          var E = So(fe(Q, I, t, A));
          B = xe(B, E + a), n += E;
        }
      }
      if (n) {
        var r = T0(B >>> 0);
        t.hasNameForId(this.componentId, r) || t.insertRules(this.componentId, r, A(n, ".".concat(r), void (388 * -7 + -5707 + 8423), this.componentId)), e = Ee(e, r);
      }
    }
    return e;
  }, g;
}(), dC = ye.createContext(void (-1 * -4729 + -3022 + 569 * -3));
dC.Consumer;
var f0 = {}, Yo = /* @__PURE__ */ new Set();
function vQ(g, I, t) {
  var A = YI(g), e = g, o = !u0(g), i = I.attrs, C = void (-6299 + -1 * 4866 + 11165) === i ? i0 : i, B = I.componentId, n = void (1 * -4191 + -5 * -1883 + 2612 * -2) === B ? function(S, M) {
    var y = typeof S != "string" ? "sc" : ko(S);
    f0[y] = (f0[y] || -1908 * 1 + 2647 * 3 + 6033 * -1) + (3 * -298 + -40 * -213 + 61 * -125);
    var Z = "".concat(y, "-").concat(iQ(o0 + y + f0[y]));
    return M ? "".concat(M, "-").concat(Z) : Z;
  }(I.displayName, I.parentComponentId) : B, a = I.displayName, Q = void (6740 * 1 + -5 * 1409 + -61 * -5) === a ? function(S) {
    return u0(S) ? "styled.".concat(S) : "Styled(".concat(iC(S), ")");
  }(g) : a, E = I.displayName && I.componentId ? "".concat(ko(I.displayName), "-").concat(I.componentId) : I.componentId || n, r = A && e.attrs ? e.attrs.concat(C).filter(Boolean) : C, s = I.shouldForwardProp;
  if (A && e.shouldForwardProp) {
    var d = e.shouldForwardProp;
    if (I.shouldForwardProp) {
      var h = I.shouldForwardProp;
      s = function(S, M) {
        return d(S, M) && h(S, M);
      };
    } else s = d;
  }
  var x = new YQ(t, E, A ? e.componentStyle : void (-1721 * 3 + 6470 + -1307 * 1));
  function u(S, M) {
    return function(y, Z, J) {
      var z = y.attrs, ke = y.componentStyle, pB = y.defaultProps, mB = y.foldedComponentIds, $I = y.styledComponentId, GB = y.target, kB = ye.useContext(dC), NB = P0(), a0 = y.shouldForwardProp || NB.shouldForwardProp;
      Y.NODE_ENV !== "production" && yg($I);
      var Ao = tQ(Z, kB, pB) || Te, ZA = function(Pt, tt, Vt) {
        var Ne = {};
        Ne.className = void (3833 * 1 + 7675 * 1 + -14 * 822), Ne.theme = Vt;
        for (var E0, Be = fA(fA({}, tt), Ne), s0 = 0; s0 < Pt.length; s0 += 4512 + -64 * -135 + -13151 * 1) {
          var Xt = Ze(E0 = Pt[s0]) ? E0(Be) : E0;
          for (var ee in Xt) Be[ee] = ee === "className" ? Ee(Be[ee], Xt[ee]) : ee === "style" ? fA(fA({}, Be[ee]), Xt[ee]) : Xt[ee];
        }
        return tt.className && (Be.className = Ee(Be.className, tt.className)), Be;
      }(z, Z, Ao), At = ZA.as || GB, et = {};
      for (var GA in ZA) void (1 * -734 + -6107 * 1 + 1 * 6841) === ZA[GA] || GA[-5010 + 1002 * 5] === "$" || GA === "as" || GA === "theme" && ZA.theme === Ao || (GA === "forwardedAs" ? et.as = ZA.forwardedAs : a0 && !a0(GA, At) || (et[GA] = ZA[GA], a0 || Y.NODE_ENV !== "development" || jB(GA) || Yo.has(GA) || !q0.has(At) || (Yo.add(GA), console.warn('styled-components: it looks like an unknown prop "'.concat(GA, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var x0 = function(Pt, tt) {
        var Vt = P0(), Ne = Pt.generateAndInjectStyles(tt, Vt.styleSheet, Vt.stylis);
        return Y.NODE_ENV !== "production" && yg(Ne), Ne;
      }(ke, ZA);
      Y.NODE_ENV !== "production" && y.warnTooManyClasses && y.warnTooManyClasses(x0);
      var r0 = Ee(mB, $I);
      return x0 && (r0 += " " + x0), ZA.className && (r0 += " " + ZA.className), et[u0(At) && !q0.has(At) ? "class" : "className"] = r0, et.ref = J, hA(At, et);
    }(w, S, M);
  }
  u.displayName = Q;
  var w = ye.forwardRef(u), R = {};
  return R.attrs = !0, R.componentStyle = !0, R.displayName = !0, R.foldedComponentIds = !0, R.shouldForwardProp = !0, R.styledComponentId = !0, R.target = !0, w.attrs = r, w.componentStyle = x, w.displayName = Q, w.shouldForwardProp = s, w.foldedComponentIds = A ? Ee(e.foldedComponentIds, e.styledComponentId) : "", w.styledComponentId = E, w.target = A ? e.target : g, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = A ? function(M) {
      for (var y = [], Z = 1; Z < arguments.length; Z++) y[Z - 1] = arguments[Z];
      for (var J = 1235 * 7 + -5858 + -2787, z = y; J < z.length; J++) Z0(M, z[J], !0);
      return M;
    }({}, e.defaultProps, S) : S;
  } }), Y.NODE_ENV !== "production" && (eQ(Q, E), w.warnTooManyClasses = /* @__PURE__ */ function(S, M) {
    var y = {}, Z = !1;
    return function(J) {
      if (!Z && (y[J] = !0, Object.keys(y).length >= -4641 + 47 * 103)) {
        var z = M ? ' with the id of "'.concat(M, '"') : "";
        console.warn("Over ".concat(17244 + 2 * -8522, " classes were generated for component ").concat(S).concat(z, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), Z = !0, y = {};
      }
    };
  }(Q, E)), vI(w, function() {
    return ".".concat(w.styledComponentId);
  }), o && QC(w, g, R), w;
}
function vo(g, I) {
  for (var t = [g[0]], A = 10 * 326 + -701 + -2559 * 1, e = I.length; A < e; A += 1009 * -7 + 131 * -65 + 15579) t.push(I[A], g[A + (-8800 + -5 * 82 + -9211 * -1)]);
  return t;
}
var Uo = function(g) {
  var I = {};
  return I.isCss = !0, Object.assign(g, I);
};
function UQ(g) {
  for (var I = [], t = 7661 + 20 * -383; t < arguments.length; t++) I[t - 1] = arguments[t];
  if (Ze(g) || je(g)) return Uo(fe(vo(i0, He([g], I, !0))));
  var A = g;
  return -643 * 13 + -5991 + 14350 === I.length && -9893 + 1 * 1861 + 8033 === A.length && typeof A[-1 * -5912 + 9645 + -15557] == "string" ? fe(A) : Uo(fe(vo(A, I)));
}
function V0(g, I, t) {
  if (void (2 * 2513 + -29 * -101 + 7955 * -1) === t && (t = Te), !I) throw _e(-614 + 23 * 237 + -4836, I);
  var A = function(e) {
    for (var o = [], i = 4959 + 4958 * -1; i < arguments.length; i++) o[i - (69 * -35 + -2924 + -12 * -445)] = arguments[i];
    return g(I, t, UQ.apply(void (-10 * 633 + 6719 + -389), He([e], o, !1)));
  };
  return A.attrs = function(e) {
    return V0(g, I, fA(fA({}, t), { attrs: Array.prototype.concat(t.attrs, e).filter(Boolean) }));
  }, A.withConfig = function(e) {
    return V0(g, I, fA(fA({}, t), e));
  }, A;
}
var hC = function(g) {
  return V0(vQ, g);
}, qt = hC;
q0.forEach(function(g) {
  qt[g] = hC(g);
});
Y.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var eg = "__sc-".concat(we, "__");
Y.NODE_ENV !== "production" && Y.NODE_ENV !== "test" && typeof window < "u" && (window[eg] || (window[eg] = 50 * -75 + -3209 * 2 + -248 * -41), 1171 + -2 * 585 === window[eg] && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[eg] += -9802 + 2305 * 4 + 583);
const WQ = qt.div`
  position: relative;
`, HQ = qt.video`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  display: block;
  visibility: ${(g) => g.$isVisible ? "visible" : "hidden"};
  width: 100%;
`;
class O extends Error {
  constructor(t, A) {
    super(t);
    p(this, "cause");
    this.name = "AutoCaptureError", this.cause = A;
  }
  static logError(t) {
  }
  static fromCameraError(t) {
    if (this.logError(t), t instanceof O) return t;
    let A;
    switch (t.name) {
      case "OverconstrainedError":
        A = "Minimum quality requirements are not met by your camera";
        break;
      case "NotReadableError":
      case "AbortError":
        A = "The webcam is already in use by another application";
        break;
      case "NotAllowedError":
        A = "To use your camera, you must allow permissions";
        break;
      case "NotFoundError":
        A = "There is no camera available to you";
        break;
      default:
        A = "An unknown camera error has occurred";
        break;
    }
    return new O(A, t);
  }
  static fromError(t) {
    if (this.logError(t), t instanceof O) return t;
    const A = "An unexpected error has occurred";
    return new O(A);
  }
}
const Eg = {};
Eg.CONTINUE_DETECTION = "continue-detection", Eg.SWITCH_CAMERA = "switch-camera", Eg.TOGGLE_MIRROR = "toggle-mirror";
const D0 = Eg, X0 = {};
X0.FIRST_FRAME = "first-frame", X0.FIRST_VALID_FRAME = "first-valid-frame";
const y0 = X0, lC = {};
lC.REQUEST_CAPTURE = "dot-custom-event:request-capture";
const Wo = lC;
var uC = ((g) => (g.CAMERA_PROPS_CHANGED = "document-auto-capture:camera-props-changed", g.CONTROL = "document-auto-capture:control", g.DETECTED_DOCUMENT_CHANGED = "document-auto-capture:detected-document-changed", g.DOCUMENT_DETECTION = "document-auto-capture:document-detection", g.INSTRUCTION_CHANGED = "document-auto-capture:instruction-changed", g.STATE_CHANGED = "document-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "document-auto-capture:video-element-size", g))(uC || {}), zA = ((g) => (g.CAMERA_PROPS_CHANGED = "face-auto-capture:camera-props-changed", g.CONTROL = "face-auto-capture:control", g.DETECTED_FACE_CHANGED = "face-auto-capture:detected-face-changed", g.FACE_DETECTION = "face-auto-capture:face-detection", g.INSTRUCTION_CHANGED = "face-auto-capture:instruction-changed", g.STATE_CHANGED = "face-auto-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "face-auto-capture:video-element-size", g))(zA || {}), KQ = ((g) => (g.ANIMATION_END = "magnifeye-auto-capture:animation-end", g.STATUS_CHANGED = "magnifeye-auto-capture:status-changed", g))(KQ || {}), OQ = ((g) => (g.STATUS_CHANGED = "smile-auto-capture:status-changed", g))(OQ || {}), qQ = ((g) => (g.CAMERA_PROPS_CHANGED = "palm-capture:camera-props-changed", g.CONTROL = "palm-capture:control", g.DETECTED_PALM_CHANGED = "palm-capture:detected-palm-changed", g.INSTRUCTION_CHANGED = "palm-capture:instruction-changed", g.STATE_CHANGED = "palm-capture:state-changed", g.VIDEO_ELEMENT_SIZE = "palm-capture:video-element-size", g))(qQ || {}), TQ = ((g) => (g.STATUS_CHANGED = "eye-gaze-auto-capture:status-changed", g))(TQ || {});
const fC = {};
fC.EYE_NOT_PRESENT = "eye_not_present";
const Ho = fC, sA = {};
sA.CANDIDATE_SELECTION = "candidate_selection", sA.FACE_TOO_CLOSE = "face_too_close", sA.FACE_TOO_FAR = "face_too_far", sA.FACE_CENTERING = "face_centering", sA.FACE_NOT_PRESENT = "face_not_present", sA.SHARPNESS_TOO_LOW = "sharpness_too_low", sA.BRIGHTNESS_TOO_LOW = "brightness_too_low", sA.BRIGHTNESS_TOO_HIGH = "brightness_too_high", sA.DEVICE_PITCHED = "device_pitched", sA.LEFT_EYE_NOT_PRESENT = "left_" + Ho.EYE_NOT_PRESENT, sA.RIGHT_EYE_NOT_PRESENT = "right_" + Ho.EYE_NOT_PRESENT, sA.MOUTH_NOT_PRESENT = "mouth_not_present", sA.MOUTH_SCORE_TOO_HIGH = "mouth_score_too_high", sA.MOUTH_SCORE_TOO_LOW = "mouth_score_too_low";
const IA = sA, lA = {};
lA.isPresent = IA.FACE_NOT_PRESENT, lA.isNotPitched = IA.DEVICE_PITCHED, lA.isNotSmall = IA.FACE_TOO_FAR, lA.isNotLarge = IA.FACE_TOO_CLOSE, lA.isNotOutOfBounds = IA.FACE_CENTERING, lA.isNotDim = IA.BRIGHTNESS_TOO_LOW, lA.isNotBright = IA.BRIGHTNESS_TOO_HIGH, lA.isSharp = IA.SHARPNESS_TOO_LOW, lA.isLeftEyePresent = IA.LEFT_EYE_NOT_PRESENT, lA.isRightEyePresent = IA.RIGHT_EYE_NOT_PRESENT, lA.isMouthPresent = IA.MOUTH_NOT_PRESENT, lA.isMouthScoreNotTooHigh = IA.MOUTH_SCORE_TOO_HIGH, lA.isMouthScoreNotTooLow = IA.MOUTH_SCORE_TOO_LOW;
const ZQ = lA, z0 = {};
z0.FRONT = "user", z0.REAR = "environment";
const WI = z0, _0 = {};
_0.AUTO_CAPTURE = "AUTO_CAPTURE", _0.WAIT_FOR_REQUEST = "WAIT_FOR_REQUEST";
const DC = _0, Qt = {};
Qt.LOADING = "LOADING", Qt.ERROR = "ERROR", Qt.WAITING = "WAITING", Qt.RUNNING = "RUNNING";
const yA = Qt;
({ ...IA });
var jQ = ((g) => (g.CLOSEUP = "CLOSEUP", g.DISTANT = "DISTANT", g.MIDDLE = "MIDDLE", g))(jQ || {});
({ ...IA });
({ ...IA });
const C0 = Ot(void 0);
C0.displayName = "AppStateContext";
function Tt() {
  const g = me(C0);
  if (g === void 0)
    throw new Error("useAppStateContext must be used within a AppStateProvider");
  return g;
}
const PQ = C0.Provider;
class yC extends RA {
  /**
   * creates AutoCaptureError error when unhandled error occurs
   */
  componentDidCatch() {
    var t;
    const I = new O("An unknown error has occurred");
    (t = this.context) == null || t.handleError(I);
  }
  /**
   * when app is in Error state return null
   */
  render() {
    var I;
    return ((I = this.context) == null ? void 0 : I.appState) === yA.ERROR ? null : this.props.children;
  }
}
p(yC, "contextType", C0);
const VQ = qt.canvas`
  transform: ${(g) => g.$isImageMirror ? "rotateY(180deg)" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`, XQ = qt.div`
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
function zQ() {
  return window.DOT_DEBUG_MODE ?? !1;
}
const _Q = Yi(
  ({ detectionDetails: g, isImageMirror: I }, t) => zQ() ? (console.log(g), /* @__PURE__ */ D(MA, { children: [
    /* @__PURE__ */ D(VQ, { ref: t, $isImageMirror: I }),
    /* @__PURE__ */ D(XQ, { children: /* @__PURE__ */ D("pre", { children: JSON.stringify(g, null, 2) }) })
  ] })) : null
), mg = Ot(void 0);
mg.displayName = "AnalyticsContext";
function $Q() {
  const g = me(mg);
  if (g === void 0)
    throw new Error(`${mg.displayName} must be used within a AnalyticsProvider`);
  return g;
}
(function(g, I) {
  function t(C, B, n, a, Q) {
    return aA(n - -799, a);
  }
  function A(C, B, n, a, Q) {
    return aA(C - -753, Q);
  }
  function e(C, B, n, a, Q) {
    return aA(a - -664, B);
  }
  const o = g();
  function i(C, B, n, a, Q) {
    return aA(n - 207, B);
  }
  for (; ; )
    try {
      if (-parseInt(A(-599, -604, -604, -610, "DOWl")) / 1 + parseInt(i(373, "9p*v", 379, 361, 373)) / 2 + -parseInt(i(377, "Ko#v", 368, 381, 360)) / 3 * (-parseInt(e(-492, "ksbx", -474, -493, -476)) / 4) + parseInt(e(-487, "aDa9", -497, -486, -473)) / 5 * (parseInt(i(397, "mM*q", 392, 376, 382)) / 6) + parseInt(i(360, "aDa9", 362, 358, 350)) / 7 * (-parseInt(t(-618, -632, -636, ")[7M", -619)) / 8) + -parseInt(t(-617, -649, -633, "g9AN", -649)) / 9 + parseInt(t(-643, -662, -643, "sni5", -626)) / 10 * (parseInt(i(358, "ML9^", 366, 363, 369)) / 11) === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Gg, 334295 * -1 + 1 * -346711 + 46148 * 21);
function Gg() {
  const g = ["W6PRqYG", "aIP/BSoQW5tcVYZcLW", "WPrAW6WiW7jCECozW4WkhqG", "WPO6EIa3", "W6CXWRRcS8kp", "WRhcG2iEW4zoW6VcLaibyW", "W61ZWPddLmk6", "WQKrWPuqW4XQWPSwWPONWRuC", "WOPHpG/dJZtcUhq", "WP0izmo5pZVdOSovWPy", "WOCsdHy2W41sqLSfhCkg", "WOWlaCoKW4m", "ofhcI8kAW5ZdQmouW7GssCkugtm", "c3VcRSoRzW", "WP9yW6GpW7iTr8odW682ba", "l18yW6FdHmoBW7KfmxVcIq", "W4Gaf8k0W5O", "W7LsW49lWPS", "WOWeeCk3W4i", "WRGvW5q", "WQG5cJVdKHtdGmkYW7m", "WRG/W6JcH8oIbNJcOhNdRgFdOa", "WOTHvdtdMd7cIKtdUG", "rLdcPqH0WPtdQheuW4ddS8kx", "W5D5c8o0jW", "W6NdG8oPE8oh", "W7tdI14To8kPWOrKW7a", "WPCPemo1e8kXiCkW", "hmohjdlcIYNcQuWsnmkl", "WP02zYm+", "DIldUCk6psRdMCkpWQlcRwq/", "uu1DWPRdT2NdLZddPmopW4hdJG", "WPyUFmoylSkvf8k7Fq", "WQruW7hdKu7cGN9tvMO3WRDR", "W7BdKdymWOC", "W6hdUfhdOmo+WOVcKI3cI8onequ", "W7WBc8kYW58"];
  return Gg = function() {
    return g;
  }, Gg();
}
function wC(g, I, t, A, e) {
  return aA(A - -970, g);
}
function pC(g, I, t, A, e) {
  return aA(t - -828, A);
}
function aA(g, I) {
  const t = Gg();
  return aA = function(A, e) {
    A = A - 153;
    let o = t[A];
    if (aA.RMTrLl === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      aA.uAXPyN = a, g = arguments, aA.RMTrLl = !0;
    }
    const C = t[-6230 + -37 * -91 + 2863], B = A + C, n = g[B];
    return n ? o = n : (aA.RfJVry === void 0 && (aA.RfJVry = !0), o = aA.uAXPyN(o, e), g[B] = o), o;
  }, aA(g, I);
}
const kg = Ot(void (24 * 153 + -22 * 157 + 1 * -218));
function Aa(g, I, t, A, e) {
  return aA(A - -68, e);
}
kg[pC(-659, -625, -642, "hRob") + sg("CPgH", 539, 563, 547) + "e"] = sg(")[7M", 574, 578, 572) + wC("umO8", -803, -815, -813) + sg("#uG%", 568, 558, 559);
function sg(g, I, t, A, e) {
  return aA(A - 389, g);
}
function Zt() {
  const g = me(kg);
  if (g === void (-4409 + -1327 * -1 + 3082)) throw new Error(kg[t(-219, -205, -219, "BpnG") + I(1073, 1069, 1061, "DOWl") + "e"] + (I(1066, 1081, 1067, "hRob") + e(529, "hRob", 526) + t(-194, -200, -191, "!4a^") + I(1061, 1080, 1068, "Zx[H") + I(1073, 1067, 1066, "u01i") + I(1058, 1066, 1065, "BpnG") + A(424, 440, 412, 436, "hRob") + e(522, "q%Ua", 534)));
  function I(o, i, C, B, n) {
    return wC(B, i - 318, C - 227, i - 1863);
  }
  function t(o, i, C, B, n) {
    return sg(B, i - 363, C - 49, i - -756);
  }
  function A(o, i, C, B, n) {
    return Aa(o - 201, i - 444, C - 178, o - 323, n);
  }
  function e(o, i, C, B, n) {
    return pC(o - 500, i - 285, C - 1173, i);
  }
  return g;
}
const Dt = (g) => g.length < -281 * 21 + -7158 * -1 + 1 * -1256 ? 1061 * -2 + -7755 + -1411 * -7 : g.reduce((t, A) => t + A, -8167 + -1693 * 5 + 16632) / g.length, Ae = (g) => Number.parseFloat(g.toFixed(-9748 + 274 * 34 + 15 * 29)), ea = (g) => {
  const I = g.getContext("2d");
  I && I.clearRect(4652 + -54 * 38 + -50 * 52, -7428 + 3205 * 1 + 1 * 4223, I.canvas.width, I.canvas.height);
}, mC = 4409 + 769 * -4 + 1333 * -1 + 0.75, ta = 1 * -3617 + 9671 + 68 * -89, ga = 2 * -4347 + -6 * 771 + -48 * -290, Ia = 1 * -134 + -3420 + 3554 * 1, oa = "dot-auto-capture-video", B0 = (g, I) => Math.min(g, I), GC = ({ height: g, width: I }, t) => {
  const A = B0(I, g) * t, e = (I - A) / (3112 + -169 * -29 + -8011 * 1), o = (g - A) / (-8962 + 1685 * 1 + 7279), i = {};
  return i.shiftX = e, i.shiftY = o, i.width = A, i.height = A, i;
}, ia = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = GC(g, I), i = {};
  return i.shiftX = A / g.width, i.shiftY = e / g.height, i.width = o / g.width, i.height = t / g.height, i;
}, Ca = ({ height: g, width: I }) => {
  const t = B0(I, g), A = t / (-75 * 99 + 3552 + 3876) * (1 * 2598 + -1230 + -1364);
  if (I > g) {
    const o = {};
    return o.width = A, o.height = t, o;
  }
  const e = {};
  return e.width = t, e.height = A, e;
}, Ba = (g, I) => {
  const t = B0(I.width, I.height);
  return Ae(g * t);
}, na = ({ height: g, width: I }) => {
  const t = {};
  return t.height = g, t.width = I, GC(t, mC);
}, Qa = (g) => ia(g, mC), aa = (g, I) => Ba(g, I) * ta, xa = "@innovatrics/dot-common-auto-capture", ra = "7.0.1", Ea = {
  build: "tsc && vite build",
  lint: 'eslint "src/**/*.{ts,tsx}" --max-warnings 0',
  test: "vitest run --coverage --passWithNoTests",
  tsc: "tsc",
  "bump:version": "npm pkg set version=$VERSION"
}, sa = {
  "@dot/proto-files": "2.1.1",
  "@innovatrics/dot-ui-common-auto-capture": "workspace:*",
  "@preact/signals": "^1.3.0",
  comlink: "^4.4.1",
  preact: "^10.22.1",
  "styled-components": "^6.1.11",
  "wasm-feature-detect": "^1.6.2"
}, ca = {
  "@preact/preset-vite": "^2.8.3",
  "@testing-library/preact": "^3.2.4",
  "@types/w3c-image-capture": "^1.0.10",
  typescript: "^5.5.3",
  vite: "5.3.0",
  vitest: "^2.0.5"
}, da = {
  name: xa,
  private: !0,
  version: ra,
  scripts: Ea,
  dependencies: sa,
  devDependencies: ca
}, ha = 5919 * -1 + 6548 + -629 * 1 + 0.4, la = 11 * 394 + 1669 * 3 + -9341 + 0.16, ua = 2 * -753 + 1677 * 1 + -171 + 0.2, fa = -4933 * -1 + 127 * 1 + -5060 * 1 + 0.05, Da = 35 * 71 + -3 * -334 + 3487 * -1, $0 = {};
$0.min = -(-3544 + -5 * -709), $0.max = 1;
const Ko = $0, Oo = -9303 + 2 * -1997 + -1 * -13297, ya = -5136 + -4 * 2053 + 13348 + 0.25, wa = 3963 * -1 + -1 * -6509 + -1273 * 2 + 0.2, pa = 0 + 0.85, ma = 1 * -5173 + 1 * 5019 + -184 * -1, Ga = 9 + 0.8100000000000005, cg = {};
cg.minDuration = 1e3, cg.maxDuration = 2500, cg.minFrames = 10;
const w0 = cg, AI = {};
AI.max = 100, AI.min = 10;
const qo = AI, ka = 5059 + -47 * 73 + -908 * 1, Na = 6231 + -1 * 6031, ba = 3203 + -599 * -8 + -7991, kC = "AES-CBC", NC = "RSA-OAEP", Fa = "SHA-256", Ra = "image/jpeg", Sa = -4048 + 1075 * 3 + 831, Ma = 40, bC = "/dot-assets", To = "dot_embedded_bg.wasm", FC = () => /iPhone|iPad|iPod|Android|Mobi|BlackBerry|Silk|Windows Phone/i.test(navigator.userAgent), Zo = () => {
  const g = /Android/i.test(navigator.userAgent), I = /Firefox/i.test(navigator.userAgent);
  return g && I;
}, La = () => {
  const g = navigator.userAgent.includes("Chrome"), I = new RegExp(/Version\/15.* Safari/).test(navigator.userAgent);
  return g && I ? !1 : I;
}, eI = (g) => new Promise((I) => {
  setTimeout(I, g);
}), RC = (g) => JSON.parse(JSON.stringify(g, (I, t) => typeof t == "number" ? Ae(t) : t)), SC = () => da.version, MC = (g) => new URL(g).hostname.replace("www.", ""), Ja = () => MC(window.location.href) === "localhost", tg = (g) => Object.entries(g).map(([I, t]) => encodeURIComponent(I) + "=" + encodeURIComponent(t)).join("&"), Ya = (g, I) => JSON.stringify(g) === JSON.stringify(I) ? I : g;
function va(g, I) {
  let t;
  return (...A) => {
    const e = () => {
      clearTimeout(t), t = void 0, g(...A);
    };
    t === void (-4 * 2494 + 2486 + 7490) && (t = setTimeout(e, I));
  };
}
function Ua(g) {
  return g.at(-(4 * 461 + -5434 + 3591)) === "/" ? g.slice(0, -(-1 * -1553 + -3489 * 1 + -149 * -13)) : g;
}
function LC(g) {
  return "" + Ua(g ?? "") + bC;
}
const Wa = () => "prod".toLowerCase() === "dev";
class HI extends Array {
  constructor(t) {
    super();
    p(this, "size");
    this.size = t;
  }
  pushFixed(...t) {
    if (t.length > this.size) {
      const A = t.slice(-this.size);
      this.push(...A);
      return;
    }
    this.length === this.size && this.splice(4 * 1894 + -6884 * 1 + 2 * -346, t.length), this.push(...t);
  }
  getAsArray() {
    return Array.from(this);
  }
  clear() {
    this.splice(-119 * 77 + -2441 + 11604);
  }
}
const Ha = (g, I, t = Ra) => new Promise((A) => {
  g.toBlob((e) => {
    if (!e) throw new Error("Canvas to Blob failed");
    A(e);
  }, t, I);
}), Ka = async (g) => Ha(g, -187 * -29 + 6845 + -12178), Oa = (g, I) => {
  const t = document.createElement("canvas");
  t.width = I.width, t.height = I.height;
  const A = t.getContext("2d");
  if (!A) throw new Error("cropImage ctx error");
  return A.drawImage(g, I.shiftX, I.shiftY, I.width, I.height, -42 * 10 + 4228 + -3808, -6224 * 1 + -1531 * 3 + 10817, t.width, t.height), t;
}, qa = (g) => {
  const I = g.getContext("2d");
  if (!I) throw new Error("getImageDataForSam ctx error");
  const { data: t } = I.getImageData(13 * -191 + -367 * 19 + -3152 * -3, 1 * 8114 + 8731 * 1 + 16845 * -1, g.width, g.height);
  return t;
}, JC = (g, I, t, A) => {
  const e = g.getContext("2d");
  e && (e.beginPath(), A ? (e.fillStyle = t, e.fillRect(I.topLeft.x, I.topLeft.y, I.width, I.height)) : (e.strokeStyle = t, e.rect(I.topLeft.x, I.topLeft.y, I.width, I.height)), e.stroke());
}, p0 = (g, I, t) => {
  const { height: A, shiftX: e, shiftY: o, width: i } = I, C = {};
  C.x = e, C.y = o;
  const B = {};
  B.topLeft = C, B.width = i, B.height = A, B.color = t, JC(g, B, t);
}, dt = (g, I, t, A = 961 + 6606 * 1 + -7567) => {
  const e = g.getContext("2d");
  e && (e.fillStyle = t, e.fillRect(I.x + A, I.y + A, -1 * -6892 + 507 * -3 + -5364, -11 * 41 + -7201 + 7659), e.beginPath());
}, Ta = (g, I) => {
  const { height: t, shiftX: A, shiftY: e, width: o } = I;
  return !(g.x < A || g.x > A + o || g.y < e || g.y > e + t);
}, Za = (g, I) => Object.values(g).every((t) => Ta(t, I));
function Ng(g) {
  const { height: I, width: t } = Ca(g), A = (g.width - t) / (1567 * -4 + 1138 + 2566 * 2), e = (g.height - I) / (-869 + 871 * 1), o = {};
  return o.shiftX = A, o.shiftY = e, o.width = t, o.height = I, o;
}
function YC(g, I, t) {
  const { height: A, width: e } = t, o = B0(g.width, g.height), i = e - o * I * (9965 + -3321 * 3), C = A - o * I * (2216 + -1 * 8314 + 2 * 3050), B = (g.width - i) / 2, n = (g.height - C) / (-1805 + -3226 * -1 + -1419 * 1), a = {};
  return a.shiftX = B, a.shiftY = n, a.width = i, a.height = C, a;
}
function Fe(g, I) {
  const { shiftX: t, shiftY: A } = I, e = {};
  return e.x = g.x + t, e.y = g.y + A, e;
}
function bg() {
  const g = ["WRGmiSk4WPGdWQ8", "n8onCrjerHJdHKhcG8k/ACoj", "W75XWOdcL8kBwKedW4HFor7cMa", "WQldPaT0nmoYW5OlsKVdLmox", "W7WDymoIWQxdLSoOWOxcHqxcKfu", "rmoWkSoSu8k1W6RdQ8ogWPRdI8oLWO/dTG", "ds4hjWZcT8omWRxdH8kSm8oKW4q", "W5JcGNJcICkp", "WRBdNMFcRSk2pSoWBXxdKmo8W4eN", "agZcMHuFWQhcVmokpCkfW4fy", "eSo2rSoJWQ0", "o8oLWRtdHMtcJ2abW7CDvfC", "W6JcIgLUW54IWRxdOa", "W63cHtCPWRHeW7lcTmkugSktiCkrAG", "WOfeWQtcG8kEWR87CSkQWP5oW7i", "WQXDpSkOW64", "qXSvW5pdMW", "iCo4WR4Y", "W68bWQCrW5e", "WQRdM1VdI8kyAwK", "W7HeEXJdLSk2bCoYt8oLW7v8W7q", "mmobkfmJl13dRW", "WQDojCk4W7u", "WQWbWPpdLIRcMM7dHxxdKSoeiXm", "WQNcMJRcO8oLfwhdGt/cI8ogeq"];
  return bg = function() {
    return g;
  }, bg();
}
(function(g, I) {
  function t(i, C, B, n, a) {
    return cA(B - 71, a);
  }
  function A(i, C, B, n, a) {
    return cA(n - -990, a);
  }
  const e = g();
  function o(i, C, B, n, a) {
    return cA(i - -93, a);
  }
  for (; ; )
    try {
      if (parseInt(A(-570, -556, -581, -568, "#m7E")) / 1 + -parseInt(o(309, 304, 315, 321, "Nif%")) / 2 + -parseInt(o(308, 320, 318, 296, "d)Bd")) / 3 * (parseInt(t(487, 478, 481, 472, "hcrr")) / 4) + parseInt(A(-586, -573, -575, -573, "#m7E")) / 5 * (-parseInt(A(-568, -581, -577, -569, "11U4")) / 6) + -parseInt(t(506, 497, 496, 485, "tQ&]")) / 7 + parseInt(t(507, 496, 495, 503, "$u9j")) / 8 + parseInt(A(-566, -583, -576, -579, "hcrr")) / 9 === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(bg, -41008 + -26 * -23522 + -110143);
function cA(g, I) {
  const t = bg();
  return cA = function(A, e) {
    A = A - (-1415 * 2 + -722 + -3953 * -1);
    let o = t[A];
    if (cA.tRlJiF === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      cA.RclWHQ = a, g = arguments, cA.tRlJiF = !0;
    }
    const C = t[-1 * 6143 + 4 * -1436 + 11887], B = A + C, n = g[B];
    return n ? o = n : (cA.KJjUDT === void 0 && (cA.KJjUDT = !0), o = cA.RclWHQ(o, e), g[B] = o), o;
  }, cA(g, I);
}
function ja({ assetsDirectoryPath: g, bramble: I }) {
  function t(B, n, a, Q, E) {
    return cA(B - 372, E);
  }
  const [A, e] = wA(), o = A !== void (7477 + -1 * 2323 + -5154);
  _(() => {
    async function B() {
      function n(Q, E, r, s, d) {
        return cA(d - 270, s);
      }
      await I[n(680, 680, 681, "Sr2q", 685)](LC(g));
      function a(Q, E, r, s, d) {
        return cA(s - 513, d);
      }
      e(I[n(690, 691, 680, ")9WU", 684) + a(909, 923, 910, 918, "M!g6") + n(681, 678, 684, "OA2I", 686) + "t"]());
    }
    B();
  }, [I, g, e]);
  const i = {};
  i[C(930, 921, "Nif%") + C(937, 935, "Nif%")] = A, i[t(780, 780, 783, 786, "A^QH") + "sh"] = o;
  function C(B, n, a, Q, E) {
    return cA(B - 517, a);
  }
  return i;
}
var vC = ((g) => (g.DOCUMENT = "document-auto-capture:dev", g.FACE = "face-auto-capture:dev", g.PALM = "palm-capture:dev", g))(vC || {});
const tI = {};
tI.SIMD = "simd", tI.NO_SIMD = "no-simd";
const jo = tI, gI = {};
gI.Lower = "Lower", gI.Higher = "Higher";
const II = gI, dg = {};
dg.VISIBLE = "VISIBLE", dg.VISIBLE_WITH_MASK = "VISIBLE_WITH_MASK", dg.HIDDEN = "HIDDEN";
const Fg = dg;
(function(g, I) {
  function t(n, a, Q, E, r) {
    return dA(Q - 991, r);
  }
  function A(n, a, Q, E, r) {
    return dA(r - 371, n);
  }
  var e = g();
  function o(n, a, Q, E, r) {
    return dA(a - -334, n);
  }
  function i(n, a, Q, E, r) {
    return dA(n - -867, Q);
  }
  function C(n, a, Q, E, r) {
    return dA(E - -945, r);
  }
  for (; ; )
    try {
      var B = parseInt(t(1493, 1485, 1485, 1496, "AnR&")) / 1 + parseInt(t(1507, 1486, 1496, 1502, "^ajI")) / 2 * (parseInt(i(-367, -380, "]mTQ", -368, -355)) / 3) + parseInt(o("AnR&", 163, 151, 162, 162)) / 4 * (-parseInt(A("(IHR", 870, 874, 871, 880)) / 5) + parseInt(C(-440, -444, -445, -438, "AnR&")) / 6 * (-parseInt(C(-455, -449, -446, -447, "bqVE")) / 7) + -parseInt(i(-357, -366, "@iSB", -369, -363)) / 8 * (-parseInt(t(1487, 1483, 1492, 1504, "8PiY")) / 9) + parseInt(A("*vWK", 869, 869, 879, 883)) / 10 * (-parseInt(i(-368, -368, "$AfJ", -368, -375)) / 11) + parseInt(C(-451, -436, -450, -439, "8PiY")) / 12;
      if (B === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Rg, -706321 * 1 + -6396 * -93 + 693823);
function dA(g, I) {
  var t = Rg();
  return dA = function(A, e) {
    A = A - (-9205 + -1 * -9697);
    var o = t[A];
    if (dA.mtHjRe === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", r = "", s = "", d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (var w = 0, R = r.length; w < R; w++)
          s += "%" + ("00" + r.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var r = [], s = 0, d, h = "";
        Q = i(Q);
        var x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      dA.asNRrN = C, g = arguments, dA.mtHjRe = !0;
    }
    var B = t[7759 + 1 * 6428 + -14187], n = A + B, a = g[n];
    return a ? o = a : (dA.kZZLDm === void 0 && (dA.kZZLDm = !0), o = dA.asNRrN(o, e), g[n] = o), o;
  }, dA(g, I);
}
function Rg() {
  var g = ["hN5/mSkeWRe6bSol", "EwKFWQCZ", "d8oUWR/dRCkiFmkesa", "WPddKZpcG8kCwmoKvaa", "ACopW77cMmkhWQzEhsNdHmodqX8", "DSofW691xdHzW7rv", "yq0WgwVcMG/dKCox", "WOzuW4ecpCkKpCoiWR9iWRBcMSomtW", "WPSVb8o+W6ddKKr9W7bOvmoF", "WRfyW5evnq", "iYP5W7ilW6T3oJJcUa", "yqW/sYBdG3dcHmoee8kDtNBcPG", "d8oRW4/cVSovjSkqyI/dNh0X", "WQhdISkkWPmfiY8mWQDf", "tHJcIN5YW7fEpNJdKmoUxG", "WQRdImkmWP9PmaidWQzIWQS", "yqnoexpcMrxdHq", "WPVdHu04rwn1W6e", "sCouW5PedvDoB1ldPmoK", "WRO4m37cL8kkdCoYWQ4", "kcj7W75UWRiUnaFcOSomhKO", "WPjKqh4zeY7dO8kI", "vSo6bX/dMJFcKqKQeSoFAa", "WQqsWQddLCk7", "kCorWPtcGCoaW6STW6JdJCk6o8kZ", "WPiSxCk8WOZcL3DR", "bSoRW4RcUSosl8kKvttdKhKG"];
  return Rg = function() {
    return g;
  }, Rg();
}
function Pa({ crosshatch: g }) {
  function I(A, e, o, i, C) {
    return dA(o - 631, i);
  }
  function t(A, e, o, i, C) {
    return dA(C - 252, i);
  }
  return g != null && g[I(1120, 1131, 1127, "^ajI") + "id"] ? II[I(1148, 1143, 1135, "gaAg") + "r"] : II[t(771, 770, 758, "rUme", 770)];
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return iA(n - 147, B);
  }
  function A(B, n, a, Q, E) {
    return iA(a - -733, n);
  }
  const e = g();
  function o(B, n, a, Q, E) {
    return iA(a - 391, B);
  }
  function i(B, n, a, Q, E) {
    return iA(Q - 437, n);
  }
  function C(B, n, a, Q, E) {
    return iA(a - -514, B);
  }
  for (; ; )
    try {
      if (-parseInt(t("pG)H", 617, 603, 629, 615)) / 1 + parseInt(C("kvz1", -50, -40, -45, -31)) / 2 * (-parseInt(C("VVRH", -31, -38, -29, -32)) / 3) + -parseInt(i(936, "kvz1", 925, 918, 904)) / 4 + -parseInt(t("a@3n", 616, 616, 619, 610)) / 5 * (parseInt(o("2pfb", 865, 864, 866, 881)) / 6) + parseInt(t("O!HN", 613, 615, 604, 630)) / 7 * (parseInt(t("0MEQ", 614, 632, 604, 609)) / 8) + -parseInt(i(942, "1(Cg", 945, 933, 916)) / 9 * (-parseInt(i(937, "pG)H", 926, 921, 917)) / 10) + parseInt(i(908, "VVRH", 920, 902, 898)) / 11 * (parseInt(A(-252, "1(Cg", -270, -283, -268)) / 12) === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(Sg, -1 * 114656 + 1 * 552201 + -20610 * 7);
function Sg() {
  const g = ["tmoBWRD3W6a", "dXddIMxdHW", "qmkNE8kXWQ0rdCkQWOzlWPm", "ba5gW7lcRJWaWPu", "eCkXlCobW64+gq", "gXzrW6m", "WQtcHu/cStxcKJ0", "eCoHfmoKW74+kdq", "zCkfzwhcTSkUWRBdVSokW7FdVSoFEW", "WQGgWRW8cYBdJerpity8Eq", "W7FcRmk6WP96WOpdN8kLW7S", "y8kKdZ7cVSoGdSoQf8oKjW", "WQpcTGVcQr4", "W7OklWWXWQP6", "cCoiW7xdL07cHCk+nmolamkjqW", "W7aCW7RcTsldOSo1ttS", "g8oMwSk/WPPTjYi9WQ3cRSod", "W7tdSSkpWQBcUhC+if7dTItdOCov", "BhhcImkxW6XxkhlcNCkmpq", "nCognZJdOa", "WQKoW4TNz1xcT3y", "wSkmWOz9dq", "bSouiSoYW74", "W7y5aG0VWPD0", "jCoroa", "zNRcJ8krW6OYEMNcQmk+n13cUq", "W47dQ8ohnuJcIaHpcMDY", "EuqrWRZdGxGAW6XozuhdUCka", "cmokW7FdK0ZcG8oybSo9g8kxCSo+", "xSkCWRe", "gSoKxmk9WP5PrXejWRFcT8oaW5u", "w8kbWRiNoq", "W78tW4fwWR3dSwFdVW", "m8kbW7hcICkni8odxSofW5WmW4VdNG", "WRyTnuvW", "WRldV8oVWQf7"];
  return Sg = function() {
    return g;
  }, Sg();
}
function iA(g, I) {
  const t = Sg();
  return iA = function(A, e) {
    A = A - (69 * -113 + -2550 + 10809);
    let o = t[A];
    if (iA.IVRYOu === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      iA.GTOEQH = a, g = arguments, iA.IVRYOu = !0;
    }
    const C = t[6423 * 1 + 150 * -53 + -1527 * -1], B = A + C, n = g[B];
    return n ? o = n : (iA.wHAxTn === void 0 && (iA.wHAxTn = !0), o = iA.GTOEQH(o, e), g[B] = o), o;
  }, iA(g, I);
}
function Va({ assetsDirectoryPath: g, children: I, bramble: t }) {
  const A = {};
  A[a(1462, 1481, 1459, "X&)!", 1475) + "le"] = t, A[a(1490, 1505, 1511, "zjqv", 1493) + E(910, "E0GK", 928) + n(1227, 1229, 1226, 1241, "tJJB") + E(939, "x$Kx", 947)] = g;
  function e(s, d, h, x, u) {
    return iA(x - -541, h);
  }
  const { sunfish: o, crosshatch: i } = ja(A), C = {};
  function B(s, d, h, x, u) {
    return iA(u - -406, d);
  }
  C[E(943, "([Ax", 942) + E(918, "6@e@", 927)] = i;
  function n(s, d, h, x, u) {
    return iA(d - 742, u);
  }
  function a(s, d, h, x, u) {
    return iA(u - 1e3, x);
  }
  const Q = pA(() => ({ redfin: Pa(C), sunfish: o, crosshatch: i, bramble: t }), [o, i, t]);
  function E(s, d, h, x, u) {
    return iA(h - 450, d);
  }
  const r = {};
  return r[a(1498, 1481, 1491, "O!HN", 1491)] = Q, r[a(1486, 1507, 1472, "rFKw", 1490) + n(1236, 1222, 1236, 1218, "X&)!")] = I, D(kg[B(51, "G#DS", 72, 67, 62) + e(-58, -61, "pG)H", -56)], r);
}
function Mg() {
  var g = ["aSosFGtdJ8oOWR1t", "WOejW4GVavBdT8ogWQSwW59i", "iq/dNmkYy0lcMwW", "vmkNW5OjtaBcG8ofyY80W4i", "gsFcG8oYWQZdL8ojFSkNW7fhpW", "jG3cJSo0iZJcSu/dU2WOWQK", "sMfiACoRW6ldUmom", "WPrjxulcGmkxWPJdSWtdLt1ShW", "W4uNeGRdHwyWWPHxW7VcKdS", "iSkvxcZcHdGyW40", "W4PHW7pcJCkwWPJdJCk/WQr5W7Tp", "WO4cW44Oc1ldPCo9WRiqW6Pp", "jq/cISoWlJ7cReRdMLeaWPu", "wY4CmqhdGguWjYdcK8oG", "n8okWQtdJX3cKNpcO8kEWQDRWQBdJa", "WOhcLbJdMumtW53cJSk/BCosCvu", "uhldUmkeWQ9uWQlcI8klWQhdRwm", "WRfgWPVcU1BcTmol", "tSkOWO0vCNH7", "W63cLYSOW77cMSkSWQJcHKJdIJpcHa"];
  return Mg = function() {
    return g;
  }, Mg();
}
(function(g, I) {
  var t = g();
  function A(B, n, a, Q, E) {
    return bA(E - 974, a);
  }
  function e(B, n, a, Q, E) {
    return bA(n - -366, Q);
  }
  function o(B, n, a, Q, E) {
    return bA(Q - 14, n);
  }
  function i(B, n, a, Q, E) {
    return bA(B - 535, E);
  }
  for (; ; )
    try {
      var C = -parseInt(i(668, 669, 658, 659, "4Miw")) / 1 * (-parseInt(i(661, 667, 652, 668, "]IC0")) / 2) + -parseInt(e(-235, -234, -224, "N%Yv", -237)) / 3 + parseInt(i(665, 670, 667, 658, "d8Li")) / 4 + parseInt(e(-235, -227, -237, "wPoA", -218)) / 5 * (-parseInt(e(-241, -237, -246, "Fw6q", -246)) / 6) + -parseInt(e(-237, -245, -237, "2dTf", -248)) / 7 + parseInt(e(-238, -242, -252, "bd5B", -250)) / 8 + parseInt(o(132, "6K2R", 141, 137, 142)) / 9 * (parseInt(A(1106, 1108, "62a0", 1109, 1112)) / 10);
      if (C === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Mg, 169847 * -3 + 910175 + 270963);
function bA(g, I) {
  var t = Mg();
  return bA = function(A, e) {
    A = A - (1582 * -5 + -96 * 92 + 231 * 73);
    var o = t[A];
    if (bA.WQVtku === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", r = "", s = "", d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (var w = 0, R = r.length; w < R; w++)
          s += "%" + ("00" + r.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var r = [], s = 0, d, h = "";
        Q = i(Q);
        var x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      bA.JGOiBJ = C, g = arguments, bA.WQVtku = !0;
    }
    var B = t[7261 + -7976 * 1 + 715], n = A + B, a = g[n];
    return a ? o = a : (bA.tCwmcX === void 0 && (bA.tCwmcX = !0), o = bA.JGOiBJ(o, e), g[n] = o), o;
  }, bA(g, I);
}
function Xa({ analytics: g, crosshatch: I }) {
  return I !== void (2927 * -3 + -4842 + -57 * -239) && !I.isAnalyticsDisabled ? g : void (-3434 + 2 * 3625 + -954 * 4);
}
function za({ analytics: g, appKey: I, redfin: t, crosshatch: A, bramble: e }) {
  const o = {};
  o.analytics = g, o.crosshatch = A;
  const i = Xa(o);
  return _(() => {
    i && i.init(I);
  }, [i, I]), _(() => {
    A && (console.info("Analytics is " + (A.isAnalyticsDisabled ? "disabled" : "enabled")), i && i.walleye(t, e.getCustomerName()));
  }, [i, e, A, t]), _(() => {
    if (i)
      return window.addEventListener("beforeunload", i.endSession), () => {
        i.endSession(), window.removeEventListener("beforeunload", i.endSession);
      };
  }, [i]), i;
}
function _a({
  analytics: g,
  appKey: I,
  children: t
}) {
  const { redfin: A, crosshatch: e, bramble: o } = Zt(), i = za({ analytics: g, redfin: A, appKey: I, crosshatch: e, bramble: o }), C = pA(
    () => ({
      analytics: i
    }),
    [i]
  );
  return /* @__PURE__ */ D(mg.Provider, { value: C, children: t });
}
const UC = Ot(null), KI = () => {
  const g = me(UC);
  if (!g)
    throw new Error("Missing provider for CameraOptionsContext");
  return g;
}, $a = ({
  assetsDirectoryPath: g,
  cameraFacing: I,
  captureMode: t,
  onPhotoTaken: A,
  sessionToken: e,
  thresholds: o
}) => {
  var i, C, B;
  return {
    onPhotoTaken: A,
    cameraFacing: I ?? WI.FRONT,
    captureMode: t ?? DC.AUTO_CAPTURE,
    assetsDirectoryPath: LC(g),
    sessionToken: e,
    thresholds: {
      faceConfidence: (o == null ? void 0 : o.faceConfidence) ?? ha,
      minFaceSizeRatio: (o == null ? void 0 : o.minFaceSizeRatio) ?? la,
      maxFaceSizeRatio: (o == null ? void 0 : o.maxFaceSizeRatio) ?? ua,
      sharpnessThreshold: (o == null ? void 0 : o.sharpnessThreshold) ?? ya,
      brightnessLowThreshold: (o == null ? void 0 : o.brightnessLowThreshold) ?? wa,
      brightnessHighThreshold: (o == null ? void 0 : o.brightnessHighThreshold) ?? pa,
      outOfBoundsThreshold: (o == null ? void 0 : o.outOfBoundsThreshold) ?? fa,
      devicePitchAngleThreshold: (o == null ? void 0 : o.devicePitchAngleThreshold) ?? ma,
      mouth: {
        confidence: ((i = o == null ? void 0 : o.mouth) == null ? void 0 : i.confidence) ?? Da,
        status: {
          min: ((C = o == null ? void 0 : o.mouth) == null ? void 0 : C.status.min) ?? Ko.min,
          max: ((B = o == null ? void 0 : o.mouth) == null ? void 0 : B.status.max) ?? Ko.max
        }
      },
      leftEye: (o == null ? void 0 : o.leftEye) ?? {
        confidence: Oo
      },
      rightEye: (o == null ? void 0 : o.rightEye) ?? {
        confidence: Oo
      }
    }
  };
}, Ax = ({
  cameraOptions: g,
  children: I
}) => {
  const t = pA(() => $a(g), [g]);
  return /* @__PURE__ */ D(UC.Provider, { value: t, children: I });
}, ex = (g, I) => ({ ...g, leftEye: { ...g.leftEye, center: Fe(g.leftEye.center, I) }, rightEye: { ...g.rightEye, center: Fe(g.rightEye.center, I) }, mouth: { ...g.mouth, center: Fe(g.mouth.center, I) }, topLeft: Fe(g.topLeft, I), bottomRight: Fe(g.bottomRight, I), faceCenter: Fe(g.faceCenter, I) }), WC = (g, I) => {
  const { faceCenter: t, faceSize: A } = g, e = aa(A, I), o = {};
  o.x = t.x, o.y = t.y - e;
  const i = {};
  i.x = t.x + e, i.y = t.y;
  const C = {};
  C.x = t.x, C.y = t.y + e;
  const B = {};
  B.x = t.x - e, B.y = t.y;
  const n = {};
  return n.top = o, n.right = i, n.bottom = C, n.left = B, RC(n);
}, tx = (g, I) => {
  const { bottomRight: t, faceCenter: A, topLeft: e } = I, o = {
    topLeft: e,
    width: t.x - e.x,
    height: t.y - e.y
  };
  JC(g, o, "rgba(255, 0, 0, 0.3)", !0), dt(g, A, "lime");
}, gx = (g, I, t) => {
  const A = WC(I, t);
  Object.values(A).map((e) => dt(g, e, "orange"));
};
function Ix({ cameraResolution: g, detectionDetails: I, isImageMirror: t }) {
  const { thresholds: A } = KI(), { redfin: e } = Zt(), o = UA(null);
  if (_(() => {
    if (!o.current)
      return;
    o.current.width = g.width, o.current.height = g.height, ea(o.current);
    const d = Ng(g), h = YC(
      g,
      A.outOfBoundsThreshold,
      d
    ), x = na(g);
    I.value && (tx(o.current, I.value.processedImage.detection), gx(
      o.current,
      I.value.processedImage.detection,
      g
    ), p0(o.current, d, "lime"), p0(o.current, h, "yellow"), p0(o.current, x, "blue"), dt(o.current, I.value.processedImage.detection.leftEye.center, "cyan"), dt(o.current, I.value.processedImage.detection.rightEye.center, "cyan"), dt(o.current, I.value.processedImage.detection.mouth.center, "cyan"));
  }, [g, A, I.value]), !I.value)
    return null;
  const {
    avgFps: i,
    detectionTime: C,
    fps: B,
    processedImage: { detection: n, instructionCode: a, invalidValidators: Q },
    resolution: E,
    samVersion: r
  } = I.value, s = {
    Confidence: n.confidence,
    Brightness: n.brightness,
    Sharpness: n.sharpness,
    "Face size": n.faceSize,
    "Left eye confidence": n.leftEye.confidence,
    "Left eye status": n.leftEye.status,
    "Right eye confidence": n.rightEye.confidence,
    "Right eye status": n.rightEye.status,
    "Mouth confidence": n.mouth.confidence,
    "Mouth status": n.mouth.status,
    "Detection time": C,
    FPS: B,
    "Avg FPS": i,
    Tier: e,
    Instruction: a,
    Resolution: E,
    "Component version": "7.0.1"
  };
  return r && (s["SAM version"] = r), Q.length > 0 && (s["Invalid validators"] = Q), /* @__PURE__ */ D(
    _Q,
    {
      ref: o,
      cameraResolution: g,
      detectionDetails: s,
      isImageMirror: t
    }
  );
}
function ox(g) {
  return /* @__PURE__ */ D("rect", { fill: "#000", ...g, rx: "50%" });
}
function ix(g, I) {
  const [t, A] = wA(!1), e = () => A((C) => !C), o = "" + t;
  Xe(() => {
    function C() {
      if (!g.current) return;
      const Q = new MutationObserver(() => {
        e();
      }), E = {};
      return E.childList = !0, E.subtree = !0, E.attributes = !0, Q.observe(g.current, E), Q;
    }
    function B() {
      var r;
      if (!((r = g.current) != null && r["parentElement"])) return;
      const Q = new MutationObserver((s) => {
        s.find((h) => {
          for (const x of h.removedNodes)
            if (x !== (I == null ? void 0 : I.current) && x === g.current)
              return !0;
        }) && e(), s.forEach((h) => {
          h.addedNodes.forEach((x) => {
            var u;
            x !== (I == null ? void 0 : I.current) && ((u = x.parentElement) == null || u.removeChild(x));
          });
        });
      }), E = {};
      return E.childList = !0, Q.observe(g.current.parentElement, E), Q;
    }
    const n = C(), a = B();
    return () => {
      a == null || a.disconnect(), n == null || n.disconnect();
    };
  });
  const i = {};
  return i.key = o, i;
}
const Cx = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1
};
function Bx({ cutOut: g, height: I, ignoreElement: t, width: A }) {
  const e = UA(null), { key: o } = ix(e, t);
  return /* @__PURE__ */ D("div", { ref: e, style: Cx, children: /* @__PURE__ */ D("svg", { viewBox: `0 0 ${A} ${I}`, children: [
    /* @__PURE__ */ D("defs", { children: [
      /* @__PURE__ */ D("mask", { id: "placeholder", children: [
        /* @__PURE__ */ D("rect", { fill: "#fff", height: "100%", width: "100%" }),
        g
      ] }),
      /* @__PURE__ */ D(
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
            /* @__PURE__ */ D("g", { transform: "translate(100, 170)", children: [
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M4.40992 0C2.42825 0 0.833252 1.59517 0.833252 3.57704C0.833252 5.55891 2.42825 7.15408 4.40992 7.15408C6.39158 7.15408 7.98658 5.55891 7.98658 3.57704C7.93825 1.59517 6.34325 0 4.40992 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              )
            ] }),
            /* @__PURE__ */ D("g", { transform: "translate(10, 0)", children: [
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M31.1382 0C30.2682 0 29.5916 0.676737 29.5916 1.54683V14.4532C29.5916 15.3233 30.2682 16 31.1382 16C32.0082 16 32.6849 15.3233 32.6849 14.4532V1.54683C32.6849 0.676737 32.0082 0 31.1382 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M158.448 0C157.578 0 156.901 0.676737 156.901 1.54683V14.4532C156.901 15.3233 157.578 16 158.448 16C159.318 16 159.995 15.3233 159.995 14.4532V1.54683C159.995 0.676737 159.318 0 158.448 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M43.8983 0C40.1283 0 37.0833 3.04532 37.0833 6.81571V14.4532C37.0833 15.3233 37.7599 16 38.6299 16C39.4999 16 40.1766 15.3233 40.1766 14.4532V6.81571C40.1766 4.7855 41.8199 3.14199 43.8499 3.14199C45.8799 3.14199 47.5233 4.7855 47.5233 6.81571V14.4532C47.5233 15.3233 48.1999 16 49.0699 16C49.9399 16 50.6166 15.3233 50.6166 14.4532V6.81571C50.7133 3.04532 47.6683 0 43.8983 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M80.8732 0C76.4748 0 72.8499 3.57704 72.8499 8.02417C72.8499 12.423 76.4265 16.0483 80.8732 16.0483C85.2715 16.0483 88.8965 12.4713 88.8965 8.02417C88.8965 3.57704 85.3198 0 80.8732 0ZM80.8732 12.9063C78.1665 12.9063 75.9915 10.7311 75.9915 8.02417C75.9915 5.31722 78.1665 3.14199 80.8732 3.14199C83.5798 3.14199 85.7548 5.31722 85.7548 8.02417C85.7548 10.6828 83.5798 12.9063 80.8732 12.9063Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M105.475 0.144871C104.701 -0.193497 103.783 0.144871 103.396 0.918285L99.0465 10.586L94.6965 0.918285C94.3581 0.144871 93.4398 -0.241836 92.6181 0.144871C91.8448 0.48324 91.4581 1.40167 91.8448 2.22342L97.5965 15.1298C97.8381 15.7098 98.4181 16.0482 99.0465 16.0482C99.6748 16.0482 100.206 15.7098 100.496 15.1298L106.248 2.22342C106.635 1.40167 106.296 0.48324 105.475 0.144871Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M116.35 0.918429C116.108 0.338369 115.528 0 114.9 0C114.271 0 113.74 0.338369 113.45 0.918429L107.698 13.8248C107.36 14.5982 107.698 15.5166 108.471 15.9033C109.245 16.2417 110.163 15.9033 110.55 15.1299L114.9 5.46224L119.25 15.1299C119.491 15.71 120.071 16.0483 120.7 16.0483C120.893 16.0483 121.135 16 121.328 15.9033C122.101 15.565 122.488 14.6465 122.101 13.8248L116.35 0.918429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M61.9749 0C58.2049 0 55.1599 3.04532 55.1599 6.81571V14.4532C55.1599 15.3233 55.8366 16 56.7066 16C57.5766 16 58.2532 15.3233 58.2532 14.4532V6.81571C58.2532 4.7855 59.8966 3.14199 61.9266 3.14199C63.9566 3.14199 65.5999 4.7855 65.5999 6.81571V14.4532C65.5999 15.3233 66.2766 16 67.1466 16C68.0166 16 68.6932 15.3233 68.6932 14.4532V6.81571C68.7416 3.04532 65.6966 0 61.9749 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M172.707 3.14199H176.767C177.637 3.14199 178.313 2.46526 178.313 1.59516C178.313 0.725073 177.637 0.0483358 176.767 0.0483358H172.707C168.308 -2.6226e-06 164.683 3.57704 164.683 8.02417C164.683 12.423 168.26 16.0483 172.707 16.0483H176.767C177.637 16.0483 178.313 15.3716 178.313 14.5015C178.313 13.6314 177.637 12.9547 176.767 12.9547H172.707C170 12.9547 167.825 10.7795 167.825 8.07251C167.825 5.31722 170 3.14199 172.707 3.14199Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M136.795 0H125.05C124.18 0 123.503 0.676737 123.503 1.54683C123.503 2.41692 124.18 3.09366 125.05 3.09366H129.352V14.4048C129.352 15.2749 130.028 15.9517 130.898 15.9517C131.768 15.9517 132.445 15.2749 132.445 14.4048V3.14199H136.747C137.617 3.14199 138.293 2.46526 138.293 1.59517C138.39 0.676737 137.665 0 136.795 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M151.488 0H148.395C144.625 0 141.58 3.04532 141.58 6.81571V14.4532C141.58 15.3233 142.256 16 143.126 16C143.996 16 144.673 15.3233 144.673 14.4532V6.81571C144.673 4.7855 146.316 3.14199 148.346 3.14199H151.44C152.31 3.14199 152.986 2.46526 152.986 1.59517C153.083 0.676737 152.358 0 151.488 0Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M191.363 7.44411L185.95 5.26888C185.177 4.93051 185.225 4.25378 185.273 4.01208C185.322 3.81873 185.515 3.09366 186.337 3.09366H191.992C192.862 3.09366 193.538 2.41692 193.538 1.54683C193.538 0.676737 192.862 0 191.992 0H186.337C184.258 0 182.567 1.35347 182.18 3.43202C181.793 5.46223 182.808 7.39577 184.742 8.16918L190.155 10.3444C191.073 10.7311 190.977 11.5529 190.928 11.7946C190.88 12.0363 190.638 12.858 189.623 12.858H183.775C182.905 12.858 182.228 13.5347 182.228 14.4048C182.228 15.2749 182.905 15.9517 183.775 15.9517H189.623C191.798 15.9517 193.587 14.5015 193.973 12.3746C194.505 10.2477 193.393 8.26586 191.363 7.44411Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M4.40992 8.89429C2.42825 8.89429 0.833252 10.4895 0.833252 12.4713C0.833252 14.4532 2.42825 16.0484 4.40992 16.0484C6.39158 16.0484 7.98658 14.4532 7.98658 12.4713C7.93825 10.4895 6.34325 8.89429 4.40992 8.89429Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
                "path",
                {
                  d: "M12.385 4.44727C10.4033 4.44727 8.80835 6.04243 8.80835 8.02431C8.80835 10.0062 10.4033 11.6013 12.385 11.6013C14.3667 11.6013 15.9617 10.0062 15.9617 8.02431C15.9617 6.04243 14.3667 4.44727 12.385 4.44727Z",
                  fill: "white",
                  opacity: "0.3"
                }
              ),
              /* @__PURE__ */ D(
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
    /* @__PURE__ */ D("rect", { fill: "url(#innooverlay)", height: "100%", mask: "url(#placeholder)", width: "100%" })
  ] }) }, o);
}
function nx({ fullOverlay: g, ignoreElement: I, resolution: t }) {
  const A = Qa(t), e = `${A.height * 100}%`, o = `${A.width * 100}%`, i = `${A.shiftX * 100}%`, C = `${A.shiftY * 100}%`;
  return /* @__PURE__ */ D(
    Bx,
    {
      cutOut: g || /* @__PURE__ */ D(ox, { height: e, width: o, x: i, y: C }),
      height: t.height,
      ignoreElement: I,
      width: t.width
    }
  );
}
function Qx({ cameraResolution: g, children: I, detectionDetails: t, shouldMirror: A }) {
  const { redfin: e } = Zt(), { appState: o, freemiumOverlayState: i } = Tt(), C = UA(null), B = i !== Fg.HIDDEN && e !== II.Higher && g, n = i === Fg.VISIBLE, a = g && o === yA.RUNNING;
  return /* @__PURE__ */ D(MA, { children: [
    B && /* @__PURE__ */ D(
      nx,
      {
        fullOverlay: n,
        ignoreElement: C,
        resolution: g
      }
    ),
    I,
    a && /* @__PURE__ */ D("div", { ref: C, children: /* @__PURE__ */ D(
      Ix,
      {
        cameraResolution: g,
        detectionDetails: t,
        isImageMirror: A
      }
    ) })
  ] });
}
const ax = (g, I) => {
  const t = {};
  t.detail = I, document.dispatchEvent(new CustomEvent(g, t));
}, Xg = class Xg {
  constructor() {
    p(this, "lastDetails", {});
    p(this, "delayedTime", 0);
  }
  static getInstance() {
    return !this._instance && (this._instance = new Xg()), this._instance;
  }
  restart() {
    this.lastDetails = {}, this.delayedTime = 8231 + 9277 * 1 + -17508;
  }
  isDetailChanged(I, t) {
    return JSON.stringify(t) !== JSON.stringify(this.lastDetails[I]) ? (this.lastDetails[I] = t, !0) : !1;
  }
  dispatchCustomEventOnChange(I, t) {
    this.isDetailChanged(I, t) && ax(I, t);
  }
  dispatchDelayedCustomEventOnChange(I, t, A) {
    const e = performance.now();
    e - this.delayedTime > A && (this.dispatchCustomEventOnChange(I, t), this.delayedTime = e);
  }
};
p(Xg, "_instance");
let yt = Xg;
const $e = yt.getInstance(), HC = (g, I, t = ga) => {
  const A = {};
  A.instructionCode = I;
  const e = A;
  $e.dispatchDelayedCustomEventOnChange(g, e, t);
}, Po = (g, I) => {
  $e.dispatchCustomEventOnChange(g, I);
}, xx = (g, I) => {
  $e.dispatchCustomEventOnChange(g, I);
}, rx = (g, I) => {
  const t = {};
  t.size = I;
  const A = t;
  $e.dispatchCustomEventOnChange(g, A);
}, Ex = (g, I, t) => {
  const A = I.confidence < t ? void 0 : I, e = {};
  e.detectedObject = A;
  const o = e;
  $e.dispatchCustomEventOnChange(g, o);
}, sx = (g, { detection: I, fps: t, image: A, invalidValidators: e, isInCandidateSelection: o }) => {
  const i = {};
  i.image = A, i.data = {}, i.data.detection = I, i.data.fps = t, i.data.isInCandidateSelection = o, i.data.invalidValidators = e, i.data.imageResolution = {}, i.data.imageResolution.width = A.width, i.data.imageResolution.height = A.height;
  const C = i;
  $e.dispatchCustomEventOnChange(g, C);
}, cx = (g, I) => {
  if (Wa()) {
    const t = {};
    t.candidateSelectionImages = I;
    const A = t;
    yt.getInstance().dispatchCustomEventOnChange(g, A);
  }
}, dx = (g, I) => {
  const { cameraResolution: t, shouldCameraMirror: A } = I;
  _(() => {
    if (!t) return;
    const e = {};
    e.cameraResolution = t, e.isMirroring = A, xx(g, e);
  }, [t, A, g]);
}, hx = (g) => g === uC.CONTROL ? !FC() : !0, lx = (g, I) => {
  const { appState: t, handleAppStateChange: A, handleError: e, isCameraReady: o } = Tt(), [i, C] = wA(), B = pA(() => {
    const a = o && I && I.isStreaming && I.getCameraSettings().facingMode;
    return a ? i ?? a === "user" : i ?? hx(g);
  }, [I, i, g, o]);
  _(() => {
    const a = () => {
      t !== yA.LOADING && A(yA.RUNNING);
    }, Q = () => {
      C(i === void 0 ? !B : !i);
    }, E = async () => {
      if (I) {
        A(yA.LOADING);
        try {
          await I.switchCamera(), A(yA.RUNNING);
        } catch (s) {
          if (s instanceof Error) {
            e(O.fromCameraError(s));
            return;
          }
        }
        C(void 0);
      }
    }, r = (s) => {
      var d;
      switch ((d = s.detail) == null ? void 0 : d["instruction"]) {
        case D0.CONTINUE_DETECTION:
          a();
          break;
        case D0.TOGGLE_MIRROR:
          Q();
          break;
        case D0.SWITCH_CAMERA:
          E();
          break;
        default:
          return;
      }
    };
    return document.addEventListener(g, r), () => {
      document.removeEventListener(g, r);
    };
  }, [t, I, e, i, A, B, g]);
  const n = {};
  return n.shouldCameraMirror = B, n;
};
async function KC() {
  return navigator.mediaDevices.enumerateDevices();
}
async function m0() {
  return (await KC()).filter((I) => I.kind === "videoinput");
}
function G0(g) {
  g.getTracks().forEach((t) => t.stop());
}
function Vo(g) {
  return g.getVideoTracks()[4922 + -80 * 16 + -1821 * 2];
}
const hg = {};
hg.width = 1920, hg.height = 1080, hg.facingMode = WI.FRONT;
const ux = hg;
var YA;
class OC {
  constructor({ defaultVideoConstrains: I = ux, minCameraShorterSide: t = ka } = {}) {
    p(this, "options");
    p(this, "availableCameraProperties", []);
    W(this, YA, null);
    const A = {};
    A.defaultVideoConstrains = I, A.minCameraShorterSide = t, this.options = A;
  }
  get mediaStream() {
    return m(this, YA);
  }
  get videoTrack() {
    return m(this, YA) ? Vo(m(this, YA)) : void (-2803 + -70 * -97 + -3987);
  }
  get isCameraActive() {
    var I;
    return !!((I = m(this, YA)) != null && I.active);
  }
  static async requestPermission() {
    const I = {};
    I.video = !0;
    const t = await navigator.mediaDevices.getUserMedia(I);
    G0(t);
  }
  async open(I = {}) {
    Zo() && await eI(17020 + 10 * -1657), v(this, YA, await navigator.mediaDevices.getUserMedia(I)), this.checkVideoTrackSettings();
  }
  async toggle() {
    if (!this.videoTrack) throw Error("Video track must be initialized to set new constraints");
    const I = await m0();
    if (I.length <= 11135 + 2 * -5567) return;
    const t = this.videoTrack.getConstraints(), A = this.videoTrack.getSettings(), e = I.findIndex((C) => C.deviceId === A.deviceId), o = I[e + 1] ?? I[0], i = this.getConstraints(t, o);
    this.close(), await this.open(i);
  }
  close() {
    m(this, YA) && (G0(m(this, YA)), v(this, YA, null));
  }
  async getProperties() {
    const I = await this.getDeviceName(), t = this.getSettings(), A = { ...t };
    A.deviceName = I;
    const e = {};
    return e.currentCameraProperties = A, e.availableCameraProperties = this.availableCameraProperties, e;
  }
  getSettings() {
    if (!this.videoTrack) throw Error("Video track must be initialized to get settings");
    return this.videoTrack.getSettings();
  }
  getResolution() {
    const I = this.getSettings();
    if (!I.width) throw new O("Video width is undefined");
    if (!I.height) throw new O("Video height is undefined");
    const t = {};
    return t.width = I.width, t.height = I.height, t;
  }
  async getDeviceName() {
    const I = this.getSettings(), t = await KC(), A = t.find((e) => e.deviceId === I.deviceId);
    return A == null ? void 0 : A.label;
  }
  async getBestCameraInfo(I) {
    return I === WI.FRONT ? void (-11 * 716 + -5591 + 13467) : this.getMobileRearCameraInfo();
  }
  async getMobileRearCameraInfo() {
    if (FC())
      return (await m0()).find((A) => A.label.includes("back") && A.label.includes("0"));
  }
  async collectAvailableCamerasInfo() {
    const I = await m0();
    for (const t of I) {
      Zo() && await eI(1063 + 49 * -49 + 1788);
      try {
        const A = {};
        A.deviceId = t.deviceId, A.width = 480;
        const e = {};
        e.video = A;
        const o = await navigator.mediaDevices.getUserMedia(e), i = Vo(o);
        if (!i) throw new Error("Video track not found! (device id: " + t.deviceId + ")");
        const C = i.getSettings(), B = { ...C };
        B.deviceName = i.label;
        const n = {};
        n.cameraProperties = B;
        const a = n;
        this.availableCameraProperties.push(a), G0(o);
      } catch (A) {
        A instanceof Error && O.logError(A);
      }
    }
  }
  getConstraints(I, t) {
    const A = { ...this.options.defaultVideoConstrains, ...I };
    A.deviceId = t ? { exact: t.deviceId } : void 0;
    const e = {};
    return e.video = A, e.audio = !1, e;
  }
  checkVideoTrackSettings() {
    var A;
    const I = (A = this.videoTrack) == null ? void 0 : A.getSettings();
    if (!(I != null && I.height) || !(I != null && I.width))
      throw this.close(), new O("Could not init camera settings");
    if (typeof this.options.minCameraShorterSide != "number") return;
    if (Math.min(I == null ? void 0 : I.width, I == null ? void 0 : I.height) < this.options.minCameraShorterSide)
      throw this.close(), new O("Could not init video because of low camera resolution: " + I.width + "x" + I.height + ".");
  }
}
YA = new WeakMap();
class fx {
  constructor(I, t) {
    this.videoHandler = I, this.cameraHandler = t;
  }
  get isStreaming() {
    return !!(this.cameraHandler.isCameraActive && this.videoHandler.hasSrcObject());
  }
  async startVideoStream(I = {}) {
    await OC.requestPermission(), await this.cameraHandler.collectAvailableCamerasInfo();
    const t = await this.cameraHandler.getBestCameraInfo(I.facingMode), A = this.cameraHandler.getConstraints(I, t);
    await this.cameraHandler.open(A), La() && (this.cameraHandler.close(), await this.cameraHandler.open(A)), await this.mountVideoStream();
  }
  takePhoto() {
    var e;
    if (!this.cameraHandler.videoTrack) throw Error("Video track must be initialized to take photo");
    const I = (e = this.cameraHandler.videoTrack) == null ? void 0 : e.getSettings();
    if (!(I != null && I.width)) throw new O("Cant take photo - video width is undefined");
    if (!(I != null && I.height)) throw new O("Cant take photo - video height is undefined");
    const t = document.createElement("canvas");
    t.width = I.width, t.height = I.height;
    const A = t.getContext("2d");
    if (!A) throw new O("Cant take photo - cant create context");
    return A.drawImage(this.videoHandler.videoElement, 147 * -23 + 13 * 52 + -1 * -2705, 695 + -1921 * -1 + -2616), { image: t, timestamp: Date.now() };
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
var PA;
class Dx {
  constructor(I) {
    W(this, PA);
    v(this, PA, I);
  }
  get videoElement() {
    return m(this, PA);
  }
  async play(I) {
    m(this, PA).srcObject = I, await m(this, PA).play();
  }
  stop() {
    m(this, PA).srcObject = null;
  }
  hasSrcObject() {
    return !!m(this, PA).srcObject;
  }
}
PA = new WeakMap();
function yx(g) {
  const I = UA(null), t = UA(), { handleError: A, setIsCameraReady: e } = Tt(), [o, i] = wA(), C = $A((n) => {
    i((a) => Ya(n, a));
  }, []);
  _(() => ((async () => {
    if (!I.current) {
      A(new O("Something went wrong during video initialization"));
      return;
    }
    const a = new Dx(I.current), Q = new OC(), E = new fx(a, Q);
    try {
      const r = {};
      r.facingMode = g, await E.startVideoStream(r);
    } catch (r) {
      if (r instanceof Error) {
        A(O.fromCameraError(r));
        return;
      }
    }
    e(!0), C(E.getCameraResolution()), t.current = E;
  })(), function() {
    t.current && t.current.stopStreaming(), e(!1);
  }), [g, A, e, I, C]);
  const B = {};
  return B.cameraService = t.current, B.cameraResolution = o, B.onCameraResolutionChange = C, B.videoRef = I, B;
}
function wx(g, I) {
  _(() => {
    if (!g.current) return;
    const t = new ResizeObserver((A) => {
      const [e] = A;
      rx(I, e.contentRect);
    });
    return t.observe(g.current), () => {
      t.disconnect();
    };
  }, [g, I]);
}
function px(g) {
  return Ae(Math.abs(g));
}
const mx = () => {
  const [g, I] = wA(null), t = UA(new HI(-4920 + 7513 * 1 + 2588 * -1));
  function A(o) {
    const { z: i } = o.accelerationIncludingGravity || {};
    if (!i) return;
    t.current.pushFixed(px(i));
    const C = Ae(Dt(t.current)), B = {};
    B.z = C, I(B);
  }
  _(() => (window.addEventListener("devicemotion", va(A, Ma), !0), () => {
    window.removeEventListener("devicemotion", A, !0);
  }), []);
  const e = {};
  return e.acceleration = g, e;
};
var Gx = Symbol.for("preact-signals");
function OI() {
  if (ve > 13 * 50 + -2459 + 1810)
    ve--;
  else {
    for (var g, I = !1; void (702 + -2 * -206 + -1114 * 1) !== ht; ) {
      var t = ht;
      for (ht = void (-1 * -4126 + -7463 + 3337 * 1), oI++; void (-139 * 71 + -7098 + 16967 * 1) !== t; ) {
        var A = t.o;
        if (t.o = void (4233 + -7223 * 1 + 10 * 299), t.f &= -(-95 * 83 + -880 * -2 + 6128), !(8 & t.f) && ZC(t)) try {
          t.c();
        } catch (e) {
          !I && (g = e, I = !(12079 + 12079 * -1));
        }
        t = A;
      }
    }
    if (oI = -53 * -41 + 3981 + -6154, ve--, I) throw g;
  }
}
var K = void (1 * -5453 + 8189 + -2736 * 1), ht = void 0, ve = 0, oI = -14958 + -2 * -7479, Lg = -1412 + 3 * 2061 + -4771;
function qC(g) {
  if (void (3828 + -2 * 1619 + -590) !== K) {
    var I = g.n;
    if (void (-5784 + 8 * 193 + -16 * -265) === I || I.t !== K)
      return I = { i: 0, S: g, p: K.s, n: void (6552 + 3 * -1578 + -1818 * 1), t: K, e: void (-1964 * -2 + 8410 + -62 * 199), x: void (597 * 5 + -331 + -2654), r: I }, void (10 * -897 + -1464 + 10434) !== K.s && (K.s.n = I), K.s = I, g.n = I, -3947 * -1 + -2305 + 322 * -5 & K.f && g.S(I), I;
    if (I.i === -1)
      return I.i = 3543 + -3 * 1181, void (-9072 + 84 * 108) !== I.n && (I.n.p = I.p, void (6665 + 8966 * 1 + -15631) !== I.p && (I.p.n = I.n), I.p = K.s, I.n = void (-2263 + 1219 * 3 + -1394), K.s.n = I, K.s = I), I;
  }
}
function nA(g) {
  this.v = g, this.i = 6170 + -1 * -7841 + -14011, this.n = void (1681 + -3881 * -2 + -9443), this.t = void (3267 + -35 * -155 + 2 * -4346);
}
nA.prototype.brand = Gx, nA.prototype.h = function() {
  return !(3455 + -2633 * 3 + 1111 * 4);
}, nA.prototype.S = function(g) {
  this.t !== g && void (-5988 + 1 * 8509 + -2521) === g.e && (g.x = this.t, void (-1 * 1787 + 2900 + -21 * 53) !== this.t && (this.t.e = g), this.t = g);
}, nA.prototype.U = function(g) {
  if (void (-71 * 8 + 1459 * -4 + 6404) !== this.t) {
    var I = g.e, t = g.x;
    void (2311 * 1 + -6965 + 179 * 26) !== I && (I.x = t, g.e = void (-486 + 54 * 9)), void (5469 + -3 * 1823) !== t && (t.e = I, g.x = void (-1818 + 6 * 303)), g === this.t && (this.t = t);
  }
}, nA.prototype.subscribe = function(g) {
  var I = this;
  return TI(function() {
    var t = I.value, A = K;
    K = void (-1013 * 8 + -1438 + 9542);
    try {
      g(t);
    } finally {
      K = A;
    }
  });
}, nA.prototype.valueOf = function() {
  return this.value;
}, nA.prototype.toString = function() {
  return this.value + "";
}, nA.prototype.toJSON = function() {
  return this.value;
}, nA.prototype.peek = function() {
  var g = K;
  K = void (6173 + -36 * -250 + 15173 * -1);
  try {
    return this.value;
  } finally {
    K = g;
  }
}, Object.defineProperty(nA.prototype, "value", { get: function() {
  var g = qC(this);
  return void (51 * -33 + -1637 * -5 + -6502) !== g && (g.i = this.i), this.v;
}, set: function(g) {
  if (g !== this.v) {
    if (oI > -11 * 209 + -8076 + 5 * 2095) throw new Error("Cycle detected");
    this.v = g, this.i++, Lg++, ve++;
    try {
      for (var I = this.t; void (5407 + 3 * -776 + -3079) !== I; I = I.x) I.t.N();
    } finally {
      OI();
    }
  }
} });
function TC(g) {
  return new nA(g);
}
function ZC(g) {
  for (var I = g.s; I !== void 0; I = I.n) if (I.S.i !== I.i || !I.S.h() || I.S.i !== I.i) return !(-1 * -6187 + -89 * -89 + -14108);
  return !(-42 * 108 + -8 * -891 + -2591 * 1);
}
function jC(g) {
  for (var I = g.s; void (-17837 + 1 * 17837) !== I; I = I.n) {
    var t = I.S.n;
    if (void (-60 * 34 + -5463 + 7503) !== t && (I.r = t), I.S.n = I, I.i = -(1361 * -7 + -961 + 10489), void (-3982 * 1 + -9978 + -1 * -13960) === I.n) {
      g.s = I;
      break;
    }
  }
}
function PC(g) {
  for (var I = g.s, t = void (-3 * -1177 + 4744 * -1 + -1 * -1213); void (-8970 + 23 * -347 + 16951 * 1) !== I; ) {
    var A = I.p;
    -(-567 * -12 + 7187 + -13990 * 1) === I.i ? (I.S.U(I), void (2897 + -1 * 2897) !== A && (A.n = I.n), void (-4931 + 593 * 4 + 2559) !== I.n && (I.n.p = A)) : t = I, I.S.n = I.r, void (632 + -694 * 3 + 290 * 5) !== I.r && (I.r = void (25 * 250 + -1758 + 4 * -1123)), I = A;
  }
  g.s = t;
}
function Le(g) {
  nA.call(this, void (-4548 + 7886 * 1 + -3338 * 1)), this.x = g, this.s = void (-2896 + 8 * 362), this.g = Lg - (-3698 + -1 * -6338 + -377 * 7), this.f = 8249 * -1 + -746 + -8999 * -1;
}
(Le.prototype = new nA()).h = function() {
  if (this.f &= -(-7438 + -8275 * -1 + -2 * 417), 47 * 106 + 10 * -378 + -1201 & this.f) return !(111 * -37 + 276 + 3832);
  if ((-4 * 2327 + -5 * -1685 + 919 & this.f) == 32) return !(-9531 * 1 + 1 * 1034 + 8497);
  if (this.f &= -(-6751 + -197 * 13 + 9317), this.g === Lg) return !(-47 * 109 + 5054 + 69);
  if (this.g = Lg, this.f |= 14131 + 157 * -90, this.i > -13654 + -1 * -13654 && !ZC(this)) return this.f &= -(-4156 + 27 * 154), !(-13041 + -69 * -189);
  var g = K;
  try {
    jC(this), K = this;
    var I = this.x();
    (-1547 + 1 * 1563 & this.f || this.v !== I || -10 * 394 + 5559 + -1619 === this.i) && (this.v = I, this.f &= -(-1400 + -52 * 31 + 3029), this.i++);
  } catch (t) {
    this.v = t, this.f |= 1 * -9754 + 3390 + -2 * -3190, this.i++;
  }
  return K = g, PC(this), this.f &= -2, !(36 * 137 + 8812 + -13744);
}, Le.prototype.S = function(g) {
  if (void (4167 + -1389 * 3) === this.t) {
    this.f |= -1 * 3409 + -3342 + -11 * -617;
    for (var I = this.s; void (46 * 61 + 278 * 11 + -5864) !== I; I = I.n) I.S.S(I);
  }
  nA.prototype.S.call(this, g);
}, Le.prototype.U = function(g) {
  if (void (-7528 + 1882 * 4) !== this.t && (nA.prototype.U.call(this, g), void (-3599 + 61 * 59) === this.t)) {
    this.f &= -(-4 * -2042 + 19 * 372 + -15203);
    for (var I = this.s; void (13 * 369 + 3653 * -1 + -88 * 13) !== I; I = I.n) I.S.U(I);
  }
}, Le.prototype.N = function() {
  if (!(2 * -617 + 137 * -50 + 8086 & this.f)) {
    this.f |= -6663 * -1 + 2875 + -4 * 2383;
    for (var g = this.t; void (-8295 * -1 + -6942 + -1353) !== g; g = g.x) g.t.N();
  }
}, Object.defineProperty(Le.prototype, "value", { get: function() {
  if (1 & this.f) throw new Error("Cycle detected");
  var g = qC(this);
  if (this.h(), void (6633 + -45 * -115 + -11808) !== g && (g.i = this.i), -2601 * 3 + -9085 + 16904 & this.f) throw this.v;
  return this.v;
} });
function kx(g) {
  return new Le(g);
}
function VC(g) {
  var I = g.u;
  if (g.u = void (-275 * -6 + -3927 + 99 * 23), typeof I == "function") {
    ve++;
    var t = K;
    K = void (-2 * -2924 + -2 * 1827 + -2194);
    try {
      I();
    } catch (A) {
      throw g.f &= -(8236 + -5 * 395 + -6259), g.f |= -119 * 23 + 2 * -110 + 2965, qI(g), A;
    } finally {
      K = t, OI();
    }
  }
}
function qI(g) {
  for (var I = g.s; void (-14222 + 1 * 14222) !== I; I = I.n) I.S.U(I);
  g.x = void (-1402 + -1 * -1402), g.s = void (1 * -3958 + -2955 + -6913 * -1), VC(g);
}
function Nx(g) {
  if (K !== this) throw new Error("Out-of-order effect");
  PC(this), K = g, this.f &= -(-7457 * 1 + -2350 * -2 + 2759), 8 & this.f && qI(this), OI();
}
function at(g) {
  this.x = g, this.u = void 0, this.s = void (25 * -9 + 6145 + -5920), this.o = void 0, this.f = -4063 * -1 + 4957 * 2 + -13945;
}
at.prototype.c = function() {
  var g = this.S();
  try {
    if (4349 * 1 + -3 * 3278 + -1831 * -3 & this.f || void (3945 * 1 + 2 * -4470 + -1665 * -3) === this.x) return;
    var I = this.x();
    typeof I == "function" && (this.u = I);
  } finally {
    g();
  }
}, at.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= -151 * -16 + 218 * 39 + 1213 * -9, this.f &= -(-3073 * 1 + -3795 + 6877), VC(this), jC(this), ve++;
  var g = K;
  return K = this, Nx.bind(this, g);
}, at.prototype.N = function() {
  !(1 * 6385 + 1313 * 2 + 9009 * -1 & this.f) && (this.f |= 2, this.o = ht, ht = this);
}, at.prototype.d = function() {
  this.f |= -226 * 17 + -823 + 1 * 4673, 1 * -419 + -5335 + 5755 & this.f || qI(this);
};
function TI(g) {
  var I = new at(g);
  try {
    I.c();
  } catch (t) {
    throw I.d(), t;
  }
  return I.d.bind(I);
}
var k0;
function Ye(g, I) {
  N[g] = I.bind(null, N[g] || function() {
  });
}
function gg(g) {
  k0 && k0(), k0 = g && g.S();
}
function XC(g) {
  var I = this, t = g.data, A = zC(t);
  A.value = t;
  var e = pA(function() {
    for (var o = I.__v; o = o.__; ) if (o.__c) {
      o.__c.__$f |= -559 * -2 + -4608 + -1747 * -2;
      break;
    }
    return I.__$u.c = function() {
      var i;
      !Di(e.peek()) && -9144 + 2 * -3049 + 15245 === ((i = I.base) == null ? void (-1 * 5597 + 91 * 17 + 4050) : i.nodeType) ? I.base.data = e.peek() : (I.__$f |= -1 * -7111 + -41 * -31 + 29 * -289, I.setState({}));
    }, kx(function() {
      var i = A.value.value;
      return -450 + 9337 * 1 + -1 * 8887 === i ? 11334 + 3 * -3778 : i === !0 ? "" : i || "";
    });
  }, []);
  return e.value;
}
XC.displayName = "_st";
var iI = {};
iI.configurable = !(7 * 1229 + 163 * -13 + -6484), iI.value = void (-551 + 566 * 13 + -6807);
var CI = {};
CI.configurable = !(-8162 * -1 + -1 * -6421 + -14583), CI.value = XC;
var BI = {};
BI.configurable = !(907 + -1 * 907), BI.get = function() {
  var g = {};
  return g.data = this, g;
};
var nI = {};
nI.configurable = !(1 * -6593 + -347 * 23 + 14574), nI.value = 1;
var gt = {};
gt.constructor = iI, gt.type = CI, gt.props = BI, gt.__b = nI, Object.defineProperties(nA.prototype, gt), Ye("__b", function(g, I) {
  if (typeof I.type == "string") {
    var t, A = I.props;
    for (var e in A) if (e !== "children") {
      var o = A[e];
      o instanceof nA && (t || (I.__np = t = {}), t[e] = o, A[e] = o.peek());
    }
  }
  g(I);
}), Ye("__r", function(g, I) {
  gg();
  var t, A = I.__c;
  A && (A.__$f &= -(118 * 71 + 2199 + 225 * -47), void (263 * -2 + 8846 + -8320) === (t = A.__$u) && (A.__$u = t = function(e) {
    var o;
    return TI(function() {
      o = this;
    }), o.c = function() {
      A.__$f |= 6910 * 1 + -8755 + 1846, A.setState({});
    }, o;
  }())), gg(t), g(I);
}), Ye("__e", function(g, I, t, A) {
  gg(), g(I, t, A);
}), Ye("diffed", function(g, I) {
  gg();
  var t;
  if (typeof I.type == "string" && (t = I.__e)) {
    var A = I.__np, e = I.props;
    if (A) {
      var o = t.U;
      if (o) for (var i in o) {
        var C = o[i];
        void (4891 + 239 * -5 + 66 * -56) !== C && !(i in A) && (C.d(), o[i] = void (-1 * 3161 + 344 + 2817));
      }
      else t.U = o = {};
      for (var B in A) {
        var n = o[B], a = A[B];
        void (5288 * 1 + -2416 + 4 * -718) === n ? (n = bx(t, B, a, e), o[B] = n) : n.o(a, e);
      }
    }
  }
  g(I);
});
function bx(g, I, t, A) {
  var e = I in g && g.ownerSVGElement === void 0, o = TC(t);
  return { o: function(i, C) {
    o.value = i, A = C;
  }, d: TI(function() {
    var i = o.value.value;
    A[I] !== i && (A[I] = i, e ? g[I] = i : i ? g.setAttribute(I, i) : g.removeAttribute(I));
  }) };
}
Ye("unmount", function(g, I) {
  if (typeof I.type == "string") {
    var t = I.__e;
    if (t) {
      var A = t.U;
      if (A) {
        t.U = void (3 * -1031 + 1 * 7057 + -3964);
        for (var e in A) {
          var o = A[e];
          o && o.d();
        }
      }
    }
  } else {
    var i = I.__c;
    if (i) {
      var C = i.__$u;
      C && (i.__$u = void (334 * -8 + 1488 + 592 * 2), C.d());
    }
  }
  g(I);
}), Ye("__h", function(g, I, t, A) {
  (A < -5 * -182 + 604 * -6 + 2717 || 1351 * -6 + -8641 + 16756 === A) && (I.__$f |= -4073 + -4075 * -1), g(I, t, A);
}), RA.prototype.shouldComponentUpdate = function(g, I) {
  var t = this.__$u;
  if (!(t && void (3020 + -806 * 9 + 4234) !== t.s || 53 * -29 + -1669 + 3210 & this.__$f)) return !(238 * 36 + -1 * -353 + -11 * 811);
  if (-3563 + 11 * -339 + 1 * 7295 & this.__$f) return !(-7113 + 4 * 802 + 1 * 3905);
  for (var A in I) return !(1 * 7628 + 2802 + -745 * 14);
  for (var e in g) if (e !== "__source" && g[e] !== this.props[e]) return !(-27 * 177 + 3306 + -1473 * -1);
  for (var o in this.props) if (!(o in g)) return !(3575 + 143 * -25);
  return !1;
};
function zC(g) {
  return pA(function() {
    return TC(g);
  }, []);
}
const Fx = async () => WebAssembly.validate(new Uint8Array([107 * 79 + 6862 * 1 + -1 * 15315, 9064 + 599 * 1 + 9566 * -1, -2 * -265 + -8391 + -3988 * -2, 1 * -3712 + -1 * -5891 + 10 * -207, -5299 + 845 * 10 + -1050 * 3, 1257 * 3 + -5519 + 1748, 6690 + 1 * -4814 + -1876, 7 * 520 + 386 * 25 + 3 * -4430, -6898 + 9 * -67 + -242 * -31, 5247 + 5242 * -1, 6986 + 127 * -55, 2777 + -9923 * -1 + -1 * 12604, 7634 + 1543 * 6 + -16892, -44 * 157 + 4349 + -1280 * -2, -9625 + -1 * -3859 + -39 * -151, 3, 2, 709 * 3 + 4313 * -1 + 2187 * 1, -6586 + 37 * 178, 10, 1366 * 3 + -4729 + 641, -5791 + 4 * 1448, 46 * 29 + 4814 * -1 + 3488, -1153 * 8 + 3196 + 6028, 9729 + 619 * 13 + 89 * -199, -61 * 49 + -1 * -7417 + -4428, 253, 8421 + 13 * -33 + -7977, 29 * -293 + -139 * -71 + 1119 * -1, 2192 * 2 + -2461 + -1825, 4197 + 1 * -8289 + 1 * 4103]));
function Rx() {
  const [g] = window.crypto.getRandomValues(new Uint32Array(1));
  return g.toString(13 * 426 + 1246 + -6768);
}
function Sx() {
  const g = sessionStorage.getItem("dot-user-id");
  if (g) return g;
  const I = Rx();
  return sessionStorage.setItem("dot-user-id", I), I;
}
function Mx(g, I) {
  return I ? I === "user" ? "Front Camera" : "Back Camera" : g;
}
const QI = {};
QI.label = ">1m", QI.time = 60;
const aI = {};
aI.label = ">45", aI.time = 45;
const xI = {};
xI.label = ">30", xI.time = 30;
function Lx(g, I = [QI, aI, xI]) {
  const t = I.sort((A, e) => e.time - A.time);
  for (const A of t)
    if (g > A.time) return A.label;
  return "" + g;
}
const Jx = (g) => Math.round(g / 500) * 500 / (1731 * 1 + 191 * 29 + -6270), Xo = (g) => g ? g <= 4638 + -119 * 68 + -691 * -5 ? Math.round(g * (3794 * -1 + 4814 * 1 + -1e3)) / (4621 + 9 * -838 + 2941) : Math.round(g / (-7369 + -2473 * -3)) * (1 * -7571 + -2746 * 2 + 423 * 31) : 0, Yx = (g) => Math.round(g * 2) / (1817 + -1 * 2315 + -50 * -10);
function vx(g) {
  return g !== yA.RUNNING ? Fg.VISIBLE : Fg.VISIBLE_WITH_MASK;
}
async function Ux() {
  return await Fx() ? jo.SIMD : jo.NO_SIMD;
}
var mt, zg;
class _C {
  constructor(I) {
    W(this, mt, !0);
    W(this, zg, Date.now());
    p(this, "analytics");
    p(this, "samVersion");
    p(this, "sessionToken");
    p(this, "onDetectionCallback");
    p(this, "onCaptureCallback");
    p(this, "createProtoMessage");
    p(this, "fpsOfAllImages", new HI(-1464 + -83 * -18));
    p(this, "cameraService");
    p(this, "imageProcessor");
    this.cameraService = I.cameraService, this.imageProcessor = I.imageProcessor, this.analytics = I.analytics, this.samVersion = I.samVersion, this.sessionToken = I.sessionToken, this.createProtoMessage = I.createProtoMessage, this.onDetectionCallback = I.onDetectionCallback, this.onCaptureCallback = I.onCaptureCallback;
  }
  async run() {
    for (; m(this, mt); )
      await this.iterate();
    return this;
  }
  stop() {
    v(this, mt, !1);
  }
  async trackCaptureProcess(I, t) {
    var i;
    const A = Date.now(), e = Dt(this.fpsOfAllImages), o = {};
    o.width = t.width, o.height = t.height, (i = this.analytics) == null || i.trackCaptureProcess({ detection: I, imageResolution: o, deviceName: await this.cameraService.getDeviceName(), averageFps: e, captureProcessDurationInMs: A - m(this, zg), facingMode: this.cameraService.getCameraSettings().facingMode, instructionSet: await Ux() });
  }
  onDetection(I, t) {
    this.onDetectionCallback({ ...I, avgFps: Ae(Dt(this.fpsOfAllImages)), samVersion: this.samVersion }, t);
  }
  async onCapture({ candidateSelectionImages: I, canvasImage: t, detection: A }) {
    const e = {};
    e.width = t.width, e.height = t.height;
    const o = e, i = await Ka(t), C = await this.cameraService.getCameraProperties(), B = { ...C, detectionRecord: this.imageProcessor.detectionRecord, hashedDetectedImagesWithTimestamp: this.imageProcessor.getHashedDetectedImagesWithTimestamp() }, n = {};
    n.sessionToken = this.sessionToken, n.web = B;
    const a = n, Q = await this.createProtoMessage(i, a), E = {};
    E.detection = A, E.imageResolution = o;
    const r = {};
    r.image = i, r.data = E;
    const s = r;
    this.stop();
    const d = {};
    d.imageData = s, d.protoMessage = Q, d.webMetadata = B, d.candidateSelectionImages = I, this.onCaptureCallback(d);
  }
  getDetectionEndTime(I) {
    return Date.now() - I;
  }
  getInvalidInstructions(I, t) {
    const A = [];
    return Array.from(I).forEach(([e, o]) => {
      !o && A.push(t[e]);
    }), A;
  }
  async sleep(I) {
    await eI(Math.max(qo.max - I, qo.min));
  }
}
mt = new WeakMap(), zg = new WeakMap();
class Wx extends _C {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, instructionCodeMap: e, ...o }) {
    super(o);
    p(this, "candidateSelectionTime", 4466 + 4799 * -1 + 333 * 1);
    p(this, "candidatesSelectionFramesCount", 1 * -2929 + 7830 + 1 * -4901);
    p(this, "isInCandidateSelection", !1);
    p(this, "lastImage", null);
    p(this, "bestImage", null);
    p(this, "candidateSelectionImages", []);
    p(this, "fallbackInstruction");
    p(this, "instructionCodeMap");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.instructionCodeMap = e, this.checkToInstructionCodeMap = t;
  }
  async iterate() {
    if (this.isCandidateSelectionDone()) {
      await this.onCandidateSelectionDone();
      return;
    }
    const t = this.cameraService.takePhoto(), A = await this.processTakenPhoto(t);
    this.isInCandidateSelection ? this.saveBetterImage(t, A) : this.tryInitCandidatePhase(t, A);
    const e = {};
    e.takenPhoto = t, e.imageProcessorResult = A;
    const o = this.getDetectionDetails(e);
    this.onDetection(o, t.image), this.isInCandidateSelection && this.candidateSelectionBegun();
    const i = {};
    i.instructionCode = o.processedImage.instructionCode, i.isValid = A.isValid, i.image = t.image, i.detection = A.detection, this.lastImage = i, await this.sleep(o.detectionTime);
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (A) {
      throw A instanceof Error ? O.fromCameraError(A) : O.fromError(A);
    }
  }
  saveBetterImage(t, A) {
    if (!(this.bestImage && A.isValid && this.isNewImageBetter(this.bestImage.detection, A.detection))) return;
    const o = {};
    o.image = t.image, o.detection = A.detection;
    const i = o;
    this.bestImage = i, this.candidateSelectionImages.push(i);
  }
  tryInitCandidatePhase(t, A) {
    var C;
    if (!(((C = this.lastImage) == null ? void 0 : C.isValid) && A.isValid)) return;
    const o = {};
    o.image = t.image, o.detection = A.detection;
    const i = o;
    this.isNewImageBetter(this.lastImage.detection, i.detection) ? this.bestImage = i : this.bestImage = this.lastImage, this.candidateSelectionImages.push(this.lastImage, i), this.isInCandidateSelection = !0;
  }
  candidateSelectionBegun() {
    this.candidateSelectionTime === 0 && (this.candidateSelectionTime = performance.now()), this.candidatesSelectionFramesCount++;
  }
  isCandidateSelectionDone() {
    const t = this.candidateSelectionTime && performance.now() - this.candidateSelectionTime;
    return this.candidatesSelectionFramesCount >= w0.minFrames ? t > w0.minDuration : t > w0.maxDuration;
  }
  async onCandidateSelectionDone() {
    const { detection: t, image: A } = this.bestImage || {};
    if (A && t) this.trackCaptureProcess(t, A), await this.onCapture({ canvasImage: A, detection: t, candidateSelectionImages: this.candidateSelectionImages }), this.imageProcessor.reset();
    else throw new O("Something went wrong during capturing an image");
  }
  getDetectionDetails({ imageProcessorResult: t, takenPhoto: A }) {
    const e = this.getDetectionEndTime(A.timestamp), o = Ae((-5280 + -4 * 2221 + 15164) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = A.image.width, i.height = A.image.height;
    const C = i, B = this.getInvalidInstructions(t.validationResult, this.checkToInstructionCodeMap), n = {};
    n.isNewDetectionValid = t.isValid, n.newInvalidInstruction = B[-687 + 8 * 43 + -49 * -7];
    const a = this.getInstructionCode(n), Q = {};
    return Q.detection = t.detection, Q.instructionCode = a, Q.invalidValidators = B, Q.isInCandidateSelection = this.isInCandidateSelection, { processedImage: Q, detectionTime: e, fps: o, avgFps: Ae(Dt(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode({ isNewDetectionValid: t, newInvalidInstruction: A }) {
    var e;
    return this.isInCandidateSelection ? this.instructionCodeMap.CANDIDATE_SELECTION : (e = this.lastImage) != null && e.isValid && t ? this.instructionCodeMap.CANDIDATE_SELECTION : this.lastImage && t ? this.lastImage.instructionCode : A ?? this.fallbackInstruction;
  }
  isNewImageBetter(t, A) {
    return A.sharpness > t.sharpness;
  }
}
var Ie, se;
class Hx extends _C {
  constructor({ checkToInstructionCodeMap: t, fallbackInstruction: A, ...e }) {
    super(e);
    W(this, Ie, void (-13 * 509 + -3287 + 9904));
    W(this, se);
    p(this, "fallbackInstruction");
    p(this, "checkToInstructionCodeMap");
    this.fallbackInstruction = A, this.checkToInstructionCodeMap = t, this.initRequestCaptureEventListener();
  }
  isRequestCaptureEventValid(t) {
    var A, e;
    return (A = t.detail) != null && A["instruction"] ? Object.values(y0).includes((e = t.detail) == null ? void 0 : e["instruction"]) : !1;
  }
  initRequestCaptureEventListener() {
    v(this, se, (t) => {
      var A;
      this.isRequestCaptureEventValid(t) && v(this, Ie, (A = t.detail) == null ? void 0 : A["instruction"]);
    }), document.addEventListener(Wo.REQUEST_CAPTURE, m(this, se));
  }
  async iterate() {
    const t = this.cameraService.takePhoto(), A = await this.processTakenPhoto(t), e = this.getDetectionDetails(t, A);
    if (this.onDetection(e, t.image), this.isCaptureDone(A)) {
      await this.onCaptureDone(t.image, A.detection);
      return;
    }
    await this.sleep(e.detectionTime);
  }
  isCaptureDone(t) {
    return m(this, Ie) ? m(this, Ie) === y0.FIRST_FRAME ? !0 : m(this, Ie) === y0.FIRST_VALID_FRAME ? t.isValid : !1 : !1;
  }
  async processTakenPhoto(t) {
    try {
      return await this.imageProcessor.process(t);
    } catch (A) {
      throw A instanceof Error ? O.fromCameraError(A) : O.fromError(A);
    }
  }
  async onCaptureDone(t, A) {
    this.trackCaptureProcess(A, t);
    const e = {};
    e.canvasImage = t, e.detection = A, e.candidateSelectionImages = [], await this.onCapture(e), v(this, Ie, void (132 + 12 * 101 + -1344)), this.imageProcessor.reset();
  }
  getDetectionDetails(t, A) {
    const e = this.getDetectionEndTime(t.timestamp), o = Ae((63 * -67 + 5677 + -114 * 4) / e);
    this.fpsOfAllImages.pushFixed(o);
    const i = {};
    i.width = t.image.width, i.height = t.image.height;
    const C = i, B = this.getInvalidInstructions(A.validationResult, this.checkToInstructionCodeMap), n = this.getInstructionCode(B[2559 + 3 * -853]), a = {};
    return a.detection = A.detection, a.instructionCode = n, a.invalidValidators = B, a.isInCandidateSelection = !1, { processedImage: a, detectionTime: e, fps: o, avgFps: Ae(Dt(this.fpsOfAllImages)), resolution: C };
  }
  getInstructionCode(t) {
    return t ?? this.fallbackInstruction;
  }
  stop() {
    super.stop(), m(this, se) && document.removeEventListener(Wo.REQUEST_CAPTURE, m(this, se));
  }
}
Ie = new WeakMap(), se = new WeakMap();
function Kx({ captureMode: g, ...I }) {
  return g === DC.AUTO_CAPTURE ? new Wx(I) : new Hx(I);
}
function Ox({ cameraResolution: g, cameraService: I, customEvent: t }) {
  const { shouldCameraMirror: A } = lx(t.CONTROL, I), e = {};
  e.cameraResolution = g, e.shouldCameraMirror = A, dx(t.CAMERA_PROPS_CHANGED, e), _(() => () => {
    yt.getInstance().restart();
  }, []);
  const o = {};
  return o.shouldCameraMirror = A, o;
}
function qx({ cameraFacing: g, captureMode: I, checkToInstructionCodeMap: t, controller: A, createProtoMessage: e, customEvent: o, fallbackInstruction: i, instructionCodeMap: C, onCapture: B, onDetection: n, sessionToken: a }) {
  const { appState: Q, handleAppStateChange: E } = Tt(), { sunfish: r } = Zt(), { analytics: s } = $Q(), { cameraResolution: d, cameraService: h, onCameraResolutionChange: x, videoRef: u } = yx(g), w = {};
  w.cameraResolution = d, w.cameraService = h, w.customEvent = o;
  const { shouldCameraMirror: R } = Ox(w), S = zC(void (-111 + -3 * -37)), M = $A((J) => {
    E(yA.WAITING), B(J);
  }, [B, E]), y = $A((J, z) => {
    x(J.resolution), S.value = J, n(J, z);
  }, [n, S, x]);
  _(() => {
    h != null && h["isStreaming"] && (A != null && A["isDetectorInitialized"]) && r && E(yA.RUNNING);
  }, [h == null ? void 0 : h["isStreaming"], A == null ? void 0 : A["isDetectorInitialized"], E, r]), _(() => {
    if (Q !== yA.RUNNING) return;
    if (!h || !A) throw new O("Cannot start detection");
    const J = {};
    J.captureMode = I, J.analytics = s, J.cameraService = h, J.imageProcessor = A.imageProcessor, J.fallbackInstruction = i, J.instructionCodeMap = C, J.checkToInstructionCodeMap = t, J.sessionToken = a, J.samVersion = A.samVersion, J.createProtoMessage = e, J.onCaptureCallback = M, J.onDetectionCallback = y;
    const z = Kx(J);
    return A.runDetectionLoop(z), () => {
      A.stopDetectionLoop();
    };
  }, [Q, A, h, M, y, a, S, s, e, C, t, i, I]);
  const Z = {};
  return Z.videoRef = u, Z.cameraResolution = d, Z.detectionDetails = S, Z.shouldCameraMirror = R, Z;
}
var ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $C = {}, zo = {}, Tx = Zx;
function Zx(g, I) {
  for (var t = new Array(arguments.length - 1), A = 0, e = 2, o = !0; e < arguments.length; )
    t[A++] = arguments[e++];
  return new Promise(function(i, C) {
    t[A] = function(B) {
      if (o)
        if (o = !1, B)
          C(B);
        else {
          for (var n = new Array(arguments.length - 1), a = 0; a < n.length; )
            n[a++] = arguments[a];
          i.apply(null, n);
        }
    };
    try {
      g.apply(I || null, t);
    } catch (B) {
      o && (o = !1, C(B));
    }
  });
}
var AB = {};
(function(g) {
  var I = g;
  I.length = function(i) {
    var C = i.length;
    if (!C)
      return 0;
    for (var B = 0; --C % 4 > 1 && i.charAt(C) === "="; )
      ++B;
    return Math.ceil(i.length * 3) / 4 - B;
  };
  for (var t = new Array(64), A = new Array(123), e = 0; e < 64; )
    A[t[e] = e < 26 ? e + 65 : e < 52 ? e + 71 : e < 62 ? e - 4 : e - 59 | 43] = e++;
  I.encode = function(i, C, B) {
    for (var n = null, a = [], Q = 0, E = 0, r; C < B; ) {
      var s = i[C++];
      switch (E) {
        case 0:
          a[Q++] = t[s >> 2], r = (s & 3) << 4, E = 1;
          break;
        case 1:
          a[Q++] = t[r | s >> 4], r = (s & 15) << 2, E = 2;
          break;
        case 2:
          a[Q++] = t[r | s >> 6], a[Q++] = t[s & 63], E = 0;
          break;
      }
      Q > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, a)), Q = 0);
    }
    return E && (a[Q++] = t[r], a[Q++] = 61, E === 1 && (a[Q++] = 61)), n ? (Q && n.push(String.fromCharCode.apply(String, a.slice(0, Q))), n.join("")) : String.fromCharCode.apply(String, a.slice(0, Q));
  };
  var o = "invalid encoding";
  I.decode = function(i, C, B) {
    for (var n = B, a = 0, Q, E = 0; E < i.length; ) {
      var r = i.charCodeAt(E++);
      if (r === 61 && a > 1)
        break;
      if ((r = A[r]) === void 0)
        throw Error(o);
      switch (a) {
        case 0:
          Q = r, a = 1;
          break;
        case 1:
          C[B++] = Q << 2 | (r & 48) >> 4, Q = r, a = 2;
          break;
        case 2:
          C[B++] = (Q & 15) << 4 | (r & 60) >> 2, Q = r, a = 3;
          break;
        case 3:
          C[B++] = (Q & 3) << 6 | r, a = 0;
          break;
      }
    }
    if (a === 1)
      throw Error(o);
    return B - n;
  }, I.test = function(i) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(i);
  };
})(AB);
var jx = n0;
function n0() {
  this._listeners = {};
}
n0.prototype.on = function(g, I, t) {
  return (this._listeners[g] || (this._listeners[g] = [])).push({
    fn: I,
    ctx: t || this
  }), this;
};
n0.prototype.off = function(g, I) {
  if (g === void 0)
    this._listeners = {};
  else if (I === void 0)
    this._listeners[g] = [];
  else
    for (var t = this._listeners[g], A = 0; A < t.length; )
      t[A].fn === I ? t.splice(A, 1) : ++A;
  return this;
};
n0.prototype.emit = function(g) {
  var I = this._listeners[g];
  if (I) {
    for (var t = [], A = 1; A < arguments.length; )
      t.push(arguments[A++]);
    for (A = 0; A < I.length; )
      I[A].fn.apply(I[A++].ctx, t);
  }
  return this;
};
var Px = _o(_o);
function _o(g) {
  return typeof Float32Array < "u" ? function() {
    var I = new Float32Array([-0]), t = new Uint8Array(I.buffer), A = t[3] === 128;
    function e(B, n, a) {
      I[0] = B, n[a] = t[0], n[a + 1] = t[1], n[a + 2] = t[2], n[a + 3] = t[3];
    }
    function o(B, n, a) {
      I[0] = B, n[a] = t[3], n[a + 1] = t[2], n[a + 2] = t[1], n[a + 3] = t[0];
    }
    g.writeFloatLE = A ? e : o, g.writeFloatBE = A ? o : e;
    function i(B, n) {
      return t[0] = B[n], t[1] = B[n + 1], t[2] = B[n + 2], t[3] = B[n + 3], I[0];
    }
    function C(B, n) {
      return t[3] = B[n], t[2] = B[n + 1], t[1] = B[n + 2], t[0] = B[n + 3], I[0];
    }
    g.readFloatLE = A ? i : C, g.readFloatBE = A ? C : i;
  }() : function() {
    function I(A, e, o, i) {
      var C = e < 0 ? 1 : 0;
      if (C && (e = -e), e === 0)
        A(1 / e > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), o, i);
      else if (isNaN(e))
        A(2143289344, o, i);
      else if (e > 34028234663852886e22)
        A((C << 31 | 2139095040) >>> 0, o, i);
      else if (e < 11754943508222875e-54)
        A((C << 31 | Math.round(e / 1401298464324817e-60)) >>> 0, o, i);
      else {
        var B = Math.floor(Math.log(e) / Math.LN2), n = Math.round(e * Math.pow(2, -B) * 8388608) & 8388607;
        A((C << 31 | B + 127 << 23 | n) >>> 0, o, i);
      }
    }
    g.writeFloatLE = I.bind(null, $o), g.writeFloatBE = I.bind(null, Ai);
    function t(A, e, o) {
      var i = A(e, o), C = (i >> 31) * 2 + 1, B = i >>> 23 & 255, n = i & 8388607;
      return B === 255 ? n ? NaN : C * (1 / 0) : B === 0 ? C * 1401298464324817e-60 * n : C * Math.pow(2, B - 150) * (n + 8388608);
    }
    g.readFloatLE = t.bind(null, ei), g.readFloatBE = t.bind(null, ti);
  }(), typeof Float64Array < "u" ? function() {
    var I = new Float64Array([-0]), t = new Uint8Array(I.buffer), A = t[7] === 128;
    function e(B, n, a) {
      I[0] = B, n[a] = t[0], n[a + 1] = t[1], n[a + 2] = t[2], n[a + 3] = t[3], n[a + 4] = t[4], n[a + 5] = t[5], n[a + 6] = t[6], n[a + 7] = t[7];
    }
    function o(B, n, a) {
      I[0] = B, n[a] = t[7], n[a + 1] = t[6], n[a + 2] = t[5], n[a + 3] = t[4], n[a + 4] = t[3], n[a + 5] = t[2], n[a + 6] = t[1], n[a + 7] = t[0];
    }
    g.writeDoubleLE = A ? e : o, g.writeDoubleBE = A ? o : e;
    function i(B, n) {
      return t[0] = B[n], t[1] = B[n + 1], t[2] = B[n + 2], t[3] = B[n + 3], t[4] = B[n + 4], t[5] = B[n + 5], t[6] = B[n + 6], t[7] = B[n + 7], I[0];
    }
    function C(B, n) {
      return t[7] = B[n], t[6] = B[n + 1], t[5] = B[n + 2], t[4] = B[n + 3], t[3] = B[n + 4], t[2] = B[n + 5], t[1] = B[n + 6], t[0] = B[n + 7], I[0];
    }
    g.readDoubleLE = A ? i : C, g.readDoubleBE = A ? C : i;
  }() : function() {
    function I(A, e, o, i, C, B) {
      var n = i < 0 ? 1 : 0;
      if (n && (i = -i), i === 0)
        A(0, C, B + e), A(1 / i > 0 ? (
          /* positive */
          0
        ) : (
          /* negative 0 */
          2147483648
        ), C, B + o);
      else if (isNaN(i))
        A(0, C, B + e), A(2146959360, C, B + o);
      else if (i > 17976931348623157e292)
        A(0, C, B + e), A((n << 31 | 2146435072) >>> 0, C, B + o);
      else {
        var a;
        if (i < 22250738585072014e-324)
          a = i / 5e-324, A(a >>> 0, C, B + e), A((n << 31 | a / 4294967296) >>> 0, C, B + o);
        else {
          var Q = Math.floor(Math.log(i) / Math.LN2);
          Q === 1024 && (Q = 1023), a = i * Math.pow(2, -Q), A(a * 4503599627370496 >>> 0, C, B + e), A((n << 31 | Q + 1023 << 20 | a * 1048576 & 1048575) >>> 0, C, B + o);
        }
      }
    }
    g.writeDoubleLE = I.bind(null, $o, 0, 4), g.writeDoubleBE = I.bind(null, Ai, 4, 0);
    function t(A, e, o, i, C) {
      var B = A(i, C + e), n = A(i, C + o), a = (n >> 31) * 2 + 1, Q = n >>> 20 & 2047, E = 4294967296 * (n & 1048575) + B;
      return Q === 2047 ? E ? NaN : a * (1 / 0) : Q === 0 ? a * 5e-324 * E : a * Math.pow(2, Q - 1075) * (E + 4503599627370496);
    }
    g.readDoubleLE = t.bind(null, ei, 0, 4), g.readDoubleBE = t.bind(null, ti, 4, 0);
  }(), g;
}
function $o(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
function Ai(g, I, t) {
  I[t] = g >>> 24, I[t + 1] = g >>> 16 & 255, I[t + 2] = g >>> 8 & 255, I[t + 3] = g & 255;
}
function ei(g, I) {
  return (g[I] | g[I + 1] << 8 | g[I + 2] << 16 | g[I + 3] << 24) >>> 0;
}
function ti(g, I) {
  return (g[I] << 24 | g[I + 1] << 16 | g[I + 2] << 8 | g[I + 3]) >>> 0;
}
function gi(g) {
  throw new Error('Could not dynamically require "' + g + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Vx = Xx;
function Xx(g) {
  try {
    if (typeof gi != "function")
      return null;
    var I = gi(g);
    return I && (I.length || Object.keys(I).length) ? I : null;
  } catch {
    return null;
  }
}
var eB = {};
(function(g) {
  var I = g;
  I.length = function(t) {
    for (var A = 0, e = 0, o = 0; o < t.length; ++o)
      e = t.charCodeAt(o), e < 128 ? A += 1 : e < 2048 ? A += 2 : (e & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 ? (++o, A += 4) : A += 3;
    return A;
  }, I.read = function(t, A, e) {
    var o = e - A;
    if (o < 1)
      return "";
    for (var i = null, C = [], B = 0, n; A < e; )
      n = t[A++], n < 128 ? C[B++] = n : n > 191 && n < 224 ? C[B++] = (n & 31) << 6 | t[A++] & 63 : n > 239 && n < 365 ? (n = ((n & 7) << 18 | (t[A++] & 63) << 12 | (t[A++] & 63) << 6 | t[A++] & 63) - 65536, C[B++] = 55296 + (n >> 10), C[B++] = 56320 + (n & 1023)) : C[B++] = (n & 15) << 12 | (t[A++] & 63) << 6 | t[A++] & 63, B > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, C)), B = 0);
    return i ? (B && i.push(String.fromCharCode.apply(String, C.slice(0, B))), i.join("")) : String.fromCharCode.apply(String, C.slice(0, B));
  }, I.write = function(t, A, e) {
    for (var o = e, i, C, B = 0; B < t.length; ++B)
      i = t.charCodeAt(B), i < 128 ? A[e++] = i : i < 2048 ? (A[e++] = i >> 6 | 192, A[e++] = i & 63 | 128) : (i & 64512) === 55296 && ((C = t.charCodeAt(B + 1)) & 64512) === 56320 ? (i = 65536 + ((i & 1023) << 10) + (C & 1023), ++B, A[e++] = i >> 18 | 240, A[e++] = i >> 12 & 63 | 128, A[e++] = i >> 6 & 63 | 128, A[e++] = i & 63 | 128) : (A[e++] = i >> 12 | 224, A[e++] = i >> 6 & 63 | 128, A[e++] = i & 63 | 128);
    return e - o;
  };
})(eB);
var zx = _x;
function _x(g, I, t) {
  var A = t || 8192, e = A >>> 1, o = null, i = A;
  return function(C) {
    if (C < 1 || C > e)
      return g(C);
    i + C > A && (o = g(A), i = 0);
    var B = I.call(o, i, i += C);
    return i & 7 && (i = (i | 7) + 1), B;
  };
}
var N0, Ii;
function $x() {
  if (Ii)
    return N0;
  Ii = 1, N0 = I;
  var g = Ge();
  function I(o, i) {
    this.lo = o >>> 0, this.hi = i >>> 0;
  }
  var t = I.zero = new I(0, 0);
  t.toNumber = function() {
    return 0;
  }, t.zzEncode = t.zzDecode = function() {
    return this;
  }, t.length = function() {
    return 1;
  };
  var A = I.zeroHash = "\0\0\0\0\0\0\0\0";
  I.fromNumber = function(o) {
    if (o === 0)
      return t;
    var i = o < 0;
    i && (o = -o);
    var C = o >>> 0, B = (o - C) / 4294967296 >>> 0;
    return i && (B = ~B >>> 0, C = ~C >>> 0, ++C > 4294967295 && (C = 0, ++B > 4294967295 && (B = 0))), new I(C, B);
  }, I.from = function(o) {
    if (typeof o == "number")
      return I.fromNumber(o);
    if (g.isString(o))
      if (g.Long)
        o = g.Long.fromString(o);
      else
        return I.fromNumber(parseInt(o, 10));
    return o.low || o.high ? new I(o.low >>> 0, o.high >>> 0) : t;
  }, I.prototype.toNumber = function(o) {
    if (!o && this.hi >>> 31) {
      var i = ~this.lo + 1 >>> 0, C = ~this.hi >>> 0;
      return i || (C = C + 1 >>> 0), -(i + C * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  }, I.prototype.toLong = function(o) {
    return g.Long ? new g.Long(this.lo | 0, this.hi | 0, !!o) : { low: this.lo | 0, high: this.hi | 0, unsigned: !!o };
  };
  var e = String.prototype.charCodeAt;
  return I.fromHash = function(o) {
    return o === A ? t : new I(
      (e.call(o, 0) | e.call(o, 1) << 8 | e.call(o, 2) << 16 | e.call(o, 3) << 24) >>> 0,
      (e.call(o, 4) | e.call(o, 5) << 8 | e.call(o, 6) << 16 | e.call(o, 7) << 24) >>> 0
    );
  }, I.prototype.toHash = function() {
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
  }, I.prototype.zzEncode = function() {
    var o = this.hi >> 31;
    return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ o) >>> 0, this.lo = (this.lo << 1 ^ o) >>> 0, this;
  }, I.prototype.zzDecode = function() {
    var o = -(this.lo & 1);
    return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ o) >>> 0, this.hi = (this.hi >>> 1 ^ o) >>> 0, this;
  }, I.prototype.length = function() {
    var o = this.lo, i = (this.lo >>> 28 | this.hi << 4) >>> 0, C = this.hi >>> 24;
    return C === 0 ? i === 0 ? o < 16384 ? o < 128 ? 1 : 2 : o < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : C < 128 ? 9 : 10;
  }, N0;
}
var oi;
function Ge() {
  return oi || (oi = 1, function(g) {
    var I = g;
    I.asPromise = Tx, I.base64 = AB, I.EventEmitter = jx, I.float = Px, I.inquire = Vx, I.utf8 = eB, I.pool = zx, I.LongBits = $x(), I.isNode = !!(typeof ne < "u" && ne && ne.process && ne.process.versions && ne.process.versions.node), I.global = I.isNode && ne || typeof window < "u" && window || typeof self < "u" && self || ne, I.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    ), I.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    ), I.isInteger = Number.isInteger || /* istanbul ignore next */
    function(e) {
      return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
    }, I.isString = function(e) {
      return typeof e == "string" || e instanceof String;
    }, I.isObject = function(e) {
      return e && typeof e == "object";
    }, I.isset = /**
    * Checks if a property on a message is considered to be present.
    * @param {Object} obj Plain object or message instance
    * @param {string} prop Property name
    * @returns {boolean} `true` if considered to be present, otherwise `false`
    */
    I.isSet = function(e, o) {
      var i = e[o];
      return i != null && e.hasOwnProperty(o) ? typeof i != "object" || (Array.isArray(i) ? i.length : Object.keys(i).length) > 0 : !1;
    }, I.Buffer = function() {
      try {
        var e = I.inquire("buffer").Buffer;
        return e.prototype.utf8Write ? e : (
          /* istanbul ignore next */
          null
        );
      } catch {
        return null;
      }
    }(), I._Buffer_from = null, I._Buffer_allocUnsafe = null, I.newBuffer = function(e) {
      return typeof e == "number" ? I.Buffer ? I._Buffer_allocUnsafe(e) : new I.Array(e) : I.Buffer ? I._Buffer_from(e) : typeof Uint8Array > "u" ? e : new Uint8Array(e);
    }, I.Array = typeof Uint8Array < "u" ? Uint8Array : Array, I.Long = /* istanbul ignore next */
    I.global.dcodeIO && /* istanbul ignore next */
    I.global.dcodeIO.Long || /* istanbul ignore next */
    I.global.Long || I.inquire("long"), I.key2Re = /^true|false|0|1$/, I.key32Re = /^-?(?:0|[1-9][0-9]*)$/, I.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, I.longToHash = function(e) {
      return e ? I.LongBits.from(e).toHash() : I.LongBits.zeroHash;
    }, I.longFromHash = function(e, o) {
      var i = I.LongBits.fromHash(e);
      return I.Long ? I.Long.fromBits(i.lo, i.hi, o) : i.toNumber(!!o);
    };
    function t(e, o, i) {
      for (var C = Object.keys(o), B = 0; B < C.length; ++B)
        (e[C[B]] === void 0 || !i) && (e[C[B]] = o[C[B]]);
      return e;
    }
    I.merge = t, I.lcFirst = function(e) {
      return e.charAt(0).toLowerCase() + e.substring(1);
    };
    function A(e) {
      function o(i, C) {
        if (!(this instanceof o))
          return new o(i, C);
        Object.defineProperty(this, "message", { get: function() {
          return i;
        } }), Error.captureStackTrace ? Error.captureStackTrace(this, o) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), C && t(this, C);
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
            return e;
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
    I.newError = A, I.ProtocolError = A("ProtocolError"), I.oneOfGetter = function(e) {
      for (var o = {}, i = 0; i < e.length; ++i)
        o[e[i]] = 1;
      return function() {
        for (var C = Object.keys(this), B = C.length - 1; B > -1; --B)
          if (o[C[B]] === 1 && this[C[B]] !== void 0 && this[C[B]] !== null)
            return C[B];
      };
    }, I.oneOfSetter = function(e) {
      return function(o) {
        for (var i = 0; i < e.length; ++i)
          e[i] !== o && delete this[e[i]];
      };
    }, I.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: !0
    }, I._configure = function() {
      var e = I.Buffer;
      if (!e) {
        I._Buffer_from = I._Buffer_allocUnsafe = null;
        return;
      }
      I._Buffer_from = e.from !== Uint8Array.from && e.from || /* istanbul ignore next */
      function(o, i) {
        return new e(o, i);
      }, I._Buffer_allocUnsafe = e.allocUnsafe || /* istanbul ignore next */
      function(o) {
        return new e(o);
      };
    };
  }(zo)), zo;
}
var tB = L, SA = Ge(), rI, Q0 = SA.LongBits, ii = SA.base64, Ci = SA.utf8;
function jt(g, I, t) {
  this.fn = g, this.len = I, this.next = void 0, this.val = t;
}
function ZI() {
}
function Ar(g) {
  this.head = g.head, this.tail = g.tail, this.len = g.len, this.next = g.states;
}
function L() {
  this.len = 0, this.head = new jt(ZI, 0, 0), this.tail = this.head, this.states = null;
}
var gB = function() {
  return SA.Buffer ? function() {
    return (L.create = function() {
      return new rI();
    })();
  } : function() {
    return new L();
  };
};
L.create = gB();
L.alloc = function(g) {
  return new SA.Array(g);
};
SA.Array !== Array && (L.alloc = SA.pool(L.alloc, SA.Array.prototype.subarray));
L.prototype._push = function(g, I, t) {
  return this.tail = this.tail.next = new jt(g, I, t), this.len += I, this;
};
function jI(g, I, t) {
  I[t] = g & 255;
}
function er(g, I, t) {
  for (; g > 127; )
    I[t++] = g & 127 | 128, g >>>= 7;
  I[t] = g;
}
function PI(g, I) {
  this.len = g, this.next = void 0, this.val = I;
}
PI.prototype = Object.create(jt.prototype);
PI.prototype.fn = er;
L.prototype.uint32 = function(g) {
  return this.len += (this.tail = this.tail.next = new PI(
    (g = g >>> 0) < 128 ? 1 : g < 16384 ? 2 : g < 2097152 ? 3 : g < 268435456 ? 4 : 5,
    g
  )).len, this;
};
L.prototype.int32 = function(g) {
  return g < 0 ? this._push(VI, 10, Q0.fromNumber(g)) : this.uint32(g);
};
L.prototype.sint32 = function(g) {
  return this.uint32((g << 1 ^ g >> 31) >>> 0);
};
function VI(g, I, t) {
  for (; g.hi; )
    I[t++] = g.lo & 127 | 128, g.lo = (g.lo >>> 7 | g.hi << 25) >>> 0, g.hi >>>= 7;
  for (; g.lo > 127; )
    I[t++] = g.lo & 127 | 128, g.lo = g.lo >>> 7;
  I[t++] = g.lo;
}
L.prototype.uint64 = function(g) {
  var I = Q0.from(g);
  return this._push(VI, I.length(), I);
};
L.prototype.int64 = L.prototype.uint64;
L.prototype.sint64 = function(g) {
  var I = Q0.from(g).zzEncode();
  return this._push(VI, I.length(), I);
};
L.prototype.bool = function(g) {
  return this._push(jI, 1, g ? 1 : 0);
};
function EI(g, I, t) {
  I[t] = g & 255, I[t + 1] = g >>> 8 & 255, I[t + 2] = g >>> 16 & 255, I[t + 3] = g >>> 24;
}
L.prototype.fixed32 = function(g) {
  return this._push(EI, 4, g >>> 0);
};
L.prototype.sfixed32 = L.prototype.fixed32;
L.prototype.fixed64 = function(g) {
  var I = Q0.from(g);
  return this._push(EI, 4, I.lo)._push(EI, 4, I.hi);
};
L.prototype.sfixed64 = L.prototype.fixed64;
L.prototype.float = function(g) {
  return this._push(SA.float.writeFloatLE, 4, g);
};
L.prototype.double = function(g) {
  return this._push(SA.float.writeDoubleLE, 8, g);
};
var tr = SA.Array.prototype.set ? function(g, I, t) {
  I.set(g, t);
} : function(g, I, t) {
  for (var A = 0; A < g.length; ++A)
    I[t + A] = g[A];
};
L.prototype.bytes = function(g) {
  var I = g.length >>> 0;
  if (!I)
    return this._push(jI, 1, 0);
  if (SA.isString(g)) {
    var t = L.alloc(I = ii.length(g));
    ii.decode(g, t, 0), g = t;
  }
  return this.uint32(I)._push(tr, I, g);
};
L.prototype.string = function(g) {
  var I = Ci.length(g);
  return I ? this.uint32(I)._push(Ci.write, I, g) : this._push(jI, 1, 0);
};
L.prototype.fork = function() {
  return this.states = new Ar(this), this.head = this.tail = new jt(ZI, 0, 0), this.len = 0, this;
};
L.prototype.reset = function() {
  return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new jt(ZI, 0, 0), this.len = 0), this;
};
L.prototype.ldelim = function() {
  var g = this.head, I = this.tail, t = this.len;
  return this.reset().uint32(t), t && (this.tail.next = g.next, this.tail = I, this.len += t), this;
};
L.prototype.finish = function() {
  for (var g = this.head.next, I = this.constructor.alloc(this.len), t = 0; g; )
    g.fn(g.val, I, t), t += g.len, g = g.next;
  return I;
};
L._configure = function(g) {
  rI = g, L.create = gB(), rI._configure();
};
var gr = qA, IB = tB;
(qA.prototype = Object.create(IB.prototype)).constructor = qA;
var oe = Ge();
function qA() {
  IB.call(this);
}
qA._configure = function() {
  qA.alloc = oe._Buffer_allocUnsafe, qA.writeBytesBuffer = oe.Buffer && oe.Buffer.prototype instanceof Uint8Array && oe.Buffer.prototype.set.name === "set" ? function(g, I, t) {
    I.set(g, t);
  } : function(g, I, t) {
    if (g.copy)
      g.copy(I, t, 0, g.length);
    else
      for (var A = 0; A < g.length; )
        I[t++] = g[A++];
  };
};
qA.prototype.bytes = function(g) {
  oe.isString(g) && (g = oe._Buffer_from(g, "base64"));
  var I = g.length >>> 0;
  return this.uint32(I), I && this._push(qA.writeBytesBuffer, I, g), this;
};
function Ir(g, I, t) {
  g.length < 40 ? oe.utf8.write(g, I, t) : I.utf8Write ? I.utf8Write(g, t) : I.write(g, t);
}
qA.prototype.string = function(g) {
  var I = oe.Buffer.byteLength(g);
  return this.uint32(I), I && this._push(Ir, I, g), this;
};
qA._configure();
var oB = $, TA = Ge(), sI, iB = TA.LongBits, or = TA.utf8;
function WA(g, I) {
  return RangeError("index out of range: " + g.pos + " + " + (I || 1) + " > " + g.len);
}
function $(g) {
  this.buf = g, this.pos = 0, this.len = g.length;
}
var Bi = typeof Uint8Array < "u" ? function(g) {
  if (g instanceof Uint8Array || Array.isArray(g))
    return new $(g);
  throw Error("illegal buffer");
} : function(g) {
  if (Array.isArray(g))
    return new $(g);
  throw Error("illegal buffer");
}, CB = function() {
  return TA.Buffer ? function(g) {
    return ($.create = function(I) {
      return TA.Buffer.isBuffer(I) ? new sI(I) : Bi(I);
    })(g);
  } : Bi;
};
$.create = CB();
$.prototype._slice = TA.Array.prototype.subarray || /* istanbul ignore next */
TA.Array.prototype.slice;
$.prototype.uint32 = /* @__PURE__ */ function() {
  var g = 4294967295;
  return function() {
    if (g = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (g = (g | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (g = (g | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128))
      return g;
    if ((this.pos += 5) > this.len)
      throw this.pos = this.len, WA(this, 10);
    return g;
  };
}();
$.prototype.int32 = function() {
  return this.uint32() | 0;
};
$.prototype.sint32 = function() {
  var g = this.uint32();
  return g >>> 1 ^ -(g & 1) | 0;
};
function b0() {
  var g = new iB(0, 0), I = 0;
  if (this.len - this.pos > 4) {
    for (; I < 4; ++I)
      if (g.lo = (g.lo | (this.buf[this.pos] & 127) << I * 7) >>> 0, this.buf[this.pos++] < 128)
        return g;
    if (g.lo = (g.lo | (this.buf[this.pos] & 127) << 28) >>> 0, g.hi = (g.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128)
      return g;
    I = 0;
  } else {
    for (; I < 3; ++I) {
      if (this.pos >= this.len)
        throw WA(this);
      if (g.lo = (g.lo | (this.buf[this.pos] & 127) << I * 7) >>> 0, this.buf[this.pos++] < 128)
        return g;
    }
    return g.lo = (g.lo | (this.buf[this.pos++] & 127) << I * 7) >>> 0, g;
  }
  if (this.len - this.pos > 4) {
    for (; I < 5; ++I)
      if (g.hi = (g.hi | (this.buf[this.pos] & 127) << I * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return g;
  } else
    for (; I < 5; ++I) {
      if (this.pos >= this.len)
        throw WA(this);
      if (g.hi = (g.hi | (this.buf[this.pos] & 127) << I * 7 + 3) >>> 0, this.buf[this.pos++] < 128)
        return g;
    }
  throw Error("invalid varint encoding");
}
$.prototype.bool = function() {
  return this.uint32() !== 0;
};
function Jg(g, I) {
  return (g[I - 4] | g[I - 3] << 8 | g[I - 2] << 16 | g[I - 1] << 24) >>> 0;
}
$.prototype.fixed32 = function() {
  if (this.pos + 4 > this.len)
    throw WA(this, 4);
  return Jg(this.buf, this.pos += 4);
};
$.prototype.sfixed32 = function() {
  if (this.pos + 4 > this.len)
    throw WA(this, 4);
  return Jg(this.buf, this.pos += 4) | 0;
};
function ni() {
  if (this.pos + 8 > this.len)
    throw WA(this, 8);
  return new iB(Jg(this.buf, this.pos += 4), Jg(this.buf, this.pos += 4));
}
$.prototype.float = function() {
  if (this.pos + 4 > this.len)
    throw WA(this, 4);
  var g = TA.float.readFloatLE(this.buf, this.pos);
  return this.pos += 4, g;
};
$.prototype.double = function() {
  if (this.pos + 8 > this.len)
    throw WA(this, 4);
  var g = TA.float.readDoubleLE(this.buf, this.pos);
  return this.pos += 8, g;
};
$.prototype.bytes = function() {
  var g = this.uint32(), I = this.pos, t = this.pos + g;
  if (t > this.len)
    throw WA(this, g);
  return this.pos += g, Array.isArray(this.buf) ? this.buf.slice(I, t) : I === t ? new this.buf.constructor(0) : this._slice.call(this.buf, I, t);
};
$.prototype.string = function() {
  var g = this.bytes();
  return or.read(g, 0, g.length);
};
$.prototype.skip = function(g) {
  if (typeof g == "number") {
    if (this.pos + g > this.len)
      throw WA(this, g);
    this.pos += g;
  } else
    do
      if (this.pos >= this.len)
        throw WA(this);
    while (this.buf[this.pos++] & 128);
  return this;
};
$.prototype.skipType = function(g) {
  switch (g) {
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
      for (; (g = this.uint32() & 7) !== 4; )
        this.skipType(g);
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + g + " at offset " + this.pos);
  }
  return this;
};
$._configure = function(g) {
  sI = g, $.create = CB(), sI._configure();
  var I = TA.Long ? "toLong" : (
    /* istanbul ignore next */
    "toNumber"
  );
  TA.merge($.prototype, {
    int64: function() {
      return b0.call(this)[I](!1);
    },
    uint64: function() {
      return b0.call(this)[I](!0);
    },
    sint64: function() {
      return b0.call(this).zzDecode()[I](!1);
    },
    fixed64: function() {
      return ni.call(this)[I](!0);
    },
    sfixed64: function() {
      return ni.call(this)[I](!1);
    }
  });
};
var ir = pe, BB = oB;
(pe.prototype = Object.create(BB.prototype)).constructor = pe;
var Qi = Ge();
function pe(g) {
  BB.call(this, g);
}
pe._configure = function() {
  Qi.Buffer && (pe.prototype._slice = Qi.Buffer.prototype.slice);
};
pe.prototype.string = function() {
  var g = this.uint32();
  return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + g, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + g, this.len));
};
pe._configure();
var nB = {}, Cr = wt, XI = Ge();
(wt.prototype = Object.create(XI.EventEmitter.prototype)).constructor = wt;
function wt(g, I, t) {
  if (typeof g != "function")
    throw TypeError("rpcImpl must be a function");
  XI.EventEmitter.call(this), this.rpcImpl = g, this.requestDelimited = !!I, this.responseDelimited = !!t;
}
wt.prototype.rpcCall = function g(I, t, A, e, o) {
  if (!e)
    throw TypeError("request must be specified");
  var i = this;
  if (!o)
    return XI.asPromise(g, i, I, t, A, e);
  if (!i.rpcImpl) {
    setTimeout(function() {
      o(Error("already ended"));
    }, 0);
    return;
  }
  try {
    return i.rpcImpl(
      I,
      t[i.requestDelimited ? "encodeDelimited" : "encode"](e).finish(),
      function(C, B) {
        if (C)
          return i.emit("error", C, I), o(C);
        if (B === null) {
          i.end(
            /* endedByRPC */
            !0
          );
          return;
        }
        if (!(B instanceof A))
          try {
            B = A[i.responseDelimited ? "decodeDelimited" : "decode"](B);
          } catch (n) {
            return i.emit("error", n, I), o(n);
          }
        return i.emit("data", B, I), o(null, B);
      }
    );
  } catch (C) {
    i.emit("error", C, I), setTimeout(function() {
      o(C);
    }, 0);
    return;
  }
};
wt.prototype.end = function(g) {
  return this.rpcImpl && (g || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
};
(function(g) {
  var I = g;
  I.Service = Cr;
})(nB);
var Br = {};
(function(g) {
  var I = g;
  I.build = "minimal", I.Writer = tB, I.BufferWriter = gr, I.Reader = oB, I.BufferReader = ir, I.util = Ge(), I.rpc = nB, I.roots = Br, I.configure = t;
  function t() {
    I.util._configure(), I.Writer._configure(I.BufferWriter), I.Reader._configure(I.BufferReader);
  }
  t();
})($C);
var H = $C;
const f = H.Reader, P = H.Writer, l = H.util, c = H.roots.default || (H.roots.default = {}), Pe = c.dot = (() => {
  const g = {};
  return g.Content = function() {
    function I(t) {
      if (t)
        for (let A = Object.keys(t), e = 0; e < A.length; ++e)
          t[A[e]] != null && (this[A[e]] = t[A[e]]);
    }
    return I.prototype.token = l.newBuffer([]), I.prototype.iv = l.newBuffer([]), I.prototype.schemaVersion = 0, I.prototype.bytes = l.newBuffer([]), I.create = function(t) {
      return new I(t);
    }, I.encode = function(t, A) {
      return A || (A = P.create()), t.token != null && Object.hasOwnProperty.call(t, "token") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.token), t.iv != null && Object.hasOwnProperty.call(t, "iv") && A.uint32(
        /* id 2, wireType 2 =*/
        18
      ).bytes(t.iv), t.schemaVersion != null && Object.hasOwnProperty.call(t, "schemaVersion") && A.uint32(
        /* id 3, wireType 0 =*/
        24
      ).int32(t.schemaVersion), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && A.uint32(
        /* id 4, wireType 2 =*/
        34
      ).bytes(t.bytes), A;
    }, I.encodeDelimited = function(t, A) {
      return this.encode(t, A).ldelim();
    }, I.decode = function(t, A) {
      t instanceof f || (t = f.create(t));
      let e = A === void 0 ? t.len : t.pos + A, o = new c.dot.Content();
      for (; t.pos < e; ) {
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
    }, I.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, I.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.token != null && t.hasOwnProperty("token") && !(t.token && typeof t.token.length == "number" || l.isString(t.token)) ? "token: buffer expected" : t.iv != null && t.hasOwnProperty("iv") && !(t.iv && typeof t.iv.length == "number" || l.isString(t.iv)) ? "iv: buffer expected" : t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && !l.isInteger(t.schemaVersion) ? "schemaVersion: integer expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, I.fromObject = function(t) {
      if (t instanceof c.dot.Content)
        return t;
      let A = new c.dot.Content();
      return t.token != null && (typeof t.token == "string" ? l.base64.decode(t.token, A.token = l.newBuffer(l.base64.length(t.token)), 0) : t.token.length >= 0 && (A.token = t.token)), t.iv != null && (typeof t.iv == "string" ? l.base64.decode(t.iv, A.iv = l.newBuffer(l.base64.length(t.iv)), 0) : t.iv.length >= 0 && (A.iv = t.iv)), t.schemaVersion != null && (A.schemaVersion = t.schemaVersion | 0), t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, A.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (A.bytes = t.bytes)), A;
    }, I.toObject = function(t, A) {
      A || (A = {});
      let e = {};
      return A.defaults && (A.bytes === String ? e.token = "" : (e.token = [], A.bytes !== Array && (e.token = l.newBuffer(e.token))), A.bytes === String ? e.iv = "" : (e.iv = [], A.bytes !== Array && (e.iv = l.newBuffer(e.iv))), e.schemaVersion = 0, A.bytes === String ? e.bytes = "" : (e.bytes = [], A.bytes !== Array && (e.bytes = l.newBuffer(e.bytes)))), t.token != null && t.hasOwnProperty("token") && (e.token = A.bytes === String ? l.base64.encode(t.token, 0, t.token.length) : A.bytes === Array ? Array.prototype.slice.call(t.token) : t.token), t.iv != null && t.hasOwnProperty("iv") && (e.iv = A.bytes === String ? l.base64.encode(t.iv, 0, t.iv.length) : A.bytes === Array ? Array.prototype.slice.call(t.iv) : t.iv), t.schemaVersion != null && t.hasOwnProperty("schemaVersion") && (e.schemaVersion = t.schemaVersion), t.bytes != null && t.hasOwnProperty("bytes") && (e.bytes = A.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), e;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Content";
    }, I;
  }(), g.v4 = function() {
    const I = {};
    return I.MagnifEyeLivenessContent = function() {
      function t(A) {
        if (this.images = [], A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.images = l.emptyArray, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        if (e || (e = P.create()), A.images != null && A.images.length)
          for (let o = 0; o < A.images.length; ++o)
            c.dot.Image.encode(A.images[o], e.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.MagnifEyeLivenessContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.images && i.images.length || (i.images = []), i.images.push(c.dot.Image.decode(A, A.uint32()));
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.images != null && A.hasOwnProperty("images")) {
          if (!Array.isArray(A.images))
            return "images: array expected";
          for (let e = 0; e < A.images.length; ++e) {
            let o = c.dot.Image.verify(A.images[e]);
            if (o)
              return "images." + o;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.MagnifEyeLivenessContent)
          return A;
        let e = new c.dot.v4.MagnifEyeLivenessContent();
        if (A.images) {
          if (!Array.isArray(A.images))
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: array expected");
          e.images = [];
          for (let o = 0; o < A.images.length; ++o) {
            if (typeof A.images[o] != "object")
              throw TypeError(".dot.v4.MagnifEyeLivenessContent.images: object expected");
            e.images[o] = c.dot.Image.fromObject(A.images[o]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.MagnifEyeLivenessContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        if ((e.arrays || e.defaults) && (o.images = []), e.defaults && (o.metadata = null), A.images && A.images.length) {
          o.images = [];
          for (let i = 0; i < A.images.length; ++i)
            o.images[i] = c.dot.Image.toObject(A.images[i], e);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.MagnifEyeLivenessContent";
      }, t;
    }(), I.Metadata = function() {
      function t(e) {
        if (e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.platform = 0, t.prototype.sessionToken = null, t.prototype.componentVersion = "", t.prototype.web = null, t.prototype.android = null, t.prototype.ios = null;
      let A;
      return Object.defineProperty(t.prototype, "_sessionToken", {
        get: l.oneOfGetter(A = ["sessionToken"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "metadata", {
        get: l.oneOfGetter(A = ["web", "android", "ios"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        return o || (o = P.create()), e.platform != null && Object.hasOwnProperty.call(e, "platform") && o.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(e.platform), e.web != null && Object.hasOwnProperty.call(e, "web") && c.dot.v4.WebMetadata.encode(e.web, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.android != null && Object.hasOwnProperty.call(e, "android") && c.dot.v4.AndroidMetadata.encode(e.android, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.ios != null && Object.hasOwnProperty.call(e, "ios") && c.dot.v4.IosMetadata.encode(e.ios, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), e.sessionToken != null && Object.hasOwnProperty.call(e, "sessionToken") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(e.sessionToken), e.componentVersion != null && Object.hasOwnProperty.call(e, "componentVersion") && o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).string(e.componentVersion), o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.Metadata();
        for (; e.pos < i; ) {
          let B = e.uint32();
          switch (B >>> 3) {
            case 1: {
              C.platform = e.int32();
              break;
            }
            case 5: {
              C.sessionToken = e.string();
              break;
            }
            case 6: {
              C.componentVersion = e.string();
              break;
            }
            case 2: {
              C.web = c.dot.v4.WebMetadata.decode(e, e.uint32());
              break;
            }
            case 3: {
              C.android = c.dot.v4.AndroidMetadata.decode(e, e.uint32());
              break;
            }
            case 4: {
              C.ios = c.dot.v4.IosMetadata.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(B & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        let o = {};
        if (e.platform != null && e.hasOwnProperty("platform"))
          switch (e.platform) {
            default:
              return "platform: enum value expected";
            case 0:
            case 1:
            case 2:
              break;
          }
        if (e.sessionToken != null && e.hasOwnProperty("sessionToken") && (o._sessionToken = 1, !l.isString(e.sessionToken)))
          return "sessionToken: string expected";
        if (e.componentVersion != null && e.hasOwnProperty("componentVersion") && !l.isString(e.componentVersion))
          return "componentVersion: string expected";
        if (e.web != null && e.hasOwnProperty("web")) {
          o.metadata = 1;
          {
            let i = c.dot.v4.WebMetadata.verify(e.web);
            if (i)
              return "web." + i;
          }
        }
        if (e.android != null && e.hasOwnProperty("android")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let i = c.dot.v4.AndroidMetadata.verify(e.android);
            if (i)
              return "android." + i;
          }
        }
        if (e.ios != null && e.hasOwnProperty("ios")) {
          if (o.metadata === 1)
            return "metadata: multiple values";
          o.metadata = 1;
          {
            let i = c.dot.v4.IosMetadata.verify(e.ios);
            if (i)
              return "ios." + i;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Metadata)
          return e;
        let o = new c.dot.v4.Metadata();
        switch (e.platform) {
          default:
            if (typeof e.platform == "number") {
              o.platform = e.platform;
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
        if (e.sessionToken != null && (o.sessionToken = String(e.sessionToken)), e.componentVersion != null && (o.componentVersion = String(e.componentVersion)), e.web != null) {
          if (typeof e.web != "object")
            throw TypeError(".dot.v4.Metadata.web: object expected");
          o.web = c.dot.v4.WebMetadata.fromObject(e.web);
        }
        if (e.android != null) {
          if (typeof e.android != "object")
            throw TypeError(".dot.v4.Metadata.android: object expected");
          o.android = c.dot.v4.AndroidMetadata.fromObject(e.android);
        }
        if (e.ios != null) {
          if (typeof e.ios != "object")
            throw TypeError(".dot.v4.Metadata.ios: object expected");
          o.ios = c.dot.v4.IosMetadata.fromObject(e.ios);
        }
        return o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        return o.defaults && (i.platform = o.enums === String ? "WEB" : 0, i.componentVersion = ""), e.platform != null && e.hasOwnProperty("platform") && (i.platform = o.enums === String ? c.dot.Platform[e.platform] === void 0 ? e.platform : c.dot.Platform[e.platform] : e.platform), e.web != null && e.hasOwnProperty("web") && (i.web = c.dot.v4.WebMetadata.toObject(e.web, o), o.oneofs && (i.metadata = "web")), e.android != null && e.hasOwnProperty("android") && (i.android = c.dot.v4.AndroidMetadata.toObject(e.android, o), o.oneofs && (i.metadata = "android")), e.ios != null && e.hasOwnProperty("ios") && (i.ios = c.dot.v4.IosMetadata.toObject(e.ios, o), o.oneofs && (i.metadata = "ios")), e.sessionToken != null && e.hasOwnProperty("sessionToken") && (i.sessionToken = e.sessionToken, o.oneofs && (i._sessionToken = "sessionToken")), e.componentVersion != null && e.hasOwnProperty("componentVersion") && (i.componentVersion = e.componentVersion), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Metadata";
      }, t;
    }(), I.AndroidMetadata = function() {
      function t(e) {
        if (this.supportedAbis = [], this.digests = [], this.digestsWithTimestamp = [], this.dynamicCameraFrameProperties = {}, e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.supportedAbis = l.emptyArray, t.prototype.device = null, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.dynamicCameraFrameProperties = l.emptyObject;
      let A;
      return Object.defineProperty(t.prototype, "_device", {
        get: l.oneOfGetter(A = ["device"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        if (o || (o = P.create()), e.supportedAbis != null && e.supportedAbis.length)
          for (let i = 0; i < e.supportedAbis.length; ++i)
            o.uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(e.supportedAbis[i]);
        if (e.device != null && Object.hasOwnProperty.call(e, "device") && o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).string(e.device), e.digests != null && e.digests.length)
          for (let i = 0; i < e.digests.length; ++i)
            o.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(e.digests[i]);
        if (e.dynamicCameraFrameProperties != null && Object.hasOwnProperty.call(e, "dynamicCameraFrameProperties"))
          for (let i = Object.keys(e.dynamicCameraFrameProperties), C = 0; C < i.length; ++C)
            o.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(i[C]), c.dot.Int32List.encode(e.dynamicCameraFrameProperties[i[C]], o.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim().ldelim();
        if (e.digestsWithTimestamp != null && e.digestsWithTimestamp.length)
          for (let i = 0; i < e.digestsWithTimestamp.length; ++i)
            c.dot.DigestWithTimestamp.encode(e.digestsWithTimestamp[i], o.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.AndroidMetadata(), B, n;
        for (; e.pos < i; ) {
          let a = e.uint32();
          switch (a >>> 3) {
            case 1: {
              C.supportedAbis && C.supportedAbis.length || (C.supportedAbis = []), C.supportedAbis.push(e.string());
              break;
            }
            case 2: {
              C.device = e.string();
              break;
            }
            case 3: {
              C.digests && C.digests.length || (C.digests = []), C.digests.push(e.bytes());
              break;
            }
            case 5: {
              C.digestsWithTimestamp && C.digestsWithTimestamp.length || (C.digestsWithTimestamp = []), C.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(e, e.uint32()));
              break;
            }
            case 4: {
              C.dynamicCameraFrameProperties === l.emptyObject && (C.dynamicCameraFrameProperties = {});
              let Q = e.uint32() + e.pos;
              for (B = "", n = null; e.pos < Q; ) {
                let E = e.uint32();
                switch (E >>> 3) {
                  case 1:
                    B = e.string();
                    break;
                  case 2:
                    n = c.dot.Int32List.decode(e, e.uint32());
                    break;
                  default:
                    e.skipType(E & 7);
                    break;
                }
              }
              C.dynamicCameraFrameProperties[B] = n;
              break;
            }
            default:
              e.skipType(a & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.supportedAbis != null && e.hasOwnProperty("supportedAbis")) {
          if (!Array.isArray(e.supportedAbis))
            return "supportedAbis: array expected";
          for (let o = 0; o < e.supportedAbis.length; ++o)
            if (!l.isString(e.supportedAbis[o]))
              return "supportedAbis: string[] expected";
        }
        if (e.device != null && e.hasOwnProperty("device") && !l.isString(e.device))
          return "device: string expected";
        if (e.digests != null && e.hasOwnProperty("digests")) {
          if (!Array.isArray(e.digests))
            return "digests: array expected";
          for (let o = 0; o < e.digests.length; ++o)
            if (!(e.digests[o] && typeof e.digests[o].length == "number" || l.isString(e.digests[o])))
              return "digests: buffer[] expected";
        }
        if (e.digestsWithTimestamp != null && e.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(e.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let o = 0; o < e.digestsWithTimestamp.length; ++o) {
            let i = c.dot.DigestWithTimestamp.verify(e.digestsWithTimestamp[o]);
            if (i)
              return "digestsWithTimestamp." + i;
          }
        }
        if (e.dynamicCameraFrameProperties != null && e.hasOwnProperty("dynamicCameraFrameProperties")) {
          if (!l.isObject(e.dynamicCameraFrameProperties))
            return "dynamicCameraFrameProperties: object expected";
          let o = Object.keys(e.dynamicCameraFrameProperties);
          for (let i = 0; i < o.length; ++i) {
            let C = c.dot.Int32List.verify(e.dynamicCameraFrameProperties[o[i]]);
            if (C)
              return "dynamicCameraFrameProperties." + C;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.AndroidMetadata)
          return e;
        let o = new c.dot.v4.AndroidMetadata();
        if (e.supportedAbis) {
          if (!Array.isArray(e.supportedAbis))
            throw TypeError(".dot.v4.AndroidMetadata.supportedAbis: array expected");
          o.supportedAbis = [];
          for (let i = 0; i < e.supportedAbis.length; ++i)
            o.supportedAbis[i] = String(e.supportedAbis[i]);
        }
        if (e.device != null && (o.device = String(e.device)), e.digests) {
          if (!Array.isArray(e.digests))
            throw TypeError(".dot.v4.AndroidMetadata.digests: array expected");
          o.digests = [];
          for (let i = 0; i < e.digests.length; ++i)
            typeof e.digests[i] == "string" ? l.base64.decode(e.digests[i], o.digests[i] = l.newBuffer(l.base64.length(e.digests[i])), 0) : e.digests[i].length >= 0 && (o.digests[i] = e.digests[i]);
        }
        if (e.digestsWithTimestamp) {
          if (!Array.isArray(e.digestsWithTimestamp))
            throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: array expected");
          o.digestsWithTimestamp = [];
          for (let i = 0; i < e.digestsWithTimestamp.length; ++i) {
            if (typeof e.digestsWithTimestamp[i] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.digestsWithTimestamp: object expected");
            o.digestsWithTimestamp[i] = c.dot.DigestWithTimestamp.fromObject(e.digestsWithTimestamp[i]);
          }
        }
        if (e.dynamicCameraFrameProperties) {
          if (typeof e.dynamicCameraFrameProperties != "object")
            throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
          o.dynamicCameraFrameProperties = {};
          for (let i = Object.keys(e.dynamicCameraFrameProperties), C = 0; C < i.length; ++C) {
            if (typeof e.dynamicCameraFrameProperties[i[C]] != "object")
              throw TypeError(".dot.v4.AndroidMetadata.dynamicCameraFrameProperties: object expected");
            o.dynamicCameraFrameProperties[i[C]] = c.dot.Int32List.fromObject(e.dynamicCameraFrameProperties[i[C]]);
          }
        }
        return o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        if ((o.arrays || o.defaults) && (i.supportedAbis = [], i.digests = [], i.digestsWithTimestamp = []), (o.objects || o.defaults) && (i.dynamicCameraFrameProperties = {}), e.supportedAbis && e.supportedAbis.length) {
          i.supportedAbis = [];
          for (let B = 0; B < e.supportedAbis.length; ++B)
            i.supportedAbis[B] = e.supportedAbis[B];
        }
        if (e.device != null && e.hasOwnProperty("device") && (i.device = e.device, o.oneofs && (i._device = "device")), e.digests && e.digests.length) {
          i.digests = [];
          for (let B = 0; B < e.digests.length; ++B)
            i.digests[B] = o.bytes === String ? l.base64.encode(e.digests[B], 0, e.digests[B].length) : o.bytes === Array ? Array.prototype.slice.call(e.digests[B]) : e.digests[B];
        }
        let C;
        if (e.dynamicCameraFrameProperties && (C = Object.keys(e.dynamicCameraFrameProperties)).length) {
          i.dynamicCameraFrameProperties = {};
          for (let B = 0; B < C.length; ++B)
            i.dynamicCameraFrameProperties[C[B]] = c.dot.Int32List.toObject(e.dynamicCameraFrameProperties[C[B]], o);
        }
        if (e.digestsWithTimestamp && e.digestsWithTimestamp.length) {
          i.digestsWithTimestamp = [];
          for (let B = 0; B < e.digestsWithTimestamp.length; ++B)
            i.digestsWithTimestamp[B] = c.dot.DigestWithTimestamp.toObject(e.digestsWithTimestamp[B], o);
        }
        return i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.AndroidMetadata";
      }, t;
    }(), I.IosMetadata = function() {
      function t(A) {
        if (this.architectureInfo = {}, this.digests = [], this.digestsWithTimestamp = [], this.isoValues = [], A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.cameraModelId = "", t.prototype.architectureInfo = l.emptyObject, t.prototype.digests = l.emptyArray, t.prototype.digestsWithTimestamp = l.emptyArray, t.prototype.isoValues = l.emptyArray, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        if (e || (e = P.create()), A.cameraModelId != null && Object.hasOwnProperty.call(A, "cameraModelId") && e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.cameraModelId), A.architectureInfo != null && Object.hasOwnProperty.call(A, "architectureInfo"))
          for (let o = Object.keys(A.architectureInfo), i = 0; i < o.length; ++i)
            e.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork().uint32(
              /* id 1, wireType 2 =*/
              10
            ).string(o[i]).uint32(
              /* id 2, wireType 0 =*/
              16
            ).bool(A.architectureInfo[o[i]]).ldelim();
        if (A.digests != null && A.digests.length)
          for (let o = 0; o < A.digests.length; ++o)
            e.uint32(
              /* id 3, wireType 2 =*/
              26
            ).bytes(A.digests[o]);
        if (A.isoValues != null && A.isoValues.length) {
          e.uint32(
            /* id 4, wireType 2 =*/
            34
          ).fork();
          for (let o = 0; o < A.isoValues.length; ++o)
            e.int32(A.isoValues[o]);
          e.ldelim();
        }
        if (A.digestsWithTimestamp != null && A.digestsWithTimestamp.length)
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o)
            c.dot.DigestWithTimestamp.encode(A.digestsWithTimestamp[o], e.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.IosMetadata(), C, B;
        for (; A.pos < o; ) {
          let n = A.uint32();
          switch (n >>> 3) {
            case 1: {
              i.cameraModelId = A.string();
              break;
            }
            case 2: {
              i.architectureInfo === l.emptyObject && (i.architectureInfo = {});
              let a = A.uint32() + A.pos;
              for (C = "", B = !1; A.pos < a; ) {
                let Q = A.uint32();
                switch (Q >>> 3) {
                  case 1:
                    C = A.string();
                    break;
                  case 2:
                    B = A.bool();
                    break;
                  default:
                    A.skipType(Q & 7);
                    break;
                }
              }
              i.architectureInfo[C] = B;
              break;
            }
            case 3: {
              i.digests && i.digests.length || (i.digests = []), i.digests.push(A.bytes());
              break;
            }
            case 5: {
              i.digestsWithTimestamp && i.digestsWithTimestamp.length || (i.digestsWithTimestamp = []), i.digestsWithTimestamp.push(c.dot.DigestWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              if (i.isoValues && i.isoValues.length || (i.isoValues = []), (n & 7) === 2) {
                let a = A.uint32() + A.pos;
                for (; A.pos < a; )
                  i.isoValues.push(A.int32());
              } else
                i.isoValues.push(A.int32());
              break;
            }
            default:
              A.skipType(n & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && !l.isString(A.cameraModelId))
          return "cameraModelId: string expected";
        if (A.architectureInfo != null && A.hasOwnProperty("architectureInfo")) {
          if (!l.isObject(A.architectureInfo))
            return "architectureInfo: object expected";
          let e = Object.keys(A.architectureInfo);
          for (let o = 0; o < e.length; ++o)
            if (typeof A.architectureInfo[e[o]] != "boolean")
              return "architectureInfo: boolean{k:string} expected";
        }
        if (A.digests != null && A.hasOwnProperty("digests")) {
          if (!Array.isArray(A.digests))
            return "digests: array expected";
          for (let e = 0; e < A.digests.length; ++e)
            if (!(A.digests[e] && typeof A.digests[e].length == "number" || l.isString(A.digests[e])))
              return "digests: buffer[] expected";
        }
        if (A.digestsWithTimestamp != null && A.hasOwnProperty("digestsWithTimestamp")) {
          if (!Array.isArray(A.digestsWithTimestamp))
            return "digestsWithTimestamp: array expected";
          for (let e = 0; e < A.digestsWithTimestamp.length; ++e) {
            let o = c.dot.DigestWithTimestamp.verify(A.digestsWithTimestamp[e]);
            if (o)
              return "digestsWithTimestamp." + o;
          }
        }
        if (A.isoValues != null && A.hasOwnProperty("isoValues")) {
          if (!Array.isArray(A.isoValues))
            return "isoValues: array expected";
          for (let e = 0; e < A.isoValues.length; ++e)
            if (!l.isInteger(A.isoValues[e]))
              return "isoValues: integer[] expected";
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.IosMetadata)
          return A;
        let e = new c.dot.v4.IosMetadata();
        if (A.cameraModelId != null && (e.cameraModelId = String(A.cameraModelId)), A.architectureInfo) {
          if (typeof A.architectureInfo != "object")
            throw TypeError(".dot.v4.IosMetadata.architectureInfo: object expected");
          e.architectureInfo = {};
          for (let o = Object.keys(A.architectureInfo), i = 0; i < o.length; ++i)
            e.architectureInfo[o[i]] = !!A.architectureInfo[o[i]];
        }
        if (A.digests) {
          if (!Array.isArray(A.digests))
            throw TypeError(".dot.v4.IosMetadata.digests: array expected");
          e.digests = [];
          for (let o = 0; o < A.digests.length; ++o)
            typeof A.digests[o] == "string" ? l.base64.decode(A.digests[o], e.digests[o] = l.newBuffer(l.base64.length(A.digests[o])), 0) : A.digests[o].length >= 0 && (e.digests[o] = A.digests[o]);
        }
        if (A.digestsWithTimestamp) {
          if (!Array.isArray(A.digestsWithTimestamp))
            throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: array expected");
          e.digestsWithTimestamp = [];
          for (let o = 0; o < A.digestsWithTimestamp.length; ++o) {
            if (typeof A.digestsWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.IosMetadata.digestsWithTimestamp: object expected");
            e.digestsWithTimestamp[o] = c.dot.DigestWithTimestamp.fromObject(A.digestsWithTimestamp[o]);
          }
        }
        if (A.isoValues) {
          if (!Array.isArray(A.isoValues))
            throw TypeError(".dot.v4.IosMetadata.isoValues: array expected");
          e.isoValues = [];
          for (let o = 0; o < A.isoValues.length; ++o)
            e.isoValues[o] = A.isoValues[o] | 0;
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        (e.arrays || e.defaults) && (o.digests = [], o.isoValues = [], o.digestsWithTimestamp = []), (e.objects || e.defaults) && (o.architectureInfo = {}), e.defaults && (o.cameraModelId = ""), A.cameraModelId != null && A.hasOwnProperty("cameraModelId") && (o.cameraModelId = A.cameraModelId);
        let i;
        if (A.architectureInfo && (i = Object.keys(A.architectureInfo)).length) {
          o.architectureInfo = {};
          for (let C = 0; C < i.length; ++C)
            o.architectureInfo[i[C]] = A.architectureInfo[i[C]];
        }
        if (A.digests && A.digests.length) {
          o.digests = [];
          for (let C = 0; C < A.digests.length; ++C)
            o.digests[C] = e.bytes === String ? l.base64.encode(A.digests[C], 0, A.digests[C].length) : e.bytes === Array ? Array.prototype.slice.call(A.digests[C]) : A.digests[C];
        }
        if (A.isoValues && A.isoValues.length) {
          o.isoValues = [];
          for (let C = 0; C < A.isoValues.length; ++C)
            o.isoValues[C] = A.isoValues[C];
        }
        if (A.digestsWithTimestamp && A.digestsWithTimestamp.length) {
          o.digestsWithTimestamp = [];
          for (let C = 0; C < A.digestsWithTimestamp.length; ++C)
            o.digestsWithTimestamp[C] = c.dot.DigestWithTimestamp.toObject(A.digestsWithTimestamp[C], e);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.IosMetadata";
      }, t;
    }(), I.WebMetadata = function() {
      function t(A) {
        if (this.availableCameraProperties = [], this.hashedDetectedImages = [], this.hashedDetectedImagesWithTimestamp = [], this.detectionRecord = [], A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.currentCameraProperties = null, t.prototype.availableCameraProperties = l.emptyArray, t.prototype.hashedDetectedImages = l.emptyArray, t.prototype.hashedDetectedImagesWithTimestamp = l.emptyArray, t.prototype.detectionRecord = l.emptyArray, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        if (e || (e = P.create()), A.currentCameraProperties != null && Object.hasOwnProperty.call(A, "currentCameraProperties") && c.dot.v4.MediaTrackSettings.encode(A.currentCameraProperties, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.availableCameraProperties != null && A.availableCameraProperties.length)
          for (let o = 0; o < A.availableCameraProperties.length; ++o)
            c.dot.v4.CameraProperties.encode(A.availableCameraProperties[o], e.uint32(
              /* id 2, wireType 2 =*/
              18
            ).fork()).ldelim();
        if (A.hashedDetectedImages != null && A.hashedDetectedImages.length)
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            e.uint32(
              /* id 3, wireType 2 =*/
              26
            ).string(A.hashedDetectedImages[o]);
        if (A.detectionRecord != null && A.detectionRecord.length)
          for (let o = 0; o < A.detectionRecord.length; ++o)
            c.dot.v4.DetectedObject.encode(A.detectionRecord[o], e.uint32(
              /* id 4, wireType 2 =*/
              34
            ).fork()).ldelim();
        if (A.hashedDetectedImagesWithTimestamp != null && A.hashedDetectedImagesWithTimestamp.length)
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o)
            c.dot.v4.HashedDetectedImageWithTimestamp.encode(A.hashedDetectedImagesWithTimestamp[o], e.uint32(
              /* id 5, wireType 2 =*/
              42
            ).fork()).ldelim();
        return e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.WebMetadata();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.currentCameraProperties = c.dot.v4.MediaTrackSettings.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.availableCameraProperties && i.availableCameraProperties.length || (i.availableCameraProperties = []), i.availableCameraProperties.push(c.dot.v4.CameraProperties.decode(A, A.uint32()));
              break;
            }
            case 3: {
              i.hashedDetectedImages && i.hashedDetectedImages.length || (i.hashedDetectedImages = []), i.hashedDetectedImages.push(A.string());
              break;
            }
            case 5: {
              i.hashedDetectedImagesWithTimestamp && i.hashedDetectedImagesWithTimestamp.length || (i.hashedDetectedImagesWithTimestamp = []), i.hashedDetectedImagesWithTimestamp.push(c.dot.v4.HashedDetectedImageWithTimestamp.decode(A, A.uint32()));
              break;
            }
            case 4: {
              i.detectionRecord && i.detectionRecord.length || (i.detectionRecord = []), i.detectionRecord.push(c.dot.v4.DetectedObject.decode(A, A.uint32()));
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties")) {
          let e = c.dot.v4.MediaTrackSettings.verify(A.currentCameraProperties);
          if (e)
            return "currentCameraProperties." + e;
        }
        if (A.availableCameraProperties != null && A.hasOwnProperty("availableCameraProperties")) {
          if (!Array.isArray(A.availableCameraProperties))
            return "availableCameraProperties: array expected";
          for (let e = 0; e < A.availableCameraProperties.length; ++e) {
            let o = c.dot.v4.CameraProperties.verify(A.availableCameraProperties[e]);
            if (o)
              return "availableCameraProperties." + o;
          }
        }
        if (A.hashedDetectedImages != null && A.hasOwnProperty("hashedDetectedImages")) {
          if (!Array.isArray(A.hashedDetectedImages))
            return "hashedDetectedImages: array expected";
          for (let e = 0; e < A.hashedDetectedImages.length; ++e)
            if (!l.isString(A.hashedDetectedImages[e]))
              return "hashedDetectedImages: string[] expected";
        }
        if (A.hashedDetectedImagesWithTimestamp != null && A.hasOwnProperty("hashedDetectedImagesWithTimestamp")) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            return "hashedDetectedImagesWithTimestamp: array expected";
          for (let e = 0; e < A.hashedDetectedImagesWithTimestamp.length; ++e) {
            let o = c.dot.v4.HashedDetectedImageWithTimestamp.verify(A.hashedDetectedImagesWithTimestamp[e]);
            if (o)
              return "hashedDetectedImagesWithTimestamp." + o;
          }
        }
        if (A.detectionRecord != null && A.hasOwnProperty("detectionRecord")) {
          if (!Array.isArray(A.detectionRecord))
            return "detectionRecord: array expected";
          for (let e = 0; e < A.detectionRecord.length; ++e) {
            let o = c.dot.v4.DetectedObject.verify(A.detectionRecord[e]);
            if (o)
              return "detectionRecord." + o;
          }
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.WebMetadata)
          return A;
        let e = new c.dot.v4.WebMetadata();
        if (A.currentCameraProperties != null) {
          if (typeof A.currentCameraProperties != "object")
            throw TypeError(".dot.v4.WebMetadata.currentCameraProperties: object expected");
          e.currentCameraProperties = c.dot.v4.MediaTrackSettings.fromObject(A.currentCameraProperties);
        }
        if (A.availableCameraProperties) {
          if (!Array.isArray(A.availableCameraProperties))
            throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: array expected");
          e.availableCameraProperties = [];
          for (let o = 0; o < A.availableCameraProperties.length; ++o) {
            if (typeof A.availableCameraProperties[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.availableCameraProperties: object expected");
            e.availableCameraProperties[o] = c.dot.v4.CameraProperties.fromObject(A.availableCameraProperties[o]);
          }
        }
        if (A.hashedDetectedImages) {
          if (!Array.isArray(A.hashedDetectedImages))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImages: array expected");
          e.hashedDetectedImages = [];
          for (let o = 0; o < A.hashedDetectedImages.length; ++o)
            e.hashedDetectedImages[o] = String(A.hashedDetectedImages[o]);
        }
        if (A.hashedDetectedImagesWithTimestamp) {
          if (!Array.isArray(A.hashedDetectedImagesWithTimestamp))
            throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: array expected");
          e.hashedDetectedImagesWithTimestamp = [];
          for (let o = 0; o < A.hashedDetectedImagesWithTimestamp.length; ++o) {
            if (typeof A.hashedDetectedImagesWithTimestamp[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.hashedDetectedImagesWithTimestamp: object expected");
            e.hashedDetectedImagesWithTimestamp[o] = c.dot.v4.HashedDetectedImageWithTimestamp.fromObject(A.hashedDetectedImagesWithTimestamp[o]);
          }
        }
        if (A.detectionRecord) {
          if (!Array.isArray(A.detectionRecord))
            throw TypeError(".dot.v4.WebMetadata.detectionRecord: array expected");
          e.detectionRecord = [];
          for (let o = 0; o < A.detectionRecord.length; ++o) {
            if (typeof A.detectionRecord[o] != "object")
              throw TypeError(".dot.v4.WebMetadata.detectionRecord: object expected");
            e.detectionRecord[o] = c.dot.v4.DetectedObject.fromObject(A.detectionRecord[o]);
          }
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        if ((e.arrays || e.defaults) && (o.availableCameraProperties = [], o.hashedDetectedImages = [], o.detectionRecord = [], o.hashedDetectedImagesWithTimestamp = []), e.defaults && (o.currentCameraProperties = null), A.currentCameraProperties != null && A.hasOwnProperty("currentCameraProperties") && (o.currentCameraProperties = c.dot.v4.MediaTrackSettings.toObject(A.currentCameraProperties, e)), A.availableCameraProperties && A.availableCameraProperties.length) {
          o.availableCameraProperties = [];
          for (let i = 0; i < A.availableCameraProperties.length; ++i)
            o.availableCameraProperties[i] = c.dot.v4.CameraProperties.toObject(A.availableCameraProperties[i], e);
        }
        if (A.hashedDetectedImages && A.hashedDetectedImages.length) {
          o.hashedDetectedImages = [];
          for (let i = 0; i < A.hashedDetectedImages.length; ++i)
            o.hashedDetectedImages[i] = A.hashedDetectedImages[i];
        }
        if (A.detectionRecord && A.detectionRecord.length) {
          o.detectionRecord = [];
          for (let i = 0; i < A.detectionRecord.length; ++i)
            o.detectionRecord[i] = c.dot.v4.DetectedObject.toObject(A.detectionRecord[i], e);
        }
        if (A.hashedDetectedImagesWithTimestamp && A.hashedDetectedImagesWithTimestamp.length) {
          o.hashedDetectedImagesWithTimestamp = [];
          for (let i = 0; i < A.hashedDetectedImagesWithTimestamp.length; ++i)
            o.hashedDetectedImagesWithTimestamp[i] = c.dot.v4.HashedDetectedImageWithTimestamp.toObject(A.hashedDetectedImagesWithTimestamp[i], e);
        }
        return o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.WebMetadata";
      }, t;
    }(), I.HashedDetectedImageWithTimestamp = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.imageHash = "", t.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.imageHash != null && Object.hasOwnProperty.call(A, "imageHash") && e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).string(A.imageHash), A.timestampMillis != null && Object.hasOwnProperty.call(A, "timestampMillis") && e.uint32(
          /* id 2, wireType 0 =*/
          16
        ).uint64(A.timestampMillis), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.HashedDetectedImageWithTimestamp();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.imageHash = A.string();
              break;
            }
            case 2: {
              i.timestampMillis = A.uint64();
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.imageHash != null && A.hasOwnProperty("imageHash") && !l.isString(A.imageHash) ? "imageHash: string expected" : A.timestampMillis != null && A.hasOwnProperty("timestampMillis") && !l.isInteger(A.timestampMillis) && !(A.timestampMillis && l.isInteger(A.timestampMillis.low) && l.isInteger(A.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.HashedDetectedImageWithTimestamp)
          return A;
        let e = new c.dot.v4.HashedDetectedImageWithTimestamp();
        return A.imageHash != null && (e.imageHash = String(A.imageHash)), A.timestampMillis != null && (l.Long ? (e.timestampMillis = l.Long.fromValue(A.timestampMillis)).unsigned = !0 : typeof A.timestampMillis == "string" ? e.timestampMillis = parseInt(A.timestampMillis, 10) : typeof A.timestampMillis == "number" ? e.timestampMillis = A.timestampMillis : typeof A.timestampMillis == "object" && (e.timestampMillis = new l.LongBits(A.timestampMillis.low >>> 0, A.timestampMillis.high >>> 0).toNumber(!0))), e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        if (e.defaults)
          if (o.imageHash = "", l.Long) {
            let i = new l.Long(0, 0, !0);
            o.timestampMillis = e.longs === String ? i.toString() : e.longs === Number ? i.toNumber() : i;
          } else
            o.timestampMillis = e.longs === String ? "0" : 0;
        return A.imageHash != null && A.hasOwnProperty("imageHash") && (o.imageHash = A.imageHash), A.timestampMillis != null && A.hasOwnProperty("timestampMillis") && (typeof A.timestampMillis == "number" ? o.timestampMillis = e.longs === String ? String(A.timestampMillis) : A.timestampMillis : o.timestampMillis = e.longs === String ? l.Long.prototype.toString.call(A.timestampMillis) : e.longs === Number ? new l.LongBits(A.timestampMillis.low >>> 0, A.timestampMillis.high >>> 0).toNumber(!0) : A.timestampMillis), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.HashedDetectedImageWithTimestamp";
      }, t;
    }(), I.MediaTrackSettings = function() {
      function t(e) {
        if (e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.aspectRatio = null, t.prototype.autoGainControl = null, t.prototype.channelCount = null, t.prototype.deviceId = null, t.prototype.displaySurface = null, t.prototype.echoCancellation = null, t.prototype.facingMode = null, t.prototype.frameRate = null, t.prototype.groupId = null, t.prototype.height = null, t.prototype.noiseSuppression = null, t.prototype.sampleRate = null, t.prototype.sampleSize = null, t.prototype.width = null, t.prototype.deviceName = null;
      let A;
      return Object.defineProperty(t.prototype, "_aspectRatio", {
        get: l.oneOfGetter(A = ["aspectRatio"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_autoGainControl", {
        get: l.oneOfGetter(A = ["autoGainControl"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_channelCount", {
        get: l.oneOfGetter(A = ["channelCount"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_deviceId", {
        get: l.oneOfGetter(A = ["deviceId"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_displaySurface", {
        get: l.oneOfGetter(A = ["displaySurface"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_echoCancellation", {
        get: l.oneOfGetter(A = ["echoCancellation"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_facingMode", {
        get: l.oneOfGetter(A = ["facingMode"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_frameRate", {
        get: l.oneOfGetter(A = ["frameRate"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_groupId", {
        get: l.oneOfGetter(A = ["groupId"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_height", {
        get: l.oneOfGetter(A = ["height"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_noiseSuppression", {
        get: l.oneOfGetter(A = ["noiseSuppression"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_sampleRate", {
        get: l.oneOfGetter(A = ["sampleRate"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_sampleSize", {
        get: l.oneOfGetter(A = ["sampleSize"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_width", {
        get: l.oneOfGetter(A = ["width"]),
        set: l.oneOfSetter(A)
      }), Object.defineProperty(t.prototype, "_deviceName", {
        get: l.oneOfGetter(A = ["deviceName"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        return o || (o = P.create()), e.aspectRatio != null && Object.hasOwnProperty.call(e, "aspectRatio") && o.uint32(
          /* id 1, wireType 1 =*/
          9
        ).double(e.aspectRatio), e.autoGainControl != null && Object.hasOwnProperty.call(e, "autoGainControl") && o.uint32(
          /* id 2, wireType 0 =*/
          16
        ).bool(e.autoGainControl), e.channelCount != null && Object.hasOwnProperty.call(e, "channelCount") && o.uint32(
          /* id 3, wireType 0 =*/
          24
        ).int32(e.channelCount), e.deviceId != null && Object.hasOwnProperty.call(e, "deviceId") && o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).string(e.deviceId), e.displaySurface != null && Object.hasOwnProperty.call(e, "displaySurface") && o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).string(e.displaySurface), e.echoCancellation != null && Object.hasOwnProperty.call(e, "echoCancellation") && o.uint32(
          /* id 6, wireType 0 =*/
          48
        ).bool(e.echoCancellation), e.facingMode != null && Object.hasOwnProperty.call(e, "facingMode") && o.uint32(
          /* id 7, wireType 2 =*/
          58
        ).string(e.facingMode), e.frameRate != null && Object.hasOwnProperty.call(e, "frameRate") && o.uint32(
          /* id 8, wireType 1 =*/
          65
        ).double(e.frameRate), e.groupId != null && Object.hasOwnProperty.call(e, "groupId") && o.uint32(
          /* id 9, wireType 2 =*/
          74
        ).string(e.groupId), e.height != null && Object.hasOwnProperty.call(e, "height") && o.uint32(
          /* id 10, wireType 0 =*/
          80
        ).int32(e.height), e.noiseSuppression != null && Object.hasOwnProperty.call(e, "noiseSuppression") && o.uint32(
          /* id 11, wireType 0 =*/
          88
        ).bool(e.noiseSuppression), e.sampleRate != null && Object.hasOwnProperty.call(e, "sampleRate") && o.uint32(
          /* id 12, wireType 0 =*/
          96
        ).int32(e.sampleRate), e.sampleSize != null && Object.hasOwnProperty.call(e, "sampleSize") && o.uint32(
          /* id 13, wireType 0 =*/
          104
        ).int32(e.sampleSize), e.width != null && Object.hasOwnProperty.call(e, "width") && o.uint32(
          /* id 14, wireType 0 =*/
          112
        ).int32(e.width), e.deviceName != null && Object.hasOwnProperty.call(e, "deviceName") && o.uint32(
          /* id 15, wireType 2 =*/
          122
        ).string(e.deviceName), o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.MediaTrackSettings();
        for (; e.pos < i; ) {
          let B = e.uint32();
          switch (B >>> 3) {
            case 1: {
              C.aspectRatio = e.double();
              break;
            }
            case 2: {
              C.autoGainControl = e.bool();
              break;
            }
            case 3: {
              C.channelCount = e.int32();
              break;
            }
            case 4: {
              C.deviceId = e.string();
              break;
            }
            case 5: {
              C.displaySurface = e.string();
              break;
            }
            case 6: {
              C.echoCancellation = e.bool();
              break;
            }
            case 7: {
              C.facingMode = e.string();
              break;
            }
            case 8: {
              C.frameRate = e.double();
              break;
            }
            case 9: {
              C.groupId = e.string();
              break;
            }
            case 10: {
              C.height = e.int32();
              break;
            }
            case 11: {
              C.noiseSuppression = e.bool();
              break;
            }
            case 12: {
              C.sampleRate = e.int32();
              break;
            }
            case 13: {
              C.sampleSize = e.int32();
              break;
            }
            case 14: {
              C.width = e.int32();
              break;
            }
            case 15: {
              C.deviceName = e.string();
              break;
            }
            default:
              e.skipType(B & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        return typeof e != "object" || e === null ? "object expected" : e.aspectRatio != null && e.hasOwnProperty("aspectRatio") && typeof e.aspectRatio != "number" ? "aspectRatio: number expected" : e.autoGainControl != null && e.hasOwnProperty("autoGainControl") && typeof e.autoGainControl != "boolean" ? "autoGainControl: boolean expected" : e.channelCount != null && e.hasOwnProperty("channelCount") && !l.isInteger(e.channelCount) ? "channelCount: integer expected" : e.deviceId != null && e.hasOwnProperty("deviceId") && !l.isString(e.deviceId) ? "deviceId: string expected" : e.displaySurface != null && e.hasOwnProperty("displaySurface") && !l.isString(e.displaySurface) ? "displaySurface: string expected" : e.echoCancellation != null && e.hasOwnProperty("echoCancellation") && typeof e.echoCancellation != "boolean" ? "echoCancellation: boolean expected" : e.facingMode != null && e.hasOwnProperty("facingMode") && !l.isString(e.facingMode) ? "facingMode: string expected" : e.frameRate != null && e.hasOwnProperty("frameRate") && typeof e.frameRate != "number" ? "frameRate: number expected" : e.groupId != null && e.hasOwnProperty("groupId") && !l.isString(e.groupId) ? "groupId: string expected" : e.height != null && e.hasOwnProperty("height") && !l.isInteger(e.height) ? "height: integer expected" : e.noiseSuppression != null && e.hasOwnProperty("noiseSuppression") && typeof e.noiseSuppression != "boolean" ? "noiseSuppression: boolean expected" : e.sampleRate != null && e.hasOwnProperty("sampleRate") && !l.isInteger(e.sampleRate) ? "sampleRate: integer expected" : e.sampleSize != null && e.hasOwnProperty("sampleSize") && !l.isInteger(e.sampleSize) ? "sampleSize: integer expected" : e.width != null && e.hasOwnProperty("width") && !l.isInteger(e.width) ? "width: integer expected" : e.deviceName != null && e.hasOwnProperty("deviceName") && !l.isString(e.deviceName) ? "deviceName: string expected" : null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.MediaTrackSettings)
          return e;
        let o = new c.dot.v4.MediaTrackSettings();
        return e.aspectRatio != null && (o.aspectRatio = Number(e.aspectRatio)), e.autoGainControl != null && (o.autoGainControl = !!e.autoGainControl), e.channelCount != null && (o.channelCount = e.channelCount | 0), e.deviceId != null && (o.deviceId = String(e.deviceId)), e.displaySurface != null && (o.displaySurface = String(e.displaySurface)), e.echoCancellation != null && (o.echoCancellation = !!e.echoCancellation), e.facingMode != null && (o.facingMode = String(e.facingMode)), e.frameRate != null && (o.frameRate = Number(e.frameRate)), e.groupId != null && (o.groupId = String(e.groupId)), e.height != null && (o.height = e.height | 0), e.noiseSuppression != null && (o.noiseSuppression = !!e.noiseSuppression), e.sampleRate != null && (o.sampleRate = e.sampleRate | 0), e.sampleSize != null && (o.sampleSize = e.sampleSize | 0), e.width != null && (o.width = e.width | 0), e.deviceName != null && (o.deviceName = String(e.deviceName)), o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        return e.aspectRatio != null && e.hasOwnProperty("aspectRatio") && (i.aspectRatio = o.json && !isFinite(e.aspectRatio) ? String(e.aspectRatio) : e.aspectRatio, o.oneofs && (i._aspectRatio = "aspectRatio")), e.autoGainControl != null && e.hasOwnProperty("autoGainControl") && (i.autoGainControl = e.autoGainControl, o.oneofs && (i._autoGainControl = "autoGainControl")), e.channelCount != null && e.hasOwnProperty("channelCount") && (i.channelCount = e.channelCount, o.oneofs && (i._channelCount = "channelCount")), e.deviceId != null && e.hasOwnProperty("deviceId") && (i.deviceId = e.deviceId, o.oneofs && (i._deviceId = "deviceId")), e.displaySurface != null && e.hasOwnProperty("displaySurface") && (i.displaySurface = e.displaySurface, o.oneofs && (i._displaySurface = "displaySurface")), e.echoCancellation != null && e.hasOwnProperty("echoCancellation") && (i.echoCancellation = e.echoCancellation, o.oneofs && (i._echoCancellation = "echoCancellation")), e.facingMode != null && e.hasOwnProperty("facingMode") && (i.facingMode = e.facingMode, o.oneofs && (i._facingMode = "facingMode")), e.frameRate != null && e.hasOwnProperty("frameRate") && (i.frameRate = o.json && !isFinite(e.frameRate) ? String(e.frameRate) : e.frameRate, o.oneofs && (i._frameRate = "frameRate")), e.groupId != null && e.hasOwnProperty("groupId") && (i.groupId = e.groupId, o.oneofs && (i._groupId = "groupId")), e.height != null && e.hasOwnProperty("height") && (i.height = e.height, o.oneofs && (i._height = "height")), e.noiseSuppression != null && e.hasOwnProperty("noiseSuppression") && (i.noiseSuppression = e.noiseSuppression, o.oneofs && (i._noiseSuppression = "noiseSuppression")), e.sampleRate != null && e.hasOwnProperty("sampleRate") && (i.sampleRate = e.sampleRate, o.oneofs && (i._sampleRate = "sampleRate")), e.sampleSize != null && e.hasOwnProperty("sampleSize") && (i.sampleSize = e.sampleSize, o.oneofs && (i._sampleSize = "sampleSize")), e.width != null && e.hasOwnProperty("width") && (i.width = e.width, o.oneofs && (i._width = "width")), e.deviceName != null && e.hasOwnProperty("deviceName") && (i.deviceName = e.deviceName, o.oneofs && (i._deviceName = "deviceName")), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.MediaTrackSettings";
      }, t;
    }(), I.ImageBitmap = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.width = 0, t.prototype.height = 0, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.width != null && Object.hasOwnProperty.call(A, "width") && e.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.width), A.height != null && Object.hasOwnProperty.call(A, "height") && e.uint32(
          /* id 2, wireType 0 =*/
          16
        ).int32(A.height), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.ImageBitmap();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.width = A.int32();
              break;
            }
            case 2: {
              i.height = A.int32();
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.width != null && A.hasOwnProperty("width") && !l.isInteger(A.width) ? "width: integer expected" : A.height != null && A.hasOwnProperty("height") && !l.isInteger(A.height) ? "height: integer expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.ImageBitmap)
          return A;
        let e = new c.dot.v4.ImageBitmap();
        return A.width != null && (e.width = A.width | 0), A.height != null && (e.height = A.height | 0), e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.width = 0, o.height = 0), A.width != null && A.hasOwnProperty("width") && (o.width = A.width), A.height != null && A.hasOwnProperty("height") && (o.height = A.height), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.ImageBitmap";
      }, t;
    }(), I.CameraProperties = function() {
      function t(e) {
        if (e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.cameraInitFrameResolution = null, t.prototype.cameraProperties = null;
      let A;
      return Object.defineProperty(t.prototype, "_cameraInitFrameResolution", {
        get: l.oneOfGetter(A = ["cameraInitFrameResolution"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        return o || (o = P.create()), e.cameraInitFrameResolution != null && Object.hasOwnProperty.call(e, "cameraInitFrameResolution") && c.dot.v4.ImageBitmap.encode(e.cameraInitFrameResolution, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.cameraProperties != null && Object.hasOwnProperty.call(e, "cameraProperties") && c.dot.v4.MediaTrackSettings.encode(e.cameraProperties, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.CameraProperties();
        for (; e.pos < i; ) {
          let B = e.uint32();
          switch (B >>> 3) {
            case 1: {
              C.cameraInitFrameResolution = c.dot.v4.ImageBitmap.decode(e, e.uint32());
              break;
            }
            case 2: {
              C.cameraProperties = c.dot.v4.MediaTrackSettings.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(B & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        if (e.cameraInitFrameResolution != null && e.hasOwnProperty("cameraInitFrameResolution")) {
          let o = c.dot.v4.ImageBitmap.verify(e.cameraInitFrameResolution);
          if (o)
            return "cameraInitFrameResolution." + o;
        }
        if (e.cameraProperties != null && e.hasOwnProperty("cameraProperties")) {
          let o = c.dot.v4.MediaTrackSettings.verify(e.cameraProperties);
          if (o)
            return "cameraProperties." + o;
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.CameraProperties)
          return e;
        let o = new c.dot.v4.CameraProperties();
        if (e.cameraInitFrameResolution != null) {
          if (typeof e.cameraInitFrameResolution != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraInitFrameResolution: object expected");
          o.cameraInitFrameResolution = c.dot.v4.ImageBitmap.fromObject(e.cameraInitFrameResolution);
        }
        if (e.cameraProperties != null) {
          if (typeof e.cameraProperties != "object")
            throw TypeError(".dot.v4.CameraProperties.cameraProperties: object expected");
          o.cameraProperties = c.dot.v4.MediaTrackSettings.fromObject(e.cameraProperties);
        }
        return o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        return o.defaults && (i.cameraProperties = null), e.cameraInitFrameResolution != null && e.hasOwnProperty("cameraInitFrameResolution") && (i.cameraInitFrameResolution = c.dot.v4.ImageBitmap.toObject(e.cameraInitFrameResolution, o), o.oneofs && (i._cameraInitFrameResolution = "cameraInitFrameResolution")), e.cameraProperties != null && e.hasOwnProperty("cameraProperties") && (i.cameraProperties = c.dot.v4.MediaTrackSettings.toObject(e.cameraProperties, o)), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.CameraProperties";
      }, t;
    }(), I.DetectedObject = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.brightness = 0, t.prototype.sharpness = 0, t.prototype.hotspots = 0, t.prototype.confidence = 0, t.prototype.faceSize = 0, t.prototype.faceCenter = null, t.prototype.smallestEdge = 0, t.prototype.bottomLeft = null, t.prototype.bottomRight = null, t.prototype.topLeft = null, t.prototype.topRight = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.brightness != null && Object.hasOwnProperty.call(A, "brightness") && e.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(A.brightness), A.sharpness != null && Object.hasOwnProperty.call(A, "sharpness") && e.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(A.sharpness), A.hotspots != null && Object.hasOwnProperty.call(A, "hotspots") && e.uint32(
          /* id 3, wireType 5 =*/
          29
        ).float(A.hotspots), A.confidence != null && Object.hasOwnProperty.call(A, "confidence") && e.uint32(
          /* id 4, wireType 5 =*/
          37
        ).float(A.confidence), A.faceSize != null && Object.hasOwnProperty.call(A, "faceSize") && e.uint32(
          /* id 5, wireType 5 =*/
          45
        ).float(A.faceSize), A.faceCenter != null && Object.hasOwnProperty.call(A, "faceCenter") && c.dot.v4.Point.encode(A.faceCenter, e.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), A.smallestEdge != null && Object.hasOwnProperty.call(A, "smallestEdge") && e.uint32(
          /* id 7, wireType 5 =*/
          61
        ).float(A.smallestEdge), A.bottomLeft != null && Object.hasOwnProperty.call(A, "bottomLeft") && c.dot.v4.Point.encode(A.bottomLeft, e.uint32(
          /* id 8, wireType 2 =*/
          66
        ).fork()).ldelim(), A.bottomRight != null && Object.hasOwnProperty.call(A, "bottomRight") && c.dot.v4.Point.encode(A.bottomRight, e.uint32(
          /* id 9, wireType 2 =*/
          74
        ).fork()).ldelim(), A.topLeft != null && Object.hasOwnProperty.call(A, "topLeft") && c.dot.v4.Point.encode(A.topLeft, e.uint32(
          /* id 10, wireType 2 =*/
          82
        ).fork()).ldelim(), A.topRight != null && Object.hasOwnProperty.call(A, "topRight") && c.dot.v4.Point.encode(A.topRight, e.uint32(
          /* id 11, wireType 2 =*/
          90
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.DetectedObject();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.brightness = A.float();
              break;
            }
            case 2: {
              i.sharpness = A.float();
              break;
            }
            case 3: {
              i.hotspots = A.float();
              break;
            }
            case 4: {
              i.confidence = A.float();
              break;
            }
            case 5: {
              i.faceSize = A.float();
              break;
            }
            case 6: {
              i.faceCenter = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            case 7: {
              i.smallestEdge = A.float();
              break;
            }
            case 8: {
              i.bottomLeft = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            case 9: {
              i.bottomRight = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            case 10: {
              i.topLeft = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            case 11: {
              i.topRight = c.dot.v4.Point.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.brightness != null && A.hasOwnProperty("brightness") && typeof A.brightness != "number")
          return "brightness: number expected";
        if (A.sharpness != null && A.hasOwnProperty("sharpness") && typeof A.sharpness != "number")
          return "sharpness: number expected";
        if (A.hotspots != null && A.hasOwnProperty("hotspots") && typeof A.hotspots != "number")
          return "hotspots: number expected";
        if (A.confidence != null && A.hasOwnProperty("confidence") && typeof A.confidence != "number")
          return "confidence: number expected";
        if (A.faceSize != null && A.hasOwnProperty("faceSize") && typeof A.faceSize != "number")
          return "faceSize: number expected";
        if (A.faceCenter != null && A.hasOwnProperty("faceCenter")) {
          let e = c.dot.v4.Point.verify(A.faceCenter);
          if (e)
            return "faceCenter." + e;
        }
        if (A.smallestEdge != null && A.hasOwnProperty("smallestEdge") && typeof A.smallestEdge != "number")
          return "smallestEdge: number expected";
        if (A.bottomLeft != null && A.hasOwnProperty("bottomLeft")) {
          let e = c.dot.v4.Point.verify(A.bottomLeft);
          if (e)
            return "bottomLeft." + e;
        }
        if (A.bottomRight != null && A.hasOwnProperty("bottomRight")) {
          let e = c.dot.v4.Point.verify(A.bottomRight);
          if (e)
            return "bottomRight." + e;
        }
        if (A.topLeft != null && A.hasOwnProperty("topLeft")) {
          let e = c.dot.v4.Point.verify(A.topLeft);
          if (e)
            return "topLeft." + e;
        }
        if (A.topRight != null && A.hasOwnProperty("topRight")) {
          let e = c.dot.v4.Point.verify(A.topRight);
          if (e)
            return "topRight." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.DetectedObject)
          return A;
        let e = new c.dot.v4.DetectedObject();
        if (A.brightness != null && (e.brightness = Number(A.brightness)), A.sharpness != null && (e.sharpness = Number(A.sharpness)), A.hotspots != null && (e.hotspots = Number(A.hotspots)), A.confidence != null && (e.confidence = Number(A.confidence)), A.faceSize != null && (e.faceSize = Number(A.faceSize)), A.faceCenter != null) {
          if (typeof A.faceCenter != "object")
            throw TypeError(".dot.v4.DetectedObject.faceCenter: object expected");
          e.faceCenter = c.dot.v4.Point.fromObject(A.faceCenter);
        }
        if (A.smallestEdge != null && (e.smallestEdge = Number(A.smallestEdge)), A.bottomLeft != null) {
          if (typeof A.bottomLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomLeft: object expected");
          e.bottomLeft = c.dot.v4.Point.fromObject(A.bottomLeft);
        }
        if (A.bottomRight != null) {
          if (typeof A.bottomRight != "object")
            throw TypeError(".dot.v4.DetectedObject.bottomRight: object expected");
          e.bottomRight = c.dot.v4.Point.fromObject(A.bottomRight);
        }
        if (A.topLeft != null) {
          if (typeof A.topLeft != "object")
            throw TypeError(".dot.v4.DetectedObject.topLeft: object expected");
          e.topLeft = c.dot.v4.Point.fromObject(A.topLeft);
        }
        if (A.topRight != null) {
          if (typeof A.topRight != "object")
            throw TypeError(".dot.v4.DetectedObject.topRight: object expected");
          e.topRight = c.dot.v4.Point.fromObject(A.topRight);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.brightness = 0, o.sharpness = 0, o.hotspots = 0, o.confidence = 0, o.faceSize = 0, o.faceCenter = null, o.smallestEdge = 0, o.bottomLeft = null, o.bottomRight = null, o.topLeft = null, o.topRight = null), A.brightness != null && A.hasOwnProperty("brightness") && (o.brightness = e.json && !isFinite(A.brightness) ? String(A.brightness) : A.brightness), A.sharpness != null && A.hasOwnProperty("sharpness") && (o.sharpness = e.json && !isFinite(A.sharpness) ? String(A.sharpness) : A.sharpness), A.hotspots != null && A.hasOwnProperty("hotspots") && (o.hotspots = e.json && !isFinite(A.hotspots) ? String(A.hotspots) : A.hotspots), A.confidence != null && A.hasOwnProperty("confidence") && (o.confidence = e.json && !isFinite(A.confidence) ? String(A.confidence) : A.confidence), A.faceSize != null && A.hasOwnProperty("faceSize") && (o.faceSize = e.json && !isFinite(A.faceSize) ? String(A.faceSize) : A.faceSize), A.faceCenter != null && A.hasOwnProperty("faceCenter") && (o.faceCenter = c.dot.v4.Point.toObject(A.faceCenter, e)), A.smallestEdge != null && A.hasOwnProperty("smallestEdge") && (o.smallestEdge = e.json && !isFinite(A.smallestEdge) ? String(A.smallestEdge) : A.smallestEdge), A.bottomLeft != null && A.hasOwnProperty("bottomLeft") && (o.bottomLeft = c.dot.v4.Point.toObject(A.bottomLeft, e)), A.bottomRight != null && A.hasOwnProperty("bottomRight") && (o.bottomRight = c.dot.v4.Point.toObject(A.bottomRight, e)), A.topLeft != null && A.hasOwnProperty("topLeft") && (o.topLeft = c.dot.v4.Point.toObject(A.topLeft, e)), A.topRight != null && A.hasOwnProperty("topRight") && (o.topRight = c.dot.v4.Point.toObject(A.topRight, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DetectedObject";
      }, t;
    }(), I.Point = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.x = 0, t.prototype.y = 0, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.x != null && Object.hasOwnProperty.call(A, "x") && e.uint32(
          /* id 1, wireType 5 =*/
          13
        ).float(A.x), A.y != null && Object.hasOwnProperty.call(A, "y") && e.uint32(
          /* id 2, wireType 5 =*/
          21
        ).float(A.y), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.Point();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.x = A.float();
              break;
            }
            case 2: {
              i.y = A.float();
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        return typeof A != "object" || A === null ? "object expected" : A.x != null && A.hasOwnProperty("x") && typeof A.x != "number" ? "x: number expected" : A.y != null && A.hasOwnProperty("y") && typeof A.y != "number" ? "y: number expected" : null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.Point)
          return A;
        let e = new c.dot.v4.Point();
        return A.x != null && (e.x = Number(A.x)), A.y != null && (e.y = Number(A.y)), e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.x = 0, o.y = 0), A.x != null && A.hasOwnProperty("x") && (o.x = e.json && !isFinite(A.x) ? String(A.x) : A.x), A.y != null && A.hasOwnProperty("y") && (o.y = e.json && !isFinite(A.y) ? String(A.y) : A.y), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.Point";
      }, t;
    }(), I.FaceContent = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.FaceContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let e = c.dot.Image.verify(A.image);
          if (e)
            return "image." + e;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.FaceContent)
          return A;
        let e = new c.dot.v4.FaceContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.FaceContent.image: object expected");
          e.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.FaceContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, e)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.FaceContent";
      }, t;
    }(), I.DocumentContent = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.DocumentContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let e = c.dot.Image.verify(A.image);
          if (e)
            return "image." + e;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.DocumentContent)
          return A;
        let e = new c.dot.v4.DocumentContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.DocumentContent.image: object expected");
          e.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.DocumentContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, e)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.DocumentContent";
      }, t;
    }(), I.Blob = function() {
      function t(e) {
        if (e)
          for (let o = Object.keys(e), i = 0; i < o.length; ++i)
            e[o[i]] != null && (this[o[i]] = e[o[i]]);
      }
      t.prototype.documentContent = null, t.prototype.eyeGazeLivenessContent = null, t.prototype.faceContent = null, t.prototype.magnifeyeLivenessContent = null, t.prototype.smileLivenessContent = null, t.prototype.palmContent = null;
      let A;
      return Object.defineProperty(t.prototype, "blob", {
        get: l.oneOfGetter(A = ["documentContent", "eyeGazeLivenessContent", "faceContent", "magnifeyeLivenessContent", "smileLivenessContent", "palmContent"]),
        set: l.oneOfSetter(A)
      }), t.create = function(e) {
        return new t(e);
      }, t.encode = function(e, o) {
        return o || (o = P.create()), e.documentContent != null && Object.hasOwnProperty.call(e, "documentContent") && c.dot.v4.DocumentContent.encode(e.documentContent, o.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), e.faceContent != null && Object.hasOwnProperty.call(e, "faceContent") && c.dot.v4.FaceContent.encode(e.faceContent, o.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e.magnifeyeLivenessContent != null && Object.hasOwnProperty.call(e, "magnifeyeLivenessContent") && c.dot.v4.MagnifEyeLivenessContent.encode(e.magnifeyeLivenessContent, o.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e.smileLivenessContent != null && Object.hasOwnProperty.call(e, "smileLivenessContent") && c.dot.v4.SmileLivenessContent.encode(e.smileLivenessContent, o.uint32(
          /* id 4, wireType 2 =*/
          34
        ).fork()).ldelim(), e.eyeGazeLivenessContent != null && Object.hasOwnProperty.call(e, "eyeGazeLivenessContent") && c.dot.v4.EyeGazeLivenessContent.encode(e.eyeGazeLivenessContent, o.uint32(
          /* id 5, wireType 2 =*/
          42
        ).fork()).ldelim(), e.palmContent != null && Object.hasOwnProperty.call(e, "palmContent") && c.dot.v4.PalmContent.encode(e.palmContent, o.uint32(
          /* id 6, wireType 2 =*/
          50
        ).fork()).ldelim(), o;
      }, t.encodeDelimited = function(e, o) {
        return this.encode(e, o).ldelim();
      }, t.decode = function(e, o) {
        e instanceof f || (e = f.create(e));
        let i = o === void 0 ? e.len : e.pos + o, C = new c.dot.v4.Blob();
        for (; e.pos < i; ) {
          let B = e.uint32();
          switch (B >>> 3) {
            case 1: {
              C.documentContent = c.dot.v4.DocumentContent.decode(e, e.uint32());
              break;
            }
            case 5: {
              C.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.decode(e, e.uint32());
              break;
            }
            case 2: {
              C.faceContent = c.dot.v4.FaceContent.decode(e, e.uint32());
              break;
            }
            case 3: {
              C.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.decode(e, e.uint32());
              break;
            }
            case 4: {
              C.smileLivenessContent = c.dot.v4.SmileLivenessContent.decode(e, e.uint32());
              break;
            }
            case 6: {
              C.palmContent = c.dot.v4.PalmContent.decode(e, e.uint32());
              break;
            }
            default:
              e.skipType(B & 7);
              break;
          }
        }
        return C;
      }, t.decodeDelimited = function(e) {
        return e instanceof f || (e = new f(e)), this.decode(e, e.uint32());
      }, t.verify = function(e) {
        if (typeof e != "object" || e === null)
          return "object expected";
        let o = {};
        if (e.documentContent != null && e.hasOwnProperty("documentContent")) {
          o.blob = 1;
          {
            let i = c.dot.v4.DocumentContent.verify(e.documentContent);
            if (i)
              return "documentContent." + i;
          }
        }
        if (e.eyeGazeLivenessContent != null && e.hasOwnProperty("eyeGazeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.EyeGazeLivenessContent.verify(e.eyeGazeLivenessContent);
            if (i)
              return "eyeGazeLivenessContent." + i;
          }
        }
        if (e.faceContent != null && e.hasOwnProperty("faceContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.FaceContent.verify(e.faceContent);
            if (i)
              return "faceContent." + i;
          }
        }
        if (e.magnifeyeLivenessContent != null && e.hasOwnProperty("magnifeyeLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.MagnifEyeLivenessContent.verify(e.magnifeyeLivenessContent);
            if (i)
              return "magnifeyeLivenessContent." + i;
          }
        }
        if (e.smileLivenessContent != null && e.hasOwnProperty("smileLivenessContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.SmileLivenessContent.verify(e.smileLivenessContent);
            if (i)
              return "smileLivenessContent." + i;
          }
        }
        if (e.palmContent != null && e.hasOwnProperty("palmContent")) {
          if (o.blob === 1)
            return "blob: multiple values";
          o.blob = 1;
          {
            let i = c.dot.v4.PalmContent.verify(e.palmContent);
            if (i)
              return "palmContent." + i;
          }
        }
        return null;
      }, t.fromObject = function(e) {
        if (e instanceof c.dot.v4.Blob)
          return e;
        let o = new c.dot.v4.Blob();
        if (e.documentContent != null) {
          if (typeof e.documentContent != "object")
            throw TypeError(".dot.v4.Blob.documentContent: object expected");
          o.documentContent = c.dot.v4.DocumentContent.fromObject(e.documentContent);
        }
        if (e.eyeGazeLivenessContent != null) {
          if (typeof e.eyeGazeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.eyeGazeLivenessContent: object expected");
          o.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.fromObject(e.eyeGazeLivenessContent);
        }
        if (e.faceContent != null) {
          if (typeof e.faceContent != "object")
            throw TypeError(".dot.v4.Blob.faceContent: object expected");
          o.faceContent = c.dot.v4.FaceContent.fromObject(e.faceContent);
        }
        if (e.magnifeyeLivenessContent != null) {
          if (typeof e.magnifeyeLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.magnifeyeLivenessContent: object expected");
          o.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.fromObject(e.magnifeyeLivenessContent);
        }
        if (e.smileLivenessContent != null) {
          if (typeof e.smileLivenessContent != "object")
            throw TypeError(".dot.v4.Blob.smileLivenessContent: object expected");
          o.smileLivenessContent = c.dot.v4.SmileLivenessContent.fromObject(e.smileLivenessContent);
        }
        if (e.palmContent != null) {
          if (typeof e.palmContent != "object")
            throw TypeError(".dot.v4.Blob.palmContent: object expected");
          o.palmContent = c.dot.v4.PalmContent.fromObject(e.palmContent);
        }
        return o;
      }, t.toObject = function(e, o) {
        o || (o = {});
        let i = {};
        return e.documentContent != null && e.hasOwnProperty("documentContent") && (i.documentContent = c.dot.v4.DocumentContent.toObject(e.documentContent, o), o.oneofs && (i.blob = "documentContent")), e.faceContent != null && e.hasOwnProperty("faceContent") && (i.faceContent = c.dot.v4.FaceContent.toObject(e.faceContent, o), o.oneofs && (i.blob = "faceContent")), e.magnifeyeLivenessContent != null && e.hasOwnProperty("magnifeyeLivenessContent") && (i.magnifeyeLivenessContent = c.dot.v4.MagnifEyeLivenessContent.toObject(e.magnifeyeLivenessContent, o), o.oneofs && (i.blob = "magnifeyeLivenessContent")), e.smileLivenessContent != null && e.hasOwnProperty("smileLivenessContent") && (i.smileLivenessContent = c.dot.v4.SmileLivenessContent.toObject(e.smileLivenessContent, o), o.oneofs && (i.blob = "smileLivenessContent")), e.eyeGazeLivenessContent != null && e.hasOwnProperty("eyeGazeLivenessContent") && (i.eyeGazeLivenessContent = c.dot.v4.EyeGazeLivenessContent.toObject(e.eyeGazeLivenessContent, o), o.oneofs && (i.blob = "eyeGazeLivenessContent")), e.palmContent != null && e.hasOwnProperty("palmContent") && (i.palmContent = c.dot.v4.PalmContent.toObject(e.palmContent, o), o.oneofs && (i.blob = "palmContent")), i;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(e) {
        return e === void 0 && (e = "type.googleapis.com"), e + "/dot.v4.Blob";
      }, t;
    }(), I.EyeGazeLivenessContent = function() {
      function t(A) {
        if (this.segments = [], A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.segments = l.emptyArray, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        if (e || (e = P.create()), A.segments != null && A.segments.length)
          for (let o = 0; o < A.segments.length; ++o)
            c.dot.v4.EyeGazeLivenessSegment.encode(A.segments[o], e.uint32(
              /* id 1, wireType 2 =*/
              10
            ).fork()).ldelim();
        return A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.EyeGazeLivenessContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.segments && i.segments.length || (i.segments = []), i.segments.push(c.dot.v4.EyeGazeLivenessSegment.decode(A, A.uint32()));
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.segments != null && A.hasOwnProperty("segments")) {
          if (!Array.isArray(A.segments))
            return "segments: array expected";
          for (let e = 0; e < A.segments.length; ++e) {
            let o = c.dot.v4.EyeGazeLivenessSegment.verify(A.segments[e]);
            if (o)
              return "segments." + o;
          }
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.EyeGazeLivenessContent)
          return A;
        let e = new c.dot.v4.EyeGazeLivenessContent();
        if (A.segments) {
          if (!Array.isArray(A.segments))
            throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: array expected");
          e.segments = [];
          for (let o = 0; o < A.segments.length; ++o) {
            if (typeof A.segments[o] != "object")
              throw TypeError(".dot.v4.EyeGazeLivenessContent.segments: object expected");
            e.segments[o] = c.dot.v4.EyeGazeLivenessSegment.fromObject(A.segments[o]);
          }
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        if ((e.arrays || e.defaults) && (o.segments = []), e.defaults && (o.metadata = null), A.segments && A.segments.length) {
          o.segments = [];
          for (let i = 0; i < A.segments.length; ++i)
            o.segments[i] = c.dot.v4.EyeGazeLivenessSegment.toObject(A.segments[i], e);
        }
        return A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessContent";
      }, t;
    }(), I.EyeGazeLivenessSegment = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.corner = 0, t.prototype.image = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.corner != null && Object.hasOwnProperty.call(A, "corner") && e.uint32(
          /* id 1, wireType 0 =*/
          8
        ).int32(A.corner), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.EyeGazeLivenessSegment();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.corner = A.int32();
              break;
            }
            case 2: {
              i.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.corner != null && A.hasOwnProperty("corner"))
          switch (A.corner) {
            default:
              return "corner: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
              break;
          }
        if (A.image != null && A.hasOwnProperty("image")) {
          let e = c.dot.Image.verify(A.image);
          if (e)
            return "image." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.EyeGazeLivenessSegment)
          return A;
        let e = new c.dot.v4.EyeGazeLivenessSegment();
        switch (A.corner) {
          default:
            if (typeof A.corner == "number") {
              e.corner = A.corner;
              break;
            }
            break;
          case "TOP_LEFT":
          case 0:
            e.corner = 0;
            break;
          case "TOP_RIGHT":
          case 1:
            e.corner = 1;
            break;
          case "BOTTOM_RIGHT":
          case 2:
            e.corner = 2;
            break;
          case "BOTTOM_LEFT":
          case 3:
            e.corner = 3;
            break;
        }
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.EyeGazeLivenessSegment.image: object expected");
          e.image = c.dot.Image.fromObject(A.image);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.corner = e.enums === String ? "TOP_LEFT" : 0, o.image = null), A.corner != null && A.hasOwnProperty("corner") && (o.corner = e.enums === String ? c.dot.v4.EyeGazeLivenessCorner[A.corner] === void 0 ? A.corner : c.dot.v4.EyeGazeLivenessCorner[A.corner] : A.corner), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.EyeGazeLivenessSegment";
      }, t;
    }(), I.EyeGazeLivenessCorner = function() {
      const t = {}, A = Object.create(t);
      return A[t[0] = "TOP_LEFT"] = 0, A[t[1] = "TOP_RIGHT"] = 1, A[t[2] = "BOTTOM_RIGHT"] = 2, A[t[3] = "BOTTOM_LEFT"] = 3, A;
    }(), I.SmileLivenessContent = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.neutralExpressionFaceImage = null, t.prototype.smileExpressionFaceImage = null, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.neutralExpressionFaceImage != null && Object.hasOwnProperty.call(A, "neutralExpressionFaceImage") && c.dot.Image.encode(A.neutralExpressionFaceImage, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.smileExpressionFaceImage != null && Object.hasOwnProperty.call(A, "smileExpressionFaceImage") && c.dot.Image.encode(A.smileExpressionFaceImage, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 3, wireType 2 =*/
          26
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.SmileLivenessContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.neutralExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.smileExpressionFaceImage = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 3: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage")) {
          let e = c.dot.Image.verify(A.neutralExpressionFaceImage);
          if (e)
            return "neutralExpressionFaceImage." + e;
        }
        if (A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage")) {
          let e = c.dot.Image.verify(A.smileExpressionFaceImage);
          if (e)
            return "smileExpressionFaceImage." + e;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.SmileLivenessContent)
          return A;
        let e = new c.dot.v4.SmileLivenessContent();
        if (A.neutralExpressionFaceImage != null) {
          if (typeof A.neutralExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.neutralExpressionFaceImage: object expected");
          e.neutralExpressionFaceImage = c.dot.Image.fromObject(A.neutralExpressionFaceImage);
        }
        if (A.smileExpressionFaceImage != null) {
          if (typeof A.smileExpressionFaceImage != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.smileExpressionFaceImage: object expected");
          e.smileExpressionFaceImage = c.dot.Image.fromObject(A.smileExpressionFaceImage);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.SmileLivenessContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.neutralExpressionFaceImage = null, o.smileExpressionFaceImage = null, o.metadata = null), A.neutralExpressionFaceImage != null && A.hasOwnProperty("neutralExpressionFaceImage") && (o.neutralExpressionFaceImage = c.dot.Image.toObject(A.neutralExpressionFaceImage, e)), A.smileExpressionFaceImage != null && A.hasOwnProperty("smileExpressionFaceImage") && (o.smileExpressionFaceImage = c.dot.Image.toObject(A.smileExpressionFaceImage, e)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.SmileLivenessContent";
      }, t;
    }(), I.PalmContent = function() {
      function t(A) {
        if (A)
          for (let e = Object.keys(A), o = 0; o < e.length; ++o)
            A[e[o]] != null && (this[e[o]] = A[e[o]]);
      }
      return t.prototype.image = null, t.prototype.metadata = null, t.create = function(A) {
        return new t(A);
      }, t.encode = function(A, e) {
        return e || (e = P.create()), A.image != null && Object.hasOwnProperty.call(A, "image") && c.dot.Image.encode(A.image, e.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork()).ldelim(), A.metadata != null && Object.hasOwnProperty.call(A, "metadata") && c.dot.v4.Metadata.encode(A.metadata, e.uint32(
          /* id 2, wireType 2 =*/
          18
        ).fork()).ldelim(), e;
      }, t.encodeDelimited = function(A, e) {
        return this.encode(A, e).ldelim();
      }, t.decode = function(A, e) {
        A instanceof f || (A = f.create(A));
        let o = e === void 0 ? A.len : A.pos + e, i = new c.dot.v4.PalmContent();
        for (; A.pos < o; ) {
          let C = A.uint32();
          switch (C >>> 3) {
            case 1: {
              i.image = c.dot.Image.decode(A, A.uint32());
              break;
            }
            case 2: {
              i.metadata = c.dot.v4.Metadata.decode(A, A.uint32());
              break;
            }
            default:
              A.skipType(C & 7);
              break;
          }
        }
        return i;
      }, t.decodeDelimited = function(A) {
        return A instanceof f || (A = new f(A)), this.decode(A, A.uint32());
      }, t.verify = function(A) {
        if (typeof A != "object" || A === null)
          return "object expected";
        if (A.image != null && A.hasOwnProperty("image")) {
          let e = c.dot.Image.verify(A.image);
          if (e)
            return "image." + e;
        }
        if (A.metadata != null && A.hasOwnProperty("metadata")) {
          let e = c.dot.v4.Metadata.verify(A.metadata);
          if (e)
            return "metadata." + e;
        }
        return null;
      }, t.fromObject = function(A) {
        if (A instanceof c.dot.v4.PalmContent)
          return A;
        let e = new c.dot.v4.PalmContent();
        if (A.image != null) {
          if (typeof A.image != "object")
            throw TypeError(".dot.v4.PalmContent.image: object expected");
          e.image = c.dot.Image.fromObject(A.image);
        }
        if (A.metadata != null) {
          if (typeof A.metadata != "object")
            throw TypeError(".dot.v4.PalmContent.metadata: object expected");
          e.metadata = c.dot.v4.Metadata.fromObject(A.metadata);
        }
        return e;
      }, t.toObject = function(A, e) {
        e || (e = {});
        let o = {};
        return e.defaults && (o.image = null, o.metadata = null), A.image != null && A.hasOwnProperty("image") && (o.image = c.dot.Image.toObject(A.image, e)), A.metadata != null && A.hasOwnProperty("metadata") && (o.metadata = c.dot.v4.Metadata.toObject(A.metadata, e)), o;
      }, t.prototype.toJSON = function() {
        return this.constructor.toObject(this, H.util.toJSONOptions);
      }, t.getTypeUrl = function(A) {
        return A === void 0 && (A = "type.googleapis.com"), A + "/dot.v4.PalmContent";
      }, t;
    }(), I;
  }(), g.Image = function() {
    function I(t) {
      if (t)
        for (let A = Object.keys(t), e = 0; e < A.length; ++e)
          t[A[e]] != null && (this[A[e]] = t[A[e]]);
    }
    return I.prototype.bytes = l.newBuffer([]), I.create = function(t) {
      return new I(t);
    }, I.encode = function(t, A) {
      return A || (A = P.create()), t.bytes != null && Object.hasOwnProperty.call(t, "bytes") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.bytes), A;
    }, I.encodeDelimited = function(t, A) {
      return this.encode(t, A).ldelim();
    }, I.decode = function(t, A) {
      t instanceof f || (t = f.create(t));
      let e = A === void 0 ? t.len : t.pos + A, o = new c.dot.Image();
      for (; t.pos < e; ) {
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
    }, I.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, I.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.bytes != null && t.hasOwnProperty("bytes") && !(t.bytes && typeof t.bytes.length == "number" || l.isString(t.bytes)) ? "bytes: buffer expected" : null;
    }, I.fromObject = function(t) {
      if (t instanceof c.dot.Image)
        return t;
      let A = new c.dot.Image();
      return t.bytes != null && (typeof t.bytes == "string" ? l.base64.decode(t.bytes, A.bytes = l.newBuffer(l.base64.length(t.bytes)), 0) : t.bytes.length >= 0 && (A.bytes = t.bytes)), A;
    }, I.toObject = function(t, A) {
      A || (A = {});
      let e = {};
      return A.defaults && (A.bytes === String ? e.bytes = "" : (e.bytes = [], A.bytes !== Array && (e.bytes = l.newBuffer(e.bytes)))), t.bytes != null && t.hasOwnProperty("bytes") && (e.bytes = A.bytes === String ? l.base64.encode(t.bytes, 0, t.bytes.length) : A.bytes === Array ? Array.prototype.slice.call(t.bytes) : t.bytes), e;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Image";
    }, I;
  }(), g.Int32List = function() {
    function I(t) {
      if (this.items = [], t)
        for (let A = Object.keys(t), e = 0; e < A.length; ++e)
          t[A[e]] != null && (this[A[e]] = t[A[e]]);
    }
    return I.prototype.items = l.emptyArray, I.create = function(t) {
      return new I(t);
    }, I.encode = function(t, A) {
      if (A || (A = P.create()), t.items != null && t.items.length) {
        A.uint32(
          /* id 1, wireType 2 =*/
          10
        ).fork();
        for (let e = 0; e < t.items.length; ++e)
          A.int32(t.items[e]);
        A.ldelim();
      }
      return A;
    }, I.encodeDelimited = function(t, A) {
      return this.encode(t, A).ldelim();
    }, I.decode = function(t, A) {
      t instanceof f || (t = f.create(t));
      let e = A === void 0 ? t.len : t.pos + A, o = new c.dot.Int32List();
      for (; t.pos < e; ) {
        let i = t.uint32();
        switch (i >>> 3) {
          case 1: {
            if (o.items && o.items.length || (o.items = []), (i & 7) === 2) {
              let C = t.uint32() + t.pos;
              for (; t.pos < C; )
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
    }, I.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, I.verify = function(t) {
      if (typeof t != "object" || t === null)
        return "object expected";
      if (t.items != null && t.hasOwnProperty("items")) {
        if (!Array.isArray(t.items))
          return "items: array expected";
        for (let A = 0; A < t.items.length; ++A)
          if (!l.isInteger(t.items[A]))
            return "items: integer[] expected";
      }
      return null;
    }, I.fromObject = function(t) {
      if (t instanceof c.dot.Int32List)
        return t;
      let A = new c.dot.Int32List();
      if (t.items) {
        if (!Array.isArray(t.items))
          throw TypeError(".dot.Int32List.items: array expected");
        A.items = [];
        for (let e = 0; e < t.items.length; ++e)
          A.items[e] = t.items[e] | 0;
      }
      return A;
    }, I.toObject = function(t, A) {
      A || (A = {});
      let e = {};
      if ((A.arrays || A.defaults) && (e.items = []), t.items && t.items.length) {
        e.items = [];
        for (let o = 0; o < t.items.length; ++o)
          e.items[o] = t.items[o];
      }
      return e;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.Int32List";
    }, I;
  }(), g.Platform = function() {
    const I = {}, t = Object.create(I);
    return t[I[0] = "WEB"] = 0, t[I[1] = "ANDROID"] = 1, t[I[2] = "IOS"] = 2, t;
  }(), g.DigestWithTimestamp = function() {
    function I(t) {
      if (t)
        for (let A = Object.keys(t), e = 0; e < A.length; ++e)
          t[A[e]] != null && (this[A[e]] = t[A[e]]);
    }
    return I.prototype.digest = l.newBuffer([]), I.prototype.timestampMillis = l.Long ? l.Long.fromBits(0, 0, !0) : 0, I.create = function(t) {
      return new I(t);
    }, I.encode = function(t, A) {
      return A || (A = P.create()), t.digest != null && Object.hasOwnProperty.call(t, "digest") && A.uint32(
        /* id 1, wireType 2 =*/
        10
      ).bytes(t.digest), t.timestampMillis != null && Object.hasOwnProperty.call(t, "timestampMillis") && A.uint32(
        /* id 2, wireType 0 =*/
        16
      ).uint64(t.timestampMillis), A;
    }, I.encodeDelimited = function(t, A) {
      return this.encode(t, A).ldelim();
    }, I.decode = function(t, A) {
      t instanceof f || (t = f.create(t));
      let e = A === void 0 ? t.len : t.pos + A, o = new c.dot.DigestWithTimestamp();
      for (; t.pos < e; ) {
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
    }, I.decodeDelimited = function(t) {
      return t instanceof f || (t = new f(t)), this.decode(t, t.uint32());
    }, I.verify = function(t) {
      return typeof t != "object" || t === null ? "object expected" : t.digest != null && t.hasOwnProperty("digest") && !(t.digest && typeof t.digest.length == "number" || l.isString(t.digest)) ? "digest: buffer expected" : t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && !l.isInteger(t.timestampMillis) && !(t.timestampMillis && l.isInteger(t.timestampMillis.low) && l.isInteger(t.timestampMillis.high)) ? "timestampMillis: integer|Long expected" : null;
    }, I.fromObject = function(t) {
      if (t instanceof c.dot.DigestWithTimestamp)
        return t;
      let A = new c.dot.DigestWithTimestamp();
      return t.digest != null && (typeof t.digest == "string" ? l.base64.decode(t.digest, A.digest = l.newBuffer(l.base64.length(t.digest)), 0) : t.digest.length >= 0 && (A.digest = t.digest)), t.timestampMillis != null && (l.Long ? (A.timestampMillis = l.Long.fromValue(t.timestampMillis)).unsigned = !0 : typeof t.timestampMillis == "string" ? A.timestampMillis = parseInt(t.timestampMillis, 10) : typeof t.timestampMillis == "number" ? A.timestampMillis = t.timestampMillis : typeof t.timestampMillis == "object" && (A.timestampMillis = new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0))), A;
    }, I.toObject = function(t, A) {
      A || (A = {});
      let e = {};
      if (A.defaults)
        if (A.bytes === String ? e.digest = "" : (e.digest = [], A.bytes !== Array && (e.digest = l.newBuffer(e.digest))), l.Long) {
          let o = new l.Long(0, 0, !0);
          e.timestampMillis = A.longs === String ? o.toString() : A.longs === Number ? o.toNumber() : o;
        } else
          e.timestampMillis = A.longs === String ? "0" : 0;
      return t.digest != null && t.hasOwnProperty("digest") && (e.digest = A.bytes === String ? l.base64.encode(t.digest, 0, t.digest.length) : A.bytes === Array ? Array.prototype.slice.call(t.digest) : t.digest), t.timestampMillis != null && t.hasOwnProperty("timestampMillis") && (typeof t.timestampMillis == "number" ? e.timestampMillis = A.longs === String ? String(t.timestampMillis) : t.timestampMillis : e.timestampMillis = A.longs === String ? l.Long.prototype.toString.call(t.timestampMillis) : A.longs === Number ? new l.LongBits(t.timestampMillis.low >>> 0, t.timestampMillis.high >>> 0).toNumber(!0) : t.timestampMillis), e;
    }, I.prototype.toJSON = function() {
      return this.constructor.toObject(this, H.util.toJSONOptions);
    }, I.getTypeUrl = function(t) {
      return t === void 0 && (t = "type.googleapis.com"), t + "/dot.DigestWithTimestamp";
    }, I;
  }(), g;
})();
function V(g, I) {
  const t = Yg();
  return V = function(A, e) {
    A = A - (-5922 + -362 * 27 + -8069 * -2);
    let o = t[A];
    if (V.lpHXbw === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      V.jfRoJo = a, g = arguments, V.lpHXbw = !0;
    }
    const C = t[2162 + 47 * -46], B = A + C, n = g[B];
    return n ? o = n : (V.RIEwjE === void 0 && (V.RIEwjE = !0), o = V.jfRoJo(o, e), g[B] = o), o;
  }, V(g, I);
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return V(E - -435, n);
  }
  function A(B, n, a, Q, E) {
    return V(E - -359, Q);
  }
  function e(B, n, a, Q, E) {
    return V(B - 308, E);
  }
  function o(B, n, a, Q, E) {
    return V(Q - -20, B);
  }
  const i = g();
  function C(B, n, a, Q, E) {
    return V(n - -498, Q);
  }
  for (; ; )
    try {
      if (parseInt(e(789, 799, 799, 767, "3ox&")) / 1 + -parseInt(A(132, 100, 136, "mGlC", 119)) / 2 + parseInt(e(766, 786, 752, 781, "3lcM")) / 3 + -parseInt(C(-7, -18, 0, ")knc", -37)) / 4 + parseInt(t(23, "1a[[", 4, 43, 26)) / 5 * (-parseInt(A(132, 126, 116, "GOg^", 110)) / 6) + parseInt(e(758, 740, 759, 777, "[r8]")) / 7 * (-parseInt(o("&SlW", 432, 425, 425, 431)) / 8) + parseInt(e(759, 760, 778, 740, "BPH4")) / 9 * (parseInt(C(-51, -35, -21, "D68(", -30)) / 10) === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Yg, -126371 + 1 * -151399 + 647434);
async function nr() {
  const g = {};
  g[o("zi3K", 119, 91, 109)] = kC, g[i(-191, -179, -176, "3lcM") + "h"] = 256;
  function I(a, Q, E, r, s) {
    return V(r - 93, E);
  }
  function t(a, Q, E, r, s) {
    return V(E - 747, a);
  }
  function A(a, Q, E, r, s) {
    return V(E - 923, s);
  }
  const e = await window[i(-157, -144, -157, "zi3K") + "o"][I(553, 515, "2qUV", 535) + "e"][A(1398, 1381, 1377, 1367, "GX1n") + o("GX1n", 108, 111, 95) + "y"](g, !0, [I(589, 587, "g1p0", 570) + "pt", o("*fJ)", 100, 126, 121) + "pt"]);
  function o(a, Q, E, r, s) {
    return V(r - -364, a);
  }
  function i(a, Q, E, r, s) {
    return V(a - -640, r);
  }
  const C = Uint8Array[A(1396, 1409, 1390, 1377, "lgs3")](Array(1591 + -3461 * -1 + 4 * -1259)[i(-161, -165, -159, "3fOa")](-3218 + -2 * -1609)), B = window[t("bmmd", 1210, 1199) + "o"][o("h1(r", 82, 79, 98) + o("BPH4", 69, 63, 83) + o("W@&U", 124, 116, 111)](C), n = {};
  return n[o("T$]i", 124, 122, 118)] = e, n.iv = B, n;
}
async function Qr(g) {
  const { iv: I, key: t } = await nr(), A = {};
  A[i("&SlW", -6, -4)] = kC, A.iv = I;
  function e(Q, E, r, s, d) {
    return V(E - 44, r);
  }
  function o(Q, E, r, s, d) {
    return V(r - 505, Q);
  }
  function i(Q, E, r, s, d) {
    return V(r - -488, Q);
  }
  const C = await window[o("BUjR", 967, 981) + "o"][o("BPH4", 966, 977) + "e"][o("z5ry", 972, 991) + "pt"](A, t, g), B = await window[e(528, 512, "lgs3") + "o"][e(511, 510, "jjaF") + "e"][i("mPm#", -20, -17) + o("1a[[", 958, 969)](e(492, 488, "3lcM"), t);
  function n(Q, E, r, s, d) {
    return V(s - -424, E);
  }
  const a = {};
  return a[n(45, "3ox&", 10, 32) + "ge"] = C, a[e(518, 518, "3fOa")] = B, a.iv = I, a;
}
function Yg() {
  const g = ["W57cP8ocC0jRW6vshmo1gG", "yd3cT0FcTq", "hCk+amkBBdvmmmkNs8ouW70", "DxFcMYHyWPpcHehcNCoOWQBcJW", "AmkiD307", "WQBcI8kmWPBdHsRdGa", "iHKOcCkPW5C+W53dSmoNW6X8zW", "WQ/dMmonWRaW", "WRBcT8o1oqTAjmkPWQmNWQhcOYi", "zwf9qq", "prBcJJeUW5eZvHpcTmkKntu", "W6qZgIddKW", "x1dcHCo9", "wLdcK8oGWOy", "W7NcKmogWOmzqCob", "WOZcSuazEWhdH8oCW4dcTqrBhG", "W4KxW6XJcq", "F1VcLmkmya", "DfNcR8kx", "W7OYWQO", "W6tcLHDQcW", "e8oyWQ/cII0", "WPv9sCocwW", "WQhdI8oUW4VcPKldMCofDuvefW", "W7C+WR8u", "k8kNWQHsmCkoW5/dTu/cNvKTuG", "oMddTa3dPCkJWR0CfczK", "oq5J", "EuRcU8kcWRC", "W5BcSspdUW", "fWBcIelcOq", "iGK9ESoE", "W4VcMSkgt8k6Chf4BSkxfYu", "W4ZdTXjCjW", "qLFdNGpdOqy5W61zW7b5W6FdHW", "pIxdLa", "WOVdPhRdLSkHW4a6jgu", "qfFdN3JcS09JW5DJ", "yKRcMCkvwG", "W6bGW4tdJatdN37cSa", "ichdJxCA", "W65TWP/cQvNdQ2lcVreVW7q", "nrFcLCkTAmkFr8kM", "yCouWRTCWRO", "oXNcIJeNWQLLwIJcS8kQ", "BSkzFfmS"];
  return Yg = function() {
    return g;
  }, Yg();
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return xA(B - -93, a);
  }
  function A(B, n, a, Q, E) {
    return xA(a - -745, n);
  }
  function e(B, n, a, Q, E) {
    return xA(a - -669, n);
  }
  const o = g();
  function i(B, n, a, Q, E) {
    return xA(B - -249, Q);
  }
  function C(B, n, a, Q, E) {
    return xA(B - -970, a);
  }
  for (; ; )
    try {
      if (-parseInt(C(-538, -550, "N3Bh", -532, -544)) / 1 + -parseInt(i(171, 167, 184, "RF!#", 167)) / 2 * (-parseInt(t(320, 311, "AqeM", 308, 312)) / 3) + parseInt(A(-335, "&Th6", -333, -348, -338)) / 4 * (-parseInt(t(330, 325, "5Ohb", 326, 343)) / 5) + parseInt(t(316, 302, "4SLf", 331, 323)) / 6 + parseInt(i(182, 168, 187, "87vw", 169)) / 7 * (parseInt(e(-262, "rA0F", -262, -273, -258)) / 8) + -parseInt(A(-317, "1JOO", -312, -310, -303)) / 9 + -parseInt(A(-342, "oJ75", -337, -338, -336)) / 10 * (-parseInt(t(326, 340, "m@E7", 327, 314)) / 11) === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(vg, 34 * -18867 + 201076 * -1 + 1167435);
function xA(g, I) {
  const t = vg();
  return xA = function(A, e) {
    A = A - (-2 * -1469 + -1 * -2759 + -5292);
    let o = t[A];
    if (xA.nnVYPr === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      xA.gHjHKx = a, g = arguments, xA.nnVYPr = !0;
    }
    const C = t[251 * 39 + -1827 + 6 * -1327], B = A + C, n = g[B];
    return n ? o = n : (xA.vqOiTV === void 0 && (xA.vqOiTV = !0), o = xA.gHjHKx(o, e), g[B] = o), o;
  }, xA(g, I);
}
function ar(g) {
  function I(i, C, B, n, a) {
    return xA(a - -967, B);
  }
  function t(i, C, B, n, a) {
    return xA(B - -641, a);
  }
  const A = new ArrayBuffer(g[o("&@[l", -560) + "h"]), e = new Uint8Array(A);
  for (let i = 7733 + 6927 * -1 + 26 * -31, C = g[o("&Uzz", -550) + "h"]; i < C; i++)
    e[i] = g[I(-554, -548, "N3Bh", -555, -542) + t(-223, -208, -217, -218, "5Ohb")](i);
  function o(i, C, B, n, a) {
    return xA(C - -971, i);
  }
  return A;
}
function vg() {
  const g = ["W63dKYdcK8kx", "sCk3iv52", "k8kkuSkEW5VdOx0Fxmov", "WO9nBgXSW7pcQwfMW6dcH8oAW64", "W5ddJ8kMcmoDWRGJpaJdKW", "W5xdHConCbS0nmku", "yKldUmkBla", "lCkhWR3dISk3WRhcRCowyfm", "hCoQCrKeWRrcjCoSW6vX", "W5ZdRxnYhCkEW7RdLHtcU8k1W4LB", "lSkjumkwWORcOt8xvmoQWR/dGZu", "qmoBWPxcTmofpSkOfH7cOa", "WOzmW4ddLqRcPSoPWOBcSa", "CSodWPSYWOxdSSo/W79XFG", "W6yRl8omWQu5W7tcHa", "vCoUamoOW7WjcSkxyGKQjN4", "vmkuWR9CoM3dHLO5jfiKW4S", "hSkoW4ldOmof", "W7emW6ldMsyMWRagpW3cMG", "WQxcRb04fLJcNmkPAG", "e8oFWRJdPCkhmKZdJZu", "zgtcR8kUW4q", "lKSflf4", "DXjcvGpcKaBdKSkiqmoA", "FCofWP81W5xdJCoEW5r0FmoO", "WOFdKmocW5brW4ZdTCoiWRWnpqBcIG", "W4z1ztldJ8k9WO3cSsje", "rCo5a8kBjG", "W5uiWP3dSG", "WRpcGNdcS8koWPZcVbfD"];
  return vg = function() {
    return g;
  }, vg();
}
function AA(g, I) {
  const t = Ug();
  return AA = function(A, e) {
    A = A - (-1 * 1671 + 3739 * 2 + 2 * -2822);
    let o = t[A];
    if (AA.agBYXJ === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      AA.zGszsB = a, g = arguments, AA.agBYXJ = !0;
    }
    const C = t[-201 * -27 + 10 * -106 + 397 * -11], B = A + C, n = g[B];
    return n ? o = n : (AA.wCEXfX === void 0 && (AA.wCEXfX = !0), o = AA.zGszsB(o, e), g[B] = o), o;
  }, AA(g, I);
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return AA(E - -101, Q);
  }
  function A(B, n, a, Q, E) {
    return AA(n - 394, a);
  }
  function e(B, n, a, Q, E) {
    return AA(n - 8, a);
  }
  function o(B, n, a, Q, E) {
    return AA(Q - 543, a);
  }
  const i = g();
  function C(B, n, a, Q, E) {
    return AA(B - -847, n);
  }
  for (; ; )
    try {
      if (parseInt(C(-464, "X^*2", -369, -483, -402)) / 1 + parseInt(C(-453, "ieDr", -475, -357, -455)) / 2 * (parseInt(A(726, 613, "AI^z", 500, 712)) / 3) + -parseInt(e(189, 253, "Hzrq", 292, 173)) / 4 + parseInt(t(89, 261, 230, "pHRF", 175)) / 5 * (parseInt(t(204, 279, 249, "Diio", 241)) / 6) + -parseInt(e(317, 235, "UTEf", 329, 157)) / 7 + parseInt(o(699, 845, "2ie%", 776, 667)) / 8 + -parseInt(t(224, 14, 109, "PR3)", 113)) / 9 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Ug, 164644 + 981 * 38 + -66338);
function xr() {
  function g(a, Q, E, r, s) {
    return AA(E - -131, a);
  }
  function I(a, Q, E, r, s) {
    return AA(E - 769, s);
  }
  const t = I(1147, 945, 1052, 948, "pHRF") + I(1172, 1048, 1155, 1134, "JQ1]") + A(649, 712, 605, 711, "[N)t") + A(703, 797, 735, 771, "JQ1]") + A(716, 684, 718, 831, "f2GY") + I(1051, 1130, 1033, 1008, "PR3)") + g("u6xw", 235, 166) + A(607, 576, 518, 599, "9j%!") + g("Hzrq", 138, 90) + g("]^Yr", 62, 40) + A(746, 749, 663, 823, "auu$") + I(985, 1026, 1055, 984, "u6xw") + B("%MT@", 640, 712, 650, 707) + I(964, 1016, 937, 972, "6@92") + n(-648, -591, -526, -556, "3wGJ") + g("f2GY", 206, 119) + g("kEWr", -21, 35) + g("RZer", 128, 97) + A(768, 775, 730, 837, "RqGP") + B("b[^v", 840, 898, 803, 788) + g("JQ1]", 276, 212) + A(767, 685, 656, 687, "Mg0I") + B("f2GY", 647, 732, 646, 747) + n(-381, -458, -479, -427, "u6xw") + n(-582, -506, -396, -489, "PR3)") + n(-434, -464, -503, -486, "UTEf") + B("0kpA", 720, 739, 651, 637) + g("%eC5", 353, 254) + n(-323, -455, -466, -425, "Hzrq") + g("kEWr", 158, 256) + g("Hzrq", 173, 200) + A(616, 557, 621, 650, "auu$") + g("auu$", 119, 151) + I(1012, 936, 1039, 1006, "AI^z") + I(1129, 1120, 1148, 1140, "f2GY") + A(829, 814, 796, 835, "psNk") + A(713, 647, 788, 666, "Mh*O") + A(678, 583, 640, 576, "u6xw") + n(-292, -429, -367, -403, "lpXN") + I(941, 1052, 1004, 1050, "3wGJ") + A(644, 643, 545, 651, "6@92") + B("ZvdP", 701, 659, 550, 645) + I(1220, 1227, 1142, 1246, "Mh*O") + g("0kpA", 114, 186) + A(796, 711, 773, 793, "y^pK") + n(-619, -648, -549, -567, "0kpA") + B("ieDr", 735, 655, 644, 647) + A(612, 655, 598, 521, "PR3)") + n(-468, -546, -456, -496, "Y99k") + n(-522, -686, -653, -623, "9j%!") + A(818, 873, 847, 842, "ieDr") + g("Diio", 19, 87) + A(722, 808, 610, 609, "b[^v") + A(801, 734, 717, 795, "SXXW") + g("3wGJ", 149, 39) + A(747, 746, 748, 808, "[N)t") + I(1155, 1091, 1107, 994, "ieDr") + g("ZvuY", 78, 172) + B("kEWr", 548, 505, 552, 587) + A(786, 799, 825, 891, "Hzrq") + g("AoUH", 105, 98) + I(942, 869, 936, 848, "Wfpa") + A(756, 787, 701, 839, "X^*2") + B("UTEf", 693, 632, 631, 598) + I(1021, 1144, 1081, 1065, "JQ1]") + I(894, 986, 991, 1029, "%MT@") + n(-631, -586, -643, -548, "3wGJ") + A(634, 567, 518, 659, "o#UU") + g("Mh*O", 288, 206) + n(-692, -549, -602, -615, "AI^z") + n(-343, -468, -453, -441, "2ie%") + B("3wGJ", 691, 696, 757, 698) + A(751, 676, 733, 762, "psNk") + A(663, 766, 743, 607, "jx0Q") + B("VulK", 604, 568, 563, 575) + I(956, 958, 1021, 936, "%eC5") + A(615, 701, 612, 639, "6@92") + g("PR3)", 109, 74) + I(1102, 975, 1075, 1148, "SXXW") + A(697, 785, 733, 656, "X^*2") + B("RqGP", 632, 533, 609, 609) + A(630, 600, 556, 663, "y^pK") + B("X^*2", 812, 692, 768, 740) + A(603, 514, 660, 557, "f2GY") + n(-387, -378, -529, -467, "AI^z") + g("3wGJ", 95, 188) + g("XmG&", 155, 84) + n(-605, -618, -447, -521, "RZer") + A(795, 842, 707, 750, "p!3M") + A(626, 700, 557, 541, "b[^v") + B("Wfpa", 685, 599, 769, 696) + n(-490, -490, -336, -421, "o#UU") + B("f2GY", 482, 638, 669, 583) + A(639, 654, 601, 551, "psNk") + B("jx0Q", 546, 693, 665, 620) + A(675, 586, 765, 715, "g([Z") + g("9j%!", 87, 197) + A(611, 520, 703, 533, "kEWr") + I(1132, 1136, 1049, 996, "ieDr") + B("RZer", 853, 818, 790, 741) + I(1081, 930, 1012, 1116, "PR3)") + A(772, 672, 738, 841, "6@92") + I(1165, 1208, 1136, 1208, "Sqgv") + I(961, 999, 964, 918, "lpXN") + B("oVQp", 762, 663, 613, 690) + I(975, 1111, 1031, 1122, "%MT@") + I(1045, 1091, 1017, 909, "y^pK") + B("ieDr", 726, 836, 763, 745) + B("y^pK", 486, 560, 668, 576) + g("PR3)", -44, 72) + g("u6xw", 122, 157) + g("PR3)", 223, 240) + B("JQ1]", 708, 606, 757, 675) + A(778, 795, 779, 868, "%eC5") + g("pHRF", 325, 251) + A(799, 697, 851, 809, "VulK") + B("Diio", 671, 671, 773, 677) + g("oVQp", 149, 258) + A(691, 605, 634, 643, "Y99k") + n(-649, -647, -591, -570, "0kpA") + A(806, 904, 851, 851, "aBTw") + A(727, 637, 627, 742, "Mg0I") + n(-345, -349, -495, -452, "UTEf") + g("SXXW", 156, 202) + A(650, 737, 651, 534, "AoUH") + B("psNk", 747, 701, 582, 640) + A(760, 820, 766, 698, "RqGP") + n(-423, -527, -472, -412, "]^Yr") + n(-327, -483, -282, -394, "oVQp") + I(927, 995, 1041, 1126, "[%k[") + n(-563, -465, -672, -571, "(I(Y") + I(1145, 1055, 1092, 980, "pHRF") + g("pHRF", 46, 95) + g("PR3)", 220, 228) + B("Hzrq", 663, 639, 589, 634) + n(-507, -553, -561, -488, "ZvdP") + n(-391, -458, -341, -423, "PR3)") + B("3wGJ", 814, 843, 694, 746) + I(1158, 1190, 1123, 1097, "2ie%") + A(814, 864, 709, 749, "o#UU") + g("]^Yr", 168, 154) + n(-407, -398, -480, -477, "Mh*O") + A(613, 687, 558, 639, "RZer") + A(646, 582, 751, 541, "auu$") + n(-680, -489, -670, -583, "p!3M") + A(764, 826, 862, 817, "0kpA") + B("6@92", 637, 649, 615, 689) + n(-533, -678, -493, -605, "u3(6") + n(-606, -432, -564, -492, "y^pK") + g("X^*2", 137, 174) + A(807, 709, 900, 881, "2ie%") + n(-423, -518, -580, -480, "ZvdP") + g("g([Z", 156, 92) + n(-614, -597, -589, -578, "%eC5") + I(1029, 967, 1005, 1001, "(I(Y") + g("6@92", 164, 79) + I(979, 962, 1061, 1049, "AI^z") + n(-517, -447, -413, -516, "pHRF") + A(803, 776, 776, 802, "Mh*O") + I(968, 987, 1059, 1133, "[N)t") + I(1060, 1086, 976, 1043, "AI^z") + A(696, 789, 640, 750, "ZvdP") + I(1021, 865, 969, 1e3, "f2GY") + A(705, 691, 747, 801, "g([Z") + n(-560, -592, -505, -510, "ZvuY") + A(759, 827, 862, 750, "Y99k") + n(-405, -465, -344, -448, "o#UU") + g("Y99k", 130, 53) + B("AI^z", 621, 657, 560, 577) + I(1087, 1055, 1125, 1098, "Diio") + g("u3(6", 328, 239) + I(1101, 1151, 1042, 981, "RZer") + g("SXXW", 37, 138) + I(1229, 1226, 1141, 1100, "XmG&") + n(-643, -636, -490, -601, "psNk") + g("Mh*O", 166, 243) + n(-612, -569, -625, -526, "UTEf") + I(896, 857, 958, 994, "y^pK") + I(1138, 1057, 1116, 1075, "psNk") + A(791, 760, 890, 736, "auu$") + n(-398, -364, -301, -399, "Mh*O") + n(-388, -393, -539, -483, "RqGP") + B("XmG&", 647, 731, 613, 659) + g("Sqgv", 87, 101) + I(979, 1038, 966, 1073, "oVQp") + A(734, 763, 817, 672, "kEWr") + n(-528, -455, -458, -451, "aHNq") + g("9j%!", 75, 54) + I(1047, 1080, 1096, 1187, "psNk") + B("[%k[", 526, 515, 529, 589) + n(-331, -316, -304, -406, "6@92") + n(-515, -536, -599, -593, "[N)t") + B("g([Z", 526, 598, 705, 626) + n(-551, -404, -394, -455, "AoUH") + I(944, 893, 959, 1040, "o#UU") + g("ZvuY", 65, 115) + g("AoUH", 183, 259) + B("lpXN", 715, 537, 603, 630) + n(-638, -583, -593, -527, "2ie%") + g("f2GY", -29, 68);
  function A(a, Q, E, r, s) {
    return AA(a - 438, s);
  }
  const e = window[B("o#UU", 759, 556, 646, 664)](t), o = window[g("W6Y6", 322, 221)](e), i = ar(o), C = {};
  C[n(-504, -689, -672, -611, "ZvuY")] = NC, C[g("auu$", 320, 210)] = Fa;
  function B(a, Q, E, r, s) {
    return AA(s - 396, a);
  }
  function n(a, Q, E, r, s) {
    return AA(r - -787, s);
  }
  return window[g("%MT@", 164, 123) + "o"][n(-493, -544, -521, -471, "ieDr") + "e"][I(1129, 1113, 1056, 976, "b[^v") + n(-487, -525, -529, -513, "AI^z")](n(-435, -505, -514, -545, "3wGJ"), i, C, !0, [A(816, 714, 815, 794, "[N)t") + "pt"]);
}
function Ug() {
  const g = ["W7qriCkRWQq", "gSoVA2/cMG", "WRNdKx4dW4G", "dubDmHO", "WPldKmosWQn8", "q8koWQahka", "WRhcJKhcMG", "pdaLEe0", "WO8dCCkFWQG", "EXRdN8kHWPq", "WO3cGZBdObi", "WONdILGqW7W", "W6eodcxcVW", "WPnEFCo4yKxdJa", "W7lcIvXUW7a", "tSo0WRJcVXu", "pmoCv8o0WQq", "dMCNWRDo", "mSkJW6pcGCkx", "WRdcKq3dRxy", "W49GEmk7W5a", "pL1ymea", "WRFcSWJdMd4", "smo5dvTe", "lCojA8kVra", "xeNcMCkOW4e", "W74nq8kyW70", "WQ7dOHRdUSk7", "o8kOi8oWWPq", "zHzXW4uI", "dInpWQXz", "gCodACoiWQy", "t8oRf8kQWRW", "WOVdGCo8WPnC", "eCkjW73dUSk0", "W5BdKCkYWPnD", "paOPwx0", "WQxdJeDGW4y", "WRapkSkPWPm", "preis20", "AZazy1C", "k8oExCo1DG", "ltDmnqy", "urWIpWK", "W5tcV8kWW78bmMxcQCovkbxdUCkV", "kCoVWRtcIeu", "dHTyW5KP", "uSofWPG7gW", "WRFdOexdMSoL", "W5VdPgCfW6tdP20", "xCoMWQKDrG", "W7Dydt3cVa", "W5hcGmkoW4Kh", "W7roa8kFBG", "W4rEzCoqqq", "W6GEzCkcBq", "Bt8PW6zL", "oSkYzSoOW5pcJCoFW4hcJaZcPLyz", "zSk7WPqyga", "grPyiH0", "W7DWzmoOCG", "W6mHi8o2WPy", "dfNdVtddQW", "CJJcVtL5tej5WQTnAcy", "nLZdKmk7W58", "WRCcqSovWPG", "gtTBW55g", "W7nuzCodAW", "WOLskr3cQq", "W7CHo8kQWO4", "WQRdNSo7WQHT", "CCkqWPKlsq", "W7qtg8oY", "WR/dQCowWRz6", "F8oBAmotWPq", "WO0UEKddNchcIdVcLmoLWO0O", "W6NcU0hdIG4", "W7a9W6r3W5ldHYqBcb9vza", "WPBcOqJdJb4", "aaaGWPJcNG", "mJCMWOSS", "E013W7ddKa", "xrG1sGC", "W5/cVL1zWPS", "WOlcHSkdW5Wy", "W7rHlCoVW5yVW77cUa5tWOddGG8", "ow9Re0q", "W6KchCo+", "xYihWPtcNG", "hNfxlmoP", "deJdNfr6", "wmk5imktWRm", "W5hcNmkiW7G0", "kmkmWQdcOh8", "WQddJCogWPjK", "k8kyW7zHqW", "xmkrWOitlW", "W69pzCodtq", "W4uGqSkE", "WPCIxmoBWPG", "WOxdILODW60", "yJ9GWOGf", "tSo9Fe5f", "w8ksW7yBcG", "WPZdQK0R", "fCoUs2RdGW", "pKKRW6ydWQ8OzGFdSGK", "WO7cUK/dIIG", "ds96W4Ts", "n8ojW6DqAq", "eqTYWOVdVG", "WQNdOLpcP8o8", "WPWmiSkXWRi", "wY90WPHN", "gCk8W6tcP8kM", "gCous0ZdPG", "WPhdGSoCWRTp", "iSk6W5RcJCkX", "WQ7cOSoyWODU", "WOrHWQ8tWQu", "wCojq8kDAW", "W4pcRh5CW6W", "WORcKM5NW4C", "fvuqqf4", "WPZcHHldOCki", "WOhcTGpcUGO", "EMPNkN8", "WQNdL8oyWQH+", "WRZdQSovW7r+", "ztqfWPJcTW", "auRcTXVcSa", "tSoFzCkjWRi", "W7uYqmkQWPq", "WPFcG3ZcSIG", "t0KGdtG", "ohX0h8kp", "WOiMA8oaWPK", "aXGyWPJcQa", "WQevsSoPWQC", "kSohq8kcCa", "kCkryv3dGW", "WRBcNSksW4m9", "bCk9W51dFW", "hSoCt8okWQ4", "BwaJW40RW6NdNSksrSo4g8kt", "WQJdMdK+WPFcUH/dJtLMW7u", "maPdW4ZdLa", "tCoRW7iWvW", "kbnroCkd", "W4atnCowWP8", "WORdTbKwW78", "WQJcQt5hW4G", "zbW3dWK", "FsnZWPSf", "oJT1WOPM", "A8olWOuSamkupmofW6tdR8k0W7K", "u8oLW7qghW", "g8oHzSkUWPy", "z8kCW4ZcHIy", "WPnhW6qpW5e", "EcCiptC", "W7PSkcBcGW", "FGnWlsy", "WPKUDmo8WR4", "As40t0S", "sCoshCkgWR4", "WQNdKaBcPLm", "fmoVFvVdTa", "drr0WOVdMG", "W4G9D8k0W5W", "mbeZFgW", "WQ04AmkX", "W4ZcGWFdNSo/sIRcNxu", "hCksW5vazq", "cLXnt8k9", "ESkEWPmBba", "bfldK0yP", "jmkhtmoKWPO", "W4jldHJcLq", "kr1YWOhdVW", "W6Sicmo6WQy", "kWb3WR5r", "WPD9mCo7", "WPidCCktWRu", "gdVdIMWe", "WP1FpmkQuHqTmc8", "WPldV0JdGSkC", "l8kLW5tdHCk1", "WOlcSJldSYa", "WRpdR8olWQqb", "WPFdM8k7WO1v", "DW3dQCoNWOW", "W61ll0pcUW", "WQy5sSopWPG", "WQRdGSkXWOnI", "cSoeyetdRG", "WPqzhConW6W", "pwBdVcpdGW", "aCkpemoAWRu", "aeddQKyT", "W4y7bJVcIG", "WRtdNCorWQT/", "DSkVWRVcT2y", "fSo5DIldVG", "CSoMrvBdRa", "pSozELRdIq", "W5agECk5WQi", "b8kwWR7dQ3xcQmk+n1RdJaBdPCkW", "E8oZzmk1EW", "etXvWPmQ", "kZTWW5pdVG", "dHacqNC", "ze5tW6nS", "xba2s8oTgtibbri9hW", "DLJcTCkSW6e", "iW1qCYu", "y8kvW4bezG", "Efraa0i", "dmkAsYhdJa", "WPpdMGhdUSkG", "gaG+tHS", "oSotmCoUWPq", "jmk1W4hcQmkI", "WQVcHg3dKmkp", "DKWvWOJcIxxdJtXzWP7dTI0", "DCkBgYpcP8khsJLYW4CYW4G", "bCokW7pcTIS", "bZrVWOXS", "hhDIuNW", "o0tdJrBcKG", "dvq4yeq", "zSo/WRRcLsS"];
  return Ug = function() {
    return g;
  }, Ug();
}
async function rr(g) {
  const I = await xr();
  function t(o, i, C, B, n) {
    return AA(i - 853, C);
  }
  function A(o, i, C, B, n) {
    return AA(o - 773, i);
  }
  const e = {};
  return e[A(1030, "3wGJ")] = NC, window[A(971, "aBTw") + "o"][A(1029, "kEWr") + "e"][t(1123, 1177, "f2GY") + "pt"](e, I, g);
}
function Wg() {
  const g = ["W5bmmZ4R", "Fr3dUJziWOJdPhSkm1epWPa", "cmo4WOddJmoGcxKjW58EW5K", "WQnwuXFdSCkrW7tcSSo9W6q", "WRyFnCoiErDJWRGnW53dOSk4WO4", "j1GD", "sSoCbKrJWP7cKmk6W60", "CqmDhmoyb8oObw3dISkdESoA", "WOBdLSoZe34ebvCfaCoRmXtcIW", "kfJdLCokqZPjiNRdGCkbWP4FWRG", "kqDfbJdcKNBcOSoMoSkQWO8G", "EwxcPb0IW74JW4dcJq", "WOVcSwldSSkcW5NcHNxdSf0DwCoL", "WOBdKSoWghabbHiGm8odlbW", "WOJcT2pdVCkmW53cG1RdHhy+ESog", "rCorhmoxwmoCWPK", "f8kpdw1VWOBcPCo8WOacdW", "ifRdLCk/nvOYvu0", "WRdcN8oNWRTOlta", "tmoCbJLjWQlcMCkYW7lcIq", "WR9Bq8oDW67cM8kFaCkY", "W4zcfSk5paXvWO8amCkUhSkV"];
  return Wg = function() {
    return g;
  }, Wg();
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return uA(n - -188, E);
  }
  function A(B, n, a, Q, E) {
    return uA(E - -199, n);
  }
  function e(B, n, a, Q, E) {
    return uA(E - 590, B);
  }
  function o(B, n, a, Q, E) {
    return uA(n - 202, a);
  }
  const i = g();
  function C(B, n, a, Q, E) {
    return uA(E - 188, n);
  }
  for (; ; )
    try {
      if (-parseInt(t(178, 177, 170, 170, "5LT%")) / 1 * (-parseInt(e("5LT%", 972, 964, 960, 964)) / 2) + parseInt(e("Qu7I", 955, 966, 958, 957)) / 3 + -parseInt(e("EZnu", 957, 946, 947, 956)) / 4 * (-parseInt(C(569, "Agbh", 560, 554, 558)) / 5) + -parseInt(o(573, 563, "%f02", 556, 567)) / 6 * (parseInt(t(191, 194, 203, 187, "odtH")) / 7) + parseInt(t(203, 193, 185, 195, "pFI8")) / 8 + parseInt(C(553, "l#l@", 567, 558, 557)) / 9 + -parseInt(A(187, "DQ6r", 189, 173, 178)) / 10 === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Wg, 726607 * 1 + -884783 + 697330);
function uA(g, I) {
  const t = Wg();
  return uA = function(A, e) {
    A = A - (-5132 + 122 * 27 + 2199);
    let o = t[A];
    if (uA.OGyqFT === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      uA.MJIkmf = a, g = arguments, uA.OGyqFT = !0;
    }
    const C = t[6714 + -674 * 5 + 76 * -44], B = A + C, n = g[B];
    return n ? o = n : (uA.NQWsEE === void 0 && (uA.NQWsEE = !0), o = uA.MJIkmf(o, e), g[B] = o), o;
  }, uA(g, I);
}
async function Er(g) {
  const { iv: I, key: t, message: A } = await Qr(g), e = await rr(t), o = {};
  o[i(-459, -461, -468, -465, "7Y8r")] = e, o.iv = I, o[i(-477, -465, -473, -484, "e*sc") + "ge"] = A;
  function i(C, B, n, a, Q) {
    return uA(n - -841, Q);
  }
  return o;
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return rA(B - -421, a);
  }
  function A(B, n, a, Q, E) {
    return rA(n - 555, B);
  }
  function e(B, n, a, Q, E) {
    return rA(E - -866, B);
  }
  function o(B, n, a, Q, E) {
    return rA(E - 115, n);
  }
  const i = g();
  function C(B, n, a, Q, E) {
    return rA(n - -596, B);
  }
  for (; ; )
    try {
      if (parseInt(o(593, "#CBm", 604, 599, 601)) / 1 * (-parseInt(o(610, "l(zP", 627, 613, 618)) / 2) + parseInt(o(606, "Cw@b", 599, 601, 589)) / 3 + -parseInt(o(588, "rDO)", 595, 593, 599)) / 4 * (-parseInt(e("Fyis", -400, -398, -408, -393)) / 5) + -parseInt(A("PAzU", 1050, 1034, 1048, 1042)) / 6 * (parseInt(t(50, 65, "dH9V", 64, 53)) / 7) + parseInt(A("6UoK", 1045, 1053, 1033, 1054)) / 8 + -parseInt(o(616, "L(iw", 622, 615, 617)) / 9 * (parseInt(t(78, 69, "rio!", 88, 83)) / 10) + parseInt(C("ryLc", -100, -86, -110, -98)) / 11 * (-parseInt(t(66, 67, "TUQ&", 56, 60)) / 12) === I) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Hg, -305004 + 604310 * 1);
function Hg() {
  const g = ["W5zbgCkTxCkFaZpdIrWEuq", "W6xdPSo8AmoE", "yCoGWORdLcfFsZe", "W5FcTSoz", "uCooWO9lgJTeWR0HfWC", "uCkPAW", "WPyXW5VdOSoy", "WQdcVa1Dra", "W61YWQ3dRCk9x8kPW7L5WQfWW6W", "sSoMu8kzW4/dRdrufa", "ftxdN8kTWOKOW7NcMbTRma", "WPtdVCoCWOOpdgJdUCkd", "D3dcIa", "WRhdOIWdWR0rWRxcT8oRhq", "WQFcT8kQdCktj3pcL8kwrSozDCot", "WRBdQejuWQe0WOlcIa", "qCk1WO/dRq", "W49LcmkGka", "WQpcSmkTc8ktlsxcICkyuSonua", "WQutBqngW6iKfCkUWQK", "W4PxWRLuW7PjCmkwkJPd", "e0qdwSoUESojrSoVhSo8WPKa", "fSoZoKxcQmk/W4VcLcm1WRNdHSoZ", "bYdcGColWOdcTKL/gmooW6ddOq", "WR8SW7/cUmo3", "AI0+twJdRmoXW5lcKmkn", "WO7dV2ddN1xdJCk2WOC", "q8kPWQJcUSkwbSk+Dq", "WO84pSknB8oiW5xcOW", "ymoQW4xcOKXYAGyrd8oP", "eblcM8o/pZ3dS8oTW59z", "WPOvW64n", "WRBdPvfnWO8CWP/cPa", "o8ospdVcNwPOWOxdOxfRpCkz", "W5xdISknWP4V"];
  return Hg = function() {
    return g;
  }, Hg();
}
function rA(g, I) {
  const t = Hg();
  return rA = function(A, e) {
    A = A - (3389 + 1 * -2629 + 1 * -289);
    let o = t[A];
    if (rA.tPUjLD === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      rA.ROVkQE = a, g = arguments, rA.tPUjLD = !0;
    }
    const C = t[23 * -106 + -8912 * -1 + -3237 * 2], B = A + C, n = g[B];
    return n ? o = n : (rA.GQFQYn === void 0 && (rA.GQFQYn = !0), o = rA.ROVkQE(o, e), g[B] = o), o;
  }, rA(g, I);
}
async function sr(g) {
  function I(o, i, C, B, n) {
    return rA(n - 425, C);
  }
  function t(o, i, C, B, n) {
    return rA(n - 980, o);
  }
  const A = await window[I(916, 895, "JF*[", 920, 907) + "o"][I(901, 910, "G)OW", 916, 900) + "e"][e(838, 823, 824, "rDO)") + "t"](t("X4*6", 1459, 1468, 1479, 1463), g);
  function e(o, i, C, B, n) {
    return rA(C - 324, B);
  }
  return Array[I(887, 903, "ryLc", 901, 897)](new Uint8Array(A))[e(797, 794, 803, "H*@i")]((o) => o[t("y@4J", 1481, 1476, 1468, 1473) + I(903, 916, "G*oj", 927, 913)](-5113 + -1 * -2601 + 2528)[t("6UoK", 1456, 1448, 1463, 1457) + I(892, 895, "7L5r", 912, 906)](-2039 + -1 * -4682 + -139 * 19, "0"))[e(819, 815, 816, "xZDL")]("");
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return FA(B - 712, a);
  }
  function A(B, n, a, Q, E) {
    return FA(Q - -702, n);
  }
  function e(B, n, a, Q, E) {
    return FA(B - 612, n);
  }
  var o = g();
  function i(B, n, a, Q, E) {
    return FA(E - -815, a);
  }
  for (; ; )
    try {
      var C = parseInt(A(-199, "@C4#", -199, -194, -184)) / 1 + parseInt(A(-195, "CQO&", -188, -195, -188)) / 2 + -parseInt(A(-205, "vU]6", -200, -202, -210)) / 3 * (-parseInt(e(1109, "xArc", 1115, 1106, 1110)) / 4) + -parseInt(e(1123, "q1(Z", 1124, 1113, 1123)) / 5 + -parseInt(t(1210, 1219, "xArc", 1207, 1202)) / 6 * (parseInt(i(-315, -312, "K6y5", -315, -309)) / 7) + -parseInt(A(-202, "xg6U", -194, -199, -205)) / 8 * (parseInt(A(-183, "vU]6", -184, -193, -191)) / 9) + -parseInt(t(1216, 1219, "yent", 1206, 1214)) / 10;
      if (C === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Kg, -822897 + -18583 * -59);
function Kg() {
  var g = ["WRdcRmkUi0ZdMfpcTGdcVbve", "WRVdUmoBW7HqWOSczWS", "sCoxWOWoWPBcTJ7cMLldGmkhhcm", "mXXdW5hdOYdcKmo1bmkSWO0", "W7fRaGZdRZlcRYPzahZcSNK", "v8kEW6FcM8kuk2JdOae", "uCkAW6ddV8osdxBdQYmKbG", "h8k1W6ldHSoGbCo1WQ3cISkgu28", "DSoMWPCiWQRdVCo3W6JdGhRcJW", "WQZcL8oGCqP0nmk4rJ7dNa", "rCosW4DaW7ZdR0lcUq", "pmoCWORdKLNcJ2FdMmoaW5fVWOVdVa", "W6eIvZddJtnvW7ldULRcK8opqW", "lI7dGeefWO/dJCo+WPRdOIFcRa", "e8k1WQJcGmkpx8o1WOO", "WRRdV8osWPOvW5WeFdBdL8kUeq", "W4HsW7ZdO8kZzSo5DHKKbf0", "FSkBW45UW6ldQmo0", "WPjZBSofyLSF"];
  return Kg = function() {
    return g;
  }, Kg();
}
function FA(g, I) {
  var t = Kg();
  return FA = function(A, e) {
    A = A - (7962 * 1 + -321 * -17 + -1436 * 9);
    var o = t[A];
    if (FA.yhgHEl === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", r = "", s = "", d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (var w = 0, R = r.length; w < R; w++)
          s += "%" + ("00" + r.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var r = [], s = 0, d, h = "";
        Q = i(Q);
        var x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      FA.fnhApX = C, g = arguments, FA.yhgHEl = !0;
    }
    var B = t[0], n = A + B, a = g[n];
    return a ? o = a : (FA.MAfbNz === void 0 && (FA.MAfbNz = !0), o = FA.fnhApX(o, e), g[n] = o), o;
  }, FA(g, I);
}
async function cr(g) {
  const { Image: I } = Pe, t = await g.arrayBuffer(), A = new Uint8Array(t), e = {};
  e.bytes = A;
  const o = I.verify(e);
  if (o) throw Error(o);
  const i = {};
  return i.bytes = A, I.create(i);
}
async function dr(g) {
  const { v4: { Metadata: I } } = Pe, t = { ...g };
  t.platform = Pe.Platform.WEB;
  const A = t, e = I.verify(A);
  if (e) throw Error(e);
  return I.create(A);
}
async function hr(g) {
  const { Content: I } = Pe, { iv: t, key: A, message: e } = await Er(g), o = { token: new Uint8Array(A), iv: t, schemaVersion: ba, bytes: new Uint8Array(e) }, i = I.verify(o);
  if (i) throw Error(i);
  const C = I.create(o);
  return I.encode(C).finish();
}
function lr(g) {
  const { Blob: I } = Pe.v4, t = I.verify(g);
  if (t) throw Error(t);
  const A = I.create(g);
  return I.encode(A).finish();
}
async function ur(g, I) {
  const { FaceContent: t } = Pe.v4, A = await cr(g), e = await dr(I), o = {};
  o.image = A, o.metadata = e;
  const i = o, C = t.verify(i);
  if (C) throw Error(C);
  const B = t.create(i), n = {};
  return n.faceContent = B, lr(n);
}
async function fr(g, I) {
  const t = await ur(g, I);
  return hr(t);
}
function Dr({ controller: g, onPhotoTakenInternal: I }) {
  const { cameraFacing: t, captureMode: A, onPhotoTaken: e, sessionToken: o } = KI(), i = $A(({ candidateSelectionImages: n, imageData: a, protoMessage: Q, webMetadata: E }) => {
    cx(vC.FACE, n), e(a, Q);
    const r = {};
    r.cameraProperties = E, I == null || I(r);
  }, [I, e]), C = $A(({ fps: n, processedImage: a }, Q) => {
    HC(zA.INSTRUCTION_CHANGED, a.instructionCode), g && Ex(zA.DETECTED_FACE_CHANGED, a.detection, g.imageProcessor.validationService.getThresholds().faceConfidence);
    const E = {};
    E.detection = a.detection, E.fps = n, E.image = Q, E.isInCandidateSelection = a.isInCandidateSelection, E.invalidValidators = a.invalidValidators, sx(zA.FACE_DETECTION, E);
  }, [g]), B = {};
  return B.captureMode = A, B.cameraFacing = t, B.controller = g, B.createProtoMessage = fr, B.onCapture = i, B.onDetection = C, B.sessionToken = o, B.customEvent = zA, B.fallbackInstruction = IA.FACE_NOT_PRESENT, B.instructionCodeMap = IA, B.checkToInstructionCodeMap = ZQ, qx(B);
}
class yr {
  constructor(I, t) {
    p(this, "isDetectorInitialized", !1);
    p(this, "samVersion", null);
    p(this, "detection");
    this.imageProcessor = I, this.assetsDirectoryPath = t;
  }
  async init() {
    await this.initDetector(this.assetsDirectoryPath);
  }
  async initDetector(I) {
    await this.detector.initSamModule(location.href, I);
    const t = await this.detector.getSamVersion();
    this.setSamVersion(t), this.isDetectorInitialized = !0;
  }
  setSamVersion(I) {
    if (!I || !this.areVersionsCompatible(I))
      throw console.error("You can find more information about how to host sam.wasm here: https://developers.innovatrics.com/digital-onboarding/technical/remote/dot-web-document/latest/documentation/#_hosting_sam_wasm"), new O("Provided SAM version is not compatible with this version of component. Please copy provided wasm directory to your project.");
    this.samVersion = I;
  }
  runDetectionLoop(I) {
    this.detection && this.detection.stop(), this.detection = I, this.detection.run();
  }
  stopDetectionLoop() {
    var I;
    (I = this.detection) == null || I.stop();
  }
  setThresholds(I) {
    this.imageProcessor.validationService.thresholds = I;
  }
  static getWorkerPath(I, t) {
    return "" + t.replace(bC, "") + I;
  }
}
class wr {
  constructor() {
    p(this, "detectionRecord", []);
    p(this, "imagesWithTimestampForDuplicateDetection", new HI(Na));
  }
  getHashedDetectedImagesWithTimestamp() {
    return this.imagesWithTimestampForDuplicateDetection.getAsArray();
  }
  async collectImagesForDuplicateDetection({ image: I, timestamp: t }) {
    const A = I.length / Sa, e = A / (1 * 6534 + -9 * 661 + -1 * 583), o = I.length / (-430 * -4 + 9606 + -11324 * 1), i = await sr(I.slice(o - e, o + e)), C = {};
    C.imageHash = i, C.timestampMillis = t, this.imagesWithTimestampForDuplicateDetection.pushFixed(C);
  }
  optimizeImageBeforeDetection(I) {
    return { data: qa(I), resolution: { width: I.width, height: I.height } };
  }
  async processDetectedObject({ detectedObject: I, image: t, imageData: A, timestamp: e }) {
    const o = RC(I), i = this.validationService.validateDetectedObject(o, t);
    if (i.result.get("isPresent")) {
      const C = {};
      C.image = A, C.timestamp = e, this.collectImagesForDuplicateDetection(C);
    }
    return this.detectionRecord.push(I), { detection: o, validationResult: i.result, isValid: i.isValid() };
  }
  reset() {
    this.detectionRecord = [], this.imagesWithTimestampForDuplicateDetection.clear();
  }
}
class pr {
  constructor() {
    p(this, "thresholds", null);
  }
  getThresholds() {
    if (!this.thresholds) throw new O("Thresholds for " + this.className + " are not provided");
    return this.thresholds;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const QB = Symbol("Comlink.proxy"), mr = Symbol("Comlink.endpoint"), Gr = Symbol("Comlink.releaseProxy"), F0 = Symbol("Comlink.finalizer"), lg = Symbol("Comlink.thrown"), aB = (g) => typeof g == "object" && g !== null || typeof g == "function", kr = {
  canHandle: (g) => aB(g) && g[QB],
  serialize(g) {
    const { port1: I, port2: t } = new MessageChannel();
    return rB(g, I), [t, [t]];
  },
  deserialize(g) {
    return g.start(), sB(g);
  }
}, Nr = {
  canHandle: (g) => aB(g) && lg in g,
  serialize({ value: g }) {
    let I;
    return g instanceof Error ? I = {
      isError: !0,
      value: {
        message: g.message,
        name: g.name,
        stack: g.stack
      }
    } : I = { isError: !1, value: g }, [I, []];
  },
  deserialize(g) {
    throw g.isError ? Object.assign(new Error(g.value.message), g.value) : g.value;
  }
}, xB = /* @__PURE__ */ new Map([
  ["proxy", kr],
  ["throw", Nr]
]);
function br(g, I) {
  for (const t of g)
    if (I === t || t === "*" || t instanceof RegExp && t.test(I))
      return !0;
  return !1;
}
function rB(g, I = globalThis, t = ["*"]) {
  I.addEventListener("message", function A(e) {
    if (!e || !e.data)
      return;
    if (!br(t, e.origin)) {
      console.warn(`Invalid origin '${e.origin}' for comlink proxy`);
      return;
    }
    const { id: o, type: i, path: C } = Object.assign({ path: [] }, e.data), B = (e.data.argumentList || []).map(re);
    let n;
    try {
      const a = C.slice(0, -1).reduce((E, r) => E[r], g), Q = C.reduce((E, r) => E[r], g);
      switch (i) {
        case "GET":
          n = Q;
          break;
        case "SET":
          a[C.slice(-1)[0]] = re(e.data.value), n = !0;
          break;
        case "APPLY":
          n = Q.apply(a, B);
          break;
        case "CONSTRUCT":
          {
            const E = new Q(...B);
            n = Jr(E);
          }
          break;
        case "ENDPOINT":
          {
            const { port1: E, port2: r } = new MessageChannel();
            rB(g, r), n = Lr(E, [E]);
          }
          break;
        case "RELEASE":
          n = void 0;
          break;
        default:
          return;
      }
    } catch (a) {
      n = { value: a, [lg]: 0 };
    }
    Promise.resolve(n).catch((a) => ({ value: a, [lg]: 0 })).then((a) => {
      const [Q, E] = Tg(a);
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E), i === "RELEASE" && (I.removeEventListener("message", A), EB(I), F0 in g && typeof g[F0] == "function" && g[F0]());
    }).catch((a) => {
      const [Q, E] = Tg({
        value: new TypeError("Unserializable return value"),
        [lg]: 0
      });
      I.postMessage(Object.assign(Object.assign({}, Q), { id: o }), E);
    });
  }), I.start && I.start();
}
function Fr(g) {
  return g.constructor.name === "MessagePort";
}
function EB(g) {
  Fr(g) && g.close();
}
function sB(g, I) {
  return cI(g, [], I);
}
function Ig(g) {
  if (g)
    throw new Error("Proxy has been released and is not useable");
}
function cB(g) {
  return Je(g, {
    type: "RELEASE"
  }).then(() => {
    EB(g);
  });
}
const Og = /* @__PURE__ */ new WeakMap(), qg = "FinalizationRegistry" in globalThis && new FinalizationRegistry((g) => {
  const I = (Og.get(g) || 0) - 1;
  Og.set(g, I), I === 0 && cB(g);
});
function Rr(g, I) {
  const t = (Og.get(I) || 0) + 1;
  Og.set(I, t), qg && qg.register(g, I, g);
}
function Sr(g) {
  qg && qg.unregister(g);
}
function cI(g, I = [], t = function() {
}) {
  let A = !1;
  const e = new Proxy(t, {
    get(o, i) {
      if (Ig(A), i === Gr)
        return () => {
          Sr(e), cB(g), A = !0;
        };
      if (i === "then") {
        if (I.length === 0)
          return { then: () => e };
        const C = Je(g, {
          type: "GET",
          path: I.map((B) => B.toString())
        }).then(re);
        return C.then.bind(C);
      }
      return cI(g, [...I, i]);
    },
    set(o, i, C) {
      Ig(A);
      const [B, n] = Tg(C);
      return Je(g, {
        type: "SET",
        path: [...I, i].map((a) => a.toString()),
        value: B
      }, n).then(re);
    },
    apply(o, i, C) {
      Ig(A);
      const B = I[I.length - 1];
      if (B === mr)
        return Je(g, {
          type: "ENDPOINT"
        }).then(re);
      if (B === "bind")
        return cI(g, I.slice(0, -1));
      const [n, a] = ai(C);
      return Je(g, {
        type: "APPLY",
        path: I.map((Q) => Q.toString()),
        argumentList: n
      }, a).then(re);
    },
    construct(o, i) {
      Ig(A);
      const [C, B] = ai(i);
      return Je(g, {
        type: "CONSTRUCT",
        path: I.map((n) => n.toString()),
        argumentList: C
      }, B).then(re);
    }
  });
  return Rr(e, g), e;
}
function Mr(g) {
  return Array.prototype.concat.apply([], g);
}
function ai(g) {
  const I = g.map(Tg);
  return [I.map((t) => t[0]), Mr(I.map((t) => t[1]))];
}
const dB = /* @__PURE__ */ new WeakMap();
function Lr(g, I) {
  return dB.set(g, I), g;
}
function Jr(g) {
  return Object.assign(g, { [QB]: !0 });
}
function Tg(g) {
  for (const [I, t] of xB)
    if (t.canHandle(g)) {
      const [A, e] = t.serialize(g);
      return [
        {
          type: "HANDLER",
          name: I,
          value: A
        },
        e
      ];
    }
  return [
    {
      type: "RAW",
      value: g
    },
    dB.get(g) || []
  ];
}
function re(g) {
  switch (g.type) {
    case "HANDLER":
      return xB.get(g.name).deserialize(g.value);
    case "RAW":
      return g.value;
  }
}
function Je(g, I, t) {
  return new Promise((A) => {
    const e = Yr();
    g.addEventListener("message", function o(i) {
      !i.data || !i.data.id || i.data.id !== e || (g.removeEventListener("message", o), A(i.data));
    }), g.start && g.start(), g.postMessage(Object.assign({ id: e }, I), t);
  });
}
function Yr() {
  return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
}
const vr = "SAM v1.44.0 for idcards", Ur = "/dot-assets/face/dot-CCz7p721.js";
class Wr extends wr {
  constructor(t, A) {
    super();
    p(this, "className", "FaceImageProcessor");
    p(this, "detector");
    p(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  optimizeImageBeforeDetection(t) {
    const A = Ng(t), e = Oa(t, A);
    return super.optimizeImageBeforeDetection(e);
  }
  async process({ image: t, timestamp: A }) {
    const e = this.optimizeImageBeforeDetection(t), o = {};
    o.height = t.height, o.width = t.width;
    let i = await this.detector.detect(e.data, e.resolution, o);
    i = ex(i, Ng(t));
    const C = {};
    return C.detectedObject = i, C.image = t, C.imageData = e.data, C.timestamp = A, this.processDetectedObject(C);
  }
}
var Ue, ce, de;
class Hr {
  constructor(I) {
    W(this, Ue);
    W(this, ce);
    W(this, de);
    v(this, Ue, I), v(this, ce, /* @__PURE__ */ new Map());
  }
  validate() {
    m(this, Ue).forEach((I) => {
      m(this, ce).set(I.name, I.evaluate());
    }), v(this, de, void (5287 + 17 * -311));
  }
  isValid() {
    return m(this, de) === void (-4753 + -61 * -63 + 910) && v(this, de, Array.from(m(this, ce).values()).every((I) => I)), m(this, de);
  }
  get result() {
    return m(this, ce);
  }
  get validators() {
    return m(this, Ue);
  }
}
Ue = new WeakMap(), ce = new WeakMap(), de = new WeakMap();
var Gt, he;
class mA {
  constructor(I, t) {
    W(this, Gt);
    W(this, he);
    v(this, Gt, I), v(this, he, t);
  }
  get threshold() {
    return m(this, he);
  }
  get name() {
    return m(this, Gt);
  }
  isValueBelowThreshold(I) {
    return I < m(this, he);
  }
  isValueAboveThreshold(I) {
    return I > m(this, he);
  }
}
Gt = new WeakMap(), he = new WeakMap();
const Kr = "isNotDim";
var kt;
class Or extends mA {
  constructor(t, A) {
    super(Kr, t);
    W(this, kt);
    v(this, kt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, kt));
  }
}
kt = new WeakMap();
const qr = "isNotSmall";
var Nt;
class Tr extends mA {
  constructor(t, A) {
    super(qr, t);
    W(this, Nt);
    v(this, Nt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Nt));
  }
}
Nt = new WeakMap();
const Zr = "isNotBright";
var bt;
class jr extends mA {
  constructor(t, A) {
    super(Zr, t);
    W(this, bt);
    v(this, bt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, bt));
  }
}
bt = new WeakMap();
const Pr = "isPresent";
var Ft;
class Vr extends mA {
  constructor(t, A) {
    super(Pr, t);
    W(this, Ft);
    v(this, Ft, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Ft));
  }
}
Ft = new WeakMap();
const Xr = "isSharp";
var Rt;
class zr extends mA {
  constructor(t, A) {
    super(Xr, t);
    W(this, Rt);
    v(this, Rt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Rt));
  }
}
Rt = new WeakMap();
const _r = "isLeftEyePresent";
var St;
class $r extends mA {
  constructor(t, A) {
    super(_r, t);
    W(this, St);
    v(this, St, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, St));
  }
}
St = new WeakMap();
const AE = "isMouthPresent";
var Mt;
class eE extends mA {
  constructor(t, A) {
    super(AE, t);
    W(this, Mt);
    v(this, Mt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Mt));
  }
}
Mt = new WeakMap();
const tE = "isMouthScoreNotTooLow";
var Lt;
class gE extends mA {
  constructor(t, A) {
    super(tE, t);
    W(this, Lt);
    v(this, Lt, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Lt));
  }
}
Lt = new WeakMap();
const IE = "isMouthScoreNotTooHigh";
var Jt;
class oE extends mA {
  constructor(t, A) {
    super(IE, t);
    W(this, Jt);
    v(this, Jt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Jt));
  }
}
Jt = new WeakMap();
const iE = "isNotLarge";
var Yt;
class CE extends mA {
  constructor(t, A) {
    super(iE, t);
    W(this, Yt);
    v(this, Yt, A);
  }
  evaluate() {
    return this.isValueBelowThreshold(m(this, Yt));
  }
}
Yt = new WeakMap();
const BE = "isNotPitched";
var vt;
const _I = class _I extends mA {
  constructor(t, A) {
    super(BE, _I.calculatePitchAngleAccelerationThreshold(t));
    W(this, vt);
    v(this, vt, A);
  }
  static calculatePitchAngleAccelerationThreshold(t) {
    return Ga * Math.sin(t * (Math.PI / 180));
  }
  evaluate() {
    const { z: t } = m(this, vt) || {};
    return t ? this.isValueBelowThreshold(Math.abs(t)) : !0;
  }
};
vt = new WeakMap();
let dI = _I;
const nE = "isRightEyePresent";
var Ut;
class QE extends mA {
  constructor(t, A) {
    super(nE, t);
    W(this, Ut);
    v(this, Ut, A);
  }
  evaluate() {
    return this.isValueAboveThreshold(m(this, Ut));
  }
}
Ut = new WeakMap();
const aE = "isNotOutOfBounds";
var Wt, le;
class xE extends mA {
  constructor(t, A, e) {
    super(aE, t);
    W(this, Wt);
    W(this, le);
    v(this, Wt, A), v(this, le, e);
  }
  evaluate() {
    const t = YC(m(this, le), this.threshold, Ng(m(this, le))), A = WC(m(this, Wt), m(this, le));
    return Za(A, t);
  }
}
Wt = new WeakMap(), le = new WeakMap();
class rE {
  static getFaceValidationInstance(I, t, A, e) {
    return new Hr([new Vr(I.faceConfidence, t.confidence), new $r(I.leftEye.confidence, t.leftEye.confidence), new QE(I.rightEye.confidence, t.rightEye.confidence), new Tr(I.minFaceSizeRatio, t.faceSize), new CE(I.maxFaceSizeRatio, t.faceSize), new zr(I.sharpnessThreshold, t.sharpness), new Or(I.brightnessLowThreshold, t.brightness), new jr(I.brightnessHighThreshold, t.brightness), new xE(I.outOfBoundsThreshold, t, A), new dI(I.devicePitchAngleThreshold, e), new eE(I.mouth.confidence, t.mouth.confidence), new oE(I.mouth.status.max, t.mouth.status), new gE(I.mouth.status.min, t.mouth.status)]);
  }
}
class EE extends pr {
  constructor() {
    super(...arguments);
    p(this, "className", "FaceValidationService");
    p(this, "acceleration", null);
  }
  validateDetectedObject(t, A) {
    const e = rE.getFaceValidationInstance(this.getThresholds(), t, A, this.acceleration);
    return e.validate(), e;
  }
}
const ut = class ut extends yr {
  constructor(t, A, e, o) {
    super(e, o);
    p(this, "detector");
    p(this, "validationService");
    this.detector = t, this.validationService = A;
  }
  static async createInstance(t) {
    const A = ut.getWorkerPath(Ur, t), e = {};
    e.type = "module";
    const o = new Worker(new URL(A, import.meta.url), e), i = sB(o), C = await new i(), B = new EE(), n = new Wr(C, B);
    return new ut(C, B, n, t);
  }
  static async getInstance(t) {
    return !this._instance && (this._instance = await this.createInstance(t)), this._instance;
  }
  stopDetectionLoop() {
    var t;
    super.stopDetectionLoop(), HC(zA.INSTRUCTION_CHANGED, (t = this.detection) == null ? void 0 : t["fallbackInstruction"], Ia);
  }
  setAcceleration(t) {
    this.validationService.acceleration = t;
  }
  areVersionsCompatible(t) {
    return t === vr;
  }
};
p(ut, "_instance");
let hI = ut;
const hB = {};
hB.controllerClass = hI;
function sE({ controllerClass: g } = hB) {
  const { handleError: I } = Tt(), { acceleration: t } = mx(), { assetsDirectoryPath: A, thresholds: e } = KI(), [o, i] = wA();
  _(() => {
    (async () => {
      const n = await g.getInstance(A);
      try {
        await n.init(), i(n);
      } catch (a) {
        if (a instanceof Error) {
          I(O.fromError(a));
          return;
        }
      }
    })();
  }, [g, I, A]), _(() => {
    o && o.setThresholds(e);
  }, [o, e]), _(() => {
    o && o.setAcceleration(t);
  }, [t, o]);
  const C = {};
  return C.controller = o, C;
}
function cE() {
  const { sunfish: g } = Zt(), { controller: I } = sE(), { cameraResolution: t, detectionDetails: A, shouldCameraMirror: e, videoRef: o } = Dr({
    controller: I
  });
  return /* @__PURE__ */ D(MA, { children: /* @__PURE__ */ D(
    Qx,
    {
      cameraResolution: t,
      detectionDetails: A,
      shouldMirror: e,
      children: /* @__PURE__ */ D(
        HQ,
        {
          ref: o,
          $isImageMirror: e,
          $isVisible: g,
          autoPlay: !0,
          id: oa,
          muted: !0,
          playsInline: !0
        }
      )
    }
  ) });
}
function dE({ ...g }) {
  return /* @__PURE__ */ D(Ax, { cameraOptions: g, children: /* @__PURE__ */ D(cE, {}) });
}
function hE({ initAppState: g, onError: I }) {
  const [t, A] = wA(g), [e, o] = wA(), [i, C] = wA(!1), B = UA(I);
  _(() => {
    B.current = I;
  }, [I]);
  const n = {};
  return n.appState = t, n.setAppState = A, n.error = e, n.setError = o, n.isCameraReady = i, n.setIsCameraReady = C, n.onErrorRef = B, n;
}
function lE({ onError: g }) {
  const { appState: I, error: t, isCameraReady: A, onErrorRef: e, setAppState: o, setError: i, setIsCameraReady: C } = hE({
    initAppState: yA.LOADING,
    onError: g
  }), B = vx(I), n = $A(
    (Q) => {
      Po(zA.STATE_CHANGED, { appState: yA.ERROR, error: Q }), C(!1), e.current(Q), i(Q), o(yA.ERROR);
    },
    [C, e, i, o]
  ), a = $A(
    (Q) => {
      Po(zA.STATE_CHANGED, { appState: Q }), o(Q);
    },
    [o]
  );
  return {
    appState: I,
    freemiumOverlayState: B,
    isCameraReady: A,
    setIsCameraReady: C,
    handleAppStateChange: a,
    handleError: n,
    error: t
  };
}
var lB = ((g) => (g.AUTO_CAPTURE = "auto-capture", g.LONG_CAPTURE_SMILE = "long-capture-smile", g))(lB || {});
class uE {
  constructor() {
    p(this, "appKey", "");
    p(this, "deviceId", "");
  }
  async countlyFetch(I) {
    if (!this.appKey || !this.deviceId) return;
    const t = {};
    t.Accept = "application/json";
    const A = {};
    A.method = "GET", A.headers = t;
    const e = A, o = "https://innovatrics.count.ly/i?", i = {};
    i.app_key = this.appKey, i.device_id = this.deviceId;
    const C = tg(i);
    try {
      await fetch("" + o + C + "&" + I, e);
    } catch (B) {
      console.error("Countly Error", B);
    }
  }
  async init(I, t) {
    if (!t) return;
    this.appKey = t, this.deviceId = I;
    const A = { _app_version: SC() }, e = { organization: MC(window.location.href) }, o = tg({ begin_session: "1", metrics: JSON.stringify(A), user_details: JSON.stringify(e) });
    await this.countlyFetch(o);
  }
  async endSession() {
    const I = {};
    I.end_session = "1";
    const t = tg(I);
    await this.countlyFetch(t);
  }
  async sendEvent(I, t, A) {
    const e = {};
    e.key = I, e.count = 1, e.dur = A, e.segmentation = t;
    const o = [e], i = tg({ events: JSON.stringify(o) });
    await this.countlyFetch(i);
  }
  async sendAutoCaptureEvent(I, t) {
    await this.sendEvent(lB.AUTO_CAPTURE, I, t);
  }
}
const og = new uE();
class fE {
  constructor() {
    p(this, "countly", og);
  }
  createSegmentation(I) {
    return { appVersion: SC(), ...I };
  }
  init(I) {
    if (Ja()) return;
    const t = Sx();
    og.init(t, I);
  }
  endSession() {
    og.endSession();
  }
  walleye(I, t) {
    const A = {};
    A.nocturne = I, A.customer = t;
    const e = this.createSegmentation(A);
    og.sendAutoCaptureEvent(e);
  }
}
class DE extends fE {
  trackCaptureProcess({ averageFps: I, captureProcessDurationInMs: t, detection: A, deviceName: e, facingMode: o, imageResolution: i, instructionSet: C }) {
    if (!A) return;
    const B = Jx(t), n = this.createSegmentation({ faceSize: Xo(A.faceSize), confidence: Xo(A.confidence), camera: Mx(e, o), imageResolution: i.width + "x" + i.height, averageFps: Yx(I), captureTime: Lx(B), instructionSet: C });
    this.countly.sendAutoCaptureEvent(n, B);
  }
}
const yE = new DE();
let F;
const VA = new Array(-5254 + 2691 * 2).fill(void 0);
VA.push(void 0, null, !0, !1);
function lI(g) {
  return VA[g];
}
let OA = 8543 + 27 * 56 + 10055 * -1, xt = null;
function ug() {
  return (xt === null || xt.byteLength === 0) && (xt = new Uint8Array(F.memory.buffer)), xt;
}
const fg = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} }, wE = typeof fg.encodeInto == "function" ? function(g, I) {
  return fg.encodeInto(g, I);
} : function(g, I) {
  const t = fg.encode(g);
  I.set(t);
  const A = {};
  return A.read = g.length, A.written = t.length, A;
};
function pt(g, I, t) {
  if (t === void 0) {
    const C = fg.encode(g), B = I(C.length, 4151 * -2 + -96 * -29 + 5519) >>> 2979 + 67 * 108 + -10215;
    return ug().subarray(B, B + C.length).set(C), OA = C.length, B;
  }
  let A = g.length, e = I(A, 3188 * 1 + 5041 + 1 * -8228) >>> 0;
  const o = ug();
  let i = 6780 + -2 * 3390;
  for (; i < A; i++) {
    const C = g.charCodeAt(i);
    if (C > 127) break;
    o[e + i] = C;
  }
  if (i !== A) {
    i !== -229 * 43 + -4273 + -706 * -20 && (g = g.slice(i)), e = t(e, A, A = i + g.length * (-6561 + 9 * 432 + 2676 * 1), 1) >>> -3542 * -2 + -4924 + 540 * -4;
    const C = ug().subarray(e + i, e + A), B = wE(g, C);
    i += B.written, e = t(e, A, i, 1) >>> 2764 + 2429 * -1 + -335;
  }
  return OA = i, e;
}
function uB(g) {
  return g == null;
}
let rt = null;
function HA() {
  return (rt === null || rt.byteLength === 3301 * 1 + 1517 * 3 + -4 * 1963) && (rt = new Int32Array(F.memory.buffer)), rt;
}
let lt = VA.length;
function pE(g) {
  g < 1 * 4281 + 7400 + 1 * -11549 || (VA[g] = lt, lt = g);
}
function fB(g) {
  const I = lI(g);
  return pE(g), I;
}
const uI = {};
uI.ignoreBOM = !0, uI.fatal = !0;
const DB = typeof TextDecoder < "u" ? new TextDecoder("utf-8", uI) : { decode: () => {
  throw Error("TextDecoder not available");
} };
typeof TextDecoder < "u" && DB.decode();
function Zg(g, I) {
  return g = g >>> -67 * -9 + -101 * 98 + 9295, DB.decode(ug().subarray(g, g + I));
}
function fI(g) {
  lt === VA.length && VA.push(VA.length + (-7219 * 1 + 2237 * -1 + 9457));
  const I = lt;
  return lt = VA[I], VA[I] = g, I;
}
let Et = null;
function yB() {
  return (Et === null || Et.byteLength === 0) && (Et = new Uint32Array(F.memory.buffer)), Et;
}
function xi(g, I) {
  const t = I(g.length * 4, 4) >>> 0, A = yB();
  for (let e = -4 * -421 + 57 * 15 + -1 * 2539; e < g.length; e++)
    A[t / (5 * 1405 + 49 * -161 + 868) + e] = fI(g[e]);
  return OA = g.length, t;
}
function ri(g, I) {
  g = g >>> 0;
  const t = yB(), A = t.subarray(g / (-944 + 529 * 2 + -2 * 55), g / (67 * 17 + 359 * -2 + -417) + I), e = [];
  for (let o = 8197 + -8197 * 1; o < A.length; o++)
    e.push(fB(A[o]));
  return e;
}
function mE(g, I) {
  const t = pt(g, F.__wbindgen_malloc, F.__wbindgen_realloc), A = OA, e = pt(I, F.__wbindgen_malloc, F.__wbindgen_realloc), o = OA, i = F.is_mobile_supported(t, A, e, o);
  return zI.__wrap(i);
}
const DI = {};
DI.register = () => {
}, DI.unregister = () => {
};
const Ei = typeof FinalizationRegistry > "u" ? DI : new FinalizationRegistry((g) => F.__wbg_licensevalidationresult_free(g >>> 3 * -383 + -5492 + -6641 * -1));
class zI {
  static __wrap(I) {
    I = I >>> -381 * -1 + 6260 + -6641;
    const t = Object.create(zI.prototype);
    return t.__wbg_ptr = I, Ei.register(t, t.__wbg_ptr, t), t;
  }
  __destroy_into_raw() {
    const I = this.__wbg_ptr;
    return this.__wbg_ptr = -207 * 7 + 1 * -3301 + 4750, Ei.unregister(this), I;
  }
  free() {
    const I = this.__destroy_into_raw();
    F.__wbg_licensevalidationresult_free(I);
  }
  constructor(I, t, A, e, o) {
    var i = uB(t) ? 0 : pt(t, F.__wbindgen_malloc, F.__wbindgen_realloc), C = OA;
    const B = xi(A, F.__wbindgen_malloc), n = OA, a = xi(e, F.__wbindgen_malloc), Q = OA, E = pt(o, F.__wbindgen_malloc, F.__wbindgen_realloc), r = OA, s = F.licensevalidationresult_new(I, i, C, B, n, a, Q, E, r);
    return this.__wbg_ptr = s >>> -2063 + 1732 * -5 + 10723, this;
  }
  get is_valid() {
    return F.licensevalidationresult_is_valid(this.__wbg_ptr) !== -8 * 683 + -8148 + 13612;
  }
  get features_json() {
    try {
      const A = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_features_json(A, this.__wbg_ptr);
      var I = HA()[A / 4 + (903 * 5 + 6910 + 11425 * -1)], t = HA()[A / 4 + (-9169 + -1532 * -4 + 3042)];
      let e;
      return I !== 2 * 2771 + 1 * 2801 + -8343 && (e = Zg(I, t).slice(), F.__wbindgen_free(I, t * (-818 + -819 * -1), 8631 + -9899 * 1 + 1269)), e;
    } finally {
      F.__wbindgen_add_to_stack_pointer(4488 + -2236 * 2);
    }
  }
  get errors() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_errors(e, this.__wbg_ptr);
      var I = HA()[e / (-167 * 23 + 8311 + 154 * -29) + (6 * -1249 + -6926 * -1 + 1 * 568)], t = HA()[e / 4 + (1 * 4751 + -4197 + 1 * -553)], A = ri(I, t).slice();
      return F.__wbindgen_free(I, t * (8759 * -1 + 134 * 14 + 6887 * 1), -2887 * -1 + -613 * -10 + -9013), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-1 * -3107 + -9 * -397 + -6664);
    }
  }
  get warnings() {
    try {
      const e = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_warnings(e, this.__wbg_ptr);
      var I = HA()[e / (594 + 31 * -303 + 1 * 8803) + 0], t = HA()[e / (7054 * 1 + -698 * -2 + -8446) + 1], A = ri(I, t).slice();
      return F.__wbindgen_free(I, t * 4, -4001 + -3 * -1335), A;
    } finally {
      F.__wbindgen_add_to_stack_pointer(-8215 + -1 * -15 + 8216);
    }
  }
  get customer() {
    let I, t;
    try {
      const o = F.__wbindgen_add_to_stack_pointer(-16);
      F.licensevalidationresult_customer(o, this.__wbg_ptr);
      var A = HA()[o / (2218 + -3461 * 2 + 4708) + (2136 * -4 + -1459 * -1 + 7085)], e = HA()[o / (147 * -16 + -8934 + 11290) + (11663 + 17 * -686)];
      return I = A, t = e, Zg(A, e);
    } finally {
      F.__wbindgen_add_to_stack_pointer(16), F.__wbindgen_free(I, t, -152 + -1 * 5797 + 70 * 85);
    }
  }
}
async function GE(g, I) {
  if (typeof Response == "function" && g instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(g, I);
    } catch (A) {
      if (g.headers.get("Content-Type") != "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", A);
      else throw A;
    }
    const t = await g.arrayBuffer();
    return await WebAssembly.instantiate(t, I);
  } else {
    const t = await WebAssembly.instantiate(g, I);
    if (t instanceof WebAssembly.Instance) {
      const A = {};
      return A.instance = t, A.module = g, A;
    } else return t;
  }
}
function kE() {
  const g = {};
  return g.wbg = {}, g.wbg.__wbindgen_string_get = function(I, t) {
    const A = lI(t), e = typeof A == "string" ? A : void 0;
    var o = uB(e) ? 1 * 2778 + -2946 * -3 + -11616 : pt(e, F.__wbindgen_malloc, F.__wbindgen_realloc), i = OA;
    HA()[I / (1 * 3966 + -2938 * 1 + -256 * 4) + (7149 * 1 + 5160 + 181 * -68)] = i, HA()[I / (5 * -1409 + 179 * 38 + 19 * 13) + (535 * 5 + -10 * 629 + 723 * 5)] = o;
  }, g.wbg.__wbindgen_object_drop_ref = function(I) {
    fB(I);
  }, g.wbg.__wbindgen_string_new = function(I, t) {
    const A = Zg(I, t);
    return fI(A);
  }, g.wbg.__wbg_new0_7d84e5b2cd9fdc73 = function() {
    return fI(/* @__PURE__ */ new Date());
  }, g.wbg.__wbg_getTime_2bc4375165f02d15 = function(I) {
    return lI(I).getTime();
  }, g.wbg.__wbindgen_throw = function(I, t) {
    throw new Error(Zg(I, t));
  }, g;
}
function NE(g, I) {
  return F = g.exports, wB.__wbindgen_wasm_module = I, rt = null, Et = null, xt = null, F;
}
async function wB(g) {
  if (F !== void 0) return F;
  typeof g > "u" && (g = new URL("data:application/wasm;base64,AGFzbQEAAAABiAIjYAN/f38Bf2ACf38Bf2ACf38AYAN/f38AYAF/AGAEf39/fwBgBX9/f39/AGAEf39/fwF/YAV/f39/fwF/YAF/AX9gBn9/f39/fwBgBX9/f35/AGAAAGAAAX9gBn9/f39/fwF/YAd/f39/f39/AX9gAX8BfGACfH8Bf2AGf39/f35/AGACfn8AYAN/f34AYAd/f39/f39/AGAHfn5+f39/fwF+YAN+f38Bf2AJf39/f39/f39/AX9gBH9/f34AYAt/f39/f39/f39/fwF/YAR/fn5+AGAEf35+fwBgBX9/fX9/AGAEf31/fwBgBX9/fH9/AGAEf3x/fwBgBX9/fn9/AGAEf35/fwACuAEGA3diZxVfX3diaW5kZ2VuX3N0cmluZ19nZXQAAgN3YmcaX193YmluZGdlbl9vYmplY3RfZHJvcF9yZWYABAN3YmcVX193YmluZGdlbl9zdHJpbmdfbmV3AAEDd2JnG19fd2JnX25ldzBfN2Q4NGU1YjJjZDlmZGM3MwANA3diZx5fX3diZ19nZXRUaW1lXzJiYzQzNzUxNjVmMDJkMTUAEAN3YmcQX193YmluZGdlbl90aHJvdwACA70CuwIKBwMCCQMFAwERAwASAwMCAQMDBAMGAQIBAwcDBAcFAwEDAgMBBQMDAQAOAAICAwECCwIDAQMCCxMBAQMDAwIBAgEIAgYDBRQPFQMBAgsBFhcEAQEBAQEBAgQCAwABAQEBAxgBAQICAQEBBgADABkCAQUFCAIBAggDAQQCAgIFAQMaAwQCCgUPAQEDBAMDAAQBAQEJAQEAAAICBAIBAgEAAQEHBQQBAgIGBBsCBAAEAgUDAwMDAwICAwEGAQUBAgICBBwBAQMCBAEBAgMBBQECAwECCgQBAwEDAAICAQEDAwECAQgMAgECAgEBBwEBAQEJAQABAQ4GCB0fIQEFAAECAgIBAQEBAQEEBAICAQEEAQEJAQYCAgIBAgECAgICAgIBAgMBAQEBAAAJAQEBAQIMDAEBAQEAAAMADQQEBwFwAZMBkwEFAwEAEQYJAX8BQYCAwAALB/wCDQZtZW1vcnkCACJfX3diZ19saWNlbnNldmFsaWRhdGlvbnJlc3VsdF9mcmVlAJUBG2xpY2Vuc2V2YWxpZGF0aW9ucmVzdWx0X25ldwBoIGxpY2Vuc2V2YWxp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pJDAABC3AQALIAZBBmohBgwBC0EHQQdBtJDAABC3AQALIAKtQgiGIAatQiCGhCElDAILIAsgA2shAiANIQALQgMhJSACIBFqQQNxDQBBCCEDAkACQAJAAkACQAJAAkACfwJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBEOCQcABgECAAMEBQALIwBBIGsiACQAIABBDGpCATcCACAAQQE2AgQgAEHIk8IANgIAIABBAzYCHCAAQfyKwAA2AhggACAAQRhqNgIIIABBhIvAABDrAQALQRAhAwwEC0EYIQMMAwtBICEDDAILQSghAwwBC0EwIQMLICYgA62GUEUNAiAHIBAgByAQSxshAUEAIQBBOCECA0AgASAHRwRAIAcgFmogJiACQThxrYg8AAAgAkEIayECIAdBAWohByAAQQhqIgAgA0kNAQwDCwsgASAQQZiKwAAQtwEACyAmUEUNAQsgBCgCtAYhEiAMQYDnwABBCBBzIgAEQCAEQegCaiAAEChBuLHCAC0AABpBBhAKIgBFDRggAEGGCjsABCAAQbDCwMkANgAAIARChoCAgOAANwK0BiAEIAA2ArAGIARBsAZqIgJBsYDAAEEFEOQBIARBhYCQoAE2AMgBQQQhACACIARByAFqQQQQ5AEgBEGgAmogBEG4BmooAgA2AgAgBCAEKQKwBjcDmAIgBEEQaiAEQZgCahDEASAEKAIUIRcgBCgCECERIAQoAvACQRRGBEAgBCgC6AIhFAJAIBAgByAHIBBLGyIKBEAgBEEIaiAKEOABIAQoAgwhBiAEQaADaiAEKAIIIBYgChC+AiIBIApBAUcEfyAKQQF2IQMgASAKakEBayECIAEhAANAIAAtAAAhByAAIAItAAA6AAAgAiAHOgAAIAJBAWshAiAAQQFqIQAgA0EBayIDDQALIAoFQQELECwgBkUNASABECIMAQsgBEECNgLQASAEQgQ3AsgBIARBADYCmAIgBEEANgLAAiAEQZgCaiIBIARByAFqEDMgBEGwBmoiACABQTAQvgIaIABBBHIhDSAEQbgGaiEHIARB2AZqIQYgBCgCuAYhAQNAIAchAyAEKALYBiICIQAgAkEFSSIIRQRAIAEhAyAEKAK0BiEACwJAIABFDQAgAEEDdCADakEIaykDAEIAUg0AIAYh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DTYCHCAIIAA2AhggCCACNgIUIAggEzYCECAIIAM2AgwgCCADNgIIIAggCjYCBCAIQQA2AgAgCCAFLwEsOwA1IAhBN2ogBUEuai0AADoAACAFQaADaiQAIAgPC0HogMAAQSpBpIHAABDeAQALAAuRJAITfwN+IwBB8ANrIgMkACACKAIoIgQhBQJAAkACQAJ/AkACQCAEQQVPBH8gAigCBAUgBQsEQCABKAIoIgUhCAJAAkAgBUEFTwR/IAEoAgQFIAgLBEAgBEEFSQ0BIAIoAgRBAUcNAiACKAIIIQcgAigCBAwGCyADQQI2ApgDIANCBDcCkAMgA0EANgLAAyADQQA2AugDIANBwANqIgEgA0GQA2oQMyADQfgBaiICIAFBMBC+AhogAkEEciEGIANBgAJqIQcgA0GgAmohCSADKAKAAiEIA0AgByEBIAMoAqACIgQhAiAEQQVJIgVFBEAgAygC/AEhAiAIIQELAkAgAkUNACACQQN0IAFqQQhrKQMAQgBSDQAgCSECIAVFBEAgAygC/AEhBCAGIQILIARFDQEgAiAEQQFrNgIADAELCyADQZADaiADQfgBaiIBQTAQvgIaIANBAjYC6AIgA0IENwLgAiADQQA2AsADIANBADYC6AMgA0HAA2oiAiADQeACahAzIAEgAkEwEL4CGiABQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIABBMGogA0H4AWpBMBC+AhogACADQZADakEwEL4CGgwGCyAEQQFGDQMLAn8gBUEETQRAIAUhByABQQhqDAELIAEoAgQhByABKAIICyEIAn8gBEEETQRAIAJBCGohBiAEDAELIAIoAgghBiACKAIECyEJAkACQAJAAkAgCCAHIAYgCRCoAUH/AXEOAgECAAsgA0ECNgKYAyADQgQ3ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIARBBHIhCyADQYACaiEGIANBoAJqIQcgAygCgAIhCQNAIAYhCCADKAKgAiIEIQIgBEEFSSIMRQRAIAkhCCADKAL8ASECCwJAIAJFDQAgAkEDdCAIakEIaykDAEIAUg0AIAchAiAMRQRAIAMoAvwBIQQgCyECCyAERQ0BIAIgBEEBazYCAAwBCwsgA0HAA2ogA0H4AWpBMBC+AhogBUEETQR/IAFBCGoFIAEoAgQhBSABKAIICyEEIANBADYC+AEgA0EANgKgAiADQfgBaiIBIAQgBCAFQQN0ahBDIABBMGogAUEwEL4CGiAAIANBwANqQTAQvgIaDAcLQbixwgAtAAAaQQQQCiIBRQ0BIAFBATYCACADQoGAgIAgNwKUAyADIAE2ApADIANBADYCwAMgA0EANgLoAyADQcADaiICIANBkANqEDMgA0H4AWoiBCACQTAQvgIaIAEQIiAEQQRyIQYgA0GAAmohByADQaACaiEJIAMoAoACIQgDQCAHIQEgAygCoAIiBCECIARBBUkiBUUEQCADKAL8ASECIAghAQsCQCACRQ0AIAJBA3QgAWpBCGspAwBCAFINACAJIQIgBUUEQCADKAL8ASEEIAYhAgsgBEUNASACIARBAWs2AgAMAQsLIANBkANqIANB+AFqIgFBMBC+AhogA0ECNgLoAiADQgQ3AuACIANBADYCwAMgA0EANgLoAyADQcADaiICIANB4AJqEDMgASACQTAQvgIaIAFBBHIhBiADQYACaiEHIANBoAJqIQkgAygCgAIhCANAIAchASADKAKgAiIEIQIgBEEFSSIFRQRAIAMoAvwBIQIgCCEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIAkhAiAFRQRAIAMoAvwBIQQgBiECCyAERQ0BIAIgBEEBazYCAAwBCwsgAEEwaiADQfgBakEwEL4CGiAAIANBkANqQTAQvgIaDAYLIARBBE0EfyACQQhqBSACKAIEIQQgAigCCAshBSAEBEAgA0EIaiABIARBA3QgBWpBCGspAwB5IhenIg0QJyADQThqIAIgDRAnAn8gAygCYCIEQQRNBEAgBCECIANBQGsMAQsgAygCPCECIAMoAkALIQEgAgRAIAJBA3QgAWpBCGspAwAhFiADQfgBaiIBIAMoAjAiAkEFTwR/IAMoAgwFIAILIARBBU8EfyADKAI8BSAEC2tBAWoiChB8IANB6ABqIAFBMBC+AhogA0EANgL4ASADQQA2AqACIAFBAhCtASADQZgBaiABQTAQvgIaIApFDQQgA0EwaiEPIANB8ABqIRAgAUEEciERIANBgAJqIRIgA0GgAmohEyADQegCaiEHIANBuAJqIQkgA0FAayEUIANByAFqQQRyIRUgA0HwAWohDCADQRBqIQggA0EIakEEciELA0AgAygCYCIEQQVPBH8gAygCPAUgBAsgCmpBAmshBSADKAIwIgQhASAKQQFrIQoCQCAEQQVJIgIEfyABBSADKAIMCyAFTQ0AIANByAFqIANBmAFqQTAQvgIaIAwhBiADKALwASIBQQVPBH8gFSEGIAMoAswBBSABCwRAIAZBADYCAAsgCCEBIAJFBEAgAygCDCEEIAMoAhAhAQsCQAJAAkAgBCAFTwRAIANByAFqIgIgASAFQQN0aiABIARBA3RqEEMgA0HAA2oiASACQTAQvgIaIANB+AFqIgIgASAWEE0gA0GwAmogAkEwEL4CGiAUIQQgAygCYCICQQVPBEAgAygCQCEEIAMoAjwhAgsgCSEBIANB4AJqIAQgAiADKALYAiIFQQVPBH8gAygCtAIhBSADKAK4AgUgAQsgBRBwA0AgByECIAMoAogDIgFBBU8EQCADKALoAiECIAMoAuQCIQELIAghBSADKAIwIgRBBU8EQCADKAIQIQUgAygCDCEECyAEIApJDQIgAiABIAUgCkEDdCIOaiAEIAprEKgBQf8BcUEBRwRAIBAhAiADKAKQASIEQQVPBEAgAygCbCEEIAMoAnAhAgsgBCAKSQ0EIAQgCmshBiACIA5qIAkhBCADKALYAiICQQVPBEAgAygCuAIhBCADKAK0AiECCyAGIAQgAhB4IAghAiADKAIwIgRBBU8EQCADKAIMIQQgAygCECECCyAEIApJDQUgBCAKayEGIAIgDmogByEEIAMoAogDIgJBBU8EQCADKALoAiEEIAMoAuQCIQILIAYgBCACEEwgAygCECEGA0AgCCEBIAMoAjAiBCECIARBBUkiBUUEQCADKAIMIQIgBiEBCwJAIAJFDQAgAkEDdCABakEIaykDAEIAUg0AIA8hAiAFRQRAIAMoAgwhBCALIQILIARFDQEgAiAEQQFrNgIADAELCyADQZgBaiADQbACakEwEL4CGiADQeACahCPAgwGC0G4scIALQAAGkEEEAoiAUUNCSABQQE2AgAgA0KB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AgAgAkEYahAvDBILIAJBJGpCADcCACACQQE2AhwgAkG0i8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBELIAJBJGpCADcCACACQQE2AhwgAkHMi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDBALIAJBJGpCADcCACACQQE2AhwgAkHoi8EANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA8LIAJBJGpCADcCACACQQE2AhwgAkGEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA4LIAJBJGpCADcCACACQQE2AhwgAkHEjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDA0LIAJBJGpCADcCACACQQE2AhwgAkHgjMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAwLIAJBJGpCADcCACACQQE2AhwgAkH4jMEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAsLIAJBJGpCADcCACACQQE2AhwgAkGQjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAoLIAJBJGpCADcCACACQQE2AhwgAkGsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAkLIAJBJGpCADcCACACQQE2AhwgAkHIjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAgLIAJBJGpCADcCACACQQE2AhwgAkHsjcEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAcLIAJBJGpCADcCACACQQE2AhwgAkGQjsEANgIYIAJBjKzCADYCICABKAIUIAFBGGooAgAgAkEYahAvDAYLIAIgAEEEajYCDCACQSRqQgE3AgAgAkEBNgIcIAJB1JfCADYCGCACQTA2AhQgAUEYaigCACEAIAIgAkEQajYCICACIAJBDGo2AhAgASgCFCAAIAJBGGoQLwwFCyACIABBBGo2AgwgAkEkakIBNwIAIAJBATYCHCACQdSXwgA2AhggAkEvNgIUIAFBGGooAgAhACACIAJBEGo2AiAgAiACQQxqNgIQIAEo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AkEEciEGIANByABqIQggA0HoAGohCSADKAJIIQUDQCAIIQQgAygCaCIBIQIgAUEFSSIHRQRAIAUhBCADKAJEIQILAkAgAkUNACACQQN0IARqQQhrKQMAQgBSDQAgCSECIAdFBEAgBiECIAMoAkQhAQsgAUUNASACIAFBAWs2AgAMAQsLIANBEGoiASADQUBrQTAQvgIaIABBASABEEIMAgsgBEEETQR/IAFBCGoFIAEoAgQhBCABKAIICyEBIANBADYCQCADQQA2AmggA0FAayIFIAEgASAEQQN0ahBDIANBEGoiASAFQTAQvgIaIAEgAhB1IAUgAUEwEL4CGiAAIAcgBRBCDAELIAIoAigiBEEETQR/IAJBCGoFIAIoAgQhBCACKAIICyEBIANBADYCQCADQQA2AmggA0FAayICIAEgASAEQQN0ahBDIAAgAkEwEL4CIAU6ADALIANB8ABqJAALlQcBBX8gAEEIayIBIABBBGsoAgAiA0F4cSIAaiECAkACQAJAAkAgA0EBcQ0AIANBA3FFDQEgASgCACIDIABqIQAgASADayIBQfywwgAoAgBGBEAgAigCBEEDcUEDRw0BQfSwwgAgADYCACACIAIoAgRBfnE2AgQgASAAQQFyNgIEIAIgADYCAA8LIANBgAJPBEAgARBfDAELIAFBDGooAgAiBCABQQhqKAIAIgVHBEAgBSAENgIMIAQgBTYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALAkACQCACKAIEIgNBAnFFBEAgAkGAscIAKAIARg0CIAJB/LDCACgCAEYNBSADQXhxIgQgAGohAAJAIARBgAJPBEAgAhBfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HssMIAQeywwgAoAgBBfiADQQN2d3E2AgALIAEgAEEBcjYCBCAAIAFqIAA2AgAgAUH8sMIAKAIARw0BQfSwwgAgADYCAA8LIAIgA0F+cTYCBCABIABBAXI2AgQgACABaiAANgIACyAAQYACSQ0CIAEgABBgQQAhAUGUscIAQZSxwgAoAgBBAWsiADYCACAADQFB3K7CACgCACIABEADQCABQQFqIQEgACgCCCIADQALC0GUscIAQf8fIAEgAUH/H00bNgIADwtBgLHCACABNgIAQfiwwgBB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QQFrNgIADAALAAsgA0FAayIEIAFBMBC+AhogBCACEHUgA0EQaiIBIARBMBC+AhogACAGIAEQQgwCCyADQRBqIgIgA0FAa0EwEL4CGiAAQQEgAhBCCyABEI8CCyADQfAAaiQAC78HAgV/AX4jAEFAaiICJAAgAkEoaiIGIQMjAEEgayIEJAACQAJAAkACQAJAAkBBoK3CACgCAA4CAAECC0GgrcIAQQE2AgALIANBATYCAAwBC0HIrcIALQAAIQVByK3CAEEBOgAAIAQgBToAByAFDQECQAJAQdCtwgAoAgBB/////wdxRQRAIANBADoAFCADQQA2AgAMAQsQvwIgA0EAOgAUIANBADYCAEUNAQtB0K3CACgCAEH/////B3FFDQAQvwINAEHJrcIAQQE6AAALQcitwgBBADoAAAsgBEEgaiQADAELIARCADcCFCAEQYyswgA2AhAgBEEBNgIMIARB+J/CADYCCCAEQQdqIARBCGoQ7gEACyACQRhqIAJBNGopAgA3AwAgAkEgaiACQTxqKAIANgIAIAIgAikCLDcDEEG4scIALQAAGiACKAIoIQQCQEEQEAoiA0UNACADIAApAgA3AgAgA0EIaiAAQQhqKQIANwIAQbixwgAtAAAaQQwQCiIARQ0AIABCgYCAgBA3AgQgACADNgIAQbixwgAtAAAaQRAQCiIDRQ0AIAApAgAhByAAIAM2AgAgAkEwaiAAQQhqKAIANgIAIABCATcCBCACIAc3AyggAkEIaiAGEMUBQbixwgAtAAAaIAIoAgwhBSACKAIIIQZBEBAKIgNFDQAgAyABKQIANwIAIANBCGogAUEIaikCADcCACAAKAIIIgEgACgCBEYEQCAAIAEQgQEgACgCCCEBCyAAKAIAIAFBBHRqIgEgBTYCDCABIAY2AgggAUH45cAANgIEIAEgAzYCACAAIAAoAghBAWo2AggCQCAEQQNGDQAgAkE0aiACQRhqKQMANwIAIAJBPGogAkEgaigCADYCACACIAIpAxA3AiwgAiAENgIoIARB/wFxQQJHBEAgBEECSQ0BIAJBLGoQqgEMAQtBuLHCAC0AABpBEBAKIgFFDQEgACkCACEHIAAgATYCACACQTBqIABBCGooAgA2AgAgAEIBNwIEIAIgBzcDKCACIAJBKGoQxQFBuLHCAC0AABogAigCBCEFIAIoAgAhBkEYEAoiA0UNASADIAIpAxA3AgQgAyAENgIAIANBFGogAkEgaigCADYCACADQQxqIAJBGGopAwA3AgAgACgCCCIBIAAoAgRGBEAgACABEIEBIAAoAgghAQsgACgCACABQQR0aiIBIAU2AgwgASAGNgIIIAFB4OXAADYCBCABIAM2AgAgACAAKAIIQQFqNgIICyACQUBrJAAgAA8LAAuGBQEKfyMAQTBrIgMkACADQSRqIAE2AgAgA0EDOgAsIANBIDYCHCADQQA2AiggAyAANgIgIANBADYCFCADQQA2AgwCfwJAAkACQCACKAIQIgpFBEAgAkEMaigCACIARQ0BIAIoAgghASAAQQN0IQUgAEEBa0H/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQAADQQLIAEoAgAgA0EMaiABQQRqKAIAEQEADQMgAUEIaiEBIABBCGohACAFQQhrIgUNAAsMAQsgAkEUaigCACIARQ0AIABBBXQhCyAAQQFrQf///z9xQQFqIQcgAigCCCEIIAIoAgAhAANAIABBBGooAgAiAQRAIAMoAiAgACgCACABIAMoAiQoAgwRAAANAwsgAyAFIApqIgFBEGooAgA2AhwgAyABQRxqLQAAOgAsIAMgAUEYaigCADYCKCABQQxqKAIAIQZBACEJQQAhBAJAAkACQCABQQhqKAIAQQFrDgIAAgELIAZBA3QgCGoiDCgCBEEFRw0BIAwoAgAoAgAhBgtBASEECyADIAY2AhAgAyAENgIMIAFBBGooAgAhBAJAAkACQCABKAIAQQFrDgIAAgELIARBA3QgCGoiBigCBEEFRw0BIAYoAgAoAgAhBAtBASEJCyADIAQ2AhggAyAJNgIUIAggAUEUaigCAEEDdGoiASgCACADQQxqIAEoAgQRAQANAiAAQQhqIQAgCyAFQSBqIgVHDQALCyAHIAIoAgRPDQEgAygCICACKAIAIAdBA3RqIgAoAgAgACgCBCADKAIkKAIMEQAARQ0BC0EBDAELQQALIANBMGokAAvfBAEHfwJ/IAFFBEAgACgCHCEGQS0hCSAFQQFqDAELQStBgIDEACAAKAIcIgZBAXEiARshCSABIAVqCyEHAkAgBkEEcUUEQEEAIQIMAQsCQCADRQRADAELIANB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IARyIQALIAJBKGpBEDYCACACQRhqQQI2AgAgAkERNgIgIAIgADoALyACIAI2AiQgAiACQS9qNgIcIAJB7ABqQQM6AAAgAkHoAGpBADYCACACQeAAakKggICAEDcCACACQdgAakKCgICAIDcCACACQQM2AgggAkHEycAANgIEIAJBAjYCUCACQQM6AEwgAkEINgJIIAJCIDcCQCACQoCAgIAgNwI4IAJBAjYCMCACIAJBMGo2AhQgAkEQakECNgIAIAFBGGooAgAhACACIAJBHGo2AgwgASgCFCAAIAJBBGoQLyACQfAAaiQAC9ADAQh/IwBB0ABrIgMkACADIAI2AkggAyACNgJEIAMgATYCQCADQShqIANBQGsQvAEgAygCKCEEIANBIGogAygCLCIHENUBQQAhAiADQQA2AjwgAyADKAIkNgI4IAMgAygCICIJNgI0IAdBAnQhBQJAAkACQCAHBEAgBCEBA0AgA0EYaiABKAIAIgoQACADKAIYIghFDQQgAygCHCEGIAMgCDYCQCADIAY2AkggAyAGNgJEIANBEGogA0FAaxDEASADKAIQIghFDQQgAygCFCEGIApBhAFPBEAgChABCyABQQRqIQEgAygCOCACRgR/IANBNGogAhCCASADKAI0IQkgAygCPAUgAgtBDGwgCWoiAiAGNgIIIAIgBjYCBCACIAg2AgAgAyADKAI8QQFqIgI2AjwgBUEEayIFDQALDAELIAQgBWoiASAERg0BIAEgBGtBAnYhASAEIQIDQCACKAIAIgVBhAFPBEAgBRABCyACQQRqIQIgAUEBayIBDQALCyAHRQ0AIAQQIgsgA0HIAGogA0E8aigCADYCACADIAMpAjQ3A0AgA0EIaiADQUBrEL0BIAAgAykDCDcDACADQdAAaiQADwtB9qzCAEEoELQCAAvRAwEGfyABKAIgIgJFBEAgASgCACABQQA2AgAEQAJAIAEoAgQiAg0AIAEoAgwhAyABKAIIIQIDQCADRQ0BIANBAWshAyACKAKYAyECDAALAAsDQCACKAKIAiACECIiAg0ACwsgAEEANgIADwsgASACQQFrNgIgAkACfwJAAkBBACABKAIAIgMgASgCBCICG0UEQCADRQ0BIAFBCGooAgAhBCABQQxqKAIADAMLIAFBCGohAiABQQxqKAIAIQMDQCACKAIAIQIg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BiAEQQFrIgRFDQADQCACKAKYAyECIARBAWsiBA0ACwsgASAGNgIMIAFBADYCCCABIAI2AgQgAyAFQRhsaiEEIAMgBUEMbGpBjAJqBUEACyECIAAgBDYCBCAAIAI2AgAPC0GAl8IAQStBiJLCABDeAQALtwMBAX8jAEFAaiICJAACQAJAAkACQAJAAkAgAC0AAEEBaw4DAQIDAAsgAiAAKAIENgIIQbixwgAtAAAaQRQQCiIARQ0EIABBEGpBtqbCACgAADYAACAAQQhqQa6mwgApAAA3AAAgAEGmpsIAKQAANwAAIAJClICAgMACNwIQIAIgADYCDCACQTRqQgI3AgAgAkEkakEyNgIAIAJBAzYCLCACQbiewgA2AiggAkEzNgIcIAFBGGooAgAhACACIAJBGGo2AjAgAiACQQhqNgIgIAIgAkEMajYCGCABKAIUIAAgAkEoahAvIQAgAigCEEUNAyACKAIMECIMAwsgAC0AASEAIAJBNGpCATcCACACQQE2AiwgAkHUl8IANgIoIAJBBzYCECACIABBAnQiAEH8psIAaigCADYCHCACIABBoKjCAGooAgA2AhggAUEYaigCACEAIAIgAkEMajYCMCACIAJBGGo2AgwgASgCFCAAIAJBKGoQLyEADAILIAEgACgCBCIAKAIAIAAoAgQQESEADAELIAAoAgQiACgCACABIAAoAgQoAhARAQAhAAsgAkFAayQAIAAPCwAL8AIBB38jAEEQayIEJAACQAJAAkACQAJAAkAgASgCBCIFRQ0AIAEoAgAhBiAFQQNxIQcCQCAFQQRJBEBBACEFDAELIAZBHGohAyAFQXxxIgUhCANAIAMoAgAgA0EIaygCACADQRBrKAIAIANBGGsoAgAgAmpqamohAiADQSBqIQMgCEEEayIIDQALCyAHBEAgBUEDdCAGakEEaiEDA0AgAygCACACaiECIANBCGohAyAHQQFrIgcNAAsLIAFBDGooAgAEQCACQQBIDQEgBigCBEUgAkEQSXENASACQQF0IQILIAINAQtBASEDQQAhAgwBCyACQQBIDQFBuLHCAC0AABogAhAKIgNFDQILIARBADYCCCAEIAI2AgQgBCADNgIAIARBiIfAACABEC9FDQJBzIfAAEEzIARBD2pBgIjAAEGoiMAAEK4BAAsQ6gEACwALIAAgBCkCADcC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cUGAAXI6AA0gAyABQRJ2QQdxQfABcjoADEEEDAILIAAoAggiAiAAKAIERgRAIwBBIGsiBCQAAkACQCACQQFqIgJFDQBBCCAAKAIEIgZBAXQiBSACIAIgBUkbIgIgAkEITRsiBUF/c0EfdiECAkAgBkUEQCAEQQA2AhgMAQsgBCAGNgIcIARBATYCGCAEIAAoAgA2AhQLIARBCGogAiAFIARBFGoQjAEgBCgCDCECIAQoAghFBEAgACAFNgIEIAAgAjYCAAwCCyACQYGAgIB4Rg0BIAJFDQAACxDqAQALIARBIGokACAAKAIIIQILIAAgAkEBajYCCCAAKAIAIAJqIAE6AAAMAgsgAyABQT9xQYABcjoADSADIAFBBnZBwAFyOgAMQQILIQEgASAAKAIEIAAoAggiAmtLBEAgACACIAEQhgEgACgCCCECCyAAKAIAIAJqIANBDGogARC+AhogACABIAJqNgIICyADQRBqJABBAAunAgIBfwJ+IwBBkAFrIgckACAHQYABaiABQgAgAEIChiIAQgKEIggQsAEgB0HwAGogAkIAIAgQsAEgB0HgAGogB0GIAWopAwAiCCAHKQNwfCIJIAdB+ABqKQMAIAggCVatfCADQUBrQf8AcSIDEMgBIAQgBykDYDcDACAHQdAAaiABQgAgACAGrUJ/hXwiCBCwASAHQUBrIAJCACAIELABIAdBMGogB0HYAGopAwAiCCAHKQNAfCIJIAdByABqKQMAIAggCVatfCADEMgBIAUgBykDMDcDACAHQSBqIAFCACAAELABIAdBEGogAkIAIAAQsAEgByAHQShqKQMAIgAgBykDEHwiASAHQRhqKQMAIAAgAVatfCADEMgBIAcpAwAgB0GQAWokAAvAAgIFfwF+IwBBMGsiBSQAQSchAwJAIABCkM4AVARAIAAhCAwBCwNAIAVBCWogA2oiBEEEayAAQpDOAIAiCELwsQN+IAB8pyIGQf//A3FB5ABuIgdBAXRB+onCAGovAAA7AAAgBEECayAHQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAAIANBBGshAyAAQv/B1y9WIAghAA0ACwsgCKciBEHjAEsEQCADQQJrIgMgBUEJamogCKciBkH//wNxQeQAbiIEQZx/bCAGakH//wNxQQF0QfqJwgBqLwAAOwAACwJAIARBCk8EQCADQQJrIgMgBUEJamogBEEBdEH6icIAai8AADsAAAwBCyADQQFrIgMgBUEJamogBEEwajoAAAsgAiABQYyswgBBACAFQQlqIANqQScgA2sQMCAFQTBqJAAL0wIBB38jAEEgayICJAAgAEGMrMIANgIEIABBjKzCADYCAAJAIAAoAhBFBEAgACgCCCAAQRRqELUBDAELIAAoAgggACgCDCAAQRRqIgMQswFFDQAgAkEIagJ/IABBGGooAgAiASAAKAIUIgRGBEAgAQwBCyAAIAEgBGsQ2AEgACgCCCAAKAIMIAMQswFFDQEgACgCFCEBIAAoAhgLIAFrEOABIAJBADYCHCACIAIpAwg3AhQgAkEUaiADELUBIAIoAhggAigCFCEEAkAgAigCHCIDRQ0AIAAgAxDYASAAKAIMIgEgACgCCCIFKAIIIgBGDQAgASAAayEGIAUoAgAgAGohACAEIQEDQCADRQ0BIAAgAS0AADoAACAFIAUoAghBAWo2AgggA0EBayEDIAFBAWohASAAQQFqIQAgBkEBayIGDQALC0UNACAEECILIAJBIGokAAuvAgIEfwF+IwBBgAFrIgMkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAApAwBBASABEFYMAgsgACkDACEGQf8AIQADQCADIAAiAmoiBEEwQdcAIAanQQ9xIgBBCkkbIABqOgAAIAJBAWshACAGQhBUIAZCBIghBkUNAAsgAkGAAUsNAiABQQFB+KjAAEECIARBgAEgAmsQMAwBCyAAKQMAIQZB/wAhAANAIAMgACICaiIEQTBBNyAGp0EPcSIAQQpJGyAAajoAACACQQFrIQAgBkIQVCAGQgSIIQZFDQALIAJBgAFLDQIgAUEBQfiowABBAiAEQYABIAJrEDALIANBgAFqJAAPCyACQYABQeiowAAQuQEACyACQYABQeiowAAQuQEAC7UCAQV/IwBBgAFrIgQkACAAKAIAIQACQAJAAn8CQCABKAIcIgJBEHFFBEAgAkEgcQ0BIAAxAABBASABEFYMAgsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQdcAIABBD3EiAkEKSRsgAmo6AAAgA0EBayECIABB/wFxIgZBBHYhACAGQRBPDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgAC0AACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEH/AXEiBkEEdiEAIAZBEE8NAAsgA0GAAUsNAiABQQFB+KjAAEECIAVBgAEgA2sQMAsgBEGAAWokAA8LIANBgAFB6KjAABC5AQALIANBgAFB6KjAABC5AQAL1wICB38BfiMAQTBrIgIkAEG4scIALQAAGgJAQRAQCiIFRQ0AIAApAgAhCSAAIAU2AgAgAkEYaiIEIABBCGooAgA2AgAgAEIBNwIEQbixwgAtAAAaIAIgCTcDEEEQEAoiA0UNACACQShqIAQoAgA2AgAgAiACKQMQNwMgIAJBCGogAkEgaiIGEMUBQbixwgAtAAAaIAIoAgwhByACKAIIIQhBARAKIgRFDQAgAyAINgIIIANBsOXAADYCBCADIAQ2AgAgBEEAOgAAIANBDGogBzYCACACQoGAgIAQNwIkIAIgAzYCICACIAYQxQFBuLHCAC0AABogAigCBCEEIAIoAgAhBkEQEAoiA0UNACADIAEpAgA3AgAgA0EIaiABQQhqKQIANwIAIABBATYCCCAFIAQ2AgwgBSAGNgIIIAVB+OXAADYCBCAFIAM2AgAgAkEwaiQAIAAPCwAL9gIBAX8jAEEQayICJAACfwJAAkACQAJAAkACQAJAAkACQAJAIAAoAgAiAC0AAEEBaw4JAQIDBAUGBwgJAAsgAiAAQQFqNgIIIAFBrIPBAEEGIAJBCGpBtIPBABB9DAkLIAEoAhRBxIPBAEERIAFBGGooAgAoAgwRAAAMCAsgASgCFEHVg8EAQRAgAUEYaigCACgCDBEAAAwHCyABKAIUQeWDwQBBECABQRhqKAIAKAIMEQAADAYLIAEoAhRB9YPBAEEFIAFBGGooAgAoAgwRAAAMBQsgASgCFEH6g8EAQQYgAUEYaigCACgCDBEAAAwECyABKAIUQYCEwQBBCCABQRhqKAIAKAIMEQAADAMLIAEoAhRBiITBAEEYIAFBGGooAgAoAgwRAAAMAgsgASgCFEGghMEAQRkgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUG5hMEAQRNBzITBAEEIIAJBDGpB1ITBABCNAQsgAkEQaiQAC6QCAQV/IwBBgAFrIgQkAAJAAkACfwJAIAEoAhwiAkEQcUUEQCACQSBxDQEgADUCAEEBIAEQVgwCCyAAKAIAIQBB/wAhAgNAIAQgAiIDaiIFQTBB1wAgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDAMAQsgACgCACEAQf8AIQIDQCAEIAIiA2oiBUEwQTcgAEEPcSICQQpJGyACajoAACADQQFrIQIgAEEQSSAAQQR2IQBFDQALIANBgAFLDQIgAUEBQfiowABBAiAFQYABIANrEDALIARBgAFqJAAPCyADQYABQeiowAAQuQEACyADQYABQeiowAAQuQEAC7gCAQd/IwBBEGsiAiQAQQEhBwJAAkAgASgCFCIEQScgAUEYaigCACgCECIFEQEADQAgAiAAKAIAQYECEBMCQCACLQAAQYABRgRAIAJBCGohBkGAASEDA0ACQCADQYABRwRAIAItAAoiACACLQALTw0EIAIgAEEBajoACiAAQQpPDQYgACACai0AACEBDAELQQAhAyAGQQA2AgAgAigCBCEBIAJCADcDAAsgBCABIAURAQBFDQALDAILQQogAi0ACiIBIAFBCk0bIQAgAi0ACyIDIAEgASADSRshBgNAIAEgBkYNASACIAFBAWoiAzoACiAAIAFGDQMgASACaiEIIAMhASAEIAgtAAAgBREBAEUNAAsMAQsgBEEnIAURAQAhBwsgAkEQaiQAIAcPCyAAQQpB1L7AABC3AQALtwIBBn8jAEEQayIEJAAgASgCACIDKAIAIQUCQAJAAkACQCADKAIIIgEgA0EEaigCACICSQRAA0AgASAFai0AACIGQQlrIgdBF0tBASAHdEGTgIAEcUVyDQIgAyABQQFqIgE2AgggASACRw0ACyACIQELIARBCGogBSACIAIgAUEBaiIBIAEgAksbELYBQbixwgAtAAAaIAQoAgwhAiAEKAIIIQNBFBAKIgFFDQMgAUEDNgIADAELIAZBOkYEQCADIAFBAWo2AgggACADEAkMAgsgBCAFIAIgAiABQQFqIgEgASACSxsQtgFBuLHCAC0AABogBCgCBCECIAQoAgAhA0EUEAoiAUUNAiABQQY2AgALIAEgAzYCDCAAIAE2AgQgAEEGOgAAIAEgAjYCEAsgBEEQaiQADwsAC7gCAQV/IAAoAhgh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AgwRAAALIAJBEGokAAv/FAIUfwF+IwBBIGsiCyQAIABBDGooAgAhAQJAAkACQAJAAkAgACgCBA4CAAECCyABDQFBjKzCACEBQQAhAAwCCyABDQAgACgCACIBKAIEIQAgASgCACEBDAELIAtBFGogABBGDAELIAtBCGogABDgASALKAIMIQQgCygCCCABIAAQvgIhASALIAA2AhwgCyAENgIYIAsgATYCFAsCf0EAIQEjAEEQayINJAAgC0EUaiIQKAIIIQQgECgCACEJQQEhBkEBIQpBASEAAkACQAJAAkACQAJAAkACQAJAAkACQANAIAEgBWoiA0EISw0BIAAhAgJAIAZBxPHBAGotAAAiByADQcTxwQBqLQAAIgNJBEAgACABakEBaiIAIAVrIQpBACEBDAELIAMgB0cEQEEBIQogAkEBaiEAQQAhASACIQUMAQtBACABQQFqIgAgACAKRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAtBASEGQQEhCEEAIQdBASEAQQAhAQNAIAEgB2oiA0EISw0CIAAhAgJAIAZBxPHBAGotAAAiBiADQcTxwQBqLQAAIgNLBEAgACABakEBaiIAIAdrIQhBACEBDAELIAMgBkcEQEEBIQggAkEBaiEAQQAhASACIQcMAQtBACABQQFqIgAgACAIRiIDGyEBIABBACADGyACaiEACyAAIAFqIgZBCUkNAAsgBSAHIAUgB0siABsiA0EKTw0CIAogCCAAGyIKIANqIgAgCkkNAyAAQQlLDQRBxPHBACAKQcTxwQBqIAMQvAIiDA0JQQEhBkEAIQFBASECQQAhCANAIAIiACABaiIHQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0HQQggASAIamsiA0EJTw0IAkAgAkHE8cEAai0AACIFIANBxPHBAGotAAAiAkkEQCAHQQFqIgIgCGshBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhCAwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQEhBkEAIQFBASECQQAhAwNAIAIiACABaiIOQQhNBEAgAEF/cyABayIFQQlqIQIgBUF3SQ0JQQggASADamsiB0EJTw0KAkAgAkHE8cEAai0AACIFIAdBxPHBAGotAAAiAksEQCAOQQFqIgIgA2shBkEAIQEMAQsgAiAFRwRAIABBAWohAkEAIQFBASEGIAAhAwwBC0EAIAFBAWoiAiACIAZGIgUbIQEgAkEAIAUbIABqIQILIAYgCkcNAQsLQQkhB0EJIAggAyADIAhJG2shAyAKRQRAQQAhCgwLCyAKQQNxIQACQCAKQQRJBEBBACECDAELIApBfHEhAkEAIQEDQEIBIAFBxPHBAGoxAACGIBWEQgEgAUHF8cEAajEAAIaEQgEgAUHG8cEAajEAAIaEQgEgAUHH8cEAajEAAIaEIRUgAiABQQRqIgFHDQALCyAARQ0KIAJBxPHBAGohAQNAQgEgATEAAIYgFYQhFSABQQFqIQEgAEEBayIADQALDAoLIANBCUHsr8AAELcBAAsgA0EJQeyvwAAQtwEACyADQQlBzK/AABC4AQALIAogAEHcr8AAELoBAAsgAEEJQdyvwAAQuAEACyACQQlB/K/AABC3AQALIANBCUGMsMAAELcBAAsgAkEJQfyvwAAQtwEACyAHQQlBjLDAABC3AQALIANBCSADayIAIAAgA0kbQQFqIQpBfyEHQoCAgICwxJQIIRULAkACQAJAIARBCUkNAEEJIAMgA0EJTRshDiAJQQFrIREgCUEJayESIARBCWshACAEIQIDQCAVIAAgCWoxAACIp0EBcUUEQANAIABBCWsiASAETw0DIAdBCSAMGyEHIAAgEmohAiABIQAgFSACMQAAiKdBAXFFDQALIAFBCWohAgsgACARaiEPIABBAWshEyADIAMgByADIAdJGyAMGyIBQQFrIRQCQAJAAkACQAJAAkACQAJAAkACQANAIAFFBEBBCSAHIAwbIgEgAyABIANLGyEFIAAgCWohDyADIQEDQCABIAVGDQMgASAORg0EIAAgAWogBE8NBSABIA9qIQggAUHE8cEAaiEGIAFBAWohASAGLQAAIAgtAABGDQALIAIgCmshAiAKIQEgDA0LDAoLIAFBAWshCCAUQQlPDQYgASATaiIFIARPDQQgASAPaiEGIAFBw/HBAGohBSAIIQEgBS0AACAGLQAARg0ACyACIANrIAFqIQIgDA0JQQkhAQwIC0F3IABrIQIgAEEJaiIDIQEDQAJAAkACQCABBEACfyABIARPBEAgASAERw0KIAIgBGoMAQsgASAJaiwAAEG/f0wNCSAEIAFrC0UNAQsgASAJaiIGLQAAQTBrQf8BcUEKSQ0CIAQhBSABDQEMCgsgASAJaiEGCwJAIAEgBE8EQCABIARHDQEMCQsgBiwAAEG/f0oNCAsgCSAEIAEgBEH088EAEJkCAAsgAkEBayECIAFBAWohAQwACwALIA5BCUGQ7MEAELcBAAsgBCAAIANqIgAgACAESRsgBEGg7MEAELcBAAsgBSAEQcDswQAQtwEACyAJIAQgASAEQeTzwQAQmQIACyAIQQlBsOzBABC3AQALIAQgAWshBQtBASECIAVBCEkNBCAGKQAAQqDGvePWrpu3IFINBEEIIQUgCUEIaiECQQAgAWshDiAEQQhrIQcgAUEIaiIIIQoCQAJAA0ACQAJAAkACQCABIAVqIgwEQAJ/IAQgDE0EQCABIAdHDQQgByAOagwBCyABIAJqLAAAQb9/TA0DIAQgCmsLRQ0BCyABIAJqLQAAQTBrQf8BcUEKSQ0CC0EBIQIgASAFaiIFIARJDQogASADSQ0FAkAgA0UNACADIARPBEAgAyAERg0BDAcLIAMgCWosAABBQEgNBgsCQCABRQ0AIAEgBE8EQCABIARHDQcMAQsgBiwAAEG/f0wNBgsgDUEIaiADIAlqIAEgA2sQZyANLQAIDQogBSAISQ0EIA0oAgwhBgJAIAhFDQAgBCAITQRAIAQgCEYNAQwGCyAIIAlqLAAAQUBIDQULIAxBACAEIAVHGw0EIA1BCGogCCAJaiAFIAhrEGcgDS0ACA0KIA0oAgwhBUEAIQIgACAESwRAIAQhAAwMCyAARSAAIARPckUEQCAPLAAAQb9/TA0DCyAQIAA2AggMCwsgCSAEIAwgBEGE9MEAEJkCAAsgAkEBaiECIAdBAWshByAFQQFqIQUgCkEBaiEKDAELC0HQ7MEAQTBBgO3BABDeAQALIAkgBCAIIAVBpPTBABCZAgALIAkgBCADIAFBlPTBABCZAgALIAEhBwsgAkEJayIAIARJDQALC0EBIQILIAQhAAsCQAJAIBAoAgQiASAATQ0AIABFBEAgCRAiQQEhCQwBCyAJIAFBASAAECMiCUUNAQtBuLHCAC0AABpBFBAKIgFFDQAgASAANgIIIAEgCTYCBCABQQA2AgAgAUEAIAUgAhs2AhAgAUEAIAYgAhs2AgwgDUEQaiQAIAEMAQsACyALQSBqJAALqQEBAX8jAEEQayICJAACfwJAAkACQAJAIAAtAABBAWsOAwECAwALIAIgAEEBajYCCCABQcCNwABBCyAAQQRqIAJBCGoQeQwDCyABKAIUQbeSwABBDSABQRhqKAIAKAIMEQAADAILIAIgAEEBajYCDCABQcuNwABBESAAQQRqIAJBDGoQeQwBCyABKAIUQdyNwABBDiABQRhqKAIAKAIMEQAACyACQRBqJAALrgEBAX8jAEEQayICJAACfwJAAkACQAJAIAAoAgAiACgCAEEBaw4DAQIDAAsgAiAAQQRqNgIIIAFBvpbCAEEEIAJBCGpB5IbBABB9DAMLIAEoAhRB1JbCAEEMIAFBGGooAgAoAgwRAAAMAgsgASgCFEH0hsEAQRMgAUEYaigCACgCDBEAAAwBCyACIABBBGo2AgwgAUGHh8EAQQkgAkEMakGQh8EAEH0LIAJBEGokAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQcTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuLAQEBfyMAQUBqIgMkACADIAI2AgQgAyABNgIAIANBFGpCAjcCACADQSxqQQE2AgAgA0E4aiAAQQhqKQMANwMAIANBAjYCDCADQaTywQA2AgggA0ECNgIkIAMgACkDADcDMCADIANBIGo2AhAgAyADNgIoIAMgA0EwajYCICADQQhqEJkBIANBQGskAAuSAQECfyMAQSBrIgIkAAJAIAEEQCABKAIAIgNBf0YNASABIANBAWo2AgAgAkEUaiIDIAFBBGooAgAgAUEMaigCABCQASABIAEoAgBBAWs2AgAgAkEIaiADEL0BIAIgAigCCCACKAIMEFAgAigCBCEBIAAgAigCADYCACAAIAE2AgQgAkEgaiQADwsQtQIACxC2AgALkgEBAn8jAEEgayICJAACQCABBEAgASgCACIDQX9GDQEgASADQQFqNgIAIAJBFGoiAyABQRBqKAIAIAFBGGooAgAQkAEgASABKAIAQQFrNgIAIAJBCGogAxC9ASACIAIoAgggAigCDBBQIAIoAgQhASAAIAIoAgA2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NgIoIAIgASABIANBA3RqEEMgACACQTAQvgIaDAELIAAgAUEwEL4CGgsgAkEwaiQAC4MBAQN/IwBBEGsiAyQAAkAgACgCKCIEQQVJBEAgBCECQQQhBAwBCyAAKAIEIQILAkACQCAEIAJrIAFPDQAgASACaiIBIAJJDQEgA0EIaiAAIAEQQSADKAIIIgBBgYCAgHhGDQAgAEUNAQALIANBEGokAA8LQezwwABBEUGA8cAAEN4BAAt+AQF/IwBBQGoiBSQAIAUgATYCDCAFIAA2AgggBSADNgIUIAUgAjYCECAFQSRqQgI3AgAgBUE8akEGNgIAIAVBAjYCHCAFQYCowAA2AhggBUEHNgI0IAUgBUEwajYCICAFIAVBEGo2AjggBSAFQQhqNgIwIAVBGGogBBDrAQALgQEBA38CQCAALQAAIgFBBkYNAAJAAkACQCABDgUDAwMBAgALIABBBGoQsgEPCyAAQQhqKAIARQ0BIAAoAgQQIg8LIAAoAgQhASAAQQxqKAIAIgMEQCABIQIDQCACELQBIAJBGGohAiADQQFrIgMNAAsLIABBCGooAgBFDQAgARAiCwtoAQV+IAAgA0L/////D4MiBCABQv////8PgyIFfiIGIAUgA0IgiCIHfiIFIAQgAUIgiCIIfnwiAUIghnwiBDcDACAAIAQgBlStIAcgCH4gASAFVK1CIIYgAUIgiIR8fCACIAN+fDcDCAt2AQJ/IwBBIGsiAiQAAkAgAQRAIAEoAgAiA0F/Rg0BIAEgA0EBajYCACACQRBqIgMgAUEcaigCACABQSRqKAIAENYBIAEgASgCAEEBazYCACACQQhqIAMQxAEgACACKQMINwMAIAJBIGokAA8LELUCAAsQtgIAC4EBAQJ/IwBBMGsiASQAAn8gACgCACICRQRAQQAhAkEADAELIAEgAjYCJCABQQA2AiAgASACNgIUIAFBADYCECABIAAoAgQiAjYCKCABIAI2AhggACgCCCECQQELIQAgASACNgIsIAEgADYCHCABIAA2AgwgAUEMahCAASABQTBqJAALeAEEf0EBIQQCQCABIAAoAggiA0YNACABIANrIQUgACgCACADaiEDIAIoAgAhASACKAIEIQYDQCABIAZHIgRFDQEgAyABLQAAOgAAIAIgAUEBaiIBNgIAIAAgACgCCEEBajYCCCADQQFqIQMgBUEBayIFDQALCyAEC3kBA38CQAJAAkACQCAALQAADgUDAwMBAgALIABBBGoQsgEMAgsgAEEIaigCAEUNASAAKAIEECIPCyAAKAIEIQIgAEEMaigCACIDBEAgAiEBA0AgARC0ASABQRhqIQEgA0EBayIDDQALCyAAQQhqKAIARQ0AIAIQIgsLdgEFfyABKAIEIgUgASgCACIDayIEIAAoAgQgACgCCCICa0sEQCAAIAIgBBCIASAAKAIIIQILIAAoAgAhBgNAIAMgBUZFBEAgASADQQFqIgQ2AgAgAiAGaiADLQAAOgAAIAJBAWohAiAEIQMMAQsLIAAgAjYCCAtqAQJ/AkAgAiADTwRAIANFBEBBASECDAILQQEhAgNAQQAgBEEBaiABLQAAQQpGIgUbIQQgAUEBaiEBIAIgBWohAiADQQFrIgMNAAsMAQsgAyACQaiMwgAQuAEACyAAIAQ2AgQgACACNgIAC20BAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeimwAA2AgggA0EENgIkIAMgA0EgajYCECADIAM2AiggAyADQQRqNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBFGpCAjcCACADQSxqQQQ2AgAgA0ECNgIMIANBsKrAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgA0EEajYCKCADIAM2AiAgA0EIaiACEOsBAAttAQF/IwBBMGsiAyQAIAMgADYCACADIAE2AgQgA0EUakICNwIAIANBLGpBBDYCACADQQI2AgwgA0GQqsAANgIIIANBBDYCJCADIANBIGo2AhAgAyADQQRqNgIoIAMgAzYCICADQQhqIAIQ6wEAC20BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQRRqQgI3AgAgA0EsakEENgIAIANBAjYCDCADQeSqwAA2AgggA0EENgIkIAMgA0EgajYCECADIANBBGo2AiggAyADNgIgIANBCGogAhDrAQALbQEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBFGpCAjcCACADQSxqQQQ2AgAgA0EDNgIMIANBpKzAADYCCCADQQQ2AiQgAyADQSBqNgIQIAMgAzYCKCADIANBBGo2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SA0AQZyxwgBBADoAACABRQ0AAAsACzsBAX8jAEEQayICJAAgAiAAKAIANgIMIAFBoO/AAEEHQafvwABBBCACQQxqQazvwAAQjQEgAkEQaiQACywAIAEEQANAIABBBGooAgAEQCAAKAIAECILIABBDGohACABQQFrIgENAAsLCz4BAX8jAEEQayICJAAgAkGrl8IANgIMIAIgADYCCEEAIAJBCGpBrJfCACACQQxqQayXwgAgAUG4oMIAEE8ACzMBAX8jAEEQayICJAAgAiAAKAIANgIMIAFB+oPBAEEGIAJBDGpBoMbAABB9IAJBEGokAAswAQF/IwBBEGsiAiQAIAIgADYCDCABQfqDwQBBBiACQQxqQaDGwAAQfSACQRBqJAALLQACQCADaUEBR0GAgICAeCADayABSXJFBEAgACABIAMgAhAjIgANAQsACyAACzYAIAEoAhQgACgCAC0AAEECdCIAQeiqwgBqKAIAIABBxKnCAGooAgAgAUEYaigCACgCDBEAAAszACABKAIUIAAtAABBAnQiAEHshsAAaigCACAAQdCGwABqKAIAIAFBGGooAgAoAgwRAAALJwEBfyMAQRBrIgIkACACIAAoAgA2AgwgAkEMaiABEFwgAkEQaiQACzEAIAEoAhRB/JHAAEGRksAAIAAoAgAtAAAiABtBFUEXIAAbIAFBGGooAgAoAgwRAAALJQACQCAABEAgACgCAEF/Rg0BIABBNGotAAAPCxC1AgALELYCAAsxACABKAIUQbeSwABBqJLAACAAKAIALQAAIgAbQQ1BDyAAGyABQRhqKAIAKAIMEQAAC9MBAQJ/IwBBEGsiAyQAQQchBAJAAkACQAJAAkACQCAALQAAQQFrDgUAAQIDBAULIAMgAC0AAToAAUEAIQQMBAsCQAJAAkAgACgCCEEBaw4CAQIACyADIABBEGopAwA3AwhBASEEDAULIAMgAEEQaikDADcDCEECIQQMBAsgAyAAQRBqKwMAOQMIQQMhBAwDCyADIAAoAgQ2AgQgA0EIaiAAQQxqKAIANgIAQQUhBAwCC0EKIQQMAQtBCyEECyADIAQ6AAAgAyABIAIQnQEgA0EQaiQACx4AIAAoAgAiAK1CACAArH0gAEEATiIAGyAAIAEQVgsfAQJ+IAApAwAiAiACQj+HIgOFIAN9IAJCAFkgARBWCyUAIABFBEBB+ezAAEEyELQCAAsgACACIAMgBCAFIAEoAhARCAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBQALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARBwALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARHgALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIAALIwAgAEUEQEH57MAAQTIQtAIACyAAIAIgAyAEIAEoAhARIgALIgAgAC0AAEUEQCABQd3swABBBRARDwsgAUHi7MAAQQQQEQshACAARQRAQfnswABBMhC0AgALIAAgAiADIAEoAhARAwALHwAgAEUEQEH57MAAQTIQtAIACyAAIAIgASgCEBEBAAsfACABKAIUIAAoAgAgACgCBCABQRhqKAIAKAIMEQAACx0AIAAgATYCBCAAQQI2AgAgAEEIakHA5MAANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakHI48AANgIACx0AIAAgATYCBCAAQQI2AgAgAEEIakGE5MAANgIACx0AIAAoAgAiACgCACAAKAIEIAEoAhQgASgCGBAgCxwAIAEoAhRBi+XBAEEDIAFBGGooAgAoAgwRAAALHAAgASgCFEGO5cEAQQMgAUEYaigCACgCDBEAAAscACABKAIUQfylwABBDiABQRhqKAIAKAIMEQAACxwAIAEoAhRB3NDAAEEFIAFBGGooAgAoAgwRAAALHAAgASgCFEG04sAAQRUgAUEYaigCACgCDBEAAAsVACAAKAIAQQJPBEAgAEEEahCqAQsLFAAgACgCKEEFTwRAIAAoAggQIgsLGgAgAEGM5cAANgIIIAAgATYCBCAAQQA2AgALGgAgAEGA5cAANgIIIAAgATYCBCAAQQA2AgALGAAgACgCACAAKAIEIAEoAhQgASgCGBAgCxgAIAAoAgAgACgCCCABKAIUIAEoAhgQIAsRACAAKAIEBEAgACgCABAiCwsTACABKAIUIAFBGGooAgAgABAvCxUAIAEgACgCACIAKAIAIAAoAgQQEQsVAQF/IwBBEGsiASAAOgAPIAEtAA8LFAAgACgCACABIAAoAgQoAgwRAQALiwkBBX8jAEHwAGsiBSQAIAUgAzYCDCAFIAI2AggCQAJAIAFBgQJPBEBBgAIhBgJAIAAsAIACQb9/Sg0AQf8BIQYgACwA/wFBv39KDQBB/gEhBiAALAD+AUG/f0oNAEH9ASEGIAAsAP0BQb9/TA0CCyAFIAY2AhQgBSAANgIQQQUhBkGcsMAAIQcMAgsgBSABNgIUIAUgADYCEEGMrMIAIQcMAQsgACABQQBB/QEgBBCZAgALIAUgBjYCHCAFIAc2AhgCQAJAAkACQAJAIAEgAkkiBiABIANJckUEQCACIANLDQECQCACRSABIAJNckUEQCAAIAJqLAAAQUBIDQELIAMhAgsgBSACNgIgIAEiAyACSwRAIAJBA2siA0EAIAIgA08bIgMgAkEBaiIGSw0DAkAgAyAGRg0AIAAgBmogACADaiIIayEGIAAgAmoiCSwAAEG/f0oEQCAGQQFrIQcMAQsgAiADRg0AIAlBAWsiAiwAAEG/f0oEQCAGQQJrIQcMAQsgAiAIRg0AIAlBAmsiAiwAAEG/f0oEQCAGQQNrIQcMAQsgAiAIRg0AIAlBA2siAiwAAEG/f0oEQCAGQQRrIQcMAQsgAiAIRg0AIAZBBWshBwsgAyAHaiEDCyADBH8CQCABIANNBEAgASADRg0BDAcLIAAgA2osAABBv39MDQYLIAEgA2sFIAELRQ0DAn8CQAJAIAAgA2oiASwAACIAQQBIBEAgAS0AAUE/cSEHIABBH3EhAiAAQV9LDQEgAkEGdCAHciEADAILIAUgAEH/AXE2AiRBAQwCCyABLQACQT9xIAdBBnRyIQcgAEFwSQRAIAcgAkEMdHIhAAwBCyACQRJ0QYCA8ABxIAEtAANBP3EgB0EGdHJyIgBBgIDEAEYNBQsgBSAANgIkQQEgAEGAAUkNABpBAiAAQYAQSQ0AGkEDQQQgAEGAgARJGwshACAFIAM2AiggBSAAIANqNgIsIAVBPGpCBTcCACAFQewAakEHNgIAIAVB5ABqQQc2AgAgBUHcAGpBDDYCACAFQdQAakENNgIAIAVBBTYCNCAFQaSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJoIAUgBUEQajYCYCAFIAVBKGo2AlggBSAFQSRqNgJQIAUgBUEgajYCSAwFCyAFIAIgAyAGGzYCKCAFQTxqQgM3AgAgBUHcAGpBBzYCACAFQdQAakEHNgIAIAVBAzYCNCAFQeSxwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJYIAUgBUEQajYCUCAFIAVBKGo2AkgMBAsgBUHkAGpBBzYCACAFQdwAakEHNgIAIAVB1ABqQQQ2AgAgBUE8akIENwIAIAVBBDYCNCAFQcSwwAA2AjAgBUEENgJMIAUgBUHIAGo2AjggBSAFQRhqNgJgIAUgBUEQajYCWCAFIAVBDGo2AlAgBSAFQQhqNgJIDAMLIAMgBkGYssAAELoBAAtBgJfCAEErIAQQ3gEACyAAIAEgAyABIAQQmQIACyAFQTBqIAQQ6wEACyEAIABCgbyKlMu9gfvHADcDCCAAQtH0n6b1raixLzcDAAsiACAAQp7x297Bo/eU+wA3AwggAEK/1tbu35u88uEANwMACyEAIABCrOC+79ew0qknNwMIIABC1+r6jLi+8uHDADcDAAsQACABIAAoAgAgACgCBBARCyEAIABCmKOqy+CO+tTWADcDCCAAQquqiZv29trcGjcDAAsQACAAKAIANQIAQQEgARBWCxMAIABBjOPAADYCBCAAIAE2AgALEwAgAEH84sAANgIEIAAgATYCAAsTACAAQZzjwAA2AgQgACABNgIACxMAIABB4OTAADYCBCAAIAE2AgALEwAgAEHw5MAANgIEIAAgATYCAAshACAAQrX6l+uWzNmi+QA3AwggAELN7PHt35m+6E83AwALEAAgASAAKAIAIAAoAggQEQshACAAQo+Z/oulxv3feTcDCCAAQqrhtaON4OKuzgA3AwALCwAgAQRAIAAQIgsLDQAgADUCAEEBIAEQVgsNACAAMQAAQQEgARBWCw4AIAAoAgAaA0AMAAsACw0AIAApAwBBASABEFYLDQAgACABIAIQ5AFBAAsNACAAIAEgAhDlAUEACwsAIAAjAGokACMACw0AIABBiIfAACABEC8L3gEBAn8gACgCACECIwBBEGsiACQAIAAgAkEEajYCBCABKAIUQfS+wABBCSABQRhqKAIAKAIMEQAAIQMgAEEAOgANIAAgAzoADCAAIAE2AgggAEEIakH9vsAAQQsgAkHkvsAAEEhBiL/AAEEJIABBBGpBlL/AABBIIQECfyAALQAMIgJBAEcgAC0ADUUNABpBASACDQAaIAEoAgAiAS0AHEEEcUUEQCABKAIUQbSowABBAiABKAIYKAIMEQAADAELIAEoAhRB3OzAAEEBIAEoAhgoAgwRAAALIABBEGokAAsNACAAQZCowAAgARAvCwwAIAAoAgAgARCiAQsJACAAIAEQBQALDQBBjKzCAEEbELQCAAsOAEGnrMIAQc8AELQCAAsNACAAQdCKwQAgARAvCw0AIABBuJLCACABEC8LDAAgACgCACABEIECCw0AIABBvJfCACABEC8LrwEBA38gASEFAkAgAkEQSQRAIAAhAQwBCyAAQQAgAGtBA3EiA2ohBCADBEAgACEBA0AgASAFOgAAIAFBAWoiASAESQ0ACwsgBCACIANrIgJBfHEiA2ohASADQQBKBEAgBUH/AXFBgYKECGwhAwNAIAQgAzYCACAEQQRqIgQgAUkNAAsLIAJBA3EhAgsgAgRAIAEgAmohAgNAIAEgBToAACABQQFqIgEgAkkNAAsLIAALQwEDfwJAIAJFDQADQCAALQAAIgQgAS0AACIFRgRAIABBAWohACABQQFqIQEgAkEBayICDQEMAgsLIAQgBWshAwsgAwuQBQEHfwJAAn8CQCACIgUgACABa0sEQCABIAJqIQMgACACaiECIAAgBUEQSQ0CGiACQXxxIQRBACACQQNxIgZrIQcgBgRAIANBAWshAANAIAJBAWsiAiAALQAAOgAAIABBAWshACACIARLDQALCyAEIAUgBmsiBkF8cSIFayECIAMgB2oiA0EDcQRAIAVBAEwNAiADQQN0IgBBGHEhByADQXxxIghBBGshAUEAIABrQRhxIQkgCCgCACEAA0AgBEEEayIEIAAgCXQgASgCACIAIAd2cjYCACABQQRrIQEgAiAESQ0ACwwCCyAFQQBMDQEgASAGakEEayEBA0AgBEEEayIEIAEoAgA2AgAgAUEEayEBIAIgBEkNAAsMAQsCQCAFQRBJBEAgACECDAELIABBACAAa0EDcSIDaiEEIAMEQCAAIQIgASEAA0AgAiAALQAAOgAAIABBAWohACACQQFqIgIgBEkNAAsLIAQgBSADayIFQXxxIgZqIQICQCABIANqIgNBA3EEQCAGQQBMDQEgA0EDdCIAQRhxIQcgA0F8cSIIQQRqIQFBACAAa0EYcSEJIAgoAgAhAANAIAQgACAHdiABKAIAIgAgCXRyNgIAIAFBBGohASAEQQRqIgQgAkkNAAsMAQsgBkEATA0AIAMhAQNAIAQgASgCADYCACABQQRqIQEgBEEEaiIEIAJJDQALCyAFQQNxIQUgAyAGaiEBCyAFRQ0CIAIgBWohAANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIABJDQALDAILIAZBA3EiAEUNASADIAVrIQMgAiAAawshACADQQFrIQEDQCACQQFrIgIgAS0AADoAACABQQFrIQEgACACSQ0ACwsLuAIBB38CQCACIgRBEEkEQCAAIQIMAQsgAEEAIABrQQNxIgNqIQUgAwRAIAAhAiABIQYDQCACIAYtAAA6AAAgBkEBaiEGIAJBAWoiAiAFSQ0ACwsgBSAEIANrIghBfHEiB2ohAgJAIAEgA2oiA0EDcQRAIAdBAEwNASADQQN0IgRBGHEhCSADQXxxIgZBBGohAUEAIARrQRhxIQQgBigCACEGA0AgBSAGIAl2IAEoAgAiBiAEdHI2AgAgAUEEaiEBIAVBBGoiBSACSQ0ACwwBCyAHQQBMDQAgAyEBA0AgBSABKAIANgIAIAFBBGohASAFQQRqIgUgAkkNAAsLIAhBA3EhBCADIAdqIQELIAQEQCACIARqIQMDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADSQ0ACwsgAAsLAEGYscIAKAIARQsCAAsLk6gCIwBBgIDAAAs2OQAAAAAAAAABAAAAOgAAADkAAAAAAAAAAQAAADsAAAA5AAAAAAAAAAEAAAA8AAAABSsOAwIaAEHYgMAAC80aPQAAABQAAAAEAAAAPgAAAGFzc2VydGlvbiBmYWlsZWQ6IHNlbGYuaXNfY2hhcl9ib3VuZGFyeShuKQAAZHUQAEsAAADeBgAAHQAAAGR1EABLAAAA5gYAAB0AAABtaXNzaW5nIGZpZWxkIGAAtAAQAA8AAABkeRAAAQAAAGludmFsaWQgbGVuZ3RoIADUABAADwAAABZ5EAALAAAAZHVwbGljYXRlIGZpZWxkIGAAAAD0ABAAEQAAAGR5EAABAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL21vZC5yc0ludmFsaWQgVVRGOAAYARAAZwAAAIIAAAAkAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwLnJzAACcARAAWgAAAPkAAAA/AAAAnAEQAFoAAAAeAQAALgAAAERPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHNpZ25hdHVyZS5ET1QgTGljZW5zZSBoYXMgd3JvbmcgZm9ybWF0LkRPVCBMaWNlbnNlIGhhcyBpbnZhbGlkIHZlcnNpb24uRE9UIExpY2Vuc2UgaGFzIGludmFsaWQgSFdJRC5ET1QgTGljZW5zZSBpcyBleHBpcmVkLkRPVCBMaWNlbnNlIGlzIG5vdCBtZWFudCBmb3Igd2ViIHBsYXRmb3JtLkRPVCBMaWNlbnNlIGlzIG1pc3NpbmcgY3VzdG9tZXIuSW52YWxpZFNpZ25hdHVyZUZvcm1hdEVycm9ySW52YWxpZFZlcnNpb25JbnZhbGlkSHdpZEV4cGlyZWRNaXNzaW5nRmVhdHVyZXNNaXNzaW5nQ3VzdG9tZXIAABAAAAALAAAADgAAAAsAAAAHAAAADwAAAA8AAAD1AhAABQMQABADEAAeAxAAKQMQADADEAA/AxAAPwAAAAwAAAAEAAAAQAAAAEEAAABCAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc6ADEAAcAAAAFgIAAAUAAABhIGZvcm1hdHRpbmcgdHJhaXQgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IAQwAAAAAAAAABAAAARAAAAGxpYnJhcnkvYWxsb2Mvc3JjL2ZtdC5ycxAEEAAYAAAAYgIAACAAAABieXRlc2Vycm9yAABFAAAABAAAAAQAAABGAAAARnJvbVV0ZjhFcnJvcgAAAEcAAAAMAAAABAAAAEgAAABJAAAABAAAAAQAAABKAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9kZWNvZGVfc3VmZml4LnJzAAAAhAQQAIEAAAAdAAAAGQAAAIQEEACBAAAAmgAAAAkAAABJbXBvc3NpYmxlOiBtdXN0IG9ubHkgaGF2ZSAwIHRvIDggaW5wdXQgYnl0ZXMgaW4gbGFzdCBjaHVuaywgd2l0aCBubyBpbnZhbGlkIGxlbmd0aHMoBRAAVAAAAIQEEACBAAAAhQAAAA4AAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmNvZGUucnMAlAUQAGMAAACKAAAACQAAAEludmFsaWQgYnl0ZSAsIG9mZnNldCAAAAgGEAANAAAAFQYQAAkAAACzEhAAAQAAAEVuY29kZWQgdGV4dCBjYW5ub3QgaGF2ZSBhIDYtYml0IHJlbWFpbmRlci4AOAYQACsAAABJbnZhbGlkIGxhc3Qgc3ltYm9sIGwGEAAUAAAAFQYQAAkAAACzEhAAAQAAAEludmFsaWQgcGFkZGluZwCYBhAADwAAAEkAAAAEAAAABAAAAEsAAABJbnZhbGlkQnl0ZUludmFsaWRMYXN0U3ltYm9sSW52YWxpZFBhZGRpbmcvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9iYXNlNjQtMC4yMS43L3NyYy9lbmdpbmUvZ2VuZXJhbF9wdXJwb3NlL2RlY29kZS5yc+oGEAB6AAAAcgAAACkAAADqBhAAegAAAHMAAAAvAAAA6gYQAHoAAACZAAAAGwAAAOoGEAB6AAAAnQAAABkAAADqBhAAegAAALAAAAATAAAA6gYQAHoAAACzAAAAGAAAAOoGEAB6AAAA2gAAAB8AAADqBhAAegAAAOAAAAAfAAAA6gYQAHoAAADpAAAAHwAAAOoGEAB6AAAA8gAAAB8AAADqBhAAegAAAPsAAAAfAAAA6gYQAHoAAAAEAQAAHwAAAOoGEAB6AAAADQEAAB8AAADqBhAAegAAABYBAAAfAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvYmFzZTY0LTAuMjEuNy9zcmMvZW5naW5lL2dlbmVyYWxfcHVycG9zZS9tb2QucnMARAgQAHcAAACWAAAADQAAAEQIEAB3AAAAlwAAAA0AAABECBAAdwAAAJoAAAANAAAARAgQAHcAAACIAAAAKwAAAGludmFsaWQgQmFzZTY0IGxlbmd0aGludmFsaWQgQmFzZTY0IGVuY29kaW5nSW52YWxpZEVuY29kaW5nSW52YWxpZExlbmd0aGcvEABpAAAAbgcAADoAAABObyBzdWNoIGxvY2FsIHRpbWUAAFQJEAASAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY2hyb25vLTAuNC4zOC9zcmMvbmFpdmUvZGF0ZS9tb2QucnMAAQEBAQICAgIDAwMDBAQEBAUFBQUGBgYGBwcHBwgICAgJCQkJCgoKCgsLCwsMDAwMDQ0NDQ4ODg4PDw8PEBAQEBERERESEhISExMTExQUFBQVFRUVFhYWFhcXFxcYGBgYGRkZGRkZGRkaGhoaGxsbGxwcHBwdHR0dHh4eHh8fHx8gICAgISEhISIiIiIjIyMjJCQkJCUlJSUmJiYmJycnJygoKCgpKSkpKioqKisrKyssLCwsLS0tLS4uLi4vLy8vMDAwMDExMTExMTExMjIyMjMzMzM0NDQ0NTU1NTY2NjY3Nzc3ODg4ODk5OTk6Ojo6Ozs7Ozw8PDw9PT09Pj4+Pj8/Pz9AQEBAQUFBQUJCQkJDQ0NDREREREVFRUVGRkZGR0dHR0hISEhJSUlJSUlJSUpKSkpLS0tLTExMTE1NTU1OTk5OT09PT1BQUFBRUVFRUlJSUlNTU1NUVFRUVVVVVVZWVlZXV1dXWFhYWFlZWVlaWlpaW1tbW1xcXFxdXV1dXl5eXl9fX19gYGBgYWFhYXAJEABrAAAAEwkAABEAAABwCRAAawAAABYJAAAbAAAAcAkQAGsAAAAeCQAAGgAAAAQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoLDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PCQoLDAUPCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQ4PCQoDDQ4PAQsMDQYJCgsEDg8JAgwNDgcKCwwFDwkKAw0ODwELDA0GCQoLBA4PCQIMDQ4HCgsMBQ8JCgMNDg8BCwwNBgkKCwQODwkCDA0OBwoLDAUPCQoDDQ4PAQsMDQYJCgsvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9uYWl2ZS9pbnRlcm5hbHMucnMsDRAAbAAAAFAAAAAJAEHqm8AAC8ISQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAEJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQgAAAAAAAABISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISkhKSEpISgAASkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMSkxKTEpMAAAAAE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QTlBOUE5QAABQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFJQUlBSUFIAAAAAVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFZUVlRWVFYAAFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYVlhWWFZYAABYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFpYWlhaWFoAAAAAXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF5cXlxeXF4AAF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYF5gXmBeYAAAAABiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZGJkYmRiZCwNEABsAAAAYgEAAA8AAABJAAAABAAAAAQAAABKAAAASQAAAAgAAAAEAAAATAAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL2NvbnN0LW9pZC0wLjkuNi9zcmMvYXJjcy5ycwAYERAAYwAAADcAAAAvAAAAGBEQAGMAAAA8AAAALwAAAE9JRCBtYWxmb3JtZWQAAAAYERAAYwAAAG0AAAAZAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvY29uc3Qtb2lkLTAuOS42L3NyYy9saWIucnMAALwREABiAAAAqAAAABQAAABPYmplY3RJZGVudGlmaWVyKAAAADASEAARAAAANI8QAAEAAACzEhAAAQAAAEkAAAAEAAAABAAAAE0AAABBcmNJbnZhbGlkYXJjQXJjVG9vQmlnQmFzZTEyOERpZ2l0RXhwZWN0ZWRFbXB0eU5vdEVub3VnaEFyY3NUcmFpbGluZ0RvdC4gKDEgPDwgAAyWEAAAAAAAtBIQAAcAAAA0jxAAAQAAAGxpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycy4uAAAA7xIQAAIAAABCb3Jyb3dNdXRFcnJvcmFscmVhZHkgYm9ycm93ZWQ6IAoTEAASAAAAQwAAAAAAAAABAAAATgAAAGluZGV4IG91dCBvZiBib3VuZHM6IHRoZSBsZW4gaXMgIGJ1dCB0aGUgaW5kZXggaXMgAAA0ExAAIAAAAFQTEAASAAAAPT0h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dHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9tZC01LTAuMTAuNi9zcmMvbGliLnJzAAA0LBAAXgAAAF0AAAATAAAAc3JjL2xpY2Vuc2UvdmVyaWZpY2F0aW9uL2h3aWRfdmVyaWZpZXIucnMBAAFBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsv/////////////////////////////////////////////////////////z7///8/NDU2Nzg5Ojs8Pf////////8AAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGf///////xobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1dJRGh3aWRzpCwQACkAAAAjAAAACQAAAKQsEAApAAAAFgAAABEAAABsOBAAEQAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvYWxsb2Mvc3JjL3ZlYy9tb2QucnNALhAATAAAAP4HAAAkAAAAZmV3ZXIgZWxlbWVudHMgaW4gYXJyYXkAnC4QABcAAABJAAAACAAAAAQAAABjAAAAZmV3ZXIgZWxlbWVudHMgaW4gbWFwAAAAzC4QABUAAABzdHJ1Y3QgRXhwaXJhdGlvbkRhdGUgd2l0aCAzIGVsZW1lbnRzAAAA7C4QACUAAABcAAAAAQAAAAEAAABkAAAAZQAAAAQAAAAEAAAAZgAAAExvY2FsIHRpbWUgb3V0IG9mIHJhbmdlIGZvciBgTmFpdmVEYXRlVGltZWAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9jaHJvbm8tMC40LjM4L3NyYy9kYXRldGltZS9tb2QucnNnLxAAaQAAAEMCAAAOAAAAZXhwaXJhdGlvbnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9leHBpcmF0aW9uX3ZlcmlmaWVyLnJzAAAA6i8QAC8AAAAXAAAAUQAAAOovEAAvAAAAGwAAAAoAAADqLxAALwAAABEAAAAWAAAAWW91ciBET1QgbGljZW5zZSB3aWxsIGV4cGlyZSBpbiAgZGF5cy4gUGxlYXNlIGNvbnRhY3QgeW91ciBzYWxlcyByZXByZXNlbnRhdGl2ZSB0byByZW5ldyB5b3VyIGxpY2Vuc2UuAABMMBAAIAAAAGwwEABGAAAA6i8QAC8AAAA6AAAACQAAAGRvdHdlYnNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi9mZWF0dXJlc192ZXJpZmllci5ycwDaMBAALQAAABMAAAAJAAAA2jAQAC0AAAAIAAAAFAAAAHllYXJtb250aGRheXN0cnVjdCBFeHBpcmF0aW9uRGF0ZQAAAFCJEABOAAAA+gcAABEAAAAAAAAAYXR0ZW1wdCB0byBkaXZpZGUgYnkgemVybwAAAFwAAAABAAAAAQAAAGcAAABJAAAAPAAAAAQAAABoAAAASQAAAAgAAAAEAAAAaQAAAFwAAAABAAAAAQAAAGQAAABcAAAAAQAAAAEAAABcAAAAAQAAAAEAAABqAAAAZAAAAKwxEAC8MRAAvDEQAEkAAAAIAAAABAAAAGsAAABJAAAACAAAAAQAAABJAAAACAAAAAQAAABsAAAAawAAAOgxEAD4MRAA+DEQAEkAAAA8AAAABAAAAG0AAABJAAAAPAAAAAQAAABJAAAAPAAAAAQAAABuAAAAbQAAACQyEAA0MhAANDIQAG8AAAAYAAAABAAAAHAAAABJAAAAEAAAAAQAAABxAAAASQAAABAAAAAEAAAAbwAAABgAAAAEAAAASQAAADwAAAAEAAAAcgAAAHMAAAB0AAAAXAAAAAEAAAABAAAAdQAAAHYAAAB3AAAASQAAAAgAAAAEAAAAeAAAAHkAAAB6AAAAewAAABgAAAAEAAAAfAAAAH0AAAB+AAAASQAAABAAAAAEAAAAfwAAAIAAAACBAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9jb3JlL3NyYy9zbGljZS9pbmRleC5ycwAQMxAATwAAAMECAAA0AAAAEDMQAE8AAADJAgAAMgAAAGNvbnRyYWN0Y3VzdG9tZXJzcmMvbGljZW5zZS92ZXJpZmljYXRpb24vY3VzdG9tZXJfdmVyaWZpZXIucnMAAACQMxAALQAAAA8AAAAJAAAAkDMQAC0AAAAGAAAAFAAAAHNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi5ycwDgMxAAGwAAABUAAAAJAAAAj48QAAIAAABpbnRlcm5hbCBlcnJvcjogZW50ZXJlZCB1bnJlYWNoYWJsZSBjb2RlOiBpbnZhbGlkIE9uY2Ugc3RhdGUUNBAAPAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9vbmNlLnJzAFg0EABfAAAANgAAABIAAABfAAAADAAAAAQAAABgAAAAYQAAAGIAAAA5AAAAAAAAAAEAAABEAAAAdmVyc2lvbjIuMXNyYy9saWNlbnNlL3ZlcmlmaWNhdGlvbi92ZXJzaW9uX3ZlcmlmaWVyLnJzAAD6NBAALAAAABAAAAAJAAAA+jQQACwAAAAJAAAAEwAAAF8AAAAMAAAABAAAAGAAAABhAAAAYgAAADkAAAAAAAAAAQAAAEQAAABlAAAABAAAAAQAAABmAAAAc3JjL2xpYi5ycwAAgDUQAAoAAABMAAAASQAAAGludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGUvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3Nlci5ycwAAAMQ1EABlAAAACwYAABIAAADENRAAZQAAAC4IAAAzAAAAxDUQAGUAAAAhCAAAQAAAAH1mYWxzZXRydWVbeyxcIlxcXGJcZlxuXHJcdDpdY2xvc3VyZSBpbnZva2VkIHJlY3Vyc2l2ZWx5IG9yIGFmdGVyIGJlaW5nIGRyb3BwZWRhc3NlcnRpb24gZmFpbGVkOiBpbmRleCA8PSBsZW4AAAD4NxAAYgAAAO8GAAAJAAAAAAAA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ANQ8EAByAAAAggAAABkAAABleHBsaWNpdCBwYW5pYwAA1DwQAHIAAAAmAAAACQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3NobC5ycwAAHD4QAHIAAAAaAAAAGQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL251bS1iaWdpbnQtZGlnLTAuOC40L3NyYy9hbGdvcml0aG1zL3Noci5ycwAAoD4QAHIAAAARAAAAIwAAAKA+EAByAAAAEgAAACAAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9udW0tYmlnaW50LWRpZy0wLjguNC9zcmMvYWxnb3JpdGhtcy9zdWIucnNDYW5ub3Qgc3VidHJhY3QgYiBmcm9tIGEgYmVjYXVzZSBiIGlzIGxhcmdlciB0aGFuIGEuAACmPxAANAAAADQ/EAByAAAAKwAAAAUAAABhc3NlcnRpb24gZmFpbGVkOiBhX2hpLmlzX2VtcHR5KCkAAAA0PxAAcgAAAEgAAAAFAAAAND8QAHIAAABLAAAABQAAADQ/EAByAAAAUwAAAA8AAAA0PxAAcgAAAFQAAAAPAAAAUEVNIEJhc2U2NCBlcnJvcjogAABYQBAAEgAAAFBFTSBjaGFyYWN0ZXIgZW5jb2RpbmcgZXJyb3JQRU0gZXJyb3IgaW4gZW5jYXBzdWxhdGVkIHRleHRQRU0gaGVhZGVycyBkaXNhbGxvd2VkIGJ5IFJGQzc0NjhQRU0gdHlwZSBsYWJlbCBpbnZhbGlkUEVNIGxlbmd0aCBpbnZhbGlkUEVNIHByZWFtYmxlIGNvbnRhaW5zIGludmFsaWQgZGF0YSAoTlVMIGJ5dGUpUEVNIGVycm9yIGluIHByZS1lbmNhcHN1bGF0aW9uIGJvdW5kYXJ5UEVNIGVycm9yIGluIHBvc3QtZW5jYXBzdWxhdGlvbiBib3VuZGFyeXVuZXhwZWN0ZWQgUEVNIHR5cGUgbGFiZWw6IGV4cGVjdGluZyAiIgAAc0EQACYAAACZQRAAAQAAAEJhc2U2NAAASQAAAAQAAAAEAAAAhAAAAENoYXJhY3RlckVuY29kaW5nRW5jYXBzdWxhdGVkVGV4dEhlYWRlckRpc2FsbG93ZWRMYWJlbExlbmd0aFByZWFtYmxlUHJlRW5jYXBzdWxhdGlvbkJvdW5kYXJ5UG9zdEVuY2Fwc3VsYXRpb25Cb3VuZGFyeVVuZXhwZWN0ZWRUeXBlTGFiZWxleHBlY3RlZEkAAAAEAAAABAAAAIUAAABQS0NTIzEgQVNOLjEgZXJyb3I6IGRCEAAUAAAAUEtDUyMxIGNyeXB0b2dyYXBoaWMgZXJyb3JQS0NTIzEgdmVyc2lvbiBlcnJvcgAASQAAAAQAAAAEAAAAhgAAAENyeXB0bwAASQAAAAQAAAAEAAAAhwAAAFZlcnNpb25QS0NTIzggQVNOLjEgZXJyb3I6IADfQhAAFAAAAFBLQ1MjOCBjcnlwdG9ncmFwaGljIGtleSBkYXRhIG1hbGZvcm1lZFBLQ1MjOCBhbGdvcml0aG0gcGFyYW1ldGVycyBtYWxmb3JtZWRwdWJsaWMga2V5IGVycm9yOiAAAEhDEAASAAAASQAAAAQAAAAEAAAAhgAAAFBhcmFtZXRlcnNNYWxmb3JtZWRQdWJsaWNLZXlJAAAABAAAAAQAAACIAAAAL1VzZXJzL21hdHVzYnV0b3JhLy5jYXJnby9yZWdpc3RyeS9zcmMvaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWYvbnVtLWJpZ2ludC1kaWctMC44LjQvc3JjL2JpZ3VpbnQucnMvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9yc2EtMC45LjYvc3JjL2FsZ29yaXRobXMvcGFkLnJzAAALRBAAZwAAABEAAAAIAAAAC0QQAGcAAAARAAAAJQAAAC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3JzYS0wLjkuNi9zcmMvYWxnb3JpdGhtcy9wa2NzMXYxNS5yc5REEABsAAAAjwAAABIAAACURBAAbAAAAJAAAAALAAAAlEQQAGwAAACRAAAADQAAAJREEABsAAAAkgAAAA0AAACURBAAbAAAAJMAAAALAAAAXwAAAAwAAAAEAAAAYAAAAGEAAABiAAAAaW52YWxpZCBwYWRkaW5nIHNjaGVtZQAAaEUQABYAAABkZWNyeXB0aW9uIGVycm9yiEUQABAAAAB2ZXJpZmljYXRpb24gZXJyb3IAAKBFEAASAAAAbWVzc2FnZSB0b28gbG9uZ7xFEAAQAAAAaW5wdXQgbXVzdCBiZSBoYXNoZWTURRAAFAAAAG5wcmltZXMgbXVzdCBiZSA+PSAy8EUQABQAAAB0b28gZmV3IHByaW1lcyBvZiBnaXZlbiBsZW5ndGggdG8gZ2VuZXJhdGUgYW4gUlNBIGtleQAAAAxGEAA1AAAAaW52YWxpZCBwcmltZSB2YWx1ZQBMRhAAEwAAAGludmFsaWQgbW9kdWx1cwBoRhAADwAAAGludmFsaWQgZXhwb25lbnSARhAAEAAAAGludmFsaWQgY29lZmZpY2llbnQAmEYQABMAAABtb2R1bHVzIHRvbyBsYXJnZQAAALRGEAARAAAAcHVibGljIGV4cG9uZW50IHRvbyBzbWFsbAAAANBGEAAZAAAAcHVibGljIGV4cG9uZW50IHRvbyBsYXJnZQAAAPRGEAAZAAAAaW50ZXJuYWwgZXJyb3IAABhHEAAOAAAAbGFiZWwgdG9vIGxvbmcAADBHEAAOAAAAaW52YWxpZCBwYWRkaW5nIGxlbmd0aAAASEcQABYAAABpbnZhbGlkIGFyZ3VtZW50cwAAAGhHEAARAAAASW52YWxpZFBhZGRpbmdTY2hlbWVEZWNyeXB0aW9uVmVyaWZpY2F0aW9uTWVzc2FnZVRvb0xvbmdJbnB1dE5vdEhhc2hlZE5wcmltZXNUb29TbWFsbFRvb0Zld1ByaW1lc0ludmFsaWRQcmltZUludmFsaWRNb2R1bHVzSW52YWxpZEV4cG9uZW50SW52YWxpZENvZWZmaWNpZW50TW9kdWx1c1Rvb0xhcmdlUHVibGljRXhwb25lbnRUb29TbWFsbFB1YmxpY0V4cG9uZW50VG9vTGFyZ2VQa2NzMUkAAAAEAAAABAAAAIkAAABQa2NzOAAAAEkAAAAEAAAABAAAAIcAAABJbnRlcm5hbExhYmVsVG9vTG9uZ0ludmFsaWRQYWRMZW5JbnZhbGlkQXJndW1lbnRzaW5mLWluZk5hTgAAAAAAAQBB15HBAAvRKiCamZmZmZmZmZmZmZmZmZkZFa5H4XoUrkfhehSuR+F6FN4kBoGVQ4ts5/up8dJNYhCW1AloImx4eqUsQxzr4jYaq0Nuhhvw+WGE8GjjiLX4FCI2WDhJ88e0No3ttaD3xhBqI43ADlKmh1dIr7ya8tcaiE/XZqVBuJ/fOYww4o55FQemEh9RAS3mspTWJugLLhGkCVHLgWiu1re6vdfZ33wb6jqnojTt8d5flWR54X/9FbvIhej28Cd/GRHqLYGZlxH4DdZAvrQMZcKBdklowiUck3HeM5iQcOoBmyuhhpuEFkPBfingpvMhmxVW556vAxI3NTEPzdeFaSu8idiXstIc+ZBaP9ffNyGJltRGRvUOF/pzSMxF5l/noKtD0tFdchJdhg16PD1mpTSs0rZPyYMdsZ7XlGOXHlFdI0KSDKGcF8FLed2C337afU+bDgq04xJorFti0ZhkKpblXhcQIDkeU/Digafgtu5EUbISQLMtGKkmT85STZJYaqeOqJnCVxNBpH6wt3tQJ6rYfdr10PIeNFBlwF/JplK7E8uuxEDCGJCm6plM1OsOyQ888jaazhOAChHDrVN5sUEZYFC+9rAfZwh0AovcLcFnR7Om/l5aGVKgKTVvsCQ0hp/C6/5LSBTbGe6Q8lkdkJ5/aIll1jkQXymwtB3D+0yXMqeo1SP2GbK6WV2xNZY9rFsfunfpxBQoYuF9J16rl1ZJTPuSh50QDZ1oydjJq/LwDnr4t6WVGj4Xujp6obxbWnIuLZOERBXLRfsuyBrKr66Oi4pCnQMRRQmSsab33LJK5Hiqnfs4GwShQcHrkn31boMtVbEvxxUDtGdniXVkxFicV3cnJmwR0uyl2NuIbW30xiXyCz3gG9sj60YWB76KwzgeKKP9TBZJtlXSEWz+bpxgS1NPMdcRDorvtk8Tl7FgZ0WFGIKLHKWhv/hyD6wnGrlqN60B1hYeTplgwnJWueFgVSwkzkQSlRbCzQMeV/U1zrsTbeM6HaurAQsDGKwqK9gvdopPYhdWiTRvAuC8u1UT88RuDLUSiajtsdDMx5LvHrjUSnruHQe6V45ACtPb8kuTEG/78RcGyN9xANWofPVvD9pY/CcT1gxm6TO7p/q7TLIpjmCmHhHXhIcp/FKVyaOOVAsahRgOrNDSusmoqgeD2HZvrp0T46waHl7c2t2l0cBXsrBiH0+KSEtLsEh+UUGarI7AGxnZodPV1Vlty9rN4ValMxYUe4HcdxF7Vzzi1+er6sIRECrPYFmCXvLGNiamrKoEthm7pYBHaBj1a8VR61ZVnZEUloQABu15KiPRpyLf3X10EFYHNKPhj93RgQzRMZb8UxpFbPboGnPkpzQ9p/RE/Q8Vnlb4U+IoHVNdl1JdapfZEGJXjbkD22HrLvJQlRC/9RroRaTHz0hOvFhb2t2mZZEVIGuDbNnTcWOt4uEXHx5BEc0Rn60ohhyfSAQD82RjmxsL2xi+U2uw5QadNY8d6RUWohVHyw+J8+prSpFy5CCrETe8cXhM27hERqobhG0BRRxfY8HG1hXHAwVVSQO+mp0WGenNa0XeODY3dwdp/q4XEsFBFkaiY8FWWFhyDpex8hzOZ6vRgRwB33kT9XESjigXpexVQc4WNH9h3JDBDtiGEm5HVjV9JCBlAsfnaOSMpB0lOXj3MB2A6gFsuSAd17YXhPos+fOwmbs0I2FNF6z4Ejn3RyhTTlxfVDhoFfKsWh4uLNO5dQt9f0NgU0RbikgYWCPcx/fVMJnPGak2fDttEybS+XKMibSOso8O8fkrFR+4QS6PowcqciimC/THvN0Y+pq+pU85u8GGHtZcBpfkE/b3MAkZwl6c1zDw+tYk1B/4X1oHFGjlSXmNJi/fg3YZYObhBRAgUW7HClK/5c9eFBqFgdEMgNrxBW8OmYTZSxD11GiCFADET9bk4/Sg9RIaK3ftAaqZadkRtxz3s/fbFLzFigGIFO6tdJKwxVz5rxAsCd5opu18SVTqgG+UKLMaJNTkU7hXyjoQVZq/diBcFYN2HUNgeTtic6qu/16AFhGevcjRZvUrnbgQsTLLM1cbf2RtQVLEvH1gDfSOolzfFcy2imfbaf3K5j3D2E59fxHfindyxQ8vq9cvBY7kLv8bgNWSWwRz8oisjGo+Hb9lFmZEQknQKPXTVj1VmEr/6hGjoANCTUGIuVeVu/MQMqsc6eYCaNfNOWF5d/zCQFvvFlRSAiB5cWHnLfnJaM0VWRKGUJ2ZjrVopXxbdnQVVlsd0qZK4T6RIFH9FcX23UR8Fw4fohr/QE2nykQ3krHQyRJKy2n3ZM6uCxFuWFBPtA8eOzzuxVDYizyn8XlzP5AMGMnJ8TfaeQnKhfTHwjJAPRPbQum/9sKoqW+6DJ63Zsge45u6zCvPUyEmlXB+LFKgGIJJlXCJcqkauN0mZfB0sxOddYgaD4R194wvPgjnh4UfF16ge3I2kV8KJpgG7J83Gd/kGZZb+EAZ1YRGBfB/LBRM6kerr8YA4RA3BdGMmSMQR90/RUykZ87nJNW0R4/SGQaxzJ3W6VLYH7fdw59yqBQ4JwpLRe7beRksfmkZwoYQWdipEaLjXymPRjAPjzZxGnoTu6eBHLO6pWvz2NheJxUvqZXsmuMoYlGJj63gS+wQF3Xv4Pc4Dp3oDkyvmqwTG3kqWRqTLdiwU3LWJeJWqRUuVUdID755jdzB3reBRVQRfLsL2n6WjxWUnJeMzwi6G5cv1hT/EaZ3drDf1nJtLhZ5jN5D/6dR+ZHzsnj1vb4Rjq390v4/HMIc7LdaImNkHNiKZEIyM7ABF/BfFbW1thZGooObjsJZAaxZ5t2QxCsSowM5XxcE9s6swqP8GtQSHYOcLUysaV5yvZscykhDQhec44rWiVQY9f3iFggHaZsSxgWrvQ9Uje4va/EM2HTFHQVrIv5ydte+jCLBcEYq0RcEvE7LKMUS/9ZOZ41ruw0ToPl9eHQ7Ucskfth7El98Hk1h/vkpyQ0JtzGt/EF/YxgKgcuUIdTXoMUnJMo0zIITd854VM+5v2dvDG1DIa03H/lxLd2llMwfWXCKz01X+RjH9L19Ud3Wf3rzoT8+rPoTC+4vyeguvv/DuJwy/Xn3H9Yk86AgvzFmNvoWwv3Hkhl4HVwaGswnuF77qwHLbHUUYOR8e64JU5MYybxnovBdEJmglMWwQuse9HSUP2rnLxrh5nYEJwKJ5Vwq3TKIH/MU5+srnYXOoLew7rAooH/CENjf32FvSgFZtEpOdDPM0BqtTObnJdXN4CmiPpCP1nMV8dZRhlF3cU3utMvZcngpEehX6dbovuh7sFSsj4SNdRsgEyHfUzK6/FndiQxqpPcVgELnGEMoyGOuSm5w7umSEWZq2Cc4DQ0GFxFKGhdDHhzrIa3sLKQ9axJ0bnsSnH4WVk5XvfAc/ojbXFj8QeP+ESNKJWK0lJZBX2GNYDYFyxzp1B3oKaqrZ3/nPU340AgXh90XILshVrkyuWTX+XNtEqWVjGYraSPC6sE68sLsex0d3tYeibqCzrs0YlsCV5YXGBjfSwdiNaX89rTiAazeElnzZHnYnIg7lPGHNzYTMR7h9YPHRkpt/NxaBsaRQicYGisDBp9uVzAXr57Rp5tSE5De0TzLfSUaJRgxHKaS6h5A5acwPP4dSLd5WuOEqLsYAFGGwMkxS9PFx66CnVPJE820o81C6RFSCaYX0ciFqB+kkBw+AiHbdAe430A6nlMZUA1KywG0FfcFYBln++RCFKcKCAmbKd74N7N6UvyDNRDX3QyokUIwjlm4KreTOe8ZE0sKIA4CjT7h+e74QmG/FA88CIA+mz1l58dY+psamRDkLA0AZPjIbqUMjpD5kI4a6iOkmen504u3o3FAYdo+FbscUOG6lKk8+YL0mRoV/xArYbObxLp1x47RIMNduzEbiRopFmqVxNILDudosWLBFaF7uhGId9Dbbz4fhyeCZxGbkl0cQL+ALOZjmD4/0NgbSXXkSTPMM71RtkZl/wxHFtRdUG6P1o/Kp14FUcxw0hFTybPjS1cZRNn9bk6t54McqTr2ggl5RwPhlyWliuzPFrr7xGjUYGzPgHmE6m7wPxIq+QcOhzR65Zr10xBLGjMdIpQ5C2yQLlHiKkPaCBVcF7Wpx9W8povagVXP4dMQsBKHD9kiLnHfkJxV5QJTgeYdbAwUT4taTNoW3h3PqJrrF4qjqaWie6OueH6xpSDiIhOpBamial/SfSeXtaKaNp4eVNEggoh/25cfrPdOFZJ+GHengM4GZnx5TCPG2N10mBPxCwHkCnAtj61royeWVFofWtYAUKJZJAy+77UfeBAVGRVFmtmBFB1w/vL3svnZEBR3ansUm0MXwP5bxiguew0Q8kOS7cQF8szKLAoOfSuvGcKcDr7QN1sKb72hccoijBTO4z7Lc/lICIyXtCfVG3AQsJ9keOxbDtqsJVQMVflMGsB/UGDwrz57vbep1hBhChUzZkCA87/LlZcs7t5zGtUQUnDNZlJmrO9YR7BkuZDuGttZpLgOhSMmR2zztvqmixVJrraT2NCCHmwjKV+VhTwRdbCKH/Qanv2sOKj+7giUG/dZ1bIpr7GXvZOGmCUHEBYse3f1uiWOrJfcnhMebKYRE8VYIisJfXq/Lf64yXk9HHZqrU7voP1hzFfLYKGUlxbF7r0LWRr+5wkTCedN3RISOrH8RVtdY6bchA7Yr/vqHMiNMGuvShyFsNA+E/NiIhfU1ya88m7j0Cbay3XC6IEShoykxuoXn7TXKUaJnaecHWtwUAXv3xgqRu4EoReGsBeJ89mdJbPgVGuLnU15nvMSdFL2Ym/rzYd4RS98KJdSHl2oXoK/IgvTxmq/yYYSQhjkuUtozBs8D5+I/zrSDmgTbSl5QHosYBiY2piRg+QMHyQhlDPIVrNGE+ITDjYd1xi2TUMpoHiPONy03KSRSt8Tiq9rqGYnf1pgIWGhgqrLH6K/77nrhTIVTbRNtJu7bxlOmYxhidGOqj2QpPbiYlkUDOHWGqGn2O7K2bYrT4JHEEWbJF6bcid+EfaK37EDDBoESR0YSfWF/g34OxlbadYU0KBKE9Rdnsuk+S8UfIerEE0BEVJTyWPfOlzmufkLrBpxZ9p0D6EcGS+wHvv6b1YVwVJIKtmAsK0lwEsvL/MRETRRDaqONOcVCc0Ssn7rTxvEDXHuPl0fq20KDygyidkVnaSNi2UXGbxXCAwgKNR6EZQ6fBI88vQsWQ3gzNm59xtDlZbb/PTD8OA9s3Dhx18WAxESFpddNloay/UmgTnmEQToHPAk/FaQkN4iCzWPoxzQ7OOMHTDf2aZLgqJdP+kW2iODPbFZf+Hros5OsTJUElw5OC+1wstoedF95E6EUx3jLWC/XTXWU5SnZFByA3YXHIvmZbEqeKl27Lamjs/EEvpE12+1qiYP8ROL132yBx5iat+/KiJSPydDb6xkKAYYToh/mYhO22UfnPKJUCA4E0oNzCh0SsVvZZPqD7QzwB47pAmH9qFqWYQPInP2wpkYlrYHbPjn7q022bT1kTWuE1ZXDODzP35JJPW6IoMifR9FrNZM9v9k1OmQleho6DAZ0Yl4Pfj/g0Puc0TtUyAnFHShk5fGzJzP8Y8D8Q9NHxBSArklpEdhfxyzBeh/rssZDzXHt+nSTcwWXNHs//GiFNmQ0l8hDws9ErDaIzNbghDB51CZaEurYVCzKgaFK2oaZ7lAFLqiIk5AXFVrarwhFVOUAN2U6E4LzUlEvO7J5xBR7QDIh9oXEkip08ZKdgwb2r0AoGxIRttsh9xr1ZGjFa9kzUy9BgVJip/j792nTxGxOuJ6yAoIqEP/OOYvprIb9C7o+zmiOVNp/5Me84QoFl3y7C/7tMd1h/8PsvUDuhEu6kfmkSHZIj//f7Yi01wc8lQGhUGBerVl//+R6KiwFvVDODcBAWLEtzIz24btJhLun/PxAWg2OlmE65GkFQsdixn2J5u5Xvvgabx0UBE8F9Z6Xobi+n4v54djXUB0lhJWkf3W0PeX5XHZOGLNhr0dq9rKeA2TeYTBei3oPdLKF1YVby1xQmHQmsiKhjGoCBMiIhivTmpoTZHaqj1PQHQe6LR58j6IU6TarohkPwBdGIddYSj/bNzprlhtUMyZfROklWgNZa5gqeSNSBp6XC8fg0TtPbe+s7qDcaCuYbDyGDadijEsMvYuNsHmvudZ9RPwYXeCEx295Imb15c/9u4fWk4sNal9yoOhr9/fMviLGRWlVvcg/qGc5/KyTML5bxSqHRL5szEbSrkoj3CblFkQ3ZW2wey1XkP1DeWAxe0oGkreXgFXXuU1xKQdZwSL7RTVsRgBrH63xGkdflLQCL4QIrZam3mXJaEPLzC3s6fJGoFeFUlhrLdN2Vjz+MIfbhWbS0QHgSPG163g9ZM15iQRK6zTPpsFPVlJNFaGIj1uG7yJ3MsVnv3gbcMRBYLK8RVjoeNvERj+syRpQTebO44R0ZvSf7VZY4YHdTUlxcUWHA7jDjORFOnR0pD3UDeeeBYLHD+P2na6dHUNxkAsGPoReMYx5ZAk9+27SKNn4FnDHC0FW7dAHSyLydO1H02uAhckBHxfzX1Wb9QPK+Zwi2gSBm3GmEjJ8H7tshE9ThJ0HZ+9nuAGocCYV8Kn/aQOkBfmyktN0oAAR3mb7MpQpdkSokR5SB3OANiOxa1EgQgpHoLQLW0X2DMTP9FXnZrTIBjOpiQkeUb2qGWnrEoVdk0TfaQ6oI49vXRvpXp3iFbiHmRQleY+MWRdjLf7xQYStRi3pqrry422SnAsltFrDsQTV6SqEhMWJBEaR/DoEhegH9/p7g7cRIPaFGzzU0LfTBmAIb/YfJ0C4kMjKUNofz0UM4Eyev19aE42HFTPuTIxELjOUJCVyUBKvca5SylR6BnGC6emd9QzCDHSx2+H2rkUawnsHsZ2KaCNDtO/0q6UEN/brGSjV0IASRe4/x1+hxoZ4yPqtd8BzaASYJmxMTkVrrUciJFMznBNdeatJ476EOJVlKa1reMar7twSQx9Khvod0OFxFfpe/JijQc9l7sVh/k1BGp5h8mOtQoGZN9iEXHCvAYQj6V15Ih31mxl0RsnNcprpqW39+nTkqvwHUEWH8ShvB4exl/uDw9WjbHNEWXTAmFkY6P/FrOxiUhPfBxR3JtNUBzpMt8ojtQG2ckWDn1JcXPjII+yINh2BRQ7EnwuD4KFBZt+6s1Z8TtTKx3KvqUBnjevy+7XR/Qv3FUXoZiENEv5WAm/rGzDjBarEgBBt7zBAAsBEABBx7zBAAsBFABB17zBAAsBGQBB5rzBAAsCQB8AQfa8wQALAogTAEGGvcEACwJqGABBlb3BAAsDgIQeAEGlvcEACwPQEhMAQbW9wQALA4TXFwBBxb3BAAsDZc0dAEHUvcEACwQgX6ASAEHkvcEACwTodkgXAEH0vcEACwSilBodAEGDvsEACwVA5ZwwEgBBk77BAAsFkB7EvBYAQaO+wQALBTQm9WscAEGyvsEACwaA4Dd5wxEAQcK+wQALBqDYhVc0FgBB0r7BAAsGyE5nbcEbAEHivsEACwY9kWDkWBEAQfG+wQALB0CMtXgdrxUAQYG/wQALB1Dv4tbkGhsAQZG/wQAL1jWS1U0Gz/AQAAAAAAAAAACA9krhxwItFQAAAAAAAAAAILSd2XlDeBoAAAAAAAAAAJSQAigsKosQAAAAAAAAAAC5NAMyt/StFAAAAAAAAABA5wGE/uRx2RkAAAAAAAAAiDCBEh8v5ycQAAAAAAAAAKp8Idfm+uAxFAAAAAAAAIDU2+mMoDlZPhkAAAAAAACgyVIksAiI740fAAAAAAAABL6zFm4FtbW4EwAAAAAAAIWtYJzJRiLjphgAAAAAAEDm2HgDfNjqm9AeAAAAAADoj4crgk3HcmFCEwAAAAAA4nNptuIgec/5EhgAAAAAgNrQA2QbaVdDuBceAAAAAJCIYoIesaEWKtPOEgAAAAC0KvsiZh1KnPSHghcAAAAAYfW5q7+kXMPxKWMdAAAAoFw5VMv35hkaN/pdEgAAAMizRym+tWCg4MR49RYAAAC6oJmzLeN4yBj21rIcAABAdARAkPyNS33PWcbvEQAAUJEFULR7cZ5cQ/C3axYAAKT1BmSh2g3GM1TspQYcAICGWYTepKjIW6C0syeEEQAg6G8lFs7SunLIoaAx5RUAKOLLrpuBh2mPOsoIfl4bAFltP00BsfShmWR+xQ4bEUCvSI+gQd1xCsD93XbSYRUQ2xqzCJJUDg0wfZUUR7oa6sjwb0Xb9CgIPm7dbGy0ECT77MsWEjIzis3JFIiH4RTtOeh+nJb+v+xA/Blq6RkaNCRRzyEe//eTqD1Q4jFQEEFtJUOq5f71uBJN5Fo+ZBSSyO7TFJ9+M2dXYJ3xTX0ZtnrqCNpGXgBBbbgEbqHcH7KMkkVI7DqgSETzwuTk6RPeL/dWWqdJyFoVsPMdXuQY1vu07DARXHqxGpxwpXUdH2Ud8ZO+innsrpBhZodpchO/ZO04bu2Xp9r0+T/pA08Y770ox8nofVERcviP48RiHrV2eRx+se7SSkf7OQ67/RJi1Jej3V2qhx0ZesjRKb0Xe8l9DFX1lOlkn5g6RnSsHe2dzidVGf0Rn2Of5KvIixJoRcJxql981oY8x93Wui4XwtYyDpV3G4yoCzmVjGn6HDnG3yi9KpFXSadD3feBHBLItxdzbHV1rRuRlNR1oqMWuqXdj8fS0phitblJE4tMHJSH6rm8w4OfXREUDuzWrxF5KWXoq7RkB7UVmRGnzBsW13N+4tbhPUkiW//V0L+iG2YIj00mrcZt9Zi/heK3RRGAyvLgb1g4yTJ/LyfbJZcVIH0v2Ytuhnv/XvvwUe/8GjSuvWcXBTStXxudNpMV3hDBGa1BXQaBmDdiRAT4mhUVMmAYkvRHoX7FelUFtgFbGh88T9v4zCRvu2xVwxHheBAnCyMSNwDuSurHKjRWGZcU8M2r1kSAqd3keTXBq9+8GbZgKwYr8IkKL2zBWMsLFhDkOLbHNWwszTrH8S6+jhsUHcejOUOHd4AJOa66bXIiGeS4DAgUaZXgS8dZKQkPax+O8weFrGFdbI8c2Lll6aITcvBJphe6dEezI04ov6OLGI9s3I+d6FEZoKxh8q6Mrh7Zw+l5YjHTD+QLfVftFy0TzzRkGLv9xxPdTlyt6F34FwNCfd4p/blYlGKz2GJ19h1CSQ4rOj50t5wdcMddCboSktvRtchNUeUDJUw5tYtoF3dSRuM6oaXeRC6fh6KuQh2K8wvOxIQnC+t8w5QlrUkSbfCOAfZl8c0lXPT5bhjcFois8oFzv21BL3NxuIoekxzVqzcxqJfkiP3nRrMW89sRypaFPZK9Hev8oRhg3O9SFn385sz2LOUlfMoeeNOr5xvOXRBAGjyvl40+Eytky3ARQnUU0CALm/0wDtg1Pf7MFZKSGQTpzQE9vRFOg8w9QBub+4+isSAhRhbLENKfJggRgvozC95oqdfb/ZTGRzBKFSP5AI4Vw5PNUj06uFm8nBq2m8B47Vl8wFNmJBO49aEQo8Lw1mhwm7Dof+0XJnPKFEzzrAyDTMLc4t/one8P/RkPGOzn0W/5ye2LscL1KT4QEx7nYcbLdzzp7l0zc7RNFJjlYPq3vpWLo2o1AJAhYRn+Hvn4ZS57bkzFQgD0abkfX7Obu//8DMVPuymAOOLTEzeggqo/PFC2Iyo0oMbayBhESCOVT0vko6w0QUh4EfseKw02vRGvbubrwCgt6+pcE3WQgyzWWgrgJvFy+KUlNBiTdKS3i/EMmHCtj3YPL0Ee3MjGUvcWCF9mzBmqab3oEhN7eCe1HMr2fz+gFMTsohfXmVZx4qN89F9PyBn1p4sdJiDWhm3mzfibMR0w+Uh3EjCoi+gIYAH3An4kfDcbFRc8kq4iC7jBtIOdLVsFYtocZRut9QYT+VBygvxYQ30IEj9iGLPIVzflDqM7L5ScihbPet7fui2FntKLCju5Qy0cwQzry5Q8E6Njl+bEU0qcEfHP5f65C9iLPD0gtuhcAxbuQ59+qA7OrotMqOMiNIQbdYojTynJQE3XL0nOlaAyERJt7KJz+5AgzXvbQbtIfxVWiKeLUDq1aMBaUhLqGt8aNrVIV3JEcUG4eHNL0nDLEIPiGu2Olc1R5lZQ3gZN/hQkm2Go8vpA5p9s5JVI4D0a9wA9qdec6O/jw65dLaxmEDRBjJMNxOLr3HQatThXgBSBUW/4EHXbJhQSYeIGbaAZ8ZJFmyopSZhMq3xNJEQEEK33FkJ1c1u+H9bbYC1VBRSYtZySUlDyrafLErl4qgYZ/+JDN2fkbpmRflfnFlVIH99tioLATuX/Gq+WUC41jRNXCS2jcKLev+FavOR5gnAYrUv4ywxL1i+acetdGKOMHkwve//n7uVdACezOu/lFxMf+1n/oWpfdcDwXwlr390X53kwf0pFt5Lw7LfLRVfVHTBMfo9Oi7JbFvRSn4tWpRI8310zIi6f8huxJ4curE4XC1c1wKr5Ru9infEoOlciHWdWIbgKXIzVXQKXWYR2NRIBrClmDXPvSvXC/G8l1MIWARe0v9BPq52y8/vLLolzHGCO0HfiEYuiT3h9P701yBH5scQVW9Yti2PWXI8sQzoWd9412/FL+W38CzSz99PIGwqrASl3z7vEfYcA0HqEXRHNFULzVMPqNV2pAISZ5bQVQJsSMCp0ZYO00wDl/x4iGwihC16aaB/SUIQg719T9RBKiY71wEKnBmWl6Oo3qDIVnSvyMnETUUi+zqLlRVJ/GkJb178mrDLtNsGFr2uTjxASMs1vMFd/qIQxZ5tGeLMUl37Ai/wsn9Ll/UBCWFbgGR5PWNcdfKOjr55oKfc1LBDmYi5NJVuMjFvGwvN0QzcUn/t5oO5xr2/yd7MwUhRFGYd6mEhqTpsL71XgvGZZlh+UTF9tAhFBZ7U1DDbg970Tuh+3CENVEcEiQ49D2HWtGKjn5MqTqlVx6xNzVE7T2B7JEM9enIrVJnPsx/QQhEcT+9SCdkPtivCP5/kxFWUZGDqKI1SUqK3sc2F4flq+Hx5kNpa0XInsc+g8C4/41tMS/cO74bOr55AiDM6ytsyIF/20KtqgliE1K4+BX+T/ah0esVqIJP40AXv5sLvu32ISZV1xqq09gsHZN51q6pf7Fr+0DRUZzeIx0IVEBeV9uhz3kCitL8AtH6LTSiOvjvQRNbVymDsw+aaKiB3sWrJxFoJij35KfLdQreokp/EeDhyRnRmPrq1yUqwSdwhX04gR9gTgMhpZD2dX15TKLAjrFTMGmL9gL9NALQ06/TfKZRvgA793nP2DSDxIRP5inh8R2MSulQP9pFpLWtW9+4VnFQ52GntEPE4x3rBKrXpnwRrJifDMquXQ3oquTqys4LgQO6wsgBUfhZYtWmLX1xjnFErXN+DaZib8uPA6zQ3fIBqO5iLMSACYnXPWRKBoi1QQMqAr/1oA/oQQDFbIQq5pFD6I9r5xgD2mFI9retMZhBlOKrQujuDMz9lyBllIIOUfcJow3VgM4CHIB6Q3LTTvEw3BfBRvD1gqugmNhTgB6xhQ8ZvZShPutChM8KaGwSUf0nYByA7MFHGZL1Yo9Jh3E4bUAXoS/1nNf7trMjF/VRioSYIY136wwF+qBn/93moeCW5Rb0ZPbth7KmRvXssCE4vJJQsY44nOGjU9CzZ+wxfuO+8N3lssgmGCDI7DXbQddYW1yGq5W/F80cc4mrqQEtLm4nrFp7It3MX5xkDpNBeGoJvZtlEfOVM3uPiQIwIdVEQBSBKTswOUInObOlYhEmmVAdrWd6AEOetPQsmrqRbD+oGQzJXIRQfm45K7FlQcujxR2p9dnYvEb847NY60EeiL5dAHtYSutQvCisKxIRbj7h7FSeIlGqOOci0zHqobTVUzG26tV/AlmWf831JKEaEqAKLJmG1sb3+B+5fnnBVJNYAK/P6IR0vfYfp9IQQbTiGQhl2ftQyPK3287pTiEKEpNOg0B+PPcnacayo6GxUKNEEiAsnbgw+Ugwa1CGIahsBoVaFdabKJPBIkcUV9EKfwwqoJtQMfrMsWbc2WnBTRrHMVTKLEJpd+XMiAvMMZA0xojW/lOngezzl90FUaEANfwnDLnkkW5kKInETrIBTE9vJMfgbcm59TqsMVJikZdrQv4B0I04KH6JQ0m29zH8nQHawS5cOxVBHdAMElqBP8RCVXV9403qlVFEExL5IYO5buLO0VwlUUa1mR/bq2HuUdFTy0TZm17OLXet40MhNeZRpLIaH/4qfbjRkWwv4Xtv7gnWmJv9uRUvGfm3L+HTGfrALitVcpm9P2Q6EHvxL+xleDWqOt84GI9JSJyW4XvbgtJDEMmXCiqjH663tKHXaTnLaep1+GpQpffHONThJUuENkhpH3507NdlvQMOIWaaZU/ed19aGigFRyBL2aHAHoVP6waTmlZdB0xyK24BECIuo9HcSHDn8EUnmr41gWgqpkjSS1KdKehaZXlhzvG5HqXtg2EVpDgxPI9t1xdRE2pXaOhJUwFGQYenRVztIVg04UsuW6PBl9npjR6oFHGxKxTI/P9MUvDmP/wjKxDBFW3R9zA3K3u9E7v3N/3U8VrNTnT4ROpSrGCq9Q39SjGuvk8LESUafau2ZtkgtlphAmHm1eVyVR0WrACHdO/s8UsGUINq1upYWF8MoU4v0DGo4/xUEsZYdzU9b+TK1+QhBxjzZSdz5pUOiLPqBYHlMUTjPEJhWOg2TiLk7I7uVnGSJAdXCacaT9mrphemrfwR8VSEmGAMeG3qAUfYyiK9kTGprbp8B4KBbJWZwvi3bPGKGA0tHwlrJbO3CD+y1UAx9kkCODVp5PGSUmMr2cFGITfnTsI+yFo1+ur37sw5k6GJ2R5yxnZ4z3mVue5zRASR4CuxB8oMC3OkD5whAhyO0Sw+kUm8iwZUmQt/NUKTqpFzMk2sH6HL9bdKUwqrOIkx2gVii5HHJXuWhnXkpwNXwSSGxy56NOredCAfZczEIbF1oHT+FMopihk4EzdH8T4hyYZNEMcGX/RPwwoKgvTA0Svr0FEMw+P1Y7PciSO5+QFi4tBxR/Ds8rikx6dwrHNBw9fIRsD2lhW9ZvrIpm/KARTJulR1PDOfLLi1ctgDsJFh8CjxkoNMjuvm6tOGCKixtTYfkPmSA9VTdlbCN8NjcRqLn3U79ojCqFfkcsGwSFFRKo9Sjvgi91Jl5Z9yFF5hoLiZl51bE9Cdjalzo1688QTuv/10oejQuO0T2JAuYDFSLm/43dZXCO8UWNK4PfRBrV7794qj8G+bZLOPuxC2sQyuvvFpXPR7ekXgZ6ns6FFL3mq1x6wxnlTfaHGEZCpxk2cOt5LBowr/D5VM9riQgQQ0xmmLcg/NpsOCrDxqsKFFTff37lKLsRiMb0c7hWDRkq1x/eHvMpFir48ZBmrFAfeubTSvM32k0aO5cawGuSExngiB3wxVDh4Ak9IbAGdxgfGOskbPekGVlMjClcyJQeE+8Sl6MaB7C3r/eZOf0cE9iq13xM4QicpZt1AIg85BeOlQ2cnxkLA48CkwCqS90deX2IwQPw5mGZ4VtASk+qEtec6rEErGC6/9ly0BzjVBcNRGXeBdf4qH+QjwTkGyodiEr/qmOGm8lPutmCblE6Eiodv5X8ZwK84yiQI8rlyBZ05C67+wEDqxwzdKw8H3scyU79VD3h4erxn8jrhfPMEXuiPKqMWZpl7se6ZmcwQBYay8vU7+8A/+l5aUCBPNAb8F7/5PWVYD8y7EHI0CViEaw2P15zuzjPPmdS+kSvuhVXBM81UOoGgw4B5zgWWykbtmKhIXJS5BGpYJDj7dj5EGS7CaoOZ11W03h0XClPOBU9KoxU0sD0KwiXkbPzYoYaZprXdIP4eBtl/jpQ2P2TEACBDVKkNldi/r1JZE79uBRA4ZBmTQTt+n0tXP2hPOcZyIwaYLAi1LxunFk+5YUwEPovIXhcKwlsigPwjV6nPBT4eymWM3YLB20EbDE20UsZ9tqze8BTzkiIBce9g8WeH9poUE1Y9IAtdWOcVnI7wxMQg6RgbjHheFJ8Q+xOCrQYMC4waTMydTMyYm9vbGVhbiBgAACRchAACQAAAGR5EAABAAAAaW50ZWdlciBgAAAArHIQAAkAAABkeRAAAQAAAGNoYXJhY3RlciBgAMhyEAALAAAAZHkQAAEAAABzdHJpbmcgAORyEAAHAAAAYnl0ZSBhcnJheU9wdGlvbiB2YWx1ZW5ld3R5cGUgc3RydWN0c2VxdWVuY2VtYXBlbnVtdW5pdCB2YXJpYW50bmV3dHlwZSB2YXJpYW50dHVwbGUgdmFyaWFudHN0cnVjdCB2YXJpYW50L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbWFwL2VudHJ5LnJzAAAAXXMQAGAAAABwAQAANgAAAGFzc2VydGlvbiBmYWlsZWQ6IGlkeCA8IENBUEFDSVRZL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbm9kZS5ycwDwcxAAWwAAAI8CAAAJAAAAYXNzZXJ0aW9uIGZhaWxlZDogZWRnZS5oZWlnaHQgPT0gc2VsZi5oZWlnaHQgLSAx8HMQAFsAAACcAgAACQAAAPBzEABbAAAAoAIAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBzcmMubGVuKCkgPT0gZHN0Lmxlbigp8HMQAFsAAAAcBwAABQAAAPBzEABbAAAAnAQAACMAAADwcxAAWwAAANwEAAAkAAAAXwAAAAwAAAAEAAAAigAAAIsAAACMAAAAYSBEaXNwbGF5IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yIHVuZXhwZWN0ZWRseQA5AAAAAAAAAAEAAABEAAAAL3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvc3RyaW5nLnJzAGR1EABLAAAAnAkAAA4AAAAvcnVzdGMvNzllOTcxNmM5ODA1NzBiZmQxZjY2NmUzYjE2YWM1ODNmMDE2ODk2Mi9saWJyYXJ5L2NvcmUvc3JjL3N0ci9wYXR0ZXJuLnJzAMB1EABPAAAACgYAABQAAADAdRAATwAAAAoGAAAhAAAAwHUQAE8AAAD+BQAAFAAAAMB1EABPAAAA/gUAACEAAABhc3NlcnRpb24gZmFpbGVkOiBzZWxmLmlzX2NoYXJfYm91bmRhcnkobmV3X2xlbilkdRAASwAAAN4EAAANAAAARU9GIHdoaWxlIHBhcnNpbmcgYSBsaXN0RU9GIHdoaWxlIHBhcnNpbmcgYW4gb2JqZWN0RU9GIHdoaWxlIHBhcnNpbmcgYSBzdHJpbmdFT0Ygd2hpbGUgcGFyc2luZyBhIHZhbHVlZXhwZWN0ZWQgYDpgZXhwZWN0ZWQgYCxgIG9yIGBdYGV4cGVjdGVkIGAsYCBvciBgfWBleHBlY3RlZCBpZGVudGV4cGVjdGVkIHZhbHVlZXhwZWN0ZWQgYCJgaW52YWxpZCBlc2NhcGVpbnZhbGlkIG51bWJlcm51bWJlciBvdXQgb2YgcmFuZ2VpbnZhbGlkIHVuaWNvZGUgY29kZSBwb2ludGNvbnRyb2wgY2hhcmFjdGVyIChcdTAwMDAtXHUwMDFGKSBmb3VuZCB3aGlsZSBwYXJzaW5nIGEgc3RyaW5na2V5IG11c3QgYmUgYSBzdHJpbmdpbnZhbGlkIHZhbHVlOiBleHBlY3RlZCBrZXkgdG8gYmUgYSBudW1iZXIgaW4gcXVvdGVzZmxvYXQga2V5IG11c3QgYmUgZmluaXRlIChnb3QgTmFOIG9yICsvLWluZilsb25lIGxlYWRpbmcgc3Vycm9nYXRlIGluIGhleCBlc2NhcGV0cmFpbGluZyBjb21tYXRyYWlsaW5nIGNoYXJhY3RlcnN1bmV4cGVjdGVkIGVuZCBvZiBoZXggZXNjYXBlcmVjdXJzaW9uIGxpbWl0IGV4Y2VlZGVkIGF0IGxpbmUgRXJyb3IoLCBsaW5lOiAsIGNvbHVtbjogAAAAzXgQAAYAAADTeBAACAAAANt4EAAKAAAANI8QAAEAAABpbnZhbGlkIHR5cGU6ICwgZXhwZWN0ZWQgAAAACHkQAA4AAAAWeRAACwAAAGludmFsaWQgdmFsdWU6IAA0eRAADwAAABZ5EAALAAAAZmxvYXRpbmcgcG9pbnQgYGAAAABUeRAAEAAAAGR5EAABAAAAbnVsbC9Vc2Vycy9tYXR1c2J1dG9yYS8uY2FyZ28vcmVnaXN0cnkvc3JjL2luZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmL3NlcmRlX2pzb24tMS4wLjExNy9zcmMvZXJyb3IucnMAfHkQAGcAAAD3AQAAIQAAAHx5EABnAAAA+wEAAAwAAAB8eRAAZwAAAAIC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ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTkvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zZXJkZV9qc29uLTEuMC4xMTcvc3JjL3JlYWQucnPChRAAZgAAAKMBAAAeAAAAwoUQAGYAAADIAQAAEwAAAMKFEABmAAAA0QEAAD4AAADChRAAZgAAAM0BAAAzAAAAwoUQAGYAAADXAQAAOgAAAMKFEABmAAAAQAIAACUAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAQBB5I3CAAsBAQBBiI/CAAuWHsKFEABmAAAAqAMAAC8AAAD///////////////////////////////////////////////////////////////8AAQIDBAUGBwgJ/////////woLDA0OD///////////////////////////////////CgsMDQ4P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////L3J1c3RjLzc5ZTk3MTZjOTgwNTcwYmZkMWY2NjZlM2IxNmFjNTgzZjAxNjg5NjIvbGlicmFyeS9hbGxvYy9zcmMvY29sbGVjdGlvbnMvYnRyZWUvbmF2aWdhdGUucnMAmIgQAF8AAABZAgAAMAAAAJiIEABfAAAAFwIAAC8AAACYiBAAXwAAAMcAAAAnAAAAmIgQAF8AAACiAAAAJAAAAF8AAAAMAAAABAAAAIoAAACLAAAAjAAAAC9ydXN0Yy83OWU5NzE2Yzk4MDU3MGJmZDFmNjY2ZTNiMTZhYzU4M2YwMTY4OTYyL2xpYnJhcnkvY29yZS9zcmMvc2xpY2UvaXRlci5yc2ludGVybmFsIGVycm9yOiBlbnRlcmVkIHVucmVhY2hhYmxlIGNvZGU6IJ6JEAAqAAAAdW5rbm93biBpY29zYXJvdW5kIGluZGV40IkQABgAAAAvVXNlcnMvbWF0dXNidXRvcmEvLmNhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9zaGExLTAuMTAuNi9zcmMvY29tcHJlc3Mvc29mdC5yc/CJEABoAAAAOQAAAA4AAABDYXBhY2l0eU92ZXJmbG93QWxsb2NFcnJsYXlvdXQAAEkAAAAEAAAABAAAAI0AAABBbGdvcml0aG1JZGVudGlmaWVyIHBhcmFtZXRlcnMgbWlzc2luZ0FTTi4xIGVycm9yOiAAvooQAA0AAABTUEtJIGNyeXB0b2dyYXBoaWMga2V5IGRhdGEgbWFsZm9ybWVkdW5rbm93bi91bnN1cHBvcnRlZCBhbGdvcml0aG0gT0lEOiD5ihAAIwAAAEFsZ29yaXRobVBhcmFtZXRlcnNNaXNzaW5nQXNuMQAASQAAAAQAAAAEAAAAhgAAAEtleU1hbGZvcm1lZE9pZFVua25vd25vaWQAAABJAAAABAAAAAQAAABaAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZQBFAAAABAAAAAQAAACOAAAAjwAAAAwAAAAEAAAAkAAAAJEAAACSAAAADJYQAAAAAABsaWJyYXJ5L3N0ZC9zcmMvaW8vYnVmZmVyZWQvbGluZXdyaXRlcnNoaW0ucnNhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKdyLEAAtAAAAAQEAACkAAABlbnRpdHkgbm90IGZvdW5kcGVybWlzc2lvbiBkZW5pZWRjb25uZWN0aW9uIHJlZnVzZWRjb25uZWN0aW9uIHJlc2V0aG9zdCB1bnJlYWNoYWJsZW5ldHdvcmsgdW5yZWFjaGFibGVjb25uZWN0aW9uIGFib3J0ZWRub3QgY29ubmVjdGVkYWRkcmVzcyBpbiB1c2VhZGRyZXNzIG5vdCBhdmFpbGFibGVuZXR3b3JrIGRvd25icm9rZW4gcGlwZWVudGl0eSBhbHJlYWR5IGV4aXN0c29wZXJhdGlvbiB3b3VsZCBibG9ja25vdCBhIGRpcmVjdG9yeWlzIGEgZGlyZWN0b3J5ZGlyZWN0b3J5IG5vdCBlbXB0eXJlYWQtb25seSBmaWxlc3lzdGVtIG9yIHN0b3JhZ2UgbWVkaXVtZmlsZXN5c3RlbSBsb29wIG9yIGluZGlyZWN0aW9uIGxpbWl0IChlLmcuIHN5bWxpbmsgbG9vcClzdGFsZSBuZXR3b3JrIGZpbGUgaGFuZGxlaW52YWxpZCBpbnB1dCBwYXJhbWV0ZXJpbnZhbGlkIGRhdGF0aW1lZCBvdXR3cml0ZSB6ZXJvbm8gc3RvcmFnZSBzcGFjZXNlZWsgb24gdW5zZWVrYWJsZSBmaWxlZmlsZXN5c3RlbSBxdW90YSBleGNlZWRlZGZpbGUgdG9vIGxhcmdlcmVzb3VyY2UgYnVzeWV4ZWN1dGFibGUgZmlsZSBidXN5ZGVhZGxvY2tjcm9zcy1kZXZpY2UgbGluayBvciByZW5hbWV0b28gbWFueSBsaW5rc2ludmFsaWQgZmlsZW5hbWVhcmd1bWVudCBsaXN0IHRvbyBsb25nb3BlcmF0aW9uIGludGVycnVwdGVkdW5zdXBwb3J0ZWR1bmV4cGVjdGVkIGVuZCBvZiBmaWxlb3V0IG9mIG1lbW9yeW90aGVyIGVycm9ydW5jYXRlZ29yaXplZCBlcnJvciAob3MgZXJyb3IgKQAAAAyWEAAAAAAAKY8QAAsAAAA0jxAAAQAAAGxpYnJhcnkvc3RkL3NyYy9pby9zdGRpby5ycwBQjxAAGwAAAOoCAAAUAAAAZmFpbGVkIHByaW50aW5nIHRvIDogAAAAfI8QABMAAACPjxAAAgAAAFCPEAAbAAAA+wMAAAkAAABzdGRvdXRmb3JtYXR0ZXIgZXJyb3IAAAC6jxAADwAAACgAAABjYW5ub3QgcmVjdXJzaXZlbHkgYWNxdWlyZSBtdXRleNiPEAAgAAAAbGlicmFyeS9zdGQvc3JjL3N5cy93YXNtLy4uL3Vuc3VwcG9ydGVkL2xvY2tzL211dGV4LnJzAAAAkBAANgAAABQAAAAJAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc0iQEAAcAAAA0AAAABQAAABIkBAAHAAAANAAAAAxAAAAbG9jayBjb3VudCBvdmVyZmxvdyBpbiByZWVudHJhbnQgbXV0ZXhsaWJyYXJ5L3N0ZC9zcmMvc3luYy9yZW11dGV4LnJzAAAAqpAQAB8AAACRAAAADgAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnPckBAAHAAAAFQCAAAeAAAAVW5zdXBwb3J0ZWROb3RGb3VuZFBlcm1pc3Npb25EZW5pZWRDb25uZWN0aW9uUmVmdXNlZENvbm5lY3Rpb25SZXNldEhvc3RVbnJlYWNoYWJsZU5ldHdvcmtVbnJlYWNoYWJsZUNvbm5lY3Rpb25BYm9ydGVkTm90Q29ubmVjdGVkQWRkckluVXNlQWRkck5vdEF2YWlsYWJsZU5ldHdvcmtEb3duQnJva2VuUGlwZUFscmVhZHlFeGlzdHNXb3VsZEJsb2NrTm90QURpcmVjdG9yeUlzQURpcmVjdG9yeURpcmVjdG9yeU5vdEVtcHR5UmVhZE9ubHlGaWxlc3lzdGVtRmlsZXN5c3RlbUxvb3BTdGFsZU5ldHdvcmtGaWxlSGFuZGxlSW52YWxpZElucHV0SW52YWxpZERhdGFUaW1lZE91dFdyaXRlWmVyb1N0b3JhZ2VGdWxsTm90U2Vla2FibGVGaWxlc3lzdGVtUXVvdGFFeGNlZWRlZEZpbGVUb29MYXJnZVJlc291cmNlQnVzeUV4ZWN1dGFibGVGaWxlQnVzeURlYWRsb2NrQ3Jvc3Nlc0RldmljZXNUb29NYW55TGlua3NJbnZhbGlkRmlsZW5hbWVBcmd1bWVudExpc3RUb29Mb25nSW50ZXJydXB0ZWRVbmV4cGVjdGVkRW9mT3V0T2ZNZW1vcnlPdGhlclVuY2F0ZWdvcml6ZWRvcGVyYXRpb24gc3VjY2Vzc2Z1bG9uZS10aW1lIGluaXRpYWxpemF0aW9uIG1heSBub3QgYmUgcGVyZm9ybWVkIHJlY3Vyc2l2ZWx5AAA6kxAAOAAAABAAAAARAAAAEgAAABAAAAAQAAAAEwAAABIAAAANAAAADgAAABUAAAAMAAAACwAAABUAAAAVAAAADwAAAA4AAAATAAAAJgAAADgAAAAZAAAAFwAAAAwAAAAJAAAACgAAABAAAAAXAAAAGQAAAA4AAAANAAAAFAAAAAgAAAAbAAAADgAAABAAAAAWAAAAFQAAAAsAAAAWAAAADQAAAAsAAAATAAAAPIwQAEyMEABdjBAAb4wQAH+MEACPjBAAoowQALSMEADBjBAAz4wQAOSMEADwjBAA+4wQABCNEAAljRAANI0QAEKNEABVjRAAe40QALONEADMjRAA440QAO+NEAD4jRAAAo4QABKOEAApjhAAQo4QAFCOEABdjhAAcY4QAHmOEACUjhAAoo4QALKOEADIjhAA3Y4QAOiOEAD+jhAAC48QABaPEAAIAAAAEAAAABEAAAAPAAAADwAAABIAAAARAAAADAAAAAkAAAAQAAAACwAAAAoAAAANAAAACgAAAA0AAAAMAAAAEQAAABIAAAAOAAAAFgAAAAwAAAALAAAACAAAAAkAAAALAAAACwAAABcAAAAMAAAADAAAABIAAAAIAAAADgAAAAwAAAAPAAAAEwAAAAsAAAALAAAADQAAAAsAAAAFAAAADQAAABOREAAbkRAAK5EQADyREABLkRAAWpEQAGyREAB9kRAAiZEQAJKREACikRAArZEQALeREADEkRAAzpEQANuREADnkRAA+JEQAAqSEAAYkhAALpIQADqSEABFkhAATZIQAFaSEABhkhAAbJIQAIOSEACPkhAAm5IQAK2SEAC1khAAw5IQAM+SEADekhAA8ZIQAAiREAD8khAACZMQABSTEAAZkxAAbnVsbCBwb2ludGVyIHBhc3NlZCB0byBydXN0cmVjdXJzaXZlIHVzZSBvZiBhbiBvYmplY3QgZGV0ZWN0ZWQgd2hpY2ggd291bGQgbGVhZCB0byB1bnNhZmUgYWxpYXNpbmcgaW4gcnVzdGFycmF5IGNvbnRhaW5zIGEgdmFsdWUgb2YgdGhlIHdyb25nIHR5cGUAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzQuMCAoNzllOTcxNmM5IDIwMjMtMTEtMTMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MgAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=", import.meta.url));
  const I = kE();
  (typeof g == "string" || typeof Request == "function" && g instanceof Request || typeof URL == "function" && g instanceof URL) && (g = fetch(g));
  const { instance: t, module: A } = await GE(await g, I);
  return NE(t, A);
}
function QA(g, I) {
  const t = jg();
  return QA = function(A, e) {
    A = A - (-1 * -6613 + -729 * 5 + -2856);
    let o = t[A];
    if (QA.varzqe === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      QA.SCebrb = a, g = arguments, QA.varzqe = !0;
    }
    const C = t[-1878 + -871 * 3 + -4491 * -1], B = A + C, n = g[B];
    return n ? o = n : (QA.gLxZDu === void 0 && (QA.gLxZDu = !0), o = QA.SCebrb(o, e), g[B] = o), o;
  }, QA(g, I);
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return QA(a - 475, B);
  }
  function A(B, n, a, Q, E) {
    return QA(E - -663, a);
  }
  const e = g();
  function o(B, n, a, Q, E) {
    return QA(E - 544, Q);
  }
  function i(B, n, a, Q, E) {
    return QA(a - 42, Q);
  }
  function C(B, n, a, Q, E) {
    return QA(a - -648, n);
  }
  for (; ; )
    try {
      if (parseInt(o(673, 698, 715, "LGvj", 688)) / 1 + parseInt(A(-545, -553, "FNqE", -553, -544)) / 2 + -parseInt(A(-518, -527, "^y^@", -483, -502)) / 3 * (-parseInt(A(-526, -560, "#i&]", -561, -538)) / 4) + parseInt(t("UR1r", 600, 598, 623, 576)) / 5 * (-parseInt(t("))t[", 607, 611, 585, 612)) / 6) + -parseInt(t("QNo!", 658, 634, 634, 645)) / 7 * (-parseInt(i(203, 179, 202, "l2FC", 213)) / 8) + -parseInt(C(-500, "pj9a", -507, -488, -493)) / 9 * (-parseInt(t("*#6#", 566, 589, 571, 573)) / 10) + -parseInt(t(")rTo", 619, 624, 652, 600)) / 11 * (parseInt(A(-522, -547, "q(3R", -507, -520)) / 12) === I) break;
      e.push(e.shift());
    } catch {
      e.push(e.shift());
    }
})(jg, 151 * 7541 + -447 * -2939 + -1570194);
function jg() {
  const g = ["WPLsWQ1lxG", "W6X2WRT4aa", "W598W43dN8kLW40haa", "WOVdTxVdQSoP", "pmkaW6NcQYW", "WQddMSoHvSo+W7j5WPzzW7ZdSua", "k1FcVCoPcLddJKG", "W4XXuWpdUWVcJx5PCmk6WPu", "WRvZE2bX", "WRKmhSokrq", "vSkUW5/dKqi", "qSo/W69mWQtdTYry", "u8oQwxu", "W5rUeKPz", "W4y7W6pdNCka", "W5VcGCoMtt1ZD8k2W5m", "W58fW60qjvxdHeFdO1TBsxm", "DCkUWOKiWRq", "WPBdU8kQqSkG", "iYxdSYhcQq", "W74KWRnBqCkxeLi", "rXeAW4mPW44Xamo3xxBcTa", "WPKlW78DtW", "nvrSfmoD", "W5ulW6SrxW", "mc3dSJNcK8oEhSk9W7bjW54", "xb3cVSkHgSkfW78HFmohA2i", "zJ0sW79LWPuDgW", "umkUW6TDWP0", "WO7cVxPVW64", "W4dcPeNcJqa", "WO0znmohWRa", "W50kW6yviItcS2NdN2Dm", "WQVcQ8oAttFdOCocr27dVghdIG", "eCk8W6nBWP8", "nslcOJKu", "pmkDW5JcPs0", "W584zmoyyG", "smo9WRHdWPRdTGToAG", "WQeOfConrq", "B3hcQ3NdGW", "gSoNwgtcKq", "WOFcSZFcNW", "WQevW63cH8o0WQmLlq", "W5tcGCoIBd99q8k/W44", "dCkXbLFcMWCOcmog", "AmoRW4GQm2S1WORdPxVcO3e", "uCoAW5tdTq8", "W5ldPZyYWR/cVCoAW7mBWOjjoa", "oIldUdJcLSkLhSkCW5bqW54Z", "mCoiW6HRWQ19nXe5W6zG", "WPS5ub8LWPFdKSoYW5jEfW", "AN3dPwzhwbWhFhCHW5nm", "fqDmWP56", "amkBfSktwq", "gmkwsMy2"];
  return jg = function() {
    return g;
  }, jg();
}
function bE(g, I, t, A, e) {
  return QA(g - -529, e);
}
function Re(g, I, t, A, e) {
  return QA(g - -602, t);
}
function It(g, I, t, A, e) {
  return QA(g - -776, A);
}
function FE(g, I, t, A, e) {
  return QA(g - -726, I);
}
var di;
class RE {
  constructor() {
    p(this, di, !1);
  }
  async [(di = Re(-440, -415, "KuKh") + Re(-475, -469, "!V7)") + Re(-450, -439, "D0J&"), Re(-436, -429, "q(3R"))](I) {
    function t(C, B, n, a, Q) {
      return It(Q - 811, B - 22, n - 273, a);
    }
    function A(C, B, n, a, Q) {
      return It(B - 879, B - 157, n - 272, a);
    }
    function e(C, B, n, a, Q) {
      return It(B - 650, B - 254, n - 299, Q);
    }
    function o(C, B, n, a, Q) {
      return It(a - -204, B - 317, n - 232, C);
    }
    function i(C, B, n, a, Q) {
      return bE(C - 1261, B - 72, n - 313, a - 111, a);
    }
    try {
      const C = I + (e(-12, -14, -25, -12, "wT9h") + "/") + To;
      await wB(C), this[i(896, 905, 902, "Uu1U", 872) + e(15, 7, 12, 33, "&RZ!") + i(877, 859, 862, "(aO%", 888)] = !0;
    } catch {
      this[i(886, 904, 861, "*#6#") + o("Ah4v", -849, -888, -864) + o("7Ydb", -885, -850, -860)] = !1, console[A(253, 243, 269, "Ve0s")](To + (e(-16, -4, 22, 18, "7Ydb") + i(853, 850, 837, "]$dq") + e(15, 6, 10, 2, "))t[") + A(224, 229, 241, "))t[") + i(867, 852, 871, "jTL5") + A(247, 241, 262, "UR1r") + t(165, 194, 153, "q(3R", 174) + i(883, 887, 871, "FNqE") + o("Cg#4", -822, -830, -843) + e(-13, -9, 16, 15, "nTfv") + A(277, 258, 239, "ebBR") + i(861, 846, 841, "eFTn") + i(866, 838, 892, "Q4jU") + e(6, 2, 26, -23, "Q(1t") + "n."));
    }
  }
  [Re(-444, -418, "Q4jU") + It(-613, -620, -633, "Cg#4") + FE(-573, "&zHI") + "ed"]() {
    function I(t, A, e, o, i) {
      return Re(t - 1043, A - 31, e);
    }
    return this[I(608, 609, ")rTo") + I(598, 605, "qs^n") + I(556, 547, "pyys")];
  }
}
class R0 extends Error {
  constructor() {
    super(...arguments);
    p(this, "name", "SkipLicenseValidationError");
  }
  log() {
  }
}
function ot(g, I, t, A, e) {
  return X(g - -250, A);
}
function Se(g, I, t, A, e) {
  return X(I - -345, t);
}
function Pg() {
  var g = ["W4ddI8oAW7WTc8o5EG", "W4ddJmkgWQTqESkizcq5gu4K", "W4raWOmmW75PWQiezvVcImo4WR4", "e3xcHCk3e8kiWRTkCu8", "C1uTBmke", "WOhcNmoxW7yh", "vGmqsqW8W7OMgmk2W5tdGGW", "WO/cSCo8WPeQ", "sdlcN8odFq", "W7iMh1pdNCo0BwldOhJdPCoNmG", "W7FdQXJcNCkbWOHbrsBdSW", "z3NdPW", "wXRdICoYcuqMWP1XEa", "WO7cJb7dT00", "WP9ad8kwjG", "CSo3W7DVkv3dLdG", "WO8cW4qlxG", "aKZdQSo9lG", "pSoLySkIoG", "W6mPiSoaWOW", "m8oWFG", "sCk8W7ddSCoOBwZcTmocCepdL8op", "W4WCWQDfWPu", "WOOaWPHFW6PcxmoBlSouW7O", "i8k0W6T9cq", "W4b0WQ/cUYZdI8kgySoFW4RcPCot", "W5BdVgi", "W5ZcK8kr", "W6KkWQFdPSkCa0hcJmkgW5S", "u8oXAW", "wZZcMCo6Cq", "W5HrW6avE3ZdGNS", "xdZcMCoNFq", "iuzlmSoAW5nesa", "WQvLxG3cNq", "WQJcTMZdLGK", "WQlcT1ZdKXS", "WQDIwgnf", "W5FdNfJcRr0kaghdHhFcKq", "W5VdU3vWcq", "WQzdqK9o", "icBdUmkza2RdG2ZcSW", "WPrFk8kC", "F2/cUCk7cW", "sCk2W7pdS8k0hXFcTSoUuW", "rtpcJmoqCq", "WOxcNWxdP1y", "ttD6W5fF", "rdZcN8o3Ca", "Fu3dN3aP", "WQfElqut", "t8o+u3xdQG", "W4ldM0BdMHjNEwODm0qr", "dSkRb1ldLv3cKLWW", "WPWDW51t", "bqDrWPFcKLJdPxHBaW", "zhFcV8k8aq", "W4CiWQbsWPi", "W7ddVqdcLf1+j8o4WQZcRtHjWO8", "bCoAW6/dMCom", "WOhcKSoB", "W4LuW5K", "DMtcV8k9gG", "vmo2v03dJa", "m8kUW7y"];
  return Pg = function() {
    return g;
  }, Pg();
}
(function(g, I) {
  function t(B, n, a, Q, E) {
    return X(Q - -766, E);
  }
  function A(B, n, a, Q, E) {
    return X(B - 967, E);
  }
  function e(B, n, a, Q, E) {
    return X(a - 641, B);
  }
  var o = g();
  function i(B, n, a, Q, E) {
    return X(E - -651, B);
  }
  for (; ; )
    try {
      var C = parseInt(i("umFx", -281, -270, -248, -274)) / 1 * (parseInt(A(1396, 1392, 1387, 1378, "bOCl")) / 2) + -parseInt(i("PI[W", -252, -246, -259, -234)) / 3 * (parseInt(A(1371, 1374, 1382, 1396, "Ojd$")) / 4) + parseInt(t(-382, -381, -395, -376, "UZvG")) / 5 * (-parseInt(i("QES(", -258, -273, -303, -279)) / 6) + -parseInt(i("Lt(p", -307, -301, -310, -277)) / 7 * (-parseInt(e("tIiF", 1044, 1023, 1053, 997)) / 8) + -parseInt(A(1387, 1404, 1414, 1360, "##Iz")) / 9 + parseInt(t(-351, -350, -324, -351, "oV1q")) / 10 + parseInt(t(-428, -366, -380, -396, "2#f9")) / 11;
      if (C === I) break;
      o.push(o.shift());
    } catch {
      o.push(o.shift());
    }
})(Pg, -3 * -51247 + -96304 + 52377);
function si(g, I, t, A, e) {
  return X(e - -55, A);
}
function X(g, I) {
  var t = Pg();
  return X = function(A, e) {
    A = A - (-43 * 76 + -70 * -1 + 3565);
    var o = t[A];
    if (X.wytwdW === void 0) {
      var i = function(Q) {
        for (var E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=", r = "", s = "", d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (var w = 0, R = r.length; w < R; w++)
          s += "%" + ("00" + r.charCodeAt(w).toString(16)).slice(-2);
        return decodeURIComponent(s);
      }, C = function(Q, E) {
        var r = [], s = 0, d, h = "";
        Q = i(Q);
        var x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (var u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      X.wvCZRN = C, g = arguments, X.wytwdW = !0;
    }
    var B = t[-1397 + 2 * -219 + -1 * -1835], n = A + B, a = g[n];
    return a ? o = a : (X.yrXFUo === void 0 && (X.yrXFUo = !0), o = X.wvCZRN(o, e), g[n] = o), o;
  }, X(g, I);
}
function it(g, I, t, A, e) {
  return X(I - -526, e);
}
function Ct(g, I, t, A, e) {
  return X(t - -553, e);
}
var We, Ht;
class ci {
  constructor(I) {
    W(this, We);
    W(this, Ht);
    this[o(447, 472, 474, "7[LY") + o(486, 487, 491, "R2&v")] = I;
    function t(C, B, n, a, Q) {
      return X(Q - -893, B);
    }
    function A(C, B, n, a, Q) {
      return X(a - -660, C);
    }
    function e(C, B, n, a, Q) {
      return X(n - -561, Q);
    }
    function o(C, B, n, a, Q) {
      return X(C - 80, a);
    }
    function i(C, B, n, a, Q) {
      return X(n - -912, C);
    }
    try {
      v(this, We, I[A("pMam", -279, -280, -292, -318) + A("P5Wq", -272, -240, -261, -276) + i("oV1q", -521, -503, -480, -525)] && JSON[A("VhkK", -288, -288, -279, -282)](I[o(511, 495, 481, "CAyd", 530) + e(-151, -170, -172, -201, "u9!j") + o(493, 480, 505, "bOCl", 496)])), v(this, Ht, I[i("R2&v", -532, -541, -539, -541) + t(-505, "K5U)", -515, -515, -517)]);
    } catch (C) {
      console[e(-181, -125, -158, -133, "M%Ho")](C);
    }
  }
  get [ot(158, 150, 186, "tYsc") + "id"]() {
    function I(A, e, o, i, C) {
      return ot(e - 74, e - 73, o - 118, A);
    }
    function t(A, e, o, i, C) {
      return ot(o - -325, e - 432, o - 242, A);
    }
    return this[I("d]he", 219, 223) + t("VhkK", -154, -178)][I("orh#", 208, 184) + t("k3g^", -167, -200)];
  }
  get [Se(17, 38, "0!st") + "s"]() {
    function I(A, e, o, i, C) {
      return ot(C - 464, e - 77, o - 0, e);
    }
    function t(A, e, o, i, C) {
      return Se(A - 402, i - -469, o);
    }
    return this[t(-423, -456, "orh#", -429) + I(611, "$!oA", 594, 602, 610)][I(653, "UZvG", 649, 598, 625) + "s"];
  }
  get [Se(48, 34, "VhkK") + ot(119, 135, 90, "7[LY")]() {
    function I(e, o, i, C, B) {
      return Se(e - 369, e - -220, i);
    }
    function t(e, o, i, C, B) {
      return it(e - 182, o - -230, i - 284, C - 175, B);
    }
    function A(e, o, i, C, B) {
      return Se(e - 41, B - 327, C);
    }
    return this[I(-167, -172, "I5dP") + I(-138, -132, "d]he")][A(378, 361, 358, "UZvG", 387) + t(-390, -378, -384, -347, "cPlr")];
  }
  get [si(337, 367, 344, "VhkK", 367) + "b"]() {
    return m(this, We);
  }
  get [Ct(-178, -210, -180, -154, "bOCl") + si(384, 403, 377, "rlDs", 370)]() {
    return m(this, Ht);
  }
  get [Se(77, 83, "Uv@#") + Ct(-181, -191, -161, -190, "UZvG") + it(-114, -140, -137, -136, "u9!j") + it(-108, -135, -160, -147, "Uv@#")]() {
    var i, C;
    function I(B, n, a, Q, E) {
      return Ct(B - 211, n - 456, Q - 600, Q - 113, a);
    }
    function t(B, n, a, Q, E) {
      return it(B - 212, E - 1174, a - 384, Q - 166, a);
    }
    function A(B, n, a, Q, E) {
      return it(B - 83, a - 1321, a - 62, Q - 40, E);
    }
    function e(B, n, a, Q, E) {
      return Ct(B - 351, n - 354, a - -415, Q - 302, n);
    }
    function o(B, n, a, Q, E) {
      return Ct(B - 67, n - 57, a - 126, Q - 493, B);
    }
    return !!((C = (i = m(this, We)) == null ? void 0 : i[o("AThY", -25, 3, -1) + e(-533, "QES(", -558, -530)]) != null && C[o("4h12", -45, -27, -36) + A(1240, 1213, 1207, 1232, "4h12") + o("k3g^", -24, -39, -43) + t(1080, 1080, "wUkC", 1079, 1066) + o("cMLG", -1, -6, -15) + e(-595, "VhkK", -574, -562) + I(489, 462, "oV1q", 466) + "d"]);
  }
}
We = new WeakMap(), Ht = new WeakMap();
function Vg() {
  const g = ["WOhdS00QzW", "yvJcP8ktaW", "fg1BWRhdQa", "jt3dUCoQmW", "hmo/Eq", "W7hdMmkala", "kYpdQKpcGq", "W53dV8kzwt0", "dSoUamkUW54", "vdiFW78+", "xg0fjhW", "W4ZcVZ3dUI4", "WQrECCo7gG", "Cmokqfqm", "WOxdULeWcq", "W6CSW7erWQ8", "Ae3cU8kd", "WRBdJmk3W7yX", "FuFcTCoqWO0", "WQRdTCkDW418", "W6iPW5fcW7WCvwFdGq", "W7hdVdtdVt4", "v8o6p1/cUW", "W7tcG3ye", "W73cLmkuofi", "WRVdO8kfW6e5", "W4xdKCk0W4S1BvO", "WO3dUCkjW4GF", "DNVcQHxdNK4Gj3a2pW", "W6ZcIG3cJmkK", "WQjqaSkRW6xdUSkaW7HbWOS6", "WRJdTu0", "CmoxW50", "W71Egq", "Ba9g", "WRldVuOckG", "dYC8", "WRNdOCoFnSoh", "jcFdQMtcHG", "lZVdR8oHoq", "b8oJvmksDG", "WPNdH8oDoW", "yCogW4BcPSkv", "dH3dQ8kIra", "kMjnW7lcPa", "cCkWea", "WQKJW6OnWQa", "WPNdH8oDo8o2", "gSoJWQuZma", "bWBdO8kOuG", "WQZdTmkyW4SI", "k8k1srG", "b8o4eComW5S", "hCo/zq", "WRxdQmkxW4O", "WQTNDmkAnG", "WRRdU10Ikq", "rvdcSmkvbq", "W7BcMmkdevu", "iIBdQCoipG", "WOtdT00YkW", "WR9gz8kYmG", "WO3dOCkDW6KI", "dNn9W61k", "W5VdUCkE", "WOVdVSofW4GM", "WRu9na", "FalcVCoEWOW", "mrH3p2S", "cmo/ECkHDG", "W5NdJCkNm2W", "zHjhW5pcOG", "kxBdNxKF", "n8k2f0y", "qmoArM4X", "WQBdH8o/W6yl", "mSkXwai", "EeBcIJRdHG", "WOddICoBDCo2", "kCk4q2P1", "WOi1m8ksWQ8", "WOVdP8kdW4S/", "WPZdG8oCcSo1", "qbjAW4/cOW", "lwnCW7ZcOq", "AbxcSSorWO0", "WRO9iSoOWRu", "smkIW7HZDGjleZddRW9+", "WOqnu8kVW6u", "WQvdD8orbq", "ivhdGhvl", "t3z+FCov", "vtC6rmkjWPrL", "W64GW7e7WRS", "WQHcASoG", "W60GW6mzWRS", "WQJcJSoDEXlcNCoSW5uYwmk1WR0", "AWy9W6uV", "WPpdS8kD", "WQZdHmoIWPWf", "WPCiW7m3WO8", "zvdcSmkvbq", "WQNdH8ooW484", "WPhdVCkuW4u4", "EKdcNtldKW", "EedcIJ7dNa", "zLyanfS", "dw59W4Dz", "AWLCW4NcSa", "nf3dPLuk", "dSk2d0Da", "c8oMaSoTW5C", "WOVdImoCmmop", "WORdK8opW6FcJa", "W7/dNmkhmuq", "lCkbWOLTbq", "WRT9WOq", "WOSfsCkJW7S", "WP7dLmogo8oR", "teVcOCkFgq", "WPZdOmkgW5m", "WOVdN8k1W5K+", "aSk5eeSA", "W7nEbu/dQW", "WPiFW70WWOK", "l2npWPNcUG", "W7/dJmkAnK4", "WPFdG0a", "WQ85nmoIWRK", "eHxdO8k0rq", "WQO3na", "WQ56ACkSja", "uCo0pXZcUG", "cHVdOSkZtG", "yW9AW6xcSa", "W6VcS3JdKbi", "WPmXk8k/WQq", "aJiGqSkX", "rgvLBCoo", "WPqXjCoPWR4", "zfVcGdxdHG", "W7LPwCo/aCoTzG", "DfyDBvm", "l8k9vGtdUq", "kIhdU07cMG", "WR/dKCkwW40M", "WQ3dMCkaW5y6", "DKxcMqpdKa", "WQfrbmkGW6xcJCo0W7TxWOarWPqP", "idhdQCkQwG", "bSkJc10", "l8kXqX/dNW", "EuJcGdu", "b8oXz8knBq", "w3LTWPFdGa", "rNr+", "W7NcLmorWQ9KgSkNW5XbW4xdJq", "j03dNgmy", "jgLCWPdcOq", "WPhdQ2ZcRw5IWPLofauIWOi", "uNGihMG", "BSoMa13cIhBdGqHZWRPUWPCy", "W7xcMmktCW", "chTJFCoy", "f8o8f8oUW5S", "WQ7dQCkd", "aSkPcW", "W6hcVSkbuZy", "WPpdI1dcN18", "W4qBb1xdRq", "dsKSvmkS", "WQ/dN8kkW6KG", "jY3dQMxcHa", "q3LaWPpdTG", "WRS9kmo/WRu", "cmkXqWldKW", "shPGW51f", "CKZcNtJdMG", "WRNdTmkdW4OK", "WQddJSofBGLmWR/dHLxdICkfW4G", "c25GW5Ty", "lbdcRSokWRiIWRC", "gSkYamoNW4C", "jWhdGSo+hq", "WPGoW5aTWP8", "rxjUESoy", "cXRdT8kO", "WQLTymk+iG", "WQHBbmoyWOddNmkQW6rs", "WQ1dzmorgG", "W7hcHhWvWOu", "qNL5E8oT", "v8oYoa", "WQddHmkFW783", "W6uSW6yDWQa", "xmo7obRdSG", "dHVdSmkJBa", "hCocWOq6cq", "WOtdOSovW5KN", "WO7dPmodW5iT", "W70hrG", "WQxdKmkdW7dcPG", "W6PQCmk1W6pcNJ4yimomFq", "WPhdVCknW4uY", "dt3cRmoaga", "ueBcP8oXetXMcCkrWOtcUCkaxG", "s8ooqxK2", "cWFdHSkMuW", "WO0Dr8kjW4y", "W7OXW6OvWQS", "mL7dN3Kp", "avVdIwOC", "W4RdTSkGo2u", "WRVdJmkxW7q", "qxH/Cmoz", "WOWlrmkpW6y", "C8oNW6FcH8ki", "WQH/rCo2hq", "oCkIvaK", "jJddRe/cMW", "WPtdNCkBW4S", "W6uQW6i9WRW", "l2njWRJcHa", "W7tcG3KF", "EYFdNe7cVeCg", "WRJdJK3dKSoKECo0WRqgueBcICkj", "W7mhwSoHWRm", "mgDnWRfRm8oyW6JdIq/cGsjc", "W7hcMvmzWOG", "WPGtW78HWPi", "WRL/WO98W5G", "kZpdUmoNpW", "vNuxW645", "wmo4j8oUW6CqW5W", "ytOvW7mO", "uNWTkxO", "nSkJzG3dIq", "AJqpW6qY", "D1VcHIJdGq", "lf7dH3md", "WOSbxSk5W64", "dSk0bKbj", "vxC6ke8", "CICsW6KU", "WQXLBCo9ha", "qxj+FCov", "WRfEASo6ha", "CNhcRHldMJTvieyZmmksCa", "h3aSi3G", "lmkCWO9hgG"];
  return Vg = function() {
    return g;
  }, Vg();
}
(function(g, I) {
  const t = g();
  function A(B, n, a, Q, E) {
    return gA(B - 162, E);
  }
  function e(B, n, a, Q, E) {
    return gA(a - -734, Q);
  }
  function o(B, n, a, Q, E) {
    return gA(Q - -163, B);
  }
  function i(B, n, a, Q, E) {
    return gA(E - 776, a);
  }
  function C(B, n, a, Q, E) {
    return gA(Q - 698, E);
  }
  for (; ; )
    try {
      if (parseInt(i(1292, 1299, "3p9Y", 1100, 1179)) / 1 + parseInt(i(1196, 1344, "My0h", 1353, 1247)) / 2 * (-parseInt(o("6u)A", 238, 127, 171, 114)) / 3) + parseInt(o("t]&y", 179, 384, 265, 378)) / 4 * (-parseInt(C(1064, 1120, 1080, 1041, "EScm")) / 5) + -parseInt(i(1145, 1248, "[Afq", 1233, 1248)) / 6 + parseInt(i(1148, 1250, "ndB2", 1167, 1171)) / 7 + parseInt(e(-422, -407, -346, "p5oQ", -260)) / 8 * (parseInt(C(1254, 1124, 1182, 1172, "TTIg")) / 9) + -parseInt(e(-348, -328, -299, "ndB2", -413)) / 10 * (-parseInt(A(611, 505, 568, 688, "Jwg(")) / 11) === I) break;
      t.push(t.shift());
    } catch {
      t.push(t.shift());
    }
})(Vg, -205031 + -1 * -244445 + -99829 * -1);
function DA(g, I, t, A, e) {
  return gA(I - -536, A);
}
function EA(g, I, t, A, e) {
  return gA(e - 472, t);
}
function CA(g, I, t, A, e) {
  return gA(t - 226, e);
}
function gA(g, I) {
  const t = Vg();
  return gA = function(A, e) {
    A = A - (499 * 11 + -1 * 9502 + 4307);
    let o = t[A];
    if (gA.QVOwmR === void 0) {
      var i = function(Q) {
        const E = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let r = "", s = "";
        for (let d = 0, h, x, u = 0; x = Q.charAt(u++); ~x && (h = d % 4 ? h * 64 + x : x, d++ % 4) ? r += String.fromCharCode(255 & h >> (-2 * d & 6)) : 0)
          x = E.indexOf(x);
        for (let d = 0, h = r.length; d < h; d++)
          s += "%" + ("00" + r.charCodeAt(d).toString(16)).slice(-2);
        return decodeURIComponent(s);
      };
      const a = function(Q, E) {
        let r = [], s = 0, d, h = "";
        Q = i(Q);
        let x;
        for (x = 0; x < 256; x++)
          r[x] = x;
        for (x = 0; x < 256; x++)
          s = (s + r[x] + E.charCodeAt(x % E.length)) % 256, d = r[x], r[x] = r[s], r[s] = d;
        x = 0, s = 0;
        for (let u = 0; u < Q.length; u++)
          x = (x + 1) % 256, s = (s + r[x]) % 256, d = r[x], r[x] = r[s], r[s] = d, h += String.fromCharCode(Q.charCodeAt(u) ^ r[(r[x] + r[s]) % 256]);
        return h;
      };
      gA.hxEsvC = a, g = arguments, gA.QVOwmR = !0;
    }
    const C = t[13 * -7 + 1466 * -1 + 173 * 9], B = A + C, n = g[B];
    return n ? o = n : (gA.uwzKGJ === void 0 && (gA.uwzKGJ = !0), o = gA.hxEsvC(o, e), g[B] = o), o;
  }, gA(g, I);
}
function JA(g, I, t, A, e) {
  return gA(t - 479, e);
}
function kA(g, I, t, A, e) {
  return gA(A - 732, t);
}
var hi, li, ui;
class SE {
  constructor(I) {
    p(this, ui);
    p(this, li, [CA(656, 707, 721, 761, "e!$x") + kA(1174, 1191, "hi7U", 1273) + "ic", EA(918, 972, "^xzv", 941, 882) + DA(-36, -31, 48, "Sv[2") + "ic"]);
    p(this, hi);
    function t(A, e, o, i, C) {
      return gA(i - 23, C);
    }
    this[t(440, 346, 481, 442, "My0h") + t(343, 275, 334, 356, "Jwg(") + "d"] = I;
  }
  async [(ui = JA(971, 1016, 929, 862, "]zm!") + "se", li = JA(797, 879, 793, 675, "t]&y") + JA(980, 878, 986, 923, "e!$x") + CA(754, 730, 664, 753, "^xzv") + DA(-268, -169, -83, "]zm!"), hi = JA(893, 858, 863, 945, "IxZH") + kA(1201, 1292, "TTIg", 1216), kA(1287, 1166, "dYYK", 1252))](I) {
    const t = await this[A(141, "hi7U", 170, 84) + e(758, "dMKY", 801) + e(966, "Z9Cy", 898)](I);
    function A(C, B, n, a, Q) {
      return JA(C - 158, B - 51, a - -800, a - 155, B);
    }
    function e(C, B, n, a, Q) {
      return DA(C - 263, n - 967, n - 230, B);
    }
    function o(C, B, n, a, Q) {
      return kA(C - 395, B - 423, a, B - 267);
    }
    function i(C, B, n, a, Q) {
      return kA(C - 386, B - 429, Q, C - -134);
    }
    await Promise[o(1349, 1447, 1351, "Z9Cy") + e(810, "(aGR", 860)]([this[e(788, "p5oQ", 767) + e(768, "rYxt", 746) + "d"][i(939, 944, 1031, 1050, "p5oQ")](I), this[i(1041, 1065, 999, 1134, "(@Rv") + e(982, "i3@s", 939) + "e"](t)]), this[i(981, 977, 998, 975, "O*3D") + o(1456, 1392, 1367, "3p9Y") + i(1085, 1166, 1200, 1006, "kN$&")]();
  }
  async [EA(883, 945, "^xzv", 854, 964) + CA(563, 414, 530, 505, "75mH") + "se"](I) {
    function t(C, B, n, a, Q) {
      return CA(C - 481, B - 320, a - -7, a - 395, n);
    }
    function A(C, B, n, a, Q) {
      return DA(C - 444, Q - 828, n - 258, a);
    }
    function e(C, B, n, a, Q) {
      return DA(C - 27, B - 520, n - 59, Q);
    }
    function o(C, B, n, a, Q) {
      return EA(C - 366, B - 159, a, a - 431, C - 168);
    }
    function i(C, B, n, a, Q) {
      return CA(C - 478, B - 319, Q - 625, a - 390, B);
    }
    try {
      if (o(1164, 1149, 1041, "]zm!", 1147) !== o(1030, 1127, 922, "TSCl", 1138)) {
        _0x93068a instanceof _0x5d2150 && _0x3421df[i(1125, "hi7U", 1133, 1144, 1223) + o(1017, 994, 1078, "Jwg(", 982)](_0x3ceb75);
        return;
      } else {
        const C = await fetch(I);
        if (!C.ok)
          throw e(316, 328, 385, 263, "TTIg") === t(660, 660, "p5oQ", 683, 602) ? new Error(i(1124, "nxH$", 1213, 1322, 1197) + t(593, 662, "jl!A", 707, 820) + o(998, 1008, 935, "(aGR", 1063) + e(590, 527, 502, 528, "Fkg@") + "d.") : new _0x24553c(e(361, 310, 199, 302, "jl!A") + e(415, 502, 488, 464, "i3@s") + t(684, 625, "jl!A", 588, 501) + t(822, 611, "e#@K", 719, 636) + ".");
        this[A(934, 919, 740, "C%Cs", 813) + "se"] = await C[o(938, 884, 1041, "TSCl", 830)]();
      }
    } catch (C) {
      o(1004, 932, 1115, "kN$&") !== t(740, 630, "Tqqj", 753) ? (this[A(862, 891, 658, "RB*j", 768) + "se"] = void (485 * -5 + 8906 + 1 * -6481), console[e(543, 450, 415, 493, "My0h")](C)) : (this[A(776, 745, 796, "Fkg@", 733) + "se"] = void (-8484 + 7899 * -1 + 1 * 16383), _0x2aff21[t(594, 594, "AjK3", 715)](_0x2ccc26));
    }
  }
  async [EA(1058, 924, "hi7U", 1066, 941) + EA(896, 934, "om4i", 973, 892) + "e"](I) {
    function t(C, B, n, a, Q) {
      return kA(C - 333, B - 16, n, Q - -1405);
    }
    if (this[A(-416, -341, "rItB") + i(507, "My0h", 583, 536)] = void 0, !I)
      if (A(-309, -265, "[jC8") !== e(1017, "%lHf", 1039, 844, 931)) {
        console[t(-100, -315, "dYYK", -226, -203)](o(-430, "i3@s", -326, -468) + t(-285, -216, "grqT", -159, -259) + t(-187, -246, "jl!A", -267, -304) + e(941, "p(IB", 1060, 941, 960) + A(-411, -500, "C%Cs")), this[e(864, "nxH$", 753, 879, 866) + "se"] = void (-9521 * -1 + -1330 + -8191);
        return;
      } else {
        if (!this[e(958, "dYYK", 815, 937, 858) + "se"]) throw new _0x388542(t(-196, -264, "Z9Cy", -246, -313) + t(-156, -305, "TTIg", -91, -194) + t(-311, -449, "rItB", -296, -336) + e(906, "nxH$", 772, 934, 867) + ".");
        if (!this[A(-288, -183, "[jC8") + A(-338, -434, "e!$x") + "d"][e(959, "(@Rv", 794, 766, 875) + e(778, "rItB", 796, 776, 740) + i(514, "jl!A", 278, 390) + "ed"]()) throw new _0x5dc3fc(e(939, "[jC8", 1026, 851, 918) + t(-401, -433, "Tqqj", -299, -348) + i(650, "Fkg@", 607, 545) + o(-272, "(@Rv", -305, -175) + ".");
        this[e(879, "yn6b", 832, 850, 799) + e(635, "^xzv", 769, 797, 759)] = new _0x1a18ff(_0xf5cf9b(this[t(-189, -154, "e#@K", -137, -137) + "se"], this[o(-277, "My0h", -385, -244) + A(-497, -504, "TSCl")]())), this[e(706, "t]&y", 780, 630, 753) + t(-218, -325, "75mH", -274, -307) + "s"](this[i(289, "^E2s", 405, 351) + o(-326, "rItB", -439, -243)][A(-524, -551, "(@Rv") + "s"]), this[o(-515, "Hi7a", -601, -548) + o(-390, "TSCl", -351, -451) + t(-30, -240, "IxZH", -179, -140)](this[o(-327, "okf1", -317, -361) + A(-405, -385, "!8dr")][A(-409, -289, "Sv[2") + i(276, "grqT", 413, 344)]);
      }
    function A(C, B, n, a, Q) {
      return DA(C - 354, C - -284, n - 404, n);
    }
    function e(C, B, n, a, Q) {
      return JA(C - 9, B - 15, Q - -58, a - 32, B);
    }
    function o(C, B, n, a, Q) {
      return CA(C - 437, B - 102, C - -1038, a - 235, B);
    }
    function i(C, B, n, a, Q) {
      return CA(C - 322, B - 493, a - -193, a - 476, B);
    }
    await this[i(464, "okf1", 548, 457) + A(-434, -382, "Jwg(") + "se"](I);
  }
  async [kA(960, 1044, "C%Cs", 1037) + DA(-149, -63, -89, "ndB2") + DA(-238, -216, -98, "jl!A")](I) {
    const t = await fetch("" + I + this[e(628, 653, "Fkg@", 684) + e(779, 881, "dYYK", 817) + e(791, 803, "Tqqj", 701) + o("75mH", 187, 82, 150)][0]);
    function A(C, B, n, a, Q) {
      return CA(C - 104, B - 407, n - 22, a - 72, a);
    }
    function e(C, B, n, a, Q) {
      return DA(C - 357, a - 878, n - 267, n);
    }
    function o(C, B, n, a, Q) {
      return EA(C - 405, B - 318, C, a - 424, a - -835);
    }
    const i = t.ok ? -1 * -9029 + 3044 + -12073 : -13433 + -2239 * -6;
    return "" + I + this[e(853, 657, "yn6b", 776) + A(607, 623, 679, "RB*j") + A(696, 641, 737, "e!$x") + e(769, 644, "jl!A", 739)][i];
  }
  [JA(909, 891, 969, 1035, "TTIg") + EA(689, 741, "^E2s", 689, 802) + "s"](I) {
    function t(e, o, i, C, B) {
      return CA(e - 176, o - 483, C - -660, C - 1, o);
    }
    function A(e, o, i, C, B) {
      return CA(e - 264, o - 447, i - -1215, C - 128, C);
    }
    I[t(-83, "yn6b", -13, -132) + "ch"]((e) => console[A(-458, -409, -451, "Tqqj")](e));
  }
  [EA(863, 974, "p5oQ", 1030, 965) + CA(433, 607, 554, 457, "Hi7a") + EA(1032, 1092, "[jC8", 1013, 1e3)](I) {
    function t(A, e, o, i, C) {
      return kA(A - 248, e - 355, i, A - -412);
    }
    I[t(630, 667, 514, "dtEG") + "ch"]((A) => console[t(753, 705, 754, "(@Rv")](A));
  }
  [EA(1101, 957, "Hi7a", 1077, 994) + JA(874, 890, 878, 758, "okf1")]() {
    function I(A, e, o, i, C) {
      return CA(A - 141, e - 118, A - -157, i - 285, e);
    }
    function t(A, e, o, i, C) {
      return CA(A - 2, e - 149, e - -1156, i - 384, o);
    }
    return window[I(393, "okf1", 510, 269) + I(600, "^E2s", 581, 528)][t(-436, -550, "(@Rv", -437) + t(-542, -567, "5%SJ", -684)];
  }
  [EA(983, 876, "rItB", 832, 929) + JA(807, 812, 785, 802, "e#@K") + kA(1111, 1184, "EScm", 1093)]() {
    var i;
    function I(C, B, n, a, Q) {
      return CA(C - 360, B - 137, C - 454, a - 488, Q);
    }
    function t(C, B, n, a, Q) {
      return CA(C - 360, B - 197, B - -247, a - 327, a);
    }
    function A(C, B, n, a, Q) {
      return DA(C - 201, a - 907, n - 239, n);
    }
    function e(C, B, n, a, Q) {
      return EA(C - 279, B - 456, a, a - 12, C - 272);
    }
    function o(C, B, n, a, Q) {
      return DA(C - 464, B - 507, n - 138, n);
    }
    try {
      if (t(507, 438, 401, "EScm", 497) === A(780, 699, "e!$x", 724, 605)) {
        if (!this[e(1092, 1032, 1023, "75mH", 1010) + "se"]) {
          if (A(826, 760, "]zm!", 885, 775) === A(752, 813, "3p9Y", 739, 785)) return;
          throw new R0(o(418, 422, "e#@K", 455, 319) + I(1096, 1141, 1210, 1116, "dMKY") + e(1186, 1074, 1222, "*LG8", 1188) + A(858, 711, "^xzv", 832, 937) + ".");
        }
        if (!this[A(714, 785, "kN$&", 833, 956) + I(1162, 1214, 1231, 1084, "e!$x") + "d"][I(1163, 1146, 1280, 1250, "TSCl") + o(530, 462, "p5oQ", 391, 471) + e(1144, 1050, 1183, "FMxC", 1119) + "ed"]()) {
          if (e(1066, 1075, 1091, "nxH$", 946) !== o(502, 429, "rItB", 503, 311)) throw new R0(A(862, 986, "]zm!", 887, 824) + e(1075, 1015, 1161, "hi7U", 1049) + e(1099, 1158, 1074, "^E2s", 1100) + e(1094, 990, 1127, "]zm!", 1150) + ".");
          _0x2795ea[A(724, 723, "p5oQ", 807, 852) + A(932, 771, "FMxC", 872, 782)](_0x2494a7);
        }
        this[A(583, 750, "6u)A", 666, 628) + A(781, 761, "*LG8", 750, 640)] = new ci(mE(this[o(327, 388, "IxZH", 469, 334) + "se"], this[e(1071, 1024, 1097, "O*3D", 1001) + o(576, 473, "EScm", 596, 388)]())), this[t(422, 366, 378, "okf1", 307) + o(281, 337, "75mH", 216, 266) + "s"](this[I(975, 968, 1077, 877, "6u)A") + I(1095, 1036, 1144, 1058, "!8dr")][I(1034, 981, 1002, 965, "dtEG") + "s"]), this[A(615, 723, "Tqqj", 736, 821) + o(201, 299, "Hi7a", 202, 277) + I(1222, 1179, 1304, 1267, "jl!A")](this[e(1129, 1107, 1044, "^xzv", 1088) + o(276, 292, "%lHf", 335, 209)][e(1119, 1073, 1175, "Jwg(", 998) + e(1089, 1126, 1167, "]zm!", 1071)]);
      } else _0x338371[I(1189, 1111, 1112, 1089, "p5oQ")](_0x23ef56);
    } catch (C) {
      if (I(1029, 1036, 954, 1051, "nxH$") !== A(668, 579, "3p9Y", 680)) {
        const B = _0x58d8f5[I(1056, 1052, 957, 1110, "(@Rv")](this[t(246, 282, 205, "[jC8") + "se"]);
        return (i = B == null ? void 0 : B[I(1161, 1046, 1198, 1277, "TTIg") + t(450, 508, 595, "p(IB")]) == null ? void 0 : i[e(1117, 1077, 1114, "EScm") + A(912, 780, "ndB2", 818)];
      } else {
        if (C instanceof R0) {
          if (e(1145, 1112, 1053, "om4i") === t(355, 296, 356, "EScm")) throw new _0x414511(I(1069, 960, 1129, 954, "e!$x") + A(760, 693, "My0h", 762) + I(1195, 1129, 1138, 1264, "t]&y") + e(1167, 1120, 1111, "dtEG") + "d.");
          C[e(1157, 1152, 1269, "(aGR")]();
        } else C instanceof Error && (I(1110, 1161, 1044, 1157, "e#@K") !== o(302, 415, "6u)A") ? _0x371bcb[I(1061, 1056, 1119, 993, "^E2s") + "ch"]((n) => _0x18c5cb[e(1204, 1230, 1285, "3p9Y")](n)) : console[t(444, 404, 460, "Hi7a")](C));
        const B = {};
        B[e(1281, 1252, 1339, "FMxC") + I(1054, 1058, 1023, 936, "!8dr")] = !1, B[o(571, 497, "[Afq") + "s"] = [], B[e(1038, 1114, 1160, "Tqqj") + I(1119, 1189, 1107, 1209, "*LG8")] = [], B[e(1115, 1126, 1007, "RB*j") + t(384, 308, 290, "Tqqj") + t(190, 279, 387, "FMxC")] = void (59 * 56 + -233 * -29 + 1 * -10061), B[e(1209, 1297, 1249, "TSCl")] = function() {
        }, B[I(1133, 1232, 1106, 1120, "%lHf") + o(583, 501, "dMKY")] = "", this[t(323, 397, 473, "3p9Y") + A(758, 878, "75mH", 869)] = new ci(B);
      }
    }
  }
  [DA(-349, -237, -116, "Sv[2") + JA(972, 1024, 900, 1012, "Jwg(") + DA(-204, -229, -351, "[jC8") + "t"]() {
    function I(t, A, e, o, i) {
      return CA(t - 133, A - 335, i - -465, o - 467, t);
    }
    return this[I("dtEG", 81, 200, 112, 188) + I("grqT", 210, 239, 271, 265)];
  }
  [JA(906, 792, 819, 880, "Fkg@") + kA(1296, 1303, "Fkg@", 1188) + CA(515, 564, 534, 441, "yn6b")]() {
    var i;
    function I(C, B, n, a, Q) {
      return EA(C - 20, B - 463, C, a - 260, a - 335);
    }
    function t(C, B, n, a, Q) {
      return EA(C - 266, B - 35, n, a - 342, B - -997);
    }
    function A(C, B, n, a, Q) {
      return EA(C - 316, B - 332, C, a - 33, a - 432);
    }
    function e(C, B, n, a, Q) {
      return kA(C - 50, B - 341, n, C - -508);
    }
    if (!this[I("okf1", 1187, 1273, 1159) + "se"]) {
      if (I("(@Rv", 1320, 1254, 1203) === t(-88, -133, "]zm!", -172)) return;
      this[A("AjK3", 1343, 1235, 1266) + A("^xzv", 1290, 1227, 1336) + "d"] = _0x3f62a6;
    }
    function o(C, B, n, a, Q) {
      return kA(C - 320, B - 375, a, n - -734);
    }
    try {
      if (A("rItB", 1284, 1249, 1260, 1341) === o(501, 368, 461, "p(IB", 356)) _0x1154ce[o(269, 206, 314, "FMxC", 316) + "ch"]((C) => _0x583c2b[o(268, 284, 299, "Hi7a", 365)](C));
      else {
        const C = JSON[o(353, 486, 396, "TSCl", 497)](this[e(559, 503, "kN$&", 581, 635) + "se"]);
        return (i = C == null ? void 0 : C[A("5%SJ", 1292, 1428, 1381, 1436) + A("^xzv", 1383, 1226, 1306, 1406)]) == null ? void 0 : i[I("nxH$", 997, 1021, 1119, 1143) + o(389, 247, 311, "Jwg(", 310)];
      }
    } catch (C) {
      if (I("TTIg", 1420, 1384, 1313) === e(679, 722, "kN$&")) throw new _0x39986f(e(723, 734, "hi7U") + o(396, 557, 517, "*LG8") + A("okf1", 1372, 1239, 1255) + I("3p9Y", 1285, 1127, 1247) + ".");
      if (C instanceof Error) {
        if (I("okf1", 1137, 1100, 1201) === t(-173, -118, "e!$x", -50)) return this[A("RB*j", 1128, 1356, 1251) + o(595, 469, 476, "e#@K")];
        O[e(692, 675, "Fkg@") + t(-154, -113, "Hi7a", -221)](C);
      }
      return;
    }
  }
}
const _g = class _g extends SE {
  static getInstance() {
    if (!this._instance) {
      const I = new RE();
      this._instance = new _g(I);
    }
    return this._instance;
  }
};
p(_g, "_instance");
let yI = _g;
const ME = ({ children: g }) => {
  const I = UA(null);
  return wx(I, zA.VIDEO_ELEMENT_SIZE), /* @__PURE__ */ D(WQ, { ref: I, children: g });
}, LE = ({ cameraOptions: g }) => g ? /* @__PURE__ */ D(SQ, { target: g.styleTarget, children: /* @__PURE__ */ D(
  Va,
  {
    assetsDirectoryPath: g.assetsDirectoryPath,
    bramble: yI.getInstance(),
    children: /* @__PURE__ */ D(_a, { analytics: yE, appKey: "5f83e83ee4cee1ab6e5bbf86e215644473299675", children: /* @__PURE__ */ D(
      PQ,
      {
        value: lE({
          onError: g.onError
        }),
        children: /* @__PURE__ */ D(yC, { children: /* @__PURE__ */ D(ME, { children: /* @__PURE__ */ D(dE, { ...g }) }) })
      }
    ) })
  }
) }) : null;
OB(LE, "x-dot-face-auto-capture", ["cameraOptions"]);
