//	ajax请求
function _ajax(){
		$.ajax({
		type:"get",
		url:"http://kuaishou2016.herokuapp.com/json",
		async:false,
		success:function(data){
//遍历所有的信息
for (var i=0;i<data.feeds.length;i++) {
	if(data.feeds[i].main_mv_urls){
		if(data.feeds[i].main_mv_urls[0].cdn!='js.a.yximgs.com'){
				console.log(data.feeds[i].caption) //图片地址
					$(".context").append('<a class="work" load='+data.feeds[i].main_mv_urls[1].url+' caption='+data.feeds[i].caption+'  view_count='+data.feeds[i].view_count+' user_name='+data.feeds[i].user_name+'  _href='+data.feeds[i].main_mv_urls[0].url+'><div> <img class="_img" src='+data.feeds[i].cover_thumbnail_urls[0].url+ '/><img class="touxiang" src='+data.feeds[i].headurls[0].url+'><b>❤'+data.feeds[i].like_count+'</b></div></a>');
		}else{
//				console.log(data.feeds[i].main_mv_urls[1].url) 视频地址
				$(".context").append('<a class="work" load='+data.feeds[i].main_mv_urls[0].url+'  caption='+data.feeds[i].caption+'  view_count='+data.feeds[i].view_count+' user_name='+data.feeds[i].user_name+'   _href='+data.feeds[i].main_mv_urls[1].url+'><div> <img class="_img" src='+data.feeds[i].cover_thumbnail_urls[1].url+ '/><img class="touxiang"  src='+data.feeds[i].headurls[1].url+'><b>❤'+data.feeds[i].like_count+'</b></div></a>');
		}
	}
}
		},
		error:function(){
			alert('失败')
		}
	});
 	}