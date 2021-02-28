import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
user=''
  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.user = JSON.stringify(localStorage.getItem('email'))
  }
logout() {
  localStorage.removeItem('email')
  this.router.navigate(['/login']);

}show(){
this.router.navigate(['/home/show'])
}}
