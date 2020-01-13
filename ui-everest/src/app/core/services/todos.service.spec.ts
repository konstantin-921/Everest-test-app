import { TestBed } from "@angular/core/testing";

import { TodosServiceService } from "./todos.service";

describe("TodosServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: TodosServiceService = TestBed.get(TodosServiceService);
    expect(service).toBeTruthy();
  });
});
