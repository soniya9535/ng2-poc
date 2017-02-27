"use strict";
var router_1 = require('@angular/router');
var schedule_component_1 = require('../schedule.component');
var agenda_component_1 = require('../agenda.component');
var jan1_component_1 = require('../jan1.component');
var jan2_component_1 = require('../jan2.component');
var filteredJan1_component_1 = require('../filteredJan1.component');
exports.routes = [
    { path: '', redirectTo: 'schedule', pathMatch: 'full' },
    { path: 'schedule', component: schedule_component_1.ScheduleComponent,
        children: [
            { path: '', redirectTo: 'agenda', pathMatch: 'full' },
            { path: 'agenda', component: agenda_component_1.AgendaComponent },
            { path: 'jan1', component: jan1_component_1.Jan1Component },
            { path: 'jan1/:id', component: filteredJan1_component_1.FilteredJan1Component },
            { path: 'jan2', component: jan2_component_1.Jan2Component }
        ]
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map