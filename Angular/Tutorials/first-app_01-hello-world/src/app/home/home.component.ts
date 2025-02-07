import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule,HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter By City"/>
      <button  type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location></app-housing-location>
  </section>
  `,
  styles: ``
})
export class HomeComponent {

}
