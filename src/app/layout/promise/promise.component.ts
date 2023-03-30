import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  promiseVal:any

  dell = {
    brand :'Dell',
    hardDisk : '2 tb',
    color : 'black'
  }

  hp = {
    brand :'Hp',
    hardDisk : '3 tb',
    color : 'white'
  }

  noAvail = {
    brand :'Not Available',
    status : 'failed'
  }

  constructor(){}

  DellPurchase(){
    return true
  }

  HpPurchase(){
    return false
  }

  ngOnInit(): void {
    let comeOffice = new Promise((resolve,reject) => {
      if(this.DellPurchase()){
        return setTimeout(() => {
          //  resolve('You have purchased dell computer')
          resolve(this.dell)
        },3000)
      } else if(this.HpPurchase()){
        return setTimeout(() => {
          // resolve('You have purchased hp computer')
          resolve(this.hp)
        },3000)
      } else{
          return setTimeout(() => {
            // reject('you dont purchase yet now')
            reject(this.noAvail)
           },3000);
      }

    });

  comeOffice.then(res=>{
    console.log('the code is =>',res);
      this.promiseVal = res
  }).catch(res=>{
    console.log('the code is =>',res);
    this.promiseVal = res
  })

  }
}

