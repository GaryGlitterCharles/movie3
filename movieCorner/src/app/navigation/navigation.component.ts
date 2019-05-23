import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  constructor() {}

  genres_m = [
    "Comedy",
    "Crime",
    "Drama",
    "Thriller",
    "Fantasy",
    "Romance",
    "Music",
    "War",
    "History",
    "Sci-fi",
    "Western",
    "Mystery",
    "Adventure",
    "Animation",
    "Family",
    "Film-Noir"
  ];

  ngOnInit() {}
  isCollapsed = false;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
