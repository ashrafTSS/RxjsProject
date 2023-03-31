import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs';
import { DesignService } from '../design.service';

@Component({
  selector: 'app-switchserch',
  templateUrl: './switchserch.component.html',
  styleUrls: ['./switchserch.component.css']
})
export class SwitchserchComponent implements AfterViewInit {

  @ViewChild('searchForm') searchForm : NgForm

  constructor(private design:DesignService){}

  searchEnd;
  searchResultCount;

  ngAfterViewInit(): void {

     const formValue = this.searchForm.valueChanges;

     formValue.pipe(
      // map(data => data.searchTerm),
      filter(()=>this.searchForm.valid),
      pluck('searchTerm'),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(data => this.design.getSearch(data))
      )
     .subscribe(res=>{
      console.log(res);
       this.searchEnd = res
       this.searchResultCount = Object.keys(res).length
     })
  }


}

