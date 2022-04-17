import { Component, OnInit } from '@angular/core';
import { AutorService } from '../services/autor.services';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { IAutor } from '../model/autor.interface'

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})

export class AutorComponent implements OnInit {

  public vArrAutor: Array<any> = []

  vFrmgLoginForm = new FormGroup({
    //f01_rowid: new FormControl(''),
    f02_nombre: new FormControl('',Validators.required),
    f02_fecha_nacimiento: new FormControl('',Validators.required),
    f02_ciudad: new FormControl('',Validators.required),
    f02_correo: new FormControl('',Validators.required),

  })

  constructor(private autorService: AutorService)
  {
    this.autorService.getAutores().subscribe((resp:any) =>
      {
        console.log('mensaje dani')
        console.log(resp)
        this.vArrAutor = resp
      })
  }

  ngOnInit(): void {
  }

  // Guardar autor
  GuardarAutor(form:IAutor)
  {
    //console.log("guardando")
    console.log(form);
    this.autorService.addAutor(form).subscribe(data=>{
      console.log(data);
    });


    //window.location.reload();
  }

}
