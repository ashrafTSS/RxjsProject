import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { PromiseComponent } from './layout/promise/promise.component';
import { AsyncAwiteComponent } from './layout/obervable/async-awite/async-awite.component';
import { ObservableComponent } from './layout/observable/observable.component';
import { FormeventComponent } from './layout/observable/formevent/formevent.component';
import { IntervalTimerComponent } from './layout/observable/interval-timer/interval-timer.component';
import { OfFormComponent } from './layout/observable/of-form/of-form.component';
import { ToArrayComponent } from './layout/observable/to-array/to-array.component';
import { CustomObservableComponent } from './layout/observable/custom-observable/custom-observable.component';
import { MapComponent } from './layout/observable/map/map.component';
import { PluckComponent } from './layout/observable/pluck/pluck.component';
import { FilterComponent } from './layout/observable/filter/filter.component';
import { TapComponent } from './layout/observable/tap/tap.component';
import { TakeComponent } from './layout/observable/take/take.component';
import { RetryComponent } from './layout/observable/retry/retry.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//angular material
import {MatTableModule} from '@angular/material/table';
import { DebounceComponent } from './layout/observable/debounce/debounce.component';

//loadingbar
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SubjectComponent } from './layout/observable/subject/subject.component';
import { Comp1Component } from './layout/observable/comp1/comp1.component';
import { Comp2Component } from './layout/observable/comp2/comp2.component';
import { Comp3Component } from './layout/observable/comp3/comp3.component';
import { ReplayComponent } from './layout/observable/replay/replay.component';
import { AsyncComponent } from './layout/observable/async/async.component';
import { ConcatComponent } from './layout/observable/concat/concat.component';
import { MergeComponent } from './layout/observable/merge/merge.component';
import { MergeMapComponent } from './layout/observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './layout/observable/concat-map/concat-map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiseComponent,
    AsyncAwiteComponent,
    ObservableComponent,
    FormeventComponent,
    IntervalTimerComponent,
    OfFormComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    ReplayComponent,
    AsyncComponent,
    ConcatComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    LoadingBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
