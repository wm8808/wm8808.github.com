// JavaScript Document
$(function (){
	$('.new_r_list_con_f span').click(function (){
		$('.side').show();	
	});
	$('.side i').click(function (){
		$('.side').hide();	
	});
	$('.yyong').mouseover(function (){
		$('.yyong_list').show();	
	});
	$('.yyong').mouseout(function (){
		$('.yyong_list').hide();	
	});
	$('.register').click(function (){
		$('.register_con').show();	
	});
	$('.register_con i').click(function (){
		$('.register_con').hide();	
	});
	$('.login').click(function (){
		$('.register_con').show();	
	});
	$('.register_con i').click(function (){
		$('.register_con').hide();	
	});
	$('.more_box').click(function (){
		$('.groom_con_more').show();	
	});	
});