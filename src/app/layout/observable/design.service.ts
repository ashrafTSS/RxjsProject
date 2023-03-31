import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  exclusive = new Subject<boolean>()

  userName = new BehaviorSubject<string>('Ashraf')

  videoEmit = new ReplaySubject<string>(3,5000)

  asyncVideo = new AsyncSubject()

  //api
  url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList';

  constructor(private http:HttpClient) { }

  //print method for li
  print(val,containerId){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById(containerId).appendChild(el)
  }


  //api method
  getSearch(searchTerm):Observable<any>{
    return this.http.get(this.url +'?q='+ searchTerm);
  }
}
