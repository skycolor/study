(function(){
	/*
	 * 个人总结
	 * 1、tip提示层，方法就是tips
	 * 2、可以配置tip的显示方向，默认为2 右边，然后依次是1 2 3 4对应上 右 下 左
	 * 3、tipsMore属性表示点开时，不销毁之前的弹出层
	 * 
	 * */
	$('.tips li').eq(0).click(function() {
		var _this = this;
		layer.tips('上' , _this , {
		  time : 1200 ,
		  tips: [1, '#0FA6D8']  //还可配置颜色 
		});
	});
	$('.tips li').eq(1).click(function() {
		var _this = this;
		layer.tips('右' , _this , {
		  time : 1200 ,
		  tips: [2, '#0FA6D8']
		});
	});
	$('.tips li').eq(2).click(function() {
		var _this = this;
		layer.tips('下' , _this , {
		  time : 1200 ,
		  tips: [3, '#0FA6D8']  
		});
	});
	$('.tips li').eq(3).click(function() {
		var _this = this;
		layer.tips('在很久很久以前..很久很久以前..很久很久以前..很久很久以前..' , _this , {
		  time : 1200 ,
		  tips: [4, '#0FA6D8']   
		});
	});
	$('.tips li').eq(4).click(function() {
		var _this = this;
		layer.tips('不销毁以前的' , _this , {
		  time : 1200 ,
		  tips: [2, '#0FA6D8']   ,
		  tipsMore : true    //不销毁之前的
		});
	});
})()
