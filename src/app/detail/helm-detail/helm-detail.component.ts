import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-helm-detail',
  templateUrl: './helm-detail.component.html',
  styleUrls: ['./helm-detail.component.css'],
})
export class HelmDetailComponent implements OnInit, OnDestroy {
  selectData: any | null;
  private subscription: Subscription | undefined;
  // dataHelm: any | null;

  constructor(
    private helmService: ServiceService,
    private route: ActivatedRoute
  ) {}

  // ngOnInit(): void {
  //   this.helmService.helmSelected$.subscribe((data) => {
  //     this.selectData = data;
  //     console.log(this.selectData);
  //   });
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = parseInt(params['id']);
      this.helmService.getElemetById(id).subscribe((data) => {
        this.selectData = data;
      });
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  resetDetail() {
    this.helmService.resetDetail();
  }
}
