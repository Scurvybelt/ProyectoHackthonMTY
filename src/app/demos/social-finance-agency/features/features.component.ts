import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-features',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './features.component.html',
    styleUrl: './features.component.scss'
})
export class FeaturesComponent {}