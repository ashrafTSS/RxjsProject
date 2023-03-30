import { Component, OnInit } from '@angular/core';
import { from, interval, map, take, takeLast, timer,takeUntil, fromEvent } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {

  dname;

  ngOnInit(): void {
    const dataNames = ['ashraf','ali','raf','arsalan','youns','dot','abc','def','igh','zxw','aaa']

    const ranName = from(dataNames)

    //ex-01 | take(5)
    const source = interval(1000)
    ranName.pipe(
      take(5)
    )
    .subscribe(res=>{
      console.log(res);
      this.print(res)

    })

    //ex-02 | takeLast(5)
    ranName.pipe(
      takeLast(5),
    )
    .subscribe(res=>{
      console.log(res);
      this.print2(res)

    })

    //ex-03 | takeUntil()
    const source2 = interval(1000)
    let condition = timer(5000)
    let condition2 = fromEvent(document,'click')

    source2.pipe(
      map(res=> 'Number ' + res),
      takeUntil(condition2)
    )
    .subscribe(res=>{
      console.log(res);
      this.print3(res)

    })
  }

  print(val: string){
    const el = document.createElement('li')
    el.innerText = val
    document.getElementById('name1').appendChild(el)
  }

  print2(val: string){
    const el = document.createElement('li')
    el.innerText = val
    document.getElementById('name2').appendChild(el)
  }

  print3(val: string){
    const el = document.createElement('li')
    el.innerText = val
    document.getElementById('name3').appendChild(el)
  }

}


