import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showModal = false;
  selectedImage = '';

  showImage(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.showModal = true;
  }

  hideImage() {
    this.showModal = false;
    this.selectedImage = '';
  }
}
