import { Component } from '@angular/core';

@Component({
  selector:'schedule',
  template:`
<nav>
     <a [routerLink]="['agenda']">Agenda</a>
     <a [routerLink]="['jan1']">Jan1</a>
     <a [routerLink]="['jan2']">Jan2</a>
</nav>
<br>
<div>
  <router-outlet></router-outlet>
</div>
  `
})
export class ScheduleComponent{

}
