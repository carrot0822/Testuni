<template>
	<view>
		<view class="item">
			<view class="icon"><icon :type="iconType" size="60"/></view>
			<view class="text"><text>{{value}}</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconType:"",
				value:""
			};
		},
		onLoad(){
			let _this=this;
			var file;
			uni.getStorage({
				key: 'file',
				success: function (res) {
					file=res.data;
					_this.submitAjax("appmodule/appFile/lend",{ids:file.id},"post",function(res){ 
						if(res.data.state){
							_this.iconType="success";
							_this.value="《"+file.name+"》已发起借阅流程!";
						}
					})
				}
			});
		}
	}
</script>

<style>
	.icon {
		height: 90px;
		text-align: center;
	}
	.icon icon {
		padding-top: 20px;
	}
	.text {
		height: 40px;
		text-align: center;
	}
</style>
