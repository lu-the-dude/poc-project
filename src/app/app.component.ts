import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private wiki: WikipediaService) {}

  twoWayText = '';
  count = 0;
  wikiSearchTerm = '';
  searchResults = [];
  displayedColumns: string[] = ['title', 'pageid', 'size', 'wordcount', 'URL'];

  onReverseText() {
    this.twoWayText = this.twoWayText.split("").reverse().join("");
  }

  onResetText() {
    this.twoWayText = '';
  }

  onSecretButton() {
    this.count++;
  }

  onSearchWiki() {
    this.wiki.search(this.wikiSearchTerm).subscribe( (data: any) => {
      this.searchResults = data.query.search;
      console.log(this.searchResults);
    })
  }
}
