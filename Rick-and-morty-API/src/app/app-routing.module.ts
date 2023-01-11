import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path : 'character/:id', component: PostDetailComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
