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
	;(function (){
		var oCon = document.getElementById('con');
		var aCon = oCon.children;
		for( var i = 0; i<aCon.length; i++){
			aCon[i].onmouseover = function (){
				for( var i = 0; i<aCon.length; i++){
					aCon[i].className = '';
				}
				this.className = 'show';	
			};
		}		
	})();	
};