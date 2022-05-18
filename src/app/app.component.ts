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

  studentName = ''
  ClickH1 = ()=> {
    console.log('Đã Click vào');
    this.studentName= 'Poly'
  }

  ShowStatus = true
  changeTableStatus= ()=> {
    this.ShowStatus = !this.ShowStatus
  }

// Định nghĩa hàm nhận giá trị từ các input

  inputValues= {
    name: '',
    age: '',
    avatar: '',
    gender: '0',
    status: '0'
  }  
  // onInputName= (event:any,infor:string) =>{
  //   this.inputValues.name= event.target.value;
  // }
  // onInputAge= (event:any, infor:string) =>{
  //   this.inputValues.age= event.target.value;
  // }

  //key: 'name'|'age' => key chỉ được là giá trị 'name' hoặc 'age'
  onInput= (event:any, key: 'name' | 'age' | 'avatar' | 'gender' | 'status') => {
    this.inputValues[key]= event.target.value
  }
  onSubmit=() =>{
    console.log(this.inputValues)
    // Thêm dữ liệu vừa thao tác trên form vào mảng teachers
    this.teachers.push({
      ...this.inputValues,
      age: +this.inputValues.age,
      gender: +this.inputValues.gender,
      status: +this.inputValues.status,
      id: this.teachers.length +1,
    });
    // Cập nhật lại giá trị cho input ở form:
    this.inputValues = {
      name : '',
      age: '',
      avatar: '',
      gender: '0',
      status: '0'
    }
  }
  
}
