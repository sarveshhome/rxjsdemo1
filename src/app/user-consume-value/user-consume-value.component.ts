import { Component, OnInit } from "@angular/core";
import { AdminServiceService } from "../Services/admin-service.service";

@Component({
  selector: "app-user-consume-value",
  templateUrl: "./user-consume-value.component.html",
  styleUrls: ["./user-consume-value.component.css"]
})
export class UserConsumeValueComponent implements OnInit {
  CosumeValue = "";
  constructor(private adminService: AdminServiceService) {}

  ngOnInit() {
    //this.adminService.currentStore.subscribe(console.log);
    this.adminService.currentStore.subscribe(data => {
      this.CosumeValue = data;
    });
  }
}
