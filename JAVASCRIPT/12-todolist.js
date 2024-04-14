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

  todolist.forEach((loophole,index) =>{
    //const {name , duedate} = loophole;
    const {name , duedate} = loophole;
    const html= `<p>
    <div>${name}</div> 
    <div>${duedate}</div>
      <button
      class="delete-to-do">Delete</button>
    </p>`;
    todolisthtml += html;
  })
document.querySelector('.js-todolistactivities').innerHTML = todolisthtml;

document.querySelectorAll('.delete-to-do').
forEach((deleteButton,index) =>
{
  deleteButton.addEventListener('click',()=>{
    
    todolist.splice(index,1);
    rendertolist();
  })
});


}
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const inputDate = document.querySelector('.js-date-input');
  const duedate = inputDate.value;

  todolist.push({
    name,duedate
  });

  inputElement.value = '';
  rendertolist();
}

document.querySelector('.add-to-do')
.addEventListener('click',()=>{
addTodo();
});

function EnterKey(event){
  if(event.key === 'Enter'){
    addTodo();
  }
}