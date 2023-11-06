import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  extends BaseComponent{
 
  constructor(spinner: NgxSpinnerService, private httpClientService : HttpClientService ){
    super(spinner);
 
   }
 
   ngOnInit(): void {
 
     this.showSpinner(SpinnerType.BallAtom);
     this.httpClientService.get<Product[]>({
      controller : "products"
     }).subscribe(data => console.log(data));

     this.httpClientService.post({
     controller : "products"
     }, {
      name : "Kalem2",
      stock : 100,
      price : 15
     }).subscribe();

    // this.httpClientService.put({
    //   controller : "product"
    // },{
    //   id :"ef35134b-381a-4591-8b34-e8375eae6b53",
    //   name :"Resim Defteri",
    //   stock: 23,
    //   price : 5.5
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller :"product"
    // },"ef35134b-381a-4591-8b34-e8375eae6b53").subscribe();

   }
}
