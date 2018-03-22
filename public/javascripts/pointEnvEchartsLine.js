		// 路径配置
		require.config({
			paths: {
				'echarts': 'assets/js/echarts/echarts',
				'echarts/chart/line': 'assets/js/echarts/chart/line',
				'echarts/chart/bar': 'assets/js/echarts/chart/bar',
				'echarts/chart/map': 'assets/js/echarts/chart/map',
				'echarts/chart/gauge': 'assets/js/echarts/chart/gauge'
			}
		});


		var dataLine0=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var dataLine1=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var dataLine2=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var dataLine3=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		var dataLine4=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				

		require([
			'echarts',
			'echarts/chart/line',
			'echarts/chart/gauge',
		], function (echarts) {//start of function(echarts)

			var chartLine = echarts.init(document.getElementById('realtimeLine'), null, {});

			var optionLine = {//start of optionLine
				//backgroundColor: '#303030',
				title : {
					text: '环境监测Gamma剂量率报表',
					//subtext: '环境监测',
					x:'center',
					y:40
				},
				tooltip : {
					trigger: 'axis'
				},
				legend: {
					x: 'center',
					y: 80,
					data:['环境监测0','环境监测1','环境监测2','环境监测3','环境监测4']
				},
				grid:{
					x:  '15%',//直角坐标系左上角横坐标
					y:  '20%',//直角坐标系左上角纵坐标
					x2: '10%',//直角坐标系右下角横坐标
					y2: '25%',//直角坐标系右下角纵坐标
				},
				toolbox: {
					show : true,
					feature : {
						dataView : {show: true, readOnly: false},
						restore : {show: true},
						saveAsImage : {show: true}
					}
				},
				calculable : true,
				xAxis : {
					type : 'category',
					boundaryGap : false,
					data : (function (){
						var now = new Date();
						var res = [];
						var len = 15;
						while (len--) {
							res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
							now = new Date(now - 2000);
						}
						return res;
					})()
				},
				yAxis : [
				{
					type : 'value',
					axisLabel : {
						formatter: '{value} nGy/h'
					}
				}
				],
				series : [
				{
					name:'环境监测0',
					type:'line',
					data:dataLine0,
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				},
				{
					name:'环境监测1',
					type:'line',
					data:dataLine1,
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					},
					markLine : {
						data : [
							{type : 'average', name: '平均值'}
						]
					}
				},
				{
					name:'环境监测2',
					type:'line',
					data:dataLine2,
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					}
				},
				{
					name:'环境监测3',
					type:'line',
					data:dataLine3,
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					}
				},
				{
					name:'环境监测4',
					type:'line',
					data:dataLine4,
					markPoint : {
						data : [
							{type : 'max', name: '最大值'},
							{type : 'min', name: '最小值'}
						]
					}
				}
				]
			};

			// chartLine.clear();
			var ran0=0, ran1=0, ran2=0, ran3=0, ran4=0;

			var timeTicketLine=function(){};
			clearInterval(timeTicketLine);
			timeTicketLine= setInterval(function(){
				ran0=Math.random()*0.001;//产生一个5-5.001的伪随机数
				dataLine0.shift();
				//dataLine.push((datapvi[0]*1000).toFixed(3));//【未连接仪器是此句注释掉，换成下面的】
				dataLine0.push(parseFloat((ran0*1000).toFixed(3)));//【连接仪器是此句注释掉，换成上面的】
				optionLine.series[0].data=dataLine0;

				ran1=Math.random()*0.001;//产生一个5-5.001的伪随机数
				dataLine1.shift();
				//dataLine.push((datapvi[1]*1000).toFixed(3));//【未连接仪器是此句注释掉，换成下面的】
				dataLine1.push(parseFloat((ran1*1000).toFixed(3)));//【连接仪器是此句注释掉，换成上面的】
				optionLine.series[1].data=dataLine1;

				ran2=Math.random()*0.001;//产生一个5-5.001的伪随机数
				dataLine2.shift();
				//dataLine.push((datapvi[2]*1000).toFixed(3));//【未连接仪器是此句注释掉，换成下面的】
				dataLine2.push(parseFloat((ran2*1000).toFixed(3)));//【连接仪器是此句注释掉，换成上面的】
				optionLine.series[2].data=dataLine2;

				ran3=Math.random()*0.001;//产生一个5-5.001的伪随机数
				dataLine3.shift();
				//dataLine.push((datapvi[3]*1000).toFixed(3));//【未连接仪器是此句注释掉，换成下面的】
				dataLine3.push(parseFloat((ran3*1000).toFixed(3)));//【连接仪器是此句注释掉，换成上面的】
				optionLine.series[3].data=dataLine3;

				ran4=Math.random()*0.001;//产生一个5-5.001的伪随机数
				dataLine4.shift();
				//dataLine.push((datapvi[4]*1000).toFixed(3));//【未连接仪器是此句注释掉，换成下面的】
				dataLine4.push(parseFloat((ran4*1000).toFixed(3)));//【连接仪器是此句注释掉，换成上面的】
				optionLine.series[4].data=dataLine4;

				chartLine.setOption(optionLine,true);
			},1000)
		
		},//end of function (echarts)
	);