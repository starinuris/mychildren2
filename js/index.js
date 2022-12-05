var btt = document.getElementById( "toTop" ),
body = document.body,
docElem = document.documentElement,
offset = 100,
scrollPos, docHeight;
isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox')>-1;

// Calculate the document height
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
offset = docHeight / 4;
}

// Add scroll event listener
window.addEventListener("scroll", function(event) {
scrollPos = body.scrollTop || docElem.scrollTop;

btt.className = (scrollPos > offset) ? "visible" : "";
});