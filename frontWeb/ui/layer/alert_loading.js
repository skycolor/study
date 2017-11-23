(function(){
	/*
	 * 个人总结
	 * 1、这个默认样式，以及1，2样式的加载做的真不怎么样
	 * 2、可以使用msg的形式进行模拟，icon设置为16即为加载的转圈圈
	 * 3、参照2可以发现，可以使用msg的形式进行模拟加载中的效果，我认为这个效果比之前的更好
	 * */
	$('.loading li').eq(0).click(function() {
		layer.load();
		setTimeout(function(){
			layer.closeAll('loading');
		} , 1500);
	});
	$('.loading li').eq(1).click(function() {
		layer.load(1);
		setTimeout(function(){
			layer.closeAll('loading');
		} , 1500);
	});
	$('.loading li').eq(2).click(function() {
		layer.load(2);
		setTimeout(function(){
			layer.closeAll('loading');
		} , 1500);
	});
	$('.loading li').eq(3).click(function() {
		layer.msg('加载中', {
		  icon: 16 ,
		  shade: 0.01
		});
	});
	
	
})();
