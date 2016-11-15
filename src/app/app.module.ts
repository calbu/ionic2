import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MarinariePage } from '../pages/marinarie/marinarie';
import { QuestionService } from '../providers/questions.service';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    MarinariePage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    MarinariePage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    QuestionService,
  ]
})
export class AppModule {}
