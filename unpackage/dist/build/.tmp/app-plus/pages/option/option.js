(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/option/option"],{"0d1b":function(t,e,o){"use strict";o.r(e);var n=o("3cc3"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a},"1be0":function(t,e,o){},"3cc3":function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(o("a34a")),i=s(o("3ba7"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,o,n,a,i,s){try{var r=t[i](s),u=r.value}catch(c){return void o(c)}r.done?e(u):Promise.resolve(u).then(n,a)}function u(t){return function(){var e=this,o=arguments;return new Promise(function(n,a){var i=t.apply(e,o);function s(t){r(i,n,a,s,u,"next",t)}function u(t){r(i,n,a,s,u,"throw",t)}s(void 0)})}}var c={data:function(){return{tabInd:0,statusBarHeight:0,bodyHeight:0,state:"",isLocked:!0,storeroomArray:[],storeroomIndex:0,storeroomNum:0,storerooms:[],regions:[],regionArray:[],regionIndex:0,regionNum:0,cols:[],colIndex:0,direction:"",curState:"",isMove:!1,hjz:{wd:0,sd:0,co2:0,ch20:0,pm10:0,pm25:0,tvoc:0},timeer:null}},watch:{storeroomNum:function(e,o){t.setStorage({key:"fkStoredId",data:e,success:function(){}})}},onLoad:function(){this.statusBarHeight=t.getSystemInfoSync()["statusBarHeight"],this.bodyHeight=t.getSystemInfoSync()["windowHeight"]-this.statusBarHeight-48;var e=t.getStorageSync("storeroomIndex");e?(n("log",e,"库房值存在的话"," at pages\\option\\option.vue:273"),this.storeroomIndex=e):t.setStorageSync("storeroomIndex",0);var o=t.getStorageSync("regionIndex");o?(n("log",o,"值存在的话"," at pages\\option\\option.vue:280"),this.regionIndex=o):t.setStorageSync("regionIndex",0);var a=t.getStorageSync("colIndex");a?this.colIndex=a:t.setStorageSync("colIndex",0)},onShow:function(){clearInterval(this.timeer),this.timeer=null,this.selectStoreRoom(),n("log","调试定时器"," at pages\\option\\option.vue:302"),this.colIndex=t.getStorageSync("colIndex"),this.regionIndex=t.getStorageSync("regionIndex")},onHide:function(){n("log",this.timeer,"编译器"," at pages\\option\\option.vue:308"),clearInterval(this.timeer),this.timeer=null,n("log",this.timeer,"定时器没关掉吗"," at pages\\option\\option.vue:311")},methods:{onPageJump:function(){t.navigateTo({url:"../search/search"})},checkCache:function(){},scrollL:function(e){var o=this,n=e.detail.scrollLeft,a=t.createSelectorQuery().in(this);a.select(".temp_shelf .item_box").boundingClientRect(function(t){var e=Math.floor(n/(3*t.width));o.tabInd=e}).exec()},upper:function(t){this.tabInd=0},lower:function(t){this.tabInd=1},selectStoreRoom:function(){var t=this;t.submitAjax("environmentmodule/wkStoTbStore/selectWkStoTbStore",null,"GET",function(e){t.storeroomArray=[],t.storerooms=e.data.rows;var o=!0,a=!1,i=void 0;try{for(var s,r=e.data.rows[Symbol.iterator]();!(o=(s=r.next()).done);o=!0){var u=s.value;t.storeroomArray.push(u.storeName)}}catch(l){a=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}var c=t.storeroomIndex;n("log",c,"取到了吧"," at pages\\option\\option.vue:347"),t.storeroomNum=e.data.rows[c].id,t.selectRegion(t.storeroomNum)})},storeroomChange:function(e){var o=this;o.storeroomNum=o.storerooms[e.target.value].id,o.storeroomIndex=e.target.value,t.setStorageSync("storeroomIndex",e.target.value),this.colIndex=0,this.regionIndex=0,t.setStorageSync("regionIndex",0),t.setStorageSync("colIndex",0),o.selectRegion(o.storeroomNum)},selectRegion:function(t){var e=this;clearInterval(this.timeer),this.timeer=null,n("log","只打开一个定时器",this.timeer," at pages\\option\\option.vue:372"),e.submitAjax("storeroommodule/stoTbRegion/selectByBind?fkStoreId="+t,null,"GET",function(t){e.regionArray=[],e.regions=t.data.rows;var o=!0,a=!1,i=void 0;try{for(var s,r=e.regions[Symbol.iterator]();!(o=(s=r.next()).done);o=!0){var u=s.value;e.regionArray.push(u.regionName)}}catch(l){a=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}var c=e.regionIndex;e.regionNum=t.data.rows[c].regionNum,e.getCols(e.regionNum),e.timeer=setInterval(function(){e.timingGetState(),n("log","定时器没关上吗"," at pages\\option\\option.vue:386")},3e3)})},regionChange:function(e){var o=this;o.regionNum=o.regions[e.target.value].regionNum,o.regionIndex=e.target.value,t.setStorage({key:"regionIndex",data:e.target.value,success:function(){n("log","success 存储区号",e.target.value," at pages\\option\\option.vue:399")}}),o.getCols(o.regionNum)},getCols:function(t){var e=this;e.cols=[];var o={},n=!0,a=!1,i=void 0;try{for(var s,r=e.regions[Symbol.iterator]();!(n=(s=r.next()).done);n=!0){var u=s.value;if(u.regionNum==t){o=u;break}}}catch(l){a=!0,i=l}finally{try{n||null==r.return||r.return()}finally{if(a)throw i}}for(var c=1;c<=o.cols;c++){if(("left"==o.gdlType||"right"==o.gdlType)&&c==o.cols)break;e.cols.push(c)}e.colNum=e.cols[0]},colChange:function(e){var o=this;o.colNum=o.cols[e.target.value],o.colIndex=e.target.value,t.setStorage({key:"colIndex",data:e.target.value,success:function(){n("log","success 存储列号",e.target.value," at pages\\option\\option.vue:433")}})},timingGetState:function(){var t=this,e=t.regionNum;t.submitAjax("denseShelves/getstates?quNum="+e,null,"POST",function(e){if(e.data.state&&e.data.row){var o=JSON.parse(e.data.row);t.state=o.message;var n=["正在左移中","正在右移中","解除"],a=["禁止","锁定","到位","机械锁定","停止","门禁"];n.includes(o.message)?t.isLocked=!1:a.includes(o.message)&&(t.isLocked=!0),"禁止"!=t.state&&"锁定"!=t.state&&"到位"!=t.state&&"机械锁定"!=t.state&&"停止"!=t.state||(t.isMove=!1),"正在右移中"!=t.state&&"正在左移中"!=t.state||(t.isMove=!0)}}),t.getGethumiture(e)},getGethumiture:function(t){var e=this;e.submitAjax("countmodule/storeAndRegionCount/getNewHumiture?quNum="+t,null,"POST",function(t){if(t.data.state&&t.data.row){var o=t.data.row;e.hjz.wd=o.wd.toFixed(1)?o.wd.toFixed(1):0,e.hjz.sd=o.sd.toFixed(1)?o.sd.toFixed(1):0,e.hjz.tvoc=o.tvoc.toFixed(1)?o.tvoc.toFixed(1):0,e.hjz.co2=o.co2.toFixed(1)?o.co2.toFixed(1):0,e.hjz.ch20=o.ch20.toFixed(1)?o.ch20.toFixed(1):0,e.hjz.pm10=o.pm10.toFixed(1)?o.pm10.toFixed(1):0,e.hjz.pm25=o.pm25.toFixed(1)?o.pm25.toFixed(1):0}})},locked:function(){var e=this,o=e.regionNum;e.isLocked?e.submitAjax("denseShelves/Unlock?quNum="+o,null,"POST",function(o){if(o.data.state&&o.data.row){JSON.parse(o.data.row);e.isLocked=!1,t.showToast({title:"解锁成功",duration:2e3})}else t.showModal({title:"提示",content:o.data.msg,showCancel:!1,success:function(t){}})}):e.submitAjax("denseShelves/locking?quNum="+o,null,"POST",function(o){if(o.data.state&&o.data.row){JSON.parse(o.data.row);e.isLocked=!0,t.showToast({title:"锁定成功",duration:2e3})}else t.showModal({title:"提示",content:o.data.msg,showCancel:!1,success:function(t){}})})},opTask:function(){var e=this;e.submitAjax("denseShelves/openshelf?quNum="+e.regionNum,null,"POST",function(e){e.data.state&&e.data.row||t.showModal({title:"提示",content:e.data.msg,showCancel:!1})})},closeTask:function(){var e=this;e.submitAjax("denseShelves/merge?quNum="+e.regionNum,null,"POST",function(o){o.data.state&&o.data.row?(t.showToast({title:"正在合架",duration:2e3}),e.isLocked):t.showModal({title:"提示",content:o.data.msg,showCancel:!1,success:function(t){t.confirm?n("log","用户点击确定"," at pages\\option\\option.vue:570"):t.cancel&&n("log","用户点击取消"," at pages\\option\\option.vue:572")}})})},ventilation:function(){var e=this;e.submitAjax("denseShelves/aeration?quNum="+e.regionNum,null,"POST",function(o){o.data.state&&o.data.row?(t.showToast({title:"正在通风",duration:2e3}),e.isLocked):t.showModal({title:"提示",content:o.data.msg,showCancel:!1,success:function(t){t.confirm?n("log","用户点击确定"," at pages\\option\\option.vue:599"):t.cancel&&n("log","用户点击取消"," at pages\\option\\option.vue:601")}})})},left:function(){var e=this;e.isLocked?t.showModal({title:"提示",content:"密集架已被锁定 请先解除锁定",showCancel:!1}):e.submitAjax("denseShelves/leftmove?quNum="+e.regionNum+"&column="+e.colNum,null,"POST",function(e){e.data.state&&e.data.row?t.showToast({title:"正在左移",duration:2e3}):t.showModal({title:"提示",content:e.data.msg,showCancel:!1})})},stop:function(){var e=this;e.isMove=!1,e.submitAjax("denseShelves/stop?quNum="+e.regionNum,null,"POST",function(o){o.data.state&&o.data.row?(t.showToast({title:"正在停止",duration:2e3}),e.isLocked):t.showModal({title:"提示",content:o.data.msg,showCancel:!1,success:function(t){t.confirm?n("log","用户点击确定"," at pages\\option\\option.vue:663"):t.cancel&&n("log","用户点击取消"," at pages\\option\\option.vue:665")}})})},right:function(){var e=this;e.isLocked?t.showModal({title:"提示",content:"密集架已被锁定 请先解除锁定",showCancel:!1}):e.submitAjax("denseShelves/rightmove?quNum="+e.regionNum+"&column="+e.colNum,null,"POST",function(e){e.data.state&&e.data.row?t.showToast({title:"正在右移",duration:2e3}):t.showModal({title:"提示",content:e.data.msg,showCancel:!1})})},rightMove:function(){var t=this;this._jugeState().then(function(){n("log","这个right执行"," at pages\\option\\option.vue:712"),t.right()})},leftMove:function(){var t=this;this._jugeState().then(function(){n("log","这个left执行"," at pages\\option\\option.vue:718"),t.left()})},_jugeState:function(){var t=u(a.default.mark(function t(){var e,o,s,r,u;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.regionNum,t.next=3,(0,i.default)(this.$mjjUrl+"denseShelves/getstates?quNum="+e,null,"POST");case 3:o=t.sent,s=JSON.parse(o.data.row),r=["正在左移中","正在右移中","解除"],u=["禁止","锁定","到位","机械锁定","停止","门禁"],r.includes(s.message)?this.isLocked=!1:u.includes(s.message)&&(this.isLocked=!0),n("log","这个先执行"," at pages\\option\\option.vue:739");case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=c}).call(this,o("6e42")["default"],o("0de9")["default"])},"55e1":function(t,e,o){"use strict";o.r(e);var n=o("d3b4"),a=o("0d1b");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("af6f");var s,r=o("f0c5"),u=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=u.exports},af6f:function(t,e,o){"use strict";var n=o("1be0"),a=o.n(n);a.a},d3b4:function(t,e,o){"use strict";var n,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"b",function(){return a}),o.d(e,"c",function(){return i}),o.d(e,"a",function(){return n})},da49:function(t,e,o){"use strict";(function(t){o("f821"),o("921b");n(o("66fd"));var e=n(o("55e1"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])}},[["da49","common/runtime","common/vendor"]]]);