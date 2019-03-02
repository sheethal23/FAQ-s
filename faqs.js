"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each h2 element
var toggle = function() {
	var a = this;
    var h2 = a.parentNode;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag

 /*  if (h2.hasAttribute("class")) { 
        h2.removeAttribute("class");	
    } else { 
        h2.setAttribute("class", "minus"); 
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
        div.removeAttribute("class");
    } else { 
        div.setAttribute("class", "open"); 
    } */	
 
	if(h2.className == "minus"){
		h2.className = "";
	}
	else { 
        h2.className = "minus"; 
    } 
	if(div.className == "open"){
		div.className = "";
	}
	else {
		div.className = "open";
	}
	
};

window.onload = function() {
    // get the h2 tags
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("a");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].focus();       
};
