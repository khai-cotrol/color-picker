import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[]=[
    {
      id:1,
      name:'yeeyz350',
      img:'https://cdn.under.vn/wp-content/uploads/2020/03/adidas-yeezy-boost-350-doi-mau-rep-0.jpg',
      price:"5,000,000",
      categories:'Adidas'
    },
    {
      id:1,
      name:'Air force 1',
      img:'https://phunuduongthoi.vn/wp-content/uploads/2020/02/6-%C4%91%C3%B4i-gi%C3%A0y-Nike-nhi%E1%BB%81u-m%C3%A0u-s%E1%BA%AFc-%C4%91%C6%B0%E1%BB%A3c-h%E1%BB%99i-ch%E1%BB%8B-em-y%C3%AAu-th%C3%ADch-nh%E1%BA%A5t-7.jpg',
      price:"2,000,000",
      categories:'Nike'
    },{
      id:1,
      name:'jodan1',
      img:'https://booauthenticsneaker.com/wp-content/uploads/BooAuthenticSneaker-Nike-Air-Jordan-1-Retro-High-OG-University-Blue-555088-134-b.jpg',
      price:"20,000,000",
      categories:'Nike'
    }
  ]
  showImage:boolean= false;

  constructor() { }

  ngOnInit(): void {
  }
  showHideImage(){
    this.showImage =!this.showImage
  }
  textcolor:any ="#000000";


}
