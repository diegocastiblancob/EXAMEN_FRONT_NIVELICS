import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  public data;
  public articles;
  public categories;
  public categoryService;
  public testimonies;
  constructor(
    private _serviceDashboard: DashboardService
  ) {
    this.dataService();
  }

  ngOnInit(): void {
  }


  showData(){
    this.articles=this.data.result.articles_pymes_test;
    this.categories=this.data.result.categories;
    this.categoryService=this.categories[0].services;
    this.testimonies=this.data.result.testimony;
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
