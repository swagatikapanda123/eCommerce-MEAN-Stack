import { MyRegisterComponent } from "./register.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { CardModule } from "../../shared/modules/card/card.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [{ path: "", component: MyRegisterComponent }];

@NgModule({
  declarations: [MyRegisterComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class RegisterModule {}
