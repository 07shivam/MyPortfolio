import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './container/header/header.component';
import { AboutComponent } from './container/about/about.component';
import { SkillsComponent } from './container/skills/skills.component';
import { ExperienceComponent } from './container/experience/experience.component';
import { EducationComponent } from './container/education/education.component';
import { ContactComponent } from './container/contact/contact.component';
import { PortfolioComponent } from './container/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
