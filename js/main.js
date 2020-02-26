// WRAP FIRST WORD OF <h> ELEMENT IN SPAN
function firstWord(){
	// get heading elements
   var $headings = document.querySelectorAll(".title_block h1, .title_block h2");
	
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