'use strict'
window.onload = function (){
	;(function (){
		var oPage = document.getElementById('page');
		var oPageBg = document.getElementById('pageBg');
		var oName = document.getElementById('name');
		var aP = oName.children;
		var oHc = document.getElementById('hc');
		var oJs = document.getElementById('js');
		var oHc3 = document.getElementById('hc3');
		var iNow = 0;
		var timer = null;
		for( var i = 0; i<aP.length; i++){
			aP[i].style.transform = "translateY(0)";		
		}
		timer = setTimeout(function (){
			clearInterval(timer);
			move(oPage,{top:-oPage.offsetHeight},{duration:2000,complete:function (){
				move(oHc,{left:160},{duration:800,complete:function (){
					move(oJs,{right:650},{duration:1500,complete:function (){
						move(oHc3,{right:160},{duration:1200});
					}});	
				}});	
			}});
		},3000);
		
	})();	
};