import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  exclusive = new Subject<boolean>()

  userName = new BehaviorSubject<string>('Ashraf')

  videoEmit = new ReplaySubject<string>(3,5000)

  asyncVideo = new AsyncSubject()

  constructor() { }

}
