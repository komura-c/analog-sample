import { defineRouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta = defineRouteMeta({
  title: 'Nested Static',
  canActivate: [() => true],
  providers: [],
});


@Component({
  selector: 'app-nested-static',
  standalone: true,
  template: `
    <h2>Nested Static Route Page</h2>
  `,
  styles: [],
})
export default class NestedStaticComponent {
}
