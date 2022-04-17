import { Component, OnInit } from '@angular/core';
import { LibroService } from '../services/libro.service';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { LibroI } from '../model/libro.interface'
import { Router } from '@angular/router';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  public libro: Array<any> = []

  vFrmgLoginForm = new FormGroup({
    //f01_rowid: new FormControl(''),
    f01_titulo: new FormControl('',Validators.required),
    f01_fecha: new FormControl('',Validators.required),
    f01_genero: new FormControl('',Validators.required),
    f01_num_paginas: new FormControl('',Validators.required),
    f01_autor: new FormControl('Cristian Paz',Validators.required)
  })

  constructor(private pvLibroSerices:LibroService)
  {
    this.pvLibroSerices.getLibros().subscribe((resp:any) =>
      {
        console.log(resp)
        this.libro = resp
      })
  }

  filterPost = '';

  ngOnInit(): void {
  }

  GuardarLibro(form:LibroI)
  {
    //console.log("guardando")
    console.log(form)

    this.pvLibroSerices.addLibro(form).subscribe(data=>{
      console.log(data);
    });
    window.location.reload();
  }

  ConsultarAutor()
  {
    //this.router.navigate(['AutorComponent']);
  }




}
