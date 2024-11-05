import { projects } from "./createNewProject";
import { currentViewedProject } from "./viewProject";

export function createTodo(){
    console.log("Create to do!");

    const form = document.getElementById('todo-form');
    form.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = new FormData(form);

    const formTitle = formData.get('title');
    const formDescription = formData.get('desc');
    const formDueDate = formData.get('dueDate');
    const formPriority = formData.get('options');

    console.log(formTitle, formDescription, formDueDate, formPriority);
    

});
}