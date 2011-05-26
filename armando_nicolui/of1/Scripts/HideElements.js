<!-- This script and many more are available free online at -->
<!-- The JavaScript Source!! http://javascript.internet.com -->
<!-- Original:  Rick Johnson (frj11@yshoo.com) -->
<!-- Web Site:  http://208.55.209.164/myPage -->

// quick browser tests
var ns4 = (document.layers) ? true : false;
var ie4 = (document.all && !document.getElementById) ? true : false;
var ie5 = (document.all && document.getElementById) ? true : false;
var ns6 = (!document.all && document.getElementById) ? true : false;
var xobj;
var refer=true;

function testBrowser(obj) {
  // choose the correct object
  if (ie4 || ie5) xobj = document.all[obj].style;
  if (ns4) xobj=document.layers[obj];
  if (ns6) xobj=document.getElementById(obj).style;
}  

function showDivision(sw,obj) {
  testBrowser(obj);  

  // show/hide the divisions
  if (sw)
    xobj.visibility = 'visible';
  else
    xobj.visibility = 'hidden';
}

function toggleShow(obj) {
  testBrowser(obj);  
  
  // show/hide the divisions
  if (refer) {
    xobj.visibility = 'visible';
    refer=false;
  }
  else {
    xobj.visibility = 'hidden';
    refer=true;
  }
}
