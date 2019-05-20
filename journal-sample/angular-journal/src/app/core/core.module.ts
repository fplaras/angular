import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PathNotFoundComponent } from "./path-not-found.component";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TopNavigationComponent } from "../shared/top-navigation/top-navigation.component";

@NgModule({
  declarations: [AppComponent, PathNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppComponent, PathNotFoundComponent]
})
export class CoreModule {}
