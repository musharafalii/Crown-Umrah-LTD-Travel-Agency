
function loadJS(e) {
    if (0 !== e.length) {
        e.sort(function (e, n) {
            return e.deps.length - n.deps.length
        });
        var n = [];
        for (; e.length > 0 && 0 === e[0].deps.length;) $script(e[0].source, e[0].name), n.push(e[0].name), e.splice(0, 1);
        $script.ready(n, function () {
            for (var t = 0; t < e.length; t++)
                for (var o = 0; o < n.length; o++) e[t].deps.indexOf(n[o]) !== -1 && e[t].deps.splice(e[t].deps.indexOf(n[o]), 1);
            loadJS(e)
        })
    } else
        for (var t = 0; t < after_load_functions.length; t++) after_load_functions[t]()
} ! function (e) {
    "use strict";
    var n = function (n, t, o) {
        function r(e) {
            return a.body ? e() : void setTimeout(function () {
                r(e)
            })
        }

        function i() {
            u.addEventListener && u.removeEventListener("load", i), u.media = o || "all"
        }
        var l, a = e.document,
            u = a.createElement("link");
        if (t) l = t;
        else {
            var f = (a.body || a.getElementsByTagName("head")[0]).childNodes;
            l = f[f.length - 1]
        }
        var d = a.styleSheets;
        u.rel = "stylesheet", u.href = n, u.media = "only x", r(function () {
            l.parentNode.insertBefore(u, t ? l : l.nextSibling)
        });
        var s = function (e) {
            for (var n = u.href, t = d.length; t--;)
                if (d[t].href === n) return e();
            setTimeout(function () {
                s(e)
            })
        };
        return u.addEventListener && u.addEventListener("load", i), u.onloadcssdefined = s, s(i), u
    };
    "undefined" != typeof exports ? exports.loadCSS = n : e.loadCSS = n
}("undefined" != typeof global ? global : this),
    function (e) {
        if (e.loadCSS) {
            var n = loadCSS.relpreload = {};
            if (n.support = function () {
                try {
                    return e.document.createElement("link").relList.supports("preload")
                } catch (e) {
                    return !1
                }
            }, n.poly = function () {
                for (var n = e.document.getElementsByTagName("link"), t = 0; t < n.length; t++) {
                    var o = n[t];
                    "preload" === o.rel && "style" === o.getAttribute("as") && (e.loadCSS(o.href, o), o.rel = null)
                }
            }, !n.support()) {
                n.poly();
                var t = e.setInterval(n.poly, 300);
                e.addEventListener && e.addEventListener("load", function () {
                    n.poly(), e.clearInterval(t)
                }), e.attachEvent && e.attachEvent("onload", function () {
                    e.clearInterval(t)
                })
            }
        }
    }(this),
    function (e, n) {
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : this.$script = n()
    }(0, function () {
        function e(e, n) {
            for (var t = 0, o = e.length; t < o; ++t)
                if (!n(e[t])) return u;
            return 1
        }

        function n(n, t) {
            e(n, function (e) {
                return !t(e)
            })
        }

        function t(i, l, a) {
            function u(e) {
                return e.call ? e() : c[e]
            }

            function d() {
                if (!--y) {
                    c[m] = 1, g && g();
                    for (var t in h) e(t.split("|"), u) && !n(h[t], u) && (h[t] = [])
                }
            }
            i = i[f] ? i : [i];
            var s = l && l.call,
                g = s ? l : a,
                m = s ? i.join("") : l,
                y = i.length;
            return setTimeout(function () {
                n(i, function e(n, t) {
                    return null === n ? d() : (!t && !/^https?:\/\//.test(n) && r && (n = n.indexOf(".js") === -1 ? r + n + ".js" : r + n), v[n] ? (m && (p[m] = 1), 2 == v[n] ? d() : setTimeout(function () {
                        e(n, !0)
                    }, 0)) : (v[n] = 1, m && (p[m] = 1), o(n, d), void 0))
                })
            }, 0), t
        }

        function o(e, n) {
            var t, o = l.createElement("script");
            o.onload = o.onerror = o[s] = function () {
                o[d] && !/^c|loade/.test(o[d]) || t || (o.onload = o[s] = null, t = 1, v[e] = 2, n())
            }, o.async = 1, o.src = i ? e + (e.indexOf("?") === -1 ? "?" : "&") + i : e, a.insertBefore(o, a.lastChild)
        }
        var r, i, l = document,
            a = l.getElementsByTagName("head")[0],
            u = !1,
            f = "push",
            d = "readyState",
            s = "onreadystatechange",
            c = {},
            p = {},
            h = {},
            v = {};
        return t.get = o, t.order = function (e, n, o) {
            ! function r(i) {
                i = e.shift(), e.length ? t(i, r) : t(i, n, o)
            }()
        }, t.path = function (e) {
            r = e
        }, t.urlArgs = function (e) {
            i = e
        }, t.ready = function (o, r, i) {
            o = o[f] ? o : [o];
            var l = [];
            return !n(o, function (e) {
                c[e] || l[f](e)
            }) && e(o, function (e) {
                return c[e]
            }) ? r() : function (e) {
                h[e] = h[e] || [], h[e][f](r), i && i(l)
            }(o.join("|")), t
        }, t.done = function (e) {
            t([null], e)
        }, t
    }), after_load_functions = window.after_load_functions || [];


