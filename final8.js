// jquery starts here

if (function(t, e) {
     "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
         if (!t.document) throw new Error("jQuery requires a window with a document");
         return e(t)
     } : e(t)
 }("undefined" != typeof window ? window : this, function(t, e) {
     var i = [],
         n = t.document,
         o = Object.getPrototypeOf,
         r = i.slice,
         s = i.concat,
         a = i.push,
         l = i.indexOf,
         c = {},
         u = c.toString,
         d = c.hasOwnProperty,
         p = d.toString,
         f = p.call(Object),
         h = {};

     function v(t, e) {
         var i = (e = e || n).createElement("script");
         i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
     }
     var g = function(t, e) {
             return new g.fn.init(t, e)
         },
         m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
         y = /^-ms-/,
         b = /-([a-z])/g,
         w = function(t, e) {
             return e.toUpperCase()
         };

     function x(t) {
         var e = !!t && "length" in t && t.length,
             i = g.type(t);
         return "function" !== i && !g.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
     }
     g.fn = g.prototype = {
         jquery: "3.2.0",
         constructor: g,
         length: 0,
         toArray: function() {
             return r.call(this)
         },
         get: function(t) {
             return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
         },
         pushStack: function(t) {
             var e = g.merge(this.constructor(), t);
             return e.prevObject = this, e
         },
         each: function(t) {
             return g.each(this, t)
         },
         map: function(t) {
             return this.pushStack(g.map(this, function(e, i) {
                 return t.call(e, i, e)
             }))
         },
         slice: function() {
             return this.pushStack(r.apply(this, arguments))
         },
         first: function() {
             return this.eq(0)
         },
         last: function() {
             return this.eq(-1)
         },
         eq: function(t) {
             var e = this.length,
                 i = +t + (t < 0 ? e : 0);
             return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
         },
         end: function() {
             return this.prevObject || this.constructor()
         },
         push: a,
         sort: i.sort,
         splice: i.splice
     }, g.extend = g.fn.extend = function() {
         var t, e, i, n, o, r, s = arguments[0] || {},
             a = 1,
             l = arguments.length,
             c = !1;
         for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
             if (null != (t = arguments[a]))
                 for (e in t) i = s[e], s !== (n = t[e]) && (c && n && (g.isPlainObject(n) || (o = Array.isArray(n))) ? (o ? (o = !1, r = i && Array.isArray(i) ? i : []) : r = i && g.isPlainObject(i) ? i : {}, s[e] = g.extend(c, r, n)) : void 0 !== n && (s[e] = n));
         return s
     }, g.extend({
         expando: "jQuery" + ("3.2.0" + Math.random()).replace(/\D/g, ""),
         isReady: !0,
         error: function(t) {
             throw new Error(t)
         },
         noop: function() {},
         isFunction: function(t) {
             return "function" === g.type(t)
         },
         isWindow: function(t) {
             return null != t && t === t.window
         },
         isNumeric: function(t) {
             var e = g.type(t);
             return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
         },
         isPlainObject: function(t) {
             var e, i;
             return !(!t || "[object Object]" !== u.call(t) || (e = o(t)) && (i = d.call(e, "constructor") && e.constructor, "function" != typeof i || p.call(i) !== f))
         },
         isEmptyObject: function(t) {
             var e;
             for (e in t) return !1;
             return !0
         },
         type: function(t) {
             return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t
         },
         globalEval: function(t) {
             v(t)
         },
         camelCase: function(t) {
             return t.replace(y, "ms-").replace(b, w)
         },
         each: function(t, e) {
             var i, n = 0;
             if (x(t))
                 for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
             else
                 for (n in t)
                     if (!1 === e.call(t[n], n, t[n])) break;
             return t
         },
         trim: function(t) {
             return null == t ? "" : (t + "").replace(m, "")
         },
         makeArray: function(t, e) {
             var i = e || [];
             return null != t && (x(Object(t)) ? g.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
         },
         inArray: function(t, e, i) {
             return null == e ? -1 : l.call(e, t, i)
         },
         merge: function(t, e) {
             for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
             return t.length = o, t
         },
         grep: function(t, e, i) {
             for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) !== s && n.push(t[o]);
             return n
         },
         map: function(t, e, i) {
             var n, o, r = 0,
                 a = [];
             if (x(t))
                 for (n = t.length; r < n; r++) null != (o = e(t[r], r, i)) && a.push(o);
             else
                 for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
             return s.apply([], a)
         },
         guid: 1,
         proxy: function(t, e) {
             var i, n, o;
             if ("string" == typeof e && (i = t[e], e = t, t = i), g.isFunction(t)) return n = r.call(arguments, 2), (o = function() {
                 return t.apply(e || this, n.concat(r.call(arguments)))
             }).guid = t.guid = t.guid || g.guid++, o
         },
         now: Date.now,
         support: h
     }), "function" == typeof Symbol && (g.fn[Symbol.iterator] = i[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
         c["[object " + e + "]"] = e.toLowerCase()
     });
     var T = function(t) {
         var e, i, n, o, r, s, a, l, c, u, d, p, f, h, v, g, m, y, b, w = "sizzle" + 1 * new Date,
             x = t.document,
             T = 0,
             k = 0,
             C = st(),
             S = st(),
             $ = st(),
             E = function(t, e) {
                 return t === e && (d = !0), 0
             },
             A = {}.hasOwnProperty,
             O = [],
             P = O.pop,
             D = O.push,
             j = O.push,
             N = O.slice,
             I = function(t, e) {
                 for (var i = 0, n = t.length; i < n; i++)
                     if (t[i] === e) return i;
                 return -1
             },
             q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
             L = "[\\x20\\t\\r\\n\\f]",
             M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
             H = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
             R = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
             F = new RegExp(L + "+", "g"),
             W = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
             z = new RegExp("^" + L + "*," + L + "*"),
             _ = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
             V = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
             Q = new RegExp(R),
             B = new RegExp("^" + M + "$"),
             X = {
                 ID: new RegExp("^#(" + M + ")"),
                 CLASS: new RegExp("^\\.(" + M + ")"),
                 TAG: new RegExp("^(" + M + "|[*])"),
                 ATTR: new RegExp("^" + H),
                 PSEUDO: new RegExp("^" + R),
                 CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                 bool: new RegExp("^(?:" + q + ")$", "i"),
                 needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
             },
             U = /^(?:input|select|textarea|button)$/i,
             Y = /^h\d$/i,
             G = /^[^{]+\{\s*\[native \w/,
             Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
             J = /[+~]/,
             K = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
             tt = function(t, e, i) {
                 var n = "0x" + e - 65536;
                 return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
             },
             et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
             it = function(t, e) {
                 return e ? "\0" === t ? "" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
             },
             nt = function() {
                 p()
             },
             ot = yt(function(t) {
                 return !0 === t.disabled && ("form" in t || "label" in t)
             }, {
                 dir: "parentNode",
                 next: "legend"
             });
         try {
             j.apply(O = N.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
         } catch (t) {
             j = {
                 apply: O.length ? function(t, e) {
                     D.apply(t, N.call(e))
                 } : function(t, e) {
                     for (var i = t.length, n = 0; t[i++] = e[n++];);
                     t.length = i - 1
                 }
             }
         }

         function rt(t, e, n, o) {
             var r, a, c, u, d, h, m, y = e && e.ownerDocument,
                 T = e ? e.nodeType : 9;
             if (n = n || [], "string" != typeof t || !t || 1 !== T && 9 !== T && 11 !== T) return n;
             if (!o && ((e ? e.ownerDocument || e : x) !== f && p(e), e = e || f, v)) {
                 if (11 !== T && (d = Z.exec(t)))
                     if (r = d[1]) {
                         if (9 === T) {
                             if (!(c = e.getElementById(r))) return n;
                             if (c.id === r) return n.push(c), n
                         } else if (y && (c = y.getElementById(r)) && b(e, c) && c.id === r) return n.push(c), n
                     } else {
                         if (d[2]) return j.apply(n, e.getElementsByTagName(t)), n;
                         if ((r = d[3]) && i.getElementsByClassName && e.getElementsByClassName) return j.apply(n, e.getElementsByClassName(r)), n
                     } if (i.qsa && !$[t + " "] && (!g || !g.test(t))) {
                     if (1 !== T) y = e, m = t;
                     else if ("object" !== e.nodeName.toLowerCase()) {
                         for ((u = e.getAttribute("id")) ? u = u.replace(et, it) : e.setAttribute("id", u = w), a = (h = s(t)).length; a--;) h[a] = "#" + u + " " + mt(h[a]);
                         m = h.join(","), y = J.test(t) && vt(e.parentNode) || e
                     }
                     if (m) try {
                         return j.apply(n, y.querySelectorAll(m)), n
                     } catch (t) {} finally {
                         u === w && e.removeAttribute("id")
                     }
                 }
             }
             return l(t.replace(W, "$1"), e, n, o)
         }

         function st() {
             var t = [];
             return function e(i, o) {
                 return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = o
             }
         }

         function at(t) {
             return t[w] = !0, t
         }

         function lt(t) {
             var e = f.createElement("fieldset");
             try {
                 return !!t(e)
             } catch (t) {
                 return !1
             } finally {
                 e.parentNode && e.parentNode.removeChild(e), e = null
             }
         }

         function ct(t, e) {
             for (var i = t.split("|"), o = i.length; o--;) n.attrHandle[i[o]] = e
         }

         function ut(t, e) {
             var i = e && t,
                 n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
             if (n) return n;
             if (i)
                 for (; i = i.nextSibling;)
                     if (i === e) return -1;
             return t ? 1 : -1
         }

         function dt(t) {
             return function(e) {
                 return "input" === e.nodeName.toLowerCase() && e.type === t
             }
         }

         function pt(t) {
             return function(e) {
                 var i = e.nodeName.toLowerCase();
                 return ("input" === i || "button" === i) && e.type === t
             }
         }

         function ft(t) {
             return function(e) {
                 return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ot(e) === t : e.disabled === t : "label" in e && e.disabled === t
             }
         }

         function ht(t) {
             return at(function(e) {
                 return e = +e, at(function(i, n) {
                     for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                 })
             })
         }

         function vt(t) {
             return t && void 0 !== t.getElementsByTagName && t
         }
         for (e in i = rt.support = {}, r = rt.isXML = function(t) {
                 var e = t && (t.ownerDocument || t).documentElement;
                 return !!e && "HTML" !== e.nodeName
             }, p = rt.setDocument = function(t) {
                 var e, o, s = t ? t.ownerDocument || t : x;
                 return s !== f && 9 === s.nodeType && s.documentElement ? (h = (f = s).documentElement, v = !r(f), x !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)), i.attributes = lt(function(t) {
                     return t.className = "i", !t.getAttribute("className")
                 }), i.getElementsByTagName = lt(function(t) {
                     return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                 }), i.getElementsByClassName = G.test(f.getElementsByClassName), i.getById = lt(function(t) {
                     return h.appendChild(t).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                 }), i.getById ? (n.filter.ID = function(t) {
                     var e = t.replace(K, tt);
                     return function(t) {
                         return t.getAttribute("id") === e
                     }
                 }, n.find.ID = function(t, e) {
                     if (void 0 !== e.getElementById && v) {
                         var i = e.getElementById(t);
                         return i ? [i] : []
                     }
                 }) : (n.filter.ID = function(t) {
                     var e = t.replace(K, tt);
                     return function(t) {
                         var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                         return i && i.value === e
                     }
                 }, n.find.ID = function(t, e) {
                     if (void 0 !== e.getElementById && v) {
                         var i, n, o, r = e.getElementById(t);
                         if (r) {
                             if ((i = r.getAttributeNode("id")) && i.value === t) return [r];
                             for (o = e.getElementsByName(t), n = 0; r = o[n++];)
                                 if ((i = r.getAttributeNode("id")) && i.value === t) return [r]
                         }
                         return []
                     }
                 }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                     return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                 } : function(t, e) {
                     var i, n = [],
                         o = 0,
                         r = e.getElementsByTagName(t);
                     if ("*" === t) {
                         for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                         return n
                     }
                     return r
                 }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                     if (void 0 !== e.getElementsByClassName && v) return e.getElementsByClassName(t)
                 }, m = [], g = [], (i.qsa = G.test(f.querySelectorAll)) && (lt(function(t) {
                     h.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + L + "*(?:value|" + q + ")"), t.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]")
                 }), lt(function(t) {
                     t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                     var e = f.createElement("input");
                     e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + L + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), h.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                 })), (i.matchesSelector = G.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && lt(function(t) {
                     i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), m.push("!=", R)
                 }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), e = G.test(h.compareDocumentPosition), b = e || G.test(h.contains) ? function(t, e) {
                     var i = 9 === t.nodeType ? t.documentElement : t,
                         n = e && e.parentNode;
                     return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                 } : function(t, e) {
                     if (e)
                         for (; e = e.parentNode;)
                             if (e === t) return !0;
                     return !1
                 }, E = e ? function(t, e) {
                     if (t === e) return d = !0, 0;
                     var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                     return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === f || t.ownerDocument === x && b(x, t) ? -1 : e === f || e.ownerDocument === x && b(x, e) ? 1 : u ? I(u, t) - I(u, e) : 0 : 4 & n ? -1 : 1)
                 } : function(t, e) {
                     if (t === e) return d = !0, 0;
                     var i, n = 0,
                         o = t.parentNode,
                         r = e.parentNode,
                         s = [t],
                         a = [e];
                     if (!o || !r) return t === f ? -1 : e === f ? 1 : o ? -1 : r ? 1 : u ? I(u, t) - I(u, e) : 0;
                     if (o === r) return ut(t, e);
                     for (i = t; i = i.parentNode;) s.unshift(i);
                     for (i = e; i = i.parentNode;) a.unshift(i);
                     for (; s[n] === a[n];) n++;
                     return n ? ut(s[n], a[n]) : s[n] === x ? -1 : a[n] === x ? 1 : 0
                 }, f) : f
             }, rt.matches = function(t, e) {
                 return rt(t, null, null, e)
             }, rt.matchesSelector = function(t, e) {
                 if ((t.ownerDocument || t) !== f && p(t), e = e.replace(V, "='$1']"), i.matchesSelector && v && !$[e + " "] && (!m || !m.test(e)) && (!g || !g.test(e))) try {
                     var n = y.call(t, e);
                     if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                 } catch (t) {}
                 return rt(e, f, null, [t]).length > 0
             }, rt.contains = function(t, e) {
                 return (t.ownerDocument || t) !== f && p(t), b(t, e)
             }, rt.attr = function(t, e) {
                 (t.ownerDocument || t) !== f && p(t);
                 var o = n.attrHandle[e.toLowerCase()],
                     r = o && A.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !v) : void 0;
                 return void 0 !== r ? r : i.attributes || !v ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
             }, rt.escape = function(t) {
                 return (t + "").replace(et, it)
             }, rt.error = function(t) {
                 throw new Error("Syntax error, unrecognized expression: " + t)
             }, rt.uniqueSort = function(t) {
                 var e, n = [],
                     o = 0,
                     r = 0;
                 if (d = !i.detectDuplicates, u = !i.sortStable && t.slice(0), t.sort(E), d) {
                     for (; e = t[r++];) e === t[r] && (o = n.push(r));
                     for (; o--;) t.splice(n[o], 1)
                 }
                 return u = null, t
             }, o = rt.getText = function(t) {
                 var e, i = "",
                     n = 0,
                     r = t.nodeType;
                 if (r) {
                     if (1 === r || 9 === r || 11 === r) {
                         if ("string" == typeof t.textContent) return t.textContent;
                         for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                     } else if (3 === r || 4 === r) return t.nodeValue
                 } else
                     for (; e = t[n++];) i += o(e);
                 return i
             }, (n = rt.selectors = {
                 cacheLength: 50,
                 createPseudo: at,
                 match: X,
                 attrHandle: {},
                 find: {},
                 relative: {
                     ">": {
                         dir: "parentNode",
                         first: !0
                     },
                     " ": {
                         dir: "parentNode"
                     },
                     "+": {
                         dir: "previousSibling",
                         first: !0
                     },
                     "~": {
                         dir: "previousSibling"
                     }
                 },
                 preFilter: {
                     ATTR: function(t) {
                         return t[1] = t[1].replace(K, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(K, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                     },
                     CHILD: function(t) {
                         return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                     },
                     PSEUDO: function(t) {
                         var e, i = !t[6] && t[2];
                         return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Q.test(i) && (e = s(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                     }
                 },
                 filter: {
                     TAG: function(t) {
                         var e = t.replace(K, tt).toLowerCase();
                         return "*" === t ? function() {
                             return !0
                         } : function(t) {
                             return t.nodeName && t.nodeName.toLowerCase() === e
                         }
                     },
                     CLASS: function(t) {
                         var e = C[t + " "];
                         return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && C(t, function(t) {
                             return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                         })
                     },
                     ATTR: function(t, e, i) {
                         return function(n) {
                             var o = rt.attr(n, t);
                             return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.slice(-i.length) === i : "~=" === e ? (" " + o.replace(F, " ") + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"))
                         }
                     },
                     CHILD: function(t, e, i, n, o) {
                         var r = "nth" !== t.slice(0, 3),
                             s = "last" !== t.slice(-4),
                             a = "of-type" === e;
                         return 1 === n && 0 === o ? function(t) {
                             return !!t.parentNode
                         } : function(e, i, l) {
                             var c, u, d, p, f, h, v = r !== s ? "nextSibling" : "previousSibling",
                                 g = e.parentNode,
                                 m = a && e.nodeName.toLowerCase(),
                                 y = !l && !a,
                                 b = !1;
                             if (g) {
                                 if (r) {
                                     for (; v;) {
                                         for (p = e; p = p[v];)
                                             if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                         h = v = "only" === t && !h && "nextSibling"
                                     }
                                     return !0
                                 }
                                 if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                     for (b = (f = (c = (u = (d = (p = g)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === T && c[1]) && c[2], p = f && g.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop();)
                                         if (1 === p.nodeType && ++b && p === e) {
                                             u[t] = [T, f, b];
                                             break
                                         }
                                 } else if (y && (b = f = (c = (u = (d = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === T && c[1]), !1 === b)
                                     for (;
                                         (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [T, b]), p !== e)););
                                 return (b -= o) === n || b % n == 0 && b / n >= 0
                             }
                         }
                     },
                     PSEUDO: function(t, e) {
                         var i, o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                         return o[w] ? o(e) : o.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function(t, i) {
                             for (var n, r = o(t, e), s = r.length; s--;) t[n = I(t, r[s])] = !(i[n] = r[s])
                         }) : function(t) {
                             return o(t, 0, i)
                         }) : o
                     }
                 },
                 pseudos: {
                     not: at(function(t) {
                         var e = [],
                             i = [],
                             n = a(t.replace(W, "$1"));
                         return n[w] ? at(function(t, e, i, o) {
                             for (var r, s = n(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                         }) : function(t, o, r) {
                             return e[0] = t, n(e, null, r, i), e[0] = null, !i.pop()
                         }
                     }),
                     has: at(function(t) {
                         return function(e) {
                             return rt(t, e).length > 0
                         }
                     }),
                     contains: at(function(t) {
                         return t = t.replace(K, tt),
                             function(e) {
                                 return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                             }
                     }),
                     lang: at(function(t) {
                         return B.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(K, tt).toLowerCase(),
                             function(e) {
                                 var i;
                                 do {
                                     if (i = v ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                 } while ((e = e.parentNode) && 1 === e.nodeType);
                                 return !1
                             }
                     }),
                     target: function(e) {
                         var i = t.location && t.location.hash;
                         return i && i.slice(1) === e.id
                     },
                     root: function(t) {
                         return t === h
                     },
                     focus: function(t) {
                         return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                     },
                     enabled: ft(!1),
                     disabled: ft(!0),
                     checked: function(t) {
                         var e = t.nodeName.toLowerCase();
                         return "input" === e && !!t.checked || "option" === e && !!t.selected
                     },
                     selected: function(t) {
                         return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                     },
                     empty: function(t) {
                         for (t = t.firstChild; t; t = t.nextSibling)
                             if (t.nodeType < 6) return !1;
                         return !0
                     },
                     parent: function(t) {
                         return !n.pseudos.empty(t)
                     },
                     header: function(t) {
                         return Y.test(t.nodeName)
                     },
                     input: function(t) {
                         return U.test(t.nodeName)
                     },
                     button: function(t) {
                         var e = t.nodeName.toLowerCase();
                         return "input" === e && "button" === t.type || "button" === e
                     },
                     text: function(t) {
                         var e;
                         return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                     },
                     first: ht(function() {
                         return [0]
                     }),
                     last: ht(function(t, e) {
                         return [e - 1]
                     }),
                     eq: ht(function(t, e, i) {
                         return [i < 0 ? i + e : i]
                     }),
                     even: ht(function(t, e) {
                         for (var i = 0; i < e; i += 2) t.push(i);
                         return t
                     }),
                     odd: ht(function(t, e) {
                         for (var i = 1; i < e; i += 2) t.push(i);
                         return t
                     }),
                     lt: ht(function(t, e, i) {
                         for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                         return t
                     }),
                     gt: ht(function(t, e, i) {
                         for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                         return t
                     })
                 }
             }).pseudos.nth = n.pseudos.eq, {
                 radio: !0,
                 checkbox: !0,
                 file: !0,
                 password: !0,
                 image: !0
             }) n.pseudos[e] = dt(e);
         for (e in {
                 submit: !0,
                 reset: !0
             }) n.pseudos[e] = pt(e);

         function gt() {}

         function mt(t) {
             for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
             return n
         }

         function yt(t, e, i) {
             var n = e.dir,
                 o = e.next,
                 r = o || n,
                 s = i && "parentNode" === r,
                 a = k++;
             return e.first ? function(e, i, o) {
                 for (; e = e[n];)
                     if (1 === e.nodeType || s) return t(e, i, o);
                 return !1
             } : function(e, i, l) {
                 var c, u, d, p = [T, a];
                 if (l) {
                     for (; e = e[n];)
                         if ((1 === e.nodeType || s) && t(e, i, l)) return !0
                 } else
                     for (; e = e[n];)
                         if (1 === e.nodeType || s)
                             if (u = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[n] || e;
                             else {
                                 if ((c = u[r]) && c[0] === T && c[1] === a) return p[2] = c[2];
                                 if (u[r] = p, p[2] = t(e, i, l)) return !0
                             } return !1
             }
         }

         function bt(t) {
             return t.length > 1 ? function(e, i, n) {
                 for (var o = t.length; o--;)
                     if (!t[o](e, i, n)) return !1;
                 return !0
             } : t[0]
         }

         function wt(t, e, i, n, o) {
             for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), c && e.push(a)));
             return s
         }

         function xt(t, e, i, n, o, r) {
             return n && !n[w] && (n = xt(n)), o && !o[w] && (o = xt(o, r)), at(function(r, s, a, l) {
                 var c, u, d, p = [],
                     f = [],
                     h = s.length,
                     v = r || function(t, e, i) {
                         for (var n = 0, o = e.length; n < o; n++) rt(t, e[n], i);
                         return i
                     }(e || "*", a.nodeType ? [a] : a, []),
                     g = !t || !r && e ? v : wt(v, p, t, a, l),
                     m = i ? o || (r ? t : h || n) ? [] : s : g;
                 if (i && i(g, m, a, l), n)
                     for (c = wt(m, f), n(c, [], a, l), u = c.length; u--;)(d = c[u]) && (m[f[u]] = !(g[f[u]] = d));
                 if (r) {
                     if (o || t) {
                         if (o) {
                             for (c = [], u = m.length; u--;)(d = m[u]) && c.push(g[u] = d);
                             o(null, m = [], c, l)
                         }
                         for (u = m.length; u--;)(d = m[u]) && (c = o ? I(r, d) : p[u]) > -1 && (r[c] = !(s[c] = d))
                     }
                 } else m = wt(m === s ? m.splice(h, m.length) : m), o ? o(null, s, m, l) : j.apply(s, m)
             })
         }

         function Tt(t) {
             for (var e, i, o, r = t.length, s = n.relative[t[0].type], a = s || n.relative[" "], l = s ? 1 : 0, u = yt(function(t) {
                     return t === e
                 }, a, !0), d = yt(function(t) {
                     return I(e, t) > -1
                 }, a, !0), p = [function(t, i, n) {
                     var o = !s && (n || i !== c) || ((e = i).nodeType ? u(t, i, n) : d(t, i, n));
                     return e = null, o
                 }]; l < r; l++)
                 if (i = n.relative[t[l].type]) p = [yt(bt(p), i)];
                 else {
                     if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                         for (o = ++l; o < r && !n.relative[t[o].type]; o++);
                         return xt(l > 1 && bt(p), l > 1 && mt(t.slice(0, l - 1).concat({
                             value: " " === t[l - 2].type ? "*" : ""
                         })).replace(W, "$1"), i, l < o && Tt(t.slice(l, o)), o < r && Tt(t = t.slice(o)), o < r && mt(t))
                     }
                     p.push(i)
                 } return bt(p)
         }
         return gt.prototype = n.filters = n.pseudos, n.setFilters = new gt, s = rt.tokenize = function(t, e) {
             var i, o, r, s, a, l, c, u = S[t + " "];
             if (u) return e ? 0 : u.slice(0);
             for (a = t, l = [], c = n.preFilter; a;) {
                 for (s in i && !(o = z.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), i = !1, (o = _.exec(a)) && (i = o.shift(), r.push({
                         value: i,
                         type: o[0].replace(W, " ")
                     }), a = a.slice(i.length)), n.filter) !(o = X[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), r.push({
                     value: i,
                     type: s,
                     matches: o
                 }), a = a.slice(i.length));
                 if (!i) break
             }
             return e ? a.length : a ? rt.error(t) : S(t, l).slice(0)
         }, a = rt.compile = function(t, e) {
             var i, o = [],
                 r = [],
                 a = $[t + " "];
             if (!a) {
                 for (e || (e = s(t)), i = e.length; i--;)(a = Tt(e[i]))[w] ? o.push(a) : r.push(a);
                 (a = $(t, function(t, e) {
                     var i = e.length > 0,
                         o = t.length > 0,
                         r = function(r, s, a, l, u) {
                             var d, h, g, m = 0,
                                 y = "0",
                                 b = r && [],
                                 w = [],
                                 x = c,
                                 k = r || o && n.find.TAG("*", u),
                                 C = T += null == x ? 1 : Math.random() || .1,
                                 S = k.length;
                             for (u && (c = s === f || s || u); y !== S && null != (d = k[y]); y++) {
                                 if (o && d) {
                                     for (h = 0, s || d.ownerDocument === f || (p(d), a = !v); g = t[h++];)
                                         if (g(d, s || f, a)) {
                                             l.push(d);
                                             break
                                         } u && (T = C)
                                 }
                                 i && ((d = !g && d) && m--, r && b.push(d))
                             }
                             if (m += y, i && y !== m) {
                                 for (h = 0; g = e[h++];) g(b, w, s, a);
                                 if (r) {
                                     if (m > 0)
                                         for (; y--;) b[y] || w[y] || (w[y] = P.call(l));
                                     w = wt(w)
                                 }
                                 j.apply(l, w), u && !r && w.length > 0 && m + e.length > 1 && rt.uniqueSort(l)
                             }
                             return u && (T = C, c = x), b
                         };
                     return i ? at(r) : r
                 }(r, o))).selector = t
             }
             return a
         }, l = rt.select = function(t, e, i, o) {
             var r, l, c, u, d, p = "function" == typeof t && t,
                 f = !o && s(t = p.selector || t);
             if (i = i || [], 1 === f.length) {
                 if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && v && n.relative[l[1].type]) {
                     if (!(e = (n.find.ID(c.matches[0].replace(K, tt), e) || [])[0])) return i;
                     p && (e = e.parentNode), t = t.slice(l.shift().value.length)
                 }
                 for (r = X.needsContext.test(t) ? 0 : l.length; r-- && (c = l[r], !n.relative[u = c.type]);)
                     if ((d = n.find[u]) && (o = d(c.matches[0].replace(K, tt), J.test(l[0].type) && vt(e.parentNode) || e))) {
                         if (l.splice(r, 1), !(t = o.length && mt(l))) return j.apply(i, o), i;
                         break
                     }
             }
             return (p || a(t, f))(o, e, !v, i, !e || J.test(t) && vt(e.parentNode) || e), i
         }, i.sortStable = w.split("").sort(E).join("") === w, i.detectDuplicates = !!d, p(), i.sortDetached = lt(function(t) {
             return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
         }), lt(function(t) {
             return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
         }) || ct("type|href|height|width", function(t, e, i) {
             if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
         }), i.attributes && lt(function(t) {
             return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
         }) || ct("value", function(t, e, i) {
             if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
         }), lt(function(t) {
             return null == t.getAttribute("disabled")
         }) || ct(q, function(t, e, i) {
             var n;
             if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
         }), rt
     }(t);
     g.find = T, g.expr = T.selectors, g.expr[":"] = g.expr.pseudos, g.uniqueSort = g.unique = T.uniqueSort, g.text = T.getText, g.isXMLDoc = T.isXML, g.contains = T.contains, g.escapeSelector = T.escape;
     var k = function(t, e, i) {
             for (var n = [], o = void 0 !== i;
                 (t = t[e]) && 9 !== t.nodeType;)
                 if (1 === t.nodeType) {
                     if (o && g(t).is(i)) break;
                     n.push(t)
                 } return n
         },
         C = function(t, e) {
             for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
             return i
         },
         S = g.expr.match.needsContext;

     function $(t, e) {
         return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
     }
     var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
         A = /^.[^:#\[\.,]*$/;

     function O(t, e, i) {
         return g.isFunction(e) ? g.grep(t, function(t, n) {
             return !!e.call(t, n, t) !== i
         }) : e.nodeType ? g.grep(t, function(t) {
             return t === e !== i
         }) : "string" != typeof e ? g.grep(t, function(t) {
             return l.call(e, t) > -1 !== i
         }) : A.test(e) ? g.filter(e, t, i) : (e = g.filter(e, t), g.grep(t, function(t) {
             return l.call(e, t) > -1 !== i && 1 === t.nodeType
         }))
     }
     g.filter = function(t, e, i) {
         var n = e[0];
         return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? g.find.matchesSelector(n, t) ? [n] : [] : g.find.matches(t, g.grep(e, function(t) {
             return 1 === t.nodeType
         }))
     }, g.fn.extend({
         find: function(t) {
             var e, i, n = this.length,
                 o = this;
             if ("string" != typeof t) return this.pushStack(g(t).filter(function() {
                 for (e = 0; e < n; e++)
                     if (g.contains(o[e], this)) return !0
             }));
             for (i = this.pushStack([]), e = 0; e < n; e++) g.find(t, o[e], i);
             return n > 1 ? g.uniqueSort(i) : i
         },
         filter: function(t) {
             return this.pushStack(O(this, t || [], !1))
         },
         not: function(t) {
             return this.pushStack(O(this, t || [], !0))
         },
         is: function(t) {
             return !!O(this, "string" == typeof t && S.test(t) ? g(t) : t || [], !1).length
         }
     });
     var P, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
     (g.fn.init = function(t, e, i) {
         var o, r;
         if (!t) return this;
         if (i = i || P, "string" == typeof t) {
             if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : D.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
             if (o[1]) {
                 if (e = e instanceof g ? e[0] : e, g.merge(this, g.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), E.test(o[1]) && g.isPlainObject(e))
                     for (o in e) g.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
                 return this
             }
             return (r = n.getElementById(o[2])) && (this[0] = r, this.length = 1), this
         }
         return t.nodeType ? (this[0] = t, this.length = 1, this) : g.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(g) : g.makeArray(t, this)
     }).prototype = g.fn, P = g(n);
     var j = /^(?:parents|prev(?:Until|All))/,
         N = {
             children: !0,
             contents: !0,
             next: !0,
             prev: !0
         };

     function I(t, e) {
         for (;
             (t = t[e]) && 1 !== t.nodeType;);
         return t
     }
     g.fn.extend({
         has: function(t) {
             var e = g(t, this),
                 i = e.length;
             return this.filter(function() {
                 for (var t = 0; t < i; t++)
                     if (g.contains(this, e[t])) return !0
             })
         },
         closest: function(t, e) {
             var i, n = 0,
                 o = this.length,
                 r = [],
                 s = "string" != typeof t && g(t);
             if (!S.test(t))
                 for (; n < o; n++)
                     for (i = this[n]; i && i !== e; i = i.parentNode)
                         if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && g.find.matchesSelector(i, t))) {
                             r.push(i);
                             break
                         } return this.pushStack(r.length > 1 ? g.uniqueSort(r) : r)
         },
         index: function(t) {
             return t ? "string" == typeof t ? l.call(g(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
         },
         add: function(t, e) {
             return this.pushStack(g.uniqueSort(g.merge(this.get(), g(t, e))))
         },
         addBack: function(t) {
             return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
         }
     }), g.each({
         parent: function(t) {
             var e = t.parentNode;
             return e && 11 !== e.nodeType ? e : null
         },
         parents: function(t) {
             return k(t, "parentNode")
         },
         parentsUntil: function(t, e, i) {
             return k(t, "parentNode", i)
         },
         next: function(t) {
             return I(t, "nextSibling")
         },
         prev: function(t) {
             return I(t, "previousSibling")
         },
         nextAll: function(t) {
             return k(t, "nextSibling")
         },
         prevAll: function(t) {
             return k(t, "previousSibling")
         },
         nextUntil: function(t, e, i) {
             return k(t, "nextSibling", i)
         },
         prevUntil: function(t, e, i) {
             return k(t, "previousSibling", i)
         },
         siblings: function(t) {
             return C((t.parentNode || {}).firstChild, t)
         },
         children: function(t) {
             return C(t.firstChild)
         },
         contents: function(t) {
             return $(t, "iframe") ? t.contentDocument : ($(t, "template") && (t = t.content || t), g.merge([], t.childNodes))
         }
     }, function(t, e) {
         g.fn[t] = function(i, n) {
             var o = g.map(this, e, i);
             return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = g.filter(n, o)), this.length > 1 && (N[t] || g.uniqueSort(o), j.test(t) && o.reverse()), this.pushStack(o)
         }
     });
     var q = /[^\x20\t\r\n\f]+/g;

     function L(t) {
         return t
     }

     function M(t) {
         throw t
     }

     function H(t, e, i, n) {
         var o;
         try {
             t && g.isFunction(o = t.promise) ? o.call(t).done(e).fail(i) : t && g.isFunction(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
         } catch (t) {
             i.apply(void 0, [t])
         }
     }
     g.Callbacks = function(t) {
         var e, i;
         t = "string" == typeof t ? (e = t, i = {}, g.each(e.match(q) || [], function(t, e) {
             i[e] = !0
         }), i) : g.extend({}, t);
         var n, o, r, s, a = [],
             l = [],
             c = -1,
             u = function() {
                 for (s = s || t.once, r = n = !0; l.length; c = -1)
                     for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && t.stopOnFalse && (c = a.length, o = !1);
                 t.memory || (o = !1), n = !1, s && (a = o ? [] : "")
             },
             d = {
                 add: function() {
                     return a && (o && !n && (c = a.length - 1, l.push(o)), function e(i) {
                         g.each(i, function(i, n) {
                             g.isFunction(n) ? t.unique && d.has(n) || a.push(n) : n && n.length && "string" !== g.type(n) && e(n)
                         })
                     }(arguments), o && !n && u()), this
                 },
                 remove: function() {
                     return g.each(arguments, function(t, e) {
                         for (var i;
                             (i = g.inArray(e, a, i)) > -1;) a.splice(i, 1), i <= c && c--
                     }), this
                 },
                 has: function(t) {
                     return t ? g.inArray(t, a) > -1 : a.length > 0
                 },
                 empty: function() {
                     return a && (a = []), this
                 },
                 disable: function() {
                     return s = l = [], a = o = "", this
                 },
                 disabled: function() {
                     return !a
                 },
                 lock: function() {
                     return s = l = [], o || n || (a = o = ""), this
                 },
                 locked: function() {
                     return !!s
                 },
                 fireWith: function(t, e) {
                     return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), n || u()), this
                 },
                 fire: function() {
                     return d.fireWith(this, arguments), this
                 },
                 fired: function() {
                     return !!r
                 }
             };
         return d
     }, g.extend({
         Deferred: function(e) {
             var i = [
                     ["notify", "progress", g.Callbacks("memory"), g.Callbacks("memory"), 2],
                     ["resolve", "done", g.Callbacks("once memory"), g.Callbacks("once memory"), 0, "resolved"],
                     ["reject", "fail", g.Callbacks("once memory"), g.Callbacks("once memory"), 1, "rejected"]
                 ],
                 n = "pending",
                 o = {
                     state: function() {
                         return n
                     },
                     always: function() {
                         return r.done(arguments).fail(arguments), this
                     },
                     catch: function(t) {
                         return o.then(null, t)
                     },
                     pipe: function() {
                         var t = arguments;
                         return g.Deferred(function(e) {
                             g.each(i, function(i, n) {
                                 var o = g.isFunction(t[n[4]]) && t[n[4]];
                                 r[n[1]](function() {
                                     var t = o && o.apply(this, arguments);
                                     t && g.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, o ? [t] : arguments)
                                 })
                             }), t = null
                         }).promise()
                     },
                     then: function(e, n, o) {
                         var r = 0;

                         function s(e, i, n, o) {
                             return function() {
                                 var a = this,
                                     l = arguments,
                                     c = function() {
                                         var t, c;
                                         if (!(e < r)) {
                                             if ((t = n.apply(a, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                             c = t && ("object" == typeof t || "function" == typeof t) && t.then, g.isFunction(c) ? o ? c.call(t, s(r, i, L, o), s(r, i, M, o)) : (r++, c.call(t, s(r, i, L, o), s(r, i, M, o), s(r, i, L, i.notifyWith))) : (n !== L && (a = void 0, l = [t]), (o || i.resolveWith)(a, l))
                                         }
                                     },
                                     u = o ? c : function() {
                                         try {
                                             c()
                                         } catch (t) {
                                             g.Deferred.exceptionHook && g.Deferred.exceptionHook(t, u.stackTrace), e + 1 >= r && (n !== M && (a = void 0, l = [t]), i.rejectWith(a, l))
                                         }
                                     };
                                 e ? u() : (g.Deferred.getStackHook && (u.stackTrace = g.Deferred.getStackHook()), t.setTimeout(u))
                             }
                         }
                         return g.Deferred(function(t) {
                             i[0][3].add(s(0, t, g.isFunction(o) ? o : L, t.notifyWith)), i[1][3].add(s(0, t, g.isFunction(e) ? e : L)), i[2][3].add(s(0, t, g.isFunction(n) ? n : M))
                         }).promise()
                     },
                     promise: function(t) {
                         return null != t ? g.extend(t, o) : o
                     }
                 },
                 r = {};
             return g.each(i, function(t, e) {
                 var s = e[2],
                     a = e[5];
                 o[e[1]] = s.add, a && s.add(function() {
                     n = a
                 }, i[3 - t][2].disable, i[0][2].lock), s.add(e[3].fire), r[e[0]] = function() {
                     return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                 }, r[e[0] + "With"] = s.fireWith
             }), o.promise(r), e && e.call(r, r), r
         },
         when: function(t) {
             var e = arguments.length,
                 i = e,
                 n = Array(i),
                 o = r.call(arguments),
                 s = g.Deferred(),
                 a = function(t) {
                     return function(i) {
                         n[t] = this, o[t] = arguments.length > 1 ? r.call(arguments) : i, --e || s.resolveWith(n, o)
                     }
                 };
             if (e <= 1 && (H(t, s.done(a(i)).resolve, s.reject, !e), "pending" === s.state() || g.isFunction(o[i] && o[i].then))) return s.then();
             for (; i--;) H(o[i], a(i), s.reject);
             return s.promise()
         }
     });
     var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
     g.Deferred.exceptionHook = function(e, i) {
         t.console && t.console.warn && e && R.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
     }, g.readyException = function(e) {
         t.setTimeout(function() {
             throw e
         })
     };
     var F = g.Deferred();

     function W() {
         n.removeEventListener("DOMContentLoaded", W), t.removeEventListener("load", W), g.ready()
     }
     g.fn.ready = function(t) {
         return F.then(t).catch(function(t) {
             g.readyException(t)
         }), this
     }, g.extend({
         isReady: !1,
         readyWait: 1,
         ready: function(t) {
             (!0 === t ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== t && --g.readyWait > 0 || F.resolveWith(n, [g]))
         }
     }), g.ready.then = F.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(g.ready) : (n.addEventListener("DOMContentLoaded", W), t.addEventListener("load", W));
     var z = function(t, e, i, n, o, r, s) {
             var a = 0,
                 l = t.length,
                 c = null == i;
             if ("object" === g.type(i))
                 for (a in o = !0, i) z(t, e, a, i[a], !0, r, s);
             else if (void 0 !== n && (o = !0, g.isFunction(n) || (s = !0), c && (s ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                     return c.call(g(t), i)
                 })), e))
                 for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
             return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
         },
         _ = function(t) {
             return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
         };

     function V() {
         this.expando = g.expando + V.uid++
     }
     V.uid = 1, V.prototype = {
         cache: function(t) {
             var e = t[this.expando];
             return e || (e = {}, _(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                 value: e,
                 configurable: !0
             }))), e
         },
         set: function(t, e, i) {
             var n, o = this.cache(t);
             if ("string" == typeof e) o[g.camelCase(e)] = i;
             else
                 for (n in e) o[g.camelCase(n)] = e[n];
             return o
         },
         get: function(t, e) {
             return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][g.camelCase(e)]
         },
         access: function(t, e, i) {
             return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
         },
         remove: function(t, e) {
             var i, n = t[this.expando];
             if (void 0 !== n) {
                 if (void 0 !== e) {
                     Array.isArray(e) ? e = e.map(g.camelCase) : e = (e = g.camelCase(e)) in n ? [e] : e.match(q) || [], i = e.length;
                     for (; i--;) delete n[e[i]]
                 }(void 0 === e || g.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
             }
         },
         hasData: function(t) {
             var e = t[this.expando];
             return void 0 !== e && !g.isEmptyObject(e)
         }
     };
     var Q = new V,
         B = new V,
         X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
         U = /[A-Z]/g;

     function Y(t, e, i) {
         var n, o;
         if (void 0 === i && 1 === t.nodeType)
             if (n = "data-" + e.replace(U, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                 try {
                     i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : X.test(o) ? JSON.parse(o) : o)
                 } catch (t) {}
                 B.set(t, e, i)
             } else i = void 0;
         return i
     }
     g.extend({
         hasData: function(t) {
             return B.hasData(t) || Q.hasData(t)
         },
         data: function(t, e, i) {
             return B.access(t, e, i)
         },
         removeData: function(t, e) {
             B.remove(t, e)
         },
         _data: function(t, e, i) {
             return Q.access(t, e, i)
         },
         _removeData: function(t, e) {
             Q.remove(t, e)
         }
     }), g.fn.extend({
         data: function(t, e) {
             var i, n, o, r = this[0],
                 s = r && r.attributes;
             if (void 0 === t) {
                 if (this.length && (o = B.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
                     for (i = s.length; i--;) s[i] && (0 === (n = s[i].name).indexOf("data-") && (n = g.camelCase(n.slice(5)), Y(r, n, o[n])));
                     Q.set(r, "hasDataAttrs", !0)
                 }
                 return o
             }
             return "object" == typeof t ? this.each(function() {
                 B.set(this, t)
             }) : z(this, function(e) {
                 var i;
                 if (r && void 0 === e) {
                     if (void 0 !== (i = B.get(r, t))) return i;
                     if (void 0 !== (i = Y(r, t))) return i
                 } else this.each(function() {
                     B.set(this, t, e)
                 })
             }, null, e, arguments.length > 1, null, !0)
         },
         removeData: function(t) {
             return this.each(function() {
                 B.remove(this, t)
             })
         }
     }), g.extend({
         queue: function(t, e, i) {
             var n;
             if (t) return e = (e || "fx") + "queue", n = Q.get(t, e), i && (!n || Array.isArray(i) ? n = Q.access(t, e, g.makeArray(i)) : n.push(i)), n || []
         },
         dequeue: function(t, e) {
             e = e || "fx";
             var i = g.queue(t, e),
                 n = i.length,
                 o = i.shift(),
                 r = g._queueHooks(t, e);
             "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, function() {
                 g.dequeue(t, e)
             }, r)), !n && r && r.empty.fire()
         },
         _queueHooks: function(t, e) {
             var i = e + "queueHooks";
             return Q.get(t, i) || Q.access(t, i, {
                 empty: g.Callbacks("once memory").add(function() {
                     Q.remove(t, [e + "queue", i])
                 })
             })
         }
     }), g.fn.extend({
         queue: function(t, e) {
             var i = 2;
             return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? g.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                 var i = g.queue(this, t, e);
                 g._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && g.dequeue(this, t)
             })
         },
         dequeue: function(t) {
             return this.each(function() {
                 g.dequeue(this, t)
             })
         },
         clearQueue: function(t) {
             return this.queue(t || "fx", [])
         },
         promise: function(t, e) {
             var i, n = 1,
                 o = g.Deferred(),
                 r = this,
                 s = this.length,
                 a = function() {
                     --n || o.resolveWith(r, [r])
                 };
             for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(i = Q.get(r[s], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
             return a(), o.promise(e)
         }
     });
     var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
         Z = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
         J = ["Top", "Right", "Bottom", "Left"],
         K = function(t, e) {
             return "none" === (t = e || t).style.display || "" === t.style.display && g.contains(t.ownerDocument, t) && "none" === g.css(t, "display")
         },
         tt = function(t, e, i, n) {
             var o, r, s = {};
             for (r in e) s[r] = t.style[r], t.style[r] = e[r];
             for (r in o = i.apply(t, n || []), e) t.style[r] = s[r];
             return o
         };

     function et(t, e, i, n) {
         var o, r = 1,
             s = 20,
             a = n ? function() {
                 return n.cur()
             } : function() {
                 return g.css(t, e, "")
             },
             l = a(),
             c = i && i[3] || (g.cssNumber[e] ? "" : "px"),
             u = (g.cssNumber[e] || "px" !== c && +l) && Z.exec(g.css(t, e));
         if (u && u[3] !== c) {
             c = c || u[3], i = i || [], u = +l || 1;
             do {
                 u /= r = r || ".5", g.style(t, e, u + c)
             } while (r !== (r = a() / l) && 1 !== r && --s)
         }
         return i && (u = +u || +l || 0, o = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = o)), o
     }
     var it = {};

     function nt(t) {
         var e, i = t.ownerDocument,
             n = t.nodeName,
             o = it[n];
         return o || (e = i.body.appendChild(i.createElement(n)), o = g.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), it[n] = o, o)
     }

     function ot(t, e) {
         for (var i, n, o = [], r = 0, s = t.length; r < s; r++)(n = t[r]).style && (i = n.style.display, e ? ("none" === i && (o[r] = Q.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && K(n) && (o[r] = nt(n))) : "none" !== i && (o[r] = "none", Q.set(n, "display", i)));
         for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
         return t
     }
     g.fn.extend({
         show: function() {
             return ot(this, !0)
         },
         hide: function() {
             return ot(this)
         },
         toggle: function(t) {
             return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                 K(this) ? g(this).show() : g(this).hide()
             })
         }
     });
     var rt = /^(?:checkbox|radio)$/i,
         st = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
         at = /^$|\/(?:java|ecma)script/i,
         lt = {
             option: [1, "<select multiple='multiple'>", "</select>"],
             thead: [1, "<table>", "</table>"],
             col: [2, "<table><colgroup>", "</colgroup></table>"],
             tr: [2, "<table><tbody>", "</tbody></table>"],
             td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
             _default: [0, "", ""]
         };

     function ct(t, e) {
         var i;
         return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && $(t, e) ? g.merge([t], i) : i
     }

     function ut(t, e) {
         for (var i = 0, n = t.length; i < n; i++) Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"))
     }
     lt.optgroup = lt.option, lt.tbody = lt.tfoot = lt.colgroup = lt.caption = lt.thead, lt.th = lt.td;
     var dt, pt, ft = /<|&#?\w+;/;

     function ht(t, e, i, n, o) {
         for (var r, s, a, l, c, u, d = e.createDocumentFragment(), p = [], f = 0, h = t.length; f < h; f++)
             if ((r = t[f]) || 0 === r)
                 if ("object" === g.type(r)) g.merge(p, r.nodeType ? [r] : r);
                 else if (ft.test(r)) {
             for (s = s || d.appendChild(e.createElement("div")), a = (st.exec(r) || ["", ""])[1].toLowerCase(), l = lt[a] || lt._default, s.innerHTML = l[1] + g.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
             g.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
         } else p.push(e.createTextNode(r));
         for (d.textContent = "", f = 0; r = p[f++];)
             if (n && g.inArray(r, n) > -1) o && o.push(r);
             else if (c = g.contains(r.ownerDocument, r), s = ct(d.appendChild(r), "script"), c && ut(s), i)
             for (u = 0; r = s[u++];) at.test(r.type || "") && i.push(r);
         return d
     }
     dt = n.createDocumentFragment().appendChild(n.createElement("div")), (pt = n.createElement("input")).setAttribute("type", "radio"), pt.setAttribute("checked", "checked"), pt.setAttribute("name", "t"), dt.appendChild(pt), h.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue;
     var vt = n.documentElement,
         gt = /^key/,
         mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
         yt = /^([^.]*)(?:\.(.+)|)/;

     function bt() {
         return !0
     }

     function wt() {
         return !1
     }

     function xt() {
         try {
             return n.activeElement
         } catch (t) {}
     }

     function Tt(t, e, i, n, o, r) {
         var s, a;
         if ("object" == typeof e) {
             for (a in "string" != typeof i && (n = n || i, i = void 0), e) Tt(t, a, i, n, e[a], r);
             return t
         }
         if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = wt;
         else if (!o) return t;
         return 1 === r && (s = o, (o = function(t) {
             return g().off(t), s.apply(this, arguments)
         }).guid = s.guid || (s.guid = g.guid++)), t.each(function() {
             g.event.add(this, e, o, n, i)
         })
     }
     g.event = {
         global: {},
         add: function(t, e, i, n, o) {
             var r, s, a, l, c, u, d, p, f, h, v, m = Q.get(t);
             if (m)
                 for (i.handler && (i = (r = i).handler, o = r.selector), o && g.find.matchesSelector(vt, o), i.guid || (i.guid = g.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                         return void 0 !== g && g.event.triggered !== e.type ? g.event.dispatch.apply(t, arguments) : void 0
                     }), c = (e = (e || "").match(q) || [""]).length; c--;) f = v = (a = yt.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = g.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = g.event.special[f] || {}, u = g.extend({
                     type: f,
                     origType: v,
                     data: n,
                     handler: i,
                     guid: i.guid,
                     selector: o,
                     needsContext: o && g.expr.match.needsContext.test(o),
                     namespace: h.join(".")
                 }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, h, s) || t.addEventListener && t.addEventListener(f, s)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), g.event.global[f] = !0)
         },
         remove: function(t, e, i, n, o) {
             var r, s, a, l, c, u, d, p, f, h, v, m = Q.hasData(t) && Q.get(t);
             if (m && (l = m.events)) {
                 for (c = (e = (e || "").match(q) || [""]).length; c--;)
                     if (f = v = (a = yt.exec(e[c]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                         for (d = g.event.special[f] || {}, p = l[f = (n ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && v !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(t, u));
                         s && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, m.handle) || g.removeEvent(t, f, m.handle), delete l[f])
                     } else
                         for (f in l) g.event.remove(t, f + e[c], i, n, !0);
                 g.isEmptyObject(l) && Q.remove(t, "handle events")
             }
         },
         dispatch: function(t) {
             var e, i, n, o, r, s, a = g.event.fix(t),
                 l = new Array(arguments.length),
                 c = (Q.get(this, "events") || {})[a.type] || [],
                 u = g.event.special[a.type] || {};
             for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
             if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                 for (s = g.event.handlers.call(this, a, c), e = 0;
                     (o = s[e++]) && !a.isPropagationStopped();)
                     for (a.currentTarget = o.elem, i = 0;
                         (r = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (n = ((g.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                 return u.postDispatch && u.postDispatch.call(this, a), a.result
             }
         },
         handlers: function(t, e) {
             var i, n, o, r, s, a = [],
                 l = e.delegateCount,
                 c = t.target;
             if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                 for (; c !== this; c = c.parentNode || this)
                     if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                         for (r = [], s = {}, i = 0; i < l; i++) void 0 === s[o = (n = e[i]).selector + " "] && (s[o] = n.needsContext ? g(o, this).index(c) > -1 : g.find(o, this, null, [c]).length), s[o] && r.push(n);
                         r.length && a.push({
                             elem: c,
                             handlers: r
                         })
                     } return c = this, l < e.length && a.push({
                 elem: c,
                 handlers: e.slice(l)
             }), a
         },
         addProp: function(t, e) {
             Object.defineProperty(g.Event.prototype, t, {
                 enumerable: !0,
                 configurable: !0,
                 get: g.isFunction(e) ? function() {
                     if (this.originalEvent) return e(this.originalEvent)
                 } : function() {
                     if (this.originalEvent) return this.originalEvent[t]
                 },
                 set: function(e) {
                     Object.defineProperty(this, t, {
                         enumerable: !0,
                         configurable: !0,
                         writable: !0,
                         value: e
                     })
                 }
             })
         },
         fix: function(t) {
             return t[g.expando] ? t : new g.Event(t)
         },
         special: {
             load: {
                 noBubble: !0
             },
             focus: {
                 trigger: function() {
                     if (this !== xt() && this.focus) return this.focus(), !1
                 },
                 delegateType: "focusin"
             },
             blur: {
                 trigger: function() {
                     if (this === xt() && this.blur) return this.blur(), !1
                 },
                 delegateType: "focusout"
             },
             click: {
                 trigger: function() {
                     if (rt.test(this.type) && this.click && $(this, "input")) return this.click(), !1
                 },
                 _default: function(t) {
                     return $(t.target, "a")
                 }
             },
             beforeunload: {
                 postDispatch: function(t) {
                     void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                 }
             }
         }
     }, g.removeEvent = function(t, e, i) {
         t.removeEventListener && t.removeEventListener(e, i)
     }, g.Event = function(t, e) {
         return this instanceof g.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? bt : wt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && g.extend(this, e), this.timeStamp = t && t.timeStamp || g.now(), void(this[g.expando] = !0)) : new g.Event(t, e)
     }, g.Event.prototype = {
         constructor: g.Event,
         isDefaultPrevented: wt,
         isPropagationStopped: wt,
         isImmediatePropagationStopped: wt,
         isSimulated: !1,
         preventDefault: function() {
             var t = this.originalEvent;
             this.isDefaultPrevented = bt, t && !this.isSimulated && t.preventDefault()
         },
         stopPropagation: function() {
             var t = this.originalEvent;
             this.isPropagationStopped = bt, t && !this.isSimulated && t.stopPropagation()
         },
         stopImmediatePropagation: function() {
             var t = this.originalEvent;
             this.isImmediatePropagationStopped = bt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
         }
     }, g.each({
         altKey: !0,
         bubbles: !0,
         cancelable: !0,
         changedTouches: !0,
         ctrlKey: !0,
         detail: !0,
         eventPhase: !0,
         metaKey: !0,
         pageX: !0,
         pageY: !0,
         shiftKey: !0,
         view: !0,
         char: !0,
         charCode: !0,
         key: !0,
         keyCode: !0,
         button: !0,
         buttons: !0,
         clientX: !0,
         clientY: !0,
         offsetX: !0,
         offsetY: !0,
         pointerId: !0,
         pointerType: !0,
         screenX: !0,
         screenY: !0,
         targetTouches: !0,
         toElement: !0,
         touches: !0,
         which: function(t) {
             var e = t.button;
             return null == t.which && gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && mt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
         }
     }, g.event.addProp), g.each({
         mouseenter: "mouseover",
         mouseleave: "mouseout",
         pointerenter: "pointerover",
         pointerleave: "pointerout"
     }, function(t, e) {
         g.event.special[t] = {
             delegateType: e,
             bindType: e,
             handle: function(t) {
                 var i, n = t.relatedTarget,
                     o = t.handleObj;
                 return n && (n === this || g.contains(this, n)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
             }
         }
     }), g.fn.extend({
         on: function(t, e, i, n) {
             return Tt(this, t, e, i, n)
         },
         one: function(t, e, i, n) {
             return Tt(this, t, e, i, n, 1)
         },
         off: function(t, e, i) {
             var n, o;
             if (t && t.preventDefault && t.handleObj) return n = t.handleObj, g(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
             if ("object" == typeof t) {
                 for (o in t) this.off(o, e, t[o]);
                 return this
             }
             return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = wt), this.each(function() {
                 g.event.remove(this, t, i, e)
             })
         }
     });
     var kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
         Ct = /<script|<style|<link/i,
         St = /checked\s*(?:[^=]|=\s*.checked.)/i,
         $t = /^true\/(.*)/,
         Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

     function At(t, e) {
         return $(t, "table") && $(11 !== e.nodeType ? e : e.firstChild, "tr") && g(">tbody", t)[0] || t
     }

     function Ot(t) {
         return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
     }

     function Pt(t) {
         var e = $t.exec(t.type);
         return e ? t.type = e[1] : t.removeAttribute("type"), t
     }

     function Dt(t, e) {
         var i, n, o, r, s, a, l, c;
         if (1 === e.nodeType) {
             if (Q.hasData(t) && (r = Q.access(t), s = Q.set(e, r), c = r.events))
                 for (o in delete s.handle, s.events = {}, c)
                     for (i = 0, n = c[o].length; i < n; i++) g.event.add(e, o, c[o][i]);
             B.hasData(t) && (a = B.access(t), l = g.extend({}, a), B.set(e, l))
         }
     }

     function jt(t, e, i, n) {
         e = s.apply([], e);
         var o, r, a, l, c, u, d = 0,
             p = t.length,
             f = p - 1,
             m = e[0],
             y = g.isFunction(m);
         if (y || p > 1 && "string" == typeof m && !h.checkClone && St.test(m)) return t.each(function(o) {
             var r = t.eq(o);
             y && (e[0] = m.call(this, o, r.html())), jt(r, e, i, n)
         });
         if (p && (r = (o = ht(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === o.childNodes.length && (o = r), r || n)) {
             for (l = (a = g.map(ct(o, "script"), Ot)).length; d < p; d++) c = o, d !== f && (c = g.clone(c, !0, !0), l && g.merge(a, ct(c, "script"))), i.call(t[d], c, d);
             if (l)
                 for (u = a[a.length - 1].ownerDocument, g.map(a, Pt), d = 0; d < l; d++) c = a[d], at.test(c.type || "") && !Q.access(c, "globalEval") && g.contains(u, c) && (c.src ? g._evalUrl && g._evalUrl(c.src) : v(c.textContent.replace(Et, ""), u))
         }
         return t
     }

     function Nt(t, e, i) {
         for (var n, o = e ? g.filter(e, t) : t, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || g.cleanData(ct(n)), n.parentNode && (i && g.contains(n.ownerDocument, n) && ut(ct(n, "script")), n.parentNode.removeChild(n));
         return t
     }
     g.extend({
         htmlPrefilter: function(t) {
             return t.replace(kt, "<$1></$2>")
         },
         clone: function(t, e, i) {
             var n, o, r, s, a, l, c, u = t.cloneNode(!0),
                 d = g.contains(t.ownerDocument, t);
             if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || g.isXMLDoc(t)))
                 for (s = ct(u), n = 0, o = (r = ct(t)).length; n < o; n++) a = r[n], l = s[n], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && rt.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
             if (e)
                 if (i)
                     for (r = r || ct(t), s = s || ct(u), n = 0, o = r.length; n < o; n++) Dt(r[n], s[n]);
                 else Dt(t, u);
             return (s = ct(u, "script")).length > 0 && ut(s, !d && ct(t, "script")), u
         },
         cleanData: function(t) {
             for (var e, i, n, o = g.event.special, r = 0; void 0 !== (i = t[r]); r++)
                 if (_(i)) {
                     if (e = i[Q.expando]) {
                         if (e.events)
                             for (n in e.events) o[n] ? g.event.remove(i, n) : g.removeEvent(i, n, e.handle);
                         i[Q.expando] = void 0
                     }
                     i[B.expando] && (i[B.expando] = void 0)
                 }
         }
     }), g.fn.extend({
         detach: function(t) {
             return Nt(this, t, !0)
         },
         remove: function(t) {
             return Nt(this, t)
         },
         text: function(t) {
             return z(this, function(t) {
                 return void 0 === t ? g.text(this) : this.empty().each(function() {
                     1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                 })
             }, null, t, arguments.length)
         },
         append: function() {
             return jt(this, arguments, function(t) {
                 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || At(this, t).appendChild(t)
             })
         },
         prepend: function() {
             return jt(this, arguments, function(t) {
                 if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                     var e = At(this, t);
                     e.insertBefore(t, e.firstChild)
                 }
             })
         },
         before: function() {
             return jt(this, arguments, function(t) {
                 this.parentNode && this.parentNode.insertBefore(t, this)
             })
         },
         after: function() {
             return jt(this, arguments, function(t) {
                 this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
             })
         },
         empty: function() {
             for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (g.cleanData(ct(t, !1)), t.textContent = "");
             return this
         },
         clone: function(t, e) {
             return t = null != t && t, e = null == e ? t : e, this.map(function() {
                 return g.clone(this, t, e)
             })
         },
         html: function(t) {
             return z(this, function(t) {
                 var e = this[0] || {},
                     i = 0,
                     n = this.length;
                 if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                 if ("string" == typeof t && !Ct.test(t) && !lt[(st.exec(t) || ["", ""])[1].toLowerCase()]) {
                     t = g.htmlPrefilter(t);
                     try {
                         for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (g.cleanData(ct(e, !1)), e.innerHTML = t);
                         e = 0
                     } catch (t) {}
                 }
                 e && this.empty().append(t)
             }, null, t, arguments.length)
         },
         replaceWith: function() {
             var t = [];
             return jt(this, arguments, function(e) {
                 var i = this.parentNode;
                 g.inArray(this, t) < 0 && (g.cleanData(ct(this)), i && i.replaceChild(e, this))
             }, t)
         }
     }), g.each({
         appendTo: "append",
         prependTo: "prepend",
         insertBefore: "before",
         insertAfter: "after",
         replaceAll: "replaceWith"
     }, function(t, e) {
         g.fn[t] = function(t) {
             for (var i, n = [], o = g(t), r = o.length - 1, s = 0; s <= r; s++) i = s === r ? this : this.clone(!0), g(o[s])[e](i), a.apply(n, i.get());
             return this.pushStack(n)
         }
     });
     var It = /^margin/,
         qt = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
         Lt = function(e) {
             var i = e.ownerDocument.defaultView;
             return i && i.opener || (i = t), i.getComputedStyle(e)
         };

     function Mt(t, e, i) {
         var n, o, r, s, a = t.style;
         return (i = i || Lt(t)) && ("" !== (s = i.getPropertyValue(e) || i[e]) || g.contains(t.ownerDocument, t) || (s = g.style(t, e)), !h.pixelMarginRight() && qt.test(s) && It.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
     }

     function Ht(t, e) {
         return {
             get: function() {
                 return t() ? void delete this.get : (this.get = e).apply(this, arguments)
             }
         }
     }! function() {
         function e() {
             if (l) {
                 l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", vt.appendChild(a);
                 var e = t.getComputedStyle(l);
                 i = "1%" !== e.top, s = "2px" === e.marginLeft, o = "4px" === e.width, l.style.marginRight = "50%", r = "4px" === e.marginRight, vt.removeChild(a), l = null
             }
         }
         var i, o, r, s, a = n.createElement("div"),
             l = n.createElement("div");
         l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === l.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(l), g.extend(h, {
             pixelPosition: function() {
                 return e(), i
             },
             boxSizingReliable: function() {
                 return e(), o
             },
             pixelMarginRight: function() {
                 return e(), r
             },
             reliableMarginLeft: function() {
                 return e(), s
             }
         }))
     }();
     var Rt = /^(none|table(?!-c[ea]).+)/,
         Ft = /^--/,
         Wt = {
             position: "absolute",
             visibility: "hidden",
             display: "block"
         },
         zt = {
             letterSpacing: "0",
             fontWeight: "400"
         },
         _t = ["Webkit", "Moz", "ms"],
         Vt = n.createElement("div").style;

     function Qt(t) {
         var e = g.cssProps[t];
         return e || (e = g.cssProps[t] = function(t) {
             if (t in Vt) return t;
             for (var e = t[0].toUpperCase() + t.slice(1), i = _t.length; i--;)
                 if ((t = _t[i] + e) in Vt) return t
         }(t) || t), e
     }

     function Bt(t, e, i) {
         var n = Z.exec(e);
         return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
     }

     function Xt(t, e, i, n, o) {
         var r, s = 0;
         for (r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2) "margin" === i && (s += g.css(t, i + J[r], !0, o)), n ? ("content" === i && (s -= g.css(t, "padding" + J[r], !0, o)), "margin" !== i && (s -= g.css(t, "border" + J[r] + "Width", !0, o))) : (s += g.css(t, "padding" + J[r], !0, o), "padding" !== i && (s += g.css(t, "border" + J[r] + "Width", !0, o)));
         return s
     }

     function Ut(t, e, i) {
         var n, o = Lt(t),
             r = Mt(t, e, o),
             s = "border-box" === g.css(t, "boxSizing", !1, o);
         return qt.test(r) ? r : (n = s && (h.boxSizingReliable() || r === t.style[e]), (r = parseFloat(r) || 0) + Xt(t, e, i || (s ? "border" : "content"), n, o) + "px")
     }

     function Yt(t, e, i, n, o) {
         return new Yt.prototype.init(t, e, i, n, o)
     }
     g.extend({
         cssHooks: {
             opacity: {
                 get: function(t, e) {
                     if (e) {
                         var i = Mt(t, "opacity");
                         return "" === i ? "1" : i
                     }
                 }
             }
         },
         cssNumber: {
             animationIterationCount: !0,
             columnCount: !0,
             fillOpacity: !0,
             flexGrow: !0,
             flexShrink: !0,
             fontWeight: !0,
             lineHeight: !0,
             opacity: !0,
             order: !0,
             orphans: !0,
             widows: !0,
             zIndex: !0,
             zoom: !0
         },
         cssProps: {
             float: "cssFloat"
         },
         style: function(t, e, i, n) {
             if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                 var o, r, s, a = g.camelCase(e),
                     l = Ft.test(e),
                     c = t.style;
                 return l || (e = Qt(a)), s = g.cssHooks[e] || g.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : c[e] : ("string" === (r = typeof i) && (o = Z.exec(i)) && o[1] && (i = et(t, e, o), r = "number"), void(null != i && i == i && ("number" === r && (i += o && o[3] || (g.cssNumber[a] ? "" : "px")), h.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))))
             }
         },
         css: function(t, e, i, n) {
             var o, r, s, a = g.camelCase(e);
             return Ft.test(e) || (e = Qt(a)), (s = g.cssHooks[e] || g.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = Mt(t, e, n)), "normal" === o && e in zt && (o = zt[e]), "" === i || i ? (r = parseFloat(o), !0 === i || isFinite(r) ? r || 0 : o) : o
         }
     }), g.each(["height", "width"], function(t, e) {
         g.cssHooks[e] = {
             get: function(t, i, n) {
                 if (i) return !Rt.test(g.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Ut(t, e, n) : tt(t, Wt, function() {
                     return Ut(t, e, n)
                 })
             },
             set: function(t, i, n) {
                 var o, r = n && Lt(t),
                     s = n && Xt(t, e, n, "border-box" === g.css(t, "boxSizing", !1, r), r);
                 return s && (o = Z.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = g.css(t, e)), Bt(0, i, s)
             }
         }
     }), g.cssHooks.marginLeft = Ht(h.reliableMarginLeft, function(t, e) {
         if (e) return (parseFloat(Mt(t, "marginLeft")) || t.getBoundingClientRect().left - tt(t, {
             marginLeft: 0
         }, function() {
             return t.getBoundingClientRect().left
         })) + "px"
     }), g.each({
         margin: "",
         padding: "",
         border: "Width"
     }, function(t, e) {
         g.cssHooks[t + e] = {
             expand: function(i) {
                 for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + J[n] + e] = r[n] || r[n - 2] || r[0];
                 return o
             }
         }, It.test(t) || (g.cssHooks[t + e].set = Bt)
     }), g.fn.extend({
         css: function(t, e) {
             return z(this, function(t, e, i) {
                 var n, o, r = {},
                     s = 0;
                 if (Array.isArray(e)) {
                     for (n = Lt(t), o = e.length; s < o; s++) r[e[s]] = g.css(t, e[s], !1, n);
                     return r
                 }
                 return void 0 !== i ? g.style(t, e, i) : g.css(t, e)
             }, t, e, arguments.length > 1)
         }
     }), g.Tween = Yt, Yt.prototype = {
         constructor: Yt,
         init: function(t, e, i, n, o, r) {
             this.elem = t, this.prop = i, this.easing = o || g.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (g.cssNumber[i] ? "" : "px")
         },
         cur: function() {
             var t = Yt.propHooks[this.prop];
             return t && t.get ? t.get(this) : Yt.propHooks._default.get(this)
         },
         run: function(t) {
             var e, i = Yt.propHooks[this.prop];
             return this.options.duration ? this.pos = e = g.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Yt.propHooks._default.set(this), this
         }
     }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
         _default: {
             get: function(t) {
                 var e;
                 return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = g.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
             },
             set: function(t) {
                 g.fx.step[t.prop] ? g.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[g.cssProps[t.prop]] && !g.cssHooks[t.prop] ? t.elem[t.prop] = t.now : g.style(t.elem, t.prop, t.now + t.unit)
             }
         }
     }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
         set: function(t) {
             t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
         }
     }, g.easing = {
         linear: function(t) {
             return t
         },
         swing: function(t) {
             return .5 - Math.cos(t * Math.PI) / 2
         },
         _default: "swing"
     }, g.fx = Yt.prototype.init, g.fx.step = {};
     var Gt, Zt, Jt = /^(?:toggle|show|hide)$/,
         Kt = /queueHooks$/;

     function te() {
         Zt && (!1 === n.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(te) : t.setTimeout(te, g.fx.interval), g.fx.tick())
     }

     function ee() {
         return t.setTimeout(function() {
             Gt = void 0
         }), Gt = g.now()
     }

     function ie(t, e) {
         var i, n = 0,
             o = {
                 height: t
             };
         for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = J[n])] = o["padding" + i] = t;
         return e && (o.opacity = o.width = t), o
     }

     function ne(t, e, i) {
         for (var n, o = (oe.tweeners[e] || []).concat(oe.tweeners["*"]), r = 0, s = o.length; r < s; r++)
             if (n = o[r].call(i, e, t)) return n
     }

     function oe(t, e, i) {
         var n, o, r = 0,
             s = oe.prefilters.length,
             a = g.Deferred().always(function() {
                 delete l.elem
             }),
             l = function() {
                 if (o) return !1;
                 for (var e = Gt || ee(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(n);
                 return a.notifyWith(t, [c, n, i]), n < 1 && s ? i : (s || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1)
             },
             c = a.promise({
                 elem: t,
                 props: g.extend({}, e),
                 opts: g.extend(!0, {
                     specialEasing: {},
                     easing: g.easing._default
                 }, i),
                 originalProperties: e,
                 originalOptions: i,
                 startTime: Gt || ee(),
                 duration: i.duration,
                 tweens: [],
                 createTween: function(e, i) {
                     var n = g.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                     return c.tweens.push(n), n
                 },
                 stop: function(e) {
                     var i = 0,
                         n = e ? c.tweens.length : 0;
                     if (o) return this;
                     for (o = !0; i < n; i++) c.tweens[i].run(1);
                     return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                 }
             }),
             u = c.props;
         for (function(t, e) {
                 var i, n, o, r, s;
                 for (i in t)
                     if (o = e[n = g.camelCase(i)], r = t[i], Array.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = g.cssHooks[n]) && "expand" in s)
                         for (i in r = s.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = o);
                     else e[n] = o
             }(u, c.opts.specialEasing); r < s; r++)
             if (n = oe.prefilters[r].call(c, t, u, c.opts)) return g.isFunction(n.stop) && (g._queueHooks(c.elem, c.opts.queue).stop = g.proxy(n.stop, n)), n;
         return g.map(u, ne, c), g.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), g.fx.timer(g.extend(l, {
             elem: t,
             anim: c,
             queue: c.opts.queue
         })), c
     }
     g.Animation = g.extend(oe, {
             tweeners: {
                 "*": [function(t, e) {
                     var i = this.createTween(t, e);
                     return et(i.elem, t, Z.exec(e), i), i
                 }]
             },
             tweener: function(t, e) {
                 g.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(q);
                 for (var i, n = 0, o = t.length; n < o; n++) i = t[n], oe.tweeners[i] = oe.tweeners[i] || [], oe.tweeners[i].unshift(e)
             },
             prefilters: [function(t, e, i) {
                 var n, o, r, s, a, l, c, u, d = "width" in e || "height" in e,
                     p = this,
                     f = {},
                     h = t.style,
                     v = t.nodeType && K(t),
                     m = Q.get(t, "fxshow");
                 for (n in i.queue || (null == (s = g._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                         s.unqueued || a()
                     }), s.unqueued++, p.always(function() {
                         p.always(function() {
                             s.unqueued--, g.queue(t, "fx").length || s.empty.fire()
                         })
                     })), e)
                     if (o = e[n], Jt.test(o)) {
                         if (delete e[n], r = r || "toggle" === o, o === (v ? "hide" : "show")) {
                             if ("show" !== o || !m || void 0 === m[n]) continue;
                             v = !0
                         }
                         f[n] = m && m[n] || g.style(t, n)
                     } if ((l = !g.isEmptyObject(e)) || !g.isEmptyObject(f))
                     for (n in d && 1 === t.nodeType && (i.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Q.get(t, "display")), "none" === (u = g.css(t, "display")) && (c ? u = c : (ot([t], !0), c = t.style.display || c, u = g.css(t, "display"), ot([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === g.css(t, "float") && (l || (p.done(function() {
                             h.display = c
                         }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), i.overflow && (h.overflow = "hidden", p.always(function() {
                             h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                         })), l = !1, f) l || (m ? "hidden" in m && (v = m.hidden) : m = Q.access(t, "fxshow", {
                         display: c
                     }), r && (m.hidden = !v), v && ot([t], !0), p.done(function() {
                         for (n in v || ot([t]), Q.remove(t, "fxshow"), f) g.style(t, n, f[n])
                     })), l = ne(v ? m[n] : 0, n, p), n in m || (m[n] = l.start, v && (l.end = l.start, l.start = 0))
             }],
             prefilter: function(t, e) {
                 e ? oe.prefilters.unshift(t) : oe.prefilters.push(t)
             }
         }), g.speed = function(t, e, i) {
             var n = t && "object" == typeof t ? g.extend({}, t) : {
                 complete: i || !i && e || g.isFunction(t) && t,
                 duration: t,
                 easing: i && e || e && !g.isFunction(e) && e
             };
             return g.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in g.fx.speeds ? n.duration = g.fx.speeds[n.duration] : n.duration = g.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                 g.isFunction(n.old) && n.old.call(this), n.queue && g.dequeue(this, n.queue)
             }, n
         }, g.fn.extend({
             fadeTo: function(t, e, i, n) {
                 return this.filter(K).css("opacity", 0).show().end().animate({
                     opacity: e
                 }, t, i, n)
             },
             animate: function(t, e, i, n) {
                 var o = g.isEmptyObject(t),
                     r = g.speed(e, i, n),
                     s = function() {
                         var e = oe(this, g.extend({}, t), r);
                         (o || Q.get(this, "finish")) && e.stop(!0)
                     };
                 return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
             },
             stop: function(t, e, i) {
                 var n = function(t) {
                     var e = t.stop;
                     delete t.stop, e(i)
                 };
                 return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                     var e = !0,
                         o = null != t && t + "queueHooks",
                         r = g.timers,
                         s = Q.get(this);
                     if (o) s[o] && s[o].stop && n(s[o]);
                     else
                         for (o in s) s[o] && s[o].stop && Kt.test(o) && n(s[o]);
                     for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i), e = !1, r.splice(o, 1));
                     !e && i || g.dequeue(this, t)
                 })
             },
             finish: function(t) {
                 return !1 !== t && (t = t || "fx"), this.each(function() {
                     var e, i = Q.get(this),
                         n = i[t + "queue"],
                         o = i[t + "queueHooks"],
                         r = g.timers,
                         s = n ? n.length : 0;
                     for (i.finish = !0, g.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                     for (e = 0; e < s; e++) n[e] && n[e].finish && n[e].finish.call(this);
                     delete i.finish
                 })
             }
         }), g.each(["toggle", "show", "hide"], function(t, e) {
             var i = g.fn[e];
             g.fn[e] = function(t, n, o) {
                 return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ie(e, !0), t, n, o)
             }
         }), g.each({
             slideDown: ie("show"),
             slideUp: ie("hide"),
             slideToggle: ie("toggle"),
             fadeIn: {
                 opacity: "show"
             },
             fadeOut: {
                 opacity: "hide"
             },
             fadeToggle: {
                 opacity: "toggle"
             }
         }, function(t, e) {
             g.fn[t] = function(t, i, n) {
                 return this.animate(e, t, i, n)
             }
         }), g.timers = [], g.fx.tick = function() {
             var t, e = 0,
                 i = g.timers;
             for (Gt = g.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
             i.length || g.fx.stop(), Gt = void 0
         }, g.fx.timer = function(t) {
             g.timers.push(t), g.fx.start()
         }, g.fx.interval = 13, g.fx.start = function() {
             Zt || (Zt = !0, te())
         }, g.fx.stop = function() {
             Zt = null
         }, g.fx.speeds = {
             slow: 600,
             fast: 200,
             _default: 400
         }, g.fn.delay = function(e, i) {
             return e = g.fx && g.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                 var o = t.setTimeout(i, e);
                 n.stop = function() {
                     t.clearTimeout(o)
                 }
             })
         },
         function() {
             var t = n.createElement("input"),
                 e = n.createElement("select").appendChild(n.createElement("option"));
             t.type = "checkbox", h.checkOn = "" !== t.value, h.optSelected = e.selected, (t = n.createElement("input")).value = "t", t.type = "radio", h.radioValue = "t" === t.value
         }();
     var re, se = g.expr.attrHandle;
     g.fn.extend({
         attr: function(t, e) {
             return z(this, g.attr, t, e, arguments.length > 1)
         },
         removeAttr: function(t) {
             return this.each(function() {
                 g.removeAttr(this, t)
             })
         }
     }), g.extend({
         attr: function(t, e, i) {
             var n, o, r = t.nodeType;
             if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? g.prop(t, e, i) : (1 === r && g.isXMLDoc(t) || (o = g.attrHooks[e.toLowerCase()] || (g.expr.match.bool.test(e) ? re : void 0)), void 0 !== i ? null === i ? void g.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = g.find.attr(t, e)) ? void 0 : n)
         },
         attrHooks: {
             type: {
                 set: function(t, e) {
                     if (!h.radioValue && "radio" === e && $(t, "input")) {
                         var i = t.value;
                         return t.setAttribute("type", e), i && (t.value = i), e
                     }
                 }
             }
         },
         removeAttr: function(t, e) {
             var i, n = 0,
                 o = e && e.match(q);
             if (o && 1 === t.nodeType)
                 for (; i = o[n++];) t.removeAttribute(i)
         }
     }), re = {
         set: function(t, e, i) {
             return !1 === e ? g.removeAttr(t, i) : t.setAttribute(i, i), i
         }
     }, g.each(g.expr.match.bool.source.match(/\w+/g), function(t, e) {
         var i = se[e] || g.find.attr;
         se[e] = function(t, e, n) {
             var o, r, s = e.toLowerCase();
             return n || (r = se[s], se[s] = o, o = null != i(t, e, n) ? s : null, se[s] = r), o
         }
     });
     var ae = /^(?:input|select|textarea|button)$/i,
         le = /^(?:a|area)$/i;

     function ce(t) {
         return (t.match(q) || []).join(" ")
     }

     function ue(t) {
         return t.getAttribute && t.getAttribute("class") || ""
     }
     g.fn.extend({
         prop: function(t, e) {
             return z(this, g.prop, t, e, arguments.length > 1)
         },
         removeProp: function(t) {
             return this.each(function() {
                 delete this[g.propFix[t] || t]
             })
         }
     }), g.extend({
         prop: function(t, e, i) {
             var n, o, r = t.nodeType;
             if (3 !== r && 8 !== r && 2 !== r) return 1 === r && g.isXMLDoc(t) || (e = g.propFix[e] || e, o = g.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
         },
         propHooks: {
             tabIndex: {
                 get: function(t) {
                     var e = g.find.attr(t, "tabindex");
                     return e ? parseInt(e, 10) : ae.test(t.nodeName) || le.test(t.nodeName) && t.href ? 0 : -1
                 }
             }
         },
         propFix: {
             for: "htmlFor",
             class: "className"
         }
     }), h.optSelected || (g.propHooks.selected = {
         get: function(t) {
             var e = t.parentNode;
             return e && e.parentNode && e.parentNode.selectedIndex, null
         },
         set: function(t) {
             var e = t.parentNode;
             e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
         }
     }), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
         g.propFix[this.toLowerCase()] = this
     }), g.fn.extend({
         addClass: function(t) {
             var e, i, n, o, r, s, a, l = 0;
             if (g.isFunction(t)) return this.each(function(e) {
                 g(this).addClass(t.call(this, e, ue(this)))
             });
             if ("string" == typeof t && t)
                 for (e = t.match(q) || []; i = this[l++];)
                     if (o = ue(i), n = 1 === i.nodeType && " " + ce(o) + " ") {
                         for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                         o !== (a = ce(n)) && i.setAttribute("class", a)
                     } return this
         },
         removeClass: function(t) {
             var e, i, n, o, r, s, a, l = 0;
             if (g.isFunction(t)) return this.each(function(e) {
                 g(this).removeClass(t.call(this, e, ue(this)))
             });
             if (!arguments.length) return this.attr("class", "");
             if ("string" == typeof t && t)
                 for (e = t.match(q) || []; i = this[l++];)
                     if (o = ue(i), n = 1 === i.nodeType && " " + ce(o) + " ") {
                         for (s = 0; r = e[s++];)
                             for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                         o !== (a = ce(n)) && i.setAttribute("class", a)
                     } return this
         },
         toggleClass: function(t, e) {
             var i = typeof t;
             return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : g.isFunction(t) ? this.each(function(i) {
                 g(this).toggleClass(t.call(this, i, ue(this), e), e)
             }) : this.each(function() {
                 var e, n, o, r;
                 if ("string" === i)
                     for (n = 0, o = g(this), r = t.match(q) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                 else void 0 !== t && "boolean" !== i || ((e = ue(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
             })
         },
         hasClass: function(t) {
             var e, i, n = 0;
             for (e = " " + t + " "; i = this[n++];)
                 if (1 === i.nodeType && (" " + ce(ue(i)) + " ").indexOf(e) > -1) return !0;
             return !1
         }
     });
     var de = /\r/g;
     g.fn.extend({
         val: function(t) {
             var e, i, n, o = this[0];
             return arguments.length ? (n = g.isFunction(t), this.each(function(i) {
                 var o;
                 1 === this.nodeType && (null == (o = n ? t.call(this, i, g(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = g.map(o, function(t) {
                     return null == t ? "" : t + ""
                 })), (e = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
             })) : o ? (e = g.valHooks[o.type] || g.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(de, "") : null == i ? "" : i : void 0
         }
     }), g.extend({
         valHooks: {
             option: {
                 get: function(t) {
                     var e = g.find.attr(t, "value");
                     return null != e ? e : ce(g.text(t))
                 }
             },
             select: {
                 get: function(t) {
                     var e, i, n, o = t.options,
                         r = t.selectedIndex,
                         s = "select-one" === t.type,
                         a = s ? null : [],
                         l = s ? r + 1 : o.length;
                     for (n = r < 0 ? l : s ? r : 0; n < l; n++)
                         if (((i = o[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !$(i.parentNode, "optgroup"))) {
                             if (e = g(i).val(), s) return e;
                             a.push(e)
                         } return a
                 },
                 set: function(t, e) {
                     for (var i, n, o = t.options, r = g.makeArray(e), s = o.length; s--;)((n = o[s]).selected = g.inArray(g.valHooks.option.get(n), r) > -1) && (i = !0);
                     return i || (t.selectedIndex = -1), r
                 }
             }
         }
     }), g.each(["radio", "checkbox"], function() {
         g.valHooks[this] = {
             set: function(t, e) {
                 if (Array.isArray(e)) return t.checked = g.inArray(g(t).val(), e) > -1
             }
         }, h.checkOn || (g.valHooks[this].get = function(t) {
             return null === t.getAttribute("value") ? "on" : t.value
         })
     });
     var pe = /^(?:focusinfocus|focusoutblur)$/;
     g.extend(g.event, {
         trigger: function(e, i, o, r) {
             var s, a, l, c, u, p, f, h = [o || n],
                 v = d.call(e, "type") ? e.type : e,
                 m = d.call(e, "namespace") ? e.namespace.split(".") : [];
             if (a = l = o = o || n, 3 !== o.nodeType && 8 !== o.nodeType && !pe.test(v + g.event.triggered) && (v.indexOf(".") > -1 && (m = v.split("."), v = m.shift(), m.sort()), u = v.indexOf(":") < 0 && "on" + v, (e = e[g.expando] ? e : new g.Event(v, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), i = null == i ? [e] : g.makeArray(i, [e]), f = g.event.special[v] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, i))) {
                 if (!r && !f.noBubble && !g.isWindow(o)) {
                     for (c = f.delegateType || v, pe.test(c + v) || (a = a.parentNode); a; a = a.parentNode) h.push(a), l = a;
                     l === (o.ownerDocument || n) && h.push(l.defaultView || l.parentWindow || t)
                 }
                 for (s = 0;
                     (a = h[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? c : f.bindType || v, (p = (Q.get(a, "events") || {})[e.type] && Q.get(a, "handle")) && p.apply(a, i), (p = u && a[u]) && p.apply && _(a) && (e.result = p.apply(a, i), !1 === e.result && e.preventDefault());
                 return e.type = v, r || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), i) || !_(o) || u && g.isFunction(o[v]) && !g.isWindow(o) && ((l = o[u]) && (o[u] = null), g.event.triggered = v, o[v](), g.event.triggered = void 0, l && (o[u] = l)), e.result
             }
         },
         simulate: function(t, e, i) {
             var n = g.extend(new g.Event, i, {
                 type: t,
                 isSimulated: !0
             });
             g.event.trigger(n, null, e)
         }
     }), g.fn.extend({
         trigger: function(t, e) {
             return this.each(function() {
                 g.event.trigger(t, e, this)
             })
         },
         triggerHandler: function(t, e) {
             var i = this[0];
             if (i) return g.event.trigger(t, e, i, !0)
         }
     }), g.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
         g.fn[e] = function(t, i) {
             return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
         }
     }), g.fn.extend({
         hover: function(t, e) {
             return this.mouseenter(t).mouseleave(e || t)
         }
     }), h.focusin = "onfocusin" in t, h.focusin || g.each({
         focus: "focusin",
         blur: "focusout"
     }, function(t, e) {
         var i = function(t) {
             g.event.simulate(e, t.target, g.event.fix(t))
         };
         g.event.special[e] = {
             setup: function() {
                 var n = this.ownerDocument || this,
                     o = Q.access(n, e);
                 o || n.addEventListener(t, i, !0), Q.access(n, e, (o || 0) + 1)
             },
             teardown: function() {
                 var n = this.ownerDocument || this,
                     o = Q.access(n, e) - 1;
                 o ? Q.access(n, e, o) : (n.removeEventListener(t, i, !0), Q.remove(n, e))
             }
         }
     });
     var fe = t.location,
         he = g.now(),
         ve = /\?/;
     g.parseXML = function(e) {
         var i;
         if (!e || "string" != typeof e) return null;
         try {
             i = (new t.DOMParser).parseFromString(e, "text/xml")
         } catch (t) {
             i = void 0
         }
         return i && !i.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + e), i
     };
     var ge = /\[\]$/,
         me = /\r?\n/g,
         ye = /^(?:submit|button|image|reset|file)$/i,
         be = /^(?:input|select|textarea|keygen)/i;

     function we(t, e, i, n) {
         var o;
         if (Array.isArray(e)) g.each(e, function(e, o) {
             i || ge.test(t) ? n(t, o) : we(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
         });
         else if (i || "object" !== g.type(e)) n(t, e);
         else
             for (o in e) we(t + "[" + o + "]", e[o], i, n)
     }
     g.param = function(t, e) {
         var i, n = [],
             o = function(t, e) {
                 var i = g.isFunction(e) ? e() : e;
                 n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
             };
         if (Array.isArray(t) || t.jquery && !g.isPlainObject(t)) g.each(t, function() {
             o(this.name, this.value)
         });
         else
             for (i in t) we(i, t[i], e, o);
         return n.join("&")
     }, g.fn.extend({
         serialize: function() {
             return g.param(this.serializeArray())
         },
         serializeArray: function() {
             return this.map(function() {
                 var t = g.prop(this, "elements");
                 return t ? g.makeArray(t) : this
             }).filter(function() {
                 var t = this.type;
                 return this.name && !g(this).is(":disabled") && be.test(this.nodeName) && !ye.test(t) && (this.checked || !rt.test(t))
             }).map(function(t, e) {
                 var i = g(this).val();
                 return null == i ? null : Array.isArray(i) ? g.map(i, function(t) {
                     return {
                         name: e.name,
                         value: t.replace(me, "\r\n")
                     }
                 }) : {
                     name: e.name,
                     value: i.replace(me, "\r\n")
                 }
             }).get()
         }
     });
     var xe = /%20/g,
         Te = /#.*$/,
         ke = /([?&])_=[^&]*/,
         Ce = /^(.*?):[ \t]*([^\r\n]*)$/gm,
         Se = /^(?:GET|HEAD)$/,
         $e = /^\/\//,
         Ee = {},
         Ae = {},
         Oe = "*/".concat("*"),
         Pe = n.createElement("a");

     function De(t) {
         return function(e, i) {
             "string" != typeof e && (i = e, e = "*");
             var n, o = 0,
                 r = e.toLowerCase().match(q) || [];
             if (g.isFunction(i))
                 for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
         }
     }

     function je(t, e, i, n) {
         var o = {},
             r = t === Ae;

         function s(a) {
             var l;
             return o[a] = !0, g.each(t[a] || [], function(t, a) {
                 var c = a(e, i, n);
                 return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
             }), l
         }
         return s(e.dataTypes[0]) || !o["*"] && s("*")
     }

     function Ne(t, e) {
         var i, n, o = g.ajaxSettings.flatOptions || {};
         for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
         return n && g.extend(!0, t, n), t
     }
     Pe.href = fe.href, g.extend({
         active: 0,
         lastModified: {},
         etag: {},
         ajaxSettings: {
             url: fe.href,
             type: "GET",
             isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(fe.protocol),
             global: !0,
             processData: !0,
             async: !0,
             contentType: "application/x-www-form-urlencoded; charset=UTF-8",
             accepts: {
                 "*": Oe,
                 text: "text/plain",
                 html: "text/html",
                 xml: "application/xml, text/xml",
                 json: "application/json, text/javascript"
             },
             contents: {
                 xml: /\bxml\b/,
                 html: /\bhtml/,
                 json: /\bjson\b/
             },
             responseFields: {
                 xml: "responseXML",
                 text: "responseText",
                 json: "responseJSON"
             },
             converters: {
                 "* text": String,
                 "text html": !0,
                 "text json": JSON.parse,
                 "text xml": g.parseXML
             },
             flatOptions: {
                 url: !0,
                 context: !0
             }
         },
         ajaxSetup: function(t, e) {
             return e ? Ne(Ne(t, g.ajaxSettings), e) : Ne(g.ajaxSettings, t)
         },
         ajaxPrefilter: De(Ee),
         ajaxTransport: De(Ae),
         ajax: function(e, i) {
             "object" == typeof e && (i = e, e = void 0), i = i || {};
             var o, r, s, a, l, c, u, d, p, f, h = g.ajaxSetup({}, i),
                 v = h.context || h,
                 m = h.context && (v.nodeType || v.jquery) ? g(v) : g.event,
                 y = g.Deferred(),
                 b = g.Callbacks("once memory"),
                 w = h.statusCode || {},
                 x = {},
                 T = {},
                 k = "canceled",
                 C = {
                     readyState: 0,
                     getResponseHeader: function(t) {
                         var e;
                         if (u) {
                             if (!a)
                                 for (a = {}; e = Ce.exec(s);) a[e[1].toLowerCase()] = e[2];
                             e = a[t.toLowerCase()]
                         }
                         return null == e ? null : e
                     },
                     getAllResponseHeaders: function() {
                         return u ? s : null
                     },
                     setRequestHeader: function(t, e) {
                         return null == u && (t = T[t.toLowerCase()] = T[t.toLowerCase()] || t, x[t] = e), this
                     },
                     overrideMimeType: function(t) {
                         return null == u && (h.mimeType = t), this
                     },
                     statusCode: function(t) {
                         var e;
                         if (t)
                             if (u) C.always(t[C.status]);
                             else
                                 for (e in t) w[e] = [w[e], t[e]];
                         return this
                     },
                     abort: function(t) {
                         var e = t || k;
                         return o && o.abort(e), S(0, e), this
                     }
                 };
             if (y.promise(C), h.url = ((e || h.url || fe.href) + "").replace($e, fe.protocol + "//"), h.type = i.method || i.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""], null == h.crossDomain) {
                 c = n.createElement("a");
                 try {
                     c.href = h.url, c.href = c.href, h.crossDomain = Pe.protocol + "//" + Pe.host != c.protocol + "//" + c.host
                 } catch (t) {
                     h.crossDomain = !0
                 }
             }
             if (h.data && h.processData && "string" != typeof h.data && (h.data = g.param(h.data, h.traditional)), je(Ee, h, i, C), u) return C;
             for (p in (d = g.event && h.global) && 0 == g.active++ && g.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Se.test(h.type), r = h.url.replace(Te, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(xe, "+")) : (f = h.url.slice(r.length), h.data && (r += (ve.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(ke, "$1"), f = (ve.test(r) ? "&" : "?") + "_=" + he++ + f), h.url = r + f), h.ifModified && (g.lastModified[r] && C.setRequestHeader("If-Modified-Since", g.lastModified[r]), g.etag[r] && C.setRequestHeader("If-None-Match", g.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || i.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : h.accepts["*"]), h.headers) C.setRequestHeader(p, h.headers[p]);
             if (h.beforeSend && (!1 === h.beforeSend.call(v, C, h) || u)) return C.abort();
             if (k = "abort", b.add(h.complete), C.done(h.success), C.fail(h.error), o = je(Ae, h, i, C)) {
                 if (C.readyState = 1, d && m.trigger("ajaxSend", [C, h]), u) return C;
                 h.async && h.timeout > 0 && (l = t.setTimeout(function() {
                     C.abort("timeout")
                 }, h.timeout));
                 try {
                     u = !1, o.send(x, S)
                 } catch (t) {
                     if (u) throw t;
                     S(-1, t)
                 }
             } else S(-1, "No Transport");

             function S(e, i, n, a) {
                 var c, p, f, x, T, k = i;
                 u || (u = !0, l && t.clearTimeout(l), o = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, n && (x = function(t, e, i) {
                     for (var n, o, r, s, a = t.contents, l = t.dataTypes;
                         "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                     if (n)
                         for (o in a)
                             if (a[o] && a[o].test(n)) {
                                 l.unshift(o);
                                 break
                             } if (l[0] in i) r = l[0];
                     else {
                         for (o in i) {
                             if (!l[0] || t.converters[o + " " + l[0]]) {
                                 r = o;
                                 break
                             }
                             s || (s = o)
                         }
                         r = r || s
                     }
                     if (r) return r !== l[0] && l.unshift(r), i[r]
                 }(h, C, n)), x = function(t, e, i, n) {
                     var o, r, s, a, l, c = {},
                         u = t.dataTypes.slice();
                     if (u[1])
                         for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                     for (r = u.shift(); r;)
                         if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                             if ("*" === r) r = l;
                             else if ("*" !== l && l !== r) {
                         if (!(s = c[l + " " + r] || c["* " + r]))
                             for (o in c)
                                 if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                     !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                     break
                                 } if (!0 !== s)
                             if (s && t.throws) e = s(e);
                             else try {
                                 e = s(e)
                             } catch (t) {
                                 return {
                                     state: "parsererror",
                                     error: s ? t : "No conversion from " + l + " to " + r
                                 }
                             }
                     }
                     return {
                         state: "success",
                         data: e
                     }
                 }(h, x, C, c), c ? (h.ifModified && ((T = C.getResponseHeader("Last-Modified")) && (g.lastModified[r] = T), (T = C.getResponseHeader("etag")) && (g.etag[r] = T)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, p = x.data, c = !(f = x.error))) : (f = k, !e && k || (k = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (i || k) + "", c ? y.resolveWith(v, [p, k, C]) : y.rejectWith(v, [C, k, f]), C.statusCode(w), w = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]), b.fireWith(v, [C, k]), d && (m.trigger("ajaxComplete", [C, h]), --g.active || g.event.trigger("ajaxStop")))
             }
             return C
         },
         getJSON: function(t, e, i) {
             return g.get(t, e, i, "json")
         },
         getScript: function(t, e) {
             return g.get(t, void 0, e, "script")
         }
     }), g.each(["get", "post"], function(t, e) {
         g[e] = function(t, i, n, o) {
             return g.isFunction(i) && (o = o || n, n = i, i = void 0), g.ajax(g.extend({
                 url: t,
                 type: e,
                 dataType: o,
                 data: i,
                 success: n
             }, g.isPlainObject(t) && t))
         }
     }), g._evalUrl = function(t) {
         return g.ajax({
             url: t,
             type: "GET",
             dataType: "script",
             cache: !0,
             async: !1,
             global: !1,
             throws: !0
         })
     }, g.fn.extend({
         wrapAll: function(t) {
             var e;
             return this[0] && (g.isFunction(t) && (t = t.call(this[0])), e = g(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                 for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                 return t
             }).append(this)), this
         },
         wrapInner: function(t) {
             return g.isFunction(t) ? this.each(function(e) {
                 g(this).wrapInner(t.call(this, e))
             }) : this.each(function() {
                 var e = g(this),
                     i = e.contents();
                 i.length ? i.wrapAll(t) : e.append(t)
             })
         },
         wrap: function(t) {
             var e = g.isFunction(t);
             return this.each(function(i) {
                 g(this).wrapAll(e ? t.call(this, i) : t)
             })
         },
         unwrap: function(t) {
             return this.parent(t).not("body").each(function() {
                 g(this).replaceWith(this.childNodes)
             }), this
         }
     }), g.expr.pseudos.hidden = function(t) {
         return !g.expr.pseudos.visible(t)
     }, g.expr.pseudos.visible = function(t) {
         return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
     }, g.ajaxSettings.xhr = function() {
         try {
             return new t.XMLHttpRequest
         } catch (t) {}
     };
     var Ie = {
             0: 200,
             1223: 204
         },
         qe = g.ajaxSettings.xhr();
     h.cors = !!qe && "withCredentials" in qe, h.ajax = qe = !!qe, g.ajaxTransport(function(e) {
         var i, n;
         if (h.cors || qe && !e.crossDomain) return {
             send: function(o, r) {
                 var s, a = e.xhr();
                 if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                     for (s in e.xhrFields) a[s] = e.xhrFields[s];
                 for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                 i = function(t) {
                     return function() {
                         i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ie[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                             binary: a.response
                         } : {
                             text: a.responseText
                         }, a.getAllResponseHeaders()))
                     }
                 }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                     4 === a.readyState && t.setTimeout(function() {
                         i && n()
                     })
                 }, i = i("abort");
                 try {
                     a.send(e.hasContent && e.data || null)
                 } catch (t) {
                     if (i) throw t
                 }
             },
             abort: function() {
                 i && i()
             }
         }
     }), g.ajaxPrefilter(function(t) {
         t.crossDomain && (t.contents.script = !1)
     }), g.ajaxSetup({
         accepts: {
             script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
         },
         contents: {
             script: /\b(?:java|ecma)script\b/
         },
         converters: {
             "text script": function(t) {
                 return g.globalEval(t), t
             }
         }
     }), g.ajaxPrefilter("script", function(t) {
         void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
     }), g.ajaxTransport("script", function(t) {
         var e, i;
         if (t.crossDomain) return {
             send: function(o, r) {
                 e = g("<script>").prop({
                     charset: t.scriptCharset,
                     src: t.url
                 }).on("load error", i = function(t) {
                     e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                 }), n.head.appendChild(e[0])
             },
             abort: function() {
                 i && i()
             }
         }
     });
     var Le, Me = [],
         He = /(=)\?(?=&|$)|\?\?/;
     g.ajaxSetup({
         jsonp: "callback",
         jsonpCallback: function() {
             var t = Me.pop() || g.expando + "_" + he++;
             return this[t] = !0, t
         }
     }), g.ajaxPrefilter("json jsonp", function(e, i, n) {
         var o, r, s, a = !1 !== e.jsonp && (He.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && He.test(e.data) && "data");
         if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = g.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(He, "$1" + o) : !1 !== e.jsonp && (e.url += (ve.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
             return s || g.error(o + " was not called"), s[0]
         }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
             s = arguments
         }, n.always(function() {
             void 0 === r ? g(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = i.jsonpCallback, Me.push(o)), s && g.isFunction(r) && r(s[0]), s = r = void 0
         }), "script"
     }), h.createHTMLDocument = ((Le = n.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Le.childNodes.length), g.parseHTML = function(t, e, i) {
         return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (h.createHTMLDocument ? ((o = (e = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, e.head.appendChild(o)) : e = n), s = !i && [], (r = E.exec(t)) ? [e.createElement(r[1])] : (r = ht([t], e, s), s && s.length && g(s).remove(), g.merge([], r.childNodes)));
         var o, r, s
     }, g.fn.load = function(t, e, i) {
         var n, o, r, s = this,
             a = t.indexOf(" ");
         return a > -1 && (n = ce(t.slice(a)), t = t.slice(0, a)), g.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && g.ajax({
             url: t,
             type: o || "GET",
             dataType: "html",
             data: e
         }).done(function(t) {
             r = arguments, s.html(n ? g("<div>").append(g.parseHTML(t)).find(n) : t)
         }).always(i && function(t, e) {
             s.each(function() {
                 i.apply(this, r || [t.responseText, e, t])
             })
         }), this
     }, g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
         g.fn[e] = function(t) {
             return this.on(e, t)
         }
     }), g.expr.pseudos.animated = function(t) {
         return g.grep(g.timers, function(e) {
             return t === e.elem
         }).length
     }, g.offset = {
         setOffset: function(t, e, i) {
             var n, o, r, s, a, l, c = g.css(t, "position"),
                 u = g(t),
                 d = {};
             "static" === c && (t.style.position = "relative"), a = u.offset(), r = g.css(t, "top"), l = g.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (n = u.position()).top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), g.isFunction(e) && (e = e.call(t, i, g.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
         }
     }, g.fn.extend({
         offset: function(t) {
             if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                 g.offset.setOffset(this, t, e)
             });
             var e, i, n, o, r = this[0];
             return r ? r.getClientRects().length ? (n = r.getBoundingClientRect(), i = (e = r.ownerDocument).documentElement, o = e.defaultView, {
                 top: n.top + o.pageYOffset - i.clientTop,
                 left: n.left + o.pageXOffset - i.clientLeft
             }) : {
                 top: 0,
                 left: 0
             } : void 0
         },
         position: function() {
             if (this[0]) {
                 var t, e, i = this[0],
                     n = {
                         top: 0,
                         left: 0
                     };
                 return "fixed" === g.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), $(t[0], "html") || (n = t.offset()), n = {
                     top: n.top + g.css(t[0], "borderTopWidth", !0),
                     left: n.left + g.css(t[0], "borderLeftWidth", !0)
                 }), {
                     top: e.top - n.top - g.css(i, "marginTop", !0),
                     left: e.left - n.left - g.css(i, "marginLeft", !0)
                 }
             }
         },
         offsetParent: function() {
             return this.map(function() {
                 for (var t = this.offsetParent; t && "static" === g.css(t, "position");) t = t.offsetParent;
                 return t || vt
             })
         }
     }), g.each({
         scrollLeft: "pageXOffset",
         scrollTop: "pageYOffset"
     }, function(t, e) {
         var i = "pageYOffset" === e;
         g.fn[t] = function(n) {
             return z(this, function(t, n, o) {
                 var r;
                 return g.isWindow(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o ? r ? r[e] : t[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : t[n] = o)
             }, t, n, arguments.length)
         }
     }), g.each(["top", "left"], function(t, e) {
         g.cssHooks[e] = Ht(h.pixelPosition, function(t, i) {
             if (i) return i = Mt(t, e), qt.test(i) ? g(t).position()[e] + "px" : i
         })
     }), g.each({
         Height: "height",
         Width: "width"
     }, function(t, e) {
         g.each({
             padding: "inner" + t,
             content: e,
             "": "outer" + t
         }, function(i, n) {
             g.fn[n] = function(o, r) {
                 var s = arguments.length && (i || "boolean" != typeof o),
                     a = i || (!0 === o || !0 === r ? "margin" : "border");
                 return z(this, function(e, i, o) {
                     var r;
                     return g.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? g.css(e, i, a) : g.style(e, i, o, a)
                 }, e, s ? o : void 0, s)
             }
         })
     }), g.fn.extend({
         bind: function(t, e, i) {
             return this.on(t, null, e, i)
         },
         unbind: function(t, e) {
             return this.off(t, null, e)
         },
         delegate: function(t, e, i, n) {
             return this.on(e, t, i, n)
         },
         undelegate: function(t, e, i) {
             return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
         },
         holdReady: function(t) {
             t ? g.readyWait++ : g.ready(!0)
         }
     }), g.isArray = Array.isArray, g.parseJSON = JSON.parse, g.nodeName = $, "function" == typeof define && define.amd && define("jquery", [], function() {
         return g
     });
     var Re = t.jQuery,
         Fe = t.$;
     return g.noConflict = function(e) {
         return t.$ === g && (t.$ = Fe), e && t.jQuery === g && (t.jQuery = Re), g
     }, e || (t.jQuery = t.$ = g), g
 }),

// jquery ends here


// bootstrap starts from here

 void 0 === jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
var jQuery, Vel;
(function(t) {
 var e = jQuery.fn.jquery.split(" ")[0].split(".");
 if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(), function(t) {
 t.fn.emulateTransitionEnd = function(e) {
     var i = !1,
         n = this;
     t(this).one("bsTransitionEnd", function() {
         i = !0
     });
     return setTimeout(function() {
         i || t(n).trigger(t.support.transition.end)
     }, e), this
 }, t(function() {
     t.support.transition = function() {
         var t = document.createElement("bootstrap"),
             e = {
                 WebkitTransition: "webkitTransitionEnd",
                 MozTransition: "transitionend",
                 OTransition: "oTransitionEnd otransitionend",
                 transition: "transitionend"
             };
         for (var i in e)
             if (void 0 !== t.style[i]) return {
                 end: e[i]
             };
         return !1
     }(), t.support.transition && (t.event.special.bsTransitionEnd = {
         bindType: t.support.transition.end,
         delegateType: t.support.transition.end,
         handle: function(e) {
             if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
         }
     })
 })
}(jQuery), function(t) {
 var e = '[data-dismiss="alert"]',
     i = function(i) {
         t(i).on("click", e, this.close)
     };
 i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
     function n() {
         s.detach().trigger("closed.bs.alert").remove()
     }
     var o = t(this),
         r = o.attr("data-target");
     r || (r = (r = o.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
     var s = t("#" === r ? [] : r);
     e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
 };
 var n = t.fn.alert;
 t.fn.alert = function(e) {
     return this.each(function() {
         var n = t(this),
             o = n.data("bs.alert");
         o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
     })
 }, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
     return t.fn.alert = n, this
 }, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery), function(t) {
 function e(e) {
     return this.each(function() {
         var n = t(this),
             o = n.data("bs.button"),
             r = "object" == typeof e && e;
         o || n.data("bs.button", o = new i(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
     })
 }
 var i = function(e, n) {
     this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
 };
 i.VERSION = "3.3.7", i.DEFAULTS = {
     loadingText: "loading..."
 }, i.prototype.setState = function(e) {
     var i = "disabled",
         n = this.$element,
         o = n.is("input") ? "val" : "html",
         r = n.data();
     e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
         n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
     }, this), 0)
 }, i.prototype.toggle = function() {
     var t = !0,
         e = this.$element.closest('[data-toggle="buttons"]');
     if (e.length) {
         var i = this.$element.find("input");
         "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
     } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
 };
 var n = t.fn.button;
 t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
     return t.fn.button = n, this
 }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
     var n = t(i.target).closest(".btn");
     e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
 }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
     t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
 })
}(jQuery), function(t) {
 function e(e) {
     return this.each(function() {
         var n = t(this),
             o = n.data("bs.carousel"),
             r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
             s = "string" == typeof e ? e : r.slide;
         o || n.data("bs.carousel", o = new i(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
     })
 }
 var i = function(e, i) {
     this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
 };
 i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
     interval: 5e3,
     pause: "hover",
     wrap: !0,
     keyboard: !0
 }, i.prototype.keydown = function(t) {
     if (!/input|textarea/i.test(t.target.tagName)) {
         switch (t.which) {
             case 37:
                 this.prev();
                 break;
             case 39:
                 this.next();
                 break;
             default:
                 return
         }
         t.preventDefault()
     }
 }, i.prototype.cycle = function(e) {
     return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
 }, i.prototype.getItemIndex = function(t) {
     return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
 }, i.prototype.getItemForDirection = function(t, e) {
     var i = this.getItemIndex(e);
     if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
     var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
     return this.$items.eq(n)
 }, i.prototype.to = function(t) {
     var e = this,
         i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
     if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
         e.to(t)
     }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
 }, i.prototype.pause = function(e) {
     return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
 }, i.prototype.next = function() {
     if (!this.sliding) return this.slide("next")
 }, i.prototype.prev = function() {
     if (!this.sliding) return this.slide("prev")
 }, i.prototype.slide = function(e, n) {
     var o = this.$element.find(".item.active"),
         r = n || this.getItemForDirection(e, o),
         s = this.interval,
         a = "next" == e ? "left" : "right",
         l = this;
     if (r.hasClass("active")) return this.sliding = !1;
     var c = r[0],
         u = t.Event("slide.bs.carousel", {
             relatedTarget: c,
             direction: a
         });
     if (this.$element.trigger(u), !u.isDefaultPrevented()) {
         if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
             this.$indicators.find(".active").removeClass("active");
             var d = t(this.$indicators.children()[this.getItemIndex(r)]);
             d && d.addClass("active")
         }
         var p = t.Event("slid.bs.carousel", {
             relatedTarget: c,
             direction: a
         });
         return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
             r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                 l.$element.trigger(p)
             }, 0)
         }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
     }
 };
 var n = t.fn.carousel;
 t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
     return t.fn.carousel = n, this
 };
 var o = function(i) {
     var n, o = t(this),
         r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
     if (r.hasClass("carousel")) {
         var s = t.extend({}, r.data(), o.data()),
             a = o.attr("data-slide-to");
         a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), i.preventDefault()
     }
 };
 t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
     t('[data-ride="carousel"]').each(function() {
         var i = t(this);
         e.call(i, i.data())
     })
 })
}(jQuery), function(t) {
 function e(e) {
     var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
     return t(n)
 }

 function i(e) {
     return this.each(function() {
         var i = t(this),
             o = i.data("bs.collapse"),
             r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
         !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
     })
 }
 var n = function(e, i) {
     this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
 };
 n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
     toggle: !0
 }, n.prototype.dimension = function() {
     return this.$element.hasClass("width") ? "width" : "height"
 }, n.prototype.show = function() {
     if (!this.transitioning && !this.$element.hasClass("in")) {
         var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
         if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
             var r = t.Event("show.bs.collapse");
             if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                 o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                 var s = this.dimension();
                 this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                 var a = function() {
                     this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                 };
                 if (!t.support.transition) return a.call(this);
                 var l = t.camelCase(["scroll", s].join("-"));
                 this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
             }
         }
     }
 }, n.prototype.hide = function() {
     if (!this.transitioning && this.$element.hasClass("in")) {
         var e = t.Event("hide.bs.collapse");
         if (this.$element.trigger(e), !e.isDefaultPrevented()) {
             var i = this.dimension();
             this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
             var o = function() {
                 this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
             };
             return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
         }
     }
 }, n.prototype.toggle = function() {
     this[this.$element.hasClass("in") ? "hide" : "show"]()
 }, n.prototype.getParent = function() {
     return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
         var o = t(n);
         this.addAriaAndCollapsedClass(e(o), o)
     }, this)).end()
 }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
     var i = t.hasClass("in");
     t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
 };
 var o = t.fn.collapse;
 t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
     return t.fn.collapse = o, this
 }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
     var o = t(this);
     o.attr("data-target") || n.preventDefault();
     var r = e(o),
         s = r.data("bs.collapse") ? "toggle" : o.data();
     i.call(r, s)
 })
}(jQuery), function(t) {
 function e(e) {
     var i = e.attr("data-target");
     i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
     var n = i && t(i);
     return n && n.length ? n : e.parent()
 }

 function i(i) {
     i && 3 === i.which || (t(n).remove(), t(o).each(function() {
         var n = t(this),
             o = e(n),
             r = {
                 relatedTarget: this
             };
         o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
     }))
 }
 var n = ".dropdown-backdrop",
     o = '[data-toggle="dropdown"]',
     r = function(e) {
         t(e).on("click.bs.dropdown", this.toggle)
     };
 r.VERSION = "3.3.7", r.prototype.toggle = function(n) {
     var o = t(this);
     if (!o.is(".disabled, :disabled")) {
         var r = e(o),
             s = r.hasClass("open");
         if (i(), !s) {
             "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
             var a = {
                 relatedTarget: this
             };
             if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
             o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
         }
         return !1
     }
 }, r.prototype.keydown = function(i) {
     if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
         var n = t(this);
         if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
             var r = e(n),
                 s = r.hasClass("open");
             if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && r.find(o).trigger("focus"), n.trigger("click");
             var a = r.find(".dropdown-menu li:not(.disabled):visible a");
             if (a.length) {
                 var l = a.index(i.target);
                 38 == i.which && l > 0 && l--, 40 == i.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
             }
         }
     }
 };
 var s = t.fn.dropdown;
 t.fn.dropdown = function(e) {
     return this.each(function() {
         var i = t(this),
             n = i.data("bs.dropdown");
         n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
     })
 }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
     return t.fn.dropdown = s, this
 }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
     t.stopPropagation()
 }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), function(t) {
 function e(e, n) {
     return this.each(function() {
         var o = t(this),
             r = o.data("bs.modal"),
             s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
         r || o.data("bs.modal", r = new i(this, s)), "string" == typeof e ? r[e](n) : s.show && r.show(n)
     })
 }
 var i = function(e, i) {
     this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
         this.$element.trigger("loaded.bs.modal")
     }, this))
 };
 i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
     backdrop: !0,
     keyboard: !0,
     show: !0
 }, i.prototype.toggle = function(t) {
     return this.isShown ? this.hide() : this.show(t)
 }, i.prototype.show = function(e) {
     var n = this,
         o = t.Event("show.bs.modal", {
             relatedTarget: e
         });
     this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
         n.$element.one("mouseup.dismiss.bs.modal", function(e) {
             t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
         })
     }), this.backdrop(function() {
         var o = t.support.transition && n.$element.hasClass("fade");
         n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
         var r = t.Event("shown.bs.modal", {
             relatedTarget: e
         });
         o ? n.$dialog.one("bsTransitionEnd", function() {
             n.$element.trigger("focus").trigger(r)
         }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
     }))
 }, i.prototype.hide = function(e) {
     e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
 }, i.prototype.enforceFocus = function() {
     t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
         document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
     }, this))
 }, i.prototype.escape = function() {
     this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
         27 == t.which && this.hide()
     }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
 }, i.prototype.resize = function() {
     this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
 }, i.prototype.hideModal = function() {
     var t = this;
     this.$element.hide(), this.backdrop(function() {
         t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
     })
 }, i.prototype.removeBackdrop = function() {
     this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
 }, i.prototype.backdrop = function(e) {
     var n = this,
         o = this.$element.hasClass("fade") ? "fade" : "";
     if (this.isShown && this.options.backdrop) {
         var r = t.support.transition && o;
         if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                 return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
             }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
         r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
     } else if (!this.isShown && this.$backdrop) {
         this.$backdrop.removeClass("in");
         var s = function() {
             n.removeBackdrop(), e && e()
         };
         t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
     } else e && e()
 }, i.prototype.handleUpdate = function() {
     this.adjustDialog()
 }, i.prototype.adjustDialog = function() {
     var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
     this.$element.css({
         paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
         paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
     })
 }, i.prototype.resetAdjustments = function() {
     this.$element.css({
         paddingLeft: "",
         paddingRight: ""
     })
 }, i.prototype.checkScrollbar = function() {
     var t = window.innerWidth;
     if (!t) {
         var e = document.documentElement.getBoundingClientRect();
         t = e.right - Math.abs(e.left)
     }
     this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
 }, i.prototype.setScrollbar = function() {
     var t = parseInt(this.$body.css("padding-right") || 0, 10);
     this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
 }, i.prototype.resetScrollbar = function() {
     this.$body.css("padding-right", this.originalBodyPad)
 }, i.prototype.measureScrollbar = function() {
     var t = document.createElement("div");
     t.className = "modal-scrollbar-measure", this.$body.append(t);
     var e = t.offsetWidth - t.clientWidth;
     return this.$body[0].removeChild(t), e
 };
 var n = t.fn.modal;
 t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
     return t.fn.modal = n, this
 }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
     var n = t(this),
         o = n.attr("href"),
         r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
         s = r.data("bs.modal") ? "toggle" : t.extend({
             remote: !/#/.test(o) && o
         }, r.data(), n.data());
     n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
         t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
             n.is(":visible") && n.trigger("focus")
         })
     }), e.call(r, s, this)
 })
}(jQuery), function(t) {
 var e = function(t, e) {
     this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
 };
 e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
     animation: !0,
     placement: "top",
     selector: !1,
     template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
     trigger: "hover focus",
     title: "",
     delay: 0,
     html: !1,
     container: !1,
     viewport: {
         selector: "body",
         padding: 0
     }
 }, e.prototype.init = function(e, i, n) {
     if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
             click: !1,
             hover: !1,
             focus: !1
         }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
     for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
         var s = o[r];
         if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
         else if ("manual" != s) {
             var a = "hover" == s ? "mouseenter" : "focusin",
                 l = "hover" == s ? "mouseleave" : "focusout";
             this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
         }
     }
     this.options.selector ? this._options = t.extend({}, this.options, {
         trigger: "manual",
         selector: ""
     }) : this.fixTitle()
 }, e.prototype.getDefaults = function() {
     return e.DEFAULTS
 }, e.prototype.getOptions = function(e) {
     return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
         show: e.delay,
         hide: e.delay
     }), e
 }, e.prototype.getDelegateOptions = function() {
     var e = {},
         i = this.getDefaults();
     return this._options && t.each(this._options, function(t, n) {
         i[t] != n && (e[t] = n)
     }), e
 }, e.prototype.enter = function(e) {
     var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
     return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
         "in" == i.hoverState && i.show()
     }, i.options.delay.show)) : i.show())
 }, e.prototype.isInStateTrue = function() {
     for (var t in this.inState)
         if (this.inState[t]) return !0;
     return !1
 }, e.prototype.leave = function(e) {
     var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
     if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
         "out" == i.hoverState && i.hide()
     }, i.options.delay.hide)) : i.hide()
 }, e.prototype.show = function() {
     var i = t.Event("show.bs." + this.type);
     if (this.hasContent() && this.enabled) {
         this.$element.trigger(i);
         var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
         if (i.isDefaultPrevented() || !n) return;
         var o = this,
             r = this.tip(),
             s = this.getUID(this.type);
         this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
         var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
             l = /\s?auto?\s?/i,
             c = l.test(a);
         c && (a = a.replace(l, "") || "top"), r.detach().css({
             top: 0,
             left: 0,
             display: "block"
         }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
         var u = this.getPosition(),
             d = r[0].offsetWidth,
             p = r[0].offsetHeight;
         if (c) {
             var f = a,
                 h = this.getPosition(this.$viewport);
             a = "bottom" == a && u.bottom + p > h.bottom ? "top" : "top" == a && u.top - p < h.top ? "bottom" : "right" == a && u.right + d > h.width ? "left" : "left" == a && u.left - d < h.left ? "right" : a, r.removeClass(f).addClass(a)
         }
         var v = this.getCalculatedOffset(a, u, d, p);
         this.applyPlacement(v, a);
         var g = function() {
             var t = o.hoverState;
             o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
         };
         t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(e.TRANSITION_DURATION) : g()
     }
 }, e.prototype.applyPlacement = function(e, i) {
     var n = this.tip(),
         o = n[0].offsetWidth,
         r = n[0].offsetHeight,
         s = parseInt(n.css("margin-top"), 10),
         a = parseInt(n.css("margin-left"), 10);
     isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
         using: function(t) {
             n.css({
                 top: Math.round(t.top),
                 left: Math.round(t.left)
             })
         }
     }, e), 0), n.addClass("in");
     var l = n[0].offsetWidth,
         c = n[0].offsetHeight;
     "top" == i && c != r && (e.top = e.top + r - c);
     var u = this.getViewportAdjustedDelta(i, e, l, c);
     u.left ? e.left += u.left : e.top += u.top;
     var d = /top|bottom/.test(i),
         p = d ? 2 * u.left - o + l : 2 * u.top - r + c,
         f = d ? "offsetWidth" : "offsetHeight";
     n.offset(e), this.replaceArrow(p, n[0][f], d)
 }, e.prototype.replaceArrow = function(t, e, i) {
     this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
 }, e.prototype.setContent = function() {
     var t = this.tip(),
         e = this.getTitle();
     t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
 }, e.prototype.hide = function(i) {
     function n() {
         "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), i && i()
     }
     var o = this,
         r = t(this.$tip),
         s = t.Event("hide.bs." + this.type);
     if (this.$element.trigger(s), !s.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this
 }, e.prototype.fixTitle = function() {
     var t = this.$element;
     (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
 }, e.prototype.hasContent = function() {
     return this.getTitle()
 }, e.prototype.getPosition = function(e) {
     var i = (e = e || this.$element)[0],
         n = "BODY" == i.tagName,
         o = i.getBoundingClientRect();
     null == o.width && (o = t.extend({}, o, {
         width: o.right - o.left,
         height: o.bottom - o.top
     }));
     var r = window.SVGElement && i instanceof window.SVGElement,
         s = n ? {
             top: 0,
             left: 0
         } : r ? null : e.offset(),
         a = {
             scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
         },
         l = n ? {
             width: t(window).width(),
             height: t(window).height()
         } : null;
     return t.extend({}, o, a, l, s)
 }, e.prototype.getCalculatedOffset = function(t, e, i, n) {
     return "bottom" == t ? {
         top: e.top + e.height,
         left: e.left + e.width / 2 - i / 2
     } : "top" == t ? {
         top: e.top - n,
         left: e.left + e.width / 2 - i / 2
     } : "left" == t ? {
         top: e.top + e.height / 2 - n / 2,
         left: e.left - i
     } : {
         top: e.top + e.height / 2 - n / 2,
         left: e.left + e.width
     }
 }, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
     var o = {
         top: 0,
         left: 0
     };
     if (!this.$viewport) return o;
     var r = this.options.viewport && this.options.viewport.padding || 0,
         s = this.getPosition(this.$viewport);
     if (/right|left/.test(t)) {
         var a = e.top - r - s.scroll,
             l = e.top + r - s.scroll + n;
         a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
     } else {
         var c = e.left - r,
             u = e.left + r + i;
         c < s.left ? o.left = s.left - c : u > s.right && (o.left = s.left + s.width - u)
     }
     return o
 }, e.prototype.getTitle = function() {
     var t = this.$element,
         e = this.options;
     return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
 }, e.prototype.getUID = function(t) {
     do {
         t += ~~(1e6 * Math.random())
     } while (document.getElementById(t));
     return t
 }, e.prototype.tip = function() {
     if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
     return this.$tip
 }, e.prototype.arrow = function() {
     return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
 }, e.prototype.enable = function() {
     this.enabled = !0
 }, e.prototype.disable = function() {
     this.enabled = !1
 }, e.prototype.toggleEnabled = function() {
     this.enabled = !this.enabled
 }, e.prototype.toggle = function(e) {
     var i = this;
     e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
 }, e.prototype.destroy = function() {
     var t = this;
     clearTimeout(this.timeout), this.hide(function() {
         t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
     })
 };
 var i = t.fn.tooltip;
 t.fn.tooltip = function(i) {
     return this.each(function() {
         var n = t(this),
             o = n.data("bs.tooltip"),
             r = "object" == typeof i && i;
         !o && /destroy|hide/.test(i) || (o || n.data("bs.tooltip", o = new e(this, r)), "string" == typeof i && o[i]())
     })
 }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
     return t.fn.tooltip = i, this
 }
}(jQuery), function(t) {
 var e = function(t, e) {
     this.init("popover", t, e)
 };
 if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
 e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
     placement: "right",
     trigger: "click",
     content: "",
     template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
 }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
     return e.DEFAULTS
 }, e.prototype.setContent = function() {
     var t = this.tip(),
         e = this.getTitle(),
         i = this.getContent();
     t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
 }, e.prototype.hasContent = function() {
     return this.getTitle() || this.getContent()
 }, e.prototype.getContent = function() {
     var t = this.$element,
         e = this.options;
     return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
 }, e.prototype.arrow = function() {
     return this.$arrow = this.$arrow || this.tip().find(".arrow")
 };
 var i = t.fn.popover;
 t.fn.popover = function(i) {
     return this.each(function() {
         var n = t(this),
             o = n.data("bs.popover"),
             r = "object" == typeof i && i;
         !o && /destroy|hide/.test(i) || (o || n.data("bs.popover", o = new e(this, r)), "string" == typeof i && o[i]())
     })
 }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
     return t.fn.popover = i, this
 }
}(jQuery), function(t) {
 function e(i, n) {
     this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
 }

 function i(i) {
     return this.each(function() {
         var n = t(this),
             o = n.data("bs.scrollspy"),
             r = "object" == typeof i && i;
         o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
     })
 }
 e.VERSION = "3.3.7", e.DEFAULTS = {
     offset: 10
 }, e.prototype.getScrollHeight = function() {
     return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
 }, e.prototype.refresh = function() {
     var e = this,
         i = "offset",
         n = 0;
     this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
         var e = t(this),
             o = e.data("target") || e.attr("href"),
             r = /^#./.test(o) && t(o);
         return r && r.length && r.is(":visible") && [
             [r[i]().top + n, o]
         ] || null
     }).sort(function(t, e) {
         return t[0] - e[0]
     }).each(function() {
         e.offsets.push(this[0]), e.targets.push(this[1])
     })
 }, e.prototype.process = function() {
     var t, e = this.$scrollElement.scrollTop() + this.options.offset,
         i = this.getScrollHeight(),
         n = this.options.offset + i - this.$scrollElement.height(),
         o = this.offsets,
         r = this.targets,
         s = this.activeTarget;
     if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
     if (s && e < o[0]) return this.activeTarget = null, this.clear();
     for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
 }, e.prototype.activate = function(e) {
     this.activeTarget = e, this.clear();
     var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
         n = t(i).parents("li").addClass("active");
     n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
 }, e.prototype.clear = function() {
     t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
 };
 var n = t.fn.scrollspy;
 t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
     return t.fn.scrollspy = n, this
 }, t(window).on("load.bs.scrollspy.data-api", function() {
     t('[data-spy="scroll"]').each(function() {
         var e = t(this);
         i.call(e, e.data())
     })
 })
}(jQuery), function(t) {
 function e(e) {
     return this.each(function() {
         var n = t(this),
             o = n.data("bs.tab");
         o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
     })
 }
 var i = function(e) {
     this.element = t(e)
 };
 i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
     var e = this.element,
         i = e.closest("ul:not(.dropdown-menu)"),
         n = e.data("target");
     if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
         var o = i.find(".active:last a"),
             r = t.Event("hide.bs.tab", {
                 relatedTarget: e[0]
             }),
             s = t.Event("show.bs.tab", {
                 relatedTarget: o[0]
             });
         if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
             var a = t(n);
             this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                 o.trigger({
                     type: "hidden.bs.tab",
                     relatedTarget: e[0]
                 }), e.trigger({
                     type: "shown.bs.tab",
                     relatedTarget: o[0]
                 })
             })
         }
     }
 }, i.prototype.activate = function(e, n, o) {
     function r() {
         s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
     }
     var s = n.find("> .active"),
         a = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
     s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), s.removeClass("in")
 };
 var n = t.fn.tab;
 t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
     return t.fn.tab = n, this
 };
 var o = function(i) {
     i.preventDefault(), e.call(t(this), "show")
 };
 t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), function(t) {
 function e(e) {
     return this.each(function() {
         var n = t(this),
             o = n.data("bs.affix"),
             r = "object" == typeof e && e;
         o || n.data("bs.affix", o = new i(this, r)), "string" == typeof e && o[e]()
     })
 }
 var i = function(e, n) {
     this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
 };
 i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
     offset: 0,
     target: window
 }, i.prototype.getState = function(t, e, i, n) {
     var o = this.$target.scrollTop(),
         r = this.$element.offset(),
         s = this.$target.height();
     if (null != i && "top" == this.affixed) return o < i && "top";
     if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - n) && "bottom";
     var a = null == this.affixed,
         l = a ? o : r.top;
     return null != i && o <= i ? "top" : null != n && l + (a ? s : e) >= t - n && "bottom"
 }, i.prototype.getPinnedOffset = function() {
     if (this.pinnedOffset) return this.pinnedOffset;
     this.$element.removeClass(i.RESET).addClass("affix");
     var t = this.$target.scrollTop(),
         e = this.$element.offset();
     return this.pinnedOffset = e.top - t
 }, i.prototype.checkPositionWithEventLoop = function() {
     setTimeout(t.proxy(this.checkPosition, this), 1)
 }, i.prototype.checkPosition = function() {
     if (this.$element.is(":visible")) {
         var e = this.$element.height(),
             n = this.options.offset,
             o = n.top,
             r = n.bottom,
             s = Math.max(t(document).height(), t(document.body).height());
         "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
         var a = this.getState(s, e, o, r);
         if (this.affixed != a) {
             null != this.unpin && this.$element.css("top", "");
             var l = "affix" + (a ? "-" + a : ""),
                 c = t.Event(l + ".bs.affix");
             if (this.$element.trigger(c), c.isDefaultPrevented()) return;
             this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
         }
         "bottom" == a && this.$element.offset({
             top: s - e - r
         })
     }
 };
 var n = t.fn.affix;
 t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
     return t.fn.affix = n, this
 }, t(window).on("load", function() {
     t('[data-spy="affix"]').each(function() {
         var i = t(this),
             n = i.data();
         n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
     })
 })
}(jQuery),

// bootstrap ends here

// materilize js here

void 0 === jQuery) && (jQuery = "function" == typeof require ? $ = require("jQuery") : $);
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
     def: "easeOutQuad",
     swing: function(t, e, i, n, o) {
         return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
     },
     easeInQuad: function(t, e, i, n, o) {
         return n * (e /= o) * e + i
     },
     easeOutQuad: function(t, e, i, n, o) {
         return -n * (e /= o) * (e - 2) + i
     },
     easeInOutQuad: function(t, e, i, n, o) {
         return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
     },
     easeInCubic: function(t, e, i, n, o) {
         return n * (e /= o) * e * e + i
     },
     easeOutCubic: function(t, e, i, n, o) {
         return n * ((e = e / o - 1) * e * e + 1) + i
     },
     easeInOutCubic: function(t, e, i, n, o) {
         return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
     },
     easeInQuart: function(t, e, i, n, o) {
         return n * (e /= o) * e * e * e + i
     },
     easeOutQuart: function(t, e, i, n, o) {
         return -n * ((e = e / o - 1) * e * e * e - 1) + i
     },
     easeInOutQuart: function(t, e, i, n, o) {
         return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
     },
     easeInQuint: function(t, e, i, n, o) {
         return n * (e /= o) * e * e * e * e + i
     },
     easeOutQuint: function(t, e, i, n, o) {
         return n * ((e = e / o - 1) * e * e * e * e + 1) + i
     },
     easeInOutQuint: function(t, e, i, n, o) {
         return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
     },
     easeInSine: function(t, e, i, n, o) {
         return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
     },
     easeOutSine: function(t, e, i, n, o) {
         return n * Math.sin(e / o * (Math.PI / 2)) + i
     },
     easeInOutSine: function(t, e, i, n, o) {
         return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
     },
     easeInExpo: function(t, e, i, n, o) {
         return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
     },
     easeOutExpo: function(t, e, i, n, o) {
         return e == o ? i + n : n * (1 - Math.pow(2, -10 * e / o)) + i
     },
     easeInOutExpo: function(t, e, i, n, o) {
         return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
     },
     easeInCirc: function(t, e, i, n, o) {
         return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
     },
     easeOutCirc: function(t, e, i, n, o) {
         return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
     },
     easeInOutCirc: function(t, e, i, n, o) {
         return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
     },
     easeInElastic: function(t, e, i, n, o) {
         var r = 1.70158,
             s = 0,
             a = n;
         if (0 == e) return i;
         if (1 == (e /= o)) return i + n;
         if (s || (s = .3 * o), a < Math.abs(n)) {
             a = n;
             r = s / 4
         } else r = s / (2 * Math.PI) * Math.asin(n / a);
         return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) + i
     },
     easeOutElastic: function(t, e, i, n, o) {
         var r = 1.70158,
             s = 0,
             a = n;
         if (0 == e) return i;
         if (1 == (e /= o)) return i + n;
         if (s || (s = .3 * o), a < Math.abs(n)) {
             a = n;
             r = s / 4
         } else r = s / (2 * Math.PI) * Math.asin(n / a);
         return a * Math.pow(2, -10 * e) * Math.sin((e * o - r) * (2 * Math.PI) / s) + n + i
     },
     easeInOutElastic: function(t, e, i, n, o) {
         var r = 1.70158,
             s = 0,
             a = n;
         if (0 == e) return i;
         if (2 == (e /= o / 2)) return i + n;
         if (s || (s = o * (.3 * 1.5)), a < Math.abs(n)) {
             a = n;
             r = s / 4
         } else r = s / (2 * Math.PI) * Math.asin(n / a);
         return 1 > e ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * -.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - r) * (2 * Math.PI) / s) * .5 + n + i
     },
     easeInBack: function(t, e, i, n, o, r) {
         return null == r && (r = 1.70158), n * (e /= o) * e * ((r + 1) * e - r) + i
     },
     easeOutBack: function(t, e, i, n, o, r) {
         return null == r && (r = 1.70158), n * ((e = e / o - 1) * e * ((r + 1) * e + r) + 1) + i
     },
     easeInOutBack: function(t, e, i, n, o, r) {
         return null == r && (r = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + i : n / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + i
     },
     easeInBounce: function(t, e, i, n, o) {
         return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
     },
     easeOutBounce: function(t, e, i, n, o) {
         return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
     },
     easeInOutBounce: function(t, e, i, n, o) {
         return o / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
     }
 }), jQuery.extend(jQuery.easing, {
     easeInOutMaterial: function(t, e, i, n, o) {
         return (e /= o / 2) < 1 ? n / 2 * e * e + i : n / 4 * ((e -= 2) * e * e + 2) + i
     }
 }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(t) {
     function e(t) {
         var e = t.length,
             n = i.type(t);
         return "function" !== n && !i.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
     }
     if (!t.jQuery) {
         var i = function(t, e) {
             return new i.fn.init(t, e)
         };
         i.isWindow = function(t) {
             return null != t && t == t.window
         }, i.type = function(t) {
             return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[s.call(t)] || "object" : typeof t
         }, i.isArray = Array.isArray || function(t) {
             return "array" === i.type(t)
         }, i.isPlainObject = function(t) {
             var e;
             if (!t || "object" !== i.type(t) || t.nodeType || i.isWindow(t)) return !1;
             try {
                 if (t.constructor && !r.call(t, "constructor") && !r.call(t.constructor.prototype, "isPrototypeOf")) return !1
             } catch (t) {
                 return !1
             }
             for (e in t);
             return void 0 === e || r.call(t, e)
         }, i.each = function(t, i, n) {
             var o = 0,
                 r = t.length,
                 s = e(t);
             if (n) {
                 if (s)
                     for (; r > o && !1 !== i.apply(t[o], n); o++);
                 else
                     for (o in t)
                         if (!1 === i.apply(t[o], n)) break
             } else if (s)
                 for (; r > o && !1 !== i.call(t[o], o, t[o]); o++);
             else
                 for (o in t)
                     if (!1 === i.call(t[o], o, t[o])) break;
             return t
         }, i.data = function(t, e, o) {
             if (void 0 === o) {
                 var r = (s = t[i.expando]) && n[s];
                 if (void 0 === e) return r;
                 if (r && e in r) return r[e]
             } else if (void 0 !== e) {
                 var s = t[i.expando] || (t[i.expando] = ++i.uuid);
                 return n[s] = n[s] || {}, n[s][e] = o, o
             }
         }, i.removeData = function(t, e) {
             var o = t[i.expando],
                 r = o && n[o];
             r && i.each(e, function(t, e) {
                 delete r[e]
             })
         }, i.extend = function() {
             var t, e, n, o, r, s, a = arguments[0] || {},
                 l = 1,
                 c = arguments.length,
                 u = !1;
             for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== i.type(a) && (a = {}), l === c && (a = this, l--); c > l; l++)
                 if (null != (r = arguments[l]))
                     for (o in r) t = a[o], a !== (n = r[o]) && (u && n && (i.isPlainObject(n) || (e = i.isArray(n))) ? (e ? (e = !1, s = t && i.isArray(t) ? t : []) : s = t && i.isPlainObject(t) ? t : {}, a[o] = i.extend(u, s, n)) : void 0 !== n && (a[o] = n));
             return a
         }, i.queue = function(t, n, o) {
             if (t) {
                 n = (n || "fx") + "queue";
                 var r = i.data(t, n);
                 return o ? (!r || i.isArray(o) ? r = i.data(t, n, (l = a || [], null != (s = o) && (e(Object(s)) ? function(t, e) {
                     for (var i = +e.length, n = 0, o = t.length; i > n;) t[o++] = e[n++];
                     if (i != i)
                         for (; void 0 !== e[n];) t[o++] = e[n++];
                     t.length = o
                 }(l, "string" == typeof s ? [s] : s) : [].push.call(l, s)), l)) : r.push(o), r) : r || []
             }
             var s, a, l
         }, i.dequeue = function(t, e) {
             i.each(t.nodeType ? [t] : t, function(t, n) {
                 e = e || "fx";
                 var o = i.queue(n, e),
                     r = o.shift();
                 "inprogress" === r && (r = o.shift()), r && ("fx" === e && o.unshift("inprogress"), r.call(n, function() {
                     i.dequeue(n, e)
                 }))
             })
         }, i.fn = i.prototype = {
             init: function(t) {
                 if (t.nodeType) return this[0] = t, this;
                 throw new Error("Not a DOM node.")
             },
             offset: function() {
                 var e = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                     top: 0,
                     left: 0
                 };
                 return {
                     top: e.top + (t.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                     left: e.left + (t.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                 }
             },
             position: function() {
                 function t() {
                     for (var t = this.offsetParent || document; t && "html" === !t.nodeType.toLowerCase && "static" === t.style.position;) t = t.offsetParent;
                     return t || document
                 }
                 var e = this[0],
                     t = t.apply(e),
                     n = this.offset(),
                     o = /^(?:body|html)$/i.test(t.nodeName) ? {
                         top: 0,
                         left: 0
                     } : i(t).offset();
                 return n.top -= parseFloat(e.style.marginTop) || 0, n.left -= parseFloat(e.style.marginLeft) || 0, t.style && (o.top += parseFloat(t.style.borderTopWidth) || 0, o.left += parseFloat(t.style.borderLeftWidth) || 0), {
                     top: n.top - o.top,
                     left: n.left - o.left
                 }
             }
         };
         var n = {};
         i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
         for (var o = {}, r = o.hasOwnProperty, s = o.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) o["[object " + a[l] + "]"] = a[l].toLowerCase();
         i.fn.init.prototype = i.fn, t.Velocity = {
             Utilities: i
         }
     }
 }(window), function(t) {
     "object" == typeof module && "object" == typeof module.exports ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : t()
 }(function() {
     return function(t, e, i, n) {
         function o(t) {
             return h.isWrapped(t) ? t = [].slice.call(t) : h.isNode(t) && (t = [t]), t
         }

         function r(t) {
             var e = u.data(t, "velocity");
             return null === e ? n : e
         }

         function s(t, i, n, o) {
             function r(t, e) {
                 return 1 - 3 * e + 3 * t
             }

             function s(t, e) {
                 return 3 * e - 6 * t
             }

             function a(t) {
                 return 3 * t
             }

             function l(t, e, i) {
                 return ((r(e, i) * t + s(e, i)) * t + a(e)) * t
             }

             function c(t, e, i) {
                 return 3 * r(e, i) * t * t + 2 * s(e, i) * t + a(e)
             }

             function u(e) {
                 for (var i = 0, o = 1, r = g - 1; o != r && w[o] <= e; ++o) i += m;
                 var s = i + (e - w[--o]) / (w[o + 1] - w[o]) * m,
                     a = c(s, t, n);
                 return a >= f ? function(e, i) {
                     for (var o = 0; p > o; ++o) {
                         var r = c(i, t, n);
                         if (0 === r) return i;
                         i -= (l(i, t, n) - e) / r
                     }
                     return i
                 }(e, s) : 0 == a ? s : function(e, i, o) {
                     var r, s, a = 0;
                     do {
                         (r = l(s = i + (o - i) / 2, t, n) - e) > 0 ? o = s : i = s
                     } while (Math.abs(r) > h && ++a < v);
                     return s
                 }(e, i, i + m)
             }

             function d() {
                 x = !0, (t != i || n != o) && function() {
                     for (var e = 0; g > e; ++e) w[e] = l(e * m, t, n)
                 }()
             }
             var p = 4,
                 f = .001,
                 h = 1e-7,
                 v = 10,
                 g = 11,
                 m = 1 / (g - 1),
                 y = "Float32Array" in e;
             if (4 !== arguments.length) return !1;
             for (var b = 0; 4 > b; ++b)
                 if ("number" != typeof arguments[b] || isNaN(arguments[b]) || !isFinite(arguments[b])) return !1;
             t = Math.min(t, 1), n = Math.min(n, 1), t = Math.max(t, 0), n = Math.max(n, 0);
             var w = y ? new Float32Array(g) : new Array(g),
                 x = !1,
                 T = function(e) {
                     return x || d(), t === i && n === o ? e : 0 === e ? 0 : 1 === e ? 1 : l(u(e), i, o)
                 };
             T.getControlPoints = function() {
                 return [{
                     x: t,
                     y: i
                 }, {
                     x: n,
                     y: o
                 }]
             };
             var k = "generateBezier(" + [t, i, n, o] + ")";
             return T.toString = function() {
                 return k
             }, T
         }

         function a(t, e) {
             var i = t;
             return h.isString(t) ? y.Easings[t] || (i = !1) : i = h.isArray(t) && 1 === t.length ? function(t) {
                 return function(e) {
                     return Math.round(e * t) * (1 / t)
                 }
             }.apply(null, t) : h.isArray(t) && 2 === t.length ? b.apply(null, t.concat([e])) : !(!h.isArray(t) || 4 !== t.length) && s.apply(null, t), !1 === i && (i = y.Easings[y.defaults.easing] ? y.defaults.easing : m), i
         }

         function l(t) {
             if (t) {
                 var e = (new Date).getTime(),
                     i = y.State.calls.length;
                 i > 1e4 && (y.State.calls = function(t) {
                     for (var e = -1, i = t ? t.length : 0, n = []; ++e < i;) {
                         var o = t[e];
                         o && n.push(o)
                     }
                     return n
                 }(y.State.calls));
                 for (var o = 0; i > o; o++)
                     if (y.State.calls[o]) {
                         var s = y.State.calls[o],
                             a = s[0],
                             d = s[2],
                             p = s[3],
                             f = !!p,
                             v = null;
                         p || (p = y.State.calls[o][3] = e - 16);
                         for (var g = Math.min((e - p) / d.duration, 1), m = 0, b = a.length; b > m; m++) {
                             var x = a[m],
                                 k = x.element;
                             if (r(k)) {
                                 var C = !1;
                                 if (d.display !== n && null !== d.display && "none" !== d.display) {
                                     if ("flex" === d.display) {
                                         u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(t, e) {
                                             w.setPropertyValue(k, "display", e)
                                         })
                                     }
                                     w.setPropertyValue(k, "display", d.display)
                                 }
                                 for (var S in d.visibility !== n && "hidden" !== d.visibility && w.setPropertyValue(k, "visibility", d.visibility), x)
                                     if ("element" !== S) {
                                         var $, E = x[S],
                                             A = h.isString(E.easing) ? y.Easings[E.easing] : E.easing;
                                         if (1 === g) $ = E.endValue;
                                         else {
                                             var O = E.endValue - E.startValue;
                                             if ($ = E.startValue + O * A(g, d, O), !f && $ === E.currentValue) continue
                                         }
                                         if (E.currentValue = $, "tween" === S) v = $;
                                         else {
                                             if (w.Hooks.registered[S]) {
                                                 var P = w.Hooks.getRoot(S),
                                                     D = r(k).rootPropertyValueCache[P];
                                                 D && (E.rootPropertyValue = D)
                                             }
                                             var j = w.setPropertyValue(k, S, E.currentValue + (0 === parseFloat($) ? "" : E.unitType), E.rootPropertyValue, E.scrollData);
                                             w.Hooks.registered[S] && (r(k).rootPropertyValueCache[P] = w.Normalizations.registered[P] ? w.Normalizations.registered[P]("extract", null, j[1]) : j[1]), "transform" === j[0] && (C = !0)
                                         }
                                     } d.mobileHA && r(k).transformCache.translate3d === n && (r(k).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && w.flushTransformCache(k)
                             }
                         }
                         d.display !== n && "none" !== d.display && (y.State.calls[o][2].display = !1), d.visibility !== n && "hidden" !== d.visibility && (y.State.calls[o][2].visibility = !1), d.progress && d.progress.call(s[1], s[1], g, Math.max(0, p + d.duration - e), p, v), 1 === g && c(o)
                     }
             }
             y.State.isTicking && T(l)
         }

         function c(t, e) {
             if (!y.State.calls[t]) return !1;
             for (var i = y.State.calls[t][0], o = y.State.calls[t][1], s = y.State.calls[t][2], a = y.State.calls[t][4], l = !1, c = 0, d = i.length; d > c; c++) {
                 var p = i[c].element;
                 if (e || s.loop || ("none" === s.display && w.setPropertyValue(p, "display", s.display), "hidden" === s.visibility && w.setPropertyValue(p, "visibility", s.visibility)), !0 !== s.loop && (u.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(u.queue(p)[1])) && r(p)) {
                     r(p).isAnimating = !1, r(p).rootPropertyValueCache = {};
                     var f = !1;
                     u.each(w.Lists.transforms3D, function(t, e) {
                         var i = /^scale/.test(e) ? 1 : 0,
                             o = r(p).transformCache[e];
                         r(p).transformCache[e] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (f = !0, delete r(p).transformCache[e])
                     }), s.mobileHA && (f = !0, delete r(p).transformCache.translate3d), f && w.flushTransformCache(p), w.Values.removeClass(p, "velocity-animating")
                 }
                 if (!e && s.complete && !s.loop && c === d - 1) try {
                     s.complete.call(o, o)
                 } catch (t) {
                     setTimeout(function() {
                         throw t
                     }, 1)
                 }
                 a && !0 !== s.loop && a(o), r(p) && !0 === s.loop && !e && (u.each(r(p).tweensContainer, function(t, e) {
                     /^rotate/.test(t) && 360 === parseFloat(e.endValue) && (e.endValue = 0, e.startValue = 360), /^backgroundPosition/.test(t) && 100 === parseFloat(e.endValue) && "%" === e.unitType && (e.endValue = 0, e.startValue = 100)
                 }), y(p, "reverse", {
                     loop: !0,
                     delay: s.delay
                 })), !1 !== s.queue && u.dequeue(p, s.queue)
             }
             y.State.calls[t] = !1;
             for (var h = 0, v = y.State.calls.length; v > h; h++)
                 if (!1 !== y.State.calls[h]) {
                     l = !0;
                     break
                 }! 1 === l && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = [])
         }
         var u, d, p = function() {
                 if (i.documentMode) return i.documentMode;
                 for (var t = 7; t > 4; t--) {
                     var e = i.createElement("div");
                     if (e.innerHTML = "\x3c!--[if IE " + t + "]><span></span><![endif]--\x3e", e.getElementsByTagName("span").length) return e = null, t
                 }
                 return n
             }(),
             f = (d = 0, e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || function(t) {
                 var e, i = (new Date).getTime();
                 return e = Math.max(0, 16 - (i - d)), d = i + e, setTimeout(function() {
                     t(i + e)
                 }, e)
             }),
             h = {
                 isString: function(t) {
                     return "string" == typeof t
                 },
                 isArray: Array.isArray || function(t) {
                     return "[object Array]" === Object.prototype.toString.call(t)
                 },
                 isFunction: function(t) {
                     return "[object Function]" === Object.prototype.toString.call(t)
                 },
                 isNode: function(t) {
                     return t && t.nodeType
                 },
                 isNodeList: function(t) {
                     return "object" == typeof t && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(t)) && t.length !== n && (0 === t.length || "object" == typeof t[0] && t[0].nodeType > 0)
                 },
                 isWrapped: function(t) {
                     return t && (t.jquery || e.Zepto && e.Zepto.zepto.isZ(t))
                 },
                 isSVG: function(t) {
                     return e.SVGElement && t instanceof e.SVGElement
                 },
                 isEmptyObject: function(t) {
                     for (var e in t) return !1;
                     return !0
                 }
             },
             v = !1;
         if (t.fn && t.fn.jquery ? (u = t, v = !0) : u = e.Velocity.Utilities, 8 >= p && !v) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
         if (!(7 >= p)) {
             var g = 400,
                 m = "swing",
                 y = {
                     State: {
                         isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                         isAndroid: /Android/i.test(navigator.userAgent),
                         isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                         isChrome: e.chrome,
                         isFirefox: /Firefox/i.test(navigator.userAgent),
                         prefixElement: i.createElement("div"),
                         prefixMatches: {},
                         scrollAnchor: null,
                         scrollPropertyLeft: null,
                         scrollPropertyTop: null,
                         isTicking: !1,
                         calls: []
                     },
                     CSS: {},
                     Utilities: u,
                     Redirects: {},
                     Easings: {},
                     Promise: e.Promise,
                     defaults: {
                         queue: "",
                         duration: g,
                         easing: m,
                         begin: n,
                         complete: n,
                         progress: n,
                         display: n,
                         visibility: n,
                         loop: !1,
                         delay: !1,
                         mobileHA: !0,
                         _cacheValues: !0
                     },
                     init: function(t) {
                         u.data(t, "velocity", {
                             isSVG: h.isSVG(t),
                             isAnimating: !1,
                             computedStyle: null,
                             tweensContainer: null,
                             rootPropertyValueCache: {},
                             transformCache: {}
                         })
                     },
                     hook: null,
                     mock: !1,
                     version: {
                         major: 1,
                         minor: 2,
                         patch: 2
                     },
                     debug: !1
                 };
             e.pageYOffset !== n ? (y.State.scrollAnchor = e, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop");
             var b = function() {
                 function t(t) {
                     return -t.tension * t.x - t.friction * t.v
                 }

                 function e(e, i, n) {
                     var o = {
                         x: e.x + n.dx * i,
                         v: e.v + n.dv * i,
                         tension: e.tension,
                         friction: e.friction
                     };
                     return {
                         dx: o.v,
                         dv: t(o)
                     }
                 }

                 function i(i, n) {
                     var o = {
                             dx: i.v,
                             dv: t(i)
                         },
                         r = e(i, .5 * n, o),
                         s = e(i, .5 * n, r),
                         a = e(i, n, s),
                         l = 1 / 6 * (o.dx + 2 * (r.dx + s.dx) + a.dx),
                         c = 1 / 6 * (o.dv + 2 * (r.dv + s.dv) + a.dv);
                     return i.x = i.x + l * n, i.v = i.v + c * n, i
                 }
                 return function t(e, n, o) {
                     var r, s, a, l = {
                             x: -1,
                             v: 0,
                             tension: null,
                             friction: null
                         },
                         c = [0],
                         u = 0;
                     for (e = parseFloat(e) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = e, l.friction = n, (r = null !== o) ? s = (u = t(e, n)) / o * .016 : s = .016; a = i(a || l, s), c.push(1 + a.x), u += 16, Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4;);
                     return r ? function(t) {
                         return c[t * (c.length - 1) | 0]
                     } : u
                 }
             }();
             y.Easings = {
                 linear: function(t) {
                     return t
                 },
                 swing: function(t) {
                     return .5 - Math.cos(t * Math.PI) / 2
                 },
                 spring: function(t) {
                     return 1 - Math.cos(4.5 * t * Math.PI) * Math.exp(6 * -t)
                 }
             }, u.each([
                 ["ease", [.25, .1, .25, 1]],
                 ["ease-in", [.42, 0, 1, 1]],
                 ["ease-out", [0, 0, .58, 1]],
                 ["ease-in-out", [.42, 0, .58, 1]],
                 ["easeInSine", [.47, 0, .745, .715]],
                 ["easeOutSine", [.39, .575, .565, 1]],
                 ["easeInOutSine", [.445, .05, .55, .95]],
                 ["easeInQuad", [.55, .085, .68, .53]],
                 ["easeOutQuad", [.25, .46, .45, .94]],
                 ["easeInOutQuad", [.455, .03, .515, .955]],
                 ["easeInCubic", [.55, .055, .675, .19]],
                 ["easeOutCubic", [.215, .61, .355, 1]],
                 ["easeInOutCubic", [.645, .045, .355, 1]],
                 ["easeInQuart", [.895, .03, .685, .22]],
                 ["easeOutQuart", [.165, .84, .44, 1]],
                 ["easeInOutQuart", [.77, 0, .175, 1]],
                 ["easeInQuint", [.755, .05, .855, .06]],
                 ["easeOutQuint", [.23, 1, .32, 1]],
                 ["easeInOutQuint", [.86, 0, .07, 1]],
                 ["easeInExpo", [.95, .05, .795, .035]],
                 ["easeOutExpo", [.19, 1, .22, 1]],
                 ["easeInOutExpo", [1, 0, 0, 1]],
                 ["easeInCirc", [.6, .04, .98, .335]],
                 ["easeOutCirc", [.075, .82, .165, 1]],
                 ["easeInOutCirc", [.785, .135, .15, .86]]
             ], function(t, e) {
                 y.Easings[e[0]] = s.apply(null, e[1])
             });
             var w = y.CSS = {
                 RegEx: {
                     isHex: /^#([A-f\d]{3}){1,2}$/i,
                     valueUnwrap: /^[A-z]+\((.*)\)$/i,
                     wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                     valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                 },
                 Lists: {
                     colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                     transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                     transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                 },
                 Hooks: {
                     templates: {
                         textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                         boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                         clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                         backgroundPosition: ["X Y", "0% 0%"],
                         transformOrigin: ["X Y Z", "50% 50% 0px"],
                         perspectiveOrigin: ["X Y", "50% 50%"]
                     },
                     registered: {},
                     register: function() {
                         for (var t = 0; t < w.Lists.colors.length; t++) {
                             var e = "color" === w.Lists.colors[t] ? "0 0 0 1" : "255 255 255 1";
                             w.Hooks.templates[w.Lists.colors[t]] = ["Red Green Blue Alpha", e]
                         }
                         var i, n, o;
                         if (p)
                             for (i in w.Hooks.templates) {
                                 o = (n = w.Hooks.templates[i])[0].split(" ");
                                 var r = n[1].match(w.RegEx.valueSplit);
                                 "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), w.Hooks.templates[i] = [o.join(" "), r.join(" ")])
                             }
                         for (i in w.Hooks.templates)
                             for (var t in o = (n = w.Hooks.templates[i])[0].split(" ")) {
                                 var s = i + o[t],
                                     a = t;
                                 w.Hooks.registered[s] = [i, a]
                             }
                     },
                     getRoot: function(t) {
                         var e = w.Hooks.registered[t];
                         return e ? e[0] : t
                     },
                     cleanRootPropertyValue: function(t, e) {
                         return w.RegEx.valueUnwrap.test(e) && (e = e.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(e) && (e = w.Hooks.templates[t][1]), e
                     },
                     extractValue: function(t, e) {
                         var i = w.Hooks.registered[t];
                         if (i) {
                             var n = i[0],
                                 o = i[1];
                             return (e = w.Hooks.cleanRootPropertyValue(n, e)).toString().match(w.RegEx.valueSplit)[o]
                         }
                         return e
                     },
                     injectValue: function(t, e, i) {
                         var n = w.Hooks.registered[t];
                         if (n) {
                             var o, r = n[0],
                                 s = n[1];
                             return (o = (i = w.Hooks.cleanRootPropertyValue(r, i)).toString().match(w.RegEx.valueSplit))[s] = e, o.join(" ")
                         }
                         return i
                     }
                 },
                 Normalizations: {
                     registered: {
                         clip: function(t, e, i) {
                             switch (t) {
                                 case "name":
                                     return "clip";
                                 case "extract":
                                     var n;
                                     return w.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(w.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;
                                 case "inject":
                                     return "rect(" + i + ")"
                             }
                         },
                         blur: function(t, e, i) {
                             switch (t) {
                                 case "name":
                                     return y.State.isFirefox ? "filter" : "-webkit-filter";
                                 case "extract":
                                     var n = parseFloat(i);
                                     if (!n && 0 !== n) {
                                         var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                         n = o ? o[1] : 0
                                     }
                                     return n;
                                 case "inject":
                                     return parseFloat(i) ? "blur(" + i + ")" : "none"
                             }
                         },
                         opacity: function(t, e, i) {
                             if (8 >= p) switch (t) {
                                 case "name":
                                     return "filter";
                                 case "extract":
                                     var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                     return n ? n[1] / 100 : 1;
                                 case "inject":
                                     return e.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                             } else switch (t) {
                                 case "name":
                                     return "opacity";
                                 case "extract":
                                 case "inject":
                                     return i
                             }
                         }
                     },
                     register: function() {
                         9 >= p || y.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                         for (var t = 0; t < w.Lists.transformsBase.length; t++) ! function() {
                             var e = w.Lists.transformsBase[t];
                             w.Normalizations.registered[e] = function(t, i, o) {
                                 switch (t) {
                                     case "name":
                                         return "transform";
                                     case "extract":
                                         return r(i) === n || r(i).transformCache[e] === n ? /^scale/i.test(e) ? 1 : 0 : r(i).transformCache[e].replace(/[()]/g, "");
                                     case "inject":
                                         var s = !1;
                                         switch (e.substr(0, e.length - 1)) {
                                             case "translate":
                                                 s = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                 break;
                                             case "scal":
                                             case "scale":
                                                 y.State.isAndroid && r(i).transformCache[e] === n && 1 > o && (o = 1), s = !/(\d)$/i.test(o);
                                                 break;
                                             case "skew":
                                                 s = !/(deg|\d)$/i.test(o);
                                                 break;
                                             case "rotate":
                                                 s = !/(deg|\d)$/i.test(o)
                                         }
                                         return s || (r(i).transformCache[e] = "(" + o + ")"), r(i).transformCache[e]
                                 }
                             }
                         }();
                         for (t = 0; t < w.Lists.colors.length; t++) ! function() {
                             var e = w.Lists.colors[t];
                             w.Normalizations.registered[e] = function(t, i, o) {
                                 switch (t) {
                                     case "name":
                                         return e;
                                     case "extract":
                                         var r;
                                         if (w.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
                                         else {
                                             var s, a = {
                                                 black: "rgb(0, 0, 0)",
                                                 blue: "rgb(0, 0, 255)",
                                                 gray: "rgb(128, 128, 128)",
                                                 green: "rgb(0, 128, 0)",
                                                 red: "rgb(255, 0, 0)",
                                                 white: "rgb(255, 255, 255)"
                                             };
                                             /^[A-z]+$/i.test(o) ? s = a[o] !== n ? a[o] : a.black : w.RegEx.isHex.test(o) ? s = "rgb(" + w.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = a.black), r = (s || o).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                         }
                                         return 8 >= p || 3 !== r.split(" ").length || (r += " 1"), r;
                                     case "inject":
                                         return 8 >= p ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= p ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                 }
                             }
                         }()
                     }
                 },
                 Names: {
                     camelCase: function(t) {
                         return t.replace(/-(\w)/g, function(t, e) {
                             return e.toUpperCase()
                         })
                     },
                     SVGAttribute: function(t) {
                         var e = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                         return (p || y.State.isAndroid && !y.State.isChrome) && (e += "|transform"), new RegExp("^(" + e + ")$", "i").test(t)
                     },
                     prefixCheck: function(t) {
                         if (y.State.prefixMatches[t]) return [y.State.prefixMatches[t], !0];
                         for (var e = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = e.length; n > i; i++) {
                             var o;
                             if (o = 0 === i ? t : e[i] + t.replace(/^\w/, function(t) {
                                     return t.toUpperCase()
                                 }), h.isString(y.State.prefixElement.style[o])) return y.State.prefixMatches[t] = o, [o, !0]
                         }
                         return [t, !1]
                     }
                 },
                 Values: {
                     hexToRgb: function(t) {
                         var e;
                         return t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, i, n) {
                             return e + e + i + i + n + n
                         }), (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)) ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                     },
                     isCSSNullValue: function(t) {
                         return 0 == t || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(t)
                     },
                     getUnitType: function(t) {
                         return /^(rotate|skew)/i.test(t) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(t) ? "" : "px"
                     },
                     getDisplayType: function(t) {
                         var e = t && t.tagName.toString().toLowerCase();
                         return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(e) ? "inline" : /^(li)$/i.test(e) ? "list-item" : /^(tr)$/i.test(e) ? "table-row" : /^(table)$/i.test(e) ? "table" : /^(tbody)$/i.test(e) ? "table-row-group" : "block"
                     },
                     addClass: function(t, e) {
                         t.classList ? t.classList.add(e) : t.className += (t.className.length ? " " : "") + e
                     },
                     removeClass: function(t, e) {
                         t.classList ? t.classList.remove(e) : t.className = t.className.toString().replace(new RegExp("(^|\\s)" + e.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                     }
                 },
                 getPropertyValue: function(t, i, o, s) {
                     function a(t, i) {
                         function o() {
                             d && w.setPropertyValue(t, "display", "none")
                         }
                         var l = 0;
                         if (8 >= p) l = u.css(t, i);
                         else {
                             var c, d = !1;
                             if (/^(width|height)$/.test(i) && 0 === w.getPropertyValue(t, "display") && (d = !0, w.setPropertyValue(t, "display", w.Values.getDisplayType(t))), !s) {
                                 if ("height" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                     var f = t.offsetHeight - (parseFloat(w.getPropertyValue(t, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingBottom")) || 0);
                                     return o(), f
                                 }
                                 if ("width" === i && "border-box" !== w.getPropertyValue(t, "boxSizing").toString().toLowerCase()) {
                                     var h = t.offsetWidth - (parseFloat(w.getPropertyValue(t, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(t, "paddingRight")) || 0);
                                     return o(), h
                                 }
                             }
                             c = r(t) === n ? e.getComputedStyle(t, null) : r(t).computedStyle ? r(t).computedStyle : r(t).computedStyle = e.getComputedStyle(t, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === p && "filter" === i ? c.getPropertyValue(i) : c[i]) || null === l) && (l = t.style[i]), o()
                         }
                         if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                             var v = a(t, "position");
                             ("fixed" === v || "absolute" === v && /top|left/i.test(i)) && (l = u(t).position()[i] + "px")
                         }
                         return l
                     }
                     var l;
                     if (w.Hooks.registered[i]) {
                         var c = i,
                             d = w.Hooks.getRoot(c);
                         o === n && (o = w.getPropertyValue(t, w.Names.prefixCheck(d)[0])), w.Normalizations.registered[d] && (o = w.Normalizations.registered[d]("extract", t, o)), l = w.Hooks.extractValue(c, o)
                     } else {
                         var f, h;
                         if (w.Normalizations.registered[i]) "transform" !== (f = w.Normalizations.registered[i]("name", t)) && (h = a(t, w.Names.prefixCheck(f)[0]), w.Values.isCSSNullValue(h) && w.Hooks.templates[i] && (h = w.Hooks.templates[i][1])), l = w.Normalizations.registered[i]("extract", t, h)
                     }
                     if (!/^[\d-]/.test(l))
                         if (r(t) && r(t).isSVG && w.Names.SVGAttribute(i))
                             if (/^(height|width)$/i.test(i)) try {
                                 l = t.getBBox()[i]
                             } catch (t) {
                                 l = 0
                             } else l = t.getAttribute(i);
                             else l = a(t, w.Names.prefixCheck(i)[0]);
                     return w.Values.isCSSNullValue(l) && (l = 0), y.debug >= 2 && console.log("Get " + i + ": " + l), l
                 },
                 setPropertyValue: function(t, i, n, o, s) {
                     var a = i;
                     if ("scroll" === i) s.container ? s.container["scroll" + s.direction] = n : "Left" === s.direction ? e.scrollTo(n, s.alternateValue) : e.scrollTo(s.alternateValue, n);
                     else if (w.Normalizations.registered[i] && "transform" === w.Normalizations.registered[i]("name", t)) w.Normalizations.registered[i]("inject", t, n), a = "transform", n = r(t).transformCache[i];
                     else {
                         if (w.Hooks.registered[i]) {
                             var l = i,
                                 c = w.Hooks.getRoot(i);
                             o = o || w.getPropertyValue(t, c), n = w.Hooks.injectValue(l, n, o), i = c
                         }
                         if (w.Normalizations.registered[i] && (n = w.Normalizations.registered[i]("inject", t, n), i = w.Normalizations.registered[i]("name", t)), a = w.Names.prefixCheck(i)[0], 8 >= p) try {
                             t.style[a] = n
                         } catch (t) {
                             y.debug && console.log("Browser does not support [" + n + "] for [" + a + "]")
                         } else r(t) && r(t).isSVG && w.Names.SVGAttribute(i) ? t.setAttribute(i, n) : t.style[a] = n;
                         y.debug >= 2 && console.log("Set " + i + " (" + a + "): " + n)
                     }
                     return [a, n]
                 },
                 flushTransformCache: function(t) {
                     function e(e) {
                         return parseFloat(w.getPropertyValue(t, e))
                     }
                     var i = "";
                     if ((p || y.State.isAndroid && !y.State.isChrome) && r(t).isSVG) {
                         var n = {
                             translate: [e("translateX"), e("translateY")],
                             skewX: [e("skewX")],
                             skewY: [e("skewY")],
                             scale: 1 !== e("scale") ? [e("scale"), e("scale")] : [e("scaleX"), e("scaleY")],
                             rotate: [e("rotateZ"), 0, 0]
                         };
                         u.each(r(t).transformCache, function(t) {
                             /^translate/i.test(t) ? t = "translate" : /^scale/i.test(t) ? t = "scale" : /^rotate/i.test(t) && (t = "rotate"), n[t] && (i += t + "(" + n[t].join(" ") + ") ", delete n[t])
                         })
                     } else {
                         var o, s;
                         u.each(r(t).transformCache, function(e) {
                             return o = r(t).transformCache[e], "transformPerspective" === e ? (s = o, !0) : (9 === p && "rotateZ" === e && (e = "rotate"), void(i += e + o + " "))
                         }), s && (i = "perspective" + s + " " + i)
                     }
                     w.setPropertyValue(t, "transform", i)
                 }
             };
             w.Hooks.register(), w.Normalizations.register(), y.hook = function(t, e, i) {
                 var s = n;
                 return t = o(t), u.each(t, function(t, o) {
                     if (r(o) === n && y.init(o), i === n) s === n && (s = y.CSS.getPropertyValue(o, e));
                     else {
                         var a = y.CSS.setPropertyValue(o, e, i);
                         "transform" === a[0] && y.CSS.flushTransformCache(o), s = a
                     }
                 }), s
             };
             var x = function() {
                 function t() {
                     return s ? $.promise || null : d
                 }
                 var s, d, p, f, v, m, b = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                 if (h.isWrapped(this) ? (s = !1, p = 0, f = this, d = this) : (s = !0, p = 1, f = b ? arguments[0].elements || arguments[0].e : arguments[0]), f = o(f)) {
                     b ? (v = arguments[0].properties || arguments[0].p, m = arguments[0].options || arguments[0].o) : (v = arguments[p], m = arguments[p + 1]);
                     var T = f.length,
                         k = 0;
                     if (!/^(stop|finish)$/i.test(v) && !u.isPlainObject(m)) {
                         m = {};
                         for (var C = p + 1; C < arguments.length; C++) h.isArray(arguments[C]) || !/^(fast|normal|slow)$/i.test(arguments[C]) && !/^\d/.test(arguments[C]) ? h.isString(arguments[C]) || h.isArray(arguments[C]) ? m.easing = arguments[C] : h.isFunction(arguments[C]) && (m.complete = arguments[C]) : m.duration = arguments[C]
                     }
                     var S, $ = {
                         promise: null,
                         resolver: null,
                         rejecter: null
                     };
                     switch (s && y.Promise && ($.promise = new y.Promise(function(t, e) {
                         $.resolver = t, $.rejecter = e
                     })), v) {
                         case "scroll":
                             S = "scroll";
                             break;
                         case "reverse":
                             S = "reverse";
                             break;
                         case "finish":
                         case "stop":
                             u.each(f, function(t, e) {
                                 r(e) && r(e).delayTimer && (clearTimeout(r(e).delayTimer.setTimeout), r(e).delayTimer.next && r(e).delayTimer.next(), delete r(e).delayTimer)
                             });
                             var E = [];
                             return u.each(y.State.calls, function(t, e) {
                                 e && u.each(e[1], function(i, o) {
                                     var s = m === n ? "" : m;
                                     return !0 !== s && e[2].queue !== s && (m !== n || !1 !== e[2].queue) || void u.each(f, function(i, n) {
                                         n === o && ((!0 === m || h.isString(m)) && (u.each(u.queue(n, h.isString(m) ? m : ""), function(t, e) {
                                             h.isFunction(e) && e(null, !0)
                                         }), u.queue(n, h.isString(m) ? m : "", [])), "stop" === v ? (r(n) && r(n).tweensContainer && !1 !== s && u.each(r(n).tweensContainer, function(t, e) {
                                             e.endValue = e.currentValue
                                         }), E.push(t)) : "finish" === v && (e[2].duration = 1))
                                     })
                                 })
                             }), "stop" === v && (u.each(E, function(t, e) {
                                 c(e, !0)
                             }), $.promise && $.resolver(f)), t();
                         default:
                             if (!u.isPlainObject(v) || h.isEmptyObject(v)) {
                                 if (h.isString(v) && y.Redirects[v]) {
                                     var A = (j = u.extend({}, m)).duration,
                                         O = j.delay || 0;
                                     return !0 === j.backwards && (f = u.extend(!0, [], f).reverse()), u.each(f, function(t, e) {
                                         parseFloat(j.stagger) ? j.delay = O + parseFloat(j.stagger) * t : h.isFunction(j.stagger) && (j.delay = O + j.stagger.call(e, t, T)), j.drag && (j.duration = parseFloat(A) || (/^(callout|transition)/.test(v) ? 1e3 : g), j.duration = Math.max(j.duration * (j.backwards ? 1 - t / T : (t + 1) / T), .75 * j.duration, 200)), y.Redirects[v].call(e, e, j || {}, t, T, f, $.promise ? $ : n)
                                     }), t()
                                 }
                                 var P = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                 return $.promise ? $.rejecter(new Error(P)) : console.log(P), t()
                             }
                             S = "start"
                     }
                     var D, j, N = {
                             lastParent: null,
                             lastPosition: null,
                             lastFontSize: null,
                             lastPercentToPxWidth: null,
                             lastPercentToPxHeight: null,
                             lastEmToPx: null,
                             remToPx: null,
                             vwToPx: null,
                             vhToPx: null
                         },
                         I = [];
                     if (u.each(f, function(t, o) {
                             h.isNode(o) && function() {
                                 function t(t) {
                                     function p(t, e) {
                                         var i = n,
                                             o = n,
                                             r = n;
                                         return h.isArray(t) ? (i = t[0], !h.isArray(t[1]) && /^[\d-]/.test(t[1]) || h.isFunction(t[1]) || w.RegEx.isHex.test(t[1]) ? r = t[1] : (h.isString(t[1]) && !w.RegEx.isHex.test(t[1]) || h.isArray(t[1])) && (o = e ? t[1] : a(t[1], c.duration), t[2] !== n && (r = t[2]))) : i = t, e || (o = o || c.easing), h.isFunction(i) && (i = i.call(s, k, T)), h.isFunction(r) && (r = r.call(s, k, T)), [i || 0, o, r]
                                     }

                                     function g(t, e) {
                                         var i, n;
                                         return n = (e || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(t) {
                                             return i = t, ""
                                         }), i || (i = w.Values.getUnitType(t)), [n, i]
                                     }

                                     function b() {
                                         var t = {
                                                 myParent: s.parentNode || i.body,
                                                 position: w.getPropertyValue(s, "position"),
                                                 fontSize: w.getPropertyValue(s, "fontSize")
                                             },
                                             n = t.position === N.lastPosition && t.myParent === N.lastParent,
                                             o = t.fontSize === N.lastFontSize;
                                         N.lastParent = t.myParent, N.lastPosition = t.position, N.lastFontSize = t.fontSize;
                                         var a = {};
                                         if (o && n) a.emToPx = N.lastEmToPx, a.percentToPxWidth = N.lastPercentToPxWidth, a.percentToPxHeight = N.lastPercentToPxHeight;
                                         else {
                                             var l = r(s).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                             y.init(l), t.myParent.appendChild(l), u.each(["overflow", "overflowX", "overflowY"], function(t, e) {
                                                 y.CSS.setPropertyValue(l, e, "hidden")
                                             }), y.CSS.setPropertyValue(l, "position", t.position), y.CSS.setPropertyValue(l, "fontSize", t.fontSize), y.CSS.setPropertyValue(l, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(t, e) {
                                                 y.CSS.setPropertyValue(l, e, "100%")
                                             }), y.CSS.setPropertyValue(l, "paddingLeft", "100em"), a.percentToPxWidth = N.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(l, "width", null, !0)) || 1) / 100, a.percentToPxHeight = N.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(l, "height", null, !0)) || 1) / 100, a.emToPx = N.lastEmToPx = (parseFloat(w.getPropertyValue(l, "paddingLeft")) || 1) / 100, t.myParent.removeChild(l)
                                         }
                                         return null === N.remToPx && (N.remToPx = parseFloat(w.getPropertyValue(i.body, "fontSize")) || 16), null === N.vwToPx && (N.vwToPx = parseFloat(e.innerWidth) / 100, N.vhToPx = parseFloat(e.innerHeight) / 100), a.remToPx = N.remToPx, a.vwToPx = N.vwToPx, a.vhToPx = N.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(a), s), a
                                     }
                                     if (c.begin && 0 === k) try {
                                         c.begin.call(f, f)
                                     } catch (t) {
                                         setTimeout(function() {
                                             throw t
                                         }, 1)
                                     }
                                     if ("scroll" === S) {
                                         var x, C, E, A = /^x$/i.test(c.axis) ? "Left" : "Top",
                                             O = parseFloat(c.offset) || 0;
                                         c.container ? h.isWrapped(c.container) || h.isNode(c.container) ? (c.container = c.container[0] || c.container, E = (x = c.container["scroll" + A]) + u(s).position()[A.toLowerCase()] + O) : c.container = null : (x = y.State.scrollAnchor[y.State["scrollProperty" + A]], C = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], E = u(s).offset()[A.toLowerCase()] + O), d = {
                                             scroll: {
                                                 rootPropertyValue: !1,
                                                 startValue: x,
                                                 currentValue: x,
                                                 endValue: E,
                                                 unitType: "",
                                                 easing: c.easing,
                                                 scrollData: {
                                                     container: c.container,
                                                     direction: A,
                                                     alternateValue: C
                                                 }
                                             },
                                             element: s
                                         }, y.debug && console.log("tweensContainer (scroll): ", d.scroll, s)
                                     } else if ("reverse" === S) {
                                         if (!r(s).tweensContainer) return void u.dequeue(s, c.queue);
                                         "none" === r(s).opts.display && (r(s).opts.display = "auto"), "hidden" === r(s).opts.visibility && (r(s).opts.visibility = "visible"), r(s).opts.loop = !1, r(s).opts.begin = null, r(s).opts.complete = null, m.easing || delete c.easing, m.duration || delete c.duration, c = u.extend({}, r(s).opts, c);
                                         var P = u.extend(!0, {}, r(s).tweensContainer);
                                         for (var D in P)
                                             if ("element" !== D) {
                                                 var j = P[D].startValue;
                                                 P[D].startValue = P[D].currentValue = P[D].endValue, P[D].endValue = j, h.isEmptyObject(m) || (P[D].easing = c.easing), y.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(P[D]), s)
                                             } d = P
                                     } else if ("start" === S) {
                                         for (var q in r(s).tweensContainer && !0 === r(s).isAnimating && (P = r(s).tweensContainer), u.each(v, function(t, e) {
                                                 if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(t)) {
                                                     var i = p(e, !0),
                                                         o = i[0],
                                                         r = i[1],
                                                         s = i[2];
                                                     if (w.RegEx.isHex.test(o)) {
                                                         for (var a = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(o), c = s ? w.Values.hexToRgb(s) : n, u = 0; u < a.length; u++) {
                                                             var d = [l[u]];
                                                             r && d.push(r), c !== n && d.push(c[u]), v[t + a[u]] = d
                                                         }
                                                         delete v[t]
                                                     }
                                                 }
                                             }), v) {
                                             var L = p(v[q]),
                                                 M = L[0],
                                                 H = L[1],
                                                 R = L[2];
                                             q = w.Names.camelCase(q);
                                             var F = w.Hooks.getRoot(q),
                                                 W = !1;
                                             if (r(s).isSVG || "tween" === F || !1 !== w.Names.prefixCheck(F)[1] || w.Normalizations.registered[F] !== n) {
                                                 (c.display !== n && null !== c.display && "none" !== c.display || c.visibility !== n && "hidden" !== c.visibility) && /opacity|filter/.test(q) && !R && 0 !== M && (R = 0), c._cacheValues && P && P[q] ? (R === n && (R = P[q].endValue + P[q].unitType), W = r(s).rootPropertyValueCache[F]) : w.Hooks.registered[q] ? R === n ? (W = w.getPropertyValue(s, F), R = w.getPropertyValue(s, q, W)) : W = w.Hooks.templates[F][1] : R === n && (R = w.getPropertyValue(s, q));
                                                 var z, _, V, Q = !1;
                                                 if (R = (z = g(q, R))[0], V = z[1], M = (z = g(q, M))[0].replace(/^([+-\/*])=/, function(t, e) {
                                                         return Q = e, ""
                                                     }), _ = z[1], R = parseFloat(R) || 0, M = parseFloat(M) || 0, "%" === _ && (/^(fontSize|lineHeight)$/.test(q) ? (M /= 100, _ = "em") : /^scale/.test(q) ? (M /= 100, _ = "") : /(Red|Green|Blue)$/i.test(q) && (M = M / 100 * 255, _ = "")), /[\/*]/.test(Q)) _ = V;
                                                 else if (V !== _ && 0 !== R)
                                                     if (0 === M) _ = V;
                                                     else {
                                                         o = o || b();
                                                         var B = /margin|padding|left|right|width|text|word|letter/i.test(q) || /X$/.test(q) || "x" === q ? "x" : "y";
                                                         switch (V) {
                                                             case "%":
                                                                 R *= "x" === B ? o.percentToPxWidth : o.percentToPxHeight;
                                                                 break;
                                                             case "px":
                                                                 break;
                                                             default:
                                                                 R *= o[V + "ToPx"]
                                                         }
                                                         switch (_) {
                                                             case "%":
                                                                 R *= 1 / ("x" === B ? o.percentToPxWidth : o.percentToPxHeight);
                                                                 break;
                                                             case "px":
                                                                 break;
                                                             default:
                                                                 R *= 1 / o[_ + "ToPx"]
                                                         }
                                                     } switch (Q) {
                                                     case "+":
                                                         M = R + M;
                                                         break;
                                                     case "-":
                                                         M = R - M;
                                                         break;
                                                     case "*":
                                                         M *= R;
                                                         break;
                                                     case "/":
                                                         M = R / M
                                                 }
                                                 d[q] = {
                                                     rootPropertyValue: W,
                                                     startValue: R,
                                                     currentValue: R,
                                                     endValue: M,
                                                     unitType: _,
                                                     easing: H
                                                 }, y.debug && console.log("tweensContainer (" + q + "): " + JSON.stringify(d[q]), s)
                                             } else y.debug && console.log("Skipping [" + F + "] due to a lack of browser support.")
                                         }
                                         d.element = s
                                     }
                                     d.element && (w.Values.addClass(s, "velocity-animating"), I.push(d), "" === c.queue && (r(s).tweensContainer = d, r(s).opts = c), r(s).isAnimating = !0, k === T - 1 ? (y.State.calls.push([I, f, c, null, $.resolver]), !1 === y.State.isTicking && (y.State.isTicking = !0, l())) : k++)
                                 }
                                 var o, s = this,
                                     c = u.extend({}, y.defaults, m),
                                     d = {};
                                 switch (r(s) === n && y.init(s), parseFloat(c.delay) && !1 !== c.queue && u.queue(s, c.queue, function(t) {
                                     y.velocityQueueEntryFlag = !0, r(s).delayTimer = {
                                         setTimeout: setTimeout(t, parseFloat(c.delay)),
                                         next: t
                                     }
                                 }), c.duration.toString().toLowerCase()) {
                                     case "fast":
                                         c.duration = 200;
                                         break;
                                     case "normal":
                                         c.duration = g;
                                         break;
                                     case "slow":
                                         c.duration = 600;
                                         break;
                                     default:
                                         c.duration = parseFloat(c.duration) || 1
                                 }!1 !== y.mock && (!0 === y.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(y.mock) || 1, c.delay *= parseFloat(y.mock) || 1)), c.easing = a(c.easing, c.duration), c.begin && !h.isFunction(c.begin) && (c.begin = null), c.progress && !h.isFunction(c.progress) && (c.progress = null), c.complete && !h.isFunction(c.complete) && (c.complete = null), c.display !== n && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = y.CSS.Values.getDisplayType(s))), c.visibility !== n && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && y.State.isMobile && !y.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(t, c.delay) : t() : u.queue(s, c.queue, function(e, i) {
                                     return !0 === i ? ($.promise && $.resolver(f), !0) : (y.velocityQueueEntryFlag = !0, void t())
                                 }), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(s)[0] || u.dequeue(s)
                             }.call(o)
                         }), (j = u.extend({}, y.defaults, m)).loop = parseInt(j.loop), D = 2 * j.loop - 1, j.loop)
                         for (var q = 0; D > q; q++) {
                             var L = {
                                 delay: j.delay,
                                 progress: j.progress
                             };
                             q === D - 1 && (L.display = j.display, L.visibility = j.visibility, L.complete = j.complete), x(f, "reverse", L)
                         }
                     return t()
                 }
             };
             (y = u.extend(x, y)).animate = x;
             var T = e.requestAnimationFrame || f;
             return y.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                 i.hidden ? (T = function(t) {
                     return setTimeout(function() {
                         t(!0)
                     }, 16)
                 }, l()) : T = e.requestAnimationFrame || f
             }), t.Velocity = y, t !== e && (t.fn.velocity = x, t.fn.velocity.defaults = y.defaults), u.each(["Down", "Up"], function(t, e) {
                 y.Redirects["slide" + e] = function(t, i, o, r, s, a) {
                     var l = u.extend({}, i),
                         c = l.begin,
                         d = l.complete,
                         p = {
                             height: "",
                             marginTop: "",
                             marginBottom: "",
                             paddingTop: "",
                             paddingBottom: ""
                         },
                         f = {};
                     l.display === n && (l.display = "Down" === e ? "inline" === y.CSS.Values.getDisplayType(t) ? "inline-block" : "block" : "none"), l.begin = function() {
                         for (var i in c && c.call(s, s), p) {
                             f[i] = t.style[i];
                             var n = y.CSS.getPropertyValue(t, i);
                             p[i] = "Down" === e ? [n, 0] : [0, n]
                         }
                         f.overflow = t.style.overflow, t.style.overflow = "hidden"
                     }, l.complete = function() {
                         for (var e in f) t.style[e] = f[e];
                         d && d.call(s, s), a && a.resolver(s)
                     }, y(t, p, l)
                 }
             }), u.each(["In", "Out"], function(t, e) {
                 y.Redirects["fade" + e] = function(t, i, o, r, s, a) {
                     var l = u.extend({}, i),
                         c = {
                             opacity: "In" === e ? 1 : 0
                         },
                         d = l.complete;
                     l.complete = o !== r - 1 ? l.begin = null : function() {
                         d && d.call(s, s), a && a.resolver(s)
                     }, l.display === n && (l.display = "In" === e ? "auto" : "none"), y(this, c, l)
                 }
             }), y
         }
         jQuery.fn.velocity = jQuery.fn.animate
     }(window.jQuery || window.Zepto || window, window, document)
 })),
 function(t, e, i, n) {
     function o(t, e, i) {
         return setTimeout(u(t, i), e)
     }

     function r(t, e, i) {
         return !!Array.isArray(t) && (s(t, i[e], i), !0)
     }

     function s(t, e, i) {
         var o;
         if (t)
             if (t.forEach) t.forEach(e, i);
             else if (t.length !== n)
             for (o = 0; o < t.length;) e.call(i, t[o], o, t), o++;
         else
             for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t)
     }

     function a(t, e, i) {
         for (var o = Object.keys(e), r = 0; r < o.length;)(!i || i && t[o[r]] === n) && (t[o[r]] = e[o[r]]), r++;
         return t
     }

     function l(t, e) {
         return a(t, e, !0)
     }

     function c(t, e, i) {
         var n, o = e.prototype;
         (n = t.prototype = Object.create(o)).constructor = t, n._super = o, i && a(n, i)
     }

     function u(t, e) {
         return function() {
             return t.apply(e, arguments)
         }
     }

     function d(t, e) {
         return typeof t == Z ? t.apply(e && e[0] || n, e) : t
     }

     function p(t, e) {
         return t === n ? e : t
     }

     function f(t, e, i) {
         s(m(e), function(e) {
             t.addEventListener(e, i, !1)
         })
     }

     function h(t, e, i) {
         s(m(e), function(e) {
             t.removeEventListener(e, i, !1)
         })
     }

     function v(t, e) {
         for (; t;) {
             if (t == e) return !0;
             t = t.parentNode
         }
         return !1
     }

     function g(t, e) {
         return t.indexOf(e) > -1
     }

     function m(t) {
         return t.trim().split(/\s+/g)
     }

     function y(t, e, i) {
         if (t.indexOf && !i) return t.indexOf(e);
         for (var n = 0; n < t.length;) {
             if (i && t[n][i] == e || !i && t[n] === e) return n;
             n++
         }
         return -1
     }

     function b(t) {
         return Array.prototype.slice.call(t, 0)
     }

     function w(t, e, i) {
         for (var n = [], o = [], r = 0; r < t.length;) {
             var s = e ? t[r][e] : t[r];
             y(o, s) < 0 && n.push(t[r]), o[r] = s, r++
         }
         return i && (n = e ? n.sort(function(t, i) {
             return t[e] > i[e]
         }) : n.sort()), n
     }

     function x(t, e) {
         for (var i, o, r = e[0].toUpperCase() + e.slice(1), s = 0; s < Y.length;) {
             if ((o = (i = Y[s]) ? i + r : e) in t) return o;
             s++
         }
         return n
     }

     function T(t) {
         var e = t.ownerDocument;
         return e.defaultView || e.parentWindow
     }

     function k(t, e) {
         var i = this;
         this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
             d(t.options.enable, [t]) && i.handler(e)
         }, this.init()
     }

     function C(t, e, i) {
         var o = i.pointers.length,
             r = i.changedPointers.length,
             s = e & lt && 0 == o - r,
             a = e & (ut | dt) && 0 == o - r;
         i.isFirst = !!s, i.isFinal = !!a, s && (t.session = {}), i.eventType = e,
             function(t, e) {
                 var i = t.session,
                     o = e.pointers,
                     r = o.length;
                 i.firstInput || (i.firstInput = S(e)), r > 1 && !i.firstMultiple ? i.firstMultiple = S(e) : 1 === r && (i.firstMultiple = !1);
                 var s = i.firstInput,
                     a = i.firstMultiple,
                     l = a ? a.center : s.center,
                     c = e.center = $(o);
                 e.timeStamp = tt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = O(l, c), e.distance = A(l, c),
                     function(t, e) {
                         var i = e.center,
                             n = t.offsetDelta || {},
                             o = t.prevDelta || {},
                             r = t.prevInput || {};
                         (e.eventType === lt || r.eventType === ut) && (o = t.prevDelta = {
                             x: r.deltaX || 0,
                             y: r.deltaY || 0
                         }, n = t.offsetDelta = {
                             x: i.x,
                             y: i.y
                         }), e.deltaX = o.x + (i.x - n.x), e.deltaY = o.y + (i.y - n.y)
                     }(i, e), e.offsetDirection = E(e.deltaX, e.deltaY), e.scale = a ? (u = a.pointers, d = o, A(d[0], d[1], xt) / A(u[0], u[1], xt)) : 1, e.rotation = a ? function(t, e) {
                         return O(e[1], e[0], xt) - O(t[1], t[0], xt)
                     }(a.pointers, o) : 0,
                     function(t, e) {
                         var i, o, r, s, a = t.lastInterval || e,
                             l = e.timeStamp - a.timeStamp;
                         if (e.eventType != dt && (l > at || a.velocity === n)) {
                             var c = a.deltaX - e.deltaX,
                                 u = a.deltaY - e.deltaY,
                                 d = function(t, e, i) {
                                     return {
                                         x: e / t || 0,
                                         y: i / t || 0
                                     }
                                 }(l, c, u);
                             o = d.x, r = d.y, i = K(d.x) > K(d.y) ? d.x : d.y, s = E(c, u), t.lastInterval = e
                         } else i = a.velocity, o = a.velocityX, r = a.velocityY, s = a.direction;
                         e.velocity = i, e.velocityX = o, e.velocityY = r, e.direction = s
                     }(i, e);
                 var u, d;
                 var p = t.element;
                 v(e.srcEvent.target, p) && (p = e.srcEvent.target), e.target = p
             }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
     }

     function S(t) {
         for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
             clientX: J(t.pointers[i].clientX),
             clientY: J(t.pointers[i].clientY)
         }, i++;
         return {
             timeStamp: tt(),
             pointers: e,
             center: $(e),
             deltaX: t.deltaX,
             deltaY: t.deltaY
         }
     }

     function $(t) {
         var e = t.length;
         if (1 === e) return {
             x: J(t[0].clientX),
             y: J(t[0].clientY)
         };
         for (var i = 0, n = 0, o = 0; e > o;) i += t[o].clientX, n += t[o].clientY, o++;
         return {
             x: J(i / e),
             y: J(n / e)
         }
     }

     function E(t, e) {
         return t === e ? pt : K(t) >= K(e) ? t > 0 ? ft : ht : e > 0 ? vt : gt
     }

     function A(t, e, i) {
         i || (i = wt);
         var n = e[i[0]] - t[i[0]],
             o = e[i[1]] - t[i[1]];
         return Math.sqrt(n * n + o * o)
     }

     function O(t, e, i) {
         i || (i = wt);
         var n = e[i[0]] - t[i[0]],
             o = e[i[1]] - t[i[1]];
         return 180 * Math.atan2(o, n) / Math.PI
     }

     function P() {
         this.evEl = kt, this.evWin = Ct, this.allow = !0, this.pressed = !1, k.apply(this, arguments)
     }

     function D() {
         this.evEl = Et, this.evWin = At, k.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
     }

     function j() {
         this.evTarget = Pt, this.evWin = Dt, this.started = !1, k.apply(this, arguments)
     }

     function N() {
         this.evTarget = Nt, this.targetIds = {}, k.apply(this, arguments)
     }

     function I() {
         k.apply(this, arguments);
         var t = u(this.handler, this);
         this.touch = new N(this.manager, t), this.mouse = new P(this.manager, t)
     }

     function q(t, e) {
         this.manager = t, this.set(e)
     }

     function L(t) {
         this.id = et++, this.manager = null, this.options = l(t || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = zt, this.simultaneous = {}, this.requireFail = []
     }

     function M(t) {
         return t == gt ? "down" : t == vt ? "up" : t == ft ? "left" : t == ht ? "right" : ""
     }

     function H(t, e) {
         var i = e.manager;
         return i ? i.get(t) : t
     }

     function R() {
         L.apply(this, arguments)
     }

     function F() {
         R.apply(this, arguments), this.pX = null, this.pY = null
     }

     function W() {
         R.apply(this, arguments)
     }

     function z() {
         L.apply(this, arguments), this._timer = null, this._input = null
     }

     function _() {
         R.apply(this, arguments)
     }

     function V() {
         R.apply(this, arguments)
     }

     function Q() {
         L.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
     }

     function B(t, e) {
         return (e = e || {}).recognizers = p(e.recognizers, B.defaults.preset), new X(t, e)
     }

     function X(t, e) {
         var i;
         e = e || {}, this.options = l(e, B.defaults), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = new((i = this).options.inputClass || (nt ? D : ot ? N : it ? I : P))(i, C), this.touchAction = new q(this, this.options.touchAction), U(this, !0), s(e.recognizers, function(t) {
             var e = this.add(new t[0](t[1]));
             t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
         }, this)
     }

     function U(t, e) {
         var i = t.element;
         s(t.options.cssProps, function(t, n) {
             i.style[x(i.style, n)] = e ? t : ""
         })
     }
     var Y = ["", "webkit", "moz", "MS", "ms", "o"],
         G = e.createElement("div"),
         Z = "function",
         J = Math.round,
         K = Math.abs,
         tt = Date.now,
         et = 1,
         it = "ontouchstart" in t,
         nt = x(t, "PointerEvent") !== n,
         ot = it && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
         rt = "touch",
         st = "mouse",
         at = 25,
         lt = 1,
         ct = 2,
         ut = 4,
         dt = 8,
         pt = 1,
         ft = 2,
         ht = 4,
         vt = 8,
         gt = 16,
         mt = ft | ht,
         yt = vt | gt,
         bt = mt | yt,
         wt = ["x", "y"],
         xt = ["clientX", "clientY"];
     k.prototype = {
         handler: function() {},
         init: function() {
             this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(T(this.element), this.evWin, this.domHandler)
         },
         destroy: function() {
             this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(T(this.element), this.evWin, this.domHandler)
         }
     };
     var Tt = {
             mousedown: lt,
             mousemove: ct,
             mouseup: ut
         },
         kt = "mousedown",
         Ct = "mousemove mouseup";
     c(P, k, {
         handler: function(t) {
             var e = Tt[t.type];
             e & lt && 0 === t.button && (this.pressed = !0), e & ct && 1 !== t.which && (e = ut), this.pressed && this.allow && (e & ut && (this.pressed = !1), this.callback(this.manager, e, {
                 pointers: [t],
                 changedPointers: [t],
                 pointerType: st,
                 srcEvent: t
             }))
         }
     });
     var St = {
             pointerdown: lt,
             pointermove: ct,
             pointerup: ut,
             pointercancel: dt,
             pointerout: dt
         },
         $t = {
             2: rt,
             3: "pen",
             4: st,
             5: "kinect"
         },
         Et = "pointerdown",
         At = "pointermove pointerup pointercancel";
     t.MSPointerEvent && (Et = "MSPointerDown", At = "MSPointerMove MSPointerUp MSPointerCancel"), c(D, k, {
         handler: function(t) {
             var e = this.store,
                 i = !1,
                 n = t.type.toLowerCase().replace("ms", ""),
                 o = St[n],
                 r = $t[t.pointerType] || t.pointerType,
                 s = r == rt,
                 a = y(e, t.pointerId, "pointerId");
             o & lt && (0 === t.button || s) ? 0 > a && (e.push(t), a = e.length - 1) : o & (ut | dt) && (i = !0), 0 > a || (e[a] = t, this.callback(this.manager, o, {
                 pointers: e,
                 changedPointers: [t],
                 pointerType: r,
                 srcEvent: t
             }), i && e.splice(a, 1))
         }
     });
     var Ot = {
             touchstart: lt,
             touchmove: ct,
             touchend: ut,
             touchcancel: dt
         },
         Pt = "touchstart",
         Dt = "touchstart touchmove touchend touchcancel";
     c(j, k, {
         handler: function(t) {
             var e = Ot[t.type];
             if (e === lt && (this.started = !0), this.started) {
                 var i = function(t, e) {
                     var i = b(t.touches),
                         n = b(t.changedTouches);
                     return e & (ut | dt) && (i = w(i.concat(n), "identifier", !0)), [i, n]
                 }.call(this, t, e);
                 e & (ut | dt) && 0 == i[0].length - i[1].length && (this.started = !1), this.callback(this.manager, e, {
                     pointers: i[0],
                     changedPointers: i[1],
                     pointerType: rt,
                     srcEvent: t
                 })
             }
         }
     });
     var jt = {
             touchstart: lt,
             touchmove: ct,
             touchend: ut,
             touchcancel: dt
         },
         Nt = "touchstart touchmove touchend touchcancel";
     c(N, k, {
         handler: function(t) {
             var e = jt[t.type],
                 i = function(t, e) {
                     var i = b(t.touches),
                         n = this.targetIds;
                     if (e & (lt | ct) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                     var o, r, s = b(t.changedTouches),
                         a = [],
                         l = this.target;
                     if (r = i.filter(function(t) {
                             return v(t.target, l)
                         }), e === lt)
                         for (o = 0; o < r.length;) n[r[o].identifier] = !0, o++;
                     for (o = 0; o < s.length;) n[s[o].identifier] && a.push(s[o]), e & (ut | dt) && delete n[s[o].identifier], o++;
                     return a.length ? [w(r.concat(a), "identifier", !0), a] : void 0
                 }.call(this, t, e);
             i && this.callback(this.manager, e, {
                 pointers: i[0],
                 changedPointers: i[1],
                 pointerType: rt,
                 srcEvent: t
             })
         }
     }), c(I, k, {
         handler: function(t, e, i) {
             var n = i.pointerType == rt,
                 o = i.pointerType == st;
             if (n) this.mouse.allow = !1;
             else if (o && !this.mouse.allow) return;
             e & (ut | dt) && (this.mouse.allow = !0), this.callback(t, e, i)
         },
         destroy: function() {
             this.touch.destroy(), this.mouse.destroy()
         }
     });
     var It = x(G.style, "touchAction"),
         qt = It !== n,
         Lt = "compute",
         Mt = "auto",
         Ht = "manipulation",
         Rt = "none",
         Ft = "pan-x",
         Wt = "pan-y";
     q.prototype = {
         set: function(t) {
             t == Lt && (t = this.compute()), qt && (this.manager.element.style[It] = t), this.actions = t.toLowerCase().trim()
         },
         update: function() {
             this.set(this.manager.options.touchAction)
         },
         compute: function() {
             var t = [];
             return s(this.manager.recognizers, function(e) {
                     d(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                 }),
                 function(t) {
                     if (g(t, Rt)) return Rt;
                     var e = g(t, Ft),
                         i = g(t, Wt);
                     return e && i ? Ft + " " + Wt : e || i ? e ? Ft : Wt : g(t, Ht) ? Ht : Mt
                 }(t.join(" "))
         },
         preventDefaults: function(t) {
             if (!qt) {
                 var e = t.srcEvent,
                     i = t.offsetDirection;
                 if (this.manager.session.prevented) return void e.preventDefault();
                 var n = this.actions,
                     o = g(n, Rt),
                     r = g(n, Wt),
                     s = g(n, Ft);
                 return o || r && i & mt || s && i & yt ? this.preventSrc(e) : void 0
             }
         },
         preventSrc: function(t) {
             this.manager.session.prevented = !0, t.preventDefault()
         }
     };
     var zt = 1,
         _t = 2,
         Vt = 4,
         Qt = 8,
         Bt = Qt,
         Xt = 16;
     L.prototype = {
         defaults: {},
         set: function(t) {
             return a(this.options, t), this.manager && this.manager.touchAction.update(), this
         },
         recognizeWith: function(t) {
             if (r(t, "recognizeWith", this)) return this;
             var e = this.simultaneous;
             return e[(t = H(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
         },
         dropRecognizeWith: function(t) {
             return r(t, "dropRecognizeWith", this) ? this : (t = H(t, this), delete this.simultaneous[t.id], this)
         },
         requireFailure: function(t) {
             if (r(t, "requireFailure", this)) return this;
             var e = this.requireFail;
             return -1 === y(e, t = H(t, this)) && (e.push(t), t.requireFailure(this)), this
         },
         dropRequireFailure: function(t) {
             if (r(t, "dropRequireFailure", this)) return this;
             t = H(t, this);
             var e = y(this.requireFail, t);
             return e > -1 && this.requireFail.splice(e, 1), this
         },
         hasRequireFailures: function() {
             return this.requireFail.length > 0
         },
         canRecognizeWith: function(t) {
             return !!this.simultaneous[t.id]
         },
         emit: function(t) {
             function e(e) {
                 var o;
                 i.manager.emit(i.options.event + (e ? (o = n) & Xt ? "cancel" : o & Qt ? "end" : o & Vt ? "move" : o & _t ? "start" : "" : ""), t)
             }
             var i = this,
                 n = this.state;
             Qt > n && e(!0), e(), n >= Qt && e(!0)
         },
         tryEmit: function(t) {
             return this.canEmit() ? this.emit(t) : void(this.state = 32)
         },
         canEmit: function() {
             for (var t = 0; t < this.requireFail.length;) {
                 if (!(this.requireFail[t].state & (32 | zt))) return !1;
                 t++
             }
             return !0
         },
         recognize: function(t) {
             var e = a({}, t);
             return d(this.options.enable, [this, e]) ? (this.state & (Bt | Xt | 32) && (this.state = zt), this.state = this.process(e), void(this.state & (_t | Vt | Qt | Xt) && this.tryEmit(e))) : (this.reset(), void(this.state = 32))
         },
         process: function() {},
         getTouchAction: function() {},
         reset: function() {}
     }, c(R, L, {
         defaults: {
             pointers: 1
         },
         attrTest: function(t) {
             var e = this.options.pointers;
             return 0 === e || t.pointers.length === e
         },
         process: function(t) {
             var e = this.state,
                 i = t.eventType,
                 n = e & (_t | Vt),
                 o = this.attrTest(t);
             return n && (i & dt || !o) ? e | Xt : n || o ? i & ut ? e | Qt : e & _t ? e | Vt : _t : 32
         }
     }), c(F, R, {
         defaults: {
             event: "pan",
             threshold: 10,
             pointers: 1,
             direction: bt
         },
         getTouchAction: function() {
             var t = this.options.direction,
                 e = [];
             return t & mt && e.push(Wt), t & yt && e.push(Ft), e
         },
         directionTest: function(t) {
             var e = this.options,
                 i = !0,
                 n = t.distance,
                 o = t.direction,
                 r = t.deltaX,
                 s = t.deltaY;
             return o & e.direction || (e.direction & mt ? (o = 0 === r ? pt : 0 > r ? ft : ht, i = r != this.pX, n = Math.abs(t.deltaX)) : (o = 0 === s ? pt : 0 > s ? vt : gt, i = s != this.pY, n = Math.abs(t.deltaY))), t.direction = o, i && n > e.threshold && o & e.direction
         },
         attrTest: function(t) {
             return R.prototype.attrTest.call(this, t) && (this.state & _t || !(this.state & _t) && this.directionTest(t))
         },
         emit: function(t) {
             this.pX = t.deltaX, this.pY = t.deltaY;
             var e = M(t.direction);
             e && this.manager.emit(this.options.event + e, t), this._super.emit.call(this, t)
         }
     }), c(W, R, {
         defaults: {
             event: "pinch",
             threshold: 0,
             pointers: 2
         },
         getTouchAction: function() {
             return [Rt]
         },
         attrTest: function(t) {
             return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & _t)
         },
         emit: function(t) {
             if (this._super.emit.call(this, t), 1 !== t.scale) {
                 var e = t.scale < 1 ? "in" : "out";
                 this.manager.emit(this.options.event + e, t)
             }
         }
     }), c(z, L, {
         defaults: {
             event: "press",
             pointers: 1,
             time: 500,
             threshold: 5
         },
         getTouchAction: function() {
             return [Mt]
         },
         process: function(t) {
             var e = this.options,
                 i = t.pointers.length === e.pointers,
                 n = t.distance < e.threshold,
                 r = t.deltaTime > e.time;
             if (this._input = t, !n || !i || t.eventType & (ut | dt) && !r) this.reset();
             else if (t.eventType & lt) this.reset(), this._timer = o(function() {
                 this.state = Bt, this.tryEmit()
             }, e.time, this);
             else if (t.eventType & ut) return Bt;
             return 32
         },
         reset: function() {
             clearTimeout(this._timer)
         },
         emit: function(t) {
             this.state === Bt && (t && t.eventType & ut ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = tt(), this.manager.emit(this.options.event, this._input)))
         }
     }), c(_, R, {
         defaults: {
             event: "rotate",
             threshold: 0,
             pointers: 2
         },
         getTouchAction: function() {
             return [Rt]
         },
         attrTest: function(t) {
             return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & _t)
         }
     }), c(V, R, {
         defaults: {
             event: "swipe",
             threshold: 10,
             velocity: .65,
             direction: mt | yt,
             pointers: 1
         },
         getTouchAction: function() {
             return F.prototype.getTouchAction.call(this)
         },
         attrTest: function(t) {
             var e, i = this.options.direction;
             return i & (mt | yt) ? e = t.velocity : i & mt ? e = t.velocityX : i & yt && (e = t.velocityY), this._super.attrTest.call(this, t) && i & t.direction && t.distance > this.options.threshold && K(e) > this.options.velocity && t.eventType & ut
         },
         emit: function(t) {
             var e = M(t.direction);
             e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
         }
     }), c(Q, L, {
         defaults: {
             event: "tap",
             pointers: 1,
             taps: 1,
             interval: 300,
             time: 250,
             threshold: 2,
             posThreshold: 10
         },
         getTouchAction: function() {
             return [Ht]
         },
         process: function(t) {
             var e = this.options,
                 i = t.pointers.length === e.pointers,
                 n = t.distance < e.threshold,
                 r = t.deltaTime < e.time;
             if (this.reset(), t.eventType & lt && 0 === this.count) return this.failTimeout();
             if (n && r && i) {
                 if (t.eventType != ut) return this.failTimeout();
                 var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                     a = !this.pCenter || A(this.pCenter, t.center) < e.posThreshold;
                 if (this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = o(function() {
                     this.state = Bt, this.tryEmit()
                 }, e.interval, this), _t) : Bt
             }
             return 32
         },
         failTimeout: function() {
             return this._timer = o(function() {
                 this.state = 32
             }, this.options.interval, this), 32
         },
         reset: function() {
             clearTimeout(this._timer)
         },
         emit: function() {
             this.state == Bt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
         }
     }), B.VERSION = "2.0.4", B.defaults = {
         domEvents: !1,
         touchAction: Lt,
         enable: !0,
         inputTarget: null,
         inputClass: null,
         preset: [
             [_, {
                 enable: !1
             }],
             [W, {
                     enable: !1
                 },
                 ["rotate"]
             ],
             [V, {
                 direction: mt
             }],
             [F, {
                     direction: mt
                 },
                 ["swipe"]
             ],
             [Q],
             [Q, {
                     event: "doubletap",
                     taps: 2
                 },
                 ["tap"]
             ],
             [z]
         ],
         cssProps: {
             userSelect: "default",
             touchSelect: "none",
             touchCallout: "none",
             contentZooming: "none",
             userDrag: "none",
             tapHighlightColor: "rgba(0,0,0,0)"
         }
     };
     X.prototype = {
         set: function(t) {
             return a(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
         },
         stop: function(t) {
             this.session.stopped = t ? 2 : 1
         },
         recognize: function(t) {
             var e = this.session;
             if (!e.stopped) {
                 this.touchAction.preventDefaults(t);
                 var i, n = this.recognizers,
                     o = e.curRecognizer;
                 (!o || o && o.state & Bt) && (o = e.curRecognizer = null);
                 for (var r = 0; r < n.length;) i = n[r], 2 === e.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t), !o && i.state & (_t | Vt | Qt) && (o = e.curRecognizer = i), r++
             }
         },
         get: function(t) {
             if (t instanceof L) return t;
             for (var e = this.recognizers, i = 0; i < e.length; i++)
                 if (e[i].options.event == t) return e[i];
             return null
         },
         add: function(t) {
             if (r(t, "add", this)) return this;
             var e = this.get(t.options.event);
             return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
         },
         remove: function(t) {
             if (r(t, "remove", this)) return this;
             var e = this.recognizers;
             return t = this.get(t), e.splice(y(e, t), 1), this.touchAction.update(), this
         },
         on: function(t, e) {
             var i = this.handlers;
             return s(m(t), function(t) {
                 i[t] = i[t] || [], i[t].push(e)
             }), this
         },
         off: function(t, e) {
             var i = this.handlers;
             return s(m(t), function(t) {
                 e ? i[t].splice(y(i[t], e), 1) : delete i[t]
             }), this
         },
         emit: function(t, i) {
             this.options.domEvents && function(t, i) {
                 var n = e.createEvent("Event");
                 n.initEvent(t, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
             }(t, i);
             var n = this.handlers[t] && this.handlers[t].slice();
             if (n && n.length) {
                 i.type = t, i.preventDefault = function() {
                     i.srcEvent.preventDefault()
                 };
                 for (var o = 0; o < n.length;) n[o](i), o++
             }
         },
         destroy: function() {
             this.element && U(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
         }
     }, a(B, {
         INPUT_START: lt,
         INPUT_MOVE: ct,
         INPUT_END: ut,
         INPUT_CANCEL: dt,
         STATE_POSSIBLE: zt,
         STATE_BEGAN: _t,
         STATE_CHANGED: Vt,
         STATE_ENDED: Qt,
         STATE_RECOGNIZED: Bt,
         STATE_CANCELLED: Xt,
         STATE_FAILED: 32,
         DIRECTION_NONE: pt,
         DIRECTION_LEFT: ft,
         DIRECTION_RIGHT: ht,
         DIRECTION_UP: vt,
         DIRECTION_DOWN: gt,
         DIRECTION_HORIZONTAL: mt,
         DIRECTION_VERTICAL: yt,
         DIRECTION_ALL: bt,
         Manager: X,
         Input: k,
         TouchAction: q,
         TouchInput: N,
         MouseInput: P,
         PointerEventInput: D,
         TouchMouseInput: I,
         SingleTouchInput: j,
         Recognizer: L,
         AttrRecognizer: R,
         Tap: Q,
         Pan: F,
         Swipe: V,
         Pinch: W,
         Rotate: _,
         Press: z,
         on: f,
         off: h,
         each: s,
         merge: l,
         extend: a,
         inherit: c,
         bindFn: u,
         prefixed: x
     }), typeof define == Z && define.amd ? define(function() {
         return B
     }) : "undefined" != typeof module && module.exports ? module.exports = B : t.Hammer = B
 }(window, document),
 function(t) {
     "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], t) : "object" == typeof exports ? t(require("jquery"), require("hammerjs")) : t(jQuery, Hammer)
 }(function(t, e) {
     var i;
     t.fn.hammer = function(i) {
         return this.each(function() {
             ! function(i, n) {
                 var o = t(i);
                 o.data("hammer") || o.data("hammer", new e(o[0], n))
             }(this, i)
         })
     }, e.Manager.prototype.emit = (i = e.Manager.prototype.emit, function(e, n) {
         i.call(this, e, n), t(this.element).trigger({
             type: e,
             gesture: n
         })
     })
 }),
 function(t) {
     t.Package ? Materialize = {} : t.Materialize = {}
 }(window), Materialize.guid = function() {
     function t() {
         return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
     }
     return function() {
         return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
     }
 }(), Materialize.elementOrParentIsFixed = function(t) {
     var e = $(t),
         i = e.add(e.parents()),
         n = !1;
     return i.each(function() {
         return "fixed" === $(this).css("position") ? (n = !0, !1) : void 0
     }), n
 }, Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity,
 function(t) {
     t.fn.collapsible = function(e) {
         return e = t.extend({
             accordion: void 0
         }, e), this.each(function() {
             function i(e) {
                 s = r.find("> li > .collapsible-header"), e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                     duration: 350,
                     easing: "easeOutQuart",
                     queue: !1,
                     complete: function() {
                         t(this).css("height", "")
                     }
                 }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                     duration: 350,
                     easing: "easeOutQuart",
                     queue: !1,
                     complete: function() {
                         t(this).css("height", "")
                     }
                 }), s.not(e).removeClass("active").parent().removeClass("active"), s.not(e).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                     duration: 350,
                     easing: "easeOutQuart",
                     queue: !1,
                     complete: function() {
                         t(this).css("height", "")
                     }
                 })
             }

             function n(e) {
                 e.hasClass("active") ? e.parent().addClass("active") : e.parent().removeClass("active"), e.parent().hasClass("active") ? e.siblings(".collapsible-body").stop(!0, !1).slideDown({
                     duration: 350,
                     easing: "easeOutQuart",
                     queue: !1,
                     complete: function() {
                         t(this).css("height", "")
                     }
                 }) : e.siblings(".collapsible-body").stop(!0, !1).slideUp({
                     duration: 350,
                     easing: "easeOutQuart",
                     queue: !1,
                     complete: function() {
                         t(this).css("height", "")
                     }
                 })
             }

             function o(t) {
                 return t.closest("li > .collapsible-header")
             }
             var r = t(this),
                 s = t(this).find("> li > .collapsible-header"),
                 a = r.data("collapsible");
             r.off("click.collapse", "> li > .collapsible-header"), s.off("click.collapse"), r.on("click.collapse", "> li > .collapsible-header", function(r) {
                 var s = t(this),
                     l = t(r.target);
                 (function(t) {
                     return o(t).length > 0
                 })(l) && (l = o(l)), l.toggleClass("active"), e.accordion || "accordion" === a || void 0 === a ? i(l) : (n(l), s.hasClass("active") && n(s))
             });
             s = r.find("> li > .collapsible-header");
             e.accordion || "accordion" === a || void 0 === a ? i(s.filter(".active").first()) : s.filter(".active").each(function() {
                 n(t(this))
             })
         })
     }, t(document).ready(function() {
         t(".collapsible").collapsible()
     })
 }(jQuery),
 function(t) {
     t.fn.scrollTo = function(e) {
         return t(this).scrollTop(t(this).scrollTop() - t(this).offset().top + t(e).offset().top), this
     }, t.fn.dropdown = function(e) {
         var i = {
             inDuration: 300,
             outDuration: 225,
             constrain_width: !0,
             hover: !1,
             gutter: 0,
             belowOrigin: !1,
             alignment: "left"
         };
         this.each(function() {
             function n() {
                 void 0 !== s.data("induration") && (a.inDuration = s.data("inDuration")), void 0 !== s.data("outduration") && (a.outDuration = s.data("outDuration")), void 0 !== s.data("constrainwidth") && (a.constrain_width = s.data("constrainwidth")), void 0 !== s.data("hover") && (a.hover = s.data("hover")), void 0 !== s.data("gutter") && (a.gutter = s.data("gutter")), void 0 !== s.data("beloworigin") && (a.belowOrigin = s.data("beloworigin")), void 0 !== s.data("alignment") && (a.alignment = s.data("alignment"))
             }

             function o(e) {
                 "focus" === e && (l = !0), n(), c.addClass("active"), s.addClass("active"), !0 === a.constrain_width ? c.css("width", s.outerWidth()) : c.css("white-space", "nowrap");
                 var i, o = window.innerHeight,
                     r = s.innerHeight(),
                     u = s.offset().left,
                     d = s.offset().top - t(window).scrollTop(),
                     p = a.alignment,
                     f = 0;
                 if (!0 === a.belowOrigin && (f = r), u + c.innerWidth() > t(window).width() ? p = "right" : u - c.innerWidth() + s.innerWidth() < 0 && (p = "left"), d + c.innerHeight() > o)
                     if (d + r - c.innerHeight() < 0) {
                         var h = o - d - f;
                         c.css("max-height", h)
                     } else f || (f += r), f -= c.innerHeight();
                 if ("left" === p) i = a.gutter, leftPosition = s.position().left + i;
                 else if ("right" === p) {
                     var v = s.position().left + s.outerWidth() - c.outerWidth();
                     i = -a.gutter, leftPosition = v + i
                 }
                 c.css({
                     position: "absolute",
                     top: s.position().top + f,
                     left: leftPosition
                 }), c.stop(!0, !0).css("opacity", 0).slideDown({
                     queue: !1,
                     duration: a.inDuration,
                     easing: "easeOutCubic",
                     complete: function() {
                         t(this).css("height", "")
                     }
                 }).animate({
                     opacity: 1
                 }, {
                     queue: !1,
                     duration: a.inDuration,
                     easing: "easeOutSine"
                 })
             }

             function r() {
                 l = !1, c.fadeOut(a.outDuration), c.removeClass("active"), s.removeClass("active"), setTimeout(function() {
                     c.css("max-height", "")
                 }, a.outDuration)
             }
             var s = t(this),
                 a = t.extend({}, i, e),
                 l = !1,
                 c = t("#" + s.attr("data-activates"));
             if (n(), s.after(c), a.hover) {
                 var u = !1;
                 s.unbind("click." + s.attr("id")), s.on("mouseenter", function(t) {
                     !1 === u && (o(), u = !0)
                 }), s.on("mouseleave", function(e) {
                     var i = e.toElement || e.relatedTarget;
                     t(i).closest(".dropdown-content").is(c) || (c.stop(!0, !0), r(), u = !1)
                 }), c.on("mouseleave", function(e) {
                     var i = e.toElement || e.relatedTarget;
                     t(i).closest(".dropdown-button").is(s) || (c.stop(!0, !0), r(), u = !1)
                 })
             } else s.unbind("click." + s.attr("id")), s.bind("click." + s.attr("id"), function(e) {
                 l || (s[0] != e.currentTarget || s.hasClass("active") || 0 !== t(e.target).closest(".dropdown-content").length ? s.hasClass("active") && (r(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (e.preventDefault(), o("click")), c.hasClass("active") && t(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function(e) {
                     c.is(e.target) || s.is(e.target) || s.find(e.target).length || (r(), t(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
                 }))
             });
             s.on("open", function(t, e) {
                 o(e)
             }), s.on("close", r)
         })
     }, t(document).ready(function() {
         t(".dropdown-button").dropdown()
     })
 }(jQuery),
 function(t) {
     var e = 0,
         i = 0;
     t.fn.extend({
         openModal: function(n) {
             t("body").css("overflow", "hidden");
             var o = "materialize-lean-overlay-" + ++i,
                 r = t(this),
                 s = t('<div class="lean-overlay"></div>'),
                 a = ++e;
             s.attr("id", o).css("z-index", 1e3 + 2 * a), r.data("overlay-id", o).css("z-index", 1e3 + 2 * a + 1), t("body").append(s), (n = t.extend({
                 opacity: .5,
                 in_duration: 350,
                 out_duration: 250,
                 ready: void 0,
                 complete: void 0,
                 dismissible: !0,
                 starting_top: "4%"
             }, n)).dismissible && (s.click(function() {
                 r.closeModal(n)
             }), t(document).on("keyup.leanModal" + o, function(t) {
                 27 === t.keyCode && r.closeModal(n)
             })), r.find(".modal-close").on("click.close", function(t) {
                 r.closeModal(n)
             }), s.css({
                 display: "block",
                 opacity: 0
             }), r.css({
                 display: "block",
                 opacity: 0
             }), s.velocity({
                 opacity: n.opacity
             }, {
                 duration: n.in_duration,
                 queue: !1,
                 ease: "easeOutCubic"
             }), r.data("associated-overlay", s[0]), r.hasClass("bottom-sheet") ? r.velocity({
                 bottom: "0",
                 opacity: 1
             }, {
                 duration: n.in_duration,
                 queue: !1,
                 ease: "easeOutCubic",
                 complete: function() {
                     "function" == typeof n.ready && n.ready()
                 }
             }) : (t.Velocity.hook(r, "scaleX", .7), r.css({
                 top: n.starting_top
             }), r.velocity({
                 top: "10%",
                 opacity: 1,
                 scaleX: "1"
             }, {
                 duration: n.in_duration,
                 queue: !1,
                 ease: "easeOutCubic",
                 complete: function() {
                     "function" == typeof n.ready && n.ready()
                 }
             }))
         }
     }), t.fn.extend({
         closeModal: function(i) {
             var n = t(this),
                 o = n.data("overlay-id"),
                 r = t("#" + o);
             i = t.extend({
                 out_duration: 250,
                 complete: void 0
             }, i), t("body").css("overflow", ""), n.find(".modal-close").off("click.close"), t(document).off("keyup.leanModal" + o), r.velocity({
                 opacity: 0
             }, {
                 duration: i.out_duration,
                 queue: !1,
                 ease: "easeOutQuart"
             }), n.hasClass("bottom-sheet") ? n.velocity({
                 bottom: "-100%",
                 opacity: 0
             }, {
                 duration: i.out_duration,
                 queue: !1,
                 ease: "easeOutCubic",
                 complete: function() {
                     r.css({
                         display: "none"
                     }), "function" == typeof i.complete && i.complete(), r.remove(), e--
                 }
             }) : n.velocity({
                 top: i.starting_top,
                 opacity: 0,
                 scaleX: .7
             }, {
                 duration: i.out_duration,
                 complete: function() {
                     t(this).css("display", "none"), "function" == typeof i.complete && i.complete(), r.remove(), e--
                 }
             })
         }
     }), t.fn.extend({
         leanModal: function(e) {
             return this.each(function() {
                 var i = t.extend({
                     starting_top: "4%"
                 }, e);
                 t(this).click(function(e) {
                     i.starting_top = (t(this).offset().top - t(window).scrollTop()) / 1.15;
                     var n = t(this).attr("href") || "#" + t(this).data("target");
                     t(n).openModal(i), e.preventDefault()
                 })
             })
         }
     })
 }(jQuery),
 function(t) {
     t.fn.materialbox = function() {
         return this.each(function() {
             function e() {
                 r = !1;
                 var e = l.parent(".material-placeholder"),
                     n = (window.innerWidth, window.innerHeight, l.data("width")),
                     s = l.data("height");
                 l.velocity("stop", !0), t("#materialbox-overlay").velocity("stop", !0), t(".materialbox-caption").velocity("stop", !0), t("#materialbox-overlay").velocity({
                     opacity: 0
                 }, {
                     duration: a,
                     queue: !1,
                     easing: "easeOutQuad",
                     complete: function() {
                         o = !1, t(this).remove()
                     }
                 }), l.velocity({
                     width: n,
                     height: s,
                     left: 0,
                     top: 0
                 }, {
                     duration: a,
                     queue: !1,
                     easing: "easeOutQuad"
                 }), t(".materialbox-caption").velocity({
                     opacity: 0
                 }, {
                     duration: a,
                     queue: !1,
                     easing: "easeOutQuad",
                     complete: function() {
                         e.css({
                             height: "",
                             width: "",
                             position: "",
                             top: "",
                             left: ""
                         }), l.css({
                             height: "",
                             top: "",
                             left: "",
                             width: "",
                             "max-width": "",
                             position: "",
                             "z-index": ""
                         }), l.removeClass("active"), r = !0, t(this).remove(), i.css("overflow", "")
                     }
                 })
             }
             if (!t(this).hasClass("initialized")) {
                 t(this).addClass("initialized");
                 var i, n, o = !1,
                     r = !0,
                     s = 275,
                     a = 200,
                     l = t(this),
                     c = t("<div></div>").addClass("material-placeholder");
                 l.wrap(c), l.on("click", function() {
                     var a = l.parent(".material-placeholder"),
                         c = window.innerWidth,
                         u = window.innerHeight,
                         d = l.width(),
                         p = l.height();
                     if (!1 === r) return e(), !1;
                     if (o && !0 === r) return e(), !1;
                     for (r = !1, l.addClass("active"), o = !0, a.css({
                             width: a[0].getBoundingClientRect().width,
                             height: a[0].getBoundingClientRect().height,
                             position: "relative",
                             top: 0,
                             left: 0
                         }), i = void 0, n = a[0].parentNode; null !== n && !t(n).is(document);) {
                         var f = t(n);
                         "hidden" === f.css("overflow") && (f.css("overflow", "visible"), i = void 0 === i ? f : i.add(f)), n = n.parentNode
                     }
                     l.css({
                         position: "absolute",
                         "z-index": 1e3
                     }).data("width", d).data("height", p);
                     var h = t('<div id="materialbox-overlay"></div>').css({
                         opacity: 0
                     }).click(function() {
                         !0 === r && e()
                     });
                     if (t("body").append(h), h.velocity({
                             opacity: 1
                         }, {
                             duration: s,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), "" !== l.data("caption")) {
                         var v = t('<div class="materialbox-caption"></div>');
                         v.text(l.data("caption")), t("body").append(v), v.css({
                             display: "inline"
                         }), v.velocity({
                             opacity: 1
                         }, {
                             duration: s,
                             queue: !1,
                             easing: "easeOutQuad"
                         })
                     }
                     var g = 0,
                         m = 0;
                     d / c > p / u ? (g = .9 * c, m = .9 * c * (p / d)) : (g = .9 * u * (d / p), m = .9 * u), l.hasClass("responsive-img") ? l.velocity({
                         "max-width": g,
                         width: d
                     }, {
                         duration: 0,
                         queue: !1,
                         complete: function() {
                             l.css({
                                 left: 0,
                                 top: 0
                             }).velocity({
                                 height: m,
                                 width: g,
                                 left: t(document).scrollLeft() + c / 2 - l.parent(".material-placeholder").offset().left - g / 2,
                                 top: t(document).scrollTop() + u / 2 - l.parent(".material-placeholder").offset().top - m / 2
                             }, {
                                 duration: s,
                                 queue: !1,
                                 easing: "easeOutQuad",
                                 complete: function() {
                                     r = !0
                                 }
                             })
                         }
                     }) : l.css("left", 0).css("top", 0).velocity({
                         height: m,
                         width: g,
                         left: t(document).scrollLeft() + c / 2 - l.parent(".material-placeholder").offset().left - g / 2,
                         top: t(document).scrollTop() + u / 2 - l.parent(".material-placeholder").offset().top - m / 2
                     }, {
                         duration: s,
                         queue: !1,
                         easing: "easeOutQuad",
                         complete: function() {
                             r = !0
                         }
                     })
                 }), t(window).scroll(function() {
                     o && e()
                 }), t(document).keyup(function(t) {
                     27 === t.keyCode && !0 === r && o && e()
                 })
             }
         })
     }, t(document).ready(function() {
         t(".materialboxed").materialbox()
     })
 }(jQuery),
 function(t) {
     t.fn.parallax = function() {
         var e = t(window).width();
         return this.each(function(i) {
             function n(i) {
                 var n;
                 n = 601 > e ? o.height() > 0 ? o.height() : o.children("img").height() : o.height() > 0 ? o.height() : 500;
                 var r = o.children("img").first(),
                     s = r.height() - n,
                     a = o.offset().top + n,
                     l = o.offset().top,
                     c = t(window).scrollTop(),
                     u = window.innerHeight,
                     d = (c + u - l) / (n + u),
                     p = Math.round(s * d);
                 i && r.css("display", "block"), a > c && c + u > l && r.css("transform", "translate3D(-50%," + p + "px, 0)")
             }
             var o = t(this);
             o.addClass("parallax"), o.children("img").one("load", function() {
                 n(!0)
             }).each(function() {
                 this.complete && t(this).load()
             }), t(window).scroll(function() {
                 e = t(window).width(), n(!1)
             }), t(window).resize(function() {
                 e = t(window).width(), n(!1)
             })
         })
     }
 }(jQuery),
 function(t) {
     var e = {
         init: function() {
             return this.each(function() {
                 var e = t(this);
                 t(window).width(), e.width("100%");
                 var i, n, o = e.find("li.tab a"),
                     r = e.width(),
                     s = e.find("li").first().outerWidth(),
                     a = 0;
                 0 === (i = t(o.filter('[href="' + location.hash + '"]'))).length && (i = t(this).find("li.tab a.active").first()), 0 === i.length && (i = t(this).find("li.tab a").first()), i.addClass("active"), 0 > (a = o.index(i)) && (a = 0), n = t(i[0].hash), e.append('<div class="indicator"></div>');
                 var l = e.find(".indicator");
                 e.is(":visible") && (l.css({
                     right: r - (a + 1) * s
                 }), l.css({
                     left: a * s
                 })), t(window).resize(function() {
                     r = e.width(), s = e.find("li").first().outerWidth(), 0 > a && (a = 0), 0 !== s && 0 !== r && (l.css({
                         right: r - (a + 1) * s
                     }), l.css({
                         left: a * s
                     }))
                 }), o.not(i).each(function() {
                     t(this.hash).hide()
                 }), e.on("click", "a", function(c) {
                     if (t(this).parent().hasClass("disabled")) c.preventDefault();
                     else {
                         r = e.width(), s = e.find("li").first().outerWidth(), i.removeClass("active"), n.hide(), i = t(this), n = t(this.hash), o = e.find("li.tab a"), i.addClass("active");
                         var u = a;
                         0 > (a = o.index(t(this))) && (a = 0), n.show(), a - u >= 0 ? (l.velocity({
                             right: r - (a + 1) * s
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), l.velocity({
                             left: a * s
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad",
                             delay: 90
                         })) : (l.velocity({
                             left: a * s
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), l.velocity({
                             right: r - (a + 1) * s
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad",
                             delay: 90
                         })), c.preventDefault()
                     }
                 })
             })
         },
         select_tab: function(t) {
             this.find('a[href="#' + t + '"]').trigger("click")
         }
     };
     t.fn.tabs = function(i) {
         return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
     }, t(document).ready(function() {
         t("ul.tabs").tabs()
     })
 }(jQuery),
 function(t) {
     t.fn.tooltip = function(i) {
         return "remove" === i ? (this.each(function() {
             t("#" + t(this).attr("data-tooltip-id")).remove(), t(this).off("mouseenter.tooltip mouseleave.tooltip")
         }), !1) : (i = t.extend({
             delay: 350
         }, i), this.each(function() {
             var n = Materialize.guid(),
                 o = t(this);
             o.attr("data-tooltip-id", n);
             var r = t("<span></span>").text(o.attr("data-tooltip")),
                 s = t("<div></div>");
             s.addClass("material-tooltip").append(r).appendTo(t("body")).attr("id", n);
             var a = t("<div></div>").addClass("backdrop");
             a.appendTo(s), a.css({
                 top: 0,
                 left: 0
             }), o.off("mouseenter.tooltip mouseleave.tooltip");
             var l, c = !1;
             o.on({
                 "mouseenter.tooltip": function(t) {
                     var n = o.attr("data-delay");
                     n = void 0 === n || "" === n ? i.delay : n, l = setTimeout(function() {
                         c = !0, s.velocity("stop"), a.velocity("stop"), s.css({
                             display: "block",
                             left: "0px",
                             top: "0px"
                         }), s.children("span").text(o.attr("data-tooltip"));
                         var t, i, n, r = o.outerWidth(),
                             l = o.outerHeight(),
                             u = o.attr("data-position"),
                             d = s.outerHeight(),
                             p = s.outerWidth(),
                             f = "0px",
                             h = "0px",
                             v = 8;
                         "top" === u ? (t = o.offset().top - d - 5, i = o.offset().left + r / 2 - p / 2, n = e(i, t, p, d), f = "-10px", a.css({
                             borderRadius: "14px 14px 0 0",
                             transformOrigin: "50% 90%",
                             marginTop: d,
                             marginLeft: p / 2 - a.width() / 2
                         })) : "left" === u ? (t = o.offset().top + l / 2 - d / 2, i = o.offset().left - p - 5, n = e(i, t, p, d), h = "-10px", a.css({
                             width: "14px",
                             height: "14px",
                             borderRadius: "14px 0 0 14px",
                             transformOrigin: "95% 50%",
                             marginTop: d / 2,
                             marginLeft: p
                         })) : "right" === u ? (t = o.offset().top + l / 2 - d / 2, i = o.offset().left + r + 5, n = e(i, t, p, d), h = "+10px", a.css({
                             width: "14px",
                             height: "14px",
                             borderRadius: "0 14px 14px 0",
                             transformOrigin: "5% 50%",
                             marginTop: d / 2,
                             marginLeft: "0px"
                         })) : (t = o.offset().top + o.outerHeight() + 5, i = o.offset().left + r / 2 - p / 2, n = e(i, t, p, d), f = "+10px", a.css({
                             marginLeft: p / 2 - a.width() / 2
                         })), s.css({
                             top: n.y,
                             left: n.x
                         }), 8 > (v = p / 8) && (v = 8), ("right" === u || "left" === u) && (6 > (v = p / 10) && (v = 6)), s.velocity({
                             marginTop: f,
                             marginLeft: h
                         }, {
                             duration: 350,
                             queue: !1
                         }).velocity({
                             opacity: 1
                         }, {
                             duration: 300,
                             delay: 50,
                             queue: !1
                         }), a.css({
                             display: "block"
                         }).velocity({
                             opacity: 1
                         }, {
                             duration: 55,
                             delay: 0,
                             queue: !1
                         }).velocity({
                             scale: v
                         }, {
                             duration: 300,
                             delay: 0,
                             queue: !1,
                             easing: "easeInOutQuad"
                         })
                     }, n)
                 },
                 "mouseleave.tooltip": function() {
                     c = !1, clearTimeout(l), setTimeout(function() {
                         1 != c && (s.velocity({
                             opacity: 0,
                             marginTop: 0,
                             marginLeft: 0
                         }, {
                             duration: 225,
                             queue: !1
                         }), a.velocity({
                             opacity: 0,
                             scale: 1
                         }, {
                             duration: 225,
                             queue: !1,
                             complete: function() {
                                 a.css("display", "none"), s.css("display", "none"), c = !1
                             }
                         }))
                     }, 225)
                 }
             })
         }))
     };
     var e = function(e, i, n, o) {
         var r = e,
             s = i;
         return 0 > r ? r = 4 : r + n > window.innerWidth && (r -= r + n - window.innerWidth), 0 > s ? s = 4 : s + o > window.innerHeight + t(window).scrollTop && (s -= s + o - window.innerHeight), {
             x: r,
             y: s
         }
     };
     t(document).ready(function() {
         t(".tooltipped").tooltip()
     })
 }(jQuery),
 function(t) {
     function e(t) {
         var e = "";
         for (var i in t) t.hasOwnProperty(i) && (e += i + ":" + t[i] + ";");
         return e
     }

     function i(e) {
         var i = function(t) {
             if (!1 === s.allowEvent(t)) return null;
             for (var e = null, i = t.target || t.srcElement; null !== i.parentElement;) {
                 if (!(i instanceof SVGElement || -1 === i.className.indexOf("waves-effect"))) {
                     e = i;
                     break
                 }
                 if (i.classList.contains("waves-effect")) {
                     e = i;
                     break
                 }
                 i = i.parentElement
             }
             return e
         }(e);
         null !== i && (r.show(e, i), "ontouchstart" in t && (i.addEventListener("touchend", r.hide, !1), i.addEventListener("touchcancel", r.hide, !1)), i.addEventListener("mouseup", r.hide, !1), i.addEventListener("mouseleave", r.hide, !1))
     }
     var n = n || {},
         o = document.querySelectorAll.bind(document),
         r = {
             duration: 750,
             show: function(t, i) {
                 if (2 === t.button) return !1;
                 var n = i || this,
                     o = document.createElement("div");
                 o.className = "waves-ripple", n.appendChild(o);
                 var s = function(t) {
                         var e, i, n, o = {
                                 top: 0,
                                 left: 0
                             },
                             r = t && t.ownerDocument;
                         return e = r.documentElement, void 0 !== t.getBoundingClientRect && (o = t.getBoundingClientRect()), i = function(t) {
                             return null !== t && t === t.window
                         }(n = r) ? n : 9 === n.nodeType && n.defaultView, {
                             top: o.top + i.pageYOffset - e.clientTop,
                             left: o.left + i.pageXOffset - e.clientLeft
                         }
                     }(n),
                     a = t.pageY - s.top,
                     l = t.pageX - s.left,
                     c = "scale(" + n.clientWidth / 100 * 10 + ")";
                 "touches" in t && (a = t.touches[0].pageY - s.top, l = t.touches[0].pageX - s.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", c), o.setAttribute("data-x", l), o.setAttribute("data-y", a);
                 var u = {
                     top: a + "px",
                     left: l + "px"
                 };
                 o.className = o.className + " waves-notransition", o.setAttribute("style", e(u)), o.className = o.className.replace("waves-notransition", ""), u["-webkit-transform"] = c, u["-moz-transform"] = c, u["-ms-transform"] = c, u["-o-transform"] = c, u.transform = c, u.opacity = "1", u["-webkit-transition-duration"] = r.duration + "ms", u["-moz-transition-duration"] = r.duration + "ms", u["-o-transition-duration"] = r.duration + "ms", u["transition-duration"] = r.duration + "ms", u["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", u["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", e(u))
             },
             hide: function(t) {
                 s.touchup(t);
                 var i = this,
                     n = (i.clientWidth, null),
                     o = i.getElementsByClassName("waves-ripple");
                 if (!(o.length > 0)) return !1;
                 var a = (n = o[o.length - 1]).getAttribute("data-x"),
                     l = n.getAttribute("data-y"),
                     c = n.getAttribute("data-scale"),
                     u = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                 0 > u && (u = 0), setTimeout(function() {
                     var t = {
                         top: l + "px",
                         left: a + "px",
                         opacity: "0",
                         "-webkit-transition-duration": r.duration + "ms",
                         "-moz-transition-duration": r.duration + "ms",
                         "-o-transition-duration": r.duration + "ms",
                         "transition-duration": r.duration + "ms",
                         "-webkit-transform": c,
                         "-moz-transform": c,
                         "-ms-transform": c,
                         "-o-transform": c,
                         transform: c
                     };
                     n.setAttribute("style", e(t)), setTimeout(function() {
                         try {
                             i.removeChild(n)
                         } catch (t) {
                             return !1
                         }
                     }, r.duration)
                 }, u)
             },
             wrapInput: function(t) {
                 for (var e = 0; e < t.length; e++) {
                     var i = t[e];
                     if ("input" === i.tagName.toLowerCase()) {
                         var n = i.parentNode;
                         if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect")) continue;
                         var o = document.createElement("i");
                         o.className = i.className + " waves-input-wrapper";
                         var r = i.getAttribute("style");
                         r || (r = ""), o.setAttribute("style", r), i.className = "waves-button-input", i.removeAttribute("style"), n.replaceChild(o, i), o.appendChild(i)
                     }
                 }
             }
         },
         s = {
             touches: 0,
             allowEvent: function(t) {
                 var e = !0;
                 return "touchstart" === t.type ? s.touches += 1 : "touchend" === t.type || "touchcancel" === t.type ? setTimeout(function() {
                     s.touches > 0 && (s.touches -= 1)
                 }, 500) : "mousedown" === t.type && s.touches > 0 && (e = !1), e
             },
             touchup: function(t) {
                 s.allowEvent(t)
             }
         };
     n.displayEffect = function(e) {
         "duration" in (e = e || {}) && (r.duration = e.duration), r.wrapInput(o(".waves-effect")), "ontouchstart" in t && document.body.addEventListener("touchstart", i, !1), document.body.addEventListener("mousedown", i, !1)
     }, n.attach = function(e) {
         "input" === e.tagName.toLowerCase() && (r.wrapInput([e]), e = e.parentElement), "ontouchstart" in t && e.addEventListener("touchstart", i, !1), e.addEventListener("mousedown", i, !1)
     }, t.Waves = n, document.addEventListener("DOMContentLoaded", function() {
         n.displayEffect()
     }, !1)
 }(window), Materialize.toast = function(t, e, i, n) {
     i = i || "";
     var o = document.getElementById("toast-container");
     null === o && ((o = document.createElement("div")).id = "toast-container", document.body.appendChild(o));
     var r = function(t) {
         var e = document.createElement("div");
         if (e.classList.add("toast"), i)
             for (var o = i.split(" "), r = 0, s = o.length; s > r; r++) e.classList.add(o[r]);
         ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) ? e.appendChild(t): t instanceof jQuery ? e.appendChild(t[0]) : e.innerHTML = t;
         var a = new Hammer(e, {
             prevent_default: !1
         });
         return a.on("pan", function(t) {
             var i = t.deltaX;
             e.classList.contains("panning") || e.classList.add("panning");
             var n = 1 - Math.abs(i / 80);
             0 > n && (n = 0), Vel(e, {
                 left: i,
                 opacity: n
             }, {
                 duration: 50,
                 queue: !1,
                 easing: "easeOutQuad"
             })
         }), a.on("panend", function(t) {
             var i = t.deltaX;
             Math.abs(i) > 80 ? Vel(e, {
                 marginTop: "-40px"
             }, {
                 duration: 375,
                 easing: "easeOutExpo",
                 queue: !1,
                 complete: function() {
                     "function" == typeof n && n(), e.parentNode.removeChild(e)
                 }
             }) : (e.classList.remove("panning"), Vel(e, {
                 left: 0,
                 opacity: 1
             }, {
                 duration: 300,
                 easing: "easeOutExpo",
                 queue: !1
             }))
         }), e
     }(t);
     t && o.appendChild(r), r.style.top = "35px", r.style.opacity = 0, Vel(r, {
         top: "0px",
         opacity: 1
     }, {
         duration: 300,
         easing: "easeOutCubic",
         queue: !1
     });
     var s = e,
         a = setInterval(function() {
             null === r.parentNode && window.clearInterval(a), r.classList.contains("panning") || (s -= 20), 0 >= s && (Vel(r, {
                 opacity: 0,
                 marginTop: "-40px"
             }, {
                 duration: 375,
                 easing: "easeOutExpo",
                 queue: !1,
                 complete: function() {
                     "function" == typeof n && n(), this[0].parentNode.removeChild(this[0])
                 }
             }), window.clearInterval(a))
         }, 20)
 },
 function(t) {
     var e = {
         init: function(e) {
             e = t.extend({
                 menuWidth: 240,
                 edge: "left",
                 closeOnClick: !1
             }, e), t(this).each(function() {
                 function i(i) {
                     !1, s = !1, t("body").css("overflow", ""), t("#sidenav-overlay").velocity({
                         opacity: 0
                     }, {
                         duration: 200,
                         queue: !1,
                         easing: "easeOutQuad",
                         complete: function() {
                             t(this).remove()
                         }
                     }), "left" === e.edge ? (r.css({
                         width: "",
                         right: "",
                         left: "0"
                     }), o.velocity({
                         left: -1 * (e.menuWidth + 10)
                     }, {
                         duration: 200,
                         queue: !1,
                         easing: "easeOutCubic",
                         complete: function() {
                             !0 === i && (o.removeAttr("style"), o.css("width", e.menuWidth))
                         }
                     })) : (r.css({
                         width: "",
                         right: "0",
                         left: ""
                     }), o.velocity({
                         right: -1 * (e.menuWidth + 10)
                     }, {
                         duration: 200,
                         queue: !1,
                         easing: "easeOutCubic",
                         complete: function() {
                             !0 === i && (o.removeAttr("style"), o.css("width", e.menuWidth))
                         }
                     }))
                 }
                 var n = t(this),
                     o = t("#" + n.attr("data-activates"));
                 240 != e.menuWidth && o.css("width", e.menuWidth);
                 var r = t('<div class="drag-target"></div>');
                 t("body").append(r), "left" == e.edge ? (o.css("left", -1 * (e.menuWidth + 10)), r.css({
                     left: 0
                 })) : (o.addClass("right-aligned").css("right", -1 * (e.menuWidth + 10)).css("left", ""), r.css({
                     right: 0
                 })), o.hasClass("fixed") && window.innerWidth > 992 && o.css("left", 0), o.hasClass("fixed") && t(window).resize(function() {
                     window.innerWidth > 992 ? 0 !== t("#sidenav-overlay").css("opacity") && s ? i(!0) : (o.removeAttr("style"), o.css("width", e.menuWidth)) : !1 === s && ("left" === e.edge ? o.css("left", -1 * (e.menuWidth + 10)) : o.css("right", -1 * (e.menuWidth + 10)))
                 }), !0 === e.closeOnClick && o.on("click.itemclick", "a:not(.collapsible-header)", function() {
                     i()
                 });
                 var s = !1;
                 r.on("click", function() {
                     i()
                 }), r.hammer({
                     prevent_default: !1
                 }).bind("pan", function(n) {
                     if ("touch" == n.gesture.pointerType) {
                         var r, a = (n.gesture.direction, n.gesture.center.x);
                         if (n.gesture.center.y, n.gesture.velocityX, t("body").css("overflow", "hidden"), 0 === t("#sidenav-overlay").length) {
                             var l = t('<div id="sidenav-overlay"></div>');
                             l.css("opacity", 0).click(function() {
                                 i()
                             }), t("body").append(l)
                         }
                         if ("left" === e.edge && (a > e.menuWidth ? a = e.menuWidth : 0 > a && (a = 0)), "left" === e.edge) a < e.menuWidth / 2 ? s = !1 : a >= e.menuWidth / 2 && (s = !0), o.css("left", a - e.menuWidth);
                         else {
                             a < window.innerWidth - e.menuWidth / 2 ? s = !0 : a >= window.innerWidth - e.menuWidth / 2 && (s = !1);
                             var c = -1 * (a - e.menuWidth / 2);
                             c > 0 && (c = 0), o.css("right", c)
                         }
                         "left" === e.edge ? (r = a / e.menuWidth, t("#sidenav-overlay").velocity({
                             opacity: r
                         }, {
                             duration: 50,
                             queue: !1,
                             easing: "easeOutQuad"
                         })) : (r = Math.abs((a - window.innerWidth) / e.menuWidth), t("#sidenav-overlay").velocity({
                             opacity: r
                         }, {
                             duration: 50,
                             queue: !1,
                             easing: "easeOutQuad"
                         }))
                     }
                 }).bind("panend", function(i) {
                     if ("touch" == i.gesture.pointerType) {
                         var n = i.gesture.velocityX;
                         !1, "left" === e.edge ? s && .3 >= n || -.5 > n ? (o.velocity({
                             left: 0
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), t("#sidenav-overlay").velocity({
                             opacity: 1
                         }, {
                             duration: 50,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), r.css({
                             width: "50%",
                             right: 0,
                             left: ""
                         })) : (!s || n > .3) && (t("body").css("overflow", ""), o.velocity({
                             left: -1 * (e.menuWidth + 10)
                         }, {
                             duration: 200,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), t("#sidenav-overlay").velocity({
                             opacity: 0
                         }, {
                             duration: 200,
                             queue: !1,
                             easing: "easeOutQuad",
                             complete: function() {
                                 t(this).remove()
                             }
                         }), r.css({
                             width: "10px",
                             right: "",
                             left: 0
                         })) : s && n >= -.3 || n > .5 ? (o.velocity({
                             right: 0
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), t("#sidenav-overlay").velocity({
                             opacity: 1
                         }, {
                             duration: 50,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), r.css({
                             width: "50%",
                             right: "",
                             left: 0
                         })) : (!s || -.3 > n) && (t("body").css("overflow", ""), o.velocity({
                             right: -1 * (e.menuWidth + 10)
                         }, {
                             duration: 200,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), t("#sidenav-overlay").velocity({
                             opacity: 0
                         }, {
                             duration: 200,
                             queue: !1,
                             easing: "easeOutQuad",
                             complete: function() {
                                 t(this).remove()
                             }
                         }), r.css({
                             width: "10px",
                             right: 0,
                             left: ""
                         }))
                     }
                 }), n.click(function() {
                     if (!0 === s) s = !1, !1, i();
                     else {
                         t("body").css("overflow", "hidden"), t("body").append(r), "left" === e.edge ? (r.css({
                             width: "50%",
                             right: 0,
                             left: ""
                         }), o.velocity({
                             left: 0
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad"
                         })) : (r.css({
                             width: "50%",
                             right: "",
                             left: 0
                         }), o.velocity({
                             right: 0
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), o.css("left", ""));
                         var n = t('<div id="sidenav-overlay"></div>');
                         n.css("opacity", 0).click(function() {
                             s = !1, !1, i(), n.velocity({
                                 opacity: 0
                             }, {
                                 duration: 300,
                                 queue: !1,
                                 easing: "easeOutQuad",
                                 complete: function() {
                                     t(this).remove()
                                 }
                             })
                         }), t("body").append(n), n.velocity({
                             opacity: 1
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad",
                             complete: function() {
                                 s = !0, !1
                             }
                         })
                     }
                     return !1
                 })
             })
         },
         show: function() {
             this.trigger("click")
         },
         hide: function() {
             t("#sidenav-overlay").trigger("click")
         }
     };
     t.fn.sideNav = function(i) {
         return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sideNav") : e.init.apply(this, arguments)
     }
 }(jQuery),
 function(t) {
     function e() {
         ++l;
         var e = o.scrollTop(),
             i = o.scrollLeft(),
             n = i + o.width(),
             a = e + o.height(),
             u = function(e, i, n, o) {
                 var s = t();
                 return t.each(r, function(t, r) {
                     if (r.height() > 0) {
                         var a = r.offset().top,
                             l = r.offset().left,
                             c = l + r.width(),
                             u = a + r.height();
                         !(l > i || o > c || a > n || e > u) && s.push(r)
                     }
                 }), s
             }(e + c.top + 200, n + c.right, a + c.bottom, i + c.left);
         t.each(u, function(t, e) {
             "number" != typeof e.data("scrollSpy:ticks") && e.triggerHandler("scrollSpy:enter"), e.data("scrollSpy:ticks", l)
         }), t.each(s, function(t, e) {
             var i = e.data("scrollSpy:ticks");
             "number" == typeof i && i !== l && (e.triggerHandler("scrollSpy:exit"), e.data("scrollSpy:ticks", null))
         }), s = u
     }

     function i() {
         o.trigger("scrollSpy:winSize")
     }

     function n(t, e, i) {
         var n, o, r, s = null,
             a = 0;
         i || (i = {});
         var l = function() {
             a = !1 === i.leading ? 0 : u(), s = null, r = t.apply(n, o), n = o = null
         };
         return function() {
             var c = u();
             a || !1 !== i.leading || (a = c);
             var d = e - (c - a);
             return n = this, o = arguments, 0 >= d ? (clearTimeout(s), s = null, a = c, r = t.apply(n, o), n = o = null) : s || !1 === i.trailing || (s = setTimeout(l, d)), r
         }
     }
     var o = t(window),
         r = [],
         s = [],
         a = !1,
         l = 0,
         c = {
             top: 0,
             right: 0,
             bottom: 0,
             left: 0
         },
         u = Date.now || function() {
             return (new Date).getTime()
         };
     t.scrollSpy = function(i, s) {
         var l = [];
         (i = t(i)).each(function(e, i) {
             r.push(t(i)), t(i).data("scrollSpy:id", e), t("a[href=#" + t(i).attr("id") + "]").click(function(e) {
                 e.preventDefault();
                 var i = t(this.hash).offset().top + 1;
                 t("html, body").animate({
                     scrollTop: i - 200
                 }, {
                     duration: 400,
                     queue: !1,
                     easing: "easeOutCubic"
                 })
             })
         }), s = s || {
             throttle: 100
         }, c.top = s.offsetTop || 0, c.right = s.offsetRight || 0, c.bottom = s.offsetBottom || 0, c.left = s.offsetLeft || 0;
         var u = n(e, s.throttle || 100),
             d = function() {
                 t(document).ready(u)
             };
         return a || (o.on("scroll", d), o.on("resize", d), a = !0), setTimeout(d, 0), i.on("scrollSpy:enter", function() {
             l = t.grep(l, function(t) {
                 return 0 != t.height()
             });
             var e = t(this);
             l[0] ? (t("a[href=#" + l[0].attr("id") + "]").removeClass("active"), e.data("scrollSpy:id") < l[0].data("scrollSpy:id") ? l.unshift(t(this)) : l.push(t(this))) : l.push(t(this)), t("a[href=#" + l[0].attr("id") + "]").addClass("active")
         }), i.on("scrollSpy:exit", function() {
             if ((l = t.grep(l, function(t) {
                     return 0 != t.height()
                 }))[0]) {
                 t("a[href=#" + l[0].attr("id") + "]").removeClass("active");
                 var e = t(this);
                 (l = t.grep(l, function(t) {
                     return t.attr("id") != e.attr("id")
                 }))[0] && t("a[href=#" + l[0].attr("id") + "]").addClass("active")
             }
         }), i
     }, t.winSizeSpy = function(e) {
         return t.winSizeSpy = function() {
             return o
         }, e = e || {
             throttle: 100
         }, o.on("resize", n(i, e.throttle || 100))
     }, t.fn.scrollSpy = function(e) {
         return t.scrollSpy(t(this), e)
     }
 }(jQuery),
 function(t) {
     t(document).ready(function() {
         function e(e) {
             var i = e.css("font-family"),
                 o = e.css("font-size");
             o && n.css("font-size", o), i && n.css("font-family", i), "off" === e.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text(e.val() + "\n");
             var r = n.html().replace(/\n/g, "<br>");
             n.html(r), e.is(":visible") ? n.css("width", e.width()) : n.css("width", t(window).width() / 2), e.css("height", n.height())
         }
         Materialize.updateTextFields = function() {
             t("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(e, i) {
                 t(i).val().length > 0 || i.autofocus || void 0 !== t(this).attr("placeholder") || !0 === t(i)[0].validity.badInput ? t(this).siblings("label, i").addClass("active") : t(this).siblings("label, i").removeClass("active")
             })
         };
         var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
         t(document).on("change", i, function() {
             (0 !== t(this).val().length || void 0 !== t(this).attr("placeholder")) && t(this).siblings("label").addClass("active"), validate_field(t(this))
         }), t(document).ready(function() {
             Materialize.updateTextFields()
         }), t(document).on("reset", function(e) {
             var n = t(e.target);
             n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid"), n.find(i).each(function() {
                 "" === t(this).attr("value") && t(this).siblings("label, i").removeClass("active")
             }), n.find("select.initialized").each(function() {
                 var t = n.find("option[selected]").text();
                 n.siblings("input.select-dropdown").val(t)
             }))
         }), t(document).on("focus", i, function() {
             t(this).siblings("label, i").addClass("active")
         }), t(document).on("blur", i, function() {
             var e = t(this);
             0 === e.val().length && !0 !== e[0].validity.badInput && void 0 === e.attr("placeholder") && e.siblings("label, i").removeClass("active"), 0 === e.val().length && !0 !== e[0].validity.badInput && void 0 !== e.attr("placeholder") && e.siblings("i").removeClass("active"), validate_field(e)
         }), window.validate_field = function(t) {
             var e = void 0 !== t.attr("length"),
                 i = parseInt(t.attr("length")),
                 n = t.val().length;
             0 === t.val().length && !1 === t[0].validity.badInput ? t.hasClass("validate") && (t.removeClass("valid"), t.removeClass("invalid")) : t.hasClass("validate") && (t.is(":valid") && e && i >= n || t.is(":valid") && !e ? (t.removeClass("invalid"), t.addClass("valid")) : (t.removeClass("valid"), t.addClass("invalid")))
         };
         var n = t(".hiddendiv").first();
         n.length || (n = t('<div class="hiddendiv common"></div>'), t("body").append(n));
         var o = ".materialize-textarea";
         t(o).each(function() {
             var i = t(this);
             i.val().length && e(i)
         }), t("body").on("keyup keydown autoresize", o, function() {
             e(t(this))
         }), t(document).on("change", '.file-field input[type="file"]', function() {
             for (var e = t(this).closest(".file-field").find("input.file-path"), i = t(this)[0].files, n = [], o = 0; o < i.length; o++) n.push(i[o].name);
             e.val(n.join(", ")), e.trigger("change")
         });
         var r, s = "input[type=range]",
             a = !1;
         t(s).each(function() {
             var e = t('<span class="thumb"><span class="value"></span></span>');
             t(this).after(e)
         });
         var l = ".range-field";
         t(document).on("change", s, function(e) {
             t(this).siblings(".thumb").find(".value").html(t(this).val())
         }), t(document).on("input mousedown touchstart", s, function(e) {
             var i = t(this).siblings(".thumb"),
                 n = t(this).outerWidth();
             i.length <= 0 && (i = t('<span class="thumb"><span class="value"></span></span>'), t(this).after(i)), i.find(".value").html(t(this).val()), a = !0, t(this).addClass("active"), i.hasClass("active") || i.velocity({
                 height: "30px",
                 width: "30px",
                 top: "-20px",
                 marginLeft: "-15px"
             }, {
                 duration: 300,
                 easing: "easeOutExpo"
             }), "input" !== e.type && (0 > (r = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left) ? r = 0 : r > n && (r = n), i.addClass("active").css("left", r)), i.find(".value").html(t(this).val())
         }), t(document).on("mouseup touchend", l, function() {
             a = !1, t(this).removeClass("active")
         }), t(document).on("mousemove touchmove", l, function(e) {
             var i, n = t(this).children(".thumb");
             if (a) {
                 n.hasClass("active") || n.velocity({
                     height: "30px",
                     width: "30px",
                     top: "-20px",
                     marginLeft: "-15px"
                 }, {
                     duration: 300,
                     easing: "easeOutExpo"
                 }), i = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - t(this).offset().left : e.pageX - t(this).offset().left;
                 var o = t(this).outerWidth();
                 0 > i ? i = 0 : i > o && (i = o), n.addClass("active").css("left", i), n.find(".value").html(n.siblings(s).val())
             }
         }), t(document).on("mouseout touchleave", l, function() {
             if (!a) {
                 var e = t(this).children(".thumb");
                 e.hasClass("active") && e.velocity({
                     height: "0",
                     width: "0",
                     top: "10px",
                     marginLeft: "-6px"
                 }, {
                     duration: 100
                 }), e.removeClass("active")
             }
         })
     }), t.fn.material_select = function(e) {
         function i(t, e, i) {
             var n = t.indexOf(e),
                 o = -1 === n;
             return o ? t.push(e) : t.splice(n, 1), i.siblings("ul.dropdown-content").find("li").eq(e).toggleClass("active"), i.find("option").eq(e).prop("selected", o),
                 function(t, e) {
                     for (var i = "", n = 0, o = t.length; o > n; n++) {
                         var r = e.find("option").eq(t[n]).text();
                         i += 0 === n ? r : ", " + r
                     }
                     "" === i && (i = e.find("option:disabled").eq(0).text()), e.siblings("input.select-dropdown").val(i)
                 }(t, i), o
         }
         t(this).each(function() {
             var n = t(this);
             if (!n.hasClass("browser-default")) {
                 var o = !!n.attr("multiple"),
                     r = n.data("select-id");
                 if (r && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), t("ul#select-options-" + r).remove()), "destroy" === e) return void n.data("select-id", null).removeClass("initialized");
                 var s = Materialize.guid();
                 n.data("select-id", s);
                 var a = t('<div class="select-wrapper"></div>');
                 a.addClass(n.attr("class"));
                 var l = t('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
                     c = n.children("option, optgroup"),
                     u = [],
                     d = !1,
                     p = n.find("option:selected").html() || n.find("option:first").html() || "",
                     f = function(e, i, n) {
                         var o = i.is(":disabled") ? "disabled " : "",
                             r = i.data("icon"),
                             s = i.attr("class");
                         if (r) {
                             var a = "";
                             return s && (a = ' class="' + s + '"'), "multiple" === n ? l.append(t('<li class="' + o + '"><img src="' + r + '"' + a + '><span><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + o + '"><img src="' + r + '"' + a + "><span>" + i.html() + "</span></li>")), !0
                         }
                         "multiple" === n ? l.append(t('<li class="' + o + '"><span><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : l.append(t('<li class="' + o + '"><span>' + i.html() + "</span></li>"))
                     };
                 c.length && c.each(function() {
                     if (t(this).is("option")) o ? f(0, t(this), "multiple") : f(0, t(this));
                     else if (t(this).is("optgroup")) {
                         var e = t(this).children("option");
                         l.append(t('<li class="optgroup"><span>' + t(this).attr("label") + "</span></li>")), e.each(function() {
                             f(0, t(this))
                         })
                     }
                 }), l.find("li:not(.optgroup)").each(function(r) {
                     t(this).click(function(s) {
                         if (!t(this).hasClass("disabled") && !t(this).hasClass("optgroup")) {
                             var a = !0;
                             o ? (t('input[type="checkbox"]', this).prop("checked", function(t, e) {
                                 return !e
                             }), a = i(u, t(this).index(), n), g.trigger("focus")) : (l.find("li").removeClass("active"), t(this).toggleClass("active"), g.val(t(this).text())), activateOption(l, t(this)), n.find("option").eq(r).prop("selected", a), n.trigger("change"), void 0 !== e && e()
                         }
                         s.stopPropagation()
                     })
                 }), n.wrap(a);
                 var h = t('<span class="caret">&#9660;</span>');
                 n.is(":disabled") && h.addClass("disabled");
                 var v = p.replace(/"/g, "&quot;"),
                     g = t('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + v + '"/>');
                 n.before(g), g.before(h), g.after(l), n.is(":disabled") || g.dropdown({
                     hover: !1,
                     closeOnClick: !1
                 }), n.attr("tabindex") && t(g[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), g.on({
                     focus: function() {
                         if (t("ul.select-dropdown").not(l[0]).is(":visible") && t("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                             t(this).trigger("open", ["focus"]);
                             var e = t(this).val(),
                                 i = l.find("li").filter(function() {
                                     return t(this).text().toLowerCase() === e.toLowerCase()
                                 })[0];
                             activateOption(l, i)
                         }
                     },
                     click: function(t) {
                         t.stopPropagation()
                     }
                 }), g.on("blur", function() {
                     o || t(this).trigger("close"), l.find("li.selected").removeClass("selected")
                 }), l.hover(function() {
                     d = !0
                 }, function() {
                     d = !1
                 }), t(window).on({
                     click: function() {
                         o && (d || g.trigger("close"))
                     }
                 }), o && n.find("option:selected:not(:disabled)").each(function() {
                     var e = t(this).index();
                     i(u, e, n), l.find("li").eq(e).find(":checkbox").prop("checked", !0)
                 }), activateOption = function(e, i) {
                     if (i) {
                         e.find("li.selected").removeClass("selected");
                         var n = t(i);
                         n.addClass("selected"), l.scrollTo(n)
                     }
                 };
                 var m = [];
                 g.on("keydown", function(e) {
                     if (9 != e.which)
                         if (40 != e.which || l.is(":visible")) {
                             if (13 != e.which || l.is(":visible")) {
                                 e.preventDefault();
                                 var i = String.fromCharCode(e.which).toLowerCase();
                                 if (i && -1 === [9, 13, 27, 38, 40].indexOf(e.which)) {
                                     m.push(i);
                                     var n = m.join(""),
                                         r = l.find("li").filter(function() {
                                             return 0 === t(this).text().toLowerCase().indexOf(n)
                                         })[0];
                                     r && activateOption(l, r)
                                 }
                                 if (13 == e.which) {
                                     var s = l.find("li.selected:not(.disabled)")[0];
                                     s && (t(s).trigger("click"), o || g.trigger("close"))
                                 }
                                 40 == e.which && (r = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], activateOption(l, r)), 27 == e.which && g.trigger("close"), 38 == e.which && (r = l.find("li.selected").prev("li:not(.disabled)")[0]) && activateOption(l, r), setTimeout(function() {
                                     m = []
                                 }, 1e3)
                             }
                         } else g.trigger("open");
                     else g.trigger("close")
                 })
             }
         })
     }
 }(jQuery),
 function(t) {
     var e = {
         init: function(e) {
             return e = t.extend({
                 indicators: !0,
                 height: 400,
                 transition: 500,
                 interval: 6e3
             }, e), this.each(function() {
                 function i(t, e) {
                     t.hasClass("center-align") ? t.velocity({
                         opacity: 0,
                         translateY: -100
                     }, {
                         duration: e,
                         queue: !1
                     }) : t.hasClass("right-align") ? t.velocity({
                         opacity: 0,
                         translateX: 100
                     }, {
                         duration: e,
                         queue: !1
                     }) : t.hasClass("left-align") && t.velocity({
                         opacity: 0,
                         translateX: -100
                     }, {
                         duration: e,
                         queue: !1
                     })
                 }

                 function n(t) {
                     t >= c.length ? t = 0 : 0 > t && (t = c.length - 1), (u = l.find(".active").index()) != t && (o = c.eq(u), $caption = o.find(".caption"), o.removeClass("active"), o.velocity({
                         opacity: 0
                     }, {
                         duration: e.transition,
                         queue: !1,
                         easing: "easeOutQuad",
                         complete: function() {
                             c.not(".active").velocity({
                                 opacity: 0,
                                 translateX: 0,
                                 translateY: 0
                             }, {
                                 duration: 0,
                                 queue: !1
                             })
                         }
                     }), i($caption, e.transition), e.indicators && r.eq(u).removeClass("active"), c.eq(t).velocity({
                         opacity: 1
                     }, {
                         duration: e.transition,
                         queue: !1,
                         easing: "easeOutQuad"
                     }), c.eq(t).find(".caption").velocity({
                         opacity: 1,
                         translateX: 0,
                         translateY: 0
                     }, {
                         duration: e.transition,
                         delay: e.transition,
                         queue: !1,
                         easing: "easeOutQuad"
                     }), c.eq(t).addClass("active"), e.indicators && r.eq(t).addClass("active"))
                 }
                 var o, r, s, a = t(this),
                     l = a.find("ul.slides").first(),
                     c = l.find("li"),
                     u = l.find(".active").index(); - 1 != u && (o = c.eq(u)), a.hasClass("fullscreen") || (e.indicators ? a.height(e.height + 40) : a.height(e.height), l.height(e.height)), c.find(".caption").each(function() {
                     i(t(this), 0)
                 }), c.find("img").each(function() {
                     var e = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                     t(this).attr("src") !== e && (t(this).css("background-image", "url(" + t(this).attr("src") + ")"), t(this).attr("src", e))
                 }), e.indicators && (r = t('<ul class="indicators"></ul>'), c.each(function(i) {
                     var o = t('<li class="indicator-item"></li>');
                     o.click(function() {
                         n(l.parent().find(t(this)).index()), clearInterval(s), s = setInterval(function() {
                             u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u)
                         }, e.transition + e.interval)
                     }), r.append(o)
                 }), a.append(r), r = a.find("ul.indicators").find("li.indicator-item")), o ? o.show() : (c.first().addClass("active").velocity({
                     opacity: 1
                 }, {
                     duration: e.transition,
                     queue: !1,
                     easing: "easeOutQuad"
                 }), u = 0, o = c.eq(u), e.indicators && r.eq(u).addClass("active")), o.find("img").each(function() {
                     o.find(".caption").velocity({
                         opacity: 1,
                         translateX: 0,
                         translateY: 0
                     }, {
                         duration: e.transition,
                         queue: !1,
                         easing: "easeOutQuad"
                     })
                 }), s = setInterval(function() {
                     n((u = l.find(".active").index()) + 1)
                 }, e.transition + e.interval);
                 var d = !1,
                     p = !1;
                 a.hammer({
                     prevent_default: !1
                 }).bind("pan", function(t) {
                     if ("touch" === t.gesture.pointerType) {
                         clearInterval(s);
                         var e, i = t.gesture.direction,
                             n = t.gesture.deltaX,
                             o = t.gesture.velocityX;
                         $curr_slide = l.find(".active"), $curr_slide.velocity({
                             translateX: n
                         }, {
                             duration: 50,
                             queue: !1,
                             easing: "easeOutQuad"
                         }), 4 === i && (n > a.innerWidth() / 2 || -.65 > o) ? p = !0 : 2 === i && (n < -1 * a.innerWidth() / 2 || o > .65) && (d = !0), d && (0 === (e = $curr_slide.next()).length && (e = c.first()), e.velocity({
                             opacity: 1
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad"
                         })), p && (0 === (e = $curr_slide.prev()).length && (e = c.last()), e.velocity({
                             opacity: 1
                         }, {
                             duration: 300,
                             queue: !1,
                             easing: "easeOutQuad"
                         }))
                     }
                 }).bind("panend", function(t) {
                     "touch" === t.gesture.pointerType && ($curr_slide = l.find(".active"), !1, curr_index = l.find(".active").index(), p || d ? d ? (n(curr_index + 1), $curr_slide.velocity({
                         translateX: -1 * a.innerWidth()
                     }, {
                         duration: 300,
                         queue: !1,
                         easing: "easeOutQuad",
                         complete: function() {
                             $curr_slide.velocity({
                                 opacity: 0,
                                 translateX: 0
                             }, {
                                 duration: 0,
                                 queue: !1
                             })
                         }
                     })) : p && (n(curr_index - 1), $curr_slide.velocity({
                         translateX: a.innerWidth()
                     }, {
                         duration: 300,
                         queue: !1,
                         easing: "easeOutQuad",
                         complete: function() {
                             $curr_slide.velocity({
                                 opacity: 0,
                                 translateX: 0
                             }, {
                                 duration: 0,
                                 queue: !1
                             })
                         }
                     })) : $curr_slide.velocity({
                         translateX: 0
                     }, {
                         duration: 300,
                         queue: !1,
                         easing: "easeOutQuad"
                     }), d = !1, p = !1, clearInterval(s), s = setInterval(function() {
                         u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u)
                     }, e.transition + e.interval))
                 }), a.on("sliderPause", function() {
                     clearInterval(s)
                 }), a.on("sliderStart", function() {
                     clearInterval(s), s = setInterval(function() {
                         u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, n(u)
                     }, e.transition + e.interval)
                 }), a.on("sliderNext", function() {
                     n((u = l.find(".active").index()) + 1)
                 }), a.on("sliderPrev", function() {
                     n((u = l.find(".active").index()) - 1)
                 })
             })
         },
         pause: function() {
             t(this).trigger("sliderPause")
         },
         start: function() {
             t(this).trigger("sliderStart")
         },
         next: function() {
             t(this).trigger("sliderNext")
         },
         prev: function() {
             t(this).trigger("sliderPrev")
         }
     };
     t.fn.slider = function(i) {
         return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.tooltip") : e.init.apply(this, arguments)
     }
 }(jQuery),
 function(t) {
     t(document).ready(function() {
         t(document).on("click.card", ".card", function(e) {
             t(this).find("> .card-reveal").length && (t(e.target).is(t(".card-reveal .card-title")) || t(e.target).is(t(".card-reveal .card-title i")) ? t(this).find(".card-reveal").velocity({
                 translateY: 0
             }, {
                 duration: 225,
                 queue: !1,
                 easing: "easeInOutQuad",
                 complete: function() {
                     t(this).css({
                         display: "none"
                     })
                 }
             }) : (t(e.target).is(t(".card .activator")) || t(e.target).is(t(".card .activator i"))) && (t(e.target).closest(".card").css("overflow", "hidden"), t(this).find(".card-reveal").css({
                 display: "block"
             }).velocity("stop", !1).velocity({
                 translateY: "-100%"
             }, {
                 duration: 300,
                 queue: !1,
                 easing: "easeInOutQuad"
             }))), t(".card-reveal").closest(".card").css("overflow", "hidden")
         })
     })
 }(jQuery),
 function(t) {
     t(document).ready(function() {
         t(document).on("click.chip", ".chip .material-icons", function(e) {
             t(this).parent().remove()
         })
     })
 }(jQuery),
 function(t) {
     t(document).ready(function() {
         t.fn.pushpin = function(e) {
             return e = t.extend({
                 top: 0,
                 bottom: 1 / 0,
                 offset: 0
             }, e), $index = 0, this.each(function() {
                 function i(t) {
                     t.removeClass("pin-top"), t.removeClass("pinned"), t.removeClass("pin-bottom")
                 }

                 function n(n, o) {
                     n.each(function() {
                         e.top <= o && e.bottom >= o && !t(this).hasClass("pinned") && (i(t(this)), t(this).css("top", e.offset), t(this).addClass("pinned")), o < e.top && !t(this).hasClass("pin-top") && (i(t(this)), t(this).css("top", 0), t(this).addClass("pin-top")), o > e.bottom && !t(this).hasClass("pin-bottom") && (i(t(this)), t(this).addClass("pin-bottom"), t(this).css("top", e.bottom - s))
                     })
                 }
                 var o = Materialize.guid(),
                     r = t(this),
                     s = t(this).offset().top;
                 n(r, t(window).scrollTop()), t(window).on("scroll." + o, function() {
                     var i = t(window).scrollTop() + e.offset;
                     n(r, i)
                 })
             })
         }
     })
 }(jQuery),
 function(t) {
     t(document).ready(function() {
         t.fn.reverse = [].reverse, t(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(i) {
             var n = t(this);
             e(n)
         }), t(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(e) {
             var n = t(this);
             i(n)
         }), t(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(n) {
             var o = t(this).parent();
             o.hasClass("active") ? i(o) : e(o)
         })
     }), t.fn.extend({
         openFAB: function() {
             e(t(this))
         },
         closeFAB: function() {
             i(t(this))
         }
     });
     var e = function(e) {
             if ($this = e, !1 === $this.hasClass("active")) {
                 var i, n;
                 !0 === $this.hasClass("horizontal") ? n = 40 : i = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                     scaleY: ".4",
                     scaleX: ".4",
                     translateY: i + "px",
                     translateX: n + "px"
                 }, {
                     duration: 0
                 });
                 var o = 0;
                 $this.find("ul .btn-floating").reverse().each(function() {
                     t(this).velocity({
                         opacity: "1",
                         scaleX: "1",
                         scaleY: "1",
                         translateY: "0",
                         translateX: "0"
                     }, {
                         duration: 80,
                         delay: o
                     }), o += 40
                 })
             }
         },
         i = function(t) {
             var e, i;
             $this = t, !0 === $this.hasClass("horizontal") ? i = 40 : e = 40, $this.removeClass("active"), $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                 opacity: "0",
                 scaleX: ".4",
                 scaleY: ".4",
                 translateY: e + "px",
                 translateX: i + "px"
             }, {
                 duration: 80
             })
         }
 }(jQuery),
 function(t) {
     Materialize.fadeInImage = function(e) {
         var i = t(e);
         i.css({
             opacity: 0
         }), t(i).velocity({
             opacity: 1
         }, {
             duration: 650,
             queue: !1,
             easing: "easeOutSine"
         }), t(i).velocity({
             opacity: 1
         }, {
             duration: 1300,
             queue: !1,
             easing: "swing",
             step: function(e, i) {
                 i.start = 100;
                 var n = e / 100,
                     o = 150 - (100 - e) / 1.75;
                 100 > o && (o = 100), e >= 0 && t(this).css({
                     "-webkit-filter": "grayscale(" + n + ")brightness(" + o + "%)",
                     filter: "grayscale(" + n + ")brightness(" + o + "%)"
                 })
             }
         })
     }, Materialize.showStaggeredList = function(e) {
         var i = 0;
         t(e).find("li").velocity({
             translateX: "-100px"
         }, {
             duration: 0
         }), t(e).find("li").each(function() {
             t(this).velocity({
                 opacity: "1",
                 translateX: "0"
             }, {
                 duration: 800,
                 delay: i,
                 easing: [60, 10]
             }), i += 120
         })
     }, t(document).ready(function() {
         var e = !1,
             i = !1;
         t(".dismissable").each(function() {
             t(this).hammer({
                 prevent_default: !1
             }).bind("pan", function(n) {
                 if ("touch" === n.gesture.pointerType) {
                     var o = t(this),
                         r = n.gesture.direction,
                         s = n.gesture.deltaX,
                         a = n.gesture.velocityX;
                     o.velocity({
                         translateX: s
                     }, {
                         duration: 50,
                         queue: !1,
                         easing: "easeOutQuad"
                     }), 4 === r && (s > o.innerWidth() / 2 || -.75 > a) && (e = !0), 2 === r && (s < -1 * o.innerWidth() / 2 || a > .75) && (i = !0)
                 }
             }).bind("panend", function(n) {
                 if (Math.abs(n.gesture.deltaX) < t(this).innerWidth() / 2 && (i = !1, e = !1), "touch" === n.gesture.pointerType) {
                     var o, r = t(this);
                     if (e || i) o = e ? r.innerWidth() : -1 * r.innerWidth(), r.velocity({
                         translateX: o
                     }, {
                         duration: 100,
                         queue: !1,
                         easing: "easeOutQuad",
                         complete: function() {
                             r.css("border", "none"), r.velocity({
                                 height: 0,
                                 padding: 0
                             }, {
                                 duration: 200,
                                 queue: !1,
                                 easing: "easeOutQuad",
                                 complete: function() {
                                     r.remove()
                                 }
                             })
                         }
                     });
                     else r.velocity({
                         translateX: 0
                     }, {
                         duration: 100,
                         queue: !1,
                         easing: "easeOutQuad"
                     });
                     e = !1, i = !1
                 }
             })
         })
     })
 }(jQuery), Materialize.scrollFire = function(t) {
     var e = !1;
     window.addEventListener("scroll", function() {
         e = !0
     }), setInterval(function() {
         if (e) {
             e = !1;
             for (var i = window.pageYOffset + window.innerHeight, n = 0; n < t.length; n++) {
                 var o = t[n],
                     r = o.selector,
                     s = o.offset,
                     a = o.callback,
                     l = document.querySelector(r);
                 null !== l && i > l.getBoundingClientRect().top + window.pageYOffset + s && !0 !== o.done && (new Function(a)(), o.done = !0)
             }
         }
     }, 100)
 },
 function(t) {
     "function" == typeof define && define.amd ? define("picker", ["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : this.Picker = t(jQuery)
 }(function(t) {
     function e(o, s, c, u) {
         function d() {
             return e._.node("div", e._.node("div", e._.node("div", e._.node("div", w.component.nodes(v.open), m.box), m.wrap), m.frame), m.holder)
         }

         function p(t) {
             var e = t.keyCode,
                 i = /^(8|46)$/.test(e);
             return 27 == e ? (w.close(), !1) : void((32 == e || i || !v.open && w.component.key[e]) && (t.preventDefault(), t.stopPropagation(), i ? w.clear().close() : w.open()))
         }

         function f(t) {
             t.stopPropagation(), "focus" == t.type && w.$root.addClass(m.focused), w.open()
         }
         if (!o) return e;
         var h = !1,
             v = {
                 id: o.id || "P" + Math.abs(~~(Math.random() * new Date))
             },
             g = c ? t.extend(!0, {}, c.defaults, u) : u || {},
             m = t.extend({}, e.klasses(), g.klass),
             y = t(o),
             b = function() {
                 return this.start()
             },
             w = b.prototype = {
                 constructor: b,
                 $node: y,
                 start: function() {
                     return v && v.start ? w : (v.methods = {}, v.start = !0, v.open = !1, v.type = o.type, o.autofocus = o == r(), o.readOnly = !g.editable, o.id = o.id || v.id, "text" != o.type && (o.type = "text"), w.component = new c(w, g), w.$root = t(e._.node("div", d(), m.picker, 'id="' + o.id + '_root" tabindex="0"')), w.$root.on({
                         keydown: p,
                         focusin: function(t) {
                             w.$root.removeClass(m.focused), t.stopPropagation()
                         },
                         "mousedown click": function(e) {
                             var i = e.target;
                             i != w.$root.children()[0] && (e.stopPropagation(), "mousedown" != e.type || t(i).is("input, select, textarea, button, option") || (e.preventDefault(), w.$root[0].focus()))
                         }
                     }).on({
                         focus: function() {
                             y.addClass(m.target)
                         },
                         blur: function() {
                             y.removeClass(m.target)
                         }
                     }).on("focus.toOpen", f).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                         var e = t(this),
                             i = e.data(),
                             n = e.hasClass(m.navDisabled) || e.hasClass(m.disabled),
                             o = r();
                         o = o && (o.type || o.href), (n || o && !t.contains(w.$root[0], o)) && w.$root[0].focus(), !n && i.nav ? w.set("highlight", w.component.item.highlight, {
                             nav: i.nav
                         }) : !n && "pick" in i ? w.set("select", i.pick) : i.clear ? w.clear().close(!0) : i.close && w.close(!0)
                     }), n(w.$root[0], "hidden", !0), g.formatSubmit && (!0 === g.hiddenName ? (i = o.name, o.name = "") : i = (i = ["string" == typeof g.hiddenPrefix ? g.hiddenPrefix : "", "string" == typeof g.hiddenSuffix ? g.hiddenSuffix : "_submit"])[0] + o.name + i[1], w._hidden = t('<input type=hidden name="' + i + '"' + (y.data("value") || o.value ? ' value="' + w.get("select", g.formatSubmit) + '"' : "") + ">")[0], y.on("change." + v.id, function() {
                         w._hidden.value = o.value ? w.get("select", g.formatSubmit) : ""
                     }), g.container ? t(g.container).append(w._hidden) : y.after(w._hidden)), y.data(s, w).addClass(m.input).attr("tabindex", -1).val(y.data("value") ? w.get("select", g.format) : o.value), g.editable || y.on("focus." + v.id + " click." + v.id, function(t) {
                         t.preventDefault(), w.$root[0].focus()
                     }).on("keydown." + v.id, p), n(o, {
                         haspopup: !0,
                         expanded: !1,
                         readonly: !1,
                         owns: o.id + "_root"
                     }), g.container ? t(g.container).append(w.$root) : y.after(w.$root), w.on({
                         start: w.component.onStart,
                         render: w.component.onRender,
                         stop: w.component.onStop,
                         open: w.component.onOpen,
                         close: w.component.onClose,
                         set: w.component.onSet
                     }).on({
                         start: g.onStart,
                         render: g.onRender,
                         stop: g.onStop,
                         open: g.onOpen,
                         close: g.onClose,
                         set: g.onSet
                     }), h = function(t) {
                         var e, i = "position";
                         return t.currentStyle ? e = t.currentStyle[i] : window.getComputedStyle && (e = getComputedStyle(t)[i]), "fixed" == e
                     }(w.$root.children()[0]), o.autofocus && w.open(), w.trigger("start").trigger("render"));
                     var i
                 },
                 render: function(t) {
                     return t ? w.$root.html(d()) : w.$root.find("." + m.box).html(w.component.nodes(v.open)), w.trigger("render")
                 },
                 stop: function() {
                     return v.start ? (w.close(), w._hidden && w._hidden.parentNode.removeChild(w._hidden), w.$root.remove(), y.removeClass(m.input).removeData(s), setTimeout(function() {
                         y.off("." + v.id)
                     }, 0), o.type = v.type, o.readOnly = !1, w.trigger("stop"), v.methods = {}, v.start = !1, w) : w
                 },
                 open: function(r) {
                     return v.open ? w : (y.addClass(m.active), n(o, "expanded", !0), setTimeout(function() {
                         w.$root.addClass(m.opened), n(w.$root[0], "hidden", !1)
                     }, 0), !1 !== r && (v.open = !0, h && l.css("overflow", "hidden").css("padding-right", "+=" + i()), w.$root[0].focus(), a.on("click." + v.id + " focusin." + v.id, function(t) {
                         var e = t.target;
                         e != o && e != document && 3 != t.which && w.close(e === w.$root.children()[0])
                     }).on("keydown." + v.id, function(i) {
                         var n = i.keyCode,
                             o = w.component.key[n],
                             r = i.target;
                         27 == n ? w.close(!0) : r != w.$root[0] || !o && 13 != n ? t.contains(w.$root[0], r) && 13 == n && (i.preventDefault(), r.click()) : (i.preventDefault(), o ? e._.trigger(w.component.key.go, w, [e._.trigger(o)]) : w.$root.find("." + m.highlighted).hasClass(m.disabled) || w.set("select", w.component.item.highlight).close())
                     })), w.trigger("open"))
                 },
                 close: function(t) {
                     return t && (w.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                         w.$root.on("focus.toOpen", f)
                     }, 0)), y.removeClass(m.active), n(o, "expanded", !1), setTimeout(function() {
                         w.$root.removeClass(m.opened + " " + m.focused), n(w.$root[0], "hidden", !0)
                     }, 0), v.open ? (v.open = !1, h && l.css("overflow", "").css("padding-right", "-=" + i()), a.off("." + v.id), w.trigger("close")) : w
                 },
                 clear: function(t) {
                     return w.set("clear", null, t)
                 },
                 set: function(e, i, n) {
                     var o, r, s = t.isPlainObject(e),
                         a = s ? e : {};
                     if (n = s && t.isPlainObject(i) ? i : n || {}, e) {
                         for (o in s || (a[e] = i), a) r = a[o], o in w.component.item && (void 0 === r && (r = null), w.component.set(o, r, n)), ("select" == o || "clear" == o) && y.val("clear" == o ? "" : w.get(o, g.format)).trigger("change");
                         w.render()
                     }
                     return n.muted ? w : w.trigger("set", a)
                 },
                 get: function(t, i) {
                     if (null != v[t = t || "value"]) return v[t];
                     if ("valueSubmit" == t) {
                         if (w._hidden) return w._hidden.value;
                         t = "value"
                     }
                     if ("value" == t) return o.value;
                     if (t in w.component.item) {
                         if ("string" == typeof i) {
                             var n = w.component.get(t);
                             return n ? e._.trigger(w.component.formats.toString, w.component, [i, n]) : ""
                         }
                         return w.component.get(t)
                     }
                 },
                 on: function(e, i, n) {
                     var o, r, s = t.isPlainObject(e),
                         a = s ? e : {};
                     if (e)
                         for (o in s || (a[e] = i), a) r = a[o], n && (o = "_" + o), v.methods[o] = v.methods[o] || [], v.methods[o].push(r);
                     return w
                 },
                 off: function() {
                     var t, e, i = arguments;
                     for (t = 0, namesCount = i.length; t < namesCount; t += 1)(e = i[t]) in v.methods && delete v.methods[e];
                     return w
                 },
                 trigger: function(t, i) {
                     var n = function(t) {
                         var n = v.methods[t];
                         n && n.map(function(t) {
                             e._.trigger(t, w, [i])
                         })
                     };
                     return n("_" + t), n(t), w
                 }
             };
         return new b
     }

     function i() {
         if (l.height() <= s.height()) return 0;
         var e = t('<div style="visibility:hidden;width:100px" />').appendTo("body"),
             i = e[0].offsetWidth;
         e.css("overflow", "scroll");
         var n = t('<div style="width:100%" />').appendTo(e)[0].offsetWidth;
         return e.remove(), i - n
     }

     function n(e, i, n) {
         if (t.isPlainObject(i))
             for (var r in i) o(e, r, i[r]);
         else o(e, i, n)
     }

     function o(t, e, i) {
         t.setAttribute(("role" == e ? "" : "aria-") + e, i)
     }

     function r() {
         try {
             return document.activeElement
         } catch (t) {}
     }
     var s = t(window),
         a = t(document),
         l = t(document.documentElement);
     return e.klasses = function(t) {
         return {
             picker: t = t || "picker",
             opened: t + "--opened",
             focused: t + "--focused",
             input: t + "__input",
             active: t + "__input--active",
             target: t + "__input--target",
             holder: t + "__holder",
             frame: t + "__frame",
             wrap: t + "__wrap",
             box: t + "__box"
         }
     }, e._ = {
         group: function(t) {
             for (var i, n = "", o = e._.trigger(t.min, t); o <= e._.trigger(t.max, t, [o]); o += t.i) i = e._.trigger(t.item, t, [o]), n += e._.node(t.node, i[0], i[1], i[2]);
             return n
         },
         node: function(e, i, n, o) {
             return i ? "<" + e + (n = n ? ' class="' + n + '"' : "") + (o = o ? " " + o : "") + ">" + (i = t.isArray(i) ? i.join("") : i) + "</" + e + ">" : ""
         },
         lead: function(t) {
             return (10 > t ? "0" : "") + t
         },
         trigger: function(t, e, i) {
             return "function" == typeof t ? t.apply(e, i || []) : t
         },
         digits: function(t) {
             return /\d/.test(t[1]) ? 2 : 1
         },
         isDate: function(t) {
             return {}.toString.call(t).indexOf("Date") > -1 && this.isInteger(t.getDate())
         },
         isInteger: function(t) {
             return {}.toString.call(t).indexOf("Number") > -1 && t % 1 == 0
         },
         ariaAttr: function(e, i) {
             for (var n in t.isPlainObject(e) || (e = {
                     attribute: i
                 }), i = "", e) {
                 var o = ("role" == n ? "" : "aria-") + n;
                 i += null == e[n] ? "" : o + '="' + e[n] + '"'
             }
             return i
         }
     }, e.extend = function(i, n) {
         t.fn[i] = function(o, r) {
             var s = this.data(i);
             return "picker" == o ? s : s && "string" == typeof o ? e._.trigger(s[o], s, [r]) : this.each(function() {
                 t(this).data(i) || new e(this, i, n, o)
             })
         }, t.fn[i].defaults = n.defaults
     }, e
 }),
 function(t) {
     "function" == typeof define && define.amd ? define(["picker", "jquery"], t) : "object" == typeof exports ? module.exports = t(require("./picker.js"), require("jquery")) : t(Picker, jQuery)
 }(function(t, e) {
     function i(t, e) {
         var i, n = this,
             o = t.$node[0],
             r = o.value,
             s = t.$node.data("value"),
             a = s || r,
             l = s ? e.formatSubmit : e.format,
             c = function() {
                 return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(t.$root[0]).direction
             };
         n.settings = e, n.$node = t.$node, n.queue = {
             min: "measure create",
             max: "measure create",
             now: "now create",
             select: "parse create validate",
             highlight: "parse navigate create validate",
             view: "parse create validate viewset",
             disable: "deactivate",
             enable: "activate"
         }, n.item = {}, n.item.clear = null, n.item.disable = (e.disable || []).slice(0), n.item.enable = -(!0 === (i = n.item.disable)[0] ? i.shift() : -1), n.set("min", e.min).set("max", e.max).set("now"), a ? n.set("select", a, {
             format: l
         }) : n.set("select", null).set("highlight", n.item.now), n.key = {
             40: 7,
             38: -7,
             39: function() {
                 return c() ? -1 : 1
             },
             37: function() {
                 return c() ? 1 : -1
             },
             go: function(t) {
                 var e = n.item.highlight,
                     i = new Date(e.year, e.month, e.date + t);
                 n.set("highlight", i, {
                     interval: t
                 }), this.render()
             }
         }, t.on("render", function() {
             t.$root.find("." + e.klass.selectMonth).on("change", function() {
                 var i = this.value;
                 i && (t.set("highlight", [t.get("view").year, i, t.get("highlight").date]), t.$root.find("." + e.klass.selectMonth).trigger("focus"))
             }), t.$root.find("." + e.klass.selectYear).on("change", function() {
                 var i = this.value;
                 i && (t.set("highlight", [i, t.get("view").month, t.get("highlight").date]), t.$root.find("." + e.klass.selectYear).trigger("focus"))
             })
         }, 1).on("open", function() {
             var i = "";
             n.disabled(n.get("now")) && (i = ":not(." + e.klass.buttonToday + ")"), t.$root.find("button" + i + ", select").attr("disabled", !1)
         }, 1).on("close", function() {
             t.$root.find("button, select").attr("disabled", !0)
         }, 1)
     }
     var n, o = t._;
     i.prototype.set = function(t, e, i) {
         var n = this,
             o = n.item;
         return null === e ? ("clear" == t && (t = "select"), o[t] = e, n) : (o["enable" == t ? "disable" : "flip" == t ? "enable" : t] = n.queue[t].split(" ").map(function(o) {
             return e = n[o](t, e, i)
         }).pop(), "select" == t ? n.set("highlight", o.select, i) : "highlight" == t ? n.set("view", o.highlight, i) : t.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
     }, i.prototype.get = function(t) {
         return this.item[t]
     }, i.prototype.create = function(t, i, n) {
         var r, s = this;
         return (i = void 0 === i ? t : i) == -1 / 0 || i == 1 / 0 ? r = i : e.isPlainObject(i) && o.isInteger(i.pick) ? i = i.obj : e.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = o.isDate(i) ? i : s.create().obj) : i = o.isInteger(i) || o.isDate(i) ? s.normalize(new Date(i), n) : s.now(t, i, n), {
             year: r || i.getFullYear(),
             month: r || i.getMonth(),
             date: r || i.getDate(),
             day: r || i.getDay(),
             obj: r || i,
             pick: r || i.getTime()
         }
     }, i.prototype.createRange = function(t, i) {
         var n = this,
             r = function(t) {
                 return !0 === t || e.isArray(t) || o.isDate(t) ? n.create(t) : t
             };
         return o.isInteger(t) || (t = r(t)), o.isInteger(i) || (i = r(i)), o.isInteger(t) && e.isPlainObject(i) ? t = [i.year, i.month, i.date + t] : o.isInteger(i) && e.isPlainObject(t) && (i = [t.year, t.month, t.date + i]), {
             from: r(t),
             to: r(i)
         }
     }, i.prototype.withinRange = function(t, e) {
         return t = this.createRange(t.from, t.to), e.pick >= t.from.pick && e.pick <= t.to.pick
     }, i.prototype.overlapRanges = function(t, e) {
         var i = this;
         return t = i.createRange(t.from, t.to), e = i.createRange(e.from, e.to), i.withinRange(t, e.from) || i.withinRange(t, e.to) || i.withinRange(e, t.from) || i.withinRange(e, t.to)
     }, i.prototype.now = function(t, e, i) {
         return e = new Date, i && i.rel && e.setDate(e.getDate() + i.rel), this.normalize(e, i)
     }, i.prototype.navigate = function(t, i, n) {
         var o, r, s, a, l = e.isArray(i),
             c = e.isPlainObject(i),
             u = this.item.view;
         if (l || c) {
             for (c ? (r = i.year, s = i.month, a = i.date) : (r = +i[0], s = +i[1], a = +i[2]), n && n.nav && u && u.month !== s && (r = u.year, s = u.month), r = (o = new Date(r, s + (n && n.nav ? n.nav : 0), 1)).getFullYear(), s = o.getMonth(); new Date(r, s, a).getMonth() !== s;) a -= 1;
             i = [r, s, a]
         }
         return i
     }, i.prototype.normalize = function(t) {
         return t.setHours(0, 0, 0, 0), t
     }, i.prototype.measure = function(t, e) {
         return e ? "string" == typeof e ? e = this.parse(t, e) : o.isInteger(e) && (e = this.now(t, e, {
             rel: e
         })) : e = "min" == t ? -1 / 0 : 1 / 0, e
     }, i.prototype.viewset = function(t, e) {
         return this.create([e.year, e.month, 1])
     }, i.prototype.validate = function(t, i, n) {
         var r, s, a, l, c = this,
             u = i,
             d = n && n.interval ? n.interval : 1,
             p = -1 === c.item.enable,
             f = c.item.min,
             h = c.item.max,
             v = p && c.item.disable.filter(function(t) {
                 if (e.isArray(t)) {
                     var n = c.create(t).pick;
                     n < i.pick ? r = !0 : n > i.pick && (s = !0)
                 }
                 return o.isInteger(t)
             }).length;
         if ((!n || !n.nav) && (!p && c.disabled(i) || p && c.disabled(i) && (v || r || s) || !p && (i.pick <= f.pick || i.pick >= h.pick)))
             for (p && !v && (!s && d > 0 || !r && 0 > d) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= f.pick ? (a = !0, d = 1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : -1)])) : i.pick >= h.pick && (l = !0, d = -1, i = c.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : 1)])), !a || !l);) i = c.create([i.year, i.month, i.date + d]);
         return i
     }, i.prototype.disabled = function(t) {
         var i = this,
             n = i.item.disable.filter(function(n) {
                 return o.isInteger(n) ? t.day === (i.settings.firstDay ? n : n - 1) % 7 : e.isArray(n) || o.isDate(n) ? t.pick === i.create(n).pick : e.isPlainObject(n) ? i.withinRange(n, t) : void 0
             });
         return n = n.length && !n.filter(function(t) {
             return e.isArray(t) && "inverted" == t[3] || e.isPlainObject(t) && t.inverted
         }).length, -1 === i.item.enable ? !n : n || t.pick < i.item.min.pick || t.pick > i.item.max.pick
     }, i.prototype.parse = function(t, e, i) {
         var n = this,
             r = {};
         return e && "string" == typeof e ? (i && i.format || ((i = i || {}).format = n.settings.format), n.formats.toArray(i.format).map(function(t) {
             var i = n.formats[t],
                 s = i ? o.trigger(i, n, [e, r]) : t.replace(/^!/, "").length;
             i && (r[t] = e.substr(0, s)), e = e.substr(s)
         }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : e
     }, i.prototype.formats = function() {
         function t(t, e, i) {
             var n = t.match(/\w+/)[0];
             return i.mm || i.m || (i.m = e.indexOf(n) + 1), n.length
         }

         function e(t) {
             return t.match(/\w+/)[0].length
         }
         return {
             d: function(t, e) {
                 return t ? o.digits(t) : e.date
             },
             dd: function(t, e) {
                 return t ? 2 : o.lead(e.date)
             },
             ddd: function(t, i) {
                 return t ? e(t) : this.settings.weekdaysShort[i.day]
             },
             dddd: function(t, i) {
                 return t ? e(t) : this.settings.weekdaysFull[i.day]
             },
             m: function(t, e) {
                 return t ? o.digits(t) : e.month + 1
             },
             mm: function(t, e) {
                 return t ? 2 : o.lead(e.month + 1)
             },
             mmm: function(e, i) {
                 var n = this.settings.monthsShort;
                 return e ? t(e, n, i) : n[i.month]
             },
             mmmm: function(e, i) {
                 var n = this.settings.monthsFull;
                 return e ? t(e, n, i) : n[i.month]
             },
             yy: function(t, e) {
                 return t ? 2 : ("" + e.year).slice(2)
             },
             yyyy: function(t, e) {
                 return t ? 4 : e.year
             },
             toArray: function(t) {
                 return t.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
             },
             toString: function(t, e) {
                 var i = this;
                 return i.formats.toArray(t).map(function(t) {
                     return o.trigger(i.formats[t], i, [0, e]) || t.replace(/^!/, "")
                 }).join("")
             }
         }
     }(), i.prototype.isDateExact = function(t, i) {
         var n = this;
         return o.isInteger(t) && o.isInteger(i) || "boolean" == typeof t && "boolean" == typeof i ? t === i : (o.isDate(t) || e.isArray(t)) && (o.isDate(i) || e.isArray(i)) ? n.create(t).pick === n.create(i).pick : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && (n.isDateExact(t.from, i.from) && n.isDateExact(t.to, i.to))
     }, i.prototype.isDateOverlap = function(t, i) {
         var n = this,
             r = n.settings.firstDay ? 1 : 0;
         return o.isInteger(t) && (o.isDate(i) || e.isArray(i)) ? (t = t % 7 + r) === n.create(i).day + 1 : o.isInteger(i) && (o.isDate(t) || e.isArray(t)) ? (i = i % 7 + r) === n.create(t).day + 1 : !(!e.isPlainObject(t) || !e.isPlainObject(i)) && n.overlapRanges(t, i)
     }, i.prototype.flipEnable = function(t) {
         var e = this.item;
         e.enable = t || (-1 == e.enable ? 1 : -1)
     }, i.prototype.deactivate = function(t, i) {
         var n = this,
             r = n.item.disable.slice(0);
         return "flip" == i ? n.flipEnable() : !1 === i ? (n.flipEnable(1), r = []) : !0 === i ? (n.flipEnable(-1), r = []) : i.map(function(t) {
             for (var i, s = 0; s < r.length; s += 1)
                 if (n.isDateExact(t, r[s])) {
                     i = !0;
                     break
                 } i || (o.isInteger(t) || o.isDate(t) || e.isArray(t) || e.isPlainObject(t) && t.from && t.to) && r.push(t)
         }), r
     }, i.prototype.activate = function(t, i) {
         var n = this,
             r = n.item.disable,
             s = r.length;
         return "flip" == i ? n.flipEnable() : !0 === i ? (n.flipEnable(1), r = []) : !1 === i ? (n.flipEnable(-1), r = []) : i.map(function(t) {
             var i, a, l, c;
             for (l = 0; s > l; l += 1) {
                 if (a = r[l], n.isDateExact(a, t)) {
                     i = r[l] = null, c = !0;
                     break
                 }
                 if (n.isDateOverlap(a, t)) {
                     e.isPlainObject(t) ? (t.inverted = !0, i = t) : e.isArray(t) ? (i = t)[3] || i.push("inverted") : o.isDate(t) && (i = [t.getFullYear(), t.getMonth(), t.getDate(), "inverted"]);
                     break
                 }
             }
             if (i)
                 for (l = 0; s > l; l += 1)
                     if (n.isDateExact(r[l], t)) {
                         r[l] = null;
                         break
                     } if (c)
                 for (l = 0; s > l; l += 1)
                     if (n.isDateOverlap(r[l], t)) {
                         r[l] = null;
                         break
                     } i && r.push(i)
         }), r.filter(function(t) {
             return null != t
         })
     }, i.prototype.nodes = function(t) {
         var e, i, n = this,
             r = n.settings,
             s = n.item,
             a = s.now,
             l = s.select,
             c = s.highlight,
             u = s.view,
             d = s.disable,
             p = s.min,
             f = s.max,
             h = (e = (r.showWeekdaysFull ? r.weekdaysFull : r.weekdaysLetter).slice(0), i = r.weekdaysFull.slice(0), r.firstDay && (e.push(e.shift()), i.push(i.shift())), o.node("thead", o.node("tr", o.group({
                 min: 0,
                 max: 6,
                 i: 1,
                 node: "th",
                 item: function(t) {
                     return [e[t], r.klass.weekdays, 'scope=col title="' + i[t] + '"']
                 }
             })))),
             v = function(t) {
                 return o.node("div", " ", r.klass["nav" + (t ? "Next" : "Prev")] + (t && u.year >= f.year && u.month >= f.month || !t && u.year <= p.year && u.month <= p.month ? " " + r.klass.navDisabled : ""), "data-nav=" + (t || -1) + " " + o.ariaAttr({
                     role: "button",
                     controls: n.$node[0].id + "_table"
                 }) + ' title="' + (t ? r.labelMonthNext : r.labelMonthPrev) + '"')
             },
             g = function(e) {
                 var i = r.showMonthsShort ? r.monthsShort : r.monthsFull;
                 return "short_months" == e && (i = r.monthsShort), r.selectMonths && null == e ? o.node("select", o.group({
                     min: 0,
                     max: 11,
                     i: 1,
                     node: "option",
                     item: function(t) {
                         return [i[t], 0, "value=" + t + (u.month == t ? " selected" : "") + (u.year == p.year && t < p.month || u.year == f.year && t > f.month ? " disabled" : "")]
                     }
                 }), r.klass.selectMonth + " browser-default", (t ? "" : "disabled") + " " + o.ariaAttr({
                     controls: n.$node[0].id + "_table"
                 }) + ' title="' + r.labelMonthSelect + '"') : "short_months" == e ? null != l ? o.node("div", i[l.month]) : o.node("div", i[u.month]) : o.node("div", i[u.month], r.klass.month)
             },
             m = function(e) {
                 var i = u.year,
                     s = !0 === r.selectYears ? 5 : ~~(r.selectYears / 2);
                 if (s) {
                     var a = p.year,
                         l = f.year,
                         c = i - s,
                         d = i + s;
                     if (a > c && (d += a - c, c = a), d > l) {
                         var h = c - a,
                             v = d - l;
                         c -= h > v ? v : h, d = l
                     }
                     if (r.selectYears && null == e) return o.node("select", o.group({
                         min: c,
                         max: d,
                         i: 1,
                         node: "option",
                         item: function(t) {
                             return [t, 0, "value=" + t + (i == t ? " selected" : "")]
                         }
                     }), r.klass.selectYear + " browser-default", (t ? "" : "disabled") + " " + o.ariaAttr({
                         controls: n.$node[0].id + "_table"
                     }) + ' title="' + r.labelYearSelect + '"')
                 }
                 return "raw" == e ? o.node("div", i) : o.node("div", i, r.klass.year)
             };
         return createDayLabel = function() {
             return null != l ? o.node("div", l.date) : o.node("div", a.date)
         }, createWeekdayLabel = function() {
             var t;
             return t = null != l ? l.day : a.day, r.weekdaysFull[t]
         }, o.node("div", o.node("div", createWeekdayLabel(), "picker__weekday-display") + o.node("div", g("short_months"), r.klass.month_display) + o.node("div", createDayLabel(), r.klass.day_display) + o.node("div", m("raw"), r.klass.year_display), r.klass.date_display) + o.node("div", o.node("div", (r.selectYears, g() + m() + v() + v(1)), r.klass.header) + o.node("table", h + o.node("tbody", o.group({
             min: 0,
             max: 5,
             i: 1,
             node: "tr",
             item: function(t) {
                 var e = r.firstDay && 0 === n.create([u.year, u.month, 1]).day ? -7 : 0;
                 return [o.group({
                     min: 7 * t - u.day + e + 1,
                     max: function() {
                         return this.min + 7 - 1
                     },
                     i: 1,
                     node: "td",
                     item: function(t) {
                         t = n.create([u.year, u.month, t + (r.firstDay ? 1 : 0)]);
                         var e, i = l && l.pick == t.pick,
                             s = c && c.pick == t.pick,
                             h = d && n.disabled(t) || t.pick < p.pick || t.pick > f.pick,
                             v = o.trigger(n.formats.toString, n, [r.format, t]);
                         return [o.node("div", t.date, (e = [r.klass.day], e.push(u.month == t.month ? r.klass.infocus : r.klass.outfocus), a.pick == t.pick && e.push(r.klass.now), i && e.push(r.klass.selected), s && e.push(r.klass.highlighted), h && e.push(r.klass.disabled), e.join(" ")), "data-pick=" + t.pick + " " + o.ariaAttr({
                             role: "gridcell",
                             label: v,
                             selected: !(!i || n.$node.val() !== v) || null,
                             activedescendant: !!s || null,
                             disabled: !!h || null
                         })), "", o.ariaAttr({
                             role: "presentation"
                         })]
                     }
                 })]
             }
         })), r.klass.table, 'id="' + n.$node[0].id + '_table" ' + o.ariaAttr({
             role: "grid",
             controls: n.$node[0].id,
             readonly: !0
         })), r.klass.calendar_container) + o.node("div", o.node("button", r.today, "btn-flat picker__today", "type=button data-pick=" + a.pick + (t && !n.disabled(a) ? "" : " disabled") + " " + o.ariaAttr({
             controls: n.$node[0].id
         })) + o.node("button", r.clear, "btn-flat picker__clear", "type=button data-clear=1" + (t ? "" : " disabled") + " " + o.ariaAttr({
             controls: n.$node[0].id
         })) + o.node("button", r.close, "btn-flat picker__close", "type=button data-close=true " + (t ? "" : " disabled") + " " + o.ariaAttr({
             controls: n.$node[0].id
         })), r.klass.footer)
     }, i.defaults = {
         labelMonthNext: "Next month",
         labelMonthPrev: "Previous month",
         labelMonthSelect: "Select a month",
         labelYearSelect: "Select a year",
         monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
         weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
         weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
         weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
         today: "Today",
         clear: "Clear",
         close: "Close",
         format: "d mmmm, yyyy",
         klass: {
             table: (n = t.klasses().picker + "__") + "table",
             header: n + "header",
             date_display: n + "date-display",
             day_display: n + "day-display",
             month_display: n + "month-display",
             year_display: n + "year-display",
             calendar_container: n + "calendar-container",
             navPrev: n + "nav--prev",
             navNext: n + "nav--next",
             navDisabled: n + "nav--disabled",
             month: n + "month",
             year: n + "year",
             selectMonth: n + "select--month",
             selectYear: n + "select--year",
             weekdays: n + "weekday",
             day: n + "day",
             disabled: n + "day--disabled",
             selected: n + "day--selected",
             highlighted: n + "day--highlighted",
             now: n + "day--today",
             infocus: n + "day--infocus",
             outfocus: n + "day--outfocus",
             footer: n + "footer",
             buttonClear: n + "button--clear",
             buttonToday: n + "button--today",
             buttonClose: n + "button--close"
         }
     }, t.extend("pickadate", i)
 }),
 function(t) {
     function e() {
         var e = +t(this).attr("length"),
             i = +t(this).val().length,
             n = e >= i;
         t(this).parent().find('span[class="character-counter"]').html(i + "/" + e),
             function(t, e) {
                 var i = e.hasClass("invalid");
                 t && i ? e.removeClass("invalid") : t || i || (e.removeClass("valid"), e.addClass("invalid"))
             }(n, t(this))
     }

     function i() {
         t(this).parent().find('span[class="character-counter"]').html("")
     }
     t.fn.characterCounter = function() {
         return this.each(function() {
             void 0 !== t(this).attr("length") && (t(this).on("input", e), t(this).on("focus", e), t(this).on("blur", i), function(e) {
                 var i = t("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
                 e.parent().append(i)
             }(t(this)))
         })
     }, t(document).ready(function() {
         t("input, textarea").characterCounter()
     })
 }(jQuery),
 function(t) {
     var e = {
         init: function(e) {
             return e = t.extend({
                 time_constant: 200,
                 dist: -100,
                 shift: 0,
                 padding: 0,
                 full_width: !1
             }, e), this.each(function() {
                 function i(t) {
                     return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientX : t.clientX
                 }

                 function n(t) {
                     return t.targetTouches && t.targetTouches.length >= 1 ? t.targetTouches[0].clientY : t.clientY
                 }

                 function o(t) {
                     return t >= m ? t % m : 0 > t ? o(m + t % m) : t
                 }

                 function r(t) {
                     var i, n, r, s, a, l, c;
                     for (f = "number" == typeof t ? t : f, h = Math.floor((f + g / 2) / g), a = -(s = 0 > (r = f - h * g) ? 1 : -1) * r * 2 / g, e.full_width ? c = "translateX(0)" : (c = "translateX(" + (P[0].clientWidth - item_width) / 2 + "px) ", c += "translateY(" + (P[0].clientHeight - item_width) / 2 + "px)"), (l = p[o(h)]).style[C] = c + " translateX(" + -r / 2 + "px) translateX(" + s * e.shift * a * i + "px) translateZ(" + e.dist * a + "px)", l.style.zIndex = 0, e.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * a, l.style.opacity = tweenedOpacity, n = m >> 1, i = 1; n >= i; ++i) e.full_width ? (zTranslation = e.dist, tweenedOpacity = i === n && 0 > r ? 1 - a : 1) : (zTranslation = e.dist * (2 * i + a * s), tweenedOpacity = 1 - .2 * (2 * i + a * s)), (l = p[o(h + i)]).style[C] = c + " translateX(" + (e.shift + (g * i - r) / 2) + "px) translateZ(" + zTranslation + "px)", l.style.zIndex = -i, l.style.opacity = tweenedOpacity, e.full_width ? (zTranslation = e.dist, tweenedOpacity = i === n && r > 0 ? 1 - a : 1) : (zTranslation = e.dist * (2 * i - a * s), tweenedOpacity = 1 - .2 * (2 * i - a * s)), (l = p[o(h - i)]).style[C] = c + " translateX(" + (-e.shift + (-g * i - r) / 2) + "px) translateZ(" + zTranslation + "px)", l.style.zIndex = -i, l.style.opacity = tweenedOpacity;
                     (l = p[o(h)]).style[C] = c + " translateX(" + -r / 2 + "px) translateX(" + s * e.shift * a + "px) translateZ(" + e.dist * a + "px)", l.style.zIndex = 0, e.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * a, l.style.opacity = tweenedOpacity
                 }

                 function s() {
                     var t, e, i;
                     e = (t = Date.now()) - $, $ = t, i = f - S, S = f, k = .8 * (1e3 * i / (1 + e)) + .2 * k
                 }

                 function a() {
                     var t, i;
                     x && (t = Date.now() - $, (i = x * Math.exp(-t / e.time_constant)) > 2 || -2 > i ? (r(T - i), requestAnimationFrame(a)) : r(T))
                 }

                 function l(i) {
                     if (A) return i.preventDefault(), i.stopPropagation(), !1;
                     if (!e.full_width) {
                         var n = t(i.target).closest(".carousel-item").index(),
                             o = h % m - n;
                         0 > o ? Math.abs(o + m) < Math.abs(o) && (o += m) : o > 0 && Math.abs(o - m) < o && (o -= m), 0 > o ? t(this).trigger("carouselNext", [Math.abs(o)]) : o > 0 && t(this).trigger("carouselPrev", [o])
                     }
                 }

                 function c(t) {
                     v = !0, A = !1, O = !1, b = i(t), w = n(t), k = x = 0, S = f, $ = Date.now(), clearInterval(E), E = setInterval(s, 100)
                 }

                 function u(t) {
                     var e, o;
                     if (v)
                         if (e = i(t), y = n(t), o = b - e, 30 > Math.abs(w - y) && !O)(o > 2 || -2 > o) && (A = !0, b = e, r(f + o));
                         else {
                             if (A) return t.preventDefault(), t.stopPropagation(), !1;
                             O = !0
                         } return A ? (t.preventDefault(), t.stopPropagation(), !1) : void 0
                 }

                 function d(t) {
                     return v = !1, clearInterval(E), T = f, (k > 10 || -10 > k) && (T = f + (x = .9 * k)), T = Math.round(T / g) * g, x = T - f, $ = Date.now(), requestAnimationFrame(a), t.preventDefault(), t.stopPropagation(), !1
                 }
                 var p, f, h, v, g, m, b, w, x, T, k, C, S, $, E, A, O, P = t(this);
                 return !!P.hasClass("initialized") || (e.full_width && (e.dist = 0, imageHeight = P.find(".carousel-item img").first().load(function() {
                     P.css("height", t(this).height())
                 })), P.addClass("initialized"), v = !1, f = T = 0, p = [], item_width = P.find(".carousel-item").first().innerWidth(), g = 2 * item_width + e.padding, P.find(".carousel-item").each(function() {
                     p.push(t(this)[0])
                 }), m = p.length, C = "transform", ["webkit", "Moz", "O", "ms"].every(function(t) {
                     var e = t + "Transform";
                     return void 0 === document.body.style[e] || (C = e, !1)
                 }), window.onresize = r, void 0 !== window.ontouchstart && (P[0].addEventListener("touchstart", c), P[0].addEventListener("touchmove", u), P[0].addEventListener("touchend", d)), P[0].addEventListener("mousedown", c), P[0].addEventListener("mousemove", u), P[0].addEventListener("mouseup", d), P[0].addEventListener("click", l), r(f), t(this).on("carouselNext", function(t, e) {
                     void 0 === e && (e = 1), f !== (T = f + g * e) && (x = T - f, $ = Date.now(), requestAnimationFrame(a))
                 }), void t(this).on("carouselPrev", function(t, e) {
                     void 0 === e && (e = 1), f !== (T = f - g * e) && (x = T - f, $ = Date.now(), requestAnimationFrame(a))
                 }))
             })
         },
         next: function(e) {
             t(this).trigger("carouselNext", [e])
         },
         prev: function(e) {
             t(this).trigger("carouselPrev", [e])
         }
     };
     t.fn.carousel = function(i) {
         return e[i] ? e[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.carousel") : e.init.apply(this, arguments)
     }
 }(jQuery),

//Materilize js ends here


// slick-carousel starts here

 function(t) {
     "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
 }(function(t) {
     var e = window.Slick || {};
     (e = function() {
         var e = 0;
         return function(i, n) {
             var o, r = this;
             r.defaults = {
                 accessibility: !0,
                 adaptiveHeight: !1,
                 appendArrows: t(i),
                 appendDots: t(i),
                 arrows: !0,
                 asNavFor: null,
                 prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                 nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                 autoplay: !1,
                 autoplaySpeed: 3e3,
                 centerMode: !1,
                 centerPadding: "50px",
                 cssEase: "ease",
                 customPaging: function(t, e) {
                     return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                 },
                 dots: !1,
                 dotsClass: "slick-dots",
                 draggable: !0,
                 easing: "linear",
                 edgeFriction: .35,
                 fade: !1,
                 focusOnSelect: !1,
                 infinite: !0,
                 initialSlide: 0,
                 lazyLoad: "ondemand",
                 mobileFirst: !1,
                 pauseOnHover: !0,
                 pauseOnDotsHover: !1,
                 respondTo: "window",
                 responsive: null,
                 rows: 1,
                 rtl: !1,
                 slide: "",
                 slidesPerRow: 1,
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 speed: 500,
                 swipe: !0,
                 swipeToSlide: !1,
                 touchMove: !0,
                 touchThreshold: 5,
                 useCSS: !0,
                 useTransform: !1,
                 variableWidth: !1,
                 vertical: !1,
                 verticalSwiping: !1,
                 waitForAnimate: !0,
                 zIndex: 1e3
             }, r.initials = {
                 animating: !1,
                 dragging: !1,
                 autoPlayTimer: null,
                 currentDirection: 0,
                 currentLeft: null,
                 currentSlide: 0,
                 direction: 1,
                 $dots: null,
                 listWidth: null,
                 listHeight: null,
                 loadIndex: 0,
                 $nextArrow: null,
                 $prevArrow: null,
                 slideCount: null,
                 slideWidth: null,
                 $slideTrack: null,
                 $slides: null,
                 sliding: !1,
                 slideOffset: 0,
                 swipeLeft: null,
                 $list: null,
                 touchObject: {},
                 transformsEnabled: !1,
                 unslicked: !1
             }, t.extend(r, r.initials), r.activeBreakpoint = null, r.animType = null, r.animProp = null, r.breakpoints = [], r.breakpointSettings = [], r.cssTransitions = !1, r.hidden = "hidden", r.paused = !1, r.positionProp = null, r.respondTo = null, r.rowCount = 1, r.shouldClick = !0, r.$slider = t(i), r.$slidesCache = null, r.transformType = null, r.transitionType = null, r.visibilityChange = "visibilitychange", r.windowWidth = 0, r.windowTimer = null, o = t(i).data("slick") || {}, r.options = t.extend({}, r.defaults, o, n), r.currentSlide = r.options.initialSlide, r.originalSettings = r.options, void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"), r.autoPlay = t.proxy(r.autoPlay, r), r.autoPlayClear = t.proxy(r.autoPlayClear, r), r.changeSlide = t.proxy(r.changeSlide, r), r.clickHandler = t.proxy(r.clickHandler, r), r.selectHandler = t.proxy(r.selectHandler, r), r.setPosition = t.proxy(r.setPosition, r), r.swipeHandler = t.proxy(r.swipeHandler, r), r.dragHandler = t.proxy(r.dragHandler, r), r.keyHandler = t.proxy(r.keyHandler, r), r.autoPlayIterator = t.proxy(r.autoPlayIterator, r), r.instanceUid = e++, r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, r.registerBreakpoints(), r.init(!0), r.checkResponsive(!0)
         }
     }()).prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
         var o = this;
         if ("boolean" == typeof i) n = i, i = null;
         else if (0 > i || i >= o.slideCount) return !1;
         o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === n ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, i) {
             t(i).attr("data-slick-index", e)
         }), o.$slidesCache = o.$slides, o.reinit()
     }, e.prototype.animateHeight = function() {
         var t = this;
         if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
             var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
             t.$list.animate({
                 height: e
             }, t.options.speed)
         }
     }, e.prototype.animateSlide = function(e, i) {
         var n = {},
             o = this;
         o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
             left: e
         }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
             top: e
         }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({
             animStart: o.currentLeft
         }).animate({
             animStart: e
         }, {
             duration: o.options.speed,
             easing: o.options.easing,
             step: function(t) {
                 t = Math.ceil(t), !1 === o.options.vertical ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
             },
             complete: function() {
                 i && i.call()
             }
         })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
             o.disableTransition(), i.call()
         }, o.options.speed))
     }, e.prototype.asNavFor = function(e) {
         var i = this.options.asNavFor;
         i && null !== i && (i = t(i).not(this.$slider)), null !== i && "object" == typeof i && i.each(function() {
             var i = t(this).slick("getSlick");
             i.unslicked || i.slideHandler(e, !0)
         })
     }, e.prototype.applyTransition = function(t) {
         var e = this,
             i = {};
         !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
     }, e.prototype.autoPlay = function() {
         var t = this;
         t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && !0 !== t.paused && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
     }, e.prototype.autoPlayClear = function() {
         this.autoPlayTimer && clearInterval(this.autoPlayTimer)
     }, e.prototype.autoPlayIterator = function() {
         var t = this;
         !1 === t.options.infinite ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 == 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
     }, e.prototype.buildArrows = function() {
         var e = this;
         !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
             "aria-disabled": "true",
             tabindex: "-1"
         }))
     }, e.prototype.buildDots = function() {
         var e, i, n = this;
         if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
             for (i = '<ul class="' + n.options.dotsClass + '">', e = 0; e <= n.getDotCount(); e += 1) i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
             i += "</ul>", n.$dots = t(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
         }
     }, e.prototype.buildOut = function() {
         var e = this;
         e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
             t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
         }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
     }, e.prototype.buildRows = function() {
         var t, e, i, n, o, r, s, a = this;
         if (n = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
             for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), t = 0; o > t; t++) {
                 var l = document.createElement("div");
                 for (e = 0; e < a.options.rows; e++) {
                     var c = document.createElement("div");
                     for (i = 0; i < a.options.slidesPerRow; i++) {
                         var u = t * s + (e * a.options.slidesPerRow + i);
                         r.get(u) && c.appendChild(r.get(u))
                     }
                     l.appendChild(c)
                 }
                 n.appendChild(l)
             }
             a.$slider.html(n), a.$slider.children().children().children().css({
                 width: 100 / a.options.slidesPerRow + "%",
                 display: "inline-block"
             })
         }
     }, e.prototype.checkResponsive = function(e, i) {
         var n, o, r, s = this,
             a = !1,
             l = s.$slider.width(),
             c = window.innerWidth || t(window).width();
         if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
             for (n in o = null, s.breakpoints) s.breakpoints.hasOwnProperty(n) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[n] && (o = s.breakpoints[n]) : r > s.breakpoints[n] && (o = s.breakpoints[n]));
             null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || i) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = o), e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
         }
     }, e.prototype.changeSlide = function(e, i) {
         var n, o, r = this,
             s = t(e.target);
         switch (s.is("a") && e.preventDefault(), s.is("li") || (s = s.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0 ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
             case "previous":
                 o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                 break;
             case "next":
                 o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                 break;
             case "index":
                 var a = 0 === e.data.index ? 0 : e.data.index || s.index() * r.options.slidesToScroll;
                 r.slideHandler(r.checkNavigable(a), !1, i), s.children().trigger("focus");
                 break;
             default:
                 return
         }
     }, e.prototype.checkNavigable = function(t) {
         var e, i;
         if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
         else
             for (var n in e) {
                 if (t < e[n]) {
                     t = i;
                     break
                 }
                 i = e[n]
             }
         return t
     }, e.prototype.cleanUpEvents = function() {
         var e = this;
         e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide), !0 === e.options.pauseOnDotsHover && !0 === e.options.autoplay && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
     }, e.prototype.cleanUpRows = function() {
         var t, e = this;
         e.options.rows > 1 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.html(t))
     }, e.prototype.clickHandler = function(t) {
         !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
     }, e.prototype.destroy = function(e) {
         var i = this;
         i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
             t(this).attr("style", t(this).data("originalStyling"))
         }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
     }, e.prototype.disableTransition = function(t) {
         var e = this,
             i = {};
         i[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
     }, e.prototype.fadeSlide = function(t, e) {
         var i = this;
         !1 === i.cssTransitions ? (i.$slides.eq(t).css({
             zIndex: i.options.zIndex
         }), i.$slides.eq(t).animate({
             opacity: 1
         }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
             opacity: 1,
             zIndex: i.options.zIndex
         }), e && setTimeout(function() {
             i.disableTransition(t), e.call()
         }, i.options.speed))
     }, e.prototype.fadeSlideOut = function(t) {
         var e = this;
         !1 === e.cssTransitions ? e.$slides.eq(t).animate({
             opacity: 0,
             zIndex: e.options.zIndex - 2
         }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
             opacity: 0,
             zIndex: e.options.zIndex - 2
         }))
     }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
         var e = this;
         null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
     }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
         return this.currentSlide
     }, e.prototype.getDotCount = function() {
         var t = this,
             e = 0,
             i = 0,
             n = 0;
         if (!0 === t.options.infinite)
             for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
         else if (!0 === t.options.centerMode) n = t.slideCount;
         else
             for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
         return n - 1
     }, e.prototype.getLeft = function(t) {
         var e, i, n, o = this,
             r = 0;
         return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
     }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
         return this.options[t]
     }, e.prototype.getNavigableIndexes = function() {
         var t, e = this,
             i = 0,
             n = 0,
             o = [];
         for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > i;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
         return o
     }, e.prototype.getSlick = function() {
         return this
     }, e.prototype.getSlideCount = function() {
         var e, i, n = this;
         return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, r) {
             return r.offsetLeft - i + t(r).outerWidth() / 2 > -1 * n.swipeLeft ? (e = r, !1) : void 0
         }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
     }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
         this.changeSlide({
             data: {
                 message: "index",
                 index: parseInt(t)
             }
         }, e)
     }, e.prototype.init = function(e) {
         var i = this;
         t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA()
     }, e.prototype.initArrowEvents = function() {
         var t = this;
         !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
             message: "previous"
         }, t.changeSlide), t.$nextArrow.on("click.slick", {
             message: "next"
         }, t.changeSlide))
     }, e.prototype.initDotEvents = function() {
         var e = this;
         !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
             message: "index"
         }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && !0 === e.options.autoplay && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
     }, e.prototype.initializeEvents = function() {
         var e = this;
         e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
             action: "start"
         }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
             action: "move"
         }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
             action: "end"
         }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
             action: "end"
         }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
     }, e.prototype.initUI = function() {
         var t = this;
         !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show(), !0 === t.options.autoplay && t.autoPlay()
     }, e.prototype.keyHandler = function(t) {
         var e = this;
         t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
             data: {
                 message: "previous"
             }
         }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
             data: {
                 message: "next"
             }
         }))
     }, e.prototype.lazyLoad = function() {
         function e(e) {
             t("img[data-lazy]", e).each(function() {
                 var e = t(this),
                     i = t(this).attr("data-lazy"),
                     n = document.createElement("img");
                 n.onload = function() {
                     e.animate({
                         opacity: 0
                     }, 100, function() {
                         e.attr("src", i).animate({
                             opacity: 1
                         }, 200, function() {
                             e.removeAttr("data-lazy").removeClass("slick-loading")
                         })
                     })
                 }, n.src = i
             })
         }
         var i, n, o = this;
         !0 === o.options.centerMode ? !0 === o.options.infinite ? n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = (i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide) + o.options.slidesToShow, !0 === o.options.fade && (i > 0 && i--, n <= o.slideCount && n++)), e(o.$slider.find(".slick-slide").slice(i, n)), o.slideCount <= o.options.slidesToShow ? e(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? e(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && e(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
     }, e.prototype.loadSlider = function() {
         var t = this;
         t.setPosition(), t.$slideTrack.css({
             opacity: 1
         }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
     }, e.prototype.next = e.prototype.slickNext = function() {
         this.changeSlide({
             data: {
                 message: "next"
             }
         })
     }, e.prototype.orientationChange = function() {
         this.checkResponsive(), this.setPosition()
     }, e.prototype.pause = e.prototype.slickPause = function() {
         this.autoPlayClear(), this.paused = !0
     }, e.prototype.play = e.prototype.slickPlay = function() {
         this.paused = !1, this.autoPlay()
     }, e.prototype.postSlide = function(t) {
         var e = this;
         e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, !0 === e.options.autoplay && !1 === e.paused && e.autoPlay(), !0 === e.options.accessibility && e.initADA()
     }, e.prototype.prev = e.prototype.slickPrev = function() {
         this.changeSlide({
             data: {
                 message: "previous"
             }
         })
     }, e.prototype.preventDefault = function(t) {
         t.preventDefault()
     }, e.prototype.progressiveLazyLoad = function() {
         var e, i = this;
         t("img[data-lazy]", i.$slider).length > 0 && ((e = t("img[data-lazy]", i.$slider).first()).attr("src", null), e.attr("src", e.attr("data-lazy")).removeClass("slick-loading").load(function() {
             e.removeAttr("data-lazy"), i.progressiveLazyLoad(), !0 === i.options.adaptiveHeight && i.setPosition()
         }).error(function() {
             e.removeAttr("data-lazy"), i.progressiveLazyLoad()
         }))
     }, e.prototype.refresh = function(e) {
         var i, n, o = this;
         n = o.slideCount - o.options.slidesToShow, o.options.infinite || (o.slideCount <= o.options.slidesToShow ? o.currentSlide = 0 : o.currentSlide > n && (o.currentSlide = n)), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
             currentSlide: i
         }), o.init(), e || o.changeSlide({
             data: {
                 message: "index",
                 index: i
             }
         }, !1)
     }, e.prototype.registerBreakpoints = function() {
         var e, i, n, o = this,
             r = o.options.responsive || null;
         if ("array" === t.type(r) && r.length) {
             for (e in o.respondTo = o.options.respondTo || "window", r)
                 if (n = o.breakpoints.length - 1, i = r[e].breakpoint, r.hasOwnProperty(e)) {
                     for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                     o.breakpoints.push(i), o.breakpointSettings[i] = r[e].settings
                 } o.breakpoints.sort(function(t, e) {
                 return o.options.mobileFirst ? t - e : e - t
             })
         }
     }, e.prototype.reinit = function() {
         var e = this;
         e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), !0 === e.options.autoplay && e.focusHandler()
     }, e.prototype.resize = function() {
         var e = this;
         t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
             e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
         }, 50))
     }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
         var n = this;
         return "boolean" == typeof t ? t = !0 === (e = t) ? 0 : n.slideCount - 1 : t = !0 === e ? --t : t, !(n.slideCount < 1 || 0 > t || t > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
     }, e.prototype.setCSS = function(t) {
         var e, i, n = this,
             o = {};
         !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled ? n.$slideTrack.css(o) : (o = {}, !1 === n.cssTransitions ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
     }, e.prototype.setDimensions = function() {
         var t = this;
         !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
             padding: "0px " + t.options.centerPadding
         }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
             padding: t.options.centerPadding + " 0px"
         })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
         var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
         !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
     }, e.prototype.setFade = function() {
         var e, i = this;
         i.$slides.each(function(n, o) {
             e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(o).css({
                 position: "relative",
                 right: e,
                 top: 0,
                 zIndex: i.options.zIndex - 2,
                 opacity: 0
             }) : t(o).css({
                 position: "relative",
                 left: e,
                 top: 0,
                 zIndex: i.options.zIndex - 2,
                 opacity: 0
             })
         }), i.$slides.eq(i.currentSlide).css({
             zIndex: i.options.zIndex - 1,
             opacity: 1
         })
     }, e.prototype.setHeight = function() {
         var t = this;
         if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
             var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
             t.$list.css("height", e)
         }
     }, e.prototype.setOption = e.prototype.slickSetOption = function(e, i, n) {
         var o, r, s = this;
         if ("responsive" === e && "array" === t.type(i))
             for (r in i)
                 if ("array" !== t.type(s.options.responsive)) s.options.responsive = [i[r]];
                 else {
                     for (o = s.options.responsive.length - 1; o >= 0;) s.options.responsive[o].breakpoint === i[r].breakpoint && s.options.responsive.splice(o, 1), o--;
                     s.options.responsive.push(i[r])
                 }
         else s.options[e] = i;
         !0 === n && (s.unload(), s.reinit())
     }, e.prototype.setPosition = function() {
         var t = this;
         t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
     }, e.prototype.setProps = function() {
         var t = this,
             e = document.body.style;
         t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
     }, e.prototype.setSlideClasses = function(t) {
         var e, i, n, o, r = this;
         i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(t).addClass("slick-current"), !0 === r.options.centerMode ? (e = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + t : t, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
     }, e.prototype.setupInfinite = function() {
         var e, i, n, o = this;
         if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
             for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
             for (e = 0; n > e; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
             o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                 t(this).attr("id", "")
             })
         }
     }, e.prototype.setPaused = function(t) {
         var e = this;
         !0 === e.options.autoplay && !0 === e.options.pauseOnHover && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
     }, e.prototype.selectHandler = function(e) {
         var i = this,
             n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
             o = parseInt(n.attr("data-slick-index"));
         return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
     }, e.prototype.slideHandler = function(t, e, i) {
         var n, o, r, s, a = null,
             l = this;
         return e = e || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === e && l.asNavFor(t), n = t, a = l.getLeft(n), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(s, function() {
             l.postSlide(n)
         }) : l.postSlide(n))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (n = l.currentSlide, !0 !== i ? l.animateSlide(s, function() {
             l.postSlide(n)
         }) : l.postSlide(n))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), o = 0 > n ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : n - l.slideCount : n, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), r = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== i ? (l.fadeSlideOut(r), l.fadeSlide(o, function() {
             l.postSlide(o)
         })) : l.postSlide(o), void l.animateHeight()) : void(!0 !== i ? l.animateSlide(a, function() {
             l.postSlide(o)
         }) : l.postSlide(o))))
     }, e.prototype.startLoad = function() {
         var t = this;
         !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
     }, e.prototype.swipeDirection = function() {
         var t, e, i, n, o = this;
         return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), 0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === o.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
     }, e.prototype.swipeEnd = function(t) {
         var e, i = this;
         if (i.dragging = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
         if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
             case "left":
                 e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.slideHandler(e), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [i, "left"]);
                 break;
             case "right":
                 e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.slideHandler(e), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [i, "right"])
         } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
     }, e.prototype.swipeHandler = function(t) {
         var e = this;
         if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
             case "start":
                 e.swipeStart(t);
                 break;
             case "move":
                 e.swipeMove(t);
                 break;
             case "end":
                 e.swipeEnd(t)
         }
     }, e.prototype.swipeMove = function(t) {
         var e, i, n, o, r, s = this;
         return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || r && 1 !== r.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), "vertical" !== (i = s.swipeDirection()) ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), n = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = e + n * o : s.swipeLeft = e + n * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = e + n * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
     }, e.prototype.swipeStart = function(t) {
         var e, i = this;
         return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
     }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
         var t = this;
         null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
     }, e.prototype.unload = function() {
         var e = this;
         t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
     }, e.prototype.unslick = function(t) {
         var e = this;
         e.$slider.trigger("unslick", [e, t]), e.destroy()
     }, e.prototype.updateArrows = function() {
         var t = this;
         Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
     }, e.prototype.updateDots = function() {
         var t = this;
         null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
     }, e.prototype.visibility = function() {
         var t = this;
         document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : !0 === t.options.autoplay && (t.paused = !1, t.autoPlay())
     }, e.prototype.initADA = function() {
         var e = this;
         e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
             "aria-hidden": "true",
             tabindex: "-1"
         }).find("a, input, button, select").attr({
             tabindex: "-1"
         }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
             t(this).attr({
                 role: "option",
                 "aria-describedby": "slick-slide" + e.instanceUid + i
             })
         }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
             t(this).attr({
                 role: "presentation",
                 "aria-selected": "false",
                 "aria-controls": "navigation" + e.instanceUid + i,
                 id: "slick-slide" + e.instanceUid + i
             })
         }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
     }, e.prototype.activateADA = function() {
         this.$slideTrack.find(".slick-active").attr({
             "aria-hidden": "false"
         }).find("a, input, button, select").attr({
             tabindex: "0"
         })
     }, e.prototype.focusHandler = function() {
         var e = this;
         e.$slider.on("focus.slick blur.slick", "*", function(i) {
             i.stopImmediatePropagation();
             var n = t(this);
             setTimeout(function() {
                 e.isPlay && (n.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
             }, 0)
         })
     }, t.fn.slick = function() {
         var t, i, n = this,
             o = arguments[0],
             r = Array.prototype.slice.call(arguments, 1),
             s = n.length;
         for (t = 0; s > t; t++)
             if ("object" == typeof o || void 0 === o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, r), void 0 !== i) return i;
         return n
     }
 }),

// slick-carousel js ends here


// Website template js starts here

 $(function() {
     $("#menu-left").sideNav({
         menuWidth: 240,
         edge: "left",
         closeOnClick: !1
     }), $("#menu-right").sideNav({
         menuWidth: 300,
         edge: "right",
         closeOnClick: !1
     }), $("#main-menu li.has-sub > a").on("click", function() {
         $(this).removeAttr("href");
         var t = $(this).parent("li");
         t.hasClass("open") ? (t.removeClass("open"), t.find("li").removeClass("open"), t.find("ul").slideUp()) : (t.addClass("open"), t.children("ul").slideDown(), t.siblings("li").children("ul").slideUp(), t.siblings("li").removeClass("open"), t.siblings("li").find("li").removeClass("open"), t.siblings("li").find("ul").slideUp())
     }), $("#main-menu > ul > li.has-sub > a").append('<span class="fa fa-angle-right"></span>'), $("#main-menu > ul > li.has-sub > ul > li.has-sub > a").append('<span class="fa fa-angle-double-right"></span>'), $(".featured-slider").slick({
         dots: !0,
         arrows: !1,
         autoplay: !0,
         fade: !0,
         speed: 500,
         cssEase: "linear"
     }), $(".product-slider").slick({
         dots: !0,
         infinite: !0,
         speed: 500,
         fade: !0,
         slide: "li",
         cssEase: "linear",
         centerMode: !0,
         slidesToShow: 1,
         variableWidth: !0,
         responsive: [{
             breakpoint: 800,
             settings: {
                 arrows: !1,
                 centerMode: !1,
                 centerPadding: "40px",
                 variableWidth: !1,
                 slidesToShow: 1,
                 dots: !0
             },
             breakpoint: 1200,
             settings: {
                 arrows: !1,
                 centerMode: !1,
                 centerPadding: "40px",
                 variableWidth: !1,
                 slidesToShow: 1,
                 dots: !0
             }
         }],
         customPaging: function(t, e) {
             return '<button class="tab">' + $(".slick-thumbs li:nth-child(" + (e + 1) + ")").html() + "</button>"
         }
     }), $(".product-list-slider").slick({
         slidesToShow: 2,
         slidesToScroll: 1,
         prevArrow: '<span class="prev-arr"><i class="fa fa-angle-left"></i></span>',
         nextArrow: '<span class="next-arr"><i class="fa fa-angle-right"></i></span>',
         responsive: [{
             breakpoint: 401,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1
             }
         }, {
             breakpoint: 1025,
             settings: {
                 slidesToShow: 4,
                 slidesToScroll: 1
             }
         }]
     });
     var t = $(window).scrollTop();
     t > 1 ? $("#to-top").css({
         bottom: "50px"
     }) : $("#to-top").css({
         bottom: "-100px"
     }), $(window).on("scroll", function() {
         (t = $(window).scrollTop()) > 1 ? $("#to-top").css({
             opacity: 1,
             bottom: "30px"
         }) : $("#to-top").css({
             opacity: 0,
             bottom: "-100px"
         })
     }), $("#to-top").on("click", function() {
         return $("html, body").animate({
             scrollTop: "0px"
         }, 800), !1
     }), $(window).on("scroll", function() {
         (t = $(window).scrollTop()) > 1 ? $("#record").css({
             opacity: 1
         }) : $("#record").css({
             opacity: 0
         })
     });
 });
var fullText, toggleButtonText, $toggleButtons = $(".toggle-content"),
 $fullTextWrappers = $(".fulltext");
$fullTextWrappers.attr("hidden", !0), $toggleButtons.removeAttr("hidden"), $toggleButtons.each(function() {
 $(this).on("click", function() {
     fullTextWrapper = $(this).parent().find(".fulltext"), toggleButtonText = $(this).find(".text"), console.log(fullTextWrapper), fullTextWrapper.attr("hidden") ? (toggleButtonText.text("Show Less"), fullTextWrapper.removeAttr("hidden"), $(this).attr("aria-expanded", !0)) : (toggleButtonText.text("Show More"), fullTextWrapper.attr("hidden", !0), $(this).attr("aria-expanded", !1))
 })
});
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
 var t = window.pageYOffset || document.documentElement.scrollTop;
 document.getElementById("bottommenu").style.bottom = t > lastScrollTop ? "-100%" : "0", lastScrollTop = t
}, !1);

// website template js ends here

//socket.io library code starts from here
/*!
* Socket.IO v2.2.0
* (c) 2014-2018 Guillermo Rauch
* Released under the MIT License.
*/
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.io=e():t.io=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t,e){"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,u=r.id,h=r.path,f=p[u]&&h in p[u].nsps,l=e.forceNew||e["force new connection"]||!1===e.multiplex||f;return l?(c("ignoring socket cache for %s",s),n=a(s,e)):(p[u]||(c("new io instance for %s",s),p[u]=a(s,e)),n=p[u]),r.query&&!e.query&&(e.query=r.query),n.socket(r.path,e)}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(1),s=n(7),a=n(12),c=n(3)("socket.io-client");t.exports=e=r;var p=e.managers={};e.protocol=s.protocol,e.connect=r,e.Manager=n(12),e.Socket=n(36)},function(t,e,n){"use strict";function r(t,e){var n=t;e=e||"undefined"!=typeof location&&location,null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var r=n.host.indexOf(":")!==-1,s=r?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}var o=n(2),i=n(3)("socket.io-client:url");t.exports=r},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");o!=-1&&i!=-1&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return o!=-1&&i!=-1&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e,n){(function(r){function o(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function i(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var r="color: "+this.color;t.splice(1,0,r,"color: inherit");var o=0,i=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return!t&&"undefined"!=typeof r&&"env"in r&&(t=r.env.DEBUG),t}function p(){try{return window.localStorage}catch(t){}}e=t.exports=n(5),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:p(),e.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},e.enable(c())}).call(e,n(4))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(h===clearTimeout)return clearTimeout(t);if((h===r||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){y&&l&&(y=!1,l.length?d=l.concat(d):m=-1,d.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=d.length;e;){for(l=d,d=[];++m<e;)l&&l[m].run();m=-1,e=d.length}l=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function p(){}var u,h,f=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{h="function"==typeof clearTimeout?clearTimeout:r}catch(t){h=r}}();var l,d=[],y=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];d.push(new c(t,e)),1!==d.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=p,f.addListener=p,f.once=p,f.off=p,f.removeListener=p,f.removeAllListeners=p,f.emit=p,f.prependListener=p,f.prependOnceListener=p,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){function r(t){var n,r=0;for(n in t)r=(r<<5)-r+t.charCodeAt(n),r|=0;return e.colors[Math.abs(r)%e.colors.length]}function o(t){function n(){if(n.enabled){var t=n,r=+new Date,i=r-(o||r);t.diff=i,t.prev=o,t.curr=r,o=r;for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;c++;var o=e.formatters[r];if("function"==typeof o){var i=s[c];n=o.call(t,i),s.splice(c,1),c--}return n}),e.formatArgs.call(t,s);var p=n.log||e.log||console.log.bind(console);p.apply(t,s)}}var o;return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=r(t),n.destroy=i,"function"==typeof e.init&&e.init(n),e.instances.push(n),n}function i(){var t=e.instances.indexOf(this);return t!==-1&&(e.instances.splice(t,1),!0)}function s(t){e.save(t),e.names=[],e.skips=[];var n,r=("string"==typeof t?t:"").split(/[\s,]+/),o=r.length;for(n=0;n<o;n++)r[n]&&(t=r[n].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")));for(n=0;n<e.instances.length;n++){var i=e.instances[n];i.enabled=e.enabled(i.namespace)}}function a(){e.enable("")}function c(t){if("*"===t[t.length-1])return!0;var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function p(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o["default"]=o,e.coerce=p,e.disable=a,e.enable=s,e.enabled=c,e.humanize=n(6),e.instances=[],e.names=[],e.skips=[],e.formatters={}},function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*u;case"days":case"day":case"d":return n*p;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=p?Math.round(t/p)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,p,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,p=24*c,u=365.25*p;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&isNaN(t)===!1)return e["long"]?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e,n){function r(){}function o(t){var n=""+t.type;if(e.BINARY_EVENT!==t.type&&e.BINARY_ACK!==t.type||(n+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(n+=t.nsp+","),null!=t.id&&(n+=t.id),null!=t.data){var r=i(t.data);if(r===!1)return g;n+=r}return f("encoded %j as %s",t,n),n}function i(t){try{return JSON.stringify(t)}catch(e){return!1}}function s(t,e){function n(t){var n=d.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}d.removeBlobs(t,n)}function a(){this.reconstructor=null}function c(t){var n=0,r={type:Number(t.charAt(0))};if(null==e.types[r.type])return h("unknown packet type "+r.type);if(e.BINARY_EVENT===r.type||e.BINARY_ACK===r.type){for(var o="";"-"!==t.charAt(++n)&&(o+=t.charAt(n),n!=t.length););if(o!=Number(o)||"-"!==t.charAt(n))throw new Error("Illegal attachments");r.attachments=Number(o)}if("/"===t.charAt(n+1))for(r.nsp="";++n;){var i=t.charAt(n);if(","===i)break;if(r.nsp+=i,n===t.length)break}else r.nsp="/";var s=t.charAt(n+1);if(""!==s&&Number(s)==s){for(r.id="";++n;){var i=t.charAt(n);if(null==i||Number(i)!=i){--n;break}if(r.id+=t.charAt(n),n===t.length)break}r.id=Number(r.id)}if(t.charAt(++n)){var a=p(t.substr(n)),c=a!==!1&&(r.type===e.ERROR||y(a));if(!c)return h("invalid payload");r.data=a}return f("decoded %s as %j",t,r),r}function p(t){try{return JSON.parse(t)}catch(e){return!1}}function u(t){this.reconPack=t,this.buffers=[]}function h(t){return{type:e.ERROR,data:"parser error: "+t}}var f=n(3)("socket.io-parser"),l=n(8),d=n(9),y=n(10),m=n(11);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=a;var g=e.ERROR+'"encode error"';r.prototype.encode=function(t,n){if(f("encoding packet %j",t),e.BINARY_EVENT===t.type||e.BINARY_ACK===t.type)s(t,n);else{var r=o(t);n([r])}},l(a.prototype),a.prototype.add=function(t){var n;if("string"==typeof t)n=c(t),e.BINARY_EVENT===n.type||e.BINARY_ACK===n.type?(this.reconstructor=new u(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!m(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},a.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e=d.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){function r(t,e){if(!t)return t;if(s(t)){var n={_placeholder:!0,num:e.length};return e.push(t),n}if(i(t)){for(var o=new Array(t.length),a=0;a<t.length;a++)o[a]=r(t[a],e);return o}if("object"==typeof t&&!(t instanceof Date)){var o={};for(var c in t)o[c]=r(t[c],e);return o}return t}function o(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(i(t))for(var n=0;n<t.length;n++)t[n]=o(t[n],e);else if("object"==typeof t)for(var r in t)t[r]=o(t[r],e);return t}var i=n(10),s=n(11),a=Object.prototype.toString,c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===a.call(Blob),p="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===a.call(File);e.deconstructPacket=function(t){var e=[],n=t.data,o=t;return o.data=r(n,e),o.attachments=e.length,{packet:o,buffers:e}},e.reconstructPacket=function(t,e){return t.data=o(t.data,e),t.attachments=void 0,t},e.removeBlobs=function(t,e){function n(t,a,u){if(!t)return t;if(c&&t instanceof Blob||p&&t instanceof File){r++;var h=new FileReader;h.onload=function(){u?u[a]=this.result:o=this.result,--r||e(o)},h.readAsArrayBuffer(t)}else if(i(t))for(var f=0;f<t.length;f++)n(t[f],f,t);else if("object"==typeof t&&!s(t))for(var l in t)n(t[l],l,t)}var r=0,o=t;n(o),r||e(o)}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){function n(t){return r&&Buffer.isBuffer(t)||o&&(t instanceof ArrayBuffer||i(t))}t.exports=n;var r="function"==typeof Buffer&&"function"==typeof Buffer.isBuffer,o="function"==typeof ArrayBuffer,i=function(t){return"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer}},function(t,e,n){"use strict";function r(t,e){if(!(this instanceof r))return new r(t,e);t&&"object"===("undefined"==typeof t?"undefined":o(t))&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new l({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=e.parser||c;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=e.autoConnect!==!1,this.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(13),s=n(36),a=n(8),c=n(7),p=n(38),u=n(39),h=n(3)("socket.io-client:manager"),f=n(35),l=n(40),d=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var t in this.nsps)d.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)d.call(this.nsps,t)&&(this.nsps[t].id=this.generateId(t))},r.prototype.generateId=function(t){return("/"===t?"":t+"#")+this.engine.id},a(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(h("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;h("opening %s",this.uri),this.engine=i(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var o=p(n,"open",function(){r.onopen(),t&&t()}),s=p(n,"error",function(e){if(h("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;h("connect attempt will timeout after %d",a);var c=setTimeout(function(){h("connect attempt timed out after %d",a),o.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(c)}})}return this.subs.push(o),this.subs.push(s),this},r.prototype.onopen=function(){h("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(p(t,"data",u(this,"ondata"))),this.subs.push(p(t,"ping",u(this,"onping"))),this.subs.push(p(t,"pong",u(this,"onpong"))),this.subs.push(p(t,"error",u(this,"onerror"))),this.subs.push(p(t,"close",u(this,"onclose"))),this.subs.push(p(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){h("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new s(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.generateId(t)}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){h("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){h("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){h("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){h("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)h("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();h("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(h("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(h("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(h("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e,n){t.exports=n(14),t.exports.parser=n(21)},function(t,e,n){function r(t,e){return this instanceof r?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=u(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=u(e.host).host),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.transportOptions=e.transportOptions||{},this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized||e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.isReactNative="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),("undefined"==typeof self||this.isReactNative)&&(e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),e.localAddress&&(this.localAddress=e.localAddress)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new r(t,e)}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(15),s=n(8),a=n(3)("engine.io-client:socket"),c=n(35),p=n(21),u=n(2),h=n(29);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=p.protocol,r.Socket=r,r.Transport=n(20),r.transports=n(15),r.parser=n(21),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=p.protocol,e.transport=t;var n=this.transportOptions[t]||{};this.id&&(e.sid=this.id);var r=new i[t]({query:e,socket:this,agent:n.agent||this.agent,hostname:n.hostname||this.hostname,port:n.port||this.port,secure:n.secure||this.secure,path:n.path||this.path,forceJSONP:n.forceJSONP||this.forceJSONP,jsonp:n.jsonp||this.jsonp,forceBase64:n.forceBase64||this.forceBase64,enablesXDR:n.enablesXDR||this.enablesXDR,timestampRequests:n.timestampRequests||this.timestampRequests,timestampParam:n.timestampParam||this.timestampParam,policyPort:n.policyPort||this.policyPort,pfx:n.pfx||this.pfx,key:n.key||this.key,passphrase:n.passphrase||this.passphrase,cert:n.cert||this.cert,ca:n.ca||this.ca,ciphers:n.ciphers||this.ciphers,rejectUnauthorized:n.rejectUnauthorized||this.rejectUnauthorized,perMessageDeflate:n.perMessageDeflate||this.perMessageDeflate,extraHeaders:n.extraHeaders||this.extraHeaders,forceNode:n.forceNode||this.forceNode,localAddress:n.localAddress||this.localAddress,requestTimeout:n.requestTimeout||this.requestTimeout,protocols:n.protocols||void 0,isReactNative:this.isReactNative});return r},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1)t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(f.onlyBinaryUpgrades){var e=!this.supportsBinary&&f.transport.supportsBinary;h=h||e}h||(a('probe transport "%s" opened',t),u.send([{type:"ping",data:"probe"}]),u.once("packet",function(e){if(!h)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),f.upgrading=!0,f.emit("upgrading",u),!u)return;r.priorWebsocketSuccess="websocket"===u.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!==f.readyState&&(a("changing transport and sending upgrade packet"),p(),f.setTransport(u),u.send([{type:"upgrade"}]),f.emit("upgrade",u),u=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=u.name,f.emit("upgradeError",n)}}))}function n(){h||(h=!0,p(),u.close(),u=null)}function o(e){var r=new Error("probe error: "+e);r.transport=u.name,n(),a('probe transport "%s" failed because of error: %s',t,e),f.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){u&&t.name!==u.name&&(a('"%s" works - aborting "%s"',t.name,u.name),n())}function p(){u.removeListener("open",e),u.removeListener("error",o),u.removeListener("close",i),f.removeListener("close",s),f.removeListener("upgrading",c)}a('probing transport "%s"',t);var u=this.createTransport(t,{probe:1}),h=!1,f=this;r.priorWebsocketSuccess=!1,u.once("open",e),u.once("error",o),u.once("close",i),this.once("close",s),this.once("upgrading",c),u.open()},r.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}},function(t,e,n){function r(t){var e,n=!1,r=!1,a=!1!==t.jsonp;
if("undefined"!=typeof location){var c="https:"===location.protocol,p=location.port;p||(p=c?443:80),n=t.hostname!==location.hostname||p!==t.port,r=t.secure!==c}if(t.xdomain=n,t.xscheme=r,e=new o(t),"open"in e&&!t.forceJSONP)return new i(t);if(!a)throw new Error("JSONP disabled");return new s(t)}var o=n(16),i=n(18),s=n(32),a=n(33);e.polling=r,e.websocket=a},function(t,e,n){var r=n(17);t.exports=function(t){var e=t.xdomain,n=t.xscheme,o=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(i){}try{if("undefined"!=typeof XDomainRequest&&!n&&o)return new XDomainRequest}catch(i){}if(!e)try{return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(i){}}},function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},function(t,e,n){function r(){}function o(t){if(c.call(this,t),this.requestTimeout=t.requestTimeout,this.extraHeaders=t.extraHeaders,"undefined"!=typeof location){var e="https:"===location.protocol,n=location.port;n||(n=e?443:80),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||n!==t.port,this.xs=t.secure!==e}}function i(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!==t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.requestTimeout=t.requestTimeout,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function s(){for(var t in i.requests)i.requests.hasOwnProperty(t)&&i.requests[t].abort()}var a=n(16),c=n(19),p=n(8),u=n(30),h=n(3)("engine.io-client:polling-xhr");if(t.exports=o,t.exports.Request=i,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.requestTimeout=this.requestTimeout,t.extraHeaders=this.extraHeaders,new i(t)},o.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),o=this;r.on("success",e),r.on("error",function(t){o.onError("xhr post error",t)}),this.sendXhr=r},o.prototype.doPoll=function(){h("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},p(i.prototype),i.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new a(t),n=this;try{h("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(var r in this.extraHeaders)this.extraHeaders.hasOwnProperty(r)&&e.setRequestHeader(r,this.extraHeaders[r])}}catch(o){}if("POST"===this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(o){}try{e.setRequestHeader("Accept","*/*")}catch(o){}"withCredentials"in e&&(e.withCredentials=!0),this.requestTimeout&&(e.timeout=this.requestTimeout),this.hasXDR()?(e.onload=function(){n.onLoad()},e.onerror=function(){n.onError(e.responseText)}):e.onreadystatechange=function(){if(2===e.readyState)try{var t=e.getResponseHeader("Content-Type");n.supportsBinary&&"application/octet-stream"===t&&(e.responseType="arraybuffer")}catch(r){}4===e.readyState&&(200===e.status||1223===e.status?n.onLoad():setTimeout(function(){n.onError(e.status)},0))},h("xhr data %s",this.data),e.send(this.data)}catch(o){return void setTimeout(function(){n.onError(o)},0)}"undefined"!=typeof document&&(this.index=i.requestsCount++,i.requests[this.index]=this)},i.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},i.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},i.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},i.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete i.requests[this.index],this.xhr=null}},i.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type")}catch(n){}t="application/octet-stream"===e?this.xhr.response||this.xhr.responseText:this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},i.prototype.hasXDR=function(){return"undefined"!=typeof XDomainRequest&&!this.xs&&this.enablesXDR},i.prototype.abort=function(){this.cleanup()},i.requestsCount=0,i.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",s);else if("function"==typeof addEventListener){var f="onpagehide"in self?"pagehide":"unload";addEventListener(f,s,!1)}},function(t,e,n){function r(t){var e=t&&t.forceBase64;u&&!e||(this.supportsBinary=!1),o.call(this,t)}var o=n(20),i=n(29),s=n(21),a=n(30),c=n(31),p=n(3)("engine.io-client:polling");t.exports=r;var u=function(){var t=n(16),e=new t({xdomain:!1});return null!=e.responseType}();a(r,o),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){p("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(p("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){p("pre-pause polling complete"),--r||e()})),this.writable||(p("we are currently writing - waiting to pause"),r++,this.once("drain",function(){p("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){p("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;p("polling got data %s",t);var n=function(t,n,r){return"opening"===e.readyState&&e.onOpen(),"close"===t.type?(e.onClose(),!1):void e.onPacket(t)};s.decodePayload(t,this.socket.binaryType,n),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){p("writing close packet"),e.write([{type:"close"}])}var e=this;"open"===this.readyState?(p("transport open - closing"),t()):(p("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")};s.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||t.sid||(t.b64=1),t=i.encode(t),this.port&&("https"===e&&443!==Number(this.port)||"http"===e&&80!==Number(this.port))&&(n=":"+this.port),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.isReactNative=t.isReactNative,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(21),i=n(8);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=t.data,i=new Uint8Array(o),s=new Uint8Array(1+o.byteLength);s[0]=v[t.type];for(var a=0;a<i.length;a++)s[a+1]=i[a];return r(s.buffer)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var o=new FileReader;return o.onload=function(){e.encodePacket({type:t.type,data:o.result},n,!0,r)},o.readAsArrayBuffer(t.data)}function s(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(g)return i(t,n,r);var o=new Uint8Array(1);o[0]=v[t.type];var s=new k([o.buffer,t.data]);return r(s)}function a(t){try{t=d.decode(t,{strict:!1})}catch(e){return!1}return t}function c(t,e,n){for(var r=new Array(t.length),o=l(t.length,n),i=function(t,n,o){e(n,function(e,n){r[t]=n,o(e,r)})},s=0;s<t.length;s++)i(s,t[s],o)}var p,u=n(22),h=n(23),f=n(24),l=n(25),d=n(26);"undefined"!=typeof ArrayBuffer&&(p=n(27));var y="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),m="undefined"!=typeof navigator&&/PhantomJS/i.test(navigator.userAgent),g=y||m;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),w={type:"error",data:"parser error"},k=n(28);e.encodePacket=function(t,e,n,i){"function"==typeof e&&(i=e,e=!1),"function"==typeof n&&(i=n,n=null);var a=void 0===t.data?void 0:t.data.buffer||t.data;if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer)return o(t,e,i);if("undefined"!=typeof k&&a instanceof k)return s(t,e,i);if(a&&a.base64)return r(t,i);var c=v[t.type];return void 0!==t.data&&(c+=n?d.encode(String(t.data),{strict:!1}):String(t.data)),i(""+c)},e.encodeBase64Packet=function(t,n){var r="b"+e.packets[t.type];if("undefined"!=typeof k&&t.data instanceof k){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];n(r+t)},o.readAsDataURL(t.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(s){for(var a=new Uint8Array(t.data),c=new Array(a.length),p=0;p<a.length;p++)c[p]=a[p];i=String.fromCharCode.apply(null,c)}return r+=btoa(i),n(r)},e.decodePacket=function(t,n,r){if(void 0===t)return w;if("string"==typeof t){if("b"===t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r&&(t=a(t),t===!1))return w;var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:w}var i=new Uint8Array(t),o=i[0],s=f(t,1);return k&&"blob"===n&&(s=new k([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(t,e){var n=b[t.charAt(0)];if(!p)return{type:n,data:{base64:!0,data:t.substr(1)}};var r=p.decode(t.substr(1));return"blob"===e&&k&&(r=new k([r])),{type:n,data:r}},e.encodePayload=function(t,n,r){function o(t){return t.length+":"+t}function i(t,r){e.encodePacket(t,!!s&&n,!1,function(t){r(null,o(t))})}"function"==typeof n&&(r=n,n=null);var s=h(t);return n&&s?k&&!g?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void c(t,i,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var o;if(""===t)return r(w,0,1);for(var i,s,a="",c=0,p=t.length;c<p;c++){var u=t.charAt(c);if(":"===u){if(""===a||a!=(i=Number(a)))return r(w,0,1);if(s=t.substr(c+1,i),a!=s.length)return r(w,0,1);if(s.length){if(o=e.decodePacket(s,n,!1),w.type===o.type&&w.data===o.data)return r(w,0,1);var h=r(o,c+i,p);if(!1===h)return}c+=i,a=""}else a+=u}return""!==a?r(w,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void c(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),o=new Uint8Array(r),i=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),s=0;s<t.length;s++)r[s]=t.charCodeAt(s);n=r.buffer}e?o[i++]=0:o[i++]=1;for(var a=n.byteLength.toString(),s=0;s<a.length;s++)o[i++]=parseInt(a[s]);o[i++]=255;for(var r=new Uint8Array(n),s=0;s<r.length;s++)o[i++]=r[s]}),n(o.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),o=0;o<t.length;o++)r[o]=t.charCodeAt(o);t=r.buffer,e[0]=0}for(var i=t instanceof ArrayBuffer?t.byteLength:t.size,s=i.toString(),a=new Uint8Array(s.length+1),o=0;o<s.length;o++)a[o]=parseInt(s[o]);if(a[s.length]=255,k){var c=new k([e.buffer,a.buffer,t]);n(null,c)}})}c(t,r,function(t,e){return n(new k(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var o=t,i=[];o.byteLength>0;){for(var s=new Uint8Array(o),a=0===s[0],c="",p=1;255!==s[p];p++){if(c.length>310)return r(w,0,1);c+=s[p]}o=f(o,2+c.length),c=parseInt(c);var u=f(o,0,c);if(a)try{u=String.fromCharCode.apply(null,new Uint8Array(u))}catch(h){var l=new Uint8Array(u);u="";for(var p=0;p<l.length;p++)u+=String.fromCharCode(l[p])}i.push(u),o=f(o,c)}var d=i.length;i.forEach(function(t,o){r(e.decodePacket(t,n,!0),o,d)})}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e,n){function r(t){if(!t||"object"!=typeof t)return!1;if(o(t)){for(var e=0,n=t.length;e<n;e++)if(r(t[e]))return!0;return!1}if("function"==typeof Buffer&&Buffer.isBuffer&&Buffer.isBuffer(t)||"function"==typeof ArrayBuffer&&t instanceof ArrayBuffer||s&&t instanceof Blob||a&&t instanceof File)return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return r(t.toJSON(),!0);for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)&&r(t[i]))return!0;return!1}var o=n(10),i=Object.prototype.toString,s="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===i.call(Blob),a="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===i.call(File);t.exports=r},function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(e<0&&(e+=r),n<0&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var o=new Uint8Array(t),i=new Uint8Array(n-e),s=e,a=0;s<n;s++,a++)i[a]=o[s];return i.buffer}},function(t,e){function n(t,e,n){function o(t,r){if(o.count<=0)throw new Error("after called too many times");--o.count,t?(i=!0,e(t),e=n):0!==o.count||i||e(null,r)}var i=!1;return n=n||r,o.count=t,0===t?e():o}function r(){}t.exports=n},function(t,e){function n(t){for(var e,n,r=[],o=0,i=t.length;o<i;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<i?(n=t.charCodeAt(o++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),o--)):r.push(e);return r}function r(t){for(var e,n=t.length,r=-1,o="";++r<n;)e=t[r],e>65535&&(e-=65536,o+=d(e>>>10&1023|55296),e=56320|1023&e),o+=d(e);return o}function o(t,e){if(t>=55296&&t<=57343){if(e)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value");return!1}return!0}function i(t,e){return d(t>>e&63|128)}function s(t,e){if(0==(4294967168&t))return d(t);var n="";return 0==(4294965248&t)?n=d(t>>6&31|192):0==(4294901760&t)?(o(t,e)||(t=65533),n=d(t>>12&15|224),n+=i(t,6)):0==(4292870144&t)&&(n=d(t>>18&7|240),n+=i(t,12),n+=i(t,6)),n+=d(63&t|128)}function a(t,e){e=e||{};for(var r,o=!1!==e.strict,i=n(t),a=i.length,c=-1,p="";++c<a;)r=i[c],p+=s(r,o);return p}function c(){if(l>=f)throw Error("Invalid byte index");var t=255&h[l];if(l++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function p(t){var e,n,r,i,s;if(l>f)throw Error("Invalid byte index");if(l==f)return!1;if(e=255&h[l],l++,0==(128&e))return e;if(192==(224&e)){if(n=c(),s=(31&e)<<6|n,s>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&e)){if(n=c(),r=c(),s=(15&e)<<12|n<<6|r,s>=2048)return o(s,t)?s:65533;throw Error("Invalid continuation byte")}if(240==(248&e)&&(n=c(),r=c(),i=c(),s=(7&e)<<18|n<<12|r<<6|i,s>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function u(t,e){e=e||{};var o=!1!==e.strict;h=n(t),f=h.length,l=0;for(var i,s=[];(i=p(o))!==!1;)s.push(i);return r(s)}/*! https://mths.be/utf8js v2.1.2 by @mathias */
var h,f,l,d=String.fromCharCode;t.exports={version:"2.1.2",encode:a,decode:u}},function(t,e){!function(){"use strict";for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=new Uint8Array(256),r=0;r<t.length;r++)n[t.charCodeAt(r)]=r;e.encode=function(e){var n,r=new Uint8Array(e),o=r.length,i="";for(n=0;n<o;n+=3)i+=t[r[n]>>2],i+=t[(3&r[n])<<4|r[n+1]>>4],i+=t[(15&r[n+1])<<2|r[n+2]>>6],i+=t[63&r[n+2]];return o%3===2?i=i.substring(0,i.length-1)+"=":o%3===1&&(i=i.substring(0,i.length-2)+"=="),i},e.decode=function(t){var e,r,o,i,s,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(e=0;e<c;e+=4)r=n[t.charCodeAt(e)],o=n[t.charCodeAt(e+1)],i=n[t.charCodeAt(e+2)],s=n[t.charCodeAt(e+3)],h[p++]=r<<2|o>>4,h[p++]=(15&o)<<4|i>>2,h[p++]=(3&i)<<6|63&s;return u}}()},function(t,e){function n(t){return t.map(function(t){if(t.buffer instanceof ArrayBuffer){var e=t.buffer;if(t.byteLength!==e.byteLength){var n=new Uint8Array(t.byteLength);n.set(new Uint8Array(e,t.byteOffset,t.byteLength)),e=n.buffer}return e}return t})}function r(t,e){e=e||{};var r=new i;return n(t).forEach(function(t){r.append(t)}),e.type?r.getBlob(e.type):r.getBlob()}function o(t,e){return new Blob(n(t),e||{})}var i="undefined"!=typeof i?i:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder&&MozBlobBuilder,s=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),a=s&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),c=i&&i.prototype.append&&i.prototype.getBlob;"undefined"!=typeof Blob&&(r.prototype=Blob.prototype,o.prototype=Blob.prototype),t.exports=function(){return s?a?Blob:o:c?r:void 0}()},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){"use strict";function n(t){var e="";do e=s[t%a]+e,t=Math.floor(t/a);while(t>0);return e}function r(t){var e=0;for(u=0;u<t.length;u++)e=e*a+c[t.charAt(u)];return e}function o(){var t=n(+new Date);return t!==i?(p=0,i=t):t+"."+n(p++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},p=0,u=0;u<a;u++)c[s[u]]=u;o.encode=n,o.decode=r,t.exports=o},function(t,e,n){(function(e){function r(){}function o(){return"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof e?e:{}}function i(t){if(s.call(this,t),this.query=this.query||{},!c){var e=o();c=e.___eio=e.___eio||[]}this.index=c.length;var n=this;c.push(function(t){n.onData(t)}),this.query.j=this.index,"function"==typeof addEventListener&&addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var s=n(19),a=n(30);t.exports=i;var c,p=/\n/g,u=/\\n/g;a(i,s),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(t){o.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+o.iframeId+'">';i=document.createElement(e)}catch(t){i=document.createElement("iframe"),i.name=o.iframeId,i.src="javascript:0"}i.id=o.iframeId,o.form.appendChild(i),o.iframe=i}var o=this;if(!this.form){var i,s=document.createElement("form"),a=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;s.className="socketio",s.style.position="absolute",s.style.top="-1000px",s.style.left="-1000px",s.target=c,s.method="POST",s.setAttribute("accept-charset","utf-8"),a.name="d",s.appendChild(a),document.body.appendChild(s),this.form=s,this.area=a}this.form.action=this.uri(),r(),t=t.replace(u,"\\\n"),this.area.value=t.replace(p,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"===o.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},function(t,e,n){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,this.usingBrowserWebSocket=o&&!t.forceNode,this.protocols=t.protocols,this.usingBrowserWebSocket||(l=i),s.call(this,t)}var o,i,s=n(20),a=n(21),c=n(29),p=n(30),u=n(31),h=n(3)("engine.io-client:websocket");if("undefined"==typeof self)try{i=n(34)}catch(f){}else o=self.WebSocket||self.MozWebSocket;var l=o||i;t.exports=r,p(r,s),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=this.protocols,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.localAddress&&(n.localAddress=this.localAddress);try{this.ws=this.usingBrowserWebSocket&&!this.isReactNative?e?new l(t,e):new l(t):new l(t,e,n)}catch(r){return this.emit("error",r)}void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},r.prototype.write=function(t){function e(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var r=t.length,o=0,i=r;o<i;o++)!function(t){a.encodePacket(t,n.supportsBinary,function(o){if(!n.usingBrowserWebSocket){var i={};if(t.options&&(i.compress=t.options.compress),n.perMessageDeflate){var s="string"==typeof o?Buffer.byteLength(o):o.length;s<n.perMessageDeflate.threshold&&(i.compress=!1)}}try{n.usingBrowserWebSocket?n.ws.send(o):n.ws.send(o,i)}catch(a){h("websocket closed before onclose event")}--r||e()})}(t[o])},r.prototype.onClose=function(){s.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=c.encode(t),t.length&&(t="?"+t);var r=this.hostname.indexOf(":")!==-1;return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!l||"__initialize"in l&&this.name===r.prototype.name)}},function(t,e){},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e,n){"use strict";function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=n(7),s=n(8),a=n(37),c=n(38),p=n(39),u=n(3)("socket.io-client:socket"),h=n(29),f=n(23);t.exports=e=r;var l={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},d=s.prototype.emit;s(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[c(t,"open",p(this,"onopen")),c(t,"packet",p(this,"onpacket")),c(t,"close",p(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=a(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(l.hasOwnProperty(t))return d.apply(this,arguments),this;var e=a(arguments),n={type:(void 0!==this.flags.binary?this.flags.binary:f(e))?i.BINARY_EVENT:i.EVENT,data:e};return n.options={},n.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),n.id=this.ids++),this.connected?this.packet(n):this.sendBuffer.push(n),this.flags={},this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){if(u("transport is open - connecting"),"/"!==this.nsp)if(this.query){var t="object"===o(this.query)?h.encode(this.query):this.query;u("sending connect packet with query %s",t),this.packet({type:i.CONNECT,query:t})}else this.packet({type:i.CONNECT})},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){var e=t.nsp===this.nsp,n=t.type===i.ERROR&&"/"===t.nsp;if(e||n)switch(t.type){case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?d.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=a(arguments);u("sending ack %j",r),e.packet({type:f(r)?i.BINARY_ACK:i.ACK,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)d.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:i.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags.compress=t,this},r.prototype.binary=function(t){return this.flags.binary=t,this}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){"use strict";function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}}])});
//# sourceMappingURL=socket.io.js.map



//app.js code starts from here

$(document).ready(function () {
 var marqueeCounter = 0;
 // refresh live updates every 5s
 var timeoutAfter = 10; // this is in minutes
 var marqueCounter = 0;
 var marqueAsArray = JSON.parse($('#marque-game-details').val());
 var reds= ['11', '16', '61', '66', '22', '27', '77', '72','33', '38', '88', '83', '44', '49', '99', '94', '55', '50', '00', '05'];
 var expiryGameIds = [];
 var loadingHtml = '<div class="loader">Loading<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>';
 function processMarque () {
     var toShow = marqueAsArray[marqueCounter % marqueAsArray.length];
     if (!toShow) return;
     var html = '';
     if (toShow[0] === 'mumbai') {
         html = `
             <div id="live-update-` + toShow[1] + `" class="alert alert-info fade in liveupdate text-center">
                 <div class="livename">` + toShow[2] + `</div>
                 <div class="data-update" data-update="live-update-` + toShow[1] + `">`;
         if ((toShow[3].trim() !== '') && toShow[4].length) {
             html += `<span class="livepana">` + toShow[3] + ` - </span>
                     <span class="livejodi ` + (reds.includes(toShow[4]) ? 'makeRed' : 'makeBlack') + `">` + toShow[4] + `</span>`;
         } else {
             html += `<span class="livepana"> Loading...</span>`;
         }

         if (toShow[5] && toShow[5].trim() !== '') {
             html += `<span class="livepana"> - ` + toShow[5] + `</span>`
         }

         html += `</div>
       </div>`;
     } else if (toShow[0] === 'delhi') {
         html = `
             <div id="live-update-` + toShow[1] + `" class="alert alert-info fade in liveupdate text-center">
                 <div class="livename">` + toShow[2] + `</div>
                 <div class="data-update" data-update="live-update-` + toShow[1] + `">`;
         if (toShow[3] && toShow[3].trim() !== '') {
             html += `<span class="livejodi ` + (reds.includes(toShow[3]) ? 'makeRed' : 'makeBlack') + `">` + toShow[3] + `</span>`;
         } else {
             html += `<span class="livepana">Loading...</span>`;
         }

         html+= `</div>
       </div>
         `;
     }

     // 43 is live updates header height
     if ($(window).scrollTop() > $('#live-updates').outerHeight(true) + 42) {
         $('#marque-results').show().html(html);
     } else {
         $('#marque-results').hide().html(html);
     }
     marqueCounter = marqueCounter + 1;
 }
 function expiry (gameId) {
     setTimeout(function () {
         // remove the element after timeout
         $('#live-update-' + gameId).remove();
         marqueAsArray = marqueAsArray.filter(function (item) {
             return item[0] !== gameId;
         });
     }, timeoutAfter * 60000 );
 }
 var mumbaiGames = JSON.parse($('#mumbai-game-details').val());
 function processMumbaiGames () {

     var currentDate = new Date();
     for (var gameId in mumbaiGames) {
         var [gamename, time1, time2, a1a2a3, a, a4a5a6] = mumbaiGames[gameId];

         var dateStr = currentDate.toLocaleDateString();
         var arrDateStr = dateStr.split('/');

         var preDateTime1 = new Date(dateStr + ' ' + time1);
         var preDateTime2 = new Date(dateStr + ' ' + time2);
         if (isNaN(preDateTime1)) {
             dateStr = arrDateStr[1] + '/' + arrDateStr[0] + '/' + arrDateStr[2];
             preDateTime1 = new Date(dateStr + ' ' + time1);
             preDateTime2 = new Date(dateStr + ' ' + time2);
         }

         var preDateTime1Minutes = (preDateTime1.getHours() * 60) + preDateTime1.getMinutes();
         var preDateTime2Minutes = (preDateTime2.getHours() * 60) + preDateTime2.getMinutes();
         var currentDateMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();
         // var comp2 = ((currentDateMinutes < preDateTime2Minutes) && ((currentDateMinutes + timeoutAfter) > preDateTime2Minutes));
         // var comp1 = ((currentDateMinutes < preDateTime1Minutes) && ((currentDateMinutes + timeoutAfter) > preDateTime1Minutes));
         var comp2 = (currentDateMinutes > (preDateTime2Minutes - timeoutAfter)) && (currentDateMinutes < (preDateTime2Minutes + timeoutAfter));
         var comp1 = (currentDateMinutes > (preDateTime1Minutes - timeoutAfter)) && (currentDateMinutes < (preDateTime1Minutes + timeoutAfter));

         // if we have the div we don't add it
         if ($('#live-update-' + gameId).length > 0) {
             if (!expiryGameIds.includes(gameId)) {
                 expiryGameIds.push(gameId);
                 expiry(gameId);
             }
             if (
                 (comp1 && (a1a2a3.trim() === '')) ||
                 (comp2 && (a4a5a6.trim() === ''))
             ) {
                 $('[data-span="live-span-' + gameId + '"]').html(`
                     <span style="display: inline-flex;" data-span="live-span-` + gameId + `">`+ gamename +`
                         <div class="loader superLoader" data-update-loader="live-update-`+ gameId + `">
                                             Loading
                             <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span>
                         </div>
                     </span>
                 `);
             }
             continue;
         }

         var html =      `<div id="live-update-`+ gameId + `" class="update-item">
                             <div class="gamename-head">
                                 <span style="display: inline-flex;" data-span="live-span-` + gameId + `">`+ gamename;
         if (
             (comp1 && (a1a2a3.trim() === '')) ||
             (comp2 && (a4a5a6.trim() === ''))
         ) {
                        html += `
                                     <div class="loader superLoader" data-update-loader="live-update-`+ gameId + `">
                                         Loading
                                         <span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span>
                                     </div>`;
         }
         html +=                 `</span>`;

         if (comp2 || comp1) {
             // time1 is within range. so we should make it visible
             html +=         `</div>
                             <div class="result-div" data-update="live-update-`+ gameId + `">`;
             if (a1a2a3.trim() === '') {
                 html += `
                                 <span class="livepana" data-pana="">Loading...</span>
                                 <span class="jodi-number"></span>`;
             } else {
                 html += `
                                     <span class="pana-number vert-center" data-pana="">` + a1a2a3 + ` - </span>
                                     <span class="jodi-number vert-center ` + (reds.includes(a) ? 'makeRed' : 'makeBlack') + `">` + a + `</span>`;
             }
             if (a4a5a6.trim() !== '') {
                 html +=             `<span class="pana-number vert-center"> - ` + a4a5a6 + `</span>`;
             }
                     html += `</div>
                             <hr>
                         </div>`;
             $('#live-updates').append(html);
             var arr = [];
             if (a1a2a3.trim() !== '') arr = arr.concat(['mumbai', gameId, gamename, a1a2a3, a]);
             else arr = arr.concat(['mumbai', gameId, gamename, '', '']);
             if (a4a5a6.trim() !== '') arr = arr.concat([a4a5a6]);
             else arr = arr.concat(['']);
             marqueAsArray.push(arr);
             expiry(gameId);
         }

         // start loading in time
         if (comp1) {
             // showing loading in time 1
             $('#c1_' + gameId).html(loadingHtml);
         } else {
             $('#c1_' + gameId).text(time1);
         }
         if (comp2) {
             // showing loading in time 2
             $('#c2_' + gameId).html(loadingHtml);
         } else {
             $('#c2_' + gameId).text(time2);
         }
         // end
     }
 }
 var delhiGames = JSON.parse($('#delhi-game-details').val());
 function processDelhiGames () {
     var currentDate = new Date();
     for (var gameId in delhiGames) {
         // if we have the div we don't add it
         if ($('#live-update-' + gameId).length > 0) {
             expiry(gameId);
             continue;
         }
         var [gamename, time1] = delhiGames[gameId];
         var dateStr = currentDate.toLocaleDateString();
         var arrDateStr = dateStr.split('/');
         var preDateTime1 = new Date(dateStr + ' ' + time1);

         if (isNaN(preDateTime1)) {
             dateStr = arrDateStr[1] + '/' + arrDateStr[0] + '/' + arrDateStr[2];
             preDateTime1 = new Date(dateStr + ' ' + time1);
         }

         var preDateTime1Minutes = preDateTime1.getHours() * 60 + preDateTime1.getMinutes();

         var currentDateMinutes = currentDate.getHours() * 60 + currentDate.getMinutes();
         // var comp = (currentDateMinutes < preDateTime1Minutes) && ((currentDateMinutes + timeoutAfter) > preDateTime1Minutes);
         var comp = (currentDateMinutes > (preDateTime1Minutes - timeoutAfter)) && (currentDateMinutes < (preDateTime1Minutes + timeoutAfter));
         if (comp) {
             // time1 is within range. so we should make it visible
             var html = `<div id="live-update-`+ gameId + `" class="update-item">
                             <div class="gamename-head">
                                 <span style="display: inline-flex;" data-span="live-span-` + gameId + `">`+ gamename +`
                                     <div class="loader superLoader" data-update-loader="live-update-`+ gameId + `">Loading<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>
                                 </span>
                             </div>
                             <div class="result-div" data-update-jodi="live-update-`+ gameId + `">
                             </div>
                             <hr>
                         </div>`;
             $('#live-updates').append(html);
             marqueAsArray.push(['delhi', gameId, gamename]);
             expiry(gameId);
         }
         // start loading in time
         if (comp) {
             // showing loading in time 1
             $('#cm1_' + gameId).html(loadingHtml);
         } else {
             $('#cm1_' + gameId).text(time1);
         }
         // end
     }
 }
 setInterval(function () {
     processMumbaiGames();
     processDelhiGames();
     if ((marqueeCounter % 3) === 0) processMarque();
     marqueeCounter += 1;
 }, 1000);
 function debounce(func, wait, immediate) {
   var timeout;
   return function() {
     var context = this, args = arguments;
     var later = function() {
       timeout = null;
       if (!immediate) func.apply(context, args);
     };
     var callNow = immediate && !timeout;
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
     if (callNow) func.apply(context, args);
   };
 }
 var marqueVisibility = debounce(function() {
   var scroll = $(window).scrollTop();
     // 43 is live updates header height
     if (scroll > $('#live-updates').outerHeight(true) + 42) {
         if(marqueAsArray.length) $('#site-logo').hide();
         $('#marque-results').show();
     } else {
         $('#site-logo').show();
         $('#marque-results').hide();
     }
 }, 50);
 $(window).scroll(marqueVisibility);
 var socket = io.connect('https://www.skja.in');
 socket.on("connect", (data) => {
     console.log("socket connected");
 });

 socket.on("listen", (result) => {
   var res = Object.assign({}, result.res);
     //res= result.res;
   if (res !== 'Error') {
     if (res.type == 'mumbai') {
       $('#a1_' + res.target).text(res.a1);
         $('#a2_' + res.target).text(res.a2);
         $('#a3_' + res.target).text(res.a3);
         var a = res.a.join('').trim();
         var jodiRef = $('#a_' + res.target);
         jodiRef.text(a);
         if (a.length == 2 && reds.includes(a)){
           if (jodiRef.hasClass("makeBlack")) {
             jodiRef.removeClass("makeBlack");
             jodiRef.addClass("makeRed");
           }
           else jodiRef.addClass("makeRed");
         } else {
           if (jodiRef.hasClass("makeRed")) {
             jodiRef.removeClass("makeRed");
             jodiRef.addClass("makeBlack");
           }
           else jodiRef.addClass("makeBlack");
         }
         $('#a4_' + res.target).text(res.a4);
         $('#a5_' + res.target).text(res.a5);
         $('#a6_' + res.target).text(res.a6);
         if (res.a4 == '*') {
           $('#c1_' + res.target).text(res.c);
         } else {
           $('#c2_' + res.target).text(res.c);
         }
         var updateRef = $('[data-update-jodi="live-update-' + res.target + '"]');
         var jodi = res.a.join('');
         var clas = reds.includes(jodi) ? 'makeRed' : 'makeBlack';
         var updateHtml = `
             <span class="pana-number vert-center">` + res.a1 + res.a2 + res.a3 + ` - </span>
             <span class="jodi-number vert-center ` + clas + `">` + jodi + `</span>
             <span class="pana-number vert-center"> - ` + res.a4 + res.a5 + res.a6 + `</span>
         `;
       //  add realtime data
         $('[data-update="live-update-' + res.target + '"]').html(updateHtml);
       //  remove loader
         $('[data-update-loader="live-update-' + res.target + '"]').remove();

         if (jodi.length == 2 && reds.includes(jodi)) {
             if (updateRef.hasClass("makeBlack")) {
             updateRef.removeClass("makeBlack");
             updateRef.addClass("makeRed");
           }
           else updateRef.addClass("makeRed");
         } else {
           if (updateRef.hasClass("makeRed")) {
             updateRef.removeClass("makeRed");
             updateRef.addClass("makeBlack");
           }
           else updateRef.addClass("makeBlack");
         }
         marqueAsArray = marqueAsArray.map(function (item) {
             if (item[1] === res.target) return  [item[0], item[1], item[2]].concat([res.a1 + res.a2 + res.a3, res.a.join(''), res.a4 + res.a5 + res.a6]);
             else return item;
         });
         for (const gameId in mumbaiGames) {
             var item = mumbaiGames[gameId];
             if (gameId === res.target) mumbaiGames[gameId] = [item[0], item[1], item[2], res.a1 + res.a2 + res.a3, res.a.join(''), res.a4 + res.a5 + res.a6];
         }
     } else if (res.type == 'dehli') {
       console.log('dehli');
       var jodi = res.a.join('');
       $('#a_' + res.target).text('[' + jodi + ']');
       $('#cm1_' + res.target).text(res.c);
       var updateHtml = `
             <span class="jodi-number ` + (reds.includes(jodi) ? 'makeRed' : 'makeBlack') + `" data-pana="">` + jodi + `</span>
         `;
         $('[data-update-jodi="live-update-' + res.target + '"]').html(updateHtml);
 // 			add realtime data

       $('[data-update="live-update-' + res.target + '"]').html(`
           <span class="livejodi ` + (reds.includes(jodi) ? 'makeRed' : 'makeBlack') + `" data-pana="">` + jodi + `</span>
       `);

 // 			remove loader
       $('[data-update-loader="live-update-' + res.target + '"]').remove();

       marqueAsArray = marqueAsArray.map(function (item) {
             if (item[1] === res.target) return [item[0], item[1], item[2], jodi];
             else return item;
         });
         for (const gameId in delhiGames) {
             var item = delhiGames[gameId];
             if (gameId === res.target) delhiGames[gameId] = [item[0], item[1], jodi];
         }
     } else if (res.type == 'star') {
       console.log('star');
       var target = res.target;
       var op = JSON.parse(res.op);
       var jodi = JSON.parse(res.jodi);
       var time_index = op.indexOf("");
       op.forEach(function(item, index) {
         if (item){
             $("#" + target + "_pana_" + index).text(item);
         }
         if (jodi[index]) {
             $("#" + target + "_ank_" + index).text(jodi[index]);
         }
         if (time_index == 0 || time_index == index + 1) {
             var formated_time = res.c.split(":").slice(0, -1).join(":");
             var antimeridian = res.c.split(" ")[1];
             $("#" + target + "_time_" + index).text(formated_time + " " + antimeridian);
         }
       });
     }

   }
   console.log(res);
 });

 socket.on("disconnect", () => {
     console.log("socket disconnected");
 });
});


//index_backup.php bottom code starts from here

//     setInterval(function UpdateValue(){
//     console.log('Set Interval...');
//     var serverTime=new Date();//new Date(document.getElementById("serverTime").value);
//     var hours=serverTime.getHours();
//     var min=serverTime.getMinutes();
//     var seconds=serverTime.getSeconds();

//     var mindif=10;
//     for(var id=0;id<100;id++)
//     {

//         var c1=document.getElementById("c1_"+id);
//         if(c1!=null)
//         {
//          var c1_value=  document.getElementById("c1_"+id).innerHTML;

//          var c1_date=new Date("2019/01/01 "+ (c1_value.trim() ) );


//         var current=new Date();

//                  var h=c1_date.getHours()*60 + c1_date.getMinutes();
//                  var h2=current.getHours()*60 +current.getMinutes();
//             if(h2<h && h2+mindif>h)
//             {

//                   c1.innerHTML='<div class="loader">Loading<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>';


//             }

//         }
//         c1=null;
//          c1=document.getElementById("c2_"+id);
//         if(c1!=null)
//         {
//          var c1_value=  document.getElementById("c2_"+id).innerHTML;
//                  var c1_date=new Date("2019/01/01 "+c1_value);
//         var current=new Date();

//                  var h=c1_date.getHours()*60 + c1_date.getMinutes();
//                  var h2=current.getHours()*60 +current.getMinutes();

//             if(h2<h && h2+mindif>h)
//             {
//              var ht= c1_value;
//                   c1.innerHTML='<div class="loader">Loading<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>';

//             }

//         }
//         c1=null;
//          c1=document.getElementById("c2_"+id);
//         if(c1!=null)
//         {
//             var c1_value=  document.getElementById("c2_"+id).innerHTML;
//             var c1_date=new Date("2019/01/01 "+c1_value);
//             var current=new Date();
//             var h=c1_date.getHours()*60 + c1_date.getMinutes();
//             var h2=current.getHours()*60 +current.getMinutes();
//             if(h2<h && h2+mindif>h)
//             {
//             c1.innerHTML='<div class="loader">Loading<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>';
//             }
//       }
//         c1=null;
//         c1=document.getElementById("cm1_"+id);
//         if(c1!=null)
//         {
//             mindif=15;
//             var c1_value=  document.getElementById("cm1_"+id).innerHTML;
//             var c1_date=new Date("2019/01/01 "+c1_value);
//             var current=new Date();
//             var h=c1_date.getHours()*60 + c1_date.getMinutes();
//             var h2=current.getHours()*60 +current.getMinutes();
//             if(h2<h && h2+mindif>h)
//             {
//              c1.innerHTML='<div class="loader">Loading<span class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></div>';
//             }

//         }

//     }

// },5000);
