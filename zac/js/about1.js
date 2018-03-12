$(document).ready(function(){
      	$("#list1 li a").click(function(){
      		$(this).parent().css("background-color","red").siblings().css("background-color","#fff");
      		var index=$("#list1 li a").index(this);
      		showBrandList(index);
      		return false;
      	}).eq(0).click();
      // 	$("#list1 li a").hover(function(){
      // 		$(this).parent().css("background-color","gray")
      // },function(){
      // 	$(this).parent().siblings().css("background-color","#fff")
      // }).eq(0).click();
      function showBrandList(index){
      	var $rollobj=$("#banner2-inner2");
      	var rollWidth=$rollobj.find("li").outerWidth();
      	var rollWidth=600;
      	$rollobj.stop(true,false).animate({left:-rollWidth*index},1000)
      }
      })

    $(document).ready(function(){
      	$("#list2 li a").click(function(){
      		$(this).parent().css("background-color","red").siblings().css("background-color","#fff");
      		var index=$("#list2 li a").index(this);
      		showBrandList(index);
      		return false;
      	}).eq(0).click();
      // 	$("#list1 li a").hover(function(){
      // 		$(this).parent().css("background-color","gray")
      // },function(){
      // 	$(this).parent().siblings().css("background-color","#fff")
      // }).eq(0).click();
      function showBrandList(index){
      	var $rollobj=$("#banner3-inner3");
      	var rollWidth=$rollobj.find("li").outerWidth();
      	var rollWidth=600;
      	$rollobj.stop(true,false).animate({left:-rollWidth*index},1000)
      }
      })

    $(document).ready(function(){
      	$("#list3 li a").click(function(){
      		$(this).parent().css("background-color","red").siblings().css("background-color","#fff");
      		var index=$("#list3 li a").index(this);
      		showBrandList(index);
      		return false;
      	}).eq(0).click();
      // 	$("#list1 li a").hover(function(){
      // 		$(this).parent().css("background-color","gray")
      // },function(){
      // 	$(this).parent().siblings().css("background-color","#fff")
      // }).eq(0).click();
      function showBrandList(index){
      	var $rollobj=$("#banner4-inner4");
      	var rollWidth=$rollobj.find("li").outerWidth();
      	var rollWidth=600;
      	$rollobj.stop(true,false).animate({left:-rollWidth*index},1000)
      }
      })

    $(document).ready(function(){
      	$("#list4 li a").click(function(){
      		$(this).parent().css("background-color","red").siblings().css("background-color","#fff");
      		var index=$("#list4 li a").index(this);
      		showBrandList(index);
      		return false;
      	}).eq(0).click();
      // 	$("#list1 li a").hover(function(){
      // 		$(this).parent().css("background-color","gray")
      // },function(){
      // 	$(this).parent().siblings().css("background-color","#fff")
      // }).eq(0).click();
      function showBrandList(index){
      	var $rollobj=$("#banner5-inner5");
      	var rollWidth=$rollobj.find("li").outerWidth();
      	var rollWidth=600;
      	$rollobj.stop(true,false).animate({left:-rollWidth*index},1000)
      }
      })

    $(document).ready(function(){
      	$("#list5 li a").click(function(){
      		$(this).parent().css("background-color","red").siblings().css("background-color","#fff");
      		var index=$("#list5 li a").index(this);
      		showBrandList(index);
      		return false;
      	}).eq(0).click();
      // 	$("#list1 li a").hover(function(){
      // 		$(this).parent().css("background-color","gray")
      // },function(){
      // 	$(this).parent().siblings().css("background-color","#fff")
      // }).eq(0).click();
      function showBrandList(index){
      	var $rollobj=$("#banner6-inner6");
      	var rollWidth=$rollobj.find("li").outerWidth();
      	var rollWidth=600;
      	$rollobj.stop(true,false).animate({left:-rollWidth*index},1000)
      }
      })