import { MyLoginComponent } from "./login.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CardModule } from "../../shared/modules/card/card.module";

const routes: Routes = [{ path: "", component: MyLoginComponent }];

@NgModule({
  declarations: [MyLoginComponent],
  imports: [CommonModule, CardModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
