import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IgProduct } from 'src/app/shared/model/data';
import { GoogleProductService } from 'src/app/shared/services/google-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product!: IgProduct | undefined;
  constructor(private googleProductService: GoogleProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
                .subscribe((params : Params) => {
                  this.product = this.googleProductService.getSingleProduct(params['name']);
                })
  }

}
