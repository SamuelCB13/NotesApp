import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  createdNotes: any[] = [];
  private noteAddedSubject = new Subject<any>();

  noteAdded$ = this.noteAddedSubject.asObservable();

  addNote(note: any) {
    this.createdNotes.push(note);
    this.noteAddedSubject.next(note);
  }
}
