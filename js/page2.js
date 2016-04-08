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
		var aImg = oCon.getElementsByTagName('img');
		var aP = oCon.getElementsByTagName('p');
		for( var i = 0; i<aCon.length; i++){
			aCon[i].index = i;
			aCon[i].onmouseover = function (){
				for( var i = 0; i<aCon.length; i++){
					aCon[i].className = '';
					aImg[i].style.width = '240px';
					aImg[i].style.height = '135px';
					//aP[i].style.marginTop = '20px';
				}
				this.className = 'show';
				aImg[this.index].style.width = '250px';
				aImg[this.index].style.height = '145px';
				//aP[this.index].style.marginTop = '21px';
					
			};
		}		
	})();
	;(function (){
		var oPrev = document.getElementById('prev');
		var oNext = document.getElementById('next');
		oNext.onclick = function (){
				
		};	
	})();	
};