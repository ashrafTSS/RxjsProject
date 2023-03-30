import { Component, OnInit } from '@angular/core';
import { interval,map,Subscription,tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit{
myColor: string = '';

  ngOnInit(): void {
    let obSub:Subscription
    let obSub2:Subscription
    const source = interval(2000)

    //ex - 01
    const arr = ['ash','raf','ali','youns','arsalan']

       obSub = source.pipe(
      tap(res=>{
        console.log('tab before => ' + res);

        if(res == 5){
          obSub.unsubscribe()
        }
      }),
      map(res => arr[res]),
      tap(res=>{console.log('tap after => ' + res);
      })
      )
    .subscribe(res=>{
      console.log(res);
      this.print(res)

    })

     //ex - 02
     const color = ['red','blue','yellow','green','brown']

     obSub2 = source.pipe(
    tap(res=>{
      this.myColor = color[res]
      console.log('tab before => ' + res);

      if(res == 5){
        obSub2.unsubscribe()
      }
    }),
    map(res => color[res]),
    tap(res=>{console.log('tap after => ' + res);
    })
    )
  .subscribe(res=>{
    console.log(res);
    this.print2(res)

  })
  }

  print(val){
    const el = document.createElement('li')
    el.innerText = val
    document.getElementById('tapId').appendChild(el)
  }

  print2(val){
    const el = document.createElement('li')
    el.innerText = val
    document.getElementById('tapId2').appendChild(el)
  }
}
