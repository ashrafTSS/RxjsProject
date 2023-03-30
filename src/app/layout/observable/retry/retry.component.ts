import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';



@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  urls: any;
  fetching : boolean = false
  status = 'No Data'
constructor(private http:HttpClient){}

  ngOnInit(): void {
  }

  fetchDetails(){
    this.fetching = true
    this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      // retry(4)
      // retryWhen(err=> err.pipe(
      //   delay(3000),
      //   scan((retryCount)=>{
      //   if(retryCount){
      //     throw err
      //   }else{
      //     retryCount = retryCount + 1
      //   }
      //   },0)
      // ))
    )
    .subscribe(
      res=>{
      console.log(res);
      this.urls = res
      this.status = 'Data Fetched'
      this.fetching = false
    },
    (err)=>{
      console.log(err)
      this.status = 'Problem Fetched Data'
      this.fetching = false

    })
  }

}
