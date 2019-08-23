! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(bQ, bP) {
    var bO = [],
        bN = bQ.document,
        bM = Object.getPrototypeOf,
        bK = bO.slice,
        bI = bO.concat,
        bH = bO.push,
        bG = bO.indexOf,
        bF = {},
        bE = bF.toString,
        bD = bF.hasOwnProperty,
        bC = bD.toString,
        bB = bC.call(Object),
        bA = {};

    function bz(e, d) {
        d = d || bN;
        var f = d.createElement("script");
        f.text = e, d.head.appendChild(f).parentNode.removeChild(f)
    }
    var bx = "3.2.0",
        bw = function(d, c) {
            return new bw.fn.init(d, c)
        },
        bu = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        bt = /^-ms-/,
        bs = /-([a-z])/g,
        br = function(d, c) {
            return c.toUpperCase()
        };
    bw.fn = bw.prototype = {
        jquery: bx,
        constructor: bw,
        length: 0,
        toArray: function() {
            return bK.call(this)
        },
        get: function(b) {
            return null == b ? bK.call(this) : b < 0 ? this[b + this.length] : this[b]
        },
        pushStack: function(d) {
            var c = bw.merge(this.constructor(), d);
            return c.prevObject = this, c
        },
        each: function(b) {
            return bw.each(this, b)
        },
        map: function(b) {
            return this.pushStack(bw.map(this, function(a, d) {
                return b.call(a, d, a)
            }))
        },
        slice: function() {
            return this.pushStack(bK.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var d = this.length,
                f = +e + (e < 0 ? d : 0);
            return this.pushStack(f >= 0 && f < d ? [this[f]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: bH,
        sort: bO.sort,
        splice: bO.splice
    }, bw.extend = bw.fn.extend = function() {
        var t, s, r, q, p, o, n = arguments[0] || {},
            m = 1,
            l = arguments.length,
            k = !1;
        for ("boolean" == typeof n && (k = n, n = arguments[m] || {}, m++), "object" == typeof n || bw.isFunction(n) || (n = {}), m === l && (n = this, m--); m < l; m++) {
            if (null != (t = arguments[m])) {
                for (s in t) {
                    r = n[s], q = t[s], n !== q && (k && q && (bw.isPlainObject(q) || (p = Array.isArray(q))) ? (p ? (p = !1, o = r && Array.isArray(r) ? r : []) : o = r && bw.isPlainObject(r) ? r : {}, n[s] = bw.extend(k, o, q)) : void 0 !== q && (n[s] = q))
                }
            }
        }
        return n
    }, bw.extend({
        expando: "jQuery" + (bx + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(b) {
            throw new Error(b)
        },
        noop: function() {},
        isFunction: function(b) {
            return "function" === bw.type(b)
        },
        isWindow: function(b) {
            return null != b && b === b.window
        },
        isNumeric: function(d) {
            var c = bw.type(d);
            return ("number" === c || "string" === c) && !isNaN(d - parseFloat(d))
        },
        isPlainObject: function(e) {
            var d, f;
            return !(!e || "[object Object]" !== bE.call(e)) && (!(d = bM(e)) || (f = bD.call(d, "constructor") && d.constructor, "function" == typeof f && bC.call(f) === bB))
        },
        isEmptyObject: function(d) {
            var c;
            for (c in d) {
                return !1
            }
            return !0
        },
        type: function(b) {
            return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? bF[bE.call(b)] || "object" : typeof b
        },
        globalEval: function(b) {
            bz(b)
        },
        camelCase: function(b) {
            return b.replace(bt, "ms-").replace(bs, br)
        },
        each: function(f, e) {
            var h, g = 0;
            if (bq(f)) {
                for (h = f.length; g < h; g++) {
                    if (e.call(f[g], g, f[g]) === !1) {
                        break
                    }
                }
            } else {
                for (g in f) {
                    if (e.call(f[g], g, f[g]) === !1) {
                        break
                    }
                }
            }
            return f
        },
        trim: function(b) {
            return null == b ? "" : (b + "").replace(bu, "")
        },
        makeArray: function(e, d) {
            var f = d || [];
            return null != e && (bq(Object(e)) ? bw.merge(f, "string" == typeof e ? [e] : e) : bH.call(f, e)), f
        },
        inArray: function(e, d, f) {
            return null == d ? -1 : bG.call(d, e, f)
        },
        merge: function(g, f) {
            for (var j = +f.length, i = 0, h = g.length; i < j; i++) {
                g[h++] = f[i]
            }
            return g.length = h, g
        },
        grep: function(j, i, p) {
            for (var o, n = [], m = 0, l = j.length, k = !p; m < l; m++) {
                o = !i(j[m], m), o !== k && n.push(j[m])
            }
            return n
        },
        map: function(i, g, n) {
            var m, l, k = 0,
                j = [];
            if (bq(i)) {
                for (m = i.length; k < m; k++) {
                    l = g(i[k], k, n), null != l && j.push(l)
                }
            } else {
                for (k in i) {
                    l = g(i[k], k, n), null != l && j.push(l)
                }
            }
            return bI.apply([], j)
        },
        guid: 1,
        proxy: function(g, f) {
            var j, i, h;
            if ("string" == typeof f && (j = g[f], f = g, g = j), bw.isFunction(g)) {
                return i = bK.call(arguments, 2), h = function() {
                    return g.apply(f || this, i.concat(bK.call(arguments)))
                }, h.guid = g.guid = g.guid || bw.guid++, h
            }
        },
        now: Date.now,
        support: bA
    }), "function" == typeof Symbol && (bw.fn[Symbol.iterator] = bO[Symbol.iterator]), bw.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(d, c) {
        bF["[object " + c + "]"] = c.toLowerCase()
    });

    function bq(e) {
        var d = !!e && "length" in e && e.length,
            f = bw.type(e);
        return "function" !== f && !bw.isWindow(e) && ("array" === f || 0 === d || "number" == typeof d && d > 0 && d - 1 in e)
    }
    var bp = function(dn) {
        var dm, dl, dj, di, dh, dg, df, dd, dc, db, c9, c8, c6, c5, c4, c3, c2, c1, c0, cZ = "sizzle" + 1 * new Date,
            cY = dn.document,
            cX = 0,
            cW = 0,
            cV = dJ(),
            cU = dJ(),
            dT = dJ(),
            dS = function(d, c) {
                return d === c && (c9 = !0), 0
            },
            dR = {}.hasOwnProperty,
            dQ = [],
            dO = dQ.pop,
            dN = dQ.push,
            dM = dQ.push,
            dL = dQ.slice,
            dK = function(f, e) {
                for (var h = 0, g = f.length; h < g; h++) {
                    if (f[h] === e) {
                        return h
                    }
                }
                return -1
            },
            dI = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            dH = "[\\x20\\t\\r\\n\\f]",
            dG = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            dF = "\\[" + dH + "*(" + dG + ")(?:" + dH + "*([*^$|!~]?=)" + dH + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + dG + "))|)" + dH + "*\\]",
            dE = ":(" + dG + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + dF + ")*)|.*)\\)|)",
            dD = new RegExp(dH + "+", "g"),
            dB = new RegExp("^" + dH + "+|((?:^|[^\\\\])(?:\\\\.)*)" + dH + "+$", "g"),
            dA = new RegExp("^" + dH + "*," + dH + "*"),
            dz = new RegExp("^" + dH + "*([>+~]|" + dH + ")" + dH + "*"),
            dy = new RegExp("=" + dH + "*([^\\]'\"]*?)" + dH + "*\\]", "g"),
            dx = new RegExp(dE),
            dw = new RegExp("^" + dG + "$"),
            dv = {
                ID: new RegExp("^#(" + dG + ")"),
                CLASS: new RegExp("^\\.(" + dG + ")"),
                TAG: new RegExp("^(" + dG + "|[*])"),
                ATTR: new RegExp("^" + dF),
                PSEUDO: new RegExp("^" + dE),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + dH + "*(even|odd|(([+-]|)(\\d*)n|)" + dH + "*(?:([+-]|)" + dH + "*(\\d+)|))" + dH + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + dI + ")$", "i"),
                needsContext: new RegExp("^" + dH + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + dH + "*((?:-\\d)?\\d*)" + dH + "*\\)|)(?=[^-]|$)", "i")
            },
            du = /^(?:input|select|textarea|button)$/i,
            dt = /^h\d$/i,
            ds = /^[^{]+\{\s*\[native \w/,
            dr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            dZ = /[+~]/,
            dq = new RegExp("\\\\([\\da-f]{1,6}" + dH + "?|(" + dH + ")|.)", "ig"),
            dW = function(f, e, h) {
                var g = "0x" + e - 65536;
                return g !== g || h ? e : g < 0 ? String.fromCharCode(g + 65536) : String.fromCharCode(g >> 10 | 55296, 1023 & g | 56320)
            },
            dC = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            c7 = function(d, c) {
                return c ? "\0" === d ? "\ufffd" : d.slice(0, -1) + "\\" + d.charCodeAt(d.length - 1).toString(16) + " " : "\\" + d
            },
            cQ = function() {
                c8()
            },
            bb = dU(function(b) {
                return b.disabled === !0 && ("form" in b || "label" in b)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            dM.apply(dQ = dL.call(cY.childNodes), cY.childNodes), dQ[cY.childNodes.length].nodeType
        } catch (d2) {
            dM = {
                apply: dQ.length ? function(d, c) {
                    dN.apply(d, dL.call(c))
                } : function(f, e) {
                    var h = f.length,
                        g = 0;
                    while (f[h++] = e[g++]) {}
                    f.length = h - 1
                }
            }
        }

        function dX(A, v, u, t) {
            var q, p, n, m, i, g, c, C = v && v.ownerDocument,
                B = v ? v.nodeType : 9;
            if (u = u || [], "string" != typeof A || !A || 1 !== B && 9 !== B && 11 !== B) {
                return u
            }
            if (!t && ((v ? v.ownerDocument || v : cY) !== c6 && c8(v), v = v || c6, c4)) {
                if (11 !== B && (i = dr.exec(A))) {
                    if (q = i[1]) {
                        if (9 === B) {
                            if (!(n = v.getElementById(q))) {
                                return u
                            }
                            if (n.id === q) {
                                return u.push(n), u
                            }
                        } else {
                            if (C && (n = C.getElementById(q)) && c0(v, n) && n.id === q) {
                                return u.push(n), u
                            }
                        }
                    } else {
                        if (i[2]) {
                            return dM.apply(u, v.getElementsByTagName(A)), u
                        }
                        if ((q = i[3]) && dl.getElementsByClassName && v.getElementsByClassName) {
                            return dM.apply(u, v.getElementsByClassName(q)), u
                        }
                    }
                }
                if (dl.qsa && !dT[A + " "] && (!c3 || !c3.test(A))) {
                    if (1 !== B) {
                        C = v, c = A
                    } else {
                        if ("object" !== v.nodeName.toLowerCase()) {
                            (m = v.getAttribute("id")) ? m = m.replace(dC, c7): v.setAttribute("id", m = cZ), g = dg(A), p = g.length;
                            while (p--) {
                                g[p] = "#" + m + " " + d0(g[p])
                            }
                            c = g.join(","), C = dZ.test(A) && cO(v.parentNode) || v
                        }
                    }
                    if (c) {
                        try {
                            return dM.apply(u, C.querySelectorAll(c)), u
                        } catch (z) {} finally {
                            m === cZ && v.removeAttribute("id")
                        }
                    }
                }
            }
            return dd(A.replace(dB, "$1"), v, u, t)
        }

        function dJ() {
            var d = [];

            function c(b, a) {
                return d.push(b + " ") > dj.cacheLength && delete c[d.shift()], c[b + " "] = a
            }
            return c
        }

        function de(b) {
            return b[cZ] = !0, b
        }

        function cR(e) {
            var d = c6.createElement("fieldset");
            try {
                return !!e(d)
            } catch (f) {
                return !1
            } finally {
                d.parentNode && d.parentNode.removeChild(d), d = null
            }
        }

        function cb(f, d) {
            var h = f.split("|"),
                g = h.length;
            while (g--) {
                dj.attrHandle[h[g]] = d
            }
        }

        function d3(f, e) {
            var h = e && f,
                g = h && 1 === f.nodeType && 1 === e.nodeType && f.sourceIndex - e.sourceIndex;
            if (g) {
                return g
            }
            if (h) {
                while (h = h.nextSibling) {
                    if (h === e) {
                        return -1
                    }
                }
            }
            return f ? 1 : -1
        }

        function dY(b) {
            return function(a) {
                var d = a.nodeName.toLowerCase();
                return "input" === d && a.type === b
            }
        }

        function dP(b) {
            return function(a) {
                var d = a.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && a.type === b
            }
        }

        function dk(b) {
            return function(a) {
                return "form" in a ? a.parentNode && a.disabled === !1 ? "label" in a ? "label" in a.parentNode ? a.parentNode.disabled === b : a.disabled === b : a.isDisabled === b || a.isDisabled !== !b && bb(a) === b : a.disabled === b : "label" in a && a.disabled === b
            }
        }

        function cS(b) {
            return de(function(a) {
                return a = +a, de(function(l, k) {
                    var j, i = b([], l.length, a),
                        h = i.length;
                    while (h--) {
                        l[j = i[h]] && (l[j] = !(k[j] = l[j]))
                    }
                })
            })
        }

        function cO(b) {
            return b && "undefined" != typeof b.getElementsByTagName && b
        }
        dl = dX.support = {}, dh = dX.isXML = function(d) {
            var c = d && (d.ownerDocument || d).documentElement;
            return !!c && "HTML" !== c.nodeName
        }, c8 = dX.setDocument = function(d) {
            var c, h, f = d ? d.ownerDocument || d : cY;
            return f !== c6 && 9 === f.nodeType && f.documentElement ? (c6 = f, c5 = c6.documentElement, c4 = !dh(c6), cY !== c6 && (h = c6.defaultView) && h.top !== h && (h.addEventListener ? h.addEventListener("unload", cQ, !1) : h.attachEvent && h.attachEvent("onunload", cQ)), dl.attributes = cR(function(b) {
                return b.className = "i", !b.getAttribute("className")
            }), dl.getElementsByTagName = cR(function(b) {
                return b.appendChild(c6.createComment("")), !b.getElementsByTagName("*").length
            }), dl.getElementsByClassName = ds.test(c6.getElementsByClassName), dl.getById = cR(function(b) {
                return c5.appendChild(b).id = cZ, !c6.getElementsByName || !c6.getElementsByName(cZ).length
            }), dl.getById ? (dj.filter.ID = function(g) {
                var e = g.replace(dq, dW);
                return function(b) {
                    return b.getAttribute("id") === e
                }
            }, dj.find.ID = function(g, e) {
                if ("undefined" != typeof e.getElementById && c4) {
                    var i = e.getElementById(g);
                    return i ? [i] : []
                }
            }) : (dj.filter.ID = function(g) {
                var e = g.replace(dq, dW);
                return function(b) {
                    var i = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id");
                    return i && i.value === e
                }
            }, dj.find.ID = function(i, g) {
                if ("undefined" != typeof g.getElementById && c4) {
                    var m, l, k, j = g.getElementById(i);
                    if (j) {
                        if (m = j.getAttributeNode("id"), m && m.value === i) {
                            return [j]
                        }
                        k = g.getElementsByName(i), l = 0;
                        while (j = k[l++]) {
                            if (m = j.getAttributeNode("id"), m && m.value === i) {
                                return [j]
                            }
                        }
                    }
                    return []
                }
            }), dj.find.TAG = dl.getElementsByTagName ? function(g, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(g) : dl.qsa ? e.querySelectorAll(g) : void 0
            } : function(i, g) {
                var m, l = [],
                    k = 0,
                    j = g.getElementsByTagName(i);
                if ("*" === i) {
                    while (m = j[k++]) {
                        1 === m.nodeType && l.push(m)
                    }
                    return l
                }
                return j
            }, dj.find.CLASS = dl.getElementsByClassName && function(g, e) {
                if ("undefined" != typeof e.getElementsByClassName && c4) {
                    return e.getElementsByClassName(g)
                }
            }, c2 = [], c3 = [], (dl.qsa = ds.test(c6.querySelectorAll)) && (cR(function(b) {
                c5.appendChild(b).innerHTML = "<a id='" + cZ + "'></a><select id='" + cZ + "-\r\\' msallowcapture=''><option selected=''></option></select>", b.querySelectorAll("[msallowcapture^='']").length && c3.push("[*^$]=" + dH + "*(?:''|\"\")"), b.querySelectorAll("[selected]").length || c3.push("\\[" + dH + "*(?:value|" + dI + ")"), b.querySelectorAll("[id~=" + cZ + "-]").length || c3.push("~="), b.querySelectorAll(":checked").length || c3.push(":checked"), b.querySelectorAll("a#" + cZ + "+*").length || c3.push(".#.+[+~]")
            }), cR(function(g) {
                g.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = c6.createElement("input");
                e.setAttribute("type", "hidden"), g.appendChild(e).setAttribute("name", "D"), g.querySelectorAll("[name=d]").length && c3.push("name" + dH + "*[*^$|!~]?="), 2 !== g.querySelectorAll(":enabled").length && c3.push(":enabled", ":disabled"), c5.appendChild(g).disabled = !0, 2 !== g.querySelectorAll(":disabled").length && c3.push(":enabled", ":disabled"), g.querySelectorAll("*,:x"), c3.push(",.*:")
            })), (dl.matchesSelector = ds.test(c1 = c5.matches || c5.webkitMatchesSelector || c5.mozMatchesSelector || c5.oMatchesSelector || c5.msMatchesSelector)) && cR(function(b) {
                dl.disconnectedMatch = c1.call(b, "*"), c1.call(b, "[s!='']:x"), c2.push("!=", dE)
            }), c3 = c3.length && new RegExp(c3.join("|")), c2 = c2.length && new RegExp(c2.join("|")), c = ds.test(c5.compareDocumentPosition), c0 = c || ds.test(c5.contains) ? function(g, e) {
                var j = 9 === g.nodeType ? g.documentElement : g,
                    i = e && e.parentNode;
                return g === i || !(!i || 1 !== i.nodeType || !(j.contains ? j.contains(i) : g.compareDocumentPosition && 16 & g.compareDocumentPosition(i)))
            } : function(g, e) {
                if (e) {
                    while (e = e.parentNode) {
                        if (e === g) {
                            return !0
                        }
                    }
                }
                return !1
            }, dS = c ? function(g, e) {
                if (g === e) {
                    return c9 = !0, 0
                }
                var i = !g.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (g.ownerDocument || g) === (e.ownerDocument || e) ? g.compareDocumentPosition(e) : 1, 1 & i || !dl.sortDetached && e.compareDocumentPosition(g) === i ? g === c6 || g.ownerDocument === cY && c0(cY, g) ? -1 : e === c6 || e.ownerDocument === cY && c0(cY, e) ? 1 : db ? dK(db, g) - dK(db, e) : 0 : 4 & i ? -1 : 1)
            } : function(j, i) {
                if (j === i) {
                    return c9 = !0, 0
                }
                var p, o = 0,
                    n = j.parentNode,
                    m = i.parentNode,
                    l = [j],
                    k = [i];
                if (!n || !m) {
                    return j === c6 ? -1 : i === c6 ? 1 : n ? -1 : m ? 1 : db ? dK(db, j) - dK(db, i) : 0
                }
                if (n === m) {
                    return d3(j, i)
                }
                p = j;
                while (p = p.parentNode) {
                    l.unshift(p)
                }
                p = i;
                while (p = p.parentNode) {
                    k.unshift(p)
                }
                while (l[o] === k[o]) {
                    o++
                }
                return o ? d3(l[o], k[o]) : l[o] === cY ? -1 : k[o] === cY ? 1 : 0
            }, c6) : c6
        }, dX.matches = function(d, c) {
            return dX(d, null, null, c)
        }, dX.matchesSelector = function(f, c) {
            if ((f.ownerDocument || f) !== c6 && c8(f), c = c.replace(dy, "='$1']"), dl.matchesSelector && c4 && !dT[c + " "] && (!c2 || !c2.test(c)) && (!c3 || !c3.test(c))) {
                try {
                    var h = c1.call(f, c);
                    if (h || dl.disconnectedMatch || f.document && 11 !== f.document.nodeType) {
                        return h
                    }
                } catch (g) {}
            }
            return dX(c, c6, null, [f]).length > 0
        }, dX.contains = function(d, c) {
            return (d.ownerDocument || d) !== c6 && c8(d), c0(d, c)
        }, dX.attr = function(d, c) {
            (d.ownerDocument || d) !== c6 && c8(d);
            var h = dj.attrHandle[c.toLowerCase()],
                g = h && dR.call(dj.attrHandle, c.toLowerCase()) ? h(d, c, !c4) : void 0;
            return void 0 !== g ? g : dl.attributes || !c4 ? d.getAttribute(c) : (g = d.getAttributeNode(c)) && g.specified ? g.value : null
        }, dX.escape = function(b) {
            return (b + "").replace(dC, c7)
        }, dX.error = function(b) {
            throw new Error("Syntax error, unrecognized expression: " + b)
        }, dX.uniqueSort = function(g) {
            var c, j = [],
                i = 0,
                h = 0;
            if (c9 = !dl.detectDuplicates, db = !dl.sortStable && g.slice(0), g.sort(dS), c9) {
                while (c = g[h++]) {
                    c === g[h] && (i = j.push(h))
                }
                while (i--) {
                    g.splice(j[i], 1)
                }
            }
            return db = null, g
        }, di = dX.getText = function(g) {
            var e, j = "",
                i = 0,
                h = g.nodeType;
            if (h) {
                if (1 === h || 9 === h || 11 === h) {
                    if ("string" == typeof g.textContent) {
                        return g.textContent
                    }
                    for (g = g.firstChild; g; g = g.nextSibling) {
                        j += di(g)
                    }
                } else {
                    if (3 === h || 4 === h) {
                        return g.nodeValue
                    }
                }
            } else {
                while (e = g[i++]) {
                    j += di(e)
                }
            }
            return j
        }, dj = dX.selectors = {
            cacheLength: 50,
            createPseudo: de,
            match: dv,
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
                ATTR: function(b) {
                    return b[1] = b[1].replace(dq, dW), b[3] = (b[3] || b[4] || b[5] || "").replace(dq, dW), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
                },
                CHILD: function(b) {
                    return b[1] = b[1].toLowerCase(), "nth" === b[1].slice(0, 3) ? (b[3] || dX.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && dX.error(b[0]), b
                },
                PSEUDO: function(e) {
                    var d, f = !e[6] && e[2];
                    return dv.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : f && dx.test(f) && (d = dg(f, !0)) && (d = f.indexOf(")", f.length - d) - f.length) && (e[0] = e[0].slice(0, d), e[2] = f.slice(0, d)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(d) {
                    var c = d.replace(dq, dW).toLowerCase();
                    return "*" === d ? function() {
                        return !0
                    } : function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === c
                    }
                },
                CLASS: function(d) {
                    var c = cV[d + " "];
                    return c || (c = new RegExp("(^|" + dH + ")" + d + "(" + dH + "|$)")) && cV(d, function(b) {
                        return c.test("string" == typeof b.className && b.className || "undefined" != typeof b.getAttribute && b.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, d, f) {
                    return function(b) {
                        var a = dX.attr(b, e);
                        return null == a ? "!=" === d : !d || (a += "", "=" === d ? a === f : "!=" === d ? a !== f : "^=" === d ? f && 0 === a.indexOf(f) : "*=" === d ? f && a.indexOf(f) > -1 : "$=" === d ? f && a.slice(-f.length) === f : "~=" === d ? (" " + a.replace(dD, " ") + " ").indexOf(f) > -1 : "|=" === d && (a === f || a.slice(0, f.length + 1) === f + "-"))
                    }
                },
                CHILD: function(j, i, p, o, n) {
                    var m = "nth" !== j.slice(0, 3),
                        l = "last" !== j.slice(-4),
                        k = "of-type" === i;
                    return 1 === o && 0 === n ? function(b) {
                        return !!b.parentNode
                    } : function(A, z, x) {
                        var w, v, u, h, g, f, e = m !== l ? "nextSibling" : "previousSibling",
                            d = A.parentNode,
                            a = k && A.nodeName.toLowerCase(),
                            C = !x && !k,
                            B = !1;
                        if (d) {
                            if (m) {
                                while (e) {
                                    h = A;
                                    while (h = h[e]) {
                                        if (k ? h.nodeName.toLowerCase() === a : 1 === h.nodeType) {
                                            return !1
                                        }
                                    }
                                    f = e = "only" === j && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [l ? d.firstChild : d.lastChild], l && C) {
                                h = d, u = h[cZ] || (h[cZ] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), w = v[j] || [], g = w[0] === cX && w[1], B = g && w[2], h = g && d.childNodes[g];
                                while (h = ++g && h && h[e] || (B = g = 0) || f.pop()) {
                                    if (1 === h.nodeType && ++B && h === A) {
                                        v[j] = [cX, g, B];
                                        break
                                    }
                                }
                            } else {
                                if (C && (h = A, u = h[cZ] || (h[cZ] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), w = v[j] || [], g = w[0] === cX && w[1], B = g), B === !1) {
                                    while (h = ++g && h && h[e] || (B = g = 0) || f.pop()) {
                                        if ((k ? h.nodeName.toLowerCase() === a : 1 === h.nodeType) && ++B && (C && (u = h[cZ] || (h[cZ] = {}), v = u[h.uniqueID] || (u[h.uniqueID] = {}), v[j] = [cX, B]), h === A)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return B -= n, B === o || B % o === 0 && B / o >= 0
                        }
                    }
                },
                PSEUDO: function(f, d) {
                    var h, g = dj.pseudos[f] || dj.setFilters[f.toLowerCase()] || dX.error("unsupported pseudo: " + f);
                    return g[cZ] ? g(d) : g.length > 1 ? (h = [f, f, "", d], dj.setFilters.hasOwnProperty(f.toLowerCase()) ? de(function(b, k) {
                        var j, i = g(b, d),
                            e = i.length;
                        while (e--) {
                            j = dK(b, i[e]), b[j] = !(k[j] = i[e])
                        }
                    }) : function(b) {
                        return g(b, 0, h)
                    }) : g
                }
            },
            pseudos: {
                not: de(function(f) {
                    var e = [],
                        h = [],
                        g = df(f.replace(dB, "$1"));
                    return g[cZ] ? de(function(i, d, n, m) {
                        var l, k = g(i, null, m, []),
                            j = i.length;
                        while (j--) {
                            (l = k[j]) && (i[j] = !(d[j] = l))
                        }
                    }) : function(b, d, c) {
                        return e[0] = b, g(e, null, c, h), e[0] = null, !h.pop()
                    }
                }),
                has: de(function(b) {
                    return function(a) {
                        return dX(b, a).length > 0
                    }
                }),
                contains: de(function(b) {
                    return b = b.replace(dq, dW),
                        function(a) {
                            return (a.textContent || a.innerText || di(a)).indexOf(b) > -1
                        }
                }),
                lang: de(function(b) {
                    return dw.test(b || "") || dX.error("unsupported lang: " + b), b = b.replace(dq, dW).toLowerCase(),
                        function(a) {
                            var d;
                            do {
                                if (d = c4 ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang")) {
                                    return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-")
                                }
                            } while ((a = a.parentNode) && 1 === a.nodeType);
                            return !1
                        }
                }),
                target: function(a) {
                    var d = dn.location && dn.location.hash;
                    return d && d.slice(1) === a.id
                },
                root: function(b) {
                    return b === c5
                },
                focus: function(b) {
                    return b === c6.activeElement && (!c6.hasFocus || c6.hasFocus()) && !!(b.type || b.href || ~b.tabIndex)
                },
                enabled: dk(!1),
                disabled: dk(!0),
                checked: function(d) {
                    var c = d.nodeName.toLowerCase();
                    return "input" === c && !!d.checked || "option" === c && !!d.selected
                },
                selected: function(b) {
                    return b.parentNode && b.parentNode.selectedIndex, b.selected === !0
                },
                empty: function(b) {
                    for (b = b.firstChild; b; b = b.nextSibling) {
                        if (b.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(b) {
                    return !dj.pseudos.empty(b)
                },
                header: function(b) {
                    return dt.test(b.nodeName)
                },
                input: function(b) {
                    return du.test(b.nodeName)
                },
                button: function(d) {
                    var c = d.nodeName.toLowerCase();
                    return "input" === c && "button" === d.type || "button" === c
                },
                text: function(d) {
                    var c;
                    return "input" === d.nodeName.toLowerCase() && "text" === d.type && (null == (c = d.getAttribute("type")) || "text" === c.toLowerCase())
                },
                first: cS(function() {
                    return [0]
                }),
                last: cS(function(d, c) {
                    return [c - 1]
                }),
                eq: cS(function(e, d, f) {
                    return [f < 0 ? f + d : f]
                }),
                even: cS(function(e, d) {
                    for (var f = 0; f < d; f += 2) {
                        e.push(f)
                    }
                    return e
                }),
                odd: cS(function(e, d) {
                    for (var f = 1; f < d; f += 2) {
                        e.push(f)
                    }
                    return e
                }),
                lt: cS(function(f, e, h) {
                    for (var g = h < 0 ? h + e : h; --g >= 0;) {
                        f.push(g)
                    }
                    return f
                }),
                gt: cS(function(f, e, h) {
                    for (var g = h < 0 ? h + e : h; ++g < e;) {
                        f.push(g)
                    }
                    return f
                })
            }
        }, dj.pseudos.nth = dj.pseudos.eq;
        for (dm in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) {
            dj.pseudos[dm] = dY(dm)
        }
        for (dm in {
                submit: !0,
                reset: !0
            }) {
            dj.pseudos[dm] = dP(dm)
        }

        function d4() {}
        d4.prototype = dj.filters = dj.pseudos, dj.setFilters = new d4, dg = dX.tokenize = function(t, s) {
            var r, q, p, o, n, m, l, d = cU[t + " "];
            if (d) {
                return s ? 0 : d.slice(0)
            }
            n = t, m = [], l = dj.preFilter;
            while (n) {
                r && !(q = dA.exec(n)) || (q && (n = n.slice(q[0].length) || n), m.push(p = [])), r = !1, (q = dz.exec(n)) && (r = q.shift(), p.push({
                    value: r,
                    type: q[0].replace(dB, " ")
                }), n = n.slice(r.length));
                for (o in dj.filter) {
                    !(q = dv[o].exec(n)) || l[o] && !(q = l[o](q)) || (r = q.shift(), p.push({
                        value: r,
                        type: o,
                        matches: q
                    }), n = n.slice(r.length))
                }
                if (!r) {
                    break
                }
            }
            return s ? n.length : n ? dX.error(t) : cU(t, m).slice(0)
        };

        function d0(f) {
            for (var e = 0, h = f.length, g = ""; e < h; e++) {
                g += f[e].value
            }
            return g
        }

        function dU(j, i, p) {
            var o = i.dir,
                n = i.next,
                m = n || o,
                l = p && "parentNode" === m,
                k = cW++;
            return i.first ? function(a, f, d) {
                while (a = a[o]) {
                    if (1 === a.nodeType || l) {
                        return j(a, f, d)
                    }
                }
                return !1
            } : function(d, q, h) {
                var g, f, e, a = [cX, k];
                if (h) {
                    while (d = d[o]) {
                        if ((1 === d.nodeType || l) && j(d, q, h)) {
                            return !0
                        }
                    }
                } else {
                    while (d = d[o]) {
                        if (1 === d.nodeType || l) {
                            if (e = d[cZ] || (d[cZ] = {}), f = e[d.uniqueID] || (e[d.uniqueID] = {}), n && n === d.nodeName.toLowerCase()) {
                                d = d[o] || d
                            } else {
                                if ((g = f[m]) && g[0] === cX && g[1] === k) {
                                    return a[2] = g[2]
                                }
                                if (f[m] = a, a[2] = j(d, q, h)) {
                                    return !0
                                }
                            }
                        }
                    }
                }
                return !1
            }
        }

        function dp(b) {
            return b.length > 1 ? function(a, h, g) {
                var f = b.length;
                while (f--) {
                    if (!b[f](a, h, g)) {
                        return !1
                    }
                }
                return !0
            } : b[0]
        }

        function cT(g, f, j) {
            for (var i = 0, h = f.length; i < h; i++) {
                dX(g, f[i], j)
            }
            return j
        }

        function cP(t, s, r, q, p) {
            for (var o, n = [], m = 0, l = t.length, k = null != s; m < l; m++) {
                (o = t[m]) && (r && !r(o, q, p) || (n.push(o), k && s.push(m)))
            }
            return n
        }

        function ab(h, g, l, k, j, i) {
            return k && !k[cZ] && (k = ab(k)), j && !j[cZ] && (j = ab(j, i)), de(function(A, z, x, w) {
                var v, u, t, s = [],
                    e = [],
                    d = z.length,
                    c = A || cT(g || "*", x.nodeType ? [x] : x, []),
                    b = !h || !A && g ? c : cP(c, s, h, x, w),
                    a = l ? j || (A ? h : d || k) ? [] : z : b;
                if (l && l(b, a, x, w), k) {
                    v = cP(a, e), k(v, [], x, w), u = v.length;
                    while (u--) {
                        (t = v[u]) && (a[e[u]] = !(b[e[u]] = t))
                    }
                }
                if (A) {
                    if (j || h) {
                        if (j) {
                            v = [], u = a.length;
                            while (u--) {
                                (t = a[u]) && v.push(b[u] = t)
                            }
                            j(null, a = [], v, w)
                        }
                        u = a.length;
                        while (u--) {
                            (t = a[u]) && (v = j ? dK(A, t) : s[u]) > -1 && (A[v] = !(z[v] = t))
                        }
                    }
                } else {
                    a = cP(a === z ? a.splice(d, a.length) : a), j ? j(null, z, a, w) : dM.apply(z, a)
                }
            })
        }

        function d1(v) {
            for (var u, t, s, r = v.length, q = dj.relative[v[0].type], p = q || dj.relative[" "], o = q ? 1 : 0, n = dU(function(b) {
                    return b === u
                }, p, !0), j = dU(function(b) {
                    return dK(u, b) > -1
                }, p, !0), d = [function(b, h, g) {
                    var f = !q && (g || h !== dc) || ((u = h).nodeType ? n(b, h, g) : j(b, h, g));
                    return u = null, f
                }]; o < r; o++) {
                if (t = dj.relative[v[o].type]) {
                    d = [dU(dp(d), t)]
                } else {
                    if (t = dj.filter[v[o].type].apply(null, v[o].matches), t[cZ]) {
                        for (s = ++o; s < r; s++) {
                            if (dj.relative[v[s].type]) {
                                break
                            }
                        }
                        return ab(o > 1 && dp(d), o > 1 && d0(v.slice(0, o - 1).concat({
                            value: " " === v[o - 2].type ? "*" : ""
                        })).replace(dB, "$1"), t, o < s && d1(v.slice(o, s)), s < r && d1(v = v.slice(s)), s < r && d0(v))
                    }
                    d.push(t)
                }
            }
            return dp(d)
        }

        function dV(g, d) {
            var j = d.length > 0,
                i = g.length > 0,
                h = function(A, w, p, n, m) {
                    var e, c, b, a = 0,
                        H = "0",
                        G = A && [],
                        F = [],
                        E = dc,
                        D = A || i && dj.find.TAG("*", m),
                        C = cX += null == E ? 1 : Math.random() || 0.1,
                        B = D.length;
                    for (m && (dc = w === c6 || w || m); H !== B && null != (e = D[H]); H++) {
                        if (i && e) {
                            c = 0, w || e.ownerDocument === c6 || (c8(e), p = !c4);
                            while (b = g[c++]) {
                                if (b(e, w || c6, p)) {
                                    n.push(e);
                                    break
                                }
                            }
                            m && (cX = C)
                        }
                        j && ((e = !b && e) && a--, A && G.push(e))
                    }
                    if (a += H, j && H !== a) {
                        c = 0;
                        while (b = d[c++]) {
                            b(G, F, w, p)
                        }
                        if (A) {
                            if (a > 0) {
                                while (H--) {
                                    G[H] || F[H] || (F[H] = dO.call(n))
                                }
                            }
                            F = cP(F)
                        }
                        dM.apply(n, F), m && !A && F.length > 0 && a + d.length > 1 && dX.uniqueSort(n)
                    }
                    return m && (cX = C, dc = E), G
                };
            return j ? de(h) : h
        }
        return df = dX.compile = function(h, g) {
            var l, k = [],
                j = [],
                i = dT[h + " "];
            if (!i) {
                g || (g = dg(h)), l = g.length;
                while (l--) {
                    i = d1(g[l]), i[cZ] ? k.push(i) : j.push(i)
                }
                i = dT(h, dV(j, k)), i.selector = h
            }
            return i
        }, dd = dX.select = function(v, u, t, s) {
            var r, q, p, o, h, g = "function" == typeof v && v,
                d = !s && dg(v = g.selector || v);
            if (t = t || [], 1 === d.length) {
                if (q = d[0] = d[0].slice(0), q.length > 2 && "ID" === (p = q[0]).type && 9 === u.nodeType && c4 && dj.relative[q[1].type]) {
                    if (u = (dj.find.ID(p.matches[0].replace(dq, dW), u) || [])[0], !u) {
                        return t
                    }
                    g && (u = u.parentNode), v = v.slice(q.shift().value.length)
                }
                r = dv.needsContext.test(v) ? 0 : q.length;
                while (r--) {
                    if (p = q[r], dj.relative[o = p.type]) {
                        break
                    }
                    if ((h = dj.find[o]) && (s = h(p.matches[0].replace(dq, dW), dZ.test(q[0].type) && cO(u.parentNode) || u))) {
                        if (q.splice(r, 1), v = s.length && d0(q), !v) {
                            return dM.apply(t, s), t
                        }
                        break
                    }
                }
            }
            return (g || df(v, d))(s, u, !c4, t, !u || dZ.test(v) && cO(u.parentNode) || u), t
        }, dl.sortStable = cZ.split("").sort(dS).join("") === cZ, dl.detectDuplicates = !!c9, c8(), dl.sortDetached = cR(function(b) {
            return 1 & b.compareDocumentPosition(c6.createElement("fieldset"))
        }), cR(function(b) {
            return b.innerHTML = "<a href='#'></a>", "#" === b.firstChild.getAttribute("href")
        }) || cb("type|href|height|width", function(e, d, f) {
            if (!f) {
                return e.getAttribute(d, "type" === d.toLowerCase() ? 1 : 2)
            }
        }), dl.attributes && cR(function(b) {
            return b.innerHTML = "<input/>", b.firstChild.setAttribute("value", ""), "" === b.firstChild.getAttribute("value")
        }) || cb("value", function(e, d, f) {
            if (!f && "input" === e.nodeName.toLowerCase()) {
                return e.defaultValue
            }
        }), cR(function(b) {
            return null == b.getAttribute("disabled")
        }) || cb(dI, function(f, e, h) {
            var g;
            if (!h) {
                return f[e] === !0 ? e.toLowerCase() : (g = f.getAttributeNode(e)) && g.specified ? g.value : null
            }
        }), dX
    }(bQ);
    bw.find = bp, bw.expr = bp.selectors, bw.expr[":"] = bw.expr.pseudos, bw.uniqueSort = bw.unique = bp.uniqueSort, bw.text = bp.getText, bw.isXMLDoc = bp.isXML, bw.contains = bp.contains, bw.escapeSelector = bp.escape;
    var bo = function(g, f, j) {
            var i = [],
                h = void 0 !== j;
            while ((g = g[f]) && 9 !== g.nodeType) {
                if (1 === g.nodeType) {
                    if (h && bw(g).is(j)) {
                        break
                    }
                    i.push(g)
                }
            }
            return i
        },
        bm = function(e, d) {
            for (var f = []; e; e = e.nextSibling) {
                1 === e.nodeType && e !== d && f.push(e)
            }
            return f
        },
        cr = bw.expr.match.needsContext;

    function cq(d, c) {
        return d.nodeName && d.nodeName.toLowerCase() === c.toLowerCase()
    }
    var cp = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        co = /^.[^:#\[\.,]*$/;

    function cn(e, d, f) {
        return bw.isFunction(d) ? bw.grep(e, function(b, c) {
            return !!d.call(b, c, b) !== f
        }) : d.nodeType ? bw.grep(e, function(b) {
            return b === d !== f
        }) : "string" != typeof d ? bw.grep(e, function(b) {
            return bG.call(d, b) > -1 !== f
        }) : co.test(d) ? bw.filter(d, e, f) : (d = bw.filter(d, e), bw.grep(e, function(b) {
            return bG.call(d, b) > -1 !== f && 1 === b.nodeType
        }))
    }
    bw.filter = function(f, e, h) {
        var g = e[0];
        return h && (f = ":not(" + f + ")"), 1 === e.length && 1 === g.nodeType ? bw.find.matchesSelector(g, f) ? [g] : [] : bw.find.matches(f, bw.grep(e, function(b) {
            return 1 === b.nodeType
        }))
    }, bw.fn.extend({
        find: function(g) {
            var f, j, i = this.length,
                h = this;
            if ("string" != typeof g) {
                return this.pushStack(bw(g).filter(function() {
                    for (f = 0; f < i; f++) {
                        if (bw.contains(h[f], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (j = this.pushStack([]), f = 0; f < i; f++) {
                bw.find(g, h[f], j)
            }
            return i > 1 ? bw.uniqueSort(j) : j
        },
        filter: function(b) {
            return this.pushStack(cn(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(cn(this, b || [], !0))
        },
        is: function(b) {
            return !!cn(this, "string" == typeof b && cr.test(b) ? bw(b) : b || [], !1).length
        }
    });
    var cm, ck = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        ci = bw.fn.init = function(g, d, j) {
            var i, h;
            if (!g) {
                return this
            }
            if (j = j || cm, "string" == typeof g) {
                if (i = "<" === g[0] && ">" === g[g.length - 1] && g.length >= 3 ? [null, g, null] : ck.exec(g), !i || !i[1] && d) {
                    return !d || d.jquery ? (d || j).find(g) : this.constructor(d).find(g)
                }
                if (i[1]) {
                    if (d = d instanceof bw ? d[0] : d, bw.merge(this, bw.parseHTML(i[1], d && d.nodeType ? d.ownerDocument || d : bN, !0)), cp.test(i[1]) && bw.isPlainObject(d)) {
                        for (i in d) {
                            bw.isFunction(this[i]) ? this[i](d[i]) : this.attr(i, d[i])
                        }
                    }
                    return this
                }
                return h = bN.getElementById(i[2]), h && (this[0] = h, this.length = 1), this
            }
            return g.nodeType ? (this[0] = g, this.length = 1, this) : bw.isFunction(g) ? void 0 !== j.ready ? j.ready(g) : g(bw) : bw.makeArray(g, this)
        };
    ci.prototype = bw.fn, cm = bw(bN);
    var ch = /^(?:parents|prev(?:Until|All))/,
        cg = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    bw.fn.extend({
        has: function(e) {
            var d = bw(e, this),
                f = d.length;
            return this.filter(function() {
                for (var b = 0; b < f; b++) {
                    if (bw.contains(this, d[b])) {
                        return !0
                    }
                }
            })
        },
        closest: function(i, h) {
            var n, m = 0,
                l = this.length,
                k = [],
                j = "string" != typeof i && bw(i);
            if (!cr.test(i)) {
                for (; m < l; m++) {
                    for (n = this[m]; n && n !== h; n = n.parentNode) {
                        if (n.nodeType < 11 && (j ? j.index(n) > -1 : 1 === n.nodeType && bw.find.matchesSelector(n, i))) {
                            k.push(n);
                            break
                        }
                    }
                }
            }
            return this.pushStack(k.length > 1 ? bw.uniqueSort(k) : k)
        },
        index: function(b) {
            return b ? "string" == typeof b ? bG.call(bw(b), this[0]) : bG.call(this, b.jquery ? b[0] : b) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(d, c) {
            return this.pushStack(bw.uniqueSort(bw.merge(this.get(), bw(d, c))))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });

    function cf(d, c) {
        while ((d = d[c]) && 1 !== d.nodeType) {}
        return d
    }
    bw.each({
        parent: function(d) {
            var c = d.parentNode;
            return c && 11 !== c.nodeType ? c : null
        },
        parents: function(b) {
            return bo(b, "parentNode")
        },
        parentsUntil: function(e, d, f) {
            return bo(e, "parentNode", f)
        },
        next: function(b) {
            return cf(b, "nextSibling")
        },
        prev: function(b) {
            return cf(b, "previousSibling")
        },
        nextAll: function(b) {
            return bo(b, "nextSibling")
        },
        prevAll: function(b) {
            return bo(b, "previousSibling")
        },
        nextUntil: function(e, d, f) {
            return bo(e, "nextSibling", f)
        },
        prevUntil: function(e, d, f) {
            return bo(e, "previousSibling", f)
        },
        siblings: function(b) {
            return bm((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return bm(b.firstChild)
        },
        contents: function(b) {
            return cq(b, "iframe") ? b.contentDocument : (cq(b, "template") && (b = b.content || b), bw.merge([], b.childNodes))
        }
    }, function(d, c) {
        bw.fn[d] = function(f, b) {
            var a = bw.map(this, c, f);
            return "Until" !== d.slice(-5) && (b = f), b && "string" == typeof b && (a = bw.filter(b, a)), this.length > 1 && (cg[d] || bw.uniqueSort(a), ch.test(d) && a.reverse()), this.pushStack(a)
        }
    });
    var ce = /[^\x20\t\r\n\f]+/g;

    function cd(d) {
        var c = {};
        return bw.each(d.match(ce) || [], function(b, e) {
            c[e] = !0
        }), c
    }
    bw.Callbacks = function(t) {
        t = "string" == typeof t ? cd(t) : bw.extend({}, t);
        var s, r, q, p, o = [],
            n = [],
            m = -1,
            l = function() {
                for (p = p || t.once, q = s = !0; n.length; m = -1) {
                    r = n.shift();
                    while (++m < o.length) {
                        o[m].apply(r[0], r[1]) === !1 && t.stopOnFalse && (m = o.length, r = !1)
                    }
                }
                t.memory || (r = !1), s = !1, p && (o = r ? [] : "")
            },
            k = {
                add: function() {
                    return o && (r && !s && (m = o.length - 1, n.push(r)), function a(c) {
                        bw.each(c, function(d, e) {
                            bw.isFunction(e) ? t.unique && k.has(e) || o.push(e) : e && e.length && "string" !== bw.type(e) && a(e)
                        })
                    }(arguments), r && !s && l()), this
                },
                remove: function() {
                    return bw.each(arguments, function(e, d) {
                        var f;
                        while ((f = bw.inArray(d, o, f)) > -1) {
                            o.splice(f, 1), f <= m && m--
                        }
                    }), this
                },
                has: function(b) {
                    return b ? bw.inArray(b, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return p = n = [], o = r = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return p = n = [], r || s || (o = r = ""), this
                },
                locked: function() {
                    return !!p
                },
                fireWith: function(b, d) {
                    return p || (d = d || [], d = [b, d.slice ? d.slice() : d], n.push(d), s || l()), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!q
                }
            };
        return k
    };

    function cc(b) {
        return b
    }

    function b9(b) {
        throw b
    }

    function b8(g, f, j, i) {
        var h;
        try {
            g && bw.isFunction(h = g.promise) ? h.call(g).done(f).fail(j) : g && bw.isFunction(h = g.then) ? h.call(g, f, j) : f.apply(void 0, [g].slice(i))
        } catch (g) {
            j.apply(void 0, [g])
        }
    }
    bw.extend({
        Deferred: function(a) {
            var j = [
                    ["notify", "progress", bw.Callbacks("memory"), bw.Callbacks("memory"), 2],
                    ["resolve", "done", bw.Callbacks("once memory"), bw.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", bw.Callbacks("once memory"), bw.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                h = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return g.done(arguments).fail(arguments), this
                    },
                    "catch": function(b) {
                        return h.then(null, b)
                    },
                    pipe: function() {
                        var b = arguments;
                        return bw.Deferred(function(c) {
                            bw.each(j, function(l, k) {
                                var f = bw.isFunction(b[k[4]]) && b[k[4]];
                                g[k[1]](function() {
                                    var d = f && f.apply(this, arguments);
                                    d && bw.isFunction(d.promise) ? d.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[k[0] + "With"](this, f ? [d] : arguments)
                                })
                            }), b = null
                        }).promise()
                    },
                    then: function(c, n, m) {
                        var l = 0;

                        function k(f, q, p, o) {
                            return function() {
                                var r = this,
                                    e = arguments,
                                    d = function() {
                                        var s, t;
                                        if (!(f < l)) {
                                            if (s = p.apply(r, e), s === q.promise()) {
                                                throw new TypeError("Thenable self-resolution")
                                            }
                                            t = s && ("object" == typeof s || "function" == typeof s) && s.then, bw.isFunction(t) ? o ? t.call(s, k(l, q, cc, o), k(l, q, b9, o)) : (l++, t.call(s, k(l, q, cc, o), k(l, q, b9, o), k(l, q, cc, q.notifyWith))) : (p !== cc && (r = void 0, e = [s]), (o || q.resolveWith)(r, e))
                                        }
                                    },
                                    b = o ? d : function() {
                                        try {
                                            d()
                                        } catch (s) {
                                            bw.Deferred.exceptionHook && bw.Deferred.exceptionHook(s, b.stackTrace), f + 1 >= l && (p !== b9 && (r = void 0, e = [s]), q.rejectWith(r, e))
                                        }
                                    };
                                f ? b() : (bw.Deferred.getStackHook && (b.stackTrace = bw.Deferred.getStackHook()), bQ.setTimeout(b))
                            }
                        }
                        return bw.Deferred(function(b) {
                            j[0][3].add(k(0, b, bw.isFunction(m) ? m : cc, b.notifyWith)), j[1][3].add(k(0, b, bw.isFunction(c) ? c : cc)), j[2][3].add(k(0, b, bw.isFunction(n) ? n : b9))
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? bw.extend(b, h) : h
                    }
                },
                g = {};
            return bw.each(j, function(d, c) {
                var f = c[2],
                    e = c[5];
                h[c[1]] = f.add, e && f.add(function() {
                    i = e
                }, j[3 - d][2].disable, j[0][2].lock), f.add(c[3].fire), g[c[0]] = function() {
                    return g[c[0] + "With"](this === g ? void 0 : this, arguments), this
                }, g[c[0] + "With"] = f.fireWith
            }), h.promise(g), a && a.call(g, g), g
        },
        when: function(i) {
            var f = arguments.length,
                n = f,
                m = Array(n),
                l = bK.call(arguments),
                k = bw.Deferred(),
                j = function(b) {
                    return function(a) {
                        m[b] = this, l[b] = arguments.length > 1 ? bK.call(arguments) : a, --f || k.resolveWith(m, l)
                    }
                };
            if (f <= 1 && (b8(i, k.done(j(n)).resolve, k.reject, !f), "pending" === k.state() || bw.isFunction(l[n] && l[n].then))) {
                return k.then()
            }
            while (n--) {
                b8(l[n], j(n), k.reject)
            }
            return k.promise()
        }
    });
    var b7 = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    bw.Deferred.exceptionHook = function(a, d) {
        bQ.console && bQ.console.warn && a && b7.test(a.name) && bQ.console.warn("jQuery.Deferred exception: " + a.message, a.stack, d)
    }, bw.readyException = function(a) {
        bQ.setTimeout(function() {
            throw a
        })
    };
    var b5 = bw.Deferred();
    bw.fn.ready = function(b) {
        return b5.then(b)["catch"](function(c) {
            bw.readyException(c)
        }), this
    }, bw.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(b) {
            (b === !0 ? --bw.readyWait : bw.isReady) || (bw.isReady = !0, b !== !0 && --bw.readyWait > 0 || b5.resolveWith(bN, [bw]))
        }
    }), bw.ready.then = b5.then;

    function b4() {
        bN.removeEventListener("DOMContentLoaded", b4), bQ.removeEventListener("load", b4), bw.ready()
    }
    "complete" === bN.readyState || "loading" !== bN.readyState && !bN.documentElement.doScroll ? bQ.setTimeout(bw.ready) : (bN.addEventListener("DOMContentLoaded", b4), bQ.addEventListener("load", b4));
    var b2 = function(t, s, r, q, p, o, n) {
            var m = 0,
                l = t.length,
                k = null == r;
            if ("object" === bw.type(r)) {
                p = !0;
                for (m in r) {
                    b2(t, s, m, r[m], !0, o, n)
                }
            } else {
                if (void 0 !== q && (p = !0, bw.isFunction(q) || (n = !0), k && (n ? (s.call(t, q), s = null) : (k = s, s = function(e, d, f) {
                        return k.call(bw(e), f)
                    })), s)) {
                    for (; m < l; m++) {
                        s(t[m], r, n ? q : q.call(t[m], m, s(t[m], r)))
                    }
                }
            }
            return p ? t : k ? s.call(t) : l ? s(t[0], r) : o
        },
        b1 = function(b) {
            return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType
        };

    function b0() {
        this.expando = bw.expando + b0.uid++
    }
    b0.uid = 1, b0.prototype = {
        cache: function(d) {
            var c = d[this.expando];
            return c || (c = {}, b1(d) && (d.nodeType ? d[this.expando] = c : Object.defineProperty(d, this.expando, {
                value: c,
                configurable: !0
            }))), c
        },
        set: function(g, f, j) {
            var i, h = this.cache(g);
            if ("string" == typeof f) {
                h[bw.camelCase(f)] = j
            } else {
                for (i in f) {
                    h[bw.camelCase(i)] = f[i]
                }
            }
            return h
        },
        get: function(d, c) {
            return void 0 === c ? this.cache(d) : d[this.expando] && d[this.expando][bw.camelCase(c)]
        },
        access: function(e, d, f) {
            return void 0 === d || d && "string" == typeof d && void 0 === f ? this.get(e, d) : (this.set(e, d, f), void 0 !== f ? f : d)
        },
        remove: function(f, e) {
            var h, g = f[this.expando];
            if (void 0 !== g) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(bw.camelCase) : (e = bw.camelCase(e), e = e in g ? [e] : e.match(ce) || []), h = e.length;
                    while (h--) {
                        delete g[e[h]]
                    }
                }(void 0 === e || bw.isEmptyObject(g)) && (f.nodeType ? f[this.expando] = void 0 : delete f[this.expando])
            }
        },
        hasData: function(d) {
            var c = d[this.expando];
            return void 0 !== c && !bw.isEmptyObject(c)
        }
    };
    var bZ = new b0,
        bY = new b0,
        bX = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bW = /[A-Z]/g;

    function cD(b) {
        return "true" === b || "false" !== b && ("null" === b ? null : b === +b + "" ? +b : bX.test(b) ? JSON.parse(b) : b)
    }

    function bR(g, f, j) {
        var i;
        if (void 0 === j && 1 === g.nodeType) {
            if (i = "data-" + f.replace(bW, "-$&").toLowerCase(), j = g.getAttribute(i), "string" == typeof j) {
                try {
                    j = cD(j)
                } catch (h) {}
                bY.set(g, f, j)
            } else {
                j = void 0
            }
        }
        return j
    }
    bw.extend({
        hasData: function(b) {
            return bY.hasData(b) || bZ.hasData(b)
        },
        data: function(e, d, f) {
            return bY.access(e, d, f)
        },
        removeData: function(d, c) {
            bY.remove(d, c)
        },
        _data: function(e, d, f) {
            return bZ.access(e, d, f)
        },
        _removeData: function(d, c) {
            bZ.remove(d, c)
        }
    }), bw.fn.extend({
        data: function(i, h) {
            var n, m, l, k = this[0],
                j = k && k.attributes;
            if (void 0 === i) {
                if (this.length && (l = bY.get(k), 1 === k.nodeType && !bZ.get(k, "hasDataAttrs"))) {
                    n = j.length;
                    while (n--) {
                        j[n] && (m = j[n].name, 0 === m.indexOf("data-") && (m = bw.camelCase(m.slice(5)), bR(k, m, l[m])))
                    }
                    bZ.set(k, "hasDataAttrs", !0)
                }
                return l
            }
            return "object" == typeof i ? this.each(function() {
                bY.set(this, i)
            }) : b2(this, function(a) {
                var d;
                if (k && void 0 === a) {
                    if (d = bY.get(k, i), void 0 !== d) {
                        return d
                    }
                    if (d = bR(k, i), void 0 !== d) {
                        return d
                    }
                } else {
                    this.each(function() {
                        bY.set(this, i, a)
                    })
                }
            }, null, h, arguments.length > 1, null, !0)
        },
        removeData: function(b) {
            return this.each(function() {
                bY.remove(this, b)
            })
        }
    }), bw.extend({
        queue: function(f, e, h) {
            var g;
            if (f) {
                return e = (e || "fx") + "queue", g = bZ.get(f, e), h && (!g || Array.isArray(h) ? g = bZ.access(f, e, bw.makeArray(h)) : g.push(h)), g || []
            }
        },
        dequeue: function(i, h) {
            h = h || "fx";
            var n = bw.queue(i, h),
                m = n.length,
                l = n.shift(),
                k = bw._queueHooks(i, h),
                j = function() {
                    bw.dequeue(i, h)
                };
            "inprogress" === l && (l = n.shift(), m--), l && ("fx" === h && n.unshift("inprogress"), delete k.stop, l.call(i, j, k)), !m && k && k.empty.fire()
        },
        _queueHooks: function(e, d) {
            var f = d + "queueHooks";
            return bZ.get(e, f) || bZ.access(e, f, {
                empty: bw.Callbacks("once memory").add(function() {
                    bZ.remove(e, [d + "queue", f])
                })
            })
        }
    }), bw.fn.extend({
        queue: function(e, d) {
            var f = 2;
            return "string" != typeof e && (d = e, e = "fx", f--), arguments.length < f ? bw.queue(this[0], e) : void 0 === d ? this : this.each(function() {
                var a = bw.queue(this, e, d);
                bw._queueHooks(this, e), "fx" === e && "inprogress" !== a[0] && bw.dequeue(this, e)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                bw.dequeue(this, b)
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(j, i) {
            var p, o = 1,
                n = bw.Deferred(),
                m = this,
                l = this.length,
                k = function() {
                    --o || n.resolveWith(m, [m])
                };
            "string" != typeof j && (i = j, j = void 0), j = j || "fx";
            while (l--) {
                p = bZ.get(m[l], j + "queueHooks"), p && p.empty && (o++, p.empty.add(k))
            }
            return k(), n.promise(i)
        }
    });
    var cC = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        cl = new RegExp("^(?:([+-])=|)(" + cC + ")([a-z%]*)$", "i"),
        bL = ["Top", "Right", "Bottom", "Left"],
        bi = function(d, c) {
            return d = c || d, "none" === d.style.display || "" === d.style.display && bw.contains(d.ownerDocument, d) && "none" === bw.css(d, "display")
        },
        a9 = function(i, h, n, m) {
            var l, k, j = {};
            for (k in h) {
                j[k] = i.style[k], i.style[k] = h[k]
            }
            l = n.apply(i, m || []);
            for (k in h) {
                i.style[k] = j[k]
            }
            return l
        };

    function a2(v, u, t, s) {
        var r, q = 1,
            p = 20,
            o = s ? function() {
                return s.cur()
            } : function() {
                return bw.css(v, u, "")
            },
            n = o(),
            m = t && t[3] || (bw.cssNumber[u] ? "" : "px"),
            l = (bw.cssNumber[u] || "px" !== m && +n) && cl.exec(bw.css(v, u));
        if (l && l[3] !== m) {
            m = m || l[3], t = t || [], l = +n || 1;
            do {
                q = q || ".5", l /= q, bw.style(v, u, l + m)
            } while (q !== (q = o() / n) && 1 !== q && --p)
        }
        return t && (l = +l || +n || 0, r = t[1] ? l + (t[1] + 1) * t[2] : +t[2], s && (s.unit = m, s.start = l, s.end = r)), r
    }
    var aT = {};

    function aL(g) {
        var f, j = g.ownerDocument,
            i = g.nodeName,
            h = aT[i];
        return h ? h : (f = j.body.appendChild(j.createElement(i)), h = bw.css(f, "display"), f.parentNode.removeChild(f), "none" === h && (h = "block"), aT[i] = h, h)
    }

    function aD(i, h) {
        for (var n, m, l = [], k = 0, j = i.length; k < j; k++) {
            m = i[k], m.style && (n = m.style.display, h ? ("none" === n && (l[k] = bZ.get(m, "display") || null, l[k] || (m.style.display = "")), "" === m.style.display && bi(m) && (l[k] = aL(m))) : "none" !== n && (l[k] = "none", bZ.set(m, "display", n)))
        }
        for (k = 0; k < j; k++) {
            null != l[k] && (i[k].style.display = l[k])
        }
        return i
    }
    bw.fn.extend({
        show: function() {
            return aD(this, !0)
        },
        hide: function() {
            return aD(this)
        },
        toggle: function(b) {
            return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function() {
                bi(this) ? bw(this).show() : bw(this).hide()
            })
        }
    });
    var av = /^(?:checkbox|radio)$/i,
        am = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ad = /^$|\/(?:java|ecma)script/i,
        cH = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    cH.optgroup = cH.option, cH.tbody = cH.tfoot = cH.colgroup = cH.caption = cH.thead, cH.th = cH.td;

    function cw(e, d) {
        var f;
        return f = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(d || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(d || "*") : [], void 0 === d || d && cq(e, d) ? bw.merge([e], f) : f
    }

    function bV(f, e) {
        for (var h = 0, g = f.length; h < g; h++) {
            bZ.set(f[h], "globalEval", !e || bZ.get(e[h], "globalEval"))
        }
    }
    var bn = /<|&#?\w+;/;

    function bf(E, D, C, B, A) {
        for (var z, x, w, v, u, t, s = D.createDocumentFragment(), r = [], q = 0, p = E.length; q < p; q++) {
            if (z = E[q], z || 0 === z) {
                if ("object" === bw.type(z)) {
                    bw.merge(r, z.nodeType ? [z] : z)
                } else {
                    if (bn.test(z)) {
                        x = x || s.appendChild(D.createElement("div")), w = (am.exec(z) || ["", ""])[1].toLowerCase(), v = cH[w] || cH._default, x.innerHTML = v[1] + bw.htmlPrefilter(z) + v[2], t = v[0];
                        while (t--) {
                            x = x.lastChild
                        }
                        bw.merge(r, x.childNodes), x = s.firstChild, x.textContent = ""
                    } else {
                        r.push(D.createTextNode(z))
                    }
                }
            }
        }
        s.textContent = "", q = 0;
        while (z = r[q++]) {
            if (B && bw.inArray(z, B) > -1) {
                A && A.push(z)
            } else {
                if (u = bw.contains(z.ownerDocument, z), x = cw(s.appendChild(z), "script"), u && bV(x), C) {
                    t = 0;
                    while (z = x[t++]) {
                        ad.test(z.type || "") && C.push(z)
                    }
                }
            }
        }
        return s
    }! function() {
        var e = bN.createDocumentFragment(),
            d = e.appendChild(bN.createElement("div")),
            f = bN.createElement("input");
        f.setAttribute("type", "radio"), f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), d.appendChild(f), bA.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, d.innerHTML = "<textarea>x</textarea>", bA.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue
    }();
    var a6 = bN.documentElement,
        aX = /^key/,
        aP = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        aH = /^([^.]*)(?:\.(.+)|)/;

    function az() {
        return !0
    }

    function aq() {
        return !1
    }

    function ah() {
        try {
            return bN.activeElement
        } catch (b) {}
    }

    function cL(j, i, p, o, n, m) {
        var l, k;
        if ("object" == typeof i) {
            "string" != typeof p && (o = o || p, p = void 0);
            for (k in i) {
                cL(j, k, p, o, i[k], m)
            }
            return j
        }
        if (null == o && null == n ? (n = p, o = p = void 0) : null == n && ("string" == typeof p ? (n = o, o = void 0) : (n = o, o = p, p = void 0)), n === !1) {
            n = aq
        } else {
            if (!n) {
                return j
            }
        }
        return 1 === m && (l = n, n = function(b) {
            return bw().off(b), l.apply(this, arguments)
        }, n.guid = l.guid || (l.guid = bw.guid++)), j.each(function() {
            bw.event.add(this, i, n, o, p)
        })
    }
    bw.event = {
        global: {},
        add: function(I, H, G, F, E) {
            var D, C, B, A, z, x, w, v, u, t, s, r = bZ.get(I);
            if (r) {
                G.handler && (D = G, G = D.handler, E = D.selector), E && bw.find.matchesSelector(a6, E), G.guid || (G.guid = bw.guid++), (A = r.events) || (A = r.events = {}), (C = r.handle) || (C = r.handle = function(a) {
                    return "undefined" != typeof bw && bw.event.triggered !== a.type ? bw.event.dispatch.apply(I, arguments) : void 0
                }), H = (H || "").match(ce) || [""], z = H.length;
                while (z--) {
                    B = aH.exec(H[z]) || [], u = s = B[1], t = (B[2] || "").split(".").sort(), u && (w = bw.event.special[u] || {}, u = (E ? w.delegateType : w.bindType) || u, w = bw.event.special[u] || {}, x = bw.extend({
                        type: u,
                        origType: s,
                        data: F,
                        handler: G,
                        guid: G.guid,
                        selector: E,
                        needsContext: E && bw.expr.match.needsContext.test(E),
                        namespace: t.join(".")
                    }, D), (v = A[u]) || (v = A[u] = [], v.delegateCount = 0, w.setup && w.setup.call(I, F, t, C) !== !1 || I.addEventListener && I.addEventListener(u, C)), w.add && (w.add.call(I, x), x.handler.guid || (x.handler.guid = G.guid)), E ? v.splice(v.delegateCount++, 0, x) : v.push(x), bw.event.global[u] = !0)
                }
            }
        },
        remove: function(I, H, G, F, E) {
            var D, C, B, A, z, x, w, v, u, t, s, r = bZ.hasData(I) && bZ.get(I);
            if (r && (A = r.events)) {
                H = (H || "").match(ce) || [""], z = H.length;
                while (z--) {
                    if (B = aH.exec(H[z]) || [], u = s = B[1], t = (B[2] || "").split(".").sort(), u) {
                        w = bw.event.special[u] || {}, u = (F ? w.delegateType : w.bindType) || u, v = A[u] || [], B = B[2] && new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)"), C = D = v.length;
                        while (D--) {
                            x = v[D], !E && s !== x.origType || G && G.guid !== x.guid || B && !B.test(x.namespace) || F && F !== x.selector && ("**" !== F || !x.selector) || (v.splice(D, 1), x.selector && v.delegateCount--, w.remove && w.remove.call(I, x))
                        }
                        C && !v.length && (w.teardown && w.teardown.call(I, t, r.handle) !== !1 || bw.removeEvent(I, u, r.handle), delete A[u])
                    } else {
                        for (u in A) {
                            bw.event.remove(I, u + H[z], G, F, !0)
                        }
                    }
                }
                bw.isEmptyObject(A) && bZ.remove(I, "handle events")
            }
        },
        dispatch: function(v) {
            var u = bw.event.fix(v),
                t, s, r, q, p, o, n = new Array(arguments.length),
                m = (bZ.get(this, "events") || {})[u.type] || [],
                l = bw.event.special[u.type] || {};
            for (n[0] = u, t = 1; t < arguments.length; t++) {
                n[t] = arguments[t]
            }
            if (u.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, u) !== !1) {
                o = bw.event.handlers.call(this, u, m), t = 0;
                while ((q = o[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = q.elem, s = 0;
                    while ((p = q.handlers[s++]) && !u.isImmediatePropagationStopped()) {
                        u.rnamespace && !u.rnamespace.test(p.namespace) || (u.handleObj = p, u.data = p.data, r = ((bw.event.special[p.origType] || {}).handle || p.handler).apply(q.elem, n), void 0 !== r && (u.result = r) === !1 && (u.preventDefault(), u.stopPropagation()))
                    }
                }
                return l.postDispatch && l.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(t, s) {
            var r, q, p, o, n, m = [],
                l = s.delegateCount,
                k = t.target;
            if (l && k.nodeType && !("click" === t.type && t.button >= 1)) {
                for (; k !== this; k = k.parentNode || this) {
                    if (1 === k.nodeType && ("click" !== t.type || k.disabled !== !0)) {
                        for (o = [], n = {}, r = 0; r < l; r++) {
                            q = s[r], p = q.selector + " ", void 0 === n[p] && (n[p] = q.needsContext ? bw(p, this).index(k) > -1 : bw.find(p, this, null, [k]).length), n[p] && o.push(q)
                        }
                        o.length && m.push({
                            elem: k,
                            handlers: o
                        })
                    }
                }
            }
            return k = this, l < s.length && m.push({
                elem: k,
                handlers: s.slice(l)
            }), m
        },
        addProp: function(d, c) {
            Object.defineProperty(bw.Event.prototype, d, {
                enumerable: !0,
                configurable: !0,
                get: bw.isFunction(c) ? function() {
                    if (this.originalEvent) {
                        return c(this.originalEvent)
                    }
                } : function() {
                    if (this.originalEvent) {
                        return this.originalEvent[d]
                    }
                },
                set: function(a) {
                    Object.defineProperty(this, d, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: a
                    })
                }
            })
        },
        fix: function(b) {
            return b[bw.expando] ? b : new bw.Event(b)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ah() && this.focus) {
                        return this.focus(), !1
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ah() && this.blur) {
                        return this.blur(), !1
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (av.test(this.type) && this.click && cq(this, "input")) {
                        return this.click(), !1
                    }
                },
                _default: function(b) {
                    return cq(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result)
                }
            }
        }
    }, bw.removeEvent = function(e, d, f) {
        e.removeEventListener && e.removeEventListener(d, f)
    }, bw.Event = function(d, c) {
        return this instanceof bw.Event ? (d && d.type ? (this.originalEvent = d, this.type = d.type, this.isDefaultPrevented = d.defaultPrevented || void 0 === d.defaultPrevented && d.returnValue === !1 ? az : aq, this.target = d.target && 3 === d.target.nodeType ? d.target.parentNode : d.target, this.currentTarget = d.currentTarget, this.relatedTarget = d.relatedTarget) : this.type = d, c && bw.extend(this, c), this.timeStamp = d && d.timeStamp || bw.now(), void(this[bw.expando] = !0)) : new bw.Event(d, c)
    }, bw.Event.prototype = {
        constructor: bw.Event,
        isDefaultPrevented: aq,
        isPropagationStopped: aq,
        isImmediatePropagationStopped: aq,
        isSimulated: !1,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = az, b && !this.isSimulated && b.preventDefault()
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = az, b && !this.isSimulated && b.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var b = this.originalEvent;
            this.isImmediatePropagationStopped = az, b && !this.isSimulated && b.stopImmediatePropagation(), this.stopPropagation()
        }
    }, bw.each({
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
        "char": !0,
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
        which: function(d) {
            var c = d.button;
            return null == d.which && aX.test(d.type) ? null != d.charCode ? d.charCode : d.keyCode : !d.which && void 0 !== c && aP.test(d.type) ? 1 & c ? 1 : 2 & c ? 3 : 4 & c ? 2 : 0 : d.which
        }
    }, bw.event.addProp), bw.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(d, c) {
        bw.event.special[d] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var j, i = this,
                    h = b.relatedTarget,
                    g = b.handleObj;
                return h && (h === i || bw.contains(i, h)) || (b.type = g.origType, j = g.handler.apply(this, arguments), b.type = c), j
            }
        }
    }), bw.fn.extend({
        on: function(f, e, h, g) {
            return cL(this, f, e, h, g)
        },
        one: function(f, e, h, g) {
            return cL(this, f, e, h, g, 1)
        },
        off: function(g, f, j) {
            var i, h;
            if (g && g.preventDefault && g.handleObj) {
                return i = g.handleObj, bw(g.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
            }
            if ("object" == typeof g) {
                for (h in g) {
                    this.off(h, f, g[h])
                }
                return this
            }
            return f !== !1 && "function" != typeof f || (j = f, f = void 0), j === !1 && (j = aq), this.each(function() {
                bw.event.remove(this, g, j, f)
            })
        }
    });
    var cA = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        a0 = /<script|<style|<link/i,
        aR = /checked\s*(?:[^=]|=\s*.checked.)/i,
        aJ = /^true\/(.*)/,
        aB = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function at(d, c) {
        return cq(d, "table") && cq(11 !== c.nodeType ? c : c.firstChild, "tr") ? bw(">tbody", d)[0] || d : d
    }

    function ak(b) {
        return b.type = (null !== b.getAttribute("type")) + "/" + b.type, b
    }

    function cN(d) {
        var c = aJ.exec(d.type);
        return c ? d.type = c[1] : d.removeAttribute("type"), d
    }

    function cF(t, s) {
        var r, q, p, o, n, m, l, k;
        if (1 === s.nodeType) {
            if (bZ.hasData(t) && (o = bZ.access(t), n = bZ.set(s, o), k = o.events)) {
                delete n.handle, n.events = {};
                for (p in k) {
                    for (r = 0, q = k[p].length; r < q; r++) {
                        bw.event.add(s, p, k[p][r])
                    }
                }
            }
            bY.hasData(t) && (m = bY.access(t), l = bw.extend({}, m), bY.set(s, l))
        }
    }

    function cu(e, d) {
        var f = d.nodeName.toLowerCase();
        "input" === f && av.test(e.type) ? d.checked = e.checked : "input" !== f && "textarea" !== f || (d.defaultValue = e.defaultValue)
    }

    function bT(D, C, B, A) {
        C = bI.apply([], C);
        var z, x, w, v, u, t, r = 0,
            p = D.length,
            o = p - 1,
            g = C[0],
            E = bw.isFunction(g);
        if (E || p > 1 && "string" == typeof g && !bA.checkClone && aR.test(g)) {
            return D.each(function(b) {
                var a = D.eq(b);
                E && (C[0] = g.call(this, b, a.html())), bT(a, C, B, A)
            })
        }
        if (p && (z = bf(C, D[0].ownerDocument, !1, D, A), x = z.firstChild, 1 === z.childNodes.length && (z = x), x || A)) {
            for (w = bw.map(cw(z, "script"), ak), v = w.length; r < p; r++) {
                u = z, r !== o && (u = bw.clone(u, !0, !0), v && bw.merge(w, cw(u, "script"))), B.call(D[r], u, r)
            }
            if (v) {
                for (t = w[w.length - 1].ownerDocument, bw.map(w, cN), r = 0; r < v; r++) {
                    u = w[r], ad.test(u.type || "") && !bZ.access(u, "globalEval") && bw.contains(t, u) && (u.src ? bw._evalUrl && bw._evalUrl(u.src) : bz(u.textContent.replace(aB, ""), t))
                }
            }
        }
        return D
    }

    function bk(h, g, l) {
        for (var k, j = g ? bw.filter(g, h) : h, i = 0; null != (k = j[i]); i++) {
            l || 1 !== k.nodeType || bw.cleanData(cw(k)), k.parentNode && (l && bw.contains(k.ownerDocument, k) && bV(cw(k, "script")), k.parentNode.removeChild(k))
        }
        return h
    }
    bw.extend({
        htmlPrefilter: function(b) {
            return b.replace(cA, "<$1></$2>")
        },
        clone: function(r, q, p) {
            var o, n, m, l, k = r.cloneNode(!0),
                j = bw.contains(r.ownerDocument, r);
            if (!(bA.noCloneChecked || 1 !== r.nodeType && 11 !== r.nodeType || bw.isXMLDoc(r))) {
                for (l = cw(k), m = cw(r), o = 0, n = m.length; o < n; o++) {
                    cu(m[o], l[o])
                }
            }
            if (q) {
                if (p) {
                    for (m = m || cw(r), l = l || cw(k), o = 0, n = m.length; o < n; o++) {
                        cF(m[o], l[o])
                    }
                } else {
                    cF(r, k)
                }
            }
            return l = cw(k, "script"), l.length > 0 && bV(l, !j && cw(r, "script")), k
        },
        cleanData: function(h) {
            for (var g, l, k, j = bw.event.special, i = 0; void 0 !== (l = h[i]); i++) {
                if (b1(l)) {
                    if (g = l[bZ.expando]) {
                        if (g.events) {
                            for (k in g.events) {
                                j[k] ? bw.event.remove(l, k) : bw.removeEvent(l, k, g.handle)
                            }
                        }
                        l[bZ.expando] = void 0
                    }
                    l[bY.expando] && (l[bY.expando] = void 0)
                }
            }
        }
    }), bw.fn.extend({
        detach: function(b) {
            return bk(this, b, !0)
        },
        remove: function(b) {
            return bk(this, b)
        },
        text: function(b) {
            return b2(this, function(c) {
                return void 0 === c ? bw.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = c)
                })
            }, null, b, arguments.length)
        },
        append: function() {
            return bT(this, arguments, function(d) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = at(this, d);
                    c.appendChild(d)
                }
            })
        },
        prepend: function() {
            return bT(this, arguments, function(d) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var c = at(this, d);
                    c.insertBefore(d, c.firstChild)
                }
            })
        },
        before: function() {
            return bT(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        },
        after: function() {
            return bT(this, arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        empty: function() {
            for (var d, c = 0; null != (d = this[c]); c++) {
                1 === d.nodeType && (bw.cleanData(cw(d, !1)), d.textContent = "")
            }
            return this
        },
        clone: function(d, c) {
            return d = null != d && d, c = null == c ? d : c, this.map(function() {
                return bw.clone(this, d, c)
            })
        },
        html: function(b) {
            return b2(this, function(g) {
                var f = this[0] || {},
                    j = 0,
                    i = this.length;
                if (void 0 === g && 1 === f.nodeType) {
                    return f.innerHTML
                }
                if ("string" == typeof g && !a0.test(g) && !cH[(am.exec(g) || ["", ""])[1].toLowerCase()]) {
                    g = bw.htmlPrefilter(g);
                    try {
                        for (; j < i; j++) {
                            f = this[j] || {}, 1 === f.nodeType && (bw.cleanData(cw(f, !1)), f.innerHTML = g)
                        }
                        f = 0
                    } catch (h) {}
                }
                f && this.empty().append(g)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b = [];
            return bT(this, arguments, function(a) {
                var d = this.parentNode;
                bw.inArray(this, b) < 0 && (bw.cleanData(cw(this)), d && d.replaceChild(a, this))
            }, b)
        }
    }), bw.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(d, c) {
        bw.fn[d] = function(b) {
            for (var l, k = [], j = bw(b), i = j.length - 1, h = 0; h <= i; h++) {
                l = h === i ? this : this.clone(!0), bw(j[h])[c](l), bH.apply(k, l.get())
            }
            return this.pushStack(k)
        }
    });
    var bd = /^margin/,
        a4 = new RegExp("^(" + cC + ")(?!px)[a-z%]+$", "i"),
        aV = function(a) {
            var d = a.ownerDocument.defaultView;
            return d && d.opener || (d = bQ), d.getComputedStyle(a)
        };
    ! function() {
        function a() {
            if (d) {
                d.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", d.innerHTML = "", a6.appendChild(j);
                var c = bQ.getComputedStyle(d);
                n = "1%" !== c.top, k = "2px" === c.marginLeft, m = "4px" === c.width, d.style.marginRight = "50%", l = "4px" === c.marginRight, a6.removeChild(j), d = null
            }
        }
        var n, m, l, k, j = bN.createElement("div"),
            d = bN.createElement("div");
        d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", bA.clearCloneStyle = "content-box" === d.style.backgroundClip, j.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.appendChild(d), bw.extend(bA, {
            pixelPosition: function() {
                return a(), n
            },
            boxSizingReliable: function() {
                return a(), m
            },
            pixelMarginRight: function() {
                return a(), l
            },
            reliableMarginLeft: function() {
                return a(), k
            }
        }))
    }();

    function aN(j, i, p) {
        var o, n, m, l, k = j.style;
        return p = p || aV(j), p && (l = p.getPropertyValue(i) || p[i], "" !== l || bw.contains(j.ownerDocument, j) || (l = bw.style(j, i)), !bA.pixelMarginRight() && a4.test(l) && bd.test(i) && (o = k.width, n = k.minWidth, m = k.maxWidth, k.minWidth = k.maxWidth = k.width = l, l = p.width, k.width = o, k.minWidth = n, k.maxWidth = m)), void 0 !== l ? l + "" : l
    }

    function aF(d, c) {
        return {
            get: function() {
                return d() ? void delete this.get : (this.get = c).apply(this, arguments)
            }
        }
    }
    var ax = /^(none|table(?!-c[ea]).+)/,
        ao = /^--/,
        af = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        cJ = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        cy = ["Webkit", "Moz", "ms"],
        b6 = bN.createElement("div").style;

    function by(e) {
        if (e in b6) {
            return e
        }
        var d = e[0].toUpperCase() + e.slice(1),
            f = cy.length;
        while (f--) {
            if (e = cy[f] + d, e in b6) {
                return e
            }
        }
    }

    function bg(d) {
        var c = bw.cssProps[d];
        return c || (c = bw.cssProps[d] = by(d) || d), c
    }

    function a7(f, e, h) {
        var g = cl.exec(e);
        return g ? Math.max(0, g[2] - (h || 0)) + (g[3] || "px") : e
    }

    function aY(i, h, n, m, l) {
        var k, j = 0;
        for (k = n === (m ? "border" : "content") ? 4 : "width" === h ? 1 : 0; k < 4; k += 2) {
            "margin" === n && (j += bw.css(i, n + bL[k], !0, l)), m ? ("content" === n && (j -= bw.css(i, "padding" + bL[k], !0, l)), "margin" !== n && (j -= bw.css(i, "border" + bL[k] + "Width", !0, l))) : (j += bw.css(i, "padding" + bL[k], !0, l), "padding" !== n && (j += bw.css(i, "border" + bL[k] + "Width", !0, l)))
        }
        return j
    }

    function cs(i, h, n) {
        var m, l = aV(i),
            k = aN(i, h, l),
            j = "border-box" === bw.css(i, "boxSizing", !1, l);
        return a4.test(k) ? k : (m = j && (bA.boxSizingReliable() || k === i.style[h]), k = parseFloat(k) || 0, k + aY(i, h, n || (j ? "border" : "content"), m, l) + "px")
    }
    bw.extend({
        cssHooks: {
            opacity: {
                get: function(e, d) {
                    if (d) {
                        var f = aN(e, "opacity");
                        return "" === f ? "1" : f
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
            "float": "cssFloat"
        },
        style: function(t, s, r, q) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var p, o, n, m = bw.camelCase(s),
                    l = ao.test(s),
                    k = t.style;
                return l || (s = bg(m)), n = bw.cssHooks[s] || bw.cssHooks[m], void 0 === r ? n && "get" in n && void 0 !== (p = n.get(t, !1, q)) ? p : k[s] : (o = typeof r, "string" === o && (p = cl.exec(r)) && p[1] && (r = a2(t, s, p), o = "number"), null != r && r === r && ("number" === o && (r += p && p[3] || (bw.cssNumber[m] ? "" : "px")), bA.clearCloneStyle || "" !== r || 0 !== s.indexOf("background") || (k[s] = "inherit"), n && "set" in n && void 0 === (r = n.set(t, r, q)) || (l ? k.setProperty(s, r) : k[s] = r)), void 0)
            }
        },
        css: function(r, q, p, o) {
            var n, m, l, k = bw.camelCase(q),
                j = ao.test(q);
            return j || (q = bg(k)), l = bw.cssHooks[q] || bw.cssHooks[k], l && "get" in l && (n = l.get(r, !0, p)), void 0 === n && (n = aN(r, q, o)), "normal" === n && q in cJ && (n = cJ[q]), "" === p || p ? (m = parseFloat(n), p === !0 || isFinite(m) ? m || 0 : n) : n
        }
    }), bw.each(["height", "width"], function(d, c) {
        bw.cssHooks[c] = {
            get: function(b, f, e) {
                if (f) {
                    return !ax.test(bw.css(b, "display")) || b.getClientRects().length && b.getBoundingClientRect().width ? cs(b, c, e) : a9(b, af, function() {
                        return cs(b, c, e)
                    })
                }
            },
            set: function(b, l, k) {
                var j, i = k && aV(b),
                    h = k && aY(b, c, k, "border-box" === bw.css(b, "boxSizing", !1, i), i);
                return h && (j = cl.exec(l)) && "px" !== (j[3] || "px") && (b.style[c] = l, l = bw.css(b, c)), a7(b, l, h)
            }
        }
    }), bw.cssHooks.marginLeft = aF(bA.reliableMarginLeft, function(d, c) {
        if (c) {
            return (parseFloat(aN(d, "marginLeft")) || d.getBoundingClientRect().left - a9(d, {
                marginLeft: 0
            }, function() {
                return d.getBoundingClientRect().left
            })) + "px"
        }
    }), bw.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(d, c) {
        bw.cssHooks[d + c] = {
            expand: function(h) {
                for (var g = 0, b = {}, a = "string" == typeof h ? h.split(" ") : [h]; g < 4; g++) {
                    b[d + bL[g] + c] = a[g] || a[g - 2] || a[0]
                }
                return b
            }
        }, bd.test(d) || (bw.cssHooks[d + c].set = a7)
    }), bw.fn.extend({
        css: function(d, c) {
            return b2(this, function(i, h, n) {
                var m, l, k = {},
                    j = 0;
                if (Array.isArray(h)) {
                    for (m = aV(i), l = h.length; j < l; j++) {
                        k[h[j]] = bw.css(i, h[j], !1, m)
                    }
                    return k
                }
                return void 0 !== n ? bw.style(i, h, n) : bw.css(i, h)
            }, d, c, arguments.length > 1)
        }
    });

    function ai(g, f, j, i, h) {
        return new ai.prototype.init(g, f, j, i, h)
    }
    bw.Tween = ai, ai.prototype = {
        constructor: ai,
        init: function(h, g, l, k, j, i) {
            this.elem = h, this.prop = l, this.easing = j || bw.easing._default, this.options = g, this.start = this.now = this.cur(), this.end = k, this.unit = i || (bw.cssNumber[l] ? "" : "px")
        },
        cur: function() {
            var b = ai.propHooks[this.prop];
            return b && b.get ? b.get(this) : ai.propHooks._default.get(this)
        },
        run: function(e) {
            var d, f = ai.propHooks[this.prop];
            return this.options.duration ? this.pos = d = bw.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = d = e, this.now = (this.end - this.start) * d + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), f && f.set ? f.set(this) : ai.propHooks._default.set(this), this
        }
    }, ai.prototype.init.prototype = ai.prototype, ai.propHooks = {
        _default: {
            get: function(d) {
                var c;
                return 1 !== d.elem.nodeType || null != d.elem[d.prop] && null == d.elem.style[d.prop] ? d.elem[d.prop] : (c = bw.css(d.elem, d.prop, ""), c && "auto" !== c ? c : 0)
            },
            set: function(b) {
                bw.fx.step[b.prop] ? bw.fx.step[b.prop](b) : 1 !== b.elem.nodeType || null == b.elem.style[bw.cssProps[b.prop]] && !bw.cssHooks[b.prop] ? b.elem[b.prop] = b.now : bw.style(b.elem, b.prop, b.now + b.unit)
            }
        }
    }, ai.propHooks.scrollTop = ai.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    }, bw.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        },
        _default: "swing"
    }, bw.fx = ai.prototype.init, bw.fx.step = {};
    var cB, cj, bJ = /^(?:toggle|show|hide)$/,
        bh = /queueHooks$/;

    function a8() {
        cj && (bN.hidden === !1 && bQ.requestAnimationFrame ? bQ.requestAnimationFrame(a8) : bQ.setTimeout(a8, bw.fx.interval), bw.fx.tick())
    }

    function a1() {
        return bQ.setTimeout(function() {
            cB = void 0
        }), cB = bw.now()
    }

    function aS(g, f) {
        var j, i = 0,
            h = {
                height: g
            };
        for (f = f ? 1 : 0; i < 4; i += 2 - f) {
            j = bL[i], h["margin" + j] = h["padding" + j] = g
        }
        return f && (h.opacity = h.width = g), h
    }

    function aK(i, h, n) {
        for (var m, l = (al.tweeners[h] || []).concat(al.tweeners["*"]), k = 0, j = l.length; k < j; k++) {
            if (m = l[k].call(n, h, i)) {
                return m
            }
        }
    }

    function aC(I, H, G) {
        var F, E, D, C, B, A, z, x, w = "width" in H || "height" in H,
            v = this,
            u = {},
            t = I.style,
            s = I.nodeType && bi(I),
            r = bZ.get(I, "fxshow");
        G.queue || (C = bw._queueHooks(I, "fx"), null == C.unqueued && (C.unqueued = 0, B = C.empty.fire, C.empty.fire = function() {
            C.unqueued || B()
        }), C.unqueued++, v.always(function() {
            v.always(function() {
                C.unqueued--, bw.queue(I, "fx").length || C.empty.fire()
            })
        }));
        for (F in H) {
            if (E = H[F], bJ.test(E)) {
                if (delete H[F], D = D || "toggle" === E, E === (s ? "hide" : "show")) {
                    if ("show" !== E || !r || void 0 === r[F]) {
                        continue
                    }
                    s = !0
                }
                u[F] = r && r[F] || bw.style(I, F)
            }
        }
        if (A = !bw.isEmptyObject(H), A || !bw.isEmptyObject(u)) {
            w && 1 === I.nodeType && (G.overflow = [t.overflow, t.overflowX, t.overflowY], z = r && r.display, null == z && (z = bZ.get(I, "display")), x = bw.css(I, "display"), "none" === x && (z ? x = z : (aD([I], !0), z = I.style.display || z, x = bw.css(I, "display"), aD([I]))), ("inline" === x || "inline-block" === x && null != z) && "none" === bw.css(I, "float") && (A || (v.done(function() {
                t.display = z
            }), null == z && (x = t.display, z = "none" === x ? "" : x)), t.display = "inline-block")), G.overflow && (t.overflow = "hidden", v.always(function() {
                t.overflow = G.overflow[0], t.overflowX = G.overflow[1], t.overflowY = G.overflow[2]
            })), A = !1;
            for (F in u) {
                A || (r ? "hidden" in r && (s = r.hidden) : r = bZ.access(I, "fxshow", {
                    display: z
                }), D && (r.hidden = !s), s && aD([I], !0), v.done(function() {
                    s || aD([I]), bZ.remove(I, "fxshow");
                    for (F in u) {
                        bw.style(I, F, u[F])
                    }
                })), A = aK(s ? r[F] : 0, F, v), F in r || (r[F] = A.start, s && (A.end = A.start, A.start = 0))
            }
        }
    }

    function au(i, h) {
        var n, m, l, k, j;
        for (n in i) {
            if (m = bw.camelCase(n), l = h[m], k = i[n], Array.isArray(k) && (l = k[1], k = i[n] = k[0]), n !== m && (i[m] = k, delete i[n]), j = bw.cssHooks[m], j && "expand" in j) {
                k = j.expand(k), delete i[m];
                for (n in k) {
                    n in i || (i[n] = k[n], h[n] = l)
                }
            } else {
                h[m] = l
            }
        }
    }

    function al(v, u, t) {
        var s, r, q = 0,
            p = al.prefilters.length,
            o = bw.Deferred().always(function() {
                delete n.elem
            }),
            n = function() {
                if (r) {
                    return !1
                }
                for (var a = cB || a1(), w = Math.max(0, m.startTime + m.duration - a), k = w / m.duration || 0, j = 1 - k, h = 0, e = m.tweens.length; h < e; h++) {
                    m.tweens[h].run(j)
                }
                return o.notifyWith(v, [m, j, w]), j < 1 && e ? w : (e || o.notifyWith(v, [m, 1, 0]), o.resolveWith(v, [m]), !1)
            },
            m = o.promise({
                elem: v,
                props: bw.extend({}, u),
                opts: bw.extend(!0, {
                    specialEasing: {},
                    easing: bw.easing._default
                }, t),
                originalProperties: u,
                originalOptions: t,
                startTime: cB || a1(),
                duration: t.duration,
                tweens: [],
                createTween: function(a, f) {
                    var e = bw.Tween(v, m.opts, a, f, m.opts.specialEasing[a] || m.opts.easing);
                    return m.tweens.push(e), e
                },
                stop: function(a) {
                    var f = 0,
                        e = a ? m.tweens.length : 0;
                    if (r) {
                        return this
                    }
                    for (r = !0; f < e; f++) {
                        m.tweens[f].run(1)
                    }
                    return a ? (o.notifyWith(v, [m, 1, 0]), o.resolveWith(v, [m, a])) : o.rejectWith(v, [m, a]), this
                }
            }),
            l = m.props;
        for (au(l, m.opts.specialEasing); q < p; q++) {
            if (s = al.prefilters[q].call(m, v, l, m.opts)) {
                return bw.isFunction(s.stop) && (bw._queueHooks(m.elem, m.opts.queue).stop = bw.proxy(s.stop, s)), s
            }
        }
        return bw.map(l, aK, m), bw.isFunction(m.opts.start) && m.opts.start.call(v, m), m.progress(m.opts.progress).done(m.opts.done, m.opts.complete).fail(m.opts.fail).always(m.opts.always), bw.fx.timer(bw.extend(n, {
            elem: v,
            anim: m,
            queue: m.opts.queue
        })), m
    }
    bw.Animation = bw.extend(al, {
            tweeners: {
                "*": [function(e, d) {
                    var f = this.createTween(e, d);
                    return a2(f.elem, e, cl.exec(d), f), f
                }]
            },
            tweener: function(g, f) {
                bw.isFunction(g) ? (f = g, g = ["*"]) : g = g.match(ce);
                for (var j, i = 0, h = g.length; i < h; i++) {
                    j = g[i], al.tweeners[j] = al.tweeners[j] || [], al.tweeners[j].unshift(f)
                }
            },
            prefilters: [aC],
            prefilter: function(d, c) {
                c ? al.prefilters.unshift(d) : al.prefilters.push(d)
            }
        }), bw.speed = function(f, e, h) {
            var g = f && "object" == typeof f ? bw.extend({}, f) : {
                complete: h || !h && e || bw.isFunction(f) && f,
                duration: f,
                easing: h && e || e && !bw.isFunction(e) && e
            };
            return bw.fx.off ? g.duration = 0 : "number" != typeof g.duration && (g.duration in bw.fx.speeds ? g.duration = bw.fx.speeds[g.duration] : g.duration = bw.fx.speeds._default), null != g.queue && g.queue !== !0 || (g.queue = "fx"), g.old = g.complete, g.complete = function() {
                bw.isFunction(g.old) && g.old.call(this), g.queue && bw.dequeue(this, g.queue)
            }, g
        }, bw.fn.extend({
            fadeTo: function(f, e, h, g) {
                return this.filter(bi).css("opacity", 0).show().end().animate({
                    opacity: e
                }, f, h, g)
            },
            animate: function(i, h, n, m) {
                var l = bw.isEmptyObject(i),
                    k = bw.speed(h, n, m),
                    j = function() {
                        var a = al(this, bw.extend({}, i), k);
                        (l || bZ.get(this, "finish")) && a.stop(!0)
                    };
                return j.finish = j, l || k.queue === !1 ? this.each(j) : this.queue(k.queue, j)
            },
            stop: function(f, e, h) {
                var g = function(d) {
                    var c = d.stop;
                    delete d.stop, c(h)
                };
                return "string" != typeof f && (h = e, e = f, f = void 0), e && f !== !1 && this.queue(f || "fx", []), this.each(function() {
                    var a = !0,
                        i = null != f && f + "queueHooks",
                        d = bw.timers,
                        c = bZ.get(this);
                    if (i) {
                        c[i] && c[i].stop && g(c[i])
                    } else {
                        for (i in c) {
                            c[i] && c[i].stop && bh.test(i) && g(c[i])
                        }
                    }
                    for (i = d.length; i--;) {
                        d[i].elem !== this || null != f && d[i].queue !== f || (d[i].anim.stop(h), a = !1, d.splice(i, 1))
                    }!a && h || bw.dequeue(this, f)
                })
            },
            finish: function(b) {
                return b !== !1 && (b = b || "fx"), this.each(function() {
                    var a, l = bZ.get(this),
                        k = l[b + "queue"],
                        j = l[b + "queueHooks"],
                        i = bw.timers,
                        h = k ? k.length : 0;
                    for (l.finish = !0, bw.queue(this, b, []), j && j.stop && j.stop.call(this, !0), a = i.length; a--;) {
                        i[a].elem === this && i[a].queue === b && (i[a].anim.stop(!0), i.splice(a, 1))
                    }
                    for (a = 0; a < h; a++) {
                        k[a] && k[a].finish && k[a].finish.call(this)
                    }
                    delete l.finish
                })
            }
        }), bw.each(["toggle", "show", "hide"], function(e, d) {
            var f = bw.fn[d];
            bw.fn[d] = function(b, g, c) {
                return null == b || "boolean" == typeof b ? f.apply(this, arguments) : this.animate(aS(d, !0), b, g, c)
            }
        }), bw.each({
            slideDown: aS("show"),
            slideUp: aS("hide"),
            slideToggle: aS("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(d, c) {
            bw.fn[d] = function(b, f, e) {
                return this.animate(c, b, f, e)
            }
        }), bw.timers = [], bw.fx.tick = function() {
            var e, d = 0,
                f = bw.timers;
            for (cB = bw.now(); d < f.length; d++) {
                e = f[d], e() || f[d] !== e || f.splice(d--, 1)
            }
            f.length || bw.fx.stop(), cB = void 0
        }, bw.fx.timer = function(b) {
            bw.timers.push(b), bw.fx.start()
        }, bw.fx.interval = 13, bw.fx.start = function() {
            cj || (cj = !0, a8())
        }, bw.fx.stop = function() {
            cj = null
        }, bw.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, bw.fn.delay = function(a, d) {
            return a = bw.fx ? bw.fx.speeds[a] || a : a, d = d || "fx", this.queue(d, function(g, f) {
                var b = bQ.setTimeout(g, a);
                f.stop = function() {
                    bQ.clearTimeout(b)
                }
            })
        },
        function() {
            var e = bN.createElement("input"),
                d = bN.createElement("select"),
                f = d.appendChild(bN.createElement("option"));
            e.type = "checkbox", bA.checkOn = "" !== e.value, bA.optSelected = f.selected, e = bN.createElement("input"), e.value = "t", e.type = "radio", bA.radioValue = "t" === e.value
        }();
    var ac, cG = bw.expr.attrHandle;
    bw.fn.extend({
        attr: function(d, c) {
            return b2(this, bw.attr, d, c, arguments.length > 1)
        },
        removeAttr: function(b) {
            return this.each(function() {
                bw.removeAttr(this, b)
            })
        }
    }), bw.extend({
        attr: function(h, g, l) {
            var k, j, i = h.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) {
                return "undefined" == typeof h.getAttribute ? bw.prop(h, g, l) : (1 === i && bw.isXMLDoc(h) || (j = bw.attrHooks[g.toLowerCase()] || (bw.expr.match.bool.test(g) ? ac : void 0)), void 0 !== l ? null === l ? void bw.removeAttr(h, g) : j && "set" in j && void 0 !== (k = j.set(h, l, g)) ? k : (h.setAttribute(g, l + ""), l) : j && "get" in j && null !== (k = j.get(h, g)) ? k : (k = bw.find.attr(h, g), null == k ? void 0 : k))
            }
        },
        attrHooks: {
            type: {
                set: function(e, d) {
                    if (!bA.radioValue && "radio" === d && cq(e, "input")) {
                        var f = e.value;
                        return e.setAttribute("type", d), f && (e.value = f), d
                    }
                }
            }
        },
        removeAttr: function(g, f) {
            var j, i = 0,
                h = f && f.match(ce);
            if (h && 1 === g.nodeType) {
                while (j = h[i++]) {
                    g.removeAttribute(j)
                }
            }
        }
    }), ac = {
        set: function(e, d, f) {
            return d === !1 ? bw.removeAttr(e, f) : e.setAttribute(f, f), f
        }
    }, bw.each(bw.expr.match.bool.source.match(/\w+/g), function(e, d) {
        var f = cG[d] || bw.find.attr;
        cG[d] = function(h, c, l) {
            var k, j, i = c.toLowerCase();
            return l || (j = cG[i], cG[i] = k, k = null != f(h, c, l) ? i : null, cG[i] = j), k
        }
    });
    var cv = /^(?:input|select|textarea|button)$/i,
        bU = /^(?:a|area)$/i;
    bw.fn.extend({
        prop: function(d, c) {
            return b2(this, bw.prop, d, c, arguments.length > 1)
        },
        removeProp: function(b) {
            return this.each(function() {
                delete this[bw.propFix[b] || b]
            })
        }
    }), bw.extend({
        prop: function(h, g, l) {
            var k, j, i = h.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) {
                return 1 === i && bw.isXMLDoc(h) || (g = bw.propFix[g] || g, j = bw.propHooks[g]), void 0 !== l ? j && "set" in j && void 0 !== (k = j.set(h, l, g)) ? k : h[g] = l : j && "get" in j && null !== (k = j.get(h, g)) ? k : h[g]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(d) {
                    var c = bw.find.attr(d, "tabindex");
                    return c ? parseInt(c, 10) : cv.test(d.nodeName) || bU.test(d.nodeName) && d.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), bA.optSelected || (bw.propHooks.selected = {
        get: function(d) {
            var c = d.parentNode;
            return c && c.parentNode && c.parentNode.selectedIndex, null
        },
        set: function(d) {
            var c = d.parentNode;
            c && (c.selectedIndex, c.parentNode && c.parentNode.selectedIndex)
        }
    }), bw.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        bw.propFix[this.toLowerCase()] = this
    });

    function bl(d) {
        var c = d.match(ce) || [];
        return c.join(" ")
    }

    function be(b) {
        return b.getAttribute && b.getAttribute("class") || ""
    }
    bw.fn.extend({
        addClass: function(r) {
            var q, p, o, n, m, l, k, j = 0;
            if (bw.isFunction(r)) {
                return this.each(function(a) {
                    bw(this).addClass(r.call(this, a, be(this)))
                })
            }
            if ("string" == typeof r && r) {
                q = r.match(ce) || [];
                while (p = this[j++]) {
                    if (n = be(p), o = 1 === p.nodeType && " " + bl(n) + " ") {
                        l = 0;
                        while (m = q[l++]) {
                            o.indexOf(" " + m + " ") < 0 && (o += m + " ")
                        }
                        k = bl(o), n !== k && p.setAttribute("class", k)
                    }
                }
            }
            return this
        },
        removeClass: function(r) {
            var q, p, o, n, m, l, k, j = 0;
            if (bw.isFunction(r)) {
                return this.each(function(a) {
                    bw(this).removeClass(r.call(this, a, be(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if ("string" == typeof r && r) {
                q = r.match(ce) || [];
                while (p = this[j++]) {
                    if (n = be(p), o = 1 === p.nodeType && " " + bl(n) + " ") {
                        l = 0;
                        while (m = q[l++]) {
                            while (o.indexOf(" " + m + " ") > -1) {
                                o = o.replace(" " + m + " ", " ")
                            }
                        }
                        k = bl(o), n !== k && p.setAttribute("class", k)
                    }
                }
            }
            return this
        },
        toggleClass: function(e, d) {
            var f = typeof e;
            return "boolean" == typeof d && "string" === f ? d ? this.addClass(e) : this.removeClass(e) : bw.isFunction(e) ? this.each(function(a) {
                bw(this).toggleClass(e.call(this, a, be(this), d), d)
            }) : this.each(function() {
                var a, h, g, c;
                if ("string" === f) {
                    h = 0, g = bw(this), c = e.match(ce) || [];
                    while (a = c[h++]) {
                        g.hasClass(a) ? g.removeClass(a) : g.addClass(a)
                    }
                } else {
                    void 0 !== e && "boolean" !== f || (a = be(this), a && bZ.set(this, "__className__", a), this.setAttribute && this.setAttribute("class", a || e === !1 ? "" : bZ.get(this, "__className__") || ""))
                }
            })
        },
        hasClass: function(f) {
            var e, h, g = 0;
            e = " " + f + " ";
            while (h = this[g++]) {
                if (1 === h.nodeType && (" " + bl(be(h)) + " ").indexOf(e) > -1) {
                    return !0
                }
            }
            return !1
        }
    });
    var a5 = /\r/g;
    bw.fn.extend({
        val: function(g) {
            var f, j, i, h = this[0];
            if (arguments.length) {
                return i = bw.isFunction(g), this.each(function(b) {
                    var a;
                    1 === this.nodeType && (a = i ? g.call(this, b, bw(this).val()) : g, null == a ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = bw.map(a, function(c) {
                        return null == c ? "" : c + ""
                    })), f = bw.valHooks[this.type] || bw.valHooks[this.nodeName.toLowerCase()], f && "set" in f && void 0 !== f.set(this, a, "value") || (this.value = a))
                })
            }
            if (h) {
                return f = bw.valHooks[h.type] || bw.valHooks[h.nodeName.toLowerCase()], f && "get" in f && void 0 !== (j = f.get(h, "value")) ? j : (j = h.value, "string" == typeof j ? j.replace(a5, "") : null == j ? "" : j)
            }
        }
    }), bw.extend({
        valHooks: {
            option: {
                get: function(d) {
                    var c = bw.find.attr(d, "value");
                    return null != c ? c : bl(bw.text(d))
                }
            },
            select: {
                get: function(r) {
                    var q, p, o, n = r.options,
                        m = r.selectedIndex,
                        l = "select-one" === r.type,
                        k = l ? null : [],
                        j = l ? m + 1 : n.length;
                    for (o = m < 0 ? j : l ? m : 0; o < j; o++) {
                        if (p = n[o], (p.selected || o === m) && !p.disabled && (!p.parentNode.disabled || !cq(p.parentNode, "optgroup"))) {
                            if (q = bw(p).val(), l) {
                                return q
                            }
                            k.push(q)
                        }
                    }
                    return k
                },
                set: function(i, h) {
                    var n, m, l = i.options,
                        k = bw.makeArray(h),
                        j = l.length;
                    while (j--) {
                        m = l[j], (m.selected = bw.inArray(bw.valHooks.option.get(m), k) > -1) && (n = !0)
                    }
                    return n || (i.selectedIndex = -1), k
                }
            }
        }
    }), bw.each(["radio", "checkbox"], function() {
        bw.valHooks[this] = {
            set: function(d, c) {
                if (Array.isArray(c)) {
                    return d.checked = bw.inArray(bw(d).val(), c) > -1
                }
            }
        }, bA.checkOn || (bw.valHooks[this].get = function(b) {
            return null === b.getAttribute("value") ? "on" : b.value
        })
    });
    var aW = /^(?:focusinfocus|focusoutblur)$/;
    bw.extend(bw.event, {
        trigger: function(C, B, A, z) {
            var x, w, v, u, t, s, r, l = [A || bN],
                d = bD.call(C, "type") ? C.type : C,
                a = bD.call(C, "namespace") ? C.namespace.split(".") : [];
            if (w = v = A = A || bN, 3 !== A.nodeType && 8 !== A.nodeType && !aW.test(d + bw.event.triggered) && (d.indexOf(".") > -1 && (a = d.split("."), d = a.shift(), a.sort()), t = d.indexOf(":") < 0 && "on" + d, C = C[bw.expando] ? C : new bw.Event(d, "object" == typeof C && C), C.isTrigger = z ? 2 : 3, C.namespace = a.join("."), C.rnamespace = C.namespace ? new RegExp("(^|\\.)" + a.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, C.result = void 0, C.target || (C.target = A), B = null == B ? [C] : bw.makeArray(B, [C]), r = bw.event.special[d] || {}, z || !r.trigger || r.trigger.apply(A, B) !== !1)) {
                if (!z && !r.noBubble && !bw.isWindow(A)) {
                    for (u = r.delegateType || d, aW.test(u + d) || (w = w.parentNode); w; w = w.parentNode) {
                        l.push(w), v = w
                    }
                    v === (A.ownerDocument || bN) && l.push(v.defaultView || v.parentWindow || bQ)
                }
                x = 0;
                while ((w = l[x++]) && !C.isPropagationStopped()) {
                    C.type = x > 1 ? u : r.bindType || d, s = (bZ.get(w, "events") || {})[C.type] && bZ.get(w, "handle"), s && s.apply(w, B), s = t && w[t], s && s.apply && b1(w) && (C.result = s.apply(w, B), C.result === !1 && C.preventDefault())
                }
                return C.type = d, z || C.isDefaultPrevented() || r._default && r._default.apply(l.pop(), B) !== !1 || !b1(A) || t && bw.isFunction(A[d]) && !bw.isWindow(A) && (v = A[t], v && (A[t] = null), bw.event.triggered = d, A[d](), bw.event.triggered = void 0, v && (A[t] = v)), C.result
            }
        },
        simulate: function(f, e, h) {
            var g = bw.extend(new bw.Event, h, {
                type: f,
                isSimulated: !0
            });
            bw.event.trigger(g, null, e)
        }
    }), bw.fn.extend({
        trigger: function(d, c) {
            return this.each(function() {
                bw.event.trigger(d, c, this)
            })
        },
        triggerHandler: function(e, d) {
            var f = this[0];
            if (f) {
                return bw.event.trigger(e, d, f, !0)
            }
        }
    }), bw.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(d, c) {
        bw.fn[c] = function(b, e) {
            return arguments.length > 0 ? this.on(c, null, b, e) : this.trigger(c)
        }
    }), bw.fn.extend({
        hover: function(d, c) {
            return this.mouseenter(d).mouseleave(c || d)
        }
    }), bA.focusin = "onfocusin" in bQ, bA.focusin || bw.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, d) {
        var f = function(b) {
            bw.event.simulate(d, b.target, bw.event.fix(b))
        };
        bw.event.special[d] = {
            setup: function() {
                var b = this.ownerDocument || this,
                    a = bZ.access(b, d);
                a || b.addEventListener(e, f, !0), bZ.access(b, d, (a || 0) + 1)
            },
            teardown: function() {
                var b = this.ownerDocument || this,
                    a = bZ.access(b, d) - 1;
                a ? bZ.access(b, d, a) : (b.removeEventListener(e, f, !0), bZ.remove(b, d))
            }
        }
    });
    var aO = bQ.location,
        aG = bw.now(),
        ay = /\?/;
    bw.parseXML = function(a) {
        var f;
        if (!a || "string" != typeof a) {
            return null
        }
        try {
            f = (new bQ.DOMParser).parseFromString(a, "text/xml")
        } catch (e) {
            f = void 0
        }
        return f && !f.getElementsByTagName("parsererror").length || bw.error("Invalid XML: " + a), f
    };
    var ap = /\[\]$/,
        ag = /\r?\n/g,
        cK = /^(?:submit|button|image|reset|file)$/i,
        cz = /^(?:input|select|textarea|keygen)/i;

    function aZ(g, f, j, i) {
        var h;
        if (Array.isArray(f)) {
            bw.each(f, function(a, c) {
                j || ap.test(g) ? i(g, c) : aZ(g + "[" + ("object" == typeof c && null != c ? a : "") + "]", c, j, i)
            })
        } else {
            if (j || "object" !== bw.type(f)) {
                i(g, f)
            } else {
                for (h in f) {
                    aZ(g + "[" + h + "]", f[h], j, i)
                }
            }
        }
    }
    bw.param = function(g, f) {
        var j, i = [],
            h = function(e, d) {
                var k = bw.isFunction(d) ? d() : d;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == k ? "" : k)
            };
        if (Array.isArray(g) || g.jquery && !bw.isPlainObject(g)) {
            bw.each(g, function() {
                h(this.name, this.value)
            })
        } else {
            for (j in g) {
                aZ(j, g[j], f, h)
            }
        }
        return i.join("&")
    }, bw.fn.extend({
        serialize: function() {
            return bw.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = bw.prop(this, "elements");
                return b ? bw.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name && !bw(this).is(":disabled") && cz.test(this.nodeName) && !cK.test(b) && (this.checked || !av.test(b))
            }).map(function(e, d) {
                var f = bw(this).val();
                return null == f ? null : Array.isArray(f) ? bw.map(f, function(b) {
                    return {
                        name: d.name,
                        value: b.replace(ag, "\r\n")
                    }
                }) : {
                    name: d.name,
                    value: f.replace(ag, "\r\n")
                }
            }).get()
        }
    });
    var aQ = /%20/g,
        aI = /#.*$/,
        aA = /([?&])_=[^&]*/,
        ar = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        aj = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        cM = /^(?:GET|HEAD)$/,
        cE = /^\/\//,
        ct = {},
        bS = {},
        bj = "*/".concat("*"),
        bc = bN.createElement("a");
    bc.href = aO.href;

    function a3(b) {
        return function(a, j) {
            "string" != typeof a && (j = a, a = "*");
            var i, h = 0,
                g = a.toLowerCase().match(ce) || [];
            if (bw.isFunction(j)) {
                while (i = g[h++]) {
                    "+" === i[0] ? (i = i.slice(1) || "*", (b[i] = b[i] || []).unshift(j)) : (b[i] = b[i] || []).push(j)
                }
            }
        }
    }

    function aU(i, h, n, m) {
        var l = {},
            k = i === bS;

        function j(b) {
            var a;
            return l[b] = !0, bw.each(i[b] || [], function(c, e) {
                var d = e(h, n, m);
                return "string" != typeof d || k || l[d] ? k ? !(a = d) : void 0 : (h.dataTypes.unshift(d), j(d), !1)
            }), a
        }
        return j(h.dataTypes[0]) || !l["*"] && j("*")
    }

    function aM(g, f) {
        var j, i, h = bw.ajaxSettings.flatOptions || {};
        for (j in f) {
            void 0 !== f[j] && ((h[j] ? g : i || (i = {}))[j] = f[j])
        }
        return i && bw.extend(!0, g, i), g
    }

    function aE(r, q, p) {
        var o, n, m, l, k = r.contents,
            j = r.dataTypes;
        while ("*" === j[0]) {
            j.shift(), void 0 === o && (o = r.mimeType || q.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (n in k) {
                if (k[n] && k[n].test(o)) {
                    j.unshift(n);
                    break
                }
            }
        }
        if (j[0] in p) {
            m = j[0]
        } else {
            for (n in p) {
                if (!j[0] || r.converters[n + " " + j[0]]) {
                    m = n;
                    break
                }
                l || (l = n)
            }
            m = m || l
        }
        if (m) {
            return m !== j[0] && j.unshift(m), p[m]
        }
    }

    function aw(x, w, v, u) {
        var t, s, r, q, p, o = {},
            n = x.dataTypes.slice();
        if (n[1]) {
            for (r in x.converters) {
                o[r.toLowerCase()] = x.converters[r]
            }
        }
        s = n.shift();
        while (s) {
            if (x.responseFields[s] && (v[x.responseFields[s]] = w), !p && u && x.dataFilter && (w = x.dataFilter(w, x.dataType)), p = s, s = n.shift()) {
                if ("*" === s) {
                    s = p
                } else {
                    if ("*" !== p && p !== s) {
                        if (r = o[p + " " + s] || o["* " + s], !r) {
                            for (t in o) {
                                if (q = t.split(" "), q[1] === s && (r = o[p + " " + q[0]] || o["* " + q[0]])) {
                                    r === !0 ? r = o[t] : o[t] !== !0 && (s = q[0], n.unshift(q[1]));
                                    break
                                }
                            }
                        }
                        if (r !== !0) {
                            if (r && x["throws"]) {
                                w = r(w)
                            } else {
                                try {
                                    w = r(w)
                                } catch (m) {
                                    return {
                                        state: "parsererror",
                                        error: r ? m : "No conversion from " + p + " to " + s
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: w
        }
    }
    bw.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: aO.href,
            type: "GET",
            isLocal: aj.test(aO.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bj,
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
                "text xml": bw.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(d, c) {
            return c ? aM(aM(d, bw.ajaxSettings), c) : aM(bw.ajaxSettings, d)
        },
        ajaxPrefilter: a3(ct),
        ajaxTransport: a3(bS),
        ajax: function(V, U) {
            "object" == typeof V && (U = V, V = void 0), U = U || {};
            var T, S, R, Q, P, O, N, M, L, K, J = bw.ajaxSetup({}, U),
                I = J.context || J,
                G = J.context && (I.nodeType || I.jquery) ? bw(I) : bw.event,
                F = bw.Deferred(),
                E = bw.Callbacks("once memory"),
                D = J.statusCode || {},
                C = {},
                B = {},
                r = "canceled",
                d = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var c;
                        if (N) {
                            if (!Q) {
                                Q = {};
                                while (c = ar.exec(R)) {
                                    Q[c[1].toLowerCase()] = c[2]
                                }
                            }
                            c = Q[e.toLowerCase()]
                        }
                        return null == c ? null : c
                    },
                    getAllResponseHeaders: function() {
                        return N ? R : null
                    },
                    setRequestHeader: function(e, c) {
                        return null == N && (e = B[e.toLowerCase()] = B[e.toLowerCase()] || e, C[e] = c), this
                    },
                    overrideMimeType: function(b) {
                        return null == N && (J.mimeType = b), this
                    },
                    statusCode: function(e) {
                        var c;
                        if (e) {
                            if (N) {
                                d.always(e[d.status])
                            } else {
                                for (c in e) {
                                    D[c] = [D[c], e[c]]
                                }
                            }
                        }
                        return this
                    },
                    abort: function(e) {
                        var c = e || r;
                        return T && T.abort(c), H(0, c), this
                    }
                };
            if (F.promise(d), J.url = ((V || J.url || aO.href) + "").replace(cE, aO.protocol + "//"), J.type = U.method || U.type || J.method || J.type, J.dataTypes = (J.dataType || "*").toLowerCase().match(ce) || [""], null == J.crossDomain) {
                O = bN.createElement("a");
                try {
                    O.href = J.url, O.href = O.href, J.crossDomain = bc.protocol + "//" + bc.host != O.protocol + "//" + O.host
                } catch (a) {
                    J.crossDomain = !0
                }
            }
            if (J.data && J.processData && "string" != typeof J.data && (J.data = bw.param(J.data, J.traditional)), aU(ct, J, U, d), N) {
                return d
            }
            M = bw.event && J.global, M && 0 === bw.active++ && bw.event.trigger("ajaxStart"), J.type = J.type.toUpperCase(), J.hasContent = !cM.test(J.type), S = J.url.replace(aI, ""), J.hasContent ? J.data && J.processData && 0 === (J.contentType || "").indexOf("application/x-www-form-urlencoded") && (J.data = J.data.replace(aQ, "+")) : (K = J.url.slice(S.length), J.data && (S += (ay.test(S) ? "&" : "?") + J.data, delete J.data), J.cache === !1 && (S = S.replace(aA, "$1"), K = (ay.test(S) ? "&" : "?") + "_=" + aG++ + K), J.url = S + K), J.ifModified && (bw.lastModified[S] && d.setRequestHeader("If-Modified-Since", bw.lastModified[S]), bw.etag[S] && d.setRequestHeader("If-None-Match", bw.etag[S])), (J.data && J.hasContent && J.contentType !== !1 || U.contentType) && d.setRequestHeader("Content-Type", J.contentType), d.setRequestHeader("Accept", J.dataTypes[0] && J.accepts[J.dataTypes[0]] ? J.accepts[J.dataTypes[0]] + ("*" !== J.dataTypes[0] ? ", " + bj + "; q=0.01" : "") : J.accepts["*"]);
            for (L in J.headers) {
                d.setRequestHeader(L, J.headers[L])
            }
            if (J.beforeSend && (J.beforeSend.call(I, d, J) === !1 || N)) {
                return d.abort()
            }
            if (r = "abort", E.add(J.complete), d.done(J.success), d.fail(J.error), T = aU(bS, J, U, d)) {
                if (d.readyState = 1, M && G.trigger("ajaxSend", [d, J]), N) {
                    return d
                }
                J.async && J.timeout > 0 && (P = bQ.setTimeout(function() {
                    d.abort("timeout")
                }, J.timeout));
                try {
                    N = !1, T.send(C, H)
                } catch (a) {
                    if (N) {
                        throw a
                    }
                    H(-1, a)
                }
            } else {
                H(-1, "No Transport")
            }

            function H(o, l, k, i) {
                var g, f, e, s, q, p = l;
                N || (N = !0, P && bQ.clearTimeout(P), T = void 0, R = i || "", d.readyState = o > 0 ? 4 : 0, g = o >= 200 && o < 300 || 304 === o, k && (s = aE(J, d, k)), s = aw(J, s, d, g), g ? (J.ifModified && (q = d.getResponseHeader("Last-Modified"), q && (bw.lastModified[S] = q), q = d.getResponseHeader("etag"), q && (bw.etag[S] = q)), 204 === o || "HEAD" === J.type ? p = "nocontent" : 304 === o ? p = "notmodified" : (p = s.state, f = s.data, e = s.error, g = !e)) : (e = p, !o && p || (p = "error", o < 0 && (o = 0))), d.status = o, d.statusText = (l || p) + "", g ? F.resolveWith(I, [f, p, d]) : F.rejectWith(I, [d, p, e]), d.statusCode(D), D = void 0, M && G.trigger(g ? "ajaxSuccess" : "ajaxError", [d, J, g ? f : e]), E.fireWith(I, [d, p]), M && (G.trigger("ajaxComplete", [d, J]), --bw.active || bw.event.trigger("ajaxStop")))
            }
            return d
        },
        getJSON: function(e, d, f) {
            return bw.get(e, d, f, "json")
        },
        getScript: function(d, c) {
            return bw.get(d, void 0, c, "script")
        }
    }), bw.each(["get", "post"], function(d, c) {
        bw[c] = function(b, h, g, f) {
            return bw.isFunction(h) && (f = f || g, g = h, h = void 0), bw.ajax(bw.extend({
                url: b,
                type: c,
                dataType: f,
                data: h,
                success: g
            }, bw.isPlainObject(b) && b))
        }
    }), bw._evalUrl = function(b) {
        return bw.ajax({
            url: b,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, bw.fn.extend({
        wrapAll: function(d) {
            var c;
            return this[0] && (bw.isFunction(d) && (d = d.call(this[0])), c = bw(d, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && c.insertBefore(this[0]), c.map(function() {
                var b = this;
                while (b.firstElementChild) {
                    b = b.firstElementChild
                }
                return b
            }).append(this)), this
        },
        wrapInner: function(b) {
            return bw.isFunction(b) ? this.each(function(a) {
                bw(this).wrapInner(b.call(this, a))
            }) : this.each(function() {
                var a = bw(this),
                    d = a.contents();
                d.length ? d.wrapAll(b) : a.append(b)
            })
        },
        wrap: function(d) {
            var c = bw.isFunction(d);
            return this.each(function(a) {
                bw(this).wrapAll(c ? d.call(this, a) : d)
            })
        },
        unwrap: function(b) {
            return this.parent(b).not("body").each(function() {
                bw(this).replaceWith(this.childNodes)
            }), this
        }
    }), bw.expr.pseudos.hidden = function(b) {
        return !bw.expr.pseudos.visible(b)
    }, bw.expr.pseudos.visible = function(b) {
        return !!(b.offsetWidth || b.offsetHeight || b.getClientRects().length)
    }, bw.ajaxSettings.xhr = function() {
        try {
            return new bQ.XMLHttpRequest
        } catch (a) {}
    };
    var an = {
            0: 200,
            1223: 204
        },
        ae = bw.ajaxSettings.xhr();
    bA.cors = !!ae && "withCredentials" in ae, bA.ajax = ae = !!ae, bw.ajaxTransport(function(a) {
        var f, e;
        if (bA.cors || ae && !a.crossDomain) {
            return {
                send: function(k, j) {
                    var d, c = a.xhr();
                    if (c.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
                        for (d in a.xhrFields) {
                            c[d] = a.xhrFields[d]
                        }
                    }
                    a.mimeType && c.overrideMimeType && c.overrideMimeType(a.mimeType), a.crossDomain || k["X-Requested-With"] || (k["X-Requested-With"] = "XMLHttpRequest");
                    for (d in k) {
                        c.setRequestHeader(d, k[d])
                    }
                    f = function(g) {
                        return function() {
                            f && (f = e = c.onload = c.onerror = c.onabort = c.onreadystatechange = null, "abort" === g ? c.abort() : "error" === g ? "number" != typeof c.status ? j(0, "error") : j(c.status, c.statusText) : j(an[c.status] || c.status, c.statusText, "text" !== (c.responseType || "text") || "string" != typeof c.responseText ? {
                                binary: c.response
                            } : {
                                text: c.responseText
                            }, c.getAllResponseHeaders()))
                        }
                    }, c.onload = f(), e = c.onerror = f("error"), void 0 !== c.onabort ? c.onabort = e : c.onreadystatechange = function() {
                        4 === c.readyState && bQ.setTimeout(function() {
                            f && e()
                        })
                    }, f = f("abort");
                    try {
                        c.send(a.hasContent && a.data || null)
                    } catch (b) {
                        if (f) {
                            throw b
                        }
                    }
                },
                abort: function() {
                    f && f()
                }
            }
        }
    }), bw.ajaxPrefilter(function(b) {
        b.crossDomain && (b.contents.script = !1)
    }), bw.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(b) {
                return bw.globalEval(b), b
            }
        }
    }), bw.ajaxPrefilter("script", function(b) {
        void 0 === b.cache && (b.cache = !1), b.crossDomain && (b.type = "GET")
    }), bw.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var d, f;
            return {
                send: function(b, a) {
                    d = bw("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", f = function(c) {
                        d.remove(), f = null, c && a("error" === c.type ? 404 : 200, c.type)
                    }), bN.head.appendChild(d[0])
                },
                abort: function() {
                    f && f()
                }
            }
        }
    });
    var cI = [],
        cx = /(=)\?(?=&|$)|\?\?/;
    bw.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = cI.pop() || bw.expando + "_" + aG++;
            return this[b] = !0, b
        }
    }), bw.ajaxPrefilter("json jsonp", function(a, n, m) {
        var l, k, j, i = a.jsonp !== !1 && (cx.test(a.url) ? "url" : "string" == typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && cx.test(a.data) && "data");
        if (i || "jsonp" === a.dataTypes[0]) {
            return l = a.jsonpCallback = bw.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, i ? a[i] = a[i].replace(cx, "$1" + l) : a.jsonp !== !1 && (a.url += (ay.test(a.url) ? "&" : "?") + a.jsonp + "=" + l), a.converters["script json"] = function() {
                return j || bw.error(l + " was not called"), j[0]
            }, a.dataTypes[0] = "json", k = bQ[l], bQ[l] = function() {
                j = arguments
            }, m.always(function() {
                void 0 === k ? bw(bQ).removeProp(l) : bQ[l] = k, a[l] && (a.jsonpCallback = n.jsonpCallback, cI.push(l)), j && bw.isFunction(k) && k(j[0]), j = k = void 0
            }), "script"
        }
    }), bA.createHTMLDocument = function() {
        var b = bN.implementation.createHTMLDocument("").body;
        return b.innerHTML = "<form></form><form></form>", 2 === b.childNodes.length
    }(), bw.parseHTML = function(h, d, l) {
        if ("string" != typeof h) {
            return []
        }
        "boolean" == typeof d && (l = d, d = !1);
        var k, j, i;
        return d || (bA.createHTMLDocument ? (d = bN.implementation.createHTMLDocument(""), k = d.createElement("base"), k.href = bN.location.href, d.head.appendChild(k)) : d = bN), j = cp.exec(h), i = !l && [], j ? [d.createElement(j[1])] : (j = bf([h], d, i), i && i.length && bw(i).remove(), bw.merge([], j.childNodes))
    }, bw.fn.load = function(j, i, p) {
        var o, n, m, l = this,
            k = j.indexOf(" ");
        return k > -1 && (o = bl(j.slice(k)), j = j.slice(0, k)), bw.isFunction(i) ? (p = i, i = void 0) : i && "object" == typeof i && (n = "POST"), l.length > 0 && bw.ajax({
            url: j,
            type: n || "GET",
            dataType: "html",
            data: i
        }).done(function(b) {
            m = arguments, l.html(o ? bw("<div>").append(bw.parseHTML(b)).find(o) : b)
        }).always(p && function(d, c) {
            l.each(function() {
                p.apply(this, m || [d.responseText, c, d])
            })
        }), this
    }, bw.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(d, c) {
        bw.fn[c] = function(b) {
            return this.on(c, b)
        }
    }), bw.expr.pseudos.animated = function(b) {
        return bw.grep(bw.timers, function(a) {
            return b === a.elem
        }).length
    }, bw.offset = {
        setOffset: function(A, z, x) {
            var w, v, u, t, s, r, q, p = bw.css(A, "position"),
                o = bw(A),
                n = {};
            "static" === p && (A.style.position = "relative"), s = o.offset(), u = bw.css(A, "top"), r = bw.css(A, "left"), q = ("absolute" === p || "fixed" === p) && (u + r).indexOf("auto") > -1, q ? (w = o.position(), t = w.top, v = w.left) : (t = parseFloat(u) || 0, v = parseFloat(r) || 0), bw.isFunction(z) && (z = z.call(A, x, bw.extend({}, s))), null != z.top && (n.top = z.top - s.top + t), null != z.left && (n.left = z.left - s.left + v), "using" in z ? z.using.call(A, n) : o.css(n)
        }
    }, bw.fn.extend({
        offset: function(h) {
            if (arguments.length) {
                return void 0 === h ? this : this.each(function(a) {
                    bw.offset.setOffset(this, h, a)
                })
            }
            var g, l, k, j, i = this[0];
            if (i) {
                return i.getClientRects().length ? (k = i.getBoundingClientRect(), g = i.ownerDocument, l = g.documentElement, j = g.defaultView, {
                    top: k.top + j.pageYOffset - l.clientTop,
                    left: k.left + j.pageXOffset - l.clientLeft
                }) : {
                    top: 0,
                    left: 0
                }
            }
        },
        position: function() {
            if (this[0]) {
                var f, e, h = this[0],
                    g = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === bw.css(h, "position") ? e = h.getBoundingClientRect() : (f = this.offsetParent(), e = this.offset(), cq(f[0], "html") || (g = f.offset()), g = {
                    top: g.top + bw.css(f[0], "borderTopWidth", !0),
                    left: g.left + bw.css(f[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - g.top - bw.css(h, "marginTop", !0),
                    left: e.left - g.left - bw.css(h, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var b = this.offsetParent;
                while (b && "static" === bw.css(b, "position")) {
                    b = b.offsetParent
                }
                return b || a6
            })
        }
    }), bw.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, d) {
        var f = "pageYOffset" === d;
        bw.fn[e] = function(a) {
            return b2(this, function(b, h, g) {
                var c;
                return bw.isWindow(b) ? c = b : 9 === b.nodeType && (c = b.defaultView), void 0 === g ? c ? c[d] : b[h] : void(c ? c.scrollTo(f ? c.pageXOffset : g, f ? g : c.pageYOffset) : b[h] = g)
            }, e, a, arguments.length)
        }
    }), bw.each(["top", "left"], function(d, c) {
        bw.cssHooks[c] = aF(bA.pixelPosition, function(b, e) {
            if (e) {
                return e = aN(b, c), a4.test(e) ? bw(b).position()[c] + "px" : e
            }
        })
    }), bw.each({
        Height: "height",
        Width: "width"
    }, function(d, c) {
        bw.each({
            padding: "inner" + d,
            content: c,
            "": "outer" + d
        }, function(b, a) {
            bw.fn[a] = function(l, k) {
                var j = arguments.length && (b || "boolean" != typeof l),
                    i = b || (l === !0 || k === !0 ? "margin" : "border");
                return b2(this, function(g, n, m) {
                    var h;
                    return bw.isWindow(g) ? 0 === a.indexOf("outer") ? g["inner" + d] : g.document.documentElement["client" + d] : 9 === g.nodeType ? (h = g.documentElement, Math.max(g.body["scroll" + d], h["scroll" + d], g.body["offset" + d], h["offset" + d], h["client" + d])) : void 0 === m ? bw.css(g, n, i) : bw.style(g, n, m, i)
                }, c, j ? l : void 0, j)
            }
        })
    }), bw.fn.extend({
        bind: function(e, d, f) {
            return this.on(e, null, d, f)
        },
        unbind: function(d, c) {
            return this.off(d, null, c)
        },
        delegate: function(f, e, h, g) {
            return this.on(e, f, h, g)
        },
        undelegate: function(e, d, f) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(d, e || "**", f)
        },
        holdReady: function(b) {
            b ? bw.readyWait++ : bw.ready(!0)
        }
    }), bw.isArray = Array.isArray, bw.parseJSON = JSON.parse, bw.nodeName = cq, "function" == typeof define && define.amd && define("jquery", [], function() {
        return bw
    });
    var b3 = bQ.jQuery,
        bv = bQ.$;
    return bw.noConflict = function(a) {
        return bQ.$ === bw && (bQ.$ = bv), a && bQ.jQuery === bw && (bQ.jQuery = b3), bw
    }, bP || (bQ.jQuery = bQ.$ = bw), bw
});
if ("undefined" == typeof jQuery) {
    throw new Error("Bootstrap's JavaScript requires jQuery")
} + function(d) {
    var c = d.fn.jquery.split(" ")[0].split(".");
    if (c[0] < 2 && c[1] < 9 || 1 == c[0] && 9 == c[1] && c[2] < 1 || c[0] > 3) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }
}(jQuery), + function(d) {
    function c() {
        var f = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var g in e) {
            if (void 0 !== f.style[g]) {
                return {
                    end: e[g]
                }
            }
        }
        return !1
    }
    d.fn.emulateTransitionEnd = function(a) {
        var h = !1,
            g = this;
        d(this).one("bsTransitionEnd", function() {
            h = !0
        });
        var f = function() {
            h || d(g).trigger(d.support.transition.end)
        };
        return setTimeout(f, a), this
    }, d(function() {
        d.support.transition = c(), d.support.transition && (d.event.special.bsTransitionEnd = {
            bindType: d.support.transition.end,
            delegateType: d.support.transition.end,
            handle: function(a) {
                if (d(a.target).is(this)) {
                    return a.handleObj.handler.apply(this, arguments)
                }
            }
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var d = g(this),
                b = d.data("bs.alert");
            b || d.data("bs.alert", b = new i(this)), "string" == typeof a && b[a].call(d)
        })
    }
    var j = '[data-dismiss="alert"]',
        i = function(a) {
            g(a).on("click", j, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(a) {
        function m() {
            d.detach().trigger("closed.bs.alert").remove()
        }
        var l = g(this),
            k = l.attr("data-target");
        k || (k = l.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, ""));
        var d = g("#" === k ? [] : k);
        a && a.preventDefault(), d.length || (d = l.closest(".alert")), d.trigger(a = g.Event("close.bs.alert")), a.isDefaultPrevented() || (d.removeClass("in"), g.support.transition && d.hasClass("fade") ? d.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m())
    };
    var h = g.fn.alert;
    g.fn.alert = f, g.fn.alert.Constructor = i, g.fn.alert.noConflict = function() {
        return g.fn.alert = h, this
    }, g(document).on("click.bs.alert.data-api", j, i.prototype.close)
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.button"),
                b = "object" == typeof a && a;
            c || i.data("bs.button", c = new h(this, b)), "toggle" == a ? c.toggle() : a && c.setState(a)
        })
    }
    var h = function(a, c) {
        this.$element = f(a), this.options = f.extend({}, h.DEFAULTS, c), this.isLoading = !1
    };
    h.VERSION = "3.3.7", h.DEFAULTS = {
        loadingText: "loading..."
    }, h.prototype.setState = function(a) {
        var l = "disabled",
            k = this.$element,
            j = k.is("input") ? "val" : "html",
            i = k.data();
        a += "Text", null == i.resetText && k.data("resetText", k[j]()), setTimeout(f.proxy(function() {
            k[j](null == i[a] ? this.options[a] : i[a]), "loadingText" == a ? (this.isLoading = !0, k.addClass(l).attr(l, l).prop(l, !0)) : this.isLoading && (this.isLoading = !1, k.removeClass(l).removeAttr(l).prop(l, !1))
        }, this), 0)
    }, h.prototype.toggle = function() {
        var i = !0,
            d = this.$element.closest('[data-toggle="buttons"]');
        if (d.length) {
            var j = this.$element.find("input");
            "radio" == j.prop("type") ? (j.prop("checked") && (i = !1), d.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == j.prop("type") && (j.prop("checked") !== this.$element.hasClass("active") && (i = !1), this.$element.toggleClass("active")), j.prop("checked", this.$element.hasClass("active")), i && j.trigger("change")
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        }
    };
    var g = f.fn.button;
    f.fn.button = e, f.fn.button.Constructor = h, f.fn.button.noConflict = function() {
        return f.fn.button = g, this
    }, f(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        var a = f(b.target).closest(".btn");
        e.call(a, "toggle"), f(b.target).is('input[type="radio"], input[type="checkbox"]') || (b.preventDefault(), a.is("input,button") ? a.trigger("focus") : a.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(a) {
        f(a.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(a.type))
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var l = g(this),
                k = l.data("bs.carousel"),
                c = g.extend({}, j.DEFAULTS, l.data(), "object" == typeof a && a),
                b = "string" == typeof a ? a : c.slide;
            k || l.data("bs.carousel", k = new j(this, c)), "number" == typeof a ? k.to(a) : b ? k[b]() : c.interval && k.pause().cycle()
        })
    }
    var j = function(a, d) {
        this.$element = g(a), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", g.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", g.proxy(this.pause, this)).on("mouseleave.bs.carousel", g.proxy(this.cycle, this))
    };
    j.VERSION = "3.3.7", j.TRANSITION_DURATION = 600, j.DEFAULTS = {
        interval: 5000,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, j.prototype.keydown = function(b) {
        if (!/input|textarea/i.test(b.target.tagName)) {
            switch (b.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            b.preventDefault()
        }
    }, j.prototype.cycle = function(a) {
        return a || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(g.proxy(this.next, this), this.options.interval)), this
    }, j.prototype.getItemIndex = function(b) {
        return this.$items = b.parent().children(".item"), this.$items.index(b || this.$active)
    }, j.prototype.getItemForDirection = function(l, k) {
        var p = this.getItemIndex(k),
            o = "prev" == l && 0 === p || "next" == l && p == this.$items.length - 1;
        if (o && !this.options.wrap) {
            return k
        }
        var n = "prev" == l ? -1 : 1,
            m = (p + n) % this.$items.length;
        return this.$items.eq(m)
    }, j.prototype.to = function(e) {
        var d = this,
            k = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) {
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                d.to(e)
            }) : k == e ? this.pause().cycle() : this.slide(e > k ? "next" : "prev", this.$items.eq(e))
        }
    }, j.prototype.pause = function(a) {
        return a || (this.paused = !0), this.$element.find(".next, .prev").length && g.support.transition && (this.$element.trigger(g.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, j.prototype.next = function() {
        if (!this.sliding) {
            return this.slide("next")
        }
    }, j.prototype.prev = function() {
        if (!this.sliding) {
            return this.slide("prev")
        }
    }, j.prototype.slide = function(v, u) {
        var t = this.$element.find(".item.active"),
            s = u || this.getItemForDirection(v, t),
            r = this.interval,
            q = "next" == v ? "left" : "right",
            p = this;
        if (s.hasClass("active")) {
            return this.sliding = !1
        }
        var o = s[0],
            n = g.Event("slide.bs.carousel", {
                relatedTarget: o,
                direction: q
            });
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = g(this.$indicators.children()[this.getItemIndex(s)]);
                c && c.addClass("active")
            }
            var a = g.Event("slid.bs.carousel", {
                relatedTarget: o,
                direction: q
            });
            return g.support.transition && this.$element.hasClass("slide") ? (s.addClass(v), s[0].offsetWidth, t.addClass(q), s.addClass(q), t.one("bsTransitionEnd", function() {
                s.removeClass([v, q].join(" ")).addClass("active"), t.removeClass(["active", q].join(" ")), p.sliding = !1, setTimeout(function() {
                    p.$element.trigger(a)
                }, 0)
            }).emulateTransitionEnd(j.TRANSITION_DURATION)) : (t.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(a)), r && this.cycle(), this
        }
    };
    var i = g.fn.carousel;
    g.fn.carousel = f, g.fn.carousel.Constructor = j, g.fn.carousel.noConflict = function() {
        return g.fn.carousel = i, this
    };
    var h = function(n) {
        var m, l = g(this),
            k = g(l.attr("data-target") || (m = l.attr("href")) && m.replace(/.*(?=#[^\s]+$)/, ""));
        if (k.hasClass("carousel")) {
            var b = g.extend({}, k.data(), l.data()),
                a = l.attr("data-slide-to");
            a && (b.interval = !1), f.call(k, b), a && k.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    g(document).on("click.bs.carousel.data-api", "[data-slide]", h).on("click.bs.carousel.data-api", "[data-slide-to]", h), g(window).on("load", function() {
        g('[data-ride="carousel"]').each(function() {
            var a = g(this);
            f.call(a, a.data())
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        var k, e = a.attr("data-target") || (k = a.attr("href")) && k.replace(/.*(?=#[^\s]+$)/, "");
        return g(e)
    }

    function j(a) {
        return this.each(function() {
            var k = g(this),
                d = k.data("bs.collapse"),
                b = g.extend({}, i.DEFAULTS, k.data(), "object" == typeof a && a);
            !d && b.toggle && /show|hide/.test(a) && (b.toggle = !1), d || k.data("bs.collapse", d = new i(this, b)), "string" == typeof a && d[a]()
        })
    }
    var i = function(a, d) {
        this.$element = g(a), this.options = g.extend({}, i.DEFAULTS, d), this.$trigger = g('[data-toggle="collapse"][href="#' + a.id + '"],[data-toggle="collapse"][data-target="#' + a.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        var b = this.$element.hasClass("width");
        return b ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var a, m = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(m && m.length && (a = m.data("bs.collapse"), a && a.transitioning))) {
                var l = g.Event("show.bs.collapse");
                if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                    m && m.length && (j.call(m, "hide"), a || m.data("bs.collapse", null));
                    var k = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var d = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[k](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!g.support.transition) {
                        return d.call(this)
                    }
                    var c = g.camelCase(["scroll", k].join("-"));
                    this.$element.one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var a = g.Event("hide.bs.collapse");
            if (this.$element.trigger(a), !a.isDefaultPrevented()) {
                var k = this.dimension();
                this.$element[k](this.$element[k]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return g.support.transition ? void this.$element[k](0).one("bsTransitionEnd", g.proxy(d, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : d.call(this)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return g(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(g.proxy(function(k, b) {
            var a = g(b);
            this.addAriaAndCollapsedClass(f(a), a)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, d) {
        var k = e.hasClass("in");
        e.attr("aria-expanded", k), d.toggleClass("collapsed", !k).attr("aria-expanded", k)
    };
    var h = g.fn.collapse;
    g.fn.collapse = j, g.fn.collapse.Constructor = i, g.fn.collapse.noConflict = function() {
        return g.fn.collapse = h, this
    }, g(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(l) {
        var k = g(this);
        k.attr("data-target") || l.preventDefault();
        var c = f(k),
            b = c.data("bs.collapse"),
            a = b ? "toggle" : k.data();
        j.call(c, a)
    })
}(jQuery), + function(j) {
    function i(a) {
        var f = a.attr("data-target");
        f || (f = a.attr("href"), f = f && /#[A-Za-z]/.test(f) && f.replace(/.*(?=#[^\s]*$)/, ""));
        var e = f && j(f);
        return e && e.length ? e : a.parent()
    }

    function p(a) {
        a && 3 === a.which || (j(n).remove(), j(m).each(function() {
            var g = j(this),
                c = i(g),
                b = {
                    relatedTarget: this
                };
            c.hasClass("open") && (a && "click" == a.type && /input|textarea/i.test(a.target.tagName) && j.contains(c[0], a.target) || (c.trigger(a = j.Event("hide.bs.dropdown", b)), a.isDefaultPrevented() || (g.attr("aria-expanded", "false"), c.removeClass("open").trigger(j.Event("hidden.bs.dropdown", b)))))
        }))
    }

    function o(a) {
        return this.each(function() {
            var e = j(this),
                b = e.data("bs.dropdown");
            b || e.data("bs.dropdown", b = new l(this)), "string" == typeof a && b[a].call(e)
        })
    }
    var n = ".dropdown-backdrop",
        m = '[data-toggle="dropdown"]',
        l = function(a) {
            j(a).on("click.bs.dropdown", this.toggle)
        };
    l.VERSION = "3.3.7", l.prototype.toggle = function(r) {
        var q = j(this);
        if (!q.is(".disabled, :disabled")) {
            var c = i(q),
                b = c.hasClass("open");
            if (p(), !b) {
                "ontouchstart" in document.documentElement && !c.closest(".navbar-nav").length && j(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(j(this)).on("click", p);
                var a = {
                    relatedTarget: this
                };
                if (c.trigger(r = j.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) {
                    return
                }
                q.trigger("focus").attr("aria-expanded", "true"), c.toggleClass("open").trigger(j.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, l.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var s = j(this);
            if (t.preventDefault(), t.stopPropagation(), !s.is(".disabled, :disabled")) {
                var r = i(s),
                    q = r.hasClass("open");
                if (!q && 27 != t.which || q && 27 == t.which) {
                    return 27 == t.which && r.find(m).trigger("focus"), s.trigger("click")
                }
                var f = " li:not(.disabled):visible a",
                    b = r.find(".dropdown-menu" + f);
                if (b.length) {
                    var a = b.index(t.target);
                    38 == t.which && a > 0 && a--, 40 == t.which && a < b.length - 1 && a++, ~a || (a = 0), b.eq(a).trigger("focus")
                }
            }
        }
    };
    var k = j.fn.dropdown;
    j.fn.dropdown = o, j.fn.dropdown.Constructor = l, j.fn.dropdown.noConflict = function() {
        return j.fn.dropdown = k, this
    }, j(document).on("click.bs.dropdown.data-api", p).on("click.bs.dropdown.data-api", ".dropdown form", function(b) {
        b.stopPropagation()
    }).on("click.bs.dropdown.data-api", m, l.prototype.toggle).on("keydown.bs.dropdown.data-api", m, l.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", l.prototype.keydown)
}(jQuery), + function(f) {
    function e(a, c) {
        return this.each(function() {
            var i = f(this),
                d = i.data("bs.modal"),
                b = f.extend({}, h.DEFAULTS, i.data(), "object" == typeof a && a);
            d || i.data("bs.modal", d = new h(this, b)), "string" == typeof a ? d[a](c) : b.show && d.show(c)
        })
    }
    var h = function(a, d) {
        this.options = d, this.$body = f(document.body), this.$element = f(a), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, f.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    h.VERSION = "3.3.7", h.TRANSITION_DURATION = 300, h.BACKDROP_TRANSITION_DURATION = 150, h.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, h.prototype.toggle = function(b) {
        return this.isShown ? this.hide() : this.show(b)
    }, h.prototype.show = function(a) {
        var i = this,
            c = f.Event("show.bs.modal", {
                relatedTarget: a
            });
        this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', f.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(d) {
                f(d.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var d = f.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), d && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var b = f.Event("shown.bs.modal", {
                relatedTarget: a
            });
            d ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(b)
            }).emulateTransitionEnd(h.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(b)
        }))
    }, h.prototype.hide = function(a) {
        a && a.preventDefault(), a = f.Event("hide.bs.modal"), this.$element.trigger(a), this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), f(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), f.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", f.proxy(this.hideModal, this)).emulateTransitionEnd(h.TRANSITION_DURATION) : this.hideModal())
    }, h.prototype.enforceFocus = function() {
        f(document).off("focusin.bs.modal").on("focusin.bs.modal", f.proxy(function(b) {
            document === b.target || this.$element[0] === b.target || this.$element.has(b.target).length || this.$element.trigger("focus")
        }, this))
    }, h.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", f.proxy(function(b) {
            27 == b.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, h.prototype.resize = function() {
        this.isShown ? f(window).on("resize.bs.modal", f.proxy(this.handleUpdate, this)) : f(window).off("resize.bs.modal")
    }, h.prototype.hideModal = function() {
        var b = this;
        this.$element.hide(), this.backdrop(function() {
            b.$body.removeClass("modal-open"), b.resetAdjustments(), b.resetScrollbar(), b.$element.trigger("hidden.bs.modal")
        })
    }, h.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, h.prototype.backdrop = function(a) {
        var k = this,
            j = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = f.support.transition && j;
            if (this.$backdrop = f(document.createElement("div")).addClass("modal-backdrop " + j).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", f.proxy(function(b) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(b.target === b.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !a) {
                return
            }
            i ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : a()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var c = function() {
                    k.removeBackdrop(), a && a()
                };
                f.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION) : c()
            } else {
                a && a()
            }
        }
    }, h.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, h.prototype.adjustDialog = function() {
        var b = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && b ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !b ? this.scrollbarWidth : ""
        })
    }, h.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, h.prototype.checkScrollbar = function() {
        var d = window.innerWidth;
        if (!d) {
            var c = document.documentElement.getBoundingClientRect();
            d = c.right - Math.abs(c.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < d, this.scrollbarWidth = this.measureScrollbar()
    }, h.prototype.setScrollbar = function() {
        var b = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", b + this.scrollbarWidth)
    }, h.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, h.prototype.measureScrollbar = function() {
        var d = document.createElement("div");
        d.className = "modal-scrollbar-measure", this.$body.append(d);
        var c = d.offsetWidth - d.clientWidth;
        return this.$body[0].removeChild(d), c
    };
    var g = f.fn.modal;
    f.fn.modal = e, f.fn.modal.Constructor = h, f.fn.modal.noConflict = function() {
        return f.fn.modal = g, this
    }, f(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(k) {
        var j = f(this),
            i = j.attr("href"),
            b = f(j.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            a = b.data("bs.modal") ? "toggle" : f.extend({
                remote: !/#/.test(i) && i
            }, b.data(), j.data());
        j.is("a") && k.preventDefault(), b.one("show.bs.modal", function(c) {
            c.isDefaultPrevented() || b.one("hidden.bs.modal", function() {
                j.is(":visible") && j.trigger("focus")
            })
        }), e.call(b, a, this)
    })
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.tooltip"),
                b = "object" == typeof a && a;
            !c && /destroy|hide/.test(a) || (c || i.data("bs.tooltip", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }
    var h = function(d, c) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", d, c)
    };
    h.VERSION = "3.3.7", h.TRANSITION_DURATION = 150, h.DEFAULTS = {
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
    }, h.prototype.init = function(a, p, o) {
        if (this.enabled = !0, this.type = a, this.$element = f(p), this.options = this.getOptions(o), this.$viewport = this.options.viewport && f(f.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!")
        }
        for (var n = this.options.trigger.split(" "), m = n.length; m--;) {
            var l = n[m];
            if ("click" == l) {
                this.$element.on("click." + this.type, this.options.selector, f.proxy(this.toggle, this))
            } else {
                if ("manual" != l) {
                    var k = "hover" == l ? "mouseenter" : "focusin",
                        j = "hover" == l ? "mouseleave" : "focusout";
                    this.$element.on(k + "." + this.type, this.options.selector, f.proxy(this.enter, this)), this.$element.on(j + "." + this.type, this.options.selector, f.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = f.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.getOptions = function(a) {
        return a = f.extend({}, this.getDefaults(), this.$element.data(), a), a.delay && "number" == typeof a.delay && (a.delay = {
            show: a.delay,
            hide: a.delay
        }), a
    }, h.prototype.getDelegateOptions = function() {
        var a = {},
            d = this.getDefaults();
        return this._options && f.each(this._options, function(b, c) {
            d[b] != c && (a[b] = c)
        }), a
    }, h.prototype.enter = function(a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        return d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), a instanceof f.Event && (d.inState["focusin" == a.type ? "focus" : "hover"] = !0), d.tip().hasClass("in") || "in" == d.hoverState ? void(d.hoverState = "in") : (clearTimeout(d.timeout), d.hoverState = "in", d.options.delay && d.options.delay.show ? void(d.timeout = setTimeout(function() {
            "in" == d.hoverState && d.show()
        }, d.options.delay.show)) : d.show())
    }, h.prototype.isInStateTrue = function() {
        for (var b in this.inState) {
            if (this.inState[b]) {
                return !0
            }
        }
        return !1
    }, h.prototype.leave = function(a) {
        var d = a instanceof this.constructor ? a : f(a.currentTarget).data("bs." + this.type);
        if (d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d)), a instanceof f.Event && (d.inState["focusout" == a.type ? "focus" : "hover"] = !1), !d.isInStateTrue()) {
            return clearTimeout(d.timeout), d.hoverState = "out", d.options.delay && d.options.delay.hide ? void(d.timeout = setTimeout(function() {
                "out" == d.hoverState && d.hide()
            }, d.options.delay.hide)) : d.hide()
        }
    }, h.prototype.show = function() {
        var E = f.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(E);
            var D = f.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (E.isDefaultPrevented() || !D) {
                return
            }
            var C = this,
                B = this.tip(),
                A = this.getUID(this.type);
            this.setContent(), B.attr("id", A), this.$element.attr("aria-describedby", A), this.options.animation && B.addClass("fade");
            var z = "function" == typeof this.options.placement ? this.options.placement.call(this, B[0], this.$element[0]) : this.options.placement,
                x = /\s?auto?\s?/i,
                w = x.test(z);
            w && (z = z.replace(x, "") || "top"), B.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(z).data("bs." + this.type, this), this.options.container ? B.appendTo(this.options.container) : B.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var v = this.getPosition(),
                u = B[0].offsetWidth,
                t = B[0].offsetHeight;
            if (w) {
                var s = z,
                    r = this.getPosition(this.$viewport);
                z = "bottom" == z && v.bottom + t > r.bottom ? "top" : "top" == z && v.top - t < r.top ? "bottom" : "right" == z && v.right + u > r.width ? "left" : "left" == z && v.left - u < r.left ? "right" : z, B.removeClass(s).addClass(z)
            }
            var c = this.getCalculatedOffset(z, v, u, t);
            this.applyPlacement(c, z);
            var a = function() {
                var b = C.hoverState;
                C.$element.trigger("shown.bs." + C.type), C.hoverState = null, "out" == b && C.leave(C)
            };
            f.support.transition && this.$tip.hasClass("fade") ? B.one("bsTransitionEnd", a).emulateTransitionEnd(h.TRANSITION_DURATION) : a()
        }
    }, h.prototype.applyPlacement = function(A, z) {
        var x = this.tip(),
            w = x[0].offsetWidth,
            v = x[0].offsetHeight,
            u = parseInt(x.css("margin-top"), 10),
            t = parseInt(x.css("margin-left"), 10);
        isNaN(u) && (u = 0), isNaN(t) && (t = 0), A.top += u, A.left += t, f.offset.setOffset(x[0], f.extend({
            using: function(b) {
                x.css({
                    top: Math.round(b.top),
                    left: Math.round(b.left)
                })
            }
        }, A), 0), x.addClass("in");
        var s = x[0].offsetWidth,
            r = x[0].offsetHeight;
        "top" == z && r != v && (A.top = A.top + v - r);
        var q = this.getViewportAdjustedDelta(z, A, s, r);
        q.left ? A.left += q.left : A.top += q.top;
        var p = /top|bottom/.test(z),
            o = p ? 2 * q.left - w + s : 2 * q.top - v + r,
            a = p ? "offsetWidth" : "offsetHeight";
        x.offset(A), this.replaceArrow(o, x[0][a], p)
    }, h.prototype.replaceArrow = function(i, d, j) {
        this.arrow().css(j ? "left" : "top", 50 * (1 - i / d) + "%").css(j ? "top" : "left", "")
    }, h.prototype.setContent = function() {
        var d = this.tip(),
            c = this.getTitle();
        d.find(".tooltip-inner")[this.options.html ? "html" : "text"](c), d.removeClass("fade in top bottom left right")
    }, h.prototype.hide = function(a) {
        function k() {
            "in" != j.hoverState && i.detach(), j.$element && j.$element.removeAttr("aria-describedby").trigger("hidden.bs." + j.type), a && a()
        }
        var j = this,
            i = f(this.$tip),
            c = f.Event("hide.bs." + this.type);
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            return i.removeClass("in"), f.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", k).emulateTransitionEnd(h.TRANSITION_DURATION) : k(), this.hoverState = null, this
        }
    }, h.prototype.fixTitle = function() {
        var b = this.$element;
        (b.attr("title") || "string" != typeof b.attr("data-original-title")) && b.attr("data-original-title", b.attr("title") || "").attr("title", "")
    }, h.prototype.hasContent = function() {
        return this.getTitle()
    }, h.prototype.getPosition = function(a) {
        a = a || this.$element;
        var p = a[0],
            o = "BODY" == p.tagName,
            n = p.getBoundingClientRect();
        null == n.width && (n = f.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var m = window.SVGElement && p instanceof window.SVGElement,
            l = o ? {
                top: 0,
                left: 0
            } : m ? null : a.offset(),
            k = {
                scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : a.scrollTop()
            },
            j = o ? {
                width: f(window).width(),
                height: f(window).height()
            } : null;
        return f.extend({}, n, k, j, l)
    }, h.prototype.getCalculatedOffset = function(j, i, l, k) {
        return "bottom" == j ? {
            top: i.top + i.height,
            left: i.left + i.width / 2 - l / 2
        } : "top" == j ? {
            top: i.top - k,
            left: i.left + i.width / 2 - l / 2
        } : "left" == j ? {
            top: i.top + i.height / 2 - k / 2,
            left: i.left - l
        } : {
            top: i.top + i.height / 2 - k / 2,
            left: i.left + i.width
        }
    }, h.prototype.getViewportAdjustedDelta = function(v, u, t, s) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) {
            return r
        }
        var q = this.options.viewport && this.options.viewport.padding || 0,
            p = this.getPosition(this.$viewport);
        if (/right|left/.test(v)) {
            var o = u.top - q - p.scroll,
                n = u.top + q - p.scroll + s;
            o < p.top ? r.top = p.top - o : n > p.top + p.height && (r.top = p.top + p.height - n)
        } else {
            var m = u.left - q,
                l = u.left + q + t;
            m < p.left ? r.left = p.left - m : l > p.right && (r.left = p.left + p.width - l)
        }
        return r
    }, h.prototype.getTitle = function() {
        var i, d = this.$element,
            j = this.options;
        return i = d.attr("data-original-title") || ("function" == typeof j.title ? j.title.call(d[0]) : j.title)
    }, h.prototype.getUID = function(b) {
        do {
            b += ~~(1000000 * Math.random())
        } while (document.getElementById(b));
        return b
    }, h.prototype.tip = function() {
        if (!this.$tip && (this.$tip = f(this.options.template), 1 != this.$tip.length)) {
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!")
        }
        return this.$tip
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, h.prototype.enable = function() {
        this.enabled = !0
    }, h.prototype.disable = function() {
        this.enabled = !1
    }, h.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, h.prototype.toggle = function(a) {
        var d = this;
        a && (d = f(a.currentTarget).data("bs." + this.type), d || (d = new this.constructor(a.currentTarget, this.getDelegateOptions()), f(a.currentTarget).data("bs." + this.type, d))), a ? (d.inState.click = !d.inState.click, d.isInStateTrue() ? d.enter(d) : d.leave(d)) : d.tip().hasClass("in") ? d.leave(d) : d.enter(d)
    }, h.prototype.destroy = function() {
        var b = this;
        clearTimeout(this.timeout), this.hide(function() {
            b.$element.off("." + b.type).removeData("bs." + b.type), b.$tip && b.$tip.detach(), b.$tip = null, b.$arrow = null, b.$viewport = null, b.$element = null
        })
    };
    var g = f.fn.tooltip;
    f.fn.tooltip = e, f.fn.tooltip.Constructor = h, f.fn.tooltip.noConflict = function() {
        return f.fn.tooltip = g, this
    }
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.popover"),
                b = "object" == typeof a && a;
            !c && /destroy|hide/.test(a) || (c || i.data("bs.popover", c = new h(this, b)), "string" == typeof a && c[a]())
        })
    }
    var h = function(d, c) {
        this.init("popover", d, c)
    };
    if (!f.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    h.VERSION = "3.3.7", h.DEFAULTS = f.extend({}, f.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), h.prototype = f.extend({}, f.fn.tooltip.Constructor.prototype), h.prototype.constructor = h, h.prototype.getDefaults = function() {
        return h.DEFAULTS
    }, h.prototype.setContent = function() {
        var i = this.tip(),
            d = this.getTitle(),
            j = this.getContent();
        i.find(".popover-title")[this.options.html ? "html" : "text"](d), i.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof j ? "html" : "append" : "text"](j), i.removeClass("fade top bottom left right in"), i.find(".popover-title").html() || i.find(".popover-title").hide()
    }, h.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, h.prototype.getContent = function() {
        var d = this.$element,
            c = this.options;
        return d.attr("data-content") || ("function" == typeof c.content ? c.content.call(d[0]) : c.content)
    }, h.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var g = f.fn.popover;
    f.fn.popover = e, f.fn.popover.Constructor = h, f.fn.popover.noConflict = function() {
        return f.fn.popover = g, this
    }
}(jQuery), + function(f) {
    function e(b, a) {
        this.$body = f(document.body), this.$scrollElement = f(f(b).is(document.body) ? window : b), this.options = f.extend({}, e.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", f.proxy(this.process, this)), this.refresh(), this.process()
    }

    function h(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.scrollspy"),
                b = "object" == typeof a && a;
            c || i.data("bs.scrollspy", c = new e(this, b)), "string" == typeof a && c[a]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var a = this,
            j = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), f.isWindow(this.$scrollElement[0]) || (j = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var c = f(this),
                k = c.data("target") || c.attr("href"),
                d = /^#./.test(k) && f(k);
            return d && d.length && d.is(":visible") && [
                [d[j]().top + i, k]
            ] || null
        }).sort(function(d, c) {
            return d[0] - c[0]
        }).each(function() {
            a.offsets.push(this[0]), a.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var j, i = this.$scrollElement.scrollTop() + this.options.offset,
            o = this.getScrollHeight(),
            n = this.options.offset + o - this.$scrollElement.height(),
            m = this.offsets,
            l = this.targets,
            k = this.activeTarget;
        if (this.scrollHeight != o && this.refresh(), i >= n) {
            return k != (j = l[l.length - 1]) && this.activate(j)
        }
        if (k && i < m[0]) {
            return this.activeTarget = null, this.clear()
        }
        for (j = m.length; j--;) {
            k != l[j] && i >= m[j] && (void 0 === m[j + 1] || i < m[j + 1]) && this.activate(l[j])
        }
    }, e.prototype.activate = function(a) {
        this.activeTarget = a, this.clear();
        var j = this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]',
            i = f(j).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        f(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var g = f.fn.scrollspy;
    f.fn.scrollspy = h, f.fn.scrollspy.Constructor = e, f.fn.scrollspy.noConflict = function() {
        return f.fn.scrollspy = g, this
    }, f(window).on("load.bs.scrollspy.data-api", function() {
        f('[data-spy="scroll"]').each(function() {
            var a = f(this);
            h.call(a, a.data())
        })
    })
}(jQuery), + function(g) {
    function f(a) {
        return this.each(function() {
            var c = g(this),
                b = c.data("bs.tab");
            b || c.data("bs.tab", b = new j(this)), "string" == typeof a && b[a]()
        })
    }
    var j = function(a) {
        this.element = g(a)
    };
    j.VERSION = "3.3.7", j.TRANSITION_DURATION = 150, j.prototype.show = function() {
        var a = this.element,
            p = a.closest("ul:not(.dropdown-menu)"),
            o = a.data("target");
        if (o || (o = a.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !a.parent("li").hasClass("active")) {
            var n = p.find(".active:last a"),
                m = g.Event("hide.bs.tab", {
                    relatedTarget: a[0]
                }),
                l = g.Event("show.bs.tab", {
                    relatedTarget: n[0]
                });
            if (n.trigger(m), a.trigger(l), !l.isDefaultPrevented() && !m.isDefaultPrevented()) {
                var k = g(o);
                this.activate(a.closest("li"), p), this.activate(k, k.parent(), function() {
                    n.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: a[0]
                    }), a.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, j.prototype.activate = function(a, n, m) {
        function l() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), c ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade"), a.parent(".dropdown-menu").length && a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), m && m()
        }
        var k = n.find("> .active"),
            c = m && g.support.transition && (k.length && k.hasClass("fade") || !!n.find("> .fade").length);
        k.length && c ? k.one("bsTransitionEnd", l).emulateTransitionEnd(j.TRANSITION_DURATION) : l(), k.removeClass("in")
    };
    var i = g.fn.tab;
    g.fn.tab = f, g.fn.tab.Constructor = j, g.fn.tab.noConflict = function() {
        return g.fn.tab = i, this
    };
    var h = function(a) {
        a.preventDefault(), f.call(g(this), "show")
    };
    g(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', h).on("click.bs.tab.data-api", '[data-toggle="pill"]', h)
}(jQuery), + function(f) {
    function e(a) {
        return this.each(function() {
            var i = f(this),
                c = i.data("bs.affix"),
                b = "object" == typeof a && a;
            c || i.data("bs.affix", c = new h(this, b)), "string" == typeof a && c[a]()
        })
    }
    var h = function(a, c) {
        this.options = f.extend({}, h.DEFAULTS, c), this.$target = f(this.options.target).on("scroll.bs.affix.data-api", f.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", f.proxy(this.checkPositionWithEventLoop, this)), this.$element = f(a), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    h.VERSION = "3.3.7", h.RESET = "affix affix-top affix-bottom", h.DEFAULTS = {
        offset: 0,
        target: window
    }, h.prototype.getState = function(t, s, r, q) {
        var p = this.$target.scrollTop(),
            o = this.$element.offset(),
            n = this.$target.height();
        if (null != r && "top" == this.affixed) {
            return p < r && "top"
        }
        if ("bottom" == this.affixed) {
            return null != r ? !(p + this.unpin <= o.top) && "bottom" : !(p + n <= t - q) && "bottom"
        }
        var m = null == this.affixed,
            l = m ? p : o.top,
            k = m ? n : s;
        return null != r && p <= r ? "top" : null != q && l + k >= t - q && "bottom"
    }, h.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) {
            return this.pinnedOffset
        }
        this.$element.removeClass(h.RESET).addClass("affix");
        var d = this.$target.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - d
    }, h.prototype.checkPositionWithEventLoop = function() {
        setTimeout(f.proxy(this.checkPosition, this), 1)
    }, h.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var a = this.$element.height(),
                p = this.options.offset,
                o = p.top,
                n = p.bottom,
                m = Math.max(f(document).height(), f(document.body).height());
            "object" != typeof p && (n = o = p), "function" == typeof o && (o = p.top(this.$element)), "function" == typeof n && (n = p.bottom(this.$element));
            var l = this.getState(m, a, o, n);
            if (this.affixed != l) {
                null != this.unpin && this.$element.css("top", "");
                var k = "affix" + (l ? "-" + l : ""),
                    c = f.Event(k + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) {
                    return
                }
                this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == l && this.$element.offset({
                top: m - a - n
            })
        }
    };
    var g = f.fn.affix;
    f.fn.affix = e, f.fn.affix.Constructor = h, f.fn.affix.noConflict = function() {
        return f.fn.affix = g, this
    }, f(window).on("load", function() {
        f('[data-spy="affix"]').each(function() {
            var b = f(this),
                a = b.data();
            a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), e.call(b, a)
        })
    })
}(jQuery);
if ("undefined" == typeof jQuery) {
    var jQuery;
    jQuery = "function" == typeof require ? $ = require("jQuery") : $
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(g, f, j, i, h) {
            return jQuery.easing[jQuery.easing.def](g, f, j, i, h)
        },
        easeInQuad: function(g, f, j, i, h) {
            return i * (f /= h) * f + j
        },
        easeOutQuad: function(g, f, j, i, h) {
            return -i * (f /= h) * (f - 2) + j
        },
        easeInOutQuad: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f + j : -i / 2 * (--f * (f - 2) - 1) + j
        },
        easeInCubic: function(g, f, j, i, h) {
            return i * (f /= h) * f * f + j
        },
        easeOutCubic: function(g, f, j, i, h) {
            return i * ((f = f / h - 1) * f * f + 1) + j
        },
        easeInOutCubic: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f + j : i / 2 * ((f -= 2) * f * f + 2) + j
        },
        easeInQuart: function(g, f, j, i, h) {
            return i * (f /= h) * f * f * f + j
        },
        easeOutQuart: function(g, f, j, i, h) {
            return -i * ((f = f / h - 1) * f * f * f - 1) + j
        },
        easeInOutQuart: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f * f + j : -i / 2 * ((f -= 2) * f * f * f - 2) + j
        },
        easeInQuint: function(g, f, j, i, h) {
            return i * (f /= h) * f * f * f * f + j
        },
        easeOutQuint: function(g, f, j, i, h) {
            return i * ((f = f / h - 1) * f * f * f * f + 1) + j
        },
        easeInOutQuint: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f * f * f * f + j : i / 2 * ((f -= 2) * f * f * f * f + 2) + j
        },
        easeInSine: function(g, f, j, i, h) {
            return -i * Math.cos(f / h * (Math.PI / 2)) + i + j
        },
        easeOutSine: function(g, f, j, i, h) {
            return i * Math.sin(f / h * (Math.PI / 2)) + j
        },
        easeInOutSine: function(g, f, j, i, h) {
            return -i / 2 * (Math.cos(Math.PI * f / h) - 1) + j
        },
        easeInExpo: function(g, f, j, i, h) {
            return 0 == f ? j : i * Math.pow(2, 10 * (f / h - 1)) + j
        },
        easeOutExpo: function(g, f, j, i, h) {
            return f == h ? j + i : i * (-Math.pow(2, -10 * f / h) + 1) + j
        },
        easeInOutExpo: function(g, f, j, i, h) {
            return 0 == f ? j : f == h ? j + i : (f /= h / 2) < 1 ? i / 2 * Math.pow(2, 10 * (f - 1)) + j : i / 2 * (-Math.pow(2, -10 * --f) + 2) + j
        },
        easeInCirc: function(g, f, j, i, h) {
            return -i * (Math.sqrt(1 - (f /= h) * f) - 1) + j
        },
        easeOutCirc: function(g, f, j, i, h) {
            return i * Math.sqrt(1 - (f = f / h - 1) * f) + j
        },
        easeInOutCirc: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? -i / 2 * (Math.sqrt(1 - f * f) - 1) + j : i / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + j
        },
        easeInElastic: function(j, i, p, o, n) {
            var m = 1.70158,
                l = 0,
                k = o;
            if (0 == i) {
                return p
            }
            if (1 == (i /= n)) {
                return p + o
            }
            if (l || (l = 0.3 * n), k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return -(k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * (2 * Math.PI) / l)) + p
        },
        easeOutElastic: function(j, i, p, o, n) {
            var m = 1.70158,
                l = 0,
                k = o;
            if (0 == i) {
                return p
            }
            if (1 == (i /= n)) {
                return p + o
            }
            if (l || (l = 0.3 * n), k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return k * Math.pow(2, -10 * i) * Math.sin((i * n - m) * (2 * Math.PI) / l) + o + p
        },
        easeInOutElastic: function(j, i, p, o, n) {
            var m = 1.70158,
                l = 0,
                k = o;
            if (0 == i) {
                return p
            }
            if (2 == (i /= n / 2)) {
                return p + o
            }
            if (l || (l = n * (0.3 * 1.5)), k < Math.abs(o)) {
                k = o;
                var m = l / 4
            } else {
                var m = l / (2 * Math.PI) * Math.asin(o / k)
            }
            return 1 > i ? -0.5 * (k * Math.pow(2, 10 * (i -= 1)) * Math.sin((i * n - m) * (2 * Math.PI) / l)) + p : k * Math.pow(2, -10 * (i -= 1)) * Math.sin((i * n - m) * (2 * Math.PI) / l) * 0.5 + o + p
        },
        easeInBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158), k * (g /= j) * g * ((i + 1) * g - i) + l
        },
        easeOutBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158), k * ((g = g / j - 1) * g * ((i + 1) * g + i) + 1) + l
        },
        easeInOutBack: function(h, g, l, k, j, i) {
            return void 0 == i && (i = 1.70158), (g /= j / 2) < 1 ? k / 2 * (g * g * (((i *= 1.525) + 1) * g - i)) + l : k / 2 * ((g -= 2) * g * (((i *= 1.525) + 1) * g + i) + 2) + l
        },
        easeInBounce: function(g, f, j, i, h) {
            return i - jQuery.easing.easeOutBounce(g, h - f, 0, i, h) + j
        },
        easeOutBounce: function(g, f, j, i, h) {
            return (f /= h) < 1 / 2.75 ? i * (7.5625 * f * f) + j : 2 / 2.75 > f ? i * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + j : 2.5 / 2.75 > f ? i * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + j : i * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + j
        },
        easeInOutBounce: function(g, f, j, i, h) {
            return h / 2 > f ? 0.5 * jQuery.easing.easeInBounce(g, 2 * f, 0, i, h) + j : 0.5 * jQuery.easing.easeOutBounce(g, 2 * f - h, 0, i, h) + 0.5 * i + j
        }
    }), jQuery.extend(jQuery.easing, {
        easeInOutMaterial: function(g, f, j, i, h) {
            return (f /= h / 2) < 1 ? i / 2 * f * f + j : i / 4 * ((f -= 2) * f * f + 2) + j
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (! function(r) {
        function q(e) {
            var c = e.length,
                f = p.type(e);
            return "function" === f || p.isWindow(e) ? !1 : 1 === e.nodeType && c ? !0 : "array" === f || 0 === c || "number" == typeof c && c > 0 && c - 1 in e
        }
        if (!r.jQuery) {
            var p = function(d, c) {
                return new p.fn.init(d, c)
            };
            p.isWindow = function(b) {
                return null != b && b == b.window
            }, p.type = function(b) {
                return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? n[l.call(b)] || "object" : typeof b
            }, p.isArray = Array.isArray || function(b) {
                return "array" === p.type(b)
            }, p.isPlainObject = function(e) {
                var c;
                if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) {
                    return !1
                }
                try {
                    if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) {
                        return !1
                    }
                } catch (f) {
                    return !1
                }
                for (c in e) {}
                return void 0 === c || m.call(e, c)
            }, p.each = function(b, w, v) {
                var u, t = 0,
                    s = b.length,
                    i = q(b);
                if (v) {
                    if (i) {
                        for (; s > t && (u = w.apply(b[t], v), u !== !1); t++) {}
                    } else {
                        for (t in b) {
                            if (u = w.apply(b[t], v), u === !1) {
                                break
                            }
                        }
                    }
                } else {
                    if (i) {
                        for (; s > t && (u = w.call(b[t], t, b[t]), u !== !1); t++) {}
                    } else {
                        for (t in b) {
                            if (u = w.call(b[t], t, b[t]), u === !1) {
                                break
                            }
                        }
                    }
                }
                return b
            }, p.data = function(d, c, s) {
                if (void 0 === s) {
                    var i = d[p.expando],
                        h = i && o[i];
                    if (void 0 === c) {
                        return h
                    }
                    if (h && c in h) {
                        return h[c]
                    }
                } else {
                    if (void 0 !== c) {
                        var i = d[p.expando] || (d[p.expando] = ++p.uuid);
                        return o[i] = o[i] || {}, o[i][c] = s, s
                    }
                }
            }, p.removeData = function(d, c) {
                var h = d[p.expando],
                    g = h && o[h];
                g && p.each(c, function(f, e) {
                    delete g[e]
                })
            }, p.extend = function() {
                var B, A, z, x, w, v, u = arguments[0] || {},
                    t = 1,
                    s = arguments.length,
                    c = !1;
                for ("boolean" == typeof u && (c = u, u = arguments[t] || {}, t++), "object" != typeof u && "function" !== p.type(u) && (u = {}), t === s && (u = this, t--); s > t; t++) {
                    if (null != (w = arguments[t])) {
                        for (x in w) {
                            B = u[x], z = w[x], u !== z && (c && z && (p.isPlainObject(z) || (A = p.isArray(z))) ? (A ? (A = !1, v = B && p.isArray(B) ? B : []) : v = B && p.isPlainObject(B) ? B : {}, u[x] = p.extend(c, v, z)) : void 0 !== z && (u[x] = z))
                        }
                    }
                }
                return u
            }, p.queue = function(b, s, i) {
                function h(e, g) {
                    var f = g || [];
                    return null != e && (q(Object(e)) ? ! function(u, t) {
                        for (var x = +t.length, w = 0, v = u.length; x > w;) {
                            u[v++] = t[w++]
                        }
                        if (x !== x) {
                            for (; void 0 !== t[w];) {
                                u[v++] = t[w++]
                            }
                        }
                        return u.length = v, u
                    }(f, "string" == typeof e ? [e] : e) : [].push.call(f, e)), f
                }
                if (b) {
                    s = (s || "fx") + "queue";
                    var c = p.data(b, s);
                    return i ? (!c || p.isArray(i) ? c = p.data(b, s, h(i)) : c.push(i), c) : c || []
                }
            }, p.dequeue = function(d, c) {
                p.each(d.nodeType ? [d] : d, function(b, i) {
                    c = c || "fx";
                    var h = p.queue(i, c),
                        g = h.shift();
                    "inprogress" === g && (g = h.shift()), g && ("fx" === c && h.unshift("inprogress"), g.call(i, function() {
                        p.dequeue(i, c)
                    }))
                })
            }, p.fn = p.prototype = {
                init: function(b) {
                    if (b.nodeType) {
                        return this[0] = b, this
                    }
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var a = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: a.top + (r.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: a.left + (r.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function f() {
                        for (var b = this.offsetParent || document; b && "html" === !b.nodeType.toLowerCase && "static" === b.style.position;) {
                            b = b.offsetParent
                        }
                        return b || document
                    }
                    var c = this[0],
                        f = f.apply(c),
                        h = this.offset(),
                        g = /^(?:body|html)$/i.test(f.nodeName) ? {
                            top: 0,
                            left: 0
                        } : p(f).offset();
                    return h.top -= parseFloat(c.style.marginTop) || 0, h.left -= parseFloat(c.style.marginLeft) || 0, f.style && (g.top += parseFloat(f.style.borderTopWidth) || 0, g.left += parseFloat(f.style.borderLeftWidth) || 0), {
                        top: h.top - g.top,
                        left: h.left - g.left
                    }
                }
            };
            var o = {};
            p.expando = "velocity" + (new Date).getTime(), p.uuid = 0;
            for (var n = {}, m = n.hasOwnProperty, l = n.toString, k = "Boolean Number String Function Array Date RegExp Object Error".split(" "), j = 0; j < k.length; j++) {
                n["[object " + k[j] + "]"] = k[j].toLowerCase()
            }
            p.fn.init.prototype = p.fn, r.Velocity = {
                Utilities: p
            }
        }
    }(window), function(b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : b()
    }(function() {
        return function(W, V, U, T) {
            function S(g) {
                for (var f = -1, j = g ? g.length : 0, i = []; ++f < j;) {
                    var h = g[f];
                    h && i.push(h)
                }
                return i
            }

            function R(b) {
                return H.isWrapped(b) ? b = [].slice.call(b) : H.isNode(b) && (b = [b]), b
            }

            function Q(d) {
                var c = K.data(d, "velocity");
                return null === c ? T : c
            }

            function P(b) {
                return function(a) {
                    return Math.round(a * b) * (1 / b)
                }
            }

            function O(aw, av, au, at) {
                function ar(d, c) {
                    return 1 - 3 * c + 3 * d
                }

                function aq(d, c) {
                    return 3 * c - 6 * d
                }

                function ap(c) {
                    return 3 * c
                }

                function ao(e, d, f) {
                    return ((ar(d, f) * e + aq(d, f)) * e + ap(d)) * e
                }

                function an(e, d, f) {
                    return 3 * ar(d, f) * e * e + 2 * aq(d, f) * e + ap(d)
                }

                function am(a, j) {
                    for (var i = 0; ah > i; ++i) {
                        var h = an(j, aw, au);
                        if (0 === h) {
                            return j
                        }
                        var d = ao(j, aw, au) - a;
                        j -= d / h
                    }
                    return j
                }

                function al() {
                    for (var a = 0; ac > a; ++a) {
                        Y[a] = ao(a * ab, aw, au)
                    }
                }

                function ak(a, l, k) {
                    var j, i, d = 0;
                    do {
                        i = l + (k - l) / 2, j = ao(i, aw, au) - a, j > 0 ? k = i : l = i
                    } while (Math.abs(j) > ae && ++d < ad);
                    return i
                }

                function aj(a) {
                    for (var n = 0, m = 1, l = ac - 1; m != l && Y[m] <= a;
                        ++m) {
                        n += ab
                    }--m;
                    var k = (a - Y[m]) / (Y[m + 1] - Y[m]),
                        j = n + k * ab,
                        d = an(j, aw, au);
                    return d >= af ? am(a, j) : 0 == d ? j : ak(a, n, n + ab)
                }

                function ai() {
                    X = !0, (aw != av || au != at) && al()
                }
                var ah = 4,
                    af = 0.001,
                    ae = 1e-7,
                    ad = 10,
                    ac = 11,
                    ab = 1 / (ac - 1),
                    aa = "Float32Array" in V;
                if (4 !== arguments.length) {
                    return !1
                }
                for (var Z = 0; 4 > Z; ++Z) {
                    if ("number" != typeof arguments[Z] || isNaN(arguments[Z]) || !isFinite(arguments[Z])) {
                        return !1
                    }
                }
                aw = Math.min(aw, 1), au = Math.min(au, 1), aw = Math.max(aw, 0), au = Math.max(au, 0);
                var Y = aa ? new Float32Array(ac) : new Array(ac),
                    X = !1,
                    b = function(a) {
                        return X || ai(), aw === av && au === at ? a : 0 === a ? 0 : 1 === a ? 1 : ao(aj(a), av, at)
                    };
                b.getControlPoints = function() {
                    return [{
                        x: aw,
                        y: av
                    }, {
                        x: au,
                        y: at
                    }]
                };
                var ag = "generateBezier(" + [aw, av, au, at] + ")";
                return b.toString = function() {
                    return ag
                }, b
            }

            function N(e, d) {
                var f = e;
                return H.isString(e) ? D.Easings[e] || (f = !1) : f = H.isArray(e) && 1 === e.length ? P.apply(null, e) : H.isArray(e) && 2 === e.length ? C.apply(null, e.concat([d])) : H.isArray(e) && 4 === e.length ? O.apply(null, e) : !1, f === !1 && (f = D.Easings[D.defaults.easing] ? D.defaults.easing : E), f
            }

            function M(al) {
                if (al) {
                    var ak = (new Date).getTime(),
                        aj = D.State.calls.length;
                    aj > 10000 && (D.State.calls = S(D.State.calls));
                    for (var ai = 0; aj > ai; ai++) {
                        if (D.State.calls[ai]) {
                            var ah = D.State.calls[ai],
                                ag = ah[0],
                                af = ah[2],
                                ae = ah[3],
                                ad = !!ae,
                                ab = null;
                            ae || (ae = D.State.calls[ai][3] = ak - 16);
                            for (var Z = Math.min((ak - ae) / af.duration, 1), X = 0, t = ag.length; t > X; X++) {
                                var l = ag[X],
                                    e = l.element;
                                if (Q(e)) {
                                    var d = !1;
                                    if (af.display !== T && null !== af.display && "none" !== af.display) {
                                        if ("flex" === af.display) {
                                            var ac = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                            K.each(ac, function(f, c) {
                                                B.setPropertyValue(e, "display", c)
                                            })
                                        }
                                        B.setPropertyValue(e, "display", af.display)
                                    }
                                    af.visibility !== T && "hidden" !== af.visibility && B.setPropertyValue(e, "visibility", af.visibility);
                                    for (var aa in l) {
                                        if ("element" !== aa) {
                                            var Y, x = l[aa],
                                                v = H.isString(x.easing) ? D.Easings[x.easing] : x.easing;
                                            if (1 === Z) {
                                                Y = x.endValue
                                            } else {
                                                var p = x.endValue - x.startValue;
                                                if (Y = x.startValue + p * v(Z, af, p), !ad && Y === x.currentValue) {
                                                    continue
                                                }
                                            }
                                            if (x.currentValue = Y, "tween" === aa) {
                                                ab = Y
                                            } else {
                                                if (B.Hooks.registered[aa]) {
                                                    var m = B.Hooks.getRoot(aa),
                                                        k = Q(e).rootPropertyValueCache[m];
                                                    k && (x.rootPropertyValue = k)
                                                }
                                                var g = B.setPropertyValue(e, aa, x.currentValue + (0 === parseFloat(Y) ? "" : x.unitType), x.rootPropertyValue, x.scrollData);
                                                B.Hooks.registered[aa] && (Q(e).rootPropertyValueCache[m] = B.Normalizations.registered[m] ? B.Normalizations.registered[m]("extract", null, g[1]) : g[1]), "transform" === g[0] && (d = !0)
                                            }
                                        }
                                    }
                                    af.mobileHA && Q(e).transformCache.translate3d === T && (Q(e).transformCache.translate3d = "(0px, 0px, 0px)", d = !0), d && B.flushTransformCache(e)
                                }
                            }
                            af.display !== T && "none" !== af.display && (D.State.calls[ai][2].display = !1), af.visibility !== T && "hidden" !== af.visibility && (D.State.calls[ai][2].visibility = !1), af.progress && af.progress.call(ah[1], ah[1], Z, Math.max(0, ae + af.duration - ak), ae, ab), 1 === Z && L(ai)
                        }
                    }
                }
                D.State.isTicking && z(M)
            }

            function L(aa, Z) {
                if (!D.State.calls[aa]) {
                    return !1
                }
                for (var Y = D.State.calls[aa][0], X = D.State.calls[aa][1], x = D.State.calls[aa][2], w = D.State.calls[aa][4], v = !1, u = 0, t = Y.length; t > u; u++) {
                    var s = Y[u].element;
                    if (Z || x.loop || ("none" === x.display && B.setPropertyValue(s, "display", x.display), "hidden" === x.visibility && B.setPropertyValue(s, "visibility", x.visibility)), x.loop !== !0 && (K.queue(s)[1] === T || !/\.velocityQueueEntryFlag/i.test(K.queue(s)[1])) && Q(s)) {
                        Q(s).isAnimating = !1, Q(s).rootPropertyValueCache = {};
                        var r = !1;
                        K.each(B.Lists.transforms3D, function(h, f) {
                            var j = /^scale/.test(f) ? 1 : 0,
                                i = Q(s).transformCache[f];
                            Q(s).transformCache[f] !== T && new RegExp("^\\(" + j + "[^.]").test(i) && (r = !0, delete Q(s).transformCache[f])
                        }), x.mobileHA && (r = !0, delete Q(s).transformCache.translate3d), r && B.flushTransformCache(s), B.Values.removeClass(s, "velocity-animating")
                    }
                    if (!Z && x.complete && !x.loop && u === t - 1) {
                        try {
                            x.complete.call(X, X)
                        } catch (m) {
                            setTimeout(function() {
                                throw m
                            }, 1)
                        }
                    }
                    w && x.loop !== !0 && w(X), Q(s) && x.loop === !0 && !Z && (K.each(Q(s).tweensContainer, function(e, c) {
                        /^rotate/.test(e) && 360 === parseFloat(c.endValue) && (c.endValue = 0, c.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(c.endValue) && "%" === c.unitType && (c.endValue = 0, c.startValue = 100)
                    }), D(s, "reverse", {
                        loop: !0,
                        delay: x.delay
                    })), x.queue !== !1 && K.dequeue(s, x.queue)
                }
                D.State.calls[aa] = !1;
                for (var g = 0, d = D.State.calls.length; d > g; g++) {
                    if (D.State.calls[g] !== !1) {
                        v = !0;
                        break
                    }
                }
                v === !1 && (D.State.isTicking = !1, delete D.State.calls, D.State.calls = [])
            }
            var K, J = function() {
                    if (U.documentMode) {
                        return U.documentMode
                    }
                    for (var d = 7; d > 4; d--) {
                        var c = U.createElement("div");
                        if (c.innerHTML = "<!--[if IE " + d + "]><span></span><![endif]-->", c.getElementsByTagName("span").length) {
                            return c = null, d
                        }
                    }
                    return T
                }(),
                I = function() {
                    var b = 0;
                    return V.webkitRequestAnimationFrame || V.mozRequestAnimationFrame || function(a) {
                        var f, e = (new Date).getTime();
                        return f = Math.max(0, 16 - (e - b)), b = e + f, setTimeout(function() {
                            a(e + f)
                        }, f)
                    }
                }(),
                H = {
                    isString: function(b) {
                        return "string" == typeof b
                    },
                    isArray: Array.isArray || function(b) {
                        return "[object Array]" === Object.prototype.toString.call(b)
                    },
                    isFunction: function(b) {
                        return "[object Function]" === Object.prototype.toString.call(b)
                    },
                    isNode: function(b) {
                        return b && b.nodeType
                    },
                    isNodeList: function(b) {
                        return "object" == typeof b && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(b)) && b.length !== T && (0 === b.length || "object" == typeof b[0] && b[0].nodeType > 0)
                    },
                    isWrapped: function(b) {
                        return b && (b.jquery || V.Zepto && V.Zepto.zepto.isZ(b))
                    },
                    isSVG: function(b) {
                        return V.SVGElement && b instanceof V.SVGElement
                    },
                    isEmptyObject: function(d) {
                        for (var c in d) {
                            return !1
                        }
                        return !0
                    }
                },
                G = !1;
            if (W.fn && W.fn.jquery ? (K = W, G = !0) : K = V.Velocity.Utilities, 8 >= J && !G) {
                throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.")
            }
            if (7 >= J) {
                return void(jQuery.fn.velocity = jQuery.fn.animate)
            }
            var F = 400,
                E = "swing",
                D = {
                    State: {
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        isAndroid: /Android/i.test(navigator.userAgent),
                        isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                        isChrome: V.chrome,
                        isFirefox: /Firefox/i.test(navigator.userAgent),
                        prefixElement: U.createElement("div"),
                        prefixMatches: {},
                        scrollAnchor: null,
                        scrollPropertyLeft: null,
                        scrollPropertyTop: null,
                        isTicking: !1,
                        calls: []
                    },
                    CSS: {},
                    Utilities: K,
                    Redirects: {},
                    Easings: {},
                    Promise: V.Promise,
                    defaults: {
                        queue: "",
                        duration: F,
                        easing: E,
                        begin: T,
                        complete: T,
                        progress: T,
                        display: T,
                        visibility: T,
                        loop: !1,
                        delay: !1,
                        mobileHA: !0,
                        _cacheValues: !0
                    },
                    init: function(b) {
                        K.data(b, "velocity", {
                            isSVG: H.isSVG(b),
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
            V.pageYOffset !== T ? (D.State.scrollAnchor = V, D.State.scrollPropertyLeft = "pageXOffset", D.State.scrollPropertyTop = "pageYOffset") : (D.State.scrollAnchor = U.documentElement || U.body.parentNode || U.body, D.State.scrollPropertyLeft = "scrollLeft", D.State.scrollPropertyTop = "scrollTop");
            var C = function() {
                function f(b) {
                    return -b.tension * b.x - b.friction * b.v
                }

                function e(a, k, j) {
                    var i = {
                        x: a.x + j.dx * k,
                        v: a.v + j.dv * k,
                        tension: a.tension,
                        friction: a.friction
                    };
                    return {
                        dx: i.v,
                        dv: f(i)
                    }
                }

                function h(p, o) {
                    var n = {
                            dx: p.v,
                            dv: f(p)
                        },
                        m = e(p, 0.5 * o, n),
                        l = e(p, 0.5 * o, m),
                        k = e(p, o, l),
                        b = 1 / 6 * (n.dx + 2 * (m.dx + l.dx) + k.dx),
                        a = 1 / 6 * (n.dv + 2 * (m.dv + l.dv) + k.dv);
                    return p.x = p.x + b * o, p.v = p.v + a * o, p
                }
                return function g(v, u, t) {
                    var s, r, q, p = {
                            x: -1,
                            v: 0,
                            tension: null,
                            friction: null
                        },
                        o = [0],
                        n = 0,
                        d = 0.0001,
                        c = 0.016;
                    for (v = parseFloat(v) || 500, u = parseFloat(u) || 20, t = t || null, p.tension = v, p.friction = u, s = null !== t, s ? (n = g(v, u), r = n / t * c) : r = c; q = h(q || p, r), o.push(1 + q.x), n += 16, Math.abs(q.x) > d && Math.abs(q.v) > d;) {}
                    return s ? function(b) {
                        return o[b * (o.length - 1) | 0]
                    } : n
                }
            }();
            D.Easings = {
                linear: function(b) {
                    return b
                },
                swing: function(b) {
                    return 0.5 - Math.cos(b * Math.PI) / 2
                },
                spring: function(b) {
                    return 1 - Math.cos(4.5 * b * Math.PI) * Math.exp(6 * -b)
                }
            }, K.each([
                ["ease", [0.25, 0.1, 0.25, 1]],
                ["ease-in", [0.42, 0, 1, 1]],
                ["ease-out", [0, 0, 0.58, 1]],
                ["ease-in-out", [0.42, 0, 0.58, 1]],
                ["easeInSine", [0.47, 0, 0.745, 0.715]],
                ["easeOutSine", [0.39, 0.575, 0.565, 1]],
                ["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
                ["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
                ["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
                ["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
                ["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
                ["easeOutCubic", [0.215, 0.61, 0.355, 1]],
                ["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
                ["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
                ["easeOutQuart", [0.165, 0.84, 0.44, 1]],
                ["easeInOutQuart", [0.77, 0, 0.175, 1]],
                ["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
                ["easeOutQuint", [0.23, 1, 0.32, 1]],
                ["easeInOutQuint", [0.86, 0, 0.07, 1]],
                ["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
                ["easeOutExpo", [0.19, 1, 0.22, 1]],
                ["easeInOutExpo", [1, 0, 0, 1]],
                ["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
                ["easeOutCirc", [0.075, 0.82, 0.165, 1]],
                ["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
            ], function(d, c) {
                D.Easings[c[0]] = O.apply(null, c[1])
            });
            var B = D.CSS = {
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
                        for (var j = 0; j < B.Lists.colors.length; j++) {
                            var i = "color" === B.Lists.colors[j] ? "0 0 0 1" : "255 255 255 1";
                            B.Hooks.templates[B.Lists.colors[j]] = ["Red Green Blue Alpha", i]
                        }
                        var p, o, n;
                        if (J) {
                            for (p in B.Hooks.templates) {
                                o = B.Hooks.templates[p], n = o[0].split(" ");
                                var m = o[1].match(B.RegEx.valueSplit);
                                "Color" === n[0] && (n.push(n.shift()), m.push(m.shift()), B.Hooks.templates[p] = [n.join(" "), m.join(" ")])
                            }
                        }
                        for (p in B.Hooks.templates) {
                            o = B.Hooks.templates[p], n = o[0].split(" ");
                            for (var j in n) {
                                var l = p + n[j],
                                    k = j;
                                B.Hooks.registered[l] = [p, k]
                            }
                        }
                    },
                    getRoot: function(d) {
                        var c = B.Hooks.registered[d];
                        return c ? c[0] : d
                    },
                    cleanRootPropertyValue: function(d, c) {
                        return B.RegEx.valueUnwrap.test(c) && (c = c.match(B.RegEx.valueUnwrap)[1]), B.Values.isCSSNullValue(c) && (c = B.Hooks.templates[d][1]), c
                    },
                    extractValue: function(g, f) {
                        var j = B.Hooks.registered[g];
                        if (j) {
                            var i = j[0],
                                h = j[1];
                            return f = B.Hooks.cleanRootPropertyValue(i, f), f.toString().match(B.RegEx.valueSplit)[h]
                        }
                        return f
                    },
                    injectValue: function(j, i, p) {
                        var o = B.Hooks.registered[j];
                        if (o) {
                            var n, m, l = o[0],
                                k = o[1];
                            return p = B.Hooks.cleanRootPropertyValue(l, p), n = p.toString().match(B.RegEx.valueSplit), n[k] = i, m = n.join(" ")
                        }
                        return p
                    }
                },
                Normalizations: {
                    registered: {
                        clip: function(f, e, h) {
                            switch (f) {
                                case "name":
                                    return "clip";
                                case "extract":
                                    var g;
                                    return B.RegEx.wrappedValueAlreadyExtracted.test(h) ? g = h : (g = h.toString().match(B.RegEx.valueUnwrap), g = g ? g[1].replace(/,(\s+)?/g, " ") : h), g;
                                case "inject":
                                    return "rect(" + h + ")"
                            }
                        },
                        blur: function(g, f, j) {
                            switch (g) {
                                case "name":
                                    return D.State.isFirefox ? "filter" : "-webkit-filter";
                                case "extract":
                                    var i = parseFloat(j);
                                    if (!i && 0 !== i) {
                                        var h = j.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                        i = h ? h[1] : 0
                                    }
                                    return i;
                                case "inject":
                                    return parseFloat(j) ? "blur(" + j + ")" : "none"
                            }
                        },
                        opacity: function(f, e, h) {
                            if (8 >= J) {
                                switch (f) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var g = h.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return h = g ? g[1] / 100 : 1;
                                    case "inject":
                                        return e.style.zoom = 1, parseFloat(h) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(h), 10) + ")"
                                }
                            } else {
                                switch (f) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                        return h;
                                    case "inject":
                                        return h
                                }
                            }
                        }
                    },
                    register: function() {
                        9 >= J || D.State.isGingerbread || (B.Lists.transformsBase = B.Lists.transformsBase.concat(B.Lists.transforms3D));
                        for (var b = 0; b < B.Lists.transformsBase.length; b++) {
                            ! function() {
                                var a = B.Lists.transformsBase[b];
                                B.Normalizations.registered[a] = function(d, i, h) {
                                    switch (d) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return Q(i) === T || Q(i).transformCache[a] === T ? /^scale/i.test(a) ? 1 : 0 : Q(i).transformCache[a].replace(/[()]/g, "");
                                        case "inject":
                                            var g = !1;
                                            switch (a.substr(0, a.length - 1)) {
                                                case "translate":
                                                    g = !/(%|px|em|rem|vw|vh|\d)$/i.test(h);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    D.State.isAndroid && Q(i).transformCache[a] === T && 1 > h && (h = 1), g = !/(\d)$/i.test(h);
                                                    break;
                                                case "skew":
                                                    g = !/(deg|\d)$/i.test(h);
                                                    break;
                                                case "rotate":
                                                    g = !/(deg|\d)$/i.test(h)
                                            }
                                            return g || (Q(i).transformCache[a] = "(" + h + ")"), Q(i).transformCache[a]
                                    }
                                }
                            }()
                        }
                        for (var b = 0; b < B.Lists.colors.length; b++) {
                            ! function() {
                                var a = B.Lists.colors[b];
                                B.Normalizations.registered[a] = function(d, m, l) {
                                    switch (d) {
                                        case "name":
                                            return a;
                                        case "extract":
                                            var k;
                                            if (B.RegEx.wrappedValueAlreadyExtracted.test(l)) {
                                                k = l
                                            } else {
                                                var j, i = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(l) ? j = i[l] !== T ? i[l] : i.black : B.RegEx.isHex.test(l) ? j = "rgb(" + B.Values.hexToRgb(l).join(" ") + ")" : /^rgba?\(/i.test(l) || (j = i.black), k = (j || l).toString().match(B.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= J || 3 !== k.split(" ").length || (k += " 1"), k;
                                        case "inject":
                                            return 8 >= J ? 4 === l.split(" ").length && (l = l.split(/\s+/).slice(0, 3).join(" ")) : 3 === l.split(" ").length && (l += " 1"), (8 >= J ? "rgb" : "rgba") + "(" + l.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    }
                },
                Names: {
                    camelCase: function(b) {
                        return b.replace(/-(\w)/g, function(d, c) {
                            return c.toUpperCase()
                        })
                    },
                    SVGAttribute: function(d) {
                        var c = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                        return (J || D.State.isAndroid && !D.State.isChrome) && (c += "|transform"), new RegExp("^(" + c + ")$", "i").test(d)
                    },
                    prefixCheck: function(g) {
                        if (D.State.prefixMatches[g]) {
                            return [D.State.prefixMatches[g], !0]
                        }
                        for (var f = ["", "Webkit", "Moz", "ms", "O"], j = 0, i = f.length; i > j; j++) {
                            var h;
                            if (h = 0 === j ? g : f[j] + g.replace(/^\w/, function(b) {
                                    return b.toUpperCase()
                                }), H.isString(D.State.prefixElement.style[h])) {
                                return D.State.prefixMatches[g] = h, [h, !0]
                            }
                        }
                        return [g, !1]
                    }
                },
                Values: {
                    hexToRgb: function(f) {
                        var e, h = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                            g = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                        return f = f.replace(h, function(j, i, l, k) {
                            return i + i + l + l + k + k
                        }), e = g.exec(f), e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : [0, 0, 0]
                    },
                    isCSSNullValue: function(b) {
                        return 0 == b || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(b)
                    },
                    getUnitType: function(b) {
                        return /^(rotate|skew)/i.test(b) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(b) ? "" : "px"
                    },
                    getDisplayType: function(d) {
                        var c = d && d.tagName.toString().toLowerCase();
                        return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(c) ? "inline" : /^(li)$/i.test(c) ? "list-item" : /^(tr)$/i.test(c) ? "table-row" : /^(table)$/i.test(c) ? "table" : /^(tbody)$/i.test(c) ? "table-row-group" : "block"
                    },
                    addClass: function(d, c) {
                        d.classList ? d.classList.add(c) : d.className += (d.className.length ? " " : "") + c
                    },
                    removeClass: function(d, c) {
                        d.classList ? d.classList.remove(c) : d.className = d.className.toString().replace(new RegExp("(^|\\s)" + c.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                    }
                },
                getPropertyValue: function(v, u, t, s) {
                    function r(ab, aa) {
                        function Z() {
                            X && B.setPropertyValue(ab, "display", "none")
                        }
                        var Y = 0;
                        if (8 >= J) {
                            Y = K.css(ab, aa)
                        } else {
                            var X = !1;
                            if (/^(width|height)$/.test(aa) && 0 === B.getPropertyValue(ab, "display") && (X = !0, B.setPropertyValue(ab, "display", B.Values.getDisplayType(ab))), !s) {
                                if ("height" === aa && "border-box" !== B.getPropertyValue(ab, "boxSizing").toString().toLowerCase()) {
                                    var x = ab.offsetHeight - (parseFloat(B.getPropertyValue(ab, "borderTopWidth")) || 0) - (parseFloat(B.getPropertyValue(ab, "borderBottomWidth")) || 0) - (parseFloat(B.getPropertyValue(ab, "paddingTop")) || 0) - (parseFloat(B.getPropertyValue(ab, "paddingBottom")) || 0);
                                    return Z(), x
                                }
                                if ("width" === aa && "border-box" !== B.getPropertyValue(ab, "boxSizing").toString().toLowerCase()) {
                                    var w = ab.offsetWidth - (parseFloat(B.getPropertyValue(ab, "borderLeftWidth")) || 0) - (parseFloat(B.getPropertyValue(ab, "borderRightWidth")) || 0) - (parseFloat(B.getPropertyValue(ab, "paddingLeft")) || 0) - (parseFloat(B.getPropertyValue(ab, "paddingRight")) || 0);
                                    return Z(), w
                                }
                            }
                            var h;
                            h = Q(ab) === T ? V.getComputedStyle(ab, null) : Q(ab).computedStyle ? Q(ab).computedStyle : Q(ab).computedStyle = V.getComputedStyle(ab, null), "borderColor" === aa && (aa = "borderTopColor"), Y = 9 === J && "filter" === aa ? h.getPropertyValue(aa) : h[aa], ("" === Y || null === Y) && (Y = ab.style[aa]), Z()
                        }
                        if ("auto" === Y && /^(top|right|bottom|left)$/i.test(aa)) {
                            var f = r(ab, "position");
                            ("fixed" === f || "absolute" === f && /top|left/i.test(aa)) && (Y = K(ab).position()[aa] + "px")
                        }
                        return Y
                    }
                    var q;
                    if (B.Hooks.registered[u]) {
                        var n = u,
                            m = B.Hooks.getRoot(n);
                        t === T && (t = B.getPropertyValue(v, B.Names.prefixCheck(m)[0])), B.Normalizations.registered[m] && (t = B.Normalizations.registered[m]("extract", v, t)), q = B.Hooks.extractValue(n, t)
                    } else {
                        if (B.Normalizations.registered[u]) {
                            var g, d;
                            g = B.Normalizations.registered[u]("name", v), "transform" !== g && (d = r(v, B.Names.prefixCheck(g)[0]), B.Values.isCSSNullValue(d) && B.Hooks.templates[u] && (d = B.Hooks.templates[u][1])), q = B.Normalizations.registered[u]("extract", v, d)
                        }
                    }
                    if (!/^[\d-]/.test(q)) {
                        if (Q(v) && Q(v).isSVG && B.Names.SVGAttribute(u)) {
                            if (/^(height|width)$/i.test(u)) {
                                try {
                                    q = v.getBBox()[u]
                                } catch (b) {
                                    q = 0
                                }
                            } else {
                                q = v.getAttribute(u)
                            }
                        } else {
                            q = r(v, B.Names.prefixCheck(u)[0])
                        }
                    }
                    return B.Values.isCSSNullValue(q) && (q = 0), D.debug >= 2 && console.log("Get " + u + ": " + q), q
                },
                setPropertyValue: function(r, q, p, o, n) {
                    var m = q;
                    if ("scroll" === q) {
                        n.container ? n.container["scroll" + n.direction] = p : "Left" === n.direction ? V.scrollTo(p, n.alternateValue) : V.scrollTo(n.alternateValue, p)
                    } else {
                        if (B.Normalizations.registered[q] && "transform" === B.Normalizations.registered[q]("name", r)) {
                            B.Normalizations.registered[q]("inject", r, p), m = "transform", p = Q(r).transformCache[q]
                        } else {
                            if (B.Hooks.registered[q]) {
                                var l = q,
                                    g = B.Hooks.getRoot(q);
                                o = o || B.getPropertyValue(r, g), p = B.Hooks.injectValue(l, p, o), q = g
                            }
                            if (B.Normalizations.registered[q] && (p = B.Normalizations.registered[q]("inject", r, p), q = B.Normalizations.registered[q]("name", r)), m = B.Names.prefixCheck(q)[0], 8 >= J) {
                                try {
                                    r.style[m] = p
                                } catch (b) {
                                    D.debug && console.log("Browser does not support [" + p + "] for [" + m + "]")
                                }
                            } else {
                                Q(r) && Q(r).isSVG && B.Names.SVGAttribute(q) ? r.setAttribute(q, p) : r.style[m] = p
                            }
                            D.debug >= 2 && console.log("Set " + q + " (" + m + "): " + p)
                        }
                    }
                    return [m, p]
                },
                flushTransformCache: function(h) {
                    function g(a) {
                        return parseFloat(B.getPropertyValue(h, a))
                    }
                    var l = "";
                    if ((J || D.State.isAndroid && !D.State.isChrome) && Q(h).isSVG) {
                        var k = {
                            translate: [g("translateX"), g("translateY")],
                            skewX: [g("skewX")],
                            skewY: [g("skewY")],
                            scale: 1 !== g("scale") ? [g("scale"), g("scale")] : [g("scaleX"), g("scaleY")],
                            rotate: [g("rotateZ"), 0, 0]
                        };
                        K.each(Q(h).transformCache, function(b) {
                            /^translate/i.test(b) ? b = "translate" : /^scale/i.test(b) ? b = "scale" : /^rotate/i.test(b) && (b = "rotate"), k[b] && (l += b + "(" + k[b].join(" ") + ") ", delete k[b])
                        })
                    } else {
                        var j, i;
                        K.each(Q(h).transformCache, function(a) {
                            return j = Q(h).transformCache[a], "transformPerspective" === a ? (i = j, !0) : (9 === J && "rotateZ" === a && (a = "rotate"), void(l += a + j + " "))
                        }), i && (l = "perspective" + i + " " + l)
                    }
                    B.setPropertyValue(h, "transform", l)
                }
            };
            B.Hooks.register(), B.Normalizations.register(), D.hook = function(f, d, h) {
                var g = T;
                return f = R(f), K.each(f, function(b, e) {
                    if (Q(e) === T && D.init(e), h === T) {
                        g === T && (g = D.CSS.getPropertyValue(e, d))
                    } else {
                        var c = D.CSS.setPropertyValue(e, d, h);
                        "transform" === c[0] && D.CSS.flushTransformCache(e), g = c
                    }
                }), g
            };
            var A = function() {
                function ah() {
                    return af ? Z.promise || null : ae
                }

                function ag() {
                    function n(aD) {
                        function aC(aF, aE) {
                            var aI = T,
                                aH = T,
                                aG = T;
                            return H.isArray(aF) ? (aI = aF[0], !H.isArray(aF[1]) && /^[\d-]/.test(aF[1]) || H.isFunction(aF[1]) || B.RegEx.isHex.test(aF[1]) ? aG = aF[1] : (H.isString(aF[1]) && !B.RegEx.isHex.test(aF[1]) || H.isArray(aF[1])) && (aH = aE ? aF[1] : N(aF[1], q.duration), aF[2] !== T && (aG = aF[2]))) : aI = aF, aE || (aH = aH || q.easing), H.isFunction(aI) && (aI = aI.call(s, j, l)), H.isFunction(aG) && (aG = aG.call(s, j, l)), [aI || 0, aH, aG]
                        }

                        function aB(aF, aE) {
                            var aH, aG;
                            return aG = (aE || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(aI) {
                                return aH = aI, ""
                            }), aH || (aH = B.Values.getUnitType(aF)), [aG, aH]
                        }

                        function az() {
                            var aE = {
                                    myParent: s.parentNode || U.body,
                                    position: B.getPropertyValue(s, "position"),
                                    fontSize: B.getPropertyValue(s, "fontSize")
                                },
                                aJ = aE.position === k.lastPosition && aE.myParent === k.lastParent,
                                aI = aE.fontSize === k.lastFontSize;
                            k.lastParent = aE.myParent, k.lastPosition = aE.position, k.lastFontSize = aE.fontSize;
                            var aH = 100,
                                aG = {};
                            if (aI && aJ) {
                                aG.emToPx = k.lastEmToPx, aG.percentToPxWidth = k.lastPercentToPxWidth, aG.percentToPxHeight = k.lastPercentToPxHeight
                            } else {
                                var aF = Q(s).isSVG ? U.createElementNS("http://www.w3.org/2000/svg", "rect") : U.createElement("div");
                                D.init(aF), aE.myParent.appendChild(aF), K.each(["overflow", "overflowX", "overflowY"], function(aL, aK) {
                                    D.CSS.setPropertyValue(aF, aK, "hidden")
                                }), D.CSS.setPropertyValue(aF, "position", aE.position), D.CSS.setPropertyValue(aF, "fontSize", aE.fontSize), D.CSS.setPropertyValue(aF, "boxSizing", "content-box"), K.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(aL, aK) {
                                    D.CSS.setPropertyValue(aF, aK, aH + "%")
                                }), D.CSS.setPropertyValue(aF, "paddingLeft", aH + "em"), aG.percentToPxWidth = k.lastPercentToPxWidth = (parseFloat(B.getPropertyValue(aF, "width", null, !0)) || 1) / aH, aG.percentToPxHeight = k.lastPercentToPxHeight = (parseFloat(B.getPropertyValue(aF, "height", null, !0)) || 1) / aH, aG.emToPx = k.lastEmToPx = (parseFloat(B.getPropertyValue(aF, "paddingLeft")) || 1) / aH, aE.myParent.removeChild(aF)
                            }
                            return null === k.remToPx && (k.remToPx = parseFloat(B.getPropertyValue(U.body, "fontSize")) || 16), null === k.vwToPx && (k.vwToPx = parseFloat(V.innerWidth) / 100, k.vhToPx = parseFloat(V.innerHeight) / 100), aG.remToPx = k.remToPx, aG.vwToPx = k.vwToPx, aG.vhToPx = k.vhToPx, D.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(aG), s), aG
                        }
                        if (q.begin && 0 === j) {
                            try {
                                q.begin.call(ac, ac)
                            } catch (aw) {
                                setTimeout(function() {
                                    throw aw
                                }, 1)
                            }
                        }
                        if ("scroll" === Y) {
                            var at, aq, aA, ay = /^x$/i.test(q.axis) ? "Left" : "Top",
                                ax = parseFloat(q.offset) || 0;
                            q.container ? H.isWrapped(q.container) || H.isNode(q.container) ? (q.container = q.container[0] || q.container, at = q.container["scroll" + ay], aA = at + K(s).position()[ay.toLowerCase()] + ax) : q.container = null : (at = D.State.scrollAnchor[D.State["scrollProperty" + ay]], aq = D.State.scrollAnchor[D.State["scrollProperty" + ("Left" === ay ? "Top" : "Left")]], aA = K(s).offset()[ay.toLowerCase()] + ax), o = {
                                scroll: {
                                    rootPropertyValue: !1,
                                    startValue: at,
                                    currentValue: at,
                                    endValue: aA,
                                    unitType: "",
                                    easing: q.easing,
                                    scrollData: {
                                        container: q.container,
                                        direction: ay,
                                        alternateValue: aq
                                    }
                                },
                                element: s
                            }, D.debug && console.log("tweensContainer (scroll): ", o.scroll, s)
                        } else {
                            if ("reverse" === Y) {
                                if (!Q(s).tweensContainer) {
                                    return void K.dequeue(s, q.queue)
                                }
                                "none" === Q(s).opts.display && (Q(s).opts.display = "auto"), "hidden" === Q(s).opts.visibility && (Q(s).opts.visibility = "visible"), Q(s).opts.loop = !1, Q(s).opts.begin = null, Q(s).opts.complete = null, w.easing || delete q.easing, w.duration || delete q.duration, q = K.extend({}, Q(s).opts, q);
                                var av = K.extend(!0, {}, Q(s).tweensContainer);
                                for (var au in av) {
                                    if ("element" !== au) {
                                        var ar = av[au].startValue;
                                        av[au].startValue = av[au].currentValue = av[au].endValue, av[au].endValue = ar, H.isEmptyObject(w) || (av[au].easing = q.easing), D.debug && console.log("reverse tweensContainer (" + au + "): " + JSON.stringify(av[au]), s)
                                    }
                                }
                                o = av
                            } else {
                                if ("start" === Y) {
                                    var av;
                                    Q(s).tweensContainer && Q(s).isAnimating === !0 && (av = Q(s).tweensContainer), K.each(aa, function(aO, aN) {
                                        if (RegExp("^" + B.Lists.colors.join("$|^") + "$").test(aO)) {
                                            var aM = aC(aN, !0),
                                                aL = aM[0],
                                                aK = aM[1],
                                                aJ = aM[2];
                                            if (B.RegEx.isHex.test(aL)) {
                                                for (var aI = ["Red", "Green", "Blue"], aH = B.Values.hexToRgb(aL), aG = aJ ? B.Values.hexToRgb(aJ) : T, aF = 0; aF < aI.length; aF++) {
                                                    var aE = [aH[aF]];
                                                    aK && aE.push(aK), aG !== T && aE.push(aG[aF]), aa[aO + aI[aF]] = aE
                                                }
                                                delete aa[aO]
                                            }
                                        }
                                    });
                                    for (var ap in aa) {
                                        var ao = aC(aa[ap]),
                                            an = ao[0],
                                            am = ao[1],
                                            al = ao[2];
                                        ap = B.Names.camelCase(ap);
                                        var ak = B.Hooks.getRoot(ap),
                                            aj = !1;
                                        if (Q(s).isSVG || "tween" === ak || B.Names.prefixCheck(ak)[1] !== !1 || B.Normalizations.registered[ak] !== T) {
                                            (q.display !== T && null !== q.display && "none" !== q.display || q.visibility !== T && "hidden" !== q.visibility) && /opacity|filter/.test(ap) && !al && 0 !== an && (al = 0), q._cacheValues && av && av[ap] ? (al === T && (al = av[ap].endValue + av[ap].unitType), aj = Q(s).rootPropertyValueCache[ak]) : B.Hooks.registered[ap] ? al === T ? (aj = B.getPropertyValue(s, ak), al = B.getPropertyValue(s, ap, aj)) : aj = B.Hooks.templates[ak][1] : al === T && (al = B.getPropertyValue(s, ap));
                                            var ai, x, i, h = !1;
                                            if (ai = aB(ap, al), al = ai[0], i = ai[1], ai = aB(ap, an), an = ai[0].replace(/^([+-\/*])=/, function(aF, aE) {
                                                    return h = aE, ""
                                                }), x = ai[1], al = parseFloat(al) || 0, an = parseFloat(an) || 0, "%" === x && (/^(fontSize|lineHeight)$/.test(ap) ? (an /= 100, x = "em") : /^scale/.test(ap) ? (an /= 100, x = "") : /(Red|Green|Blue)$/i.test(ap) && (an = an / 100 * 255, x = "")), /[\/*]/.test(h)) {
                                                x = i
                                            } else {
                                                if (i !== x && 0 !== al) {
                                                    if (0 === an) {
                                                        x = i
                                                    } else {
                                                        u = u || az();
                                                        var e = /margin|padding|left|right|width|text|word|letter/i.test(ap) || /X$/.test(ap) || "x" === ap ? "x" : "y";
                                                        switch (i) {
                                                            case "%":
                                                                al *= "x" === e ? u.percentToPxWidth : u.percentToPxHeight;
                                                                break;
                                                            case "px":
                                                                break;
                                                            default:
                                                                al *= u[i + "ToPx"]
                                                        }
                                                        switch (x) {
                                                            case "%":
                                                                al *= 1 / ("x" === e ? u.percentToPxWidth : u.percentToPxHeight);
                                                                break;
                                                            case "px":
                                                                break;
                                                            default:
                                                                al *= 1 / u[x + "ToPx"]
                                                        }
                                                    }
                                                }
                                            }
                                            switch (h) {
                                                case "+":
                                                    an = al + an;
                                                    break;
                                                case "-":
                                                    an = al - an;
                                                    break;
                                                case "*":
                                                    an = al * an;
                                                    break;
                                                case "/":
                                                    an = al / an
                                            }
                                            o[ap] = {
                                                rootPropertyValue: aj,
                                                startValue: al,
                                                currentValue: al,
                                                endValue: an,
                                                unitType: x,
                                                easing: am
                                            }, D.debug && console.log("tweensContainer (" + ap + "): " + JSON.stringify(o[ap]), s)
                                        } else {
                                            D.debug && console.log("Skipping [" + ak + "] due to a lack of browser support.")
                                        }
                                    }
                                    o.element = s
                                }
                            }
                        }
                        o.element && (B.Values.addClass(s, "velocity-animating"), g.push(o), "" === q.queue && (Q(s).tweensContainer = o, Q(s).opts = q), Q(s).isAnimating = !0, j === l - 1 ? (D.State.calls.push([g, ac, q, null, Z.resolver]), D.State.isTicking === !1 && (D.State.isTicking = !0, M())) : j++)
                    }
                    var u, s = this,
                        q = K.extend({}, D.defaults, w),
                        o = {};
                    switch (Q(s) === T && D.init(s), parseFloat(q.delay) && q.queue !== !1 && K.queue(s, q.queue, function(e) {
                        D.velocityQueueEntryFlag = !0, Q(s).delayTimer = {
                            setTimeout: setTimeout(e, parseFloat(q.delay)),
                            next: e
                        }
                    }), q.duration.toString().toLowerCase()) {
                        case "fast":
                            q.duration = 200;
                            break;
                        case "normal":
                            q.duration = F;
                            break;
                        case "slow":
                            q.duration = 600;
                            break;
                        default:
                            q.duration = parseFloat(q.duration) || 1
                    }
                    D.mock !== !1 && (D.mock === !0 ? q.duration = q.delay = 1 : (q.duration *= parseFloat(D.mock) || 1, q.delay *= parseFloat(D.mock) || 1)), q.easing = N(q.easing, q.duration), q.begin && !H.isFunction(q.begin) && (q.begin = null), q.progress && !H.isFunction(q.progress) && (q.progress = null), q.complete && !H.isFunction(q.complete) && (q.complete = null), q.display !== T && null !== q.display && (q.display = q.display.toString().toLowerCase(), "auto" === q.display && (q.display = D.CSS.Values.getDisplayType(s))), q.visibility !== T && null !== q.visibility && (q.visibility = q.visibility.toString().toLowerCase()), q.mobileHA = q.mobileHA && D.State.isMobile && !D.State.isGingerbread, q.queue === !1 ? q.delay ? setTimeout(n, q.delay) : n() : K.queue(s, q.queue, function(a, e) {
                        return e === !0 ? (Z.promise && Z.resolver(ac), !0) : (D.velocityQueueEntryFlag = !0, void n(a))
                    }), "" !== q.queue && "fx" !== q.queue || "inprogress" === K.queue(s)[0] || K.dequeue(s)
                }
                var af, ae, ad, ac, aa, w, t = arguments[0] && (arguments[0].p || K.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || H.isString(arguments[0].properties));
                if (H.isWrapped(this) ? (af = !1, ad = 0, ac = this, ae = this) : (af = !0, ad = 1, ac = t ? arguments[0].elements || arguments[0].e : arguments[0]), ac = R(ac)) {
                    t ? (aa = arguments[0].properties || arguments[0].p, w = arguments[0].options || arguments[0].o) : (aa = arguments[ad], w = arguments[ad + 1]);
                    var l = ac.length,
                        j = 0;
                    if (!/^(stop|finish)$/i.test(aa) && !K.isPlainObject(w)) {
                        var f = ad + 1;
                        w = {};
                        for (var ab = f; ab < arguments.length; ab++) {
                            H.isArray(arguments[ab]) || !/^(fast|normal|slow)$/i.test(arguments[ab]) && !/^\d/.test(arguments[ab]) ? H.isString(arguments[ab]) || H.isArray(arguments[ab]) ? w.easing = arguments[ab] : H.isFunction(arguments[ab]) && (w.complete = arguments[ab]) : w.duration = arguments[ab]
                        }
                    }
                    var Z = {
                        promise: null,
                        resolver: null,
                        rejecter: null
                    };
                    af && D.Promise && (Z.promise = new D.Promise(function(h, e) {
                        Z.resolver = h, Z.rejecter = e
                    }));
                    var Y;
                    switch (aa) {
                        case "scroll":
                            Y = "scroll";
                            break;
                        case "reverse":
                            Y = "reverse";
                            break;
                        case "finish":
                        case "stop":
                            K.each(ac, function(h, e) {
                                Q(e) && Q(e).delayTimer && (clearTimeout(Q(e).delayTimer.setTimeout), Q(e).delayTimer.next && Q(e).delayTimer.next(), delete Q(e).delayTimer)
                            });
                            var X = [];
                            return K.each(D.State.calls, function(h, e) {
                                e && K.each(e[1], function(n, i) {
                                    var a = w === T ? "" : w;
                                    return a === !0 || e[2].queue === a || w === T && e[2].queue === !1 ? void K.each(ac, function(q, o) {
                                        o === i && ((w === !0 || H.isString(w)) && (K.each(K.queue(o, H.isString(w) ? w : ""), function(u, s) {
                                            H.isFunction(s) && s(null, !0)
                                        }), K.queue(o, H.isString(w) ? w : "", [])), "stop" === aa ? (Q(o) && Q(o).tweensContainer && a !== !1 && K.each(Q(o).tweensContainer, function(u, s) {
                                            s.endValue = s.currentValue
                                        }), X.push(h)) : "finish" === aa && (e[2].duration = 1))
                                    }) : !0
                                })
                            }), "stop" === aa && (K.each(X, function(h, e) {
                                L(e, !0)
                            }), Z.promise && Z.resolver(ac)), ah();
                        default:
                            if (!K.isPlainObject(aa) || H.isEmptyObject(aa)) {
                                if (H.isString(aa) && D.Redirects[aa]) {
                                    var v = K.extend({}, w),
                                        r = v.duration,
                                        p = v.delay || 0;
                                    return v.backwards === !0 && (ac = K.extend(!0, [], ac).reverse()), K.each(ac, function(h, e) {
                                        parseFloat(v.stagger) ? v.delay = p + parseFloat(v.stagger) * h : H.isFunction(v.stagger) && (v.delay = p + v.stagger.call(e, h, l)), v.drag && (v.duration = parseFloat(r) || (/^(callout|transition)/.test(aa) ? 1000 : F), v.duration = Math.max(v.duration * (v.backwards ? 1 - h / l : (h + 1) / l), 0.75 * v.duration, 200)), D.Redirects[aa].call(e, e, v || {}, h, l, ac, Z.promise ? Z : T)
                                    }), ah()
                                }
                                var m = "Velocity: First argument (" + aa + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                return Z.promise ? Z.rejecter(new Error(m)) : console.log(m), ah()
                            }
                            Y = "start"
                    }
                    var k = {
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
                        g = [];
                    K.each(ac, function(h, e) {
                        H.isNode(e) && ag.call(e)
                    });
                    var d, v = K.extend({}, D.defaults, w);
                    if (v.loop = parseInt(v.loop), d = 2 * v.loop - 1, v.loop) {
                        for (var c = 0; d > c; c++) {
                            var b = {
                                delay: v.delay,
                                progress: v.progress
                            };
                            c === d - 1 && (b.display = v.display, b.visibility = v.visibility, b.complete = v.complete), A(ac, "reverse", b)
                        }
                    }
                    return ah()
                }
            };
            D = K.extend(A, D), D.animate = A;
            var z = V.requestAnimationFrame || I;
            return D.State.isMobile || U.hidden === T || U.addEventListener("visibilitychange", function() {
                U.hidden ? (z = function(b) {
                    return setTimeout(function() {
                        b(!0)
                    }, 16)
                }, M()) : z = V.requestAnimationFrame || I
            }), W.Velocity = D, W !== V && (W.fn.velocity = A, W.fn.velocity.defaults = D.defaults), K.each(["Down", "Up"], function(d, c) {
                D.Redirects["slide" + c] = function(w, v, u, t, s, r) {
                    var q = K.extend({}, v),
                        p = q.begin,
                        o = q.complete,
                        m = {
                            height: "",
                            marginTop: "",
                            marginBottom: "",
                            paddingTop: "",
                            paddingBottom: ""
                        },
                        b = {};
                    q.display === T && (q.display = "Down" === c ? "inline" === D.CSS.Values.getDisplayType(w) ? "inline-block" : "block" : "none"), q.begin = function() {
                        p && p.call(s, s);
                        for (var e in m) {
                            b[e] = w.style[e];
                            var a = D.CSS.getPropertyValue(w, e);
                            m[e] = "Down" === c ? [a, 0] : [0, a]
                        }
                        b.overflow = w.style.overflow, w.style.overflow = "hidden"
                    }, q.complete = function() {
                        for (var a in b) {
                            w.style[a] = b[a]
                        }
                        o && o.call(s, s), r && r.resolver(s)
                    }, D(w, m, q)
                }
            }), K.each(["In", "Out"], function(d, c) {
                D.Redirects["fade" + c] = function(s, r, q, p, o, n) {
                    var m = K.extend({}, r),
                        l = {
                            opacity: "In" === c ? 1 : 0
                        },
                        b = m.complete;
                    m.complete = q !== p - 1 ? m.begin = null : function() {
                        b && b.call(o, o), n && n.resolver(o)
                    }, m.display === T && (m.display = "In" === c ? "auto" : "none"), D(this, l, m)
                }
            }), D
        }(window.jQuery || window.Zepto || window, window, document)
    })), ! function(a7, a6, a5, a2) {
        function a1(e, d, f) {
            return setTimeout(aS(e, f), d)
        }

        function a0(e, d, f) {
            return Array.isArray(e) ? (aZ(e, f[d], f), !0) : !1
        }

        function aZ(f, d, h) {
            var g;
            if (f) {
                if (f.forEach) {
                    f.forEach(d, h)
                } else {
                    if (f.length !== a2) {
                        for (g = 0; g < f.length;) {
                            d.call(h, f[g], g, f), g++
                        }
                    } else {
                        for (g in f) {
                            f.hasOwnProperty(g) && d.call(h, f[g], g, f)
                        }
                    }
                }
            }
        }

        function aY(g, d, j) {
            for (var i = Object.keys(d), h = 0; h < i.length;) {
                (!j || j && g[i[h]] === a2) && (g[i[h]] = d[i[h]]), h++
            }
            return g
        }

        function aV(d, c) {
            return aY(d, c, !0)
        }

        function aU(g, f, j) {
            var i, h = f.prototype;
            i = g.prototype = Object.create(h), i.constructor = g, i._super = h, j && aY(i, j)
        }

        function aS(d, c) {
            return function() {
                return d.apply(c, arguments)
            }
        }

        function aR(d, c) {
            return typeof d == aj ? d.apply(c ? c[0] || a2 : a2, c) : d
        }

        function aQ(d, c) {
            return d === a2 ? c : d
        }

        function aO(e, d, f) {
            aZ(aJ(d), function(a) {
                e.addEventListener(a, f, !1)
            })
        }

        function aN(e, d, f) {
            aZ(aJ(d), function(a) {
                e.removeEventListener(a, f, !1)
            })
        }

        function aL(d, c) {
            for (; d;) {
                if (d == c) {
                    return !0
                }
                d = d.parentNode
            }
            return !1
        }

        function aK(d, c) {
            return d.indexOf(c) > -1
        }

        function aJ(b) {
            return b.trim().split(/\s+/g)
        }

        function aI(f, e, h) {
            if (f.indexOf && !h) {
                return f.indexOf(e)
            }
            for (var g = 0; g < f.length;) {
                if (h && f[g][h] == e || !h && f[g] === e) {
                    return g
                }
                g++
            }
            return -1
        }

        function aH(b) {
            return Array.prototype.slice.call(b, 0)
        }

        function aG(i, h, n) {
            for (var m = [], l = [], k = 0; k < i.length;) {
                var j = h ? i[k][h] : i[k];
                aI(l, j) < 0 && m.push(i[k]), l[k] = j, k++
            }
            return n && (m = h ? m.sort(function(b, d) {
                return b[h] > d[h]
            }) : m.sort()), m
        }

        function aF(h, d) {
            for (var l, k, j = d[0].toUpperCase() + d.slice(1), i = 0; i < aW.length;) {
                if (l = aW[i], k = l ? l + j : d, k in h) {
                    return k
                }
                i++
            }
            return a2
        }

        function aE() {
            return a3++
        }

        function aD(d) {
            var c = d.ownerDocument;
            return c.defaultView || c.parentWindow
        }

        function aB(e, d) {
            var f = this;
            this.manager = e, this.callback = d, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(a) {
                aR(e.options.enable, [e]) && f.handler(a)
            }, this.init()
        }

        function aA(e) {
            var d, f = e.options.inputClass;
            return new(d = f ? f : cc ? bs : bZ ? bn : al ? bl : bt)(e, bL)
        }

        function bL(i, h, n) {
            var m = n.pointers.length,
                l = n.changedPointers.length,
                k = h & b1 && 0 === m - l,
                j = h & (b6 | bU) && 0 === m - l;
            n.isFirst = !!k, n.isFinal = !!j, k && (i.session = {}), n.eventType = h, bK(i, n), i.emit("hammer.input", n), i.recognize(n), i.session.prevInput = n
        }

        function bK(t, s) {
            var r = t.session,
                q = s.pointers,
                p = q.length;
            r.firstInput || (r.firstInput = bE(s)), p > 1 && !r.firstMultiple ? r.firstMultiple = bE(s) : 1 === p && (r.firstMultiple = !1);
            var o = r.firstInput,
                n = r.firstMultiple,
                m = n ? n.center : o.center,
                l = s.center = bD(q);
            s.timeStamp = bF(), s.deltaTime = s.timeStamp - o.timeStamp, s.angle = bx(m, l), s.distance = bA(m, l), bJ(r, s), s.offsetDirection = bB(s.deltaX, s.deltaY), s.scale = n ? bu(n.pointers, q) : 1, s.rotation = n ? bw(n.pointers, q) : 0, bH(r, s);
            var k = t.element;
            aL(s.srcEvent.target, k) && (k = s.srcEvent.target), s.target = k
        }

        function bJ(h, g) {
            var l = g.center,
                k = h.offsetDelta || {},
                j = h.prevDelta || {},
                i = h.prevInput || {};
            (g.eventType === b1 || i.eventType === b6) && (j = h.prevDelta = {
                x: i.deltaX || 0,
                y: i.deltaY || 0
            }, k = h.offsetDelta = {
                x: l.x,
                y: l.y
            }), g.deltaX = j.x + (l.x - k.x), g.deltaY = j.y + (l.y - k.y)
        }

        function bH(v, u) {
            var t, s, r, q, p = v.lastInterval || u,
                o = u.timeStamp - p.timeStamp;
            if (u.eventType != bU && (o > ac || p.velocity === a2)) {
                var n = p.deltaX - u.deltaX,
                    m = p.deltaY - u.deltaY,
                    d = bC(o, n, m);
                s = d.x, r = d.y, t = bW(d.x) > bW(d.y) ? d.x : d.y, q = bB(n, m), v.lastInterval = u
            } else {
                t = p.velocity, s = p.velocityX, r = p.velocityY, q = p.direction
            }
            u.velocity = t, u.velocityX = s, u.velocityY = r, u.direction = q
        }

        function bE(e) {
            for (var d = [], f = 0; f < e.pointers.length;) {
                d[f] = {
                    clientX: b8(e.pointers[f].clientX),
                    clientY: b8(e.pointers[f].clientY)
                }, f++
            }
            return {
                timeStamp: bF(),
                pointers: d,
                center: bD(d),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function bD(g) {
            var f = g.length;
            if (1 === f) {
                return {
                    x: b8(g[0].clientX),
                    y: b8(g[0].clientY)
                }
            }
            for (var j = 0, i = 0, h = 0; f > h;) {
                j += g[h].clientX, i += g[h].clientY, h++
            }
            return {
                x: b8(j / f),
                y: b8(i / f)
            }
        }

        function bC(e, d, f) {
            return {
                x: d / e || 0,
                y: f / e || 0
            }
        }

        function bB(d, c) {
            return d === c ? bz : bW(d) >= bW(c) ? d > 0 ? aX : av : c > 0 ? ak : b9
        }

        function bA(g, f, j) {
            j || (j = ax);
            var i = f[j[0]] - g[j[0]],
                h = f[j[1]] - g[j[1]];
            return Math.sqrt(i * i + h * h)
        }

        function bx(g, f, j) {
            j || (j = ax);
            var i = f[j[0]] - g[j[0]],
                h = f[j[1]] - g[j[1]];
            return 180 * Math.atan2(h, i) / Math.PI
        }

        function bw(d, c) {
            return bx(c[1], c[0], am) - bx(d[1], d[0], am)
        }

        function bu(d, c) {
            return bA(c[0], c[1], am) / bA(d[0], d[1], am)
        }

        function bt() {
            this.evEl = b0, this.evWin = bN, this.allow = !0, this.pressed = !1, aB.apply(this, arguments)
        }

        function bs() {
            this.evEl = ao, this.evWin = ad, aB.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function br() {
            this.evTarget = bP, this.evWin = be, this.started = !1, aB.apply(this, arguments)
        }

        function bp(f, e) {
            var h = aH(f.touches),
                g = aH(f.changedTouches);
            return e & (b6 | bU) && (h = aG(h.concat(g), "identifier", !0)), [h, g]
        }

        function bn() {
            this.evTarget = ap, this.targetIds = {}, aB.apply(this, arguments)
        }

        function bm(r, q) {
            var p = aH(r.touches),
                o = this.targetIds;
            if (q & (b1 | bO) && 1 === p.length) {
                return o[p[0].identifier] = !0, [p, p]
            }
            var n, m, l = aH(r.changedTouches),
                k = [],
                j = this.target;
            if (m = p.filter(function(b) {
                    return aL(b.target, j)
                }), q === b1) {
                for (n = 0; n < m.length;) {
                    o[m[n].identifier] = !0, n++
                }
            }
            for (n = 0; n < l.length;) {
                o[l[n].identifier] && k.push(l[n]), q & (b6 | bU) && delete o[l[n].identifier], n++
            }
            return k.length ? [aG(m.concat(k), "identifier", !0), k] : void 0
        }

        function bl() {
            aB.apply(this, arguments);
            var b = aS(this.handler, this);
            this.touch = new bn(this.manager, b), this.mouse = new bt(this.manager, b)
        }

        function bk(d, c) {
            this.manager = d, this.set(c)
        }

        function bj(e) {
            if (aK(e, bo)) {
                return bo
            }
            var d = aK(e, aM),
                f = aK(e, aq);
            return d && f ? aM + " " + aq : d || f ? d ? aM : aq : aK(e, bQ) ? bQ : af
        }

        function bi(b) {
            this.id = aE(), this.manager = null, this.options = aV(b || {}, this.defaults), this.options.enable = aQ(this.options.enable, !0), this.state = ag, this.simultaneous = {}, this.requireFail = []
        }

        function bh(b) {
            return b & at ? "cancel" : b & bv ? "end" : b & bS ? "move" : b & b4 ? "start" : ""
        }

        function bg(b) {
            return b == b9 ? "down" : b == ak ? "up" : b == aX ? "left" : b == av ? "right" : ""
        }

        function bf(e, d) {
            var f = d.manager;
            return f ? f.get(e) : e
        }

        function bd() {
            bi.apply(this, arguments)
        }

        function bY() {
            bd.apply(this, arguments), this.pX = null, this.pY = null
        }

        function a9() {
            bd.apply(this, arguments)
        }

        function bR() {
            bi.apply(this, arguments), this._timer = null, this._input = null
        }

        function bq() {
            bd.apply(this, arguments)
        }

        function aP() {
            bd.apply(this, arguments)
        }

        function ar() {
            bi.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function ah(d, c) {
            return c = c || {}, c.recognizers = aQ(c.recognizers, ah.defaults.preset), new b5(d, c)
        }

        function b5(d, c) {
            c = c || {}, this.options = aV(c, ah.defaults), this.options.inputTarget = this.options.inputTarget || d, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = d, this.input = aA(this), this.touchAction = new bk(this, this.options.touchAction), bT(this, !0), aZ(c.recognizers, function(f) {
                var e = this.add(new f[0](f[1]));
                f[2] && e.recognizeWith(f[2]), f[3] && e.requireFailure(f[3])
            }, this)
        }

        function bT(e, d) {
            var f = e.element;
            aZ(e.options.cssProps, function(b, c) {
                f.style[aF(f.style, c)] = d ? b : ""
            })
        }

        function by(b, f) {
            var e = a6.createEvent("Event");
            e.initEvent(b, !0, !0), e.gesture = f, f.target.dispatchEvent(e)
        }
        var aW = ["", "webkit", "moz", "MS", "ms", "o"],
            au = a6.createElement("div"),
            aj = "function",
            b8 = Math.round,
            bW = Math.abs,
            bF = Date.now,
            a3 = 1,
            aw = /mobile|tablet|ip(ad|hone|od)|android/i,
            al = "ontouchstart" in a7,
            cc = aF(a7, "PointerEvent") !== a2,
            bZ = al && aw.test(navigator.userAgent),
            bM = "touch",
            a8 = "pen",
            ay = "mouse",
            an = "kinect",
            ac = 25,
            b1 = 1,
            bO = 2,
            b6 = 4,
            bU = 8,
            bz = 1,
            aX = 2,
            av = 4,
            ak = 8,
            b9 = 16,
            bX = aX | av,
            bG = ak | b9,
            a4 = bX | bG,
            ax = ["x", "y"],
            am = ["clientX", "clientY"];
        aB.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && aO(this.element, this.evEl, this.domHandler), this.evTarget && aO(this.target, this.evTarget, this.domHandler), this.evWin && aO(aD(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && aN(this.element, this.evEl, this.domHandler), this.evTarget && aN(this.target, this.evTarget, this.domHandler), this.evWin && aN(aD(this.element), this.evWin, this.domHandler)
            }
        };
        var cd = {
                mousedown: b1,
                mousemove: bO,
                mouseup: b6
            },
            b0 = "mousedown",
            bN = "mousemove mouseup";
        aU(bt, aB, {
            handler: function(d) {
                var c = cd[d.type];
                c & b1 && 0 === d.button && (this.pressed = !0), c & bO && 1 !== d.which && (c = b6), this.pressed && this.allow && (c & b6 && (this.pressed = !1), this.callback(this.manager, c, {
                    pointers: [d],
                    changedPointers: [d],
                    pointerType: ay,
                    srcEvent: d
                }))
            }
        });
        var bc = {
                pointerdown: b1,
                pointermove: bO,
                pointerup: b6,
                pointercancel: bU,
                pointerout: bU
            },
            az = {
                2: bM,
                3: a8,
                4: ay,
                5: an
            },
            ao = "pointerdown",
            ad = "pointermove pointerup pointercancel";
        a7.MSPointerEvent && (ao = "MSPointerDown", ad = "MSPointerMove MSPointerUp MSPointerCancel"), aU(bs, aB, {
            handler: function(j) {
                var i = this.store,
                    p = !1,
                    o = j.type.toLowerCase().replace("ms", ""),
                    n = bc[o],
                    m = az[j.pointerType] || j.pointerType,
                    l = m == bM,
                    k = aI(i, j.pointerId, "pointerId");
                n & b1 && (0 === j.button || l) ? 0 > k && (i.push(j), k = i.length - 1) : n & (b6 | bU) && (p = !0), 0 > k || (i[k] = j, this.callback(this.manager, n, {
                    pointers: i,
                    changedPointers: [j],
                    pointerType: m,
                    srcEvent: j
                }), p && i.splice(k, 1))
            }
        });
        var b2 = {
                touchstart: b1,
                touchmove: bO,
                touchend: b6,
                touchcancel: bU
            },
            bP = "touchstart",
            be = "touchstart touchmove touchend touchcancel";
        aU(br, aB, {
            handler: function(e) {
                var d = b2[e.type];
                if (d === b1 && (this.started = !0), this.started) {
                    var f = bp.call(this, e, d);
                    d & (b6 | bU) && 0 === f[0].length - f[1].length && (this.started = !1), this.callback(this.manager, d, {
                        pointers: f[0],
                        changedPointers: f[1],
                        pointerType: bM,
                        srcEvent: e
                    })
                }
            }
        });
        var aC = {
                touchstart: b1,
                touchmove: bO,
                touchend: b6,
                touchcancel: bU
            },
            ap = "touchstart touchmove touchend touchcancel";
        aU(bn, aB, {
            handler: function(e) {
                var d = aC[e.type],
                    f = bm.call(this, e, d);
                f && this.callback(this.manager, d, {
                    pointers: f[0],
                    changedPointers: f[1],
                    pointerType: bM,
                    srcEvent: e
                })
            }
        }), aU(bl, aB, {
            handler: function(g, f, j) {
                var i = j.pointerType == bM,
                    h = j.pointerType == ay;
                if (i) {
                    this.mouse.allow = !1
                } else {
                    if (h && !this.mouse.allow) {
                        return
                    }
                }
                f & (b6 | bU) && (this.mouse.allow = !0), this.callback(g, f, j)
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var ae = aF(au.style, "touchAction"),
            b3 = ae !== a2,
            bI = "compute",
            af = "auto",
            bQ = "manipulation",
            bo = "none",
            aM = "pan-x",
            aq = "pan-y";
        bk.prototype = {
            set: function(b) {
                b == bI && (b = this.compute()), b3 && (this.manager.element.style[ae] = b), this.actions = b.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var b = [];
                return aZ(this.manager.recognizers, function(a) {
                    aR(a.options.enable, [a]) && (b = b.concat(a.getTouchAction()))
                }), bj(b.join(" "))
            },
            preventDefaults: function(i) {
                if (!b3) {
                    var h = i.srcEvent,
                        n = i.offsetDirection;
                    if (this.manager.session.prevented) {
                        return void h.preventDefault()
                    }
                    var m = this.actions,
                        l = aK(m, bo),
                        k = aK(m, aq),
                        j = aK(m, aM);
                    return l || k && n & bX || j && n & bG ? this.preventSrc(h) : void 0
                }
            },
            preventSrc: function(b) {
                this.manager.session.prevented = !0, b.preventDefault()
            }
        };
        var ag = 1,
            b4 = 2,
            bS = 4,
            bv = 8,
            aT = bv,
            at = 16,
            ai = 32;
        bi.prototype = {
            defaults: {},
            set: function(b) {
                return aY(this.options, b), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(d) {
                if (a0(d, "recognizeWith", this)) {
                    return this
                }
                var c = this.simultaneous;
                return d = bf(d, this), c[d.id] || (c[d.id] = d, d.recognizeWith(this)), this
            },
            dropRecognizeWith: function(b) {
                return a0(b, "dropRecognizeWith", this) ? this : (b = bf(b, this), delete this.simultaneous[b.id], this)
            },
            requireFailure: function(d) {
                if (a0(d, "requireFailure", this)) {
                    return this
                }
                var c = this.requireFail;
                return d = bf(d, this), -1 === aI(c, d) && (c.push(d), d.requireFailure(this)), this
            },
            dropRequireFailure: function(d) {
                if (a0(d, "dropRequireFailure", this)) {
                    return this
                }
                d = bf(d, this);
                var c = aI(this.requireFail, d);
                return c > -1 && this.requireFail.splice(c, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(b) {
                return !!this.simultaneous[b.id]
            },
            emit: function(f) {
                function e(a) {
                    h.manager.emit(h.options.event + (a ? bh(g) : ""), f)
                }
                var h = this,
                    g = this.state;
                bv > g && e(!0), e(), g >= bv && e(!0)
            },
            tryEmit: function(b) {
                return this.canEmit() ? this.emit(b) : void(this.state = ai)
            },
            canEmit: function() {
                for (var b = 0; b < this.requireFail.length;) {
                    if (!(this.requireFail[b].state & (ai | ag))) {
                        return !1
                    }
                    b++
                }
                return !0
            },
            recognize: function(d) {
                var c = aY({}, d);
                return aR(this.options.enable, [this, c]) ? (this.state & (aT | at | ai) && (this.state = ag), this.state = this.process(c), void(this.state & (b4 | bS | bv | at) && this.tryEmit(c))) : (this.reset(), void(this.state = ai))
            },
            process: function() {},
            getTouchAction: function() {},
            reset: function() {}
        }, aU(bd, bi, {
            defaults: {
                pointers: 1
            },
            attrTest: function(d) {
                var c = this.options.pointers;
                return 0 === c || d.pointers.length === c
            },
            process: function(g) {
                var f = this.state,
                    j = g.eventType,
                    i = f & (b4 | bS),
                    h = this.attrTest(g);
                return i && (j & bU || !h) ? f | at : i || h ? j & b6 ? f | bv : f & b4 ? f | bS : b4 : ai
            }
        }), aU(bY, bd, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: a4
            },
            getTouchAction: function() {
                var d = this.options.direction,
                    c = [];
                return d & bX && c.push(aq), d & bG && c.push(aM), c
            },
            directionTest: function(i) {
                var h = this.options,
                    n = !0,
                    m = i.distance,
                    l = i.direction,
                    k = i.deltaX,
                    j = i.deltaY;
                return l & h.direction || (h.direction & bX ? (l = 0 === k ? bz : 0 > k ? aX : av, n = k != this.pX, m = Math.abs(i.deltaX)) : (l = 0 === j ? bz : 0 > j ? ak : b9, n = j != this.pY, m = Math.abs(i.deltaY))), i.direction = l, n && m > h.threshold && l & h.direction
            },
            attrTest: function(b) {
                return bd.prototype.attrTest.call(this, b) && (this.state & b4 || !(this.state & b4) && this.directionTest(b))
            },
            emit: function(d) {
                this.pX = d.deltaX, this.pY = d.deltaY;
                var c = bg(d.direction);
                c && this.manager.emit(this.options.event + c, d), this._super.emit.call(this, d)
            }
        }), aU(a9, bd, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [bo]
            },
            attrTest: function(b) {
                return this._super.attrTest.call(this, b) && (Math.abs(b.scale - 1) > this.options.threshold || this.state & b4)
            },
            emit: function(d) {
                if (this._super.emit.call(this, d), 1 !== d.scale) {
                    var c = d.scale < 1 ? "in" : "out";
                    this.manager.emit(this.options.event + c, d)
                }
            }
        }), aU(bR, bi, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return [af]
            },
            process: function(g) {
                var e = this.options,
                    j = g.pointers.length === e.pointers,
                    i = g.distance < e.threshold,
                    h = g.deltaTime > e.time;
                if (this._input = g, !i || !j || g.eventType & (b6 | bU) && !h) {
                    this.reset()
                } else {
                    if (g.eventType & b1) {
                        this.reset(), this._timer = a1(function() {
                            this.state = aT, this.tryEmit()
                        }, e.time, this)
                    } else {
                        if (g.eventType & b6) {
                            return aT
                        }
                    }
                }
                return ai
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(b) {
                this.state === aT && (b && b.eventType & b6 ? this.manager.emit(this.options.event + "up", b) : (this._input.timeStamp = bF(), this.manager.emit(this.options.event, this._input)))
            }
        }), aU(bq, bd, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [bo]
            },
            attrTest: function(b) {
                return this._super.attrTest.call(this, b) && (Math.abs(b.rotation) > this.options.threshold || this.state & b4)
            }
        }), aU(aP, bd, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: 0.65,
                direction: bX | bG,
                pointers: 1
            },
            getTouchAction: function() {
                return bY.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var d, f = this.options.direction;
                return f & (bX | bG) ? d = e.velocity : f & bX ? d = e.velocityX : f & bG && (d = e.velocityY), this._super.attrTest.call(this, e) && f & e.direction && e.distance > this.options.threshold && bW(d) > this.options.velocity && e.eventType & b6
            },
            emit: function(d) {
                var c = bg(d.direction);
                c && this.manager.emit(this.options.event + c, d), this.manager.emit(this.options.event, d)
            }
        }), aU(ar, bi, {
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
                return [bQ]
            },
            process: function(j) {
                var e = this.options,
                    p = j.pointers.length === e.pointers,
                    o = j.distance < e.threshold,
                    n = j.deltaTime < e.time;
                if (this.reset(), j.eventType & b1 && 0 === this.count) {
                    return this.failTimeout()
                }
                if (o && n && p) {
                    if (j.eventType != b6) {
                        return this.failTimeout()
                    }
                    var m = this.pTime ? j.timeStamp - this.pTime < e.interval : !0,
                        l = !this.pCenter || bA(this.pCenter, j.center) < e.posThreshold;
                    this.pTime = j.timeStamp, this.pCenter = j.center, l && m ? this.count += 1 : this.count = 1, this._input = j;
                    var k = this.count % e.taps;
                    if (0 === k) {
                        return this.hasRequireFailures() ? (this._timer = a1(function() {
                            this.state = aT, this.tryEmit()
                        }, e.interval, this), b4) : aT
                    }
                }
                return ai
            },
            failTimeout: function() {
                return this._timer = a1(function() {
                    this.state = ai
                }, this.options.interval, this), ai
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == aT && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), ah.VERSION = "2.0.4", ah.defaults = {
            domEvents: !1,
            touchAction: bI,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [bq, {
                    enable: !1
                }],
                [a9, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [aP, {
                    direction: bX
                }],
                [bY, {
                        direction: bX
                    },
                    ["swipe"]
                ],
                [ar],
                [ar, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [bR]
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
        var b7 = 1,
            bV = 2;
        b5.prototype = {
            set: function(b) {
                return aY(this.options, b), b.touchAction && this.touchAction.update(), b.inputTarget && (this.input.destroy(), this.input.target = b.inputTarget, this.input.init()), this
            },
            stop: function(b) {
                this.session.stopped = b ? bV : b7
            },
            recognize: function(h) {
                var g = this.session;
                if (!g.stopped) {
                    this.touchAction.preventDefaults(h);
                    var l, k = this.recognizers,
                        j = g.curRecognizer;
                    (!j || j && j.state & aT) && (j = g.curRecognizer = null);
                    for (var i = 0; i < k.length;) {
                        l = k[i], g.stopped === bV || j && l != j && !l.canRecognizeWith(j) ? l.reset() : l.recognize(h), !j && l.state & (b4 | bS | bv) && (j = g.curRecognizer = l), i++
                    }
                }
            },
            get: function(e) {
                if (e instanceof bi) {
                    return e
                }
                for (var d = this.recognizers, f = 0; f < d.length; f++) {
                    if (d[f].options.event == e) {
                        return d[f]
                    }
                }
                return null
            },
            add: function(d) {
                if (a0(d, "add", this)) {
                    return this
                }
                var c = this.get(d.options.event);
                return c && this.remove(c), this.recognizers.push(d), d.manager = this, this.touchAction.update(), d
            },
            remove: function(d) {
                if (a0(d, "remove", this)) {
                    return this
                }
                var c = this.recognizers;
                return d = this.get(d), c.splice(aI(c, d), 1), this.touchAction.update(), this
            },
            on: function(e, d) {
                var f = this.handlers;
                return aZ(aJ(e), function(b) {
                    f[b] = f[b] || [], f[b].push(d)
                }), this
            },
            off: function(e, d) {
                var f = this.handlers;
                return aZ(aJ(e), function(b) {
                    d ? f[b].splice(aI(f[b], d), 1) : delete f[b]
                }), this
            },
            emit: function(f, e) {
                this.options.domEvents && by(f, e);
                var h = this.handlers[f] && this.handlers[f].slice();
                if (h && h.length) {
                    e.type = f, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var g = 0; g < h.length;) {
                        h[g](e), g++
                    }
                }
            },
            destroy: function() {
                this.element && bT(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, aY(ah, {
            INPUT_START: b1,
            INPUT_MOVE: bO,
            INPUT_END: b6,
            INPUT_CANCEL: bU,
            STATE_POSSIBLE: ag,
            STATE_BEGAN: b4,
            STATE_CHANGED: bS,
            STATE_ENDED: bv,
            STATE_RECOGNIZED: aT,
            STATE_CANCELLED: at,
            STATE_FAILED: ai,
            DIRECTION_NONE: bz,
            DIRECTION_LEFT: aX,
            DIRECTION_RIGHT: av,
            DIRECTION_UP: ak,
            DIRECTION_DOWN: b9,
            DIRECTION_HORIZONTAL: bX,
            DIRECTION_VERTICAL: bG,
            DIRECTION_ALL: a4,
            Manager: b5,
            Input: aB,
            TouchAction: bk,
            TouchInput: bn,
            MouseInput: bt,
            PointerEventInput: bs,
            TouchMouseInput: bl,
            SingleTouchInput: br,
            Recognizer: bi,
            AttrRecognizer: bd,
            Tap: ar,
            Pan: bY,
            Swipe: aP,
            Pinch: a9,
            Rotate: bq,
            Press: bR,
            on: aO,
            off: aN,
            each: aZ,
            merge: aV,
            extend: aY,
            inherit: aU,
            bindFn: aS,
            prefixed: aF
        }), typeof define == aj && define.amd ? define(function() {
            return ah
        }) : "undefined" != typeof module && module.exports ? module.exports = ah : a7[a5] = ah
    }(window, document, "Hammer"),
    function(b) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], b) : "object" == typeof exports ? b(require("jquery"), require("hammerjs")) : b(jQuery, Hammer)
    }(function(e, d) {
        function f(g, b) {
            var a = e(g);
            a.data("hammer") || a.data("hammer", new d(a[0], b))
        }
        e.fn.hammer = function(b) {
            return this.each(function() {
                f(this, b)
            })
        }, d.Manager.prototype.emit = function(a) {
            return function(g, b) {
                a.call(this, g, b), e(this.element).trigger({
                    type: g,
                    gesture: b
                })
            }
        }(d.Manager.prototype.emit)
    }),
    function(b) {
        b.Package ? Materialize = {} : b.Materialize = {}
    }(window), Materialize.guid = function() {
        function b() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return function() {
            return b() + b() + "-" + b() + "-" + b() + "-" + b() + "-" + b() + b() + b()
        }
    }(), Materialize.elementOrParentIsFixed = function(f) {
        var e = $(f),
            h = e.add(e.parents()),
            g = !1;
        return h.each(function() {
            return "fixed" === $(this).css("position") ? (g = !0, !1) : void 0
        }), g
    };
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity,
    function(b) {
        b.fn.collapsible = function(a) {
            var d = {
                accordion: void 0
            };
            return a = b.extend(d, a), this.each(function() {
                function p(c) {
                    k = l.find("> li > .collapsible-header"), c.hasClass("active") ? c.parent().addClass("active") : c.parent().removeClass("active"), c.parent().hasClass("active") ? c.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            b(this).css("height", "")
                        }
                    }) : c.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            b(this).css("height", "")
                        }
                    }), k.not(c).removeClass("active").parent().removeClass("active"), k.not(c).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            b(this).css("height", "")
                        }
                    })
                }

                function o(c) {
                    c.hasClass("active") ? c.parent().addClass("active") : c.parent().removeClass("active"), c.parent().hasClass("active") ? c.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            b(this).css("height", "")
                        }
                    }) : c.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            b(this).css("height", "")
                        }
                    })
                }

                function n(e) {
                    var c = m(e);
                    return c.length > 0
                }

                function m(c) {
                    return c.closest("li > .collapsible-header")
                }
                var l = b(this),
                    k = b(this).find("> li > .collapsible-header"),
                    j = l.data("collapsible");
                l.off("click.collapse", "> li > .collapsible-header"), k.off("click.collapse"), l.on("click.collapse", "> li > .collapsible-header", function(f) {
                    var e = b(this),
                        c = b(f.target);
                    n(c) && (c = m(c)), c.toggleClass("active"), a.accordion || "accordion" === j || void 0 === j ? p(c) : (o(c), e.hasClass("active") && o(e))
                });
                var k = l.find("> li > .collapsible-header");
                a.accordion || "accordion" === j || void 0 === j ? p(k.filter(".active").first()) : k.filter(".active").each(function() {
                    o(b(this))
                })
            })
        }, b(document).ready(function() {
            b(".collapsible").collapsible()
        })
    }(jQuery),
    function(b) {
        b.fn.scrollTo = function(a) {
            return b(this).scrollTop(b(this).scrollTop() - b(this).offset().top + b(a).offset().top), this
        }, b.fn.dropdown = function(a) {
            var d = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                function r() {
                    void 0 !== o.data("induration") && (n.inDuration = o.data("inDuration")), void 0 !== o.data("outduration") && (n.outDuration = o.data("outDuration")), void 0 !== o.data("constrainwidth") && (n.constrain_width = o.data("constrainwidth")), void 0 !== o.data("hover") && (n.hover = o.data("hover")), void 0 !== o.data("gutter") && (n.gutter = o.data("gutter")), void 0 !== o.data("beloworigin") && (n.belowOrigin = o.data("beloworigin")), void 0 !== o.data("alignment") && (n.alignment = o.data("alignment"))
                }

                function q(x) {
                    "focus" === x && (m = !0), r(), l.addClass("active"), o.addClass("active"), n.constrain_width === !0 ? l.css("width", o.outerWidth()) : l.css("white-space", "nowrap");
                    var w, v = window.innerHeight,
                        u = o.innerHeight(),
                        t = o.offset().left,
                        s = o.offset().top - b(window).scrollTop(),
                        j = n.alignment,
                        i = 0;
                    if (n.belowOrigin === !0 && (i = u), t + l.innerWidth() > b(window).width() ? j = "right" : t - l.innerWidth() + o.innerWidth() < 0 && (j = "left"), s + l.innerHeight() > v) {
                        if (s + u - l.innerHeight() < 0) {
                            var h = v - s - i;
                            l.css("max-height", h)
                        } else {
                            i || (i += u), i -= l.innerHeight()
                        }
                    }
                    if ("left" === j) {
                        w = n.gutter, leftPosition = o.position().left + w
                    } else {
                        if ("right" === j) {
                            var g = o.position().left + o.outerWidth() - l.outerWidth();
                            w = -n.gutter, leftPosition = g + w
                        }
                    }
                    l.css({
                        position: "absolute",
                        top: o.position().top + i,
                        left: leftPosition
                    }), l.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: n.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            b(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: n.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function p() {
                    m = !1, l.fadeOut(n.outDuration), l.removeClass("active"), o.removeClass("active"), setTimeout(function() {
                        l.css("max-height", "")
                    }, n.outDuration)
                }
                var o = b(this),
                    n = b.extend({}, d, a),
                    m = !1,
                    l = b("#" + o.attr("data-activates"));
                if (r(), o.after(l), n.hover) {
                    var c = !1;
                    o.unbind("click." + o.attr("id")), o.on("mouseenter", function(e) {
                        c === !1 && (q(), c = !0)
                    }), o.on("mouseleave", function(e) {
                        var f = e.toElement || e.relatedTarget;
                        b(f).closest(".dropdown-content").is(l) || (l.stop(!0, !0), p(), c = !1)
                    }), l.on("mouseleave", function(e) {
                        var f = e.toElement || e.relatedTarget;
                        b(f).closest(".dropdown-button").is(o) || (l.stop(!0, !0), p(), c = !1)
                    })
                } else {
                    o.unbind("click." + o.attr("id")), o.bind("click." + o.attr("id"), function(e) {
                        m || (o[0] != e.currentTarget || o.hasClass("active") || 0 !== b(e.target).closest(".dropdown-content").length ? o.hasClass("active") && (p(), b(document).unbind("click." + l.attr("id") + " touchstart." + l.attr("id"))) : (e.preventDefault(), q("click")), l.hasClass("active") && b(document).bind("click." + l.attr("id") + " touchstart." + l.attr("id"), function(f) {
                            l.is(f.target) || o.is(f.target) || o.find(f.target).length || (p(), b(document).unbind("click." + l.attr("id") + " touchstart." + l.attr("id")))
                        }))
                    })
                }
                o.on("open", function(f, e) {
                    q(e)
                }), o.on("close", p)
            })
        }, b(document).ready(function() {
            b(".dropdown-button").dropdown()
        })
    }(jQuery),
    function(f) {
        var e = 0,
            h = 0,
            g = function() {
                return h++, "materialize-lean-overlay-" + h
            };
        f.fn.extend({
            openModal: function(l) {
                f("body").css("overflow", "hidden");
                var k = {
                        opacity: 0.5,
                        in_duration: 350,
                        out_duration: 250,
                        ready: void 0,
                        complete: void 0,
                        dismissible: !0,
                        starting_top: "4%"
                    },
                    j = g(),
                    d = f(this),
                    b = f('<div class="lean-overlay"></div>'),
                    a = ++e;
                b.attr("id", j).css("z-index", 1000 + 2 * a), d.data("overlay-id", j).css("z-index", 1000 + 2 * a + 1), f("body").append(b), l = f.extend(k, l), l.dismissible && (b.click(function() {
                    d.closeModal(l)
                }), f(document).on("keyup.leanModal" + j, function(c) {
                    27 === c.keyCode && d.closeModal(l)
                })), d.find(".modal-close").on("click.close", function(c) {
                    d.closeModal(l)
                }), b.css({
                    display: "block",
                    opacity: 0
                }), d.css({
                    display: "block",
                    opacity: 0
                }), b.velocity({
                    opacity: l.opacity
                }, {
                    duration: l.in_duration,
                    queue: !1,
                    ease: "easeOutCubic"
                }), d.data("associated-overlay", b[0]), d.hasClass("bottom-sheet") ? d.velocity({
                    bottom: "0",
                    opacity: 1
                }, {
                    duration: l.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof l.ready && l.ready()
                    }
                }) : (f.Velocity.hook(d, "scaleX", 0.7), d.css({
                    top: l.starting_top
                }), d.velocity({
                    top: "10%",
                    opacity: 1,
                    scaleX: "1"
                }, {
                    duration: l.in_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        "function" == typeof l.ready && l.ready()
                    }
                }))
            }
        }), f.fn.extend({
            closeModal: function(k) {
                var j = {
                        out_duration: 250,
                        complete: void 0
                    },
                    i = f(this),
                    b = i.data("overlay-id"),
                    a = f("#" + b);
                k = f.extend(j, k), f("body").css("overflow", ""), i.find(".modal-close").off("click.close"), f(document).off("keyup.leanModal" + b), a.velocity({
                    opacity: 0
                }, {
                    duration: k.out_duration,
                    queue: !1,
                    ease: "easeOutQuart"
                }), i.hasClass("bottom-sheet") ? i.velocity({
                    bottom: "-100%",
                    opacity: 0
                }, {
                    duration: k.out_duration,
                    queue: !1,
                    ease: "easeOutCubic",
                    complete: function() {
                        a.css({
                            display: "none"
                        }), "function" == typeof k.complete && k.complete(), a.remove(), e--
                    }
                }) : i.velocity({
                    top: k.starting_top,
                    opacity: 0,
                    scaleX: 0.7
                }, {
                    duration: k.out_duration,
                    complete: function() {
                        f(this).css("display", "none"), "function" == typeof k.complete && k.complete(), a.remove(), e--
                    }
                })
            }
        }), f.fn.extend({
            leanModal: function(a) {
                return this.each(function() {
                    var i = {
                            starting_top: "4%"
                        },
                        b = f.extend(i, a);
                    f(this).click(function(d) {
                        b.starting_top = (f(this).offset().top - f(window).scrollTop()) / 1.15;
                        var j = f(this).attr("href") || "#" + f(this).data("target");
                        f(j).openModal(b), d.preventDefault()
                    })
                })
            }
        })
    }(jQuery),
    function(b) {
        b.fn.materialbox = function() {
            return this.each(function() {
                function r() {
                    n = !1;
                    var c = k.parent(".material-placeholder"),
                        f = (window.innerWidth, window.innerHeight, k.data("width")),
                        e = k.data("height");
                    k.velocity("stop", !0), b("#materialbox-overlay").velocity("stop", !0), b(".materialbox-caption").velocity("stop", !0), b("#materialbox-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: l,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            o = !1, b(this).remove()
                        }
                    }), k.velocity({
                        width: f,
                        height: e,
                        left: 0,
                        top: 0
                    }, {
                        duration: l,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), b(".materialbox-caption").velocity({
                        opacity: 0
                    }, {
                        duration: l,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            c.css({
                                height: "",
                                width: "",
                                position: "",
                                top: "",
                                left: ""
                            }), k.css({
                                height: "",
                                top: "",
                                left: "",
                                width: "",
                                "max-width": "",
                                position: "",
                                "z-index": ""
                            }), k.removeClass("active"), n = !0, b(this).remove(), q.css("overflow", "")
                        }
                    })
                }
                if (!b(this).hasClass("initialized")) {
                    b(this).addClass("initialized");
                    var q, p, o = !1,
                        n = !0,
                        m = 275,
                        l = 200,
                        k = b(this),
                        a = b("<div></div>").addClass("material-placeholder");
                    k.wrap(a), k.on("click", function() {
                        var z = k.parent(".material-placeholder"),
                            x = window.innerWidth,
                            w = window.innerHeight,
                            v = k.width(),
                            i = k.height();
                        if (n === !1) {
                            return r(), !1
                        }
                        if (o && n === !0) {
                            return r(), !1
                        }
                        n = !1, k.addClass("active"), o = !0, z.css({
                            width: z[0].getBoundingClientRect().width,
                            height: z[0].getBoundingClientRect().height,
                            position: "relative",
                            top: 0,
                            left: 0
                        }), q = void 0, p = z[0].parentNode;
                        for (; null !== p && !b(p).is(document);) {
                            var g = b(p);
                            "hidden" === g.css("overflow") && (g.css("overflow", "visible"), q = void 0 === q ? g : q.add(g)), p = p.parentNode
                        }
                        k.css({
                            position: "absolute",
                            "z-index": 1000
                        }).data("width", v).data("height", i);
                        var f = b('<div id="materialbox-overlay"></div>').css({
                            opacity: 0
                        }).click(function() {
                            n === !0 && r()
                        });
                        if (b("body").append(f), f.velocity({
                                opacity: 1
                            }, {
                                duration: m,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), "" !== k.data("caption")) {
                            var e = b('<div class="materialbox-caption"></div>');
                            e.text(k.data("caption")), b("body").append(e), e.css({
                                display: "inline"
                            }), e.velocity({
                                opacity: 1
                            }, {
                                duration: m,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                        var d = 0,
                            c = v / x,
                            C = i / w,
                            B = 0,
                            A = 0;
                        c > C ? (d = i / v, B = 0.9 * x, A = 0.9 * x * d) : (d = v / i, B = 0.9 * w * d, A = 0.9 * w), k.hasClass("responsive-img") ? k.velocity({
                            "max-width": B,
                            width: v
                        }, {
                            duration: 0,
                            queue: !1,
                            complete: function() {
                                k.css({
                                    left: 0,
                                    top: 0
                                }).velocity({
                                    height: A,
                                    width: B,
                                    left: b(document).scrollLeft() + x / 2 - k.parent(".material-placeholder").offset().left - B / 2,
                                    top: b(document).scrollTop() + w / 2 - k.parent(".material-placeholder").offset().top - A / 2
                                }, {
                                    duration: m,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        n = !0
                                    }
                                })
                            }
                        }) : k.css("left", 0).css("top", 0).velocity({
                            height: A,
                            width: B,
                            left: b(document).scrollLeft() + x / 2 - k.parent(".material-placeholder").offset().left - B / 2,
                            top: b(document).scrollTop() + w / 2 - k.parent(".material-placeholder").offset().top - A / 2
                        }, {
                            duration: m,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                n = !0
                            }
                        })
                    }), b(window).scroll(function() {
                        o && r()
                    }), b(document).keyup(function(c) {
                        27 === c.keyCode && n === !0 && o && r()
                    })
                }
            })
        }, b(document).ready(function() {
            b(".materialboxed").materialbox()
        })
    }(jQuery),
    function(b) {
        b.fn.parallax = function() {
            var a = b(window).width();
            return this.each(function(h) {
                function g(A) {
                    var z;
                    z = 601 > a ? f.height() > 0 ? f.height() : f.children("img").height() : f.height() > 0 ? f.height() : 500;
                    var x = f.children("img").first(),
                        w = x.height(),
                        v = w - z,
                        u = f.offset().top + z,
                        t = f.offset().top,
                        s = b(window).scrollTop(),
                        r = window.innerHeight,
                        q = s + r,
                        p = (q - t) / (z + r),
                        e = Math.round(v * p);
                    A && x.css("display", "block"), u > s && s + r > t && x.css("transform", "translate3D(-50%," + e + "px, 0)")
                }
                var f = b(this);
                f.addClass("parallax"), f.children("img").one("load", function() {
                    g(!0)
                }).each(function() {
                    this.complete && b(this).load()
                }), b(window).scroll(function() {
                    a = b(window).width(), g(!1)
                }), b(window).resize(function() {
                    a = b(window).width(), g(!1)
                })
            })
        }
    }(jQuery),
    function(d) {
        var c = {
            init: function() {
                return this.each(function() {
                    var a = d(this);
                    d(window).width();
                    a.width("100%");
                    var p, o, n = a.find("li.tab a"),
                        m = a.width(),
                        l = a.find("li").first().outerWidth(),
                        k = 0;
                    p = d(n.filter('[href="' + location.hash + '"]')), 0 === p.length && (p = d(this).find("li.tab a.active").first()), 0 === p.length && (p = d(this).find("li.tab a").first()), p.addClass("active"), k = n.index(p), 0 > k && (k = 0), o = d(p[0].hash), a.append('<div class="indicator"></div>');
                    var j = a.find(".indicator");
                    a.is(":visible") && (j.css({
                        right: m - (k + 1) * l
                    }), j.css({
                        left: k * l
                    })), d(window).resize(function() {
                        m = a.width(), l = a.find("li").first().outerWidth(), 0 > k && (k = 0), 0 !== l && 0 !== m && (j.css({
                            right: m - (k + 1) * l
                        }), j.css({
                            left: k * l
                        }))
                    }), n.not(p).each(function() {
                        d(this.hash).hide()
                    }), a.on("click", "a", function(e) {
                        if (d(this).parent().hasClass("disabled")) {
                            return void e.preventDefault()
                        }
                        m = a.width(), l = a.find("li").first().outerWidth(), p.removeClass("active"), o.hide(), p = d(this), o = d(this.hash), n = a.find("li.tab a"), p.addClass("active");
                        var b = k;
                        k = n.index(d(this)), 0 > k && (k = 0), o.show(), k - b >= 0 ? (j.velocity({
                            right: m - (k + 1) * l
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), j.velocity({
                            left: k * l
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })) : (j.velocity({
                            left: k * l
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), j.velocity({
                            right: m - (k + 1) * l
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            delay: 90
                        })), e.preventDefault()
                    })
                })
            },
            select_tab: function(b) {
                this.find('a[href="#' + b + '"]').trigger("click")
            }
        };
        d.fn.tabs = function(a) {
            return c[a] ? c[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void d.error("Method " + a + " does not exist on jQuery.tooltip") : c.init.apply(this, arguments)
        }, d(document).ready(function() {
            d("ul.tabs").tabs()
        })
    }(jQuery),
    function(d) {
        d.fn.tooltip = function(f) {
            var b = 5,
                a = {
                    delay: 350
                };
            return "remove" === f ? (this.each(function() {
                d("#" + d(this).attr("data-tooltip-id")).remove(), d(this).off("mouseenter.tooltip mouseleave.tooltip")
            }), !1) : (f = d.extend(a, f), this.each(function() {
                var r = Materialize.guid(),
                    q = d(this);
                q.attr("data-tooltip-id", r);
                var p = d("<span></span>").text(q.attr("data-tooltip")),
                    o = d("<div></div>");
                o.addClass("material-tooltip").append(p).appendTo(d("body")).attr("id", r);
                var n = d("<div></div>").addClass("backdrop");
                n.appendTo(o), n.css({
                    top: 0,
                    left: 0
                }), q.off("mouseenter.tooltip mouseleave.tooltip");
                var m, l = !1;
                q.on({
                    "mouseenter.tooltip": function(g) {
                        var h = q.attr("data-delay");
                        h = void 0 === h || "" === h ? f.delay : h, m = setTimeout(function() {
                            l = !0, o.velocity("stop"), n.velocity("stop"), o.css({
                                display: "block",
                                left: "0px",
                                top: "0px"
                            }), o.children("span").text(q.attr("data-tooltip"));
                            var B, A, z, x = q.outerWidth(),
                                w = q.outerHeight(),
                                v = q.attr("data-position"),
                                u = o.outerHeight(),
                                t = o.outerWidth(),
                                s = "0px",
                                k = "0px",
                                i = 8;
                            "top" === v ? (B = q.offset().top - u - b, A = q.offset().left + x / 2 - t / 2, z = c(A, B, t, u), s = "-10px", n.css({
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 90%",
                                marginTop: u,
                                marginLeft: t / 2 - n.width() / 2
                            })) : "left" === v ? (B = q.offset().top + w / 2 - u / 2, A = q.offset().left - t - b, z = c(A, B, t, u), k = "-10px", n.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: u / 2,
                                marginLeft: t
                            })) : "right" === v ? (B = q.offset().top + w / 2 - u / 2, A = q.offset().left + x + b, z = c(A, B, t, u), k = "+10px", n.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: u / 2,
                                marginLeft: "0px"
                            })) : (B = q.offset().top + q.outerHeight() + b, A = q.offset().left + x / 2 - t / 2, z = c(A, B, t, u), s = "+10px", n.css({
                                marginLeft: t / 2 - n.width() / 2
                            })), o.css({
                                top: z.y,
                                left: z.x
                            }), i = t / 8, 8 > i && (i = 8), ("right" === v || "left" === v) && (i = t / 10, 6 > i && (i = 6)), o.velocity({
                                marginTop: s,
                                marginLeft: k
                            }, {
                                duration: 350,
                                queue: !1
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                delay: 50,
                                queue: !1
                            }), n.css({
                                display: "block"
                            }).velocity({
                                opacity: 1
                            }, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({
                                scale: i
                            }, {
                                duration: 300,
                                delay: 0,
                                queue: !1,
                                easing: "easeInOutQuad"
                            })
                        }, h)
                    },
                    "mouseleave.tooltip": function() {
                        l = !1, clearTimeout(m), setTimeout(function() {
                            1 != l && (o.velocity({
                                opacity: 0,
                                marginTop: 0,
                                marginLeft: 0
                            }, {
                                duration: 225,
                                queue: !1
                            }), n.velocity({
                                opacity: 0,
                                scale: 1
                            }, {
                                duration: 225,
                                queue: !1,
                                complete: function() {
                                    n.css("display", "none"), o.css("display", "none"), l = !1
                                }
                            }))
                        }, 225)
                    }
                })
            }))
        };
        var c = function(a, l, k, j) {
            var i = a,
                h = l;
            return 0 > i ? i = 4 : i + k > window.innerWidth && (i -= i + k - window.innerWidth), 0 > h ? h = 4 : h + j > window.innerHeight + d(window).scrollTop && (h -= h + j - window.innerHeight), {
                x: i,
                y: h
            }
        };
        d(document).ready(function() {
            d(".tooltipped").tooltip()
        })
    }(jQuery),
    function(v) {
        function u(b) {
            return null !== b && b === b.window
        }

        function t(b) {
            return u(b) ? b : 9 === b.nodeType && b.defaultView
        }

        function s(g) {
            var c, j, i = {
                    top: 0,
                    left: 0
                },
                h = g && g.ownerDocument;
            return c = h.documentElement, "undefined" != typeof g.getBoundingClientRect && (i = g.getBoundingClientRect()), j = t(h), {
                top: i.top + j.pageYOffset - c.clientTop,
                left: i.left + j.pageXOffset - c.clientLeft
            }
        }

        function r(e) {
            var d = "";
            for (var f in e) {
                e.hasOwnProperty(f) && (d += f + ":" + e[f] + ";")
            }
            return d
        }

        function q(e) {
            if (l.allowEvent(e) === !1) {
                return null
            }
            for (var d = null, f = e.target || e.srcElement; null !== f.parentElement;) {
                if (!(f instanceof SVGElement || -1 === f.className.indexOf("waves-effect"))) {
                    d = f;
                    break
                }
                if (f.classList.contains("waves-effect")) {
                    d = f;
                    break
                }
                f = f.parentElement
            }
            return d
        }

        function p(a) {
            var d = q(a);
            null !== d && (m.show(a, d), "ontouchstart" in v && (d.addEventListener("touchend", m.hide, !1), d.addEventListener("touchcancel", m.hide, !1)), d.addEventListener("mouseup", m.hide, !1), d.addEventListener("mouseleave", m.hide, !1))
        }
        var o = o || {},
            n = document.querySelectorAll.bind(document),
            m = {
                duration: 750,
                show: function(C, B) {
                    if (2 === C.button) {
                        return !1
                    }
                    var A = B || this,
                        z = document.createElement("div");
                    z.className = "waves-ripple", A.appendChild(z);
                    var x = s(A),
                        w = C.pageY - x.top,
                        j = C.pageX - x.left,
                        e = "scale(" + A.clientWidth / 100 * 10 + ")";
                    "touches" in C && (w = C.touches[0].pageY - x.top, j = C.touches[0].pageX - x.left), z.setAttribute("data-hold", Date.now()), z.setAttribute("data-scale", e), z.setAttribute("data-x", j), z.setAttribute("data-y", w);
                    var d = {
                        top: w + "px",
                        left: j + "px"
                    };
                    z.className = z.className + " waves-notransition", z.setAttribute("style", r(d)), z.className = z.className.replace("waves-notransition", ""), d["-webkit-transform"] = e, d["-moz-transform"] = e, d["-ms-transform"] = e, d["-o-transform"] = e, d.transform = e, d.opacity = "1", d["-webkit-transition-duration"] = m.duration + "ms", d["-moz-transition-duration"] = m.duration + "ms", d["-o-transition-duration"] = m.duration + "ms", d["transition-duration"] = m.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", z.setAttribute("style", r(d))
                },
                hide: function(C) {
                    l.touchup(C);
                    var B = this,
                        A = (1.4 * B.clientWidth, null),
                        z = B.getElementsByClassName("waves-ripple");
                    if (!(z.length > 0)) {
                        return !1
                    }
                    A = z[z.length - 1];
                    var x = A.getAttribute("data-x"),
                        w = A.getAttribute("data-y"),
                        k = A.getAttribute("data-scale"),
                        j = Date.now() - Number(A.getAttribute("data-hold")),
                        e = 350 - j;
                    0 > e && (e = 0), setTimeout(function() {
                        var b = {
                            top: w + "px",
                            left: x + "px",
                            opacity: "0",
                            "-webkit-transition-duration": m.duration + "ms",
                            "-moz-transition-duration": m.duration + "ms",
                            "-o-transition-duration": m.duration + "ms",
                            "transition-duration": m.duration + "ms",
                            "-webkit-transform": k,
                            "-moz-transform": k,
                            "-ms-transform": k,
                            "-o-transform": k,
                            transform: k
                        };
                        A.setAttribute("style", r(b)), setTimeout(function() {
                            try {
                                B.removeChild(A)
                            } catch (c) {
                                return !1
                            }
                        }, m.duration)
                    }, e)
                },
                wrapInput: function(h) {
                    for (var g = 0; g < h.length; g++) {
                        var w = h[g];
                        if ("input" === w.tagName.toLowerCase()) {
                            var k = w.parentNode;
                            if ("i" === k.tagName.toLowerCase() && -1 !== k.className.indexOf("waves-effect")) {
                                continue
                            }
                            var j = document.createElement("i");
                            j.className = w.className + " waves-input-wrapper";
                            var i = w.getAttribute("style");
                            i || (i = ""), j.setAttribute("style", i), w.className = "waves-button-input", w.removeAttribute("style"), k.replaceChild(j, w), j.appendChild(w)
                        }
                    }
                }
            },
            l = {
                touches: 0,
                allowEvent: function(d) {
                    var c = !0;
                    return "touchstart" === d.type ? l.touches += 1 : "touchend" === d.type || "touchcancel" === d.type ? setTimeout(function() {
                        l.touches > 0 && (l.touches -= 1)
                    }, 500) : "mousedown" === d.type && l.touches > 0 && (c = !1), c
                },
                touchup: function(b) {
                    l.allowEvent(b)
                }
            };
        o.displayEffect = function(a) {
            a = a || {}, "duration" in a && (m.duration = a.duration), m.wrapInput(n(".waves-effect")), "ontouchstart" in v && document.body.addEventListener("touchstart", p, !1), document.body.addEventListener("mousedown", p, !1)
        }, o.attach = function(a) {
            "input" === a.tagName.toLowerCase() && (m.wrapInput([a]), a = a.parentElement), "ontouchstart" in v && a.addEventListener("touchstart", p, !1), a.addEventListener("mousedown", p, !1)
        }, v.Waves = o, document.addEventListener("DOMContentLoaded", function() {
            o.displayEffect()
        }, !1)
    }(window), Materialize.toast = function(r, q, p, o) {
        function n(d) {
            var c = document.createElement("div");
            if (c.classList.add("toast"), p) {
                for (var u = p.split(" "), t = 0, s = u.length; s > t; t++) {
                    c.classList.add(u[t])
                }
            }("object" == typeof HTMLElement ? d instanceof HTMLElement : d && "object" == typeof d && null !== d && 1 === d.nodeType && "string" == typeof d.nodeName) ? c.appendChild(d): d instanceof jQuery ? c.appendChild(d[0]) : c.innerHTML = d;
            var i = new Hammer(c, {
                prevent_default: !1
            });
            return i.on("pan", function(b) {
                var h = b.deltaX,
                    g = 80;
                c.classList.contains("panning") || c.classList.add("panning");
                var f = 1 - Math.abs(h / g);
                0 > f && (f = 0), Vel(c, {
                    left: h,
                    opacity: f
                }, {
                    duration: 50,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }), i.on("panend", function(b) {
                var g = b.deltaX,
                    f = 80;
                Math.abs(g) > f ? Vel(c, {
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof o && o(), c.parentNode.removeChild(c)
                    }
                }) : (c.classList.remove("panning"), Vel(c, {
                    left: 0,
                    opacity: 1
                }, {
                    duration: 300,
                    easing: "easeOutExpo",
                    queue: !1
                }))
            }), c
        }
        p = p || "";
        var m = document.getElementById("toast-container");
        null === m && (m = document.createElement("div"), m.id = "toast-container", document.body.appendChild(m));
        var l = n(r);
        r && m.appendChild(l), l.style.top = "35px", l.style.opacity = 0, Vel(l, {
            top: "0px",
            opacity: 1
        }, {
            duration: 300,
            easing: "easeOutCubic",
            queue: !1
        });
        var k = q,
            j = setInterval(function() {
                null === l.parentNode && window.clearInterval(j), l.classList.contains("panning") || (k -= 20), 0 >= k && (Vel(l, {
                    opacity: 0,
                    marginTop: "-40px"
                }, {
                    duration: 375,
                    easing: "easeOutExpo",
                    queue: !1,
                    complete: function() {
                        "function" == typeof o && o(), this[0].parentNode.removeChild(this[0])
                    }
                }), window.clearInterval(j))
            }, 20)
    },
    function(d) {
        var c = {
            init: function(a) {
                var e = {
                    menuWidth: 240,
                    edge: "left",
                    closeOnClick: !1
                };
                a = d.extend(e, a), d(this).each(function() {
                    function m(f) {
                        i = !1, b = !1, d("body").css("overflow", ""), d("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                d(this).remove()
                            }
                        }), "left" === a.edge ? (j.css({
                            width: "",
                            right: "",
                            left: "0"
                        }), k.velocity({
                            left: -1 * (a.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                f === !0 && (k.removeAttr("style"), k.css("width", a.menuWidth))
                            }
                        })) : (j.css({
                            width: "",
                            right: "0",
                            left: ""
                        }), k.velocity({
                            right: -1 * (a.menuWidth + 10)
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutCubic",
                            complete: function() {
                                f === !0 && (k.removeAttr("style"), k.css("width", a.menuWidth))
                            }
                        }))
                    }
                    var l = d(this),
                        k = d("#" + l.attr("data-activates"));
                    240 != a.menuWidth && k.css("width", a.menuWidth);
                    var j = d('<div class="drag-target"></div>');
                    d("body").append(j), "left" == a.edge ? (k.css("left", -1 * (a.menuWidth + 10)), j.css({
                        left: 0
                    })) : (k.addClass("right-aligned").css("right", -1 * (a.menuWidth + 10)).css("left", ""), j.css({
                        right: 0
                    })), k.hasClass("fixed") && window.innerWidth > 992 && k.css("left", 0), k.hasClass("fixed") && d(window).resize(function() {
                        window.innerWidth > 992 ? 0 !== d("#sidenav-overlay").css("opacity") && b ? m(!0) : (k.removeAttr("style"), k.css("width", a.menuWidth)) : b === !1 && ("left" === a.edge ? k.css("left", -1 * (a.menuWidth + 10)) : k.css("right", -1 * (a.menuWidth + 10)))
                    }), a.closeOnClick === !0 && k.on("click.itemclick", "a:not(.collapsible-header)", function() {
                        m()
                    });
                    var i = !1,
                        b = !1;
                    j.on("click", function() {
                        m()
                    }), j.hammer({
                        prevent_default: !1
                    }).bind("pan", function(q) {
                        if ("touch" == q.gesture.pointerType) {
                            var p = (q.gesture.direction, q.gesture.center.x);
                            q.gesture.center.y, q.gesture.velocityX;
                            if (d("body").css("overflow", "hidden"), 0 === d("#sidenav-overlay").length) {
                                var o = d('<div id="sidenav-overlay"></div>');
                                o.css("opacity", 0).click(function() {
                                    m()
                                }), d("body").append(o)
                            }
                            if ("left" === a.edge && (p > a.menuWidth ? p = a.menuWidth : 0 > p && (p = 0)), "left" === a.edge) {
                                p < a.menuWidth / 2 ? b = !1 : p >= a.menuWidth / 2 && (b = !0), k.css("left", p - a.menuWidth)
                            } else {
                                p < window.innerWidth - a.menuWidth / 2 ? b = !0 : p >= window.innerWidth - a.menuWidth / 2 && (b = !1);
                                var n = -1 * (p - a.menuWidth / 2);
                                n > 0 && (n = 0), k.css("right", n)
                            }
                            var h;
                            "left" === a.edge ? (h = p / a.menuWidth, d("#sidenav-overlay").velocity({
                                opacity: h
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (h = Math.abs((p - window.innerWidth) / a.menuWidth), d("#sidenav-overlay").velocity({
                                opacity: h
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(g) {
                        if ("touch" == g.gesture.pointerType) {
                            var f = g.gesture.velocityX;
                            i = !1, "left" === a.edge ? b && 0.3 >= f || -0.5 > f ? (k.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), d("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), j.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            })) : (!b || f > 0.3) && (d("body").css("overflow", ""), k.velocity({
                                left: -1 * (a.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), d("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    d(this).remove()
                                }
                            }), j.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : b && f >= -0.3 || f > 0.5 ? (k.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), d("#sidenav-overlay").velocity({
                                opacity: 1
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), j.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!b || -0.3 > f) && (d("body").css("overflow", ""), k.velocity({
                                right: -1 * (a.menuWidth + 10)
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), d("#sidenav-overlay").velocity({
                                opacity: 0
                            }, {
                                duration: 200,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    d(this).remove()
                                }
                            }), j.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }), l.click(function() {
                        if (b === !0) {
                            b = !1, i = !1, m()
                        } else {
                            d("body").css("overflow", "hidden"), d("body").append(j), "left" === a.edge ? (j.css({
                                width: "50%",
                                right: 0,
                                left: ""
                            }), k.velocity({
                                left: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })) : (j.css({
                                width: "50%",
                                right: "",
                                left: 0
                            }), k.velocity({
                                right: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), k.css("left", ""));
                            var f = d('<div id="sidenav-overlay"></div>');
                            f.css("opacity", 0).click(function() {
                                b = !1, i = !1, m(), f.velocity({
                                    opacity: 0
                                }, {
                                    duration: 300,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        d(this).remove()
                                    }
                                })
                            }), d("body").append(f), f.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    b = !0, i = !1
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
                d("#sidenav-overlay").trigger("click")
            }
        };
        d.fn.sideNav = function(a) {
            return c[a] ? c[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void d.error("Method " + a + " does not exist on jQuery.sideNav") : c.init.apply(this, arguments)
        }
    }(jQuery),
    function(x) {
        function w(a, j, i, h) {
            var g = x();
            return x.each(r, function(c, A) {
                if (A.height() > 0) {
                    var z = A.offset().top,
                        f = A.offset().left,
                        e = f + A.width(),
                        d = z + A.height(),
                        b = !(f > j || h > e || z > i || a > d);
                    b && g.push(A)
                }
            }), g
        }

        function v() {
            ++o;
            var j = s.scrollTop(),
                h = s.scrollLeft(),
                f = h + s.width(),
                b = j + s.height(),
                a = w(j + n.top + 200, f + n.right, b + n.bottom, h + n.left);
            x.each(a, function(e, d) {
                var g = d.data("scrollSpy:ticks");
                "number" != typeof g && d.triggerHandler("scrollSpy:enter"), d.data("scrollSpy:ticks", o)
            }), x.each(q, function(e, d) {
                var g = d.data("scrollSpy:ticks");
                "number" == typeof g && g !== o && (d.triggerHandler("scrollSpy:exit"), d.data("scrollSpy:ticks", null))
            }), q = a
        }

        function u() {
            s.trigger("scrollSpy:winSize")
        }

        function t(E, D, C) {
            var B, A, z, l = null,
                k = 0;
            C || (C = {});
            var j = function() {
                k = C.leading === !1 ? 0 : m(), l = null, z = E.apply(B, A), B = A = null
            };
            return function() {
                var b = m();
                k || C.leading !== !1 || (k = b);
                var a = D - (b - k);
                return B = this, A = arguments, 0 >= a ? (clearTimeout(l), l = null, k = b, z = E.apply(B, A), B = A = null) : l || C.trailing === !1 || (l = setTimeout(j, a)), z
            }
        }
        var s = x(window),
            r = [],
            q = [],
            p = !1,
            o = 0,
            n = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
            m = Date.now || function() {
                return (new Date).getTime()
            };
        x.scrollSpy = function(a, g) {
            var f = [];
            a = x(a), a.each(function(d, h) {
                r.push(x(h)), x(h).data("scrollSpy:id", d), x("a[href=#" + x(h).attr("id") + "]").click(function(i) {
                    i.preventDefault();
                    var j = x(this.hash).offset().top + 1;
                    x("html, body").animate({
                        scrollTop: j - 200
                    }, {
                        duration: 400,
                        queue: !1,
                        easing: "easeOutCubic"
                    })
                })
            }), g = g || {
                throttle: 100
            }, n.top = g.offsetTop || 0, n.right = g.offsetRight || 0, n.bottom = g.offsetBottom || 0, n.left = g.offsetLeft || 0;
            var e = t(v, g.throttle || 100),
                c = function() {
                    x(document).ready(e)
                };
            return p || (s.on("scroll", c), s.on("resize", c), p = !0), setTimeout(c, 0), a.on("scrollSpy:enter", function() {
                f = x.grep(f, function(b) {
                    return 0 != b.height()
                });
                var d = x(this);
                f[0] ? (x("a[href=#" + f[0].attr("id") + "]").removeClass("active"), d.data("scrollSpy:id") < f[0].data("scrollSpy:id") ? f.unshift(x(this)) : f.push(x(this))) : f.push(x(this)), x("a[href=#" + f[0].attr("id") + "]").addClass("active")
            }), a.on("scrollSpy:exit", function() {
                if (f = x.grep(f, function(b) {
                        return 0 != b.height()
                    }), f[0]) {
                    x("a[href=#" + f[0].attr("id") + "]").removeClass("active");
                    var d = x(this);
                    f = x.grep(f, function(b) {
                        return b.attr("id") != d.attr("id")
                    }), f[0] && x("a[href=#" + f[0].attr("id") + "]").addClass("active")
                }
            }), a
        }, x.winSizeSpy = function(a) {
            return x.winSizeSpy = function() {
                return s
            }, a = a || {
                throttle: 100
            }, s.on("resize", t(u, a.throttle || 100))
        }, x.fn.scrollSpy = function(a) {
            return x.scrollSpy(x(this), a)
        }
    }(jQuery),
    function(b) {
        b(document).ready(function() {
            function a(d) {
                var i = d.css("font-family"),
                    h = d.css("font-size");
                h && o.css("font-size", h), i && o.css("font-family", i), "off" === d.attr("wrap") && o.css("overflow-wrap", "normal").css("white-space", "pre"), o.text(d.val() + "\n");
                var g = o.html().replace(/\n/g, "<br>");
                o.html(g), d.is(":visible") ? o.css("width", d.width()) : o.css("width", b(window).width() / 2), d.css("height", o.height())
            }
            Materialize.updateTextFields = function() {
                var c = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
                b(c).each(function(d, e) {
                    b(e).val().length > 0 || e.autofocus || void 0 !== b(this).attr("placeholder") || b(e)[0].validity.badInput === !0 ? b(this).siblings("label, i").addClass("active") : b(this).siblings("label, i").removeClass("active")
                })
            };
            var p = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            b(document).on("change", p, function() {
                (0 !== b(this).val().length || void 0 !== b(this).attr("placeholder")) && b(this).siblings("label").addClass("active"), validate_field(b(this))
            }), b(document).ready(function() {
                Materialize.updateTextFields()
            }), b(document).on("reset", function(c) {
                var e = b(c.target);
                e.is("form") && (e.find(p).removeClass("valid").removeClass("invalid"), e.find(p).each(function() {
                    "" === b(this).attr("value") && b(this).siblings("label, i").removeClass("active")
                }), e.find("select.initialized").each(function() {
                    var d = e.find("option[selected]").text();
                    e.siblings("input.select-dropdown").val(d)
                }))
            }), b(document).on("focus", p, function() {
                b(this).siblings("label, i").addClass("active")
            }), b(document).on("blur", p, function() {
                var c = b(this);
                0 === c.val().length && c[0].validity.badInput !== !0 && void 0 === c.attr("placeholder") && c.siblings("label, i").removeClass("active"), 0 === c.val().length && c[0].validity.badInput !== !0 && void 0 !== c.attr("placeholder") && c.siblings("i").removeClass("active"), validate_field(c)
            }), window.validate_field = function(f) {
                var e = void 0 !== f.attr("length"),
                    h = parseInt(f.attr("length")),
                    g = f.val().length;
                0 === f.val().length && f[0].validity.badInput === !1 ? f.hasClass("validate") && (f.removeClass("valid"), f.removeClass("invalid")) : f.hasClass("validate") && (f.is(":valid") && e && h >= g || f.is(":valid") && !e ? (f.removeClass("invalid"), f.addClass("valid")) : (f.removeClass("valid"), f.addClass("invalid")))
            };
            var o = b(".hiddendiv").first();
            o.length || (o = b('<div class="hiddendiv common"></div>'), b("body").append(o));
            var n = ".materialize-textarea";
            b(n).each(function() {
                var d = b(this);
                d.val().length && a(d)
            }), b("body").on("keyup keydown autoresize", n, function() {
                a(b(this))
            }), b(document).on("change", '.file-field input[type="file"]', function() {
                for (var g = b(this).closest(".file-field"), r = g.find("input.file-path"), q = b(this)[0].files, i = [], h = 0; h < q.length; h++) {
                    i.push(q[h].name)
                }
                r.val(i.join(", ")), r.trigger("change")
            });
            var m, l = "input[type=range]",
                k = !1;
            b(l).each(function() {
                var c = b('<span class="thumb"><span class="value"></span></span>');
                b(this).after(c)
            });
            var j = ".range-field";
            b(document).on("change", l, function(d) {
                var e = b(this).siblings(".thumb");
                e.find(".value").html(b(this).val())
            }), b(document).on("input mousedown touchstart", l, function(e) {
                var g = b(this).siblings(".thumb"),
                    f = b(this).outerWidth();
                g.length <= 0 && (g = b('<span class="thumb"><span class="value"></span></span>'), b(this).after(g)), g.find(".value").html(b(this).val()), k = !0, b(this).addClass("active"), g.hasClass("active") || g.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== e.type && (m = void 0 === e.pageX || null === e.pageX ? e.originalEvent.touches[0].pageX - b(this).offset().left : e.pageX - b(this).offset().left, 0 > m ? m = 0 : m > f && (m = f), g.addClass("active").css("left", m)), g.find(".value").html(b(this).val())
            }), b(document).on("mouseup touchend", j, function() {
                k = !1, b(this).removeClass("active")
            }), b(document).on("mousemove touchmove", j, function(f) {
                var i, h = b(this).children(".thumb");
                if (k) {
                    h.hasClass("active") || h.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-20px",
                        marginLeft: "-15px"
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    }), i = void 0 === f.pageX || null === f.pageX ? f.originalEvent.touches[0].pageX - b(this).offset().left : f.pageX - b(this).offset().left;
                    var g = b(this).outerWidth();
                    0 > i ? i = 0 : i > g && (i = g), h.addClass("active").css("left", i), h.find(".value").html(h.siblings(l).val())
                }
            }), b(document).on("mouseout touchleave", j, function() {
                if (!k) {
                    var c = b(this).children(".thumb");
                    c.hasClass("active") && c.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: "-6px"
                    }, {
                        duration: 100
                    }), c.removeClass("active")
                }
            })
        }), b.fn.material_select = function(a) {
            function f(g, d, j) {
                var i = g.indexOf(d),
                    h = -1 === i;
                return h ? g.push(d) : g.splice(i, 1), j.siblings("ul.dropdown-content").find("li").eq(d).toggleClass("active"), j.find("option").eq(d).prop("selected", h), e(g, j), h
            }

            function e(h, g) {
                for (var l = "", k = 0, j = h.length; j > k; k++) {
                    var i = g.find("option").eq(h[k]).text();
                    l += 0 === k ? i : ", " + i
                }
                "" === l && (l = g.find("option:disabled").eq(0).text()), g.siblings("input.select-dropdown").val(l)
            }
            b(this).each(function() {
                var H = b(this);
                if (!H.hasClass("browser-default")) {
                    var G = H.attr("multiple") ? !0 : !1,
                        F = H.data("select-id");
                    if (F && (H.parent().find("span.caret").remove(), H.parent().find("input").remove(), H.unwrap(), b("ul#select-options-" + F).remove()), "destroy" === a) {
                        return void H.data("select-id", null).removeClass("initialized")
                    }
                    var E = Materialize.guid();
                    H.data("select-id", E);
                    var D = b('<div class="select-wrapper"></div>');
                    D.addClass(H.attr("class"));
                    var C = b('<ul id="select-options-' + E + '" class="dropdown-content select-dropdown ' + (G ? "multiple-select-dropdown" : "") + '"></ul>'),
                        B = H.children("option, optgroup"),
                        A = [],
                        z = !1,
                        x = H.find("option:selected").html() || H.find("option:first").html() || "",
                        w = function(i, o, n) {
                            var m = o.is(":disabled") ? "disabled " : "",
                                l = o.data("icon"),
                                k = o.attr("class");
                            if (l) {
                                var j = "";
                                return k && (j = ' class="' + k + '"'), "multiple" === n ? C.append(b('<li class="' + m + '"><img src="' + l + '"' + j + '><span><input type="checkbox"' + m + "/><label></label>" + o.html() + "</span></li>")) : C.append(b('<li class="' + m + '"><img src="' + l + '"' + j + "><span>" + o.html() + "</span></li>")), !0
                            }
                            "multiple" === n ? C.append(b('<li class="' + m + '"><span><input type="checkbox"' + m + "/><label></label>" + o.html() + "</span></li>")) : C.append(b('<li class="' + m + '"><span>' + o.html() + "</span></li>"))
                        };
                    B.length && B.each(function() {
                        if (b(this).is("option")) {
                            G ? w(H, b(this), "multiple") : w(H, b(this))
                        } else {
                            if (b(this).is("optgroup")) {
                                var d = b(this).children("option");
                                C.append(b('<li class="optgroup"><span>' + b(this).attr("label") + "</span></li>")), d.each(function() {
                                    w(H, b(this))
                                })
                            }
                        }
                    }), C.find("li:not(.optgroup)").each(function(d) {
                        b(this).click(function(j) {
                            if (!b(this).hasClass("disabled") && !b(this).hasClass("optgroup")) {
                                var i = !0;
                                G ? (b('input[type="checkbox"]', this).prop("checked", function(h, g) {
                                    return !g
                                }), i = f(A, b(this).index(), H), t.trigger("focus")) : (C.find("li").removeClass("active"), b(this).toggleClass("active"), t.val(b(this).text())), activateOption(C, b(this)), H.find("option").eq(d).prop("selected", i), H.trigger("change"), "undefined" != typeof a && a()
                            }
                            j.stopPropagation()
                        })
                    }), H.wrap(D);
                    var v = b('<span class="caret">&#9660;</span>');
                    H.is(":disabled") && v.addClass("disabled");
                    var u = x.replace(/"/g, "&quot;"),
                        t = b('<input type="text" class="select-dropdown" readonly="true" ' + (H.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + E + '" value="' + u + '"/>');
                    H.before(t), t.before(v), t.after(C), H.is(":disabled") || t.dropdown({
                        hover: !1,
                        closeOnClick: !1
                    }), H.attr("tabindex") && b(t[0]).attr("tabindex", H.attr("tabindex")), H.addClass("initialized"), t.on({
                        focus: function() {
                            if (b("ul.select-dropdown").not(C[0]).is(":visible") && b("input.select-dropdown").trigger("close"), !C.is(":visible")) {
                                b(this).trigger("open", ["focus"]);
                                var d = b(this).val(),
                                    g = C.find("li").filter(function() {
                                        return b(this).text().toLowerCase() === d.toLowerCase()
                                    })[0];
                                activateOption(C, g)
                            }
                        },
                        click: function(d) {
                            d.stopPropagation()
                        }
                    }), t.on("blur", function() {
                        G || b(this).trigger("close"), C.find("li.selected").removeClass("selected")
                    }), C.hover(function() {
                        z = !0
                    }, function() {
                        z = !1
                    }), b(window).on({
                        click: function() {
                            G && (z || t.trigger("close"))
                        }
                    }), G && H.find("option:selected:not(:disabled)").each(function() {
                        var d = b(this).index();
                        f(A, d, H), C.find("li").eq(d).find(":checkbox").prop("checked", !0)
                    }), activateOption = function(g, i) {
                        if (i) {
                            g.find("li.selected").removeClass("selected");
                            var h = b(i);
                            h.addClass("selected"), C.scrollTo(h)
                        }
                    };
                    var c = [],
                        I = function(i) {
                            if (9 == i.which) {
                                return void t.trigger("close")
                            }
                            if (40 == i.which && !C.is(":visible")) {
                                return void t.trigger("open")
                            }
                            if (13 != i.which || C.is(":visible")) {
                                i.preventDefault();
                                var n = String.fromCharCode(i.which).toLowerCase(),
                                    m = [9, 13, 27, 38, 40];
                                if (n && -1 === m.indexOf(i.which)) {
                                    c.push(n);
                                    var l = c.join(""),
                                        k = C.find("li").filter(function() {
                                            return 0 === b(this).text().toLowerCase().indexOf(l)
                                        })[0];
                                    k && activateOption(C, k)
                                }
                                if (13 == i.which) {
                                    var j = C.find("li.selected:not(.disabled)")[0];
                                    j && (b(j).trigger("click"), G || t.trigger("close"))
                                }
                                40 == i.which && (k = C.find("li.selected").length ? C.find("li.selected").next("li:not(.disabled)")[0] : C.find("li:not(.disabled)")[0], activateOption(C, k)), 27 == i.which && t.trigger("close"), 38 == i.which && (k = C.find("li.selected").prev("li:not(.disabled)")[0], k && activateOption(C, k)), setTimeout(function() {
                                    c = []
                                }, 1000)
                            }
                        };
                    t.on("keydown", I)
                }
            })
        }
    }(jQuery),
    function(d) {
        var c = {
            init: function(a) {
                var e = {
                    indicators: !0,
                    height: 400,
                    transition: 500,
                    interval: 6000
                };
                return a = d.extend(e, a), this.each(function() {
                    function z(g, f) {
                        g.hasClass("center-align") ? g.velocity({
                            opacity: 0,
                            translateY: -100
                        }, {
                            duration: f,
                            queue: !1
                        }) : g.hasClass("right-align") ? g.velocity({
                            opacity: 0,
                            translateX: 100
                        }, {
                            duration: f,
                            queue: !1
                        }) : g.hasClass("left-align") && g.velocity({
                            opacity: 0,
                            translateX: -100
                        }, {
                            duration: f,
                            queue: !1
                        })
                    }

                    function x(f) {
                        f >= r.length ? f = 0 : 0 > f && (f = r.length - 1), q = s.find(".active").index(), q != f && (w = r.eq(q), $caption = w.find(".caption"), w.removeClass("active"), w.velocity({
                            opacity: 0
                        }, {
                            duration: a.transition,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                r.not(".active").velocity({
                                    opacity: 0,
                                    translateX: 0,
                                    translateY: 0
                                }, {
                                    duration: 0,
                                    queue: !1
                                })
                            }
                        }), z($caption, a.transition), a.indicators && v.eq(q).removeClass("active"), r.eq(f).velocity({
                            opacity: 1
                        }, {
                            duration: a.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), r.eq(f).find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: a.transition,
                            delay: a.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), r.eq(f).addClass("active"), a.indicators && v.eq(f).addClass("active"))
                    }
                    var w, v, u, t = d(this),
                        s = t.find("ul.slides").first(),
                        r = s.find("li"),
                        q = s.find(".active").index(); - 1 != q && (w = r.eq(q)), t.hasClass("fullscreen") || (a.indicators ? t.height(a.height + 40) : t.height(a.height), s.height(a.height)), r.find(".caption").each(function() {
                        z(d(this), 0)
                    }), r.find("img").each(function() {
                        var f = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                        d(this).attr("src") !== f && (d(this).css("background-image", "url(" + d(this).attr("src") + ")"), d(this).attr("src", f))
                    }), a.indicators && (v = d('<ul class="indicators"></ul>'), r.each(function(g) {
                        var f = d('<li class="indicator-item"></li>');
                        f.click(function() {
                            var i = s.parent(),
                                h = i.find(d(this)).index();
                            x(h), clearInterval(u), u = setInterval(function() {
                                q = s.find(".active").index(), r.length == q + 1 ? q = 0 : q += 1, x(q)
                            }, a.transition + a.interval)
                        }), v.append(f)
                    }), t.append(v), v = t.find("ul.indicators").find("li.indicator-item")), w ? w.show() : (r.first().addClass("active").velocity({
                        opacity: 1
                    }, {
                        duration: a.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), q = 0, w = r.eq(q), a.indicators && v.eq(q).addClass("active")), w.find("img").each(function() {
                        w.find(".caption").velocity({
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }, {
                            duration: a.transition,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }), u = setInterval(function() {
                        q = s.find(".active").index(), x(q + 1)
                    }, a.transition + a.interval);
                    var p = !1,
                        o = !1,
                        b = !1;
                    t.hammer({
                        prevent_default: !1
                    }).bind("pan", function(g) {
                        if ("touch" === g.gesture.pointerType) {
                            clearInterval(u);
                            var f = g.gesture.direction,
                                j = g.gesture.deltaX,
                                i = g.gesture.velocityX;
                            $curr_slide = s.find(".active"), $curr_slide.velocity({
                                translateX: j
                            }, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            }), 4 === f && (j > t.innerWidth() / 2 || -0.65 > i) ? b = !0 : 2 === f && (j < -1 * t.innerWidth() / 2 || i > 0.65) && (o = !0);
                            var h;
                            o && (h = $curr_slide.next(), 0 === h.length && (h = r.first()), h.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            })), b && (h = $curr_slide.prev(), 0 === h.length && (h = r.last()), h.velocity({
                                opacity: 1
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad"
                            }))
                        }
                    }).bind("panend", function(f) {
                        "touch" === f.gesture.pointerType && ($curr_slide = s.find(".active"), p = !1, curr_index = s.find(".active").index(), b || o ? o ? (x(curr_index + 1), $curr_slide.velocity({
                            translateX: -1 * t.innerWidth()
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
                        })) : b && (x(curr_index - 1), $curr_slide.velocity({
                            translateX: t.innerWidth()
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
                        }), o = !1, b = !1, clearInterval(u), u = setInterval(function() {
                            q = s.find(".active").index(), r.length == q + 1 ? q = 0 : q += 1, x(q)
                        }, a.transition + a.interval))
                    }), t.on("sliderPause", function() {
                        clearInterval(u)
                    }), t.on("sliderStart", function() {
                        clearInterval(u), u = setInterval(function() {
                            q = s.find(".active").index(), r.length == q + 1 ? q = 0 : q += 1, x(q)
                        }, a.transition + a.interval)
                    }), t.on("sliderNext", function() {
                        q = s.find(".active").index(), x(q + 1)
                    }), t.on("sliderPrev", function() {
                        q = s.find(".active").index(), x(q - 1)
                    })
                })
            },
            pause: function() {
                d(this).trigger("sliderPause")
            },
            start: function() {
                d(this).trigger("sliderStart")
            },
            next: function() {
                d(this).trigger("sliderNext")
            },
            prev: function() {
                d(this).trigger("sliderPrev")
            }
        };
        d.fn.slider = function(a) {
            return c[a] ? c[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void d.error("Method " + a + " does not exist on jQuery.tooltip") : c.init.apply(this, arguments)
        }
    }(jQuery),
    function(b) {
        b(document).ready(function() {
            b(document).on("click.card", ".card", function(a) {
                b(this).find("> .card-reveal").length && (b(a.target).is(b(".card-reveal .card-title")) || b(a.target).is(b(".card-reveal .card-title i")) ? b(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        b(this).css({
                            display: "none"
                        })
                    }
                }) : (b(a.target).is(b(".card .activator")) || b(a.target).is(b(".card .activator i"))) && (b(a.target).closest(".card").css("overflow", "hidden"), b(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                }))), b(".card-reveal").closest(".card").css("overflow", "hidden")
            })
        })
    }(jQuery),
    function(b) {
        b(document).ready(function() {
            b(document).on("click.chip", ".chip .material-icons", function(a) {
                b(this).parent().remove()
            })
        })
    }(jQuery),
    function(b) {
        b(document).ready(function() {
            b.fn.pushpin = function(a) {
                var d = {
                    top: 0,
                    bottom: 1 / 0,
                    offset: 0
                };
                return a = b.extend(d, a), $index = 0, this.each(function() {
                    function l(c) {
                        c.removeClass("pin-top"), c.removeClass("pinned"), c.removeClass("pin-bottom")
                    }

                    function k(f, c) {
                        f.each(function() {
                            a.top <= c && a.bottom >= c && !b(this).hasClass("pinned") && (l(b(this)), b(this).css("top", a.offset), b(this).addClass("pinned")), c < a.top && !b(this).hasClass("pin-top") && (l(b(this)), b(this).css("top", 0), b(this).addClass("pin-top")), c > a.bottom && !b(this).hasClass("pin-bottom") && (l(b(this)), b(this).addClass("pin-bottom"), b(this).css("top", a.bottom - h))
                        })
                    }
                    var j = Materialize.guid(),
                        i = b(this),
                        h = b(this).offset().top;
                    k(i, b(window).scrollTop()), b(window).on("scroll." + j, function() {
                        var e = b(window).scrollTop() + a.offset;
                        k(i, e)
                    })
                })
            }
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(b) {
                var a = e(this);
                d(a)
            }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(a) {
                var c = e(this);
                f(c)
            }), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(c) {
                var b = e(this),
                    a = b.parent();
                a.hasClass("active") ? f(a) : d(a)
            })
        }), e.fn.extend({
            openFAB: function() {
                d(e(this))
            },
            closeFAB: function() {
                f(e(this))
            }
        });
        var d = function(a) {
                if ($this = a, $this.hasClass("active") === !1) {
                    var j, i, h = $this.hasClass("horizontal");
                    h === !0 ? i = 40 : j = 40, $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: j + "px",
                        translateX: i + "px"
                    }, {
                        duration: 0
                    });
                    var g = 0;
                    $this.find("ul .btn-floating").reverse().each(function() {
                        e(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: g
                        }), g += 40
                    })
                }
            },
            f = function(h) {
                $this = h;
                var g, j, i = $this.hasClass("horizontal");
                i === !0 ? j = 40 : g = 40, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: g + "px",
                    translateX: j + "px"
                }, {
                    duration: 80
                })
            }
    }(jQuery),
    function(b) {
        Materialize.fadeInImage = function(a) {
            var d = b(a);
            d.css({
                opacity: 0
            }), b(d).velocity({
                opacity: 1
            }, {
                duration: 650,
                queue: !1,
                easing: "easeOutSine"
            }), b(d).velocity({
                opacity: 1
            }, {
                duration: 1300,
                queue: !1,
                easing: "swing",
                step: function(f, i) {
                    i.start = 100;
                    var h = f / 100,
                        g = 150 - (100 - f) / 1.75;
                    100 > g && (g = 100), f >= 0 && b(this).css({
                        "-webkit-filter": "grayscale(" + h + ")brightness(" + g + "%)",
                        filter: "grayscale(" + h + ")brightness(" + g + "%)"
                    })
                }
            })
        }, Materialize.showStaggeredList = function(a) {
            var d = 0;
            b(a).find("li").velocity({
                translateX: "-100px"
            }, {
                duration: 0
            }), b(a).find("li").each(function() {
                b(this).velocity({
                    opacity: "1",
                    translateX: "0"
                }, {
                    duration: 800,
                    delay: d,
                    easing: [60, 10]
                }), d += 120
            })
        }, b(document).ready(function() {
            var a = !1,
                d = !1;
            b(".dismissable").each(function() {
                b(this).hammer({
                    prevent_default: !1
                }).bind("pan", function(l) {
                    if ("touch" === l.gesture.pointerType) {
                        var k = b(this),
                            j = l.gesture.direction,
                            i = l.gesture.deltaX,
                            c = l.gesture.velocityX;
                        k.velocity({
                            translateX: i
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), 4 === j && (i > k.innerWidth() / 2 || -0.75 > c) && (a = !0), 2 === j && (i < -1 * k.innerWidth() / 2 || c > 0.75) && (d = !0)
                    }
                }).bind("panend", function(h) {
                    if (Math.abs(h.gesture.deltaX) < b(this).innerWidth() / 2 && (d = !1, a = !1), "touch" === h.gesture.pointerType) {
                        var g = b(this);
                        if (a || d) {
                            var c;
                            c = a ? g.innerWidth() : -1 * g.innerWidth(), g.velocity({
                                translateX: c
                            }, {
                                duration: 100,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    g.css("border", "none"), g.velocity({
                                        height: 0,
                                        padding: 0
                                    }, {
                                        duration: 200,
                                        queue: !1,
                                        easing: "easeOutQuad",
                                        complete: function() {
                                            g.remove()
                                        }
                                    })
                                }
                            })
                        } else {
                            g.velocity({
                                translateX: 0
                            }, {
                                duration: 100,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                        a = !1, d = !1
                    }
                })
            })
        })
    }(jQuery),
    function(b) {
        Materialize.scrollFire = function(d) {
            var c = !1;
            window.addEventListener("scroll", function() {
                c = !0
            }), setInterval(function() {
                if (c) {
                    c = !1;
                    for (var s = window.pageYOffset + window.innerHeight, r = 0; r < d.length; r++) {
                        var q = d[r],
                            p = q.selector,
                            o = q.offset,
                            n = q.callback,
                            m = document.querySelector(p);
                        if (null !== m) {
                            var l = m.getBoundingClientRect().top + window.pageYOffset;
                            if (s > l + o && q.done !== !0) {
                                var a = new Function(n);
                                a(), q.done = !0
                            }
                        }
                    }
                }
            }, 100)
        }
    }(jQuery),
    function(b) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : this.Picker = b(jQuery)
    }(function(v) {
        function u(A, z, k, j) {
            function h() {
                return u._.node("div", u._.node("div", u._.node("div", u._.node("div", B.component.nodes(G.open), E.box), E.wrap), E.frame), E.holder)
            }

            function e() {
                D.data(z, B).addClass(E.input).attr("tabindex", -1).val(D.data("value") ? B.get("select", F.format) : A.value), F.editable || D.on("focus." + G.id + " click." + G.id, function(f) {
                    f.preventDefault(), B.$root[0].focus()
                }).on("keydown." + G.id, b), r(A, {
                    haspopup: !0,
                    expanded: !1,
                    readonly: !1,
                    owns: A.id + "_root"
                })
            }

            function d() {
                B.$root.on({
                    keydown: b,
                    focusin: function(f) {
                        B.$root.removeClass(E.focused), f.stopPropagation()
                    },
                    "mousedown click": function(f) {
                        var g = f.target;
                        g != B.$root.children()[0] && (f.stopPropagation(), "mousedown" != f.type || v(g).is("input, select, textarea, button, option") || (f.preventDefault(), B.$root[0].focus()))
                    }
                }).on({
                    focus: function() {
                        D.addClass(E.target)
                    },
                    blur: function() {
                        D.removeClass(E.target)
                    }
                }).on("focus.toOpen", a).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var f = v(this),
                        w = f.data(),
                        i = f.hasClass(E.navDisabled) || f.hasClass(E.disabled),
                        g = o();
                    g = g && (g.type || g.href), (i || g && !v.contains(B.$root[0], g)) && B.$root[0].focus(), !i && w.nav ? B.set("highlight", B.component.item.highlight, {
                        nav: w.nav
                    }) : !i && "pick" in w ? B.set("select", w.pick) : w.clear ? B.clear().close(!0) : w.close && B.close(!0)
                }), r(B.$root[0], "hidden", !0)
            }

            function c() {
                var f;
                F.hiddenName === !0 ? (f = A.name, A.name = "") : (f = ["string" == typeof F.hiddenPrefix ? F.hiddenPrefix : "", "string" == typeof F.hiddenSuffix ? F.hiddenSuffix : "_submit"], f = f[0] + A.name + f[1]), B._hidden = v('<input type=hidden name="' + f + '"' + (D.data("value") || A.value ? ' value="' + B.get("select", F.formatSubmit) + '"' : "") + ">")[0], D.on("change." + G.id, function() {
                    B._hidden.value = A.value ? B.get("select", F.formatSubmit) : ""
                }), F.container ? v(F.container).append(B._hidden) : D.after(B._hidden)
            }

            function b(g) {
                var f = g.keyCode,
                    i = /^(8|46)$/.test(f);
                return 27 == f ? (B.close(), !1) : void((32 == f || i || !G.open && B.component.key[f]) && (g.preventDefault(), g.stopPropagation(), i ? B.clear().close() : B.open()))
            }

            function a(f) {
                f.stopPropagation(), "focus" == f.type && B.$root.addClass(E.focused), B.open()
            }
            if (!A) {
                return u
            }
            var H = !1,
                G = {
                    id: A.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                F = k ? v.extend(!0, {}, k.defaults, j) : j || {},
                E = v.extend({}, u.klasses(), F.klass),
                D = v(A),
                C = function() {
                    return this.start()
                },
                B = C.prototype = {
                    constructor: C,
                    $node: D,
                    start: function() {
                        return G && G.start ? B : (G.methods = {}, G.start = !0, G.open = !1, G.type = A.type, A.autofocus = A == o(), A.readOnly = !F.editable, A.id = A.id || G.id, "text" != A.type && (A.type = "text"), B.component = new k(B, F), B.$root = v(u._.node("div", h(), E.picker, 'id="' + A.id + '_root" tabindex="0"')), d(), F.formatSubmit && c(), e(), F.container ? v(F.container).append(B.$root) : D.after(B.$root), B.on({
                            start: B.component.onStart,
                            render: B.component.onRender,
                            stop: B.component.onStop,
                            open: B.component.onOpen,
                            close: B.component.onClose,
                            set: B.component.onSet
                        }).on({
                            start: F.onStart,
                            render: F.onRender,
                            stop: F.onStop,
                            open: F.onOpen,
                            close: F.onClose,
                            set: F.onSet
                        }), H = t(B.$root.children()[0]), A.autofocus && B.open(), B.trigger("start").trigger("render"))
                    },
                    render: function(f) {
                        return f ? B.$root.html(h()) : B.$root.find("." + E.box).html(B.component.nodes(G.open)), B.trigger("render")
                    },
                    stop: function() {
                        return G.start ? (B.close(), B._hidden && B._hidden.parentNode.removeChild(B._hidden), B.$root.remove(), D.removeClass(E.input).removeData(z), setTimeout(function() {
                            D.off("." + G.id)
                        }, 0), A.type = G.type, A.readOnly = !1, B.trigger("stop"), G.methods = {}, G.start = !1, B) : B
                    },
                    open: function(f) {
                        return G.open ? B : (D.addClass(E.active), r(A, "expanded", !0), setTimeout(function() {
                            B.$root.addClass(E.opened), r(B.$root[0], "hidden", !1)
                        }, 0), f !== !1 && (G.open = !0, H && l.css("overflow", "hidden").css("padding-right", "+=" + s()), B.$root[0].focus(), m.on("click." + G.id + " focusin." + G.id, function(i) {
                            var g = i.target;
                            g != A && g != document && 3 != i.which && B.close(g === B.$root.children()[0])
                        }).on("keydown." + G.id, function(x) {
                            var w = x.keyCode,
                                i = B.component.key[w],
                                g = x.target;
                            27 == w ? B.close(!0) : g != B.$root[0] || !i && 13 != w ? v.contains(B.$root[0], g) && 13 == w && (x.preventDefault(), g.click()) : (x.preventDefault(), i ? u._.trigger(B.component.key.go, B, [u._.trigger(i)]) : B.$root.find("." + E.highlighted).hasClass(E.disabled) || B.set("select", B.component.item.highlight).close())
                        })), B.trigger("open"))
                    },
                    close: function(f) {
                        return f && (B.$root.off("focus.toOpen")[0].focus(), setTimeout(function() {
                            B.$root.on("focus.toOpen", a)
                        }, 0)), D.removeClass(E.active), r(A, "expanded", !1), setTimeout(function() {
                            B.$root.removeClass(E.opened + " " + E.focused), r(B.$root[0], "hidden", !0)
                        }, 0), G.open ? (G.open = !1, H && l.css("overflow", "").css("padding-right", "-=" + s()), m.off("." + G.id), B.trigger("close")) : B
                    },
                    clear: function(f) {
                        return B.set("clear", null, f)
                    },
                    set: function(i, L, K) {
                        var J, I, x = v.isPlainObject(i),
                            w = x ? i : {};
                        if (K = x && v.isPlainObject(L) ? L : K || {}, i) {
                            x || (w[i] = L);
                            for (J in w) {
                                I = w[J], J in B.component.item && (void 0 === I && (I = null), B.component.set(J, I, K)), ("select" == J || "clear" == J) && D.val("clear" == J ? "" : B.get(J, F.format)).trigger("change")
                            }
                            B.render()
                        }
                        return K.muted ? B : B.trigger("set", w)
                    },
                    get: function(f, i) {
                        if (f = f || "value", null != G[f]) {
                            return G[f]
                        }
                        if ("valueSubmit" == f) {
                            if (B._hidden) {
                                return B._hidden.value
                            }
                            f = "value"
                        }
                        if ("value" == f) {
                            return A.value
                        }
                        if (f in B.component.item) {
                            if ("string" == typeof i) {
                                var g = B.component.get(f);
                                return g ? u._.trigger(B.component.formats.toString, B.component, [i, g]) : ""
                            }
                            return B.component.get(f)
                        }
                    },
                    on: function(i, L, K) {
                        var J, I, x = v.isPlainObject(i),
                            w = x ? i : {};
                        if (i) {
                            x || (w[i] = L);
                            for (J in w) {
                                I = w[J], K && (J = "_" + J), G.methods[J] = G.methods[J] || [], G.methods[J].push(I)
                            }
                        }
                        return B
                    },
                    off: function() {
                        var g, f, i = arguments;
                        for (g = 0, namesCount = i.length; g < namesCount; g += 1) {
                            f = i[g], f in G.methods && delete G.methods[f]
                        }
                        return B
                    },
                    trigger: function(f, i) {
                        var g = function(w) {
                            var x = G.methods[w];
                            x && x.map(function(I) {
                                u._.trigger(I, B, [i])
                            })
                        };
                        return g("_" + f), g(f), B
                    }
                };
            return new C
        }

        function t(e) {
            var d, f = "position";
            return e.currentStyle ? d = e.currentStyle[f] : window.getComputedStyle && (d = getComputedStyle(e)[f]), "fixed" == d
        }

        function s() {
            if (l.height() <= n.height()) {
                return 0
            }
            var a = v('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                h = a[0].offsetWidth;
            a.css("overflow", "scroll");
            var g = v('<div style="width:100%" />').appendTo(a),
                f = g[0].offsetWidth;
            return a.remove(), h - f
        }

        function r(a, h, g) {
            if (v.isPlainObject(h)) {
                for (var f in h) {
                    q(a, f, h[f])
                }
            } else {
                q(a, h, g)
            }
        }

        function q(e, d, f) {
            e.setAttribute(("role" == d ? "" : "aria-") + d, f)
        }

        function p(a, j) {
            v.isPlainObject(a) || (a = {
                attribute: j
            }), j = "";
            for (var i in a) {
                var h = ("role" == i ? "" : "aria-") + i,
                    g = a[i];
                j += null == g ? "" : h + '="' + a[i] + '"'
            }
            return j
        }

        function o() {
            try {
                return document.activeElement
            } catch (b) {}
        }
        var n = v(window),
            m = v(document),
            l = v(document.documentElement);
        return u.klasses = function(b) {
            return b = b || "picker", {
                picker: b,
                opened: b + "--opened",
                focused: b + "--focused",
                input: b + "__input",
                active: b + "__input--active",
                target: b + "__input--target",
                holder: b + "__holder",
                frame: b + "__frame",
                wrap: b + "__wrap",
                box: b + "__box"
            }
        }, u._ = {
            group: function(b) {
                for (var h, g = "", f = u._.trigger(b.min, b); f <= u._.trigger(b.max, b, [f]); f += b.i) {
                    h = u._.trigger(b.item, b, [f]), g += u._.node(b.node, h[0], h[1], h[2])
                }
                return g
            },
            node: function(a, h, g, f) {
                return h ? (h = v.isArray(h) ? h.join("") : h, g = g ? ' class="' + g + '"' : "", f = f ? " " + f : "", "<" + a + g + f + ">" + h + "</" + a + ">") : ""
            },
            lead: function(b) {
                return (10 > b ? "0" : "") + b
            },
            trigger: function(e, d, f) {
                return "function" == typeof e ? e.apply(d, f || []) : e
            },
            digits: function(b) {
                return /\d/.test(b[1]) ? 2 : 1
            },
            isDate: function(b) {
                return {}.toString.call(b).indexOf("Date") > -1 && this.isInteger(b.getDate())
            },
            isInteger: function(b) {
                return {}.toString.call(b).indexOf("Number") > -1 && b % 1 === 0
            },
            ariaAttr: p
        }, u.extend = function(b, a) {
            v.fn[b] = function(h, d) {
                var c = this.data(b);
                return "picker" == h ? c : c && "string" == typeof h ? u._.trigger(c[h], c, [d]) : this.each(function() {
                    var e = v(this);
                    e.data(b) || new u(this, b, a, h)
                })
            }, v.fn[b].defaults = a.defaults
        }, u
    }),
    function(b) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], b) : "object" == typeof exports ? module.exports = b(require("./picker.js"), require("jquery")) : b(Picker, jQuery)
    }(function(h, g) {
        function l(u, t) {
            var s = this,
                r = u.$node[0],
                q = r.value,
                p = u.$node.data("value"),
                o = p || q,
                n = p ? t.formatSubmit : t.format,
                m = function() {
                    return r.currentStyle ? "rtl" == r.currentStyle.direction : "rtl" == getComputedStyle(u.$root[0]).direction
                };
            s.settings = t, s.$node = u.$node, s.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, s.item = {}, s.item.clear = null, s.item.disable = (t.disable || []).slice(0), s.item.enable = - function(b) {
                return b[0] === !0 ? b.shift() : -1
            }(s.item.disable), s.set("min", t.min).set("max", t.max).set("now"), o ? s.set("select", o, {
                format: n
            }) : s.set("select", null).set("highlight", s.item.now), s.key = {
                40: 7,
                38: -7,
                39: function() {
                    return m() ? -1 : 1
                },
                37: function() {
                    return m() ? 1 : -1
                },
                go: function(e) {
                    var c = s.item.highlight,
                        f = new Date(c.year, c.month, c.date + e);
                    s.set("highlight", f, {
                        interval: e
                    }), this.render()
                }
            }, u.on("render", function() {
                u.$root.find("." + t.klass.selectMonth).on("change", function() {
                    var a = this.value;
                    a && (u.set("highlight", [u.get("view").year, a, u.get("highlight").date]), u.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), u.$root.find("." + t.klass.selectYear).on("change", function() {
                    var a = this.value;
                    a && (u.set("highlight", [a, u.get("view").month, u.get("highlight").date]), u.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var a = "";
                s.disabled(s.get("now")) && (a = ":not(." + t.klass.buttonToday + ")"), u.$root.find("button" + a + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                u.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        var k = 7,
            j = 6,
            i = h._;
        l.prototype.set = function(m, f, p) {
            var o = this,
                n = o.item;
            return null === f ? ("clear" == m && (m = "select"), n[m] = f, o) : (n["enable" == m ? "disable" : "flip" == m ? "enable" : m] = o.queue[m].split(" ").map(function(a) {
                return f = o[a](m, f, p)
            }).pop(), "select" == m ? o.set("highlight", n.select, p) : "highlight" == m ? o.set("view", n.highlight, p) : m.match(/^(flip|min|max|disable|enable)$/) && (n.select && o.disabled(n.select) && o.set("select", n.select, p), n.highlight && o.disabled(n.highlight) && o.set("highlight", n.highlight, p)), o)
        }, l.prototype.get = function(b) {
            return this.item[b]
        }, l.prototype.create = function(b, o, n) {
            var m, f = this;
            return o = void 0 === o ? b : o, o == -(1 / 0) || o == 1 / 0 ? m = o : g.isPlainObject(o) && i.isInteger(o.pick) ? o = o.obj : g.isArray(o) ? (o = new Date(o[0], o[1], o[2]), o = i.isDate(o) ? o : f.create().obj) : o = i.isInteger(o) || i.isDate(o) ? f.normalize(new Date(o), n) : f.now(b, o, n), {
                year: m || o.getFullYear(),
                month: m || o.getMonth(),
                date: m || o.getDate(),
                day: m || o.getDay(),
                obj: m || o,
                pick: m || o.getTime()
            }
        }, l.prototype.createRange = function(b, n) {
            var m = this,
                f = function(c) {
                    return c === !0 || g.isArray(c) || i.isDate(c) ? m.create(c) : c
                };
            return i.isInteger(b) || (b = f(b)), i.isInteger(n) || (n = f(n)), i.isInteger(b) && g.isPlainObject(n) ? b = [n.year, n.month, n.date + b] : i.isInteger(n) && g.isPlainObject(b) && (n = [b.year, b.month, b.date + n]), {
                from: f(b),
                to: f(n)
            }
        }, l.prototype.withinRange = function(d, c) {
            return d = this.createRange(d.from, d.to), c.pick >= d.from.pick && c.pick <= d.to.pick
        }, l.prototype.overlapRanges = function(e, d) {
            var f = this;
            return e = f.createRange(e.from, e.to), d = f.createRange(d.from, d.to), f.withinRange(e, d.from) || f.withinRange(e, d.to) || f.withinRange(d, e.from) || f.withinRange(d, e.to)
        }, l.prototype.now = function(e, d, f) {
            return d = new Date, f && f.rel && d.setDate(d.getDate() + f.rel), this.normalize(d, f)
        }, l.prototype.navigate = function(u, t, s) {
            var r, q, p, o, n = g.isArray(t),
                m = g.isPlainObject(t),
                b = this.item.view;
            if (n || m) {
                for (m ? (q = t.year, p = t.month, o = t.date) : (q = +t[0], p = +t[1], o = +t[2]), s && s.nav && b && b.month !== p && (q = b.year, p = b.month), r = new Date(q, p + (s && s.nav ? s.nav : 0), 1), q = r.getFullYear(), p = r.getMonth(); new Date(q, p, o).getMonth() !== p;) {
                    o -= 1
                }
                t = [q, p, o]
            }
            return t
        }, l.prototype.normalize = function(b) {
            return b.setHours(0, 0, 0, 0), b
        }, l.prototype.measure = function(e, d) {
            var f = this;
            return d ? "string" == typeof d ? d = f.parse(e, d) : i.isInteger(d) && (d = f.now(e, d, {
                rel: d
            })) : d = "min" == e ? -(1 / 0) : 1 / 0, d
        }, l.prototype.viewset = function(d, c) {
            return this.create([c.year, c.month, 1])
        }, l.prototype.validate = function(C, B, A) {
            var z, x, w, v, u = this,
                t = B,
                s = A && A.interval ? A.interval : 1,
                r = -1 === u.item.enable,
                q = u.item.min,
                f = u.item.max,
                b = r && u.item.disable.filter(function(c) {
                    if (g.isArray(c)) {
                        var e = u.create(c).pick;
                        e < B.pick ? z = !0 : e > B.pick && (x = !0)
                    }
                    return i.isInteger(c)
                }).length;
            if ((!A || !A.nav) && (!r && u.disabled(B) || r && u.disabled(B) && (b || z || x) || !r && (B.pick <= q.pick || B.pick >= f.pick))) {
                for (r && !b && (!x && s > 0 || !z && 0 > s) && (s *= -1); u.disabled(B) && (Math.abs(s) > 1 && (B.month < t.month || B.month > t.month) && (B = t, s = s > 0 ? 1 : -1), B.pick <= q.pick ? (w = !0, s = 1, B = u.create([q.year, q.month, q.date + (B.pick === q.pick ? 0 : -1)])) : B.pick >= f.pick && (v = !0, s = -1, B = u.create([f.year, f.month, f.date + (B.pick === f.pick ? 0 : 1)])), !w || !v);) {
                    B = u.create([B.year, B.month, B.date + s])
                }
            }
            return B
        }, l.prototype.disabled = function(b) {
            var f = this,
                e = f.item.disable.filter(function(a) {
                    return i.isInteger(a) ? b.day === (f.settings.firstDay ? a : a - 1) % 7 : g.isArray(a) || i.isDate(a) ? b.pick === f.create(a).pick : g.isPlainObject(a) ? f.withinRange(a, b) : void 0
                });
            return e = e.length && !e.filter(function(c) {
                return g.isArray(c) && "inverted" == c[3] || g.isPlainObject(c) && c.inverted
            }).length, -1 === f.item.enable ? !e : e || b.pick < f.item.min.pick || b.pick > f.item.max.pick
        }, l.prototype.parse = function(m, f, p) {
            var o = this,
                n = {};
            return f && "string" == typeof f ? (p && p.format || (p = p || {}, p.format = o.settings.format), o.formats.toArray(p.format).map(function(b) {
                var e = o.formats[b],
                    d = e ? i.trigger(e, o, [f, n]) : b.replace(/^!/, "").length;
                e && (n[b] = f.substr(0, d)), f = f.substr(d)
            }), [n.yyyy || n.yy, +(n.mm || n.m) - 1, n.dd || n.d]) : f
        }, l.prototype.formats = function() {
            function d(f, e, n) {
                var m = f.match(/\w+/)[0];
                return n.mm || n.m || (n.m = e.indexOf(m) + 1), m.length
            }

            function c(b) {
                return b.match(/\w+/)[0].length
            }
            return {
                d: function(f, e) {
                    return f ? i.digits(f) : e.date
                },
                dd: function(f, e) {
                    return f ? 2 : i.lead(e.date)
                },
                ddd: function(b, e) {
                    return b ? c(b) : this.settings.weekdaysShort[e.day]
                },
                dddd: function(b, e) {
                    return b ? c(b) : this.settings.weekdaysFull[e.day]
                },
                m: function(f, e) {
                    return f ? i.digits(f) : e.month + 1
                },
                mm: function(f, e) {
                    return f ? 2 : i.lead(e.month + 1)
                },
                mmm: function(a, f) {
                    var e = this.settings.monthsShort;
                    return a ? d(a, e, f) : e[f.month]
                },
                mmmm: function(a, f) {
                    var e = this.settings.monthsFull;
                    return a ? d(a, e, f) : e[f.month]
                },
                yy: function(f, e) {
                    return f ? 2 : ("" + e.year).slice(2)
                },
                yyyy: function(f, e) {
                    return f ? 4 : e.year
                },
                toArray: function(b) {
                    return b.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(f, e) {
                    var m = this;
                    return m.formats.toArray(f).map(function(b) {
                        return i.trigger(m.formats[b], m, [0, e]) || b.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), l.prototype.isDateExact = function(b, f) {
            var e = this;
            return i.isInteger(b) && i.isInteger(f) || "boolean" == typeof b && "boolean" == typeof f ? b === f : (i.isDate(b) || g.isArray(b)) && (i.isDate(f) || g.isArray(f)) ? e.create(b).pick === e.create(f).pick : g.isPlainObject(b) && g.isPlainObject(f) ? e.isDateExact(b.from, f.from) && e.isDateExact(b.to, f.to) : !1
        }, l.prototype.isDateOverlap = function(b, n) {
            var m = this,
                f = m.settings.firstDay ? 1 : 0;
            return i.isInteger(b) && (i.isDate(n) || g.isArray(n)) ? (b = b % 7 + f, b === m.create(n).day + 1) : i.isInteger(n) && (i.isDate(b) || g.isArray(b)) ? (n = n % 7 + f, n === m.create(b).day + 1) : g.isPlainObject(b) && g.isPlainObject(n) ? m.overlapRanges(b, n) : !1
        }, l.prototype.flipEnable = function(d) {
            var c = this.item;
            c.enable = d || (-1 == c.enable ? 1 : -1)
        }, l.prototype.deactivate = function(b, n) {
            var m = this,
                f = m.item.disable.slice(0);
            return "flip" == n ? m.flipEnable() : n === !1 ? (m.flipEnable(1), f = []) : n === !0 ? (m.flipEnable(-1), f = []) : n.map(function(d) {
                for (var o, e = 0; e < f.length; e += 1) {
                    if (m.isDateExact(d, f[e])) {
                        o = !0;
                        break
                    }
                }
                o || (i.isInteger(d) || i.isDate(d) || g.isArray(d) || g.isPlainObject(d) && d.from && d.to) && f.push(d)
            }), f
        }, l.prototype.activate = function(b, o) {
            var n = this,
                m = n.item.disable,
                f = m.length;
            return "flip" == o ? n.flipEnable() : o === !0 ? (n.flipEnable(1), m = []) : o === !1 ? (n.flipEnable(-1), m = []) : o.map(function(d) {
                var r, q, p, e;
                for (p = 0; f > p; p += 1) {
                    if (q = m[p], n.isDateExact(q, d)) {
                        r = m[p] = null, e = !0;
                        break
                    }
                    if (n.isDateOverlap(q, d)) {
                        g.isPlainObject(d) ? (d.inverted = !0, r = d) : g.isArray(d) ? (r = d, r[3] || r.push("inverted")) : i.isDate(d) && (r = [d.getFullYear(), d.getMonth(), d.getDate(), "inverted"]);
                        break
                    }
                }
                if (r) {
                    for (p = 0; f > p; p += 1) {
                        if (n.isDateExact(m[p], d)) {
                            m[p] = null;
                            break
                        }
                    }
                }
                if (e) {
                    for (p = 0; f > p; p += 1) {
                        if (n.isDateOverlap(m[p], d)) {
                            m[p] = null;
                            break
                        }
                    }
                }
                r && m.push(r)
            }), m.filter(function(c) {
                return null != c
            })
        }, l.prototype.nodes = function(E) {
            var D = this,
                C = D.settings,
                B = D.item,
                A = B.now,
                z = B.select,
                x = B.highlight,
                w = B.view,
                v = B.disable,
                u = B.min,
                t = B.max,
                s = function(m, c) {
                    return C.firstDay && (m.push(m.shift()), c.push(c.shift())), i.node("thead", i.node("tr", i.group({
                        min: 0,
                        max: k - 1,
                        i: 1,
                        node: "th",
                        item: function(a) {
                            return [m[a], C.klass.weekdays, 'scope=col title="' + c[a] + '"']
                        }
                    })))
                }((C.showWeekdaysFull ? C.weekdaysFull : C.weekdaysLetter).slice(0), C.weekdaysFull.slice(0)),
                f = function(b) {
                    return i.node("div", " ", C.klass["nav" + (b ? "Next" : "Prev")] + (b && w.year >= t.year && w.month >= t.month || !b && w.year <= u.year && w.month <= u.month ? " " + C.klass.navDisabled : ""), "data-nav=" + (b || -1) + " " + i.ariaAttr({
                        role: "button",
                        controls: D.$node[0].id + "_table"
                    }) + ' title="' + (b ? C.labelMonthNext : C.labelMonthPrev) + '"')
                },
                e = function(b) {
                    var a = C.showMonthsShort ? C.monthsShort : C.monthsFull;
                    return "short_months" == b && (a = C.monthsShort), C.selectMonths && void 0 == b ? i.node("select", i.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(c) {
                            return [a[c], 0, "value=" + c + (w.month == c ? " selected" : "") + (w.year == u.year && c < u.month || w.year == t.year && c > t.month ? " disabled" : "")]
                        }
                    }), C.klass.selectMonth + " browser-default", (E ? "" : "disabled") + " " + i.ariaAttr({
                        controls: D.$node[0].id + "_table"
                    }) + ' title="' + C.labelMonthSelect + '"') : "short_months" == b ? null != z ? i.node("div", a[z.month]) : i.node("div", a[w.month]) : i.node("div", a[w.month], C.klass.month)
                },
                d = function(G) {
                    var F = w.year,
                        r = C.selectYears === !0 ? 5 : ~~(C.selectYears / 2);
                    if (r) {
                        var q = u.year,
                            n = t.year,
                            m = F - r,
                            c = F + r;
                        if (q > m && (c += q - m, m = q), c > n) {
                            var b = m - q,
                                a = c - n;
                            m -= b > a ? a : b, c = n
                        }
                        if (C.selectYears && void 0 == G) {
                            return i.node("select", i.group({
                                min: m,
                                max: c,
                                i: 1,
                                node: "option",
                                item: function(o) {
                                    return [o, 0, "value=" + o + (F == o ? " selected" : "")]
                                }
                            }), C.klass.selectYear + " browser-default", (E ? "" : "disabled") + " " + i.ariaAttr({
                                controls: D.$node[0].id + "_table"
                            }) + ' title="' + C.labelYearSelect + '"')
                        }
                    }
                    return "raw" == G ? i.node("div", F) : i.node("div", F, C.klass.year)
                };
            return createDayLabel = function() {
                return null != z ? i.node("div", z.date) : i.node("div", A.date)
            }, createWeekdayLabel = function() {
                var m;
                m = null != z ? z.day : A.day;
                var c = C.weekdaysFull[m];
                return c
            }, i.node("div", i.node("div", createWeekdayLabel(), "picker__weekday-display") + i.node("div", e("short_months"), C.klass.month_display) + i.node("div", createDayLabel(), C.klass.day_display) + i.node("div", d("raw"), C.klass.year_display), C.klass.date_display) + i.node("div", i.node("div", (C.selectYears ? e() + d() : e() + d()) + f() + f(1), C.klass.header) + i.node("table", s + i.node("tbody", i.group({
                min: 0,
                max: j - 1,
                i: 1,
                node: "tr",
                item: function(b) {
                    var c = C.firstDay && 0 === D.create([w.year, w.month, 1]).day ? -7 : 0;
                    return [i.group({
                        min: k * b - w.day + c + 1,
                        max: function() {
                            return this.min + k - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(m) {
                            m = D.create([w.year, w.month, m + (C.firstDay ? 1 : 0)]);
                            var r = z && z.pick == m.pick,
                                p = x && x.pick == m.pick,
                                n = v && D.disabled(m) || m.pick < u.pick || m.pick > t.pick,
                                q = i.trigger(D.formats.toString, D, [C.format, m]);
                            return [i.node("div", m.date, function(a) {
                                return a.push(w.month == m.month ? C.klass.infocus : C.klass.outfocus), A.pick == m.pick && a.push(C.klass.now), r && a.push(C.klass.selected), p && a.push(C.klass.highlighted), n && a.push(C.klass.disabled), a.join(" ")
                            }([C.klass.day]), "data-pick=" + m.pick + " " + i.ariaAttr({
                                role: "gridcell",
                                label: q,
                                selected: r && D.$node.val() === q ? !0 : null,
                                activedescendant: p ? !0 : null,
                                disabled: n ? !0 : null
                            })), "", i.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), C.klass.table, 'id="' + D.$node[0].id + '_table" ' + i.ariaAttr({
                role: "grid",
                controls: D.$node[0].id,
                readonly: !0
            })), C.klass.calendar_container) + i.node("div", i.node("button", C.today, "btn-flat picker__today", "type=button data-pick=" + A.pick + (E && !D.disabled(A) ? "" : " disabled") + " " + i.ariaAttr({
                controls: D.$node[0].id
            })) + i.node("button", C.clear, "btn-flat picker__clear", "type=button data-clear=1" + (E ? "" : " disabled") + " " + i.ariaAttr({
                controls: D.$node[0].id
            })) + i.node("button", C.close, "btn-flat picker__close", "type=button data-close=true " + (E ? "" : " disabled") + " " + i.ariaAttr({
                controls: D.$node[0].id
            })), C.klass.footer)
        }, l.defaults = function(b) {
            return {
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
                    table: b + "table",
                    header: b + "header",
                    date_display: b + "date-display",
                    day_display: b + "day-display",
                    month_display: b + "month-display",
                    year_display: b + "year-display",
                    calendar_container: b + "calendar-container",
                    navPrev: b + "nav--prev",
                    navNext: b + "nav--next",
                    navDisabled: b + "nav--disabled",
                    month: b + "month",
                    year: b + "year",
                    selectMonth: b + "select--month",
                    selectYear: b + "select--year",
                    weekdays: b + "weekday",
                    day: b + "day",
                    disabled: b + "day--disabled",
                    selected: b + "day--selected",
                    highlighted: b + "day--highlighted",
                    now: b + "day--today",
                    infocus: b + "day--infocus",
                    outfocus: b + "day--outfocus",
                    footer: b + "footer",
                    buttonClear: b + "button--clear",
                    buttonToday: b + "button--today",
                    buttonClose: b + "button--close"
                }
            }
        }(h.klasses().picker + "__"), h.extend("pickadate", l)
    }),
    function(g) {
        function f() {
            var a = +g(this).attr("length"),
                k = +g(this).val().length,
                e = a >= k;
            g(this).parent().find('span[class="character-counter"]').html(k + "/" + a), h(e, g(this))
        }

        function j(a) {
            var d = g("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
            a.parent().append(d)
        }

        function i() {
            g(this).parent().find('span[class="character-counter"]').html("")
        }

        function h(e, d) {
            var k = d.hasClass("invalid");
            e && k ? d.removeClass("invalid") : e || k || (d.removeClass("valid"), d.addClass("invalid"))
        }
        g.fn.characterCounter = function() {
            return this.each(function() {
                var a = void 0 !== g(this).attr("length");
                a && (g(this).on("input", f), g(this).on("focus", f), g(this).on("blur", i), j(g(this)))
            })
        }, g(document).ready(function() {
            g("input, textarea").characterCounter()
        })
    }(jQuery),
    function(d) {
        var c = {
            init: function(a) {
                var e = {
                    time_constant: 200,
                    dist: -100,
                    shift: 0,
                    padding: 0,
                    full_width: !1
                };
                return a = d.extend(e, a), this.each(function() {
                    function ah() {
                        "undefined" != typeof window.ontouchstart && (J[0].addEventListener("touchstart", Z), J[0].addEventListener("touchmove", Y), J[0].addEventListener("touchend", X)), J[0].addEventListener("mousedown", Z), J[0].addEventListener("mousemove", Y), J[0].addEventListener("mouseup", X), J[0].addEventListener("click", aa)
                    }

                    function ag(f) {
                        return f.targetTouches && f.targetTouches.length >= 1 ? f.targetTouches[0].clientX : f.clientX
                    }

                    function af(f) {
                        return f.targetTouches && f.targetTouches.length >= 1 ? f.targetTouches[0].clientY : f.clientY
                    }

                    function ae(f) {
                        return f >= O ? f % O : 0 > f ? ae(O + f % O) : f
                    }

                    function ad(f) {
                        var q, p, o, n, m, l, k;
                        for (V = "number" == typeof f ? f : V, U = Math.floor((V + Q / 2) / Q), o = V - U * Q, n = 0 > o ? 1 : -1, m = -n * o * 2 / Q, a.full_width ? k = "translateX(0)" : (k = "translateX(" + (J[0].clientWidth - item_width) / 2 + "px) ", k += "translateY(" + (J[0].clientHeight - item_width) / 2 + "px)"), l = W[ae(U)], l.style[b] = k + " translateX(" + -o / 2 + "px) translateX(" + n * a.shift * m * q + "px) translateZ(" + a.dist * m + "px)", l.style.zIndex = 0, a.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - 0.2 * m, l.style.opacity = tweenedOpacity, p = O >> 1, q = 1; p >= q; ++q) {
                            a.full_width ? (zTranslation = a.dist, tweenedOpacity = q === p && 0 > o ? 1 - m : 1) : (zTranslation = a.dist * (2 * q + m * n), tweenedOpacity = 1 - 0.2 * (2 * q + m * n)), l = W[ae(U + q)], l.style[b] = k + " translateX(" + (a.shift + (Q * q - o) / 2) + "px) translateZ(" + zTranslation + "px)", l.style.zIndex = -q, l.style.opacity = tweenedOpacity, a.full_width ? (zTranslation = a.dist, tweenedOpacity = q === p && o > 0 ? 1 - m : 1) : (zTranslation = a.dist * (2 * q - m * n), tweenedOpacity = 1 - 0.2 * (2 * q - m * n)), l = W[ae(U - q)], l.style[b] = k + " translateX(" + (-a.shift + (-Q * q - o) / 2) + "px) translateZ(" + zTranslation + "px)", l.style.zIndex = -q, l.style.opacity = tweenedOpacity
                        }
                        l = W[ae(U)], l.style[b] = k + " translateX(" + -o / 2 + "px) translateX(" + n * a.shift * m + "px) translateZ(" + a.dist * m + "px)", l.style.zIndex = 0, a.full_width ? tweenedOpacity = 1 : tweenedOpacity = 1 - 0.2 * m, l.style.opacity = tweenedOpacity
                    }

                    function ac() {
                        var g, f, i, h;
                        g = Date.now(), f = g - R, R = g, i = V - T, T = V, h = 1000 * i / (1 + f), G = 0.8 * h + 0.2 * G
                    }

                    function ab() {
                        var f, g;
                        I && (f = Date.now() - R, g = I * Math.exp(-f / a.time_constant), g > 2 || -2 > g ? (ad(H - g), requestAnimationFrame(ab)) : ad(H))
                    }

                    function aa(h) {
                        if (N) {
                            return h.preventDefault(), h.stopPropagation(), !1
                        }
                        if (!a.full_width) {
                            var g = d(h.target).closest(".carousel-item").index(),
                                f = U % O - g;
                            0 > f ? Math.abs(f + O) < Math.abs(f) && (f += O) : f > 0 && Math.abs(f - O) < f && (f -= O), 0 > f ? d(this).trigger("carouselNext", [Math.abs(f)]) : f > 0 && d(this).trigger("carouselPrev", [f])
                        }
                    }

                    function Z(f) {
                        S = !0, N = !1, L = !1, M = ag(f), K = af(f), G = I = 0, T = V, R = Date.now(), clearInterval(P), P = setInterval(ac, 100)
                    }

                    function Y(h) {
                        var g, j, i;
                        if (S) {
                            if (g = ag(h), y = af(h), j = M - g, i = Math.abs(K - y), 30 > i && !L) {
                                (j > 2 || -2 > j) && (N = !0, M = g, ad(V + j))
                            } else {
                                if (N) {
                                    return h.preventDefault(), h.stopPropagation(), !1
                                }
                                L = !0
                            }
                        }
                        return N ? (h.preventDefault(), h.stopPropagation(), !1) : void 0
                    }

                    function X(f) {
                        return S = !1, clearInterval(P), H = V, (G > 10 || -10 > G) && (I = 0.9 * G, H = V + I), H = Math.round(H / Q) * Q, I = H - V, R = Date.now(), requestAnimationFrame(ab), f.preventDefault(), f.stopPropagation(), !1
                    }
                    var W, V, U, S, Q, O, M, K, I, H, G, b, T, R, P, N, L, J = d(this);
                    return J.hasClass("initialized") ? !0 : (a.full_width && (a.dist = 0, imageHeight = J.find(".carousel-item img").first().load(function() {
                        J.css("height", d(this).height())
                    })), J.addClass("initialized"), S = !1, V = H = 0, W = [], item_width = J.find(".carousel-item").first().innerWidth(), Q = 2 * item_width + a.padding, J.find(".carousel-item").each(function() {
                        W.push(d(this)[0])
                    }), O = W.length, b = "transform", ["webkit", "Moz", "O", "ms"].every(function(g) {
                        var f = g + "Transform";
                        return "undefined" != typeof document.body.style[f] ? (b = f, !1) : !0
                    }), window.onresize = ad, ah(), ad(V), d(this).on("carouselNext", function(g, f) {
                        void 0 === f && (f = 1), H = V + Q * f, V !== H && (I = H - V, R = Date.now(), requestAnimationFrame(ab))
                    }), void d(this).on("carouselPrev", function(g, f) {
                        void 0 === f && (f = 1), H = V - Q * f, V !== H && (I = H - V, R = Date.now(), requestAnimationFrame(ab))
                    }))
                })
            },
            next: function(a) {
                d(this).trigger("carouselNext", [a])
            },
            prev: function(a) {
                d(this).trigger("carouselPrev", [a])
            }
        };
        d.fn.carousel = function(a) {
            return c[a] ? c[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void d.error("Method " + a + " does not exist on jQuery.carousel") : c.init.apply(this, arguments)
        }
    }(jQuery);
! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "undefined" != typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(function(d) {
    var c = window.Slick || {};
    c = function() {
        function e(i, h) {
            var b, g = this;
            g.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: d(i),
                appendDots: d(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3000,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(j, f) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (f + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
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
                zIndex: 1000
            }, g.initials = {
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
            }, d.extend(g, g.initials), g.activeBreakpoint = null, g.animType = null, g.animProp = null, g.breakpoints = [], g.breakpointSettings = [], g.cssTransitions = !1, g.hidden = "hidden", g.paused = !1, g.positionProp = null, g.respondTo = null, g.rowCount = 1, g.shouldClick = !0, g.$slider = d(i), g.$slidesCache = null, g.transformType = null, g.transitionType = null, g.visibilityChange = "visibilitychange", g.windowWidth = 0, g.windowTimer = null, b = d(i).data("slick") || {}, g.options = d.extend({}, g.defaults, b, h), g.currentSlide = g.options.initialSlide, g.originalSettings = g.options, "undefined" != typeof document.mozHidden ? (g.hidden = "mozHidden", g.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (g.hidden = "webkitHidden", g.visibilityChange = "webkitvisibilitychange"), g.autoPlay = d.proxy(g.autoPlay, g), g.autoPlayClear = d.proxy(g.autoPlayClear, g), g.changeSlide = d.proxy(g.changeSlide, g), g.clickHandler = d.proxy(g.clickHandler, g), g.selectHandler = d.proxy(g.selectHandler, g), g.setPosition = d.proxy(g.setPosition, g), g.swipeHandler = d.proxy(g.swipeHandler, g), g.dragHandler = d.proxy(g.dragHandler, g), g.keyHandler = d.proxy(g.keyHandler, g), g.autoPlayIterator = d.proxy(g.autoPlayIterator, g), g.instanceUid = a++, g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, g.registerBreakpoints(), g.init(!0), g.checkResponsive(!0)
        }
        var a = 0;
        return e
    }(), c.prototype.addSlide = c.prototype.slickAdd = function(a, h, g) {
        var f = this;
        if ("boolean" == typeof h) {
            g = h, h = null
        } else {
            if (0 > h || h >= f.slideCount) {
                return !1
            }
        }
        f.unload(), "number" == typeof h ? 0 === h && 0 === f.$slides.length ? d(a).appendTo(f.$slideTrack) : g ? d(a).insertBefore(f.$slides.eq(h)) : d(a).insertAfter(f.$slides.eq(h)) : g === !0 ? d(a).prependTo(f.$slideTrack) : d(a).appendTo(f.$slideTrack), f.$slides = f.$slideTrack.children(this.options.slide), f.$slideTrack.children(this.options.slide).detach(), f.$slideTrack.append(f.$slides), f.$slides.each(function(e, i) {
            d(i).attr("data-slick-index", e)
        }), f.$slidesCache = f.$slides, f.reinit()
    }, c.prototype.animateHeight = function() {
        var f = this;
        if (1 === f.options.slidesToShow && f.options.adaptiveHeight === !0 && f.options.vertical === !1) {
            var e = f.$slides.eq(f.currentSlide).outerHeight(!0);
            f.$list.animate({
                height: e
            }, f.options.speed)
        }
    }, c.prototype.animateSlide = function(a, h) {
        var g = {},
            f = this;
        f.animateHeight(), f.options.rtl === !0 && f.options.vertical === !1 && (a = -a), f.transformsEnabled === !1 ? f.options.vertical === !1 ? f.$slideTrack.animate({
            left: a
        }, f.options.speed, f.options.easing, h) : f.$slideTrack.animate({
            top: a
        }, f.options.speed, f.options.easing, h) : f.cssTransitions === !1 ? (f.options.rtl === !0 && (f.currentLeft = -f.currentLeft), d({
            animStart: f.currentLeft
        }).animate({
            animStart: a
        }, {
            duration: f.options.speed,
            easing: f.options.easing,
            step: function(b) {
                b = Math.ceil(b), f.options.vertical === !1 ? (g[f.animType] = "translate(" + b + "px, 0px)", f.$slideTrack.css(g)) : (g[f.animType] = "translate(0px," + b + "px)", f.$slideTrack.css(g))
            },
            complete: function() {
                h && h.call()
            }
        })) : (f.applyTransition(), a = Math.ceil(a), f.options.vertical === !1 ? g[f.animType] = "translate3d(" + a + "px, 0px, 0px)" : g[f.animType] = "translate3d(0px," + a + "px, 0px)", f.$slideTrack.css(g), h && setTimeout(function() {
            f.disableTransition(), h.call()
        }, f.options.speed))
    }, c.prototype.asNavFor = function(a) {
        var f = this,
            e = f.options.asNavFor;
        e && null !== e && (e = d(e).not(f.$slider)), null !== e && "object" == typeof e && e.each(function() {
            var b = d(this).slick("getSlick");
            b.unslicked || b.slideHandler(a, !0)
        })
    }, c.prototype.applyTransition = function(f) {
        var e = this,
            g = {};
        e.options.fade === !1 ? g[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : g[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(g) : e.$slides.eq(f).css(g)
    }, c.prototype.autoPlay = function() {
        var b = this;
        b.autoPlayTimer && clearInterval(b.autoPlayTimer), b.slideCount > b.options.slidesToShow && b.paused !== !0 && (b.autoPlayTimer = setInterval(b.autoPlayIterator, b.options.autoplaySpeed))
    }, c.prototype.autoPlayClear = function() {
        var b = this;
        b.autoPlayTimer && clearInterval(b.autoPlayTimer)
    }, c.prototype.autoPlayIterator = function() {
        var b = this;
        b.options.infinite === !1 ? 1 === b.direction ? (b.currentSlide + 1 === b.slideCount - 1 && (b.direction = 0), b.slideHandler(b.currentSlide + b.options.slidesToScroll)) : (b.currentSlide - 1 === 0 && (b.direction = 1), b.slideHandler(b.currentSlide - b.options.slidesToScroll)) : b.slideHandler(b.currentSlide + b.options.slidesToScroll)
    }, c.prototype.buildArrows = function() {
        var a = this;
        a.options.arrows === !0 && (a.$prevArrow = d(a.options.prevArrow).addClass("slick-arrow"), a.$nextArrow = d(a.options.nextArrow).addClass("slick-arrow"), a.slideCount > a.options.slidesToShow ? (a.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), a.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), a.htmlExpr.test(a.options.prevArrow) && a.$prevArrow.prependTo(a.options.appendArrows), a.htmlExpr.test(a.options.nextArrow) && a.$nextArrow.appendTo(a.options.appendArrows), a.options.infinite !== !0 && a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : a.$prevArrow.add(a.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, c.prototype.buildDots = function() {
        var f, e, a = this;
        if (a.options.dots === !0 && a.slideCount > a.options.slidesToShow) {
            for (e = '<ul class="' + a.options.dotsClass + '">', f = 0; f <= a.getDotCount(); f += 1) {
                e += "<li>" + a.options.customPaging.call(this, a, f) + "</li>"
            }
            e += "</ul>", a.$dots = d(e).appendTo(a.options.appendDots), a.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, c.prototype.buildOut = function() {
        var a = this;
        a.$slides = a.$slider.children(a.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), a.slideCount = a.$slides.length, a.$slides.each(function(e, f) {
            d(f).attr("data-slick-index", e).data("originalStyling", d(f).attr("style") || "")
        }), a.$slider.addClass("slick-slider"), a.$slideTrack = 0 === a.slideCount ? d('<div class="slick-track"/>').appendTo(a.$slider) : a.$slides.wrapAll('<div class="slick-track"/>').parent(), a.$list = a.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), a.$slideTrack.css("opacity", 0), (a.options.centerMode === !0 || a.options.swipeToSlide === !0) && (a.options.slidesToScroll = 1), d("img[data-lazy]", a.$slider).not("[src]").addClass("slick-loading"), a.setupInfinite(), a.buildArrows(), a.buildDots(), a.updateDots(), a.setSlideClasses("number" == typeof a.currentSlide ? a.currentSlide : 0), a.options.draggable === !0 && a.$list.addClass("draggable")
    }, c.prototype.buildRows = function() {
        var u, t, s, r, q, p, o, v = this;
        if (r = document.createDocumentFragment(), p = v.$slider.children(), v.options.rows > 1) {
            for (o = v.options.slidesPerRow * v.options.rows, q = Math.ceil(p.length / o), u = 0; q > u; u++) {
                var n = document.createElement("div");
                for (t = 0; t < v.options.rows; t++) {
                    var m = document.createElement("div");
                    for (s = 0; s < v.options.slidesPerRow; s++) {
                        var l = u * o + (t * v.options.slidesPerRow + s);
                        p.get(l) && m.appendChild(p.get(l))
                    }
                    n.appendChild(m)
                }
                r.appendChild(n)
            }
            v.$slider.html(r), v.$slider.children().children().children().css({
                width: 100 / v.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, c.prototype.checkResponsive = function(r, q) {
        var o, n, m, p = this,
            l = !1,
            k = p.$slider.width(),
            a = window.innerWidth || d(window).width();
        if ("window" === p.respondTo ? m = a : "slider" === p.respondTo ? m = k : "min" === p.respondTo && (m = Math.min(a, k)), p.options.responsive && p.options.responsive.length && null !== p.options.responsive) {
            n = null;
            for (o in p.breakpoints) {
                p.breakpoints.hasOwnProperty(o) && (p.originalSettings.mobileFirst === !1 ? m < p.breakpoints[o] && (n = p.breakpoints[o]) : m > p.breakpoints[o] && (n = p.breakpoints[o]))
            }
            null !== n ? null !== p.activeBreakpoint ? (n !== p.activeBreakpoint || q) && (p.activeBreakpoint = n, "unslick" === p.breakpointSettings[n] ? p.unslick(n) : (p.options = d.extend({}, p.originalSettings, p.breakpointSettings[n]), r === !0 && (p.currentSlide = p.options.initialSlide), p.refresh(r)), l = n) : (p.activeBreakpoint = n, "unslick" === p.breakpointSettings[n] ? p.unslick(n) : (p.options = d.extend({}, p.originalSettings, p.breakpointSettings[n]), r === !0 && (p.currentSlide = p.options.initialSlide), p.refresh(r)), l = n) : null !== p.activeBreakpoint && (p.activeBreakpoint = null, p.options = p.originalSettings, r === !0 && (p.currentSlide = p.options.initialSlide), p.refresh(r), l = n), r || l === !1 || p.$slider.trigger("breakpoint", [p, l])
        }
    }, c.prototype.changeSlide = function(a, p) {
        var m, l, k, o = this,
            n = d(a.target);
        switch (n.is("a") && a.preventDefault(), n.is("li") || (n = n.closest("li")), k = o.slideCount % o.options.slidesToScroll !== 0, m = k ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, a.data.message) {
            case "previous":
                l = 0 === m ? o.options.slidesToScroll : o.options.slidesToShow - m, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - l, !1, p);
                break;
            case "next":
                l = 0 === m ? o.options.slidesToScroll : m, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + l, !1, p);
                break;
            case "index":
                var j = 0 === a.data.index ? 0 : a.data.index || n.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(j), !1, p), n.children().trigger("focus");
                break;
            default:
                return
        }
    }, c.prototype.checkNavigable = function(g) {
        var j, i, f = this;
        if (j = f.getNavigableIndexes(), i = 0, g > j[j.length - 1]) {
            g = j[j.length - 1]
        } else {
            for (var h in j) {
                if (g < j[h]) {
                    g = i;
                    break
                }
                i = j[h]
            }
        }
        return g
    }, c.prototype.cleanUpEvents = function() {
        var a = this;
        a.options.dots && null !== a.$dots && (d("li", a.$dots).off("click.slick", a.changeSlide), a.options.pauseOnDotsHover === !0 && a.options.autoplay === !0 && d("li", a.$dots).off("mouseenter.slick", d.proxy(a.setPaused, a, !0)).off("mouseleave.slick", d.proxy(a.setPaused, a, !1))), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow && a.$prevArrow.off("click.slick", a.changeSlide), a.$nextArrow && a.$nextArrow.off("click.slick", a.changeSlide)), a.$list.off("touchstart.slick mousedown.slick", a.swipeHandler), a.$list.off("touchmove.slick mousemove.slick", a.swipeHandler), a.$list.off("touchend.slick mouseup.slick", a.swipeHandler), a.$list.off("touchcancel.slick mouseleave.slick", a.swipeHandler), a.$list.off("click.slick", a.clickHandler), d(document).off(a.visibilityChange, a.visibility), a.$list.off("mouseenter.slick", d.proxy(a.setPaused, a, !0)), a.$list.off("mouseleave.slick", d.proxy(a.setPaused, a, !1)), a.options.accessibility === !0 && a.$list.off("keydown.slick", a.keyHandler), a.options.focusOnSelect === !0 && d(a.$slideTrack).children().off("click.slick", a.selectHandler), d(window).off("orientationchange.slick.slick-" + a.instanceUid, a.orientationChange), d(window).off("resize.slick.slick-" + a.instanceUid, a.resize), d("[draggable!=true]", a.$slideTrack).off("dragstart", a.preventDefault), d(window).off("load.slick.slick-" + a.instanceUid, a.setPosition), d(document).off("ready.slick.slick-" + a.instanceUid, a.setPosition)
    }, c.prototype.cleanUpRows = function() {
        var e, f = this;
        f.options.rows > 1 && (e = f.$slides.children().children(), e.removeAttr("style"), f.$slider.html(e))
    }, c.prototype.clickHandler = function(f) {
        var e = this;
        e.shouldClick === !1 && (f.stopImmediatePropagation(), f.stopPropagation(), f.preventDefault())
    }, c.prototype.destroy = function(a) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), d(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            d(this).attr("style", d(this).data("originalStyling"))
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.unslicked = !0, a || e.$slider.trigger("destroy", [e])
    }, c.prototype.disableTransition = function(f) {
        var e = this,
            g = {};
        g[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(g) : e.$slides.eq(f).css(g)
    }, c.prototype.fadeSlide = function(f, e) {
        var g = this;
        g.cssTransitions === !1 ? (g.$slides.eq(f).css({
            zIndex: g.options.zIndex
        }), g.$slides.eq(f).animate({
            opacity: 1
        }, g.options.speed, g.options.easing, e)) : (g.applyTransition(f), g.$slides.eq(f).css({
            opacity: 1,
            zIndex: g.options.zIndex
        }), e && setTimeout(function() {
            g.disableTransition(f), e.call()
        }, g.options.speed))
    }, c.prototype.fadeSlideOut = function(f) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(f).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(f), e.$slides.eq(f).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, c.prototype.filterSlides = c.prototype.slickFilter = function(f) {
        var e = this;
        null !== f && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(f).appendTo(e.$slideTrack), e.reinit())
    }, c.prototype.getCurrent = c.prototype.slickCurrentSlide = function() {
        var b = this;
        return b.currentSlide
    }, c.prototype.getDotCount = function() {
        var f = this,
            e = 0,
            h = 0,
            g = 0;
        if (f.options.infinite === !0) {
            for (; e < f.slideCount;) {
                ++g, e = h + f.options.slidesToScroll, h += f.options.slidesToScroll <= f.options.slidesToShow ? f.options.slidesToScroll : f.options.slidesToShow
            }
        } else {
            if (f.options.centerMode === !0) {
                g = f.slideCount
            } else {
                for (; e < f.slideCount;) {
                    ++g, e = h + f.options.slidesToScroll, h += f.options.slidesToScroll <= f.options.slidesToShow ? f.options.slidesToScroll : f.options.slidesToShow
                }
            }
        }
        return g - 1
    }, c.prototype.getLeft = function(h) {
        var l, k, i, g = this,
            j = 0;
        return g.slideOffset = 0, k = g.$slides.first().outerHeight(!0), g.options.infinite === !0 ? (g.slideCount > g.options.slidesToShow && (g.slideOffset = g.slideWidth * g.options.slidesToShow * -1, j = k * g.options.slidesToShow * -1), g.slideCount % g.options.slidesToScroll !== 0 && h + g.options.slidesToScroll > g.slideCount && g.slideCount > g.options.slidesToShow && (h > g.slideCount ? (g.slideOffset = (g.options.slidesToShow - (h - g.slideCount)) * g.slideWidth * -1, j = (g.options.slidesToShow - (h - g.slideCount)) * k * -1) : (g.slideOffset = g.slideCount % g.options.slidesToScroll * g.slideWidth * -1, j = g.slideCount % g.options.slidesToScroll * k * -1))) : h + g.options.slidesToShow > g.slideCount && (g.slideOffset = (h + g.options.slidesToShow - g.slideCount) * g.slideWidth, j = (h + g.options.slidesToShow - g.slideCount) * k), g.slideCount <= g.options.slidesToShow && (g.slideOffset = 0, j = 0), g.options.centerMode === !0 && g.options.infinite === !0 ? g.slideOffset += g.slideWidth * Math.floor(g.options.slidesToShow / 2) - g.slideWidth : g.options.centerMode === !0 && (g.slideOffset = 0, g.slideOffset += g.slideWidth * Math.floor(g.options.slidesToShow / 2)), l = g.options.vertical === !1 ? h * g.slideWidth * -1 + g.slideOffset : h * k * -1 + j, g.options.variableWidth === !0 && (i = g.slideCount <= g.options.slidesToShow || g.options.infinite === !1 ? g.$slideTrack.children(".slick-slide").eq(h) : g.$slideTrack.children(".slick-slide").eq(h + g.options.slidesToShow), l = g.options.rtl === !0 ? i[0] ? -1 * (g.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, g.options.centerMode === !0 && (i = g.slideCount <= g.options.slidesToShow || g.options.infinite === !1 ? g.$slideTrack.children(".slick-slide").eq(h) : g.$slideTrack.children(".slick-slide").eq(h + g.options.slidesToShow + 1), l = g.options.rtl === !0 ? i[0] ? -1 * (g.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, l += (g.$list.width() - i.outerWidth()) / 2)), l
    }, c.prototype.getOption = c.prototype.slickGetOption = function(f) {
        var e = this;
        return e.options[f]
    }, c.prototype.getNavigableIndexes = function() {
        var h, g = this,
            f = 0,
            j = 0,
            i = [];
        for (g.options.infinite === !1 ? h = g.slideCount : (f = -1 * g.options.slidesToScroll, j = -1 * g.options.slidesToScroll, h = 2 * g.slideCount); h > f;) {
            i.push(f), f = j + g.options.slidesToScroll, j += g.options.slidesToScroll <= g.options.slidesToShow ? g.options.slidesToScroll : g.options.slidesToShow
        }
        return i
    }, c.prototype.getSlick = function() {
        return this
    }, c.prototype.getSlideCount = function() {
        var h, g, f, a = this;
        return f = a.options.centerMode === !0 ? a.slideWidth * Math.floor(a.options.slidesToShow / 2) : 0, a.options.swipeToSlide === !0 ? (a.$slideTrack.find(".slick-slide").each(function(e, b) {
            return b.offsetLeft - f + d(b).outerWidth() / 2 > -1 * a.swipeLeft ? (g = b, !1) : void 0
        }), h = Math.abs(d(g).attr("data-slick-index") - a.currentSlide) || 1) : a.options.slidesToScroll
    }, c.prototype.goTo = c.prototype.slickGoTo = function(f, e) {
        var g = this;
        g.changeSlide({
            data: {
                message: "index",
                index: parseInt(f)
            }
        }, e)
    }, c.prototype.init = function(a) {
        var e = this;
        d(e.$slider).hasClass("slick-initialized") || (d(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots()), a && e.$slider.trigger("init", [e]), e.options.accessibility === !0 && e.initADA()
    }, c.prototype.initArrowEvents = function() {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.on("click.slick", {
            message: "previous"
        }, b.changeSlide), b.$nextArrow.on("click.slick", {
            message: "next"
        }, b.changeSlide))
    }, c.prototype.initDotEvents = function() {
        var a = this;
        a.options.dots === !0 && a.slideCount > a.options.slidesToShow && d("li", a.$dots).on("click.slick", {
            message: "index"
        }, a.changeSlide), a.options.dots === !0 && a.options.pauseOnDotsHover === !0 && a.options.autoplay === !0 && d("li", a.$dots).on("mouseenter.slick", d.proxy(a.setPaused, a, !0)).on("mouseleave.slick", d.proxy(a.setPaused, a, !1))
    }, c.prototype.initializeEvents = function() {
        var a = this;
        a.initArrowEvents(), a.initDotEvents(), a.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, a.swipeHandler), a.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, a.swipeHandler), a.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, a.swipeHandler), a.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, a.swipeHandler), a.$list.on("click.slick", a.clickHandler), d(document).on(a.visibilityChange, d.proxy(a.visibility, a)), a.$list.on("mouseenter.slick", d.proxy(a.setPaused, a, !0)), a.$list.on("mouseleave.slick", d.proxy(a.setPaused, a, !1)), a.options.accessibility === !0 && a.$list.on("keydown.slick", a.keyHandler), a.options.focusOnSelect === !0 && d(a.$slideTrack).children().on("click.slick", a.selectHandler), d(window).on("orientationchange.slick.slick-" + a.instanceUid, d.proxy(a.orientationChange, a)), d(window).on("resize.slick.slick-" + a.instanceUid, d.proxy(a.resize, a)), d("[draggable!=true]", a.$slideTrack).on("dragstart", a.preventDefault), d(window).on("load.slick.slick-" + a.instanceUid, a.setPosition), d(document).on("ready.slick.slick-" + a.instanceUid, a.setPosition)
    }, c.prototype.initUI = function() {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.show(), b.$nextArrow.show()), b.options.dots === !0 && b.slideCount > b.options.slidesToShow && b.$dots.show(), b.options.autoplay === !0 && b.autoPlay()
    }, c.prototype.keyHandler = function(f) {
        var e = this;
        f.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === f.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === f.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, c.prototype.lazyLoad = function() {
        function h(e) {
            d("img[data-lazy]", e).each(function() {
                var f = d(this),
                    m = d(this).attr("data-lazy"),
                    g = document.createElement("img");
                g.onload = function() {
                    f.animate({
                        opacity: 0
                    }, 100, function() {
                        f.attr("src", m).animate({
                            opacity: 1
                        }, 200, function() {
                            f.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, g.src = m
            })
        }
        var l, k, j, i, a = this;
        a.options.centerMode === !0 ? a.options.infinite === !0 ? (j = a.currentSlide + (a.options.slidesToShow / 2 + 1), i = j + a.options.slidesToShow + 2) : (j = Math.max(0, a.currentSlide - (a.options.slidesToShow / 2 + 1)), i = 2 + (a.options.slidesToShow / 2 + 1) + a.currentSlide) : (j = a.options.infinite ? a.options.slidesToShow + a.currentSlide : a.currentSlide, i = j + a.options.slidesToShow, a.options.fade === !0 && (j > 0 && j--, i <= a.slideCount && i++)), l = a.$slider.find(".slick-slide").slice(j, i), h(l), a.slideCount <= a.options.slidesToShow ? (k = a.$slider.find(".slick-slide"), h(k)) : a.currentSlide >= a.slideCount - a.options.slidesToShow ? (k = a.$slider.find(".slick-cloned").slice(0, a.options.slidesToShow), h(k)) : 0 === a.currentSlide && (k = a.$slider.find(".slick-cloned").slice(-1 * a.options.slidesToShow), h(k))
    }, c.prototype.loadSlider = function() {
        var b = this;
        b.setPosition(), b.$slideTrack.css({
            opacity: 1
        }), b.$slider.removeClass("slick-loading"), b.initUI(), "progressive" === b.options.lazyLoad && b.progressiveLazyLoad()
    }, c.prototype.next = c.prototype.slickNext = function() {
        var b = this;
        b.changeSlide({
            data: {
                message: "next"
            }
        })
    }, c.prototype.orientationChange = function() {
        var b = this;
        b.checkResponsive(), b.setPosition()
    }, c.prototype.pause = c.prototype.slickPause = function() {
        var b = this;
        b.autoPlayClear(), b.paused = !0
    }, c.prototype.play = c.prototype.slickPlay = function() {
        var b = this;
        b.paused = !1, b.autoPlay()
    }, c.prototype.postSlide = function(f) {
        var e = this;
        e.$slider.trigger("afterChange", [e, f]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(), e.options.accessibility === !0 && e.initADA()
    }, c.prototype.prev = c.prototype.slickPrev = function() {
        var b = this;
        b.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, c.prototype.preventDefault = function(b) {
        b.preventDefault()
    }, c.prototype.progressiveLazyLoad = function() {
        var f, e, a = this;
        f = d("img[data-lazy]", a.$slider).length, f > 0 && (e = d("img[data-lazy]", a.$slider).first(), e.attr("src", null), e.attr("src", e.attr("data-lazy")).removeClass("slick-loading").load(function() {
            e.removeAttr("data-lazy"), a.progressiveLazyLoad(), a.options.adaptiveHeight === !0 && a.setPosition()
        }).error(function() {
            e.removeAttr("data-lazy"), a.progressiveLazyLoad()
        }))
    }, c.prototype.refresh = function(a) {
        var g, f, h = this;
        f = h.slideCount - h.options.slidesToShow, h.options.infinite || (h.slideCount <= h.options.slidesToShow ? h.currentSlide = 0 : h.currentSlide > f && (h.currentSlide = f)), g = h.currentSlide, h.destroy(!0), d.extend(h, h.initials, {
            currentSlide: g
        }), h.init(), a || h.changeSlide({
            data: {
                message: "index",
                index: g
            }
        }, !1)
    }, c.prototype.registerBreakpoints = function() {
        var j, i, h, a = this,
            g = a.options.responsive || null;
        if ("array" === d.type(g) && g.length) {
            a.respondTo = a.options.respondTo || "window";
            for (j in g) {
                if (h = a.breakpoints.length - 1, i = g[j].breakpoint, g.hasOwnProperty(j)) {
                    for (; h >= 0;) {
                        a.breakpoints[h] && a.breakpoints[h] === i && a.breakpoints.splice(h, 1), h--
                    }
                    a.breakpoints.push(i), a.breakpointSettings[i] = g[j].settings
                }
            }
            a.breakpoints.sort(function(b, e) {
                return a.options.mobileFirst ? b - e : e - b
            })
        }
    }, c.prototype.reinit = function() {
        var a = this;
        a.$slides = a.$slideTrack.children(a.options.slide).addClass("slick-slide"), a.slideCount = a.$slides.length, a.currentSlide >= a.slideCount && 0 !== a.currentSlide && (a.currentSlide = a.currentSlide - a.options.slidesToScroll), a.slideCount <= a.options.slidesToShow && (a.currentSlide = 0), a.registerBreakpoints(), a.setProps(), a.setupInfinite(), a.buildArrows(), a.updateArrows(), a.initArrowEvents(), a.buildDots(), a.updateDots(), a.initDotEvents(), a.checkResponsive(!1, !0), a.options.focusOnSelect === !0 && d(a.$slideTrack).children().on("click.slick", a.selectHandler), a.setSlideClasses(0), a.setPosition(), a.$slider.trigger("reInit", [a]), a.options.autoplay === !0 && a.focusHandler()
    }, c.prototype.resize = function() {
        var a = this;
        d(window).width() !== a.windowWidth && (clearTimeout(a.windowDelay), a.windowDelay = window.setTimeout(function() {
            a.windowWidth = d(window).width(), a.checkResponsive(), a.unslicked || a.setPosition()
        }, 50))
    }, c.prototype.removeSlide = c.prototype.slickRemove = function(f, e, h) {
        var g = this;
        return "boolean" == typeof f ? (e = f, f = e === !0 ? 0 : g.slideCount - 1) : f = e === !0 ? --f : f, g.slideCount < 1 || 0 > f || f > g.slideCount - 1 ? !1 : (g.unload(), h === !0 ? g.$slideTrack.children().remove() : g.$slideTrack.children(this.options.slide).eq(f).remove(), g.$slides = g.$slideTrack.children(this.options.slide), g.$slideTrack.children(this.options.slide).detach(), g.$slideTrack.append(g.$slides), g.$slidesCache = g.$slides, void g.reinit())
    }, c.prototype.setCSS = function(g) {
        var i, h, f = this,
            j = {};
        f.options.rtl === !0 && (g = -g), i = "left" == f.positionProp ? Math.ceil(g) + "px" : "0px", h = "top" == f.positionProp ? Math.ceil(g) + "px" : "0px", j[f.positionProp] = g, f.transformsEnabled === !1 ? f.$slideTrack.css(j) : (j = {}, f.cssTransitions === !1 ? (j[f.animType] = "translate(" + i + ", " + h + ")", f.$slideTrack.css(j)) : (j[f.animType] = "translate3d(" + i + ", " + h + ", 0px)", f.$slideTrack.css(j)))
    }, c.prototype.setDimensions = function() {
        var f = this;
        f.options.vertical === !1 ? f.options.centerMode === !0 && f.$list.css({
            padding: "0px " + f.options.centerPadding
        }) : (f.$list.height(f.$slides.first().outerHeight(!0) * f.options.slidesToShow), f.options.centerMode === !0 && f.$list.css({
            padding: f.options.centerPadding + " 0px"
        })), f.listWidth = f.$list.width(), f.listHeight = f.$list.height(), f.options.vertical === !1 && f.options.variableWidth === !1 ? (f.slideWidth = Math.ceil(f.listWidth / f.options.slidesToShow), f.$slideTrack.width(Math.ceil(f.slideWidth * f.$slideTrack.children(".slick-slide").length))) : f.options.variableWidth === !0 ? f.$slideTrack.width(5000 * f.slideCount) : (f.slideWidth = Math.ceil(f.listWidth), f.$slideTrack.height(Math.ceil(f.$slides.first().outerHeight(!0) * f.$slideTrack.children(".slick-slide").length)));
        var e = f.$slides.first().outerWidth(!0) - f.$slides.first().width();
        f.options.variableWidth === !1 && f.$slideTrack.children(".slick-slide").width(f.slideWidth - e)
    }, c.prototype.setFade = function() {
        var e, a = this;
        a.$slides.each(function(f, b) {
            e = a.slideWidth * f * -1, a.options.rtl === !0 ? d(b).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: a.options.zIndex - 2,
                opacity: 0
            }) : d(b).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: a.options.zIndex - 2,
                opacity: 0
            })
        }), a.$slides.eq(a.currentSlide).css({
            zIndex: a.options.zIndex - 1,
            opacity: 1
        })
    }, c.prototype.setHeight = function() {
        var f = this;
        if (1 === f.options.slidesToShow && f.options.adaptiveHeight === !0 && f.options.vertical === !1) {
            var e = f.$slides.eq(f.currentSlide).outerHeight(!0);
            f.$list.css("height", e)
        }
    }, c.prototype.setOption = c.prototype.slickSetOption = function(a, l, k) {
        var i, h, j = this;
        if ("responsive" === a && "array" === d.type(l)) {
            for (h in l) {
                if ("array" !== d.type(j.options.responsive)) {
                    j.options.responsive = [l[h]]
                } else {
                    for (i = j.options.responsive.length - 1; i >= 0;) {
                        j.options.responsive[i].breakpoint === l[h].breakpoint && j.options.responsive.splice(i, 1), i--
                    }
                    j.options.responsive.push(l[h])
                }
            }
        } else {
            j.options[a] = l
        }
        k === !0 && (j.unload(), j.reinit())
    }, c.prototype.setPosition = function() {
        var b = this;
        b.setDimensions(), b.setHeight(), b.options.fade === !1 ? b.setCSS(b.getLeft(b.currentSlide)) : b.setFade(), b.$slider.trigger("setPosition", [b])
    }, c.prototype.setProps = function() {
        var f = this,
            e = document.body.style;
        f.positionProp = f.options.vertical === !0 ? "top" : "left", "top" === f.positionProp ? f.$slider.addClass("slick-vertical") : f.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && f.options.useCSS === !0 && (f.cssTransitions = !0), f.options.fade && ("number" == typeof f.options.zIndex ? f.options.zIndex < 3 && (f.options.zIndex = 3) : f.options.zIndex = f.defaults.zIndex), void 0 !== e.OTransform && (f.animType = "OTransform", f.transformType = "-o-transform", f.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (f.animType = !1)), void 0 !== e.MozTransform && (f.animType = "MozTransform", f.transformType = "-moz-transform", f.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (f.animType = !1)), void 0 !== e.webkitTransform && (f.animType = "webkitTransform", f.transformType = "-webkit-transform", f.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (f.animType = !1)), void 0 !== e.msTransform && (f.animType = "msTransform", f.transformType = "-ms-transform", f.transitionType = "msTransition", void 0 === e.msTransform && (f.animType = !1)), void 0 !== e.transform && f.animType !== !1 && (f.animType = "transform", f.transformType = "transform", f.transitionType = "transition"), f.transformsEnabled = f.options.useTransform && null !== f.animType && f.animType !== !1
    }, c.prototype.setSlideClasses = function(h) {
        var l, k, j, i, g = this;
        k = g.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), g.$slides.eq(h).addClass("slick-current"), g.options.centerMode === !0 ? (l = Math.floor(g.options.slidesToShow / 2), g.options.infinite === !0 && (h >= l && h <= g.slideCount - 1 - l ? g.$slides.slice(h - l, h + l + 1).addClass("slick-active").attr("aria-hidden", "false") : (j = g.options.slidesToShow + h, k.slice(j - l + 1, j + l + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === h ? k.eq(k.length - 1 - g.options.slidesToShow).addClass("slick-center") : h === g.slideCount - 1 && k.eq(g.options.slidesToShow).addClass("slick-center")), g.$slides.eq(h).addClass("slick-center")) : h >= 0 && h <= g.slideCount - g.options.slidesToShow ? g.$slides.slice(h, h + g.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : k.length <= g.options.slidesToShow ? k.addClass("slick-active").attr("aria-hidden", "false") : (i = g.slideCount % g.options.slidesToShow, j = g.options.infinite === !0 ? g.options.slidesToShow + h : h, g.options.slidesToShow == g.options.slidesToScroll && g.slideCount - h < g.options.slidesToShow ? k.slice(j - (g.options.slidesToShow - i), j + i).addClass("slick-active").attr("aria-hidden", "false") : k.slice(j, j + g.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === g.options.lazyLoad && g.lazyLoad()
    }, c.prototype.setupInfinite = function() {
        var h, g, f, a = this;
        if (a.options.fade === !0 && (a.options.centerMode = !1), a.options.infinite === !0 && a.options.fade === !1 && (g = null, a.slideCount > a.options.slidesToShow)) {
            for (f = a.options.centerMode === !0 ? a.options.slidesToShow + 1 : a.options.slidesToShow, h = a.slideCount; h > a.slideCount - f; h -= 1) {
                g = h - 1, d(a.$slides[g]).clone(!0).attr("id", "").attr("data-slick-index", g - a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned")
            }
            for (h = 0; f > h; h += 1) {
                g = h, d(a.$slides[g]).clone(!0).attr("id", "").attr("data-slick-index", g + a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned")
            }
            a.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                d(this).attr("id", "")
            })
        }
    }, c.prototype.setPaused = function(f) {
        var e = this;
        e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = f, f ? e.autoPlayClear() : e.autoPlay())
    }, c.prototype.selectHandler = function(a) {
        var h = this,
            g = d(a.target).is(".slick-slide") ? d(a.target) : d(a.target).parents(".slick-slide"),
            f = parseInt(g.attr("data-slick-index"));
        return f || (f = 0), h.slideCount <= h.options.slidesToShow ? (h.setSlideClasses(f), void h.asNavFor(f)) : void h.slideHandler(f)
    }, c.prototype.slideHandler = function(r, q, p) {
        var o, n, m, l, k = null,
            j = this;
        return q = q || !1, j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === r || j.slideCount <= j.options.slidesToShow ? void 0 : (q === !1 && j.asNavFor(r), o = r, k = j.getLeft(o), l = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? l : j.swipeLeft, j.options.infinite === !1 && j.options.centerMode === !1 && (0 > r || r > j.getDotCount() * j.options.slidesToScroll) ? void(j.options.fade === !1 && (o = j.currentSlide, p !== !0 ? j.animateSlide(l, function() {
            j.postSlide(o)
        }) : j.postSlide(o))) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > r || r > j.slideCount - j.options.slidesToScroll) ? void(j.options.fade === !1 && (o = j.currentSlide, p !== !0 ? j.animateSlide(l, function() {
            j.postSlide(o)
        }) : j.postSlide(o))) : (j.options.autoplay === !0 && clearInterval(j.autoPlayTimer), n = 0 > o ? j.slideCount % j.options.slidesToScroll !== 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + o : o >= j.slideCount ? j.slideCount % j.options.slidesToScroll !== 0 ? 0 : o - j.slideCount : o, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, n]), m = j.currentSlide, j.currentSlide = n, j.setSlideClasses(j.currentSlide), j.updateDots(), j.updateArrows(), j.options.fade === !0 ? (p !== !0 ? (j.fadeSlideOut(m), j.fadeSlide(n, function() {
            j.postSlide(n)
        })) : j.postSlide(n), void j.animateHeight()) : void(p !== !0 ? j.animateSlide(k, function() {
            j.postSlide(n)
        }) : j.postSlide(n))))
    }, c.prototype.startLoad = function() {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow.hide(), b.$nextArrow.hide()), b.options.dots === !0 && b.slideCount > b.options.slidesToShow && b.$dots.hide(), b.$slider.addClass("slick-loading")
    }, c.prototype.swipeDirection = function() {
        var g, f, j, i, h = this;
        return g = h.touchObject.startX - h.touchObject.curX, f = h.touchObject.startY - h.touchObject.curY, j = Math.atan2(f, g), i = Math.round(180 * j / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? h.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? h.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? h.options.rtl === !1 ? "right" : "left" : h.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "left" : "right" : "vertical"
    }, c.prototype.swipeEnd = function(f) {
        var g, e = this;
        if (e.dragging = !1, e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0, void 0 === e.touchObject.curX) {
            return !1
        }
        if (e.touchObject.edgeHit === !0 && e.$slider.trigger("edge", [e, e.swipeDirection()]), e.touchObject.swipeLength >= e.touchObject.minSwipe) {
            switch (e.swipeDirection()) {
                case "left":
                    g = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(), e.slideHandler(g), e.currentDirection = 0, e.touchObject = {}, e.$slider.trigger("swipe", [e, "left"]);
                    break;
                case "right":
                    g = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(), e.slideHandler(g), e.currentDirection = 1, e.touchObject = {}, e.$slider.trigger("swipe", [e, "right"])
            }
        } else {
            e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide), e.touchObject = {})
        }
    }, c.prototype.swipeHandler = function(f) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== f.type.indexOf("mouse"))) {
            switch (e.touchObject.fingerCount = f.originalEvent && void 0 !== f.originalEvent.touches ? f.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), f.data.action) {
                case "start":
                    e.swipeStart(f);
                    break;
                case "move":
                    e.swipeMove(f);
                    break;
                case "end":
                    e.swipeEnd(f)
            }
        }
    }, c.prototype.swipeMove = function(j) {
        var o, n, m, l, k, i = this;
        return k = void 0 !== j.originalEvent ? j.originalEvent.touches : null, !i.dragging || k && 1 !== k.length ? !1 : (o = i.getLeft(i.currentSlide), i.touchObject.curX = void 0 !== k ? k[0].pageX : j.clientX, i.touchObject.curY = void 0 !== k ? k[0].pageY : j.clientY, i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2))), i.options.verticalSwiping === !0 && (i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2)))), n = i.swipeDirection(), "vertical" !== n ? (void 0 !== j.originalEvent && i.touchObject.swipeLength > 4 && j.preventDefault(), l = (i.options.rtl === !1 ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1), i.options.verticalSwiping === !0 && (l = i.touchObject.curY > i.touchObject.startY ? 1 : -1), m = i.touchObject.swipeLength, i.touchObject.edgeHit = !1, i.options.infinite === !1 && (0 === i.currentSlide && "right" === n || i.currentSlide >= i.getDotCount() && "left" === n) && (m = i.touchObject.swipeLength * i.options.edgeFriction, i.touchObject.edgeHit = !0), i.options.vertical === !1 ? i.swipeLeft = o + m * l : i.swipeLeft = o + m * (i.$list.height() / i.listWidth) * l, i.options.verticalSwiping === !0 && (i.swipeLeft = o + m * l), i.options.fade === !0 || i.options.touchMove === !1 ? !1 : i.animating === !0 ? (i.swipeLeft = null, !1) : void i.setCSS(i.swipeLeft)) : void 0)
    }, c.prototype.swipeStart = function(f) {
        var g, e = this;
        return 1 !== e.touchObject.fingerCount || e.slideCount <= e.options.slidesToShow ? (e.touchObject = {}, !1) : (void 0 !== f.originalEvent && void 0 !== f.originalEvent.touches && (g = f.originalEvent.touches[0]), e.touchObject.startX = e.touchObject.curX = void 0 !== g ? g.pageX : f.clientX, e.touchObject.startY = e.touchObject.curY = void 0 !== g ? g.pageY : f.clientY, void(e.dragging = !0))
    }, c.prototype.unfilterSlides = c.prototype.slickUnfilter = function() {
        var b = this;
        null !== b.$slidesCache && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.appendTo(b.$slideTrack), b.reinit())
    }, c.prototype.unload = function() {
        var a = this;
        d(".slick-cloned", a.$slider).remove(), a.$dots && a.$dots.remove(), a.$prevArrow && a.htmlExpr.test(a.options.prevArrow) && a.$prevArrow.remove(), a.$nextArrow && a.htmlExpr.test(a.options.nextArrow) && a.$nextArrow.remove(), a.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, c.prototype.unslick = function(f) {
        var e = this;
        e.$slider.trigger("unslick", [e, f]), e.destroy()
    }, c.prototype.updateArrows = function() {
        var e, f = this;
        e = Math.floor(f.options.slidesToShow / 2), f.options.arrows === !0 && f.slideCount > f.options.slidesToShow && !f.options.infinite && (f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), f.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === f.currentSlide ? (f.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), f.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : f.currentSlide >= f.slideCount - f.options.slidesToShow && f.options.centerMode === !1 ? (f.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : f.currentSlide >= f.slideCount - 1 && f.options.centerMode === !0 && (f.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), f.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, c.prototype.updateDots = function() {
        var b = this;
        null !== b.$dots && (b.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), b.$dots.find("li").eq(Math.floor(b.currentSlide / b.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, c.prototype.visibility = function() {
        var b = this;
        document[b.hidden] ? (b.paused = !0, b.autoPlayClear()) : b.options.autoplay === !0 && (b.paused = !1, b.autoPlay())
    }, c.prototype.initADA = function() {
        var a = this;
        a.$slides.add(a.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), a.$slideTrack.attr("role", "listbox"), a.$slides.not(a.$slideTrack.find(".slick-cloned")).each(function(b) {
            d(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + a.instanceUid + b
            })
        }), null !== a.$dots && a.$dots.attr("role", "tablist").find("li").each(function(b) {
            d(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + a.instanceUid + b,
                id: "slick-slide" + a.instanceUid + b
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), a.activateADA()
    }, c.prototype.activateADA = function() {
        var b = this;
        b.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, c.prototype.focusHandler = function() {
        var a = this;
        a.$slider.on("focus.slick blur.slick", "*", function(e) {
            e.stopImmediatePropagation();
            var b = d(this);
            setTimeout(function() {
                a.isPlay && (b.is(":focus") ? (a.autoPlayClear(), a.paused = !0) : (a.paused = !1, a.autoPlay()))
            }, 0)
        })
    }, d.fn.slick = function() {
        var i, h, b = this,
            l = arguments[0],
            k = Array.prototype.slice.call(arguments, 1),
            j = b.length;
        for (i = 0; j > i; i++) {
            if ("object" == typeof l || "undefined" == typeof l ? b[i].slick = new c(b[i], l) : h = b[i].slick[l].apply(b[i].slick, k), "undefined" != typeof h) {
                return h
            }
        }
        return b
    }
});
$(function() {
    $("#menu-left").sideNav({
        menuWidth: 240,
        edge: "left",
        closeOnClick: !1
    });
    $("#menu-right").sideNav({
        menuWidth: 300,
        edge: "right",
        closeOnClick: !1
    });
    $("#main-menu li.has-sub > a").on("click", function() {
        $(this).removeAttr("href");
        var b = $(this).parent("li");
        if (b.hasClass("open")) {
            b.removeClass("open");
            b.find("li").removeClass("open");
            b.find("ul").slideUp()
        } else {
            b.addClass("open");
            b.children("ul").slideDown();
            b.siblings("li").children("ul").slideUp();
            b.siblings("li").removeClass("open");
            b.siblings("li").find("li").removeClass("open");
            b.siblings("li").find("ul").slideUp()
        }
    });
    $("#main-menu > ul > li.has-sub > a").append('<span class="fa fa-angle-right"></span>');
    $("#main-menu > ul > li.has-sub > ul > li.has-sub > a").append('<span class="fa fa-angle-double-right"></span>');
    $(".featured-slider").slick({
        dots: !0,
        arrows: !1,
        autoplay: !0,
        fade: !0,
        speed: 500,
        cssEase: "linear"
    });
    $(".product-slider").slick({
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
        customPaging: function(c, b) {
            return '<button class="tab">' + $(".slick-thumbs li:nth-child(" + (b + 1) + ")").html() + "</button>"
        }
    });
    $(".product-list-slider").slick({
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
    var a = $(window).scrollTop();
    if (a > 1) {
        $("#to-top").css({
            bottom: "50px"
        })
    } else {
        $("#to-top").css({
            bottom: "-100px"
        })
    }
    $(window).on("scroll", function() {
        a = $(window).scrollTop();
        if (a > 1) {
            $("#to-top").css({
                opacity: 1,
                bottom: "30px"
            })
        } else {
            $("#to-top").css({
                opacity: 0,
                bottom: "-100px"
            })
        }
    });
    $("#to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: "0px"
        }, 800);
        return !1
    });
    $(window).on("scroll", function() {
        a = $(window).scrollTop();
        if (a > 1) {
            $("#record").css({
                opacity: 1
            })
        } else {
            $("#record").css({
                opacity: 0
            })
        }
    });
    $(document).swipebox({
        selector: ".swipebox"
    });
    $("ul.tabs").tabs();
    $(".modal-trigger").leanModal();
    $("select").material_select()
});
var $toggleButtons = $(".toggle-content");
var $fullTextWrappers = $(".fulltext");
var fullText;
var toggleButtonText;
$fullTextWrappers.attr("hidden", !0);
$toggleButtons.removeAttr("hidden");
$toggleButtons.each(function() {
    $(this).on("click", function() {
        fullTextWrapper = $(this).parent().find(".fulltext");
        toggleButtonText = $(this).find(".text");
        console.log(fullTextWrapper);
        if (!fullTextWrapper.attr("hidden")) {
            toggleButtonText.text("Show More");
            fullTextWrapper.attr("hidden", !0);
            $(this).attr("aria-expanded", !1)
        } else {
            toggleButtonText.text("Show Less");
            fullTextWrapper.removeAttr("hidden");
            $(this).attr("aria-expanded", !0)
        }
    })
});
var lastScrollTop = 0;
window.addEventListener("scroll", function() {
    var a = window.pageYOffset || document.documentElement.scrollTop;
    if (a > lastScrollTop) {
        document.getElementById("bottommenu").style.bottom = "-100%"
    } else {
        document.getElementById("bottommenu").style.bottom = "0"
    }
    lastScrollTop = a
}, !1);
