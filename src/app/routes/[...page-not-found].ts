import { defineRouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

export const routeMeta = defineRouteMeta({
  title: 'Page Not Found',
  canActivate: [() => true],
  providers: [],
});

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLinkWithHref],
  template: `
    <h1>Page Not Found</h1>

    <a routerLink="/">Go Back Home</a>
  `,
})
export default class PageNotFoundComponent {
}
