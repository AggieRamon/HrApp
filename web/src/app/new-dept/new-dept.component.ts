import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DeptService } from "../dept.service";
import { Subject } from 'rxjs';

@Component({
  selector: "new-dept",
  templateUrl: "./new-dept.component.html",
  styleUrls: ["./new-dept.component.css"]
})
export class NewDeptComponent {
  private deptForm: FormGroup;
  // Used to emit value to home component on when to show job form
  @Output() newDeptForm = new EventEmitter<boolean>();
  // Used by dept table to know when to refresh table
  @Input('refresh') refresh: Subject<boolean>;

  constructor(private fb: FormBuilder, private deptService: DeptService) {
    this.deptForm = fb.group({
      code: fb.control("", Validators.required),
      name: fb.control("", Validators.required),
      shortdesc: fb.control("")
    });
  }

  public getDeptForm() {
    return this.deptForm;
  }

  public onSubmit() {
    this.deptService.createDept(this.deptForm.value).subscribe(res => {
      if (res.status === 201) {
        // On successful submit.... 
        // emit true value to hide dept form
        this.newDeptForm.emit(true);
        // Push value to subject to refresh dept table
        this.refresh.next(true);
        // Clear all values from job form
        this.deptForm.reset()
      }
    });

  }

  public toggleNewDeptForm() {
    // Emit true when cancel button is clicked to hide dept form
    this.newDeptForm.emit(true);
  }

}
