import { Component } from '@angular/core';
import { LibroService } from './services/libro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca';
  //public libro: Array<any> = []

  //constructor(private libroSerices:LibroService)
  constructor()
  {
    /*

    this.libroSerices.getLibros().subscribe((resp:any) =>
      {
        console.log(resp)
        this.libro = resp
      })
      */

  }
}
