import { Component, Input, OnInit, ChangeDetectionStrategy,
         trigger, state, style, transition, animate } from '@angular/core';
import { IDriver, IBookings, IState } from '../shared/interfaces';
import { DriverService } from '../service/driver.service';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({ 
  selector: 'driver', 
  templateUrl: './driver.component.html',
  styleUrls: [ './driver.component.css' ],
  
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class DriverComponent implements OnInit {

  public driverArray: IDriver[];
  
  public drivers = new BehaviorSubject<any>(this.driverArray);  
  
  constructor(private driverService: DriverService) {
  }
  
  ngOnInit() {

    this.driverService.getDrivers()
      .subscribe((response: IDriver[]) => {

        this.drivers.next(response);
        //console.log(response);
    });
  }

}

