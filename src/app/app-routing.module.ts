import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncAwiteComponent } from './layout/obervable/async-awite/async-awite.component';
import { AsyncComponent } from './layout/observable/async/async.component';
import { ConcatMapComponent } from './layout/observable/concat-map/concat-map.component';
import { ConcatComponent } from './layout/observable/concat/concat.component';
import { CustomObservableComponent } from './layout/observable/custom-observable/custom-observable.component';
import { DebounceComponent } from './layout/observable/debounce/debounce.component';
import { FilterComponent } from './layout/observable/filter/filter.component';
import { FormeventComponent } from './layout/observable/formevent/formevent.component';
import { IntervalTimerComponent } from './layout/observable/interval-timer/interval-timer.component';
import { MapComponent } from './layout/observable/map/map.component';
import { MergeMapComponent } from './layout/observable/merge-map/merge-map.component';
import { MergeComponent } from './layout/observable/merge/merge.component';
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
import { SwitchMapComponent } from './layout/observable/switch-map/switch-map.component';
import { SwitchserchComponent } from './layout/observable/switchserch/switchserch.component';
import { ExhaustMapComponent } from './layout/observable/exhaust-map/exhaust-map.component';
import { ZipforkComponent } from './layout/observable/zipfork/zipfork.component';
import { ShareReplayComponent } from './layout/observable/share-replay/share-replay.component';

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
    {path:'async',component:AsyncComponent},
    {path:'concat',component:ConcatComponent},
    {path:'merge',component:MergeComponent},
    {path:'mergeMap',component:MergeMapComponent},
    {path:'concatMap',component:ConcatMapComponent},
    {path:'switchMap',component:SwitchMapComponent},
    {path:'switchSearch',component:SwitchserchComponent},
    {path:'exhaustMap',component:ExhaustMapComponent},
    {path:'shareReplay',component:ShareReplayComponent},
    {path:'zip',component:ZipforkComponent}
  ]},
  {path:'**',redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
