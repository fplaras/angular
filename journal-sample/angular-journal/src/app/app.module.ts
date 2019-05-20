import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./core/app.component";
import { CoreModule } from "./core/core.module";
import { LoginModule } from "./login/login.module";
import { LandingModule } from "./landing/landing.module";
import { JwtModule } from "@auth0/angular-jwt";
import { TopNavigationComponent } from "./shared/top-navigation/top-navigation.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    LandingModule,
    JwtModule.forRoot({})
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
