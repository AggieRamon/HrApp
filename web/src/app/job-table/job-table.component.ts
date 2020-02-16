import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { JobService } from "../job.service";
import { Observable, Subject } from 'rxjs';

@Component({
  selector: "job-table",
  templateUrl: "./job-table.component.html",
  styleUrls: ["./job-table.component.css"]
})
export class JobTableComponent implements OnInit {
  // Event emitter to alert home component to show new job component
  @Output() showJobForm = new EventEmitter<boolean>();
  // Subscribe to refresh input to refresh job table on creation of new job
  @Input('refresh') refresh: Subject<boolean>;
  // Variable to hold queried jobs
  private jobs: object;

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.queryJobs()
    // Subscribe to refresh subject in order to determine when to update jobs
    this.refresh.subscribe(refresh => {
      if (refresh) {
        this.queryJobs()
      }
    })
  }

  public toggleNewJobForm() {
    // When create button is clicked emit event to show new job component
    this.showJobForm.emit(false);
  }

  public getJobs() {
    return this.jobs;
  }

  private async queryJobs() {
    // Call job service to query jobs
    this.jobs = await this.jobService.getJob() 
  }

}
