import { Passenger } from '../models/passenger.interface';

export class PassengersService {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1234567890000,
      children: null
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: 1234567890000,
      children: [{ name: 'Stephen', age: 12 }, { name: 'John', age: 5 }]
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1234567890000,
      children: null
    },
    {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1234567890000,
      children: [{ name: 'Tracy', age: 15 }]
    },
    {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: 1234567890000,
      children: null
    }
  ];
}