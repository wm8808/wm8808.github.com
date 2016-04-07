// JavaScript Document
$(function (){
	$('.login').click(function (){
		$('.login_con').show();
		$('.login_bg').addClass('bga');	
	});
	$('.login_con i').click(function (){
		$('.login_con').hide();		
		$('.login_bg').removeClass('bga');		
	});
	$('.registre').click(function (){
		$('.registre_con').show();	
	});
	$('.registre_con i').click(function (){
		$('.registre_con').hide();	
	});
	$('.login_btn_l span').click(function (){
		$('.login_btn_l span').removeClass('active');
		$(this).addClass('active');	
	});//
//	$('.login_btn_l span').mouseout(function (){
//		$(this).removeClass('active');	
//	});
	$('.dengluanniu').click(function (){
		$('.dengluanniu').show();
		$('.zhuceanniu').hide();	
	});
	$('.zhuceanniu').click(function (){
		$('.zhuceanniu').show();
		$('.dengluanniu').hide();	
	});
	$('.nav_c li').mouseover(function (){
		$(this).addClass('active2');	
	});
	$('.nav_c li').mouseout(function (){
		$(this).removeClass('active2');	
	});
	$('.hanju_nav li').mouseover(function (){
		$('.hanju_nav li').removeClass('hanju_navshow');
		$(this).addClass('hanju_navshow');	
	});
	$('.hanju_nav li').mouseout(function (){
		$(this).removeClass('hanju_navshow');	
	});
	$('.dianying li').mouseover(function (){
		$('.dianying li').removeClass('dianyingshow');
		$(this).addClass('dianyingshow');	
	});
	$('.dianying li').mouseout(function (){
		$(this).removeClass('dianyingshow');	
	});
});