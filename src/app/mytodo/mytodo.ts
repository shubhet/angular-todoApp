import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from "../Todo";


@Component({
  selector: 'app-mytodo',
  imports: [CommonModule],
  templateUrl: './mytodo.html',
  styleUrl: './mytodo.css',
})
export class MyTodo implements OnInit {
  localItem: string | null;
  todos: Todo[] = [
    {
      title: 'Learn Angular basics', active: true,
      sno: 1,
      desc: 'Learn the basics of Angular framework'
    },
    {
      title: 'Build a Todo app', active: false,
      sno: 2,
      desc: 'Create a simple Todo application'
    },
    {
      title: 'Test the application', active: true,
      sno: 3,
      desc: 'Test the functionality of the Todo application'
    },
    {
      title: 'Deploy to production', active: false,
      sno: 4,
      desc: 'Deploy the Todo application to production'
    }
  ];
  
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem != null){
      this.todos = JSON.parse(this.localItem); 
    }
   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo); 
    this.todos.push(todo); 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){ 
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    
    console.log(todo)
  }
}

