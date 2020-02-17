import { Component, OnInit } from "@angular/core";
import { Subject } from 'rxjs';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // Variables to hide and show html elements and borders
  public empBorder: boolean;
  public jobsLeftBorder: boolean;
  public jobsBottomBorder: boolean;
  public deptBottomBorder: boolean;
  public locBorder: boolean;
  public hideEmp: boolean;
  public hideJob: boolean;
  public hideDept: boolean;
  public hideLoc: boolean;
  public showJobForm: boolean;
  public jobcode: number;
  public showDeptForm: boolean;
  public deptCode:number;
  public showLocForm: boolean;
  public locCode:number;
  // Create subject to determine when to refresh tables after changes
  public jobRefresh: Subject<boolean>;
  public deptRefresh: Subject<boolean>;
  public locRefresh: Subject<boolean>;

  constructor() {
    this.jobRefresh = new Subject();
    this.deptRefresh = new Subject();
    this.locRefresh = new Subject();
  }

  ngOnInit() {
    // Initialize variables
    this.empBorder = true;
    this.jobsLeftBorder = true;
    this.hideEmp = false;
    this.hideJob = true;
    this.hideDept = true;
    this.hideLoc = true;
    this.showJobForm = false;
    this.showDeptForm = false;
    this.showLocForm = false;
  }

  toggleJobForm(jobForm: {code: number, show: boolean}) {
    // Get showJobFrom event emitter value
    this.showJobForm = jobForm.show;
    this.jobcode = jobForm.code;
  }

  toggleDeptForm(deptForm: {code: number, show:boolean}) {
    // Get showDeptFrom event emitter value
    this.showDeptForm = deptForm.show;
    this.deptCode = deptForm.code;
  }

  toggleLocForm(locForm: {code: number, show: boolean}) {
    // Get showLocFrom event emitter value
    this.showLocForm = locForm.show;
    this.locCode = locForm.code;
  }

  public clicked(el: HTMLElement) {
    // Switch statement to control borders when tab is clicked (Users, Jobs, etc...)
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
