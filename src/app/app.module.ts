import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolderComponent } from './components/holder/holder.component';
import { DataSourceComponent } from './components/holder/data-source/data-source.component';
import { DragDropComponent } from './components/holder/drag-drop/drag-drop.component';
import { SearchComponent } from './components/holder/search/search.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DragDropFileUploadDirective } from './directives/drag-drop-file-upload.directive';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HolderComponent,
    DataSourceComponent,
    DragDropComponent,
    SearchComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DragDropFileUploadDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
