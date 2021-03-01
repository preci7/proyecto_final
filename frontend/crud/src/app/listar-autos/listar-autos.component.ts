import { Component, OnInit } from '@angular/core';
import { AutosService } from '../autos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-autos',
  templateUrl: './listar-autos.component.html',
  styleUrls: ['./listar-autos.component.css']
})
export class ListarAutosComponent implements OnInit {

  constructor( private router: Router, private auto: AutosService ) { }

  lista:any = []
  listaIni:any = []
  autoMarca:any = ''

  ngOnInit(): void {

    this.auto.listarAutos().subscribe(
      ( res ) => {
        this.lista    = res
        this.listaIni = res
      },
      ( error ) => {
        console.log( error )
      }
    )

  }

  eliminar ( autoSeleccionado:any ) {
    this.auto.eliminarAuto ( autoSeleccionado ).subscribe(

      ( res ) => {

        const index = this.lista.indexOf( autoSeleccionado )

        if ( index > -1 ){
          this.lista.splice( index, 1 )
        }

      },
      ( error ) => {
        console.log( error )
      }

    )
    
  }

  filtrar () {

    if ( !this.autoMarca.length ) {
      this.lista = this.listaIni
    } else {
      this.lista = this.listaIni.filter((list: { marca: string }) => list.marca.toLowerCase().includes(this.autoMarca));
    }
  }

}
