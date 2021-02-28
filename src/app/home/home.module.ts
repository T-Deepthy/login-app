import { ShowApiComponent } from './show-api/show-api.component';
import { HomeRouting } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, }   from '@angular/forms';



@NgModule({
  declarations: [LandingComponent,ShowApiComponent],
  imports: [
    CommonModule,
    HomeRouting,FormsModule
  ]
})
export class HomeModule { }
