import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './models/hero.model';
import { HEROES } from 'src/assets/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
