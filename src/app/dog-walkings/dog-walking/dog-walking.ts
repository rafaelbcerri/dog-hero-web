export interface DogWalking {
  begin_date: Date
  created_at: Date
  duration: number
  end_date: Date
  id: number
  latitude: string
  longitude: string
  price: number
  scheduled_date: Date
  updated_at: Date
  user_id: number
  dogs: Dog[],
  dog_walking_status_id: number
  dog_walking_status: DogWalkingStatus
}

export interface Dog {
  id: number,
  name: string,
  age: number,
  created_at: Date,
  updated_at: Date,
  user_id: number
}

export interface DogWalkingStatus {
  id: number,
  name: string,
  created_at: Date,
  updated_at: Date
}

export interface User {
  id: number,
  name: string,
  email: string,
}