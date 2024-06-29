import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './Shared/side-nav/side-nav.component';
import { HeaderComponent } from './Shared/header/header.component';
import { NpaClassificationComponent } from './core/npa-classification/npa-classification.component';
import { NpaProvisioningComponent } from './core/npa-provisioning/npa-provisioning.component';
import { AdminPageComponent } from './core/admin-page/admin-page.component';
const routes:Routes=[
  {path:'sidenav',component:SideNavComponent},
  {path:'header',component:HeaderComponent},
  {path:'npaclass',component:NpaClassificationComponent},
  {path:'npaprov',component:NpaProvisioningComponent},
  {path:'admin',component:AdminPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
