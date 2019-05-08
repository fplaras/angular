import { Component, OnInit } from "@angular/core";

import { HeroService } from "../services/hero.service";

import { Hero } from "../models/Hero";
import { HEROES } from "../models/Mock-Heroes";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  // Add property hero
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  //heroList = Hero;
  heroList: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /* getHeroes(): void {
    // method has a synchronoues signature
    //Asynchronous methods could return Promise and an Observable
    this.heroList = this.heroService.getHeroes();
  } */

  getHeroes(): void {
    // the previous version assigns an array synchronously
    // this version waits for the observable to emit the array
    // the subscribe passes the emitted array to the callback
    this.heroService.getHeroes().subscribe(heroes => (this.heroList = heroes));
  }
}
