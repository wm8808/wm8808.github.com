'use strict'
window.onload = function (){
	;(function (){
		var oPage = document.getElementById('page');
		var oPageBg = document.getElementById('pageBg');
		var oName = document.getElementById('name');
		var aP = oName.children;
		var oHc = document.getElementById('hc');
		var iNow = 0;
		var timer = null;
		for( var i = 0; i<aP.length; i++){
			aP[i].style.transform = "translateY(0)";		
		}
		timer = setTimeout(function (){
			clearInterval(timer);
			move(oPage,{top:-oPage.offsetHeight},{duration:2000,complete:function (){
				move(oHc,{left:160},{duration:2000});	
			}});
		},3000);
		
	})();	
};