import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/product';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  mainImageSrc: string = '../../../assets/images/image-product-1.jpg';
  itemCount: number = 0;

  constructor(private _service:SharedServiceService) { }

  ngOnInit(): void {
  }

  smallToLargeImageSrc(src:Number): void {
    switch(src){
      case 0:
        this.mainImageSrc = '../../../assets/images/image-product-1.jpg';
        break;
      case 1:
        this.mainImageSrc = '../../../assets/images/image-product-2.jpg';
        break;
      case 2:
        this.mainImageSrc = '../../../assets/images/image-product-3.jpg';
        break;
      case 3:
        this.mainImageSrc = '../../../assets/images/image-product-4.jpg';
        break;
    }
  }

  increment(){
    this.itemCount++;
  }
  decrement(){
    this.itemCount = this.itemCount==0?0:this.itemCount-1;
  }

  addToCart(){
    let product: product = {
        image: "../../../assets/images/image-product-1-thumbnail.jpg",
        name:"Fall Limited Sneakers",
        itemCount: this.itemCount,
        itemPrice: 350
    }
    this._service.addToCart(product);
    this.itemCount = 0;
  }

  

}
