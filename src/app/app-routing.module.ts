import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCaloriasComponent } from './components/form-calorias/form-calorias.component';

const routes: Routes = [
  { path: "", component: FormCaloriasComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
