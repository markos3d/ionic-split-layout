import { SIZE_TO_MEDIA } from '@ionic/core/dist/collection/utils/media';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  toggleMenu() {
    const splitPane = document.querySelector('ion-split-pane');
    if (window.matchMedia(SIZE_TO_MEDIA[splitPane.when] || splitPane.when).matches) {
      splitPane.classList.toggle('split-pane-visible');

    }
  }

}
