import "./styles.css";
import { projects, createNewProject } from "./createNewProject";
import { displayProjects } from "./displayProjects";
import { currentViewedProject } from "./viewProject";
import { setCurrentProject } from "./viewProject";


createNewProject("General", [
  { 
    title: "Solve World Hunger",
    description: "Find a way to feed absolutely everybody all the time", 
    isComplete: false, 
    dueDate: "2023-12-15" , 
    priority: "Emergency"
    },
    { 
        title: "Get a Job",
        description: "Going to need alot of money if i am going to solve world hunger", 
        isComplete: false, 
        dueDate: "2023-09-18" , 
        priority: "High"
        },
        { 
            title: "Go to the shops",
            description: "Feeling like i might make a sandwich today. Ham and cheese i think.", 
            isComplete: false, 
            dueDate: "2024-12-21" , 
            priority: "Normal"
            },
            { 
              title: "Make a sandwich",
              description: "Ham and cheese. Looking forward to consuming it's going to be great", 
              isComplete: false, 
              dueDate: "2023-05-15" , 
              priority: "Low"
              },
              { 
                title: "Eat a sandwich",
                description: "If i am going to eat a sandwich i need to make one first. On hold for now", 
                isComplete: false, 
                dueDate: "2023-11-17" , 
                priority: "On Hold"
                },
              
]);
createNewProject("First Project", [
    { 
      title: "Task 1",
      description: "The first task to complete in a set of to do list tasks", 
      isComplete: false, 
      dueDate: "2023-11-15" , 
      priority: "High"
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