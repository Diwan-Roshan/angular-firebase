import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dd(){
    console.log("jhfewjh")
    localStorage.setItem("lastname", "Smith");
  }

}
