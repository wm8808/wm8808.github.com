'use strict'
window.onload = function (){
	var oPageF = document.getElementById('pageF');
	var oPageS = document.getElementById('pageS');
	var oCon = document.getElementById('con');
	var oNext = document.getElementById('next');
	oNext.onclick = function (){
		move(oPageF,{top:-oPageF.offsetHeight},{duration:1000});
		move(oNext,{opacity:0},{duration:100});
		oPageS.className += ' active';	
		//move(oCon,{opacity:1},{duration:5000});
	};
	
};
/***
	***;(function (){
		var oPage = document.getElementById('page');
		var oPageBg = document.getElementById('pageBg');
		var oName = document.getElementById('name');
		var aP = oName.children;
		var oCon = document.getElementById('con');
		var aCon = oCon.children;
		var oHc = document.getElementById('hc');
		var oJs = document.getElementById('js');
		var oHc3 = document.getElementById('hc3');
		var oPageS = document.getElementById('pageS');
		var oH2 = oPageS.children[1];
		var iNow = 0;
		var timer = null;
		for( var i = 0; i<aP.length; i++){
			aP[i].style.WebkitTransform = "translateY(0)";
			aP[i].style.msTransform = "translateY(0)";
			aP[i].style.MozTransform = "translateY(0)";
			aP[i].style.transform = "translateY(0)";			
		}
		timer = setTimeout(function (){
			clearInterval(timer);
			move(oPage,{top:-oPage.offsetHeight},{duration:500,complete:function (){
				move(oH2,{top:50},{duration:500,complete:function (){
					move(oHc,{left:160},{duration:500,complete:function (){
						move(oJs,{bottom:90},{duration:500,complete:function (){
							move(oHc3,{right:160},{duration:500,complete:function (){
								for( var i = 0; i<aCon.length; i++){
									//aCon[i].style.transform = "translateX(1078px)";
									move(aCon[i],{opacity:1},{duration:4000,complete:function (){
											
									}});	
								}	
							}});
						}});	
					}});
				}});	
			}});
		},3000);
		oHc3.onclick = function (){
			window.open('page2.html','_blank');	
		};
	})();
	****/