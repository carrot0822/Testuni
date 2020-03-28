<template>
	<view class="all">
		<view class="top"></view>
			<image class="touxiang" :src="user.headImgAddress" mode="aspectFill"></image>
		<view class="menu" style="margin-top: 1rem;">
			<view v-for="m in menu" :id="m.id" :key='m.id' @tap="menuClick(m.id,m.url)" hover-class="menu-table-tap"
			 class="menu-table">
				<view class="row">
					<image class="img" :src="m.img"></image>
					<text class="wenzi">{{m.name}}</text>
				</view>
			</view>
		</view>
		<view class="loginOut" :style="{display:display}">
			<view class="loginOutText out" @tap="loginOut()">退出登录</view>
			<view class="loginOutText cancel" @tap="cancel">取消</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menu: [{
						id: '0',
						img: '../../static/img/01.png',
						name: '已借阅',
						url: "borrowHistory"
					},
					{
						id: '1',
						img: '../../static/img/02.png',
						name: '待归还',
						url: "return"
					},
					{
						id: '2',
						img: '../../static/img/03.png',
						name: '已归还',
						url: ""
					},
					{
						id: '3',
						img: '../../static/img/04.png',
						name: '意见反馈',
						url: "feedback"
					},
					{
						id: '4',
						img: '../../static/img/05.png',
						name: '帮助',
						url: "help"
					},
					{
						id: '5',
						img: '../../static/img/06.png',
						name: '注销',
						url: ""
					}
				],
				user: {
					headImgAddress:''
				},
				display: 'none'
			};
		},
		onLoad() {
			let _this = this;
			_this.submitAjax('appmodule/appLogin/userInformation', _this.user, 'GET', function(res) {
				if (res.data.state) {
					_this.user = res.data.row;
					if (_this.user.headImgAddress != null || _this.user.headImgAddress != '') {
						_this.user.headImgAddress = _this.imgUrl + _this.user.headImgAddress;
					} else {
						_this.user.headImgAddress = '../../static/img/test.jpg';
					}
					console.log(_this.user)
				} else {
					uni.showToast({
						title: res.data.msg,
						image: '../../static/img/shibai.png'
					})
					uni.removeStorage({
						key: 'token',
						success: function(res) {
							uni.reLaunch({
								url: '../login/login',
							});
						}
					});
				}
			})
		},
		methods: {
			menuClick: function(id, url) {
				if (id == this.menu.length - 1) {
					this.display = '';
				}
				this.menu[id].tapclass = true;
				uni.navigateTo({
					url: url
				})
			},
			loginOut: function() {
				uni.removeStorage({
					key: 'token',
					success: function(res) {
						uni.reLaunch({
							url: '../login/login',
						});
					}
				});
			},
			cancel: function() {
				this.display = 'none';
			}
		},
		onHide() {
			this.display='none';
		}
	}
</script>

<style>
	.all {
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}

	.top {
		clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%);
		background-color: #1b82d2;
		height: 6rem;
		width: 100%;
	}
	/* tab */
	.menu-table {
		margin: 0 auto;
		width: 94%;
		/* margin-top: 0.5rem; */
		height: 2.5rem;
		border-bottom: 1px solid #B0B0B0;
	}
	.menu-table-tap {
		background-color: rgb(217, 217, 217);
		display: flex;
		height: 2.5rem;
	}

	.img {
		width: 0.5rem;
		height: 0.5rem;
		display: inline-block;
        vertical-align: middle;
	}
	.wenzi {
		font-size: 18px;
		line-height: 2.5rem;
		margin-left: 0.5rem;
	}

	/* 头像 */
	.touxiang {
		position: absolute;
		right: 10px;
		top: 14px;
		display: block;
		margin: 1rem auto;
		width: 80px;
		height:80px;
		border-radius: 50%;
		border: 1px solid #CCC;
	}

	.loginOut{
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.loginOutText{
		color: #fff;
		font-size: 18px;
		text-align: center;
		height: 2.5rem;
		line-height: 2.5rem;
	}
	.out{
		background: #1b82d2;
	}
	.cancel{
		background:rgba(0,0,0,.3);
	}
	
</style>
