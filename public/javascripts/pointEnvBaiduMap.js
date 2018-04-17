/*** 全局变量 ***/
		  //在函数中添加的全局变量有：
			//initMap()中ctrl_sca、ctrl_nav、ctrl_ov、ctrl_ovo
			//overlayBase()中sinap_border
			var map = new BMap.Map("sinapsvg",{minZoom:14,maxZoom:20});    // 创建Map实例
			//定义点坐标
			  var pWestSouth = new BMap.Point(121.295191,31.409059);//西南环境监测点
			  var pCenter    = new BMap.Point(121.296578,31.411239);//中心环境监测点
			  var pWestNorth = new BMap.Point(121.29356,31.411528);//西北环境监测点
			  var pEastNorth = new BMap.Point(121.298465,31.41377);//东北环境监测点
			  var pEastSouth = new BMap.Point(121.29904,31.409945);//东南环境监测点
			  var bul306 = new BMap.Point(121.293924,31.408862);//306研究生公寓A楼
			  var bul307 = new BMap.Point(121.294427,31.408947);//307研究生公寓B楼
			  var bul203 = new BMap.Point(121.295177,31.40919);//203小白楼	
			  var bul202 = new BMap.Point(121.29625,31.410157);//202办公楼	
			  var bul201 = new BMap.Point(121.296048,31.409421);//201学术活动中心
			  var bul301 = new BMap.Point(121.295218,31.409506);//301食堂
			  var bul115 = new BMap.Point(121.296516,31.41191);//115应用加速器楼
			  var bul101 = new BMap.Point(121.29771,31.412151);//101综合核技术楼
			  var bulnew = new BMap.Point(121.29802,31.410669);//新楼（核能综合研究中心）
			  var bulmat = new BMap.Point(121.29877,31.410842);//核能材料楼
			  var bul102 = new BMap.Point(121.296511,31.410904);//102综合科研楼
			  var bul109 = new BMap.Point(121.29334,31.411624);//109楼
			  var bul107 = new BMap.Point(121.298963,31.41409);//107楼
			//定义监测点数据变量（与PV变量连接）
			//   var data_WS = parseInt(Math.random() * 1000,10);
			//   var data_C  = parseInt(Math.random() * 1000,10);
			//   var data_WN = parseInt(Math.random() * 1000,10);
			//   var data_EN = parseInt(Math.random() * 1000,10);
			//   var data_ES = parseInt(Math.random() * 1000,10);
			
			  var data_WS = parseInt(datapvi[0]*1000,10);
			  var data_C  = parseInt(datapvi[1]*1000,10);
			  var data_WN = parseInt(datapvi[2]*1000,10);
			  var data_EN = parseInt(datapvi[3]*1000,10);
			  var data_ES = parseInt(datapvi[4]*1000,10);
		  
			  
			//定义监测点数据变量（与PV变量连接）
			  mkbul203 = new BMap.Marker(bul203,{icon:new BMap.Icon("images/bul203.png",new BMap.Size(25,25))});//203小白楼
			  mkbul202 = new BMap.Marker(bul202,{icon:new BMap.Icon("images/bul202.png",new BMap.Size(25,25))});//202办公楼
			  mkbul201 = new BMap.Marker(bul201,{icon:new BMap.Icon("images/bul201.png",new BMap.Size(23,23))});//201学术活动中心
			  mkbul115 = new BMap.Marker(bul115,{icon:new BMap.Icon("images/bul115.png",new BMap.Size(25,25))});//115应用加速器楼
			  mkbul101 = new BMap.Marker(bul101,{icon:new BMap.Icon("images/bul101.png",new BMap.Size(25,25))});//101综合核技术楼
			  mkbulnew = new BMap.Marker(bulnew,{icon:new BMap.Icon("images/bulnew.png",new BMap.Size(25,25))});//新楼（核能综合研究中心）
			  mkbulmat = new BMap.Marker(bulmat,{icon:new BMap.Icon("images/bulmat.png",new BMap.Size(25,25))});//核能材料楼
			  mkbul102 = new BMap.Marker(bul102,{icon:new BMap.Icon("images/bul102.png",new BMap.Size(21,21))});//102综合科研楼
			  mkbul306 = new BMap.Marker(bul306,{icon:new BMap.Icon("images/bul306.png",new BMap.Size(20,20))});//306研究生公寓A楼
			  mkbul307 = new BMap.Marker(bul307,{icon:new BMap.Icon("images/bul307.png",new BMap.Size(20,20))});//307研究生公寓B楼
			  mkbul109 = new BMap.Marker(bul109,{icon:new BMap.Icon("images/bul109.png",new BMap.Size(20,20))});//109楼
			  mkbul107 = new BMap.Marker(bul107,{icon:new BMap.Icon("images/bul107.png",new BMap.Size(20,20))});//107楼
		  
		  
	  
		  
			  /*** BEGIN ***/
			  initMap();//地图初始化
			  overlayBase();//添加基本覆盖物：园区边界 + 楼房建筑
			  overlayRMPoint();//添加覆盖物：环境监测点
			  //overlayRMData();//添加覆盖物：环境监测数值 ？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
			  heatMap();//添加热力图
		  

			/*** 地图初始化 【initMap】 ***/
			//initMap-START
			  function initMap(){
				  ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});//左下角，添加比例尺 //var
				  ctrl_nav = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件 //var
				  ctrl_ov = new BMap.OverviewMapControl();//添加默认缩略地图控件 //var
				  ctrl_ovo = new BMap.OverviewMapControl({isOpen:true, anchor: BMAP_ANCHOR_BOTTOM_RIGHT});//右下角，打开缩略图 //var
		  
				  map.centerAndZoom(new BMap.Point(121.296511,31.41085), 17);//初始化地图,设置中心点坐标和地图级别
				  map.enableScrollWheelZoom();//启用地图滚轮放大缩小
				  map.enableKeyboard();//启用键盘上下左右键移动地图
				  map.setCurrentCity("上海");//如果有3D图，需要设置城市
		  
				  //添加地图事件控件
				  map.addControl(new BMap.MapTypeControl({//添加地图类型控件
					  mapTypes:[
						  BMAP_NORMAL_MAP,
						  BMAP_HYBRID_MAP
					  ]
				  }));
				  map.addControl(ctrl_sca);//比例尺
				  map.addControl(ctrl_nav);//缩放平移
				  map.addControl(ctrl_ov); //缩略图
				  map.addControl(ctrl_ovo);//打开缩略图
			  };
			//initMap-END
				
			/*** 添加基本覆盖物：园区边界 + 楼房建筑 【overlayBase】***/
			//overlayBase-START
			  function overlayBase(){
				  sinap_border = new BMap.Polyline([//创建园区边界多边形 //var
					  new BMap.Point(121.293578,31.408604),
					  new BMap.Point(121.293398,31.409459),
					  new BMap.Point(121.294548,31.40959),
					  new BMap.Point(121.294189,31.410846),
					  new BMap.Point(121.293219,31.410646),
					  new BMap.Point(121.293075,31.412418),
					  new BMap.Point(121.296578,31.413304),
					  new BMap.Point(121.296327,31.414151),
					  new BMap.Point(121.299588,31.414945),
					  new BMap.Point(121.299956,31.413897),
					  new BMap.Point(121.298501,31.413543),
					  new BMap.Point(121.299597,31.409929),
					  new BMap.Point(121.296992,31.409243),
					  new BMap.Point(121.293578,31.408604)
				  ], {strokeColor:"blue", strokeWeight:3, strokeOpacity:0.9});
		  
				  map.addOverlay(sinap_border);//园区边界
				  map.addOverlay(mkbul203);//203小白楼
				  map.addOverlay(mkbul202);//202办公楼
				  map.addOverlay(mkbul201);//201学术活动中心
				  map.addOverlay(mkbul115);//115应用加速器楼
				  map.addOverlay(mkbul101);//101综合核技术楼
				  map.addOverlay(mkbulnew);//新楼（核能综合研究中心）
				  map.addOverlay(mkbulmat);//核能材料楼
				  map.addOverlay(mkbul102);//102综合科研楼
				  map.addOverlay(mkbul306);//306研究生公寓A楼
				  map.addOverlay(mkbul307);//307研究生公寓B楼
				  map.addOverlay(mkbul109);//109楼
				  map.addOverlay(mkbul107);//107楼
			  };
			//overlayBase-END
				  
			/*** 添加覆盖物：环境监测点 【overlayRMPoint】***/
			//overlayRMPoint-START
			  function overlayRMPoint(){
				  //创建标注marker
				  var marker_WS = new BMap.Marker(pWestSouth);
				  var marker_C  = new BMap.Marker(pCenter);
				  var marker_WN = new BMap.Marker(pWestNorth);
				  var marker_EN = new BMap.Marker(pEastNorth);
				  var marker_ES = new BMap.Marker(pEastSouth);
				  //将标注添加到地图中
				  map.addOverlay(marker_WS);
				  map.addOverlay(marker_C );
				  map.addOverlay(marker_WN);
				  map.addOverlay(marker_EN);
				  map.addOverlay(marker_ES);
				  //创建监测点标注跳动的动画
				  marker_WS.setAnimation(BMAP_ANIMATION_BOUNCE); 
			  };
			//overlayRMPoint-END
		  
			/*** 定义"类"-复杂覆盖物 【ComplexCustomOverlay】 ***/
			/* ComplexCustomOverlay-START-START-START */
			  function ComplexCustomOverlay(point, text, mouseoverText){
				this._point = point;
				this._text = text;
				this._overText = mouseoverText;
			  };
			  ComplexCustomOverlay.prototype = new BMap.Overlay();//Overlay是覆盖物的抽象基类
			  ComplexCustomOverlay.prototype.initialize = function(map){
				this._map = map;
				var div = this._div = document.createElement("div");
				//div.style是针对这个覆盖标签进行样式定义
				div.style.position = "absolute";//参考已定位父元素定位，这里是相对于<html>定位
				div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
				div.style.backgroundColor = "#EE5D5B";
				div.style.opacity = 0.9;
				div.style.color = "white";
				div.style.height = "18px";
				div.style.padding = "2px";
				div.style.lineHeight = "18px";
				div.style.top = "20px";
				div.style.left = "11px";
				div.style.whiteSpace = "nowrap";
				div.style.MozUserSelect = "none";
				div.style.fontSize = "12px"
				var span = this._span = document.createElement("span");
				div.appendChild(span);//appendChild()是HTML-DOM对象的方法,可向节点的子节点列表的末尾添加新的子节点。
				span.appendChild(document.createTextNode(this._text));      
				var that = this;
		  
				var arrow = this._arrow = document.createElement("div");
				arrow.style.opacity = 0.8;
				arrow.style.position = "absolute";
				arrow.style.width = "1px";
				arrow.style.height = "19px";
				arrow.style.top = "20px";
				arrow.style.left = "0px";
				arrow.style.overflow = "hidden";
				div.appendChild(arrow);
		  
				div.onmouseover = function(){//onmouseover()是HTML-DOM对象的方法,鼠标指针移动到指定的元素上时发生
				  this.style.backgroundColor = "#6BADCA";
				  div.style.height = "36px";
				  this.getElementsByTagName("span")[0].innerHTML = that._overText;
				};
				div.onmouseout = function(){
				  this.style.backgroundColor = "#EE5D5B";
				  div.style.height = "18px";
				  this.getElementsByTagName("span")[0].innerHTML = that._text;
				};
		  
				map.getPanes().labelPane.appendChild(div);      
				return div;
			  };
			  ComplexCustomOverlay.prototype.draw = function(){
				var map = this._map;
				var pixel = map.pointToOverlayPixel(this._point);
				this._div.style.left = pixel.x + 10 - parseInt(this._arrow.style.left) + "px";//调整标注的位置，左减右加
				this._div.style.top  = pixel.y - 35 + "px";//调整标注的位置，上减下加
			  };
			/* ComplexCustomOverlay-END-END-END */
		  
			/*** 添加覆盖物：环境监测数值 【overlayRMData】***/
			//overlayRMData-START
			  function overlayRMData(){
				  //监测数值为txt_***，联机后将PV变量值赋到这里
				  var txt_WS = data_WS + "nGy/h",	mouseoverTxt_WS = "西南环境监测点:<br>" + txt_WS ;
				  var txt_C  = data_C  + "nGy/h",	mouseoverTxt_C  = "中心环境监测点:<br>" + txt_C  ;
				  var txt_WN = data_WN + "nGy/h",	mouseoverTxt_WN = "西北环境监测点:<br>" + txt_WN ;
				  var txt_EN = data_EN + "nGy/h",	mouseoverTxt_EN = "东北环境监测点:<br>" + txt_EN ;
				  var txt_ES = data_ES + "nGy/h",	mouseoverTxt_ES = "东南环境监测点:<br>" + txt_ES ;
					  
				  var label_WS = new ComplexCustomOverlay(pWestSouth, txt_WS, mouseoverTxt_WS);
				  var label_C  = new ComplexCustomOverlay(pCenter, txt_C,  mouseoverTxt_C );
				  var label_WN = new ComplexCustomOverlay(pWestNorth, txt_WN, mouseoverTxt_WN);
				  var label_EN = new ComplexCustomOverlay(pEastNorth, txt_EN, mouseoverTxt_EN);
				  var label_ES = new ComplexCustomOverlay(pEastSouth, txt_ES, mouseoverTxt_ES);
		  
				  map.addOverlay(label_WS);
				  map.addOverlay( label_C);
				  map.addOverlay(label_WN);
				  map.addOverlay(label_EN);
				  map.addOverlay(label_ES);
			  };
			//overlayRMData-END
				  
			/*** 添加热力图 【heatMap】***/
			//heatMap-START
			  function heatMap(){
				  var points =[
				  {"lng":121.295191,"lat":31.409059,"count":data_WS},
				  {"lng":121.296578,"lat":31.411239,"count":data_C },
				  {"lng":121.29356, "lat":31.411528,"count":data_WN},
				  {"lng":121.298465,"lat":31.41377, "count":data_EN},
				  {"lng":121.29904 ,"lat":31.409945,"count":data_ES}];
				 
				  if(!isSupportCanvas()){
					  alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
				  }
				  //详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
				  //参数说明如下:
				  /* visible 热力图是否显示,默认为true
				   * opacity 热力的透明度,1-100
				   * radius 势力图的每个点的半径大小   
				   * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
				   *	{
						  .2:'rgb(0, 255, 255)',
						  .5:'rgb(0, 110, 255)',
						  .8:'rgb(100, 0, 255)'
					  }
					  其中 key 表示插值的位置, 0~1. 
						  value 为颜色值. 
				   */
				  heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":70});
				  map.addOverlay(heatmapOverlay);
				  heatmapOverlay.setDataSet({data:points,max:10000});
				  heatmapOverlay.show();//显示热力图
		  
				  //设置热力图的渐变区间
				  function setGradient(){
					  /*格式如下所示:
					  {
						  0:'rgb(102, 255, 0)',
						  .5:'rgb(255, 170, 0)',
						  1:'rgb(255, 0, 0)'
					  }*/
					  var gradient = {};
					  var colors = document.querySelectorAll("input[type='color']");
					  colors = [].slice.call(colors,0);
					  colors.forEach(function(ele){
						  gradient[ele.getAttribute("data-key")] = ele.value; 
					  });
					  heatmapOverlay.setOptions({"gradient":gradient});
				  };
			  
				  //判断浏览器是否支持canvas【isSupportCanvas】 ***/
				  function isSupportCanvas(){
					  var elem = document.createElement('canvas');
					  return !!(elem.getContext && elem.getContext('2d'));
				  };
			  };
			//heatMap-END
	  
			  overlayRMData();//添加覆盖物：环境监测数值 //此行放在js代码开头出错，不知道为啥？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
		  
		  
			/*** 添加基础楼房名标注（鼠标经过时显示）【baseLabel】 ***/
			//baseLabel-START
			  function baseLabel(bulPoint, marker,txt, offsetsize){
				  marker.addEventListener("mouseover",function (){
					  option = {
						  position : bulPoint,    // 指定文本标注所在的地理位置
						  //offset   : new BMap.Size(-20, -25)    //设置文本偏移量
						  offset   : offsetsize
					  };
					  label = new BMap.Label(txt, option);  // 创建文本标注对象
					  label.setStyle({
						  backgroundColor:"none",
						  border:"none",
						  color : "blue",
						  fontSize : "12px",
						  fontFamily:"楷体",
						  fontWeight:"bold"
					  });
					  map.addOverlay(label);      
				  });
				  marker.addEventListener("mouseout",function (){
					  map.removeOverlay(label);
			  })};
			//baseLabel-END
		  
			//添加楼放标注（鼠标经过时显示）
			  baseLabel(bul203,mkbul203,"203小白楼",new BMap.Size(-20,-45));
			  baseLabel(bul202,mkbul202,"202办公楼",new BMap.Size(-28,-27));
			  baseLabel(bul201,mkbul201,"201学术活动中心",new BMap.Size(-40,-25));
			  baseLabel(bul115,mkbul115,"115应用加速器楼",new BMap.Size(-47,-25));
			  baseLabel(bul101,mkbul101,"101综合核技术楼",new BMap.Size(-47,-25));
			  baseLabel(bulnew,mkbulnew,"核能综合研究中心（新楼）",new BMap.Size(-75,5));
			  baseLabel(bulmat,mkbulmat,"核能材料楼",new BMap.Size(-29,-25));
			  baseLabel(bul102,mkbul102,"102综合科研楼",new BMap.Size(-37,-25));
			  baseLabel(bul306,mkbul306,"306研究生公寓A栋",new BMap.Size(-40,10));
			  baseLabel(bul307,mkbul307,"307研究生公寓B栋",new BMap.Size(-40,10));
			  baseLabel(bul109,mkbul109,"109微波技术楼",new BMap.Size(-35,9));
			  baseLabel(bul107,mkbul107,"107放射化学楼",new BMap.Size(-37,-30));
			  
			  
			/*** 鼠标点击显示当前点经纬度 ***/
			//鼠标点击显示经纬度-START
			  map.addEventListener("click",function(e){
				  alert(e.point.lng + "," + e.point.lat);
			  });
			//鼠标点击显示经纬度-END
		  
		  
			/*** 限定地图范围，一旦离开区域就自动返回 ***/
			  //var b = new BMap.Bounds(new BMap.Point(121.292237,31.410229),new BMap.Point(121.2991,31.416285));
			  //try {	
			  //	BMapLib.AreaRestriction.setBounds(map, b);
			  //} catch (e) {
			  //	alert(e);
			  //}