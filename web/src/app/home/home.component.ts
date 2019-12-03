import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private empBorder: boolean;
  private jobsLeftBorder: boolean;
  private jobsBottomBorder: boolean;
  private deptBottomBorder: boolean;
  private locBorder: boolean;
  private hideEmp: boolean;

  constructor() { }

  ngOnInit() {
    this.empBorder = true;
    this.jobsLeftBorder = true;
    this.hideEmp = false;
  }

  private clicked(el: HTMLElement) {
    switch (el.textContent.toLowerCase()) {
      case "employees":
        this.empBorder = true;
        this.jobsLeftBorder = true;
        this.jobsBottomBorder = false;
        this.deptBottomBorder = false;
        this.locBorder = false;
        this.hideEmp = false;
        break;
      case "jobs":
        this.empBorder = false;
        this.jobsLeftBorder = false;
        this.jobsBottomBorder = true;
        this.deptBottomBorder = false;
        this.locBorder = false;
        this.hideEmp = true;
        break;
      case "departments":
        this.empBorder = false;
        this.jobsLeftBorder = false;
        this.jobsBottomBorder = false;
        this.deptBottomBorder = true;
        this.locBorder = false;
        break;
      case "locations":
        this.empBorder = false;
        this.jobsLeftBorder = false;
        this.jobsBottomBorder = false;
        this.deptBottomBorder = false;
        this.locBorder = true;
        break;
    }
  }

}
