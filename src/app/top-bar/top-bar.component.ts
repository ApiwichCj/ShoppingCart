import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  cartCount = 0;
  notifierSubscription: Subscription = this.cartService.event.subscribe(notified => {
    this.cartCount = this.cartService.getCartItemCount();
  });
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.notifierSubscription.unsubscribe();
  }

}
