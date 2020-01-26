import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { JobService } from "../job.service";

@Component({
  selector: "job-table",
  templateUrl: "./job-table.component.html",
  styleUrls: ["./job-table.component.css"]
})
export class JobTableComponent implements OnInit {
  @Output() newJobForm = new EventEmitter<boolean>();
  private jobs: object;

  constructor(private jobService: JobService) { }

  async ngOnInit() {
    this.jobs = await this.jobService.getJob();
  }

  public toggleNewJobForm() {
    this.newJobForm.emit(false);
  }

  public getJobs() {
    return this.jobs;
  }

}
