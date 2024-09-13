import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-subscribe',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './subscribe.component.html',
    styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {}