import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-how-we-founded',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './how-we-founded.component.html',
    styleUrl: './how-we-founded.component.scss'
})
export class HowWeFoundedComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}