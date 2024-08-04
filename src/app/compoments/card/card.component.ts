import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CardServiceService } from '../../service/card-service.service';
import { MatCardAvatar, MatCardImage } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardImage, MatCardAvatar, MatButton, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(public cartService: CardServiceService) {}

  addToCart(value: any) {
    this.cartService.addToCart(value);
  }

  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() inStock!: number;
}
