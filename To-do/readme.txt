To-Do List Application

A sleek and functional To-Do List application built with HTML, CSS, and JavaScript. This app lets you add, complete, and delete tasks with a dark-themed, minimalist design. Tasks are stored locally using localStorage, ensuring they persist across page refreshes. Perfect for managing your daily tasks efficiently!

Features:

Add Tasks: Enter a task in the input field and hit "Add Task" or press "Enter."



Complete Tasks: Click a task to mark it as completed with a red strikethrough effect.



Delete Tasks: Remove tasks using the "X" button next to each one.



Persistent Storage: Tasks are saved in localStorage for persistence.



Responsive Design: Works seamlessly on both desktop and mobile devices.



Technologies Used:


HTML5: Structures the app's layout.



CSS3: Provides the dark theme, gradients, and interactive styling.



JavaScript (ES6): Handles task management and local storage functionality.



Installation:


Clone the repository:

git clone https://github.com/your-username/todo-list-app.git



Navigate to the project folder:

cd todo-list-app



Open index.html in your browser:

open index.html

Usage:


Add a Task: Type your task in the input field and click "Add Task" or press "Enter."



Complete a Task: Click the task text to toggle its completion status (strikethrough appears).



Delete a Task: Click the "X" button next to a task to remove it.



Persistence: Tasks stay saved even after you refresh the page, thanks to localStorage.



Code Structure:


index.html: Defines the app's structure, including the input field, button, and task list.



styles.css: Styles the app with a dark gradient background, rounded elements, and hover effects.



todo.js: Manages tasks with functions for adding, completing, deleting, and rendering tasks from localStorage.



Key JavaScript Functions:


saveTask(): Stores the task array in localStorage.



renderTasks(): Updates the UI by rendering tasks from the array.



addTask(): Adds a new task to the array and triggers a UI update.


Styling Highlights:


Theme: Dark gradient background (grey to black) with a sleek container.



Tasks: Rounded list items with a subtle grey background and red strikethrough for completed tasks.



Buttons: Blue "Add Task" button and red "X" delete buttons with hover effects.