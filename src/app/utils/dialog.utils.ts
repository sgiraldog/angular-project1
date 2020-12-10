import { MatDialogConfig } from '@angular/material/dialog';
import { DialogData } from '../modules/pokemon/models/dialog-data';

export class DialogUtils {
  
  static getDefaultDialogConfig(): MatDialogConfig<DialogData> {
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.width = '80vw';
    config.maxWidth = '50rem';
    return config;
  };
}