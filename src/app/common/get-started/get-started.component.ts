import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-get-started',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './get-started.component.html',
    styleUrl: './get-started.component.scss'
})
export class GetStartedComponent {}