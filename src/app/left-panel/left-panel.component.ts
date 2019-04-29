import { Component, OnInit, Input } from '@angular/core';
import { NewService } from '../new.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  public gridData: any=[];

  constructor(private newSrv: NewService) {
    this.newSrv.getHandleData.subscribe(getData=>{
      if(getData['heading']){
        this.gridData.unshift(getData);
      }
    });
   }

  ngOnInit() {
    
  }

}
