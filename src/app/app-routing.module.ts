import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroComponent } from './libro/libro.component';
import { AutorComponent } from './autor/autor.component';

const routes: Routes = [
  {path:'', redirectTo:'libro', pathMatch:'full'},
  {path:'libro', component:LibroComponent },
  {path:'autor', component:AutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LibroComponent,AutorComponent]
