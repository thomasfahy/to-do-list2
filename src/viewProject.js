import { projects, createNewProject } from "./createNewProject";

let currentViewedProject = "default";

function setCurrentProject (currentProject) {
    const taskHeader = document.querySelector("#task-container");
    let toDoListHeader = document.createElement("div");
    toDoListHeader.textContent = "To Do List";
    toDoListHeader.id = "to-do-list-header";
    taskHeader.innerHTML = "";
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
                todoTitle.textContent = currentViewedProject;
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

                console.log(todoTitle, todoDescription, todoDueDate, todoIsComplete);

            });

        }
    }
}

export { setCurrentProject, currentViewedProject}