import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { LocService } from "../loc.service";

@Component({
  selector: "loc-table",
  templateUrl: "./loc-table.component.html",
  styleUrls: ["./loc-table.component.css"]
})
export class LocTableComponent implements OnInit {
  @Output() newLocForm = new EventEmitter<boolean>();
  private locs: object;

  constructor(private locService: LocService) { }

  async ngOnInit() {
    this.locs = await this.locService.getLoc();
  }

  public toggleNewLocForm() {
    this.newLocForm.emit(false);
  }

  public getLocs() {
    return this.locs;
  }
}
