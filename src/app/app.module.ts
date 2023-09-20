import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputModule } from './input/input.module';
import { BodyModule } from './body/body.module';
import { DetailModule } from './detail/detail.module';
import { HelmDetailComponent } from './detail/helm-detail/helm-detail.component';
import { ContainerModule } from './container/container.module';
import { ContainerComponent } from './container/container/container.component';

const routes: Routes = [
  { path: 'detail/:id', component: HelmDetailComponent },
  { path: '', component: ContainerComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputModule,
    BodyModule,
    DetailModule,
    RouterModule.forRoot(routes),
    ContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
