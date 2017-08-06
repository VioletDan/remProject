/*
 * @Author: Administrator
 * @Date:   2017-05-17 15:04:15
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-05-17 16:02:33
 */

'use strict';
;(function(){
	// 这段JS不能添加入口函数，而且引入的时候也不要放到最后面，放到最前面
	// 需求：根据屏幕的大小动态改变这个屏幕所对应html的fontsize值
	// 比例公式：不断变化的屏幕大小/这个屏幕对应的html的fontsize值 = 原始的设计图/我们自己基于这个设计图自定义的html的fontsize
	var oHtml = document.documentElement;
	// 原始设计图的宽度
	var ui = 540;
	// 原始设计图的html的font大小
	var font = 40;
	var bili = ui/font;
	// 页面上来先调用一下
	getSize();
	window.addEventListener('resize', getSize);
	function getSize(){
		// 获取屏幕的宽度
		var screenWidth = oHtml.offsetWidth;
		if(screenWidth >= ui){
			oHtml.style.fontSize = font + 'px';
		}else if(screenWidth <= 320){
			oHtml.style.fontSize = 320/bili + 'px';
		}else{
			oHtml.style.fontSize = screenWidth/bili + 'px';
		}
	}
})()