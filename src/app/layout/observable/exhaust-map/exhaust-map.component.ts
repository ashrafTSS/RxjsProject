import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {exhaustMap, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit,AfterViewInit {

url = 'https://exhaustmap-1b922-default-rtdb.firebaseio.com/exhaustMap.json'
  num = 0
  fetching = false
  btnDisable = false
  @ViewChild('btn') btn :ElementRef

  saveRequest;

  dataObs = {
    data : 0
  }

  constructor(private http:HttpClient){}


  onSave(change){
    return this.http.put(this.url,{data:change})
  }

  onFetch(){
    this.http.get<any>(this.url).subscribe(res=>{
      console.log(res.data);
      this.saveRequest = res.data

    })
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
     fromEvent(this.btn.nativeElement,'click').pipe(
      tap(()=>this.fetching = true),
      exhaustMap(()=>this.onSave(this.num++))
     )
     .subscribe(res=>{
      console.log(res);
      this.onFetch()
      this.fetching = false

     })
  }


}
