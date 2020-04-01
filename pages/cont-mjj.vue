<template>
	<view class="container">
		<view class="title">档案架</view>
		<view class="selectRegionView">
			选择区:
        <view class="uni-list">
            <view class="uni-list-cell"> 
                <view class="uni-list-cell-left">
                    当前选择
                </view>
                <view class="uni-list-cell-db">
                    <picker @change="regionChange" :value="regionIndex" :range="regionArray">
                        <view class="uni-input">{{regionArray[regionIndex]}}</view>
                    </picker>
                </view>
            </view>
        </view>
		</view>
		<view class="selectCol">
			选择列: <view class="uni-list">
            <view class="uni-list-cell">
                <view class="uni-list-cell-left">
                    当前选择
                </view>
                <view class="uni-list-cell-db">
                    <picker @change="colChange" :value="colIndex" :range="cols">
                        <view class="uni-input">{{cols[colIndex]}}</view>
                    </picker>
                </view>
            </view>
        </view>
		</view>
		<view class="environment">
			<view><text>温度</text>{{hjz.temperature}}&#176;C</view>
			<view><text>湿度</text>{{hjz.humidity}}%</view>
			<view><text>PM</text>{{hjz.PM}}%</view>
			<!-- <view><text>tvoc</text>{{hjz.tvoc}}μg</view>
			<view><text>pm2.5</text>{{hjz.pm25}}μg</view>
			<view><text>pm10</text>{{hjz.pm10}}μg</view>
			<view><text>ch2o</text>{{hjz.ch2o}}μg</view>
			<view><text>co2</text>{{hjz.co2}}ppm</view> -->
		</view>
		<view class="state" :class="{ waring: isWaring }"><text class="poilt" :class="{ isWaring: isWaring }"></text>{{state}}</view>
		<view class="control-move">
			<image src="../../static/option-icon/left.png" @click="left()"></image>
			<image src="../../static/option-icon/stop.png" @click="stop()"></image>
			<image src="../../static/option-icon/right.png" @click="right()"></image>
		</view>
		<view class="remote-control"> 
			<view class="control-box">
				<view class="legend" :class="{ clicked:ventState }" @click="ventilation()">
					<image class="ventilation" src="../../static/option-icon/ventilation.png"></image>
				</view>
				通风
			</view>
			<view class="control-box">
				<view class="legend" :class="{ clicked:!lockState}" @click="locked()">
					<image class="locked" :src="status.lockedUrl"></image>
				</view>
				{{status.lock}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: {
					lockedUrl: '../../static/option-icon/locked.png',
					lock: '锁定'
				},
				state:'',
				ventState: true,
				isWaring: true,
				opState: true,
				closeState: true,
				lockState: true,
				jixieState:true,
				
				// 区
				regions:[],
				// 区名称
				regionArray:[],
				regionIndex:0,
				regionNum:0,	
				// 列
				cols:[],
				colIndex:0,
 	
				hjz:{
					colNum:0,
					temperature:0,
					humidity:0,
					PM:0,
					// pm25:0,
					// pm10:0,
					// tvoc:0,
					// ch2o:0,
					// co2:0
				}, 
				timeer:null,
			};
		},
		onLoad() {
			this.selectRegion(); 
		},
		destroyed(){
			// 页面销毁时清除定时器
			console.log(this.timeer,'查看定时器编号')
			clearInterval(this.timeer)
		},
		methods:{
			// 查询所有的区
			selectRegion:function  () {
				let _this=this;
				_this.submitAjax('storeroommodule/stoTbRegion/selectAllRegion',null, 'GET', function(res) {
					console.log(res)
					_this.regionArray=[];
					_this.regions=res.data.rows; 
					for(let item of _this.regions){
						_this.regionArray.push(item.regionName);
					} 
					_this.regionNum=res.data.rows[0].regionNum; 
					_this.getCols(_this.regionNum);
					// 获取温湿度、状态
					_this.timeer=setInterval(()=>{
						_this.timingGetState()
					},2000);  
				})
			},
			regionChange:function(e){
				let _this=this;
				_this.regionNum=_this.regions[e.target.value].regionNum;  
				_this.regionIndex=e.target.value;
				_this.getCols(_this.regionNum);
			},
			// 根据区获取列
			getCols:function(qu_num){
				let _this=this;
				_this.cols=[];   
				let region={};
				for(let item of _this.regions){
					if(item.regionNum==qu_num){
						region=item;
						break;
					}
				}
				for(let i=0;i<=region.cols;i++){
					if(region.gdlType=='left'){
						if(i==0){
							continue;
						}
						if(i==region.cols){
							break;
						}
					}
					if(region.gdlType=='right'){
						if(i==0){
							continue;
						}
						if(i==region.cols){
							break;
						}
					}
					_this.cols.push(i); 
				} 
				_this.colNum=_this.cols[0];	
			},
			colChange:function(e){
				let _this=this;
				_this.colNum=_this.cols[e.target.value];
				_this.colIndex=e.target.value;
			},	
			timingGetState:function(){
				let _this =this; 
				let qu_num=_this.regionNum;
				_this.submitAjax(_this.$mjjUrl+'denseShelves/getstates?quNum='+qu_num,null,'POST',function(res){ 
					// console.log(res)
					if(res.data.state && res.data.row){ 
						let data=JSON.parse(res.data.row);
						_this.state=data.message; 	 
						if(_this.state=='禁止'|| _this.state=='锁定'
							|| _this.state=='到位'||_this.state=='机械锁定'||_this.state=='停止'){
								_this.status.lock = '锁定';
								_this.status.lockedUrl = '../../static/option-icon/locked.png';
								_this.lockState=true;
						}
						if(_this.state=='解除'||_this.state=='解锁'){ 
								_this.status.lock = '解锁';
								_this.status.lockedUrl = '../../static/option-icon/unlock.png';
								_this.lockState=false;
						} 
					}
				})
				_this.getGethumiture(qu_num); 
			},
			// 获取温湿度
			getGethumiture:function(qu_num){
				let _this=this;
				_this.submitAjax(_this.$mjjUrl+'denseShelves/gethumiture?quNum='+qu_num,null,'POST',function(res){ 
					if(res.data.state && res.data.row){
						let data=JSON.parse(res.data.row);
						_this.hjz.temperature=data.temperature?data.temperature:0; 
						_this.hjz.humidity=data.humidity?data.humidity:0;
						_this.hjz.PM=data.PM?data.PM:0;
					} 
				})
			},
			// 解锁 锁定
			locked: function () {
				let _this=this;	
				let qu_num=_this.regionNum;
				if (_this.lockState) { 
					_this.submitAjax(_this.$mjjUrl+'denseShelves/Unlock?quNum='+qu_num,null,'POST',function(res){
						
					}) 
				}else {  
					_this.submitAjax(_this.$mjjUrl+'denseShelves/locking?quNum='+qu_num,null,'POST',function(res){
						
					})
				}
			},
			// 自动开架
			opTask: function () {
				let _this=this; 
				_this.submitAjax(_this.$mjjUrl+'denseShelves/openshelf?quNum='+_this.regionNum,null,'POST',function(res){
					
				})  
			},
			// 合架
			closeTask: function () {
				let _this=this; 
				_this.submitAjax(_this.$mjjUrl+'denseShelves/merge?quNum='+_this.regionNum,null,'POST',function(res){
					
				})
			},
			// 关闭自动开架
			closeOpTask: function () {
				let _this=this; 
				_this.submitAjax(_this.$mjjUrl+'denseShelves/closeshelf?quNum='+_this.regionNum,null,'POST',function(res){
					
				})  
			},
			// 通风
			ventilation: function () {
				let _this=this; 
				_this.submitAjax(_this.$mjjUrl+'denseShelves/aeration?quNum='+_this.regionNum,null,'POST',function(res){
					// console.log(res);
				})
			}, 
			// 左移
			left: function () {
				let _this=this;  
				_this.submitAjax(_this.$mjjUrl+'denseShelves/leftmove?quNum='+_this.regionNum+'&column='+_this.colNum,null,'POST',function(res){
					// console.log(res)
				});
			},
			// 停止
			stop: function() {
				let _this=this; 
				_this.submitAjax(_this.$mjjUrl+'denseShelves/stop?quNum='+_this.regionNum,null,'POST',function(res){
					console.log(res)
				})
			},
			// 右移 
			right: function () {
				let _this=this; 
				_this.submitAjax(_this.$mjjUrl+'denseShelves/rightmove?quNum='+_this.regionNum+'&column='+_this.colNum,null,'POST',function(res){
					console.log(res)
				})
			},
	 
			// jixieClick: function () {
			// 	let _this=this;
			// 	if (_this.jixieState==true) { 
			// 		let data={quNum:_this.regionNum}; 
			// 		// data.type='jxunlock'; 
			// 		_this.submitAjax('http://'+_this.region.reqestIp+':'+_this.region.httpPort+'/GDL',data,'POST',function(res){
						
			// 		}) 
			// 	}else {  
			// 		let data={quNum:_this.regionNum};
			// 		// data.type='jxlocking';  
			// 		_this.submitAjax('http://'+_this.region.reqestIp+':'+_this.region.httpPort+'/GDL',data,'POST',function(res){
						
			// 		})
			// 	}
			// },
		}
	}
