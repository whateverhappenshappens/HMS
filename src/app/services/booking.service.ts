import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewBookingResponse } from '../interfaces/newBookingResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) {}
  getBookingDeailsById(bookingID: number):Observable<NewBookingResponse> {
    const headers = new HttpHeaders({
      'xHmAuthToken': sessionStorage.getItem('token') ?? ''
      });
      const url = `${this.baseUrl}booking/${bookingID}/get-booking-detail`; 
      var result=this.http.get<NewBookingResponse>(url,{headers});
      console.log(result);
      return result;
  }
  getUserDetailsById(userID: number) {
    console.log(userID);
    const headers = new HttpHeaders({
      'xHmAuthToken': sessionStorage.getItem('token') ?? ''
      });
      const url = `${this.baseUrl}user/${userID}/user-details`; 
    var result=this.http.get<any>(url,{headers});
    console.log(result);
    return result;
  }
  private baseUrl = 'http://localhost:8080/hms/';
 
  
  getBookings(userId: number): Observable<any> {
    console.log(userId);
    const headers = new HttpHeaders({
      'xHmAuthToken': sessionStorage.getItem('token') ?? ''
      });
      const url = `${this.baseUrl}user/${userId}/get-all-bookings`; 
    var result=this.http.get<any>(url,{headers});
    console.log(result);
    return result;
  }
  
}
