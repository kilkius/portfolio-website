let start = new Date().getTime();

function getRandomcolor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function makeShape(){
    if (Math.random() < 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0%";
    }
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = Math.random() * 200 + 100;
    document.getElementById("shape").style.backgroundColor = getRandomcolor();
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function delay(){
    setTimeout(makeShape,Math.random()+2000);
}


delay();

document.getElementById("shape").onclick = function(){
    let end = new Date().getTime();
    let time_taken = (end - start)/1000;
    document.getElementById("shape").style.display = "none";
    document.getElementById("timer").innerHTML = time_taken +"s";
    delay();
}

