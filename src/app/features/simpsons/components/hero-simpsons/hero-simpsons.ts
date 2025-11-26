import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero-simpsons',
  standalone: true,
  template: `
    <div class="hero bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-base-content rounded-box mb-6" role="banner">
      <div class="hero-content text-center py-12">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-black drop-shadow-md">The Simpsons</h1>
          <p class="py-6 text-lg text-gray-800 font-medium">
            Explora el universo de la familia más famosa de Springfield
          </p>

          <div class="stats stats-horizontal shadow-lg bg-white/90">
            <div class="stat">
              <div class="stat-title text-gray-700">Personajes</div>
              <div class="stat-value text-primary">{{ simpsonsCount() }}</div>
            </div>
            <div class="stat">
              <div class="stat-title text-gray-700">Páginas</div>
              <div class="stat-value text-secondary">{{ totalPages() }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HeroSimpsons {

  simpsonsCount = input.required<number>();
  totalPages = input.required<number>();
}
