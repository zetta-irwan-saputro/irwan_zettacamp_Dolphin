import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  id: number;
  constructor(private serviceService: ServiceService) {
    this.id = new Date().getTime();
    console.log(`ini kode unik ${this.id}`);
  }

  ngOnInit(): void {}

  url: string = '';
  helmName: string = '';
  helmColor: string = '';
  helmSize: string = '';
  helmYear: string = '';
  helmModel: string = '';
  helmWeight: null = null;

  addData() {
    let data = {
      id: this.id,
      url: this.url,
      helmName: this.helmName,
      color: this.helmColor,
      size: this.helmSize,
      model: this.helmModel,
      weight: this.helmWeight,
    };

    this.serviceService.addHelm(data);
    // console.log(data.id);

    this.url = '';
    this.helmName = '';
    this.helmColor = '';
    this.helmSize = '';
    this.helmYear = '';
    this.helmModel = '';
    this.helmWeight = null;
  }
}
