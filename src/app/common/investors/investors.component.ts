import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-investors',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './investors.component.html',
    styleUrl: './investors.component.scss'
})
export class InvestorsComponent {}