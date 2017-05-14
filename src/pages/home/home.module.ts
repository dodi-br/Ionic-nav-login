import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    HomePage,
  ],
  entryComponents: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}
