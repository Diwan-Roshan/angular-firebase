import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  public id : any;
  public src : any;
public MainImagePath ='https://designmodo.com/demo/product-page/images/black.png';
public ImagePath = 'https://designmodo.com/demo/product-page/images/red.png'

  constructor() { }

  ngOnInit(): void {
  }

  dd(){
    console.log("jhfewjh")
    localStorage.setItem("lastname", "Smith");
  }
  replace(){

  }

}
