import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LocService } from "../loc.service";

@Component({
  selector: "new-loc",
  templateUrl: "./new-loc.component.html",
  styleUrls: ["./new-loc.component.css"]
})
export class NewLocComponent implements OnInit {
  private locForm: FormGroup;
  @Output() newLocForm = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private locService: LocService) {
    this.locForm = fb.group({
      code: fb.control("", Validators.required),
      name: fb.control("", Validators.required),
      shortdesc: fb.control("")
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.locForm.value);
    this.locService.createLoc(this.locForm.value).subscribe(res => {
      console.log(res);
      if (res.status === 201) {
        this.newLocForm.emit(true);
      }
    });

  }

  private toggleNewLocForm() {
    this.newLocForm.emit(true);
  }


}
