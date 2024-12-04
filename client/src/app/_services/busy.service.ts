import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  busyRequestCount = 0;
  private readonly spinerService = inject(NgxSpinnerService);

  busy() {
    this.busyRequestCount++;
    this.spinerService.show(undefined, {
      type: 'ball-atom',
      bdColor: 'rgba(255,255,255,0)',
      color: 'black',
    });
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinerService.hide();
    }
  }
}
