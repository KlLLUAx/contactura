import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'login', component:LoginComponent},
  {path:'cadastro', component:SingUpComponent},
  {path:'**', component:PageNotFoundComponent},
  {path:'reports',
  loadChildren:()=>import('./reports/reports.module').then(m=>m.ReportsModule)
},
  {path:'release',
  loadChildren:()=> import('./release/release.module').then(m=>m.ReleaseModule)
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
