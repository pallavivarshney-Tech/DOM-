console.log("working");

//question 1
// Write the code to access element which is having id as "text"

document.getElementById('text').innerText = "access the element";  

// question 2
// Write the code to access element which is having tag as "h1"
document.getElementsByTagName("h1")[0].innerText = "txt is changed";
//question 3
// Write the code to access element which is having class as "box"

document.getElementsByClassName("box0")[0].innerText = "text is changed with class";


// question4
// "<h1>Hello </h1>

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
document.getElementsByTagName("h1")[1].innerText = "Hello World";

// Question 5
// Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function btn(){
   
    document.getElementById("btn").style.backgroundColor="pink"
}
function change(){
    document.getElementsByClassName("main")[0].style.flexDirection="column";
}

// question 6
// What’s the difference between window vs document?
// A global variable, window , representing the window in which the script is running, is exposed to JavaScript code. 
// The Window interface is home to a variety of functions, namespaces, objects, and constructors which are not necessarily directly associated with the concept of a user interface window.
// When JavaScript is executed inside the browser, the window object is the JavaScript Global object.
//  The document object is a property of the window object. 
//  The window object represents the browser window. 
//  The document object represents the HTML document loaded in that window.

// Question 7
// "<h1>Hello </h1>

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

heading[1].style.color = "red";
heading[1].id = "heading";
console.log(heading[1].outerHTML);

    // Question 8
    // Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"


    function replace()
{
    heading[1].innerText = "Welcome to Elevation academy";
}

//Question 9
// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

setInterval(timeShow, 1000);

function timeShow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let sec = now.getSeconds();

  document.querySelector(
    "#time"
  ).innerText = `TIME = ${hour} : ${minutes} : ${sec}`;
}

// Question 10
// Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

document.getElementById("select").addEventListener("click", yearNow);
function yearNow() {
  let selected = document.querySelector("#select").value;
  document.querySelector(
    ".yearNow"
  ).innerText = `Year Session :  ${selected}`;
}

    // Question 11
// "Create a form having name ,email, phone no. , birth year 
// Add validations - phone no. should start with 91 , it should be 10 digits
// email should be domain prep bytes.com
// birth year should be > 95"


