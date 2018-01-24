    /***-- 路径配置,后面其他图表的路径配置也在此处设置了，共用 --***/
		require.config({
			paths: {
				'echarts': 'assets/js/echarts/echarts',
				'echarts/chart/bar': 'assets/js/echarts/chart/bar',
				'echarts/chart/map': 'assets/js/echarts/chart/map'
			}
		});
		
		// 使用
		require(
			[
				'echarts',
				'echarts/chart/bar' ,// 使用柱状图就加载bar模块，按需加载
				'echarts/chart/map' // 使用柱状图就加载map模块，按需加载
			],
			function (ec) {
				// 基于准备好的dom，初始化echarts图表
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
			
				var myChart_svgarea = ec.init(document.getElementById('svgarea')); 
				
				var option_svgarea = {
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
					//	textStyle: {
					//	color: '#3eff32'
					//	},
					},
					series : [
						{
							name:'地图',
					    	type: 'map',
					    	mapType: 'sinap',
					    	mapLabelColor: "#ffffff",
						    roam:true,
						    scaleLimit:{
							    max: 1.5,
							    min:0.5
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
							data:[]
						},
						{
							name:'γ环境监测站',
						    type: 'map',
						    mapType: 'sinap',
						    mapLabelColor: "#ffffff",
						    roam:true,
						    scaleLimit:{
							    max: 1.5,
							    min:0.5
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
							data:[
								{name: 'γ环境监测站1', value: 100, geoCoord:[805.126, 786.913]},
								{name: 'γ环境监测站2', value: 200, geoCoord:[535.126, 496.913]},
								{name: 'γ环境监测站3', value: 300, geoCoord:[250.126, 810.913]},
								{name: 'γ环境监测站4', value: 400, geoCoord:[960.126, 126.913]},
								{name: 'γ环境监测站5', value: 500, geoCoord:[225.226, 266.913]}
							],  
							markPoint : {
								symbol:'circle',
								symbolSize : 20,
								effect : {
									show: true,
									color: 'lime',
									// shadowColor: '#F28B22',
									shadowBlur : 10
								},
								data : [
									{name: 'γ环境监测站1', value: 100, geoCoord:[805.126, 786.913], itemStyle:{normal:{color:'lime'}}},
									{name: 'γ环境监测站2', value: 200, geoCoord:[535.126, 496.913], itemStyle:{normal:{color:'lime'}}},
									{name: 'γ环境监测站3', value: 300, geoCoord:[250.126, 810.913], itemStyle:{normal:{color:'lime'}}},
									{name: 'γ环境监测站4', value: 400, geoCoord:[960.126, 126.913], itemStyle:{normal:{color:'lime'}}},
									{name: 'γ环境监测站5', value: 500, geoCoord:[225.226, 266.913], itemStyle:{normal:{color:'lime'}}}
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
							    max: 1.5,
							    min:0.5
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
							data:[
								{name: '103楼', value: 100, geoCoord:[772, 243]},
								{name: '104楼', value: 200, geoCoord:[813, 136]},
								{name: '106楼', value: 300, geoCoord:[847, 64]},
								{name: '109楼', value: 400, geoCoord:[106, 326]},
								{name: '112楼', value: 500, geoCoord:[869, 394]},
								{name: '115楼', value: 400, geoCoord:[558, 384]}
							],  
							markPoint : {
								symbol:'pin',
								symbolSize : 5,
								effect : {
									show: true,
									color: '#65c9ff',
									// shadowColor: '#F28B22',
									shadowBlur : 1
								},
								data : [
									{name: '103楼', value: 100, geoCoord:[772, 243], itemStyle:{normal:{color:'#65c9ff'}}},
									{name: '104楼', value: 200, geoCoord:[813, 136], itemStyle:{normal:{color:'#65c9ff'}}},
									{name: '106楼', value: 300, geoCoord:[847, 64], itemStyle:{normal:{color:'#65c9ff'}}},
									{name: '109楼', value: 400, geoCoord:[106, 326], itemStyle:{normal:{color:'#65c9ff'}}},
									{name: '112楼', value: 500, geoCoord:[869, 394], itemStyle:{normal:{color:'#65c9ff'}}},
									{name: '115楼', value: 500, geoCoord:[558, 384], itemStyle:{normal:{color:'#65c9ff'}}}
								]
							}
						},
					]
				};

				// 为echarts对象加载数据 
				myChart_svgarea.setOption(option_svgarea); 
			},
        );