import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-form',
  templateUrl: './of-form.component.html',
  styleUrls: ['./of-form.component.css']
})
export class OfFormComponent implements OnInit {

obsMsg;
  constructor(){}

  ngOnInit(): void {

    //of operator
    const obs1 = of('ashraf','ali','arsalan')

    obs1.subscribe(res=>{
      console.log(res);
      this.print(res)

    })

    // //example2
    const obs2 = of({a: 'ashraf',b: 'ali',c:'arsalan',d:'azad'})

    obs2.subscribe(res=>{
      console.log('obsMsg =>',res);
      this.obsMsg = res


    })

    //from operator1
    const obsar = from(['tailwind','bootstrap','html/css','javascript'])
    obsar.subscribe(res=>{
      console.log('obsMsg =>',res);
      this.show(res)

    })

    // from - promise
    const promise = new Promise(resolve =>{
      setTimeout(() => {
        resolve('promise are resolved')
      },4000);
    })

    // promise.then(res=>{
    //   console.log(res);

    // })

    const obs5 = from(promise)
    obs5.subscribe(res=>{
      console.log('from to promise =>',res);
      this.show1(res)

    })

    // string - promise
    const obs6 = from('welcome to form to string observable')
    obs6.subscribe(res=>{
      setTimeout(() => {
        console.log('from to string =>',res);
      this.show2(res)
      },3000);

    })
  }

  print(val){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById('listId')?.appendChild(el)
  }

  show(val){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById('listId3')?.appendChild(el)
  }

  show1(val){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById('listId4')?.appendChild(el)
  }

  show2(val){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById('listId5')?.appendChild(el)
  }

}
