import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { JobService } from "../job.service";

@Component({
  selector: "new-job",
  templateUrl: "./new-job.component.html",
  styleUrls: ["./new-job.component.css"]
})
export class NewJobComponent {
  private jobForm: FormGroup;
  @Output() newJobForm = new EventEmitter<boolean>();

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
    console.log(this.jobForm.value);
    this.jobService.createJob(this.jobForm.value).subscribe(res => {
      console.log(res);
      if (res.status === 201) {
        this.newJobForm.emit(true);
      }
    });

  }

  public toggleNewJobForm() {
    this.newJobForm.emit(true);
  }

}
