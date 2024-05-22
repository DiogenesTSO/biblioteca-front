import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';

//Criar rotas para redirecionar as paginas
const routes: Routes = [
  {
    path: '', component: NavComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
