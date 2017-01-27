import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  moduleId: "moduleId",
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})
export class TodosComponent implements OnInit {
  todos=[
    {text:"Faire une app angular"},
    {text:"Manger des M&M's"},
    {text:"Faire du JavaScript"}
  ];
    old_todo_name:string = "";
    todo_name:string = "";
    appState:string = "default";
    
  constructor(private todoService : TodoService) {   }

  ngOnInit() {
  }
  
  addTodo(){
    if(this.todo_name=="")return;
    if(!this.todos.some(x=>x.text == this.todo_name)){
      var newTodo={
        text:this.todo_name
      }
      this.todos.push(newTodo);
    }
    this.todo_name="";
  }

  editTodo(todo){
    this.appState ="edit";
    this.old_todo_name = todo.text;
    this.todo_name = todo.text;
  }

  updateTodo(){
    if(this.todo_name == "") return;

    this.todos.map((function(item){
      if(item.text == this.old_todo_name)
      item.text = this.todo_name;
    }).bind(this));    // Permet de dire que le this est la classe qui est en cours
    this.appState ="default";
    this.todo_name = "";
 }
}
