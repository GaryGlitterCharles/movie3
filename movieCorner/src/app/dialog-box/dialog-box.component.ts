import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Movies } from "../models/movies";
import { DialogBoxService } from "../services/dialog-box.service";

@Component({
  selector: "app-dialog-box",
  templateUrl: "./dialog-box.component.html",
  styleUrls: ["./dialog-box.component.scss"]
})
export class DialogBoxComponent implements OnInit {
  cast : Movies[];
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movies,
    private dialogboxService: DialogBoxService
  ) {}

  ngOnInit() {
    this.dialogboxService.cast(this.data.dataId).subscribe(cast =>{
   
      this.cast = cast
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
