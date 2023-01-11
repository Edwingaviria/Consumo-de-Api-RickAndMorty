import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
