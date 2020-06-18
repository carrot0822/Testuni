<template>
	<view class="content">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" v-if="selectArchArr.length!=0" @scroll="scroll">
			<view v-for="(item,index) in selectArchArr" :key="index" class="uni-card scroll-view-item">
				<!-- 标题 -->
				<view class="uni-card__header">
					<image src="../../static/search-icon/arch.png" mode="aspectFill" class="uni-card__header-extra-img" />
					<text class="uni-card__header-title-text">文件名称：{{item.fkFileName}}</text>
				</view>
				<!-- 内容 -->
				<view class="uni-card__content uni-card__content--pd">
					<view class="uni-card__content--list">
						<text class="uni-card__content--title">文件编号</text>
						<scroll-view class="scroll-view_H uni-card__content--content" scroll-x="true">
							{{item.fkFileId}}
						</scroll-view>
					</view>
					<view class="uni-card__content--list">
						<text class="uni-card__content--title">所属库房</text>
						<scroll-view class="scroll-view_H uni-card__content--content" scroll-x="true">
							{{item.fkStoreName}}
						</scroll-view>
					</view>
					<view class="uni-card__content--list">
						<text class="uni-card__content--title">设备名称</text>
						<scroll-view class="scroll-view_H uni-card__content--content" scroll-x="true">
							{{item.fkEntranceGuardName}}
						</scroll-view>
					</view>
					<view class="uni-card__content--list">
						<text class="uni-card__content--title">设备编号</text>
						<scroll-view class="scroll-view_H uni-card__content--content" scroll-x="true">
							{{item.fkEntranceGuardNum}}
						</scroll-view>
					</view>
					<view class="uni-card__content--list">
						<text class="uni-card__content--title">创建时间</text>
						<scroll-view class="scroll-view_H uni-card__content--content" scroll-x="true">
							{{item.createTime}}
						</scroll-view>
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
			// 初始第一次查询
			this.initSearch()
			
			console.log('第一次请求')
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
			
			initSearch() {
				this.currentPage = 1
				let _this = this;
				var data={}
				data.currentPage = this.page.currentPage
				data.pageSize = this.page.pageSize
				_this.submitAjax('storeroom/entranceGuardAlarm/getEntranceGuardAlarmInfos',data,'GET',function(res){
					if (res.data.state) {
						_this.page.totalPage = res.data.page;
						_this.selectArchArr = res.data.rows
						uni.stopPullDownRefresh();
						console.log(res,'初始化数据')
					}else{
						
					}
				})
			},
			
			/*
			initSearch(id) {
				this.currentPage = 1
				
				var data={}
				data.currentPage = this.page.currentPage
				data.pageSize = this.page.pageSize
				console.log(11111111111111111)
				axios(this.$mjjUrl+ 'storeroom/entranceGuardAlarm/getEntranceGuardAlarmInfos',data,'GET').then((res)=>{
					if (res.data.state) {
						this.page.totalPage = res.data.page;
						this.selectArchArr = res.data.rows
						uni.showToast({
							title: '查询成功',
							duration: 1000
						});
						uni.stopPullDownRefresh();
						console.log(res,'初始化数据')
					}else{
						uni.showToast({
							title: '请求失败',
							duration: 1000
						});
					}
					
				})
			},
			
			*/
			// http://192.168.2.60:8082/storeroom/entranceGuardAlarm/getEntranceGuardAlarmInfos?currentPage=1&pageSize=20
			/*
			selectArch(){
				let _this = this;
				var data={}
				data.currentPage = this.page.currentPage
				data.pageSize = this.page.pageSize
				_this.submitAjax('storeroom/entranceGuardAlarm/getEntranceGuardAlarmInfos', data, 'GET',
					function(res) {
						if (res.data.state) {
							_this.page.totalPage = res.data.page;
							_this.AselectArchArr = _this.selectArchArr.concat(res.data.rows);
							uni.showToast({
								title: '查询成功',
								duration: 1000
							});
						}else{
							uni.showToast({
								title: '查询失败',
								duration: 1000
							});
						}
					})
			}
			*/
			// 下拉加载
			
			selectArch(){
				var data={}
				data.currentPage = this.page.currentPage
				data.pageSize = this.page.pageSize
				axios(this.$mjjUrl+ 'storeroom/entranceGuardAlarm/getEntranceGuardAlarmInfos',data,'GET').then((res)=>{
					if (res.data.state) {
						this.page.totalPage = res.data.page;
						this.selectArchArr = this.selectArchArr.concat(res.data.rows);
					}else{
						
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
		background: #1C87FF;
		padding: 10upx;
		border-radius: $uni-img-size-sm;
		margin-right: $uni-spacing-col-base;
	}

	.uni-card__header-title-text {
		font-size: 32upx;
		font-weight: bold;
		color: rgba(28, 135, 255, 1);
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
		background: rgba(28, 135, 255, 1);
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
