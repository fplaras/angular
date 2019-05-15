import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { LandingRoutingModule } from "./landing-routing.module";

@NgModule({
  declarations: [LandingPageComponent, AccordionComponent],
  imports: [CommonModule, LandingRoutingModule]
})
export class LandingPageModule {}
