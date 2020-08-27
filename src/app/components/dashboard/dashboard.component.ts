import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
//declaracion de variables 
  public data;
  public articles;
  public categories;
  public categoryService;
  public testimonies;
  constructor(
    //lamado del servicio
    private _serviceDashboard: DashboardService
  ) {
    //inicializacion de metodos
    this.dataService();
  }

  ngOnInit(): void {
  }

/**
  * @param {String} metodo showDara
  * @param {String} mensaje Cargar variables con los datos necesarios para ser mostrados
  * @returns {Array} arrays cargados con  la informacion necesaria
  */
  showData() {
    this.articles = this.data.result.articles_pymes_test;
    this.categories = this.data.result.categories;
    this.categoryService = this.categories[0].services;
    this.testimonies = this.data.result.testimony;
  }
/**
  * @param {String} metodo dataService
  * @param {String} mensaje llama el servicio consumido para tomar la informción del mismo
  * @returns {Array} arrays con los datos del servicio
  */
  dataService() {
    this._serviceDashboard.serviceNivelics().subscribe(
      response => {
        this.data = response;
        this.showData();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
