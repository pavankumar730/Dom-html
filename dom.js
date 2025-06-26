document.title="Dom in javaScript";

document.getElementById("header").innerHTML="Hello World!";

document.body.style.backgroundColor="lightblue";

document.getElementById("header").style.color="red";

document.getElementById("h").style.color="red"

document.getElementsByClassName("ds")[0].style.color="blue";
document.getElementsByClassName("ds")[1].style.color="grey";
document.getElementsByClassName("ds")[2].style.color="orange";
document.getElementsByClassName("ds")[3].style.color="green";
document.getElementsByClassName("ds")[4].style.color="yellow";


document.getElementsByTagName("h1")[0].style.color="red";


// style element by class name 

let pavan=document.getElementsByClassName("ds");
pavan[0].style.color="red";
pavan[1].style.color="red";
pavan[2].style.color="red";
pavan[3].style.color="red";


// style elements by queryselector 
document.querySelector(".dsa").style.color="yellow";

// style on query selectorall 
 let depts=document.querySelectorAll(".daa")  
 depts[0].style.color="violet";
 depts[1].style.color="green";
 depts[2].style.color="red";
 
// function to toggle background color
//function changeBackground(){
    //document.body.style.backgroundColor="yellow";
   // alert("Background color changed in to yellow")
//}


   // alert("Background color changed text to cmrcet,cmec")
//}


/* function changeBackground() {
    if (document.body.style.backgroundColor==="red"){
         document.body.style.backgroundColor="lightgreen";
    } else{
         document.body.style.backgroundColor="red";
    }
}*/

// change of background color from red to blue using ternary  operator 

function back() {
        document.body.style.backgroundColor=
        document.body.style.backgroundColor ==="lightblue" ? "red" : "yellow";
        }
document.getElementById("clg").style.backgroundColor="coral";

document.getElementById("clg").style.Color="white";
document.getElementById("clg").style.fontsize="60px";
document.getElementById("clg").style.textAlignr="center";
document.getElementById("clg").style.backgroundColor="coral";
function changetext(){
    document.getElementById("clg").innerHTML="CMRCET,CMREC";
}