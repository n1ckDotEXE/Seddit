const mainBoard = document.getElementsByClassName("main-board")[0]
  const myAddButton = document.getElementsByClassName("my-add-button")[0] 

  myAddButton.addEventListener("click", () => {  
    const newInputCard = document.createElement("div")
    newInputCard.className = ("shadow post-preview scroll") 

    const inputTitle = document.createElement("div")
     
    inputTitle.innerHTML = "Topic Title:" 


    const newTitle = document.createElement("input") 
    newTitle.className = "input_bar" 
    newTitle.setAttribute("type","text")
    newTitle.setAttribute("name","input_bar")

    const descriptionTitle = document.createElement("div") 
    descriptionTitle.innerHTML = "Add Description:" 

    
    const newDescription = document.createElement("input")  
    newDescription.className = "input_bar2 scroll"
    newDescription.setAttribute("type","text")   
    newDescription.setAttribute("name","input_bar2") 
    // newTitle.style.backgroundColor= "red"

    const submitButton = document.createElement("button") 
    submitButton.className = "submitNew"
    submitButton.type = "submit" 
   submitButton.innerHTML = "POST" 

  const form = document.createElement("form")
  form.setAttribute("method","POST")  
  form.setAttribute("action","posts/create")
  // form.action="/posts/create"

    form.appendChild(inputTitle)
    form.appendChild(newTitle)
    form.appendChild(descriptionTitle)
    form.appendChild(newDescription) 
    form.appendChild(submitButton)   
    newInputCard.appendChild(form)
    newInputCard.style.height="auto" 
   

    
    mainBoard.appendChild(newInputCard)

  }) 
  const leftlikeButtons = document.getElementsByClassName("left-like")
  console.log(leftlikeButtons.length)
  
  var i = 0; 
  
function calculate(){ 
  
  leftlikeButtons.map(() => { 
   for (y=0; y<leftlikeButtons.length; y++){ 
    let button = document.getElementsByClassName('left-like')[y]
    console.log(button)
    
    button.innerHTML = `${i}`;
     i++;
  }
   } )} 

   const posty = document.getElementsByClassName("post-preview") 

   Array.prototype.forEach.call(posty ,(post) => {
    post.addEventListener("click",(e)=> { 
      JSON.stringify(post) 
      mainBoard.innerHTML =""
    mainBoard.appendChild(post)
    post.style.height = "600px" 
    post.style.backgroundColor = "white" 
    console.log(post)  
    mainBoard.style.overflow ="scroll"

    const addCommentButton = document.createElement("button")
    addCommentButton.style.width = "80px"
    addCommentButton.style.height = "40px" 
    addCommentButton.style.borderRadius="3px"
    addCommentButton.innerHTML = "Comment" 
    addCommentButton.style.backgroundColor = "silver"
    addCommentButton.setAttribute("type","submit") 
    addCommentButton.setAttribute("name","addCommentButton")
  addCommentButton.addEventListener("click", (e)=>{ 
    e.preventDefault()
    axios.post("/comments", {comment_text: this.commentInput.value}).then(res => { 
     
      const commentdiv = document.createElement("div") 
      commentdiv.style.width ="150px" 
      commentdiv.style.height = "150px"
      commentdiv.style.overflow = "scroll"
      commentdiv.style.marginTop="20px"
      commentdiv.style.backgroundColor="white"
      // JSON.stringify(res) 
      console.log(res)
      commentdiv.innerHTML= res
      mainBoard.appendChild(commentdiv)
    } 
      )
  })






    const form = document.createElement("form")

    const commentArea = document.createElement("div") ; 
    commentArea.style.width = "60vw" 
    commentArea.style.height = "300px"
    commentArea.style.backgroundColor = "white" 
    form.style.display="flex" 
    form.style.flexDirection="column" 
    form.style.alignItems="center" 
    form.style.justifyContent="center"
    form.style.justifyItems="space-around" 
    form.style.height="277px"
    commentArea.style.marginTop="20px"

    const commentInput = document.createElement("input") 
    commentInput.style.width = "40vw" 
    commentInput.style.height = "150px" 
    commentInput.style.overflow="scroll"
    commentInput.setAttribute("name","commentInput")

    form.appendChild(commentInput) 
    form.appendChild(addCommentButton)

    mainBoard.appendChild(commentArea)
    commentArea.appendChild(form) 
  



  } )})
