import {
	ApiUrl
} from './url.js';
const ajax = (url, data, method, success) => {
	let baseUrl = '';
	uni.getStorage({
		key: 'ApiUrl',
		success: function(res) {
			baseUrl = res.data;
		}
	});

	if (baseUrl) {
		console.log(baseUrl,'设置服务器')
		baseUrl = 'http://' + baseUrl + '/';

	} else {
		baseUrl = ApiUrl;
	}


	//console.log(baseUrl)
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
