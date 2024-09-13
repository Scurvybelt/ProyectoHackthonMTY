import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-team',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './team.component.html',
    styleUrl: './team.component.scss'
})
export class TeamComponent {}