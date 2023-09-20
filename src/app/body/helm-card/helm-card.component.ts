import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-helm-card',
  templateUrl: './helm-card.component.html',
  styleUrls: ['./helm-card.component.css'],
})
export class HelmCardComponent implements OnInit {
  constructor() {}
  @Input() helm: any;
  @Output() onDeleteClick = new EventEmitter<void>();
  @Output() seeDetail = new EventEmitter<void>();

  ngOnInit(): void {
    // console.log(this.helm);
  }

  onDelete() {
    this.onDeleteClick.emit();
  }

  onDetail() {
    this.seeDetail.emit(this.helm);
  }
}
