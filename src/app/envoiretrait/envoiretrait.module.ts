import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnvoiretraitPage } from './envoiretrait.page';

const routes: Routes = [
  {
    path: '',
    component: EnvoiretraitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnvoiretraitPage]
})
export class EnvoiretraitPageModule {}
