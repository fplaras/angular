import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { PathNotFoundComponent } from "./core/path-not-found.component";
import { LoginContainerComponent } from "./login/containers/login-container.component";
import { LandingContainerComponent } from "./landing/containers/landing-container.component";
import { AuthGuardService as AuthGuard } from "./login/services/auth-guard.service";

const routes: Routes = [
  { path: "login", component: LoginContainerComponent },
  {
    path: "landing",
    component: LandingContainerComponent,
    canActivate: [AuthGuard]
  },
  { path: "", pathMatch: "full", redirectTo: "/landing" },
  { path: "**", component: PathNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
