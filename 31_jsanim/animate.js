var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

var ctx = c.getContext("2d");

ctx.fillStyle = "blue";

var requestID; // init global var for use with animation frames

var clear = () => { // why does it need parameter e ????
    ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;

var drawDot = () => {
    clear();
    window.requestAnimationFrame();
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    
    // wipe the canvas, repaint circle, increment radius, if circle hit canvas border, decrement radius
    // window.cancelAnimationFrame()
    // window.requestAnimationFrame()
}

// //var stopIt = function() {
// var stopIt = () => {
//     console.log("stopIt invoked...")
//     console(requestID);

//     if (growing == true) {
//         window.cancelAnimationFrame();
//     }
// }

dotButton.addEventListener("click", drawDot);
// stopButton.addEventListener("click", stopIt);