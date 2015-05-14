$(function(){


	$('#done-button').click(function(){
		$('#introduction').hide();
	});

	var xPos = 0;
	var scrollInterval;
	

	$("#scrollRight, #scrollLeft").mouseenter(function(){
		

		var id = $(this).attr('id');

		scrollInterval = setInterval(function(){
			
			if(id == "scrollLeft"){
				xPos -= 2;
			} else {
				xPos += 2;
			}

			console.log(xPos);
			
			if(xPos < 0){
				xPos = 0;
			}

			if(xPos > 2700){
				xPos = 2700;
			}

			
				$("#container").css("transform", "translate("+(-xPos)+"px, 0px)");
				console.log(xPos + "px");
			

		}, 10);
		
	});

	$("#scrollRight, #scrollLeft").mouseleave(function(){

		clearInterval(scrollInterval);
		//$("container").css("transform","translate(0px,0px)");
	});
	

});

$(function() {
 var el, newPoint, newPlace, offset;
 
 // Select all range inputs, watch for change

 $("input[type='range']").change(function() {
 	console.log("slider moved");
 
   // Cache this for efficiency
   el = $(this);  
   
   // Measure width of range input
   width = el.width();
   
   // Figure out placement percentage between left and right of input
   newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
  
   
   // Move bubble
   el
     .next("output")
     .css({
       left: newPlace,
       marginLeft: offset + "%"
     })
     .text(el.val());
 })
 // Fake a change to position bubble at page load
 .trigger('change');
});

