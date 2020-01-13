import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { TodosService } from "../../services/todos.service";
import Todo from "../../models/todo";

@Component({
  selector: "app-homebuilder",
  templateUrl: "./homebuilder.component.html",
  styleUrls: ["./homebuilder.component.scss"]
})
export class HomebuilderComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription();
  todos = [];

  constructor(private todosService: TodosService) {
    this.todosService.todosChanged();
    this.subscriptions.add(
      this.todosService.getChangedTodos().subscribe((id: number) => {
        this.todos.forEach(item => {
          if (item.id === id) {
            item.completed = !item.completed;
          }
        });
      })
    );
  }

  ngOnInit() {
    this.subscriptions.add(
      this.todosService.getAllTodos().subscribe((todos: [Todo]) => {
        this.todos = [...todos];
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
