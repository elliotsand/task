import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario$: Observable<{ username: string; password: string } | null>;

  constructor(private store: Store<AppState>) {
    this.usuario$ = this.store.select(state => state.user);
  }
}
