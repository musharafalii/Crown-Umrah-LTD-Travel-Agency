! function(e) {
    e.fn.extend({
        autocomplete: function(t, a) {
            var n = "string" == typeof t;
            return a = e.extend({}, e.Autocompleter.defaults, {
                url: n ? t : null,
                data: n ? null : t,
                delay: n ? e.Autocompleter.defaults.delay : t,
                max: a && !a.scroll ? t : 150
            }, a), a.highlight = a.highlight || function(e) {
                return e
            }, a.formatMatch = a.formatMatch || a.formatItem, this.each(function() {
                new e.Autocompleter(this, a)
            })
        },
        result: function(e) {
            return this.bind("result", e)
        },
        search: function(e) {
            return this.trigger("search", [e])
        },
        flushCache: function() {
            return this.trigger("flushCache")
        },
        setOptions: function(e) {
            return this.trigger("setOptions", [e])
        },
        unautocomplete: function() {
            return this.trigger("unautocomplete")
        }
    }), e.Autocompleter = function(t, a) {
        function n() {
            var e = y.selected();
            if (!e) return !1;
            var t = "";

            if (e.Type == "HotelName") {
                $("#hotelnamecode").val(e.CityId);
            }
            if (t = e.Type == "Hotel" || e.Type == "Attraction" ? e.City_Name + ", " + e.Country_Name : (e.Type == "Transfer" ? e.Location_Name + "," + e.City_Name + ", " + e.Country_Name + "" : (e.Type == "HotelFlight" ? "(" + e.IATACode + ")-" + e.CityName + "-" + e.AirportName + "-" + e.CountryName + "" : (e.Type == "HotelName" ? e.CityCode : (e.Type == "RoomType" ? e.Name : (e.Type == "Cruise" ? e.City_Name : "(" + e.Airport_Code + ") - " + e.City_Name + " - " + e.Airport_Name + " - " + e.Country_Name))))), C = t, a.multiple) {
                var n = i(v.val());

                n.length > 1 && (t = n.slice(0, n.length - 1).join(a.multipleSeparator) + a.multipleSeparator + t), t += a.multipleSeparator
            }
            v.val(t);
            switch (v[0].id) {
                case "txtFSource":
                    $("#txtFDestination").click;
                    break;

                case "txtFDestination":
                    $("#txtFDepart").focus(200);
                    break;
                case "txtHLocation":
                    $('#CityCode').val(e.CityCode);
                    $("#txtHCheckIn").focus(200);
                    break;
                case "txtHaLocation":
                    $('#CityCode').val(e.CityCode);
                    $("#txtHaCheckIn").focus(200);
                    break;
                case "FHDestination":
                    $('#hdnFHCityId').val(e.CityCode);
                    $("#FHDepartDate").focus(200);
                    break;
                case "FHTDestination":
                    $('#FHTCityCode').val(e.CityId);

                    break;
                case "FHSource":
                    $("#FHDestination").focus(200);
                    break;
                case "hotelRoomsearch":
                    starfiltering();
                    break;
                case "hotelnamesearch":
                    if ($("#hotelnamecode").val() == undefined) {
                        $('.hotelresults').hide();
                        var count = 0;
                        $('#bingo_width_Hotel').find('.hotelresults').each(function() {

                            var sortvalue = $(this).attr('hotelname');
                            if (t.toUpperCase() == sortvalue.toUpperCase()) {
                                $(this).show();
                                count++;
                            }
                        });
                        $("#hotelcount").text(count);
                    } else {
                        starfiltering();
                    }
                    break;
                case "txttransferfrom":
                    //debugger
                    $('#hfTransferFromLocationId').val(e.Id);
                    $('#hfTransferFromLocationLat').val(e.Latitude);
                    $('#hfTransferFromLocationLong').val(e.Longitude);
                    $('#hfTransferFromLocationCity').val(e.City_Name);
                    $('#hfTransferFromLocationCountry').val(e.Country_Name);
                    $('#hfTransferFromLocationName').val(e.Location_Name);
                    $("#txttransferto").focus(200);
                    break;
                case "txttransferto":
                    //debugger
                    $('#hfTransferToLocationId').val(e.Id);
                    $('#hfTransferToLocationLat').val(e.Latitude);
                    $('#hfTransferToLocationLong').val(e.Longitude);
                    $('#hfTransferToLocationCity').val(e.City_Name);
                    $('#hfTransferToLocationCountry').val(e.Country_Name);
                    $('#hfTransferToLocationName').val(e.Location_Name);

                    $("#txttransferCheckIn").focus(200);
                    break;
                case "txtAttractionlocation":
                    $('#txtAttractionlat').val(e.lat);
                    $('#txtAttractionlong').val(e.lon);
                    $("#txtAttractionDeparture").focus(200);
                    break;
                case "txtFSource1":
                    $("#txtFDestination1").focus(200);
                    break;
                case "txtFDestination1":

                    $("#txtFSource2").val(t);
                    var temp = $('#txtFDepart1').val().split('/');

                    var date = new Date(temp[2], temp[1] - 1, temp[0]);
                    var startdate = new Date(date.setDate(date.getDate()));
                    var next_date = new Date(date.setDate(date.getDate() + 6));
                    $('#txtFDepart2').daterangepicker({
                        singleDatePicker: true,
                        startDate: next_date,
                        minDate: startdate,
                        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
                        locale: {
                            format: 'DD/MM/YYYY',
                        },
                    });
                    //$("#txtDepartureDate2").val(Getdate($('#txtDepartureDate1').val()));
                    $("#txtFDepart1").focus(200);
                    break;
                case "txtFSource2":
                    $("#txtFDestination2").focus(200);
                    break;
                case "txtFDestination2":

                    $("#txtFSource3").val(t);
                    var temp = $('#txtFDepart2').val().split('/');
                    var date = new Date(temp[2], temp[1] - 1, temp[0]);
                    var startdate = new Date(date.setDate(date.getDate()));
                    var next_date = new Date(date.setDate(date.getDate() + 6));
                    $('#txtFDepart3').daterangepicker({
                        singleDatePicker: true,
                        startDate: next_date,
                        minDate: startdate,
                        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
                        locale: {
                            format: 'DD/MM/YYYY',
                        },
                    });
                    //$("#txtDepartureDate3").val(Getdate($('#txtDepartureDate2').val()));
                    $("#txtFDepart2").focus(200);
                    break;
                case "txtFSource3":
                    $("#txtFDestination3").focus(200);
                    break;
                case "txtFDestination3":

                    $("#txtFSource4").val(t);
                    var temp = $('#txtFDepart3').val().split('/');
                    var date = new Date(temp[2], temp[1] - 1, temp[0]);
                    var startdate = new Date(date.setDate(date.getDate()));
                    var next_date = new Date(date.setDate(date.getDate() + 6));
                    $('#txtFDepart4').daterangepicker({
                        singleDatePicker: true,
                        startDate: next_date,
                        minDate: startdate,
                        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
                        locale: {
                            format: 'DD/MM/YYYY',
                        },
                    });
                    //$("#txtDepartureDate4").val(Getdate($('#txtDepartureDate3').val()));
                    $("#txtFDepart3").focus(200);
                    break;
                case "txtFSource4":
                    $("#txtFDestination4").focus(200);
                    break;
                case "txtFDestination4":

                    $("#txtFSource5").val(t);
                    var temp = $('#txtFDepart4').val().split('/');
                    var date = new Date(temp[2], temp[1] - 1, temp[0]);
                    var startdate = new Date(date.setDate(date.getDate()));
                    var next_date = new Date(date.setDate(date.getDate() + 6));
                    $('#txtFDepart5').daterangepicker({
                        singleDatePicker: true,
                        startDate: next_date,
                        minDate: startdate,
                        maxDate: new Date(new Date().setDate(new Date().getDate() + 365)),
                        locale: {
                            format: 'DD/MM/YYYY',
                        },
                    });
                    //$("#txtDepartureDate5").val(Getdate($('#txtDepartureDate4').val()));
                    $("#txtFDepart4").focus(200);
                    break;
                case "txtFSource5":
                    $("#txtFDestination5").focus(200);
                    break;
                case "txtFDestination5":
                    $("#txtFDepart5").focus(200);
                    break;
            }
            return u(), v.trigger("result", [e.data, e.value]), !0
        }

        function r(e, t) {
            if (d == g.DEL) return void y.hide();
            var n = v.val();
            (t || n != C) && (C = n, n = o(n), n.length >= a.minChars ? (v.addClass(a.loadingClass), a.matchCase || (n = n.toLowerCase()), f(n, c, u)) : (h(), y.hide()))
        }

        function i(t) {
            if (!t) return [""];
            var n = t.split(a.multipleSeparator),
                r = [];
            return e.each(n, function(t, a) {
                e.trim(a) && (r[t] = e.trim(a))
            }), r
        }

        function o(e) {
            if (!a.multiple) return e;
            var t = i(e);
            return t[t.length - 1]
        }

        function l(n, r) {
            a.autoFill && o(v.val()).toLowerCase() == n.toLowerCase() && d != g.BACKSPACE && (v.val(v.val() + r.substring(o(C).length)), e.Autocompleter.Selection(t, C.length, C.length + r.length))
        }

        function s() {
            clearTimeout(m), m = setTimeout(u, 200)
        }

        function u() {
            var n = y.visible();
            y.hide(), clearTimeout(m), h(), a.mustMatch && v.search(function(e) {
                if (!e)
                    if (a.multiple) {
                        var t = i(v.val()).slice(0, -1);
                        v.val(t.join(a.multipleSeparator) + (t.length ? a.multipleSeparator : ""))
                    } else v.val("")
            }), n && e.Autocompleter.Selection(t, t.value.length, t.value.length)
        }

        function c(e, t) {
            t && t.length && b ? (h(), y.display(t, e), l(e, t[0].value), y.show()) : u()
        }

        function f(n, r, i) {

            a.matchCase || (n = n.toLowerCase());
            var l = A.load(n);
            if (l && l.length) r(n, l);
            else if ("string" == typeof a.url && a.url.length > 0) {
                var s = {
                    timestamp: +new Date
                };
                e.each(a.extraParams, function(e, t) {
                    s[e] = "function" == typeof t ? t() : t
                }), e.ajax({
                    mode: "abort",
                    port: "autocomplete" + t.name,
                    dataType: a.dataType,
                    url: a.url,
                    data: e.extend({
                        q: o(n),
                        hname: $("#token").val(),
                        city: $("#CityName").val(),
                        limit: a.max
                    }, s),
                    success: function(e) {
                        var t = JSON.parse(e);
                        r(n, t)
                    }
                })
            } else y.emptyList(), i(n)
        }

        function h() {
            v.removeClass(a.loadingClass)
        }
        var m, d, p, g = {
                UP: 38,
                DOWN: 40,
                DEL: 46,
                TAB: 9,
                RETURN: 13,
                ESC: 27,
                COMMA: 188,
                PAGEUP: 33,
                PAGEDOWN: 34,
                BACKSPACE: 8
            },
            v = e(t).attr("autocomplete", "off").addClass(a.inputClass),
            C = "",
            A = e.Autocompleter.Cache(a),
            b = 0,
            w = {
                mouseDownOnSelect: !1
            },
            y = e.Autocompleter.Select(a, t, n, w);
        e.browser.opera && e(t.form).bind("submit.autocomplete", function() {
            return p ? (p = !1, !1) : void 0
        }), v.bind((e.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(t) {
            switch (d = t.keyCode, t.keyCode) {
                case g.UP:
                    t.preventDefault(), y.visible() ? y.prev() : r(0, !0);
                    break;
                case g.DOWN:
                    t.preventDefault(), y.visible() ? y.next() : r(0, !0);
                    break;
                case g.PAGEUP:
                    t.preventDefault(), y.visible() ? y.pageUp() : r(0, !0);
                    break;
                case g.PAGEDOWN:
                    t.preventDefault(), y.visible() ? y.pageDown() : r(0, !0);
                    break;
                case a.multiple && "," == e.trim(a.multipleSeparator) && g.COMMA:
                case g.TAB:
                case g.RETURN:
                    if (n()) return t.preventDefault(), p = !0, !1;
                    break;
                case g.ESC:
                    y.hide();
                    break;
                default:
                    clearTimeout(m), m = setTimeout(r, a.delay)
            }
        }).focus(function() {
            b++
        }).blur(function() {
            b = 0, w.mouseDownOnSelect || s()
        }).click(function() {
            b++ > 1 && !y.visible() && r(0, !0)
        }).bind("search", function() {
            function t(e, t) {
                var n;
                if (t && t.length)
                    for (var r = 0; r < t.length; r++)
                        if (t[r].result.toLowerCase() == e.toLowerCase()) {
                            n = t[r];
                            break
                        }
                "function" == typeof a ? a(n) : v.trigger("result", n && [n.data, n.value])
            }
            var a = arguments.length > 1 ? arguments[1] : null;
            e.each(i(v.val()), function(e, a) {
                f(a, t, t)
            })
        }).bind("flushCache", function() {
            A.flush()
        }).bind("setOptions", function() {
            e.extend(a, arguments[1]), "data" in arguments[1] && A.populate()
        }).bind("unautocomplete", function() {
            y.unbind(), v.unbind(), e(t.form).unbind(".autocomplete")
        })
    }, e.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: !1,
        matchSubset: !0,
        matchContains: !1,
        cacheLength: 10,
        max: 100,
        mustMatch: !1,
        extraParams: {},
        selectFirst: !0,
        formatItem: function(e) {
            return e[0]
        },
        formatMatch: null,
        autoFill: !1,
        width: 0,
        multiple: !1,
        multipleSeparator: ", ",
        highlight: function(e, t) {
            return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<u><strong>$1</strong></u>")
        },
        scroll: !1,
        scrollHeight: 300
    }, e.Autocompleter.Cache = function(t) {
        function a(e, a) {
            t.matchCase || (e = e.toLowerCase());
            var n = e.indexOf(a);
            return "word" == t.matchContains && (n = e.toLowerCase().search("\\b" + a.toLowerCase())), -1 == n ? !1 : 0 == n || t.matchContains
        }

        function n(e, a) {
            l > t.cacheLength && i(), o[e] || l++, o[e] = a
        }

        function r() {
            if (!t.data) return !1;
            var a = {},
                r = 0;
            t.url || (t.cacheLength = 1), a[""] = [];
            for (var i = 0, o = t.data.length; o > i; i++) {
                var l = t.data[i];
                l = "string" == typeof l ? [l] : l;
                var s = t.formatMatch(l, i + 1, t.data.length);
                if (s !== !1) {
                    var u = s.charAt(0).toLowerCase();
                    a[u] || (a[u] = []);
                    var c = {
                        value: s,
                        data: l,
                        result: t.formatResult && t.formatResult(l) || s
                    };
                    a[u].push(c), r++ < t.max && a[""].push(c)
                }
            }
            e.each(a, function(e, a) {
                t.cacheLength++, n(e, a)
            })
        }

        function i() {
            o = {}, l = 0
        }
        var o = {},
            l = 0;
        return setTimeout(r, 25), {
            flush: i,
            add: n,
            populate: r,
            load: function(n) {
                if (!t.cacheLength || !l) return null;
                if (!t.url && t.matchContains) {
                    var r = [];
                    for (var i in o)
                        if (i.length > 0) {
                            var s = o[i];
                            e.each(s, function(e, t) {
                                a(t.value, n) && r.push(t)
                            })
                        }
                    return r
                }
                if (o[n]) return o[n];
                if (t.matchSubset)
                    for (var u = n.length - 1; u >= t.minChars; u--) {
                        var s = o[n.substr(0, u)];
                        if (s) {
                            var r = [];
                            return e.each(s, function(e, t) {
                                a(t.value, n) && (r[r.length] = t)
                            }), r
                        }
                    }
                return null
            }
        }
    }, e.Autocompleter.Select = function(t, a, n, r) {
        function i() {
            C && (m = e("<div/>").hide().addClass(t.resultsClass).css("position", "absolute").appendTo(document.body), d = e("<ul/>").appendTo(m).mouseover(function(t) {
                o(t).nodeName && "LI" == o(t).nodeName.toUpperCase() && (g = e("li", d).removeClass(p.ACTIVE).index(o(t)), e(o(t)).addClass(p.ACTIVE))
            }).click(function(t) {
                return e(o(t)).addClass(p.ACTIVE), n(), a.focus(), !1
            }).mousedown(function() {
                r.mouseDownOnSelect = !0
            }).mouseup(function() {
                r.mouseDownOnSelect = !1
            }), t.width > 0 && m.css("width", t.width), C = !1)
        }

        function o(e) {
            for (var t = e.target; t && "LI" != t.tagName;) t = t.parentNode;
            return t ? t : []
        }

        function l(e) {

            f.slice(g, g + 1).removeClass(p.ACTIVE), s(e);
            var a = f.slice(g, g + 1).addClass(p.ACTIVE);
            if (t.scroll) {
                var n = 0;
                f.slice(0, g).each(function() {
                    n += this.offsetHeight
                }), n + a[0].offsetHeight - d.scrollTop() > d[0].clientHeight ? d.scrollTop(n + a[0].offsetHeight - d.innerHeight()) : n < d.scrollTop() && d.scrollTop(n)
            }
        }

        function s(e) {
            g += e, 0 > g ? g = f.size() - 1 : g >= f.size() && (g = 0)
        }

        function u(e) {
            return t.max && t.max < e ? t.max : e
        }

        function c() {
            d.empty();

            for (var a = u(h.length), n = 0; a > n; n++)

                if (h[n]) {
                    var r = "",
                        i = (h[n].Type == "Transfer" ? "ac_even ac_transfer" : "ac_even");
                    //bind in li tag Flight;

                    //if (h[n].Type == "Hotel" || h[n].Type == "Attraction" ? (r = h[n].City_Name + ", " + h[n].Country_Name, i = "ac_odd") : r = (h[n].Type == "Transfer" ? "(" + h[n].CityCode + ")-" + h[n].Airport_Name + "-" + h[n].Country_Name + "" : "(" + h[n].Airport_Code + ") - " + h[n].City_Name + " - " + h[n].Airport_Name + " - " + h[n].Country_Name)) {
                    //        var o = e("<li/>").html(t.highlight(r, v)).addClass(i).appendTo(d)[0];
                    //        e.data(o, "ac_data", h[n])
                    //    }
                    if (h[n].Type == "Hotel" || h[n].Type == "Attraction" ? (r = h[n].City_Name + ", " + h[n].Country_Name, i = "ac_odd") : r = (h[n].Type == "Transfer" ? h[n].Location_Name + "," + h[n].City_Name + "," + h[n].Country_Name + "" : (h[n].Type == "HotelFlight" ? "(" + h[n].IATACode + ")-" + h[n].CityName + "-" + h[n].AirportName + "-" + h[n].CountryName + "" : (h[n].Type == "HotelName" ? h[n].CityCode : (h[n].Type == "RoomType" ? h[n].Name : (h[n].Type == "Cruise" ? h[n].City_Name + (h[n].Country_Name != "" ? "," + h[n].Country_Name + "" : "") : "(" + h[n].Airport_Code + ") - " + h[n].City_Name + " - " + h[n].Airport_Name + " - " + h[n].Country_Name)))))) {
                        var o = e("<li/>").html(t.highlight(r, v)).addClass(i).appendTo(d)[0];
                        e.data(o, "ac_data", h[n])
                    }
                }
            f = d.find("li"), t.selectFirst && (f.slice(0, 1).addClass(p.ACTIVE), g = 0), e.fn.bgiframe && d.bgiframe()
        }
        var f, h, m, d, p = {
                ACTIVE: "ac_over"
            },
            g = -1,
            v = "",
            C = !0;
        return {
            display: function(e, t) {
                i(), h = e, v = t, c()
            },
            next: function() {
                l(1)
            },
            prev: function() {
                l(-1)
            },
            pageUp: function() {
                l(0 != g && 0 > g - 8 ? -g : -8)
            },
            pageDown: function() {
                l(g != f.size() - 1 && g + 8 > f.size() ? f.size() - 1 - g : 8)
            },
            hide: function() {
                m && m.hide(), f && f.removeClass(p.ACTIVE), g = -1
            },
            visible: function() {
                return m && m.is(":visible")
            },
            current: function() {
                return this.visible() && (f.filter("." + p.ACTIVE)[0] || t.selectFirst && f[0])
            },
            show: function() {
                var n = e(a).offset();
                if (m.css({
                        width: "string" == typeof t.width || t.width > 0 ? t.width : e(a).width(),
                        top: n.top + a.offsetHeight,
                        left: n.left
                    }).show(), t.scroll && (d.scrollTop(0), d.css({
                        maxHeight: t.scrollHeight,
                        overflow: "auto"
                    }), e.browser.msie && "undefined" == typeof document.body.style.maxHeight)) {
                    var r = 0;
                    f.each(function() {
                        r += this.offsetHeight
                    });
                    var i = r > t.scrollHeight;
                    d.css("height", i ? t.scrollHeight : r), i || f.width(d.width() - parseInt(f.css("padding-left")) - parseInt(f.css("padding-right")))
                }
            },
            selected: function() {
                var t = f && f.filter("." + p.ACTIVE).removeClass(p.ACTIVE);
                return t && t.length && e.data(t[0], "ac_data")
            },
            emptyList: function() {
                d && d.empty()
            },
            unbind: function() {
                m && m.remove()
            }
        }
    }, e.Autocompleter.Selection = function(e, t, a) {
        if (e.createTextRange) {
            var n = e.createTextRange();
            n.collapse(!0), n.moveStart("character", t), n.moveEnd("character", a), n.select()
        } else e.setSelectionRange ? e.setSelectionRange(t, a) : e.selectionStart && (e.selectionStart = t, e.selectionEnd = a);
        try {
            e.focus()
        } catch (r) {}
    }
}(jQuery);

function Getdate(temp) {

    temp = temp.split('/');
    var date = new Date(temp[2], temp[1] - 1, temp[0]);
    var next_date = new Date(date.setDate(date.getDate() + 7));
    var dd = (next_date.getDate() < 10 ? "0" + next_date.getDate() : next_date.getDate());
    var mm = (next_date.getMonth() < 9 ? "0" + (parseInt(next_date.getMonth()) + 1) : (parseInt(next_date.getMonth()) + 1));
    var yyyy = next_date.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
}