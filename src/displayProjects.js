import {projects} from "./createNewProject";
import { viewProject, setCurrentProject } from "./viewProject";

export function displayProjects () {
    let projectContainer = document.getElementById("projects-container");
    for (let i = 0; i < projects.length; i++) {
        let currentProject = projects[i].name;
        console.log(`Loading: ${projects[i].name}`);
        let projectName = projects[i].name;

        const projectDiv = document.createElement("div");
        projectDiv.className = "project";
        
        const projectTitle = document.createElement("div");
        projectTitle.className = "project-title";
        projectTitle.textContent = projectName;

        const projectViewButton = document.createElement("div");
        projectViewButton.className = "project-view-button";
        projectViewButton.textContent = "View";
        projectViewButton.addEventListener("click", () => setCurrentProject(currentProject));

        const projectEditButton = document.createElement("img");
        projectEditButton.className = "project-edit-button";
        projectEditButton.src = "../assets/folder-edit.svg";

        const projectDeleteButton = document.createElement("img");
        projectDeleteButton.className = "project-delete-button";
        projectDeleteButton.src = "../assets/delete.svg";
       
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectViewButton);
        projectDiv.appendChild(projectEditButton);       
        projectDiv.appendChild(projectDeleteButton);

        projectContainer.appendChild(projectDiv);
      }
    const newProjectButton = document.createElement("div");
    newProjectButton.id = "create-project-button";

    const newProjectText = document.createElement("div");
    newProjectText.id = "create-project-text";
    newProjectText.textContent = "New Project";

    const newProjectImage = document.createElement("img");
    newProjectImage.id = "create-project-image";
    newProjectImage.src = "../assets/plus-box.svg";

    newProjectButton.appendChild(newProjectText);
    newProjectButton.appendChild(newProjectImage);
    projectContainer.appendChild(newProjectButton);
}