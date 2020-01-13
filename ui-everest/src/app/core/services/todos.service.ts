import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, Subject } from "rxjs";
import openSocket from "socket.io-client";

import { environment } from "../../../environments/environment";
import Todo from "../models/todo";

const socket = openSocket(environment.localUrl);

@Injectable({
  providedIn: "root"
})
export class TodosService {
  private subject = new Subject();

  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<[Todo]> {
    return this.http.get<[Todo]>(`${environment.localUrl}todos`);
  }

  changeStateTodo(todo: Todo) {
    const { id, completed } = todo;
    const url = completed ? "completed" : "uncompleted";
    return this.http.put(`${environment.localUrl}todos/update/${url}`, {
      id,
      completed: !completed
    });
  }

  getChangedTodos(): Observable<any> {
    return this.subject.asObservable();
  }

  todosChanged() {
    socket.on("todos-changed", (id: number) => {
      this.subject.next(id);
    });
  }
}
