import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any = {
    rut: "",
    nombre: ""
  };

  mensaje: String = "";
  Storage: any;

  constructor(private rutaActiva: ActivatedRoute, private storage: Storage) {

    this.rutaActiva.queryParams.subscribe(params => {

      if (params['rutUsuario']) {
        this.mensaje = params['rutUsuario'];

      }
    });
  }

  ingresar()
   {

    var infoJson = JSON.stringify(this.usuario);
    this.Storage.set({ key: 'usuario', value: infoJson });

    console.log("Se guardaron datos del usuario");
    



  }

  ngOnInit() {
  }
  async verStorage() {
    let nombre = await this.storage.get("nombreUsuario");
    console.log("El nombre de usuario es: " + nombre);


  }
}
