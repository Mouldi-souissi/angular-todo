import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';
  constructor() {}
  ngOnInit(): void {
    this.todos = [
      { text: 'jaw', isDone: true },
      { text: 'angular', isDone: false },
    ];
  }
  handleSubmit = () => {
    this.todos.push({ text: this.inputTodo, isDone: false });
  };
  handleDone = (id: number) => {
    this.todos.map((todo, i) => {
      if (i == id) todo.isDone = !todo.isDone;
      return todo;
    });
  };
}
