import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-helm-list',
  templateUrl: './helm-list.component.html',
  styleUrls: ['./helm-list.component.css'],
})
export class HelmListComponent implements OnInit {
  helmList: any[] = [];
  constructor(private helmService: ServiceService) {}

  ngOnInit(): void {
    this.helmService.helmList$.subscribe((data) => {
      this.helmList = data;
    });
  }

  seeDetail(i: number) {
    let selecthelm = this.helmList[i];
    this.helmService.updateHelm(selecthelm);
  }

  deleteHelm(helm: any) {
    this.helmService.deletList(helm);
  }
}
