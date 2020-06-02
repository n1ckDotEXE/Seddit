

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

  const mainBoard = document.getElementsByClassName("main-board")[0]
  const myAddButton = document.getElementsByClassName("my-add-button")[0] 

  myAddButton.addEventListener("click", () => {  
    const newInputCard = document.createElement("div")
    newInputCard.className = ("shadow post-preview") 

    const inputTitle = document.createElement("div")
     
    inputTitle.innerHTML = "Topic Title:" 


    const newTitle = document.createElement("input") 
    newTitle.className = ("input_bar")  
    newTitle.style.backgroundColor = "blue"

    const descriptionTitle = document.createElement("div") 
    descriptionTitle.innerHTML = "Add Description:" 

    
    const newDescription = document.createElement("input")  
    newDescription.className = ("input_bar2")  
    newTitle.style.backgroundColor= "red"


    newInputCard.appendChild(inputTitle)
    newInputCard.appendChild(newTitle)
    newInputCard.appendChild(descriptionTitle)
    newInputCard.appendChild(newDescription)   

    ; 
    mainBoard.appendChild(newInputCard)

  }) 

  var posty = document.getElementsByClassName("post-preview");
  let expandButton = document.getElementsByClassName("expand")


    
      expandButton.addEventListener("click", function() {
          mainBoard.innerHTML =""; 
          const card = document.createElement(div)
          card.style.backgroundColor = "white"; 
          card.style.width = "70vw" 
          card.stlye.height = 
          "80vh"
          posty[i].innerHTML= posty[i].data  
          mainBoard.appendChild(card)

      });

