import { Component, OnInit } from '@angular/core';
import { PriceTableService } from '../priceTable.service';

@Component({
  selector: 'app-pricetable',
  templateUrl: './pricetable.component.html',
  styleUrls: ['./pricetable.component.css']
})
export class PricetableComponent implements OnInit {

  constructor(private priceService:PriceTableService) { }

  onGetData(){
    console.log("check");
    
    console.log(this.priceService.getPrices())
  }
  ngOnInit() {
   
  }

}
