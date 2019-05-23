import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MovieServiceService } from "../services/movie-service.service";
import { Movies } from "../models/movies";
import { PageEvent, MatPaginator } from "@angular/material";
import { Router, ActivatedRoute, Params, RouterOutlet } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogBoxComponent } from "../dialog-box/dialog-box.component";
const SMALL_SCREEN_SIZE = 720;
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_SCREEN_SIZE}px)`
  );
  constructor(
    private movieService: MovieServiceService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}
  data;
  movies: Movies[];
  page: any;
  itemPerPage: any;
  getNext(event: PageEvent) {
    this.page = event.pageIndex;
    this.itemPerPage = event.pageSize;
    if (!this.page) {
      this.page = 1;
    }
    //this.ngOnInit();
    this.pageCall();
  }

  ngOnInit() {
    // this.movieService
    //   .getAllmoviesList(this.page, this.itemPerPage)
    //   .subscribe(data1 => {
    //     this.movies = data1;
    //   });

    this.route.params.subscribe(params => {
      let id = params["id"];
      this.movieService.ratingURL(id).subscribe(rating => {
        this.movies = rating;
      });
      this.movieService.genres(id).subscribe(genres => {
        this.movies = genres;
      });
      console.log(id);
    });
  }
  pageCall() {
    this.movieService
      .getAllmoviesList(this.page, this.itemPerPage)
      .subscribe(data1 => {
        this.movies = data1;
      });
  }
  events: string[] = [];
  opened: boolean;
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
  openDialog(summary, language, rating,size,id): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: "950px",
      height: "650px",
      data: { datasummary: summary, dataLanguage: language, dataRating: rating, dataSize : size,dataId: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
}