</script>
<style>
	.container {
		margin: 0;
		height: 100vh;
		flex: 1;
		color: white;
		font-size: 26upx;
		letter-spacing: 2upx;
		text-align: center;
		background-image: linear-gradient(to bottom, rgb(27, 130, 210), #28a0f5);
	}

	.title {
		position: relative;
		width: 100%;
		height: 10vh;
		top: 0;
	}

	.environment {
		height: 10vh;
		font-size: 25upx;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.environment text {
		font-size: 22upx;
		display: block;
	}

	.environment view {
		position: relative;
		width: 20%;
	}

	.state {
		height: 20vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #00FF48;
	}

	.poilt {
		width: 29upx;
		height: 29upx;
		margin-right: 40upx;
		background-color: #00ff48;
		border-radius: 50%;
		box-shadow: 0 0 11upx #00FF48;
	}

	.control-move {
		height: 10vh;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.control-move image {
		height: 42upx;
		width: 75upx;
		border: none;
	}

	.control-move image:nth-child(2) {
		height: 72upx;
		width: 56upx;
	}

	.remote-control {
		margin-top: 20vh;
		height: 30vh;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.remote-control .control-box {
		width: 20vw;
		height: 25vw;
	}

	.control-box .legend {
		width: 110upx;
		height: 110upx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: white 2upx solid;
		background: transparent;
		margin: 10upx auto;
	}

	.ventilation {
		height: 36upx;
		width: 37upx;
	}

	.opTask {
		width: 48upx;
		height: 38upx;
	}

	.closeTask {
		width: 43upx;
		height: 38upx;
	}

	.locked {
		width: 29upx;
		height: 38upx;
	}

	.control-box .clicked {
		border: none;
		background: #2595e9;
	}

	.isWaring {
		background: #ff3531;
		box-shadow: 0 0 11upx #ff3531;
	}

	.waring {
		color: #ff0e0a;
	}
	.selectRegionView{
		position: absolute;
		left: 200upx;
		top: 40upx;
	}
	.selectCol{
		position: absolute;
		left: 450upx;
		top: 40upx;
	}
</style>
