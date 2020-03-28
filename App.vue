<script>
	export default {
		onLaunch: function () {
			console.log('App Launch');
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.cell{
  background-color: #fff;
  font-size: 16px;
}
.cell-item{
   padding: 16rpx 20rpx;
   border-bottom: 1rpx solid #ddd;
}
</style>
