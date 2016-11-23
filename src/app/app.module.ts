import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MarinariePage } from '../pages/marinarie/marinarie';
import { QuestionService } from '../providers/questions.service';
import { Userpage } from '../pages/userpage/userpage';
import { Signup } from '../pages/signup/signup';
import { AuthService } from '../providers/authservice';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MarinariePage,
    ItemDetailsPage,
    ListPage,
    Userpage,
    Signup
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MarinariePage,
    ItemDetailsPage,
    ListPage,
    Userpage,
    Signup
  ],
  providers: [
    QuestionService,
    AuthService
  ]
})
export class AppModule { }
