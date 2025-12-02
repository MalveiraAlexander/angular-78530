import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from "./pages/page-one/page-one.component";
import { PageTwoComponent } from './pages/page-two/page-two.component'

const routes: Routes = [
  { path: 'pageOne', component: PageOneComponent  },
  { path: 'pageTwo', component: PageTwoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
