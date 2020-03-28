<template>
	<view style="padding: 10px;">
            <view class="uni-textarea">
                <textarea style="width: 100%;" placeholder-style="size:20px" placeholder="您提出的宝贵意见,我们将认真对待,及时予以办理!"
				v-model="suggestion"/>
				<view style="text-align: center;margin: 12px;">
					<button type="primary" size="mini">提交</button>
					<button type="secondray" size="mini" style="margin-left: 10px;" @tap="cancel">取消</button>
				</view>
            </view>
	</view> 
</template>

<script>
	export default {
		data() {
			return {
				suggestion:''
			};
		},
		methods:{
			cancel(){
				this.suggestion=''
			}
		}
	}
</script>

<style>
	textarea{
		text-indent: 10px;
		padding-top: 10px;
		border: 1px solid #ddd;
	}
</style>
