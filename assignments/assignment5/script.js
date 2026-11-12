// Task 0
console.log("Assel Nurzhankyzy IT-2514");

alert("Hello, JavaScript World!");

// Task 1
let text1 = "This is string ";
let text2 = "I am joined he he "
let number = 2514;
let thisBoolean = true;

console.log(`2514 * 2 = ${number * 2} `);
console.log("-------------");
console.log(text1 + text2);

// Task 2
const paragraph = document.getElementById("Paragraph");
const button = document.getElementById("changeTextBtn");

button.addEventListener
(
    "click", 
    function()
    {
    paragraph.textContent = "I have changed hehe";
    }
);

// Task 3
const boxT3 = document.getElementById("boxT3");
const buttonClrr = document.getElementById("bgColorBtn");
const buttonSize = document.getElementById("fontSizeBtn");

buttonClrr.addEventListener
(
    "click", 
    function()
    {
        boxT3.style.backgroundColor = "lightblue";
    }
);

buttonSize.addEventListener
(
    "click", 
    function()
    {
        boxT3.style.fontSize = "24px";
    }
);

// Task 4
const List = document.getElementById("itemList");
const AddItem = document.getElementById("addItem");
const RemoveItem = document.getElementById("removeItem");

AddItem.addEventListener
(
    "click",
    function()
    {
        const itemCounter = List.children.length + 1;

        const newLi = document.createElement("li");

        newLi.textContent = ` ${itemCounter} item `;

        List.appendChild(newLi);
    }
);

RemoveItem.addEventListener
(
    "click",
    function()
    {
        const LastItem = List.lastElementChild;

        if(LastItem)
        {
            List.removeChild(LastItem);
        }
        else
        {
            alert("No more items to remove!");
        }
    }
);

// Task 5
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener
(
    "mouseover",
    function()
    {
        hoverBox.style.backgroundColor = "pink";
    }
);

hoverBox.addEventListener
(
    "mouseout",
    function()
    {
        hoverBox.style.backgroundColor = "lightgray";
    }
);

// Task 6
const inputText = document.getElementById("userInput");
const Display = document.getElementById("output");

inputText.addEventListener
(
    "keyup",
    function()
    {
        Display.textContent = inputText.value;
    }
);

// Task 8
const InputText = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("tasks");

let tasksArray = [];

addTaskBtn.addEventListener
(
    "click",
    function()
    {
        const taskText = InputText.value.trim();

        if(taskText === ""){
            alert("Please enter a task!");
            return;            
        }

        const taskObj = {
            id: Date.now(),
            text: taskText,
            completed: false
        }

        tasksArray.push(taskObj);

        const Li = document.createElement("li");

        const textSpan = document.createElement("span");
        textSpan.textContent = taskText;
        textSpan.style.cursor = "pointer";

        textSpan.addEventListener
        (
            "click",
            function()
            {
                taskObj.completed = !taskObj.completed;

                if(taskObj.completed)
                {
                    textSpan.style.textDecoration = "line-through";
                    textSpan.style.color = "gray";
                }
                else 
                {
                    textSpan.style.textDecoration = "none";
                    textSpan.style.color = "black";
                }
            }
        );

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener
        (
            "click",
            function()
            {
                taskList.removeChild(Li);

                tasksArray = tasksArray.filter(t => t.id !== taskObj.id);
                console.log("Current Array:", tasksArray);
            }
        );

        Li.appendChild(textSpan);
        Li.appendChild(deleteBtn);
        taskList.appendChild(Li);

        InputText.value = "";
    }
);