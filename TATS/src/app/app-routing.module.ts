import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'championships', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'championships',
    loadChildren: () => import('./pages/championships/championships.module').then( m => m.ChampionshipsPageModule)
  },
  {
    path: 'championship/:id',
    loadChildren: () => import('./pages/my-championship/my-championship.module').then( m => m.MyChampionshipPageModule)
  },
  {
    path: 'championship',
    loadChildren: () => import('./pages/add-championship/add-championship.module').then( m => m.AddChampionshipPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
