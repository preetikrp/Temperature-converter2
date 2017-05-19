console.log("Hello");

// Function to convert C to F and visce versa
function convert() {
	// Check if C is clicked
    if (document.getElementById("C").checked) {
        var temp = document.getElementById("tmp1").value;
        var scale = "C"; //document.getElementById("")
        var x = temp * 9 / 5 + 32;
        //select the empty div and added the value of x  to display in  browser.
        document.getElementById("contemp").innerHTML = x;
        changeColor(temp, scale);
        console.log(x);

    //else check if F is clicked
    } else if (document.getElementById("F").checked) {
        var temp = document.getElementById("tmp1").value
        var scale = "F";
        var y = temp - 32 / 1.8;
        document.getElementById("contemp").innerHTML = y;
        changeColor(temp, scale);
        console.log(y);
    }
}

	//Added eventlisteners on Submit and Clear buttons
	var submitbtn = document.getElementById("btn1");
	submitbtn.addEventListener("click", convert);
	var clearbtn = document.getElementById("btn2");
	clearbtn.addEventListener("click", clearform);

// Function to manipulte CSS and assign color based of input Temperature
function changeColor(temp, scale) {
    var convertedtem = document.getElementById("contemp");
    console.log(convertedtem);
    convertedtem.classList.remove("red", "blue", "green");
    if (scale === "F") {
        if (temp > 90) {
            convertedtem.style.color = "red";
        } else if (temp < 32) {
            convertedtem.style.color = "blue";
        } else {

            convertedtem.style.color = "green";
        }
    } else if (scale === "C") {
        if (temp > 90) {
            convertedtem.style.color = "red";
        } else if (temp < 0) {
            convertedtem.style.color = "blue";
        } else {
            convertedtem.style.color = "green";
        }
    }
}

//Function to resest input and output div.
function clearform() {
    document.getElementById("tmp1").value = "";
    document.getElementById("contemp").innerHTML = "";
}