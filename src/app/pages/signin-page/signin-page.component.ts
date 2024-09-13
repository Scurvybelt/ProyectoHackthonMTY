import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-signin-page',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './signin-page.component.html',
    styleUrl: './signin-page.component.scss'
})
export class SigninPageComponent {}