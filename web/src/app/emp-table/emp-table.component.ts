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

  ngOnInit() {
    this.queryUsers()  
  }

  public getUsers() {
    return this.users;
  }

  public delete(el: HTMLElement, e: Event) {
    e.stopPropagation();
    let result = confirm("Are you sure you want to delete?")
    if (result) {
      this.userService.deleteUser(Number(el.innerText)).subscribe(res => {
        if (res.status === 200) {
          this.queryUsers()
        }
      })
    }
  }

  private async queryUsers() {
    this.users = await this.userService.getUser();
  }
}
