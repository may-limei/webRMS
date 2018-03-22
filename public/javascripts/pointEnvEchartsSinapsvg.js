		// 使用模块
		require(
			[
				'echarts',
				'echarts/chart/bar' ,// 使用柱状图就加载bar模块，按需加载
				'echarts/chart/map'
			],

		function (ec) {
			/***-- 自定义svg地图（名称取为sinap） --***/
			require('echarts/util/mapData/params').params.sinap = {
				getGeoJson: function (callback) {
					$.ajax({
						url: "images/sinap2.svg",
						dataType: 'xml',
						success: function (xml) {
							callback(xml)
						}
					});
				}
			}
			
			// 基于准备好的dom，初始化echarts图表
			var chart_sinapsvg = ec.init(document.getElementById('sinapsvg')); 
				
			//start option_sinapsvg
			var option_sinapsvg = {
				backgroundColor: '#fefefe',
				color:[
					'lime',
					'#65c9ff'
				],
				tooltip: {
					trigger: 'item',
					formatter: function (v) {
						return v[1]+'<br/>测量值为：'+v[2];
					}
				},
				toolbox: {
					show: true,
					feature: {
						dataView: { show: true, readOnly: true },
						restore: { show: true },
						saveAsImage: { show: true }
					}
				},
				legend: {
					orient: 'vertical',
					y: 'bottom',
					x:'right',
					data:['γ环境监测站','其他监测站'],
				},
				series : [
				{
					name:'γ环境监测站',
				    type: 'map',
				    mapType: 'sinap',
				    mapLabelColor: "#ffffff",
				    roam:true,
					scaleLimit:{
					    max: 0.8,
					    min: 0.79
				    },
				    itemStyle:{
						normal:{
							borderColor:'rgba(100,149,237)',
							borderWidth:0.5,
							areaColor: 'lime',
							borderColor: '#111',
							areaStyle:{
								color: '#000000'
					  		}
						},
						emphasis: {
							areaColor: '#2a333d'
						}
					},
					data:[],  
					markPoint : {
						symbol:'circle',
						symbolSize : 20,
						effect : {
							show: true,
							color: 'lime',
								shadowBlur : 10
						},
						data : [
							// {name: 'γ环境监测站1', value: datapvi[0].toFixed(3), geoCoord:[805.126, 786.913], itemStyle:{normal:{color:'lime'}}},
							// {name: 'γ环境监测站2', value: datapvi[1].toFixed(3), geoCoord:[535.126, 496.913], itemStyle:{normal:{color:'lime'}}},
							// {name: 'γ环境监测站3', value: datapvi[2].toFixed(3), geoCoord:[250.126, 810.913], itemStyle:{normal:{color:'lime'}}},
							// {name: 'γ环境监测站4', value: datapvi[3].toFixed(3), geoCoord:[960.126, 126.913], itemStyle:{normal:{color:'lime'}}},
							// {name: 'γ环境监测站5', value: 500, geoCoord:[225.226, 266.913], itemStyle:{normal:{color:'lime'}}}
						]
					},					  
				},
				{
					name:'其他监测站',
				    type: 'map',
				    mapType: 'sinap',
				    mapLabelColor: "#ffffff",
				    roam:true,
				    scaleLimit:{
					    max: 0.8,
					    min: 0.79
				    },
				    itemStyle:{
						normal:{
							borderColor:'rgba(100,149,237)',
							borderWidth:0.5,
							areaColor: 'lime',
							borderColor: '#111',
							areaStyle:{
								color: '#000000'
					 		}
						},
						emphasis: {
							areaColor: '#2a333d'
						}
					},
					data:[],  
					markPoint : {
						symbol:'pin',
						symbolSize : 5,
						effect : {
						show: true,
						color: '#65c9ff',
							shadowBlur : 1
						},
						data : [
							// {name: '103楼', value: 100, geoCoord:[772, 243], itemStyle:{normal:{color:'#65c9ff'}}},
							// {name: '104楼', value: 200, geoCoord:[813, 136], itemStyle:{normal:{color:'#65c9ff'}}},
							// {name: '106楼', value: 300, geoCoord:[847, 64], itemStyle:{normal:{color:'#65c9ff'}}},
							// {name: '109楼', value: 400, geoCoord:[106, 326], itemStyle:{normal:{color:'#65c9ff'}}},
							// {name: '112楼', value: 500, geoCoord:[869, 394], itemStyle:{normal:{color:'#65c9ff'}}},
							// {name: '115楼', value: 500, geoCoord:[558, 384], itemStyle:{normal:{color:'#65c9ff'}}}
						]
					}
				},
			]
		};//end of var option_sinapsvg

				// 为echarts对象加载数据 
				//chart_sinapsvg.setOption(option_sinapsvg); 

				var timeTicketsvg=function(){};
			clearInterval(timeTicketsvg);
			timeTicketsvg= setInterval(function(){
				// option_sinapsvg.series[0].markPoint.data=[
				// 	{name: 'γ环境监测站1', value: datapvi[0].toFixed(3), geoCoord:[805.126, 786.913], itemStyle:{normal:{color:'lime'}}},
				// 	{name: 'γ环境监测站2', value: datapvi[1].toFixed(3), geoCoord:[535.126, 496.913], itemStyle:{normal:{color:'lime'}}},
				// 	{name: 'γ环境监测站3', value: datapvi[2].toFixed(3), geoCoord:[250.126, 810.913], itemStyle:{normal:{color:'lime'}}},
				// 	{name: 'γ环境监测站4', value: datapvi[3].toFixed(3), geoCoord:[960.126, 126.913], itemStyle:{normal:{color:'lime'}}},
				// 	{name: 'γ环境监测站5', value: 500, geoCoord:[225.226, 266.913], itemStyle:{normal:{color:'lime'}}}
				// ];
				chart_sinapsvg.setOption(option_sinapsvg,true);
			},500)


			},
		);