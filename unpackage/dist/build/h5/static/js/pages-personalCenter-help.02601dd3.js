(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-personalCenter-help"], {
    "05de": function (t, e, n) {
        e = t.exports = n("2350")(!1), e.push([t.i, ".all[data-v-2594cc0b]{width:100%;height:100%\n\t/* display:flex;\n\tbackground-color: block;\n    align-items: center;\n    justify-content: center; */}.help[data-v-2594cc0b]{height:60px;margin-top:50%;text-align:center;color:#b0b0b0;font-size:20px}", ""])
    }, 3134: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n("e97d"), a = n.n(i);
        for (var u in i) "default" !== u && function (t) {
            n.d(e, t, function () {
                return i[t]
            })
        }(u);
        e["default"] = a.a
    }, "37ce": function (t, e, n) {
        var i = n("05de");
        "string" === typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("fed4566e", i, !0, {sourceMap: !1, shadowMode: !1})
    }, 7512: function (t, e, n) {
        "use strict";
        var i = n("37ce"), a = n.n(i);
        a.a
    }, "912b": function (t, e, n) {
        "use strict";
        var i = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-uni-view", {staticClass: "all"}, [n("v-uni-view", {staticClass: "help"}, [n("v-uni-view", [n("v-uni-text", [t._v("如需要帮助请联系售后服务")])], 1), n("v-uni-view", [n("v-uni-text", [t._v("24小时在线：023-88888888")])], 1)], 1)], 1)
        }, a = [];
        n.d(e, "a", function () {
            return i
        }), n.d(e, "b", function () {
            return a
        })
    }, b6b3: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n("912b"), a = n("3134");
        for (var u in a) "default" !== u && function (t) {
            n.d(e, t, function () {
                return a[t]
            })
        }(u);
        n("7512");
        var o = n("2877"), c = Object(o["a"])(a["default"], i["a"], i["b"], !1, null, "2594cc0b", null);
        e["default"] = c.exports
    }, e97d: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var i = {
            data: function () {
                return {width: "", height: ""}
            }, onLoad: function () {
                console.log(uni.getSystemInfo)
            }
        };
        e.default = i
    }
}]);