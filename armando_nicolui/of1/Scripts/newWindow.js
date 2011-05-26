function showWindow (url, windowName, windowprops) {

// Determine the popup window properties
// options include:  top, left, toolbar, scrollbars,
// menubar, location, status, width, height and resizable

var defaultWinProps = "resizable=yes,scrollbars=yes,toolbar=yes,location=yes"

if ( windowprops == "" )
   windowprops = defaultWinProps + ",top=" + screen.height/5 + ",left=" + screen.width/5;
else
   windowprops = defaultWinProps + "," + windowprops;


window.open(url, windowName, windowprops);

}
