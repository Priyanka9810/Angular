import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ProfileDetailsComponent } from './details/profile-details/profile-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'dashboard',
  component: ProfileDetailsComponent
},
{ path: 'dashboard/:id',
  component: ProfileDetailsComponent
},
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'attendence',
    component: AttendenceComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
