import { Component } from '@angular/core';
import { FormCaloriasInterface } from 'src/app/interfaces/form-calorias';

@Component({
  selector: 'app-form-calorias',
  templateUrl: './form-calorias.component.html',
  styleUrls: ['./form-calorias.component.scss']
})
export class FormCaloriasComponent {

  datos: FormCaloriasInterface = {
    sistemaMetrico: "imperial",
    edad: undefined!,
    peso: undefined!,
    altura: undefined!,
    resultado: undefined
  }

  calcularCalorias(): void {
    let factor: number

    //Libras y Pulgadas
    if (this.datos.sistemaMetrico == 'imperial') {
      factor = this.calcularFactorImperial(this.datos.peso)
      this.datos.resultado = parseFloat(((10 * this.datos.peso + 6.25 * this.datos.altura - 10 * this.datos.edad + 5) * factor).toFixed(3))

      //Kilogramos y Metros
    } else {
      factor = this.calcularFactorMetrico(this.datos.peso)
      const pesoImperial = this.convertirKlALb(this.datos.peso)
      const alturaImperial = this.convertirMtAPl(this.datos.altura)
      this.datos.resultado = parseFloat(((10 * pesoImperial + 6.25 * alturaImperial - 10 * this.datos.edad + 5) * factor).toFixed(3))
    }
    console.log(factor);

  }

  calcularFactorImperial(peso: number): number {
    if (peso < 364) {
      return 1.6
    } else if (peso < 440) {
      return 1.4
    } else if (peso < 485) {
      return 1.2
    } else {
      return 1
    }
  }

  calcularFactorMetrico(peso: number): number {
    if (peso < 165) {
      return 1.6
    } else if (peso < 200) {
      return 1.4
    } else if (peso < 220) {
      return 1.2
    } else {
      return 1
    }
  }

  //Kilogramos a libras
  convertirKlALb(kilogramos: number): number {
    return kilogramos * 2.205
  }

  //Metros a Pulgadas
  convertirMtAPl(metros: number): number {
    return metros * 39.37
  }
}
