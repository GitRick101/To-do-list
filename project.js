/* create variables
   with the cammel cassing
*/
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("btn-el")
const ulEl = document.getElementById("ul-el")
let myTasks = []
const tasksFromLocalStorage = JSON.parse(localStorage.getItem("myTasks"))
const deleteBtn = document.getElementById("delete-btn")
const deleteOne = document.getElementById("delete-one")

/* create the innerHtml part 
   for the items to appear,
   also create the buttons
   using eventListeners
*/


if (tasksFromLocalStorage) {
    myTasks = tasksFromLocalStorage
    render(myTasks)
}








inputBtn.addEventListener("click", function(){
    myTasks.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myTasks", JSON.stringify(myTasks))
    render(myTasks)
    
})

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myTasks = []
    render(myTasks)
})

deleteOne.addEventListener("click", function(){
    localStorage.removeItem(myTasks)
    myTasks.pop()
    render(myTasks)

})

function render(tasks){
    let listItems = ""
    const color = "black"
    const size = "20px"
    const cursor = "pointer"
    const margintop = "5px"
    for (let i = 0; i < tasks.length; i++) {
        listItems += `
            <li class="dad" data-index="hey">
            ${tasks[i]}
                <span style="color:${color}; font-size:${size}; cursor:${cursor}; margin-top:${margintop}" class="material-symbols-outlined close-btn">
                    close
                </span>
            </li>
        `
    }
    ulEl.innerHTML = listItems
    


const closeButtons = document.querySelectorAll('.close-btn');
let splices = myTasks.length - 1





closeButtons.forEach((button, index) => {
    button.addEventListener("click", function() {
        const liElem = button.getAttribute('data-index');
        if(index === myTasks.length - 1){
            myTasks.pop()
            localStorage.setItem("myTasks", JSON.stringify(myTasks))
            render(myTasks)
        } else{
             
             myTasks.splice(index, 1)
        
        
             localStorage.setItem('myTasks', JSON.stringify(myTasks));

        
             render(myTasks);
        }
       

        

    });
    
});
}

