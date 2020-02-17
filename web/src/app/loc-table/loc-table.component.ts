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
  @Output() showLocForm = new EventEmitter<{code: number, show: boolean}>();
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

  public toggleLocForm(el: HTMLElement) {
    let locCode = null;
    if (el.innerText !== "CREATE") {
      locCode = Number(el.innerText);
    }
    // When toggled emit event to show loc component
    this.showLocForm.emit({
      code: locCode,
      show: true
    });
  }

  public getLocs() {
    return this.locs;
  }

  public delete(el: HTMLElement, e: Event) {
    e.stopPropagation();
    let result = confirm("Are you sure you want to delete?")
    if (result) {
      this.locService.deleteLoc(Number(el.innerText)).subscribe(res => {
        if (res.status === 200) {
          this.queryLocs()
        }
      })
    }
  }

  private async queryLocs() {
    // Call loc service to query locations
    this.locs = await this.locService.getLoc();
  }
}
