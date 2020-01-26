import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { JobService } from "../job.service";
import { DeptService } from "../dept.service";
import { LocService } from "../loc.service";

@Component({
  selector: "new-emp",
  templateUrl: "./new-emp.component.html",
  styleUrls: ["./new-emp.component.css"]
})
export class NewEmpComponent implements OnInit {
  private createForm: FormGroup;
  private jobs;
  private depts;
  private locs;

  constructor(private fb: FormBuilder, private userService: UserService,
              private router: Router, private jobService: JobService,
              private deptService: DeptService, private locService: LocService) {
    this.createForm = fb.group({
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
    this.jobs = await this.jobService.getJob();
    this.depts = await this.deptService.getDept();
    this.locs = await this.locService.getLoc();
  }

  public getCreateForm() {
    return this.createForm;
  }

  public getJobs() {
    return this.jobs;
  }

  public getDepts() {
    return this.depts;
  }

  public getLocs() {
    return this.locs;
  }
  public onSubmit() {
    let val: string;
    let splitVal: string[];

    val = this.createForm.get("jobcode").value;
    splitVal = val.split("|");
    this.createForm.get("jobcode").setValue(splitVal[0]);
    this.createForm.get("jobtitle").setValue(splitVal[1]);

    val = this.createForm.get("departmentcode").value;
    splitVal = val.split("|");
    this.createForm.get("departmentcode").setValue(splitVal[0]);
    this.createForm.get("department").setValue(splitVal[1]);

    val  = this.createForm.get("locationcode").value;
    splitVal = val.split("|");
    this.createForm.get("locationcode").setValue(splitVal[0]);
    this.createForm.get("location").setValue(splitVal[1]);

    this.userService.createUser(this.createForm.value).subscribe((res) => {
      if (res.status === 201) {
        this.router.navigateByUrl("/");
      }
    });
  }

}
