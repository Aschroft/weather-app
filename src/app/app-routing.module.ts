import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from '../components/home/home.component';
import { TemperatureHistory } from '../components/temperature-history/temperature-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'temperature-history', component: TemperatureHistory },
    // loadChildren: () => import('../components/temperature-history/temperature-history.module').then(m => m.TemperatureHistoryModule)},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
