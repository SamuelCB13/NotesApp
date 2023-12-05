// notes.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  user: string = '';
  title: string = '';
  content: string = '';
  date: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Recupera los parámetros de la URL
    this.route.queryParams.subscribe(params => {
      this.user = params['user'];
      this.title = params['title'];
      this.content = params['content'];
      this.date = params['date'];
    });
  }

  editNote() {
    // Redirige a la página de edición, pasando los parámetros actuales
    this.router.navigate(['/create'], {
      queryParams: { user: this.user, title: this.title, content: this.content, date: this.date }
    });
  }

  deleteNote() {
    // Implementa la lógica de eliminación aquí (puede ser una llamada a un servicio)
    // Después de eliminar, puedes redirigir a la página de lista de notas, por ejemplo
    this.router.navigate(['/']);
  }
}
