import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page.component";
import { AccordionComponent } from "../accordion-samples/accordion.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "accordion", component: AccordionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
