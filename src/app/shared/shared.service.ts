import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private peopleList = new BehaviorSubject<any[]>([
    {
      url: 'https://asset.kompas.com/crops/jrSSUHW0emoDNrlOxP7DaplVaTQ=/0x0:0x0/750x500/data/photo/2023/09/03/64f4083edd8aa.jpg',
      title: 'Irwan Cahyo Saputro',
      id: 12674,
      address: 'Plosokerep Umbulharjo',
      case: 'Copy Paste',
    },
  ]);

  constructor() {}
  peopleList$ = this.peopleList.asObservable();

  getPeopleList(): any[] {
    return this.peopleList.value;
  }

  addPerson(person: any) {
    let getPersonData = this.getPeopleList();
    getPersonData.push(person);
    this.peopleList.next(getPersonData);
  }

  deletePerson(id: number) {
    const index = this.peopleList.value.findIndex((person) => person.id === id);
    if (index !== -1) {
      let getPersonData = this.getPeopleList();
      getPersonData.splice(index, 1);
      this.peopleList.next(getPersonData);
    }
  }
}
