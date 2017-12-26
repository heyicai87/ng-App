/**
 * Created by S10006 on 2017/12/22.
 */
import { Component, OnInit } from '@angular/core';

import { Hero } from './hero/hero';
import { HeroService } from './hero/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../view/dashboard.component.html',
  styleUrls: [ '../css/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
