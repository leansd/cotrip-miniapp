export type TripPlan={
  id: string;
  planSpecification: PlanSpecification;
  status: string;
  userId: string;
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
  start: Date;
  end: Date;
}

export type TripPlanEvent = {
  id: string
  data: TripPlan
}


