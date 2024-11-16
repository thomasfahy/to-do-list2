import "./styles.css";
import { projects, createNewProject } from "./createNewProject";
import { displayProjects } from "./displayProjects";
import { currentViewedProject } from "./viewProject";
import { setCurrentProject } from "./viewProject";


createNewProject("General", [
  { 
    title: "To-Do-1",
    description: "Define project scope", 
    isComplete: false, 
    dueDate: "2023-11-15" , 
    priority: "Normal"
    },
    { 
        title: "To-Do-2",
        description: "Define project scope", 
        isComplete: false, 
        dueDate: "2023-11-15" , 
        priority: "Normal"
        },
        { 
            title: "Baby booey",
            description: "Define project scope", 
            isComplete: false, 
            dueDate: "2023-11-15" , 
            priority: "Normal"
            },
]);
createNewProject("BABA Booey", [
    { 
      title: "To-Do-1",
      description: "Define project scope", 
      isComplete: false, 
      dueDate: "2023-11-15" , 
      priority: "Normal"
      }
  ]);


const projectCloseButton = document.getElementById("prj-button-close");
projectCloseButton.addEventListener('click', () => {
  projectDialog.close();
})

let projectForm = projectDialog.querySelector('form');
projectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(projectForm);
  let newProjectTitle = formData.get('prj-title'); 
  let projectExists = false;
  projects.forEach(project => {
    if (project.name === newProjectTitle) {
      projectExists = true;
    }
  });
  if (projectExists === true){
    alert("Project with this name already exists");
    return;
  }
  createNewProject(newProjectTitle);
  let projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = ""; 
  displayProjects();
  projectDialog.close();
});



const todoDialog = document.getElementById('todoDialog');
const closeButton = document.getElementById('close');
closeButton.addEventListener('click', () => {todoDialog.close();});


const form = document.getElementById('todo-form');
form.addEventListener('submit', (event) => {
event.preventDefault();
todoDialog.close();
let formData = new FormData(form);
const formTitle = formData.get('title');
const formDescription = formData.get('desc');
const formDueDate = formData.get('due-date');
const formPriority = formData.get('options');
const newToDo = {
  title: formTitle,
  description: formDescription,
  isComplete: false,
  dueDate: formDueDate,
  priority: formPriority
};
console.log(projects);
for (let i = 0; i < projects.length; i++) {
  if (currentViewedProject === projects[i].name) {
    projects[i].todo.push(newToDo);
    setCurrentProject(currentViewedProject);
    break;
  }
}
});


displayProjects();