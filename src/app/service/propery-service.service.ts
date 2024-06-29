import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProperyServiceService {
showSideNav:boolean=false;
isSideNavClosed:Subject<boolean>=new Subject<boolean>();
  constructor() { }
set setShowSideNav(value:boolean){
  this.showSideNav=value;
}
get getShowSideNav(){
  return this.showSideNav;
}

}
