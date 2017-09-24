import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
import { HttpModule } from '@angular/http';
//import { routes } from './app.route';
import { AppComponent } from './app.component';
import { DriverModule } from './driver/driver.module';
import { NavbarComponent } from './core/navbar/navbar.component';



const routes: Routes = [
  { path: '', redirectTo: 'drivers/All', pathMatch: 'full' },
  { path: 'drivers', loadChildren: 'app/driver/driver.module#DriverModule' },
  { path: 'drivers/:id', loadChildren: 'app/driver/driver.module#DriverModule'},
  //{ path: 'login', component: LoginComponent },
  //{ path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    //DriverComponent,
    NavbarComponent,

    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    DriverModule,
     //HomeComponent,
    RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
