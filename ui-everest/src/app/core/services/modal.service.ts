import { Injectable } from "@angular/core";

import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ModalService {
  private subjectCoordinates = new Subject();
  private subjectEvent = new Subject();

  constructor() {}

  sendCoordinates(coordinates: { x: number; y: number }) {
    this.subjectCoordinates.next(coordinates);
  }

  getCoordinates(): Observable<any> {
    return this.subjectCoordinates.asObservable();
  }

  sendEvent(bool: boolean) {
    this.subjectEvent.next(bool);
  }

  getEvent(): Observable<any> {
    return this.subjectEvent.asObservable();
  }
}
