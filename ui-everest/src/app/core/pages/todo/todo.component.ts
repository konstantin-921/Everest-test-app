import { Component, OnInit, Input, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import Todo from "../../models/todo";
import { TodosService } from "../../services/todos.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"]
})
export class TodoComponent implements OnDestroy {
  @Input() todo: Todo;
  subscriptions: Subscription = new Subscription();

  constructor(private todosService: TodosService) {}

  changeState(todo: Todo) {
    this.subscriptions.add(this.todosService.changeStateTodo(todo).subscribe());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
