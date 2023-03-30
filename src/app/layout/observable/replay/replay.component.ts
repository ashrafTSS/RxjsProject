import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

userList1 = ['Angular1','Angular2'];
userList2 = [];
userList3 = [];

//subscription
subscribeMode2:boolean = false
subscribeMode3:boolean = false

subscription2 : Subscription
subscription3 : Subscription
intSub : Subscription

//method
methodInterval : boolean = false

constructor(private design:DesignService){}

  ngOnInit(): void {
       this.design.videoEmit.subscribe(res=>{
        console.log(res);
        this.userList1.push(res)

       })
  }

  //video add method
  onChange(video){
  // console.log(video.value);
  this.design.videoEmit.next(video.value)

  }

  //ex-2
user2Subscribe(){
  if(this.subscribeMode2){
    this.subscription2.unsubscribe()
  }else{
    this.subscription2 = this.design.videoEmit.subscribe(res=>{
      this.userList2.push(res)
    })
  }

  this.subscribeMode2 = !this.subscribeMode2
}

//ex-3
user3Subscribe(){
  if(this.subscribeMode3){
    this.subscription3.unsubscribe()
  }else{
    this.subscription3 = this.design.videoEmit.subscribe(res=>{
      this.userList3.push(res)
    })
  }

  this.subscribeMode3 = !this.subscribeMode3
}

//toggle method
toggleMethod(){
  const boradCost = interval(1000)
  if(!this.methodInterval){
    this.intSub = boradCost.subscribe(res=>{
      this.design.videoEmit.next('Video ' + res)
    })
  }else{
    this.intSub.unsubscribe()
  }

 this.methodInterval = !this.methodInterval
}

}
