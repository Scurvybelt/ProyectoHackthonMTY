import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Import MatCheckboxModule
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Groq from 'groq-sdk';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
        CommonModule,
        RouterLink
        
    ],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
    form: any
    groq: any;
    textIA: boolean = false;
    resIA: any = ' ';
    spinnerIA: boolean = false;
    ser: any = '';
    int: any = '';
    mostrarPersonalizado: boolean = false;
    spinnerPersonalizado: boolean = false;
    spinnerAcesor: boolean = false;
    resPersonalizado: any  = ' ';
    textPersonalizado: boolean = false;
    
    
  

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

        if(localStorage.getItem('user')){
            this.mostrarPersonalizado = true;

        }
    }

    async generarPersonalizado(){
        this.spinnerAcesor = true;
        // let user = JSON.parse(localStorage.getItem('user'));
        // let paisRecidencia = user.paisRecidencia;
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        let paisRecidencia = user.paisResidencia;
        let salario = user.ingresosMensuales;
        let ocupacion = user.ocupacion;
        console.log(paisRecidencia);
        console.log(salario);
        console.log(ocupacion);
        let prompt = "Generame un prompt que me ayude en mis finanzas personales teniendo en cuenta que trabajo en "+ ocupacion +" gano " + salario + " esto y vivo aqui "+paisRecidencia + " y que todos las recomendaciones sea relacionado con los productos que banorte ofrece y solo los de banorte y que la respuesta sea en solo en HTML"; ;
        this.spinnerPersonalizado = true;
        const chatCompletion = await this.groq.chat.completions.create({
            messages: [{ role: 'user', 
              content:  prompt}],
            model: 'llama-3.1-70b-versatile',
          }).catch(async( error: { name: any; }) => {
              if(error instanceof Groq.APIError ){
                  this.spinnerAcesor = false;
                  // console.log(error.status); // 400
                  // console.log(error.name); // BadRequestError
                  console.log(error);
                  this.spinnerAcesor = false;
                  // console.log(error.headers); // {server: 'nginx', ...}
                } else{
                  throw error;
                }

          });

          if(chatCompletion && chatCompletion.choices){
              this.resPersonalizado = chatCompletion.choices[0].message.content;
              this.spinnerAcesor = false;
              this.textPersonalizado = true;
          }


    }

     

    async onSubmit(): Promise<void> {
        this.spinnerIA = true;
        console.log(this.form.valid);
        console.log(this.form.value);
        if(this.form.valid){
            
            const chatCompletion = await this.groq.chat.completions.create({
              messages: [{ role: 'user', 
                content: this.resIA }],
              model: 'llama-3.1-70b-versatile',
            }).catch(async( error: { name: any; }) => {
                if(error instanceof Groq.APIError ){
                    // console.log(error.status); // 400
                    // console.log(error.name); // BadRequestError
                    console.log(error);
                    this.spinnerIA = false;
                    // console.log(error.headers); // {server: 'nginx', ...}
                  } else{
                    throw error;
                  }

            });

            if(chatCompletion && chatCompletion.choices){
                this.resIA = chatCompletion.choices[0].message.content;
                this.spinnerIA = false;
                this.textIA = true;
            }
            
            
        }
        
    }  
    onServicioChange(e:any){
        this.ser = this.form.get('servicio').value;
        this.resIA = 'Busca en los productos de banorte por las '+ this.ser+'  en las que ofrezcan '+ this.int + '' + '. Solo dame productos relacionados con banorte los demas no me lo muestres y quiero que la informacion me la des en HTML y solo en HTML' ;
    }

    onInteresChange(e:any){
        this.int = this.form.get('interes').value;
        this.resIA = 'Busca en los productos de banorte por las '+ this.ser+'  en las que ofrezcan '+ this.int + ' ' + 'Solo dame productos relacionados con banorte los demas no me lo muestres quiero que la informacion me la des en HTML y solo en HTML';
    }  

    


}