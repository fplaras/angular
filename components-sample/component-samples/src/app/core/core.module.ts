import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PathNotFoundComponent } from "./path-not-found.component";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, PathNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [AppComponent, PathNotFoundComponent]
})
export class CoreModule {}
