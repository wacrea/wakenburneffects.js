$(function(){
        
        var effectID = Math.floor((Math.random()*3)+1);
        $(".wa-kenburn-block img").css("width",$(".wa-kenburn-block").width());
        $(".wa-kenburn-block img").css("height",$(".wa-kenburn-block").height());
        
		function generateKenburnEffect()
		{
			var IMGelement = $(".wa-kenburn-block img");
            var PARENTelement = $(".wa-kenburn-block");
            
			// Re-init css
			$(IMGelement).animate({
                                width: $(PARENTelement).width(),
                                height: $(PARENTelement).height(),
                                marginLeft: "0px",
                                marginRight: "0px",
                                marginTop: "0px",
                                marginBottom: "0px"
                        }, 3000, 'swing');
            
            switch (effectID)
            {
            case 1:
                    // Animation
                    $(IMGelement).animate({
                        width: "130%",
                        height: "130%"
                    }, 5000, 'swing');
                    break;
            case 2:
                    $(IMGelement).animate({
                        marginLeft: "-30%",
                        marginTop: "-10%",
                        width: "130%",
                        height: "130%"
                    }, 5000, 'swing');
                    break;
            case 3:
                    $(IMGelement).animate({
                        marginLeft: "-10%",
                        marginBottom: "-30%",
                        width: "130%",
                        height: "130%"
                    }, 5000, 'swing');
                    break;
            }
            
            effectID++;
                    
            if(effectID == 3){
                effectID = 1;
            }
		}

		//generateKenburnEffect();	

		// Run kenburn effect every 2seconds
		setInterval(generateKenburnEffect,8000);
	});