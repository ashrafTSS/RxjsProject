import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { delay, from,map,of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {


  constructor(private design:DesignService){}

  //method
  getData(data){
    return  of(data + ' Video Upload').pipe(delay(1000))
  }

  ngOnInit(): void {
    const source = from(['Tech','Comedy','News'])

    //ex-01 | map
      source.pipe(
        map(data => this.getData(data))
      )
      .subscribe(res=>{
        console.log(res);
        this.design.print(res,"switchId")
      })

      //ex-02 | map + switchAll
      source.pipe(
        map(data => this.getData(data)),
        switchAll()
      )
      .subscribe(res=>{
        console.log(res);
        this.design.print(res,"switchId2")
      })

        //ex-03 |  switchMap
        source.pipe(
          switchMap(data => this.getData(data))
        )
        .subscribe(res=>{
          console.log(res);
          this.design.print(res,"switchId3")
        })

  }

}
