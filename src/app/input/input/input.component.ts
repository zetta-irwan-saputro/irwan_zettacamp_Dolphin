import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  nama: string = '';
  id: any = null;
  url: string = '';
  case: string = '';
  address: string = '';

  addData() {
    let data = {
      title: this.nama,
      id: this.id,
      url: this.url,
      case: this.case,
      address: this.address,
    };

    this.sharedService.addPerson(data);

    this.nama = '';
    this.url = '';
    this.id = null;
    this.case = '';
    this.address = '';
    console.log(data);
  }
}
