import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-security',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './security.component.html',
    styleUrl: './security.component.scss'
})
export class SecurityComponent {}