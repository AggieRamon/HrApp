import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "emp-table",
  templateUrl: "./emp-table.component.html",
  styleUrls: ["./emp-table.component.css"]
})
export class EmpTableComponent implements OnInit {
  private users;

  constructor(private userService: UserService) {
    this.users = [];
  }

  async ngOnInit() {
    this.users = await this.userService.getUser();
  }
}
