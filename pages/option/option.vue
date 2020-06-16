<template>
	<view class="content">
		<view class="status_sty" :style="{ height: statusBarHeight + 'px'}"></view>
		<view class="header_box">
			<view class="address_select">
				<!-- 库房 -->
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-db">
							<picker @change="storeroomChange" :value="storeroomIndex" :range="storeroomArray">
								<view class="uni-input" v-if="storeroomArray.length!=0">
									{{storeroomArray[storeroomIndex]}}
									<image src="../../static/sel.png" mode="aspectFit" style="width: 18upx;height: 18upx;margin: 6upx 16upx;"></image>
								</view>
								<view v-else class="uni-input">无库房</view>
							</picker>
						</view>
					</view>
				</view>
			</view>

			<view class="search_box" @click="onPageJump()">
				<text class="icon_search"></text>
				<text class="prompt">请输入关键字查询档案</text>
			</view>
		</view>
		<view class="mjj_box" :style="{height:bodyHeight + 'px'}">
			<view class="sel_qu_lie">
				<view class="sel_qu_lie_text">
					当前区列：
					<text class="sel_qu_lie_text_cur">
						<text v-if="regionArray[regionIndex]">
							{{regionArray[regionIndex]}}
							<text style="font-size: 24upx;color: #B5B5B5;padding: 10upx;"></text>
						</text>
						<text v-if="cols[colIndex]">
							{{cols[colIndex]}}列
							<text style="font-size: 24upx;color: #B5B5B5;padding: 10upx;"></text>
						</text>
					</text>
				</view>
				<view class="sel_qu_lie_list">
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker @change="regionChange" :value="regionIndex" :range="regionArray">
									<view class="uni-input">
										选择区
										<image src="../../static/sel2.png" mode="aspectFit" style="width: 18upx;height: 18upx;margin: 6upx 14upx;"></image>
									</view>
								</picker>
							</view>
						</view>
					</view>
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-db">
								<picker @change="colChange" :value="colIndex" :range="cols">
									<view class="uni-input">
										选择列
										<image src="../../static/sel2.png" mode="aspectFit" style="width: 18upx;height: 18upx;margin: 6upx 14upx;"></image>
									</view>
								</picker>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="show_temp">
				<view class="show_temp_title">
					<view style="width: 30%;">当前环境值 </view>
					<view style="width: 70%;">
						<image src="../../static/line.png" mode="aspectFit" style="height: 20upx;width: 90%;"></image>
					</view>
				</view>
				<view class="temp_shelf">
					<swiper class="swiper" :indicator-dots="true" :autoplay="false">
						<swiper-item>
							<view class="temp_shelf_box">

								<view class="item_box">
									<view class="item_box_box">
										<view class="" style="color: #FF7E00;">
											<text class="item_count">{{hjz.wd}}</text>
											<text class="item_unit">℃</text>
										</view>
										<view class="item_title">
											温度
										</view>
									</view>
								</view>
								<view class="item_box">
									<view class="item_box_box">
										<view class="" style="color:#00BAFF;">
											<text class="item_count">{{hjz.sd}}</text>
											<text class="item_unit">%RH</text>
										</view>
										<view class="item_title">
											湿度
										</view>
									</view>
								</view>
								<view class="item_box">
									<view class="item_box_box">
										<view class="" style="color: #84CF0C;">
											<text class="item_count">{{hjz.pm25}}</text>
											<text class="item_unit">ug/m³</text>
										</view>
										<view class="item_title">
											PM2.5
										</view>
									</view>
								</view>

							</view>

						</swiper-item>
						<swiper-item>
							<view class="anthoerBox">
								<view class="item_box">
									<button class="button" type="primary" @click="launchApp">打开监控</button>
								</view>
								<view class="item_box">
									<button class="button" type="primary" @click="launchLog">门禁记录</button>
								</view>
								<view class="item_box">
									<button class="button" type="primary" @click="launchTri">开启空调</button>
								</view>
								<view class="item_box">
									<button class="button" type="primary" @click="launchDel">开启除湿机</button>
								</view>
							</view>

						</swiper-item>

					</swiper>

					<!--				
					<scroll-view class="temp_shelf_box" scroll-x="true" @scroll="scrollL" @scrolltoupper="upper" @scrolltolower="lower">
						<view class="item_box">
							<view class="item_box_box">
								<view class="" style="color: #FF7E00;">
									<text class="item_count">{{hjz.wd}}</text>
									<text class="item_unit">℃</text>
								</view>
								<view class="item_title">
									温度
								</view>
							</view>
						</view>
						<view class="item_box">
							<view class="item_box_box">
								<view class="" style="color:#00BAFF;">
									<text class="item_count">{{hjz.sd}}</text>
									<text class="item_unit">%RH</text>
								</view>
								<view class="item_title">
									湿度
								</view>
							</view>
						</view>
						<view class="item_box">
							<view class="item_box_box">
								<view class="" style="color: #84CF0C;">
									<text class="item_count">{{hjz.pm25}}</text>
									<text class="item_unit">ug/m³</text>
								</view>
								<view class="item_title">
									PM2.5
								</view>
							</view>
						</view>

						<view class="item_box">
							<button class="button" type="primary" @click="launchApp">打开监控</button>
						</view>
						<view class="item_box">
							<button class="button" type="primary" @click="launchLog">打开门禁记录</button>
						</view>
					</scroll-view>
					-->
					<view class="scroll_point">
						<block v-for="i in 2" :key="i">
							<view class="point_default" :class="[i==tabInd?'active_default':'']"> </view>
						</block>
					</view>
				</view>
			</view>
			<view class="contl_mjj">
				<view class="show_temp_title">
					<view style="width: 30%;">控制密集架 </view>
					<view style="width: 70%;">
						<image src="../../static/line.png" mode="aspectFit" style="height: 20upx;width: 90%;"></image>
					</view>
				</view>
				<view class="mjj_move">
					<view class="mjj_move_item" @click="leftMove()">
						<image src="../../static/option-icon/left.png" mode="aspectFit" class="left"></image>
						<view class="text">左移</view>
					</view>
					<view class="mjj_move_item" @click="stop()">
						<image src="../../static/option-icon/stop.png" mode="aspectFit" class="stop" v-if="isMove"></image>
						<image src="../../static/option-icon/start.png" mode="aspectFit" class="start" v-else></image>
						<view class="text" v-if="isMove">移动中</view>
						<view class="text" v-else>停止</view>
					</view>
					<view class="mjj_move_item" @click="rightMove()">
						<image src="../../static/option-icon/right.png" mode="aspectFit" class="right"></image>
						<view class="text">右移</view>
					</view>
				</view>
				<view class="mjj_fun_contrl">
					<view class="mjj_move_item" @click="ventilation()">
						<image src="../../static/option-icon/ventilation.png" mode="aspectFit" class="ventilation"></image>
						<view class="text">通风</view>
					</view>
					<view class="mjj_move_item" @click="openFrame()">
						<image src="../../static/option-icon/openSh.png" mode="aspectFit" class="openSh"></image>
						<view class="text">开架</view>
					</view>
					<view class="mjj_move_item" @click="closeTask()">
						<image src="../../static/option-icon/closeSh.png" mode="aspectFit" class="closeSh"></image>
						<view class="text">合架</view>
					</view>
					<view class="mjj_move_item" @click="locked()">
						<image src="../../static/option-icon/lock.png" mode="aspectFit" class="lock"></image>
						<view class="text" v-if="!isLocked">锁定</view>
						<view class="text" v-else>解锁</view>
					</view>
				</view>
			</view>
			<view class="app_address">
				智慧档案管理系统
			</view>
		</view>
	</view>
