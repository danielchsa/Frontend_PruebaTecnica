import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersComponent, NavbarComponent, HomeComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [NavbarComponent],
})
export class UserModule {}
