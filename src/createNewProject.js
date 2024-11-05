
const projects = [];


function createNewProject(name, todo = []) {

  projects.push({
    name: name,
    todo: todo
  });
  console.log(`Project "${name}" added successfully!`);
}

export { projects, createNewProject}