import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './compoments/card/card.component';
import { NgForOf, CommonModule } from '@angular/common';
import { CardServiceService } from './service/card-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf, CommonModule], // Import CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Fix typo from styleUrl to styleUrls
})
export class AppComponent {
  title = 'project03';
  cart: any[] = [];

  constructor(public cartService: CardServiceService) {}

  addToCart(value: any) {
    console.log(value);
  }

  removeFromCart(index: number) {
    console.log(index);
    this.cartService.removeFromCart(index);
  }

  // The 'product' array can be removed if not needed, as you're already using 'cartService.products'.
  product = [
    {
      id: 1,
      name: 'shiba 1',
      description: 'boy',
      price: 20000,
      instock: 10,
    },
    {
      id: 2,
      name: 'shiba 2',
      description: 'girl',
      price: 300000,
      instock: 10,
    },
    {
      id: 3,
      name: 'shiba 3',
      description: 'Boy',
      price: 4000000,
      instock: 15,
    },
  ];
}
