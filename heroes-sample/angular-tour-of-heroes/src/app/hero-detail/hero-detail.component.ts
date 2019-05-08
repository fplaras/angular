import { Component, OnInit } from "@angular/core";
import { Hero } from "../models/Hero";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../services/hero.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  // This hero detail template binds to hero property through the Input decorator
  hero: Hero;

  //Activated route holds information about the route to this instance for example id of the hero in the route
  //location is an angular service for interacting with browser
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // route snapshot is a static image of the route information
    // paramMap is a dictionary of route parameters extracted
    // the + operator converts the string to a number for the hero id
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
