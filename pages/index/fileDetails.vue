<template>
	<view class="content">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" v-if="selectArchArr.length!=0" @scroll="scroll">
			<view v-for="(item,index) in selectArchArr" :key="index" class="uni-card scroll-view-item">
				<!-- 标题 -->
				<view class="uni-card__header">
					<image src="../../static/search-icon/arch.png" mode="aspectFill" class="uni-card__header-extra-img" />
					<text class="uni-card__header-title-text">档号：{{item.fileNum}}</text>
				</view>
				<!-- 内容 -->
				<view class="uni-card__content uni-card__content--pd">
					<view class="uni-card__content--list">
						<text class="uni-card__content--title">题名</text>
						<scroll-view class="scroll-view_H uni-card__content--content" scroll-x="true">
							{{item.fkFileName}}
						</scroll-view>
					</view>
					<view class="uni-card__content--list">
						<text class="uni-card__content--title">所属位置</text>
						<scroll-view class="scroll-view_H uni-card__content--content" scroll-x="true">
							{{item.locationName}}
						</scroll-view>
					</view>
					<view class="uni-card__content--list">
						<text class="uni-card__content--title">状态</text>
						<view class="uni-card__content--content">
							<text v-if="item.state=='在架'" class="circle_item" style="background: #1C87FF;"></text>
							<text v-if="item.state=='未上架'" class="circle_item" style="background: #F86E6E;"></text>
							<text v-if="item.state=='借出'" class="circle_item" style="background: #DECC00;"></text>
							<text v-if="item.state=='销毁中'" class="circle_item" style="background: #d0d0d0;"></text>
							<text v-if="item.state=='移交'" class="circle_item" style="background: #06ff00;"></text>
							<text v-if="item.state=='待取'" class="circle_item" style="background: #0BCFE1;"></text>
							<text v-if="item.state=='遗失'" class="circle_item" style="background: #393D49;"></text>
							<text v-if="item.state=='移交中'" class="circle_item" style="background: #1AB394;"></text>
							<text>{{item.state}}</text>
						</view>
					</view>
					<view class="uni-card__content--list">
						<text class="uni-card__content--title"></text>
						<view @tap="openshelf(item.fkLocationId)" class="uni-card__content--content uni-card__btn">打开架体</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!--
		<uni-load-more  v-if="page.totalPage>1" :loadingType="loadingType" :contentText="contentText" ></uni-load-more>
		-->
		<view class="" v-if="selectArchArr.length==0" style="text-align: center;margin-top: 200upx;color:#d0d0d0;font-size: 34upx;">
			暂无相关数据！
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more.vue';
	import axios from '../../utis/axios.js'
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				loadingType: 0, //定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
				contentText: {
					contentdown: '上拉显示更多',
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了'
				},
				fileId:'',
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				fileMapper: {},
				selectArchArr: [],

				fkStoredId: '',
				fkFileName: '',
				// 分页
				page: {
					currentPage: 1,
					pageSize: 5,
					totalPage: 0
				}
			}
		},
		onLoad(option) {
			let _this = this;
			_this.fkStoredId = uni.getStorageSync('fkStoredId')
			console.log(_this.fkStoredId,'取不到？')
			/*
			uni.getStorage({
				key: 'fkStoredId',
				success: function(res) {
					_this.fkStoredId = res.data;
				}
			});*/
			console.log(option,'传递来的数据')
			_this.fkFileName = option.fkFileName;
			_this.fileId = option.id?option.id:'';
			_this.selectArchList(option.id);
		},
		// 下拉刷新
		onReachBottom() {
			let _this = this;
			if (_this.page.currentPage <= _this.page.totalPage) {
				_this.page.currentPage++;
				_this.selectArch();
			} else {
				_this.loadingType = 2;
			}
			console.log(_this.page.totalPage)
		},

		onPullDownRefresh() {
			console.log('refresh');
			this.initSearch()
		},
		methods: {
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			initSearch(id) {
				this.currentPage = 1
				let _this = this;
				// 如果是不是ID具体进来的
				if(_this.fkFileName){
					var data = {
						fkFileName: _this.fkFileName,
						fkStoredId: _this.fkStoredId,
						currentPage: _this.page.currentPage,
						pageSize: _this.page.pageSize
					}
					console.log(data, '搜索数据')
					_this.submitAjax('appmodule/appFileMapper/selectAppByName', data, 'GET',
						function(res) {
							if (res.data.state) {
								_this.page.totalPage = res.data.page;
								_this.selectArchArr = res.data.rows
								uni.showToast({
									title: '查询成功',
									duration: 1000
								});
							} else {
								uni.showToast({
									title: res.data.msg,
									image: '../../static/del.png',
									duration: 2000
								});
							}
							uni.stopPullDownRefresh();
						})
				}
				
				if(id){
					_this.submitAjax('appmodule/appFileMapper/selectAppById?id=' + id, null, 'GET', function(res) {
						console.log(res)
						if (res.data.state) {
							_this.selectArchArr.push(res.data.row);
							_this.page.totalPage = 1;
						}else{
							
						}
						uni.stopPullDownRefresh();
					})
				}
				
			},
			selectArchList: function(id) {
				let _this = this;
				if (_this.fkFileName) {
					_this.selectArch();
				}
				if (id) {
					_this.submitAjax('appmodule/appFileMapper/selectAppById?id=' + id, null, 'GET', function(res) {
						console.log(res)
						if (res.data.state) {
							_this.selectArchArr.push(res.data.row);
							_this.page.totalPage = 1;
						}
					})
				}
			},
			filterList() {

			},
			// 根据关键字查询
			selectArch: function() {
				let _this = this;
				var data = {
					fkFileName: _this.fkFileName,
					fkStoredId: _this.fkStoredId,
					currentPage: _this.page.currentPage,
					pageSize: _this.page.pageSize
				};
				_this.submitAjax('appmodule/appFileMapper/selectAppByName', data, 'GET',
					function(res) {
						if (res.data.state) {
							_this.page.totalPage = res.data.page;
							_this.selectArchArr = _this.selectArchArr.concat(res.data.rows);
						}
					})
			},
			// 打开架体
			openshelf: function(localId) {
				let _this = this;
				var data = {};
				_this.submitAjax('storeroommodule/stoTbRegion/selectOpenMJJById', {
						localId
					}, 'GET',
					function(res) {
						if (res.data.state && res.data.row) {
							var msg = res.data.row;
							var locate = msg.location;
							var resjson = msg.region;
							var dir = locate.direction;
							var cols = locate.colNum;

							if (dir === "左") {
								dir = "left";
							} else if (dir === "右") {
								dir = "right";
							}
							// var gdlType;
							// if(resjson.gdlType==="left"){
							// 	gdlType="left"; 
							// }else if(resjson.gdlType==="right"){
							// 	gdlType="right"; 
							// }  						
							_this.submitAjax(_this.$mjjUrl + 'denseShelves/openframe?quNum=' + locate.fkRegionNum + '&column=' +
								cols + '&section=' + locate.divNum + '&layer=' + locate.laysNum + '&direction=' + dir, null, 'POST',
								function(res) {
									uni.showToast({
										icon: 'loading',
										title: '打开架体中...',
										duration: 1000
									});
									if (res.data.state) {
										uni.showToast({
											icon: 'none',
											title: '打开架体成功',
											duration: 2000
										});
									} else {
										uni.showModal({
											title: '打开架体失败',
											content: '提示:' + res.data.msg,
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
									console.log(res)
								});
						}
					})

			}
		}
	}
</script>

<style lang="scss">
	.uni-card {
		/* #ifndef APP-NVUE */
		display: flex;
		flex: 1;
		box-shadow: 0 0 0 rgba(0, 0, 0, 0);
		/* #endif */
		margin: 30px 20px;
		background-color: $uni-bg-color;
		position: relative;
		flex-direction: column;
		box-shadow: 0px 10px 30upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 30upx;
		overflow: hidden;

	}

	.uni-card__header {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		position: relative;
		flex-direction: row;
		padding: $uni-spacing-col-lg;
		align-items: center;
		border-bottom: 1px solid #E5E5E5;
	}

	.uni-card__header-extra-img {
		height: $uni-img-size-sm;
		width: $uni-img-size-sm;
		background: #00a8ad;
		padding: 10upx;
		border-radius: $uni-img-size-sm;
		margin-right: $uni-spacing-col-base;
	}

	.uni-card__header-title-text {
		font-size: 32upx;
		font-weight: bold;
		color: #00a8ad;
	}

	.uni-card__content {
		position: relative;
		color: $uni-text-color;
		padding: 20upx 40upx;
	}

	.uni-card__content--pd {
		padding: $uni-spacing-col-lg;
	}

	.uni-card__content--list {
		display: flex;
		margin-top: 30upx;
		flex-direction: row;
		justify-content: space-between;
	}

	.uni-card__content--title {
		width: 30%;
		font-size: 30upx;
		color: rgba(181, 181, 181, 1);
	}

	.uni-card__content--content {
		text-align: right;
		width: 60%;
		height: 40upx;
		font-size: 30upx;
		color: rgba(101, 101, 101, 1);
		white-space: nowrap;
	}

	.uni-card__btn {
		text-align: center;
		width: 180upx;
		padding: 10upx 20upx;
		background: #00a8ad;
		border-radius: 31upx;
		color: #FFF;
	}

	.circle_item {
		width: 14upx;
		height: 14upx;
		display: inline-block;
		border-radius: 50%;
		margin: 6upx 20upx;
	}
</style>
