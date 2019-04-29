import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddHandlerComponent } from '../app/add-handler/add-handler.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'TweetsHandler';
  constructor(public dialog: MatDialog){}
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
    };


    this.dialog.open(AddHandlerComponent, dialogConfig);

    // let dialogRef = this.dialog.open(AddHandlerComponent, dialogConfig);

    // dialogRef.afterClosed().subscribe();  
    
  }
  

} 
