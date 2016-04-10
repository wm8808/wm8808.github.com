// JavaScript Document
//切换透明图层
function tab(id){
	var oTvcon = document.getElementById(id);
	var aUl = oTvcon.getElementsByTagName('ul');
	var aLi2 = oTvcon.getElementsByTagName('li');
	var aShadow = oTvcon.getElementsByTagName('div');
	
		for( var i = 0; i<aLi2.length; i++){
			aLi2[i].index = i;
			aLi2[i].onmouseover = function (){
				for( var i = 0; i<aLi2.length; i++){
					aShadow[i].style.display = '';	
				}
					aShadow[this.index].style.display = 'block';		
			};
			aLi2[i].onmouseout = function (){
				for( var i = 0; i<aLi2.length; i++){
					aShadow[i].style.display = '';	
				}
					aShadow[this.index].style.display = 'none';		
			};		
		}	
}
//电影电视剧小标签切换
function videoTab(id_1,id_2)
{
	var oTvnav = document.getElementById(id_1);
	var aTvli = oTvnav.getElementsByTagName('li');
	var oTvcon = document.getElementById(id_2);
	var aTvul = oTvcon.getElementsByTagName('ul');
	
	for( var i = 0; i<aTvli.length; i++){
		aTvli[i].index = i;
		aTvli[i].onmouseover = function (){
		for( var i = 0; i<aTvli.length; i++){
		aTvul[i].style.display = '';	
	}
		aTvul[this.index].style.display = 'block';	
	};
	aTvli[i].onmouseout= function (){
		for( var i = 0; i<aTvli.length; i++){
		aTvul[i].style.display = '';	
		}
		aTvul[this.index].style.display = 'block';	
	};	
	}
}

function Tvr(id){
	var oTrl = document.getElementById(id);
	var aTvrli = oTrl.getElementsByTagName('li');
	
		for( var i = 0; i<aTvrli.length; i++){
			if(i%2 == 1){
				aTvrli[i].style.background = 'f4f4f4';	
			}else{
				aTvrli[i].style.background = '#eee';	
			}
			aTvrli[i].onmouseover = function (){
				for( var i = 0; i<aTvrli.length; i++){
					aTvrli[i].className = '';		
				}
				this.className = 'active';	
			};
				
		}	
}

