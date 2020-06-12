import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaImageRoutingModule } from './nasa-image-routing.module';
import { NasaImageComponent } from './nasa-image.component';


@NgModule({
  declarations: [NasaImageComponent],
  imports: [
    CommonModule,
    NasaImageRoutingModule
  ]
})
export class NasaImageModule { }
