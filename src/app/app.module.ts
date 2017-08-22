import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const appRoutes: Routes = [
  {
    path: 'users',
    component: UserListComponent,
    data: { title: 'Users List' }
  },
  {
    path: 'users/new',
    component: UserCreateComponent,
    data: { title: 'Create New User' }
  },
  {
    path: 'users/:id',
    component: UserViewComponent,
    data: { title: 'Users View' }
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
    data: { title: 'Users Edit' }
  },
  { path: '', redirectTo: '/users/new', pathMatch: 'full' },
  { path: '**', redirectTo: '/users/new', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UserCreateComponent,
    UserViewComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
