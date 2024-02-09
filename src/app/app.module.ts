import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/sections/home/home.component';
import { RegisterComponent } from './components/sections/register/register.component';
import { AuthComponent } from './components/sections/auth/auth.component';
import { ResultComponent } from './components/sections/result/result.component';
import { ProfileComponent } from './components/sections/profile/profile.component';
import { DetailsComponent } from './components/sections/details/details.component';
import { CreatePublicationComponent } from './components/sections/create-publication/create-publication.component';
import { MyPublicationsComponent } from './components/sections/my-publications/my-publications.component';
import { UsersComponent } from './components/sections/users/users.component';
import { RecoverPasswordComponent } from './components/sections/recover-password/recover-password.component';
import { AuthorizePublishComponent } from './components/sections/authorize-publish/authorize-publish.component';
import { ResultService } from './components/sections/result/result.service';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    AuthComponent,
    ResultComponent,
    ProfileComponent,
    DetailsComponent,
    CreatePublicationComponent,
    MyPublicationsComponent,
    UsersComponent,
    RecoverPasswordComponent,
    AuthorizePublishComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [ResultService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
