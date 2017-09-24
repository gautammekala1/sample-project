import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IDriver, IBookings, IState } from '../../shared/interfaces';
import { DriverService } from '../../service/driver.service';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'cm-driver-bookings',
  templateUrl: './driverbookings.component.html',
  styleUrls: [ './driverbookings.component.css' ]
})
export class DriverBookingComponent implements OnInit {

  public driverArray: IDriver[];
  public drivers = new BehaviorSubject<any>(this.driverArray); 
  constructor(private route: ActivatedRoute, private driverService: DriverService) { }

  ngOnInit() {
      
      this.route.parent.params.subscribe((params: Params) => {

          let id = +params['id'];
          console.log(id);
        this.driverService.getBookings(id)
            .subscribe((response: IDriver[]) => {
              
                this.drivers.next(response);
                
            });
      });
  }
  


}