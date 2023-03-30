import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor(){}

  messageHide;
sourceSub : Subscription;

user = [
  {name : 'a', skill:'angular'},
  {name : 't', skill:'tailwind'},
  {name : 'b', skill:'bootstrap'},
  {name : 'j', skill:'javascript'},
  {name : 'h', skill:'html/css'}
]
  ngOnInit(): void {


    const source = interval(1000)

    //ex1
    this.sourceSub = source.pipe(
      take(10),
      toArray()
      )
    .subscribe(res=>{
      this.messageHide = res

    })

    //ex2
    const source2 = from(this.user)
    source2.pipe(toArray())
    .subscribe(res=>{
      console.log(res);

    })

  //ex3
  const source3 = of('tailwind','javascript','bootstrap','html/css','angular')
  source3.pipe(toArray())
  .subscribe(res=>{
    console.log(res);

  })
  }

}
