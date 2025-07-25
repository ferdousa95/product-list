import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent,
    BannerComponent
  ]
})
export class SharedModule { }
