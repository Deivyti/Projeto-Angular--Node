import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './pages/play/play.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ViewComponent } from './components/view/view.component';
import { InformationComponent } from './pages/information/information.component';




@NgModule({
  declarations: [
    PlayComponent,
    ContentsComponent,
    ActivitiesComponent,
    ViewComponent,
    InformationComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
