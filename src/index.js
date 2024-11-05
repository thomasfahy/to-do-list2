import "./styles.css";
import { projects, createNewProject } from "./createNewProject";
import { displayProjects } from "./displayProjects";

createNewProject("Project Alpha"); // Adds project with no todos
createNewProject("Default", [
  { 
    description: "Define project scope", 
    isComplete: false, 
    dueDate: "2023-11-15" , 
    priority: "Normal"
    }
]);
console.log(projects);

displayProjects();

