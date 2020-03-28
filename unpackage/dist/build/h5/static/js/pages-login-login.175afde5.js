(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login"], {
    6423: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n("9d9a"), a = n.n(i);
        for (var o in i) "default" !== o && function (t) {
            n.d(e, t, function () {
                return i[t]
            })
        }(o);
        e["default"] = a.a
    }, "86b4": function (t, e, n) {
        var i = n("9ca5");
        "string" === typeof i && (i = [[t.i, i, ""]]), i.locals && (t.exports = i.locals);
        var a = n("4f06").default;
        a("72ed0991", i, !0, {sourceMap: !1, shadowMode: !1})
    }, "9ca5": function (t, e, n) {
        e = t.exports = n("2350")(!1), e.push([t.i, ".loginIn[data-v-a8bfcb1a]{height:auto}\n\n/* title */.system-title[data-v-a8bfcb1a]{padding-top:2rem;width:100%;height:8rem;color:#fff;background-color:#30b4ff;-webkit-box-sizing:border-box;box-sizing:border-box}.chn[data-v-a8bfcb1a]{text-align:center;font-size:1.4rem}.eng[data-v-a8bfcb1a]{text-align:center;font-size:14px;margin-top:10px}\n\n/* avatar */.img[data-v-a8bfcb1a]{margin:1rem auto;width:70px;height:70px;-webkit-border-radius:50%;border-radius:50%;display:block}\n\n/* input */uni-input[data-v-a8bfcb1a]{text-indent:.6rem;margin:1rem auto;-webkit-border-radius:10px;border-radius:10px;width:86%;height:2rem;font-size:14px;border:1px solid #30b4ff}uni-button[data-v-a8bfcb1a]{margin:1rem auto;height:2.2rem;width:86%;background:#28a0f5;color:#fff;-webkit-border-radius:10px;border-radius:10px;font-size:.8rem;line-height:2.2rem;letter-spacing:.5rem}", ""])
    }, "9d9a": function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var i = {
            data: function () {
                return {user: {account: "", password: ""}, ip: ""}
            }, onLoad: function () {
                uni.getStorage({
                    key: "token", success: function (t) {
                        void 0 == t.data && null == t.data || uni.reLaunch({url: "../index/index"})
                    }
                })
            }, methods: {
                login: function () {
                    var t = this;
                    t.submitAjax("appmodule/appLogin/userLogin", t.user, "POST", function (t) {
                        t.data.state ? (uni.showToast({
                            title: t.data.msg,
                            image: "../../static/img/chenggong.png"
                        }), uni.setStorage({
                            key: "token",
                            data: t.data.row
                        }), uni.reLaunch({url: "../index/index"})) : uni.showToast({
                            title: t.data.msg,
                            image: "../../static/img/shibai.png"
                        })
                    })
                }, settingIp: function () {
                    var t = this;
                    uni.setStorage({key: "ApiUrl", data: t.ip}), uni.showToast({
                        title: "ip设置成功",
                        image: "../../static/img/chenggong.png"
                    })
                }
            }
        };
        e.default = i
    }, b7a3: function (t, e, n) {
        "use strict";
        n.r(e);
        var i = n("e86a"), a = n("6423");
        for (var o in a) "default" !== o && function (t) {
            n.d(e, t, function () {
                return a[t]
            })
        }(o);
        n("f885");
        var r = n("2877"), u = Object(r["a"])(a["default"], i["a"], i["b"], !1, null, "a8bfcb1a", null);
        e["default"] = u.exports
    }, e86a: function (t, e, n) {
        "use strict";
        var i = function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("v-uni-view", {staticClass: "loginIn"}, [n("v-uni-view", {staticClass: "system-title"}, [n("v-uni-view", [n("v-uni-view", {staticClass: "chn"}, [n("v-uni-text", [t._v("智慧档案管理系统")])], 1), n("v-uni-view", {staticClass: "eng"}, [n("v-uni-text", [t._v("Smart file management system")])], 1)], 1)], 1), n("v-uni-view", {staticClass: "system-login"}, [n("v-uni-input", {
                attrs: {type: "text"},
                model: {
                    value: t.ip, callback: function (e) {
                        t.ip = e
                    }, expression: "ip"
                }
            }), n("v-uni-button", {
                on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.settingIp()
                    }
                }
            }, [t._v("设置服务器ip")]), n("v-uni-view", [n("v-uni-input", {
                attrs: {type: "text", placeholder: "请输入账号"},
                model: {
                    value: t.user.account, callback: function (e) {
                        t.$set(t.user, "account", e)
                    }, expression: "user.account"
                }
            })], 1), n("v-uni-view", [n("v-uni-input", {
                attrs: {type: "text", password: "true", placeholder: "请输入密码"},
                model: {
                    value: t.user.password, callback: function (e) {
                        t.$set(t.user, "password", e)
                    }, expression: "user.password"
                }
            })], 1), n("v-uni-button", {
                on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.login()
                    }
                }
            }, [t._v("登录")])], 1)], 1)
        }, a = [];
        n.d(e, "a", function () {
            return i
        }), n.d(e, "b", function () {
            return a
        })
    }, f885: function (t, e, n) {
        "use strict";
        var i = n("86b4"), a = n.n(i);
        a.a
    }
}]);