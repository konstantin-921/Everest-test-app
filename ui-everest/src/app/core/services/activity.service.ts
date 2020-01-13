import { Injectable } from "@angular/core";

import { ModalService } from "./modal.service";

@Injectable({
  providedIn: "root"
})
export class ActivityService {
  protected staticIdent = 45;
  x: number;
  y: number;
  constructor(private modalService: ModalService) {}

  toggleModal(event, isOpenModal: boolean) {
    const path = event.path || (event.composedPath && event.composedPath());
    const btn = path.find(item => item.className === "activity__btn");

    if (isOpenModal) {
      this.modalService.sendEvent(false);
      isOpenModal = false;
    } else {
      this.x = btn.offsetLeft;
      this.y = btn.offsetTop;
      if (this.x + this.staticIdent >= event.view.innerWidth) {
        this.x = event.view.innerWidth - this.staticIdent;
      }
      this.modalService.sendCoordinates({ x: this.x, y: this.y });
      this.modalService.sendEvent(true);
      isOpenModal = true;
    }
    return isOpenModal;
  }
}
