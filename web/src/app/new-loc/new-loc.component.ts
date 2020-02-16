import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocService } from "../loc.service";
import { Subject } from 'rxjs';

@Component({
  selector: "new-loc",
  templateUrl: "./new-loc.component.html",
  styleUrls: ["./new-loc.component.css"]
})
export class NewLocComponent {
  private locForm: FormGroup;
  // Used to emit value to home component on when to show loc form
  @Output() newLocForm = new EventEmitter<boolean>();
  // Used by loc table to know when to refresh table
  @Input('refresh') refresh: Subject<boolean>;

  constructor(private fb: FormBuilder, private locService: LocService) {
    this.locForm = fb.group({
      code: fb.control("", Validators.required),
      name: fb.control("", Validators.required),
      shortdesc: fb.control("")
    });
  }

  public getLocForm() {
    return this.locForm;
  }

  public onSubmit() {
    this.locService.createLoc(this.locForm.value).subscribe(res => {
      if (res.status === 201) {
        // On successful submit.... 
        // emit true value to hide job form
        this.newLocForm.emit(true);
        // Push value to subject to refresh job table
        this.refresh.next(true);
        // Clear all values from job form
        this.locForm.reset()
      }
    });

  }

  public toggleNewLocForm() {
    // Emit true when cancel button is clicked to hide loc form
    this.newLocForm.emit(true);
  }


}
