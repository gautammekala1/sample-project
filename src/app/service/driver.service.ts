import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { IDriver, IBookings, IState } from '../shared/interfaces';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class DriverService {

  constructor(
    private http: Http
  ) {}

  private setHeaders(): Headers {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new Headers(headersConfig);

  }

  private setOptions():RequestOptions {

  	let options = new RequestOptions({ headers: this.setHeaders() });
  	return options;
  }

  private formatErrors(error: any) {

     return Observable.throw(error.json());
  }

    getDrivers() : Observable<IDriver[]> {

    	let params: URLSearchParams = new URLSearchParams();

        return this.http.get(`${environment.api_url}drivers.json`,this.setOptions)
            .map((res: Response) => {

                let customers = res.json();
                    return customers;

            }).catch(this.formatErrors);
    }

    getDriver(id: number) : Observable<IDriver[]> {

        let params: URLSearchParams = new URLSearchParams();

        return this.http.get(`${environment.api_url}drivers.json`,this.setOptions)

            .map((res: Response) => {

                let customers = res.json();
                  //console.log(customers[id]);
                    return customers;

            }).catch(this.formatErrors);
    }

    getBookings(id: number) : Observable<IDriver[]> {

        let params: URLSearchParams = new URLSearchParams();

        return this.http.get(`${environment.api_url}drivers.json`,this.setOptions)

            .map((res: Response) => {

                let customers = res.json();
                  //console.log(customers[id]);
                    return customers[id-1].bookings;

            }).catch(this.formatErrors);
    }
}