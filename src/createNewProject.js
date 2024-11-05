
const projects = [];


function createNewProject(name, todos = []) {

  projects.push({
    name: name,
    todos: todos
  });
  console.log(`Project "${name}" added successfully!`);
}

export { projects, createNewProject}