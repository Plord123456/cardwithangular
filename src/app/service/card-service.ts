import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class CardServiceService {
  constructor(public authService: AuthService) {}

  products: ProductModel[] = [
    {
      id: 1,
      name: 'shiba1',
      description: 'Boy',
      price: 20000,
      inStock: 10,
      imageUrl: '',
    },
    {
      id: 2,
      name: 'shiba 2',
      description: 'Girl',
      price: 30000,
      inStock: 10,
      imageUrl: '',
    },
    {
      id: 3,
      name: 'Shiba 3',
      description: 'Boy',
      price: 30000,
      inStock: 15,
      imageUrl: '',
    },
  ];

  cart: any[] = [];
  totalBill: number = 0;

  addToCart(item: any) {
    if (this.authService.currentUser) {
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
    } else {
      alert('Please login first');
    }
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
