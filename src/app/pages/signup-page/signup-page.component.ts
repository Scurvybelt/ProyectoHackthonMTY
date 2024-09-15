import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  // Método para capturar la imagen y convertirla en un array de bytes
  onSubmit(event: Event) {
    event.preventDefault(); // Evitar que el formulario recargue la página

    const ineInput = document.getElementById('ine') as HTMLInputElement;

    if (ineInput.files && ineInput.files[0]) {
      const file = ineInput.files[0];
      const reader = new FileReader();

      // Leer el archivo como ArrayBuffer
      reader.readAsArrayBuffer(file);

      reader.onload = (event) => {
        const arrayBuffer = event.target?.result as ArrayBuffer;
        const byteArray = new Uint8Array(arrayBuffer);

        // Imprimir el array de bytes en la consola
        console.log(byteArray);
      };

      reader.onerror = (error) => {
        console.error('Error al leer el archivo: ', error);
      };
    } else {
      console.error('No se seleccionó ningún archivo.');
    }
  }
}