</template>
<script>
	import axios from '../../utis/axios.js'
	export default {
		data() {
			return {
				tabInd: 0,
				statusBarHeight: 0,
				bodyHeight: 0,
				state: '',
				isLocked: true,
				// 库房
				storeroomArray: [],
				storeroomIndex: 0,
				storeroomNum: 0,
				storerooms: [],
				// 区
				regions: [],
				// 区名称
				regionArray: [],
				regionIndex: 0,
				regionNum: 0,
				// 列
				cols: [],
				colIndex: 0,
				// 移动方向
				direction: '',
				// 当前状态
				curState: '',
				isMove: false,
				hjz: {
					wd: 0,
					sd: 0,
					co2: 0,
					ch20: 0,
					pm10: 0,
					pm25: 0,
					tvoc: 0,
				},
				timeer: null,
				hasPerson: false,
				requestIp: ''
			};
		},
		watch: {
			storeroomNum: function(newVal, oldVal) {
				uni.setStorage({
					key: 'fkStoredId',
					data: newVal,
					success: function() {
						// console.log('success');
					}
				});
			},

			requestIp: function(newVal, oldVal) {
				console.log(newVal, '每次Ip变动')
				this._bindIp()
			}
		},
		onLoad() {
			// 获取手机状态栏高度
			this.statusBarHeight = uni.getSystemInfoSync()['statusBarHeight'];
			// 获取实际body高度、宽度
			this.bodyHeight = uni.getSystemInfoSync()['windowHeight'] - this.statusBarHeight - 48;
			// 检查缓存
			let storeroomIndex = uni.getStorageSync('storeroomIndex')
			if (storeroomIndex) {
				console.log(storeroomIndex, '库房值存在的话');
				this.storeroomIndex = storeroomIndex
			} else {
				uni.setStorageSync('storeroomIndex', 0);
			}
			let regionIndex = uni.getStorageSync('regionIndex');
			if (regionIndex) {
				console.log(regionIndex, '值存在的话');
				this.regionIndex = regionIndex
			} else {
				uni.setStorageSync('regionIndex', 0);
			}

			let colIndex = uni.getStorageSync('colIndex');
			if (colIndex) {
				this.colIndex = colIndex

			} else {
				uni.setStorageSync('colIndex', 0);
			}


			//this.selectStoreRoom();
		},
		onShow() {
			// 清除原先的定时器 再开启新的
			clearInterval(this.timeer)
			this.timeer = null
			this.selectStoreRoom();
			console.log('调试定时器')
			// 持久化 保存和映射用户选取的区列
			this.colIndex = uni.getStorageSync('colIndex')
			this.regionIndex = uni.getStorageSync('regionIndex')
		},
		onHide() {
			console.log(this.timeer, '编译器')
			clearInterval(this.timeer)
			this.timeer = null
			console.log(this.timeer, '定时器关闭')
		},
		methods: {
			launchLog() {
				uni.navigateTo({
					url: '../scanLog/log'
				});
			},
			launchTri() {
				uni.showModal({
					title: '提示',
					content: '您未连接设备',
					showCancel: false,
					success: function(res) {

					}
				});
			},
			launchDel() {
				uni.showModal({
					title: '提示',
					content: '您未连接设备',
					showCancel: false,
					success: function(res) {

					}
				});
			},
			launchApp() {
				let _this = this;
				let cameraIp = uni.getStorageSync('cameraIp')
				console.log(cameraIp, '监控IP？')
				if (!cameraIp) {
					uni.showModal({
						title: '提示',
						content: '您未设置监控摄像头IP',
						showCancel: false,
						success: function(res) {

						}
					});
					return
				}
				// 判断是否有这个应用
				if (!plus.runtime.isApplicationExist({
						pname: 'com.dense.kuiniu.hkcamera'
					})) {
					uni.showModal({
						title: '提示',
						content: '您尚未安装夔牛app',
						showCancel: false,
						success: function(res) {

						}
					});
					return
				}

				console.log(plus.runtime.isApplicationExist({
					pname: 'com.dense.kuiniu.hkcamera'
				}), '是否有app')
				// 判断平台  
				console.log('点击了 但是错误函数不运行吗')
				if (plus.os.name == 'Android') {
					plus.runtime.launchApplication({
							pname: 'com.dense.kuiniu.hkcamera',
							extra: {
								ip: cameraIp
							}
						},
						function(e) {
							console.log('Open system default browser failed: ' + e.message);
						}
					);
				} else if (plus.os.name == 'iOS') {
					plus.runtime.launchApplication({
						action: 'taobao://'
					}, function(e) {
						console.log('Open system default browser failed: ' + e.message);
					});
				}

			},
			onPageJump() {
				uni.navigateTo({
					url: '../search/search'
				});
			},
			// 检查app缓存
			checkCache() {

			},
			scrollL(e) {
				let scroll_x = e.detail.scrollLeft;
				const query = uni.createSelectorQuery().in(this);
				query.select('.temp_shelf .item_box').boundingClientRect(data => {
					var int = Math.floor(scroll_x / (data.width * 3));
					this.tabInd = int;
				}).exec();
			},
			upper(e) {
				this.tabInd = 0;
			},
			lower(e) {
				this.tabInd = 1;
			},
			// 查询所有库房
			selectStoreRoom: function() {
				let _this = this;

				_this.submitAjax('environmentmodule/wkStoTbStore/selectWkStoTbStore', null, 'GET', function(res) {
					_this.storeroomArray = [];
					_this.storerooms = res.data.rows;
					for (let item of res.data.rows) {
						_this.storeroomArray.push(item.storeName);
					}
					let index = _this.storeroomIndex
					console.log(index, '取到了吧')
					_this.storeroomNum = res.data.rows[index].id;

					_this.selectRegion(_this.storeroomNum);
				})
			},
			// 库房改变
			storeroomChange: function(e) {
				let _this = this;
				_this.storeroomNum = _this.storerooms[e.target.value].id;
				_this.storeroomIndex = e.target.value;
				// 缓存选择的库房
				uni.setStorageSync('storeroomIndex', e.target.value)
				// 库房切换后初始化区列 初始化后传递TCPIP值
				this.colIndex = 0
				this.regionIndex = 0
				uni.setStorageSync('regionIndex', 0);
				uni.setStorageSync('colIndex', 0);
				_this.selectRegion(_this.storeroomNum);
			},
			// 查询所有的区
			selectRegion: function(fkStoreId) {
				let _this = this;
				clearInterval(this.timeer)
				this.timeer = null
				console.log('只打开一个定时器', this.timeer)
				
				_this.submitAjax('storeroommodule/stoTbRegion/selectByBind?fkStoreId=' + fkStoreId, null, 'GET', function(res) {
					_this.regionArray = [];
					_this.regions = res.data.rows;
					for (let item of _this.regions) {
						_this.regionArray.push(item.regionName);
					}
					let index = _this.regionIndex
					_this.regionNum = res.data.rows[index].regionNum;
					_this.getCols(_this.regionNum);
					// 调取IP值
					_this.requestIp = _this.regions[index].reqestIp // 一般来说需要这里发请求 但是写了监听器
					console.log(_this.regions[index].reqestIp, '每次改变都需要改动IP传给后台')
					// 获取温湿度、状态
					
					_this.timeer = setInterval(() => {
						_this.timingGetState()
						
					}, 10000);
					
				})
			},
			regionChange: function(e) {
				let _this = this;
				_this.regionNum = _this.regions[e.target.value].regionNum;
				let selected = e.target.value
				_this.regionIndex = e.target.value;
				uni.setStorage({
					key: 'regionIndex',
					data: e.target.value,
					success: function() {
						console.log('success 存储区号', e.target.value);
					}
				});
				console.log(_this.regionIndex, _this.regionNum, '到底哪个是索引')
				// 换区的时候也要更换IP
				_this.requestIp = _this.regions[selected].reqestIp
				console.log(this.regions[selected].reqestIp)
				_this.getCols(_this.regionNum);
			},
			// 根据区获取列
			getCols: function(qu_num) {
				let _this = this;
				_this.cols = [];
				let region = {};
				for (let item of _this.regions) {
					if (item.regionNum == qu_num) {
						region = item;
						break;
					}
				}
				for (let i = 1; i <= region.cols; i++) {
					if ((region.gdlType == 'left') || (region.gdlType == 'right')) {
						if (i == region.cols) {
							break;
						}
					}
					_this.cols.push(i);
				}
				console.log(this.regions, '查询区数据')
				_this.colNum = _this.cols[0];
			},
			colChange: function(e) {
				let _this = this;
				_this.colNum = _this.cols[e.target.value];
				_this.colIndex = e.target.value;
				uni.setStorage({
					key: 'colIndex',
					data: e.target.value,
					success: function() {
						console.log('success 存储列号', e.target.value);
					}
				});
			},
			timingGetState: function() {
				let _this = this;
				let qu_num = _this.regionNum;
				_this.submitAjax('denseShelves/getstates?quNum=' + qu_num, null, 'POST', function(res) {
					if (res.data.state && res.data.row) {
						let data = JSON.parse(res.data.row);
						let person = Number(data.personCount)

						console.log(typeof(person), person, '数据格式')
						_this.state = data.message;
						// console.log(_this.state) 
						let unlockArr = ['正在左移中', '正在右移中', '解除']
						let lockArr = ['禁止', '锁定', '到位', '机械锁定', '停止', '门禁']

						if (person) {
							_this.hasPerson = true
						} else {
							_this.hasPerson = false
						}
						console.log('有人mua', _this.hasPerson)
						if (unlockArr.includes(data.message)) {
							_this.isLocked = false

						} else if (lockArr.includes(data.message)) {
							_this.isLocked = true

						}


						if (_this.state == '禁止' || _this.state == '锁定' ||
							_this.state == '到位' || _this.state == '机械锁定' || _this.state == '停止') {
							_this.isMove = false;
						}
						if (_this.state == '正在右移中' || _this.state == '正在左移中') {
							_this.isMove = true;
						}
					}else{
						
					}
				})
				_this.getGethumiture(qu_num);
			},
			// 获取温湿度
			getGethumiture: function(qu_num) {
				let _this = this;
				_this.submitAjax('denseShelves/gethumiture?quNum=' + qu_num, null, 'POST',
					function(res) {
						console.log(res, '温湿度')
						if (res.data.state && res.data.row) {
							let data = JSON.parse(res.data.row);
							console.log(data, '理论上我强转了')
							_this.hjz.wd = data.temperature ? data.temperature : 0;
							_this.hjz.sd = data.humidity ? data.humidity : 0;
							/*
							_this.hjz.tvoc = data.tvoc.toFixed(1) ? data.tvoc.toFixed(1) : 0;
							_this.hjz.co2 = data.co2.toFixed(1) ? data.co2.toFixed(1) : 0;
							_this.hjz.ch20 = data.ch20.toFixed(1) ? data.ch20.toFixed(1) : 0;
							_this.hjz.pm10 = data.pm10.toFixed(1) ? data.pm10.toFixed(1) : 0;
							*/
							_this.hjz.pm25 = data.PM ? data.PM : 0;
							
						}else{
							_this.hjz.wd = 0
							_this.hjz.sd = 0
							_this.hjz.pm2 = 0
						}
					})
			},
			// 解锁 锁定
			locked: function() {
				let _this = this;
				let qu_num = _this.regionNum;
				if (_this.isLocked) {
					_this.submitAjax('denseShelves/Unlock?quNum=' + qu_num, null, 'POST', function(res) {
						// console.log(res)
						if (res.data.state && res.data.row) {
							let data = JSON.parse(res.data.row);
							_this.isLocked = false;
							uni.showToast({
								title: '解锁成功',
								duration: 2000
							});
						} else {
							uni.showModal({
								title: '提示',
								content: res.data.msg,
								showCancel: false,
								success: function(res) {

								}
							});
						}
					})
				} else {
					_this.submitAjax('denseShelves/locking?quNum=' + qu_num, null, 'POST', function(res) {
						// console.log(res)
						if (res.data.state && res.data.row) {
							let data = JSON.parse(res.data.row);
							_this.isLocked = true;
							uni.showToast({
								title: '锁定成功',
								duration: 2000
							});
						} else {
							uni.showModal({
								title: '提示',
								content: res.data.msg,
								showCancel: false,
								success: function(res) {

								}
							});
						}
					})
				}
			},
			// 自动开架
			opTask: function() {
				let _this = this;
				_this.submitAjax('denseShelves/openshelf?quNum=' + _this.regionNum, null, 'POST', function(res) {
					if (res.data.state && res.data.row) {
						// let data=JSON.parse(); 
					} else {
						uni.showModal({
							title: '提示',
							content: res.data.msg,
							showCancel: false,

						});
					}
				})
			},
			// 合架
			closeTask: function() {
				let _this = this;
				if (_this.hasPerson) {
					uni.showModal({
						title: '提示',
						content: '密集架内有人,无法移动密集架',
						showCancel: false,
					});
					return
				}
				_this.submitAjax('denseShelves/merge?quNum=' + _this.regionNum, null, 'POST', function(res) {
					if (res.data.state && res.data.row) {
						// let data=JSON.parse(); 
						uni.showToast({
							title: '正在合架',
							duration: 2000
						});
						if (!_this.isLocked) {
							//_this._locked()
						}
					} else {
						uni.showModal({
							title: '提示',
							content: res.data.msg,
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
				})
			},
			// 通风
			ventilation: function() {
				let _this = this;
				_this.submitAjax('denseShelves/aeration?quNum=' + _this.regionNum, null, 'POST', function(res) {
					if (res.data.state && res.data.row) {
						// let data=JSON.parse(); 
						uni.showToast({
							title: '正在通风',
							duration: 2000
						});
						if (!_this.isLocked) {
							//_this._locked()
						}
					} else {
						uni.showModal({
							title: '提示',
							content: res.data.msg,
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
				})
			},
			// 左移
			left: function() {
				let _this = this;
				if (_this.hasPerson) {
					uni.showModal({
						title: '提示',
						content: '密集架内有人,无法移动密集架',
						showCancel: false,
					});
					return
				}
				// 查状态 
				if (_this.isLocked) {
					uni.showModal({
						title: '提示',
						content: '密集架已被锁定 请先解除锁定',
						showCancel: false,
					});
				} else {
					_this.submitAjax('denseShelves/leftmove?quNum=' + _this.regionNum + '&column=' + _this.colNum,
						null, 'POST',
						function(res) {
							if (res.data.state && res.data.row) {
								// let data=JSON.parse(); 
								uni.showToast({
									title: '正在左移',
									duration: 2000
								});
								//_this._locked()
							} else {
								uni.showModal({
									title: '提示',
									content: res.data.msg,
									showCancel: false,
								});
							}
						});

				}

			},
			// 停止
			stop: function() {
				let _this = this;
				_this.isMove = false;
				_this.submitAjax('denseShelves/stop?quNum=' + _this.regionNum, null, 'POST', function(res) {
					if (res.data.state && res.data.row) {
						// let data=JSON.parse(); 
						uni.showToast({
							title: '正在停止',
							duration: 2000
						});
						if (!_this.isLocked) {
							//_this._locked()
						}

					} else {
						uni.showModal({
							title: '提示',
							content: res.data.msg,
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
				})
			},
			// 右移 
			right: function() {
				let _this = this;
				if (_this.hasPerson) {
					uni.showModal({
						title: '提示',
						content: '密集架内有人,无法移动密集架',
						showCancel: false,
					});
					return
				}
				if (_this.isLocked) {
					uni.showModal({
						title: '提示',
						content: '密集架已被锁定 请先解除锁定',
						showCancel: false,
					});
				} else {
					_this.submitAjax('denseShelves/rightmove?quNum=' + _this.regionNum + '&column=' + _this.colNum,
						null, 'POST',
						function(res) {
							if (res.data.state && res.data.row) {


								uni.showToast({
									title: '正在右移',
									duration: 2000
								});
								//_this._locked()
								// let data=JSON.parse(); 
							} else {
								uni.showModal({
									title: '提示',
									content: res.data.msg,
									showCancel: false,
								});
							}
						})
				}
				// _this.direction='right';

			},
			// 开架
			openFrame() {
				let index = this.regionIndex
				let state = this.regions[index].gdlType
				console.warn(this.regionArray[index], state, '密集架所在区和位置')
				if (state == '右边') {
					this.leftMove()
				} else {
					this.rightMove()
				}

			},

			/*------ API ------*/


			// 判定密集架状态
			rightMove() {
				this._jugeState().then(() => {
					console.log('这个right执行')
					this.right()
				})
			},
			leftMove() {
				this._jugeState().then(() => {
					console.log('这个left执行')
					this.left()
				}).catch((e) => {
					console.log(e, '这样抛错收的到吗')
				})
			},
			// 判定是否锁定
			_jugeState: async function() {
				let qu_num = this.regionNum;
				let res = await axios('denseShelves/getstates?quNum=' + qu_num, null, 'POST')
				// 请求失败的处理情况
				console.log(res, '状态请求失败')

				if (!res.data.state) {
					return Promise.reject(res.data.msg)
				}
				let data = JSON.parse(res.data.row);
				let unlockArr = ['正在左移中', '正在右移中', '解除']
				let lockArr = ['禁止', '锁定', '到位', '机械锁定', '停止', '门禁']

				if (unlockArr.includes(data.message)) {
					this.isLocked = false

				} else if (lockArr.includes(data.message)) {
					this.isLocked = true

				}

				console.log('这个先执行')
			},
			// 绑定密集架IP
			_bindIp() {
				let ip = this.requestIp
				console.log(this.$mjjUrl)
				axios(`denseShelves/configIp?ip=${ip}`, null, 'POST').then((res) => {
					if (res.data.state) {
						console.log(res, '测试数据是这样的吗')
					} else {
						uni.showToast({
							title: res.data.msg,
							duration: 2000
						});
						console.log('配置失败')
					}

				})
			}


		}
	}
</script>

<style>
	@import "option.css";

	.anthoerBox {
		width: 100%;
		height: 90%;
		white-space: nowrap;
		display: flex;
		flex-wrap: wrap;
	}
	.anthoerBox .item_box{
		margin-right: 26upx;
		margin-left: 5upx;
	}
</style>
