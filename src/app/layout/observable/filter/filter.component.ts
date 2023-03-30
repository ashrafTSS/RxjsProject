import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  dataGen;
  dataGen2;
  dataGen3;

  dataArr = [
    {id:1,name:"ashraf",gender:"male"},
    {id:2,name:"ali",gender:"male"},
    {id:3,name:"azi",gender:"female"},
    {id:4,name:"anum",gender:"female"},
    {id:5,name:"arsalan",gender:"male"},
    {id:6,name:"ash",gender:"male"},
    {id:7,name:"al",gender:"male"},
    {id:8,name:"ai",gender:"female"},
    {id:9,name:"anu",gender:"female"},
    {id:10,name:"arsal",gender:"male"}
  ]

  ngOnInit(): void {

const source = from(this.dataArr)

//ex-1 filter by length
source.pipe(
  filter(member => member.name.length > 5),
  toArray())
.subscribe(res=>{
  console.log(res);
  this.dataGen = res

})


//ex-2 filter by gender
source.pipe(
  filter(member => member.gender == 'male'),
  toArray())
.subscribe(res=>{
  console.log(res);
  this.dataGen2 = res

})

//ex-2 filter by item
source.pipe(
  filter(member => member.id <= 6 ),
  toArray())
.subscribe(res=>{
  console.log(res);
  this.dataGen3 = res

})

  }

}
