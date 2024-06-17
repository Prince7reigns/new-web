
const button = document.querySelector("#add-task");
const node = document.querySelector("ul")

function saveData(){
    localStorage.setItem("data",node.innerHTML)
}


function showData(){
    node.innerHTML = localStorage.getItem("data")
}

showData()

function addTask(tesk){
    if(tesk.value===''){
        alert("please enter your task")
    }else{
        const teskelment = document.createElement("li")
        teskelment.textContent =tesk.value
        node.appendChild(teskelment)
        const span = document.createElement("span")
        span.textContent = "\u00d7"
        teskelment.appendChild(span)
        
    }

    tesk.value = ""
        saveData()
}

node.addEventListener("click" , (e) =>{
   if(e.target.tagName==="LI"){
     e.target.classList.toggle("checked")   //if there is no class in li than add it if present in than remove it
   }else{
    e.target.parentElement.remove()   
   }
})

button.addEventListener("click" , (e) => {
    e.preventDefault();
    const task = document.querySelector("#task")
    addTask(task);
})










// function addTask(task){
//       // Create a new paragraph element to wrap the buttons
//       var elementWrapper = document.createElement('p');
//       elementWrapper.className = 'element-wrapper';

//       // Create the first button with an image
//       var firstButton = document.createElement('button');
//       var img = document.createElement('img');
//       img.src = 'unchecked.png'; // Placeholder image URL
//       firstButton.appendChild(img);

//       // Create the second button with the "x" text
//       var secondButton = document.createElement('button');
//       secondButton.textContent = 'x';
//       secondButton.addEventListener('click', function() {
//           elementWrapper.remove();
//       });

//       // Append the buttons to the paragraph element
//       elementWrapper.appendChild(firstButton);
//       elementWrapper.appendChild(secondButton);

//       // Append the paragraph element to the container
//       node.appendChild(elementWrapper);
    
// }
