// JavaScript Document
$(function (){
	$('.wm_phonet').mouseover(function (){
		$('.wm_phonet_list').show();
		$('.wm_phonet_con').addClass('wm_phonethover');	
	});
	$('.wm_phonet').mouseout(function (){
		$('.wm_phonet_list').hide();
		$('.wm_phonet_con').removeClass('wm_phonethover');	
	});
//	$('.wm_mt').each(function (index){
//		$('.wm_mt_tit').mouseover(function (){
//			$(this).eq(index).addClass('wm_mtactive').siblings().removeClass('wm_mtactive');
//		});	
//	});
//	$('.wm_mt').each(function (index){
//		$('.wm_mt_list').hover(function (){
//			$(this).eq(index).addClass('wm_mt_listshow').siblings().removeClass('wm_mt_listshow');	
//		});	
//	});
	$('.wm_mt').mouseover(function (){
		$('.wm_mt_list').show();
		$('.wm_mt_tit').addClass('wm_mtactive');	
	});
	$('.wm_mt').mouseout(function (){
		$('.wm_mt_list').hide();
		$('.wm_mt_tit').removeClass('wm_mtactive');	
	});
	$('.wm_mt2').mouseover(function (){
		$('.wm_mt_list2').show();
		$('.wm_mt_tit2').addClass('wm_mtactive2');	
	});
	$('.wm_mt2').mouseout(function (){
		$('.wm_mt_list2').hide();
		$('.wm_mt_tit2').removeClass('wm_mtactive2');	
	});
	$('.wm_mt3').mouseover(function (){
		$('.wm_mt_list3').show();
		$('.wm_mt_tit3').addClass('wm_mtactive3');	
	});
	$('.wm_mt3').mouseout(function (){
		$('.wm_mt_list3').hide();
		$('.wm_mt_tit3').removeClass('wm_mtactive3');	
	});
	$('.wm_mt4').mouseover(function (){
		$('.wm_mt_list4').show();
		$('.wm_mt_tit4').addClass('wm_mtactive4');	
	});
	$('.wm_mt4').mouseout(function (){
		$('.wm_mt_list4').hide();
		$('.wm_mt_tit4').removeClass('wm_mtactive4');	
	});
	$('.wm_mt5').mouseover(function (){
		$('.wm_mt_list5').show();
		$('.wm_mt_tit5').addClass('wm_mtactive5');	
	});
	$('.wm_mt5').mouseout(function (){
		$('.wm_mt_list5').hide();
		$('.wm_mt_tit5').removeClass('wm_mtactive5');	
	});
	$('.wm_mt6').mouseover(function (){
		$('.wm_mt_list6').show();
		$('.wm_mt_tit6').addClass('wm_mtactive6');	
	});
	$('.wm_mt6').mouseout(function (){
		$('.wm_mt_list6').hide();
		$('.wm_mt_tit6').removeClass('wm_mtactive6');	
	});
	$('.wm_sch_box').mouseover(function (){
		$('.wm_sch_box_list').addClass('wm_sch_box_listshow');
		$('.wm_sch_box_list li').addClass('lishow');		
	});
	$('.wm_sch_box').mouseout(function (){
		$('.wm_sch_box_list').removeClass('wm_sch_box_listshow');
		$('.wm_sch_box_list li').removeClass('lishow');		
	});
	$('.wm_sch_box_list li').mouseover(function (){
		$(this).addClass('liactive');	
	});
	$('.wm_sch_box_list li').mouseout(function (){
		$(this).removeClass('liactive');	
	});
	$('.wm_classify').mouseover(function (){
		$('.wm_classify_list').addClass('wm_classify_listshow');	
	});
	$('.wm_classify').mouseout(function (){
		$('.wm_classify_list').removeClass('wm_classify_listshow');	
	});
	$('.wm_sm li').each(function (index){
		$(this).hover(function (){
			$('.wm_big li').eq(index).addClass('lishow').siblings().removeClass('lishow');	
		});	
	});		
});