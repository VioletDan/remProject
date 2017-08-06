/*
* @Author: Administrator
* @Date:   2017-05-17 15:57:41
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-17 22:59:42
*/

'use strict';
TouchSlide({ 
	slideCell:"#feifei",
	titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
	mainCell:".bd ul", 
	effect:"leftLoop", 
	autoPlay:true,//自动播放
	autoPage:true //自动分页
});