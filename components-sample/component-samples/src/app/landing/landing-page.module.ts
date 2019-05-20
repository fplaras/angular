import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page.component";
import { LandingRoutingModule } from "./landing-routing.module";
import { AccordionComponent } from "../accordion-samples/accordion.component";

@NgModule({
  declarations: [LandingPageComponent, AccordionComponent],
  imports: [CommonModule, LandingRoutingModule]
})
export class LandingPageModule {}
