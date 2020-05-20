import {
	ApiUrl
} from './url.js';
const ajax = (url, data, method, success) => {
	let baseUrl = '';
	/*
	uni.getStorage({
		key: 'ApiUrl',
		success: function(res) {
			baseUrl = res.data;
		}
	});
	*/
   // 更新之后 异步API似乎不好用了
	let test = uni.getStorageSync('ApiUrl')
	console.log(test,'异步还是同步')
	baseUrl = 'http://' + test + '/';
	/*
	if (baseUrl) {
		console.log(baseUrl,'设置服务器')
		baseUrl = 'http://' + baseUrl + '/';

	} else {
		baseUrl = ApiUrl;
	}*/

	console.log('打印的东西')
	console.log(baseUrl,'设置服务器')
	if (method == undefined) {
		method = 'POST';
	}
	method = method.toLocaleUpperCase();
	success = success || function() {};
	let token;
	uni.getStorage({
		key: 'token',
		success: function(res) {
			token = res.data;
		}
	});
	let headerValue = {};
	if (url.indexOf("http://") != -1) {
		headerValue = {
			"Content-Type": "application/x-www-form-urlencoded"
		};
		/* headerValue={"Content-Type":"application/json"}; */
	} else {
		if (token == undefined || token == null) {
			headerValue = {
				"Content-Type": "application/json",
				"authorization": token
			};
		}
	}
	uni.request({

		url: url.indexOf("http://") == -1 ? baseUrl + url : url,

		data: method == 'POST' ? JSON.stringify(data) : data,
		method: method,
		header: headerValue,
		dataType: 'json',
		success: function(res) {
			success(res);
		},
		fail: function() {
			console.log(url)
			uni.showToast({
				icon: 'none',
				title: '请检查网络连接'
			});
		}
	})
}

export {
	ajax
}
