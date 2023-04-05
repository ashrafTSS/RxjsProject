import { Component, OnInit } from '@angular/core';
import { DesignService } from '../design.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.css']
})
export class ShareReplayComponent implements OnInit {

  products = 'https://test-products-8f72f-default-rtdb.firebaseio.com/products.json'

  allProduct = []
  mobile= []
  laptop = []

  constructor( private basic : DesignService,private http:HttpClient){}

  ngOnInit(): void {
    this.getList()
    this.basic.dataPost()
  }

  getList(){
    this.http.get(this.products)
    .subscribe(res=>{

      var receivedObjects = Object.keys(res);

      for (var i = 0; i < receivedObjects.length; i++) {

        this.allProduct = [...this.allProduct, ...res[receivedObjects[i]]]
     }
     console.log(this.allProduct);


    })

  }

}
