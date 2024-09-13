import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-money-transfer',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './money-transfer.component.html',
    styleUrl: './money-transfer.component.scss'
})
export class MoneyTransferComponent {

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}