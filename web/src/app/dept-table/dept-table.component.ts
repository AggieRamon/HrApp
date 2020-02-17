import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DeptService } from "../dept.service";
import { Subject } from 'rxjs';

@Component({
  selector: "dept-table",
  templateUrl: "./dept-table.component.html",
  styleUrls: ["./dept-table.component.css"]
})
export class DeptTableComponent implements OnInit {
  // Event emitter to alert home component to show new dept component
  @Output() showDeptForm = new EventEmitter<{code: number, show: boolean}>();
  // Subscribe to refresh input to refresh dept table on creation of new department
  @Input('refresh') refresh: Subject<boolean>;
  // Variable to hold queried jobs
  private depts: object;

  constructor(private deptService: DeptService) { }

  ngOnInit() {
    this.queryDepts();
    // Subscribe to refresh subject in order to determine when to update jobs
    this.refresh.subscribe(refresh => {
      if (refresh) {
        this.queryDepts()
      }
    })
  }

  public toggleDeptForm(el: HTMLElement) {
    let deptCode = null;
    if (el.innerText !== "CREATE") {
      deptCode = Number(el.innerText)
    }
    // When toggled emit event to show dept component
    this.showDeptForm.emit({
      code: deptCode,
      show: true
    });
  }

  public getDepts() {
    return this.depts;
  }

  private async queryDepts() {
    // Call job service to query jobs
    this.depts = await this.deptService.getDept();
  }
}
