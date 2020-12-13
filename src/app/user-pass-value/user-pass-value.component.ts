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
  constructor(private useService: AdminServiceService) {}

  ngOnInit() {}

  submit() {}
  DisplayMessage() {
    this.useService.currentStore.subscribe(data => {
      this.showValue = data;
      console.log("return Value " + data);
    });
  }
}
