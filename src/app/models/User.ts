import { Checkin } from './Checkin'
import { Workout } from './Workout'

export interface User {
    id: number,
    email: string,
    name: string
    password: string,
    address: string,
    phone: string,
    admin: boolean,
    workout: Workout
    checkins: Checkin[]
}