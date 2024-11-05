import "./styles.css";
import { projects, createNewProject } from "./createNewProject";
import { displayProjects } from "./displayProjects";

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
            title: "To-Do-1",
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

console.log(projects);
displayProjects();

