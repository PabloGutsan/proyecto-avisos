import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';
import { AuthComponent } from './components/sections/auth/auth.component';
import { RegisterComponent } from './components/sections/register/register.component';
import { RecoverPasswordComponent } from './components/sections/recover-password/recover-password.component';
import { ProfileComponent } from './components/sections/profile/profile.component';
import { CreatePublicationComponent } from './components/sections/create-publication/create-publication.component';
import { MyPublicationsComponent } from './components/sections/my-publications/my-publications.component';
import { ResultComponent } from './components/sections/result/result.component';
import { DetailsComponent } from './components/sections/details/details.component';
import { UsersComponent } from './components/sections/users/users.component';
import { AuthorizePublishComponent } from './components/sections/authorize-publish/authorize-publish.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recover-password', component: RecoverPasswordComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'create-publication', component: CreatePublicationComponent},
  {path: 'my-publications', component: MyPublicationsComponent},
  {path: 'result', component: ResultComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'authorize-publish', component: AuthorizePublishComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
