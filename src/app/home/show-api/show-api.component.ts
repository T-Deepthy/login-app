import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-api',
  templateUrl: './show-api.component.html',
  styleUrls: ['./show-api.component.css']
})
export class ShowApiComponent implements OnInit {

  li:any;
  lis=[];
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
    .subscribe(Response => {

      // If response comes hideloader() function is called
      // to hide that loader
      if(Response){
        hideloader();
      }
      console.log(Response)
      this.li=Response;
      console.log("this.li",this.li)
      this.lis=this.li.list;
    });
    function hideloader(){
      // document.getElementById('loading').style.display = 'none';
    }
  }

}
