import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  peopleList: any[] = [];
  constructor(private peopleService: SharedService) {}
  subs = new Subscription();
  ngOnInit(): void {
    // this.peopleList = this.peopleService.getPeopleList();
    this.peopleService.peopleList$.subscribe((data) => {
      this.peopleList = data;
    });
    console.log(this.peopleList);
  }

  deleteData(id: number) {
    this.peopleService.deletePerson(id);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
