(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-option-option"], {
    "09bd": function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i("4b67"), o = i.n(n);
        for (var a in n) "default" !== a && function (t) {
            i.d(e, t, function () {
                return n[t]
            })
        }(a);
        e["default"] = o.a
    }, "2e13": function (t, e, i) {
        "use strict";
        var n = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("v-uni-view", {staticClass: "container"}, [i("v-uni-view", {staticClass: "title"}, [t._v("档案架")]), i("v-uni-view", {staticClass: "selectRegionView"}, [t._v("选择区:"), i("v-uni-view", {staticClass: "uni-list"}, [i("v-uni-view", {staticClass: "uni-list-cell"}, [i("v-uni-view", {staticClass: "uni-list-cell-left"}, [t._v("当前选择")]), i("v-uni-view", {staticClass: "uni-list-cell-db"}, [i("v-uni-picker", {
                attrs: {
                    value: t.regionIndex,
                    range: t.regionArray
                }, on: {
                    change: function (e) {
                        e = t.$handleEvent(e), t.regionChange(e)
                    }
                }
            }, [i("v-uni-view", {staticClass: "uni-input"}, [t._v(t._s(t.regionArray[t.regionIndex]))])], 1)], 1)], 1)], 1)], 1), i("v-uni-view", {staticClass: "selectCol"}, [t._v("选择列:"), i("v-uni-view", {staticClass: "uni-list"}, [i("v-uni-view", {staticClass: "uni-list-cell"}, [i("v-uni-view", {staticClass: "uni-list-cell-left"}, [t._v("当前选择")]), i("v-uni-view", {staticClass: "uni-list-cell-db"}, [i("v-uni-picker", {
                attrs: {
                    value: t.colIndex,
                    range: t.cols
                }, on: {
                    change: function (e) {
                        e = t.$handleEvent(e), t.colChange(e)
                    }
                }
            }, [i("v-uni-view", {staticClass: "uni-input"}, [t._v(t._s(t.cols[t.colIndex]))])], 1)], 1)], 1)], 1)], 1), i("v-uni-view", {staticClass: "environment"}, [i("v-uni-view", [i("v-uni-text", [t._v("温度")]), t._v(t._s(t.hjz.wd) + "°C")], 1), i("v-uni-view", [i("v-uni-text", [t._v("湿度")]), t._v(t._s(t.hjz.sd) + "%")], 1), i("v-uni-view", [i("v-uni-text", [t._v("tvoc")]), t._v(t._s(t.hjz.tvoc) + "μg")], 1), i("v-uni-view", [i("v-uni-text", [t._v("pm2.5")]), t._v(t._s(t.hjz.pm25) + "μg")], 1), i("v-uni-view", [i("v-uni-text", [t._v("pm10")]), t._v(t._s(t.hjz.pm10) + "μg")], 1), i("v-uni-view", [i("v-uni-text", [t._v("ch2o")]), t._v(t._s(t.hjz.ch2o) + "μg")], 1), i("v-uni-view", [i("v-uni-text", [t._v("co2")]), t._v(t._s(t.hjz.co2) + "ppm")], 1)], 1), i("v-uni-view", {
                staticClass: "state",
                class: {waring: t.isWaring}
            }, [i("v-uni-text", {
                staticClass: "poilt",
                class: {isWaring: t.isWaring}
            }), t._v(t._s(t.state))], 1), i("v-uni-view", {staticClass: "control-move"}, [i("v-uni-image", {
                attrs: {src: "../../static/option-icon/left.png"},
                on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.left()
                    }
                }
            }), i("v-uni-image", {
                attrs: {src: "../../static/option-icon/stop.png"}, on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.stop()
                    }
                }
            }), i("v-uni-image", {
                attrs: {src: "../../static/option-icon/right.png"}, on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.right()
                    }
                }
            })], 1), i("v-uni-view", {staticClass: "remote-control"}, [i("v-uni-view", {staticClass: "control-box"}, [i("v-uni-view", {
                staticClass: "legend",
                class: {clicked: t.ventState},
                on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.ventilation()
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "ventilation",
                attrs: {src: "../../static/option-icon/ventilation.png"}
            })], 1), t._v("通风")], 1), i("v-uni-view", {staticClass: "control-box"}, [i("v-uni-view", {
                staticClass: "legend",
                class: {clicked: !t.jixieState},
                on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.jixieClick(e)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "locked",
                attrs: {src: t.jixie.lockedUrl}
            })], 1), t._v(t._s(t.jixie.lock))], 1), i("v-uni-view", {staticClass: "control-box"}, [i("v-uni-view", {
                staticClass: "legend",
                class: {clicked: !t.lockState},
                on: {
                    click: function (e) {
                        e = t.$handleEvent(e), t.locked(e)
                    }
                }
            }, [i("v-uni-image", {
                staticClass: "locked",
                attrs: {src: t.status.lockedUrl}
            })], 1), t._v(t._s(t.status.lock))], 1)], 1)], 1)
        }, o = [];
        i.d(e, "a", function () {
            return n
        }), i.d(e, "b", function () {
            return o
        })
    }, "4b67": function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var n = {
            data: function () {
                return {
                    status: {lockedUrl: "../../static/option-icon/locked.png", lock: "锁定"},
                    jixie: {lockedUrl: "../../static/option-icon/locked.png", lock: "机械锁定"},
                    state: "",
                    ventState: !0,
                    isWaring: !0,
                    opState: !0,
                    closeState: !0,
                    lockState: !0,
                    jixieState: !0,
                    regions: [],
                    region: {},
                    regionNum: 0,
                    regionArray: [],
                    hjz: {colNum: 0, wd: 0, sd: 0, pm25: 0, pm10: 0, tvoc: 0, ch2o: 0, co2: 0},
                    cols: [],
                    colIndex: 0,
                    regionIndex: 0
                }
            }, onLoad: function () {
                this.selectRegion(), this.timingGetState()
            }, methods: {
                timingGetState: function () {
                    var t = this;
                    setInterval(function () {
                        t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL?Into=getstates&qu_num=" + t.region.regionNum, null, "get", function (e) {
                            void 0 != e.data && null != e.data && (t.state = e.data.message, "机械解锁" == e.data.message && (t.state = "禁止", t.jixie.lock = "机械解锁", t.jixie.lockedUrl = "../../static/option-icon/unlock.png", t.jixieState = !1), "禁止" != e.data.message && "禁止" != t.state && "锁定" != e.data.message && "到位" != e.data.message && "机械锁定" != e.data.message && "停止" != e.data.message || (t.status.lock = "锁定", t.status.lockedUrl = "../../static/option-icon/locked.png", t.lockState = !0), "机械锁定" == e.data.message && (t.jixie.lock = "机械锁定", t.jixie.lockedUrl = "../../static/option-icon/locked.png", t.jixieState = !0), "解除" != e.data.message && "解锁" != e.data.message || (t.status.lock = "解锁", t.status.lockedUrl = "../../static/option-icon/unlock.png", t.lockState = !1))
                        })
                    }, 1e3), setInterval(function () {
                        t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL?Into=gethumiture&qu_num=" + t.region.regionNum, null, "get", function (e) {
                            t.hjz.wd = e.data.temperature, t.hjz.sd = e.data.humidity, t.hjz.pm25 = e.data.pm25, t.hjz.pm10 = e.data.pm10, t.hjz.tvoc = e.data.tvoc, t.hjz.ch2o = e.data.ch2o, t.hjz.co2 = e.data.co2
                        })
                    }, 2e3)
                }, left: function () {
                    var t = this, e = {type: "leftmove"};
                    e.qu_num = t.region.regionNum, console.log(t.colNum), e.column = t.colNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", e, "post", function (t) {
                    })
                }, stop: function () {
                    var t = this, e = {type: "stop"};
                    e.qu_num = t.region.regionNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", e, "post", function (t) {
                    })
                }, right: function () {
                    var t = this, e = {type: "rightmove"};
                    e.qu_num = t.region.regionNum, console.log(t.colNum), e.column = t.colNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", e, "post", function (t) {
                    })
                }, ventilation: function () {
                    var t = this, e = {type: "aeration"};
                    e.qu_num = t.region.regionNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", e, "post", function (t) {
                    })
                }, opTask: function () {
                    var t = this, e = {type: "openshelf"};
                    e.qu_num = t.region.regionNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", e, "post", function (t) {
                    })
                }, closeTask: function () {
                    var t = this, e = {type: "merge"};
                    e.qu_num = t.region.regionNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", e, "post", function (t) {
                    })
                }, locked: function () {
                    var t = this;
                    if (1 == t.lockState) {
                        var e = {};
                        console.log("解锁"), e.type = "Unlock", e.qu_num = t.region.regionNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", e, "post", function (t) {
                        })
                    } else {
                        console.log("锁定");
                        var i = {type: "locking"};
                        i.qu_num = t.region.regionNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", i, "post", function (t) {
                        })
                    }
                }, jixieClick: function () {
                    var t = this;
                    if (1 == t.jixieState) {
                        var e = {type: "jxunlock"};
                        e.qu_num = t.region.regionNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", e, "post", function (t) {
                        })
                    } else {
                        var i = {type: "jxlocking"};
                        i.qu_num = t.region.regionNum, t.submitAjax("http://" + t.region.reqestIp + ":" + t.region.httpPort + "/GDL", i, "post", function (t) {
                        })
                    }
                }, colChange: function (t) {
                    var e = this;
                    e.colSelect(e.cols[t.target.value]), e.colIndex = t.target.value
                }, regionChange: function (t) {
                    var e = this;
                    e.wsdSelect(e.regions[t.target.value].regionNum), e.regionIndex = t.target.value
                }, wsdSelect: function (t) {
                    var e = this;
                    e.regionNum = t;
                    for (var i = 0; i < e.regions.length; i++) if (e.regions[i].regionNum == e.regionNum) {
                        e.region = e.regions[i];
                        break
                    }
                    e.cols = [];
                    for (var n = 0; n <= e.region.cols; n++) {
                        if ("left" == e.region.gdlType) {
                            if (0 == n) continue;
                            if (n == this.region.cols) break
                        }
                        if ("right" == e.region.gdlType) {
                            if (0 == n) continue;
                            if (n == this.region.cols) break
                        }
                        e.cols.push(n)
                    }
                    e.colNum = this.cols[0], e.submitAjax("http://" + e.region.reqestIp + ":" + e.region.httpPort + "/GDL?Into=gethumiture&qu_num=" + e.region.regionNum, null, "get", function (t) {
                        e.hjz.wd = t.data.temperature, e.hjz.sd = t.data.humidity, e.hjz.pm25 = t.data.pm25, e.hjz.pm10 = t.data.pm10, e.hjz.tvoc = t.data.tvoc, e.hjz.ch2o = t.data.pm25, e.hjz.co2 = t.data.pm25
                    })
                }, colSelect: function (t) {
                    var e = this;
                    e.colNum = t
                }, selectRegion: function () {
                    var t = this;
                    t.submitAjax("storeroommodule/stoTbRegion/selectAllRegion", null, "GET", function (e) {
                        t.regions = e.data.rows, t.regionArray = [];
                        for (var i = 0; i < t.regions.length; i++) t.regionArray.push(t.regions[i].regionName);
                        t.regionNum = e.data.rows[0].regionNum, t.wsdSelect(t.regionNum)
                    })
                }
            }
        };
        e.default = n
    }, a683: function (t, e, i) {
        e = t.exports = i("2350")(!1), e.push([t.i, ".container[data-v-23ff1348]{margin:0;height:100vh;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#fff;font-size:%?26?%;letter-spacing:%?2?%;text-align:center;background-image:-webkit-gradient(linear,left top,left bottom,from(#1b82d2),to(#28a0f5));background-image:-webkit-linear-gradient(top,#1b82d2,#28a0f5);background-image:-o-linear-gradient(top,#1b82d2,#28a0f5);background-image:linear-gradient(180deg,#1b82d2,#28a0f5)}.title[data-v-23ff1348]{position:relative;width:100%;height:10vh;top:0}.environment[data-v-23ff1348]{height:10vh;font-size:%?25?%;\n\t\t/* display: -webkit-box;\n\t\tdisplay: -webkit-flex; */display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.environment uni-text[data-v-23ff1348]{font-size:%?22?%;display:block}.environment uni-view[data-v-23ff1348]{position:relative;width:20%}\n\n\t/* .environment view:nth-child(2) {\n\t\ttop: 10upx;\n\t} */\n\n\t/* .environment view:nth-child(2)::before,\n\t.environment view:nth-child(2)::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\theight: 6vh;\n\t\twidth: 2upx;\n\t\tbackground: white;\n\t} */\n\n\t/* \t.environment view:nth-child(2)::before {\n\t\ttop: 5upx;\n\t\tleft: -10%;\n\t}\n\n\t.environment view:nth-child(2)::after {\n\t\ttop: 5px;\n\t\tright: -10%;\n\t} */.state[data-v-23ff1348]{height:20vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#00ff48}.poilt[data-v-23ff1348]{width:%?29?%;height:%?29?%;margin-right:%?40?%;background-color:#00ff48;-webkit-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 0 %?11?% #00ff48;box-shadow:0 0 %?11?% #00ff48}.control-move[data-v-23ff1348]{height:10vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.control-move uni-image[data-v-23ff1348]{height:%?42?%;width:%?75?%;border:none}.control-move uni-image[data-v-23ff1348]:nth-child(2){height:%?72?%;width:%?56?%}.remote-control[data-v-23ff1348]{margin-top:20vh;height:30vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.remote-control .control-box[data-v-23ff1348]{width:20vw;height:25vw}.control-box .legend[data-v-23ff1348]{width:%?110?%;height:%?110?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:50%;border-radius:50%;border:#fff %?2?% solid;background:rgba(0,0,0,0);margin:%?10?% auto}.ventilation[data-v-23ff1348]{height:%?36?%;width:%?37?%}.opTask[data-v-23ff1348]{width:%?48?%;height:%?38?%}.closeTask[data-v-23ff1348]{width:%?43?%;height:%?38?%}.locked[data-v-23ff1348]{width:%?29?%;height:%?38?%}.control-box .clicked[data-v-23ff1348]{border:none;background:#2595e9}.isWaring[data-v-23ff1348]{background:#ff3531;-webkit-box-shadow:0 0 %?11?% #ff3531;box-shadow:0 0 %?11?% #ff3531}.waring[data-v-23ff1348]{color:#ff0e0a}.selectRegionView[data-v-23ff1348]{position:absolute;left:%?200?%;top:%?40?%}.selectCol[data-v-23ff1348]{position:absolute;left:%?450?%;top:%?40?%}", ""])
    }, e530: function (t, e, i) {
        "use strict";
        i.r(e);
        var n = i("2e13"), o = i("09bd");
        for (var a in o) "default" !== a && function (t) {
            i.d(e, t, function () {
                return o[t]
            })
        }(a);
        i("fdcb");
        var s = i("2877"), r = Object(s["a"])(o["default"], n["a"], n["b"], !1, null, "23ff1348", null);
        e["default"] = r.exports
    }, e954: function (t, e, i) {
        var n = i("a683");
        "string" === typeof n && (n = [[t.i, n, ""]]), n.locals && (t.exports = n.locals);
        var o = i("4f06").default;
        o("78907d5a", n, !0, {sourceMap: !1, shadowMode: !1})
    }, fdcb: function (t, e, i) {
        "use strict";
        var n = i("e954"), o = i.n(n);
        o.a
    }
}]);