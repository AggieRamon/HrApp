import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DeptService } from "../dept.service";
import { Subject } from 'rxjs';

@Component({
  selector: "new-dept",
  templateUrl: "./new-dept.component.html",
  styleUrls: ["./new-dept.component.css"]
})
export class NewDeptComponent implements OnInit{
  private deptForm: FormGroup;
  // Used to emit value to home component on when to show job form
  @Output() showDeptForm = new EventEmitter<{code: number, show: boolean}>();
  // Used by dept table to know when to refresh table
  @Input('refresh') refresh: Subject<boolean>;
  // Dept Code if available
  @Input('code') code: number;
  // Heading of form
  public header: string;

  constructor(private fb: FormBuilder, private deptService: DeptService) {
    this.deptForm = fb.group({
      code: fb.control("", Validators.required),
      name: fb.control("", Validators.required),
      shortdesc: fb.control("")
    });
  }

  ngOnInit() {
    if (this.code) {
      // If Dept code is available, go through update workflow
      this.header = "Update Department"
      // Get job, and iterate through controls to update value
      this.deptService.getDeptById(this.code).subscribe(jobs => {
        let job = jobs[0];
        for (let ctrl in this.deptForm.controls) {
          this.deptForm.get(ctrl).setValue(job[ctrl]);
        }
      })
    } else {
      this.header = "New Department"
    }
  }

  public getDeptForm() {
    return this.deptForm;
  }

  public onSubmit() {
    if (this.code) {
      this.deptService.updateDept(this.deptForm.value, this.code).subscribe(res => {
        if (res.status === 200) {
          // On successful submit.... 
          // emit true value to hide job form
          this.showDeptForm.emit({
            code: null,
            show: false
          });
          // Push value to subject to refresh job table
          this.refresh.next(true);
          // Clear all values from job form
          this.deptForm.reset()
        }
      })
    } else {
      this.deptService.createDept(this.deptForm.value).subscribe(res => {
        if (res.status === 201) {
          // On successful submit.... 
          // emit true value to hide dept form
          this.showDeptForm.emit({
            code: null,
            show: false
          });
          // Push value to subject to refresh dept table
          this.refresh.next(true);
          // Clear all values from job form
          this.deptForm.reset()
        }
      });
    }
  }

  public toggleDeptForm() {
    // Emit true when cancel button is clicked to hide dept form
    this.showDeptForm.emit({
      code: null,
      show: false
    });
  }

}
