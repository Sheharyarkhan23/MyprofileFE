import { Component, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-information",
  templateUrl: './information.component.html',
})
export class InformationComponent {
  name: string = '';

  constructor(
    private _mdr: MatDialogRef<InformationComponent>,
    @Inject(MAT_DIALOG_DATA) data: dataSource
  ) {
    this.name = data.name;
  }
  CloseDialog() {
    this._mdr.close(false)
  }
}
class dataSource {
  public name: string = '';
}

