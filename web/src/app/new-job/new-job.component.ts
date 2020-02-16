import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JobService } from "../job.service";
import { Subject } from 'rxjs';

@Component({
  selector: "new-job",
  templateUrl: "./new-job.component.html",
  styleUrls: ["./new-job.component.css"]
})
export class NewJobComponent {
  private jobForm: FormGroup;
  // Used to emit value to home component on when to show job form
  @Output() showJobForm = new EventEmitter<boolean>();
  // Used by job table to know when to refresh table
  @Input('refresh') refresh: Subject<boolean>;

  constructor(private fb: FormBuilder, private jobService: JobService) {
    this.jobForm = fb.group({
      code: fb.control("", Validators.required),
      title: fb.control("", Validators.required),
      shortdesc: fb.control("")
    });
  }

  public getJobForm() {
    return this.jobForm;
  }

  public onSubmit() {
    this.jobService.createJob(this.jobForm.value).subscribe(res => {
      if (res.status === 201) {
        // On successful submit.... 
        // emit true value to hide job form
        this.showJobForm.emit(true);
        // Push value to subject to refresh job table
        this.refresh.next(true);
        // Clear all values from job form
        this.jobForm.reset()
      }
    });

  }

  public toggleNewJobForm() {
    // Emit true when cancel button is clicked to hide job form
    this.showJobForm.emit(true);
  }

}
