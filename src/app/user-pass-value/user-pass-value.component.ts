import { Component, OnInit } from "@angular/core";
import { AdminServiceService } from "../Services/admin-service.service";

@Component({
  selector: "app-user-pass-value",
  templateUrl: "./user-pass-value.component.html",
  styleUrls: ["./user-pass-value.component.css"]
})
export class UserPassValueComponent implements OnInit {
  submitValue = "";
  showValue = "";
  constructor(private adminService: AdminServiceService) {}

  ngOnInit() {}

  submit() {
    this.adminService.changeMessage(this.submitValue);
  }
  DisplayMessage() {
    this.adminService.currentStore.subscribe(data => {
      this.showValue = data;
      console.log("return Value " + data);
    });
    this.adminService.currentStore.subscribe(console.log);
  }
}
