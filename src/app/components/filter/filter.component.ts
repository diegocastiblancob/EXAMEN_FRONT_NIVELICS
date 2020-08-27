import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { Filter } from './../../Models/filter';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [DashboardService]

})
export class FilterComponent implements OnInit {
  //declaracion de variables
  public filter: Filter;
  public data;
  public articles;
  public categories;
  public categoryService;
  public testimonies;
  public array;

  constructor(
    //llamado del servicio
    private _serviceDashboard: DashboardService
  ) {
    //inicializacion e intanciamiento de variables, metodos y clases
    this.filter = new Filter(null);
    this.dataService();
    this.array = this.articles;
  }

  ngOnInit(): void {
  }
  /**
    * @param {String} metodo itemselected
    * @param {String} mensaje valida el item seleccionado por el usuario
    * @returns {Array} array con la informacion que el usuario selecciono
    */
  itemSelected(item) {
    if (item == 1) {
      this.array = this.articles;
      console.log(this.array);
    }
    if (item == 2) {
      this.array = this.categoryService;
    }
    if (item == 3) {
      this.array = this.testimonies;
    }
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
    * @returns {Array} arsays con los datos del servicio
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
