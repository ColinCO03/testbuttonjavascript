let element = document.getElementById("myid");
element.textContent = "Test";
element.style.color = "red";

element.innerHTML = "<p>New paragraph</p>"

let heading = document.firstElementChild.lastElementChild.firstElementChild

heading.innerHTML = "New heading"

let myButton = document.getElementById("myButton")

myButton.addEventListener("click", function() {
    console.log("Button was clicked");
    document.body.style.backgroundColor = "red"
});

// const button = document.getElementById('myButton');

// button.addEventListener('click', function() {
//     alert('Button was clicked!');
//   })

