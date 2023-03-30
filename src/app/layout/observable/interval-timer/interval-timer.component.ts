import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {

  obsMsg;
  videoSub : Subscription;
  constructor(){}

  ngOnInit(): void {
    // const broadCastVideo = interval(2000);
    const broadCastVideo = timer(5000,1000);

    this.videoSub = broadCastVideo.subscribe(res=>{
      console.log(res);
      this.obsMsg = 'video ' + res

      if(res >=10){
        this.videoSub.unsubscribe()
      }

    })
  }

}

