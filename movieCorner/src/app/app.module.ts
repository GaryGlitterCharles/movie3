import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import en from '@angular/common/locales/en';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MaterialModule } from './shared/material.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideNavComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    NgZorroAntdModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  entryComponents :[DialogBoxComponent],
  providers: [ { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
