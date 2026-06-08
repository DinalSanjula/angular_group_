import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DealsComponent} from "./components/deals/deals.component";
import {ShopComponent} from "./modules/shop/components/shop/shop.component";
import {NewComponent} from "./components/new/new.component";
import {BestComponent} from "./components/best/best.component";
import {ContactComponent} from "./components/contact/contact.component";

const routes: Routes = [
  { path :'' , component : DashboardComponent},
  { path :'shop' , loadChildren: ()=> import('./modules/shop/shop.module').then(m => m.ShopModule) },
  { path :'deals' , component : DealsComponent},
  { path :'new' , component : NewComponent},
  { path :'best' , component : BestComponent},
  { path :'contact' , component : ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
