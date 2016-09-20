	_ajax();
//		$(".work").css("display","inline-block");
	var scrollY,startY;
	var freeHeight=100;
	var click_x,click_y;
	var start_x,start_y;
//	手指头按下开始
	$(window).on("touchstart",function(e){

//				return click_x,click_y;
	
		
		
		
	scrollY=$(window).scrollTop();
	startY=e.originalEvent.changedTouches[0].clientY;
//	手指头移动
	if(scrollY==0){
//		alert(scrollY);
	$(window).on("touchmove",function(e){
	scrollY=$(window).scrollTop();
	var moveY=e.originalEvent.changedTouches[0].clientY-startY;
	if(moveY<=freeHeight){
		$(".refree").height(moveY);
						}
	})
	}else{
		$(window).off("touchmove");
		$(window).off("touchend");
	}
//	手指结束
	$(window).on("touchend",function(e){
//		滚动到最顶部
		if(scrollY==0&&startY!=e.originalEvent.changedTouches[0].clientY){
			$(".context").css("display","none");
		$(".context").text('');
		_ajax();
		$(".context").css("display","block");
		$(".refree").height(0);
		}
//		滚动到最底部
if($(window).scrollTop()+window.screen.height>=document.body.clientHeight-10){
	_ajax()
											}
	})
})
	

var end_x_screen,end_y_screen;
$(".context").on("touchstart",".work",function(e){
				//			弹出位置
				start_x=e.originalEvent.touches[0].screenX;
				start_y=e.originalEvent.touches[0].screenY;
//				console.log(click_x+'******'+click_y+"***"+$(".video_context").height())
				if ($(".video_context").height()==0) {
				click_x=e.originalEvent.touches[0].clientX;
				click_y=e.originalEvent.touches[0].clientY
				$(".video_context").css("left",click_x+"px").css("top",click_y+"px").css("transition","all 0s");
				}
})


$(".context").on("touchend",".work",function(e){
//	相对与window		
			var end_x=e.originalEvent.changedTouches[0].screenX;
			var end_y=e.originalEvent.changedTouches[0].screenY;
//	相对应屏幕分辨率
			 end_x_screen=e.originalEvent.changedTouches[0].clientX;
			 end_y_screen=e.originalEvent.changedTouches[0].clientY;
			
			var mp4_url= this.getAttribute("_href");
			var touxiang=this.childNodes[0].childNodes[2].getAttribute("src");
			var  view_count=this.getAttribute("view_count");
			var  user_name=this.getAttribute("user_name");
			var caption=this.getAttribute("caption");
			var load=this.getAttribute("load");
			if (start_x==end_x&&start_y==end_y) {
			$(".mp4").attr("src",mp4_url);
			$(".video_touxiang>img").attr("src",touxiang);
			$(".bofangliang>p").text(view_count);
			$(".title>.user_name").text(user_name+' :');
			$(".title>.caption").text(caption);
			$(".down_load").attr("href",load);
//			setTimeout(function(){ },300);
			$(".video_context").css("width","100%").css("height","100%").css("border-radius","0%").css("left","0%").css("top","0%").css("transition","all .3s");
		
		$(".mp4").attr("autoplay","true");
			}
	})
		$("._return").on("touchend",function(){
		
			$(".video_context").css("width","0%").css("height","0%").css("border-radius","50%").css("left",end_x_screen+"px").css("top",end_y_screen+"px").css("transition","all .3s");
			$(".mp4").attr("src","");
		})

