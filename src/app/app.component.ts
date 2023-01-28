import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent: string = '';
  showImage = true;
  products: Product[] = [{
    id: '1',
    name: 'EL mejor juguete',
    price: 565,
    image: './assets/images/toy.jpg'
  },
  {
    id: '2',
    name: 'Bicicleta casi nueva',
    price: 356,
    image: './assets/images/bike.webp'
  },
  {
    id: '3',
    name: 'Colleción de albumnes',
    price: 34,
    image: './assets/images/album.webp'
  },
  {
    id: '4',
    name: 'Mis libros',
    price: 23,
    image: './assets/images/books.jpg'
  },
  {
    id: '5',
    name: 'Gafas',
    price: 50,
    image: './assets/images/glasses.webp'
  }];

  onLoaded(img: string) {
    console.log('log padre: ', img);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

}
