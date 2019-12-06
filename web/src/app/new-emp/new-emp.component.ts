import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "new-emp",
  templateUrl: "./new-emp.component.html",
  styleUrls: ["./new-emp.component.css"]
})
export class NewEmpComponent implements OnInit {
  private createForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm = fb.group({
      firstName: fb.control("", Validators.required),
      middleName: fb.control(""),
      lastName: fb.control("", Validators.required),
      preferredFirstName: fb.control(""),
      preferredLastName: fb.control(""),
      email: fb.control("", Validators.required),
      jobTitle: fb.control("", Validators.required),
      departmentName: fb.control("", Validators.required),
      locationName: fb.control("", Validators.required),
      manager: fb.control("", Validators.required)
    });
  }

  ngOnInit() {
  }

  private onSubmit() {
    console.log(this.createForm.value);
    console.log(this.createForm.invalid);
  }

}
