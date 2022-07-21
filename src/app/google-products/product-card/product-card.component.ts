import { Component, Input, OnInit } from '@angular/core';
import { IgProduct } from 'src/app/shared/model/data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product!:IgProduct;
  constructor() { }

  ngOnInit(): void {
    
  }

}
