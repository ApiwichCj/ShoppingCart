import { destroyPlatform, EventEmitter, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CartItem, Product, products } from './product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartitems: Product[] = [];
  test: CartItem[] = [];
  total = 0;
  amounttotal = 0;
  event: EventEmitter<null> = new EventEmitter();

  constructor() { }

  notifyDataChange() {
    this.event.emit();
  }


  addToCart(p: Product) { 
    //stack product
    let index = -1;
    index = this.cartitems.findIndex(
      l => l.id === p.id
      );
        if (index != -1){
          this.cartitems[index].quanity += 1;
        } else if(index === -1){
          this.cartitems.push(p)
        }
      
        //add p.price to total
      this.total += p.price;
      this.notifyDataChange();

      //add Amount
      this.amounttotal += 1;
      }


  getAmount(){
    return this.amounttotal
  }

  getCartItem(){
    return this.cartitems;
  }

  getCartItemCount() {
    return this.cartitems.length;
  }

  getTotal(){
    return this.total;
  }

  clearCart(){ 

    this.cartitems = [];
    this.notifyDataChange();
    this.total = 0;
    this.amounttotal = 0;
    return this.cartitems;
  }

  deleteItem(i: Product){
      //stack product
      let index = -1;
      index = this.cartitems.findIndex(
        l => l.id === i.id
        );
        if (this.cartitems[index].quanity === 0){

          return;

          }else if (index != -1){
            this.cartitems[index].quanity -= 1;
            this.total -= i.price;
          this.amounttotal -= 1;
          } else if(index === -1){
            this.cartitems.push(i)
          }
        
        this.notifyDataChange();
        
   }
}
