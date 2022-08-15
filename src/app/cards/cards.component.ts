import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

public product_data: any;

  constructor( private httpC:HttpClient) {
    let url = '/assets/product_data.json'
    this.httpC.get<any>(url).subscribe(data => {
      this.product_data = data;
      console.log(this.product_data)

   })




}
ngOnInit(): void {

}
}