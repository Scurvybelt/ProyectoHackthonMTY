import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AzureService } from '../../common/servicios/azure.service';


@Component({
    selector: 'app-signin-page',
    standalone: true,
    imports: [
        RouterLink,
        FormsModule,
        ReactiveFormsModule


    ],
    templateUrl: './signin-page.component.html',
    styleUrl: './signin-page.component.scss'
})
export class SigninPageComponent {
    signinForm: any;
    
    constructor(private fb: FormBuilder, ){
        this.signinForm = this.fb.group({
            username: [''],
            password: ['']
        })
    }


    onSubmit(){
        this.signinForm.value;
        console.log(this.signinForm.value);
        // this.service.signin(this.signinForm.valid).subscribe((data) => {
        //     console.log(data);
        // })

    }
}