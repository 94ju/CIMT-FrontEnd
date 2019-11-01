import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 // In this componenet I have added some dummy data this part is for future Implementations
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'}
  ];
  PieChart=[];
  BarChart=[];
  constructor() { }

  ngOnInit() {
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
    data: {
     labels: ["AWS", "GCP", "AZURE","ORACLE"],
     datasets: [{
         label: '# of Votes',
         data: [9,7 , 3,10 ],
         backgroundColor: [
          'rgba(191, 63, 127,0.5)',
             'rgba(63, 127, 191,0.3)',
             'rgb(63, 191, 127)',
             'rgb(209, 45, 45)'
         ],
         borderColor: [
             'rgba(191, 63, 127,0.5)',
             'rgba(63, 127, 191,0.3)',
             'rgba(63, 191, 127)',
            'rgb(209, 45, 45)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Bar Chart",
         display:false
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:false
             }
         }]
     }
    }
    });
    
    this.BarChart = new Chart('barChart1', {
      type: 'bar',
    data: {
     labels: ["January", "February", "March","April","May","June","July"],
     datasets: [{
         label: '',
         data: [9,7 , 3, 5,8,4,7],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
            
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
      
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
    this.BarChart = new Chart('barChart2', {
      type: 'bar',
    data: {
     labels: ["January", "February", "March","April","May","June","July"],
     datasets: [{
         label: '',
         data: [9,7 , 3, 5,8,4,7],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
            
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
      
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
    this.BarChart = new Chart('barChart3', {
      type: 'bar',
    data: {
     labels: ["January", "February", "March","April","May","June","July"],
     datasets: [{
         label: '',
         data: [9,7 , 3, 5,8,4,7],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
            
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
      
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
    this.BarChart = new Chart('barChart4', {
      type: 'bar',
    data: {
     labels: ["January", "February", "March","April","May","June","July"],
     datasets: [{
         label: '',
         data: [9,7 , 3, 5,8,4,7],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
            
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
      
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }

}
