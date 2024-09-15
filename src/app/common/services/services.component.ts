import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import MatCheckboxModule
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Groq from 'groq-sdk';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        CommonModule
    ],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
    form: any
    groq: any;
    textIA: boolean = false;
    resIA: any = ' ';
    
  

    constructor(private fb: FormBuilder){
        this.groq = new Groq({
            dangerouslyAllowBrowser: true,
            apiKey: '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', // This is the default and can be omitted
        });
    }

    ngOnInit(): void {
        this.form = this.fb.group({
          servicio: ['', [Validators.required]],
          interes: ['', Validators.required],
        });
      }

    

    async onSubmit(): Promise<void> {
        console.log(this.form.valid);
        console.log(this.form.value);
        if(this.form.valid){
            this.textIA = true;
            const chatCompletion = await this.groq.chat.completions.create({
              messages: [{ role: 'user', content: 'Explain the importance of low latency LLMs' }],
              model: 'llama-3.1-70b-versatile',
            });
            
            this.resIA = chatCompletion.choices[0].message.content;
        }
        
    }  
    onInteresChange(){

    }  

    onServicioChange(){
        
    }


}