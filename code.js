let interval;
let pic = document.getElementById("picture");

function start() {
    document.getElementById("startButton").disabled = true;
    //reset the interval
    clearInterval(interval);

    //all this is similar to the example we went through
    interval = setInterval (() => {
        let left = pic.offsetLeft;
        let top = pic.offsetTop;
        if (pic.offsetLeft > 1500) {left = 0; top +=10;
        }else {left += 10 }
            console.log(`${top} ${left}`)
    //set the new variables to the image        
  pic.style.left = `${left}px`;
  pic.style.top = `${top}px`;
}, 20);   
}




function stop() {
    document.getElementById("startButton").disabled = false;
    clearInterval(interval);
}