<template> 
  <view class="content" :style="{ paddingTop: statusBarHeight + 'px'}" style="background: #FFF;">
	  <!--
  		<view v-if="searchText" class="header_box2">
			
  			<view class="address_select" @click="goBack()">
				<image src="../../static/back2.png" mode="aspectFit" style="width: 28upx;height: 28upx;"></image>
  			</view> 
			
  			<view class="search">   
				<input maxlength="20" type="text" focus confirm-type="search" @confirm="searchStart()"
					placeholder="请输入关键字查询档案" v-model.trim="searchText"/> 
				<image src="../../static/search_icon.png" mode="aspectFit" @click="searchStart()" class="search-icon"></image>
				<image src="../../static/del.png" mode="aspectFit" @click="searchText='';searchList=[];" class="del-icon"></image>
  			</view>
  		</view>  
		-->
		 <view  class="header_box1">
			<view class="search">  
				
				<input maxlength="20" type="text" :focus="isFocus" confirm-type="search" @confirm="searchStart()"
					placeholder="请输入关键字查询档案" v-model.trim="searchText"/> 
					
				<image src="../../static/search_icon.png" mode="aspectFit"  class="search-icon"></image>
				<!--
				<image src="../../static/search_icon.png" mode="aspectFit" @click="searchStart()" class="search-icon"></image>
				-->
				<!-- <image src="../../static/del.png" mode="aspectFit" @click="searchStart()" class="del-icon"></image> -->
			</view>
			<view class="cancel_btn" @click="goBack()">
				取消
			</view> 
		</view>  
		<view class="search-list-box">
			<view v-if="searchText">
				<view style="color: #B5B5B5;font-size: 34upx;width:90%;padding: 10upx 30upx;">
					查询结果
				</view>
				 <template class="listWrap" v-if="searchList.length>0">
					 <view v-for="(item,index) in searchList" :key="index" @click="keywordsClick(item)">
						<view class="search-list">
							<text>{{index+1}}、</text>
								档号：{{item.fileNum}}
								题名：{{item.fkFileName}}
								位置：{{item.locationName}}
						</view>
					</view>
				</template>
				 <template v-else>
					<view class="" style="color: #B5B5B5;margin-top: 30px;text-align: center;font-size: 34upx;">
						暂无相关数据！
					</view>
				</template>
			</view> 
			<view v-else>
				<view class="s-circle" v-if="hList.length > 0">
					<view class="header">
						历史记录
						<image src="../../static/search-icon/clean.png" mode="aspectFit" @click="delhistory"></image>
					</view>
					<view class="list">
						<view v-for="(item,index) in hList" :key="index" @click="searchHis(item)">{{item}}</view>
					</view>
				</view> 
			</view>
			
		</view> 
  	</view>  
</template>

<script> 
	export default { 
		data() {
			return {
				statusBarHeight:0,
				isFocus:true, 
				searchText:'',	//搜索关键词 
				hList:uni.getStorageSync('search_cache'),	//历史记录
				themeClass: 'block', 
				searchList:[]
				
			}
		},
		watch: {
			// 用侦听器不监听change也是强大
			searchText: function(newVal, oldVal) {
				let _this=this;
				if(!newVal){
					return;
				}
				let fkStoredId='';
				fkStoredId = uni.getStorageSync('fkStoredId')
				console.log(fkStoredId)
				/*
				uni.getStorage({
				    key: 'fkStoredId',
				    success: function (res) {
				        fkStoredId=res.data;
				    }
				});
				*/
					_this.submitAjax('appmodule/appFileMapper/selectAppByName?fkFileName=' + newVal+'&fkStoredId='+fkStoredId, null, 'GET',
						function(res) { 
							if (res.data.state) {
								_this.searchList=res.data.rows;
							}else{
								_this.searchList=[];
							}
					})
			}
		},
		onLoad(option) {
			// 获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight']; 
			this.searchText=option.txt;
		},
		methods: {
			goBack(){
				uni.navigateTo({
					url: '../option/option' 
				}); 
			},
			getSearchText(e) {
				uni.showToast({
					title:'回调的搜索信息: ' + e,
					icon:"none"
				})
			},
			keywordsClick(item){
				this.searchText='';
				uni.navigateTo({
					url: '../index/fileDetails?id='+item.id 
				});  
			},
			searchHis(item){ 
				this.searchText = item;
				this.searchStart(); 
			},
			searchStart: function() {	//触发搜索
				let _this = this;  
				if (_this.searchText == '') {
					uni.showToast({
						title: '请输入关键字',
						icon: 'none',
						duration: 1000
					});
				}else{
					uni.getStorage({
						key:'search_cache',
						success(res){
							let list = res.data;
							if(list.length > 5){
								for(let item of list){
									if(item == _this.searchText){
										_this.$emit('getSearchText', _this.searchText);
										return;
									}
								}
								list.pop();
								list.unshift(_this.searchText);
							}else{
								for(let item of list){
									if(item == _this.searchText){
										return;
									}
								}
								list.unshift(_this.searchText);
							}
							_this.hList = list;
							uni.setStorage({
								key: 'search_cache',
								data: _this.hList
							});
							_this.$emit('getSearchText', _this.searchText);
						},
						fail() {
							_this.hList = [];
							_this.hList.push(_this.searchText);
							uni.setStorage({
								key: 'search_cache',
								data: _this.hList
							});
							_this.$emit('getSearchText', _this.searchText);
						}
					}) 			
					uni.navigateTo({
						url: '../index/fileDetails?fkFileName='+_this.searchText
					}); 
				}
			},  
			 delhistory () {		//清空历史记录
			 	this.hList = [];
			 	uni.setStorage({
			 		key: 'search_cache',
			 		data: []
			 	});
			 }, 
		},
	}
</script>
<style scoped> 	
  @import "search.css";
</style>

