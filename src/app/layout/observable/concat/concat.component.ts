import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

constructor(private design:DesignService){}

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map(v=> 'Tech Video # ' + (v+1)),take(5))
    const sourceComdey = interval(1000).pipe(map(v=> 'Comdey Video # ' + (v+1)),take(3))
    const sourceNews = interval(1000).pipe(map(v=> 'News Video # ' + (v+1)),take(4))

    const finalObs = concat(sourceTech,sourceComdey,sourceNews)
    finalObs.subscribe(res=>{
      console.log(res);
      this.design.print(res,'techId')

    })
  }

}
