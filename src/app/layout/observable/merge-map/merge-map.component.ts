import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css']
})
export class MergeMapComponent implements OnInit {

  constructor(private design:DesignService){}

  //method
  getData(data){
    return  of(data + ' Video Upload')
  }

  ngOnInit(): void {
    const source = from(['Tech','Comedy','News'])

    //ex-01 | map
    source.pipe(
      map(res => this.getData(res))
    )
    .subscribe(res=>{
      console.log(res);
      this.design.print(res,'techId')

    })

      //ex-02 | map + mergeAll
      source.pipe(
        map(res => this.getData(res)),
        mergeAll()
      )
      .subscribe(res=>{
        console.log(res);
        this.design.print(res,'techId2')

      })

        //ex-03 |  mergeMap
        source.pipe(
          mergeMap(res => this.getData(res)),
        )
        .subscribe(res=>{
          console.log(res);
          this.design.print(res,'techId3')

        })

  }

}
