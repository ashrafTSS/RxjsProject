import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  dataName;
  dataName2;
  users = [
    {
      name: 'ashraf',
      skills: 'angular',
      job: {
        tile: 'Frond developer',
        exp: '1 year'
      },
    },
    {
      name: 'ali',
      skills: 'javascipt',
      job: {
        tile: 'web developer',
        exp: '2 year'
      },
    },
    {
      name: 'arsalan',
      skills: 'node.js',
      job: {
        tile: 'backend developer',
        exp: '3 year'
      },
    },
    {
      name: 'azad',
      skills: 'angular/node.js',
      job: {
        tile: 'fullstack developer',
        exp: '5 year'
      },
    },
  ];

  ngOnInit(): void {
    //ex-1
    from(this.users)
      .pipe(
        // map(data => data.name),
        pluck('name'),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.dataName = res;
      });

       //ex-2
    from(this.users)
    .pipe(
      // map(data => data.name),
      pluck('job','tile'),
      toArray()
    )
    .subscribe((res) => {
      console.log(res);
      this.dataName2 = res;
    });
  }
}


