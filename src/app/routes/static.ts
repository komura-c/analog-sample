import { defineRouteMeta } from '@analogjs/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

export const routeMeta = defineRouteMeta({
  title: 'Static',
  canActivate: [() => true],
  providers: [],
});


@Component({
  selector: 'app-static',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  template: `
    <h1>Static Route Page</h1>

    <button type="button" (click)="getHello()">getHello!</button>
    <p *ngIf="resultGetHello$ | async as resultGetHello"> {{ resultGetHello.message }}</p>
  `,
  styles: [],
})
export default class StaticComponent {
  private readonly apiService = inject(ApiService);
  resultGetHello$!: Observable<{ message: string }>;

  getHello() {
    this.resultGetHello$ = this.apiService.getHello();
  }
}
