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
  private editForm: FormGroup;
  private user;
  private jobs;
  private depts;
  private locs;
  private userId: string;

  constructor(private fb: FormBuilder, private userService: UserService,
              private router: Router, private jobService: JobService,
              private deptService: DeptService, private locService: LocService) {
    this.userId = this.router.url.replace("/edit/", "");
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
    this.userId = this.router.url.replace("/edit/", "");
  }

  async ngOnInit() {
    this.jobs = await this.jobService.getJob();
    this.depts = await this.deptService.getDept();
    this.locs = await this.locService.getLoc();

    const res = await this.userService.getUserById(this.userId);
    this.user = res[0];
    const valuesObject = {};
    Object.keys(this.editForm.controls).forEach(key => {
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
    this.editForm.setValue(valuesObject);
  }

  private onSubmit() {
    let val: string;
    let splitVal: string[];

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
        this.router.navigateByUrl("/");
      }
    });
  }
}
