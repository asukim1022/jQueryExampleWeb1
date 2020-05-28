$(document).ready(function(){
console.log("ready");




    $(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage', '7thPage', '8thPage', '9thPage', '10thPage', '11thPage'],
				menu:"#menu",
				menu:"#menu_2",
				scrollingSpeed: 500,
				
				slidesNavigation: true,
				afterLoad:function($page){
					switch ($page) {
						
						case 'firstPage':
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_4").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							
							$("#dot_1").css({"background-color" : "#fff"});
							
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a3").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							break;
							
						case 'secondPage':
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_4").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							
							$("#dot_2").css({"background-color" : "#fff"});
							
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a3").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							
							$(".a1").css({"font-weight" : "bold", "text-decoration" : "underline"});
							break;
						
						case '3rdPage':
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_4").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							
							$("#dot_3").css({"background-color" : "#fff"});
							
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a3").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							
							$(".a2").css({"font-weight" : "bold", "text-decoration" : "underline"});
							break;
							
						case '4thPage':
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							
							$("#dot_4").css({"background-color" : "#15276d"});
						
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							
							$(".a3").css({"font-weight" : "bold", "text-decoration" : "underline"});
							break;
							
						case '5thPage':
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							
							$("#dot_4").css({"background-color" : "#15276d"});
							
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							
							$(".a3").css({"font-weight" : "bold", "text-decoration" : "underline"});
							break;
							
						case '6thPage':
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_4").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							
							$("#dot_5").css({"background-color" : "#fff"});
						
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a3").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							
							$(".a4").css({"font-weight" : "bold", "text-decoration" : "underline"});
							break;
							
						case '7thPage':
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_4").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							
							$("#dot_6").css({"background-color" : "#fff"});
						
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a3").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							
							$(".a5").css({"font-weight" : "bold", "text-decoration" : "underline"});
							break;
							
						case '8thPage':
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_4").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							
							$("#dot_7").css({"background-color" : "#fff"});
							
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a3").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							
							$(".a6").css({"font-weight" : "bold", "text-decoration" : "underline"});
							break;
	
						case '9thPage':
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_4").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_9").css({"background-color" : "#fd5521"});
							
							$("#dot_8").css({"background-color" : "#fff"});
							
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a3").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							
							$(".a7").css({"font-weight" : "bold", "text-decoration" : "underline"});
							break;
							
						case '10thPage':	
							$("#dot_1").css({"background-color" : "#fd5521"});
							$("#dot_2").css({"background-color" : "#fd5521"});
							$("#dot_3").css({"background-color" : "#fd5521"});
							$("#dot_4").css({"background-color" : "#fd5521"});
							$("#dot_5").css({"background-color" : "#fd5521"});
							$("#dot_7").css({"background-color" : "#fd5521"});
							$("#dot_6").css({"background-color" : "#fd5521"});
							$("#dot_8").css({"background-color" : "#fd5521"});
							
							$("#dot_9").css({"background-color" : "#fff"});
						
							$(".a1").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a2").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a3").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a4").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a5").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a6").css({"font-weight" : "normal", "text-decoration" : "none"});
							$(".a7").css({"font-weight" : "normal", "text-decoration" : "none"});
							break;
					}
				}
			});
		});

	var rolling;
	var time = 3000;
	var current = 0;
	var targetL;
	var currentQ = 0;
	var targetT;
  
	rolling = setInterval(next, time);
      
		function next(){
            
			if(current <  $(".wrapBox > ul > li").length -1){
				current++;
            }else{
               current = 0;
            }
               targetL = -865 *current;         
               $(".wrapBox > ul").stop() .animate({left : targetL + "px"}, 500);   
      		};
});

