import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AzureService } from '../../common/servicios/azure.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule


  ],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
imageUrl: any = '';
signupForm: any;
  constructor(private fb: FormBuilder, private router: Router){
    this.signupForm = this.fb.group({
      username: [''],
      nombre_completo: [''],
      fechaNacimiento: [''],
      paisResidencia: [''],
      telefono: [''],
      ingresosMensuales: [''],
      ocupacion: [''],
      email: [''],
      passwordHash: [''],
      password2: [''],
      terms: ['']
    });
  }
  // Método para capturar la imagen y convertirla en un array de bytes
  
  onSubmit(){
    console.log(this.signupForm.value);
    localStorage.setItem('user', JSON.stringify(this.signupForm.value));
    this.router.navigate(['/personal']);
    // this.azure.signup(this.signupForm.value).subscribe((data) => {
    //   console.log(data);
    // });



  }
  ine(event:Event){
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      // Leer el archivo como Data URL (base64)
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result;
        // console.log('URL base64 de la imagen:', this.imageUrl);
      };

      reader.onerror = (error) => {
        console.error('Error al leer el archivo: ', error);
      };
    } else {
      console.error('No se seleccionó ningún archivo.');
    }
  }

  // foto(){
  //   let url = this.imageUrl
  //   console.log(url);
  //   // this.azure.analyzeImage(url)
  //   //   .then((data) => {
  //   //     console.log(data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error('Error analyzing image: ', error);
  //   //   });
  // }
}
