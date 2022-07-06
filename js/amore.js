$(document).ready(function(){

//이미지 전환효과 함수생성

	showImg=0;
	nextImg=0;

	function changeImg(){ /*일반함수*/

		nextImg++;
		ImgCount=$(".main_visual .visual_image li").length;

		if(nextImg==ImgCount){  //마지막이미지일때 다시 첫번째 이미지로
			nextImg=0
		}

		$(".main_visual .visual_image li").eq(showImg).removeClass("imgVisible");
		$(".main_visual .visual_image li").eq(nextImg).addClass("imgVisible");
		$(".main_visual .btn>span").eq(nextImg).addClass("active"); //선택된 하단버튼
		$(".main_visual .btn>span").eq(showImg).removeClass("active"); //기존 하단버튼
		showImg=nextImg;
	}

	timer1=setInterval(changeImg,5000);

	//텍스트 전환효과 함수생성

	showText=0;
	nextText=0;

	function changeText(){ /*일반함수*/

		nextText++;
		TextCount=$(".main_visual .visual_text li").length;

		if(nextText==TextCount){  //마지막이미지일때 다시 첫번째 이미지로
			nextText=0
		}

		$(".main_visual .visual_text li .Vtext").eq(showText).removeClass("textVisible");
		$(".main_visual .visual_text li .Vtext").eq(nextText).addClass("textVisible");
		$(".main_visual .btn>span").eq(nextText).addClass("active"); //선택된 하단버튼
		$(".main_visual .btn>span").eq(showText).removeClass("active"); //기존 하단버튼
		showText=nextText;
	}
	
	timer2=setInterval(changeText,5000);

	//버튼클릭시...
	$(".main_visual .btn>span").click(function(){

		clearInterval(timer1); //버튼클릭시 자동함수 해지
		clearInterval(timer2);

		nextImg=$(this).index();  //0,1,2...
		nextText=$(this).index();

		$(".main_visual .visual_image li").eq(showImg).removeClass("imgVisible");
		$(".main_visual .visual_image li").eq(nextImg).addClass("imgVisible");
		$(".main_visual .btn>span").eq(nextImg).addClass("active"); //선택된 하단버튼
		$(".main_visual .btn>span").eq(showImg).removeClass("active"); //기존 하단버튼
		showImg=nextImg;

		$(".main_visual .visual_text li .Vtext").eq(showText).removeClass("textVisible");
		$(".main_visual .visual_text li .Vtext").eq(nextText).addClass("textVisible");
		$(".main_visual .btn>span").eq(nextText).addClass("active"); //선택된 하단버튼
		$(".main_visual .btn>span").eq(showText).removeClass("active"); //기존 하단버튼
		showText=nextText;

		timer1=setInterval(changeImg,5000);
		timer2=setInterval(changeText,5000);
	});

	// 풀모달메뉴

	$(".menu_toggle_btn").click(function(){
		$(this).toggleClass("menu-open");
		$(".allmenu").slideToggle("fast");
	});

	$(".menu_toggle_color").click(function(){
		$(this).toggleClass("menu-open");
		$(".allmenu_blue").slideToggle("fast");
	});


	//탑메뉴
	//box1) 아래에서 위로...
	$(".nav ul .m1").hover(function(){
		$(this).find(".m2").stop(true,true).animate({marginTop:"-50px"},150);
	},function(){
		$(this).find(".m2").stop(true,true).animate({marginTop:"0px"},150);
	});


	//건축탭메뉴

	$(".smallImg1 a").click(function(){
		var path=$(this).attr("href");
		$(".t1>img").attr({"src":path}).hide().fadeIn();
		return false;
	});

	$(".smallImg2 a").click(function(){
		var path=$(this).attr("href");
		$(".p2>img").attr({"src":path}).hide().fadeIn();
		return false;
	});

	$(".smallImg3 a").click(function(){
		var path=$(this).attr("href");
		$(".m3>img").attr({"src":path}).hide().fadeIn();
		return false;
	});

	$(".smallImg4 a").click(function(){
		var path=$(this).attr("href");
		$(".j4>img").attr({"src":path}).hide().fadeIn();
		return false;
	});

	$(".panel>li:not(:first)").hide();
	//첫번째를 제외한 나머지 내용 숨기기

	$(".tab li a").click(function(){
		$(".tab li a").removeClass("selected");//기존선택된 selected 클래스삭제
		$(this).addClass("selected");//새로 선택된 selected 클래스 생성
		$(".panel>li").hide();//기존의 보여진 내용 숨기기
		$($(this).attr("href")).show().hide().fadeIn();//새로 선택된 내용 href 연결된내용 보여주기
		return false; //a기능차단
	});

});