import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ClickOutsideModule } from "ng-click-outside";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./core/pages/main.component";
import { HeaderComponent } from "./core/pages/header/header.component";
import { ActivityComponent } from "./core/pages/activity/activity.component";
import { HomebuilderComponent } from "./core/pages/homebuilder/homebuilder.component";
import { TodoComponent } from "./core/pages/todo/todo.component";
import { FirstActivityComponent } from "./core/pages/first-activity/first-activity.component";
import { SecondActivityComponent } from "./core/pages/second-activity/second-activity.component";
import { ThirdActivityComponent } from "./core/pages/third-activity/third-activity.component";
import { FourthActivityComponent } from "./core/pages/fourth-activity/fourth-activity.component";
import { FifthActivityComponent } from "./core/pages/fifth-activity/fifth-activity.component";
import { ModalComponent } from "./core/pages/modal/modal.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ActivityComponent,
    HomebuilderComponent,
    TodoComponent,
    FirstActivityComponent,
    SecondActivityComponent,
    ThirdActivityComponent,
    FourthActivityComponent,
    FifthActivityComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
