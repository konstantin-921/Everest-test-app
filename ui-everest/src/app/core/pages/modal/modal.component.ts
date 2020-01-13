import { Component, OnDestroy, OnInit } from "@angular/core";

import { Subscription } from "rxjs";

import { ModalService } from "../../services/modal.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  x: number;
  y: number;
  subscriptions: Subscription = new Subscription();
  prevId: number;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.subscriptions.add(
      this.modalService.getEvent().subscribe((bool: boolean) => {
        this.isOpen = bool;
      })
    );
    this.subscriptions.add(
      this.modalService
        .getCoordinates()
        .subscribe((coordinates: { x: number; y: number }) => {
          this.x = coordinates.x;
          this.y = coordinates.y;
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  onClickedOutside() {
    if (this.isOpen) {
      this.modalService.sendEvent(false);
    }
  }
}
