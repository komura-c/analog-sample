import { defineRouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta = defineRouteMeta({
  title: 'Home',
  canActivate: [() => true],
  providers: [],
});

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Analog Sample(Vite + Angular)</h1>

    <p>
      Check out
      <a href="https://github.com/analogjs/analog#readme" target="_blank"
        >Analog</a
      >, the fullstack meta-framework for Angular powered by Vite!
    </p>

    <p class="read-the-docs">
      Click on the Vite and Angular logos to learn more.
    </p>
  `,
  styles: [
    `
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
