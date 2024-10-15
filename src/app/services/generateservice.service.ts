import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateserviceService {
  exituseremail:string[]=[]

  constructor(private httpclient:HttpClient) {

  }
  private existingUsernames = ['Batman', 'Superman', 'Joker', 'Luthor'];

  checkIfUsernameExists(value: string) {
    return (this.existingUsernames.some((a) => a === value))
  }
  subject = new BehaviorSubject<any>('')
  user = this.subject.asObservable()
  
}

