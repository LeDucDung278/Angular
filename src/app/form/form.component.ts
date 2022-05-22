import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    inputValues = {
        id: 0,
        name: '',
        age: 0
    }

    users = [
        {
            id: 1,
            name: 'dungldph17915',
            age: 20
        },
        {
            id: 2,
            name: 'dungldph17920',
            age: 21
        }
    ]

    onSubmit(userForm: NgForm) {
        // console.log(formData);
        // Tìm ra id lớn nhất
        const userIds = this.users
            .map(user => user.id)
            .sort((a, b) => a - b)
        // console.log(userIds)
        const newId = userIds[userIds.length - 1]
        // Nếu inputValue có id = 0 thì là thêm mới => 2
        // Nếu inputValue có id !=0 thì là edit => 2.1

        if (this.inputValues.id == 0) {
            // 2.thêm vào mảng
            this.users.push ({
                ...userForm.value,
                id: newId + 1
            })
        } else {
            // 2.1 Edit
            const idx = this.users.findIndex((user) => user.id === this.inputValues.id)
            if(idx > -1){
                this.users[idx] = {
                    ...userForm.value,
                    id: this.inputValues.id
                }
            }
            // console.log(idx);
            
        }
        // this.users.push({
        //     ...userForm.value,
        //     id: newId + 1
        // });
        userForm.resetForm({
            name: '',
            age: 0,
        })
    }
    onDelete(userId: number) {
        this.users = this.users.filter((user)=>user.id !== userId)
    }
    onEdit(userId: number){
        const editUser = this.users.find((user) => user.id === userId)
        console.log(editUser);
        if(editUser){
            this.inputValues = {...editUser}
        }
        
    }

}
