import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserPassValueComponent } from "./user-pass-value/user-pass-value.component";
import { UserConsumeValueComponent } from "./user-consume-value/user-consume-value.component";

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      { path: "Home", component: AppComponent },
      { path: "userpv", component: UserPassValueComponent },
      { path: "usercv", component: UserConsumeValueComponent },
      { path: "**", redirectTo: "login" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
