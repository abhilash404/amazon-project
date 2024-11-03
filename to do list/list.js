const todolist=[];

rendertodolist();

function removetask(index,no){
  todolist.splice(index,no);
  rendertodolist();
}

function rendertodolist(){
  let todolisthtml='';
  for (let index = 0; index < todolist.length; index++) {
    const todoname = (todolist[index]).name;
    const tododate = (todolist[index]).duedate;
    const html= `
    <div class="displayname">
      ${todoname}
    </div>
    <div class="datemenu">
      ${tododate}
    </div>
    <button onclick="removetask(${index},1)" class="deletebutton">delete</button>
    `
    
    todolisthtml += html;
  }
  document.querySelector('.todolist').innerHTML= todolisthtml;
}

function addtask() {
  const inputname = (document.querySelector('.inputname')).value;
  const inputdate = (document.querySelector('.inputdate')).value;
  const inputinfo={name: inputname,duedate: inputdate};
  todolist.push(inputinfo);
  rendertodolist();
}



