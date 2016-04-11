'use strict'
window.onload = function (){
	//page2
	;(function (){
		var oNav = document.getElementById('nav');
		var aBtn = oNav.children;
		var aA = oNav.getElementsByTagName('a');
		for( var i = 0; i<aBtn.length; i++){
			aBtn[i].onclick = function (){
				for( var i = 0; i<aBtn.length; i++){
					aBtn[i].className = '';
				}
				this.className = 'active';
			};
		}
		
	})();
	/*;(function (){
		var oNav = document.getElementById('nav');
		var oHtml = oNav.children[0];
		var oJ2s = oNav.children[1];
		var oH5 = oNav.children[2];
		oHtml.onclick = function (){
			window.open('html.html','_blank');
			this.className = 'active';	
		};
		oJ2s.onclick = function (){
			window.open('js.html','_blank');
			this.className = 'active';	
		};
		oH5.onclick = function (){
			window.open('html5.html','_blank');
			this.className = 'active';	
		};
	})();*/
	/*;(function (){
		ajax(url,function(str){
			var arr = eval('(+'str'+)');
			
				
		},function(){
			失败	
		});
		var oCenter = document.getElementById('center');
		var oUl = document.getElementById('con');
		var oNext = document.getElementById('next');	
		oNext.onclick = function (){
			ajax('content.txt?t=' +Math.random(),function (str){
			var arr = eval('('+str+')');
			arr.sort(function (){
				return Math.random()-0.5;
			});

			alert(arr);
				oUl.innerHTML = '';
				for( var i = 0; i<8; i++){
					var oLi = document.createElement('li');
					oLi.innerHTML = '<a href="'+arr[i].href+'"><img src="'+arr[i].src+'" alt="" /><p>'+arr[i].cont+'</p></a>';
					oUl.appendChild(oLi);	
				}	
			},function (){
				alert('失败');	
			});	
		};	
	})();*/
	;(function (){
		var oCenter = document.getElementById('center');
		//var oCon = document.getElementById('con');
		var aLi = oCenter.getElementsByTagName('li');
		var aImg = oCenter.getElementsByTagName('img');
		for( var i = 0; i<aLi.length; i++){
			aLi[i].index = i;
			aLi[i].onmouseover = function (){
				for( var i = 0; i<aLi.length; i++){
					aLi[i].className = '';
					aImg[i].style.width = aImg[i].offsetWidth+'px';
					aImg[i].style.height = aImg[i].offsetHeight+'px';
					//aP[i].style.marginTop = '20px';
				}
				this.className = 'show';
				aImg[this.index].style.transform = 'scale(1.1)';
				//aImg[this.index].style.height = '145px';
				//aP[this.index].style.marginTop = '21px';
			};
			aLi[i].onmouseout = function (){
				this.className = '';
				for( var i = 0; i<aLi.length; i++){
					aImg[this.index].style.transform = 'scale(1)';
				}
			};
		}
				
	})();
	;(function (){
		var oCenter = document.getElementById('center');
		var aCon = oCenter.children;
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');
		var Num = 0;
		oNext.onclick = function (){
			Num++;
			if(Num == aCon.length){
				Num = aCon.length - 1;	
			}
			for( var i = 0; i<aCon.length; i++){
				move(aCon[i],{top:-aCon[0].offsetHeight*Num},{duration:1000});	
			}
				
		};
		oPrev.onclick = function (){
			Num--;
			if(Num < 0){
				Num = 0;	
			}
			for( var i = 0; i<aCon.length; i++){
				move(aCon[i],{top:-aCon[0].offsetHeight*Num},{duration:1000});	
			}	
		};			
	})();
	////翻页
//	;(function (){
//		var oCon = document.getElementById('con');
//		var oPrev = document.getElementById('prev');
//		var oNext = document.getElementById('next');
//		var aLi = oCon.children;
//		var oPos = [];
//		//布局转换
//		for( var i = 0; i<aLi.length; i++){
//			oPos.push({left:aLi[i].offsetLeft,top:aLi[i].offsetTop});
//		}
//		console.log(oPos);
//		for( var i = 0; i<aLi.length; i++){
//			aLi[i].style.position = 'absolute';
//			aLi[i].style.left = oPos[i].left+'px';
//			aLi[i].style.top = oPos[i].top+'px';
//			aLi[i].style.margin = 0;	
//		}
//		//布局转换结束
//		var bOk = true;
//		oNext.onclick = function (){
//			if(!bOk)return;
//			bOk = false;
//			for( var i = 0; i<aLi.length; i++){
//				(function (index){
//					setTimeout(function (){
//						move(aLi[index],{width:0, height:0,left:0,top:0,opacity:0},{complete:function (){
//							//if(index == aLi.length - 1){
////								for( var i = aLi.length-1;i>=0;i--){
////									(function (index){
////										setTimeout(function (){
////											move(aLi[index],{left:oPos[index].left,top:oPos[index].top,width:272,height:180,opacity:1},{complete:function (){
////												if(index == 0){
////													bOk = true;
////												}
////											}});
////										},100*(aLi.length-i));
////									})(i);
////								}
////							}
//						}});
//					},100*i);
//				})(i);
//			}	
//		};	
//	})();	
};