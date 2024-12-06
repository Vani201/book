// select popup box, overlay, button

var overlaypp =document.querySelector(".overlay");
var popupboxpp= document.querySelector(".popupbox");
var addpopupbtn= document.getElementById("add-popup-button");

addpopupbtn.addEventListener("click", function()
{
    overlaypp.style.display="block";
    popupboxpp.style.display="block";
})

// cancel book
var cancelbtn=document.getElementById("cancelPP");

cancelbtn.addEventListener("click", function(event)
{
    event.preventDefault();
    overlaypp.style.display="none";
    popupboxpp.style.display="none";
})

//add book
// select container, add book btn, book title, author, description

var container = document.querySelector(".container");
var addbook = document.getElementById("addbook");
var bkTitleinput = document.getElementById("book-title");
var bkAuthorinput = document.getElementById("book-author");
var bkDescinput = document.getElementById("book-desc");


addbook.addEventListener("click", function(event)
{
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=` <h2> ${bkTitleinput.value} </h2>
    <h5> ${bkTitleinput.value} </h5>
    <p> ${bkDescinput.value} </p>
    <button onclik="deletebook(event)"> Delete </button> `

    container.append(div);
    overlaypp.style.display="none";
    popupboxpp.style.display="none"
})

function deletebook(event)
{
    event.target.parentElement.remove();
}