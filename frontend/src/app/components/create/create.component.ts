// create.component.ts
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  user: string = '';
  users: string[] = [];
  title: string = '';
  content: string = '';
  date: string = '';

  // Nueva propiedad para almacenar las notas creadas
  createdNotes: any[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.getUsers();
  }

  saveNote() {
    const newNote = {
      user: this.user,
      title: this.title,
      content: this.content,
      date: this.date,
    };

    this.router.navigate(['/'], { queryParams: { user: this.user, title: this.title, content: this.content, date: this.date } });

    // Agregar la nota al array de notas creadas
    this.createdNotes.push(newNote);

    // Log para verificar que se agregó la nota correctamente
    console.log('Nota creada:', newNote);

    // También puedes guardar estos datos utilizando tu servicio o la lógica necesaria.
  }
}
