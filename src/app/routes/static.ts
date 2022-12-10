import { defineRouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta = defineRouteMeta({
  title: 'Static',
  canActivate: [() => true],
  providers: [],
});


@Component({
  selector: 'app-static',
  standalone: true,
  template: `
    <h1>Static Route Page</h1>

    <div class="card">
      <button type="button" (click)="increment()">Count {{ count }}</button>
    </div>
  `,
  styles: [],
})
export default class StaticComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
