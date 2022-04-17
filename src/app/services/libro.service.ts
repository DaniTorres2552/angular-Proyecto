import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../model/response.interface';
import { LibroI } from '../model/libro.interface';


const httpOption = {
  Headers: new HttpHeaders({
    'Contend-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})


export class LibroService {
  v_url: string = 'api/t01_libro/';
  v_urlXId: string = 'api/t01_libro';

  filterPost = '';

  constructor(private http: HttpClient) {

  }

  getLibros() {
    let headers = new HttpHeaders().set('Type-content', 'aplication/json');
    return this.http.get(this.v_url, { headers: headers });
  }

  // Mostrar registros por Rowid
  getLibrosXRowid(): Observable<IResponse> {
    return this.http.get<IResponse>(this.v_urlXId);
  }

  // agregar nuevo registro de Libro
  addLibro(form:LibroI): Observable<IResponse>
  {
    //let vLtLibro = this.v_urlXId + "t01_libro"
    return this.http.post<IResponse>(this.v_urlXId,form);
  }

}
