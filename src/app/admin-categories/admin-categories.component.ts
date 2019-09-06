import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../catalogue.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  categories;
  mode = 'list';

  constructor(private catalogueService: CatalogueService) { }


  ngOnInit() {
    this.onGetAllCattegories();
  }

  onGetAllCattegories() {
    this.catalogueService.getAllCategories()
      .subscribe(data => {
        this.categories = data;
      }, err => {
        console.log(err);
      });
  }

  onDeleteCat(cat) {
    const c = confirm('Etes vous sure?');
    if (!c) { return; }
    this.catalogueService.deleteRessource(cat._links.self.href)
      .subscribe(data => {
        this.onGetAllCattegories();
      }, err => {
     console.log(err);
    });
  }

  onNewCat() {
    this.mode = 'new-cat';
  }

  onSaveCat(data) {
    console.log(data);
    const url = this.catalogueService.host + '/categories';
    this.catalogueService.postRessource(url, data)
      .subscribe( data => {
        this.mode = 'list';
        this.onGetAllCattegories();
      }, err => {
        console.log(err);
      });
  }


}
