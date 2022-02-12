import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'cronologias',component:TimelineComponent},
  {path:'about',component:AboutComponent},
  {path:'quiz',component:QuizComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, {useHash:true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
