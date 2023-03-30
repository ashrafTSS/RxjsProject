import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomObservableComponent implements OnInit {

  theStatus
  names;
  namesStatus;
  constructor(){}

  ngOnInit(): void {

  //ex1
  const cusObs1 = Observable.create(observer =>{
    setTimeout(() => {
    observer.next('javascript')

    }, 1000);

    setTimeout(() => {
      observer.next('tailwind')
      //
      }, 2000);

      setTimeout(() => {
        observer.next('bootstrap')
        observer.complete()
         this.theStatus = 'complete'
        }, 3000);


  })

 //ex-3
  const arr = ['Javascript','Tailwind','Bootstrap','Angular','Html/Css']
  const ex1 = Observable.create(observer=>{
   let count = 0
   setInterval(()=>{
    observer.next(arr[count])

    if(count >=3 ){
      // observer.error('error emit')
    }

    if(count >=5 ){
      observer.complete()
    }
    count++;
   },1000)
  })

  ex1.subscribe(res=>{
    console.log(res);
     this.names = res
  },
  (err)=>{
    this.namesStatus = 'error'
  },
  ()=>{
    this.namesStatus = 'complete'
  })



//ex1
  cusObs1.subscribe(res=>{
    // console.log(res);
    this.print(res)
    this.theStatus = res
  },
  (err)=>{
    this.theStatus = 'error'
  },
  ()=>{
    this.theStatus = 'complete'
  }
  )

  }


  print(val){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById('manuId').appendChild(el)

  }

}
