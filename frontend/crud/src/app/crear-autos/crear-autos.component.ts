import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-autos',
  templateUrl: './crear-autos.component.html',
  styleUrls: ['./crear-autos.component.css']
})
export class CrearAutosComponent implements OnInit {

  constructor( private router: Router, private auto: AutosService) { }

  ngOnInit(): void {
  }

  nuevoAuto = {
    marca: '',
    modelo: '',
    color: '',
    precio: ''
  }

  registrar(){
    this.auto.crearAuto(this.nuevoAuto).subscribe(
      ( res ) => {
        console.log( res );
        this.router.navigate(['/listar'])
      },
      ( error ) => {
        console.log( error );
      }
    )
  }
}
