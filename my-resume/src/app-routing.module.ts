import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/container/about/about.component';
import { ContactComponent } from 'src/app/container/contact/contact.component';
import { EducationComponent } from 'src/app/container/education/education.component';
import { ExperienceComponent } from 'src/app/container/experience/experience.component';
import { SkillsComponent } from 'src/app/container/skills/skills.component';


   const routes: Routes = [
     { path: 'about', component: AboutComponent },
     { path: 'skills', component: SkillsComponent },
     { path: 'experience', component: ExperienceComponent },
     { path: 'education', component: EducationComponent },
     { path: 'contact', component: ContactComponent },
     { path: '', redirectTo: '/about', pathMatch: 'full' }
   ];

   @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
   })
   export class AppRoutingModule {}