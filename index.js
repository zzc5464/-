window.onload = function(){
	function $(id){return document.getElementById(id);}
	//获取元素
	var w_slider = $("w_slider");//最大的盒子
	var slider_main = $("slider_main");//包圖片的盒子
	var img = slider_main.children;//圖片
	var slider_ctrl = $("slider_ctrl");//包按鈕的盒子
	//操作元素
	for(var i = 0;i<img.length;i++){//遍歷圖片
		var span = document.createElement("span");
		slider_ctrl.insertBefore(span,slider_ctrl.children[1]);
		//包按钮盒子中插入span到 他的第二个孩子
		span.innerHTML = img.length - i;
		span.className = "slider-ctrl-icon";
	}
	var spans = slider_ctrl.children;//取得所有小圖標的孩子
	spans[1].className = "slider-ctrl-icon current";
	/*把第一个图片留在可视区域，其余的放右边*/
	var scrollWidth = w_slider.clientWidth;//等於圖片自身的寬度
	for(var i = 1;i<img.length;i++){
		img[i].style.left = scrollWidth + "px";
	}
	var iNow = 0;//用来存放 播出的是哪一张；
	for(var k in spans){
		spans[k].onmouseenter = function(){
			if(this.className == "slider-ctrl-prev"){
//				alert("zuo");
				animate(img[iNow],{left:scrollWidth});
				--iNow<0?iNow=img.length-1:iNow;
				img[iNow].style.left = -scrollWidth + "px";
				animate(img[iNow],{left:0});
				square();
				
			}else if(this.className == "slider-ctrl-next"){
//				alert("you");
				autoplay();
			}else{
//				alert("ooo");
				var that = this.innerHTML-1;
				if(that>iNow){
					animate(img[iNow],{left:-scrollWidth});
					img[that].style.left = scrollWidth + "px";
					square();
				}else if(that<iNow){
					animate(img[iNow],{left:scrollWidth});
					img[that].style.left = -scrollWidth + "px";
				}
				iNow=that;
				animate(img[iNow],{left:0});
				square();
			}
		}
	}
		function square(){
			for(var i=1;i<spans.length-1;i++){
				spans[i].className = "slider-ctrl-icon";
			}
			spans[iNow+1].className = "slider-ctrl-icon current";
		}
		var timer = null;
		timer = setInterval(autoplay,2000);
		function autoplay(){
			animate(img[iNow],{left:scrollWidth});
				++iNow>img.length-1?iNow=0:iNow;
				img[iNow].style.left = scrollWidth + "px";
				animate(img[iNow],{left:0});
				square();
		}
		w_slider.onmouseover = function(){
			clearInterval(timer);
		}
		w_slider.onmouseout = function(){
			clearInterval(timer);
			timer = setInterval(autoplay,2000);
		}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
