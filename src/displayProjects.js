import {projects} from "./createNewProject";
import { setCurrentProject } from "./viewProject";
import { createNewProject } from "./createNewProject";

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
        projectEditButton.src = "/to-do-list2/assets/folder-edit.svg";

        const projectDeleteButton = document.createElement("img");
        projectDeleteButton.className = "project-delete-button";
        projectDeleteButton.src = "/to-do-list2/assets/delete.svg";
       
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectViewButton);
        projectDiv.appendChild(projectEditButton);       
        projectDiv.appendChild(projectDeleteButton);

        projectContainer.appendChild(projectDiv);
      }
    const newProjectButton = document.createElement("div");
    newProjectButton.id = "create-project-button";
    newProjectButton.addEventListener("click", () => {
      let projectDialog = document.getElementById('projectDialog');
      projectDialog.showModal();
    
      // Find the form inside the dialog

    });

    const newProjectText = document.createElement("div");
    newProjectText.id = "create-project-text";
    newProjectText.textContent = "New Project";

    const newProjectImage = document.createElement("img");
    newProjectImage.id = "create-project-image";
    newProjectImage.src = "/to-do-list2/assets/plus-box.svg";

    newProjectButton.appendChild(newProjectText);
    newProjectButton.appendChild(newProjectImage);
    projectContainer.appendChild(newProjectButton);
}
