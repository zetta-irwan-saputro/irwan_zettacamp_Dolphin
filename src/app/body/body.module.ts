import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelmManagementComponent } from './helm-management/helm-management.component';
import { HelmListComponent } from './helm-list/helm-list.component';
import { HelmCardComponent } from './helm-card/helm-card.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HelmManagementComponent,
    HelmListComponent,
    HelmCardComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HelmManagementComponent, HeaderComponent],
})
export class BodyModule {}
