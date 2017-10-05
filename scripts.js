
document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM content has been loaded...");
    document.body.appendChild(btn);
})

var btn = document.createElement("BUTTON");

var btext = document.createTextNode("Click Me");
var count = 0;
btn.appendChild(btext);
//make random colors
function randomColor() {
    var redColor = Math.floor(Math.random() * 255);
    var greenColor = Math.floor(Math.random() * 255);
    var blueColor = Math.floor(Math.random() * 255);
    var colorResult = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
    return colorResult;
}

//adds the box when button is clicked
btn.addEventListener('click', function () {
    var div = document.createElement("div");
    div.style.backgroundColor = "black";
    div.style.width = "15em";
    div.style.height = "15em";
    div.style.margin = "1.5em";
    div.className = "square"; //assign class
    div.style.color = "green";
    div.style.textAlign = "center";
    div.style.lineHeight = "15em";
    count = (count++);
    div.id = count;

    console.log(count++);
    //puts div on page
    document.body.appendChild(div);

    //end of making box
    //make it show id on hover
    div.addEventListener('mouseover', function () {
        div.innerText = div.id;
    })
//remove id when mouse leaves div
    div.addEventListener('mouseout', function () {
        div.innerText = "";
    })
    div.addEventListener('click', function () {
        div.style.backgroundColor = randomColor();
    });
    //set up double click 
    div.addEventListener("dblclick", function(){
        if(div.id % 2 === 0 && div.nextSibling !== null) {
            div.nextSibling.remove();

        } else if(div.id %2 !== 0 && div.previousSibling !== null && div.previousSibling.tagName !== "BUTTON") {
div.previousSibling.remove();
        } else {
            alert ("there is no element to remove");

        }
        
    })
})





