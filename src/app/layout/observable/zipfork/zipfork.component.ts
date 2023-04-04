import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, map, take, zip } from 'rxjs';

@Component({
  selector: 'app-zipfork',
  templateUrl: './zipfork.component.html',
  styleUrls: ['./zipfork.component.css']
})
export class ZipforkComponent implements AfterViewInit {


  //source
  nameSource = ['Anup','Shekar','Sharma','Uxtrends','Jhon','Alex']
  colorSource = ['red','green','blue','yellow','violet','purple']

  //template reference
  @ViewChild('name') name :ElementRef;
  @ViewChild('color') color :ElementRef;


  ngAfterViewInit(): void {

    //names get
    const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(
    map(event => event.target.value),take(4))


  //color get
  const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(
    map(event => event.target.value),take(3))

  //ex 01 - zip
  zip(nameObs,colorObs).subscribe(([name,color])=>{
    console.log(name,color);
    this. createBox(name,color,'elContainer')
  })

    //ex 02 - forkjoin
    forkJoin(nameObs,colorObs).subscribe(([name,color])=>{
      console.log(name,color);
      this. createBox(name,color,'elContainer')
    })
  }

   //dyamic create a box with class
   createBox(name,color,containerId){
    let el = document.createElement('div');
    el.innerText = name
    el.setAttribute("class",color)
    document.getElementById(containerId).appendChild(el)
   }

}
