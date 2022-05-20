import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { TableGenderComponent } from './table/table-gender/table-gender.component';
import { TableStatusComponent } from './table/table-status/table-status.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ShowValidateComponent } from './show-validate/show-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableNameComponent,
    TableGenderComponent,
    TableStatusComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule //FormModule được sử dụng ở cac component đã có ở trên
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
