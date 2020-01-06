import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/championships/championships.module').then(m => m.ChampionshipsPageModule)
  },
  {
    path: 'championship',
    loadChildren: () =>
      import('./pages/championship/my-championship.module').then(m => m.MyChampionshipPageModule)
  },
  {
    path: 'championship/:id',
    loadChildren: () =>
      import('./pages/championship/my-championship.module').then(m => m.MyChampionshipPageModule)
  },
  {
    path: 'cups-list',
    loadChildren: () =>
      import('./pages/cups/cups-list/cups-list.module').then(m => m.CupsListPageModule)
  },
  {
    path: 'cup-details',
    loadChildren: () =>
      import('./pages/cups/cup-details/cup-details.module').then(m => m.CupDetailsPageModule)
  },
  {
    path: 'cup-details/:id',
    loadChildren: () =>
      import('./pages/cups/cup-details/cup-details.module').then(m => m.CupDetailsPageModule)
  },
  {
    path: 'cup-generator',
    loadChildren: () => import('./pages/cups/cup-generator/cup-generator.module').then( m => m.CupGeneratorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
