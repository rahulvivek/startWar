import { Component, OnInit } from '@angular/core';
import { CloudOptions, CloudData } from 'angular-tag-cloud-module';
import { StarwarApiService } from '../../services/startwar-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Input } from '@angular/core/src/metadata/directives';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {
  planetName: string = "";
  options: CloudOptions = {
    width : 900,
    height : 500,
    overflow: false,
  }
 
  data: CloudData[] = []

  planets = []
  searchTimer;
  deatils
 
  constructor(private starwarApiService: StarwarApiService) { }

  ngOnInit() {
    document.getElementsByTagName('body')[0].setAttribute('class', 'planet-list');
    this.starwarApiService.getPlanets().subscribe((result) => {
      this.planets = result;
      this.updateData(result);
    })
  }

  filterList() {
    
    clearTimeout(this.searchTimer)
    this.searchTimer = setTimeout(() => {
      console.log(this.planetName)
      this.starwarApiService.getPlanets(this.planetName).subscribe((result) => {
        this.planets = result;
        this.updateData(result);
      })
    }, 1000)
    
  }

  updateData(data) {
    /*
      For rendering the angular tag cloud, the data should be in a format.
      So this function will update data.
     */
    var newData = []
    var sortedPlanet = this.planets.sort((n1, n2) => n2.population - n1.population)
    
    for(let planet of this.planets) {
      let population = 1
      if(planet.population != "unknown") {
        population = planet.population;
      }
      newData.push({
        text: planet.name,
        weight: population,
        url: planet.url,
        color: this.getRandomColor()
      })
    }

    // This is the specific way to update the data after initilize the
    // tag cloud.
    const changedData$: Observable<CloudData[]> = Observable.of(newData)

    changedData$.subscribe(res => {
      this.data = res
    })
  }

  logClicked(clicked: CloudData){
    // Showing the detail on clicking the tag cloud item.
    this.starwarApiService.getByUrl(clicked["url"]).subscribe((res) => {
      this.deatils = res
    })
  }

  closeDetails() {
    //  Removing the detail object, this will close the detail view.
    this.deatils = undefined;
  }


  getRandomColor() {
    // Method to get random colors.
    let colors = [
      '#F44336', '#E91E63', '#9C27B0', '#3F51B5', '#009688', '#4CAF50', '#FF9800', '#795548', '#607D8B'
    ]

    return colors[Math.floor(Math.random()*colors.length)];
  }

}
