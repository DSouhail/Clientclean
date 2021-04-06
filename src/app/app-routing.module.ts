import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSourceComponent } from './components/holder/data-source/data-source.component';
import { HolderComponent } from './components/holder/holder.component';
import { DragDropComponent } from './components/holder/drag-drop/drag-drop.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'holder' },
  { path: 'holder', component: HolderComponent },
  { path: 'dragdrop', component: DragDropComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
