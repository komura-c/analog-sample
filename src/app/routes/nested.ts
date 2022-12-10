import { defineRouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export const routeMeta = defineRouteMeta({
  title: 'Nested',
  canActivate: [() => true],
  providers: [],
});

@Component({
  selector: 'app-nested',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Nested Route Page</h1>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export default class NestedComponent {
}
