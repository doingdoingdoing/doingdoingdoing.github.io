     // $(function(){
        //     $(".menu > ul").eq(0).show();
        //     $(".menu h3").click(function(){
        //         $(this).next().stop().slideToggle();
        //         $(this).siblings().next("ul").stop().slideUp();
        //     });
        //     $(".menu > ul > li > a").click(function(){
        //     	var index=$(this).index();
        //         $(this).addClass("selected").parent().siblings().find("a").removeClass("selected");
        //         $(this).addClass("active").parent().siblings().find("a").removeClass("active");

        //     })
        // });
		$(document).ready(function(){

			function myfunction(li,li_a,menu_tab){
				li.click(function(){
				var index=$(this).index();
				menu_tab.eq(index).addClass("active").siblings().removeClass("active");
				li_a.removeClass("selected");
				li_a.eq(index).addClass("selected").siblings().removeClass("selected");
				
			});
			}

			myfunction($(".standup_container .machine_menu .ulmenu1 li"),$(".standup_container .ulmenu1 li a"),$(".standup_container .content .menu1 .tab"));
			myfunction($(".standup_container .machine_menu .ulmenu2 li"),$(".standup_container .ulmenu2 li a"),$(".standup_container .content .menu2 .tab"));
			myfunction($(".standup_container .machine_menu .ulmenu3 li"),$(".standup_container .ulmenu3 li a"),$(".standup_container .content .menu3 .tab"));
			myfunction($(".standup_container .machine_menu .ulmenu4 li"),$(".standup_container .ulmenu4 li a"),$(".standup_container .content .menu4 .tab"));


			// var li1=$(".container .menu ul li");
			// var lia=$(".container .menu ul li a");
			// var tab1=$(".container .content .menu1 .tab ");

			// li1.click(function(){
			// 	var index=$(this).index();

			// 	tab1.eq(index).addClass("active").siblings().removeClass("active");
			// 	lia.removeClass("selected");
			// 	lia.eq(index).addClass("selected").siblings().removeClass("selected");
			// });

			$(function(){            //ul/li的折叠效果
				$(".machine_menu > ul").eq(0).show();
				 $(".machine_menu h3").click(function(){
				 		//找menu对应的tab
				 		$(".menu_tab > div").removeClass("active");

				 		var val=($(this).next().attr('class'));
				 		var menu_value=(val.substring(val.length-1));
				 		$(".standup_container .content .machine_menu"+menu_value+" .tab:first-child").addClass("active");
				 		$(".standup_container .machine_menu .ulmenu"+menu_value+" li>a").removeClass("selected");
				 		$(".standup_container .machine_menu .ulmenu"+menu_value+" li a").eq(0).addClass("selected");//默认设置为被选中状态
				 		

				 		// $("."+"val").child().child().("selected")
				 		
				 			//这是ul收缩效果
				            $(this).next().stop().slideToggle();
				            $(this).siblings().next("ul").stop().slideUp();
							
				           // if($(".container .ulmenu"+menu_value+" li ").find("a").attr("class")==="selected"){
				           // 		$(".container .content .menu"+menu_value+" .tab:first-child")
				           // }
			            });

			});
			
			$(function(){   // 导航 >
				 $(".standup_container .machine_menu > h3").click(function(){

				 	$(".standup_container .content .A1").empty().text($(this).text());
				 	
				 });
			});
		});



