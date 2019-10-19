import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { Homecomponent } from "./Components/Pages/Home/home.component";
import { Detailcomponent } from "./Components/Pages/Detail/detail.component";
import { Catecomponent } from "./Components/Pages/Cate/cate.component";

const routesConfig: Routes = [
  // {path:'',component},
  { path: "cate", component: Catecomponent },
  { path: "detail", component: Detailcomponent },
  { path: "**", component: Homecomponent }
];
@NgModule({
  declarations: [Homecomponent, Catecomponent, Detailcomponent],
  imports: [RouterModule.forRoot(routesConfig), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
