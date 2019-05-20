import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PathNotFoundComponent } from "./core/path-not-found.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/landing" },
  { path: "**", component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
