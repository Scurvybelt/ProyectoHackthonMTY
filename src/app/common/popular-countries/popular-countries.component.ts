import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-popular-countries',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './popular-countries.component.html',
    styleUrl: './popular-countries.component.scss'
})
export class PopularCountriesComponent {}