import { Component, OnInit } from '@angular/core';
import {NewService} from '../new.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.css']
})
export class RightPanelComponent implements OnInit {
  public key: any= [];
  public values: any=[];
  public myData:any=[];
  public dateCount: any = {};
  public chartOptions: any = {};
  public labels: any =[];
  public chartData: any = [];
  public colors: any = [];

  constructor(private srv: NewService) { 
    this.srv.getHandleData.subscribe(abc=>{
      if(abc['date']){
        this.myData.push(abc);
        this.dateCount[abc['date']] = this.dateCount[abc['date']] ? this.dateCount[abc['date']] + 1 : 1;
      }
      this.key=Object.keys(this.dateCount);
      this.values=Object.values(this.dateCount);
      this.reloadGraph(this.key, this.values);
    });
  }

  reloadGraph(graphXAxix, graphYAxix) {
    this.chartOptions = {
      responsive: true,
      scales: {
        xAxes: [ {
          scaleLabel: {
            display: true,
            labelString: 'Handle on each Date'
          },
        } ],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 10,
                stepSize: 1
            },
            scaleLabel: {
            display: true,
            labelString: 'Number of times on each Date'
          }
        }]
      }
    };

    this.labels=graphXAxix;
  
    this.chartData = [
      {
        label: 'Number of Tweets',
        data: graphYAxix
      }
    ];
  
    this.colors = [
      { 
        backgroundColor: 'rgba(30, 169, 224, 0.8)'
      },
    ]
    
  }

  ngOnInit() {
  }

}
