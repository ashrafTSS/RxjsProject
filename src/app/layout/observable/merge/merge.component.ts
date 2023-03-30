import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private design:DesignService){}

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(map(v=> 'Tech Video # ' + (v+1)),take(5))
    const sourceComdey = interval(6000).pipe(map(v=> 'Comdey Video # ' + (v+1)),take(3))
    const sourceNews = interval(3500).pipe(map(v=> 'News Video # ' + (v+1)),take(4))

    const finalObs = merge(sourceTech,sourceComdey,sourceNews)
    finalObs.subscribe(res=>{
      console.log(res);
      this.design.print(res,'techId')

    })
  }

}
