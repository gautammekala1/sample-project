import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IDriver, IBookings, IState } from '../../shared/interfaces';
import { DriverService } from '../../service/driver.service';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'cm-driver-root',
  templateUrl: './driverdetails.component.html',
  styleUrls: [ './driverdetails.component.css' ]
})
export class DriverDetailsComponent {

  customer: IDriver;
  mapEnabled: boolean;

  public driversArray: IDriver[];
  public drivers = new BehaviorSubject<any>(this.driversArray); 
  constructor(private route: ActivatedRoute, private driverService: DriverService) { }

  ngOnInit() {
      //Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
      this.route.parent.params.subscribe((params: Params) => {

          let id = +params['id'];
        this.driverService.getDriver(id)
            .subscribe((response: IDriver[]) => {

              let driverArray:any = [];
                driverArray.push(response[id-1]);
                this.drivers.next(driverArray);
                
            });
      });
  }




}