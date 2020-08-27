import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import {Filter} from './../../Models/filter';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [DashboardService]

})
export class FilterComponent implements OnInit {
public filter: Filter;
  public data;
  public articles;
  public categories;
  public categoryService;
  public testimonies;
  public array;

  constructor(
    private _serviceDashboard: DashboardService
  ) {
    this.filter=new Filter(null);
    this.dataService();
    this.array=this.articles;
  }

  ngOnInit(): void {
  }

  itemSelected(item) {
    if(item == 1){
      this.array=this.articles;
      console.log(this.array);
    }
    if(item == 2){
      this.array=this.categoryService;
    }
    if(item == 3){
      this.array=this.testimonies;
    }
  }

  showData() {
    this.articles = this.data.result.articles_pymes_test;
    this.categories = this.data.result.categories;
    this.categoryService = this.categories[0].services;
    this.testimonies = this.data.result.testimony;
  }


  dataService() {
    this._serviceDashboard.serviceNivelics().subscribe(
      response=>{
        this.data=response;
        this.showData();
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}
