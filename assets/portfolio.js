var adjTab =["designer.","life long learner.", "creative.","problem solver.", "dreamer."];
var i = 0;
window.onload =function words()
{

	document.getElementById("adj").innerHTML= adjTab[i];
	setTimeout ("Recursive()", 1350);
};

function Recursive()
{
  i++
	if( i == 5 )
		i = 0;
  	document.getElementById("adj").innerHTML= adjTab[i];
  setTimeout ("Recursive()", 1350);
}
window.onload =function email()
{
var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'mdlc0502' + '@' + 'gmail' + '.' + 'com');
};
