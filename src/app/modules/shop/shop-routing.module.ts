import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "../../components/dashboard/dashboard.component";
import {ShopComponent} from "./components/shop/shop.component";

const routes: Routes = [
  { path: '', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
