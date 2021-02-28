import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service'
@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.css']
})
export class ShowApiComponent implements OnInit {

  li:any;
  lists:any=[];
  userData:any=[]
  constructor(private http : HttpClient,private user: UserService,private router:Router) { }

  ngOnInit(): void {
    this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
    .subscribe(Response => {

      // If response comes hideloader() function is called
      // to hide that loader

      this.li=Response;
      this.lists=this.li.list;


      this.user.getData().subscribe(data=>{
      console.log("data",data)
      this.userData=data
      })
    });

  }
back(){
  this.router.navigate(['/home']);
}
}
