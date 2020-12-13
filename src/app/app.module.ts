import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { UserConsumeValueComponent } from "./user-consume-value/user-consume-value.component";
import { AdminServiceService } from "./Services/admin-service.service";
import { UserPassValueComponent } from "./user-pass-value/user-pass-value.component";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UserPassValueComponent,
    UserConsumeValueComponent
  ],
  bootstrap: [AppComponent],
  providers: [AdminServiceService]
})
export class AppModule {}
