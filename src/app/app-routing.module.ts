import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/homepage.component';
import { InteractivePageComponent } from './interactive-page/interactive-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TablePageComponent } from './table-page/table-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "interactive", component: InteractivePageComponent },
  { path: "table", component: TablePageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
