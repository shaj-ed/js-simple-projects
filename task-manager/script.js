// Get items
const taskInput = document.querySelector('#inputText');
const addTaskButton = document.querySelector('#addTaskButton');
const allTask = document.querySelector('.task-show');

// addTaskButton event
addTaskButton.addEventListener('click', (event) => {

    if(taskInput.value === '') {
        alert('Please Put a Task!');
    } else {
        createNewTask(allTask, taskInput.value);
        taskInput.value = '';
    }

})

// Create a function for add new task
const createNewTask = (parent, values) => {

    // Create needed elements
    let task = document.createElement('div');
    task.classList.add('task');

    let taskText = document.createElement('p');
    taskText.classList.add('task-text');
    taskText.innerText = values;

    // Create remove button
    let removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.classList.add('flex');
    removeButton.innerHTML = `<ion-icon name="close-outline"></ion-icon>`;

    // Remove task event
    removeButton.addEventListener('click', () => {
        parent.removeChild(task);
    })
    task.appendChild(removeButton);

    // Task Color Controller
    let taskControl = createControl(task);
    taskControl.style.visibility = 'hidden';
    task.addEventListener('mouseover', () => {
        taskControl.style.visibility = 'visible';
    })
    task.addEventListener('mouseout', () => {
        taskControl.style.visibility = 'hidden';
    })
    task.appendChild(taskControl);

    // Append all
    task.appendChild(taskText);
    parent.appendChild(task);

}


// Task color controller function
const createControl = (parent) => {

    let colors = document.createElement('div');
    colors.classList.add('colors');

    // Create all colors
    let allColors = createColor(parent);
    colors.appendChild(allColors);

    // Edit button
    let buttonEdit = createEditButton(parent);
    colors.appendChild(buttonEdit);

    return colors;

}

// Create all colors
const createColor = (parent) => {
    const allClr = ['#2b2e4a', '#424642', '#897853', '#4a3933'];

    let colorsDiv = document.createElement('div');
    colorsDiv.classList.add('all-color');

    allClr.forEach(clr => {
        let singleColor = document.createElement('div');
        singleColor.classList.add('color');
        singleColor.style.backgroundColor = clr;
        colorsDiv.appendChild(singleColor);

        singleColor.addEventListener('click', () => {
            parent.style.backgroundColor = clr;
        })
    })

    return colorsDiv;
}

// Create edit button
const createEditButton = (parent) => {

    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.classList.add('flex');
    editButton.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;

    // Event for editing task text
    editButton.addEventListener('click', () => {
        let textP = parent.querySelector('p');
        
        let textArea = document.createElement('textarea');
        textArea.classList.add('textarea');
        textArea.innerText = textP.innerText;
        parent.appendChild(textArea);

        // Event for collecting text and add to textP
        textArea.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                textP.innerText = textArea.value;
                parent.removeChild(textArea);
            }
        })
    })

    return editButton;
}