function addTask() {

    let inputData = document.getElementById("enterData");
    let inputDataValue = inputData.value.trim()

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");

    liTag.innerHTML += `
    ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"

  
    allTasksContainer.appendChild(liTag)
    inputData.value=" "

    let editBtn = liTag.querySelector(".edit")
    editBtn.style.backgroundColor = "blue"

    let dlteBtn = liTag.querySelector(".delete")
    dlteBtn.style.backgroundColor = "red"

    editBtn.addEventListener("click", function(){
        editTask(liTag)
        // console.log("function is edited");
    })

    dlteBtn.addEventListener("click",function(){
        deleteTask(liTag)
        // console.log("function is deleted");

    })
}
function editTask(data){
    let a= prompt("Enter the data",data.firstChild.textContent)
    if(a !==null && a.trim() !==""){
        data.firstChild.textContent=a   
    }
}

function deleteTask(liTag){
    let a= confirm("Are you sure You want to delete")
        if(a){
            liTag.remove()
        }
    
}