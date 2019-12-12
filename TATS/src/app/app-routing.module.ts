import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'championships',
    loadChildren: () => import('./pages/championships/championships.module').then( m => m.ChampionshipsPageModule)
  },
  {
    path: 'championship',
    loadChildren: () => import('./pages/championship/my-championship.module').then( m => m.MyChampionshipPageModule)
  },
  {
    path: 'championship/:id',
    loadChildren: () => import('./pages/championship/my-championship.module').then( m => m.MyChampionshipPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
