import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, map, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

  exclusive = new Subject<boolean>()

  userName = new BehaviorSubject<string>('Ashraf')

  videoEmit = new ReplaySubject<string>(3,5000)

  asyncVideo = new AsyncSubject()

  //api
  url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList';

  products = 'https://test-products-8f72f-default-rtdb.firebaseio.com/products.json'



  productList = [

    {
      "description" : "sdskf sdjfsdkf",
      "id" :"p1",
      "imgUrl" : "https://placeimg.com/400/250/any?t=1593468069167",
      "name" : "Mobile",
      "price" : 5500,
      "type" : "mobile"
    },

    {
      "description" : "dummy text of the printing and typesetting industry",
      "id" :"p2",
      "imgUrl" : "https://placeimg.com/400/250/any?t=1593468069168",
      "name" : "Laptop-Dell",
      "price" : 45500,
      "type" : "pc"
    },

    {
      "description" : "dummy text of the printing and typesetting industry",
      "id" :"p3",
      "imgUrl" : "https://placeimg.com/400/250/any?t=1593468069167",
      "name" : "Laptop-Apple",
      "price" : 55500,
      "type" : "pc"
    },

    {
      "description" : "dummy text of the printing and typesetting industry",
      "id" :"p4",
      "imgUrl" : "https://placeimg.com/400/250/any?t=1593468069167",
      "name" : "Mobile-Iphone",
      "price" : 6500,
      "type" : "mobile"
    },

    {
      "description" : "dummy text of the printing and typesetting industry",
      "id" :"p5",
      "imgUrl" : "https://placeimg.com/400/250/any?t=1593788069167",
      "name" : "Mobile-Samsung",
      "price" : 8500,
      "type" : "mobile"
    },

    {
      "description" : "dummy text of the printing and typesetting industry",
      "id" :"p6",
      "imgUrl" : "https://placeimg.com/400/250/any?t=1593468065557",
      "name" : "Mobile-Android",
      "price" : 9500,
      "type" : "mobile"
    },

    {
      "description" : "dummy text of the printing and typesetting industry",
      "id" :"p7",
      "imgUrl" : "https://placeimg.com/400/250/any?t=1598888069167",
      "name" : "Washing-Machine",
      "price" : 10500,
      "type" : "product"
    },

    {
      "description" : "dummy text of the printing and typesetting industry",
      "id" :"p8",
      "imgUrl" : "https://placeimg.com/400/250/any?t=1512168069167",
      "name" : "Televison",
      "price" : 12500,
      "type" : "mobile"
    },

]
  constructor(private http:HttpClient) { }

  //print method for li
  print(val,containerId){
    let el = document.createElement('li')
    el.innerText = val
    document.getElementById(containerId).appendChild(el)
  }


  //api method
  getSearch(searchTerm):Observable<any>{
    return this.http.get(this.url +'?q='+ searchTerm);
  }

  //post
  dataPost(){
    return this.http.post(this.products,this.productList)
  }



}
