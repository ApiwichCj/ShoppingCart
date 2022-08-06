import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  

  items = this.cartService.getCartItem();
  total = this.cartService.getTotal();
  amount = this.cartService.getAmount();

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
  }
  clearCart(){ 
    this.items = [];
    this.cartService.clearCart();
    this.total= this.cartService.getTotal();
    this.amount = this.cartService.getAmount();
    return this.cartService.getCartItem;
  }

  deleteItem(i:Product){
    this.cartService.deleteItem(i);
    this.total=this.cartService.getTotal();
    this.amount=this.cartService.getAmount();
  }
  
}
