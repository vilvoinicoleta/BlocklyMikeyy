// Automatically generated file.  Do not edit!
var g, k = this;

function aa() {}

function ba(a) {
    a.Jb = function() {
        return a.Tg ? a.Tg : a.Tg = new a
    }
}

function ca(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function da(a) {
    return "array" == ca(a)
}

function ea(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function r(a) {
    return "string" == typeof a
}

function fa(a) {
    return "number" == typeof a
}

function ga(a) {
    return "function" == ca(a)
}

function ha(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ia(a) {
    return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
    ka = 0;

function la(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ma(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function na(a, b, c) {
    na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
    return na.apply(null, arguments)
}

function oa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}

function t(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.v = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.kq = function(a, c, f) {
        for (var h = Array(arguments.length - 2), l = 2; l < arguments.length; l++) h[l - 2] = arguments[l];
        return b.prototype[c].apply(a, h)
    }
};

function pa(a, b) {
    null != a && this.Ya.apply(this, arguments)
}
g = pa.prototype;
g.xc = "";
g.set = function(a) {
    this.xc = "" + a
};
g.Ya = function(a, b, c) {
    this.xc += String(a);
    if (null != b)
        for (var d = 1; d < arguments.length; d++) this.xc += arguments[d];
    return this
};
g.clear = function() {
    this.xc = ""
};
g.toString = function() {
    return this.xc
};
var qa;

function ra(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var sa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function ta(a, b) {
    var c = String(a).toLowerCase(),
        d = String(b).toLowerCase();
    return c < d ? -1 : c == d ? 0 : 1
}

function ua(a) {
    if (!va.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(wa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(xa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ya, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(za, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Aa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ba, "&#0;"));
    return a
}
var wa = /&/g,
    xa = /</g,
    ya = />/g,
    za = /"/g,
    Aa = /'/g,
    Ba = /\x00/g,
    va = /[\x00&<>"']/;

function Ca(a) {
    return -1 != a.indexOf("&") ? "document" in k ? Da(a) : Ea(a) : a
}

function Da(a) {
    var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        },
        c;
    c = k.document.createElement("div");
    return a.replace(Fa, function(a, e) {
        var f = b[a];
        if (f) return f;
        if ("#" == e.charAt(0)) {
            var h = Number("0" + e.substr(1));
            isNaN(h) || (f = String.fromCharCode(h))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = f
    })
}

function Ea(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!isNaN(d)) return String.fromCharCode(d)
                }
                return a
        }
    })
}
var Fa = /&([^;\s<&]+);?/g;

function Ga(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function Ha() {
    return "background-color".replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}

function Ia(a) {
    var b = r(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};

function Ja() {
    this.g = Ka
}
Ja.prototype.zc = !0;
Ja.prototype.$b = function() {
    return ""
};
Ja.prototype.toString = function() {
    return "Const{}"
};

function La(a) {
    return a instanceof Ja && a.constructor === Ja && a.g === Ka ? "" : "type_error:Const"
}
var Ka = {};

function Ma() {
    this.g = "";
    this.h = Na
}
Ma.prototype.zc = !0;
Ma.prototype.$b = function() {
    return this.g
};
Ma.prototype.vf = !0;
Ma.prototype.Tc = function() {
    return 1
};
var Oa = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
    Na = {};

function Pa(a) {
    var b = new Ma;
    b.g = a;
    return b
}
Pa("about:blank");
var Qa = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Ra = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Sa = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a,
            b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, h = r(a) ? a.split("") : a, l = 0; l < d; l++)
            if (l in h) {
                var m = h[l];
                b.call(c, m, l, a) && (e[f++] = m)
            }
        return e
    },
    Ta = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, h = 0; h < d; h++) h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    },
    Ua = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in
                e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };

function Va(a, b) {
    return 0 <= Qa(a, b)
}

function Wa(a, b) {
    var c = Qa(a, b),
        d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d
}

function Xa(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
}

function Ya(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function Za(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (ea(d)) {
            var e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (var h = 0; h < f; h++) a[e + h] = d[h]
        } else a.push(d)
    }
}

function $a(a, b, c, d) {
    Array.prototype.splice.apply(a, ab(arguments, 1))
}

function ab(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function bb() {
    this.g = "";
    this.h = cb
}
bb.prototype.zc = !0;
var cb = {};
bb.prototype.$b = function() {
    return this.g
};

function db(a) {
    var b = new bb;
    b.g = a;
    return b
}
var eb = db("");

function fb(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        if (null != d) {
            if (d instanceof Ja) d = La(d);
            else if (gb.test(d)) {
                for (var e = !0, f = !0, h = 0; h < d.length; h++) {
                    var l = d.charAt(h);
                    "'" == l && f ? e = !e : '"' == l && e && (f = !f)
                }
                e && f || (d = "zClosurez")
            } else d = "zClosurez";
            b += c + ":" + d + ";"
        }
    }
    return b ? db(b) : eb
}
var gb = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;

function hb() {
    this.g = ib
}
hb.prototype.zc = !0;
hb.prototype.$b = function() {
    return ""
};
hb.prototype.vf = !0;
hb.prototype.Tc = function() {
    return 1
};
var ib = {};

function jb(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}
var kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function lb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < kb.length; f++) c = kb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var mb = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
};
var nb;
a: {
    var ob = k.navigator;
    if (ob) {
        var pb = ob.userAgent;
        if (pb) {
            nb = pb;
            break a
        }
    }
    nb = ""
}

function qb(a) {
    return -1 != nb.indexOf(a)
};

function rb() {
    this.g = "";
    this.i = sb;
    this.h = null
}
rb.prototype.vf = !0;
rb.prototype.Tc = function() {
    return this.h
};
rb.prototype.zc = !0;
rb.prototype.$b = function() {
    return this.g
};

function tb(a) {
    if (a instanceof rb && a.constructor === rb && a.i === sb) return a.g;
    ca(a);
    return "type_error:SafeHtml"
}

function ub(a) {
    if (a instanceof rb) return a;
    var b = null;
    a.vf && (b = a.Tc());
    a = ua(a.zc ? a.$b() : String(a));
    return vb(a, b)
}
var wb = /^[a-zA-Z0-9-]+$/,
    xb = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    yb = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };

function zb(a, b, c) {
    if (!wb.test(a)) throw Error("Invalid tag name <" + a + ">.");
    if (a.toUpperCase() in yb) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    var d = null,
        e, f = "";
    if (b)
        for (e in b) {
            if (!wb.test(e)) throw Error('Invalid attribute name "' + e + '".');
            var h = b[e];
            if (null != h) {
                var l, m = a;
                l = e;
                if (h instanceof Ja) h = La(h);
                else if ("style" == l.toLowerCase()) {
                    if (!ha(h)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof h + " given: " + h);
                    h instanceof bb || (h =
                        fb(h));
                    h instanceof bb && h.constructor === bb && h.h === cb ? h = h.g : (ca(h), h = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(l)) throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + h + '" given.');
                    if (l.toLowerCase() in xb)
                        if (h instanceof hb) h instanceof hb && h.constructor === hb && h.g === ib ? h = "" : (ca(h), h = "type_error:TrustedResourceUrl");
                        else if (h instanceof Ma) h instanceof Ma && h.constructor === Ma && h.h === Na ? h = h.g : (ca(h), h = "type_error:SafeUrl");
                    else if (r(h)) h instanceof Ma || (h = h.zc ? h.$b() : String(h), Oa.test(h) ||
                        (h = "about:invalid#zClosurez"), h = Pa(h)), h = h.$b();
                    else throw Error('Attribute "' + l + '" on tag "' + m + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + h + '" given.');
                }
                h.zc && (h = h.$b());
                l = l + '="' + ua(String(h)) + '"';
                f += " " + l
            }
        }
    e = "<" + a + f;
    null != c ? da(c) || (c = [c]) : c = [];
    !0 === mb[a.toLowerCase()] ? e += ">" : (d = Ab(c), e += ">" + tb(d) + "</" + a + ">", d = d.Tc());
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
    return vb(e, d)
}

function Ab(a) {
    function b(a) {
        da(a) ? Ra(a, b) : (a = ub(a), d += tb(a), a = a.Tc(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        d = "";
    Ra(arguments, b);
    return vb(d, c)
}
var sb = {};

function vb(a, b) {
    var c = new rb;
    c.g = a;
    c.h = b;
    return c
}
vb("<!DOCTYPE html>", 0);
var Bb = vb("", 0),
    Cb = vb("<br>", 0);
var Db = {},
    Eb = {};

function Fb() {
    throw Error("Do not instantiate directly");
}
Fb.prototype.Zd = null;
Fb.prototype.toString = function() {
    return this.content
};
Fb.prototype.Le = function() {
    if (this.$d === Eb) return ub(this.toString());
    if (this.$d !== Db) throw Error("Sanitized content was not of kind TEXT or HTML.");
    return vb(this.toString(), this.Zd || null)
};
var Gb = qb("Opera"),
    u = qb("Trident") || qb("MSIE"),
    Hb = qb("Edge"),
    Ib = qb("Gecko") && !(-1 != nb.toLowerCase().indexOf("webkit") && !qb("Edge")) && !(qb("Trident") || qb("MSIE")) && !qb("Edge"),
    v = -1 != nb.toLowerCase().indexOf("webkit") && !qb("Edge"),
    Jb = v && qb("Mobile"),
    Kb = qb("Macintosh"),
    Lb = qb("Android"),
    Mb = qb("iPhone") && !qb("iPod") && !qb("iPad"),
    Nb = qb("iPad");

function Ob() {
    var a = k.document;
    return a ? a.documentMode : void 0
}
var Pb;
a: {
    var Qb = "",
        Rb = function() {
            var a = nb;
            if (Ib) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Hb) return /Edge\/([\d\.]+)/.exec(a);
            if (u) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (v) return /WebKit\/(\S+)/.exec(a);
            if (Gb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
    Rb && (Qb = Rb ? Rb[1] : "");
    if (u) {
        var Sb = Ob();
        if (null != Sb && Sb > parseFloat(Qb)) {
            Pb = String(Sb);
            break a
        }
    }
    Pb = Qb
}
var Tb = {};

function Ub(a) {
    var b;
    if (!(b = Tb[a])) {
        b = 0;
        for (var c = sa(String(Pb)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "",
                l = d[f] || "",
                m = RegExp("(\\d*)(\\D*)", "g"),
                n = RegExp("(\\d*)(\\D*)", "g");
            do {
                var p = m.exec(h) || ["", "", ""],
                    q = n.exec(l) || ["", "", ""];
                if (0 == p[0].length && 0 == q[0].length) break;
                b = Ga(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || Ga(0 == p[2].length, 0 == q[2].length) || Ga(p[2], q[2])
            } while (0 == b)
        }
        b = Tb[a] = 0 <= b
    }
    return b
}
var Wb = k.document,
    Xb = Wb && u ? Ob() || ("CSS1Compat" == Wb.compatMode ? parseInt(Pb, 10) : 5) : void 0;

function Yb(a, b) {
    this.width = a;
    this.height = b
}
g = Yb.prototype;
g.clone = function() {
    return new Yb(this.width, this.height)
};
g.Wh = function() {
    return this.width * this.height
};
g.Ug = function() {
    return !this.Wh()
};
g.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};

function Zb(a, b) {
    a.innerHTML = tb(b)
};
var $b = !u || 9 <= Number(Xb),
    ac = !Ib && !u || u && 9 <= Number(Xb) || Ib && Ub("1.9.1"),
    bc = u && !Ub("9");

function cc(a, b, c) {
    return Math.min(Math.max(a, b), c)
};

function w(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
g = w.prototype;
g.clone = function() {
    return new w(this.x, this.y)
};

function dc(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function ec(a, b) {
    return new w(a.x - b.x, a.y - b.y)
}
g.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
g.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
g.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), fa(b) && (this.y += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};

function fc(a) {
    return a ? new gc(hc(a)) : qa || (qa = new gc)
}

function ic(a, b) {
    var c = document,
        c = b || c;
    if (c.querySelectorAll && c.querySelector) return c.querySelectorAll("TBODY" + (a ? "." + a : ""));
    if (a && c.getElementsByClassName) {
        for (var c = c.getElementsByClassName(a), d = {}, e = 0, f = 0, h; h = c[f]; f++) "TBODY" == h.nodeName && (d[e++] = h);
        d.length = e;
        return d
    }
    c = c.getElementsByTagName("TBODY");
    if (a) {
        d = {};
        for (f = e = 0; h = c[f]; f++) {
            var l = h.className;
            "function" == typeof l.split && Va(l.split(/\s+/), a) && (d[e++] = h)
        }
        d.length = e;
        return d
    }
    return c
}

function jc(a, b) {
    jb(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : kc.hasOwnProperty(d) ? a.setAttribute(kc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var kc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function lc() {
    var a = window.document,
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Yb(a.clientWidth, a.clientHeight)
}

function mc(a) {
    return a.scrollingElement ? a.scrollingElement : v || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}

function z(a, b, c) {
    return nc(document, arguments)
}

function nc(a, b) {
    var c = String(b[0]),
        d = b[1];
    if (!$b && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', ua(d.name), '"');
        if (d.type) {
            c.push(' type="', ua(d.type), '"');
            var e = {};
            lb(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (r(d) ? c.className = d : da(d) ? c.className = d.join(" ") : jc(c, d));
    2 < b.length && oc(a, c, b);
    return c
}

function oc(a, b, c) {
    function d(c) {
        c && b.appendChild(r(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ea(f) || ha(f) && 0 < f.nodeType ? d(f) : Ra(pc(f) ? Ya(f) : f, d)
    }
}

function qc(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function rc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function A(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function sc(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function hc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function tc(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else qc(a), a.appendChild(hc(a).createTextNode(String(b)))
}
var uc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    vc = {
        IMG: " ",
        BR: "\n"
    };

function xc(a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
}

function yc(a) {
    a = a.tabIndex;
    return fa(a) && 0 <= a && 32768 > a
}

function zc(a) {
    if (bc && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        Ac(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    bc || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}

function Bc(a) {
    var b = [];
    Ac(a, b, !1);
    return b.join("")
}

function Ac(a, b, c) {
    if (!(a.nodeName in uc))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in vc) b.push(vc[a.nodeName]);
    else
        for (a = a.firstChild; a;) Ac(a, b, c), a = a.nextSibling
}

function pc(a) {
    if (a && "number" == typeof a.length) {
        if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (ga(a)) return "function" == typeof a.item
    }
    return !1
}

function gc(a) {
    this.g = a || k.document || document
}
g = gc.prototype;
g.C = function(a) {
    return r(a) ? this.g.getElementById(a) : a
};
g.ob = function(a, b, c) {
    return nc(this.g, arguments)
};
g.appendChild = function(a, b) {
    a.appendChild(b)
};
g.dh = qc;
g.Zb = function(a) {
    return ac && a.children ? a.children : Sa(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
g.contains = sc;
u && Ub(8);

function Cc(a) {
    if (null != a) switch (a.Zd) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Dc() {
    Fb.call(this)
}
t(Dc, Fb);
Dc.prototype.$d = Db;

function Ec(a) {
    return null != a && a.$d === Db ? a : Fc(String(String(a)).replace(Gc, Hc), Cc(a))
}

function Ic() {
    Fb.call(this)
}
t(Ic, Fb);
Ic.prototype.$d = {}.dk;

function Jc(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Zd = d);
        return e
    }
}
var Fc = Jc(Dc);
Jc(Ic);
(function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        if (!String(a)) return "";
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.Zd = d);
        return e
    }
})(Dc);
var Kc = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function Hc(a) {
    return Kc[a]
}
var Gc = /[\x00\x22\x26\x27\x3c\x3e]/g;

function Lc() {
    return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>'
};
var Mc = {},
    Nc, Oc, Pc, C, D, E, Qc;

function Rc() {
    for (var a = Sc, b = F, c = Tc, d = '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Maze_moveForward">move forward</span><span id="Maze_turnLeft">turn left</span><span id="Maze_turnRight">turn right</span><span id="Maze_doCode">do</span><span id="Maze_elseCode">else</span><span id="Maze_helpIfElse">If-else blocks will do one thing or the other.</span><span id="Maze_pathAhead">if path ahead</span><span id="Maze_pathLeft">if path to the left</span><span id="Maze_pathRight">if path to the right</span><span id="Maze_repeatUntil">repeat until</span><span id="Maze_moveForwardTooltip">Moves the player forward one space.</span><span id="Maze_turnTooltip">Turns the player left or right by 90 degrees.</span><span id="Maze_ifTooltip">If there is a path in the specified direction, \\nthen do some actions. </span><span id="Maze_ifelseTooltip">If there is a path in the specified direction, \\nthen do the first block of actions. \\nOtherwise, do the second block of actions. </span><span id="Maze_whileTooltip">Repeat the enclosed actions until finish point \\nis reached. </span><span id="Maze_capacity0">You have %0 blocks left.</span><span id="Maze_capacity1">You have %1 block left.</span><span id="Maze_capacity2">You have %2 blocks left.</span></div><table width="100%"><tr><td><h1>' + ('<span id="title">' +
            (Uc ? '<a href="index.html?lang=' + Ec(a) + '">' : '<a href="./?lang=' + Ec(a) + '">') + "Blockly Games</a> : " + Ec("Mickey & Minnie") + "</span>"), c = "&skin=" + Ec(c), e = " &nbsp; ", f = 1; 11 > f; f++) e += " " + (f == b ? '<span class="level_number level_done" id="level' + Ec(f) + '">' + Ec(f) + "</span>" : 10 == f ? '<a class="level_number" id="level' + Ec(f) + '" href="?lang=' + Ec(a) + "&level=" + Ec(f) + Ec(c) + '">' + Ec(f) + "</a>" : '<a class="level_dot" id="level' + Ec(f) + '" href="?lang=' + Ec(a) + "&level=" + Ec(f) + Ec(c) + '"></a>');
    return d + e + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Makes the player do what the blocks say."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Put the player back at the start of the maze."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' +
        ('<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + (2 < b ? '<block type="maze_forever"></block>' + (6 == b ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : 6 < b ? '<block type="maze_if"></block>' + (8 < b ? '<block type="maze_ifElse"></block>' : "") : "") : "") + "</xml>") + '<div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div>' +
        ('<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + Lc() + "</div>") + (1 == b ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Stack a couple of \'move forward\' blocks together to help me reach the goal.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>On this level, you need to stack together all of the blocks in the white workspace.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Run your program to see what happens.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
            2 == b ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Your program didn\'t solve the maze. Press \'Reset\' and try again.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : 3 == b || 4 == b ? (3 == b ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Reach the end of this path using only two blocks. Use \'repeat\' to run a block more than once.</td><td><img src="common/help.png"></td></tr></table></div>' :
                "") + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>You have used up all the blocks for this level. To create a new block, you first need to delete an existing block.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>You can fit more than one block inside a \'repeat\' block.</td><td><img src="common/help.png"></td></tr></table></div>' : 5 == b ?
            '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Choose your favourite player from this menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : 6 == b ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>An \'if\' block will do something only if the condition is true. Try turning left if there is a path to the left.</td><td><img src="common/help.png"></td></tr></table></div>' :
            7 == b ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="common/help.png"></td></tr></table></div>' : 9 == b ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>If-else blocks will do one thing or the other.</td><td><img src="common/help.png"></td></tr></table></div>' : 10 == b ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Can you solve this complicated maze? Try following the left-hand wall. Advanced programmers only!' +
            Lc() + "</td></tr></table></div>" : "")
};

function Vc() {
    0 != Wc && (Xc[ia(this)] = this);
    this.J = this.J;
    this.H = this.H
}
var Wc = 0,
    Xc = {};
Vc.prototype.J = !1;
Vc.prototype.B = function() {
    if (!this.J && (this.J = !0, this.va(), 0 != Wc)) {
        var a = ia(this);
        delete Xc[a]
    }
};

function Yc(a, b) {
    a.J ? b() : (a.H || (a.H = []), a.H.push(b))
}
Vc.prototype.va = function() {
    if (this.H)
        for (; this.H.length;) this.H.shift()()
};

function Zc(a) {
    a && "function" == typeof a.B && a.B()
};
var $c = "closure_listenable_" + (1E6 * Math.random() | 0),
    ad = 0;

function bd(a, b, c, d, e) {
    this.listener = a;
    this.g = null;
    this.src = b;
    this.type = c;
    this.Xd = !!d;
    this.te = e;
    this.Mg = ++ad;
    this.gd = this.Wd = !1
}

function cd(a) {
    a.gd = !0;
    a.listener = null;
    a.g = null;
    a.src = null;
    a.te = null
};

function dd(a) {
    this.src = a;
    this.g = {};
    this.h = 0
}
dd.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var h = ed(a, b, d, e); - 1 < h ? (b = a[h], c || (b.Wd = !1)) : (b = new bd(b, this.src, f, !!d, e), b.Wd = c, a.push(b));
    return b
};

function fd(a, b) {
    var c = b.type;
    c in a.g && Wa(a.g[c], b) && (cd(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
}

function gd(a, b, c, d, e) {
    a = a.g[b.toString()];
    b = -1;
    a && (b = ed(a, c, d, e));
    return -1 < b ? a[b] : null
}

function ed(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.gd && f.listener == b && f.Xd == !!c && f.te == d) return e
    }
    return -1
};

function hd(a, b) {
    this.type = a;
    this.i = this.target = b;
    this.j = !1;
    this.eh = !0
}
hd.prototype.stopPropagation = function() {
    this.j = !0
};
hd.prototype.preventDefault = function() {
    this.eh = !1
};
var id = !u || 9 <= Number(Xb),
    jd = !u || 9 <= Number(Xb),
    kd = u && !Ub("9");
!v || Ub("528");
Ib && Ub("1.9b") || u && Ub("8") || Gb && Ub("9.5") || v && Ub("528");
Ib && !Ub("8") || u && Ub("9");
var ld = "ontouchstart" in k || !!(k.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!k.navigator || !k.navigator.msMaxTouchPoints);

function md(a) {
    md[" "](a);
    return a
}
md[" "] = aa;

function nd(a, b) {
    hd.call(this, a ? a.type : "");
    this.o = this.i = this.target = null;
    this.w = this.g = this.clientY = this.clientX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.D = !1;
    this.h = null;
    a && this.P(a, b)
}
t(nd, hd);
var od = [1, 4, 2];
nd.prototype.P = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.i = b;
    var e = a.relatedTarget;
    if (e) {
        if (Ib) {
            var f;
            a: {
                try {
                    md(e.nodeName);
                    f = !0;
                    break a
                } catch (h) {}
                f = !1
            }
            f || (e = null)
        }
    } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    this.o = e;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !==
        d.clientY ? d.clientY : d.pageY);
    this.g = a.keyCode || 0;
    this.w = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.D = Kb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.h = a;
    a.defaultPrevented && this.preventDefault()
};

function pd(a) {
    return id ? 0 == a.h.button : "click" == a.type ? !0 : !!(a.h.button & od[0])
}
nd.prototype.stopPropagation = function() {
    nd.v.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
};
nd.prototype.preventDefault = function() {
    nd.v.preventDefault.call(this);
    var a = this.h;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, kd) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var qd = "closure_lm_" + (1E6 * Math.random() | 0),
    rd = {},
    sd = 0;

function td(a, b, c, d, e) {
    if (da(b)) {
        for (var f = 0; f < b.length; f++) td(a, b[f], c, d, e);
        return null
    }
    c = ud(c);
    if (a && a[$c]) a = a.U(b, c, d, e);
    else {
        if (!b) throw Error("Invalid event type");
        var f = !!d,
            h = vd(a);
        h || (a[qd] = h = new dd(a));
        c = h.add(b, c, !1, d, e);
        if (!c.g) {
            d = wd();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, f);
            else if (a.attachEvent) a.attachEvent(xd(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            sd++
        }
        a = c
    }
    return a
}

function wd() {
    var a = yd,
        b = jd ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function zd(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) zd(a, b[f], c, d, e);
    else c = ud(c), a && a[$c] ? a.vb(b, c, d, e) : a && (a = vd(a)) && (b = gd(a, b, c, !!d, e)) && Ad(b)
}

function Ad(a) {
    if (!fa(a) && a && !a.gd) {
        var b = a.src;
        if (b && b[$c]) fd(b.Yb, a);
        else {
            var c = a.type,
                d = a.g;
            b.removeEventListener ? b.removeEventListener(c, d, a.Xd) : b.detachEvent && b.detachEvent(xd(c), d);
            sd--;
            (c = vd(b)) ? (fd(c, a), 0 == c.h && (c.src = null, b[qd] = null)) : cd(a)
        }
    }
}

function xd(a) {
    return a in rd ? rd[a] : rd[a] = "on" + a
}

function Bd(a, b, c, d) {
    var e = !0;
    if (a = vd(a))
        if (b = a.g[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.Xd == c && !f.gd && (f = Cd(f, d), e = e && !1 !== f)
            }
        return e
}

function Cd(a, b) {
    var c = a.listener,
        d = a.te || a.src;
    a.Wd && Ad(a);
    return c.call(d, b)
}

function yd(a, b) {
    if (a.gd) return !0;
    if (!jd) {
        var c;
        if (!(c = b)) a: {
            c = ["window", "event"];
            for (var d = k, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else {
                    c = null;
                    break a
                }
            c = d
        }
        e = c;
        c = new nd(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode) try {
                    e.keyCode = -1;
                    break a
                } catch (m) {
                    f = !0
                }
                if (f || void 0 == e.returnValue) e.returnValue = !0
            }
            e = [];
            for (f = c.i; f; f = f.parentNode) e.push(f);
            for (var f = a.type, h = e.length - 1; !c.j && 0 <= h; h--) {
                c.i = e[h];
                var l = Bd(e[h], f, !0, c),
                    d = d && l
            }
            for (h = 0; !c.j && h < e.length; h++) c.i = e[h],
            l = Bd(e[h],
                f, !1, c),
            d = d && l
        }
        return d
    }
    return Cd(a, new nd(b, this))
}

function vd(a) {
    a = a[qd];
    return a instanceof dd ? a : null
}
var Dd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function ud(a) {
    if (ga(a)) return a;
    a[Dd] || (a[Dd] = function(b) {
        return a.handleEvent(b)
    });
    return a[Dd]
};

function Ed() {
    Vc.call(this);
    this.Yb = new dd(this);
    this.Sd = this;
    this.pc = null
}
t(Ed, Vc);
Ed.prototype[$c] = !0;
g = Ed.prototype;
g.pe = function() {
    return this.pc
};
g.Je = function(a) {
    this.pc = a
};
g.removeEventListener = function(a, b, c, d) {
    zd(this, a, b, c, d)
};

function Fd(a, b) {
    var c, d = a.pe();
    if (d)
        for (c = []; d; d = d.pe()) c.push(d);
    var d = a.Sd,
        e = b,
        f = e.type || e;
    if (r(e)) e = new hd(e, d);
    else if (e instanceof hd) e.target = e.target || d;
    else {
        var h = e,
            e = new hd(f, d);
        lb(e, h)
    }
    var h = !0,
        l;
    if (c)
        for (var m = c.length - 1; !e.j && 0 <= m; m--) l = e.i = c[m], h = Gd(l, f, !0, e) && h;
    e.j || (l = e.i = d, h = Gd(l, f, !0, e) && h, e.j || (h = Gd(l, f, !1, e) && h));
    if (c)
        for (m = 0; !e.j && m < c.length; m++) l = e.i = c[m], h = Gd(l, f, !1, e) && h;
    return h
}
g.va = function() {
    Ed.v.va.call(this);
    if (this.Yb) {
        var a = this.Yb,
            b = 0,
            c;
        for (c in a.g) {
            for (var d = a.g[c], e = 0; e < d.length; e++) ++b, cd(d[e]);
            delete a.g[c];
            a.h--
        }
    }
    this.pc = null
};
g.U = function(a, b, c, d) {
    return this.Yb.add(String(a), b, !1, c, d)
};
g.vb = function(a, b, c, d) {
    var e;
    e = this.Yb;
    a = String(a).toString();
    if (a in e.g) {
        var f = e.g[a];
        b = ed(f, b, c, d); - 1 < b ? (cd(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1
    } else e = !1;
    return e
};

function Gd(a, b, c, d) {
    b = a.Yb.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.gd && h.Xd == c) {
            var l = h.listener,
                m = h.te || h.src;
            h.Wd && fd(a.Yb, h);
            e = !1 !== l.call(m, d) && e
        }
    }
    return e && 0 != d.eh
};

function Hd(a, b, c) {
    if (ga(a)) c && (a = na(a, c));
    else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0)
};
// Copyright 2011 Google Inc.  Apache License 2.0
var Id = {},
    Jd, Kd;

function Ld(a, b) {
    this.ma = a;
    this.type = b;
    a.A.T && (this.jb = a.A.T[b], this.rd = a.A.T[Md[b]], this.uf = !this.jb)
}
g = Ld.prototype;
g.M = null;
g.tc = null;
g.Lb = null;
g.ab = 0;
g.sa = 0;
g.ec = !1;
g.jb = null;
g.rd = null;
g.uf = null;
g.Yd = function(a) {
    var b = this,
        c = b.ma,
        d = a.ma;
    a.M && Nd(a);
    if (b.M) {
        var e = G(b),
            f = b.Lb;
        b.Lb = null;
        if (e.i) f = Od(e), e.B(), e = null;
        else if (1 == b.type) {
            if (!e.K) throw "Orphan block does not have an output connection.";
            var h = Pd(d, e);
            h && (e.K.connect(h), e = null)
        } else if (3 == b.type) {
            if (!e.N) throw "Orphan block does not have a previous connection.";
            for (h = d; h.g;) {
                var l = Qd(h);
                if (l && !l.i) h = l;
                else {
                    Rd(e.N, h.g) && (h.g.connect(e.N), e = null);
                    break
                }
            }
        }
        if (e && (Nd(b), Sd)) {
            var m = Td;
            setTimeout(function() {
                e.A && !e.getParent() && (H(m), e.K ? Ud(e.K,
                    b) : e.N && Ud(e.N, b), H(!1))
            }, Vd)
        }
        b.Lb = f
    }
    var n;
    0 == I && (n = new Wd(d));
    Xd(b, a);
    d.Md(c);
    n && (Yd(n), J(n))
};
g.B = function() {
    if (this.M) throw "Disconnect connection before disposing of it.";
    this.ec && Zd(this.jb, this);
    ae == this && (ae = null);
    be == this && (be = null);
    this.rd = this.jb = null
};

function ce(a) {
    return 1 == a.type || 3 == a.type
}

function de(a, b) {
    if (!b) return 3;
    if (ce(a)) var c = a.ma,
        d = b.ma;
    else d = a.ma, c = b.ma;
    return c && c == d ? 1 : b.type != Md[a.type] ? 2 : c && d && c.A !== d.A ? 5 : Rd(a, b) ? c.i && !d.i ? 6 : 0 : 4
}
g.ze = function(a) {
    if (0 != de(this, a)) return !1;
    if (2 == a.type || 4 == a.type)
        if (a.M || this.M) return !1;
    return 1 == a.type && a.M && !ee(G(a)) && !G(a).i || 4 == this.type && a.M && !this.ma.g && !G(a).i && G(a).g || -1 != fe.indexOf(a) ? !1 : !0
};
g.connect = function(a) {
    if (this.M != a) {
        switch (de(this, a)) {
            case 0:
                break;
            case 1:
                throw "Attempted to connect a block to itself.";
            case 5:
                throw "Blocks not on same workspace.";
            case 2:
                throw "Attempt to connect incompatible types.";
            case 3:
                throw "Target connection is null.";
            case 4:
                throw "Connection checks failed.";
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!";
        }
        ce(this) ? this.Yd(a) : a.Yd(this)
    }
};

function Xd(a, b) {
    a.M = b;
    b.M = a
}

function ge(a, b) {
    for (var c = !1, d = 0; d < a.h.length; d++) {
        var e = a.h[d].I;
        if (e && 1 == e.type && Rd(b.K, e)) {
            if (c) return null;
            c = e
        }
    }
    return c
}

function Pd(a, b) {
    for (var c = a, d; d = ge(c, b);)
        if (c = G(d), !c || c.i) return d;
    return null
}

function Nd(a) {
    var b = a.M,
        c, d;
    ce(a) ? (c = a.ma, d = b.ma, b = a) : (c = b.ma, d = a.ma);
    a.jf(c, d);
    b.Mf()
}
g.jf = function(a, b) {
    var c;
    0 == I && (c = new Wd(b));
    this.M = this.M.M = null;
    b.Md(null);
    c && (Yd(c), J(c))
};
g.Mf = function() {
    var a = this.ma,
        b = this.Lb;
    if (a.A && b && Sd)
        if (a = he(b, a.A), a.K) this.connect(a.K);
        else if (a.N) this.connect(a.N);
    else throw "Child block does not have output or previous statement.";
};

function G(a) {
    return a.M ? a.M.ma : null
}

function Rd(a, b) {
    if (!a.tc || !b.tc) return !0;
    for (var c = 0; c < a.tc.length; c++)
        if (-1 != b.tc.indexOf(a.tc[c])) return !0;
    return !1
}

function ie(a, b) {
    b ? (da(b) || (b = [b]), a.tc = b, a.M && !Rd(a, a.M) && (je(ce(a) ? G(a) : a.ma), ke(a.ma))) : a.tc = null
};
// Copyright 2016 Google Inc.  Apache License 2.0
function le(a, b) {
    le.v.constructor.call(this, a, b);
    this.g = new w(0, 0)
}
t(le, Ld);

function me(a, b) {
    var c = a.ab - b.ab,
        d = a.sa - b.sa;
    return Math.sqrt(c * c + d * d)
}

function Ud(a, b) {
    if (0 == K) {
        var c = ne(a.ma);
        if (!c.o) {
            var d = !1;
            if (!ee(c)) {
                c = ne(b.ma);
                if (!ee(c)) return;
                b = a;
                d = !0
            }
            var e = L == c;
            e || c.select();
            var f = b.ab + oe - a.ab,
                h = b.sa + oe - a.sa;
            d && (h = -h);
            c.s && (f = -f);
            c.moveBy(f, h);
            e || pe(c)
        }
    }
}

function qe(a, b, c) {
    a.ec && Zd(a.jb, a);
    a.ab = b;
    a.sa = c;
    a.uf || re(a.jb, a)
}
g = le.prototype;
g.moveBy = function(a, b) {
    qe(this, this.ab + a, this.sa + b)
};

function se(a, b) {
    qe(a, b.x + a.g.x, b.y + a.g.y)
}

function te(a, b, c) {
    a.g.x = b;
    a.g.y = c
}

function ue(a) {
    var b = a.M.ab - a.ab,
        c = a.M.sa - a.sa;
    if (0 != b || 0 != c) {
        a = G(a);
        var d = a.m;
        if (!d) throw "block is not rendered.";
        d = ve(d);
        a.m.setAttribute("transform", "translate(" + (d.x - b) + "," + (d.y - c) + ")");
        we(a, -b, -c)
    }
}
g.ve = function() {
    var a;
    a = 1 == this.type || 2 == this.type ? "m 0,0 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
    var b = this.ma.oa();
    Ld.g = M("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.ab - b.x) + "," + (this.sa - b.y) + ")" + (this.ma.s ? " scale(-1 1)" : "")
    }, this.ma.m)
};

function xe(a) {
    ye(a, !1);
    var b = [];
    if (1 != a.type && 3 != a.type) return b;
    if (a = G(a)) {
        var c;
        a.j ? (c = [], a.K && c.push(a.K), a.g && c.push(a.g), a.N && c.push(a.N)) : c = a.Ib(!0);
        for (var d = 0; d < c.length; d++) b.push.apply(b, xe(c[d]));
        b.length || (b[0] = a)
    }
    return b
}

function ze() {
    A(Ld.g);
    delete Ld.g
}

function ye(a, b) {
    (a.uf = b) && a.ec ? Zd(a.jb, a) : b || a.ec || re(a.jb, a)
}
g.ze = function(a, b) {
    return me(this, a) > b ? !1 : le.v.ze.call(this, a)
};
g.jf = function(a, b) {
    le.v.jf.call(this, a, b);
    a.O && a.V();
    b.O && (Ae(b), b.V())
};
g.Mf = function() {
    var a = this.ma,
        b = this.Lb;
    if (a.A && b && Sd) {
        le.v.Mf.call(this);
        b = G(this);
        if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.ye();
        b.V(!1);
        a.O && a.V()
    }
};
g.Yd = function(a) {
    le.v.Yd.call(this, a);
    var b = this.ma;
    a = a.ma;
    b.O && Ae(b);
    a.O && Ae(a);
    b.O && a.O && (3 == this.type || 4 == this.type ? a.V() : b.V())
};

function Be(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = Be.prototype;
g.yb = function() {
    return this.right - this.left
};
g.wc = function() {
    return this.bottom - this.top
};
g.clone = function() {
    return new Be(this.top, this.right, this.bottom, this.left)
};
g.contains = function(a) {
    return this && a ? a instanceof Be ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, fa(b) && (this.top += b, this.bottom += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};

function Ce(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
g = Ce.prototype;
g.clone = function() {
    return new Ce(this.left, this.top, this.width, this.height)
};
g.contains = function(a) {
    return a instanceof w ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
};
g.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.left += a.x, this.top += a.y) : (this.left += a, fa(b) && (this.top += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
var De = {};

function Ee(a, b) {
    var c = hc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function Fe(a, b) {
    return Ee(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function Ge() {
    var a = document,
        b = a.body,
        a = a.documentElement;
    return new w(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}

function He(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    u && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function Ie(a) {
    var b = hc(a),
        c = new w(0, 0),
        d;
    d = b ? hc(b) : document;
    d = !u || 9 <= Number(Xb) || "CSS1Compat" == fc(d).g.compatMode ? d.documentElement : d.body;
    if (a == d) return c;
    a = He(a);
    d = fc(b).g;
    b = mc(d);
    d = d.parentWindow || d.defaultView;
    b = u && Ub("10") && d.pageYOffset != b.scrollTop ? new w(b.scrollLeft, b.scrollTop) : new w(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function Je(a) {
    var b = Ke;
    if ("none" != Fe(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function Ke(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = v && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = He(a), new Yb(a.right - a.left, a.bottom - a.top)) : new Yb(b, c)
}

function Le(a, b) {
    a.style.display = b ? "" : "none"
}
var Me = Ib ? "MozUserSelect" : v || Hb ? "WebkitUserSelect" : null;

function Ne(a, b) {
    var c = b ? null : a.getElementsByTagName("*");
    if (Me) {
        var d = "none";
        a.style && (a.style[Me] = d);
        if (c)
            for (var e = 0, f; f = c[e]; e++) f.style && (f.style[Me] = d)
    } else if (u || Gb)
        if (d = "on", a.setAttribute("unselectable", d), c)
            for (e = 0; f = c[e]; e++) f.setAttribute("unselectable", d)
}
var Oe = {
    thin: 2,
    medium: 4,
    thick: 6
};

function Pe(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
        d;
    if (c in Oe) d = Oe[c];
    else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
    else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
};

function Qe(a) {
    Vc.call(this);
    this.h = a;
    this.g = {}
}
t(Qe, Vc);
var Re = [];
Qe.prototype.U = function(a, b, c, d) {
    da(b) || (b && (Re[0] = b.toString()), b = Re);
    for (var e = 0; e < b.length; e++) {
        var f = td(a, b[e], c || this.handleEvent, d || !1, this.h || this);
        if (!f) break;
        this.g[f.Mg] = f
    }
    return this
};
Qe.prototype.vb = function(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) this.vb(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.h || this, c = ud(c), d = !!d, b = a && a[$c] ? gd(a.Yb, String(b), c, d, e) : a ? (a = vd(a)) ? gd(a, b, c, d, e) : null : null, b && (Ad(b), delete this.g[b.Mg]);
    return this
};

function Se(a) {
    jb(a.g, function(a, c) {
        this.g.hasOwnProperty(c) && Ad(a)
    }, a);
    a.g = {}
}
Qe.prototype.va = function() {
    Qe.v.va.call(this);
    Se(this)
};
Qe.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function Te() {}
ba(Te);
Te.prototype.g = 0;

function Ue(a) {
    Ed.call(this);
    this.i = a || fc();
    this.bb = Ve;
    this.Ha = null;
    this.Z = !1;
    this.g = null;
    this.ac = void 0;
    this.D = this.j = this.w = this.Pa = null
}
t(Ue, Ed);
Ue.prototype.dg = Te.Jb();
var Ve = null;

function We(a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}

function Xe(a) {
    return a.Ha || (a.Ha = ":" + (a.dg.g++).toString(36))
}
g = Ue.prototype;
g.C = function() {
    return this.g
};

function Ye(a) {
    a.ac || (a.ac = new Qe(a));
    return a.ac
}

function Ze(a, b) {
    if (a == b) throw Error("Unable to set parent component");
    if (b && a.w && a.Ha && $e(a.w, a.Ha) && a.w != b) throw Error("Unable to set parent component");
    a.w = b;
    Ue.v.Je.call(a, b)
}
g.getParent = function() {
    return this.w
};
g.Je = function(a) {
    if (this.w && this.w != a) throw Error("Method not supported");
    Ue.v.Je.call(this, a)
};
g.Vc = function() {
    this.g = this.i.g.createElement("DIV")
};
g.V = function(a) {
    af(this, a)
};

function af(a, b, c) {
    if (a.Z) throw Error("Component already rendered");
    a.g || a.Vc();
    b ? b.insertBefore(a.g, c || null) : a.i.g.body.appendChild(a.g);
    a.w && !a.w.Z || a.Da()
}
g.Da = function() {
    this.Z = !0;
    bf(this, function(a) {
        !a.Z && a.C() && a.Da()
    })
};
g.mb = function() {
    bf(this, function(a) {
        a.Z && a.mb()
    });
    this.ac && Se(this.ac);
    this.Z = !1
};
g.va = function() {
    this.Z && this.mb();
    this.ac && (this.ac.B(), delete this.ac);
    bf(this, function(a) {
        a.B()
    });
    this.g && A(this.g);
    this.w = this.Pa = this.g = this.D = this.j = null;
    Ue.v.va.call(this)
};
g.pd = function(a, b) {
    this.Qc(a, cf(this), b)
};
g.Qc = function(a, b, c) {
    if (a.Z && (c || !this.Z)) throw Error("Component already rendered");
    if (0 > b || b > cf(this)) throw Error("Child component index out of bounds");
    this.D && this.j || (this.D = {}, this.j = []);
    if (a.getParent() == this) {
        var d = Xe(a);
        this.D[d] = a;
        Wa(this.j, a)
    } else {
        var d = this.D,
            e = Xe(a);
        if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
        d[e] = a
    }
    Ze(a, this);
    $a(this.j, b, 0, a);
    a.Z && this.Z && a.getParent() == this ? (c = this.re(), b = c.childNodes[b] || null, b != a.C() && c.insertBefore(a.C(), b)) : c ? (this.g ||
        this.Vc(), b = df(this, b + 1), af(a, this.re(), b ? b.g : null)) : this.Z && !a.Z && a.g && a.g.parentNode && 1 == a.g.parentNode.nodeType && a.Da()
};
g.re = function() {
    return this.g
};

function ef(a) {
    null == a.bb && (a.bb = "rtl" == Fe(a.Z ? a.g : a.i.g.body, "direction"));
    return a.bb
}
g.Wc = function(a) {
    if (this.Z) throw Error("Component already rendered");
    this.bb = a
};

function ff(a) {
    return !!a.j && 0 != a.j.length
}

function cf(a) {
    return a.j ? a.j.length : 0
}

function $e(a, b) {
    var c;
    a.D && b ? (c = a.D, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
    return c
}

function df(a, b) {
    return a.j ? a.j[b] || null : null
}

function bf(a, b, c) {
    a.j && Ra(a.j, b, c)
}

function gf(a, b) {
    return a.j && b ? Qa(a.j, b) : -1
}
g.removeChild = function(a, b) {
    if (a) {
        var c = r(a) ? a : Xe(a);
        a = $e(this, c);
        if (c && a) {
            var d = this.D;
            c in d && delete d[c];
            Wa(this.j, a);
            b && (a.mb(), a.g && A(a.g));
            Ze(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
g.dh = function(a) {
    for (var b = []; ff(this);) b.push(this.removeChild(df(this, 0), a));
    return b
};

function hf(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return r(a) && a.match(/\S+/g) || []
}

function jf(a, b) {
    return a.classList ? a.classList.contains(b) : Va(hf(a), b)
}

function kf(a, b) {
    a.classList ? a.classList.add(b) : jf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function lf(a, b) {
    if (a.classList) Ra(b, function(b) {
        kf(a, b)
    });
    else {
        var c = {};
        Ra(hf(a), function(a) {
            c[a] = !0
        });
        Ra(b, function(a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c) a.className += 0 < a.className.length ? " " + d : d
    }
}

function mf(a, b) {
    a.classList ? a.classList.remove(b) : jf(a, b) && (a.className = Sa(hf(a), function(a) {
        return a != b
    }).join(" "))
}

function nf(a, b) {
    a.classList ? Ra(b, function(b) {
        mf(a, b)
    }) : a.className = Sa(hf(a), function(a) {
        return !Va(b, a)
    }).join(" ")
};

function of(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!ga(b)) throw Error("Invalid decorator function " + b);
}
var pf = {};
var qf;

function rf(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function sf(a, b, c) {
    da(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c ? (qf || (qf = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }), c = qf, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}

function tf(a) {
    a.removeAttribute("aria-activedescendant")
}

function uf(a, b) {
    var c = a.getAttribute("aria-" + b);
    return null == c || void 0 == c ? "" : String(c)
};

function vf() {}
var wf;
ba(vf);
var xf = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
g = vf.prototype;
g.Pg = function() {};
g.se = function(a) {
    return a.i.ob("DIV", yf(this, a).join(" "), a.cb)
};
g.Zc = function(a) {
    return a
};

function zf(a, b, c) {
    if (a = a.C ? a.C() : a) {
        var d = [b];
        u && !Ub("7") && (d = Af(hf(a), b), d.push(b));
        (c ? lf : nf)(a, d)
    }
}

function Bf(a, b, c) {
    if (a = c || a.Pg()) c = b.getAttribute("role") || null, a != c && rf(b, a)
}

function Cf(a, b) {
    a.zb || sf(b, "hidden", !a.zb);
    a.isEnabled() || Df(b, 1, !a.isEnabled());
    a.Ba & 8 && Df(b, 8, !!(a.ea & 8));
    a.Ba & 16 && Df(b, 16, !!(a.ea & 16));
    a.Ba & 64 && Df(b, 64, !!(a.ea & 64))
}

function Ef(a, b) {
    var c;
    if (a.Ba & 32 && (c = a.C())) {
        if (!b && a.ea & 32) {
            try {
                c.blur()
            } catch (d) {}
            a.ea & 32 && a.Qg()
        }(xc(c) && yc(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
}
g.$ = function(a, b) {
    Le(a, b);
    a && sf(a, "hidden", !b)
};

function Df(a, b, c) {
    wf || (wf = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    b = wf[b];
    var d = a.getAttribute("role") || null;
    d && (d = xf[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && sf(a, b, c)
}
g.yd = function(a, b) {
    var c = this.Zc(a);
    if (c && (qc(c), b))
        if (r(b)) tc(c, b);
        else {
            var d = function(a) {
                if (a) {
                    var b = hc(c);
                    c.appendChild(r(a) ? b.createTextNode(a) : a)
                }
            };
            da(b) ? Ra(b, d) : !ea(b) || "nodeType" in b ? d(b) : Ra(Ya(b), d)
        }
};
g.ga = function() {
    return "goog-control"
};

function yf(a, b) {
    var c = a.ga(),
        d = [c],
        e = a.ga();
    e != c && d.push(e);
    c = b.ea;
    for (e = []; c;) {
        var f = c & -c;
        e.push(a.je(f));
        c &= ~f
    }
    d.push.apply(d, e);
    (c = b.Ig) && d.push.apply(d, c);
    u && !Ub("7") && d.push.apply(d, Af(d));
    return d
}

function Af(a, b) {
    var c = [];
    b && (a = Xa(a, [b]));
    Ra([], function(d) {
        !Ua(d, oa(Va, a)) || b && !Va(d, b) || c.push(d.join("_"))
    });
    return c
}
g.je = function(a) {
    if (!this.g) {
        var b = this.ga();
        b.replace(/\xa0|\s/g, " ");
        this.g = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    return this.g[a]
};

function Ff(a, b, c, d, e) {
    if (!(u || Hb || v && Ub("525"))) return !0;
    if (Kb && e) return Gf(a);
    if (e && !d) return !1;
    fa(b) && (b = Hf(b));
    if (!c && (17 == b || 18 == b || Kb && 91 == b)) return !1;
    if ((v || Hb) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (u && d && b == a) return !1;
    switch (a) {
        case 13:
            return !0;
        case 27:
            return !(v || Hb)
    }
    return Gf(a)
}

function Gf(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (v || Hb) && 0 == a) return !0;
    switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
    }
}

function Hf(a) {
    if (Ib) a = If(a);
    else if (Kb && v) a: switch (a) {
        case 93:
            a = 91;
            break a
    }
    return a
}

function If(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};

function Jf(a, b) {
    Ed.call(this);
    a && Kf(this, a, b)
}
t(Jf, Ed);
g = Jf.prototype;
g.Uc = null;
g.Ae = null;
g.zf = null;
g.Be = null;
g.tb = -1;
g.fc = -1;
g.We = !1;
var Lf = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Mf = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    Nf = u || Hb || v && Ub("525"),
    Of = Kb && Ib;
g = Jf.prototype;
g.zi = function(a) {
    if (v || Hb)
        if (17 == this.tb && !a.ctrlKey || 18 == this.tb && !a.altKey || Kb && 91 == this.tb && !a.metaKey) this.fc = this.tb = -1; - 1 == this.tb && (a.ctrlKey && 17 != a.g ? this.tb = 17 : a.altKey && 18 != a.g ? this.tb = 18 : a.metaKey && 91 != a.g && (this.tb = 91));
    Nf && !Ff(a.g, this.tb, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.fc = Hf(a.g), Of && (this.We = a.altKey))
};
g.Ai = function(a) {
    this.fc = this.tb = -1;
    this.We = a.altKey
};
g.handleEvent = function(a) {
    var b = a.h,
        c, d, e = b.altKey;
    u && "keypress" == a.type ? (c = this.fc, d = 13 != c && 27 != c ? b.keyCode : 0) : (v || Hb) && "keypress" == a.type ? (c = this.fc, d = 0 <= b.charCode && 63232 > b.charCode && Gf(c) ? b.charCode : 0) : Gb && !v ? (c = this.fc, d = Gf(c) ? b.keyCode : 0) : (c = b.keyCode || this.fc, d = b.charCode || 0, Of && (e = this.We), Kb && 63 == d && 224 == c && (c = 191));
    var f = c = Hf(c),
        h = b.keyIdentifier;
    c ? 63232 <= c && c in Lf ? f = Lf[c] : 25 == c && a.shiftKey && (f = 9) : h && h in Mf && (f = Mf[h]);
    this.tb = f;
    a = new Pf(f, d, 0, b);
    a.altKey = e;
    Fd(this, a)
};
g.C = function() {
    return this.Uc
};

function Kf(a, b, c) {
    a.Be && Qf(a);
    a.Uc = b;
    a.Ae = td(a.Uc, "keypress", a, c);
    a.zf = td(a.Uc, "keydown", a.zi, c, a);
    a.Be = td(a.Uc, "keyup", a.Ai, c, a)
}

function Qf(a) {
    a.Ae && (Ad(a.Ae), Ad(a.zf), Ad(a.Be), a.Ae = null, a.zf = null, a.Be = null);
    a.Uc = null;
    a.tb = -1;
    a.fc = -1
}
g.va = function() {
    Jf.v.va.call(this);
    Qf(this)
};

function Pf(a, b, c, d) {
    nd.call(this, d);
    this.type = "key";
    this.g = a;
    this.w = b
}
t(Pf, nd);

function N(a, b, c) {
    Ue.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ia(b);
            if (d = pf[d]) break;
            b = b.v ? b.v.constructor : null
        }
        b = d ? ga(d.Jb) ? d.Jb() : new d : null
    }
    this.h = b;
    this.Ie(void 0 !== a ? a : null)
}
t(N, Ue);
g = N.prototype;
g.cb = null;
g.ea = 0;
g.Ba = 39;
g.Ze = 255;
g.Ic = 0;
g.zb = !0;
g.Ig = null;
g.Bd = !0;
g.Vc = function() {
    var a = this.h.se(this);
    this.g = a;
    Bf(this.h, a, this.qe());
    Ne(a, !u && !Gb);
    this.zb || this.h.$(a, !1)
};
g.qe = function() {
    return null
};
g.re = function() {
    return this.h.Zc(this.C())
};
g.Da = function() {
    N.v.Da.call(this);
    Cf(this, this.g);
    var a = this.h;
    if (ef(this)) {
        var b = this.C();
        zf(b, a.ga() + "-rtl", !0)
    }
    this.isEnabled() && Ef(this, this.zb);
    this.Ba & -2 && (this.Bd && Rf(this, !0), this.Ba & 32 && (a = this.C())) && (b = this.o || (this.o = new Jf), Kf(b, a), Ye(this).U(b, "key", this.rb).U(a, "focus", this.oi).U(a, "blur", this.Qg))
};

function Rf(a, b) {
    var c = Ye(a),
        d = a.C();
    b ? (c.U(d, "mouseover", a.Cd).U(d, "mousedown", a.Sb).U(d, "mouseup", a.$c).U(d, "mouseout", a.sf), a.Ad != aa && c.U(d, "contextmenu", a.Ad), u && (Ub(9) || c.U(d, "dblclick", a.Rg), a.L || (a.L = new Sf(a), Yc(a, oa(Zc, a.L))))) : (c.vb(d, "mouseover", a.Cd).vb(d, "mousedown", a.Sb).vb(d, "mouseup", a.$c).vb(d, "mouseout", a.sf), a.Ad != aa && c.vb(d, "contextmenu", a.Ad), u && (Ub(9) || c.vb(d, "dblclick", a.Rg), Zc(a.L), a.L = null))
}
g.mb = function() {
    N.v.mb.call(this);
    this.o && Qf(this.o);
    this.zb && this.isEnabled() && Ef(this, !1)
};
g.va = function() {
    N.v.va.call(this);
    this.o && (this.o.B(), delete this.o);
    delete this.h;
    this.L = this.Ig = this.cb = null
};
g.Ie = function(a) {
    this.cb = a
};
g.ie = function() {
    var a = this.cb;
    if (!a) return "";
    a = r(a) ? a : da(a) ? Ta(a, Bc).join("") : zc(a);
    return ra(a)
};
g.Wc = function(a) {
    N.v.Wc.call(this, a);
    var b = this.C();
    b && zf(b, this.h.ga() + "-rtl", a)
};
g.$ = function(a, b) {
    if (b || this.zb != a && Fd(this, a ? "show" : "hide")) {
        var c = this.C();
        c && this.h.$(c, a);
        this.isEnabled() && Ef(this, a);
        this.zb = a;
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return !(this.ea & 1)
};
g.Kd = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Tf(this, 1, !a) || (a || (Uf(this, !1), this.pb(!1)), this.zb && Ef(this, a), Vf(this, 1, !a, !0))
};
g.pb = function(a) {
    Tf(this, 2, a) && Vf(this, 2, a)
};

function Uf(a, b) {
    Tf(a, 4, b) && Vf(a, 4, b)
}
g.Sf = function(a) {
    Tf(this, 8, a) && Vf(this, 8, a)
};

function Wf(a, b) {
    Tf(a, 16, b) && Vf(a, 16, b)
}

function Xf(a, b) {
    Tf(a, 64, b) && Vf(a, 64, b)
}

function Vf(a, b, c, d) {
    if (!d && 1 == b) a.Kd(!c);
    else if (a.Ba & b && c != !!(a.ea & b)) {
        var e = a.h;
        if (d = a.C())(e = e.je(b)) && zf(a, e, c), Df(d, b, c);
        a.ea = c ? a.ea | b : a.ea & ~b
    }
}
g.fb = function(a, b) {
    if (this.Z && this.ea & a && !b) throw Error("Component already rendered");
    !b && this.ea & a && Vf(this, a, !1);
    this.Ba = b ? this.Ba | a : this.Ba & ~a
};

function Yf(a, b) {
    return !!(a.Ze & b) && !!(a.Ba & b)
}

function Tf(a, b, c) {
    return !!(a.Ba & b) && !!(a.ea & b) != c && (!(a.Ic & b) || Fd(a, We(b, c))) && !a.J
}
g.Cd = function(a) {
    !Zf(a, this.C()) && Fd(this, "enter") && this.isEnabled() && Yf(this, 2) && this.pb(!0)
};
g.sf = function(a) {
    !Zf(a, this.C()) && Fd(this, "leave") && (Yf(this, 4) && Uf(this, !1), Yf(this, 2) && this.pb(!1))
};
g.Ad = aa;

function Zf(a, b) {
    return !!a.o && sc(b, a.o)
}
g.Sb = function(a) {
    if (this.isEnabled() && (Yf(this, 2) && this.pb(!0), pd(a) && !(v && Kb && a.ctrlKey))) {
        Yf(this, 4) && Uf(this, !0);
        var b;
        if (b = this.h) {
            var c;
            b = this.Ba & 32 && (c = this.C()) ? xc(c) && yc(c) : !1
        }
        b && this.C().focus()
    }!pd(a) || v && Kb && a.ctrlKey || a.preventDefault()
};
g.$c = function(a) {
    this.isEnabled() && (Yf(this, 2) && this.pb(!0), this.ea & 4 && this.hc(a) && Yf(this, 4) && Uf(this, !1))
};
g.Rg = function(a) {
    this.isEnabled() && this.hc(a)
};
g.hc = function(a) {
    Yf(this, 16) && Wf(this, !(this.ea & 16));
    Yf(this, 8) && this.Sf(!0);
    Yf(this, 64) && Xf(this, !(this.ea & 64));
    var b = new hd("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.D = a.D);
    return Fd(this, b)
};
g.oi = function() {
    Yf(this, 32) && Tf(this, 32, !0) && Vf(this, 32, !0)
};
g.Qg = function() {
    Yf(this, 4) && Uf(this, !1);
    Yf(this, 32) && Tf(this, 32, !1) && Vf(this, 32, !1)
};
g.rb = function(a) {
    return this.zb && this.isEnabled() && this.pf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.pf = function(a) {
    return 13 == a.g && this.hc(a)
};
if (!ga(N)) throw Error("Invalid component class " + N);
if (!ga(vf)) throw Error("Invalid renderer class " + vf);
var $f = ia(N);
pf[$f] = vf;
of("goog-control", function() {
    return new N(null)
});

function Sf(a) {
    Vc.call(this);
    this.h = a;
    this.g = !1;
    this.i = new Qe(this);
    Yc(this, oa(Zc, this.i));
    a = this.h.g;
    this.i.U(a, "mousedown", this.o).U(a, "mouseup", this.w).U(a, "click", this.j)
}
t(Sf, Vc);
var ag = !u || 9 <= Number(Xb);
Sf.prototype.o = function() {
    this.g = !1
};
Sf.prototype.w = function() {
    this.g = !0
};

function bg(a, b) {
    if (!ag) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
}
Sf.prototype.j = function(a) {
    if (this.g) this.g = !1;
    else {
        var b = a.h,
            c = b.button,
            d = b.type,
            e = bg(b, "mousedown");
        this.h.Sb(new nd(e, a.i));
        e = bg(b, "mouseup");
        this.h.$c(new nd(e, a.i));
        ag || (b.button = c, b.type = d)
    }
};
Sf.prototype.va = function() {
    this.h = null;
    Sf.v.va.call(this)
};

function cg() {
    this.h = []
}
t(cg, vf);
ba(cg);

function dg(a, b) {
    var c = a.h[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.ga() + "-highlight";
                break;
            case 1:
                c = a.ga() + "-checkbox";
                break;
            case 2:
                c = a.ga() + "-content"
        }
        a.h[b] = c
    }
    return c
}
g = cg.prototype;
g.Pg = function() {
    return "menuitem"
};
g.se = function(a) {
    var b = a.i.ob("DIV", yf(this, a).join(" "), eg(this, a.cb, a.i));
    fg(this, a, b, !!(a.Ba & 8) || !!(a.Ba & 16));
    return b
};
g.Zc = function(a) {
    return a && a.firstChild
};
g.yd = function(a, b) {
    var c = this.Zc(a),
        d = gg(this, a) ? c.firstChild : null;
    cg.v.yd.call(this, a, b);
    d && !gg(this, a) && c.insertBefore(d, c.firstChild || null)
};

function eg(a, b, c) {
    a = dg(a, 2);
    return c.ob("DIV", a, b)
}

function gg(a, b) {
    var c = a.Zc(b);
    if (c) {
        var c = c.firstChild,
            d = dg(a, 1);
        return !!c && ha(c) && 1 == c.nodeType && jf(c, d)
    }
    return !1
}

function fg(a, b, c, d) {
    Bf(a, c, b.qe());
    Cf(b, c);
    d != gg(a, c) && (d ? kf(c, "goog-option") : mf(c, "goog-option"), c = a.Zc(c), d ? (a = dg(a, 1), c.insertBefore(b.i.ob("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
g.je = function(a) {
    switch (a) {
        case 2:
            return dg(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return cg.v.je.call(this, a)
    }
};
g.ga = function() {
    return "goog-menuitem"
};

function hg(a, b, c, d) {
    N.call(this, a, d || cg.Jb(), c);
    this.Pa = b
}
t(hg, N);
g = hg.prototype;
g.Oa = function() {
    var a = this.Pa;
    return null != a ? a : this.ie()
};
g.fb = function(a, b) {
    hg.v.fb.call(this, a, b);
    switch (a) {
        case 8:
            this.ea & 16 && !b && Wf(this, !1);
            var c = this.C();
            c && this && c && fg(this.h, this, c, b);
            break;
        case 16:
            (c = this.C()) && this && c && fg(this.h, this, c, b)
    }
};
g.ie = function() {
    var a = this.cb;
    return da(a) ? (a = Ta(a, function(a) {
        return ha(a) && 1 == a.nodeType && (jf(a, "goog-menuitem-accel") || jf(a, "goog-menuitem-mnemonic-separator")) ? "" : Bc(a)
    }).join(""), ra(a)) : hg.v.ie.call(this)
};
g.$c = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.h;
        b.h = null;
        if (c && fa(a.clientX) && dc(c, new w(a.clientX, a.clientY))) return
    }
    hg.v.$c.call(this, a)
};
g.pf = function(a) {
    return a.g == this.Wg && this.hc(a) ? !0 : hg.v.pf.call(this, a)
};
g.ni = function() {
    return this.Wg
};
of("goog-menuitem", function() {
    return new hg(null)
});
hg.prototype.qe = function() {
    return this.Ba & 16 ? "menuitemcheckbox" : this.Ba & 8 ? "menuitemradio" : hg.v.qe.call(this)
};
hg.prototype.getParent = function() {
    return N.prototype.getParent.call(this)
};
hg.prototype.pe = function() {
    return N.prototype.pe.call(this)
};

function ig(a) {
    this.h = a
}
ba(ig);

function jg(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
}
ig.prototype.g = function(a) {
    a = a.C();
    Ne(a, Ib);
    u && (a.hideFocus = !0);
    var b = this.h;
    b && rf(a, b)
};
ig.prototype.ga = function() {
    return "goog-container"
};

function kg(a, b) {
    var c = a.ga(),
        d = [c, b.ed == lg ? c + "-horizontal" : c + "-vertical"];
    b.isEnabled() || d.push(c + "-disabled");
    return d
};

function mg() {}
t(mg, vf);
ba(mg);
mg.prototype.se = function(a) {
    return a.i.ob("DIV", this.ga())
};
mg.prototype.yd = function() {};
mg.prototype.ga = function() {
    return "goog-menuseparator"
};

function ng(a, b) {
    N.call(this, null, a || mg.Jb(), b);
    this.fb(1, !1);
    this.fb(2, !1);
    this.fb(4, !1);
    this.fb(32, !1);
    this.ea = 1
}
t(ng, N);
ng.prototype.Da = function() {
    ng.v.Da.call(this);
    var a = this.C();
    rf(a, "separator")
};
of("goog-menuseparator", function() {
    return new ng
});

function og(a) {
    this.h = a || "menu"
}
t(og, ig);
ba(og);
og.prototype.ga = function() {
    return "goog-menu"
};
og.prototype.g = function(a) {
    og.v.g.call(this, a);
    a = a.C();
    sf(a, "haspopup", "true")
};
of("goog-menuseparator", function() {
    return new ng
});

function pg(a, b, c) {
    Ue.call(this, c);
    this.xd = b || ig.Jb();
    this.ed = a || qg
}
t(pg, Ue);
var lg = "horizontal",
    qg = "vertical";
g = pg.prototype;
g.Af = null;
g.yc = null;
g.xd = null;
g.ed = null;
g.bc = !0;
g.vc = !0;
g.Xc = !0;
g.ya = -1;
g.Fa = null;
g.dd = !1;
g.Pb = null;

function rg(a) {
    return a.Af || a.C()
}
g.Vc = function() {
    this.g = this.i.ob("DIV", kg(this.xd, this).join(" "))
};
g.re = function() {
    return this.C()
};
g.Da = function() {
    pg.v.Da.call(this);
    bf(this, function(a) {
        a.Z && sg(this, a)
    }, this);
    var a = this.C();
    this.xd.g(this);
    this.$(this.bc, !0);
    Ye(this).U(this, "enter", this.qf).U(this, "highlight", this.yi).U(this, "unhighlight", this.Di).U(this, "open", this.Bi).U(this, "close", this.ui).U(a, "mousedown", this.Sb).U(hc(a), "mouseup", this.wi).U(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.ti);
    this.Xc && tg(this, !0)
};

function tg(a, b) {
    var c = Ye(a),
        d = rg(a);
    b ? c.U(d, "focus", a.Og).U(d, "blur", a.Ng).U(a.yc || (a.yc = new Jf(rg(a))), "key", a.rb) : c.vb(d, "focus", a.Og).vb(d, "blur", a.Ng).vb(a.yc || (a.yc = new Jf(rg(a))), "key", a.rb)
}
g.mb = function() {
    this.Yc(-1);
    this.Fa && Xf(this.Fa, !1);
    this.dd = !1;
    pg.v.mb.call(this)
};
g.va = function() {
    pg.v.va.call(this);
    this.yc && (this.yc.B(), this.yc = null);
    this.xd = this.Fa = this.Pb = this.Af = null
};
g.qf = function() {
    return !0
};
g.yi = function(a) {
    var b = gf(this, a.target);
    if (-1 < b && b != this.ya) {
        var c = df(this, this.ya);
        c && c.pb(!1);
        this.ya = b;
        c = df(this, this.ya);
        this.dd && Uf(c, !0);
        this.Fa && c != this.Fa && (c.Ba & 64 ? Xf(c, !0) : Xf(this.Fa, !1))
    }
    b = this.C();
    null != a.target.C() && sf(b, "activedescendant", a.target.C().id)
};
g.Di = function(a) {
    a.target == df(this, this.ya) && (this.ya = -1);
    a = this.C();
    tf(a)
};
g.Bi = function(a) {
    (a = a.target) && a != this.Fa && a.getParent() == this && (this.Fa && Xf(this.Fa, !1), this.Fa = a)
};
g.ui = function(a) {
    a.target == this.Fa && (this.Fa = null);
    var b = this.C(),
        c = a.target.C();
    b && a.target.ea & 2 && c && (a = "", c && (a = c.id), sf(b, "activedescendant", a))
};
g.Sb = function(a) {
    this.vc && (this.dd = !0);
    var b = rg(this);
    b && xc(b) && yc(b) ? b.focus() : a.preventDefault()
};
g.wi = function() {
    this.dd = !1
};
g.ti = function(a) {
    var b = ug(this, a.target);
    if (b) switch (a.type) {
        case "mousedown":
            b.Sb(a);
            break;
        case "mouseup":
            b.$c(a);
            break;
        case "mouseover":
            b.Cd(a);
            break;
        case "mouseout":
            b.sf(a);
            break;
        case "contextmenu":
            b.Ad(a)
    }
};

function ug(a, b) {
    if (a.Pb)
        for (var c = a.C(); b && b !== c;) {
            var d = b.id;
            if (d in a.Pb) return a.Pb[d];
            b = b.parentNode
        }
    return null
}
g.Og = function() {};
g.Ng = function() {
    this.Yc(-1);
    this.dd = !1;
    this.Fa && Xf(this.Fa, !1)
};
g.rb = function(a) {
    return this.isEnabled() && this.bc && (0 != cf(this) || this.Af) && this.nf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.nf = function(a) {
    var b = df(this, this.ya);
    if (b && "function" == typeof b.rb && b.rb(a) || this.Fa && this.Fa != b && "function" == typeof this.Fa.rb && this.Fa.rb(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.g) {
        case 27:
            if (this.Xc) rg(this).blur();
            else return !1;
            break;
        case 36:
            vg(this);
            break;
        case 35:
            wg(this);
            break;
        case 38:
            if (this.ed == qg) xg(this);
            else return !1;
            break;
        case 37:
            if (this.ed == lg) ef(this) ? yg(this) : xg(this);
            else return !1;
            break;
        case 40:
            if (this.ed == qg) yg(this);
            else return !1;
            break;
        case 39:
            if (this.ed ==
                lg) ef(this) ? xg(this) : yg(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function sg(a, b) {
    var c = b.C(),
        c = c.id || (c.id = Xe(b));
    a.Pb || (a.Pb = {});
    a.Pb[c] = b
}
g.pd = function(a, b) {
    pg.v.pd.call(this, a, b)
};
g.Qc = function(a, b, c) {
    a.Ic |= 2;
    a.Ic |= 64;
    a.fb(32, !1);
    a.Z && 0 != a.Bd && Rf(a, !1);
    a.Bd = !1;
    var d = a.getParent() == this ? gf(this, a) : -1;
    pg.v.Qc.call(this, a, b, c);
    a.Z && this.Z && sg(this, a);
    a = d; - 1 == a && (a = cf(this));
    a == this.ya ? this.ya = Math.min(cf(this) - 1, b) : a > this.ya && b <= this.ya ? this.ya++ : a < this.ya && b > this.ya && this.ya--
};
g.removeChild = function(a, b) {
    if (a = r(a) ? $e(this, a) : a) {
        var c = gf(this, a); - 1 != c && (c == this.ya ? (a.pb(!1), this.ya = -1) : c < this.ya && this.ya--);
        var d = a.C();
        d && d.id && this.Pb && (c = this.Pb, d = d.id, d in c && delete c[d])
    }
    c = a = pg.v.removeChild.call(this, a, b);
    c.Z && 1 != c.Bd && Rf(c, !0);
    c.Bd = !0;
    return a
};
g.$ = function(a, b) {
    if (b || this.bc != a && Fd(this, a ? "show" : "hide")) {
        this.bc = a;
        var c = this.C();
        c && (Le(c, a), this.Xc && jg(rg(this), this.vc && this.bc), b || Fd(this, this.bc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return this.vc
};
g.Kd = function(a) {
    this.vc != a && Fd(this, a ? "enable" : "disable") && (a ? (this.vc = !0, bf(this, function(a) {
        a.kh ? delete a.kh : a.Kd(!0)
    })) : (bf(this, function(a) {
        a.isEnabled() ? a.Kd(!1) : a.kh = !0
    }), this.dd = this.vc = !1), this.Xc && jg(rg(this), a && this.bc))
};

function zg(a, b) {
    b != a.Xc && a.Z && tg(a, b);
    a.Xc = b;
    a.vc && a.bc && jg(rg(a), b)
}
g.Yc = function(a) {
    (a = df(this, a)) ? a.pb(!0): -1 < this.ya && df(this, this.ya).pb(!1)
};

function vg(a) {
    Ag(a, function(a, c) {
        return (a + 1) % c
    }, cf(a) - 1)
}

function wg(a) {
    Ag(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}

function yg(a) {
    Ag(a, function(a, c) {
        return (a + 1) % c
    }, a.ya)
}

function xg(a) {
    Ag(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.ya)
}

function Ag(a, b, c) {
    c = 0 > c ? gf(a, a.Fa) : c;
    var d = cf(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
        var f = df(a, c);
        if (f && a.jg(f)) {
            a.Yc(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
}
g.jg = function(a) {
    return a.zb && a.isEnabled() && !!(a.Ba & 2)
};

function Bg() {}
t(Bg, vf);
ba(Bg);
Bg.prototype.ga = function() {
    return "goog-menuheader"
};

function Cg(a, b, c) {
    N.call(this, a, c || Bg.Jb(), b);
    this.fb(1, !1);
    this.fb(2, !1);
    this.fb(4, !1);
    this.fb(32, !1);
    this.ea = 1
}
t(Cg, N);
of("goog-menuheader", function() {
    return new Cg(null)
});

function Dg(a, b) {
    pg.call(this, qg, b || og.Jb(), a);
    zg(this, !1)
}
t(Dg, pg);
g = Dg.prototype;
g.Ve = !0;
g.ga = function() {
    return this.xd.ga()
};

function Eg(a) {
    a.Ve = !0;
    zg(a, !0)
}
g.$ = function(a, b, c) {
    (b = Dg.v.$.call(this, a, b)) && a && this.Z && this.Ve && rg(this).focus();
    a && c && fa(c.clientX) ? this.h = new w(c.clientX, c.clientY) : this.h = null;
    return b
};
g.qf = function(a) {
    this.Ve && rg(this).focus();
    return Dg.v.qf.call(this, a)
};
g.jg = function(a) {
    return a.isEnabled() && a.zb && !!(a.Ba & 2)
};
g.nf = function(a) {
    var b = Dg.v.nf.call(this, a);
    b || bf(this, function(c) {
        !b && c.ni && c.Wg == a.g && (this.isEnabled() && this.Yc(gf(this, c)), b = c.rb(a))
    }, this);
    return b
};
g.Yc = function(a) {
    Dg.v.Yc.call(this, a);
    if (a = df(this, a)) {
        var b = a.C(),
            c = (a = this.C() || mc(document)) || mc(document),
            d = Ie(b),
            e = Ie(c),
            f;
        if (!u || 9 <= Number(Xb)) h = Ee(c, "borderLeftWidth"), f = Ee(c, "borderRightWidth"), l = Ee(c, "borderTopWidth"), m = Ee(c, "borderBottomWidth"), f = new Be(parseFloat(l), parseFloat(f), parseFloat(m), parseFloat(h));
        else {
            var h = Pe(c, "borderLeft");
            f = Pe(c, "borderRight");
            var l = Pe(c, "borderTop"),
                m = Pe(c, "borderBottom");
            f = new Be(l, f, m, h)
        }
        c == mc(document) ? (h = d.x - c.scrollLeft, d = d.y - c.scrollTop, !u || 10 <= Number(Xb) ||
            (h += f.left, d += f.top)) : (h = d.x - e.x - f.left, d = d.y - e.y - f.top);
        e = c.clientHeight - b.offsetHeight;
        f = c.scrollLeft;
        l = c.scrollTop;
        f += Math.min(h, Math.max(h - (c.clientWidth - b.offsetWidth), 0));
        l += Math.min(d, Math.max(d - e, 0));
        b = new w(f, l);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
    }
};
var Gg = {
    be: null,
    show: function(a, b, c) {
        Fg(Gg, c, null);
        if (b.length) {
            var d = new Dg;
            d.Wc(c);
            for (var e = 0, f; f = b[e]; e++) {
                var h = new hg(f.text);
                h.Wc(c);
                d.pd(h, !0);
                h.Kd(f.enabled);
                f.enabled && td(h, "action", f.Ra)
            }
            td(d, "action", Gg.Tb);
            b = lc();
            e = Ge();
            d.V(O);
            var l = d.C();
            Hg(l, "blocklyContextMenu");
            Q(l, "contextmenu", null, Ig);
            f = Je(l);
            var h = a.clientX + e.x,
                m = a.clientY + e.y;
            a.clientY + f.height >= b.height && (m -= f.height);
            c ? f.width >= a.clientX && (h += f.width) : a.clientX + f.width >= b.width && (h -= f.width);
            Jg(h, m, b, e, c);
            Eg(d);
            setTimeout(function() {
                    l.focus()
                },
                1);
            Gg.be = null
        } else Gg.Tb()
    },
    Tb: function() {
        Kg(Gg);
        Gg.be = null
    },
    lq: function(a, b) {
        return function() {
            I++;
            var c = he(b, a.A),
                d = a.oa();
            d.x = a.s ? d.x - oe : d.x + oe;
            d.y += 2 * oe;
            c.moveBy(d.x, d.y);
            I--;
            0 == I && !c.i && J(new Lg(c));
            c.select()
        }
    }
};
// Copyright 2012 Google Inc.  Apache License 2.0
function Mg(a) {
    this.id = Ng();
    Og[this.id] = this;
    this.options = a || {};
    this.s = !!this.options.s;
    this.dc = !!this.options.dc;
    this.ba = this.options.ba;
    this.j = [];
    this.D = [];
    this.o = [];
    this.H = [];
    this.Fb = Object.create(null)
}
g = Mg.prototype;
g.O = !1;
g.B = function() {
    this.D.length = 0;
    this.clear();
    delete Og[this.id]
};

function Pg(a, b) {
    for (var c = !1, d, e = 0; d = a.j[e]; e++)
        if (d == b) {
            a.j.splice(e, 1);
            c = !0;
            break
        }
    if (!c) throw "Block not present in workspace's list of top-most blocks.";
}

function Qg(a, b) {
    var c = [].concat(a.j);
    if (b && 1 < c.length) {
        var d = Math.sin(3 * Math.PI / 180);
        a.s && (d *= -1);
        c.sort(function(a, b) {
            var c = a.oa(),
                l = b.oa();
            return c.y + d * c.x - (l.y + d * l.x)
        })
    }
    return c
}
g.Qb = function() {
    for (var a = Qg(this, !1), b = 0; b < a.length; b++) a.push.apply(a, a[b].Zb());
    return a
};
g.clear = function() {
    var a = Td;
    for (a || H(!0); this.j.length;) this.j[0].B();
    a || H(!1)
};
g.yb = function() {
    return 0
};
g.Yg = function(a, b) {
    return new Rg(this, a, b)
};

function Sg(a) {
    return isNaN(a.options.G) ? Infinity : a.options.G - a.Qb().length
}
g.Yf = function(a) {
    var b = a ? this.H : this.o,
        c = a ? this.o : this.H,
        d = b.pop();
    if (d) {
        for (var e = [d]; b.length && d.D && d.D == b[b.length - 1].D;) e.push(b.pop());
        for (b = 0; d = e[b]; b++) c.push(d);
        e = Tg(e, a);
        Sd = !1;
        for (b = 0; d = e[b]; b++) d.i(a);
        Sd = !0
    }
};
g.kg = function() {
    this.o.length = 0;
    for (var a = this.H.length = 0, b; b = Ug[a]; a++) b.Hf = !1
};
g.Eb = function(a) {
    this.D.push(a);
    return a
};
g.fd = function(a) {
    a = this.D.indexOf(a); - 1 != a && this.D.splice(a, 1)
};
var Og = Object.create(null);
Mg.prototype.clear = Mg.prototype.clear;
Mg.prototype.clearUndo = Mg.prototype.kg;
Mg.prototype.addChangeListener = Mg.prototype.Eb;
Mg.prototype.removeChangeListener = Mg.prototype.fd;

function Vg(a) {
    var b = z("xml");
    a = Qg(a, !0);
    for (var c = 0, d; d = a[c]; c++) b.appendChild(Wg(d));
    return b
}

function Wg(a) {
    var b;
    a.A.s && (b = a.A.yb());
    var c = Od(a),
        d = a.oa();
    c.setAttribute("x", Math.round(a.A.s ? b - d.x : d.x));
    c.setAttribute("y", Math.round(d.y));
    return c
}

function Od(a) {
    var b = z(a.i ? "shadow" : "block");
    b.setAttribute("type", a.type);
    b.setAttribute("id", a.id);
    if (a.bb) {
        var c = a.bb();
        c && (c.hasChildNodes() || c.hasAttributes()) && b.appendChild(c)
    }
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.za[e]; e++)
            if (f.name && f.Mc) {
                var h = z("field", null, f.Oa());
                h.setAttribute("name", f.name);
                b.appendChild(h)
            }
    if (c = a.ke()) c = z("comment", null, c), "object" == typeof a.ua && (c.setAttribute("pinned", !!a.ua.na), d = Xg(a.ua), c.setAttribute("h", d.height), c.setAttribute("w", d.width)), b.appendChild(c);
    a.data && (c = z("data", null, a.data), b.appendChild(c));
    for (c = 0; d = a.h[c]; c++) {
        var l;
        f = !0;
        5 != d.type && (h = G(d.I), 1 == d.type ? l = z("value") : 3 == d.type && (l = z("statement")), e = d.I.Lb, !e || h && h.i || l.appendChild(Yg(e)), h && (l.appendChild(Od(h)), f = !1), l.setAttribute("name", d.name), f || b.appendChild(l))
    }
    a.Ud != a.J && b.setAttribute("inline", a.J);
    a.j && b.setAttribute("collapsed", !0);
    a.disabled && b.setAttribute("disabled", !0);
    Zg(a) || a.i || b.setAttribute("deletable", !1);
    ee(a) || a.i || b.setAttribute("movable", !1);
    $g(a) || b.setAttribute("editable", !1);
    if (c = Qd(a)) l = z("next", null, Od(c)), b.appendChild(l);
    e = a.g && a.g.Lb;
    !e || c && c.i || l.appendChild(Yg(e));
    return b
}

function Yg(a) {
    for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else {
            for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && A(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && A(c))
        }
    return a
}

function ah(a) {
    return (new XMLSerializer).serializeToString(a)
}

function bh(a) {
    return (new DOMParser).parseFromString(a, "text/xml").firstChild
}

function ch(a, b) {
    if (a instanceof Mg) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var d;
    b.s && (d = b.yb());
    dh();
    var c = a.childNodes.length,
        e = Td;
    e || H(!0);
    for (var f = 0; f < c; f++) {
        var h = a.childNodes[f],
            l = h.nodeName.toLowerCase();
        if ("block" == l || "shadow" == l && !Sd) {
            var l = he(h, b),
                m = parseInt(h.getAttribute("x"), 10),
                h = parseInt(h.getAttribute("y"), 10);
            isNaN(m) || isNaN(h) || l.moveBy(b.s ? d - m : m, h)
        }
    }
    e || H(!1);
    eh()
}

function he(a, b) {
    if (a instanceof Mg) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    I++;
    var d = fh(a, b);
    if (b.O) {
        hh(d, !0);
        for (var c = d.Wa(), e = c.length - 1; 0 <= e; e--) c[e].ye();
        for (e = c.length - 1; 0 <= e; e--) c[e].V(!1);
        setTimeout(function() {
            d.A && hh(d, !1)
        }, 1);
        Ae(d);
        ih(b)
    }
    I--;
    0 == I && J(new Lg(d));
    return d
}

function fh(a, b) {
    for (var c = null, d = a.getAttribute("type"), e = a.getAttribute("id"), c = b.Yg(d, e), f = null, e = 0, h; h = a.childNodes[e]; e++)
        if (3 != h.nodeType) {
            for (var l = f = null, m = 0, n; n = h.childNodes[m]; m++) 1 == n.nodeType && ("block" == n.nodeName.toLowerCase() ? f = n : "shadow" == n.nodeName.toLowerCase() && (l = n));
            !f && l && (f = l);
            m = h.getAttribute("name");
            switch (h.nodeName.toLowerCase()) {
                case "mutation":
                    c.Pa && (c.Pa(h), c.ye && c.ye());
                    break;
                case "comment":
                    c.Jd(h.textContent);
                    var p = h.getAttribute("pinned");
                    p && !c.o && setTimeout(function() {
                        c.ua &&
                            c.ua.$ && c.ua.$("true" == p)
                    }, 1);
                    f = parseInt(h.getAttribute("w"), 10);
                    h = parseInt(h.getAttribute("h"), 10);
                    !isNaN(f) && !isNaN(h) && c.ua && c.ua.$ && jh(c.ua, f, h);
                    break;
                case "data":
                    c.data = h.textContent;
                    break;
                case "title":
                case "field":
                    f = kh(c, m);
                    if (!f) {
                        console.warn("Ignoring non-existent field " + m + " in block " + d);
                        break
                    }
                    f.qa(h.textContent);
                    break;
                case "value":
                case "statement":
                    h = lh(c, m);
                    if (!h) {
                        console.warn("Ignoring non-existent input " + m + " in block " + d);
                        break
                    }
                    l && (h.I.Lb = l);
                    f && (f = fh(f, b), f.K ? h.I.connect(f.K) : f.N && h.I.connect(f.N));
                    break;
                case "next":
                    l && c.g && (c.g.Lb = l);
                    f && (f = fh(f, b), c.g.connect(f.N));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + h.nodeName)
            }
        }(d = a.getAttribute("inline")) && c.jd("true" == d);
    (d = a.getAttribute("disabled")) && c.hd("true" == d);
    if (d = a.getAttribute("deletable")) c.nc = "true" == d;
    (d = a.getAttribute("movable")) && c.Qf("true" == d);
    (d = a.getAttribute("editable")) && c.Pf("true" == d);
    (d = a.getAttribute("collapsed")) && c.Dc("true" == d);
    if ("shadow" == a.nodeName.toLowerCase()) {
        d = c.Zb();
        for (e = 0; d[e]; e++);
        c.Tf(!0)
    }
    c.Vd &&
        c.Vd();
    return c
}
k.Blockly || (k.Blockly = {});
k.Blockly.Xml || (k.Blockly.Xml = {});
k.Blockly.Xml.domToText = ah;
k.Blockly.Xml.domToWorkspace = ch;
k.Blockly.Xml.textToDom = bh;
k.Blockly.Xml.workspaceToDom = Vg;

function mh(a, b, c, d, e, f) {
    this.u = a;
    this.o = b;
    this.w = c;
    c = nh;
    this.u.s && (c = -c);
    this.D = c * Math.PI / 180;
    a.i.appendChild(oh(this, b, !(!e || !f)));
    this.rc = d;
    this.Id && ph(this);
    e && f || (b = this.o.getBBox(), e = b.width + 2 * qh, f = b.height + 2 * qh);
    rh(this, e, f);
    ph(this);
    sh(this);
    this.Id = !0;
    a.options.i || (Q(this.i, "mousedown", this, this.Yh), this.g && Q(this.g, "mousedown", this, this.Ri))
}
var qh = 6,
    nh = 20,
    th = null,
    uh = null;
g = mh.prototype;
g.Lf = null;

function vh() {
    th && (R(th), th = null);
    uh && (R(uh), uh = null)
}
g.Id = !1;
g.rc = null;
g.Cc = 0;
g.Hd = 0;
g.X = 0;
g.od = 0;
g.Ye = !0;

function oh(a, b, c) {
    a.h = M("g", {}, null);
    var d = {
        filter: "url(#" + a.u.options.T + ")"
    }; - 1 != nb.indexOf("JavaFX") && (d = {});
    d = M("g", d, a.h);
    a.j = M("path", {}, d);
    a.i = M("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: qh,
        ry: qh
    }, d);
    c ? (a.g = M("g", {
            "class": a.u.s ? "blocklyResizeSW" : "blocklyResizeSE"
        }, a.h), c = 2 * qh, M("polygon", {
            points: "0,x x,x x,0".replace(/x/g, c.toString())
        }, a.g), M("line", {
            "class": "blocklyResizeLine",
            x1: c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: c / 3
        }, a.g), M("line", {
            "class": "blocklyResizeLine",
            x1: 2 * c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: 2 * c / 3
        }, a.g)) :
        a.g = null;
    a.h.appendChild(b);
    return a.h
}
g.Yh = function(a) {
    wh(this);
    vh();
    xh(a) ? a.stopPropagation() : yh(a) || (zh(Ah), Bh(this.u, a, new w(this.u.s ? -this.Cc : this.Cc, this.Hd)), th = Q(document, "mouseup", this, vh), uh = Q(document, "mousemove", this, this.Zh), Ch(), a.stopPropagation())
};
g.Zh = function(a) {
    this.Ye = !1;
    a = Dh(this.u, a);
    this.Cc = this.u.s ? -a.x : a.x;
    this.Hd = a.y;
    ph(this);
    sh(this)
};
g.Ri = function(a) {
    wh(this);
    vh();
    xh(a) || (zh(Ah), Bh(this.u, a, new w(this.u.s ? -this.X : this.X, this.od)), th = Q(document, "mouseup", this, vh), uh = Q(document, "mousemove", this, this.Si), Ch());
    a.stopPropagation()
};
g.Si = function(a) {
    this.Ye = !1;
    a = Dh(this.u, a);
    rh(this, this.u.s ? -a.x : a.x, a.y);
    this.u.s && ph(this)
};

function wh(a) {
    a.h.parentNode.appendChild(a.h)
}

function ph(a) {
    var b = a.rc.x,
        b = a.u.s ? b - (a.Cc + a.X) : b + a.Cc;
    a.h.setAttribute("transform", "translate(" + b + "," + (a.Hd + a.rc.y) + ")")
}

function Eh(a) {
    return {
        width: a.X,
        height: a.od
    }
}

function rh(a, b, c) {
    var d = 2 * qh;
    b = Math.max(b, d + 45);
    c = Math.max(c, d + 20);
    a.X = b;
    a.od = c;
    a.i.setAttribute("width", b);
    a.i.setAttribute("height", c);
    a.g && (a.u.s ? a.g.setAttribute("transform", "translate(" + 2 * qh + "," + (c - d) + ") scale(-1 1)") : a.g.setAttribute("transform", "translate(" + (b - d) + "," + (c - d) + ")"));
    if (a.Id) {
        if (a.Ye) {
            b = -a.X / 4;
            c = -a.od - 25;
            d = a.u.Ea();
            d.Y /= a.u.scale;
            d.Ca /= a.u.scale;
            var e = a.rc.x;
            a.u.s ? e - d.Ca - b - a.X < S ? b = e - d.Ca - a.X - S : e - d.Ca - b > d.Y && (b = e - d.Ca - d.Y) : e + b < d.Ca ? b = d.Ca - e : d.Ca + d.Y < e + b + a.X + 10 + S && (b = d.Ca + d.Y - e -
                a.X - S);
            a.rc.y + c < d.Mb && (c = a.w.getBBox().height);
            a.Cc = b;
            a.Hd = c
        }
        ph(a);
        sh(a)
    }
    a.Lf && a.Lf()
}

function sh(a) {
    var b = [],
        c = a.X / 2,
        d = a.od / 2,
        e = -a.Cc,
        f = -a.Hd;
    if (c == e && d == f) b.push("M " + c + "," + d);
    else {
        f -= d;
        e -= c;
        a.u.s && (e *= -1);
        var h = Math.sqrt(f * f + e * e),
            l = Math.acos(e / h);
        0 > f && (l = 2 * Math.PI - l);
        var m = l + Math.PI / 2;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        var n = Math.sin(m),
            p = Math.cos(m),
            q = Eh(a),
            m = (q.width + q.height) / 10,
            m = Math.min(m, q.width, q.height) / 2,
            q = 1 - 8 / h,
            e = c + q * e,
            f = d + q * f,
            q = c + m * p,
            B = d + m * n,
            c = c - m * p,
            d = d - m * n,
            n = l + a.D;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        l = Math.sin(n) * h / 4;
        h = Math.cos(n) * h / 4;
        b.push("M" + q + "," + B);
        b.push("C" + (q + h) + "," + (B + l) +
            " " + e + "," + f + " " + e + "," + f);
        b.push("C" + e + "," + f + " " + (c + h) + "," + (d + l) + " " + c + "," + d)
    }
    b.push("z");
    a.j.setAttribute("d", b.join(" "))
}
g.B = function() {
    vh();
    A(this.h);
    this.w = this.o = this.u = this.g = this.i = this.j = this.h = null
};

function Fh(a) {
    this.u = a
}
g = Fh.prototype;
g.Qe = !1;
g.m = null;
g.Ke = null;
g.Bf = 0;
g.gc = 0;
g.Nb = 0;
g.Nd = 0;
g.P = function(a) {
    this.g = 20 + a;
    Gh(this, !1);
    return this.g + 60
};
g.B = function() {
    this.m && (A(this.m), this.m = null);
    this.u = this.Ke = null;
    k.clearTimeout(this.Bf)
};
g.position = function() {
    var a = this.u.Ea();
    a && (this.u.s ? (this.Nb = 20 + S, 2 == a.ba && (this.Nb += a.fe, this.u.S && (this.Nb += a.Ia))) : (this.Nb = a.Y + a.Ia - 47 - 20 - S, 3 == a.ba && (this.Nb -= a.fe)), this.Nd = a.wa + a.La - 60 - this.g, 1 == a.ba && (this.Nd -= a.Jg), this.m.setAttribute("transform", "translate(" + this.Nb + "," + this.Nd + ")"))
};
g.ud = function() {
    if (!this.m) return null;
    var a = this.m.getBoundingClientRect();
    return new Ce(a.left + 0 - 10, a.top + 32 - 10, 67, 80)
};

function Gh(a, b) {
    a.Qe != b && (k.clearTimeout(a.Bf), a.Qe = b, a.Xe())
}
g.Xe = function() {
    this.gc += this.Qe ? .2 : -.2;
    this.gc = cc(this.gc, 0, 1);
    var a = 45 * this.gc;
    this.Ke.setAttribute("transform", "rotate(" + (this.u.s ? -a : a) + "," + (this.u.s ? 4 : 43) + ",14)");
    this.m.style.opacity = .4 + .4 * this.gc;
    0 < this.gc && 1 > this.gc && (this.Bf = Hd(this.Xe, 20, this))
};
g.close = function() {
    Gh(this, !1)
};
g.uh = function() {
    var a = this.u.Uf - this.u.scrollX,
        b = this.u.Vf - this.u.scrollY;
    Math.sqrt(a * a + b * b) > Hh || console.log("TODO: Inspect trash.")
};

function Ih(a) {
    this.u = a;
    this.h = new Jh(a, !0, !0);
    this.i = new Jh(a, !1, !0);
    this.j = M("rect", {
        height: S,
        width: S,
        "class": "blocklyScrollbarBackground"
    }, null);
    Kh(this.j, a.i)
}
Ih.prototype.g = null;
Ih.prototype.B = function() {
    A(this.j);
    this.g = this.u = this.j = null;
    this.h.B();
    this.h = null;
    this.i.B();
    this.i = null
};
Ih.prototype.resize = function() {
    var a = this.u.Ea();
    if (a) {
        var b = !1,
            c = !1;
        this.g && this.g.Y == a.Y && this.g.wa == a.wa && this.g.La == a.La && this.g.Ia == a.Ia ? (this.g && this.g.Ta == a.Ta && this.g.Ca == a.Ca && this.g.hb == a.hb || (b = !0), this.g && this.g.Sa == a.Sa && this.g.Mb == a.Mb && this.g.ib == a.ib || (c = !0)) : c = b = !0;
        b && this.h.resize(a);
        c && this.i.resize(a);
        this.g && this.g.Y == a.Y && this.g.Ia == a.Ia || this.j.setAttribute("x", this.i.H.x);
        this.g && this.g.wa == a.wa && this.g.La == a.La || this.j.setAttribute("y", this.h.H.y);
        this.g = a
    }
};
Ih.prototype.set = function(a, b) {
    var c = {},
        d = a * this.h.g,
        e = b * this.i.g,
        f = this.i.i;
    c.x = Lh(d, this.h.i);
    c.y = Lh(e, f);
    this.u.Ec(c);
    Mh(this.h, d);
    Mh(this.i, e)
};

function Lh(a, b) {
    var c = a / b;
    return isNaN(c) ? 0 : c
}

function Jh(a, b, c) {
    this.u = a;
    this.D = c || !1;
    this.w = b;
    this.L = null;
    this.m = M("g", {
        "class": "blocklyScrollbar" + (this.w ? "Horizontal" : "Vertical")
    }, null);
    this.h = M("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.m);
    a = Math.floor((S - 5) / 2);
    this.j = M("rect", {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.m);
    Kh(this.m, this.u.i);
    this.H = new w(0, 0);
    b ? (this.h.setAttribute("height", S), this.j.setAttribute("height", S - 5), this.j.setAttribute("y", 2.5), this.J = "width", this.Ha = "x") : (this.h.setAttribute("width", S), this.j.setAttribute("width",
        S - 5), this.j.setAttribute("x", 2.5), this.J = "height", this.Ha = "y");
    this.aa = Q(this.h, "mousedown", this, this.Li);
    this.ra = Q(this.j, "mousedown", this, this.Mi)
}
var Nh, Oh;
Jh.prototype.i = 0;
Jh.prototype.o = 0;
Jh.prototype.G = 0;
Jh.prototype.T = !0;
var S = 15;
ld && (S = 25);
g = Jh.prototype;
g.B = function() {
    this.Ee();
    R(this.aa);
    this.aa = null;
    R(this.ra);
    this.ra = null;
    A(this.m);
    this.u = this.j = this.h = this.m = null
};

function Mh(a, b) {
    a.G = b;
    a.j.setAttribute(a.Ha, a.G)
}

function Ph(a, b, c) {
    a.H.x = b;
    a.H.y = c;
    a.m.setAttribute("transform", "translate(" + a.H.x + "," + a.H.y + ")")
}
g.resize = function(a) {
    if (!a && (a = this.u.Ea(), !a)) return;
    var b = this.L;
    if (!a || !b || a.Y != b.Y || a.wa != b.wa || a.Ca != b.Ca || a.Mb != b.Mb || a.La != b.La || a.Ia != b.Ia || a.Ta != b.Ta || a.Sa != b.Sa || a.hb != b.hb || a.ib != b.ib) {
        this.L = a;
        if (this.w) {
            b = a.Y - 1;
            this.D && (b -= S);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.J, this.i);
            b = a.Ia + .5;
            this.D && this.u.s && (b += S);
            Ph(this, b, a.La + a.wa - S - .5);
            this.D || this.$(this.i < a.Ta);
            this.g = this.i / a.Ta;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.o = Math.max(0, a.Y * this.g);
            this.j.setAttribute(this.J,
                this.o);
            Mh(this, Qh(this, (a.Ca - a.hb) * this.g))
        } else {
            b = a.wa - 1;
            this.D && (b -= S);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.J, this.i);
            b = a.Ia + .5;
            this.u.s || (b += a.Y - S - 1);
            Ph(this, b, a.La + .5);
            this.D || this.$(this.i < a.Sa);
            this.g = this.i / a.Sa;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.o = Math.max(0, a.wa * this.g);
            this.j.setAttribute(this.J, this.o);
            Mh(this, Qh(this, (a.Mb - a.ib) * this.g))
        }
        Rh(this)
    }
};
g.$ = function(a) {
    if (a != this.T) {
        if (this.D) throw "Unable to toggle visibility of paired scrollbars.";
        (this.T = a) ? this.m.setAttribute("display", "block"): (this.u.Ec({
            x: 0,
            y: 0
        }), this.m.setAttribute("display", "none"))
    }
};
g.Li = function(a) {
    this.Ee();
    if (xh(a)) a.stopPropagation();
    else {
        var b = Sh(a, Th(this.u), this.u.bd),
            b = this.w ? b.x : b.y,
            c = Uh(this.j, this.u),
            c = this.w ? c.x : c.y,
            d = this.G,
            e = .95 * this.o;
        b <= c ? d -= e : b >= c + this.o && (d += e);
        Mh(this, Qh(this, d));
        Rh(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
g.Mi = function(a) {
    this.Ee();
    xh(a) ? a.stopPropagation() : (this.Pa = this.G, this.bb = this.w ? a.clientX : a.clientY, Nh = Q(document, "mouseup", this, this.Ee), Oh = Q(document, "mousemove", this, this.Oi), a.stopPropagation(), a.preventDefault())
};
g.Oi = function(a) {
    Mh(this, Qh(this, this.Pa + ((this.w ? a.clientX : a.clientY) - this.bb)));
    Rh(this)
};
g.Ee = function() {
    Ch(!0);
    Nh && (R(Nh), Nh = null);
    Oh && (R(Oh), Oh = null)
};

function Qh(a, b) {
    return b = 0 >= b || isNaN(b) || a.i < a.o ? 0 : Math.min(b, a.i - a.o)
}

function Rh(a) {
    var b = a.G / a.i;
    isNaN(b) && (b = 0);
    var c = {};
    a.w ? c.x = b : c.y = b;
    a.u.Ec(c)
}
g.set = function(a) {
    Mh(this, Qh(this, a * this.g));
    Rh(this)
};

function Kh(a, b) {
    var c = b.nextSibling,
        d = b.parentNode;
    if (!d) throw "Reference node has no parent.";
    c ? d.insertBefore(a, c) : d.appendChild(a)
};

function Vh() {}
Vh.prototype = [];

function re(a, b) {
    if (b.ec) throw "Connection already in database.";
    b.ma.o || (a.splice(Wh(a, b), 0, b), b.ec = !0)
}

function Xh(a, b) {
    if (!a.length) return -1;
    var c = Wh(a, b);
    if (c >= a.length) return -1;
    for (var d = b.sa, e = c; 0 <= e && a[e].sa == d;) {
        if (a[e] == b) return e;
        e--
    }
    for (; c < a.length && a[c].sa == d;) {
        if (a[c] == b) return c;
        c++
    }
    return -1
}

function Wh(a, b) {
    if (!a.length) return 0;
    for (var c = 0, d = a.length; c < d;) {
        var e = Math.floor((c + d) / 2);
        if (a[e].sa < b.sa) c = e + 1;
        else if (a[e].sa > b.sa) d = e;
        else {
            c = e;
            break
        }
    }
    return c
}

function Zd(a, b) {
    if (!b.ec) throw "Connection not in database.";
    var c = Xh(a, b);
    if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.ec = !1;
    a.splice(c, 1)
}

function Yh(a, b) {
    var c = oe;

    function d(a) {
        var b = f - e[a].ab,
            d = h - e[a].sa;
        Math.sqrt(b * b + d * d) <= c && p.push(e[a]);
        return d < c
    }
    for (var e = a, f = b.ab, h = b.sa, l = 0, m = e.length - 2, n = m; l < n;) e[n].sa < h ? l = n : m = n, n = Math.floor((l + m) / 2);
    var p = [],
        m = l = n;
    if (e.length) {
        for (; 0 <= l && d(l);) l--;
        do m++; while (m < e.length && d(m))
    }
    return p
}

function Zh(a, b, c, d) {
    if (!a.length) return {
        I: null,
        bh: c
    };
    var e = b.sa,
        f = b.ab;
    b.ab = f + d.x;
    b.sa = e + d.y;
    var h = Wh(a, b);
    d = null;
    for (var l = c, m, n = h - 1; 0 <= n && Math.abs(a[n].sa - b.sa) <= c;) m = a[n], b.ze(m, l) && (d = m, l = me(m, b)), n--;
    for (; h < a.length && Math.abs(a[h].sa - b.sa) <= c;) m = a[h], b.ze(m, l) && (d = m, l = me(m, b)), h++;
    b.ab = f;
    b.sa = e;
    return {
        I: d,
        bh: l
    }
};
// Copyright 2015 Google Inc.  Apache License 2.0
function $h(a) {
    this.u = a
}
g = $h.prototype;
g.m = null;
g.Ob = 0;
g.Od = 0;

function ai(a) {
    var b = a.u;
    a.m = M("g", {
        "class": "blocklyZoom"
    }, null);
    var c = String(Math.random()).substring(2),
        d = M("clipPath", {
            id: "blocklyZoomoutClipPath" + c
        }, a.m);
    M("rect", {
        width: 32,
        height: 32,
        y: 77
    }, d);
    var e = M("image", {
        width: bi,
        height: ci,
        x: -64,
        y: -15,
        "clip-path": "url(#blocklyZoomoutClipPath" + c + ")"
    }, a.m);
    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.j + di);
    d = M("clipPath", {
        id: "blocklyZoominClipPath" + c
    }, a.m);
    M("rect", {
        width: 32,
        height: 32,
        y: 43
    }, d);
    var f = M("image", {
        width: bi,
        height: ci,
        x: -32,
        y: -49,
        "clip-path": "url(#blocklyZoominClipPath" + c + ")"
    }, a.m);
    f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.j + di);
    d = M("clipPath", {
        id: "blocklyZoomresetClipPath" + c
    }, a.m);
    M("rect", {
        width: 32,
        height: 32
    }, d);
    c = M("image", {
        width: bi,
        height: ci,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + c + ")"
    }, a.m);
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.j + di);
    Q(c, "mousedown", null, function(a) {
        ei(b, 1);
        if (b.Aa) {
            var c = b.Ea(),
                d = (c.Ta - c.Y) / 2;
            b.W && (d -= b.W.X / 2);
            b.Aa.set(d, (c.Sa - c.wa) / 2)
        }
        a.stopPropagation();
        a.preventDefault()
    });
    Q(f, "mousedown", null, function(a) {
        fi(b, 1);
        a.stopPropagation();
        a.preventDefault()
    });
    Q(e, "mousedown", null, function(a) {
        fi(b, -1);
        a.stopPropagation();
        a.preventDefault()
    });
    return a.m
}
g.P = function(a) {
    this.g = 20 + a;
    return this.g + 110
};
g.B = function() {
    this.m && (A(this.m), this.m = null);
    this.u = null
};
g.position = function() {
    var a = this.u.Ea();
    a && (this.u.s ? (this.Ob = 20 + S, 2 == a.ba && (this.Ob += a.fe, this.u.S && (this.Ob += a.Ia))) : (this.Ob = a.Y + a.Ia - 32 - 20 - S, 3 == a.ba && (this.Ob -= a.fe)), this.Od = a.wa + a.La - 110 - this.g, 1 == a.ba && (this.Od -= a.Jg), this.m.setAttribute("transform", "translate(" + this.Ob + "," + this.Od + ")"))
};

function gi(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        d = !1,
        e = !1,
        f = !1,
        h = !1,
        l = !1,
        m = !1;
    else {
        var n = a.toolbox;
        n ? ("string" != typeof n && ("undefined" == typeof XSLTProcessor && n.outerHTML ? n = n.outerHTML : n instanceof Element || (n = null)), "string" == typeof n && (n = bh(n))) : n = null;
        c = n;
        d = !(!c || !c.getElementsByTagName("category").length);
        e = a.trashcan;
        void 0 === e && (e = d);
        f = a.collapse;
        void 0 === f && (f = d);
        h = a.comments;
        void 0 === h && (h = d);
        l = a.disable;
        void 0 === l && (l = d);
        m = a.sounds;
        void 0 === m && (m = !0)
    }
    var n = !!a.rtl,
        p = a.horizontalLayout;
    void 0 ===
        p && (p = !1);
    var q = a.toolboxPosition,
        q = "end" === q ? !1 : !0,
        B = a.scrollbars;
    void 0 === B && (B = d);
    var y = a.css;
    void 0 === y && (y = !0);
    var x = "https://blockly-demo.appspot.com/static/media/";
    a.media ? x = a.media : a.path && (x = a.path + "media/");
    this.s = n;
    this.D = f;
    this.L = h;
    this.J = l;
    this.i = b;
    this.G = a.maxBlocks || Infinity;
    this.j = x;
    this.aa = d;
    this.H = B;
    this.Pa = e;
    this.Ha = m;
    this.ra = y;
    this.dc = p;
    this.w = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.mq = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.tq = 0 < c.spacing && !!b.snap;
    this.h = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.$i = void 0 === a.wheel ? !1 : !!a.wheel;
    b.Wi = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.Fd = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.Gd = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.Ui = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.g = b;
    this.ba = p ? q ? 0 : 1 : q == n ? 3 : 2
}
gi.prototype.Kb = null;
gi.prototype.Ec = function() {};
gi.prototype.Ea = function() {
    return null
};
// Copyright 2014 Google Inc.  Apache License 2.0
function hi(a) {
    hi.v.constructor.call(this, a);
    this.Ea = a.Ea;
    this.Ec = a.Ec;
    a = [];
    a[1] = new Vh;
    a[2] = new Vh;
    a[3] = new Vh;
    a[4] = new Vh;
    this.T = a;
    this.G = Object.create(null)
}
t(hi, Mg);
g = hi.prototype;
g.He = null;
g.O = !0;
g.xf = !1;
g.yf = !1;
g.scrollX = 0;
g.scrollY = 0;
g.Uf = 0;
g.Vf = 0;
g.Gg = null;
g.scale = 1;
g.Ua = null;
g.Aa = null;
g.Vg = null;
g.bd = null;

function ii(a, b) {
    a.m = M("g", {
        "class": "blocklyWorkspace"
    }, null);
    b && (a.h = M("rect", {
        height: "100%",
        width: "100%",
        "class": b
    }, a.m), "blocklyMainBackground" == b && (a.h.style.fill = "url(#" + a.options.o.id + ")"));
    a.g = M("g", {
        "class": "blocklyBlockCanvas"
    }, a.m);
    a.i = M("g", {
        "class": "blocklyBubbleCanvas"
    }, a.m);
    var c = S;
    a.options.Pa && (c = ji(a, c));
    a.options.g && a.options.g.controls && (c = ki(a, c));
    Q(a.m, "mousedown", a, a.nd);
    Q(a.m, "touchstart", null, function(b) {
        li(b, a)
    });
    a.options.g && a.options.g.$i && Q(a.m, "wheel", a, a.Pi);
    a.options.aa ?
        a.S = new mi(a) : a.options.w && ni(a);
    oi(a);
    pi(a);
    return a.m
}
g.B = function() {
    this.O = !1;
    hi.v.B.call(this);
    this.m && (A(this.m), this.m = null);
    this.i = this.g = null;
    this.S && (this.S.B(), this.S = null);
    this.W && (this.W.B(), this.W = null);
    this.Ua && (this.Ua.B(), this.Ua = null);
    this.Aa && (this.Aa.B(), this.Aa = null);
    this.w && (this.w.B(), this.w = null);
    this.options.Kb || A(Th(this));
    this.He && (R(this.He), this.He = null)
};
g.Yg = function(a, b) {
    return new T(this, a, b)
};

function ji(a, b) {
    a.Ua = new Fh(a);
    var c = a.Ua;
    c.m = M("g", {
        "class": "blocklyTrash"
    }, null);
    var d = String(Math.random()).substring(2),
        e = M("clipPath", {
            id: "blocklyTrashBodyClipPath" + d
        }, c.m);
    M("rect", {
        width: 47,
        height: 44,
        y: 16
    }, e);
    M("image", {
        width: bi,
        x: -0,
        height: ci,
        y: -32,
        "clip-path": "url(#blocklyTrashBodyClipPath" + d + ")"
    }, c.m).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.u.options.j + di);
    e = M("clipPath", {
        id: "blocklyTrashLidClipPath" + d
    }, c.m);
    M("rect", {
        width: 47,
        height: 16
    }, e);
    c.Ke = M("image", {
        width: bi,
        x: -0,
        height: ci,
        y: -32,
        "clip-path": "url(#blocklyTrashLidClipPath" + d + ")"
    }, c.m);
    c.Ke.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.u.options.j + di);
    Q(c.m, "mouseup", c, c.uh);
    c.Xe();
    a.m.insertBefore(c.m, a.g);
    return a.Ua.P(b)
}

function ki(a, b) {
    a.w = new $h(a);
    var c = ai(a.w);
    a.m.appendChild(c);
    return a.w.P(b)
}

function ni(a) {
    a.W = new qi({
        sd: a.options.sd,
        Kb: a,
        s: a.s,
        dc: a.dc,
        ba: a.options.ba
    });
    a.W.qd = !1;
    var b = ri(a.W);
    a.m.insertBefore(b, a.g)
}

function ih(a) {
    a.Aa && a.Aa.resize();
    a.bd = Th(a).getScreenCTM().inverse()
}
g.resize = function() {
    this.S && this.S.position();
    this.W && this.W.position();
    this.Ua && this.Ua.position();
    this.w && this.w.position();
    this.Aa && this.Aa.resize();
    this.bd = Th(this).getScreenCTM().inverse();
    pi(this)
};

function Th(a) {
    if (a.Ha) return a.Ha;
    for (var b = a.m; b;) {
        if ("svg" == b.tagName) return a.Ha = b;
        b = b.parentNode
    }
    return null
}
g.translate = function(a, b) {
    var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
    this.g.setAttribute("transform", c);
    this.i.setAttribute("transform", c)
};
g.yb = function() {
    var a = this.Ea();
    return a ? a.Y / this.scale : 0
};
g.$ = function(a) {
    Th(this).style.display = a ? "block" : "none";
    this.S && (this.S.Db.style.display = a ? "block" : "none");
    a ? (this.V(), this.S && this.S.position()) : Ch(!0)
};
g.V = function() {
    for (var a = this.Qb(), b = a.length - 1; 0 <= b; b--) a[b].V(!1)
};

function si(a, b) {
    a.Xf = b;
    a.ra && (R(a.ra), a.ra = null);
    b && (a.ra = Q(a.g, "blocklySelectChange", a, function() {
        this.Xf = !1
    }))
}

function ti(a) {
    var b = U;
    b.Xf && 0 != K && si(b, !1);
    if (b.Xf) {
        var c = null;
        if (a && (c = b.Fb[a] || null, !c)) return;
        si(b, !1);
        c ? c.select() : L && pe(L);
        setTimeout(function() {
            si(b, !0)
        }, 1)
    }
}

function ui(a) {
    var b = vi;
    if (a.O && !(b.getElementsByTagName("block").length >= Sg(a))) {
        wi();
        I++;
        var c = he(b, a),
            d = parseInt(b.getAttribute("x"), 10),
            b = parseInt(b.getAttribute("y"), 10);
        if (!isNaN(d) && !isNaN(b)) {
            a.s && (d = -d);
            do {
                for (var e = !1, f = a.Qb(), h = 0, l; l = f[h]; h++)
                    if (l = l.oa(), 1 >= Math.abs(d - l.x) && 1 >= Math.abs(b - l.y)) {
                        e = !0;
                        break
                    }
                if (!e)
                    for (f = c.Ib(!1), h = 0; l = f[h]; h++)
                        if (Zh(l.rd, l, oe, new w(d, b)).I) {
                            e = !0;
                            break
                        }
                e && (d = a.s ? d - oe : d + oe, b += 2 * oe)
            } while (e);
            c.moveBy(d, b)
        }
        I--;
        0 == I && !c.i && J(new Lg(c));
        c.select()
    }
}

function pi(a) {
    a.Ua ? a.aa = a.Ua.ud() : a.aa = null;
    a.W ? a.J = a.W.ud() : a.S ? a.J = a.S.ud() : a.J = null
}

function xi(a, b) {
    var c = new w(b.clientX, b.clientY);
    if (a.aa) {
        if (a.aa.contains(c)) return Gh(a.Ua, !0), zh(yi), !0;
        Gh(a.Ua, !1)
    }
    if (a.J && a.J.contains(c)) return zh(yi), !0;
    zh(Ah);
    return !1
}
g.nd = function(a) {
    this.cd();
    yh(a) || (wi(), Ch(), a.target && a.target.nodeName && ("svg" == a.target.nodeName.toLowerCase() || a.target == this.h) && L && !this.options.i && pe(L), xh(a) ? zi(this, a) : this.Aa && (this.yf = !0, this.bb = a.clientX, this.Qa = a.clientY, this.Pa = this.Ea(), this.Uf = this.scrollX, this.Vf = this.scrollY, "mouseup" in Ai && (Bi = Bi || [], Bi = Bi.concat(Q(document, "mouseup", null, Ci))), Jd = Jd || [], Jd = Jd.concat(Q(document, "mousemove", null, Di))), a.stopPropagation(), a.preventDefault())
};

function Bh(a, b, c) {
    b = Sh(b, Th(a), a.bd);
    b.x /= a.scale;
    b.y /= a.scale;
    a.Gg = ec(c, b)
}

function Dh(a, b) {
    var c = Sh(b, Th(a), a.bd);
    c.x /= a.scale;
    c.y /= a.scale;
    var d = a.Gg;
    return new w(d.x + c.x, d.y + c.y)
}
g.Pi = function(a) {
    wi();
    var b = 0 < a.deltaY ? -1 : 1,
        c = Sh(a, Th(this), this.bd);
    Ei(this, c.x, c.y, b);
    a.preventDefault()
};
g.ai = function() {
    H(!0);
    for (var a = Qg(this, !0), b = 0, c = 0, d; d = a[c]; c++) {
        var e = d.oa();
        d.moveBy(-e.x, b - e.y);
        Fi(d);
        b = d.oa().y + Gi(d).height + 25
    }
    H(!1);
    ih(this)
};

function zi(a, b) {
    function c(a) {
        if (Zg(a)) B = B.concat(a.Wa());
        else {
            a = a.Zb();
            for (var b = 0; b < a.length; b++) c(a[b])
        }
    }

    function d() {
        H(h);
        var a = B.shift();
        a && (a.A ? (a.B(!1, !0), setTimeout(d, 10)) : d());
        H(!1)
    }
    if (!a.options.i && !a.xf) {
        var e = [],
            f = Qg(a, !0),
            h = Ng(),
            l = {};
        l.text = V.Vh;
        l.enabled = 0 < a.o.length;
        l.Ra = a.Yf.bind(a, !1);
        e.push(l);
        l = {};
        l.text = V.Sh;
        l.enabled = 0 < a.H.length;
        l.Ra = a.Yf.bind(a, !0);
        e.push(l);
        a.Aa && (l = {}, l.text = V.wh, l.enabled = 1 < f.length, l.Ra = a.ai.bind(a), e.push(l));
        if (a.options.D) {
            for (var m = l = !1, n = 0; n < f.length; n++)
                for (var p =
                        f[n]; p;) p.j ? l = !0 : m = !0, p = Qd(p);
            var q = function(a) {
                    for (var b = 0, c = 0; c < f.length; c++)
                        for (var d = f[c]; d;) setTimeout(d.Dc.bind(d, a), b), d = Qd(d), b += 10
                },
                m = {
                    enabled: m
                };
            m.text = V.xh;
            m.Ra = function() {
                q(!0)
            };
            e.push(m);
            l = {
                enabled: l
            };
            l.text = V.Hh;
            l.Ra = function() {
                q(!1)
            };
            e.push(l)
        }
        for (var B = [], n = 0; n < f.length; n++) c(f[n]);
        l = {
            text: 1 == B.length ? V.$f : V.ag.replace("%1", String(B.length)),
            enabled: 0 < B.length,
            Ra: function() {
                (2 > B.length || window.confirm(V.Dh.replace("%1", String(B.length)))) && d()
            }
        };
        e.push(l);
        Gg.show(b, e, a.s)
    }
}

function Hi(a, b, c) {
    if (b.length) {
        try {
            var d = new window.Audio
        } catch (m) {
            return
        }
        for (var e, f = 0; f < b.length; f++) {
            var h = b[f],
                l = h.match(/\.(\w+)$/);
            if (l && d.canPlayType("audio/" + l[1])) {
                e = new window.Audio(h);
                break
            }
        }
        e && e.play && (a.G[c] = e)
    }
}

function Ii(a, b, c) {
    var d = a.G[b];
    d ? (b = new Date, b - a.Vg < Ji || (a.Vg = b, a = Xb && 9 === Xb || Nb || Lb ? d : d.cloneNode(), a.volume = void 0 === c ? 1 : c, a.play())) : a.options.Kb && Ii(a.options.Kb, b, c)
}
g.cd = function() {
    this.options.Kb ? this.options.Kb.cd() : Ki = this
};

function Ei(a, b, c, d) {
    var e = a.options.g.Ui,
        f = a.Ea(),
        h = Th(a).createSVGPoint();
    h.x = b;
    h.y = c;
    h = h.matrixTransform(a.g.getCTM().inverse());
    b = h.x;
    c = h.y;
    h = a.g;
    e = 1 == d ? e : 1 / e;
    d = a.scale * e;
    d > a.options.g.Fd ? e = a.options.g.Fd / a.scale : d < a.options.g.Gd && (e = a.options.g.Gd / a.scale);
    a.scale != d && (a.Aa && (b = h.getCTM().translate(b * (1 - e), c * (1 - e)).scale(e), a.scrollX = b.e - f.Ia, a.scrollY = b.f - f.La), ei(a, d))
}

function fi(a, b) {
    var c = a.Ea();
    Ei(a, c.Y / 2, c.wa / 2, b)
}

function ei(a, b) {
    a.options.g.Fd && b > a.options.g.Fd ? b = a.options.g.Fd : a.options.g.Gd && b < a.options.g.Gd && (b = a.options.g.Gd);
    a.scale = b;
    oi(a);
    a.Aa ? a.Aa.resize() : a.translate(a.scrollX, a.scrollY);
    Ch(!1);
    a.W && a.W.Jf()
}

function oi(a) {
    if (a.options.o) {
        var b = a.options.h.spacing * a.scale || 100;
        a.options.o.setAttribute("width", b);
        a.options.o.setAttribute("height", b);
        var b = Math.floor(a.options.h.spacing / 2) + .5,
            c = b - a.options.h.length / 2,
            d = b + a.options.h.length / 2,
            e = a.options.o.firstChild,
            f = e && e.nextSibling,
            b = b * a.scale,
            c = c * a.scale,
            d = d * a.scale;
        e && (e.setAttribute("stroke-width", a.scale), e.setAttribute("x1", c), e.setAttribute("y1", b), e.setAttribute("x2", d), e.setAttribute("y2", b));
        f && (f.setAttribute("stroke-width", a.scale), f.setAttribute("x1",
            b), f.setAttribute("y1", c), f.setAttribute("x2", b), f.setAttribute("y2", d))
    }
}
hi.prototype.setVisible = hi.prototype.$;
// Copyright 2013 Google Inc.  Apache License 2.0
function Li(a) {
    this.xa = a
}
g = Li.prototype;
g.lg = !0;
g.na = null;
g.ad = null;

function Mi(a) {
    a.g || (a.g = M("g", {
        "class": "blocklyIconGroup"
    }, null), a.Hg(a.g), a.xa.m.appendChild(a.g), Q(a.g, "mouseup", a, a.Ei), a.Kc())
}
g.B = function() {
    A(this.g);
    this.g = null;
    this.$(!1);
    this.xa = null
};
g.Kc = function() {
    this.xa.o || !$g(this.xa) ? Hg(this.g, "blocklyIconGroupReadonly") : Ni(this.g, "blocklyIconGroupReadonly")
};
g.Ei = function(a) {
    2 != K && (this.xa.o || xh(a) || this.$(!this.na))
};
g.kc = function() {
    if (this.na) {
        var a = this.na,
            b = this.xa.Hb;
        a.i.setAttribute("fill", b);
        a.j.setAttribute("fill", b)
    }
};

function Oi(a) {
    var b = a.xa.oa(),
        c = ve(a.g),
        b = new w(b.x + c.x + 8.5, b.y + c.y + 8.5);
    dc(a.ad, b) || (a.ad = b, a.na && (a = a.na, a.rc = b, a.Id && ph(a)))
};
k.Blockly || (k.Blockly = {});
k.Blockly.Mutator || (k.Blockly.Mutator = {});
k.Blockly.Mutator.reconnect = function(a, b, c) {
    if (!a || !a.ma.A) return !1;
    c = lh(b, c).I;
    var d = G(a);
    return d && d != b || c.M == a ? !1 : (c.M && Nd(c), c.connect(a), !0)
};
var Pi = {};

function Qi(a) {
    Qi.v.constructor.call(this, a);
    Mi(this)
}
t(Qi, Li);
g = Qi.prototype;
g.ha = "";
g.X = 160;
g.Me = 80;
g.Hg = function(a) {
    M("circle", {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    M("path", {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.405 0.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25 -1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    M("rect", {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
};

function Ri(a) {
    a.i = M("foreignObject", {
        x: qh,
        y: qh
    }, null);
    var b = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
    b.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    b.className = "blocklyMinimalBody";
    var c = document.createElementNS("http://www.w3.org/1999/xhtml", "textarea");
    c.className = "blocklyCommentTextarea";
    c.setAttribute("dir", a.xa.s ? "RTL" : "LTR");
    b.appendChild(c);
    a.h = c;
    a.i.appendChild(b);
    Q(c, "mouseup", a, a.Zi);
    Q(c, "wheel", a, function(a) {
        a.stopPropagation()
    });
    Q(c, "change", a, function() {
        this.ha !=
            c.value && (J(new Si(this.xa, "comment", null, this.ha, c.value)), this.ha = c.value)
    });
    setTimeout(function() {
        c.focus()
    }, 0);
    return a.i
}
g.Kc = function() {
    this.na && (this.$(!1), this.$(!0));
    Li.prototype.Kc.call(this)
};
g.oh = function() {
    if (this.na) {
        var a = Eh(this.na),
            b = 2 * qh;
        this.i.setAttribute("width", a.width - b);
        this.i.setAttribute("height", a.height - b);
        this.h.style.width = a.width - b - 4 + "px";
        this.h.style.height = a.height - b - 4 + "px"
    }
};
g.$ = function(a) {
    if (a != !!this.na)
        if (J(new Ti(this.xa, "commentOpen", 0, a)), !$g(this.xa) && !this.h || u) Ui.prototype.$.call(this, a);
        else {
            var b = this.h ? this.h.value : this.ha,
                c = Xg(this);
            a ? (this.na = new mh(this.xa.A, Ri(this), this.xa.G, this.ad, this.X, this.Me), this.na.Lf = this.oh.bind(this), this.kc()) : (this.na.B(), this.i = this.h = this.na = null);
            Vi(this, b);
            jh(this, c.width, c.height)
        }
};
g.Zi = function() {
    wh(this.na);
    this.h.focus()
};

function Xg(a) {
    return a.na ? Eh(a.na) : {
        width: a.X,
        height: a.Me
    }
}

function jh(a, b, c) {
    a.h ? rh(a.na, b, c) : (a.X = b, a.Me = c)
}

function Vi(a, b) {
    a.ha != b && (J(new Si(a.xa, "comment", null, a.ha, b)), a.ha = b);
    a.h && (a.h.value = b)
}
g.B = function() {
    0 == I && Vi(this, "");
    this.xa.ua = null;
    Li.prototype.B.call(this)
};
var Wi = !1,
    Xi = 0,
    Yi = 0,
    Zi = 0,
    $i = 0,
    aj = null,
    bj = null,
    cj = null;

function dj(a) {
    Q(a, "mouseover", null, ej);
    Q(a, "mouseout", null, fj);
    Q(a, "mousemove", null, gj)
}

function ej(a) {
    for (a = a.target; !r(a.$a) && !ga(a.$a);) a = a.$a;
    aj != a && (hj(), bj = null, aj = a);
    clearTimeout(Xi)
}

function fj() {
    Xi = setTimeout(function() {
        bj = aj = null;
        hj()
    }, 1);
    clearTimeout(Yi)
}

function gj(a) {
    if (aj && aj.$a && 0 == K && !ij)
        if (Wi) {
            var b = Zi - a.pageX;
            a = $i - a.pageY;
            10 < Math.sqrt(b * b + a * a) && hj()
        } else bj != aj && (clearTimeout(Yi), Zi = a.pageX, $i = a.pageY, Yi = setTimeout(jj, 750))
}

function hj() {
    Wi && (Wi = !1, cj && (cj.style.display = "none"));
    clearTimeout(Yi)
}

function jj() {
    bj = aj;
    if (cj) {
        qc(cj);
        for (var a = aj.$a; ga(a);) a = a();
        for (var a = kj(a, 50), a = a.split("\n"), b = 0; b < a.length; b++) {
            var c = document.createElement("div");
            c.appendChild(document.createTextNode(a[b]));
            cj.appendChild(c)
        }
        a = aj.s;
        b = lc();
        cj.style.direction = a ? "rtl" : "ltr";
        cj.style.display = "block";
        Wi = !0;
        var c = Zi,
            c = a ? c - (0 + cj.offsetWidth) : c + 0,
            d = $i + 10;
        d + cj.offsetHeight > b.height + window.scrollY && (d -= cj.offsetHeight + 20);
        a ? c = Math.max(5 - window.scrollX, c) : c + cj.offsetWidth > b.width + window.scrollX - 10 && (c = b.width - cj.offsetWidth -
            10);
        cj.style.top = d + "px";
        cj.style.left = c + "px"
    }
};

function lj(a, b) {
    this.o = new Yb(0, 25);
    this.qa(a);
    this.Gc(b)
}
var mj = null,
    nj = 0;
g = lj.prototype;
g.name = void 0;
g.ha = "";
g.F = null;
g.Lc = !0;
g.Ka = null;
g.Mc = !0;
g.P = function() {
    this.g || (this.g = M("g", {}, null), this.Lc || (this.g.style.display = "none"), this.j = M("rect", {
        rx: 4,
        ry: 4,
        x: -5,
        y: 0,
        height: 16
    }, this.g), this.h = M("text", {
        "class": "blocklyText",
        y: this.o.height - 12.5
    }, this.g), this.Kc(), this.F.m.appendChild(this.g), this.G = Q(this.g, "mouseup", this, this.ph), oj(this))
};
g.B = function() {
    this.G && (R(this.G), this.G = null);
    this.F = null;
    A(this.g);
    this.Ka = this.j = this.h = this.g = null
};
g.Kc = function() {
    this.Mc && this.F && ($g(this.F) ? (Hg(this.g, "blocklyEditableText"), Ni(this.g, "blocklyNoNEditableText"), this.g.style.cursor = this.Qd) : (Hg(this.g, "blocklyNonEditableText"), Ni(this.g, "blocklyEditableText"), this.g.style.cursor = ""))
};
g.$ = function(a) {
    if (this.Lc != a) {
        this.Lc = a;
        var b = this.Ne();
        b && (b.style.display = a ? "block" : "none", this.Oe())
    }
};
g.Gc = function(a) {
    this.Ka = a
};
g.Ne = function() {
    return this.g
};
g.Oe = function() {
    if (this.Lc && this.h) {
        var a = this.h.textContent + "\n" + this.h.className.baseVal;
        if (mj && mj[a]) var b = mj[a];
        else {
            try {
                b = this.h.getComputedTextLength()
            } catch (c) {
                b = 8 * this.h.textContent.length
            }
            mj && (mj[a] = b)
        }
        this.j && this.j.setAttribute("width", b + 10)
    } else b = 0;
    this.o.width = b
};

function dh() {
    nj++;
    mj || (mj = {})
}

function eh() {
    nj--;
    nj || (mj = null)
}

function pj(a) {
    var b = a.j.getBBox();
    return new Yb(b.width * a.F.A.scale, b.height * a.F.A.scale)
}
g.mc = function() {
    return this.ha
};
g.wb = function(a) {
    null !== a && (a = String(a), a !== this.ha && (this.ha = a, oj(this), this.F && this.F.O && (this.F.V(), ke(this.F))))
};

function oj(a) {
    if (a.h) {
        var b = a.ha;
        50 < b.length && (b = b.substring(0, 48) + "\u2026");
        qc(a.h);
        b = b.replace(/\s/g, "\u00a0");
        a.F.s && b && (b += "\u200f");
        b || (b = "\u00a0");
        a.h.appendChild(document.createTextNode(b));
        a.o.width = 0
    }
}
g.Oa = function() {
    return this.mc()
};
g.qa = function(a) {
    if (null !== a) {
        var b = this.Oa();
        b != a && (this.F && 0 == I && J(new Si(this.F, "field", this.name, b, a)), this.wb(a))
    }
};
g.ph = function(a) {
    if (!Mb && !Nb || Ub("537.51.2") || 0 === a.layerX || 0 === a.layerY) xh(a) || 2 != K && $g(this.F) && this.Hc()
};

function qj(a, b) {
    this.o = new Yb(0, 17.5);
    this.i = b;
    this.qa(a)
}
t(qj, lj);
qj.prototype.Mc = !1;
qj.prototype.P = function() {
    this.h || (this.h = M("text", {
        "class": "blocklyText",
        y: this.o.height - 5
    }, null), this.i && Hg(this.h, this.i), this.Lc || (this.h.style.display = "none"), this.F.m.appendChild(this.h), this.h.$a = this.F, dj(this.h), oj(this))
};
qj.prototype.B = function() {
    A(this.h);
    this.h = null
};
qj.prototype.Ne = function() {
    return this.h
};

function rj(a, b, c, d) {
    this.type = a;
    this.name = b;
    this.g = c;
    this.I = d;
    this.za = []
}
g = rj.prototype;
g.align = -1;
g.Pe = !0;

function sj(a, b, c) {
    if (!b && !c) return a;
    r(b) && (b = new qj(b));
    b.F = a.g;
    a.g.O && b.P();
    b.name = c;
    b.J && sj(a, b.J);
    a.za.push(b);
    b.L && sj(a, b.L);
    a.g.O && (a.g.V(), ke(a.g));
    return a
}
g.$ = function(a) {
    var b = [];
    if (this.Pe == a) return b;
    for (var c = (this.Pe = a) ? "block" : "none", d = 0, e; e = this.za[d]; d++) e.$(a);
    if (this.I) {
        if (a) b = xe(this.I);
        else if (d = this.I, ye(d, !0), d.M)
            for (d = G(d).Wa(), e = 0; e < d.length; e++) {
                for (var f = d[e], h = f.Ib(!0), l = 0; l < h.length; l++) ye(h[l], !0);
                f = tj(f);
                for (h = 0; h < f.length; h++) f[h].$(!1)
            }
        if (d = G(this.I)) d.m.style.display = c, a || (d.O = !1)
    }
    return b
};
g.P = function() {
    if (this.g.A.O)
        for (var a = 0; a < this.za.length; a++) this.za[a].P()
};
g.B = function() {
    for (var a = 0, b; b = this.za[a]; a++) b.B();
    this.I && this.I.B();
    this.g = null
};

function Ui(a) {
    Ui.v.constructor.call(this, a);
    Mi(this);
    this.ha = {}
}
t(Ui, Li);
Ui.prototype.lg = !1;
Ui.prototype.Hg = function(a) {
    M("path", {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    M("path", {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    M("rect", {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
};
Ui.prototype.$ = function(a) {
    if (a != !!this.na)
        if (J(new Ti(this.xa, "warningOpen", 0, a)), a) {
            var b = uj(this);
            a = M("text", {
                "class": "blocklyText blocklyBubbleText",
                y: qh
            }, null);
            for (var b = b.split("\n"), c = 0; c < b.length; c++) M("tspan", {
                dy: "1em",
                x: qh
            }, a).appendChild(document.createTextNode(b[c]));
            this.na = new mh(this.xa.A, a, this.xa.G, this.ad, null, null);
            if (this.xa.s)
                for (var b = a.getBBox().width, c = 0, d; d = a.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", b + qh);
            this.kc();
            a = Eh(this.na);
            rh(this.na,
                a.width, a.height)
        } else this.na.B(), this.na = null
};

function vj(a, b, c) {
    a.ha[c] != b && (b ? a.ha[c] = b : delete a.ha[c], a.na && (a.$(!1), a.$(!0)))
}

function uj(a) {
    var b = [],
        c;
    for (c in a.ha) b.push(a.ha[c]);
    return b.join("\n")
}
Ui.prototype.B = function() {
    this.xa.gb = null;
    Li.prototype.B.call(this)
};

function Rg(a, b, c) {
    this.id = c && !a.Fb[c] ? c : Ng();
    a.Fb[this.id] = this;
    this.N = this.g = this.K = null;
    this.h = [];
    this.J = void 0;
    this.disabled = !1;
    this.$a = "";
    this.H = null;
    this.D = [];
    this.pc = this.Nc = this.nc = !0;
    this.j = this.i = !1;
    this.ua = null;
    this.Oc = new w(0, 0);
    this.A = a;
    this.o = a.xf;
    this.s = a.s;
    if (b) {
        this.type = b;
        b = Pi[b];
        for (var d in b) this[d] = b[d]
    }
    a.j.push(this);
    ga(this.P) && this.P();
    this.Ud = this.J;
    0 == I && J(new Lg(this));
    ga(this.onchange) && (this.Qa = this.onchange.bind(this), this.A.Eb(this.Qa))
}
g = Rg.prototype;
g.data = null;
g.Hb = "#000000";
g.B = function(a) {
    this.Qa && this.A.fd(this.Qa);
    je(this, a);
    0 == I && J(new wj(this));
    I++;
    this.A && (Pg(this.A, this), delete this.A.Fb[this.id], this.A = null);
    for (a = this.D.length - 1; 0 <= a; a--) this.D[a].B(!1);
    a = 0;
    for (var b; b = this.h[a]; a++) b.B();
    this.h.length = 0;
    b = this.Ib(!0);
    for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.M && Nd(c);
        b[a].B()
    }
    I--
};

function je(a, b) {
    if (a.K) a.K.M && Nd(a.K);
    else if (a.N) {
        var c = null;
        a.N.M && (c = a.N.M, Nd(a.N));
        var d = Qd(a);
        b && d && (d = a.g.M, Nd(d), c && Rd(c, d) && c.connect(d))
    }
}
g.Ib = function() {
    var a = [];
    this.K && a.push(this.K);
    this.N && a.push(this.N);
    this.g && a.push(this.g);
    for (var b = 0, c; c = this.h[b]; b++) c.I && a.push(c.I);
    return a
};

function ke(a) {
    if (a.A && 0 == K) {
        var b = ne(a);
        if (!b.o) {
            a = a.Ib(!1);
            for (var c = 0, d; d = a[c]; c++) {
                d.M && ce(d) && ke(G(d));
                var e;
                e = Yh(d.rd, d);
                for (var f = 0, h; h = e[f]; f++) d.M && h.M || ne(h.ma) != b && (ce(d) ? Ud(h, d) : Ud(d, h))
            }
        }
    }
}
g.getParent = function() {
    return this.H
};

function xj(a) {
    do {
        var b = a;
        a = a.getParent();
        if (!a) return null
    } while (Qd(a) == b);
    return a
}

function Qd(a) {
    return a.g && G(a.g)
}

function ne(a) {
    var b = a;
    do a = b, b = a.H; while (b);
    return a
}
g.Zb = function() {
    return this.D
};
g.Md = function(a) {
    if (a != this.H) {
        if (this.H) {
            for (var b = this.H.D, c, d = 0; c = b[d]; d++)
                if (c == this) {
                    b.splice(d, 1);
                    break
                }
            if (this.N && this.N.M) throw "Still connected to previous block.";
            if (this.K && this.K.M) throw "Still connected to parent block.";
            this.H = null
        } else Pg(this.A, this);
        (this.H = a) ? a.D.push(this): this.A.j.push(this)
    }
};
g.Wa = function() {
    for (var a = [this], b, c = 0; b = this.D[c]; c++) a.push.apply(a, b.Wa());
    return a
};

function Zg(a) {
    return a.nc && !a.i && !(a.A && a.A.options.i)
}

function ee(a) {
    return a.Nc && !a.i && !(a.A && a.A.options.i)
}
g.Qf = function(a) {
    this.Nc = a
};
g.Tf = function(a) {
    this.i = a
};

function $g(a) {
    return a.pc && !(a.A && a.A.options.i)
}
g.Pf = function(a) {
    this.pc = a;
    a = 0;
    for (var b; b = this.h[a]; a++)
        for (var c = 0, d; d = b.za[c]; c++) d.Kc()
};

function hh(a, b) {
    if (!b && a.j) {
        if (a.K && ye(a.K, b), a.N && ye(a.N, b), a.g) {
            ye(a.g, b);
            var c = G(a.g);
            c && hh(c, b)
        }
    } else
        for (var d = a.Ib(!0), e = 0; c = d[e]; e++) ye(c, b), ce(c) && (c = G(c)) && hh(c, b)
}
g.lc = function(a) {
    var b = parseFloat(a);
    if (isNaN(b))
        if (r(a) && a.match(/^#[0-9a-fA-F]{6}$/)) this.Hb = a;
        else throw "Invalid colour: " + a;
    else this.Hb = yj(zj(b))
};

function kh(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.za[e]; e++)
            if (f.name === b) return f;
    return null
}

function Aj(a) {
    return (a = kh(a, "DIR")) ? a.Oa() : null
}
g.Fc = function(a, b) {
    a ? (void 0 === b && (b = null), this.N || (this.N = this.Ed(4)), ie(this.N, b)) : this.N && (this.N.B(), this.N = null)
};
g.kd = function(a, b) {
    a ? (void 0 === b && (b = null), this.g || (this.g = this.Ed(3)), ie(this.g, b)) : this.g && (this.g.B(), this.g = null)
};
g.Rf = function(a, b) {
    a ? (void 0 === b && (b = null), this.K || (this.K = this.Ed(2)), ie(this.K, b)) : this.K && (this.K.B(), this.K = null)
};
g.jd = function(a) {
    this.J != a && (J(new Si(this, "inline", null, this.J, a)), this.J = a)
};

function Bj(a) {
    if (void 0 != a.J) return a.J;
    for (var b = 1; b < a.h.length; b++)
        if (5 == a.h[b - 1].type && 5 == a.h[b].type) return !1;
    for (b = 1; b < a.h.length; b++)
        if (1 == a.h[b - 1].type && 5 == a.h[b].type) return !0;
    return !1
}
g.hd = function(a) {
    this.disabled != a && (J(new Si(this, "disabled", null, this.disabled, a)), this.disabled = a)
};

function Cj(a) {
    for (;;) {
        a = xj(a);
        if (!a) return !1;
        if (a.disabled) return !0
    }
}
g.Dc = function(a) {
    this.j != a && (J(new Si(this, "collapsed", null, this.j, a)), this.j = a)
};
g.toString = function(a) {
    var b = [];
    if (this.j) b.push(lh(this, "_TEMP_COLLAPSED_INPUT").za[0].ha);
    else
        for (var c = 0, d; d = this.h[c]; c++) {
            for (var e = 0, f; f = d.za[e]; e++) b.push(f.mc());
            d.I && ((d = G(d.I)) ? b.push(d.toString()) : b.push("?"))
        }
    b = sa(b.join(" ")) || "???";
    a && b.length > a && (b = b.substring(0, a - 3) + "...");
    return b
};
g.Va = function(a, b) {
    var c = null;
    if (1 == a || 3 == a) c = this.Ed(a);
    c = new rj(a, b, this, c);
    this.h.push(c);
    return c
};
g.Kf = function(a) {
    for (var b = 0, c; c = this.h[b]; b++)
        if (c.name == a) {
            c.I && c.I.M && (c.I.Lb = null, a = G(c.I), a.i ? a.B() : je(a));
            c.B();
            this.h.splice(b, 1);
            break
        }
};

function lh(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        if (d.name == b) return d;
    return null
}
g.ke = function() {
    return this.ua || ""
};
g.Jd = function(a) {
    this.ua != a && (J(new Si(this, "comment", null, this.ua, a || "")), this.ua = a)
};
g.Za = function() {};
g.oa = function() {
    return this.Oc
};
g.moveBy = function(a, b) {
    var c = new Wd(this);
    this.Oc.translate(a, b);
    Yd(c);
    J(c)
};
g.Ed = function(a) {
    return new Ld(this, a)
};

function T(a, b, c) {
    this.m = M("g", {}, null);
    this.aa = M("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.m);
    this.G = M("path", {
        "class": "blocklyPath"
    }, this.m);
    this.T = M("path", {
        "class": "blocklyPathLight"
    }, this.m);
    this.G.$a = this;
    this.O = !1;
    dj(this.G);
    T.v.constructor.call(this, a, b, c)
}
t(T, Rg);
g = T.prototype;
g.height = 0;
g.width = 0;
g.td = null;
g.ye = function() {
    for (var a = 0, b; b = this.h[a]; a++) b.P();
    b = tj(this);
    for (a = 0; a < b.length; a++) Mi(b[a]);
    this.kc();
    Dj(this);
    if (!this.A.options.i && !this.Td) {
        Q(this.m, "mousedown", this, this.nd);
        var c = this;
        Q(this.m, "touchstart", null, function(a) {
            li(a, c)
        })
    }
    this.Td = !0;
    this.m.parentNode || this.A.g.appendChild(this.m)
};
g.select = function() {
    if (this.i && this.getParent()) this.getParent().select();
    else if (L != this) {
        L && (I++, pe(L), I--);
        var a = new Ti(null, "selected", 0, this.id);
        a.g = this.A.id;
        J(a);
        L = this;
        this.Ue()
    }
};

function pe(a) {
    if (L == a) {
        var b = new Ti(null, "selected", 0, null);
        b.g = a.A.id;
        J(b);
        L = null;
        a.Fe()
    }
}
g.Xg = null;
g.ua = null;
g.gb = null;

function tj(a) {
    var b = [];
    a.ua && b.push(a.ua);
    a.gb && b.push(a.gb);
    return b
}
var Ej = null,
    Fj = null;

function Gj() {
    Hj();
    Ej && (R(Ej), Ej = null);
    Fj && (R(Fj), Fj = null);
    var a = L;
    if (2 == K && a) {
        var b = a.oa(),
            b = ec(b, a.td),
            c = new Wd(a);
        c.G = a.td;
        Yd(c);
        J(c);
        we(a, b.x, b.y);
        delete a.ra;
        Ij(a, !1);
        a.V();
        var d = Td;
        setTimeout(function() {
            H(d);
            Fi(a);
            H(!1)
        }, Vd / 2);
        setTimeout(function() {
            H(d);
            ke(a);
            H(!1)
        }, Vd);
        ih(a.A)
    }
    K = 0;
    zh(Jj)
}
g = T.prototype;
g.Md = function(a) {
    if (a != this.H) {
        var b = this.m;
        if (this.H && b) {
            var c = this.oa();
            this.A.g.appendChild(b);
            b.setAttribute("transform", "translate(" + c.x + "," + c.y + ")")
        }
        dh();
        T.v.Md.call(this, a);
        eh();
        a && (c = this.oa(), a.m.appendChild(b), a = this.oa(), we(this, a.x - c.x, a.y - c.y))
    }
};
g.oa = function() {
    var a = 0,
        b = 0,
        c = this.m;
    if (c) {
        do var d = ve(c),
            a = a + d.x,
            b = b + d.y,
            c = c.parentNode; while (c && c != this.A.g)
    }
    return new w(a, b)
};
g.moveBy = function(a, b) {
    var c = new Wd(this),
        d = this.oa();
    this.m.setAttribute("transform", "translate(" + (d.x + a) + "," + (d.y + b) + ")");
    we(this, a, b);
    Yd(c);
    ih(this.A);
    J(c)
};

function Fi(a) {
    if (a.A && 0 == K && !a.getParent() && !a.o && a.A.options.h && a.A.options.h.snap) {
        var b = a.A.options.h.spacing,
            c = b / 2,
            d = a.oa(),
            e = Math.round((d.x - c) / b) * b + c - d.x,
            b = Math.round((d.y - c) / b) * b + c - d.y,
            e = Math.round(e),
            b = Math.round(b);
        0 == e && 0 == b || a.moveBy(e, b)
    }
}

function Gi(a) {
    var b = a.height,
        c = a.width,
        d = Qd(a);
    d ? (a = Gi(d), b += a.height - 4, c = Math.max(c, a.width)) : a.g || a.K || (b += 2);
    return {
        height: b,
        width: c
    }
}

function Kj(a) {
    var b = a.oa(a),
        c = a.K ? 8 : 0,
        d = Gi(a);
    a.s ? (a = new w(b.x - (d.width - c), b.y), b = new w(b.x + c, b.y + d.height)) : (a = new w(b.x - c, b.y), b = new w(b.x + d.width - c, b.y + d.height));
    return {
        ub: a,
        Gb: b
    }
}
g.Dc = function(a) {
    if (this.j != a) {
        for (var b = [], c = 0, d; d = this.h[c]; c++) b.push.apply(b, d.$(!a));
        if (a) {
            d = tj(this);
            for (c = 0; c < d.length; c++) d[c].$(!1);
            c = this.toString(Lj);
            sj(this.Va(5, "_TEMP_COLLAPSED_INPUT"), c).P()
        } else this.Kf("_TEMP_COLLAPSED_INPUT"), this.Za(null);
        T.v.Dc.call(this, a);
        b.length || (b[0] = this);
        if (this.O)
            for (c = 0; a = b[c]; c++) a.V()
    }
};
g.tab = function(a, b) {
    for (var c = [], d = 0, e; e = this.h[d]; d++) {
        for (var f = 0, h; h = e.za[f]; f++) h instanceof Mj && c.push(h);
        e.I && (e = G(e.I)) && c.push(e)
    }
    d = c.indexOf(a); - 1 == d && (d = b ? -1 : c.length);
    (c = c[b ? d + 1 : d - 1]) ? c instanceof lj ? c.Hc() : c.tab(null, b): (c = this.getParent()) && c.tab(this, b)
};
g.nd = function(a) {
    if (!this.A.options.i)
        if (this.o) a.stopPropagation();
        else {
            this.A.cd();
            wi();
            this.select();
            Ch();
            if (xh(a)) Nj(this, a);
            else if (ee(this)) {
                Td || H(!0);
                zh(Ah);
                this.td = this.oa();
                Bh(this.A, a, this.td);
                K = 1;
                Ej = Q(document, "mouseup", this, this.nh);
                Fj = Q(document, "mousemove", this, this.mh);
                this.ra = [];
                for (var b = this.Wa(), c = 0, d; d = b[c]; c++) {
                    d = tj(d);
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e].ad;
                        f.Xh = d[e];
                        this.ra.push(f)
                    }
                }
            } else return;
            a.stopPropagation();
            a.preventDefault()
        }
};
g.nh = function(a) {
    2 == K || ij || J(new Ti(this, "click", 0, void 0));
    wi();
    if (L && ae) {
        be.connect(ae);
        if (this.O && (a = (ce(be) ? ae : be).ma, Ii(a.A, "click"), !(1 > a.A.scale))) {
            var b = Uh(a.m, a.A);
            a.K ? (b.x += (a.s ? 3 : -3) * a.A.scale, b.y += 13 * a.A.scale) : a.N && (b.x += (a.s ? -23 : 23) * a.A.scale, b.y += 3 * a.A.scale);
            b = M("circle", {
                cx: b.x,
                cy: b.y,
                r: 0,
                fill: "none",
                stroke: "#888",
                "stroke-width": 10
            }, Th(a.A));
            Oj(b, new Date, a.A.scale)
        }
        this.A.Ua && this.A.Ua.close()
    } else !this.getParent() && Zg(L) && xi(this.A, a) && ((a = this.A.Ua) && Hd(a.close, 100, a), L.B(!1, !0));
    ae && (ze(), ae = null);
    zh(Jj);
    ij || H(!1)
};

function Nj(a, b) {
    if (!a.A.options.i) {
        var c = [];
        if (Zg(a) && ee(a) && !a.o) {
            var d = {
                text: V.Fh,
                enabled: !0,
                Ra: function() {
                    var b = vi,
                        c = Pj;
                    Qj(a);
                    ui(a.A);
                    vi = b;
                    Pj = c
                }
            };
            a.Wa().length > Sg(a.A) && (d.enabled = !1);
            c.push(d);
            $g(a) && !a.j && a.A.options.L && (d = {
                enabled: !u
            }, a.ua ? (d.text = V.Th, d.Ra = function() {
                a.Jd(null)
            }) : (d.text = V.lh, d.Ra = function() {
                a.Jd("")
            }), c.push(d));
            if (!a.j)
                for (d = 1; d < a.h.length; d++)
                    if (3 != a.h[d - 1].type && 3 != a.h[d].type) {
                        var d = {
                                enabled: !0
                            },
                            e = Bj(a);
                        d.text = e ? V.Jh : V.Lh;
                        d.Ra = function() {
                            a.jd(!e)
                        };
                        c.push(d);
                        break
                    }
            a.A.options.D &&
                (a.j ? (d = {
                    enabled: !0
                }, d.text = V.Ih, d.Ra = function() {
                    a.Dc(!1)
                }, c.push(d)) : (d = {
                    enabled: !0
                }, d.text = V.yh, d.Ra = function() {
                    a.Dc(!0)
                }, c.push(d)));
            a.A.options.J && (d = {
                text: a.disabled ? V.Gh : V.Eh,
                enabled: !Cj(a),
                Ra: function() {
                    a.hd(!a.disabled)
                }
            }, c.push(d));
            var d = a.Wa().length,
                f = Qd(a);
            f && (d -= f.Wa().length);
            d = {
                text: 1 == d ? V.$f : V.ag.replace("%1", String(d)),
                enabled: !0,
                Ra: function() {
                    H(!0);
                    a.B(!0, !0);
                    H(!1)
                }
            };
            c.push(d)
        }
        d = {
            enabled: !(ga(a.L) ? !a.L() : !a.L)
        };
        d.text = V.Kh;
        d.Ra = function() {
            var b = ga(a.L) ? a.L() : a.L;
            b && window.open(b)
        };
        c.push(d);
        a.Sd && !a.o && a.Sd(c);
        Gg.show(b, c, a.s);
        Gg.be = a
    }
}

function we(a, b, c) {
    if (a.O) {
        for (var d = a.Ib(!1), e = 0; e < d.length; e++) d[e].moveBy(b, c);
        d = tj(a);
        for (e = 0; e < d.length; e++) Oi(d[e]);
        for (e = 0; e < a.D.length; e++) we(a.D[e], b, c)
    }
}

function Ij(a, b) {
    if (b) {
        var c = a.m;
        c.h = "";
        c.g = "";
        Hg(a.m, "blocklyDragging");
        fe = fe.concat(a.Ib(!0))
    } else Ni(a.m, "blocklyDragging"), fe = [];
    for (c = 0; c < a.D.length; c++) Ij(a.D[c], b)
}
g.mh = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = this.oa(),
            c = Dh(this.A, a),
            d;
        if (d = 1 == K) {
            d = b.x - c.x;
            var e = b.y - c.y;
            d = Math.sqrt(d * d + e * e) * this.A.scale > Hh
        }
        d && (K = 2, Rj(), this.H && (je(this), d = this.m, d.h = "translate(" + c.x + "," + c.y + ")", Ii(this.A, "disconnect"), 1 > this.A.scale || (d = Math.atan(10 / Gi(this).height) / Math.PI * 180, this.s || (d *= -1), Sj(this.m, d, new Date))), Ij(this, !0));
        if (2 == K) {
            b = ec(b, this.td);
            d = this.m;
            d.h = "translate(" + c.x + "," + c.y + ")";
            d.setAttribute("transform",
                d.h + d.g);
            for (c = 0; c < this.ra.length; c++) e = this.ra[c], d = e.Xh, e = new w(e.x + b.x, e.y + b.y), d.ad = e, d.na && (d = d.na, d.rc = e, d.Id && ph(d));
            d = this.Ib(!1);
            a: {
                for (c = this.g; c;) {
                    e = G(c);
                    if (!e) break a;
                    c = e.g
                }
                c = null
            }
            c && c != this.g && d.push(c);
            for (var f = e = null, h = oe, c = 0; c < d.length; c++) {
                var l = d[c],
                    m;
                m = Zh(l.rd, l, h, b);
                m.I && (e = m.I, f = l, h = m.bh)
            }
            ae && ae != e && (ze(), be = ae = null);
            e && e != ae && (e.ve(), ae = e, be = f);
            Zg(this) && xi(this.A, a)
        }
        a.stopPropagation();
        a.preventDefault()
    }
};

function Dj(a) {
    ee(a) ? Hg(a.m, "blocklyDraggable") : Ni(a.m, "blocklyDraggable")
}
g.Qf = function(a) {
    T.v.Qf.call(this, a);
    Dj(this)
};
g.Pf = function(a) {
    T.v.Pf.call(this, a);
    if (this.O) {
        a = tj(this);
        for (var b = 0; b < a.length; b++) a[b].Kc()
    }
};
g.Tf = function(a) {
    T.v.Tf.call(this, a);
    this.kc()
};
g.B = function(a, b) {
    hj();
    dh();
    var c = this.A;
    L == this && (pe(this), wi());
    Gg.be == this && Gg.Tb();
    if (b && this.O) {
        je(this, a);
        Ii(this.A, "delete");
        var d = Uh(this.m, this.A),
            e = this.m.cloneNode(!0);
        e.w = d.x;
        e.D = d.y;
        e.setAttribute("transform", "translate(" + e.w + "," + e.D + ")");
        Th(this.A).appendChild(e);
        e.i = e.getBBox();
        Tj(e, this.s, new Date, this.A.scale)
    }
    this.O = !1;
    I++;
    d = tj(this);
    for (e = 0; e < d.length; e++) d[e].B();
    I--;
    T.v.B.call(this, a);
    A(this.m);
    ih(c);
    this.aa = this.T = this.G = this.m = null;
    eh()
};

function Tj(a, b, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? A(a) : (a.setAttribute("transform", "translate(" + (a.w + (b ? -1 : 1) * a.i.width * d / 2 * e) + "," + (a.D + a.i.height * d * e) + ") scale(" + (1 - e) * d + ")"), setTimeout(function() {
        Tj(a, b, c, d)
    }, 10))
}

function Oj(a, b, c) {
    var d = (new Date - b) / 150;
    1 < d ? A(a) : (a.setAttribute("r", 25 * d * c), a.style.opacity = 1 - d, setTimeout(function() {
        Oj(a, b, c)
    }, 10))
}

function Sj(a, b, c) {
    var d = (new Date - c) / 200;
    1 < d ? a.g = "" : (a.g = "skewX(" + Math.round(Math.sin(d * Math.PI * 3) * (1 - d) * b) + ")", Uj = a, Vj = setTimeout(function() {
        Sj(a, b, c)
    }, 10));
    a.setAttribute("transform", a.h + a.g)
}

function Hj() {
    if (Uj) {
        clearTimeout(Vj);
        var a = Uj;
        a.g = "";
        a.setAttribute("transform", a.h);
        Uj = null
    }
}
var Vj = 0,
    Uj = null;
g = T.prototype;
g.kc = function() {
    if (!this.disabled) {
        var a = this.Hb,
            b = Wj(a);
        if (this.i) b = Xj([255, 255, 255], b, .6), a = yj(b), this.T.style.display = "none", this.aa.setAttribute("fill", a);
        else {
            this.T.style.display = "";
            var c = yj(Xj([255, 255, 255], b, .3)),
                b = yj(Xj([0, 0, 0], b, .2));
            this.T.setAttribute("stroke", c);
            this.aa.setAttribute("fill", b)
        }
        this.G.setAttribute("fill", a);
        a = tj(this);
        for (c = 0; c < a.length; c++) a[c].kc();
        for (a = 0; c = this.h[a]; a++)
            for (var b = 0, d; d = c.za[b]; b++) d.wb(null)
    }
};

function Ae(a) {
    var b;
    b = -1 != (" " + a.m.getAttribute("class") + " ").indexOf(" blocklyDisabled ");
    a.disabled || Cj(a) ? b || (Hg(a.m, "blocklyDisabled"), a.G.setAttribute("fill", "url(#" + a.A.options.sd + ")")) : b && (Ni(a.m, "blocklyDisabled"), a.kc());
    a = a.Zb();
    b = 0;
    for (var c; c = a[b]; b++) Ae(c)
}
g.ke = function() {
    var a;
    this.ua ? (a = this.ua, a = (a.h ? a.h.value : a.ha).replace(/\s+$/, "").replace(/ +\n/g, "\n")) : a = "";
    return a
};
g.Jd = function(a) {
    var b = !1;
    r(a) ? (this.ua || (this.ua = new Qi(this), b = !0), Vi(this.ua, a)) : this.ua && (this.ua.B(), b = !0);
    b && this.O && (this.V(), ke(this))
};
g.Za = function(a, b) {
    this.Za.g || (this.Za.g = Object.create(null));
    var c = b || "";
    if (c) this.Za.g[c] && (clearTimeout(this.Za.g[c]), delete this.Za.g[c]);
    else
        for (var d in this.Za.g) clearTimeout(this.Za.g[d]), delete this.Za.g[d];
    if (2 == K) {
        var e = this;
        this.Za.g[c] = setTimeout(function() {
            e.A && (delete e.Za.g[c], e.Za(a, c))
        }, 100)
    } else {
        this.o && (a = null);
        d = xj(this);
        for (var f = null; d;) d.j && (f = d), d = xj(d);
        f && f.Za(a, "collapsed " + this.id + " " + c);
        d = !1;
        r(a) ? (this.gb || (this.gb = new Ui(this), d = !0), vj(this.gb, a, c)) : this.gb && !c ? (this.gb.B(),
            d = !0) : this.gb && (d = uj(this.gb), vj(this.gb, "", c), (f = uj(this.gb)) || this.gb.B(), d = d == f);
        d && this.O && (this.V(), ke(this))
    }
};
g.hd = function(a) {
    this.disabled != a && (T.v.hd.call(this, a), this.O && Ae(this))
};
g.Ue = function() {
    Hg(this.m, "blocklySelected");
    this.m.parentNode.appendChild(this.m)
};
g.Fe = function() {
    Ni(this.m, "blocklySelected")
};
g.lc = function(a) {
    T.v.lc.call(this, a);
    this.O && this.kc()
};
g.Fc = function(a, b) {
    T.v.Fc.call(this, a, b);
    this.O && (this.V(), ke(this))
};
g.kd = function(a, b) {
    T.v.kd.call(this, a, b);
    this.O && (this.V(), ke(this))
};
g.Rf = function(a, b) {
    T.v.Rf.call(this, a, b);
    this.O && (this.V(), ke(this))
};
g.jd = function(a) {
    T.v.jd.call(this, a);
    this.O && (this.V(), ke(this))
};
g.Kf = function(a, b) {
    T.v.Kf.call(this, a, b);
    this.O && (this.V(), ke(this))
};
g.Va = function(a, b) {
    var c = T.v.Va.call(this, a, b);
    this.O && (this.V(), ke(this));
    return c
};
g.Ib = function(a) {
    var b = [];
    if (a || this.O)
        if (this.K && b.push(this.K), this.N && b.push(this.N), this.g && b.push(this.g), a || !this.j) {
            a = 0;
            for (var c; c = this.h[a]; a++) c.I && b.push(c.I)
        }
    return b
};
g.Ed = function(a) {
    return new le(this, a)
};
var Yj = 7.5 * (1 - Math.SQRT1_2) + .5,
    Zj = 8.5 * (1 - Math.SQRT1_2) - .5,
    ak = "m " + Yj + "," + Yj,
    bk = "a 8,8 0 0,0 " + (-Zj - .5) + "," + (8 - Zj),
    ck = "a 8.5,8.5 0 0,0 " + (8 - Zj) + "," + (Zj + .5);
T.prototype.V = function(a) {
    dh();
    this.O = !0;
    var b = 10;
    this.s && (b = -b);
    for (var c = tj(this), d = 0; d < c.length; d++) {
        var e = c[d];
        e.lg && e.xa.j ? e.g.setAttribute("display", "none") : (e.g.setAttribute("display", "block"), e.xa.s && (b -= 17), e.g.setAttribute("transform", "translate(" + b + ",5)"), Oi(e), b = e.xa.s ? b - 10 : b + 27)
    }
    var f = b += this.s ? 10 : -10,
        h = this.h,
        c = [];
    c.g = f + 20;
    if (this.N || this.g) c.g = Math.max(c.g, 40);
    for (var e = d = 0, l = !1, m = !1, n = !1, p = void 0, q = Bj(this) && !this.j, B = 0, y; y = h[B]; B++)
        if (y.Pe) {
            var x;
            q && p && 3 != p && 3 != y.type ? x = c[c.length -
                1] : (p = y.type, x = [], x.type = q && 3 != y.type ? -1 : y.type, x.height = 0, c.push(x));
            x.push(y);
            y.ic = 25;
            y.Ja = q && 1 == y.type ? 20.5 : 0;
            if (y.I && y.I.M) {
                var $d = Gi(G(y.I));
                y.ic = Math.max(y.ic, $d.height);
                y.Ja = Math.max(y.Ja, $d.width)
            }
            q || B != h.length - 1 ? !q && 1 == y.type && h[B + 1] && 3 == h[B + 1].type && y.ic-- : y.ic--;
            x.height = Math.max(x.height, y.ic);
            y.xb = 0;
            1 == c.length && (y.xb += this.s ? -f : f);
            for (var $d = !1, gh = 0, Vb; Vb = y.za[gh]; gh++) {
                0 != gh && (y.xb += 10);
                var wc;
                wc = Vb;
                wc.o.width || wc.Oe();
                wc = wc.o;
                Vb.Ja = wc.width;
                Vb.H = $d && Vb.Mc ? 10 : 0;
                y.xb += Vb.Ja + Vb.H;
                x.height =
                    Math.max(x.height, wc.height);
                $d = Vb.Mc
            } - 1 != x.type && (3 == x.type ? (m = !0, e = Math.max(e, y.xb)) : (1 == x.type ? l = !0 : 5 == x.type && (n = !0), d = Math.max(d, y.xb)))
        }
    for (f = 0; x = c[f]; f++)
        if (x.jh = !1, -1 == x.type)
            for (h = 0; y = x[h]; h++)
                if (1 == y.type) {
                    x.height += 10;
                    x.jh = !0;
                    break
                }
    c.h = 20 + e;
    m && (c.g = Math.max(c.g, c.h + 30));
    l ? c.g = Math.max(c.g, d + 28) : n && (c.g = Math.max(c.g, d + 20));
    c.i = l;
    c.o = m;
    c.j = n;
    e = b;
    this.Vb = !1;
    this.height = 0;
    this.K ? this.Ub = this.Ha = !0 : (this.Ub = this.Ha = !1, this.N && (b = G(this.N)) && Qd(b) == this && (this.Ha = !0), Qd(this) && (this.Ub = !0));
    l = [];
    m = [];
    b = [];
    d = [];
    n = c.g;
    this.Ha ? (l.push("m 0,0"), b.push("m 0.5,0.5"), this.Vb && (l.push("c 30,-15 70,-15 100,0"), b.push(this.s ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (l.push("m 0,8"), b.push(this.s ? ak : "m 0.5,7.5"), l.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.N && (l.push("H", 15), b.push("H", 15), l.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"), te(this.N, this.s ? -30 : 30, 0));
    l.push("H", n);
    b.push("H", n - .5);
    this.width = n;
    var n = 0,
        P;
    for (y = 0; x =
        c[y]; y++) {
        p = 10;
        0 == y && (p += this.s ? -e : e);
        b.push("M", c.g - .5 + "," + (n + .5));
        if (this.j) f = x[0], q = n, dk(this, f.za, p, q), l.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), f = x.height - 20, l.push("v", f), this.s && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", f - .7)), this.width += 15;
        else if (-1 == x.type) {
            for (h = 0; f = x[h]; h++) q = n, x.jh && (q += 5), p = dk(this, f.za, p, q), 5 != f.type && (p += f.Ja + 10), 1 == f.type && (m.push("M", p - 10 + "," + (n + 5)), m.push("h", 6 - f.Ja), m.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), m.push("v", f.ic + 1 - 20),
                m.push("h", f.Ja + 2 - 8), m.push("z"), this.s ? (d.push("M", p - 10 - 2.5 + 8 - f.Ja + "," + (n + 5 + .5)), d.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), d.push("v", f.ic - 20 + 2.5), d.push("h", f.Ja - 8 + 2)) : (d.push("M", p - 10 + .5 + "," + (n + 5 + .5)), d.push("v", f.ic + 1), d.push("h", 6 - f.Ja), d.push("M", p - f.Ja - 10 + .9 + "," + (n + 5 + 20 - .7)), d.push("l", "3.68,-2.1")), this.s ? P = -p - 8 + 10 + f.Ja + 1 : P = p + 8 - 10 - f.Ja - 1, q = n + 5 + 1, te(f.I, P, q));
            p = Math.max(p, c.g);
            this.width = Math.max(this.width, p);
            l.push("H", p);
            b.push("H", p - .5);
            l.push("v", x.height);
            this.s &&
                b.push("v", x.height - 1)
        } else 1 == x.type ? (f = x[0], q = n, -1 != f.align && (h = c.g - f.xb - 8 - 20, 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), dk(this, f.za, p, q), l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), P = x.height - 20, l.push("v", P), this.s ? (b.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), b.push("v", P + .5)) : (b.push("M", c.g - 5 + "," + (n + 20 - .7)), b.push("l", "3.68,-2.1")), P = this.s ? -c.g - 1 : c.g + 1, te(f.I, P, n), f.I.M && (this.width = Math.max(this.width, c.g + Gi(G(f.I)).width - 8 + 1))) : 5 == x.type ? (f = x[0], q = n, -1 != f.align && (h = c.g -
            f.xb - 20, c.i && (h -= 8), 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), dk(this, f.za, p, q), l.push("v", x.height), this.s && b.push("v", x.height - 1)) : 3 == x.type && (f = x[0], 0 == y && (l.push("v", 10), this.s && b.push("v", 9), n += 10), q = n, -1 != f.align && (h = c.h - f.xb - 20, 1 == f.align ? p += h : 0 == f.align && (p += h / 2)), dk(this, f.za, p, q), p = c.h + 30, l.push("H", p), l.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), l.push("v", x.height - 16), l.push("a 8,8 0 0,0 8,8"), l.push("H", c.g), this.s ? (b.push("M", p - 30 + Zj + "," + (n + Zj)), b.push(bk), b.push("v", x.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) :
            (b.push("M", p - 30 + Zj + "," + (n + x.height - Zj)), b.push(ck)), b.push("H", c.g - .5), P = this.s ? -p : p + 1, te(f.I, P, n + 1), f.I.M && (this.width = Math.max(this.width, c.h + Gi(G(f.I)).width)), y == c.length - 1 || 3 == c[y + 1].type) && (l.push("v", 10), this.s && b.push("v", 9), n += 10);
        n += x.height
    }
    c.length || (n = 25, l.push("V", n), this.s && b.push("V", n - 1));
    P = n;
    this.height += P + 1;
    this.g && (l.push("H", 30 + (this.s ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), te(this.g, this.s ? -30 : 30, P + 1), this.height += 4);
    this.Ub ? (l.push("H 0"), this.s || b.push("M", "0.5," + (P - .5))) : (l.push("H",
        8), l.push("a", "8,8 0 0,1 -8,-8"), this.s || (b.push("M", Yj + "," + (P - Yj)), b.push("A", "7.5,7.5 0 0,1 0.5," + (P - 8))));
    this.K ? (te(this.K, 0, 0), l.push("V", 20), l.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"), this.s ? (b.push("M", "-2,8.4"), b.push("l", "-3.6,-2.1")) : (b.push("V", 18.5), b.push("m", "-7.36,-0.5 q -1.52,-5.5 0,-11"), b.push("m", "7.36,1 V 0.5 H 1")), this.width += 8) : this.s || (this.Ha ? b.push("V", .5) : b.push("V", 8));
    l.push("z");
    P = l.join(" ") + "\n" + m.join(" ");
    this.G.setAttribute("d", P);
    this.aa.setAttribute("d", P);
    P = b.join(" ") + "\n" + d.join(" ");
    this.T.setAttribute("d", P);
    this.s && (this.G.setAttribute("transform", "scale(-1 1)"), this.T.setAttribute("transform", "scale(-1 1)"), this.aa.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    P = this.oa();
    this.N && se(this.N, P);
    this.K && se(this.K, P);
    for (c = 0; c < this.h.length; c++)
        if (b = this.h[c].I) se(b, P), b.M && ue(b);
    this.g && (se(this.g, P), this.g.M && ue(this.g));
    !1 !== a && ((a = this.getParent()) ? a.V(!0) : ih(this.A));
    eh()
};

function dk(a, b, c, d) {
    d += 5;
    a.s && (c = -c);
    for (var e = 0, f; f = b[e]; e++) {
        var h = f.Ne();
        h && (a.s ? (c -= f.H + f.Ja, h.setAttribute("transform", "translate(" + c + "," + d + ")"), f.Ja && (c -= 10)) : (h.setAttribute("transform", "translate(" + (c + f.H) + "," + d + ")"), f.Ja && (c += f.H + f.Ja + 10)))
    }
    return a.s ? -c : c
};
var V = {};

function Mj(a, b) {
    Mj.v.constructor.call(this, a, b)
}
var ek;
t(Mj, lj);
g = Mj.prototype;
g.Qd = "text";
g.gh = !0;
g.B = function() {
    Kg(this);
    Mj.v.B.call(this)
};
g.qa = function(a) {
    if (null !== a) {
        if (this.F && this.Ka) {
            var b = this.Ka(a);
            null !== b && void 0 !== b && (a = b)
        }
        lj.prototype.qa.call(this, a)
    }
};
g.Hc = function(a) {
    this.u = this.F.A;
    a = a || !1;
    if (!a && (Jb || Lb || Nb)) {
        a = window.prompt(V.vh, this.ha);
        if (this.F && this.Ka) {
            var b = this.Ka(a);
            void 0 !== b && (a = b)
        }
        this.qa(a)
    } else {
        Fg(this, this.F.s, fk(this));
        var b = O,
            c = z("input", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.gh);
        var d = 11 * this.u.scale + "pt";
        b.style.fontSize = d;
        c.style.fontSize = d;
        ek = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.ha;
        c.j = null;
        gk(this);
        this.Ge();
        a || (c.focus(), c.select());
        c.H = Q(c, "keydown", this, this.Ki);
        c.J = Q(c, "keyup", this, this.$g);
        c.G = Q(c, "keypress", this, this.$g);
        c.o = this.Ge.bind(this);
        this.u.Eb(c.o)
    }
};
g.Ki = function(a) {
    var b = ek;
    13 == a.keyCode ? hk() : 27 == a.keyCode ? (b.value = b.defaultValue, hk()) : 9 == a.keyCode && (hk(), this.F.tab(this, !a.shiftKey), a.preventDefault())
};
g.$g = function() {
    var a = ek,
        b = a.value;
    b !== a.j ? (a.j = b, this.qa(b), gk(this)) : v && this.F.V();
    this.Ge();
    ik(this.F.A)
};

function gk(a) {
    var b = !0,
        c = ek;
    a.F && a.Ka && (b = a.Ka(c.value));
    null === b ? Hg(c, "blocklyInvalidInput") : Ni(c, "blocklyInvalidInput")
}
g.Ge = function() {
    var a = O,
        b = this.g.getBBox();
    a.style.width = b.width * this.u.scale + "px";
    a.style.height = b.height * this.u.scale + "px";
    b = Ie(this.j);
    if (this.F.s) {
        var c = pj(this);
        b.x += c.width;
        b.x -= a.offsetWidth
    }
    b.y += 1;
    Ib && O.style.top && (--b.x, --b.y);
    v && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px"
};

function fk(a) {
    return function() {
        var b = ek,
            c = b.value;
        if (a.F && a.Ka) {
            var d = a.Ka(c);
            null === d ? c = b.defaultValue : void 0 !== d && (c = d)
        }
        a.qa(c);
        a.F.O && a.F.V();
        R(b.H);
        R(b.J);
        R(b.G);
        a.u.fd(b.o);
        ek = null;
        b = O.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = ""
    }
};

function jk(a, b) {
    this.D = a;
    kk(this);
    var c = lk(this)[0];
    jk.v.constructor.call(this, c[1], b)
}
t(jk, lj);
var mk = Lb ? "\u25bc" : "\u25be";
g = jk.prototype;
g.Qd = "default";
g.P = function() {
    if (!this.g) {
        this.w = M("tspan", {}, null);
        this.w.appendChild(document.createTextNode(this.F.s ? mk + " " : " " + mk));
        jk.v.P.call(this);
        var a = this.ha;
        this.ha = null;
        this.wb(a)
    }
};
g.Hc = function() {
    Fg(this, this.F.s, null);
    var a = this,
        b = new Dg;
    b.Wc(this.F.s);
    for (var c = lk(this), d = 0; d < c.length; d++) {
        var e = c[d][1],
            f = new hg(c[d][0]);
        f.Wc(this.F.s);
        f.Pa = e;
        f.fb(16, !0);
        b.pd(f, !0);
        Wf(f, e == this.i)
    }
    td(b, "action", function(b) {
        if (b = b.target) {
            b = b.Oa();
            if (a.F && a.Ka) {
                var c = a.Ka(b);
                void 0 !== c && (b = c)
            }
            null !== b && a.qa(b)
        }
        Kg(a)
    });
    Ye(b).U(b.C(), "touchstart", function(a) {
        ug(this, a.target).Sb(a)
    });
    Ye(b).U(b.C(), "touchend", function(a) {
        ug(this, a.target).hc(a)
    });
    c = lc();
    d = Ge();
    e = Ie(this.j);
    f = pj(this);
    b.V(O);
    var h = b.C();
    Hg(h, "blocklyDropdownMenu");
    var l = Je(h);
    l.height = h.scrollHeight;
    e.y = e.y + l.height + f.height >= c.height + d.y ? e.y - (l.height + 2) : e.y + f.height;
    this.F.s ? (e.x += f.width, e.x += 25, e.x < d.x + l.width && (e.x = d.x + l.width)) : (e.x -= 25, e.x > c.width + d.x - l.width && (e.x = c.width + d.x - l.width));
    Jg(e.x, e.y, c, d, this.F.s);
    Eg(b);
    h.focus()
};

function kk(a) {
    a.J = null;
    a.L = null;
    var b = a.D;
    if (da(b) && !(2 > b.length)) {
        var c = b.map(function(a) {
                return a[0]
            }),
            d = nk(c),
            e = ok(c, d),
            f = pk(c, d);
        if ((e || f) && !(d <= e + f)) {
            e && (a.J = c[0].substring(0, e - 1));
            f && (a.L = c[0].substr(1 - f));
            c = [];
            for (d = 0; d < b.length; d++) {
                var h = b[d][0],
                    l = b[d][1],
                    h = h.substring(e, h.length - f);
                c[d] = [h, l]
            }
            a.D = c
        }
    }
}

function lk(a) {
    return ga(a.D) ? a.D.call(a) : a.D
}
g.Oa = function() {
    return this.i
};
g.qa = function(a) {
    if (null !== a && a !== this.i) {
        this.F && 0 == I && J(new Si(this.F, "field", this.name, this.i, a));
        this.i = a;
        for (var b = lk(this), c = 0; c < b.length; c++)
            if (b[c][1] == a) {
                this.wb(b[c][0]);
                return
            }
        this.wb(a)
    }
};
g.wb = function(a) {
    this.F && this.w && (this.w.style.fill = this.F.Hb);
    null !== a && a !== this.ha && (this.ha = a, oj(this), this.h && (this.F.s ? this.h.insertBefore(this.w, this.h.firstChild) : this.h.appendChild(this.w)), this.F && this.F.O && (this.F.V(), ke(this.F)))
};
g.B = function() {
    Kg(this);
    jk.v.B.call(this)
};

function qk(a) {
    var b;
    if (a.Wa) b = a.Wa();
    else if (a.Qb) b = a.Qb();
    else throw "Not Block or Workspace: " + a;
    a = Object.create(null);
    for (var c = 0; c < b.length; c++) {
        var d;
        d = b[c];
        for (var e = [], f = 0, h; h = d.h[f]; f++)
            for (var l = 0, m; m = h.za[l]; l++) m instanceof rk && e.push(m.Oa());
        d = e;
        for (e = 0; e < d.length; e++)(f = d[e]) && (a[f.toLowerCase()] = f)
    }
    b = [];
    for (var n in a) b.push(a[n]);
    return b
}

function sk(a, b, c) {
    H(!0);
    c = c.Qb();
    for (var d = 0; d < c.length; d++)
        for (var e = c[d], f = a, h = b, l = 0, m; m = e.h[l]; l++)
            for (var n = 0, p; p = m.za[n]; n++) {
                var q;
                if (q = p instanceof rk) q = p.Oa(), q = f.toLowerCase() == q.toLowerCase();
                q && p.qa(h)
            }
    H(!1)
}

function tk(a) {
    a = qk(a);
    a.sort(ta);
    Wa(a, V.Pc);
    a.unshift(V.Pc);
    for (var b = [], c = 0; c < a.length; c++) {
        if (Pi.variables_set) {
            var d = z("block");
            d.setAttribute("type", "variables_set");
            Pi.variables_get && d.setAttribute("gap", 8);
            var e = z("field", null, a[c]);
            e.setAttribute("name", "VAR");
            d.appendChild(e);
            b.push(d)
        }
        Pi.variables_get && (d = z("block"), d.setAttribute("type", "variables_get"), Pi.variables_set && d.setAttribute("gap", 24), e = z("field", null, a[c]), e.setAttribute("name", "VAR"), d.appendChild(e), b.push(d))
    }
    return b
}

function uk(a) {
    a = qk(a);
    var b = "";
    if (a.length)
        for (var c = 1, d = 0, e = "ijkmnopqrstuvwxyzabcdefgh".charAt(d); !b;) {
            for (var f = !1, h = 0; h < a.length; h++)
                if (a[h].toLowerCase() == e) {
                    f = !0;
                    break
                }
            f ? (d++, 25 == d && (d = 0, c++), e = "ijkmnopqrstuvwxyzabcdefgh".charAt(d), 1 < c && (e += c)) : b = e
        } else b = "i";
    return b
};

function rk(a, b) {
    rk.v.constructor.call(this, vk, b);
    this.qa(a || "")
}
t(rk, jk);
rk.prototype.Gc = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = wk.call(this, d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = wk;
    rk.v.Gc.call(this, b)
};
rk.prototype.P = function() {
    this.g || (rk.v.P.call(this), this.Oa() || this.qa(uk(this.F.o ? this.F.A.L : this.F.A)))
};
rk.prototype.Oa = function() {
    return this.mc()
};
rk.prototype.qa = function(a) {
    this.F && 0 == I && J(new Si(this.F, "field", this.name, this.i, a));
    this.i = a;
    this.wb(a)
};

function vk() {
    var a = this.F && this.F.A ? qk(this.F.A) : [],
        b = this.mc();
    b && -1 == a.indexOf(b) && a.push(b);
    a.sort(ta);
    a.push(V.Te);
    a.push(V.Se);
    for (var b = [], c = 0; c < a.length; c++) b[c] = [a[c], a[c]];
    return b
}

function wk(a) {
    function b(a, b) {
        Ch();
        var c = window.prompt(a, b);
        c && (c = c.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), c == V.Te || c == V.Se) && (c = null);
        return c
    }
    var c = this.F.A;
    if (a == V.Te) {
        var d = this.mc();
        (a = b(V.Uh.replace("%1", d), d)) && sk(d, a, c);
        return null
    }
    if (a == V.Se) return (a = b(V.Nh, "")) ? (sk(a, a, c), a) : null
};
var Jj = "handopen",
    Ah = "handclosed",
    yi = "handdelete",
    xk = "",
    yk = null,
    zk = "";

function zh(a) {
    if (xk != a) {
        xk = a;
        var b = "url(" + zk + "/" + a + ".cur), auto",
            c = ".blocklyDraggable {\n  cursor: " + b + ";\n}\n";
        yk.deleteRule(0);
        yk.insertRule(c, 0);
        for (var c = document.getElementsByClassName("blocklyToolboxDiv"), d = 0, e; e = c[d]; d++) e.style.cursor = a == yi ? b : "";
        document.body.parentNode.style.cursor = a == Jj ? "" : b
    }
}
var Ak = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 999;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: 0.9;", "padding: 2px;", "position: absolute;", "z-index: 1000;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;",
    "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #888;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {",
    "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {",
    "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklySvg text {", "user-select: none;", "-moz-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;",
    "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;", "}", ".blocklyCommentTextarea {", "background-color: #ffc;", "border: 0;", "margin: 0;", "padding: 2px;", "resize: none;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;",
    "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;",
    "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;",
    "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;", "stroke-width: 2;", "stroke-linecap: round;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;",
    "overflow-x: visible;", "overflow-y: auto;", "position: absolute;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {", "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;",
    "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;",
    "}", ".blocklyTreeIconClosedRtl {", "background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;",
    "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "border: 1px solid #666;", "border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;",
    "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;",
    "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;",
    "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {",
    "opacity: 0.3;", "-moz-opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;",
    "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;",
    "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;", "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""
];

function Bk(a, b) {
    r(a) && (a = document.getElementById(a) || document.querySelector(a));
    if (!sc(document, a)) throw "Error: container is not in current document.";
    var c = new gi(b || {}),
        d = a;
    d.setAttribute("dir", "LTR");
    Ve = c.s;
    if (!yk) {
        var e = ".blocklyDraggable {}\n";
        c.ra && (e += Ak.join("\n"), Id.Re && (e += Id.Re.CSS.join("\n")));
        zk = c.j.replace(/[\\\/]$/, "");
        var e = e.replace(/<<<PATH>>>/g, zk),
            f = document.createElement("style");
        document.head.appendChild(f);
        f.appendChild(document.createTextNode(e));
        yk = f.sheet;
        zh(Jj)
    }
    var d = M("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:html": "http://www.w3.org/1999/xhtml",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            version: "1.1",
            "class": "blocklySvg"
        }, d),
        e = M("defs", {}, d),
        f = String(Math.random()).substring(2),
        h = M("filter", {
            id: "blocklyEmbossFilter" + f
        }, e);
    M("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, h);
    var l = M("feSpecularLighting", {
        "in": "blur",
        surfaceScale: 1,
        specularConstant: .5,
        specularExponent: 10,
        "lighting-color": "white",
        result: "specOut"
    }, h);
    M("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, l);
    M("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, h);
    M("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, h);
    c.T = h.id;
    h = M("pattern", {
        id: "blocklyDisabledPattern" + f,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, e);
    M("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, h);
    M("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, h);
    c.sd = h.id;
    e = M("pattern", {
        id: "blocklyGridPattern" + f,
        patternUnits: "userSpaceOnUse"
    }, e);
    0 < c.h.length &&
        0 < c.h.spacing && (M("line", {
            stroke: c.h.colour
        }, e), 1 < c.h.length && M("line", {
            stroke: c.h.colour
        }, e));
    c.o = e;
    c = Ck(d, c);
    Dk(c);
    c.cd();
    Q(d, "focus", c, c.cd);
    ik(c);
    return c
}

function Ck(a, b) {
    b.Kb = null;
    b.Ea = Ek;
    b.Ec = Fk;
    var c = new hi(b);
    c.scale = b.g.Wi;
    a.appendChild(ii(c, "blocklyMainBackground"));
    c.translate(0, 0);
    c.cd();
    b.i || b.H || c.Eb(function() {
        if (0 == K) {
            var a = c.Ea(),
                e = a.Ca + a.Ia,
                f = a.Mb + a.La;
            if (a.ib < f || a.ib + a.Sa > a.wa + f || a.hb < (b.s ? a.Ca : e) || a.hb + a.Ta > (b.s ? a.Y : a.Y + e))
                for (var h = Qg(c, !1), l = 0, m; m = h[l]; l++) {
                    var n = m.oa(),
                        p = Gi(m),
                        q = f + 25 - p.height - n.y;
                    0 < q && m.moveBy(0, q);
                    q = f + a.wa - 25 - n.y;
                    0 > q && m.moveBy(0, q);
                    q = 25 + e - n.x - (b.s ? 0 : p.width);
                    0 < q && m.moveBy(q, 0);
                    n = e + a.Y - 25 - n.x + (b.s ? p.width : 0);
                    0 > n &&
                        m.moveBy(n, 0)
                }
        }
    });
    ik(c);
    O || (O = z("div", "blocklyWidgetDiv"), document.body.appendChild(O));
    cj || (cj = z("div", "blocklyTooltipDiv"), document.body.appendChild(cj));
    return c
}

function Dk(a) {
    var b = a.options,
        c = Th(a);
    Q(c, "contextmenu", null, function(a) {
        yh(a) || a.preventDefault()
    });
    c = Q(window, "resize", null, function() {
        Ch(!0);
        ik(a)
    });
    a.He = c;
    Gk();
    b.w && (a.S ? a.S.P(a) : a.W && (a.W.P(a), a.W.show(b.w.childNodes), Hk(a.W), a.scrollX = a.W.X, 3 == b.ba && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.H && (a.Aa = new Ih(a), a.Aa.resize());
    b.Ha && Ik(b.j, a)
}

function Gk() {
    Kd || (Q(document, "keydown", null, Jk), Q(document, "touchend", null, Rj), Q(document, "touchcancel", null, Rj), document.addEventListener("mouseup", Ci, !1), Nb && Q(window, "orientationchange", document, function() {
        ik(Ki)
    }));
    Kd = !0
}

function Ik(a, b) {
    function c() {
        for (; d.length;) R(d.pop());
        for (var a in b.G) {
            var c = b.G[a];
            c.volume = .01;
            c.play();
            c.pause();
            if (Nb || Mb) break
        }
    }
    Hi(b, [a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    Hi(b, [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    Hi(b, [a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var d = [];
    d.push(Q(document, "mousemove", null, c));
    d.push(Q(document, "touchstart", null, c))
};

function Kk() {}
Kk.prototype.zh = 60;
Kk.prototype.aa = [];

function Lk() {
    var a = W,
        b = U;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = Ki);
    var c = [];
    a.P(b);
    for (var b = Qg(b, !0), d = 0, e; e = b[d]; d++) {
        var f = Mk(a, e);
        da(f) && (f = f[0]);
        f && (e.K && a.L && (f = a.L(f)), c.push(f))
    }
    c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n");
    return c = c.replace(/[ \t]+\n/g, "\n")
}

function Nk(a, b) {
    return b + a.replace(/\n(.)/g, "\n" + b + "$1")
}

function Mk(a, b) {
    if (!b) return "";
    if (b.disabled) return Mk(a, Qd(b));
    var c = a[b.type].call(b, b);
    if (da(c)) return [a.T(b, c[0]), c[1]];
    if (r(c)) return a.T(b, c);
    if (null === c) return ""
}

function Ok(a, b) {
    var c = lh(a, b);
    (c = Mk(W, c && c.I && G(c.I))) && (c = Nk(c, "  "));
    return c
}
Kk.prototype.o = "";

function Pk(a) {
    var b = W;
    b.o += a + ","
};
var Hh = 5,
    oe = 20,
    Vd = 250,
    Lj = 30,
    Ji = 100,
    bi = 96,
    ci = 124,
    di = "sprites.png",
    Md = [, 2, 1, 4, 3];

function Qk(a, b) {
    this.i = b || "";
    this.h = Object.create(null);
    if (a)
        for (var c = a.split(","), d = 0; d < c.length; d++) this.h[c[d]] = !0;
    this.reset()
}
Qk.prototype.reset = function() {
    this.jb = Object.create(null);
    this.g = Object.create(null)
};
Qk.prototype.getName = function(a, b) {
    var c = a.toLowerCase() + "_" + b,
        d = "VARIABLE" == b ? this.i : "";
    if (c in this.jb) return d + this.jb[c];
    var e;
    (e = a) ? (e = encodeURI(e.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(e[0]) && (e = "my_" + e)) : e = "unnamed";
    for (var f = ""; this.g[e + f] || e + f in this.h;) f = f ? f + 1 : 2;
    e += f;
    this.g[e] = !0;
    e = ("VARIABLE" == b ? this.i : "") + e;
    this.jb[c] = e.substr(d.length);
    return e
};

function Rk(a) {
    a = a.Qb();
    for (var b = [], c = [], d = 0; d < a.length; d++)
        if (a[d].qc) {
            var e = a[d].qc();
            e && (e[2] ? b.push(e) : c.push(e))
        }
    c.sort(Sk);
    b.sort(Sk);
    return [c, b]
}

function Sk(a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
}

function Tk(a) {
    function b(a, b) {
        for (var d = 0; d < a.length; d++) {
            var l = a[d][0],
                m = a[d][1],
                n = z("block");
            n.setAttribute("type", b);
            n.setAttribute("gap", 16);
            var p = z("mutation");
            p.setAttribute("name", l);
            n.appendChild(p);
            for (l = 0; l < m.length; l++) {
                var q = z("arg");
                q.setAttribute("name", m[l]);
                p.appendChild(q)
            }
            c.push(n)
        }
    }
    var c = [];
    if (Pi.procedures_defnoreturn) {
        var d = z("block");
        d.setAttribute("type", "procedures_defnoreturn");
        d.setAttribute("gap", 16);
        c.push(d)
    }
    Pi.procedures_defreturn && (d = z("block"), d.setAttribute("type",
        "procedures_defreturn"), d.setAttribute("gap", 16), c.push(d));
    Pi.procedures_ifreturn && (d = z("block"), d.setAttribute("type", "procedures_ifreturn"), d.setAttribute("gap", 16), c.push(d));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = Rk(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};

function Hg(a, b) {
    var c = a.getAttribute("class") || ""; - 1 == (" " + c + " ").indexOf(" " + b + " ") && (c && (c += " "), a.setAttribute("class", c + b))
}

function Ni(a, b) {
    var c = a.getAttribute("class");
    if (-1 != (" " + c + " ").indexOf(" " + b + " ")) {
        for (var c = c.split(/\s+/), d = 0; d < c.length; d++) c[d] && c[d] != b || (c.splice(d, 1), d--);
        c.length ? a.setAttribute("class", c.join(" ")) : a.removeAttribute("class")
    }
}

function Q(a, b, c, d) {
    var e = c ? function(a) {
        d.call(c, a)
    } : d;
    a.addEventListener(b, e, !1);
    var f = [
        [a, b, e]
    ];
    if (b in Ai)
        for (var e = function(a) {
                if (1 == a.changedTouches.length) {
                    var b = a.changedTouches[0];
                    a.clientX = b.clientX;
                    a.clientY = b.clientY
                }
                d.call(c, a);
                a.preventDefault()
            }, h = 0, l; l = Ai[b][h]; h++) a.addEventListener(l, e, !1), f.push([a, l, e]);
    return f
}
var Ai = {};
ld && (Ai = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});

function R(a) {
    for (; a.length;) {
        var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1)
    }
}

function Ig(a) {
    a.preventDefault();
    a.stopPropagation()
}

function yh(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
}

function ve(a) {
    var b = new w(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10));
    if (c = a.getAttribute("y")) b.y = parseInt(c, 10);
    if (a = (a = a.getAttribute("transform")) && a.match(Uk)) b.x += parseFloat(a[1]), a[3] && (b.y += parseFloat(a[3]));
    return b
}
var Uk = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;

function Uh(a, b) {
    var c = 0,
        d = 0,
        e = 1;
    if (sc(b.g, a) || sc(b.i, a)) e = b.scale;
    do {
        var f = ve(a);
        if (a == b.g || a == b.i) e = 1;
        c += f.x * e;
        d += f.y * e;
        a = a.parentNode
    } while (a && a != Th(b));
    return new w(c, d)
}

function M(a, b, c) {
    a = document.createElementNS("http://www.w3.org/2000/svg", a);
    for (var d in b) a.setAttribute(d, b[d]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a);
    return a
}

function xh(a) {
    return a.ctrlKey && Kb ? !0 : 2 == a.button
}

function Sh(a, b, c) {
    var d = b.createSVGPoint();
    d.x = a.clientX;
    d.y = a.clientY;
    c || (c = b.getScreenCTM().inverse());
    return d.matrixTransform(c)
}

function nk(a) {
    if (!a.length) return 0;
    for (var b = a[0].length, c = 1; c < a.length; c++) b = Math.min(b, a[c].length);
    return b
}

function ok(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || nk(a), e = 0; e < d; e++) {
        for (var f = a[0][e], h = 1; h < a.length; h++)
            if (f != a[h][e]) return c;
            " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h][e]) && " " != f) return c;
    return d
}

function pk(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || nk(a), e = 0; e < d; e++) {
        for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
            if (f != a[h].substr(-e - 1, 1)) return c;
            " " == f && (c = e + 1)
    }
    for (h = 1; h < a.length; h++)
        if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return c;
    return d
}

function Ng() {
    for (var a = Vk.length, b = [], c = 0; 20 > c; c++) b[c] = Vk.charAt(Math.random() * a);
    return b.join("")
}
var Vk = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function kj(a, b) {
    for (var c = a.split("\n"), d = 0; d < c.length; d++) {
        var e = d,
            f;
        var h = c[d];
        f = b;
        if (h.length <= f) f = h;
        else {
            for (var l = h.trim().split(/\s+/), m = 0; m < l.length; m++) l[m].length > f && (f = l[m].length);
            var n, m = -Infinity,
                p, q = 1;
            do {
                n = m;
                p = h;
                for (var h = [], B = l.length / q, y = 1, m = 0; m < l.length - 1; m++) y < (m + 1.5) / B ? (y++, h[m] = !0) : h[m] = !1;
                for (var h = Wk(l, h, f), m = Xk(l, h, f), B = l, y = [], x = 0; x < B.length; x++) y.push(B[x]), void 0 !== h[x] && y.push(h[x] ? "\n" : " ");
                h = y.join("");
                q++
            } while (m > n);
            f = p
        }
        c[e] = f
    }
    return c.join("\n")
}

function Xk(a, b, c) {
    for (var d = [0], e = [], f = 0; f < a.length; f++) d[d.length - 1] += a[f].length, !0 === b[f] ? (d.push(0), e.push(a[f].charAt(a[f].length - 1))) : !1 === b[f] && d[d.length - 1]++;
    a = Math.max.apply(Math, d);
    for (f = b = 0; f < d.length; f++) b -= 2 * Math.pow(Math.abs(c - d[f]), 1.5), b -= Math.pow(a - d[f], 1.5), -1 != ".?!".indexOf(e[f]) ? b += c / 3 : -1 != ",;)]}".indexOf(e[f]) && (b += c / 4);
    1 < d.length && d[d.length - 1] <= d[d.length - 2] && (b += .5);
    return b
}

function Wk(a, b, c) {
    for (var d = Xk(a, b, c), e, f = 0; f < b.length - 1; f++)
        if (b[f] != b[f + 1]) {
            var h = [].concat(b);
            h[f] = !h[f];
            h[f + 1] = !h[f + 1];
            var l = Xk(a, h, c);
            l > d && (d = l, e = h)
        }
    return e ? Wk(a, e, c) : b
};
var O = null,
    ij = null,
    Yk = null;

function Fg(a, b, c) {
    hk();
    ij = a;
    Yk = c;
    O.style.top = Ge().y + "px";
    O.style.direction = b ? "rtl" : "ltr";
    O.style.display = "block"
}

function hk() {
    ij && (ij = null, O.style.display = "none", O.style.left = "", O.style.top = "", O.style.height = "", Yk && Yk(), Yk = null, qc(O))
}

function Kg(a) {
    ij == a && hk()
}

function Jg(a, b, c, d, e) {
    b < d.y && (b = d.y);
    e ? a > c.width + d.x && (a = c.width + d.x) : a < d.x && (a = d.x);
    O.style.left = a + "px";
    O.style.top = b + "px";
    O.style.height = c.height - b + d.y + "px"
};

function Zk(a, b) {
    this.w = M("tspan", {}, null);
    this.w.appendChild(document.createTextNode("\u00b0"));
    Zk.v.constructor.call(this, a, b)
}
t(Zk, Mj);
Zk.prototype.Gc = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = $k.call(this, d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = $k;
    Zk.v.Gc.call(this, b)
};
Zk.prototype.Hc = function() {
    Zk.v.Hc.call(this, Jb || Lb || Nb);
    var a = O;
    if (a.firstChild) {
        var a = M("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:html": "http://www.w3.org/1999/xhtml",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                version: "1.1",
                height: "100px",
                width: "100px"
            }, a),
            b = M("circle", {
                cx: 50,
                cy: 50,
                r: 49,
                "class": "blocklyAngleCircle"
            }, a);
        this.i = M("path", {
            "class": "blocklyAngleGauge"
        }, a);
        this.D = M("line", {
            x1: 50,
            y1: 50,
            "class": "blocklyAngleLine"
        }, a);
        for (var c = 0; 360 > c; c += 15) M("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ?
                10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        Q(a, "click", this, hk);
        Q(b, "mousemove", this, this.T);
        Q(this.i, "mousemove", this, this.T);
        al(this)
    }
};
Zk.prototype.T = function(a) {
    var b = this.i.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = $k(b), ek.value = b, this.qa(b), gk(this), this.Ge())
};
Zk.prototype.wb = function(a) {
    Zk.v.wb.call(this, a);
    this.h && (al(this), this.F.s ? this.h.insertBefore(this.w, this.h.firstChild) : this.h.appendChild(this.w), this.o.width = 0)
};

function al(a) {
    if (a.i) {
        var b = (Number(a.mc()) + 0) * Math.PI / 180,
            c = ["M ", 50, ",", 50],
            d = 50,
            e = 50;
        if (!isNaN(b)) {
            var f = 0 * Math.PI / 180,
                h = 49 * Math.cos(f),
                l = -49 * Math.sin(f),
                d = d + 49 * Math.cos(b),
                e = e - 49 * Math.sin(b);
            c.push(" l ", h, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - f) / Math.PI) % 2), " ", Number(!1), " ", d, ",", e, " z")
        }
        a.i.setAttribute("d", c.join(""));
        a.D.setAttribute("x2", d);
        a.D.setAttribute("y2", e)
    }
}

function $k(a) {
    if (null === a) return null;
    a = parseFloat(a || 0);
    if (isNaN(a)) return null;
    a %= 360;
    0 > a && (a += 360);
    360 < a && (a -= 360);
    return String(a)
};

function bl(a, b, c) {
    Ue.call(this, c);
    this.h = b || cl;
    a instanceof rb || (a = ub(a), b = tb(a).replace(/(\r\n|\r|\n)/g, "<br>"), a = vb(b, a.Tc()));
    this.aa = a;
    this.T = this.Qa = !1;
    this.Td = Bb;
    this.ce = -1
}
t(bl, Ue);
var dl = {};
g = bl.prototype;
g.va = function() {
    bl.v.va.call(this);
    this.Jc && (el(this.Jc.L, this), this.Jc = null);
    this.g = null
};
g.xe = function() {
    var a = this.C();
    if (a) {
        var b = fl(this);
        b && !b.id && (b.id = Xe(this) + ".label");
        rf(a, "treeitem");
        sf(a, "selected", !1);
        sf(a, "expanded", !1);
        sf(a, "level", this.Sc());
        b && sf(a, "labelledby", b.id);
        (a = this.me()) && rf(a, "presentation");
        (a = this.le()) && rf(a, "presentation");
        if (a = gl(this))
            if (rf(a, "group"), a.hasChildNodes())
                for (a = cf(this), b = 1; b <= a; b++) {
                    var c = df(this, b - 1).C();
                    sf(c, "setsize", a);
                    sf(c, "posinset", b)
                }
    }
};
g.Vc = function() {
    var a = this.Le(),
        b = this.i.g,
        c = b.createElement("DIV");
    u ? (Zb(c, Ab(Cb, a)), c.removeChild(c.firstChild)) : Zb(c, a);
    if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
    else {
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        c = a
    }
    this.g = c
};
g.Da = function() {
    bl.v.Da.call(this);
    dl[Xe(this)] = this;
    this.xe()
};
g.mb = function() {
    bl.v.mb.call(this);
    delete dl[Xe(this)]
};
g.Qc = function(a, b) {
    var c = df(this, b - 1),
        d = df(this, b);
    bl.v.Qc.call(this, a, b);
    a.Bc = c;
    a.Ab = d;
    c ? c.Ab = a : this.Nc = a;
    d ? d.Bc = a : this.Oc = a;
    var e = this.Xa();
    e && hl(a, e);
    il(a, this.Sc() + 1);
    if (this.C() && (this.md(), this.Na())) {
        e = gl(this);
        a.C() || a.Vc();
        var f = a.C(),
            h = d && d.C();
        e.insertBefore(f, h);
        this.Z && a.Da();
        d || (c ? c.md() : (Le(e, !0), this.Bb(this.Na())))
    }
};
g.add = function(a, b) {
    a.getParent() && a.getParent().removeChild(a);
    this.Qc(a, b ? gf(this, b) : cf(this));
    return a
};
g.removeChild = function(a) {
    var b = this.Xa(),
        c = b ? b.o : null;
    if (c == a || a.contains(c)) b.Vb ? (this.select(), Hd(this.Qi, 10, this)) : this.select();
    bl.v.removeChild.call(this, a);
    this.Oc == a && (this.Oc = a.Bc);
    this.Nc == a && (this.Nc = a.Ab);
    a.Bc && (a.Bc.Ab = a.Ab);
    a.Ab && (a.Ab.Bc = a.Bc);
    c = !a.Ab;
    a.Jc = null;
    a.ce = -1;
    if (b && (el(b.L, a), this.Z)) {
        b = gl(this);
        if (a.Z) {
            var d = a.C();
            b.removeChild(d);
            a.mb()
        }
        c && (c = df(this, cf(this) - 1)) && c.md();
        ff(this) || (b.style.display = "none", this.md(), this.me().className = this.ge())
    }
    return a
};
g.Qi = function() {
    this.select()
};
g.Sc = function() {
    var a = this.ce;
    0 > a && (a = (a = this.getParent()) ? a.Sc() + 1 : 0, il(this, a));
    return a
};

function il(a, b) {
    if (b != a.ce) {
        a.ce = b;
        var c = jl(a);
        if (c) {
            var d = kl(a) + "px";
            ef(a) ? c.style.paddingRight = d : c.style.paddingLeft = d
        }
        bf(a, function(a) {
            il(a, b + 1)
        })
    }
}
g.contains = function(a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
g.Zb = function() {
    var a = [];
    bf(this, function(b) {
        a.push(b)
    });
    return a
};
g.select = function() {
    var a = this.Xa();
    a && a.eb(this)
};

function ll(a, b) {
    if (a.Qa != b) {
        a.Qa = b;
        ml(a);
        var c = a.C();
        c && (sf(c, "selected", b), b && (c = a.Xa().C(), sf(c, "activedescendant", Xe(a))))
    }
}
g.Na = function() {
    return this.T
};
g.Bb = function(a) {
    var b = a != this.T;
    if (!b || Fd(this, a ? "beforeexpand" : "beforecollapse")) {
        var c;
        this.T = a;
        c = this.Xa();
        var d = this.C();
        if (ff(this)) {
            if (!a && c && this.contains(c.o) && this.select(), d) {
                if (c = gl(this))
                    if (Le(c, a), a && this.Z && !c.hasChildNodes()) {
                        var e = [];
                        bf(this, function(a) {
                            e.push(a.Le())
                        });
                        Zb(c, Ab(e));
                        bf(this, function(a) {
                            a.Da()
                        })
                    }
                this.md()
            }
        } else(c = gl(this)) && Le(c, !1);
        d && (this.me().className = this.ge(), sf(d, "expanded", a));
        b && Fd(this, a ? "expand" : "collapse")
    }
};
g.Nf = function() {
    var a = this.getParent();
    a && (a.Bb(!0), a.Nf())
};
g.Le = function() {
    var a = !this.Xa().ra || (this.getParent(), 0) ? this.h.qg : this.h.pg,
        b = this.Na() && ff(this),
        a = {
            "class": a,
            style: nl(this)
        },
        c = [];
    b && bf(this, function(a) {
        c.push(a.Le())
    });
    b = zb("div", a, c);
    return zb("div", {
        "class": this.h.yg,
        id: Xe(this)
    }, [ol(this), b])
};

function kl(a) {
    return Math.max(0, (a.Sc() - 1) * a.h.wf)
}

function ol(a) {
    var b = {};
    b["padding-" + (ef(a) ? "right" : "left")] = kl(a) + "px";
    var b = {
            "class": a.vd(),
            style: b
        },
        c = a.lf(),
        d = zb("span", {
            style: {
                display: "inline-block"
            },
            "class": a.ge()
        }),
        e = zb("span", {
            "class": a.h.zg,
            title: null
        }, a.aa);
    a = Ab(e, zb("span", {}, a.Td));
    return zb("div", b, [c, d, a])
}
g.vd = function() {
    return this.h.df + (this.Qa ? " " + this.h.Bg : "")
};
g.lf = function() {
    return zb("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": pl(this)
    })
};

function pl(a) {
    var b = a.Xa(),
        c = !b.ra || b == a.getParent() && !1,
        d = a.h,
        e = new pa;
    e.Ya(d.uc, " ", d.ci, " ");
    if (ff(a)) {
        var f = 0;
        b.qc && (f = a.Na() ? 2 : 1);
        c || (f = a.Ab ? f + 8 : f + 4);
        switch (f) {
            case 1:
                e.Ya(d.ii);
                break;
            case 2:
                e.Ya(d.gi);
                break;
            case 4:
                e.Ya(d.ug);
                break;
            case 5:
                e.Ya(d.ei);
                break;
            case 6:
                e.Ya(d.di);
                break;
            case 8:
                e.Ya(d.vg);
                break;
            case 9:
                e.Ya(d.ki);
                break;
            case 10:
                e.Ya(d.ji);
                break;
            default:
                e.Ya(d.tg)
        }
    } else c ? e.Ya(d.tg) : a.Ab ? e.Ya(d.vg) : e.Ya(d.ug);
    return e.toString()
}

function nl(a) {
    var b = a.Na() && ff(a);
    return fb({
        "background-position": ql(a),
        display: b ? null : "none"
    })
}

function ql(a) {
    return (a.Ab ? (a.Sc() - 1) * a.h.wf : "-100") + "px 0"
}
g.C = function() {
    var a = bl.v.C.call(this);
    a || (this.g = a = this.i.C(Xe(this)));
    return a
};

function jl(a) {
    return (a = a.C()) ? a.firstChild : null
}
g.le = function() {
    var a = jl(this);
    return a ? a.firstChild : null
};
g.me = function() {
    var a = jl(this);
    return a ? a.childNodes[1] : null
};

function fl(a) {
    return (a = jl(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function gl(a) {
    return (a = a.C()) ? a.lastChild : null
}

function ml(a) {
    var b = jl(a);
    b && (b.className = a.vd())
}
g.md = function() {
    var a = this.le();
    a && (a.className = pl(this));
    if (a = gl(this)) a.style.backgroundPosition = ql(this)
};
g.Ff = function(a) {
    "expand" == a.target.getAttribute("type") && ff(this) ? this.Bb(!this.Na()) : (this.select(), ml(this))
};
g.Zg = function(a) {
    "expand" == a.target.getAttribute("type") && ff(this) || this.Bb(!this.Na())
};

function rl(a) {
    return a.Na() && ff(a) ? rl(df(a, cf(a) - 1)) : a
}

function hl(a, b) {
    a.Jc != b && (a.Jc = b, sl(b.L, a), bf(a, function(a) {
        hl(a, b)
    }))
}
var cl = {
    wf: 19,
    Ag: "goog-tree-root goog-tree-item",
    xg: "goog-tree-hide-root",
    yg: "goog-tree-item",
    pg: "goog-tree-children",
    qg: "goog-tree-children-nolines",
    df: "goog-tree-row",
    zg: "goog-tree-item-label",
    uc: "goog-tree-icon",
    ci: "goog-tree-expand-icon",
    ii: "goog-tree-expand-icon-plus",
    gi: "goog-tree-expand-icon-minus",
    ki: "goog-tree-expand-icon-tplus",
    ji: "goog-tree-expand-icon-tminus",
    ei: "goog-tree-expand-icon-lplus",
    di: "goog-tree-expand-icon-lminus",
    vg: "goog-tree-expand-icon-t",
    ug: "goog-tree-expand-icon-l",
    tg: "goog-tree-expand-icon-blank",
    bf: "goog-tree-expanded-folder-icon",
    rg: "goog-tree-collapsed-folder-icon",
    cf: "goog-tree-file-icon",
    wg: "goog-tree-expanded-folder-icon",
    sg: "goog-tree-collapsed-folder-icon",
    Bg: "selected"
};

function tl(a, b, c) {
    bl.call(this, a, b, c)
}
t(tl, bl);
tl.prototype.Xa = function() {
    if (this.Jc) return this.Jc;
    var a = this.getParent();
    return a && (a = a.Xa()) ? (hl(this, a), a) : null
};
tl.prototype.ge = function() {
    var a = this.Na(),
        b = this.Ud;
    if (a && b) return b;
    b = this.cg;
    if (!a && b) return b;
    b = this.h;
    if (ff(this)) {
        if (a && b.bf) return b.uc + " " + b.bf;
        if (!a && b.rg) return b.uc + " " + b.rg
    } else if (b.cf) return b.uc + " " + b.cf;
    return ""
};
var Td = "",
    Sd = !0,
    I = 0,
    Ug = [];

function J(a) {
    0 == I && (Ug.length || setTimeout(ul, 0), Ug.push(a))
}

function ul() {
    for (var a = Tg(Ug, !0), b = Ug.length = 0, c; c = a[b]; b++) {
        var d = Og[c.g] || null;
        if (d) {
            c.Hf && (d.o.push(c), d.H.length = 0, 1024 < d.o.length && d.o.unshift());
            for (var e = 0, f; f = d.D[e]; e++) f(c)
        }
    }
}

function Tg(a, b) {
    var c = Ya(a);
    b || c.reverse();
    for (var d = 0, e; e = c[d]; d++)
        for (var f = d + 1, h; h = c[f]; f++) e.type == h.type && e.h == h.h && e.g == h.g && ("move" == e.type ? (e.w = h.w, e.o = h.o, e.j = h.j, c.splice(f, 1), f--) : "change" == e.type && e.element == h.element && e.name == h.name ? (e.newValue = h.newValue, c.splice(f, 1), f--) : "ui" != e.type || "click" != h.element || "commentOpen" != e.element && "mutatorOpen" != e.element && "warningOpen" != e.element || (e.newValue = h.newValue, c.splice(f, 1), f--));
    for (d = c.length - 1; 0 <= d; d--) c[d].H() && c.splice(d, 1);
    b || c.reverse();
    for (d = 1; e = c[d]; d++) "change" == e.type && "mutation" == e.element && c.unshift(c.splice(d, 1)[0]);
    return c
}

function H(a) {
    Td = "boolean" == typeof a ? a ? Ng() : "" : a
}

function vl(a) {
    var b = [];
    a = a.Wa();
    for (var c = 0, d; d = a[c]; c++) b[c] = d.id;
    return b
}

function wl(a) {
    a && (this.h = a.id, this.g = a.A.id);
    this.D = Td;
    this.Hf = Sd
}
wl.prototype.H = function() {
    return !1
};
wl.prototype.i = function() {};

function Lg(a) {
    a && (Lg.v.constructor.call(this, a), this.J = Wg(a), this.G = vl(a))
}
t(Lg, wl);
Lg.prototype.type = "create";
Lg.prototype.i = function(a) {
    var b = Og[this.g] || null;
    if (a) a = z("xml"), a.appendChild(this.J), ch(a, b);
    else {
        a = 0;
        for (var c; c = this.G[a]; a++) {
            var d = b.Fb[c] || null;
            d ? d.B(!1, !1) : c == this.h && console.warn("Can't uncreate non-existant block: " + c)
        }
    }
};

function wj(a) {
    if (a) {
        if (a.getParent()) throw "Connected blocks cannot be deleted.";
        wj.v.constructor.call(this, a);
        this.J = Wg(a);
        this.G = vl(a)
    }
}
t(wj, wl);
wj.prototype.type = "delete";
wj.prototype.i = function(a) {
    var b = Og[this.g] || null;
    if (a) {
        a = 0;
        for (var c; c = this.G[a]; a++) {
            var d = b.Fb[c] || null;
            d ? d.B(!1, !1) : c == this.h && console.warn("Can't delete non-existant block: " + c)
        }
    } else a = z("xml"), a.appendChild(this.J), ch(a, b)
};

function Si(a, b, c, d, e) {
    a && (Si.v.constructor.call(this, a), this.element = b, this.name = c, this.G = d, this.newValue = e)
}
t(Si, wl);
Si.prototype.type = "change";
Si.prototype.H = function() {
    return this.G == this.newValue
};
Si.prototype.i = function(a) {
    var b = (Og[this.g] || null).Fb[this.h] || null;
    if (b) switch (b.Xg && b.Xg.$(!1), a = a ? this.newValue : this.G, this.element) {
        case "field":
            if (b = kh(b, this.name)) {
                var c = b.Ka;
                c && c.call(b, a);
                b.qa(a)
            } else console.warn("Can't set non-existant field: " + this.name);
            break;
        case "comment":
            b.Jd(a || null);
            break;
        case "collapsed":
            b.Dc(a);
            break;
        case "disabled":
            b.hd(a);
            break;
        case "inline":
            b.jd(a);
            break;
        case "mutation":
            c = "";
            b.bb && (c = (c = b.bb()) && ah(c));
            if (b.Pa) {
                a = a || "<mutation></mutation>";
                var d = bh("<xml>" +
                    a + "</xml>");
                b.Pa(d.firstChild)
            }
            J(new Si(b, "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existant block: " + this.h)
};

function Wd(a) {
    a && (Wd.v.constructor.call(this, a), a = xl(this), this.L = a.ah, this.J = a.Sg, this.G = a.og)
}
t(Wd, wl);
Wd.prototype.type = "move";

function Yd(a) {
    var b = xl(a);
    a.w = b.ah;
    a.o = b.Sg;
    a.j = b.og
}

function xl(a) {
    var b = (Og[a.g] || null).Fb[a.h] || null;
    a = {};
    var c = b.getParent();
    if (c) {
        a.ah = c.id;
        a: {
            for (var d = 0, e; e = c.h[d]; d++)
                if (e.I && G(e.I) == b) {
                    b = e;
                    break a
                }
            b = null
        }
        b && (a.Sg = b.name)
    } else a.og = b.oa();
    return a
}
Wd.prototype.H = function() {
    return this.L == this.w && this.J == this.o && dc(this.G, this.j)
};
Wd.prototype.i = function(a) {
    var b = Og[this.g] || null,
        c = b.Fb[this.h] || null;
    if (c) {
        var d = a ? this.w : this.L,
            e = a ? this.o : this.J;
        a = a ? this.j : this.G;
        var f = null;
        if (d && (f = b.Fb[d] || null, !f)) {
            console.warn("Can't connect to non-existant block: " + d);
            return
        }
        c.getParent() && je(c);
        if (a) e = c.oa(), c.moveBy(a.x - e.x, a.y - e.y);
        else {
            var c = c.K || c.N,
                h;
            if (e) {
                if (b = lh(f, e)) h = b.I
            } else 4 == c.type && (h = f.g);
            h ? c.connect(h) : console.warn("Can't connect to non-existant input: " + e)
        }
    } else console.warn("Can't move non-existant block: " + this.h)
};

function Ti(a, b, c, d) {
    Ti.v.constructor.call(this, a);
    this.element = b;
    this.newValue = d;
    this.Hf = !1
}
t(Ti, wl);
Ti.prototype.type = "ui";

function qi(a) {
    a.Ea = this.oe.bind(this);
    a.Ec = this.Vi.bind(this);
    this.u = new hi(a);
    this.u.xf = !0;
    this.s = !!a.s;
    this.g = a.dc;
    this.i = a.ba;
    this.J = [];
    this.G = [];
    this.j = [];
    this.L = []
}
var yl, zl, Al, Bl, Cl, Dl;
g = qi.prototype;
g.qd = !0;
g.R = 8;
g.Wb = qi.prototype.R;
g.X = 0;
g.Cb = 0;

function ri(a) {
    a.m = M("g", {
        "class": "blocklyFlyout"
    }, null);
    a.h = M("path", {
        "class": "blocklyFlyoutBackground"
    }, a.m);
    a.m.appendChild(ii(a.u));
    return a.m
}
g.P = function(a) {
    this.o = a;
    this.u.L = a;
    this.w = new Jh(this.u, this.g, !1);
    this.Tb();
    Array.prototype.push.apply(this.J, Q(this.m, "wheel", this, this.aj));
    this.qd || (this.H = this.kf.bind(this), this.o.Eb(this.H));
    Array.prototype.push.apply(this.J, Q(this.m, "mousedown", this, this.qh))
};
g.B = function() {
    this.Tb();
    R(this.J);
    this.H && (this.o.fd(this.H), this.H = null);
    this.w && (this.w.B(), this.w = null);
    this.u && (this.u.L = null, this.u.B(), this.u = null);
    this.m && (A(this.m), this.m = null);
    this.o = this.h = null
};
g.yb = function() {
    return this.X
};
g.wc = function() {
    return this.Cb
};
g.oe = function() {
    if (!El(this)) return null;
    try {
        var a = this.u.g.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = 2,
        c = 2;
    if (this.g) {
        1 == this.i && (b = 0);
        var d = this.Cb;
        0 == this.i && (d += this.Wb - 2);
        var e = this.X - 4
    } else c = 0, d = this.Cb - 4, e = this.X, this.s || (e -= 2);
    return {
        wa: d,
        Y: e,
        Sa: (a.height + 2 * this.Wb) * this.u.scale,
        Ta: (a.width + 2 * this.Wb) * this.u.scale,
        Mb: -this.u.scrollY,
        Ca: -this.u.scrollX,
        ib: a.y,
        hb: a.x,
        La: b,
        Ia: c
    }
};
g.Vi = function(a) {
    var b = this.oe();
    b && (!this.g && fa(a.y) ? this.u.scrollY = -b.Sa * a.y : this.g && fa(a.x) && (this.u.scrollX = -b.Ta * a.x), this.u.translate(this.u.scrollX + b.Ia, this.u.scrollY + b.La))
};
g.position = function() {
    if (El(this)) {
        var a = this.o.Ea();
        if (a) {
            var b = this.g ? a.Y : this.X,
                b = b - this.R;
            3 == this.i && (b *= -1);
            var c = this.g ? this.Cb : a.wa;
            if (this.g) {
                var d = 0 == this.i,
                    e = ["M 0," + (d ? 0 : this.R)];
                d ? (e.push("h", b + this.R), e.push("v", c), e.push("a", this.R, this.R, 0, 0, 1, -this.R, this.R), e.push("h", -1 * (b - this.R)), e.push("a", this.R, this.R, 0, 0, 1, -this.R, -this.R)) : (e.push("a", this.R, this.R, 0, 0, 1, this.R, -this.R), e.push("h", b - this.R), e.push("a", this.R, this.R, 0, 0, 1, this.R, this.R), e.push("v", c - this.R), e.push("h", -b - this.R))
            } else d =
                3 == this.i, e = ["M " + (d ? this.X : 0) + ",0"], e.push("h", b), e.push("a", this.R, this.R, 0, 0, d ? 0 : 1, d ? -this.R : this.R, this.R), e.push("v", Math.max(0, c - 2 * this.R)), e.push("a", this.R, this.R, 0, 0, d ? 0 : 1, d ? this.R : -this.R, this.R), e.push("h", -b);
            e.push("z");
            this.h.setAttribute("d", e.join(" "));
            b = a.Ia;
            3 == this.i && (b += a.Y, b -= this.X);
            c = a.La;
            1 == this.i && (c += a.wa, c -= this.Cb);
            this.m.setAttribute("transform", "translate(" + b + "," + c + ")");
            this.g ? this.X = a.Y : this.Cb = a.wa;
            this.w && this.w.resize()
        }
    }
};

function Hk(a) {
    a.w.set(a.g && a.s ? Infinity : 0)
}
g.aj = function(a) {
    var b = this.g ? a.deltaX : a.deltaY;
    if (b) {
        Ib && (b *= 10);
        var c = this.oe(),
            b = this.g ? c.Ca + b : c.Mb + b,
            b = Math.min(b, this.g ? c.Ta - c.Y : c.Sa - c.wa),
            b = Math.max(b, 0);
        this.w.set(b)
    }
    a.preventDefault();
    a.stopPropagation()
};

function El(a) {
    return a.m && "block" == a.m.style.display
}
g.Tb = function() {
    if (El(this)) {
        this.m.style.display = "none";
        for (var a = 0, b; b = this.j[a]; a++) R(b);
        this.j.length = 0;
        this.D && (this.u.fd(this.D), this.D = null)
    }
};
g.show = function(a) {
    this.Tb();
    Fl(this);
    "VARIABLE" == a ? a = tk(this.u.L) : "PROCEDURE" == a && (a = Tk(this.u.L));
    this.m.style.display = "block";
    for (var b = [], c = [], d = this.L.length = 0, e; e = a[d]; d++)
        if (e.tagName && "BLOCK" == e.tagName.toUpperCase()) {
            var f = he(e, this.u);
            f.disabled && this.L.push(f);
            b.push(f);
            e = parseInt(e.getAttribute("gap"), 10);
            c.push(isNaN(e) ? 3 * this.Wb : e)
        }
    Gl(this, b, c);
    this.j.push(Q(this.h, "mouseover", this, function() {
        for (var a = Qg(this.u, !1), b = 0, c; c = a[b]; b++) c.Fe()
    }));
    this.g ? this.Cb = 0 : this.X = 0;
    this.Jf();
    this.kf();
    this.position();
    this.D = this.Jf.bind(this);
    this.u.Eb(this.D)
};

function Gl(a, b, c) {
    var d = a.Wb,
        e = a.s ? d : d + 8;
    a.g && a.s && (b = b.reverse());
    for (var f = 0, h; h = b[f]; f++) {
        for (var l = h.Wa(), m = 0, n; n = l[m]; m++) n.o = !0;
        h.V();
        m = h.m;
        l = Gi(h);
        n = h.K ? 8 : 0;
        a.g && (e += n);
        a.g && a.s ? h.moveBy(e + l.width - n, d) : h.moveBy(e, d);
        a.g ? e += l.width + c[f] - n : d += l.height + c[f];
        n = M("rect", {
            "fill-opacity": 0
        }, null);
        n.$a = h;
        dj(n);
        a.u.g.insertBefore(n, h.m);
        h.w = n;
        a.G[f] = n;
        l = a;
        l.qd ? (l.j.push(Q(m, "mousedown", null, Hl(l, h))), l.j.push(Q(n, "mousedown", null, Hl(l, h)))) : (l.j.push(Q(m, "mousedown", null, Il(l, h))), l.j.push(Q(n, "mousedown",
            null, Il(l, h))));
        l.j.push(Q(m, "mouseover", h, h.Ue));
        l.j.push(Q(m, "mouseout", h, h.Fe));
        l.j.push(Q(n, "mouseover", h, h.Ue));
        l.j.push(Q(n, "mouseout", h, h.Fe))
    }
}

function Fl(a) {
    for (var b = Qg(a.u, !1), c = 0, d; d = b[c]; c++) d.A == a.u && d.B(!1, !1);
    for (b = 0; c = a.G[b]; b++) A(c);
    a.G.length = 0
}

function Il(a, b) {
    return function(c) {
        wi();
        Ch();
        xh(c) ? Nj(b, c) : (zh(Ah), yl = c, zl = b, Al = a, Bl = Q(document, "mouseup", this, a.sh), Cl = Q(document, "mousemove", this, a.Ni));
        c.stopPropagation()
    }
}
g.qh = function(a) {
    xh(a) || (Ch(!0), Jl(), this.aa = a.clientY, this.T = a.clientX, Dl = Q(document, "mousemove", this, this.rh), Bl = Q(document, "mouseup", this, Jl), a.preventDefault(), a.stopPropagation())
};
g.sh = function() {
    2 == K || ij || J(new Ti(zl, "click", 0, void 0));
    wi()
};
g.rh = function(a) {
    var b = this.oe();
    if (this.g) {
        if (!(0 > b.Ta - b.Y)) {
            var c = a.clientX - this.T;
            this.T = a.clientX;
            a = b.Ca - c;
            a = cc(a, 0, b.Ta - b.Y);
            this.w.set(a)
        }
    } else 0 > b.Sa - b.wa || (c = a.clientY - this.aa, this.aa = a.clientY, a = b.Mb - c, a = cc(a, 0, b.Sa - b.wa), this.w.set(a))
};
g.Ni = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = a.clientX - yl.clientX;
        a = a.clientY - yl.clientY;
        Math.sqrt(b * b + a * a) > Hh && Hl(Al, zl)(yl)
    }
};

function Hl(a, b) {
    return function(c) {
        if (!xh(c) && !b.disabled) {
            I++;
            var d = a.o,
                e = b.m;
            if (!e) throw "originBlock is not rendered.";
            var e = Uh(e, d),
                f = a.u.scrollX,
                h = a.u.scale;
            e.x += f / h - f;
            3 == a.i && (f = d.Ea().Y - a.X, h = d.scale, e.x += f / h - f);
            f = a.u.scrollY;
            h = a.u.scale;
            e.y += f / h - f;
            1 == a.i && (f = d.Ea().wa - a.Cb, h = d.scale, e.y += f / h - f);
            h = Od(b);
            h = he(h, d);
            f = h.m;
            if (!f) throw "block is not rendered.";
            f = Uh(f, d);
            f.x += d.scrollX / d.scale - d.scrollX;
            f.y += d.scrollY / d.scale - d.scrollY;
            d.S && !d.Aa && (f.x += d.S.yb() / d.scale, f.y += d.S.wc() / d.scale);
            h.moveBy(e.x -
                f.x, e.y - f.y);
            I--;
            0 == I && (H(!0), J(new Lg(h)));
            a.qd ? a.Tb() : a.kf();
            h.nd(c);
            K = 2;
            Ij(h, !0)
        }
    }
}
g.kf = function() {
    for (var a = Sg(this.o), b = Qg(this.u, !1), c = 0, d; d = b[c]; c++)
        if (-1 == this.L.indexOf(d)) {
            var e = d.Wa();
            d.hd(e.length > a)
        }
};
g.ud = function() {
    if (!this.m) return null;
    var a = this.m.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 0 == this.i ? new Ce(-1E9, c - 1E9, 2E9, 1E9 + a) : 1 == this.i ? new Ce(-1E9, c, 2E9, 1E9 + a) : 2 == this.i ? new Ce(b - 1E9, -1E9, 1E9 + d, 2E9) : new Ce(b, -1E9, 1E9 + d, 2E9)
};

function Jl() {
    Bl && (R(Bl), Bl = null);
    Cl && (R(Cl), Cl = null);
    Dl && (R(Dl), Dl = null);
    Bl && (R(Bl), Bl = null);
    Al = zl = yl = null
}
g.Jf = function() {
    this.D && this.u.fd(this.D);
    var a = Qg(this.u, !1);
    if (this.g) {
        this.u.scale = this.o.scale;
        for (var b = 0, c = 0, d; d = a[c]; c++) b = Math.max(b, Gi(d).height);
        b += 1.5 * this.Wb;
        b *= this.u.scale;
        b += S;
        if (this.Cb != b) {
            for (c = 0; d = a[c]; c++) {
                var e = Gi(d);
                if (d.w) {
                    d.w.setAttribute("width", e.width);
                    d.w.setAttribute("height", e.height);
                    var f = d.K ? 8 : 0,
                        h = d.oa();
                    d.w.setAttribute("y", h.y);
                    d.w.setAttribute("x", this.s ? h.x - e.width + f : h.x - f);
                    (e = d.Vb ? 15 : 0) && d.moveBy(0, e);
                    d.w.setAttribute("y", h.y)
                }
            }
            this.Cb = b;
            this.o.resize()
        }
    } else {
        this.u.scale =
            this.o.scale;
        for (c = b = 0; d = a[c]; c++) h = Gi(d).width, d.K && (h -= 8), b = Math.max(b, h);
        b += 1.5 * this.Wb + 8;
        b *= this.u.scale;
        b += S;
        if (this.X != b) {
            for (c = 0; d = a[c]; c++) h = Gi(d), this.s && (e = d.oa().x, f = b / this.u.scale - this.Wb, f -= 8, d.moveBy(f - e, 0)), d.w && (d.w.setAttribute("width", h.width), d.w.setAttribute("height", h.height), f = d.K ? 8 : 0, e = d.oa(), d.w.setAttribute("x", this.s ? e.x - h.width + f : e.x - f), (h = d.Vb ? 15 : 0) && d.moveBy(0, h), d.w.setAttribute("y", e.y));
            this.X = b;
            this.o.resize()
        }
    }
    this.D && this.u.Eb(this.D)
};

function Kl(a) {
    if (a.wd && "function" == typeof a.wd) return a.wd();
    if (r(a)) return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b
};

function Ll(a) {
    this.i = void 0;
    this.Ma = {};
    if (a) {
        var b;
        if (a.ne && "function" == typeof a.ne) b = a.ne();
        else if (a.wd && "function" == typeof a.wd) b = void 0;
        else if (ea(a) || r(a)) {
            b = [];
            for (var c = a.length, d = 0; d < c; d++) b.push(d)
        } else
            for (d in b = [], c = 0, a) b[c++] = d;
        a = Kl(a);
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    }
}
g = Ll.prototype;
g.set = function(a, b) {
    Ml(this, a, b, !1)
};
g.add = function(a, b) {
    Ml(this, a, b, !0)
};

function Ml(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.Ma[f] || (a.Ma[f] = new Ll);
        a = a.Ma[f]
    }
    if (d && void 0 !== a.i) throw Error('The collection already contains the key "' + b + '"');
    a.i = c
}
g.get = function(a) {
    a: {
        for (var b = this, c = 0; c < a.length; c++)
            if (b = b.Ma[a.charAt(c)], !b) {
                a = void 0;
                break a
            }
        a = b
    }
    return a ? a.i : void 0
};
g.wd = function() {
    var a = [];
    Nl(this, a);
    return a
};

function Nl(a, b) {
    void 0 !== a.i && b.push(a.i);
    for (var c in a.Ma) Nl(a.Ma[c], b)
}
g.ne = function(a) {
    var b = [];
    if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!c.Ma[e]) return [];
            c = c.Ma[e]
        }
        Ol(c, a, b)
    } else Ol(this, "", b);
    return b
};

function Ol(a, b, c) {
    void 0 !== a.i && c.push(b);
    for (var d in a.Ma) Ol(a.Ma[d], b + d, c)
}
g.clear = function() {
    this.Ma = {};
    this.i = void 0
};
g.clone = function() {
    return new Ll(this)
};
g.Ug = function() {
    var a;
    if (a = void 0 === this.i) a: {
        a = this.Ma;
        for (var b in a) {
            a = !1;
            break a
        }
        a = !0
    }
    return a
};

function Pl() {
    this.h = new Ll;
    this.g = "";
    this.o = this.w = null;
    this.i = this.j = 0
}

function sl(a, b) {
    var c = Ca(tb(b.aa));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = a.h.get(c);
        d ? d.push(b) : a.h.set(c, [b])
    }
}

function el(a, b) {
    var c = Ca(tb(b.aa));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = a.h.get(c);
        if (d) {
            for (var e = cf(b), f = 0; f < e; f++) el(a, df(b, f));
            Wa(d, b);
            if (!d.length) {
                for (var e = c, f = a.h, c = [], h = 0; h < e.length; h++) {
                    d = e.charAt(h);
                    if (!f.Ma[d]) throw Error('The collection does not have the key "' + e + '"');
                    c.push([f, d]);
                    f = f.Ma[d]
                }
                for (delete f.i; 0 < c.length;)
                    if (d = c.pop(), e = d[0], d = d[1], e.Ma[d].Ug()) delete e.Ma[d];
                    else break
            }
        }
    }
}

function Ql(a, b) {
    var c = !1,
        d = a.h.ne(b);
    d && d.length && (a.i = 0, a.j = 0, c = a.h.get(d[0]), c = Rl(a, c)) && (a.w = d);
    return c
}

function Rl(a, b) {
    var c;
    b && (a.i < b.length && (c = b[a.i], a.o = b), c && (c.Nf(), c.select()));
    return !!c
}
Pl.prototype.clear = function() {
    this.g = ""
};
var Sl = "StopIteration" in k ? k.StopIteration : {
    message: "StopIteration",
    stack: ""
};

function Tl() {}
Tl.prototype.next = function() {
    throw Sl;
};
Tl.prototype.eg = function() {
    return this
};

function Ul(a) {
    if (a instanceof Tl) return a;
    if ("function" == typeof a.eg) return a.eg();
    if (ea(a)) {
        var b = 0,
            c = new Tl;
        c.next = function() {
            for (;;) {
                if (b >= a.length) throw Sl;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function Vl(a) {
    try {
        return Ul(a).next()
    } catch (b) {
        if (b != Sl) throw b;
        return null
    }
};

function Wl(a) {
    Ed.call(this);
    this.g = a;
    a = u ? "focusout" : "blur";
    this.h = td(this.g, u ? "focusin" : "focus", this, !u);
    this.i = td(this.g, a, this, !u)
}
t(Wl, Ed);
Wl.prototype.handleEvent = function(a) {
    var b = new nd(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    Fd(this, b)
};
Wl.prototype.va = function() {
    Wl.v.va.call(this);
    Ad(this.h);
    Ad(this.i);
    delete this.g
};

function Xl(a, b, c) {
    bl.call(this, a, b, c);
    this.T = !0;
    ll(this, !0);
    this.o = this;
    this.L = new Pl;
    this.Ub = this.nc = null;
    this.Vb = !1;
    this.G = this.qc = this.ra = !0;
    if (u) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (d) {}
}
t(Xl, bl);
g = Xl.prototype;
g.Xa = function() {
    return this
};
g.Sc = function() {
    return 0
};
g.Nf = function() {};
g.xi = function() {
    this.Vb = !0;
    kf(this.C(), "focused");
    this.o && this.o.select()
};
g.ri = function() {
    this.Vb = !1;
    mf(this.C(), "focused")
};
g.Na = function() {
    return !this.G || Xl.v.Na.call(this)
};
g.Bb = function(a) {
    this.G ? Xl.v.Bb.call(this, a) : this.T = a
};
g.lf = function() {
    return Bb
};
g.me = function() {
    var a = jl(this);
    return a ? a.firstChild : null
};
g.le = function() {
    return null
};
g.md = function() {};
g.vd = function() {
    return Xl.v.vd.call(this) + (this.G ? "" : " " + this.h.xg)
};
g.ge = function() {
    var a = this.Na(),
        b = this.Ud;
    if (a && b) return b;
    b = this.cg;
    if (!a && b) return b;
    b = this.h;
    return a && b.wg ? b.uc + " " + b.wg : !a && b.sg ? b.uc + " " + b.sg : ""
};
g.eb = function(a) {
    if (this.o != a) {
        var b = !1;
        this.o && (b = null == this.o, ll(this.o, !1));
        if (this.o = a) ll(a, !0), b && a.select();
        Fd(this, "change")
    }
};

function Yl(a) {
    0 != a.ra && (a.ra = !1, a.Z && Zl(a))
}

function Zl(a) {
    function b(a) {
        var e = gl(a);
        if (e) {
            var f = !c || (a.getParent(), 0) ? a.h.qg : a.h.pg;
            e.className = f;
            if (e = a.le()) e.className = pl(a)
        }
        bf(a, b)
    }
    var c = a.ra;
    b(a)
}

function $l(a) {
    0 != a.qc && (a.qc = !1, a.Z && Zl(a))
}

function am(a) {
    if (0 != a.G) {
        a.G = !1;
        if (a.Z) {
            var b = jl(a);
            b && (b.className = a.vd())
        }
        a.o == a && df(a, 0) && a.eb(df(a, 0))
    }
}
g.xe = function() {
    Xl.v.xe.call(this);
    var a = this.C();
    rf(a, "tree");
    sf(a, "labelledby", fl(this).id)
};
g.Da = function() {
    Xl.v.Da.call(this);
    var a = this.C();
    a.className = this.h.Ag;
    a.setAttribute("hideFocus", "true");
    a = this.C();
    a.tabIndex = 0;
    var b = this.nc = new Jf(a),
        c = this.Ub = new Wl(a);
    Ye(this).U(c, "focusout", this.ri).U(c, "focusin", this.xi).U(b, "key", this.rb).U(a, "mousedown", this.rf).U(a, "click", this.rf).U(a, "dblclick", this.rf);
    this.xe()
};
g.mb = function() {
    Xl.v.mb.call(this);
    this.nc.B();
    this.nc = null;
    this.Ub.B();
    this.Ub = null
};
g.rf = function(a) {
    var b = bm(this, a);
    if (b) switch (a.type) {
        case "mousedown":
            b.Ff(a);
            break;
        case "click":
            a.preventDefault();
            break;
        case "dblclick":
            b.Zg(a)
    }
};
g.rb = function(a) {
    var b;
    b = this.L;
    var c = !1;
    switch (a.g) {
        case 40:
        case 38:
            if (a.ctrlKey) {
                var c = 40 == a.g ? 1 : -1,
                    d = b.w;
                if (d) {
                    var e = null,
                        f = !1;
                    if (b.o) {
                        var h = b.i + c;
                        0 <= h && h < b.o.length ? (b.i = h, e = b.o) : f = !0
                    }
                    e || (h = b.j + c, 0 <= h && h < d.length && (b.j = h), d.length > b.j && (e = b.h.get(d[b.j])), e && e.length && f && (b.i = -1 == c ? e.length - 1 : 0));
                    Rl(b, e) && (b.w = d)
                }
                c = !0
            }
            break;
        case 8:
            d = b.g.length - 1;
            c = !0;
            0 < d ? (b.g = b.g.substring(0, d), Ql(b, b.g)) : 0 == d ? b.g = "" : c = !1;
            break;
        case 27:
            b.g = "", c = !0
    }
    if (!(b = c) && (b = this.o)) {
        b = this.o;
        c = !0;
        switch (a.g) {
            case 39:
                if (a.altKey) break;
                ff(b) && (b.Na() ? df(b, 0).select() : b.Bb(!0));
                break;
            case 37:
                if (a.altKey) break;
                ff(b) && b.Na() ? b.Bb(!1) : (d = b.getParent(), e = b.Xa(), d && (e.G || d != e) && d.select());
                break;
            case 40:
                a: if (ff(b) && b.Na()) d = df(b, 0);
                    else {
                        for (d = b; d != b.Xa();) {
                            e = d.Ab;
                            if (null != e) {
                                d = e;
                                break a
                            }
                            d = d.getParent()
                        }
                        d = null
                    }
                d && d.select();
                break;
            case 38:
                d = b.Bc;
                null != d ? d = rl(d) : (d = b.getParent(), e = b.Xa(), d = !e.G && d == e || b == e ? null : d);
                d && d.select();
                break;
            default:
                c = !1
        }
        c && (a.preventDefault(), (e = b.Xa()) && e.L.clear());
        b = c
    }
    b || (b = this.L, c = !1, a.ctrlKey || a.altKey ||
        (d = String.fromCharCode(a.w || a.g).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.g) && (b.g += d, c = Ql(b, b.g))), b = c);
    b && a.preventDefault();
    return b
};

function bm(a, b) {
    for (var c, d = b.target; null != d;) {
        if (c = dl[d.id]) return c;
        if (d == a.C()) break;
        d = d.parentNode
    }
    return null
}
g.createNode = function(a) {
    return new tl(a || Bb, this.h, this.i)
};

function mi(a) {
    this.u = a;
    this.s = a.options.s;
    this.h = a.options.dc;
    this.ba = a.options.ba;
    this.g = {
        wf: 19,
        Ag: "blocklyTreeRoot",
        xg: "blocklyHidden",
        yg: "",
        df: "blocklyTreeRow",
        zg: "blocklyTreeLabel",
        uc: "blocklyTreeIcon",
        bf: "blocklyTreeIconOpen",
        cf: "blocklyTreeIconNone",
        Bg: "blocklyTreeSelected"
    };
    this.i = {
        df: "blocklyTreeSeparator"
    };
    this.h && (this.g.cssTreeRow += a.s ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.i.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.s ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.g.cssTreeIcon = "")
}
g = mi.prototype;
g.width = 0;
g.height = 0;
g.Dd = null;
g.P = function() {
    var a = this.u;
    this.Db = z("div", "blocklyToolboxDiv");
    this.Db.setAttribute("dir", a.s ? "RTL" : "LTR");
    document.body.appendChild(this.Db);
    Q(this.Db, "mousedown", this, function(a) {
        xh(a) || a.target == this.Db ? Ch(!1) : Ch(!0)
    });
    this.W = new qi({
        sd: a.options.sd,
        Kb: a,
        s: a.s,
        dc: a.dc,
        ba: a.options.ba
    });
    rc(ri(this.W), a.m);
    this.W.P(a);
    this.g.cleardotPath = a.options.j + "1x1.gif";
    this.g.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (a.s ? "Rtl" : "Ltr");
    var b = new cm(this, this.g);
    this.jc = b;
    am(b);
    Yl(b);
    $l(b);
    b.eb(null);
    dm(this, a.options.w);
    b.V(this.Db);
    em(this);
    this.position()
};
g.B = function() {
    this.W.B();
    this.jc.B();
    A(this.Db);
    this.Dd = this.u = null
};
g.yb = function() {
    return this.width
};
g.wc = function() {
    return this.height
};
g.position = function() {
    var a = this.Db;
    if (a) {
        var b = Th(this.u),
            c = Ie(b),
            b = fm(b);
        this.h ? (a.style.left = c.x + "px", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, a.style.top = 0 == this.ba ? c.y + "px" : c.y + b.height - a.offsetHeight + "px") : (a.style.left = 3 == this.ba ? c.x + b.width - a.offsetWidth + "px" : c.x + "px", a.style.height = b.height + "px", a.style.top = c.y + "px", this.width = a.offsetWidth, 2 == this.ba && --this.width);
        this.W.position()
    }
};

function dm(a, b) {
    function c(a, b, m) {
        for (var n = null, p = 0, q; q = a.childNodes[p]; p++)
            if (q.tagName) switch (q.tagName.toUpperCase()) {
                case "CATEGORY":
                    n = d.createNode(q.getAttribute("name"));
                    n.Xb = [];
                    b.add(n);
                    var B = q.getAttribute("custom");
                    B ? n.Xb = B : c(q, n, m);
                    B = q.getAttribute("colour");
                    r(B) ? (B.match(/^#[0-9a-fA-F]{6}$/) ? n.ue = B : n.ue = yj(zj(B)), f = !0) : n.ue = "";
                    "true" == q.getAttribute("expanded") ? (n.Xb.length && d.eb(n), n.Bb(!0)) : n.Bb(!1);
                    n = q;
                    break;
                case "SEP":
                    n && ("CATEGORY" == n.tagName.toUpperCase() ? b.add(new gm(e.i)) : (q =
                        parseFloat(q.getAttribute("gap")), isNaN(q) || (B = parseFloat(n.getAttribute("gap")), n.setAttribute("gap", isNaN(B) ? q : B + q))));
                    break;
                case "BLOCK":
                case "SHADOW":
                    b.Xb.push(q), n = q
            }
    }
    var d = a.jc,
        e = a;
    d.dh();
    d.Xb = [];
    var f = !1;
    c(b, a.jc, a.u.options.j);
    a.j = f;
    if (d.Xb.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    ih(a.u)
}

function em(a, b) {
    for (var c = (b || a.jc).Zb(), d = 0, e; e = c[d]; d++) {
        var f = jl(e);
        if (f) {
            var h = a.j ? "8px solid " + (e.ue || "#ddd") : "none";
            a.u.s ? f.style.borderRight = h : f.style.borderLeft = h
        }
        em(a, e)
    }
}
g.ud = function() {
    if (!this.Db) return null;
    var a = this.Db.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 2 == this.ba ? new Ce(-1E7, -1E7, 1E7 + b + d, 2E7) : 3 == this.ba ? new Ce(b, -1E7, 1E7 + d, 2E7) : 0 == this.ba ? new Ce(-1E7, -1E7, 2E7, 1E7 + c + a) : new Ce(0, c, 2E7, 1E7 + d)
};

function cm(a, b) {
    this.S = a;
    Xl.call(this, Bb, b)
}
t(cm, Xl);
cm.prototype.Da = function() {
    cm.v.Da.call(this);
    if (ld) {
        var a = this.C();
        Q(a, "touchstart", this, this.Vd)
    }
};
cm.prototype.Vd = function(a) {
    a.preventDefault();
    var b = bm(this, a);
    b && "touchstart" === a.type && setTimeout(function() {
        b.Ff(a)
    }, 1)
};
cm.prototype.createNode = function(a) {
    return new hm(this.S, a ? ub(a) : Bb, this.h, this.i)
};
cm.prototype.eb = function(a) {
    var b = this.S;
    if (a != this.o && a != b.jc) {
        b.Dd && (jl(b.Dd).style.backgroundColor = "");
        if (a) {
            var c = a.ue || "#57e";
            jl(a).style.backgroundColor = c;
            em(b, a)
        }
        c = this.o;
        Xl.prototype.eb.call(this, a);
        a && a.Xb && a.Xb.length ? (b.W.show(a.Xb), b.Dd != a && Hk(b.W)) : b.W.Tb();
        c != a && c != this && (c = new Ti(null, "category", c && tb(c.aa), a && tb(a.aa)), c.g = b.u.id, J(c));
        a && (b.Dd = a)
    }
};

function hm(a, b, c, d) {
    bl.call(this, b, c, d);
    a && (b = function() {
        ik(a.u)
    }, td(a.jc, "expand", b), td(a.jc, "collapse", b))
}
t(hm, tl);
hm.prototype.lf = function() {
    return zb("span")
};
hm.prototype.Ff = function() {
    ff(this) ? (this.Bb(!this.Na()), this.select()) : this.Qa ? this.Xa().eb(null) : this.select();
    ml(this)
};
hm.prototype.Zg = function() {};

function gm(a) {
    hm.call(this, null, "", a)
}
t(gm, hm);
var im = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function jm(a) {
    var b = {};
    a = String(a);
    var c = "#" == a.charAt(0) ? a : "#" + a;
    if (km.test(c)) return b.tf = lm(c), b.type = "hex", b;
    a: {
        var d = a.match(mm);
        if (d) {
            var c = Number(d[1]),
                e = Number(d[2]),
                d = Number(d[3]);
            if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                c = [c, e, d];
                break a
            }
        }
        c = []
    }
    if (c.length) return b.tf = yj(c), b.type = "rgb", b;
    if (im && (c = im[a.toLowerCase()])) return b.tf = c, b.type = "named", b;
    throw Error(a + " is not a valid color string");
}
var nm = /#(.)(.)(.)/;

function lm(a) {
    if (!km.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(nm, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
}

function Wj(a) {
    a = lm(a);
    return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

function yj(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a);
    if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = om(b.toString(16));
    c = om(c.toString(16));
    a = om(a.toString(16));
    return "#" + b + c + a
}
var km = /^#(?:[0-9a-f]{3}){1,2}$/i,
    mm = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function om(a) {
    return 1 == a.length ? "0" + a : a
}

function zj(a) {
    var b = 0,
        c = 0,
        d = 0,
        e = Math.floor(a / 60),
        f = a / 60 - e;
    a = 165.75 * .55;
    var h = 165.75 * (1 - .45 * f),
        f = 165.75 * (1 - .45 * (1 - f));
    switch (e) {
        case 1:
            b = h;
            c = 165.75;
            d = a;
            break;
        case 2:
            b = a;
            c = 165.75;
            d = f;
            break;
        case 3:
            b = a;
            c = h;
            d = 165.75;
            break;
        case 4:
            b = f;
            c = a;
            d = 165.75;
            break;
        case 5:
            b = 165.75;
            c = a;
            d = h;
            break;
        case 6:
        case 0:
            b = 165.75, c = f, d = a
    }
    return [Math.floor(b), Math.floor(c), Math.floor(d)]
}

function Xj(a, b, c) {
    c = cc(c, 0, 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
};

function pm(a, b, c, d, e) {
    pm.v.constructor.call(this, a, e);
    a = parseFloat(d);
    this.i = isNaN(a) ? 0 : a;
    b = parseFloat(b);
    this.D = isNaN(b) ? -Infinity : b;
    c = parseFloat(c);
    this.w = isNaN(c) ? Infinity : c;
    this.qa(this.Ef(this.Oa))
}
t(pm, Mj);
pm.prototype.Gc = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = this.Ef(d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = this.Ef;
    pm.v.Gc.call(this, b)
};
pm.prototype.Ef = function(a) {
    if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0);
    if (isNaN(a)) return null;
    this.i && Number.isFinite(a) && (a = Math.round(a / this.i) * this.i);
    a = cc(a, this.D, this.w);
    return String(a)
};

function qm(a, b, c, d) {
    this.F = null;
    this.w = Number(c);
    this.X = Number(b);
    this.o = new Yb(this.X, this.w + 10);
    this.ha = d || "";
    this.qa(a)
}
t(qm, lj);
g = qm.prototype;
g.If = null;
g.Mc = !1;
g.P = function() {
    if (!this.g) {
        this.g = M("g", {}, null);
        this.Lc || (this.g.style.display = "none");
        this.i = M("image", {
            height: this.w + "px",
            width: this.X + "px"
        }, this.g);
        this.qa(this.D);
        Ib && (this.If = M("rect", {
            height: this.w + "px",
            width: this.X + "px",
            "fill-opacity": 0
        }, this.g));
        this.F.m.appendChild(this.g);
        var a = this.If || this.i;
        a.$a = this.F;
        dj(a)
    }
};
g.B = function() {
    A(this.g);
    this.If = this.i = this.g = null
};
g.Oa = function() {
    return this.D
};
g.qa = function(a) {
    null !== a && (this.D = a, this.i && this.i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r(a) ? a : ""))
};
g.wb = function(a) {
    null !== a && (this.ha = a)
};
g.Oe = function() {};

function rm(a, b) {
    rm.v.constructor.call(this, "", b);
    this.qa(a)
}
t(rm, lj);
g = rm.prototype;
g.Qd = "default";
g.P = function() {
    this.g || (rm.v.P.call(this), this.i = M("text", {
        "class": "blocklyText blocklyCheckbox",
        x: -3,
        y: 14
    }, this.g), this.i.appendChild(document.createTextNode("\u2713")), this.i.style.display = this.ea ? "block" : "none")
};
g.Oa = function() {
    return String(this.ea).toUpperCase()
};
g.qa = function(a) {
    a = "TRUE" == a;
    this.ea !== a && (this.F && 0 == I && J(new Si(this.F, "field", this.name, this.ea, a)), this.ea = a, this.i && (this.i.style.display = a ? "block" : "none"))
};
g.Hc = function() {
    var a = !this.ea;
    if (this.F && this.Ka) {
        var b = this.Ka(a);
        void 0 !== b && (a = b)
    }
    null !== a && this.qa(String(a).toUpperCase())
};

function sm(a) {
    Ed.call(this);
    this.g = [];
    tm(this, a)
}
t(sm, Ed);
g = sm.prototype;
g.cc = null;
g.Of = null;

function tm(a, b) {
    b && (Ra(b, function(a) {
        um(this, a, !1)
    }, a), Za(a.g, b))
}
g.eb = function(a) {
    a != this.cc && (um(this, this.cc, !1), this.cc = a, um(this, a, !0));
    Fd(this, "select")
};
g.clear = function() {
    var a = this.g;
    if (!da(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.cc = null
};
g.va = function() {
    sm.v.va.call(this);
    delete this.g;
    this.cc = null
};

function um(a, b, c) {
    b && ("function" == typeof a.Of ? a.Of(b, c) : "function" == typeof b.Sf && b.Sf(c))
};

function vm(a, b, c, d, e) {
    this.g = !!b;
    this.node = null;
    this.i = 0;
    this.o = !1;
    this.j = !c;
    a && wm(this, a, d);
    this.h = void 0 != e ? e : this.i || 0;
    this.g && (this.h *= -1)
}
t(vm, Tl);

function wm(a, b, c) {
    if (a.node = b) a.i = fa(c) ? c : 1 != a.node.nodeType ? 0 : a.g ? -1 : 1;
    fa(void 0) && (a.h = void 0)
}
vm.prototype.clone = function() {
    return new vm(this.node, this.g, !this.j, this.i, this.h)
};
vm.prototype.next = function() {
    var a;
    if (this.o) {
        if (!this.node || this.j && 0 == this.h) throw Sl;
        a = this.node;
        var b = this.g ? -1 : 1;
        if (this.i == b) {
            var c = this.g ? a.lastChild : a.firstChild;
            c ? wm(this, c) : wm(this, a, -1 * b)
        } else(c = this.g ? a.previousSibling : a.nextSibling) ? wm(this, c) : wm(this, a.parentNode, -1 * b);
        this.h += this.i * (this.g ? -1 : 1)
    } else this.o = !0;
    a = this.node;
    if (!this.node) throw Sl;
    return a
};
vm.prototype.splice = function(a) {
    var b = this.node,
        c = this.g ? 1 : -1;
    this.i == c && (this.i = -1 * c, this.h += this.i * (this.g ? -1 : 1));
    this.g = !this.g;
    vm.prototype.next.call(this);
    this.g = !this.g;
    for (var c = ea(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) rc(c[d], b);
    A(b)
};

function xm(a, b, c, d) {
    vm.call(this, a, b, c, null, d)
}
t(xm, vm);
xm.prototype.next = function() {
    do xm.v.next.call(this); while (-1 == this.i);
    return this.node
};

function ym() {}
t(ym, vf);
ba(ym);
var zm = 0;
ym.prototype.se = function(a) {
    var b = yf(this, a);
    a = a.i.ob("DIV", b ? b.join(" ") : null, Am(this, a.cb, a.qb, a.i));
    rf(a, "grid");
    return a
};

function Am(a, b, c, d) {
    for (var e = [], f = 0, h = 0; f < c.height; f++) {
        for (var l = [], m = 0; m < c.width; m++) {
            var n = b && b[h++];
            l.push(Bm(a, n, d))
        }
        e.push(Cm(a, l, d))
    }
    a = d.ob("TABLE", a.ga() + "-table", d.ob("TBODY", a.ga() + "-body", e));
    a.cellSpacing = 0;
    a.cellPadding = 0;
    return a
}

function Cm(a, b, c) {
    a = c.ob("TR", a.ga() + "-row", b);
    rf(a, "row");
    return a
}

function Bm(a, b, c) {
    a = c.ob("TD", {
        "class": a.ga() + "-cell",
        id: a.ga() + "-cell-" + zm++
    }, b);
    rf(a, "gridcell");
    sf(a, "selected", !1);
    if (!zc(a) && !uf(a, "label")) {
        var d;
        b = new xm(a);
        for (c = ""; !c && (d = Vl(b));) 1 == d.nodeType && (c = uf(d, "label") || d.title);
        (d = c) && sf(a, "label", d)
    }
    return a
}
ym.prototype.yd = function(a, b) {
    if (a) {
        var c = ic(this.ga() + "-body", a)[0];
        if (c) {
            var d = 0;
            Ra(c.rows, function(a) {
                Ra(a.cells, function(a) {
                    qc(a);
                    if (b) {
                        var c = b[d++];
                        c && a.appendChild(c)
                    }
                })
            });
            if (d < b.length) {
                for (var e = [], f = fc(a), h = c.rows[0].cells.length; d < b.length;) {
                    var l = b[d++];
                    e.push(Bm(this, l, f));
                    e.length == h && (l = Cm(this, e, f), c.appendChild(l), e.length = 0)
                }
                if (0 < e.length) {
                    for (; e.length < h;) e.push(Bm(this, "", f));
                    l = Cm(this, e, f);
                    c.appendChild(l)
                }
            }
        }
        Ne(a, Ib)
    }
};

function Dm(a, b, c) {
    for (b = b.C(); c && 1 == c.nodeType && c != b;) {
        if ("TD" == c.tagName && jf(c, a.ga() + "-cell")) return c.firstChild;
        c = c.parentNode
    }
    return null
}
ym.prototype.ga = function() {
    return "goog-palette"
};

function Em(a, b, c) {
    N.call(this, a, b || ym.Jb(), c);
    this.Ze &= -89;
    this.G = new Fm;
    this.G.Je(this);
    this.Qa = -1
}
t(Em, N);
g = Em.prototype;
g.qb = null;
g.Rb = -1;
g.Ga = null;
g.va = function() {
    Em.v.va.call(this);
    this.Ga && (this.Ga.B(), this.Ga = null);
    this.qb = null;
    this.G.B()
};
g.Ie = function(a) {
    Em.v.Ie.call(this, a);
    Gm(this);
    this.Ga ? (this.Ga.clear(), tm(this.Ga, a)) : (this.Ga = new sm(a), a = na(this.pi, this), this.Ga.Of = a, Ye(this).U(this.Ga, "select", this.Ci));
    this.Rb = -1
};
g.ie = function() {
    return ""
};
g.Cd = function(a) {
    Em.v.Cd.call(this, a);
    var b = Dm(this.h, this, a.target);
    b && a.o && sc(b, a.o) || b == Hm(this) || (a = this.cb, Im(this, a && b ? Qa(a, b) : -1))
};
g.Sb = function(a) {
    Em.v.Sb.call(this, a);
    if (this.ea & 4 && (a = Dm(this.h, this, a.target), a != Hm(this))) {
        var b = this.cb;
        Im(this, b && a ? Qa(b, a) : -1)
    }
};
g.hc = function(a) {
    var b = Hm(this);
    return b ? (a && (this.Ga && this.Ga.cc ? "mouseup" != a.type || Dm(this.h, this, a.target) : 1) && this.eb(b), Em.v.hc.call(this, a)) : !1
};
g.rb = function(a) {
    var b = this.cb,
        b = b ? b.length : 0,
        c = this.qb.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.g || 32 == a.g) return this.hc(a);
    if (36 == a.g) return Im(this, 0), !0;
    if (35 == a.g) return Im(this, b - 1), !0;
    var d;
    if (0 > this.Rb)
        if (this.Ga) {
            d = this.Ga;
            var e = d.cc;
            d = e ? Qa(d.g, e) : -1
        } else d = -1;
    else d = this.Rb;
    switch (a.g) {
        case 37:
            if (-1 == d || 0 == d) d = b;
            Im(this, d - 1);
            a.preventDefault();
            return !0;
        case 39:
            return d == b - 1 && (d = -1), Im(this, d + 1), a.preventDefault(), !0;
        case 38:
            -1 == d && (d = b + c - 1);
            if (d >= c) return Im(this, d - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 == d && (d = -c), d < b - c) return Im(this, d + c), a.preventDefault(), !0
    }
    return !1
};
g.Ci = function() {};

function Jm(a, b) {
    if (a.C()) throw Error("Component already rendered");
    a.qb = fa(b) ? new Yb(b, void 0) : b;
    Gm(a)
}

function Hm(a) {
    var b = a.cb;
    return b && b[a.Rb]
}

function Im(a, b) {
    b != a.Rb && (Km(a, a.Rb, !1), a.Qa = a.Rb, a.Rb = b, Km(a, b, !0), Fd(a, "a"))
}

function Lm(a, b) {
    if (a.Ga) {
        var c = a.Ga;
        c.eb(c.g[b] || null)
    }
}
g.eb = function(a) {
    this.Ga && this.Ga.eb(a)
};

function Km(a, b, c) {
    if (a.C()) {
        var d = a.cb;
        if (d && 0 <= b && b < d.length) {
            var e;
            e = (e = Hm(a)) ? e.parentNode : null;
            a.G.C() != e && (a.G.g = e);
            e = a.G;
            e.pb(c);
            !!(e.ea & 2) == c && (b = d[b]) && (b = b ? b.parentNode : null, d = a.h.ga() + "-cell-hover", c ? kf(b, d) : mf(b, d), c ? sf(a.g, "activedescendant", b.id) : b.id == uf(a.g, "activedescendant") && tf(a.g))
        }
    }
}
g.pb = function(a) {
    a && -1 == this.Rb ? Im(this, -1 < this.Qa ? this.Qa : 0) : a || Im(this, -1);
    Em.v.pb.call(this, a)
};
g.pi = function(a, b) {
    if (this.C() && a) {
        var c = a.parentNode,
            d = this.h.ga() + "-cell-selected";
        b ? kf(c, d) : mf(c, d);
        sf(c, "selected", b)
    }
};

function Gm(a) {
    var b = a.cb;
    if (b)
        if (a.qb && a.qb.width) {
            if (b = Math.ceil(b.length / a.qb.width), !fa(a.qb.height) || a.qb.height < b) a.qb.height = b
        } else b = Math.ceil(Math.sqrt(b.length)), a.qb = new Yb(b, b);
    else a.qb = new Yb(0, 0)
}

function Fm() {
    N.call(this, null);
    this.Ic |= 2
}
t(Fm, N);

function Mm(a, b, c) {
    this.T = a || [];
    Em.call(this, null, b || ym.Jb(), c);
    Nm(this, this.T)
}
t(Mm, Em);
Mm.prototype.ra = null;
Mm.prototype.aa = null;

function Nm(a, b) {
    a.T = b;
    a.aa = null;
    a.ra = null;
    var c = Om(a);
    a.h.yd(a.C(), c);
    a.Ie(c)
}
Mm.prototype.mf = function() {
    var a = this.Ga ? this.Ga.cc : null;
    if (a) {
        var b = a.style[Ha()];
        if ("undefined" !== typeof b) a = b;
        else {
            var b = a.style,
                c = De["background-color"];
            if (!c) {
                var d = Ha(),
                    c = d;
                void 0 === a.style[d] && (d = (v ? "Webkit" : Ib ? "Moz" : u ? "ms" : Gb ? "O" : null) + Ia(d), void 0 !== a.style[d] && (c = d));
                De["background-color"] = c
            }
            a = b[c] || ""
        }
        return Pm(a)
    }
    return null
};

function Qm(a, b) {
    var c = Pm(b);
    a.ra || (a.ra = Ta(a.T, function(a) {
        return Pm(a)
    }));
    Lm(a, c ? Qa(a.ra, c) : -1)
}

function Om(a) {
    return Ta(a.T, function(a, c) {
        var d = this.i.ob("DIV", {
            "class": this.h.ga() + "-colorswatch",
            style: "background-color:" + a
        });
        d.title = this.aa && this.aa[c] ? this.aa[c] : "#" == a.charAt(0) ? "RGB (" + Wj(a).join(", ") + ")" : a;
        return d
    }, a)
}

function Pm(a) {
    if (a) try {
        return jm(a).tf
    } catch (b) {}
    return null
};

function Rm(a, b) {
    Ue.call(this, a);
    this.h = b || null;
    Ye(this).U(this, "action", this.Ji)
}
t(Rm, Ue);

function Sm(a) {
    var b = Tm;
    a.h ? Nm(a.h, b) : Um(a, b)
}

function Vm(a) {
    a.h || Um(a, []);
    Jm(a.h, 7)
}
g = Rm.prototype;
g.mf = function() {
    return this.h ? this.h.mf() : null
};

function Wm(a, b) {
    a.h && Qm(a.h, b)
}
g.Da = function() {
    Rm.v.Da.call(this);
    this.h && this.h.V(this.C());
    this.C().unselectable = "on"
};
g.va = function() {
    Rm.v.va.call(this);
    this.h && (this.h.B(), this.h = null)
};
g.focus = function() {
    this.h && this.h.C().focus()
};
g.Ji = function(a) {
    a.stopPropagation();
    Fd(this, "change")
};

function Um(a, b) {
    var c = new Mm(b, null, a.i);
    Jm(c, 5);
    c.fb(32, !0);
    a.pd(c);
    a.h = c;
    a.Z && a.h.V(a.C())
}
var Tm = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function Xm(a, b) {
    Xm.v.constructor.call(this, a, b);
    this.wb("\u00a0\u00a0\u00a0")
}
var Ym;
t(Xm, lj);
g = Xm.prototype;
g.P = function() {
    Xm.v.P.call(this);
    this.j.style.fillOpacity = 1;
    this.qa(this.Oa())
};
g.Qd = "default";
g.B = function() {
    Kg(this);
    Xm.v.B.call(this)
};
g.Oa = function() {
    return this.Hb
};
g.qa = function(a) {
    this.F && 0 == I && this.Hb != a && J(new Si(this.F, "field", this.name, this.Hb, a));
    this.Hb = a;
    this.j && (this.j.style.fill = a)
};
g.mc = function() {
    var a = this.Hb,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]);
    return a
};
g.Hc = function() {
    Fg(this, this.F.s, Zm);
    var a = new Rm;
    Vm(a);
    Sm(a);
    var b = lc(),
        c = Ge(),
        d = Ie(this.j),
        e = pj(this);
    a.V(O);
    Wm(a, this.Oa());
    var f = Je(a.C());
    d.y = d.y + f.height + e.height >= b.height + c.y ? d.y - (f.height - 1) : d.y + (e.height - 1);
    this.F.s ? (d.x += e.width, d.x -= f.width, d.x < c.x && (d.x = c.x)) : d.x > b.width + c.x - f.width && (d.x = b.width + c.x - f.width);
    Jg(d.x, d.y, b, c, this.F.s);
    var h = this;
    Ym = td(a, "change", function(a) {
        a = a.target.mf() || "#000000";
        hk();
        if (h.F && h.Ka) {
            var b = h.Ka(a);
            void 0 !== b && (a = b)
        }
        null !== a && h.qa(a)
    })
};

function Zm() {
    Ym && Ad(Ym)
};
var Ki = null,
    L = null,
    ae = null,
    be = null,
    fe = [],
    vi = null,
    Pj = null,
    K = 0,
    Bi = null;

function fm(a) {
    return {
        width: a.ig,
        height: a.hg
    }
}

function ik(a) {
    for (; a.options.Kb;) a = a.options.Kb;
    var b = Th(a),
        c = b.parentNode;
    if (c) {
        var d = c.offsetWidth,
            c = c.offsetHeight;
        b.ig != d && (b.setAttribute("width", d + "px"), b.ig = d);
        b.hg != c && (b.setAttribute("height", c + "px"), b.hg = c);
        a.resize()
    }
}

function Ci() {
    var a = Ki;
    zh(Jj);
    a.yf = !1;
    Bi && (R(Bi), Bi = null);
    Jd && (R(Jd), Jd = null)
}

function Di(a) {
    if (!(a.touches && 2 <= a.touches.length)) {
        var b = Ki;
        if (b.yf) {
            var c = a.clientX - b.bb,
                d = a.clientY - b.Qa,
                e = b.Pa,
                f = b.Uf + c,
                h = b.Vf + d,
                f = Math.min(f, -e.hb),
                h = Math.min(h, -e.ib),
                f = Math.max(f, e.Y - e.hb - e.Ta),
                h = Math.max(h, e.wa - e.ib - e.Sa);
            b.Aa.set(-f - e.hb, -h - e.ib);
            Math.sqrt(c * c + d * d) > Hh && Rj();
            a.stopPropagation();
            a.preventDefault()
        }
    }
}

function Jk(a) {
    if (!Ki.options.i && !yh(a)) {
        var b = !1;
        if (27 == a.keyCode) Ch();
        else if (8 == a.keyCode || 46 == a.keyCode) a.preventDefault(), L && Zg(L) && (b = !0);
        else if (a.altKey || a.ctrlKey || a.metaKey) L && Zg(L) && ee(L) && (67 == a.keyCode ? (Ch(), Qj(L)) : 88 == a.keyCode && (Qj(L), b = !0)), 86 == a.keyCode ? vi && ui(Pj) : 90 == a.keyCode && (Ch(), Ki.Yf(a.shiftKey));
        b && (H(!0), Ch(), L.B(2 != K, !0), ae && (ze(), ae = null), H(!1))
    }
}

function wi() {
    Gj();
    Jl()
}
var $m = 0;

function li(a, b) {
    Rj();
    $m = setTimeout(function() {
        a.button = 2;
        b.nd(a)
    }, 750)
}

function Rj() {
    $m && (clearTimeout($m), $m = 0)
}

function Qj(a) {
    var b = Od(a);
    if (2 != K)
        for (var c = 0, d; d = b.childNodes[c]; c++)
            if ("next" == d.nodeName.toLowerCase()) {
                b.removeChild(d);
                break
            }
    c = a.oa();
    b.setAttribute("x", a.s ? -c.x : c.x);
    b.setAttribute("y", c.y);
    vi = b;
    Pj = a.A
}

function Ch(a) {
    hj();
    hk();
    a || (a = Ki, a.S && a.S.W && a.S.W.qd && a.S.jc.eb(null))
}

function Ek() {
    var a, b, c, d, e = fm(Th(this));
    if (this.S)
        if (0 == this.ba || 1 == this.ba) e.height -= this.S.wc();
        else if (2 == this.ba || 3 == this.ba) e.width -= this.S.yb();
    var f = qi.prototype.R - 1,
        h = e.width - f,
        f = e.height - f;
    a = Qg(this);
    if (a.length) {
        d = Kj(a[0]);
        for (b = 1; b < a.length; b++) {
            var l = Kj(a[b]);
            l.ub.x < d.ub.x && (d.ub.x = l.ub.x);
            l.Gb.x > d.Gb.x && (d.Gb.x = l.Gb.x);
            l.ub.y < d.ub.y && (d.ub.y = l.ub.y);
            l.Gb.y > d.Gb.y && (d.Gb.y = l.Gb.y)
        }
        a = d.ub.x;
        b = d.ub.y;
        c = d.Gb.x - d.ub.x;
        d = d.Gb.y - d.ub.y
    } else d = c = b = a = 0;
    var m = c * this.scale,
        l = d * this.scale,
        n = a * this.scale,
        p = b * this.scale;
    this.Aa ? (a = Math.min(n - h / 2, n + m - h), h = Math.max(n + m + h / 2, n + h), b = Math.min(p - f / 2, p + l - f), f = Math.max(p + l + f / 2, p + f)) : (h = a + c, f = b + d);
    d = 0;
    this.S && 2 == this.ba && (d = this.S.yb());
    l = 0;
    this.S && 0 == this.ba && (l = this.S.wc());
    return {
        wa: e.height,
        Y: e.width,
        Sa: f - b,
        Ta: h - a,
        Mb: -this.scrollY,
        Ca: -this.scrollX,
        ib: b,
        hb: a,
        La: l,
        Ia: d,
        vq: this.S ? this.S.yb() : 0,
        uq: this.S ? this.S.wc() : 0,
        fe: this.W ? this.W.yb() : 0,
        Jg: this.W ? this.W.wc() : 0,
        ba: this.ba
    }
}

function Fk(a) {
    if (!this.Aa) throw "Attempt to set main workspace scroll without scrollbars.";
    var b = this.Ea();
    fa(a.x) && (this.scrollX = -b.Ta * a.x - b.hb);
    fa(a.y) && (this.scrollY = -b.Sa * a.y - b.ib);
    a = this.scrollX + b.Ia;
    b = this.scrollY + b.La;
    this.translate(a, b);
    this.options.o && (this.options.o.setAttribute("x", a), this.options.o.setAttribute("y", b), u && oi(this))
}
k.console || (k.console = {
    log: function() {},
    warn: function() {}
});
k.Blockly || (k.Blockly = {});
k.Blockly.getMainWorkspace = function() {
    return Ki
};
k.Blockly.addChangeListener = function(a) {
    console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead.");
    return Ki.Eb(a)
};
V.oq = {};
V.lh = "Add Comment";
V.cj = "Please authorize this app to enable your work to be saved and to allow it to be shared by you.";
V.vh = "Change value:";
V.dj = "Chat with your collaborator by typing in this box!";
V.wh = "Clean up Blocks";
V.xh = "Collapse Blocks";
V.yh = "Collapse Block";
V.ej = "colour 1";
V.fj = "colour 2";
V.gj = "http://meyerweb.com/eric/tools/color-blend/";
V.hj = "ratio";
V.ij = "blend";
V.jj = "Blends two colours together with a given ratio (0.0 - 1.0).";
V.kj = "https://en.wikipedia.org/wiki/Color";
V.lj = "Choose a colour from the palette.";
V.mj = "http://randomcolour.com";
V.nj = "random colour";
V.oj = "Choose a colour at random.";
V.pj = "blue";
V.qj = "green";
V.rj = "http://www.december.com/html/spec/colorper.html";
V.sj = "red";
V.tj = "colour with";
V.uj = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
V.vj = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
V.wj = "break out of loop";
V.xj = "continue with next iteration of loop";
V.yj = "Break out of the containing loop.";
V.zj = "Skip the rest of this loop, and continue with the next iteration.";
V.Aj = "Warning: This block may only be used within a loop.";
V.Bj = "https://github.com/google/blockly/wiki/Loops#for-each";
V.Dj = "for each item %1 in list %2";
V.Ej = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
V.Fj = "https://github.com/google/blockly/wiki/Loops#count-with";
V.Hj = "count with %1 from %2 to %3 by %4";
V.Ij = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
V.Kj = "Add a condition to the if block.";
V.Mj = "Add a final, catch-all condition to the if block.";
V.Nj = "https://github.com/google/blockly/wiki/IfElse";
V.Pj = "Add, remove, or reorder sections to reconfigure this if block.";
V.Ah = "else";
V.Bh = "else if";
V.Ch = "if";
V.Rj = "If a value is true, then do some statements.";
V.Sj = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
V.Tj = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
V.Uj = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
V.Vj = "https://en.wikipedia.org/wiki/For_loop";
V.Pd = "do";
V.Wj = "repeat %1 times";
V.Xj = "Do some statements several times.";
V.Yj = "https://github.com/google/blockly/wiki/Loops#repeat";
V.$j = "repeat until";
V.ak = "repeat while";
V.bk = "While a value is false, then do some statements.";
V.ck = "While a value is true, then do some statements.";
V.Dh = "Delete all %1 blocks?";
V.$f = "Delete Block";
V.ag = "Delete %1 Blocks";
V.Eh = "Disable Block";
V.Fh = "Duplicate";
V.Gh = "Enable Block";
V.Hh = "Expand Blocks";
V.Ih = "Expand Block";
V.Jh = "External Inputs";
V.Kh = "Help";
V.Lh = "Inline Inputs";
V.ek = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
V.fk = "create empty list";
V.gk = "Returns a list, of length 0, containing no data records";
V.hk = "list";
V.ik = "Add, remove, or reorder sections to reconfigure this list block.";
V.jk = "https://github.com/google/blockly/wiki/Lists#create-list-with";
V.kk = "create list with";
V.nk = "Add an item to the list.";
V.pk = "Create a list with any number of items.";
V.qk = "first";
V.rk = "# from end";
V.tk = "#";
V.vk = "get";
V.wk = "get and remove";
V.zk = "last";
V.Ak = "random";
V.Bk = "remove";
V.Ck = "";
V.Dk = "Returns the first item in a list.";
V.Ek = "Returns the item at the specified position in a list. #1 is the last item.";
V.Fk = "Returns the item at the specified position in a list. #1 is the first item.";
V.Gk = "Returns the last item in a list.";
V.Hk = "Returns a random item in a list.";
V.Ik = "Removes and returns the first item in a list.";
V.Jk = "Removes and returns the item at the specified position in a list. #1 is the last item.";
V.Kk = "Removes and returns the item at the specified position in a list. #1 is the first item.";
V.Lk = "Removes and returns the last item in a list.";
V.Mk = "Removes and returns a random item in a list.";
V.Nk = "Removes the first item in a list.";
V.Ok = "Removes the item at the specified position in a list. #1 is the last item.";
V.Pk = "Removes the item at the specified position in a list. #1 is the first item.";
V.Qk = "Removes the last item in a list.";
V.Rk = "Removes a random item in a list.";
V.Sk = "to # from end";
V.Tk = "to #";
V.Uk = "to last";
V.Vk = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
V.Xk = "get sub-list from first";
V.Yk = "get sub-list from # from end";
V.Zk = "get sub-list from #";
V.$k = "";
V.al = "Creates a copy of the specified portion of a list.";
V.bl = "find first occurrence of item";
V.Mh = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
V.dl = "find last occurrence of item";
V.fl = "Returns the index of the first/last occurrence of the item in the list. Returns 0 if item is not found.";
V.Rd = "in list";
V.hl = "https://github.com/google/blockly/wiki/Lists#is-empty";
V.il = "%1 is empty";
V.jl = "Returns true if the list is empty.";
V.kl = "https://github.com/google/blockly/wiki/Lists#length-of";
V.ll = "length of %1";
V.ol = "Returns the length of a list.";
V.ql = "https://github.com/google/blockly/wiki/Lists#create-list-with";
V.rl = "create list with item %1 repeated %2 times";
V.sl = "Creates a list consisting of the given value repeated the specified number of times.";
V.ul = "https://github.com/google/blockly/wiki/Lists#in-list--set";
V.wl = "as";
V.xl = "insert at";
V.yl = "set";
V.zl = "Inserts the item at the start of a list.";
V.Al = "Inserts the item at the specified position in a list. #1 is the last item.";
V.Bl = "Inserts the item at the specified position in a list. #1 is the first item.";
V.Cl = "Append the item to the end of a list.";
V.Dl = "Inserts the item randomly in a list.";
V.El = "Sets the first item in a list.";
V.Fl = "Sets the item at the specified position in a list. #1 is the last item.";
V.Gl = "Sets the item at the specified position in a list. #1 is the first item.";
V.Hl = "Sets the last item in a list.";
V.Il = "Sets a random item in a list.";
V.Jl = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
V.Kl = "ascending";
V.Ll = "descending";
V.Ml = "sort %1 %2 %3";
V.Nl = "Sort a copy of a list.";
V.Ol = "alphabetic, ignore case";
V.Pl = "numeric";
V.Ql = "alphabetic";
V.Rl = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
V.Sl = "make list from text";
V.Tl = "make text from list";
V.Ul = "Join a list of texts into one text, separated by a delimiter.";
V.Vl = "Split text into a list of texts, breaking at each delimiter.";
V.Wl = "with delimiter";
V.Xl = "false";
V.Yl = "https://github.com/google/blockly/wiki/Logic#values";
V.Zl = "Returns either true or false.";
V.$l = "true";
V.am = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
V.bm = "Return true if both inputs equal each other.";
V.cm = "Return true if the first input is greater than the second input.";
V.dm = "Return true if the first input is greater than or equal to the second input.";
V.em = "Return true if the first input is smaller than the second input.";
V.fm = "Return true if the first input is smaller than or equal to the second input.";
V.gm = "Return true if both inputs are not equal to each other.";
V.hm = "https://github.com/google/blockly/wiki/Logic#not";
V.im = "not %1";
V.jm = "Returns true if the input is false. Returns false if the input is true.";
V.lm = "null";
V.mm = "https://en.wikipedia.org/wiki/Nullable_type";
V.nm = "Returns null.";
V.om = "and";
V.pm = "https://github.com/google/blockly/wiki/Logic#logical-operations";
V.qm = "or";
V.rm = "Return true if both inputs are true.";
V.sm = "Return true if at least one of the inputs is true.";
V.tm = "test";
V.um = "https://en.wikipedia.org/wiki/%3F:";
V.vm = "if false";
V.wm = "if true";
V.xm = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
V.ym = "+";
V.zm = "https://en.wikipedia.org/wiki/Arithmetic";
V.Am = "Return the sum of the two numbers.";
V.Bm = "Return the quotient of the two numbers.";
V.Cm = "Return the difference of the two numbers.";
V.Dm = "Return the product of the two numbers.";
V.Em = "Return the first number raised to the power of the second number.";
V.Fm = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
V.Gm = "change %1 by %2";
V.Im = "Add a number to variable '%1'.";
V.Jm = "https://en.wikipedia.org/wiki/Mathematical_constant";
V.Km = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
V.Lm = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";
V.Mm = "constrain %1 low %2 high %3";
V.Nm = "Constrain a number to be between the specified limits (inclusive).";
V.Om = "\u00f7";
V.Pm = "is divisible by";
V.Qm = "is even";
V.Rm = "is negative";
V.Sm = "is odd";
V.Tm = "is positive";
V.Um = "is prime";
V.Vm = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
V.Wm = "is whole";
V.Xm = "https://en.wikipedia.org/wiki/Modulo_operation";
V.Ym = "remainder of %1 \u00f7 %2";
V.Zm = "Return the remainder from dividing the two numbers.";
V.$m = "\u00d7";
V.an = "https://en.wikipedia.org/wiki/Number";
V.bn = "A number.";
V.cn = "";
V.dn = "average of list";
V.fn = "max of list";
V.gn = "median of list";
V.hn = "min of list";
V.jn = "modes of list";
V.kn = "random item of list";
V.ln = "standard deviation of list";
V.mn = "sum of list";
V.nn = "Return the average (arithmetic mean) of the numeric values in the list.";
V.on = "Return the largest number in the list.";
V.pn = "Return the median number in the list.";
V.qn = "Return the smallest number in the list.";
V.rn = "Return a list of the most common item(s) in the list.";
V.sn = "Return a random element from the list.";
V.tn = "Return the standard deviation of the list.";
V.un = "Return the sum of all the numbers in the list.";
V.vn = "^";
V.wn = "https://en.wikipedia.org/wiki/Random_number_generation";
V.xn = "random fraction";
V.yn = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
V.zn = "https://en.wikipedia.org/wiki/Random_number_generation";
V.An = "random integer from %1 to %2";
V.Bn = "Return a random integer between the two specified limits, inclusive.";
V.Cn = "https://en.wikipedia.org/wiki/Rounding";
V.Dn = "round";
V.En = "round down";
V.Fn = "round up";
V.Gn = "Round a number up or down.";
V.Hn = "https://en.wikipedia.org/wiki/Square_root";
V.In = "absolute";
V.Jn = "square root";
V.Kn = "Return the absolute value of a number.";
V.Ln = "Return e to the power of a number.";
V.Mn = "Return the natural logarithm of a number.";
V.Nn = "Return the base 10 logarithm of a number.";
V.On = "Return the negation of a number.";
V.Pn = "Return 10 to the power of a number.";
V.Qn = "Return the square root of a number.";
V.Rn = "-";
V.Sn = "acos";
V.Tn = "asin";
V.Un = "atan";
V.Vn = "cos";
V.Wn = "https://en.wikipedia.org/wiki/Trigonometric_functions";
V.Xn = "sin";
V.Yn = "tan";
V.Zn = "Return the arccosine of a number.";
V.$n = "Return the arcsine of a number.";
V.ao = "Return the arctangent of a number.";
V.bo = "Return the cosine of a degree (not radian).";
V.co = "Return the sine of a degree (not radian).";
V.eo = "Return the tangent of a degree (not radian).";
V.ho = "Me";
V.Se = "New variable...";
V.Nh = "New variable name:";
V.io = "";
V.jo = "allow statements";
V.lo = "with:";
V.mo = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
V.no = "Run the user-defined function '%1'.";
V.oo = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
V.po = "Run the user-defined function '%1' and use its output.";
V.qo = "with:";
V.so = "Create '%1'";
V.Oh = "Describe this function...";
V.Ph = "";
V.to = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
V.Qh = "do something";
V.Rh = "to";
V.uo = "Creates a function with no output.";
V.xo = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
V.zo = "return";
V.Bo = "Creates a function with an output.";
V.Co = "Warning: This function has duplicate parameters.";
V.Do = "Highlight function definition";
V.Eo = "http://c2.com/cgi/wiki?GuardClause";
V.Fo = "If a value is true, then return a second value.";
V.Go = "Warning: This block may be used only within a function definition.";
V.Ho = "input name:";
V.Io = "Add an input to the function.";
V.Jo = "inputs";
V.Ko = "Add, remove, or reorder inputs to this function.";
V.Sh = "Redo";
V.Th = "Remove Comment";
V.Te = "Rename variable...";
V.Uh = "Rename all '%1' variables to:";
V.Lo = "append text";
V.Mo = "https://github.com/google/blockly/wiki/Text#text-modification";
V.No = "to";
V.Oo = "Append some text to variable '%1'.";
V.Qo = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
V.Ro = "to lower case";
V.So = "to Title Case";
V.To = "to UPPER CASE";
V.Uo = "Return a copy of the text in a different case.";
V.Vo = "get first letter";
V.Wo = "get letter # from end";
V.Xo = "get letter #";
V.Yo = "https://github.com/google/blockly/wiki/Text#extracting-text";
V.Zo = "in text";
V.$o = "get last letter";
V.ap = "get random letter";
V.bp = "";
V.cp = "Returns the letter at the specified position.";
V.fp = "Add an item to the text.";
V.gp = "join";
V.hp = "Add, remove, or reorder sections to reconfigure this text block.";
V.ip = "to letter # from end";
V.jp = "to letter #";
V.kp = "to last letter";
V.lp = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
V.mp = "in text";
V.np = "get substring from first letter";
V.op = "get substring from letter # from end";
V.pp = "get substring from letter #";
V.qp = "";
V.rp = "Returns a specified portion of the text.";
V.sp = "https://github.com/google/blockly/wiki/Text#finding-text";
V.tp = "in text";
V.up = "find first occurrence of text";
V.vp = "find last occurrence of text";
V.wp = "";
V.xp = "Returns the index of the first/last occurrence of the first text in the second text. Returns 0 if text is not found.";
V.yp = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
V.zp = "%1 is empty";
V.Ap = "Returns true if the provided text is empty.";
V.Bp = "https://github.com/google/blockly/wiki/Text#text-creation";
V.Cp = "create text with";
V.Dp = "Create a piece of text by joining together any number of items.";
V.Ep = "https://github.com/google/blockly/wiki/Text#text-modification";
V.Fp = "length of %1";
V.Gp = "Returns the number of letters (including spaces) in the provided text.";
V.Hp = "https://github.com/google/blockly/wiki/Text#printing-text";
V.Ip = "print %1";
V.Jp = "Print the specified text, number or other value.";
V.Kp = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
V.Lp = "Prompt for user for a number.";
V.Mp = "Prompt for user for some text.";
V.Np = "prompt for number with message";
V.Op = "prompt for text with message";
V.Pp = "https://en.wikipedia.org/wiki/String_(computer_science)";
V.Qp = "A letter, word, or line of text.";
V.Rp = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
V.Sp = "trim spaces from both sides of";
V.Tp = "trim spaces from left side of";
V.Vp = "trim spaces from right side of";
V.Wp = "Return a copy of the text with spaces removed from one or both ends.";
V.Xp = "Today";
V.Vh = "Undo";
V.Pc = "item";
V.Yp = "Create 'set %1'";
V.Zp = "https://github.com/google/blockly/wiki/Variables#get";
V.$p = "Returns the value of this variable.";
V.aq = "set %1 to %2";
V.bq = "Create 'get %1'";
V.cq = "https://github.com/google/blockly/wiki/Variables#set";
V.eq = "Sets this variable to be equal to the input.";
V.Ao = V.Rh;
V.Oj = V.Ch;
V.Zj = V.Pd;
V.Qj = V.Pd;
V.Lj = V.Ah;
V.yo = V.Qh;
V.Wk = V.Rd;
V.yk = V.Rd;
V.Hm = V.Pc;
V.wo = V.Ph;
V.Jj = V.Bh;
V.xk = V.Mh;
V.Cj = V.Pd;
V.vl = V.Rd;
V.Gj = V.Pd;
V.lk = V.Pc;
V.Po = V.Pc;
V.ep = V.Pc;
V.cl = V.Rd;
V.vo = V.Oh;

function an(a, b) {
    var c;
    c = a.className;
    for (var d = c = r(c) && c.match(/\S+/g) || [], e = ab(arguments, 1), f = 0; f < e.length; f++) Va(d, e[f]) || d.push(e[f]);
    a.className = c.join(" ")
};
var bn = {
        ace: "\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",
        af: "Afrikaans",
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        az: "Az\u0259rbaycanca",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        br: "Brezhoneg",
        ca: "Catal\u00e0",
        cdo: "\u95a9\u6771\u8a9e",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        frr: "Frasch",
        gl: "Galego",
        hak: "\u5ba2\u5bb6\u8a71",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hrx: "Hunsrik",
        hu: "Magyar",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
        km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
        ko: "\ud55c\uad6d\uc5b4",
        ksh: "Ripoar\u0117sch",
        ky: "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
        la: "Latine",
        lb: "L\u00ebtzebuergesch",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        mg: "Malagasy",
        ml: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
        mk: "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
        mr: "\u092e\u0930\u093e\u0920\u0940",
        ms: "Bahasa Melayu",
        mzn: "\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        oc: "Lenga d'\u00f2c",
        pa: "\u092a\u0902\u091c\u093e\u092c\u0940",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        ps: "\u067e\u069a\u062a\u0648",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sco: "Scots",
        si: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
        sk: "Sloven\u010dina",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        sw: "Kishwahili",
        ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tl: "Tagalog",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7c21\u9ad4\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    cn = "ace ar fa he mzn ps".split(" "),
    Sc = window.BlocklyGamesLang,
    dn = window.BlocklyGamesLanguages,
    Uc = !!window.location.pathname.match(/\.html$/),
    U = null;

function en(a, b, c) {
    var d = Number;
    a = (a = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)"))) ? decodeURIComponent(a[1].replace(/\+/g, "%20")) : "NaN";
    d = d(a);
    return isNaN(d) ? b : cc(b, d, c)
}
var F = en("level", 1, 10);

function fn() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != cn.indexOf(Sc) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", Sc);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < dn.length; c++) {
            var d = dn[c];
            b.push([bn[d], d])
        }
        b.sort(function(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var e = b[c],
                d = e[1],
                e = new Option(e[0], d);
            d == Sc && (e.selected = !0);
            a.options.add(e)
        }
        1 >= a.options.length && (a.style.display =
            "none")
    }
    for (c = 1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!gn(c), a && b && an(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(hn, 1)
}

function gn(a) {
    var b = jn,
        c;
    try {
        c = window.localStorage[b + a]
    } catch (d) {}
    return c
}

function X(a) {
    var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    return null === b ? "[Unknown message: " + a + "]" : b
}

function kn(a, b) {
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function hn() {
    if (!Uc) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function() {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
var Z = {
    Rc: null,
    P: function() {
        fn();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = X("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = X("Games_linkAlert"), BlocklyStorage.HASH_ERROR = X("Games_hashError"), BlocklyStorage.XML_ERROR = X("Games_xmlError"), BlocklyStorage.alert = Y.Xi, a && kn(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Z.$h, !0)
    },
    Ii: function(a, b) {
        if ("BlocklyStorage" in
            window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var c = null;
            try {
                c = window.sessionStorage.g
            } catch (f) {}
            c && delete window.sessionStorage.g;
            var d = gn(F),
                e = b && gn(F - 1);
            (c = c || d || e || a) && Z.fh(c)
        }
    },
    fh: function(a) {
        Z.Rc ? Z.Rc.setValue(a, -1) : (a = bh(a), U.clear(), ch(a, U), U.kg())
    },
    Lg: function() {
        if (Z.Rc) var a = Z.Rc.getValue();
        else a = Vg(U), a = ah(a);
        return a
    },
    Ti: function() {
        window.localStorage && (window.localStorage[jn + F] = Z.Lg())
    },
    we: function() {
        window.location = (Uc ? "index.html" :
            "./") + "?lang=" + Sc
    },
    $h: function() {
        if (window.sessionStorage) {
            if (Z.Rc) var a = Z.Rc.getValue();
            else a = Vg(U), a = ah(a);
            window.sessionStorage.g = a
        }
        var a = document.getElementById("languageMenu"),
            a = encodeURIComponent(a.options[a.selectedIndex].value),
            b = window.location.search,
            b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    ve: function(a) {
        if (a) {
            var b =
                a.match(/^block_id_([^']+)$/);
            b && (a = b[1])
        }
        ti(a)
    },
    Hi: function(a, b) {
        var c = document.getElementById(a);
        c.firstChild || (c = Bk(c, {
            rtl: -1 != cn.indexOf(Sc),
            readOnly: !0
        }), "string" != typeof b && (b = b.join("")), ch(bh(b), c))
    },
    Yi: function(a) {
        return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "")
    },
    kb: function(a) {
        if ("click" == a.type && "touchend" == Z.kb.h && Z.kb.g + 2E3 > Date.now() || Z.kb.h == a.type && Z.kb.g + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        Z.kb.h = a.type;
        Z.kb.g = Date.now();
        return !1
    }
};
Z.kb.h = null;
Z.kb.g = 0;
Z.Fi = function() {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a)
};
Z.Gi = function() {
    var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a)
};
window.BlocklyInterface = Z;
Z.setCode = Z.fh;
Z.getCode = Z.Lg;
var Y = {
    Ac: !1,
    Dg: null,
    ee: null,
    Ld: function(a, b, c, d, e, f) {
        function h() {
            Y.Ac && (l.style.visibility = "visible", l.style.zIndex = 10, m.style.visibility = "hidden")
        }
        Y.Ac && Y.sb(!1);
        Ch(!0);
        Y.Ac = !0;
        Y.Dg = b;
        Y.ee = f;
        var l = document.getElementById("dialog");
        f = document.getElementById("dialogShadow");
        var m = document.getElementById("dialogBorder"),
            n;
        for (n in e) l.style[n] = e[n];
        d && (f.style.visibility = "visible", f.style.opacity = .3, f.style.zIndex = 9, d = document.createElement("div"), d.id = "dialogHeader", l.appendChild(d), Y.ef = Q(d, "mousedown",
            null, Y.li));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (Y.De(b, !1, .2), Y.De(l, !0, .8), setTimeout(h, 175)) : h()
    },
    Eg: 0,
    Fg: 0,
    li: function(a) {
        Y.hf();
        if (!xh(a)) {
            var b = document.getElementById("dialog");
            Y.Eg = b.offsetLeft - a.clientX;
            Y.Fg = b.offsetTop - a.clientY;
            Y.gf = Q(document, "mouseup", null, Y.hf);
            Y.ff = Q(document, "mousemove", null, Y.mi);
            a.stopPropagation()
        }
    },
    mi: function(a) {
        var b = document.getElementById("dialog"),
            c = Y.Eg + a.clientX;
        a = Y.Fg + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight -
            b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    hf: function() {
        Y.gf && (R(Y.gf), Y.gf = null);
        Y.ff && (R(Y.ff), Y.ff = null)
    },
    sb: function(a) {
        function b() {
            d.style.zIndex = -1;
            d.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (Y.Ac) {
            Y.hf();
            Y.ef && (R(Y.ef), Y.ef = null);
            Y.Ac = !1;
            Y.ee && Y.ee();
            Y.ee = null;
            var c = !1 === a ? null : Y.Dg;
            a = document.getElementById("dialog");
            var d = document.getElementById("dialogShadow");
            d.style.opacity = 0;
            c ? (Y.De(a, !1, .8), Y.De(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    De: function(a, b, c) {
        function d() {
            e.style.width = f.width + "px";
            e.style.height = f.height + "px";
            e.style.left = f.x + "px";
            e.style.top = f.y + "px";
            e.style.opacity = c
        }
        if (a) {
            var e = document.getElementById("dialogBorder"),
                f = Y.Kg(a);
            b ? (e.className = "dialogAnimate", setTimeout(d, 1)) : (e.className = "", d());
            e.style.visibility = "visible"
        }
    },
    Kg: function(a) {
        var b = Ie(a);
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth);
        return b
    },
    Xi: function(a) {
        var b = document.getElementById("containerStorage");
        b.textContent = "";
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("p");
            d.appendChild(document.createTextNode(a[c]));
            b.appendChild(d)
        }
        b = document.getElementById("dialogStorage");
        a = document.getElementById("linkButton");
        Y.Ld(b, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, Y.ih);
        Y.hh()
    },
    gg: function() {
        if (!gn(F))
            if (Y.Ac || 0 != K) setTimeout(Y.gg, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", Y.sb, !0);
                b.addEventListener("touchend", Y.sb, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Z.we, !0);
                b.addEventListener("touchend", Z.we, !0);
                Y.Ld(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown",
                        Y.fg, !0)
                });
                document.body.addEventListener("keydown", Y.fg, !0)
            }
    },
    bi: function() {
        var a = document.getElementById("dialogDone");
        if (U) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = Lk(),
                c = Z.Yi(c),
                d = c.split("\n").length,
                e = document.getElementById("containerCode");
            e.textContent = c;
            "function" == typeof prettyPrintOne && (c = e.innerHTML, c = prettyPrintOne(c, "js"), e.innerHTML = c);
            c = 1 == d ? X("Games_linesOfCode1") : X("Games_linesOfCode2").replace("%1", d);
            b.appendChild(document.createTextNode(c))
        }
        c =
            10 > F ? X("Games_nextLevel").replace("%1", F + 1) : X("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", Y.sb, !0);
        b.addEventListener("touchend", Y.sb, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Z.Df, !0);
        b.addEventListener("touchend", Z.Df, !0);
        Y.Ld(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", Y.ng, !0)
        });
        document.body.addEventListener("keydown", Y.ng, !0);
        document.getElementById("dialogDoneText").textContent =
            c
    },
    Cg: function(a) {
        !Y.Ac || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (Y.sb(!0), a.stopPropagation(), a.preventDefault())
    },
    hh: function() {
        document.body.addEventListener("keydown", Y.Cg, !0)
    },
    ih: function() {
        document.body.removeEventListener("keydown", Y.Cg, !0)
    },
    ng: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.sb(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Z.Df()
    },
    fg: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) Y.sb(!0), a.stopPropagation(), a.preventDefault(), 27 !=
            a.keyCode && Z.we()
    }
};
window.BlocklyDialogs = Y;
Y.hideDialog = Y.sb;
// Copyright 2012 Google Inc.  Apache License 2.0
var W = new Kk;
Pk("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
W.bb = 0;
W.gq = 1.1;
W.h = 1.2;
W.g = 2;
W.cg = 3;
W.Oc = 3;
W.Ub = 4.1;
W.qq = 4.2;
W.nq = 4.3;
W.H = 4.4;
W.jq = 4.5;
W.rq = 4.6;
W.Sd = 4.7;
W.Td = 5.1;
W.J = 5.2;
W.fq = 5.3;
W.iq = 6.1;
W.w = 6.2;
W.nc = 7;
W.bj = 8;
W.Vd = 8;
W.dg = 8;
W.Ud = 9;
W.Qa = 10;
W.pc = 11;
W.Vb = 12;
W.D = 13;
W.G = 14;
W.Nc = 15;
W.Pa = 16;
W.qc = 17;
W.hq = 99;
W.aa = [
    [W.g, W.h],
    [W.g, W.g],
    [W.h, W.h],
    [W.h, W.g],
    [W.H, W.H],
    [W.J, W.J],
    [W.w, W.w],
    [W.D, W.D],
    [W.G, W.G]
];
W.Ha = !0;
W.P = function(a) {
    W.i = Object.create(null);
    W.ra = Object.create(null);
    W.j ? W.j.reset() : W.j = new Qk(W.o);
    var b = [];
    a = qk(a);
    if (a.length) {
        for (var c = 0; c < a.length; c++) b[c] = W.j.getName(a[c], "VARIABLE");
        W.i.variables = "var " + b.join(", ") + ";"
    }
};
W.finish = function(a) {
    var b = [],
        c;
    for (c in W.i) b.push(W.i[c]);
    delete W.i;
    delete W.ra;
    W.j.reset();
    return b.join("\n\n") + "\n\n\n" + a
};
W.L = function(a) {
    return a + ";\n"
};
W.sq = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
W.T = function(a, b) {
    var c = "";
    if (!a.K || !a.K.M) {
        var d = a.ke();
        (d = kj(d, this.zh - 3)) && (c = a.qc ? c + ("/**\n" + Nk(d + "\n", " * ") + " */\n") : c + Nk(d + "\n", "// "));
        for (var e = 0; e < a.h.length; e++)
            if (1 == a.h[e].type) {
                var f = G(a.h[e].I);
                if (f) {
                    for (var d = [], f = f.Wa(), h = 0; h < f.length; h++) {
                        var l = f[h].ke();
                        l && d.push(l)
                    }
                    d.length && d.push("");
                    (d = d.join("\n")) && (c += Nk(d, "// "))
                }
            }
    }
    e = Mk(W, a.g && G(a.g));
    return c + b + e
};
Pi.maze_moveForward = {
    P: function() {
        var a = {
            message0: X("Maze_moveForward"),
            previousStatement: null,
            nextStatement: null,
            colour: 80,
            tooltip: X("Maze_moveForwardTooltip")
        };
        void 0 !== a.colour && this.lc(a.colour);
        for (var b = 0; void 0 !== a["message" + b];) {
            var c = a["args" + b] || [],
                d = a["lastDummyAlign" + b],
                e = [],
                f = a["message" + b].split("");
            f.push("");
            for (var h = 0, l = [], m = null, n = 0; n < f.length; n++) {
                var p = f[n];
                0 == h ? "%" == p ? h = 1 : l.push(p) : 1 == h ? "%" == p ? (l.push(p), h = 0) : "0" <= p && "9" >= p ? (h = 2, m = p, (p = l.join("")) && e.push(p), l.length = 0) : (l.push("%",
                    p), h = 0) : 2 == h && ("0" <= p && "9" >= p ? m += p : (e.push(parseInt(m, 10)), n--, h = 0))
            }(p = l.join("")) && e.push(p);
            l = 0;
            f = [];
            for (h = 0; h < e.length; h++) m = e[h], "number" == typeof m ? (l++, f.push(c[m - 1])) : (m = m.trim()) && f.push(m);
            !f.length || "string" != typeof f[f.length - 1] && 0 != f[f.length - 1].type.indexOf("field_") || (h = {
                type: "input_dummy"
            }, d && (h.align = d), f.push(h));
            d = {
                LEFT: -1,
                RIGHT: 1,
                CENTRE: 0
            };
            c = [];
            for (h = 0; h < f.length; h++)
                if (l = f[h], "string" == typeof l) c.push([l, void 0]);
                else {
                    e = m = null;
                    do switch (n = !1, l.type) {
                        case "input_value":
                            e = this.Va(1,
                                l.name);
                            break;
                        case "input_statement":
                            e = this.Va(3, l.name);
                            break;
                        case "input_dummy":
                            e = this.Va(5, l.name || "");
                            break;
                        case "field_label":
                            m = new qj(l.text, l["class"]);
                            break;
                        case "field_input":
                            m = new Mj(l.text);
                            "boolean" == typeof l.spellcheck && (m.gh = l.spellcheck);
                            break;
                        case "field_angle":
                            m = new Zk(l.angle);
                            break;
                        case "field_checkbox":
                            m = new rm(l.checked ? "TRUE" : "FALSE");
                            break;
                        case "field_colour":
                            m = new Xm(l.colour);
                            break;
                        case "field_variable":
                            m = new rk(l.variable);
                            break;
                        case "field_dropdown":
                            m = new jk(l.options);
                            break;
                        case "field_image":
                            m = new qm(l.src, l.width, l.height, l.alt);
                            break;
                        case "field_number":
                            m = new pm(l.value, l.min, l.max, l.precision);
                            break;
                        case "field_date":
                            if (Id.Re) {
                                m = new Id.Re(l.date);
                                break
                            }
                        default:
                            l.alt && (l = l.alt, n = !0)
                    }
                    while (n);
                    if (m) c.push([m, l.name]);
                    else if (e) {
                        if (l.check) {
                            if (!e.I) throw "This input does not have a connection.";
                            ie(e.I, l.check)
                        }
                        l.align && (m = e, m.align = d[l.align], m.g.O && m.g.V());
                        for (l = 0; l < c.length; l++) sj(e, c[l][0], c[l][1]);
                        c.length = 0
                    }
                }
            b++
        }
        void 0 !== a.inputsInline && this.jd(a.inputsInline);
        void 0 !== a.output && this.Rf(!0, a.output);
        void 0 !== a.previousStatement && this.Fc(!0, a.previousStatement);
        void 0 !== a.nextStatement && this.kd(!0, a.nextStatement);
        void 0 !== a.tooltip && (this.$a = a.tooltip);
        void 0 !== a.helpUrl && (this.L = a.helpUrl)
    }
};
W.maze_moveForward = function(a) {
    return "moveForward('block_id_" + a.id + "');\n"
};
Pi.maze_turn = {
    P: function() {
        var a = [
            [X("Maze_turnLeft"), "turnLeft"],
            [X("Maze_turnRight"), "turnRight"]
        ];
        a[0][0] += " \u21ba";
        a[1][0] += " \u21bb";
        this.lc(170);
        sj(this.Va(5, ""), new jk(a), "DIR");
        this.Fc(!0);
        this.kd(!0);
        this.$a = X("Maze_turnTooltip")
    }
};
W.maze_turn = function(a) {
    return Aj(a) + "('block_id_" + a.id + "');\n"
};
Pi.maze_if = {
    P: function() {
        var a = [
            [X("Maze_pathAhead"), "isPathForward"],
            [X("Maze_pathLeft"), "isPathLeft"],
            [X("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.lc(210);
        sj(this.Va(5, ""), new jk(a), "DIR");
        sj(this.Va(3, "DO"), X("Maze_doCode"));
        this.$a = X("Maze_ifTooltip");
        this.Fc(!0);
        this.kd(!0)
    }
};
W.maze_if = function(a) {
    var b = Aj(a) + "('block_id_" + a.id + "')";
    a = Ok(a, "DO");
    return "if (" + b + ") {\n" + a + "}\n"
};
Pi.maze_ifElse = {
    P: function() {
        var a = [
            [X("Maze_pathAhead"), "isPathForward"],
            [X("Maze_pathLeft"), "isPathLeft"],
            [X("Maze_pathRight"), "isPathRight"]
        ];
        a[1][0] += " \u21ba";
        a[2][0] += " \u21bb";
        this.lc(210);
        sj(this.Va(5, ""), new jk(a), "DIR");
        sj(this.Va(3, "DO"), X("Maze_doCode"));
        sj(this.Va(3, "ELSE"), X("Maze_elseCode"));
        this.$a = X("Maze_ifelseTooltip");
        this.Fc(!0);
        this.kd(!0)
    }
};
W.maze_ifElse = function(a) {
    var b = Aj(a) + "('block_id_" + a.id + "')",
        c = Ok(a, "DO");
    a = Ok(a, "ELSE");
    return "if (" + b + ") {\n" + c + "} else {\n" + a + "}\n"
};
Pi.maze_forever = {
    P: function() {
        this.lc(120);
        sj(sj(this.Va(5, ""), X("Maze_repeatUntil")), new qm(ln.Ce, 12, 16));
        sj(this.Va(3, "DO"), X("Maze_doCode"));
        this.Fc(!0);
        this.$a = X("Maze_whileTooltip")
    }
};
W.maze_forever = function(a) {
    return "while (notDone()) {\n" + Ok(a, "DO") + "}\n"
};
var jn = "maze";
Z.Df = function() {
    10 > F ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Sc + "&level=" + (F + 1) + "&skin=" + Tc : Z.we()
};
var mn = [void 0, Infinity, Infinity, 2, 10, 11, 6, 5, 7, 4, 6][F],
    nn = [{
        ld: "maze/mikiii.png",
        Wf: "maze/h1.png",
        Ce: "maze/min.png",
        background: "maze/clubf.jpg",
        zd: !1,
        Cf: "#000",
        Zf: ["maze/intalnire.mp3", "maze/win.ogg"],
        $e: ["maze/fail.mp3", "maze/fail_pegman.ogg"],
        ae: 1
    }, {
        ld: "maze/minii.png",
        Wf: "maze/ha1.png",
        Ce: "maze/markrmiki.png",
        background: "maze/backg.jpg",
        zd: !1,
        Cf: "#fff",
        Zf: ["maze/intalnire.mp3", "maze/win.ogg"],
        $e: ["maze/fail.mp3", "maze/fail_astro.ogg"],
        ae: 2
    }, {
        ld: "maze/mikmin.png",
        Wf: "maze/hy.png",
        Ce: "maze/minf.png",
        background: "maze/backm.jpg",
        zd: !1,
        Cf: "#000",
        Zf: ["maze/titanic.wav", "maze/win.ogg"],
        $e: ["maze/fail.mp3", "maze/fail_panda.ogg"],
        ae: 3

		 }, {
        ld: "maze/miki2.png",
        Wf: "maze/ha11.png",
        Ce: "maze/markmiki.png",
        background: "maze/back3.jpg",
        zd: !1,
        Cf: "#000",
        Zf: ["maze/will.wav", "maze/win.ogg"],
        $e: ["maze/fail.mp3", "maze/fail_panda.ogg"],
        ae: 3
    }],
    Tc = en("skin", 0, nn.length),
    ln = nn[Tc],
    on = [void 0, [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1,3, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [2, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 3, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 2, 1, 1,0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0],
            [0, 0, 1, 0, 0, 0, 1, 0],
            [2, 1, 1, 1, 1, 1, 1, 3],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 1, 0, 0],
            [0, 2, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0],
            [0, 2, 1, 1, 0, 0, 0, 0]
        ],
        [
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 1, 0, 0],
            [0, 3, 1, 1, 0, 1, 0, 0],
            [0, 0, 0, 0,
                0, 1, 0, 0
            ],
            [0, 2, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 0, 0],
            [0, 2, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 3, 0, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 1, 1, 1, 0, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0],
            [2, 1, 1, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0, 0],
            [0, 2, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 0, 1, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 3, 1, 0]
        ],
        [
            [0, 2, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [1, 1, 0, 0, 0, 1, 0, 0],
            [1, 1, 0, 0, 1, 1, 1, 0],
            [0, 0, 0, 0, 1, 0, 3, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]
    ][F],
    pn = on.length,
    qn = on[0].length,
    rn = 50 * qn,
    sn = 50 * pn,
    tn = 0,
    un = [],
    vn = {
        10010: [4, 0],
        10001: [3, 3],
        11E3: [0, 1],
        10100: [0, 2],
        11010: [4, 1],
        10101: [3, 2],
        10110: [0, 0],
        10011: [2, 0],
        11001: [4, 2],
        11100: [2, 3],
        11110: [1, 1],
        10111: [1, 0],
        11011: [2, 1],
        11101: [1, 2],
        11111: [2, 2],
        null0: [4, 3],
        null1: [3, 0],
        null2: [3, 1],
        null3: [0, 3],
        null4: [1, 3]
    };

function wn() {
    function a(a, b) {
        return 0 > a || a >= qn || 0 > b || b >= pn ? "0" : 0 == on[b][a] ? "0" : "1"
    }
    var b = document.getElementById("svgMaze"),
        c = 50 * Math.max(pn, qn);
    b.setAttribute("viewBox", "0 0 " + c + " " + c);
    c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    c.setAttribute("width", rn);
    c.setAttribute("height", sn);
    c.setAttribute("fill", "#F1EEE7");
    c.setAttribute("stroke-width", 1);
    c.setAttribute("stroke", "#CCB");
    b.appendChild(c);
    if (ln.background) {
        var d = document.createElementNS("http://www.w3.org/2000/svg", "image");
        d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", ln.background);
        d.setAttribute("height", sn);
        d.setAttribute("width", rn);
        d.setAttribute("x", 0);
        d.setAttribute("y", 0);
        b.appendChild(d)
    }
    if (ln.zd) {
        for (c = 0; c < pn; c++) {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
            e.setAttribute("y1", 50 * c + 25.5);
            e.setAttribute("x2", rn);
            e.setAttribute("y2", 50 * c + 25.5);
            e.setAttribute("stroke", ln.zd);
            e.setAttribute("stroke-width", 1);
            b.appendChild(e)
        }
        for (c = 0; c < qn; c++) e = document.createElementNS("http://www.w3.org/2000/svg",
            "line"), e.setAttribute("x1", 50 * c + 25.5), e.setAttribute("x2", 50 * c + 25.5), e.setAttribute("y2", sn), e.setAttribute("stroke", ln.zd), e.setAttribute("stroke-width", 1), b.appendChild(e)
    }
    for (e = c = 0; e < pn; e++)
        for (var f = 0; f < qn; f++) {
            d = a(f, e) + a(f, e - 1) + a(f + 1, e) + a(f, e + 1) + a(f - 1, e);
            vn[d] || (d = "00000" == d && .3 < Math.random() ? "null0" : "null" + Math.floor(1 + 4 * Math.random()));
            var h = vn[d][0],
                l = vn[d][1],
                m = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
            m.setAttribute("id", "tileClipPath" + c);
            d = document.createElementNS("http://www.w3.org/2000/svg",
                "rect");
            d.setAttribute("width", 50);
            d.setAttribute("height", 50);
            d.setAttribute("x", 50 * f);
            d.setAttribute("y", 50 * e);
            m.appendChild(d);
            b.appendChild(m);
            d = document.createElementNS("http://www.w3.org/2000/svg", "image");
            d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", ln.Wf);
            d.setAttribute("height", 200);
            d.setAttribute("width", 250);
            d.setAttribute("clip-path", "url(#tileClipPath" + c + ")");
            d.setAttribute("x", 50 * (f - h));
            d.setAttribute("y", 50 * (e - l));
            b.appendChild(d);
            c++
        }
    c = document.createElementNS("http://www.w3.org/2000/svg",
        "image");
    c.setAttribute("id", "finish");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", ln.Ce);
    c.setAttribute("height", 34);
    c.setAttribute("width", 20);
    b.appendChild(c);
    c = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    c.setAttribute("id", "pegmanClipPath");
    d = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    d.setAttribute("id", "clipRect");
    d.setAttribute("width", 49);
    d.setAttribute("height", 52);
    c.appendChild(d);
    b.appendChild(c);
    c = document.createElementNS("http://www.w3.org/2000/svg",
        "image");
    c.setAttribute("id", "pegman");
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", ln.ld);
    c.setAttribute("height", 52);
    c.setAttribute("width", 1029);
    c.setAttribute("clip-path", "url(#pegmanClipPath)");
    b.appendChild(c)
}

function xn(a) {
    if (!(a && "ui" == a.type || 0 != K || 1 == tn || gn(F))) {
        a = -1 != cn.indexOf(Sc);
        var b = ah(Vg(U)),
            c = Qg(U.W.u, !0),
            d = null,
            e = null,
            f = null;
        if (1 == F) 2 > U.Qb().length ? (d = document.getElementById("dialogHelpStack"), f = {
            width: "370px",
            top: "130px"
        }, f[a ? "right" : "left"] = "215px", e = c[0].m) : (c = Qg(U, !0), 1 < c.length ? (Z.Hi("sampleOneTopBlock", '<xml>;<block type="maze_moveForward" x="10" y="10">;<next>;<block type="maze_moveForward"></block>;</next>;</block>;</xml>'.split(";")), d = document.getElementById("dialogHelpOneTopBlock"),
            f = {
                width: "360px",
                top: "120px"
            }, f[a ? "right" : "left"] = "225px", e = c[0].m) : 0 == tn && (d = document.getElementById("dialogHelpRun"), f = {
            width: "360px",
            top: "410px"
        }, f[a ? "right" : "left"] = "400px", e = document.getElementById("runButton")));
        else if (2 == F) 0 != tn && "none" == document.getElementById("runButton").style.display && (d = document.getElementById("dialogHelpReset"), f = {
            width: "360px",
            top: "410px"
        }, f[a ? "right" : "left"] = "400px", e = document.getElementById("resetButton"));
        else if (3 == F) - 1 == b.indexOf("maze_forever") && (0 == Sg(U) ? (d =
            document.getElementById("dialogHelpCapacity"), f = {
                width: "430px",
                top: "310px"
            }, f[a ? "right" : "left"] = "50px", e = document.getElementById("capacityBubble")) : (d = document.getElementById("dialogHelpRepeat"), f = {
            width: "360px",
            top: "360px"
        }, f[a ? "right" : "left"] = "425px", e = c[3].m));
        else if (4 == F)
            if (0 == Sg(U) && (-1 == b.indexOf("maze_forever") || 1 < Qg(U, !1).length)) d = document.getElementById("dialogHelpCapacity"), f = {
                width: "430px",
                top: "310px"
            }, f[a ? "right" : "left"] = "50px", e = document.getElementById("capacityBubble");
            else {
                for (var b = !0, h = U.Qb(), l = 0; l < h.length; l++) {
                    var m = h[l];
                    if ("maze_forever" == m.type) {
                        for (var n = 0; m;) m = m.Zb(), m = m.length ? m[0] : null, n++;
                        if (2 < n) {
                            b = !1;
                            break
                        }
                    }
                }
                b && (d = document.getElementById("dialogHelpRepeatMany"), f = {
                    width: "360px",
                    top: "360px"
                }, f[a ? "right" : "left"] = "425px", e = c[3].m)
            } else if (5 == F) 0 != Tc || yn.g || (d = document.getElementById("dialogHelpSkins"), f = {
            width: "360px",
            top: "60px"
        }, f[a ? "left" : "right"] = "20px", e = document.getElementById("pegmanButton"));
        else if (6 == F) - 1 == b.indexOf("maze_if") && (d = document.getElementById("dialogHelpIf"),
            f = {
                width: "360px",
                top: "430px"
            }, f[a ? "right" : "left"] = "425px", e = c[4].m);
        else if (7 == F) {
            if (!xn.g) {
                h = document.createElement("span");
                h.className = "helpMenuFake";
                l = [X("Maze_pathAhead"), X("Maze_pathLeft"), X("Maze_pathRight")];
                n = ok(l);
                m = pk(l);
                h.textContent = (m ? l[0].slice(n, -m) : l[0].substring(n)) + " " + mk;
                n = document.getElementById("helpMenuText");
                l = n.textContent;
                n.textContent = "";
                m = l.split(/%\d/);
                for (l = 0; l < m.length; l++) n.appendChild(document.createTextNode(m[l])), l != m.length - 1 && n.appendChild(h.cloneNode(!0));
                xn.g = !0
            } - 1 == b.indexOf("isPathRight") && (d = document.getElementById("dialogHelpMenu"), f = {
                width: "360px",
                top: "430px"
            }, f[a ? "right" : "left"] = "425px", e = c[4].m)
        } else 9 == F && -1 == b.indexOf("maze_ifElse") && (d = document.getElementById("dialogHelpIfElse"), f = {
            width: "360px",
            top: "305px"
        }, f[a ? "right" : "left"] = "425px", e = c[5].m);
        d ? d.parentNode != document.getElementById("dialog") && Y.Ld(d, e, !0, !1, f, null) : Y.sb(!1)
    }
}

function yn(a) {
    var b = document.getElementById("pegmanMenu");
    "block" == b.style.display ? zn(a) : Z.kb(a) || (a = document.getElementById("pegmanButton"), Hg(a, "buttonHover"), b.style.top = a.offsetTop + a.offsetHeight + "px", b.style.left = a.offsetLeft + "px", b.style.display = "block", Mc.Gf = Q(document.body, "mousedown", null, zn), (b = document.getElementById("dialogHelpSkins")) && "dialogHiddenContent" != b.className && Y.sb(!1), yn.g = !0)
}

function zn(a) {
    Z.kb(a) || (document.getElementById("pegmanMenu").style.display = "none", Ni(document.getElementById("pegmanButton"), "buttonHover"), Mc.Gf && (R(Mc.Gf), delete Mc.Gf))
}

function An(a) {
    for (var b = 0; b < un.length; b++) window.clearTimeout(un[b]);
    un = [];
    C = Oc.x;
    D = Oc.y;
    a ? (E = 2, Bn(!1), un.push(setTimeout(function() {
        Nc = 100;
        Cn([C, D, 4 * E - 4]);
        E++
    }, 5 * Nc))) : (E = 1, Dn(C, D, 4 * E));
    a = document.getElementById("finish");
    a.setAttribute("x", 50 * (Pc.x + .5) - a.getAttribute("width") / 2);
    a.setAttribute("y", 50 * (Pc.y + .6) - a.getAttribute("height"));
    a = document.getElementById("look");
    a.style.display = "none";
    a.parentNode.appendChild(a);
    a = a.getElementsByTagName("path");
    for (var b = 0, c; c = a[b]; b++) c.setAttribute("stroke",
        ln.Cf)
}

function En(a) {
    if (!Z.kb(a))
        if (Y.sb(!1), 1 == F && 1 < Qg(U).length && 1 != tn && !gn(F)) xn();
        else {
            a = document.getElementById("runButton");
            var b = document.getElementById("resetButton");
            b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
            a.style.display = "none";
            b.style.display = "inline";
            si(U, !0);
            An(!1);
            Fn()
        }
}

function Gn(a) {
    Z.kb(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", si(U, !1), An(!1), xn())
}

function Hn(a, b) {
    var c;
    c = function(a) {
        In(0, a.toString())
    };
    a.setProperty(b, "moveForward", a.createNativeFunction(c));
    c = function(a) {
        In(2, a.toString())
    };
    a.setProperty(b, "moveBackward", a.createNativeFunction(c));
    c = function(a) {
        Jn(0, a.toString())
    };
    a.setProperty(b, "turnLeft", a.createNativeFunction(c));
    c = function(a) {
        Jn(1, a.toString())
    };
    a.setProperty(b, "turnRight", a.createNativeFunction(c));
    c = function(b) {
        return a.createPrimitive(Kn(0, b.toString()))
    };
    a.setProperty(b, "isPathForward", a.createNativeFunction(c));
    c = function(b) {
        return a.createPrimitive(Kn(1, b.toString()))
    };
    a.setProperty(b, "isPathRight", a.createNativeFunction(c));
    c = function(b) {
        return a.createPrimitive(Kn(2, b.toString()))
    };
    a.setProperty(b, "isPathBackward", a.createNativeFunction(c));
    c = function(b) {
        return a.createPrimitive(Kn(3, b.toString()))
    };
    a.setProperty(b, "isPathLeft", a.createNativeFunction(c));
    a.setProperty(b, "notDone", a.createNativeFunction(function() {
        return a.createPrimitive(C != Pc.x || D != Pc.y)
    }))
}

function Fn() {
    if ("Interpreter" in window) {
        Qc = [];
        var a = Lk();
        tn = 0;
        a = new Interpreter(a, Hn);
        try {
            for (var b = 1E4; a.step();)
                if (0 == b--) throw Infinity;
            tn = C != Pc.x || D != Pc.y ? -1 : 1
        } catch (c) {
            Infinity === c ? tn = 2 : !1 === c ? tn = -2 : (tn = -2, alert(c))
        }
        1 == tn ? (Nc = 100, Qc.push(["finish", null])) : Nc = 150;
        An(!1);
        un.push(setTimeout(Ln, 100))
    } else setTimeout(Fn, 250)
}

function Ln() {
    var a = Qc.shift();
    if (a) {
        Z.ve(a[1]);
        switch (a[0]) {
            case "north":
                Cn([C, D - 1, 4 * E]);
                D--;
                break;
            case "east":
                Cn([C + 1, D, 4 * E]);
                C++;
                break;
            case "south":
                Cn([C, D + 1, 4 * E]);
                D++;
                break;
            case "west":
                Cn([C - 1, D, 4 * E]);
                C--;
                break;
            case "look_north":
                Mn(0);
                break;
            case "look_east":
                Mn(1);
                break;
            case "look_south":
                Mn(2);
                break;
            case "look_west":
                Mn(3);
                break;
            case "fail_forward":
                Nn(!0);
                break;
            case "fail_backward":
                Nn(!1);
                break;
            case "left":
                Cn([C, D, 4 * E - 4]);
                E = On(E - 1);
                break;
            case "right":
                Cn([C, D, 4 * E + 4]);
                E = On(E + 1);
                break;
            case "finish":
                Bn(!0),
                    Z.Ti(), setTimeout(Y.bi, 1E3)
        }
        un.push(setTimeout(Ln, 5 * Nc))
    } else Z.ve(null), xn()
}

function Pn(a) {
    if ("dialogHiddenContent" != document.getElementById("dialogDone").className) {
        var b = document.getElementById("pegSpin"),
            c = Y.Kg(b),
            d = a.clientX - (c.x + c.width / 2 - window.pageXOffset);
        a = Math.atan((a.clientY - (c.y + c.height / 2 - window.pageYOffset)) / d);
        a = a / Math.PI * 180;
        d = Math.round((0 < d ? a + 90 : a + 270) / 360 * 16);
        16 == d && (d = 15);
        b.style.backgroundPosition = 49 * -d + "px 0px"
    }
}

function Cn(a) {
    var b = [C, D, 4 * E],
        c = [(a[0] - b[0]) / 4, (a[1] - b[1]) / 4, (a[2] - b[2]) / 4];
    Dn(b[0] + c[0], b[1] + c[1], Qn(b[2] + c[2]));
    un.push(setTimeout(function() {
        Dn(b[0] + 2 * c[0], b[1] + 2 * c[1], Qn(b[2] + 2 * c[2]))
    }, Nc));
    un.push(setTimeout(function() {
        Dn(b[0] + 3 * c[0], b[1] + 3 * c[1], Qn(b[2] + 3 * c[2]))
    }, 2 * Nc));
    un.push(setTimeout(function() {
        Dn(a[0], a[1], Qn(a[2]))
    }, 3 * Nc))
}

function Nn(a) {
    var b = 0,
        c = 0;
    switch (E) {
        case 0:
            c = -1;
            break;
        case 1:
            b = 1;
            break;
        case 2:
            c = 1;
            break;
        case 3:
            b = -1
    }
    a || (b = -b, c = -c);
    if (1 == ln.ae) {
        var b = b / 4,
            c = c / 4,
            d = Qn(4 * E);
        Dn(C + b, D + c, d);
        Ii(U, "fail", .5);
        un.push(setTimeout(function() {
            Dn(C, D, d)
        }, Nc));
        un.push(setTimeout(function() {
            Dn(C + b, D + c, d);
            Ii(U, "fail", .5)
        }, 2 * Nc));
        un.push(setTimeout(function() {
            Dn(C, D, d)
        }, 3 * Nc))
    } else {
        var e = 10 * (Math.random() - .5),
            f = (Math.random() - .5) / 2,
            b = b + (Math.random() - .5) / 4,
            c = c + (Math.random() - .5) / 4,
            b = b / 8,
            c = c / 8,
            h = 0;
        3 == ln.ae && (h = .01);
        un.push(setTimeout(function() {
            Ii(U,
                "fail", .5)
        }, 2 * Nc));
        a = function(a) {
            return function() {
                Dn(C + b * a, D + c * a, Qn(4 * E + f * a), e * a);
                c += h
            }
        };
        for (var l = 1; 100 > l; l++) un.push(setTimeout(a(l), Nc * l / 2))
    }
}

function Bn(a) {
    var b = Qn(4 * E);
    Dn(C, D, 16);
    a && Ii(U, "win", .5);
    Nc = 150;
    un.push(setTimeout(function() {
        Dn(C, D, 18)
    }, Nc));
    un.push(setTimeout(function() {
        Dn(C, D, 16)
    }, 2 * Nc));
    un.push(setTimeout(function() {
        Dn(C, D, b)
    }, 3 * Nc))
}

function Dn(a, b, c, d) {
    var e = document.getElementById("pegman");
    e.setAttribute("x", 50 * a - 49 * c + 1);
    e.setAttribute("y", 50 * (b + .5) - 26 - 8);
    d ? e.setAttribute("transform", "rotate(" + d + ", " + (50 * a + 25) + ", " + (50 * b + 25) + ")") : e.setAttribute("transform", "rotate(0, 0, 0)");
    b = document.getElementById("clipRect");
    b.setAttribute("x", 50 * a + 1);
    b.setAttribute("y", e.getAttribute("y"))
}

function Mn(a) {
    var b = C,
        c = D;
    switch (a) {
        case 0:
            b += .5;
            break;
        case 1:
            b += 1;
            c += .5;
            break;
        case 2:
            b += .5;
            c += 1;
            break;
        case 3:
            c += .5
    }
    b *= 50;
    c *= 50;
    a = 90 * a - 45;
    var d = document.getElementById("look");
    d.setAttribute("transform", "translate(" + b + ", " + c + ") rotate(" + a + " 0 0) scale(.4)");
    a = d.getElementsByTagName("path");
    d.style.display = "inline";
    for (b = 0; d = a[b]; b++) Rn(d, Nc * b)
}

function Rn(a, b) {
    un.push(setTimeout(function() {
        a.style.display = "inline";
        setTimeout(function() {
            a.style.display = "none"
        }, 2 * Nc)
    }, b))
}

function On(a) {
    a = Math.round(a) % 4;
    0 > a && (a += 4);
    return a
}

function Qn(a) {
    a = Math.round(a) % 16;
    0 > a && (a += 16);
    return a
}

function In(a, b) {
    if (!Kn(a, null)) throw Qc.push(["fail_" + (a ? "backward" : "forward"), b]), !1;
    var c;
    switch (On(E + a)) {
        case 0:
            D--;
            c = "north";
            break;
        case 1:
            C++;
            c = "east";
            break;
        case 2:
            D++;
            c = "south";
            break;
        case 3:
            C--, c = "west"
    }
    Qc.push([c, b])
}

function Jn(a, b) {
    a ? (E++, Qc.push(["right", b])) : (E--, Qc.push(["left", b]));
    E = On(E)
}

function Kn(a, b) {
    var c, d;
    switch (On(E + a)) {
        case 0:
            c = on[D - 1] && on[D - 1][C];
            d = "look_north";
            break;
        case 1:
            c = on[D][C + 1];
            d = "look_east";
            break;
        case 2:
            c = on[D + 1] && on[D + 1][C];
            d = "look_south";
            break;
        case 3:
            c = on[D][C - 1], d = "look_west"
    }
    b && Qc.push([d, b]);
    return 0 !== c && void 0 !== c
}
window.addEventListener("load", function() {
    function a() {
        l.style.top = Math.max(10, m.offsetTop - window.pageYOffset) + "px";
        l.style.left = h ? "10px" : "420px";
        l.style.width = window.innerWidth - 440 + "px"
    }

    function b(a) {
        return function() {
            if (window.sessionStorage) {
                var b = Vg(U),
                    b = ah(b);
                window.sessionStorage.g = b
            }
            window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Sc + "&level=" + F + "&skin=" + a
        }
    }
    document.body.innerHTML = Rc();
    Z.P();
    document.querySelector("#pegmanButton>img").style.backgroundImage =
        "url(" + ln.ld + ")";
    for (var c = document.getElementById("pegmanMenu"), d = 0; d < nn.length; d++)
        if (d != Tc) {
            var e = document.createElement("div"),
                f = document.createElement("img");
            f.src = "common/1x1.gif";
            f.style.backgroundImage = "url(" + nn[d].ld + ")";
            e.appendChild(f);
            c.appendChild(e);
            Q(e, "mousedown", null, b(d))
        }
    Q(window, "resize", null, zn);
    c = document.getElementById("pegmanButton");
    Q(c, "mousedown", null, yn);
    document.getElementById("pegmanButtonArrow").appendChild(document.createTextNode(mk));
    var h = -1 != cn.indexOf(Sc),
        l = document.getElementById("blockly"),
        m = document.getElementById("visualization");
    window.addEventListener("scroll", function() {
        a();
        Id.pq(window, "resize")
    });
    window.addEventListener("resize", a);
    a();
    c = document.getElementById("toolbox");
    U = Bk("blockly", {
        media: "third-party/blockly/media/",
        maxBlocks: mn,
        rtl: h,
        toolbox: c,
        trashcan: !0,
        zoom: {
            startScale: 1 + (1 - F / 10) / 3
        }
    });
    Hi(U, ln.Zf, "win");
    Hi(U, ln.$e, "fail");
    Pk("moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft");
    wn();
    Z.Ii('<xml>  <block movable="' + (1 != F) + '" type="maze_moveForward" x="70" y="70"></block></xml>', !1);
    for (c = 0; c < pn; c++)
        for (d = 0; d < qn; d++) 2 == on[c][d] ? Oc = {
            x: d,
            y: c
        } : 3 == on[c][d] && (Pc = {
            x: d,
            y: c
        });
    An(!0);
    U.Eb(function() {
        var a = Sg(U),
            b = document.getElementById("capacity");
        if (Infinity == a) b.style.display = "none";
        else {
            b.style.display = "inline";
            b.innerHTML = "";
            var a = Number(a),
                c = document.createElement("span");
            c.className = "capacityNumber";
            c.appendChild(document.createTextNode(a));
            for (var a = (0 == a ? X("Maze_capacity0") : 1 == a ? X("Maze_capacity1") : X("Maze_capacity2")).split(/%\d/), d = 0; d < a.length; d++) b.appendChild(document.createTextNode(a[d])),
                d != a.length - 1 && b.appendChild(c.cloneNode(!0))
        }
    });
    document.body.addEventListener("mousemove", Pn, !0);
    kn("runButton", En);
    kn("resetButton", Gn);
    1 == F && (oe *= 2);
    10 == F ? gn(F) || (c = document.getElementById("dialogHelpWallFollow"), Y.Ld(c, null, !1, !0, {
        width: "30%",
        left: "35%",
        top: "12em"
    }, Y.ih), Y.hh(), setTimeout(Y.gg, 3E5)) : setTimeout(function() {
        U.Eb(xn);
        xn()
    }, 5E3);
    c = document.getElementById("dialogDoneButtons");
    d = document.createElement("img");
    d.id = "pegSpin";
    d.src = "common/1x1.gif";
    d.style.backgroundImage = "url(" + ln.ld +
        ")";
    c.parentNode.insertBefore(d, c);
    setTimeout(Z.Fi, 1);
    setTimeout(Z.Gi, 1)
});