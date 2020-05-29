const createModalForm = document.getElementById("create-modal-form") 
const createModalLink = document.getElementsByClassName("nav-links")[0]
const span = document.getElementsByClassName("close")[0] 

createModalLink.onclick = function(){ 
    createModalForm.style.display = "block"
} 

span.onclick = function(){ 
    createModalForm.style.display = "none"
}