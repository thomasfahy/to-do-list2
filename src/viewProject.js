import { projects, createNewProject } from "./createNewProject";

let currentViewedProject = "default";

function setCurrentProject (currentProject) {
    const taskHeader = document.querySelector("#task-container");
    taskHeader.innerHTML = "";
    let toDoListHeader = document.createElement("div");
    toDoListHeader.textContent = currentProject;
    toDoListHeader.id = "to-do-list-header";
    taskHeader.appendChild(toDoListHeader);   
    for (let i = 0; i < projects.length; i++){
        if (currentProject === projects[i].name){
            console.log("View Success")
            currentViewedProject = currentProject;
            const project = projects.find(p => p.name === currentProject);
            console.log(project);
            project.todo.forEach(element => {
                let newToDo = document.createElement("div");
                newToDo.className = "to-do-task";
                
                let todoTitle = document.createElement("div");
                todoTitle.textContent = element.title;
                todoTitle.className = "task-title"
                let todoDescription = document.createElement("div");
                todoDescription.textContent = element.description;
                todoDescription.className = "task-description";

                let todoDueDate = document.createElement("div");
                todoDueDate.textContent = element.dueDate;
                todoDueDate.className = "task-due-date";

                let todoPriority = document.createElement("div");
                todoPriority.textContent = element.priority;
                todoPriority.className = "task-priority";

                let todoIsComplete = element.isComplete;
                
                newToDo.appendChild(todoTitle);
                newToDo.appendChild(todoDescription);
                newToDo.appendChild(todoDueDate);
                newToDo.appendChild(todoPriority);
                taskHeader.appendChild(newToDo);
            });
            let todoDialog = document.getElementById("todoDialog");
            
            const newTodoButton = document.createElement("div");
            newTodoButton.id = "create-todo-button";
            newTodoButton.addEventListener("click", () => {
                console.log('add new');
                todoDialog.showModal();
              });

            const newTodoText = document.createElement("div");
            newTodoText.id = "create-todo-text";
            newTodoText.textContent = "New To Do";
        
            const newTodoImage = document.createElement("img");
            newTodoImage.id = "create-todo-image";
            newTodoImage.src = "../assets/plus-box.svg";
            newTodoButton.appendChild(newTodoText);
            newTodoButton.appendChild(newTodoImage);
        
            taskHeader.appendChild(newTodoButton);
        }
    }

}

export { setCurrentProject, currentViewedProject}