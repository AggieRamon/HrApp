import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { LocService } from "../loc.service";
import { Subject } from 'rxjs';

@Component({
  selector: "loc-table",
  templateUrl: "./loc-table.component.html",
  styleUrls: ["./loc-table.component.css"]
})
export class LocTableComponent implements OnInit {
  // Event emitter to alert home component to show new loc component
  @Output() newLocForm = new EventEmitter<boolean>();
  // Subscribe to refresh input to refresh loc table on creation of new location
  @Input('refresh') refresh: Subject<boolean>;
  // Variable to hold queried locations
  private locs: object;

  constructor(private locService: LocService) { }

  ngOnInit() {
    this.queryLocs();
    // Subscribe to refresh subject in order to determine when to update locations
    this.refresh.subscribe(refresh => {
      if (refresh) {
        this.queryLocs()
      }
    })
  }

  public toggleNewLocForm() {
    // When create button is clicked emit event to show new loc component
    this.newLocForm.emit(false);
  }

  public getLocs() {
    return this.locs;
  }

  private async queryLocs() {
    // Call loc service to query locations
    this.locs = await this.locService.getLoc();
  }
}
