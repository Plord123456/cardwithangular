import { Component } from '@angular/core';
import { CardServiceService } from '../../../service/card-service.service';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public cartService: CardServiceService) {
    console.log(cartService.products);
  }
}
