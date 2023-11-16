import { Component, OnInit } from '@angular/core';

import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:MovieApiServiceService) { }

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMoviesResult:any=[];
  adventureMoviesResult:any=[];
  animationMoviesResult:any=[];
  comedyMoviesResult:any=[];
  documentaryMoviesResult:any=[];
  scifiMoviesResult:any=[];
  thrillerMoviesResult:any=[];
  romanceMoviesResult:any=[];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovies();
    this.adventureMovies();
    this.animationMovies();
    this.comedyMovies();
    this.documentaryMovies();
    this.scifiMovies();
    this.thrillerMovies();
    this.romanceMovies();



  }

  // bannerdata
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    })
  }


  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult=result.results;
    })
  }

  actionMovies(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionresult#');
      this.actionMoviesResult=result.results;
    })
  }

  adventureMovies(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      console.log(result,'adventureresult#');
      this.adventureMoviesResult=result.results;
    })
  }

  animationMovies(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animationresult#');
      this.animationMoviesResult=result.results;
    })
  }

  comedyMovies(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'comedyresult#');
      this.comedyMoviesResult=result.results;
    })
  }

  documentaryMovies(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,'documentaryresult#');
      this.documentaryMoviesResult=result.results;
    })
  }

  scifiMovies(){
    this.service.fetchSciFiMovies().subscribe((result)=>{
      console.log(result,'scifiresult#');
      this.scifiMoviesResult=result.results;
    })
  }

  thrillerMovies(){
    this.service.fetchthrillerMovies().subscribe((result)=>{
      console.log(result,'thrillerresult#');
      this.thrillerMoviesResult=result.results; 
    })
  }

  romanceMovies(){
    this.service.fetchRomanceMovies().subscribe((result)=>{
      console.log(result,'romanceresult#');
      this.romanceMoviesResult=result.results;
    })
  }

  



  
}
