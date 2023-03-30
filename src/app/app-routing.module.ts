import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwiteComponent } from './layout/obervable/async-awite/async-awite.component';
import { AsyncComponent } from './layout/observable/async/async.component';
import { CustomObservableComponent } from './layout/observable/custom-observable/custom-observable.component';
import { DebounceComponent } from './layout/observable/debounce/debounce.component';
import { FilterComponent } from './layout/observable/filter/filter.component';
import { FormeventComponent } from './layout/observable/formevent/formevent.component';
import { IntervalTimerComponent } from './layout/observable/interval-timer/interval-timer.component';
import { MapComponent } from './layout/observable/map/map.component';
import { ObservableComponent } from './layout/observable/observable.component';
import { OfFormComponent } from './layout/observable/of-form/of-form.component';
import { PluckComponent } from './layout/observable/pluck/pluck.component';
import { ReplayComponent } from './layout/observable/replay/replay.component';
import { RetryComponent } from './layout/observable/retry/retry.component';
import { SubjectComponent } from './layout/observable/subject/subject.component';
import { TakeComponent } from './layout/observable/take/take.component';
import { TapComponent } from './layout/observable/tap/tap.component';
import { ToArrayComponent } from './layout/observable/to-array/to-array.component';
import { PromiseComponent } from './layout/promise/promise.component';

const routes: Routes = [
  {path:'promise',component:PromiseComponent},
  {path:'observable',children:[
    {path:'',component:ObservableComponent},
    {path:'async-await',component:AsyncAwiteComponent},
    {path:'form-event',component:FormeventComponent},
    {path:'interval',component:IntervalTimerComponent},
    {path:'of-from',component:OfFormComponent},
    {path:'toArray',component:ToArrayComponent},
    {path:'custom-observable',component:CustomObservableComponent},
    {path:'map',component:MapComponent},
    {path:'pluck',component:PluckComponent},
    {path:'Filter',component:FilterComponent},
    {path:'tap',component:TapComponent},
    {path:'take',component:TakeComponent},
    {path:'ertry',component:RetryComponent},
    {path:'debounce',component:DebounceComponent},
    {path:'subject',component:SubjectComponent},
    {path:'replay',component:ReplayComponent},
    {path:'async',component:AsyncComponent}
  ]},
  {path:'**',redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
