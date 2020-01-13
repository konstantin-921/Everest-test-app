import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  isOpenMenu = false;
  x: number;
  y: number;
  constructor() {}

  toggleModalMenu(event) {
    const path = event.path || (event.composedPath && event.composedPath());
    this.x = path[0].offsetLeft;
    this.y = path[0].offsetTop;
    this.isOpenMenu = !this.isOpenMenu;
  }

  onClickedOutside() {
    if (this.isOpenMenu) {
      this.isOpenMenu = false;
    }
  }
}
