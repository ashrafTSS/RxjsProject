import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  userName;
constructor(private design:DesignService){
  this.design.userName.subscribe(res=>{
   this.userName = res
  })
}

  ngOnInit(): void {

  }

  onChange(uname){
    console.log(uname.value);
     this.design.userName.next(uname.value)
  }
}
