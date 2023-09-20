import { Injectable } from '@angular/core';

import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private helmList = new BehaviorSubject<any[]>([
    {
      id: 1,
      url: 'https://apollo-singapore.akamaized.net/v1/files/5xzaai0bytua-ID/image',
      helmName: 'INK',
      color: 'black',
      size: 'Large',
      year: 2012,
      model: 'General',
      weight: 12,
    },
    {
      id: 2,
      url: 'https://cdn1-production-images-kly.akamaized.net/sDN2H2_njlMYflQ4bME-9mp8Km4=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4397808/original/061126800_1681699339-kyt-r10-flat-visor-2.jpg',
      helmName: 'KYT',
      color: 'black',
      size: 'Small',
      year: 2009,
      model: 'Full Face',
      weight: 13,
    },
    {
      id: 3,
      url: 'https://s3.bukalapak.com/img/8580550594/large/0_d1afb032_5e21_441e_9aa1_a6ea995d9362_864_998.jpg',
      helmName: 'SOM',
      color: 'Grey',
      size: 'Small',
      year: 1998,
      model: 'General',
      weight: 14,
    },
  ]);

  private helmSelected = new BehaviorSubject<any[] | null>(null);

  constructor() {}

  helmSelected$ = this.helmSelected.asObservable();
  helmList$ = this.helmList.asObservable();

  getHelmList() {
    return this.helmList.value;
  }

  deletList(helm: any): void {
    let updatedList = this.getHelmList().filter((item) => item !== helm);
    this.helmList.next(updatedList);
  }

  updateHelm(dataHelm: any) {
    this.helmSelected.next(dataHelm);
  }

  addHelm(dataHelm: any): void {
    let getPersonData = this.getHelmList();
    getPersonData.push(dataHelm);
    this.helmList.next(getPersonData);
  }

  resetDetail() {
    this.helmSelected.next(null);
  }

  getElemetById(id: number) {
    return this.helmList.pipe(
      map((helmList) => helmList.find((helm) => helm.id === id))
    );
  }
}
