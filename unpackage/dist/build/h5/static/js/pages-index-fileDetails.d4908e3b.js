(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-fileDetails"], {
    "3d66": function (e, t, i) {
        "use strict";
        var a = i("7fb4"), n = i.n(a);
        n.a
    }, "7fb4": function (e, t, i) {
        var a = i("e03f");
        "string" === typeof a && (a = [[e.i, a, ""]]), a.locals && (e.exports = a.locals);
        var n = i("4f06").default;
        n("69cfd638", a, !0, {sourceMap: !1, shadowMode: !1})
    }, "985e": function (e, t, i) {
        "use strict";
        var a = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("v-uni-view", {staticClass: "content"}, [i("v-uni-view", {staticClass: "redBook"}, [i("v-uni-image", {
                staticClass: "img",
                attrs: {src: "../../static/img/dangan.jpg"}
            })], 1), i("v-uni-view", [i("v-uni-view", [i("v-uni-text", [e._v("档案名称:")]), i("v-uni-text", [e._v(e._s(null == e.fileMapper.fkFileName ? "无数据" : e.fileMapper.fkFileName))])], 1), i("v-uni-view", [i("v-uni-text", [e._v("电子标签:")]), i("v-uni-text", [e._v(e._s(null == e.fileMapper.rfid ? "无数据" : e.fileMapper.rfid))])], 1), i("v-uni-view", [i("v-uni-text", [e._v("档案位置:")]), i("v-uni-text", [e._v(e._s(null == e.fileMapper.locationName ? "无数据" : e.fileMapper.locationName))])], 1), i("v-uni-view", [i("v-uni-text", [e._v("档案状态:")]), i("v-uni-text", [e._v(e._s(null == e.fileMapper.state ? "无数据" : e.fileMapper.state))])], 1)], 1)], 1)
        }, n = [];
        i.d(t, "a", function () {
            return a
        }), i.d(t, "b", function () {
            return n
        })
    }, a4d8: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = void 0;
        var a = {
            data: function () {
                return {fileMapper: {}}
            }, onLoad: function (e) {
                var t = this;
                console.log(e.id), t.selectDetail(e.id), setTimeout(function () {
                    t.selectDetail(e.id)
                }, 2e3)
            }, methods: {
                selectDetail: function (e) {
                    var t = this;
                    t.submitAjax("appmodule/appFileMapper/selectAppById?id=" + e, null, "GET", function (e) {
                        e.data.state && (t.fileMapper = e.data.row, console.log(t.fileMapper.fkFileName))
                    })
                }
            }
        };
        t.default = a
    }, e03f: function (e, t, i) {
        t = e.exports = i("2350")(!1), t.push([e.i, ".redBook uni-image[data-v-659c8775]{width:100%}.image[data-v-659c8775]{width:100%}", ""])
    }, ea43: function (e, t, i) {
        "use strict";
        i.r(t);
        var a = i("985e"), n = i("fea5");
        for (var u in n) "default" !== u && function (e) {
            i.d(t, e, function () {
                return n[e]
            })
        }(u);
        i("3d66");
        var l = i("2877"), r = Object(l["a"])(n["default"], a["a"], a["b"], !1, null, "659c8775", null);
        t["default"] = r.exports
    }, fea5: function (e, t, i) {
        "use strict";
        i.r(t);
        var a = i("a4d8"), n = i.n(a);
        for (var u in a) "default" !== u && function (e) {
            i.d(t, e, function () {
                return a[e]
            })
        }(u);
        t["default"] = n.a
    }
}]);