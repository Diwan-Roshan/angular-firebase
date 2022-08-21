import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, UrlTree } from '@angular/router';
import { appConfig } from '../app.config';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

public product_data: any;

  constructor( private httpC:HttpClient,private router: Router) {
    let url = '/assets/product_data.json'
    this.httpC.get<any>(url).subscribe(data => {
      this.product_data = data;
      console.log(this.product_data)

   })




}
ngOnInit(): void {

}
detailsPage(path: string | UrlTree){
  this.router.navigateByUrl("details/" +path)
}
}