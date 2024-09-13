import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-widget-sidebar',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './widget-sidebar.component.html',
    styleUrl: './widget-sidebar.component.scss'
})
export class WidgetSidebarComponent {}