import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-signup-page',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './signup-page.component.html',
    styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {}