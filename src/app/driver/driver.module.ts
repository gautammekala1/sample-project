import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { DriverComponent } from './driver.component';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { TrimPipe } from '../pipes/trim.pipe';
import { DriverService } from '../service/driver.service';
import { DriverBookingComponent } from './bookings/driverbookings.component';
import { DriverRootComponent } from './root/driverroot.component';
import { DriverDetailsComponent } from './details/driverdetails.component';

const routes: Routes = [
  { 
    path: '', component: DriverRootComponent,
    children: [
      { path:'details', component: DriverDetailsComponent },
      { path:'bookings', component: DriverBookingComponent },
      { path:'All', component: DriverComponent },
    ],

    
  }
];

@NgModule({

  declarations: [ 
      DriverComponent,
      DriverRootComponent,
      DriverBookingComponent,
      DriverDetailsComponent,
      CapitalizePipe,
      TrimPipe 
    ],
  imports: [ CommonModule,RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [DriverService],

})
export class DriverModule { 
  
}

