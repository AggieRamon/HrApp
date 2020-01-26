import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public empBorder: boolean;
  public jobsLeftBorder: boolean;
  public jobsBottomBorder: boolean;
  public deptBottomBorder: boolean;
  public locBorder: boolean;
  public hideEmp: boolean;
  public hideJob: boolean;
  public hideDept: boolean;
  public hideLoc: boolean;
  public hideNewJobForm: boolean;
  public hideNewDeptForm: boolean;
  public hideNewLocForm: boolean;

  constructor() { }

  ngOnInit() {
    this.empBorder = true;
    this.jobsLeftBorder = true;
    this.hideEmp = false;
    this.hideJob = true;
    this.hideDept = true;
    this.hideLoc = true;
    this.hideNewJobForm = true;
    this.hideNewDeptForm = true;
    this.hideNewLocForm = true;
  }

  toggleNewJobForm(hide: boolean) {
    this.hideNewJobForm = hide;
  }

  toggleNewDeptForm(hide: boolean) {
    this.hideNewDeptForm = hide;
  }

  toggleNewLocForm(hide: boolean) {
    this.hideNewLocForm = hide;
  }

  public clicked(el: HTMLElement) {
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
