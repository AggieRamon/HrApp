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
  private hideJob: boolean;
  private hideDept: boolean;
  private hideLoc: boolean;

  constructor() { }

  ngOnInit() {
    this.empBorder = true;
    this.jobsLeftBorder = true;
    this.hideEmp = false;
    this.hideJob = true;
    this.hideDept = true;
    this.hideLoc = true;
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
        this.hideJob = true;
        this.hideDept = true;
        this.hideLoc = true;
        break;
      case "jobs":
        this.empBorder = false;
        this.jobsLeftBorder = false;
        this.jobsBottomBorder = true;
        this.deptBottomBorder = false;
        this.locBorder = false;
        this.hideEmp = true;
        this.hideJob = false;
        this.hideDept = true;
        this.hideLoc = true;
        break;
      case "departments":
        this.empBorder = false;
        this.jobsLeftBorder = false;
        this.jobsBottomBorder = false;
        this.deptBottomBorder = true;
        this.locBorder = false;
        this.hideEmp = true;
        this.hideJob = true;
        this.hideDept = false;
        this.hideLoc = true;
        break;
      case "locations":
        this.empBorder = false;
        this.jobsLeftBorder = false;
        this.jobsBottomBorder = false;
        this.deptBottomBorder = false;
        this.locBorder = true;
        this.hideEmp = true;
        this.hideJob = true;
        this.hideDept = true;
        this.hideLoc = false;
        break;
    }
  }

}
