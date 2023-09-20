import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelmDetailComponent } from './helm-detail/helm-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HelmDetailComponent],
  imports: [CommonModule, RouterModule],
  exports: [HelmDetailComponent],
})
export class DetailModule {}
