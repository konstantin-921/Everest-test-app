import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { ModalService } from "../../services/modal.service";
import { ActivityService } from "../../services/activity.service";

@Component({
  selector: "app-third-activity",
  templateUrl: "./third-activity.component.html",
  styleUrls: ["./third-activity.component.scss"]
})
export class ThirdActivityComponent implements OnInit, OnDestroy {
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
