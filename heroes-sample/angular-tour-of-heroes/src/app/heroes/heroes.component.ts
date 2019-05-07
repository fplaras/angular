import { Component, OnInit } from '@angular/core';

import { Hero } from '../models/Hero';
import { HEROES } from '../models/Mock-Heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Add property hero
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroList = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
