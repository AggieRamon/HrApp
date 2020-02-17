import { Component, Output, EventEmitter, Input, OnInit, HostListener } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JobService } from "../job.service";
import { Subject } from 'rxjs';

@Component({
  selector: "new-job",
  templateUrl: "./new-job.component.html",
  styleUrls: ["./new-job.component.css"]
})
export class NewJobComponent implements OnInit {
  private jobForm: FormGroup;
  // Used to emit value to home component on when to show job form
  @Output() showJobForm = new EventEmitter<{ code: number, show: boolean }>();
  // Used by job table to know when to refresh table
  @Input('refresh') refresh: Subject<boolean>;
  // Job Code if available
  @Input('code') code: number;
  // Heading of form
  public header: string;

  constructor(private fb: FormBuilder, private jobService: JobService) {
    this.jobForm = fb.group({
      code: fb.control("", Validators.required),
      title: fb.control("", Validators.required),
      shortdesc: fb.control("")
    });
  }

  ngOnInit() {
    if (this.code) {
      // If job code is available, go through update workflow
      this.header = "Update Job"
      // Get job, and iterate through controls to update value
      this.jobService.getJobById(this.code).subscribe(jobs => {
        let job = jobs[0];
        for (let ctrl in this.jobForm.controls) {
          this.jobForm.get(ctrl).setValue(job[ctrl]);
        }
      })
    } else {
      this.header = "New Job"
    }
  }

  public getJobForm() {
    return this.jobForm;
  }

  public onSubmit() {
    if (this.code) {
      this.jobService.updateJob(this.jobForm.value, this.code).subscribe(res => {
        if (res.status === 200) {
          // On successful submit.... 
          // emit true value to hide job form
          this.showJobForm.emit({
            code: null,
            show: false
          });
          // Push value to subject to refresh job table
          this.refresh.next(true);
          // Clear all values from job form
          this.jobForm.reset()
        }
      })
    } else {
      this.jobService.createJob(this.jobForm.value).subscribe(res => {
        if (res.status === 201) {
          // On successful submit.... 
          // emit true value to hide job form
          this.showJobForm.emit({
            code: null,
            show: false
          });
          // Push value to subject to refresh job table
          this.refresh.next(true);
          // Clear all values from job form
          this.jobForm.reset()
        }
      });
    }
  }

  public toggleJobForm() {
    // Emit true when cancel button is clicked to hide job form
    this.showJobForm.emit({
      code: null,
      show: false
    });
  }
}
