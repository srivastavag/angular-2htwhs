import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items;

  constructor(
     private cartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}