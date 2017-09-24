export interface IDriver {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    address: string;
    city: string;
    state: IState;
    bookings?: IBookings[];
    orderTotal?: number;
    latitude?: number,
    longitude?: number
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IBookings {
    From: string;
    To: string;
    Price: number;
}
