import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
