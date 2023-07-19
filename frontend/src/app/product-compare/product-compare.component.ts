// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../_services/product.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Product1 } from '../all-products/Product1';

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.css']
})
export class ProductCompareComponent implements OnInit {
  constructor(){}
  ngOnInit(): void{}
//   productId : number = 0;

//   userName: String = "";

//   productDetails : Product1 ={
//     productId: 0,
//     brand: "",
//     productName: "",
//     productDescription: "",
//     productDiscountedPrice: 0,
//     productActualPrice: 0,
//     imageURL: "",
//     ratings: 0
//   };
//   http: any;

//   constructor(private productService : ProductService, private router : Router, private route: ActivatedRoute) { }

//   ngOnInit(): void {

//     this.route.queryParams.subscribe(params => {
//       this.productId = params['productId'];
//      // Use the orderId in your component logic
//      this.userName = localStorage.getItem('name');
//      console.log(this.userName);
//      console.log('Received ProductId:', this.productId);

//      this.getProductDetails(this.productId);
//    });
//   }

//   getProductDetails(productId: number){
//     // this.productService.getProductDetailsForUserCart(productId).subscribe(
//     //   (resp: any) => {
//     //     console.log(resp);
//     //     this.productDetails = resp;

//     //     console.log(this.productDetails.brand);
//     //   }, (err) => {
//     //     console.log(err);
//     //   }
//     // )
//     {
//       const productIds = JSON.parse(localStorage.getItem('productCompare') || '[]');
//       productIds.forEach((productId: string) => {
//         this..subscribe(
//           (response: any) => {
//             // Handle the fetched product data
//             console.log(response);
//           },
//           (error: any) => {
//             console.error(error);
//           }
//         );
//       });
//   }

 
}
