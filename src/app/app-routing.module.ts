import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmiterComponent } from './components/emiter/emiter.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { NgModule } from "@angular/core";
import { RouterModule , Routes} from "@angular/router";
import { ChangeNumberComponent } from './components/change-number/change-number.component';

const routes: Routes = [
    
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'number', component: ChangeNumberComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'emiter', component: EmiterComponent},
  {path: 'events', component: EventsComponent},
  {path: 'ifRender', component: IfRenderComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'data', component: ParentDataComponent},
  {path: 'twoWay', component: TwoWayBindingComponent},

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}