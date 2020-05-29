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