import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';


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
public product_data : any;
public param:any;

public productDetails : any;

  constructor(private httpC : HttpClient, private activatedRouter : ActivatedRoute) {

    
    let url = '/assets/product_data.json'
    this.httpC.get<any>(url).subscribe(data => {
      this.product_data = data;
      this.getdata(this.product_data)
   })

   }

  ngOnInit(): void {
    
  }

  dd(){
    console.log("jhfewjh")
    localStorage.setItem("lastname", "Smith");
  }
  getdata(product_data: any){
    this.param = this.activatedRouter.snapshot.paramMap.get('key');
   this.param =  atob(this.param)
    console.log(this.param)
    for(let i=0; i < product_data.length;i++){
      if(product_data[i].ID == this.param){
        this.productDetails = product_data[i]
      }
    }
  }
  replace(){

  }

}
