import { Injectable } from '@angular/core';
import { cartList } from './db';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  addToCart(product: product) {
    let flag:boolean = false;
    for (let i = 0; i < cartList.length; i++) {
      if(cartList[i]==product) {
        cartList[i].itemCount = product.itemCount;
        flag = true;
      }
    }
    if(flag==false) {
      cartList.push(product);
    }
  }

  constructor() { }

  deleteProductFromCart(index:number):void {
        cartList.splice(index,1);
    
  }

  // getItemCount():number { return this.itemCount; }

  
}
