$(function(){
            var eye = document.querySelector(".eye");
            var m_eye = eye.querySelector(".m_eye");
            var eyediv = eye.getBoundingClientRect();

            $("#tooboxwrapup").css({"display":"none"});
            $("#tooboxwrapdown").css({"display":"none"});
            
            var movingeye = function(mouseX, mouseY){
                var radian = Math.atan2(mouseY - (eyediv.y+eyediv.height*0.5), mouseX - (eyediv.x+eyediv.width*0.5));
                m_eye.style.transform = 'rotate('+ (180 * radian / Math.PI - 270) +'deg)';
            };
            
            window.addEventListener("mousemove", function(e){
                movingeye(e.clientX, e.clientY);
            });
            
//            --------------------------눈알굴리기-----------------------------------------
            
            setInterval(function(){
                $(".topeyecover, .bottomeyecover").css({"height":"170px"})
            },7000);
            setInterval(function(){
                $(".topeyecover, .bottomeyecover").css({"height":"0px"})
            },7050);
            
//            ---------------------------눈알깜빡이기--------------------------------------
            
            $("#mainbtn").on("click",function(){
                setTimeout(function(){
                    $("#mainbtn").animate({"bottom":"-100px"});
                },300);
                setTimeout(function(){
                    $("#mainlogo").animate({"top":"-100%"},1500);
                },500);
                
                
                setTimeout(function(){
                    $("#mainpage").css({"display":"none"});
                    $("#firstmonpage").css({"display":"block"});
                },2000);
                
                setTimeout(function(){
                    $("#monbtncenter").css({"left":"-100px"});
                },3000);
            });
            
// --------------------------monbtn클릭--------------------------------
            
            var eye2 = document.querySelector(".eye2");
            var m_eye2 = eye2.querySelector(".m_eye2");
            var eyediv2 = eye2.getBoundingClientRect();
            
            var movingeye2 = function(mouseX, mouseY){
                var radian2 = Math.atan2(mouseY - (eyediv2.y+eyediv2.height*0.5), mouseX - (eyediv2.x+eyediv2.width*0.5));
                m_eye2.style.transform = 'rotate('+ (180 * radian2 / Math.PI + 90) +'deg)';
            };
            
            window.addEventListener("mousemove", function(e){
                movingeye2(e.clientX, e.clientY);
            });
            
            setInterval(function(){
                $(".topeyecover2, .bottomeyecover2").css({"height":"160px"})
            },7000);
            setInterval(function(){
                $(".topeyecover2, .bottomeyecover2").css({"height":"0px"})
            },7050);
            
            
//            -------------------------------------------------------------------------
            
            var maxeye= 1;
            var num = 0;
            var eye_rand_wi = 0;
             $("#firstmonpage").on("click", function(e){
                 if(maxeye < 8){
                     
                     var element = $(".eyewrap2:last-child").clone(true);
                     $(".eyewrap2").eq(num).css({"display":"block"});
                     $(".eyewrap2").eq(num).css({"position":"absolute"});
                     $(".eyewrap2").eq(num).css({"top":e.clientY-75+"px"});
                     $(".eyewrap2").eq(num).css({"left":e.clientX-75+"px"});
                     
                     $("#firstmonpage").append(element);
                     
                     maxeye ++;
                     num ++;
                 }  
            });
            setInterval(function(){
                if(maxeye > 1){
                    $(".eyewrap2:last-child").remove();
                    maxeye --;
                    num --;
                }
            },3000);  
//            ---------------------------------눈알추가--------------------------
            
            var degree = 0;
            var toggle = 0;
            $("#monbtn2").on("click",function(){
                if(toggle == 0){
                    
                degree += 120;
                $("#monbtncenter").css({"transform":"rotate("+degree+ "deg)"});
                $("#upcover, #downcover,#tooboxwrapup,#tooboxwrapdown").css({"display":"block"});
                              
                $("#firstmonpage").css({"display":"none"});
                $("body").css({"background":"#ff9999"});
                
                $("#upcover, #downcover").css({"background":"#9ecaff"});
                $(".too").css({"border-left-color":"#ff9999","border-right-color":"#ff9999"});
                
                $("#tooboxwrapup").animate({"top":"0px"});
                $("#tooboxwrapdown").animate({"bottom":"0px"});
                
                setTimeout(function(){
                    $("#upcover, #downcover").css({"height":"90%"});
                    $("#tooboxwrapup").css({"top":"70%"});
                    $("#tooboxwrapdown").css({"bottom":"70%"});
                    setTimeout(function(){
                        $("#upcover, #downcover").css({"display":"none", "height":"0%"});
                        $("#tooboxwrapup").css({"display":"none","top":"-150px"});
                        $("#tooboxwrapdown").css({"display":"none","bottom":"-150px"});
                        
                        $("#secondmonpage").css({"display":"block"});
                        
                        toggle = 1;
                    },530);    
                },1500); 
                } 
                
                
            });
//            ------------------------첫번째버튼누를시----------------------------------------------
            
            var degree = 0;
            $("#monbtn1").on("click",function(){
                if(toggle == 1){
                    
                degree += 120;
                $("#monbtncenter").css({"transform":"rotate("+degree+ "deg)"});
                $("#upcover, #downcover,#tooboxwrapup,#tooboxwrapdown").css({"display":"block"});

                $("#secondmonpage").css({"display":"none"});
                $("body").css({"background":"#9ecaff"});
                
                $("#upcover, #downcover").css({"background":"#f5ffc2"});
                $(".too").css({"border-left-color":"#9ecaff","border-right-color":"#9ecaff"});
                
               $("#tooboxwrapup").animate({"top":"0px"});
                $("#tooboxwrapdown").animate({"bottom":"0px"});
                
                setTimeout(function(){
                    $("#upcover, #downcover").css({"height":"90%"});
                    $("#tooboxwrapup").css({"top":"70%"});
                    $("#tooboxwrapdown").css({"bottom":"70%"});
                    setTimeout(function(){
                        $("#upcover, #downcover").css({"display":"none", "height":"0%"});
                       $("#tooboxwrapup").css({"display":"none","top":"-150px"});
                        $("#tooboxwrapdown").css({"display":"none","bottom":"-150px"});
                        
                        $("#thirdmonpage").css({"display":"block"});
                        
                        toggle = 2;
                    },530);    
                },1500);   
                }
                
            });
//            ------------------------두번째버튼누를시----------------------------------------------
            
            var degree = 0;
            $("#monbtn3").on("click",function(){
                if(toggle==2){
                
                degree += 120;
                $("#monbtncenter").css({"transform":"rotate("+degree+ "deg)"});
                $("#upcover, #downcover,#tooboxwrapup,#tooboxwrapdown").css({"display":"block"});
                
                $("#thirdmonpage").css({"display":"none"});
                $("body").css({"background":"#f5ffc2"});
                
                $("#upcover, #downcover").css({"background":"#ff9999"});
                $(".too").css({"border-left-color":"#f5ffc2","border-right-color":"#f5ffc2"});
                
               $("#tooboxwrapup").animate({"top":"0px"});
                $("#tooboxwrapdown").animate({"bottom":"0px"});
                
                setTimeout(function(){
                    $("#upcover, #downcover").css({"height":"90%"});
                    $("#tooboxwrapup").css({"top":"70%"});
                    $("#tooboxwrapdown").css({"bottom":"70%"});
                    setTimeout(function(){
                        $("#upcover, #downcover").css({"display":"none", "height":"0%"});
                        $("#tooboxwrapup").css({"display":"none","top":"-150px"});
                        $("#tooboxwrapdown").css({"display":"none","bottom":"-150px"});
                        
                        $("#firstmonpage").css({"display":"block"});
                        
                        toggle = 0;
                    },530);    
                },1500);   
                }
            });
//            ------------------------세번째버튼누를시----------------------------------------------
        var randsize;
          var secondmonnum =0;
          $("#secondmonpage").on("mousedown",function(e){
              secondmonnum=1;
          });
          $("#secondmonpage").on("mouseup",function(e){
              secondmonnum=0;
          });
              $("#secondmonpage").on("mousemove",function(e){

                if(secondmonnum == 1){
                  var trace = document.createElement("div");
                   trace.setAttribute("class", "trace");
                   $("#secondmonpage").append(trace);

                   randsize = (Math.random()*(200-130))+130;
                  
                  $(".trace").css({"position":"absolute"});
                  $(".trace").css({"top":e.clientY-50+"px"});
                  $(".trace").css({"left":e.clientX-50+"px"});
                  $(".trace").css({"width":randsize + "px"});
                  $(".trace").css({"height":randsize + "px"});
                  $(".trace").after(trace);

                }
            });
            setInterval(function(){
              $("#secondmonpage").find(".trace").first().remove();
            },30);
            // ------------------두째페이지흔적남기기----------------------------------

            setInterval(function(){
                randsize = (Math.random()*(360-0))+0;
                $("#secondmonpage .m_eye").css({"transform":"rotate("+randsize+"deg)"})
            },3000);
            // ------------------------------------------------------------------
            
            var hairtoggle = 0;
            
            for(var i=0; i<49; i++){
                $(".hair:nth-child("+i+")").css({"left":(i*2)+"%"});
            }
            $("#thirdmonpage").on("mousedown",function(){
                hairtoggle = 1;
            });
            $("#thirdmonpage").on("mouseup",function(){
                hairtoggle = 0;
            });

            $(".hair").on("mouseenter",function(){
                if(hairtoggle == 1)
                $(this).css({"margin-top":"200%"});
            });
            
            setInterval(function(){
                $("#thirdmonpage .m_eye").css({"transform":"rotate(-50deg)"});
            },5000);
            setInterval(function(){
                $("#thirdmonpage .m_eye").css({"transform":"rotate(50deg)"});
            },6000);
            
            $("#thirdmonpage #button").on("click",function(){
                $(".hair").animate({"margin-top":"0"},0);
            });
        });