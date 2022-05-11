import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedDirective } from './shared/directives/shared.directive';
import { PlayComponent } from './feature/navigation/pages/play/play.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './feature/login/login.module';



@NgModule({
  declarations: [
    AppComponent,
    SharedDirective,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
