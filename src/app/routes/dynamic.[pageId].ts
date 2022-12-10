import { defineRouteMeta, injectActivatedRoute } from '@analogjs/router';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

export const routeMeta = defineRouteMeta({
  title: 'Dynamic',
  canActivate: [() => true],
  providers: [],
});

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [RouterLink, AsyncPipe, JsonPipe, NgIf],
  template: `
    <h1>Dynamic Page PageId: {{ pageId$ | async }}</h1>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>

    <button type="button" (click)="getHello()">getHello!</button>
    <p *ngIf="resultGetHello$ | async as resultGetHello"> {{ resultGetHello.message }}</p>
  `,
  styles: [],
})
export default class DynamicComponent {
  private readonly route = injectActivatedRoute();
  private readonly apiService = inject(ApiService);
  resultGetHello$!: Observable<{ message: string }>;

  readonly pageId$ = this.route.paramMap.pipe(
    map((params) => params.get('pageId'))
  );

  count = 0;

  increment() {
    this.count++;
  }

  getHello() {
    this.resultGetHello$ = this.apiService.getHello();
  }
}
