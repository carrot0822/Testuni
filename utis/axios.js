import {
	ApiUrl
} from './url.js';
let baseUrl = '';
	 baseUrl = uni.getStorageSync('ApiUrl')?uni.getStorageSync('ApiUrl'):''
	

	if (baseUrl) {
		console.log(baseUrl, '设置服务器')
		baseUrl = 'http://' + baseUrl + '/';

	} else {
		baseUrl = ApiUrl;
	}
let axios = function(url, data, method) {
	
	console.log(baseUrl,'现在的baseUrl')
	if (method == undefined) {
		method = 'POST';
	}
	method = method.toLocaleUpperCase();
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
	} else {
		if (token == undefined || token == null) {
			headerValue = {
				"Content-Type": "application/json",
				"authorization": token
			};
		}
	}
	console.log(url,'第二个url')
	let promise = new Promise((resolve, reject) => {
		uni.request({

			url: url.indexOf("http://") == -1 ? baseUrl + url : url,

			data: method == 'POST' ? JSON.stringify(data) : data,
			method: method,
			header: headerValue,
			dataType: 'json',
			success: function(res) {
				console.log(baseUrl + url,'请求的url')
				resolve(res);
			},
			fail: function() {
				console.log(url)
				reject(e)
				uni.showToast({
					icon: 'none',
					title: '请检查网络连接'
				});
			}
		})
	})

	return promise
}

export default axios