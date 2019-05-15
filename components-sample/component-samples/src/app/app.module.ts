import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./core/app.component";
import { CoreModule } from "./core/core.module";
import { LandingPageModule } from "./landing/landing-page.module";

@NgModule({
  declarations: [],
  imports: [BrowserModule, CoreModule, LandingPageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
