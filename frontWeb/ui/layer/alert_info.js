(function() {
	/*
	 * 个人总结
	 * 1、alert与msg弹出形式相近，都可以设置icon等信息，区别在于alert有关闭按钮，而msg没有
	 * 2、弹出层创建的回调是success，弹出层销毁的回调是end,
	 * 3、按钮可以设置多个，依次的点击回调方法是btn1、btn2、btn3。。。。
	 * 4、在弹出层的按钮回调函数中，经常要手工关闭方法是 layer.close(index);
	 * 
	 * */
	/* 信息弹出框 
	 * 
	 * 	第一类
	 * 
	 * */
	$('.info li').eq(0).click(function() {
		layer.alert('信息框0', {
			icon: 0,
			cancel: function(index, layero) {
				console.log('cancel');
			},
			yes: function(index, layero) {
				console.log('yes');
				layer.close(index); //如果设定了yes回调，需进行手工关闭
			}
		});
	});
	$('.info li').eq(1).click(function() {
		layer.alert('信息框1', {
			icon: 1,
			cancel: function(index, layero) {
				console.log('cancel');
			},
			yes: function(index, layero) {
				console.log('yes');
				layer.close(index); //如果设定了yes回调，需进行手工关闭
			}
		});
	});
	$('.info li').eq(2).click(function() {
		layer.alert('信息框2', {
			icon: 2,
			cancel: function(index, layero) {
				console.log('cancel');
			},
			yes: function(index, layero) {
				console.log('yes');
				layer.close(index); //如果设定了yes回调，需进行手工关闭
			}
		});
	});
	$('.info li').eq(3).click(function() {
		layer.alert('信息框3', {
			icon: 3,
			cancel: function(index, layero) {
				console.log('cancel');
			},
			yes: function(index, layero) {
				console.log('yes');
				layer.close(index); //如果设定了yes回调，需进行手工关闭
			}
		});
	});
	$('.info li').eq(4).click(function() {
		layer.alert('信息框4', {
			icon: 4,
			cancel: function(index, layero) {
				console.log('cancel');
			},
			yes: function(index, layero) {
				console.log('yes');
				layer.close(index); //如果设定了yes回调，需进行手工关闭
			}
		});
	});
	$('.info li').eq(5).click(function() {
		layer.alert('信息框5', {
			icon: 5,
			cancel: function(index, layero) {
				console.log('cancel');
			},
			yes: function(index, layero) {
				console.log('yes');
				layer.close(index); //如果设定了yes回调，需进行手工关闭
			}
		});
	});
	$('.info li').eq(6).click(function() {
		layer.alert('信息框6', {
			icon: 6,
			cancel: function(index, layero) {
				console.log('cancel');
			},
			yes: function(index, layero) {
				console.log('yes');
				layer.close(index); //如果设定了yes回调，需进行手工关闭
			}
		});
	});
	/* 信息弹出框 
	 * 
	 * 	第二类
	 * 
	 * */
	$('.info li').eq(7).click(function() {
		layer.msg('你确定么？', {
			time: 0, //不自动关闭
			btn: ['是', '否'],
			btn1: function(index) {
				console.log('yes');
				layer.close(index);
			},
			btn2: function(index) {
				console.log('no');
				layer.close(index);
			}
		});
	});
	/* 信息弹出框 
	 * 
	 * 	第三类
	 * 
	 * */
	$('.info li').eq(8).click(function() {
		layer.msg('通用类型', {
			time: 1200,
			success: function() {
				console.log('success');
			},
			end: function() {
				console.log('end');
			}
		});
	});
	/* 信息弹出框 
	 * 
	 * 	第四类
	 * 
	 * */
	$('.info li').eq(9).click(function() {
		layer.msg('信息框0', {
			icon : 0 ,
			time : 1200
		});
	});
	$('.info li').eq(10).click(function() {
		layer.msg('信息框1', {
			icon : 1 ,
			time : 1200
		});
	});
	$('.info li').eq(11).click(function() {
		layer.msg('信息框2', {
			icon : 2 ,
			time : 1200
		});
	});
	$('.info li').eq(12).click(function() {
		layer.msg('信息框3', {
			icon : 3 ,
			time : 1200
		});
	});
	$('.info li').eq(13).click(function() {
		layer.msg('信息框4', {
			icon : 4 ,
			time : 1200
		});
	});
	$('.info li').eq(14).click(function() {
		layer.msg('信息框5', {
			icon : 5 ,
			time : 1200
		});
	});
	$('.info li').eq(15).click(function() {
		layer.msg('信息框6', {
			icon : 6 ,
			time : 1200
		});
	});
	/* 信息弹出框 
	 * 
	 * 	第五类
	 * 
	 * */
	$('.info li').eq(16).click(function() {
		layer.msg('玩命卖萌中', function(){		//加入了抖动效果
			
		});
	});
})()