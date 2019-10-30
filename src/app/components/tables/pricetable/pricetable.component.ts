import { Component, OnInit } from '@angular/core';
import { PriceTableService } from '../priceTable.service';
import { map } from 'rxjs/operators';
export interface PriceList {
  category:string,
  cpu:string,
  gpusPerVm:string,
  memPerVm:string,
  ntwPerf:string,
  ntwPerfCategory:string,
  onDemandPrice:string  
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-pricetable',
  templateUrl: './pricetable.component.html',
  styleUrls: ['./pricetable.component.css']
})
export class PricetableComponent implements OnInit {

  constructor(private priceService:PriceTableService) { }
  // displayedColumns: string[] = ['category', 'cpu', 'gpusPerVm'];
  displayedColumns: string[] = ['category', 'cpu', 'gpusPerVm','memPerVm','ntwPerf','ntwPerfCategory','onDemandPrice'];
  dataSource:PriceList[]=[]
 
   datasource1;
  // displayedColumns: string[] = ['Catergory', 'Machine Type', 'CPUs', 'Memory','Network','On-Demand-Price(Linux)','AVG.Spot Price'];
   onGetData(comtype:string){
      this.priceService.getPrices(comtype)
      .pipe(map((pricedata)=>{
          console.log(pricedata)
          return pricedata.products.map(price=>{
            return{
              
              category:price.category,
              cpu:price.cpusPerVm,
              gpusPerVm:price.gpusPerVm,
              memPerVm:price.memPerVm,
              ntwPerf:price.ntwPerf,
              ntwPerfCategory:price.ntwPerfCategory,
              onDemandPrice:price.onDemandPrice  
            }
          })
      })).
      subscribe(data=>{
        console.log(data);
        this.dataSource=data
      });
   }
  ngOnInit() {
    this.priceService.getPrices('compute')
    .pipe(map((pricedata)=>{
        console.log(pricedata)
        return pricedata.products.map(price=>{
          return{
            
            category:price.category,
            cpu:price.cpusPerVm,
            gpusPerVm:price.gpusPerVm,
            memPerVm:price.memPerVm,
            ntwPerf:price.ntwPerf,
            ntwPerfCategory:price.ntwPerfCategory,
            onDemandPrice:price.onDemandPrice  
          }
        })
    })).
    subscribe(data=>{
      this.dataSource=data
      console.log(this.dataSource);
    });
  }

  onAWS(){
    console.log("check table")
  }
  compute(){
    this.onGetData('compute')
    console.log("Compute>>>")
  }
  eks(){
    this.onGetData('eks')
    console.log("eks")
  }
  pke(){
    this.onGetData('pke')
    console.log("eks")
  }
  gcloud(){
    this.onGetData('gcloud')
  }
  gke(){
    this.onGetData('gke')
  }
  acloud(){
    this.onGetData('acloud')
  }
  ake(){
    this.onGetData('acloud')
  }

}
