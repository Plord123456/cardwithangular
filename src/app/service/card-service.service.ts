import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  constructor() {}

  products = [
    {
      id: 1,
      name: 'shiba 1',
      description: 'Boy',
      price: 20000,
      inStock: 10,
    },
    {
      id: 2,
      name: 'shiba 2',
      description: 'Girl',
      price: 30000,
      inStock: 10,
    },
    {
      id: 3,
      name: 'Shiba 3',
      description: 'Boy',
      price: 30000,
      inStock: 15,
    },
  ];

  cart: any[] = [];
  totalBill: number = 0;

  addToCart(item: any) {
    if (this.products[item.id - 1].inStock == 0) {
      return;
    }
    let index = this.cart.findIndex((element) => element.id === item.id);
    this.products[item.id - 1].inStock--;
    if (index != -1) {
      this.cart[index].quantity++;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    this.calculateTotalBill();
  }

  removeFromCart(index: number) {
    if (index >= 0 && index < this.cart.length) {
      this.cart.splice(index, 1);
      this.calculateTotalBill();
    }
  }

  calculateTotalBill() {
    this.totalBill = this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    console.log(`Total bill:`, this.totalBill);
    return this.totalBill;
  }
}
