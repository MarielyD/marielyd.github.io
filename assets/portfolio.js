var adjTab =["designer.","life long learner.", "creative.","problem solver.", "dreamer."];
var i = 0;
window.onload =function words()
{

	document.getElementById("adj").innerHTML= adjTab[i];
	setTimeout ("Recursive()", 1500);
};

function Recursive()
{
  i++
	if( i == 5 )
		i = 0;
  	document.getElementById("adj").innerHTML= adjTab[i];
  setTimeout ("Recursive()", 1500);
}

var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'mdlc0502' + '@' + 'gmail' + '.' + 'com');
