// tu-componente.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userForm!: FormGroup;
  users: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  onSubmit() {
    const userName = this.userForm.get('name')?.value;
    this.users.push(userName);
    this.userForm.reset();
  }
}
