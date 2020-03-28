(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-personalCenter-feedback"], {
    "0212": function (t, e, n) {
        "use strict";
        n.r(e);
        var a = n("a8e4"), i = n("e5ea");
        for (var u in i) "default" !== u && function (t) {
            n.d(e, t, function () {
                return i[t]
            })
        }(u);
        n("4211");
        var r = n("2877"), s = Object(r["a"])(i["default"], a["a"], a["b"], !1, null, "287a7c1f", null);
        e["default"] = s.exports
    }, 4138: function (t, e, n) {
        e = t.exports = n("2350")(!1), e.push([t.i, "uni-textarea[data-v-287a7c1f]{text-indent:10px;padding-top:10px;border:1px solid #ddd}", ""])
    }, 4211: function (t, e, n) {
        "use strict";
        var a = n("68fc"), i = n.n(a);
        i.a
    }, "68fc": function (t, e, n) {
        var a = n("4138");
        "string" === typeof a && (a = [[t.i, a, ""]]), a.locals && (t.exports = a.locals);
        var i = n("4f06").default;
        i("0e0955a0", a, !0, {sourceMap: !1, shadowMode: !1})
    }, a0e4: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var a = {
            data: function () {
                return {suggestion: ""}
            }, methods: {
                cancel: function () {
                    this.suggestion = ""
                }
            }
        };
        e.default = a
    }, a8e4: function (t, e, n) {
        "use strict";
        var a = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-uni-view", {staticStyle: {padding: "10px"}}, [n("v-uni-view", {staticClass: "uni-textarea"}, [n("v-uni-textarea", {
                staticStyle: {width: "100%"},
                attrs: {"placeholder-style": "size:20px", placeholder: "您提出的宝贵意见,我们将认真对待,及时予以办理!"},
                model: {
                    value: t.suggestion, callback: function (e) {
                        t.suggestion = e
                    }, expression: "suggestion"
                }
            }), n("v-uni-view", {
                staticStyle: {
                    "text-align": "center",
                    margin: "12px"
                }
            }, [n("v-uni-button", {
                attrs: {
                    type: "primary",
                    size: "mini"
                }
            }, [t._v("提交")]), n("v-uni-button", {
                staticStyle: {"margin-left": "10px"},
                attrs: {type: "secondray", size: "mini"},
                on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.cancel(e)
                    }
                }
            }, [t._v("取消")])], 1)], 1)], 1)
        }, i = [];
        n.d(e, "a", function () {
            return a
        }), n.d(e, "b", function () {
            return i
        })
    }, e5ea: function (t, e, n) {
        "use strict";
        n.r(e);
        var a = n("a0e4"), i = n.n(a);
        for (var u in a) "default" !== u && function (t) {
            n.d(e, t, function () {
                return a[t]
            })
        }(u);
        e["default"] = i.a
    }
}]);