import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from "./components/login-form.component";
import { LoginContainerComponent } from "./containers/login-container.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@NgModule({
  declarations: [LoginContainerComponent, LoginFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AuthGuardService, AuthService, JwtHelperService]
})
export class LoginModule {}
