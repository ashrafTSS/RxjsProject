import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
