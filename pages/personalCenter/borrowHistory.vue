<template>
	<view class="detail">
		<view class="menu-table">
			<view style="width:36%;">档案名称</view>
			<view style="width:36%;">存放位置</view>
			<view style="width:28%;">操作</view>
		</view>

		<view class="menu-item" style="margin-top: 42px;">
			<view v-for="m in menu" v-bind:id="m.id"  class="menu-item-table">
				<view class="fileName" style="width: 36%;"><text>{{m.fkFileName}}</text></image>
				</view>
				<view class="fileLocation" style="width: 36%;"><text>{{m.location}}</text></view>
				<view class="operate" style="width: 28%;" @tap="lend(m.fkFileId,m.fkFileName)"><text>{{m.operate}}</text></view>
			</view>
			<br>
		</view>
		<view class="noBorrow" :style="{display:display}">{{message}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menu: [],
				display: 'none',
				message: ''
			};
		},
		onLoad() {
			let _this = this;
			_this.submitAjax("appmodule/appFile/selectBorrowHistory", "", "get", function(res) {
				if (res.data.state) {
					_this.menu = res.data.rows;
				} else {
					_this.display = '';
					_this.message = res.data.message;
				}
			})
		},
		methods: {
			lend: function(id, name) {
				/* let _this=this; */
				/* _this.submitAjax("appmodule/appFile/lend",{ids:id},"post",function(res){
					console.log(res.data);
					if(res.data.state){
						
					}
				}) */
				uni.setStorage({
					key: "file",
					data: {
						id: id,
						name: name
					}
				})
				uni.navigateTo({
					url: 'borrowProcess'
				})
			}
		}
	}
</script>

<style>
	.detail {
		/* position: relative; */
	}

	.menu-table {
		width: 100%;
		display: flex;
		text-align: center;
		justify-content: center;
		flex-direction: row;
		position: fixed;
		top: 44px;
		z-index: 9999;	
		background: #fff;
		box-shadow: 1px 1px 2px 1px #ccc;
		height: 2;
		line-height: 2rem;
		font-size: 18px;
	}

	.menu-item-table {
		width: 100%;
		display: flex;
		text-align: center;
		justify-content: center;
		flex-direction: row;
		height: 2;
		line-height: 2rem;
		font-size: 16px;
	}

	.fileName {
		width: 40%;
		text-align: center;
		font-size: 16px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.operate {
		width: 20%;
		text-align: center;
		color: #28A0F5;
		font-size: 14px;
	}
</style>