loadJS([{
    "name": "accor_booking",
    "source": "https:\/\/makkah-madinah.accor.com\/wp-content\/plugins\/accor-booking\/js\/booking.min.js?ver=20210129-FRHIParams",
    "deps": ["jquery", "jquery-ui-datepicker"]
}, {
    "name": "main_script",
    "source": "https:\/\/makkah-madinah.accor.com\/wp-content\/themes\/cluster-template\/js\/main.min.js?ver=20170802-6",
    "deps": ["jquery", "accor_booking", "libraries"]
}, {
    "name": "maps",
    "source": "https:\/\/makkah-madinah.accor.com\/wp-content\/themes\/cluster-template\/js\/map.min.js?ver=20170802-6",
    "deps": ["jquery", "gmaps"]
}, {
    "name": "isotope",
    "source": "https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery.isotope\/3.0.4\/isotope.pkgd.min.js?ver=20170802-6",
    "deps": ["jquery"]
}, {
    "name": "masonry",
    "source": "\/wp-includes\/js\/masonry.min.js?ver=3.3.2",
    "deps": ["imagesloaded"]
}, {
    "name": "gallery",
    "source": "https:\/\/makkah-madinah.accor.com\/wp-content\/themes\/cluster-template\/js\/gallery.min.js?ver=20170802-6",
    "deps": ["jquery", "isotope", "masonry"]
}, {
    "name": "resizecenter",
    "source": "https:\/\/makkah-madinah.accor.com\/wp-content\/themes\/cluster-template\/js\/resizeCenter.min.js?ver=20170802-6",
    "deps": ["jquery"]
}, {
    "name": "jquery",
    "source": "https:\/\/cdnjs.cloudflare.com\/ajax\/libs\/jquery\/1.12.4\/jquery.min.js?ver=1.12.4",
    "deps": []
}, {
    "name": "jquery-ui-datepicker",
    "source": "\/wp-includes\/js\/jquery\/ui\/datepicker.min.js?ver=1.11.4",
    "deps": ["jquery-ui-core"]
}, {
    "name": "libraries",
    "source": "https:\/\/makkah-madinah.accor.com\/wp-content\/themes\/cluster-template\/js\/libraries.min.js?ver=20170802-6",
    "deps": ["jquery"]
}, {
    "name": "gmaps",
    "source": "https:\/\/maps.google.com\/maps\/api\/js?v=3&key=AIzaSyAcZ4AFnZVgcQ27sNxbkz1jtpdqu2iyXcQ",
    "deps": ["jquery"]
}, {
    "name": "imagesloaded",
    "source": "\/wp-includes\/js\/imagesloaded.min.js?ver=3.2.0",
    "deps": []
}, {
    "name": "jquery-ui-core",
    "source": "\/wp-includes\/js\/jquery\/ui\/core.min.js?ver=1.11.4",
    "deps": ["jquery"]
}]);
