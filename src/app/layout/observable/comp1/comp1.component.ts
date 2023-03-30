import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

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
