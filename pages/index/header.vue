<template>
	<view class="header">
		<image src="../../static/header.png"></image>
		<view class="header_wel">WELCOME</view>
		<view class="header_arch">智慧档案管理系统</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {  
				
			}
		},
		methods: {
			
		},
		onLoad() {
			setTimeout(function(){
				uni.navigateTo({
					url: '../login/login'
				});
			}, 3000);
		}
	}
</script>

<style>
	.header_wel{ 
		font-size:60upx;
		font-family:Helvetica;
		font-weight:800;
		color:rgba(28,135,255,1);
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translateX(-50%);
	}
	.header_arch{ 
		font-size:46upx;
		font-family:PingFang SC;
		font-weight:400;
		color:rgba(28,135,255,1);
		position: absolute;
		top: 68%;
		left: 50%;
		transform: translateX(-50%);
	}
	.header image{
		width: 100%;
		height: 100%; 
		background-size: 100% 100%;
		position: absolute;
	}
</style>

