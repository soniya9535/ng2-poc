import { Routes, RouterModule } from '@angular/router';
import {ScheduleComponent} from '../schedule.component';
import {AgendaComponent} from '../agenda.component';
import {Jan1Component} from '../jan1.component';
import {Jan2Component} from '../jan2.component';
import{FilteredJan1Component} from '../filteredJan1.component';

export const routes: Routes = [
{path:'',redirectTo:'schedule',pathMatch:'full'},
{path:'schedule',component:ScheduleComponent,
children:[
  { path: '', redirectTo: 'agenda', pathMatch: 'full' },
      { path: 'agenda', component: AgendaComponent },
      {path:'jan1',component:Jan1Component},
      {path:'jan1/:id',component:FilteredJan1Component},
      {path:'jan2',component:Jan2Component}
    ]
}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
