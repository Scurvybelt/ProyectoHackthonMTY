import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-boxes',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './boxes.component.html',
    styleUrl: './boxes.component.scss'
})
export class BoxesComponent {}