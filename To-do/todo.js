    let tasks=JSON.parse(localStorage.getItem('tasks'))||[];

    function saveTask(){
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }


    function renderTasks(){
        const taskList=document.getElementById("todo-list");
        taskList.innerHTML='';

        tasks.forEach((task,index) => {
            const li=document.createElement('li');
            li.textContent=task.text;

            if (task.completed){
                li.classList.add('completed');
            }

            li.addEventListener('click',(event)=>{
                if (event.target.tagName!=='BUTTON'){
                    li.classList.toggle('completed');
                    tasks[index].completed=!tasks[index].completed;
                    saveTask();
            }
        });

        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='X';

        deleteBtn.addEventListener('click',(event)=>{
            tasks.splice(index,1);
            saveTask();
            renderTasks();
            event.stopPropagation();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        });
        


    
    }


    function addTask(){
        const taskInput=document.getElementById('todo-input');
        const taskValue=taskInput.value.trim();

        if (taskValue==''){
            alert('Enter a task!');
            return;
        }

        tasks.push({text:taskValue,completed:false});
        taskInput.value='';

        saveTask();
        renderTasks();
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('add-task-btn').addEventListener('click', addTask);
        document.getElementById('todo-input').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });
        renderTasks(); 
    });

