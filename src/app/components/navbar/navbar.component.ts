import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product';
import {HttpClient} from '@angular/common/http';
import { SharedServiceService } from 'src/app/shared-service.service';
import { cartList } from 'src/app/db';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart = 'none';
  cartList:product[] = [];
  itemCount: number = 0;
  constructor(private _http: HttpClient, private _service: SharedServiceService) { }

  ngOnInit(): void {
    
  }

  showCart(): void {
    this.cart = 'block';
    this.cartList = cartList;
  }

  hideCart(): void {
      this.cart = 'none';
  }

  removeFromCart(index: number): void {
    this._service.deleteProductFromCart(index);
  }
}
