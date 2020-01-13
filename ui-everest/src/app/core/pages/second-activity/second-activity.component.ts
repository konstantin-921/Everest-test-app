import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { ModalService } from "../../services/modal.service";
import { ActivityService } from "../../services/activity.service";

@Component({
  selector: "app-second-activity",
  templateUrl: "./second-activity.component.html",
  styleUrls: ["./second-activity.component.scss"]
})
export class SecondActivityComponent implements OnInit, OnDestroy {
  isOpenModal = false;
  subscriptions: Subscription = new Subscription();

  constructor(
    private modalService: ModalService,
    private activityService: ActivityService
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.modalService.getEvent().subscribe((bool: boolean) => {
        this.isOpenModal = bool;
      })
    );
  }

  toggleModal(event) {
    this.isOpenModal = this.activityService.toggleModal(
      event,
      this.isOpenModal
    );
  }

  onClickedOutside() {
    this.isOpenModal = false;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
