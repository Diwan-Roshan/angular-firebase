import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public object = [{'a':{'id':'1','name':'dr'},'b':{'id':'2','name':'drs'},'c':{'id':'3','name':'drr'}}]
  public menu = false;
  constructor() { }

  
  ngOnInit(): void {
    var output = [];
    for (var i=0; i < this.object.length ; ++i)
    console.log(this.object)
        output.push(this.object[i]);
        console.log(output)
    // return output;
    // let bb = Object.keys(this.object.a)
    // console.log(bb[Math.floor(Math.random()*bb.length)])
  }

  openNav():any{
    document.body.classList.add('bg');
    this.menu = true;
  }

  closeNav():any {
    document.body.classList.remove('bg');
    this.menu = false;

  }


}
