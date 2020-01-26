import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DeptService } from "../dept.service";

@Component({
  selector: "dept-table",
  templateUrl: "./dept-table.component.html",
  styleUrls: ["./dept-table.component.css"]
})
export class DeptTableComponent implements OnInit {
  @Output() newDeptForm = new EventEmitter<boolean>();
  private depts: object;

  constructor(private deptService: DeptService) { }

  async ngOnInit() {
    this.depts = await this.deptService.getDept();
  }

  public toggleNewDeptForm() {
    this.newDeptForm.emit(false);
  }

  public getDepts() {
    return this.depts;
  }
}
