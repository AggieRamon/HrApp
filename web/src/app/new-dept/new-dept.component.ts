import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DeptService } from "../dept.service";

@Component({
  selector: "new-dept",
  templateUrl: "./new-dept.component.html",
  styleUrls: ["./new-dept.component.css"]
})
export class NewDeptComponent implements OnInit {
  private deptForm: FormGroup;
  @Output() newDeptForm = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private deptService: DeptService) {
    this.deptForm = fb.group({
      code: fb.control("", Validators.required),
      name: fb.control("", Validators.required),
      shortdesc: fb.control("")
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.deptForm.value);
    this.deptService.createDept(this.deptForm.value).subscribe(res => {
      if (res.status === 201) {
        this.newDeptForm.emit(true);
      }
    });

  }

  private toggleNewDeptForm() {
    this.newDeptForm.emit(true);
  }

}
