

const createModalForm = document.getElementById("create-modal-form") 
const createModalLink = document.getElementsByClassName("nav-links")[0]
const span = document.getElementsByClassName("close")[0]  




createModalLink.onclick = function(){ 
    createModalForm.style.display = "block"
} 

span.onclick = function(){ 
    createModalForm.style.display = "none"
} 


const loginModalForm = document.getElementById("login-modal-form") 
const loginModalLink = document.getElementsByClassName("nav-links")[1] 
const loginspan = document.getElementsByClassName("close")[1] 

loginModalLink.onclick = function(){ 
    loginModalForm.style.display = "block" 


} 

loginspan.onclick = function(){ 
    loginModalForm.style.display = "none"
} 

const createModalFormSubmitButton = document.getElementById("create-modal-form-submit-button")

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });}