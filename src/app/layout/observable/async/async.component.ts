import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignService } from '../design.service';


@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

asyncVideo;

constructor(private design:DesignService){}

  ngOnInit(): void {
    this.design.asyncVideo.subscribe(res=>{
      this.asyncVideo = res
    })
  }

  //video add method
  onChange(video){
  console.log(video.value);
  this.design.asyncVideo.next(video.value)

  }

//complete subscription
onComplete(){
  this.design.asyncVideo.complete()
  console.log('sjdfsjfn');


}

}

