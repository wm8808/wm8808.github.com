// JavaScript Document
window.onload=function (){
	var oUpbtn=document.getElementById('upbtn');
	var oUploading=document.getElementById('uploading');
	var oUp_list=document.getElementById('up_list');
	var oNav_bd=document.getElementById('nav_bd');
	var oNav_l=document.getElementById('nav_l');
	var aLi=oNav_l.getElementsByTagName('li');
	var oBanner=document.getElementById('banner');
	var oUl=oBanner.getElementsByTagName('ul')[0];
	var aBannerli=oUl.getElementsByTagName('li');
	
	var oPersonal_tab=document.getElementById('personal_tab');
	var aPersonal_tabli=oPersonal_tab.getElementsByTagName('li');
	var oPersonal_con=document.getElementById('personal_con');
	var oPersonal_tv=oPersonal_con.getElementsByTagName('ul')[0];
	var aPersonal_tvli=oPersonal_tv.getElementsByTagName('li');
	var oTit=document.getElementById('tit');
	var aSpan=oTit.getElementsByTagName('span');
	var oZjyc_con=document.getElementById('zjyc_con');
	var aZjyc_conli=oZjyc_con.getElementsByTagName('li');
	var oTv_nav=document.getElementById('tv_nav');
	var aTv_navli=oTv_nav.getElementsByTagName('li');
	var oTv_con=document.getElementById('tv_con');
	var aTv_conli=oTv_con.getElementsByTagName('li');
	
	var oHy=document.getElementById('hy01');
	var aHyli=oHy.getElementsByTagName('li');
	var oHy_list=document.getElementById('hy_list');
	var aHy_listli=oHy_list.getElementsByTagName('li');
	var oZy=document.getElementById('zy01');
	var aZyli=oZy.getElementsByTagName('li');
	var oZy_con=document.getElementById('zy_con');
	var aZy_conli=oZy_con.getElementsByTagName('li');
	var oZyph=document.getElementById('zyph');
	var aZyphli=oZyph.getElementsByTagName('li');
	var oZyph_con=document.getElementById('zyph_con');
	var aZyph_conli=oZyph_con.getElementsByTagName('li');
	var oFunny_nav=document.getElementById('funny_nav');
	var aFunny_navli=oFunny_nav.getElementsByTagName('li');
	var oFunny_l_list=document.getElementById('funny_l_list');
	var aFunny_l_listli=oFunny_l_list.getElementsByTagName('li');
	var oYyue=document.getElementById('yyue');
	var aYyueli=oYyue.getElementsByTagName('li');
	var oYyue_con=document.getElementById('yyue_con');
	var aYyue_conli=oYyue_con.getElementsByTagName('li');
	var oHyb=document.getElementById('hyb');
	var aHybli=oHyb.getElementsByTagName('li');
	var oHyb_con=document.getElementById('hyb_con');
	var aHyb_conli=oHyb_con.getElementsByTagName('li');
	var oTyrw=document.getElementById('tyrw');
	var aTyrwli=oTyrw.getElementsByTagName('li');
	var oTyrw_con=document.getElementById('tyrw_con');
	var aTyrw_conli=oTyrw_con.getElementsByTagName('li');
	var oPinpai=document.getElementById('pinpai');
	var aPinpaili=oPinpai.getElementsByTagName('li');
	var oPinpai_con=document.getElementById('pinpai_con');
	var aPinpai_conli=oPinpai_con.getElementsByTagName('li');
	var oPinpai2=document.getElementById('pinpai2');
	var aPinpai2li=oPinpai2.getElementsByTagName('li');
	var oPinpai2_con=document.getElementById('pinpai2_con');
	var aPinpai2_conli=oPinpai2_con.getElementsByTagName('li');
	var oGrpd=document.getElementById('grpd');
	var aGrpdli=oGrpd.getElementsByTagName('li');
	var oGrpd_con=document.getElementById('grpd_con');
	var aGrpd_conli=oGrpd_con.getElementsByTagName('li');
	
	
	
	
	
	oUpbtn.onmouseover=function (){
		oUp_list.style.display='block';
	};
	oUpbtn.onmouseout=function (){
		oUp_list.style.display='none';
	};
	
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function (){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className='';
				aBannerli[i].className='';	
			};
			this.className='active';
			aBannerli[this.index].className='show';
		};
	};
	for(var i=0; i<aPersonal_tabli.length; i++){
		aPersonal_tabli[i].index=i;
		aPersonal_tabli[i].onmouseover=function (){
			for(var i=0; i<aPersonal_tabli.length; i++){
				aPersonal_tabli[i].className='';
				aPersonal_tvli[i].className='';
			};
			this.className='personalactive';
			aPersonal_tvli[this.index].className='personal_tvshow';
		};
	};
	for( var i=0; i<aSpan.length; i++){
		aSpan[i].index=i;
		aSpan[i].onmouseover=function (){
			for(var i=0; i<aSpan.length; i++){
				aSpan[i].className='';
				aZjyc_conli[i].className='';
			};
			this.className='zjycactive';
			aZjyc_conli[this.index].className='zjyc_conshow';	
		};	
	};
	for(var i=0; i<aTv_navli.length; i++){
		aTv_navli[i].index=i;
		aTv_navli[i].onmouseover=function (){
			for(var i=0; i< aTv_navli.length; i++){
					aTv_navli[i].className='';
					aTv_conli[i].className='';
			};
			this.className='tv_navactive';
			aTv_conli[this.index].className='tv_conshow';	
		};		
	};
     var oVideo=document.getElementById('video');
	var aVideoli=oVideo.getElementsByTagName('li');
	var oVideo_list=document.getElementById('video_list');
	var aVideo_listli=oVideo_list.getElementsByTagName('li');
	
	for(var i=0; i<aVideoli.length; i++)
	{
			aVideoli[i].index=i;
			aVideoli[i].onmouseover = function(){
				for(var i=0; i<aVideoli.length; i++)
				{
					aVideoli[i].className = '';
					aVideo_listli[i].className='';
				}
				this.className='tv_navactive';
				aVideo_listli[this.index].className='tv_conshow';
			};
	};
	for( var i=0; i<aHyli.length; i++){
		aHyli[i].index=i;
		aHyli[i].onmouseover=function (){
			for( var i=0; i<aHyli.length; i++){
				aHyli[i].className='';
				aHy_listli[i].className='';		
			};
			this.className='tv_navactive';
			aHy_listli[this.index].className='tv_conshow';	
		};	
	};
	
	for(var i=0;i<aZyli.length; i++ ){
		aZyli[i].index=i;
		aZyli[i].onmouseover=function (){
			for(var i=0; i<aZyli.length; i++){
					aZyli[i].className='';
					aZy_conli[i].className='';
			};
			this.className='tv_navactive';	
			aZy_conli[this.index].className='tv_conshow';
		};
		
	};
	for(var i=0; i<aZyphli.length; i++){
		aZyphli[i].index=i;
		aZyphli[i].onmouseover=function (){
			for(var i=0; i<aZyphli.length; i++){
				aZyphli[i].className='';
				aZyph_conli[i].className='';
			};
			this.className='tv_navactive';
			aZyph_conli[this.index].className='tv_conshow';
		};
			
	};
	for(var i=0; i<aFunny_navli.length; i++){
		aFunny_navli[i].index=i;
		aFunny_navli[i].onmouseover=function (){
			for(var i=0; i<aFunny_navli.length; i++){
				aFunny_navli[i].className='';
				aFunny_l_listli[i].className='';	
			};
			this.className='funnyactive';
			aFunny_l_listli[this.index].className='funnyshow';	
		};
			
	};
	
	for(var i=0; i<aYyueli.length; i++){
		aYyueli[i].index=i;
		aYyueli[i].onmouseover=function (){
			for(var i=0; i<aYyueli.length; i++){
				aYyueli[i].className='';
				aYyue_conli[i].className='';	
			};
			this.className='tv_navactive';
			aYyue_conli[this.index].className='tv_conshow';	
		};
			
	};
	
	for(var i=0; i<aHybli.length; i++){
			aHybli[i].index=i;
			aHybli[i].onmouseover=function (){
				for(var i=0; i<aHybli.length; i++){
						aHybli[i].className='';
						aHyb_conli[i].className='';
				};
				this.className='tv_r_navactive';
				aHyb_conli[this.index].className='tv_conshow';	
			};
	};
	for(var i=0; i<aTyrwli.length; i++){
			aTyrwli[i].index=i;
			aTyrwli[i].onmouseover=function (){
				for(var i=0; i<aTyrwli.length; i++){
						aTyrwli[i].className='';
						aTyrw_conli[i].className='';
				};
				this.className='tv_navactive';
				aTyrw_conli[this.index].className='tv_conshow';	
			};
	};
	for(var i=0; i<aPinpaili.length; i++){
			aPinpaili[i].index=i;
			aPinpaili[i].onmouseover=function (){
				for(var i=0; i<aPinpaili.length; i++){
					aPinpaili[i].className='';
					aPinpai_conli[i].className='';
				};
				this.className='pinpai_navactive';
				aPinpai_conli[this.index].className='pinpaishow';
			};
	};
	for(var i=0; i<aPinpaili.length; i++){
			aPinpai2li[i].index=i;
			aPinpai2li[i].onmouseover=function (){
				for(var i=0; i<aPinpaili.length; i++){
					aPinpai2li[i].className='';
					aPinpai2_conli[i].className='';
				};
				this.className='pinpai_navactive';
				aPinpai2_conli[this.index].className='pinpaishow';
			};
	};
	for(var i=0; i<aGrpdli.length; i++){
		aGrpdli[i].index=i;
		aGrpdli[i].onmouseover=function (){
			for(var i=0; i<aGrpdli.length; i++){
					aGrpdli[i].className='';
					aGrpd_conli[i].className='';
			};
			this.className='funnyactive';
			aGrpd_conli[this.index].className='funnyshow';	
		};
			
	};
	var oDsph=document.getElementById('dsph');
	var aDsphli=oDsph.getElementsByTagName('li');
	var oDsph_con=document.getElementById('dsph_con');
	var aDsph_conli=oDsph_con.getElementsByTagName('li');
	for(var i=0; i<aDsphli.length; i++){
		aDsphli[i].index=i;
		aDsphli[i].onmouseover=function (){
			for(var i=0; i<aDsphli.length; i++){
					aDsphli[i].className='';
					aDsph_conli[i].className='';
			};
			this.className='tv_navactive';
			aDsph_conli[this.index].className='tv_conshow';	
		};
			
	};
};






























