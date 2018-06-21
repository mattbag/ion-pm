import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResults } from './search-results';
// import { MasonryModule } from 'angular2-masonry';

@NgModule({
  declarations: [
    SearchResults,
  ],
  imports: [
    IonicPageModule.forChild(SearchResults),
    // MasonryModule
  ],
  exports: [
    SearchResults
  ]
})
export class SearchResultsModule {}
