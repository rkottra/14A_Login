import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { KategoriakComponent } from './kategoriak/kategoriak.component';
import { NyitooldalComponent } from './nyitooldal/nyitooldal.component';

const routes: Routes = [
  {
    path: "index",
    component: NyitooldalComponent
  },
  {
    path: "",
    redirectTo: "index",
    pathMatch: 'full'
  },
  {
      path: "kategoriak",
      component: KategoriakComponent
  },
  {
    path: "kapcsolat",
    component: KapcsolatComponent
  },
  {
    path: "**",
    redirectTo: "index",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
