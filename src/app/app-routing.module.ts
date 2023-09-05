import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { AddGamesComponent } from "./components/add-games/add-games.component";
import { ViewGameDetailComponent } from "./components/view-game-detail/view-game-detail.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'add-games', component: AddGamesComponent },
  { path: 'view-game-detail/:id', component: ViewGameDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
