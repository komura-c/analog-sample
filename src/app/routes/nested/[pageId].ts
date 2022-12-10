import { defineRouteMeta, injectActivatedRoute } from '@analogjs/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs';

export const routeMeta = defineRouteMeta({
  title: 'Nested Dynamic',
  canActivate: [() => true],
  providers: [],
});

@Component({
  selector: 'app-nested-dynamic',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  template: `
    <h2>Nested Dynamic Route Page PageId: {{ pageId$ | async }}</h2>
  `,
  styles: [],
})
export default class NestedDynamicComponent {
  private readonly route = injectActivatedRoute();

  readonly pageId$ = this.route.paramMap.pipe(
    map((params) => params.get('pageId'))
  );
}
