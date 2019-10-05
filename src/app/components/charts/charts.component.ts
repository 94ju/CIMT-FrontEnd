import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  name = 'Janiya';
  PieChart=[];
  BarChart=[];
  ngOnInit(){
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
    

    this.BarChart = new Chart('barChart', {
      type: 'bar',
    data: {
     labels: ["AWS", "GCP", "AZURE","ORACLE"],
     datasets: [{
         label: '# of Votes',
         data: [9,7 , 3, 5],
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
         text:"Bar Chart",
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
