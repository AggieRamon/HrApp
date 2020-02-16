import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { JobService } from "../job.service";
import { DeptService } from "../dept.service";
import { LocService } from "../loc.service";

@Component({
  selector: "edit-emp",
  templateUrl: "./edit-emp.component.html",
  styleUrls: ["./edit-emp.component.css"]
})
export class EditEmpComponent implements OnInit {
  // Create variables to be used for edit employee form
  private editForm: FormGroup;
  private user;
  private jobs;
  private depts;
  private locs;
  private userId: string;

  constructor(private fb: FormBuilder, private userService: UserService,
              private router: Router, private jobService: JobService,
              private deptService: DeptService, private locService: LocService) {
    // Get user id from url to be used to query current values
    this.userId = this.router.url.replace("/edit/", "");
    // Build edit form and all validators
    this.editForm = fb.group({
      firstname: fb.control("", Validators.required),
      middlename: fb.control(""),
      lastname: fb.control("", Validators.required),
      preferredfirstname: fb.control(""),
      preferredlastname: fb.control(""),
      email: fb.control("", Validators.required),
      jobcode: fb.control("", Validators.required),
      jobtitle: fb.control(""),
      departmentcode: fb.control("", Validators.required),
      department: fb.control(""),
      locationcode: fb.control("", Validators.required),
      location: fb.control(""),
      status: fb.control("", Validators.required),
      managerid: fb.control("", Validators.required)
    });
  }

  async ngOnInit() {
    // Query jobs, locs, and depts to be used for dropdown menu
    this.jobs = await this.jobService.getJob();
    this.depts = await this.deptService.getDept();
    this.locs = await this.locService.getLoc();

    // Query user by id to obtain current values
    const res = await this.userService.getUserById(this.userId);
    // Get first item in array
    this.user = res[0];
    // Initialize object to be save to form
    const valuesObject = {};
    // Iterate through the fields in the edit form
    Object.keys(this.editForm.controls).forEach(key => {
      /* Since I do not have code fields I made the value of the options a concatenated string of title and code
        If it is not an option field then set the control value to the user value*/
      switch (key) {
        case "jobcode":
          // tslint:disable-next-line: no-string-literal
          valuesObject[key] = this.user[key] + "|" + this.user["jobtitle"];
          break;
        case "departmentcode":
          // tslint:disable-next-line: no-string-literal
          valuesObject[key] = this.user[key] + "|" + this.user["department"];
          break;
        case "locationcode":
          // tslint:disable-next-line: no-string-literal
          valuesObject[key] = this.user[key] + "|" + this.user["location"];
          break;
        default:
          valuesObject[key] = this.user[key];
      }
    });
    // Update the current values to the edit form
    this.editForm.setValue(valuesObject);
  }

  public getEditForm() {
    return this.editForm;
  }

  public getDepts() {
    return this.depts;
  }

  public getJobs() {
    return this.jobs;
  }

  public getLocs() {
    return this.locs;
  }

  public onSubmit() {
    let val: string;
    let splitVal: string[];

    // Before update, split code value into title and code, and update the form

    val = this.editForm.get("jobcode").value;
    splitVal = val.split("|");
    this.editForm.get("jobcode").setValue(splitVal[0]);
    this.editForm.get("jobtitle").setValue(splitVal[1]);

    val = this.editForm.get("departmentcode").value;
    splitVal = val.split("|");
    this.editForm.get("departmentcode").setValue(splitVal[0]);
    this.editForm.get("department").setValue(splitVal[1]);

    val  = this.editForm.get("locationcode").value;
    splitVal = val.split("|");
    this.editForm.get("locationcode").setValue(splitVal[0]);
    this.editForm.get("location").setValue(splitVal[1]);
    this.userService.updateUser(this.editForm.value, this.userId).subscribe(res => {
      if (res.status === 200) {
        // If successful update navigate back to home page
        this.router.navigateByUrl("/");
      }
    });
  }
}
