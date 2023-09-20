import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { InputModule } from '../input/input.module';
import { BodyModule } from '../body/body.module';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, InputModule, BodyModule],
  exports: [ContainerComponent],
})
export class ContainerModule {}
