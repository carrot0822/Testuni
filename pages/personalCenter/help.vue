<template>
	<view class="all">
		<view class="help">
			<view><text>如需要帮助请联系售后服务</text></view>
			<view><text>24小时在线：023-88888888</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				width:"",
				height:""
			};
		},
		onLoad() {
			// console.log(uni.getSystemInfo)
			//this.width= 
		}
		
	}
</script>

<style>
	.all {
		width: 100%;
		height: 100%;
		/* display:flex;
		background-color: block;
	    align-items: center;
	    justify-content: center; */
	}
	.help {
		height: 60px;
		margin-top: 50%;
		text-align: center;
		color:#B0B0B0;
		font-size: 20px;
	}
	
</style>
