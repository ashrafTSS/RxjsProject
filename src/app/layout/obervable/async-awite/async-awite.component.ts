import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-awite',
  templateUrl: './async-awite.component.html',
  styleUrls: ['./async-awite.component.css']
})
export class AsyncAwiteComponent implements OnInit {

  constructor(){

  }
  ngOnInit(): void {

  //   let promise = new Promise((resolve,reject)=>{
  //     setTimeout(() => {
  //       resolve('data reeviced')
  //     }, 3000);
  //   })
  //   async function getData (){
  //    let response = await promise
  //   console.log(response);

  //   }

  // getData()

  let result = document.getElementById("result1")

  function add1(){
    result!.innerText = 'fetching data...'
  }

  }






}
