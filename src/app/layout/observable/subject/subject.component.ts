import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,OnDestroy{

  userName;
  constructor(private design:DesignService){
    this.design.userName.subscribe(res=>{
       this.userName = res
    })
  }


  ngOnInit(): void {
    this.design.exclusive.next(true)
  }

  ngOnDestroy(): void {
    this.design.exclusive.next(false)
  }

}
