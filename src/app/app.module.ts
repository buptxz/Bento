import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Import pages
import { HomePage } from '../pages/home/home';
// import { EventCreatePage } from '../pages/event-create/event-create';
// import { EventDetailPage } from '../pages/event-detail/event-detail';
// import { EventListPage } from '../pages/event-list/event-list';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';
import { OrderPage } from '../pages/order/order';
import { CartPage } from '../pages/cart/cart';
import { MenuCreatePage } from '../pages/menu-create/menu-create';
import { LandingPage } from '../pages/landing/landing';
import { AnonymousListPage } from '../pages/anonymous-list/anonymous-list';

// Import providers
import { AuthData } from '../providers/auth-data';
// import { EventData } from '../providers/event-data';
import { ProfileData } from '../providers/profile-data';
import { Data } from '../providers/data';
import { MenuData } from '../providers/menu-data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // EventCreatePage,
    // EventDetailPage,
    // EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    AboutPage,
    TabsPage,
    OrderPage,
    CartPage,
    MenuCreatePage,
    LandingPage,
    AnonymousListPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // EventCreatePage,
    // EventDetailPage,
    // EventListPage,
    LoginPage,
    ProfilePage,
    ResetPasswordPage,
    SignupPage,
    AboutPage,
    TabsPage,
    OrderPage,
    CartPage,
    MenuCreatePage,
    LandingPage,
    AnonymousListPage
  ],
  providers: [
    AuthData,
    // EventData,
    ProfileData,
    Data,
    MenuData
  ]
})
export class AppModule {}
