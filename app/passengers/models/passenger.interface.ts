export interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  children: Child[] | null;
  bagage: '';
}

export interface Child {
  name: string;
  age: number;
}
