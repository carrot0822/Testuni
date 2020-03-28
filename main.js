import Vue from 'vue'
import App from './App'
import {ajax} from './utis/publicAjax.js'
import {ApiUrl} from './utis/url.js'

Vue.config.productionTip = false;
Vue.prototype.submitAjax = ajax;
Vue.prototype.$mjjUrl = ApiUrl;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
