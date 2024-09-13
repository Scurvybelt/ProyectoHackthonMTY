import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-download-app',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './download-app.component.html',
    styleUrl: './download-app.component.scss'
})
export class DownloadAppComponent {}