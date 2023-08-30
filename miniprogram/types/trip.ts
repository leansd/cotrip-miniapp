export type TripPlan={
  id: string;
  planSpecification: PlanSpecification;
  status: string;
}

export type PlanSpecification={
  departureLocation: Location;
  arrivalLocation: Location;
  plannedDepartureTime: TimeRange;
  requiredSeats: number;
}

export type Location ={
  name: string;
  latitude: number;
  longtitude: number;
}

export type TimeRange={
  start: string;
  end: string;
}