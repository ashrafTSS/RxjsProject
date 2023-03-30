import { AfterViewInit, Component, ElementRef,ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent implements AfterViewInit{

  @ViewChild('myInput') myInput:ElementRef;
  @ViewChild('myInput2') myInput2:ElementRef;

  reqData = null;
  reqData2 = null;

  constructor(private loadingBar:LoadingBarService){}

  ngAfterViewInit(): void {

    //ex-01
      const search = fromEvent<any>(this.myInput.nativeElement,'keyup').pipe(
        map(event => event.target.value),
        debounceTime(500)
      )

      search.subscribe(res=>{
        console.log(res);
        this.reqData = res
        this.loadingBar.start()

        setTimeout(() => {
          this.reqData = null
          this.loadingBar.stop()
        },1000);

      })

      //ex-02
      const search2 = fromEvent<any>(this.myInput2.nativeElement,'keyup').pipe(
        map(event => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )

      search2.subscribe(res=>{
        console.log(res);
        this.reqData2 = res
        this.loadingBar.start()

        setTimeout(() => {
          this.reqData2 = null
          this.loadingBar.stop()
        },1000);

      })

  }

}
