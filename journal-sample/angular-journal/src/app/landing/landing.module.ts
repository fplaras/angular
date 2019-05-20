import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingContainerComponent } from "./containers/landing-container.component";
import { LandingComponent } from "./components/landing.component";
import { TopNavigationComponent } from "../shared/top-navigation/top-navigation.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LandingContainerComponent,
    LandingComponent,
    TopNavigationComponent
  ],
  imports: [CommonModule, SharedModule]
})
export class LandingModule {}
