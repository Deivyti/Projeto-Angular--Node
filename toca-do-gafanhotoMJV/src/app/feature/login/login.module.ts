import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TemplateComponent } from './components/home/template/template.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    TemplateComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
