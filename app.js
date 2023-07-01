function switchOff(){
   
    document.getElementById("bulbImage").src ="./images/bulb-go-off-img.png";
    document.getElementById("catImage").src = "./images/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("offSwitch").style.backgroundColor = "grey";
    document.getElementById("onSwitch").style.backgroundColor = "green";
    

    

}

function switchOn(){
    document.getElementById("bulbImage").src = "./images/bulb-go-on-img (1).png";
    document.getElementById("catImage").src = "./images/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "Red";
    document.getElementById("onSwitch").style.backgroundColor = "grey";
    
   
    
}