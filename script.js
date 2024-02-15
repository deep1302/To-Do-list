// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener to add task button
addTaskButton.addEventListener('click', addTask);

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        // Add event listener to delete button
        deleteButton.addEventListener('click', deleteTask);

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Delete task function
function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}
