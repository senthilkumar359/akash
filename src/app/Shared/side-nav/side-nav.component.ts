import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProperyServiceService } from 'src/app/service/propery-service.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
toggle:boolean=false;
items:string[]=['NPA Classification','NPA Provisioning','Reports','SMA','DATA','ReviewProcessFlow'];
  constructor(private service:ProperyServiceService,private route:Router) {
     

    this.service.isSideNavClosed.subscribe((value:boolean)=>{
     this.toggle= value;
    });
  console.log("testduyasbajkdnck")
  }

  ngOnInit(): void {
    this.toggle=this.service.getShowSideNav;
    console.log(this.toggle);
  }
  routrmethod(indexVal:number){
      let path=this.items[indexVal];
      if(indexVal===0){this.route.navigate(['/npaclass']);}
     else if(indexVal===1)
      this.route.navigate(['/npaprov']); 
    else
    { 
      alert("pl select other options");
    }
    
  }
  
 

}
