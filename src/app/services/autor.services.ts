import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { IAutor } from '../model/autor.interface'
import { IResponse } from '../model/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  v_url = "api/t02_autor/"
  vAddAutor: string = 'api/t02_autor';


  constructor( private http: HttpClient  ) {
    //console.log('Este es un msj de Dani')
  }

    getAutores()
    {

      let headers = new  HttpHeaders()
      .set('Type-content', 'aplication/json')
      return this.http.get(this.v_url, {headers:headers} );
    }

    // agregar nuevo registro de Libro
    addAutor(form:IAutor): Observable<IResponse>
    {
      //let vLtLibro = this.v_urlXId + "t01_libro"
      return this.http.post<IResponse>(this.vAddAutor, form);
    }
}
