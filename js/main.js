// WRAP FIRST WORD OF <h> ELEMENT IN SPAN
function firstWord(){
	// get heading elements
   var $headings = document.querySelectorAll(".title_block h1, .title_block h2, .section_company_adv h2");
	
	// run through each heading tag and insert spans
	for (var i = 0, len = $headings.length; i < len; i++) {
		console.log($headings[i].children.length)
		// if has child or has class X
		if ($headings[i].children.length < 1 && !$headings[i].classList.contains("blue")) {
			// set new text variable
			var niceText = $headings[i].textContent;	
			
			// set opening / closing spans
			var openSpan = '<span>', 
				 closeSpan = '</span>';

			// make the sentence into an array
			niceText = niceText.split(' ');

			// add open span to the beginning of the array
			niceText.unshift( openSpan );

			// add closing span as the 3rd value in the array
			niceText.splice( 2, 0, closeSpan );					

			// turn it back into a string 
			niceText = niceText.join(' ');				

			// append the new HTML to the header
			$headings[i].innerHTML = niceText;
		}
	}
}

// check document is ready
var domReady = function(callback) {
	document.readyState === "interactive" || document.readyState === "complete" ? callback() : document.addEventListener("DOMContentLoaded", callback);
};

// on document ready 
domReady(function() {
	// run firstWord function	
	firstWord()
});



function initialize() 
 {
     var element = document.getElementById('map-canvas');
     var options = {
         zoom: 15,
         center: {lat: 46.505702, lng: 30.630772},
      };

     var myMap = new google.maps.Map(element, options);


     var makers = [
         {
         coordinates: {lat: 46.505702, lng: 30.630772},
         image: '../img/map-marker.png',
         info:'Prestige Group'
         },

        /* {
         coordinates: {lat: 46.462459, lng: 30.729487},
         image: 'http://afrodita-dance.in.ua/wp-content/uploads/2019/12/mark.png',
         info:'Афродита Приморский район'
         },

         {
         coordinates: {lat: 46.450732, lng: 30.719674},
         image: 'http://afrodita-dance.in.ua/wp-content/uploads/2019/12/mark.png',
         info:'Афродита Малиновский район'
         },*/
    
        
	 ];
	
	
	var mapStyle = [{ "stylers": [{ "saturation": -60 }] }];
	myMap.setOptions({ styles: mapStyle });
	
	

     for(var i=0; i< makers.length; i++)
     {
         addMarker(makers[i]);
     }

     function addMarker(properties){
        var marker = new google.maps.Marker({
            position:properties.coordinates,
            map:myMap,
        });

        if(properties.image)
        {
            marker.setIcon(properties.image);
        } 

        if(properties.info)
        {
            var InfoWindow = new google.maps.InfoWindow({
                content: properties.info
            });

            marker.addListener('click', function(){
                InfoWindow.open(myMap,marker);
            })
        } 
     }

 }
	
google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize);	
