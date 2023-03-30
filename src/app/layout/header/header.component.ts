import { Component, OnInit } from '@angular/core';
import { DesignService } from '../observable/design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exclusive : Boolean = false

  constructor(private design:DesignService){}

  ngOnInit(): void {
      this.design.exclusive.subscribe(res=>{
        this.exclusive = res
      })
  }


}
