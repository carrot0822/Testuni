<template>
	<view class="loginIn">
		<view class="system-title">
			<view v-show="!heightChange">
				<view class="eng"><text>Sign in</text></view>
				<view class="chn"><text>请登录</text></view>
			</view>

		</view>
		<view class="system-login">
			<view class="login_text">服务器IP地址</view>
			<input v-model="ip" type="text"></input>
			<view class="login_text">摄像头IP地址</view>
			<input v-model="cameraIp" type="text"></input>
			<button @tap="settingIp()" style="color: #ECECEC;background: #D5D5D5;font-size: 32upx;">设置服务器ip</button>
			<view class="login_text">账号</view>
			<view><input type="text" v-model="user.account" /> </view>
			<view class="login_text">密码</view>
			<input @focus="test()" @blur="test2()" type="text" password="true" v-model="user.password" />

			<button @tap="login()" style="color: #FFF;background: #1C87FF;margin-top: 70upx;font-size: 34upx;">登录</button>

		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				user: {
					account: '',
					password: ''
				},
				ip: '',
				cameraIp: '',
				heightChange: false,
				windowHeight: '',
			};
		},
		onLoad() {
			let _this = this;
			//判断本地是否存储用户信息
			// uni.getStorage({
			// 	key: 'token',
			// 	success: function(res) {
			// 		if (res.data != undefined || res.data != null) {
			// 			//跳转到首页
			// 			uni.reLaunch({
			// 				url: '../option/option',
			// 			});
			// 		}
			// 	}
			// });
			//保存登陆的ip

			uni.getStorage({
				key: 'ApiUrl',
				success: function(res) {
					if (res.data != undefined || res.data != null) {
						//默认值为上次登陆ip
						_this.ip = res.data;
					}
				}
			});
			uni.getStorage({
				key: 'cameraIp',
				success: function(res) {
					if (res.data != undefined || res.data != null) {
						//默认值为上次登陆ip
						_this.cameraIp = res.data;
					}
				}
			});
		},
		mounted() {
			uni.getSystemInfo({
				success: (res) => {
					this.windowHeight = res.windowHeight;
				}
			});
			console.log(this.getClientHight(), '正常的高度')
		},
		methods: {
			getClientHight() {
				let that = this;
				var height
				uni.getSystemInfo({
					success(res) {
						console.log(res.screenHeight); //获取手机设备屏幕高度
						height = res.screenHeight
						that.clientHight = res.screenHeight;
						that.footerHight = that.clientHight * 0.1;
					}
				})
				return height
			},
			test(e) {
				this.heightChange = true
			},
			test2(){
				this.heightChange = false
			},
			login: function() {
				let _this = this;
				_this.submitAjax('appmodule/appLogin/userLogin', _this.user, 'POST',
					function(res) {
						if (res.data.state) {
							//弹窗操作成功
							uni.showToast({
								title: res.data.msg,
								image: '../../static/img/chenggong.png'
							})
							//设置token在本地
							// uni.setStorage({
							// 	key: 'token',
							// 	data: res.data.row,
							// });
							//跳转到首页
							uni.reLaunch({
								url: '../option/option',
							});
						} else {
							//登录失败弹窗
							uni.showModal({
								title: '提示',
								content: res.data.msg,
								showCancel: false,
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					})
			},

			settingIp: function() {
				let _this = this;
				uni.setStorage({
					key: 'ApiUrl',
					data: _this.ip,
				});
				uni.setStorage({
					key: 'cameraIp',
					data: _this.cameraIp,
				});
				uni.showToast({
					title: 'ip设置成功',
					image: '../../static/img/chenggong.png'
				})
			}
		}
	}
</script>

<style>
	.loginIn {
		height: 100vh;
		width: 100%;
		position: relative;
		overflow: hidden;
	}

	/* title */
	.system-title {
		height: 30%;
		width: 100%;
		padding-top: 50upx;
		padding-left: 40upx;
		color: #fff;
		background-color: #1C87FF;
	}

	.system-title .eng {
		position: absolute;
		top: 6%;
		font-size: 60upx;
		font-family: Helvetica;
		font-weight: bold;
	}

	.system-title .chn {
		position: absolute;
		top: 12%;
		font-size: 40upx;
		font-family: PingFang SC;
		font-weight: bold;
	}

	/* login */
	.system-login {
		height: 78%;
		width: 90%;
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.1);
		border-radius: 30upx;
		overflow: hidden;
	}

	.system-login input {
		border-bottom: 1px solid #D5D5D5;
		margin: 10upx auto;
		padding-left: 1rem;
		width: 86%;
		height: 2rem;
		font-size: 30upx;
	}

	.system-login .login_text {
		margin-top: 50upx;
		margin-left: 40upx;
		font-size: 30upx;
		font-family: PingFang SC;
		font-weight: 500;
		color: rgba(153, 153, 153, 1);
	}

	.system-login button {
		margin: 1rem auto;
		height: 2.6rem;
		width: 86%;
		background: rgba(28, 135, 255, 1);
		border-radius: 40upx;
		font-size: 30upx;
		line-height: 2.6rem;
	}

	.system-login button::after {
		border: none;
	}
</style>
