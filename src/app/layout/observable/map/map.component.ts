import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  //subscription
hiTest:Subscription;
hiTest2:Subscription;
hiTest3:Subscription;

//message
showMsg;
showMsg2;
showMsg3;

  constructor(){}


  ngOnInit(): void {

    const broadCastVideo = interval(1000)

    // //ex-1
    this.hiTest = broadCastVideo.pipe(
      map(data => 'Video ' + data)

      )
    .subscribe(res=>{
      // console.log(res);
      this.showMsg = res

    })

    setTimeout(() => {
      this.hiTest.unsubscribe()
    },7000);


    // ex-2
  this.hiTest2 = broadCastVideo.pipe(map(data => data * data))
  .subscribe(res=>{
    // console.log(res);
    this.showMsg2 = res

  })
 setTimeout(() => {
  this.hiTest2.unsubscribe()
 },9000);


 //ex-3
 const member = from([
  {id:101,name:'ash',age:27,address:'pernambut',email:'ash@gmail.com'},
  {id:102,name:'ali',age:24,address:'chennai',email:'ali@gmail.com'},
  {id:103,name:'ashraf',age:27,address:'mumbai',email:'ashraf@gmail.com'},
  {id:104,name:'arsalan',age:27,address:'usa',email:'arsalan@gmail.com'},
  {id:105,name:'azad',age:27,address:'uk',email:'azad@gmail.com'}
 ])

   member.pipe(map(data => data.address))
  .subscribe(res=>{
  console.log(res);
  this.print(res)

 })

  }

  print(val: string){
  let el = document.createElement('li')
  el.innerText = val;
  document.getElementById('obsId').appendChild(el)

  }


}
