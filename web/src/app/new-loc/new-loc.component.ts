import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocService } from "../loc.service";
import { Subject } from 'rxjs';

@Component({
  selector: "new-loc",
  templateUrl: "./new-loc.component.html",
  styleUrls: ["./new-loc.component.css"]
})
export class NewLocComponent implements OnInit{
  private locForm: FormGroup;
  // Used to emit value to home component on when to show loc form
  @Output() showLocForm = new EventEmitter<{code: number, show: boolean}>();
  // Used by loc table to know when to refresh table
  @Input('refresh') refresh: Subject<boolean>;
  // Loc Code if available
  @Input('code') code: number;
  // Heading of form
  public header: string;

  constructor(private fb: FormBuilder, private locService: LocService) {
    this.locForm = fb.group({
      code: fb.control("", Validators.required),
      name: fb.control("", Validators.required),
      shortdesc: fb.control("")
    });
  }

  ngOnInit() {
    if (this.code) {
      // If loc code is available, go through update workflow
      this.header = "Update Location"
      // Get job, and iterate through controls to update value
      this.locService.getLocById(this.code).subscribe(locs => {
        let loc = locs[0];
        for (let ctrl in this.locForm.controls) {
          this.locForm.get(ctrl).setValue(loc[ctrl]);
        }
      })
    } else {
      this.header = "New Location"
    }
  }

  public getLocForm() {
    return this.locForm;
  }

  public onSubmit() {
    if (this.code) {
      this.locService.updateLoc(this.locForm.value, this.code).subscribe(res => {
        if (res.status === 200) {
          // On successful submit.... 
          // emit true value to hide job form
          this.showLocForm.emit({
            code: null,
            show: false
          });
          // Push value to subject to refresh job table
          this.refresh.next(true);
          // Clear all values from job form
          this.locForm.reset()
        }
      })
    } else {
      this.locService.createLoc(this.locForm.value).subscribe(res => {
        if (res.status === 201) {
          // On successful submit.... 
          // emit true value to hide job form
          this.showLocForm.emit({
            code: null,
            show: false
          });
          // Push value to subject to refresh job table
          this.refresh.next(true);
          // Clear all values from job form
          this.locForm.reset()
        }
      });
    }
  }

  public toggleLocForm() {
    // Emit true when cancel button is clicked to hide loc form
    this.showLocForm.emit({
      code: null,
      show: false
    });
  }


}
