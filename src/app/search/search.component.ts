import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { SearchItem } from '../search-item'
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  private loading: boolean = false;
  // private results: any;
  // private searchField: FormControl;

   constructor(private itunes: SearchService,
               private route: ActivatedRoute,
               private router: Router) {
   this.route.params.subscribe( params => {
       console.log(params)
       if(params['term']){
         this.doSearch(params['term'])
       }
     });

   }
   doSearch(term:string){
      this.loading = true;
      this.itunes.search(term).then( () => this.loading = false)
   }
   onSearch(term:string) {
      this.router.navigate(['search', {term:term}]);
    }
   ngOnInit() {
     // this.searchField = new FormControl();
     // this.results = this.searchField.valueChanges
     //     .debounceTime(400)
     //     .distinctUntilChanged()
     //     .do( ()=> this.loading = true)
     //     .switchMap(term => this.itunes.search(term))
     //     .do( ()=> this.loading = false)
   }
   // doSearch(term: string) {
   //    this.itunes.search(term)
   //  }




}
