$(function(){
	navNow = $('#nav').find('.curr').index();
	if(navNow == -1){$('#header_cont .bg').css('opacity',0);}
	else{$('#header_cont .bg').css('opacity',1);}
	navLeft = 14+7*navNow;
	$('#header_cont .bg').css('left', navLeft+'%');
	
	$('#header_cont #nav li').hover(function(){
		hoverNow = $(this).index();
		hoverLeft = 14+7*hoverNow;
		if(navNow == -1){$('#header_cont .bg').css('opacity',1);};
		$('#header_cont .bg').css('left', hoverLeft+'%');
		$(this).addClass('curr').siblings().removeClass('curr');
	},function(){
		$('#header_cont .bg').css('left', navLeft+'%');
		if(navNow == -1){
			$('#header_cont #nav li').removeClass('curr');
			$('#header_cont .bg').css('opacity',0);
		}else{
			$('#header_cont #nav li').eq(navNow).addClass('curr').siblings().removeClass('curr');
		}
	});
	
	$('#links li').hover(function(){
		$(this).find('.info').fadeIn(500);
	},function(){
		$(this).find('.info').fadeOut(500);
	});
	
});

// function menuopen(){
//    $("#link .more").hide()
// }

// function showlogin(){
// 	$('#login').fadeIn();
// }
// function closelogin(){
// 	$('#login').fadeOut();
// }

// function totop(){
// 	$('body,html').animate({scrollTop: 0}, 800);
// }

  // function checkNum(){
  //           var txt=document.getElementById('mobile').value;
  //           var retxt=/^1[3|5|7|8]\d{9}$/;
  //           if(retxt.test(txt)==false){
  //             document.getElementById('mobile').style.borderColor="red";
  //             return false;
  //           }
  //         }

  //        function checkpwd(){
  //         var txt=document.getElementById('pwd').value;
  //         var retxt=/^[a-z0-9]{5,20}$/;
  //         if(retxt.test(txt)==false){
  //           document.getElementById('pwd').style.borderColor="red";
  //           return false;
  //         }
  //        }

$(function(){
	$("#hlist li").click(function(){
		$(this).css("border-bottom","4px red solid");
		$(this).siblings().css("border-bottom","0px");
	})
});

$(function(){
	var $anvlfteb=$('#anvlfteb'),
		$posbox=$anvlfteb.find('div.posbox'),
		$seledbox=$("#seledbox"),
		anvjson={
			bbs:'<a href="#">全部</a>'+
				'<a href="#">保温杯</a>'+
				'<a href="#">焖烧罐</a>'+
				'<a href="#">焖烧锅</a>'+
				'<a href="#">复合金锅</a>'+
				'<a href="#">原汁机</a>',
        	news:'<a href="#">全部</a>'+
				'<a href="#">主食</a>'+
				'<a href="#">配菜</a>'+
				'<a href="#">汤</a>'+
				'<a href="#">饮品</a>'+
				'<a href="#">辅食</a>'+
				'<a href="#">甜品</a>',
        	post:'<a href="#">全部</a>'+
				'<a href="#">轻食瘦身</a>'+
				'<a href="#">营养滋补</a>'+
				'<a href="#">中华料理</a>'+
				'<a href="#">宝宝健康营养</a>'+
				'<a href="#">懒人料理</a>'+
				'<a href="#">美容养颜</a>',
        	youhui:'<a href="#">全部食谱</a>',
		};
		 

		$posbox.mouseover(function(){
			var i=$(this).index();
			$(this).addClass("anvh").siblings().removeClass("anvh");
			var selec=$(this).attr("selec");
			if($seledbox.is(":hidden")){
				$seledbox.show().css("left",100*i+1).html("<div>"+anvjson[selec]+"</div>")
			}else{
				$seledbox.stop().animate({left:100*i+1},200,function(){
					$("#seledbox").html("<div>"+anvjson[selec]+"</div>")
				})
			}
		});
		$anvlfteb.mouseleave(function(){
			$seledbox.hide();
			$posbox.removeClass("anvh");
		})
})


$(function(){
	var $anvlfteb1=$('#anvlfteb1'),
		$posbox1=$anvlfteb1.find('div.posbox1'),
		$seledbox1=$("#seledbox1"),
		anvjson1={
			bbs1:'<a href="about1_cp.html">全部</a>'+
				'<a href="about9_cpxb.html">守护雪豹系列</a>'+
				'<a href="about6_mfms.html">魔法焖烧罐系列</a>'+
				'<a href="about10_msxhl.html">笑脸花系列</a>'+
				'<a href="about19_ylg.html">苹果锅系列</a>'+
				'<a href="#">复古系列</a>',
        	news1:'<a href="about1_cp.html">全部</a>'+
				'<a href="about1_cp.html#bgtq">办公通勤</a>'+
				'<a href="about1_cp.html#jujia">居家</a>'+
				'<a href="about1_cp.html#yd">户外运动</a>'+
				'<a href="about1_cp.html#qinzi">亲子</a>'+
				'<a href="about1_cp.html#zn">智能厨房</a>',
        	post1:'<a href="about1_cp.html">全部</a>'+
				'<a href="#">春色满园</a>'+
				'<a href="#">炎炎夏日</a>'+
				'<a href="#">一叶知秋</a>'+
				'<a href="#">冬日暖阳</a>',
        	youhui1:'<a href="about1_cp.html">所有产品</a>',
		};
		 

		$posbox1.mouseover(function(){
			var i=$(this).index();
			$(this).addClass("anvh1").siblings().removeClass("anvh1");
			var selec1=$(this).attr("selec1");
			if($seledbox1.is(":hidden")){
				$seledbox1.show().css("left",100*i+1).html("<div>"+anvjson1[selec1]+"</div>")
			}else{
				$seledbox1.stop().animate({left:100*i+1},200,function(){
					$("#seledbox1").html("<div>"+anvjson1[selec1]+"</div>")
				})
			}
		});
		$anvlfteb1.mouseleave(function(){
			$seledbox1.hide();
			$posbox1.removeClass("anvh1");
		})
})

$(function(){
	$("#hov").hover(function(){
		$("#topnavbar").show()
	},function(){$("#topnavbar").hide()});
	
	$("#topnavbar").hover(function(){$("#topnavbar").show()
	},function(){$("#topnavbar").hide()});
})

$(function(){
	$("#cp").hover(function(){
		$("#topnavbar1").show()
	},function(){$("#topnavbar1").hide()});
	
	$("#topnavbar1").hover(function(){$("#topnavbar1").show()
	},function(){$("#topnavbar1").hide()});
})