import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input() obtenapi;
  @Input() icon;
  id:string
  path:string

  constructor(private router2:Router) { }

  ngOnInit() {

  }

  showItem(item){
    let urlElements = item.url.split("/");
    console.log(urlElements);
    this.id=urlElements[urlElements.length -2];
    //console.log(this.id);
    this.path=urlElements[urlElements.length -3];
    console.log(this.path);
    this.router2.navigateByUrl(`/${this.path}/${this.id}`);
  }

}
