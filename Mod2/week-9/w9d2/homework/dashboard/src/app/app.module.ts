import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AverageratingComponent } from './averagerating/averagerating.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { OnlineanalysisComponent } from './onlineanalysis/onlineanalysis.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsmainComponent } from './reviewsmain/reviewsmain.component';
import { SentimentanalysisComponent } from './sentimentanalysis/sentimentanalysis.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WebsitevisitorsComponent } from './websitevisitors/websitevisitors.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    AverageratingComponent,
    CustomersComponent,
    DashboardComponent,
    HeaderComponent,
    OnlineanalysisComponent,
    ReviewsComponent,
    ReviewsmainComponent,
    SentimentanalysisComponent,
    SettingsComponent,
    SidebarComponent,
    WebsitevisitorsComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
