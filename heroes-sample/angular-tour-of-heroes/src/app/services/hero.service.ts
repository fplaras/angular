import { Injectable } from "@angular/core";
// The Injectale decorator marks the class as one that participates in dependency injection
import { Hero } from "../models/Hero";
import { HEROES } from "../models/Mock-Heroes";

// RxJS Observable
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";

// Providers will become avaialble for dependency injection
// Register this service at the root level
// Root will create a single shared instance and injects to any class asking for it
// It also helps in optimizing performance when service is not used
@Injectable({
  providedIn: "root"
})
export class HeroService {
  // Components should not fetch or save data
  // They shoulf focus only presenting data and delegate access to a service

  heroes: Hero[];
  // singleton dependency injection
  constructor(private messageService: MessageService) {}

  // method has a synchronoues signature
  /* getHeroes(): Hero[] {
    return HEROES;
  } */

  // of(HEROES) returns an Observable that emits a single value, the array of heroes
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // the ` define a javascript template literal for embedding id
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
