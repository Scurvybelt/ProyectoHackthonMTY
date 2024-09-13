import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-information',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './information.component.html',
    styleUrl: './information.component.scss'
})
export class InformationComponent {}