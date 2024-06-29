import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { ProperyServiceService } from 'src/app/service/propery-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  toggle:boolean=true;
  UserName:string='';
  lastLogintime:string='';
  toggleLogout:boolean=false;
  constructor(private service:ProperyServiceService) { }

  ngOnInit(): void {
    this.UserName="SenthilKumar Kanagaraj(sk#####)";
    this.lastLogintime="14/4/2024 3:33PM";
    this.toggle=this.service.getShowSideNav;
  }
   viewSideNav(){
    // this.toggle=true;
    // console.log("tes");
    this.service.isSideNavClosed.next(
this.toggle=!this.toggle
    );
    if(this.service.getShowSideNav==true)
   { this.service.setShowSideNav=false;
    this.toggle=false;
   }else
  {this.service.setShowSideNav=true;
  this.toggle=true;}
// console.log(this.service.getShowSideNav);

  }
  logout(){
    this.toggleLogout=!this.toggleLogout;
  }
}
