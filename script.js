var btns = document.getElementsByTagName("button");
var tabBar = document.getElementById("tabBar");
let a = "Programming";

document.getElementById("ProgramTab").style.backgroundColor = "rgb(0, 0, 0, 0.8)";
document.getElementById("ProgramTab").style.color = "rgb(255, 255, 255, 0.9)";
document.getElementById(a).style.display = "block";
let showDiv=(str)=>{
    // console.log("hiiii");
    document.getElementById(str).style.display = "block";
    if (a != str) {
        document.getElementById(a).style.display = "none";
    }
    
    a = str;
}


for (var i = 0; i< btns.length; i++){
    if (btns[i].style.backgroundColor != null) {
        btns[i].onclick = function(){
            var buttonVal = this.innerHTML;
            for (var i = 0; i< btns.length; i++) {
                if (tabBar.contains(btns[i])) {
                    btns[i].style.backgroundColor = "";
                    btns[i].style.color = "black";
                    showDiv(buttonVal);
                }
            }
            this.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
            this.style.color = "rgb(255, 255, 255, 0.9)";
        }
    }
    
}


