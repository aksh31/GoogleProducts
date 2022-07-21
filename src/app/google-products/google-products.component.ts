import { Component, OnInit } from '@angular/core';
import { IgProduct } from '../shared/model/data';
import { GoogleProductService } from '../shared/services/google-product.service';

@Component({
  selector: 'app-google-products',
  templateUrl: './google-products.component.html',
  styleUrls: ['./google-products.component.scss']
})
export class GoogleProductsComponent implements OnInit {

  productsArray : IgProduct[] = [];
  originalArray : IgProduct[] = [];
  constructor(private googleProductService : GoogleProductService) { }

  ngOnInit(): void {
    this.productsArray = this.originalArray = this.googleProductService.getProductsArray();
  }


  onSerachHandler(input : string){
    let val = input.toLowerCase();
    input === '' ? this.productsArray = this.originalArray : this.productsArray = this.productsArray.filter(prod => prod.name.toLowerCase().includes(val));

    // if(input === ''){
    //   this.productsArray = this.originalArray;
    // }else{
    //   this.productsArray = this.productsArray.filter(prod => prod.name.toLowerCase().includes(val))
    // }
  }

  onSelectHandler(option : string){
    if(option){
      this.productsArray = this.originalArray;
      this.productsArray = this.productsArray.filter(prod => prod.type === option);
    }
    if(option === 'All'){
      this.productsArray = this.originalArray;
    }
  }
}
