const todolist = [{
  name:'make dinner', 
  duedate: '20-09-2023',
},
  {name:'wash dishes',
  duedate: '20-09-2023',
}];

rendertolist();
function rendertolist(){
let todolisthtml='';
for(let i=0; i <todolist.length; i++){
    const loophole = todolist[i];
    //const {name , duedate} = loophole;
    const name = loophole.name;
    const duedate = loophole.duedate;
    const html= `<p>
    <div>${name}</div> 
    <div>${duedate}</div>
      <button onclick="
      todolist.splice(${i},1);
      rendertolist();
      " class="delete-to-do">Delete</button>
    </p>`;
    todolisthtml += html;
  }
  
document.querySelector('.js-todolistactivities').innerHTML = todolisthtml;
}
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const inputDate = document.querySelector('.js-date-input');
  const date = inputDate.value;

  todolist.push({
    name,date
  });

  inputElement.value = '';
  rendertolist();
}


function EnterKey(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}