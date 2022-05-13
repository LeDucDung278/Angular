import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304';

  teachers= [
    {
      id: 1,
      name: 'Teacher A',
      age: 23,
      gender: 1,
      avatar: 'https://placeimg.com/640/480/any',
      status: 1
    },
    {
      id: 2,
      name: 'Teacher E',
      age: 25,
      gender: 1,
      avatar: 'https://placeimg.com/640/480/any',
      status: 1
    },
    {
      id: 3,
      name: 'Teacher B',
      age: 30,
      gender: 0,
      avatar: 'https://placeimg.com/640/480/any',
      status: 0
    },
    {
      id: 4,
      name: 'Teacher C',
      age: 27,
      gender: 1,
      avatar: 'https://placeimg.com/640/480/any',
      status: 1
    },
    {
      id: 5,
      name: 'Teacher D',
      age: 29,
      gender: 0,
      avatar: 'https://placeimg.com/640/480/any',
      status: 0
    },
  ]
  StudentName = "DUNGLD2708"
  StudentId = "PH17915"
}
