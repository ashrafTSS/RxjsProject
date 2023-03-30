import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(private design:DesignService){}

  getData(data){
    return of(data + ' Video Completed ').pipe(delay(2000))
  }

  ngOnInit(): void {
    const source = from(['Tech','Comedy','News'])

    //ex-01 | map
    source.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res=>{
      console.log(res);
      this.design.print(res,'concatId')
    })

     //ex-02 | mergeMap
     source.pipe(
      mergeMap(res => this.getData(res)),

    )
    .subscribe(res=>{
      console.log(res);
      this.design.print(res,'concatId2')
    })

      //ex-03 | concatMap
      source.pipe(
        concatMap(res => this.getData(res)),
      )
      .subscribe(res=>{
        console.log(res);
        this.design.print(res,'concatId3')
      })
  }

}
