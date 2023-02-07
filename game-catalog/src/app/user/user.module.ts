import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule, 
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
})
export class UserModule {}
