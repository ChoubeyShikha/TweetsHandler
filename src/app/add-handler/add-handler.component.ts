import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormGroup, FormControl } from '@angular/forms';
import { NewService } from '../new.service';

@Component({
  selector: 'app-add-handler',
  templateUrl: './add-handler.component.html',
  styleUrls: ['./add-handler.component.css']
})
export class AddHandlerComponent implements OnInit {
    form: FormGroup;
    description:string;
    heading: string;
    date: number;
    myData: any={};
    dateFormat: any;

  constructor(
        private dialogRef: MatDialogRef<AddHandlerComponent>,
        private newSrv: NewService
  ) { 
  }

  ngOnInit() {
    this.form = new FormGroup({
      heading : new FormControl(''),
      description:new FormControl(''),
      date: new FormControl('')
    });
  }

  save() {
    this.dateFormat =this.form.value.date.getDate()+ '/'+ this.form.value.date.getMonth( )+ '/'+ this.form.value.date.getFullYear();
    this.myData = {
      heading: this.form.value.heading,
      description:this.form.value.description,
      date: this.dateFormat
    };
    this.newSrv.setData(this.myData);
    this.dialogRef.close();
  }

close() {
    this.dialogRef.close();

}

}
