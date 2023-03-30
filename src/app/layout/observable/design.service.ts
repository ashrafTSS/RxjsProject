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

  //print method for li
  print(val,containerId){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById(containerId).appendChild(el)
  }

}
