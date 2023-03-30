import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AsyncAwiteComponent } from '../../obervable/async-awite/async-awite.component';

@Component({
  selector: 'app-formevent',
  templateUrl: './formevent.component.html',
  styleUrls: ['./formevent.component.css']
})
export class FormeventComponent implements OnInit,AfterViewInit {
  load: boolean = false;

  constructor(){}
@ViewChild(AsyncAwiteComponent) asynccomponetn!:AsyncAwiteComponent
// @ViewChild('addBtn') addBtn!: ElementRef;
  // @ViewChild('addBtn') addBtn!: ElementRef;

  ngOnInit(){
    setTimeout(() => {
      const load = this.asynccomponetn
      this.load = true
    }, 3000);



  }

  ngAfterViewInit(){
    // let count = 1
    // fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
    //   console.log('video',count++);
    //   this.print()
    //  })


  }

  print(){
    let el = document.createElement('li')
    el.innerText ='ash'
    document.getElementById('addList')?.appendChild(el)
  }

}
