import { Component, OnInit } from '@angular/core';
import * as $$ from '../js/shortBulma$$function'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  $$$;

  constructor() {
    this.$$$ = $$;
  }

  ngOnInit(): void {
  this.$$$.bulmaMenu('#burger', '#nav-links');
}

}
